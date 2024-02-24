export interface BiliVideoProps {
  /** 视频路径 */
  url?: string;
  /** 封面路径 */
  poster?: string;
  /** 字幕路径 */
  track?: string;
  /** 是否循环播放 */
  loop?: boolean;
  /** 是否自动播放 */
  autoplay?: boolean;
  /** 默认音量大小 */
  volume?: number;
  /** 播放倍率 */
  rate?: number;
}

export interface BiliDanmakuItem {
  /** 弹幕内容 */
  content: string;
  /** 出现时间 */
  time: number;
  /** 弹幕类型，0滚动，1顶部，2底部 */
  type: number;
  /** 弹幕颜色 */
  color: string;
  border?: boolean;
}

export interface BiliDanmakuProps {
  /** 展示弹幕 */
  show?: boolean;
  /** 字体大小比率，0.5 - 1.5，初始fontSize为24px */
  fontRatio?: number;
  /** 字体是否加粗 */
  fontBold?: boolean;
  /** 速度 0.5 - 2.0 */
  speed?: number;
  /** 不透明度 0 - 1 */
  opacity?: number;
  /** 显示区域 0.25 - 1 */
  displaySize?: number;
  /** 类型屏蔽 */
  visible?: {
    move: boolean;
    top: boolean;
    bottom: boolean;
    color: boolean;
  };
  /** 发送弹幕回调，若不发送，抛出异常即可 */
  sendCallback?: (data: BiliDanmakuItem) => Promise<any> | any;
  /** 弹幕显示过滤 */
  filter?: (dan: BiliDanmakuItem) => boolean | Promise<boolean>;
}

export interface BiliPlayerProps {
  /** 是否开启快捷键，默认true */
  hotkey?: boolean;
  video?: BiliVideoProps;
  danmaku?: BiliDanmakuProps;
}
