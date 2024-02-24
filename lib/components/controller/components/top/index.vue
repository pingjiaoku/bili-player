<template>
  <div
    ref="processRef"
    class="bili-progress-container"
    @mousemove="(e) => (mouseOffsetX = e.offsetX)"
    @click="onMouseClick"
  >
    <!-- 加载进度 -->
    <div
      v-for="(range, index) in buffered"
      :key="index"
      class="bili-progress-buffer"
      :style="{
        left: `${(range[0] / duration) * width}px`,
        width: `${((range[1] - range[0]) / duration) * width}px`,
      }"
    ></div>
    <!-- 播放进度 -->
    <div
      class="bili-progress-current"
      :style="{ width: `${(currentTime / duration) * 100}%` }"
    >
      <div class="bili-progress-icon">
        <i-svg-process />
      </div>
    </div>
    <!-- 跳转时间展示 -->
    <div
      class="bili-progress-move"
      :style="{
        left: `${mouseOffsetX - 25}px`,
      }"
    >
      <div class="bili-progress-popup-time">
        {{ numberToTime((mouseOffsetX / width) * duration) }}
      </div>
      <div class="bili-progress-move-indicator"></div>
    </div>
    <div class="bili-progress-action-area"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useElementBounding } from "@vueuse/core";
import { numberToTime } from "@/service/utils";
import { useDanmakuStore } from "@/components/danmaku/use-danmaku";
import { useControls } from "@/service";

const processRef = ref<HTMLDivElement>();
const { state } = useControls();
const { currentTime, duration, buffered } = state.videoControls!;
const { width } = useElementBounding(processRef);

const mouseOffsetX = ref(0);
const danmakuStore = useDanmakuStore();

const onMouseClick = (e: MouseEvent) => {
  currentTime.value = (e.offsetX / width.value) * duration.value;
  danmakuStore.seek();
};
</script>

<style lang="scss" scoped>
.bili-progress-container {
  height: 2px;
  background-color: #ffffff30;
  cursor: pointer;
  position: relative;
  transition: height 300ms;
  &:hover {
    height: 4px;
  }

  .bili-progress-buffer {
    height: 100%;
    background-color: #ffffff50;
    position: absolute;
    pointer-events: none;
  }
  .bili-progress-current {
    height: 100%;
    background-color: #00aeec;
    position: absolute;
    left: 0;
    top: 0;
    transition: width 300ms;
    pointer-events: none;
  }

  .bili-progress-icon {
    height: 18px;
    position: absolute;
    right: -8px;
    bottom: -7px;
    transition: all 300ms;
    opacity: 0;

    & > * {
      font-size: 18px !important;
    }
  }
  .bili-progress-move {
    position: absolute;
    top: -37px;
    pointer-events: none;
    opacity: 0;

    .bili-progress-popup-time {
      background-color: #00000090;
      width: 50px;
      text-align: center;
      border-radius: 3px;
      margin-bottom: 10px;
    }
    .bili-progress-move-indicator {
      height: 16px;
      width: 0;
      border-width: 4px;
      border-top-color: #00aeec;
      border-bottom-color: #00aeec;
      border-left-color: #00000000;
      border-right-color: #00000000;
      margin-left: auto;
      margin-right: auto;
    }
  }
  &:hover .bili-process-jump,
  &:hover .bili-progress-icon {
    opacity: 1;
  }

  .bili-progress-action-area {
    position: absolute;
    height: 18px;
    bottom: -6px;
    width: 100%;
  }
}
</style>
