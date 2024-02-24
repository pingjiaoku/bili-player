<template>
  <div class="bili-control-left">
    <div class="bili-control-play">
      <transition
        mode="out-in"
        enter-form-class="bili-control-play-transiton"
        leave-to-class="bili-control-play-transiton"
      >
        <i-svg-pause v-if="playing || waiting" @click="playing = false" />
        <i-svg-play v-else @click="playing = true" />
      </transition>
    </div>
    <div
      v-if="!jumpInputVisible"
      class="bili-control-current-time"
      @click="editTime"
    >
      {{ numberToTime(currentTime) }} / {{ numberToTime(duration) }}
    </div>
    <input
      v-else
      ref="inputRef"
      v-model="time"
      class="bili-control-time-input"
      @keydown.enter="doJump"
      @blur="jumpInputVisible = false"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from "vue";
import { useControls, numberToTime } from "@/service";

const { state } = useControls();
const { currentTime, duration, playing, waiting } = state.videoControls!;

const inputRef = ref<HTMLInputElement>();
const jumpInputVisible = ref(false);
const time = ref("");

const editTime = async () => {
  time.value = numberToTime(currentTime.value);
  jumpInputVisible.value = true;
  await nextTick();
  inputRef.value!.focus();
};

const doJump = () => {
  jumpInputVisible.value = false;
  const t = time.value.split(":");

  try {
    if (t.length === 1) {
      const s = +t[0];
      if (s >= 60) return;
      currentTime.value = s;
    } else if (t.length === 2) {
      const m = +t[0];
      const s = +t[1];
      if (m >= 60 || s >= 60) return;
      currentTime.value = s + m * 60;
    } else if (t.length === 3) {
      const h = +t[0];
      const m = +t[1];
      const s = +t[2];
      if (m >= 60 || s >= 60) return;
      currentTime.value = s + m * 60 + h * 3600;
    }
  } catch (_ignore) {}
};
</script>

<style lang="scss" scoped>
@import "@/style.scss";
.bili-control-left {
  @extend .flex-y-center;

  .bili-control-play {
    margin-left: 10px;
    margin-right: 20px;
    width: 20px;
    font-size: 22px;

    .bili-control-play-transiton {
      opacity: 0;
      transform: scaleX(20%);
      transition-property: opacity, transform;
      transition-duration: 300ms;
    }
  }
  .bili-control-current-time {
    font-size: 12px;
    user-select: none;
    cursor: text;
    text-wrap: nowrap;
  }
  .bili-control-time-input {
    background-color: #ffffff30;
    color: white;
    outline: none;
    text-align: center;
    width: 70px;
    font-size: 12px;
    padding: 2px;
    border-radius: 4px;
  }
}
</style>
