<template>
  <div
    class="bili-popover"
    @mouseenter="visible = true"
    @mouseleave="visible = false"
  >
    <transition
      enter-from-class="op-0"
      leave-to-class="op-0"
    >
      <div
        v-show="!disabled && (visible || keepOpen)"
        class="bili-popover-container"
        :class="{ 'pointer-events-none': contentEvent }"
      >
        <div class="bili-popover-content">
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface Props {
  contentEvent?: boolean;
  disabled?: boolean;
  keepOpen?: boolean;
}
defineProps<Props>();

const visible = ref(false);
</script>

<style lang="scss" scoped>
@import "@/style.scss";
.bili-popover {
  position: relative;

  .pointer-events-none {
    pointer-events: none;
  }

  .bili-popover-container {
    @extend .absolute-x-center;
    transition: all 150ms;
    transition-delay: 200ms;
    bottom: 100%;
    padding-bottom: 20px;

    .bili-popover-content {
      border-radius: 4px;
      overflow: hidden;
      background-color: #000000dd;
    }
  }
}
</style>
