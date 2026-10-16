try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2b0ba8ee-a340-4405-8dd0-365b92c6253c", e._sentryDebugIdIdentifier = "sentry-dbid-2b0ba8ee-a340-4405-8dd0-365b92c6253c")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [87108], {
        87108: function(e, t, s) {
            s.r(t), s.d(t, {
                ChatLayout: function() {
                    return eR
                }
            });
            var n = s(57437),
                i = s(29),
                a = s.n(i),
                l = s(2265),
                r = s(33145),
                o = s(27648),
                d = s(99376),
                c = s(49842),
                u = s(29827),
                m = s(15868),
                h = s(23374),
                p = s(94508),
                f = s(13762),
                x = s(5531),
                v = s(24466),
                g = s(32660),
                b = s(9880),
                j = s(54206),
                y = s(62869),
                w = s(66070),
                N = s(19378),
                C = s(73164),
                k = s(65272),
                z = s(8551),
                S = s(53113),
                L = s(60026),
                E = s(90119),
                _ = s(48736),
                D = s(29202),
                M = s(69658),
                I = s(40444),
                T = s(40875),
                O = s(10407),
                W = s(31604),
                R = s(39481),
                Z = s(95465),
                P = s(7999),
                V = s(8014),
                F = s(11794),
                B = s(48931),
                A = s(89222),
                H = s(79047),
                U = s(41193);

            function q(e) {
                let t = e.mimetype || "";
                return "model" === e.type || (0, F.j8)(e.id) ? "model" : t.startsWith("image/") ? "image" : t.startsWith("video/") ? "video" : "application/pdf" === t || t.startsWith("text/html") || t.includes("html") ? "document" : null
            }

            function K(e) {
                let {
                    src: t
                } = e, [s, i] = (0, l.useState)(!1), [a, r] = (0, l.useState)(!1);
                return (0, l.useEffect)(() => {
                    i(!1), r(!1)
                }, [t]), (0, n.jsx)("div", {
                    className: "overflow-hidden rounded-2xl bg-black",
                    children: (0, n.jsxs)("div", {
                        className: "relative w-full",
                        style: {
                            paddingBottom: "56.25%"
                        },
                        children: [(0, n.jsx)("video", {
                            src: t,
                            controls: !0,
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            playsInline: !0,
                            className: (0, p.cn)("absolute inset-0 size-full object-cover", !s && !a && "invisible"),
                            preload: "metadata",
                            onLoadedData: () => i(!0),
                            onError: () => r(!0)
                        }), s || a ? null : (0, n.jsx)("div", {
                            className: "absolute inset-0",
                            children: (0, n.jsx)(R.d, {
                                kind: "video",
                                rounded: "2xl",
                                className: "border-0",
                                pathSeed: t
                            })
                        }), a ? (0, n.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center bg-black/60 px-3 text-center text-xs font-medium text-white",
                            children: "Unable to load video"
                        }) : null]
                    })
                })
            }

            function X(e) {
                let {
                    src: t,
                    alt: s,
                    spatialOverlaySvgInner: i
                } = e, [a, o] = (0, l.useState)(!1), [d, c] = (0, l.useState)(!1), [u, m] = (0, l.useState)(null), h = null == i ? void 0 : i.trim(), f = !!h && null != u;
                return (0, l.useEffect)(() => {
                    o(!1), c(!1), m(null)
                }, [t]), (0, n.jsxs)("div", {
                    className: "relative overflow-hidden rounded-2xl bg-transparent",
                    children: [d ? (0, n.jsx)("div", {
                        className: "flex items-center justify-center p-8 text-center",
                        children: (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(S.Z, {
                                className: "mx-auto mb-2 size-12 text-muted-foreground/50"
                            }), (0, n.jsx)("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Image preview not available"
                            })]
                        })
                    }) : (0, n.jsxs)("div", {
                        className: "relative mx-auto w-full",
                        style: f ? {
                            aspectRatio: null != u ? u : void 0,
                            maxWidth: "calc(16rem * ".concat(u, ")")
                        } : void 0,
                        children: [(0, n.jsx)(r.default, {
                            src: t,
                            alt: s,
                            width: 800,
                            height: 256,
                            className: (0, p.cn)(f ? "size-full object-cover" : "h-auto max-h-64 w-full object-contain", !a && "invisible"),
                            unoptimized: !0,
                            onLoadingComplete: e => {
                                o(!0), e.naturalWidth > 0 && e.naturalHeight > 0 && m(e.naturalWidth / e.naturalHeight)
                            },
                            onError: () => c(!0)
                        }), h && a ? (0, n.jsx)(z.t, {
                            svgInnerMarkup: h
                        }) : null]
                    }), a || d ? null : (0, n.jsx)("div", {
                        className: "absolute inset-0",
                        children: (0, n.jsx)(R.d, {
                            kind: "image",
                            rounded: "2xl",
                            className: "border-0",
                            pathSeed: t
                        })
                    })]
                })
            }

            function Y(e) {
                var t, s, i;
                let {
                    data: a,
                    sessionId: r,
                    showAllPreviews: o = !1,
                    artifactId: d,
                    streams: c
                } = e, u = (0, l.useMemo)(() => (function(e) {
                    let t = new Map;
                    for (let i of e)
                        for (let [e, a] of(0, k.T)(i.annotations).images) {
                            var s, n;
                            let i = null === (s = a.spatialOverlaySvgInner) || void 0 === s ? void 0 : s.trim();
                            i && t.set(null !== (n = (0, H.V)(e)) && void 0 !== n ? n : e, i)
                        }
                    return t
                })(null != c ? c : []), [c]), m = (0, l.useMemo)(() => {
                    let e = a.data || [],
                        t = [],
                        s = (0, A.G)();
                    return e.forEach((e, n) => {
                        let i = o ? e.objects : e.objects.filter(e => !1 !== e.preview);
                        0 !== i.length && i.forEach((a, l) => {
                            let r = 0 === t.length,
                                o = q(a),
                                d = e.title || "".concat("image" === o ? "Image" : "video" === o ? "Video" : "model" === o ? "Model" : "Document", " ").concat(n + 1),
                                c = i.length > 1 ? "".concat(d, " #").concat(l + 1) : d,
                                u = o && s ? s({
                                    kind: o,
                                    primaryLabel: e.title,
                                    fallbackLabel: c
                                }) : c,
                                m = {
                                    ...e,
                                    objects: i
                                };
                            t.push({
                                group: m,
                                object: a,
                                groupIndex: n,
                                objectIndex: l,
                                key: "".concat(n, "-").concat(l),
                                isFirst: r,
                                displayTitle: u
                            })
                        })
                    }), t
                }, [a.data, o]), [h, p] = (0, l.useState)(() => new Set(m.map(e => e.key))), f = (0, l.useMemo)(() => m.map(e => e.displayTitle + e.object.id).join("|"), [m]);
                (0, l.useEffect)(() => {
                    p(new Set(m.map(e => e.key)))
                }, [f, m]);
                let x = e => {
                        let t = new Set(h);
                        t.has(e) ? t.delete(e) : t.add(e), p(t)
                    },
                    v = (0, l.useMemo)(() => {
                        var e;
                        if (0 === m.length || !r) return null;
                        let t = null != d ? d : "preview-panel",
                            s = [];
                        if (m.forEach(e => {
                                let n = q(e.object);
                                if (!n) return;
                                let i = (0, W.pC)(r, e.object.id),
                                    a = e.displayTitle;
                                s.push({
                                    artifactId: t,
                                    objectId: e.object.id,
                                    url: i,
                                    label: a,
                                    groupTitle: e.displayTitle,
                                    mimetype: e.object.mimetype,
                                    kind: n
                                })
                            }), 0 === s.length) return null;
                        let n = null === (e = m.find(e => e.displayTitle)) || void 0 === e ? void 0 : e.displayTitle,
                            i = (() => {
                                let e = new Set(s.map(e => e.kind));
                                if (1 === e.size) {
                                    if (e.has("image")) return "Images created";
                                    if (e.has("document")) return "Documents created";
                                    if (e.has("video")) return "Videos created";
                                    if (e.has("model")) return "3D models created"
                                }
                                return "Items created"
                            })();
                        return {
                            artifactId: t,
                            title: n || i,
                            images: s
                        }
                    }, [m, d, r]),
                    g = (0, l.useCallback)(e => {
                        let t = m.find(t => t.object.id === e);
                        t && !t.isFirst && p(e => {
                            if (e.has(t.key)) return e;
                            let s = new Set(e);
                            return s.add(t.key), s
                        })
                    }, [m]),
                    b = (0, l.useCallback)(e => {
                        v && v.images.some(t => t.objectId === e) && (g(e), (0, B.d)({
                            gallery: v,
                            imageId: e,
                            onSelectImage: e => {
                                g(e)
                            }
                        }))
                    }, [g, v]),
                    [j, y] = (0, l.useState)(null),
                    w = (0, l.useCallback)((e, t) => {
                        var s;
                        let i = e.mimetype.startsWith("image/") ? u.get(null !== (s = (0, H.V)(e.id)) && void 0 !== s ? s : e.id) : void 0,
                            a = function(e, t, s, i) {
                                var a, l;
                                let r = (0, W.pC)(s, e.id);
                                if ("model" === e.type || (0, F.j8)(e.id, r)) {
                                    let t = (0, F.F8)(e.id, r);
                                    return (0, n.jsx)("div", {
                                        className: "aspect-video w-full overflow-hidden rounded-2xl border border-border",
                                        children: (0, n.jsx)(U.SparkModelViewer, {
                                            url: r,
                                            fileType: t,
                                            className: "size-full rounded-none",
                                            hideBuiltInControls: !0
                                        })
                                    })
                                }
                                return e.mimetype.startsWith("image/") ? (0, V.U)(r) || "image/tiff" === e.mimetype || "image/tif" === e.mimetype ? (0, n.jsx)("div", {
                                    className: "overflow-hidden rounded-2xl bg-transparent",
                                    children: (0, n.jsx)(V.Z, {
                                        tiffUrl: r,
                                        alt: t,
                                        className: "h-auto max-h-64 w-full object-contain"
                                    })
                                }) : (0, n.jsx)(X, {
                                    src: r,
                                    alt: t,
                                    spatialOverlaySvgInner: i
                                }) : "application/pdf" === e.mimetype ? (0, n.jsx)("div", {
                                    className: "h-[60vh] w-full overflow-hidden rounded-2xl border border-border bg-white dark:bg-gray-900",
                                    children: (0, n.jsx)(P.H, {
                                        pdfUrl: r,
                                        responseUrl: "",
                                        showBoundingBoxes: !1
                                    })
                                }) : e.mimetype.startsWith("video/") ? (0, n.jsx)(K, {
                                    src: r
                                }) : e.mimetype.startsWith("audio/") ? (0, n.jsx)("div", {
                                    className: "rounded-2xl bg-white p-4 dark:bg-gray-900",
                                    children: (0, n.jsxs)("audio", {
                                        controls: !0,
                                        className: "w-full",
                                        preload: "metadata",
                                        children: [(0, n.jsx)("source", {
                                            src: r,
                                            type: e.mimetype
                                        }), "Your browser does not support the audio element."]
                                    })
                                }) : e.mimetype.startsWith("text/html") || e.mimetype.includes("html") ? (0, n.jsx)("div", {
                                    className: "overflow-hidden rounded-2xl bg-white dark:bg-gray-900",
                                    children: (0, n.jsx)("iframe", {
                                        src: r,
                                        className: "h-64 w-full",
                                        title: t,
                                        sandbox: "allow-scripts allow-same-origin"
                                    })
                                }) : (0, n.jsxs)("div", {
                                    className: "rounded-2xl bg-white p-6 text-center dark:bg-gray-900",
                                    children: [(0, n.jsx)("div", {
                                        className: "mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800",
                                        children: (a = e.mimetype).startsWith("image/") ? (0, n.jsx)(S.Z, {
                                            className: "size-3 text-blue-500"
                                        }) : a.startsWith("video/") ? (0, n.jsx)(L.Z, {
                                            className: "size-3 text-purple-500"
                                        }) : a.startsWith("audio/") ? (0, n.jsx)(E.Z, {
                                            className: "size-3 text-green-500"
                                        }) : "application/pdf" === a ? (0, n.jsx)(_.Z, {
                                            className: "size-3 text-red-500"
                                        }) : a.startsWith("text/html") || a.includes("html") ? (0, n.jsx)(D.Z, {
                                            className: "size-3 text-orange-500"
                                        }) : (0, n.jsx)(M.Z, {
                                            className: "size-3 text-gray-500"
                                        })
                                    }), (0, n.jsx)("h4", {
                                        className: "mb-1 text-sm font-medium text-foreground",
                                        children: t
                                    }), (0, n.jsx)("p", {
                                        className: "mb-3 text-xs text-muted-foreground",
                                        children: (l = e.mimetype).startsWith("image/") ? l.replace("image/", "").toUpperCase() + " Image" : l.startsWith("video/") ? l.replace("video/", "").toUpperCase() + " Video" : l.startsWith("audio/") ? l.replace("audio/", "").toUpperCase() + " Audio" : "application/pdf" === l ? "PDF Document" : l.startsWith("text/html") || l.includes("html") ? "HTML Document" : l
                                    }), (0, n.jsxs)("div", {
                                        className: "flex items-center justify-center gap-2 text-xs",
                                        children: [(0, n.jsx)("code", {
                                            className: "rounded bg-gray-100 px-2 py-1 font-mono dark:bg-gray-800",
                                            children: e.id
                                        }), (0, n.jsx)("a", {
                                            href: r,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "font-medium text-primary hover:text-primary/80",
                                            children: "Download"
                                        })]
                                    })]
                                })
                            }(e, t, r, i),
                            l = q(e);
                        if (!(v && l)) return a;
                        let o = s => {
                                if (s.preventDefault(), s.stopPropagation(), "image" === l) {
                                    b(e.id);
                                    return
                                }
                                let n = (0, W.pC)(r, e.id);
                                if ("model" === l) {
                                    y({
                                        type: "model",
                                        src: n,
                                        label: t,
                                        fileType: (0, F.F8)(e.id, n)
                                    });
                                    return
                                }
                                if ("document" === l) {
                                    y({
                                        type: "document",
                                        src: n,
                                        label: t,
                                        mimetype: e.mimetype
                                    });
                                    return
                                }
                                y({
                                    type: "video",
                                    src: n,
                                    label: t
                                })
                            },
                            d = (0, n.jsx)("button", {
                                type: "button",
                                onClick: o,
                                className: "absolute bottom-3 right-3 inline-flex size-5 items-center justify-center rounded-full bg-background/90 text-muted-foreground shadow-sm ring-1 ring-border/60 transition hover:text-foreground",
                                "aria-label": "Expand ".concat(t),
                                children: (0, n.jsx)(I.Z, {
                                    className: "size-3"
                                })
                            });
                        return "model" === l ? (0, n.jsxs)("div", {
                            className: "group relative",
                            children: [a, d]
                        }) : (0, n.jsxs)("div", {
                            className: "group relative",
                            children: [(0, n.jsx)("div", {
                                role: "button",
                                tabIndex: 0,
                                onClick: o,
                                onKeyDown: e => {
                                    ("Enter" === e.key || " " === e.key) && o(e)
                                },
                                className: "block cursor-pointer rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                                "aria-label": "Open preview of ".concat(t),
                                children: a
                            }), "document" === l && d]
                        })
                    }, [b, u, v, r]);
                return 0 === m.length ? (0, n.jsx)("div", {
                    className: "size-full overflow-auto",
                    children: (0, n.jsx)("div", {
                        className: "p-8",
                        children: (0, n.jsx)("div", {
                            className: "mx-auto max-w-2xl",
                            children: (0, n.jsxs)("div", {
                                className: "py-12 text-center",
                                children: [(0, n.jsx)(M.Z, {
                                    className: "mx-auto mb-4 size-12 text-muted-foreground/50"
                                }), (0, n.jsx)("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "No objects to preview"
                                })]
                            })
                        })
                    })
                }) : (0, n.jsxs)("div", {
                    className: "size-full overflow-auto",
                    children: [(0, n.jsx)("div", {
                        className: "p-4",
                        children: (0, n.jsx)("div", {
                            className: "mx-auto max-w-4xl space-y-6",
                            children: m.map(e => {
                                let t = h.has(e.key),
                                    {
                                        group: s,
                                        object: i,
                                        key: a,
                                        isFirst: l,
                                        displayTitle: r
                                    } = e;
                                return l ? (0, n.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, n.jsx)("div", {
                                        className: "px-1",
                                        children: (0, n.jsx)("p", {
                                            className: "text-sm font-semibold text-foreground",
                                            children: r
                                        })
                                    }), w(i, r)]
                                }, a) : (0, n.jsxs)("div", {
                                    className: "space-y-3 transition-all duration-200",
                                    children: [(0, n.jsxs)("button", {
                                        onClick: () => x(a),
                                        className: "flex w-full items-center justify-between px-1 py-2 text-left",
                                        children: [(0, n.jsx)("p", {
                                            className: "truncate text-sm font-semibold text-foreground",
                                            children: r
                                        }), (0, n.jsx)("span", {
                                            className: "ml-3 flex size-5 items-center justify-center rounded-full bg-gray-100 text-xs text-muted-foreground dark:bg-gray-800",
                                            children: t ? (0, n.jsx)(T.Z, {
                                                className: "size-3"
                                            }) : (0, n.jsx)(O.Z, {
                                                className: "size-3"
                                            })
                                        })]
                                    }), t && (0, n.jsx)("div", {
                                        children: w(i, r)
                                    })]
                                }, a)
                            })
                        })
                    }), (0, n.jsx)(Z.d1, {
                        open: (null == j ? void 0 : j.type) === "video",
                        onOpenChange: e => !e && y(null),
                        src: (null == j ? void 0 : j.type) === "video" ? j.src : "",
                        label: null !== (t = null == j ? void 0 : j.label) && void 0 !== t ? t : "Focused preview"
                    }), (0, n.jsx)(Z.HX, {
                        open: (null == j ? void 0 : j.type) === "document",
                        onOpenChange: e => !e && y(null),
                        label: null !== (s = null == j ? void 0 : j.label) && void 0 !== s ? s : "Focused document",
                        description: "Focused document preview. Press escape or click outside to return.",
                        sized: !0,
                        children: (0, n.jsx)("div", {
                            className: "h-[85vh] w-full overflow-hidden rounded-lg bg-white text-foreground dark:bg-gray-900",
                            children: (null == j ? void 0 : j.type) === "document" ? "application/pdf" === j.mimetype ? (0, n.jsx)(P.H, {
                                pdfUrl: j.src,
                                responseUrl: "",
                                showBoundingBoxes: !1
                            }, j.src) : (0, n.jsx)("iframe", {
                                src: j.src,
                                className: "size-full border-0",
                                title: j.label,
                                sandbox: "allow-scripts allow-same-origin"
                            }) : null
                        })
                    }), (0, n.jsx)(Z.HX, {
                        open: (null == j ? void 0 : j.type) === "model",
                        onOpenChange: e => !e && y(null),
                        label: null !== (i = null == j ? void 0 : j.label) && void 0 !== i ? i : "Focused 3D model",
                        description: "Focused 3D reconstruction. Drag to orbit, scroll to zoom. Press escape or click outside to return.",
                        sized: !0,
                        children: (0, n.jsx)("div", {
                            className: "aspect-video max-h-[90vh] w-full overflow-hidden rounded-lg bg-black",
                            children: (null == j ? void 0 : j.type) === "model" ? (0, n.jsx)(U.SparkModelViewer, {
                                url: j.src,
                                fileType: j.fileType,
                                className: "size-full rounded-none",
                                hideBuiltInControls: !0
                            }) : null
                        })
                    })]
                })
            }

            function $(e) {
                let {
                    artifact: t,
                    onClose: s
                } = e, i = e => {
                    var t;
                    let s = e => {
                            let t = {
                                type: e.type
                            };
                            if (e.description && (t.description = e.description), e.format && (t.format = e.format), e.enum && (t.enum = e.enum), e.minLength && (t.minLength = e.minLength), e.maxLength && (t.maxLength = e.maxLength), void 0 !== e.minimum && (t.minimum = e.minimum), void 0 !== e.maximum && (t.maximum = e.maximum), e.pattern && (t.pattern = e.pattern), void 0 !== e.defaultValue && (t.default = e.defaultValue), "object" === e.type && e.properties) {
                                let n = {},
                                    i = [];
                                Object.entries(e.properties).forEach(e => {
                                    let [t, a] = e;
                                    n[t] = s(a), a.required && i.push(t)
                                }), t.properties = n, i.length && (t.required = i)
                            }
                            return "array" === e.type && e.items && (t.items = s(e.items)), t
                        },
                        n = {},
                        i = [];
                    return e.fields.forEach(e => {
                        n[e.name] = s(e), e.required && i.push(e.name)
                    }), {
                        $schema: e.$schema || "http://json-schema.org/draft-07/schema#",
                        title: e.title,
                        description: e.description,
                        type: e.type || "object",
                        properties: n,
                        ...i.length && {
                            required: i
                        },
                        additionalProperties: null !== (t = e.additionalProperties) && void 0 !== t && t
                    }
                }, a = () => {
                    if ("schema" === t.type && t.schema) return (0, n.jsx)("div", {
                        className: "size-full p-4",
                        children: (0, n.jsx)(C.Z, {
                            schema: i(t.schema),
                            mode: "editable",
                            className: "h-full",
                            showModeBadge: !1,
                            onSchemaUpdate: () => {}
                        })
                    });
                    if ("preview" === t.type && t.previewObjects) {
                        var e, s;
                        return (0, n.jsx)(N.x, {
                            className: "size-full bg-white",
                            children: (0, n.jsx)(Y, {
                                data: t.previewObjects,
                                sessionId: t.sessionId || "",
                                artifactId: t.id,
                                streams: null !== (s = null === (e = t.previewCards) || void 0 === e ? void 0 : e.map(e => e.stream)) && void 0 !== s ? s : t.previewCard ? [t.previewCard] : [],
                                showAllPreviews: !0
                            })
                        })
                    }
                    return (0, n.jsx)("div", {
                        className: "size-full overflow-auto",
                        children: (0, n.jsx)("div", {
                            className: "p-6",
                            children: (0, n.jsx)(l.Suspense, {
                                fallback: (0, n.jsx)("pre", {
                                    className: "overflow-x-auto text-xs",
                                    children: t.content
                                }),
                                children: (0, n.jsx)(j.s, {
                                    language: t.language || "text",
                                    style: b.Z,
                                    customStyle: {
                                        margin: 0,
                                        borderRadius: "0.375rem",
                                        fontSize: "12px",
                                        minWidth: "max-content",
                                        overflowX: "auto",
                                        whiteSpace: "pre",
                                        wordWrap: "normal",
                                        wordBreak: "normal",
                                        tabSize: 2
                                    },
                                    wrapLines: !1,
                                    wrapLongLines: !1,
                                    showLineNumbers: !1,
                                    children: t.content
                                })
                            })
                        })
                    })
                };
                return "preview" === t.type ? (0, n.jsx)("div", {
                    className: "size-full bg-white",
                    children: a()
                }) : (0, n.jsx)("div", {
                    className: "relative z-50 flex size-full flex-col bg-white",
                    children: (0, n.jsxs)(w.Zb, {
                        className: "flex size-full flex-col border-0 shadow-none",
                        children: [(0, n.jsx)(w.Ol, {
                            className: "relative z-50 flex items-center px-4 py-2",
                            children: (0, n.jsx)("div", {
                                className: "relative flex w-full items-center justify-between",
                                children: (0, n.jsx)("div", {
                                    className: "flex flex-1 items-center gap-3",
                                    children: (0, n.jsx)(y.z, {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: () => {
                                            s()
                                        },
                                        className: "pointer-events-auto relative z-[100] size-9 rounded-lg p-0 hover:bg-accent/80 md:hidden",
                                        title: "Back to chat",
                                        children: (0, n.jsx)(g.Z, {
                                            className: "size-4"
                                        })
                                    })
                                })
                            })
                        }), (0, n.jsx)(w.aY, {
                            className: "relative w-full flex-1 overflow-hidden p-0",
                            children: (0, n.jsx)("div", {
                                className: "relative z-0 size-full overflow-auto bg-white",
                                children: a()
                            })
                        })]
                    })
                })
            }
            var G = s(20653),
                Q = s(30755),
                J = s(28485),
                ee = s(58319),
                et = s(30401),
                es = s(32489),
                en = s(67782),
                ei = s(86595),
                ea = s(74394),
                el = s(18930),
                er = s(8102),
                eo = s(26110),
                ed = s(14438);

            function ec(e) {
                let {
                    chatId: t,
                    chatTitle: s,
                    onDeleteChat: i,
                    open: a,
                    onOpenChange: r
                } = e, [o, d] = (0, l.useState)(!1), c = async () => {
                    if (i) {
                        d(!0);
                        try {
                            await i(t), ed.Am.success("Chat deleted", {
                                description: "".concat(s, " deleted successfully.")
                            }), null == r || r(!1)
                        } catch (e) {
                            ed.Am.error("Failed to delete chat", {
                                description: "Please try again."
                            })
                        } finally {
                            d(!1)
                        }
                    }
                };
                return (0, n.jsx)(eo.Vq, {
                    open: a,
                    onOpenChange: r,
                    children: (0, n.jsxs)(eo.cZ, {
                        className: "sm:max-w-md",
                        children: [(0, n.jsxs)(eo.fK, {
                            children: [(0, n.jsx)(eo.$N, {
                                className: "text-lg",
                                children: "Delete chat?"
                            }), (0, n.jsxs)(eo.Be, {
                                className: "mt-1",
                                children: ["This will permanently delete ", (0, n.jsx)("span", {
                                    className: "font-semibold text-foreground",
                                    children: s
                                })]
                            })]
                        }), (0, n.jsxs)(eo.cN, {
                            children: [(0, n.jsx)(y.z, {
                                variant: "outline",
                                size: "sm",
                                onClick: () => {
                                    null == r || r(!1)
                                },
                                disabled: o,
                                children: "Cancel"
                            }), (0, n.jsx)(y.z, {
                                variant: "destructive",
                                size: "sm",
                                onClick: c,
                                disabled: o,
                                children: o ? "Deleting..." : "Delete"
                            })]
                        })]
                    })
                })
            }
            let eu = e => {
                    let {
                        className: t = "",
                        delay: s = 0
                    } = e;
                    return (0, n.jsx)("div", {
                        className: "relative h-3 overflow-hidden rounded-md bg-muted/25 ".concat(t),
                        children: (0, n.jsx)("div", {
                            className: "absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-background/60 to-transparent",
                            style: {
                                animationDelay: "".concat(s, "s")
                            }
                        })
                    })
                },
                em = e => {
                    let {
                        delay: t = 0
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: "space-y-2 px-3 py-2",
                        children: [(0, n.jsx)(eu, {
                            className: "h-4 w-3/4",
                            delay: t
                        }), (0, n.jsx)(eu, {
                            className: "h-3 w-1/2",
                            delay: t + .1
                        })]
                    })
                },
                eh = () => (0, n.jsxs)("div", {
                    className: "flex flex-col space-y-1 py-4",
                    children: [Array.from({
                        length: 6
                    }).map((e, t) => (0, n.jsx)(em, {
                        delay: .1 * t
                    }, t)), (0, n.jsx)("style", {
                        children: "\n                @keyframes shimmer {\n                    100% {\n                        transform: translateX(100%);\n                    }\n                }\n            "
                    })]
                });
            var ep = s(84234);
            let ef = [{
                key: "pinned",
                title: "Starred"
            }, {
                key: "today",
                title: "Today",
                daysAgo: 0
            }, {
                key: "yesterday",
                title: "Yesterday",
                daysAgo: 1
            }, {
                key: "previous7Days",
                title: "Previous 7 days",
                daysAgo: 7
            }, {
                key: "previous30Days",
                title: "Previous 30 days",
                daysAgo: 30
            }, {
                key: "older",
                title: "Older"
            }];

            function ex(e) {
                let {
                    title: t,
                    count: s,
                    isCollapsed: i,
                    onToggle: a
                } = e, [r, o] = (0, l.useState)(!1);
                return 0 === s ? null : (0, n.jsxs)("div", {
                    className: "mt-1 flex cursor-pointer items-center gap-1 rounded-md px-4 py-1.5 text-xs text-muted-foreground/80 transition-colors hover:bg-muted/20 hover:text-muted-foreground/90",
                    onClick: a,
                    onMouseEnter: () => o(!0),
                    onMouseLeave: () => o(!1),
                    children: [(0, n.jsx)("span", {
                        children: t
                    }), r && (0, n.jsx)(T.Z, {
                        className: (0, p.cn)("size-3 transition-transform", i && "-rotate-90")
                    })]
                })
            }

            function ev(e) {
                let {
                    chats: t,
                    currentChatId: s,
                    onChatSelect: i,
                    isLoading: a = !1,
                    isLoadingMore: r = !1,
                    hasMore: o = !1,
                    error: d = null,
                    onLoadMore: c,
                    onRefresh: u,
                    onRenameChat: m,
                    onDeleteChat: h,
                    onPinChat: p,
                    onShareChat: f
                } = e, [x, v] = (0, l.useState)(null), [g, b] = (0, l.useState)({
                    pinned: !1,
                    today: !1,
                    yesterday: !1,
                    previous7Days: !1,
                    previous30Days: !1,
                    older: !1
                }), [j, w] = (0, l.useState)(!1), [N, C] = (0, l.useState)(null), [k, z] = (0, l.useState)(!1), S = (0, l.useRef)(null), {
                    isSuperUser: L
                } = (0, er.L)(), E = (0, l.useMemo)(() => {
                    let e = new Date(Date.now());
                    e.setHours(0, 0, 0, 0);
                    let s = e.getTime(),
                        n = {
                            pinned: [],
                            today: [],
                            yesterday: [],
                            previous7Days: [],
                            previous30Days: [],
                            older: []
                        };
                    for (let e of t) {
                        if (e.is_pinned) {
                            n.pinned.push(e);
                            continue
                        }
                        let t = new Date(e.last_accessed_at || e.created_at);
                        t.setHours(0, 0, 0, 0);
                        let i = t.getTime();
                        i >= s ? n.today.push(e) : i >= s - 864e5 ? n.yesterday.push(e) : i >= s - 6048e5 ? n.previous7Days.push(e) : i >= s - 2592e6 ? n.previous30Days.push(e) : n.older.push(e)
                    }
                    return n
                }, [t]);
                (0, l.useEffect)(() => {
                    if (!x) return;
                    let e = e => {
                        S.current && !S.current.contains(e.target) && v(null)
                    };
                    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
                }, [x]);
                let _ = (0, l.useCallback)(() => v(null), []),
                    D = (0, l.useCallback)(e => {
                        b(t => ({
                            ...t,
                            [e]: !t[e]
                        }))
                    }, []),
                    M = (0, l.useCallback)(e => e.map(e => (0, n.jsx)(eg, {
                        chat: e,
                        isSelected: e.session_id === s,
                        onSelect: i,
                        onMenuToggle: e => v(t => t === e ? null : e),
                        onRename: m,
                        onDelete: h,
                        onPin: p,
                        onShare: f,
                        onOpenShareDialog: e => {
                            C(e), w(!0), _()
                        },
                        isMenuOpen: x === (e.id || e.session_id),
                        onCloseMenu: _
                    }, e.id || e.session_id)), [s, i, m, h, p, f, x, _]);
                return a && 0 === t.length ? (0, n.jsx)(eh, {}) : d && 0 === t.length ? (0, n.jsxs)("div", {
                    className: "flex flex-col items-center justify-center px-4 py-8 text-center",
                    children: [(0, n.jsx)("div", {
                        className: "mb-3 flex size-12 items-center justify-center rounded-full bg-destructive/10",
                        children: (0, n.jsx)("div", {
                            className: "size-6 rounded-full bg-destructive"
                        })
                    }), (0, n.jsx)("h3", {
                        className: "mb-1 text-sm text-foreground",
                        children: "Failed to load chats"
                    }), (0, n.jsx)("p", {
                        className: "mb-3 text-xs text-muted-foreground/70",
                        children: d
                    }), u && (0, n.jsx)(y.z, {
                        variant: "outline",
                        size: "sm",
                        onClick: u,
                        children: "Try Again"
                    })]
                }) : (0, n.jsxs)("div", {
                    ref: S,
                    children: [ef.map(e => {
                        let {
                            key: t,
                            title: s
                        } = e, i = E[t];
                        return 0 === i.length ? null : (0, n.jsxs)(l.Fragment, {
                            children: [(0, n.jsx)(ex, {
                                title: s,
                                count: i.length,
                                isCollapsed: g[t],
                                onToggle: () => D(t)
                            }), !g[t] && M(i)]
                        }, t)
                    }), o && c && (0, n.jsx)("div", {
                        className: "mx-2 py-2",
                        children: (0, n.jsx)(y.z, {
                            variant: "ghost",
                            size: "sm",
                            onClick: c,
                            disabled: r,
                            className: "w-full text-xs",
                            children: r ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("div", {
                                    className: "mr-2 size-3 animate-spin rounded-full border-b border-current"
                                }), "Loading more..."]
                            }) : "Load more chats"
                        })
                    }), 0 === t.length && !a && !d && (0, n.jsx)(ej, {}), d && t.length > 0 && (0, n.jsxs)("div", {
                        className: "px-3 py-2 text-center",
                        children: [(0, n.jsx)("p", {
                            className: "mb-2 text-xs text-destructive",
                            children: d
                        }), u && (0, n.jsx)(y.z, {
                            variant: "outline",
                            size: "sm",
                            onClick: u,
                            className: "text-xs",
                            children: "Retry"
                        })]
                    }), N && (0, n.jsx)(ep.g, {
                        isOpen: j,
                        onOpenChange: w,
                        sessionId: N.session_id,
                        chatTitle: N.title,
                        isShared: N.is_public,
                        isLoading: k,
                        canToggleLockdown: L,
                        defaultLockdown: !1,
                        onShare: async () => {
                            z(!0);
                            try {
                                await (null == f ? void 0 : f(N.id || N.session_id, !0))
                            } finally {
                                z(!1)
                            }
                        },
                        onStopSharing: async () => {
                            z(!0);
                            try {
                                await (null == f ? void 0 : f(N.id || N.session_id, !1))
                            } finally {
                                z(!1)
                            }
                        }
                    })]
                })
            }
            let eg = l.memo(function(e) {
                let {
                    chat: t,
                    isSelected: s,
                    onSelect: i,
                    onMenuToggle: a,
                    onRename: r,
                    onDelete: o,
                    onPin: d,
                    onShare: c,
                    onOpenShareDialog: u,
                    isMenuOpen: m,
                    onCloseMenu: h
                } = e, [f, x] = (0, l.useState)(!1), [v, g] = (0, l.useState)(""), [b, j] = (0, l.useState)(!1), w = (0, l.useRef)(null), N = t.title || "Untitled Chat", C = t.id || t.session_id, k = () => {
                    x(!1), g("")
                }, z = () => {
                    let e = v.trim();
                    e && e !== N && (null == r || r(C, e)), x(!1), g("")
                };
                return (0, n.jsxs)("div", {
                    "data-chat-id": C,
                    className: (0, p.cn)("group relative mx-2 cursor-pointer rounded-lg py-1 pl-3 pr-1 duration-150", s ? "bg-muted/70" : "hover:bg-muted/30"),
                    children: [(0, n.jsxs)("div", {
                        className: "flex items-start gap-0",
                        style: {
                            height: "24.5px"
                        },
                        children: [(0, n.jsx)("div", {
                            className: "min-w-0 flex-1 overflow-hidden pr-2",
                            onClick: () => {
                                f || (null == h || h(), i(t))
                            },
                            children: f ? (0, n.jsx)("input", {
                                ref: w,
                                type: "text",
                                value: v,
                                onChange: e => g(e.target.value),
                                onKeyDown: e => {
                                    "Enter" === e.key ? (e.preventDefault(), z()) : "Escape" === e.key && (e.preventDefault(), k())
                                },
                                className: "w-full rounded border border-gray-200 bg-transparent px-1 py-0.5 text-sm text-foreground focus:outline-none",
                                onClick: e => e.stopPropagation()
                            }) : (0, n.jsx)("p", {
                                className: "truncate text-sm",
                                children: N
                            })
                        }), (0, n.jsx)("div", {
                            className: "shrink-0",
                            children: f ? (0, n.jsxs)("div", {
                                className: "ml-1 flex gap-0",
                                children: [(0, n.jsx)(y.z, {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: e => {
                                        e.stopPropagation(), z()
                                    },
                                    className: "!h-6 !w-6 p-0 text-green-600 opacity-100 hover:bg-green-100",
                                    children: (0, n.jsx)(et.Z, {
                                        className: "size-3"
                                    })
                                }), (0, n.jsx)(y.z, {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: e => {
                                        e.stopPropagation(), k()
                                    },
                                    className: "!h-6 !w-6 p-0 text-red-600 opacity-100 hover:bg-red-100",
                                    children: (0, n.jsx)(es.Z, {
                                        className: "size-3"
                                    })
                                })]
                            }) : (0, n.jsx)(y.z, {
                                variant: "ghost",
                                size: "icon",
                                onClick: e => {
                                    e.stopPropagation(), null == a || a(C)
                                },
                                className: "!h-6 !w-6 p-0 opacity-0 transition-opacity hover:bg-muted/50 group-hover:opacity-100",
                                children: (0, n.jsx)(en.Z, {
                                    className: "size-3"
                                })
                            })
                        })]
                    }), m && (0, n.jsx)(eb, {
                        chat: t,
                        onRename: () => {
                            g(N), x(!0), null == h || h(), setTimeout(() => {
                                var e, t;
                                null === (e = w.current) || void 0 === e || e.focus(), null === (t = w.current) || void 0 === t || t.select()
                            }, 0)
                        },
                        onDelete: o,
                        onPin: d,
                        onShare: c,
                        onOpenShareDialog: u,
                        onClose: h || (() => {}),
                        onDeleteDialogOpenChange: j
                    }), o && b && (0, n.jsx)(ec, {
                        chatId: C,
                        chatTitle: t.title || "Chat - ".concat(t.session_id.slice(0, 8)),
                        onDeleteChat: o,
                        open: b,
                        onOpenChange: j
                    })]
                })
            });

            function eb(e) {
                let {
                    chat: t,
                    onRename: s,
                    onDelete: i,
                    onPin: a,
                    onShare: r,
                    onOpenShareDialog: o,
                    onClose: d,
                    onDeleteDialogOpenChange: c
                } = e, [u, m] = (0, l.useState)("bottom"), h = (0, l.useRef)(null), f = t.id || t.session_id;
                return (0, l.useEffect)(() => {
                    if (h.current) {
                        let e = h.current.getBoundingClientRect();
                        m(e.bottom > window.innerHeight - 20 && e.top > e.bottom - window.innerHeight ? "top" : "bottom")
                    }
                }, []), (0, n.jsxs)("div", {
                    ref: h,
                    className: (0, p.cn)("absolute right-2 z-50 min-w-[140px] rounded-md border border-border/50 bg-background py-1", "top" === u ? "bottom-8" : "top-8"),
                    onClick: e => e.stopPropagation(),
                    children: [(0, n.jsxs)("button", {
                        className: "flex w-full items-center gap-2 px-3 py-1.5 text-xs transition-colors hover:bg-muted/50",
                        onClick: () => {
                            null == a || a(f, !t.is_pinned), d()
                        },
                        children: [(0, n.jsx)(ei.Z, {
                            className: (0, p.cn)("size-3", t.is_pinned && "fill-current text-yellow-500")
                        }), t.is_pinned ? "Unstar" : "Star"]
                    }), (0, n.jsxs)("button", {
                        className: "flex w-full items-center gap-2 px-3 py-1.5 text-xs transition-colors hover:bg-muted/50",
                        onClick: () => {
                            null == o || o(t), d()
                        },
                        children: [(0, n.jsx)(ea.Z, {
                            className: (0, p.cn)("size-3", t.is_public && "text-blue-500")
                        }), "Share"]
                    }), i && (0, n.jsxs)("button", {
                        className: "flex w-full items-center gap-2 px-3 py-1.5 text-xs text-destructive transition-colors hover:bg-destructive/10",
                        onClick: e => {
                            e.stopPropagation(), null == c || c(!0), d()
                        },
                        children: [(0, n.jsx)(el.Z, {
                            className: "size-3"
                        }), "Delete"]
                    })]
                })
            }

            function ej() {
                return (0, n.jsxs)("div", {
                    className: "flex flex-col items-center justify-center px-4 py-8 text-center",
                    children: [(0, n.jsx)("div", {
                        className: "mb-3 flex size-12 items-center justify-center rounded-full bg-muted/20",
                        children: (0, n.jsx)("div", {
                            className: "size-6 rounded-full bg-muted-foreground/20"
                        })
                    }), (0, n.jsx)("h3", {
                        className: "mb-1 text-sm text-foreground",
                        children: "No conversations yet"
                    }), (0, n.jsx)("p", {
                        className: "text-xs text-muted-foreground/70",
                        children: "Start a new chat to begin your conversation history"
                    })]
                })
            }
            var ey = s(74720);
            let ew = "bg-background border-r border-border/40",
                eN = {
                    width: "w-64",
                    collapsedWidth: "w-12",
                    mobileHamburger: "fixed top-2 left-2 z-50 h-10 w-10 p-0 hover:bg-accent/50 border border-border/90 transition-all duration-300 ease-in-out flex items-center justify-center rounded-full bg-background/80 backdrop-blur-xl ".concat(x.ul.hideMobile, " animate-in fade-in-0 slide-in-from-left-2"),
                    mobileOverlay: "fixed inset-0 bg-black/50 z-10 ".concat(x.ul.hideMobile, " transition-opacity duration-300 ease-in-out")
                };

            function eC(e) {
                let {
                    isOpen: t,
                    onToggle: s,
                    onChatSelect: i,
                    onNewChat: a,
                    currentChatId: r,
                    chats: o,
                    isLoading: c,
                    isLoadingMore: u,
                    hasMore: m,
                    error: h,
                    onLoadMore: p,
                    onRefresh: f,
                    onRenameChat: v,
                    onDeleteChat: g,
                    onPinChat: b,
                    onShareChat: j,
                    onOcrModeChange: y
                } = e;
                (0, d.useRouter)();
                let {
                    isNarrow: w,
                    mounted: N
                } = (0, x.sT)(), C = (0, l.useMemo)(() => [...o].sort((e, t) => {
                    if (e.is_pinned && !t.is_pinned) return -1;
                    if (!e.is_pinned && t.is_pinned) return 1;
                    let s = new Date(e.last_accessed_at || e.created_at).getTime();
                    return new Date(t.last_accessed_at || t.created_at).getTime() - s
                }), [o]), k = (0, l.useCallback)(e => {
                    i(e), w && t && s()
                }, [i, w, t, s]), z = (0, l.useMemo)(() => ({
                    chats: C,
                    currentChatId: r,
                    onNewChat: a,
                    onToggle: s,
                    isLoading: c,
                    isLoadingMore: u,
                    hasMore: m,
                    error: h,
                    onLoadMore: p,
                    onRefresh: f,
                    onRenameChat: v,
                    onDeleteChat: g,
                    onPinChat: b,
                    onShareChat: j,
                    onOcrModeChange: y
                }), [C, r, a, s, c, u, m, h, p, f, v, g, b, j, y]);
                return N ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(ek, {
                        visible: w && !t,
                        onToggle: s
                    }), (0, n.jsx)(ez, {
                        visible: w && t,
                        onClose: s
                    }), (0, n.jsx)(eL, {
                        visible: !w && !t,
                        onToggle: s,
                        onNewChat: a
                    }), (0, n.jsx)(eE, {
                        ...z,
                        isVisible: !!w || t,
                        onChatSelect: k,
                        isMobile: w,
                        actuallyVisible: t
                    })]
                }) : (0, n.jsx)(eS, {
                    ...z,
                    isOpen: t,
                    onChatSelect: i
                })
            }

            function ek(e) {
                let {
                    visible: t,
                    onToggle: s
                } = e;
                return t ? (0, n.jsx)(y.z, {
                    variant: "ghost",
                    size: "sm",
                    onClick: s,
                    className: eN.mobileHamburger,
                    children: (0, n.jsx)(G.rrd, {
                        className: "size-6 text-muted-foreground transition-transform duration-200 hover:scale-110"
                    })
                }) : null
            }

            function ez(e) {
                let {
                    visible: t,
                    onClose: s
                } = e;
                return t ? (0, n.jsx)("div", {
                    className: eN.mobileOverlay,
                    onClick: s
                }) : null
            }

            function eS(e) {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(eL, {
                        visible: !e.isOpen,
                        onToggle: e.onToggle,
                        onNewChat: e.onNewChat
                    }), (0, n.jsx)(eE, {
                        ...e,
                        isVisible: e.isOpen,
                        isMobile: !1,
                        actuallyVisible: e.isOpen
                    })]
                })
            }

            function eL(e) {
                let {
                    visible: t,
                    onToggle: s,
                    onNewChat: i
                } = e, [a, o] = (0, l.useState)(!1);
                return t ? (0, n.jsxs)("aside", {
                    className: (0, p.cn)("absolute left-0 top-0 z-20 flex h-full flex-col items-center justify-between", ew, eN.collapsedWidth),
                    children: [(0, n.jsxs)("div", {
                        className: "space-y-2 pt-3.5",
                        children: [(0, n.jsx)(y.z, {
                            variant: "ghost",
                            size: "sm",
                            onClick: s,
                            onMouseEnter: () => o(!0),
                            onMouseLeave: () => o(!1),
                            className: "flex size-8 items-center justify-center border-0 p-0 transition-all duration-200 hover:bg-accent/50",
                            children: a ? (0, n.jsx)(Q.Z, {
                                className: "size-4 text-muted-foreground"
                            }) : (0, n.jsx)(r.default, {
                                src: "/vlm-blue.svg",
                                alt: "VLM Run",
                                width: 24,
                                height: 24,
                                priority: !0
                            })
                        }), (0, n.jsx)(y.z, {
                            variant: "ghost",
                            size: "sm",
                            onClick: i,
                            className: "flex size-8 items-center justify-center border-0 p-0 transition-all duration-200 hover:bg-accent/50",
                            children: (0, n.jsx)(m.Z, {
                                className: "size-4 text-muted-foreground"
                            })
                        })]
                    }), (0, n.jsx)("div", {
                        className: "flex items-center justify-center pb-3.5",
                        children: (0, n.jsx)(ee.a, {
                            collapsed: !0,
                            chatMode: !0
                        })
                    })]
                }) : null
            }

            function eE(e) {
                var t;
                return e.isVisible ? (0, n.jsx)("aside", {
                    className: (() => {
                        let t = (0, p.cn)("absolute top-0 h-full", ew),
                            s = e.isMobile ? "z-30" : "z-20";
                        if (e.isMobile) {
                            let n = e.actuallyVisible ? "translate-x-0" : "-translate-x-full";
                            return (0, p.cn)(t, eN.width, s, "left-0 transition-transform duration-300 ease-in-out", n)
                        }
                        return (0, p.cn)(t, eN.width, s, "left-0")
                    })(),
                    children: (0, n.jsxs)("div", {
                        className: "flex h-full flex-col",
                        children: [(0, n.jsx)(e_, {
                            onClose: e.onToggle
                        }), e.onOcrModeChange && (0, n.jsx)("div", {
                            className: "mx-3 mb-2",
                            children: (0, n.jsx)(ey.d, {
                                mode: "chat",
                                onChange: e.onOcrModeChange,
                                fullWidth: !0
                            })
                        }), (0, n.jsx)(eD, {
                            onClick: () => {
                                e.onNewChat(), e.isMobile && e.actuallyVisible && e.onToggle()
                            }
                        }), (0, n.jsx)(eI, {
                            ...e
                        }), (0, n.jsx)(J.G, {
                            isOpen: null !== (t = e.actuallyVisible) && void 0 !== t ? t : e.isVisible
                        }), (0, n.jsx)(ee.a, {
                            chatMode: !0
                        })]
                    })
                }) : null
            }

            function e_(e) {
                let {
                    onClose: t
                } = e;
                return (0, n.jsxs)("div", {
                    className: "ml-3.5 flex items-center justify-between py-4",
                    children: [(0, n.jsx)(o.default, {
                        href: "".concat("https://app.vlm.run", "/dashboard"),
                        className: "flex items-center gap-2 transition-opacity hover:opacity-80",
                        children: (0, n.jsx)(r.default, {
                            src: "/vlm-blue.svg",
                            alt: "VLM Run",
                            width: 24,
                            height: 24,
                            className: "shrink-0"
                        })
                    }), (0, n.jsx)(y.z, {
                        variant: "ghost",
                        size: "sm",
                        onClick: t,
                        className: "mr-3.5 size-7 shrink-0 p-0 hover:bg-muted/50",
                        children: (0, n.jsx)(Q.Z, {
                            className: "size-4"
                        })
                    })]
                })
            }

            function eD(e) {
                let {
                    onClick: t
                } = e;
                return (0, n.jsx)("div", {
                    className: "mx-1",
                    children: (0, n.jsxs)(y.z, {
                        variant: "ghost",
                        size: "sm",
                        onClick: t,
                        className: "w-full justify-start pl-3 pr-1 text-sm font-normal text-foreground hover:bg-accent/50 hover:text-foreground",
                        children: [(0, n.jsx)(m.Z, {
                            className: "mr-2 size-4"
                        }), "New Chat"]
                    })
                })
            }

            function eM(e) {
                return e.current ? e.current.querySelector("[data-radix-scroll-area-viewport]") : null
            }

            function eI(e) {
                var t, s, i;
                let a = l.useRef(null);
                return t = "chatSidebar.scrollTop", l.useEffect(() => {
                    let e = eM(a);
                    if (!e) return;
                    let s = sessionStorage.getItem(t),
                        n = s ? parseInt(s, 10) : NaN;
                    Number.isNaN(n) || (e.scrollTop = n);
                    let i = () => sessionStorage.setItem(t, String(e.scrollTop));
                    return e.addEventListener("scroll", i), () => e.removeEventListener("scroll", i)
                }, [a, t]), s = e.currentChatId, i = e.chats.length, l.useEffect(() => {
                    let e = eM(a);
                    if (!e || !s) return;
                    let t = '[data-chat-id="'.concat(CSS.escape(s), '"]'),
                        n = e.querySelector(t);
                    if (!n) return;
                    let i = e.getBoundingClientRect(),
                        l = n.getBoundingClientRect();
                    if (l.top >= i.top && l.bottom <= i.bottom) return;
                    let r = Math.max(0, n.offsetTop - e.clientHeight / 2);
                    e.scrollTop = r
                }, [a, s, i]), (0, n.jsx)(N.x, {
                    ref: a,
                    className: "flex-1 [&>[data-radix-scroll-area-viewport]>div]:!block [&>[data-radix-scroll-area-viewport]>div]:!w-full",
                    children: (0, n.jsx)(ev, {
                        chats: e.chats,
                        currentChatId: e.currentChatId,
                        onChatSelect: e.onChatSelect,
                        onNewChat: void 0,
                        isLoading: e.isLoading,
                        isLoadingMore: e.isLoadingMore,
                        hasMore: e.hasMore,
                        error: e.error,
                        onLoadMore: e.onLoadMore,
                        onRefresh: e.onRefresh,
                        onRenameChat: e.onRenameChat,
                        onDeleteChat: e.onDeleteChat,
                        onPinChat: e.onPinChat,
                        onShareChat: e.onShareChat
                    })
                })
            }
            var eT = s(72144),
                eO = s(54353);

            function eW() {
                return (0, n.jsx)(eO.Kb, {})
            }

            function eR(e) {
                var t, s, i, g, b, j, y;
                let {
                    sessionId: w,
                    onSessionIdChange: N,
                    desktopViewportHeight: C,
                    showSidebar: k = !0,
                    customTitle: z,
                    showLogo: S = !0,
                    showInputBanner: L = !0,
                    inputBannerText: E = "Create Skill",
                    hideSkillSelector: _ = !1
                } = e, D = function() {
                    let [e, t] = (0, l.useState)(!1);
                    return (0, l.useEffect)(() => {
                        let e = () => {
                            let e = navigator.userAgent.toLowerCase(),
                                s = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e),
                                n = window.innerWidth < 768,
                                i = "ontouchstart" in window || navigator.maxTouchPoints > 0;
                            t(s || n && i)
                        };
                        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                    }, []), e
                }(), {
                    isNarrow: M
                } = (0, x.sT)(), I = (0, d.useSearchParams)(), [T, O] = (0, l.useState)(!1), [W, R] = (0, l.useState)(0), [Z, P] = (0, l.useState)(null), V = (0, v.useChatHistory)(), {
                    isBackendAuthenticated: F,
                    isAuthenticating: B,
                    isInitializing: A
                } = (0, c.a)(), H = (0, u.NL)(), U = (0, d.useRouter)(), q = (0, d.usePathname)(), K = (0, l.useRef)(null), X = (0, l.useRef)(null);
                (0, l.useEffect)(() => {
                    H.prefetchQuery(f.rv), H.prefetchQuery(f.HD)
                }, [H]);
                let Y = (() => {
                        if (q) {
                            if (q.startsWith("/chat/")) return q.split("/chat/")[1];
                            if (q.startsWith("/embed/chat/")) return q.split("/embed/chat/")[1];
                            if (q.startsWith("/embed/c/")) return q.split("/embed/c/")[1];
                            if (q.startsWith("/c/")) return q.split("/c/")[1]
                        }
                    })(),
                    G = null != Y ? Y : w,
                    Q = null == I ? void 0 : I.get("lockdown"),
                    J = !!((null == q ? void 0 : q.startsWith("/c/")) || (null == q ? void 0 : q.startsWith("/embed/c/")) || (null == q ? void 0 : q.startsWith("/embed/chat/"))) && ("1" === Q || "true" === Q),
                    ee = (null == I ? void 0 : I.get("hide_auth")) === "true" || (null == I ? void 0 : I.get("hide_auth")) === "1" || !!(null == q ? void 0 : q.startsWith("/embed/"));
                (0, l.useEffect)(() => {
                    if (!ee || window.parent === window) return;
                    let e = 0,
                        t = () => {
                            let t = Date.now();
                            if (!(t - e < 200)) {
                                e = t;
                                try {
                                    window.parent.postMessage({
                                        type: "vlm-chat-embed-activity"
                                    }, "*")
                                } catch (e) {}
                            }
                        };
                    return window.addEventListener("pointerdown", t, {
                        passive: !0
                    }), window.addEventListener("pointermove", t, {
                        passive: !0
                    }), window.addEventListener("keydown", t, {
                        passive: !0
                    }), window.addEventListener("focusin", t, {
                        passive: !0
                    }), window.addEventListener("wheel", t, {
                        passive: !0
                    }), () => {
                        window.removeEventListener("pointerdown", t), window.removeEventListener("pointermove", t), window.removeEventListener("keydown", t), window.removeEventListener("focusin", t), window.removeEventListener("wheel", t)
                    }
                }, [ee]);
                let et = k && !J && !ee && (F || B),
                    es = et && !T,
                    en = !et && !ee && !!Y,
                    ei = en && !J && !T;
                (0, l.useEffect)(() => {
                    M || (X.current = V.sidebarOpen)
                }, [M, V.sidebarOpen]), (0, l.useEffect)(() => {
                    let e = K.current;
                    if (K.current = M, null === e) {
                        M || (X.current = V.sidebarOpen);
                        return
                    }
                    if (!e && M) X.current = V.sidebarOpen, V.sidebarOpen && V.setSidebarOpen(!1, {
                        persist: !1
                    });
                    else if (e && !M) {
                        var t;
                        let e = null === (t = X.current) || void 0 === t || t;
                        V.setSidebarOpen(e)
                    }
                }, [M, V]), (0, l.useEffect)(() => {
                    if (G && !V.isLoading) {
                        let e = V.chats.find(e => e.session_id === G);
                        e && V.currentChatId !== G ? V.selectChat(e) : e || null === V.currentChatId || V.clearSelection()
                    } else G || null === V.currentChatId || V.clearSelection()
                }, [G, V]);
                let ea = (0, l.useCallback)(e => P(e), []),
                    el = (0, l.useCallback)(() => P(null), []),
                    er = !!(null == q ? void 0 : q.startsWith("/embed/chat")) || "/embed/c" === q || !!(null == q ? void 0 : q.startsWith("/embed/c/")),
                    eo = "/embed/chat",
                    ed = (null == q ? void 0 : q.startsWith("/embed/chat")) ? "/embed/chat" : "/embed/c",
                    ec = () => {
                        P(null), V.clearSelection(), U.push(er ? ed : "/c")
                    },
                    eu = (0, l.useCallback)(e => {
                        if (e.renderedMessages.length > 0 && e.sessionId) {
                            let t = null != q ? q : window.location.pathname,
                                s = "/embed/chat" === t || "/embed/c" === t;
                            if ("/chat" === t || "/c" === t || "/" === t || s) {
                                window.history.replaceState(null, "", "".concat(s ? eo : "/chat" === t ? "/chat" : "/c", "/").concat(e.sessionId));
                                let n = V.chats.find(t => t.session_id === e.sessionId);
                                n && V.currentChatId !== e.sessionId && V.selectChat(n)
                            }
                            null == N || N(e.sessionId)
                        }
                    }, [N, V, q]);
                (0, l.useEffect)(() => {
                    let e = e => {
                        if (!et || !((e.metaKey || e.ctrlKey) && ("\\" === e.key || "|" === e.key))) return;
                        let t = e.target;
                        t && ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable) || (e.preventDefault(), V.toggleSidebar())
                    };
                    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                }, [V, et]), (0, l.useEffect)(() => {
                    let e = document.documentElement,
                        t = document.body;
                    return e.classList.add("chat-full-height-root"), t.classList.add("chat-scroll-lock"), () => {
                        e.classList.remove("chat-full-height-root"), t.classList.remove("chat-scroll-lock")
                    }
                }, []), (0, l.useEffect)(() => {
                    if (!ee) return;
                    let e = document.documentElement,
                        t = document.body;
                    return e.classList.add("chat-embed-transparent"), t.classList.add("chat-embed-transparent"), () => {
                        e.classList.remove("chat-embed-transparent"), t.classList.remove("chat-embed-transparent")
                    }
                }, [ee]);
                let em = {
                        isOpen: V.sidebarOpen,
                        onToggle: V.toggleSidebar,
                        onChatSelect: e => {
                            V.selectChat(e), U.push("".concat(er ? eo : "/c", "/").concat(e.session_id))
                        },
                        onNewChat: ec,
                        currentChatId: V.currentChatId,
                        chats: V.chats,
                        isLoading: B || V.isLoading,
                        isLoadingMore: V.isLoadingMore,
                        hasMore: V.hasMore,
                        error: V.error,
                        onLoadMore: V.loadMoreChats,
                        onRefresh: V.refreshChats,
                        onRenameChat: async (e, t) => {
                            await V.renameChat(e, t)
                        },
                        onDeleteChat: async e => {
                            let t = V.chats.find(t => t.id === e || t.session_id === e),
                                s = null == t ? void 0 : t.session_id;
                            if (await V.deleteChat(e), s && s === G) {
                                V.clearSelection();
                                let e = (null == q ? void 0 : q.startsWith("/chat")) ? "/chat" : "/c";
                                U.push(e)
                            }
                        },
                        onPinChat: async (e, t) => {
                            await V.pinChat(e, t)
                        },
                        onShareChat: async (e, t) => {
                            await V.shareChat(e, t)
                        },
                        onOcrModeChange: ee || J ? void 0 : e => {
                            "ocr" === e && R(e => e + 1)
                        }
                    },
                    eh = es && !M,
                    ep = eh && !V.sidebarOpen ? 24 : 0,
                    ef = null !== (i = null == I ? void 0 : I.get("skill_id")) && void 0 !== i ? i : void 0,
                    ex = null !== (g = null == I ? void 0 : I.get("attachment_url")) && void 0 !== g ? g : void 0,
                    ev = null == I ? void 0 : I.get("attachment_type"),
                    eg = null !== (b = null == I ? void 0 : null === (t = I.get("file_ids")) || void 0 === t ? void 0 : t.split(",").filter(Boolean)) && void 0 !== b ? b : void 0,
                    eb = null !== (j = null == I ? void 0 : I.get("initial_message")) && void 0 !== j ? j : void 0,
                    ej = (null == I ? void 0 : I.get("auto_submit")) === "true",
                    ew = null == I ? void 0 : I.get("toolsets"),
                    eN = null != ew ? ew.split(",").filter(Boolean) : void 0,
                    ek = null !== (y = null == I ? void 0 : null === (s = I.get("models")) || void 0 === s ? void 0 : s.split(",").filter(Boolean)) && void 0 !== y ? y : void 0,
                    ez = {
                        sessionId: G,
                        onArtifactSelected: ea,
                        onStreamingStart: () => {},
                        onStreamingEnd: () => {},
                        onConversationUpdate: eu,
                        headerVisible: !ee,
                        isArtifactPanelOpen: !!Z,
                        onArtifactPanelClose: el,
                        isSidebarOpen: eh && V.sidebarOpen,
                        useCaseButtonOffsetPx: ep,
                        showPublicNewChatLink: en && !J,
                        lockdownView: J,
                        hideAuthButtons: ee,
                        customTitle: z,
                        showLogo: S && !ee,
                        showInputBanner: F && L,
                        inputBannerText: E,
                        hideSkillSelector: _,
                        initialSkillId: ef,
                        initialAttachmentUrl: ex,
                        initialAttachmentType: "image" === ev || "pdf" === ev || "audio" === ev || "video" === ev ? ev : void 0,
                        initialFileIds: (null == eg ? void 0 : eg.length) ? eg : void 0,
                        initialMessage: eb,
                        autoSubmit: ej,
                        initialToolsets: eN,
                        initialModels: (null == ek ? void 0 : ek.length) ? ek : void 0,
                        ocrArenaEnabled: !ee && !J,
                        ocrArenaRequest: W,
                        onOcrCompareModeChange: O
                    },
                    eS = !!Z && !M && !T;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(a(), {
                        id: "d50cafb97dab80aa",
                        children: 'html.chat-full-height-root{height:100%;overflow:hidden}body.chat-scroll-lock{height:100%;overflow:hidden;-ms-scroll-chaining:none;overscroll-behavior:contain;overscroll-behavior-y:contain;overflow-x:hidden;position:relative}html.chat-embed-transparent,body.chat-embed-transparent{background:transparent!important;background-color:transparent!important}html.embed-attachment-preview-open [data-embed-chat-shell]{background:transparent!important}html.embed-attachment-preview-open [data-embed-chat-shell]>*{visibility:hidden!important;pointer-events:none!important}body.chat-scroll-lock [role="dialog"]{height:auto!important;max-height:min(90dvh,40rem);-webkit-align-content:start;-ms-flex-line-pack:start;align-content:start}body.chat-scroll-lock [role="dialog"].shared-chat-preview-dialog{height:80vh!important;max-height:80vh!important;-webkit-align-content:stretch!important;-ms-flex-line-pack:stretch!important;align-content:stretch!important}body.chat-scroll-lock [role="dialog"].attachment-preview-dialog{height:80vh!important;max-height:80vh!important;-webkit-align-content:stretch!important;-ms-flex-line-pack:stretch!important;align-content:stretch!important}'
                    }), (0, n.jsx)(a(), {
                        id: "4b101c45bc8d7c54",
                        children: ".sidebar-transition.jsx-19994ee0ef01c938{-webkit-transition:margin-left 300ms cubic-bezier(.4,0,.2,1);-moz-transition:margin-left 300ms cubic-bezier(.4,0,.2,1);-o-transition:margin-left 300ms cubic-bezier(.4,0,.2,1);transition:margin-left 300ms cubic-bezier(.4,0,.2,1);will-change:margin-left;contain:layout style paint;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}@media(prefers-reduced-motion:reduce){.sidebar-transition.jsx-19994ee0ef01c938{-webkit-transition:none;-moz-transition:none;-o-transition:none;transition:none}}"
                    }), (0, n.jsx)("div", {
                        style: !D && C ? {
                            minHeight: C,
                            height: C
                        } : void 0,
                        className: "jsx-19994ee0ef01c938 " + ((0, p.cn)("h-full min-h-0", ee ? "bg-transparent" : "bg-gradient-to-br from-background via-background to-muted/30") || ""),
                        children: (0, n.jsxs)("div", {
                            className: "jsx-19994ee0ef01c938 relative h-full min-h-0",
                            children: [es && (0, n.jsx)(eC, {
                                ...em
                            }), ei && (0, n.jsxs)("div", {
                                className: "jsx-19994ee0ef01c938 pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between gap-3 px-4 py-3",
                                children: [(0, n.jsxs)("div", {
                                    className: "jsx-19994ee0ef01c938 pointer-events-auto flex min-w-0 items-center gap-3",
                                    children: [(0, n.jsx)(o.default, {
                                        href: "https://chat.vlm.run",
                                        className: "flex shrink-0 items-center transition-opacity hover:opacity-80",
                                        children: (0, n.jsx)(r.default, {
                                            src: "/vlm-blue.svg",
                                            alt: "https://chat.vlm.run",
                                            width: 32,
                                            height: 32,
                                            className: "size-8"
                                        })
                                    }), (0, n.jsx)(ey.d, {
                                        mode: "chat",
                                        onChange: e => {
                                            "ocr" === e && R(e => e + 1)
                                        }
                                    })]
                                }), (0, n.jsx)("button", {
                                    onClick: ec,
                                    "aria-label": "New Chat",
                                    type: "button",
                                    className: "jsx-19994ee0ef01c938 pointer-events-auto rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                                    children: (0, n.jsx)(m.Z, {
                                        className: "size-4",
                                        strokeWidth: 2
                                    })
                                })]
                            }), (0, n.jsx)("div", {
                                className: "jsx-19994ee0ef01c938 " + "sidebar-transition relative h-full min-h-0 ".concat(eh && V.sidebarOpen ? "ml-0 md:ml-64" : eh ? "md:pl-12" : "ml-0"),
                                children: (0, n.jsxs)(h.eh, {
                                    direction: "horizontal",
                                    className: "h-full min-h-0",
                                    children: [(0, n.jsx)(h.s_, {
                                        id: "chat-panel",
                                        order: 1,
                                        defaultSize: eS ? 60 : 100,
                                        minSize: eS ? 25 : 100,
                                        maxSize: eS ? 75 : 100,
                                        className: "relative flex h-full min-h-0 min-w-0 flex-col",
                                        children: (0, n.jsx)(eT.f, {
                                            ...ez
                                        })
                                    }), Z && eS && (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsxs)(h.OT, {
                                            className: "group relative w-0.5 cursor-col-resize bg-border/40 transition-colors duration-200 hover:bg-border/60",
                                            children: [(0, n.jsx)("div", {
                                                className: "jsx-19994ee0ef01c938 absolute -inset-x-1 inset-y-0 transition-colors duration-200 group-hover:bg-primary/10"
                                            }), (0, n.jsx)("div", {
                                                className: "jsx-19994ee0ef01c938 w-full bg-gradient-to-b from-transparent via-border/40 to-transparent transition-colors duration-200 group-hover:via-primary/30"
                                            })]
                                        }), (0, n.jsx)(h.s_, {
                                            id: "artifact-panel",
                                            order: 2,
                                            defaultSize: 40,
                                            minSize: 25,
                                            maxSize: 75,
                                            className: "relative flex min-w-0 bg-white",
                                            children: (0, n.jsx)($, {
                                                artifact: Z,
                                                onClose: el
                                            })
                                        })]
                                    })]
                                })
                            }), M && !F && !B && !A && (0, n.jsx)(eW, {})]
                        })
                    })]
                })
            }
        },
        66070: function(e, t, s) {
            s.d(t, {
                Ol: function() {
                    return r
                },
                SZ: function() {
                    return d
                },
                Zb: function() {
                    return l
                },
                aY: function() {
                    return c
                },
                eW: function() {
                    return u
                },
                ll: function() {
                    return o
                }
            });
            var n = s(57437),
                i = s(2265),
                a = s(94508);
            let l = i.forwardRef((e, t) => {
                let {
                    className: s,
                    ...i
                } = e;
                return (0, n.jsx)("div", {
                    ref: t,
                    className: (0, a.cn)("rounded-[10px] border bg-card text-card-foreground", s),
                    ...i
                })
            });
            l.displayName = "Card";
            let r = i.forwardRef((e, t) => {
                let {
                    className: s,
                    ...i
                } = e;
                return (0, n.jsx)("div", {
                    ref: t,
                    className: (0, a.cn)("flex flex-col space-y-1 p-2", s),
                    ...i
                })
            });
            r.displayName = "CardHeader";
            let o = i.forwardRef((e, t) => {
                let {
                    className: s,
                    ...i
                } = e;
                return (0, n.jsx)("div", {
                    ref: t,
                    className: (0, a.cn)("text-sm font-medium leading-none tracking-tight text-muted-foreground", s),
                    ...i
                })
            });
            o.displayName = "CardTitle";
            let d = i.forwardRef((e, t) => {
                let {
                    className: s,
                    ...i
                } = e;
                return (0, n.jsx)("p", {
                    ref: t,
                    className: (0, a.cn)("text-sm text-muted-foreground", s),
                    ...i
                })
            });
            d.displayName = "CardDescription";
            let c = i.forwardRef((e, t) => {
                let {
                    className: s,
                    ...i
                } = e;
                return (0, n.jsx)("div", {
                    ref: t,
                    className: (0, a.cn)("p-2 pt-0", s),
                    ...i
                })
            });
            c.displayName = "CardContent";
            let u = i.forwardRef((e, t) => {
                let {
                    className: s,
                    ...i
                } = e;
                return (0, n.jsx)("div", {
                    ref: t,
                    className: (0, a.cn)("flex items-center p-2 pt-0", s),
                    ...i
                })
            });
            u.displayName = "CardFooter"
        }
    }
]);