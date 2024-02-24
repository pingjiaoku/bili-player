import { useControls } from "./use-controls";
import { useDanmakuStore } from "../components/danmaku/use-danmaku";
import { UseMediaControlsReturn } from "@vueuse/core";

const getDanmaControls = () => {
  return useDanmakuStore();
};

const getVideoControls = () => {
  const { state } = useControls();
  const ctl = state.videoControls;
  if (!ctl) throw new Error("video not initialized completed");
  return ctl;
};

type UseExposeReture = {
  getVideoControls: () => UseMediaControlsReturn | undefined;
  getDanmaControls: () => ReturnType<typeof useDanmakuStore>;
};
export const useExpose = (): UseExposeReture => {
  return { getVideoControls, getDanmaControls };
};
