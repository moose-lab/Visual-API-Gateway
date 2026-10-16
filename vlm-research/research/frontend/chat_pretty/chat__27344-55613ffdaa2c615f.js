try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c08d3ec8-fa23-4381-ae9e-04f0093e1658", e._sentryDebugIdIdentifier = "sentry-dbid-c08d3ec8-fa23-4381-ae9e-04f0093e1658")
    }()
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [27344], {
        11058: function(e, t, n) {
            "use strict";
            var r, o = n(2265),
                a = n(43194);

            function i(e) {
                var t = Object.create(null);
                return e && Object.keys(e).forEach(function(n) {
                    if ("default" !== n) {
                        var r = Object.getOwnPropertyDescriptor(e, n);
                        Object.defineProperty(t, n, r.get ? r : {
                            enumerable: !0,
                            get: function() {
                                return e[n]
                            }
                        })
                    }
                }), t.default = e, Object.freeze(t)
            }
            var c, l = i(o),
                u = i(a);
            t.AnnotationType = void 0, (c = t.AnnotationType || (t.AnnotationType = {}))[c.Text = 1] = "Text", c[c.Link = 2] = "Link", c[c.FreeText = 3] = "FreeText", c[c.Line = 4] = "Line", c[c.Square = 5] = "Square", c[c.Circle = 6] = "Circle", c[c.Polygon = 7] = "Polygon", c[c.Polyline = 8] = "Polyline", c[c.Highlight = 9] = "Highlight", c[c.Underline = 10] = "Underline", c[c.Squiggly = 11] = "Squiggly", c[c.StrikeOut = 12] = "StrikeOut", c[c.Stamp = 13] = "Stamp", c[c.Caret = 14] = "Caret", c[c.Ink = 15] = "Ink", c[c.Popup = 16] = "Popup", c[c.FileAttachment = 17] = "FileAttachment";
            var s = function(e, t) {
                return (s = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                })(e, t)
            };

            function d(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                s(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var p, f = function() {
                return (f = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };
            t.TextDirection = void 0, (p = t.TextDirection || (t.TextDirection = {})).RightToLeft = "RTL", p.LeftToRight = "LTR";
            var g, h = l.createContext({
                    currentTheme: "light",
                    direction: t.TextDirection.LeftToRight,
                    setCurrentTheme: function() {}
                }),
                v = function(e) {
                    var t = [];
                    return Object.keys(e).forEach(function(n) {
                        n && e[n] && t.push(n)
                    }), t.join(" ")
                },
                m = "undefined" != typeof window ? l.useLayoutEffect : l.useEffect,
                w = function(e) {
                    var t = l.useRef(null),
                        n = e.once,
                        r = e.threshold,
                        o = e.onVisibilityChanged;
                    return m(function() {
                        var e = t.current;
                        if (e) {
                            var a = new IntersectionObserver(function(t) {
                                t.forEach(function(t) {
                                    var r = t.isIntersecting;
                                    o({
                                        isVisible: r,
                                        ratio: t.intersectionRatio
                                    }), r && n && (a.unobserve(e), a.disconnect())
                                })
                            }, {
                                threshold: r || 0
                            });
                            return a.observe(e),
                                function() {
                                    a.unobserve(e), a.disconnect()
                                }
                        }
                    }, []), t
                },
                b = function(e) {
                    var n = e.children,
                        r = e.ignoreDirection,
                        o = e.size,
                        a = l.useContext(h).direction,
                        i = !(void 0 !== r && r) && a === t.TextDirection.RightToLeft,
                        c = "".concat((void 0 === o ? 24 : o) || 24, "px");
                    return l.createElement("svg", {
                        "aria-hidden": "true",
                        className: v({
                            "rpv-core__icon": !0,
                            "rpv-core__icon--rtl": i
                        }),
                        focusable: "false",
                        height: c,
                        viewBox: "0 0 24 24",
                        width: c
                    }, n)
                },
                y = function() {
                    return l.createElement(b, {
                        size: 16
                    }, l.createElement("path", {
                        d: "M23.5,0.499l-16.5,23l-6.5-6.5"
                    }))
                },
                E = function(e) {
                    var n = e.children,
                        r = e.testId,
                        o = e.onClick,
                        a = l.useContext(h).direction === t.TextDirection.RightToLeft;
                    return l.createElement("button", f({
                        className: v({
                            "rpv-core__primary-button": !0,
                            "rpv-core__primary-button--rtl": a
                        }),
                        type: "button",
                        onClick: o
                    }, r ? {
                        "data-testid": r
                    } : {}), n)
                },
                _ = function(e) {
                    var t = e.size,
                        n = void 0 === t ? "4rem" : t,
                        r = e.testId,
                        o = l.useState(!1),
                        a = o[0],
                        i = o[1],
                        c = w({
                            onVisibilityChanged: function(e) {
                                i(e.isVisible)
                            }
                        });
                    return l.createElement("div", f({}, r ? {
                        "data-testid": r
                    } : {}, {
                        className: v({
                            "rpv-core__spinner": !0,
                            "rpv-core__spinner--animating": a
                        }),
                        ref: c,
                        style: {
                            height: n,
                            width: n
                        }
                    }))
                },
                S = function(e) {
                    var n = e.ariaLabel,
                        r = e.autoFocus,
                        o = void 0 !== r && r,
                        a = e.placeholder,
                        i = e.testId,
                        c = e.type,
                        u = e.value,
                        s = e.onChange,
                        d = e.onKeyDown,
                        p = l.useContext(h).direction,
                        g = l.useRef(),
                        w = {
                            ref: g,
                            "data-testid": "",
                            "aria-label": void 0 === n ? "" : n,
                            className: v({
                                "rpv-core__textbox": !0,
                                "rpv-core__textbox--rtl": p === t.TextDirection.RightToLeft
                            }),
                            placeholder: void 0 === a ? "" : a,
                            value: void 0 === u ? "" : u,
                            onChange: function(e) {
                                return s(e.target.value)
                            },
                            onKeyDown: void 0 === d ? function() {} : d
                        };
                    return i && (w["data-testid"] = i), m(function() {
                        if (o) {
                            var e = g.current;
                            if (e) {
                                var t = window.scrollX,
                                    n = window.scrollY;
                                e.focus(), window.scrollTo(t, n)
                            }
                        }
                    }, []), "text" === (void 0 === c ? "text" : c) ? l.createElement("input", f({
                        type: "text"
                    }, w)) : l.createElement("input", f({
                        type: "password"
                    }, w))
                };
            (x = g || (g = {}))[x.ExitFullScreen = 0] = "ExitFullScreen", x[x.FullScreenChange = 1] = "FullScreenChange", x[x.FullScreenElement = 2] = "FullScreenElement", x[x.FullScreenEnabled = 3] = "FullScreenEnabled", x[x.RequestFullScreen = 4] = "RequestFullScreen";
            var x, P, R = {
                    ExitFullScreen: "exitFullscreen",
                    FullScreenChange: "fullscreenchange",
                    FullScreenElement: "fullscreenElement",
                    FullScreenEnabled: "fullscreenEnabled",
                    RequestFullScreen: "requestFullscreen"
                },
                M = {
                    ExitFullScreen: "webkitExitFullscreen",
                    FullScreenChange: "webkitfullscreenchange",
                    FullScreenElement: "webkitFullscreenElement",
                    FullScreenEnabled: "webkitFullscreenEnabled",
                    RequestFullScreen: "webkitRequestFullscreen"
                },
                C = {
                    ExitFullScreen: "msExitFullscreen",
                    FullScreenChange: "msFullscreenChange",
                    FullScreenElement: "msFullscreenElement",
                    FullScreenEnabled: "msFullscreenEnabled",
                    RequestFullScreen: "msRequestFullscreen"
                },
                k = "undefined" != typeof window,
                T = k && (g.FullScreenEnabled in document && R || M.FullScreenEnabled in document && M || C.FullScreenEnabled in document && C) || R,
                L = function() {
                    return k && T.FullScreenEnabled in document && !0 === document[T.FullScreenEnabled]
                },
                O = function(e) {
                    return k ? e[T.ExitFullScreen]() : Promise.resolve({})
                },
                F = function() {
                    return k ? document[T.FullScreenElement] : null
                },
                I = function(e, t) {
                    var n = l.useRef(),
                        r = function() {
                            n.current && clearTimeout(n.current)
                        };
                    return l.useEffect(function() {
                        return function() {
                            return r()
                        }
                    }, []), l.useCallback(function() {
                        for (var o = [], a = 0; a < arguments.length; a++) o[a] = arguments[a];
                        r(), n.current = setTimeout(function() {
                            e.apply(void 0, o)
                        }, t)
                    }, [e, t])
                },
                D = function() {
                    var e = l.useRef(!1);
                    return l.useEffect(function() {
                        return e.current = !0,
                            function() {
                                e.current = !1
                            }
                    }, []), e
                },
                A = function(e) {
                    var t = l.useRef(e);
                    return l.useEffect(function() {
                        t.current = e
                    }, [e]), t.current
                };
            (N = P || (P = {})).NotRenderedYet = "NotRenderedYet", N.Rendering = "Rendering", N.Rendered = "Rendered";
            var N, H, V = function(e) {
                    var t = e.doc,
                        n = t.numPages,
                        r = t.loadingTask.docId,
                        o = l.useMemo(function() {
                            return Array(n).fill(null).map(function(e, t) {
                                return {
                                    pageIndex: t,
                                    renderStatus: P.NotRenderedYet,
                                    visibility: -9999
                                }
                            })
                        }, [r]),
                        a = l.useRef({
                            currentRenderingPage: -1,
                            startRange: 0,
                            endRange: n - 1,
                            visibilities: o
                        }),
                        i = function(e, t) {
                            a.current.visibilities[e].visibility = t
                        };
                    return {
                        getHighestPriorityPage: function() {
                            var e = a.current.visibilities.slice(a.current.startRange, a.current.endRange + 1).filter(function(e) {
                                return e.visibility > -9999
                            });
                            if (!e.length) return -1;
                            for (var t = e[0].pageIndex, r = e[e.length - 1].pageIndex, o = e.length, i = 0; i < o; i++) {
                                if (e[i].renderStatus === P.Rendering) return -1;
                                if (e[i].renderStatus === P.NotRenderedYet) return e[i].pageIndex
                            }
                            return r + 1 < n && a.current.visibilities[r + 1].renderStatus !== P.Rendered ? r + 1 : t - 1 >= 0 && a.current.visibilities[t - 1].renderStatus !== P.Rendered ? t - 1 : -1
                        },
                        isInRange: function(e) {
                            return e >= a.current.startRange && e <= a.current.endRange
                        },
                        markNotRendered: function() {
                            for (var e = 0; e < n; e++) a.current.visibilities[e].renderStatus = P.NotRenderedYet
                        },
                        markRendered: function(e) {
                            a.current.visibilities[e].renderStatus = P.Rendered
                        },
                        markRendering: function(e) {
                            -1 !== a.current.currentRenderingPage && a.current.currentRenderingPage !== e && a.current.visibilities[a.current.currentRenderingPage].renderStatus === P.Rendering && (a.current.visibilities[a.current.currentRenderingPage].renderStatus = P.NotRenderedYet), a.current.visibilities[e].renderStatus = P.Rendering, a.current.currentRenderingPage = e
                        },
                        setOutOfRange: function(e) {
                            i(e, -9999)
                        },
                        setRange: function(e, t) {
                            a.current.startRange = e, a.current.endRange = t;
                            for (var r = 0; r < n; r++)(r < e || r > t) && (a.current.visibilities[r].visibility = -9999, a.current.visibilities[r].renderStatus = P.NotRenderedYet)
                        },
                        setVisibility: i
                    }
                },
                z = {
                    core: {
                        askingPassword: {
                            requirePasswordToOpen: "This document requires a password to open",
                            submit: "Submit"
                        },
                        wrongPassword: {
                            tryAgain: "The password is wrong. Please try again"
                        },
                        pageLabel: "Page {{pageIndex}}"
                    }
                },
                B = l.createContext({
                    l10n: z,
                    setL10n: function() {}
                }),
                j = 0,
                W = function() {
                    return j++
                },
                q = function(e, t, n) {
                    var r = function(e) {
                        var r = t.current;
                        if (r) {
                            var o = e.target;
                            if (o instanceof Element && o.shadowRoot) {
                                var a = e.composedPath();
                                a.length > 0 && !r.contains(a[0]) && n()
                            } else r.contains(o) || n()
                        }
                    };
                    l.useEffect(function() {
                        if (e) {
                            var t = {
                                capture: !0
                            };
                            return document.addEventListener("click", r, t),
                                function() {
                                    document.removeEventListener("click", r, t)
                                }
                        }
                    }, [])
                },
                U = function(e) {
                    var t = function(t) {
                        "Escape" === t.key && e()
                    };
                    l.useEffect(function() {
                        return document.addEventListener("keyup", t),
                            function() {
                                document.removeEventListener("keyup", t)
                            }
                    }, [])
                },
                Z = function(e) {
                    var n = e.ariaControlsSuffix,
                        r = e.children,
                        o = e.closeOnClickOutside,
                        a = e.closeOnEscape,
                        i = e.onToggle,
                        c = l.useRef(),
                        u = l.useContext(h).direction === t.TextDirection.RightToLeft;
                    return l.useEffect(function() {
                        var e = window.getComputedStyle(document.body).overflow;
                        return document.body.style.overflow = "hidden",
                            function() {
                                document.body.style.overflow = e
                            }
                    }, []), U(function() {
                        c.current && a && i()
                    }), q(o, c, i), m(function() {
                        var e = c.current;
                        if (e) {
                            var t = .75 * document.body.clientHeight;
                            e.getBoundingClientRect().height >= t && (e.style.overflow = "auto", e.style.maxHeight = "".concat(t, "px"))
                        }
                    }, []), l.createElement("div", {
                        "aria-modal": "true",
                        className: v({
                            "rpv-core__modal-body": !0,
                            "rpv-core__modal-body--rtl": u
                        }),
                        id: "rpv-core__modal-body-".concat(n),
                        ref: c,
                        role: "dialog",
                        tabIndex: -1
                    }, r)
                },
                J = function(e) {
                    var t = e.children;
                    return l.createElement("div", {
                        className: "rpv-core__modal-overlay"
                    }, t)
                };
            t.ToggleStatus = void 0, (H = t.ToggleStatus || (t.ToggleStatus = {})).Close = "Close", H.Open = "Open", H.Toggle = "Toggle";
            var G, Y = function(e) {
                    var n = l.useState(e),
                        r = n[0],
                        o = n[1];
                    return {
                        opened: r,
                        toggle: function(e) {
                            switch (e) {
                                case t.ToggleStatus.Close:
                                    o(!1);
                                    break;
                                case t.ToggleStatus.Open:
                                    o(!0);
                                    break;
                                case t.ToggleStatus.Toggle:
                                default:
                                    o(function(e) {
                                        return !e
                                    })
                            }
                        }
                    }
                },
                K = function(e) {
                    var t = e.content,
                        n = e.isOpened,
                        r = e.target,
                        o = Y(void 0 !== n && n),
                        a = o.opened,
                        i = o.toggle;
                    return l.createElement(l.Fragment, null, r && r(i, a), a && t(i))
                };
            t.Position = void 0, (G = t.Position || (t.Position = {})).TopLeft = "TOP_LEFT", G.TopCenter = "TOP_CENTER", G.TopRight = "TOP_RIGHT", G.RightTop = "RIGHT_TOP", G.RightCenter = "RIGHT_CENTER", G.RightBottom = "RIGHT_BOTTOM", G.BottomLeft = "BOTTOM_LEFT", G.BottomCenter = "BOTTOM_CENTER", G.BottomRight = "BOTTOM_RIGHT", G.LeftTop = "LEFT_TOP", G.LeftCenter = "LEFT_CENTER", G.LeftBottom = "LEFT_BOTTOM";
            var X, Q, $, ee, et, en, er, eo, ea = function(e, n, r, o, a) {
                    m(function() {
                        var i = n.current,
                            c = e.current,
                            l = r.current;
                        if (c && i && l) {
                            var u = l.getBoundingClientRect(),
                                s = function(e, n, r, o) {
                                    var a = n.getBoundingClientRect(),
                                        i = e.getBoundingClientRect(),
                                        c = i.height,
                                        l = i.width,
                                        u = 0,
                                        s = 0;
                                    switch (r) {
                                        case t.Position.TopLeft:
                                            u = a.top - c, s = a.left;
                                            break;
                                        case t.Position.TopCenter:
                                            u = a.top - c, s = a.left + a.width / 2 - l / 2;
                                            break;
                                        case t.Position.TopRight:
                                            u = a.top - c, s = a.left + a.width - l;
                                            break;
                                        case t.Position.RightTop:
                                            u = a.top, s = a.left + a.width;
                                            break;
                                        case t.Position.RightCenter:
                                            u = a.top + a.height / 2 - c / 2, s = a.left + a.width;
                                            break;
                                        case t.Position.RightBottom:
                                            u = a.top + a.height - c, s = a.left + a.width;
                                            break;
                                        case t.Position.BottomLeft:
                                            u = a.top + a.height, s = a.left;
                                            break;
                                        case t.Position.BottomCenter:
                                            u = a.top + a.height, s = a.left + a.width / 2 - l / 2;
                                            break;
                                        case t.Position.BottomRight:
                                            u = a.top + a.height, s = a.left + a.width - l;
                                            break;
                                        case t.Position.LeftTop:
                                            u = a.top, s = a.left - l;
                                            break;
                                        case t.Position.LeftCenter:
                                            u = a.top + a.height / 2 - c / 2, s = a.left - l;
                                            break;
                                        case t.Position.LeftBottom:
                                            u = a.top + a.height - c, s = a.left - l
                                    }
                                    return {
                                        left: s + (o.left || 0),
                                        top: u + (o.top || 0)
                                    }
                                }(c, i, o, a),
                                d = s.top,
                                p = s.left;
                            c.style.top = "".concat(d - u.top, "px"), c.style.left = "".concat(p - u.left, "px")
                        }
                    }, [])
                },
                ei = function(e) {
                    var n, r = e.customClassName,
                        o = e.position;
                    return l.createElement("div", {
                        className: v(((n = {
                            "rpv-core__arrow": !0,
                            "rpv-core__arrow--tl": o === t.Position.TopLeft,
                            "rpv-core__arrow--tc": o === t.Position.TopCenter,
                            "rpv-core__arrow--tr": o === t.Position.TopRight,
                            "rpv-core__arrow--rt": o === t.Position.RightTop,
                            "rpv-core__arrow--rc": o === t.Position.RightCenter,
                            "rpv-core__arrow--rb": o === t.Position.RightBottom,
                            "rpv-core__arrow--bl": o === t.Position.BottomLeft,
                            "rpv-core__arrow--bc": o === t.Position.BottomCenter,
                            "rpv-core__arrow--br": o === t.Position.BottomRight,
                            "rpv-core__arrow--lt": o === t.Position.LeftTop,
                            "rpv-core__arrow--lc": o === t.Position.LeftCenter,
                            "rpv-core__arrow--lb": o === t.Position.LeftBottom
                        })["".concat(r)] = "" !== r, n))
                    })
                },
                ec = function(e) {
                    var n = e.ariaControlsSuffix,
                        r = e.children,
                        o = e.closeOnClickOutside,
                        a = e.offset,
                        i = e.position,
                        c = e.targetRef,
                        u = e.onClose,
                        s = l.useRef(),
                        d = l.useRef(),
                        p = l.useRef(),
                        f = l.useContext(h).direction === t.TextDirection.RightToLeft;
                    q(o, s, u), ea(s, c, p, i, a), m(function() {
                        var e = d.current;
                        if (e) {
                            var t = .75 * document.body.clientHeight;
                            e.getBoundingClientRect().height >= t && (e.style.overflow = "auto", e.style.maxHeight = "".concat(t, "px"))
                        }
                    }, []);
                    var g = "rpv-core__popover-body-inner-".concat(n);
                    return l.createElement(l.Fragment, null, l.createElement("div", {
                        ref: p,
                        style: {
                            left: 0,
                            position: "absolute",
                            top: 0
                        }
                    }), l.createElement("div", {
                        "aria-describedby": g,
                        className: v({
                            "rpv-core__popover-body": !0,
                            "rpv-core__popover-body--rtl": f
                        }),
                        id: "rpv-core__popover-body-".concat(n),
                        ref: s,
                        role: "dialog",
                        tabIndex: -1
                    }, l.createElement(ei, {
                        customClassName: "rpv-core__popover-body-arrow",
                        position: i
                    }), l.createElement("div", {
                        id: g,
                        ref: d
                    }, r)))
                },
                el = function(e) {
                    var t = e.closeOnEscape,
                        n = e.onClose,
                        r = l.useRef();
                    return U(function() {
                        r.current && t && n()
                    }), l.createElement("div", {
                        className: "rpv-core__popover-overlay",
                        ref: r
                    })
                },
                eu = function(e) {
                    var n = e.ariaControlsSuffix,
                        r = e.children,
                        o = e.contentRef,
                        a = e.offset,
                        i = e.position,
                        c = e.targetRef,
                        u = l.useRef(),
                        s = l.useContext(h).direction === t.TextDirection.RightToLeft;
                    return ea(o, c, u, i, a), l.createElement(l.Fragment, null, l.createElement("div", {
                        ref: u,
                        style: {
                            left: 0,
                            position: "absolute",
                            top: 0
                        }
                    }), l.createElement("div", {
                        className: v({
                            "rpv-core__tooltip-body": !0,
                            "rpv-core__tooltip-body--rtl": s
                        }),
                        id: "rpv-core__tooltip-body-".concat(n),
                        ref: o,
                        role: "tooltip"
                    }, l.createElement(ei, {
                        customClassName: "rpv-core__tooltip-body-arrow",
                        position: i
                    }), l.createElement("div", {
                        className: "rpv-core__tooltip-body-content"
                    }, r)))
                };
            t.FullScreenMode = void 0, (X = t.FullScreenMode || (t.FullScreenMode = {})).Normal = "Normal", X.Entering = "Entering", X.Entered = "Entered", X.EnteredCompletely = "EnteredCompletely", X.Exitting = "Exitting", X.Exited = "Exited", t.LayerRenderStatus = void 0, (Q = t.LayerRenderStatus || (t.LayerRenderStatus = {}))[Q.PreRender = 0] = "PreRender", Q[Q.DidRender = 1] = "DidRender", t.PageMode = void 0, ($ = t.PageMode || (t.PageMode = {})).Attachments = "UseAttachments", $.Bookmarks = "UseOutlines", $.ContentGroup = "UseOC", $.Default = "UserNone", $.FullScreen = "FullScreen", $.Thumbnails = "UseThumbs", t.PasswordStatus = void 0, (ee = t.PasswordStatus || (t.PasswordStatus = {})).RequiredPassword = "RequiredPassword", ee.WrongPassword = "WrongPassword", t.RotateDirection = void 0, (et = t.RotateDirection || (t.RotateDirection = {})).Backward = "Backward", et.Forward = "Forward", t.ScrollMode = void 0, (en = t.ScrollMode || (t.ScrollMode = {})).Page = "Page", en.Horizontal = "Horizontal", en.Vertical = "Vertical", en.Wrapped = "Wrapped", t.SpecialZoomLevel = void 0, (er = t.SpecialZoomLevel || (t.SpecialZoomLevel = {})).ActualSize = "ActualSize", er.PageFit = "PageFit", er.PageWidth = "PageWidth", t.ViewMode = void 0, (eo = t.ViewMode || (t.ViewMode = {})).DualPage = "DualPage", eo.DualPageWithCover = "DualPageWithCover", eo.SinglePage = "SinglePage";
            var es, ed = function(e, t) {
                    return e.reduce(function(e, n, r) {
                        return r % t ? e[e.length - 1].push(n) : e.push([n]), e
                    }, [])
                },
                ep = function(e, n) {
                    switch (n[1].name) {
                        case "XYZ":
                            return {
                                bottomOffset: function(e, t) {
                                    return null === n[3] ? t : n[3]
                                }, leftOffset: function(e, t) {
                                    return null === n[2] ? 0 : n[2]
                                }, pageIndex: e, scaleTo: n[4]
                            };
                        case "Fit":
                        case "FitB":
                            return {
                                bottomOffset: 0, leftOffset: 0, pageIndex: e, scaleTo: t.SpecialZoomLevel.PageFit
                            };
                        case "FitH":
                        case "FitBH":
                            return {
                                bottomOffset: n[2], leftOffset: 0, pageIndex: e, scaleTo: t.SpecialZoomLevel.PageWidth
                            };
                        default:
                            return {
                                bottomOffset: 0, leftOffset: 0, pageIndex: e, scaleTo: 1
                            }
                    }
                },
                ef = new Map,
                eg = new Map,
                eh = function(e, t) {
                    return "".concat(e.loadingTask.docId, "___").concat(t.num, "R").concat(0 === t.gen ? "" : t.gen)
                },
                ev = function(e, t, n) {
                    ef.set(eh(e, t), n)
                },
                em = function(e, t) {
                    if (!e) return Promise.reject("The document is not loaded yet");
                    var n = "".concat(e.loadingTask.docId, "___").concat(t),
                        r = eg.get(n);
                    return r ? Promise.resolve(r) : new Promise(function(r, o) {
                        e.getPage(t + 1).then(function(o) {
                            eg.set(n, o), o.ref && ev(e, o.ref, t), r(o)
                        })
                    })
                },
                ew = function(e, t) {
                    return new Promise(function(n) {
                        new Promise(function(n) {
                            "string" == typeof t ? e.getDestination(t).then(function(e) {
                                n(e)
                            }) : n(t)
                        }).then(function(r) {
                            if ("object" == typeof r[0] && null !== r[0]) {
                                var o, a = r[0],
                                    i = (o = eh(e, a), ef.has(o) ? ef.get(o) : null);
                                null === i ? e.getPageIndex(a).then(function(r) {
                                    ev(e, a, r), ew(e, t).then(function(e) {
                                        return n(e)
                                    })
                                }) : n(ep(i, r))
                            } else n(ep(r[0], r))
                        })
                    })
                };
            (eb = es || (es = {}))[eb.Solid = 1] = "Solid", eb[eb.Dashed = 2] = "Dashed", eb[eb.Beveled = 3] = "Beveled", eb[eb.Inset = 4] = "Inset", eb[eb.Underline = 5] = "Underline";
            var eb, ey, eE = RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"),
                e_ = function(e, t, n, r) {
                    var o = parseInt(e, 10);
                    return o >= t && o <= n ? o : r
                },
                eS = function(e) {
                    return e.contentsObj ? e.contentsObj.str : e.contents || ""
                },
                ex = function(e) {
                    return e.titleObj ? e.titleObj.str : e.title || ""
                },
                eP = function(e) {
                    var n = e.annotation,
                        r = l.useContext(h).direction,
                        o = ex(n),
                        a = eS(n),
                        i = r === t.TextDirection.RightToLeft,
                        c = l.useRef(),
                        u = "";
                    if (n.modificationDate) {
                        var s = function(e) {
                            var t = eE.exec(e);
                            if (!t) return null;
                            var n = parseInt(t[1], 10),
                                r = e_(t[2], 1, 12, 1) - 1,
                                o = e_(t[3], 1, 31, 1),
                                a = e_(t[4], 0, 23, 0),
                                i = e_(t[5], 0, 59, 0),
                                c = e_(t[6], 0, 59, 0),
                                l = t[7] || "Z",
                                u = e_(t[8], 0, 23, 0),
                                s = e_(t[9], 0, 59, 0);
                            switch (l) {
                                case "-":
                                    a += u, i += s;
                                    break;
                                case "+":
                                    a -= u, i -= s
                            }
                            return new Date(Date.UTC(n, r, o, a, i, c))
                        }(n.modificationDate);
                        u = s ? "".concat(s.toLocaleDateString(), ", ").concat(s.toLocaleTimeString()) : ""
                    }
                    return l.useLayoutEffect(function() {
                        if (c.current) {
                            var e = document.querySelector('[data-annotation-id="'.concat(n.id, '"]'));
                            if (e) return e.style.zIndex += 1,
                                function() {
                                    e.style.zIndex = "".concat(parseInt(e.style.zIndex, 10) - 1)
                                }
                        }
                    }, []), l.createElement("div", {
                        ref: c,
                        className: v({
                            "rpv-core__annotation-popup-wrapper": !0,
                            "rpv-core__annotation-popup-wrapper--rtl": i
                        }),
                        style: {
                            top: n.annotationType === t.AnnotationType.Popup ? "" : "100%"
                        }
                    }, o && l.createElement(l.Fragment, null, l.createElement("div", {
                        className: v({
                            "rpv-core__annotation-popup-title": !0,
                            "rpv-core__annotation-popup-title--ltr": !i,
                            "rpv-core__annotation-popup-title--rtl": i
                        })
                    }, o), l.createElement("div", {
                        className: "rpv-core__annotation-popup-date"
                    }, u)), a && l.createElement("div", {
                        className: "rpv-core__annotation-popup-content"
                    }, a.split("\n").map(function(e, t) {
                        return l.createElement(l.Fragment, {
                            key: t
                        }, e, l.createElement("br", null))
                    })))
                };
            (eR = ey || (ey = {})).Click = "Click", eR.Hover = "Hover";
            var eR, eM, eC = function(e) {
                    var n, r, o, a, i, c, u, s = e.annotation,
                        d = e.children,
                        p = e.ignoreBorder,
                        f = e.hasPopup,
                        g = e.isRenderable,
                        h = e.page,
                        v = e.viewport,
                        m = s.rect,
                        w = (r = (n = Y(!1)).opened, o = n.toggle, i = (a = l.useState(ey.Hover))[0], c = a[1], {
                            opened: r,
                            closeOnHover: function() {
                                i === ey.Hover && o(t.ToggleStatus.Close)
                            },
                            openOnHover: function() {
                                i === ey.Hover && o(t.ToggleStatus.Open)
                            },
                            toggleOnClick: function() {
                                switch (i) {
                                    case ey.Click:
                                        r && c(ey.Hover), o(t.ToggleStatus.Toggle);
                                        break;
                                    case ey.Hover:
                                        c(ey.Click), o(t.ToggleStatus.Open)
                                }
                            }
                        }),
                        b = w.closeOnHover,
                        y = w.opened,
                        E = w.openOnHover,
                        _ = w.toggleOnClick,
                        S = [Math.min((u = [m[0], h.view[3] + h.view[1] - m[1], m[2], h.view[3] + h.view[1] - m[3]])[0], u[2]), Math.min(u[1], u[3]), Math.max(u[0], u[2]), Math.max(u[1], u[3])],
                        x = m[2] - m[0],
                        P = m[3] - m[1],
                        R = {
                            borderColor: "",
                            borderRadius: "",
                            borderStyle: "",
                            borderWidth: ""
                        };
                    if (!p && s.borderStyle.width > 0) {
                        switch (s.borderStyle.style) {
                            case es.Dashed:
                                R.borderStyle = "dashed";
                                break;
                            case es.Solid:
                                R.borderStyle = "solid";
                                break;
                            case es.Underline:
                                R = Object.assign({
                                    borderBottomStyle: "solid"
                                }, R);
                            case es.Beveled:
                            case es.Inset:
                        }
                        var M = s.borderStyle.width;
                        R.borderWidth = "".concat(M, "px"), s.borderStyle.style !== es.Underline && (x -= 2 * M, P -= 2 * M);
                        var C = s.borderStyle,
                            k = C.horizontalCornerRadius,
                            T = C.verticalCornerRadius;
                        (k > 0 || T > 0) && (R.borderRadius = "".concat(k, "px / ").concat(T, "px")), s.color ? R.borderColor = "rgb(".concat(0 | s.color[0], ", ").concat(0 | s.color[1], ", ").concat(0 | s.color[2], ")") : R.borderWidth = "0"
                    }
                    return l.createElement(l.Fragment, null, g && d({
                        popup: {
                            opened: y,
                            closeOnHover: b,
                            openOnHover: E,
                            toggleOnClick: _
                        },
                        slot: {
                            attrs: {
                                style: Object.assign({
                                    height: "".concat(P, "px"),
                                    left: "".concat(S[0], "px"),
                                    top: "".concat(S[1], "px"),
                                    transform: "matrix(".concat(v.transform.join(","), ")"),
                                    transformOrigin: "-".concat(S[0], "px -").concat(S[1], "px"),
                                    width: "".concat(x, "px")
                                }, R)
                            },
                            children: l.createElement(l.Fragment, null, f && y && l.createElement(eP, {
                                annotation: s
                            }))
                        }
                    }))
                },
                ek = function(e) {
                    var t = e.annotation,
                        n = e.page,
                        r = e.viewport,
                        o = !1 === t.hasPopup,
                        a = ex(t),
                        i = eS(t),
                        c = !!(t.hasPopup || a || i);
                    return l.createElement(eC, {
                        annotation: t,
                        hasPopup: o,
                        ignoreBorder: !0,
                        isRenderable: c,
                        page: n,
                        viewport: r
                    }, function(e) {
                        return l.createElement("div", f({}, e.slot.attrs, {
                            className: "rpv-core__annotation rpv-core__annotation--caret",
                            "data-annotation-id": t.id,
                            onClick: e.popup.toggleOnClick,
                            onMouseEnter: e.popup.openOnHover,
                            onMouseLeave: e.popup.closeOnHover
                        }), e.slot.children)
                    })
                },
                eT = function(e) {
                    var t = e.annotation,
                        n = e.page,
                        r = e.viewport,
                        o = !1 === t.hasPopup,
                        a = ex(t),
                        i = eS(t),
                        c = !!(t.hasPopup || a || i),
                        u = t.rect,
                        s = u[2] - u[0],
                        d = u[3] - u[1],
                        p = t.borderStyle.width;
                    return l.createElement(eC, {
                        annotation: t,
                        hasPopup: o,
                        ignoreBorder: !0,
                        isRenderable: c,
                        page: n,
                        viewport: r
                    }, function(e) {
                        return l.createElement("div", f({}, e.slot.attrs, {
                            className: "rpv-core__annotation rpv-core__annotation--circle",
                            "data-annotation-id": t.id,
                            onClick: e.popup.toggleOnClick,
                            onMouseEnter: e.popup.openOnHover,
                            onMouseLeave: e.popup.closeOnHover
                        }), l.createElement("svg", {
                            height: "".concat(d, "px"),
                            preserveAspectRatio: "none",
                            version: "1.1",
                            viewBox: "0 0 ".concat(s, " ").concat(d),
                            width: "".concat(s, "px")
                        }, l.createElement("circle", {
                            cy: d / 2,
                            fill: "none",
                            rx: s / 2 - p / 2,
                            ry: d / 2 - p / 2,
                            stroke: "transparent",
                            strokeWidth: p || 1
                        })), e.slot.children)
                    })
                },
                eL = function(e) {
                    var t = e.annotation,
                        n = e.page,
                        r = e.viewport,
                        o = ex(t),
                        a = eS(t),
                        i = !(!1 !== t.hasPopup || !o && !a),
                        c = function() {
                            var e, n, r, o, a, i = t.file;
                            i && (n = i.filename, o = "string" == typeof(r = i.content) ? "" : URL.createObjectURL(new Blob([r], {
                                type: ""
                            })), (a = document.createElement("a")).style.display = "none", a.href = o || n, a.setAttribute("download", (e = n.split("/").pop()) ? e.split("#")[0].split("?")[0] : n), document.body.appendChild(a), a.click(), document.body.removeChild(a), o && URL.revokeObjectURL(o))
                        };
                    return l.createElement(eC, {
                        annotation: t,
                        hasPopup: i,
                        ignoreBorder: !0,
                        isRenderable: !0,
                        page: n,
                        viewport: r
                    }, function(e) {
                        return l.createElement("div", f({}, e.slot.attrs, {
                            className: "rpv-core__annotation rpv-core__annotation--file-attachment",
                            "data-annotation-id": t.id,
                            onClick: e.popup.toggleOnClick,
                            onDoubleClick: c,
                            onMouseEnter: e.popup.openOnHover,
                            onMouseLeave: e.popup.closeOnHover
                        }), e.slot.children)
                    })
                },
                eO = function(e) {
                    var t = e.annotation,
                        n = e.page,
                        r = e.viewport,
                        o = !1 === t.hasPopup,
                        a = ex(t),
                        i = eS(t),
                        c = !!(t.hasPopup || a || i);
                    return l.createElement(eC, {
                        annotation: t,
                        hasPopup: o,
                        ignoreBorder: !0,
                        isRenderable: c,
                        page: n,
                        viewport: r
                    }, function(e) {
                        return l.createElement("div", f({}, e.slot.attrs, {
                            className: "rpv-core__annotation rpv-core__annotation--free-text",
                            "data-annotation-id": t.id,
                            onClick: e.popup.toggleOnClick,
                            onMouseEnter: e.popup.openOnHover,
                            onMouseLeave: e.popup.closeOnHover
                        }), e.slot.children)
                    })
                },
                eF = function(e) {
                    var t = e.annotation,
                        n = e.page,
                        r = e.viewport,
                        o = ex(t),
                        a = eS(t),
                        i = !t.parentType || -1 !== ["Circle", "Ink", "Line", "Polygon", "PolyLine", "Square"].indexOf(t.parentType);
                    return m(function() {
                        if (t.parentId) {
                            var e = document.querySelector('[data-annotation-id="'.concat(t.parentId, '"]')),
                                n = document.querySelector('[data-annotation-id="'.concat(t.id, '"]'));
                            if (e && n) {
                                var r = parseFloat(e.style.left),
                                    o = parseFloat(e.style.top) + parseFloat(e.style.height);
                                n.style.left = "".concat(r, "px"), n.style.top = "".concat(o, "px"), n.style.transformOrigin = "-".concat(r, "px -").concat(o, "px")
                            }
                        }
                    }, []), l.createElement(eC, {
                        annotation: t,
                        hasPopup: i,
                        ignoreBorder: !1,
                        isRenderable: !(!o && !a),
                        page: n,
                        viewport: r
                    }, function(e) {
                        return l.createElement("div", f({}, e.slot.attrs, {
                            className: "rpv-core__annotation rpv-core__annotation--popup",
                            "data-annotation-id": t.id
                        }), l.createElement(eP, {
                            annotation: t
                        }))
                    })
                },
                eI = function(e) {
                    var n = e.annotation,
                        r = e.childAnnotation,
                        o = e.page,
                        a = e.viewport,
                        i = !1 === n.hasPopup,
                        c = ex(n),
                        u = eS(n),
                        s = !!(n.hasPopup || c || u);
                    if (n.quadPoints && n.quadPoints.length > 0) {
                        var d = n.quadPoints.map(function(e) {
                            return Object.assign({}, n, {
                                rect: [e[2].x, e[2].y, e[1].x, e[1].y],
                                quadPoints: []
                            })
                        });
                        return l.createElement(l.Fragment, null, d.map(function(e, t) {
                            return l.createElement(eI, {
                                key: t,
                                annotation: e,
                                childAnnotation: r,
                                page: o,
                                viewport: a
                            })
                        }))
                    }
                    return l.createElement(eC, {
                        annotation: n,
                        hasPopup: i,
                        ignoreBorder: !0,
                        isRenderable: s,
                        page: o,
                        viewport: a
                    }, function(e) {
                        return l.createElement(l.Fragment, null, l.createElement("div", f({}, e.slot.attrs, {
                            className: "rpv-core__annotation rpv-core__annotation--highlight",
                            "data-annotation-id": n.id,
                            onClick: e.popup.toggleOnClick,
                            onMouseEnter: e.popup.openOnHover,
                            onMouseLeave: e.popup.closeOnHover
                        }), e.slot.children), r && r.annotationType === t.AnnotationType.Popup && e.popup.opened && l.createElement(eF, {
                            annotation: r,
                            page: o,
                            viewport: a
                        }))
                    })
                },
                eD = function(e) {
                    var t = e.annotation,
                        n = e.page,
                        r = e.viewport,
                        o = !1 === t.hasPopup,
                        a = ex(t),
                        i = eS(t),
                        c = !!(t.hasPopup || a || i),
                        u = t.rect,
                        s = u[2] - u[0],
                        d = u[3] - u[1],
                        p = t.borderStyle.width;
                    return l.createElement(eC, {
                        annotation: t,
                        hasPopup: o,
                        ignoreBorder: !0,
                        isRenderable: c,
                        page: n,
                        viewport: r
                    }, function(e) {
                        return l.createElement("div", f({}, e.slot.attrs, {
                            className: "rpv-core__annotation rpv-core__annotation--ink",
                            "data-annotation-id": t.id,
                            onClick: e.popup.toggleOnClick,
                            onMouseEnter: e.popup.openOnHover,
                            onMouseLeave: e.popup.closeOnHover
                        }), t.inkLists && t.inkLists.length && l.createElement("svg", {
                            height: "".concat(d, "px"),
                            preserveAspectRatio: "none",
                            version: "1.1",
                            viewBox: "0 0 ".concat(s, " ").concat(d),
                            width: "".concat(s, "px")
                        }, t.inkLists.map(function(e, t) {
                            return l.createElement("polyline", {
                                key: t,
                                fill: "none",
                                stroke: "transparent",
                                strokeWidth: p || 1,
                                points: e.map(function(e) {
                                    return "".concat(e.x - u[0], ",").concat(u[3] - e.y)
                                }).join(" ")
                            })
                        })), e.slot.children)
                    })
                },
                eA = function(e) {
                    var t = e.annotation,
                        n = e.page,
                        r = e.viewport,
                        o = !1 === t.hasPopup,
                        a = ex(t),
                        i = eS(t),
                        c = !!(t.hasPopup || a || i),
                        u = t.rect,
                        s = u[2] - u[0],
                        d = u[3] - u[1],
                        p = t.borderStyle.width;
                    return l.createElement(eC, {
                        annotation: t,
                        hasPopup: o,
                        ignoreBorder: !0,
                        isRenderable: c,
                        page: n,
                        viewport: r
                    }, function(e) {
                        return l.createElement("div", f({}, e.slot.attrs, {
                            className: "rpv-core__annotation rpv-core__annotation--line",
                            "data-annotation-id": t.id,
                            onClick: e.popup.toggleOnClick,
                            onMouseEnter: e.popup.openOnHover,
                            onMouseLeave: e.popup.closeOnHover
                        }), l.createElement("svg", {
                            height: "".concat(d, "px"),
                            preserveAspectRatio: "none",
                            version: "1.1",
                            viewBox: "0 0 ".concat(s, " ").concat(d),
                            width: "".concat(s, "px")
                        }, l.createElement("line", {
                            stroke: "transparent",
                            strokeWidth: p || 1,
                            x1: u[2] - t.lineCoordinates[0],
                            x2: u[2] - t.lineCoordinates[2],
                            y1: u[3] - t.lineCoordinates[1],
                            y2: u[3] - t.lineCoordinates[3]
                        })), e.slot.children)
                    })
                },
                eN = /^([^\w]*)(javascript|data|vbscript)/im,
                eH = /&#(\w+)(^\w|;)?/g,
                eV = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
                ez = /^([^:]+):/gm,
                eB = function(e, t) {
                    void 0 === t && (t = "about:blank");
                    var n = (e || "").replace(eH, function(e, t) {
                        return String.fromCharCode(t)
                    }).replace(eV, "").trim();
                    if (!n) return t;
                    var r = n[0];
                    if ("." === r || "/" === r) return n;
                    var o = n.match(ez);
                    if (!o) return n;
                    var a = o[0];
                    return eN.test(a) ? t : n
                },
                ej = function(e) {
                    var t, n = e.annotation,
                        r = e.annotationContainerRef,
                        o = e.doc,
                        a = e.outlines,
                        i = e.page,
                        c = e.pageIndex,
                        u = e.scale,
                        s = e.viewport,
                        d = e.onExecuteNamedAction,
                        p = e.onJumpFromLinkAnnotation,
                        g = e.onJumpToDest,
                        h = l.useRef(),
                        v = a && a.length && n.dest && "string" == typeof n.dest ? null === (t = a.find(function(e) {
                            return e.dest === n.dest
                        })) || void 0 === t ? void 0 : t.title : "",
                        m = !!(n.url || n.dest || n.action || n.unsafeUrl),
                        w = {};
                    if (n.url || n.unsafeUrl) {
                        var b = eB(n.url || n.unsafeUrl, "");
                        b ? w = {
                            "data-target": "external",
                            href: b,
                            rel: "noopener noreferrer nofollow",
                            target: n.newWindow ? "_blank" : "",
                            title: b
                        } : m = !1
                    } else w = {
                        href: "",
                        "data-annotation-link": n.id,
                        onClick: function(e) {
                            e.preventDefault(), n.action ? d(n.action) : ew(o, n.dest).then(function(e) {
                                var t = h.current,
                                    n = r.current;
                                if (t && n) {
                                    var o = t.getBoundingClientRect();
                                    n.style.setProperty("height", "100%"), n.style.setProperty("width", "100%");
                                    var a = n.getBoundingClientRect();
                                    n.style.removeProperty("height"), n.style.removeProperty("width");
                                    var i = (o.left - a.left) / u;
                                    p({
                                        bottomOffset: (a.bottom - o.bottom + o.height) / u,
                                        label: v,
                                        leftOffset: i,
                                        pageIndex: c
                                    })
                                }
                                g(e)
                            })
                        }
                    };
                    return v && (w = Object.assign({}, w, {
                        title: v,
                        "aria-label": v
                    })), l.createElement(eC, {
                        annotation: n,
                        hasPopup: !1,
                        ignoreBorder: !1,
                        isRenderable: m,
                        page: i,
                        viewport: s
                    }, function(e) {
                        return l.createElement("div", f({}, e.slot.attrs, {
                            className: "rpv-core__annotation rpv-core__annotation--link",
                            "data-annotation-id": n.id,
                            "data-testid": "core__annotation--link-".concat(n.id)
                        }), l.createElement("a", f({
                            ref: h
                        }, w)))
                    })
                },
                eW = function(e) {
                    var t = e.annotation,
                        n = e.page,
                        r = e.viewport,
                        o = !1 === t.hasPopup,
                        a = ex(t),
                        i = eS(t),
                        c = !!(t.hasPopup || a || i),
                        u = t.rect,
                        s = u[2] - u[0],
                        d = u[3] - u[1],
                        p = t.borderStyle.width;
                    return l.createElement(eC, {
                        annotation: t,
                        hasPopup: o,
                        ignoreBorder: !0,
                        isRenderable: c,
                        page: n,
                        viewport: r
                    }, function(e) {
                        return l.createElement("div", f({}, e.slot.attrs, {
                            className: "rpv-core__annotation rpv-core__annotation--polygon",
                            "data-annotation-id": t.id,
                            onClick: e.popup.toggleOnClick,
                            onMouseEnter: e.popup.openOnHover,
                            onMouseLeave: e.popup.closeOnHover
                        }), t.vertices && t.vertices.length && l.createElement("svg", {
                            height: "".concat(d, "px"),
                            preserveAspectRatio: "none",
                            version: "1.1",
                            viewBox: "0 0 ".concat(s, " ").concat(d),
                            width: "".concat(s, "px")
                        }, l.createElement("polygon", {
                            fill: "none",
                            stroke: "transparent",
                            strokeWidth: p || 1,
                            points: t.vertices.map(function(e) {
                                return "".concat(e.x - u[0], ",").concat(u[3] - e.y)
                            }).join(" ")
                        })), e.slot.children)
                    })
                },
                eq = function(e) {
                    var t = e.annotation,
                        n = e.page,
                        r = e.viewport,
                        o = !1 === t.hasPopup,
                        a = ex(t),
                        i = eS(t),
                        c = !!(t.hasPopup || a || i),
                        u = t.rect,
                        s = u[2] - u[0],
                        d = u[3] - u[1],
                        p = t.borderStyle.width;
                    return l.createElement(eC, {
                        annotation: t,
                        hasPopup: o,
                        ignoreBorder: !0,
                        isRenderable: c,
                        page: n,
                        viewport: r
                    }, function(e) {
                        return l.createElement("div", f({}, e.slot.attrs, {
                            className: "rpv-core__annotation rpv-core__annotation--polyline",
                            "data-annotation-id": t.id,
                            onClick: e.popup.toggleOnClick,
                            onMouseEnter: e.popup.openOnHover,
                            onMouseLeave: e.popup.closeOnHover
                        }), t.vertices && t.vertices.length && l.createElement("svg", {
                            height: "".concat(d, "px"),
                            preserveAspectRatio: "none",
                            version: "1.1",
                            viewBox: "0 0 ".concat(s, " ").concat(d),
                            width: "".concat(s, "px")
                        }, l.createElement("polyline", {
                            fill: "none",
                            stroke: "transparent",
                            strokeWidth: p || 1,
                            points: t.vertices.map(function(e) {
                                return "".concat(e.x - u[0], ",").concat(u[3] - e.y)
                            }).join(" ")
                        })), e.slot.children)
                    })
                },
                eU = function(e) {
                    var t = e.annotation,
                        n = e.page,
                        r = e.viewport,
                        o = !1 === t.hasPopup,
                        a = ex(t),
                        i = eS(t),
                        c = !!(t.hasPopup || a || i),
                        u = t.rect,
                        s = u[2] - u[0],
                        d = u[3] - u[1],
                        p = t.borderStyle.width;
                    return l.createElement(eC, {
                        annotation: t,
                        hasPopup: o,
                        ignoreBorder: !0,
                        isRenderable: c,
                        page: n,
                        viewport: r
                    }, function(e) {
                        return l.createElement("div", f({}, e.slot.attrs, {
                            className: "rpv-core__annotation rpv-core__annotation--square",
                            "data-annotation-id": t.id,
                            onClick: e.popup.toggleOnClick,
                            onMouseEnter: e.popup.openOnHover,
                            onMouseLeave: e.popup.closeOnHover
                        }), l.createElement("svg", {
                            height: "".concat(d, "px"),
                            preserveAspectRatio: "none",
                            version: "1.1",
                            viewBox: "0 0 ".concat(s, " ").concat(d),
                            width: "".concat(s, "px")
                        }, l.createElement("rect", {
                            height: d - p,
                            fill: "none",
                            stroke: "transparent",
                            strokeWidth: p || 1,
                            x: p / 2,
                            y: p / 2,
                            width: s - p
                        })), e.slot.children)
                    })
                },
                eZ = function(e) {
                    var t = e.annotation,
                        n = e.page,
                        r = e.viewport,
                        o = !1 === t.hasPopup,
                        a = ex(t),
                        i = eS(t),
                        c = !!(t.hasPopup || a || i);
                    return l.createElement(eC, {
                        annotation: t,
                        hasPopup: o,
                        ignoreBorder: !0,
                        isRenderable: c,
                        page: n,
                        viewport: r
                    }, function(e) {
                        return l.createElement("div", f({}, e.slot.attrs, {
                            className: "rpv-core__annotation rpv-core__annotation--squiggly",
                            "data-annotation-id": t.id,
                            onClick: e.popup.toggleOnClick,
                            onMouseEnter: e.popup.openOnHover,
                            onMouseLeave: e.popup.closeOnHover
                        }), e.slot.children)
                    })
                },
                eJ = function(e) {
                    var t = e.annotation,
                        n = e.page,
                        r = e.viewport,
                        o = !1 === t.hasPopup,
                        a = ex(t),
                        i = eS(t),
                        c = !!(t.hasPopup || a || i);
                    return l.createElement(eC, {
                        annotation: t,
                        hasPopup: o,
                        ignoreBorder: !0,
                        isRenderable: c,
                        page: n,
                        viewport: r
                    }, function(e) {
                        return l.createElement("div", f({}, e.slot.attrs, {
                            className: "rpv-core__annotation rpv-core__annotation--stamp",
                            "data-annotation-id": t.id,
                            onClick: e.popup.toggleOnClick,
                            onMouseEnter: e.popup.openOnHover,
                            onMouseLeave: e.popup.closeOnHover
                        }), e.slot.children)
                    })
                },
                eG = function(e) {
                    var t = e.annotation,
                        n = e.page,
                        r = e.viewport,
                        o = !1 === t.hasPopup,
                        a = ex(t),
                        i = eS(t),
                        c = !!(t.hasPopup || a || i);
                    return l.createElement(eC, {
                        annotation: t,
                        hasPopup: o,
                        ignoreBorder: !0,
                        isRenderable: c,
                        page: n,
                        viewport: r
                    }, function(e) {
                        return l.createElement("div", f({}, e.slot.attrs, {
                            className: "rpv-core__annotation rpv-core__annotation--strike-out",
                            "data-annotation-id": t.id,
                            onClick: e.popup.toggleOnClick,
                            onMouseEnter: e.popup.openOnHover,
                            onMouseLeave: e.popup.closeOnHover
                        }), e.slot.children)
                    })
                },
                eY = function() {
                    return l.createElement(b, {
                        size: 16
                    }, l.createElement("path", {
                        d: "M.5,16.5a1,1,0,0,0,1,1h2v4l4-4h15a1,1,0,0,0,1-1V3.5a1,1,0,0,0-1-1H1.5a1,1,0,0,0-1,1Z"
                    }), l.createElement("path", {
                        d: "M7.25,9.75A.25.25,0,1,1,7,10a.25.25,0,0,1,.25-.25"
                    }), l.createElement("path", {
                        d: "M12,9.75a.25.25,0,1,1-.25.25A.25.25,0,0,1,12,9.75"
                    }), l.createElement("path", {
                        d: "M16.75,9.75a.25.25,0,1,1-.25.25.25.25,0,0,1,.25-.25"
                    }))
                },
                eK = function() {
                    return l.createElement(b, {
                        size: 16
                    }, l.createElement("path", {
                        d: "M0.500 12.001 A11.500 11.500 0 1 0 23.500 12.001 A11.500 11.500 0 1 0 0.500 12.001 Z"
                    }), l.createElement("path", {
                        d: "M6.000 12.001 A6.000 6.000 0 1 0 18.000 12.001 A6.000 6.000 0 1 0 6.000 12.001 Z"
                    }), l.createElement("path", {
                        d: "M21.423 5.406L17.415 9.414"
                    }), l.createElement("path", {
                        d: "M14.587 6.585L18.607 2.565"
                    }), l.createElement("path", {
                        d: "M5.405 21.424L9.413 17.416"
                    }), l.createElement("path", {
                        d: "M6.585 14.588L2.577 18.596"
                    }), l.createElement("path", {
                        d: "M18.602 21.419L14.595 17.412"
                    }), l.createElement("path", {
                        d: "M17.419 14.58L21.428 18.589"
                    }), l.createElement("path", {
                        d: "M2.582 5.399L6.588 9.406"
                    }), l.createElement("path", {
                        d: "M9.421 6.581L5.412 2.572"
                    }))
                },
                eX = function() {
                    return l.createElement(b, {
                        size: 16
                    }, l.createElement("path", {
                        d: "M4.000 18.500 A1.500 1.500 0 1 0 7.000 18.500 A1.500 1.500 0 1 0 4.000 18.500 Z"
                    }), l.createElement("path", {
                        d: "M20.5.5l-9.782,9.783a7,7,0,1,0,3,3L17,10h1.5V8.5L19,8h1.5V6.5L21,6h1.5V4.5l1-1V.5Z"
                    }))
                },
                eQ = function() {
                    return l.createElement(b, {
                        size: 16
                    }, l.createElement("path", {
                        d: "M2.000 2.500 L22.000 2.500 L22.000 23.500 L2.000 23.500 Z"
                    }), l.createElement("path", {
                        d: "M6 4.5L6 0.5"
                    }), l.createElement("path", {
                        d: "M18 4.5L18 0.5"
                    }), l.createElement("path", {
                        d: "M10 4.5L10 0.5"
                    }), l.createElement("path", {
                        d: "M14 4.5L14 0.5"
                    }))
                },
                e$ = function() {
                    return l.createElement(b, {
                        size: 16
                    }, l.createElement("path", {
                        d: "M17.5 0.498L17.5 23.498"
                    }), l.createElement("path", {
                        d: "M10.5 0.498L10.5 23.498"
                    }), l.createElement("path", {
                        d: "M23.5.5H6.5a6,6,0,0,0,0,12h4"
                    }))
                },
                e0 = function() {
                    return l.createElement(b, {
                        size: 16
                    }, l.createElement("path", {
                        d: "M2.5 22.995L12 6.005 21.5 22.995 2.5 22.995z"
                    }))
                },
                e1 = function(e) {
                    var n = e.annotation,
                        r = e.childAnnotation,
                        o = e.page,
                        a = e.viewport,
                        i = !1 === n.hasPopup,
                        c = ex(n),
                        u = eS(n),
                        s = !!(n.hasPopup || c || u),
                        d = n.name ? n.name.toLowerCase() : "";
                    return l.createElement(eC, {
                        annotation: n,
                        hasPopup: i,
                        ignoreBorder: !1,
                        isRenderable: s,
                        page: o,
                        viewport: a
                    }, function(e) {
                        return l.createElement(l.Fragment, null, l.createElement("div", f({}, e.slot.attrs, {
                            className: "rpv-core__annotation rpv-core__annotation--text",
                            "data-annotation-id": n.id,
                            onClick: e.popup.toggleOnClick,
                            onMouseEnter: e.popup.openOnHover,
                            onMouseLeave: e.popup.closeOnHover
                        }), d && l.createElement("div", {
                            className: "rpv-core__annotation-text-icon"
                        }, "check" === d && l.createElement(y, null), "comment" === d && l.createElement(eY, null), "help" === d && l.createElement(eK, null), "insert" === d && l.createElement(e0, null), "key" === d && l.createElement(eX, null), "note" === d && l.createElement(eQ, null), ("newparagraph" === d || "paragraph" === d) && l.createElement(e$, null)), e.slot.children), r && r.annotationType === t.AnnotationType.Popup && e.popup.opened && l.createElement(eF, {
                            annotation: r,
                            page: o,
                            viewport: a
                        }))
                    })
                },
                e2 = function(e) {
                    var t = e.annotation,
                        n = e.page,
                        r = e.viewport,
                        o = !1 === t.hasPopup,
                        a = ex(t),
                        i = eS(t),
                        c = !!(t.hasPopup || a || i);
                    return l.createElement(eC, {
                        annotation: t,
                        hasPopup: o,
                        ignoreBorder: !0,
                        isRenderable: c,
                        page: n,
                        viewport: r
                    }, function(e) {
                        return l.createElement("div", f({}, e.slot.attrs, {
                            className: "rpv-core__annotation rpv-core__annotation--underline",
                            "data-annotation-id": t.id,
                            onClick: e.popup.toggleOnClick,
                            onMouseEnter: e.popup.openOnHover,
                            onMouseLeave: e.popup.closeOnHover
                        }), e.slot.children)
                    })
                },
                e5 = function(e) {
                    var n = e.annotations,
                        r = e.doc,
                        o = e.outlines,
                        a = e.page,
                        i = e.pageIndex,
                        c = e.plugins,
                        u = e.rotation,
                        s = e.scale,
                        d = e.onExecuteNamedAction,
                        p = e.onJumpFromLinkAnnotation,
                        f = e.onJumpToDest,
                        g = l.useRef(),
                        h = a.getViewport({
                            rotation: u,
                            scale: s
                        }).clone({
                            dontFlip: !0
                        }),
                        v = n.filter(function(e) {
                            return !e.parentId
                        });
                    return m(function() {
                        var e = g.current;
                        e && c.forEach(function(t) {
                            t.onAnnotationLayerRender && t.onAnnotationLayerRender({
                                annotations: v,
                                container: e,
                                pageIndex: i,
                                rotation: u,
                                scale: s
                            })
                        })
                    }, []), l.createElement("div", {
                        ref: g,
                        className: "rpv-core__annotation-layer",
                        "data-testid": "core__annotation-layer-".concat(i)
                    }, v.map(function(e) {
                        var c = n.find(function(t) {
                            return t.parentId === e.id
                        });
                        switch (e.annotationType) {
                            case t.AnnotationType.Caret:
                                return l.createElement(ek, {
                                    key: e.id,
                                    annotation: e,
                                    page: a,
                                    viewport: h
                                });
                            case t.AnnotationType.Circle:
                                return l.createElement(eT, {
                                    key: e.id,
                                    annotation: e,
                                    page: a,
                                    viewport: h
                                });
                            case t.AnnotationType.FileAttachment:
                                return l.createElement(eL, {
                                    key: e.id,
                                    annotation: e,
                                    page: a,
                                    viewport: h
                                });
                            case t.AnnotationType.FreeText:
                                return l.createElement(eO, {
                                    key: e.id,
                                    annotation: e,
                                    page: a,
                                    viewport: h
                                });
                            case t.AnnotationType.Highlight:
                                return l.createElement(eI, {
                                    key: e.id,
                                    annotation: e,
                                    childAnnotation: c,
                                    page: a,
                                    viewport: h
                                });
                            case t.AnnotationType.Ink:
                                return l.createElement(eD, {
                                    key: e.id,
                                    annotation: e,
                                    page: a,
                                    viewport: h
                                });
                            case t.AnnotationType.Line:
                                return l.createElement(eA, {
                                    key: e.id,
                                    annotation: e,
                                    page: a,
                                    viewport: h
                                });
                            case t.AnnotationType.Link:
                                return l.createElement(ej, {
                                    key: e.id,
                                    annotation: e,
                                    annotationContainerRef: g,
                                    doc: r,
                                    outlines: o,
                                    page: a,
                                    pageIndex: i,
                                    scale: s,
                                    viewport: h,
                                    onExecuteNamedAction: d,
                                    onJumpFromLinkAnnotation: p,
                                    onJumpToDest: f
                                });
                            case t.AnnotationType.Polygon:
                                return l.createElement(eW, {
                                    key: e.id,
                                    annotation: e,
                                    page: a,
                                    viewport: h
                                });
                            case t.AnnotationType.Polyline:
                                return l.createElement(eq, {
                                    key: e.id,
                                    annotation: e,
                                    page: a,
                                    viewport: h
                                });
                            case t.AnnotationType.Popup:
                                return l.createElement(eF, {
                                    key: e.id,
                                    annotation: e,
                                    page: a,
                                    viewport: h
                                });
                            case t.AnnotationType.Square:
                                return l.createElement(eU, {
                                    key: e.id,
                                    annotation: e,
                                    page: a,
                                    viewport: h
                                });
                            case t.AnnotationType.Squiggly:
                                return l.createElement(eZ, {
                                    key: e.id,
                                    annotation: e,
                                    page: a,
                                    viewport: h
                                });
                            case t.AnnotationType.Stamp:
                                return l.createElement(eJ, {
                                    key: e.id,
                                    annotation: e,
                                    page: a,
                                    viewport: h
                                });
                            case t.AnnotationType.StrikeOut:
                                return l.createElement(eG, {
                                    key: e.id,
                                    annotation: e,
                                    page: a,
                                    viewport: h
                                });
                            case t.AnnotationType.Text:
                                return l.createElement(e1, {
                                    key: e.id,
                                    annotation: e,
                                    childAnnotation: c,
                                    page: a,
                                    viewport: h
                                });
                            case t.AnnotationType.Underline:
                                return l.createElement(e2, {
                                    key: e.id,
                                    annotation: e,
                                    page: a,
                                    viewport: h
                                });
                            default:
                                return l.createElement(l.Fragment, {
                                    key: e.id
                                })
                        }
                    }))
                },
                e3 = function(e) {
                    var t = e.page,
                        n = e.renderAnnotations,
                        r = D(),
                        o = l.useState({
                            loading: !0,
                            annotations: []
                        }),
                        a = o[0],
                        i = o[1];
                    return l.useEffect(function() {
                        t.getAnnotations({
                            intent: "display"
                        }).then(function(e) {
                            r.current && i({
                                loading: !1,
                                annotations: e
                            })
                        })
                    }, []), a.loading ? l.createElement(l.Fragment, null) : n(a.annotations)
                },
                e4 = function(e) {
                    var t = e.doc,
                        n = e.outlines,
                        r = e.page,
                        o = e.pageIndex,
                        a = e.plugins,
                        i = e.rotation,
                        c = e.scale,
                        u = e.onExecuteNamedAction,
                        s = e.onJumpFromLinkAnnotation,
                        d = e.onJumpToDest;
                    return l.createElement(e3, {
                        page: r,
                        renderAnnotations: function(e) {
                            return l.createElement(e5, {
                                annotations: e,
                                doc: t,
                                outlines: n,
                                page: r,
                                pageIndex: o,
                                plugins: a,
                                rotation: i,
                                scale: c,
                                onExecuteNamedAction: u,
                                onJumpFromLinkAnnotation: s,
                                onJumpToDest: d
                            })
                        }
                    })
                },
                e9 = function(e, t) {
                    var n = e % t;
                    return 0 === n ? e : Math.floor(e - n)
                },
                e6 = function(e) {
                    var n = e.canvasLayerRef,
                        r = e.height,
                        o = e.page,
                        a = e.pageIndex,
                        i = e.plugins,
                        c = e.rotation,
                        u = e.scale,
                        s = e.width,
                        d = e.onRenderCanvasCompleted,
                        p = l.useRef();
                    return m(function() {
                        var e = p.current;
                        e && e.cancel();
                        var r = n.current;
                        r.removeAttribute("data-testid"), i.forEach(function(e) {
                            e.onCanvasLayerRender && e.onCanvasLayerRender({
                                ele: r,
                                pageIndex: a,
                                rotation: c,
                                scale: u,
                                status: t.LayerRenderStatus.PreRender
                            })
                        });
                        var l = o.getViewport({
                                rotation: c,
                                scale: u
                            }),
                            s = window.devicePixelRatio || 1,
                            f = Math.sqrt(16777216 / (l.width * l.height)),
                            g = s > f;
                        g ? r.style.transform = "scale(1, 1)" : r.style.removeProperty("transform");
                        var h = Math.min(f, s),
                            v = function(e, t) {
                                if (Math.floor(e) === e) return [e, 1];
                                var n, r, o = 1 / e;
                                if (o > 8) return [1, 8];
                                if (Math.floor(o) === o) return [1, o];
                                for (var a = e > 1 ? o : e, i = 0, c = 1, l = 1, u = 1;;) {
                                    var s = i + l,
                                        d = c + u;
                                    if (d > 8) break;
                                    a <= s / d ? (l = (n = [s, d])[0], u = n[1]) : (i = (r = [s, d])[0], c = r[1])
                                }
                                return a < (i / c + l / u) / 2 ? a === e ? [i, c] : [c, i] : a === e ? [l, u] : [u, l]
                            }(h, 8),
                            m = v[0],
                            w = v[1];
                        r.width = e9(l.width * h, m), r.height = e9(l.height * h, m), r.style.width = "".concat(e9(l.width, w), "px"), r.style.height = "".concat(e9(l.height, w), "px"), r.hidden = !0;
                        var b = r.getContext("2d", {
                                alpha: !1
                            }),
                            y = g || 1 !== s ? [h, 0, 0, h, 0, 0] : null;
                        return p.current = o.render({
                                canvasContext: b,
                                transform: y,
                                viewport: l
                            }), p.current.promise.then(function() {
                                r.hidden = !1, r.setAttribute("data-testid", "core__canvas-layer-".concat(a)), i.forEach(function(e) {
                                    e.onCanvasLayerRender && e.onCanvasLayerRender({
                                        ele: r,
                                        pageIndex: a,
                                        rotation: c,
                                        scale: u,
                                        status: t.LayerRenderStatus.DidRender
                                    })
                                }), d()
                            }, function() {
                                d()
                            }),
                            function() {
                                r && (r.width = 0, r.height = 0)
                            }
                    }, []), l.createElement("div", {
                        className: "rpv-core__canvas-layer",
                        style: {
                            height: "".concat(r, "px"),
                            width: "".concat(s, "px")
                        }
                    }, l.createElement("canvas", {
                        ref: n
                    }))
                },
                e8 = function(e) {
                    var t = e.height,
                        n = e.page,
                        r = e.rotation,
                        o = e.scale,
                        a = e.width,
                        i = l.useRef();
                    return m(function() {
                        var e = i.current,
                            c = n.getViewport({
                                rotation: r,
                                scale: o
                            });
                        n.getOperatorList().then(function(r) {
                            var o;
                            (o = i.current) && (o.innerHTML = ""), new u.SVGGraphics(n.commonObjs, n.objs).getSVG(r, c).then(function(n) {
                                n.style.height = "".concat(t, "px"), n.style.width = "".concat(a, "px"), e.appendChild(n)
                            })
                        })
                    }, []), l.createElement("div", {
                        className: "rpv-core__svg-layer",
                        ref: i
                    })
                },
                e7 = function(e) {
                    var n = e.containerRef,
                        r = e.page,
                        o = e.pageIndex,
                        a = e.plugins,
                        i = e.rotation,
                        c = e.scale,
                        s = e.onRenderTextCompleted,
                        d = l.useRef(),
                        p = function() {
                            var e = n.current;
                            e && ([].slice.call(e.querySelectorAll(".rpv-core__text-layer-text")).forEach(function(t) {
                                return e.removeChild(t)
                            }), [].slice.call(e.querySelectorAll('br[role="presentation"]')).forEach(function(t) {
                                return e.removeChild(t)
                            }))
                        };
                    return m(function() {
                        var e = d.current;
                        e && e.cancel();
                        var l = n.current;
                        if (l) {
                            l.removeAttribute("data-testid");
                            var f = r.getViewport({
                                rotation: i,
                                scale: c
                            });
                            return a.forEach(function(e) {
                                    e.onTextLayerRender && e.onTextLayerRender({
                                        ele: l,
                                        pageIndex: o,
                                        scale: c,
                                        status: t.LayerRenderStatus.PreRender
                                    })
                                }), r.getTextContent().then(function(e) {
                                    p(), d.current = u.renderTextLayer({
                                        container: l,
                                        textContent: e,
                                        textContentSource: e,
                                        viewport: f
                                    }), d.current.promise.then(function() {
                                        l.setAttribute("data-testid", "core__text-layer-".concat(o)), [].slice.call(l.children).forEach(function(e) {
                                            e.classList.contains("rpv-core__text-layer-text--not") || e.classList.add("rpv-core__text-layer-text")
                                        }), a.forEach(function(e) {
                                            e.onTextLayerRender && e.onTextLayerRender({
                                                ele: l,
                                                pageIndex: o,
                                                scale: c,
                                                status: t.LayerRenderStatus.DidRender
                                            })
                                        }), s()
                                    }, function() {
                                        l.removeAttribute("data-testid"), s()
                                    })
                                }),
                                function() {
                                    var e;
                                    p(), null === (e = d.current) || void 0 === e || e.cancel()
                                }
                        }
                    }, []), l.createElement("div", {
                        className: "rpv-core__text-layer",
                        ref: n
                    })
                },
                te = function(e) {
                    var n = e.doc,
                        r = e.measureRef,
                        o = e.outlines,
                        a = e.pageIndex,
                        i = e.pageRotation,
                        c = e.pageSize,
                        u = e.plugins,
                        s = e.renderPage,
                        d = e.renderQueueKey,
                        p = e.rotation,
                        f = e.scale,
                        g = e.shouldRender,
                        h = e.viewMode,
                        m = e.onExecuteNamedAction,
                        w = e.onJumpFromLinkAnnotation,
                        b = e.onJumpToDest,
                        y = e.onRenderCompleted,
                        E = e.onRotatePage,
                        S = D(),
                        x = l.useState(null),
                        P = x[0],
                        R = x[1],
                        M = l.useState(!1),
                        C = M[0],
                        k = M[1],
                        T = l.useState(!1),
                        L = T[0],
                        O = T[1],
                        F = l.useRef(),
                        I = l.useRef(),
                        A = Math.abs(p + i) % 180 == 0,
                        N = c.pageWidth * f,
                        H = c.pageHeight * f,
                        V = A ? N : H,
                        z = A ? H : N,
                        B = (c.rotation + p + i) % 360,
                        j = l.useRef(0);
                    return l.useEffect(function() {
                        R(null), k(!1), O(!1)
                    }, [i, p, f]), l.useEffect(function() {
                        g && S.current && !P && em(n, a).then(function(e) {
                            S.current && (j.current = d, R(e))
                        })
                    }, [g, P]), l.useEffect(function() {
                        C && L && (d !== j.current ? (R(null), k(!1), O(!1)) : y(a))
                    }, [C, L]), l.createElement("div", {
                        className: v({
                            "rpv-core__page-layer": !0,
                            "rpv-core__page-layer--dual": h === t.ViewMode.DualPage,
                            "rpv-core__page-layer--dual-cover": h === t.ViewMode.DualPageWithCover,
                            "rpv-core__page-layer--single": h === t.ViewMode.SinglePage
                        }),
                        "data-testid": "core__page-layer-".concat(a),
                        ref: r,
                        style: {
                            height: "".concat(z, "px"),
                            width: "".concat(V, "px")
                        }
                    }, P ? l.createElement(l.Fragment, null, (s || function(e) {
                        return l.createElement(l.Fragment, null, e.canvasLayer.children, e.textLayer.children, e.annotationLayer.children)
                    })({
                        annotationLayer: {
                            attrs: {},
                            children: l.createElement(e4, {
                                doc: n,
                                outlines: o,
                                page: P,
                                pageIndex: a,
                                plugins: u,
                                rotation: B,
                                scale: f,
                                onExecuteNamedAction: m,
                                onJumpFromLinkAnnotation: w,
                                onJumpToDest: b
                            })
                        },
                        canvasLayer: {
                            attrs: {},
                            children: l.createElement(e6, {
                                canvasLayerRef: F,
                                height: z,
                                page: P,
                                pageIndex: a,
                                plugins: u,
                                rotation: B,
                                scale: f,
                                width: V,
                                onRenderCanvasCompleted: function() {
                                    S.current && k(!0)
                                }
                            })
                        },
                        canvasLayerRendered: C,
                        doc: n,
                        height: z,
                        pageIndex: a,
                        rotation: B,
                        scale: f,
                        svgLayer: {
                            attrs: {},
                            children: l.createElement(e8, {
                                height: z,
                                page: P,
                                rotation: B,
                                scale: f,
                                width: V
                            })
                        },
                        textLayer: {
                            attrs: {},
                            children: l.createElement(e7, {
                                containerRef: I,
                                page: P,
                                pageIndex: a,
                                plugins: u,
                                rotation: B,
                                scale: f,
                                onRenderTextCompleted: function() {
                                    S.current && O(!0)
                                }
                            })
                        },
                        textLayerRendered: L,
                        width: V,
                        markRendered: y,
                        onRotatePage: function(e) {
                            return E(a, e)
                        }
                    }), u.map(function(e, t) {
                        return e.renderPageLayer ? l.createElement(l.Fragment, {
                            key: t
                        }, e.renderPageLayer({
                            canvasLayerRef: F,
                            canvasLayerRendered: C,
                            doc: n,
                            height: z,
                            pageIndex: a,
                            rotation: B,
                            scale: f,
                            textLayerRef: I,
                            textLayerRendered: L,
                            width: V
                        })) : l.createElement(l.Fragment, {
                            key: t
                        })
                    })) : l.createElement(_, {
                        testId: "core__page-layer-loading-".concat(a)
                    }))
                },
                tt = function(e, t) {
                    var n = t.rect;
                    return e.height !== n.height || e.width !== n.width ? n : e
                };
            (r = eM || (eM = {})).Horizontal = "Horizontal", r.Vertical = "Vertical", r.Both = "Both";
            var tn = function(e) {
                    return 1 - Math.pow(1 - e, 4)
                },
                tr = {
                    left: 0,
                    top: 0
                },
                to = {
                    capture: !1,
                    passive: !0
                },
                ta = function(e) {
                    var t = e.elementRef,
                        n = e.enableSmoothScroll,
                        r = e.isRtl,
                        o = e.scrollDirection,
                        a = e.onSmoothScroll,
                        i = l.useState(tr),
                        c = i[0],
                        u = i[1],
                        s = l.useState(t.current),
                        d = s[0],
                        p = s[1],
                        f = r ? -1 : 1,
                        g = l.useRef(o);
                    g.current = o;
                    var h = l.useRef(tr),
                        v = l.useRef(!0),
                        w = l.useCallback(function() {
                            v.current = !0, n && u(h.current), a(!1)
                        }, []),
                        b = l.useCallback(function() {
                            if (d) {
                                switch (g.current) {
                                    case eM.Horizontal:
                                        h.current = {
                                            left: f * d.scrollLeft,
                                            top: 0
                                        };
                                        break;
                                    case eM.Both:
                                        h.current = {
                                            left: f * d.scrollLeft,
                                            top: d.scrollTop
                                        };
                                        break;
                                    case eM.Vertical:
                                    default:
                                        h.current = {
                                            left: 0,
                                            top: d.scrollTop
                                        }
                                }
                                n && !v.current || u(h.current)
                            }
                        }, [d]);
                    return m(function() {
                        p(t.current)
                    }), m(function() {
                        if (d) return d.addEventListener("scroll", b, to),
                            function() {
                                d.removeEventListener("scroll", b, to)
                            }
                    }, [d]), {
                        scrollOffset: c,
                        scrollTo: l.useCallback(function(e, n) {
                            var r = t.current;
                            if (!r) return Promise.resolve();
                            var o = {
                                left: 0,
                                top: 0
                            };
                            switch (g.current) {
                                case eM.Horizontal:
                                    o.left = f * e.left;
                                    break;
                                case eM.Both:
                                    o.left = f * e.left, o.top = e.top;
                                    break;
                                case eM.Vertical:
                                default:
                                    o.top = e.top
                            }
                            return n ? (v.current = !1, a(!0), new Promise(function(e, t) {
                                ! function(e, t, n, r, o, a) {
                                    void 0 === o && (o = function(e) {
                                        return e
                                    }), void 0 === a && (a = function() {});
                                    var i = 0,
                                        c = 0,
                                        l = !1;
                                    switch (t) {
                                        case eM.Horizontal:
                                            c = e.scrollLeft, i = 0;
                                        case eM.Both:
                                            c = e.scrollLeft, i = e.scrollTop;
                                            break;
                                        case eM.Vertical:
                                        default:
                                            c = 0, i = e.scrollTop
                                    }
                                    var u = function() {
                                        l || (l = !0, e.scrollLeft = n.left, e.scrollTop = n.top, a())
                                    };
                                    if (1e-4 >= Math.abs(i - n.top) && t === eM.Vertical) u();
                                    else if (1e-4 >= Math.abs(c - n.left) && t === eM.Horizontal) u();
                                    else {
                                        var s, d = -1,
                                            p = c - n.left,
                                            f = i - n.top,
                                            g = function(r) {
                                                -1 === d && (d = r);
                                                var a = r - d,
                                                    h = o(Math.min(a / 400, 1)),
                                                    v = {
                                                        left: c - p * h,
                                                        top: i - f * h
                                                    };
                                                switch (t) {
                                                    case eM.Horizontal:
                                                        e.scrollLeft = v.left;
                                                        break;
                                                    case eM.Both:
                                                        e.scrollLeft = v.left, e.scrollTop = v.top;
                                                        break;
                                                    case eM.Vertical:
                                                    default:
                                                        e.scrollTop = v.top
                                                }
                                                1e-4 >= Math.abs(v.top - n.top) && 1e-4 >= Math.abs(v.left - n.left) && !l && (window.cancelAnimationFrame(s), u()), a < 400 ? s = window.requestAnimationFrame(g) : window.cancelAnimationFrame(s)
                                            };
                                        s = window.requestAnimationFrame(g)
                                    }
                                }(r, g.current, o, 0, tn, function() {
                                    w(), e()
                                })
                            })) : new Promise(function(e, t) {
                                switch (g.current) {
                                    case eM.Horizontal:
                                        r.scrollLeft = o.left;
                                        break;
                                    case eM.Both:
                                        r.scrollLeft = o.left, r.scrollTop = o.top;
                                        break;
                                    case eM.Vertical:
                                    default:
                                        r.scrollTop = o.top
                                }
                                e()
                            })
                        }, [t])
                    }
                },
                ti = function(e, t, n) {
                    return Math.max(e, Math.min(n, t))
                },
                tc = function(e, n) {
                    if (n !== t.ViewMode.DualPageWithCover) return 0;
                    if (! function(e) {
                            var t = e.length;
                            if (1 === t) return !1;
                            for (var n = 1; n < t; n++)
                                if (e[n].height !== e[0].height || e[n].width !== e[0].width) return !0;
                            return !1
                        }(e)) return 2 * e[0].width;
                    var r = ed(e.slice(1), 2).map(function(e) {
                            return 2 === e.length ? e[0].width + e[1].width : e[0].width
                        }),
                        o = [e[0].width].concat(r);
                    return Math.max.apply(Math, o)
                },
                tl = {
                    left: 0,
                    top: 0
                },
                tu = {
                    left: 0,
                    top: 0
                },
                ts = {
                    left: 0,
                    top: 0
                },
                td = {
                    left: 0,
                    top: 0
                },
                tp = {
                    height: 0,
                    width: 0
                },
                tf = {
                    left: 0,
                    top: 0
                },
                tg = "data-virtual-index",
                th = [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1],
                tv = function(e) {
                    var n, r, o, a, i, c, u, s = e.enableSmoothScroll,
                        d = e.isRtl,
                        p = e.numberOfItems,
                        g = e.parentRef,
                        h = e.setRenderRange,
                        v = e.sizes,
                        w = e.scrollMode,
                        b = e.viewMode,
                        y = l.useState(!1),
                        E = y[0],
                        _ = y[1],
                        S = l.useCallback(function(e) {
                            return _(e)
                        }, []),
                        x = l.useRef(w);
                    x.current = w;
                    var P = l.useRef(b);
                    P.current = b;
                    var R = w === t.ScrollMode.Wrapped || b === t.ViewMode.DualPageWithCover || b === t.ViewMode.DualPage ? eM.Both : w === t.ScrollMode.Horizontal ? eM.Horizontal : eM.Vertical,
                        M = ta({
                            elementRef: g,
                            enableSmoothScroll: s,
                            isRtl: d,
                            scrollDirection: R,
                            onSmoothScroll: S
                        }),
                        C = M.scrollOffset,
                        k = M.scrollTo,
                        T = (r = (n = l.useState(g.current))[0], o = n[1], a = l.useRef(!1), c = (i = l.useReducer(tt, {
                            height: 0,
                            width: 0
                        }))[0], u = i[1], m(function() {
                            g.current !== r && o(g.current)
                        }), m(function() {
                            if (r && !a.current) {
                                a.current = !0;
                                var e = r.getBoundingClientRect();
                                u({
                                    rect: {
                                        height: e.height,
                                        width: e.width
                                    }
                                })
                            }
                        }, [r]), l.useEffect(function() {
                            if (r) {
                                var e = new ResizeObserver(function(e, t) {
                                    e.forEach(function(e) {
                                        if (e.target === r) {
                                            var t = e.contentRect;
                                            u({
                                                rect: {
                                                    height: t.height,
                                                    width: t.width
                                                }
                                            })
                                        }
                                    })
                                });
                                return e.observe(r),
                                    function() {
                                        e.unobserve(r)
                                    }
                            }
                        }, [r]), c),
                        L = l.useRef({
                            scrollOffset: tf,
                            measurements: []
                        });
                    L.current.scrollOffset = C;
                    var O = l.useMemo(function() {
                            return Array(p).fill(-1)
                        }, []),
                        F = l.useState(O),
                        I = F[0],
                        D = F[1],
                        A = l.useMemo(function() {
                            return new IntersectionObserver(function(e) {
                                e.forEach(function(e) {
                                    var t = e.isIntersecting ? e.intersectionRatio : -1,
                                        n = e.target.getAttribute(tg);
                                    if (n) {
                                        var r = parseInt(n, 10);
                                        0 <= r && r < p && D(function(e) {
                                            return e[r] = t,
                                                function(e, t, n) {
                                                    if (n || 2 == arguments.length)
                                                        for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                                                    return e.concat(r || Array.prototype.slice.call(t))
                                                }([], e, !0)
                                        })
                                    }
                                })
                            }, {
                                threshold: th
                            })
                        }, []),
                        N = l.useMemo(function() {
                            return w === t.ScrollMode.Page && b === t.ViewMode.SinglePage ? function(e, t, n) {
                                for (var r = [], o = 0; o < e; o++) {
                                    var a = {
                                            height: Math.max(t.height, n[o].height),
                                            width: Math.max(t.width, n[o].width)
                                        },
                                        i = 0 === o ? td : r[o - 1].end,
                                        c = {
                                            left: i.left + a.width,
                                            top: i.top + a.height
                                        };
                                    r[o] = {
                                        index: o,
                                        start: i,
                                        size: a,
                                        end: c,
                                        visibility: -1
                                    }
                                }
                                return r
                            }(p, T, v) : b === t.ViewMode.DualPageWithCover ? function(e, n, r, o) {
                                for (var a = [], i = 0, c = 0, l = ts, u = 0; u < e; u++) {
                                    var s = 0 === u ? {
                                        height: o === t.ScrollMode.Page ? Math.max(n.height, r[u].height) : r[u].height,
                                        width: o === t.ScrollMode.Page ? Math.max(n.width, r[u].width) : r[u].width
                                    } : {
                                        height: o === t.ScrollMode.Page ? Math.max(n.height, r[u].height) : r[u].height,
                                        width: Math.max(n.width / 2, r[u].width)
                                    };
                                    o === t.ScrollMode.Page ? l = 0 === u ? ts : {
                                        left: u % 2 == 0 ? s.width : 0,
                                        top: Math.floor((u - 1) / 2) * s.height + a[0].end.top
                                    } : 0 === u ? (l = ts, i = r[0].height, c = 0) : u % 2 == 1 ? (l = {
                                        left: 0,
                                        top: i += c
                                    }, c = u === e - 1 ? r[u].height : Math.max(r[u].height, r[u + 1].height)) : l = {
                                        left: a[u - 1].end.left,
                                        top: i
                                    };
                                    var d = {
                                        left: l.left + s.width,
                                        top: l.top + s.height
                                    };
                                    a[u] = {
                                        index: u,
                                        start: l,
                                        size: s,
                                        end: d,
                                        visibility: -1
                                    }
                                }
                                return a
                            }(p, T, v, w) : b === t.ViewMode.DualPage ? function(e, n, r, o) {
                                for (var a = [], i = 0, c = 0, l = tu, u = 0; u < e; u++) {
                                    var s = {
                                        height: o === t.ScrollMode.Page ? Math.max(n.height, r[u].height) : r[u].height,
                                        width: Math.max(n.width / 2, r[u].width)
                                    };
                                    o === t.ScrollMode.Page ? l = {
                                        left: u % 2 == 0 ? 0 : s.width,
                                        top: Math.floor(u / 2) * s.height
                                    } : u % 2 == 0 ? (l = {
                                        left: 0,
                                        top: i += c
                                    }, c = u === e - 1 ? r[u].height : Math.max(r[u].height, r[u + 1].height)) : l = {
                                        left: a[u - 1].end.left,
                                        top: i
                                    };
                                    var d = {
                                        left: l.left + s.width,
                                        top: l.top + s.height
                                    };
                                    a[u] = {
                                        index: u,
                                        start: l,
                                        size: s,
                                        end: d,
                                        visibility: -1
                                    }
                                }
                                return a
                            }(p, T, v, w) : function(e, n, r, o) {
                                for (var a = [], i = 0, c = {
                                        left: 0,
                                        top: 0
                                    }, l = 0, u = tl, s = 0; s < e; s++) {
                                    var d = r[s];
                                    if (0 === s) i = d.width, c = {
                                        left: 0,
                                        top: 0
                                    }, l = d.height;
                                    else switch (o) {
                                        case t.ScrollMode.Wrapped:
                                            (i += d.width) < n.width ? (u = {
                                                left: a[s - 1].end.left,
                                                top: c.top
                                            }, l = Math.max(l, d.height)) : (i = d.width, c = {
                                                left: (u = {
                                                    left: c.left,
                                                    top: c.top + l
                                                }).left,
                                                top: u.top
                                            }, l = d.height);
                                            break;
                                        case t.ScrollMode.Horizontal:
                                        case t.ScrollMode.Vertical:
                                        default:
                                            u = a[s - 1].end
                                    }
                                    var p = {
                                        left: u.left + d.width,
                                        top: u.top + d.height
                                    };
                                    a[s] = {
                                        index: s,
                                        start: u,
                                        size: d,
                                        end: p,
                                        visibility: -1
                                    }
                                }
                                return a
                            }(p, T, v, w)
                        }, [w, v, b, T]),
                        H = N[p - 1] ? {
                            height: N[p - 1].end.top,
                            width: N[p - 1].end.left
                        } : tp;
                    L.current.measurements = N;
                    var V = l.useMemo(function() {
                            var e = function(e, t, n, r) {
                                    var o = 0;
                                    switch (e) {
                                        case eM.Horizontal:
                                            o = r.left;
                                            break;
                                        case eM.Vertical:
                                        default:
                                            o = r.top
                                    }
                                    var a = t.length - 1,
                                        i = function(e, t, n, r) {
                                            for (; e <= t;) {
                                                var o = (e + t) / 2 | 0,
                                                    a = r(o);
                                                if (a < n) e = o + 1;
                                                else {
                                                    if (!(a > n)) return o;
                                                    t = o - 1
                                                }
                                            }
                                            return e > 0 ? e - 1 : 0
                                        }(0, a, o, function(n) {
                                            switch (e) {
                                                case eM.Horizontal:
                                                    return t[n].start.left;
                                                case eM.Both:
                                                case eM.Vertical:
                                                default:
                                                    return t[n].start.top
                                            }
                                        });
                                    if (e === eM.Both)
                                        for (var c = t[i].start.top; i - 1 >= 0 && t[i - 1].start.top === c && t[i - 1].start.left >= r.left;) i--;
                                    for (var l = i; l <= a;) {
                                        var u = {
                                                top: t[l].start.top - r.top,
                                                left: t[l].start.left - r.left
                                            },
                                            s = {
                                                height: n.height - u.top,
                                                width: n.width - u.left
                                            };
                                        if (e === eM.Horizontal && s.width < 0 || e === eM.Vertical && s.height < 0 || e === eM.Both && (s.width < 0 || s.height < 0)) break;
                                        l++
                                    }
                                    return {
                                        start: i,
                                        end: l
                                    }
                                }(R, N, T, C),
                                n = e.start,
                                r = e.end,
                                o = I.slice(ti(0, p, n), ti(0, p, r)),
                                a = n + o.reduce(function(e, t, n, r) {
                                    return t > r[e] ? n : e
                                }, 0),
                                i = a = ti(0, p - 1, a),
                                c = h({
                                    endPage: r,
                                    numPages: p,
                                    startPage: n
                                }),
                                l = c.startPage,
                                u = c.endPage;
                            switch (l = Math.max(l, 0), u = Math.min(u, p - 1), b) {
                                case t.ViewMode.DualPageWithCover:
                                    a > 0 && (i = a % 2 == 1 ? a : a - 1), l = 0 === l ? 0 : l % 2 == 1 ? l : l - 1, p - (u = u % 2 == 1 ? u - 1 : u) <= 2 && (u = p - 1);
                                    break;
                                case t.ViewMode.DualPage:
                                    i = a % 2 == 0 ? a : a - 1, l = l % 2 == 0 ? l : l - 1, u = u % 2 == 1 ? u : u - 1;
                                    break;
                                case t.ViewMode.SinglePage:
                                default:
                                    i = a
                            }
                            return {
                                startPage: l,
                                endPage: u,
                                maxVisbilityIndex: i
                            }
                        }, [N, T, C, b, I]),
                        z = V.startPage,
                        B = V.endPage,
                        j = V.maxVisbilityIndex,
                        W = l.useMemo(function() {
                            for (var e = [], t = function(t) {
                                    var n = N[t],
                                        r = f(f({}, n), {
                                            visibility: void 0 !== I[t] ? I[t] : -1,
                                            measureRef: function(e) {
                                                e && (e.setAttribute(tg, "".concat(t)), A.observe(e))
                                            }
                                        });
                                    e.push(r)
                                }, n = z; n <= B; n++) t(n);
                            return e
                        }, [z, B, I, N]),
                        q = l.useCallback(function(e, n) {
                            var r = L.current.measurements[ti(0, p - 1, e)],
                                o = x.current === t.ScrollMode.Page ? tf : n;
                            return r ? k({
                                left: o.left + r.start.left,
                                top: o.top + r.start.top
                            }, s) : Promise.resolve()
                        }, [k, s]),
                        U = l.useCallback(function(e, n) {
                            var r = L.current.measurements,
                                o = r[e].start,
                                a = r.find(function(e) {
                                    return e.start.top - o.top > 1e-12
                                });
                            if (!a) return Promise.resolve();
                            var i = a.index;
                            switch (P.current) {
                                case t.ViewMode.DualPage:
                                    i = i % 2 == 0 ? i : i + 1;
                                    break;
                                case t.ViewMode.DualPageWithCover:
                                    i = i % 2 == 1 ? i : i + 1
                            }
                            return q(i, n)
                        }, []),
                        Z = l.useCallback(function(e, n) {
                            for (var r = L.current.measurements, o = r[e].start, a = e, i = !1, c = p - 1; c >= 0; c--)
                                if (o.top - r[c].start.top > 1e-12) {
                                    i = !0, a = r[c].index;
                                    break
                                } if (!i) return Promise.resolve();
                            switch (P.current) {
                                case t.ViewMode.DualPage:
                                    a = a % 2 == 0 ? a : a - 1;
                                    break;
                                case t.ViewMode.DualPageWithCover:
                                    a = a % 2 == 0 ? a - 1 : a
                            }
                            return a === e && (a = e - 1), q(a, n)
                        }, []),
                        J = l.useCallback(function(e, n) {
                            if (P.current === t.ViewMode.DualPageWithCover || P.current === t.ViewMode.DualPage) return U(e, n);
                            switch (x.current) {
                                case t.ScrollMode.Wrapped:
                                    return U(e, n);
                                case t.ScrollMode.Horizontal:
                                case t.ScrollMode.Vertical:
                                default:
                                    return q(e + 1, n)
                            }
                        }, []),
                        G = l.useCallback(function(e, n) {
                            if (P.current === t.ViewMode.DualPageWithCover || P.current === t.ViewMode.DualPage) return Z(e, n);
                            switch (x.current) {
                                case t.ScrollMode.Wrapped:
                                    return Z(e, n);
                                case t.ScrollMode.Horizontal:
                                case t.ScrollMode.Vertical:
                                default:
                                    return q(e - 1, n)
                            }
                        }, []),
                        Y = l.useCallback(function() {
                            return function(e, n) {
                                switch (n) {
                                    case t.ScrollMode.Horizontal:
                                        return {
                                            position: "relative", height: "100%", width: "".concat(e.width, "px")
                                        };
                                    case t.ScrollMode.Vertical:
                                    default:
                                        return {
                                            position: "relative", height: "".concat(e.height, "px"), width: "100%"
                                        }
                                }
                            }(H, x.current)
                        }, [H]),
                        K = l.useCallback(function(e) {
                            return x.current !== t.ScrollMode.Page ? {} : {
                                height: "".concat(T.height, "px"),
                                width: "100%",
                                position: "absolute",
                                top: 0,
                                transform: "translateY(".concat(e.start.top, "px)")
                            }
                        }, [T]),
                        X = l.useCallback(function(e) {
                            return function(e, n, r, o, a) {
                                var i, c, l, u, s, d, p, f = n ? "right" : "left",
                                    g = r.length,
                                    h = e.start.left * (n ? -1 : 1),
                                    v = e.size,
                                    m = v.height,
                                    w = v.width;
                                if (o === t.ViewMode.DualPageWithCover) {
                                    var b = a === t.ScrollMode.Page ? 0 : e.start.top;
                                    return 0 === e.index || g % 2 == 0 && e.index === g - 1 ? ((i = {
                                        height: "".concat(m, "px"),
                                        minWidth: "".concat(tc(r, o), "px"),
                                        width: "100%"
                                    })[f] = 0, i.position = "absolute", i.top = 0, i.transform = "translate(".concat(h, "px, ").concat(b, "px)"), i) : ((c = {
                                        height: "".concat(m, "px"),
                                        width: "".concat(w, "px")
                                    })[f] = 0, c.position = "absolute", c.top = 0, c.transform = "translate(".concat(h, "px, ").concat(b, "px)"), c)
                                }
                                if (o === t.ViewMode.DualPage) return (l = {
                                    height: "".concat(m, "px"),
                                    width: "".concat(w, "px")
                                })[f] = 0, l.position = "absolute", l.top = 0, l.transform = "translate(".concat(h, "px, ").concat(a === t.ScrollMode.Page ? 0 : e.start.top, "px)"), l;
                                switch (a) {
                                    case t.ScrollMode.Horizontal:
                                        return (u = {
                                            height: "100%",
                                            width: "".concat(w, "px")
                                        })[f] = 0, u.position = "absolute", u.top = 0, u.transform = "translateX(".concat(h, "px)"), u;
                                    case t.ScrollMode.Page:
                                        return (s = {
                                            height: "".concat(m, "px"),
                                            width: "".concat(w, "px")
                                        })[f] = 0, s.position = "absolute", s.top = 0, s;
                                    case t.ScrollMode.Wrapped:
                                        return (d = {
                                            height: "".concat(m, "px"),
                                            width: "".concat(w, "px")
                                        })[f] = 0, d.position = "absolute", d.top = 0, d.transform = "translate(".concat(h, "px, ").concat(e.start.top, "px)"), d;
                                    case t.ScrollMode.Vertical:
                                    default:
                                        return (p = {
                                            height: "".concat(m, "px"),
                                            width: "100%"
                                        })[f] = 0, p.position = "absolute", p.top = 0, p.transform = "translateY(".concat(e.start.top, "px)"), p
                                }
                            }(e, d, v, P.current, x.current)
                        }, [d, v]),
                        Q = l.useCallback(function(e, n) {
                            var r = L.current,
                                o = r.measurements,
                                a = r.scrollOffset,
                                i = o[ti(0, p - 1, n)];
                            return i ? k(x.current === t.ScrollMode.Page ? {
                                left: i.start.left,
                                top: i.start.top
                            } : {
                                left: a.left * e,
                                top: a.top * e
                            }, !1) : Promise.resolve()
                        }, []);
                    return l.useEffect(function() {
                        return function() {
                            A.disconnect()
                        }
                    }, []), {
                        boundingClientRect: T,
                        isSmoothScrolling: E,
                        startPage: z,
                        endPage: B,
                        maxVisbilityIndex: j,
                        virtualItems: W,
                        getContainerStyles: Y,
                        getItemContainerStyles: K,
                        getItemStyles: X,
                        scrollToItem: q,
                        scrollToNextItem: J,
                        scrollToPreviousItem: G,
                        zoom: Q
                    }
                },
                tm = function(e, n, r, o, a, i) {
                    var c = r;
                    switch (!0) {
                        case a === t.ViewMode.DualPageWithCover && i >= 3:
                        case a === t.ViewMode.DualPage && i >= 3:
                            c = 2 * r;
                            break;
                        default:
                            c = r
                    }
                    switch (o) {
                        case t.SpecialZoomLevel.ActualSize:
                            return 1;
                        case t.SpecialZoomLevel.PageFit:
                            return Math.min((e.clientWidth - 17) / c, (e.clientHeight - 16) / n);
                        case t.SpecialZoomLevel.PageWidth:
                            return (e.clientWidth - 17) / c
                    }
                },
                tw = function(e) {
                    var t, n, r = e.getCurrentPage,
                        o = (n = l.useRef([]), l.useEffect(function() {
                            return function() {
                                n.current = []
                            }
                        }, []), {
                            push: function(e) {
                                var t = n.current;
                                t.length + 1 > 50 && t.shift(), t.push(e), n.current = t
                            },
                            map: function(e) {
                                return n.current.map(function(t) {
                                    return e(t)
                                })
                            },
                            pop: function() {
                                var e = n.current;
                                if (0 === e.length) return null;
                                var t = e.pop();
                                return n.current = e, t
                            }
                        }),
                        a = (t = l.useRef([]), l.useEffect(function() {
                            return function() {
                                t.current = []
                            }
                        }, []), {
                            dequeue: function() {
                                var e = t.current;
                                if (0 === e.length) return null;
                                var n = e.shift();
                                return t.current = e, n || null
                            },
                            enqueue: function(e) {
                                var n = t.current;
                                n.length + 1 > 50 && n.pop(), t.current = [e].concat(n)
                            },
                            map: function(e) {
                                return t.current.map(function(t) {
                                    return e(t)
                                })
                            }
                        }),
                        i = function() {
                            var e = a.dequeue();
                            return e && o.push(e), e && e.pageIndex === r() ? i() : e
                        },
                        c = function() {
                            var e = o.pop();
                            return e && a.enqueue(e), e && e.pageIndex === r() ? c() : e
                        };
                    return {
                        getNextDestination: i,
                        getPreviousDestination: c,
                        markVisitedDestination: l.useCallback(function(e) {
                            o.push(e)
                        }, [])
                    }
                },
                tb = function(e) {
                    var t = [];
                    return e.map(function(e) {
                        var n;
                        t = t.concat(e).concat((n = [], e.items && e.items.length > 0 && (n = n.concat(tb(e.items))), n))
                    }), t
                },
                ty = {
                    capture: !1,
                    passive: !0
                },
                tE = {
                    height: 0,
                    width: 0
                },
                t_ = {
                    height: 0,
                    width: 0
                },
                tS = function(e) {
                    var n, r, o, a, i = e.getCurrentPage,
                        c = e.getCurrentScrollMode,
                        u = e.jumpToPage,
                        s = e.targetRef,
                        d = l.useState(t.FullScreenMode.Normal),
                        p = d[0],
                        f = d[1],
                        g = (r = (n = l.useState(tE))[0], o = n[1], a = I(function() {
                            o({
                                height: window.innerHeight,
                                width: window.innerWidth
                            })
                        }, 100), m(function() {
                            return window.addEventListener("resize", a, ty),
                                function() {
                                    window.removeEventListener("resize", a, ty)
                                }
                        }, []), r),
                        h = l.useState(t_),
                        v = h[0],
                        w = h[1],
                        b = l.useRef(t_),
                        y = l.useRef(i()),
                        E = l.useRef(t_),
                        _ = l.useState(s.current),
                        S = _[0],
                        x = _[1],
                        P = l.useRef();
                    m(function() {
                        s.current !== S && x(s.current)
                    }, []), m(function() {
                        if (S) {
                            var e = new ResizeObserver(function(e) {
                                e.forEach(function(e) {
                                    var t = e.target.getBoundingClientRect();
                                    w({
                                        height: t.height,
                                        width: t.width
                                    })
                                })
                            });
                            return e.observe(S),
                                function() {
                                    e.unobserve(S), e.disconnect()
                                }
                        }
                    }, [S]);
                    var R = l.useCallback(function(e) {
                            var n = F();
                            return n && n !== e ? (f(t.FullScreenMode.Normal), O(n)) : Promise.resolve()
                        }, []),
                        M = l.useCallback(function(e) {
                            e && L() && (x(e), R(e).then(function() {
                                P.current = e, f(t.FullScreenMode.Entering), k && e[T.RequestFullScreen]()
                            }))
                        }, []),
                        C = l.useCallback(function() {
                            F() && (f(t.FullScreenMode.Exitting), O(document))
                        }, []),
                        D = l.useCallback(function() {
                            S && F() !== S && f(t.FullScreenMode.Exitting)
                        }, [S]);
                    return l.useEffect(function() {
                        switch (p) {
                            case t.FullScreenMode.Entering:
                                P.current && (P.current.style.backgroundColor = "var(--rpv-core__full-screen-target-background-color)"), y.current = i(), b.current = {
                                    height: window.innerHeight,
                                    width: window.innerWidth
                                };
                                break;
                            case t.FullScreenMode.Entered:
                                c() === t.ScrollMode.Page ? u(y.current).then(function() {
                                    f(t.FullScreenMode.EnteredCompletely)
                                }) : f(t.FullScreenMode.EnteredCompletely);
                                break;
                            case t.FullScreenMode.Exitting:
                                P.current && (P.current.style.backgroundColor = "", P.current = null), y.current = i();
                                break;
                            case t.FullScreenMode.Exited:
                                f(t.FullScreenMode.Normal), c() === t.ScrollMode.Page && u(y.current)
                        }
                    }, [p]), l.useEffect(function() {
                        if (p !== t.FullScreenMode.Normal) return p === t.FullScreenMode.Entering && g.height === v.height && g.width === v.width && g.height > 0 && g.width > 0 && (0 === E.current.height || g.height == E.current.height) ? (E.current = {
                            height: window.innerHeight,
                            width: window.innerWidth
                        }, void f(t.FullScreenMode.Entered)) : void(p === t.FullScreenMode.Exitting && b.current.height === g.height && b.current.width === g.width && g.height > 0 && g.width > 0 && f(t.FullScreenMode.Exited))
                    }, [p, g, v]), l.useEffect(function() {
                        return k && document.addEventListener(T.FullScreenChange, D),
                            function() {
                                k && document.removeEventListener(T.FullScreenChange, D)
                            }
                    }, [S]), {
                        enterFullScreenMode: M,
                        exitFullScreenMode: C,
                        fullScreenMode: p
                    }
                },
                tx = {
                    buildPageStyles: function() {
                        return {}
                    },
                    transformSize: function(e) {
                        return e.size
                    }
                },
                tP = {
                    left: 0,
                    top: 0
                },
                tR = function(e) {
                    var n = e.currentFile,
                        r = e.defaultScale,
                        o = e.doc,
                        a = e.enableSmoothScroll,
                        i = e.initialPage,
                        c = e.initialRotation,
                        u = e.initialScale,
                        s = e.pageLayout,
                        d = e.pageSizes,
                        p = e.plugins,
                        g = e.renderPage,
                        w = e.scrollMode,
                        b = e.setRenderRange,
                        y = e.viewMode,
                        E = e.viewerState,
                        _ = e.onDocumentLoad,
                        S = e.onOpenFile,
                        x = e.onPageChange,
                        P = e.onRotate,
                        R = e.onRotatePage,
                        M = e.onZoom,
                        C = o.numPages,
                        k = o.loadingTask.docId,
                        T = l.useContext(B).l10n,
                        L = l.useContext(h),
                        O = L.direction === t.TextDirection.RightToLeft,
                        F = l.useRef(),
                        N = l.useRef(),
                        H = l.useState(i),
                        z = H[0],
                        j = H[1],
                        W = l.useRef(null),
                        q = tw({
                            getCurrentPage: function() {
                                return ew.current.pageIndex
                            }
                        }),
                        U = l.useState(c),
                        Z = U[0],
                        J = U[1],
                        G = A(Z),
                        Y = l.useState(!1),
                        K = Y[0],
                        X = Y[1],
                        Q = l.useState(new Map),
                        $ = Q[0],
                        ee = Q[1],
                        et = l.useState(w),
                        en = et[0],
                        er = et[1],
                        eo = A(en),
                        ea = l.useState(y),
                        ei = ea[0],
                        ec = ea[1],
                        el = A(ei),
                        eu = (e$ = D(), e1 = (e0 = l.useState([]))[0], e2 = e0[1], l.useEffect(function() {
                            o.getOutline().then(function(e) {
                                e$.current && null !== e && e2(tb(e))
                            })
                        }, []), e1),
                        es = l.useState(u),
                        ep = es[0],
                        eh = es[1],
                        ev = A(ep),
                        ew = l.useRef(E),
                        eb = l.useRef("string" == typeof r ? r : null),
                        ey = l.useRef(-1),
                        eE = l.useRef(-1),
                        e_ = l.useRef(i),
                        eS = tS({
                            getCurrentPage: function() {
                                return ew.current.pageIndex
                            },
                            getCurrentScrollMode: function() {
                                return ew.current.scrollMode
                            },
                            jumpToPage: function(e) {
                                return eW(e)
                            },
                            targetRef: N
                        }),
                        ex = l.useState(-1),
                        eP = ex[0],
                        eR = ex[1],
                        eM = l.useState(0),
                        eC = eM[0],
                        ek = eM[1],
                        eT = V({
                            doc: o
                        });
                    l.useEffect(function() {
                        return function() {
                            ef.clear(), eg.clear()
                        }
                    }, [k]);
                    var eL = l.useMemo(function() {
                            return Object.assign({}, tx, s)
                        }, []),
                        eO = l.useMemo(function() {
                            return Array(C).fill(0).map(function(e, t) {
                                var n = [d[t].pageHeight, d[t].pageWidth],
                                    r = Math.abs(Z) % 180 == 0 ? {
                                        height: n[0],
                                        width: n[1]
                                    } : {
                                        height: n[1],
                                        width: n[0]
                                    },
                                    o = {
                                        height: r.height * ep,
                                        width: r.width * ep
                                    };
                                return eL.transformSize({
                                    numPages: C,
                                    pageIndex: t,
                                    size: o
                                })
                            })
                        }, [Z, ep]),
                        eF = tv({
                            enableSmoothScroll: a,
                            isRtl: O,
                            numberOfItems: C,
                            parentRef: N,
                            scrollMode: en,
                            setRenderRange: b,
                            sizes: eO,
                            viewMode: ei
                        });
                    e3 = (e5 = {
                        targetRef: N,
                        onResize: I(function() {
                            !eb.current || ew.current.fullScreenMode !== t.FullScreenMode.Normal || i > 0 && e_.current === i || eK(eb.current)
                        }, 200)
                    }).targetRef, e4 = e5.onResize, m(function() {
                        var e = new ResizeObserver(function(e) {
                                e.forEach(function(e) {
                                    e4(e.target)
                                })
                            }),
                            t = e3.current;
                        if (t) return e.observe(t),
                            function() {
                                e.unobserve(t)
                            }
                    }, []);
                    var eI = function(e) {
                            var t = e;
                            p.forEach(function(e) {
                                e.onViewerStateChange && (t = e.onViewerStateChange(t))
                            }), ew.current = t
                        },
                        eD = function() {
                            return N.current
                        },
                        eA = function() {
                            return ew.current
                        },
                        eN = l.useCallback(function(e) {
                            q.markVisitedDestination(e)
                        }, []),
                        eH = l.useCallback(function(e) {
                            var n = e.pageIndex,
                                r = e.bottomOffset,
                                a = e.leftOffset,
                                i = e.scaleTo,
                                c = N.current,
                                l = ew.current;
                            return c && l ? new Promise(function(e, u) {
                                em(o, n).then(function(o) {
                                    var u = o.getViewport({
                                            scale: 1
                                        }),
                                        s = 0,
                                        p = ("function" == typeof r ? r(u.width, u.height) : r) || 0,
                                        f = ("function" == typeof a ? a(u.width, u.height) : a) || 0,
                                        g = l.scale;
                                    switch (i) {
                                        case t.SpecialZoomLevel.PageFit:
                                            s = 0, f = 0, eK(t.SpecialZoomLevel.PageFit);
                                            break;
                                        case t.SpecialZoomLevel.PageWidth:
                                            g = tm(c, d[n].pageHeight, d[n].pageWidth, t.SpecialZoomLevel.PageWidth, y, C), s = (u.height - p) * g, f *= g, eK(g);
                                            break;
                                        default:
                                            s = (u.height - p) * g, f *= g
                                    }
                                    switch (l.scrollMode) {
                                        case t.ScrollMode.Horizontal:
                                            eF.scrollToItem(n, {
                                                left: f,
                                                top: 0
                                            }).then(function() {
                                                e()
                                            });
                                            break;
                                        case t.ScrollMode.Vertical:
                                        default:
                                            eF.scrollToItem(n, {
                                                left: 0,
                                                top: s
                                            }).then(function() {
                                                e()
                                            })
                                    }
                                })
                            }) : Promise.resolve()
                        }, []),
                        eV = l.useCallback(function(e) {
                            return q.markVisitedDestination(e), eH(e)
                        }, []),
                        ez = l.useCallback(function() {
                            var e = q.getNextDestination();
                            return e ? eH(e) : Promise.resolve()
                        }, []),
                        eB = l.useCallback(function() {
                            var e = q.getPreviousDestination();
                            return e ? eH(e) : Promise.resolve()
                        }, []),
                        ej = l.useCallback(function() {
                            return eF.scrollToNextItem(ew.current.pageIndex, tP)
                        }, []),
                        eW = l.useCallback(function(e) {
                            return 0 <= e && e < C ? eF.scrollToItem(e, tP) : Promise.resolve()
                        }, []),
                        eq = l.useCallback(function() {
                            return eF.scrollToPreviousItem(ew.current.pageIndex, tP)
                        }, []),
                        eU = l.useCallback(function(e) {
                            var t;
                            "pdf" === ((t = e.name.split(/\./).pop()) ? t.toLowerCase() : "").toLowerCase() && new Promise(function(t) {
                                var n = new FileReader;
                                n.readAsArrayBuffer(e), n.onload = function() {
                                    t(new Uint8Array(n.result))
                                }
                            }).then(function(t) {
                                S(e.name, t)
                            })
                        }, [S]),
                        eZ = l.useCallback(function(e) {
                            var n = e === t.RotateDirection.Backward ? -90 : 90,
                                r = ew.current.rotation,
                                a = 360 === r || -360 === r ? n : r + n;
                            eT.markNotRendered(), J(a), eI(f(f({}, ew.current), {
                                rotation: a
                            })), P({
                                direction: e,
                                doc: o,
                                rotation: a
                            })
                        }, []),
                        eJ = l.useCallback(function(e, n) {
                            var r = n === t.RotateDirection.Backward ? -90 : 90,
                                a = ew.current.pagesRotation,
                                i = (a.has(e) ? a.get(e) : c) + r,
                                l = a.set(e, i);
                            ee(l), X(function(e) {
                                return !e
                            }), eI(f(f({}, ew.current), {
                                pagesRotation: l,
                                rotatedPage: e
                            })), R({
                                direction: n,
                                doc: o,
                                pageIndex: e,
                                rotation: i
                            }), eT.markRendering(e), eR(e)
                        }, []),
                        eG = l.useCallback(function(e) {
                            eI(f(f({}, ew.current), {
                                scrollMode: e
                            })), er(e)
                        }, []),
                        eY = l.useCallback(function(e) {
                            eI(f(f({}, ew.current), {
                                viewMode: e
                            })), ec(e)
                        }, []),
                        eK = l.useCallback(function(e) {
                            var t = N.current,
                                n = ew.current.pageIndex;
                            if (!(n < 0 || n >= C)) {
                                var r = d[n].pageHeight,
                                    a = d[n].pageWidth,
                                    i = t ? "string" == typeof e ? tm(t, r, a, e, ew.current.viewMode, C) : e : 1;
                                eb.current = "string" == typeof e ? e : null, i !== ew.current.scale && (ek(function(e) {
                                    return e + 1
                                }), eT.markNotRendered(), eh(i), M({
                                    doc: o,
                                    scale: i
                                }), eI(f(f({}, ew.current), {
                                    scale: i
                                })))
                            }
                        }, []),
                        eX = l.useCallback(function(e) {
                            eS.enterFullScreenMode(e)
                        }, []),
                        eQ = l.useCallback(function() {
                            eS.exitFullScreenMode()
                        }, []);
                    l.useEffect(function() {
                        eI(f(f({}, ew.current), {
                            fullScreenMode: eS.fullScreenMode
                        }))
                    }, [eS.fullScreenMode]), l.useEffect(function() {
                        var e = {
                            enterFullScreenMode: eX,
                            exitFullScreenMode: eQ,
                            getPagesContainer: eD,
                            getViewerState: eA,
                            jumpToDestination: eV,
                            jumpToNextDestination: ez,
                            jumpToPreviousDestination: eB,
                            jumpToNextPage: ej,
                            jumpToPreviousPage: eq,
                            jumpToPage: eW,
                            openFile: eU,
                            rotate: eZ,
                            rotatePage: eJ,
                            setViewerState: eI,
                            switchScrollMode: eG,
                            switchViewMode: eY,
                            zoom: eK
                        };
                        return p.forEach(function(t) {
                                t.install && t.install(e)
                            }),
                            function() {
                                p.forEach(function(t) {
                                    t.uninstall && t.uninstall(e)
                                })
                            }
                    }, [k]), l.useEffect(function() {
                        _({
                            doc: o,
                            file: n
                        }), p.forEach(function(e) {
                            e.onDocumentLoad && e.onDocumentLoad({
                                doc: o,
                                file: n
                            })
                        })
                    }, [k]);
                    var e$, e0, e1, e2, e5, e3, e4, e9, e6, e8, e7 = eF.boundingClientRect;
                    e9 = function() {
                        i && eW(i)
                    }, e6 = e7.height > 0 && e7.width > 0, e8 = l.useRef(!1), m(function() {
                        e6 && !e8.current && (e8.current = !0, e9())
                    }, [e9, e6]), m(function() {
                        var e = ew.current.pageIndex;
                        e > -1 && eo !== en && eF.scrollToItem(e, tP).then(function() {
                            eS.fullScreenMode === t.FullScreenMode.EnteredCompletely && (a || eT.markNotRendered(), ey.current = -1)
                        })
                    }, [en]), m(function() {
                        var e = ew.current.pageIndex;
                        e > -1 && G !== Z && eF.scrollToItem(e, tP)
                    }, [Z]), m(function() {
                        0 != ev && ev != ew.current.scale && eF.zoom(ew.current.scale / ev, ew.current.pageIndex).then(function() {
                            eS.fullScreenMode === t.FullScreenMode.EnteredCompletely && (eE.current = -1)
                        })
                    }, [ep]), m(function() {
                        if (el !== ew.current.viewMode) {
                            var e = eF.startPage,
                                t = eF.endPage,
                                n = eF.virtualItems;
                            eT.markNotRendered(), eT.setRange(e, t);
                            for (var r = function(e) {
                                    var t = n.find(function(t) {
                                        return t.index === e
                                    });
                                    t && eT.setVisibility(e, t.visibility)
                                }, o = e; o <= t; o++) r(o);
                            tn()
                        }
                    }, [ei]), m(function() {
                        var e = ew.current.pageIndex;
                        e > -1 && el !== ei && eF.scrollToItem(e, tP)
                    }, [ei]), m(function() {
                        var e = ew.current.pageIndex;
                        e > 0 && e === i && e_.current === i && eb.current && (e_.current = -1, eK(eb.current))
                    }, [z]), l.useEffect(function() {
                        eF.isSmoothScrolling || null !== W.current && W.current === z || (W.current = z, x({
                            currentPage: z,
                            doc: o
                        }))
                    }, [z, eF.isSmoothScrolling]), l.useEffect(function() {
                        eS.fullScreenMode === t.FullScreenMode.Entering && ew.current.scrollMode === t.ScrollMode.Page && (ey.current = ew.current.pageIndex), eS.fullScreenMode === t.FullScreenMode.EnteredCompletely && ew.current.scrollMode === t.ScrollMode.Page && a && (ey.current = -1), eS.fullScreenMode === t.FullScreenMode.EnteredCompletely && eb.current && (eE.current = ew.current.pageIndex, eK(eb.current))
                    }, [eS.fullScreenMode]), l.useEffect(function() {
                        if (eS.fullScreenMode !== t.FullScreenMode.Entering && eS.fullScreenMode !== t.FullScreenMode.Exitting && !eF.isSmoothScrolling) {
                            var e = eF.startPage,
                                n = eF.endPage,
                                r = eF.maxVisbilityIndex,
                                o = eF.virtualItems,
                                a = eS.fullScreenMode === t.FullScreenMode.Entered || eS.fullScreenMode === t.FullScreenMode.EnteredCompletely;
                            if (!(a && r !== ey.current && ey.current > -1 || a && r !== eE.current && eE.current > -1)) {
                                j(r), eI(f(f({}, ew.current), {
                                    pageIndex: r
                                })), eT.setRange(e, n);
                                for (var i = function(e) {
                                        var t = o.find(function(t) {
                                            return t.index === e
                                        });
                                        t && eT.setVisibility(e, t.visibility)
                                    }, c = e; c <= n; c++) i(c);
                                tn()
                            }
                        }
                    }, [eF.startPage, eF.endPage, eF.isSmoothScrolling, eF.maxVisbilityIndex, eS.fullScreenMode, K, Z, ep]);
                    var tt = l.useCallback(function(e) {
                            eT.markRendered(e), tn()
                        }, [eC]),
                        tn = function() {
                            var e = eT.getHighestPriorityPage();
                            e > -1 && eT.isInRange(e) && (eT.markRendering(e), eR(e))
                        },
                        tr = function(e) {
                            var t = z - 1,
                                n = z + 1;
                            switch (e) {
                                case "FirstPage":
                                    eW(0);
                                    break;
                                case "LastPage":
                                    eW(C - 1);
                                    break;
                                case "NextPage":
                                    n < C && eW(n);
                                    break;
                                case "PrevPage":
                                    t >= 0 && eW(t)
                            }
                        },
                        to = l.useCallback(function() {
                            var e = eF.virtualItems,
                                n = [];
                            switch (ei) {
                                case t.ViewMode.DualPage:
                                    n = ed(e, 2);
                                    break;
                                case t.ViewMode.DualPageWithCover:
                                    e.length && (n = 0 === e[0].index ? [
                                        [e[0]]
                                    ].concat(ed(e.slice(1), 2)) : ed(e, 2));
                                    break;
                                case t.ViewMode.SinglePage:
                                default:
                                    n = ed(e, 1)
                            }
                            var r = T && T.core ? T.core.pageLabel : "Page {{pageIndex}}",
                                a = {
                                    attrs: {
                                        className: "rpv-core__inner-container",
                                        "data-testid": "core__inner-container",
                                        ref: F,
                                        style: {
                                            height: "100%"
                                        }
                                    },
                                    children: l.createElement(l.Fragment, null),
                                    subSlot: {
                                        attrs: {
                                            "data-testid": "core__inner-pages",
                                            className: v({
                                                "rpv-core__inner-pages": !0,
                                                "rpv-core__inner-pages--horizontal": en === t.ScrollMode.Horizontal,
                                                "rpv-core__inner-pages--rtl": O,
                                                "rpv-core__inner-pages--single": en === t.ScrollMode.Page,
                                                "rpv-core__inner-pages--vertical": en === t.ScrollMode.Vertical,
                                                "rpv-core__inner-pages--wrapped": en === t.ScrollMode.Wrapped
                                            }),
                                            ref: N,
                                            style: {
                                                height: "100%",
                                                position: "relative"
                                            }
                                        },
                                        children: l.createElement("div", {
                                            "data-testid": "core__inner-current-page-".concat(z),
                                            style: Object.assign({
                                                "--scale-factor": ep
                                            }, eF.getContainerStyles())
                                        }, n.map(function(e) {
                                            return l.createElement("div", {
                                                className: v({
                                                    "rpv-core__inner-page-container": !0,
                                                    "rpv-core__inner-page-container--single": en === t.ScrollMode.Page
                                                }),
                                                style: eF.getItemContainerStyles(e[0]),
                                                key: "".concat(e[0].index, "-").concat(ei)
                                            }, e.map(function(e) {
                                                var n = ei === t.ViewMode.DualPageWithCover && (0 === e.index || C % 2 == 0 && e.index === C - 1);
                                                return l.createElement("div", {
                                                    "aria-label": r.replace("{{pageIndex}}", "".concat(e.index + 1)),
                                                    className: v({
                                                        "rpv-core__inner-page": !0,
                                                        "rpv-core__inner-page--dual-even": ei === t.ViewMode.DualPage && e.index % 2 == 0,
                                                        "rpv-core__inner-page--dual-odd": ei === t.ViewMode.DualPage && e.index % 2 == 1,
                                                        "rpv-core__inner-page--dual-cover": n,
                                                        "rpv-core__inner-page--dual-cover-even": ei === t.ViewMode.DualPageWithCover && !n && e.index % 2 == 0,
                                                        "rpv-core__inner-page--dual-cover-odd": ei === t.ViewMode.DualPageWithCover && !n && e.index % 2 == 1,
                                                        "rpv-core__inner-page--single": ei === t.ViewMode.SinglePage && en === t.ScrollMode.Page
                                                    }),
                                                    role: "region",
                                                    key: "".concat(e.index, "-").concat(ei),
                                                    style: Object.assign({}, eF.getItemStyles(e), eL.buildPageStyles({
                                                        numPages: C,
                                                        pageIndex: e.index,
                                                        scrollMode: en,
                                                        viewMode: ei
                                                    }))
                                                }, l.createElement(te, {
                                                    doc: o,
                                                    measureRef: e.measureRef,
                                                    outlines: eu,
                                                    pageIndex: e.index,
                                                    pageRotation: $.has(e.index) ? $.get(e.index) : 0,
                                                    pageSize: d[e.index],
                                                    plugins: p,
                                                    renderPage: g,
                                                    renderQueueKey: eC,
                                                    rotation: Z,
                                                    scale: ep,
                                                    shouldRender: eP === e.index,
                                                    viewMode: ei,
                                                    onExecuteNamedAction: tr,
                                                    onJumpFromLinkAnnotation: eN,
                                                    onJumpToDest: eV,
                                                    onRenderCompleted: tt,
                                                    onRotatePage: eJ
                                                }))
                                            }))
                                        }))
                                    }
                                };
                            return p.forEach(function(e) {
                                e.renderViewer && (a = e.renderViewer({
                                    containerRef: F,
                                    doc: o,
                                    pagesContainerRef: N,
                                    pagesRotation: $,
                                    pageSizes: d,
                                    rotation: Z,
                                    slot: a,
                                    themeContext: L,
                                    jumpToPage: eW,
                                    openFile: eU,
                                    rotate: eZ,
                                    rotatePage: eJ,
                                    switchScrollMode: eG,
                                    switchViewMode: eY,
                                    zoom: eK
                                }))
                            }), a
                        }, [p, eF]),
                        ta = l.useCallback(function(e) {
                            return l.createElement("div", f({}, e.attrs, {
                                style: e.attrs && e.attrs.style ? e.attrs.style : {}
                            }), e.children, e.subSlot && ta(e.subSlot))
                        }, []);
                    return ta(to())
                },
                tM = [.1, .2, .3, .4, .5, .6, .7, .8, .9, 1, 1.1, 1.3, 1.5, 1.7, 1.9, 2.1, 2.4, 2.7, 3, 3.3, 3.7, 4.1, 4.6, 5.1, 5.7, 6.3, 7, 7.7, 8.5, 9.4, 10],
                tC = function(e) {
                    var n = e.defaultScale,
                        r = e.doc,
                        o = e.render,
                        a = e.scrollMode,
                        i = e.viewMode,
                        c = l.useRef(),
                        u = l.useState({
                            pageSizes: [],
                            scale: 0
                        }),
                        s = u[0],
                        d = u[1];
                    return l.useLayoutEffect(function() {
                        Promise.all(Array(r.numPages).fill(0).map(function(e, t) {
                            return new Promise(function(e, n) {
                                em(r, t).then(function(t) {
                                    var n = t.getViewport({
                                        scale: 1
                                    });
                                    e({
                                        pageHeight: n.height,
                                        pageWidth: n.width,
                                        rotation: n.rotation
                                    })
                                })
                            })
                        })).then(function(e) {
                            var o = c.current;
                            if (o && 0 !== e.length) {
                                var l, u, s = e[0].pageWidth,
                                    p = e[0].pageHeight,
                                    f = o.parentElement,
                                    g = (f.clientWidth - 45) / s,
                                    h = (f.clientHeight - 45) / p,
                                    v = g;
                                switch (a) {
                                    case t.ScrollMode.Horizontal:
                                        v = Math.min(g, h);
                                        break;
                                    case t.ScrollMode.Vertical:
                                    default:
                                        v = g
                                }
                                d({
                                    pageSizes: e,
                                    scale: n ? "string" == typeof n ? tm(f, p, s, n, i, r.numPages) : n : (l = v, -1 === (u = tM.findIndex(function(e) {
                                        return e >= l
                                    })) || 0 === u ? l : tM[u - 1])
                                })
                            }
                        })
                    }, [r.loadingTask.docId]), 0 === s.pageSizes.length || 0 === s.scale ? l.createElement("div", {
                        className: "rpv-core__page-size-calculator",
                        "data-testid": "core__page-size-calculating",
                        ref: c
                    }, l.createElement(_, null)) : o(s.pageSizes, s.scale)
                },
                tk = function() {},
                tT = function(e) {
                    function t(t, n) {
                        var r = e.call(this) || this;
                        return r.verifyPassword = t, r.passwordStatus = n, r
                    }
                    return d(t, e), t
                }(tk),
                tL = function(e) {
                    var n = e.passwordStatus,
                        r = e.renderProtectedView,
                        o = e.verifyPassword,
                        a = e.onDocumentAskPassword,
                        i = l.useContext(B).l10n,
                        c = l.useState(""),
                        u = c[0],
                        s = c[1],
                        d = l.useContext(h).direction === t.TextDirection.RightToLeft,
                        p = function() {
                            return o(u)
                        };
                    return l.useEffect(function() {
                        a && a({
                            verifyPassword: o
                        })
                    }, []), r ? r({
                        passwordStatus: n,
                        verifyPassword: o
                    }) : l.createElement("div", {
                        className: "rpv-core__asking-password-wrapper"
                    }, l.createElement("div", {
                        className: v({
                            "rpv-core__asking-password": !0,
                            "rpv-core__asking-password--rtl": d
                        })
                    }, l.createElement("div", {
                        className: "rpv-core__asking-password-message"
                    }, n === t.PasswordStatus.RequiredPassword && i.core.askingPassword.requirePasswordToOpen, n === t.PasswordStatus.WrongPassword && i.core.wrongPassword.tryAgain), l.createElement("div", {
                        className: "rpv-core__asking-password-body"
                    }, l.createElement("div", {
                        className: v({
                            "rpv-core__asking-password-input": !0,
                            "rpv-core__asking-password-input--ltr": !d,
                            "rpv-core__asking-password-input--rtl": d
                        })
                    }, l.createElement(S, {
                        testId: "core__asking-password-input",
                        type: "password",
                        value: u,
                        onChange: s,
                        onKeyDown: function(e) {
                            "Enter" === e.key && p()
                        }
                    })), l.createElement(E, {
                        onClick: p
                    }, i.core.askingPassword.submit))))
                },
                tO = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.doc = t, n
                    }
                    return d(t, e), t
                }(tk),
                tF = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.error = t, n
                    }
                    return d(t, e), t
                }(tk),
                tI = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.percentages = t, n
                    }
                    return d(t, e), t
                }(tk),
                tD = function(e) {
                    var n = e.characterMap,
                        r = e.file,
                        o = e.httpHeaders,
                        a = e.render,
                        i = e.renderError,
                        c = e.renderLoader,
                        s = e.renderProtectedView,
                        d = e.transformGetDocumentParams,
                        p = e.withCredentials,
                        f = e.onDocumentAskPassword,
                        g = l.useContext(h).direction === t.TextDirection.RightToLeft,
                        m = l.useState(new tI(0)),
                        w = m[0],
                        b = m[1],
                        y = l.useRef(""),
                        E = D();
                    return l.useEffect(function() {
                        y.current = "", b(new tI(0));
                        var e = new u.PDFWorker({
                                name: "PDFWorker_".concat(Date.now())
                            }),
                            a = Object.assign({
                                httpHeaders: o,
                                withCredentials: p,
                                worker: e
                            }, "string" == typeof r ? {
                                url: r
                            } : {
                                data: r
                            }, n ? {
                                cMapUrl: n.url,
                                cMapPacked: n.isCompressed
                            } : {}),
                            i = d ? d(a) : a,
                            c = u.getDocument(i);
                        return c.onPassword = function(e, n) {
                                switch (n) {
                                    case u.PasswordResponses.NEED_PASSWORD:
                                        E.current && b(new tT(e, t.PasswordStatus.RequiredPassword));
                                        break;
                                    case u.PasswordResponses.INCORRECT_PASSWORD:
                                        E.current && b(new tT(e, t.PasswordStatus.WrongPassword))
                                }
                            }, c.onProgress = function(e) {
                                var t = e.total > 0 ? Math.min(100, 100 * e.loaded / e.total) : 100;
                                E.current && "" === y.current && b(new tI(t))
                            }, c.promise.then(function(e) {
                                y.current = e.loadingTask.docId, E.current && b(new tO(e))
                            }, function(t) {
                                return E.current && !e.destroyed && b(new tF({
                                    message: t.message || "Cannot load document",
                                    name: t.name
                                }))
                            }),
                            function() {
                                c.destroy(), e.destroy()
                            }
                    }, [r]), w instanceof tT ? l.createElement(tL, {
                        passwordStatus: w.passwordStatus,
                        renderProtectedView: s,
                        verifyPassword: w.verifyPassword,
                        onDocumentAskPassword: f
                    }) : w instanceof tO ? a(w.doc) : w instanceof tF ? i ? i(w.error) : l.createElement("div", {
                        className: v({
                            "rpv-core__doc-error": !0,
                            "rpv-core__doc-error--rtl": g
                        })
                    }, l.createElement("div", {
                        className: "rpv-core__doc-error-text"
                    }, w.error.message)) : l.createElement("div", {
                        "data-testid": "core__doc-loading",
                        className: v({
                            "rpv-core__doc-loading": !0,
                            "rpv-core__doc-loading--rtl": g
                        })
                    }, c ? c(w.percentages) : l.createElement(_, null))
                },
                tA = function(e, t) {
                    var n = l.useMemo(function() {
                            return "auto" === e ? "undefined" != typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e
                        }, []),
                        r = l.useState(n),
                        o = r[0],
                        a = r[1],
                        i = A(o);
                    return l.useEffect(function() {
                        if ("auto" === e) {
                            var t = window.matchMedia("(prefers-color-scheme: dark)"),
                                n = function(e) {
                                    a(e.matches ? "dark" : "light")
                                };
                            return t.addEventListener("change", n),
                                function() {
                                    return t.removeEventListener("change", n)
                                }
                        }
                    }, []), l.useEffect(function() {
                        o !== i && t && t(o)
                    }, [o]), l.useEffect(function() {
                        e !== o && a(e)
                    }, [e]), {
                        currentTheme: o,
                        setCurrentTheme: a
                    }
                },
                tN = function(e) {
                    return {
                        startPage: e.startPage - 3,
                        endPage: e.endPage + 3
                    }
                };
            t.Button = function(e) {
                var n = e.children,
                    r = e.testId,
                    o = e.onClick,
                    a = l.useContext(h).direction === t.TextDirection.RightToLeft;
                return l.createElement("button", f({
                    className: v({
                        "rpv-core__button": !0,
                        "rpv-core__button--rtl": a
                    }),
                    type: "button",
                    onClick: o
                }, r ? {
                    "data-testid": r
                } : {}), n)
            }, t.Icon = b, t.LazyRender = function(e) {
                var t = e.attrs,
                    n = e.children,
                    r = e.testId,
                    o = l.useState(!1),
                    a = o[0],
                    i = o[1],
                    c = r ? f(f({}, t), {
                        "data-testid": r
                    }) : t,
                    u = w({
                        once: !0,
                        onVisibilityChanged: function(e) {
                            e.isVisible && i(!0)
                        }
                    });
                return l.createElement("div", f({
                    ref: u
                }, c), a && n)
            }, t.LocalizationContext = B, t.Menu = function(e) {
                var n = e.children,
                    r = l.useRef(),
                    o = l.useRef([]),
                    a = l.useContext(h).direction === t.TextDirection.RightToLeft,
                    i = function(e) {
                        if (r.current) switch (e.key) {
                            case "Tab":
                                e.preventDefault();
                                break;
                            case "ArrowDown":
                                e.preventDefault(), c(function(e, t) {
                                    return t + 1
                                });
                                break;
                            case "ArrowUp":
                                e.preventDefault(), c(function(e, t) {
                                    return t - 1
                                });
                                break;
                            case "End":
                                e.preventDefault(), c(function(e, t) {
                                    return e.length - 1
                                });
                                break;
                            case "Home":
                                e.preventDefault(), c(function(e, t) {
                                    return 0
                                })
                        }
                    },
                    c = function(e) {
                        if (r.current) {
                            var t = o.current,
                                n = t.findIndex(function(e) {
                                    return "0" === e.getAttribute("tabindex")
                                }),
                                a = Math.min(t.length - 1, Math.max(0, e(t, n)));
                            n >= 0 && n <= t.length - 1 && t[n].setAttribute("tabindex", "-1"), t[a].setAttribute("tabindex", "0"), t[a].focus()
                        }
                    };
                return m(function() {
                    var e = r.current;
                    if (e) {
                        var t, n = (t = [], e.querySelectorAll('.rpv-core__menu-item[role="menuitem"]').forEach(function(n) {
                            if (n instanceof HTMLElement) {
                                var r = n.parentElement;
                                (r === e || "none" !== window.getComputedStyle(r).display) && t.push(n)
                            }
                        }), t);
                        o.current = n
                    }
                }, []), m(function() {
                    return document.addEventListener("keydown", i),
                        function() {
                            document.removeEventListener("keydown", i)
                        }
                }, []), l.createElement("div", {
                    ref: r,
                    "aria-orientation": "vertical",
                    className: v({
                        "rpv-core__menu": !0,
                        "rpv-core__menu--rtl": a
                    }),
                    role: "menu",
                    tabIndex: 0
                }, n)
            }, t.MenuDivider = function() {
                return l.createElement("div", {
                    "aria-orientation": "horizontal",
                    className: "rpv-core__menu-divider",
                    role: "separator"
                })
            }, t.MenuItem = function(e) {
                var n = e.checked,
                    r = e.children,
                    o = e.icon,
                    a = e.isDisabled,
                    i = e.testId,
                    c = e.onClick,
                    u = l.useContext(h).direction === t.TextDirection.RightToLeft;
                return l.createElement("button", f({
                    className: v({
                        "rpv-core__menu-item": !0,
                        "rpv-core__menu-item--disabled": void 0 !== a && a,
                        "rpv-core__menu-item--ltr": !u,
                        "rpv-core__menu-item--rtl": u
                    }),
                    role: "menuitem",
                    tabIndex: -1,
                    type: "button",
                    onClick: c
                }, i ? {
                    "data-testid": i
                } : {}), l.createElement("div", {
                    className: v({
                        "rpv-core__menu-item-icon": !0,
                        "rpv-core__menu-item-icon--ltr": !u,
                        "rpv-core__menu-item-icon--rtl": u
                    })
                }, void 0 === o ? null : o), l.createElement("div", {
                    className: v({
                        "rpv-core__menu-item-label": !0,
                        "rpv-core__menu-item-label--ltr": !u,
                        "rpv-core__menu-item-label--rtl": u
                    })
                }, r), l.createElement("div", {
                    className: v({
                        "rpv-core__menu-item-check": !0,
                        "rpv-core__menu-item-check--ltr": !u,
                        "rpv-core__menu-item-check--rtl": u
                    })
                }, void 0 !== n && n && l.createElement(y, null)))
            }, t.MinimalButton = function(e) {
                var n = e.ariaLabel,
                    r = e.ariaKeyShortcuts,
                    o = void 0 === r ? "" : r,
                    a = e.children,
                    i = e.isDisabled,
                    c = void 0 !== i && i,
                    u = e.isSelected,
                    s = e.testId,
                    d = e.onClick,
                    p = l.useContext(h).direction === t.TextDirection.RightToLeft;
                return l.createElement("button", f({
                    "aria-label": void 0 === n ? "" : n
                }, o && {
                    "aria-keyshortcuts": o
                }, c && {
                    "aria-disabled": !0
                }, {
                    className: v({
                        "rpv-core__minimal-button": !0,
                        "rpv-core__minimal-button--disabled": c,
                        "rpv-core__minimal-button--rtl": p,
                        "rpv-core__minimal-button--selected": void 0 !== u && u
                    }),
                    type: "button",
                    onClick: d
                }, s ? {
                    "data-testid": s
                } : {}), a)
            }, t.Modal = function(e) {
                var t = e.ariaControlsSuffix,
                    n = e.closeOnClickOutside,
                    r = e.closeOnEscape,
                    o = e.content,
                    a = e.isOpened,
                    i = e.target,
                    c = t || "".concat(W());
                return l.createElement(K, {
                    target: i ? function(e, t) {
                        return l.createElement("div", {
                            "aria-expanded": t ? "true" : "false",
                            "aria-haspopup": "dialog",
                            "aria-controls": "rpv-core__modal-body-".concat(c)
                        }, i(e, t))
                    } : null,
                    content: function(e) {
                        return l.createElement(J, null, l.createElement(Z, {
                            ariaControlsSuffix: c,
                            closeOnClickOutside: n,
                            closeOnEscape: r,
                            onToggle: e
                        }, o(e)))
                    },
                    isOpened: void 0 !== a && a
                })
            }, t.Popover = function(e) {
                var t = e.ariaHasPopup,
                    n = e.ariaControlsSuffix,
                    r = e.closeOnClickOutside,
                    o = e.closeOnEscape,
                    a = e.content,
                    i = e.lockScroll,
                    c = e.offset,
                    u = e.position,
                    s = e.target,
                    d = Y(!1),
                    p = d.opened,
                    f = d.toggle,
                    g = l.useRef(),
                    h = l.useMemo(function() {
                        return n || "".concat(W())
                    }, []);
                return l.createElement("div", {
                    ref: g,
                    "aria-expanded": p ? "true" : "false",
                    "aria-haspopup": void 0 === t ? "dialog" : t,
                    "aria-controls": "rpv-core__popver-body-".concat(h)
                }, s(f, p), p && l.createElement(l.Fragment, null, (void 0 === i || i) && l.createElement(el, {
                    closeOnEscape: o,
                    onClose: f
                }), l.createElement(ec, {
                    ariaControlsSuffix: h,
                    closeOnClickOutside: r,
                    offset: c,
                    position: u,
                    targetRef: g,
                    onClose: f
                }, a(f))))
            }, t.PrimaryButton = E, t.ProgressBar = function(e) {
                var n = e.progress,
                    r = l.useContext(h).direction === t.TextDirection.RightToLeft;
                return l.createElement("div", {
                    className: v({
                        "rpv-core__progress-bar": !0,
                        "rpv-core__progress-bar--rtl": r
                    })
                }, l.createElement("div", {
                    className: "rpv-core__progress-bar-progress",
                    style: {
                        width: "".concat(n, "%")
                    }
                }, n, "%"))
            }, t.Separator = function() {
                return l.createElement("div", {
                    className: "rpv-core__separator"
                })
            }, t.Spinner = _, t.Splitter = function(e) {
                var n = e.constrain,
                    r = l.useContext(h).direction === t.TextDirection.RightToLeft,
                    o = l.useRef(),
                    a = l.useRef(),
                    i = l.useRef(),
                    c = l.useRef(0),
                    u = l.useRef(0),
                    s = l.useRef(0),
                    d = l.useRef(0),
                    p = {
                        capture: !0
                    },
                    f = function(e) {
                        var t = o.current,
                            l = a.current,
                            u = i.current;
                        if (t && l && u) {
                            var p = d.current,
                                f = e.clientX - c.current,
                                g = s.current + (r ? -f : f),
                                h = t.parentElement.getBoundingClientRect().width,
                                v = 100 * g / h;
                            if (t.classList.add("rpv-core__splitter--resizing"), n) {
                                var m = h - g - p;
                                if (!n({
                                        firstHalfPercentage: v,
                                        firstHalfSize: g,
                                        secondHalfPercentage: 100 * m / h,
                                        secondHalfSize: m
                                    })) return
                            }
                            l.style.width = "".concat(v, "%"), document.body.classList.add("rpv-core__splitter-body--resizing"), l.classList.add("rpv-core__splitter-sibling--resizing"), u.classList.add("rpv-core__splitter-sibling--resizing")
                        }
                    },
                    g = function(e) {
                        var t = o.current,
                            n = a.current,
                            r = i.current;
                        t && n && r && (document.body.classList.remove("rpv-core__splitter-body--resizing"), t.classList.remove("rpv-core__splitter--resizing"), n.classList.remove("rpv-core__splitter-sibling--resizing"), r.classList.remove("rpv-core__splitter-sibling--resizing"), document.removeEventListener("mousemove", f, p), document.removeEventListener("mouseup", g, p))
                    };
                return l.useEffect(function() {
                    var e = o.current;
                    e && (d.current = e.getBoundingClientRect().width, a.current = e.previousElementSibling, i.current = e.nextElementSibling)
                }, []), l.createElement("div", {
                    ref: o,
                    className: "rpv-core__splitter",
                    onMouseDown: function(e) {
                        var t = a.current;
                        t && (c.current = e.clientX, u.current = e.clientY, s.current = t.getBoundingClientRect().width, document.addEventListener("mousemove", f, p), document.addEventListener("mouseup", g, p))
                    }
                })
            }, t.TextBox = S, t.ThemeContext = h, t.Tooltip = function(e) {
                var n = e.ariaControlsSuffix,
                    r = e.content,
                    o = e.offset,
                    a = e.position,
                    i = e.target,
                    c = Y(!1),
                    u = c.opened,
                    s = c.toggle,
                    d = l.useRef(),
                    p = l.useRef(),
                    f = l.useMemo(function() {
                        return n || "".concat(W())
                    }, []);
                U(function() {
                    d.current && document.activeElement && d.current.contains(document.activeElement) && h()
                });
                var g = function() {
                        s(t.ToggleStatus.Open)
                    },
                    h = function() {
                        s(t.ToggleStatus.Close)
                    };
                return l.createElement(l.Fragment, null, l.createElement("div", {
                    ref: d,
                    "aria-describedby": "rpv-core__tooltip-body-".concat(f),
                    onBlur: function(e) {
                        e.relatedTarget instanceof HTMLElement && e.currentTarget.parentElement && e.currentTarget.parentElement.contains(e.relatedTarget) ? p.current && (p.current.style.display = "none") : h()
                    },
                    onFocus: g,
                    onMouseEnter: g,
                    onMouseLeave: h
                }, i), u && l.createElement(eu, {
                    ariaControlsSuffix: f,
                    contentRef: p,
                    offset: o,
                    position: a,
                    targetRef: d
                }, r()))
            }, t.Viewer = function(e) {
                var n = e.characterMap,
                    r = e.defaultScale,
                    o = e.enableSmoothScroll,
                    a = void 0 === o || o,
                    i = e.fileUrl,
                    c = e.httpHeaders,
                    u = e.initialPage,
                    s = void 0 === u ? 0 : u,
                    d = e.pageLayout,
                    p = e.initialRotation,
                    f = void 0 === p ? 0 : p,
                    g = e.localization,
                    v = e.plugins,
                    m = void 0 === v ? [] : v,
                    b = e.renderError,
                    y = e.renderLoader,
                    E = e.renderPage,
                    _ = e.renderProtectedView,
                    S = e.scrollMode,
                    x = void 0 === S ? t.ScrollMode.Vertical : S,
                    P = e.setRenderRange,
                    R = void 0 === P ? tN : P,
                    M = e.transformGetDocumentParams,
                    C = e.theme,
                    k = void 0 === C ? {
                        direction: t.TextDirection.LeftToRight,
                        theme: "light"
                    } : C,
                    T = e.viewMode,
                    L = void 0 === T ? t.ViewMode.SinglePage : T,
                    O = e.withCredentials,
                    F = e.onDocumentAskPassword,
                    I = e.onDocumentLoad,
                    D = void 0 === I ? function() {} : I,
                    N = e.onPageChange,
                    H = void 0 === N ? function() {} : N,
                    V = e.onRotate,
                    j = void 0 === V ? function() {} : V,
                    W = e.onRotatePage,
                    q = void 0 === W ? function() {} : W,
                    U = e.onSwitchTheme,
                    Z = e.onZoom,
                    J = void 0 === Z ? function() {} : Z,
                    G = l.useState({
                        data: i,
                        name: "string" == typeof i ? i : "",
                        shouldLoad: !1
                    }),
                    Y = G[0],
                    K = G[1],
                    X = function(e, t) {
                        K({
                            data: t,
                            name: e,
                            shouldLoad: !0
                        })
                    },
                    Q = l.useState(!1),
                    $ = Q[0],
                    ee = Q[1],
                    et = A(Y);
                l.useEffect(function() {
                    var e, t, n;
                    e = et.data, n = typeof i, "string" == (t = typeof e) && "string" === n && e === i || "object" === t && "object" === n && e.length === i.length && e.every(function(e, t) {
                        return e === i[t]
                    }) || K({
                        data: i,
                        name: "string" == typeof i ? i : "",
                        shouldLoad: $
                    })
                }, [i, $]);
                var en = w({
                        onVisibilityChanged: function(e) {
                            ee(e.isVisible), e.isVisible && K(function(e) {
                                return Object.assign({}, e, {
                                    shouldLoad: !0
                                })
                            })
                        }
                    }),
                    er = "string" == typeof k ? {
                        direction: t.TextDirection.LeftToRight,
                        theme: k
                    } : k,
                    eo = l.useState(g || z),
                    ea = eo[0],
                    ei = eo[1],
                    ec = Object.assign({}, {
                        direction: er.direction
                    }, tA(er.theme || "light", void 0 === U ? function() {} : U));
                return l.useEffect(function() {
                    g && ei(g)
                }, [g]), l.createElement(B.Provider, {
                    value: {
                        l10n: ea,
                        setL10n: ei
                    }
                }, l.createElement(h.Provider, {
                    value: ec
                }, l.createElement("div", {
                    ref: en,
                    className: "rpv-core__viewer rpv-core__viewer--".concat(ec.currentTheme),
                    "data-testid": "core__viewer",
                    style: {
                        height: "100%",
                        width: "100%"
                    }
                }, Y.shouldLoad && l.createElement(tD, {
                    characterMap: n,
                    file: Y.data,
                    httpHeaders: void 0 === c ? {} : c,
                    render: function(e) {
                        return l.createElement(tC, {
                            defaultScale: r,
                            doc: e,
                            render: function(n, o) {
                                return l.createElement(tR, {
                                    currentFile: {
                                        data: Y.data,
                                        name: Y.name
                                    },
                                    defaultScale: r,
                                    doc: e,
                                    enableSmoothScroll: a,
                                    initialPage: s,
                                    initialRotation: f,
                                    initialScale: o,
                                    pageLayout: d,
                                    pageSizes: n,
                                    plugins: m,
                                    renderPage: E,
                                    scrollMode: x,
                                    setRenderRange: R,
                                    viewMode: L,
                                    viewerState: {
                                        file: Y,
                                        fullScreenMode: t.FullScreenMode.Normal,
                                        pageIndex: -1,
                                        pageHeight: n[0].pageHeight,
                                        pageWidth: n[0].pageWidth,
                                        pagesRotation: new Map,
                                        rotation: f,
                                        scale: o,
                                        scrollMode: x,
                                        viewMode: L
                                    },
                                    onDocumentLoad: D,
                                    onOpenFile: X,
                                    onPageChange: H,
                                    onRotate: j,
                                    onRotatePage: q,
                                    onZoom: J
                                })
                            },
                            scrollMode: x,
                            viewMode: L
                        })
                    },
                    renderError: b,
                    renderLoader: y,
                    renderProtectedView: _,
                    transformGetDocumentParams: M,
                    withCredentials: void 0 !== O && O,
                    onDocumentAskPassword: F
                }))))
            }, t.Worker = function(e) {
                var t = e.children,
                    n = e.workerUrl;
                return u.GlobalWorkerOptions.workerSrc = n, l.createElement(l.Fragment, null, t)
            }, t.chunk = ed, t.classNames = v, t.createStore = function(e) {
                var t = e || {},
                    n = {},
                    r = function(e, r) {
                        var o;
                        t = f(f({}, t), ((o = {})[e] = r, o)), (n[e] || []).forEach(function(n) {
                            return n(t[e])
                        })
                    },
                    o = function(e) {
                        return t[e]
                    };
                return {
                    subscribe: function(e, t) {
                        n[e] = (n[e] || []).concat(t)
                    },
                    unsubscribe: function(e, t) {
                        n[e] = (n[e] || []).filter(function(e) {
                            return e !== t
                        })
                    },
                    update: function(e, t) {
                        r(e, t)
                    },
                    updateCurrentValue: function(e, t) {
                        var n = o(e);
                        void 0 !== n && r(e, t(n))
                    },
                    get: function(e) {
                        return o(e)
                    }
                }
            }, t.getDestination = ew, t.getPage = em, t.isFullScreenEnabled = L, t.isMac = function() {
                return "undefined" != typeof window && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
            }, t.useDebounceCallback = I, t.useIntersectionObserver = w, t.useIsMounted = D, t.useIsomorphicLayoutEffect = m, t.usePrevious = A, t.useRenderQueue = V
        },
        93214: function(e, t, n) {
            "use strict";
            e.exports = n(11058)
        },
        93813: function(e, t, n) {
            ! function() {
                var t = {
                        452: function(e) {
                            "use strict";
                            e.exports = n(85605)
                        }
                    },
                    r = {};

                function o(e) {
                    var n = r[e];
                    if (void 0 !== n) return n.exports;
                    var a = r[e] = {
                            exports: {}
                        },
                        i = !0;
                    try {
                        t[e](a, a.exports, o), i = !1
                    } finally {
                        i && delete r[e]
                    }
                    return a.exports
                }
                o.ab = "//";
                var a = {};
                ! function() {
                    var e, t = (e = o(452)) && "object" == typeof e && "default" in e ? e.default : e,
                        n = /https?|ftp|gopher|file/;

                    function r(e) {
                        "string" == typeof e && (e = m(e));
                        var r, o, a, i, c, l, u, s, d, p = (o = (r = e).auth, a = r.hostname, i = r.protocol || "", c = r.pathname || "", l = r.hash || "", u = r.query || "", s = !1, o = o ? encodeURIComponent(o).replace(/%3A/i, ":") + "@" : "", r.host ? s = o + r.host : a && (s = o + (~a.indexOf(":") ? "[" + a + "]" : a), r.port && (s += ":" + r.port)), u && "object" == typeof u && (u = t.encode(u)), d = r.search || u && "?" + u || "", i && ":" !== i.substr(-1) && (i += ":"), r.slashes || (!i || n.test(i)) && !1 !== s ? (s = "//" + (s || ""), c && "/" !== c[0] && (c = "/" + c)) : s || (s = ""), l && "#" !== l[0] && (l = "#" + l), d && "?" !== d[0] && (d = "?" + d), {
                            protocol: i,
                            host: s,
                            pathname: c = c.replace(/[?#]/g, encodeURIComponent),
                            search: d = d.replace("#", "%23"),
                            hash: l
                        });
                        return "" + p.protocol + p.host + p.pathname + p.search + p.hash
                    }
                    var i = "http://",
                        c = i + "w.w",
                        l = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
                        u = /https?|ftp|gopher|file/;

                    function s(e, t) {
                        var n = "string" == typeof e ? m(e) : e;
                        e = "object" == typeof e ? r(e) : e;
                        var o = m(t),
                            a = "";
                        n.protocol && !n.slashes && (a = n.protocol, e = e.replace(n.protocol, ""), a += "/" === t[0] || "/" === e[0] ? "/" : ""), a && o.protocol && (a = "", o.slashes || (a = o.protocol, t = t.replace(o.protocol, "")));
                        var s = e.match(l);
                        s && !o.protocol && (e = e.substr((a = s[1] + (s[2] || "")).length), /^\/\/[^/]/.test(t) && (a = a.slice(0, -1)));
                        var d = new URL(e, c + "/"),
                            p = new URL(t, d).toString().replace(c, ""),
                            f = o.protocol || n.protocol;
                        return f += n.slashes || o.slashes ? "//" : "", !a && f ? p = p.replace(i, f) : a && (p = p.replace(i, "")), u.test(p) || ~t.indexOf(".") || "/" === e.slice(-1) || "/" === t.slice(-1) || "/" !== p.slice(-1) || (p = p.slice(0, -1)), a && (p = a + ("/" === p[0] ? p.substr(1) : p)), p
                    }

                    function d() {}
                    d.prototype.parse = m, d.prototype.format = r, d.prototype.resolve = s, d.prototype.resolveObject = s;
                    var p = /^https?|ftp|gopher|file/,
                        f = /^(.*?)([#?].*)/,
                        g = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
                        h = /^([a-z0-9.+-]*:)?\/\/\/*/i,
                        v = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;

                    function m(e, n, o) {
                        if (void 0 === n && (n = !1), void 0 === o && (o = !1), e && "object" == typeof e && e instanceof d) return e;
                        var a = (e = e.trim()).match(f);
                        e = a ? a[1].replace(/\\/g, "/") + a[2] : e.replace(/\\/g, "/"), v.test(e) && "/" !== e.slice(-1) && (e += "/");
                        var i = !/(^javascript)/.test(e) && e.match(g),
                            l = h.test(e),
                            u = "";
                        i && (p.test(i[1]) || (u = i[1].toLowerCase(), e = "" + i[2] + i[3]), i[2] || (l = !1, p.test(i[1]) ? (u = i[1], e = "" + i[3]) : e = "//" + i[3]), 3 !== i[2].length && 1 !== i[2].length || (u = i[1], e = "/" + i[3]));
                        var s, m = (a ? a[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
                            w = m && m[1],
                            b = new d,
                            y = "",
                            E = "";
                        try {
                            s = new URL(e)
                        } catch (t) {
                            y = t, u || o || !/^\/\//.test(e) || /^\/\/.+[@.]/.test(e) || (E = "/", e = e.substr(1));
                            try {
                                s = new URL(e, c)
                            } catch (e) {
                                return b.protocol = u, b.href = u, b
                            }
                        }
                        b.slashes = l && !E, b.host = "w.w" === s.host ? "" : s.host, b.hostname = "w.w" === s.hostname ? "" : s.hostname.replace(/(\[|\])/g, ""), b.protocol = y ? u || null : s.protocol, b.search = s.search.replace(/\\/g, "%5C"), b.hash = s.hash.replace(/\\/g, "%5C");
                        var _ = e.split("#");
                        !b.search && ~_[0].indexOf("?") && (b.search = "?"), b.hash || "" !== _[1] || (b.hash = "#"), b.query = n ? t.decode(s.search.substr(1)) : b.search.substr(1), b.pathname = E + (i ? s.pathname.replace(/['^|`]/g, function(e) {
                            return "%" + e.charCodeAt().toString(16).toUpperCase()
                        }).replace(/((?:%[0-9A-F]{2})+)/g, function(e, t) {
                            try {
                                return decodeURIComponent(t).split("").map(function(e) {
                                    var t = e.charCodeAt();
                                    return t > 256 || /^[a-z0-9]$/i.test(e) ? e : "%" + t.toString(16).toUpperCase()
                                }).join("")
                            } catch (e) {
                                return t
                            }
                        }) : s.pathname), "about:" === b.protocol && "blank" === b.pathname && (b.protocol = "", b.pathname = ""), y && "/" !== e[0] && (b.pathname = b.pathname.substr(1)), u && !p.test(u) && "/" !== e.slice(-1) && "/" === b.pathname && (b.pathname = ""), b.path = b.pathname + b.search, b.auth = [s.username, s.password].map(decodeURIComponent).filter(Boolean).join(":"), b.port = s.port, w && !b.host.endsWith(w) && (b.host += w, b.port = w.slice(1)), b.href = E ? "" + b.pathname + b.search + b.hash : r(b);
                        var S = /^(file)/.test(b.href) ? ["host", "hostname"] : [];
                        return Object.keys(b).forEach(function(e) {
                            ~S.indexOf(e) || (b[e] = b[e] || null)
                        }), b
                    }
                    a.parse = m, a.format = r, a.resolve = s, a.resolveObject = function(e, t) {
                        return m(s(e, t))
                    }, a.Url = d
                }(), e.exports = a
            }()
        },
        85605: function(e) {
            ! function() {
                "use strict";
                var t = {
                        815: function(e) {
                            e.exports = function(e, n, r, o) {
                                n = n || "&", r = r || "=";
                                var a = {};
                                if ("string" != typeof e || 0 === e.length) return a;
                                var i = /\+/g;
                                e = e.split(n);
                                var c = 1e3;
                                o && "number" == typeof o.maxKeys && (c = o.maxKeys);
                                var l = e.length;
                                c > 0 && l > c && (l = c);
                                for (var u = 0; u < l; ++u) {
                                    var s, d, p, f, g = e[u].replace(i, "%20"),
                                        h = g.indexOf(r);
                                    (h >= 0 ? (s = g.substr(0, h), d = g.substr(h + 1)) : (s = g, d = ""), p = decodeURIComponent(s), f = decodeURIComponent(d), Object.prototype.hasOwnProperty.call(a, p)) ? t(a[p]) ? a[p].push(f) : a[p] = [a[p], f]: a[p] = f
                                }
                                return a
                            };
                            var t = Array.isArray || function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            }
                        },
                        577: function(e) {
                            var t = function(e) {
                                switch (typeof e) {
                                    case "string":
                                        return e;
                                    case "boolean":
                                        return e ? "true" : "false";
                                    case "number":
                                        return isFinite(e) ? e : "";
                                    default:
                                        return ""
                                }
                            };
                            e.exports = function(e, a, i, c) {
                                return (a = a || "&", i = i || "=", null === e && (e = void 0), "object" == typeof e) ? r(o(e), function(o) {
                                    var c = encodeURIComponent(t(o)) + i;
                                    return n(e[o]) ? r(e[o], function(e) {
                                        return c + encodeURIComponent(t(e))
                                    }).join(a) : c + encodeURIComponent(t(e[o]))
                                }).join(a) : c ? encodeURIComponent(t(c)) + i + encodeURIComponent(t(e)) : ""
                            };
                            var n = Array.isArray || function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            };

                            function r(e, t) {
                                if (e.map) return e.map(t);
                                for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
                                return n
                            }
                            var o = Object.keys || function(e) {
                                var t = [];
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                                return t
                            }
                        }
                    },
                    n = {};

                function r(e) {
                    var o = n[e];
                    if (void 0 !== o) return o.exports;
                    var a = n[e] = {
                            exports: {}
                        },
                        i = !0;
                    try {
                        t[e](a, a.exports, r), i = !1
                    } finally {
                        i && delete n[e]
                    }
                    return a.exports
                }
                r.ab = "//";
                var o = {};
                o.decode = o.parse = r(815), o.encode = o.stringify = r(577), e.exports = o
            }()
        }
    }
]);