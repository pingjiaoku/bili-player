import { UseFullscreenReturn, UseMediaControlsReturn } from "@vueuse/core";

interface State {
  fullscreenControls?: UseFullscreenReturn;
  videoControls?: UseMediaControlsReturn;
}

const state: State = {};

export const useControls = () => ({
  state,
});
