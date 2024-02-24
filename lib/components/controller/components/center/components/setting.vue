<template>
  <popover :disabled="!state.show">
    <template #content>
      <div class="bili-danma-setting-container">
        <div>按类型屏蔽</div>
        <div class="bili-setting-type">
          <div @click="state.visible.move = !state.visible.move">
            <div>
              <i-svg-danmaku-move-on v-if="state.visible.move" />
              <i-svg-danmaku-move-off v-else />
            </div>
            滚动
          </div>
          <div @click="state.visible.top = !state.visible.top">
            <div>
              <i-svg-danmaku-top-on v-if="state.visible.top" />
              <i-svg-danmaku-top-off v-else />
            </div>
            顶部
          </div>
          <div @click="state.visible.bottom = !state.visible.bottom">
            <div>
              <i-svg-danmaku-bottom-on v-if="state.visible.bottom" />
              <i-svg-danmaku-bottom-off v-else />
            </div>
            底部
          </div>
          <div @click="state.visible.color = !state.visible.color">
            <div>
              <i-svg-danmaku-color-on v-if="state.visible.color" />
              <i-svg-danmaku-color-off v-else />
            </div>
            彩色
          </div>
        </div>
        <slot name="extra"></slot>

        <div class="bili-setting-slider">
          不透明度
          <slider v-model:value="state.opacity" :min="0.1" :max="1" />
          <div>
            {{ `${Math.ceil(state.opacity * 100)}%` }}
          </div>
        </div>
        <div class="bili-setting-slider">
          显示区域
          <slider v-model:value="state.displaySize" :min="0.25" :max="1" />
          <div>
            {{ `${Math.ceil(state.displaySize * 100)}%` }}
          </div>
        </div>
        <div class="bili-setting-slider">
          弹幕字号
          <slider v-model:value="state.fontRatio" :min="0.5" :max="1.5" />
          <div>
            {{ `${Math.ceil(state.fontRatio * 100)}%` }}
          </div>
        </div>
        <div class="bili-setting-slider">
          弹幕速度
          <slider v-model:value="state.speed" :min="0.5" :max="2" />
          <div>
            {{ `${Math.ceil(state.speed * 100)}%` }}
          </div>
        </div>
        <div class="bili-divider"></div>
        <div class="bili-setting-bold">
          <div>
            <div
              :style="{ backgroundColor: state.fontBold ? '#00aeec' : 'white' }"
              @click="state.fontBold = !state.fontBold"
            >
              <div v-show="state.fontBold" class="">√</div>
            </div>
          </div>
          <div>粗体</div>
        </div>
      </div>
    </template>

    <i-svg-danmaku-setting
      class="bili-setting-trigger"
      :class="{ 'cursor-no-drop': !state.show }"
      :style="{
        color: state.show ? (isFullscreen ? 'white' : '#666') : '#ccc',
      }"
    />
  </popover>
</template>

<script lang="ts" setup>
import { Popover, Slider } from "@/components/common";
import { useDanmakuStore } from "@/components/danmaku/use-danmaku";
import { useControls } from "@/service";

const { state } = useDanmakuStore();
const { state: controlState } = useControls();
const { isFullscreen } = controlState.fullscreenControls!;
</script>

<style lang="scss" scoped>
@import "@/style.scss";
.bili-danma-setting-container {
  width: 300px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;

  .bili-setting-type {
    @extend .flex-y-center;
    margin-top: 5px;

    & > div {
      margin-right: 20px;
      text-align: center;
      cursor: pointer;

      & > div {
        font-size: 28px;
      }
    }
  }

  .bili-setting-slider {
    @extend .flex-between-center;
    margin-top: 10px;

    & > div:nth-last-child(2) {
      width: 160px;
    }
    & > div:last-child {
      width: 35px;
      text-align: end;
    }
  }

  .bili-divider {
    height: 0.5px;
    width: 100%;
    margin-top: 7px;
    background-color: #ffffff50;
  }

  .bili-setting-bold {
    @extend .flex-y-center;
    margin-top: 7px;

    & > div:first-child {
      width: 14px;

      & > div {
        position: relative;
        cursor: pointer;
        width: 12px;
        height: 12px;
        position: relative;
        top: 0.5px;
        border-radius: 1px;
        margin-left: 2.5px;
        margin-right: 2.5px;

        & > div {
          position: absolute;
          top: -2px;
          font-weight: bold;
          left: 2px;
          transform: scaleX(140%) scaleY(80%);
        }
      }
    }
    & > div:last-child {
      margin-left: 5px;
    }
  }
}

.bili-setting-trigger {
  font-size: 24px;

  &.cursor-no-drop {
    cursor: no-drop;
  }
}
</style>
