try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            s = (new e.Error).stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "18bff2ee-a9c3-4e35-b6b6-333aa0ae91ee", e._sentryDebugIdIdentifier = "sentry-dbid-18bff2ee-a9c3-4e35-b6b6-333aa0ae91ee")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [83964], {
        83964: function(e, s, n) {
            n.d(s, {
                c: function() {
                    return R
                }
            });
            var r = n(57437),
                t = n(2265),
                l = n(30166),
                i = n(67953),
                a = n(81907),
                o = n(92451),
                d = n(99397),
                c = n(55909),
                u = n(92934),
                x = n(48736),
                f = n(56272),
                h = n(92735),
                m = n(51817),
                g = n(14438),
                p = n(91377),
                b = n(12019),
                v = n(94508),
                j = n(93474),
                N = n(8102),
                w = n(62869),
                k = n(26110),
                y = n(84190),
                _ = n(81103),
                C = n(90837),
                F = n(7999),
                z = n(83776),
                S = n(13590),
                A = n(29501),
                q = n(91351),
                Z = n(15681),
                D = n(76818);
            let E = q.Ry({
                notes: q.Z_().trim().min(1, "Notes are required")
            });

            function B(e) {
                let {
                    requestId: s,
                    open: n,
                    onOpenChange: l
                } = e, [a, o] = (0, t.useState)(!1), c = e => {
                    o(e), null == l || l(e)
                }, {
                    mutate: u,
                    isPending: x
                } = (0, i.AM)(), f = (0, A.cI)({
                    resolver: (0, S.F)(E),
                    defaultValues: {
                        notes: ""
                    }
                }), h = () => {
                    f.reset({
                        notes: ""
                    }), f.clearErrors()
                }, p = async e => {
                    u({
                        requestId: s,
                        notes: {
                            notes: e.notes.trim()
                        }.notes
                    }, {
                        onSuccess: () => {
                            g.Am.success("Feedback created", {
                                description: "Your feedback has been submitted successfully."
                            }), c(!1), h()
                        },
                        onError: e => {
                            console.error(e), g.Am.error("Error creating feedback", {
                                description: e.message || "An error occurred while creating feedback."
                            })
                        }
                    })
                };
                return (0, r.jsxs)(k.Vq, {
                    open: null != n ? n : a,
                    onOpenChange: e => {
                        c(e), e || h()
                    },
                    children: [void 0 === l && (0, r.jsx)(k.hg, {
                        asChild: !0,
                        children: (0, r.jsx)(w.z, {
                            variant: "ghost",
                            size: "icon",
                            className: "size-5",
                            children: (0, r.jsx)(d.Z, {
                                className: "size-3"
                            })
                        })
                    }), (0, r.jsxs)(k.cZ, {
                        className: "max-h-[90vh] overflow-hidden sm:max-w-[600px]",
                        children: [(0, r.jsxs)(k.fK, {
                            children: [(0, r.jsx)(k.$N, {
                                children: "Create Feedback"
                            }), (0, r.jsx)(k.Be, {
                                className: "sr-only",
                                children: "Provide feedback for this request. Notes are required."
                            })]
                        }), (0, r.jsx)("div", {
                            className: "max-h-[70vh] overflow-y-auto pr-2",
                            children: (0, r.jsx)(Z.l0, {
                                ...f,
                                children: (0, r.jsxs)("form", {
                                    onSubmit: f.handleSubmit(p),
                                    className: "ml-1 space-y-4",
                                    children: [(0, r.jsx)(Z.Wi, {
                                        control: f.control,
                                        name: "notes",
                                        render: e => {
                                            let {
                                                field: s
                                            } = e;
                                            return (0, r.jsxs)(Z.xJ, {
                                                children: [(0, r.jsx)(Z.NI, {
                                                    children: (0, r.jsx)(D.g, {
                                                        ...s,
                                                        "aria-label": "Feedback notes",
                                                        placeholder: "Add your feedback notes or comments... (required)",
                                                        className: "min-h-[120px]"
                                                    })
                                                }), (0, r.jsx)(Z.zG, {})]
                                            })
                                        }
                                    }), (0, r.jsxs)("div", {
                                        className: "flex justify-end gap-2 pt-4",
                                        children: [(0, r.jsx)(w.z, {
                                            type: "button",
                                            variant: "outline",
                                            onClick: () => {
                                                h(), c(!1)
                                            },
                                            disabled: x,
                                            children: "Cancel"
                                        }), (0, r.jsx)(w.z, {
                                            type: "submit",
                                            disabled: x,
                                            children: x ? (0, r.jsxs)("span", {
                                                className: "flex items-center",
                                                children: [(0, r.jsx)(m.Z, {
                                                    className: "mr-2 size-4 animate-spin"
                                                }), "Creating..."]
                                            }) : "Create Feedback"
                                        })]
                                    })]
                                })
                            })
                        })]
                    })]
                })
            }
            var I = n(83794),
                V = n(7776),
                O = n(35827);

            function J(e) {
                let {
                    requestId: s,
                    open: n,
                    onOpenChange: l,
                    hideTrigger: o
                } = e, [d, c] = (0, t.useState)(!1), [u, x] = (0, t.useState)(null), f = void 0 !== n ? n : d, {
                    data: h,
                    isLoading: m,
                    error: g
                } = (0, i.s5)(s, {
                    enabled: f
                }), {
                    data: p
                } = (0, a.TK)(s, {
                    enabled: f
                });
                return (0, t.useEffect)(() => {
                    x(null)
                }, [s]), (0, t.useEffect)(() => {
                    f && (null == p ? void 0 : p.signed_response_uri) && null === u && (0, b.E)(p.signed_response_uri).then(x).catch(() => x(!1))
                }, [f, null == p ? void 0 : p.signed_response_uri, u]), (0, r.jsx)(O.Z, {
                    title: "Request Feedback",
                    feedbacks: h,
                    isLoading: m,
                    error: g,
                    originalResponse: u,
                    open: f,
                    onOpenChange: l || c,
                    hideTrigger: o
                }, s)
            }
            let M = (0, l.default)(() => n.e(34909).then(n.bind(n, 34909)), {
                    loadableGenerated: {
                        webpack: () => [34909]
                    },
                    ssr: !1
                }),
                T = (0, l.default)(() => n.e(78708).then(n.bind(n, 78708)), {
                    loadableGenerated: {
                        webpack: () => [78708]
                    },
                    ssr: !1
                }),
                U = (e, s) => {
                    if (!e) return {
                        isImage: !1,
                        isVideo: !1,
                        isAudio: !1,
                        isPdf: !0
                    };
                    let n = e.split("?")[0],
                        r = "image" === s || /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(n) || /^data:image\//.test(e),
                        t = "video" === s || /\.(mp4|webm|ogg|mov|avi|wmv|flv|mkv)$/i.test(n) || /^data:video\//.test(e),
                        l = "audio" === s || /\.(mp3|wav|ogg|aac|flac|m4a|wma)$/i.test(n) || /^data:audio\//.test(e);
                    return {
                        isImage: r,
                        isVideo: t,
                        isAudio: l,
                        isPdf: !(r || t || l)
                    }
                },
                K = e => {
                    try {
                        return JSON.stringify(e)
                    } catch (e) {
                        return "__UNSERIALIZABLE__"
                    }
                };
            async function P(e, s) {
                try {
                    if (!e) {
                        g.Am.error("No response data available");
                        return
                    }
                    await (0, b.j)(e, "response-".concat(s.slice(0, 8), ".json")), g.Am.success("Downloaded JSON response")
                } catch (e) {
                    g.Am.error("Failed to download response data")
                }
            }

            function R(e) {
                var s, n, l;
                let {
                    requestId: S,
                    onBack: A
                } = e, {
                    data: q,
                    isLoading: Z
                } = (0, a.TK)(S), {
                    data: D
                } = (0, i.s5)(S), {
                    isPro: E
                } = (0, N.L)(), O = (0, p.wd)(null == q ? void 0 : q.created_at, E), {
                    viewMode: R,
                    setViewMode: L,
                    selectedPath: W,
                    setShowBoundingBoxes: Y,
                    setShowNullValues: $,
                    resetSelection: G
                } = (0, j.s)(), [Q, H] = (0, t.useState)(null), [X, ee] = (0, t.useState)(null), [es, en] = (0, t.useState)(null), [er, et] = (0, t.useState)(!1), [el, ei] = (0, t.useState)(!1), [ea, eo] = (0, t.useState)(!1), [ed, ec] = (0, t.useState)("before"), [eu, ex] = (0, t.useState)({
                    boundingBoxes: !0,
                    nullValues: !1
                }), ef = (0, t.useRef)(null), [eh, em] = (0, t.useState)(!1), {
                    mutate: eg,
                    isPending: ep
                } = (0, i.AM)(), eb = (0, t.useMemo)(() => {
                    if (!(null == D ? void 0 : D.items)) return null;
                    let e = D.items.filter(e => e.response);
                    return e.length > 0 ? e[0] : null
                }, [D]), ev = (0, t.useMemo)(() => null !== eb || null !== es || eh, [eb, es, eh]), ej = (0, t.useMemo)(() => eh && Q ? Q : es || (null == eb ? void 0 : eb.response) || null, [eh, Q, es, eb]);
                (0, t.useEffect)(() => {
                    G(), H(null), ee(null), en(null), ef.current = null, em(!1)
                }, [G, S]), (0, t.useEffect)(() => {
                    let e = !0;
                    return (async () => {
                        if ((null == q ? void 0 : q.signed_response_uri) && !X) try {
                            let s = await (0, b.E)(q.signed_response_uri);
                            e && (ee(s), ef.current = K(s), em(!1))
                        } catch (e) {}
                    })(), () => {
                        e = !1
                    }
                }, [null == q ? void 0 : q.signed_response_uri, X]), (0, t.useEffect)(() => {
                    L((null == q ? void 0 : q.domain) === "document.markdown" ? "markdown" : "json")
                }, [null == q ? void 0 : q.domain, L]);
                let eN = e => {
                    let s = !eu[e];
                    ex(n => ({
                        ...n,
                        [e]: s
                    })), "boundingBoxes" === e ? Y(s) : $(s)
                };
                if (Z || !q) return (0, r.jsx)("div", {
                    className: "flex h-full items-center justify-center text-sm text-muted-foreground",
                    children: "Loading..."
                });
                let ew = null !== (n = null == D ? void 0 : null === (s = D.items) || void 0 === s ? void 0 : s.length) && void 0 !== n ? n : 0;
                return (0, r.jsxs)("div", {
                    className: "relative flex h-full flex-col overflow-hidden",
                    children: [(0, r.jsxs)("div", {
                        className: "relative flex shrink-0 items-center border-b border-border px-2 py-2",
                        children: [(0, r.jsxs)(w.z, {
                            variant: "ghost",
                            onClick: A,
                            className: "flex items-center gap-1.5 px-0 hover:bg-transparent text-accent-foreground hover:text-accent-foreground",
                            children: [(0, r.jsx)(o.Z, {
                                className: "size-4"
                            }), (0, r.jsx)("span", {
                                className: "text-sm font-medium",
                                children: "Request"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "absolute left-1/2 flex h-7 -translate-x-1/2 items-center gap-0.5 rounded-[10px] border border-border bg-background p-0.5",
                            children: [(0, r.jsx)("button", {
                                className: "h-6 rounded-[8px] bg-accent px-3 text-xs text-accent-foreground",
                                children: "Studio"
                            }), (0, r.jsxs)("button", {
                                onClick: () => et(!0),
                                className: "flex h-6 items-center gap-1 rounded-[8px] px-3 text-xs text-muted-foreground hover:bg-accent/50",
                                children: ["Feedback", ew > 0 && (0, r.jsx)("span", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: ew
                                })]
                            }), (0, r.jsx)("button", {
                                onClick: () => ei(!0),
                                className: "h-6 rounded-[8px] px-3 text-xs text-muted-foreground hover:bg-accent/50",
                                children: "Details"
                            })]
                        }), (0, r.jsxs)(w.z, {
                            variant: "outline",
                            size: "sm",
                            onClick: () => eo(!0),
                            className: "ml-auto flex items-center gap-1.5 h-7 px-2",
                            children: [(0, r.jsx)(d.Z, {
                                className: "h-3.5 w-3.5"
                            }), "Add note"]
                        })]
                    }), (0, r.jsx)(B, {
                        requestId: q.id,
                        open: ea,
                        onOpenChange: eo
                    }), (0, r.jsx)(J, {
                        requestId: q.id,
                        open: er,
                        onOpenChange: et,
                        hideTrigger: !0
                    }), (0, r.jsx)(k.Vq, {
                        open: el,
                        onOpenChange: ei,
                        children: (0, r.jsxs)(k.cZ, {
                            className: "gap-0 overflow-visible p-0 sm:max-w-xl lg:max-w-2xl",
                            children: [(0, r.jsx)("div", {
                                className: "rounded-t-2xl border-b border-border/60 px-6 py-4",
                                children: (0, r.jsx)(z.l, {
                                    id: q.id
                                })
                            }), (0, r.jsx)("div", {
                                className: "max-h-[min(70vh,640px)] overflow-y-auto rounded-b-2xl p-6",
                                children: (0, r.jsx)(z.Z, {
                                    data: q
                                })
                            })]
                        })
                    }), (0, r.jsxs)("div", {
                        className: "flex min-h-0 flex-1 flex-col px-2 pb-2 pt-2",
                        children: [(0, r.jsxs)("div", {
                            className: "grid flex-1 divide-x divide-border/60 overflow-hidden rounded-[10px] border border-border/60 md:grid-cols-2",
                            children: [(0, r.jsxs)("div", {
                                className: "flex h-full flex-col overflow-hidden",
                                children: [!(null == q ? void 0 : q.signed_file_uri) && (0, r.jsx)("div", {
                                    className: "h-10 shrink-0 border-b border-border/40 bg-[#F5FAFF]"
                                }), (0, r.jsx)("div", {
                                    className: "flex min-h-0 w-full flex-1 items-center justify-center [&>div]:w-full",
                                    children: O ? (0, r.jsx)(C.Y, {}) : (() => {
                                        if (!(null == q ? void 0 : q.signed_file_uri)) return (0, r.jsx)("p", {
                                            className: "text-muted-foreground",
                                            children: "No files to preview"
                                        });
                                        let {
                                            isAudio: e,
                                            isVideo: s
                                        } = U(q.signed_file_uri, null == q ? void 0 : q.type);
                                        return e ? (0, r.jsx)(M, {
                                            audioUrl: q.signed_file_uri,
                                            responseUrl: q.signed_response_uri || ""
                                        }) : s ? (0, r.jsx)(T, {
                                            videoUrl: q.signed_file_uri,
                                            responseUrl: q.signed_response_uri || "",
                                            showBoundingBoxes: eu.boundingBoxes
                                        }) : (0, r.jsx)(F.H, {
                                            pdfUrl: q.signed_file_uri,
                                            responseUrl: q.signed_response_uri || "",
                                            showBoundingBoxes: eu.boundingBoxes
                                        })
                                    })()
                                })]
                            }), (0, r.jsx)("div", {
                                className: "flex h-full flex-col overflow-hidden",
                                children: O ? (0, r.jsx)("div", {
                                    className: "flex min-h-0 flex-1 items-center justify-center",
                                    children: (0, r.jsx)(C.Y, {})
                                }) : (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("div", {
                                        className: "flex h-10 shrink-0 flex-row items-center justify-end border-b border-border/40 bg-[#F5FAFF] px-4",
                                        children: (0, r.jsxs)("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [(0, r.jsxs)(y.h_, {
                                                children: [(0, r.jsxs)(_.u, {
                                                    children: [(0, r.jsx)(_.aJ, {
                                                        asChild: !0,
                                                        children: (0, r.jsx)(y.$F, {
                                                            asChild: !0,
                                                            children: (0, r.jsx)(w.z, {
                                                                variant: "outline",
                                                                className: "h-7 w-7 px-0",
                                                                children: (0, r.jsx)(c.Z, {
                                                                    className: "size-3.5"
                                                                })
                                                            })
                                                        })
                                                    }), (0, r.jsx)(_._v, {
                                                        children: "Filters"
                                                    })]
                                                }), (0, r.jsxs)(y.AW, {
                                                    align: "end",
                                                    className: "w-[200px]",
                                                    children: [(0, r.jsxs)(y.Xi, {
                                                        onClick: () => eN("boundingBoxes"),
                                                        className: "flex cursor-pointer items-center justify-between text-xs uppercase",
                                                        onSelect: e => e.preventDefault(),
                                                        children: [(0, r.jsx)("span", {
                                                            children: "Bounding Boxes"
                                                        }), eu.boundingBoxes && (0, r.jsx)(u.Z, {
                                                            className: "size-3.5 fill-current stroke-background"
                                                        })]
                                                    }), (0, r.jsxs)(y.Xi, {
                                                        onClick: () => eN("nullValues"),
                                                        className: "flex cursor-pointer items-center justify-between text-xs uppercase",
                                                        onSelect: e => e.preventDefault(),
                                                        children: [(0, r.jsx)("span", {
                                                            children: "Null Values"
                                                        }), eu.nullValues && (0, r.jsx)(u.Z, {
                                                            className: "size-3.5 fill-current stroke-background"
                                                        })]
                                                    })]
                                                })]
                                            }), "json" === R && ev && (0, r.jsxs)("div", {
                                                className: "flex h-7 items-center gap-0.5 rounded-[10px] border border-border bg-background p-0.5",
                                                children: [(0, r.jsxs)(_.u, {
                                                    children: [(0, r.jsx)(_.aJ, {
                                                        asChild: !0,
                                                        children: (0, r.jsx)("button", {
                                                            onClick: () => ec("before"),
                                                            className: (0, v.cn)("rounded-[8px] p-1 transition-colors", "before" === ed ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"),
                                                            children: (0, r.jsx)(x.Z, {
                                                                className: "size-3.5"
                                                            })
                                                        })
                                                    }), (0, r.jsx)(_._v, {
                                                        children: "Before"
                                                    })]
                                                }), (0, r.jsxs)(_.u, {
                                                    children: [(0, r.jsx)(_.aJ, {
                                                        asChild: !0,
                                                        children: (0, r.jsx)("button", {
                                                            onClick: () => ec("diff"),
                                                            className: (0, v.cn)("rounded-[8px] p-1 transition-colors", "diff" === ed ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"),
                                                            children: (0, r.jsx)(f.Z, {
                                                                className: "size-3.5"
                                                            })
                                                        })
                                                    }), (0, r.jsx)(_._v, {
                                                        children: "Diff"
                                                    })]
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "flex h-7 items-center gap-0.5 rounded-[10px] border border-border bg-background p-0.5",
                                                children: [(0, r.jsx)(w.z, {
                                                    variant: "ghost",
                                                    onClick: () => L("json"),
                                                    className: (0, v.cn)("h-6 rounded-[8px] px-3 text-xs", "json" === R ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"),
                                                    children: "JSON"
                                                }), (null == q ? void 0 : q.domain) === "document.markdown" && (0, r.jsx)(w.z, {
                                                    variant: "ghost",
                                                    onClick: () => L("markdown"),
                                                    className: (0, v.cn)("h-6 rounded-[8px] px-3 text-xs", "markdown" === R ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"),
                                                    children: "Markdown"
                                                }), (0, r.jsx)(w.z, {
                                                    variant: "ghost",
                                                    onClick: () => L("form"),
                                                    className: (0, v.cn)("h-6 rounded-[8px] px-3 text-xs", "form" === R ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"),
                                                    children: "Form"
                                                })]
                                            }), (0, r.jsxs)(_.u, {
                                                children: [(0, r.jsx)(_.aJ, {
                                                    asChild: !0,
                                                    children: (0, r.jsx)(w.z, {
                                                        variant: "outline",
                                                        onClick: () => P(q.signed_response_uri || "", q.id),
                                                        className: "h-7 w-7 px-0",
                                                        disabled: !q.signed_response_uri,
                                                        children: (0, r.jsx)(h.Z, {
                                                            className: "size-3.5"
                                                        })
                                                    })
                                                }), (0, r.jsx)(_._v, {
                                                    children: "Download JSON"
                                                })]
                                            })]
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "h-full min-h-0 flex-1 p-0",
                                        children: "json" === R && ev && "diff" === ed && ej ? (0, r.jsx)(V.Z, {
                                            original: X || {},
                                            modified: ej
                                        }) : "json" === R && ev && "before" === ed ? (0, r.jsx)(I.Z, {
                                            jsonData: X,
                                            viewMode: R,
                                            scrollToPath: W,
                                            showNullValues: eu.nullValues,
                                            editable: !1
                                        }) : (0, r.jsx)(I.Z, {
                                            ...Q ? {
                                                jsonData: Q
                                            } : {
                                                uri: null !== (l = q.signed_response_uri) && void 0 !== l ? l : ""
                                            },
                                            viewMode: R,
                                            scrollToPath: W,
                                            showNullValues: eu.nullValues,
                                            editable: "form" === R,
                                            onChange: e => {
                                                if (X || Q) {
                                                    H(e);
                                                    let s = ef.current;
                                                    em(null !== s && K(e) !== s)
                                                } else ee(e), H(e), ef.current = K(e), em(!1)
                                            }
                                        })
                                    })]
                                })
                            })]
                        }), "form" === R && eh && (0, r.jsxs)("div", {
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
                                        X && (H(X), g.Am.info("Changes reset"))
                                    },
                                    disabled: ep,
                                    className: (0, v.cn)("pointer-events-auto rounded-full px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors", ep ? "cursor-not-allowed opacity-60" : "hover:bg-accent/40 hover:text-foreground"),
                                    children: "Reset"
                                }), (0, r.jsx)("button", {
                                    type: "button",
                                    onClick: () => {
                                        q && eh && !ep && eg({
                                            requestId: q.id,
                                            response: Q,
                                            notes: "Updated response data via form editor"
                                        }, {
                                            onSuccess: () => {
                                                g.Am.success("Changes saved", {
                                                    description: "Your changes have been submitted as feedback."
                                                }), ef.current = K(Q), em(!1), en(Q)
                                            },
                                            onError: e => {
                                                g.Am.error("Failed to save changes", {
                                                    description: e.message || "Please try again."
                                                })
                                            }
                                        })
                                    },
                                    disabled: ep,
                                    className: (0, v.cn)("pointer-events-auto rounded-full bg-[#1D4FD8] px-2.5 py-1 text-xs font-semibold text-white transition-colors", ep ? "cursor-not-allowed opacity-60" : "hover:bg-[#193FB0]"),
                                    children: ep ? (0, r.jsxs)("span", {
                                        className: "flex items-center gap-1",
                                        children: [(0, r.jsx)(m.Z, {
                                            className: "size-3 animate-spin"
                                        }), "Saving..."]
                                    }) : "Save"
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        90837: function(e, s, n) {
            n.d(s, {
                Y: function() {
                    return l
                }
            });
            var r = n(57437),
                t = n(94508);

            function l(e) {
                let {
                    className: s,
                    kind: n = "file",
                    plural: l = !1
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, t.cn)("inline-flex max-w-full flex-col items-center justify-center gap-3 rounded-lg border border-[#D2E9FF] bg-[#F5FAFF] px-4 py-3 text-center text-sm font-medium text-slate-700", s),
                    children: (0, r.jsxs)("p", {
                        children: [l ? "Attachments" : "image" === n ? "Image" : "video" === n ? "Video" : "audio" === n ? "Audio" : "Document", " no longer ", l ? "exist" : "exists", " due to our content retention policies"]
                    })
                })
            }
        },
        7999: function(e, s, n) {
            n.d(s, {
                H: function() {
                    return t
                }
            });
            var r = n(57437);
            let t = (0, n(30166).default)(() => Promise.all([n.e(22829), n.e(75651), n.e(27344), n.e(82244), n.e(85266), n.e(27186), n.e(90320), n.e(68023)]).then(n.bind(n, 74846)), {
                loadableGenerated: {
                    webpack: () => [74846]
                },
                ssr: !1,
                loading: () => (0, r.jsx)("div", {
                    className: "size-full min-h-[200px] animate-pulse rounded-lg bg-muted"
                })
            })
        },
        67953: function(e, s, n) {
            n.d(s, {
                AM: function() {
                    return f
                },
                sF: function() {
                    return m
                },
                s5: function() {
                    return h
                }
            });
            var r = n(29827),
                t = n(21770),
                l = n(92850),
                i = n(45345),
                a = n(31125),
                o = n(1304),
                d = n(16302);
            let c = async (e, s, n) => (await (0, o.r)(), await (0, d.s)().feedback.submit({
                requestId: e,
                response: null != s ? s : null,
                notes: null != n ? n : null
            })), u = async e => {
                let {
                    data: s
                } = await a.Z.get("/api/v1/requests/".concat(e, "/feedback"));
                return s
            }, x = async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                    s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "created_at",
                    r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                    t = arguments.length > 4 ? arguments[4] : void 0,
                    l = arguments.length > 5 ? arguments[5] : void 0,
                    i = {
                        limit: e,
                        offset: s,
                        order_by: n,
                        descending: r,
                        ...null != l ? l : {}
                    };
                t && (i.feedback_type = t);
                let {
                    data: o
                } = await a.Z.get("/api/v1/feedback/", {
                    params: i
                });
                return o
            }, f = () => {
                let e = (0, r.NL)();
                return (0, t.D)({
                    mutationFn: e => {
                        let {
                            requestId: s,
                            response: n,
                            notes: r
                        } = e;
                        return c(s, n, r)
                    },
                    onSuccess: (s, n) => {
                        let {
                            requestId: r
                        } = n;
                        e.invalidateQueries({
                            queryKey: ["request-feedbacks", r]
                        }), e.invalidateQueries({
                            queryKey: ["request", r]
                        }), e.invalidateQueries({
                            queryKey: ["organization-feedbacks"]
                        })
                    }
                })
            }, h = (e, s) => {
                var n;
                return (0, l.a)({
                    queryKey: ["request-feedbacks", e],
                    queryFn: () => u(e),
                    refetchOnWindowFocus: !1,
                    enabled: null === (n = null == s ? void 0 : s.enabled) || void 0 === n || n
                })
            }, m = function() {
                var e;
                let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "created_at",
                    t = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    o = arguments.length > 5 ? arguments[5] : void 0,
                    d = arguments.length > 6 ? arguments[6] : void 0;
                return (0, l.a)({
                    queryKey: ["organization-feedbacks", s, n, r, t, a, o],
                    queryFn: () => x(s, n, r, t, a, o),
                    enabled: null === (e = null == d ? void 0 : d.enabled) || void 0 === e || e,
                    refetchOnWindowFocus: !1,
                    placeholderData: i.Wk,
                    staleTime: 12e4
                })
            }
        }
    }
]);