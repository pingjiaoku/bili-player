import { reactive } from "vue";
import { BiliDanmakuItem, BiliDanmakuProps } from "@/types";
import { useControls } from "@/service";

type RequiredProps = {
  [P in keyof BiliDanmakuProps]-?: BiliDanmakuProps[P];
};
interface State extends RequiredProps {
  container?: HTMLDivElement;
  items: BiliDanmakuItem[];
  itemIndex: number;
  tunnels: Record<string, HTMLDivElement[]>[];
  frameId: number;
  defaultFontSize: number;
  whites: string[];
  types: string[];
  canvasCtx?: CanvasRenderingContext2D;
}

const state = reactive<State>({
  show: true,
  fontRatio: 1,
  fontBold: false,
  speed: 1,
  opacity: 1,
  displaySize: 1,
  items: [],
  itemIndex: 0,
  tunnels: [{}, {}, {}],
  visible: {
    move: true,
    top: true,
    bottom: true,
    color: true,
  },
  sendCallback: () => {},
  filter: () => true,

  frameId: 0,
  defaultFontSize: 24,
  types: ["move", "top", "bottom"],
  whites: ["#fff", "#ffffff", "#ffffffff", "white"],
});

const init = (container: HTMLDivElement, props: BiliDanmakuProps) => {
  state.container = container;

  state.show = props.show ?? state.show;
  state.fontRatio = props.fontRatio ?? state.fontRatio;
  state.fontBold = props.fontBold ?? state.fontBold;
  state.speed = props.speed ?? state.speed;
  state.opacity = props.opacity ?? state.opacity;
  state.displaySize = props.displaySize ?? state.displaySize;
  state.visible = props.visible ?? state.visible;

  state.filter = props.filter ?? state.filter;
  state.sendCallback = props.sendCallback ?? state.sendCallback;

  _measure("");
  _sort();
  _load();
};

const clear = () => {
  state.tunnels = [{}, {}, {}];
  state.itemIndex = 0;
  if (state.container) state.container.innerHTML = "";
};

const hide = () => {
  state.show = false;
  clear();
  window.cancelAnimationFrame(state.frameId);
};

const seek = () => {
  const { videoControls } = useControls().state;
  if (!videoControls) return;
  const currentTime = videoControls.currentTime.value;
  clear();
  for (let i = 0; i < state.items.length; i++) {
    const item = state.items[i];
    if (item.time >= currentTime) {
      state.itemIndex = i;
      break;
    }
    state.itemIndex = state.items.length;
  }
};

const show = () => {
  seek();
  state.show = true;
};

const send = async (item: BiliDanmakuItem) => {
  await state.sendCallback?.(item);

  state.items.splice(state.itemIndex, 0, item);
  state.itemIndex++;
  item.content = _htmlEncode(item.content);
  item.border = true;
  _draw([item]);
};

const resize = () => {
  if (!state.container) return;
  const danWidth = state.container.offsetWidth;
  const items = state.container.getElementsByClassName("bili-danmaku-item");
  for (let i = 0; i < items.length; i++) {
    (items[i] as HTMLElement).style.transform = `translateX(-${danWidth}px)`;
  }
};

const setDanmakus = (items: BiliDanmakuItem[]) => {
  state.items = items;
  _sort();
  seek();
};

const _sort = () => {
  state.items.sort((a, b) => a.time - b.time);
};

const _load = () => {
  state.frameId = window.requestAnimationFrame(() => {
    _frame();
  });
};

const _frame = () => {
  const { videoControls } = useControls().state;
  if (!videoControls) return;
  const isPlaying = videoControls.playing.value;
  const currentTime = videoControls.currentTime.value;
  if (state.items.length && isPlaying && state.show) {
    let item = state.items[state.itemIndex];
    const tDan: BiliDanmakuItem[] = [];

    while (item && currentTime > item.time) {
      tDan.push(item);
      item = state.items[++state.itemIndex];
    }

    _draw(tDan);
  }
  state.frameId = window.requestAnimationFrame(() => {
    _frame();
  });
};

