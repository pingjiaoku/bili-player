<template>
  <div
    class="bili-video-container"
    @click="onClick"
    @dblclick.native="onDbClick"
  >
    <video
      ref="playerRef"
      :autoplay="autoplay"
      :loop="loop"
      :poster="poster"
      webkit-playsinline
      playsinline
      preload="metadata"
      :src="url"
    >
      <track kind="metadata" default :src="track" />
    </video>
    <div v-show="loading" class="bili-video-mask">
      <i-svg-loading />
      <div>正在缓冲中...</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { BiliVideoProps } from "@/types";
import { useMediaControls } from "@vueuse/core";
import { useControls } from "@/service";

const props = withDefaults(defineProps<BiliVideoProps>(), {
  autoplay: true,
  loop: false,
  rate: 1,
  volume: 0.5,
});

const playerRef = ref<HTMLVideoElement>();
const { state } = useControls();
state.videoControls = useMediaControls(playerRef);
const { rate, volume, waiting, playing } = state.videoControls;

const loading = ref(false);
let loadTimer: NodeJS.Timeout;
watch(waiting, (value) => {
  if (value) {
    loadTimer = setTimeout(() => {
      loading.value = true;
    }, 1000);
  } else {
    if (loadTimer) clearTimeout(loadTimer);
    loading.value = false;
  }
});

let timer: NodeJS.Timeout;
const onClick = () => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    playing.value = !playing.value;
  }, 300);
};

const onDbClick = () => {
  if (timer) clearTimeout(timer);
  const { state } = useControls();
  state.fullscreenControls?.toggle();
};

onMounted(() => {
  rate.value = props.rate;
  volume.value = props.volume;
});
</script>

<style lang="scss" scoped>
@import "@/style.scss";
.bili-video-container {
  position: relative;
  width: 100%;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
  }

  .bili-video-mask {
    @extend .flex-center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    background-color: #00000020;
    flex-direction: column;

    & > *:first-child {
      width: 70px;
      height: 40px;
      color: #00aeec;
    }
    & > *:last-child {
      text-shadow: 3px 3px 6px rgb(0 0 0 / 0.26), 0 0 5px rgb(15 3 86 / 0.22);
    }
  }
}
</style>
