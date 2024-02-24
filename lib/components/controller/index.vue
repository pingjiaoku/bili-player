<template>
  <div class="bili-control-container">
    <!-- 进度条 -->
    <controller-top class="bili-control-process" :class="{ 'op-0': hidden }" />
    <div
      class="bili-control-send"
      :class="{ 'op-0': hidden }"
    >
      <!-- left-controls -->
      <controller-left />
      <!-- 弹幕输入框 -->
      <controller-center v-show="isFullscreen" class="bili-control-input">
        <template v-if="$slots.settingExtra?.()" #setting-extra="scopeData">
          <slot name="setting-extra" v-bind="scopeData"></slot>
        </template>
      </controller-center>
      <!-- right-controls -->
      <controller-right />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ControllerTop,
  ControllerLeft,
  ControllerRight,
  ControllerCenter,
} from "./components";
import { useControls } from "@/service";

defineProps<{ hidden: boolean }>();

const { state } = useControls();
const { isFullscreen } = state.fullscreenControls!;
</script>

<style lang="scss" scoped>
@import "@/style.scss";
.bili-control-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-image: linear-gradient(to bottom, #00000000, #00000090);
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .bili-control-process {
    transition: all 300ms;
    transition-delay: 100ms;
  }
  .bili-control-send {
    @extend .flex-between-center;
    flex-wrap: nowrap;
    height: 51px;
    transition: all 300ms;

    .bili-control-input {
      max-width: 500px;
    }
  }
}
</style>
