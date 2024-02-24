<template>
  <div class="bili-send-container">
    <popover v-if="state.show" :keep-open="keepOpenSendOps">
      <template #content>
        <div class="bili-send-popup-content">
          <div>模式</div>
          <div class="bili-send-popup-item1 bili-send-color">
            <div @click="danmakuitem.type = 0">
              <i-svg-danmaku-move-on
                :class="{ 'active-color': danmakuitem.type === 0 }"
              />
              <div>滚动</div>
            </div>
            <div @click="danmakuitem.type = 1">
              <i-svg-danmaku-top-on
                :class="{ 'active-color': danmakuitem.type === 1 }"
              />
              <div>顶部</div>
            </div>
            <div @click="danmakuitem.type = 2">
              <i-svg-danmaku-bottom-on
                :class="{ 'active-color': danmakuitem.type === 2 }"
              />
              <div>底部</div>
            </div>
          </div>
          <div class="bili-send-popup-title">颜色</div>
          <div class="bili-send-popup-item1">
            <input
              v-model="danmakuitem.color"
              :maxlength="7"
              class="bili-send-color-input"
              @input="onColorInput"
              @focus="keepOpenSendOps = true"
              @blur="keepOpenSendOps = false"
            />
            <div
              class="bili-send-color-display"
              :style="{ background: danmakuitem.color }"
            ></div>
          </div>
          <div class="bili-send-popup-item2">
            <div
              v-for="color in colors1"
              :key="color"
              :class="{ 'bili-send-color-active': danmakuitem.color === color }"
              :style="{
                background: color,
                boxShadow:
                  danmakuitem.color === color ? `0 0 4px ${color}` : '',
              }"
              @click="danmakuitem.color = color"
            ></div>
          </div>
          <div class="bili-send-popup-item2">
            <div
              v-for="color in colors2"
              :key="color"
              :class="{ 'bili-send-color-active': danmakuitem.color === color }"
              :style="{
                background: color,
                boxShadow:
                  danmakuitem.color === color ? `0 0 4px ${color}` : '',
              }"
              @click="danmakuitem.color = color"
            ></div>
          </div>
        </div>
      </template>
      <i-svg-text-color
        class="bili-send-icon-setting"
        :style="{ color: isFullscreen ? 'white' : '#777' }"
      />
    </popover>
    <form @submit="sendDanmku" class="bili-send-form">
      <input
        v-model="danmakuitem.content"
        :style="{ color: isFullscreen ? 'white' : 'black' }"
        :placeholder="state.show ? '发个友善的弹幕见证当下' : '已关闭弹幕'"
        :disabled="!state.show || isCounting"
      />
      <button
        type="submit"
        :style="{
          backgroundColor: state.show && !isCounting ? '#00aeec' : '#bbb',
          cursor: state.show && !isCounting ? 'pointer' : 'not-allowed',
        }"
      >
        {{ isCounting ? `${counts}秒` : "发送" }}
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Popover } from "@/components/common";
import { useControls, useCountDown } from "@/service";
import { BiliDanmakuItem } from "@/types";
import { useDanmakuStore } from "@/components/danmaku/use-danmaku";

const { state, send } = useDanmakuStore();
const { state: controlState } = useControls();
const { isFullscreen } = controlState.fullscreenControls!;

const danmakuitem = ref<BiliDanmakuItem>({
  content: "",
  type: 0,
  color: "#FFFFFF",
  time: 0,
});
const keepOpenSendOps = ref(false);

const loading = ref(false);
const { counts, isCounting, start } = useCountDown(5);
const sendDanmku = async (e: Event) => {
  e.preventDefault();
  if (isCounting.value) return;
  if (loading.value) return;
  loading.value = true;

  try {
    if (![4, 7].includes(danmakuitem.value.color.length)) {
      danmakuitem.value.color = "#FFFFFF";
    }
    const {videoControls} = useControls().state;
    danmakuitem.value.time = videoControls!.currentTime.value;
    await send(danmakuitem.value);
    danmakuitem.value = {
      content: "",
      type: 0,
      color: "#FFFFFF",
      time: 0,
    };
    start();
  } finally {
    loading.value = false;
  }
};

let lastColor = danmakuitem.value.color;
const hexCharPattern = /^[0-9a-f]$/i;
const onColorInput = (e: Event) => {
  const event = e as { target: { value?: string }; data?: string };
  const value: string = event.target.value || "";
  if (event.data) {
    if (!hexCharPattern.test(event.data)) {
      danmakuitem.value.color = lastColor;
      return;
    }
  }

  if (value[0] !== "#") {
    danmakuitem.value.color = lastColor;
    return;
  }
  danmakuitem.value.color = value;
  lastColor = value;
};

const colors1 = [
  "#FE0302",
  "#FF7204",
  "#FFAA02",
  "#FFD302",
  "#FFFF00",
  "#A0EE00",
  "#00CD00",
];
const colors2 = [
  "#019899",
  "#019899",
  "#89D5FF",
  "#CC0273",
  "#222222",
  "#9B9B9B",
  "#FFFFFF",
];
</script>

<style lang="scss" scoped>
@import "@/style.scss";
.bili-send-container {
  @extend .flex-y-center;
  background-color: #aaaaaa30;
  color: white;
  height: 30px;
  border-radius: 6px;

  .bili-send-popup-content {
    width: 200px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 15px;
    padding-bottom: 15px;

    .bili-send-popup-title {
      margin-top: 10px;
    }
    .bili-send-popup-item1 {
      margin-top: 5px;
      display: flex;

      &.bili-send-color > div {
        margin-right: 20px;
        text-align: center;
        cursor: pointer;

        & > *:first-child {
          font-size: 26px;
        }
        .active-color {
          color: #00aeec !important;
        }
      }
      .bili-send-color-input {
        width: 110px;
        background-color: #00000000;
        padding-left: 5px;
        padding-right: 5px;
        border: 0.5px solid #ffffff40;
        border-radius: 2px;
        color: white;
        outline: none;
      }
      .bili-send-color-display {
        width: 50px;
        height: 22px;
        border-radius: 2px;
        margin-left: 5px;
        color: black;
        border: 0.5px solid #ffffff40;
      }
    }
    .bili-send-popup-item2 {
      @extend .flex-between-center;
      margin-top: 5px;

      & > div {
        width: 14px;
        height: 14px;
        border-radius: 2px;
        cursor: pointer;
      }
      .bili-send-color-active {
        border: 1px solid black;
      }
    }
  }

  .bili-send-icon-setting {
    font-size: 16px;
    margin-left: 5px;
    cursor: pointer;
  }

  .bili-send-form {
    @extend .flex-y-center;
    width: 100%;
    height: 100%;

    input {
      outline: none;
      border: 0;
      flex-grow: 1;
      padding-right: 5px;
      margin-left: 5px;
      background-color: #00000000;
    }
    button {
      @extend .flex-center;
      height: 100%;
      width: 50px;
      border: 0;
      color: white;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
}
</style>
