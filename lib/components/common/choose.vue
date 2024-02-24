<template>
  <div class="bili-choose">
    <div
      v-for="item in options"
      :key="item.value"
      class="bili-choose-item"
      :class="{ 'bili-choose-item-active': valueModel === item.value }"
      @click="valueModel = item.value"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core";

const props = defineProps<{ value: number; options: Record<string, any>[] }>();
const emits = defineEmits<{ (e: "update:value", v: number): void }>();
const valueModel = useVModel(props, "value", emits);
</script>

<style lang="scss" scoped>
.bili-choose {
  width: 60px;
  cursor: pointer;

  .bili-choose-item {
    text-align: center;
    padding-top: 3px;
    padding-bottom: 3px;

    &:hover {
      background-color: #ffffff30;
    }
  }
  .bili-choose-item-active {
    color: #00aeec;
  }
}
</style>
