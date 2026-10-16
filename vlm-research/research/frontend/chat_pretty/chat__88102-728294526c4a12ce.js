try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2f8daf3b-55f2-49f6-82d5-e1928181e39b", e._sentryDebugIdIdentifier = "sentry-dbid-2f8daf3b-55f2-49f6-82d5-e1928181e39b")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [88102], {
        24156: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return n
                }
            });
            let n = (0, l(79205).Z)("chevrons-up-down", [
                ["path", {
                    d: "m7 15 5 5 5-5",
                    key: "1hf1tw"
                }],
                ["path", {
                    d: "m7 9 5-5 5 5",
                    key: "sgt6xg"
                }]
            ])
        },
        3577: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return n
                }
            });
            let n = (0, l(79205).Z)("funnel", [
                ["path", {
                    d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
                    key: "sc7q7i"
                }]
            ])
        },
        99397: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return n
                }
            });
            let n = (0, l(79205).Z)("plus", [
                ["path", {
                    d: "M5 12h14",
                    key: "1ays0h"
                }],
                ["path", {
                    d: "M12 5v14",
                    key: "s699le"
                }]
            ])
        },
        49027: function(e, t, l) {
            l.d(t, {
                Dx: function() {
                    return en
                },
                VY: function() {
                    return el
                },
                aV: function() {
                    return et
                },
                dk: function() {
                    return eo
                },
                fC: function() {
                    return J
                },
                h_: function() {
                    return ee
                },
                jm: function() {
                    return K
                },
                p8: function() {
                    return R
                },
                x8: function() {
                    return er
                },
                xz: function() {
                    return Q
                }
            });
            var n = l(2265),
                o = l(6741),
                r = l(98575),
                i = l(73966),
                a = l(99255),
                u = l(80886),
                s = l(15278),
                g = l(99103),
                d = l(83832),
                c = l(71599),
                f = l(66840),
                p = l(86097),
                m = l(99157),
                v = l(5478),
                h = l(37053),
                w = l(57437),
                b = "Dialog",
                [C, R] = (0, i.b)(b),
                [S, F] = C(b),
                M = e => {
                    let {
                        __scopeDialog: t,
                        children: l,
                        open: o,
                        defaultOpen: r,
                        onOpenChange: i,
                        modal: s = !0
                    } = e, g = n.useRef(null), d = n.useRef(null), [c, f] = (0, u.T)({
                        prop: o,
                        defaultProp: null != r && r,
                        onChange: i,
                        caller: b
                    });
                    return (0, w.jsx)(S, {
                        scope: t,
                        triggerRef: g,
                        contentRef: d,
                        contentId: (0, a.M)(),
                        titleId: (0, a.M)(),
                        descriptionId: (0, a.M)(),
                        open: c,
                        onOpenChange: f,
                        onOpenToggle: n.useCallback(() => f(e => !e), [f]),
                        modal: s,
                        children: l
                    })
                };
            M.displayName = b;
            var I = "DialogTrigger",
                x = n.forwardRef((e, t) => {
                    let {
                        __scopeDialog: l,
                        ...n
                    } = e, i = F(I, l), a = (0, r.e)(t, i.triggerRef);
                    return (0, w.jsx)(f.WV.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": i.open,
                        "aria-controls": i.contentId,
                        "data-state": W(i.open),
                        ...n,
                        ref: a,
                        onClick: (0, o.Mj)(e.onClick, i.onOpenToggle)
                    })
                });
            x.displayName = I;
            var V = "DialogPortal",
                [y, P] = C(V, {
                    forceMount: void 0
                }),
                E = e => {
                    let {
                        __scopeDialog: t,
                        forceMount: l,
                        children: o,
                        container: r
                    } = e, i = F(V, t);
                    return (0, w.jsx)(y, {
                        scope: t,
                        forceMount: l,
                        children: n.Children.map(o, e => (0, w.jsx)(c.z, {
                            present: l || i.open,
                            children: (0, w.jsx)(d.h, {
                                asChild: !0,
                                container: r,
                                children: e
                            })
                        }))
                    })
                };
            E.displayName = V;
            var _ = "DialogOverlay",
                A = n.forwardRef((e, t) => {
                    let l = P(_, e.__scopeDialog),
                        {
                            forceMount: n = l.forceMount,
                            ...o
                        } = e,
                        r = F(_, e.__scopeDialog);
                    return r.modal ? (0, w.jsx)(c.z, {
                        present: n || r.open,
                        children: (0, w.jsx)(L, {
                            ...o,
                            ref: t
                        })
                    }) : null
                });
            A.displayName = _;
            var D = (0, h.Z8)("DialogOverlay.RemoveScroll"),
                L = n.forwardRef((e, t) => {
                    let {
                        __scopeDialog: l,
                        ...n
                    } = e, o = F(_, l);
                    return (0, w.jsx)(m.Z, {
                        as: D,
                        allowPinchZoom: !0,
                        shards: [o.contentRef],
                        children: (0, w.jsx)(f.WV.div, {
                            "data-state": W(o.open),
                            ...n,
                            ref: t,
                            style: {
                                pointerEvents: "auto",
                                ...n.style
                            }
                        })
                    })
                }),
                G = "DialogContent",
                H = n.forwardRef((e, t) => {
                    let l = P(G, e.__scopeDialog),
                        {
                            forceMount: n = l.forceMount,
                            ...o
                        } = e,
                        r = F(G, e.__scopeDialog);
                    return (0, w.jsx)(c.z, {
                        present: n || r.open,
                        children: r.modal ? (0, w.jsx)(z, {
                            ...o,
                            ref: t
                        }) : (0, w.jsx)(O, {
                            ...o,
                            ref: t
                        })
                    })
                });
            H.displayName = G;
            var z = n.forwardRef((e, t) => {
                    let l = F(G, e.__scopeDialog),
                        i = n.useRef(null),
                        a = (0, r.e)(t, l.contentRef, i);
                    return n.useEffect(() => {
                        let e = i.current;
                        if (e) return (0, v.Ry)(e)
                    }, []), (0, w.jsx)(k, {
                        ...e,
                        ref: a,
                        trapFocus: l.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, o.Mj)(e.onCloseAutoFocus, e => {
                            var t;
                            e.preventDefault(), null === (t = l.triggerRef.current) || void 0 === t || t.focus()
                        }),
                        onPointerDownOutside: (0, o.Mj)(e.onPointerDownOutside, e => {
                            let t = e.detail.originalEvent,
                                l = 0 === t.button && !0 === t.ctrlKey;
                            (2 === t.button || l) && e.preventDefault()
                        }),
                        onFocusOutside: (0, o.Mj)(e.onFocusOutside, e => e.preventDefault())
                    })
                }),
                O = n.forwardRef((e, t) => {
                    let l = F(G, e.__scopeDialog),
                        o = n.useRef(!1),
                        r = n.useRef(!1);
                    return (0, w.jsx)(k, {
                        ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var n, i;
                            null === (n = e.onCloseAutoFocus) || void 0 === n || n.call(e, t), t.defaultPrevented || (o.current || null === (i = l.triggerRef.current) || void 0 === i || i.focus(), t.preventDefault()), o.current = !1, r.current = !1
                        },
                        onInteractOutside: t => {
                            var n, i;
                            null === (n = e.onInteractOutside) || void 0 === n || n.call(e, t), t.defaultPrevented || (o.current = !0, "pointerdown" !== t.detail.originalEvent.type || (r.current = !0));
                            let a = t.target;
                            (null === (i = l.triggerRef.current) || void 0 === i ? void 0 : i.contains(a)) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && r.current && t.preventDefault()
                        }
                    })
                }),
                k = n.forwardRef((e, t) => {
                    let {
                        __scopeDialog: l,
                        trapFocus: o,
                        onOpenAutoFocus: i,
                        onCloseAutoFocus: a,
                        ...u
                    } = e, d = F(G, l), c = n.useRef(null), f = (0, r.e)(t, c);
                    return (0, p.EW)(), (0, w.jsxs)(w.Fragment, {
                        children: [(0, w.jsx)(g.M, {
                            asChild: !0,
                            loop: !0,
                            trapped: o,
                            onMountAutoFocus: i,
                            onUnmountAutoFocus: a,
                            children: (0, w.jsx)(s.XB, {
                                role: "dialog",
                                id: d.contentId,
                                "aria-describedby": d.descriptionId,
                                "aria-labelledby": d.titleId,
                                "data-state": W(d.open),
                                ...u,
                                ref: f,
                                onDismiss: () => d.onOpenChange(!1)
                            })
                        }), (0, w.jsxs)(w.Fragment, {
                            children: [(0, w.jsx)(Z, {
                                titleId: d.titleId
                            }), (0, w.jsx)(Y, {
                                contentRef: c,
                                descriptionId: d.descriptionId
                            })]
                        })]
                    })
                }),
                j = "DialogTitle",
                T = n.forwardRef((e, t) => {
                    let {
                        __scopeDialog: l,
                        ...n
                    } = e, o = F(j, l);
                    return (0, w.jsx)(f.WV.h2, {
                        id: o.titleId,
                        ...n,
                        ref: t
                    })
                });
            T.displayName = j;
            var B = "DialogDescription",
                N = n.forwardRef((e, t) => {
                    let {
                        __scopeDialog: l,
                        ...n
                    } = e, o = F(B, l);
                    return (0, w.jsx)(f.WV.p, {
                        id: o.descriptionId,
                        ...n,
                        ref: t
                    })
                });
            N.displayName = B;
            var q = "DialogClose",
                U = n.forwardRef((e, t) => {
                    let {
                        __scopeDialog: l,
                        ...n
                    } = e, r = F(q, l);
                    return (0, w.jsx)(f.WV.button, {
                        type: "button",
                        ...n,
                        ref: t,
                        onClick: (0, o.Mj)(e.onClick, () => r.onOpenChange(!1))
                    })
                });

            function W(e) {
                return e ? "open" : "closed"
            }
            U.displayName = q;
            var $ = "DialogTitleWarning",
                [K, X] = (0, i.k)($, {
                    contentName: G,
                    titleName: j,
                    docsSlug: "dialog"
                }),
                Z = e => {
                    let {
                        titleId: t
                    } = e, l = X($), o = "`".concat(l.contentName, "` requires a `").concat(l.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(l.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(l.docsSlug);
                    return n.useEffect(() => {
                        t && !document.getElementById(t) && console.error(o)
                    }, [o, t]), null
                },
                Y = e => {
                    let {
                        contentRef: t,
                        descriptionId: l
                    } = e, o = X("DialogDescriptionWarning"), r = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName, "}.");
                    return n.useEffect(() => {
                        var e;
                        let n = null === (e = t.current) || void 0 === e ? void 0 : e.getAttribute("aria-describedby");
                        l && n && !document.getElementById(l) && console.warn(r)
                    }, [r, t, l]), null
                },
                J = M,
                Q = x,
                ee = E,
                et = A,
                el = H,
                en = T,
                eo = N,
                er = U
        },
        71594: function(e, t, l) {
            l.d(t, {
                b7: function() {
                    return i
                },
                ie: function() {
                    return r
                }
            });
            var n = l(2265),
                o = l(24525);

            function r(e, t) {
                return e ? "function" == typeof e && (() => {
                    let t = Object.getPrototypeOf(e);
                    return t.prototype && t.prototype.isReactComponent
                })() || "function" == typeof e || "object" == typeof e && "symbol" == typeof e.$$typeof && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description) ? n.createElement(e, t) : e : null
            }

            function i(e) {
                let t = {
                        state: {},
                        onStateChange: () => {},
                        renderFallbackValue: null,
                        ...e
                    },
                    [l] = n.useState(() => ({
                        current: (0, o.W_)(t)
                    })),
                    [r, i] = n.useState(() => l.current.initialState);
                return l.current.setOptions(t => ({
                    ...t,
                    ...e,
                    state: {
                        ...r,
                        ...e.state
                    },
                    onStateChange: t => {
                        i(t), null == e.onStateChange || e.onStateChange(t)
                    }
                })), l.current
            }
        },
        24525: function(e, t, l) {
            function n(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function o(e, t) {
                return l => {
                    t.setState(t => ({
                        ...t,
                        [e]: n(l, t[e])
                    }))
                }
            }

            function r(e) {
                return e instanceof Function
            }

            function i(e, t, l) {
                let n, o = [];
                return r => {
                    let i, a;
                    l.key && l.debug && (i = Date.now());
                    let u = e(r);
                    if (!(u.length !== o.length || u.some((e, t) => o[t] !== e))) return n;
                    if (o = u, l.key && l.debug && (a = Date.now()), n = t(...u), null == l || null == l.onChange || l.onChange(n), l.key && l.debug && null != l && l.debug()) {
                        let e = Math.round((Date.now() - i) * 100) / 100,
                            t = Math.round((Date.now() - a) * 100) / 100,
                            n = t / 16,
                            o = (e, t) => {
                                for (e = String(e); e.length < t;) e = " " + e;
                                return e
                            };
                        console.info(`%c⏱ ${o(t,5)} /${o(e,5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*n,120))}deg 100% 31%);`, null == l ? void 0 : l.key)
                    }
                    return n
                }
            }

            function a(e, t, l, n) {
                return {
                    debug: () => {
                        var l;
                        return null != (l = null == e ? void 0 : e.debugAll) ? l : e[t]
                    },
                    key: !1,
                    onChange: n
                }
            }
            l.d(t, {
                G_: function() {
                    return X
                },
                JG: function() {
                    return $
                },
                W_: function() {
                    return N
                },
                o6: function() {
                    return W
                },
                sC: function() {
                    return q
                },
                tj: function() {
                    return Z
                },
                vL: function() {
                    return K
                }
            });
            let u = "debugHeaders";

            function s(e, t, l) {
                var n;
                let o = {
                    id: null != (n = l.id) ? n : t.id,
                    column: t,
                    index: l.index,
                    isPlaceholder: !!l.isPlaceholder,
                    placeholderId: l.placeholderId,
                    depth: l.depth,
                    subHeaders: [],
                    colSpan: 0,
                    rowSpan: 0,
                    headerGroup: null,
                    getLeafHeaders: () => {
                        let e = [],
                            t = l => {
                                l.subHeaders && l.subHeaders.length && l.subHeaders.map(t), e.push(l)
                            };
                        return t(o), e
                    },
                    getContext: () => ({
                        table: e,
                        header: o,
                        column: t
                    })
                };
                return e._features.forEach(t => {
                    null == t.createHeader || t.createHeader(o, e)
                }), o
            }

            function g(e, t, l, n) {
                var o, r;
                let i = 0,
                    a = function(e, t) {
                        void 0 === t && (t = 1), i = Math.max(i, t), e.filter(e => e.getIsVisible()).forEach(e => {
                            var l;
                            null != (l = e.columns) && l.length && a(e.columns, t + 1)
                        }, 0)
                    };
                a(e);
                let u = [],
                    g = (e, t) => {
                        let o = {
                                depth: t,
                                id: [n, `${t}`].filter(Boolean).join("_"),
                                headers: []
                            },
                            r = [];
                        e.forEach(e => {
                            let i;
                            let a = [...r].reverse()[0],
                                u = e.column.depth === o.depth,
                                g = !1;
                            if (u && e.column.parent ? i = e.column.parent : (i = e.column, g = !0), a && (null == a ? void 0 : a.column) === i) a.subHeaders.push(e);
                            else {
                                let o = s(l, i, {
                                    id: [n, t, i.id, null == e ? void 0 : e.id].filter(Boolean).join("_"),
                                    isPlaceholder: g,
                                    placeholderId: g ? `${r.filter(e=>e.column===i).length}` : void 0,
                                    depth: t,
                                    index: r.length
                                });
                                o.subHeaders.push(e), r.push(o)
                            }
                            o.headers.push(e), e.headerGroup = o
                        }), u.push(o), t > 0 && g(r, t - 1)
                    };
                g(t.map((e, t) => s(l, e, {
                    depth: i,
                    index: t
                })), i - 1), u.reverse();
                let d = e => e.filter(e => e.column.getIsVisible()).map(e => {
                    let t = 0,
                        l = 0,
                        n = [0];
                    return e.subHeaders && e.subHeaders.length ? (n = [], d(e.subHeaders).forEach(e => {
                        let {
                            colSpan: l,
                            rowSpan: o
                        } = e;
                        t += l, n.push(o)
                    })) : t = 1, l += Math.min(...n), e.colSpan = t, e.rowSpan = l, {
                        colSpan: t,
                        rowSpan: l
                    }
                });
                return d(null != (o = null == (r = u[0]) ? void 0 : r.headers) ? o : []), u
            }
            let d = (e, t, l, n, o, r, u) => {
                    let s = {
                        id: t,
                        index: n,
                        original: l,
                        depth: o,
                        parentId: u,
                        _valuesCache: {},
                        _uniqueValuesCache: {},
                        getValue: t => {
                            if (s._valuesCache.hasOwnProperty(t)) return s._valuesCache[t];
                            let l = e.getColumn(t);
                            if (null != l && l.accessorFn) return s._valuesCache[t] = l.accessorFn(s.original, n), s._valuesCache[t]
                        },
                        getUniqueValues: t => {
                            if (s._uniqueValuesCache.hasOwnProperty(t)) return s._uniqueValuesCache[t];
                            let l = e.getColumn(t);
                            return null != l && l.accessorFn ? (l.columnDef.getUniqueValues ? s._uniqueValuesCache[t] = l.columnDef.getUniqueValues(s.original, n) : s._uniqueValuesCache[t] = [s.getValue(t)], s._uniqueValuesCache[t]) : void 0
                        },
                        renderValue: t => {
                            var l;
                            return null != (l = s.getValue(t)) ? l : e.options.renderFallbackValue
                        },
                        subRows: null != r ? r : [],
                        getLeafRows: () => (function(e, t) {
                            let l = [],
                                n = e => {
                                    e.forEach(e => {
                                        l.push(e);
                                        let o = t(e);
                                        null != o && o.length && n(o)
                                    })
                                };
                            return n(e), l
                        })(s.subRows, e => e.subRows),
                        getParentRow: () => s.parentId ? e.getRow(s.parentId, !0) : void 0,
                        getParentRows: () => {
                            let e = [],
                                t = s;
                            for (;;) {
                                let l = t.getParentRow();
                                if (!l) break;
                                e.push(l), t = l
                            }
                            return e.reverse()
                        },
                        getAllCells: i(() => [e.getAllLeafColumns()], t => t.map(t => (function(e, t, l, n) {
                            let o = {
                                id: `${t.id}_${l.id}`,
                                row: t,
                                column: l,
                                getValue: () => t.getValue(n),
                                renderValue: () => {
                                    var t;
                                    return null != (t = o.getValue()) ? t : e.options.renderFallbackValue
                                },
                                getContext: i(() => [e, l, t, o], (e, t, l, n) => ({
                                    table: e,
                                    column: t,
                                    row: l,
                                    cell: n,
                                    getValue: n.getValue,
                                    renderValue: n.renderValue
                                }), a(e.options, "debugCells", "cell.getContext"))
                            };
                            return e._features.forEach(n => {
                                null == n.createCell || n.createCell(o, l, t, e)
                            }, {}), o
                        })(e, s, t, t.id)), a(e.options, "debugRows", "getAllCells")),
                        _getAllCellsByColumnId: i(() => [s.getAllCells()], e => e.reduce((e, t) => (e[t.column.id] = t, e), {}), a(e.options, "debugRows", "getAllCellsByColumnId"))
                    };
                    for (let t = 0; t < e._features.length; t++) {
                        let l = e._features[t];
                        null == l || null == l.createRow || l.createRow(s, e)
                    }
                    return s
                },
                c = (e, t, l) => {
                    var n, o;
                    let r = null == l || null == (n = l.toString()) ? void 0 : n.toLowerCase();
                    return !!(null == (o = e.getValue(t)) || null == (o = o.toString()) || null == (o = o.toLowerCase()) ? void 0 : o.includes(r))
                };
            c.autoRemove = e => S(e);
            let f = (e, t, l) => {
                var n;
                return !!(null == (n = e.getValue(t)) || null == (n = n.toString()) ? void 0 : n.includes(l))
            };
            f.autoRemove = e => S(e);
            let p = (e, t, l) => {
                var n;
                return (null == (n = e.getValue(t)) || null == (n = n.toString()) ? void 0 : n.toLowerCase()) === (null == l ? void 0 : l.toLowerCase())
            };
            p.autoRemove = e => S(e);
            let m = (e, t, l) => {
                var n;
                return null == (n = e.getValue(t)) ? void 0 : n.includes(l)
            };
            m.autoRemove = e => S(e);
            let v = (e, t, l) => !l.some(l => {
                var n;
                return !(null != (n = e.getValue(t)) && n.includes(l))
            });
            v.autoRemove = e => S(e) || !(null != e && e.length);
            let h = (e, t, l) => l.some(l => {
                var n;
                return null == (n = e.getValue(t)) ? void 0 : n.includes(l)
            });
            h.autoRemove = e => S(e) || !(null != e && e.length);
            let w = (e, t, l) => e.getValue(t) === l;
            w.autoRemove = e => S(e);
            let b = (e, t, l) => e.getValue(t) == l;
            b.autoRemove = e => S(e);
            let C = (e, t, l) => {
                let [n, o] = l, r = e.getValue(t);
                return r >= n && r <= o
            };
            C.resolveFilterValue = e => {
                let [t, l] = e, n = "number" != typeof t ? parseFloat(t) : t, o = "number" != typeof l ? parseFloat(l) : l, r = null === t || Number.isNaN(n) ? -1 / 0 : n, i = null === l || Number.isNaN(o) ? 1 / 0 : o;
                if (r > i) {
                    let e = r;
                    r = i, i = e
                }
                return [r, i]
            }, C.autoRemove = e => S(e) || S(e[0]) && S(e[1]);
            let R = {
                includesString: c,
                includesStringSensitive: f,
                equalsString: p,
                arrIncludes: m,
                arrIncludesAll: v,
                arrIncludesSome: h,
                equals: w,
                weakEquals: b,
                inNumberRange: C
            };

            function S(e) {
                return null == e || "" === e
            }

            function F(e, t, l) {
                return !!e && !!e.autoRemove && e.autoRemove(t, l) || void 0 === t || "string" == typeof t && !t
            }
            let M = {
                    sum: (e, t, l) => l.reduce((t, l) => {
                        let n = l.getValue(e);
                        return t + ("number" == typeof n ? n : 0)
                    }, 0),
                    min: (e, t, l) => {
                        let n;
                        return l.forEach(t => {
                            let l = t.getValue(e);
                            null != l && (n > l || void 0 === n && l >= l) && (n = l)
                        }), n
                    },
                    max: (e, t, l) => {
                        let n;
                        return l.forEach(t => {
                            let l = t.getValue(e);
                            null != l && (n < l || void 0 === n && l >= l) && (n = l)
                        }), n
                    },
                    extent: (e, t, l) => {
                        let n, o;
                        return l.forEach(t => {
                            let l = t.getValue(e);
                            null != l && (void 0 === n ? l >= l && (n = o = l) : (n > l && (n = l), o < l && (o = l)))
                        }), [n, o]
                    },
                    mean: (e, t) => {
                        let l = 0,
                            n = 0;
                        if (t.forEach(t => {
                                let o = t.getValue(e);
                                null != o && (o = +o) >= o && (++l, n += o)
                            }), l) return n / l
                    },
                    median: (e, t) => {
                        if (!t.length) return;
                        let l = t.map(t => t.getValue(e));
                        if (!(Array.isArray(l) && l.every(e => "number" == typeof e))) return;
                        if (1 === l.length) return l[0];
                        let n = Math.floor(l.length / 2),
                            o = l.sort((e, t) => e - t);
                        return l.length % 2 != 0 ? o[n] : (o[n - 1] + o[n]) / 2
                    },
                    unique: (e, t) => Array.from(new Set(t.map(t => t.getValue(e))).values()),
                    uniqueCount: (e, t) => new Set(t.map(t => t.getValue(e))).size,
                    count: (e, t) => t.length
                },
                I = () => ({
                    left: [],
                    right: []
                }),
                x = {
                    size: 150,
                    minSize: 20,
                    maxSize: Number.MAX_SAFE_INTEGER
                },
                V = () => ({
                    startOffset: null,
                    startSize: null,
                    deltaOffset: null,
                    deltaPercentage: null,
                    isResizingColumn: !1,
                    columnSizingStart: []
                }),
                y = null;

            function P(e) {
                return "touchstart" === e.type
            }

            function E(e, t) {
                return t ? "center" === t ? e.getCenterVisibleLeafColumns() : "left" === t ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns()
            }
            let _ = () => ({
                    pageIndex: 0,
                    pageSize: 10
                }),
                A = () => ({
                    top: [],
                    bottom: []
                }),
                D = (e, t, l, n, o) => {
                    var r;
                    let i = o.getRow(t, !0);
                    l ? (i.getCanMultiSelect() || Object.keys(e).forEach(t => delete e[t]), i.getCanSelect() && (e[t] = !0)) : delete e[t], n && null != (r = i.subRows) && r.length && i.getCanSelectSubRows() && i.subRows.forEach(t => D(e, t.id, l, n, o))
                };

            function L(e, t) {
                let l = e.getState().rowSelection,
                    n = [],
                    o = {},
                    r = function(e, t) {
                        return e.map(e => {
                            var t;
                            let i = G(e, l);
                            if (i && (n.push(e), o[e.id] = e), null != (t = e.subRows) && t.length && (e = {
                                    ...e,
                                    subRows: r(e.subRows)
                                }), i) return e
                        }).filter(Boolean)
                    };
                return {
                    rows: r(t.rows),
                    flatRows: n,
                    rowsById: o
                }
            }

            function G(e, t) {
                var l;
                return null != (l = t[e.id]) && l
            }

            function H(e, t, l) {
                var n;
                if (!(null != (n = e.subRows) && n.length)) return !1;
                let o = !0,
                    r = !1;
                return e.subRows.forEach(e => {
                    if ((!r || o) && (e.getCanSelect() && (G(e, t) ? r = !0 : o = !1), e.subRows && e.subRows.length)) {
                        let l = H(e, t);
                        "all" === l ? r = !0 : ("some" === l && (r = !0), o = !1)
                    }
                }), o ? "all" : !!r && "some"
            }
            let z = /([0-9]+)/gm;

            function O(e, t) {
                return e === t ? 0 : e > t ? 1 : -1
            }

            function k(e) {
                return "number" == typeof e ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : "string" == typeof e ? e : ""
            }

            function j(e, t) {
                let l = e.split(z).filter(Boolean),
                    n = t.split(z).filter(Boolean);
                for (; l.length && n.length;) {
                    let e = l.shift(),
                        t = n.shift(),
                        o = parseInt(e, 10),
                        r = parseInt(t, 10),
                        i = [o, r].sort();
                    if (isNaN(i[0])) {
                        if (e > t) return 1;
                        if (t > e) return -1;
                        continue
                    }
                    if (isNaN(i[1])) return isNaN(o) ? -1 : 1;
                    if (o > r) return 1;
                    if (r > o) return -1
                }
                return l.length - n.length
            }
            let T = {
                    alphanumeric: (e, t, l) => j(k(e.getValue(l)).toLowerCase(), k(t.getValue(l)).toLowerCase()),
                    alphanumericCaseSensitive: (e, t, l) => j(k(e.getValue(l)), k(t.getValue(l))),
                    text: (e, t, l) => O(k(e.getValue(l)).toLowerCase(), k(t.getValue(l)).toLowerCase()),
                    textCaseSensitive: (e, t, l) => O(k(e.getValue(l)), k(t.getValue(l))),
                    datetime: (e, t, l) => {
                        let n = e.getValue(l),
                            o = t.getValue(l);
                        return n > o ? 1 : n < o ? -1 : 0
                    },
                    basic: (e, t, l) => O(e.getValue(l), t.getValue(l))
                },
                B = [{
                    createTable: e => {
                        e.getHeaderGroups = i(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, l, n, o) => {
                            var r, i;
                            let a = null != (r = null == n ? void 0 : n.map(e => l.find(t => t.id === e)).filter(Boolean)) ? r : [],
                                u = null != (i = null == o ? void 0 : o.map(e => l.find(t => t.id === e)).filter(Boolean)) ? i : [];
                            return g(t, [...a, ...l.filter(e => !(null != n && n.includes(e.id)) && !(null != o && o.includes(e.id))), ...u], e)
                        }, a(e.options, u, "getHeaderGroups")), e.getCenterHeaderGroups = i(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, l, n, o) => g(t, l = l.filter(e => !(null != n && n.includes(e.id)) && !(null != o && o.includes(e.id))), e, "center"), a(e.options, u, "getCenterHeaderGroups")), e.getLeftHeaderGroups = i(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, l, n) => {
                            var o;
                            return g(t, null != (o = null == n ? void 0 : n.map(e => l.find(t => t.id === e)).filter(Boolean)) ? o : [], e, "left")
                        }, a(e.options, u, "getLeftHeaderGroups")), e.getRightHeaderGroups = i(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, l, n) => {
                            var o;
                            return g(t, null != (o = null == n ? void 0 : n.map(e => l.find(t => t.id === e)).filter(Boolean)) ? o : [], e, "right")
                        }, a(e.options, u, "getRightHeaderGroups")), e.getFooterGroups = i(() => [e.getHeaderGroups()], e => [...e].reverse(), a(e.options, u, "getFooterGroups")), e.getLeftFooterGroups = i(() => [e.getLeftHeaderGroups()], e => [...e].reverse(), a(e.options, u, "getLeftFooterGroups")), e.getCenterFooterGroups = i(() => [e.getCenterHeaderGroups()], e => [...e].reverse(), a(e.options, u, "getCenterFooterGroups")), e.getRightFooterGroups = i(() => [e.getRightHeaderGroups()], e => [...e].reverse(), a(e.options, u, "getRightFooterGroups")), e.getFlatHeaders = i(() => [e.getHeaderGroups()], e => e.map(e => e.headers).flat(), a(e.options, u, "getFlatHeaders")), e.getLeftFlatHeaders = i(() => [e.getLeftHeaderGroups()], e => e.map(e => e.headers).flat(), a(e.options, u, "getLeftFlatHeaders")), e.getCenterFlatHeaders = i(() => [e.getCenterHeaderGroups()], e => e.map(e => e.headers).flat(), a(e.options, u, "getCenterFlatHeaders")), e.getRightFlatHeaders = i(() => [e.getRightHeaderGroups()], e => e.map(e => e.headers).flat(), a(e.options, u, "getRightFlatHeaders")), e.getCenterLeafHeaders = i(() => [e.getCenterFlatHeaders()], e => e.filter(e => {
                            var t;
                            return !(null != (t = e.subHeaders) && t.length)
                        }), a(e.options, u, "getCenterLeafHeaders")), e.getLeftLeafHeaders = i(() => [e.getLeftFlatHeaders()], e => e.filter(e => {
                            var t;
                            return !(null != (t = e.subHeaders) && t.length)
                        }), a(e.options, u, "getLeftLeafHeaders")), e.getRightLeafHeaders = i(() => [e.getRightFlatHeaders()], e => e.filter(e => {
                            var t;
                            return !(null != (t = e.subHeaders) && t.length)
                        }), a(e.options, u, "getRightLeafHeaders")), e.getLeafHeaders = i(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (e, t, l) => {
                            var n, o, r, i, a, u;
                            return [...null != (n = null == (o = e[0]) ? void 0 : o.headers) ? n : [], ...null != (r = null == (i = t[0]) ? void 0 : i.headers) ? r : [], ...null != (a = null == (u = l[0]) ? void 0 : u.headers) ? a : []].map(e => e.getLeafHeaders()).flat()
                        }, a(e.options, u, "getLeafHeaders"))
                    }
                }, {
                    getInitialState: e => ({
                        columnVisibility: {},
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        onColumnVisibilityChange: o("columnVisibility", e)
                    }),
                    createColumn: (e, t) => {
                        e.toggleVisibility = l => {
                            e.getCanHide() && t.setColumnVisibility(t => ({
                                ...t,
                                [e.id]: null != l ? l : !e.getIsVisible()
                            }))
                        }, e.getIsVisible = () => {
                            var l, n;
                            let o = e.columns;
                            return null == (l = o.length ? o.some(e => e.getIsVisible()) : null == (n = t.getState().columnVisibility) ? void 0 : n[e.id]) || l
                        }, e.getCanHide = () => {
                            var l, n;
                            return (null == (l = e.columnDef.enableHiding) || l) && (null == (n = t.options.enableHiding) || n)
                        }, e.getToggleVisibilityHandler = () => t => {
                            null == e.toggleVisibility || e.toggleVisibility(t.target.checked)
                        }
                    },
                    createRow: (e, t) => {
                        e._getAllVisibleCells = i(() => [e.getAllCells(), t.getState().columnVisibility], e => e.filter(e => e.column.getIsVisible()), a(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = i(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (e, t, l) => [...e, ...t, ...l], a(t.options, "debugRows", "getVisibleCells"))
                    },
                    createTable: e => {
                        let t = (t, l) => i(() => [l(), l().filter(e => e.getIsVisible()).map(e => e.id).join("_")], e => e.filter(e => null == e.getIsVisible ? void 0 : e.getIsVisible()), a(e.options, "debugColumns", t));
                        e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = t => null == e.options.onColumnVisibilityChange ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = t => {
                            var l;
                            e.setColumnVisibility(t ? {} : null != (l = e.initialState.columnVisibility) ? l : {})
                        }, e.toggleAllColumnsVisible = t => {
                            var l;
                            t = null != (l = t) ? l : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((e, l) => ({
                                ...e,
                                [l.id]: t || !(null != l.getCanHide && l.getCanHide())
                            }), {}))
                        }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some(e => !(null != e.getIsVisible && e.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some(e => null == e.getIsVisible ? void 0 : e.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => t => {
                            var l;
                            e.toggleAllColumnsVisible(null == (l = t.target) ? void 0 : l.checked)
                        }
                    }
                }, {
                    getInitialState: e => ({
                        columnOrder: [],
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        onColumnOrderChange: o("columnOrder", e)
                    }),
                    createColumn: (e, t) => {
                        e.getIndex = i(e => [E(t, e)], t => t.findIndex(t => t.id === e.id), a(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = l => {
                            var n;
                            return (null == (n = E(t, l)[0]) ? void 0 : n.id) === e.id
                        }, e.getIsLastColumn = l => {
                            var n;
                            let o = E(t, l);
                            return (null == (n = o[o.length - 1]) ? void 0 : n.id) === e.id
                        }
                    },
                    createTable: e => {
                        e.setColumnOrder = t => null == e.options.onColumnOrderChange ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = t => {
                            var l;
                            e.setColumnOrder(t ? [] : null != (l = e.initialState.columnOrder) ? l : [])
                        }, e._getOrderColumnsFn = i(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (e, t, l) => n => {
                            let o = [];
                            if (null != e && e.length) {
                                let t = [...e],
                                    l = [...n];
                                for (; l.length && t.length;) {
                                    let e = t.shift(),
                                        n = l.findIndex(t => t.id === e);
                                    n > -1 && o.push(l.splice(n, 1)[0])
                                }
                                o = [...o, ...l]
                            } else o = n;
                            return function(e, t, l) {
                                if (!(null != t && t.length) || !l) return e;
                                let n = e.filter(e => !t.includes(e.id));
                                return "remove" === l ? n : [...t.map(t => e.find(e => e.id === t)).filter(Boolean), ...n]
                            }(o, t, l)
                        }, a(e.options, "debugTable", "_getOrderColumnsFn"))
                    }
                }, {
                    getInitialState: e => ({
                        columnPinning: I(),
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        onColumnPinningChange: o("columnPinning", e)
                    }),
                    createColumn: (e, t) => {
                        e.pin = l => {
                            let n = e.getLeafColumns().map(e => e.id).filter(Boolean);
                            t.setColumnPinning(e => {
                                var t, o, r, i, a, u;
                                return "right" === l ? {
                                    left: (null != (r = null == e ? void 0 : e.left) ? r : []).filter(e => !(null != n && n.includes(e))),
                                    right: [...(null != (i = null == e ? void 0 : e.right) ? i : []).filter(e => !(null != n && n.includes(e))), ...n]
                                } : "left" === l ? {
                                    left: [...(null != (a = null == e ? void 0 : e.left) ? a : []).filter(e => !(null != n && n.includes(e))), ...n],
                                    right: (null != (u = null == e ? void 0 : e.right) ? u : []).filter(e => !(null != n && n.includes(e)))
                                } : {
                                    left: (null != (t = null == e ? void 0 : e.left) ? t : []).filter(e => !(null != n && n.includes(e))),
                                    right: (null != (o = null == e ? void 0 : e.right) ? o : []).filter(e => !(null != n && n.includes(e)))
                                }
                            })
                        }, e.getCanPin = () => e.getLeafColumns().some(e => {
                            var l, n, o;
                            return (null == (l = e.columnDef.enablePinning) || l) && (null == (n = null != (o = t.options.enableColumnPinning) ? o : t.options.enablePinning) || n)
                        }), e.getIsPinned = () => {
                            let l = e.getLeafColumns().map(e => e.id),
                                {
                                    left: n,
                                    right: o
                                } = t.getState().columnPinning,
                                r = l.some(e => null == n ? void 0 : n.includes(e)),
                                i = l.some(e => null == o ? void 0 : o.includes(e));
                            return r ? "left" : !!i && "right"
                        }, e.getPinnedIndex = () => {
                            var l, n;
                            let o = e.getIsPinned();
                            return o ? null != (l = null == (n = t.getState().columnPinning) || null == (n = n[o]) ? void 0 : n.indexOf(e.id)) ? l : -1 : 0
                        }
                    },
                    createRow: (e, t) => {
                        e.getCenterVisibleCells = i(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (e, t, l) => {
                            let n = [...null != t ? t : [], ...null != l ? l : []];
                            return e.filter(e => !n.includes(e.column.id))
                        }, a(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = i(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (e, t) => (null != t ? t : []).map(t => e.find(e => e.column.id === t)).filter(Boolean).map(e => ({
                            ...e,
                            position: "left"
                        })), a(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = i(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (e, t) => (null != t ? t : []).map(t => e.find(e => e.column.id === t)).filter(Boolean).map(e => ({
                            ...e,
                            position: "right"
                        })), a(t.options, "debugRows", "getRightVisibleCells"))
                    },
                    createTable: e => {
                        e.setColumnPinning = t => null == e.options.onColumnPinningChange ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = t => {
                            var l, n;
                            return e.setColumnPinning(t ? I() : null != (l = null == (n = e.initialState) ? void 0 : n.columnPinning) ? l : I())
                        }, e.getIsSomeColumnsPinned = t => {
                            var l, n, o;
                            let r = e.getState().columnPinning;
                            return t ? !!(null == (l = r[t]) ? void 0 : l.length) : !!((null == (n = r.left) ? void 0 : n.length) || (null == (o = r.right) ? void 0 : o.length))
                        }, e.getLeftLeafColumns = i(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (e, t) => (null != t ? t : []).map(t => e.find(e => e.id === t)).filter(Boolean), a(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = i(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (e, t) => (null != t ? t : []).map(t => e.find(e => e.id === t)).filter(Boolean), a(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = i(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (e, t, l) => {
                            let n = [...null != t ? t : [], ...null != l ? l : []];
                            return e.filter(e => !n.includes(e.id))
                        }, a(e.options, "debugColumns", "getCenterLeafColumns"))
                    }
                }, {
                    createColumn: (e, t) => {
                        e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : new Map, e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
                            if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues()
                        }
                    }
                }, {
                    getDefaultColumnDef: () => ({
                        filterFn: "auto"
                    }),
                    getInitialState: e => ({
                        columnFilters: [],
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        onColumnFiltersChange: o("columnFilters", e),
                        filterFromLeafRows: !1,
                        maxLeafRowFilterDepth: 100
                    }),
                    createColumn: (e, t) => {
                        e.getAutoFilterFn = () => {
                            let l = t.getCoreRowModel().flatRows[0],
                                n = null == l ? void 0 : l.getValue(e.id);
                            return "string" == typeof n ? R.includesString : "number" == typeof n ? R.inNumberRange : "boolean" == typeof n || null !== n && "object" == typeof n ? R.equals : Array.isArray(n) ? R.arrIncludes : R.weakEquals
                        }, e.getFilterFn = () => {
                            var l, n;
                            return r(e.columnDef.filterFn) ? e.columnDef.filterFn : "auto" === e.columnDef.filterFn ? e.getAutoFilterFn() : null != (l = null == (n = t.options.filterFns) ? void 0 : n[e.columnDef.filterFn]) ? l : R[e.columnDef.filterFn]
                        }, e.getCanFilter = () => {
                            var l, n, o;
                            return (null == (l = e.columnDef.enableColumnFilter) || l) && (null == (n = t.options.enableColumnFilters) || n) && (null == (o = t.options.enableFilters) || o) && !!e.accessorFn
                        }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
                            var l;
                            return null == (l = t.getState().columnFilters) || null == (l = l.find(t => t.id === e.id)) ? void 0 : l.value
                        }, e.getFilterIndex = () => {
                            var l, n;
                            return null != (l = null == (n = t.getState().columnFilters) ? void 0 : n.findIndex(t => t.id === e.id)) ? l : -1
                        }, e.setFilterValue = l => {
                            t.setColumnFilters(t => {
                                var o, r;
                                let i = e.getFilterFn(),
                                    a = null == t ? void 0 : t.find(t => t.id === e.id),
                                    u = n(l, a ? a.value : void 0);
                                if (F(i, u, e)) return null != (o = null == t ? void 0 : t.filter(t => t.id !== e.id)) ? o : [];
                                let s = {
                                    id: e.id,
                                    value: u
                                };
                                return a ? null != (r = null == t ? void 0 : t.map(t => t.id === e.id ? s : t)) ? r : [] : null != t && t.length ? [...t, s] : [s]
                            })
                        }
                    },
                    createRow: (e, t) => {
                        e.columnFilters = {}, e.columnFiltersMeta = {}
                    },
                    createTable: e => {
                        e.setColumnFilters = t => {
                            let l = e.getAllLeafColumns();
                            null == e.options.onColumnFiltersChange || e.options.onColumnFiltersChange(e => {
                                var o;
                                return null == (o = n(t, e)) ? void 0 : o.filter(e => {
                                    let t = l.find(t => t.id === e.id);
                                    return !(t && F(t.getFilterFn(), e.value, t))
                                })
                            })
                        }, e.resetColumnFilters = t => {
                            var l, n;
                            e.setColumnFilters(t ? [] : null != (l = null == (n = e.initialState) ? void 0 : n.columnFilters) ? l : [])
                        }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel) ? e.getPreFilteredRowModel() : e._getFilteredRowModel()
                    }
                }, {
                    createTable: e => {
                        e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : new Map, e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
                            if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues()
                        }
                    }
                }, {
                    getInitialState: e => ({
                        globalFilter: void 0,
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        onGlobalFilterChange: o("globalFilter", e),
                        globalFilterFn: "auto",
                        getColumnCanGlobalFilter: t => {
                            var l;
                            let n = null == (l = e.getCoreRowModel().flatRows[0]) || null == (l = l._getAllCellsByColumnId()[t.id]) ? void 0 : l.getValue();
                            return "string" == typeof n || "number" == typeof n
                        }
                    }),
                    createColumn: (e, t) => {
                        e.getCanGlobalFilter = () => {
                            var l, n, o, r;
                            return (null == (l = e.columnDef.enableGlobalFilter) || l) && (null == (n = t.options.enableGlobalFilter) || n) && (null == (o = t.options.enableFilters) || o) && (null == (r = null == t.options.getColumnCanGlobalFilter ? void 0 : t.options.getColumnCanGlobalFilter(e)) || r) && !!e.accessorFn
                        }
                    },
                    createTable: e => {
                        e.getGlobalAutoFilterFn = () => R.includesString, e.getGlobalFilterFn = () => {
                            var t, l;
                            let {
                                globalFilterFn: n
                            } = e.options;
                            return r(n) ? n : "auto" === n ? e.getGlobalAutoFilterFn() : null != (t = null == (l = e.options.filterFns) ? void 0 : l[n]) ? t : R[n]
                        }, e.setGlobalFilter = t => {
                            null == e.options.onGlobalFilterChange || e.options.onGlobalFilterChange(t)
                        }, e.resetGlobalFilter = t => {
                            e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter)
                        }
                    }
                }, {
                    getInitialState: e => ({
                        sorting: [],
                        ...e
                    }),
                    getDefaultColumnDef: () => ({
                        sortingFn: "auto",
                        sortUndefined: 1
                    }),
                    getDefaultOptions: e => ({
                        onSortingChange: o("sorting", e),
                        isMultiSortEvent: e => e.shiftKey
                    }),
                    createColumn: (e, t) => {
                        e.getAutoSortingFn = () => {
                            let l = t.getFilteredRowModel().flatRows.slice(10),
                                n = !1;
                            for (let t of l) {
                                let l = null == t ? void 0 : t.getValue(e.id);
                                if ("[object Date]" === Object.prototype.toString.call(l)) return T.datetime;
                                if ("string" == typeof l && (n = !0, l.split(z).length > 1)) return T.alphanumeric
                            }
                            return n ? T.text : T.basic
                        }, e.getAutoSortDir = () => {
                            let l = t.getFilteredRowModel().flatRows[0];
                            return "string" == typeof(null == l ? void 0 : l.getValue(e.id)) ? "asc" : "desc"
                        }, e.getSortingFn = () => {
                            var l, n;
                            if (!e) throw Error();
                            return r(e.columnDef.sortingFn) ? e.columnDef.sortingFn : "auto" === e.columnDef.sortingFn ? e.getAutoSortingFn() : null != (l = null == (n = t.options.sortingFns) ? void 0 : n[e.columnDef.sortingFn]) ? l : T[e.columnDef.sortingFn]
                        }, e.toggleSorting = (l, n) => {
                            let o = e.getNextSortingOrder(),
                                r = null != l;
                            t.setSorting(i => {
                                let a;
                                let u = null == i ? void 0 : i.find(t => t.id === e.id),
                                    s = null == i ? void 0 : i.findIndex(t => t.id === e.id),
                                    g = [],
                                    d = r ? l : "desc" === o;
                                if ("toggle" != (a = null != i && i.length && e.getCanMultiSort() && n ? u ? "toggle" : "add" : null != i && i.length && s !== i.length - 1 ? "replace" : u ? "toggle" : "replace") || r || o || (a = "remove"), "add" === a) {
                                    var c;
                                    (g = [...i, {
                                        id: e.id,
                                        desc: d
                                    }]).splice(0, g.length - (null != (c = t.options.maxMultiSortColCount) ? c : Number.MAX_SAFE_INTEGER))
                                } else g = "toggle" === a ? i.map(t => t.id === e.id ? {
                                    ...t,
                                    desc: d
                                } : t) : "remove" === a ? i.filter(t => t.id !== e.id) : [{
                                    id: e.id,
                                    desc: d
                                }];
                                return g
                            })
                        }, e.getFirstSortDir = () => {
                            var l, n;
                            return (null != (l = null != (n = e.columnDef.sortDescFirst) ? n : t.options.sortDescFirst) ? l : "desc" === e.getAutoSortDir()) ? "desc" : "asc"
                        }, e.getNextSortingOrder = l => {
                            var n, o;
                            let r = e.getFirstSortDir(),
                                i = e.getIsSorted();
                            return i ? (i === r || null != (n = t.options.enableSortingRemoval) && !n || !!l && null != (o = t.options.enableMultiRemove) && !o) && ("desc" === i ? "asc" : "desc") : r
                        }, e.getCanSort = () => {
                            var l, n;
                            return (null == (l = e.columnDef.enableSorting) || l) && (null == (n = t.options.enableSorting) || n) && !!e.accessorFn
                        }, e.getCanMultiSort = () => {
                            var l, n;
                            return null != (l = null != (n = e.columnDef.enableMultiSort) ? n : t.options.enableMultiSort) ? l : !!e.accessorFn
                        }, e.getIsSorted = () => {
                            var l;
                            let n = null == (l = t.getState().sorting) ? void 0 : l.find(t => t.id === e.id);
                            return !!n && (n.desc ? "desc" : "asc")
                        }, e.getSortIndex = () => {
                            var l, n;
                            return null != (l = null == (n = t.getState().sorting) ? void 0 : n.findIndex(t => t.id === e.id)) ? l : -1
                        }, e.clearSorting = () => {
                            t.setSorting(t => null != t && t.length ? t.filter(t => t.id !== e.id) : [])
                        }, e.getToggleSortingHandler = () => {
                            let l = e.getCanSort();
                            return n => {
                                l && (null == n.persist || n.persist(), null == e.toggleSorting || e.toggleSorting(void 0, !!e.getCanMultiSort() && (null == t.options.isMultiSortEvent ? void 0 : t.options.isMultiSortEvent(n))))
                            }
                        }
                    },
                    createTable: e => {
                        e.setSorting = t => null == e.options.onSortingChange ? void 0 : e.options.onSortingChange(t), e.resetSorting = t => {
                            var l, n;
                            e.setSorting(t ? [] : null != (l = null == (n = e.initialState) ? void 0 : n.sorting) ? l : [])
                        }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel) ? e.getPreSortedRowModel() : e._getSortedRowModel()
                    }
                }, {
                    getDefaultColumnDef: () => ({
                        aggregatedCell: e => {
                            var t, l;
                            return null != (t = null == (l = e.getValue()) || null == l.toString ? void 0 : l.toString()) ? t : null
                        },
                        aggregationFn: "auto"
                    }),
                    getInitialState: e => ({
                        grouping: [],
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        onGroupingChange: o("grouping", e),
                        groupedColumnMode: "reorder"
                    }),
                    createColumn: (e, t) => {
                        e.toggleGrouping = () => {
                            t.setGrouping(t => null != t && t.includes(e.id) ? t.filter(t => t !== e.id) : [...null != t ? t : [], e.id])
                        }, e.getCanGroup = () => {
                            var l, n;
                            return (null == (l = e.columnDef.enableGrouping) || l) && (null == (n = t.options.enableGrouping) || n) && (!!e.accessorFn || !!e.columnDef.getGroupingValue)
                        }, e.getIsGrouped = () => {
                            var l;
                            return null == (l = t.getState().grouping) ? void 0 : l.includes(e.id)
                        }, e.getGroupedIndex = () => {
                            var l;
                            return null == (l = t.getState().grouping) ? void 0 : l.indexOf(e.id)
                        }, e.getToggleGroupingHandler = () => {
                            let t = e.getCanGroup();
                            return () => {
                                t && e.toggleGrouping()
                            }
                        }, e.getAutoAggregationFn = () => {
                            let l = t.getCoreRowModel().flatRows[0],
                                n = null == l ? void 0 : l.getValue(e.id);
                            return "number" == typeof n ? M.sum : "[object Date]" === Object.prototype.toString.call(n) ? M.extent : void 0
                        }, e.getAggregationFn = () => {
                            var l, n;
                            if (!e) throw Error();
                            return r(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : "auto" === e.columnDef.aggregationFn ? e.getAutoAggregationFn() : null != (l = null == (n = t.options.aggregationFns) ? void 0 : n[e.columnDef.aggregationFn]) ? l : M[e.columnDef.aggregationFn]
                        }
                    },
                    createTable: e => {
                        e.setGrouping = t => null == e.options.onGroupingChange ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = t => {
                            var l, n;
                            e.setGrouping(t ? [] : null != (l = null == (n = e.initialState) ? void 0 : n.grouping) ? l : [])
                        }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel) ? e.getPreGroupedRowModel() : e._getGroupedRowModel()
                    },
                    createRow: (e, t) => {
                        e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = l => {
                            if (e._groupingValuesCache.hasOwnProperty(l)) return e._groupingValuesCache[l];
                            let n = t.getColumn(l);
                            return null != n && n.columnDef.getGroupingValue ? (e._groupingValuesCache[l] = n.columnDef.getGroupingValue(e.original), e._groupingValuesCache[l]) : e.getValue(l)
                        }, e._groupingValuesCache = {}
                    },
                    createCell: (e, t, l, n) => {
                        e.getIsGrouped = () => t.getIsGrouped() && t.id === l.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
                            var t;
                            return !e.getIsGrouped() && !e.getIsPlaceholder() && !!(null != (t = l.subRows) && t.length)
                        }
                    }
                }, {
                    getInitialState: e => ({
                        expanded: {},
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        onExpandedChange: o("expanded", e),
                        paginateExpandedRows: !0
                    }),
                    createTable: e => {
                        let t = !1,
                            l = !1;
                        e._autoResetExpanded = () => {
                            var n, o;
                            if (!t) {
                                e._queue(() => {
                                    t = !0
                                });
                                return
                            }
                            if (null != (n = null != (o = e.options.autoResetAll) ? o : e.options.autoResetExpanded) ? n : !e.options.manualExpanding) {
                                if (l) return;
                                l = !0, e._queue(() => {
                                    e.resetExpanded(), l = !1
                                })
                            }
                        }, e.setExpanded = t => null == e.options.onExpandedChange ? void 0 : e.options.onExpandedChange(t), e.toggleAllRowsExpanded = t => {
                            (null != t ? t : !e.getIsAllRowsExpanded()) ? e.setExpanded(!0): e.setExpanded({})
                        }, e.resetExpanded = t => {
                            var l, n;
                            e.setExpanded(t ? {} : null != (l = null == (n = e.initialState) ? void 0 : n.expanded) ? l : {})
                        }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some(e => e.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => t => {
                            null == t.persist || t.persist(), e.toggleAllRowsExpanded()
                        }, e.getIsSomeRowsExpanded = () => {
                            let t = e.getState().expanded;
                            return !0 === t || Object.values(t).some(Boolean)
                        }, e.getIsAllRowsExpanded = () => {
                            let t = e.getState().expanded;
                            return "boolean" == typeof t ? !0 === t : !(!Object.keys(t).length || e.getRowModel().flatRows.some(e => !e.getIsExpanded()))
                        }, e.getExpandedDepth = () => {
                            let t = 0;
                            return (!0 === e.getState().expanded ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach(e => {
                                let l = e.split(".");
                                t = Math.max(t, l.length)
                            }), t
                        }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel) ? e.getPreExpandedRowModel() : e._getExpandedRowModel()
                    },
                    createRow: (e, t) => {
                        e.toggleExpanded = l => {
                            t.setExpanded(n => {
                                var o;
                                let r = !0 === n || !!(null != n && n[e.id]),
                                    i = {};
                                if (!0 === n ? Object.keys(t.getRowModel().rowsById).forEach(e => {
                                        i[e] = !0
                                    }) : i = n, l = null != (o = l) ? o : !r, !r && l) return {
                                    ...i,
                                    [e.id]: !0
                                };
                                if (r && !l) {
                                    let {
                                        [e.id]: t, ...l
                                    } = i;
                                    return l
                                }
                                return n
                            })
                        }, e.getIsExpanded = () => {
                            var l;
                            let n = t.getState().expanded;
                            return !!(null != (l = null == t.options.getIsRowExpanded ? void 0 : t.options.getIsRowExpanded(e)) ? l : !0 === n || (null == n ? void 0 : n[e.id]))
                        }, e.getCanExpand = () => {
                            var l, n, o;
                            return null != (l = null == t.options.getRowCanExpand ? void 0 : t.options.getRowCanExpand(e)) ? l : (null == (n = t.options.enableExpanding) || n) && !!(null != (o = e.subRows) && o.length)
                        }, e.getIsAllParentsExpanded = () => {
                            let l = !0,
                                n = e;
                            for (; l && n.parentId;) l = (n = t.getRow(n.parentId, !0)).getIsExpanded();
                            return l
                        }, e.getToggleExpandedHandler = () => {
                            let t = e.getCanExpand();
                            return () => {
                                t && e.toggleExpanded()
                            }
                        }
                    }
                }, {
                    getInitialState: e => ({
                        ...e,
                        pagination: {
                            ..._(),
                            ...null == e ? void 0 : e.pagination
                        }
                    }),
                    getDefaultOptions: e => ({
                        onPaginationChange: o("pagination", e)
                    }),
                    createTable: e => {
                        let t = !1,
                            l = !1;
                        e._autoResetPageIndex = () => {
                            var n, o;
                            if (!t) {
                                e._queue(() => {
                                    t = !0
                                });
                                return
                            }
                            if (null != (n = null != (o = e.options.autoResetAll) ? o : e.options.autoResetPageIndex) ? n : !e.options.manualPagination) {
                                if (l) return;
                                l = !0, e._queue(() => {
                                    e.resetPageIndex(), l = !1
                                })
                            }
                        }, e.setPagination = t => null == e.options.onPaginationChange ? void 0 : e.options.onPaginationChange(e => n(t, e)), e.resetPagination = t => {
                            var l;
                            e.setPagination(t ? _() : null != (l = e.initialState.pagination) ? l : _())
                        }, e.setPageIndex = t => {
                            e.setPagination(l => {
                                let o = n(t, l.pageIndex);
                                return o = Math.max(0, Math.min(o, void 0 === e.options.pageCount || -1 === e.options.pageCount ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1)), {
                                    ...l,
                                    pageIndex: o
                                }
                            })
                        }, e.resetPageIndex = t => {
                            var l, n;
                            e.setPageIndex(t ? 0 : null != (l = null == (n = e.initialState) || null == (n = n.pagination) ? void 0 : n.pageIndex) ? l : 0)
                        }, e.resetPageSize = t => {
                            var l, n;
                            e.setPageSize(t ? 10 : null != (l = null == (n = e.initialState) || null == (n = n.pagination) ? void 0 : n.pageSize) ? l : 10)
                        }, e.setPageSize = t => {
                            e.setPagination(e => {
                                let l = Math.max(1, n(t, e.pageSize)),
                                    o = e.pageSize * e.pageIndex;
                                return {
                                    ...e,
                                    pageIndex: Math.floor(o / l),
                                    pageSize: l
                                }
                            })
                        }, e.setPageCount = t => e.setPagination(l => {
                            var o;
                            let r = n(t, null != (o = e.options.pageCount) ? o : -1);
                            return "number" == typeof r && (r = Math.max(-1, r)), {
                                ...l,
                                pageCount: r
                            }
                        }), e.getPageOptions = i(() => [e.getPageCount()], e => {
                            let t = [];
                            return e && e > 0 && (t = [...Array(e)].fill(null).map((e, t) => t)), t
                        }, a(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
                            let {
                                pageIndex: t
                            } = e.getState().pagination, l = e.getPageCount();
                            return -1 === l || 0 !== l && t < l - 1
                        }, e.previousPage = () => e.setPageIndex(e => e - 1), e.nextPage = () => e.setPageIndex(e => e + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel) ? e.getPrePaginationRowModel() : e._getPaginationRowModel(), e.getPageCount = () => {
                            var t;
                            return null != (t = e.options.pageCount) ? t : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize)
                        }, e.getRowCount = () => {
                            var t;
                            return null != (t = e.options.rowCount) ? t : e.getPrePaginationRowModel().rows.length
                        }
                    }
                }, {
                    getInitialState: e => ({
                        rowPinning: A(),
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        onRowPinningChange: o("rowPinning", e)
                    }),
                    createRow: (e, t) => {
                        e.pin = (l, n, o) => {
                            let r = n ? e.getLeafRows().map(e => {
                                    let {
                                        id: t
                                    } = e;
                                    return t
                                }) : [],
                                i = new Set([...o ? e.getParentRows().map(e => {
                                    let {
                                        id: t
                                    } = e;
                                    return t
                                }) : [], e.id, ...r]);
                            t.setRowPinning(e => {
                                var t, n, o, r, a, u;
                                return "bottom" === l ? {
                                    top: (null != (o = null == e ? void 0 : e.top) ? o : []).filter(e => !(null != i && i.has(e))),
                                    bottom: [...(null != (r = null == e ? void 0 : e.bottom) ? r : []).filter(e => !(null != i && i.has(e))), ...Array.from(i)]
                                } : "top" === l ? {
                                    top: [...(null != (a = null == e ? void 0 : e.top) ? a : []).filter(e => !(null != i && i.has(e))), ...Array.from(i)],
                                    bottom: (null != (u = null == e ? void 0 : e.bottom) ? u : []).filter(e => !(null != i && i.has(e)))
                                } : {
                                    top: (null != (t = null == e ? void 0 : e.top) ? t : []).filter(e => !(null != i && i.has(e))),
                                    bottom: (null != (n = null == e ? void 0 : e.bottom) ? n : []).filter(e => !(null != i && i.has(e)))
                                }
                            })
                        }, e.getCanPin = () => {
                            var l;
                            let {
                                enableRowPinning: n,
                                enablePinning: o
                            } = t.options;
                            return "function" == typeof n ? n(e) : null == (l = null != n ? n : o) || l
                        }, e.getIsPinned = () => {
                            let l = [e.id],
                                {
                                    top: n,
                                    bottom: o
                                } = t.getState().rowPinning,
                                r = l.some(e => null == n ? void 0 : n.includes(e)),
                                i = l.some(e => null == o ? void 0 : o.includes(e));
                            return r ? "top" : !!i && "bottom"
                        }, e.getPinnedIndex = () => {
                            var l, n;
                            let o = e.getIsPinned();
                            if (!o) return -1;
                            let r = null == (l = "top" === o ? t.getTopRows() : t.getBottomRows()) ? void 0 : l.map(e => {
                                let {
                                    id: t
                                } = e;
                                return t
                            });
                            return null != (n = null == r ? void 0 : r.indexOf(e.id)) ? n : -1
                        }
                    },
                    createTable: e => {
                        e.setRowPinning = t => null == e.options.onRowPinningChange ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = t => {
                            var l, n;
                            return e.setRowPinning(t ? A() : null != (l = null == (n = e.initialState) ? void 0 : n.rowPinning) ? l : A())
                        }, e.getIsSomeRowsPinned = t => {
                            var l, n, o;
                            let r = e.getState().rowPinning;
                            return t ? !!(null == (l = r[t]) ? void 0 : l.length) : !!((null == (n = r.top) ? void 0 : n.length) || (null == (o = r.bottom) ? void 0 : o.length))
                        }, e._getPinnedRows = (t, l, n) => {
                            var o;
                            return (null == (o = e.options.keepPinnedRows) || o ? (null != l ? l : []).map(t => {
                                let l = e.getRow(t, !0);
                                return l.getIsAllParentsExpanded() ? l : null
                            }) : (null != l ? l : []).map(e => t.find(t => t.id === e))).filter(Boolean).map(e => ({
                                ...e,
                                position: n
                            }))
                        }, e.getTopRows = i(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, l) => e._getPinnedRows(t, l, "top"), a(e.options, "debugRows", "getTopRows")), e.getBottomRows = i(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, l) => e._getPinnedRows(t, l, "bottom"), a(e.options, "debugRows", "getBottomRows")), e.getCenterRows = i(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (e, t, l) => {
                            let n = new Set([...null != t ? t : [], ...null != l ? l : []]);
                            return e.filter(e => !n.has(e.id))
                        }, a(e.options, "debugRows", "getCenterRows"))
                    }
                }, {
                    getInitialState: e => ({
                        rowSelection: {},
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        onRowSelectionChange: o("rowSelection", e),
                        enableRowSelection: !0,
                        enableMultiRowSelection: !0,
                        enableSubRowSelection: !0
                    }),
                    createTable: e => {
                        e.setRowSelection = t => null == e.options.onRowSelectionChange ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = t => {
                            var l;
                            return e.setRowSelection(t ? {} : null != (l = e.initialState.rowSelection) ? l : {})
                        }, e.toggleAllRowsSelected = t => {
                            e.setRowSelection(l => {
                                t = void 0 !== t ? t : !e.getIsAllRowsSelected();
                                let n = {
                                        ...l
                                    },
                                    o = e.getPreGroupedRowModel().flatRows;
                                return t ? o.forEach(e => {
                                    e.getCanSelect() && (n[e.id] = !0)
                                }) : o.forEach(e => {
                                    delete n[e.id]
                                }), n
                            })
                        }, e.toggleAllPageRowsSelected = t => e.setRowSelection(l => {
                            let n = void 0 !== t ? t : !e.getIsAllPageRowsSelected(),
                                o = {
                                    ...l
                                };
                            return e.getRowModel().rows.forEach(t => {
                                D(o, t.id, n, !0, e)
                            }), o
                        }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = i(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, l) => Object.keys(t).length ? L(e, l) : {
                            rows: [],
                            flatRows: [],
                            rowsById: {}
                        }, a(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = i(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, l) => Object.keys(t).length ? L(e, l) : {
                            rows: [],
                            flatRows: [],
                            rowsById: {}
                        }, a(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = i(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, l) => Object.keys(t).length ? L(e, l) : {
                            rows: [],
                            flatRows: [],
                            rowsById: {}
                        }, a(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
                            let t = e.getFilteredRowModel().flatRows,
                                {
                                    rowSelection: l
                                } = e.getState(),
                                n = !!(t.length && Object.keys(l).length);
                            return n && t.some(e => e.getCanSelect() && !l[e.id]) && (n = !1), n
                        }, e.getIsAllPageRowsSelected = () => {
                            let t = e.getPaginationRowModel().flatRows.filter(e => e.getCanSelect()),
                                {
                                    rowSelection: l
                                } = e.getState(),
                                n = !!t.length;
                            return n && t.some(e => !l[e.id]) && (n = !1), n
                        }, e.getIsSomeRowsSelected = () => {
                            var t;
                            let l = Object.keys(null != (t = e.getState().rowSelection) ? t : {}).length;
                            return l > 0 && l < e.getFilteredRowModel().flatRows.length
                        }, e.getIsSomePageRowsSelected = () => {
                            let t = e.getPaginationRowModel().flatRows;
                            return !e.getIsAllPageRowsSelected() && t.filter(e => e.getCanSelect()).some(e => e.getIsSelected() || e.getIsSomeSelected())
                        }, e.getToggleAllRowsSelectedHandler = () => t => {
                            e.toggleAllRowsSelected(t.target.checked)
                        }, e.getToggleAllPageRowsSelectedHandler = () => t => {
                            e.toggleAllPageRowsSelected(t.target.checked)
                        }
                    },
                    createRow: (e, t) => {
                        e.toggleSelected = (l, n) => {
                            let o = e.getIsSelected();
                            t.setRowSelection(r => {
                                var i;
                                if (l = void 0 !== l ? l : !o, e.getCanSelect() && o === l) return r;
                                let a = {
                                    ...r
                                };
                                return D(a, e.id, l, null == (i = null == n ? void 0 : n.selectChildren) || i, t), a
                            })
                        }, e.getIsSelected = () => {
                            let {
                                rowSelection: l
                            } = t.getState();
                            return G(e, l)
                        }, e.getIsSomeSelected = () => {
                            let {
                                rowSelection: l
                            } = t.getState();
                            return "some" === H(e, l)
                        }, e.getIsAllSubRowsSelected = () => {
                            let {
                                rowSelection: l
                            } = t.getState();
                            return "all" === H(e, l)
                        }, e.getCanSelect = () => {
                            var l;
                            return "function" == typeof t.options.enableRowSelection ? t.options.enableRowSelection(e) : null == (l = t.options.enableRowSelection) || l
                        }, e.getCanSelectSubRows = () => {
                            var l;
                            return "function" == typeof t.options.enableSubRowSelection ? t.options.enableSubRowSelection(e) : null == (l = t.options.enableSubRowSelection) || l
                        }, e.getCanMultiSelect = () => {
                            var l;
                            return "function" == typeof t.options.enableMultiRowSelection ? t.options.enableMultiRowSelection(e) : null == (l = t.options.enableMultiRowSelection) || l
                        }, e.getToggleSelectedHandler = () => {
                            let t = e.getCanSelect();
                            return l => {
                                var n;
                                t && e.toggleSelected(null == (n = l.target) ? void 0 : n.checked)
                            }
                        }
                    }
                }, {
                    getDefaultColumnDef: () => x,
                    getInitialState: e => ({
                        columnSizing: {},
                        columnSizingInfo: V(),
                        ...e
                    }),
                    getDefaultOptions: e => ({
                        columnResizeMode: "onEnd",
                        columnResizeDirection: "ltr",
                        onColumnSizingChange: o("columnSizing", e),
                        onColumnSizingInfoChange: o("columnSizingInfo", e)
                    }),
                    createColumn: (e, t) => {
                        e.getSize = () => {
                            var l, n, o;
                            let r = t.getState().columnSizing[e.id];
                            return Math.min(Math.max(null != (l = e.columnDef.minSize) ? l : x.minSize, null != (n = null != r ? r : e.columnDef.size) ? n : x.size), null != (o = e.columnDef.maxSize) ? o : x.maxSize)
                        }, e.getStart = i(e => [e, E(t, e), t.getState().columnSizing], (t, l) => l.slice(0, e.getIndex(t)).reduce((e, t) => e + t.getSize(), 0), a(t.options, "debugColumns", "getStart")), e.getAfter = i(e => [e, E(t, e), t.getState().columnSizing], (t, l) => l.slice(e.getIndex(t) + 1).reduce((e, t) => e + t.getSize(), 0), a(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
                            t.setColumnSizing(t => {
                                let {
                                    [e.id]: l, ...n
                                } = t;
                                return n
                            })
                        }, e.getCanResize = () => {
                            var l, n;
                            return (null == (l = e.columnDef.enableResizing) || l) && (null == (n = t.options.enableColumnResizing) || n)
                        }, e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id
                    },
                    createHeader: (e, t) => {
                        e.getSize = () => {
                            let t = 0,
                                l = e => {
                                    if (e.subHeaders.length) e.subHeaders.forEach(l);
                                    else {
                                        var n;
                                        t += null != (n = e.column.getSize()) ? n : 0
                                    }
                                };
                            return l(e), t
                        }, e.getStart = () => {
                            if (e.index > 0) {
                                let t = e.headerGroup.headers[e.index - 1];
                                return t.getStart() + t.getSize()
                            }
                            return 0
                        }, e.getResizeHandler = l => {
                            let n = t.getColumn(e.column.id),
                                o = null == n ? void 0 : n.getCanResize();
                            return r => {
                                if (!n || !o || (null == r.persist || r.persist(), P(r) && r.touches && r.touches.length > 1)) return;
                                let i = e.getSize(),
                                    a = e ? e.getLeafHeaders().map(e => [e.column.id, e.column.getSize()]) : [
                                        [n.id, n.getSize()]
                                    ],
                                    u = P(r) ? Math.round(r.touches[0].clientX) : r.clientX,
                                    s = {},
                                    g = (e, l) => {
                                        "number" == typeof l && (t.setColumnSizingInfo(e => {
                                            var n, o;
                                            let r = "rtl" === t.options.columnResizeDirection ? -1 : 1,
                                                i = (l - (null != (n = null == e ? void 0 : e.startOffset) ? n : 0)) * r,
                                                a = Math.max(i / (null != (o = null == e ? void 0 : e.startSize) ? o : 0), -.999999);
                                            return e.columnSizingStart.forEach(e => {
                                                let [t, l] = e;
                                                s[t] = Math.round(100 * Math.max(l + l * a, 0)) / 100
                                            }), {
                                                ...e,
                                                deltaOffset: i,
                                                deltaPercentage: a
                                            }
                                        }), ("onChange" === t.options.columnResizeMode || "end" === e) && t.setColumnSizing(e => ({
                                            ...e,
                                            ...s
                                        })))
                                    },
                                    d = e => g("move", e),
                                    c = e => {
                                        g("end", e), t.setColumnSizingInfo(e => ({
                                            ...e,
                                            isResizingColumn: !1,
                                            startOffset: null,
                                            startSize: null,
                                            deltaOffset: null,
                                            deltaPercentage: null,
                                            columnSizingStart: []
                                        }))
                                    },
                                    f = l || ("undefined" != typeof document ? document : null),
                                    p = {
                                        moveHandler: e => d(e.clientX),
                                        upHandler: e => {
                                            null == f || f.removeEventListener("mousemove", p.moveHandler), null == f || f.removeEventListener("mouseup", p.upHandler), c(e.clientX)
                                        }
                                    },
                                    m = {
                                        moveHandler: e => (e.cancelable && (e.preventDefault(), e.stopPropagation()), d(e.touches[0].clientX), !1),
                                        upHandler: e => {
                                            var t;
                                            null == f || f.removeEventListener("touchmove", m.moveHandler), null == f || f.removeEventListener("touchend", m.upHandler), e.cancelable && (e.preventDefault(), e.stopPropagation()), c(null == (t = e.touches[0]) ? void 0 : t.clientX)
                                        }
                                    },
                                    v = !! function() {
                                        if ("boolean" == typeof y) return y;
                                        let e = !1;
                                        try {
                                            let t = () => {};
                                            window.addEventListener("test", t, {
                                                get passive() {
                                                    return e = !0, !1
                                                }
                                            }), window.removeEventListener("test", t)
                                        } catch (t) {
                                            e = !1
                                        }
                                        return y = e
                                    }() && {
                                        passive: !1
                                    };
                                P(r) ? (null == f || f.addEventListener("touchmove", m.moveHandler, v), null == f || f.addEventListener("touchend", m.upHandler, v)) : (null == f || f.addEventListener("mousemove", p.moveHandler, v), null == f || f.addEventListener("mouseup", p.upHandler, v)), t.setColumnSizingInfo(e => ({
                                    ...e,
                                    startOffset: u,
                                    startSize: i,
                                    deltaOffset: 0,
                                    deltaPercentage: 0,
                                    columnSizingStart: a,
                                    isResizingColumn: n.id
                                }))
                            }
                        }
                    },
                    createTable: e => {
                        e.setColumnSizing = t => null == e.options.onColumnSizingChange ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = t => null == e.options.onColumnSizingInfoChange ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = t => {
                            var l;
                            e.setColumnSizing(t ? {} : null != (l = e.initialState.columnSizing) ? l : {})
                        }, e.resetHeaderSizeInfo = t => {
                            var l;
                            e.setColumnSizingInfo(t ? V() : null != (l = e.initialState.columnSizingInfo) ? l : V())
                        }, e.getTotalSize = () => {
                            var t, l;
                            return null != (t = null == (l = e.getHeaderGroups()[0]) ? void 0 : l.headers.reduce((e, t) => e + t.getSize(), 0)) ? t : 0
                        }, e.getLeftTotalSize = () => {
                            var t, l;
                            return null != (t = null == (l = e.getLeftHeaderGroups()[0]) ? void 0 : l.headers.reduce((e, t) => e + t.getSize(), 0)) ? t : 0
                        }, e.getCenterTotalSize = () => {
                            var t, l;
                            return null != (t = null == (l = e.getCenterHeaderGroups()[0]) ? void 0 : l.headers.reduce((e, t) => e + t.getSize(), 0)) ? t : 0
                        }, e.getRightTotalSize = () => {
                            var t, l;
                            return null != (t = null == (l = e.getRightHeaderGroups()[0]) ? void 0 : l.headers.reduce((e, t) => e + t.getSize(), 0)) ? t : 0
                        }
                    }
                }];

            function N(e) {
                var t, l;
                let o = [...B, ...null != (t = e._features) ? t : []],
                    r = {
                        _features: o
                    },
                    u = r._features.reduce((e, t) => Object.assign(e, null == t.getDefaultOptions ? void 0 : t.getDefaultOptions(r)), {}),
                    s = e => r.options.mergeOptions ? r.options.mergeOptions(u, e) : {
                        ...u,
                        ...e
                    },
                    g = {
                        ...null != (l = e.initialState) ? l : {}
                    };
                r._features.forEach(e => {
                    var t;
                    g = null != (t = null == e.getInitialState ? void 0 : e.getInitialState(g)) ? t : g
                });
                let d = [],
                    c = !1,
                    f = {
                        _features: o,
                        options: {
                            ...u,
                            ...e
                        },
                        initialState: g,
                        _queue: e => {
                            d.push(e), c || (c = !0, Promise.resolve().then(() => {
                                for (; d.length;) d.shift()();
                                c = !1
                            }).catch(e => setTimeout(() => {
                                throw e
                            })))
                        },
                        reset: () => {
                            r.setState(r.initialState)
                        },
                        setOptions: e => {
                            let t = n(e, r.options);
                            r.options = s(t)
                        },
                        getState: () => r.options.state,
                        setState: e => {
                            null == r.options.onStateChange || r.options.onStateChange(e)
                        },
                        _getRowId: (e, t, l) => {
                            var n;
                            return null != (n = null == r.options.getRowId ? void 0 : r.options.getRowId(e, t, l)) ? n : `${l?[l.id,t].join("."):t}`
                        },
                        getCoreRowModel: () => (r._getCoreRowModel || (r._getCoreRowModel = r.options.getCoreRowModel(r)), r._getCoreRowModel()),
                        getRowModel: () => r.getPaginationRowModel(),
                        getRow: (e, t) => {
                            let l = (t ? r.getPrePaginationRowModel() : r.getRowModel()).rowsById[e];
                            if (!l && !(l = r.getCoreRowModel().rowsById[e])) throw Error();
                            return l
                        },
                        _getDefaultColumnDef: i(() => [r.options.defaultColumn], e => {
                            var t;
                            return e = null != (t = e) ? t : {}, {
                                header: e => {
                                    let t = e.header.column.columnDef;
                                    return t.accessorKey ? t.accessorKey : t.accessorFn ? t.id : null
                                },
                                cell: e => {
                                    var t, l;
                                    return null != (t = null == (l = e.renderValue()) || null == l.toString ? void 0 : l.toString()) ? t : null
                                },
                                ...r._features.reduce((e, t) => Object.assign(e, null == t.getDefaultColumnDef ? void 0 : t.getDefaultColumnDef()), {}),
                                ...e
                            }
                        }, a(e, "debugColumns", "_getDefaultColumnDef")),
                        _getColumnDefs: () => r.options.columns,
                        getAllColumns: i(() => [r._getColumnDefs()], e => {
                            let t = function(e, l, n) {
                                return void 0 === n && (n = 0), e.map(e => {
                                    let o = function(e, t, l, n) {
                                        var o, r;
                                        let u;
                                        let s = {
                                                ...e._getDefaultColumnDef(),
                                                ...t
                                            },
                                            g = s.accessorKey,
                                            d = null != (o = null != (r = s.id) ? r : g ? "function" == typeof String.prototype.replaceAll ? g.replaceAll(".", "_") : g.replace(/\./g, "_") : void 0) ? o : "string" == typeof s.header ? s.header : void 0;
                                        if (s.accessorFn ? u = s.accessorFn : g && (u = g.includes(".") ? e => {
                                                let t = e;
                                                for (let e of g.split(".")) {
                                                    var l;
                                                    t = null == (l = t) ? void 0 : l[e]
                                                }
                                                return t
                                            } : e => e[s.accessorKey]), !d) throw Error();
                                        let c = {
                                            id: `${String(d)}`,
                                            accessorFn: u,
                                            parent: n,
                                            depth: l,
                                            columnDef: s,
                                            columns: [],
                                            getFlatColumns: i(() => [!0], () => {
                                                var e;
                                                return [c, ...null == (e = c.columns) ? void 0 : e.flatMap(e => e.getFlatColumns())]
                                            }, a(e.options, "debugColumns", "column.getFlatColumns")),
                                            getLeafColumns: i(() => [e._getOrderColumnsFn()], e => {
                                                var t;
                                                return null != (t = c.columns) && t.length ? e(c.columns.flatMap(e => e.getLeafColumns())) : [c]
                                            }, a(e.options, "debugColumns", "column.getLeafColumns"))
                                        };
                                        for (let t of e._features) null == t.createColumn || t.createColumn(c, e);
                                        return c
                                    }(r, e, n, l);
                                    return o.columns = e.columns ? t(e.columns, o, n + 1) : [], o
                                })
                            };
                            return t(e)
                        }, a(e, "debugColumns", "getAllColumns")),
                        getAllFlatColumns: i(() => [r.getAllColumns()], e => e.flatMap(e => e.getFlatColumns()), a(e, "debugColumns", "getAllFlatColumns")),
                        _getAllFlatColumnsById: i(() => [r.getAllFlatColumns()], e => e.reduce((e, t) => (e[t.id] = t, e), {}), a(e, "debugColumns", "getAllFlatColumnsById")),
                        getAllLeafColumns: i(() => [r.getAllColumns(), r._getOrderColumnsFn()], (e, t) => t(e.flatMap(e => e.getLeafColumns())), a(e, "debugColumns", "getAllLeafColumns")),
                        getColumn: e => r._getAllFlatColumnsById()[e]
                    };
                Object.assign(r, f);
                for (let e = 0; e < r._features.length; e++) {
                    let t = r._features[e];
                    null == t || null == t.createTable || t.createTable(r)
                }
                return r
            }

            function q() {
                return e => i(() => [e.options.data], t => {
                    let l = {
                            rows: [],
                            flatRows: [],
                            rowsById: {}
                        },
                        n = function(t, o, r) {
                            void 0 === o && (o = 0);
                            let i = [];
                            for (let u = 0; u < t.length; u++) {
                                let s = d(e, e._getRowId(t[u], u, r), t[u], u, o, void 0, null == r ? void 0 : r.id);
                                if (l.flatRows.push(s), l.rowsById[s.id] = s, i.push(s), e.options.getSubRows) {
                                    var a;
                                    s.originalSubRows = e.options.getSubRows(t[u], u), null != (a = s.originalSubRows) && a.length && (s.subRows = n(s.originalSubRows, o + 1, s))
                                }
                            }
                            return i
                        };
                    return l.rows = n(t), l
                }, a(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()))
            }

            function U(e, t, l) {
                return l.options.filterFromLeafRows ? function(e, t, l) {
                    var n;
                    let o = [],
                        r = {},
                        i = null != (n = l.options.maxLeafRowFilterDepth) ? n : 100,
                        a = function(e, n) {
                            void 0 === n && (n = 0);
                            let u = [];
                            for (let g = 0; g < e.length; g++) {
                                var s;
                                let c = e[g],
                                    f = d(l, c.id, c.original, c.index, c.depth, void 0, c.parentId);
                                if (f.columnFilters = c.columnFilters, null != (s = c.subRows) && s.length && n < i) {
                                    if (f.subRows = a(c.subRows, n + 1), t(c = f) && !f.subRows.length || t(c) || f.subRows.length) {
                                        u.push(c), r[c.id] = c, o.push(c);
                                        continue
                                    }
                                } else t(c = f) && (u.push(c), r[c.id] = c, o.push(c))
                            }
                            return u
                        };
                    return {
                        rows: a(e),
                        flatRows: o,
                        rowsById: r
                    }
                }(e, t, l) : function(e, t, l) {
                    var n;
                    let o = [],
                        r = {},
                        i = null != (n = l.options.maxLeafRowFilterDepth) ? n : 100,
                        a = function(e, n) {
                            void 0 === n && (n = 0);
                            let u = [];
                            for (let g = 0; g < e.length; g++) {
                                let c = e[g];
                                if (t(c)) {
                                    var s;
                                    if (null != (s = c.subRows) && s.length && n < i) {
                                        let e = d(l, c.id, c.original, c.index, c.depth, void 0, c.parentId);
                                        e.subRows = a(c.subRows, n + 1), c = e
                                    }
                                    u.push(c), o.push(c), r[c.id] = c
                                }
                            }
                            return u
                        };
                    return {
                        rows: a(e),
                        flatRows: o,
                        rowsById: r
                    }
                }(e, t, l)
            }

            function W() {
                return (e, t) => i(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter, e.getFilteredRowModel()], (l, n, o) => {
                    if (!l.rows.length || !(null != n && n.length) && !o) return l;
                    let r = [...n.map(e => e.id).filter(e => e !== t), o ? "__global__" : void 0].filter(Boolean);
                    return U(l.rows, e => {
                        for (let t = 0; t < r.length; t++)
                            if (!1 === e.columnFilters[r[t]]) return !1;
                        return !0
                    }, e)
                }, a(e.options, "debugTable", "getFacetedRowModel"))
            }

            function $() {
                return (e, t) => i(() => {
                    var l;
                    return [null == (l = e.getColumn(t)) ? void 0 : l.getFacetedRowModel()]
                }, e => {
                    if (!e) return new Map;
                    let l = new Map;
                    for (let o = 0; o < e.flatRows.length; o++) {
                        let r = e.flatRows[o].getUniqueValues(t);
                        for (let e = 0; e < r.length; e++) {
                            let t = r[e];
                            if (l.has(t)) {
                                var n;
                                l.set(t, (null != (n = l.get(t)) ? n : 0) + 1)
                            } else l.set(t, 1)
                        }
                    }
                    return l
                }, a(e.options, "debugTable", `getFacetedUniqueValues_${t}`))
            }

            function K() {
                return e => i(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter], (t, l, n) => {
                    let o, r;
                    if (!t.rows.length || !(null != l && l.length) && !n) {
                        for (let e = 0; e < t.flatRows.length; e++) t.flatRows[e].columnFilters = {}, t.flatRows[e].columnFiltersMeta = {};
                        return t
                    }
                    let i = [],
                        a = [];
                    (null != l ? l : []).forEach(t => {
                        var l;
                        let n = e.getColumn(t.id);
                        if (!n) return;
                        let o = n.getFilterFn();
                        o && i.push({
                            id: t.id,
                            filterFn: o,
                            resolvedValue: null != (l = null == o.resolveFilterValue ? void 0 : o.resolveFilterValue(t.value)) ? l : t.value
                        })
                    });
                    let u = (null != l ? l : []).map(e => e.id),
                        s = e.getGlobalFilterFn(),
                        g = e.getAllLeafColumns().filter(e => e.getCanGlobalFilter());
                    n && s && g.length && (u.push("__global__"), g.forEach(e => {
                        var t;
                        a.push({
                            id: e.id,
                            filterFn: s,
                            resolvedValue: null != (t = null == s.resolveFilterValue ? void 0 : s.resolveFilterValue(n)) ? t : n
                        })
                    }));
                    for (let e = 0; e < t.flatRows.length; e++) {
                        let l = t.flatRows[e];
                        if (l.columnFilters = {}, i.length)
                            for (let e = 0; e < i.length; e++) {
                                let t = (o = i[e]).id;
                                l.columnFilters[t] = o.filterFn(l, t, o.resolvedValue, e => {
                                    l.columnFiltersMeta[t] = e
                                })
                            }
                        if (a.length) {
                            for (let e = 0; e < a.length; e++) {
                                let t = (r = a[e]).id;
                                if (r.filterFn(l, t, r.resolvedValue, e => {
                                        l.columnFiltersMeta[t] = e
                                    })) {
                                    l.columnFilters.__global__ = !0;
                                    break
                                }
                            }!0 !== l.columnFilters.__global__ && (l.columnFilters.__global__ = !1)
                        }
                    }
                    return U(t.rows, e => {
                        for (let t = 0; t < u.length; t++)
                            if (!1 === e.columnFilters[u[t]]) return !1;
                        return !0
                    }, e)
                }, a(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()))
            }

            function X(e) {
                return e => i(() => [e.getState().pagination, e.getPrePaginationRowModel(), e.options.paginateExpandedRows ? void 0 : e.getState().expanded], (t, l) => {
                    let n;
                    if (!l.rows.length) return l;
                    let {
                        pageSize: o,
                        pageIndex: r
                    } = t, {
                        rows: i,
                        flatRows: a,
                        rowsById: u
                    } = l, s = o * r;
                    i = i.slice(s, s + o), (n = e.options.paginateExpandedRows ? {
                        rows: i,
                        flatRows: a,
                        rowsById: u
                    } : function(e) {
                        let t = [],
                            l = e => {
                                var n;
                                t.push(e), null != (n = e.subRows) && n.length && e.getIsExpanded() && e.subRows.forEach(l)
                            };
                        return e.rows.forEach(l), {
                            rows: t,
                            flatRows: e.flatRows,
                            rowsById: e.rowsById
                        }
                    }({
                        rows: i,
                        flatRows: a,
                        rowsById: u
                    })).flatRows = [];
                    let g = e => {
                        n.flatRows.push(e), e.subRows.length && e.subRows.forEach(g)
                    };
                    return n.rows.forEach(g), n
                }, a(e.options, "debugTable", "getPaginationRowModel"))
            }

            function Z() {
                return e => i(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, l) => {
                    if (!l.rows.length || !(null != t && t.length)) return l;
                    let n = e.getState().sorting,
                        o = [],
                        r = n.filter(t => {
                            var l;
                            return null == (l = e.getColumn(t.id)) ? void 0 : l.getCanSort()
                        }),
                        i = {};
                    r.forEach(t => {
                        let l = e.getColumn(t.id);
                        l && (i[t.id] = {
                            sortUndefined: l.columnDef.sortUndefined,
                            invertSorting: l.columnDef.invertSorting,
                            sortingFn: l.getSortingFn()
                        })
                    });
                    let a = e => {
                        let t = e.map(e => ({
                            ...e
                        }));
                        return t.sort((e, t) => {
                            for (let n = 0; n < r.length; n += 1) {
                                var l;
                                let o = r[n],
                                    a = i[o.id],
                                    u = a.sortUndefined,
                                    s = null != (l = null == o ? void 0 : o.desc) && l,
                                    g = 0;
                                if (u) {
                                    let l = e.getValue(o.id),
                                        n = t.getValue(o.id),
                                        r = void 0 === l,
                                        i = void 0 === n;
                                    if (r || i) {
                                        if ("first" === u) return r ? -1 : 1;
                                        if ("last" === u) return r ? 1 : -1;
                                        g = r && i ? 0 : r ? u : -u
                                    }
                                }
                                if (0 === g && (g = a.sortingFn(e, t, o.id)), 0 !== g) return s && (g *= -1), a.invertSorting && (g *= -1), g
                            }
                            return e.index - t.index
                        }), t.forEach(e => {
                            var t;
                            o.push(e), null != (t = e.subRows) && t.length && (e.subRows = a(e.subRows))
                        }), t
                    };
                    return {
                        rows: a(l.rows),
                        flatRows: o,
                        rowsById: l.rowsById
                    }
                }, a(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()))
            }
        },
        46343: function(e, t, l) {
            l.d(t, {
                mY: function() {
                    return A
                }
            });
            var n = /[\\\/_+.#"@\[\(\{&]/,
                o = /[\\\/_+.#"@\[\(\{&]/g,
                r = /[\s-]/,
                i = /[\s-]/g;

            function a(e) {
                return e.toLowerCase().replace(i, " ")
            }
            var u = l(49027),
                s = l(2265),
                g = l(66840),
                d = l(99255),
                c = l(98575),
                f = '[cmdk-group=""]',
                p = '[cmdk-group-items=""]',
                m = '[cmdk-item=""]',
                v = "".concat(m, ':not([aria-disabled="true"])'),
                h = "cmdk-item-select",
                w = "data-value",
                b = (e, t, l) => {
                    var u;
                    return u = e,
                        function e(t, l, a, u, s, g, d) {
                            if (g === l.length) return s === t.length ? 1 : .99;
                            var c = `${s},${g}`;
                            if (void 0 !== d[c]) return d[c];
                            for (var f, p, m, v, h = u.charAt(g), w = a.indexOf(h, s), b = 0; w >= 0;)(f = e(t, l, a, u, w + 1, g + 1, d)) > b && (w === s ? f *= 1 : n.test(t.charAt(w - 1)) ? (f *= .8, (m = t.slice(s, w - 1).match(o)) && s > 0 && (f *= Math.pow(.999, m.length))) : r.test(t.charAt(w - 1)) ? (f *= .9, (v = t.slice(s, w - 1).match(i)) && s > 0 && (f *= Math.pow(.999, v.length))) : (f *= .17, s > 0 && (f *= Math.pow(.999, w - s))), t.charAt(w) !== l.charAt(g) && (f *= .9999)), (f < .1 && a.charAt(w - 1) === u.charAt(g + 1) || u.charAt(g + 1) === u.charAt(g) && a.charAt(w - 1) !== u.charAt(g)) && .1 * (p = e(t, l, a, u, w + 1, g + 2, d)) > f && (f = .1 * p), f > b && (b = f), w = a.indexOf(h, w + 1);
                            return d[c] = b, b
                        }(u = l && l.length > 0 ? `${u+" "+l.join(" ")}` : u, t, a(u), a(t), 0, 0, {})
                },
                C = s.createContext(void 0),
                R = () => s.useContext(C),
                S = s.createContext(void 0),
                F = () => s.useContext(S),
                M = s.createContext(void 0),
                I = s.forwardRef((e, t) => {
                    let l = G(() => {
                            var t, l;
                            return {
                                search: "",
                                value: null != (l = null != (t = e.value) ? t : e.defaultValue) ? l : "",
                                selectedItemId: void 0,
                                filtered: {
                                    count: 0,
                                    items: new Map,
                                    groups: new Set
                                }
                            }
                        }),
                        n = G(() => new Set),
                        o = G(() => new Map),
                        r = G(() => new Map),
                        i = G(() => new Set),
                        a = D(e),
                        {
                            label: u,
                            children: c,
                            value: R,
                            onValueChange: F,
                            filter: M,
                            shouldFilter: I,
                            loop: x,
                            disablePointerSelection: V = !1,
                            vimBindings: y = !0,
                            ...P
                        } = e,
                        E = (0, d.M)(),
                        _ = (0, d.M)(),
                        A = (0, d.M)(),
                        H = s.useRef(null),
                        z = O();
                    L(() => {
                        if (void 0 !== R) {
                            let e = R.trim();
                            l.current.value = e, T.emit()
                        }
                    }, [R]), L(() => {
                        z(6, $)
                    }, []);
                    let T = s.useMemo(() => ({
                            subscribe: e => (i.current.add(e), () => i.current.delete(e)),
                            snapshot: () => l.current,
                            setState: (e, t, n) => {
                                var o, r, i, u;
                                if (!Object.is(l.current[e], t)) {
                                    if (l.current[e] = t, "search" === e) W(), q(), z(1, U);
                                    else if ("value" === e) {
                                        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
                                            let e = document.getElementById(A);
                                            e ? e.focus() : null == (o = document.getElementById(E)) || o.focus()
                                        }
                                        if (z(7, () => {
                                                var e;
                                                l.current.selectedItemId = null == (e = K()) ? void 0 : e.id, T.emit()
                                            }), n || z(5, $), (null == (r = a.current) ? void 0 : r.value) !== void 0) {
                                            null == (u = (i = a.current).onValueChange) || u.call(i, null != t ? t : "");
                                            return
                                        }
                                    }
                                    T.emit()
                                }
                            },
                            emit: () => {
                                i.current.forEach(e => e())
                            }
                        }), []),
                        B = s.useMemo(() => ({
                            value: (e, t, n) => {
                                var o;
                                t !== (null == (o = r.current.get(e)) ? void 0 : o.value) && (r.current.set(e, {
                                    value: t,
                                    keywords: n
                                }), l.current.filtered.items.set(e, N(t, n)), z(2, () => {
                                    q(), T.emit()
                                }))
                            },
                            item: (e, t) => (n.current.add(e), t && (o.current.has(t) ? o.current.get(t).add(e) : o.current.set(t, new Set([e]))), z(3, () => {
                                W(), q(), l.current.value || U(), T.emit()
                            }), () => {
                                r.current.delete(e), n.current.delete(e), l.current.filtered.items.delete(e);
                                let t = K();
                                z(4, () => {
                                    W(), (null == t ? void 0 : t.getAttribute("id")) === e && U(), T.emit()
                                })
                            }),
                            group: e => (o.current.has(e) || o.current.set(e, new Set), () => {
                                r.current.delete(e), o.current.delete(e)
                            }),
                            filter: () => a.current.shouldFilter,
                            label: u || e["aria-label"],
                            getDisablePointerSelection: () => a.current.disablePointerSelection,
                            listId: E,
                            inputId: A,
                            labelId: _,
                            listInnerRef: H
                        }), []);

                    function N(e, t) {
                        var n, o;
                        let r = null != (o = null == (n = a.current) ? void 0 : n.filter) ? o : b;
                        return e ? r(e, l.current.search, t) : 0
                    }

                    function q() {
                        if (!l.current.search || !1 === a.current.shouldFilter) return;
                        let e = l.current.filtered.items,
                            t = [];
                        l.current.filtered.groups.forEach(l => {
                            let n = o.current.get(l),
                                r = 0;
                            n.forEach(t => {
                                r = Math.max(e.get(t), r)
                            }), t.push([l, r])
                        });
                        let n = H.current;
                        X().sort((t, l) => {
                            var n, o;
                            let r = t.getAttribute("id"),
                                i = l.getAttribute("id");
                            return (null != (n = e.get(i)) ? n : 0) - (null != (o = e.get(r)) ? o : 0)
                        }).forEach(e => {
                            let t = e.closest(p);
                            t ? t.appendChild(e.parentElement === t ? e : e.closest("".concat(p, " > *"))) : n.appendChild(e.parentElement === n ? e : e.closest("".concat(p, " > *")))
                        }), t.sort((e, t) => t[1] - e[1]).forEach(e => {
                            var t;
                            let l = null == (t = H.current) ? void 0 : t.querySelector("".concat(f, "[").concat(w, '="').concat(encodeURIComponent(e[0]), '"]'));
                            null == l || l.parentElement.appendChild(l)
                        })
                    }

                    function U() {
                        let e = X().find(e => "true" !== e.getAttribute("aria-disabled")),
                            t = null == e ? void 0 : e.getAttribute(w);
                        T.setState("value", t || void 0)
                    }

                    function W() {
                        var e, t, i, u;
                        if (!l.current.search || !1 === a.current.shouldFilter) {
                            l.current.filtered.count = n.current.size;
                            return
                        }
                        l.current.filtered.groups = new Set;
                        let s = 0;
                        for (let o of n.current) {
                            let n = N(null != (t = null == (e = r.current.get(o)) ? void 0 : e.value) ? t : "", null != (u = null == (i = r.current.get(o)) ? void 0 : i.keywords) ? u : []);
                            l.current.filtered.items.set(o, n), n > 0 && s++
                        }
                        for (let [e, t] of o.current)
                            for (let n of t)
                                if (l.current.filtered.items.get(n) > 0) {
                                    l.current.filtered.groups.add(e);
                                    break
                                } l.current.filtered.count = s
                    }

                    function $() {
                        var e, t, l;
                        let n = K();
                        n && ((null == (e = n.parentElement) ? void 0 : e.firstChild) === n && (null == (l = null == (t = n.closest(f)) ? void 0 : t.querySelector('[cmdk-group-heading=""]')) || l.scrollIntoView({
                            block: "nearest"
                        })), n.scrollIntoView({
                            block: "nearest"
                        }))
                    }

                    function K() {
                        var e;
                        return null == (e = H.current) ? void 0 : e.querySelector("".concat(m, '[aria-selected="true"]'))
                    }

                    function X() {
                        var e;
                        return Array.from((null == (e = H.current) ? void 0 : e.querySelectorAll(v)) || [])
                    }

                    function Z(e) {
                        let t = X()[e];
                        t && T.setState("value", t.getAttribute(w))
                    }

                    function Y(e) {
                        var t;
                        let l = K(),
                            n = X(),
                            o = n.findIndex(e => e === l),
                            r = n[o + e];
                        null != (t = a.current) && t.loop && (r = o + e < 0 ? n[n.length - 1] : o + e === n.length ? n[0] : n[o + e]), r && T.setState("value", r.getAttribute(w))
                    }

                    function J(e) {
                        let t = K(),
                            l = null == t ? void 0 : t.closest(f),
                            n;
                        for (; l && !n;) n = null == (l = e > 0 ? function(e, t) {
                            let l = e.nextElementSibling;
                            for (; l;) {
                                if (l.matches(t)) return l;
                                l = l.nextElementSibling
                            }
                        }(l, f) : function(e, t) {
                            let l = e.previousElementSibling;
                            for (; l;) {
                                if (l.matches(t)) return l;
                                l = l.previousElementSibling
                            }
                        }(l, f)) ? void 0 : l.querySelector(v);
                        n ? T.setState("value", n.getAttribute(w)) : Y(e)
                    }
                    let Q = () => Z(X().length - 1),
                        ee = e => {
                            e.preventDefault(), e.metaKey ? Q() : e.altKey ? J(1) : Y(1)
                        },
                        et = e => {
                            e.preventDefault(), e.metaKey ? Z(0) : e.altKey ? J(-1) : Y(-1)
                        };
                    return s.createElement(g.WV.div, {
                        ref: t,
                        tabIndex: -1,
                        ...P,
                        "cmdk-root": "",
                        onKeyDown: e => {
                            var t;
                            null == (t = P.onKeyDown) || t.call(P, e);
                            let l = e.nativeEvent.isComposing || 229 === e.keyCode;
                            if (!(e.defaultPrevented || l)) switch (e.key) {
                                case "n":
                                case "j":
                                    y && e.ctrlKey && ee(e);
                                    break;
                                case "ArrowDown":
                                    ee(e);
                                    break;
                                case "p":
                                case "k":
                                    y && e.ctrlKey && et(e);
                                    break;
                                case "ArrowUp":
                                    et(e);
                                    break;
                                case "Home":
                                    e.preventDefault(), Z(0);
                                    break;
                                case "End":
                                    e.preventDefault(), Q();
                                    break;
                                case "Enter": {
                                    e.preventDefault();
                                    let t = K();
                                    if (t) {
                                        let e = new Event(h);
                                        t.dispatchEvent(e)
                                    }
                                }
                            }
                        }
                    }, s.createElement("label", {
                        "cmdk-label": "",
                        htmlFor: B.inputId,
                        id: B.labelId,
                        style: j
                    }, u), k(e, e => s.createElement(S.Provider, {
                        value: T
                    }, s.createElement(C.Provider, {
                        value: B
                    }, e))))
                }),
                x = s.forwardRef((e, t) => {
                    var l, n;
                    let o = (0, d.M)(),
                        r = s.useRef(null),
                        i = s.useContext(M),
                        a = R(),
                        u = D(e),
                        f = null != (n = null == (l = u.current) ? void 0 : l.forceMount) ? n : null == i ? void 0 : i.forceMount;
                    L(() => {
                        if (!f) return a.item(o, null == i ? void 0 : i.id)
                    }, [f]);
                    let p = z(o, r, [e.value, e.children, r], e.keywords),
                        m = F(),
                        v = H(e => e.value && e.value === p.current),
                        w = H(e => !!f || !1 === a.filter() || !e.search || e.filtered.items.get(o) > 0);

                    function b() {
                        var e, t;
                        C(), null == (t = (e = u.current).onSelect) || t.call(e, p.current)
                    }

                    function C() {
                        m.setState("value", p.current, !0)
                    }
                    if (s.useEffect(() => {
                            let t = r.current;
                            if (!(!t || e.disabled)) return t.addEventListener(h, b), () => t.removeEventListener(h, b)
                        }, [w, e.onSelect, e.disabled]), !w) return null;
                    let {
                        disabled: S,
                        value: I,
                        onSelect: x,
                        forceMount: V,
                        keywords: y,
                        ...P
                    } = e;
                    return s.createElement(g.WV.div, {
                        ref: (0, c.F)(r, t),
                        ...P,
                        id: o,
                        "cmdk-item": "",
                        role: "option",
                        "aria-disabled": !!S,
                        "aria-selected": !!v,
                        "data-disabled": !!S,
                        "data-selected": !!v,
                        onPointerMove: S || a.getDisablePointerSelection() ? void 0 : C,
                        onClick: S ? void 0 : b
                    }, e.children)
                }),
                V = s.forwardRef((e, t) => {
                    let {
                        heading: l,
                        children: n,
                        forceMount: o,
                        ...r
                    } = e, i = (0, d.M)(), a = s.useRef(null), u = s.useRef(null), f = (0, d.M)(), p = R(), m = H(e => !!o || !1 === p.filter() || !e.search || e.filtered.groups.has(i));
                    L(() => p.group(i), []), z(i, a, [e.value, e.heading, u]);
                    let v = s.useMemo(() => ({
                        id: i,
                        forceMount: o
                    }), [o]);
                    return s.createElement(g.WV.div, {
                        ref: (0, c.F)(a, t),
                        ...r,
                        "cmdk-group": "",
                        role: "presentation",
                        hidden: !m || void 0
                    }, l && s.createElement("div", {
                        ref: u,
                        "cmdk-group-heading": "",
                        "aria-hidden": !0,
                        id: f
                    }, l), k(e, e => s.createElement("div", {
                        "cmdk-group-items": "",
                        role: "group",
                        "aria-labelledby": l ? f : void 0
                    }, s.createElement(M.Provider, {
                        value: v
                    }, e))))
                }),
                y = s.forwardRef((e, t) => {
                    let {
                        alwaysRender: l,
                        ...n
                    } = e, o = s.useRef(null), r = H(e => !e.search);
                    return l || r ? s.createElement(g.WV.div, {
                        ref: (0, c.F)(o, t),
                        ...n,
                        "cmdk-separator": "",
                        role: "separator"
                    }) : null
                }),
                P = s.forwardRef((e, t) => {
                    let {
                        onValueChange: l,
                        ...n
                    } = e, o = null != e.value, r = F(), i = H(e => e.search), a = H(e => e.selectedItemId), u = R();
                    return s.useEffect(() => {
                        null != e.value && r.setState("search", e.value)
                    }, [e.value]), s.createElement(g.WV.input, {
                        ref: t,
                        ...n,
                        "cmdk-input": "",
                        autoComplete: "off",
                        autoCorrect: "off",
                        spellCheck: !1,
                        "aria-autocomplete": "list",
                        role: "combobox",
                        "aria-expanded": !0,
                        "aria-controls": u.listId,
                        "aria-labelledby": u.labelId,
                        "aria-activedescendant": a,
                        id: u.inputId,
                        type: "text",
                        value: o ? e.value : i,
                        onChange: e => {
                            o || r.setState("search", e.target.value), null == l || l(e.target.value)
                        }
                    })
                }),
                E = s.forwardRef((e, t) => {
                    let {
                        children: l,
                        label: n = "Suggestions",
                        ...o
                    } = e, r = s.useRef(null), i = s.useRef(null), a = H(e => e.selectedItemId), u = R();
                    return s.useEffect(() => {
                        if (i.current && r.current) {
                            let e = i.current,
                                t = r.current,
                                l, n = new ResizeObserver(() => {
                                    l = requestAnimationFrame(() => {
                                        let l = e.offsetHeight;
                                        t.style.setProperty("--cmdk-list-height", l.toFixed(1) + "px")
                                    })
                                });
                            return n.observe(e), () => {
                                cancelAnimationFrame(l), n.unobserve(e)
                            }
                        }
                    }, []), s.createElement(g.WV.div, {
                        ref: (0, c.F)(r, t),
                        ...o,
                        "cmdk-list": "",
                        role: "listbox",
                        tabIndex: -1,
                        "aria-activedescendant": a,
                        "aria-label": n,
                        id: u.listId
                    }, k(e, e => s.createElement("div", {
                        ref: (0, c.F)(i, u.listInnerRef),
                        "cmdk-list-sizer": ""
                    }, e)))
                }),
                _ = s.forwardRef((e, t) => {
                    let {
                        open: l,
                        onOpenChange: n,
                        overlayClassName: o,
                        contentClassName: r,
                        container: i,
                        ...a
                    } = e;
                    return s.createElement(u.fC, {
                        open: l,
                        onOpenChange: n
                    }, s.createElement(u.h_, {
                        container: i
                    }, s.createElement(u.aV, {
                        "cmdk-overlay": "",
                        className: o
                    }), s.createElement(u.VY, {
                        "aria-label": e.label,
                        "cmdk-dialog": "",
                        className: r
                    }, s.createElement(I, {
                        ref: t,
                        ...a
                    }))))
                }),
                A = Object.assign(I, {
                    List: E,
                    Item: x,
                    Input: P,
                    Group: V,
                    Separator: y,
                    Dialog: _,
                    Empty: s.forwardRef((e, t) => H(e => 0 === e.filtered.count) ? s.createElement(g.WV.div, {
                        ref: t,
                        ...e,
                        "cmdk-empty": "",
                        role: "presentation"
                    }) : null),
                    Loading: s.forwardRef((e, t) => {
                        let {
                            progress: l,
                            children: n,
                            label: o = "Loading...",
                            ...r
                        } = e;
                        return s.createElement(g.WV.div, {
                            ref: t,
                            ...r,
                            "cmdk-loading": "",
                            role: "progressbar",
                            "aria-valuenow": l,
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-label": o
                        }, k(e, e => s.createElement("div", {
                            "aria-hidden": !0
                        }, e)))
                    })
                });

            function D(e) {
                let t = s.useRef(e);
                return L(() => {
                    t.current = e
                }), t
            }
            var L = "undefined" == typeof window ? s.useEffect : s.useLayoutEffect;

            function G(e) {
                let t = s.useRef();
                return void 0 === t.current && (t.current = e()), t
            }

            function H(e) {
                let t = F(),
                    l = () => e(t.snapshot());
                return s.useSyncExternalStore(t.subscribe, l, l)
            }

            function z(e, t, l) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                    o = s.useRef(),
                    r = R();
                return L(() => {
                    var i;
                    let a = (() => {
                            var e;
                            for (let t of l) {
                                if ("string" == typeof t) return t.trim();
                                if ("object" == typeof t && "current" in t) return t.current ? null == (e = t.current.textContent) ? void 0 : e.trim() : o.current
                            }
                        })(),
                        u = n.map(e => e.trim());
                    r.value(e, a, u), null == (i = t.current) || i.setAttribute(w, a), o.current = a
                }), o
            }
            var O = () => {
                let [e, t] = s.useState(), l = G(() => new Map);
                return L(() => {
                    l.current.forEach(e => e()), l.current = new Map
                }, [e]), (e, n) => {
                    l.current.set(e, n), t({})
                }
            };

            function k(e, t) {
                let l, {
                    asChild: n,
                    children: o
                } = e;
                return n && s.isValidElement(o) ? s.cloneElement("function" == typeof(l = o.type) ? l(o.props) : "render" in l ? l.render(o.props) : o, {
                    ref: o.ref
                }, t(o.props.children)) : t(o)
            }
            var j = {
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: "0",
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: "0"
            }
        }
    }
]);