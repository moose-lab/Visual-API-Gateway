try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            s = (new e.Error).stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "984b818c-5cd9-4a3e-aa3b-5c7a991902af", e._sentryDebugIdIdentifier = "sentry-dbid-984b818c-5cd9-4a3e-aa3b-5c7a991902af")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [95990], {
        28485: function(e, s, t) {
            t.d(s, {
                G: function() {
                    return C
                }
            });
            var n = t(57437),
                a = t(2265),
                r = t(64982),
                i = t(91377),
                l = t(89555),
                d = t(63558),
                o = t(65097),
                c = t(9426),
                x = t(82023),
                m = t(48736),
                u = t(33276),
                p = t(82718),
                h = t(95290),
                f = t(51817),
                g = t(26110),
                j = t(6512);
            let b = {
                chat_completion: {
                    label: "Chat Completions",
                    icon: x.Z
                },
                request: {
                    label: "Requests",
                    icon: m.Z
                },
                agent_execution: {
                    label: "Agent Executions",
                    icon: u.Z
                },
                chat: {
                    label: "Chat",
                    icon: p.Z
                },
                other: {
                    label: "Other",
                    icon: h.Z
                }
            };

            function N(e) {
                var s, t;
                let {
                    open: a,
                    onOpenChange: r
                } = e, {
                    data: i,
                    isLoading: l
                } = (0, o.Ex)(a), x = (null == i ? void 0 : i.period_end) ? (0, c.Z)(new Date(1e3 * i.period_end), new Date) : null, m = (null == i ? void 0 : i.balance_mode) === "dollars";
                return (0, n.jsx)(g.Vq, {
                    open: a,
                    onOpenChange: r,
                    children: (0, n.jsxs)(g.cZ, {
                        className: "max-w-md",
                        hideCloseButton: !0,
                        children: [(0, n.jsx)(g.fK, {
                            children: (0, n.jsx)(g.$N, {
                                children: m ? "Usage Breakdown" : "Credits Breakdown"
                            })
                        }), l ? (0, n.jsx)("div", {
                            className: "flex items-center justify-center py-8",
                            children: (0, n.jsx)(f.Z, {
                                className: "size-5 animate-spin text-muted-foreground"
                            })
                        }) : i ? (0, n.jsxs)("div", {
                            className: "flex flex-col gap-3",
                            children: [null !== x && x >= 0 && (0, n.jsxs)("p", {
                                className: "text-sm text-muted-foreground",
                                children: [x, " ", 1 === x ? "day" : "days", " remaining in cycle"]
                            }), m ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsxs)("div", {
                                    className: "text-sm font-medium text-foreground",
                                    children: ["Total API Usage", (0, n.jsx)("span", {
                                        className: "float-right font-semibold",
                                        children: (0, d.gC)(null !== (t = i.total_dollar_used) && void 0 !== t ? t : 0)
                                    })]
                                }), (0, n.jsx)(j.Separator, {}), (null === (s = i.dollar_breakdown) || void 0 === s ? void 0 : s.length) ? (0, n.jsx)("div", {
                                    className: "flex flex-col",
                                    children: i.dollar_breakdown.sort((e, s) => "other" === e.category ? 1 : "other" === s.category ? -1 : s.dollar_used - e.dollar_used).map(e => {
                                        var s, t;
                                        return (0, n.jsxs)("div", {
                                            children: [(0, n.jsxs)("div", {
                                                className: "flex items-center justify-between py-3",
                                                children: [(0, n.jsxs)("span", {
                                                    className: "flex items-center gap-2 text-sm text-foreground",
                                                    children: [(() => {
                                                        let s = b[e.category];
                                                        if (s) {
                                                            let e = s.icon;
                                                            return (0, n.jsx)(e, {
                                                                className: "size-4 text-muted-foreground"
                                                            })
                                                        }
                                                        return null
                                                    })(), null !== (t = null === (s = b[e.category]) || void 0 === s ? void 0 : s.label) && void 0 !== t ? t : e.category]
                                                }), (0, n.jsx)("span", {
                                                    className: "text-sm font-medium text-foreground",
                                                    children: (0, d.gC)(e.dollar_used)
                                                })]
                                            }), (0, n.jsx)(j.Separator, {})]
                                        }, e.category)
                                    })
                                }) : (0, n.jsx)("p", {
                                    className: "py-4 text-center text-sm text-muted-foreground",
                                    children: "No usage this cycle"
                                })]
                            }) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsxs)("div", {
                                    className: "text-sm font-medium text-foreground",
                                    children: ["Total Cost", (0, n.jsx)("span", {
                                        className: "float-right font-semibold",
                                        children: (0, d.VC)(i.total_credits)
                                    })]
                                }), (0, n.jsx)(j.Separator, {}), 0 === i.breakdown.length ? (0, n.jsx)("p", {
                                    className: "py-4 text-center text-sm text-muted-foreground",
                                    children: "No credit usage this cycle"
                                }) : (0, n.jsx)("div", {
                                    className: "flex flex-col",
                                    children: i.breakdown.sort((e, s) => "other" === e.category ? 1 : "other" === s.category ? -1 : s.credits - e.credits).map(e => {
                                        var s, t;
                                        return (0, n.jsxs)("div", {
                                            children: [(0, n.jsxs)("div", {
                                                className: "flex items-center justify-between py-3",
                                                children: [(0, n.jsxs)("span", {
                                                    className: "flex items-center gap-2 text-sm text-foreground",
                                                    children: [(() => {
                                                        let s = b[e.category];
                                                        if (s) {
                                                            let e = s.icon;
                                                            return (0, n.jsx)(e, {
                                                                className: "size-4 text-muted-foreground"
                                                            })
                                                        }
                                                        return null
                                                    })(), null !== (t = null === (s = b[e.category]) || void 0 === s ? void 0 : s.label) && void 0 !== t ? t : e.category]
                                                }), (0, n.jsx)("span", {
                                                    className: "text-sm font-medium text-foreground",
                                                    children: (0, d.VC)(e.credits)
                                                })]
                                            }), (0, n.jsx)(j.Separator, {})]
                                        }, e.category)
                                    })
                                })]
                            })]
                        }) : (0, n.jsx)("p", {
                            className: "py-4 text-center text-sm text-muted-foreground",
                            children: "No active subscription"
                        })]
                    })
                })
            }
            let v = {
                    [i.L0.STARTER]: 1e3,
                    [i.L0.PRO]: 1e5,
                    [i.L0.ENTERPRISE]: 1e5
                },
                y = {
                    [i.L0.STARTER]: 10,
                    [i.L0.PRO]: 1e3,
                    [i.L0.ENTERPRISE]: 799.99
                },
                w = {
                    [i.L0.PRO]: .2
                };

            function C(e) {
                var s, t, o, c, x, m;
                let {
                    isOpen: u
                } = e, p = (0, l.U)(), {
                    data: h,
                    isLoading: f
                } = (0, r.$r)(p), [g, j] = (0, a.useState)(!1);
                if (!u || f || !h) return null;
                let b = null !== (s = h.plan_type) && void 0 !== s ? s : i.L0.FREE,
                    C = b === i.L0.PAYG,
                    k = b === i.L0.FREE,
                    z = b === i.L0.STARTER || b === i.L0.PRO || b === i.L0.ENTERPRISE;
                if (!C && !k && !z) return null;
                let _ = null !== (t = h.credit_balance) && void 0 !== t ? t : 0,
                    F = null !== (o = h.dollar_balance) && void 0 !== o ? o : 0,
                    E = "dollars" === h.billing_mode,
                    Z = v[b],
                    A = C && _ <= 0 && !E,
                    R = Math.max(null !== (c = h.credit_used_last_seg) && void 0 !== c ? c : 0, -Math.min(_, 0));
                if (E) {
                    let e = Math.max(0, -F),
                        s = F < 0;
                    if (C && F <= 0) return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("button", {
                            onClick: () => j(!0),
                            className: "mx-2 mb-2 w-[calc(100%-16px)] cursor-pointer rounded-[10px] border border-border px-3 py-2.5 text-left transition-colors hover:bg-accent/50",
                            children: [(0, n.jsx)("p", {
                                className: "mb-1.5 text-xs font-medium text-foreground",
                                children: "PAYG Usage"
                            }), (0, n.jsxs)("div", {
                                className: "flex items-baseline justify-between text-xs",
                                children: [(0, n.jsx)("span", {
                                    className: "font-semibold text-primary",
                                    children: (0, d.gC)(e)
                                }), (0, n.jsx)("span", {
                                    className: "text-muted-foreground",
                                    children: "used"
                                })]
                            })]
                        }), (0, n.jsx)(N, {
                            open: g,
                            onOpenChange: j
                        })]
                    });
                    let t = null !== (x = y[b]) && void 0 !== x ? x : 0,
                        a = null !== (m = w[b]) && void 0 !== m ? m : 0;
                    if (s && t > 0) {
                        let s = t + e,
                            r = Math.round(t / s * 100);
                        return (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)("div", {
                                className: "mx-2 mb-2 rounded-[10px] border border-border px-3 py-2.5 cursor-pointer text-left transition-colors hover:bg-accent/50",
                                onClick: () => j(!0),
                                children: [(0, n.jsxs)("div", {
                                    className: "mb-1.5 flex items-start justify-between text-[10px] text-muted-foreground",
                                    children: [(0, n.jsx)("p", {
                                        children: "Included"
                                    }), (0, n.jsxs)("p", {
                                        children: ["On-Demand", a > 0 ? " (".concat(Math.round(100 * a), "% off)") : ""]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "mb-1 flex items-baseline justify-between text-xs font-medium text-foreground",
                                    children: [(0, n.jsxs)("span", {
                                        children: [(0, d.gC)(t), " / ", (0, d.gC)(t)]
                                    }), (0, n.jsx)("span", {
                                        children: (0, d.gC)(a > 0 ? e * (1 - a) : e)
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "flex h-2 w-full overflow-hidden rounded-full",
                                    children: [(0, n.jsx)("div", {
                                        className: "h-full bg-blue-500",
                                        style: {
                                            width: "".concat(r, "%")
                                        }
                                    }), (0, n.jsx)("div", {
                                        className: "h-full bg-purple-500",
                                        style: {
                                            width: "".concat(100 - r, "%")
                                        }
                                    })]
                                })]
                            }), (0, n.jsx)(N, {
                                open: g,
                                onOpenChange: j
                            })]
                        })
                    }
                    let r = Math.max(F, 0),
                        i = C && r > 0 ? "Usage billing starts after remaining balance is used" : null;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            className: "mx-2 mb-2 rounded-[10px] border border-border px-3 py-2.5 cursor-pointer text-left transition-colors hover:bg-accent/50",
                            onClick: () => j(!0),
                            children: [(0, n.jsx)("p", {
                                className: "mb-1.5 text-xs font-medium text-foreground",
                                children: "Remaining Balance"
                            }), (0, n.jsx)("div", {
                                className: "flex items-baseline justify-between text-xs",
                                children: (0, n.jsx)("span", {
                                    className: "font-semibold text-primary",
                                    children: (0, d.gC)(r)
                                })
                            }), i && (0, n.jsx)("p", {
                                className: "mt-1 text-[10px] text-muted-foreground",
                                children: i
                            })]
                        }), (0, n.jsx)(N, {
                            open: g,
                            onOpenChange: j
                        })]
                    })
                }
                if (A) return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("button", {
                        onClick: () => j(!0),
                        className: "mx-2 mb-2 w-[calc(100%-16px)] cursor-pointer rounded-[10px] border border-border px-3 py-2.5 text-left transition-colors hover:bg-accent/50",
                        children: [(0, n.jsx)("p", {
                            className: "mb-1.5 text-xs font-medium text-foreground",
                            children: "PAYG Usage"
                        }), (0, n.jsx)("div", {
                            className: "flex items-baseline justify-between text-xs",
                            children: (0, n.jsx)("span", {
                                className: "font-semibold text-primary",
                                children: (0, d.VC)(R)
                            })
                        })]
                    }), (0, n.jsx)(N, {
                        open: g,
                        onOpenChange: j
                    })]
                });
                if (z && _ < 0 && Z) {
                    let e = Math.abs(_),
                        s = Z + e,
                        t = Math.round(Z / s * 100);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            className: "mx-2 mb-2 rounded-[10px] border border-border px-3 py-2.5 cursor-pointer text-left transition-colors hover:bg-accent/50",
                            onClick: () => j(!0),
                            children: [(0, n.jsxs)("div", {
                                className: "mb-1.5 flex items-start justify-between text-[10px] text-muted-foreground",
                                children: [(0, n.jsx)("p", {
                                    children: "Included"
                                }), (0, n.jsx)("p", {
                                    children: "On-Demand"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "mb-1 flex items-baseline justify-between text-xs font-medium text-foreground",
                                children: [(0, n.jsx)("span", {
                                    children: (0, d.VC)(Z)
                                }), (0, n.jsx)("span", {
                                    children: (0, d.VC)(e)
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "flex h-2 w-full overflow-hidden rounded-full",
                                children: [(0, n.jsx)("div", {
                                    className: "h-full bg-blue-500",
                                    style: {
                                        width: "".concat(t, "%")
                                    }
                                }), (0, n.jsx)("div", {
                                    className: "h-full bg-purple-500",
                                    style: {
                                        width: "".concat(100 - t, "%")
                                    }
                                })]
                            })]
                        }), (0, n.jsx)(N, {
                            open: g,
                            onOpenChange: j
                        })]
                    })
                }
                let D = Math.max(_, 0),
                    O = C && D > 0 ? "Usage billing starts after remaining balance is used" : null;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: "mx-2 mb-2 rounded-[10px] border border-border px-3 py-2.5 cursor-pointer text-left transition-colors hover:bg-accent/50",
                        onClick: () => j(!0),
                        children: [(0, n.jsx)("p", {
                            className: "mb-1.5 text-xs font-medium text-foreground",
                            children: k ? "Free Balance" : "Remaining Balance"
                        }), (0, n.jsx)("div", {
                            className: "flex items-baseline justify-between text-xs",
                            children: (0, n.jsx)("span", {
                                className: "font-semibold text-primary",
                                children: (0, d.VC)(D)
                            })
                        }), O && (0, n.jsx)("p", {
                            className: "mt-1 text-[10px] text-muted-foreground",
                            children: O
                        })]
                    }), (0, n.jsx)(N, {
                        open: g,
                        onOpenChange: j
                    })]
                })
            }
        },
        16831: function(e, s, t) {
            t.d(s, {
                F$: function() {
                    return d
                },
                Q5: function() {
                    return o
                },
                qE: function() {
                    return l
                }
            });
            var n = t(57437),
                a = t(2265),
                r = t(61146),
                i = t(94508);
            let l = a.forwardRef((e, s) => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)(r.fC, {
                    ref: s,
                    className: (0, i.cn)("relative flex size-10 shrink-0 overflow-hidden rounded-full", t),
                    ...a
                })
            });
            l.displayName = r.fC.displayName;
            let d = a.forwardRef((e, s) => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)(r.Ee, {
                    ref: s,
                    className: (0, i.cn)("aspect-square size-full", t),
                    ...a
                })
            });
            d.displayName = r.Ee.displayName;
            let o = a.forwardRef((e, s) => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)(r.NY, {
                    ref: s,
                    className: (0, i.cn)("flex size-full items-center justify-center rounded-full bg-muted", t),
                    ...a
                })
            });
            o.displayName = r.NY.displayName
        },
        6512: function(e, s, t) {
            t.d(s, {
                Separator: function() {
                    return l
                }
            });
            var n = t(57437),
                a = t(2265),
                r = t(55156),
                i = t(94508);
            let l = a.forwardRef((e, s) => {
                let {
                    className: t,
                    orientation: a = "horizontal",
                    decorative: l = !0,
                    ...d
                } = e;
                return (0, n.jsx)(r.f, {
                    ref: s,
                    decorative: l,
                    orientation: a,
                    className: (0, i.cn)("shrink-0 bg-border", "horizontal" === a ? "h-px w-full" : "h-full w-px", t),
                    ...d
                })
            });
            l.displayName = r.f.displayName
        },
        58319: function(e, s, t) {
            t.d(s, {
                a: function() {
                    return D
                }
            });
            var n = t(57437),
                a = t(94508),
                r = t(2265),
                i = t(99376),
                l = t(64982),
                d = t(30401),
                o = t(25466),
                c = t(47692),
                x = t(54353),
                m = t(8102);

            function u() {
                var e, s;
                let {
                    user: t,
                    isLoaded: n
                } = (0, x.aF)(), a = (0, m.L)(e => e.inspecting);
                if (a) {
                    let e = ((a.split("@")[0] || "").slice(0, 2) || a[0] || "U").toUpperCase();
                    return {
                        displayName: a,
                        displayEmail: a,
                        imageUrl: void 0,
                        initials: e,
                        isReady: !0,
                        isInspecting: !0
                    }
                }
                if (!t) return {
                    displayName: "User",
                    displayEmail: "",
                    imageUrl: void 0,
                    initials: "U",
                    isReady: n,
                    isInspecting: !1
                };
                let r = (null === (e = t.emailAddresses[0]) || void 0 === e ? void 0 : e.emailAddress) || "",
                    i = t.firstName && t.lastName ? "".concat(t.firstName[0]).concat(t.lastName[0]) : (null === (s = r[0]) || void 0 === s ? void 0 : s.toUpperCase()) || "U";
                return {
                    displayName: t.fullName || t.firstName || r || "User",
                    displayEmail: r,
                    imageUrl: t.imageUrl,
                    initials: i,
                    isReady: !0,
                    isInspecting: !1
                }
            }
            var p = t(16831),
                h = t(62869),
                f = t(84190),
                g = t(81103);

            function j(e) {
                let {
                    isOpen: s = !0
                } = e, t = (0, i.useRouter)(), {
                    displayName: r,
                    displayEmail: x,
                    imageUrl: m,
                    initials: j,
                    isReady: b
                } = u(), {
                    data: N
                } = (0, l.$r)(), v = async () => {
                    t.push("/logout")
                };
                return b ? (0, n.jsx)(g.pn, {
                    delayDuration: 400,
                    children: (0, n.jsxs)(f.h_, {
                        children: [(0, n.jsxs)(g.u, {
                            children: [(0, n.jsx)(g.aJ, {
                                asChild: !0,
                                children: (0, n.jsx)(f.$F, {
                                    asChild: !0,
                                    children: (0, n.jsx)(h.z, {
                                        variant: "ghost",
                                        className: (0, a.cn)(s ? "h-auto hover:bg-[#F7F7F8]" : "h-auto", "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1", s ? "w-full justify-start rounded-[8px] p-2" : "size-8 justify-center rounded-[8px] p-0"),
                                        children: (0, n.jsxs)("div", {
                                            className: "flex w-full items-center",
                                            children: [(0, n.jsxs)(p.qE, {
                                                className: (0, a.cn)("shrink-0 border border-border/50", s ? "size-7" : "size-6"),
                                                children: [(0, n.jsx)(p.F$, {
                                                    src: m,
                                                    alt: r
                                                }), (0, n.jsx)(p.Q5, {
                                                    className: "bg-[#8CBF5D] text-xs font-semibold text-white",
                                                    children: j
                                                })]
                                            }), s && (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsxs)("div", {
                                                    className: "ml-2.5 min-w-0 flex-1 text-left",
                                                    children: [(0, n.jsx)("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: (0, n.jsx)("p", {
                                                            className: "truncate text-xs font-medium",
                                                            children: r
                                                        })
                                                    }), (0, n.jsx)("p", {
                                                        className: "truncate text-[10px] text-muted-foreground",
                                                        children: x
                                                    })]
                                                }), (0, n.jsx)("div", {
                                                    className: "-mt-0.5 ml-2 size-6 shrink-0 self-start"
                                                })]
                                            })]
                                        })
                                    })
                                })
                            }), (0, n.jsx)(g._v, {
                                side: "right",
                                className: "max-w-xs break-all",
                                children: x
                            })]
                        }), (0, n.jsxs)(f.AW, {
                            className: "w-72 border p-0 shadow-lg",
                            align: "start",
                            side: "top",
                            sideOffset: 12,
                            alignOffset: 0,
                            children: [(0, n.jsx)("div", {
                                className: "border-b p-4",
                                children: (0, n.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [(0, n.jsxs)(p.qE, {
                                        className: "size-10 border border-border",
                                        children: [(0, n.jsx)(p.F$, {
                                            src: m,
                                            alt: r
                                        }), (0, n.jsx)(p.Q5, {
                                            className: "bg-[#8CBF5D] font-semibold text-white",
                                            children: j
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "min-w-0 flex-1",
                                        children: [(0, n.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, n.jsx)("h3", {
                                                className: "truncate text-sm font-medium",
                                                children: r
                                            }), (0, n.jsx)(d.Z, {
                                                className: "size-4 shrink-0 text-emerald-500"
                                            })]
                                        }), (0, n.jsx)("p", {
                                            className: "break-all text-xs text-muted-foreground",
                                            children: x
                                        })]
                                    })]
                                })
                            }), (0, n.jsxs)("div", {
                                className: "p-1",
                                children: [(0, n.jsxs)(f.Xi, {
                                    onClick: () => {
                                        let e = "https://app.vlm.run";
                                        window.location.href = e ? "".concat(e, "/dashboard") : "/dashboard"
                                    },
                                    className: "px-3 py-2",
                                    children: [(0, n.jsx)(o.Z, {
                                        className: "mr-3 size-4 text-muted-foreground"
                                    }), (0, n.jsx)("span", {
                                        children: "Go to Dashboard"
                                    })]
                                }), (0, n.jsx)(f.VD, {})]
                            }), (0, n.jsx)("div", {
                                className: "p-1",
                                children: (0, n.jsxs)(f.Xi, {
                                    onClick: v,
                                    className: "px-3 py-2 text-red-600 focus:text-red-600 dark:text-red-400",
                                    children: [(0, n.jsx)(c.Z, {
                                        className: "mr-3 size-4"
                                    }), (0, n.jsx)("span", {
                                        children: "Sign out"
                                    })]
                                })
                            })]
                        })]
                    })
                }) : null
            }
            var b = t(29827),
                N = t(98617),
                v = t(88906),
                y = t(92369),
                w = t(24156),
                C = t(98420),
                k = t(40519),
                z = t(96215),
                _ = t(93022),
                F = t(51817),
                E = t(14438);

            function Z(e) {
                let {
                    invitations: s
                } = e, [t, a] = (0, r.useState)(null), {
                    mutate: i,
                    isPending: d
                } = (0, l.Cu)(), {
                    mutate: o,
                    isPending: c
                } = (0, l.dX)();
                return 0 === s.length ? null : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(f.Ju, {
                        className: "px-3 pt-2 text-[10px] font-medium uppercase tracking-wide text-muted-foreground",
                        children: "Invitations"
                    }), (0, n.jsx)("div", {
                        className: "space-y-1 px-2 pb-1",
                        children: s.map(e => (0, n.jsxs)("div", {
                            className: "rounded-md px-1 py-1.5 text-sm",
                            children: [(0, n.jsxs)("div", {
                                className: "flex items-start gap-2",
                                children: [(0, n.jsx)(C.Z, {
                                    className: "mt-0.5 size-4 shrink-0 text-muted-foreground"
                                }), (0, n.jsx)("span", {
                                    className: "min-w-0 flex-1 text-sm leading-5",
                                    children: (0, n.jsx)("span", {
                                        className: "line-clamp-2 break-words [overflow-wrap:anywhere]",
                                        children: e.organization.name
                                    })
                                })]
                            }), t === e.id ? (0, n.jsxs)("div", {
                                className: "mt-2 space-y-2",
                                children: [(0, n.jsxs)("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: ["Switch to ", e.organization.name, "? This will become your active organization."]
                                }), (0, n.jsxs)("div", {
                                    className: "flex gap-2",
                                    children: [(0, n.jsx)("button", {
                                        type: "button",
                                        onClick: s => {
                                            s.stopPropagation(), i(e.id, {
                                                onError: e => {
                                                    var s, t;
                                                    E.Am.error((null == e ? void 0 : null === (t = e.response) || void 0 === t ? void 0 : null === (s = t.data) || void 0 === s ? void 0 : s.detail) || "Failed to accept invitation"), a(null)
                                                }
                                            })
                                        },
                                        disabled: d,
                                        className: "flex-1 rounded-md bg-primary px-2 py-1 text-xs font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50",
                                        children: d ? (0, n.jsx)(F.Z, {
                                            className: "mx-auto size-3 animate-spin"
                                        }) : "Confirm"
                                    }), (0, n.jsx)("button", {
                                        type: "button",
                                        onClick: e => {
                                            e.stopPropagation(), a(null)
                                        },
                                        disabled: d,
                                        className: "flex-1 rounded-md border px-2 py-1 text-xs font-medium hover:bg-accent disabled:opacity-50",
                                        children: "Cancel"
                                    })]
                                })]
                            }) : (0, n.jsxs)("div", {
                                className: "mt-2 flex gap-2",
                                children: [(0, n.jsx)("button", {
                                    type: "button",
                                    onClick: s => {
                                        s.stopPropagation(), a(e.id)
                                    },
                                    className: "flex-1 rounded-md bg-primary px-2 py-1 text-xs font-medium text-primary-foreground hover:bg-primary/90",
                                    children: "Accept"
                                }), (0, n.jsx)("button", {
                                    type: "button",
                                    onClick: s => {
                                        s.stopPropagation(), o(e.id, {
                                            onError: e => {
                                                var s, t;
                                                E.Am.error((null == e ? void 0 : null === (t = e.response) || void 0 === t ? void 0 : null === (s = t.data) || void 0 === s ? void 0 : s.detail) || "Failed to decline invitation")
                                            }
                                        })
                                    },
                                    disabled: c,
                                    className: "flex-1 rounded-md border px-2 py-1 text-xs font-medium hover:bg-accent disabled:opacity-50",
                                    children: c ? (0, n.jsx)(F.Z, {
                                        className: "mx-auto size-3 animate-spin"
                                    }) : "Decline"
                                })]
                            })]
                        }, e.id))
                    }), (0, n.jsx)(f.VD, {})]
                })
            }

            function A(e) {
                let {
                    memberships: s
                } = e, {
                    data: t
                } = (0, l.$r)(), {
                    mutate: a,
                    isPending: r,
                    variables: i
                } = (0, l.I7)();
                return s.length < 2 ? null : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(f.Ju, {
                        className: "px-2.5 pb-1 pt-2 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground",
                        children: "Organizations"
                    }), s.map(e => {
                        let s = r ? e.organization_id === i : e.organization_id === (null == t ? void 0 : t.id),
                            l = r && i === e.organization_id;
                        return (0, n.jsxs)(f.Xi, {
                            title: e.organization_name,
                            onSelect: t => {
                                s || r || (t.preventDefault(), a(e.organization_id, {
                                    onError: e => {
                                        var s, t;
                                        E.Am.error((null == e ? void 0 : null === (t = e.response) || void 0 === t ? void 0 : null === (s = t.data) || void 0 === s ? void 0 : s.detail) || "Failed to switch organization")
                                    }
                                }))
                            },
                            disabled: r,
                            className: "h-auto items-start gap-2.5 px-2.5 py-2",
                            children: [l ? (0, n.jsx)(F.Z, {
                                className: "mt-0.5 size-4 shrink-0 animate-spin text-muted-foreground"
                            }) : (0, n.jsx)(C.Z, {
                                className: "mt-0.5 size-4 shrink-0 text-muted-foreground"
                            }), (0, n.jsx)("span", {
                                className: "min-w-0 flex-1 text-sm leading-5",
                                children: (0, n.jsx)("span", {
                                    className: "line-clamp-2 break-words [overflow-wrap:anywhere]",
                                    children: e.organization_name
                                })
                            }), s && (0, n.jsx)(d.Z, {
                                className: "mt-0.5 size-4 shrink-0 text-emerald-500"
                            })]
                        }, e.organization_id)
                    }), (0, n.jsx)(f.VD, {
                        className: "mx-1"
                    })]
                })
            }

            function R(e) {
                var s, t, r, o;
                let {
                    isOpen: x = !0
                } = e, j = (0, i.useRouter)(), {
                    displayName: F,
                    displayEmail: E,
                    imageUrl: R,
                    initials: D,
                    isReady: O
                } = u(), {
                    isSuperUser: S,
                    isOrgAdmin: U,
                    showAdminControls: P,
                    setShowAdminControls: I,
                    demoAnalytics: L,
                    setDemoAnalytics: T
                } = (0, m.L)(e => ({
                    isSuperUser: e.isSuperUser,
                    isOrgAdmin: e.isOrgAdmin,
                    showAdminControls: e.showAdminControls,
                    setShowAdminControls: e.setShowAdminControls,
                    demoAnalytics: e.demoAnalytics,
                    setDemoAnalytics: e.setDemoAnalytics
                })), q = (0, b.NL)(), V = async () => {
                    j.push("/logout")
                }, {
                    data: $,
                    isPending: B
                } = (0, l.$r)(O), {
                    data: M,
                    isPending: X
                } = (0, l.Qy)(O), {
                    data: Q
                } = (0, l.oO)(O), Y = null !== (t = null == Q ? void 0 : null === (s = Q.data) || void 0 === s ? void 0 : s.length) && void 0 !== t ? t : 0, G = null !== (r = null == M ? void 0 : M.data) && void 0 !== r ? r : [], J = G.length || ($ ? 1 : 0), K = null == $ ? void 0 : $.name, W = !X && J > 1;
                if (!O) return (0, n.jsxs)("div", {
                    className: (0, a.cn)(x ? "flex w-full items-center gap-2.5 p-2" : "flex justify-center p-0"),
                    children: [(0, n.jsx)(_.O, {
                        className: (0, a.cn)("shrink-0 rounded-full", x ? "size-8" : "size-6")
                    }), x && (0, n.jsxs)("div", {
                        className: "min-w-0 flex-1 space-y-1",
                        children: [(0, n.jsx)(_.O, {
                            className: "h-3 w-20"
                        }), (0, n.jsx)(_.O, {
                            className: "h-2.5 w-28"
                        })]
                    })]
                });
                let H = S ? {
                    label: "Super Admin",
                    icon: N.Z
                } : U ? {
                    label: "Admin",
                    icon: v.Z
                } : {
                    label: "Member",
                    icon: y.Z
                };
                return (0, n.jsx)(g.pn, {
                    delayDuration: 200,
                    children: (0, n.jsxs)(f.h_, {
                        children: [(0, n.jsxs)(g.u, {
                            children: [(0, n.jsx)(g.aJ, {
                                asChild: !0,
                                children: (0, n.jsx)(f.$F, {
                                    asChild: !0,
                                    children: (0, n.jsx)(h.z, {
                                        variant: "ghost",
                                        "aria-label": W && K ? "".concat(F, ", ").concat(K, ", ").concat(J, " organizations") : K ? "".concat(F, ", ").concat(K) : F,
                                        className: (0, a.cn)("h-auto min-w-0 whitespace-normal focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1", x ? "w-full justify-start rounded-xl px-2 py-2 hover:bg-[#F7F7F8]" : "size-8 justify-center rounded-xl p-0"),
                                        children: (0, n.jsxs)("div", {
                                            className: "flex w-full min-w-0 items-center gap-2",
                                            children: [(0, n.jsxs)("div", {
                                                className: "relative shrink-0",
                                                children: [(0, n.jsxs)(p.qE, {
                                                    className: (0, a.cn)("border border-border/40", x ? "size-8" : "size-6"),
                                                    children: [(0, n.jsx)(p.F$, {
                                                        src: R,
                                                        alt: F
                                                    }), (0, n.jsx)(p.Q5, {
                                                        className: "bg-[#8CBF5D] text-[11px] font-semibold text-white",
                                                        children: D
                                                    })]
                                                }), Y > 0 && (0, n.jsx)("span", {
                                                    className: "absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-background bg-blue-500"
                                                }), !x && W && (0, n.jsx)("span", {
                                                    className: "absolute -bottom-1 -right-1 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-foreground px-0.5 text-[8px] font-semibold leading-none text-background",
                                                    children: J > 9 ? "9+" : J
                                                })]
                                            }), x && (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsxs)("div", {
                                                    className: "min-w-0 flex-1 text-left",
                                                    children: [(0, n.jsx)("p", {
                                                        className: "truncate text-[13px] font-medium leading-5",
                                                        children: F
                                                    }), B ? (0, n.jsx)(_.O, {
                                                        className: "mt-1 h-3 w-[80%]"
                                                    }) : K ? (0, n.jsx)("p", {
                                                        className: "mt-0.5 truncate text-[11px] leading-4 text-muted-foreground",
                                                        children: K
                                                    }) : null]
                                                }), (0, n.jsxs)("div", {
                                                    className: "flex shrink-0 items-center gap-1",
                                                    children: [W && (0, n.jsx)("span", {
                                                        className: "rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-medium tabular-nums text-muted-foreground",
                                                        children: J
                                                    }), (0, n.jsx)(w.Z, {
                                                        className: "size-3.5 text-muted-foreground/70"
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })
                            }), !x && (0, n.jsx)(g._v, {
                                side: "right",
                                className: "max-w-xs",
                                children: W && K ? "".concat(K, " \xb7 ").concat(J, " organizations") : K || F
                            })]
                        }), (0, n.jsxs)(f.AW, {
                            className: "w-[280px] overflow-hidden rounded-xl border border-border/70 p-1.5 shadow-lg",
                            align: "start",
                            side: "top",
                            sideOffset: 8,
                            children: [(0, n.jsx)("div", {
                                className: "px-2.5 py-2.5",
                                children: (0, n.jsxs)("div", {
                                    className: "flex items-start gap-3",
                                    children: [(0, n.jsxs)(p.qE, {
                                        className: "size-9 shrink-0 border border-border/40",
                                        children: [(0, n.jsx)(p.F$, {
                                            src: R,
                                            alt: F
                                        }), (0, n.jsx)(p.Q5, {
                                            className: "bg-[#8CBF5D] text-sm font-semibold text-white",
                                            children: D
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "min-w-0 flex-1 pt-0.5",
                                        children: [(0, n.jsx)("h3", {
                                            className: "truncate text-sm font-medium leading-5",
                                            children: F
                                        }), E !== F && (0, n.jsx)("p", {
                                            className: "mt-0.5 break-all text-xs leading-4 text-muted-foreground",
                                            children: E
                                        }), (0, n.jsxs)("div", {
                                            className: "mt-1.5 flex items-center gap-1.5 text-muted-foreground",
                                            children: [(0, n.jsx)(H.icon, {
                                                className: "size-3 shrink-0"
                                            }), (0, n.jsx)("span", {
                                                className: "text-xs",
                                                children: H.label
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, n.jsx)(f.VD, {
                                className: "mx-1"
                            }), (0, n.jsxs)("div", {
                                className: "px-0.5",
                                children: [(0, n.jsx)(Z, {
                                    invitations: null !== (o = null == Q ? void 0 : Q.data) && void 0 !== o ? o : []
                                }), (0, n.jsx)(A, {
                                    memberships: G
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "px-0.5",
                                children: [(0, n.jsxs)(f.Xi, {
                                    onClick: () => {
                                        j.push("/dashboard/settings/profile")
                                    },
                                    className: "px-3 py-2",
                                    children: [(0, n.jsx)(y.Z, {
                                        className: "mr-3 size-4 text-muted-foreground"
                                    }), (0, n.jsx)("span", {
                                        children: "Profile"
                                    })]
                                }), (0, n.jsxs)(f.Xi, {
                                    onClick: () => {
                                        j.push("/dashboard/settings/organization")
                                    },
                                    className: "px-3 py-2",
                                    children: [(0, n.jsx)(C.Z, {
                                        className: "mr-3 size-4 text-muted-foreground"
                                    }), (0, n.jsx)("span", {
                                        children: "Organization"
                                    })]
                                }), S && (0, n.jsxs)(f.Xi, {
                                    onClick: () => {
                                        I(!P)
                                    },
                                    className: "px-3 py-2",
                                    children: [P ? (0, n.jsx)(d.Z, {
                                        className: "mr-3 size-4 text-emerald-600"
                                    }) : (0, n.jsx)(k.Z, {
                                        className: "mr-3 size-4 text-muted-foreground"
                                    }), (0, n.jsx)("span", {
                                        children: "Admin Controls"
                                    })]
                                }), S && (0, n.jsxs)(f.Xi, {
                                    onClick: () => {
                                        T(!L), q.invalidateQueries()
                                    },
                                    className: "px-3 py-2",
                                    children: [L ? (0, n.jsx)(d.Z, {
                                        className: "mr-3 size-4 text-emerald-600"
                                    }) : (0, n.jsx)(z.Z, {
                                        className: "mr-3 size-4 text-muted-foreground"
                                    }), (0, n.jsx)("span", {
                                        children: "Demo Analytics"
                                    })]
                                }), (0, n.jsx)(f.VD, {})]
                            }), (0, n.jsx)("div", {
                                className: "px-0.5",
                                children: (0, n.jsxs)(f.Xi, {
                                    onClick: V,
                                    className: "px-3 py-2 text-red-600 focus:text-red-600 dark:text-red-400",
                                    children: [(0, n.jsx)(c.Z, {
                                        className: "mr-3 size-4"
                                    }), (0, n.jsx)("span", {
                                        children: "Sign out"
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }

            function D(e) {
                let {
                    collapsed: s = !1,
                    chatMode: t = !1
                } = e;
                return (0, n.jsx)("div", {
                    className: (0, a.cn)("p-1", s && "flex justify-center px-1.5"),
                    children: (0, n.jsx)(t ? j : R, {
                        isOpen: !s
                    })
                })
            }
        },
        89555: function(e, s, t) {
            t.d(s, {
                U: function() {
                    return r
                }
            });
            var n = t(49842),
                a = t(54353);

            function r() {
                let {
                    isSignedIn: e,
                    isLoaded: s
                } = (0, a.aF)(), {
                    isBackendAuthenticated: t,
                    isAuthenticating: r,
                    isInitializing: i
                } = (0, n.a)();
                return !!(e && t && !r && !i && s)
            }
        },
        65097: function(e, s, t) {
            t.d(s, {
                QT: function() {
                    return p
                },
                Mg: function() {
                    return m
                },
                Ex: function() {
                    return j
                },
                YC: function() {
                    return u
                },
                Ys: function() {
                    return h
                },
                oE: function() {
                    return f
                }
            });
            var n = t(21770),
                a = t(92850),
                r = t(31125);
            let i = async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    s = arguments.length > 1 ? arguments[1] : void 0,
                    {
                        data: t
                    } = await r.Z.post("/api/v1/billings/checkout-session", {
                        success_url: "".concat("https://chat.vlm.run", "/dashboard"),
                        cancel_url: "".concat("https://chat.vlm.run", "/dashboard"),
                        price_id: s,
                        allow_promotion_codes: e
                    });
                return t
            }, l = async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    {
                        data: s
                    } = await r.Z.post("/api/v1/billings/create-portal-session", {
                        return_url: "".concat("https://chat.vlm.run", "/dashboard/settings/billing"),
                        prefer_pricing_table: e
                    });
                return s
            }, d = async () => {
                let {
                    data: e
                } = await r.Z.get("/api/v1/billings/get-details");
                return e
            }, o = async () => {
                let {
                    data: e
                } = await r.Z.get("/api/v1/billings/price-ids");
                return e
            }, c = async e => {
                let {
                    data: s
                } = await r.Z.post("/api/v1/billings/upgrade-to-pro", null, {
                    params: e ? {
                        price_id: e
                    } : void 0
                });
                return s
            }, x = async () => {
                let {
                    data: e
                } = await r.Z.get("/api/v1/billings/credits-breakdown");
                return e
            }, m = () => (0, n.D)({
                mutationFn: e => {
                    let {
                        allowPromotionCodes: s,
                        priceId: t
                    } = e;
                    return i(s, t)
                }
            }), u = () => (0, n.D)({
                mutationFn: e => l(e)
            }), p = () => (0, a.a)({
                queryKey: ["billingDetails"],
                queryFn: d,
                staleTime: 3e5
            }), h = () => (0, a.a)({
                queryKey: ["priceIds"],
                queryFn: o
            }), f = () => (0, n.D)({
                mutationFn: e => c(e)
            }), g = ["creditsBreakdown"], j = function() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return (0, a.a)({
                    queryKey: g,
                    queryFn: x,
                    enabled: e
                })
            }
        }
    }
]);