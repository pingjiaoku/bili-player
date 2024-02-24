<template>
  <div
    ref="danmakuContainerRef"
    class="bili-danmaku-container"
    :class="{
      'bili-danmaku-paused': !playing,
      'bili-danmaku-move-hide': !state.visible.move,
      'bili-danmaku-top-hide': !state.visible.top,
      'bili-danmaku-bottom-hide': !state.visible.bottom,
      'bili-danmaku-color-hide': !state.visible.color,
    }"
  >
    <div class="bili-danmaku-item bili-danmaku-item--demo"></div>
  </div>
</template>

<script lang="ts" setup>
import { useDanmakuStore } from "./use-danmaku";
import { onMounted, onUnmounted, ref } from "vue";
import { BiliDanmakuProps } from "@/types";
import { useControls } from "@/service";

const { state: controlState } = useControls();
const { playing } = controlState.videoControls!;

const props = withDefaults(defineProps<BiliDanmakuProps>(), {
  show: true,
  speed: 1,
  opacity: 1,
  fontRatio: 1,
  fontBold: false,
  displaySize: 1,
  shieldEnable: true,
  shield: () => [],
  items: () => [],
});

const danmakuContainerRef = ref<HTMLDivElement>();

const { state, init, resize } = useDanmakuStore();

onMounted(() => {
  init(danmakuContainerRef.value!, props);
  window.addEventListener("resize", resize);
});
onUnmounted(() => {
  window.removeEventListener("resize", resize);
});
</script>

<style lang="scss">
.bili-danmaku-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}
.bili-danmaku-paused,
.bili-danmaku-paused .bili-danmaku-item {
  animation-play-state: paused;
}

.bili-danmaku-move-hide .bili-danmaku-move {
  visibility: hidden !important;
}
.bili-danmaku-top-hide .bili-danmaku-top {
  visibility: hidden !important;
}
.bili-danmaku-bottom-hide .bili-danmaku-bottom {
  visibility: hidden !important;
}
.bili-danmaku-color-hide .bili-danmaku-color {
  visibility: hidden !important;
}

.bili-danmaku-item {
  color: white;
  position: absolute;
  display: inline-block;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);

  &--demo {
    position: absolute;
    visibility: hidden;
  }
}
.bili-danmaku-move {
  position: absolute;
  right: 0;
  transform: translateX(100%);

  will-change: transform;
  animation-name: danmaku-move;
  animation-timing-function: linear;
}
@keyframes danmaku-move {
  from {
    transform: translateX(100%);
  }
}
.bili-danmaku-top,
.bili-danmaku-bottom {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  visibility: hidden;

  will-change: visibility;
  animation-name: danmaku-center;
  animation-timing-function: linear;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
</style>
