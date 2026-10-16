try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6b9de0be-d3ff-45b4-b1fd-47b5de1c07be", e._sentryDebugIdIdentifier = "sentry-dbid-6b9de0be-d3ff-45b4-b1fd-47b5de1c07be")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [68904], {
        73115: function(e, t, r) {
            r.d(t, {
                d: function() {
                    return n.d
                }
            });
            var n = r(92129)
        },
        68904: function(e, t, r) {
            r.d(t, {
                Q: function() {
                    return er
                }
            });
            var n = r(57437),
                l = r(2265),
                a = r(10407),
                i = r(93439),
                s = r(33756),
                o = r(90224),
                c = r(35704),
                d = r(81315),
                u = r(94508),
                m = r(74928),
                f = r(85285),
                x = r(11790),
                p = r(11590);
            let v = /<img\b[^>]*\bsrc\s*=\s*["']\s*(\[\[\s*(?:img:)?[^\]]+\]\])\s*["'][^>]*\/?>/gi,
                h = /<img\b[^>]*\bsrc\s*=\s*["']\s*((?:img|doc|url|vid|video|audio|file|recon|aud)_[a-z0-9_-]+)\s*["'][^>]*\/?>/gi,
                g = /\[((?:img|doc|url|vid|video|audio|file|recon|aud)_(?=[a-z0-9_-]*\d)[a-z0-9_-]+)\]\([^)]*\)/gi,
                b = /(```[\s\S]*?(?:```|$))/g,
                j = /<doc\b([^>]*?)\/?>(?:\s*<\/doc>)?/gi,
                w = /([a-zA-Z_][\w-]*)\s*=\s*"([^"]*)"/g,
                y = e => {
                    let t;
                    let r = {},
                        n = RegExp(w.source, "g");
                    for (; null !== (t = n.exec(e));) r[t[1].toLowerCase()] = t[2];
                    return r
                },
                N = e => {
                    if (void 0 === e) return;
                    let t = Number(e);
                    return Number.isFinite(t) ? t : void 0
                };
            var _ = r(87522);
            let k = /(```[\s\S]*?```|`[^`\n]*`|\$\$[\s\S]*?\$\$|\$[^$\n]+\$)/g,
                S = /<\/?br\s*\/?>/gi,
                C = /\\n/g,
                E = /<video\b([^>]*?)\/?>(?:\s*<\/video>)?/gi,
                T = /([a-zA-Z_][\w-]*)\s*=\s*"([^"]*)"/g,
                R = e => {
                    let t;
                    let r = {},
                        n = RegExp(T.source, "g");
                    for (; null !== (t = n.exec(e));) r[t[1].toLowerCase()] = t[2];
                    return r
                },
                A = e => {
                    if (void 0 === e) return;
                    let t = Number(e);
                    return Number.isFinite(t) ? t : void 0
                };
            var I = r(50091),
                z = r(42208),
                M = r(32883),
                D = r(29202),
                F = r(64935),
                L = r(51817);

            function P(e) {
                let {
                    reference: t,
                    onClick: r,
                    isLoading: l = !1
                } = e;
                return (0, n.jsxs)("button", {
                    onClick: () => !l && r(t.id),
                    disabled: l,
                    className: "group flex w-full items-center gap-3 rounded-lg border border-slate-200/60 bg-white/50 p-3 text-left transition-all duration-200 dark:border-slate-700/60 dark:bg-slate-900/30 ".concat(l ? "cursor-not-allowed opacity-75" : "hover:border-slate-300/80 hover:bg-slate-50/80 dark:hover:border-slate-600/80 dark:hover:bg-slate-800/40"),
                    children: [(0, n.jsx)("div", {
                        className: "shrink-0",
                        children: l ? (0, n.jsx)(L.Z, {
                            className: "size-3.5 animate-spin text-slate-600 dark:text-slate-400"
                        }) : "schema" === t.type ? (0, n.jsx)(I.Z, {
                            className: "size-3.5 text-slate-600 dark:text-slate-400"
                        }) : "preview" === t.type ? (0, n.jsx)(z.Z, {
                            className: "size-3.5 text-slate-600 dark:text-slate-400"
                        }) : "json" === t.language ? (0, n.jsx)(M.Z, {
                            className: "size-3.5 text-slate-600 dark:text-slate-400"
                        }) : "html" === t.language || "htm" === t.language ? (0, n.jsx)(D.Z, {
                            className: "size-3.5 text-slate-600 dark:text-slate-400"
                        }) : (0, n.jsx)(F.Z, {
                            className: "size-3.5 text-slate-600 dark:text-slate-400"
                        })
                    }), (0, n.jsx)("div", {
                        className: "min-w-0 flex-1",
                        children: (0, n.jsx)("div", {
                            className: "truncate text-sm font-medium text-slate-900 dark:text-slate-100",
                            children: l ? "Generating..." : t.title
                        })
                    }), !l && (0, n.jsx)(a.Z, {
                        className: "size-3.5 shrink-0 text-slate-400 transition-colors duration-200 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300"
                    })]
                })
            }
            var O = r(73115),
                Z = r(1299),
                B = r(89227),
                $ = r(33276),
                H = r(39481);

            function W(e) {
                let {
                    src: t,
                    resolvedUrl: r,
                    poster: a
                } = e, i = (0, l.useRef)(null), [s, o] = (0, l.useState)(!1), [c, d] = (0, l.useState)(!1), [m, f] = (0, l.useState)(!1), x = r || t;
                return (0, l.useEffect)(() => {
                    d(!1), f(!1), o(!1)
                }, [x]), (0, n.jsx)("div", {
                    className: "my-4 overflow-hidden rounded-2xl border border-border/40 bg-muted/10 first:mt-2 last:mb-2",
                    children: (0, n.jsxs)("div", {
                        className: "group relative aspect-video w-full bg-black",
                        children: [c ? (0, n.jsx)("div", {
                            className: "flex size-full items-center justify-center text-sm text-white/80",
                            children: "Unable to load video"
                        }) : (0, n.jsx)("video", {
                            ref: i,
                            src: x,
                            poster: a,
                            preload: "metadata",
                            playsInline: !0,
                            controls: !0,
                            className: (0, u.cn)("block size-full", !m && "invisible"),
                            onLoadedData: () => f(!0),
                            onPlay: () => o(!0),
                            onPause: () => o(!1),
                            onError: () => d(!0),
                            children: "Your browser does not support the video tag."
                        }), c || m ? null : (0, n.jsx)("div", {
                            className: "absolute inset-0",
                            children: (0, n.jsx)(H.d, {
                                kind: "video",
                                rounded: "2xl",
                                className: "border-0",
                                pathSeed: x
                            })
                        }), c ? null : (0, n.jsx)("button", {
                            type: "button",
                            onClick: () => {
                                let e = i.current;
                                e && (s ? (e.pause(), o(!1)) : e.play().then(() => o(!0)).catch(() => o(!1)))
                            },
                            "aria-label": s ? "Pause video" : "Play video",
                            className: "pointer-events-none absolute bottom-3 right-3 inline-flex size-9 items-center justify-center rounded-full bg-black/70 text-white opacity-0 transition-opacity hover:bg-black/80 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 group-hover:pointer-events-auto group-hover:opacity-100",
                            children: s ? (0, n.jsx)(B.Z, {
                                className: "size-4"
                            }) : (0, n.jsx)($.Z, {
                                className: "size-4 fill-current"
                            })
                        })]
                    })
                })
            }
            let V = /^[ \t]*>\s*\*\*Retrying:\*\*[^\n]*(?:\n[ \t]*>[^\n]*)*/gm;

            function U(e) {
                let {
                    state: t
                } = e;
                return (0, n.jsx)("div", {
                    className: "my-2 flex items-center gap-1.5 py-1 text-xs font-medium text-muted-foreground/70",
                    children: (0, n.jsx)("span", {
                        className: (0, u.cn)("active" === t && "thinking-shimmer"),
                        children: "active" === t ? "Retrying" : "Retried"
                    })
                })
            }

            function G(e) {
                let {
                    children: t,
                    isGenerating: r,
                    tokenPattern: i,
                    renderInlineToken: s
                } = e, [o, c] = (0, l.useState)(!1);
                return (0, n.jsxs)(m.zF, {
                    open: o,
                    onOpenChange: c,
                    className: "my-3 w-full",
                    children: [(0, n.jsxs)(m.wy, {
                        className: "flex items-center gap-1.5 py-1 text-xs font-medium text-muted-foreground/70 transition-colors hover:text-muted-foreground",
                        children: [(0, n.jsx)(a.Z, {
                            className: (0, u.cn)("size-3 transition-transform duration-150", o && "rotate-90")
                        }), (0, n.jsx)("span", {
                            className: (0, u.cn)(r && "thinking-shimmer"),
                            children: r ? "Generating code" : "Code generated"
                        })]
                    }), (0, n.jsx)(m.Fw, {
                        className: "overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
                        children: (0, n.jsx)("div", {
                            className: "mt-2",
                            children: (0, n.jsx)(O.d, {
                                bordered: !0,
                                tokenPattern: i,
                                renderInlineToken: s,
                                children: t
                            })
                        })
                    })]
                })
            }
            let Y = /\[\[\s*(?:img:)?([^\s:\]]+)\s*:\s*([^\]]+?)\s*\]\]/g,
                Q = /^(?:img|doc|url|vid|video|audio|file|recon|aud)_[a-z0-9_-]+$/i,
                K = /\b(?:img|doc|url|vid|video|audio|file|recon|aud)_(?=[a-z0-9_-]*\d)[a-z0-9_-]+\b/gi,
                X = e => e ? e.replace(/(?:\[\[)?\s*([^\s:\]]+)\s*:\s*((?:img|doc|url|vid|video|audio|file|recon|aud)_[^\s:\]]+)\s*:\s*([^\]\n]+?)?\s*\]\]?/gi, (e, t, r, n) => {
                    let l = String(t || "").trim(),
                        a = String(r || "").trim(),
                        i = (n || "").toString().trim(),
                        s = i ? "".concat(a, ": ").concat(i) : a;
                    return "[[img:".concat(l, ":").concat(s, "]]")
                }) : e,
                q = e => e ? e.replace(/\[\[\s*img\s*:\s*([^\]:\]]+?)\s*:\s*([^\]]+?)\s*\]\]/gi, (e, t, r) => {
                    let n = t.trim(),
                        l = r.trim();
                    if (n && l && !/\s/.test(n) && !/\s/.test(l)) return "[[img:".concat(n, ":").concat(l, "]]");
                    let a = Q.test(n),
                        i = Q.test(l);
                    return a && i ? "[[img:".concat(n, ":").concat(l, "]]") : a ? "[[img:".concat(n, ":").concat(n, "]]") : i ? "[[img:".concat(l, ":").concat(l, "]]") : n.toLowerCase() === l.toLowerCase() ? l : l || n
                }) : e,
                J = e => q(X(e.replace(/\[\[\s*(?:img:)?[^:\]]+:\s*(\[\[\s*(?:img:)?[^:\]]+:[^\]]+\]\])\s*\]\]/g, "$1"))),
                ee = e => {
                    let t = e.trim();
                    return "" !== t && /^[\]]+$/.test(t)
                },
                et = (e, t) => {
                    let r = e.trim(),
                        n = t.trim(),
                        l = n.match(/^([a-z0-9_-]+)\s*:\s*(.+)$/i);
                    if (l) {
                        let e = l[1].trim();
                        Q.test(e) && (n = e)
                    }
                    return {
                        artifactId: r,
                        objectId: n
                    }
                },
                er = l.memo(function(e) {
                    let {
                        content: t,
                        artifactRefs: r,
                        onArtifactClick: a,
                        renderPreviewArtifact: m,
                        renderMentionToken: w,
                        renderVideoTag: T,
                        renderDocTag: I,
                        useCollapsibleCodeBlocks: z = !1,
                        isCodeGenerating: M = !1
                    } = e, D = new Map(r.map(e => [e.id, e])), F = null != w ? w : (e, t, r) => (0, n.jsx)("span", {
                        className: "mx-0.5",
                        children: (0, n.jsx)(x.Z, {
                            copyText: t,
                            children: t
                        })
                    }, "default-mention-".concat(e, "-").concat(t, "-").concat(r)), L = (0, _.bY)(t);
                    return (0, n.jsxs)("div", {
                        className: "space-y-1 pl-3 leading-relaxed text-foreground",
                        children: [L ? (0, n.jsx)("p", {
                            className: "mb-2 text-sm text-muted-foreground",
                            "aria-live": "polite",
                            children: "Composing layout…"
                        }) : null, (e => {
                            let t = (0, _.bY)(e) ? (0, _.Lg)(e) : e,
                                {
                                    transformedContent: r,
                                    markerStates: w
                                } = z ? function(e, t) {
                                    let r;
                                    let n = [],
                                        l = RegExp(V.source, "gm");
                                    for (; null !== (r = l.exec(e));) n.push({
                                        start: r.index,
                                        end: r.index + r[0].length
                                    });
                                    if (0 === n.length) return {
                                        transformedContent: e,
                                        markerStates: []
                                    };
                                    let a = n.map((r, l) => {
                                            let {
                                                end: a
                                            } = r, i = l === n.length - 1, s = e.slice(a).trim().length > 0;
                                            return t && i && !s ? "active" : "done"
                                        }),
                                        i = e;
                                    for (let e = n.length - 1; e >= 0; e--) {
                                        let {
                                            start: t,
                                            end: r
                                        } = n[e];
                                        i = i.slice(0, t) + "\n\n__RETRY_".concat(e, "__\n\n") + i.slice(r)
                                    }
                                    return {
                                        transformedContent: i,
                                        markerStates: a
                                    }
                                }(t, M) : {
                                    transformedContent: t,
                                    markerStates: []
                                },
                                {
                                    transformedText: L,
                                    videos: B
                                } = function(e) {
                                    if (!e || !e.includes("<video")) return {
                                        transformedText: e,
                                        videos: []
                                    };
                                    let t = [];
                                    return {
                                        transformedText: e.replace(E, (e, r) => {
                                            var n, l;
                                            let a = R(r || ""),
                                                i = null === (n = a.src) || void 0 === n ? void 0 : n.trim();
                                            if (!i) return e;
                                            let s = t.length;
                                            return t.push({
                                                src: i,
                                                title: (null === (l = a.title) || void 0 === l ? void 0 : l.trim()) || void 0,
                                                duration: A(a.duration),
                                                startTime: A(a.start_time),
                                                endTime: A(a.end_time)
                                            }), "\n\n__VIDEO_".concat(s, "__\n\n")
                                        }),
                                        videos: t
                                    }
                                }(function(e) {
                                    if (!e) return e;
                                    let t = e.split(b);
                                    for (let e = 0; e < t.length; e += 2) {
                                        let r = t[e];
                                        r.includes("<img") && (r = r.replace(v, (e, t) => t).replace(h, (e, t) => "[[img:inline:".concat(t, "]]"))), t[e] = r.replace(g, (e, t) => "[[img:inline:".concat(t, "]]"))
                                    }
                                    return t.join("")
                                }(r && /<\/?br|\\n/i.test(r) ? r.split(k).map((e, t) => t % 2 == 1 ? e : e.replace(S, "\n").replace(C, "\n")).join("") : r)),
                                {
                                    transformedText: $,
                                    docs: H
                                } = function(e) {
                                    if (!e || !e.includes("<doc")) return {
                                        transformedText: e,
                                        docs: []
                                    };
                                    let t = [];
                                    return {
                                        transformedText: e.replace(j, (e, r) => {
                                            var n, l, a;
                                            let i = y(r || ""),
                                                s = (null === (n = i.ref) || void 0 === n ? void 0 : n.trim()) || (null === (l = i.src) || void 0 === l ? void 0 : l.trim());
                                            if (!s) return e;
                                            let o = t.length;
                                            return t.push({
                                                docRef: s,
                                                title: (null === (a = i.title) || void 0 === a ? void 0 : a.trim()) || void 0,
                                                page: N(i.page)
                                            }), "⟦DOC".concat(o, "⟧")
                                        }),
                                        docs: t
                                    }
                                }(L),
                                Q = $.split(/(__ARTIFACT_[a-zA-Z0-9_]+__|__RETRY_\d+__|__VIDEO_\d+__)/g),
                                X = 0,
                                q = 0,
                                er = null != I ? I : (e, t) => (0, n.jsx)(Z.p, {
                                    ...e
                                }, "default-doc-".concat(t, "-").concat(e.docRef)),
                                en = ($.match(/^[ ]{0,3}```/gm) || []).length,
                                el = Math.ceil(en / 2),
                                ea = en % 2 == 1,
                                ei = 0,
                                es = e => {
                                    let t;
                                    if (!e.includes("⟦DOC")) return [e];
                                    let r = [],
                                        a = /⟦DOC(\d+)⟧/g,
                                        i = 0;
                                    for (; null !== (t = a.exec(e));) {
                                        t.index > i && r.push(e.slice(i, t.index));
                                        let a = H[Number(t[1])];
                                        if (a) {
                                            let e = "doc-".concat(q, "-").concat(a.docRef);
                                            r.push((0, n.jsx)(l.Fragment, {
                                                children: er(a, q)
                                            }, e)), q += 1
                                        }
                                        i = t.index + t[0].length
                                    }
                                    return i < e.length && r.push(e.slice(i)), r
                                },
                                eo = e => {
                                    let t;
                                    if ("string" != typeof e) return e;
                                    let r = [],
                                        a = RegExp(Y.source, "g"),
                                        i = 0,
                                        s = J(e);
                                    for (; null !== (t = a.exec(s));) {
                                        let [e, a, o] = t, {
                                            artifactId: c,
                                            objectId: d
                                        } = et(a, o);
                                        if (t.index > i) {
                                            let e = s.slice(i, t.index);
                                            ee(e) || r.push(...es(e))
                                        }
                                        let u = "mention-".concat(c, "-").concat(d, "-").concat(X);
                                        r.push((0, n.jsx)(l.Fragment, {
                                            children: F(c, d, X)
                                        }, u)), X += 1, i = t.index + e.length
                                    }
                                    if (i < s.length) {
                                        let e = s.slice(i);
                                        ee(e) || r.push(...es(e))
                                    }
                                    return r.length ? r : ee(s) ? null : s
                                },
                                ec = e => l.Children.map(e, eo);
                            return Q.map((e, t) => {
                                let r = e.match(/^__RETRY_(\d+)__$/);
                                if (r) {
                                    var v;
                                    let e = null !== (v = w[Number(r[1])]) && void 0 !== v ? v : "done";
                                    return (0, n.jsx)(U, {
                                        state: e
                                    }, "retry-".concat(t))
                                }
                                let h = e.match(/^__VIDEO_(\d+)__$/);
                                if (h) {
                                    let e = Number(h[1]),
                                        r = B[e];
                                    if (!r) return null;
                                    let a = T ? T(r, e) : (0, n.jsx)(W, {
                                        ...r
                                    });
                                    return (0, n.jsx)(l.Fragment, {
                                        children: a
                                    }, "video-".concat(e, "-").concat(t))
                                }
                                let g = e.match(/^__ARTIFACT_([a-zA-Z0-9_]+)__$/);
                                if (g) {
                                    let e = g[1],
                                        r = D.get(e);
                                    if (r) {
                                        if ("preview" === r.type) {
                                            let r = null == m ? void 0 : m(e);
                                            return r ? (0, n.jsx)(l.Fragment, {
                                                children: r
                                            }, "preview-artifact-".concat(e, "-").concat(t)) : null
                                        }
                                        return (0, n.jsx)("div", {
                                            className: "my-4 first:mt-2 last:mb-2",
                                            children: (0, n.jsx)(P, {
                                                reference: r,
                                                onClick: a,
                                                isLoading: r.isStreaming
                                            })
                                        }, "artifact-wrapper-".concat(t))
                                    }
                                    return (0, n.jsx)("span", {
                                        className: "text-xs text-red-500",
                                        children: "[Artifact not found]"
                                    }, "missing-".concat(t))
                                }
                                return e.trim() ? (0, n.jsx)("div", {
                                    className: "prose prose-neutral dark:prose-invert max-w-none text-[15px] leading-relaxed",
                                    children: (0, n.jsx)(i.UG, {
                                        remarkPlugins: [d.Z, c.Z, o.Z],
                                        rehypePlugins: [s.Z],
                                        components: {
                                            p: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("p", {
                                                    className: "mb-2 leading-7 text-foreground last:mb-0",
                                                    children: ec(t)
                                                })
                                            },
                                            h1: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("h1", {
                                                    className: "mb-3 mt-5 text-xl font-semibold leading-tight text-foreground first:mt-0",
                                                    children: ec(t)
                                                })
                                            },
                                            h2: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("h2", {
                                                    className: "mb-2 mt-4 text-lg font-semibold leading-tight text-foreground first:mt-0",
                                                    children: ec(t)
                                                })
                                            },
                                            h3: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("h3", {
                                                    className: "mb-1 mt-3 text-base font-semibold leading-tight text-foreground first:mt-0",
                                                    children: ec(t)
                                                })
                                            },
                                            h4: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("h4", {
                                                    className: "mb-1 mt-2 text-sm font-semibold leading-tight text-foreground first:mt-0",
                                                    children: ec(t)
                                                })
                                            },
                                            h5: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("h5", {
                                                    className: "mb-1 mt-2 text-sm font-medium leading-tight text-foreground first:mt-0",
                                                    children: ec(t)
                                                })
                                            },
                                            h6: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("h6", {
                                                    className: "mb-1 mt-2 text-sm font-medium leading-tight text-foreground first:mt-0",
                                                    children: ec(t)
                                                })
                                            },
                                            hr: () => (0, n.jsx)("hr", {
                                                className: "my-2 border-border/30"
                                            }),
                                            table: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("div", {
                                                    className: "my-3 overflow-x-auto rounded-2xl border border-blue-100 bg-[#F0F4FF] p-1",
                                                    children: (0, n.jsx)("table", {
                                                        className: (0, u.cn)("w-full border-separate border-spacing-0 text-left text-sm", "[&_thead_tr]:border-b [&_thead_tr]:border-blue-100/60", "[&_tbody_tr:not(:last-child)_td]:border-b [&_tbody_tr:not(:last-child)_td]:border-blue-100/40", "[&_tbody_td]:bg-white [&_tbody_td]:text-slate-900", "[&_thead_tr:first-child_th:first-child]:rounded-tl-xl [&_thead_tr:first-child_th:last-child]:rounded-tr-xl", "[&_tbody_tr:first-child_td:first-child]:rounded-tl-xl [&_tbody_tr:first-child_td:last-child]:rounded-tr-xl", "[&_tbody_tr:last-child_td:first-child]:rounded-bl-xl [&_tbody_tr:last-child_td:last-child]:rounded-br-xl", "[&_tbody_tr:only-child_td:only-child]:rounded-xl", "[&_tbody_td:first-child]:font-mono [&_tbody_td:first-child]:font-semibold", "[&_tbody_td:not(:first-child)]:font-mono [&_tbody_td:not(:first-child)]:text-[13px]"),
                                                        children: t
                                                    })
                                                })
                                            },
                                            thead: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("thead", {
                                                    className: "bg-[#F0F4FF]",
                                                    children: ec(t)
                                                })
                                            },
                                            tbody: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("tbody", {
                                                    className: "[&_tr:hover_td]:bg-slate-50/90",
                                                    children: ec(t)
                                                })
                                            },
                                            tr: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("tr", {
                                                    children: ec(t)
                                                })
                                            },
                                            th: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("th", {
                                                    className: "bg-[#F0F4FF] px-3 py-2.5 text-left align-bottom text-[11px] uppercase tracking-wide text-slate-500",
                                                    children: ec(t)
                                                })
                                            },
                                            td: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("td", {
                                                    className: "bg-white px-3 py-3 align-top text-[13px] leading-relaxed text-slate-900",
                                                    children: ec(t)
                                                })
                                            },
                                            ul: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("ul", {
                                                    className: "ml-6 list-outside list-disc",
                                                    children: t
                                                })
                                            },
                                            ol: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("ol", {
                                                    className: "ml-6 list-outside list-decimal",
                                                    children: t
                                                })
                                            },
                                            li: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("li", {
                                                    className: "leading-7 text-foreground",
                                                    children: ec(t)
                                                })
                                            },
                                            blockquote: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("blockquote", {
                                                    className: "relative my-2 py-2 pl-6 italic text-foreground/90 before:absolute before:bottom-2 before:left-0 before:top-2 before:w-1 before:rounded-full before:bg-[#F0F4FF] before:content-['']",
                                                    children: ec(t)
                                                })
                                            },
                                            a: e => {
                                                let {
                                                    children: t,
                                                    href: r,
                                                    ...l
                                                } = e;
                                                return (0, n.jsx)(p._, {
                                                    href: r || "",
                                                    className: "text-primary underline underline-offset-2 transition-colors hover:text-primary/80",
                                                    children: ec(t)
                                                })
                                            },
                                            img: e => {
                                                let {
                                                    src: t,
                                                    alt: r
                                                } = e;
                                                return (0, n.jsx)(p._, {
                                                    href: t || "",
                                                    children: r || t
                                                })
                                            },
                                            strong: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("strong", {
                                                    className: "font-semibold text-foreground",
                                                    children: ec(t)
                                                })
                                            },
                                            em: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("em", {
                                                    className: "italic text-foreground",
                                                    children: ec(t)
                                                })
                                            },
                                            del: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)("del", {
                                                    className: "text-muted-foreground line-through",
                                                    children: ec(t)
                                                })
                                            },
                                            code: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, n.jsx)(x.Z, {
                                                    children: ec(t)
                                                })
                                            },
                                            pre: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                try {
                                                    var r;
                                                    let e = l.Children.only(t),
                                                        a = null !== (r = e.props.className) && void 0 !== r ? r : "",
                                                        i = /language-([\w-]+)/.exec(a),
                                                        s = null == i ? void 0 : i[1],
                                                        o = e.props.children,
                                                        c = "string" == typeof o ? o : Array.isArray(o) ? o.map(e => "string" == typeof e ? e : "").join("") : "";
                                                    if ("media-cards-canvas" === s && c.trim()) {
                                                        let e = (0, f.ri)(JSON.parse(c.trim()));
                                                        if (e) return (0, n.jsx)("div", {
                                                            className: "my-4 overflow-hidden rounded-xl border border-border/50 bg-muted/10",
                                                            children: (0, n.jsx)(f.Qc, {
                                                                schema: e.schema,
                                                                mediaContext: e.media
                                                            })
                                                        })
                                                    }
                                                } catch (e) {}
                                                let a = (e, t) => F("inline", e, -1 - t);
                                                if (z) {
                                                    let e = ei;
                                                    return ei += 1, (0, n.jsx)(G, {
                                                        isGenerating: M && e === el - 1 && ea,
                                                        tokenPattern: K,
                                                        renderInlineToken: a,
                                                        children: t
                                                    })
                                                }
                                                return (0, n.jsx)("div", {
                                                    className: "my-4",
                                                    children: (0, n.jsx)(O.d, {
                                                        bordered: !0,
                                                        tokenPattern: K,
                                                        renderInlineToken: a,
                                                        children: t
                                                    })
                                                })
                                            }
                                        },
                                        children: e
                                    })
                                }, "content-".concat(t)) : null
                            }).filter(Boolean)
                        })(t)]
                    })
                })
        },
        1299: function(e, t, r) {
            r.d(t, {
                p: function() {
                    return s
                }
            });
            var n = r(57437),
                l = r(2265),
                a = r(48736),
                i = r(94508);

            function s(e) {
                let {
                    docRef: t,
                    title: r,
                    resolvedUrl: s,
                    onClick: o
                } = e, [c, d] = (0, l.useState)(!1), u = r || t, m = !!s && !c, f = (0, n.jsxs)(n.Fragment, {
                    children: [m ? (0, n.jsx)("img", {
                        src: s,
                        alt: u,
                        className: "h-10 w-8 shrink-0 rounded-lg border border-border/40 bg-white object-cover",
                        onError: () => d(!0)
                    }) : (0, n.jsx)("span", {
                        className: "inline-flex size-7 shrink-0 items-center justify-center rounded-xl bg-red-500 text-white",
                        children: (0, n.jsx)(a.Z, {
                            className: "size-3.5"
                        })
                    }), (0, n.jsxs)("span", {
                        className: "flex min-w-0 flex-col",
                        children: [(0, n.jsx)("span", {
                            className: "truncate font-mono text-[11px] text-foreground",
                            children: u
                        }), (0, n.jsx)("span", {
                            className: "text-[10px] uppercase tracking-wide text-muted-foreground",
                            children: "PDF"
                        })]
                    })]
                }), x = (0, i.cn)("my-1 inline-flex max-w-[220px] items-center gap-2 rounded-2xl border border-border/60 bg-background px-2 py-1 align-middle text-xs font-medium text-foreground no-underline", (!!o || !!s) && "cursor-pointer transition-colors hover:border-border hover:bg-muted/50");
                return o ? (0, n.jsx)("button", {
                    type: "button",
                    onClick: o,
                    className: (0, i.cn)(x, "text-left"),
                    children: f
                }) : s ? (0, n.jsx)("a", {
                    href: s,
                    target: "_blank",
                    rel: "noreferrer",
                    className: x,
                    children: f
                }) : (0, n.jsx)("span", {
                    className: x,
                    children: f
                })
            }
        },
        54546: function(e, t, r) {
            r.d(t, {
                I: function() {
                    return c
                },
                o: function() {
                    return o
                }
            });
            var n = r(57437),
                l = r(94508),
                a = r(19060),
                i = r(26815),
                s = r(85897);
            let o = {
                lnScaleMin: -4.8,
                lnScaleMax: -5.1,
                flipSplat: !0
            };

            function c(e) {
                let {
                    lnScaleMin: t,
                    lnScaleMax: r,
                    flipSplat: o,
                    onLnScaleMinChange: c,
                    onLnScaleMaxChange: d,
                    onFlipSplatChange: u,
                    className: m
                } = e;
                return (0, n.jsxs)("div", {
                    className: (0, l.cn)("space-y-3", m),
                    children: [(0, n.jsxs)("div", {
                        className: "space-y-1",
                        children: [(0, n.jsx)(i._, {
                            className: "text-xs font-medium text-foreground",
                            children: "Small Details"
                        }), (0, n.jsx)(s.i, {
                            min: -15,
                            max: 0,
                            step: .1,
                            value: [t],
                            onValueChange: e => {
                                let [t] = e;
                                return c(t)
                            }
                        }), (0, n.jsxs)("div", {
                            className: "flex items-center justify-between text-[10px] font-medium text-muted-foreground",
                            children: [(0, n.jsx)("span", {
                                children: "Min"
                            }), (0, n.jsx)("span", {
                                children: "Max"
                            })]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "space-y-1",
                        children: [(0, n.jsx)(i._, {
                            className: "text-xs font-medium text-foreground",
                            children: "Large Details"
                        }), (0, n.jsx)(s.i, {
                            min: -15,
                            max: 0,
                            step: .1,
                            value: [r],
                            onValueChange: e => {
                                let [t] = e;
                                return d(t)
                            }
                        }), (0, n.jsxs)("div", {
                            className: "flex items-center justify-between text-[10px] font-medium text-muted-foreground",
                            children: [(0, n.jsx)("span", {
                                children: "Min"
                            }), (0, n.jsx)("span", {
                                children: "Max"
                            })]
                        })]
                    }), (0, n.jsxs)("label", {
                        className: "flex items-center gap-2 text-xs font-medium text-foreground",
                        children: [(0, n.jsx)(a.X, {
                            checked: o,
                            onCheckedChange: e => u(!!e),
                            className: "size-4"
                        }), "Flip model upright"]
                    })]
                })
            }
        },
        87522: function(e, t, r) {
            r.d(t, {
                Lg: function() {
                    return s
                },
                bY: function() {
                    return i
                },
                jN: function() {
                    return a
                }
            });
            let n = /```media-cards-canvas[\s\S]*?```/i,
                l = /```media-cards-canvas\b/i;

            function a(e) {
                return n.test(e)
            }

            function i(e) {
                return l.test(e) && !n.test(e)
            }

            function s(e) {
                let t = e.search(l);
                return -1 === t || n.test(e) ? e : e.slice(0, t).trimEnd()
            }
        },
        11794: function(e, t, r) {
            r.d(t, {
                F8: function() {
                    return l
                },
                j8: function() {
                    return i
                }
            });
            let n = e => {
                    if (!e) return;
                    let t = e.split(/[?#]/)[0].split(".");
                    if (!(t.length <= 1)) return t[t.length - 1].toLowerCase()
                },
                l = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return t.some(e => "ply" === n(e)) ? "ply" : void 0
                },
                a = e => {
                    if (!e) return null;
                    let t = e.split(/[?#]/)[0],
                        r = t.split("/");
                    return r[r.length - 1] || t
                },
                i = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return t.some(e => {
                        let t = a(e);
                        return !!t && /^recon_[a-z0-9_-]+(\.[a-z0-9]+)?$/i.test(t)
                    })
                }
        },
        85285: function(e, t, r) {
            r.d(t, {
                Re: function() {
                    return ea.Re
                },
                Qc: function() {
                    return ea.Qc
                },
                se: function() {
                    return ei
                },
                ri: function() {
                    return ea.ri
                }
            });
            var n = r(2265),
                l = r(2293),
                a = r(31604),
                i = r(57437),
                s = r(30166),
                o = r(65272),
                c = r(78217),
                d = r(64962),
                u = r(8551),
                m = r(38671),
                f = r(88546),
                x = r(89227),
                p = r(33276),
                v = r(10866),
                h = r(47416),
                g = r(94508),
                b = r(62080),
                j = r(39481),
                w = r(57054),
                y = r(73578),
                N = r(58);

            function _(e) {
                let {
                    title: t
                } = e;
                return t ? (0, i.jsx)("h3", {
                    className: "mb-2 text-sm font-semibold text-foreground",
                    children: t
                }) : null
            }

            function k(e) {
                let {
                    title: t
                } = e;
                return t ? (0, i.jsx)("p", {
                    className: "mt-1.5 truncate text-xs font-medium text-muted-foreground",
                    children: t
                }) : null
            }
            var S = r(21648),
                C = r(51817),
                E = r(54887),
                T = r(26110);
            let R = (0, n.createContext)(null);

            function A(e) {
                let {
                    children: t
                } = e, r = (0, n.useRef)(new Map), l = (0, n.useRef)(new Map), a = (0, n.useRef)(new Map), s = (0, n.useCallback)((e, t) => {
                    t ? r.current.set(e, t) : r.current.delete(e)
                }, []), o = (0, n.useCallback)((e, t) => {
                    var r;
                    null === (r = l.current.get(e)) || void 0 === r || r.forEach(e => e(t))
                }, []), c = (0, n.useCallback)(e => {
                    let t = a.current.get(e);
                    if (t) return t;
                    let n = {
                        subscribe: t => {
                            var r;
                            let n = null !== (r = l.current.get(e)) && void 0 !== r ? r : new Set;
                            return l.current.set(e, n), n.add(t), () => n.delete(t)
                        },
                        seek: t => {
                            let n = r.current.get(e);
                            if (n && Number.isFinite(t)) {
                                n.currentTime = t;
                                try {
                                    let e = n.play();
                                    e && "function" == typeof e.catch && e.catch(() => {})
                                } catch (e) {}
                            }
                        }
                    };
                    return a.current.set(e, n), n
                }, []), d = (0, n.useMemo)(() => ({
                    register: s,
                    publish: o,
                    controller: c
                }), [s, o, c]);
                return (0, i.jsx)(R.Provider, {
                    value: d,
                    children: t
                })
            }

            function I(e) {
                var t, r, n;
                let l = null === (t = e.metadata) || void 0 === t ? void 0 : t.confidence;
                return {
                    id: e.id,
                    label: null !== (r = e.label) && void 0 !== r ? r : e.id,
                    color: null !== (n = e.color) && void 0 !== n ? n : "#2AA1FF",
                    timestamp: e.start_time,
                    endTimestamp: e.end_time,
                    confidence: "number" == typeof l ? l : void 0
                }
            }

            function z(e) {
                let t = e.data.map(I),
                    r = t.length ? [{
                        id: "preview-track",
                        label: "Preview",
                        annotationIds: t.map(e => e.id)
                    }] : [];
                return {
                    annotations: t,
                    tracks: r,
                    duration: e.data.reduce((e, t) => Math.max(e, t.end_time), 1)
                }
            }

            function M() {
                return (0, i.jsx)("div", {
                    className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30",
                    "data-testid": "video-buffering",
                    children: (0, i.jsx)(C.Z, {
                        className: "size-8 animate-spin text-white/90"
                    })
                })
            }

            function D(e) {
                let {
                    playing: t,
                    onToggle: r
                } = e;
                return (0, i.jsx)(N.t, {
                    "aria-label": t ? "Pause video" : "Play video",
                    "data-video-hover-affordance": t ? "pause" : "play",
                    onClick: r,
                    className: (0, g.cn)("group-focus-within:opacity-100 group-hover:opacity-100", !t && "opacity-100"),
                    children: t ? (0, i.jsx)(x.Z, {
                        className: "size-4"
                    }) : (0, i.jsx)(p.Z, {
                        className: "ml-0.5 size-4 fill-current"
                    })
                })
            }

            function F(e) {
                var t, r, l;
                let {
                    timeline: a
                } = e, s = (t = a.video_id, null !== (l = null === (r = (0, n.useContext)(R)) || void 0 === r ? void 0 : r.controller(t)) && void 0 !== l ? l : null), [o, c] = (0, n.useState)(0);
                (0, n.useEffect)(() => (c(0), null == s ? void 0 : s.subscribe(c)), [s]);
                let {
                    annotations: d,
                    tracks: u,
                    duration: m
                } = (0, n.useMemo)(() => z(a), [a]), f = (0, n.useCallback)(e => {
                    c(e), null == s || s.seek(e)
                }, [s]);
                return (0, i.jsx)("div", {
                    className: "min-w-0",
                    "data-preview-card-object": "preview.video-timeline",
                    children: (0, i.jsx)(S.WE, {
                        duration: m,
                        currentTime: o,
                        annotations: d,
                        tracks: u,
                        onTimeChange: f
                    })
                })
            }

            function L(e) {
                var t, r;
                let {
                    video: l,
                    records: a,
                    compact: s,
                    suppressTitle: o,
                    mutedTitleBelow: c
                } = e, [d, u] = (0, n.useState)(!1), [m, f] = (0, n.useState)(!1), [x, p] = (0, n.useState)(!1), [v, h] = (0, n.useState)(!1), [b, w] = (0, n.useState)(0), [y, C] = (0, n.useState)(0), [A, I] = (0, n.useState)(void 0), [F, L] = (0, n.useState)(null), P = (0, n.useRef)(null), O = (0, n.useContext)(R), {
                    isBuffering: Z,
                    reset: B,
                    bufferingHandlers: $
                } = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 150,
                        [t, r] = (0, n.useState)(!1),
                        l = (0, n.useRef)(null),
                        a = (0, n.useCallback)(() => {
                            null !== l.current && (clearTimeout(l.current), l.current = null)
                        }, []),
                        i = (0, n.useCallback)(() => {
                            null === l.current && (l.current = setTimeout(() => {
                                l.current = null, r(!0)
                            }, e))
                        }, [e]),
                        s = (0, n.useCallback)(() => {
                            a(), r(!1)
                        }, [a]);
                    (0, n.useEffect)(() => a, [a]);
                    let o = (0, n.useMemo)(() => ({
                        onWaiting: i,
                        onSeeking: i,
                        onSeeked: s,
                        onPlaying: s,
                        onCanPlay: s
                    }), [i, s]);
                    return {
                        isBuffering: t,
                        reset: s,
                        bufferingHandlers: o
                    }
                }(), {
                    node: H,
                    setInlineHost: W,
                    setFocusedHost: V,
                    focusedSlotMounted: U
                } = function() {
                    let [e] = (0, n.useState)(() => {
                        if ("undefined" == typeof document) return null;
                        let e = document.createElement("div");
                        return e.style.display = "contents", e
                    }), t = (0, n.useRef)(null), [r, l] = (0, n.useState)(!1), a = (0, n.useCallback)(r => {
                        t.current = r, r && e && (null == e.parentNode || !e.parentNode.isConnected) && r.appendChild(e)
                    }, [e]), i = (0, n.useCallback)(r => {
                        if (!e) return;
                        let n = null != r ? r : t.current;
                        n && e.parentNode !== n && n.appendChild(e), l(null != r)
                    }, [e]);
                    return {
                        node: e,
                        setInlineHost: a,
                        setFocusedHost: i,
                        focusedSlotMounted: r
                    }
                }(), G = null !== (t = l.title) && void 0 !== t ? t : "Video", Y = c && !!l.title, Q = d && !x && Z, K = v || U, X = (0, n.useMemo)(() => {
                    let e = function(e, t) {
                        for (let r of Object.values(e))
                            if ("preview.video-timeline" === r.object && r.video_id === t) return r;
                        return null
                    }(a, l.id);
                    return e ? z(e) : null
                }, [a, l.id]), q = Math.max(y, null !== (r = null == X ? void 0 : X.duration) && void 0 !== r ? r : 0, 1), J = (0, n.useCallback)(e => {
                    P.current = e, null == O || O.register(l.id, e)
                }, [O, l.id]);
                (0, n.useEffect)(() => {
                    u(!1), f(!1), p(!1), w(0), C(0), I(void 0), L(null), B()
                }, [l.src, B]);
                let ee = (0, n.useCallback)(() => {
                        let e = P.current;
                        if (!e || !e.videoWidth || !e.videoHeight) return;
                        let t = document.createElement("canvas");
                        t.width = e.videoWidth, t.height = e.videoHeight;
                        let r = t.getContext("2d");
                        if (r) try {
                            r.drawImage(e, 0, 0, t.width, t.height), L(t.toDataURL("image/jpeg", .82))
                        } catch (e) {
                            L(null)
                        }
                    }, []),
                    et = (0, n.useCallback)(() => {
                        let e = P.current;
                        e && (e.paused ? e.play().catch(() => f(!1)) : e.pause())
                    }, []),
                    er = (0, n.useCallback)(e => {
                        let t = P.current;
                        t && Number.isFinite(e) && (t.currentTime = e, w(e), t.play().catch(() => {}))
                    }, []),
                    en = H && (0, E.createPortal)((0, i.jsx)("video", {
                        ref: J,
                        src: l.src,
                        "aria-label": G,
                        crossOrigin: "anonymous",
                        controls: K,
                        playsInline: !0,
                        preload: "metadata",
                        className: (0, g.cn)("bg-black", K ? "block h-auto max-h-[80vh] w-auto max-w-[96vw] rounded-lg object-contain" : "size-full object-contain", !K && !d && !x && "invisible"),
                        ...$,
                        onLoadedData: () => u(!0),
                        onLoadedMetadata: e => {
                            let t = e.currentTarget;
                            Number.isFinite(t.duration) && t.duration > 0 && C(t.duration), t.videoWidth > 0 && t.videoHeight > 0 && I(t.videoWidth / t.videoHeight)
                        },
                        onPlay: () => f(!0),
                        onPause: () => f(!1),
                        onTimeUpdate: e => {
                            let t = e.currentTarget.currentTime;
                            w(t), null == O || O.publish(l.id, t)
                        },
                        onError: () => {
                            p(!0), B()
                        }
                    }), H);
                return (0, i.jsxs)("div", {
                    className: s ? "max-w-[280px]" : void 0,
                    "data-preview-card-object": "preview.video",
                    children: [en, o || Y ? null : (0, i.jsx)(_, {
                        title: l.title
                    }), (0, i.jsxs)("div", {
                        className: "group relative overflow-hidden rounded-xl border border-border",
                        children: [(0, i.jsx)("div", {
                            ref: W,
                            "data-video-frame": !0,
                            className: (0, g.cn)("w-full", A ? void 0 : "aspect-video"),
                            style: A ? {
                                aspectRatio: A
                            } : void 0
                        }), K ? (0, i.jsx)("div", {
                            className: "absolute inset-0 bg-black",
                            children: F ? (0, i.jsx)("img", {
                                src: F,
                                alt: "",
                                className: "size-full object-contain"
                            }) : null
                        }) : null, d || x ? null : (0, i.jsx)("div", {
                            className: "absolute inset-0",
                            children: (0, i.jsx)(j.d, {
                                kind: "video",
                                rounded: "xl",
                                className: "border-0",
                                pathSeed: l.src
                            })
                        }), Q ? (0, i.jsx)(M, {}) : null, x ? (0, i.jsx)("div", {
                            className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 px-3 text-center text-xs font-medium text-white",
                            children: "Unable to load video"
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("button", {
                                type: "button",
                                "aria-label": "Open ".concat(G),
                                onClick: () => {
                                    ee(), h(!0)
                                },
                                className: "absolute inset-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                            }), (0, i.jsx)(D, {
                                playing: m,
                                onToggle: et
                            })]
                        })]
                    }), (0, i.jsx)(T.Vq, {
                        open: v,
                        onOpenChange: h,
                        children: (0, i.jsxs)(T.cZ, {
                            className: N.uR,
                            hideCloseButton: !0,
                            children: [(0, i.jsx)(T.$N, {
                                className: "sr-only",
                                children: G
                            }), (0, i.jsx)(T.Be, {
                                className: "sr-only",
                                children: "Focused video preview. Press escape to return to the canvas."
                            }), (0, i.jsxs)("div", {
                                className: "relative",
                                children: [(0, i.jsx)("div", {
                                    ref: V,
                                    className: "contents"
                                }), Q ? (0, i.jsx)(M, {}) : null]
                            }), X ? (0, i.jsx)("div", {
                                className: "mt-2 rounded-lg bg-black/80 px-4 pb-4 pt-3 backdrop-blur",
                                "data-preview-card-object": "preview.video-timeline",
                                children: (0, i.jsx)(S.WE, {
                                    duration: q,
                                    currentTime: b,
                                    annotations: X.annotations,
                                    tracks: X.tracks,
                                    onTimeChange: er
                                })
                            }) : null]
                        })
                    }), Y ? (0, i.jsx)(k, {
                        title: l.title
                    }) : null]
                })
            }
            var P = r(95465),
                O = r(54546),
                Z = r(11794);
            let B = (0, s.default)(() => Promise.all([r.e(41193), r.e(60774)]).then(r.bind(r, 41193)).then(e => e.SparkModelViewer), {
                    loadableGenerated: {
                        webpack: () => [41193]
                    },
                    ssr: !1
                }),
                $ = new Set(["preview.table", "preview.audio-transcription-table", "preview.video-transcription-table", "preview.document-page-table", "preview.video-transcription"]);

            function H(e) {
                var t, r;
                return {
                    gridColumn: "".concat(e.col + 1, " / span ").concat(null !== (t = e.colspan) && void 0 !== t ? t : 1),
                    gridRow: "".concat(e.row + 1, " / span ").concat(null !== (r = e.rowspan) && void 0 !== r ? r : 1)
                }
            }

            function W(e, t, r) {
                return t <= 2 || 0 === e.length || !e.every(e => {
                    var t;
                    return (null === (t = r[e.ref]) || void 0 === t ? void 0 : t.object) === "preview.audio"
                }) ? {
                    cols: t,
                    data: e,
                    wrapped: !1
                } : {
                    cols: 2,
                    wrapped: !0,
                    data: [...e].sort((e, t) => e.row - t.row || e.col - t.col).map((e, t) => ({
                        ...e,
                        row: Math.floor(t / 2),
                        col: t % 2,
                        rowspan: void 0,
                        colspan: void 0
                    }))
                }
            }

            function V(e) {
                let {
                    stream: t,
                    className: r
                } = e, l = (0, n.useMemo)(() => (0, o.T)(t.annotations), [t.annotations]), a = (0, n.useMemo)(() => Object.values(t.records).some(e => $.has(e.object)), [t]), s = t.canvas.cols > 2, c = {
                    records: t.records,
                    annotationIndex: l,
                    showAnnotationTable: a
                }, d = W(t.canvas.data, t.canvas.cols, c.records);
                return 0 === t.canvas.data.length ? (0, i.jsx)(N.tN, {
                    className: r,
                    children: "Empty preview canvas"
                }) : (0, i.jsx)(A, {
                    children: (0, i.jsx)("div", {
                        className: (0, g.cn)("grid w-full gap-4", r),
                        style: {
                            gridTemplateColumns: "repeat(".concat(d.cols, ", minmax(0, 1fr))")
                        },
                        "data-preview-card-object": "preview.canvas",
                        "data-audio-layout": d.wrapped ? "wrapped" : void 0,
                        children: d.data.map(e => (0, i.jsx)("div", {
                            style: H(e),
                            children: (0, i.jsx)(U, {
                                ctx: c,
                                refId: e.ref,
                                compact: !1,
                                suppressTitle: !1,
                                mutedTitleBelow: s
                            })
                        }, e.ref))
                    })
                })
            }

            function U(e) {
                let {
                    ctx: t,
                    refId: r,
                    compact: n,
                    suppressTitle: l,
                    mutedTitleBelow: a
                } = e, s = t.records[r];
                return s ? "preview.image" === s.object ? (0, i.jsx)(en, {
                    ctx: t,
                    image: s,
                    compact: n,
                    suppressTitle: l,
                    mutedTitleBelow: a
                }) : "preview.document" === s.object ? (0, i.jsx)(el, {
                    ctx: t,
                    document: s,
                    compact: n,
                    suppressTitle: l,
                    mutedTitleBelow: a
                }) : "preview.grid" === s.object ? (0, i.jsx)(er, {
                    ctx: t,
                    grid: s,
                    mutedTitleBelow: a
                }) : "preview.video" === s.object ? (0, i.jsx)(L, {
                    records: t.records,
                    video: s,
                    compact: n,
                    suppressTitle: l,
                    mutedTitleBelow: a
                }) : "preview.video-timeline" === s.object ? (0, i.jsx)(F, {
                    timeline: s
                }) : "preview.audio" === s.object ? (0, i.jsx)(X, {
                    audio: s,
                    compact: n
                }) : "preview.recon" === s.object ? (0, i.jsx)(q, {
                    recon: s,
                    compact: n,
                    suppressTitle: l,
                    mutedTitleBelow: a
                }) : "preview.table" === s.object || "preview.audio-transcription-table" === s.object || "preview.video-transcription-table" === s.object || "preview.document-page-table" === s.object ? (0, i.jsx)(ee, {
                    ctx: t,
                    table: s
                }) : "preview.video-transcription" === s.object ? (0, i.jsx)(ee, {
                    ctx: t,
                    table: s.data
                }) : (0, i.jsx)(c.Gw, {
                    record: s,
                    records: t.records,
                    annotationIndex: t.annotationIndex,
                    compact: n,
                    suppressTitle: l,
                    mutedTitleBelow: a
                }) : null
            }
            let G = {
                    1: "MEDIA_ERR_ABORTED — fetch aborted by user",
                    2: "MEDIA_ERR_NETWORK — network error while fetching",
                    3: "MEDIA_ERR_DECODE — decoding error (codec/corruption)",
                    4: "MEDIA_ERR_SRC_NOT_SUPPORTED — src not found or format unsupported"
                },
                Y = {
                    0: "HAVE_NOTHING",
                    1: "HAVE_METADATA",
                    2: "HAVE_CURRENT_DATA",
                    3: "HAVE_FUTURE_DATA",
                    4: "HAVE_ENOUGH_DATA"
                },
                Q = {
                    0: "NETWORK_EMPTY",
                    1: "NETWORK_IDLE",
                    2: "NETWORK_LOADING",
                    3: "NETWORK_NO_SOURCE — browser found no usable src"
                };

            function K(e, t, r, n) {
                (function() {
                    try {
                        var e;
                        if ((null === (e = window.localStorage) || void 0 === e ? void 0 : e.getItem("debug:audio")) === "1" || "1" === new URLSearchParams(window.location.search).get("debugAudio")) return !0
                    } catch (e) {}
                    return !1
                })() && (void 0 === n ? console[e]("".concat(t, " ").concat(r)) : console[e]("".concat(t, " ").concat(r), n))
            }

            function X(e) {
                var t, r;
                let {
                    audio: l,
                    compact: a,
                    poster: s
                } = e, o = (0, n.useRef)(null), c = null !== (t = l.duration) && void 0 !== t ? t : 0, [u, m] = (0, n.useState)(c), [f, v] = (0, n.useState)(0), [h, b] = (0, n.useState)(!1), j = "[AudioBlock id=".concat(null !== (r = l.id) && void 0 !== r ? r : "?", "]");
                (0, n.useEffect)(() => {
                    K("log", j, "mount/src-change", {
                        id: l.id,
                        src: l.src,
                        title: l.title,
                        schemaDuration: l.duration
                    }), v(0), b(!1)
                }, [l.src]), (0, n.useEffect)(() => {
                    var e;
                    m(null !== (e = l.duration) && void 0 !== e ? e : 0)
                }, [l.duration]), (0, n.useEffect)(() => {
                    var e, t;
                    let r = o.current;
                    if (!r) {
                        K("warn", j, "audio element ref missing on mount");
                        return
                    }
                    K("log", j, "attaching listeners", {
                        currentSrc: r.currentSrc,
                        networkState: null !== (e = Q[r.networkState]) && void 0 !== e ? e : r.networkState,
                        readyState: null !== (t = Y[r.readyState]) && void 0 !== t ? t : r.readyState
                    });
                    let n = () => {
                            var e;
                            K("log", j, "loadedmetadata/durationchange", {
                                duration: r.duration,
                                readyState: null !== (e = Y[r.readyState]) && void 0 !== e ? e : r.readyState
                            }), Number.isFinite(r.duration) && r.duration > 0 && m(r.duration)
                        },
                        l = () => v(r.currentTime),
                        a = () => {
                            K("log", j, "play event fired"), b(!0)
                        },
                        i = () => {
                            K("log", j, "pause event fired"), b(!1)
                        },
                        s = () => {
                            K("log", j, "ended event fired"), b(!1)
                        },
                        c = () => {
                            var e, t;
                            let n = r.error;
                            K("error", j, "audio element error", {
                                code: null == n ? void 0 : n.code,
                                codeLabel: (null == n ? void 0 : n.code) ? G[n.code] : void 0,
                                message: null == n ? void 0 : n.message,
                                currentSrc: r.currentSrc,
                                networkState: null !== (e = Q[r.networkState]) && void 0 !== e ? e : r.networkState,
                                readyState: null !== (t = Y[r.readyState]) && void 0 !== t ? t : r.readyState
                            })
                        },
                        d = () => K("warn", j, "stalled — network failed to deliver data"),
                        u = () => K("log", j, "suspend", {
                            readyState: r.readyState
                        }),
                        f = () => K("warn", j, "abort"),
                        x = () => K("log", j, "loadstart", {
                            currentSrc: r.currentSrc
                        }),
                        p = () => K("log", j, "canplay"),
                        h = () => K("log", j, "canplaythrough"),
                        g = () => K("log", j, "waiting (buffering)");
                    return r.addEventListener("loadedmetadata", n), r.addEventListener("durationchange", n), r.addEventListener("timeupdate", l), r.addEventListener("play", a), r.addEventListener("pause", i), r.addEventListener("ended", s), r.addEventListener("error", c), r.addEventListener("stalled", d), r.addEventListener("suspend", u), r.addEventListener("abort", f), r.addEventListener("loadstart", x), r.addEventListener("canplay", p), r.addEventListener("canplaythrough", h), r.addEventListener("waiting", g), () => {
                        r.removeEventListener("loadedmetadata", n), r.removeEventListener("durationchange", n), r.removeEventListener("timeupdate", l), r.removeEventListener("play", a), r.removeEventListener("pause", i), r.removeEventListener("ended", s), r.removeEventListener("error", c), r.removeEventListener("stalled", d), r.removeEventListener("suspend", u), r.removeEventListener("abort", f), r.removeEventListener("loadstart", x), r.removeEventListener("canplay", p), r.removeEventListener("canplaythrough", h), r.removeEventListener("waiting", g)
                    }
                }, [l.src]);
                let w = (0, n.useCallback)(e => {
                        var t, r;
                        e.preventDefault(), e.stopPropagation();
                        let n = o.current;
                        K("log", j, "togglePlay clicked", {
                            hasElement: !!n,
                            paused: null == n ? void 0 : n.paused,
                            currentSrc: null == n ? void 0 : n.currentSrc,
                            networkState: n ? null !== (t = Q[n.networkState]) && void 0 !== t ? t : n.networkState : null,
                            readyState: n ? null !== (r = Y[n.readyState]) && void 0 !== r ? r : n.readyState : null,
                            error: (null == n ? void 0 : n.error) ? {
                                code: n.error.code,
                                label: G[n.error.code],
                                message: n.error.message
                            } : null
                        }), n && (n.paused ? (K("log", j, "calling el.play()"), n.play().then(() => K("log", j, "el.play() resolved — playback started")).catch(e => {
                            var t, r;
                            K("error", j, "el.play() REJECTED", {
                                name: e instanceof Error ? e.name : typeof e,
                                message: e instanceof Error ? e.message : String(e),
                                error: e,
                                mediaError: n.error ? {
                                    code: n.error.code,
                                    label: G[n.error.code],
                                    message: n.error.message
                                } : null,
                                currentSrc: n.currentSrc,
                                networkState: null !== (t = Q[n.networkState]) && void 0 !== t ? t : n.networkState,
                                readyState: null !== (r = Y[n.readyState]) && void 0 !== r ? r : n.readyState
                            }), b(!1)
                        })) : (K("log", j, "calling el.pause()"), n.pause()))
                    }, [j]),
                    y = (0, n.useCallback)(e => {
                        let t = o.current;
                        if (!t || t.readyState < 1) return;
                        let r = Number.isFinite(u) && u > 0 ? u : 1 / 0;
                        t.currentTime = Math.max(0, Math.min(r, t.currentTime + e))
                    }, [u]),
                    N = (0, n.useCallback)((e, t) => {
                        let r = o.current;
                        if (!r || !Number.isFinite(u) || u <= 0) return;
                        let n = Math.min(1, Math.max(0, (e - t.left) / t.width)) * u;
                        r.currentTime = n, v(n)
                    }, [u]),
                    _ = (0, n.useCallback)(e => {
                        if (0 !== e.button) return;
                        e.preventDefault();
                        let t = e.currentTarget,
                            r = t.getBoundingClientRect();
                        t.setPointerCapture(e.pointerId), N(e.clientX, r)
                    }, [N]),
                    k = (0, n.useCallback)(e => {
                        if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
                        let t = e.currentTarget.getBoundingClientRect();
                        N(e.clientX, t)
                    }, [N]),
                    S = (0, n.useCallback)(e => {
                        e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId)
                    }, []),
                    C = u > 0 ? Math.min(1, f / u) : 0;
                return (0, i.jsx)("div", {
                    className: (0, g.cn)("min-w-0", a && "min-w-[260px]"),
                    "data-preview-card-object": "preview.audio",
                    children: (0, i.jsxs)("div", {
                        className: "flex flex-col gap-2 rounded-2xl border border-border bg-card px-3 py-2.5 shadow-sm",
                        children: [(0, i.jsx)("audio", {
                            ref: o,
                            src: l.src,
                            preload: "metadata"
                        }), (0, i.jsxs)("div", {
                            className: "flex min-w-0 items-center gap-2.5",
                            children: [s ? (0, i.jsx)("img", {
                                src: s,
                                alt: "",
                                className: "size-8 shrink-0 rounded-lg object-cover"
                            }) : null, (0, i.jsx)("button", {
                                type: "button",
                                className: "shrink-0 rounded-md p-1 text-foreground hover:bg-muted",
                                "aria-label": h ? "Pause" : "Play",
                                onClick: w,
                                children: h ? (0, i.jsx)(x.Z, {
                                    className: "size-4"
                                }) : (0, i.jsx)(p.Z, {
                                    className: "ml-0.5 size-4"
                                })
                            }), l.title ? (0, i.jsx)("p", {
                                className: "min-w-0 flex-1 truncate text-xs font-medium text-foreground",
                                children: l.title
                            }) : null]
                        }), (0, i.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, i.jsx)("span", {
                                className: "font-mono text-[11px] tabular-nums text-muted-foreground",
                                children: (0, d.DQ)(f)
                            }), (0, i.jsx)("div", {
                                role: "slider",
                                tabIndex: 0,
                                "aria-label": "Audio progress",
                                "aria-valuenow": Math.round(100 * C),
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                className: "relative h-2 flex-1 cursor-pointer touch-none select-none rounded-full bg-muted",
                                onPointerDown: _,
                                onPointerMove: k,
                                onPointerUp: S,
                                onPointerCancel: S,
                                onKeyDown: e => {
                                    if ("ArrowLeft" === e.key && (e.preventDefault(), y(-1)), "ArrowRight" === e.key && (e.preventDefault(), y(1)), "Home" === e.key) {
                                        e.preventDefault();
                                        let t = o.current;
                                        t && t.readyState >= 1 && (t.currentTime = 0)
                                    }
                                    if ("End" === e.key) {
                                        e.preventDefault();
                                        let t = o.current;
                                        t && t.readyState >= 1 && Number.isFinite(u) && u > 0 && (t.currentTime = u)
                                    }
                                },
                                children: (0, i.jsx)("div", {
                                    className: "absolute left-0 top-0 h-full rounded-full bg-foreground/90",
                                    style: {
                                        width: "".concat(100 * C, "%")
                                    }
                                })
                            }), (0, i.jsx)("span", {
                                className: "font-mono text-[11px] tabular-nums text-muted-foreground",
                                children: (0, d.DQ)(u)
                            })]
                        })]
                    })
                })
            }

            function q(e) {
                var t;
                let {
                    recon: r,
                    compact: l,
                    suppressTitle: a,
                    mutedTitleBelow: s
                } = e, o = s && !!r.title, c = !a && !!r.title && !o, d = (0, Z.F8)(r.id, r.originalSrc, r.src), [u, m] = (0, n.useState)(!1), [f, x] = (0, n.useState)(!1), [p, b] = (0, n.useState)(O.o.lnScaleMin), [j, y] = (0, n.useState)(O.o.lnScaleMax), [S, C] = (0, n.useState)(O.o.flipSplat);
                return (0, i.jsxs)("div", {
                    className: (0, g.cn)("group/recon", l && "max-w-[280px]"),
                    "data-preview-card-object": "preview.recon",
                    children: [c ? (0, i.jsx)(_, {
                        title: r.title
                    }) : null, (0, i.jsxs)("div", {
                        className: "relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-black",
                        onDoubleClick: () => m(!0),
                        children: [(0, i.jsx)(B, {
                            url: r.src,
                            fileType: d,
                            className: "size-full rounded-none",
                            hideBuiltInControls: !0,
                            lnScaleMin: p,
                            lnScaleMax: j,
                            flipSplat: S,
                            onLnScaleMinChange: b,
                            onLnScaleMaxChange: y,
                            onFlipSplatChange: C
                        }), (0, i.jsxs)(w.J2, {
                            open: f,
                            onOpenChange: x,
                            children: [(0, i.jsx)(w.xo, {
                                asChild: !0,
                                children: (0, i.jsx)(N.t, {
                                    "aria-label": "3D reconstruction settings",
                                    className: (0, g.cn)("bottom-3 right-14 size-8 group-hover/recon:opacity-100", f && "opacity-100"),
                                    children: (0, i.jsx)(v.Z, {
                                        className: "size-3.5"
                                    })
                                })
                            }), (0, i.jsx)(w.yk, {
                                align: "end",
                                side: "top",
                                sideOffset: 8,
                                className: "w-60 p-3",
                                children: (0, i.jsx)(O.I, {
                                    lnScaleMin: p,
                                    lnScaleMax: j,
                                    flipSplat: S,
                                    onLnScaleMinChange: b,
                                    onLnScaleMaxChange: y,
                                    onFlipSplatChange: C
                                })
                            })]
                        }), (0, i.jsx)(N.t, {
                            "aria-label": "Expand 3D reconstruction",
                            onClick: () => m(!0),
                            className: "size-8 group-hover/recon:opacity-100",
                            children: (0, i.jsx)(h.Z, {
                                className: "size-3.5"
                            })
                        })]
                    }), (0, i.jsx)(J, {
                        open: u,
                        onOpenChange: m,
                        src: r.src,
                        fileType: d,
                        label: null !== (t = r.title) && void 0 !== t ? t : "Focused 3D reconstruction"
                    }), o ? (0, i.jsx)(k, {
                        title: r.title
                    }) : null]
                })
            }

            function J(e) {
                let {
                    open: t,
                    onOpenChange: r,
                    src: n,
                    fileType: l,
                    label: a
                } = e;
                return (0, i.jsx)(P.HX, {
                    open: t,
                    onOpenChange: r,
                    label: a,
                    description: "Focused 3D reconstruction. Drag to orbit, scroll to zoom. Press escape to return.",
                    sized: !0,
                    children: (0, i.jsx)("div", {
                        className: "aspect-video max-h-[90vh] w-full overflow-hidden rounded-lg bg-black",
                        children: t ? (0, i.jsx)(B, {
                            url: n,
                            fileType: l,
                            className: "size-full rounded-none",
                            hideBuiltInControls: !0
                        }) : null
                    })
                })
            }

            function ee(e) {
                let {
                    ctx: t,
                    table: r
                } = e, n = function(e) {
                    let t = e.replace("preview.", "").replaceAll("-", " ");
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }(r.object);
                return (0, i.jsxs)("div", {
                    className: "flex min-h-0 flex-col overflow-hidden text-card-foreground",
                    "data-preview-card-object": r.object,
                    children: [(0, i.jsx)("div", {
                        className: "flex shrink-0 items-center justify-between gap-2 py-2",
                        children: (0, i.jsx)("h4", {
                            className: "text-sm font-semibold",
                            children: n
                        })
                    }), (0, i.jsx)("div", {
                        className: "min-h-0 overflow-hidden rounded-xl border border-border bg-card shadow-none",
                        children: (0, i.jsxs)(y.iA, {
                            children: [r.columns.length > 0 ? (0, i.jsx)(y.xD, {
                                children: (0, i.jsx)(y.SC, {
                                    children: r.columns.map(e => (0, i.jsx)(y.ss, {
                                        className: "px-4 text-xs normal-case text-foreground",
                                        children: e
                                    }, e))
                                })
                            }) : null, (0, i.jsx)(y.RM, {
                                children: r.data.map((e, n) => (0, i.jsx)(y.SC, {
                                    children: e.data.map((e, l) => (0, i.jsx)(y.pj, {
                                        className: "px-4 py-3 align-top",
                                        children: (0, i.jsx)(et, {
                                            ctx: t,
                                            cell: e
                                        })
                                    }, "".concat(r.id, "-row-").concat(n, "-cell-").concat(l)))
                                }, "".concat(r.id, "-row-").concat(n)))
                            })]
                        })
                    })]
                })
            }

            function et(e) {
                let {
                    ctx: t,
                    cell: r
                } = e;
                return null == r ? null : "string" == typeof r ? /^(blk_|cel_|grid_)/.test(r) ? (0, i.jsx)(U, {
                    ctx: t,
                    refId: r,
                    compact: !0,
                    suppressTitle: !0,
                    mutedTitleBelow: !1
                }) : (0, i.jsx)("span", {
                    className: "text-sm leading-relaxed text-foreground",
                    children: r
                }) : "number" == typeof r || "boolean" == typeof r ? (0, i.jsx)("span", {
                    className: "text-sm leading-relaxed text-foreground",
                    children: String(r)
                }) : (0, i.jsx)(U, {
                    ctx: t,
                    refId: r.ref,
                    compact: !0,
                    suppressTitle: !0,
                    mutedTitleBelow: !1
                })
            }

            function er(e) {
                let {
                    ctx: t,
                    grid: r,
                    mutedTitleBelow: n
                } = e, l = W(r.data, r.cols, t.records);
                return 0 === r.data.length ? (0, i.jsx)(N.tN, {
                    children: "Empty preview grid"
                }) : (0, i.jsxs)("div", {
                    className: "flex min-h-0 flex-col overflow-hidden text-card-foreground",
                    "data-preview-card-object": "preview.grid",
                    children: [(0, i.jsx)("div", {
                        className: "flex shrink-0 items-center justify-between gap-2 py-2",
                        children: (0, i.jsx)("h4", {
                            className: "text-sm font-semibold",
                            children: "Grid"
                        })
                    }), (0, i.jsx)("div", {
                        className: "grid gap-3",
                        style: {
                            gridTemplateColumns: "repeat(".concat(l.cols, ", minmax(0, 1fr))")
                        },
                        "data-audio-layout": l.wrapped ? "wrapped" : void 0,
                        children: l.data.map(e => (0, i.jsx)("div", {
                            style: H(e),
                            children: (0, i.jsx)(U, {
                                ctx: t,
                                refId: e.ref,
                                compact: !0,
                                suppressTitle: !0,
                                mutedTitleBelow: n || r.cols > 2
                            })
                        }, e.ref))
                    })]
                })
            }

            function en(e) {
                var t, r, l, a, s;
                let {
                    ctx: o,
                    image: c,
                    compact: d,
                    suppressTitle: f,
                    mutedTitleBelow: x
                } = e, p = o.annotationIndex.images.get(c.id), v = x && !!c.title, h = !f && !!c.title && !v, [w, y] = (0, n.useState)(!1), [N, S] = (0, n.useState)(null), [C, E] = (0, n.useState)(null), [T, R] = (0, n.useState)(null), [A, I] = (0, n.useState)(null), [z, M] = (0, n.useState)(null), D = N === c.src, F = C === c.src, L = (null == T ? void 0 : T.src) === c.src ? T.ratio : void 0, O = (null == A ? void 0 : A.src) === c.src ? A.id : null, Z = (null == z ? void 0 : z.src) === c.src ? z.ids : [], B = o.showAnnotationTable && null !== (r = null == p ? void 0 : p.annotations) && void 0 !== r ? r : [], $ = null == p ? void 0 : null === (t = p.spatialOverlaySvgInner) || void 0 === t ? void 0 : t.trim(), H = (0, n.useCallback)(e => {
                    I({
                        src: c.src,
                        id: e
                    })
                }, [c.src]), W = (0, n.useCallback)(e => {
                    M(t => {
                        let r = (null == t ? void 0 : t.src) === c.src ? t.ids : [];
                        return {
                            src: c.src,
                            ids: r.includes(e) ? r.filter(t => t !== e) : [...r, e]
                        }
                    })
                }, [c.src]), V = (0, n.useCallback)(e => {
                    let t = e.currentTarget;
                    if (S(c.src), E(e => e === c.src ? null : e), t.naturalWidth > 0 && t.naturalHeight > 0) {
                        let e = t.naturalWidth / t.naturalHeight;
                        R({
                            src: c.src,
                            ratio: e
                        })
                    }
                }, [c.src]), U = (0, b.R)(c.src, V);
                return (0, i.jsxs)("div", {
                    className: d ? "max-w-[280px]" : void 0,
                    children: [h ? (0, i.jsx)(_, {
                        title: c.title
                    }) : null, (0, i.jsxs)("div", {
                        className: "flex flex-col gap-3",
                        children: [(0, i.jsxs)("button", {
                            type: "button",
                            "data-preview-card-object": "preview.image",
                            className: (0, g.cn)("relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border text-left focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", null == L && "aspect-video bg-muted"),
                            style: null != L ? {
                                aspectRatio: L
                            } : void 0,
                            "aria-label": "Open ".concat(null !== (l = c.title) && void 0 !== l ? l : "image"),
                            onClick: () => y(!0),
                            children: [D || F ? null : (0, i.jsx)(j.d, {
                                kind: "image",
                                rounded: "xl",
                                className: "absolute inset-0 border-0",
                                pathSeed: c.src
                            }), F ? null : (0, i.jsx)("img", {
                                ref: U,
                                src: c.src,
                                alt: null !== (a = c.title) && void 0 !== a ? a : "Image",
                                loading: "lazy",
                                className: (0, g.cn)("block size-full object-cover", !D && "invisible"),
                                onLoad: V,
                                onError: () => {
                                    S(c.src), E(c.src)
                                }
                            }), $ && (D || F) ? (0, i.jsx)(u.t, {
                                svgInnerMarkup: $,
                                selectedAnnotationId: O,
                                onAnnotationClick: H
                            }) : null]
                        }), B.length > 0 ? (0, i.jsx)(m.D, {
                            annotations: B,
                            selectedAnnotationId: O,
                            onAnnotationSelect: H,
                            hiddenAnnotationIds: Z,
                            onAnnotationVisibilityToggle: W
                        }) : null]
                    }), (0, i.jsx)(P.xW, {
                        open: w,
                        onOpenChange: y,
                        src: c.src,
                        label: null !== (s = c.title) && void 0 !== s ? s : "Focused image",
                        spatialOverlaySvgInner: $,
                        selectedAnnotationId: O,
                        onAnnotationClick: H
                    }), v ? (0, i.jsx)(k, {
                        title: c.title
                    }) : null]
                })
            }

            function el(e) {
                var t, r, n;
                let {
                    ctx: l,
                    document: a,
                    compact: s,
                    suppressTitle: o,
                    mutedTitleBelow: c
                } = e, d = l.annotationIndex.documents.get(a.id), u = null == d ? void 0 : d.spatialOverlaySvgInner, m = function(e, t) {
                    if (!(null == e ? void 0 : e.length) || !t) return;
                    let r = new Map(e.filter(e => null != e.page).map(e => [e.id, e.page])),
                        n = t.split(/(?=<g\b)/g),
                        l = {};
                    for (let e of n) {
                        var a, i;
                        let t = null === (a = e.match(/data-annotation-id=["']([^"']+)["']/)) || void 0 === a ? void 0 : a[1],
                            n = t ? r.get(t) : void 0;
                        null != n && (l[n] = [...null !== (i = l[n]) && void 0 !== i ? i : [], e.trim()])
                    }
                    let s = Object.fromEntries(Object.entries(l).map(e => {
                        let [t, r] = e;
                        return [Number(t), r.join("\n")]
                    }));
                    return Object.keys(s).length > 0 ? s : void 0
                }(null == d ? void 0 : d.annotations, u), x = null !== (r = null == d ? void 0 : null === (t = d.annotations.find(e => null != e.page)) || void 0 === t ? void 0 : t.page) && void 0 !== r ? r : null, p = c && !!a.title;
                return (0, i.jsxs)("div", {
                    className: (0, g.cn)("min-w-0", s && "min-w-[280px] [&>div>div]:!h-full [&>div]:aspect-[5/7]"),
                    "data-preview-card-object": "preview.document",
                    children: [o || p ? null : (0, i.jsx)(_, {
                        title: a.title
                    }), (0, i.jsx)(f.DocumentViewport, {
                        src: a.src,
                        pageCount: null !== (n = a.npages) && void 0 !== n ? n : void 0,
                        fileType: "PDF",
                        spatialOverlaySvgInner: u,
                        spatialOverlaySvgByPage: m,
                        focusedPageIndex: x
                    }), p ? (0, i.jsx)(k, {
                        title: a.title
                    }) : null]
                })
            }
            var ea = r(12062);

            function ei(e) {
                let {
                    stream: t,
                    sessionId: r,
                    className: i
                } = e, s = n.useMemo(() => (function(e, t) {
                    if (!t || !e || "object" != typeof e || !e.records) return e;
                    let r = {};
                    for (let [n, i] of Object.entries(e.records))
                        if (i && "object" == typeof i && "src" in i) {
                            let e = i.src;
                            r[n] = {
                                ...i,
                                originalSrc: e,
                                src: "string" == typeof e && (l.kW.test(e) || e.startsWith("cel_")) ? (0, a.pC)(t, e) : e
                            }
                        } else r[n] = i;
                    return {
                        ...e,
                        records: r
                    }
                })(t, r), [t, r]);
                return n.createElement(V, {
                    stream: s,
                    className: i
                })
            }
        },
        58: function(e, t, r) {
            r.d(t, {
                bs: function() {
                    return o
                },
                t: function() {
                    return i
                },
                tN: function() {
                    return c
                },
                uR: function() {
                    return s
                }
            });
            var n = r(57437),
                l = r(2265),
                a = r(94508);
            let i = (0, l.forwardRef)(function(e, t) {
                    let {
                        className: r,
                        children: l,
                        ...i
                    } = e;
                    return (0, n.jsx)("button", {
                        ref: t,
                        type: "button",
                        className: (0, a.cn)("absolute bottom-3 right-3 inline-flex size-10 items-center justify-center rounded-full bg-black/70 text-white opacity-0 shadow-sm transition-opacity duration-150 hover:bg-black/80 focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-white/60", r),
                        ...i,
                        children: l
                    })
                }),
                s = "z-[10001] w-auto max-w-[96vw] gap-0 overflow-hidden border-0 bg-transparent p-0 text-white shadow-none",
                o = "z-[10001] w-[min(96vw,1200px)] max-w-[1200px] gap-0 overflow-hidden border-0 bg-transparent p-0 text-white shadow-none";

            function c(e) {
                let {
                    children: t,
                    className: r
                } = e;
                return (0, n.jsx)("div", {
                    className: (0, a.cn)("rounded-xl border border-dashed border-border py-8 text-center text-sm text-muted-foreground", r),
                    children: t
                })
            }
        },
        95465: function(e, t, r) {
            r.d(t, {
                HX: function() {
                    return o
                },
                d1: function() {
                    return d
                },
                xW: function() {
                    return c
                }
            });
            var n = r(57437),
                l = r(94508),
                a = r(26110),
                i = r(58),
                s = r(99621);

            function o(e) {
                let {
                    open: t,
                    onOpenChange: r,
                    label: s,
                    description: o,
                    sized: c = !1,
                    contentProps: d,
                    children: u
                } = e, {
                    className: m,
                    ...f
                } = null != d ? d : {};
                return (0, n.jsx)(a.Vq, {
                    open: t,
                    onOpenChange: r,
                    children: (0, n.jsxs)(a.cZ, {
                        className: (0, l.cn)(c ? i.bs : i.uR, m),
                        hideCloseButton: !0,
                        ...f,
                        children: [(0, n.jsx)(a.$N, {
                            className: "sr-only",
                            children: s
                        }), (0, n.jsx)(a.Be, {
                            className: "sr-only",
                            children: o
                        }), u]
                    })
                })
            }

            function c(e) {
                let {
                    open: t,
                    onOpenChange: r,
                    src: l,
                    label: a,
                    contentProps: i,
                    imageClassName: c,
                    spatialOverlaySvgInner: d,
                    selectedAnnotationId: u,
                    onAnnotationClick: m
                } = e, f = null == d ? void 0 : d.trim();
                return (0, n.jsx)(o, {
                    open: t,
                    onOpenChange: r,
                    label: a,
                    description: "Focused image preview. Press escape or click outside to return.",
                    contentProps: i,
                    children: (0, n.jsxs)("div", {
                        className: "relative inline-block",
                        children: [(0, n.jsx)("img", {
                            src: l,
                            alt: a,
                            className: null != c ? c : "block h-auto max-h-[80vh] w-auto max-w-[85vw] rounded-lg object-contain"
                        }), f ? (0, n.jsx)(s.U, {
                            svgInnerMarkup: f,
                            selectedAnnotationId: u,
                            onAnnotationClick: m
                        }) : null]
                    })
                })
            }

            function d(e) {
                let {
                    open: t,
                    onOpenChange: r,
                    src: l,
                    label: a,
                    contentProps: i,
                    videoClassName: s
                } = e;
                return (0, n.jsx)(o, {
                    open: t,
                    onOpenChange: r,
                    label: a,
                    description: "Focused video preview. Press escape or click outside to return.",
                    contentProps: i,
                    children: (0, n.jsx)("video", {
                        src: l,
                        "aria-label": a,
                        controls: !0,
                        autoPlay: !0,
                        playsInline: !0,
                        className: null != s ? s : "".concat("block h-auto max-h-[90vh] w-auto max-w-[96vw] rounded-lg object-contain", " bg-black")
                    })
                })
            }
        },
        19060: function(e, t, r) {
            r.d(t, {
                X: function() {
                    return o
                }
            });
            var n = r(57437),
                l = r(2265),
                a = r(9270),
                i = r(20653),
                s = r(94508);
            let o = l.forwardRef((e, t) => {
                let {
                    className: r,
                    ...l
                } = e;
                return (0, n.jsx)(a.fC, {
                    ref: t,
                    className: (0, s.cn)("peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", r),
                    ...l,
                    children: (0, n.jsx)(a.z$, {
                        className: (0, s.cn)("flex items-center justify-center text-current"),
                        children: (0, n.jsx)(i.nQG, {
                            className: "size-4"
                        })
                    })
                })
            });
            o.displayName = a.fC.displayName
        },
        74928: function(e, t, r) {
            r.d(t, {
                Fw: function() {
                    return i
                },
                wy: function() {
                    return a
                },
                zF: function() {
                    return l
                }
            });
            var n = r(962);
            let l = n.fC,
                a = n.wy,
                i = n.Fw
        },
        62080: function(e, t, r) {
            r.d(t, {
                R: function() {
                    return l
                }
            });
            var n = r(81159);

            function l(e, t) {
                return (0, n.$2)(e, t, n.v5)
            }
        },
        81159: function(e, t, r) {
            r.d(t, {
                $2: function() {
                    return l
                },
                C$: function() {
                    return i
                },
                Ig: function() {
                    return s
                },
                v5: function() {
                    return a
                }
            });
            var n = r(2265);

            function l(e, t, r) {
                let l = (0, n.useRef)(t);
                l.current = t;
                let a = (0, n.useRef)(r);
                a.current = r;
                let i = (0, n.useRef)(null),
                    s = (0, n.useRef)(null),
                    o = (0, n.useCallback)((e, t) => {
                        if (!e || !a.current(e)) return;
                        let r = s.current;
                        r && r.node === e && r.src === t || (s.current = {
                            node: e,
                            src: t
                        }, l.current({
                            currentTarget: e,
                            target: e
                        }))
                    }, []);
                return (0, n.useEffect)(() => {
                    o(i.current, e)
                }, [e, o]), (0, n.useCallback)(t => {
                    i.current = t, o(t, e)
                }, [e, o])
            }
            let a = e => e.complete && e.naturalWidth > 0,
                i = e => e.readyState >= HTMLMediaElement.HAVE_METADATA,
                s = e => e.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA
        }
    }
]);