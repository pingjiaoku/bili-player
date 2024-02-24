<template>
  <transition mode="out-in" enter-from-class="op-0" leave-to-class="op-0">
    <div v-show="showModel" class="bili-descrip-container">
      <div class="bili-descrip-title">
        快捷键说明
        <div class="bili-descrip-close" @click="showModel = false">✕</div>
      </div>
      <div>
        <div v-for="li in list" :key="li.value" class="bili-descrip-line">
          <div>{{ li.value }}</div>
          <div>{{ li.label }}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core";

const props = defineProps<{ show: boolean }>();
const emits = defineEmits<{ (e: "update:show", v: boolean): void }>();
const showModel = useVModel(props, "show", emits);

const list = [
  { value: "Space", label: "播放/暂停" },
  { value: "→", label: "单词快进5s，长按倍数播放" },
  { value: "←", label: "快退5s" },
  { value: "↑", label: "音量增加10%" },
  { value: "↓", label: "音量降低10%" },
  { value: "Esc", label: "退出全屏" },
  { value: "F", label: "全屏/退出全屏" },
  { value: "D", label: "开启/关闭弹幕" },
  { value: "M", label: "开启/关闭静音" },
];
</script>

<style lang="scss" scoped>
@import "@/style.scss";
.bili-descrip-container {
  @extend .absolute-center;
  transition: opacity 200ms;
  color: white;
  background-color: #000000cc;
  width: 350px;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 15px;

  .bili-descrip-title {
    font-size: 18px;
    position: relative;
    text-align: center;
    border-bottom-width: 0.5px;
    border-color: #ffffff40;
    padding-bottom: 5px;

    .bili-descrip-close {
      position: absolute;
      top: 0;
      right: 0;
      font-weight: bold;
      cursor: pointer;
    }
  }

  .bili-descrip-line {
    display: flex;
    text-align: center;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 5px;

    &>div:first-child {
      width: 80px;
    }
    &>div:last-child {
      flex-grow: 1;
      font-size: 13px;
      color: gray;
    }
  }
}
</style>
