import { UseFullscreenReturn, UseMediaControlsReturn } from "@vueuse/core";
interface State {
    fullscreenControls?: UseFullscreenReturn;
    videoControls?: UseMediaControlsReturn;
}
export declare const useControls: () => {
    state: State;
};
export {};
