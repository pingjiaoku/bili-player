import { onMounted, onUnmounted } from "vue";
import { useDanmakuStore } from "../components/danmaku/use-danmaku";
import { useControls } from ".";

export const useHotKey = (enable: boolean) => {
  if (!enable) return;
  const danmakuStore = useDanmakuStore();

  const bindEvent = (event: KeyboardEvent) => {
    const { state: controlState } = useControls();
    const { playing, volume, muted, currentTime } = controlState.videoControls!;

    // 编辑时不触发hotkey
    const tag = document.activeElement?.tagName.toUpperCase();
    if (tag && ["INPUT", "TEXTAREA"].includes(tag)) return;
    const editable = document.activeElement?.getAttribute("contenteditable");
    if (editable && ["", "true"].includes(editable)) return;

    switch (event.key) {
      // 播放/暂停
      case " ":
        event.preventDefault();
        playing.value = !playing.value;
        break;

      // 开启/关闭静音
      case "m":
        event.preventDefault();
        muted.value = !muted.value;
        break;

      // 音量 + 10%
      case "ArrowUp":
        event.preventDefault();
        if (muted.value) muted.value = false;
        volume.value = volume.value >= 0.9 ? 1 : volume.value + 0.1;
        break;

      // 音量 - 10%
      case "ArrowDown":
        event.preventDefault();
        if (muted.value) muted.value = false;
        volume.value = volume.value <= 0.1 ? 0 : volume.value - 0.1;
        break;

      // 快退 5s
      case "ArrowLeft":
        event.preventDefault();
        currentTime.value = currentTime.value <= 5 ? 0 : currentTime.value - 5;
        danmakuStore.seek();
        break;

      // 单击快进 5s / 长按 3倍数
      case "ArrowRight":
        event.preventDefault();
        arrowRightDown();
        break;

      // 进入/退出全屏
      case "f":
        event.preventDefault();
        controlState.fullscreenControls?.toggle();
        break;

      // 关闭/开启弹幕
      case "d":
        event.preventDefault();
        if (danmakuStore.state.show) {
          danmakuStore.hide();
        } else {
          danmakuStore.show();
        }
        break;
    }
  };

  let originRate: number;
  let isPaused = false;
  let pressTime = 0;
  let pressTimer: NodeJS.Timeout;

  const arrowRightDown = () => {
    const { state } = useControls();
    const { playing, rate } = state.videoControls!;

    if (rate.value !== 3) {
      pressTime = new Date().getTime();
      originRate = rate.value;
    }

    if (!pressTimer) {
      pressTimer = setTimeout(() => {
        isPaused = !playing.value;
        if (isPaused) playing.value = true;
        rate.value = 3;
      }, 500);
    }
  };

  const arrowRightUp = (e: KeyboardEvent) => {
    if (e.key !== "ArrowRight") return;

    const { state } = useControls();
    const { playing, currentTime, duration, rate } = state.videoControls!;

    if (pressTimer) {
      clearTimeout(pressTimer);
    }

    if (isPaused) playing.value = false;

    rate.value = originRate;

    if (new Date().getTime() - pressTime < 500) {
      if (currentTime.value > duration.value - 5) {
        currentTime.value = duration.value;
      } else {
        currentTime.value = currentTime.value + 5;
      }
      danmakuStore.seek();
    }
  };

  onMounted(() => {
    window.addEventListener("keydown", bindEvent);
    window.addEventListener("keyup", arrowRightUp);
  });

  onUnmounted(() => {
    window.removeEventListener("keydown", bindEvent);
    window.removeEventListener("keyup", arrowRightUp);
  });
};
