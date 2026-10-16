try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f7acf8a3-2193-42a6-b05a-24d57d1d7bef", e._sentryDebugIdIdentifier = "sentry-dbid-f7acf8a3-2193-42a6-b05a-24d57d1d7bef")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [43756], {
        73962: function(e, t, n) {
            function a(e) {
                var t;
                return null !== (t = e.spatialKind) && void 0 !== t ? t : "box"
            }

            function r(e) {
                switch (e) {
                    case "polygon":
                        return "Segment";
                    case "path":
                        return "Path";
                    case "pose":
                        return "Pose";
                    case "mask":
                        return "Mask";
                    default:
                        return "Box"
                }
            }
            n.d(t, {
                E: function() {
                    return a
                },
                c: function() {
                    return r
                }
            })
        },
        30235: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return i
                }
            });
            var a = n(57437),
                r = n(87769),
                l = n(42208),
                o = n(87513),
                s = n(21648);

            function i(e) {
                let {
                    annotations: t,
                    hiddenAnnotationIds: n,
                    onToggle: i,
                    className: d
                } = e, c = new Set(n);
                return (0, a.jsxs)("div", {
                    className: (0, o.cn)("flex flex-col gap-1", d),
                    children: [(0, a.jsx)("div", {
                        className: "mb-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground",
                        children: "Layers"
                    }), (0, a.jsx)("div", {
                        className: "max-h-52 space-y-0.5 overflow-y-auto pr-0.5",
                        style: {
                            scrollbarWidth: "thin"
                        },
                        children: t.map(e => {
                            let t = c.has(e.id),
                                n = (0, s.t$)(e.color);
                            return (0, a.jsxs)("div", {
                                className: "flex items-center gap-1.5 rounded-md px-1 py-0.5 hover:bg-muted/60",
                                children: [(0, a.jsx)("div", {
                                    className: "size-2.5 shrink-0 rounded-full",
                                    style: {
                                        backgroundColor: n.text
                                    }
                                }), (0, a.jsx)("span", {
                                    className: (0, o.cn)("min-w-0 flex-1 truncate text-xs", t && "text-muted-foreground line-through"),
                                    children: e.label
                                }), (0, a.jsx)("button", {
                                    type: "button",
                                    "aria-label": t ? "Show layer" : "Hide layer",
                                    "aria-pressed": !t,
                                    className: "shrink-0 rounded p-0.5 text-muted-foreground hover:bg-muted hover:text-foreground",
                                    onClick: t => {
                                        t.stopPropagation(), i(e.id)
                                    },
                                    children: t ? (0, a.jsx)(r.Z, {
                                        className: "size-3.5"
                                    }) : (0, a.jsx)(l.Z, {
                                        className: "size-3.5"
                                    })
                                })]
                            }, e.id)
                        })
                    })]
                })
            }
        },
        38671: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return h
                }
            });
            var a = n(57437),
                r = n(2265),
                l = n(10866),
                o = n(87513),
                s = n(27312);
            let i = s.fC,
                d = s.xz;
            s.ee;
            let c = r.forwardRef((e, t) => {
                let {
                    className: n,
                    align: r = "center",
                    sideOffset: l = 4,
                    container: i,
                    ...d
                } = e;
                return (0, a.jsx)(s.h_, {
                    container: i,
                    children: (0, a.jsx)(s.VY, {
                        ref: t,
                        align: r,
                        sideOffset: l,
                        className: (0, o.cn)("z-[10001] w-72 rounded-[10px] border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n),
                        ...d
                    })
                })
            });
            c.displayName = s.VY.displayName;
            var u = n(34587),
                m = n(73962),
                x = n(30235),
                f = n(21648);

            function p(e) {
                let {
                    title: t,
                    titleRight: n,
                    className: r,
                    children: l
                } = e;
                return (0, a.jsxs)("div", {
                    className: (0, o.cn)("flex min-h-0 flex-col overflow-hidden text-card-foreground", r),
                    children: [(0, a.jsxs)("div", {
                        className: "group/header flex shrink-0 items-center justify-between gap-2 py-2",
                        children: [(0, a.jsx)("h4", {
                            className: "text-sm font-semibold",
                            children: t
                        }), n ? (0, a.jsx)("div", {
                            className: "flex shrink-0 items-center",
                            children: n
                        }) : null]
                    }), (0, a.jsx)("div", {
                        className: "min-h-0 overflow-hidden rounded-xl border border-border bg-card shadow-none",
                        children: l
                    })]
                })
            }

            function h(e) {
                let {
                    annotations: t,
                    selectedAnnotationId: n,
                    onAnnotationSelect: s,
                    onSeekToAnnotation: h,
                    hiddenAnnotationIds: g = [],
                    onAnnotationVisibilityToggle: v,
                    title: b = "Detections",
                    className: j,
                    columnVisibility: y
                } = e, [w, k] = (0, r.useState)(!1), N = new Set(g), J = t.filter(e => !N.has(e.id)), C = {
                    track: (null == y ? void 0 : y.track) !== !1,
                    label: (null == y ? void 0 : y.label) !== !1,
                    shape: (null == y ? void 0 : y.shape) !== !1,
                    confidence: (null == y ? void 0 : y.confidence) !== !1
                }, T = C.track && C.label, A = T || !T && C.track || !T && C.label || C.shape || C.confidence, E = v ? (0, a.jsxs)(i, {
                    open: w,
                    onOpenChange: k,
                    children: [(0, a.jsx)(d, {
                        asChild: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: "shrink-0 rounded p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                            "aria-label": "Layers",
                            "aria-expanded": w,
                            onClick: e => e.stopPropagation(),
                            children: (0, a.jsx)(l.Z, {
                                className: "size-3.5"
                            })
                        })
                    }), (0, a.jsx)(c, {
                        align: "start",
                        className: "w-80 p-3",
                        onClick: e => e.stopPropagation(),
                        children: (0, a.jsx)(x.G, {
                            annotations: t,
                            hiddenAnnotationIds: g,
                            onToggle: v
                        })
                    })]
                }) : null, z = null != E ? (0, a.jsx)("div", {
                    className: (0, o.cn)("opacity-0 transition-opacity group-hover/header:opacity-100 group-focus-within/header:opacity-100", w && "opacity-100"),
                    children: E
                }) : void 0;
                return 0 === t.length ? (0, a.jsx)(p, {
                    title: b,
                    titleRight: z,
                    className: j,
                    children: (0, a.jsx)("div", {
                        className: "flex items-center justify-center px-3 py-8 text-sm text-muted-foreground",
                        children: "No annotations"
                    })
                }) : 0 === J.length ? (0, a.jsx)(p, {
                    title: b,
                    titleRight: z,
                    className: j,
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-1 px-3 py-8 text-center text-sm text-muted-foreground",
                        children: [(0, a.jsx)("p", {
                            children: "All layers hidden."
                        }), (0, a.jsx)("p", {
                            className: "text-xs",
                            children: "Open the settings menu (gear) → Layers to show them again."
                        })]
                    })
                }) : A ? (0, a.jsx)(p, {
                    title: b,
                    titleRight: z,
                    className: j,
                    children: (0, a.jsxs)(u.iA, {
                        children: [(0, a.jsx)(u.xD, {
                            children: (0, a.jsxs)(u.SC, {
                                children: [T ? (0, a.jsx)(u.ss, {
                                    className: "min-w-0 text-xs normal-case text-foreground",
                                    children: "Layer"
                                }) : (0, a.jsxs)(a.Fragment, {
                                    children: [C.track ? (0, a.jsx)(u.ss, {
                                        className: "w-28 text-xs normal-case text-foreground",
                                        children: (v ? "Layers" : null) || (0, a.jsx)("span", {
                                            className: "sr-only",
                                            children: "Track"
                                        })
                                    }) : null, C.label ? (0, a.jsx)(u.ss, {
                                        className: "text-xs normal-case text-foreground",
                                        children: "Label"
                                    }) : null]
                                }), C.shape ? (0, a.jsx)(u.ss, {
                                    className: "w-[4.5rem] text-xs normal-case text-foreground",
                                    children: "Shape"
                                }) : null, C.confidence ? (0, a.jsx)(u.ss, {
                                    className: "text-right text-xs normal-case text-foreground",
                                    children: "Confidence"
                                }) : null]
                            })
                        }), (0, a.jsx)(u.RM, {
                            children: J.map(e => {
                                let t = e.id === n,
                                    r = (0, f.t$)(e.color);
                                return (0, a.jsxs)(u.SC, {
                                    "data-highlighted": t ? "true" : void 0,
                                    className: (0, o.cn)("cursor-pointer transition-colors"),
                                    style: t ? {
                                        backgroundColor: r.bg
                                    } : void 0,
                                    onClick: () => {
                                        if (t) {
                                            null == s || s(null);
                                            return
                                        }
                                        null == s || s(e.id), null == h || h(e)
                                    },
                                    children: [T ? (0, a.jsx)(u.pj, {
                                        className: "align-middle font-normal",
                                        children: (0, a.jsxs)("div", {
                                            className: "flex min-w-0 items-center gap-2",
                                            children: [(0, a.jsx)("div", {
                                                "data-color-indicator": !0,
                                                className: "size-3 shrink-0 rounded-full",
                                                style: {
                                                    backgroundColor: r.text
                                                }
                                            }), (0, a.jsx)("span", {
                                                className: "min-w-0 truncate",
                                                style: {
                                                    color: t ? r.text : void 0
                                                },
                                                children: e.label
                                            })]
                                        })
                                    }) : (0, a.jsxs)(a.Fragment, {
                                        children: [C.track ? (0, a.jsx)(u.pj, {
                                            className: "align-middle",
                                            children: (0, a.jsx)("div", {
                                                "data-color-indicator": !0,
                                                className: "size-3 rounded-full",
                                                style: {
                                                    backgroundColor: r.text
                                                }
                                            })
                                        }) : null, C.label ? (0, a.jsx)(u.pj, {
                                            className: "font-normal",
                                            style: {
                                                color: t ? r.text : void 0
                                            },
                                            children: e.label
                                        }) : null]
                                    }), C.shape ? (0, a.jsx)(u.pj, {
                                        className: "text-xs text-muted-foreground",
                                        children: (0, m.c)((0, m.E)(e))
                                    }) : null, C.confidence ? (0, a.jsx)(u.pj, {
                                        className: "text-right",
                                        children: null != e.confidence ? "".concat(Math.round(100 * e.confidence), "%") : "—"
                                    }) : null]
                                }, e.id)
                            })
                        })]
                    })
                }) : (0, a.jsx)(p, {
                    title: b,
                    titleRight: z,
                    className: j,
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-1 px-3 py-8 text-center text-sm text-muted-foreground",
                        children: [(0, a.jsx)("p", {
                            children: "No columns visible."
                        }), (0, a.jsx)("p", {
                            className: "text-xs",
                            children: "Enable at least one column in layout settings."
                        })]
                    })
                })
            }
        },
        57342: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return m
                }
            });
            var a = n(57437),
                r = n(2265),
                l = n(79205);
            let o = (0, l.Z)("skip-back", [
                ["path", {
                    d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",
                    key: "15892j"
                }],
                ["path", {
                    d: "M3 20V4",
                    key: "1ptbpl"
                }]
            ]);
            var s = n(89227),
                i = n(33276);
            let d = (0, l.Z)("skip-forward", [
                ["path", {
                    d: "M21 4v16",
                    key: "7j8fe9"
                }],
                ["path", {
                    d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
                    key: "zs4d6"
                }]
            ]);
            var c = n(87513),
                u = n(64962);
            let m = (0, r.forwardRef)(function(e, t) {
                let {
                    src: n,
                    poster: l,
                    title: m,
                    className: x,
                    skipSeconds: f = 10
                } = e, p = (0, r.useRef)(null), h = (0, r.useCallback)(e => {
                    p.current = e, "function" == typeof t ? t(e) : t && (t.current = e)
                }, [t]), [g, v] = (0, r.useState)(0), [b, j] = (0, r.useState)(0), [y, w] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    let e = p.current;
                    if (!e) return;
                    let t = () => v(e.duration || 0),
                        n = () => j(e.currentTime),
                        a = () => w(!0),
                        r = () => w(!1);
                    return e.addEventListener("loadedmetadata", t), e.addEventListener("timeupdate", n), e.addEventListener("play", a), e.addEventListener("pause", r), () => {
                        e.removeEventListener("loadedmetadata", t), e.removeEventListener("timeupdate", n), e.removeEventListener("play", a), e.removeEventListener("pause", r)
                    }
                }, [n]);
                let k = (0, r.useCallback)(() => {
                        let e = p.current;
                        e && (e.paused ? e.play() : e.pause())
                    }, []),
                    N = (0, r.useCallback)(e => {
                        let t = p.current;
                        t && (t.currentTime = Math.max(0, Math.min(g || 1 / 0, t.currentTime + e)))
                    }, [g]),
                    J = (0, r.useCallback)(e => {
                        let t = p.current;
                        if (!t || !g) return;
                        let n = e.currentTarget.getBoundingClientRect(),
                            a = Math.min(1, Math.max(0, (e.clientX - n.left) / n.width));
                        t.currentTime = a * g
                    }, [g]),
                    C = g > 0 ? b / g : 0;
                return (0, a.jsxs)("div", {
                    className: (0, c.cn)("flex items-center gap-3 rounded-2xl border border-border bg-card px-3 py-2.5 shadow-sm", x),
                    children: [(0, a.jsx)("audio", {
                        ref: h,
                        src: n,
                        preload: "metadata"
                    }), l ? (0, a.jsx)("img", {
                        src: l,
                        alt: "",
                        className: "size-11 shrink-0 rounded-lg object-cover"
                    }) : (0, a.jsx)("div", {
                        className: "size-11 shrink-0 rounded-lg bg-muted"
                    }), (0, a.jsxs)("div", {
                        className: "flex min-w-0 flex-1 flex-col gap-1.5",
                        children: [m ? (0, a.jsx)("p", {
                            className: "truncate text-xs font-medium text-foreground",
                            children: m
                        }) : null, (0, a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, a.jsx)("button", {
                                type: "button",
                                className: "rounded-md p-1 text-foreground hover:bg-muted",
                                "aria-label": "Skip back",
                                onClick: () => N(-f),
                                children: (0, a.jsx)(o, {
                                    className: "size-4"
                                })
                            }), (0, a.jsx)("button", {
                                type: "button",
                                className: "rounded-md p-1 text-foreground hover:bg-muted",
                                "aria-label": y ? "Pause" : "Play",
                                onClick: k,
                                children: y ? (0, a.jsx)(s.Z, {
                                    className: "size-4"
                                }) : (0, a.jsx)(i.Z, {
                                    className: "ml-0.5 size-4"
                                })
                            }), (0, a.jsx)("button", {
                                type: "button",
                                className: "rounded-md p-1 text-foreground hover:bg-muted",
                                "aria-label": "Skip forward",
                                onClick: () => N(f),
                                children: (0, a.jsx)(d, {
                                    className: "size-4"
                                })
                            }), (0, a.jsx)("span", {
                                className: "font-mono text-[11px] tabular-nums text-muted-foreground",
                                children: (0, u.DQ)(b)
                            }), (0, a.jsx)("div", {
                                role: "slider",
                                tabIndex: 0,
                                "aria-valuenow": Math.round(100 * C),
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                className: "relative h-2 min-w-[120px] flex-1 cursor-pointer rounded-full bg-muted",
                                onClick: J,
                                onKeyDown: e => {
                                    "ArrowLeft" === e.key && N(-1), "ArrowRight" === e.key && N(1)
                                },
                                children: (0, a.jsx)("div", {
                                    className: "absolute left-0 top-0 h-full rounded-full bg-foreground/90",
                                    style: {
                                        width: "".concat(100 * C, "%")
                                    }
                                })
                            }), (0, a.jsx)("span", {
                                className: "font-mono text-[11px] tabular-nums text-muted-foreground",
                                children: (0, u.DQ)(g)
                            })]
                        })]
                    })]
                })
            })
        },
        88546: function(e, t, n) {
            n.r(t), n.d(t, {
                DocumentViewport: function() {
                    return y
                }
            });
            var a = n(57437),
                r = n(48736),
                l = n(2265),
                o = n(93214),
                s = n(36933),
                i = n(92451),
                d = n(10407),
                c = n(45802),
                u = n(43391),
                m = n(57208),
                x = n(92735),
                f = n(43194);
            n(13856), n(14923);
            var p = n(41191),
                h = n(8551);
            let g = () => {
                    let e = l.useMemo(() => (0, o.createStore)({}), []),
                        t = l.useCallback(t => {
                            let n = e.get("jumpToDestination"),
                                a = e.get("zoom");
                            n && (n(t), a && a(o.SpecialZoomLevel.PageWidth))
                        }, [e]),
                        n = l.useCallback(async t => {
                            let n = e.get("jumpToPage"),
                                a = e.get("zoom");
                            n && (await n(t), null == a || a(o.SpecialZoomLevel.PageWidth))
                        }, [e]),
                        a = l.useCallback(e => e.slot, []);
                    return l.useMemo(() => ({
                        install: t => {
                            e.update("jumpToDestination", t.jumpToDestination), e.update("jumpToPage", t.jumpToPage), e.update("zoom", t.zoom)
                        },
                        renderViewer: a,
                        onDocumentLoad: t => {
                            e.update("doc", t.doc)
                        },
                        jumpToDestination: t,
                        jumpToPage: n
                    }), [e, t, n, a])
                },
                v = "https://unpkg.com/pdfjs-dist@".concat(f.version, "/build/pdf.worker.min.js"),
                b = () => (0, a.jsx)("div", {
                    className: "absolute inset-0 z-50 flex items-center justify-center bg-white/90",
                    children: (0, a.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [(0, a.jsxs)("div", {
                            className: "relative size-10",
                            children: [(0, a.jsx)("div", {
                                className: "absolute inset-0 rounded-full border-2 border-primary/20"
                            }), (0, a.jsx)("div", {
                                className: "absolute inset-0 animate-spin rounded-full border-2 border-primary border-t-transparent"
                            })]
                        }), (0, a.jsx)("span", {
                            className: "text-sm text-muted-foreground",
                            children: "Loading PDF…"
                        })]
                    })
                });
            var j = (0, l.memo)(function(e) {
                let {
                    pdfUrl: t,
                    spatialOverlaySvgInner: n,
                    spatialOverlaySvgByPage: r,
                    selectedSpatialAnnotationId: f,
                    onSpatialAnnotationSelect: j,
                    focusedPageIndex: y
                } = e, [w, k] = (0, l.useState)(!0), [N, J] = (0, l.useState)(!1), C = g(), {
                    jumpToPage: T
                } = C, A = (0, l.useRef)(void 0);
                (0, l.useEffect)(() => {
                    A.current = void 0
                }, [t]), (0, l.useEffect)(() => {
                    null == y || y < 0 || w || A.current === y || (A.current = y, T(y))
                }, [y, t, w, T]);
                let E = e => {
                        let {
                            onClick: t,
                            children: n
                        } = e;
                        return (0, a.jsx)(p.z, {
                            variant: "outline",
                            className: "h-7 w-7 px-0",
                            onClick: t,
                            children: n
                        })
                    },
                    z = (0, s.defaultLayoutPlugin)({
                        sidebarTabs: () => [],
                        renderToolbar: e => (0, a.jsx)(e, {
                            children: e => {
                                let {
                                    CurrentPageLabel: t,
                                    Download: n,
                                    GoToNextPage: r,
                                    GoToPreviousPage: l,
                                    NumberOfPages: o,
                                    ZoomIn: s,
                                    ZoomOut: f,
                                    EnterFullScreen: p
                                } = e;
                                return (0, a.jsxs)("div", {
                                    className: "flex h-10 w-full items-center justify-between border-b border-border/40 bg-[#F5FAFF] px-4",
                                    children: [(0, a.jsx)("div", {
                                        className: "flex items-center space-x-3",
                                        children: (0, a.jsxs)("div", {
                                            className: "flex items-center space-x-1",
                                            children: [(0, a.jsx)(l, {
                                                children: e => (0, a.jsx)(E, {
                                                    onClick: e.onClick,
                                                    children: (0, a.jsx)(i.Z, {
                                                        className: "size-4"
                                                    })
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "min-w-[52px] text-center text-xs text-muted-foreground",
                                                children: [(0, a.jsx)(t, {}), " / ", (0, a.jsx)(o, {})]
                                            }), (0, a.jsx)(r, {
                                                children: e => (0, a.jsx)(E, {
                                                    onClick: e.onClick,
                                                    children: (0, a.jsx)(d.Z, {
                                                        className: "size-4"
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-center space-x-1",
                                        children: [(0, a.jsx)(f, {
                                            children: e => (0, a.jsx)(E, {
                                                onClick: e.onClick,
                                                children: (0, a.jsx)(c.Z, {
                                                    className: "size-4"
                                                })
                                            })
                                        }), (0, a.jsx)(s, {
                                            children: e => (0, a.jsx)(E, {
                                                onClick: e.onClick,
                                                children: (0, a.jsx)(u.Z, {
                                                    className: "size-4"
                                                })
                                            })
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-center space-x-1",
                                        children: [(0, a.jsx)(p, {
                                            children: e => (0, a.jsx)(E, {
                                                onClick: e.onClick,
                                                children: (0, a.jsx)(m.Z, {
                                                    className: "size-4"
                                                })
                                            })
                                        }), (0, a.jsx)(n, {
                                            children: e => (0, a.jsx)(E, {
                                                onClick: e.onClick,
                                                children: (0, a.jsx)(x.Z, {
                                                    className: "size-4"
                                                })
                                            })
                                        })]
                                    })]
                                })
                            }
                        })
                    }),
                    S = (0, l.useCallback)(e => {
                        var t, l;
                        let {
                            pageIndex: o
                        } = e, s = null === (t = null !== (l = null == r ? void 0 : r[o]) && void 0 !== l ? l : 0 === o ? n : void 0) || void 0 === t ? void 0 : t.trim();
                        return s ? (0, a.jsx)("div", {
                            className: "pointer-events-auto absolute inset-0 z-[52] size-full",
                            children: (0, a.jsx)(h.t, {
                                svgInnerMarkup: s,
                                selectedAnnotationId: f,
                                onAnnotationClick: j
                            })
                        }) : null
                    }, [r, n, f, j]);
                return N ? (0, a.jsxs)("div", {
                    className: "flex h-full flex-col items-center justify-center gap-2 p-6 text-center text-sm text-muted-foreground",
                    children: [(0, a.jsx)("p", {
                        children: "Could not load this PDF in the embedded viewer."
                    }), (0, a.jsx)("a", {
                        className: "text-primary underline",
                        href: t,
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Open PDF in new tab"
                    })]
                }) : (0, a.jsx)("div", {
                    className: "flex size-full flex-col items-center",
                    children: (0, a.jsxs)("div", {
                        className: "pdf-viewer-clean relative size-full overflow-hidden",
                        children: [w && (0, a.jsx)(b, {}), (0, a.jsx)(o.Worker, {
                            workerUrl: v,
                            children: (0, a.jsx)("div", {
                                className: "h-full",
                                children: (0, a.jsx)(o.Viewer, {
                                    fileUrl: t,
                                    plugins: [z, C],
                                    renderPage: e => (0, a.jsxs)(a.Fragment, {
                                        children: [e.canvasLayer.children, e.textLayer.children, S(e)]
                                    }),
                                    onDocumentLoad: () => {
                                        k(!1)
                                    },
                                    renderError: () => (N || setTimeout(() => {
                                        J(!0)
                                    }, 0), (0, a.jsx)(a.Fragment, {})),
                                    defaultScale: o.SpecialZoomLevel.PageFit,
                                    renderLoader: () => (0, a.jsx)(a.Fragment, {})
                                })
                            })
                        })]
                    })
                })
            });

            function y(e) {
                let {
                    src: t,
                    pageCount: n,
                    fileType: l,
                    spatialOverlaySvgInner: o,
                    spatialOverlaySvgByPage: s,
                    selectedAnnotationId: i,
                    onAnnotationSelect: d,
                    focusedPageIndex: c
                } = e;
                return t ? (0, a.jsx)("div", {
                    className: "relative overflow-hidden rounded-xl border border-border",
                    children: (0, a.jsx)("div", {
                        className: "h-[600px]",
                        children: (0, a.jsx)(j, {
                            pdfUrl: t,
                            spatialOverlaySvgInner: o,
                            spatialOverlaySvgByPage: s,
                            selectedSpatialAnnotationId: i,
                            onSpatialAnnotationSelect: d,
                            focusedPageIndex: c
                        })
                    })
                }) : (0, a.jsxs)("div", {
                    "data-document-placeholder": !0,
                    className: "flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-muted/30 py-16",
                    children: [(0, a.jsx)(r.Z, {
                        className: "h-12 w-12 text-muted-foreground"
                    }), (0, a.jsxs)("div", {
                        className: "flex items-center gap-1.5 text-xs text-muted-foreground",
                        children: [l && (0, a.jsx)("span", {
                            children: l
                        }), l && null != n && (0, a.jsx)("span", {
                            children: "\xb7"
                        }), null != n && (0, a.jsxs)("span", {
                            children: [n, " pages"]
                        })]
                    })]
                })
            }
        },
        39486: function(e, t, n) {
            n.d(t, {
                y: function() {
                    return u
                }
            });
            var a = n(57437),
                r = n(2265),
                l = n(93439),
                o = n(90224),
                s = n(35704),
                i = n(87513);
            let d = {
                    h1: e => {
                        let {
                            children: t
                        } = e;
                        return (0, a.jsx)("h1", {
                            className: "mb-1 text-[13px] font-bold text-foreground",
                            children: t
                        })
                    },
                    h2: e => {
                        let {
                            children: t
                        } = e;
                        return (0, a.jsx)("h2", {
                            className: "mb-1 text-[13px] font-semibold text-foreground",
                            children: t
                        })
                    },
                    h3: e => {
                        let {
                            children: t
                        } = e;
                        return (0, a.jsx)("h3", {
                            className: "mb-1 text-[13px] font-semibold text-foreground",
                            children: t
                        })
                    },
                    h4: e => {
                        let {
                            children: t
                        } = e;
                        return (0, a.jsx)("h4", {
                            className: "mb-1 text-[13px] font-medium text-foreground",
                            children: t
                        })
                    },
                    h5: e => {
                        let {
                            children: t
                        } = e;
                        return (0, a.jsx)("h5", {
                            className: "mb-1 text-[13px] font-medium text-foreground",
                            children: t
                        })
                    },
                    h6: e => {
                        let {
                            children: t
                        } = e;
                        return (0, a.jsx)("h6", {
                            className: "mb-1 text-[13px] font-medium text-foreground",
                            children: t
                        })
                    },
                    p: e => {
                        let {
                            children: t
                        } = e;
                        return (0, a.jsx)("p", {
                            className: "mb-1.5 last:mb-0",
                            children: t
                        })
                    },
                    ul: e => {
                        let {
                            children: t
                        } = e;
                        return (0, a.jsx)("ul", {
                            className: "mb-1.5 list-disc space-y-0.5 pl-4 last:mb-0",
                            children: t
                        })
                    },
                    ol: e => {
                        let {
                            children: t
                        } = e;
                        return (0, a.jsx)("ol", {
                            className: "mb-1.5 list-decimal space-y-0.5 pl-4 last:mb-0",
                            children: t
                        })
                    },
                    li: e => {
                        let {
                            children: t
                        } = e;
                        return (0, a.jsx)("li", {
                            className: "leading-snug",
                            children: t
                        })
                    },
                    strong: e => {
                        let {
                            children: t
                        } = e;
                        return (0, a.jsx)("strong", {
                            className: "font-semibold text-foreground",
                            children: t
                        })
                    },
                    em: e => {
                        let {
                            children: t
                        } = e;
                        return (0, a.jsx)("em", {
                            className: "italic",
                            children: t
                        })
                    },
                    a: e => {
                        let {
                            children: t,
                            href: n
                        } = e;
                        return (0, a.jsx)("a", {
                            href: n,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-[#065fd4] underline hover:no-underline dark:text-primary",
                            children: t
                        })
                    },
                    code: e => {
                        let {
                            children: t
                        } = e;
                        return (0, a.jsx)("code", {
                            className: "rounded bg-black/5 px-1 py-0.5 font-mono text-[12px] dark:bg-white/10",
                            children: t
                        })
                    },
                    pre: e => {
                        let {
                            children: t
                        } = e;
                        return (0, a.jsx)("pre", {
                            className: "my-1.5 overflow-x-auto rounded-md bg-black/5 p-2 font-mono text-[12px] dark:bg-white/10 [&>code]:!rounded-none [&>code]:!bg-transparent [&>code]:!p-0",
                            children: t
                        })
                    },
                    blockquote: e => {
                        let {
                            children: t
                        } = e;
                        return (0, a.jsx)("blockquote", {
                            className: "my-1.5 border-l-2 border-border pl-2 text-muted-foreground",
                            children: t
                        })
                    },
                    hr: () => (0, a.jsx)("hr", {
                        className: "my-2 border-t border-border"
                    })
                },
                c = [o.Z, s.Z];

            function u(e) {
                var t, n;
                let {
                    summary: o,
                    metadataLine: s,
                    categories: u = [],
                    aboutTopics: m = [],
                    accentLine: x,
                    riskLabel: f,
                    accentSectionTitle: p = "Highlight",
                    className: h
                } = e, [g, v] = (0, r.useState)(!1), b = null !== (n = null === (t = null != x ? x : f) || void 0 === t ? void 0 : t.trim()) && void 0 !== n ? n : "", j = u.length > 0 || m.length > 0 || !!b, y = o.length > 140, w = y || j;
                return (0, a.jsxs)("div", {
                    className: (0, i.cn)("rounded-xl bg-[#F2F2F2] px-3 py-2.5 text-[13px] leading-snug text-foreground dark:bg-muted/50", h),
                    children: [(null == s ? void 0 : s.trim()) ? (0, a.jsx)("p", {
                        className: "mb-1.5 font-semibold text-foreground",
                        children: s.trim()
                    }) : null, (0, a.jsx)("div", {
                        className: (0, i.cn)(!g && y && "line-clamp-3"),
                        children: (0, a.jsx)(l.UG, {
                            remarkPlugins: c,
                            components: d,
                            children: o
                        })
                    }), g && j ? (0, a.jsxs)("div", {
                        className: "mt-3 space-y-3 border-t border-black/10 pt-3 dark:border-white/10",
                        children: [u.length > 0 ? (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("p", {
                                className: "mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
                                children: "Categories"
                            }), (0, a.jsx)("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: u.map(e => (0, a.jsx)("span", {
                                    className: "rounded-full border border-border/80 bg-background/80 px-2 py-0.5 text-[11px] text-foreground",
                                    children: e
                                }, e))
                            })]
                        }) : null, m.length > 0 ? (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("p", {
                                className: "mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
                                children: "About topic"
                            }), (0, a.jsx)("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: m.map(e => (0, a.jsx)("span", {
                                    className: "rounded-full border border-border/80 bg-background/80 px-2 py-0.5 text-[11px] text-foreground",
                                    children: e
                                }, e))
                            })]
                        }) : null, b ? (0, a.jsxs)("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: [(0, a.jsx)("span", {
                                className: "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
                                children: p
                            }), (0, a.jsx)("span", {
                                className: "rounded-full border border-amber-600/40 bg-amber-500/15 px-2 py-0.5 text-[11px] font-medium text-amber-900 dark:text-amber-100",
                                children: b
                            })]
                        }) : null]
                    }) : null, w ? (0, a.jsx)("button", {
                        type: "button",
                        onClick: () => v(e => !e),
                        className: "mt-1.5 text-[13px] font-medium text-[#065fd4] hover:underline dark:text-primary",
                        children: g ? "Show less" : "...more"
                    }) : null]
                })
            }
        },
        87513: function(e, t, n) {
            n.d(t, {
                cn: function() {
                    return l
                }
            });
            var a = n(54365),
                r = n(71407);

            function l() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, r.m)((0, a.W)(t))
            }
        },
        25723: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return l
                },
                x: function() {
                    return o
                }
            });
            var a = n(57437),
                r = n(87513);

            function l(e) {
                let {
                    children: t,
                    className: n
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, r.cn)("text-sm text-muted-foreground", n),
                    children: t
                })
            }

            function o(e) {
                return null == e || !1 === e || "" === e ? null : "string" == typeof e || "number" == typeof e ? (0, a.jsx)("p", {
                    className: "mt-1 text-sm text-muted-foreground",
                    children: e
                }) : (0, a.jsx)("div", {
                    className: "mt-1",
                    children: e
                })
            }
        },
        967: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return y
                }
            });
            var a = n(57437),
                r = n(2265),
                l = n(87513),
                o = n(38671),
                s = n(57342),
                i = n(54678),
                d = n(19724),
                c = n(8551),
                u = n(14407),
                m = n(21648),
                x = n(64962),
                f = n(25723);
            let p = (0, r.lazy)(async () => ({
                default: (await Promise.resolve().then(n.bind(n, 88546))).DocumentViewport
            }));

            function h() {
                return (0, a.jsx)("div", {
                    className: "flex h-[600px] items-center justify-center rounded-xl border border-border bg-muted/30",
                    children: (0, a.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [(0, a.jsxs)("div", {
                            className: "relative size-8",
                            children: [(0, a.jsx)("div", {
                                className: "absolute inset-0 rounded-full border-2 border-primary/20"
                            }), (0, a.jsx)("div", {
                                className: "absolute inset-0 animate-spin rounded-full border-2 border-primary border-t-transparent"
                            })]
                        }), (0, a.jsx)("span", {
                            className: "text-sm text-muted-foreground",
                            children: "Loading viewer…"
                        })]
                    })
                })
            }
            var g = n(48736);

            function v(e) {
                let {
                    src: t,
                    alt: n,
                    selectedAnnotationId: o,
                    onAnnotationSelect: s,
                    spatialOverlaySvgInner: i,
                    forcedAspectRatio: d,
                    loadingPlaceholder: u,
                    onNaturalAspectRatio: m,
                    onOpenFocus: x
                } = e, f = null == i ? void 0 : i.trim(), [p, h] = (0, r.useState)(null), [g, v] = (0, r.useState)(!1), [b, j] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    h(null), v(!1), j(!1)
                }, [t]);
                let y = null != d || null != u,
                    w = null != d ? d : p,
                    k = null != p ? p : w,
                    N = null == w || null == k || k <= w;
                return (0, a.jsxs)("div", {
                    className: (0, l.cn)("relative cursor-zoom-in overflow-hidden rounded-xl border border-border focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2", y && "flex items-center justify-center bg-muted", y && null == w && "aspect-video"),
                    style: y && null != w ? {
                        aspectRatio: w
                    } : void 0,
                    role: "button",
                    tabIndex: 0,
                    "aria-label": "Open ".concat(null != n ? n : "image"),
                    onClick: x,
                    onKeyDown: e => {
                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), null == x || x())
                    },
                    children: [b ? null : (0, a.jsxs)("div", {
                        className: (0, l.cn)("relative", y ? N ? "w-full" : "h-full" : "w-full"),
                        style: y && null != k ? {
                            aspectRatio: k
                        } : void 0,
                        children: [(0, a.jsx)("img", {
                            src: t,
                            alt: null != n ? n : "Image",
                            loading: "lazy",
                            onLoad: e => {
                                let t = e.currentTarget;
                                if (t.naturalWidth > 0 && t.naturalHeight > 0) {
                                    let e = t.naturalWidth / t.naturalHeight;
                                    h(e), null == m || m(e)
                                }
                                v(!0)
                            },
                            onError: () => j(!0),
                            className: (0, l.cn)(y ? "size-full object-cover" : "h-auto w-full", !!u && !g && "invisible")
                        }), f && (g || null == u) ? (0, a.jsx)(c.t, {
                            svgInnerMarkup: f,
                            selectedAnnotationId: o,
                            onAnnotationClick: null != s ? s : void 0
                        }) : null]
                    }), !u || g || b ? null : (0, a.jsx)("div", {
                        className: "absolute inset-0",
                        children: u
                    })]
                })
            }

            function b(e) {
                let {
                    src: t,
                    alt: n,
                    poster: l,
                    selectedAnnotationId: o,
                    onAnnotationSelect: s,
                    spatialOverlaySvgInner: i,
                    currentTime: d,
                    videoRef: u,
                    onOpenFocus: m
                } = e, [x, f] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    let e = u.current;
                    if (!e) return;
                    let t = () => f(!1),
                        n = () => f(!0);
                    return e.addEventListener("play", t), e.addEventListener("pause", n), () => {
                        e.removeEventListener("play", t), e.removeEventListener("pause", n)
                    }
                }, [u]);
                let p = null == i ? void 0 : i.trim(),
                    h = (0, r.useCallback)(() => {
                        null == m || m()
                    }, [m]);
                return (0, a.jsxs)("div", {
                    className: "relative cursor-zoom-in overflow-hidden rounded-xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
                    role: "button",
                    tabIndex: 0,
                    "aria-label": "Open ".concat(null != n ? n : "video"),
                    onClick: h,
                    onKeyDown: e => {
                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), h())
                    },
                    children: [(0, a.jsx)("video", {
                        ref: u,
                        src: t,
                        "aria-label": null != n ? n : "Video",
                        poster: l || void 0,
                        autoPlay: !0,
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        className: "aspect-video w-full rounded-xl bg-black"
                    }), p ? (0, a.jsx)(c.t, {
                        svgInnerMarkup: p,
                        selectedAnnotationId: o,
                        onAnnotationClick: null != s ? s : void 0,
                        currentTime: d
                    }) : null, x && (0, a.jsx)("div", {
                        className: "pointer-events-none absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full bg-black/70",
                        children: (0, a.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            fill: "white",
                            className: "ml-0.5 size-5",
                            children: (0, a.jsx)("path", {
                                d: "M8 5v14l11-7z"
                            })
                        })
                    })]
                })
            }

            function j(e) {
                let {
                    pageCount: t,
                    fileType: n
                } = e;
                return (0, a.jsxs)("div", {
                    "data-document-placeholder": !0,
                    className: "flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-muted/30 py-16",
                    children: [(0, a.jsx)(g.Z, {
                        className: "size-12 text-muted-foreground"
                    }), (0, a.jsxs)("div", {
                        className: "flex items-center gap-1.5 text-xs text-muted-foreground",
                        children: [n && (0, a.jsx)("span", {
                            children: n
                        }), n && null != t && (0, a.jsx)("span", {
                            children: "\xb7"
                        }), null != t && (0, a.jsxs)("span", {
                            children: [t, " pages"]
                        })]
                    })]
                })
            }

            function y(e) {
                let {
                    type: t,
                    title: n,
                    description: c,
                    src: u,
                    alt: g,
                    poster: y,
                    omitVideoViewport: k = !1,
                    annotations: N = [],
                    selectedAnnotationId: J,
                    onAnnotationSelect: C,
                    className: T,
                    duration: A,
                    currentTime: E = 0,
                    onTimeChange: z,
                    tablePosition: S,
                    tracks: I = [],
                    temporalSegments: M = [],
                    detailSlot: L,
                    clips: F,
                    selectedClipId: D,
                    onClipSelect: R,
                    annotationTableTitle: P,
                    transcriptSegments: O,
                    audioSrc: _,
                    audioTitle: Z,
                    pageCount: B,
                    fileType: W,
                    spatialOverlaySvgInner: V,
                    forcedAspectRatio: q,
                    loadingPlaceholder: Y,
                    onNaturalAspectRatio: X
                } = e, H = null != S ? S : "document" === t ? "right" : "bottom", U = (0, r.useRef)(null), K = (0, r.useRef)(null), [Q, $] = (0, r.useState)(0), G = (0, r.useCallback)(e => {
                    K.current = e, k && e && $(e => e + 1)
                }, [k]), [ee, et] = (0, r.useState)(E), [en, ea] = (0, r.useState)(null != A ? A : 0), [er, el] = (0, r.useState)([]), [eo, es] = (0, r.useState)(null), [ei, ed] = (0, r.useState)(null), [ec, eu] = (0, r.useState)(null), [em, ex] = (0, r.useState)(0), ef = (0, r.useRef)(E), ep = (0, r.useRef)(!1), eh = void 0 !== J, eg = eh ? J : eo, ev = (0, r.useCallback)(e => {
                    eh || es(e), null == C || C(e)
                }, [eh, C]), eb = (0, r.useCallback)(e => {
                    el(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
                }, []), ej = (0, r.useMemo)(() => (0, x.XX)(N, er), [N, er]), ey = z ? E : ee, ew = null != A ? A : en;
                (0, r.useEffect)(() => {
                    ef.current = ey
                }, [ey]), (0, r.useEffect)(() => {
                    if (k) return;
                    let e = U.current;
                    if (!e) return;
                    let t = 0,
                        n = () => {
                            if (!e.paused && !e.ended) {
                                let t = e.currentTime;
                                z ? z(t) : et(t)
                            }
                            t = requestAnimationFrame(n)
                        };
                    t = requestAnimationFrame(n);
                    let a = () => {
                        null == A && ea(e.duration)
                    };
                    return e.addEventListener("loadedmetadata", a), () => {
                        cancelAnimationFrame(t), e.removeEventListener("loadedmetadata", a)
                    }
                }, [k, z, A]), (0, r.useEffect)(() => {
                    if (!k || !_) return;
                    let e = K.current;
                    if (!e) return;
                    let t = 0,
                        n = () => {
                            if (!e.paused && !e.ended) {
                                let t = e.currentTime;
                                z ? z(t) : et(t)
                            }
                            t = requestAnimationFrame(n)
                        };
                    t = requestAnimationFrame(n);
                    let a = () => {
                        null == A && ea(e.duration)
                    };
                    return e.addEventListener("loadedmetadata", a), () => {
                        cancelAnimationFrame(t), e.removeEventListener("loadedmetadata", a)
                    }
                }, [k, _, z, A, Q]);
                let ek = (0, r.useRef)(!1),
                    eN = (0, r.useRef)(null);
                (0, r.useEffect)(() => {
                    let e = k && _ ? K.current : U.current;
                    if (!e) return;
                    let t = () => {
                        if (ek.current = !1, null != eN.current) {
                            let t = eN.current;
                            eN.current = null, ek.current = !0, e.currentTime = t
                        }
                    };
                    return e.addEventListener("seeked", t), () => e.removeEventListener("seeked", t)
                }, [k, _, Q]);
                let eJ = (0, r.useCallback)(e => {
                        let t = k && _ ? K.current : U.current;
                        t && (ek.current ? eN.current = e : (ek.current = !0, t.currentTime = e)), z ? z(e) : et(e)
                    }, [k, _, z]),
                    eC = "video" === t && !k && (0, x.E6)(I, ew),
                    eT = "video" === t && !k && M.length > 0 && ew > 0,
                    eA = (0, r.useCallback)(e => {
                        null != e.timestamp && eJ(e.timestamp)
                    }, [eJ]),
                    eE = (0, r.useCallback)(() => {
                        ex(ey), eu("video")
                    }, [ey]);
                (0, r.useEffect)(() => {
                    if ("video" !== ec || k) return;
                    let e = U.current;
                    if (e) {
                        if (ep.current = !e.paused && !e.ended, ep.current) try {
                            e.pause()
                        } catch (e) {}
                        return () => {
                            let e = U.current;
                            if (e && (e.currentTime = ef.current, ep.current)) try {
                                e.play().catch(() => void 0)
                            } catch (e) {}
                        }
                    }
                }, [ec, k]);
                let ez = (0, f.x)(c),
                    eS = null != O ? O : [],
                    eI = "video" === t && eS.length > 0,
                    eM = eI && N.length > 0,
                    eL = eI && 0 === N.length,
                    eF = eI ? (0, a.jsxs)("div", {
                        className: "flex min-h-0 w-full flex-col gap-3",
                        children: [_ ? (0, a.jsx)(s.r, {
                            ref: k && _ ? G : void 0,
                            src: _,
                            title: Z
                        }) : null, (0, a.jsx)(d.O, {
                            segments: eS,
                            selectedSegmentId: ei,
                            onSegmentClick: e => {
                                eJ(e.startTime), ed(e.id)
                            }
                        })]
                    }) : null,
                    eD = N.length > 0 ? (0, a.jsx)(o.D, {
                        annotations: N,
                        selectedAnnotationId: eg,
                        onAnnotationSelect: ev,
                        onSeekToAnnotation: "video" === t ? eA : void 0,
                        hiddenAnnotationIds: er,
                        onAnnotationVisibilityToggle: eb,
                        clips: F,
                        selectedClipId: D,
                        onClipSelect: R,
                        title: P
                    }) : null,
                    eR = (0, a.jsxs)(a.Fragment, {
                        children: ["image" === t && (0, a.jsx)(v, {
                            src: u,
                            alt: g,
                            selectedAnnotationId: eg,
                            onAnnotationSelect: ev,
                            spatialOverlaySvgInner: V,
                            forcedAspectRatio: q,
                            loadingPlaceholder: Y,
                            onNaturalAspectRatio: X,
                            onOpenFocus: u ? () => eu("image") : void 0
                        }), "video" === t && !k && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(b, {
                                src: u,
                                alt: g,
                                poster: y,
                                videoRef: U,
                                selectedAnnotationId: eg,
                                onAnnotationSelect: ev,
                                spatialOverlaySvgInner: V,
                                currentTime: ey,
                                onOpenFocus: u ? eE : void 0
                            }), eC ? (0, a.jsx)(m.WE, {
                                duration: ew,
                                currentTime: ey,
                                annotations: ej,
                                tracks: I,
                                selectedAnnotationId: eg,
                                onTimeChange: eJ,
                                onAnnotationSelect: ev
                            }) : null, eT ? (0, a.jsx)(i.U, {
                                duration: ew,
                                currentTime: ey,
                                segments: M,
                                onTimeChange: eJ
                            }) : null, L]
                        }), "video" === t && k && L ? L : null, "document" === t && (u ? (0, a.jsx)(r.Suspense, {
                            fallback: (0, a.jsx)(h, {}),
                            children: (0, a.jsx)(p, {
                                src: u,
                                alt: g,
                                pageCount: B,
                                fileType: W,
                                spatialOverlaySvgInner: V,
                                selectedAnnotationId: eg,
                                onAnnotationSelect: e => ev(e)
                            })
                        }) : (0, a.jsx)(j, {
                            pageCount: B,
                            fileType: W
                        }))]
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: (0, l.cn)("overflow-hidden rounded-2xl border bg-card p-6 text-card-foreground shadow-sm", T),
                        children: [(n || ez) && (0, a.jsxs)("div", {
                            className: "mb-5",
                            children: [n && (0, a.jsx)("h3", {
                                className: "text-base font-semibold leading-tight",
                                children: n
                            }), ez]
                        }), eM ? (0, a.jsxs)("div", {
                            className: "flex flex-col gap-5",
                            children: [(0, a.jsx)("div", {
                                className: "flex w-full flex-col gap-3",
                                children: eR
                            }), (0, a.jsxs)("div", {
                                className: "flex flex-col gap-5 lg:flex-row lg:items-start",
                                children: [(0, a.jsx)("div", {
                                    className: "min-w-0 flex-1",
                                    children: eD
                                }), (0, a.jsx)("div", {
                                    className: "w-full min-w-0 lg:w-[340px] lg:shrink-0",
                                    children: eF
                                })]
                            })]
                        }) : eL ? k && !L ? (0, a.jsx)("div", {
                            className: "w-full",
                            children: eF
                        }) : (0, a.jsxs)("div", {
                            className: "flex flex-col gap-5",
                            children: [(0, a.jsx)("div", {
                                className: "flex w-full flex-col gap-3",
                                children: eR
                            }), (0, a.jsx)("div", {
                                className: "w-full",
                                children: eF
                            })]
                        }) : (0, a.jsxs)("div", {
                            className: (0, l.cn)("flex gap-5", "right" === H ? "flex-col lg:flex-row" : "flex-col"),
                            children: [(0, a.jsx)("div", {
                                className: (0, l.cn)("right" === H ? "min-w-0 lg:flex-1" : "w-full", "flex flex-col gap-3"),
                                children: eR
                            }), eD ? (0, a.jsx)("div", {
                                className: (0, l.cn)("right" === H ? "lg:w-[340px] lg:shrink-0" : "w-full"),
                                children: eD
                            }) : null]
                        })]
                    }), (0, a.jsx)(w, {
                        type: ec,
                        src: u,
                        alt: null != g ? g : n,
                        poster: y,
                        initialTime: em,
                        onVideoTimeChange: eJ,
                        spatialOverlaySvgInner: V,
                        selectedAnnotationId: eg,
                        onAnnotationSelect: ev,
                        open: null != ec,
                        onOpenChange: e => eu(e ? ec : null)
                    })]
                })
            }

            function w(e) {
                let {
                    type: t,
                    src: n,
                    alt: r,
                    poster: l,
                    initialTime: o,
                    onVideoTimeChange: s,
                    spatialOverlaySvgInner: i,
                    selectedAnnotationId: d,
                    onAnnotationSelect: m,
                    open: x,
                    onOpenChange: f
                } = e;
                if (!t || !n) return null;
                let p = r || ("image" === t ? "Focused image" : "Focused video"),
                    h = null == i ? void 0 : i.trim();
                return (0, a.jsx)(u.Vq, {
                    open: x,
                    onOpenChange: f,
                    children: (0, a.jsxs)(u.cZ, {
                        className: "z-[10001] w-auto max-w-[96vw] gap-0 overflow-hidden border-0 bg-transparent p-0 text-white shadow-none",
                        children: [(0, a.jsx)(u.$N, {
                            className: "sr-only",
                            children: p
                        }), (0, a.jsxs)(u.Be, {
                            className: "sr-only",
                            children: ["Focused ", t, " preview. Press escape or use the close button to return to the media card."]
                        }), "image" === t ? (0, a.jsxs)("div", {
                            className: "relative inline-block",
                            children: [(0, a.jsx)("img", {
                                src: n,
                                alt: p,
                                className: "block h-auto max-h-[90vh] w-auto max-w-[96vw] rounded-lg object-contain"
                            }), h ? (0, a.jsx)(c.t, {
                                svgInnerMarkup: h,
                                selectedAnnotationId: d,
                                onAnnotationClick: null != m ? m : void 0
                            }) : null]
                        }) : (0, a.jsx)(k, {
                            src: n,
                            poster: l,
                            label: p,
                            initialTime: null != o ? o : 0,
                            onTimeChange: s
                        })]
                    })
                })
            }

            function k(e) {
                let {
                    src: t,
                    poster: n,
                    label: l,
                    initialTime: o,
                    onTimeChange: s
                } = e, i = (0, r.useRef)(null);
                return (0, r.useEffect)(() => {
                    let e = i.current;
                    e && (e.currentTime = o)
                }, [o, t]), (0, a.jsx)("video", {
                    ref: i,
                    src: t,
                    poster: n || void 0,
                    "aria-label": l,
                    controls: !0,
                    autoPlay: !0,
                    playsInline: !0,
                    className: "block h-auto max-h-[90vh] w-auto max-w-[96vw] rounded-lg bg-black object-contain",
                    onTimeUpdate: e => null == s ? void 0 : s(e.currentTarget.currentTime),
                    onSeeking: e => null == s ? void 0 : s(e.currentTarget.currentTime)
                })
            }
        },
        65272: function(e, t, n) {
            function a(e, t, n, a) {
                var o;
                let s = null !== (o = e.get(t)) && void 0 !== o ? o : {
                        annotations: [],
                        svg: []
                    },
                    i = function(e) {
                        var t;
                        let n = null == e ? void 0 : e.trim();
                        if (!n || "undefined" == typeof window || "undefined" == typeof DOMParser || "undefined" == typeof XMLSerializer) return;
                        let a = new DOMParser().parseFromString("<svg>".concat(n, "</svg>"), "image/svg+xml");
                        if (a.querySelector("parsererror")) return;
                        let o = a.documentElement,
                            s = 1 === o.children.length && (null === (t = o.children[0]) || void 0 === t ? void 0 : t.tagName.toLowerCase()) === "svg" ? o.children[0] : o,
                            i = e => {
                                let t = e.tagName.toLowerCase();
                                if (!r.has(t)) return null;
                                let n = a.createElementNS("http://www.w3.org/2000/svg", t);
                                for (let t of Array.from(e.attributes)) {
                                    let e = t.name.toLowerCase(),
                                        a = t.value;
                                    l.has(e) && (/url\s*\(|javascript:|data:/i.test(a) || n.setAttribute(e, a))
                                }
                                for (let t of Array.from(e.children)) {
                                    let e = i(t);
                                    e && n.appendChild(e)
                                }
                                return n
                            },
                            d = a.createDocumentFragment();
                        for (let e of Array.from(s.children)) {
                            let t = i(e);
                            t && d.appendChild(t)
                        }
                        let c = a.createElementNS("http://www.w3.org/2000/svg", "g");
                        return c.appendChild(d), Array.from(c.children).map(e => new XMLSerializer().serializeToString(e)).join("\n").trim() || void 0
                    }(a);
                s.annotations.push(function(e) {
                    var t, n, a;
                    let r = null === (t = e.metadata) || void 0 === t ? void 0 : t.confidence;
                    return {
                        id: e.id,
                        label: null !== (n = e.label) && void 0 !== n ? n : e.id,
                        color: null !== (a = e.color) && void 0 !== a ? a : "#2AA1FF",
                        spatialKind: "box",
                        confidence: "number" == typeof r ? r : void 0,
                        page: "page_index" in e ? e.page_index : void 0
                    }
                }(n)), i && s.svg.push(i), e.set(t, s)
            }
            n.d(t, {
                T: function() {
                    return s
                }
            });
            let r = new Set(["g", "rect", "path", "polygon", "polyline", "circle", "ellipse", "line"]),
                l = new Set(["data-annotation-id", "data-selected", "data-shape", "data-timestamp", "data-end-timestamp", "fill", "fill-opacity", "stroke", "stroke-opacity", "stroke-width", "opacity", "x", "y", "width", "height", "d", "cx", "cy", "r", "rx", "ry", "points", "x1", "x2", "y1", "y2", "transform"]);

            function o(e) {
                return new Map([...e.entries()].map(e => {
                    let [t, n] = e;
                    return [t, {
                        annotations: n.annotations,
                        spatialOverlaySvgInner: n.svg.length > 0 ? n.svg.join("\n") : void 0
                    }]
                }))
            }

            function s(e) {
                let t = new Map,
                    n = new Map;
                for (let r of null != e ? e : []) "preview.image-annotation" === r.object ? a(t, r.img_id, r, r.data) : "preview.document-page-annotation" === r.object && a(n, r.doc_id, r, r.data);
                return {
                    images: o(t),
                    documents: o(n)
                }
            }
        },
        78217: function(e, t, n) {
            n.d(t, {
                $F: function() {
                    return b
                },
                Gw: function() {
                    return w
                },
                c0: function() {
                    return v
                },
                nB: function() {
                    return A
                },
                se: function() {
                    return g
                }
            });
            var a = n(57437),
                r = n(2265),
                l = n(57342),
                o = n(88546),
                s = n(87513),
                i = n(967),
                d = n(34587),
                c = n(21648),
                u = n(65272);
            let m = "overflow-visible rounded-none border-0 bg-transparent p-0 shadow-none",
                x = "vlm-preview-skeleton-styles",
                f = /^(img|vid|aud|doc|arr|data)_[0-9a-zA-Z]+(?:\.[a-zA-Z0-9]+)?$/,
                p = [{
                    x: 8,
                    y: 44,
                    size: 2.4,
                    alpha: .48,
                    dx: -3,
                    dy: 2,
                    delay: -.2
                }, {
                    x: 18,
                    y: 34,
                    size: 1.9,
                    alpha: .42,
                    dx: 2,
                    dy: -3,
                    delay: -1.2
                }, {
                    x: 25,
                    y: 52,
                    size: 2.7,
                    alpha: .72,
                    dx: 4,
                    dy: 2,
                    delay: -2.4
                }, {
                    x: 34,
                    y: 26,
                    size: 1.6,
                    alpha: .36,
                    dx: -2,
                    dy: 3,
                    delay: -.8
                }, {
                    x: 42,
                    y: 45,
                    size: 2.2,
                    alpha: .62,
                    dx: 3,
                    dy: -2,
                    delay: -1.8
                }, {
                    x: 49,
                    y: 62,
                    size: 1.5,
                    alpha: .34,
                    dx: -4,
                    dy: -1,
                    delay: -2.8
                }, {
                    x: 55,
                    y: 32,
                    size: 2.6,
                    alpha: .68,
                    dx: 2,
                    dy: 4,
                    delay: -.4
                }, {
                    x: 63,
                    y: 51,
                    size: 1.8,
                    alpha: .44,
                    dx: -3,
                    dy: -2,
                    delay: -1.4
                }, {
                    x: 70,
                    y: 38,
                    size: 2.3,
                    alpha: .58,
                    dx: 4,
                    dy: 3,
                    delay: -2.1
                }, {
                    x: 79,
                    y: 56,
                    size: 1.5,
                    alpha: .32,
                    dx: -2,
                    dy: -4,
                    delay: -3.1
                }, {
                    x: 87,
                    y: 42,
                    size: 2,
                    alpha: .46,
                    dx: 3,
                    dy: 1,
                    delay: -.9
                }, {
                    x: 38,
                    y: 72,
                    size: 1.7,
                    alpha: .38,
                    dx: 2,
                    dy: -3,
                    delay: -2.7
                }, {
                    x: 12,
                    y: 62,
                    size: 1.4,
                    alpha: .36,
                    dx: 3,
                    dy: -2,
                    delay: -3.4
                }, {
                    x: 21,
                    y: 70,
                    size: 2.1,
                    alpha: .52,
                    dx: -2,
                    dy: -4,
                    delay: -.6
                }, {
                    x: 29,
                    y: 38,
                    size: 1.3,
                    alpha: .34,
                    dx: 4,
                    dy: 1,
                    delay: -2.9
                }, {
                    x: 45,
                    y: 28,
                    size: 2.8,
                    alpha: .64,
                    dx: -3,
                    dy: 3,
                    delay: -1.6
                }, {
                    x: 52,
                    y: 78,
                    size: 1.8,
                    alpha: .42,
                    dx: 2,
                    dy: -2,
                    delay: -3.7
                }, {
                    x: 58,
                    y: 44,
                    size: 1.2,
                    alpha: .3,
                    dx: -2,
                    dy: 4,
                    delay: -2.2
                }, {
                    x: 66,
                    y: 68,
                    size: 2.5,
                    alpha: .6,
                    dx: 3,
                    dy: -3,
                    delay: -1
                }, {
                    x: 73,
                    y: 29,
                    size: 1.6,
                    alpha: .38,
                    dx: -4,
                    dy: 2,
                    delay: -3
                }, {
                    x: 82,
                    y: 71,
                    size: 2.2,
                    alpha: .5,
                    dx: 2,
                    dy: -4,
                    delay: -1.9
                }, {
                    x: 91,
                    y: 56,
                    size: 1.3,
                    alpha: .32,
                    dx: -3,
                    dy: -1,
                    delay: -2.5
                }, {
                    x: 31,
                    y: 82,
                    size: 1.5,
                    alpha: .35,
                    dx: 4,
                    dy: -2,
                    delay: -.3
                }, {
                    x: 61,
                    y: 22,
                    size: 1.7,
                    alpha: .4,
                    dx: -2,
                    dy: 3,
                    delay: -3.3
                }],
                h = '\n@keyframes vlm-preview-skeleton-title-shimmer {\n  0% {\n    background-position: 140% 50%;\n    opacity: 0.68;\n  }\n  45% {\n    opacity: 1;\n  }\n  100% {\n    background-position: -80% 50%;\n    opacity: 0.72;\n  }\n}\n\n@keyframes vlm-preview-skeleton-surface-shimmer {\n  0%,\n  52% {\n    opacity: 0;\n    transform: translateX(-110%) rotate(8deg);\n  }\n  63% {\n    opacity: 0.64;\n  }\n  78% {\n    opacity: 0.18;\n    transform: translateX(135%) rotate(8deg);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(135%) rotate(8deg);\n  }\n}\n\n@keyframes vlm-preview-skeleton-dot-shimmer {\n  0% {\n    background: hsl(var(--muted-foreground) / 0.46);\n    box-shadow: 0 0 2px hsl(var(--muted-foreground) / 0.18);\n    opacity: calc(var(--dot-alpha) * 0.38);\n    transform: translate3d(calc(var(--dot-drift-x) * -0.3), calc(var(--dot-drift-y) * -0.2), 0) scale(0.72);\n  }\n  45% {\n    background: hsl(var(--foreground) / 0.86);\n    box-shadow:\n      0 0 7px hsl(var(--foreground) / 0.22),\n      0 0 14px hsl(var(--background) / 0.82);\n    opacity: var(--dot-alpha);\n    transform: translate3d(var(--dot-drift-x), var(--dot-drift-y), 0) scale(1.24);\n  }\n  100% {\n    background: hsl(var(--muted-foreground) / 0.58);\n    box-shadow: 0 0 4px hsl(var(--muted-foreground) / 0.18);\n    opacity: calc(var(--dot-alpha) * 0.48);\n    transform: translate3d(calc(var(--dot-drift-x) * 0.35), calc(var(--dot-drift-y) * 0.25), 0) scale(0.88);\n  }\n}\n\n@keyframes vlm-preview-skeleton-dot-roam-0 {\n  0% {\n    left: 1.5rem;\n    top: 2.75rem;\n    transform: scale(0.96);\n  }\n  24% {\n    left: calc(100% - var(--dot-cluster-w) - 1.25rem);\n    top: 3.25rem;\n    transform: scale(1.03);\n  }\n  48% {\n    left: calc(100% - var(--dot-cluster-w) - 1.75rem);\n    top: calc(100% - var(--dot-cluster-h) - 1rem);\n    transform: scale(0.98);\n  }\n  72% {\n    left: 38%;\n    top: calc(100% - var(--dot-cluster-h) - 1.35rem);\n    transform: scale(1.04);\n  }\n  100% {\n    left: 1.5rem;\n    top: 2.75rem;\n    transform: scale(0.96);\n  }\n}\n\n@keyframes vlm-preview-skeleton-dot-roam-1 {\n  0% {\n    left: 42%;\n    top: 2.6rem;\n    transform: scale(1);\n  }\n  21% {\n    left: 1.25rem;\n    top: calc(100% - var(--dot-cluster-h) - 1.2rem);\n    transform: scale(0.94);\n  }\n  47% {\n    left: calc(100% - var(--dot-cluster-w) - 1.4rem);\n    top: calc(100% - var(--dot-cluster-h) - 1.6rem);\n    transform: scale(1.05);\n  }\n  73% {\n    left: calc(100% - var(--dot-cluster-w) - 2rem);\n    top: 3rem;\n    transform: scale(0.98);\n  }\n  100% {\n    left: 42%;\n    top: 2.6rem;\n    transform: scale(1);\n  }\n}\n\n@keyframes vlm-preview-skeleton-dot-roam-2 {\n  0% {\n    left: calc(100% - var(--dot-cluster-w) - 1.6rem);\n    top: 3rem;\n    transform: scale(0.98);\n  }\n  18% {\n    left: 1.4rem;\n    top: 3.6rem;\n    transform: scale(1.04);\n  }\n  39% {\n    left: 46%;\n    top: calc(100% - var(--dot-cluster-h) - 1rem);\n    transform: scale(0.96);\n  }\n  68% {\n    left: calc(100% - var(--dot-cluster-w) - 1.2rem);\n    top: calc(100% - var(--dot-cluster-h) - 1.9rem);\n    transform: scale(1.03);\n  }\n  100% {\n    left: calc(100% - var(--dot-cluster-w) - 1.6rem);\n    top: 3rem;\n    transform: scale(0.98);\n  }\n}\n\n@keyframes vlm-preview-skeleton-dot-roam-3 {\n  0% {\n    left: 1.25rem;\n    top: calc(100% - var(--dot-cluster-h) - 1.2rem);\n    transform: scale(0.95);\n  }\n  28% {\n    left: 34%;\n    top: 2.9rem;\n    transform: scale(1.05);\n  }\n  51% {\n    left: calc(100% - var(--dot-cluster-w) - 1.4rem);\n    top: 4.5rem;\n    transform: scale(0.98);\n  }\n  78% {\n    left: 52%;\n    top: calc(100% - var(--dot-cluster-h) - 1.1rem);\n    transform: scale(1.02);\n  }\n  100% {\n    left: 1.25rem;\n    top: calc(100% - var(--dot-cluster-h) - 1.2rem);\n    transform: scale(0.95);\n  }\n}\n\n@keyframes vlm-preview-skeleton-dot-roam-4 {\n  0% {\n    left: 24%;\n    top: 3.1rem;\n    transform: scale(1.02);\n  }\n  19% {\n    left: calc(100% - var(--dot-cluster-w) - 1.8rem);\n    top: calc(100% - var(--dot-cluster-h) - 1.3rem);\n    transform: scale(0.94);\n  }\n  46% {\n    left: 1.45rem;\n    top: 4.25rem;\n    transform: scale(1.06);\n  }\n  71% {\n    left: 58%;\n    top: calc(100% - var(--dot-cluster-h) - 1.8rem);\n    transform: scale(0.98);\n  }\n  100% {\n    left: 24%;\n    top: 3.1rem;\n    transform: scale(1.02);\n  }\n}\n\n@keyframes vlm-preview-skeleton-dot-roam-5 {\n  0% {\n    left: calc(100% - var(--dot-cluster-w) - 1.25rem);\n    top: calc(100% - var(--dot-cluster-h) - 1.35rem);\n    transform: scale(1.04);\n  }\n  26% {\n    left: 48%;\n    top: 2.8rem;\n    transform: scale(0.97);\n  }\n  53% {\n    left: 1.3rem;\n    top: calc(100% - var(--dot-cluster-h) - 1.6rem);\n    transform: scale(1.02);\n  }\n  79% {\n    left: calc(100% - var(--dot-cluster-w) - 2rem);\n    top: 3.8rem;\n    transform: scale(0.96);\n  }\n  100% {\n    left: calc(100% - var(--dot-cluster-w) - 1.25rem);\n    top: calc(100% - var(--dot-cluster-h) - 1.35rem);\n    transform: scale(1.04);\n  }\n}\n\n@keyframes vlm-preview-skeleton-dot-roam-6 {\n  0% {\n    left: 58%;\n    top: 3.35rem;\n    transform: scale(0.97);\n  }\n  22% {\n    left: 1.35rem;\n    top: 3rem;\n    transform: scale(1.05);\n  }\n  43% {\n    left: 23%;\n    top: calc(100% - var(--dot-cluster-h) - 1.1rem);\n    transform: scale(0.95);\n  }\n  70% {\n    left: calc(100% - var(--dot-cluster-w) - 1.35rem);\n    top: calc(100% - var(--dot-cluster-h) - 1.5rem);\n    transform: scale(1.03);\n  }\n  100% {\n    left: 58%;\n    top: 3.35rem;\n    transform: scale(0.97);\n  }\n}\n\n@keyframes vlm-preview-skeleton-dot-school-breathe {\n  0%,\n  100% {\n    opacity: 0.76;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n.vlm-preview-skeleton {\n  box-shadow: inset 0 1px 0 hsl(var(--background) / 0.72);\n}\n\n.vlm-preview-skeleton::before {\n  animation: vlm-preview-skeleton-surface-shimmer 4.75s ease-in-out infinite;\n  background: linear-gradient(\n    100deg,\n    transparent 28%,\n    hsl(var(--background) / 0.7) 44%,\n    hsl(var(--foreground) / 0.04) 52%,\n    transparent 72%\n  );\n  content: "";\n  inset: -35%;\n  pointer-events: none;\n  position: absolute;\n  width: 64%;\n}\n\n.vlm-preview-skeleton-title {\n  animation: vlm-preview-skeleton-title-shimmer 2.8s ease-in-out infinite;\n  background-image: linear-gradient(\n    100deg,\n    hsl(var(--muted-foreground) / 0.72) 0%,\n    hsl(var(--foreground) / 0.94) 42%,\n    hsl(var(--muted-foreground) / 0.48) 68%,\n    hsl(var(--muted-foreground) / 0.72) 100%\n  );\n  background-size: 240% 100%;\n  color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n\n.vlm-preview-skeleton-dots {\n  --dot-cluster-h: 4.25rem;\n  --dot-cluster-w: 9rem;\n  animation:\n    vlm-preview-skeleton-dot-roam-0 13s ease-in-out infinite,\n    vlm-preview-skeleton-dot-school-breathe 4.8s ease-in-out infinite;\n  height: var(--dot-cluster-h);\n  left: 1.5rem;\n  opacity: 0.95;\n  top: 2.75rem;\n  width: var(--dot-cluster-w);\n}\n\n.vlm-preview-skeleton-dots-path-1 {\n  animation-name: vlm-preview-skeleton-dot-roam-1, vlm-preview-skeleton-dot-school-breathe;\n}\n\n.vlm-preview-skeleton-dots-path-2 {\n  animation-name: vlm-preview-skeleton-dot-roam-2, vlm-preview-skeleton-dot-school-breathe;\n}\n\n.vlm-preview-skeleton-dots-path-3 {\n  animation-name: vlm-preview-skeleton-dot-roam-3, vlm-preview-skeleton-dot-school-breathe;\n}\n\n.vlm-preview-skeleton-dots-path-4 {\n  animation-name: vlm-preview-skeleton-dot-roam-4, vlm-preview-skeleton-dot-school-breathe;\n}\n\n.vlm-preview-skeleton-dots-path-5 {\n  animation-name: vlm-preview-skeleton-dot-roam-5, vlm-preview-skeleton-dot-school-breathe;\n}\n\n.vlm-preview-skeleton-dots-path-6 {\n  animation-name: vlm-preview-skeleton-dot-roam-6, vlm-preview-skeleton-dot-school-breathe;\n}\n\n.vlm-preview-skeleton-dot {\n  animation: vlm-preview-skeleton-dot-shimmer 3.4s ease-in-out infinite;\n  animation-delay: var(--dot-delay);\n  background: hsl(var(--muted-foreground) / 0.56);\n  border-radius: 9999px;\n  box-shadow: 0 0 8px hsl(var(--background) / 0.7);\n  height: var(--dot-size);\n  left: var(--dot-x);\n  opacity: var(--dot-alpha);\n  position: absolute;\n  top: var(--dot-y);\n  width: var(--dot-size);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .vlm-preview-skeleton::before,\n  .vlm-preview-skeleton-title,\n  .vlm-preview-skeleton-dots,\n  .vlm-preview-skeleton-dot {\n    animation: none;\n  }\n\n  .vlm-preview-skeleton-title {\n    color: hsl(var(--muted-foreground));\n  }\n\n  .vlm-preview-skeleton-dot {\n    opacity: calc(var(--dot-alpha) * 0.7);\n  }\n}\n';

            function g(e) {
                let {
                    stream: t,
                    className: n
                } = e, l = (0, r.useMemo)(() => (0, u.T)(t.annotations), [t.annotations]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(I, {}), (0, a.jsx)(v, {
                        canvas: t.canvas,
                        records: t.records,
                        annotationIndex: l,
                        className: n
                    })]
                })
            }

            function v(e) {
                let {
                    canvas: t,
                    records: n,
                    annotationIndex: r,
                    className: l
                } = e;
                if (0 === t.data.length) return (0, a.jsx)("div", {
                    className: (0, s.cn)("rounded-xl border border-dashed border-border py-8 text-center text-sm text-muted-foreground", l),
                    children: "Empty preview canvas"
                });
                let o = function(e, t) {
                    var n, a;
                    if (e.cols <= 2 || !e.data.some(e => j(e.ref, t))) return e.data;
                    let r = new Map;
                    for (let t of e.data) r.set(t.row, [...null !== (n = r.get(t.row)) && void 0 !== n ? n : [], t]);
                    let l = [],
                        o = 0;
                    for (let n of [...r.keys()].sort((e, t) => e - t)) {
                        let s = null !== (a = r.get(n)) && void 0 !== a ? a : [],
                            i = s.filter(e => !j(e.ref, t)),
                            d = s.filter(e => j(e.ref, t));
                        if (i.length > 0) {
                            let e = Math.max(...i.map(e => {
                                var t;
                                return null !== (t = e.rowspan) && void 0 !== t ? t : 1
                            }));
                            l.push(...i.map(e => ({
                                ...e,
                                row: o
                            }))), o += e
                        }
                        for (let t of d) l.push({
                            ...t,
                            row: o,
                            col: 0,
                            rowspan: 1,
                            colspan: e.cols
                        }), o += 1
                    }
                    return l
                }(t, n);
                return (0, a.jsx)("div", {
                    className: (0, s.cn)("grid w-full gap-4", l),
                    style: {
                        gridTemplateColumns: "repeat(".concat(t.cols, ", minmax(0, 1fr))")
                    },
                    "data-preview-card-object": "preview.canvas",
                    children: o.map(e => (0, a.jsx)("div", {
                        style: D(e),
                        children: (0, a.jsx)(y, {
                            refId: e.ref,
                            records: n,
                            annotationIndex: r,
                            expected: e.ref.startsWith("grid_") ? "grid" : "block",
                            mutedTitleBelow: t.cols > 2
                        })
                    }, e.ref))
                })
            }

            function b(e) {
                let {
                    grid: t,
                    records: n,
                    annotationIndex: r
                } = e;
                if (0 === t.data.length) return (0, a.jsx)("div", {
                    className: "rounded-xl border border-dashed border-border py-8 text-center text-sm text-muted-foreground",
                    children: "Empty preview grid"
                });
                let l = t.cols > 2,
                    o = l ? t.data.filter(e => !j(e.ref, n)) : t.data,
                    s = l ? t.data.filter(e => j(e.ref, n)) : [];
                return (0, a.jsxs)("div", {
                    className: "flex min-h-0 flex-col overflow-hidden text-card-foreground",
                    "data-preview-card-object": "preview.grid",
                    children: [(0, a.jsx)("div", {
                        className: "flex shrink-0 items-center justify-between gap-2 py-2",
                        children: (0, a.jsx)("h4", {
                            className: "text-sm font-semibold",
                            children: "Grid"
                        })
                    }), (0, a.jsx)("div", {
                        className: "grid gap-3",
                        style: {
                            gridTemplateColumns: "repeat(".concat(t.cols, ", minmax(0, 1fr))")
                        },
                        children: o.map(e => (0, a.jsx)("div", {
                            style: D(e),
                            children: (0, a.jsx)(y, {
                                refId: e.ref,
                                records: n,
                                annotationIndex: r,
                                expected: "cell",
                                compact: !0,
                                suppressTitle: !0,
                                mutedTitleBelow: l
                            })
                        }, e.ref))
                    }), s.length > 0 ? (0, a.jsx)("div", {
                        className: "mt-3 flex flex-col gap-3",
                        children: s.map(e => (0, a.jsx)(y, {
                            refId: e.ref,
                            records: n,
                            annotationIndex: r,
                            expected: "cell"
                        }, e.ref))
                    }) : null]
                })
            }

            function j(e, t) {
                var n;
                return (null === (n = t[e]) || void 0 === n ? void 0 : n.object) === "preview.audio"
            }

            function y(e) {
                let {
                    refId: t,
                    records: n,
                    annotationIndex: r,
                    expected: l,
                    compact: o = !1,
                    suppressTitle: s = !1,
                    mutedTitleBelow: i = !1
                } = e, d = n[t];
                return d ? (0, a.jsx)(w, {
                    record: d,
                    records: n,
                    annotationIndex: r,
                    compact: o,
                    suppressTitle: s,
                    mutedTitleBelow: i
                }) : (0, a.jsx)(M, {
                    refId: t,
                    expected: l
                })
            }

            function w(e) {
                let {
                    record: t,
                    records: n,
                    annotationIndex: r,
                    compact: l = !1,
                    suppressTitle: o = !1,
                    mutedTitleBelow: s = !1
                } = e;
                switch (t.object) {
                    case "preview.image":
                        return (0, a.jsx)(k, {
                            image: t,
                            annotationIndex: r,
                            compact: l,
                            suppressTitle: o,
                            mutedTitleBelow: s
                        });
                    case "preview.video":
                        return (0, a.jsx)(N, {
                            video: t,
                            compact: l,
                            suppressTitle: o,
                            mutedTitleBelow: s
                        });
                    case "preview.audio":
                        return (0, a.jsx)(J, {
                            audio: t,
                            compact: l
                        });
                    case "preview.document":
                        return (0, a.jsx)(C, {
                            document: t,
                            annotationIndex: r,
                            suppressTitle: o,
                            mutedTitleBelow: s
                        });
                    case "preview.grid":
                        return (0, a.jsx)(b, {
                            grid: t,
                            records: n,
                            annotationIndex: r
                        });
                    case "preview.table":
                    case "preview.audio-transcription-table":
                    case "preview.video-transcription-table":
                    case "preview.document-page-table":
                        return (0, a.jsx)(A, {
                            table: t,
                            records: n,
                            annotationIndex: r
                        });
                    case "preview.video-timeline":
                        return (0, a.jsx)(S, {
                            timeline: t
                        });
                    case "preview.video-transcription":
                        return (0, a.jsx)(z, {
                            transcription: t,
                            records: n,
                            annotationIndex: r
                        });
                    default:
                        return (0, a.jsx)(F, {
                            object: t.object
                        })
                }
            }

            function k(e) {
                var t, n, r;
                let {
                    image: l,
                    annotationIndex: o,
                    compact: s,
                    suppressTitle: d,
                    mutedTitleBelow: c
                } = e, u = o.images.get(l.id), x = c && !!l.title;
                return (0, a.jsxs)("div", {
                    className: s ? "max-w-[280px]" : void 0,
                    children: [(0, a.jsx)(i.P, {
                        type: "image",
                        src: l.src,
                        alt: null !== (t = l.title) && void 0 !== t ? t : void 0,
                        title: d || x ? void 0 : null !== (n = l.title) && void 0 !== n ? n : void 0,
                        annotations: null !== (r = null == u ? void 0 : u.annotations) && void 0 !== r ? r : [],
                        spatialOverlaySvgInner: null == u ? void 0 : u.spatialOverlaySvgInner,
                        className: m
                    }), x ? (0, a.jsx)(T, {
                        title: l.title
                    }) : null]
                })
            }

            function N(e) {
                var t, n, r;
                let {
                    video: l,
                    compact: o,
                    suppressTitle: s,
                    mutedTitleBelow: d
                } = e, c = d && !!l.title;
                return (0, a.jsxs)("div", {
                    className: o ? "max-w-[320px]" : void 0,
                    children: [(0, a.jsx)(i.P, {
                        type: "video",
                        src: l.src,
                        alt: null !== (t = l.title) && void 0 !== t ? t : void 0,
                        title: s || c ? void 0 : null !== (n = l.title) && void 0 !== n ? n : void 0,
                        duration: null !== (r = l.duration) && void 0 !== r ? r : void 0,
                        className: m
                    }), c ? (0, a.jsx)(T, {
                        title: l.title
                    }) : null]
                })
            }

            function J(e) {
                var t;
                let {
                    audio: n,
                    compact: r
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, s.cn)("min-w-0", r && "min-w-[260px]"),
                    "data-preview-card-object": "preview.audio",
                    children: (0, a.jsx)(l.r, {
                        src: n.src,
                        title: null !== (t = n.title) && void 0 !== t ? t : void 0
                    })
                })
            }

            function C(e) {
                var t, n, r;
                let {
                    document: l,
                    annotationIndex: s,
                    suppressTitle: i,
                    mutedTitleBelow: d
                } = e, c = s.documents.get(l.id), u = null !== (n = null == c ? void 0 : null === (t = c.annotations.find(e => null != e.page)) || void 0 === t ? void 0 : t.page) && void 0 !== n ? n : null, m = function(e, t) {
                    if (!(null == e ? void 0 : e.length) || !t) return;
                    let n = new Map(e.filter(e => null != e.page).map(e => [e.id, e.page])),
                        a = t.split(/(?=<g\b)/g),
                        r = {};
                    for (let e of a) {
                        var l, o;
                        let t = null === (l = e.match(/data-annotation-id=["']([^"']+)["']/)) || void 0 === l ? void 0 : l[1],
                            a = t ? n.get(t) : void 0;
                        null != a && (r[a] = [...null !== (o = r[a]) && void 0 !== o ? o : [], e.trim()])
                    }
                    let s = Object.fromEntries(Object.entries(r).map(e => {
                        let [t, n] = e;
                        return [Number(t), n.join("\n")]
                    }));
                    return Object.keys(s).length > 0 ? s : void 0
                }(null == c ? void 0 : c.annotations, null == c ? void 0 : c.spatialOverlaySvgInner), x = d && !!l.title;
                return (0, a.jsxs)("div", {
                    className: "min-w-0",
                    "data-preview-card-object": "preview.document",
                    children: [!l.title || i || x ? null : (0, a.jsx)("h3", {
                        className: "mb-3 text-sm font-semibold text-foreground",
                        children: l.title
                    }), (0, a.jsx)(o.DocumentViewport, {
                        src: l.src,
                        pageCount: null !== (r = l.npages) && void 0 !== r ? r : void 0,
                        fileType: "PDF",
                        spatialOverlaySvgInner: null == c ? void 0 : c.spatialOverlaySvgInner,
                        spatialOverlaySvgByPage: m,
                        focusedPageIndex: u
                    }), x ? (0, a.jsx)(T, {
                        title: l.title
                    }) : null]
                })
            }

            function T(e) {
                let {
                    title: t
                } = e;
                return t ? (0, a.jsx)("p", {
                    className: "mt-1.5 truncate text-xs font-medium text-muted-foreground",
                    children: t
                }) : null
            }

            function A(e) {
                let {
                    table: t,
                    records: n,
                    annotationIndex: r
                } = e, l = function(e) {
                    let t = e.replace("preview.", "").replaceAll("-", " ");
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }(t.object);
                return (0, a.jsxs)("div", {
                    className: "flex min-h-0 flex-col overflow-hidden text-card-foreground",
                    "data-preview-card-object": t.object,
                    children: [(0, a.jsx)("div", {
                        className: "flex shrink-0 items-center justify-between gap-2 py-2",
                        children: (0, a.jsx)("h4", {
                            className: "text-sm font-semibold",
                            children: l
                        })
                    }), (0, a.jsx)("div", {
                        className: "min-h-0 overflow-hidden rounded-xl border border-border bg-card shadow-none",
                        children: (0, a.jsxs)(d.iA, {
                            children: [t.columns.length > 0 ? (0, a.jsx)(d.xD, {
                                children: (0, a.jsx)(d.SC, {
                                    children: t.columns.map(e => (0, a.jsx)(d.ss, {
                                        className: "px-4 text-xs normal-case text-foreground",
                                        children: e
                                    }, e))
                                })
                            }) : null, (0, a.jsx)(d.RM, {
                                children: t.data.map((e, l) => {
                                    let o = function(e) {
                                        if (Array.isArray(e)) return e;
                                        if (!e || "object" != typeof e || !("data" in e)) return [];
                                        let t = e.data;
                                        return Array.isArray(t) ? t : []
                                    }(e);
                                    return (0, a.jsx)(d.SC, {
                                        children: o.map((e, o) => (0, a.jsx)(d.pj, {
                                            className: "px-4 py-3 align-top",
                                            children: (0, a.jsx)(E, {
                                                cell: e,
                                                records: n,
                                                annotationIndex: r
                                            })
                                        }, "".concat(t.id, "-row-").concat(l, "-cell-").concat(o)))
                                    }, "".concat(t.id, "-row-").concat(l))
                                })
                            })]
                        })
                    })]
                })
            }

            function E(e) {
                let {
                    cell: t,
                    records: n,
                    annotationIndex: r
                } = e;
                return "string" == typeof t ? (/^(blk_|cel_|grid_)/.test(t) || f.test(t)) && void 0 !== n[t] ? (0, a.jsx)(y, {
                    refId: t,
                    records: n,
                    annotationIndex: r,
                    expected: "cell",
                    compact: !0,
                    suppressTitle: !0
                }) : (0, a.jsx)("span", {
                    className: "text-sm leading-relaxed text-foreground",
                    children: t
                }) : "number" == typeof t || "boolean" == typeof t ? (0, a.jsx)("span", {
                    className: "text-sm leading-relaxed text-foreground",
                    children: String(t)
                }) : null == t ? (0, a.jsx)("span", {
                    className: "text-sm leading-relaxed text-muted-foreground",
                    children: "-"
                }) : (0, a.jsx)(y, {
                    refId: t.ref,
                    records: n,
                    annotationIndex: r,
                    expected: "cell",
                    compact: !0,
                    suppressTitle: !0
                })
            }

            function z(e) {
                let {
                    transcription: t,
                    records: n,
                    annotationIndex: r
                } = e;
                return (0, a.jsx)(A, {
                    table: t.data,
                    records: n,
                    annotationIndex: r
                })
            }

            function S(e) {
                let {
                    timeline: t
                } = e, [n, l] = (0, r.useState)(0), o = t.data.map(R), s = Math.max(1, ...t.data.map(e => e.end_time));
                return (0, a.jsx)("div", {
                    className: "min-w-0",
                    "data-preview-card-object": "preview.video-timeline",
                    children: (0, a.jsx)(c.WE, {
                        duration: s,
                        currentTime: n,
                        annotations: o,
                        tracks: o && 0 !== o.length ? [{
                            id: "preview-track",
                            label: "Preview",
                            annotationIds: o.map(e => e.id)
                        }] : [],
                        onTimeChange: l
                    })
                })
            }

            function I() {
                return (0, r.useInsertionEffect)(() => {
                    if ("undefined" == typeof document) return;
                    let e = document.getElementById(x);
                    if (e) {
                        e.textContent !== h && (e.textContent = h);
                        return
                    }
                    let t = document.createElement("style");
                    t.id = x, t.textContent = h, document.head.appendChild(t)
                }, []), null
            }

            function M(e) {
                let {
                    refId: t,
                    expected: n
                } = e, r = "cell" === n ? "Creating frame" : "grid" === n ? "Creating grid" : "Creating preview", l = function(e) {
                    let t = 0;
                    for (let n = 0; n < e.length; n += 1) t = 31 * t + e.charCodeAt(n) >>> 0;
                    return t % 7
                }(t);
                return (0, a.jsxs)("div", {
                    className: "vlm-preview-skeleton relative isolate min-h-40 overflow-hidden rounded-[1.75rem] bg-muted/40 px-5 py-4 text-left",
                    role: "status",
                    "aria-busy": "true",
                    "aria-label": r,
                    "data-preview-card-object": "preview.placeholder",
                    children: [(0, a.jsx)("h3", {
                        className: "vlm-preview-skeleton-title relative z-10 text-[13px] font-semibold leading-none tracking-[-0.005em]",
                        children: r
                    }), (0, a.jsx)(L, {
                        pathIndex: l
                    }), (0, a.jsxs)("span", {
                        className: "sr-only",
                        children: ["Creating ", n, " preview"]
                    })]
                })
            }

            function L(e) {
                let {
                    pathIndex: t
                } = e;
                return (0, a.jsx)("div", {
                    className: "vlm-preview-skeleton-dots vlm-preview-skeleton-dots-path-".concat(t, " absolute z-0"),
                    "aria-hidden": "true",
                    children: p.map((e, t) => (0, a.jsx)("span", {
                        className: "vlm-preview-skeleton-dot",
                        style: {
                            "--dot-alpha": String(e.alpha),
                            "--dot-delay": "".concat(e.delay, "s"),
                            "--dot-drift-x": "".concat(e.dx, "px"),
                            "--dot-drift-y": "".concat(e.dy, "px"),
                            "--dot-size": "".concat(e.size, "px"),
                            "--dot-x": "".concat(e.x, "%"),
                            "--dot-y": "".concat(e.y, "%")
                        }
                    }, t))
                })
            }

            function F(e) {
                let {
                    object: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: "rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground",
                    children: ["Unsupported preview record", t ? ": ".concat(t) : ""]
                })
            }

            function D(e) {
                var t, n;
                return {
                    gridColumn: "".concat(e.col + 1, " / span ").concat(null !== (t = e.colspan) && void 0 !== t ? t : 1),
                    gridRow: "".concat(e.row + 1, " / span ").concat(null !== (n = e.rowspan) && void 0 !== n ? n : 1)
                }
            }

            function R(e) {
                var t, n, a;
                let r = null === (t = e.metadata) || void 0 === t ? void 0 : t.confidence;
                return {
                    id: e.id,
                    label: null !== (n = e.label) && void 0 !== n ? n : e.id,
                    color: null !== (a = e.color) && void 0 !== a ? a : "#2AA1FF",
                    timestamp: e.start_time,
                    endTimestamp: e.end_time,
                    confidence: "number" == typeof r ? r : void 0
                }
            }
        },
        53414: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return s
                }
            });
            var a = n(57437),
                r = n(33276),
                l = n(87513),
                o = n(64962);

            function s(e) {
                let {
                    items: t,
                    onItemClick: n,
                    className: s,
                    columnsClassName: i = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                } = e;
                return 0 === t.length ? (0, a.jsx)("div", {
                    className: (0, l.cn)("rounded-xl border border-dashed border-border py-8 text-center text-sm text-muted-foreground", s),
                    children: "No evidence thumbnails"
                }) : (0, a.jsx)("div", {
                    className: (0, l.cn)("grid gap-2", i, s),
                    children: t.map(e => (0, a.jsxs)("button", {
                        type: "button",
                        disabled: !n,
                        onClick: () => null == n ? void 0 : n(e),
                        className: (0, l.cn)("group flex flex-col gap-1 text-left", n && "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"),
                        children: [(0, a.jsxs)("div", {
                            className: "relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted",
                            children: [e.thumbnailUrl ? (0, a.jsx)("img", {
                                src: e.thumbnailUrl,
                                alt: "",
                                className: "size-full object-cover transition-transform group-hover:scale-[1.02]",
                                loading: "lazy"
                            }) : (0, a.jsx)("div", {
                                className: "flex size-full items-center justify-center bg-gradient-to-br from-muted to-muted/60",
                                children: (0, a.jsx)(r.Z, {
                                    className: "size-8 text-muted-foreground/70"
                                })
                            }), (0, a.jsx)("div", {
                                className: "absolute bottom-1 right-1 rounded-full bg-black/75 px-1.5 py-0.5 font-mono text-[10px] tabular-nums text-white",
                                children: (0, o.DQ)(e.startTime)
                            })]
                        }), (0, a.jsx)("p", {
                            className: "line-clamp-2 text-[11px] leading-tight text-foreground",
                            children: e.label
                        })]
                    }, e.id))
                })
            }
        },
        54678: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return s
                }
            });
            var a = n(57437),
                r = n(2265),
                l = n(87513),
                o = n(21648);

            function s(e) {
                let {
                    duration: t,
                    currentTime: n,
                    segments: s,
                    onTimeChange: i,
                    className: d
                } = e, c = (0, r.useRef)(null), u = (0, r.useCallback)(e => {
                    let n = c.current;
                    if (!n || t <= 0 || !i) return;
                    let a = n.getBoundingClientRect();
                    i(Math.max(0, Math.min(1, (e - a.left) / a.width)) * t)
                }, [t, i]), m = (0, r.useCallback)(e => {
                    if (e.target.closest("[data-segment-block]")) return;
                    e.preventDefault(), u(e.clientX);
                    let t = e => u(e.clientX),
                        n = () => {
                            window.removeEventListener("mousemove", t), window.removeEventListener("mouseup", n)
                        };
                    window.addEventListener("mousemove", t), window.addEventListener("mouseup", n)
                }, [u]), x = t > 0 ? n / t * 100 : 0;
                return (0, a.jsxs)("div", {
                    "data-segment-timeline": !0,
                    className: (0, l.cn)("flex flex-col gap-1.5", d),
                    children: [(0, a.jsxs)("div", {
                        className: "flex items-center justify-between gap-2 px-0.5",
                        children: [(0, a.jsx)("span", {
                            className: "text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
                            children: "Events"
                        }), (0, a.jsxs)("span", {
                            className: "text-[10px] tabular-nums text-muted-foreground/80",
                            children: [s.length, " segments"]
                        })]
                    }), (0, a.jsxs)("div", {
                        ref: c,
                        className: "relative h-9 cursor-pointer overflow-hidden rounded-lg border border-border/80 bg-muted/25",
                        onMouseDown: m,
                        role: "presentation",
                        children: [s.map((e, n) => {
                            let r = Math.max(0, Math.min(e.startTime, t)),
                                s = Math.max(r, Math.min(e.endTime, t)),
                                d = t > 0 ? r / t * 100 : 0,
                                c = t > 0 ? (s - r) / t * 100 : 0,
                                u = e.color ? (0, o.t$)(e.color) : o.aJ[n % o.aJ.length];
                            return (0, a.jsx)("button", {
                                type: "button",
                                "data-segment-block": !0,
                                className: (0, l.cn)("absolute inset-y-1 z-[1] flex min-w-[4px] items-center overflow-hidden rounded-md px-2 text-left text-[11px] font-medium shadow-sm transition-[filter,transform] hover:brightness-[1.02] active:scale-[0.995]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"),
                                style: {
                                    left: "".concat(d, "%"),
                                    width: "".concat(Math.max(c, .6), "%"),
                                    backgroundColor: u.bg,
                                    color: u.text
                                },
                                title: e.kind ? "".concat(e.label, " \xb7 ").concat(e.kind) : e.label,
                                onMouseDown: e => e.stopPropagation(),
                                onClick: e => {
                                    e.stopPropagation(), null == i || i(r)
                                },
                                children: (0, a.jsx)("span", {
                                    className: "truncate",
                                    children: e.label
                                })
                            }, e.id)
                        }), (0, a.jsx)("div", {
                            className: "pointer-events-none absolute inset-y-0 z-[2] w-px bg-foreground/70 shadow-[0_0_0_1px_hsl(var(--background))]",
                            style: {
                                left: "".concat(x, "%")
                            }
                        })]
                    })]
                })
            }
        },
        17260: function(e, t, n) {
            n.d(t, {
                Ck: function() {
                    return g
                },
                FR: function() {
                    return b
                },
                H7: function() {
                    return f
                },
                Qy: function() {
                    return k
                },
                _b: function() {
                    return c
                },
                _w: function() {
                    return d
                },
                aq: function() {
                    return i
                },
                ay: function() {
                    return y
                },
                ef: function() {
                    return j
                },
                g0: function() {
                    return u
                },
                he: function() {
                    return s
                },
                hx: function() {
                    return p
                },
                kh: function() {
                    return w
                },
                n: function() {
                    return x
                },
                sc: function() {
                    return v
                },
                u$: function() {
                    return m
                },
                yJ: function() {
                    return h
                }
            });
            var a = n(21648);
            let r = "0.0035",
                l = "0.006";

            function o(e) {
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
            }

            function s(e, t, n, a, s, i) {
                let d = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "";
                return '<g data-annotation-id="'.concat(o(e), '" data-selected="false" data-shape="box" ').concat(d, '>\n  <rect x="').concat(n, '" y="').concat(a, '" width="').concat(s, '" height="').concat(i, '" fill="none" stroke="').concat(t, '" stroke-width="').concat(r, '" rx="').concat(l, '" ry="').concat(l, '"/>\n</g>')
            }

            function i(e, t, n, a, r, l, i, d, c) {
                return s(e, t, n, a, r, l, 'data-timestamp="'.concat(i, '" data-end-timestamp="').concat(d, '" data-track-id="').concat(o(c), '"'))
            }
            let d = [s("building-a", a.aJ[0 % a.aJ.length].text, .05, .1, .35, .4), s("building-b", a.aJ[1 % a.aJ.length].text, .55, .08, .4, .35), s("parking", a.aJ[2 % a.aJ.length].text, .1, .6, .5, .3), s("loading-dock", a.aJ[3 % a.aJ.length].text, .42, .35, .12, .15), s("entry-gate", a.aJ[4 % a.aJ.length].text, .7, .85, .08, .06)].join(""),
                c = [s("car-1", a.aJ[0 % a.aJ.length].text, .1, .55, .15, .12), s("car-2", a.aJ[0 % a.aJ.length].text, .35, .52, .12, .1), s("pedestrian-1", a.aJ[1 % a.aJ.length].text, .6, .4, .05, .15), s("traffic-light", a.aJ[2 % a.aJ.length].text, .48, .05, .04, .12), s("sign", a.aJ[3 % a.aJ.length].text, .78, .1, .06, .08), s("building", a.aJ[4 % a.aJ.length].text, 0, 0, .45, .45)].join(""),
                u = [s("face", a.aJ[0 % a.aJ.length].text, .25, .08, .5, .65), s("left-eye", a.aJ[1 % a.aJ.length].text, .35, .28, .1, .06), s("right-eye", a.aJ[1 % a.aJ.length].text, .55, .28, .1, .06), s("nose", a.aJ[2 % a.aJ.length].text, .44, .38, .12, .12), s("mouth", a.aJ[3 % a.aJ.length].text, .38, .52, .24, .1)].join(""),
                m = [i("truck-1", a.aJ[0 % a.aJ.length].text, .1, .35, .4, .35, 0, 3, "truck"), i("truck-2", a.aJ[0 % a.aJ.length].text, .15, .3, .38, .38, 4.5, 8, "truck"), i("worker-a-1", a.aJ[1 % a.aJ.length].text, .55, .4, .08, .2, 1, 3.5, "worker-a"), i("worker-a-2", a.aJ[1 % a.aJ.length].text, .5, .38, .1, .22, 5, 7, "worker-a"), i("worker-b", a.aJ[2 % a.aJ.length].text, .65, .42, .07, .18, 2.5, 5, "worker-b"), i("forklift", a.aJ[3 % a.aJ.length].text, .3, .5, .15, .2, 3, 6.5, "forklift"), i("pallet", a.aJ[4 % a.aJ.length].text, .35, .6, .1, .08, 4, 7, "pallet"), i("bay-door-1", a.aJ[5 % a.aJ.length].text, .02, .2, .06, .5, 0, 2, "bay-door"), i("bay-door-2", a.aJ[5 % a.aJ.length].text, .02, .2, .06, .5, 4, 8, "bay-door"), i("vest-1", a.aJ[6 % a.aJ.length].text, .56, .42, .06, .08, 1, 2.5, "vest"), i("vest-2", a.aJ[6 % a.aJ.length].text, .51, .4, .07, .09, 3.5, 5, "vest"), i("vest-3", a.aJ[6 % a.aJ.length].text, .52, .39, .06, .08, 6, 7.5, "vest")].join(""),
                x = [i("char-a-1", a.aJ[0 % a.aJ.length].text, .2, .15, .15, .5, 0, 6, "char-a"), i("char-a-2", a.aJ[0 % a.aJ.length].text, .25, .12, .14, .52, 8, 15, "char-a"), i("char-b", a.aJ[1 % a.aJ.length].text, .6, .2, .12, .45, 3, 10, "char-b"), i("dog-1", a.aJ[2 % a.aJ.length].text, .4, .6, .1, .1, 2, 4, "dog"), i("dog-2", a.aJ[2 % a.aJ.length].text, .3, .58, .12, .12, 9, 11, "dog"), i("car-1", a.aJ[3 % a.aJ.length].text, .8, .3, .15, .08, 0, 5, "car"), i("car-2", a.aJ[3 % a.aJ.length].text, .75, .32, .18, .09, 11, 15, "car"), i("dialogue-1", a.aJ[4 % a.aJ.length].text, .15, .85, .7, .06, 4, 7, "dialogue"), i("dialogue-2", a.aJ[4 % a.aJ.length].text, .15, .85, .7, .06, 8, 12, "dialogue"), i("scene-intro", a.aJ[5 % a.aJ.length].text, 0, 0, 1, .02, 0, 3, "scene"), i("scene-climax", a.aJ[5 % a.aJ.length].text, 0, 0, 1, .02, 12, 15, "scene"), i("bicycle", a.aJ[6 % a.aJ.length].text, .05, .55, .08, .1, 5, 7, "bicycle"), i("sign", a.aJ[7 % a.aJ.length].text, .9, .05, .08, .12, 0, 15, "sign")].join(""),
                f = [s("header", a.aJ[0 % a.aJ.length].text, .08, .03, .84, .08), s("title", a.aJ[1 % a.aJ.length].text, .15, .13, .7, .06), s("body-text", a.aJ[2 % a.aJ.length].text, .08, .22, .84, .45), s("table", a.aJ[3 % a.aJ.length].text, .1, .7, .8, .15), s("page-number", a.aJ[4 % a.aJ.length].text, .44, .9, .12, .05)].join(""),
                p = [s("patient-name", a.aJ[0 % a.aJ.length].text, .08, .06, .35, .06), s("dob", a.aJ[1 % a.aJ.length].text, .08, .14, .25, .06), s("mrn", a.aJ[2 % a.aJ.length].text, .58, .06, .34, .06), s("diagnosis", a.aJ[3 % a.aJ.length].text, .06, .28, .88, .25), s("signature", a.aJ[4 % a.aJ.length].text, .06, .72, .4, .12), s("visit-date", a.aJ[5 % a.aJ.length].text, .58, .14, .25, .06)].join(""),
                h = '\n<g data-annotation-id="cg-box" data-track-id="detections" data-selected="false" data-shape="box">\n  <rect x="0.06" y="0.08" width="0.22" height="0.18" fill="none" stroke="'.concat(a.aJ[0 % a.aJ.length].text, '" stroke-width="').concat(r, '" rx="').concat(l, '" ry="').concat(l, '"/>\n</g>\n<g data-annotation-id="cg-poly" data-track-id="regions" data-selected="false" data-shape="polygon">\n  <polygon points="0.36,0.13 0.72,0.15 0.7,0.38 0.38,0.36" fill="').concat(a.aJ[1 % a.aJ.length].text, '" fill-opacity="0.16" stroke="').concat(a.aJ[1 % a.aJ.length].text, '" stroke-width="').concat(r, '" stroke-linejoin="round"/>\n</g>\n<g data-annotation-id="cg-path" data-track-id="paths" data-selected="false" data-shape="path">\n  <path d="M 0.1 0.55 Q 0.35 0.45 0.55 0.58 T 0.92 0.55 L 0.88 0.92 L 0.12 0.88 Z" fill="').concat(a.aJ[2 % a.aJ.length].text, '" fill-opacity="0.16" stroke="').concat(a.aJ[2 % a.aJ.length].text, '" stroke-width="').concat(r, '" stroke-linejoin="round" stroke-linecap="round"/>\n</g>\n').trim(),
                g = '\n<g data-annotation-id="cg-box" data-track-id="detections" data-selected="false" data-shape="box" data-timestamp="0" data-end-timestamp="12">\n  <rect x="0.06" y="0.08" width="0.22" height="0.18" fill="none" stroke="'.concat(a.aJ[0 % a.aJ.length].text, '" stroke-width="').concat(r, '" rx="').concat(l, '" ry="').concat(l, '"/>\n</g>\n<g data-annotation-id="cg-poly" data-track-id="regions" data-selected="false" data-shape="polygon" data-timestamp="0" data-end-timestamp="12">\n  <polygon points="0.36,0.13 0.72,0.15 0.7,0.38 0.38,0.36" fill="').concat(a.aJ[1 % a.aJ.length].text, '" fill-opacity="0.16" stroke="').concat(a.aJ[1 % a.aJ.length].text, '" stroke-width="').concat(r, '" stroke-linejoin="round"/>\n</g>\n<g data-annotation-id="cg-path" data-track-id="paths" data-selected="false" data-shape="path" data-timestamp="0" data-end-timestamp="12">\n  <path d="M 0.1 0.55 Q 0.35 0.45 0.55 0.58 T 0.92 0.55 L 0.88 0.92 L 0.12 0.88 Z" fill="').concat(a.aJ[2 % a.aJ.length].text, '" fill-opacity="0.16" stroke="').concat(a.aJ[2 % a.aJ.length].text, '" stroke-width="').concat(r, '" stroke-linejoin="round" stroke-linecap="round"/>\n</g>\n').trim(),
                v = [s("building-a", a.aJ[0 % a.aJ.length].text, .05, .1, .35, .4), '<g data-annotation-id="parking-poly" data-selected="false" data-shape="polygon">\n  <polygon points="0.1,0.65 0.55,0.6 0.58,0.88 0.12,0.9" fill="'.concat(a.aJ[2 % a.aJ.length].text, '" fill-opacity="0.2" stroke="').concat(a.aJ[2 % a.aJ.length].text, '" stroke-width="').concat(r, '" stroke-linejoin="round"/>\n</g>')].join(""),
                b = '<g data-annotation-id="face-pose" data-selected="false" data-shape="pose">\n  <path d="M 0.42 0.35 L 0.38 0.32 M 0.42 0.35 L 0.46 0.32 M 0.38 0.32 L 0.46 0.32 M 0.36 0.42 L 0.48 0.42 M 0.42 0.35 L 0.36 0.42 M 0.42 0.35 L 0.48 0.42" fill="none" stroke="'.concat(a.aJ[0 % a.aJ.length].text, '" stroke-width="').concat(r, '" stroke-linecap="round"/>\n  <circle cx="0.42" cy="0.35" r="0.012" fill="').concat(a.aJ[0 % a.aJ.length].text, '"/>\n  <circle cx="0.38" cy="0.32" r="0.008" fill="').concat(a.aJ[0 % a.aJ.length].text, '"/>\n  <circle cx="0.46" cy="0.32" r="0.008" fill="').concat(a.aJ[0 % a.aJ.length].text, '"/>\n  <circle cx="0.36" cy="0.42" r="0.008" fill="').concat(a.aJ[0 % a.aJ.length].text, '"/>\n  <circle cx="0.48" cy="0.42" r="0.008" fill="').concat(a.aJ[0 % a.aJ.length].text, '"/>\n</g>'),
                j = '<g data-annotation-id="car-poly-1" data-selected="false" data-shape="polygon">\n  <polygon points="0.1,0.58 0.26,0.52 0.28,0.68 0.09,0.7" fill="'.concat(a.aJ[0 % a.aJ.length].text, '" fill-opacity="0.18" stroke="').concat(a.aJ[0 % a.aJ.length].text, '" stroke-width="').concat(r, '" stroke-linejoin="round"/>\n</g>'),
                y = '<g data-annotation-id="veh-poly-1" data-selected="false" data-shape="polygon" data-timestamp="2" data-end-timestamp="6" data-track-id="v1">\n  <polygon points="0.28,0.52 0.48,0.48 0.5,0.68 0.3,0.7" fill="'.concat(a.aJ[3 % a.aJ.length].text, '" fill-opacity="0.2" stroke="').concat(a.aJ[3 % a.aJ.length].text, '" stroke-width="').concat(r, '" stroke-linejoin="round"/>\n</g>'),
                w = '<g data-annotation-id="seg-roof" data-selected="false" data-shape="polygon">\n  <polygon points="0.08,0.12 0.68,0.06 0.66,0.38 0.1,0.42" fill="'.concat(a.aJ[0 % a.aJ.length].text, '" fill-opacity="0.18" stroke="').concat(a.aJ[0 % a.aJ.length].text, '" stroke-width="').concat(r, '" stroke-linejoin="round"/>\n</g>\n<g data-annotation-id="seg-yard" data-selected="false" data-shape="polygon">\n  <polygon points="0.05,0.58 0.58,0.52 0.52,0.88 0.08,0.9" fill="').concat(a.aJ[2 % a.aJ.length].text, '" fill-opacity="0.18" stroke="').concat(a.aJ[2 % a.aJ.length].text, '" stroke-width="').concat(r, '" stroke-linejoin="round"/>\n</g>'),
                k = '<g data-annotation-id="pose-1" data-selected="false" data-shape="pose">\n  <path d="M 0.59 0.36 L 0.57 0.44 M 0.59 0.36 L 0.61 0.44 M 0.57 0.44 L 0.56 0.56 M 0.61 0.44 L 0.62 0.56 M 0.56 0.56 L 0.62 0.56" fill="none" stroke="'.concat(a.aJ[4 % a.aJ.length].text, '" stroke-width="').concat(r, '" stroke-linecap="round"/>\n  <circle cx="0.59" cy="0.36" r="0.014" fill="').concat(a.aJ[4 % a.aJ.length].text, '"/>\n  <circle cx="0.57" cy="0.44" r="0.008" fill="').concat(a.aJ[4 % a.aJ.length].text, '"/>\n  <circle cx="0.61" cy="0.44" r="0.008" fill="').concat(a.aJ[4 % a.aJ.length].text, '"/>\n  <circle cx="0.56" cy="0.56" r="0.008" fill="').concat(a.aJ[4 % a.aJ.length].text, '"/>\n  <circle cx="0.62" cy="0.56" r="0.008" fill="').concat(a.aJ[4 % a.aJ.length].text, '"/>\n</g>')
        },
        19724: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return o
                }
            });
            var a = n(57437),
                r = n(87513),
                l = n(64962);

            function o(e) {
                let {
                    segments: t,
                    title: n = "Transcript",
                    className: o,
                    maxHeightClassName: s = "max-h-[min(420px,55vh)]",
                    selectedSegmentId: i,
                    onSegmentClick: d
                } = e;
                return (0, a.jsxs)("div", {
                    className: (0, r.cn)("flex min-h-0 flex-col overflow-hidden text-card-foreground", o),
                    children: [(0, a.jsx)("div", {
                        className: "shrink-0 py-2",
                        children: (0, a.jsx)("h4", {
                            className: "text-sm font-semibold",
                            children: n
                        })
                    }), (0, a.jsx)("div", {
                        className: (0, r.cn)("min-h-0 overflow-y-auto rounded-xl border border-border bg-card px-3 py-2 shadow-none", s),
                        style: {
                            scrollbarWidth: "thin"
                        },
                        children: 0 === t.length ? (0, a.jsx)("p", {
                            className: "py-6 text-center text-sm text-muted-foreground",
                            children: "No transcript"
                        }) : (0, a.jsx)("ul", {
                            className: "space-y-3",
                            children: t.map(e => {
                                let t = i === e.id;
                                return (0, a.jsx)("li", {
                                    children: (0, a.jsxs)("button", {
                                        type: "button",
                                        disabled: !d,
                                        onClick: () => null == d ? void 0 : d(e),
                                        className: (0, r.cn)("w-full rounded-lg px-1 py-0.5 text-left transition-colors", d && "cursor-pointer hover:bg-muted/80", t && "bg-muted"),
                                        children: [(0, a.jsx)("span", {
                                            className: "font-mono text-[11px] font-medium tabular-nums text-emerald-700 dark:text-emerald-400",
                                            children: (0, l.DQ)(e.startTime)
                                        }), (0, a.jsx)("p", {
                                            className: "mt-0.5 text-[13px] leading-snug text-foreground",
                                            children: e.text
                                        })]
                                    })
                                }, e.id)
                            })
                        })
                    })]
                })
            }
        },
        23293: function(e, t, n) {
            n.d(t, {
                A5: function() {
                    return s
                },
                Yj: function() {
                    return a
                },
                hA: function() {
                    return o
                },
                ug: function() {
                    return l
                }
            });
            let a = {
                ANNOTATION_ID: "data-annotation-id",
                TIMESTAMP: "data-timestamp",
                END_TIMESTAMP: "data-end-timestamp",
                TRACK_ID: "data-track-id",
                SELECTED: "data-selected",
                COORDINATE_SPACE: "data-coordinate-space",
                FRAME_WIDTH: "data-frame-width",
                FRAME_HEIGHT: "data-frame-height"
            };

            function r(e) {
                if (null == e || "" === e.trim()) return;
                let t = Number(e);
                return Number.isFinite(t) ? t : void 0
            }

            function l(e) {
                var t, n, l;
                let o = null === (t = e.getAttribute(a.ANNOTATION_ID)) || void 0 === t ? void 0 : t.trim();
                if (!o) return null;
                let s = r(e.getAttribute(a.TIMESTAMP)),
                    i = r(e.getAttribute(a.END_TIMESTAMP)),
                    d = null === (n = e.getAttribute(a.TRACK_ID)) || void 0 === n ? void 0 : n.trim(),
                    c = null === (l = e.getAttribute(a.SELECTED)) || void 0 === l ? void 0 : l.trim().toLowerCase();
                return {
                    annotationId: o,
                    timestamp: s,
                    endTimestamp: i,
                    trackId: "" === d || null == d ? void 0 : d,
                    selected: "true" === c || "false" !== c && void 0
                }
            }

            function o(e) {
                var t;
                let n = null === (t = e.getAttribute(a.COORDINATE_SPACE)) || void 0 === t ? void 0 : t.trim().toLowerCase();
                return "normalized" === n || "pixels" === n ? n : null
            }

            function s(e, t) {
                if (null == t ? void 0 : t.length) {
                    for (let n of t)
                        if (n.annotationIds.includes(e)) return n.id
                }
            }
        },
        8551: function(e, t, n) {
            n.d(t, {
                t: function() {
                    return s
                }
            });
            var a = n(57437),
                r = n(2265),
                l = n(87513),
                o = n(23293);

            function s(e) {
                let {
                    svgInnerMarkup: t,
                    selectedAnnotationId: n,
                    onAnnotationClick: s,
                    currentTime: i,
                    className: d
                } = e, c = (0, r.useRef)(null);
                return (0, r.useLayoutEffect)(() => {
                    var e;
                    let t = null === (e = c.current) || void 0 === e ? void 0 : e.querySelector("svg");
                    t && t.querySelectorAll("[".concat(o.Yj.ANNOTATION_ID, "]")).forEach(e => {
                        let t = e.getAttribute(o.Yj.ANNOTATION_ID);
                        e.setAttribute(o.Yj.SELECTED, t === n ? "true" : "false")
                    })
                }, [t, n]), (0, r.useLayoutEffect)(() => {
                    var e;
                    let t = null === (e = c.current) || void 0 === e ? void 0 : e.querySelector("svg");
                    t && void 0 !== i && Number.isFinite(i) && t.querySelectorAll("[".concat(o.Yj.ANNOTATION_ID, "]")).forEach(e => {
                        let t = e.getAttribute(o.Yj.TIMESTAMP),
                            n = e.getAttribute(o.Yj.END_TIMESTAMP);
                        if (null == t || null == n) {
                            e.style.visibility = "visible";
                            return
                        }
                        let a = Number(t),
                            r = Number(n);
                        e.style.visibility = i >= a && i <= r ? "visible" : "hidden"
                    })
                }, [i, t]), (0, a.jsx)("div", {
                    ref: c,
                    className: (0, l.cn)("pointer-events-none absolute inset-0 size-full", d),
                    children: (0, a.jsx)("svg", {
                        className: "pointer-events-none absolute inset-0 h-full w-full [&_*]:pointer-events-auto",
                        viewBox: "0 0 1 1",
                        preserveAspectRatio: "none",
                        "aria-hidden": !0,
                        [o.Yj.COORDINATE_SPACE]: "normalized",
                        dangerouslySetInnerHTML: {
                            __html: t
                        },
                        onClick: e => {
                            if (!s) return;
                            let t = e.target.closest("[".concat(o.Yj.ANNOTATION_ID, "]"));
                            if (t) {
                                e.stopPropagation();
                                let n = t.getAttribute(o.Yj.ANNOTATION_ID);
                                n && s(n)
                            }
                        }
                    })
                })
            }
        },
        41191: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return d
                }
            });
            var a = n(57437),
                r = n(2265),
                l = n(37053),
                o = n(77712),
                s = n(87513);
            let i = (0, o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline"
                        },
                        size: {
                            default: "h-9 px-4 py-2",
                            sm: "h-8 rounded-[10px] px-3 text-xs",
                            lg: "h-10 rounded-[10px] px-8",
                            icon: "h-9 w-9",
                            "icon-sm": "h-8 w-8"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                d = r.forwardRef((e, t) => {
                    let {
                        className: n,
                        variant: r,
                        size: o,
                        asChild: d = !1,
                        ...c
                    } = e, u = d ? l.g7 : "button";
                    return (0, a.jsx)(u, {
                        className: (0, s.cn)(i({
                            variant: r,
                            size: o,
                            className: n
                        })),
                        ref: t,
                        ...c
                    })
                });
            d.displayName = "Button"
        },
        14407: function(e, t, n) {
            n.d(t, {
                $N: function() {
                    return x
                },
                Be: function() {
                    return f
                },
                GG: function() {
                    return c
                },
                Vq: function() {
                    return i
                },
                cZ: function() {
                    return m
                }
            });
            var a = n(57437),
                r = n(2265),
                l = n(49027),
                o = n(20653),
                s = n(87513);
            let i = l.fC;
            l.xz;
            let d = l.h_,
                c = l.x8,
                u = r.forwardRef((e, t) => {
                    let {
                        className: n,
                        ...r
                    } = e;
                    return (0, a.jsx)(l.aV, {
                        ref: t,
                        className: (0, s.cn)("fixed inset-0 z-[10000] bg-black/20 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", n),
                        ...r
                    })
                });
            u.displayName = l.aV.displayName;
            let m = r.forwardRef((e, t) => {
                let {
                    className: n,
                    children: r,
                    hideCloseButton: i = !0,
                    ...c
                } = e;
                return (0, a.jsxs)(d, {
                    children: [(0, a.jsx)(u, {}), (0, a.jsxs)(l.VY, {
                        ref: t,
                        className: (0, s.cn)("fixed left-1/2 top-1/2 z-[10000] grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-2xl border bg-background p-6 shadow-lg duration-200 overscroll-contain data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]", n),
                        ...c,
                        children: [r, !i && (0, a.jsxs)(l.x8, {
                            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                            children: [(0, a.jsx)(o.Pxu, {
                                className: "size-4"
                            }), (0, a.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })]
                        })]
                    })]
                })
            });
            m.displayName = l.VY.displayName;
            let x = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)(l.Dx, {
                    ref: t,
                    className: (0, s.cn)("text-lg font-semibold leading-none tracking-tight", n),
                    ...r
                })
            });
            x.displayName = l.Dx.displayName;
            let f = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)(l.dk, {
                    ref: t,
                    className: (0, s.cn)("text-sm text-muted-foreground", n),
                    ...r
                })
            });
            f.displayName = l.dk.displayName
        },
        34587: function(e, t, n) {
            n.d(t, {
                RM: function() {
                    return i
                },
                SC: function() {
                    return d
                },
                iA: function() {
                    return o
                },
                pj: function() {
                    return u
                },
                ss: function() {
                    return c
                },
                xD: function() {
                    return s
                }
            });
            var a = n(57437),
                r = n(2265),
                l = n(87513);
            let o = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)("div", {
                    className: "relative w-full overflow-auto",
                    children: (0, a.jsx)("table", {
                        ref: t,
                        className: (0, l.cn)("w-full caption-bottom text-sm", n),
                        ...r
                    })
                })
            });
            o.displayName = "Table";
            let s = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)("thead", {
                    ref: t,
                    className: (0, l.cn)("[&_tr]", n),
                    ...r
                })
            });
            s.displayName = "TableHeader";
            let i = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)("tbody", {
                    ref: t,
                    className: (0, l.cn)("[&_tr:last-child]:border-0", n),
                    ...r
                })
            });
            i.displayName = "TableBody", r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)("tfoot", {
                    ref: t,
                    className: (0, l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", n),
                    ...r
                })
            }).displayName = "TableFooter";
            let d = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)("tr", {
                    ref: t,
                    className: (0, l.cn)("border-b transition-colors hover:bg-muted/50 data-[highlighted=true]:bg-accent data-[state=selected]:bg-muted", n),
                    ...r
                })
            });
            d.displayName = "TableRow";
            let c = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)("th", {
                    ref: t,
                    className: (0, l.cn)("h-10 px-2 text-left align-middle font-medium uppercase text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", n),
                    ...r
                })
            });
            c.displayName = "TableHead";
            let u = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)("td", {
                    ref: t,
                    className: (0, l.cn)("px-2 py-1 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", n),
                    ...r
                })
            });
            u.displayName = "TableCell", r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)("caption", {
                    ref: t,
                    className: (0, l.cn)("mt-4 text-sm text-muted-foreground", n),
                    ...r
                })
            }).displayName = "TableCaption"
        },
        85086: function(e, t, n) {
            n.d(t, {
                ki: function() {
                    return m
                },
                lk: function() {
                    return f
                },
                D_: function() {
                    return x
                },
                im: function() {
                    return p
                },
                JK: function() {
                    return u
                }
            });
            var a = n(57437),
                r = n(2265),
                l = n(33276),
                o = n(73247),
                s = n(87513),
                i = n(14407);
            let d = r.forwardRef((e, t) => {
                let {
                    className: n,
                    type: r,
                    ...l
                } = e;
                return (0, a.jsx)("input", {
                    type: r,
                    className: (0, s.cn)("flex h-9 w-full rounded-[10px] border border-border bg-transparent px-3 py-1.5 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", n),
                    ref: t,
                    ...l
                })
            });
            d.displayName = "Input";
            var c = n(64962);

            function u(e) {
                return Math.max(0, e.endTime - e.startTime)
            }

            function m(e) {
                var t;
                let {
                    clip: n,
                    onClick: r,
                    className: o,
                    selected: i
                } = e, d = u(n), m = null !== (t = n.thumbnailUrl) && void 0 !== t ? t : n.poster;
                return (0, a.jsxs)("button", {
                    type: "button",
                    onClick: r,
                    "aria-current": i ? "true" : void 0,
                    className: (0, s.cn)("group flex w-full flex-col gap-1.5 rounded-2xl text-left shadow-none transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring", o),
                    children: [(0, a.jsxs)("div", {
                        className: "relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-none ring-0 ring-offset-0",
                        children: [m ? (0, a.jsx)("img", {
                            src: m,
                            alt: "",
                            className: "size-full object-cover transition-transform group-hover:scale-[1.02]",
                            loading: "lazy",
                            decoding: "async"
                        }) : (0, a.jsx)("div", {
                            className: "flex size-full items-center justify-center bg-gradient-to-br from-muted to-muted/60",
                            children: (0, a.jsx)(l.Z, {
                                className: "size-10 text-muted-foreground/80"
                            })
                        }), d > 0 && (0, a.jsx)("div", {
                            className: "absolute bottom-1.5 right-1.5 rounded-full bg-black/70 px-2 py-0.5 font-mono text-[11px] tabular-nums text-white",
                            children: (0, c.DQ)(d)
                        })]
                    }), (0, a.jsx)("p", {
                        className: "line-clamp-2 text-xs text-foreground",
                        children: n.label
                    })]
                })
            }

            function x(e) {
                let {
                    clip: t,
                    className: n
                } = e, l = (0, r.useRef)(null), o = (0, r.useCallback)(() => {
                    let e = l.current;
                    e && (e.currentTime < t.startTime && (e.currentTime = t.startTime), e.currentTime >= t.endTime && (e.pause(), e.currentTime = t.endTime))
                }, [t]);
                return (0, a.jsx)("div", {
                    className: (0, s.cn)("bg-black sm:p-1", n),
                    children: (0, a.jsx)("video", {
                        ref: l,
                        className: "max-h-[min(70vh,720px)] w-full bg-black",
                        src: t.src,
                        controls: !0,
                        playsInline: !0,
                        autoPlay: !0,
                        poster: t.poster,
                        onLoadedMetadata: e => {
                            let n = e.currentTarget;
                            n.currentTime = t.startTime, n.play().catch(() => {})
                        },
                        onTimeUpdate: o,
                        onSeeking: o
                    }, t.id)
                })
            }

            function f(e) {
                let {
                    clip: t,
                    open: n,
                    onOpenChange: r
                } = e;
                return t ? (0, a.jsx)(i.Vq, {
                    open: n,
                    onOpenChange: r,
                    children: (0, a.jsxs)(i.cZ, {
                        className: "z-[10001] w-[min(95vw,900px)] max-w-4xl gap-0 overflow-hidden border-0 bg-black p-0 shadow-2xl",
                        onOpenAutoFocus: e => e.preventDefault(),
                        children: [(0, a.jsx)(i.$N, {
                            className: "sr-only",
                            children: "Clip playback"
                        }), (0, a.jsx)(x, {
                            clip: t
                        })]
                    })
                }) : null
            }

            function p(e) {
                let {
                    clips: t,
                    title: n,
                    showHeading: l,
                    searchPlaceholder: i = "Search clips…",
                    className: c,
                    playback: u = "inline",
                    fadeScrollEdges: p = !0,
                    autoFocusSearch: h = !1
                } = e, [g, v] = (0, r.useState)(""), [b, j] = (0, r.useState)("all"), [y, w] = (0, r.useState)(null), k = (0, r.useMemo)(() => {
                    let e = new Set;
                    for (let a of t) {
                        var n;
                        (null === (n = a.kind) || void 0 === n ? void 0 : n.trim()) && e.add(a.kind.trim())
                    }
                    return Array.from(e).sort((e, t) => e.localeCompare(t))
                }, [t]), N = (0, r.useMemo)(() => {
                    let e = g.trim().toLowerCase();
                    return t.filter(t => {
                        var n, a, r;
                        return ("all" === b || (null !== (n = t.kind) && void 0 !== n ? n : "").trim() === b) && (!e || [t.label, null !== (a = t.description) && void 0 !== a ? a : "", null !== (r = t.kind) && void 0 !== r ? r : ""].join("\n").toLowerCase().includes(e))
                    })
                }, [t, g, b]), J = "inline" === u ? !0 === l && !!(null == n ? void 0 : n.trim()) : null != l ? l : !!(null == n ? void 0 : n.trim());
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: (0, s.cn)("flex min-h-0 min-w-0 flex-1 flex-col", c),
                        children: [J && (null == n ? void 0 : n.trim()) ? (0, a.jsx)("div", {
                            className: "shrink-0 border-b border-border px-4 py-3 sm:px-6",
                            children: (0, a.jsx)("h2", {
                                className: "text-lg font-semibold text-[#344153]",
                                children: n.trim()
                            })
                        }) : null, (0, a.jsxs)("div", {
                            className: "flex min-h-0 flex-1 flex-col",
                            children: [(0, a.jsxs)("div", {
                                className: (0, s.cn)("flex shrink-0 flex-wrap items-center gap-x-3 gap-y-2 px-4 py-3 sm:px-6", k.length > 0 ? "justify-between" : "justify-end"),
                                children: [k.length > 0 ? (0, a.jsxs)("div", {
                                    className: "flex min-w-0 flex-1 flex-wrap gap-2",
                                    children: [(0, a.jsx)("button", {
                                        type: "button",
                                        onClick: () => j("all"),
                                        className: (0, s.cn)("rounded-full border px-3 py-1 text-xs font-medium transition-colors", "all" === b ? "border-transparent bg-foreground text-background" : "border-border bg-transparent text-muted-foreground hover:text-foreground"),
                                        children: "All"
                                    }), k.map(e => (0, a.jsx)("button", {
                                        type: "button",
                                        onClick: () => j(e),
                                        className: (0, s.cn)("rounded-full border px-3 py-1 text-xs font-medium transition-colors", b === e ? "border-transparent bg-foreground text-background" : "border-border bg-transparent text-muted-foreground hover:text-foreground"),
                                        children: e
                                    }, e))]
                                }) : null, (0, a.jsxs)("div", {
                                    className: "relative w-56 shrink-0",
                                    children: [(0, a.jsx)(o.Z, {
                                        className: "absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground"
                                    }), (0, a.jsx)(d, {
                                        placeholder: i,
                                        value: g,
                                        onChange: e => v(e.target.value),
                                        className: "h-8 bg-white pl-8 text-xs",
                                        autoFocus: h
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: (0, s.cn)("min-h-0 flex-1 px-4 sm:px-6", "inline" === u && y ? "pb-2" : ""),
                                style: p ? {
                                    maskImage: "linear-gradient(to bottom, transparent 0%, black 16px, black calc(100% - 32px), transparent 100%)",
                                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 16px, black calc(100% - 32px), transparent 100%)"
                                } : void 0,
                                children: (0, a.jsxs)("div", {
                                    className: "size-full overflow-y-auto pb-6 pt-2",
                                    style: {
                                        scrollbarWidth: "none"
                                    },
                                    children: [(0, a.jsx)("div", {
                                        className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
                                        children: N.map(e => (0, a.jsx)(m, {
                                            clip: e,
                                            onClick: () => w(e)
                                        }, e.id))
                                    }), 0 === N.length && (0, a.jsx)("p", {
                                        className: "py-12 text-center text-sm text-slate-400",
                                        children: "No clips match your search."
                                    })]
                                })
                            }), "inline" === u && y ? (0, a.jsx)("div", {
                                className: "shrink-0 border-t border-border px-4 pb-4 pt-3 sm:px-6",
                                children: (0, a.jsx)(x, {
                                    clip: y,
                                    className: "overflow-hidden rounded-lg"
                                })
                            }) : null]
                        })]
                    }), "modal" === u ? (0, a.jsx)(f, {
                        clip: y,
                        open: null != y,
                        onOpenChange: e => {
                            e || w(null)
                        }
                    }) : null]
                })
            }
        },
        25099: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return o
                }
            });
            var a = n(57437),
                r = n(87513),
                l = n(85086);

            function o(e) {
                let {
                    clips: t,
                    selectedClipId: n,
                    onClipSelect: o,
                    title: s = "Video clips",
                    className: i,
                    gridClassName: d = "grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4"
                } = e;
                return (0, a.jsxs)("div", {
                    className: (0, r.cn)("flex min-h-0 flex-col overflow-hidden text-card-foreground", i),
                    children: [(0, a.jsx)("div", {
                        className: "shrink-0 py-2",
                        children: (0, a.jsx)("h4", {
                            className: "text-sm font-semibold",
                            children: s
                        })
                    }), (0, a.jsx)("div", {
                        className: "min-h-0 overflow-y-auto px-3 py-2",
                        style: {
                            scrollbarWidth: "thin"
                        },
                        children: (0, a.jsx)("div", {
                            className: (0, r.cn)(d),
                            children: t.map(e => (0, a.jsx)(l.ki, {
                                clip: e,
                                selected: n === e.id,
                                onClick: () => o(e)
                            }, e.id))
                        })
                    })]
                })
            }
        },
        21648: function(e, t, n) {
            n.d(t, {
                aJ: function() {
                    return d
                },
                WE: function() {
                    return m
                },
                t$: function() {
                    return u
                }
            });
            var a = n(57437),
                r = n(2265);
            let l = (0, n(79205).Z)("chevrons-down-up", [
                ["path", {
                    d: "m7 20 5-5 5 5",
                    key: "13a0gw"
                }],
                ["path", {
                    d: "m7 4 5 5 5-5",
                    key: "1kwcof"
                }]
            ]);
            var o = n(24156),
                s = n(87513);

            function i(e) {
                return "".concat(Math.floor(e / 60), ":").concat(Math.floor(e % 60).toString().padStart(2, "0"))
            }
            let d = [{
                    text: "#F7792C",
                    bg: "#FEF2E8"
                }, {
                    text: "#2AA1FF",
                    bg: "#E8F6FF"
                }, {
                    text: "#429D53",
                    bg: "#EAF5EC"
                }, {
                    text: "#7F68D4",
                    bg: "#F2F0FB"
                }, {
                    text: "#DB3E43",
                    bg: "#FCEAEB"
                }, {
                    text: "#14A494",
                    bg: "#E6F7F4"
                }, {
                    text: "#E9B30B",
                    bg: "#FDF7E5"
                }, {
                    text: "#A144AE",
                    bg: "#F6ECF7"
                }, {
                    text: "#FB41FF",
                    bg: "#FFEAFF"
                }, {
                    text: "#939393",
                    bg: "#F6F6F6"
                }],
                c = new Map(d.map(e => [e.text, e]));

            function u(e) {
                var t;
                return null !== (t = c.get(e)) && void 0 !== t ? t : {
                    text: e,
                    bg: "".concat(e, "15")
                }
            }

            function m(e) {
                let {
                    duration: t,
                    currentTime: n,
                    annotations: d,
                    tracks: c,
                    selectedAnnotationId: u,
                    onTimeChange: m,
                    onAnnotationSelect: f
                } = e, p = (0, r.useRef)(null), h = (0, r.useRef)(null), g = (0, r.useRef)(!1), [v, b] = (0, r.useState)(1), [j, y] = (0, r.useState)(!0), [w, k] = (0, r.useState)(!1), N = (0, r.useMemo)(() => new Map(d.map(e => [e.id, e])), [d]), J = (0, r.useMemo)(() => (function(e, t) {
                    if (e <= 0) return [{
                        time: 0,
                        isLabel: !0
                    }];
                    let n = e / t,
                        a = n <= 10 ? 1 : n <= 30 ? 2 : n <= 60 ? 5 : n <= 300 ? 15 : 30,
                        r = a / 4,
                        l = [];
                    for (let t = 0; t <= e + r / 2; t += r) {
                        let n = Math.round(100 * t) / 100;
                        if (n > e) break;
                        let r = .001 > Math.abs(n % a) || .001 > Math.abs(n % a - a);
                        l.push({
                            time: n,
                            isLabel: r
                        })
                    }
                    let o = l[l.length - 1];
                    return (!o || Math.abs(o.time - e) > r / 2) && l.push({
                        time: e,
                        isLabel: !0
                    }), l
                })(t, v), [t, v]), C = (0, r.useCallback)(e => {
                    let n = h.current;
                    if (!n || t <= 0) return null;
                    let a = n.getBoundingClientRect();
                    return Math.max(0, Math.min(1, (e - a.left) / a.width)) * t
                }, [t]), T = (0, r.useCallback)(e => {
                    if (!m || e.target.closest("[data-timeline-segment]")) return;
                    e.preventDefault(), g.current = !0;
                    let t = C(e.clientX);
                    null != t && m(t)
                }, [m, C]);
                (0, r.useEffect)(() => {
                    let e = 0,
                        t = t => {
                            g.current && m && (cancelAnimationFrame(e), e = requestAnimationFrame(() => {
                                let e = C(t.clientX);
                                null != e && m(e)
                            }))
                        },
                        n = () => {
                            g.current = !1, cancelAnimationFrame(e)
                        };
                    return window.addEventListener("mousemove", t), window.addEventListener("mouseup", n), () => {
                        window.removeEventListener("mousemove", t), window.removeEventListener("mouseup", n), cancelAnimationFrame(e)
                    }
                }, [m, C]), (0, r.useEffect)(() => {
                    let e = p.current;
                    if (!e) return;
                    let t = e => {
                        if (e.ctrlKey || e.metaKey) {
                            e.preventDefault();
                            let t = e.deltaY > 0 ? -.5 : .5;
                            b(e => Math.min(8, Math.max(1, e + t)))
                        }
                    };
                    return e.addEventListener("wheel", t, {
                        passive: !1
                    }), () => e.removeEventListener("wheel", t)
                }, []), (0, r.useEffect)(() => {
                    if (v <= 1 || g.current) return;
                    let e = p.current;
                    if (!e) return;
                    let a = n / t * e.scrollWidth,
                        r = e.scrollLeft,
                        l = r + e.clientWidth,
                        o = .15 * e.clientWidth;
                    a < r + o ? e.scrollLeft = a - o : a > l - o && (e.scrollLeft = a - e.clientWidth + o)
                }, [n, t, v]);
                let A = t > 0 ? n / t * 100 : 0,
                    E = c.length > 5,
                    z = (0, r.useMemo)(() => {
                        for (let e = J.length - 1; e >= 0; e--)
                            if (J[e].isLabel) return J[e].time;
                        return null
                    }, [J]);
                return (0, a.jsx)("div", {
                    className: "relative flex select-none flex-col",
                    onMouseEnter: () => k(!0),
                    onMouseLeave: () => k(!1),
                    children: (0, a.jsx)("div", {
                        ref: p,
                        className: "overflow-x-auto scrollbar-none",
                        children: (0, a.jsxs)("div", {
                            ref: h,
                            className: "relative flex flex-col",
                            style: {
                                minWidth: "".concat(100 * v, "%")
                            },
                            onMouseDown: T,
                            children: [(0, a.jsx)("div", {
                                "data-timeline-ruler": !0,
                                className: "relative flex h-7 cursor-pointer items-center border-b border-border",
                                children: J.map(e => {
                                    let {
                                        time: n,
                                        isLabel: r
                                    } = e, s = n / t * 100;
                                    return n === z && w && v <= 1 ? (0, a.jsx)("div", {
                                        className: "absolute -translate-x-1/2",
                                        style: {
                                            left: "".concat(s, "%")
                                        },
                                        children: (0, a.jsx)("button", {
                                            type: "button",
                                            "data-timeline-toggle": !0,
                                            className: "inline-flex items-center justify-center rounded-md p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                                            onClick: e => {
                                                e.stopPropagation(), y(e => !e)
                                            },
                                            onMouseDown: e => e.stopPropagation(),
                                            children: j ? (0, a.jsx)(l, {
                                                className: "size-3.5"
                                            }) : (0, a.jsx)(o.Z, {
                                                className: "size-3.5"
                                            })
                                        })
                                    }, n) : (0, a.jsx)("div", {
                                        className: "absolute -translate-x-1/2",
                                        style: {
                                            left: "".concat(s, "%")
                                        },
                                        children: r ? (0, a.jsx)("span", {
                                            className: "text-[10px] tabular-nums text-muted-foreground/60",
                                            children: i(n)
                                        }) : (0, a.jsx)("span", {
                                            className: "inline-block size-1 rounded-full bg-muted-foreground/30"
                                        })
                                    }, n)
                                })
                            }), j && (0, a.jsx)("div", {
                                className: (0, s.cn)("flex flex-col", E && "overflow-y-auto"),
                                style: E ? {
                                    maxHeight: 220
                                } : void 0,
                                children: c.map((e, n) => (0, a.jsx)("div", {
                                    className: "relative h-10 cursor-pointer overflow-hidden border-b border-border last:border-b-0",
                                    children: e.annotationIds.map(e => {
                                        let r = N.get(e);
                                        return r && null != r.timestamp && null != r.endTimestamp ? (0, a.jsx)(x, {
                                            annotation: r,
                                            duration: t,
                                            colorIndex: n,
                                            isSelected: e === u,
                                            onClick: () => {
                                                null == f || f(e), null != r.timestamp && (null == m || m(r.timestamp))
                                            }
                                        }, e) : null
                                    })
                                }, e.id))
                            }), (0, a.jsxs)("div", {
                                "data-playhead": !0,
                                className: "pointer-events-none absolute top-0 bottom-0",
                                style: {
                                    left: "".concat(A, "%")
                                },
                                children: [(0, a.jsx)("span", {
                                    className: "absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-1.5 py-0.5 text-[10px] font-medium tabular-nums text-background",
                                    children: i(n)
                                }), (0, a.jsx)("div", {
                                    className: "absolute left-1/2 w-px -translate-x-1/2 bg-foreground/80",
                                    style: {
                                        top: 18,
                                        bottom: 0
                                    }
                                })]
                            })]
                        })
                    })
                })
            }

            function x(e) {
                var t, n;
                let {
                    annotation: r,
                    duration: l,
                    colorIndex: o,
                    isSelected: i,
                    onClick: c
                } = e, u = null !== (t = r.timestamp) && void 0 !== t ? t : 0, m = null !== (n = r.endTimestamp) && void 0 !== n ? n : u, x = d[o % d.length];
                return (0, a.jsx)("div", {
                    "data-timeline-segment": !0,
                    "data-annotation-id": r.id,
                    "data-selected": i ? "true" : "false",
                    className: (0, s.cn)("absolute inset-y-1.5 flex cursor-pointer items-center overflow-hidden rounded-lg px-3 text-xs font-medium transition-all", i ? "ring-1 ring-foreground/50" : "hover:brightness-95"),
                    style: {
                        left: "".concat(u / l * 100, "%"),
                        width: "".concat((m - u) / l * 100, "%"),
                        backgroundColor: x.bg,
                        color: x.text
                    },
                    onClick: e => {
                        e.stopPropagation(), c()
                    },
                    children: (0, a.jsx)("span", {
                        className: "truncate",
                        children: r.label
                    })
                })
            }
        },
        64962: function(e, t, n) {
            function a(e) {
                return !Number.isFinite(e) || e < 0 ? "0:00" : "".concat(Math.floor(e / 60), ":").concat(Math.floor(e % 60).toString().padStart(2, "0"))
            }

            function r(e) {
                let {
                    type: t,
                    annotationCount: n,
                    trackCount: a,
                    temporalSegmentCount: r,
                    duration: l
                } = e;
                return {
                    showDetectionLayer: n > 0 && ("image" === t || "video" === t || "document" === t),
                    showTrackTimeline: "video" === t && a > 0 && l > 0,
                    showEventLane: "video" === t && r > 0 && l > 0,
                    showAnnotationTable: n > 0
                }
            }

            function l(e, t) {
                if (0 === t.length) return [...e];
                let n = new Set(t);
                return e.filter(e => !n.has(e.id))
            }

            function o(e, t) {
                return e.filter(e => null == e.timestamp || null == e.endTimestamp || t >= e.timestamp && t <= e.endTimestamp)
            }

            function s(e, t) {
                return e.length > 0 && t > 0
            }
            n.d(t, {
                DQ: function() {
                    return a
                },
                E6: function() {
                    return s
                },
                XX: function() {
                    return l
                },
                hQ: function() {
                    return r
                },
                mW: function() {
                    return o
                }
            })
        },
        87769: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            let a = (0, n(79205).Z)("eye-off", [
                ["path", {
                    d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
                    key: "ct8e1f"
                }],
                ["path", {
                    d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
                    key: "151rxh"
                }],
                ["path", {
                    d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
                    key: "13bj9a"
                }],
                ["path", {
                    d: "m2 2 20 20",
                    key: "1ooewy"
                }]
            ])
        },
        33276: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            let a = (0, n(79205).Z)("play", [
                ["path", {
                    d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
                    key: "10ikf1"
                }]
            ])
        },
        10866: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            let a = (0, n(79205).Z)("settings-2", [
                ["path", {
                    d: "M14 17H5",
                    key: "gfn3mx"
                }],
                ["path", {
                    d: "M19 7h-9",
                    key: "6i9tg"
                }],
                ["circle", {
                    cx: "17",
                    cy: "17",
                    r: "3",
                    key: "18b49y"
                }],
                ["circle", {
                    cx: "7",
                    cy: "7",
                    r: "3",
                    key: "dfmy0x"
                }]
            ])
        }
    }
]);