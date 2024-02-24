import { openBlock as h, createElementBlock as C, createStaticVNode as Re, getCurrentScope as et, onScopeDispose as He, unref as i, onMounted as ee, nextTick as ke, ref as k, watch as P, getCurrentInstance as $e, computed as q, watchEffect as Be, reactive as tt, onUnmounted as fe, defineComponent as R, createElementVNode as s, withDirectives as W, createVNode as z, vShow as se, pushScopeId as ie, popScopeId as ae, normalizeClass as Z, Fragment as ce, renderList as re, normalizeStyle as H, toDisplayString as L, Transition as Ce, withCtx as V, createBlock as B, withKeys as nt, vModelText as we, renderSlot as U, isRef as Te, createTextVNode as O, createCommentVNode as ot, createSlots as me, normalizeProps as oe, guardReactiveProps as le, withModifiers as lt } from "vue";
const st = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, it = /* @__PURE__ */ Re('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"></animate></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></g>', 1), at = [
  it
];
function ct(e, t) {
  return h(), C("svg", st, [...at]);
}
const rt = { name: "svg-loading", render: ct };
function Q(e) {
  return et() ? (He(e), !0) : !1;
}
function ut() {
  const e = /* @__PURE__ */ new Set(), t = (a) => {
    e.delete(a);
  };
  return {
    on: (a) => {
      e.add(a);
      const o = () => t(a);
      return Q(o), {
        off: o
      };
    },
    off: t,
    trigger: (...a) => Promise.all(Array.from(e).map((o) => o(...a)))
  };
}
function T(e) {
  return typeof e == "function" ? e() : i(e);
}
const Le = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const dt = (e) => typeof e < "u", vt = (e) => e != null, pt = Object.prototype.toString, De = (e) => pt.call(e) === "[object Object]", mt = () => {
};
function ft(e, t) {
  function n(...d) {
    return new Promise((a, o) => {
      Promise.resolve(e(() => t.apply(this, d), { fn: t, thisArg: this, args: d })).then(a).catch(o);
    });
  }
  return n;
}
const _t = (e) => e();
function ht(e) {
  return e || $e();
}
function gt(e, t = !0, n) {
  ht() ? ee(e, n) : t ? e() : ke(e);
}
function Ve(e, t, n = {}) {
  const {
    eventFilter: d = _t,
    ...a
  } = n, o = ft(
    d,
    t
  );
  let f, v, _;
  if (a.flush === "sync") {
    const p = k(!1);
    v = () => {
    }, f = (c) => {
      p.value = !0, c(), p.value = !1;
    }, _ = P(
      e,
      (...c) => {
        p.value || o(...c);
      },
      a
    );
  } else {
    const p = [], c = k(0), u = k(0);
    v = () => {
      c.value = u.value;
    }, p.push(
      P(
        e,
        () => {
          u.value++;
        },
        { ...a, flush: "sync" }
      )
    ), f = (l) => {
      const r = u.value;
      l(), c.value += u.value - r;
    }, p.push(
      P(
        e,
        (...l) => {
          const r = c.value > 0 && c.value === u.value;
          c.value = 0, u.value = 0, !r && o(...l);
        },
        a
      )
    ), _ = () => {
      p.forEach((l) => l());
    };
  }
  return { stop: _, ignoreUpdates: f, ignorePrevAsyncUpdates: v };
}
function J(e) {
  var t;
  const n = T(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const xe = Le ? window : void 0, Pe = Le ? window.document : void 0;
function E(...e) {
  let t, n, d, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, d, a] = e, t = xe) : [t, n, d, a] = e, !t)
    return mt;
  Array.isArray(n) || (n = [n]), Array.isArray(d) || (d = [d]);
  const o = [], f = () => {
    o.forEach((c) => c()), o.length = 0;
  }, v = (c, u, l, r) => (c.addEventListener(u, l, r), () => c.removeEventListener(u, l, r)), _ = P(
    () => [J(t), T(a)],
    ([c, u]) => {
      if (f(), !c)
        return;
      const l = De(u) ? { ...u } : u;
      o.push(
        ...n.flatMap((r) => d.map((g) => v(c, r, g, l)))
      );
    },
    { immediate: !0, flush: "post" }
  ), p = () => {
    _(), f();
  };
  return Q(p), p;
}
function bt() {
  const e = k(!1), t = $e();
  return t && ee(() => {
    e.value = !0;
  }, t), e;
}
function Me(e) {
  const t = bt();
  return q(() => (t.value, !!e()));
}
function wt(e) {
  return JSON.parse(JSON.stringify(e));
}
function yt(e, t, n = {}) {
  const { window: d = xe, ...a } = n;
  let o;
  const f = Me(() => d && "MutationObserver" in d), v = () => {
    o && (o.disconnect(), o = void 0);
  }, _ = q(() => {
    const l = T(e), r = (Array.isArray(l) ? l : [l]).map(J).filter(vt);
    return new Set(r);
  }), p = P(
    () => _.value,
    (l) => {
      v(), f.value && d && l.size && (o = new MutationObserver(t), l.forEach((r) => o.observe(r, a)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => o == null ? void 0 : o.takeRecords(), u = () => {
    v(), p();
  };
  return Q(u), {
    isSupported: f,
    stop: u,
    takeRecords: c
  };
}
function kt(e, t, n = {}) {
  const { window: d = xe, ...a } = n;
  let o;
  const f = Me(() => d && "ResizeObserver" in d), v = () => {
    o && (o.disconnect(), o = void 0);
  }, _ = q(() => Array.isArray(e) ? e.map((u) => J(u)) : [J(e)]), p = P(
    _,
    (u) => {
      if (v(), f.value && d) {
        o = new ResizeObserver(t);
        for (const l of u)
          l && o.observe(l, a);
      }
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    v(), p();
  };
  return Q(c), {
    isSupported: f,
    stop: c
  };
}
function ze(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: d = !0,
    windowScroll: a = !0,
    immediate: o = !0
  } = t, f = k(0), v = k(0), _ = k(0), p = k(0), c = k(0), u = k(0), l = k(0), r = k(0);
  function g() {
    const b = J(e);
    if (!b) {
      n && (f.value = 0, v.value = 0, _.value = 0, p.value = 0, c.value = 0, u.value = 0, l.value = 0, r.value = 0);
      return;
    }
    const $ = b.getBoundingClientRect();
    f.value = $.height, v.value = $.bottom, _.value = $.left, p.value = $.right, c.value = $.top, u.value = $.width, l.value = $.x, r.value = $.y;
  }
  return kt(e, g), P(() => J(e), (b) => !b && g()), yt(e, g, {
    attributeFilter: ["style", "class"]
  }), a && E("scroll", g, { capture: !0, passive: !0 }), d && E("resize", g, { passive: !0 }), gt(() => {
    o && g();
  }), {
    height: f,
    bottom: v,
    left: _,
    right: p,
    top: c,
    width: u,
    x: l,
    y: r,
    update: g
  };
}
const Ae = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function $t(e, t = {}) {
  const {
    document: n = Pe,
    autoExit: d = !1
  } = t, a = q(() => {
    var w;
    return (w = J(e)) != null ? w : n == null ? void 0 : n.querySelector("html");
  }), o = k(!1), f = q(() => [
    "requestFullscreen",
    "webkitRequestFullscreen",
    "webkitEnterFullscreen",
    "webkitEnterFullScreen",
    "webkitRequestFullScreen",
    "mozRequestFullScreen",
    "msRequestFullscreen"
  ].find((w) => n && w in n || a.value && w in a.value)), v = q(() => [
    "exitFullscreen",
    "webkitExitFullscreen",
    "webkitExitFullScreen",
    "webkitCancelFullScreen",
    "mozCancelFullScreen",
    "msExitFullscreen"
  ].find((w) => n && w in n || a.value && w in a.value)), _ = q(() => [
    "fullScreen",
    "webkitIsFullScreen",
    "webkitDisplayingFullscreen",
    "mozFullScreen",
    "msFullscreenElement"
  ].find((w) => n && w in n || a.value && w in a.value)), p = [
    "fullscreenElement",
    "webkitFullscreenElement",
    "mozFullScreenElement",
    "msFullscreenElement"
  ].find((w) => n && w in n), c = Me(() => a.value && n && f.value !== void 0 && v.value !== void 0 && _.value !== void 0), u = () => p ? (n == null ? void 0 : n[p]) === a.value : !1, l = () => {
    if (_.value) {
      if (n && n[_.value] != null)
        return n[_.value];
      {
        const w = a.value;
        if ((w == null ? void 0 : w[_.value]) != null)
          return !!w[_.value];
      }
    }
    return !1;
  };
  async function r() {
    if (!(!c.value || !o.value)) {
      if (v.value)
        if ((n == null ? void 0 : n[v.value]) != null)
          await n[v.value]();
        else {
          const w = a.value;
          (w == null ? void 0 : w[v.value]) != null && await w[v.value]();
        }
      o.value = !1;
    }
  }
  async function g() {
    if (!c.value || o.value)
      return;
    l() && await r();
    const w = a.value;
    f.value && (w == null ? void 0 : w[f.value]) != null && (await w[f.value](), o.value = !0);
  }
  async function b() {
    await (o.value ? r() : g());
  }
  const $ = () => {
    const w = l();
    (!w || w && u()) && (o.value = w);
  };
  return E(n, Ae, $, !1), E(() => J(a), Ae, $, !1), d && Q(r), {
    isSupported: c,
    isFullscreen: o,
    enter: g,
    exit: r,
    toggle: b
  };
}
function ge(e, t) {
  T(e) && t(T(e));
}
function Ct(e) {
  let t = [];
  for (let n = 0; n < e.length; ++n)
    t = [...t, [e.start(n), e.end(n)]];
  return t;
}
function be(e) {
  return Array.from(e).map(({ label: t, kind: n, language: d, mode: a, activeCues: o, cues: f, inBandMetadataTrackDispatchType: v }, _) => ({ id: _, label: t, kind: n, language: d, mode: a, activeCues: o, cues: f, inBandMetadataTrackDispatchType: v }));
}
const xt = {
  src: "",
  tracks: []
};
function Mt(e, t = {}) {
  t = {
    ...xt,
    ...t
  };
  const {
    document: n = Pe
  } = t, d = k(0), a = k(0), o = k(!1), f = k(1), v = k(!1), _ = k(!1), p = k(!1), c = k(1), u = k(!1), l = k([]), r = k([]), g = k(-1), b = k(!1), $ = k(!1), w = n && "pictureInPictureEnabled" in n, x = ut(), M = (y) => {
    ge(e, (S) => {
      if (y) {
        const I = typeof y == "number" ? y : y.id;
        S.textTracks[I].mode = "disabled";
      } else
        for (let I = 0; I < S.textTracks.length; ++I)
          S.textTracks[I].mode = "disabled";
      g.value = -1;
    });
  }, K = (y, S = !0) => {
    ge(e, (I) => {
      const N = typeof y == "number" ? y : y.id;
      S && M(), I.textTracks[N].mode = "showing", g.value = N;
    });
  }, j = () => new Promise((y, S) => {
    ge(e, async (I) => {
      w && (b.value ? n.exitPictureInPicture().then(y).catch(S) : I.requestPictureInPicture().then(y).catch(S));
    });
  });
  Be(() => {
    if (!n)
      return;
    const y = T(e);
    if (!y)
      return;
    const S = T(t.src);
    let I = [];
    S && (typeof S == "string" ? I = [{ src: S }] : Array.isArray(S) ? I = S : De(S) && (I = [S]), y.querySelectorAll("source").forEach((N) => {
      N.removeEventListener("error", x.trigger), N.remove();
    }), I.forEach(({ src: N, type: he }) => {
      const ne = n.createElement("source");
      ne.setAttribute("src", N), ne.setAttribute("type", he || ""), ne.addEventListener("error", x.trigger), y.appendChild(ne);
    }), y.load());
  }), Q(() => {
    const y = T(e);
    y && y.querySelectorAll("source").forEach((S) => S.removeEventListener("error", x.trigger));
  }), P([e, f], () => {
    const y = T(e);
    y && (y.volume = f.value);
  }), P([e, $], () => {
    const y = T(e);
    y && (y.muted = $.value);
  }), P([e, c], () => {
    const y = T(e);
    y && (y.playbackRate = c.value);
  }), Be(() => {
    if (!n)
      return;
    const y = T(t.tracks), S = T(e);
    !y || !y.length || !S || (S.querySelectorAll("track").forEach((I) => I.remove()), y.forEach(({ default: I, kind: N, label: he, src: ne, srcLang: Ge }, Qe) => {
      const G = n.createElement("track");
      G.default = I || !1, G.kind = N, G.label = he, G.src = ne, G.srclang = Ge, G.default && (g.value = Qe), S.appendChild(G);
    }));
  });
  const { ignoreUpdates: X } = Ve(d, (y) => {
    const S = T(e);
    S && (S.currentTime = y);
  }), { ignoreUpdates: F } = Ve(p, (y) => {
    const S = T(e);
    S && (y ? S.play() : S.pause());
  });
  E(e, "timeupdate", () => X(() => d.value = T(e).currentTime)), E(e, "durationchange", () => a.value = T(e).duration), E(e, "progress", () => l.value = Ct(T(e).buffered)), E(e, "seeking", () => o.value = !0), E(e, "seeked", () => o.value = !1), E(e, ["waiting", "loadstart"], () => {
    v.value = !0, F(() => p.value = !1);
  }), E(e, "loadeddata", () => v.value = !1), E(e, "playing", () => {
    v.value = !1, _.value = !1, F(() => p.value = !0);
  }), E(e, "ratechange", () => c.value = T(e).playbackRate), E(e, "stalled", () => u.value = !0), E(e, "ended", () => _.value = !0), E(e, "pause", () => F(() => p.value = !1)), E(e, "play", () => F(() => p.value = !0)), E(e, "enterpictureinpicture", () => b.value = !0), E(e, "leavepictureinpicture", () => b.value = !1), E(e, "volumechange", () => {
    const y = T(e);
    y && (f.value = y.volume, $.value = y.muted);
  });
  const te = [], Ke = P([e], () => {
    const y = T(e);
    y && (Ke(), te[0] = E(y.textTracks, "addtrack", () => r.value = be(y.textTracks)), te[1] = E(y.textTracks, "removetrack", () => r.value = be(y.textTracks)), te[2] = E(y.textTracks, "change", () => r.value = be(y.textTracks)));
  });
  return Q(() => te.forEach((y) => y())), {
    currentTime: d,
    duration: a,
    waiting: v,
    seeking: o,
    ended: _,
    stalled: u,
    buffered: l,
    playing: p,
    rate: c,
    // Volume
    volume: f,
    muted: $,
    // Tracks
    tracks: r,
    selectedTrack: g,
    enableTrack: K,
    disableTrack: M,
    // Picture in Picture
    supportsPictureInPicture: w,
    togglePictureInPicture: j,
    isPictureInPicture: b,
    // Events
    onSourceError: x.on
  };
}
function _e(e, t, n, d = {}) {
  var a, o, f;
  const {
    clone: v = !1,
    passive: _ = !1,
    eventName: p,
    deep: c = !1,
    defaultValue: u,
    shouldEmit: l
  } = d, r = $e(), g = n || (r == null ? void 0 : r.emit) || ((a = r == null ? void 0 : r.$emit) == null ? void 0 : a.bind(r)) || ((f = (o = r == null ? void 0 : r.proxy) == null ? void 0 : o.$emit) == null ? void 0 : f.bind(r == null ? void 0 : r.proxy));
  let b = p;
  t || (t = "modelValue"), b = b || `update:${t.toString()}`;
  const $ = (M) => v ? typeof v == "function" ? v(M) : wt(M) : M, w = () => dt(e[t]) ? $(e[t]) : u, x = (M) => {
    l ? l(M) && g(b, M) : g(b, M);
  };
  if (_) {
    const M = w(), K = k(M);
    let j = !1;
    return P(
      () => e[t],
      (X) => {
        j || (j = !0, K.value = $(X), ke(() => j = !1));
      }
    ), P(
      K,
      (X) => {
        !j && (X !== e[t] || c) && x(X);
      },
      { deep: c }
    ), K;
  } else
    return q({
      get() {
        return w();
      },
      set(M) {
        x(M);
      }
    });
}
const pe = (e) => {
  if (!e)
    return "00:00";
  const n = Math.floor(e % 60).toString().padStart(2, "0"), d = Math.floor(e / 60);
  if (d === 0)
    return `00:${n}`;
  const o = Math.floor(d % 60).toString().padStart(2, "0"), f = Math.floor(d / 60);
  return f === 0 ? `${o}:${n}` : `${f}:${o}:${n}`;
}, zt = {}, A = () => ({
  state: zt
}), St = (e) => {
  if (e <= 0 && e % 1 !== 0)
    throw new Error("倒计时的时间应该为一个正整数！");
  const t = k(!1), n = k(0), d = q(() => !!n.value);
  let a;
  const o = (v = e) => {
    n.value || (t.value = !1, n.value = v, a = setInterval(() => {
      n.value -= 1, n.value <= 0 && (clearInterval(a), t.value = !0);
    }, 1e3));
  }, f = () => {
    a = clearInterval(a), n.value = 0;
  };
  return He(f), {
    counts: n,
    isCounting: d,
    start: o,
    stop: f,
    isComplete: t
  };
}, m = tt({
  show: !0,
  fontRatio: 1,
  fontBold: !1,
  speed: 1,
  opacity: 1,
  displaySize: 1,
  items: [],
  itemIndex: 0,
  tunnels: [{}, {}, {}],
  visible: {
    move: !0,
    top: !0,
    bottom: !0,
    color: !0
  },
  sendCallback: () => {
  },
  filter: () => !0,
  frameId: 0,
  defaultFontSize: 24,
  types: ["move", "top", "bottom"],
  whites: ["#fff", "#ffffff", "#ffffffff", "white"]
}), Ft = (e, t) => {
  m.container = e, m.show = t.show ?? m.show, m.fontRatio = t.fontRatio ?? m.fontRatio, m.fontBold = t.fontBold ?? m.fontBold, m.speed = t.speed ?? m.speed, m.opacity = t.opacity ?? m.opacity, m.displaySize = t.displaySize ?? m.displaySize, m.visible = t.visible ?? m.visible, m.filter = t.filter ?? m.filter, m.sendCallback = t.sendCallback ?? m.sendCallback, qe(""), Ze(), It();
}, Se = () => {
  m.tunnels = [{}, {}, {}], m.itemIndex = 0, m.container && (m.container.innerHTML = "");
}, Et = () => {
  m.show = !1, Se(), window.cancelAnimationFrame(m.frameId);
}, Fe = () => {
  const { videoControls: e } = A().state;
  if (!e)
    return;
  const t = e.currentTime.value;
  Se();
  for (let n = 0; n < m.items.length; n++) {
    if (m.items[n].time >= t) {
      m.itemIndex = n;
      break;
    }
    m.itemIndex = m.items.length;
  }
}, Bt = () => {
  Fe(), m.show = !0;
}, Tt = async (e) => {
  var t;
  await ((t = m.sendCallback) == null ? void 0 : t.call(m, e)), m.items.splice(m.itemIndex, 0, e), m.itemIndex++, e.content = Ne(e.content), e.border = !0, Ue([e]);
}, Vt = () => {
  if (!m.container)
    return;
  const e = m.container.offsetWidth, t = m.container.getElementsByClassName("bili-danmaku-item");
  for (let n = 0; n < t.length; n++)
    t[n].style.transform = `translateX(-${e}px)`;
}, At = (e) => {
  m.items = e, Ze(), Fe();
}, Ze = () => {
  m.items.sort((e, t) => e.time - t.time);
}, It = () => {
  m.frameId = window.requestAnimationFrame(() => {
    Oe();
  });
}, Oe = () => {
  const { videoControls: e } = A().state;
  if (!e)
    return;
  const t = e.playing.value, n = e.currentTime.value;
  if (m.items.length && t && m.show) {
    let d = m.items[m.itemIndex];
    const a = [];
    for (; d && n > d.time; )
      a.push(d), d = m.items[++m.itemIndex];
    Ue(a);
  }
  m.frameId = window.requestAnimationFrame(() => {
    Oe();
  });
}, Ue = async (e) => {
  if (!m.show || !m.container)
    return;
  const t = m.defaultFontSize * m.fontRatio, n = m.container.offsetWidth, a = m.container.offsetHeight * m.displaySize / t, o = (p) => {
    const c = m.container.getBoundingClientRect().right, u = p.offsetWidth || +p.style.width, l = p.getBoundingClientRect().right || c + u;
    return c - l || -1;
  }, f = (p) => (n + p) / 5, v = (p, c, u) => {
    const l = u ? n / f(u) : 0;
    for (let r = 0; r < a; r++) {
      const g = m.tunnels[c][r.toString()];
      if (g && g.length) {
        if (c !== 0)
          continue;
        for (let b = 0; b < g.length; b++) {
          const $ = o(g[b]) - 10, w = l * f(+g[b].style.width);
          if ($ <= n - w || $ <= 0)
            break;
          if (b === g.length - 1)
            return g.push(p), p.addEventListener("animationend", () => {
              g.splice(0, 1);
            }), r % a;
        }
      } else
        return m.tunnels[c][r.toString()] = [p], p.addEventListener("animationend", () => {
          m.tunnels[c][r.toString()].splice(0, 1);
        }), r % a;
    }
    return -1;
  }, _ = document.createDocumentFragment();
  for (let p = 0; p < e.length; p++) {
    let c = e[p], u = m.whites.includes(c.color.toLowerCase());
    if (!m.visible.move && c.type === 0 || !m.visible.top && c.type === 1 || !m.visible.bottom && c.type === 2 || !m.visible.color && !u || m.filter && !await m.filter(c))
      continue;
    c.color || (c.color = "#FFFFFF");
    const l = document.createElement("div");
    l.classList.add("bili-danmaku-item"), u || l.classList.add("bili-danmaku-color");
    const r = m.types[c.type];
    l.classList.add(`bili-danmaku-${r}`);
    const g = Ne(c.content);
    c.border ? l.innerHTML = `<div style="border: 1px solid #66ffff; line-height: 1">${g}</div>` : l.innerHTML = `<div>${g}</div>`, l.style.fontSize = t + "px", m.fontBold && (l.style.fontWeight = "bold"), l.style.opacity = m.opacity.toString(), l.style.color = c.color, l.addEventListener("animationend", () => {
      m.container.removeChild(l);
    });
    const b = qe(g);
    let $;
    switch (c.type) {
      case 0:
        $ = v(l, c.type, b), $ >= 0 && (l.style.width = `${b + 1}px`, l.style.top = `${(t + 2) * $}px`, l.style.transform = `translateX(-${n}px)`);
        break;
      case 1:
        $ = v(l, c.type), $ >= 0 && (l.style.top = `${(t + 2) * $}px`);
        break;
      case 2:
        $ = v(l, c.type), $ >= 0 && (l.style.bottom = `${(t + 2) * $}px`);
        break;
      default:
        $ = -1, console.error(`Can't handled danmaku type: ${c.type}`);
    }
    $ >= 0 && (l.style.animationDuration = Rt(c.type), _.appendChild(l));
  }
  return m.container.appendChild(_), _;
}, Ne = (e) => e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2f;"), qe = (e) => {
  if (!m.container)
    return -1;
  if (!m.canvasCtx) {
    const n = getComputedStyle(
      m.container.getElementsByClassName("bili-danmaku-item")[0],
      null
    );
    m.canvasCtx = document.createElement("canvas").getContext("2d"), m.canvasCtx.font = n.getPropertyValue("font");
  }
  const t = m.defaultFontSize * m.fontRatio;
  return m.canvasCtx.font = `${t}px Arial`, m.canvasCtx.measureText(e).width;
}, Rt = (e) => {
  const { fullscreenControls: t } = A().state, n = t == null ? void 0 : t.isFullscreen.value;
  return [
    `${(n ? 8 : 5) / m.speed}s`,
    `${(n ? 4 : 3) / m.speed}s`,
    `${(n ? 4 : 3) / m.speed}s`
  ][e];
}, Y = () => ({
  state: m,
  init: Ft,
  show: Bt,
  hide: Et,
  seek: Fe,
  send: Tt,
  clear: Se,
  resize: Vt,
  setDanmakus: At
}), Ht = (e) => {
  if (!e)
    return;
  const t = Y(), n = (p) => {
    var w, x, M;
    const { state: c } = A(), { playing: u, volume: l, muted: r, currentTime: g } = c.videoControls, b = (w = document.activeElement) == null ? void 0 : w.tagName.toUpperCase();
    if (b && ["INPUT", "TEXTAREA"].includes(b))
      return;
    const $ = (x = document.activeElement) == null ? void 0 : x.getAttribute("contenteditable");
    if (!($ && ["", "true"].includes($)))
      switch (p.key) {
        case " ":
          p.preventDefault(), u.value = !u.value;
          break;
        case "m":
          p.preventDefault(), r.value = !r.value;
          break;
        case "ArrowUp":
          p.preventDefault(), r.value && (r.value = !1), l.value = l.value >= 0.9 ? 1 : l.value + 0.1;
          break;
        case "ArrowDown":
          p.preventDefault(), r.value && (r.value = !1), l.value = l.value <= 0.1 ? 0 : l.value - 0.1;
          break;
        case "ArrowLeft":
          p.preventDefault(), g.value = g.value <= 5 ? 0 : g.value - 5, t.seek();
          break;
        case "ArrowRight":
          p.preventDefault(), v();
          break;
        case "f":
          p.preventDefault(), (M = c.fullscreenControls) == null || M.toggle();
          break;
        case "d":
          p.preventDefault(), t.state.show ? t.hide() : t.show();
          break;
      }
  };
  let d, a = !1, o = 0, f;
  const v = () => {
    const { state: p } = A(), { playing: c, rate: u } = p.videoControls;
    u.value !== 3 && (o = (/* @__PURE__ */ new Date()).getTime(), d = u.value), f || (f = setTimeout(() => {
      a = !c.value, a && (c.value = !0), u.value = 3;
    }, 500));
  }, _ = (p) => {
    if (p.key !== "ArrowRight")
      return;
    const { state: c } = A(), { playing: u, currentTime: l, duration: r, rate: g } = c.videoControls;
    f && clearTimeout(f), a && (u.value = !1), g.value = d, (/* @__PURE__ */ new Date()).getTime() - o < 500 && (l.value > r.value - 5 ? l.value = r.value : l.value = l.value + 5, t.seek());
  };
  ee(() => {
    window.addEventListener("keydown", n), window.addEventListener("keyup", _);
  }), fe(() => {
    window.removeEventListener("keydown", n), window.removeEventListener("keyup", _);
  });
}, Lt = () => Y(), Dt = () => {
  const { state: e } = A(), t = e.videoControls;
  if (!t)
    throw new Error("video not initialized completed");
  return t;
}, Pt = () => ({ getVideoControls: Dt, getDanmaControls: Lt }), Zt = (e) => (ie("data-v-090c2c21"), e = e(), ae(), e), Ot = ["autoplay", "loop", "poster", "src"], Ut = ["src"], Nt = { class: "bili-video-mask" }, qt = /* @__PURE__ */ Zt(() => /* @__PURE__ */ s("div", null, "正在缓冲中...", -1)), Wt = /* @__PURE__ */ R({
  __name: "index",
  props: {
    url: {},
    poster: {},
    track: {},
    loop: { type: Boolean, default: !1 },
    autoplay: { type: Boolean, default: !0 },
    volume: { default: 0.5 },
    rate: { default: 1 }
  },
  setup(e) {
    const t = e, n = k(), { state: d } = A();
    d.videoControls = Mt(n);
    const { rate: a, volume: o, waiting: f, playing: v } = d.videoControls, _ = k(!1);
    let p;
    P(f, (r) => {
      r ? p = setTimeout(() => {
        _.value = !0;
      }, 1e3) : (p && clearTimeout(p), _.value = !1);
    });
    let c;
    const u = () => {
      c && clearTimeout(c), c = setTimeout(() => {
        v.value = !v.value;
      }, 300);
    }, l = () => {
      var g;
      c && clearTimeout(c);
      const { state: r } = A();
      (g = r.fullscreenControls) == null || g.toggle();
    };
    return ee(() => {
      a.value = t.rate, o.value = t.volume;
    }), (r, g) => {
      const b = rt;
      return h(), C("div", {
        class: "bili-video-container",
        onClick: u,
        onDblclick: l
      }, [
        s("video", {
          ref_key: "playerRef",
          ref: n,
          autoplay: r.autoplay,
          loop: r.loop,
          poster: r.poster,
          "webkit-playsinline": "",
          playsinline: "",
          preload: "metadata",
          src: r.url
        }, [
          s("track", {
            kind: "metadata",
            default: "",
            src: r.track
          }, null, 8, Ut)
        ], 8, Ot),
        W(s("div", Nt, [
          z(b),
          qt
        ], 512), [
          [se, _.value]
        ])
      ], 32);
    };
  }
}), D = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [d, a] of t)
    n[d] = a;
  return n;
}, jt = /* @__PURE__ */ D(Wt, [["__scopeId", "data-v-090c2c21"]]), Xt = /* @__PURE__ */ s("div", { class: "bili-danmaku-item bili-danmaku-item--demo" }, null, -1), Jt = [
  Xt
], Yt = /* @__PURE__ */ R({
  __name: "index",
  props: {
    show: { type: Boolean, default: !0 },
    fontRatio: { default: 1 },
    fontBold: { type: Boolean, default: !1 },
    speed: { default: 1 },
    opacity: { default: 1 },
    displaySize: { default: 1 },
    visible: {},
    sendCallback: {},
    filter: {}
  },
  setup(e) {
    const { state: t } = A(), { playing: n } = t.videoControls, d = e, a = k(), { state: o, init: f, resize: v } = Y();
    return ee(() => {
      f(a.value, d), window.addEventListener("resize", v);
    }), fe(() => {
      window.removeEventListener("resize", v);
    }), (_, p) => (h(), C("div", {
      ref_key: "danmakuContainerRef",
      ref: a,
      class: Z(["bili-danmaku-container", {
        "bili-danmaku-paused": !i(n),
        "bili-danmaku-move-hide": !i(o).visible.move,
        "bili-danmaku-top-hide": !i(o).visible.top,
        "bili-danmaku-bottom-hide": !i(o).visible.bottom,
        "bili-danmaku-color-hide": !i(o).visible.color
      }])
    }, Jt, 2));
  }
}), Kt = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 18",
  preserveAspectRatio: "xMidYMid meet",
  style: { width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)" }
}, Gt = ["id"], Qt = /* @__PURE__ */ s("rect", {
  width: "18",
  height: "18",
  x: "0",
  y: "0"
}, null, -1), en = [
  Qt
], tn = ["clip-path"], nn = /* @__PURE__ */ Re('<g transform="matrix(0.9883429408073425,-0.7275781631469727,0.6775955557823181,0.920446515083313,7.3224687576293945,-0.7606706619262695)" opacity="1" style="display:block;"><g opacity="1" transform="matrix(0.9937776327133179,-0.11138220876455307,0.11138220876455307,0.9937776327133179,-2.5239999294281006,1.3849999904632568)"><path fill="rgb(51,51,51)" fill-opacity="1" d=" M0.75,-1.25 C0.75,-1.25 0.75,1.25 0.75,1.25 C0.75,1.663925051689148 0.4139249920845032,2 0,2 C0,2 0,2 0,2 C-0.4139249920845032,2 -0.75,1.663925051689148 -0.75,1.25 C-0.75,1.25 -0.75,-1.25 -0.75,-1.25 C-0.75,-1.663925051689148 -0.4139249920845032,-2 0,-2 C0,-2 0,-2 0,-2 C0.4139249920845032,-2 0.75,-1.663925051689148 0.75,-1.25z"></path></g></g><g transform="matrix(1.1436611413955688,0.7535901665687561,-0.6317168474197388,0.9587040543556213,16.0070743560791,2.902894973754883)" opacity="1" style="display:block;"><g opacity="1" transform="matrix(0.992861807346344,0.1192704513669014,-0.1192704513669014,0.992861807346344,-2.5239999294281006,1.3849999904632568)"><path fill="rgb(51,51,51)" fill-opacity="1" d=" M0.75,-1.25 C0.75,-1.25 0.75,1.25 0.75,1.25 C0.75,1.663925051689148 0.4139249920845032,2 0,2 C0,2 0,2 0,2 C-0.4139249920845032,2 -0.75,1.663925051689148 -0.75,1.25 C-0.75,1.25 -0.75,-1.25 -0.75,-1.25 C-0.75,-1.663925051689148 -0.4139249920845032,-2 0,-2 C0,-2 0,-2 0,-2 C0.4139249920845032,-2 0.75,-1.663925051689148 0.75,-1.25z"></path></g></g><g transform="matrix(1,0,0,1,8.890999794006348,8.406000137329102)" opacity="1" style="display:block;"><g opacity="1" transform="matrix(1,0,0,1,0.09099999815225601,1.1009999513626099)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M7,-3 C7,-3 7,3 7,3 C7,4.379749774932861 5.879749774932861,5.5 4.5,5.5 C4.5,5.5 -4.5,5.5 -4.5,5.5 C-5.879749774932861,5.5 -7,4.379749774932861 -7,3 C-7,3 -7,-3 -7,-3 C-7,-4.379749774932861 -5.879749774932861,-5.5 -4.5,-5.5 C-4.5,-5.5 4.5,-5.5 4.5,-5.5 C5.879749774932861,-5.5 7,-4.379749774932861 7,-3z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(51,51,51)" stroke-opacity="1" stroke-width="1.5" d=" M7,-3 C7,-3 7,3 7,3 C7,4.379749774932861 5.879749774932861,5.5 4.5,5.5 C4.5,5.5 -4.5,5.5 -4.5,5.5 C-5.879749774932861,5.5 -7,4.379749774932861 -7,3 C-7,3 -7,-3 -7,-3 C-7,-4.379749774932861 -5.879749774932861,-5.5 -4.5,-5.5 C-4.5,-5.5 4.5,-5.5 4.5,-5.5 C5.879749774932861,-5.5 7,-4.379749774932861 7,-3z"></path></g></g><g transform="matrix(1,0,0,1,8.89900016784668,8.083999633789062)" opacity="1" style="display:block;"><g opacity="1" transform="matrix(1,0,0,1,-2.5239999294281006,1.3849999904632568)"><path fill="rgb(51,51,51)" fill-opacity="1" d=" M0.875,-1.125 C0.875,-1.125 0.875,1.125 0.875,1.125 C0.875,1.607912540435791 0.48291251063346863,2 0,2 C0,2 0,2 0,2 C-0.48291251063346863,2 -0.875,1.607912540435791 -0.875,1.125 C-0.875,1.125 -0.875,-1.125 -0.875,-1.125 C-0.875,-1.607912540435791 -0.48291251063346863,-2 0,-2 C0,-2 0,-2 0,-2 C0.48291251063346863,-2 0.875,-1.607912540435791 0.875,-1.125z"></path></g></g><g transform="matrix(1,0,0,1,14.008999824523926,8.083999633789062)" opacity="1" style="display:block;"><g opacity="1" transform="matrix(1,0,0,1,-2.5239999294281006,1.3849999904632568)"><path fill="rgb(51,51,51)" fill-opacity="1" d=" M0.8999999761581421,-1.100000023841858 C0.8999999761581421,-1.100000023841858 0.8999999761581421,1.100000023841858 0.8999999761581421,1.100000023841858 C0.8999999761581421,1.596709966659546 0.4967099726200104,2 0,2 C0,2 0,2 0,2 C-0.4967099726200104,2 -0.8999999761581421,1.596709966659546 -0.8999999761581421,1.100000023841858 C-0.8999999761581421,1.100000023841858 -0.8999999761581421,-1.100000023841858 -0.8999999761581421,-1.100000023841858 C-0.8999999761581421,-1.596709966659546 -0.4967099726200104,-2 0,-2 C0,-2 0,-2 0,-2 C0.4967099726200104,-2 0.8999999761581421,-1.596709966659546 0.8999999761581421,-1.100000023841858z"></path></g></g>', 5), on = [
  nn
];
function ln(e, t) {
  return h(), C("svg", Kt, [
    s("defs", null, [
      s("clipPath", {
        id: e.idMap.__lottie_element_55
      }, [...en], 8, Gt)
    ]),
    s("g", {
      "clip-path": "url(#" + e.idMap.__lottie_element_55 + ")"
    }, [...on], 8, tn)
  ]);
}
const sn = { name: "svg-process", render: ln, data() {
  return { idMap: { __lottie_element_55: "uicons-" + Math.random().toString(36).substr(2, 10) } };
} }, We = (e) => (ie("data-v-1922558f"), e = e(), ae(), e), an = { class: "bili-progress-icon" }, cn = { class: "bili-progress-popup-time" }, rn = /* @__PURE__ */ We(() => /* @__PURE__ */ s("div", { class: "bili-progress-move-indicator" }, null, -1)), un = /* @__PURE__ */ We(() => /* @__PURE__ */ s("div", { class: "bili-progress-action-area" }, null, -1)), dn = /* @__PURE__ */ R({
  __name: "index",
  setup(e) {
    const t = k(), { state: n } = A(), { currentTime: d, duration: a, buffered: o } = n.videoControls, { width: f } = ze(t), v = k(0), _ = Y(), p = (c) => {
      d.value = c.offsetX / f.value * a.value, _.seek();
    };
    return (c, u) => {
      const l = sn;
      return h(), C("div", {
        ref_key: "processRef",
        ref: t,
        class: "bili-progress-container",
        onMousemove: u[0] || (u[0] = (r) => v.value = r.offsetX),
        onClick: p
      }, [
        (h(!0), C(ce, null, re(i(o), (r, g) => (h(), C("div", {
          key: g,
          class: "bili-progress-buffer",
          style: H({
            left: `${r[0] / i(a) * i(f)}px`,
            width: `${(r[1] - r[0]) / i(a) * i(f)}px`
          })
        }, null, 4))), 128)),
        s("div", {
          class: "bili-progress-current",
          style: H({ width: `${i(d) / i(a) * 100}%` })
        }, [
          s("div", an, [
            z(l)
          ])
        ], 4),
        s("div", {
          class: "bili-progress-move",
          style: H({
            left: `${v.value - 25}px`
          })
        }, [
          s("div", cn, L(i(pe)(v.value / i(f) * i(a))), 1),
          rn
        ], 4),
        un
      ], 544);
    };
  }
}), vn = /* @__PURE__ */ D(dn, [["__scopeId", "data-v-1922558f"]]), pn = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, mn = /* @__PURE__ */ s("path", {
  fill: "white",
  d: "M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314z"
}, null, -1), fn = [
  mn
];
function _n(e, t) {
  return h(), C("svg", pn, [...fn]);
}
const hn = { name: "svg-play", render: _n }, gn = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, bn = /* @__PURE__ */ s("path", {
  fill: "white",
  d: "M5 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm8 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
}, null, -1), wn = [
  bn
];
function yn(e, t) {
  return h(), C("svg", gn, [...wn]);
}
const kn = { name: "svg-pause", render: yn }, $n = { class: "bili-control-left" }, Cn = { class: "bili-control-play" }, xn = /* @__PURE__ */ R({
  __name: "index",
  setup(e) {
    const { state: t } = A(), { currentTime: n, duration: d, playing: a, waiting: o } = t.videoControls, f = k(), v = k(!1), _ = k(""), p = async () => {
      _.value = pe(n.value), v.value = !0, await ke(), f.value.focus();
    }, c = () => {
      v.value = !1;
      const u = _.value.split(":");
      try {
        if (u.length === 1) {
          const l = +u[0];
          if (l >= 60)
            return;
          n.value = l;
        } else if (u.length === 2) {
          const l = +u[0], r = +u[1];
          if (l >= 60 || r >= 60)
            return;
          n.value = r + l * 60;
        } else if (u.length === 3) {
          const l = +u[0], r = +u[1], g = +u[2];
          if (r >= 60 || g >= 60)
            return;
          n.value = g + r * 60 + l * 3600;
        }
      } catch {
      }
    };
    return (u, l) => {
      const r = kn, g = hn;
      return h(), C("div", $n, [
        s("div", Cn, [
          z(Ce, {
            mode: "out-in",
            "enter-form-class": "bili-control-play-transiton",
            "leave-to-class": "bili-control-play-transiton"
          }, {
            default: V(() => [
              i(a) || i(o) ? (h(), B(r, {
                key: 0,
                onClick: l[0] || (l[0] = (b) => a.value = !1)
              })) : (h(), B(g, {
                key: 1,
                onClick: l[1] || (l[1] = (b) => a.value = !0)
              }))
            ]),
            _: 1
          })
        ]),
        v.value ? W((h(), C("input", {
          key: 1,
          ref_key: "inputRef",
          ref: f,
          "onUpdate:modelValue": l[2] || (l[2] = (b) => _.value = b),
          class: "bili-control-time-input",
          onKeydown: nt(c, ["enter"]),
          onBlur: l[3] || (l[3] = (b) => v.value = !1)
        }, null, 544)), [
          [we, _.value]
        ]) : (h(), C("div", {
          key: 0,
          class: "bili-control-current-time",
          onClick: p
        }, L(i(pe)(i(n))) + " / " + L(i(pe)(i(d))), 1))
      ]);
    };
  }
}), Mn = /* @__PURE__ */ D(xn, [["__scopeId", "data-v-6bacef68"]]), zn = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Sn = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M6 16h2v2c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1m2-8H6c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1zm7 11c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m1-11V6c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1z"
}, null, -1), Fn = [
  Sn
];
function En(e, t) {
  return h(), C("svg", zn, [...Fn]);
}
const Bn = { name: "svg-fullscreen-exit", render: En }, Tn = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Vn = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-2c0-.55-.45-1-1-1m0-4c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1zM14 6c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1"
}, null, -1), An = [
  Vn
];
function In(e, t) {
  return h(), C("svg", Tn, [...An]);
}
const Rn = { name: "svg-fullscreen-enter", render: In }, Hn = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Ln = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }),
  /* @__PURE__ */ s("path", {
    fill: "white",
    d: "M20 12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm-1-8a2 2 0 0 1 2 2v4a1 1 0 1 1-2 0V6H4v11h7a1 1 0 1 1 0 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1 10h-5v4h5zM10 8a1 1 0 1 1 0 2h-.586l1.915 1.915a1 1 0 0 1-1.414 1.414L8 11.414V12a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1z"
  })
], -1), Dn = [
  Ln
];
function Pn(e, t) {
  return h(), C("svg", Hn, [...Dn]);
}
const Zn = { name: "svg-pic-in-pic-exit", render: Pn }, On = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Un = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }),
  /* @__PURE__ */ s("path", {
    fill: "white",
    d: "M20 12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm-1-8a2 2 0 0 1 2 2v4a1 1 0 1 1-2 0V6H4v11h7a1 1 0 1 1 0 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1 10h-5v4h5zM7.087 7.673l1.915 1.915v-.586a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h.586L5.673 9.087a1 1 0 1 1 1.414-1.414"
  })
], -1), Nn = [
  Un
];
function qn(e, t) {
  return h(), C("svg", On, [...Nn]);
}
const Wn = { name: "svg-pic-in-pic-enter", render: qn }, jn = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Xn = /* @__PURE__ */ s("g", {
  fill: "none",
  "fill-rule": "evenodd"
}, [
  /* @__PURE__ */ s("path", {
    fill: "white",
    d: "M15 4.194v15.612a1.1 1.1 0 0 1-1.74.895L6.68 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.68l6.58-4.7a1.1 1.1 0 0 1 1.74.894m-2 1.75L7.842 9.626A2 2 0 0 1 6.68 10H4v4h2.68a2 2 0 0 1 1.162.372L13 18.057V5.943Zm5.255.917a1 1 0 0 1 1.412-.078A6.985 6.985 0 0 1 22 12a6.985 6.985 0 0 1-2.333 5.217a1 1 0 1 1-1.334-1.49A4.985 4.985 0 0 0 20 12c0-1.48-.642-2.81-1.667-3.727a1 1 0 0 1-.078-1.412m-.588 2.158A3.992 3.992 0 0 1 19 12a3.99 3.99 0 0 1-1.333 2.981a1 1 0 0 1-1.422-1.4l.088-.09c.41-.368.667-.899.667-1.491a1.99 1.99 0 0 0-.548-1.376l-.119-.115a1 1 0 0 1 1.334-1.49"
  })
], -1), Jn = [
  Xn
];
function Yn(e, t) {
  return h(), C("svg", jn, [...Jn]);
}
const Kn = { name: "svg-volume", render: Yn }, Gn = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Qn = /* @__PURE__ */ s("g", {
  fill: "none",
  "fill-rule": "evenodd"
}, [
  /* @__PURE__ */ s("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }),
  /* @__PURE__ */ s("path", {
    fill: "white",
    d: "m4.596 8l2 2H4v4h2.68a2 2 0 0 1 1.162.373L13 18.057v-1.653l2 2v1.402a1.1 1.1 0 0 1-1.74.895L6.68 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm8.665-4.7a1.1 1.1 0 0 1 1.733.78l.006.114v9.392l1.113 1.113a1 1 0 0 1 .132-1.119l.088-.089c.41-.368.667-.899.667-1.491a1.99 1.99 0 0 0-.548-1.376l-.119-.115a1 1 0 1 1 1.334-1.49A3.993 3.993 0 0 1 19 12a3.99 3.99 0 0 1-1.333 2.981a1 1 0 0 1-1.007.196l-.123-.054l1.47 1.47a.999.999 0 0 1 .326-.866A4.985 4.985 0 0 0 20 12c0-1.48-.642-2.81-1.667-3.727a1 1 0 1 1 1.334-1.49A6.985 6.985 0 0 1 22 12a6.985 6.985 0 0 1-2.333 5.217a.996.996 0 0 1-.669.255l-.119-.007l1.606 1.606a1 1 0 0 1-1.32 1.497l-.094-.083L3.515 4.93a1 1 0 0 1 1.32-1.497l.094.083L8.275 6.86l4.986-3.562ZM13 5.942L9.709 8.294L13 11.586z"
  })
], -1), e1 = [
  Qn
];
function t1(e, t) {
  return h(), C("svg", Gn, [...e1]);
}
const n1 = { name: "svg-mute", render: t1 }, o1 = { class: "bili-popover-content" }, l1 = /* @__PURE__ */ R({
  __name: "popover",
  props: {
    contentEvent: { type: Boolean },
    disabled: { type: Boolean },
    keepOpen: { type: Boolean }
  },
  setup(e) {
    const t = k(!1);
    return (n, d) => (h(), C("div", {
      class: "bili-popover",
      onMouseenter: d[0] || (d[0] = (a) => t.value = !0),
      onMouseleave: d[1] || (d[1] = (a) => t.value = !1)
    }, [
      z(Ce, {
        "enter-from-class": "op-0",
        "leave-to-class": "op-0"
      }, {
        default: V(() => [
          W(s("div", {
            class: Z(["bili-popover-container", { "pointer-events-none": n.contentEvent }])
          }, [
            s("div", o1, [
              U(n.$slots, "content", {}, void 0, !0)
            ])
          ], 2), [
            [se, !n.disabled && (t.value || n.keepOpen)]
          ])
        ]),
        _: 3
      }),
      U(n.$slots, "default", {}, void 0, !0)
    ], 32));
  }
}), ue = /* @__PURE__ */ D(l1, [["__scopeId", "data-v-8a42e0b3"]]), s1 = { class: "bili-tooltip-text" }, i1 = /* @__PURE__ */ R({
  __name: "tooltip",
  props: {
    content: {},
    disabled: { type: Boolean },
    keepOpen: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (h(), B(ue, {
      "content-event": "",
      disabled: t.disabled,
      "keep-open": t.keepOpen
    }, {
      content: V(() => [
        s("div", s1, L(t.content), 1)
      ]),
      default: V(() => [
        U(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["disabled", "keep-open"]));
  }
}), ye = /* @__PURE__ */ D(i1, [["__scopeId", "data-v-706a4ee0"]]), a1 = (e) => (ie("data-v-1b062f0c"), e = e(), ae(), e), c1 = { class: "bili-slider-container" }, r1 = /* @__PURE__ */ a1(() => /* @__PURE__ */ s("div", { class: "bili-slider-dot" }, null, -1)), u1 = [
  r1
], d1 = /* @__PURE__ */ R({
  __name: "slider",
  props: {
    value: {},
    max: { default: 1 },
    min: { default: 0 }
  },
  emits: ["update:value"],
  setup(e, { emit: t }) {
    const n = e, a = _e(n, "value", t), o = k(), { width: f } = ze(o), v = (l) => {
      l > n.max && (l = n.max), l < n.min && (l = n.min), a.value = l;
    };
    let _ = !1;
    const p = (l) => {
      _ = !0, v(l.offsetX / f.value * (n.max - n.min) + n.min);
    }, c = (l) => {
      _ = !1;
    }, u = (l) => {
      _ && v(l.offsetX / f.value * (n.max - n.min) + n.min);
    };
    return ee(() => {
      window.addEventListener("mouseup", c);
    }), fe(() => {
      window.removeEventListener("mouseup", c);
    }), (l, r) => (h(), C("div", {
      class: "bili-slider",
      onMousedown: p,
      onMousemove: u
    }, [
      s("div", {
        ref_key: "sliderContainerRef",
        ref: o
      }, [
        s("div", c1, [
          s("div", {
            class: "bili-slider-var",
            style: H({
              width: `${1 / (l.max - l.min) * (i(a) - l.min) * i(f)}px`
            })
          }, u1, 4)
        ])
      ], 512)
    ], 32));
  }
}), ve = /* @__PURE__ */ D(d1, [["__scopeId", "data-v-1b062f0c"]]), v1 = (e) => (ie("data-v-bb3f9299"), e = e(), ae(), e), p1 = { class: "bili-slider-vertical" }, m1 = { class: "bili-slider-container" }, f1 = /* @__PURE__ */ v1(() => /* @__PURE__ */ s("div", { class: "bili-slider-dot" }, null, -1)), _1 = [
  f1
], h1 = /* @__PURE__ */ R({
  __name: "slider-vertical",
  props: {
    value: {}
  },
  emits: ["update:value"],
  setup(e, { emit: t }) {
    const a = _e(e, "value", t), o = k(), { height: f } = ze(o);
    let v = !1;
    const _ = (u) => {
      v = !0;
      const l = 1 - u.offsetY / f.value;
      a.value = l > 1 ? 1 : l;
    }, p = (u) => {
      v = !1;
    }, c = (u) => {
      if (!v)
        return;
      const l = 1 - u.offsetY / f.value;
      a.value = l > 1 ? 1 : l;
    };
    return ee(() => {
      window.addEventListener("mouseup", p);
    }), fe(() => {
      window.removeEventListener("mouseup", p);
    }), (u, l) => (h(), C("div", p1, [
      s("div", {
        ref_key: "sliderContainerRef",
        ref: o,
        onMousedown: _,
        onMousemove: c
      }, [
        s("div", m1, [
          s("div", {
            class: "bili-slider-var",
            style: H({
              height: `${i(a) * i(f)}px`
            })
          }, _1, 4)
        ])
      ], 544)
    ]));
  }
}), g1 = /* @__PURE__ */ D(h1, [["__scopeId", "data-v-bb3f9299"]]), b1 = { class: "bili-choose" }, w1 = ["onClick"], y1 = /* @__PURE__ */ R({
  __name: "choose",
  props: {
    value: {},
    options: {}
  },
  emits: ["update:value"],
  setup(e, { emit: t }) {
    const a = _e(e, "value", t);
    return (o, f) => (h(), C("div", b1, [
      (h(!0), C(ce, null, re(o.options, (v) => (h(), C("div", {
        key: v.value,
        class: Z(["bili-choose-item", { "bili-choose-item-active": i(a) === v.value }]),
        onClick: (_) => a.value = v.value
      }, L(v.label), 11, w1))), 128))
    ]));
  }
}), k1 = /* @__PURE__ */ D(y1, [["__scopeId", "data-v-659577ae"]]), $1 = { class: "bili-control-right" }, C1 = { class: "bili-control-rate-text" }, x1 = { class: "bili-control-volume-text" }, M1 = /* @__PURE__ */ R({
  __name: "index",
  setup(e) {
    const { state: t } = A(), { rate: n, muted: d, volume: a, isPictureInPicture: o, togglePictureInPicture: f } = t.videoControls, { isFullscreen: v, toggle: _ } = t.fullscreenControls, p = [
      { label: "2.0x", value: 2 },
      { label: "1.5x", value: 1.5 },
      { label: "1.25x", value: 1.25 },
      { label: "1.0x", value: 1 },
      { label: "0.75x", value: 0.75 },
      { label: "0.5x", value: 0.5 }
    ];
    return (c, u) => {
      const l = n1, r = Kn, g = Wn, b = Zn, $ = Rn, w = Bn;
      return h(), C("div", $1, [
        z(i(ue), { class: "bili-control-item" }, {
          content: V(() => [
            z(i(k1), {
              value: i(n),
              "onUpdate:value": u[0] || (u[0] = (x) => Te(n) ? n.value = x : null),
              options: p
            }, null, 8, ["value"])
          ]),
          default: V(() => [
            s("div", C1, L(i(n) === 1 ? "倍数" : `${i(n)}x`), 1)
          ]),
          _: 1
        }),
        z(i(ue), { class: "bili-control-item-else" }, {
          content: V(() => [
            W(s("div", null, [
              s("div", x1, L(Math.floor(i(a) * 100)), 1),
              z(i(g1), {
                value: i(a),
                "onUpdate:value": u[1] || (u[1] = (x) => Te(a) ? a.value = x : null),
                class: "bili-control-volume-slider"
              }, null, 8, ["value"])
            ], 512), [
              [se, !i(d)]
            ])
          ]),
          default: V(() => [
            s("div", {
              class: "bili-control-icon",
              onClick: u[2] || (u[2] = (x) => d.value = !i(d))
            }, [
              i(d) ? (h(), B(l, { key: 0 })) : (h(), B(r, { key: 1 }))
            ])
          ]),
          _: 1
        }),
        z(i(ye), {
          class: "bili-control-item-else",
          content: i(o) ? "退出画中画" : "开启画中画"
        }, {
          default: V(() => [
            s("div", {
              class: "bili-control-icon",
              onClick: u[3] || (u[3] = //@ts-ignore
              (...x) => i(f) && i(f)(...x))
            }, [
              i(o) ? (h(), B(b, { key: 1 })) : (h(), B(g, { key: 0 }))
            ])
          ]),
          _: 1
        }, 8, ["content"]),
        z(i(ye), {
          class: "bili-control-item-else",
          content: i(v) ? "退出全屏(f)" : "进入全屏(f)"
        }, {
          default: V(() => [
            s("div", {
              class: "bili-control-icon bili-icon-larger",
              onClick: u[4] || (u[4] = //@ts-ignore
              (...x) => i(_) && i(_)(...x))
            }, [
              i(v) ? (h(), B(w, { key: 1 })) : (h(), B($, { key: 0 }))
            ])
          ]),
          _: 1
        }, 8, ["content"])
      ]);
    };
  }
}), z1 = /* @__PURE__ */ D(M1, [["__scopeId", "data-v-c1ca5566"]]), S1 = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  "data-pointer": "none",
  viewBox: "0 0 24 24"
}, F1 = /* @__PURE__ */ s("path", {
  fill: "#ddd",
  "fill-rule": "evenodd",
  d: "m8.085 4.891-.999-1.499a1.008 1.008 0 0 1 1.679-1.118l1.709 2.566c.54-.008 1.045-.012 1.515-.012h.13c.345 0 .707.003 1.088.007l1.862-2.59a1.008 1.008 0 0 1 1.637 1.177l-1.049 1.46c.788.02 1.631.046 2.53.078 1.958.069 3.468 1.6 3.74 3.507.088.613.13 2.158.16 3.276l.001.027c.01.333.017.63.025.856a.987.987 0 0 1-1.974.069c-.008-.23-.016-.539-.025-.881v-.002c-.028-1.103-.066-2.541-.142-3.065-.143-1.004-.895-1.78-1.854-1.813-2.444-.087-4.466-.13-6.064-.131-1.598 0-3.619.044-6.063.13a2.037 2.037 0 0 0-1.945 1.748c-.15 1.04-.225 2.341-.225 3.904 0 1.874.11 3.474.325 4.798.154.949.95 1.66 1.91 1.708a97.58 97.58 0 0 0 5.416.139.988.988 0 0 1 0 1.975c-2.196 0-3.61-.047-5.513-.141A4.012 4.012 0 0 1 2.197 17.7c-.236-1.446-.351-3.151-.351-5.116 0-1.64.08-3.035.245-4.184A4.013 4.013 0 0 1 5.92 4.96c.761-.027 1.483-.05 2.164-.069Zm4.436 4.707h-1.32v4.63h2.222v.848h-2.618v1.078h2.431a5.01 5.01 0 0 1 3.575-3.115V9.598h-1.276a8.59 8.59 0 0 0 .748-1.42l-1.089-.384a14.232 14.232 0 0 1-.814 1.804h-1.518l.693-.308a8.862 8.862 0 0 0-.814-1.408l-1.045.352c.297.396.572.847.825 1.364Zm-4.18 3.564.154-1.485h1.98V8.289h-3.2v.979h2.067v1.43H7.483l-.308 3.454h2.277c0 1.166-.044 1.925-.12 2.277-.078.352-.386.528-.936.528-.308 0-.616-.022-.902-.055l.297 1.067.062.004c.285.02.551.04.818.04 1.001-.066 1.562-.418 1.694-1.056.11-.638.176-1.903.176-3.795h-2.2Zm7.458.11v-.858h-1.254v.858H15.8Zm-2.376-.858v.858h-1.199v-.858h1.2Zm-1.199-.946h1.2v-.902h-1.2v.902Zm2.321 0v-.902H15.8v.902h-1.254Zm3.517 10.594a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-.002-1.502a2.5 2.5 0 0 1-2.217-3.657l3.326 3.398a2.49 2.49 0 0 1-1.109.259Zm2.5-2.5c0 .42-.103.815-.286 1.162l-3.328-3.401a2.5 2.5 0 0 1 3.614 2.239Z",
  "clip-rule": "evenodd"
}, null, -1), E1 = [
  F1
];
function B1(e, t) {
  return h(), C("svg", S1, [...E1]);
}
const T1 = { name: "svg-danmaku-off", render: B1 }, V1 = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  "data-pointer": "none",
  viewBox: "0 0 24 24"
}, A1 = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  "fill-rule": "evenodd",
  d: "M11.989 4.828c-.47 0-.975.004-1.515.012l-1.71-2.566a1.008 1.008 0 0 0-1.678 1.118l.999 1.5c-.681.018-1.403.04-2.164.068a4.013 4.013 0 0 0-3.83 3.44c-.165 1.15-.245 2.545-.245 4.185 0 1.965.115 3.67.35 5.116a4.012 4.012 0 0 0 3.763 3.363l.906.046c1.205.063 1.808.095 3.607.095a.988.988 0 0 0 0-1.975c-1.758 0-2.339-.03-3.501-.092l-.915-.047a2.037 2.037 0 0 1-1.91-1.708c-.216-1.324-.325-2.924-.325-4.798 0-1.563.076-2.864.225-3.904.14-.977.96-1.713 1.945-1.747 2.444-.087 4.465-.13 6.063-.131 1.598 0 3.62.044 6.064.13.96.034 1.71.81 1.855 1.814.075.524.113 1.962.141 3.065v.002c.01.342.017.65.025.88a.987.987 0 1 0 1.974-.068c-.008-.226-.016-.523-.025-.856v-.027c-.03-1.118-.073-2.663-.16-3.276-.273-1.906-1.783-3.438-3.74-3.507-.9-.032-1.743-.058-2.531-.078l1.05-1.46a1.008 1.008 0 0 0-1.638-1.177l-1.862 2.59c-.38-.004-.744-.007-1.088-.007h-.13Zm.521 4.775h-1.32v4.631h2.222v.847h-2.618v1.078h2.618l.003.678c.36.026.714.163 1.01.407h.11v-1.085h2.694v-1.078h-2.695v-.847H16.8v-4.63h-1.276a8.59 8.59 0 0 0 .748-1.42L15.183 7.8a14.232 14.232 0 0 1-.814 1.804h-1.518l.693-.308a8.862 8.862 0 0 0-.814-1.408l-1.045.352c.297.396.572.847.825 1.364Zm-4.18 3.564.154-1.485h1.98V8.294h-3.2v.98H9.33v1.43H7.472l-.308 3.453h2.277c0 1.166-.044 1.925-.12 2.277-.078.352-.386.528-.936.528-.308 0-.616-.022-.902-.055l.297 1.067.062.005c.285.02.551.04.818.04 1.001-.067 1.562-.419 1.694-1.057.11-.638.176-1.903.176-3.795h-2.2Zm7.458.11v-.858h-1.254v.858h1.254Zm-2.376-.858v.858h-1.199v-.858h1.2Zm-1.199-.946h1.2v-.902h-1.2v.902Zm2.321 0v-.902h1.254v.902h-1.254Z",
  "clip-rule": "evenodd"
}, null, -1), I1 = /* @__PURE__ */ s("path", {
  fill: "#00AEEC",
  "fill-rule": "evenodd",
  d: "M22.846 14.627a1 1 0 0 0-1.412.075l-5.091 5.703-2.216-2.275-.097-.086-.008-.005a1 1 0 0 0-1.322 1.493l2.963 3.041.093.083.007.005c.407.315 1 .27 1.354-.124l5.81-6.505.08-.102.005-.008a1 1 0 0 0-.166-1.295Z",
  "clip-rule": "evenodd"
}, null, -1), R1 = [
  A1,
  I1
];
function H1(e, t) {
  return h(), C("svg", V1, [...R1]);
}
const L1 = { name: "svg-danmaku-on", render: H1 }, D1 = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  "data-pointer": "none",
  viewBox: "0 0 24 24"
}, P1 = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  "fill-rule": "evenodd",
  d: "m15.645 4.881 1.06-1.473a.998.998 0 1 0-1.622-1.166L13.22 4.835a110.67 110.67 0 0 0-1.1-.007h-.131c-.47 0-.975.004-1.515.012L8.783 2.3A.998.998 0 0 0 7.12 3.408l.988 1.484c-.688.019-1.418.042-2.188.069a4.013 4.013 0 0 0-3.83 3.44c-.165 1.15-.245 2.545-.245 4.185 0 1.965.115 3.67.35 5.116a4.012 4.012 0 0 0 3.763 3.363c1.903.094 3.317.141 5.513.141a.988.988 0 0 0 0-1.975 97.58 97.58 0 0 1-5.416-.139 2.037 2.037 0 0 1-1.91-1.708c-.216-1.324-.325-2.924-.325-4.798 0-1.563.076-2.864.225-3.904.14-.977.96-1.713 1.945-1.747 2.444-.087 4.465-.13 6.063-.131 1.598 0 3.62.044 6.064.13.96.034 1.71.81 1.855 1.814.075.524.113 1.962.141 3.065v.002c.005.183.01.07.014-.038.004-.096.008-.189.011-.081a.987.987 0 1 0 1.974-.069c-.004-.105-.007-.009-.011.09-.002.056-.004.112-.007.135l-.002.01a.574.574 0 0 1-.005-.091v-.027c-.03-1.118-.073-2.663-.16-3.276-.273-1.906-1.783-3.438-3.74-3.507-.905-.032-1.752-.058-2.543-.079Zm-3.113 4.703h-1.307v4.643h2.2v.04l.651-1.234c.113-.215.281-.389.482-.509v-.11h.235c.137-.049.283-.074.433-.074h1.553V9.584h-1.264a8.5 8.5 0 0 0 .741-1.405l-1.078-.381c-.24.631-.501 1.23-.806 1.786h-1.503l.686-.305c-.228-.501-.5-.959-.806-1.394l-1.034.348c.294.392.566.839.817 1.35Zm-1.7 5.502h2.16l-.564 1.068h-1.595v-1.068Zm-2.498-1.863.152-1.561h1.96V8.289H7.277v.969h2.048v1.435h-1.84l-.306 3.51h2.254c0 1.155-.043 1.906-.12 2.255-.076.348-.38.523-.925.523-.305 0-.61-.022-.893-.055l.294 1.056.061.005c.282.02.546.039.81.039.991-.065 1.547-.414 1.677-1.046.11-.631.175-1.883.175-3.757H8.334Zm5.09-.8v.85h-1.188v-.85h1.187Zm-1.188-.955h1.187v-.893h-1.187v.893Zm2.322.007v-.893h1.241v.893h-1.241Zm.528 2.757a1.26 1.26 0 0 1 1.087-.627l4.003-.009a1.26 1.26 0 0 1 1.094.63l1.721 2.982c.226.39.225.872-.001 1.263l-1.743 3a1.26 1.26 0 0 1-1.086.628l-4.003.009a1.26 1.26 0 0 1-1.094-.63l-1.722-2.982a1.26 1.26 0 0 1 .002-1.263l1.742-3Zm1.967.858a1.26 1.26 0 0 0-1.08.614l-.903 1.513a1.26 1.26 0 0 0-.002 1.289l.885 1.492c.227.384.64.62 1.086.618l2.192-.005a1.26 1.26 0 0 0 1.08-.615l.904-1.518a1.26 1.26 0 0 0 .001-1.288l-.884-1.489a1.26 1.26 0 0 0-1.086-.616l-2.193.005Zm2.517 2.76a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Z",
  "clip-rule": "evenodd"
}, null, -1), Z1 = [
  P1
];
function O1(e, t) {
  return h(), C("svg", D1, [...Z1]);
}
const U1 = { name: "svg-danmaku-setting", render: O1 }, N1 = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  "data-pointer": "none",
  style: { "enable-background": "new 0 0 28 28" },
  viewBox: "0 0 28 28"
}, q1 = /* @__PURE__ */ s("path", {
  fill: "#00aeec",
  d: "M17.823 15.247c.612 0 1.148-.535 1.148-1.147s-.536-1.147-1.148-1.147c-.611 0-1.147.535-1.147 1.147s.536 1.147 1.147 1.147zM17.365 11.118c0-.612-.535-1.147-1.147-1.147s-1.147.535-1.147 1.147c0 .611.535 1.147 1.147 1.147s1.147-.536 1.147-1.147z"
}, null, -1), W1 = /* @__PURE__ */ s("path", {
  fill: "#00aeec",
  d: "M18.235 16.872c-1.483.086-2.859-.172-3.546.516-.918.918 1.529 1.606 0 2.219-1.988.84-7.341-.535-8.182-4.053-.841-3.441 2.905-6.5 5.888-7.035 2.906-.535 6.041.841 8.181 2.982 1.208 1.253 1.265 2.663.782 3.694A6.938 6.938 0 0 1 23 15c1.487 0 2.866.464 4 1.255V7.167C27 4.833 25.318 3 23.177 3H4.824C2.683 3 1 4.833 1 7.167v13.665C1 23.167 2.683 25 4.824 25h11.85A6.97 6.97 0 0 1 16 22c0-2.025.86-3.85 2.235-5.128z"
}, null, -1), j1 = /* @__PURE__ */ s("path", {
  fill: "#00aeec",
  d: "M8.876 16.319c0 .611.535 1.146 1.147 1.146s1.147-.535 1.147-1.146c0-.612-.535-1.148-1.147-1.148s-1.147.536-1.147 1.148zM9.794 11.883c-.764 0-1.376.612-1.376 1.3 0 .689.612 1.3 1.376 1.3s1.376-.611 1.376-1.3c.001-.688-.611-1.3-1.376-1.3zM11.553 10.965c0 .689.612 1.301 1.376 1.301s1.376-.612 1.376-1.301-.612-1.3-1.376-1.3-1.376.611-1.376 1.3zM26.536 18.464a5 5 0 0 0-7.071 0 5 5 0 0 0 0 7.071 5 5 0 1 0 7.071-7.071zm-5.657 5.657a3 3 0 0 1-.586-3.415l4.001 4.001a3 3 0 0 1-3.415-.586zm4.829-.827-4.001-4.001a3.002 3.002 0 0 1 4.001 4.001z"
}, null, -1), X1 = [
  q1,
  W1,
  j1
];
function J1(e, t) {
  return h(), C("svg", N1, [...X1]);
}
const Y1 = { name: "svg-danmaku-color-off", render: J1 }, K1 = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  "data-pointer": "none",
  style: { "enable-background": "new 0 0 28 28" },
  viewBox: "0 0 28 28"
}, G1 = /* @__PURE__ */ s("path", {
  fill: "white",
  d: "M17.365 11.118c0-.612-.535-1.147-1.147-1.147s-1.147.535-1.147 1.147c0 .611.535 1.147 1.147 1.147s1.147-.536 1.147-1.147zM12.93 9.665c-.764 0-1.376.611-1.376 1.3 0 .689.612 1.301 1.376 1.301s1.376-.612 1.376-1.301-.612-1.3-1.376-1.3zM9.794 11.883c-.764 0-1.376.612-1.376 1.3 0 .689.612 1.3 1.376 1.3s1.376-.611 1.376-1.3c.001-.688-.611-1.3-1.376-1.3zM10.023 15.171c-.612 0-1.147.536-1.147 1.148 0 .611.535 1.146 1.147 1.146s1.147-.535 1.147-1.146c.001-.612-.535-1.148-1.147-1.148zM17.823 12.953c-.611 0-1.147.535-1.147 1.147s.536 1.147 1.147 1.147c.612 0 1.148-.535 1.148-1.147s-.536-1.147-1.148-1.147z"
}, null, -1), Q1 = /* @__PURE__ */ s("path", {
  fill: "white",
  d: "M23.177 3H4.824C2.683 3 1 4.833 1 7.167v13.665C1 23.167 2.683 25 4.824 25h18.353C25.318 25 27 23.167 27 20.833V7.167C27 4.833 25.318 3 23.177 3zm-3.442 13.624c-1.987.612-4.129-.154-5.046.764-.918.918 1.529 1.606 0 2.219-1.988.84-7.341-.535-8.182-4.053-.841-3.441 2.905-6.5 5.888-7.035 2.906-.535 6.041.841 8.181 2.982 2.065 2.141.765 4.74-.841 5.123z"
}, null, -1), eo = [
  G1,
  Q1
];
function to(e, t) {
  return h(), C("svg", K1, [...eo]);
}
const no = { name: "svg-danmaku-color-on", render: to }, oo = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  "data-pointer": "none",
  style: { "enable-background": "new 0 0 28 28" },
  viewBox: "0 0 28 28"
}, lo = /* @__PURE__ */ s("path", {
  fill: "#00aeec",
  d: "M23 15c1.487 0 2.866.464 4 1.255V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h11.674A7 7 0 0 1 23 15zM9 21H7v-2h2v2zm4 0h-2v-2h2v2z"
}, null, -1), so = /* @__PURE__ */ s("path", {
  fill: "#00aeec",
  d: "M26.536 18.464a5 5 0 0 0-7.071 0 5 5 0 0 0 0 7.071 5 5 0 1 0 7.071-7.071zm-5.657 5.657a3 3 0 0 1-.586-3.415l4.001 4.001a3 3 0 0 1-3.415-.586zm4.829-.827-4.001-4.001a3.002 3.002 0 0 1 4.001 4.001z"
}, null, -1), io = [
  lo,
  so
];
function ao(e, t) {
  return h(), C("svg", oo, [...io]);
}
const co = { name: "svg-danmaku-bottom-off", render: ao }, ro = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  "data-pointer": "none",
  style: { "enable-background": "new 0 0 28 28" },
  viewBox: "0 0 28 28"
}, uo = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M23 3H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM9 21H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"
}, null, -1), vo = [
  uo
];
function po(e, t) {
  return h(), C("svg", ro, [...vo]);
}
const je = { name: "svg-danmaku-bottom-on", render: po }, mo = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  "data-pointer": "none",
  style: { "enable-background": "new 0 0 28 28" },
  viewBox: "0 0 28 28"
}, fo = /* @__PURE__ */ s("path", {
  fill: "#00aeec",
  d: "M23 15c1.487 0 2.866.464 4 1.255V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h11.674A7 7 0 0 1 23 15zm-4-8h2v2h-2V7zM9 9H7V7h2v2zm4 0h-2V7h2v2zm2-2h2v2h-2V7z"
}, null, -1), _o = /* @__PURE__ */ s("path", {
  fill: "#00aeec",
  d: "M26.536 18.464a5 5 0 0 0-7.071 0 5 5 0 0 0 0 7.071 5 5 0 1 0 7.071-7.071zm-5.657 5.657a3 3 0 0 1-.586-3.415l4.001 4.001a3 3 0 0 1-3.415-.586zm4.829-.827-4.001-4.001a3.002 3.002 0 0 1 4.001 4.001z"
}, null, -1), ho = [
  fo,
  _o
];
function go(e, t) {
  return h(), C("svg", mo, [...ho]);
}
const bo = { name: "svg-danmaku-top-off", render: go }, wo = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  "data-pointer": "none",
  style: { "enable-background": "new 0 0 28 28" },
  viewBox: "0 0 28 28"
}, yo = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M23 3H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM9 9H7V7h2v2zm4 0h-2V7h2v2zm4 0h-2V7h2v2zm4 0h-2V7h2v2z"
}, null, -1), ko = [
  yo
];
function $o(e, t) {
  return h(), C("svg", wo, [...ko]);
}
const Xe = { name: "svg-danmaku-top-on", render: $o }, Co = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  "data-pointer": "none",
  style: { "enable-background": "new 0 0 28 28" },
  viewBox: "0 0 28 28"
}, xo = /* @__PURE__ */ s("path", {
  fill: "#00aeec",
  d: "M23 15c1.487 0 2.866.464 4 1.255V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h11.674A7 7 0 0 1 23 15zM11 9h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm-3 2H6V9h2v2zm4 4h-2v-2h2v2zm2-1a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1z"
}, null, -1), Mo = /* @__PURE__ */ s("path", {
  fill: "#00aeec",
  d: "M26.536 18.464a5 5 0 0 0-7.071 0 5 5 0 0 0 0 7.071 5 5 0 1 0 7.071-7.071zm-5.657 5.657a3 3 0 0 1-.586-3.415l4.001 4.001a3 3 0 0 1-3.415-.586zm4.829-.827-4.001-4.001a3.002 3.002 0 0 1 4.001 4.001z"
}, null, -1), zo = [
  xo,
  Mo
];
function So(e, t) {
  return h(), C("svg", Co, [...zo]);
}
const Fo = { name: "svg-danmaku-move-off", render: So }, Eo = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  "data-pointer": "none",
  style: { "enable-background": "new 0 0 28 28" },
  viewBox: "0 0 28 28"
}, Bo = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M23 3H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM11 9h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm-3 2H6V9h2v2zm4 4h-2v-2h2v2zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"
}, null, -1), To = [
  Bo
];
function Vo(e, t) {
  return h(), C("svg", Eo, [...To]);
}
const Je = { name: "svg-danmaku-move-on", render: Vo }, Ee = (e) => (ie("data-v-a9f5effa"), e = e(), ae(), e), Ao = { class: "bili-danma-setting-container" }, Io = /* @__PURE__ */ Ee(() => /* @__PURE__ */ s("div", null, "按类型屏蔽", -1)), Ro = { class: "bili-setting-type" }, Ho = { class: "bili-setting-slider" }, Lo = { class: "bili-setting-slider" }, Do = { class: "bili-setting-slider" }, Po = { class: "bili-setting-slider" }, Zo = /* @__PURE__ */ Ee(() => /* @__PURE__ */ s("div", { class: "bili-divider" }, null, -1)), Oo = { class: "bili-setting-bold" }, Uo = { class: "" }, No = /* @__PURE__ */ Ee(() => /* @__PURE__ */ s("div", null, "粗体", -1)), qo = /* @__PURE__ */ R({
  __name: "setting",
  setup(e) {
    const { state: t } = Y(), { state: n } = A(), { isFullscreen: d } = n.fullscreenControls;
    return (a, o) => {
      const f = Je, v = Fo, _ = Xe, p = bo, c = je, u = co, l = no, r = Y1, g = U1;
      return h(), B(i(ue), {
        disabled: !i(t).show
      }, {
        content: V(() => [
          s("div", Ao, [
            Io,
            s("div", Ro, [
              s("div", {
                onClick: o[0] || (o[0] = (b) => i(t).visible.move = !i(t).visible.move)
              }, [
                s("div", null, [
                  i(t).visible.move ? (h(), B(f, { key: 0 })) : (h(), B(v, { key: 1 }))
                ]),
                O(" 滚动 ")
              ]),
              s("div", {
                onClick: o[1] || (o[1] = (b) => i(t).visible.top = !i(t).visible.top)
              }, [
                s("div", null, [
                  i(t).visible.top ? (h(), B(_, { key: 0 })) : (h(), B(p, { key: 1 }))
                ]),
                O(" 顶部 ")
              ]),
              s("div", {
                onClick: o[2] || (o[2] = (b) => i(t).visible.bottom = !i(t).visible.bottom)
              }, [
                s("div", null, [
                  i(t).visible.bottom ? (h(), B(c, { key: 0 })) : (h(), B(u, { key: 1 }))
                ]),
                O(" 底部 ")
              ]),
              s("div", {
                onClick: o[3] || (o[3] = (b) => i(t).visible.color = !i(t).visible.color)
              }, [
                s("div", null, [
                  i(t).visible.color ? (h(), B(l, { key: 0 })) : (h(), B(r, { key: 1 }))
                ]),
                O(" 彩色 ")
              ])
            ]),
            U(a.$slots, "extra", {}, void 0, !0),
            s("div", Ho, [
              O(" 不透明度 "),
              z(i(ve), {
                value: i(t).opacity,
                "onUpdate:value": o[4] || (o[4] = (b) => i(t).opacity = b),
                min: 0.1,
                max: 1
              }, null, 8, ["value"]),
              s("div", null, L(`${Math.ceil(i(t).opacity * 100)}%`), 1)
            ]),
            s("div", Lo, [
              O(" 显示区域 "),
              z(i(ve), {
                value: i(t).displaySize,
                "onUpdate:value": o[5] || (o[5] = (b) => i(t).displaySize = b),
                min: 0.25,
                max: 1
              }, null, 8, ["value"]),
              s("div", null, L(`${Math.ceil(i(t).displaySize * 100)}%`), 1)
            ]),
            s("div", Do, [
              O(" 弹幕字号 "),
              z(i(ve), {
                value: i(t).fontRatio,
                "onUpdate:value": o[6] || (o[6] = (b) => i(t).fontRatio = b),
                min: 0.5,
                max: 1.5
              }, null, 8, ["value"]),
              s("div", null, L(`${Math.ceil(i(t).fontRatio * 100)}%`), 1)
            ]),
            s("div", Po, [
              O(" 弹幕速度 "),
              z(i(ve), {
                value: i(t).speed,
                "onUpdate:value": o[7] || (o[7] = (b) => i(t).speed = b),
                min: 0.5,
                max: 2
              }, null, 8, ["value"]),
              s("div", null, L(`${Math.ceil(i(t).speed * 100)}%`), 1)
            ]),
            Zo,
            s("div", Oo, [
              s("div", null, [
                s("div", {
                  style: H({ backgroundColor: i(t).fontBold ? "#00aeec" : "white" }),
                  onClick: o[8] || (o[8] = (b) => i(t).fontBold = !i(t).fontBold)
                }, [
                  W(s("div", Uo, "√", 512), [
                    [se, i(t).fontBold]
                  ])
                ], 4)
              ]),
              No
            ])
          ])
        ]),
        default: V(() => [
          z(g, {
            class: Z(["bili-setting-trigger", { "cursor-no-drop": !i(t).show }]),
            style: H({
              color: i(t).show ? i(d) ? "white" : "#666" : "#ccc"
            })
          }, null, 8, ["class", "style"])
        ]),
        _: 3
      }, 8, ["disabled"]);
    };
  }
}), Wo = /* @__PURE__ */ D(qo, [["__scopeId", "data-v-a9f5effa"]]), jo = {
  class: "inline-block",
  width: "1em",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Xo = /* @__PURE__ */ s("g", {
  fill: "none",
  "fill-rule": "evenodd"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M8 3.5c.95 0 1.79.613 2.081 1.517l4.347 13.524a1.5 1.5 0 0 1-2.856.918L10.299 15.5H5.701l-1.273 3.959a1.5 1.5 0 0 1-2.856-.918L5.919 5.017A2.186 2.186 0 0 1 7.999 3.5ZM20.5 12a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-2.427 1.179a4 4 0 1 1 0-7.358c.255-.201.577-.321.927-.321M18 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2M8 8.346L6.665 12.5h2.67z"
  })
], -1), Jo = [
  Xo
];
function Yo(e, t) {
  return h(), C("svg", jo, [...Jo]);
}
const Ko = { name: "svg-text-color", render: Yo }, de = (e) => (ie("data-v-af56058e"), e = e(), ae(), e), Go = { class: "bili-send-container" }, Qo = { class: "bili-send-popup-content" }, e0 = /* @__PURE__ */ de(() => /* @__PURE__ */ s("div", null, "模式", -1)), t0 = { class: "bili-send-popup-item1 bili-send-color" }, n0 = /* @__PURE__ */ de(() => /* @__PURE__ */ s("div", null, "滚动", -1)), o0 = /* @__PURE__ */ de(() => /* @__PURE__ */ s("div", null, "顶部", -1)), l0 = /* @__PURE__ */ de(() => /* @__PURE__ */ s("div", null, "底部", -1)), s0 = /* @__PURE__ */ de(() => /* @__PURE__ */ s("div", { class: "bili-send-popup-title" }, "颜色", -1)), i0 = { class: "bili-send-popup-item1" }, a0 = { class: "bili-send-popup-item2" }, c0 = ["onClick"], r0 = { class: "bili-send-popup-item2" }, u0 = ["onClick"], d0 = ["placeholder", "disabled"], v0 = /* @__PURE__ */ R({
  __name: "send",
  setup(e) {
    const { state: t, send: n } = Y(), { state: d } = A(), { isFullscreen: a } = d.fullscreenControls, o = k({
      content: "",
      type: 0,
      color: "#FFFFFF",
      time: 0
    }), f = k(!1), v = k(!1), { counts: _, isCounting: p, start: c } = St(5), u = async (w) => {
      if (w.preventDefault(), !p.value && !v.value) {
        v.value = !0;
        try {
          [4, 7].includes(o.value.color.length) || (o.value.color = "#FFFFFF");
          const { videoControls: x } = A().state;
          o.value.time = x.currentTime.value, await n(o.value), o.value = {
            content: "",
            type: 0,
            color: "#FFFFFF",
            time: 0
          }, c();
        } finally {
          v.value = !1;
        }
      }
    };
    let l = o.value.color;
    const r = /^[0-9a-f]$/i, g = (w) => {
      const x = w, M = x.target.value || "";
      if (x.data && !r.test(x.data)) {
        o.value.color = l;
        return;
      }
      if (M[0] !== "#") {
        o.value.color = l;
        return;
      }
      o.value.color = M, l = M;
    }, b = [
      "#FE0302",
      "#FF7204",
      "#FFAA02",
      "#FFD302",
      "#FFFF00",
      "#A0EE00",
      "#00CD00"
    ], $ = [
      "#019899",
      "#019899",
      "#89D5FF",
      "#CC0273",
      "#222222",
      "#9B9B9B",
      "#FFFFFF"
    ];
    return (w, x) => {
      const M = Je, K = Xe, j = je, X = Ko;
      return h(), C("div", Go, [
        i(t).show ? (h(), B(i(ue), {
          key: 0,
          "keep-open": f.value
        }, {
          content: V(() => [
            s("div", Qo, [
              e0,
              s("div", t0, [
                s("div", {
                  onClick: x[0] || (x[0] = (F) => o.value.type = 0)
                }, [
                  z(M, {
                    class: Z({ "active-color": o.value.type === 0 })
                  }, null, 8, ["class"]),
                  n0
                ]),
                s("div", {
                  onClick: x[1] || (x[1] = (F) => o.value.type = 1)
                }, [
                  z(K, {
                    class: Z({ "active-color": o.value.type === 1 })
                  }, null, 8, ["class"]),
                  o0
                ]),
                s("div", {
                  onClick: x[2] || (x[2] = (F) => o.value.type = 2)
                }, [
                  z(j, {
                    class: Z({ "active-color": o.value.type === 2 })
                  }, null, 8, ["class"]),
                  l0
                ])
              ]),
              s0,
              s("div", i0, [
                W(s("input", {
                  "onUpdate:modelValue": x[3] || (x[3] = (F) => o.value.color = F),
                  maxlength: 7,
                  class: "bili-send-color-input",
                  onInput: g,
                  onFocus: x[4] || (x[4] = (F) => f.value = !0),
                  onBlur: x[5] || (x[5] = (F) => f.value = !1)
                }, null, 544), [
                  [we, o.value.color]
                ]),
                s("div", {
                  class: "bili-send-color-display",
                  style: H({ background: o.value.color })
                }, null, 4)
              ]),
              s("div", a0, [
                (h(), C(ce, null, re(b, (F) => s("div", {
                  key: F,
                  class: Z({ "bili-send-color-active": o.value.color === F }),
                  style: H({
                    background: F,
                    boxShadow: o.value.color === F ? `0 0 4px ${F}` : ""
                  }),
                  onClick: (te) => o.value.color = F
                }, null, 14, c0)), 64))
              ]),
              s("div", r0, [
                (h(), C(ce, null, re($, (F) => s("div", {
                  key: F,
                  class: Z({ "bili-send-color-active": o.value.color === F }),
                  style: H({
                    background: F,
                    boxShadow: o.value.color === F ? `0 0 4px ${F}` : ""
                  }),
                  onClick: (te) => o.value.color = F
                }, null, 14, u0)), 64))
              ])
            ])
          ]),
          default: V(() => [
            z(X, {
              class: "bili-send-icon-setting",
              style: H({ color: i(a) ? "white" : "#777" })
            }, null, 8, ["style"])
          ]),
          _: 1
        }, 8, ["keep-open"])) : ot("", !0),
        s("form", {
          onSubmit: u,
          class: "bili-send-form"
        }, [
          W(s("input", {
            "onUpdate:modelValue": x[6] || (x[6] = (F) => o.value.content = F),
            style: H({ color: i(a) ? "white" : "black" }),
            placeholder: i(t).show ? "发个友善的弹幕见证当下" : "已关闭弹幕",
            disabled: !i(t).show || i(p)
          }, null, 12, d0), [
            [we, o.value.content]
          ]),
          s("button", {
            type: "submit",
            style: H({
              backgroundColor: i(t).show && !i(p) ? "#00aeec" : "#bbb",
              cursor: i(t).show && !i(p) ? "pointer" : "not-allowed"
            })
          }, L(i(p) ? `${i(_)}秒` : "发送"), 5)
        ], 32)
      ]);
    };
  }
}), p0 = /* @__PURE__ */ D(v0, [["__scopeId", "data-v-af56058e"]]), m0 = { class: "bili-control-center" }, f0 = /* @__PURE__ */ R({
  __name: "index",
  setup(e) {
    const { state: t, hide: n, show: d } = Y(), { state: a } = A(), { isFullscreen: o } = a.fullscreenControls, f = () => {
      t.show ? n() : d();
    };
    return (v, _) => {
      var u, l;
      const p = L1, c = T1;
      return h(), C("div", m0, [
        s("div", null, [
          z(i(ye), {
            content: i(t).show ? "关闭弹幕(d)" : "开启弹幕(d)"
          }, {
            default: V(() => [
              i(t).show ? (h(), B(p, {
                key: 0,
                class: "bili-control-icon",
                style: H({ color: i(o) ? "white" : "#666" }),
                onClick: f
              }, null, 8, ["style"])) : (h(), B(c, {
                key: 1,
                class: "bili-control-icon",
                style: H({ color: i(o) ? "white" : "#666" }),
                onClick: f
              }, null, 8, ["style"]))
            ]),
            _: 1
          }, 8, ["content"])
        ]),
        s("div", null, [
          z(i(Wo), null, me({ _: 2 }, [
            (l = (u = v.$slots).settingExtra) != null && l.call(u) ? {
              name: "extra",
              fn: V((r) => [
                U(v.$slots, "setting-extra", oe(le(r)), void 0, !0)
              ]),
              key: "0"
            } : void 0
          ]), 1024)
        ]),
        s("div", null, [
          z(i(p0))
        ])
      ]);
    };
  }
}), Ye = /* @__PURE__ */ D(f0, [["__scopeId", "data-v-22491b44"]]), _0 = { class: "bili-control-container" }, h0 = /* @__PURE__ */ R({
  __name: "index",
  props: {
    hidden: { type: Boolean }
  },
  setup(e) {
    const { state: t } = A(), { isFullscreen: n } = t.fullscreenControls;
    return (d, a) => {
      var o, f;
      return h(), C("div", _0, [
        z(i(vn), {
          class: Z(["bili-control-process", { "op-0": d.hidden }])
        }, null, 8, ["class"]),
        s("div", {
          class: Z(["bili-control-send", { "op-0": d.hidden }])
        }, [
          z(i(Mn)),
          W(z(i(Ye), { class: "bili-control-input" }, me({ _: 2 }, [
            (f = (o = d.$slots).settingExtra) != null && f.call(o) ? {
              name: "setting-extra",
              fn: V((v) => [
                U(d.$slots, "setting-extra", oe(le(v)), void 0, !0)
              ]),
              key: "0"
            } : void 0
          ]), 1536), [
            [se, i(n)]
          ]),
          z(i(z1))
        ], 2)
      ]);
    };
  }
}), g0 = /* @__PURE__ */ D(h0, [["__scopeId", "data-v-8d6caaea"]]), b0 = { class: "bili-descrip-container" }, w0 = { class: "bili-descrip-title" }, y0 = /* @__PURE__ */ R({
  __name: "index",
  props: {
    show: { type: Boolean }
  },
  emits: ["update:show"],
  setup(e, { emit: t }) {
    const a = _e(e, "show", t), o = [
      { value: "Space", label: "播放/暂停" },
      { value: "→", label: "单词快进5s，长按倍数播放" },
      { value: "←", label: "快退5s" },
      { value: "↑", label: "音量增加10%" },
      { value: "↓", label: "音量降低10%" },
      { value: "Esc", label: "退出全屏" },
      { value: "F", label: "全屏/退出全屏" },
      { value: "D", label: "开启/关闭弹幕" },
      { value: "M", label: "开启/关闭静音" }
    ];
    return (f, v) => (h(), B(Ce, {
      mode: "out-in",
      "enter-from-class": "op-0",
      "leave-to-class": "op-0"
    }, {
      default: V(() => [
        W(s("div", b0, [
          s("div", w0, [
            O(" 快捷键说明 "),
            s("div", {
              class: "bili-descrip-close",
              onClick: v[0] || (v[0] = (_) => a.value = !1)
            }, "✕")
          ]),
          s("div", null, [
            (h(), C(ce, null, re(o, (_) => s("div", {
              key: _.value,
              class: "bili-descrip-line"
            }, [
              s("div", null, L(_.value), 1),
              s("div", null, L(_.label), 1)
            ])), 64))
          ])
        ], 512), [
          [se, i(a)]
        ])
      ]),
      _: 1
    }));
  }
}), k0 = /* @__PURE__ */ D(y0, [["__scopeId", "data-v-fa7b8f81"]]), $0 = { class: "bili-container" }, C0 = { class: "bili-outer-control-container" }, x0 = { class: "bili-video-info" }, M0 = /* @__PURE__ */ R({
  name: "bili-player",
  __name: "index",
  props: {
    hotkey: { type: Boolean, default: !0 },
    video: {},
    danmaku: {}
  },
  setup(e, { expose: t }) {
    const n = e, d = k(!1), a = k(), { state: o } = A();
    o.fullscreenControls = $t(a);
    const { state: f } = Y(), v = k(!1), _ = k(!1), p = () => {
      _.value = !1;
    };
    let c;
    const u = () => {
      _.value = !1, c && clearTimeout(c), c = setTimeout(() => {
        _.value = !0;
      }, 1e3);
    }, l = () => {
      d.value = !0;
    };
    return Ht(n.hotkey), t(Pt()), (r, g) => {
      var b, $, w, x;
      return h(), C("div", $0, [
        s("div", {
          ref_key: "containerRef",
          ref: a,
          class: "bili-main",
          onMouseenter: p,
          onMouseleave: g[3] || (g[3] = (M) => _.value = !0),
          onMousemove: u,
          onContextmenu: lt(l, ["prevent", "stop"])
        }, [
          s("div", {
            class: Z(["bili-container-mask", { "op-0": _.value && !v.value }])
          }, [
            U(r.$slots, "header-mask", {}, void 0, !0)
          ], 2),
          z(i(jt), oe(le(n.video)), null, 16),
          z(i(Yt), oe(le(n.danmaku)), null, 16),
          z(i(g0), {
            hidden: _.value && !v.value,
            onMouseenter: g[0] || (g[0] = (M) => v.value = !0),
            onMouseleave: g[1] || (g[1] = (M) => v.value = !1)
          }, me({ _: 2 }, [
            ($ = (b = r.$slots).settingExtra) != null && $.call(b) ? {
              name: "setting-extra",
              fn: V((M) => [
                U(r.$slots, "setting-extra", oe(le(M)), void 0, !0)
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["hidden"]),
          z(i(k0), {
            show: d.value,
            "onUpdate:show": g[2] || (g[2] = (M) => d.value = M)
          }, null, 8, ["show"])
        ], 544),
        s("div", C0, [
          s("div", x0, [
            U(r.$slots, "wrapper-extra", {}, void 0, !0),
            O(" 已填装 " + L(i(f).items.length) + " 条弹幕 ", 1)
          ]),
          z(i(Ye), { class: "bili-outer-control" }, me({ _: 2 }, [
            (x = (w = r.$slots).settingExtra) != null && x.call(w) ? {
              name: "setting-extra",
              fn: V((M) => [
                U(r.$slots, "setting-extra", oe(le(M)), void 0, !0)
              ]),
              key: "0"
            } : void 0
          ]), 1024)
        ])
      ]);
    };
  }
}), Ie = /* @__PURE__ */ D(M0, [["__scopeId", "data-v-0db6ba25"]]), S0 = {
  install: (e) => {
    e.component(Ie.name, Ie);
  }
};
export {
  Ie as BiliPlayer,
  S0 as default
};
