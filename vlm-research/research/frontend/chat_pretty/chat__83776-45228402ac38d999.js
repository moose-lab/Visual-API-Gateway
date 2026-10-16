try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "846e3425-4d89-4c91-89a8-b769ec167ee4", e._sentryDebugIdIdentifier = "sentry-dbid-846e3425-4d89-4c91-89a8-b769ec167ee4")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [83776], {
        83776: function(e, t, n) {
            n.d(t, {
                l: function() {
                    return I
                },
                Z: function() {
                    return D
                }
            });
            var r = n(57437),
                i = n(2265),
                a = n(27648),
                s = n(99376),
                l = n(43476),
                o = n(95658),
                d = n(53491),
                u = n(30401),
                c = n(78867),
                m = n(18930),
                f = n(94508),
                g = n(8102),
                v = n(26110),
                x = n(59421),
                h = n(81103),
                p = n(81907),
                b = n(76865),
                y = n(14438),
                j = n(37099),
                w = n(62869);

            function q(e) {
                let {
                    requestId: t,
                    onDeleted: n,
                    children: a,
                    open: s,
                    onOpenChange: l
                } = e, [o, d] = (0, i.useState)(!1), u = (0, p.lN)(), c = l || d, f = async () => {
                    try {
                        await u.mutateAsync({
                            id: t
                        }), y.Am.success("Request deleted successfully"), c(!1), null == n || n()
                    } catch (e) {
                        y.Am.error(e.message || "Failed to delete request")
                    }
                };
                return (0, r.jsxs)(j.aR, {
                    open: void 0 !== s ? s : o,
                    onOpenChange: c,
                    children: [a && (0, r.jsx)(j.vW, {
                        asChild: !0,
                        children: a
                    }), !a && void 0 === s && (0, r.jsx)(j.vW, {
                        asChild: !0,
                        children: (0, r.jsxs)(w.z, {
                            variant: "destructive",
                            size: "sm",
                            className: "h-7 gap-2 px-3 text-xs font-medium",
                            children: [(0, r.jsx)(m.Z, {
                                className: "size-3"
                            }), "Delete"]
                        })
                    }), (0, r.jsxs)(j._T, {
                        children: [(0, r.jsxs)(j.fY, {
                            children: [(0, r.jsxs)(j.f$, {
                                className: "flex items-center gap-2",
                                children: [(0, r.jsx)(b.Z, {
                                    className: "size-5 text-destructive"
                                }), "Delete Request"]
                            }), (0, r.jsxs)(j.yT, {
                                className: "space-y-2",
                                children: [(0, r.jsxs)("p", {
                                    children: ["Are you sure you want to delete request ", (0, r.jsxs)("strong", {
                                        children: ["#", t]
                                    }), "?"]
                                }), (0, r.jsx)("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "This action will permanently delete:"
                                }), (0, r.jsxs)("ul", {
                                    className: "ml-4 list-inside list-disc space-y-1 text-sm text-muted-foreground",
                                    children: [(0, r.jsx)("li", {
                                        children: "The request and all its data"
                                    }), (0, r.jsx)("li", {
                                        children: "Any associated files and thumbnails"
                                    }), (0, r.jsx)("li", {
                                        children: "All response data and extracted information"
                                    })]
                                }), (0, r.jsx)("p", {
                                    className: "text-sm font-medium text-destructive",
                                    children: "This action cannot be undone."
                                })]
                            })]
                        }), (0, r.jsxs)(j.xo, {
                            children: [(0, r.jsx)(j.le, {
                                disabled: u.isPending,
                                children: "Cancel"
                            }), (0, r.jsx)(j.OL, {
                                onClick: f,
                                disabled: u.isPending,
                                className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                                children: u.isPending ? "Deleting..." : "Delete Request"
                            })]
                        })]
                    })]
                })
            }
            var N = n(75952),
                _ = n(13312),
                k = n(16503);

            function I(e) {
                let {
                    id: t
                } = e, [n, a] = (0, i.useState)(null), s = async () => {
                    try {
                        await navigator.clipboard.writeText(t), a("copied"), window.setTimeout(() => a(null), 1500)
                    } catch (e) {
                        a("error"), window.setTimeout(() => a(null), 2200)
                    }
                }, l = "copied" === n;
                return (0, r.jsxs)(v.fK, {
                    className: "space-y-0 text-left",
                    children: [(0, r.jsxs)(v.Be, {
                        className: "sr-only",
                        children: ["Request identifier ", t]
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4",
                        children: [(0, r.jsx)(v.$N, {
                            className: "text-left text-xl font-semibold tracking-tight",
                            children: "Request details"
                        }), (0, r.jsx)("div", {
                            className: "flex min-w-0 max-w-full justify-end sm:max-w-[min(100%,24rem)]",
                            children: (0, r.jsxs)("div", {
                                className: "relative min-w-0 max-w-full",
                                children: [n ? (0, r.jsx)("span", {
                                    role: "status",
                                    "aria-live": "polite",
                                    className: (0, f.cn)("pointer-events-none absolute bottom-full left-1/2 z-[10002] mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-lg border px-2.5 py-1 text-xs font-medium antialiased shadow-sm duration-200 animate-in fade-in-0 slide-in-from-bottom-2", "copied" === n ? "border-emerald-200/90 bg-gradient-to-b from-emerald-50/95 to-emerald-100/80 text-emerald-900 shadow-emerald-900/5 dark:border-emerald-800/60 dark:from-emerald-950/50 dark:to-emerald-950/30 dark:text-emerald-100 dark:shadow-emerald-950/20" : "border-destructive/30 bg-destructive/10 text-destructive"),
                                    children: "copied" === n ? (0, r.jsx)("span", {
                                        className: "tracking-wide",
                                        children: "Copied"
                                    }) : "Couldn't copy"
                                }) : null, (0, r.jsxs)("button", {
                                    type: "button",
                                    onClick: s,
                                    title: t,
                                    "aria-label": "Copy request ID",
                                    className: (0, f.cn)("flex w-full min-w-0 max-w-full items-center gap-1.5 rounded-lg border border-transparent bg-transparent px-2 py-1.5 text-left transition-colors hover:border-border/60 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", l && "border-emerald-200/50 bg-emerald-50/40 dark:border-emerald-800/40 dark:bg-emerald-950/25"),
                                    children: [(0, r.jsx)("span", {
                                        className: "min-w-0 flex-1 break-all font-mono text-[11px] leading-snug text-muted-foreground",
                                        children: t
                                    }), (0, r.jsx)("span", {
                                        className: (0, f.cn)("flex size-6 shrink-0 items-center justify-center text-muted-foreground", l && "text-emerald-600 dark:text-emerald-400"),
                                        children: l ? (0, r.jsx)(u.Z, {
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

            function S(e) {
                let {
                    label: t,
                    children: n,
                    className: i
                } = e;
                return (0, r.jsxs)("div", {
                    className: (0, f.cn)("flex flex-col justify-center rounded-[10px] border border-border/60 bg-background/90 px-3 py-2.5", i),
                    children: [(0, r.jsx)("p", {
                        className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
                        children: t
                    }), (0, r.jsx)("div", {
                        className: "mt-1 min-h-5 text-sm font-medium leading-tight text-foreground",
                        children: n
                    })]
                })
            }

            function D(e) {
                var t, n, i, u, c, f;
                let {
                    data: v
                } = e, p = (0, s.useRouter)(), {
                    isSuperUser: b,
                    inspecting: y
                } = (0, g.L)(e => ({
                    isSuperUser: e.isSuperUser,
                    inspecting: e.inspecting
                }));
                if (!v) return null;
                let j = "string" == typeof v.domain ? v.domain : "",
                    w = !!j && "skill" !== j,
                    I = v.skill_id,
                    D = v.skill_name,
                    F = v.skill_version,
                    C = I && D ? (0, r.jsx)(h.pn, {
                        delayDuration: 200,
                        children: (0, r.jsxs)(h.u, {
                            children: [(0, r.jsx)(h.aJ, {
                                asChild: !0,
                                children: (0, r.jsx)(a.default, {
                                    href: "/dashboard/skills/".concat(I),
                                    className: "block max-w-[12rem] truncate border-b border-transparent font-semibold text-foreground transition-colors hover:border-muted-foreground hover:text-muted-foreground",
                                    children: D
                                })
                            }), (0, r.jsx)(h._v, {
                                side: "bottom",
                                align: "start",
                                className: "max-w-sm break-all",
                                children: D
                            })]
                        })
                    }) : w ? (0, r.jsx)("span", {
                        className: "truncate rounded-md border bg-background px-2 font-mono text-sm",
                        children: j
                    }) : (0, r.jsx)("span", {
                        className: "font-semibold text-muted-foreground",
                        children: "—"
                    }),
                    T = (v.type || "N/A").toUpperCase();
                return (0, r.jsxs)("div", {
                    className: "space-y-4",
                    children: [(0, r.jsxs)("div", {
                        className: "flex flex-col gap-3 rounded-[10px] border border-border/70 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4",
                        children: [(0, r.jsxs)("div", {
                            className: "flex min-w-0 flex-wrap items-center gap-x-2.5 gap-y-1",
                            children: [(0, r.jsx)("span", {
                                className: "min-w-0 text-base leading-snug",
                                children: C
                            }), I && F ? (0, r.jsx)(N.O, {
                                version: F
                            }) : null, (0, r.jsx)("span", {
                                className: "truncate rounded-md border bg-background px-2 font-mono text-sm",
                                children: T
                            }), b || y ? (0, r.jsx)(q, {
                                requestId: v.id,
                                onDeleted: () => {
                                    p.push("/dashboard/requests")
                                },
                                children: (0, r.jsx)("button", {
                                    type: "button",
                                    title: "Delete request",
                                    "aria-label": "Delete request",
                                    className: "inline-flex size-5 shrink-0 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-destructive",
                                    children: (0, r.jsx)(m.Z, {
                                        className: "size-3"
                                    })
                                })
                            }) : null]
                        }), (0, r.jsx)("div", {
                            className: "shrink-0 self-start sm:self-center",
                            children: (0, r.jsx)(x.O, {
                                status: v.status,
                                children: v.status
                            })
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "grid min-w-0 grid-cols-2 gap-2 lg:grid-cols-4",
                        children: [(0, r.jsx)(S, {
                            label: "Created",
                            children: v.created_at ? (0, d.Z)((0, l.kT)(v.created_at), "MMM d, h:mm a") : "N/A"
                        }), (0, r.jsx)(S, {
                            label: "Cost",
                            children: (0, r.jsx)(k.t1, {
                                creditCost: null !== (u = v.credit_cost) && void 0 !== u ? u : void 0
                            })
                        }), (0, r.jsx)(S, {
                            label: "Duration",
                            children: (0, r.jsxs)(r.Fragment, {
                                children: [(0, o.FX)(v.duration_ms), (0, r.jsx)("span", {
                                    className: "text-muted-foreground",
                                    children: "s"
                                })]
                            })
                        }), (0, r.jsx)(S, {
                            label: "Flag",
                            children: (0, r.jsx)("div", {
                                className: "-ml-0.5 flex items-center",
                                children: (0, r.jsx)(_.Z, {
                                    flag: v.flag,
                                    requestId: v.id
                                })
                            })
                        }), (0, r.jsx)(S, {
                            label: "Confidence",
                            children: (null === (t = v.generation_config) || void 0 === t ? void 0 : t.confidence) ? "Yes" : "No"
                        }), (0, r.jsx)(S, {
                            label: "Grounding",
                            children: (null === (n = v.generation_config) || void 0 === n ? void 0 : n.grounding) ? "Yes" : "No"
                        }), (0, r.jsx)(S, {
                            label: "Detail",
                            children: null !== (c = null === (i = v.generation_config) || void 0 === i ? void 0 : i.detail) && void 0 !== c ? c : "auto"
                        }), (0, r.jsx)(S, {
                            label: "Model",
                            children: (0, r.jsx)("span", {
                                className: "font-mono",
                                children: null !== (f = v.model_id) && void 0 !== f ? f : "—"
                            })
                        })]
                    })]
                })
            }
        },
        13312: function(e, t, n) {
            var r = n(57437),
                i = n(2265),
                a = n(81907),
                s = n(51817),
                l = n(46211),
                o = n(62869);
            let d = (0, i.forwardRef)((e, t) => {
                let {
                    flag: n = !1,
                    requestId: d
                } = e, {
                    mutate: c,
                    isPending: m
                } = (0, a.$C)(), [f, g] = (0, i.useState)(!1), [v, x] = (0, i.useState)(n);
                (0, i.useEffect)(() => {
                    x(n)
                }, [n]);
                let h = () => {
                    d && (g(!0), c({
                        id: d,
                        request: {
                            flag: !v
                        }
                    }, {
                        onSuccess: () => {
                            x(!v), g(!1)
                        },
                        onError: () => g(!1)
                    }))
                };
                return (0, i.useImperativeHandle)(t, () => ({
                    toggleFlag: h
                })), (0, r.jsx)("div", {
                    children: (0, r.jsx)(o.z, {
                        variant: "ghost",
                        size: "icon",
                        className: "!size-5 shrink-0 p-0 hover:bg-transparent ".concat(v ? "hover:text-red-600" : "hover:text-gray-600"),
                        onClick: e => {
                            e.stopPropagation(), h()
                        },
                        disabled: m || f,
                        title: "".concat(v ? "Remove flag" : "Flag request", " (Shift+!)"),
                        children: m || f ? (0, r.jsx)(s.Z, {
                            className: "size-4 animate-spin"
                        }) : v ? (0, r.jsx)(u, {}) : (0, r.jsx)(l.Z, {
                            className: "size-4"
                        })
                    })
                })
            });
            d.displayName = "Flag";
            let u = () => (0, r.jsx)(l.Z, {
                color: "#ff0000",
                className: "size-4"
            });
            t.Z = d
        },
        22138: function(e, t, n) {
            n.d(t, {
                c: function() {
                    return r
                }
            });
            let r = (0, n(59625).Ue)(e => ({
                entries: [],
                add: (t, n, r) => e(e => ({
                    entries: [...e.entries, {
                        tempId: t,
                        row: n,
                        baselineCount: r
                    }]
                })),
                resolve: (t, n) => e(e => ({
                    entries: e.entries.map(e => e.tempId === t ? {
                        ...e,
                        realId: n
                    } : e)
                })),
                remove: t => e(e => ({
                    entries: e.entries.filter(e => e.tempId !== t)
                })),
                cleanup: (t, n) => e(e => {
                    let r = e.entries.filter(e => !(e.realId && t.has(e.realId)) && !(n > e.baselineCount));
                    return r.length === e.entries.length ? e : {
                        entries: r
                    }
                })
            }))
        },
        49981: function(e, t, n) {
            n.d(t, {
                AI: function() {
                    return v
                },
                Gq: function() {
                    return d
                },
                HT: function() {
                    return f
                },
                Jl: function() {
                    return w
                },
                QJ: function() {
                    return y
                },
                WN: function() {
                    return j
                },
                XJ: function() {
                    return b
                },
                ae: function() {
                    return x
                },
                au: function() {
                    return h
                },
                cT: function() {
                    return u
                },
                f0: function() {
                    return c
                },
                hM: function() {
                    return o
                },
                hm: function() {
                    return p
                },
                jl: function() {
                    return m
                },
                qk: function() {
                    return g
                }
            });
            var r = n(31125),
                i = n(1304),
                a = n(83464),
                s = n(16302);
            let l = e => ({
                    model: e.model,
                    domain: e.domain,
                    config: e.config ? {
                        confidence: e.config.confidence,
                        grounding: e.config.grounding,
                        detail: e.config.detail,
                        gqlStmt: e.config.gql_stmt,
                        jsonSchema: e.config.json_schema,
                        skills: e.config.skills
                    } : void 0,
                    metadata: e.metadata ? {
                        allowTraining: e.metadata.allow_training
                    } : void 0
                }),
                o = async () => await (0, s.s)().models.list(), d = async e => {
                    if (!e.domain) throw Error("Domain is required for image requests");
                    let t = l({
                        model: e.model,
                        domain: e.domain,
                        config: e.config,
                        metadata: e.metadata
                    });
                    return await (0, s.s)().image.generate({
                        ...t,
                        images: e.image ? [e.image] : void 0,
                        urls: e.urls
                    })
                }, u = async e => (await (0, i.r)(), (0, s.s)().files.upload({
                    checkDuplicate: !1,
                    file: e.get("file")
                })), c = async e => {
                    if (!e.domain) throw Error("Domain is required for document requests");
                    let t = l({
                        model: e.model,
                        domain: e.domain,
                        config: e.config,
                        metadata: e.metadata
                    });
                    return await (0, s.s)().document.generate({
                        ...t,
                        fileId: e.file_id,
                        url: e.url,
                        batch: e.batch
                    })
                }, m = async e => await (0, s.s)().document.schema({
                    fileId: e.file_id
                }), f = async e => await (0, s.s)().image.schema({
                    images: e.images
                }), g = async e => {
                    if (!e.domain) throw Error("Domain is required for video requests");
                    let t = l({
                        model: e.model,
                        domain: e.domain,
                        config: e.config,
                        metadata: e.metadata
                    });
                    return await (0, s.s)().video.generate({
                        ...t,
                        fileId: e.file_id,
                        url: e.url,
                        batch: e.batch
                    })
                }, v = async e => await (0, s.s)().video.wait(e, 300, 5), x = async e => {
                    if (!e.domain) throw Error("Domain is required for audio requests");
                    let t = l({
                        model: e.model,
                        domain: e.domain,
                        config: e.config,
                        metadata: e.metadata
                    });
                    return await (0, s.s)().audio.generate({
                        ...t,
                        fileId: e.file_id,
                        url: e.url,
                        batch: e.batch
                    })
                }, h = async e => await (0, s.s)().audio.wait(e, 300, 5), p = async e => {
                    var t, n, i, s, l, o, d, u, c, m;
                    let f = localStorage.getItem("access_token"),
                        g = {
                            model: e.model,
                            config: {
                                detail: null !== (o = null === (t = e.config) || void 0 === t ? void 0 : t.detail) && void 0 !== o ? o : "lo",
                                json_schema: null,
                                confidence: null !== (d = null === (n = e.config) || void 0 === n ? void 0 : n.confidence) && void 0 !== d && d,
                                grounding: null !== (u = null === (i = e.config) || void 0 === i ? void 0 : i.grounding) && void 0 !== u && u,
                                gql_stmt: null,
                                skills: e.skills
                            },
                            metadata: {
                                environment: null !== (c = null === (s = e.metadata) || void 0 === s ? void 0 : s.environment) && void 0 !== c ? c : "dev",
                                allow_training: null !== (m = null === (l = e.metadata) || void 0 === l ? void 0 : l.allow_training) && void 0 !== m && m
                            }
                        };
                    "image" === e.type ? (e.image && (g.images = [e.image]), e.urls && (g.images = e.urls)) : (e.id && (g.id = e.id), e.file_id && (g.file_id = e.file_id), e.url && (g.url = e.url), void 0 !== e.batch && (g.batch = e.batch));
                    let {
                        data: v
                    } = await a.default.post("".concat("https://api.vlm.run/v1", "/").concat(e.type, "/generate"), g, {
                        headers: {
                            Authorization: "Bearer ".concat(f)
                        }
                    });
                    if ((null == v ? void 0 : v.id) && e.skill_id) {
                        console.debug("[createSkillRequest] patching skill_id", {
                            requestId: v.id,
                            skill_id: e.skill_id
                        });
                        try {
                            await r.Z.patch("/api/v1/requests/".concat(v.id), {
                                skill_id: e.skill_id
                            })
                        } catch (e) {
                            console.warn("[createSkillRequest] failed to patch skill_id", e)
                        }
                    }
                    return v
                }, b = async (e, t, n, i, a) => {
                    let s = {
                        limit: e,
                        offset: t,
                        order_by: n,
                        descending: i
                    };
                    a && Object.entries(a).forEach(e => {
                        let [t, n] = e;
                        n && (s[t] = n)
                    });
                    let {
                        data: l
                    } = await r.Z.get("/api/v1/requests/org/", {
                        params: s
                    });
                    return l
                }, y = async e => {
                    let {
                        data: t
                    } = await r.Z.get("/api/v1/requests/".concat(e));
                    return t
                }, j = async (e, t) => {
                    let {
                        data: n
                    } = await r.Z.patch("/api/v1/requests/".concat(e), t);
                    return n
                }, w = async e => {
                    await r.Z.delete("/api/v1/requests/".concat(e))
                }
        },
        81907: function(e, t, n) {
            n.d(t, {
                $C: function() {
                    return _
                },
                $J: function() {
                    return y
                },
                C5: function() {
                    return w
                },
                It: function() {
                    return N
                },
                Rr: function() {
                    return q
                },
                TK: function() {
                    return c
                },
                Vb: function() {
                    return v
                },
                Wb: function() {
                    return b
                },
                Wp: function() {
                    return d
                },
                ZY: function() {
                    return p
                },
                eL: function() {
                    return u
                },
                jP: function() {
                    return j
                },
                ju: function() {
                    return h
                },
                kR: function() {
                    return x
                },
                lN: function() {
                    return k
                }
            });
            var r = n(92850),
                i = n(45345),
                a = n(29827),
                s = n(21770),
                l = n(22138),
                o = n(49981);
            let d = () => (0, r.a)({
                    queryKey: ["model_list"],
                    queryFn: () => (0, o.hM)(),
                    staleTime: 9e5,
                    refetchOnWindowFocus: !1,
                    refetchOnMount: !1
                }),
                u = (e, t, n, a, s, l) => {
                    var d;
                    return (0, r.a)({
                        queryKey: ["requests", e, t, n, a, s],
                        queryFn: () => (0, o.XJ)(e, e * t, n, a, s),
                        placeholderData: i.Wk,
                        enabled: null === (d = null == l ? void 0 : l.enabled) || void 0 === d || d,
                        refetchInterval: 5e3
                    })
                },
                c = (e, t) => {
                    var n;
                    return (0, r.a)({
                        queryKey: ["request", e],
                        queryFn: () => (0, o.QJ)(e),
                        refetchOnWindowFocus: !1,
                        enabled: null === (n = null == t ? void 0 : t.enabled) || void 0 === n || n,
                        retry: (e, t) => {
                            var n, r;
                            return (null == t ? void 0 : null === (n = t.response) || void 0 === n ? void 0 : n.status) !== 403 && (null == t ? void 0 : null === (r = t.response) || void 0 === r ? void 0 : r.status) !== 404 && e < 3
                        }
                    })
                },
                m = e => {
                    e.invalidateQueries({
                        queryKey: ["request_metrics"]
                    }), e.invalidateQueries({
                        queryKey: ["request_metrics_per_month"]
                    }), e.invalidateQueries({
                        queryKey: ["request_metrics_type_count"]
                    })
                },
                f = (e, t) => ({
                    id: e,
                    status: "submitting",
                    user_id: "",
                    created_at: new Date().toISOString(),
                    ...t
                }),
                g = e => e.getQueriesData({
                    queryKey: ["requests"]
                }).reduce((e, t) => {
                    var n;
                    let [, r] = t;
                    return Math.max(e, null !== (n = null == r ? void 0 : r.count) && void 0 !== n ? n : 0)
                }, 0),
                v = () => {
                    let e = (0, a.NL)();
                    return (0, s.D)({
                        mutationFn: e => {
                            let {
                                request: t
                            } = e;
                            return (0, o.Gq)(t)
                        },
                        onMutate: t => {
                            let {
                                request: n
                            } = t, r = crypto.randomUUID(), i = g(e);
                            return l.c.getState().add(r, f(r, {
                                type: "image",
                                domain: n.domain,
                                model_id: n.model
                            }), i), {
                                tempId: r
                            }
                        },
                        onError: (e, t, n) => {
                            (null == n ? void 0 : n.tempId) && l.c.getState().remove(n.tempId)
                        },
                        onSuccess: (t, n, r) => {
                            r && ((null == t ? void 0 : t.id) ? l.c.getState().resolve(r.tempId, t.id) : l.c.getState().remove(r.tempId)), e.invalidateQueries({
                                queryKey: ["requests"]
                            }), m(e)
                        }
                    })
                },
                x = () => (0, s.D)({
                    mutationFn: e => (0, o.cT)(e)
                }),
                h = () => {
                    let e = (0, a.NL)();
                    return (0, s.D)({
                        mutationFn: e => {
                            let {
                                request: t
                            } = e;
                            return (0, o.f0)(t)
                        },
                        onMutate: t => {
                            let {
                                request: n
                            } = t, r = crypto.randomUUID(), i = g(e);
                            return l.c.getState().add(r, f(r, {
                                type: "file",
                                domain: n.domain,
                                model_id: n.model
                            }), i), {
                                tempId: r
                            }
                        },
                        onError: (e, t, n) => {
                            (null == n ? void 0 : n.tempId) && l.c.getState().remove(n.tempId)
                        },
                        onSuccess: (t, n, r) => {
                            r && ((null == t ? void 0 : t.id) ? l.c.getState().resolve(r.tempId, t.id) : l.c.getState().remove(r.tempId)), e.invalidateQueries({
                                queryKey: ["requests"]
                            }), m(e)
                        }
                    })
                },
                p = () => (0, s.D)({
                    mutationFn: e => {
                        let {
                            request: t
                        } = e;
                        return (0, o.jl)(t)
                    }
                }),
                b = () => (0, s.D)({
                    mutationFn: e => {
                        let {
                            request: t
                        } = e;
                        return (0, o.HT)(t)
                    }
                }),
                y = () => {
                    let e = (0, a.NL)();
                    return (0, s.D)({
                        mutationFn: e => {
                            let {
                                request: t
                            } = e;
                            return (0, o.qk)(t)
                        },
                        onMutate: t => {
                            let {
                                request: n
                            } = t, r = crypto.randomUUID(), i = g(e);
                            return l.c.getState().add(r, f(r, {
                                type: "video",
                                domain: n.domain,
                                model_id: n.model
                            }), i), {
                                tempId: r
                            }
                        },
                        onError: (e, t, n) => {
                            (null == n ? void 0 : n.tempId) && l.c.getState().remove(n.tempId)
                        },
                        onSuccess: (t, n, r) => {
                            r && ((null == t ? void 0 : t.id) ? l.c.getState().resolve(r.tempId, t.id) : l.c.getState().remove(r.tempId)), e.invalidateQueries({
                                queryKey: ["requests"]
                            }), m(e)
                        }
                    })
                },
                j = () => (0, s.D)({
                    mutationFn: e => {
                        let {
                            id: t
                        } = e;
                        return (0, o.AI)(t)
                    }
                }),
                w = () => {
                    let e = (0, a.NL)();
                    return (0, s.D)({
                        mutationFn: e => {
                            let {
                                request: t
                            } = e;
                            return (0, o.ae)(t)
                        },
                        onMutate: t => {
                            let {
                                request: n
                            } = t, r = crypto.randomUUID(), i = g(e);
                            return l.c.getState().add(r, f(r, {
                                type: "audio",
                                domain: n.domain,
                                model_id: n.model
                            }), i), {
                                tempId: r
                            }
                        },
                        onError: (e, t, n) => {
                            (null == n ? void 0 : n.tempId) && l.c.getState().remove(n.tempId)
                        },
                        onSuccess: (t, n, r) => {
                            r && ((null == t ? void 0 : t.id) ? l.c.getState().resolve(r.tempId, t.id) : l.c.getState().remove(r.tempId)), e.invalidateQueries({
                                queryKey: ["requests"]
                            }), m(e)
                        }
                    })
                },
                q = () => {
                    let e = (0, a.NL)();
                    return (0, s.D)({
                        mutationFn: e => {
                            let {
                                request: t
                            } = e;
                            return (0, o.hm)(t)
                        },
                        onMutate: t => {
                            var n;
                            let {
                                request: r
                            } = t, i = crypto.randomUUID(), a = g(e);
                            return l.c.getState().add(i, f(i, {
                                type: null !== (n = ({
                                    document: "file"
                                })[r.type]) && void 0 !== n ? n : r.type,
                                model_id: r.model
                            }), a), {
                                tempId: i
                            }
                        },
                        onError: (e, t, n) => {
                            (null == n ? void 0 : n.tempId) && l.c.getState().remove(n.tempId)
                        },
                        onSuccess: (t, n, r) => {
                            r && ((null == t ? void 0 : t.id) ? l.c.getState().resolve(r.tempId, t.id) : l.c.getState().remove(r.tempId)), e.invalidateQueries({
                                queryKey: ["requests"]
                            }), m(e)
                        }
                    })
                },
                N = () => (0, s.D)({
                    mutationFn: e => {
                        let {
                            id: t
                        } = e;
                        return (0, o.au)(t)
                    }
                }),
                _ = () => {
                    let e = (0, a.NL)();
                    return (0, s.D)({
                        mutationFn: e => {
                            let {
                                id: t,
                                request: n
                            } = e;
                            return (0, o.WN)(t, n)
                        },
                        onSuccess(t, n) {
                            let {
                                id: r
                            } = n;
                            e.invalidateQueries({
                                queryKey: ["requests"],
                                exact: !1
                            }), m(e)
                        }
                    })
                },
                k = () => {
                    let e = (0, a.NL)();
                    return (0, s.D)({
                        mutationFn: e => {
                            let {
                                id: t
                            } = e;
                            return (0, o.Jl)(t)
                        },
                        onSuccess: () => {
                            e.invalidateQueries({
                                queryKey: ["requests"]
                            }), m(e)
                        }
                    })
                }
        },
        43476: function(e, t, n) {
            function r() {
                return new Date().getTimezoneOffset()
            }

            function i(e) {
                return e ? e.slice(0, 10) : ""
            }

            function a(e) {
                return e instanceof Date ? e : new Date("number" == typeof e || e.endsWith("Z") || /[+-]\d{2}:\d{2}$/.test(e) ? e : e + "Z")
            }

            function s(e) {
                return new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime()
            }

            function l(e) {
                let t = String(e.getHours()).padStart(2, "0"),
                    n = String(e.getMinutes()).padStart(2, "0"),
                    r = String(e.getSeconds()).padStart(2, "0");
                return "".concat(t, ":").concat(n, ":").concat(r)
            }

            function o(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Date;
                return t && t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate() ? null : function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date,
                        n = Math.round((s(t) - s(e)) / 864e5);
                    return n <= 0 ? "Today" : 1 === n ? "Yesterday" : "".concat(n, " days ago")
                }(e, n)
            }
            n.d(t, {
                HO: function() {
                    return r
                },
                Un: function() {
                    return o
                },
                fI: function() {
                    return l
                },
                kT: function() {
                    return a
                },
                t7: function() {
                    return i
                }
            })
        },
        95658: function(e, t, n) {
            n.d(t, {
                FX: function() {
                    return r
                },
                uf: function() {
                    return i
                }
            });
            let r = e => e ? (e / 1e3).toFixed(1) : "0.0",
                i = e => e && 0 !== e ? e >= 1e6 ? "".concat((e / 1e6).toFixed(1), "M") : e >= 1e3 ? "".concat((e / 1e3).toFixed(1), "K") : e.toString() : "0"
        }
    }
]);