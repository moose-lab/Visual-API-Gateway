try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d63495c2-b799-4ed5-9ad4-4322dee024cf", e._sentryDebugIdIdentifier = "sentry-dbid-d63495c2-b799-4ed5-9ad4-4322dee024cf")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [56254], {
        56254: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return ex
                },
                Z: function() {
                    return eh
                }
            });
            var r = n(57437),
                s = n(2265),
                a = n(5307);
            let l = /\b(img|vid|aud|doc|url|recon|arr)_([a-f0-9]{6})\b/gi;
            var i = n(55105),
                o = n(49842),
                d = n(30401),
                c = n(78867),
                u = n(92451),
                f = n(99397),
                m = n(32883),
                x = n(55909),
                h = n(92934),
                p = n(48736),
                g = n(56272),
                v = n(92735),
                b = n(51817),
                j = n(14438),
                y = n(12019),
                N = n(94508),
                w = n(63585),
                k = n(62869),
                C = n(26110),
                _ = n(84190),
                z = n(81103),
                E = n(46878),
                Z = n(14918),
                A = n(34909),
                S = n(40656),
                U = n(74846),
                F = n(8014),
                M = n(78708),
                D = n(83794),
                I = n(7776),
                R = n(29020);
            let T = (e, t) => {
                    if (!e || !t || "root" === t) return e;
                    let n = t.replace(/\[(\d+)\]/g, ".$1").split("."),
                        r = e;
                    for (let e = 1; e < n.length; e++) {
                        let t = n[e];
                        if (null == r) return;
                        r = r[t]
                    }
                    return r
                },
                L = e => {
                    if ("string" != typeof e) return null;
                    let t = e.trim();
                    return /^https?:\/\//.test(t) || t.startsWith("gs://") || t.startsWith("data:") ? t : null
                },
                B = e => {
                    if (!e) return !1;
                    if (/^data:audio\//i.test(e)) return !0;
                    let t = e.split("?")[0];
                    return /\.(mp3|wav|ogg|m4a|aac|flac|opus)$/i.test(t)
                },
                O = e => {
                    if (!e) return !1;
                    if (/^data:video\//i.test(e)) return !0;
                    let t = e.split("?")[0];
                    return /\.(mp4|webm|mov|mkv|avi|m3u8)$/i.test(t)
                },
                q = (e, t, n, r, s) => {
                    let a = e.left + e.width / 2,
                        l = e.top - n - 8,
                        i = e.bottom + 8;
                    return {
                        x: Math.max(16, Math.min(r - t - 16, a - t / 2)),
                        y: l >= 16 ? l : i + n <= s - 16 ? i : Math.max(16, Math.min(s - n - 16, e.top + (e.height - n) / 2))
                    }
                };
            var V = n(98335),
                P = n(39481);

            function W(e) {
                let {
                    references: t,
                    sessionId: n,
                    executionId: a,
                    responseUrl: l = ""
                } = e, [i, o] = (0, s.useState)({}), {
                    artifacts: d,
                    isLoading: c
                } = function(e) {
                    let {
                        references: t,
                        sessionId: n,
                        executionId: r,
                        enabled: a = !0
                    } = e, [l, i] = (0, s.useState)(new Map), o = (0, s.useCallback)(async (e, t) => {
                        if (!n && !r) {
                            console.warn("No sessionId or executionId provided for artifact fetch");
                            return
                        }
                        i(n => {
                            let r = new Map(n);
                            return r.set(e, {
                                objectId: e,
                                type: t,
                                data: null,
                                error: null,
                                isLoading: !0
                            }), r
                        });
                        try {
                            let s;
                            let a = localStorage.getItem("access_token") || "";
                            if (!a) throw Error("Access token not found");
                            let l = new URL("".concat("https://agent.vlm.run/v1", "/artifacts"));
                            l.searchParams.set("object_id", e), n ? l.searchParams.set("session_id", n) : r && l.searchParams.set("execution_id", r);
                            let o = await fetch(l.toString(), {
                                method: "GET",
                                headers: {
                                    Authorization: "Bearer ".concat(a)
                                },
                                signal: AbortSignal.timeout(12e4)
                            });
                            if (!o.ok) throw Error("Failed to fetch artifact: ".concat(o.status, " ").concat(o.statusText));
                            if ("url" === t) s = await o.text();
                            else {
                                let e = await o.blob();
                                s = URL.createObjectURL(e)
                            }
                            i(n => {
                                let r = new Map(n);
                                return r.set(e, {
                                    objectId: e,
                                    type: t,
                                    data: s,
                                    error: null,
                                    isLoading: !1
                                }), r
                            })
                        } catch (n) {
                            console.error("Failed to fetch artifact ".concat(e, ":"), n), i(r => {
                                let s = new Map(r);
                                return s.set(e, {
                                    objectId: e,
                                    type: t,
                                    data: null,
                                    error: n.message || "Failed to fetch artifact",
                                    isLoading: !1
                                }), s
                            })
                        }
                    }, [n, r]);
                    return (0, s.useEffect)(() => {
                        if (!a || 0 === t.length) return;
                        let e = new Map;
                        return t.forEach(t => {
                            e.has(t.objectId) || e.set(t.objectId, t)
                        }), e.forEach(e => {
                            o(e.objectId, e.type)
                        }), () => {
                            l.forEach(e => {
                                e.data && e.data.startsWith("blob:") && URL.revokeObjectURL(e.data)
                            })
                        }
                    }, [t, a, n, r]), {
                        artifacts: l,
                        isLoading: Array.from(l.values()).some(e => e.isLoading),
                        hasErrors: Array.from(l.values()).some(e => null !== e.error)
                    }
                }({
                    references: t,
                    sessionId: n,
                    executionId: a,
                    enabled: !0
                }), u = (0, s.useCallback)(e => {
                    o(t => ({
                        ...t,
                        [e]: !0
                    }))
                }, []);
                return 0 === (0, s.useMemo)(() => t.length, [t]) ? null : (0, r.jsx)("div", {
                    className: "space-y-5",
                    children: t.map((e, t) => {
                        var n;
                        let s = d.get(e.objectId),
                            a = i[e.objectId] || (null == s ? void 0 : s.error);
                        return (0, r.jsx)("div", {
                            className: "overflow-hidden rounded-[10px] border border-border/60",
                            children: c && !s ? (0, r.jsx)("div", {
                                className: "h-64 w-full",
                                children: (0, r.jsx)(P.d, {
                                    kind: "img" === e.type ? "image" : "vid" === e.type ? "video" : "aud" === e.type ? "audio" : "document",
                                    rounded: "md",
                                    className: "border-0"
                                })
                            }) : a ? (0, r.jsx)("div", {
                                className: "flex justify-center p-4",
                                children: (0, r.jsx)(Z.d, {
                                    kind: "img" === e.type ? "image" : "vid" === e.type ? "video" : "aud" === e.type ? "audio" : "doc",
                                    className: "m-4",
                                    downloadUrl: null !== (n = null == s ? void 0 : s.data) && void 0 !== n ? n : void 0
                                })
                            }) : (null == s ? void 0 : s.data) ? (0, r.jsx)(K, {
                                type: e.type,
                                data: s.data,
                                objectId: e.objectId,
                                responseUrl: l,
                                onError: () => u(e.objectId)
                            }) : null
                        }, "".concat(e.objectId, "-").concat(t))
                    })
                })
            }

            function K(e) {
                let {
                    type: t,
                    data: n,
                    objectId: a,
                    responseUrl: l,
                    onError: i
                } = e, [o, d] = (0, s.useState)(!1), c = (0, s.useCallback)(() => {
                    d(!0), i()
                }, [i]);
                return o ? (0, r.jsx)("div", {
                    className: "flex justify-center p-4",
                    children: (0, r.jsx)(Z.d, {
                        kind: "img" === t ? "image" : "vid" === t ? "video" : "aud" === t ? "audio" : "doc",
                        className: "m-4",
                        downloadUrl: n
                    })
                }) : "img" === t ? (0, F.U)(n) ? (0, r.jsx)("div", {
                    className: "flex items-center justify-center overflow-hidden",
                    children: (0, r.jsx)(F.Z, {
                        tiffUrl: n,
                        alt: a,
                        className: "max-h-[620px] w-full object-contain",
                        onError: c
                    })
                }) : (0, r.jsx)("div", {
                    className: "flex items-center justify-center overflow-hidden",
                    children: (0, r.jsx)("img", {
                        src: n,
                        alt: a,
                        className: "max-h-[620px] w-full object-contain",
                        onError: c
                    })
                }) : "vid" === t ? (0, r.jsx)(M.default, {
                    videoUrl: n,
                    responseUrl: l,
                    showBoundingBoxes: !1,
                    onError: c
                }) : "aud" === t ? (0, r.jsx)("div", {
                    className: "p-3",
                    children: (0, r.jsx)(A.default, {
                        audioUrl: n,
                        responseUrl: l,
                        onError: c
                    })
                }) : "doc" === t ? (0, r.jsx)("div", {
                    className: "h-[620px]",
                    children: (0, r.jsx)(U.default, {
                        pdfUrl: n,
                        responseUrl: l,
                        showBoundingBoxes: !1,
                        onError: c
                    })
                }) : "url" === t ? (0, r.jsx)("div", {
                    className: "p-4",
                    children: (0, r.jsxs)("a", {
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center gap-2 text-sm text-primary hover:underline",
                        children: [(0, r.jsx)(V.Z, {
                            className: "size-4"
                        }), n]
                    })
                }) : (0, r.jsxs)("div", {
                    className: "p-4 text-sm text-muted-foreground",
                    children: ["Preview not available for type: ", t]
                })
            }
            var $ = n(34487),
                J = n(45241),
                Q = n(20770);
            let X = ["documents", "document", "attachments", "attachment", "files", "file", "media", "media_items", "mediaItems", "resources", "resource", "artifacts", "items", "images", "image", "pdfs", "urls", "links", "content", "data", "results", "outputs", "pages", "previews", "messages", "steps", "frames"],
                Y = ["signed_url", "signedUrl", "signed_uri", "signedUri", "url", "uri", "file_url", "fileUrl", "file_uri", "fileUri", "download_url", "downloadUrl", "gcs_uri", "gcsUri", "public_url", "publicUrl", "preview_url", "previewUrl", "image_url", "imageUrl", "video_url", "videoUrl", "audio_url", "audioUrl", "source_url", "sourceUrl"],
                H = ["name", "title", "filename", "file_name", "fileName", "display_name", "displayName", "label", "id"],
                G = ["type", "content_type", "contentType", "mime_type", "mimeType", "mimetype", "format", "kind", "media_type", "mediaType"],
                ee = ["file", "document", "resource", "asset", "source", "data", "value", "payload", "metadata", "image", "image_url", "imageUrl", "video", "video_url", "videoUrl", "audio", "audio_url", "audioUrl", "media", "mediaItem", "mediaItems", "content"],
                et = e => "string" == typeof e && /^(https?:\/\/|data:|gs:\/\/)/i.test(e),
                en = e => e.endsWith("ies") ? "".concat(e.slice(0, -3), "y") : e.endsWith("s") && e.length > 3 ? e.slice(0, -1) : e,
                er = e => {
                    if (!e) return "Attachment";
                    let t = en(e.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_\-]+/g, " ").trim().toLowerCase());
                    return t ? t.split(" ").filter(Boolean).map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ") : "Attachment"
                },
                es = (e, t) => {
                    if (e && "object" == typeof e)
                        for (let n of t) {
                            let t = e[n];
                            if ("string" == typeof t && t.trim().length > 0) return t.trim()
                        }
                },
                ea = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if (t > 6 || null == e) return null;
                    if ("string" == typeof e) return et(e) ? e : null;
                    if (Array.isArray(e)) {
                        for (let n of e) {
                            let e = ea(n, t + 1);
                            if (e) return e
                        }
                        return null
                    }
                    if ("object" != typeof e) return null;
                    for (let t of Y) {
                        let n = e[t];
                        if ("string" == typeof n && et(n)) return n
                    }
                    for (let n of ee) {
                        let r = ea(e[n], t + 1);
                        if (r) return r
                    }
                    for (let t of Object.values(e))
                        if ("string" == typeof t && et(t)) return t;
                    return null
                },
                el = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if (t > 6 || null == e || "object" != typeof e) return;
                    let n = es(e, H);
                    if (n) return n;
                    for (let n of ee) {
                        let r = el(e[n], t + 1);
                        if (r) return r
                    }
                },
                ei = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if (t > 6 || null == e || "object" != typeof e) return;
                    let n = es(e, G);
                    if (n) return n;
                    for (let n of ee) {
                        let r = ei(e[n], t + 1);
                        if (r) return r
                    }
                },
                eo = e => {
                    if (null == e) return [];
                    if (Array.isArray(e)) return e;
                    if ("object" == typeof e) {
                        if (Array.isArray(e.items)) return e.items;
                        if (Array.isArray(e.data)) return e.data;
                        if (Array.isArray(e.values)) return e.values;
                        if (Array.isArray(e.documents)) return e.documents;
                        if (Array.isArray(e.files)) return e.files
                    }
                    return [e]
                },
                ed = e => {
                    if (!e || "object" != typeof e) return [];
                    let t = [],
                        n = new Set,
                        r = (e, r) => {
                            if ("string" != typeof e.file_id || !e.file_id || n.has(e.file_id)) return;
                            n.add(e.file_id);
                            let s = r ? er(r) : void 0;
                            t.push({
                                file_id: e.file_id,
                                type: "string" == typeof e.type ? e.type : void 0,
                                label: "string" == typeof e.label && e.label || "string" == typeof e.filename && e.filename || "string" == typeof e.file_name && e.file_name || "string" == typeof e.name && e.name || s || "File ".concat(t.length + 1)
                            })
                        },
                        s = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = arguments.length > 2 ? arguments[2] : void 0;
                            if (!(t > 6) && null != e) {
                                if (Array.isArray(e)) {
                                    e.forEach((e, r) => s(e, t + 1, n));
                                    return
                                }
                                if ("object" == typeof e)
                                    for (let [a, l] of(r(e, n), Object.entries(e))) "file_id" !== a && l && "object" == typeof l && s(l, t + 1, a)
                            }
                        };
                    return s(e), t
                },
                ec = e => {
                    if (!e) return [];
                    let t = [],
                        n = new Set,
                        r = (e, r, s) => {
                            let a = ea(e);
                            if (!a || n.has(a)) return;
                            let l = el(e),
                                i = l || er(r),
                                o = i;
                            l || "number" != typeof s || (o = "".concat(i, " ").concat(s + 1)), o = o.trim() || "Attachment", t.push({
                                url: a,
                                label: o,
                                typeHint: ei(e)
                            }), n.add(a)
                        },
                        s = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            if (!(t > 5) && null != e) {
                                if (Array.isArray(e)) {
                                    e.forEach((e, n) => {
                                        r(e, "Attachment", n), s(e, t + 1)
                                    });
                                    return
                                }
                                "object" == typeof e && X.forEach(n => {
                                    let a = e[n];
                                    if (null == a) return;
                                    let l = eo(a),
                                        i = er(n);
                                    l.forEach((e, t) => r(e, i, t)), s(a, t + 1)
                                })
                            }
                        };
                    if (s(e), !t.length) {
                        let t = function(e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Attachment",
                                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            if (!(s > 5) && null != e) {
                                if ("string" == typeof e) {
                                    r(e, n);
                                    return
                                }
                                if (Array.isArray(e)) {
                                    e.forEach(e => t(e, n, s + 1));
                                    return
                                }
                                if ("object" == typeof e)
                                    for (let [n, a] of Object.entries(e)) "string" == typeof a && et(a) ? r({
                                        [n]: a
                                    }, n) : a && "object" == typeof a && t(a, n, s + 1)
                            }
                        };
                        t(e)
                    }
                    return t
                },
                eu = (e, t) => {
                    if (!e) return {
                        isImage: !1,
                        isVideo: !1,
                        isAudio: !1,
                        isPdf: !0
                    };
                    let n = e.split("?")[0],
                        r = null == t ? void 0 : t.toLowerCase(),
                        s = "image" === r || (null == r ? void 0 : r.includes("image/")) || /\.(jpg|jpeg|png|gif|webp|svg|tiff|tif)$/i.test(n) || /^data:image\//.test(e),
                        a = "video" === r || (null == r ? void 0 : r.includes("video/")) || /\.(mp4|webm|ogg|mov|avi|wmv|flv|mkv)$/i.test(n) || /^data:video\//.test(e),
                        l = "audio" === r || (null == r ? void 0 : r.includes("audio/")) || /\.(mp3|wav|ogg|aac|flac|m4a|wma)$/i.test(n) || /^data:audio\//.test(e);
                    return {
                        isImage: s,
                        isVideo: a,
                        isAudio: l,
                        isPdf: !(s || a || l)
                    }
                },
                ef = e => {
                    try {
                        return JSON.stringify(e)
                    } catch (e) {
                        return "__UNSERIALIZABLE__"
                    }
                };
            async function em(e, t) {
                try {
                    if (!e) {
                        j.Am.error("No response data available");
                        return
                    }
                    await (0, y.j)(e, "response-".concat(t.slice(0, 8), ".json")), j.Am.success("Downloaded JSON response")
                } catch (e) {
                    j.Am.error("Failed to download response data")
                }
            }

            function ex(e) {
                let {
                    id: t
                } = e, [n, a] = (0, s.useState)(null), l = async () => {
                    try {
                        await navigator.clipboard.writeText(t), a("copied"), window.setTimeout(() => a(null), 1500)
                    } catch (e) {
                        a("error"), window.setTimeout(() => a(null), 2200)
                    }
                }, i = "copied" === n;
                return (0, r.jsxs)(C.fK, {
                    className: "space-y-0 text-left",
                    children: [(0, r.jsxs)(C.Be, {
                        className: "sr-only",
                        children: ["Execution identifier ", t]
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3",
                        children: [(0, r.jsx)(C.$N, {
                            className: "text-left text-xl font-semibold tracking-tight",
                            children: "Execution details"
                        }), (0, r.jsx)("div", {
                            className: "flex min-w-0 max-w-full justify-end sm:max-w-[min(100%,24rem)]",
                            children: (0, r.jsxs)("div", {
                                className: "relative min-w-0 max-w-full",
                                children: [n ? (0, r.jsx)("span", {
                                    role: "status",
                                    "aria-live": "polite",
                                    className: (0, N.cn)("pointer-events-none absolute bottom-full left-1/2 z-[10002] mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-lg border px-2.5 py-1 text-xs font-medium antialiased shadow-sm animate-in fade-in-0 slide-in-from-bottom-2 duration-200", "copied" === n ? "border-emerald-200/90 bg-gradient-to-b from-emerald-50/95 to-emerald-100/80 text-emerald-900 shadow-emerald-900/5 dark:border-emerald-800/60 dark:from-emerald-950/50 dark:to-emerald-950/30 dark:text-emerald-100 dark:shadow-emerald-950/20" : "border-destructive/30 bg-destructive/10 text-destructive"),
                                    children: "copied" === n ? (0, r.jsx)("span", {
                                        className: "tracking-wide",
                                        children: "Copied"
                                    }) : "Couldn't copy"
                                }) : null, (0, r.jsxs)("button", {
                                    type: "button",
                                    onClick: l,
                                    title: t,
                                    "aria-label": "Copy execution ID",
                                    className: (0, N.cn)("flex w-full min-w-0 max-w-full items-center gap-1.5 rounded-lg border border-transparent bg-transparent px-2 py-1.5 text-left transition-colors hover:border-border/60 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", i && "border-emerald-200/50 bg-emerald-50/40 dark:border-emerald-800/40 dark:bg-emerald-950/25"),
                                    children: [(0, r.jsx)("span", {
                                        className: "min-w-0 flex-1 break-all font-mono text-[11px] leading-snug text-muted-foreground",
                                        children: t
                                    }), (0, r.jsx)("span", {
                                        className: (0, N.cn)("flex size-6 shrink-0 items-center justify-center text-muted-foreground", i && "text-emerald-600 dark:text-emerald-400"),
                                        children: i ? (0, r.jsx)(d.Z, {
                                            className: "size-3.5"
                                        }) : (0, r.jsx)(c.Z, {
                                            className: "size-3.5"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            }

            function eh(e) {
                var t, n;
                let {
                    executionId: d,
                    showBackButton: c = !1,
                    onBack: A
                } = e, {
                    isBackendAuthenticated: M,
                    isAuthenticating: V
                } = (0, o.a)(), {
                    data: P,
                    isLoading: K,
                    error: X,
                    isPending: Y
                } = (0, a.lK)(d), {
                    data: H
                } = (0, a.VA)(d), {
                    mutate: G,
                    isPending: ee
                } = (0, a.tF)(), et = (0, w.h)(e => e.stackedExecutionView), [en, er] = (0, s.useState)("json"), [es, ea] = (0, s.useState)("json"), [el, ei] = (0, s.useState)(null), [eo, eu] = (0, s.useState)(null), [eh, eg] = (0, s.useState)(null), [ev, eb] = (0, s.useState)("before"), [ej, ey] = (0, s.useState)({
                    boundingBoxes: !1,
                    nullValues: !1
                }), eN = (0, s.useRef)(null), [ew, ek] = (0, s.useState)(!1), [eC, e_] = (0, s.useState)(!1), [ez, eE] = (0, s.useState)(!1), [eZ, eA] = (0, s.useState)(!1), [eS, eU] = (0, s.useState)(null), [eF, eM] = (0, s.useState)(null), [eD, eI] = (0, s.useState)(!0), [eR, eT] = (0, s.useState)({}), eL = (0, s.useMemo)(() => {
                    var e, t;
                    if (eS && "object" == typeof eS) {
                        let t = null !== (e = eS.inputs) && void 0 !== e ? e : eS.input;
                        if (void 0 !== t) return t
                    }
                    return null !== (t = null == P ? void 0 : P.inputs) && void 0 !== t ? t : null
                }, [eS, null == P ? void 0 : P.inputs]), eB = (0, s.useMemo)(() => {
                    var e;
                    if (eS && "object" == typeof eS) {
                        if (Array.isArray(eS)) return eS;
                        let {
                            metadata: e,
                            meta: t,
                            ...n
                        } = eS;
                        return Object.keys(n).length > 0 ? n : eS
                    }
                    return null != eL ? eL : null !== (e = null == P ? void 0 : P.inputs) && void 0 !== e ? e : null
                }, [eS, eL, null == P ? void 0 : P.inputs]), eO = (0, s.useMemo)(() => {
                    if (!eF) return null;
                    if ("object" == typeof eF && null !== eF) {
                        let e = eF.response;
                        if (void 0 !== e) return e
                    }
                    return eF
                }, [eF]), eq = (0, s.useMemo)(() => ed(eL), [eL]), eV = (0, s.useMemo)(() => {
                    var e;
                    return (null == P ? void 0 : null === (e = P.input_previews) || void 0 === e ? void 0 : e.length) ? P.input_previews.filter(e => null == e ? void 0 : e.preview_url).map((e, t) => {
                        var n;
                        let r = e.file_id ? eq.find(t => t.file_id === e.file_id) : void 0;
                        return {
                            url: e.preview_url,
                            label: (null == r ? void 0 : r.label) || (null === (n = e.filename) || void 0 === n ? void 0 : n.trim()) || ("file_id" === e.source ? "File Attachment" : "Link Attachment") + (P.input_previews.length > 1 ? " ".concat(t + 1) : ""),
                            typeHint: e.mime_type || void 0
                        }
                    }) : []
                }, [null == P ? void 0 : P.input_previews, eq]), eP = (0, s.useMemo)(() => eV.length ? eV : ec(eL), [eV, eL]), eW = eP.length > 0 || eq.length > 0, eK = (0, s.useMemo)(() => eO ? function(e) {
                    let t = new Set,
                        n = [];
                    return e.forEach(e => {
                        t.has(e.objectId) || (t.add(e.objectId), n.push(e))
                    }), n
                }(function e(t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "root",
                        r = [];
                    return null == t || ("string" == typeof t ? (function(e) {
                        let t = [];
                        for (let n of e.matchAll(l)) {
                            let e = n[1].toLowerCase(),
                                r = n[0];
                            t.push({
                                objectId: r,
                                type: e
                            })
                        }
                        return t
                    })(t).forEach(e => {
                        r.push({
                            ...e,
                            path: n,
                            value: t
                        })
                    }) : Array.isArray(t) ? t.forEach((t, s) => {
                        let a = e(t, "".concat(n, "[").concat(s, "]"));
                        r.push(...a)
                    }) : "object" == typeof t && Object.entries(t).forEach(t => {
                        let [s, a] = t, l = e(a, "root" === n ? "root.".concat(s) : "".concat(n, ".").concat(s));
                        r.push(...l)
                    })), r
                }(eO)) : [], [eO]), e$ = (0, s.useMemo)(() => {
                    if (!(null == H ? void 0 : H.items)) return null;
                    let e = H.items.filter(e => e.response);
                    return e.length > 0 ? e[0] : null
                }, [H]), eJ = (0, s.useMemo)(() => null !== e$ || null !== eh || ew, [e$, eh, ew]), eQ = (0, s.useMemo)(() => ew && el ? el : eh || (null == e$ ? void 0 : e$.response) || null, [ew, el, eh, e$]), {
                    hoverPreview: eX,
                    handleHoverEvent: eY,
                    handleHoverLeave: eH,
                    handleOverlayEnter: eG,
                    handleOverlayLeave: e0,
                    markHoverPreviewError: e1
                } = function(e) {
                    let {
                        leftData: t,
                        rightData: n
                    } = e, [r, a] = (0, s.useState)({
                        url: null,
                        kind: "doc",
                        x: 0,
                        y: 0,
                        width: 300,
                        height: 200,
                        visible: !1
                    }), [l, i] = (0, s.useState)(!1), [o, d] = (0, s.useState)(!1), [c, u] = (0, s.useState)({}), f = (0, s.useRef)(new Map), m = (0, s.useRef)(null), x = (0, s.useCallback)(e => {
                        e && (u(t => t[e] ? t : {
                            ...t,
                            [e]: !0
                        }), a(t => t.url === e ? {
                            ...t,
                            visible: !1
                        } : t))
                    }, []), h = (0, s.useCallback)(async e => f.current.get(e) || (await new Promise((t, n) => {
                        let r = new Image;
                        r.onload = () => {
                            f.current.set(e, {
                                width: r.naturalWidth,
                                height: r.naturalHeight
                            }), t()
                        }, r.onerror = () => n(), r.src = e
                    }), f.current.get(e) || {
                        width: 0,
                        height: 0
                    }), []), p = (0, s.useCallback)((e, r) => {
                        m.current && (window.clearTimeout(m.current), m.current = null);
                        let s = r.target;
                        if (!s) return;
                        let l = s.closest("[data-path]");
                        if (!l) {
                            a(e => ({
                                ...e,
                                visible: !1
                            }));
                            return
                        }
                        let i = L(T("left" === e ? t : n, l.getAttribute("data-path") || ""));
                        if (!i || c[i]) {
                            a(e => ({
                                ...e,
                                visible: !1
                            }));
                            return
                        }
                        let o = l.getBoundingClientRect(),
                            d = window.innerWidth,
                            u = window.innerHeight;
                        if ((0, R.hU)(i)) {
                            let e = Math.min(420, d - 32),
                                t = Math.min(280, u - 32),
                                n = Math.min(300, e),
                                r = Math.min(200, t),
                                s = q(o, n, r, d, u);
                            a({
                                url: i,
                                kind: "image",
                                x: s.x,
                                y: s.y,
                                width: n,
                                height: r,
                                visible: !0
                            }), h(i).then(l => {
                                let {
                                    width: c,
                                    height: f
                                } = l, m = c > 0 && f > 0 ? Math.min(e / c, t / f, 1) : 1;
                                a({
                                    url: i,
                                    kind: "image",
                                    x: (s = q(o, n = Math.max(180, Math.floor(Math.min(c * m, e))), r = Math.max(120, Math.floor(Math.min(f * m, t))), d, u)).x,
                                    y: s.y,
                                    width: n,
                                    height: r,
                                    visible: !0
                                })
                            }).catch(() => {
                                x(i)
                            })
                        } else if (O(i)) {
                            let e = Math.min(420, d - 32),
                                t = Math.min(260, u - 32),
                                n = q(o, e, t, d, u);
                            a({
                                url: i,
                                kind: "video",
                                x: n.x,
                                y: n.y,
                                width: e,
                                height: t,
                                visible: !0
                            })
                        } else if (B(i)) {
                            let e = Math.min(360, d - 32),
                                t = Math.min(88, u - 32),
                                n = q(o, e, t, d, u);
                            a({
                                url: i,
                                kind: "audio",
                                x: n.x,
                                y: n.y,
                                width: e,
                                height: t,
                                visible: !0
                            })
                        } else {
                            let e = Math.min(380, d - 32),
                                t = Math.min(280, u - 32),
                                n = q(o, e, t, d, u);
                            a({
                                url: i,
                                kind: "doc",
                                x: n.x,
                                y: n.y,
                                width: e,
                                height: t,
                                visible: !0
                            })
                        }
                    }, [t, n, c, h, x]), g = (0, s.useCallback)(() => {
                        l || o || (m.current && window.clearTimeout(m.current), m.current = window.setTimeout(() => {
                            a(e => ({
                                ...e,
                                visible: !1
                            })), m.current = null
                        }, 120))
                    }, [l, o]), v = (0, s.useCallback)(() => {
                        m.current && (window.clearTimeout(m.current), m.current = null), i(!0)
                    }, []), b = (0, s.useCallback)(() => {
                        i(!1), o || a(e => ({
                            ...e,
                            visible: !1
                        }))
                    }, [o]);
                    return (0, s.useEffect)(() => {
                        let e = () => {
                            let e = !!document.fullscreenElement;
                            d(e), e || setTimeout(() => {
                                a(e => ({
                                    ...e,
                                    visible: !1
                                }))
                            }, 100)
                        };
                        return document.addEventListener("fullscreenchange", e), document.addEventListener("webkitfullscreenchange", e), () => {
                            document.removeEventListener("fullscreenchange", e), document.removeEventListener("webkitfullscreenchange", e)
                        }
                    }, []), {
                        hoverPreview: r,
                        handleHoverEvent: p,
                        handleHoverLeave: g,
                        handleOverlayEnter: v,
                        handleOverlayLeave: b,
                        markHoverPreviewError: x
                    }
                }({
                    leftData: eB,
                    rightData: eO
                });
                (0, s.useEffect)(() => {
                    eT({})
                }, [eP]), (0, s.useEffect)(() => {
                    eO && !eo && (eu(eO), eN.current = ef(eO), ek(!1))
                }, [eO, eo]), (0, s.useEffect)(() => {
                    let e = async () => {
                        try {
                            if (!(null == P ? void 0 : P.signed_response_uri)) return;
                            eM(await (0, y.E)(P.signed_response_uri))
                        } catch (e) {}
                    };
                    (async () => {
                        try {
                            if (!(null == P ? void 0 : P.signed_request_uri)) return;
                            eU(await (0, y.E)(P.signed_request_uri))
                        } catch (e) {}
                    })(), e()
                }, [null == P ? void 0 : P.signed_request_uri, null == P ? void 0 : P.signed_response_uri]);
                let e2 = (0, s.useCallback)(e => {
                        eT(t => t[e] ? t : {
                            ...t,
                            [e]: !0
                        })
                    }, []),
                    e5 = e => {
                        ey(t => ({
                            ...t,
                            [e]: !t[e]
                        }))
                    };
                if (V || !M || K || Y) return (0, r.jsx)("div", {
                    className: "flex h-full items-center justify-center text-sm text-muted-foreground",
                    children: "Loading..."
                });
                if (X || !P) return (0, i.Q)(X) ? (0, r.jsx)(E.J, {}) : (0, i.X)(X) ? (0, r.jsx)(S.T, {
                    title: "Execution Not Found",
                    description: "The agent execution you are looking for does not exist or you don't have access to it."
                }) : (0, r.jsx)("div", {
                    className: "flex h-full items-center justify-center text-sm text-destructive",
                    children: "Error loading execution details. Please try again."
                });
                let e4 = null !== (n = null == H ? void 0 : null === (t = H.items) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0,
                    e3 = Object.keys(eR).length,
                    e6 = eP.length > 1 && e3 >= eP.length;
                return (0, r.jsx)(z.pn, {
                    delayDuration: 150,
                    children: (0, r.jsxs)("div", {
                        className: "relative flex h-full flex-col overflow-hidden",
                        children: [(0, r.jsxs)("div", {
                            className: "relative flex shrink-0 items-center border-b border-border p-2",
                            children: [(c || A) && (0, r.jsxs)(k.z, {
                                variant: "ghost",
                                onClick: A || (() => window.history.back()),
                                className: "flex items-center gap-1.5 px-0 text-accent-foreground hover:bg-transparent hover:text-accent-foreground",
                                children: [(0, r.jsx)(u.Z, {
                                    className: "size-4"
                                }), (0, r.jsx)("span", {
                                    className: "text-sm font-medium",
                                    children: "Execution"
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "absolute left-1/2 flex h-7 -translate-x-1/2 items-center gap-0.5 rounded-[10px] border border-border bg-background p-0.5",
                                children: [(0, r.jsx)("button", {
                                    className: "h-6 rounded-[8px] bg-accent px-3 text-xs text-accent-foreground",
                                    children: "Studio"
                                }), (0, r.jsxs)("button", {
                                    onClick: () => e_(!0),
                                    className: "flex h-6 items-center gap-1 rounded-[8px] px-3 text-xs text-muted-foreground hover:bg-accent/50",
                                    children: ["Feedback", e4 > 0 && (0, r.jsx)("span", {
                                        className: "text-[10px] text-muted-foreground",
                                        children: e4
                                    })]
                                }), (0, r.jsx)("button", {
                                    onClick: () => eE(!0),
                                    className: "h-6 rounded-[8px] px-3 text-xs text-muted-foreground hover:bg-accent/50",
                                    children: "Details"
                                })]
                            }), (0, r.jsxs)(k.z, {
                                variant: "outline",
                                size: "sm",
                                onClick: () => eA(!0),
                                className: "ml-auto flex h-7 items-center gap-1.5 px-2",
                                children: [(0, r.jsx)(f.Z, {
                                    className: "size-3.5"
                                }), "Add note"]
                            })]
                        }), (0, r.jsx)(J.Z, {
                            executionId: P.id,
                            open: eZ,
                            onOpenChange: eA
                        }), (0, r.jsx)(Q.Z, {
                            executionId: P.id,
                            open: eC,
                            onOpenChange: e_,
                            hideTrigger: !0
                        }), (0, r.jsx)(C.Vq, {
                            open: ez,
                            onOpenChange: eE,
                            children: (0, r.jsxs)(C.cZ, {
                                className: "gap-0 overflow-visible p-0 sm:max-w-xl lg:max-w-2xl",
                                children: [(0, r.jsx)("div", {
                                    className: "rounded-t-2xl px-6 pt-4 pb-1",
                                    children: (0, r.jsx)(ex, {
                                        id: P.id
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "max-h-[min(70vh,640px)] overflow-y-auto rounded-b-2xl px-6 pb-4 pt-2",
                                    children: (0, r.jsx)($.Z, {
                                        data: P
                                    })
                                })]
                            })
                        }), (0, r.jsxs)("div", {
                            className: "flex min-h-0 flex-1 flex-col p-2",
                            children: [(0, r.jsxs)("div", {
                                className: "grid flex-1 divide-x divide-border/60 overflow-hidden rounded-[10px] border border-border/60 md:grid-cols-2",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex h-full flex-col overflow-hidden",
                                    children: [(0, r.jsx)("div", {
                                        className: "flex h-10 shrink-0 flex-row items-center justify-end border-b border-border/40 bg-[#F5FAFF] px-4",
                                        children: !et && (0, r.jsxs)("div", {
                                            className: "flex h-7 items-center gap-0.5 rounded-[10px] border border-border bg-background p-0.5",
                                            children: [(0, r.jsx)(k.z, {
                                                variant: "ghost",
                                                onClick: () => ea("json"),
                                                className: (0, N.cn)("h-6 rounded-[8px] px-3 text-xs", "json" === es ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"),
                                                children: "Request"
                                            }), eW && (0, r.jsx)(k.z, {
                                                variant: "ghost",
                                                onClick: () => ea("inputs"),
                                                className: (0, N.cn)("h-6 rounded-[8px] px-3 text-xs", "inputs" === es ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"),
                                                children: "Inputs"
                                            })]
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "min-h-0 flex-1 overflow-hidden",
                                        children: et ? (0, r.jsxs)("div", {
                                            className: "h-full overflow-auto",
                                            children: [(0, r.jsxs)("div", {
                                                className: (0, N.cn)(eW && "border-b border-border/40"),
                                                children: [(0, r.jsx)("p", {
                                                    className: "sticky top-0 z-10 border-b border-border/20 bg-background px-3 py-2 text-xs font-medium text-muted-foreground",
                                                    children: "Request"
                                                }), P.signed_request_uri ? (0, r.jsx)("div", {
                                                    className: "stacked-json-block",
                                                    onMouseMove: e => eY("left", e),
                                                    onMouseLeave: () => eH(),
                                                    children: (0, r.jsx)(D.Z, {
                                                        viewMode: "json",
                                                        jsonData: eB || void 0,
                                                        collapseChildrenByDefault: !0
                                                    })
                                                }) : (0, r.jsx)("div", {
                                                    className: "flex items-center justify-center py-8",
                                                    children: (0, r.jsxs)("div", {
                                                        className: "flex flex-col items-center gap-2 text-muted-foreground",
                                                        children: [(0, r.jsx)(m.Z, {
                                                            className: "size-5"
                                                        }), (0, r.jsx)("span", {
                                                            className: "text-sm",
                                                            children: "No request data available"
                                                        })]
                                                    })
                                                })]
                                            }), eW && (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("p", {
                                                    className: "sticky top-0 z-10 border-b border-border/20 bg-background px-3 py-2 text-xs font-medium text-muted-foreground",
                                                    children: "Inputs"
                                                }), (0, r.jsx)("div", {
                                                    className: "space-y-5 p-4",
                                                    children: e6 ? (0, r.jsx)("div", {
                                                        className: "flex justify-center",
                                                        children: (0, r.jsx)(Z.d, {
                                                            kind: "file",
                                                            plural: !0
                                                        })
                                                    }) : eP.map((e, t) => (0, r.jsxs)("div", {
                                                        className: "space-y-1.5",
                                                        children: [eP.length > 1 && (0, r.jsx)("p", {
                                                            className: "text-xs font-medium text-muted-foreground",
                                                            children: e.label
                                                        }), (0, r.jsx)(ep, {
                                                            item: e,
                                                            responseUrl: P.signed_response_uri || "",
                                                            onError: e2
                                                        })]
                                                    }, "".concat(e.url, "-").concat(t)))
                                                })]
                                            })]
                                        }) : "json" === es ? P.signed_request_uri ? (0, r.jsx)("div", {
                                            className: "h-full",
                                            onMouseMove: e => eY("left", e),
                                            onMouseLeave: () => eH(),
                                            children: (0, r.jsx)(D.Z, {
                                                viewMode: "json",
                                                jsonData: eB || void 0,
                                                collapseChildrenByDefault: !0
                                            })
                                        }) : (0, r.jsx)("div", {
                                            className: "flex h-full items-center justify-center",
                                            children: (0, r.jsxs)("div", {
                                                className: "flex flex-col items-center gap-2 text-muted-foreground",
                                                children: [(0, r.jsx)(m.Z, {
                                                    className: "size-5"
                                                }), (0, r.jsx)("span", {
                                                    className: "text-sm",
                                                    children: "No request data available"
                                                })]
                                            })
                                        }) : (0, r.jsx)("div", {
                                            className: "h-full overflow-auto p-4",
                                            children: (0, r.jsx)("div", {
                                                className: "space-y-5",
                                                children: e6 ? (0, r.jsx)("div", {
                                                    className: "flex justify-center",
                                                    children: (0, r.jsx)(Z.d, {
                                                        kind: "file",
                                                        plural: !0
                                                    })
                                                }) : eP.map((e, t) => (0, r.jsxs)("div", {
                                                    className: "space-y-1.5",
                                                    children: [eP.length > 1 && (0, r.jsx)("p", {
                                                        className: "text-xs font-medium text-muted-foreground",
                                                        children: e.label
                                                    }), (0, r.jsx)(ep, {
                                                        item: e,
                                                        responseUrl: P.signed_response_uri || "",
                                                        onError: e2
                                                    })]
                                                }, "".concat(e.url, "-").concat(t)))
                                            })
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "flex h-full flex-col overflow-hidden",
                                    children: [(0, r.jsx)("div", {
                                        className: "flex h-10 shrink-0 flex-row items-center justify-end border-b border-border/40 bg-[#F5FAFF] px-4",
                                        children: (0, r.jsxs)("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [(0, r.jsxs)(_.h_, {
                                                children: [(0, r.jsxs)(z.u, {
                                                    children: [(0, r.jsx)(z.aJ, {
                                                        asChild: !0,
                                                        children: (0, r.jsx)(_.$F, {
                                                            asChild: !0,
                                                            children: (0, r.jsx)(k.z, {
                                                                variant: "outline",
                                                                className: "h-7 w-7 px-0",
                                                                children: (0, r.jsx)(x.Z, {
                                                                    className: "size-3.5"
                                                                })
                                                            })
                                                        })
                                                    }), (0, r.jsx)(z._v, {
                                                        children: "Filters"
                                                    })]
                                                }), (0, r.jsxs)(_.AW, {
                                                    align: "end",
                                                    className: "w-[200px]",
                                                    children: [(0, r.jsxs)(_.Xi, {
                                                        onClick: () => e5("boundingBoxes"),
                                                        className: "flex cursor-pointer items-center justify-between text-xs uppercase",
                                                        onSelect: e => e.preventDefault(),
                                                        children: [(0, r.jsx)("span", {
                                                            children: "Bounding Boxes"
                                                        }), ej.boundingBoxes && (0, r.jsx)(h.Z, {
                                                            className: "size-3.5 fill-current stroke-background"
                                                        })]
                                                    }), (0, r.jsxs)(_.Xi, {
                                                        onClick: () => e5("nullValues"),
                                                        className: "flex cursor-pointer items-center justify-between text-xs uppercase",
                                                        onSelect: e => e.preventDefault(),
                                                        children: [(0, r.jsx)("span", {
                                                            children: "Null Values"
                                                        }), ej.nullValues && (0, r.jsx)(h.Z, {
                                                            className: "size-3.5 fill-current stroke-background"
                                                        })]
                                                    })]
                                                })]
                                            }), "json" === en && eJ && (0, r.jsxs)("div", {
                                                className: "flex h-7 items-center gap-0.5 rounded-[10px] border border-border bg-background p-0.5",
                                                children: [(0, r.jsxs)(z.u, {
                                                    children: [(0, r.jsx)(z.aJ, {
                                                        asChild: !0,
                                                        children: (0, r.jsx)("button", {
                                                            onClick: () => eb("before"),
                                                            className: (0, N.cn)("rounded-[8px] p-1 transition-colors", "before" === ev ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"),
                                                            children: (0, r.jsx)(p.Z, {
                                                                className: "size-3.5"
                                                            })
                                                        })
                                                    }), (0, r.jsx)(z._v, {
                                                        children: "Before"
                                                    })]
                                                }), (0, r.jsxs)(z.u, {
                                                    children: [(0, r.jsx)(z.aJ, {
                                                        asChild: !0,
                                                        children: (0, r.jsx)("button", {
                                                            onClick: () => eb("diff"),
                                                            className: (0, N.cn)("rounded-[8px] p-1 transition-colors", "diff" === ev ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"),
                                                            children: (0, r.jsx)(g.Z, {
                                                                className: "size-3.5"
                                                            })
                                                        })
                                                    }), (0, r.jsx)(z._v, {
                                                        children: "Diff"
                                                    })]
                                                })]
                                            }), et ? (0, r.jsxs)("div", {
                                                className: "flex h-7 items-center gap-0.5 rounded-[10px] border border-border bg-background p-0.5",
                                                children: [(0, r.jsx)(k.z, {
                                                    variant: "ghost",
                                                    onClick: () => er("json"),
                                                    className: (0, N.cn)("h-6 rounded-[8px] px-3 text-xs", "form" !== en ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"),
                                                    children: "JSON"
                                                }), (0, r.jsx)(k.z, {
                                                    variant: "ghost",
                                                    onClick: () => er("form"),
                                                    className: (0, N.cn)("h-6 rounded-[8px] px-3 text-xs", "form" === en ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"),
                                                    children: "Form"
                                                })]
                                            }) : (0, r.jsxs)("div", {
                                                className: "flex h-7 items-center gap-0.5 rounded-[10px] border border-border bg-background p-0.5",
                                                children: [(0, r.jsx)(k.z, {
                                                    variant: "ghost",
                                                    onClick: () => er("json"),
                                                    className: (0, N.cn)("h-6 rounded-[8px] px-3 text-xs", "json" === en ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"),
                                                    children: "JSON"
                                                }), eK.length > 0 && (0, r.jsx)(k.z, {
                                                    variant: "ghost",
                                                    onClick: () => er("artifacts"),
                                                    className: (0, N.cn)("h-6 rounded-[8px] px-3 text-xs", "artifacts" === en ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"),
                                                    children: "Artifacts"
                                                }), (0, r.jsx)(k.z, {
                                                    variant: "ghost",
                                                    onClick: () => er("form"),
                                                    className: (0, N.cn)("h-6 rounded-[8px] px-3 text-xs", "form" === en ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"),
                                                    children: "Form"
                                                })]
                                            }), (0, r.jsxs)(z.u, {
                                                children: [(0, r.jsx)(z.aJ, {
                                                    asChild: !0,
                                                    children: (0, r.jsx)(k.z, {
                                                        variant: "outline",
                                                        onClick: () => em(P.signed_response_uri || "", P.id),
                                                        className: "h-7 w-7 px-0",
                                                        disabled: !P.signed_response_uri,
                                                        children: (0, r.jsx)(v.Z, {
                                                            className: "size-3.5"
                                                        })
                                                    })
                                                }), (0, r.jsx)(z._v, {
                                                    children: "Download JSON"
                                                })]
                                            })]
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "min-h-0 flex-1 overflow-hidden p-0",
                                        children: P.signed_response_uri ? (0, r.jsx)("div", {
                                            className: "h-full overflow-auto",
                                            children: et && "form" !== en ? (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsxs)("div", {
                                                    className: (0, N.cn)(eK.length > 0 && "border-b border-border/40"),
                                                    children: [(0, r.jsx)("p", {
                                                        className: "sticky top-0 z-10 border-b border-border/20 bg-background px-4 py-2 text-xs font-medium text-muted-foreground",
                                                        children: "JSON"
                                                    }), eJ && "diff" === ev && eQ ? (0, r.jsx)(I.Z, {
                                                        original: eo || {},
                                                        modified: eQ
                                                    }) : eJ && "before" === ev ? (0, r.jsx)("div", {
                                                        className: "stacked-json-block",
                                                        children: (0, r.jsx)(D.Z, {
                                                            jsonData: eo,
                                                            viewMode: "json",
                                                            showNullValues: ej.nullValues,
                                                            editable: !1
                                                        })
                                                    }) : (0, r.jsx)("div", {
                                                        className: "stacked-json-block",
                                                        onMouseMove: e => eY("right", e),
                                                        onMouseLeave: () => eH(),
                                                        children: (0, r.jsx)(D.Z, {
                                                            ...el ? {
                                                                jsonData: el
                                                            } : {
                                                                jsonData: eO || void 0
                                                            },
                                                            viewMode: "json",
                                                            showNullValues: ej.nullValues,
                                                            editable: !1
                                                        })
                                                    })]
                                                }), eK.length > 0 && (0, r.jsxs)("div", {
                                                    children: [(0, r.jsx)("p", {
                                                        className: "sticky top-0 z-10 border-b border-border/20 bg-background px-4 py-2 text-xs font-medium text-muted-foreground",
                                                        children: "Artifacts"
                                                    }), (0, r.jsx)("div", {
                                                        className: "p-4",
                                                        children: (0, r.jsx)(W, {
                                                            references: eK,
                                                            executionId: P.id,
                                                            responseUrl: P.signed_response_uri
                                                        })
                                                    })]
                                                })]
                                            }) : "artifacts" === en ? (0, r.jsx)("div", {
                                                className: "p-4",
                                                children: (0, r.jsx)(W, {
                                                    references: eK,
                                                    executionId: P.id,
                                                    responseUrl: P.signed_response_uri
                                                })
                                            }) : "json" === en && eJ && "diff" === ev && eQ ? (0, r.jsx)(I.Z, {
                                                original: eo || {},
                                                modified: eQ
                                            }) : "json" === en && eJ && "before" === ev ? (0, r.jsx)(D.Z, {
                                                jsonData: eo,
                                                viewMode: "json",
                                                showNullValues: ej.nullValues,
                                                editable: !1
                                            }) : (0, r.jsx)("div", {
                                                className: "h-full",
                                                onMouseMove: e => eY("right", e),
                                                onMouseLeave: () => eH(),
                                                children: (0, r.jsx)(D.Z, {
                                                    ...el ? {
                                                        jsonData: el
                                                    } : {
                                                        jsonData: eO || void 0
                                                    },
                                                    viewMode: en,
                                                    showNullValues: ej.nullValues,
                                                    editable: "form" === en,
                                                    onChange: e => {
                                                        if (eo || el) {
                                                            ei(e);
                                                            let t = eN.current;
                                                            ek(null !== t && ef(e) !== t)
                                                        } else eu(e), ei(e), eN.current = ef(e), ek(!1)
                                                    }
                                                })
                                            })
                                        }) : (0, r.jsx)("div", {
                                            className: "flex h-full items-center justify-center",
                                            children: (0, r.jsxs)("div", {
                                                className: "flex flex-col items-center gap-2 text-muted-foreground",
                                                children: [(0, r.jsx)(m.Z, {
                                                    className: "size-5"
                                                }), (0, r.jsx)("span", {
                                                    className: "text-sm",
                                                    children: "No response data available"
                                                })]
                                            })
                                        })
                                    })]
                                })]
                            }), "form" === en && ew && (0, r.jsxs)("div", {
                                className: "pointer-events-none absolute bottom-4 left-1/2 z-50 flex h-9 -translate-x-1/2 items-center gap-3 rounded-full border border-border/70 bg-white px-3 shadow-lg",
                                children: [(0, r.jsxs)("span", {
                                    className: "inline-flex items-center gap-1 text-xs text-muted-foreground",
                                    children: [(0, r.jsx)("span", {
                                        className: "size-1.5 rounded-full bg-amber-500"
                                    }), "Unsaved changes"]
                                }), (0, r.jsxs)("div", {
                                    className: "flex items-center gap-2 text-xs",
                                    children: [(0, r.jsx)("button", {
                                        type: "button",
                                        onClick: () => {
                                            eo && (ei(eo), ek(!1), j.Am.info("Changes reset"))
                                        },
                                        disabled: ee,
                                        className: (0, N.cn)("pointer-events-auto rounded-full px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors", ee ? "cursor-not-allowed opacity-60" : "hover:bg-accent/40 hover:text-foreground"),
                                        children: "Reset"
                                    }), (0, r.jsx)("button", {
                                        type: "button",
                                        onClick: () => {
                                            P && ew && !ee && G({
                                                executionId: P.id,
                                                response: el,
                                                notes: "Updated response data via form editor"
                                            }, {
                                                onSuccess: () => {
                                                    j.Am.success("Changes saved", {
                                                        description: "Your changes have been submitted as feedback."
                                                    }), eN.current = ef(el), ek(!1), eg(el)
                                                },
                                                onError: e => {
                                                    j.Am.error("Failed to save changes", {
                                                        description: e.message || "Please try again."
                                                    })
                                                }
                                            })
                                        },
                                        disabled: ee,
                                        className: (0, N.cn)("pointer-events-auto rounded-full bg-[#1D4FD8] px-2.5 py-1 text-xs font-semibold text-white transition-colors", ee ? "cursor-not-allowed opacity-60" : "hover:bg-[#193FB0]"),
                                        children: ee ? (0, r.jsxs)("span", {
                                            className: "flex items-center gap-1",
                                            children: [(0, r.jsx)(b.Z, {
                                                className: "size-3 animate-spin"
                                            }), "Saving..."]
                                        }) : "Save"
                                    })]
                                })]
                            })]
                        }), eX.visible && eX.url && (0, r.jsxs)("div", {
                            className: "fixed z-50 overflow-hidden rounded-md border border-border/60 bg-background shadow-xl",
                            style: {
                                left: eX.x,
                                top: eX.y,
                                width: eX.width,
                                height: eX.height
                            },
                            onMouseEnter: eG,
                            onMouseLeave: e0,
                            children: ["image" === eX.kind && ((0, F.U)(eX.url) ? (0, r.jsx)(F.Z, {
                                tiffUrl: eX.url,
                                alt: "preview",
                                className: "size-full object-contain",
                                onError: () => e1(eX.url)
                            }) : (0, r.jsx)("img", {
                                src: eX.url,
                                alt: "preview",
                                className: "size-full object-contain",
                                onError: () => e1(eX.url)
                            })), "video" === eX.kind && (0, r.jsx)("div", {
                                className: "size-full",
                                children: (0, r.jsx)("video", {
                                    src: eX.url,
                                    className: "size-full",
                                    controls: !0,
                                    playsInline: !0
                                })
                            }), "audio" === eX.kind && (0, r.jsx)("div", {
                                className: "flex size-full items-center justify-center p-2",
                                children: (0, r.jsx)("audio", {
                                    src: eX.url,
                                    className: "w-full",
                                    controls: !0
                                })
                            }), "doc" === eX.kind && (0, r.jsx)(U.default, {
                                pdfUrl: eX.url,
                                responseUrl: "",
                                showBoundingBoxes: !1,
                                isImage: !1,
                                onError: () => e1(eX.url)
                            })]
                        })]
                    })
                })
            }

            function ep(e) {
                let {
                    item: t,
                    responseUrl: n,
                    onError: a
                } = e, {
                    isImage: l,
                    isVideo: i,
                    isAudio: o
                } = eu(t.url, t.typeHint), d = (0, s.useCallback)(() => {
                    null == a || a(t.url)
                }, [t.url, a]), [c, u] = (0, s.useState)(!1), f = (0, s.useCallback)(() => {
                    u(!0), d()
                }, [d]);
                return (0, r.jsx)("div", {
                    className: "overflow-hidden rounded-[10px] border border-border/60",
                    children: o ? (0, r.jsx)("div", {
                        className: "p-3",
                        children: (0, r.jsx)(A.default, {
                            audioUrl: t.url,
                            responseUrl: n,
                            onError: d
                        })
                    }) : i ? (0, r.jsx)(M.default, {
                        videoUrl: t.url,
                        responseUrl: n,
                        showBoundingBoxes: !1,
                        onError: d
                    }) : l ? (0, r.jsx)(eg, {
                        url: t.url,
                        alt: t.label,
                        onError: d
                    }) : c ? (0, r.jsx)("div", {
                        className: "flex justify-center p-4",
                        children: (0, r.jsx)(Z.d, {
                            kind: "doc",
                            className: "m-4",
                            downloadUrl: t.url
                        })
                    }) : (0, r.jsx)("div", {
                        className: "h-[620px]",
                        children: (0, r.jsx)(U.default, {
                            pdfUrl: t.url,
                            responseUrl: n,
                            showBoundingBoxes: !1,
                            onError: f
                        })
                    })
                })
            }

            function eg(e) {
                let {
                    url: t,
                    alt: n,
                    onError: a
                } = e, [l, i] = (0, s.useState)(!1), o = () => {
                    i(!0), null == a || a()
                }, d = (0, F.U)(t);
                return (0, r.jsx)("div", {
                    className: "flex items-center justify-center overflow-hidden",
                    children: l ? (0, r.jsx)(Z.d, {
                        kind: "image",
                        className: "m-4",
                        downloadUrl: t
                    }) : d ? (0, r.jsx)(F.Z, {
                        tiffUrl: t,
                        alt: n,
                        className: "max-h-[620px] w-full object-contain",
                        onError: o
                    }) : (0, r.jsx)("img", {
                        src: t,
                        alt: n,
                        className: "max-h-[620px] w-full object-contain",
                        onError: o
                    })
                })
            }
        },
        34487: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return k
                }
            });
            var r = n(57437),
                s = n(27648),
                a = n(99376),
                l = n(53491),
                i = n(18930),
                o = n(49322),
                d = n(94508),
                c = n(8102),
                u = n(65613),
                f = n(59421),
                m = n(75952),
                x = n(71225),
                h = n(2265),
                p = n(5307),
                g = n(76865),
                v = n(14438),
                b = n(37099),
                j = n(62869);

            function y(e) {
                let {
                    executionId: t,
                    onDeleted: n,
                    children: s,
                    open: a,
                    onOpenChange: l
                } = e, [o, d] = (0, h.useState)(!1), c = (0, p.$y)(), u = l || d, f = async () => {
                    try {
                        await c.mutateAsync({
                            id: t
                        }), v.Am.success("Execution deleted successfully"), u(!1), null == n || n()
                    } catch (e) {
                        v.Am.error(e.message || "Failed to delete execution")
                    }
                };
                return (0, r.jsxs)(b.aR, {
                    open: void 0 !== a ? a : o,
                    onOpenChange: u,
                    children: [s && (0, r.jsx)(b.vW, {
                        asChild: !0,
                        children: s
                    }), !s && void 0 === a && (0, r.jsx)(b.vW, {
                        asChild: !0,
                        children: (0, r.jsxs)(j.z, {
                            variant: "destructive",
                            size: "sm",
                            className: "h-8 gap-2 px-3 text-xs font-medium",
                            children: [(0, r.jsx)(i.Z, {
                                className: "size-3"
                            }), "Delete"]
                        })
                    }), (0, r.jsxs)(b._T, {
                        children: [(0, r.jsxs)(b.fY, {
                            children: [(0, r.jsxs)(b.f$, {
                                className: "flex items-center gap-2",
                                children: [(0, r.jsx)(g.Z, {
                                    className: "size-5 text-destructive"
                                }), "Delete Execution"]
                            }), (0, r.jsxs)(b.yT, {
                                className: "space-y-2",
                                children: [(0, r.jsxs)("p", {
                                    children: ["Are you sure you want to delete execution ", (0, r.jsxs)("strong", {
                                        children: ["#", t]
                                    }), "?"]
                                }), (0, r.jsx)("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "This action will permanently remove this execution from your organization records."
                                }), (0, r.jsxs)("ul", {
                                    className: "ml-4 list-inside list-disc space-y-1 text-sm text-muted-foreground",
                                    children: [(0, r.jsx)("li", {
                                        children: "Execution metadata and status history"
                                    }), (0, r.jsx)("li", {
                                        children: "Its associated input/output URI references"
                                    })]
                                }), (0, r.jsx)("p", {
                                    className: "text-sm font-medium text-destructive",
                                    children: "This action cannot be undone."
                                })]
                            })]
                        }), (0, r.jsxs)(b.xo, {
                            children: [(0, r.jsx)(b.le, {
                                disabled: c.isPending,
                                children: "Cancel"
                            }), (0, r.jsx)(b.OL, {
                                onClick: f,
                                disabled: c.isPending,
                                className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                                children: c.isPending ? "Deleting..." : "Delete Execution"
                            })]
                        })]
                    })]
                })
            }
            var N = n(32661);

            function w(e) {
                let {
                    label: t,
                    children: n,
                    className: s
                } = e;
                return (0, r.jsxs)("div", {
                    className: (0, d.cn)("flex min-w-0 flex-col justify-center px-1 py-1", s),
                    children: [(0, r.jsx)("p", {
                        className: "text-xs text-muted-foreground",
                        children: t
                    }), (0, r.jsx)("div", {
                        className: "mt-1 min-h-5 text-sm font-medium leading-tight text-foreground",
                        children: n
                    })]
                })
            }

            function k(e) {
                var t, n, d, h, p, g;
                let {
                    data: v
                } = e, b = (0, a.useRouter)(), {
                    isSuperUser: j,
                    inspecting: k
                } = (0, c.L)(e => ({
                    isSuperUser: e.isSuperUser,
                    inspecting: e.inspecting
                }));
                if (!v) return null;
                let C = v.skill_id ? (0, r.jsx)(s.default, {
                        href: "/dashboard/skills/".concat(v.skill_id),
                        className: "truncate border-b border-transparent font-semibold text-foreground transition-colors hover:border-muted-foreground hover:text-muted-foreground",
                        children: (null === (t = v.skill) || void 0 === t ? void 0 : t.name) || v.skill_id
                    }) : (null === (n = v.agent) || void 0 === n ? void 0 : n.id) ? (0, r.jsx)(s.default, {
                        href: "/dashboard/agents/".concat(v.agent.id),
                        className: "truncate border-b border-transparent font-semibold text-foreground transition-colors hover:border-muted-foreground hover:text-muted-foreground",
                        children: (null === (d = v.agent) || void 0 === d ? void 0 : d.name) || v.agent.id
                    }) : (0, r.jsx)("span", {
                        className: "font-semibold text-muted-foreground",
                        children: "—"
                    }),
                    _ = null !== (g = null === (h = v.skill) || void 0 === h ? void 0 : h.version) && void 0 !== g ? g : null === (p = v.agent) || void 0 === p ? void 0 : p.version;
                return (0, r.jsxs)("div", {
                    className: "space-y-3",
                    children: [(0, r.jsxs)("div", {
                        className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3",
                        children: [(0, r.jsxs)("div", {
                            className: "flex min-w-0 flex-wrap items-center gap-x-2.5 gap-y-1",
                            children: [(0, r.jsx)("span", {
                                className: "text-base leading-snug",
                                children: C
                            }), _ ? (0, r.jsx)(m.O, {
                                version: _
                            }) : null, j || k ? (0, r.jsx)(y, {
                                executionId: v.id,
                                onDeleted: () => {
                                    b.push("/dashboard/agents/executions")
                                },
                                children: (0, r.jsx)("button", {
                                    type: "button",
                                    title: "Delete execution",
                                    "aria-label": "Delete execution",
                                    className: "inline-flex size-5 shrink-0 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-destructive",
                                    children: (0, r.jsx)(i.Z, {
                                        className: "size-3"
                                    })
                                })
                            }) : null]
                        }), (0, r.jsx)("div", {
                            className: "shrink-0 self-start sm:self-center",
                            children: (0, r.jsx)(f.O, {
                                status: v.status,
                                children: v.status
                            })
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "grid min-w-0 grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-4",
                        children: [(0, r.jsx)(w, {
                            label: "Cost",
                            children: (0, r.jsx)(x.u, {
                                executionId: v.id,
                                creditCost: v.credit_cost,
                                costDollars: v.cost_dollars,
                                details: !0
                            })
                        }), (0, r.jsx)(w, {
                            label: "Created",
                            children: v.created_at ? (0, l.Z)(new Date(v.created_at), "MMM d, h:mm a") : "N/A"
                        }), (0, r.jsx)(w, {
                            label: "Completed",
                            children: v.completed_at ? (0, l.Z)(new Date(v.completed_at), "MMM d, h:mm a") : "N/A"
                        }), (0, r.jsx)(w, {
                            label: "Flag",
                            children: (0, r.jsx)("div", {
                                className: "-ml-0.5 flex items-center",
                                children: (0, r.jsx)(N.Z, {
                                    flag: v.flag,
                                    executionId: v.id
                                })
                            })
                        })]
                    }), (v.error_code || v.error_message) && (0, r.jsxs)(u.bZ, {
                        variant: "destructive",
                        className: "border-destructive/40 bg-destructive/5",
                        children: [(0, r.jsx)(o.Z, {
                            className: "size-4"
                        }), (0, r.jsx)(u.Cd, {
                            className: "text-sm",
                            children: "Execution error"
                        }), (0, r.jsxs)(u.X, {
                            className: "space-y-1 text-destructive",
                            children: [v.error_code ? (0, r.jsx)("p", {
                                className: "font-mono text-xs font-medium",
                                children: v.error_code
                            }) : null, v.error_message ? (0, r.jsx)("p", {
                                className: "break-words text-sm leading-relaxed",
                                children: v.error_message
                            }) : null]
                        })]
                    })]
                })
            }
        },
        45241: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return g
                }
            });
            var r = n(57437),
                s = n(2265),
                a = n(5307),
                l = n(13590),
                i = n(99397),
                o = n(51817),
                d = n(29501),
                c = n(14438),
                u = n(91351),
                f = n(62869),
                m = n(26110),
                x = n(15681),
                h = n(76818);
            let p = u.Ry({
                notes: u.Z_().trim().min(1, "Notes are required")
            });

            function g(e) {
                let {
                    executionId: t,
                    open: n,
                    onOpenChange: u
                } = e, [g, v] = (0, s.useState)(!1), b = e => {
                    v(e), null == u || u(e)
                }, {
                    mutate: j,
                    isPending: y
                } = (0, a.tF)(), N = (0, d.cI)({
                    resolver: (0, l.F)(p),
                    defaultValues: {
                        notes: ""
                    }
                }), w = () => {
                    N.reset({
                        notes: ""
                    }), N.clearErrors()
                }, k = async e => {
                    j({
                        executionId: t,
                        notes: {
                            notes: e.notes.trim()
                        }.notes
                    }, {
                        onSuccess: () => {
                            c.Am.success("Feedback created", {
                                description: "Your feedback has been submitted successfully."
                            }), b(!1), w()
                        },
                        onError: e => {
                            console.error(e), c.Am.error("Error creating feedback", {
                                description: e.message || "An error occurred while creating feedback."
                            })
                        }
                    })
                };
                return (0, r.jsxs)(m.Vq, {
                    open: null != n ? n : g,
                    onOpenChange: e => {
                        b(e), e || w()
                    },
                    children: [void 0 === u && (0, r.jsx)(m.hg, {
                        asChild: !0,
                        children: (0, r.jsx)(f.z, {
                            variant: "ghost",
                            size: "icon",
                            className: "size-5",
                            children: (0, r.jsx)(i.Z, {
                                className: "size-3"
                            })
                        })
                    }), (0, r.jsxs)(m.cZ, {
                        className: "flex max-h-[90vh] flex-col gap-0 overflow-hidden p-0 sm:max-w-[600px]",
                        children: [(0, r.jsxs)(m.fK, {
                            className: "space-y-0 px-6 pt-6 text-left",
                            children: [(0, r.jsx)(m.$N, {
                                children: "Create feedback"
                            }), (0, r.jsx)(m.Be, {
                                className: "sr-only",
                                children: "Provide feedback for this agent execution. Notes are required."
                            })]
                        }), (0, r.jsx)(x.l0, {
                            ...N,
                            children: (0, r.jsxs)("form", {
                                onSubmit: N.handleSubmit(k),
                                className: "flex min-h-0 flex-1 flex-col",
                                children: [(0, r.jsx)(x.Wi, {
                                    control: N.control,
                                    name: "notes",
                                    render: e => {
                                        let {
                                            field: t
                                        } = e;
                                        return (0, r.jsxs)(x.xJ, {
                                            className: "min-h-0 flex-1 space-y-0",
                                            children: [(0, r.jsx)(x.NI, {
                                                children: (0, r.jsx)(h.g, {
                                                    ...t,
                                                    disableFocusRing: !0,
                                                    "aria-label": "Feedback notes",
                                                    placeholder: "Add your feedback notes or comments... (required)",
                                                    className: "min-h-[180px] max-h-[50vh] resize-none rounded-none border-0 bg-transparent px-6 pb-2 pt-4 text-base leading-6 shadow-none outline-none placeholder:text-muted-foreground/50 focus:border-0 focus:shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                                })
                                            }), (0, r.jsx)(x.zG, {
                                                className: "px-6"
                                            })]
                                        })
                                    }
                                }), (0, r.jsxs)("div", {
                                    className: "flex shrink-0 justify-end gap-2 px-6 pb-6 pt-2",
                                    children: [(0, r.jsx)(f.z, {
                                        type: "button",
                                        variant: "outline",
                                        onClick: () => {
                                            w(), b(!1)
                                        },
                                        disabled: y,
                                        children: "Cancel"
                                    }), (0, r.jsx)(f.z, {
                                        type: "submit",
                                        disabled: y,
                                        children: y ? (0, r.jsxs)("span", {
                                            className: "flex items-center",
                                            children: [(0, r.jsx)(o.Z, {
                                                className: "mr-2 size-4 animate-spin"
                                            }), "Creating..."]
                                        }) : "Create Feedback"
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        32661: function(e, t, n) {
            var r = n(57437),
                s = n(2265),
                a = n(5307),
                l = n(51817),
                i = n(46211),
                o = n(62869);
            let d = (0, s.forwardRef)((e, t) => {
                let {
                    flag: n = !1,
                    executionId: d
                } = e, {
                    mutate: u,
                    isPending: f
                } = (0, a.Cn)(), [m, x] = (0, s.useState)(!1), [h, p] = (0, s.useState)(n);
                (0, s.useEffect)(() => {
                    p(n)
                }, [n]);
                let g = () => {
                    d && (x(!0), u({
                        id: d,
                        execution: {
                            flag: !h
                        }
                    }, {
                        onSuccess: () => {
                            p(!h), x(!1)
                        },
                        onError: () => x(!1)
                    }))
                };
                return (0, s.useImperativeHandle)(t, () => ({
                    toggleFlag: g
                })), (0, r.jsx)("div", {
                    children: (0, r.jsx)(o.z, {
                        variant: "ghost",
                        size: "icon",
                        className: "!size-5 shrink-0 p-0 hover:bg-transparent ".concat(h ? "hover:text-red-600" : "hover:text-gray-600"),
                        onClick: e => {
                            e.stopPropagation(), g()
                        },
                        disabled: f || m,
                        title: "".concat(h ? "Remove flag" : "Flag execution", " (Shift+!)"),
                        children: f || m ? (0, r.jsx)(l.Z, {
                            className: "size-4 animate-spin"
                        }) : h ? (0, r.jsx)(c, {}) : (0, r.jsx)(i.Z, {
                            className: "size-4"
                        })
                    })
                })
            });
            d.displayName = "ExecutionFlag";
            let c = () => (0, r.jsx)(i.Z, {
                color: "#ff0000",
                className: "size-4"
            });
            t.Z = d
        },
        10813: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return d
                }
            });
            var r = n(57437),
                s = n(94508),
                a = n(5073),
                l = n(83929),
                i = n(51308);

            function o(e) {
                let {
                    runCost: t,
                    isFetching: n
                } = e;
                return n && !t ? (0, r.jsx)("p", {
                    className: "text-xs text-muted-foreground",
                    children: "Loading usage..."
                }) : t ? (0, r.jsx)(l.B, {
                    breakdown: (0, i.vT)(t.spans)
                }) : (0, r.jsx)("p", {
                    className: "text-xs text-muted-foreground",
                    children: "No usage data"
                })
            }

            function d(e) {
                let {
                    open: t,
                    onOpenChange: n,
                    trigger: l,
                    runCost: i,
                    isFetching: d,
                    contentClassName: c
                } = e;
                return (0, r.jsxs)(a.zs, {
                    open: t,
                    onOpenChange: n,
                    openDelay: 120,
                    closeDelay: 80,
                    children: [(0, r.jsx)(a.Yi, {
                        asChild: !0,
                        children: l
                    }), (0, r.jsx)(a.bZ, {
                        align: "start",
                        side: "top",
                        className: (0, s.cn)("w-auto min-w-[180px] rounded-2xl p-3 shadow-sm", c),
                        children: (0, r.jsx)(o, {
                            runCost: i,
                            isFetching: d
                        })
                    })]
                })
            }
        },
        20770: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(57437),
                s = n(2265),
                a = n(5307),
                l = n(12019),
                i = n(35827);

            function o(e) {
                let {
                    executionId: t,
                    open: n,
                    onOpenChange: o,
                    hideTrigger: d
                } = e, [c, u] = (0, s.useState)(!1), [f, m] = (0, s.useState)(null), x = void 0 !== n ? n : c, {
                    data: h,
                    isLoading: p,
                    error: g
                } = (0, a.VA)(t, {
                    enabled: x
                }), {
                    data: v
                } = (0, a.lK)(t);
                return (0, s.useEffect)(() => {
                    m(null)
                }, [t]), (0, s.useEffect)(() => {
                    x && (null == v ? void 0 : v.signed_response_uri) && null === f && (0, l.E)(v.signed_response_uri).then(m).catch(() => m(!1))
                }, [x, null == v ? void 0 : v.signed_response_uri, f]), (0, r.jsx)(i.Z, {
                    title: "Execution Feedback",
                    feedbacks: h,
                    isLoading: p,
                    error: g,
                    originalResponse: f,
                    open: x,
                    onOpenChange: o || u,
                    hideTrigger: d
                }, t)
            }
        },
        94061: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return r
                }
            });

            function r(e) {
                return e ? {
                    ...e,
                    spans: Array.isArray(e.spans) ? e.spans : []
                } : null
            }
        },
        71225: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return f
                }
            });
            var r = n(57437),
                s = n(2265),
                a = n(27648),
                l = n(49913),
                i = n(94508),
                o = n(10813),
                d = n(76443),
                c = n(16503);
            let u = (0, s.forwardRef)(function(e, t) {
                let {
                    navigateToUsage: n,
                    className: s,
                    onClick: l,
                    children: i,
                    ...o
                } = e, c = e => {
                    e.stopPropagation(), null == l || l(e)
                };
                return n ? (0, r.jsx)(a.default, {
                    ref: t,
                    href: d.r$,
                    className: s,
                    onClick: c,
                    onPointerEnter: o.onPointerEnter,
                    onPointerLeave: o.onPointerLeave,
                    onPointerDown: o.onPointerDown,
                    onFocus: o.onFocus,
                    onBlur: o.onBlur,
                    children: i
                }) : (0, r.jsx)("button", {
                    ref: t,
                    type: "button",
                    className: s,
                    onClick: c,
                    ...o,
                    children: i
                })
            });

            function f(e) {
                let {
                    executionId: t,
                    creditCost: n,
                    costDollars: a,
                    className: f,
                    compact: m = !1,
                    details: x = !1
                } = e, [h, p] = (0, s.useState)(!1), {
                    data: g,
                    isFetching: v
                } = (0, l.Q)(t, h), b = (0, i.cn)(x ? d.OQ : d.NY, f);
                return (0, r.jsx)(o.i, {
                    open: h,
                    onOpenChange: p,
                    runCost: g,
                    isFetching: v,
                    contentClassName: x ? "z-[10001]" : void 0,
                    trigger: (0, r.jsx)(u, {
                        navigateToUsage: m,
                        className: (0, i.cn)("inline-flex max-w-full text-left", f),
                        children: (0, r.jsx)(c.A, {
                            costDollars: a,
                            creditCost: n,
                            className: b
                        })
                    })
                })
            }
        },
        46878: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return d
                }
            });
            var r = n(57437),
                s = n(99376),
                a = n(83578),
                l = n(52636),
                i = n(14938),
                o = n(62869);

            function d(e) {
                let {
                    title: t = "Access Denied",
                    description: n = "You don't have permission to view this resource. This usually happens when the resource belongs to another organization."
                } = e, d = (0, s.useRouter)();
                return (0, r.jsxs)("div", {
                    className: "flex h-[calc(100vh-12rem)] w-full flex-col items-center justify-center p-6 text-center duration-300 animate-in fade-in zoom-in",
                    children: [(0, r.jsx)("div", {
                        className: "mb-6 flex size-16 items-center justify-center rounded-2xl bg-destructive/5 ring-1 ring-destructive/10",
                        children: (0, r.jsx)(a.Z, {
                            className: "size-8 text-destructive/80",
                            strokeWidth: 1.5
                        })
                    }), (0, r.jsxs)("div", {
                        className: "max-w-md space-y-2",
                        children: [(0, r.jsx)("h2", {
                            className: "text-2xl font-semibold tracking-tight text-foreground",
                            children: t
                        }), (0, r.jsx)("p", {
                            className: "text-balance text-sm leading-relaxed text-muted-foreground",
                            children: n
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "mt-10 flex flex-col items-center gap-3 sm:flex-row",
                        children: [(0, r.jsxs)(o.z, {
                            variant: "default",
                            size: "sm",
                            className: "rounded-full px-6 shadow-sm transition-all duration-200 hover:shadow-md",
                            onClick: () => window.location.reload(),
                            children: [(0, r.jsx)(l.Z, {
                                className: "mr-2 size-3.5"
                            }), "Retry"]
                        }), (0, r.jsxs)(o.z, {
                            variant: "ghost",
                            size: "sm",
                            className: "rounded-full px-6 text-muted-foreground hover:text-foreground",
                            onClick: () => d.push("/dashboard"),
                            children: [(0, r.jsx)(i.Z, {
                                className: "mr-2 size-3.5"
                            }), "Back to Dashboard"]
                        })]
                    })]
                })
            }
        },
        34909: function(e, t, n) {
            n.r(t);
            var r = n(57437),
                s = n(2265),
                a = n(55737),
                l = n(88623),
                i = n(81706),
                o = n(40875),
                d = n(51817),
                c = n(89227),
                u = n(33276),
                f = n(71637),
                m = n(92735),
                x = n(91846),
                h = n.n(x),
                p = n(54578),
                g = n(14918),
                v = n(62869),
                b = n(84190),
                j = n(19378),
                y = n(85897);
            t.default = (0, s.memo)(function(e) {
                let t, {
                        audioUrl: n,
                        onError: x
                    } = e,
                    N = (0, s.useRef)(null),
                    w = (0, s.useRef)(null),
                    [k, C] = (0, s.useState)({
                        loading: !0,
                        error: null,
                        playing: !1,
                        volume: .5,
                        muted: !1,
                        duration: 0,
                        playedSeconds: 0,
                        loaded: 0,
                        playbackRate: 1,
                        loop: !1
                    }),
                    {
                        loading: _,
                        error: z,
                        playing: E,
                        volume: Z,
                        muted: A,
                        duration: S,
                        playedSeconds: U,
                        loaded: F,
                        playbackRate: M,
                        loop: D
                    } = k,
                    I = (0, p.b)(e => e.selectedTime),
                    R = (0, p.b)(e => e.clickCounter),
                    T = (0, s.useCallback)(e => {
                        C(t => ({
                            ...t,
                            ...e
                        }))
                    }, []);
                (0, s.useEffect)(() => {
                    if (null !== I) {
                        var e, t;
                        null === (t = w.current) || void 0 === t || t.seekTo(Math.min(I, ((null === (e = w.current) || void 0 === e ? void 0 : e.getDuration()) || .5) - .5), "seconds")
                    }
                }, [I, R]);
                let L = e => {
                        if (isNaN(e)) return "00:00";
                        let t = new Date(1e3 * e),
                            n = t.getUTCHours(),
                            r = t.getUTCMinutes(),
                            s = t.getUTCSeconds().toString().padStart(2, "0");
                        return n ? "".concat(n, ":").concat(r.toString().padStart(2, "0"), ":").concat(s) : "".concat(r, ":").concat(s)
                    },
                    B = (0, s.useCallback)(() => {
                        T({
                            loading: !1,
                            error: null
                        })
                    }, [T]),
                    O = (0, s.useCallback)(e => {
                        console.error("Error loading audio:", e), T({
                            loading: !1,
                            error: "Failed to load audio"
                        }), null == x || x()
                    }, [x, T]),
                    q = (0, s.useCallback)(() => {
                        T({
                            loading: !0
                        })
                    }, [T]),
                    V = (0, s.useCallback)(() => {
                        T({
                            loading: !1
                        })
                    }, [T]),
                    P = (0, s.useCallback)(() => {
                        T({
                            playing: !E
                        })
                    }, [E, T]),
                    W = (0, s.useCallback)(e => {
                        T({
                            volume: e[0],
                            muted: 0 === e[0]
                        })
                    }, [T]),
                    K = (0, s.useCallback)(() => {
                        T({
                            muted: !A
                        })
                    }, [A, T]),
                    $ = (0, s.useCallback)(e => {
                        T({
                            playedSeconds: e.playedSeconds,
                            loaded: e.loaded
                        })
                    }, [T]),
                    J = (0, s.useCallback)(e => {
                        T({
                            duration: e
                        })
                    }, [T]),
                    Q = (0, s.useCallback)(() => {
                        D || T({
                            playing: !1
                        })
                    }, [D, T]),
                    X = (0, s.useCallback)(e => {
                        if (w.current) {
                            let t = e[0] / 100;
                            T({
                                playedSeconds: t * S
                            }), w.current.seekTo(t, "fraction")
                        }
                    }, [S, T]),
                    Y = (0, s.useCallback)(e => {
                        T({
                            playbackRate: e
                        })
                    }, [T]),
                    H = (0, s.useCallback)(() => {
                        T({
                            loop: !D
                        })
                    }, [D, T]),
                    G = (0, s.useCallback)(async () => {
                        try {
                            T({
                                loading: !0
                            });
                            let e = await fetch(n);
                            if (!e.ok) throw Error("Failed to download: ".concat(e.status, " ").concat(e.statusText));
                            let t = await e.blob(),
                                r = URL.createObjectURL(t),
                                s = ".mp3",
                                a = t.type || "audio/mpeg";
                            if (a.includes("audio/")) {
                                let e = a.split("/")[1];
                                e && (s = ".".concat(e))
                            } else try {
                                let e = new URL(n).pathname.split("/"),
                                    t = e[e.length - 1];
                                if (t && t.includes(".")) {
                                    let e = t.split(".").pop();
                                    e && (s = ".".concat(e))
                                }
                            } catch (e) {
                                console.log("Could not parse URL for file extension")
                            }
                            let l = new Date().toISOString().replace(/[:.]/g, "-"),
                                i = "audio-".concat(l).concat(s),
                                o = document.createElement("a");
                            o.href = r, o.download = i, o.style.display = "none", document.body.appendChild(o), o.click(), setTimeout(() => {
                                document.body.removeChild(o), URL.revokeObjectURL(r), T({
                                    loading: !1
                                })
                            }, 100)
                        } catch (e) {
                            console.error("Download failed:", e), T({
                                error: "Failed to download audio file",
                                loading: !1
                            })
                        }
                    }, [n, T]);
                return (0, s.useEffect)(() => {
                    T({
                        playing: !1,
                        playedSeconds: 0,
                        loaded: 0,
                        loading: !0
                    })
                }, [n, T]), (0, r.jsx)("div", {
                    className: "flex size-full flex-col items-center px-4 pb-4",
                    children: (0, r.jsxs)("div", {
                        ref: N,
                        className: "relative size-full max-w-3xl rounded-lg border border-gray-300 bg-white shadow-lg ".concat(z ? "border-transparent bg-transparent shadow-none" : ""),
                        children: [_ && (0, r.jsx)("div", {
                            className: "absolute inset-0 z-50 flex items-center justify-center bg-white/50",
                            children: (0, r.jsx)(d.Z, {
                                className: "size-6 animate-spin text-primary"
                            })
                        }), z ? (0, r.jsx)("div", {
                            className: "p-4",
                            children: (0, r.jsx)(g.d, {
                                kind: "audio",
                                downloadUrl: n
                            })
                        }) : (0, r.jsx)(j.x, {
                            className: "h-full",
                            children: (0, r.jsx)("div", {
                                className: "relative flex flex-col items-center p-4",
                                children: (0, r.jsxs)("div", {
                                    className: "w-full",
                                    children: [(0, r.jsx)("div", {
                                        className: "hidden",
                                        children: (0, r.jsx)(h(), {
                                            ref: w,
                                            url: n,
                                            width: "100%",
                                            height: "0",
                                            playing: E,
                                            volume: Z,
                                            muted: A,
                                            loop: D,
                                            playbackRate: M,
                                            progressInterval: 100,
                                            config: {
                                                file: {
                                                    forceAudio: !0,
                                                    attributes: {
                                                        crossOrigin: "anonymous"
                                                    }
                                                }
                                            },
                                            onReady: B,
                                            onError: O,
                                            onBuffer: q,
                                            onBufferEnd: V,
                                            onProgress: $,
                                            onDuration: J,
                                            onEnded: Q
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: "rounded-lg border border-slate-200 bg-white p-4 shadow-sm",
                                        children: [(0, r.jsxs)("div", {
                                            className: "relative mb-3 h-14 w-full overflow-hidden rounded-md bg-slate-100",
                                            children: [(0, r.jsx)("div", {
                                                className: "absolute z-10 h-full bg-slate-200 transition-all duration-300",
                                                style: {
                                                    width: "".concat(100 * F, "%")
                                                }
                                            }), (0, r.jsx)("div", {
                                                className: "absolute z-20 h-full bg-primary/15 transition-all duration-100",
                                                style: {
                                                    width: "".concat(U / S * 100, "%")
                                                }
                                            }), (0, r.jsx)("div", {
                                                className: "absolute inset-0 z-0 flex items-center justify-between px-0.5",
                                                children: Array.from({
                                                    length: 128
                                                }).map((e, t) => {
                                                    let n = .3 * Math.sin(t / 10 + t % 4 * .8) + .5,
                                                        s = t / 128 * 100 <= U / S * 100;
                                                    return (0, r.jsx)("div", {
                                                        className: "w-0.5 rounded-full transition-all duration-300 ".concat(s ? "bg-primary" : "bg-slate-300"),
                                                        style: {
                                                            height: "".concat(10 + 80 * n, "%"),
                                                            opacity: s ? .9 : .4,
                                                            transform: E && s ? "scaleY(1.05)" : "scaleY(1)"
                                                        }
                                                    }, t)
                                                })
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "mb-3 flex items-center space-x-3",
                                            children: [(0, r.jsx)("span", {
                                                className: "w-10 text-[10px] font-medium tracking-wide text-slate-500",
                                                children: L(U)
                                            }), (0, r.jsx)(y.i, {
                                                value: [isNaN(U) ? 0 : U / S * 100],
                                                min: 0,
                                                max: 100,
                                                step: .1,
                                                onValueChange: X,
                                                className: "flex-1 cursor-pointer"
                                            }), (0, r.jsx)("span", {
                                                className: "w-10 text-right text-[10px] font-medium tracking-wide text-slate-500",
                                                children: L(S)
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex items-center justify-between",
                                            children: [(0, r.jsxs)("div", {
                                                className: "flex items-center space-x-3",
                                                children: [(0, r.jsx)(v.z, {
                                                    variant: E ? "outline" : "default",
                                                    size: "icon",
                                                    className: "size-10 rounded-full transition-all duration-200 ".concat(E ? "border-2 border-primary" : "bg-primary hover:bg-primary/90"),
                                                    onClick: P,
                                                    children: E ? (0, r.jsx)(c.Z, {
                                                        className: "size-5 text-primary"
                                                    }) : (0, r.jsx)(u.Z, {
                                                        className: "ml-0.5 size-5 text-primary-foreground"
                                                    })
                                                }), (0, r.jsxs)("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [(t = a.Z, A ? t = l.Z : Z > .5 && (t = i.Z), (0, r.jsx)(v.z, {
                                                        variant: "outline",
                                                        size: "icon",
                                                        className: "size-8 border-slate-300",
                                                        onClick: K,
                                                        children: (0, r.jsx)(t, {
                                                            className: "size-4 text-slate-600"
                                                        })
                                                    })), (0, r.jsx)("div", {
                                                        className: "w-24",
                                                        children: (0, r.jsx)(y.i, {
                                                            value: [A ? 0 : 100 * Z],
                                                            min: 0,
                                                            max: 100,
                                                            step: 1,
                                                            onValueChange: e => W([e[0] / 100]),
                                                            className: "h-1.5 cursor-pointer"
                                                        })
                                                    })]
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "flex items-center space-x-2",
                                                children: [(0, r.jsx)(v.z, {
                                                    variant: D ? "default" : "outline",
                                                    size: "icon",
                                                    className: "size-8 border-slate-300 transition-all duration-200 ".concat(D ? "bg-primary text-primary-foreground hover:bg-primary/90" : "hover:bg-slate-50"),
                                                    onClick: H,
                                                    children: (0, r.jsx)(f.Z, {
                                                        className: "size-4 ".concat(D ? "animate-pulse" : "text-slate-600")
                                                    })
                                                }), (0, r.jsxs)(b.h_, {
                                                    children: [(0, r.jsx)(b.$F, {
                                                        asChild: !0,
                                                        children: (0, r.jsxs)(v.z, {
                                                            variant: "outline",
                                                            className: "h-8 border-slate-300 px-2 text-xs",
                                                            children: [(0, r.jsxs)("span", {
                                                                className: "mr-1",
                                                                children: [M, "x"]
                                                            }), (0, r.jsx)(o.Z, {
                                                                className: "size-3 text-slate-600"
                                                            })]
                                                        })
                                                    }), (0, r.jsx)(b.AW, {
                                                        align: "end",
                                                        className: "text-xs",
                                                        children: [.5, .75, 1, 1.25, 1.5, 2].map(e => (0, r.jsxs)(b.Xi, {
                                                            className: "py-1.5 text-[11px] ".concat(M === e ? "bg-primary/10 font-medium" : ""),
                                                            onClick: () => Y(e),
                                                            children: [e, "x Speed"]
                                                        }, e))
                                                    })]
                                                }), (0, r.jsx)(v.z, {
                                                    variant: "outline",
                                                    size: "icon",
                                                    className: "size-8 border-slate-300",
                                                    onClick: G,
                                                    children: (0, r.jsx)(m.Z, {
                                                        className: "size-4 text-slate-600"
                                                    })
                                                })]
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                })
            })
        },
        40656: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return d
                }
            });
            var r = n(57437),
                s = n(99376),
                a = n(82800),
                l = n(52636),
                i = n(14938),
                o = n(62869);

            function d(e) {
                let {
                    title: t = "Resource Not Found",
                    description: n = "The resource you are looking for does not exist or has been moved.",
                    errorCode: d = "404"
                } = e, c = (0, s.useRouter)();
                return (0, r.jsxs)("div", {
                    className: "flex h-[calc(100vh-12rem)] w-full flex-col items-center justify-center p-6 text-center duration-300 animate-in fade-in zoom-in",
                    children: [(0, r.jsx)("div", {
                        className: "mb-6 flex size-16 items-center justify-center rounded-2xl bg-muted/30 ring-1 ring-border/50",
                        children: (0, r.jsx)(a.Z, {
                            className: "size-8 text-muted-foreground/80",
                            strokeWidth: 1.5
                        })
                    }), (0, r.jsxs)("div", {
                        className: "max-w-md space-y-2",
                        children: [(0, r.jsxs)("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [(0, r.jsx)("h2", {
                                className: "text-2xl font-semibold tracking-tight text-foreground",
                                children: t
                            }), (0, r.jsx)("span", {
                                className: "rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
                                children: d
                            })]
                        }), (0, r.jsx)("p", {
                            className: "text-balance text-sm leading-relaxed text-muted-foreground",
                            children: n
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "mt-10 flex flex-col items-center gap-3 sm:flex-row",
                        children: [(0, r.jsxs)(o.z, {
                            variant: "default",
                            size: "sm",
                            className: "rounded-full px-6 shadow-sm transition-all duration-200 hover:shadow-md",
                            onClick: () => window.location.reload(),
                            children: [(0, r.jsx)(l.Z, {
                                className: "mr-2 size-3.5"
                            }), "Retry"]
                        }), (0, r.jsxs)(o.z, {
                            variant: "ghost",
                            size: "sm",
                            className: "rounded-full px-6 text-muted-foreground hover:text-foreground",
                            onClick: () => c.push("/dashboard"),
                            children: [(0, r.jsx)(i.Z, {
                                className: "mr-2 size-3.5"
                            }), "Back to Dashboard"]
                        })]
                    })]
                })
            }
        },
        8014: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return c
                },
                Z: function() {
                    return u
                }
            });
            var r = n(57437),
                s = n(2265),
                a = n(82244),
                l = n.n(a),
                i = n(93022);
            let o = new Map;
            async function d(e) {
                let t = o.get(e);
                if (t) return t;
                let n = await fetch(e);
                if (!n.ok) throw Error("Failed to fetch TIFF: ".concat(n.statusText));
                let r = await n.arrayBuffer(),
                    s = l().decode(r);
                if (!s || 0 === s.length) throw Error("No image data found in TIFF file");
                let a = s[0];
                l().decodeImage(r, a);
                let i = l().toRGBA8(a),
                    d = document.createElement("canvas");
                d.width = a.width, d.height = a.height;
                let c = d.getContext("2d");
                if (!c) throw Error("Failed to get canvas context");
                let u = new ImageData(new Uint8ClampedArray(i), a.width, a.height);
                c.putImageData(u, 0, 0);
                let f = d.toDataURL("image/png");
                if (o.size >= 16) {
                    let e = o.keys().next().value;
                    void 0 !== e && o.delete(e)
                }
                return o.set(e, f), f
            }

            function c(e) {
                let t = e.toLowerCase();
                return t.endsWith(".tiff") || t.endsWith(".tif") || t.includes(".tiff?") || t.includes(".tif?")
            }

            function u(e) {
                let {
                    tiffUrl: t,
                    alt: n,
                    className: a,
                    onError: l
                } = e, [o, c] = (0, s.useState)(null), [u, f] = (0, s.useState)(!0), [m, x] = (0, s.useState)(null), h = (0, s.useCallback)(() => {
                    x("Failed to load TIFF image"), f(!1), null == l || l()
                }, [l]);
                return ((0, s.useEffect)(() => {
                    let e = !1;
                    return (async () => {
                        f(!0), x(null);
                        try {
                            let n = await d(t);
                            e || (c(n), f(!1))
                        } catch (t) {
                            e || (console.error("Error converting TIFF:", t), h())
                        }
                    })(), () => {
                        e = !0
                    }
                }, [t, h]), u) ? (0, r.jsx)(i.O, {
                    className: "h-64 w-full rounded-md"
                }) : m || !o ? null : (0, r.jsx)("img", {
                    src: o,
                    alt: n || "TIFF image",
                    className: a,
                    onError: h
                })
            }
        },
        65613: function(e, t, n) {
            n.d(t, {
                Cd: function() {
                    return d
                },
                X: function() {
                    return c
                },
                bZ: function() {
                    return o
                }
            });
            var r = n(57437),
                s = n(2265),
                a = n(77712),
                l = n(94508);
            let i = (0, a.j)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7", {
                    variants: {
                        variant: {
                            default: "bg-background text-foreground",
                            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
                        }
                    },
                    defaultVariants: {
                        variant: "default"
                    }
                }),
                o = s.forwardRef((e, t) => {
                    let {
                        className: n,
                        variant: s,
                        ...a
                    } = e;
                    return (0, r.jsx)("div", {
                        ref: t,
                        role: "alert",
                        className: (0, l.cn)(i({
                            variant: s
                        }), n),
                        ...a
                    })
                });
            o.displayName = "Alert";
            let d = s.forwardRef((e, t) => {
                let {
                    className: n,
                    ...s
                } = e;
                return (0, r.jsx)("h5", {
                    ref: t,
                    className: (0, l.cn)("mb-1 font-medium leading-none tracking-tight", n),
                    ...s
                })
            });
            d.displayName = "AlertTitle";
            let c = s.forwardRef((e, t) => {
                let {
                    className: n,
                    ...s
                } = e;
                return (0, r.jsx)("div", {
                    ref: t,
                    className: (0, l.cn)("text-sm [&_p]:leading-relaxed", n),
                    ...s
                })
            });
            c.displayName = "AlertDescription"
        },
        39481: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return c
                }
            });
            var r = n(57437),
                s = n(2265),
                a = n(94508);
            let l = {
                    md: "rounded-md",
                    lg: "rounded-lg",
                    xl: "rounded-xl",
                    "2xl": "rounded-2xl",
                    "3xl": "rounded-3xl"
                },
                i = "mbs-media-block-skeleton-styles",
                o = '\n@keyframes mbs-surface-shimmer {\n  0%, 52% { opacity: 0; transform: translateX(-110%) rotate(8deg); }\n  63% { opacity: 0.64; }\n  78% { opacity: 0.18; transform: translateX(135%) rotate(8deg); }\n  100% { opacity: 0; transform: translateX(135%) rotate(8deg); }\n}\n\n.mbs-skeleton { box-shadow: inset 0 1px 0 hsl(var(--background) / 0.72); }\n.mbs-skeleton::before {\n  animation: mbs-surface-shimmer 2.5s ease-in-out infinite;\n  background: linear-gradient(100deg, transparent 28%, hsl(var(--background) / 0.7) 44%, hsl(var(--foreground) / 0.04) 52%, transparent 72%);\n  content: "";\n  inset: -35%;\n  pointer-events: none;\n  position: absolute;\n  width: 64%;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .mbs-skeleton::before { animation: none; }\n}\n';

            function d() {
                return (0, s.useInsertionEffect)(() => {
                    if ("undefined" == typeof document) return;
                    let e = document.getElementById(i);
                    if (e) {
                        e.textContent !== o && (e.textContent = o);
                        return
                    }
                    let t = document.createElement("style");
                    t.id = i, t.textContent = o, document.head.appendChild(t)
                }, []), null
            }

            function c(e) {
                let {
                    kind: t = "image",
                    rounded: n = "xl",
                    pathSeed: s,
                    className: i,
                    ...o
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(d, {}), (0, r.jsx)("div", {
                        role: "status",
                        "aria-busy": "true",
                        "aria-label": "Loading ".concat(t),
                        className: (0, a.cn)("mbs-skeleton relative size-full overflow-hidden border border-border/40 bg-muted", l[n], i),
                        ...o
                    })]
                })
            }
        },
        85897: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return i
                }
            });
            var r = n(57437),
                s = n(2265),
                a = n(38846),
                l = n(94508);
            let i = s.forwardRef((e, t) => {
                let {
                    className: n,
                    ...s
                } = e;
                return (0, r.jsxs)(a.fC, {
                    ref: t,
                    className: (0, l.cn)("relative flex w-full touch-none select-none items-center", n),
                    ...s,
                    children: [(0, r.jsx)(a.fQ, {
                        className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
                        children: (0, r.jsx)(a.e6, {
                            className: "absolute h-full bg-primary"
                        })
                    }), (0, r.jsx)(a.bU, {
                        className: "block size-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    })]
                })
            });
            i.displayName = a.fC.displayName
        },
        78708: function(e, t, n) {
            n.r(t);
            var r = n(57437),
                s = n(2265),
                a = n(91846),
                l = n.n(a),
                i = n(54578),
                o = n(14918);
            t.default = (0, s.memo)(function(e) {
                let {
                    videoUrl: t,
                    responseUrl: n,
                    showBoundingBoxes: a = !1,
                    onError: d
                } = e, c = (0, s.useRef)(null), u = (0, s.useRef)(null), [f, m] = (0, s.useState)(null), x = (0, i.b)(e => e.selectedTime), h = (0, i.b)(e => e.clickCounter);
                (0, s.useEffect)(() => {
                    null !== x && u.current && u.current.seekTo(x, "seconds")
                }, [x, h]);
                let p = (0, s.useCallback)(() => {
                        m(null)
                    }, []),
                    g = (0, s.useCallback)(e => {
                        console.error("Error loading video:", e), m("Failed to load video"), null == d || d()
                    }, [d]);
                return (0, r.jsx)("div", {
                    className: "w-full",
                    children: (0, r.jsx)("div", {
                        ref: c,
                        className: "relative w-full",
                        children: (0, r.jsx)("div", {
                            className: "aspect-video w-full",
                            children: f ? (0, r.jsx)(o.d, {
                                kind: "video",
                                className: "h-full w-full",
                                downloadUrl: t
                            }) : (0, r.jsx)(l(), {
                                ref: u,
                                url: t,
                                width: "100%",
                                height: "100%",
                                controls: !0,
                                playing: !1,
                                playsinline: !0,
                                onReady: p,
                                onError: g,
                                config: {
                                    file: {
                                        attributes: {
                                            crossOrigin: "anonymous"
                                        }
                                    }
                                }
                            })
                        })
                    })
                })
            })
        },
        63585: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return a
                }
            });
            var r = n(59625),
                s = n(89134);
            let a = (0, r.Ue)()((0, s.tJ)(e => ({
                bulkUploadEnabled: !1,
                setBulkUploadEnabled: t => e({
                    bulkUploadEnabled: t
                }),
                showExecutionsByDefault: !1,
                setShowExecutionsByDefault: t => e({
                    showExecutionsByDefault: t
                }),
                stackedExecutionView: !0,
                setStackedExecutionView: t => e({
                    stackedExecutionView: t
                })
            }), {
                name: "skill-settings"
            }))
        },
        10264: function(e, t, n) {
            n.d(t, {
                Ep: function() {
                    return l
                },
                G6: function() {
                    return d
                },
                KZ: function() {
                    return c
                },
                Rm: function() {
                    return a
                },
                Rt: function() {
                    return i
                },
                TO: function() {
                    return u
                },
                Z7: function() {
                    return s
                },
                _t: function() {
                    return o
                }
            });
            var r = n(31125);
            let s = async (e, t, n, s, a, l) => {
                let i = {
                        limit: e,
                        offset: t,
                        order_by: n,
                        descending: s,
                        agent_id: a,
                        ...l
                    },
                    {
                        data: o
                    } = await r.Z.get("/api/v1/agent-executions", {
                        params: i
                    });
                return o
            }, a = async e => {
                let {
                    data: t
                } = await r.Z.get("/api/v1/agent-executions/".concat(e));
                return t
            }, l = async e => {
                try {
                    let {
                        data: t
                    } = await r.Z.get("/api/v1/agent-executions/".concat(e, "/run-cost"));
                    return t
                } catch (e) {
                    if ("object" == typeof e && null !== e && "response" in e) {
                        let t = e.response;
                        if ((null == t ? void 0 : t.status) === 404) return null
                    }
                    throw e
                }
            }, i = async function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 90,
                    {
                        data: n
                    } = await r.Z.get("/api/v1/agent-executions/by-agent/".concat(e, "/summary"), {
                        params: {
                            days: t
                        }
                    });
                return n
            }, o = async (e, t, n) => {
                let {
                    data: s
                } = await r.Z.post("/api/v1/agent-executions/".concat(e, "/feedback"), {
                    response: t,
                    notes: n
                });
                return s
            }, d = async e => {
                let {
                    data: t
                } = await r.Z.get("/api/v1/agent-executions/".concat(e, "/feedback"));
                return t
            }, c = async (e, t) => {
                let {
                    data: n
                } = await r.Z.patch("/api/v1/agent-executions/".concat(e), t);
                return n
            }, u = async e => {
                await r.Z.delete("/api/v1/agent-executions/".concat(e))
            }
        },
        49913: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return i
                },
                T: function() {
                    return l
                }
            });
            var r = n(92850),
                s = n(94061),
                a = n(10264);
            let l = e => ["agent-execution-run-cost", e];

            function i(e) {
                var t;
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    o = null !== (t = null == i ? void 0 : i.pollWhileEmpty) && void 0 !== t && t;
                return (0, r.a)({
                    queryKey: l(e),
                    queryFn: async () => (0, s.F)(await (0, a.Ep)(e)),
                    enabled: !!(e && n),
                    staleTime: o ? 0 : 3e4,
                    refetchInterval: e => !!o && null == e.state.data && 3e3,
                    retry: (e, t) => !(t instanceof Error && t.message.includes("404")) && e < 2
                })
            }
        },
        5307: function(e, t, n) {
            n.d(t, {
                $y: function() {
                    return h
                },
                Cn: function() {
                    return x
                },
                HV: function() {
                    return d
                },
                VA: function() {
                    return m
                },
                i6: function() {
                    return u
                },
                lK: function() {
                    return c
                },
                tF: function() {
                    return f
                }
            });
            var r = n(49842),
                s = n(92850),
                a = n(45345),
                l = n(29827),
                i = n(21770),
                o = n(10264);
            let d = (e, t, n, l, i, d, c) => {
                    var u;
                    let {
                        isBackendAuthenticated: f
                    } = (0, r.a)(), m = null === (u = null == c ? void 0 : c.enabled) || void 0 === u || u;
                    return (0, s.a)({
                        queryKey: ["agent-executions", e, t, n, l, null != i ? i : null, d],
                        queryFn: () => (0, o.Z7)(e, e * t, n, l, i, d),
                        placeholderData: a.Wk,
                        enabled: f && m
                    })
                },
                c = e => {
                    let {
                        isBackendAuthenticated: t
                    } = (0, r.a)();
                    return (0, s.a)({
                        queryKey: ["agent-execution", e],
                        queryFn: () => (0, o.Rm)(e),
                        enabled: t && !!e,
                        refetchOnWindowFocus: !1,
                        refetchInterval: e => {
                            var t;
                            return !! function(e) {
                                let t = null == e ? void 0 : e.toLowerCase();
                                return "running" === t || "pending" === t || "enqueued" === t || "submitting" === t || "paused" === t
                            }(null === (t = e.state.data) || void 0 === t ? void 0 : t.status) && 3e3
                        },
                        retry: (e, t) => {
                            var n, r;
                            return (null == t ? void 0 : null === (n = t.response) || void 0 === n ? void 0 : n.status) !== 403 && (null == t ? void 0 : null === (r = t.response) || void 0 === r ? void 0 : r.status) !== 404 && e < 3
                        }
                    })
                },
                u = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 90,
                        {
                            isBackendAuthenticated: n
                        } = (0, r.a)();
                    return (0, s.a)({
                        queryKey: ["agent-executions", "summary", e, t],
                        queryFn: () => (0, o.Rt)(e, t),
                        enabled: n && !!e
                    })
                },
                f = () => {
                    let e = (0, l.NL)();
                    return (0, i.D)({
                        mutationFn: e => {
                            let {
                                executionId: t,
                                response: n,
                                notes: r
                            } = e;
                            return (0, o._t)(t, n, r)
                        },
                        onSuccess: (t, n) => {
                            let {
                                executionId: r
                            } = n;
                            e.invalidateQueries({
                                queryKey: ["execution-feedbacks", r]
                            }), e.invalidateQueries({
                                queryKey: ["agent-execution", r]
                            })
                        }
                    })
                },
                m = (e, t) => {
                    var n;
                    return (0, s.a)({
                        queryKey: ["execution-feedbacks", e],
                        queryFn: () => (0, o.G6)(e),
                        refetchOnWindowFocus: !1,
                        enabled: null === (n = null == t ? void 0 : t.enabled) || void 0 === n || n
                    })
                },
                x = () => {
                    let e = (0, l.NL)();
                    return (0, i.D)({
                        mutationFn: e => {
                            let {
                                id: t,
                                execution: n
                            } = e;
                            return (0, o.KZ)(t, n)
                        },
                        onSuccess(t, n) {
                            let {
                                id: r
                            } = n;
                            e.invalidateQueries({
                                queryKey: ["agent-executions"],
                                exact: !1
                            }), e.invalidateQueries({
                                queryKey: ["agent-execution", r]
                            })
                        }
                    })
                },
                h = () => {
                    let e = (0, l.NL)();
                    return (0, i.D)({
                        mutationFn: e => {
                            let {
                                id: t
                            } = e;
                            return (0, o.TO)(t)
                        },
                        onSuccess: (t, n) => {
                            let {
                                id: r
                            } = n;
                            e.invalidateQueries({
                                queryKey: ["agent-executions"],
                                exact: !1
                            }), e.removeQueries({
                                queryKey: ["agent-execution", r]
                            })
                        }
                    })
                }
        },
        55105: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return s
                },
                X: function() {
                    return a
                }
            });
            var r = n(83464);
            let s = e => {
                    if (r.default.isAxiosError(e)) {
                        var t;
                        return (null === (t = e.response) || void 0 === t ? void 0 : t.status) === 403
                    }
                    return !1
                },
                a = e => {
                    if (r.default.isAxiosError(e)) {
                        var t;
                        return (null === (t = e.response) || void 0 === t ? void 0 : t.status) === 404
                    }
                    return !1
                }
        }
    }
]);