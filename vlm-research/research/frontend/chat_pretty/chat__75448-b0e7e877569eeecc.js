try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d0b6a757-92a9-4543-86cf-9aaca6a359a3", e._sentryDebugIdIdentifier = "sentry-dbid-d0b6a757-92a9-4543-86cf-9aaca6a359a3")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [75448], {
        47896: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return v
                }
            });
            var i = n(57437),
                r = n(2265),
                l = n(33145),
                a = n(51817),
                o = n(32489),
                s = n(60026),
                c = n(69658),
                d = n(94508),
                u = n(62869),
                m = n(26110),
                f = n(34909),
                p = n(7999),
                g = n(41193),
                h = n(9009);
            let x = (e, t, n) => {
                    if (n) return "data:".concat(e || ("image" === t ? "image/jpeg" : "video" === t ? "video/mp4" : "pdf" === t ? "application/pdf" : "audio" === t ? "audio/mpeg" : "application/octet-stream"), ";base64,").concat(n)
                },
                v = e => {
                    let {
                        isOpen: t,
                        file: n,
                        onOpenChange: v,
                        onBackgroundClick: b,
                        embedChrome: y = !1
                    } = e, [j, w] = (0, r.useState)(null), [N, k] = (0, r.useState)(n), [_, C] = (0, r.useState)(!1), S = (0, r.useRef)(null);
                    (0, r.useEffect)(() => {
                        t && (k(n), C(!1))
                    }, [t, n]), (0, r.useLayoutEffect)(() => {
                        if (y) return (0, h.VG)(t), (0, h.ON)(t), () => {
                            (0, h.ON)(!1), (0, h.VG)(!1)
                        }
                    }, [t, y]), (0, r.useEffect)(() => {
                        if (!(null == N ? void 0 : N.file)) {
                            w(null);
                            return
                        }
                        let e = URL.createObjectURL(N.file);
                        return w(e), C(!1), () => {
                            URL.revokeObjectURL(e)
                        }
                    }, [null == N ? void 0 : N.file]);
                    let I = (0, r.useMemo)(() => {
                            if (null == N ? void 0 : N.type) return "document" === N.type ? "pdf" : N.type
                        }, [null == N ? void 0 : N.type]),
                        z = (0, r.useMemo)(() => x(null == N ? void 0 : N.mimeType, null != I ? I : "", null == N ? void 0 : N.base64), [null == N ? void 0 : N.base64, null == N ? void 0 : N.mimeType, I]),
                        T = (0, r.useMemo)(() => {
                            if (N) return j || N.previewUrl || z
                        }, [z, N, j]),
                        E = e => {
                            e.target === e.currentTarget && (null == b || b(e))
                        },
                        M = (null == N ? void 0 : N.name) || (null == N ? void 0 : N.label) || "File Viewer",
                        A = "image" === I,
                        F = "video" === I,
                        L = "model" === I,
                        O = "pdf" === I ? T : void 0,
                        R = "audio" === I ? T : void 0,
                        Z = L ? T : void 0,
                        D = () => {
                            T && window.open(T, "_blank", "noopener,noreferrer")
                        };
                    return (0, i.jsx)(m.Vq, {
                        open: t,
                        onOpenChange: v,
                        children: N ? L ? (0, i.jsxs)(m.cZ, {
                            ref: S,
                            overlayClassName: y ? "bg-transparent backdrop-blur-none" : void 0,
                            className: "left-0 top-0 flex h-screen w-screen max-w-none translate-x-0 translate-y-0 items-center justify-center border-none bg-black/90 p-0 shadow-none sm:rounded-none",
                            hideCloseButton: !0,
                            onClick: E,
                            children: [(0, i.jsx)(m.GG, {
                                asChild: !0,
                                children: (0, i.jsx)("button", {
                                    type: "button",
                                    className: "fixed right-6 top-6 z-[70] inline-flex size-10 items-center justify-center rounded-full bg-slate-800/80 text-white transition hover:bg-slate-700/80 focus:outline-none focus:ring-2 focus:ring-white",
                                    children: (0, i.jsx)(o.Z, {
                                        className: "size-4"
                                    })
                                })
                            }), (0, i.jsxs)("div", {
                                className: "flex size-full flex-col items-center justify-center gap-4 px-4 py-6",
                                children: [(0, i.jsx)("div", {
                                    className: "w-full max-w-5xl overflow-hidden rounded-3xl bg-black shadow-2xl",
                                    children: Z ? (0, i.jsx)("div", {
                                        className: "h-[70vh] w-full",
                                        children: (0, i.jsx)(g.SparkModelViewer, {
                                            url: Z
                                        })
                                    }) : (0, i.jsx)("div", {
                                        className: "flex h-[60vh] items-center justify-center text-white/80",
                                        children: "Model preview unavailable"
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "flex items-center gap-3 text-white",
                                    children: [(0, i.jsx)("span", {
                                        className: "text-sm font-medium",
                                        children: M
                                    }), T && (0, i.jsx)(u.z, {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: D,
                                        children: "Open in new tab"
                                    })]
                                })]
                            })]
                        }) : A || F ? (0, i.jsx)(m.cZ, {
                            ref: S,
                            overlayClassName: y ? "bg-transparent backdrop-blur-none" : void 0,
                            className: "z-[10001] w-auto max-w-[96vw] gap-0 overflow-hidden border-0 bg-transparent p-0 text-white shadow-none",
                            hideCloseButton: !0,
                            children: A ? (0, i.jsx)("div", {
                                className: "relative inline-block",
                                children: (0, i.jsx)(l.default, {
                                    src: T || "",
                                    alt: M,
                                    width: 2e3,
                                    height: 2e3,
                                    className: "block h-auto max-h-[90vh] w-auto max-w-[96vw] rounded-lg object-contain",
                                    unoptimized: !0
                                })
                            }) : _ || !T ? (0, i.jsxs)("div", {
                                className: "flex min-h-[240px] min-w-[280px] flex-col items-center justify-center gap-3 rounded-lg bg-zinc-900 px-6 py-10 text-center",
                                children: [(0, i.jsx)(s.Z, {
                                    className: "size-10 text-white/70"
                                }), (0, i.jsx)("div", {
                                    className: "text-sm font-medium text-white",
                                    children: M
                                }), (0, i.jsx)("div", {
                                    className: "max-w-sm text-xs text-white/60",
                                    children: "This browser can't preview this video codec. The file is still attached and can be sent."
                                }), T ? (0, i.jsx)(u.z, {
                                    variant: "secondary",
                                    size: "sm",
                                    onClick: D,
                                    children: "Open in new tab"
                                }) : null]
                            }) : (0, i.jsx)("video", {
                                src: T,
                                controls: !0,
                                autoPlay: !0,
                                muted: !0,
                                playsInline: !0,
                                preload: "metadata",
                                className: "block h-auto max-h-[90vh] w-auto max-w-[96vw] rounded-lg object-contain",
                                onError: () => C(!0)
                            }, T)
                        }) : (0, i.jsxs)(m.cZ, {
                            ref: S,
                            overlayClassName: y ? "bg-transparent backdrop-blur-none" : void 0,
                            className: (0, d.cn)("attachment-preview-dialog flex h-[80vh] flex-col overflow-hidden p-0", y ? "w-[min(92vw,56rem)] max-w-4xl border-0 bg-background shadow-lg" : "max-w-2xl"),
                            onWheel: e => e.stopPropagation(),
                            children: ["pdf" === I && O && (0, i.jsx)("div", {
                                className: "min-h-0 flex-1",
                                children: (0, i.jsx)(p.H, {
                                    pdfUrl: O,
                                    responseUrl: "",
                                    showBoundingBoxes: !1
                                })
                            }), "audio" === I && R && (0, i.jsx)("div", {
                                className: "flex size-full items-center justify-center p-6",
                                children: (0, i.jsx)("div", {
                                    className: "w-full max-w-3xl",
                                    children: (0, i.jsx)(f.default, {
                                        audioUrl: R,
                                        responseUrl: ""
                                    })
                                })
                            }), !["pdf", "audio", "video", "image"].includes(null != I ? I : "") && (0, i.jsx)("div", {
                                className: "flex size-full items-center justify-center",
                                children: (0, i.jsxs)("div", {
                                    className: "flex flex-col items-center gap-4",
                                    children: [(0, i.jsx)(c.Z, {
                                        className: "size-16 text-muted-foreground"
                                    }), (0, i.jsx)("p", {
                                        className: "text-muted-foreground",
                                        children: "Unsupported file type"
                                    }), T && (0, i.jsx)(u.z, {
                                        onClick: D,
                                        variant: "outline",
                                        children: "Open in New Tab"
                                    })]
                                })
                            })]
                        }) : (0, i.jsx)(m.cZ, {
                            ref: S,
                            overlayClassName: y ? "bg-transparent backdrop-blur-none" : void 0,
                            className: "left-0 top-0 flex h-screen w-screen max-w-none translate-x-0 translate-y-0 items-center justify-center border-none bg-black/90 p-0 shadow-none sm:rounded-none",
                            hideCloseButton: !0,
                            onClick: E,
                            children: (0, i.jsx)(a.Z, {
                                className: "size-6 animate-spin text-muted-foreground"
                            })
                        })
                    })
                }
        },
        62143: function(e, t, n) {
            n.d(t, {
                n: function() {
                    return o
                }
            }), n(57437);
            var i = n(2265),
                r = n(8102);
            let l = new Set(["IMG", "PICTURE", "CANVAS"]);

            function a(e) {
                return e instanceof Element && l.has(e.tagName)
            }

            function o() {
                let e = (0, r.L)(e => e.isSuperUser);
                return (0, i.useMemo)(() => e ? {} : {
                    "data-protect-images": "true",
                    onContextMenu: e => {
                        a(e.target) && e.preventDefault()
                    },
                    onDragStart: e => {
                        a(e.target) && e.preventDefault()
                    }
                }, [e])
            }
        },
        67212: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return y
                }
            });
            var i = n(57437),
                r = n(2265),
                l = n(33145),
                a = n(90945),
                o = n(31349),
                s = n(73198),
                c = n(48736),
                d = n(93947),
                u = n(10586),
                m = n(94508),
                f = n(5073),
                p = n(39481);
            let g = {
                    rectangle: {
                        icon: a.Z,
                        name: "Box"
                    },
                    point: {
                        icon: o.Z,
                        name: "Point"
                    },
                    brush: {
                        icon: s.Z,
                        name: "Brush"
                    }
                },
                h = {
                    icon: a.Z,
                    name: "Selection"
                },
                x = (e, t, n) => {
                    if ("video" === n) return !0;
                    let i = (t || "").toLowerCase();
                    if (i.startsWith("vid_") || i.startsWith("video_") || i.startsWith("url_")) return !0;
                    let r = (e || "").toLowerCase();
                    return !!r && !!(/\.(mp4|mov|m4v|webm|mkv|avi|m3u8)(\?|$)/.test(r) || /[?&](type|format|mime|mimetype)=video/.test(r))
                },
                v = e => {
                    if (!e) return;
                    let t = e.split("?")[0].toLowerCase();
                    return t.endsWith(".mp4") || t.endsWith(".m4v") ? "video/mp4" : t.endsWith(".mov") ? "video/quicktime" : t.endsWith(".webm") ? "video/webm" : t.endsWith(".mkv") ? "video/x-matroska" : t.endsWith(".m3u8") ? "application/vnd.apple.mpegurl" : void 0
                },
                b = e => {
                    if (!e || "undefined" == typeof document) return !0;
                    let t = document.createElement("video").canPlayType(e);
                    return "probably" === t || "maybe" === t
                };

            function y(e) {
                var t, n;
                let {
                    artifactId: a,
                    objectId: o,
                    label: s,
                    previewUrl: y,
                    kind: j,
                    selectionEntry: w,
                    onOpenPreview: N,
                    onChipMouseDown: k,
                    hoverSide: _ = "top",
                    allowWrap: C = !1,
                    className: S
                } = e, I = !!w, [z, T] = (0, r.useState)(() => x(y, o, j)), [E, M] = (0, r.useState)(!1), [A, F] = (0, r.useState)(!1), L = (0, r.useMemo)(() => v(y), [y]), O = (0, r.useMemo)(() => b(L), [L]);
                (0, r.useEffect)(() => {
                    T(x(y, o, j)), M(!O), F(!1)
                }, [y, o, j, O]);
                let [R, Z] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    Z(!1)
                }, [y]);
                let D = (0, r.useCallback)(() => Z(!0), []),
                    W = (0, u.r)(null !== (t = null == w ? void 0 : w.colorIndex) && void 0 !== t ? t : 0),
                    U = w && null !== (n = g[w.shape.type]) && void 0 !== n ? n : h;

                function P(e) {
                    if (e.preventDefault(), e.stopPropagation(), N) {
                        N({
                            artifactId: a,
                            objectId: o,
                            label: s,
                            previewUrl: y,
                            kind: j,
                            selectionEntry: w
                        });
                        return
                    }
                    y && window.open(y, "_blank", "noopener,noreferrer")
                }
                let H = U.icon,
                    q = (0, i.jsx)("span", {
                        className: (0, m.cn)("group/mention pointer-events-auto inline-flex cursor-pointer items-center transition-colors", C ? "whitespace-normal break-words" : "whitespace-nowrap", I ? "gap-1 rounded-md px-2 py-0.5 text-[15px] font-medium leading-5" : "rounded-[10px] border border-blue-100/60 bg-[#F0F4FF] px-1.5 py-px font-mono text-[85%] leading-tight text-foreground hover:border-blue-200 hover:bg-[#E8EEFF]", S),
                        title: I ? null == w ? void 0 : w.label : s,
                        style: I ? {
                            backgroundColor: W.bg,
                            color: W.text
                        } : void 0,
                        onMouseDown: k,
                        onClick: P,
                        onMouseEnter: e => I && (e.currentTarget.style.backgroundColor = W.bgHover),
                        onMouseLeave: e => I && (e.currentTarget.style.backgroundColor = W.bg),
                        children: I ? (0, i.jsxs)("span", {
                            className: "inline-flex items-center",
                            children: [(0, i.jsx)(H, {
                                className: "size-3.5"
                            }), (0, i.jsx)("span", {
                                children: U.name
                            })]
                        }) : (0, i.jsx)("span", {
                            className: C ? "whitespace-normal break-words" : "truncate",
                            children: s
                        })
                    });

                function $(e, t) {
                    return (0, i.jsx)("div", {
                        className: "flex flex-col items-start gap-2",
                        children: (0, i.jsxs)("div", {
                            className: "relative overflow-hidden rounded-md",
                            style: {
                                width: "10rem",
                                aspectRatio: "4 / 3"
                            },
                            children: [!R && (0, i.jsx)("div", {
                                className: "absolute inset-0",
                                children: (0, i.jsx)(p.d, {
                                    kind: "image",
                                    rounded: "md",
                                    className: "border-0",
                                    pathSeed: y
                                })
                            }), (0, i.jsx)(l.default, {
                                src: y,
                                alt: e,
                                fill: !0,
                                className: (0, m.cn)("object-contain transition-opacity duration-150", R ? "opacity-100" : "opacity-0"),
                                onLoadingComplete: D,
                                onError: D
                            }), t]
                        })
                    })
                }

                function B(e, t) {
                    return (0, i.jsxs)("div", {
                        className: "flex h-32 w-40 flex-col items-center justify-center gap-2 rounded-lg border border-border/60 bg-background text-center",
                        children: [(0, i.jsx)(e, {
                            className: (0, m.cn)("size-7", t)
                        }), (0, i.jsx)("span", {
                            className: "line-clamp-3 px-3 text-xs font-medium leading-4 text-foreground/90",
                            children: s
                        }), y && (0, i.jsx)("button", {
                            type: "button",
                            onClick: P,
                            className: "inline-flex items-center justify-center rounded-full border border-border/70 bg-background px-3 py-1 text-[11px] font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground",
                            children: "Open"
                        })]
                    })
                }
                let G = I ? y && "image" === j ? $(w.label, function() {
                    if (!w) return null;
                    let {
                        shape: e
                    } = w;
                    if ("rectangle" === e.type) {
                        let {
                            x: t,
                            y: n,
                            width: r,
                            height: l
                        } = e.box;
                        return (0, i.jsx)("div", {
                            className: "absolute rounded-[3px] border",
                            style: {
                                left: "".concat(100 * t, "%"),
                                top: "".concat(100 * n, "%"),
                                width: "".concat(Math.max(100 * r, 1), "%"),
                                height: "".concat(Math.max(100 * l, 1), "%"),
                                borderColor: W.overlayBorder,
                                backgroundColor: W.overlay
                            }
                        })
                    }
                    if ("point" === e.type) return (0, i.jsx)("span", {
                        className: "absolute rounded-full border-2",
                        style: {
                            width: "".concat(2.6, "%"),
                            height: "".concat(2.6, "%"),
                            left: "calc(".concat(100 * e.point.x, "% - ").concat(1.3, "%)"),
                            top: "calc(".concat(100 * e.point.y, "% - ").concat(1.3, "%)"),
                            borderColor: W.overlayBorder,
                            backgroundColor: W.overlay
                        }
                    });
                    if ("brush" === e.type) {
                        let t = e.points.map(e => "".concat(100 * e.x, ",").concat(100 * e.y)).join(" ");
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: "absolute inset-0 bg-black/45"
                            }), (0, i.jsx)("svg", {
                                className: "absolute inset-0",
                                viewBox: "0 0 100 100",
                                preserveAspectRatio: "none",
                                children: (0, i.jsx)("polyline", {
                                    points: t,
                                    stroke: W.primary,
                                    strokeWidth: Math.max(e.strokeWidth / 1e3 * 8, 1.5),
                                    fill: "none",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            })]
                        })
                    }
                    return null
                }()) : (0, i.jsx)("div", {
                    className: "rounded-md border border-border/60 bg-background px-4 py-3 text-xs font-medium text-muted-foreground",
                    children: "Preview unavailable for this selection."
                }) : y ? "document" === j ? B(c.Z, "text-red-500") : "model" === j ? B(d.Z, "text-slate-500") : z ? E ? (0, i.jsxs)("div", {
                    className: "flex max-w-64 flex-col items-start gap-2 rounded-md border border-border/60 bg-background px-3 py-2 text-[11px] font-medium text-foreground/90",
                    children: [(0, i.jsx)("span", {
                        children: "Video format not supported in this browser."
                    }), y && (0, i.jsx)("button", {
                        type: "button",
                        onClick: P,
                        className: "inline-flex items-center justify-center rounded-full border border-border/60 px-3 py-1 text-[11px] font-semibold underline-offset-2 transition-colors hover:bg-muted",
                        children: "Open in new tab"
                    })]
                }) : (0, i.jsx)("div", {
                    className: "flex flex-col items-start gap-2",
                    children: (0, i.jsxs)("div", {
                        className: "relative h-32 w-40 overflow-hidden rounded-md bg-black",
                        children: [(0, i.jsx)("video", {
                            src: y,
                            controls: !0,
                            autoPlay: !0,
                            muted: !0,
                            playsInline: !0,
                            preload: "metadata",
                            className: (0, m.cn)("size-full object-contain", !A && "invisible"),
                            onLoadedData: () => F(!0),
                            onError: () => M(!0),
                            children: (0, i.jsx)("source", {
                                src: y,
                                type: L || "video/mp4"
                            })
                        }), A ? null : (0, i.jsx)("div", {
                            className: "absolute inset-0",
                            children: (0, i.jsx)(p.d, {
                                kind: "video",
                                rounded: "md",
                                className: "border-0",
                                pathSeed: y
                            })
                        })]
                    })
                }) : $(s) : null;
                return G ? (0, i.jsxs)(f.zs, {
                    openDelay: 120,
                    closeDelay: 120,
                    children: [(0, i.jsx)(f.Yi, {
                        asChild: !0,
                        children: q
                    }), (0, i.jsx)(f.bZ, {
                        side: _,
                        className: "w-auto border-none bg-transparent p-0 shadow-none",
                        style: {
                            background: "none",
                            boxShadow: "none",
                            border: "none"
                        },
                        children: G
                    })]
                }) : q
            }
        },
        75448: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return e4
                },
                a: function() {
                    return eR
                }
            });
            var i = n(57437),
                r = n(2265),
                l = n(33145),
                a = n(64982),
                o = n(63558),
                s = n(89227),
                c = n(33276),
                d = n(92451),
                u = n(10407),
                m = n(96362),
                f = n(47416),
                p = n(60026),
                g = n(48736),
                h = n(30401),
                x = n(78867),
                v = n(45675),
                b = n(74394),
                y = n(69076),
                j = n(49232),
                w = n(33245),
                N = n(32489),
                k = n(54887),
                _ = n(2293),
                C = n(31604),
                S = n(94508),
                I = n(62080),
                z = n(81159),
                T = n(62869),
                E = n(39481),
                M = n(76818),
                A = n(81103),
                F = n(85285),
                L = n(7999),
                O = n(12782),
                R = n(55216),
                Z = n(39486),
                D = n(75554),
                W = n(36793);
            let U = /<think>[\s\S]*?(?:<\/redacted_thinking>|<\/think>)/gi,
                P = /```media-cards-canvas[\s\S]*?```/i;

            function H(e) {
                let t = e.replace(U, ""),
                    n = (t = (t = (t = (t = (t = t.replace(W.Gv, "")).replace(W.jA, "")).replace(W.Jl, "")).replace(P, "")).replace(/```[\s\S]*?```/g, "")).search(/<preview(?:[\s/>]|_)/i);
                return n >= 0 && (t = t.slice(0, n)), t.replace(/\n{3,}/g, "\n\n").trim()
            }
            var q = n(87522);

            function $(e) {
                return new Set(e.rows.flatMap(e => e.blocks.map(e => e.kind)))
            }

            function B(e) {
                let t = null == e ? void 0 : e.evidence_items;
                if (!Array.isArray(t)) return null;
                for (let e of t) {
                    if (!e || "object" != typeof e) continue;
                    let t = e.thumbnail_url;
                    if ("string" == typeof t && t.trim()) {
                        let n = e.label;
                        return {
                            url: t.trim(),
                            label: "string" == typeof n ? n : void 0
                        }
                    }
                }
                return null
            }

            function G(e) {
                if (!(0, q.jN)(e)) return null;
                let t = e.match(/```media-cards-canvas\n([\s\S]*?)```/i);
                if (!(null == t ? void 0 : t[1])) return null;
                try {
                    var n, i;
                    let e = JSON.parse(t[1].trim()),
                        r = null !== (n = e.layout) && void 0 !== n ? n : 2 === e.version && Array.isArray(e.rows) ? e : null;
                    if (!r || 2 !== r.version || !Array.isArray(r.rows)) return null;
                    return {
                        layout: r,
                        media_context: null !== (i = e.media_context) && void 0 !== i ? i : e.mediaContext
                    }
                } catch (e) {
                    return null
                }
            }

            function J(e) {
                let t = null == e ? void 0 : e.description;
                if (!t || "object" != typeof t) return;
                let n = t.summary;
                return "string" == typeof n ? n.trim() : void 0
            }

            function V(e) {
                let t = G(e.assistantContent);
                if (!t) return null;
                let n = $(t.layout);
                if (!n.has("annotation_table") || n.has("video_viewport") || n.has("video_timeline") || n.has("transcript_card") || n.has("video_clips_picker")) return null;
                let i = e.previewGalleries.flatMap(e => e.images).find(e => "image" === e.kind),
                    r = null == i ? void 0 : i.url;
                if (!r) return null;
                let l = (0, D.xi)(t.media_context);
                if (!l || 0 === l.annotations.length) return null;
                let a = J(t.media_context) || H(e.assistantContent).trim() || void 0;
                return {
                    type: "image",
                    src: r,
                    title: (null == i ? void 0 : i.label) || (null == i ? void 0 : i.groupTitle) || "Image analysis",
                    description: a,
                    annotations: [...l.annotations],
                    spatialOverlaySvgInner: l.spatialOverlaySvgInner,
                    tracks: l.tracks.length > 0 ? [...l.tracks] : void 0
                }
            }

            function K(e) {
                let t = G(e.assistantContent);
                if (!t || ! function(e, t) {
                        var n;
                        let i = $(e);
                        if (!i.has("scene_evidence_mini_grid") || i.has("annotation_table") || i.has("expandable_video_description") || i.has("video_viewport") || i.has("transcript_card") || i.has("video_timeline") || i.has("video_clips_picker")) return !1;
                        let r = (0, D.xi)(t);
                        return (null !== (n = null == r ? void 0 : r.evidenceItems.length) && void 0 !== n ? n : 0) >= 2
                    }(t.layout, t.media_context)) return null;
                let n = (0, D.xi)(t.media_context);
                return !n || n.evidenceItems.length < 2 ? null : {
                    title: "Image grid",
                    summary: J(t.media_context),
                    items: [...n.evidenceItems]
                }
            }

            function Q(e) {
                var t, n;
                let i = G(e.assistantContent);
                if (!i || ! function(e, t, n) {
                        let i = t.some(e => e.images.some(e => "image" === e.kind)),
                            r = !!B(n);
                        if (!i && !r) return !1;
                        let l = $(e);
                        return !(!l.has("expandable_video_description") || l.has("annotation_table") || l.has("video_viewport") || l.has("transcript_card") || l.has("video_timeline") || l.has("video_clips_picker"))
                    }(i.layout, e.previewGalleries, i.media_context)) return null;
                let l = e.previewGalleries.flatMap(e => e.images).find(e => "image" === e.kind),
                    a = B(i.media_context),
                    o = null !== (t = null == l ? void 0 : l.url) && void 0 !== t ? t : null == a ? void 0 : a.url;
                if (!o) return null;
                let s = J(i.media_context) || H(e.assistantContent).trim() || void 0;
                return {
                    type: "image",
                    src: o,
                    title: (null == l ? void 0 : l.label) || (null == l ? void 0 : l.groupTitle) || (null == a ? void 0 : a.label) || "Generated image",
                    detailSlot: null !== (n = function(e) {
                        let t = J(e);
                        if (!t) return;
                        let n = null == e ? void 0 : e.description;
                        if (!n || "object" != typeof n) return (0, r.createElement)(Z.y, {
                            summary: t
                        });
                        let i = "string" == typeof n.metadata_line ? n.metadata_line : "string" == typeof n.metadataLine ? n.metadataLine : void 0,
                            l = Array.isArray(n.categories) ? n.categories.filter(e => "string" == typeof e) : [],
                            a = Array.isArray(n.about_topics) ? n.about_topics.filter(e => "string" == typeof e) : Array.isArray(n.aboutTopics) ? n.aboutTopics.filter(e => "string" == typeof e) : [],
                            o = "string" == typeof n.accent_line ? n.accent_line : "string" == typeof n.accentLine ? n.accentLine : "string" == typeof n.risk_label ? n.risk_label : "string" == typeof n.riskLabel ? n.riskLabel : void 0;
                        return (0, r.createElement)(Z.y, {
                            metadataLine: i,
                            summary: t,
                            categories: l,
                            aboutTopics: a,
                            accentLine: o
                        })
                    }(i.media_context)) && void 0 !== n ? n : s ? (0, r.createElement)(Z.y, {
                        summary: s
                    }) : void 0,
                    annotations: []
                }
            }
            var Y = n(11794),
                X = n(24462);
            let ee = /```media-cards-canvas\b/i;
            var et = n(89222),
                en = n(47896),
                ei = n(967);

            function er(e) {
                let {
                    className: t,
                    title: n,
                    src: r,
                    alt: l,
                    descriptionSlot: a
                } = e;
                return (0, i.jsxs)("div", {
                    className: (0, S.cn)("w-full min-w-0 overflow-hidden rounded-2xl border bg-card p-6 text-card-foreground shadow-sm", t),
                    children: [n ? (0, i.jsx)("h3", {
                        className: "mb-5 text-base font-semibold leading-tight",
                        children: n
                    }) : null, (0, i.jsxs)("div", {
                        className: "flex flex-col gap-3",
                        children: [(0, i.jsx)(ei.P, {
                            type: "image",
                            src: r,
                            alt: l,
                            className: "border-0 bg-transparent p-0 shadow-none"
                        }), a]
                    })]
                })
            }

            function el(e) {
                var t, n;
                let {
                    className: r,
                    ...l
                } = e;
                return "image" === l.type && null != l.detailSlot && (null !== (n = null === (t = l.annotations) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) === 0 ? (0, i.jsx)(er, {
                    className: r,
                    title: l.title,
                    src: l.src,
                    alt: l.alt,
                    descriptionSlot: l.detailSlot
                }) : (0, i.jsx)("div", {
                    className: (0, S.cn)("w-full min-w-0", r),
                    children: (0, i.jsx)(ei.P, {
                        ...l
                    })
                })
            }
            var ea = n(34797),
                eo = n(68904),
                es = n(1299),
                ec = n(67212),
                ed = n(65315),
                eu = n(41193),
                em = n(9009),
                ef = n(95465),
                ep = n(62143);

            function eg(e) {
                var t, n;
                let {
                    className: l,
                    title: a = "Image grid",
                    summary: o,
                    items: s
                } = e, [c, d] = (0, r.useState)(null), u = (0, ep.n)();
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: (0, S.cn)("w-full min-w-0 overflow-hidden rounded-2xl border bg-card p-6 text-card-foreground shadow-sm", l),
                        children: [a ? (0, i.jsx)("h3", {
                            className: "mb-2 text-base font-semibold leading-tight",
                            children: a
                        }) : null, o ? (0, i.jsx)("p", {
                            className: "mb-4 text-sm text-muted-foreground",
                            children: o
                        }) : null, 0 === s.length ? (0, i.jsx)("div", {
                            className: "rounded-xl border border-dashed border-border py-8 text-center text-sm text-muted-foreground",
                            children: "No evidence thumbnails"
                        }) : (0, i.jsx)("div", {
                            className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
                            children: s.map(e => (0, i.jsx)(eh, {
                                item: e,
                                onOpen: () => d(e)
                            }, e.id))
                        })]
                    }), (0, i.jsx)(ef.xW, {
                        open: null != c && !!(null == c ? void 0 : c.thumbnailUrl),
                        onOpenChange: e => d(e ? c : null),
                        src: null !== (t = null == c ? void 0 : c.thumbnailUrl) && void 0 !== t ? t : "",
                        label: null !== (n = null == c ? void 0 : c.label) && void 0 !== n ? n : "Focused image",
                        contentProps: u
                    })]
                })
            }

            function eh(e) {
                let {
                    item: t,
                    onOpen: n
                } = e, [l, a] = (0, r.useState)(!1), [o, s] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    a(!1), s(!1)
                }, [t.thumbnailUrl]);
                let d = (0, r.useCallback)(() => a(!0), []),
                    u = (0, I.R)(t.thumbnailUrl, d),
                    m = !!t.thumbnailUrl && !o;
                return (0, i.jsxs)("button", {
                    type: "button",
                    onClick: n,
                    className: "group flex min-w-0 cursor-pointer flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "aria-label": "Open ".concat(t.label),
                    children: [(0, i.jsxs)("div", {
                        className: "relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted",
                        children: [m ? (0, i.jsx)("img", {
                            ref: u,
                            src: t.thumbnailUrl,
                            alt: "",
                            loading: "lazy",
                            className: (0, S.cn)("size-full object-cover transition-transform group-hover:scale-[1.02]", !l && "opacity-0"),
                            onLoad: d,
                            onError: () => s(!0)
                        }) : null, m && !l ? (0, i.jsx)("div", {
                            className: "absolute inset-0",
                            children: (0, i.jsx)(E.d, {
                                kind: "image",
                                rounded: "xl",
                                className: "border-0",
                                pathSeed: t.thumbnailUrl || t.id
                            })
                        }) : null, m ? null : (0, i.jsx)("div", {
                            className: "flex size-full items-center justify-center bg-gradient-to-br from-muted to-muted/60",
                            children: (0, i.jsx)(c.Z, {
                                className: "size-8 text-muted-foreground/70"
                            })
                        }), (0, i.jsx)("div", {
                            className: "absolute bottom-1 right-1 rounded-full bg-black/75 px-1.5 py-0.5 font-mono text-[10px] tabular-nums text-white",
                            children: function(e) {
                                if (!Number.isFinite(e) || e < 0) return "00:00";
                                let t = Math.floor(e);
                                return "".concat(String(Math.floor(t / 60)).padStart(2, "0"), ":").concat(String(t % 60).padStart(2, "0"))
                            }(t.startTime)
                        })]
                    }), (0, i.jsx)("p", {
                        className: "mt-1.5 truncate text-xs font-medium text-muted-foreground",
                        children: t.label
                    })]
                })
            }
            var ex = n(86408),
                ev = n(74928);
            let eb = [],
                ey = () => {},
                ej = e => {
                    let t = window.getComputedStyle(e);
                    return /(auto|scroll)/.test(t.overflowY || "")
                },
                ew = e => {
                    var t;
                    let n = null !== (t = null == e ? void 0 : e.parentElement) && void 0 !== t ? t : null;
                    for (; n;) {
                        if (ej(n)) return n;
                        n = n.parentElement
                    }
                    return null
                };

            function eN(e) {
                let {
                    content: t,
                    isStreaming: n = !1,
                    isComplete: l = !1,
                    className: a,
                    autoScrollLocked: o = !1
                } = e, [s, c] = (0, r.useState)(n), d = (0, r.useRef)(null), m = (0, r.useRef)(!1), f = (0, r.useRef)(null), p = (0, r.useCallback)(() => {
                    if (o) {
                        m.current = !0;
                        return
                    }
                    let e = d.current,
                        t = f.current,
                        n = !e || e.scrollHeight - (e.scrollTop + e.clientHeight) <= 48,
                        i = !t || t.scrollHeight - (t.scrollTop + t.clientHeight) <= 48;
                    m.current = !(n && i)
                }, [o]);
                return (0, r.useEffect)(() => {
                    n ? c(!0) : l && c(!1)
                }, [n, l]), (0, r.useEffect)(() => {
                    if (o) {
                        m.current = !0;
                        return
                    }
                    if (!n || !s) return;
                    let e = d.current;
                    if (!e || m.current) return;
                    let t = Math.max(0, e.scrollHeight - e.clientHeight);
                    if (1 >= Math.abs(e.scrollTop - t)) return;
                    let i = requestAnimationFrame(() => {
                        e.scrollTo({
                            top: t,
                            behavior: "smooth"
                        })
                    });
                    return () => cancelAnimationFrame(i)
                }, [t, n, s, o]), (0, r.useEffect)(() => {
                    !o && s && p()
                }, [o, s, p]), (0, r.useEffect)(() => {
                    s || (m.current = !1)
                }, [s]), (0, r.useEffect)(() => {
                    s && p()
                }, [s, p]), (0, r.useEffect)(() => {
                    if (!s) {
                        f.current = null;
                        return
                    }
                    let e = d.current;
                    if (!e) return;
                    let t = ew(e);
                    f.current = t;
                    let n = () => p();
                    return null == t || t.addEventListener("scroll", n, {
                        passive: !0
                    }), p(), () => {
                        null == t || t.removeEventListener("scroll", n)
                    }
                }, [s, p]), (0, i.jsxs)(ev.zF, {
                    open: s,
                    onOpenChange: c,
                    className: (0, S.cn)("w-full", a),
                    children: [(0, i.jsxs)(ev.wy, {
                        className: "flex w-full items-center gap-1.5 py-1.5 text-sm font-medium text-muted-foreground/70 transition-colors hover:text-muted-foreground",
                        children: [(0, i.jsx)(u.Z, {
                            className: (0, S.cn)("size-3 transition-transform duration-150", s && "rotate-90")
                        }), (0, i.jsx)("span", {
                            className: (0, S.cn)(n && "thinking-shimmer"),
                            children: n ? "Thinking" : "Thought process"
                        })]
                    }), (0, i.jsx)(ev.Fw, {
                        className: "overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
                        children: (0, i.jsxs)("div", {
                            className: "flex gap-3 py-2",
                            children: [(0, i.jsx)("div", {
                                className: (0, S.cn)("ml-[5.5px] w-px shrink-0 rounded-full", n ? "thinking-shimmer-line" : "bg-[#A3A3A3]"),
                                "aria-hidden": "true"
                            }), (0, i.jsx)("div", {
                                ref: d,
                                onScroll: p,
                                className: "flex-1 overflow-y-auto text-sm",
                                children: (0, i.jsx)("div", {
                                    className: "prose prose-sm dark:prose-invert max-w-none leading-relaxed [&_code]:text-xs [&_h1]:text-base [&_h2]:text-base [&_h3]:text-sm [&_h4]:text-sm [&_h5]:text-sm [&_h6]:text-sm [&_li]:text-sm [&_li]:leading-relaxed [&_ol]:mb-3 [&_p]:mb-3 [&_p]:text-sm [&_p]:leading-relaxed [&_pre]:text-xs [&_ul]:mb-3",
                                    children: t ? (0, i.jsx)(eo.Q, {
                                        content: t,
                                        artifactRefs: eb,
                                        onArtifactClick: ey,
                                        useCollapsibleCodeBlocks: !0,
                                        isCodeGenerating: n
                                    }) : n ? (0, i.jsx)("div", {
                                        className: "italic text-muted-foreground/60",
                                        children: "Thinking in progress..."
                                    }) : null
                                })
                            })]
                        })
                    })]
                })
            }
            let ek = (e, t) => "[[img:".concat(e, ":").concat(t, "]]"),
                e_ = e => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                eC = "mention_ref",
                eS = /^(?:img|doc|url|vid|video|audio|file|recon|aud)_[a-z0-9_-]+$/i,
                eI = e => {
                    let t = e.slice(0, 3).toLowerCase();
                    return "img" === t ? "image" : "vid" === t ? "video" : "doc" === t ? "document" : void 0
                },
                ez = ["underlying_model", "actual_model", "routed_model", "backend_model", "provider_model", "model"],
                eT = e => "string" == typeof e && e.trim().length > 0 ? e : null,
                eE = e => {
                    if (!e) return e;
                    let t = /\[\[\s*(?:img:)?[^:\]]+:\s*(\[\[\s*(?:img:)?[^:\]]+:[^\]]+\]\])\s*\]\]/g,
                        n = null,
                        i = e;
                    for (; i !== n;) n = i, i = i.replace(t, (e, t) => t);
                    return i
                },
                eM = e => e ? e.replace(/(?:\[\[)?\s*([^\s:\]]+)\s*:\s*((?:img|doc|url|vid|video|audio|file|recon|aud)_[^\s:\]]+)\s*:\s*([^\]\n]+?)?\s*\]\]?/gi, (e, t, n, i) => {
                    let r = String(t || "").trim(),
                        l = String(n || "").trim(),
                        a = (i || "").toString().trim(),
                        o = a ? "".concat(l, ": ").concat(a) : l;
                    return "[[img:".concat(r, ":").concat(o, "]]")
                }) : e,
                eA = e => e ? e.replace(/\[\[\s*img\s*:\s*([^\]:\]]+?)\s*:\s*([^\]]+?)\s*\]\]/gi, (e, t, n) => {
                    let i = t.trim(),
                        r = n.trim();
                    if (i && r && !/\s/.test(i) && !/\s/.test(r) || i.startsWith("__")) return ek(i, r);
                    let l = eS.test(i),
                        a = eS.test(r);
                    return l && a ? ek(i, r) : l ? ek(i, a ? r : i) : a ? ek(r, r) : i.toLowerCase() === r.toLowerCase() ? r : r || i
                }) : e,
                eF = e => eA(eE(eM(e))),
                eL = e => {
                    let t = e.trim();
                    return "" !== t && /^[\]]+$/.test(t)
                },
                eO = (e, t) => {
                    let n;
                    let i = e.trim(),
                        r = t.trim(),
                        l = r.match(/^([a-z0-9_-]+)\s*:\s*(.+)$/i);
                    if (l) {
                        let e = l[1].trim(),
                            t = l[2].replace(/\]+$/, "").trim();
                        eS.test(e) && (r = e, t && (n = t))
                    }
                    return {
                        artifactId: i,
                        objectId: r,
                        labelFromToken: n
                    }
                },
                eR = (e, t) => {
                    let n;
                    if (!e || 0 === t.size) return e;
                    let i = Array.from(t.keys());
                    if (0 === i.length) return e;
                    let r = i.sort((e, t) => t.length - e.length).map(e_),
                        l = RegExp("`(" + r.join("|") + ")`", "g"),
                        a = RegExp("\\b(".concat(r.join("|"), ")\\b"), "g"),
                        o = (e, n) => {
                            let i = t.get(n);
                            return i ? ek(i, n) : e
                        },
                        s = e => e ? e.replace(l, (e, t) => o(e, t)).replace(a, (e, t) => o(e, t)) : e,
                        c = RegExp(eB.source, "g"),
                        d = 0,
                        u = [];
                    for (; null !== (n = c.exec(e));) {
                        let t = e.slice(d, n.index);
                        u.push(s(t)), u.push(n[0]), d = n.index + n[0].length
                    }
                    return u.push(s(e.slice(d))), eE(u.join(""))
                },
                eZ = e => {
                    let t = Number(e.trim().replace(/%$/, ""));
                    return Number.isFinite(t) ? Math.min(Math.max(t / 100, 0), 1) : null
                },
                eD = e => {
                    let t;
                    let n = [],
                        i = /\((\d+)%?,\s*(\d+)%?\)/g;
                    for (; null !== (t = i.exec(e));) {
                        let e = Number(t[1]) / 100,
                            i = Number(t[2]) / 100;
                        Number.isFinite(e) && Number.isFinite(i) && n.push({
                            x: e,
                            y: i
                        })
                    }
                    return n
                },
                eW = (e, t, n) => {
                    var i, r, l, a, o, s, c, d, u, m, f, p, g, h;
                    let x = e.match(/^\s*\(([^)]+)\)\s+selection\[(.+?)\]/i);
                    if (!x) return {
                        remainingText: e
                    };
                    let v = null === (i = x[1]) || void 0 === i ? void 0 : i.trim(),
                        b = null !== (o = null === (r = x[2]) || void 0 === r ? void 0 : r.trim()) && void 0 !== o ? o : "";
                    if (!v) return {
                        remainingText: e
                    };
                    let y = b.split(/,\s*(?=[a-zA-Z]+:)/),
                        j = new Map;
                    y.forEach(e => {
                        let [t, ...n] = e.split(":");
                        if (!t || 0 === n.length) return;
                        let i = t.trim().toLowerCase(),
                            r = n.join(":").trim();
                        i && j.set(i, r)
                    });
                    let w = null === (l = j.get("type")) || void 0 === l ? void 0 : l.toLowerCase(),
                        N = null;
                    if ("rectangle" === w) {
                        let e = eZ(null !== (s = j.get("top")) && void 0 !== s ? s : ""),
                            t = eZ(null !== (c = j.get("left")) && void 0 !== c ? c : ""),
                            n = eZ(null !== (d = j.get("width")) && void 0 !== d ? d : ""),
                            i = eZ(null !== (u = j.get("height")) && void 0 !== u ? u : "");
                        null !== e && null !== t && null !== n && null !== i && (N = {
                            type: "rectangle",
                            box: {
                                x: t,
                                y: e,
                                width: n,
                                height: i
                            }
                        })
                    } else if ("point" === w) {
                        let e = eZ(null !== (m = j.get("x")) && void 0 !== m ? m : ""),
                            t = eZ(null !== (f = j.get("y")) && void 0 !== f ? f : "");
                        null !== e && null !== t && (N = {
                            type: "point",
                            point: {
                                x: e,
                                y: t
                            }
                        })
                    } else if ("brush" === w) {
                        let e = Number((null !== (p = j.get("stroke")) && void 0 !== p ? p : "").replace(/%$/, "").trim()),
                            t = eD(null !== (g = j.get("path")) && void 0 !== g ? g : "");
                        Number.isFinite(e) && t.length > 0 && (N = {
                            type: "brush",
                            points: t,
                            strokeWidth: Math.max(1, 10 * e)
                        })
                    }
                    if (!N) return {
                        remainingText: e
                    };
                    let k = null !== (h = null === (a = x[0]) || void 0 === a ? void 0 : a.length) && void 0 !== h ? h : 0,
                        _ = e.slice(k),
                        C = _.match(/^\s+/);
                    if (C) {
                        let e = C[0],
                            t = _.slice(C[0].length),
                            n = e.search(/\r?\n/);
                        if (-1 !== n) {
                            let i = e.slice(n).replace(/[^\r\n]/g, "").replace(/\r/g, ""),
                                r = i.length > 0 ? i : "\n";
                            _ = "".concat(r).concat(t)
                        } else _ = t
                    }
                    return {
                        remainingText: _,
                        selection: {
                            id: "".concat(t, ":").concat(n, ":").concat(v),
                            artifactId: t,
                            objectId: n,
                            label: v,
                            shape: N
                        }
                    }
                },
                eU = RegExp("<".concat(eC, ">([\\s\\S]*?)<\\/").concat(eC, ">"), "i"),
                eP = /(Image|Video|Document)\s+reference:[^\n]+/i,
                eH = e => {
                    let t;
                    let n = {},
                        i = e.match(/^(Image|Video|Document)/i);
                    if (i) {
                        let e = i[1].toLowerCase();
                        ("image" === e || "video" === e || "document" === e) && (n.kind = e)
                    }
                    let r = /([a-z_]+)=("([^"]*)"|([^\s.]+))/gi;
                    for (; null !== (t = r.exec(e));) {
                        var l, a, o, s, c;
                        let e = null !== (o = null === (a = t[1]) || void 0 === a ? void 0 : null === (l = a.toLowerCase) || void 0 === l ? void 0 : l.call(a)) && void 0 !== o ? o : "",
                            i = null !== (c = null !== (s = t[3]) && void 0 !== s ? s : t[4]) && void 0 !== c ? c : "";
                        switch (e) {
                            case "id":
                                n.objectId = i;
                                break;
                            case "artifact":
                                n.artifactId = i;
                                break;
                            case "title":
                            case "label":
                                n.label = i;
                                break;
                            case "kind":
                                ("image" === i || "video" === i || "document" === i) && (n.kind = i);
                                break;
                            case "preview":
                            case "preview_url":
                                n.previewUrl = i
                        }
                    }
                    return n
                },
                eq = (e, t) => {
                    var n, i, r, l, a, o;
                    let s, c = e,
                        d = c.match(eU);
                    if (d) {
                        try {
                            let e = JSON.parse(null !== (n = d[1]) && void 0 !== n ? n : "{}");
                            e && "object" == typeof e && (s = e)
                        } catch (e) {
                            console.warn("Failed to parse mention metadata block", e)
                        }
                        c = c.replace(d[0], "")
                    }
                    let u = c.match(eP);
                    return u && (s = {
                        ...eH(u[0]),
                        ...s
                    }, c = c.replace(u[0], "")), s && (s.artifactId = null !== (i = s.artifactId) && void 0 !== i ? i : t.artifactId, s.objectId = null !== (r = s.objectId) && void 0 !== r ? r : t.objectId, s.kind = null !== (a = null !== (l = s.kind) && void 0 !== l ? l : t.kind) && void 0 !== a ? a : "image", s.previewUrl = null !== (o = s.previewUrl) && void 0 !== o ? o : null), {
                        remainingText: c.replace(/^\s+/, ""),
                        descriptor: s
                    }
                },
                e$ = e => {
                    let t = eV(e),
                        n = new Map,
                        i = new Map,
                        r = [],
                        l = 0;
                    for (let e = 0; e < t.length; e += 1) {
                        var a, o, s;
                        let c;
                        let d = t[e];
                        if ("text" === d.type) {
                            r.push(d);
                            continue
                        }
                        let u = d.labelFromToken ? {
                                artifactId: d.artifactId,
                                objectId: d.objectId,
                                label: d.labelFromToken
                            } : void 0,
                            m = t[e + 1];
                        if (m && "text" === m.type) {
                            let n = eW(m.text, d.artifactId, d.objectId);
                            n.selection && (c = n.selection);
                            let i = eq(n.remainingText, {
                                artifactId: d.artifactId,
                                objectId: d.objectId
                            });
                            i.descriptor && (u = {
                                ...u,
                                ...i.descriptor,
                                label: null !== (a = i.descriptor.label) && void 0 !== a ? a : null == u ? void 0 : u.label
                            }), t[e + 1] = {
                                type: "text",
                                text: i.remainingText
                            }
                        }
                        u && i.set(l, {
                            ...u,
                            artifactId: null !== (o = u.artifactId) && void 0 !== o ? o : d.artifactId,
                            objectId: null !== (s = u.objectId) && void 0 !== s ? s : d.objectId
                        });
                        let f = {
                            ...d,
                            mentionIndex: l,
                            selectionEntry: c
                        };
                        r.push(f), c && n.set(l, c), l += 1
                    }
                    return {
                        segments: r,
                        cleanedText: t.map(e => "text" === e.type ? e.text : ek(e.artifactId, e.objectId)).join(""),
                        selectionMap: n,
                        descriptorMap: i
                    }
                },
                eB = /\[\[\s*(?:img:)?([^\s:\]]+)\s*:\s*([^\]]+?)\s*\]\]/g,
                eG = /\b(?:img|doc|url|vid|video|audio|file|recon|aud)_(?=[a-z0-9_-]*\d)[a-z0-9_-]+(?:\.[a-z0-9]+)?\b/gi,
                eJ = e => {
                    let t;
                    if (!e || !/_/.test(e)) return e;
                    let n = RegExp(eB.source, "g"),
                        i = e => e.replace(eG, e => "[[img:inline:".concat(e, "]]")),
                        r = 0,
                        l = [];
                    for (; null !== (t = n.exec(e));) l.push(i(e.slice(r, t.index))), l.push(t[0]), r = t.index + t[0].length;
                    return l.push(i(e.slice(r))), l.join("")
                },
                eV = e => {
                    let t = [],
                        n = 0,
                        i = eF(e),
                        r = RegExp(eB.source, "g");
                    if (i.replace(r, (e, r, l, a) => {
                            let {
                                artifactId: o,
                                objectId: s,
                                labelFromToken: c
                            } = eO(r, l);
                            if (a > n) {
                                let e = i.slice(n, a);
                                eL(e) || t.push({
                                    type: "text",
                                    text: e
                                })
                            }
                            return t.push({
                                type: "mention",
                                artifactId: o,
                                objectId: s,
                                labelFromToken: c
                            }), n = a + e.length, e
                        }), n < i.length) {
                        let e = i.slice(n);
                        eL(e) || t.push({
                            type: "text",
                            text: e
                        })
                    }
                    return t
                },
                eK = e => {
                    if (!e) return;
                    let t = e.split("?")[0].toLowerCase();
                    return t.endsWith(".mp4") || t.endsWith(".m4v") ? "video/mp4" : t.endsWith(".mov") ? "video/quicktime" : t.endsWith(".webm") ? "video/webm" : t.endsWith(".mkv") ? "video/x-matroska" : t.endsWith(".m3u8") ? "application/vnd.apple.mpegurl" : void 0
                },
                eQ = e => {
                    let {
                        attachment: t,
                        src: n,
                        onClick: a
                    } = e, [o, s] = (0, r.useState)(null);
                    (0, r.useEffect)(() => {
                        s(null)
                    }, [n]);
                    let c = (0, r.useMemo)(() => {
                            if (!o) return {
                                width: 112,
                                height: 112
                            };
                            let {
                                width: e,
                                height: t
                            } = o;
                            if (e <= 0 || t <= 0) return {
                                width: 112,
                                height: 112
                            };
                            let n = Math.min(200 / e, 200 / t, 1);
                            return {
                                width: Math.round(e * n),
                                height: Math.round(t * n)
                            }
                        }, [o]),
                        d = e => {
                            let t = e.currentTarget;
                            t.naturalWidth && t.naturalHeight && s(e => e && e.width === t.naturalWidth && e.height === t.naturalHeight ? e : {
                                width: t.naturalWidth,
                                height: t.naturalHeight
                            })
                        },
                        u = (0, I.R)(n, d);
                    return (0, i.jsxs)("button", {
                        type: "button",
                        onClick: a,
                        style: {
                            width: c.width,
                            maxWidth: "100%",
                            height: c.height
                        },
                        className: "group relative flex items-center justify-center overflow-hidden rounded-xl border border-border/40 bg-muted/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                        children: [(0, i.jsx)(l.default, {
                            ref: u,
                            src: n,
                            alt: t.name,
                            fill: !0,
                            onLoad: d,
                            className: "object-contain transition-transform duration-200 group-hover:scale-105",
                            unoptimized: !0
                        }), o ? null : (0, i.jsx)("div", {
                            className: "absolute inset-0",
                            children: (0, i.jsx)(E.d, {
                                kind: "image",
                                rounded: "xl",
                                className: "border-0",
                                pathSeed: n
                            })
                        })]
                    })
                },
                eY = e => {
                    if (!e || "undefined" == typeof document) return !0;
                    let t = document.createElement("video").canPlayType(e);
                    return "probably" === t || "maybe" === t
                };

            function eX(e) {
                let {
                    playing: t,
                    onToggle: n
                } = e;
                return (0, i.jsx)("button", {
                    type: "button",
                    "aria-label": t ? "Pause video" : "Play video",
                    "data-video-hover-affordance": t ? "pause" : "play",
                    onClick: n,
                    className: (0, S.cn)("absolute bottom-3 right-3 z-10 inline-flex size-9 items-center justify-center rounded-full bg-black/70 text-white opacity-0 shadow-sm transition-opacity duration-150 hover:bg-black/80 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 group-hover:opacity-100 group-focus-within:opacity-100", !t && "opacity-100"),
                    children: t ? (0, i.jsx)(s.Z, {
                        className: "size-4"
                    }) : (0, i.jsx)(c.Z, {
                        className: "ml-0.5 size-4 fill-current"
                    })
                })
            }
            let e0 = e => {
                    let {
                        attachment: t,
                        src: n,
                        onClick: l
                    } = e, [a, o] = (0, r.useState)(null), [s, c] = (0, r.useState)(!1), [d, u] = (0, r.useState)(!1), [m, f] = (0, r.useState)(!1), p = (0, r.useRef)(null), g = (0, r.useMemo)(() => eK(n), [n]), h = (0, r.useMemo)(() => eY(g), [g]);
                    (0, r.useEffect)(() => {
                        o(null), f(!1), c(!1), u(!h)
                    }, [n, h]);
                    let x = (0, r.useMemo)(() => {
                            if (!a) return {
                                width: 112,
                                height: 112
                            };
                            let {
                                width: e,
                                height: t
                            } = a;
                            if (e <= 0 || t <= 0) return {
                                width: 112,
                                height: 112
                            };
                            let n = Math.min(200 / e, 200 / t, 1);
                            return {
                                width: Math.round(e * n),
                                height: Math.round(t * n)
                            }
                        }, [a]),
                        v = e => {
                            let t = e.currentTarget;
                            t.videoWidth && t.videoHeight && o(e => e && e.width === t.videoWidth && e.height === t.videoHeight ? e : {
                                width: t.videoWidth,
                                height: t.videoHeight
                            })
                        },
                        b = (0, r.useCallback)(() => f(!0), []),
                        y = (0, z.$2)(n, v, z.C$),
                        j = (0, z.$2)(n, b, z.Ig),
                        w = (0, r.useCallback)(e => {
                            p.current = e, y(e), j(e)
                        }, [y, j]);
                    return (0, i.jsxs)("div", {
                        onMouseEnter: () => {
                            !d && p.current && p.current.play().then(() => {
                                c(!0)
                            }).catch(() => {})
                        },
                        onMouseLeave: () => {
                            p.current && (p.current.pause(), p.current.currentTime = 0, c(!1))
                        },
                        style: {
                            width: x.width,
                            maxWidth: "100%",
                            height: x.height
                        },
                        className: "group relative flex items-center justify-center overflow-hidden rounded-xl border border-border/40 bg-muted/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                        children: [(0, i.jsxs)("button", {
                            type: "button",
                            onClick: l,
                            "aria-label": "Open ".concat(t.name),
                            className: "relative flex size-full items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                            children: [(0, i.jsx)("video", {
                                ref: w,
                                muted: !0,
                                loop: !0,
                                playsInline: !0,
                                preload: "metadata",
                                onLoadedMetadata: v,
                                onLoadedData: b,
                                onPlay: () => c(!0),
                                onPause: () => c(!1),
                                onError: () => u(!0),
                                className: (0, S.cn)("size-full object-contain", !m && "invisible"),
                                children: (0, i.jsx)("source", {
                                    src: n,
                                    type: g || "video/mp4"
                                })
                            }), d ? (0, i.jsx)("div", {
                                className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 px-3 text-center text-xs font-medium text-white",
                                children: "Video format not supported in this browser. Click to open."
                            }) : a && m ? null : (0, i.jsx)("div", {
                                className: "absolute inset-0",
                                children: (0, i.jsx)(E.d, {
                                    kind: "video",
                                    rounded: "xl",
                                    className: "border-0",
                                    pathSeed: n
                                })
                            })]
                        }), !d && a && m ? (0, i.jsx)(eX, {
                            playing: s,
                            onToggle: () => {
                                if (d) return;
                                let e = p.current;
                                if (e) {
                                    if (s) {
                                        e.pause(), c(!1);
                                        return
                                    }
                                    e.play().then(() => c(!0)).catch(() => c(!1))
                                }
                            }
                        }) : null]
                    })
                },
                e1 = e => {
                    let {
                        url: t,
                        label: n,
                        style: a,
                        onOpen: o,
                        onLoaded: s,
                        renderOverlayButton: c
                    } = e, [d, u] = (0, r.useState)(!1);
                    (0, r.useEffect)(() => {
                        u(!1)
                    }, [t]);
                    let m = (0, r.useCallback)(e => {
                            let t = e.currentTarget;
                            t.naturalWidth && t.naturalHeight && s(t.naturalWidth, t.naturalHeight), u(!0)
                        }, [s]),
                        f = (0, I.R)(t, m);
                    return (0, i.jsxs)("button", {
                        type: "button",
                        onClick: o,
                        className: "relative flex w-full max-w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-background p-0 text-left transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                        style: a,
                        children: [(0, i.jsx)(l.default, {
                            ref: f,
                            src: t,
                            alt: n,
                            fill: !0,
                            className: "object-contain",
                            onLoad: m,
                            unoptimized: !0
                        }), d ? null : (0, i.jsx)("div", {
                            className: "absolute inset-0",
                            children: (0, i.jsx)(E.d, {
                                kind: "image",
                                rounded: "3xl",
                                className: "border-0",
                                pathSeed: t
                            })
                        }), c(), (0, i.jsx)("div", {
                            className: "absolute bottom-4 left-4 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-foreground backdrop-blur",
                            children: n
                        })]
                    })
                },
                e2 = e => {
                    let {
                        url: t,
                        label: n,
                        style: l,
                        onLoadedMetadata: a,
                        renderOverlayButton: o
                    } = e, [s, c] = (0, r.useState)(!1), [d, u] = (0, r.useState)(!1), [m, f] = (0, r.useState)(!1), [p, g] = (0, r.useState)(!1), h = (0, r.useRef)(null);
                    return (0, r.useEffect)(() => {
                        c(!1), u(!1), f(!1), g(!1)
                    }, [t]), (0, i.jsxs)("div", {
                        className: "group relative overflow-hidden rounded-xl border border-border bg-background text-left",
                        style: l,
                        children: [(0, i.jsx)("video", {
                            ref: h,
                            src: t,
                            controls: !0,
                            autoPlay: !0,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            preload: "metadata",
                            className: (0, S.cn)("size-full object-contain", !d && !p && "invisible"),
                            onPlay: () => f(!0),
                            onPause: () => f(!1),
                            onLoadedData: () => u(!0),
                            onError: () => g(!0),
                            onLoadedMetadata: e => {
                                let t = e.currentTarget;
                                t.videoWidth && t.videoHeight && a(t.videoWidth, t.videoHeight), c(!0)
                            }
                        }), s && d || p ? null : (0, i.jsx)("div", {
                            className: "absolute inset-0",
                            children: (0, i.jsx)(E.d, {
                                kind: "video",
                                rounded: "xl",
                                className: "border-0",
                                pathSeed: t
                            })
                        }), p ? (0, i.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center bg-black/60 px-3 text-center text-xs font-medium text-white",
                            children: "Unable to load video"
                        }) : null, o(), s && d && !p ? (0, i.jsx)(eX, {
                            playing: m,
                            onToggle: () => {
                                let e = h.current;
                                if (e) {
                                    if (m) {
                                        e.pause(), f(!1);
                                        return
                                    }
                                    e.play().then(() => f(!0)).catch(() => f(!1))
                                }
                            }
                        }) : null, (0, i.jsx)("div", {
                            className: "pointer-events-none absolute bottom-4 left-4 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm transition-all duration-300 group-hover:bg-background/10 group-hover:text-foreground/10 group-hover:backdrop-blur-none",
                            children: n
                        })]
                    })
                };

            function e4(e) {
                var t, n;
                let {
                    message: s,
                    onArtifactClick: c,
                    autoScrollLocked: I = !1,
                    mentionObjectMap: z,
                    resolveMentionImage: E,
                    onPreviewOpen: Z,
                    branchMeta: W,
                    branchModelLabel: U,
                    isEditing: P,
                    editingDraft: H,
                    onStartEdit: $,
                    onEditChange: B,
                    onEditCancel: ei,
                    onEditSave: er,
                    disableEdit: ef,
                    onBranchNavigate: ep,
                    onRegenerate: eh,
                    isStreamingForTurn: ev,
                    onShare: eb,
                    isViewOnly: ey = !1,
                    sessionCredits: ej,
                    sessionMetadata: ew,
                    sessionId: ek,
                    onSkillClick: e_,
                    mediaCardsLayoutEnabled: eS = !1,
                    embedChrome: eE = !1,
                    onEmbedPreviewOpenChange: eM
                } = e, eA = "user" === s.role, {
                    data: eF
                } = (0, a.$r)(!ey), [eL, eO] = (0, r.useState)(!1), [eZ, eD] = (0, r.useState)({
                    isOpen: !1,
                    file: null
                }), [eW, eU] = (0, r.useState)({}), [eP, eH] = (0, r.useState)({}), [eq, eB] = (0, r.useState)(null), [eG, eV] = (0, r.useState)(0), eK = (0, r.useRef)(null), eY = "vlm_preview_aspect_ratios";
                (0, r.useEffect)(() => {
                    if (!eq) return;
                    let e = document.body.style.overflow;
                    return document.body.style.overflow = "hidden", () => {
                        document.body.style.overflow = e
                    }
                }, [eq]), (0, r.useEffect)(() => {
                    if (!eq) return;
                    let e = e => {
                        "Escape" === e.key && eB(null)
                    };
                    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                }, [eq]), (0, r.useEffect)(() => {
                    try {
                        let e = localStorage.getItem(eY);
                        if (!e) return;
                        let t = JSON.parse(e);
                        if (!t || "object" != typeof t) return;
                        let n = Object.entries(t).reduce((e, t) => {
                            let [n, i] = t;
                            return "number" == typeof i && Number.isFinite(i) && i > 0 && i < 100 && (e[n] = Number(i.toFixed(4))), e
                        }, {});
                        Object.keys(n).length > 0 && eH(e => ({
                            ...n,
                            ...e
                        }))
                    } catch (e) {
                        console.warn("Unable to hydrate preview aspect ratios from storage", e)
                    }
                }, []);
                let eX = (0, r.useCallback)((e, t, n) => {
                        if (!t || !n || !Number.isFinite(t) || !Number.isFinite(n)) return;
                        let i = Number((t / n).toFixed(4));
                        Number.isFinite(i) && !(i <= 0) && eH(t => {
                            var n;
                            if (1e-4 > Math.abs((null !== (n = t[e]) && void 0 !== n ? n : 0) - i)) return t;
                            let r = {
                                ...t,
                                [e]: i
                            };
                            try {
                                localStorage.setItem(eY, JSON.stringify(r))
                            } catch (e) {
                                console.warn("Unable to persist preview aspect ratios", e)
                            }
                            return r
                        })
                    }, []),
                    e4 = (0, r.useCallback)(e => {
                        (0, ex.b)({
                            item: e,
                            onEmbedPreviewOpenChange: eM,
                            setDialog: eD,
                            expandHost: eE
                        })
                    }, [eE, eM]),
                    e3 = async e => {
                        try {
                            let t = e.replace(/__ARTIFACT_[^_]+__/g, "").trim();
                            await navigator.clipboard.writeText(t), eO(!0), setTimeout(() => eO(!1), 1500)
                        } catch (e) {}
                    }, e5 = async () => {
                        null == eb || eb()
                    }, e6 = () => {
                        null == eh || eh()
                    }, e9 = e => {
                        eV(e.currentTarget.scrollTop)
                    }, e8 = (0, r.useCallback)(() => {
                        let e = eK.current;
                        if (!e) return;
                        e.style.height = "auto";
                        let t = Math.min(e.scrollHeight, 210);
                        e.style.height = "".concat(t, "px"), e.style.overflowY = e.scrollHeight > 210 ? "auto" : "hidden"
                    }, []), e7 = e => {
                        e4({
                            id: e.id,
                            type: e.type,
                            name: e.name,
                            previewUrl: e.preview,
                            base64: e.base64
                        })
                    }, te = e => {
                        if (e.preview) return e.preview;
                        if (!e.base64) return "";
                        let t = e.base64.trim();
                        if (!t) return "";
                        let n = "image/*";
                        return "video" === e.type ? n = "video/mp4" : "audio" === e.type ? n = "audio/mpeg" : "pdf" === e.type && (n = "application/pdf"), t.startsWith("data:") ? t : "data:".concat(n, ";base64,").concat(t)
                    }, tt = e => !!te(e), tn = null !== (t = s.attachments) && void 0 !== t ? t : [], ti = [], tr = [];
                Array.isArray(s.content) && s.content.forEach((e, t) => {
                    var n, i, r, l;
                    "image_url" === e.type && (null === (n = e.image_url) || void 0 === n ? void 0 : n.url) ? ti.push({
                        id: "content-image-".concat(t),
                        name: "Image ".concat(t + 1),
                        type: "image",
                        size: 0,
                        preview: e.image_url.url,
                        fileId: e.file_id
                    }) : "file_url" === e.type && (null === (i = e.file_url) || void 0 === i ? void 0 : i.url) ? tr.push({
                        id: "content-file-".concat(t),
                        name: "Document ".concat(t + 1),
                        type: "pdf",
                        size: 0,
                        preview: e.file_url.url,
                        fileId: e.file_id
                    }) : "video_url" === e.type && (null === (r = e.video_url) || void 0 === r ? void 0 : r.url) ? tr.push({
                        id: "content-video-".concat(t),
                        name: "Video ".concat(t + 1),
                        type: "video",
                        size: 0,
                        preview: e.video_url.url,
                        fileId: e.file_id
                    }) : "audio_url" === e.type && (null === (l = e.audio_url) || void 0 === l ? void 0 : l.url) && tr.push({
                        id: "content-audio-".concat(t),
                        name: "Audio ".concat(t + 1),
                        type: "audio",
                        size: 0,
                        preview: e.audio_url.url,
                        fileId: e.file_id
                    })
                });
                let tl = [...tn, ...ti, ...tr],
                    ta = tl.filter(e => ("image" === e.type || "video" === e.type) && tt(e)),
                    to = tl.filter(e => "image" !== e.type && "video" !== e.type || !tt(e)),
                    ts = e => 0 === e.length ? null : (0, i.jsx)("div", {
                        className: (0, S.cn)("flex flex-wrap gap-3", eA ? "justify-end" : "justify-start"),
                        children: e.map(e => (0, i.jsx)(ea.T, {
                            fileName: e.name,
                            fileType: e.type,
                            status: "ready",
                            onClick: () => e7(e)
                        }, e.id))
                    }),
                    tc = () => {
                        var e;
                        let t = null !== (e = s.skills) && void 0 !== e ? e : [];
                        return 0 === t.length ? null : (0, i.jsx)(i.Fragment, {
                            children: t.map(e => (0, i.jsx)("span", {
                                className: "mr-2 inline-block",
                                children: (0, i.jsx)(ed.W, {
                                    skill: e,
                                    onRemove: () => {},
                                    onClick: () => null == e_ ? void 0 : e_(e.id),
                                    showRemove: !1
                                })
                            }, e.id))
                        })
                    },
                    td = e => 0 === e.length ? null : (0, i.jsx)("div", {
                        className: "flex flex-wrap gap-3 ".concat(eA ? "justify-end" : "justify-start"),
                        children: e.map(e => {
                            let t = te(e);
                            return t ? (0, i.jsx)("div", {
                                className: "flex flex-col gap-1 ".concat(eA ? "items-end text-right" : "items-start text-left"),
                                children: "video" === e.type ? (0, i.jsx)(e0, {
                                    attachment: e,
                                    src: t,
                                    onClick: t => {
                                        t.stopPropagation(), e7(e)
                                    }
                                }) : (0, i.jsx)(eQ, {
                                    attachment: e,
                                    src: t,
                                    onClick: t => {
                                        t.stopPropagation(), e7(e)
                                    }
                                })
                            }, e.id) : null
                        })
                    }),
                    tu = e => {
                        if (!e) return "";
                        let t = e;
                        t.match(/<(img|doc|url|video|audio)_ref>[\s\S]*?<\/\1_ref>/) && (t = t.replace(/<(img|doc|url|video|audio)_ref>[\s\S]*?<\/\1_ref>/g, ""));
                        let n = RegExp("<".concat(eC, ">[\\s\\S]*?<\\/").concat(eC, ">"), "g");
                        return t.match(n) && (t = t.replace(n, "")), (t = t.replace(/(?:^|\s)(Image|Video|Document)\s+reference:[^\n]*\n?/gi, "")).trim()
                    },
                    tm = "string" == typeof(n = s.content) ? tu(n) : n.filter(e => "text" === e.type).map(e => tu(e.text)).filter(Boolean).join(" "),
                    tf = (0, r.useMemo)(() => eA ? eJ(tm) : tm, [eA, tm]),
                    tp = (0, r.useMemo)(() => e$(tf), [tf]),
                    tg = tp.segments,
                    th = tp.selectionMap,
                    tx = tp.descriptorMap,
                    tv = tp.cleanedText,
                    tb = null != H ? H : tf,
                    ty = !eA || P || !!tf,
                    tj = (0, r.useMemo)(() => (0, R.h)(tv, void 0, s.isStreaming), [tv, s.isStreaming]);
                (0, r.useEffect)(() => {
                    P && e8()
                }, [e8, tb, P]);
                let tw = (0, r.useMemo)(() => {
                        let e = new Map;
                        return tj.artifacts.filter(O.$).forEach(t => {
                            var n, i;
                            null === (i = t.previewObjects) || void 0 === i || null === (n = i.data) || void 0 === n || n.forEach(n => {
                                var i;
                                null === (i = n.objects) || void 0 === i || i.forEach(n => {
                                    (null == n ? void 0 : n.id) && "string" == typeof n.id && e.set(n.id, t.id)
                                })
                            })
                        }), z && z.forEach((t, n) => {
                            e.has(n) || e.set(n, t)
                        }), e
                    }, [tj.artifacts, z]),
                    tN = (0, r.useMemo)(() => eA ? tj.cleanText : eR(tj.cleanText, tw), [eA, tj.cleanText, tw]),
                    tk = (0, r.useCallback)(e => eR(e, tw), [tw]),
                    t_ = (0, r.useMemo)(() => {
                        if (eA) return [];
                        let e = (0, et.G)();
                        return tj.artifacts.filter(O.$).map(t => {
                            var n, i, r;
                            let l = null !== (r = null === (n = t.previewObjects) || void 0 === n ? void 0 : n.data) && void 0 !== r ? r : [],
                                a = [];
                            if (l.forEach((n, i) => {
                                    let r = (n.objects || []).filter(e => !1 !== e.preview);
                                    r.forEach((l, o) => {
                                        var s;
                                        let c = l.mimetype || "",
                                            d = c.toLowerCase(),
                                            u = d.startsWith("image/"),
                                            m = d.startsWith("video/"),
                                            f = "application/pdf" === d,
                                            p = null == E ? void 0 : E(t.id, l.id),
                                            g = null == p ? void 0 : p.previewUrl,
                                            h = (0, Y.j8)(l.id, g);
                                        if (!u && !f && !m && !h || !g) return;
                                        let x = n.title || "".concat(u ? "Image" : m ? "Video" : f ? "Document" : "Model", " ").concat(i + 1),
                                            v = r.length > 1 ? " #".concat(o + 1) : "",
                                            b = "".concat(x).concat(v),
                                            y = h ? "model" : u ? "image" : m ? "video" : "document",
                                            j = e({
                                                kind: y,
                                                primaryLabel: null !== (s = null == p ? void 0 : p.label) && void 0 !== s ? s : n.title,
                                                fallbackLabel: b
                                            });
                                        a.push({
                                            artifactId: t.id,
                                            objectId: l.id,
                                            url: g,
                                            label: j,
                                            groupTitle: n.title,
                                            mimetype: c,
                                            kind: y,
                                            dimensions: null == p ? void 0 : p.dimensions
                                        })
                                    })
                                }), 0 === a.length) return null;
                            let o = null === (i = l.find(e => e.title)) || void 0 === i ? void 0 : i.title,
                                s = (() => {
                                    let e = new Set(a.map(e => e.kind));
                                    if (1 === e.size) {
                                        if (e.has("image")) return "Images created";
                                        if (e.has("document")) return "Documents created";
                                        if (e.has("video")) return "Videos created";
                                        if (e.has("model")) return "3D models created"
                                    }
                                    return "Items created"
                                })();
                            return {
                                artifactId: t.id,
                                title: o || s,
                                images: a
                            }
                        }).filter(e => null !== e)
                    }, [eA, tj.artifacts, E]),
                    tC = (0, r.useMemo)(() => !eA && (!!eS || (0, q.jN)(tN)), [eA, eS, tN]),
                    tS = (0, r.useMemo)(() => tC ? K({
                        assistantContent: tv
                    }) : null, [tC, tv]),
                    tI = (0, r.useMemo)(() => !tC || tS ? null : V({
                        assistantContent: tv,
                        previewGalleries: t_
                    }), [tC, tS, tv, t_]),
                    tz = (0, r.useMemo)(() => !tC || tS || tI ? null : Q({
                        assistantContent: tv,
                        previewGalleries: t_
                    }), [tC, tI, tS, tv, t_]),
                    tT = !!tz,
                    tE = !!tI,
                    tM = !!tS,
                    tA = (0, r.useMemo)(() => !!tC && function(e) {
                        var t, n;
                        let i = G(e.assistantContent);
                        if (K({
                                assistantContent: e.assistantContent
                            }) || V({
                                assistantContent: e.assistantContent,
                                previewGalleries: e.previewGalleries
                            })) return !0;
                        if (Q({
                                assistantContent: e.assistantContent,
                                previewGalleries: e.previewGalleries
                            })) return !!(i && J(i.media_context));
                        if (!i) return !1;
                        let r = (0, D.xi)(i.media_context);
                        return !!r && !!(J(i.media_context) || r.annotations.length > 0 || r.evidenceItems.length >= 2 || (null === (n = r.activeClip) || void 0 === n ? void 0 : null === (t = n.src) || void 0 === t ? void 0 : t.trim()))
                    }({
                        assistantContent: tv,
                        previewGalleries: t_
                    }), [tC, tv, t_]),
                    tF = (0, r.useMemo)(() => tC && tA ? [] : t_, [tC, tA, t_]),
                    tL = (0, r.useMemo)(() => {
                        if (eA) return null;
                        let e = tM || tT || tE ? tv.search(ee) : -1,
                            t = function(e) {
                                let {
                                    rawContent: t,
                                    sessionId: n,
                                    isStreaming: i = !1,
                                    trimFromIndex: r
                                } = e, l = "number" == typeof r && r >= 0 ? t.slice(0, r).trimEnd() : t, a = (0, X.aA)(l, i), o = [...a.thinkingBlocks].sort((e, t) => e.startIndex - t.startIndex), s = [], c = 0;
                                for (let e of o) e.startIndex > c && s.push({
                                    kind: "text",
                                    raw: l.slice(c, e.startIndex)
                                }), s.push({
                                    kind: "thinking",
                                    block: e
                                }), c = e.endIndex;
                                c < l.length && s.push({
                                    kind: "text",
                                    raw: l.slice(c)
                                });
                                let d = -1;
                                for (let e = s.length - 1; e >= 0; e--)
                                    if ("text" === s[e].kind) {
                                        d = e;
                                        break
                                    } let u = s.map((e, t) => {
                                        if ("thinking" === e.kind) return e;
                                        let r = (0, R.h)(e.raw, n, i && t === d);
                                        return {
                                            kind: "text",
                                            cleanText: r.cleanText,
                                            artifacts: r.artifacts,
                                            artifactRefs: r.artifactRefs
                                        }
                                    }),
                                    m = [],
                                    f = new Set;
                                for (let e = u.length - 1; e >= 0; e--) {
                                    let t = u[e];
                                    if ("thinking" === t.kind) {
                                        if (!t.block.isComplete) break;
                                        m.unshift(t.block), f.add(e);
                                        continue
                                    }
                                    if (0 === t.cleanText.trim().length) {
                                        f.add(e);
                                        continue
                                    }
                                    break
                                }
                                return {
                                    topThinking: m,
                                    inlineSegments: u.filter((e, t) => !f.has(t)),
                                    hasActiveThinking: a.hasActiveThinking
                                }
                            }({
                                rawContent: tv,
                                isStreaming: s.isStreaming,
                                trimFromIndex: e >= 0 ? e : void 0
                            });
                        return {
                            hasActiveThinking: t.hasActiveThinking,
                            topThinking: t.topThinking.map(e => ({
                                ...e,
                                content: tk(e.content)
                            })),
                            inlineSegments: t.inlineSegments.map(e => "text" === e.kind ? {
                                ...e,
                                cleanText: tk(e.cleanText)
                            } : {
                                ...e,
                                block: {
                                    ...e.block,
                                    content: tk(e.block.content)
                                }
                            })
                        }
                    }, [eA, tv, s.isStreaming, tE, tM, tT, tk]),
                    tO = (0, r.useMemo)(() => eA ? new Map : new Map(tj.artifacts.filter(O.$).filter(e => !!e.previewCard).map(e => [e.id, e.previewCard])), [eA, tj.artifacts]),
                    tR = (0, r.useMemo)(() => {
                        var e;
                        if (eA) return new Set;
                        let t = null !== (e = null == tI ? void 0 : tI.src) && void 0 !== e ? e : tT ? null == tz ? void 0 : tz.src : void 0;
                        return new Set(t ? [t] : t_.flatMap(e => e.images.map(e => e.url)))
                    }, [eA, t_, tT, null == tI ? void 0 : tI.src, null == tz ? void 0 : tz.src]),
                    tZ = (0, r.useMemo)(() => eA ? new Set : new Set(t_.flatMap(e => e.images.map(e => e.objectId))), [eA, t_]);
                (0, r.useEffect)(() => {
                    t_.forEach(e => {
                        e.images.forEach(e => {
                            e.dimensions && eX("".concat(e.artifactId, ":").concat(e.objectId), e.dimensions.width, e.dimensions.height)
                        })
                    })
                }, [t_, eX]), (0, r.useEffect)(() => {
                    if (0 === t_.length) {
                        eU(e => Object.keys(e).length ? {} : e);
                        return
                    }
                    eU(e => {
                        let t = !1,
                            n = {};
                        return t_.forEach(i => {
                            if (0 === i.images.length) return;
                            let r = e[i.artifactId],
                                l = r && i.images.some(e => e.objectId === r) ? r : i.images[i.images.length - 1].objectId;
                            n[i.artifactId] = l, l !== r && (t = !0)
                        }), Object.keys(e).forEach(e => {
                            n[e] || (t = !0)
                        }), t ? n : e
                    })
                }, [t_]);
                let tD = (0, r.useCallback)(e => {
                        if (!z || 0 === z.size || !E) return null;
                        let t = [];
                        return (z.forEach((n, i) => {
                            if (n !== e) return;
                            let r = E(e, i);
                            if (!(null == r ? void 0 : r.previewUrl)) return;
                            let l = r.label || "Reference ".concat(t.length + 1);
                            t.push({
                                artifactId: e,
                                objectId: i,
                                url: r.previewUrl,
                                label: l,
                                groupTitle: r.label,
                                mimetype: r.mimetype || ("document" === r.kind ? "application/pdf" : "video" === r.kind ? "video/mp4" : "image/png"),
                                kind: r.kind || "image",
                                dimensions: r.dimensions
                            })
                        }), 0 === t.length) ? null : {
                            artifactId: e,
                            title: t[0].groupTitle || t[0].label || "Preview",
                            images: t
                        }
                    }, [z, E]),
                    tW = (0, r.useCallback)((e, t) => {
                        if (!Z) return !1;
                        let n = t_.find(t => t.artifactId === e) || tD(e);
                        if (!n) return !1;
                        let i = n.images.find(e => e.objectId === t) || n.images[n.images.length - 1];
                        return !!i && (eU(e => e[n.artifactId] === i.objectId ? e : {
                            ...e,
                            [n.artifactId]: i.objectId
                        }), Z({
                            gallery: n,
                            imageId: i.objectId,
                            onSelectImage: e => {
                                eU(t => ({
                                    ...t,
                                    [n.artifactId]: e
                                }))
                            }
                        }), !0)
                    }, [tD, Z, t_]),
                    tU = () => {
                        if (!eA || !W || W.total <= 1) return null;
                        let e = "".concat(W.index + 1, "/").concat(W.total),
                            t = ef || P || !ep;
                        return (0, i.jsxs)("div", {
                            className: "flex items-center gap-1 pr-1 text-xs text-muted-foreground",
                            children: [U && (0, i.jsx)("span", {
                                className: "mr-1 max-w-40 truncate rounded bg-muted px-1.5 py-0.5 font-medium text-muted-foreground",
                                children: U
                            }), (0, i.jsx)("button", {
                                type: "button",
                                onClick: () => null == ep ? void 0 : ep("prev"),
                                disabled: t,
                                className: "inline-flex size-5 items-center justify-center rounded-md hover:bg-muted/60 disabled:cursor-not-allowed disabled:opacity-40",
                                children: (0, i.jsx)(d.Z, {
                                    className: "size-3"
                                })
                            }), (0, i.jsx)("span", {
                                className: "px-1 font-medium",
                                children: e
                            }), (0, i.jsx)("button", {
                                type: "button",
                                onClick: () => null == ep ? void 0 : ep("next"),
                                disabled: t,
                                className: "inline-flex size-5 items-center justify-center rounded-md hover:bg-muted/60 disabled:cursor-not-allowed disabled:opacity-40",
                                children: (0, i.jsx)(u.Z, {
                                    className: "size-3"
                                })
                            })]
                        })
                    },
                    tP = (e, t, n, r, l) => {
                        var a, o, s, c, d, u, m;
                        let f = null != l ? l : tx.get(n),
                            p = null == E ? void 0 : E(e, t),
                            g = _.kW.test(t),
                            h = eI(t),
                            x = ek && g ? (0, C.pC)(ek, t) : void 0,
                            v = null !== (o = null !== (a = null == f ? void 0 : f.label) && void 0 !== a ? a : null == r ? void 0 : r.label) && void 0 !== o ? o : g ? t : "Image reference",
                            b = null !== (s = null == p ? void 0 : p.label) && void 0 !== s ? s : v,
                            y = null !== (d = null !== (c = null == p ? void 0 : p.previewUrl) && void 0 !== c ? c : null == f ? void 0 : f.previewUrl) && void 0 !== d ? d : x,
                            j = null !== (m = null !== (u = null == p ? void 0 : p.kind) && void 0 !== u ? u : null == f ? void 0 : f.kind) && void 0 !== m ? m : h,
                            w = null == p ? void 0 : p.mimetype;
                        return (0, i.jsx)(ec.A, {
                            artifactId: e,
                            objectId: t,
                            label: b,
                            previewUrl: y,
                            kind: j,
                            selectionEntry: r,
                            onOpenPreview: n => {
                                let {
                                    previewUrl: i,
                                    kind: r
                                } = n;
                                !tW(e, t) && i && e4({
                                    id: "".concat(e, ":").concat(t),
                                    type: "document" === r ? "pdf" : null != r ? r : "image",
                                    name: b,
                                    label: b,
                                    previewUrl: i,
                                    mimeType: w
                                })
                            }
                        })
                    },
                    tH = (0, r.useRef)(null),
                    [tq, t$] = (0, r.useState)(!1),
                    [tB, tG] = (0, r.useState)(!1),
                    tJ = (0, r.useCallback)(() => {
                        let e = tH.current;
                        if (!e) return;
                        let {
                            scrollTop: t,
                            scrollHeight: n,
                            clientHeight: i
                        } = e;
                        t$(t > 0), tG(t + i < n - 1)
                    }, []);
                (0, r.useEffect)(() => {
                    tJ();
                    let e = tH.current;
                    if (!e) return;
                    let t = new ResizeObserver(tJ);
                    return t.observe(e), () => t.disconnect()
                }, [tJ]);
                let tV = e => 0 === e.length ? null : e.map(e => {
                        var t;
                        if (0 === e.images.length) return null;
                        let n = e.images[e.images.length - 1],
                            r = eW[e.artifactId],
                            a = e.images.find(e => e.objectId === r) || n;
                        if (!a) return null;
                        a.kind;
                        let o = "video" === a.kind,
                            s = "document" === a.kind,
                            c = "".concat(a.artifactId, ":").concat(a.objectId),
                            d = a.dimensions,
                            u = d && d.width > 0 && d.height > 0 ? Number((d.width / d.height).toFixed(4)) : void 0,
                            h = null !== (t = eP[c]) && void 0 !== t ? t : u,
                            x = () => {
                                Z && Z({
                                    gallery: e,
                                    imageId: a.objectId,
                                    onSelectImage: t => {
                                        eU(n => ({
                                            ...n,
                                            [e.artifactId]: t
                                        }))
                                    }
                                })
                            },
                            v = () => !Z || o ? null : (0, i.jsx)("button", {
                                type: "button",
                                onClick: e => {
                                    e.stopPropagation(), x()
                                },
                                className: "absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full bg-background/90 text-muted-foreground shadow-sm ring-1 ring-border/60 transition hover:text-foreground",
                                "aria-label": "Open ".concat(a.label),
                                children: (0, i.jsx)(m.Z, {
                                    className: "size-4"
                                })
                            }),
                            b = (e, t) => {
                                if (e && e.width > 0 && e.height > 0) {
                                    let t = Math.min(720 / e.width, 600 / e.height, 1);
                                    return Math.max(Math.round(e.width * t), 120)
                                }
                                return t && t > 0 ? Math.max(Math.round(Math.min(600 * t, 720)), 120) : 480
                            };
                        return (0, i.jsx)("div", {
                            className: "w-full",
                            children: (0, i.jsx)("div", {
                                className: "flex flex-col gap-3",
                                children: (0, i.jsxs)("div", {
                                    className: "flex w-full max-w-full flex-col items-start gap-3 sm:flex-row",
                                    children: [(0, i.jsx)("div", {
                                        className: "flex w-full min-w-0 flex-1 justify-center",
                                        children: o ? (() => {
                                            let e = b(d, null != h ? h : u);
                                            return (0, i.jsx)(e2, {
                                                url: a.url,
                                                label: a.label,
                                                style: {
                                                    width: "min(100%, ".concat(e, "px)")
                                                },
                                                onLoadedMetadata: (e, t) => eX(c, e, t),
                                                renderOverlayButton: v
                                            })
                                        })() : s ? (0, i.jsxs)("div", {
                                            className: "relative overflow-hidden rounded-3xl border border-border bg-background",
                                            style: {
                                                width: "min(100%, ".concat(720, "px)"),
                                                height: "".concat(600, "px")
                                            },
                                            children: [v(), (0, i.jsx)("div", {
                                                className: "absolute inset-0",
                                                children: (0, i.jsx)(L.H, {
                                                    pdfUrl: a.url,
                                                    responseUrl: "",
                                                    showBoundingBoxes: !1
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "pointer-events-none absolute bottom-4 left-4 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-foreground backdrop-blur",
                                                children: a.label
                                            })]
                                        }) : (() => {
                                            let e = null != h ? h : u,
                                                t = null != e ? e : 4 / 3,
                                                n = b(d, t),
                                                r = {
                                                    aspectRatio: t,
                                                    width: "min(100%, ".concat(n, "px)"),
                                                    maxHeight: "".concat(600, "px")
                                                };
                                            if ("model" === a.kind) {
                                                var l;
                                                let e = (0, Y.F8)(a.objectId, a.url),
                                                    t = "".concat(a.artifactId, ":").concat(a.objectId);
                                                return (0, i.jsxs)("div", {
                                                    className: "relative flex w-full max-w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-black p-0 text-left",
                                                    style: {
                                                        maxHeight: "".concat(600, "px")
                                                    },
                                                    children: [(0, i.jsx)("div", {
                                                        className: "absolute right-4 top-4 z-10",
                                                        children: (0, i.jsx)("button", {
                                                            type: "button",
                                                            onClick: n => {
                                                                n.stopPropagation(), eB({
                                                                    key: t,
                                                                    url: a.url,
                                                                    label: a.label,
                                                                    fileType: e
                                                                })
                                                            },
                                                            className: "inline-flex size-8 items-center justify-center rounded-full bg-background/90 text-muted-foreground shadow-sm ring-1 ring-border/60 transition hover:text-foreground",
                                                            "aria-label": "Enter fullscreen for ".concat(a.label),
                                                            children: (0, i.jsx)(f.Z, {
                                                                className: "size-4"
                                                            })
                                                        })
                                                    }), (0, i.jsx)("div", {
                                                        className: "w-full",
                                                        style: {
                                                            aspectRatio: null !== (l = r.aspectRatio) && void 0 !== l ? l : "4/3",
                                                            maxHeight: "".concat(600, "px")
                                                        },
                                                        children: (0, i.jsx)(eu.SparkModelViewer, {
                                                            url: a.url,
                                                            fileType: e,
                                                            className: "size-full"
                                                        })
                                                    }), (0, i.jsx)("div", {
                                                        className: "absolute bottom-4 left-4 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-foreground backdrop-blur",
                                                        children: a.label
                                                    })]
                                                })
                                            }
                                            return (0, i.jsx)(e1, {
                                                url: a.url,
                                                label: a.label,
                                                style: r,
                                                onOpen: x,
                                                onLoaded: (e, t) => eX(c, e, t),
                                                renderOverlayButton: v
                                            })
                                        })()
                                    }), e.images.length > 1 && (0, i.jsxs)("div", {
                                        className: "relative w-full sm:w-[96px] sm:flex-none",
                                        children: [(0, i.jsx)("div", {
                                            ref: tH,
                                            onScroll: tJ,
                                            className: "no-scrollbar scrollbar-hide flex w-full flex-row gap-2 overflow-x-auto overflow-y-hidden py-2 pr-1 sm:max-h-[336px] sm:w-[96px] sm:flex-col sm:overflow-y-auto sm:overflow-x-hidden",
                                            children: e.images.map(t => {
                                                let n = t.objectId === a.objectId;
                                                return (0, i.jsxs)("button", {
                                                    type: "button",
                                                    onClick: n => {
                                                        n.stopPropagation(), eU(n => ({
                                                            ...n,
                                                            [e.artifactId]: t.objectId
                                                        }))
                                                    },
                                                    title: t.label,
                                                    className: "group relative size-[76px] flex-none overflow-hidden rounded-2xl border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ".concat(n ? "border-primary/60 bg-background ring-2 ring-primary/40" : "border-border/50 bg-background hover:border-border/80"),
                                                    style: {
                                                        marginLeft: "2px",
                                                        marginRight: "2px"
                                                    },
                                                    children: ["image" === t.kind ? (0, i.jsx)(l.default, {
                                                        src: t.url,
                                                        alt: t.label,
                                                        fill: !0,
                                                        className: "object-cover",
                                                        unoptimized: !0
                                                    }) : "model" === t.kind ? (0, i.jsx)("div", {
                                                        className: "flex size-full items-center justify-center bg-black text-xs font-medium text-white",
                                                        children: "3D"
                                                    }) : "video" === t.kind ? (0, i.jsx)("div", {
                                                        className: "flex size-full items-center justify-center bg-black/80",
                                                        children: (0, i.jsx)("span", {
                                                            className: "flex size-10 items-center justify-center rounded-xl bg-white/10 text-white",
                                                            children: (0, i.jsx)(p.Z, {
                                                                className: "size-6"
                                                            })
                                                        })
                                                    }) : (0, i.jsx)("div", {
                                                        className: "flex size-full items-center justify-center",
                                                        children: (0, i.jsx)("span", {
                                                            className: "flex size-10 items-center justify-center rounded-xl bg-red-50 text-red-500",
                                                            children: (0, i.jsx)(g.Z, {
                                                                className: "size-6"
                                                            })
                                                        })
                                                    }), (0, i.jsx)("div", {
                                                        className: "pointer-events-none absolute inset-0 z-[1] bg-black/10 transition-opacity duration-200 ".concat(n ? "opacity-0" : "opacity-0 group-hover:opacity-100")
                                                    }), (0, i.jsx)("div", {
                                                        className: "pointer-events-none absolute inset-x-1 bottom-1 z-[2] rounded-md px-1.5 py-0.5 text-[10px] font-medium text-foreground transition-opacity duration-200 ".concat(n ? "bg-background/95 opacity-100" : "bg-background/85 opacity-90 group-hover:opacity-100"),
                                                        children: (0, i.jsx)("span", {
                                                            className: "block w-full truncate leading-tight",
                                                            children: t.label
                                                        })
                                                    })]
                                                }, t.objectId)
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white to-transparent transition-opacity duration-200 ".concat(tq ? "opacity-100" : "opacity-0")
                                        }), (0, i.jsx)("div", {
                                            className: "pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent transition-opacity duration-200 ".concat(tB ? "opacity-100" : "opacity-0")
                                        })]
                                    })]
                                })
                            })
                        }, e.artifactId)
                    }),
                    tK = e => (0, i.jsx)(i.Fragment, {
                        children: e.map((e, t) => "text" === e.type ? (0, i.jsx)("span", {
                            children: e.text
                        }, "text-".concat(t)) : (0, i.jsx)("span", {
                            className: "mx-0.5 inline-flex items-center",
                            children: tP(e.artifactId, e.objectId, e.mentionIndex, e.selectionEntry)
                        }, "mention-".concat(t)))
                    }),
                    tQ = () => {
                        let {
                            segments: e,
                            descriptorMap: t
                        } = e$(tb), n = 1 === e.length && "text" === e[0].type && 0 === e[0].text.length, r = eG ? {
                            transform: "translateY(-".concat(eG, "px)")
                        } : void 0;
                        if (n) return (0, i.jsx)("div", {
                            className: "pointer-events-none absolute inset-0 z-0 overflow-hidden px-4 py-1.5",
                            "aria-hidden": !0,
                            children: (0, i.jsx)("div", {
                                className: "whitespace-pre-wrap break-words text-[15px] leading-6 text-muted-foreground/70",
                                style: r,
                                children: "Edit your message"
                            })
                        });
                        let l = [];
                        return e.forEach((e, n) => {
                            if ("text" === e.type) e.text.length > 0 && l.push((0, i.jsx)("span", {
                                children: e.text
                            }, "text-".concat(n)));
                            else {
                                var r;
                                l.push((0, i.jsx)("span", {
                                    className: "mx-0.5 inline-flex items-center",
                                    children: tP(e.artifactId, e.objectId, e.mentionIndex, e.selectionEntry, null !== (r = t.get(e.mentionIndex)) && void 0 !== r ? r : void 0)
                                }, "mention-".concat(n)))
                            }
                        }), (0, i.jsx)("div", {
                            className: "pointer-events-none absolute inset-0 z-0 overflow-hidden px-4 py-1.5",
                            "aria-hidden": !0,
                            children: (0, i.jsx)("div", {
                                className: "whitespace-pre-wrap break-words text-[15px] leading-6 text-foreground",
                                style: r,
                                children: l
                            })
                        })
                    },
                    tY = () => {
                        var e, t, n, r, l;
                        return (0, i.jsx)("div", {
                            className: "justify- flex".concat(eA ? "end" : "start", " pointer-events-none translate-y-0.5 gap-1 opacity-0 transition-all duration-150 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"),
                            children: (0, i.jsxs)(A.pn, {
                                children: [(0, i.jsxs)(A.u, {
                                    children: [(0, i.jsx)(A.aJ, {
                                        asChild: !0,
                                        children: (0, i.jsx)("button", {
                                            onClick: () => e3(tj.cleanText),
                                            className: "inline-flex size-7 items-center justify-center rounded-full bg-transparent text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700",
                                            children: eL ? (0, i.jsx)(h.Z, {
                                                className: "size-4"
                                            }) : (0, i.jsx)(x.Z, {
                                                className: "size-4"
                                            })
                                        })
                                    }), (0, i.jsx)(A._v, {
                                        side: "bottom",
                                        className: "text-xs",
                                        children: (0, i.jsx)("p", {
                                            children: eL ? "Copied!" : "Copy message"
                                        })
                                    })]
                                }), eA && !ey && (0, i.jsxs)(A.u, {
                                    children: [(0, i.jsx)(A.aJ, {
                                        asChild: !0,
                                        children: (0, i.jsx)("button", {
                                            onClick: () => {
                                                P || null == $ || $()
                                            },
                                            disabled: ef,
                                            className: "inline-flex size-7 items-center justify-center rounded-full bg-transparent text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-40",
                                            children: (0, i.jsx)(v.Z, {
                                                className: "size-4"
                                            })
                                        })
                                    }), (0, i.jsx)(A._v, {
                                        side: "bottom",
                                        className: "text-xs",
                                        children: (0, i.jsx)("p", {
                                            children: "Edit message"
                                        })
                                    })]
                                }), !eA && !ey && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsxs)(A.u, {
                                        children: [(0, i.jsx)(A.aJ, {
                                            asChild: !0,
                                            children: (0, i.jsx)("button", {
                                                onClick: e5,
                                                className: "inline-flex size-7 items-center justify-center rounded-full bg-transparent text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700",
                                                children: (0, i.jsx)(b.Z, {
                                                    className: "size-4"
                                                })
                                            })
                                        }), (0, i.jsx)(A._v, {
                                            side: "bottom",
                                            className: "text-xs",
                                            children: (0, i.jsx)("p", {
                                                children: "Share conversation"
                                            })
                                        })]
                                    }), !ey && (0, i.jsxs)(A.u, {
                                        children: [(0, i.jsx)(A.aJ, {
                                            asChild: !0,
                                            children: (0, i.jsx)("button", {
                                                onClick: e6,
                                                className: "inline-flex size-7 items-center justify-center rounded-full bg-transparent text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700",
                                                children: (0, i.jsx)(y.Z, {
                                                    className: "size-4"
                                                })
                                            })
                                        }), (0, i.jsx)(A._v, {
                                            side: "bottom",
                                            className: "text-xs",
                                            children: (0, i.jsx)("p", {
                                                children: "Regenerate response"
                                            })
                                        })]
                                    })]
                                }), !ey && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsxs)(A.u, {
                                        children: [(0, i.jsx)(A.aJ, {
                                            asChild: !0,
                                            children: (0, i.jsx)("div", {
                                                className: "inline-flex size-7 cursor-pointer items-center justify-center rounded-full bg-transparent text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700",
                                                children: (0, i.jsx)(j.Z, {
                                                    className: "size-4"
                                                })
                                            })
                                        }), (0, i.jsx)(A._v, {
                                            side: "bottom",
                                            className: "text-xs",
                                            children: (null == eF ? void 0 : eF.billing_mode) === "dollars" && (null == ew ? void 0 : ew.cost_dollars) !== null && (null == ew ? void 0 : ew.cost_dollars) !== void 0 ? (0, i.jsxs)("p", {
                                                children: ["This chat is ", (r = ew.cost_dollars, (0, o.gC)(r))]
                                            }) : null != ej ? (0, i.jsxs)("p", {
                                                children: ["This chat is ", ej.toLocaleString(), " credits"]
                                            }) : (null == eF ? void 0 : eF.billing_mode) === "dollars" ? (0, i.jsxs)("p", {
                                                children: [o.VF.format(null !== (e = null == eF ? void 0 : eF.dollar_balance) && void 0 !== e ? e : 0), " Available"]
                                            }) : (null == eF ? void 0 : eF.credit_limit) !== null && (null == eF ? void 0 : eF.credit_limit) !== void 0 ? (0, i.jsxs)("p", {
                                                children: [(null !== (t = null == eF ? void 0 : eF.credit_balance) && void 0 !== t ? t : 0).toLocaleString(), " Available /", " ", eF.credit_limit >= 1e3 ? "".concat((eF.credit_limit / 1e3).toLocaleString(), "K") : eF.credit_limit.toLocaleString()]
                                            }) : (0, i.jsxs)("p", {
                                                children: [(null !== (n = null == eF ? void 0 : eF.credit_balance) && void 0 !== n ? n : 0).toLocaleString(), " Credits Available"]
                                            })
                                        })]
                                    }), (0, i.jsxs)(A.u, {
                                        children: [(0, i.jsx)(A.aJ, {
                                            asChild: !0,
                                            children: (0, i.jsx)("div", {
                                                className: "inline-flex size-7 cursor-pointer items-center justify-center rounded-full bg-transparent text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700",
                                                children: (0, i.jsx)(w.Z, {
                                                    className: "size-4"
                                                })
                                            })
                                        }), (0, i.jsx)(A._v, {
                                            side: "bottom",
                                            className: "max-w-xs p-3 text-xs",
                                            children: (0, i.jsxs)("div", {
                                                className: "space-y-1.5",
                                                children: [(0, i.jsx)("p", {
                                                    className: "mb-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
                                                    children: "Chat metadata"
                                                }), ew ? (0, i.jsxs)(i.Fragment, {
                                                    children: [ew.model_id && (0, i.jsxs)("div", {
                                                        className: "flex items-baseline justify-between gap-3",
                                                        children: [(0, i.jsx)("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Model"
                                                        }), (0, i.jsx)("span", {
                                                            className: "text-right font-medium",
                                                            children: ew.model_id
                                                        })]
                                                    }), function(e) {
                                                        let t = function(e) {
                                                            if (!e) return null;
                                                            for (let n of ez) {
                                                                let i = eT(e[n]);
                                                                if (i) {
                                                                    var t;
                                                                    return {
                                                                        model: i,
                                                                        provider: null !== (t = eT(e.provider)) && void 0 !== t ? t : eT(e.vendor)
                                                                    }
                                                                }
                                                            }
                                                            return null
                                                        }(e);
                                                        return t ? (0, i.jsxs)("div", {
                                                            className: "flex items-baseline justify-between gap-3",
                                                            children: [(0, i.jsx)("span", {
                                                                className: "text-muted-foreground",
                                                                children: "Underlying"
                                                            }), (0, i.jsx)("span", {
                                                                className: "text-right font-medium",
                                                                children: t.provider ? "".concat(t.provider, " \xb7 ").concat(t.model) : t.model
                                                            })]
                                                        }) : null
                                                    }(ew.completion_metadata), ew.status && (0, i.jsxs)("div", {
                                                        className: "flex items-baseline justify-between gap-3",
                                                        children: [(0, i.jsx)("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Status"
                                                        }), (0, i.jsx)("span", {
                                                            className: "font-medium",
                                                            children: ew.status
                                                        })]
                                                    }), (0, i.jsxs)("div", {
                                                        className: "flex items-baseline justify-between gap-3",
                                                        children: [(0, i.jsx)("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Messages"
                                                        }), (0, i.jsx)("span", {
                                                            className: "font-medium",
                                                            children: ew.messages_count
                                                        })]
                                                    }), (null == eF ? void 0 : eF.billing_mode) === "dollars" && null !== ew.cost_dollars && void 0 !== ew.cost_dollars ? (0, i.jsxs)("div", {
                                                        className: "flex items-baseline justify-between gap-3",
                                                        children: [(0, i.jsx)("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Cost"
                                                        }), (0, i.jsx)("span", {
                                                            className: "font-medium",
                                                            children: (l = ew.cost_dollars, (0, o.gC)(l))
                                                        })]
                                                    }) : null !== ew.credit_cost && void 0 !== ew.credit_cost ? (0, i.jsxs)("div", {
                                                        className: "flex items-baseline justify-between gap-3",
                                                        children: [(0, i.jsx)("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Credits used"
                                                        }), (0, i.jsx)("span", {
                                                            className: "font-medium",
                                                            children: ew.credit_cost.toLocaleString()
                                                        })]
                                                    }) : null, ew.created_at && (0, i.jsxs)("div", {
                                                        className: "flex items-baseline justify-between gap-3",
                                                        children: [(0, i.jsx)("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Created"
                                                        }), (0, i.jsx)("span", {
                                                            className: "font-medium",
                                                            children: new Date(ew.created_at).toLocaleString()
                                                        })]
                                                    }), ew.updated_at && (0, i.jsxs)("div", {
                                                        className: "flex items-baseline justify-between gap-3",
                                                        children: [(0, i.jsx)("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Updated"
                                                        }), (0, i.jsx)("span", {
                                                            className: "font-medium",
                                                            children: new Date(ew.updated_at).toLocaleString()
                                                        })]
                                                    })]
                                                }) : (0, i.jsx)("p", {
                                                    className: "text-muted-foreground",
                                                    children: "No metadata yet"
                                                })]
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    };
                return (0, i.jsxs)(i.Fragment, {
                    children: [eq && "undefined" != typeof document ? (0, k.createPortal)((0, i.jsxs)("div", {
                        className: "fixed inset-0 z-[120] bg-black",
                        children: [(0, i.jsx)("div", {
                            className: "absolute right-4 top-4 z-[130] flex items-center gap-2 sm:right-6 sm:top-6",
                            children: (0, i.jsx)("button", {
                                type: "button",
                                onClick: () => eB(null),
                                className: "inline-flex size-8 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg ring-1 ring-border transition hover:bg-background sm:size-9",
                                "aria-label": "Exit fullscreen",
                                children: (0, i.jsx)(N.Z, {
                                    className: "size-4 sm:size-5"
                                })
                            })
                        }), (0, i.jsxs)("div", {
                            className: "absolute inset-0",
                            children: [(0, i.jsx)(eu.SparkModelViewer, {
                                url: eq.url,
                                fileType: eq.fileType,
                                className: "size-full rounded-none"
                            }), eq.label ? (0, i.jsx)("div", {
                                className: "absolute bottom-4 left-4 rounded-full bg-background/80 px-3 py-1.5 text-sm font-medium text-foreground backdrop-blur sm:bottom-6 sm:left-6 sm:px-4",
                                children: eq.label
                            }) : null]
                        })]
                    }), document.body) : null, (() => {
                        let e = eA ? P ? "w-full max-w-4xl flex flex-col gap-2" : "max-w-lg flex flex-col items-end gap-2 self-end" : "w-full max-w-4xl flex flex-col gap-2";
                        return (0, i.jsxs)("div", {
                            className: "group flex w-full flex-col items-start",
                            children: [!eA && tL && tL.topThinking.length > 0 && (0, i.jsx)("div", {
                                className: "mb-4 w-full space-y-3",
                                children: tL.topThinking.map(e => (0, i.jsx)(eN, {
                                    content: e.content,
                                    autoScrollLocked: I,
                                    isStreaming: !e.isComplete && (null == tL ? void 0 : tL.hasActiveThinking),
                                    isComplete: e.isComplete,
                                    className: "w-full"
                                }, e.id))
                            }), (0, i.jsxs)("div", {
                                className: e,
                                children: [eA && tU(), eA && (ta.length > 0 || to.length > 0) && (0, i.jsxs)("div", {
                                    className: "flex flex-col gap-3 ".concat(eA ? "items-end" : "items-start"),
                                    children: [td(ta), ts(to)]
                                }), ty && (0, i.jsx)("div", {
                                    className: "flex flex-col gap-1 ".concat(eA && !P ? "items-end" : ""),
                                    children: (0, i.jsx)("div", {
                                        className: eA ? "rounded-2xl text-foreground ".concat(P ? "w-full bg-muted/20 px-4 py-3" : "max-w-fit bg-muted/30 px-4 py-1.5") : "text-[15px] leading-7 text-foreground",
                                        children: eA ? P ? (0, i.jsxs)("div", {
                                            className: "flex w-full flex-col gap-2",
                                            style: {
                                                minWidth: "min(280px, calc(100vw - 3.5rem))"
                                            },
                                            children: [(0, i.jsxs)("div", {
                                                className: "relative",
                                                children: [tQ(), (0, i.jsx)(M.g, {
                                                    ref: eK,
                                                    value: tb,
                                                    onChange: e => {
                                                        null == B || B(e.target.value), e8()
                                                    },
                                                    onScroll: e9,
                                                    spellCheck: !1,
                                                    autoCorrect: "off",
                                                    autoCapitalize: "none",
                                                    disabled: ef,
                                                    disableFocusRing: !0,
                                                    className: "relative z-10 w-full resize-none rounded-2xl border-0 px-4 py-1.5 text-[15px] leading-6 text-transparent shadow-none focus:border-0 focus:shadow-none focus:outline-none focus:ring-0",
                                                    style: {
                                                        caretColor: "hsl(var(--foreground))",
                                                        minHeight: 80,
                                                        maxHeight: 210,
                                                        overflowY: "hidden"
                                                    },
                                                    placeholder: "Edit your message"
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "flex justify-end gap-2",
                                                children: [(0, i.jsx)(T.z, {
                                                    type: "button",
                                                    variant: "ghost",
                                                    size: "sm",
                                                    onClick: () => null == ei ? void 0 : ei(),
                                                    disabled: ef,
                                                    className: "rounded-full px-4 text-xs",
                                                    children: "Cancel"
                                                }), (0, i.jsx)(T.z, {
                                                    type: "button",
                                                    size: "sm",
                                                    onClick: () => null == er ? void 0 : er(),
                                                    disabled: ef || !tb.trim(),
                                                    className: "rounded-full px-4 text-xs shadow-none",
                                                    children: ev ? "Sending…" : "Send"
                                                })]
                                            })]
                                        }) : (0, i.jsxs)("div", {
                                            className: "whitespace-pre-wrap text-[15px] leading-7",
                                            children: [tc(), tK(tg)]
                                        }) : (0, i.jsxs)(i.Fragment, {
                                            children: [s.isThinking && (0, i.jsx)("div", {
                                                className: "mb-1 mt-3 flex items-center",
                                                children: (0, i.jsx)("div", {
                                                    className: "relative flex items-center space-x-1",
                                                    children: [0, 1, 2].map(e => (0, i.jsx)("div", {
                                                        className: "size-1.5 rounded-full bg-primary/70",
                                                        style: {
                                                            animation: "elegantPulse 1.4s ease-in-out infinite",
                                                            animationDelay: "".concat(.15 * e, "s")
                                                        }
                                                    }, e))
                                                })
                                            }), tS ? (0, i.jsx)(eg, {
                                                ...tS,
                                                className: "mb-1"
                                            }) : tI ? (0, i.jsx)(el, {
                                                ...tI,
                                                className: "mb-1"
                                            }) : tz ? (0, i.jsx)(el, {
                                                ...tz,
                                                className: "mb-1"
                                            }) : null, null == tL ? void 0 : tL.inlineSegments.map((e, t) => "thinking" === e.kind ? (0, i.jsx)(eN, {
                                                content: e.block.content,
                                                autoScrollLocked: I,
                                                isStreaming: !e.block.isComplete && (null == tL ? void 0 : tL.hasActiveThinking),
                                                isComplete: e.block.isComplete,
                                                className: "my-2 w-full"
                                            }, "inline-think-".concat(e.block.id)) : e.cleanText ? (0, i.jsx)(eo.Q, {
                                                content: e.cleanText,
                                                artifactRefs: tj.artifactRefs,
                                                onArtifactClick: c,
                                                renderPreviewArtifact: e => {
                                                    var t, n;
                                                    let r = tO.get(e);
                                                    if (!r) return null;
                                                    let l = (null === (n = r.canvas) || void 0 === n ? void 0 : null === (t = n.data) || void 0 === t ? void 0 : t.length) === 1;
                                                    return (0, i.jsx)("div", {
                                                        className: l ? "my-4" : "my-4 overflow-hidden rounded-2xl border border-border/60 bg-background p-3",
                                                        children: (0, i.jsx)(F.se, {
                                                            stream: r,
                                                            sessionId: null != ek ? ek : void 0
                                                        })
                                                    })
                                                },
                                                renderMentionToken: (e, t, n) => (0, i.jsx)("span", {
                                                    className: "mx-0.5 inline-flex items-center",
                                                    children: tP(e, t, n, th.get(n))
                                                }),
                                                renderDocTag: (e, t) => {
                                                    let n = e.docRef.replace(/\.[a-z0-9]+$/i, ""),
                                                        r = ek ? (0, C.pC)(ek, n) : void 0;
                                                    return (0, i.jsx)(es.p, {
                                                        docRef: e.docRef,
                                                        title: e.title,
                                                        page: e.page,
                                                        resolvedUrl: r
                                                    }, "doc-".concat(t, "-").concat(e.docRef))
                                                }
                                            }, "inline-text-".concat(t)) : null), tF.length > 0 && (0, i.jsx)("div", {
                                                className: "mt-3 flex flex-col gap-3",
                                                children: tV(tF)
                                            }), s.isStreaming && !tj.hasActiveThinking && (0, i.jsx)("div", {
                                                className: "mb-1 mt-3 flex items-center",
                                                children: (0, i.jsx)("div", {
                                                    className: "relative flex items-center space-x-1",
                                                    children: [0, 1, 2].map(e => (0, i.jsx)("div", {
                                                        className: "size-1.5 rounded-full bg-primary/70",
                                                        style: {
                                                            animation: "elegantPulse 1.4s ease-in-out infinite",
                                                            animationDelay: "".concat(.15 * e, "s")
                                                        }
                                                    }, e))
                                                })
                                            })]
                                        })
                                    })
                                }), !eA && (() => {
                                    let e = ta.filter(e => !(e.preview && tR.has(e.preview) || e.fileId && tZ.has(e.fileId))),
                                        t = to.filter(e => !(e.preview && tR.has(e.preview) || e.fileId && tZ.has(e.fileId)));
                                    return 0 === e.length && 0 === t.length ? null : (0, i.jsxs)("div", {
                                        className: "mt-3 flex flex-col items-start gap-3",
                                        children: [td(e), ts(t)]
                                    })
                                })(), !s.isThinking && !P && !s.isStreaming && tY()]
                            })]
                        })
                    })(), (0, i.jsx)(en.v, {
                        isOpen: eZ.isOpen,
                        file: eZ.file,
                        onOpenChange: e => {
                            if (e) {
                                null == eM || eM(!0), eE && (0, em.ON)(!0), eD(e => ({
                                    isOpen: !0,
                                    file: e.file
                                }));
                                return
                            }(0, ex.w)({
                                onEmbedPreviewOpenChange: eM,
                                setDialog: eD,
                                expandHost: eE
                            })
                        },
                        onBackgroundClick: e => {
                            e.target === e.currentTarget && (0, ex.w)({
                                onEmbedPreviewOpenChange: eM,
                                setDialog: eD,
                                expandHost: eE
                            })
                        },
                        embedChrome: eE
                    })]
                })
            }
        },
        65315: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return c
                }
            });
            var i = n(57437),
                r = n(33073),
                l = n(32489),
                a = n(94508),
                o = n(43650),
                s = n(81103);

            function c(e) {
                let {
                    skill: t,
                    onRemove: n,
                    onClick: c,
                    showRemove: d = !0,
                    compact: u = !1
                } = e, m = u ? (0, i.jsxs)("div", {
                    className: (0, a.cn)("inline-flex items-center gap-1 rounded-full px-1.5 py-1", "cursor-pointer transition-colors", "bg-[#D2E9FF] text-[#2871FF]", "outline-none focus:outline-none"),
                    onClick: c,
                    children: [(0, i.jsx)(r.Z, {
                        className: "size-3.5"
                    }), d && (0, i.jsx)("button", {
                        onClick: e => {
                            e.stopPropagation(), n()
                        },
                        className: "rounded-full p-0.5 transition-opacity hover:opacity-70",
                        "aria-label": "Remove skill",
                        children: (0, i.jsx)(l.Z, {
                            className: "size-3"
                        })
                    })]
                }) : (0, i.jsxs)("div", {
                    className: (0, a.cn)("inline-flex items-center gap-1.5 rounded-full px-3 py-1", "h-8 cursor-pointer text-sm font-normal transition-colors", "border border-[#D2E9FF] bg-[#F5FAFF] text-foreground", "outline-none focus:outline-none"),
                    onClick: c,
                    children: [(0, i.jsx)("span", {
                        className: "select-none leading-none",
                        children: t.name
                    }), d && (0, i.jsx)("button", {
                        onClick: e => {
                            e.stopPropagation(), n()
                        },
                        className: (0, a.cn)("ml-0.5 rounded-full p-0.5", "transition-opacity hover:opacity-70"),
                        "aria-label": "Remove skill",
                        children: (0, i.jsx)(l.Z, {
                            className: "size-3"
                        })
                    })]
                });
                return t.version ? (0, i.jsx)(s.pn, {
                    delayDuration: 0,
                    children: (0, i.jsxs)(s.u, {
                        children: [(0, i.jsx)(s.aJ, {
                            asChild: !0,
                            children: m
                        }), (0, i.jsxs)(s._v, {
                            side: "top",
                            children: ["Using version: ", (0, o.ko)(t.version)]
                        })]
                    })
                }) : m
            }
        },
        9009: function(e, t, n) {
            n.d(t, {
                Jn: function() {
                    return i
                },
                ON: function() {
                    return r
                },
                VG: function() {
                    return l
                }
            });
            let i = "data-embed-chat-shell";

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.pathname;
                window.parent === window || "/embed/composer" === t || t.startsWith("/embed/composer/") || window.parent.postMessage({
                    type: "vlm-chat-embed-overlay",
                    open: e
                }, "*")
            }

            function l(e) {
                "undefined" != typeof document && document.documentElement.classList.toggle("embed-attachment-preview-open", e)
            }
        },
        86408: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return l
                },
                w: function() {
                    return a
                }
            });
            var i = n(54887),
                r = n(9009);

            function l(e) {
                let {
                    item: t,
                    onEmbedPreviewOpenChange: n,
                    setDialog: l,
                    expandHost: a = !1
                } = e;
                (0, r.VG)(!0), n && (0, i.flushSync)(() => {
                    n(!0)
                }), a && (0, r.ON)(!0), l({
                    isOpen: !0,
                    file: t
                })
            }

            function a(e) {
                let {
                    onEmbedPreviewOpenChange: t,
                    setDialog: n,
                    expandHost: l = !1
                } = e;
                t && (0, i.flushSync)(() => {
                    t(!1)
                }), l && (0, r.ON)(!1), n({
                    isOpen: !1,
                    file: null
                }), (0, r.VG)(!1)
            }
        },
        12782: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return i
                }
            });

            function i(e) {
                return "preview" === e.type
            }
        },
        55216: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return j
                }
            });
            var i = n(24462);
            let r = "<execute_code";
            var l = n(36793);

            function a(e) {
                return "{" === e ? "}" : "]"
            }

            function o(e) {
                try {
                    return JSON.parse(e)
                } catch (e) {}
                try {
                    return JSON.parse(function(e) {
                        let t = [],
                            n = [],
                            i = !1,
                            r = !1;
                        for (let l = 0; l < e.length; l++) {
                            let o = e[l];
                            if (i) {
                                t.push(o), r ? r = !1 : "\\" === o ? r = !0 : '"' === o && (i = !1);
                                continue
                            }
                            if ('"' === o) {
                                i = !0, t.push(o);
                                continue
                            }
                            if ("{" === o || "[" === o) {
                                n.push(o), t.push(o);
                                continue
                            }
                            if ("}" === o || "]" === o) {
                                let e = n[n.length - 1];
                                if (e === ("}" === o ? "{" : "[")) {
                                    n.pop(), t.push(o);
                                    continue
                                }
                                void 0 !== e && (t.push(a(e)), n.pop(), l--);
                                continue
                            }
                            t.push(o)
                        }
                        for (; n.length > 0;) {
                            let e = n.pop();
                            t.push(a(e))
                        }
                        return t.join("")
                    }(e))
                } catch (e) {}
            }
            var s = n(2293);

            function c(e, t) {
                let n = o(e);
                return (null == n ? void 0 : n.object) === t && Array.isArray(n.data) ? n : null
            }
            let d = e => c(e, "preview.objects"),
                u = e => c(e, "preview.suggestions");

            function m(e) {
                let t = e.trim();
                if (!t) return [];
                let n = o(t);
                if (void 0 !== n) {
                    let e = n && "object" == typeof n && !Array.isArray(n) && "preview.annotations" === n.object && Array.isArray(n.data) ? n.data : Array.isArray(n) ? n : [n],
                        t = [];
                    for (let n of e) {
                        let e = s.am.safeParse(n);
                        e.success && t.push(e.data)
                    }
                    if (t.length > 0) return t
                }
                let i = [];
                for (let e of t.split(/\r?\n/)) {
                    let t = e.trim();
                    if (!t || !t.startsWith("{")) continue;
                    let n = o(t);
                    if (void 0 === n) continue;
                    let r = s.am.safeParse(n);
                    r.success && i.push(r.data)
                }
                return i
            }
            let f = {
                img: "preview.image",
                vid: "preview.video",
                aud: "preview.audio",
                doc: "preview.document",
                recon: "preview.recon"
            };

            function p(e) {
                let t = "object" in e && "preview.video-transcription" === e.object ? e.data : e;
                if (!t || "object" != typeof t || !("data" in t) || !Array.isArray(t.data)) return [];
                let n = [];
                for (let e of t.data)
                    if (e && "object" == typeof e && "data" in e && Array.isArray(e.data))
                        for (let t of e.data) t && "object" == typeof t && "ref" in t && "string" == typeof t.ref ? n.push(t.ref) : "string" == typeof t && function(e) {
                            return h.some(t => e.startsWith(t)) || s.kW.test(e)
                        }(t) && n.push(t);
                return n
            }

            function g(e) {
                return e ? e.data.map(e => e.ref) : []
            }
            let h = ["blk_", "cel_", "grid_"];

            function x(e) {
                let t = null,
                    n = {},
                    i = [];
                for (let r of e) "preview.canvas" === r.object ? t = r : "preview.image-annotation" === r.object || "preview.document-page-annotation" === r.object ? i.push(r) : n[r.id] = r;
                let r = new Set;
                for (let e of Object.values(n)) {
                    for (let t of p(e)) r.add(t);
                    "preview.video-timeline" === e.object && r.add(e.video_id)
                }
                for (let e of g(t)) r.add(e);
                for (let e of i) "preview.image-annotation" === e.object && r.add(e.img_id), "preview.document-page-annotation" === e.object && r.add(e.doc_id);
                for (let e of r) {
                    if (n[e] || !s.kW.test(e) && !e.startsWith("cel_")) continue;
                    let t = function(e) {
                        let t = f[e.slice(0, e.indexOf("_"))];
                        return t ? {
                            object: t,
                            id: e,
                            src: e,
                            title: null
                        } : e.startsWith("cel_") ? {
                            object: "preview.image",
                            id: e,
                            src: e,
                            title: null
                        } : null
                    }(e);
                    t && (n[e] = t)
                }
                let l = function(e) {
                    let t = new Set;
                    for (let n of Object.values(e)) {
                        for (let e of p(n)) t.add(e);
                        for (let e of "preview.grid" !== n.object ? [] : n.data.map(e => e.ref)) t.add(e)
                    }
                    return t
                }(n);
                if (t) {
                    let n = new Set(g(t)),
                        i = e.findIndex(e => "preview.canvas" === e.object),
                        r = [],
                        a = [],
                        o = new Set;
                    if (e.forEach((e, t) => {
                            if ("preview.canvas" === e.object || "preview.image-annotation" === e.object || "preview.document-page-annotation" === e.object) return;
                            let s = e.id;
                            o.has(s) || n.has(s) || l.has(s) || (o.add(s), t < i ? r.push(s) : a.push(s))
                        }), r.length > 0 || a.length > 0) {
                        let e = t.cols,
                            n = t.data.reduce((e, t) => Math.min(e, t.row), Number.POSITIVE_INFINITY),
                            i = r.length - (Number.isFinite(n) ? n : 0),
                            l = t.data.map(e => ({
                                ...e,
                                row: e.row + i
                            })),
                            o = l.reduce((e, t) => {
                                var n;
                                return Math.max(e, t.row + (null !== (n = t.rowspan) && void 0 !== n ? n : 1) - 1)
                            }, r.length - 1);
                        t = {
                            ...t,
                            data: [...r.map((t, n) => ({
                                ref: t,
                                row: n,
                                col: 0,
                                colspan: e
                            })), ...l, ...a.map((t, n) => ({
                                ref: t,
                                row: o + 1 + n,
                                col: 0,
                                colspan: e
                            }))]
                        }
                    }
                } else {
                    let e = Object.keys(n).filter(e => !l.has(e));
                    if (0 === e.length) return null;
                    t = {
                        object: "preview.canvas",
                        id: "canvas_synthetic",
                        cols: 1,
                        data: e.map((e, t) => ({
                            ref: e,
                            row: t,
                            col: 0
                        }))
                    }
                }
                let a = s.bI.safeParse({
                    canvas: t,
                    records: n,
                    ...i.length > 0 ? {
                        annotations: i
                    } : {}
                });
                return a.success ? a.data : null
            }

            function v(e) {
                let t = function(e) {
                        if (!e || "object" != typeof e) return;
                        let t = e.object;
                        return "string" == typeof t ? t : void 0
                    }(o(e)),
                    n = m(e);
                return "preview.objects" === t ? "preview_objects" : "preview.suggestions" === t ? "preview_suggestions" : n.length > 0 ? "preview_card" : null
            }

            function b(e, t) {
                return [...t].sort((e, t) => t.start - e.start).reduce((e, t) => e.slice(0, t.start) + t.replacement + e.slice(t.end), e)
            }

            function y(e) {
                let t = 5381;
                for (let n = 0; n < e.length; n += 1) t = (t << 5) + t ^ e.charCodeAt(n) | 0;
                return (t >>> 0).toString(36)
            }

            function j(e, t) {
                var n;
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = e,
                    s = (0, i.aA)(e, a);
                o = function(e) {
                    if (!e.includes(r)) return e;
                    let t = "",
                        n = 0;
                    for (; n < e.length;) {
                        let i = e.indexOf(r, n);
                        if (i < 0) {
                            t += e.slice(n);
                            break
                        }
                        let l = function(e, t) {
                            let n = e.indexOf("(", t);
                            if (n < 0 || !/^\s*$/.test(e.slice(t + r.length, n))) return null;
                            let i = n + 1,
                                l = 1,
                                a = null;
                            for (; i < e.length && l > 0;) {
                                let t = e[i];
                                if ('"' === t) {
                                    let t = /\bcode\s*=\s*$/.test(e.slice(n, i)),
                                        r = "",
                                        l = !1;
                                    for (i += 1; i < e.length;) {
                                        let t = e[i];
                                        if (l) {
                                            r += function(e) {
                                                switch (e) {
                                                    case "n":
                                                        return "\n";
                                                    case "t":
                                                        return "	";
                                                    case "r":
                                                        return "\r";
                                                    case "b":
                                                        return "\b";
                                                    case "f":
                                                        return "\f";
                                                    default:
                                                        return e
                                                }
                                            }(t), l = !1, i += 1;
                                            continue
                                        }
                                        if ("\\" === t) {
                                            l = !0, i += 1;
                                            continue
                                        }
                                        if ('"' === t) {
                                            i += 1;
                                            break
                                        }
                                        r += t, i += 1
                                    }
                                    t && (a = r);
                                    continue
                                }
                                "(" === t ? l += 1 : ")" === t && (l -= 1), i += 1
                            }
                            if (l > 0 || null === a) return null;
                            let o = i;
                            for (; o < e.length && (")" === e[o] || ">" === e[o]);) o += 1;
                            return {
                                start: t,
                                end: o,
                                code: a
                            }
                        }(e, i);
                        if (!l) {
                            t += e.slice(n, i + r.length), n = i + r.length;
                            continue
                        }
                        t += e.slice(n, i) + "\n\n```python\n".concat(l.code.trim(), "\n```\n\n"), n = l.end
                    }
                    return t
                }(s.cleanText);
                let c = [];
                if (a) {
                    let e = function(e) {
                        let t = [],
                            n = e,
                            i = [],
                            r = 0;
                        for (;;) {
                            let n = e.indexOf("```", r);
                            if (-1 === n) break;
                            let l = e.indexOf("\n", n),
                                a = (-1 === l ? e.slice(n) : e.slice(n, l)).slice(3).trim(),
                                o = e.slice(-1 === l ? n + 3 : l + 1).indexOf("```");
                            if (-1 === o) {
                                let r = e.length,
                                    l = e.slice(n, r);
                                if (l.trim().length > 20) {
                                    let e = "streaming_".concat(y(l)),
                                        o = "code",
                                        s = "".concat(a.toUpperCase() || "CODE", " (generating...)");
                                    (function(e, t) {
                                        return "json" === t && ['"type":', '"properties":', '"required":', '"$schema":', '"definitions":', '"allOf":', '"anyOf":', '"oneOf":', '"additionalProperties":', '"patternProperties":'].some(t => e.includes(t))
                                    })(l, a) && (o = "schema", s = "Schema (generating...)"), t.push({
                                        id: e,
                                        type: o,
                                        title: s,
                                        language: a || void 0,
                                        isStreaming: !0
                                    }), i.push({
                                        start: n,
                                        end: r,
                                        artifactId: e
                                    })
                                }
                                break
                            }
                            r = (-1 === l ? n + 3 : l + 1) + o + 3
                        }
                        for (let n of l.ZJ) {
                            let r = "<".concat(n, ">"),
                                l = "</".concat(n, ">"),
                                a = 0;
                            for (;;) {
                                let n = e.indexOf(r, a);
                                if (-1 === n) break;
                                let o = e.slice(n + r.length).indexOf(l);
                                if (-1 === o) {
                                    let r = e.length,
                                        l = e.slice(n, r);
                                    if (l.trim().length > 20) {
                                        let e = "streaming_preview_".concat(y(l));
                                        t.push({
                                            id: e,
                                            type: "preview",
                                            title: "Preview (generating...)",
                                            isStreaming: !0
                                        }), i.push({
                                            start: n,
                                            end: r,
                                            artifactId: e
                                        })
                                    }
                                    break
                                }
                                a = n + r.length + o + l.length
                            }
                        }
                        for (let e of (i.sort((e, t) => t.start - e.start), i)) {
                            let t = "\n\n__ARTIFACT_".concat(e.artifactId, "__\n\n");
                            n = n.substring(0, e.start) + t + n.substring(e.end)
                        }
                        return {
                            refs: t,
                            cleanText: n
                        }
                    }(o);
                    c = e.refs, o = e.cleanText
                }
                let f = function(e, t) {
                        let n = [],
                            i = function(e) {
                                if (0 === e.length) return [];
                                let t = [...e].sort((e, t) => e.index - t.index),
                                    n = [],
                                    i = {
                                        matches: [t[0]],
                                        combinedContent: t[0].jsonContent,
                                        startIndex: t[0].index,
                                        endIndex: t[0].index + t[0].length
                                    };
                                for (let e = 1; e < t.length; e += 1) {
                                    let r = t[e];
                                    r.index - i.endIndex < 500 ? (i.matches.push(r), i.combinedContent += "\n" + r.jsonContent, i.endIndex = r.index + r.length) : (n.push(i), i = {
                                        matches: [r],
                                        combinedContent: r.jsonContent,
                                        startIndex: r.index,
                                        endIndex: r.index + r.length
                                    })
                                }
                                return n.push(i), n
                            }((function(e) {
                                let t, n;
                                let i = [],
                                    r = (0, l.zo)();
                                for (; null !== (t = r.exec(e));) {
                                    let e = t[0],
                                        n = function(e) {
                                            let t = /\bdata\s*=\s*(['"])/i.exec(e);
                                            if (!t) return null;
                                            let n = t[1],
                                                i = t.index + t[0].length,
                                                r = e.lastIndexOf("/>");
                                            if (-1 === r) return null;
                                            let l = e.lastIndexOf(n, r - 1);
                                            return l < i ? null : e.slice(i, l)
                                        }(e);
                                    if (null == n) continue;
                                    let r = n.replace(/&(#x[0-9a-fA-F]+|#\d+|amp|apos|quot|lt|gt);/g, (e, t) => {
                                            if ("#" === t[0]) {
                                                var n, i;
                                                let r = (null === (n = t[1]) || void 0 === n ? void 0 : n.toLowerCase()) === "x" ? 16 : 10,
                                                    l = Number.parseInt((null === (i = t[1]) || void 0 === i ? void 0 : i.toLowerCase()) === "x" ? t.slice(2) : t.slice(1), r);
                                                return Number.isFinite(l) && l >= 0 && l <= 1114111 ? String.fromCodePoint(l) : e
                                            }
                                            switch (t) {
                                                case "amp":
                                                    return "&";
                                                case "apos":
                                                    return "'";
                                                case "quot":
                                                    return '"';
                                                case "lt":
                                                    return "<";
                                                case "gt":
                                                    return ">";
                                                default:
                                                    return e
                                            }
                                        }).trim(),
                                        l = v(r);
                                    r && l && i.push({
                                        match: e,
                                        index: t.index,
                                        length: e.length,
                                        jsonContent: r,
                                        detectedType: l
                                    })
                                }
                                let a = (0, l.Ck)();
                                for (; null !== (n = a.exec(e));) {
                                    let t = n.index,
                                        r = n[0],
                                        o = e.slice(t + r.length).match(/^\s*```(?:json|jsonl)\s*\n/),
                                        s = t + r.length + (o ? o[0].length : 0),
                                        c = e.slice(s),
                                        d = l.ZJ.map(e => "</".concat(e, ">")),
                                        u = -1,
                                        m = "";
                                    for (let e of d) {
                                        let t = c.indexOf(e); - 1 !== t && (-1 === u || t < u) && (u = t, m = e)
                                    }
                                    if (-1 === u) continue;
                                    let f = s + u,
                                        p = e.slice(s, f);
                                    if (o && (p = p.replace(/\s*```\s*$/, "")), !(p = p.trim())) continue;
                                    let g = v(p);
                                    if (!g) continue;
                                    let h = f + m.length,
                                        x = e.slice(t, h);
                                    i.push({
                                        match: x,
                                        index: t,
                                        length: x.length,
                                        jsonContent: p,
                                        detectedType: g
                                    }), a.lastIndex = h
                                }
                                return i
                            })(e).sort((e, t) => t.index - e.index)),
                            r = [];
                        return i.forEach(e => {
                            let {
                                matches: i,
                                combinedContent: l
                            } = e, a = y(l), o = {
                                id: a,
                                type: "preview",
                                content: l,
                                title: "Preview",
                                sessionId: t
                            }, s = i.find(e => "preview_objects" === e.detectedType), c = i.find(e => "preview_suggestions" === e.detectedType), f = i.filter(e => "preview_card" === e.detectedType);
                            if (s) {
                                let e = d(s.jsonContent);
                                e && (o.previewObjects = e)
                            }
                            if (c) {
                                let e = u(c.jsonContent);
                                e && (o.previewSuggestions = e)
                            }
                            let p = x(f.flatMap(e => m(e.jsonContent)));
                            p && (o.previewCard = p, o.title = "Media Card Preview");
                            let g = !!o.previewObjects,
                                h = !!o.previewSuggestions,
                                v = !!o.previewCard;
                            if (!(g || h || v)) return;
                            n.push(o);
                            let b = [...i].sort((e, t) => e.index - t.index);
                            if (g || v) {
                                let e = b[0];
                                r.push({
                                    start: e.index,
                                    end: e.index + e.length,
                                    replacement: "__ARTIFACT_".concat(a, "__")
                                }), b.slice(1).forEach(e => {
                                    r.push({
                                        start: e.index,
                                        end: e.index + e.length,
                                        replacement: ""
                                    })
                                })
                            } else b.forEach(e => {
                                r.push({
                                    start: e.index,
                                    end: e.index + e.length,
                                    replacement: ""
                                })
                            })
                        }), {
                            artifacts: n,
                            cleanText: b(e, r)
                        }
                    }(o, t),
                    p = function(e, t) {
                        let n;
                        let i = [],
                            r = [],
                            l = /```(?:json|jsonl|JSON|JSONL)\s*\n([\s\S]*?)```/g;
                        for (; null !== (n = l.exec(e));) {
                            let e = n[1].trim(),
                                l = x(m(e));
                            if (!l) continue;
                            let a = y(e);
                            i.push({
                                id: a,
                                type: "preview",
                                content: e,
                                title: "Media Card Preview",
                                sessionId: t,
                                previewCard: l
                            }), r.push({
                                start: n.index,
                                end: n.index + n[0].length,
                                replacement: "\n\n__ARTIFACT_".concat(a, "__\n\n")
                            })
                        }
                        return {
                            artifacts: i,
                            cleanText: b(e, r)
                        }
                    }(f.cleanText, t),
                    g = function(e, t) {
                        let n = [],
                            i = [],
                            r = e.matchAll(/[^\n]*(?:\n|$)/g),
                            l = null,
                            a = () => {
                                if (!l) return;
                                let e = x(l.records);
                                if (e) {
                                    let r = l.raw.join("\n"),
                                        a = y(r);
                                    n.push({
                                        id: a,
                                        type: "preview",
                                        content: r,
                                        title: "Media Card Preview",
                                        sessionId: t,
                                        previewCard: e
                                    }), i.push({
                                        start: l.start,
                                        end: l.end,
                                        replacement: "\n\n__ARTIFACT_".concat(a, "__\n\n")
                                    })
                                }
                                l = null
                            };
                        for (let e of r) {
                            var o;
                            let t = e[0];
                            if (!t) continue;
                            let n = null !== (o = e.index) && void 0 !== o ? o : 0,
                                i = n + t.length,
                                r = t.trim(),
                                s = r.startsWith("{") ? m(r) : [];
                            if (s.length > 0) {
                                null != l || (l = {
                                    records: [],
                                    start: n,
                                    end: i,
                                    raw: []
                                }), l.records.push(...s), l.end = i, l.raw.push(r);
                                continue
                            }
                            r && a()
                        }
                        return a(), {
                            artifacts: n,
                            cleanText: b(e, i)
                        }
                    }(p.cleanText, t),
                    h = [...f.artifacts, ...p.artifacts, ...g.artifacts],
                    j = [...h.map(e => ({
                        id: e.id,
                        type: e.type,
                        title: e.title,
                        language: e.language
                    })), ...c];
                return {
                    cleanText: (n = g.cleanText) ? n.replace(l.Gv, "").replace(/<preview\b[\s\S]*?(?:\/>|<\/preview>|(?=<preview(?:[\s/>]|_))|(?=__ARTIFACT_)|$)/gi, "").replace(/<(preview|preview_(plan|objects|suggestions|card|canvas|annotations|stream))>[\s\S]*?(?:<\/\1>|(?=<preview(?:_|>))|(?=__ARTIFACT_)|$)/gi, "").trim() : n,
                    artifacts: h,
                    artifactRefs: j,
                    thinkingBlocks: s.thinkingBlocks,
                    hasActiveThinking: s.hasActiveThinking
                }
            }
        },
        89222: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return a
                }
            });
            let i = /^original(\s+(image|images|upload|photo|picture))?(\s+#\d+)?$/i,
                r = {
                    image: "Image",
                    video: "Video",
                    document: "Document",
                    model: "3D Model"
                },
                l = e => {
                    if (!e) return !1;
                    let t = e.trim().toLowerCase();
                    return !!t && i.test(t)
                },
                a = () => {
                    let e = 0;
                    return t => {
                        let {
                            kind: n,
                            primaryLabel: i,
                            fallbackLabel: a
                        } = t, o = null == i ? void 0 : i.trim(), s = null == a ? void 0 : a.trim(), c = o || s || r[n];
                        return "image" === n && (l(o) || l(s)) ? (e += 1, "Uploaded image ".concat(e)) : c
                    }
                }
        },
        36793: function(e, t, n) {
            n.d(t, {
                Ck: function() {
                    return g
                },
                Gv: function() {
                    return u
                },
                Jl: function() {
                    return f
                },
                ZJ: function() {
                    return l
                },
                jA: function() {
                    return m
                },
                zo: function() {
                    return p
                }
            });
            var i = n(3659);

            function r() {
                let e = (0, i._)(["<preview\b(?:[^'\"<>]|\"[^\"]*\"|'[^']*')*/>"], ["<preview\\b(?:[^'\"<>]|\"[^\"]*\"|'[^']*')*\\/>"]);
                return r = function() {
                    return e
                }, e
            }
            let l = ["preview", "preview_plan", "preview_objects", "preview_suggestions", "preview_card", "preview_canvas", "preview_annotations", "preview_stream"],
                a = l.join("|"),
                o = String.raw(r()),
                s = l.map(e => "<".concat(e, ">[\\s\\S]*?<\\/").concat(e, ">")).join("|"),
                c = l.map(e => "<".concat(e, ">[\\s\\S]*$")).join("|"),
                d = "<(".concat(a, ")>"),
                u = RegExp(o, "gi"),
                m = RegExp(s, "gi"),
                f = RegExp(c, "gi"),
                p = () => RegExp(o, "gi"),
                g = () => RegExp(d, "g")
        },
        24462: function(e, t, n) {
            n.d(t, {
                aA: function() {
                    return c
                }
            });
            let i = /<\s*think(?:ing)?\s*>/gi,
                r = /<\s*\/\s*(?:redacted_thinking|thinking|think)\s*>/gi,
                l = /(```|~~~)[\s\S]*?\1/g,
                a = /`[^`\n]+`/g;

            function o(e, t) {
                for (let n of t) {
                    if (e >= n.start && e < n.end) return !0;
                    if (n.start > e) break
                }
                return !1
            }

            function s(e) {
                let t;
                let n = function(e) {
                        let t;
                        let n = [];
                        for (l.lastIndex = 0; null !== (t = l.exec(e));) n.push({
                            start: t.index,
                            end: t.index + t[0].length
                        });
                        for (a.lastIndex = 0; null !== (t = a.exec(e));) {
                            let e = t.index,
                                i = e + t[0].length;
                            n.some(t => e >= t.start && i <= t.end) || n.push({
                                start: e,
                                end: i
                            })
                        }
                        return n.sort((e, t) => e.start - t.start)
                    }(e),
                    s = [];
                for (i.lastIndex = 0; null !== (t = i.exec(e));) o(t.index, n) || s.push({
                    kind: "open",
                    index: t.index,
                    length: t[0].length
                });
                for (r.lastIndex = 0; null !== (t = r.exec(e));) o(t.index, n) || s.push({
                    kind: "close",
                    index: t.index,
                    length: t[0].length
                });
                return s.sort((e, t) => e.index - t.index), s
            }

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = [],
                    l = !1,
                    a = 0,
                    o = [],
                    c = s(e),
                    d = 0,
                    u = -1,
                    m = -1;
                for (let e of c) "open" === e.kind ? (0 === d && (u = e.index, m = e.index + e.length), d++) : d > 0 && 0 == --d && u >= 0 && (o.push({
                    start: u,
                    end: e.index + e.length,
                    innerStart: m,
                    innerEnd: e.index,
                    isComplete: !0
                }), u = -1);
                d > 0 && u >= 0 && o.push({
                    start: u,
                    end: e.length,
                    innerStart: m,
                    innerEnd: e.length,
                    isComplete: !1
                });
                let f = e;
                for (let e = o.length - 1; e >= 0; e--) {
                    let t = o[e];
                    f = f.slice(0, t.start) + f.slice(t.end)
                }
                for (let s of o) {
                    let o = e.slice(s.innerStart, s.innerEnd).replace(i, "").replace(r, "").trim();
                    i.lastIndex = 0, r.lastIndex = 0;
                    let c = s.isComplete || !t;
                    !s.isComplete && t && (l = !0), n.push({
                        id: "thinking-".concat(a++),
                        content: o,
                        isComplete: c,
                        startIndex: s.start,
                        endIndex: s.end
                    })
                }
                let p = s(f);
                for (let e = p.length - 1; e >= 0; e--) {
                    let t = p[e];
                    f = f.slice(0, t.index) + f.slice(t.index + t.length)
                }
                return {
                    cleanText: f = f.trim(),
                    thinkingBlocks: n,
                    hasActiveThinking: l
                }
            }
        },
        10586: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return i
                },
                r: function() {
                    return r
                }
            });
            let i = [{
                    name: "blue",
                    primary: "hsl(221, 83%, 53%)",
                    bg: "rgba(59, 130, 246, 0.15)",
                    bgHover: "rgba(59, 130, 246, 0.2)",
                    border: "rgba(59, 130, 246, 0.6)",
                    borderActive: "rgba(59, 130, 246, 0.9)",
                    text: "rgb(59, 130, 246)",
                    overlay: "rgba(59, 130, 246, 0.25)",
                    overlayBorder: "rgba(59, 130, 246, 0.8)",
                    overlayActive: "rgba(59, 130, 246, 0.35)"
                }, {
                    name: "emerald",
                    primary: "hsl(160, 84%, 39%)",
                    bg: "rgba(16, 185, 129, 0.15)",
                    bgHover: "rgba(16, 185, 129, 0.2)",
                    border: "rgba(16, 185, 129, 0.6)",
                    borderActive: "rgba(16, 185, 129, 0.9)",
                    text: "rgb(16, 185, 129)",
                    overlay: "rgba(16, 185, 129, 0.25)",
                    overlayBorder: "rgba(16, 185, 129, 0.8)",
                    overlayActive: "rgba(16, 185, 129, 0.35)"
                }, {
                    name: "orange",
                    primary: "hsl(25, 95%, 53%)",
                    bg: "rgba(249, 115, 22, 0.15)",
                    bgHover: "rgba(249, 115, 22, 0.2)",
                    border: "rgba(249, 115, 22, 0.6)",
                    borderActive: "rgba(249, 115, 22, 0.9)",
                    text: "rgb(249, 115, 22)",
                    overlay: "rgba(249, 115, 22, 0.25)",
                    overlayBorder: "rgba(249, 115, 22, 0.8)",
                    overlayActive: "rgba(249, 115, 22, 0.35)"
                }, {
                    name: "purple",
                    primary: "hsl(262, 83%, 58%)",
                    bg: "rgba(168, 85, 247, 0.15)",
                    bgHover: "rgba(168, 85, 247, 0.2)",
                    border: "rgba(168, 85, 247, 0.6)",
                    borderActive: "rgba(168, 85, 247, 0.9)",
                    text: "rgb(168, 85, 247)",
                    overlay: "rgba(168, 85, 247, 0.25)",
                    overlayBorder: "rgba(168, 85, 247, 0.8)",
                    overlayActive: "rgba(168, 85, 247, 0.35)"
                }, {
                    name: "rose",
                    primary: "hsl(330, 81%, 60%)",
                    bg: "rgba(244, 63, 94, 0.15)",
                    bgHover: "rgba(244, 63, 94, 0.2)",
                    border: "rgba(244, 63, 94, 0.6)",
                    borderActive: "rgba(244, 63, 94, 0.9)",
                    text: "rgb(244, 63, 94)",
                    overlay: "rgba(244, 63, 94, 0.25)",
                    overlayBorder: "rgba(244, 63, 94, 0.8)",
                    overlayActive: "rgba(244, 63, 94, 0.35)"
                }],
                r = e => i[e % i.length]
        },
        64982: function(e, t, n) {
            n.d(t, {
                Cu: function() {
                    return Z
                },
                x6: function() {
                    return P
                },
                JG: function() {
                    return $
                },
                $r: function() {
                    return A
                },
                $s: function() {
                    return H
                },
                MU: function() {
                    return B
                },
                vE: function() {
                    return q
                },
                hD: function() {
                    return O
                },
                oO: function() {
                    return R
                },
                Qy: function() {
                    return F
                },
                oX: function() {
                    return W
                },
                Qq: function() {
                    return G
                },
                dX: function() {
                    return D
                },
                oV: function() {
                    return V
                },
                Kn: function() {
                    return J
                },
                I7: function() {
                    return L
                },
                pF: function() {
                    return U
                }
            });
            var i = n(92850),
                r = n(29827),
                l = n(21770),
                a = n(99376),
                o = n(14438),
                s = n(86581),
                c = n(8102),
                d = n(91377),
                u = n(47071),
                m = n(8481);

            function f(e, t) {
                localStorage.removeItem("api_key"), localStorage.removeItem(s.D), (0, m.Sl)();
                let n = c.L.getState();
                n.setUser(n.id, n.email, n.isSuperUser, t.is_org_admin, (0, d.Sm)(t.plan_type), t.plan_type);
                let i = [...(0, u.Cd)(), ["organization", "memberships"],
                        ["organization", "invitations", "mine"]
                    ],
                    r = e => !i.some(t => t.length === e.queryKey.length && t.every((t, n) => e.queryKey[n] === t));
                e.cancelQueries({
                    predicate: r
                }), e.removeQueries({
                    predicate: r
                }), t.organization_id && e.setQueryData(["organization"], e => {
                    var n, i, r, l, a, o, s;
                    if (e) return {
                        ...e,
                        id: t.organization_id,
                        name: null !== (n = t.organization_name) && void 0 !== n ? n : e.name,
                        plan_type: null !== (i = t.plan_type) && void 0 !== i ? i : e.plan_type,
                        credit_balance: null !== (l = null !== (r = t.credit_balance) && void 0 !== r ? r : e.credit_balance) && void 0 !== l ? l : 0,
                        billing_mode: null !== (a = t.billing_mode) && void 0 !== a ? a : e.billing_mode,
                        dollar_balance: null !== (s = null !== (o = t.dollar_balance) && void 0 !== o ? o : e.dollar_balance) && void 0 !== s ? s : 0
                    }
                }), e.invalidateQueries({
                    queryKey: ["organization", "memberships"]
                }), e.invalidateQueries({
                    queryKey: ["organization", "invitations", "mine"]
                }), e.invalidateQueries({
                    queryKey: ["organization"],
                    exact: !0
                })
            }
            var p = n(31125);
            let g = async () => {
                let {
                    data: e
                } = await p.Z.get("/api/v1/organization/");
                return e
            }, h = async () => {
                let {
                    data: e
                } = await p.Z.get("/api/v1/organization/memberships");
                return e
            }, x = async e => {
                let {
                    data: t
                } = await p.Z.post("/api/v1/organization/switch", {
                    organization_id: e
                });
                return t
            }, v = async e => {
                let {
                    data: t
                } = await p.Z.delete("/api/v1/organization/".concat(e, "/leave"));
                return t
            }, b = async (e, t) => {
                let {
                    data: n
                } = await p.Z.patch("/api/v1/organization/".concat(e), t);
                return n
            }, y = async e => {
                let {
                    data: t
                } = await p.Z.get("/api/v1/organization/".concat(e, "/members/"));
                return t
            }, j = async (e, t) => {
                let {
                    data: n
                } = await p.Z.post("/api/v1/organization/".concat(e, "/invite/"), t);
                return n
            }, w = async e => {
                let {
                    data: t
                } = await p.Z.get("/api/v1/organization/".concat(e, "/invitations/"));
                return t
            }, N = async e => {
                let {
                    data: t
                } = await p.Z.get("/api/v1/organization/invitation/".concat(e));
                return t
            }, k = async () => {
                let {
                    data: e
                } = await p.Z.get("/api/v1/organization/invitations/mine");
                return e
            }, _ = async e => {
                let {
                    data: t
                } = await p.Z.post("/api/v1/organization/invitations/".concat(e, "/accept"));
                return t
            }, C = async e => {
                let {
                    data: t
                } = await p.Z.post("/api/v1/organization/invitations/".concat(e, "/reject"));
                return t
            }, S = async e => {
                let {
                    data: t
                } = await p.Z.post("/api/v1/organization/invitations/".concat(e, "/reinvite"));
                return t
            }, I = async e => {
                let {
                    data: t
                } = await p.Z.delete("/api/v1/organization/invitations/".concat(e, "/revoke"));
                return t
            }, z = async (e, t) => {
                let {
                    data: n
                } = await p.Z.delete("/api/v1/organization/".concat(e, "/members/").concat(t));
                return n
            }, T = async (e, t, n) => {
                let i = new URLSearchParams({
                    skip: e.toString(),
                    limit: t.toString()
                });
                n && i.append("search", n);
                let {
                    data: r
                } = await p.Z.get("/api/v1/organization/all/with-admin?".concat(i.toString()));
                return r
            }, E = async function(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "manual_adjustment",
                    {
                        data: r
                    } = await p.Z.post("/api/v1/organization/".concat(e, "/credits"), {
                        amount: t,
                        comment: n,
                        reason: i
                    });
                return r
            }, M = e => Math.min(1e3 * 2 ** e, 3e4), A = function() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return (0, i.a)({
                    queryKey: ["organization"],
                    queryFn: () => g(),
                    enabled: e,
                    staleTime: 3e5,
                    gcTime: 6e5
                })
            }, F = function() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return (0, i.a)({
                    queryKey: ["organization", "memberships"],
                    queryFn: () => h(),
                    enabled: e,
                    staleTime: 3e5,
                    gcTime: 6e5
                })
            }, L = () => {
                let e = (0, r.NL)(),
                    t = (0, a.useRouter)();
                return (0, l.D)({
                    mutationFn: e => x(e),
                    onSuccess: n => {
                        o.Am.success("Switched to ".concat(n.organization_name)), f(e, n), t.push("/dashboard")
                    }
                })
            }, O = () => {
                let e = (0, r.NL)(),
                    t = (0, a.useRouter)();
                return (0, l.D)({
                    mutationFn: e => v(e),
                    onSuccess: () => {
                        o.Am.success("Left organization"), f(e, {
                            is_org_admin: !1,
                            plan_type: null
                        }), t.push("/dashboard")
                    }
                })
            }, R = function() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return (0, i.a)({
                    queryKey: ["organization", "invitations", "mine"],
                    queryFn: () => k(),
                    enabled: e,
                    staleTime: 3e4,
                    gcTime: 6e5
                })
            }, Z = () => {
                let e = (0, r.NL)(),
                    t = (0, a.useRouter)();
                return (0, l.D)({
                    mutationFn: e => _(e),
                    onSuccess: () => {
                        o.Am.success("Joined organization"), f(e, {
                            is_org_admin: !1,
                            plan_type: null
                        }), t.push("/dashboard")
                    }
                })
            }, D = () => {
                let e = (0, r.NL)();
                return (0, l.D)({
                    mutationFn: e => C(e),
                    onSuccess: () => {
                        e.invalidateQueries({
                            queryKey: ["organization", "invitations", "mine"]
                        })
                    }
                })
            };

            function W() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return (0, i.a)({
                    queryKey: ["organizations", "with-admin", e, t, n],
                    queryFn: () => T(e * t, t, n)
                })
            }
            let U = () => {
                    let e = (0, r.NL)();
                    return (0, l.D)({
                        mutationFn: e => {
                            let {
                                organizationId: t,
                                updateData: n
                            } = e;
                            return b(t, n)
                        },
                        onSuccess: () => {
                            e.invalidateQueries({
                                queryKey: ["organization"]
                            })
                        }
                    })
                },
                P = () => {
                    let e = (0, r.NL)();
                    return (0, l.D)({
                        mutationFn: e => {
                            let {
                                organizationId: t,
                                amount: n,
                                comment: i,
                                reason: r
                            } = e;
                            return E(t, n, i, r)
                        },
                        onSuccess: () => {
                            e.invalidateQueries({
                                queryKey: ["organizations", "with-admin"]
                            })
                        }
                    })
                },
                H = e => (0, i.a)({
                    queryKey: ["organization", e, "members"],
                    queryFn: () => y(e),
                    enabled: !!e
                }),
                q = () => (0, l.D)({
                    mutationFn: e => {
                        let {
                            organizationId: t,
                            inviteData: n
                        } = e;
                        return j(t, n)
                    }
                }),
                $ = e => (0, i.a)({
                    queryKey: ["invitation", e],
                    queryFn: () => N(e),
                    enabled: !!e,
                    staleTime: 3e4,
                    gcTime: 6e5,
                    retry: 2,
                    retryDelay: M
                }),
                B = e => (0, i.a)({
                    queryKey: ["pending_invitations", e],
                    queryFn: () => w(e),
                    enabled: !!e
                }),
                G = () => {
                    let e = (0, r.NL)();
                    return (0, l.D)({
                        mutationFn: e => S(e),
                        onSuccess: () => {
                            e.invalidateQueries({
                                queryKey: ["pending_invitations"]
                            })
                        }
                    })
                },
                J = () => {
                    let e = (0, r.NL)();
                    return (0, l.D)({
                        mutationFn: e => I(e),
                        onSuccess: () => {
                            e.invalidateQueries({
                                queryKey: ["pending_invitations"]
                            })
                        }
                    })
                },
                V = () => {
                    let e = (0, r.NL)();
                    return (0, l.D)({
                        mutationFn: e => {
                            let {
                                organizationId: t,
                                memberId: n
                            } = e;
                            return z(t, n)
                        },
                        onSuccess: () => {
                            e.invalidateQueries({
                                queryKey: ["organization"]
                            })
                        }
                    })
                }
        }
    }
]);