<template>
  <div class="bili-control-center">
    <div>
      <tooltip :content="state.show ? '关闭弹幕(d)' : '开启弹幕(d)'">
        <i-svg-danmaku-on
          v-if="state.show"
          class="bili-control-icon"
          :style="{ color: isFullscreen ? 'white' : '#666' }"
          @click="danmakuToggle"
        />
        <i-svg-danmaku-off
          v-else
          class="bili-control-icon"
          :style="{ color: isFullscreen ? 'white' : '#666' }"
          @click="danmakuToggle"
        />
      </tooltip>
    </div>
    <div>
      <bili-danmaku-setting>
        <template v-if="$slots.settingExtra?.()" #extra="scopeData">
          <slot name="setting-extra" v-bind="scopeData"></slot>
        </template>
      </bili-danmaku-setting>
    </div>
    <div>
      <bili-danmaku-send />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BiliDanmakuSetting, BiliDanmakuSend } from "./components";
import { Tooltip } from "@/components/common";
import { useDanmakuStore } from "@/components/danmaku/use-danmaku";
import { useControls } from "@/service";

const { state, hide, show } = useDanmakuStore();
const { state: controlState } = useControls();
const { isFullscreen } = controlState.fullscreenControls!;

const danmakuToggle = () => {
  if (state.show) {
    hide();
  } else {
    show();
  }
};
</script>

<style lang="scss" scoped>
@import "@/style.scss";
.bili-control-center {
  @extend .flex-y-center;
  font-size: 12px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;

  & > div {
    margin-left: 5px;
    margin-right: 5px;
  }
  & > div:last-child {
    flex-grow: 1;
  }

  .bili-control-icon {
    font-size: 24px;
  }
}
</style>
