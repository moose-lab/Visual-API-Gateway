try {
    ! function() {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "bd271bf2-0fc1-461a-9365-975cb80fea24", t._sentryDebugIdIdentifier = "sentry-dbid-bd271bf2-0fc1-461a-9365-975cb80fea24")
    }()
} catch (t) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [21107], {
        51050: function(t, e, n) {
            n.d(e, {
                x7: function() {
                    return W
                },
                Me: function() {
                    return T
                },
                oo: function() {
                    return j
                },
                US: function() {
                    return C
                },
                RR: function() {
                    return D
                },
                Cp: function() {
                    return V
                },
                dr: function() {
                    return z
                },
                cv: function() {
                    return P
                },
                uY: function() {
                    return O
                },
                dp: function() {
                    return E
                }
            });
            var r = n(72695);

            function i(t, e, n) {
                let i, {
                        reference: o,
                        floating: l
                    } = t,
                    u = (0, r.Qq)(e),
                    f = (0, r.Wh)(e),
                    a = (0, r.I4)(f),
                    c = (0, r.k3)(e),
                    s = "y" === u,
                    d = o.x + o.width / 2 - l.width / 2,
                    p = o.y + o.height / 2 - l.height / 2,
                    h = o[a] / 2 - l[a] / 2;
                switch (c) {
                    case "top":
                        i = {
                            x: d,
                            y: o.y - l.height
                        };
                        break;
                    case "bottom":
                        i = {
                            x: d,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        i = {
                            x: o.x + o.width,
                            y: p
                        };
                        break;
                    case "left":
                        i = {
                            x: o.x - l.width,
                            y: p
                        };
                        break;
                    default:
                        i = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch ((0, r.hp)(e)) {
                    case "start":
                        i[f] -= h * (n && s ? -1 : 1);
                        break;
                    case "end":
                        i[f] += h * (n && s ? -1 : 1)
                }
                return i
            }
            let o = async (t, e, n) => {
                let {
                    placement: r = "bottom",
                    strategy: o = "absolute",
                    middleware: l = [],
                    platform: u
                } = n, f = l.filter(Boolean), a = await (null == u.isRTL ? void 0 : u.isRTL(e)), c = await u.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: o
                }), {
                    x: s,
                    y: d
                } = i(c, r, a), p = r, h = {}, g = 0;
                for (let n = 0; n < f.length; n++) {
                    let {
                        name: l,
                        fn: m
                    } = f[n], {
                        x: w,
                        y: y,
                        data: x,
                        reset: v
                    } = await m({
                        x: s,
                        y: d,
                        initialPlacement: r,
                        placement: p,
                        strategy: o,
                        middlewareData: h,
                        rects: c,
                        platform: u,
                        elements: {
                            reference: t,
                            floating: e
                        }
                    });
                    s = null != w ? w : s, d = null != y ? y : d, h = {
                        ...h,
                        [l]: {
                            ...h[l],
                            ...x
                        }
                    }, v && g <= 50 && (g++, "object" == typeof v && (v.placement && (p = v.placement), v.rects && (c = !0 === v.rects ? await u.getElementRects({
                        reference: t,
                        floating: e,
                        strategy: o
                    }) : v.rects), {
                        x: s,
                        y: d
                    } = i(c, p, a)), n = -1)
                }
                return {
                    x: s,
                    y: d,
                    placement: p,
                    strategy: o,
                    middlewareData: h
                }
            };
            async function l(t, e) {
                var n;
                void 0 === e && (e = {});
                let {
                    x: i,
                    y: o,
                    platform: l,
                    rects: u,
                    elements: f,
                    strategy: a
                } = t, {
                    boundary: c = "clippingAncestors",
                    rootBoundary: s = "viewport",
                    elementContext: d = "floating",
                    altBoundary: p = !1,
                    padding: h = 0
                } = (0, r.ku)(e, t), g = (0, r.yd)(h), m = f[p ? "floating" === d ? "reference" : "floating" : d], w = (0, r.JB)(await l.getClippingRect({
                    element: null == (n = await (null == l.isElement ? void 0 : l.isElement(m))) || n ? m : m.contextElement || await (null == l.getDocumentElement ? void 0 : l.getDocumentElement(f.floating)),
                    boundary: c,
                    rootBoundary: s,
                    strategy: a
                })), y = "floating" === d ? {
                    x: i,
                    y: o,
                    width: u.floating.width,
                    height: u.floating.height
                } : u.reference, x = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(f.floating)), v = await (null == l.isElement ? void 0 : l.isElement(x)) && await (null == l.getScale ? void 0 : l.getScale(x)) || {
                    x: 1,
                    y: 1
                }, b = (0, r.JB)(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: f,
                    rect: y,
                    offsetParent: x,
                    strategy: a
                }) : y);
                return {
                    top: (w.top - b.top + g.top) / v.y,
                    bottom: (b.bottom - w.bottom + g.bottom) / v.y,
                    left: (w.left - b.left + g.left) / v.x,
                    right: (b.right - w.right + g.right) / v.x
                }
            }

            function u(t, e) {
                return {
                    top: t.top - e.height,
                    right: t.right - e.width,
                    bottom: t.bottom - e.height,
                    left: t.left - e.width
                }
            }

            function f(t) {
                return r.mA.some(e => t[e] >= 0)
            }
            let a = new Set(["left", "top"]);
            async function c(t, e) {
                let {
                    placement: n,
                    platform: i,
                    elements: o
                } = t, l = await (null == i.isRTL ? void 0 : i.isRTL(o.floating)), u = (0, r.k3)(n), f = (0, r.hp)(n), c = "y" === (0, r.Qq)(n), s = a.has(u) ? -1 : 1, d = l && c ? -1 : 1, p = (0, r.ku)(e, t), {
                    mainAxis: h,
                    crossAxis: g,
                    alignmentAxis: m
                } = "number" == typeof p ? {
                    mainAxis: p,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: p.mainAxis || 0,
                    crossAxis: p.crossAxis || 0,
                    alignmentAxis: p.alignmentAxis
                };
                return f && "number" == typeof m && (g = "end" === f ? -1 * m : m), c ? {
                    x: g * d,
                    y: h * s
                } : {
                    x: h * s,
                    y: g * d
                }
            }
            var s = n(94046);

            function d(t) {
                let e = (0, s.Dx)(t),
                    n = parseFloat(e.width) || 0,
                    i = parseFloat(e.height) || 0,
                    o = (0, s.Re)(t),
                    l = o ? t.offsetWidth : n,
                    u = o ? t.offsetHeight : i,
                    f = (0, r.NM)(n) !== l || (0, r.NM)(i) !== u;
                return f && (n = l, i = u), {
                    width: n,
                    height: i,
                    $: f
                }
            }

            function p(t) {
                return (0, s.kK)(t) ? t : t.contextElement
            }

            function h(t) {
                let e = p(t);
                if (!(0, s.Re)(e)) return (0, r.ze)(1);
                let n = e.getBoundingClientRect(),
                    {
                        width: i,
                        height: o,
                        $: l
                    } = d(e),
                    u = (l ? (0, r.NM)(n.width) : n.width) / i,
                    f = (l ? (0, r.NM)(n.height) : n.height) / o;
                return u && Number.isFinite(u) || (u = 1), f && Number.isFinite(f) || (f = 1), {
                    x: u,
                    y: f
                }
            }
            let g = (0, r.ze)(0);

            function m(t) {
                let e = (0, s.Jj)(t);
                return (0, s.Pf)() && e.visualViewport ? {
                    x: e.visualViewport.offsetLeft,
                    y: e.visualViewport.offsetTop
                } : g
            }

            function w(t, e, n, i) {
                var o;
                void 0 === e && (e = !1), void 0 === n && (n = !1);
                let l = t.getBoundingClientRect(),
                    u = p(t),
                    f = (0, r.ze)(1);
                e && (i ? (0, s.kK)(i) && (f = h(i)) : f = h(t));
                let a = (void 0 === (o = n) && (o = !1), i && (!o || i === (0, s.Jj)(u)) && o) ? m(u) : (0, r.ze)(0),
                    c = (l.left + a.x) / f.x,
                    d = (l.top + a.y) / f.y,
                    g = l.width / f.x,
                    w = l.height / f.y;
                if (u) {
                    let t = (0, s.Jj)(u),
                        e = i && (0, s.kK)(i) ? (0, s.Jj)(i) : i,
                        n = t,
                        r = (0, s.wK)(n);
                    for (; r && i && e !== n;) {
                        let t = h(r),
                            e = r.getBoundingClientRect(),
                            i = (0, s.Dx)(r),
                            o = e.left + (r.clientLeft + parseFloat(i.paddingLeft)) * t.x,
                            l = e.top + (r.clientTop + parseFloat(i.paddingTop)) * t.y;
                        c *= t.x, d *= t.y, g *= t.x, w *= t.y, c += o, d += l, n = (0, s.Jj)(r), r = (0, s.wK)(n)
                    }
                }
                return (0, r.JB)({
                    width: g,
                    height: w,
                    x: c,
                    y: d
                })
            }

            function y(t, e) {
                let n = (0, s.Lw)(t).scrollLeft;
                return e ? e.left + n : w((0, s.tF)(t)).left + n
            }

            function x(t, e) {
                let n = t.getBoundingClientRect();
                return {
                    x: n.left + e.scrollLeft - y(t, n),
                    y: n.top + e.scrollTop
                }
            }
            let v = new Set(["absolute", "fixed"]);

            function b(t, e, n) {
                let i;
                if ("viewport" === e) i = function(t, e) {
                    let n = (0, s.Jj)(t),
                        r = (0, s.tF)(t),
                        i = n.visualViewport,
                        o = r.clientWidth,
                        l = r.clientHeight,
                        u = 0,
                        f = 0;
                    if (i) {
                        o = i.width, l = i.height;
                        let t = (0, s.Pf)();
                        (!t || t && "fixed" === e) && (u = i.offsetLeft, f = i.offsetTop)
                    }
                    let a = y(r);
                    if (a <= 0) {
                        let t = r.ownerDocument,
                            e = t.body,
                            n = getComputedStyle(e),
                            i = "CSS1Compat" === t.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
                            l = Math.abs(r.clientWidth - e.clientWidth - i);
                        l <= 25 && (o -= l)
                    } else a <= 25 && (o += a);
                    return {
                        width: o,
                        height: l,
                        x: u,
                        y: f
                    }
                }(t, n);
                else if ("document" === e) i = function(t) {
                    let e = (0, s.tF)(t),
                        n = (0, s.Lw)(t),
                        i = t.ownerDocument.body,
                        o = (0, r.Fp)(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth),
                        l = (0, r.Fp)(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight),
                        u = -n.scrollLeft + y(t),
                        f = -n.scrollTop;
                    return "rtl" === (0, s.Dx)(i).direction && (u += (0, r.Fp)(e.clientWidth, i.clientWidth) - o), {
                        width: o,
                        height: l,
                        x: u,
                        y: f
                    }
                }((0, s.tF)(t));
                else if ((0, s.kK)(e)) i = function(t, e) {
                    let n = w(t, !0, "fixed" === e),
                        i = n.top + t.clientTop,
                        o = n.left + t.clientLeft,
                        l = (0, s.Re)(t) ? h(t) : (0, r.ze)(1),
                        u = t.clientWidth * l.x;
                    return {
                        width: u,
                        height: t.clientHeight * l.y,
                        x: o * l.x,
                        y: i * l.y
                    }
                }(e, n);
                else {
                    let n = m(t);
                    i = {
                        x: e.x - n.x,
                        y: e.y - n.y,
                        width: e.width,
                        height: e.height
                    }
                }
                return (0, r.JB)(i)
            }

            function R(t) {
                return "static" === (0, s.Dx)(t).position
            }

            function k(t, e) {
                if (!(0, s.Re)(t) || "fixed" === (0, s.Dx)(t).position) return null;
                if (e) return e(t);
                let n = t.offsetParent;
                return (0, s.tF)(t) === n && (n = n.ownerDocument.body), n
            }

            function A(t, e) {
                let n = (0, s.Jj)(t);
                if ((0, s.tR)(t)) return n;
                if (!(0, s.Re)(t)) {
                    let e = (0, s.Ow)(t);
                    for (; e && !(0, s.Py)(e);) {
                        if ((0, s.kK)(e) && !R(e)) return e;
                        e = (0, s.Ow)(e)
                    }
                    return n
                }
                let r = k(t, e);
                for (; r && (0, s.Ze)(r) && R(r);) r = k(r, e);
                return r && (0, s.Py)(r) && R(r) && !(0, s.hT)(r) ? n : r || (0, s.gQ)(t) || n
            }
            let F = async function(t) {
                let e = this.getOffsetParent || A,
                    n = this.getDimensions,
                    i = await n(t.floating);
                return {
                    reference: function(t, e, n) {
                        let i = (0, s.Re)(e),
                            o = (0, s.tF)(e),
                            l = "fixed" === n,
                            u = w(t, !0, l, e),
                            f = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            a = (0, r.ze)(0);
                        if (i || !i && !l) {
                            if (("body" !== (0, s.wk)(e) || (0, s.ao)(o)) && (f = (0, s.Lw)(e)), i) {
                                let t = w(e, !0, l, e);
                                a.x = t.x + e.clientLeft, a.y = t.y + e.clientTop
                            } else o && (a.x = y(o))
                        }
                        l && !i && o && (a.x = y(o));
                        let c = !o || i || l ? (0, r.ze)(0) : x(o, f);
                        return {
                            x: u.left + f.scrollLeft - a.x - c.x,
                            y: u.top + f.scrollTop - a.y - c.y,
                            width: u.width,
                            height: u.height
                        }
                    }(t.reference, await e(t.floating), t.strategy),
                    floating: {
                        x: 0,
                        y: 0,
                        width: i.width,
                        height: i.height
                    }
                }
            }, S = {
                convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
                    let {
                        elements: e,
                        rect: n,
                        offsetParent: i,
                        strategy: o
                    } = t, l = "fixed" === o, u = (0, s.tF)(i), f = !!e && (0, s.tR)(e.floating);
                    if (i === u || f && l) return n;
                    let a = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        c = (0, r.ze)(1),
                        d = (0, r.ze)(0),
                        p = (0, s.Re)(i);
                    if ((p || !p && !l) && (("body" !== (0, s.wk)(i) || (0, s.ao)(u)) && (a = (0, s.Lw)(i)), (0, s.Re)(i))) {
                        let t = w(i);
                        c = h(i), d.x = t.x + i.clientLeft, d.y = t.y + i.clientTop
                    }
                    let g = !u || p || l ? (0, r.ze)(0) : x(u, a);
                    return {
                        width: n.width * c.x,
                        height: n.height * c.y,
                        x: n.x * c.x - a.scrollLeft * c.x + d.x + g.x,
                        y: n.y * c.y - a.scrollTop * c.y + d.y + g.y
                    }
                },
                getDocumentElement: s.tF,
                getClippingRect: function(t) {
                    let {
                        element: e,
                        boundary: n,
                        rootBoundary: i,
                        strategy: o
                    } = t, l = [..."clippingAncestors" === n ? (0, s.tR)(e) ? [] : function(t, e) {
                        let n = e.get(t);
                        if (n) return n;
                        let r = (0, s.Kx)(t, [], !1).filter(t => (0, s.kK)(t) && "body" !== (0, s.wk)(t)),
                            i = null,
                            o = "fixed" === (0, s.Dx)(t).position,
                            l = o ? (0, s.Ow)(t) : t;
                        for (;
                            (0, s.kK)(l) && !(0, s.Py)(l);) {
                            let e = (0, s.Dx)(l),
                                n = (0, s.hT)(l);
                            n || "fixed" !== e.position || (i = null), (o ? !n && !i : !n && "static" === e.position && !!i && v.has(i.position) || (0, s.ao)(l) && !n && function t(e, n) {
                                let r = (0, s.Ow)(e);
                                return !(r === n || !(0, s.kK)(r) || (0, s.Py)(r)) && ("fixed" === (0, s.Dx)(r).position || t(r, n))
                            }(t, l)) ? r = r.filter(t => t !== l) : i = e, l = (0, s.Ow)(l)
                        }
                        return e.set(t, r), r
                    }(e, this._c) : [].concat(n), i], u = l[0], f = l.reduce((t, n) => {
                        let i = b(e, n, o);
                        return t.top = (0, r.Fp)(i.top, t.top), t.right = (0, r.VV)(i.right, t.right), t.bottom = (0, r.VV)(i.bottom, t.bottom), t.left = (0, r.Fp)(i.left, t.left), t
                    }, b(e, u, o));
                    return {
                        width: f.right - f.left,
                        height: f.bottom - f.top,
                        x: f.left,
                        y: f.top
                    }
                },
                getOffsetParent: A,
                getElementRects: F,
                getClientRects: function(t) {
                    return Array.from(t.getClientRects())
                },
                getDimensions: function(t) {
                    let {
                        width: e,
                        height: n
                    } = d(t);
                    return {
                        width: e,
                        height: n
                    }
                },
                getScale: h,
                isElement: s.kK,
                isRTL: function(t) {
                    return "rtl" === (0, s.Dx)(t).direction
                }
            };

            function L(t, e) {
                return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
            }

            function T(t, e, n, i) {
                let o;
                void 0 === i && (i = {});
                let {
                    ancestorScroll: l = !0,
                    ancestorResize: u = !0,
                    elementResize: f = "function" == typeof ResizeObserver,
                    layoutShift: a = "function" == typeof IntersectionObserver,
                    animationFrame: c = !1
                } = i, d = p(t), h = l || u ? [...d ? (0, s.Kx)(d) : [], ...(0, s.Kx)(e)] : [];
                h.forEach(t => {
                    l && t.addEventListener("scroll", n, {
                        passive: !0
                    }), u && t.addEventListener("resize", n)
                });
                let g = d && a ? function(t, e) {
                        let n, i = null,
                            o = (0, s.tF)(t);

                        function l() {
                            var t;
                            clearTimeout(n), null == (t = i) || t.disconnect(), i = null
                        }
                        return ! function u(f, a) {
                            void 0 === f && (f = !1), void 0 === a && (a = 1), l();
                            let c = t.getBoundingClientRect(),
                                {
                                    left: s,
                                    top: d,
                                    width: p,
                                    height: h
                                } = c;
                            if (f || e(), !p || !h) return;
                            let g = (0, r.GW)(d),
                                m = (0, r.GW)(o.clientWidth - (s + p)),
                                w = {
                                    rootMargin: -g + "px " + -m + "px " + -(0, r.GW)(o.clientHeight - (d + h)) + "px " + -(0, r.GW)(s) + "px",
                                    threshold: (0, r.Fp)(0, (0, r.VV)(1, a)) || 1
                                },
                                y = !0;

                            function x(e) {
                                let r = e[0].intersectionRatio;
                                if (r !== a) {
                                    if (!y) return u();
                                    r ? u(!1, r) : n = setTimeout(() => {
                                        u(!1, 1e-7)
                                    }, 1e3)
                                }
                                1 !== r || L(c, t.getBoundingClientRect()) || u(), y = !1
                            }
                            try {
                                i = new IntersectionObserver(x, {
                                    ...w,
                                    root: o.ownerDocument
                                })
                            } catch (t) {
                                i = new IntersectionObserver(x, w)
                            }
                            i.observe(t)
                        }(!0), l
                    }(d, n) : null,
                    m = -1,
                    y = null;
                f && (y = new ResizeObserver(t => {
                    let [r] = t;
                    r && r.target === d && y && (y.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
                        var t;
                        null == (t = y) || t.observe(e)
                    })), n()
                }), d && !c && y.observe(d), y.observe(e));
                let x = c ? w(t) : null;
                return c && function e() {
                    let r = w(t);
                    x && !L(x, r) && n(), x = r, o = requestAnimationFrame(e)
                }(), n(), () => {
                    var t;
                    h.forEach(t => {
                        l && t.removeEventListener("scroll", n), u && t.removeEventListener("resize", n)
                    }), null == g || g(), null == (t = y) || t.disconnect(), y = null, c && cancelAnimationFrame(o)
                }
            }
            let C = l,
                P = function(t) {
                    return void 0 === t && (t = 0), {
                        name: "offset",
                        options: t,
                        async fn(e) {
                            var n, r;
                            let {
                                x: i,
                                y: o,
                                placement: l,
                                middlewareData: u
                            } = e, f = await c(e, t);
                            return l === (null == (n = u.offset) ? void 0 : n.placement) && null != (r = u.arrow) && r.alignmentOffset ? {} : {
                                x: i + f.x,
                                y: o + f.y,
                                data: {
                                    ...f,
                                    placement: l
                                }
                            }
                        }
                    }
                },
                O = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "shift",
                        options: t,
                        async fn(e) {
                            let {
                                x: n,
                                y: i,
                                placement: o
                            } = e, {
                                mainAxis: u = !0,
                                crossAxis: f = !1,
                                limiter: a = {
                                    fn: t => {
                                        let {
                                            x: e,
                                            y: n
                                        } = t;
                                        return {
                                            x: e,
                                            y: n
                                        }
                                    }
                                },
                                ...c
                            } = (0, r.ku)(t, e), s = {
                                x: n,
                                y: i
                            }, d = await l(e, c), p = (0, r.Qq)((0, r.k3)(o)), h = (0, r.Rn)(p), g = s[h], m = s[p];
                            if (u) {
                                let t = "y" === h ? "top" : "left",
                                    e = "y" === h ? "bottom" : "right",
                                    n = g + d[t],
                                    i = g - d[e];
                                g = (0, r.uZ)(n, g, i)
                            }
                            if (f) {
                                let t = "y" === p ? "top" : "left",
                                    e = "y" === p ? "bottom" : "right",
                                    n = m + d[t],
                                    i = m - d[e];
                                m = (0, r.uZ)(n, m, i)
                            }
                            let w = a.fn({
                                ...e,
                                [h]: g,
                                [p]: m
                            });
                            return {
                                ...w,
                                data: {
                                    x: w.x - n,
                                    y: w.y - i,
                                    enabled: {
                                        [h]: u,
                                        [p]: f
                                    }
                                }
                            }
                        }
                    }
                },
                D = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "flip",
                        options: t,
                        async fn(e) {
                            var n, i, o, u, f;
                            let {
                                placement: a,
                                middlewareData: c,
                                rects: s,
                                initialPlacement: d,
                                platform: p,
                                elements: h
                            } = e, {
                                mainAxis: g = !0,
                                crossAxis: m = !0,
                                fallbackPlacements: w,
                                fallbackStrategy: y = "bestFit",
                                fallbackAxisSideDirection: x = "none",
                                flipAlignment: v = !0,
                                ...b
                            } = (0, r.ku)(t, e);
                            if (null != (n = c.arrow) && n.alignmentOffset) return {};
                            let R = (0, r.k3)(a),
                                k = (0, r.Qq)(d),
                                A = (0, r.k3)(d) === d,
                                F = await (null == p.isRTL ? void 0 : p.isRTL(h.floating)),
                                S = w || (A || !v ? [(0, r.pw)(d)] : (0, r.gy)(d)),
                                L = "none" !== x;
                            !w && L && S.push(...(0, r.KX)(d, v, x, F));
                            let T = [d, ...S],
                                C = await l(e, b),
                                P = [],
                                O = (null == (i = c.flip) ? void 0 : i.overflows) || [];
                            if (g && P.push(C[R]), m) {
                                let t = (0, r.i8)(a, s, F);
                                P.push(C[t[0]], C[t[1]])
                            }
                            if (O = [...O, {
                                    placement: a,
                                    overflows: P
                                }], !P.every(t => t <= 0)) {
                                let t = ((null == (o = c.flip) ? void 0 : o.index) || 0) + 1,
                                    e = T[t];
                                if (e && (!("alignment" === m && k !== (0, r.Qq)(e)) || O.every(t => (0, r.Qq)(t.placement) !== k || t.overflows[0] > 0))) return {
                                    data: {
                                        index: t,
                                        overflows: O
                                    },
                                    reset: {
                                        placement: e
                                    }
                                };
                                let n = null == (u = O.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : u.placement;
                                if (!n) switch (y) {
                                    case "bestFit": {
                                        let t = null == (f = O.filter(t => {
                                            if (L) {
                                                let e = (0, r.Qq)(t.placement);
                                                return e === k || "y" === e
                                            }
                                            return !0
                                        }).map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : f[0];
                                        t && (n = t);
                                        break
                                    }
                                    case "initialPlacement":
                                        n = d
                                }
                                if (a !== n) return {
                                    reset: {
                                        placement: n
                                    }
                                }
                            }
                            return {}
                        }
                    }
                },
                E = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "size",
                        options: t,
                        async fn(e) {
                            var n, i;
                            let o, u;
                            let {
                                placement: f,
                                rects: a,
                                platform: c,
                                elements: s
                            } = e, {
                                apply: d = () => {},
                                ...p
                            } = (0, r.ku)(t, e), h = await l(e, p), g = (0, r.k3)(f), m = (0, r.hp)(f), w = "y" === (0, r.Qq)(f), {
                                width: y,
                                height: x
                            } = a.floating;
                            "top" === g || "bottom" === g ? (o = g, u = m === (await (null == c.isRTL ? void 0 : c.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (u = g, o = "end" === m ? "top" : "bottom");
                            let v = x - h.top - h.bottom,
                                b = y - h.left - h.right,
                                R = (0, r.VV)(x - h[o], v),
                                k = (0, r.VV)(y - h[u], b),
                                A = !e.middlewareData.shift,
                                F = R,
                                S = k;
                            if (null != (n = e.middlewareData.shift) && n.enabled.x && (S = b), null != (i = e.middlewareData.shift) && i.enabled.y && (F = v), A && !m) {
                                let t = (0, r.Fp)(h.left, 0),
                                    e = (0, r.Fp)(h.right, 0),
                                    n = (0, r.Fp)(h.top, 0),
                                    i = (0, r.Fp)(h.bottom, 0);
                                w ? S = y - 2 * (0 !== t || 0 !== e ? t + e : (0, r.Fp)(h.left, h.right)) : F = x - 2 * (0 !== n || 0 !== i ? n + i : (0, r.Fp)(h.top, h.bottom))
                            }
                            await d({
                                ...e,
                                availableWidth: S,
                                availableHeight: F
                            });
                            let L = await c.getDimensions(s.floating);
                            return y !== L.width || x !== L.height ? {
                                reset: {
                                    rects: !0
                                }
                            } : {}
                        }
                    }
                },
                V = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "hide",
                        options: t,
                        async fn(e) {
                            let {
                                rects: n
                            } = e, {
                                strategy: i = "referenceHidden",
                                ...o
                            } = (0, r.ku)(t, e);
                            switch (i) {
                                case "referenceHidden": {
                                    let t = u(await l(e, {
                                        ...o,
                                        elementContext: "reference"
                                    }), n.reference);
                                    return {
                                        data: {
                                            referenceHiddenOffsets: t,
                                            referenceHidden: f(t)
                                        }
                                    }
                                }
                                case "escaped": {
                                    let t = u(await l(e, {
                                        ...o,
                                        altBoundary: !0
                                    }), n.floating);
                                    return {
                                        data: {
                                            escapedOffsets: t,
                                            escaped: f(t)
                                        }
                                    }
                                }
                                default:
                                    return {}
                            }
                        }
                    }
                },
                W = t => ({
                    name: "arrow",
                    options: t,
                    async fn(e) {
                        let {
                            x: n,
                            y: i,
                            placement: o,
                            rects: l,
                            platform: u,
                            elements: f,
                            middlewareData: a
                        } = e, {
                            element: c,
                            padding: s = 0
                        } = (0, r.ku)(t, e) || {};
                        if (null == c) return {};
                        let d = (0, r.yd)(s),
                            p = {
                                x: n,
                                y: i
                            },
                            h = (0, r.Wh)(o),
                            g = (0, r.I4)(h),
                            m = await u.getDimensions(c),
                            w = "y" === h,
                            y = w ? "clientHeight" : "clientWidth",
                            x = l.reference[g] + l.reference[h] - p[h] - l.floating[g],
                            v = p[h] - l.reference[h],
                            b = await (null == u.getOffsetParent ? void 0 : u.getOffsetParent(c)),
                            R = b ? b[y] : 0;
                        R && await (null == u.isElement ? void 0 : u.isElement(b)) || (R = f.floating[y] || l.floating[g]);
                        let k = R / 2 - m[g] / 2 - 1,
                            A = (0, r.VV)(d[w ? "top" : "left"], k),
                            F = (0, r.VV)(d[w ? "bottom" : "right"], k),
                            S = R - m[g] - F,
                            L = R / 2 - m[g] / 2 + (x / 2 - v / 2),
                            T = (0, r.uZ)(A, L, S),
                            C = !a.arrow && null != (0, r.hp)(o) && L !== T && l.reference[g] / 2 - (L < A ? A : F) - m[g] / 2 < 0,
                            P = C ? L < A ? L - A : L - S : 0;
                        return {
                            [h]: p[h] + P,
                            data: {
                                [h]: T,
                                centerOffset: L - T - P,
                                ...C && {
                                    alignmentOffset: P
                                }
                            },
                            reset: C
                        }
                    }
                }),
                z = function(t) {
                    return void 0 === t && (t = {}), {
                        options: t,
                        fn(e) {
                            let {
                                x: n,
                                y: i,
                                placement: o,
                                rects: l,
                                middlewareData: u
                            } = e, {
                                offset: f = 0,
                                mainAxis: c = !0,
                                crossAxis: s = !0
                            } = (0, r.ku)(t, e), d = {
                                x: n,
                                y: i
                            }, p = (0, r.Qq)(o), h = (0, r.Rn)(p), g = d[h], m = d[p], w = (0, r.ku)(f, e), y = "number" == typeof w ? {
                                mainAxis: w,
                                crossAxis: 0
                            } : {
                                mainAxis: 0,
                                crossAxis: 0,
                                ...w
                            };
                            if (c) {
                                let t = "y" === h ? "height" : "width",
                                    e = l.reference[h] - l.floating[t] + y.mainAxis,
                                    n = l.reference[h] + l.reference[t] - y.mainAxis;
                                g < e ? g = e : g > n && (g = n)
                            }
                            if (s) {
                                var x, v;
                                let t = "y" === h ? "width" : "height",
                                    e = a.has((0, r.k3)(o)),
                                    n = l.reference[p] - l.floating[t] + (e && (null == (x = u.offset) ? void 0 : x[p]) || 0) + (e ? 0 : y.crossAxis),
                                    i = l.reference[p] + l.reference[t] + (e ? 0 : (null == (v = u.offset) ? void 0 : v[p]) || 0) - (e ? y.crossAxis : 0);
                                m < n ? m = n : m > i && (m = i)
                            }
                            return {
                                [h]: g,
                                [p]: m
                            }
                        }
                    }
                },
                j = (t, e, n) => {
                    let r = new Map,
                        i = {
                            platform: S,
                            ...n
                        },
                        l = {
                            ...i.platform,
                            _c: r
                        };
                    return o(t, e, {
                        ...i,
                        platform: l
                    })
                }
        },
        97859: function(t, e, n) {
            n.d(e, {
                Cp: function() {
                    return y
                },
                RR: function() {
                    return m
                },
                YF: function() {
                    return s
                },
                cv: function() {
                    return p
                },
                dp: function() {
                    return w
                },
                dr: function() {
                    return g
                },
                uY: function() {
                    return h
                },
                x7: function() {
                    return x
                }
            });
            var r = n(51050),
                i = n(2265),
                o = n(54887),
                l = "undefined" != typeof document ? i.useLayoutEffect : function() {};

            function u(t, e) {
                let n, r, i;
                if (t === e) return !0;
                if (typeof t != typeof e) return !1;
                if ("function" == typeof t && t.toString() === e.toString()) return !0;
                if (t && e && "object" == typeof t) {
                    if (Array.isArray(t)) {
                        if ((n = t.length) !== e.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!u(t[r], e[r])) return !1;
                        return !0
                    }
                    if ((n = (i = Object.keys(t)).length) !== Object.keys(e).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(e, i[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = i[r];
                        if (("_owner" !== n || !t.$$typeof) && !u(t[n], e[n])) return !1
                    }
                    return !0
                }
                return t != t && e != e
            }

            function f(t) {
                return "undefined" == typeof window ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function a(t, e) {
                let n = f(t);
                return Math.round(e * n) / n
            }

            function c(t) {
                let e = i.useRef(t);
                return l(() => {
                    e.current = t
                }), e
            }

            function s(t) {
                void 0 === t && (t = {});
                let {
                    placement: e = "bottom",
                    strategy: n = "absolute",
                    middleware: s = [],
                    platform: d,
                    elements: {
                        reference: p,
                        floating: h
                    } = {},
                    transform: g = !0,
                    whileElementsMounted: m,
                    open: w
                } = t, [y, x] = i.useState({
                    x: 0,
                    y: 0,
                    strategy: n,
                    placement: e,
                    middlewareData: {},
                    isPositioned: !1
                }), [v, b] = i.useState(s);
                u(v, s) || b(s);
                let [R, k] = i.useState(null), [A, F] = i.useState(null), S = i.useCallback(t => {
                    t !== P.current && (P.current = t, k(t))
                }, []), L = i.useCallback(t => {
                    t !== O.current && (O.current = t, F(t))
                }, []), T = p || R, C = h || A, P = i.useRef(null), O = i.useRef(null), D = i.useRef(y), E = null != m, V = c(m), W = c(d), z = c(w), j = i.useCallback(() => {
                    if (!P.current || !O.current) return;
                    let t = {
                        placement: e,
                        strategy: n,
                        middleware: v
                    };
                    W.current && (t.platform = W.current), (0, r.oo)(P.current, O.current, t).then(t => {
                        let e = {
                            ...t,
                            isPositioned: !1 !== z.current
                        };
                        M.current && !u(D.current, e) && (D.current = e, o.flushSync(() => {
                            x(e)
                        }))
                    })
                }, [v, e, n, W, z]);
                l(() => {
                    !1 === w && D.current.isPositioned && (D.current.isPositioned = !1, x(t => ({
                        ...t,
                        isPositioned: !1
                    })))
                }, [w]);
                let M = i.useRef(!1);
                l(() => (M.current = !0, () => {
                    M.current = !1
                }), []), l(() => {
                    if (T && (P.current = T), C && (O.current = C), T && C) {
                        if (V.current) return V.current(T, C, j);
                        j()
                    }
                }, [T, C, j, V, E]);
                let H = i.useMemo(() => ({
                        reference: P,
                        floating: O,
                        setReference: S,
                        setFloating: L
                    }), [S, L]),
                    K = i.useMemo(() => ({
                        reference: T,
                        floating: C
                    }), [T, C]),
                    N = i.useMemo(() => {
                        let t = {
                            position: n,
                            left: 0,
                            top: 0
                        };
                        if (!K.floating) return t;
                        let e = a(K.floating, y.x),
                            r = a(K.floating, y.y);
                        return g ? {
                            ...t,
                            transform: "translate(" + e + "px, " + r + "px)",
                            ...f(K.floating) >= 1.5 && {
                                willChange: "transform"
                            }
                        } : {
                            position: n,
                            left: e,
                            top: r
                        }
                    }, [n, g, K.floating, y.x, y.y]);
                return i.useMemo(() => ({
                    ...y,
                    update: j,
                    refs: H,
                    elements: K,
                    floatingStyles: N
                }), [y, j, H, K, N])
            }
            let d = t => ({
                    name: "arrow",
                    options: t,
                    fn(e) {
                        let {
                            element: n,
                            padding: i
                        } = "function" == typeof t ? t(e) : t;
                        return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? (0, r.x7)({
                            element: n.current,
                            padding: i
                        }).fn(e) : {} : n ? (0, r.x7)({
                            element: n,
                            padding: i
                        }).fn(e) : {}
                    }
                }),
                p = (t, e) => ({
                    ...(0, r.cv)(t),
                    options: [t, e]
                }),
                h = (t, e) => ({
                    ...(0, r.uY)(t),
                    options: [t, e]
                }),
                g = (t, e) => ({
                    ...(0, r.dr)(t),
                    options: [t, e]
                }),
                m = (t, e) => ({
                    ...(0, r.RR)(t),
                    options: [t, e]
                }),
                w = (t, e) => ({
                    ...(0, r.dp)(t),
                    options: [t, e]
                }),
                y = (t, e) => ({
                    ...(0, r.Cp)(t),
                    options: [t, e]
                }),
                x = (t, e) => ({
                    ...d(t),
                    options: [t, e]
                })
        },
        94046: function(t, e, n) {
            function r() {
                return "undefined" != typeof window
            }

            function i(t) {
                return u(t) ? (t.nodeName || "").toLowerCase() : "#document"
            }

            function o(t) {
                var e;
                return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
            }

            function l(t) {
                var e;
                return null == (e = (u(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
            }

            function u(t) {
                return !!r() && (t instanceof Node || t instanceof o(t).Node)
            }

            function f(t) {
                return !!r() && (t instanceof Element || t instanceof o(t).Element)
            }

            function a(t) {
                return !!r() && (t instanceof HTMLElement || t instanceof o(t).HTMLElement)
            }

            function c(t) {
                return !!r() && "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof o(t).ShadowRoot)
            }
            n.d(e, {
                Dx: function() {
                    return F
                },
                Jj: function() {
                    return o
                },
                Kx: function() {
                    return function t(e, n, r) {
                        var i;
                        void 0 === n && (n = []), void 0 === r && (r = !0);
                        let l = function t(e) {
                                let n = L(e);
                                return A(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : a(n) && d(n) ? n : t(n)
                            }(e),
                            u = l === (null == (i = e.ownerDocument) ? void 0 : i.body),
                            f = o(l);
                        if (u) {
                            let e = T(f);
                            return n.concat(f, f.visualViewport || [], d(l) ? l : [], e && r ? t(e) : [])
                        }
                        return n.concat(l, t(l, [], r))
                    }
                },
                Lw: function() {
                    return S
                },
                Ow: function() {
                    return L
                },
                Pf: function() {
                    return R
                },
                Py: function() {
                    return A
                },
                Re: function() {
                    return a
                },
                Ze: function() {
                    return h
                },
                ao: function() {
                    return d
                },
                gQ: function() {
                    return b
                },
                hT: function() {
                    return v
                },
                kK: function() {
                    return f
                },
                tF: function() {
                    return l
                },
                tR: function() {
                    return m
                },
                wK: function() {
                    return T
                },
                wk: function() {
                    return i
                }
            });
            let s = new Set(["inline", "contents"]);

            function d(t) {
                let {
                    overflow: e,
                    overflowX: n,
                    overflowY: r,
                    display: i
                } = F(t);
                return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !s.has(i)
            }
            let p = new Set(["table", "td", "th"]);

            function h(t) {
                return p.has(i(t))
            }
            let g = [":popover-open", ":modal"];

            function m(t) {
                return g.some(e => {
                    try {
                        return t.matches(e)
                    } catch (t) {
                        return !1
                    }
                })
            }
            let w = ["transform", "translate", "scale", "rotate", "perspective"],
                y = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
                x = ["paint", "layout", "strict", "content"];

            function v(t) {
                let e = R(),
                    n = f(t) ? F(t) : t;
                return w.some(t => !!n[t] && "none" !== n[t]) || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || y.some(t => (n.willChange || "").includes(t)) || x.some(t => (n.contain || "").includes(t))
            }

            function b(t) {
                let e = L(t);
                for (; a(e) && !A(e);) {
                    if (v(e)) return e;
                    if (m(e)) break;
                    e = L(e)
                }
                return null
            }

            function R() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }
            let k = new Set(["html", "body", "#document"]);

            function A(t) {
                return k.has(i(t))
            }

            function F(t) {
                return o(t).getComputedStyle(t)
            }

            function S(t) {
                return f(t) ? {
                    scrollLeft: t.scrollLeft,
                    scrollTop: t.scrollTop
                } : {
                    scrollLeft: t.scrollX,
                    scrollTop: t.scrollY
                }
            }

            function L(t) {
                if ("html" === i(t)) return t;
                let e = t.assignedSlot || t.parentNode || c(t) && t.host || l(t);
                return c(e) ? e.host : e
            }

            function T(t) {
                return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
            }
        },
        72695: function(t, e, n) {
            n.d(e, {
                Fp: function() {
                    return o
                },
                GW: function() {
                    return u
                },
                I4: function() {
                    return m
                },
                JB: function() {
                    return P
                },
                KX: function() {
                    return L
                },
                NM: function() {
                    return l
                },
                Qq: function() {
                    return y
                },
                Rn: function() {
                    return g
                },
                VV: function() {
                    return i
                },
                Wh: function() {
                    return x
                },
                gy: function() {
                    return b
                },
                hp: function() {
                    return h
                },
                i8: function() {
                    return v
                },
                k3: function() {
                    return p
                },
                ku: function() {
                    return d
                },
                mA: function() {
                    return r
                },
                pw: function() {
                    return T
                },
                uZ: function() {
                    return s
                },
                yd: function() {
                    return C
                },
                ze: function() {
                    return f
                }
            });
            let r = ["top", "right", "bottom", "left"],
                i = Math.min,
                o = Math.max,
                l = Math.round,
                u = Math.floor,
                f = t => ({
                    x: t,
                    y: t
                }),
                a = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                c = {
                    start: "end",
                    end: "start"
                };

            function s(t, e, n) {
                return o(t, i(e, n))
            }

            function d(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function p(t) {
                return t.split("-")[0]
            }

            function h(t) {
                return t.split("-")[1]
            }

            function g(t) {
                return "x" === t ? "y" : "x"
            }

            function m(t) {
                return "y" === t ? "height" : "width"
            }
            let w = new Set(["top", "bottom"]);

            function y(t) {
                return w.has(p(t)) ? "y" : "x"
            }

            function x(t) {
                return g(y(t))
            }

            function v(t, e, n) {
                void 0 === n && (n = !1);
                let r = h(t),
                    i = x(t),
                    o = m(i),
                    l = "x" === i ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                return e.reference[o] > e.floating[o] && (l = T(l)), [l, T(l)]
            }

            function b(t) {
                let e = T(t);
                return [R(t), e, R(e)]
            }

            function R(t) {
                return t.replace(/start|end/g, t => c[t])
            }
            let k = ["left", "right"],
                A = ["right", "left"],
                F = ["top", "bottom"],
                S = ["bottom", "top"];

            function L(t, e, n, r) {
                let i = h(t),
                    o = function(t, e, n) {
                        switch (t) {
                            case "top":
                            case "bottom":
                                if (n) return e ? A : k;
                                return e ? k : A;
                            case "left":
                            case "right":
                                return e ? F : S;
                            default:
                                return []
                        }
                    }(p(t), "start" === n, r);
                return i && (o = o.map(t => t + "-" + i), e && (o = o.concat(o.map(R)))), o
            }

            function T(t) {
                return t.replace(/left|right|bottom|top/g, t => a[t])
            }

            function C(t) {
                return "number" != typeof t ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...t
                } : {
                    top: t,
                    right: t,
                    bottom: t,
                    left: t
                }
            }

            function P(t) {
                let {
                    x: e,
                    y: n,
                    width: r,
                    height: i
                } = t;
                return {
                    width: r,
                    height: i,
                    top: n,
                    left: e,
                    right: e + r,
                    bottom: n + i,
                    x: e,
                    y: n
                }
            }
        },
        21107: function(t, e, n) {
            n.d(e, {
                ee: function() {
                    return E
                },
                Eh: function() {
                    return W
                },
                VY: function() {
                    return V
                },
                fC: function() {
                    return D
                },
                D7: function() {
                    return m
                }
            });
            var r = n(2265),
                i = n(97859),
                o = n(51050),
                l = n(66840),
                u = n(57437),
                f = r.forwardRef((t, e) => {
                    let {
                        children: n,
                        width: r = 10,
                        height: i = 5,
                        ...o
                    } = t;
                    return (0, u.jsx)(l.WV.svg, {
                        ...o,
                        ref: e,
                        width: r,
                        height: i,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none",
                        children: t.asChild ? n : (0, u.jsx)("polygon", {
                            points: "0,0 30,0 15,10"
                        })
                    })
                });
            f.displayName = "Arrow";
            var a = n(98575),
                c = n(73966),
                s = n(26606),
                d = n(61188),
                p = n(90420),
                h = "Popper",
                [g, m] = (0, c.b)(h),
                [w, y] = g(h),
                x = t => {
                    let {
                        __scopePopper: e,
                        children: n
                    } = t, [i, o] = r.useState(null);
                    return (0, u.jsx)(w, {
                        scope: e,
                        anchor: i,
                        onAnchorChange: o,
                        children: n
                    })
                };
            x.displayName = h;
            var v = "PopperAnchor",
                b = r.forwardRef((t, e) => {
                    let {
                        __scopePopper: n,
                        virtualRef: i,
                        ...o
                    } = t, f = y(v, n), c = r.useRef(null), s = (0, a.e)(e, c), d = r.useRef(null);
                    return r.useEffect(() => {
                        let t = d.current;
                        d.current = (null == i ? void 0 : i.current) || c.current, t !== d.current && f.onAnchorChange(d.current)
                    }), i ? null : (0, u.jsx)(l.WV.div, {
                        ...o,
                        ref: s
                    })
                });
            b.displayName = v;
            var R = "PopperContent",
                [k, A] = g(R),
                F = r.forwardRef((t, e) => {
                    var n, f, c, h, g, m, w, x;
                    let {
                        __scopePopper: v,
                        side: b = "bottom",
                        sideOffset: A = 0,
                        align: F = "center",
                        alignOffset: S = 0,
                        arrowPadding: L = 0,
                        avoidCollisions: T = !0,
                        collisionBoundary: D = [],
                        collisionPadding: E = 0,
                        sticky: V = "partial",
                        hideWhenDetached: W = !1,
                        updatePositionStrategy: z = "optimized",
                        onPlaced: j,
                        ...M
                    } = t, H = y(R, v), [K, N] = r.useState(null), B = (0, a.e)(e, t => N(t)), [I, J] = r.useState(null), q = (0, p.t)(I), Q = null !== (w = null == q ? void 0 : q.width) && void 0 !== w ? w : 0, Y = null !== (x = null == q ? void 0 : q.height) && void 0 !== x ? x : 0, _ = "number" == typeof E ? E : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...E
                    }, X = Array.isArray(D) ? D : [D], Z = X.length > 0, G = {
                        padding: _,
                        boundary: X.filter(C),
                        altBoundary: Z
                    }, {
                        refs: $,
                        floatingStyles: U,
                        placement: tt,
                        isPositioned: te,
                        middlewareData: tn
                    } = (0, i.YF)({
                        strategy: "fixed",
                        placement: b + ("center" !== F ? "-" + F : ""),
                        whileElementsMounted: function() {
                            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            return (0, o.Me)(...e, {
                                animationFrame: "always" === z
                            })
                        },
                        elements: {
                            reference: H.anchor
                        },
                        middleware: [(0, i.cv)({
                            mainAxis: A + Y,
                            alignmentAxis: S
                        }), T && (0, i.uY)({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === V ? (0, i.dr)() : void 0,
                            ...G
                        }), T && (0, i.RR)({
                            ...G
                        }), (0, i.dp)({
                            ...G,
                            apply: t => {
                                let {
                                    elements: e,
                                    rects: n,
                                    availableWidth: r,
                                    availableHeight: i
                                } = t, {
                                    width: o,
                                    height: l
                                } = n.reference, u = e.floating.style;
                                u.setProperty("--radix-popper-available-width", "".concat(r, "px")), u.setProperty("--radix-popper-available-height", "".concat(i, "px")), u.setProperty("--radix-popper-anchor-width", "".concat(o, "px")), u.setProperty("--radix-popper-anchor-height", "".concat(l, "px"))
                            }
                        }), I && (0, i.x7)({
                            element: I,
                            padding: L
                        }), P({
                            arrowWidth: Q,
                            arrowHeight: Y
                        }), W && (0, i.Cp)({
                            strategy: "referenceHidden",
                            ...G
                        })]
                    }), [tr, ti] = O(tt), to = (0, s.W)(j);
                    (0, d.b)(() => {
                        te && (null == to || to())
                    }, [te, to]);
                    let tl = null === (n = tn.arrow) || void 0 === n ? void 0 : n.x,
                        tu = null === (f = tn.arrow) || void 0 === f ? void 0 : f.y,
                        tf = (null === (c = tn.arrow) || void 0 === c ? void 0 : c.centerOffset) !== 0,
                        [ta, tc] = r.useState();
                    return (0, d.b)(() => {
                        K && tc(window.getComputedStyle(K).zIndex)
                    }, [K]), (0, u.jsx)("div", {
                        ref: $.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: {
                            ...U,
                            transform: te ? U.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: ta,
                            "--radix-popper-transform-origin": [null === (h = tn.transformOrigin) || void 0 === h ? void 0 : h.x, null === (g = tn.transformOrigin) || void 0 === g ? void 0 : g.y].join(" "),
                            ...(null === (m = tn.hide) || void 0 === m ? void 0 : m.referenceHidden) && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: t.dir,
                        children: (0, u.jsx)(k, {
                            scope: v,
                            placedSide: tr,
                            onArrowChange: J,
                            arrowX: tl,
                            arrowY: tu,
                            shouldHideArrow: tf,
                            children: (0, u.jsx)(l.WV.div, {
                                "data-side": tr,
                                "data-align": ti,
                                ...M,
                                ref: B,
                                style: {
                                    ...M.style,
                                    animation: te ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            F.displayName = R;
            var S = "PopperArrow",
                L = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                T = r.forwardRef(function(t, e) {
                    let {
                        __scopePopper: n,
                        ...r
                    } = t, i = A(S, n), o = L[i.placedSide];
                    return (0, u.jsx)("span", {
                        ref: i.onArrowChange,
                        style: {
                            position: "absolute",
                            left: i.arrowX,
                            top: i.arrowY,
                            [o]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            } [i.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            } [i.placedSide],
                            visibility: i.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, u.jsx)(f, {
                            ...r,
                            ref: e,
                            style: {
                                ...r.style,
                                display: "block"
                            }
                        })
                    })
                });

            function C(t) {
                return null !== t
            }
            T.displayName = S;
            var P = t => ({
                name: "transformOrigin",
                options: t,
                fn(e) {
                    var n, r, i, o, l;
                    let {
                        placement: u,
                        rects: f,
                        middlewareData: a
                    } = e, c = (null === (n = a.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0, s = c ? 0 : t.arrowWidth, d = c ? 0 : t.arrowHeight, [p, h] = O(u), g = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    } [h], m = (null !== (o = null === (r = a.arrow) || void 0 === r ? void 0 : r.x) && void 0 !== o ? o : 0) + s / 2, w = (null !== (l = null === (i = a.arrow) || void 0 === i ? void 0 : i.y) && void 0 !== l ? l : 0) + d / 2, y = "", x = "";
                    return "bottom" === p ? (y = c ? g : "".concat(m, "px"), x = "".concat(-d, "px")) : "top" === p ? (y = c ? g : "".concat(m, "px"), x = "".concat(f.floating.height + d, "px")) : "right" === p ? (y = "".concat(-d, "px"), x = c ? g : "".concat(w, "px")) : "left" === p && (y = "".concat(f.floating.width + d, "px"), x = c ? g : "".concat(w, "px")), {
                        data: {
                            x: y,
                            y: x
                        }
                    }
                }
            });

            function O(t) {
                let [e, n = "center"] = t.split("-");
                return [e, n]
            }
            var D = x,
                E = b,
                V = F,
                W = T
        },
        90420: function(t, e, n) {
            n.d(e, {
                t: function() {
                    return o
                }
            });
            var r = n(2265),
                i = n(61188);

            function o(t) {
                let [e, n] = r.useState(void 0);
                return (0, i.b)(() => {
                    if (t) {
                        n({
                            width: t.offsetWidth,
                            height: t.offsetHeight
                        });
                        let e = new ResizeObserver(e => {
                            let r, i;
                            if (!Array.isArray(e) || !e.length) return;
                            let o = e[0];
                            if ("borderBoxSize" in o) {
                                let t = o.borderBoxSize,
                                    e = Array.isArray(t) ? t[0] : t;
                                r = e.inlineSize, i = e.blockSize
                            } else r = t.offsetWidth, i = t.offsetHeight;
                            n({
                                width: r,
                                height: i
                            })
                        });
                        return e.observe(t, {
                            box: "border-box"
                        }), () => e.unobserve(t)
                    }
                    n(void 0)
                }, [t]), e
            }
        }
    }
]);