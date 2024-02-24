/**
 * 倒计时
 * @param second - 倒计时的时间(s)
 */
export declare const useCountDown: (second: number) => {
    counts: import("vue").Ref<number>;
    isCounting: import("vue").ComputedRef<boolean>;
    start: (updateSecond?: number) => void;
    stop: () => void;
    isComplete: import("vue").Ref<boolean>;
};
