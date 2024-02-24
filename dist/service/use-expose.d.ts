import { useDanmakuStore } from "../components/danmaku/use-danmaku";
import { UseMediaControlsReturn } from "@vueuse/core";
type UseExposeReture = {
    getVideoControls: () => UseMediaControlsReturn | undefined;
    getDanmaControls: () => ReturnType<typeof useDanmakuStore>;
};
export declare const useExpose: () => UseExposeReture;
export {};
