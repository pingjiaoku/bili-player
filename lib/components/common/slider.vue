<template>
  <div class="bili-slider" @mousedown="onMouseDown" @mousemove="onMouseMove">
    <div ref="sliderContainerRef">
      <div class="bili-slider-container">
        <div
          class="bili-slider-var"
          :style="{
            width: `${(1 / (max - min)) * (valueModel - min) * width}px`,
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

interface Props {
  value: number;
  max?: number;
  min?: number;
}
const props = withDefaults(defineProps<Props>(), { max: 1, min: 0 });
const emits = defineEmits<{ (e: "update:value", v: number): void }>();
const valueModel = useVModel(props, "value", emits);

const sliderContainerRef = ref<HTMLDivElement>();
const { width } = useElementBounding(sliderContainerRef);

const setValue = (value: number) => {
  if (value > props.max) value = props.max;
  if (value < props.min) value = props.min;
  valueModel.value = value;
};

let isDown = false;
const onMouseDown = (e: MouseEvent) => {
  isDown = true;
  setValue((e.offsetX / width.value) * (props.max - props.min) + props.min);
};

const onMouseUp = (_e: MouseEvent) => {
  isDown = false;
};

const onMouseMove = (e: MouseEvent) => {
  if (!isDown) return;
  setValue((e.offsetX / width.value) * (props.max - props.min) + props.min);
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
.bili-slider {
  height: 26px;
  padding-left: 6px;
  padding-right: 6px;
  cursor: pointer;

  & > div {
    height: 100%;
    position: relative;
  }

  .bili-slider-container {
    @extend .absolute-y-center;
    height: 2px;
    width: 100%;
    margin-top: auto;
    margin-bottom: auto;
    background-color: white;
    border-radius: 2px;
    pointer-events: none;

    .bili-slider-var {
      position: relative;
      height: 100%;
      background-color: #00aeec;
      border-radius: 2px;

      .bili-slider-dot {
        @extend .absolute-y-center;
        border-radius: 50%;
        right: -6px;
        width: 12px;
        height: 12px;
        background-color: #00aeec;
      }
    }
  }
}
</style>
