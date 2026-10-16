try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3c8a1acd-1ac0-473e-b5bb-92a33122fa37", e._sentryDebugIdIdentifier = "sentry-dbid-3c8a1acd-1ac0-473e-b5bb-92a33122fa37")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [63864], {
        63864: function(e, t, r) {
            r.d(t, {
                w: function() {
                    return Y
                }
            });
            var n = r(57437),
                a = r(2265),
                l = r(20653),
                s = r(71594),
                i = r(24525),
                o = r(51817),
                d = r(54887),
                c = r(94508),
                u = r(38662),
                f = r(62869),
                m = r(95186),
                x = r(73578),
                p = r(73247);

            function g(e) {
                let {
                    value: t,
                    placeholder: r = "Search...",
                    error: l,
                    expanded: s,
                    onExpandedChange: i,
                    onChange: o,
                    onReset: d,
                    inputRef: u
                } = e, x = (0, a.useRef)(null), g = (0, a.useRef)(null), h = (0, a.useCallback)(e => {
                    if (g.current = e, u) {
                        if ("function" == typeof u) {
                            u(e);
                            return
                        }
                        u.current = e
                    }
                }, [u]);
                return (0, a.useEffect)(() => {
                    if (!s) return;
                    let e = window.setTimeout(() => {
                        var e;
                        return null === (e = g.current) || void 0 === e ? void 0 : e.focus()
                    }, 0);
                    return () => window.clearTimeout(e)
                }, [s]), (0, a.useEffect)(() => {
                    if (!s) return;
                    let e = e => {
                        var r;
                        (null === (r = x.current) || void 0 === r ? void 0 : r.contains(e.target)) || t.trim() || i(!1)
                    };
                    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
                }, [s, i, t]), (0, n.jsxs)("div", {
                    ref: x,
                    className: (0, c.cn)("inline-flex h-8 items-center", l && "h-auto flex-col items-stretch gap-1"),
                    children: [(0, n.jsx)("div", {
                        className: "relative flex items-center",
                        children: s ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(p.Z, {
                                className: "pointer-events-none absolute left-2.5 size-4 text-muted-foreground"
                            }), (0, n.jsx)(m.I, {
                                ref: h,
                                placeholder: r,
                                value: t,
                                onChange: e => o(e.target.value),
                                onKeyDown: e => {
                                    "Escape" === e.key && (t ? d() : i(!1))
                                },
                                className: (0, c.cn)("h-8 w-[150px] border-0 bg-transparent pl-8 pr-3 shadow-none focus-visible:ring-0 lg:w-[250px]", l && "text-destructive")
                            })]
                        }) : (0, n.jsx)(f.z, {
                            type: "button",
                            variant: "ghost",
                            size: "icon-sm",
                            "aria-label": "Search",
                            className: (0, c.cn)(t && "bg-primary/5 text-foreground"),
                            onClick: () => i(!0),
                            children: (0, n.jsx)(p.Z, {
                                className: "size-4"
                            })
                        })
                    }), l ? (0, n.jsx)("p", {
                        className: "text-xs text-destructive",
                        children: l
                    }) : null]
                })
            }
            var h = r(53491),
                v = r(24156),
                b = r(92934),
                y = r(32489),
                j = r(31047),
                N = r(3577),
                w = r(99397),
                _ = r(35974),
                k = r(72860);

            function C(e) {
                let {
                    className: t,
                    classNames: r,
                    showOutsideDays: a = !0,
                    ...s
                } = e;
                return (0, n.jsx)(k._W, {
                    showOutsideDays: a,
                    className: (0, c.cn)("p-3", t),
                    classNames: {
                        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                        month: "space-y-4",
                        caption: "flex justify-center pt-1 relative items-center",
                        caption_label: "text-sm font-medium",
                        nav: "flex items-center",
                        nav_button_previous: "absolute left-1",
                        nav_button_next: "absolute right-1",
                        nav_button: (0, c.cn)((0, f.d)({
                            variant: "ghost"
                        }), "size-7 bg-transparent p-0 text-muted-foreground hover:bg-accent/50 hover:text-foreground"),
                        table: "w-full border-collapse space-y-1",
                        head_row: "flex",
                        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
                        row: "flex w-full mt-2",
                        cell: (0, c.cn)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-primary/10", "range" === s.mode ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"),
                        day: (0, c.cn)((0, f.d)({
                            variant: "ghost"
                        }), "size-8 p-0 font-normal hover:bg-accent/50 aria-selected:opacity-100"),
                        day_range_start: "day-range-start",
                        day_range_end: "day-range-end",
                        day_selected: "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                        day_today: "bg-accent/50 text-foreground font-medium",
                        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
                        day_disabled: "text-muted-foreground opacity-50",
                        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                        day_hidden: "invisible",
                        ...r
                    },
                    components: {
                        IconLeft: e => {
                            let {
                                ...t
                            } = e;
                            return (0, n.jsx)(l.wyc, {
                                className: "size-4"
                            })
                        },
                        IconRight: e => {
                            let {
                                ...t
                            } = e;
                            return (0, n.jsx)(l.XCv, {
                                className: "size-4"
                            })
                        }
                    },
                    ...s
                })
            }
            C.displayName = "Calendar";
            var z = r(23518),
                R = r(26110),
                F = r(57054),
                S = r(19378),
                E = r(53647),
                Z = r(26289);
            let D = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

            function M(e) {
                let {
                    options: t,
                    selectedValues: r,
                    onChange: l,
                    container: s
                } = e, [i, o] = (0, a.useState)(!1), d = e => {
                    r.includes(e) ? l(r.filter(t => t !== e)) : l([...r, e])
                };
                return (0, n.jsxs)(F.J2, {
                    open: i,
                    onOpenChange: o,
                    children: [(0, n.jsx)(F.xo, {
                        asChild: !0,
                        children: (0, n.jsxs)(f.z, {
                            variant: "outline",
                            role: "combobox",
                            "aria-expanded": i,
                            className: "h-11 flex-1 justify-between",
                            children: [(0, n.jsx)("span", {
                                className: "flex min-w-0 flex-1 items-center gap-1 overflow-hidden",
                                children: 0 === r.length ? (0, n.jsx)("span", {
                                    className: "text-muted-foreground",
                                    children: "Select values..."
                                }) : r.length <= 2 ? r.map(e => {
                                    var r;
                                    return (0, n.jsx)(_.C, {
                                        variant: "secondary",
                                        className: "shrink-0 rounded-sm px-1 text-xs font-normal",
                                        children: (null === (r = t.find(t => t.value === e)) || void 0 === r ? void 0 : r.label) || e
                                    }, e)
                                }) : (0, n.jsxs)(_.C, {
                                    variant: "secondary",
                                    className: "shrink-0 rounded-sm px-1 text-xs font-normal",
                                    children: [r.length, " selected"]
                                })
                            }), (0, n.jsx)(v.Z, {
                                className: "ml-1 size-4 shrink-0 opacity-50"
                            })]
                        })
                    }), (0, n.jsxs)(F.yk, {
                        className: "w-[250px] border border-border p-0",
                        align: "start",
                        container: s,
                        children: [(0, n.jsxs)(z.mY, {
                            children: [(0, n.jsx)(z.sZ, {
                                placeholder: "Search..."
                            }), (0, n.jsxs)(z.e8, {
                                children: [(0, n.jsx)(z.rb, {
                                    children: "No results found."
                                }), (0, n.jsx)(z.fu, {
                                    children: t.map(e => {
                                        let t = r.includes(e.value);
                                        return (0, n.jsxs)(z.di, {
                                            value: e.value,
                                            onSelect: () => d(e.value),
                                            className: "gap-2",
                                            children: [(0, n.jsx)("span", {
                                                children: e.label
                                            }), t && (0, n.jsx)(b.Z, {
                                                className: "ml-auto size-3.5 fill-current stroke-background"
                                            })]
                                        }, e.value)
                                    })
                                })]
                            })]
                        }), r.length > 0 && (0, n.jsx)("div", {
                            className: "border-t border-border p-1",
                            children: (0, n.jsx)(f.z, {
                                variant: "ghost",
                                size: "sm",
                                className: "w-full justify-center text-xs",
                                onClick: () => l([]),
                                children: "Clear selection"
                            })
                        })]
                    })]
                })
            }

            function T(e) {
                let {
                    values: t,
                    onChange: r,
                    placeholder: l
                } = e, [s, i] = (0, a.useState)(""), o = e => {
                    let n = e.trim();
                    n && !t.includes(n) && r([...t, n]), i("")
                }, d = e => {
                    r(t.filter(t => t !== e))
                };
                return (0, n.jsxs)("div", {
                    className: "flex min-h-[44px] flex-1 flex-wrap items-center gap-1 rounded-[10px] border border-border bg-transparent px-3 py-1.5 text-sm",
                    children: [t.map(e => (0, n.jsxs)(_.C, {
                        variant: "secondary",
                        className: "shrink-0 gap-0.5 rounded-sm px-1 text-xs font-normal",
                        children: [(0, n.jsx)("span", {
                            className: "max-w-[120px] truncate",
                            children: e
                        }), (0, n.jsx)("button", {
                            type: "button",
                            className: "ml-0.5 rounded-sm p-0 hover:bg-muted",
                            onClick: () => d(e),
                            children: (0, n.jsx)(y.Z, {
                                className: "size-3"
                            })
                        })]
                    }, e)), (0, n.jsx)(m.I, {
                        type: "text",
                        placeholder: 0 === t.length ? l || "Type and press Enter..." : "",
                        className: "h-7 min-w-[80px] flex-1 border-0 p-0 shadow-none focus-visible:ring-0",
                        value: s,
                        onChange: e => i(e.target.value),
                        onKeyDown: e => {
                            "Enter" === e.key || "," === e.key ? (e.preventDefault(), o(s)) : "Backspace" === e.key && !s && t.length > 0 && d(t[t.length - 1])
                        },
                        onPaste: e => {
                            e.preventDefault(), r([...new Set([...t, ...e.clipboardData.getData("text").split(/[,\n\t]+/).map(e => e.trim()).filter(Boolean)])])
                        },
                        onBlur: () => {
                            s.trim() && o(s)
                        }
                    })]
                })
            }

            function I(e) {
                let {
                    table: t,
                    filterConfig: r,
                    onApplyFilters: l,
                    initialFilters: s = {},
                    borderlessTrigger: i = !1
                } = e, [o, d] = (0, a.useState)(!1), [u, x] = (0, a.useState)([]), [p, g] = (0, a.useState)(s), [v, b] = (0, a.useState)({}), [k, z] = (0, a.useState)(null), [I, V] = (0, a.useState)({});
                (0, a.useEffect)(() => {
                    if (Object.keys(s).length > 0) {
                        let e = {};
                        r.filter(e => "date_range" === e.type).map(e => e.key).forEach(t => {
                            let r, n;
                            "filter_created_at" === t ? (r = "".concat(t, "__gte"), n = "".concat(t, "__lte"), !s[r] && s.created_at__gte && (r = "created_at__gte"), !s[n] && s.created_at__lte && (n = "created_at__lte")) : (r = "".concat(t, "__gte"), n = "".concat(t, "__lte")), (s[r] || s[n]) && (e[t] = {
                                from: s[r] ? new Date(s[r]) : void 0,
                                to: s[n] ? new Date(s[n]) : void 0
                            })
                        }), b(e)
                    }
                }, [s, r]), (0, a.useEffect)(() => {
                    let e = [],
                        n = {};
                    Object.keys(s).length > 0 && Object.entries(s).forEach(a => {
                        let [l, s] = a, i = l.endsWith("__in"), o = i ? l.replace(/__in$/, "") : l, d = r.find(e => e.key === (i ? o : l)), c = l.endsWith("__gte") || l.endsWith("__lte"), u = c ? l.replace(/__gte$|__lte$/, "") : "", f = "filter_date" === u ? "filter_created_at" : u, m = c && r.find(e => e.key === f && "date_range" === e.type);
                        if (d || m) {
                            var x;
                            m || (i ? e.push({
                                field: o,
                                value: s
                            }) : e.push({
                                field: l,
                                value: s
                            })), n[l] = s, null === (x = t.getColumn(l)) || void 0 === x || x.setFilterValue(s)
                        }
                    }), x(e), g(n)
                }, [t, r, s]), (0, a.useEffect)(() => {
                    if (!o) return;
                    let e = r.filter(e => "date_range" === e.type).map(e => e.key);
                    x(t => {
                        let n = [...t.filter(e => {
                            if (e.field.endsWith("__gte") || e.field.endsWith("__lte")) return !1;
                            let t = r.find(t => t.key === e.field);
                            return t && "date_range" !== t.type
                        }).map(e => ({
                            field: e.field,
                            value: e.value
                        })), ...e.filter(e => v[e] || p["".concat(e, "__gte")] || p["".concat(e, "__lte")]).map(e => ({
                            field: e,
                            value: "date_range"
                        }))];
                        return n.length === t.length && n.every((e, r) => e.field === t[r].field && e.value === t[r].value) ? t : n
                    })
                }, [o, p, r, v]);
                let P = u.map(e => e.field).filter(Boolean),
                    L = e => P.includes(e),
                    A = () => {
                        var e;
                        x([...u, {
                            field: (null === (e = r.find(e => !L(e.key))) || void 0 === e ? void 0 : e.key) || "",
                            value: ""
                        }])
                    },
                    O = e => {
                        let t = [...u],
                            n = t[e];
                        if (n && n.field) {
                            let e = r.find(e => e.key === n.field);
                            if ((null == e ? void 0 : e.type) === "date_range") {
                                let e = {
                                    ...v
                                };
                                delete e[n.field], b(e), g(e => Object.fromEntries(Object.entries(e).filter(e => {
                                    let [t] = e;
                                    return t !== "".concat(n.field, "__gte") && t !== "".concat(n.field, "__lte")
                                })))
                            }
                        }
                        t.splice(e, 1), x(t)
                    },
                    Y = (e, t, n) => {
                        let a = [...u];
                        if ("field" === t) {
                            let t = a[e].field;
                            if (t !== n) {
                                if (L(n)) return;
                                let l = r.find(e => e.key === t),
                                    s = r.find(e => e.key === n);
                                if ((null == l ? void 0 : l.type) !== (null == s ? void 0 : s.type) || (null == l ? void 0 : l.multiSelect) !== (null == s ? void 0 : s.multiSelect)) {
                                    a[e] = {
                                        field: n,
                                        value: ""
                                    };
                                    let r = {
                                        ...v
                                    };
                                    (null == l ? void 0 : l.type) === "date_range" && delete r[t], (null == s ? void 0 : s.type) === "date_range" && (r[n] = {
                                        from: void 0,
                                        to: void 0
                                    }), b(r), x(a);
                                    return
                                }
                                a[e] = {
                                    ...a[e],
                                    field: n,
                                    value: ""
                                }, x(a);
                                return
                            }
                        }
                        a[e] = {
                            ...a[e],
                            [t]: n
                        }, x(a)
                    },
                    B = (e, t) => {
                        let a = r.find(t => t.key === e.field);
                        if (!a) return null;
                        if ("dropdown" === a.type && a.multiSelect) {
                            let r = e.value ? e.value.split(",").filter(Boolean) : [];
                            return (0, n.jsx)(M, {
                                options: a.options || [],
                                selectedValues: r,
                                onChange: e => Y(t, "value", e.join(",")),
                                container: k
                            })
                        }
                        if ("text" === a.type && a.multiSelect) {
                            let r = e.value ? e.value.split(",").filter(Boolean) : [];
                            return (0, n.jsx)(T, {
                                values: r,
                                onChange: e => Y(t, "value", e.join(",")),
                                placeholder: "Type and press Enter..."
                            })
                        }
                        switch (a.type) {
                            case "dropdown":
                                var l;
                                return (0, n.jsxs)(E.Ph, {
                                    value: e.value,
                                    onValueChange: e => Y(t, "value", e),
                                    children: [(0, n.jsx)(E.i4, {
                                        className: "h-11 flex-1",
                                        children: (0, n.jsx)(E.ki, {
                                            placeholder: "Select value"
                                        })
                                    }), (0, n.jsx)(E.Bw, {
                                        container: k,
                                        children: null === (l = a.options) || void 0 === l ? void 0 : l.map(e => (0, n.jsx)(E.Ql, {
                                            value: e.value,
                                            children: e.label
                                        }, e.value))
                                    })]
                                });
                            case "date":
                                let s = e.value ? new Date(e.value) : void 0;
                                return (0, n.jsxs)(F.J2, {
                                    children: [(0, n.jsx)(F.xo, {
                                        asChild: !0,
                                        children: (0, n.jsxs)(f.z, {
                                            variant: "outline",
                                            className: "h-11 flex-1 justify-start border border-border text-left font-normal",
                                            children: [(0, n.jsx)(j.Z, {
                                                className: "mr-2 size-4"
                                            }), s ? (0, h.Z)(s, "PPP") : (0, n.jsx)("span", {
                                                children: "Pick a date"
                                            })]
                                        })
                                    }), (0, n.jsx)(F.yk, {
                                        className: "w-auto border border-border p-0",
                                        align: "start",
                                        container: k,
                                        children: (0, n.jsx)(C, {
                                            mode: "single",
                                            selected: s,
                                            onSelect: e => {
                                                e && Y(t, "value", (0, h.Z)(e, "yyyy-MM-dd"))
                                            },
                                            initialFocus: !0
                                        })
                                    })]
                                });
                            case "date_range":
                                return (0, n.jsx)("div", {
                                    className: "h-11 flex-1",
                                    children: (0, n.jsx)(Z.D, {
                                        dateRange: v[e.field],
                                        container: k,
                                        onChange: t => {
                                            b({
                                                ...v,
                                                [e.field]: t
                                            })
                                        }
                                    })
                                });
                            case "number":
                                return (0, n.jsx)(m.I, {
                                    type: "number",
                                    className: "h-11 flex-1",
                                    value: e.value,
                                    onChange: e => Y(t, "value", e.target.value)
                                });
                            default:
                                return (0, n.jsx)(m.I, {
                                    type: "text",
                                    placeholder: "Value",
                                    className: "h-11 flex-1",
                                    value: e.value,
                                    onChange: e => Y(t, "value", e.target.value)
                                })
                        }
                    },
                    G = () => r.filter(e => !L(e.key));
                return (0, n.jsx)("div", {
                    className: (0, c.cn)("flex flex-col gap-2 overflow-visible", i && "inline-flex h-8 flex-row items-center gap-0"),
                    children: (0, n.jsxs)(R.Vq, {
                        open: o,
                        onOpenChange: e => {
                            d(e), e && V({})
                        },
                        children: [(0, n.jsx)(R.hg, {
                            asChild: !0,
                            children: (0, n.jsxs)(f.z, {
                                variant: i ? "ghost" : "outline",
                                size: "icon-sm",
                                className: (0, c.cn)("relative z-10 overflow-visible", !i && "border border-border"),
                                children: [(0, n.jsx)(N.Z, {
                                    className: "size-4"
                                }), Object.keys(p).length > 0 && (0, n.jsx)(_.C, {
                                    variant: "secondary",
                                    className: "absolute -right-1.5 -top-1.5 z-20 flex size-4 items-center justify-center rounded-full p-0 text-[10px] font-normal",
                                    children: Object.keys(p).length
                                })]
                            })
                        }), (0, n.jsxs)(R.cZ, {
                            ref: z,
                            className: "border border-border sm:max-w-[600px]",
                            children: [(0, n.jsx)(R.fK, {
                                children: (0, n.jsx)(R.$N, {
                                    children: "Filter Data"
                                })
                            }), (0, n.jsx)(S.x, {
                                className: "max-h-[60vh]",
                                children: (0, n.jsx)("div", {
                                    className: "flex flex-col gap-4 py-4 mx-1",
                                    children: 0 === u.length ? (0, n.jsxs)("div", {
                                        className: "flex flex-col items-center justify-center py-8 text-center",
                                        children: [(0, n.jsx)("p", {
                                            className: "mb-4 text-muted-foreground",
                                            children: "No filters added yet"
                                        }), (0, n.jsxs)(f.z, {
                                            variant: "outline",
                                            className: "border border-border",
                                            onClick: A,
                                            disabled: 0 === G().length,
                                            children: [(0, n.jsx)(w.Z, {
                                                className: "mr-2 size-4"
                                            }), "Add Your First Filter"]
                                        })]
                                    }) : (0, n.jsxs)(n.Fragment, {
                                        children: [u.map((e, t) => (0, n.jsxs)("div", {
                                            className: "flex flex-col gap-1",
                                            children: [(0, n.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [(0, n.jsxs)(E.Ph, {
                                                    value: e.field,
                                                    onValueChange: e => Y(t, "field", e),
                                                    children: [(0, n.jsx)(E.i4, {
                                                        className: "h-11 w-[180px]",
                                                        children: (0, n.jsx)(E.ki, {
                                                            placeholder: "Select field"
                                                        })
                                                    }), (0, n.jsx)(E.Bw, {
                                                        container: k,
                                                        className: "z-10",
                                                        children: r.map(t => (0, n.jsx)(E.Ql, {
                                                            value: t.key,
                                                            disabled: t.key !== e.field && L(t.key),
                                                            children: t.name
                                                        }, t.key))
                                                    })]
                                                }), B(e, t), (0, n.jsx)(f.z, {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    onClick: () => O(t),
                                                    children: (0, n.jsx)(y.Z, {
                                                        className: "size-4"
                                                    })
                                                })]
                                            }), I[e.field] && (0, n.jsx)("p", {
                                                className: "ml-[180px] pl-2 text-xs text-destructive",
                                                children: I[e.field]
                                            })]
                                        }, t)), (0, n.jsxs)(f.z, {
                                            variant: "outline",
                                            className: "mt-2 border border-border",
                                            onClick: A,
                                            disabled: 0 === G().length,
                                            children: [(0, n.jsx)(w.Z, {
                                                className: "mr-2 size-4"
                                            }), "Add Filter"]
                                        })]
                                    })
                                })
                            }), (0, n.jsxs)("div", {
                                className: "flex justify-end gap-2",
                                children: [(0, n.jsx)(f.z, {
                                    variant: "outline",
                                    onClick: () => {
                                        t.resetColumnFilters(), x([]), g({}), b({}), V({}), l && l({}), d(!1)
                                    },
                                    className: "border border-border",
                                    children: "Reset"
                                }), (0, n.jsx)(f.z, {
                                    onClick: () => {
                                        let e = {};
                                        if (u.forEach(t => {
                                                if (t.field && t.value) {
                                                    let n = r.find(e => e.key === t.field);
                                                    if ((null == n ? void 0 : n.validation) === "uuid") {
                                                        let r = (n.multiSelect ? t.value.split(",").filter(Boolean) : [t.value]).filter(e => {
                                                            var t;
                                                            return t = e.trim(), !D.test(t)
                                                        });
                                                        r.length > 0 && (e[t.field] = "Invalid UUID format: ".concat(r[0]))
                                                    }
                                                }
                                            }), Object.keys(e).length > 0) {
                                            V(e);
                                            return
                                        }
                                        V({}), t.resetColumnFilters();
                                        let n = {};
                                        u.forEach(e => {
                                            if (e.field) {
                                                var a, l, s;
                                                let i = r.find(t => t.key === e.field);
                                                if ((null == i ? void 0 : i.type) === "date_range") {
                                                    let r = v[e.field] || {
                                                        from: void 0,
                                                        to: void 0
                                                    };
                                                    if (r.from) {
                                                        let l = (0, h.Z)(r.from, "yyyy-MM-dd"),
                                                            s = "".concat(e.field, "__gte");
                                                        n[s] = l;
                                                        try {
                                                            null === (a = t.getColumn(s)) || void 0 === a || a.setFilterValue(l)
                                                        } catch (e) {}
                                                    }
                                                    if (r.to) {
                                                        let a = (0, h.Z)(r.to, "yyyy-MM-dd"),
                                                            s = "".concat(e.field, "__lte");
                                                        n[s] = a;
                                                        try {
                                                            null === (l = t.getColumn(s)) || void 0 === l || l.setFilterValue(a)
                                                        } catch (e) {}
                                                    }
                                                } else e.value && ((null == i ? void 0 : i.multiSelect) ? n["".concat(e.field, "__in")] = e.value : (null === (s = t.getColumn(e.field)) || void 0 === s || s.setFilterValue(e.value), n[e.field] = e.value))
                                            }
                                        }), g(n), l && l(n), d(!1)
                                    },
                                    children: "Apply Filters"
                                })]
                            })]
                        })]
                    })
                })
            }

            function V(e) {
                let {
                    table: t,
                    pageSizeOptions: r = [10, 20, 30, 40, 50]
                } = e, a = t.getPageCount(), s = t.getState().pagination.pageIndex, i = Math.max(a, 1), o = Math.min(Math.max(s - 1, 0), Math.max(i - 3, 0)), d = Array.from({
                    length: Math.min(3, i)
                }, (e, t) => o + t);
                return (0, n.jsxs)("div", {
                    className: "flex items-center justify-between px-1",
                    children: [(0, n.jsxs)("div", {
                        className: "flex items-center space-x-1.5",
                        children: [(0, n.jsx)("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Showing"
                        }), (0, n.jsxs)(E.Ph, {
                            value: "".concat(t.getState().pagination.pageSize),
                            onValueChange: e => {
                                t.setPageSize(Number(e))
                            },
                            children: [(0, n.jsx)(E.i4, {
                                className: "h-6 w-[42px] px-2 text-xs",
                                hideIcon: !0,
                                children: (0, n.jsx)(E.ki, {
                                    placeholder: t.getState().pagination.pageSize
                                })
                            }), (0, n.jsx)(E.Bw, {
                                side: "top",
                                children: r.map(e => (0, n.jsx)(E.Ql, {
                                    value: "".concat(e),
                                    children: e
                                }, e))
                            })]
                        }), (0, n.jsx)("p", {
                            className: "text-xs text-muted-foreground",
                            children: "items per page"
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "flex items-center space-x-1",
                        children: [(0, n.jsxs)(f.z, {
                            variant: "outline",
                            className: "hidden h-6 w-6 p-0 shadow-none lg:flex",
                            onClick: () => t.setPageIndex(0),
                            disabled: !t.getCanPreviousPage(),
                            children: [(0, n.jsx)("span", {
                                className: "sr-only",
                                children: "Go to first page"
                            }), (0, n.jsx)(l.kRt, {
                                className: "size-3"
                            })]
                        }), (0, n.jsxs)(f.z, {
                            variant: "outline",
                            className: "h-6 w-6 p-0 shadow-none",
                            onClick: () => t.previousPage(),
                            disabled: !t.getCanPreviousPage(),
                            children: [(0, n.jsx)("span", {
                                className: "sr-only",
                                children: "Go to previous page"
                            }), (0, n.jsx)(l.wyc, {
                                className: "size-3"
                            })]
                        }), d.map(e => (0, n.jsx)(f.z, {
                            variant: "outline",
                            className: "h-6 w-6 p-0 shadow-none text-xs ".concat(e === s ? "border-foreground" : ""),
                            onClick: () => t.setPageIndex(e),
                            children: e + 1
                        }, e)), (0, n.jsxs)(f.z, {
                            variant: "outline",
                            className: "h-6 w-6 p-0 shadow-none",
                            onClick: () => t.nextPage(),
                            disabled: !t.getCanNextPage(),
                            children: [(0, n.jsx)("span", {
                                className: "sr-only",
                                children: "Go to next page"
                            }), (0, n.jsx)(l.XCv, {
                                className: "size-3"
                            })]
                        }), (0, n.jsxs)(f.z, {
                            variant: "outline",
                            className: "hidden h-6 w-6 p-0 shadow-none lg:flex",
                            onClick: () => t.setPageIndex(t.getPageCount() - 1),
                            disabled: !t.getCanNextPage(),
                            children: [(0, n.jsx)("span", {
                                className: "sr-only",
                                children: "Go to last page"
                            }), (0, n.jsx)(l.yr4, {
                                className: "size-3"
                            })]
                        })]
                    })]
                })
            }
            var P = r(7237),
                L = r(84190);

            function A(e) {
                let {
                    table: t,
                    children: r
                } = e;
                return (0, n.jsxs)(L.h_, {
                    children: [(0, n.jsx)(P.$F, {
                        asChild: !0,
                        children: (0, n.jsx)(f.z, {
                            variant: "outline",
                            size: "icon-sm",
                            className: "hidden border border-border lg:flex",
                            children: (0, n.jsx)(l.hsZ, {
                                className: "size-4"
                            })
                        })
                    }), (0, n.jsxs)(L.AW, {
                        align: "end",
                        className: "w-[200px] border border-border",
                        children: [(0, n.jsx)(L.Ju, {
                            className: "px-3 py-2 text-[11px] font-semibold tracking-wide text-muted-foreground",
                            children: "Toggle columns"
                        }), t.getAllColumns().filter(e => void 0 !== e.accessorFn && e.getCanHide()).map(e => {
                            let t = e.columnDef,
                                r = e.id;
                            if (t.header && "function" == typeof t.header) {
                                let n = t.header({
                                    column: e
                                }).props;
                                (null == n ? void 0 : n.title) && (r = n.title)
                            }
                            return (0, n.jsxs)(L.Xi, {
                                onClick: () => e.toggleVisibility(!e.getIsVisible()),
                                className: "flex cursor-pointer items-center justify-between text-xs uppercase",
                                onSelect: e => e.preventDefault(),
                                children: [(0, n.jsx)("span", {
                                    children: r
                                }), e.getIsVisible() && (0, n.jsx)(b.Z, {
                                    className: "size-3.5 fill-current stroke-background"
                                })]
                            }, e.id)
                        }), r && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(L.VD, {}), r]
                        })]
                    })]
                })
            }

            function O(e, t) {
                var r, n;
                return {
                    flexGrow: null !== (r = null == t ? void 0 : t.listFlexGrow) && void 0 !== r ? r : 1,
                    flexShrink: null !== (n = null == t ? void 0 : t.listFlexShrink) && void 0 !== n ? n : 1,
                    flexBasis: e,
                    minWidth: 0
                }
            }

            function Y(e) {
                var t, r;
                let {
                    columns: p,
                    data: h,
                    className: v,
                    tableContainerClassName: b,
                    showHeader: y = !0,
                    showTableBorder: j = !1,
                    onTableScroll: N,
                    onRowClick: w,
                    onRowSelect: _,
                    filterColumn: k,
                    filterPlaceholder: C = "Filter...",
                    enablePagination: z = !0,
                    pageSizeOptions: R,
                    enableColumnVisibility: F = !0,
                    enableRowSelection: S = !1,
                    enableFilters: E = !0,
                    manualPagination: Z = !1,
                    manualSorting: D = !1,
                    pageCount: M,
                    onPaginationChange: T,
                    onSortingChange: P,
                    initialPageIndex: L = 0,
                    initialPageSize: Y = 10,
                    sorting: B,
                    actions: G,
                    enableColumnResizing: H = !0,
                    defaultColumnVisibility: U,
                    columnVisibility: W,
                    onColumnVisibilityChange: X,
                    filterConfig: $,
                    onFiltersChange: q,
                    activeFilters: K,
                    isLoading: J = !1,
                    listView: Q = !1,
                    showListHeader: ee = !0,
                    listRowClassName: et,
                    getListRowClassName: er,
                    getListGroupLabel: en,
                    selectedRowId: ea,
                    onLoadMore: el,
                    hasMore: es = !1,
                    activeBarDate: ei,
                    activeBarDateFormatted: eo,
                    onClearBarFilter: ed,
                    meta: ec,
                    viewOptions: eu,
                    filterActions: ef,
                    paginationOnHover: em = !1,
                    sectionTitle: ex,
                    toolbarLeadingPortal: ep,
                    toolbarFilterPortal: eg,
                    toolbarTrailingPortal: eh,
                    collapsibleSearch: ev = !1,
                    pinActiveBarDate: eb = !1,
                    emptyMessage: ey = "No results."
                } = e, [ej, eN] = (0, a.useState)({}), [ew, e_] = (0, a.useState)(U || {}), ek = null != W ? W : ew, eC = (0, a.useCallback)(e => {
                    let t = "function" == typeof e ? e(ek) : e;
                    X ? X(t) : e_(t)
                }, [ek, X]), [ez, eR] = (0, a.useState)([]), [eF, eS] = (0, a.useState)([]), [{
                    pageIndex: eE,
                    pageSize: eZ
                }, eD] = (0, a.useState)({
                    pageIndex: L,
                    pageSize: Y
                }), [eM, eT] = (0, a.useState)(null), eI = (0, a.useRef)(null), [eV, eP] = (0, a.useState)(""), [eL, eA] = (0, a.useState)(""), [eO, eY] = (0, a.useState)(!1), eB = (0, a.useRef)(!1), eG = (0, a.useRef)(null), eH = (0, a.useRef)(new Map);
                (0, u.xC)("data-table");
                let eU = (0, a.useCallback)(e => {
                    let t = eH.current.get(e);
                    t && t.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    })
                }, []);
                (0, a.useEffect)(() => {
                    null !== eM && eU(eM)
                }, [eM, eU]);
                let eW = null != B ? B : eF,
                    eX = B ? e => {
                        let t = "function" == typeof e ? e(eW) : e;
                        null == P || P(t)
                    } : eS;
                (0, a.useEffect)(() => {
                    eD({
                        pageIndex: L,
                        pageSize: Y
                    })
                }, [L, Y]), (0, a.useEffect)(() => {
                    U && !W && e_(U)
                }, [U, W]);
                let e$ = (0, a.useMemo)(() => ({
                        pageIndex: eE,
                        pageSize: eZ
                    }), [eE, eZ]),
                    eq = (0, s.b7)({
                        data: h,
                        columns: p,
                        enableSorting: !Q,
                        pageCount: M,
                        state: {
                            sorting: eW,
                            columnVisibility: ek,
                            rowSelection: ej,
                            columnFilters: ez,
                            pagination: e$
                        },
                        meta: ec,
                        enableRowSelection: S,
                        manualPagination: Z,
                        manualFiltering: Z,
                        manualSorting: D,
                        enableColumnResizing: H,
                        columnResizeMode: "onChange",
                        onRowSelectionChange: eN,
                        onColumnFiltersChange: eR,
                        onColumnVisibilityChange: eC,
                        onSortingChange: eX,
                        onPaginationChange: e => {
                            eD(t => {
                                let r = "function" == typeof e ? e(t) : e;
                                return null == T || T(r.pageIndex, r.pageSize), r
                            })
                        },
                        getCoreRowModel: (0, i.sC)(),
                        getFilteredRowModel: (0, i.vL)(),
                        getPaginationRowModel: (0, i.G_)(),
                        getSortedRowModel: (0, i.tj)(),
                        getFacetedRowModel: (0, i.o6)(),
                        getFacetedUniqueValues: (0, i.JG)()
                    }),
                    eK = (0, a.useCallback)(e => {
                        if (eP(e), k && !Z) {
                            var t;
                            null === (t = eq.getColumn(k)) || void 0 === t || t.setFilterValue(e)
                        }
                        if (!q || !k) return;
                        let {
                            updatedFilters: r,
                            error: n
                        } = function(e, t, r) {
                            let n = e.trim(),
                                a = {
                                    ...r
                                },
                                l = "id" === t ? "search_id" : t;
                            return n ? a[l] = n : delete a[l], {
                                updatedFilters: a,
                                error: ""
                            }
                        }(e, k, K);
                        eA(n), eG.current && clearTimeout(eG.current), eG.current = setTimeout(() => {
                            eB.current = !0, q(r)
                        }, 300)
                    }, [k, q, K, eq, Z]),
                    eJ = (0, a.useCallback)(() => {
                        if (eP(""), eA(""), eG.current && (clearTimeout(eG.current), eG.current = null), k && !Z) {
                            var e;
                            null === (e = eq.getColumn(k)) || void 0 === e || e.setFilterValue("")
                        }
                        if (q && k) {
                            let e = {
                                    ...K
                                },
                                t = "id" === k ? "search_id" : k;
                            delete e[t], eB.current = !0, q(e)
                        }
                    }, [k, q, K, eq, Z]),
                    eQ = (0, a.useCallback)(e => {
                        let t = eq.getRowModel().rows;
                        if (0 === t.length) return;
                        let r = null != _ ? _ : w;
                        r && eT(n => {
                            let a;
                            let l = t.length - 1,
                                s = n;
                            null === s && null != ea && (s = t.findIndex(e => e.original.id === ea)), a = null === s || s < 0 ? "down" === e ? 0 : l : "down" === e ? Math.min(s + 1, l) : Math.max(s - 1, 0), setTimeout(() => eU(a), 0);
                            let i = t[a];
                            return i && r(i.original), a
                        })
                    }, [eq, eU, w, _, ea]);
                (0, u.y1)(["arrowdown", "k"], () => eQ("down"), {
                    scopes: ["data-table"],
                    repeat: !0,
                    capture: null != ea,
                    stopPropagation: null != ea
                }), (0, u.y1)(["arrowup", "j"], () => eQ("up"), {
                    scopes: ["data-table"],
                    repeat: !0,
                    capture: null != ea,
                    stopPropagation: null != ea
                }), (0, u.y1)(["enter", "x"], () => {
                    null !== eM && w && w(eq.getRowModel().rows[eM].original)
                }, {
                    scopes: ["data-table"]
                }), (0, u.y1)("f", () => {
                    E && k && (ev && eY(!0), window.setTimeout(() => {
                        var e;
                        return null === (e = eI.current) || void 0 === e ? void 0 : e.focus()
                    }, 0))
                }, {
                    scopes: ["data-table"]
                }), (0, u.y1)("shift+!", e => {
                    if (e.preventDefault(), null === eM || !window.flagRefs) return;
                    let t = eq.getRowModel().rows[eM];
                    if (t && window.flagRefs.has(t.id)) {
                        var r;
                        null === (r = window.flagRefs.get(t.id)) || void 0 === r || r.toggleFlag()
                    }
                }, {
                    scopes: ["data-table"]
                }), (0, a.useEffect)(() => {
                    if (eB.current) {
                        eB.current = !1;
                        return
                    }
                    if (k) {
                        var e, t;
                        let r = "id" === k ? "search_id" : k,
                            n = null !== (e = null == K ? void 0 : K[r]) && void 0 !== e ? e : "";
                        eP(n), !Z && eq.getColumn(k) && (null === (t = eq.getColumn(k)) || void 0 === t || t.setFilterValue(n))
                    }
                }, [K, k, eq, Z]), (0, a.useEffect)(() => {
                    ev && eV && eY(!0)
                }, [ev, eV]);
                let e0 = (0, a.useRef)(h);
                (0, a.useEffect)(() => {
                    if (e0.current !== h) {
                        if (e0.current = h, null != ea) {
                            let e = h.findIndex(e => e.id === ea);
                            eT(e >= 0 ? e : null)
                        } else eT(null)
                    }
                }, [h, ea]), (0, a.useEffect)(() => () => {
                    eG.current && clearTimeout(eG.current)
                }, []);
                let e1 = (0, a.useRef)(null);
                (0, a.useEffect)(() => {
                    if (!Q || !el || !e1.current) return;
                    let e = new IntersectionObserver(e => {
                        e[0].isIntersecting && es && el()
                    }, {
                        threshold: .1
                    });
                    return e.observe(e1.current), () => e.disconnect()
                }, [Q, el, es]);
                let e2 = eq.getRowModel().rows;
                (0, a.useEffect)(() => {
                    if (null == ea) return;
                    let e = e2.findIndex(e => e.original.id === ea);
                    e >= 0 && eT(e)
                }, [ea, e2]);
                let e5 = !!(ep || eg || eh),
                    e4 = $ && (0, n.jsx)(I, {
                        table: eq,
                        filterConfig: $,
                        onApplyFilters: q,
                        initialFilters: K,
                        borderlessTrigger: ev
                    }),
                    e3 = (E || ef || ei) && (0, n.jsxs)("div", {
                        className: (0, c.cn)("flex min-w-0 items-center gap-2", eb && "w-full"),
                        children: [k && (ev ? (0, n.jsx)(g, {
                            value: eV,
                            placeholder: C,
                            error: eL,
                            expanded: eO,
                            onExpandedChange: eY,
                            onChange: eK,
                            onReset: eJ,
                            inputRef: eI
                        }) : (0, n.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [(0, n.jsx)("div", {
                                className: "relative flex items-center",
                                children: (0, n.jsx)(m.I, {
                                    ref: eI,
                                    placeholder: C,
                                    value: eV,
                                    onChange: e => eK(e.target.value),
                                    onKeyDown: e => "Escape" === e.key && eJ(),
                                    className: (0, c.cn)("h-8 w-[150px] lg:w-[250px]", eL && "border-destructive")
                                })
                            }), eL && (0, n.jsx)("p", {
                                className: "text-xs text-destructive",
                                children: eL
                            })]
                        })), !eg && e4, F && (0, n.jsx)(A, {
                            table: eq,
                            children: eu
                        }), ef, !ev && eV && (0, n.jsxs)(f.z, {
                            variant: "ghost",
                            onClick: eJ,
                            className: "h-8 px-2 lg:px-3",
                            children: ["Reset", (0, n.jsx)(l.Pxu, {
                                className: "ml-2 size-4"
                            })]
                        }), ei && (0, n.jsxs)("div", {
                            className: (0, c.cn)("flex items-center gap-2 rounded-full bg-muted/50 px-2.5 py-1 text-sm", eb && "ml-auto"),
                            children: [(0, n.jsxs)("span", {
                                children: ["Filtered by date: ", (0, n.jsx)("strong", {
                                    children: eo
                                })]
                            }), ed && (0, n.jsx)("button", {
                                onClick: ed,
                                className: "ml-0.5 rounded-full p-1 transition-colors hover:bg-muted/80",
                                "aria-label": "Clear date filter",
                                children: (0, n.jsx)(l.Pxu, {
                                    className: "size-4"
                                })
                            })]
                        })]
                    }),
                    e7 = G ? (0, n.jsx)("div", {
                        className: "flex items-center gap-2",
                        children: G
                    }) : null;
                return Q ? (0, n.jsxs)("div", {
                    className: (0, c.cn)("group/table relative flex h-full flex-col", !e5 && "space-y-4", v),
                    children: [!e5 && (E || G) && (0, n.jsxs)("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [e3, e7]
                    }), e5 && ep && e3 ? (0, d.createPortal)(e3, ep) : null, e5 && eg && e4 ? (0, d.createPortal)(e4, eg) : null, e5 && eh && e7 ? (0, d.createPortal)(e7, eh) : null, ex, (0, n.jsxs)("div", {
                        className: "relative min-h-0 flex-1",
                        children: [(0, n.jsx)("div", {
                            className: (0, c.cn)("size-full overflow-auto", b),
                            onScroll: N,
                            children: (0, n.jsxs)("div", {
                                className: (0, c.cn)("flex flex-col gap-px px-1 py-1 transition-opacity", J && "pointer-events-none opacity-50"),
                                "aria-busy": J || void 0,
                                children: [ee && eq.getHeaderGroups().map(e => (0, n.jsx)("div", {
                                    className: "pointer-events-none flex h-8 items-center gap-3 px-3",
                                    children: e.headers.map((e, t) => {
                                        let r = e.column.columnDef.meta,
                                            a = null == r ? void 0 : r.align;
                                        return (0, n.jsx)("div", {
                                            className: "min-w-0 overflow-hidden text-xs font-medium text-muted-foreground",
                                            style: O(e.getSize(), r),
                                            children: e.isPlaceholder ? null : (0, n.jsx)("div", {
                                                className: (0, c.cn)(t > 0 && !a && "flex justify-center"),
                                                children: (0, s.ie)(e.column.columnDef.header, e.getContext())
                                            })
                                        }, e.id)
                                    })
                                }, e.id)), 0 === e2.length && !J && (0, n.jsx)("div", {
                                    className: "py-8 text-center text-sm text-muted-foreground",
                                    children: ey
                                }), 0 === e2.length && J && (0, n.jsxs)("div", {
                                    className: "flex items-center justify-center py-10 text-sm text-muted-foreground",
                                    children: [(0, n.jsx)(o.Z, {
                                        className: "mr-2 size-4 animate-spin"
                                    }), "Loading..."]
                                }), e2.map((e, t) => {
                                    var r;
                                    let l = null != ea ? e.original && e.original.id === ea : t === eM,
                                        i = null == er ? void 0 : er(e.original),
                                        o = t > 0 ? null === (r = e2[t - 1]) || void 0 === r ? void 0 : r.original : void 0,
                                        d = null == en ? void 0 : en(e.original, o);
                                    return (0, n.jsxs)(a.Fragment, {
                                        children: [d ? (0, n.jsx)("div", {
                                            className: "px-2.5 pb-0.5 pt-2 text-xs leading-none text-muted-foreground first:pt-1",
                                            children: d
                                        }) : null, (0, n.jsx)("div", {
                                            "data-highlighted": l ? "true" : void 0,
                                            className: (0, c.cn)("flex h-7 items-center gap-3 rounded-[14px] px-2.5 text-sm transition-colors", w && "cursor-pointer hover:bg-muted/30", l && "bg-[#F5F5F7]", et, i),
                                            onClick: () => {
                                                eT(t), null == w || w(e.original), setTimeout(() => eU(t), 0)
                                            },
                                            ref: e => {
                                                e ? eH.current.set(t, e) : eH.current.delete(t)
                                            },
                                            children: e.getVisibleCells().map((e, t) => {
                                                let r = e.column.columnDef.meta,
                                                    a = null == r ? void 0 : r.align,
                                                    l = (0, s.ie)(e.column.columnDef.cell, e.getContext());
                                                return (0, n.jsx)("div", {
                                                    className: "min-w-0 overflow-hidden",
                                                    style: O(e.column.getSize(), r),
                                                    children: t > 0 && !a ? (0, n.jsx)("div", {
                                                        className: "flex w-full items-center justify-center",
                                                        children: l
                                                    }) : l
                                                }, e.id)
                                            })
                                        })]
                                    }, e.id)
                                }), es && (0, n.jsx)("div", {
                                    ref: e1,
                                    className: "h-4"
                                })]
                            })
                        }), J && e2.length > 0 ? (0, n.jsx)("div", {
                            className: "pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-background/50",
                            children: (0, n.jsxs)("div", {
                                className: "flex items-center justify-center text-sm text-muted-foreground",
                                children: [(0, n.jsx)(o.Z, {
                                    className: "mr-2 size-4 animate-spin"
                                }), "Loading..."]
                            })
                        }) : null]
                    }), z && !Z && (0, n.jsx)("div", {
                        className: "shrink-0",
                        children: (0, n.jsx)(V, {
                            table: eq,
                            pageSizeOptions: R
                        })
                    }), z && Z && (0, n.jsx)("div", {
                        className: "shrink-0",
                        children: (0, n.jsx)(V, {
                            table: eq,
                            pageSizeOptions: R
                        })
                    })]
                }) : (0, n.jsxs)("div", {
                    className: (0, c.cn)("group/table relative flex h-full flex-col", !e5 && "space-y-4", v),
                    children: [e5 ? (0, n.jsxs)(n.Fragment, {
                        children: [ep && e3 ? (0, d.createPortal)(e3, ep) : null, eg && e4 ? (0, d.createPortal)(e4, eg) : null, eh && e7 ? (0, d.createPortal)(e7, eh) : null]
                    }) : null, !e5 && (E || G) && (0, n.jsxs)("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [(0, n.jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [k && (0, n.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [(0, n.jsx)("div", {
                                    className: "relative flex items-center",
                                    children: (0, n.jsx)(m.I, {
                                        ref: eI,
                                        placeholder: C,
                                        value: eV,
                                        onChange: e => eK(e.target.value),
                                        onKeyDown: e => "Escape" === e.key && eJ(),
                                        className: (0, c.cn)("h-8 w-[150px] lg:w-[250px]", eL && "border-destructive")
                                    })
                                }), eL && (0, n.jsx)("p", {
                                    className: "text-xs text-destructive",
                                    children: eL
                                })]
                            }), $ && (0, n.jsx)(I, {
                                table: eq,
                                filterConfig: $,
                                onApplyFilters: q,
                                initialFilters: K
                            }), F && (0, n.jsx)(A, {
                                table: eq,
                                children: eu
                            }), ef, eV && (0, n.jsxs)(f.z, {
                                variant: "ghost",
                                onClick: eJ,
                                className: "h-8 px-2 lg:px-3",
                                children: ["Reset", (0, n.jsx)(l.Pxu, {
                                    className: "ml-2 size-4"
                                })]
                            }), ei && (0, n.jsxs)("div", {
                                className: "flex items-center gap-2 rounded-full bg-muted/50 px-2.5 py-1 text-sm",
                                children: [(0, n.jsxs)("span", {
                                    children: ["Filtered by date: ", (0, n.jsx)("strong", {
                                        children: eo
                                    })]
                                }), ed && (0, n.jsx)("button", {
                                    onClick: ed,
                                    className: "ml-0.5 rounded-full p-1 transition-colors hover:bg-muted/80",
                                    "aria-label": "Clear date filter",
                                    children: (0, n.jsx)(l.Pxu, {
                                        className: "size-4"
                                    })
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: "flex items-center gap-2",
                            children: G && G
                        })]
                    }), ex, (0, n.jsx)("div", {
                        className: (0, c.cn)("relative min-h-0 flex-1 overflow-hidden rounded-md", j && "border"),
                        children: (0, n.jsx)("div", {
                            className: (0, c.cn)("block size-full overflow-auto", b),
                            onScroll: N,
                            children: (0, n.jsxs)(x.iA, {
                                className: (0, c.cn)("w-full border-collapse", (null === (t = eq.getRowModel().rows) || void 0 === t ? void 0 : t.length) && "table-fixed"),
                                children: [(0, n.jsx)(x.xD, {
                                    children: eq.getHeaderGroups().map(e => (0, n.jsx)(x.SC, {
                                        className: "w-full border-b",
                                        children: e.headers.map((e, t) => {
                                            let r = e.column.columnDef.meta,
                                                a = null == r ? void 0 : r.align;
                                            return (0, n.jsxs)(x.ss, {
                                                colSpan: e.colSpan,
                                                style: {
                                                    width: e.getSize(),
                                                    ...!1 === e.column.columnDef.enableResizing && {
                                                        maxWidth: e.getSize()
                                                    }
                                                },
                                                className: (0, c.cn)("group sticky top-0 whitespace-nowrap bg-card [&_div[class*='text-left']]:!text-left [&_div[class*='text-right']]:!text-right", !a && t > 0 && "text-center", "left" === a && "text-left", "right" === a && "text-right", "center" === a && "text-center"),
                                                children: [e.isPlaceholder ? null : (0, s.ie)(e.column.columnDef.header, e.getContext()), e.column.getCanResize() && e.column.columnDef.enableResizing && (0, n.jsx)("div", {
                                                    onMouseDown: e.getResizeHandler(),
                                                    onTouchStart: e.getResizeHandler(),
                                                    className: "absolute right-0 top-0 hidden h-full w-1 cursor-col-resize touch-none select-none items-center justify-center group-hover:flex",
                                                    title: "Resize column",
                                                    children: (0, n.jsx)("div", {
                                                        className: "absolute right-2 h-4/5 w-[2px] rounded-full transition-colors ".concat(e.column.getIsResizing() ? "bg-gray-400" : "bg-gray-300 group-hover:bg-gray-400")
                                                    })
                                                })]
                                            }, e.id)
                                        })
                                    }, e.id))
                                }), (0, n.jsx)(x.RM, {
                                    children: (null === (r = eq.getRowModel().rows) || void 0 === r ? void 0 : r.length) ? eq.getRowModel().rows.map((e, t) => (0, n.jsx)(x.SC, {
                                        className: (0, c.cn)("group/row h-8", w ? "cursor-pointer" : "cursor-default"),
                                        "data-state": e.getIsSelected() && "selected",
                                        "data-highlighted": t === eM ? "true" : void 0,
                                        onClick: () => {
                                            eT(t), null == w || w(e.original), setTimeout(() => eU(t), 0)
                                        },
                                        ref: e => {
                                            e ? eH.current.set(t, e) : eH.current.delete(t)
                                        },
                                        children: e.getVisibleCells().map((e, t) => {
                                            let r = (0, s.ie)(e.column.columnDef.cell, e.getContext()),
                                                a = e.column.columnDef.meta,
                                                l = null == a ? void 0 : a.align,
                                                i = !!(null == a ? void 0 : a.wrap);
                                            return (0, n.jsx)(x.pj, {
                                                style: {
                                                    width: e.column.getSize(),
                                                    ...!1 === e.column.columnDef.enableResizing && {
                                                        maxWidth: e.column.getSize()
                                                    }
                                                },
                                                className: (0, c.cn)(i ? "overflow-visible whitespace-normal" : "overflow-hidden whitespace-nowrap", "left" === l && "text-left", "right" === l && "text-right", "center" === l && "text-center"),
                                                children: t > 0 && !l ? (0, n.jsx)("div", {
                                                    className: "flex w-full items-center justify-center [&>div[class*='text-left']]:!ml-0 [&>div[class*='text-left']]:!mr-auto [&>div[class*='text-right']]:!ml-auto [&>div[class*='text-right']]:!mr-0 [&>div[class*='truncate']]:!min-w-0 [&>div[class*='truncate']]:!flex-1 [&>div[class*='truncate']]:!justify-start [&>div[class*='truncate']]:!text-left [&_div[class*='flex']:not([class*='text-right']):not([class*='text-left']):not([class*='justify-end']):not([class*='justify-start'])]:!justify-center",
                                                    children: r
                                                }) : r
                                            }, e.id)
                                        })
                                    }, e.id)) : !J && (0, n.jsx)(x.SC, {
                                        children: (0, n.jsx)(x.pj, {
                                            colSpan: p.length,
                                            className: "h-24 text-center",
                                            children: ey
                                        })
                                    })
                                })]
                            })
                        })
                    }), z && (0, n.jsx)("div", {
                        className: (0, c.cn)(em && "opacity-0 transition-opacity group-hover/table:opacity-100"),
                        children: (0, n.jsx)(V, {
                            table: eq,
                            pageSizeOptions: R
                        })
                    })]
                })
            }
        },
        26289: function(e, t, r) {
            r.d(t, {
                D: function() {
                    return w
                }
            });
            var n = r(57437),
                a = r(2265),
                l = r(29575),
                s = r(6639),
                i = r(14613),
                o = r(55463),
                d = r(53491),
                c = r(73903),
                u = r(81390),
                f = r(94211),
                m = r(90759),
                x = r(19847),
                p = r(31047),
                g = r(92451),
                h = r(10407),
                v = r(72860),
                b = r(94508),
                y = r(62869),
                j = r(57054);
            let N = [{
                label: "Last 7 days",
                getValue: () => {
                    let e = new Date;
                    return {
                        from: (0, l.Z)(e, 7),
                        to: e
                    }
                }
            }, {
                label: "Last 14 days",
                getValue: () => {
                    let e = new Date;
                    return {
                        from: (0, l.Z)(e, 14),
                        to: e
                    }
                }
            }, {
                label: "Last 30 days",
                getValue: () => {
                    let e = new Date;
                    return {
                        from: (0, l.Z)(e, 30),
                        to: e
                    }
                }
            }, {
                label: "Last 90 days",
                getValue: () => {
                    let e = new Date;
                    return {
                        from: (0, l.Z)(e, 90),
                        to: e
                    }
                }
            }, {
                label: "Last 1 year",
                getValue: () => {
                    let e = new Date;
                    return {
                        from: (0, l.Z)(e, 365),
                        to: e
                    }
                }
            }, {
                label: "Last 2 years",
                getValue: () => {
                    let e = new Date;
                    return {
                        from: (0, l.Z)(e, 730),
                        to: e
                    }
                }
            }];

            function w(e) {
                let {
                    className: t,
                    dateRange: r,
                    onChange: w,
                    onRangeIntent: _,
                    activePreset: k,
                    onPresetChange: C,
                    container: z,
                    autoOpenOnMount: R = !1,
                    leadPresets: F,
                    triggerLabel: S
                } = e, [E, Z] = a.useState(R ? "calendar" : null), [D, M] = a.useState(r), [T, I] = a.useState(k || null), [V, P] = a.useState(new Date), L = void 0 !== k ? k : T, A = e => {
                    C ? C(e) : I(e)
                }, O = e => ({
                    from: e.from ? (0, s.Z)(e.from) : e.from,
                    to: e.to ? (0, s.Z)(e.to) : e.to
                });
                a.useEffect(() => {
                    if (("calendar" === E || null === E) && (M(O(r)), P((null == r ? void 0 : r.from) ? new Date(r.from) : new Date), void 0 === k && (null == r ? void 0 : r.from) && (null == r ? void 0 : r.to))) {
                        let e = N.find(e => {
                            let t = O(e.getValue());
                            if (!t.from || !t.to || !r.from || !r.to) return !1;
                            let n = Math.abs(r.from.getTime() - t.from.getTime()),
                                a = Math.abs(r.to.getTime() - t.to.getTime());
                            return n < 432e5 && a < 432e5
                        });
                        e && I(e.label)
                    }
                }, [E, r, k]);
                let Y = e => {
                    let t = O(e.getValue());
                    M(t), A(e.label), w(t)
                };
                return (0, n.jsx)("div", {
                    className: (0, b.cn)("flex items-center gap-2", t),
                    children: (0, n.jsxs)(j.J2, {
                        open: "calendar" === E,
                        onOpenChange: e => {
                            e ? Z("calendar") : Z(null)
                        },
                        children: [(0, n.jsx)(j.xo, {
                            asChild: !0,
                            children: S ? (0, n.jsxs)(y.z, {
                                variant: "outline",
                                className: (0, b.cn)("h-auto min-w-[210px] justify-start gap-2 rounded-[10px] border border-border py-1.5 pl-3 pr-3 text-left font-normal shadow-none"),
                                children: [(0, n.jsx)(p.Z, {
                                    className: "size-4 shrink-0 text-muted-foreground"
                                }), (0, n.jsxs)("span", {
                                    className: "flex min-w-0 flex-col leading-tight",
                                    children: [(0, n.jsx)("span", {
                                        className: "truncate text-sm font-medium",
                                        children: S
                                    }), (null == r ? void 0 : r.from) && (null == r ? void 0 : r.to) && (0, n.jsx)("span", {
                                        className: "truncate text-[11px] tabular-nums text-muted-foreground",
                                        children: "".concat((0, d.Z)(r.from, "MMM d, yyyy"), " – ").concat((0, d.Z)(r.to, "MMM d, yyyy"))
                                    })]
                                })]
                            }) : (0, n.jsxs)(y.z, {
                                variant: "outline",
                                className: (0, b.cn)("h-8 w-auto justify-start rounded-[10px] border border-border px-3 text-left text-sm font-normal shadow-none", !r && "text-muted-foreground"),
                                children: [(0, n.jsx)(p.Z, {
                                    className: "mr-2 size-4"
                                }), L || ((null == r ? void 0 : r.from) && (null == r ? void 0 : r.to) ? "".concat((0, d.Z)(r.from, "MM/dd/yy"), " - ").concat((0, d.Z)(r.to, "MM/dd/yy")) : "Select date range")]
                            })
                        }), (0, n.jsx)(j.yk, {
                            align: "end",
                            sideOffset: 8,
                            container: z,
                            className: "w-auto overflow-hidden rounded-xl border border-border bg-background p-0 shadow-sm ring-1 ring-black/5",
                            onInteractOutside: e => {
                                e.preventDefault(), Z(null)
                            },
                            children: (0, n.jsxs)("div", {
                                className: "flex",
                                children: [(0, n.jsxs)("div", {
                                    className: "flex w-[180px] flex-col rounded-l-xl border-r border-border bg-card py-2",
                                    children: [F && F.length > 0 && (0, n.jsxs)(n.Fragment, {
                                        children: [F.map(e => (0, n.jsx)("button", {
                                            onClick: () => {
                                                e.onClick(), Z(null)
                                            },
                                            className: "mx-auto w-[90%] rounded-md px-3 py-1.5 text-left text-xs transition-colors hover:bg-muted/50",
                                            children: e.label
                                        }, e.label)), (0, n.jsx)("div", {
                                            className: "mx-auto my-1 h-px w-[90%] bg-border"
                                        })]
                                    }), N.map(e => {
                                        let t = L === e.label;
                                        return (0, n.jsx)("button", {
                                            onClick: () => Y(e),
                                            onPointerEnter: () => null == _ ? void 0 : _(O(e.getValue())),
                                            className: (0, b.cn)("mx-auto w-[90%] rounded-md px-3 py-1.5 text-left text-xs transition-colors", t ? "bg-muted font-medium" : "hover:bg-muted/50"),
                                            children: e.label
                                        }, e.label)
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "p-4",
                                    children: [(0, n.jsxs)("div", {
                                        className: "mb-2 flex items-center justify-between",
                                        children: [(0, n.jsx)("button", {
                                            onClick: () => P((0, i.Z)(V, 1)),
                                            className: "rounded p-1 hover:bg-muted",
                                            "aria-label": "Previous",
                                            children: (0, n.jsx)(g.Z, {
                                                className: "size-4"
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "flex gap-16 text-[14px] font-medium",
                                            children: [(0, n.jsx)("div", {
                                                children: (0, d.Z)(V, "MMMM yyyy")
                                            }), (0, n.jsx)("div", {
                                                children: (0, d.Z)((0, o.Z)(V, 1), "MMMM yyyy")
                                            })]
                                        }), (0, n.jsx)("button", {
                                            onClick: () => P((0, o.Z)(V, 1)),
                                            className: "rounded p-1 hover:bg-muted",
                                            "aria-label": "Next",
                                            children: (0, n.jsx)(h.Z, {
                                                className: "size-4"
                                            })
                                        })]
                                    }), (0, n.jsx)(v._W, {
                                        mode: "range",
                                        month: V,
                                        onMonthChange: e => P(e),
                                        numberOfMonths: 2,
                                        pagedNavigation: !0,
                                        selected: D,
                                        onSelect: e => {
                                            if (e) {
                                                if (e.from && !e.to) {
                                                    let t = (0, s.Z)(e.from),
                                                        r = {
                                                            from: t,
                                                            to: t
                                                        };
                                                    M(r), A(null), w(r);
                                                    return
                                                }
                                                if (e.from && e.to) {
                                                    let t = O(e);
                                                    M(t), A(null), w(t);
                                                    return
                                                }
                                                M(e)
                                            }
                                        },
                                        showOutsideDays: !1,
                                        className: "border-none p-0",
                                        classNames: {
                                            months: "flex gap-4",
                                            month: "space-y-0 px-0",
                                            caption: "hidden",
                                            head_row: "grid grid-cols-7",
                                            head_cell: "text-[11px] font-medium text-muted-foreground text-center",
                                            table: "w-full border-collapse",
                                            row: "grid grid-cols-7",
                                            cell: "p-0 relative",
                                            day: "h-7 w-7 p-0 text-xs rounded-full flex items-center justify-center hover:bg-muted",
                                            day_outside: "text-muted-foreground/40",
                                            day_today: "font-semibold",
                                            day_disabled: "text-muted-foreground/40 opacity-50 cursor-not-allowed hover:bg-transparent",
                                            day_range_start: "bg-[#1E4FD8] text-white rounded-full",
                                            day_range_end: "bg-[#1E4FD8] text-white rounded-full",
                                            day_range_middle: "!bg-[#E8ECED] !text-black rounded-none !important relative z-0 my-px",
                                            day_selected: "bg-[#1E4FD8] text-white"
                                        },
                                        modifiersClassNames: {
                                            first_of_month: "!rounded-l-md",
                                            last_of_month: "!rounded-r-md",
                                            first_of_week: "!rounded-l-md",
                                            last_of_week: "!rounded-r-md",
                                            after_start: "!rounded-l-md",
                                            before_end: "!rounded-r-md",
                                            selected_middle_day: "!rounded-r-md"
                                        },
                                        disabled: {
                                            after: new Date
                                        },
                                        modifiers: {
                                            first_of_month: e => {
                                                if (!(null == D ? void 0 : D.from) || !(null == D ? void 0 : D.to)) return !1;
                                                let t = e >= D.from && e <= D.to,
                                                    r = (0, c.Z)(e, D.from);
                                                return t && (0, u.Z)(e) && !r
                                            },
                                            last_of_month: e => {
                                                if (!(null == D ? void 0 : D.from) || !(null == D ? void 0 : D.to)) return !1;
                                                let t = e >= D.from && e <= D.to,
                                                    r = (0, c.Z)(e, D.to);
                                                return t && (0, f.Z)(e) && !r
                                            },
                                            first_of_week: e => {
                                                if (!(null == D ? void 0 : D.from) || !(null == D ? void 0 : D.to)) return !1;
                                                let t = e >= D.from && e <= D.to,
                                                    r = (0, c.Z)(e, D.from);
                                                return t && (0, m.Z)(e) && !r
                                            },
                                            last_of_week: e => {
                                                if (!(null == D ? void 0 : D.from) || !(null == D ? void 0 : D.to)) return !1;
                                                let t = e >= D.from && e <= D.to,
                                                    r = (0, c.Z)(e, D.to);
                                                return t && (0, x.Z)(e) && !r
                                            },
                                            after_start: e => {
                                                if (!(null == D ? void 0 : D.from) || !(null == D ? void 0 : D.to) || !(e > D.from && e < D.to)) return !1;
                                                let t = (0, s.Z)((0, l.Z)(e, 1));
                                                return (0, c.Z)(t, D.from)
                                            },
                                            before_end: e => {
                                                if (!(null == D ? void 0 : D.from) || !(null == D ? void 0 : D.to) || !(e >= D.from && e <= D.to) || (0, c.Z)(e, D.to)) return !1;
                                                let t = (0, s.Z)((0, o.Z)(e, 0));
                                                return t.setDate(t.getDate() + 1), (0, c.Z)(t, D.to)
                                            },
                                            selected_middle_day: e => ((null == D ? void 0 : D.from) && null != D && D.to, !1)
                                        },
                                        footer: null
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }
        },
        35974: function(e, t, r) {
            r.d(t, {
                C: function() {
                    return o
                }
            });
            var n = r(57437),
                a = r(2265),
                l = r(77712),
                s = r(94508);
            let i = (0, l.j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
                    variants: {
                        variant: {
                            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
                            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
                            outline: "text-foreground"
                        }
                    },
                    defaultVariants: {
                        variant: "default"
                    }
                }),
                o = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        variant: a,
                        ...l
                    } = e;
                    return (0, n.jsx)("div", {
                        ref: t,
                        className: (0, s.cn)(i({
                            variant: a
                        }), r),
                        ...l
                    })
                });
            o.displayName = "Badge"
        },
        62869: function(e, t, r) {
            r.d(t, {
                d: function() {
                    return o
                },
                z: function() {
                    return d
                }
            });
            var n = r(57437),
                a = r(2265),
                l = r(37053),
                s = r(77712),
                i = r(94508);
            let o = (0, s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
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
                d = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        variant: a,
                        size: s,
                        asChild: d = !1,
                        ...c
                    } = e, u = d ? l.g7 : "button";
                    return (0, n.jsx)(u, {
                        className: (0, i.cn)(o({
                            variant: a,
                            size: s,
                            className: r
                        })),
                        ref: t,
                        ...c
                    })
                });
            d.displayName = "Button"
        },
        23518: function(e, t, r) {
            r.d(t, {
                di: function() {
                    return g
                },
                e8: function() {
                    return f
                },
                fu: function() {
                    return x
                },
                m5: function() {
                    return c
                },
                mY: function() {
                    return d
                },
                rb: function() {
                    return m
                },
                sZ: function() {
                    return u
                },
                zz: function() {
                    return p
                }
            });
            var n = r(57437),
                a = r(2265),
                l = r(20653),
                s = r(46343),
                i = r(94508),
                o = r(26110);
            let d = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(s.mY, {
                    ref: t,
                    className: (0, i.cn)("flex size-full flex-col overflow-hidden rounded-[10px] bg-popover text-popover-foreground", r),
                    ...a
                })
            });
            d.displayName = s.mY.displayName;
            let c = e => {
                    let {
                        children: t,
                        ...r
                    } = e;
                    return (0, n.jsx)(o.Vq, {
                        ...r,
                        children: (0, n.jsx)(o.cZ, {
                            className: "overflow-hidden p-0",
                            children: (0, n.jsx)(d, {
                                className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:size-5",
                                children: t
                            })
                        })
                    })
                },
                u = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        ...a
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: "flex items-center border-b px-3",
                        "cmdk-input-wrapper": "",
                        children: [(0, n.jsx)(l._Ve, {
                            className: "mr-2 size-4 shrink-0 opacity-50"
                        }), (0, n.jsx)(s.mY.Input, {
                            ref: t,
                            className: (0, i.cn)("flex h-10 w-full rounded-[10px] bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", r),
                            ...a
                        })]
                    })
                });
            u.displayName = s.mY.Input.displayName;
            let f = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(s.mY.List, {
                    ref: t,
                    className: (0, i.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden", r),
                    ...a
                })
            });
            f.displayName = s.mY.List.displayName;
            let m = a.forwardRef((e, t) => (0, n.jsx)(s.mY.Empty, {
                ref: t,
                className: "py-6 text-center text-sm",
                ...e
            }));
            m.displayName = s.mY.Empty.displayName;
            let x = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(s.mY.Group, {
                    ref: t,
                    className: (0, i.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", r),
                    ...a
                })
            });
            x.displayName = s.mY.Group.displayName;
            let p = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(s.mY.Separator, {
                    ref: t,
                    className: (0, i.cn)("-mx-1 h-px bg-border", r),
                    ...a
                })
            });
            p.displayName = s.mY.Separator.displayName;
            let g = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(s.mY.Item, {
                    ref: t,
                    className: (0, i.cn)("relative flex cursor-default select-none items-center rounded-[6px] px-3 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-[#F7F7F7] data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50", r),
                    ...a
                })
            });
            g.displayName = s.mY.Item.displayName
        },
        26110: function(e, t, r) {
            r.d(t, {
                $N: function() {
                    return g
                },
                Be: function() {
                    return h
                },
                GG: function() {
                    return u
                },
                Vq: function() {
                    return o
                },
                cN: function() {
                    return p
                },
                cZ: function() {
                    return m
                },
                fK: function() {
                    return x
                },
                hg: function() {
                    return d
                }
            });
            var n = r(57437),
                a = r(2265),
                l = r(49027),
                s = r(20653),
                i = r(94508);
            let o = l.fC,
                d = l.xz,
                c = l.h_,
                u = l.x8,
                f = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        ...a
                    } = e;
                    return (0, n.jsx)(l.aV, {
                        ref: t,
                        className: (0, i.cn)("fixed inset-0 z-[10000] bg-black/20 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", r),
                        ...a
                    })
                });
            f.displayName = l.aV.displayName;
            let m = a.forwardRef((e, t) => {
                let {
                    className: r,
                    children: a,
                    hideCloseButton: o = !0,
                    overlayClassName: d,
                    ...u
                } = e;
                return (0, n.jsxs)(c, {
                    children: [(0, n.jsx)(f, {
                        className: d
                    }), (0, n.jsxs)(l.VY, {
                        ref: t,
                        className: (0, i.cn)("fixed left-1/2 top-1/2 z-[10000] grid h-auto w-full max-h-[min(90dvh,40rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 content-start gap-4 overflow-y-auto overscroll-contain rounded-2xl border bg-background p-6 shadow-lg outline-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]", r),
                        ...u,
                        children: [a, !o && (0, n.jsxs)(l.x8, {
                            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                            children: [(0, n.jsx)(s.Pxu, {
                                className: "size-4"
                            }), (0, n.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })]
                        })]
                    })]
                })
            });
            m.displayName = l.VY.displayName;
            let x = e => {
                let {
                    className: t,
                    ...r
                } = e;
                return (0, n.jsx)("div", {
                    className: (0, i.cn)("flex flex-col space-y-1.5 text-center sm:text-left", t),
                    ...r
                })
            };
            x.displayName = "DialogHeader";
            let p = e => {
                let {
                    className: t,
                    ...r
                } = e;
                return (0, n.jsx)("div", {
                    className: (0, i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t),
                    ...r
                })
            };
            p.displayName = "DialogFooter";
            let g = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(l.Dx, {
                    ref: t,
                    className: (0, i.cn)("text-lg font-semibold leading-none tracking-tight", r),
                    ...a
                })
            });
            g.displayName = l.Dx.displayName;
            let h = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(l.dk, {
                    ref: t,
                    className: (0, i.cn)("text-sm text-muted-foreground", r),
                    ...a
                })
            });
            h.displayName = l.dk.displayName
        },
        84190: function(e, t, r) {
            r.d(t, {
                $F: function() {
                    return c
                },
                AW: function() {
                    return p
                },
                Ju: function() {
                    return b
                },
                Ph: function() {
                    return u
                },
                TG: function() {
                    return x
                },
                VD: function() {
                    return y
                },
                Xi: function() {
                    return g
                },
                _x: function() {
                    return f
                },
                bO: function() {
                    return h
                },
                h_: function() {
                    return d
                },
                kt: function() {
                    return m
                },
                qB: function() {
                    return v
                }
            });
            var n = r(57437),
                a = r(2265),
                l = r(7237),
                s = r(20653),
                i = r(92934),
                o = r(94508);
            let d = l.fC,
                c = l.xz;
            l.ZA, l.Uv;
            let u = l.Tr,
                f = l.Ee,
                m = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        inset: a,
                        children: i,
                        ...d
                    } = e;
                    return (0, n.jsxs)(l.fF, {
                        ref: t,
                        className: (0, o.cn)("flex cursor-pointer select-none items-center rounded-[6px] px-3 py-1.5 text-sm outline-none hover:bg-[#F7F7F7] focus:bg-[#F7F7F7] data-[state=open]:bg-[#F7F7F7]", a && "pl-8", r),
                        ...d,
                        children: [i, (0, n.jsx)(s.XCv, {
                            className: "ml-auto size-4"
                        })]
                    })
                });
            m.displayName = l.fF.displayName;
            let x = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(l.tu, {
                    ref: t,
                    className: (0, o.cn)("z-[10000] min-w-32 overflow-hidden rounded-[10px] border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", r),
                    ...a
                })
            });
            x.displayName = l.tu.displayName;
            let p = a.forwardRef((e, t) => {
                let {
                    className: r,
                    sideOffset: a = 4,
                    ...s
                } = e;
                return (0, n.jsx)(l.Uv, {
                    children: (0, n.jsx)(l.VY, {
                        ref: t,
                        sideOffset: a,
                        className: (0, o.cn)("z-[10000] min-w-32 overflow-hidden rounded-[10px] border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", r),
                        ...s
                    })
                })
            });
            p.displayName = l.VY.displayName;
            let g = a.forwardRef((e, t) => {
                let {
                    className: r,
                    inset: a,
                    ...s
                } = e;
                return (0, n.jsx)(l.ck, {
                    ref: t,
                    className: (0, o.cn)("relative flex cursor-pointer select-none items-center rounded-[6px] px-3 py-1.5 text-sm outline-none transition-colors hover:bg-[#F7F7F7] focus:bg-[#F7F7F7] focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a && "pl-8", r),
                    ...s
                })
            });
            g.displayName = l.ck.displayName;
            let h = a.forwardRef((e, t) => {
                let {
                    className: r,
                    children: a,
                    checked: s,
                    ...d
                } = e;
                return (0, n.jsxs)(l.oC, {
                    ref: t,
                    className: (0, o.cn)("relative flex cursor-pointer select-none items-center rounded-[6px] py-1.5 pl-3 pr-8 text-sm outline-none transition-colors hover:bg-[#F7F7F7] focus:bg-[#F7F7F7] focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r),
                    checked: s,
                    ...d,
                    children: [a, (0, n.jsx)("span", {
                        className: "absolute right-2 flex size-3.5 items-center justify-center",
                        children: (0, n.jsx)(l.wU, {
                            children: (0, n.jsx)(i.Z, {
                                className: "size-3.5 fill-current stroke-background"
                            })
                        })
                    })]
                })
            });
            h.displayName = l.oC.displayName;
            let v = a.forwardRef((e, t) => {
                let {
                    className: r,
                    children: a,
                    ...s
                } = e;
                return (0, n.jsxs)(l.Rk, {
                    ref: t,
                    className: (0, o.cn)("relative flex cursor-pointer select-none items-center rounded-[6px] py-1.5 pl-3 pr-8 text-sm outline-none transition-colors hover:bg-[#F7F7F7] focus:bg-[#F7F7F7] focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r),
                    ...s,
                    children: [a, (0, n.jsx)("span", {
                        className: "absolute right-2 flex size-3.5 items-center justify-center",
                        children: (0, n.jsx)(l.wU, {
                            children: (0, n.jsx)(i.Z, {
                                className: "size-3.5 fill-current stroke-background"
                            })
                        })
                    })]
                })
            });
            v.displayName = l.Rk.displayName;
            let b = a.forwardRef((e, t) => {
                let {
                    className: r,
                    inset: a,
                    ...s
                } = e;
                return (0, n.jsx)(l.__, {
                    ref: t,
                    className: (0, o.cn)("px-2 py-1.5 text-sm font-semibold", a && "pl-8", r),
                    ...s
                })
            });
            b.displayName = l.__.displayName;
            let y = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(l.Z0, {
                    ref: t,
                    className: (0, o.cn)("-mx-1 my-1 h-px bg-muted", r),
                    ...a
                })
            });
            y.displayName = l.Z0.displayName
        },
        95186: function(e, t, r) {
            r.d(t, {
                I: function() {
                    return s
                }
            });
            var n = r(57437),
                a = r(2265),
                l = r(94508);
            let s = a.forwardRef((e, t) => {
                let {
                    className: r,
                    type: a,
                    ...s
                } = e;
                return (0, n.jsx)("input", {
                    type: a,
                    className: (0, l.cn)("flex h-9 w-full rounded-[10px] border border-border bg-transparent px-3 py-1.5 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", r),
                    ref: t,
                    ...s
                })
            });
            s.displayName = "Input"
        },
        57054: function(e, t, r) {
            r.d(t, {
                J2: function() {
                    return i
                },
                xo: function() {
                    return o
                },
                yk: function() {
                    return d
                }
            });
            var n = r(57437),
                a = r(2265),
                l = r(27312),
                s = r(94508);
            let i = l.fC,
                o = l.xz;
            l.ee;
            let d = a.forwardRef((e, t) => {
                let {
                    className: r,
                    align: a = "center",
                    sideOffset: i = 4,
                    container: o,
                    ...d
                } = e;
                return (0, n.jsx)(l.h_, {
                    container: o,
                    children: (0, n.jsx)(l.VY, {
                        ref: t,
                        align: a,
                        sideOffset: i,
                        className: (0, s.cn)("z-[10001] w-72 rounded-[10px] border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", r),
                        ...d
                    })
                })
            });
            d.displayName = l.VY.displayName
        },
        19378: function(e, t, r) {
            r.d(t, {
                x: function() {
                    return i
                }
            });
            var n = r(57437),
                a = r(2265),
                l = r(43643),
                s = r(94508);
            let i = a.forwardRef((e, t) => {
                let {
                    className: r,
                    children: a,
                    hideScrollbar: i = !1,
                    ...d
                } = e;
                return (0, n.jsxs)(l.fC, {
                    ref: t,
                    className: (0, s.cn)("relative overflow-hidden", r),
                    ...d,
                    children: [(0, n.jsx)(l.l_, {
                        className: "size-full rounded-[inherit] overscroll-contain",
                        children: a
                    }), i ? null : (0, n.jsx)(o, {}), (0, n.jsx)(l.Ns, {})]
                })
            });
            i.displayName = l.fC.displayName;
            let o = a.forwardRef((e, t) => {
                let {
                    className: r,
                    orientation: a = "vertical",
                    ...i
                } = e;
                return (0, n.jsx)(l.gb, {
                    ref: t,
                    orientation: a,
                    className: (0, s.cn)("flex touch-none select-none transition-colors", "vertical" === a && "absolute inset-y-0 right-0 z-10 h-full w-1.5 border-l border-l-transparent p-px", "horizontal" === a && "absolute inset-x-0 bottom-0 h-2.5 flex-col border-t border-t-transparent p-px", r),
                    ...i,
                    children: (0, n.jsx)(l.q4, {
                        className: "relative flex-1 rounded-full bg-border"
                    })
                })
            });
            o.displayName = l.gb.displayName
        },
        53647: function(e, t, r) {
            r.d(t, {
                Bw: function() {
                    return p
                },
                DI: function() {
                    return c
                },
                Ph: function() {
                    return d
                },
                Ql: function() {
                    return h
                },
                i4: function() {
                    return f
                },
                ki: function() {
                    return u
                },
                n5: function() {
                    return g
                }
            });
            var n = r(57437),
                a = r(2265),
                l = r(20653),
                s = r(56873),
                i = r(92934),
                o = r(94508);
            let d = s.fC,
                c = s.ZA,
                u = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        ...a
                    } = e;
                    return (0, n.jsx)(s.B4, {
                        ref: t,
                        className: (0, o.cn)("block min-w-0 truncate", r),
                        ...a
                    })
                });
            u.displayName = s.B4.displayName;
            let f = a.forwardRef((e, t) => {
                let {
                    className: r,
                    children: a,
                    hideIcon: i,
                    ...d
                } = e;
                return (0, n.jsxs)(s.xz, {
                    ref: t,
                    className: (0, o.cn)("flex h-9 w-full min-w-0 max-w-full items-center justify-between truncate rounded-[10px] border border-border bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", r),
                    ...d,
                    children: [a, !i && (0, n.jsx)(s.JO, {
                        asChild: !0,
                        children: (0, n.jsx)(l.v4q, {
                            className: "size-4 opacity-50"
                        })
                    })]
                })
            });
            f.displayName = s.xz.displayName;
            let m = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(s.u_, {
                    ref: t,
                    className: (0, o.cn)("flex cursor-pointer items-center justify-center py-1", r),
                    ...a,
                    children: (0, n.jsx)(l.g8U, {})
                })
            });
            m.displayName = s.u_.displayName;
            let x = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(s.$G, {
                    ref: t,
                    className: (0, o.cn)("flex cursor-pointer items-center justify-center py-1", r),
                    ...a,
                    children: (0, n.jsx)(l.v4q, {})
                })
            });
            x.displayName = s.$G.displayName;
            let p = a.forwardRef((e, t) => {
                let {
                    className: r,
                    children: a,
                    position: l = "popper",
                    container: i,
                    hideScrollButtons: d = !1,
                    ...c
                } = e;
                return (0, n.jsx)(s.h_, {
                    container: i,
                    children: (0, n.jsxs)(s.VY, {
                        ref: t,
                        className: (0, o.cn)("relative z-50 max-h-96 min-w-32 overflow-hidden rounded-[10px] border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === l && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", r),
                        position: l,
                        ...c,
                        children: [!d && (0, n.jsx)(m, {}), (0, n.jsx)(s.l_, {
                            className: (0, o.cn)("p-1", "popper" === l && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                            children: a
                        }), !d && (0, n.jsx)(x, {})]
                    })
                })
            });
            p.displayName = s.VY.displayName;
            let g = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(s.__, {
                    ref: t,
                    className: (0, o.cn)("px-2 py-1.5 text-sm font-semibold", r),
                    ...a
                })
            });
            g.displayName = s.__.displayName;
            let h = a.forwardRef((e, t) => {
                let {
                    className: r,
                    children: a,
                    ...l
                } = e;
                return (0, n.jsxs)(s.ck, {
                    ref: t,
                    className: (0, o.cn)("relative flex w-full cursor-pointer select-none items-center rounded-[6px] py-1.5 pl-3 pr-8 text-sm outline-none hover:bg-[#F7F7F7] focus:bg-[#F7F7F7] focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r),
                    ...l,
                    children: [(0, n.jsx)("span", {
                        className: "absolute right-2 flex size-3.5 items-center justify-center",
                        children: (0, n.jsx)(s.wU, {
                            children: (0, n.jsx)(i.Z, {
                                className: "size-3.5 fill-current stroke-background"
                            })
                        })
                    }), (0, n.jsx)(s.eT, {
                        children: a
                    })]
                })
            });
            h.displayName = s.ck.displayName, a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)(s.Z0, {
                    ref: t,
                    className: (0, o.cn)("-mx-1 my-1 h-px bg-muted", r),
                    ...a
                })
            }).displayName = s.Z0.displayName
        },
        73578: function(e, t, r) {
            r.d(t, {
                RM: function() {
                    return o
                },
                SC: function() {
                    return d
                },
                iA: function() {
                    return s
                },
                pj: function() {
                    return u
                },
                ss: function() {
                    return c
                },
                xD: function() {
                    return i
                }
            });
            var n = r(57437),
                a = r(2265),
                l = r(94508);
            let s = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)("div", {
                    className: "relative w-full overflow-auto",
                    children: (0, n.jsx)("table", {
                        ref: t,
                        className: (0, l.cn)("w-full caption-bottom text-sm", r),
                        ...a
                    })
                })
            });
            s.displayName = "Table";
            let i = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)("thead", {
                    ref: t,
                    className: (0, l.cn)("[&_tr]", r),
                    ...a
                })
            });
            i.displayName = "TableHeader";
            let o = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)("tbody", {
                    ref: t,
                    className: (0, l.cn)("[&_tr:last-child]:border-0", r),
                    ...a
                })
            });
            o.displayName = "TableBody", a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)("tfoot", {
                    ref: t,
                    className: (0, l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", r),
                    ...a
                })
            }).displayName = "TableFooter";
            let d = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)("tr", {
                    ref: t,
                    className: (0, l.cn)("border-b transition-colors hover:bg-muted/50 data-[highlighted=true]:bg-[#EEEEF0] data-[state=selected]:bg-muted", r),
                    ...a
                })
            });
            d.displayName = "TableRow";
            let c = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)("th", {
                    ref: t,
                    className: (0, l.cn)("h-10 px-2 text-left align-middle font-medium uppercase text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", r),
                    ...a
                })
            });
            c.displayName = "TableHead";
            let u = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)("td", {
                    ref: t,
                    className: (0, l.cn)("px-2 py-0.5 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", r),
                    ...a
                })
            });
            u.displayName = "TableCell", a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, n.jsx)("caption", {
                    ref: t,
                    className: (0, l.cn)("mt-4 text-sm text-muted-foreground", r),
                    ...a
                })
            }).displayName = "TableCaption"
        },
        38662: function(e, t, r) {
            r.d(t, {
                ZL: function() {
                    return i
                },
                xC: function() {
                    return c
                },
                y1: function() {
                    return d
                },
                z7: function() {
                    return o
                }
            });
            var n = r(2265),
                a = r(54353);
            let l = {
                    preventDefault: !0,
                    stopPropagation: !1,
                    repeat: !1,
                    scopes: ["global"],
                    requireAuth: !1,
                    disabled: !1
                },
                s = new Set(["global"]);

            function i(e) {
                e.forEach(e => s.add(e))
            }

            function o(e) {
                e.forEach(e => {
                    "global" !== e && s.delete(e)
                })
            }

            function d(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        isSignedIn: i
                    } = (0, a.kP)(),
                    o = (0, n.useRef)(t),
                    d = (0, n.useMemo)(() => Array.isArray(e) ? e : [e], [e]),
                    c = (0, n.useMemo)(() => ({
                        ...l,
                        ...r
                    }), [r]);
                (0, n.useEffect)(() => {
                    o.current = t
                }, [t]);
                let u = (0, n.useCallback)(e => {
                    var t;
                    if (c.requireAuth && !i || c.disabled) return;
                    let r = e.target;
                    "INPUT" !== r.tagName && "TEXTAREA" !== r.tagName && "SELECT" !== r.tagName && !r.isContentEditable && (null === (t = c.scopes) || void 0 === t ? void 0 : t.some(e => s.has(e))) && d.find(t => (function(e, t) {
                        let {
                            key: r,
                            alt: n,
                            ctrl: a,
                            meta: l,
                            shift: s
                        } = function(e) {
                            let t = e.toLowerCase().split("+");
                            return {
                                key: t.pop(),
                                alt: t.includes("alt"),
                                ctrl: t.includes("ctrl") || t.includes("control"),
                                meta: t.includes("meta") || t.includes("cmd") || t.includes("command"),
                                shift: t.includes("shift")
                            }
                        }(t);
                        return (e.key.toLowerCase() === r || n && 1 === r.length && e.code.toLowerCase() === "key".concat(r)) && e.altKey === n && e.ctrlKey === a && e.metaKey === l && e.shiftKey === s
                    })(e, t)) && (c.repeat || !e.repeat) && (c.preventDefault && e.preventDefault(), c.stopPropagation && e.stopPropagation(), o.current(e))
                }, [d, c, i]);
                (0, n.useEffect)(() => {
                    var e;
                    return document.addEventListener("keydown", u, null !== (e = c.capture) && void 0 !== e && e), () => {
                        var e;
                        document.removeEventListener("keydown", u, null !== (e = c.capture) && void 0 !== e && e)
                    }
                }, [u, c.capture])
            }

            function c(e) {
                let t = (0, n.useMemo)(() => Array.isArray(e) ? e : [e], [e]);
                (0, n.useEffect)(() => (i(t), () => {
                    o(t)
                }), [t])
            }
        },
        94508: function(e, t, r) {
            r.d(t, {
                BM: function() {
                    return d
                },
                CB: function() {
                    return u
                },
                F5: function() {
                    return p
                },
                Jb: function() {
                    return o
                },
                Nm: function() {
                    return f
                },
                cn: function() {
                    return l
                },
                hL: function() {
                    return m
                },
                lV: function() {
                    return s
                },
                p6: function() {
                    return c
                },
                tS: function() {
                    return i
                },
                vR: function() {
                    return x
                }
            });
            var n = r(54365),
                a = r(71407);

            function l() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, a.m)((0, n.W)(t))
            }

            function s(e) {
                return e.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/&/g, "-and-").replace(/[^\w\-\.]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            }

            function i(e, t) {
                var r;
                if (!e) return "unknown";
                let n = e && (null === (r = e.split("?")[0].split(".").pop()) || void 0 === r ? void 0 : r.toLowerCase()) || "";
                if (["jpg", "jpeg", "png", "gif", "webp", "svg", "bmp"].includes(n)) return "image";
                if (["mp4", "webm", "ogg", "mov", "avi", "mkv"].includes(n)) return "video";
                if (["mp3", "wav", "ogg", "aac", "flac", "m4a", "wma", "mpeg"].includes(n)) return "audio";
                if ("pdf" === n) return "pdf";
                if (["doc", "docx", "ppt", "pptx", "xls", "xlsx", "txt"].includes(n)) return "file";
                if (t && t.length > 0) {
                    if (t.includes("image")) return "image";
                    if (t.includes("video")) return "video";
                    if (t.includes("audio")) return "audio";
                    if (t.includes("document")) return "file"
                }
                return "unknown"
            }

            function o(e) {
                if (!e) return null;
                let t = i(e);
                if ("image" === t || "video" === t || "audio" === t || "pdf" === t) return t;
                try {
                    let t = new URL(e).hostname.toLowerCase();
                    if (["postimg.cc", "i.imgur.com", "imgur.com", "i.redd.it", "preview.redd.it", "pbs.twimg.com", "media.giphy.com", "i.ytimg.com", "storage.googleapis.com", "files.vlm.run", "s3.amazonaws.com", "cloudinary.com", "imagekit.io", "cdn.discordapp.com", "media.discordapp.net"].some(e => t === e || t.endsWith("." + e))) {
                        if (t.includes("postimg.cc") || t.includes("imgur.com")) return "image";
                        return t.includes("storage.googleapis.com") || t.includes("files.vlm.run"), "image"
                    }
                    if (["youtube.com", "youtu.be", "vimeo.com", "dailymotion.com", "twitch.tv"].some(e => t === e || t.endsWith("." + e))) return "video"
                } catch (e) {}
                return null
            }

            function d(e) {
                if (e.name.toLowerCase().endsWith(".zip")) return !0;
                let t = e.type.toLowerCase();
                return "application/zip" === t || "application/x-zip-compressed" === t || "application/x-zip" === t
            }

            function c(e) {
                return new Date(e).toLocaleDateString(void 0, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                })
            }

            function u(e) {
                if (!e || "string" != typeof e) return !1;
                try {
                    return new URL(e), !0
                } catch (e) {
                    return !1
                }
            }

            function f(e) {
                return e ? ! function(e) {
                    if (!e || "string" != typeof e) return !1;
                    try {
                        let t = new URL(e);
                        return ["http:", "https:", "mailto:", "tel:"].includes(t.protocol)
                    } catch (t) {
                        return e.startsWith("/")
                    }
                }(e) ? "#" : e : "#"
            }

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
                if (!e || !u(e) || e.length <= t) return {
                    truncated: e,
                    isTruncated: !1
                };
                try {
                    let r = new URL(e),
                        n = r.pathname,
                        a = n.split("/").pop() || "";
                    if (n.substring(0, n.lastIndexOf("/")), r.hostname.includes("storage.googleapis.com")) {
                        let e = n.split("/").filter(Boolean);
                        if (e.length >= 2) {
                            let t = e[e.length - 1];
                            return {
                                truncated: "https://storage.../".concat(t),
                                isTruncated: !0,
                                filename: t
                            }
                        }
                    }
                    let l = Math.floor((t - 3) / 2),
                        s = t - 3 - l;
                    return {
                        truncated: e.substring(0, l) + "..." + e.substring(e.length - s),
                        isTruncated: !0,
                        filename: a
                    }
                } catch (r) {
                    return {
                        truncated: e.substring(0, t - 3) + "...",
                        isTruncated: !0
                    }
                }
            }
            let x = {
                SLASH_MENU: {
                    FLYOUT_CLOSE_DELAY: 120,
                    MENU_HEIGHT: 240,
                    CARET_LINE_OFFSET: 24
                },
                TEXTAREA: {
                    MIN_HEIGHT: 24,
                    MAX_HEIGHT: 384
                }
            };

            function p(e) {
                e.style.height = "auto";
                let t = Math.max(Math.min(e.scrollHeight, x.TEXTAREA.MAX_HEIGHT), x.TEXTAREA.MIN_HEIGHT);
                e.style.height = "".concat(t, "px")
            }
        }
    }
]);