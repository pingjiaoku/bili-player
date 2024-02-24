<template>
  <div class="bili-control-right">
    <popover class="bili-control-item">
      <template #content>
        <choose v-model:value="rate" :options="options" />
      </template>
      <div class="bili-control-rate-text">
        {{ rate === 1 ? "倍数" : `${rate}x` }}
      </div>
    </popover>
    <popover class="bili-control-item-else">
      <template #content>
        <div v-show="!muted">
          <div class="bili-control-volume-text">
            {{ Math.floor(volume * 100) }}
          </div>
          <slider-vertical
            v-model:value="volume"
            class="bili-control-volume-slider"
          />
        </div>
      </template>
      <div class="bili-control-icon" @click="muted = !muted">
        <i-svg-mute v-if="muted" />
        <i-svg-volume v-else />
      </div>
    </popover>
    <tooltip
      class="bili-control-item-else"
      :content="isPictureInPicture ? '退出画中画' : '开启画中画'"
    >
      <div class="bili-control-icon" @click="togglePictureInPicture">
        <i-svg-pic-in-pic-enter v-if="!isPictureInPicture" />
        <i-svg-pic-in-pic-exit v-else />
      </div>
    </tooltip>
    <tooltip
      class="bili-control-item-else"
      :content="isFullscreen ? '退出全屏(f)' : '进入全屏(f)'"
    >
      <div class="bili-control-icon bili-icon-larger" @click="toggle">
        <i-svg-fullscreen-enter v-if="!isFullscreen" />
        <i-svg-fullscreen-exit v-else />
      </div>
    </tooltip>
  </div>
</template>

<script lang="ts" setup>
import { Popover, Tooltip, SliderVertical, Choose } from "@/components/common";
import { useControls } from "@/service";

const { state: controlState } = useControls();
const { rate, muted, volume, isPictureInPicture, togglePictureInPicture } =
  controlState.videoControls!;
const { isFullscreen, toggle } = controlState.fullscreenControls!;

const options = [
  { label: "2.0x", value: 2 },
  { label: "1.5x", value: 1.5 },
  { label: "1.25x", value: 1.25 },
  { label: "1.0x", value: 1 },
  { label: "0.75x", value: 0.75 },
  { label: "0.5x", value: 0.5 },
];
</script>

<style lang="scss" scoped>
@import "@/style.scss";
.bili-control-right {
  @extend .flex-y-center;

  .bili-control-item {
    margin-right: 14px;

    .bili-control-rate-text {
      @extend .flex-center;
      height: 100%;
      width: 30px;
      text-wrap: nowrap;
    }
  }
  .bili-control-item-else {
    margin-right: 14px;
    width: 24px;

    .bili-control-volume-text {
      font-size: 12px;
      text-align: center;
    }
    .bili-control-volume-slider {
      height: 80px;
      padding-bottom: 10px;
      padding-top: 5px;
    }
  }

  .bili-control-icon {
    @extend .flex-center;
    cursor: pointer;
    font-size: 24px;
  }
  .bili-control-icon.bili-icon-larger {
    font-size: 28px;
  }
}
</style>
