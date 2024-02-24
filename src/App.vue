<script setup lang="ts">
import { onMounted, ref } from "vue";
import { BiliDanmakuItem, BiliPlayer, BiliPlayerProps } from "../lib";

const biliPlayerRef = ref<InstanceType<typeof BiliPlayer>>();
const playerProps: BiliPlayerProps = {
  video: {
    poster: "https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png",
    url: "https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4",
    autoplay: false,
  },
  danmaku: {
    sendCallback: async (data: BiliDanmakuItem) => {
      // request send
      data.border = true;
    },
    filter: (data: BiliDanmakuItem) => {
      // 屏蔽弹幕 '前方高能'
      return !data.content.includes("前方高能");
    },
  },
};

const danmaItems: BiliDanmakuItem[] = [
  { content: "君だよ 君なんだよ  教えてくれた", time: 1, type: 0, color: "white" },
  { content: "Goose house炒鸡棒！！！  银之匙种草他们组合", time: 1.2, type: 2, color: "red" },
  { content: "朱军，拔剑吧", time: 1.6, type: 0, color: "green" },
  { content: "听了好多次", time: 6.6, type: 1, color: "white" },
  { content: "带耳机听，贝斯的声音会更加带感！", time: 4.3, type: 0, color: "black" },
  { content: "胖子哥声音太美", time: 3.2, type: 1, color: "white" },
  { content: "练习室版本吧。就像live和专辑。", time: 3.6, type: 0, color: "white" },
  { content: "左下角的妹子唱副歌的，很难的", time: 2.2, type: 1, color: "blue" },
];
onMounted(() => {
  const danmaControl = biliPlayerRef.value?.getDanmaControls();
  danmaControl?.setDanmakus(danmaItems);
});
</script>

<template>
  <bili-player
    ref="biliPlayerRef"
    style="width: 900px; height: 550px"
    v-bind="playerProps"
  />
</template>

<style scoped></style>
