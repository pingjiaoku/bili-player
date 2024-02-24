<template>
  <div class="bili-container">
    <div
      ref="containerRef"
      class="bili-main"
      @mouseenter="onMouseEnter"
      @mouseleave="hiddenController = true"
      @mousemove="onMouseMove"
      @contextmenu.prevent.stop="onRightCilck"
    >
      <!-- mask -->
      <div
        class="bili-container-mask"
        :class="{ 'op-0': hiddenController && !isOnController }"
      >
        <slot name="header-mask"></slot>
      </div>
      <!-- video-wrap -->
      <bili-video v-bind="props.video" />
      <!-- danmaku -->
      <bili-danmaku v-bind="props.danmaku" />
      <!-- controller -->
      <bili-controller
        :hidden="hiddenController && !isOnController"
        @mouseenter="isOnController = true"
        @mouseleave="isOnController = false"
      >
        <template v-if="$slots.settingExtra?.()" #setting-extra="scopeData">
          <slot name="setting-extra" v-bind="scopeData"></slot>
        </template>
      </bili-controller>
      <!-- 快捷键说明 -->
      <bili-hotkey-des v-model:show="hotkeyDesVisible" />
    </div>
    <div class="bili-outer-control-container">
      <div class="bili-video-info">
        <slot name="wrapper-extra"></slot>
        已填装 {{ danmaState.items.length }} 条弹幕
      </div>
      <controller-center class="bili-outer-control">
        <template v-if="$slots.settingExtra?.()" #setting-extra="scopeData">
          <slot name="setting-extra" v-bind="scopeData"></slot>
        </template>
      </controller-center>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  BiliVideo,
  BiliDanmaku,
  BiliController,
  BiliHotkeyDes,
} from "./components";
import { BiliPlayerProps } from "./types";
import { useFullscreen } from "@vueuse/core";
import { ControllerCenter } from "./components/controller/components";
import { useControls, useHotKey, useExpose } from "./service";
import { useDanmakuStore } from "./components/danmaku/use-danmaku";

defineOptions({ name: "bili-player" });
const props = withDefaults(defineProps<BiliPlayerProps>(), {
  hotkey: true,
});
const hotkeyDesVisible = ref(false);

// 注册全屏控制器
const containerRef = ref<HTMLDivElement>();
const { state: controlState } = useControls();
controlState.fullscreenControls = useFullscreen(containerRef);

const { state: danmaState } = useDanmakuStore();

const isOnController = ref(false);
const hiddenController = ref(false);
const onMouseEnter = () => {
  hiddenController.value = false;
};
let timer: NodeJS.Timeout;
const onMouseMove = () => {
  hiddenController.value = false;
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    hiddenController.value = true;
  }, 1000);
};

const onRightCilck = () => {
  hotkeyDesVisible.value = true;
};

useHotKey(props.hotkey);

defineExpose(useExpose());
</script>

<style lang="scss" scoped>
@import "@/style.scss";
.bili-main {
  position: relative;
  background-color: black;
  width: 100%;
  height: 100%;
  user-select: none;

  .bili-container-mask {
    position: absolute;
    top: 0;
    width: 100%;
    background-image: linear-gradient(to top, #00000000, #00000055);
    transition: all 300ms;
  }
}

.bili-outer-control-container {
  @extend .flex-between-center;
  user-select: none;

  .bili-video-info {
    font-size: 13px;
    margin-left: 10px;
    margin-right: 10px;
    text-wrap: nowrap;
  }
  .bili-outer-control {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 30px;
    color: white;
  }
}
</style>

<style lang="scss">
.bili-container {
  * {
    box-sizing: border-box;
    border-width: 0;
  }
}
</style>
