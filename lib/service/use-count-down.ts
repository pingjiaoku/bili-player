import { ref, computed, onScopeDispose } from "vue";

/**
 * 倒计时
 * @param second - 倒计时的时间(s)
 */
export const useCountDown = (second: number) => {
  if (second <= 0 && second % 1 !== 0) {
    throw new Error("倒计时的时间应该为一个正整数！");
  }
  const isComplete = ref(false);

  const counts = ref(0);
  const isCounting = computed(() => Boolean(counts.value));

  let intervalId: any;

  /** 开始计时 */
  const start = (updateSecond: number = second) => {
    if (!counts.value) {
      isComplete.value = false;
      counts.value = updateSecond;
      intervalId = setInterval(() => {
        counts.value -= 1;
        if (counts.value <= 0) {
          clearInterval(intervalId);
          isComplete.value = true;
        }
      }, 1000);
    }
  };

  /** 停止计时 */
  const stop = () => {
    intervalId = clearInterval(intervalId);
    counts.value = 0;
  };

  onScopeDispose(stop);

  return {
    counts,
    isCounting,
    start,
    stop,
    isComplete,
  };
};
