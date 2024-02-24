<template>
  <popover content-event :disabled="disabled" :keep-open="keepOpen">
    <template #content>
      <div class="bili-tooltip-text">{{ content }}</div>
    </template>
    <slot></slot>
  </popover>
</template>

<script lang="ts" setup>
import Popover from "./popover.vue";

interface Props {
  content: string;
  disabled?: boolean;
  keepOpen?: boolean;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
.bili-tooltip-text {
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 5px;
  padding-right: 5px;
  text-wrap: nowrap;
  font-size: 12px;
}
</style>