const _draw = async (items: BiliDanmakuItem[]) => {
  if (!state.show) return;
  if (!state.container) return;

  const fontSize = state.defaultFontSize * state.fontRatio;
  const danWidth = state.container.offsetWidth;
  const danHeight = state.container.offsetHeight;
  const itemY = (danHeight * state.displaySize) / fontSize;

  const danItemRight = (ele: HTMLDivElement) => {
    const conRight = state.container!.getBoundingClientRect().right;
    const eleWidth = ele.offsetWidth || +ele.style.width;
    const eleRight = ele.getBoundingClientRect().right || conRight + eleWidth;
    return conRight - eleRight || -1;
  };

  const danSpeed = (width: number) => (danWidth + width) / 5;

  const getTunnel = (ele: HTMLDivElement, type: number, width?: number) => {
    const tmp = width ? danWidth / danSpeed(width) : 0;

    for (let i = 0; i < itemY; i++) {
      const tunnel = state.tunnels[type][i.toString()];
      if (tunnel && tunnel.length) {
        if (type !== 0) continue;

        for (let j = 0; j < tunnel.length; j++) {
          const danRight = danItemRight(tunnel[j]) - 10;
          const tmpSpeed = tmp * danSpeed(+tunnel[j].style.width);

          if (danRight <= danWidth - tmpSpeed || danRight <= 0) {
            break;
          }
          if (j === tunnel.length - 1) {
            tunnel.push(ele);
            ele.addEventListener("animationend", () => {
              tunnel.splice(0, 1);
            });
            return i % itemY;
          }
        }
      } else {
        state.tunnels[type][i.toString()] = [ele];
        ele.addEventListener("animationend", () => {
          state.tunnels[type][i.toString()].splice(0, 1);
        });
        return i % itemY;
      }
    }
    return -1;
  };

  const docFragment = document.createDocumentFragment();

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let isWhite = state.whites.includes(item.color.toLowerCase());

    // 类型屏蔽
    if (!state.visible.move && item.type === 0) continue;
    if (!state.visible.top && item.type === 1) continue;
    if (!state.visible.bottom && item.type === 2) continue;
    if (!state.visible.color && !isWhite) continue;

    // 自定义过滤
    if (state.filter) {
      const isPass = await state.filter(item);
      if (!isPass) continue;
    }

    if (!item.color) item.color = "#FFFFFF";

    const ele = document.createElement("div");
    ele.classList.add("bili-danmaku-item");
    if (!isWhite) ele.classList.add("bili-danmaku-color");
    const typeName = state.types[item.type];
    ele.classList.add(`bili-danmaku-${typeName}`);

    const text = _htmlEncode(item.content);
    if (item.border) {
      ele.innerHTML = `<div style="border: 1px solid #66ffff; line-height: 1">${text}</div>`;
    } else {
      ele.innerHTML = `<div>${text}</div>`;
    }
    ele.style.fontSize = fontSize + "px";
    if (state.fontBold) ele.style.fontWeight = "bold";
    ele.style.opacity = state.opacity.toString();
    ele.style.color = item.color;
    ele.addEventListener("animationend", () => {
      state.container!.removeChild(ele);
    });

    const itemWidth = _measure(text);
    let tunnel: number;
    switch (item.type) {
      // move
      case 0:
        tunnel = getTunnel(ele, item.type, itemWidth);
        if (tunnel >= 0) {
          ele.style.width = `${itemWidth + 1}px`;
          ele.style.top = `${(fontSize + 2) * tunnel}px`;
          ele.style.transform = `translateX(-${danWidth}px)`;
        }
        break;

      // top
      case 1:
        tunnel = getTunnel(ele, item.type);
        if (tunnel >= 0) {
          ele.style.top = `${(fontSize + 2) * tunnel}px`;
        }
        break;

      // bottom
      case 2:
        tunnel = getTunnel(ele, item.type);
        if (tunnel >= 0) {
          ele.style.bottom = `${(fontSize + 2) * tunnel}px`;
        }
        break;

      default:
        tunnel = -1;
        console.error(`Can't handled danmaku type: ${item.type}`);
    }

    if (tunnel >= 0) {
      ele.style.animationDuration = _danAnimation(item.type);
      docFragment.appendChild(ele);
    }
  }

  state.container.appendChild(docFragment);
  return docFragment;
};

const _htmlEncode = (text: string) => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2f;");
};

const _measure = (text: string) => {
  if (!state.container) return -1;
  if (!state.canvasCtx) {
    const measureStyle = getComputedStyle(
      state.container.getElementsByClassName("bili-danmaku-item")[0],
      null
    );
    state.canvasCtx = document.createElement("canvas").getContext("2d")!;
    state.canvasCtx.font = measureStyle.getPropertyValue("font");
  }
  const fontSize = state.defaultFontSize * state.fontRatio;
  state.canvasCtx.font = `${fontSize}px Arial`;
  return state.canvasCtx.measureText(text).width;
};

const _danAnimation = (type: number) => {
  const { fullscreenControls } = useControls().state;
  const isFullscreen = fullscreenControls?.isFullscreen.value;
  const animations = [
    `${(isFullscreen ? 8 : 5) / state.speed}s`,
    `${(isFullscreen ? 4 : 3) / state.speed}s`,
    `${(isFullscreen ? 4 : 3) / state.speed}s`,
  ];
  return animations[type];
};

export const useDanmakuStore = () => ({
  state,
  init,
  show,
  hide,
  seek,
  send,
  clear,
  resize,
  setDanmakus,
});
