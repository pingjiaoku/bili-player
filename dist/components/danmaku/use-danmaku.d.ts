import { BiliDanmakuItem, BiliDanmakuProps } from '../../types';
export declare const useDanmakuStore: () => {
    state: {
        container?: HTMLDivElement | undefined;
        items: {
            content: string;
            time: number;
            type: number;
            color: string;
            border?: boolean | undefined;
        }[];
        itemIndex: number;
        tunnels: Record<string, HTMLDivElement[]>[];
        frameId: number;
        defaultFontSize: number;
        whites: string[];
        types: string[];
        canvasCtx?: {
            readonly canvas: HTMLCanvasElement;
            getContextAttributes: () => CanvasRenderingContext2DSettings;
            globalAlpha: number;
            globalCompositeOperation: GlobalCompositeOperation;
            drawImage: {
                (image: CanvasImageSource, dx: number, dy: number): void;
                (image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
                (image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
            };
            beginPath: () => void;
            clip: {
                (fillRule?: CanvasFillRule | undefined): void;
                (path: Path2D, fillRule?: CanvasFillRule | undefined): void;
            };
            fill: {
                (fillRule?: CanvasFillRule | undefined): void;
                (path: Path2D, fillRule?: CanvasFillRule | undefined): void;
            };
            isPointInPath: {
                (x: number, y: number, fillRule?: CanvasFillRule | undefined): boolean;
                (path: Path2D, x: number, y: number, fillRule?: CanvasFillRule | undefined): boolean;
            };
            isPointInStroke: {
                (x: number, y: number): boolean;
                (path: Path2D, x: number, y: number): boolean;
            };
            stroke: {
                (): void;
                (path: Path2D): void;
            };
            fillStyle: string | {
                addColorStop: (offset: number, color: string) => void;
            } | {
                setTransform: (transform?: DOMMatrix2DInit | undefined) => void;
            };
            strokeStyle: string | {
                addColorStop: (offset: number, color: string) => void;
            } | {
                setTransform: (transform?: DOMMatrix2DInit | undefined) => void;
            };
            createConicGradient: (startAngle: number, x: number, y: number) => CanvasGradient;
            createLinearGradient: (x0: number, y0: number, x1: number, y1: number) => CanvasGradient;
            createPattern: (image: CanvasImageSource, repetition: string | null) => CanvasPattern | null;
            createRadialGradient: (x0: number, y0: number, r0: number, x1: number, y1: number, r1: number) => CanvasGradient;
            filter: string;
            createImageData: {
                (sw: number, sh: number, settings?: ImageDataSettings | undefined): ImageData;
                (imagedata: ImageData): ImageData;
            };
            getImageData: (sx: number, sy: number, sw: number, sh: number, settings?: ImageDataSettings | undefined) => ImageData;
            putImageData: {
                (imagedata: ImageData, dx: number, dy: number): void;
                (imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
            };
            imageSmoothingEnabled: boolean;
            imageSmoothingQuality: ImageSmoothingQuality;
            arc: (x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean | undefined) => void;
            arcTo: (x1: number, y1: number, x2: number, y2: number, radius: number) => void;
            bezierCurveTo: (cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) => void;
            closePath: () => void;
            ellipse: (x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean | undefined) => void;
            lineTo: (x: number, y: number) => void;
            moveTo: (x: number, y: number) => void;
            quadraticCurveTo: (cpx: number, cpy: number, x: number, y: number) => void;
            rect: (x: number, y: number, w: number, h: number) => void;
            roundRect: {
                (x: number, y: number, w: number, h: number, radii?: number | DOMPointInit | (number | DOMPointInit)[] | undefined): void;
                (x: number, y: number, w: number, h: number, radii?: number | DOMPointInit | Iterable<number | DOMPointInit> | undefined): void;
            };
            lineCap: CanvasLineCap;
            lineDashOffset: number;
            lineJoin: CanvasLineJoin;
            lineWidth: number;
            miterLimit: number;
            getLineDash: () => number[];
            setLineDash: {
                (segments: number[]): void;
                (segments: Iterable<number>): void;
            };
            clearRect: (x: number, y: number, w: number, h: number) => void;
            fillRect: (x: number, y: number, w: number, h: number) => void;
            strokeRect: (x: number, y: number, w: number, h: number) => void;
            shadowBlur: number;
            shadowColor: string;
            shadowOffsetX: number;
            shadowOffsetY: number;
            reset: () => void;
            restore: () => void;
            save: () => void;
            fillText: (text: string, x: number, y: number, maxWidth?: number | undefined) => void;
            measureText: (text: string) => TextMetrics;
            strokeText: (text: string, x: number, y: number, maxWidth?: number | undefined) => void;
            direction: CanvasDirection;
            font: string;
            fontKerning: CanvasFontKerning;
            textAlign: CanvasTextAlign;
            textBaseline: CanvasTextBaseline;
            getTransform: () => DOMMatrix;
            resetTransform: () => void;
            rotate: (angle: number) => void;
            scale: (x: number, y: number) => void;
            setTransform: {
                (a: number, b: number, c: number, d: number, e: number, f: number): void;
                (transform?: DOMMatrix2DInit | undefined): void;
            };
            transform: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
            translate: (x: number, y: number) => void;
            drawFocusIfNeeded: {
                (element: Element): void;
                (path: Path2D, element: Element): void;
            };
        } | undefined;
        show: boolean;
        fontRatio: number;
        fontBold: boolean;
        speed: number;
        opacity: number;
        displaySize: number;
        visible: {
            move: boolean;
            top: boolean;
            bottom: boolean;
            color: boolean;
        };
        sendCallback: (data: BiliDanmakuItem) => any;
        filter: (dan: BiliDanmakuItem) => boolean | Promise<boolean>;
    };
    init: (container: HTMLDivElement, props: BiliDanmakuProps) => void;
    show: () => void;
    hide: () => void;
    seek: () => void;
    send: (item: BiliDanmakuItem) => Promise<void>;
    clear: () => void;
    resize: () => void;
    setDanmakus: (items: BiliDanmakuItem[]) => void;
};
