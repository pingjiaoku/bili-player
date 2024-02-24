<template>
  <div class="bili-slider-vertical">
    <div
      ref="sliderContainerRef"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
    >
      <div class="bili-slider-container">
        <div
          class="bili-slider-var"
          :style="{
            height: `${valueModel * height}px`,
          }"
        >
          <div class="bili-slider-dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useElementBounding, useVModel } from "@vueuse/core";

const props = defineProps<{ value: number }>();
const emits = defineEmits<{ (e: "update:value", v: number): void }>();
const valueModel = useVModel(props, "value", emits);

const sliderContainerRef = ref<HTMLDivElement>();
const { height } = useElementBounding(sliderContainerRef);

let isDown = false;
const onMouseDown = (e: MouseEvent) => {
  isDown = true;
  const value = 1 - e.offsetY / height.value;
  valueModel.value = value > 1 ? 1 : value;
};

const onMouseUp = (_e: MouseEvent) => {
  isDown = false;
};

const onMouseMove = (e: MouseEvent) => {
  if (!isDown) return;
  const value = 1 - e.offsetY / height.value;
  valueModel.value = value > 1 ? 1 : value;
};

onMounted(() => {
  window.addEventListener("mouseup", onMouseUp);
});

onUnmounted(() => {
  window.removeEventListener("mouseup", onMouseUp);
});
</script>

<style lang="scss" scoped>
@import "@/style.scss";
.bili-slider-vertical {
  width: 26px;

  & > div {
    height: 100%;
    cursor: pointer;
  }

  .bili-slider-container {
    position: relative;
    width: 2px;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    background-color: white;
    border-radius: 2px;
    pointer-events: none;

    .bili-slider-var {
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: #00aeec;
      border-radius: 2px;

      .bili-slider-dot {
        @extend .absolute-x-center;
        border-radius: 50%;
        top: -7px;
        width: 14px;
        height: 14px;
        background-color: #00aeec;
      }
    }
  }
}
</style>
