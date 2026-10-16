try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "201e6591-9402-42f3-9958-8cc8e57f9c8f", e._sentryDebugIdIdentifier = "sentry-dbid-201e6591-9402-42f3-9958-8cc8e57f9c8f")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [83794], {
        83794: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return E
                }
            });
            var r = n(57437),
                l = n(2265),
                o = n(76736),
                a = n(89682),
                s = n(32883),
                i = n(14438),
                u = n(12019),
                c = n(94508),
                d = n(93474),
                f = n(19378),
                b = n(93022),
                h = n(78325),
                m = n(58239),
                x = n(40875),
                p = n(10407),
                v = n(30401),
                g = n(78867),
                N = n(42208),
                j = n(54578),
                w = n(62869);
            let y = (e, t) => {
                    if (!t || !t.trim()) return e;
                    let n = t.toLowerCase(),
                        l = e.toLowerCase();
                    if (!l.includes(n)) return e;
                    let o = [],
                        a = 0,
                        s = 0;
                    for (; a < e.length;) {
                        let t = l.indexOf(n, a);
                        if (-1 === t) {
                            o.push(e.slice(a));
                            break
                        }
                        t > a && o.push(e.slice(a, t)), o.push((0, r.jsx)("mark", {
                            className: "search-match rounded-sm bg-yellow-200 px-0 text-inherit",
                            children: e.slice(t, t + n.length)
                        }, s++)), a = t + n.length
                    }
                    return o
                },
                C = e => null !== e && (Array.isArray(e) ? e.some(e => C(e)) : "object" != typeof e || "[object Object]" !== Object.prototype.toString.call(e) || Object.values(e).some(e => C(e))),
                k = e => {
                    let {
                        data: t,
                        name: n,
                        level: a = 0,
                        isLast: s = !0,
                        treeData: i,
                        onMarkdownPreview: u,
                        onNodeClick: f,
                        expandedNodes: b,
                        setExpandedNodes: h,
                        path: m,
                        currentNode: F,
                        registerNodeRef: E,
                        showNullValues: _ = !1,
                        autoExpandChildren: S = !0,
                        maxDepth: A,
                        editable: D = !1,
                        onValueChange: T,
                        searchTerm: I,
                        showLineNumbers: O = !0,
                        compact: L = !1
                    } = e, [P, R] = (0, l.useState)(!1), [V, M] = (0, l.useState)(!1), B = (0, l.useRef)(null), z = (0, l.useRef)(t), W = (0, l.useRef)(null), Z = (0, l.useRef)(!1), {
                        selectedPath: K,
                        setSelectedPath: U,
                        setForceShowPdf: q,
                        setViewMode: J
                    } = (0, d.s)(), {
                        setSelectedTime: $,
                        incrementClickCounter: Q
                    } = (0, j.b)(), H = Array.isArray(t) ? "array" : null === t ? "null" : typeof t, G = null != t && ["object", "array"].includes(H) && Object.keys(t).length > 0, X = ("markdown" === n || "data" === n) && "string" === H, Y = b.has(m), ee = _ || "null" !== H, et = K && m === (0, o.u0)(K), en = (0, l.useMemo)(() => !!_ || !["object", "array"].includes(H) || null === t || C(t), [t, H, _]);
                    (0, l.useEffect)(() => {
                        !(!G || m.endsWith("bbox")) && !Z.current && ("root" === m || S) && (void 0 !== A && a > A || (h(e => {
                            if (e.has(m)) return e;
                            let t = new Set(e);
                            return t.add(m), t
                        }), Z.current = !0))
                    }, [G, m, h, S, A, a]), (0, l.useEffect)(() => {
                        if (E && W.current && (E(m, W.current), "object" == typeof t && null !== t)) {
                            var e, n, r;
                            if (null === (n = t._metadata) || void 0 === n ? void 0 : null === (e = n.bboxes) || void 0 === e ? void 0 : e.length)
                                for (let e of t._metadata.bboxes) {
                                    let t = null !== (r = e.page) && void 0 !== r ? r : 0;
                                    E("".concat(m, "_").concat(t), W.current)
                                }
                        }
                    }, [E, t, m]);
                    let er = () => {
                        h(e => {
                            let t = new Set(e);
                            return t.has(m) ? t.delete(m) : t.add(m), t
                        })
                    };
                    (0, l.useEffect)(() => {
                        z.current = t
                    }, [t]);
                    let el = (e, t) => {
                            switch (t) {
                                case "string":
                                    return e;
                                case "number": {
                                    let t = Number(e.trim());
                                    if (isNaN(t)) throw Error("Invalid number");
                                    return t
                                }
                                case "boolean": {
                                    let t = e.trim();
                                    if ("true" === t) return !0;
                                    if ("false" === t) return !1;
                                    throw Error("Must be 'true' or 'false'")
                                }
                                case "null":
                                    if ("null" === e.trim()) return null;
                                    throw Error("Must be 'null'");
                                default:
                                    throw Error("Cannot edit this type")
                            }
                        },
                        eo = e => {
                            if (!D || !T) return;
                            let t = e.currentTarget.textContent || "",
                                n = t;
                            "string" === H && t.startsWith('"') && t.endsWith('"') && (n = t.slice(1, -1));
                            try {
                                let e = el(n, H);
                                e !== z.current && T(m, e)
                            } catch (e) {
                                B.current && ("string" === H ? B.current.textContent = '"'.concat(z.current, '"') : "null" === H ? B.current.textContent = "null" : B.current.textContent = String(z.current)), console.error("Validation error:", e)
                            }
                        },
                        ea = e => {
                            "Enter" !== e.key || e.shiftKey ? "Escape" === e.key && (e.preventDefault(), B.current && ("string" === H ? B.current.textContent = '"'.concat(z.current, '"') : "null" === H ? B.current.textContent = "null" : B.current.textContent = String(z.current)), e.currentTarget.blur()) : (e.preventDefault(), e.currentTarget.blur())
                        },
                        es = e => {
                            e.preventDefault();
                            let t = e.clipboardData.getData("text/plain");
                            document.execCommand("insertText", !1, t)
                        },
                        ei = (e, t) => {
                            var n, r, l, o, a, s, i, u;
                            if ("root" === e) return null;
                            let c = e.replace(/\[(\d+)\]/g, ".$1").split(".");
                            c.shift();
                            let d = t;
                            for (let e = 0; e < c.length; e++) {
                                let t = c[e];
                                if (!d) break;
                                d = d[t]
                            }
                            if ((null == d ? void 0 : null === (r = d._metadata) || void 0 === r ? void 0 : null === (n = r.bboxes) || void 0 === n ? void 0 : n.length) > 0) return {
                                bboxes: d._metadata.bboxes,
                                pageNumber: null !== (s = d._metadata.bboxes[0].page) && void 0 !== s ? s : 0,
                                annotation_ids: d._metadata.annotation_ids
                            };
                            let f = c[c.length - 1],
                                b = c.slice(0, -1),
                                h = t;
                            for (let e = 0; e < b.length && h; e++) h = h[b[e]];
                            let m = "".concat(f, "_metadata");
                            if ((null == h ? void 0 : null === (o = h[m]) || void 0 === o ? void 0 : null === (l = o.bboxes) || void 0 === l ? void 0 : l.length) > 0) return {
                                bboxes: h[m].bboxes,
                                pageNumber: null !== (i = h[m].bboxes[0].page) && void 0 !== i ? i : 0,
                                annotation_ids: h[m].annotation_ids
                            };
                            let x = [...c],
                                p = x.pop();
                            x.push("".concat(p, "_metadata"));
                            let v = t;
                            for (let e = 0; e < x.length && v; e++) v = v[x[e]];
                            return (null == v ? void 0 : null === (a = v.bboxes) || void 0 === a ? void 0 : a.length) > 0 ? {
                                bboxes: v.bboxes,
                                pageNumber: null !== (u = v.bboxes[0].page) && void 0 !== u ? u : 0,
                                annotation_ids: v.annotation_ids
                            } : null
                        },
                        eu = () => {
                            var e, r;
                            if (G && er(), "root" === m || !i) return;
                            if (f) try {
                                f(m, t)
                            } catch (e) {}
                            if ("start_time" === n || "end_time" === n) {
                                let e = parseFloat(t);
                                if (!isNaN(e)) {
                                    $(e), Q();
                                    return
                                }
                            }
                            let l = ei(m, i);
                            if (null == l ? void 0 : null === (e = l.bboxes) || void 0 === e ? void 0 : e.length) {
                                let e = null !== (r = l.bboxes[0].page) && void 0 !== r ? r : 0;
                                if (m.includes(".")) {
                                    let e = m.split(".");
                                    for (let t = 1; t < e.length; t++) {
                                        let n = e.slice(0, t).join(".");
                                        h(e => new Set(e).add(n))
                                    }
                                }
                                U(null), q(!1), setTimeout(() => {
                                    U("".concat(m, "_").concat(e)), q(!0)
                                }, 100)
                            }
                        };
                    if (!ee || !en) return null;
                    let ec = "inline-flex size-3.5 shrink-0 items-center justify-center text-slate-400",
                        ed = L ? "rounded pl-0 pr-2" : "rounded pl-1 pr-6",
                        ef = (0, r.jsxs)("div", {
                            className: "relative h-auto font-mono leading-[20px] tracking-normal",
                            children: [(0, r.jsxs)("div", {
                                className: "group flex items-start",
                                children: [O && (0, r.jsx)("div", {
                                    className: "flex shrink-0 items-center text-slate-500",
                                    children: (0, r.jsx)("span", {
                                        className: "json-line-number mr-2 min-w-[18px] select-none text-right text-[10px]"
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "relative min-w-0 flex-1",
                                    children: (0, r.jsxs)("div", {
                                        ref: W,
                                        className: (0, c.cn)("relative flex min-w-0 scroll-mt-8 items-center space-x-1 transition-colors duration-200 hover:bg-slate-100", ed, G && "cursor-pointer", et && "bg-blue-300/10 outline outline-2 outline-blue-700"),
                                        style: {
                                            marginLeft: a > 0 ? "".concat(1.5 * a, "rem") : "0"
                                        },
                                        "data-path": m,
                                        "data-testid": "tree-node-".concat(m),
                                        role: G ? "button" : void 0,
                                        tabIndex: G ? 0 : void 0,
                                        "aria-expanded": G ? Y : void 0,
                                        onMouseEnter: () => M(!0),
                                        onMouseLeave: () => M(!1),
                                        onClick: eu,
                                        onKeyDown: G ? e => {
                                            G && ("Enter" === e.key || " " === e.key) && (e.preventDefault(), eu())
                                        } : void 0,
                                        children: [G && (0, r.jsx)("span", {
                                            className: ec,
                                            children: Y ? (0, r.jsx)(x.Z, {
                                                className: "size-3"
                                            }) : (0, r.jsx)(p.Z, {
                                                className: "size-3"
                                            })
                                        }), (0, r.jsxs)("span", {
                                            className: "overflow-auto break-all",
                                            children: [n && (0, r.jsxs)("span", {
                                                className: "text-[#a31515]",
                                                children: ['"', y(n, I), '"']
                                            }), n && (0, r.jsx)("span", {
                                                className: "text-[#446ccf]",
                                                children: ": "
                                            }), (() => {
                                                let e = D && ["string", "number", "boolean", "null"].includes(H);
                                                switch (H) {
                                                    case "string":
                                                        if ((0, c.CB)(t)) {
                                                            let {
                                                                truncated: n,
                                                                isTruncated: l
                                                            } = (0, c.hL)(t, 40);
                                                            if (l && !e) return (0, r.jsxs)("span", {
                                                                className: "text-[#0451a5]",
                                                                children: ['"', y(n, I), '"']
                                                            })
                                                        }
                                                        return (0, r.jsxs)(r.Fragment, {
                                                            children: [(0, r.jsx)("span", {
                                                                className: "text-[#0451a5]",
                                                                children: '"'
                                                            }), (0, r.jsx)("span", {
                                                                ref: e ? B : null,
                                                                className: (0, c.cn)("text-[#0451a5]", e && "cursor-text outline-none"),
                                                                contentEditable: e,
                                                                suppressContentEditableWarning: e,
                                                                onBlur: e ? eo : void 0,
                                                                onKeyDown: e ? ea : void 0,
                                                                onPaste: e ? es : void 0,
                                                                spellCheck: !1,
                                                                children: e ? t : y(String(t), I)
                                                            }), (0, r.jsx)("span", {
                                                                className: "text-[#0451a5]",
                                                                children: '"'
                                                            })]
                                                        });
                                                    case "number":
                                                        return (0, r.jsx)("span", {
                                                            ref: e ? B : null,
                                                            className: (0, c.cn)("text-[#098658]", e && "cursor-text outline-none"),
                                                            contentEditable: e,
                                                            suppressContentEditableWarning: e,
                                                            onBlur: e ? eo : void 0,
                                                            onKeyDown: e ? ea : void 0,
                                                            onPaste: e ? es : void 0,
                                                            spellCheck: !1,
                                                            children: e ? t : y(String(t), I)
                                                        });
                                                    case "boolean":
                                                        return (0, r.jsx)("span", {
                                                            ref: e ? B : null,
                                                            className: (0, c.cn)("text-[#0451a5]", e && "cursor-text outline-none"),
                                                            contentEditable: e,
                                                            suppressContentEditableWarning: e,
                                                            onBlur: e ? eo : void 0,
                                                            onKeyDown: e ? ea : void 0,
                                                            onPaste: e ? es : void 0,
                                                            spellCheck: !1,
                                                            children: e ? t.toString() : y(t.toString(), I)
                                                        });
                                                    case "null":
                                                        return (0, r.jsx)("span", {
                                                            ref: e ? B : null,
                                                            className: (0, c.cn)("text-[#0451a5]", e && "cursor-text outline-none"),
                                                            contentEditable: e,
                                                            suppressContentEditableWarning: e,
                                                            onBlur: e ? eo : void 0,
                                                            onKeyDown: e ? ea : void 0,
                                                            onPaste: e ? es : void 0,
                                                            spellCheck: !1,
                                                            children: e ? "null" : y("null", I)
                                                        });
                                                    case "object":
                                                        return (0, r.jsx)("span", {
                                                            className: "text-[#319331]",
                                                            children: Y ? "{" : (0, r.jsx)("span", {
                                                                children: "{ ... }"
                                                            })
                                                        });
                                                    case "array":
                                                        return (0, r.jsx)("span", {
                                                            className: "text-[#319331]",
                                                            children: Y ? "[" : (0, r.jsx)("span", {
                                                                children: "[ ... ]"
                                                            })
                                                        });
                                                    default:
                                                        return null
                                                }
                                            })(), !Y && !s && (0, r.jsx)("span", {
                                                className: "text-slate-400",
                                                children: ","
                                            })]
                                        }), !D && (V || P) && (0, r.jsx)("button", {
                                            onClick: e => {
                                                let n;
                                                if (e.stopPropagation(), "string" === H) n = t;
                                                else if ("object" === H || "array" === H) try {
                                                    n = JSON.stringify(t, null, 2)
                                                } catch (e) {
                                                    n = String(t)
                                                } else n = String(t);
                                                navigator.clipboard.writeText(n), R(!0), setTimeout(() => R(!1), 2e3)
                                            },
                                            className: "absolute right-1 top-1 px-0 transition-opacity focus:outline-none",
                                            children: P ? (0, r.jsx)(v.Z, {
                                                className: "size-4 text-emerald-500"
                                            }) : (0, r.jsx)(g.Z, {
                                                className: "size-3.5 text-slate-400"
                                            })
                                        }), !D && X && V && (0, r.jsxs)(w.z, {
                                            size: "sm",
                                            onClick: e => {
                                                if (e.stopPropagation(), X) {
                                                    let e = "".concat(t);
                                                    u(e = (e = e.replace(/<Table id="(\d+)"\/>/g, (e, t) => {
                                                        var n, r;
                                                        let l = parseInt(t, 10);
                                                        return (null == F ? void 0 : null === (r = F.tables) || void 0 === r ? void 0 : null === (n = r[l]) || void 0 === n ? void 0 : n.data) || e
                                                    })).replace(/<Chart id="(\d+)"\/>/g, (e, t) => {
                                                        var n, r;
                                                        let l = parseInt(t, 10);
                                                        return (null == F ? void 0 : null === (r = F.charts) || void 0 === r ? void 0 : null === (n = r[l]) || void 0 === n ? void 0 : n.data) || e
                                                    }))
                                                }
                                            },
                                            className: "absolute right-2 top-2",
                                            children: [(0, r.jsx)(N.Z, {
                                                className: "mr-2 size-4"
                                            }), "Preview Markdown"]
                                        })]
                                    })
                                })]
                            }), Y && G && (0, r.jsxs)("div", {
                                className: "relative",
                                children: [(0, r.jsx)("div", {
                                    className: "relative",
                                    children: Object.entries(t).map((e, n, l) => {
                                        let [o, s] = e, c = Array.isArray(t) ? "[".concat(o, "]") : ".".concat(o), d = "".concat(m).concat(c);
                                        return (0, r.jsx)(k, {
                                            data: s,
                                            name: "array" === H ? void 0 : o,
                                            level: a + 1,
                                            isLast: n === l.length - 1,
                                            onMarkdownPreview: u,
                                            onNodeClick: f,
                                            expandedNodes: b,
                                            setExpandedNodes: h,
                                            path: d,
                                            currentNode: t,
                                            treeData: i,
                                            registerNodeRef: E,
                                            showNullValues: _,
                                            autoExpandChildren: S,
                                            maxDepth: A,
                                            editable: D,
                                            onValueChange: T,
                                            searchTerm: I,
                                            showLineNumbers: O,
                                            compact: L
                                        }, d)
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "group flex items-start",
                                    children: [O && (0, r.jsx)("div", {
                                        className: "flex shrink-0 items-center text-slate-500",
                                        children: (0, r.jsx)("span", {
                                            className: "json-line-number mr-2 min-w-[18px] select-none text-right text-[10px]"
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "relative min-w-0 flex-1",
                                        children: (0, r.jsxs)("div", {
                                            className: (0, c.cn)("relative flex min-w-0 cursor-pointer items-center space-x-1 transition-colors duration-200 hover:bg-slate-100", ed, et && "bg-blue-300/10 outline outline-2 outline-blue-700"),
                                            style: {
                                                marginLeft: a > 0 ? "".concat(1.5 * a, "rem") : "0"
                                            },
                                            onClick: e => {
                                                e.stopPropagation(), h(e => {
                                                    if (!e.has(m)) return e;
                                                    let t = new Set(e);
                                                    return t.delete(m), t
                                                })
                                            },
                                            children: [G ? (0, r.jsx)("span", {
                                                className: ec,
                                                "aria-hidden": !0
                                            }) : null, (0, r.jsxs)("span", {
                                                className: "text-[#319331]",
                                                children: ["object" === H ? "}" : "]", !s && (0, r.jsx)("span", {
                                                    className: "text-slate-400",
                                                    children: ","
                                                })]
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        });
                    return "root" === m ? (0, r.jsx)("div", {
                        className: "json-viewer-container",
                        children: ef
                    }) : ef
                };
            var F = n(53024),
                E = (0, l.forwardRef)(function(e, t) {
                    let {
                        uri: n,
                        jsonData: x,
                        viewMode: p,
                        scrollToPath: v,
                        showNullValues: g = !1,
                        withDashedBorder: N = !1,
                        withSubtleBg: j = !1,
                        containerClassName: w,
                        onNodeClick: y,
                        collapseChildrenByDefault: C = !1,
                        embeddedInScroll: E = !1,
                        maxDepth: _,
                        editable: S = !1,
                        onChange: A,
                        onValidationError: D,
                        searchTerm: T,
                        searchStep: I,
                        onCursorChange: O,
                        showLineNumbers: L = !0,
                        compact: P
                    } = e, R = (0, l.useRef)(null), V = null != P ? P : E && !L;
                    (0, l.useImperativeHandle)(t, () => ({
                        scrollToKey(e) {
                            var t;
                            null === (t = R.current) || void 0 === t || t.scrollToKey(e)
                        }
                    }));
                    let M = (0, d.s)(e => e.selectedPath),
                        B = M || v || null,
                        [z, W] = (0, l.useState)(null),
                        [Z, K] = (0, l.useState)(!0),
                        [U, q] = (0, l.useState)([]),
                        [J, $] = (0, l.useState)(() => new Set(C ? ["root"] : ["root", "root.0"])),
                        Q = (0, l.useRef)(null),
                        H = (0, l.useRef)(new Map),
                        G = (0, l.useRef)(null),
                        X = (0, l.useRef)(null);
                    (0, l.useEffect)(() => {
                        if (void 0 !== x) {
                            W(x), K(!1);
                            return
                        }
                        n ? (0, u.E)(n).then(e => {
                            W(e), K(!1)
                        }).catch(e => {
                            console.error(e), i.Am.error("Error", {
                                description: "Failed to fetch response data"
                            }), K(!1)
                        }) : K(!1)
                    }, [n, x]);
                    let Y = (0, l.useCallback)((e, t) => {
                            t && H.current.set(e, t)
                        }, []),
                        ee = (0, l.useCallback)(e => e && (0, o.u0)(e) || "root", []),
                        et = (0, l.useCallback)(e => {
                            if (E) {
                                e.scrollIntoView({
                                    block: "center",
                                    behavior: "smooth"
                                }), e.classList.add("bg-yellow-100", "dark:bg-yellow-900/30"), setTimeout(() => {
                                    e.classList.remove("bg-yellow-100", "dark:bg-yellow-900/30")
                                }, 2e3);
                                return
                            }
                            if (!Q.current) return;
                            let t = Q.current.querySelector("[data-radix-scroll-area-viewport]");
                            if (!t) return;
                            X.current && X.current !== e && X.current.classList.remove("bg-blue-300/10", "outline", "outline-blue-700", "mr-2", "z-10"), X.current = e, e.classList.add("bg-blue-300/10", "outline", "outline-blue-700", "mr-2", "z-10");
                            let n = e.getBoundingClientRect(),
                                r = t.getBoundingClientRect(),
                                l = n.top - r.top + t.scrollTop - r.height / 2 + n.height / 2,
                                o = t.scrollTop,
                                a = l - o,
                                s = performance.now();
                            requestAnimationFrame(function e(n) {
                                let r = Math.min((n - s) / 300, 1);
                                t && (t.scrollTop = o + a * (r < .5 ? 4 * r * r * r : 1 - Math.pow(-2 * r + 2, 3) / 2)), r < 1 && requestAnimationFrame(e)
                            })
                        }, [E]),
                        en = (0, l.useCallback)(e => {
                            if (!e) return !1;
                            let t = H.current.get(e);
                            if (t) return et(t), !0;
                            let n = e.startsWith("root.") ? e : "root.".concat(e),
                                r = e.startsWith("root.") ? e.substring(5) : e,
                                l = [e, n, r];
                            for (let e of l) {
                                let t = H.current.get(e);
                                if (t) return et(t), !0
                            }
                            for (let e of Array.from(H.current.values())) {
                                let t = e.getAttribute("data-path");
                                if (t && l.some(e => t === e || t.includes(e))) return et(e), !0
                            }
                            return !1
                        }, [et]);
                    (0, l.useEffect)(() => {
                        C && $(new Set(["root"]))
                    }, [C, z]), (0, l.useEffect)(() => {
                        let e = null == T ? void 0 : T.trim().toLowerCase();
                        if (!e || !z) return;
                        let t = [],
                            n = (r, l) => {
                                if (null == r) return "null".includes(e) || String(r).toLowerCase().includes(e);
                                if ("object" != typeof r) return String(r).toLowerCase().includes(e);
                                let o = !1;
                                if (Array.isArray(r)) r.forEach((e, t) => {
                                    n(e, "".concat(l, "[").concat(t, "]")) && (o = !0)
                                });
                                else
                                    for (let [a, s] of Object.entries(r)) {
                                        let r = a.toLowerCase().includes(e),
                                            i = "".concat(l, ".").concat(a),
                                            u = n(s, i);
                                        r && null !== s && "object" == typeof s && t.push(i), (r || u) && (o = !0)
                                    }
                                return o && t.push(l), o
                            };
                        n(z, "root"), t.length > 0 && $(e => {
                            let n = new Set(e);
                            for (let e of t) n.add(e);
                            return n
                        })
                    }, [T, z]), (0, l.useEffect)(() => {
                        if (!(null == T ? void 0 : T.trim())) return;
                        let e = setTimeout(() => {
                            var e;
                            let t = E ? Q.current : null === (e = Q.current) || void 0 === e ? void 0 : e.querySelector("[data-radix-scroll-area-viewport]");
                            if (!t) return;
                            let n = t.querySelector(".search-match");
                            n && n.scrollIntoView({
                                block: "center",
                                behavior: "smooth"
                            })
                        }, 60);
                        return () => clearTimeout(e)
                    }, [T, J, E]), (0, l.useEffect)(() => {
                        B !== G.current && B && (G.current = B, "json" === p && !Z && z && en(ee(B)))
                    }, [B, p, Z, z, ee, en]), (0, l.useEffect)(() => {
                        if ("markdown" === p && z) {
                            var e;
                            let t = null !== (e = null == z ? void 0 : z.response) && void 0 !== e ? e : z,
                                n = (Array.isArray(null == t ? void 0 : t.pages) && t.pages.length > 0 ? t.pages : (null == t ? void 0 : t.markdown_content) || (null == t ? void 0 : t.markdownContent) ? [t] : Array.isArray(t) ? t : [t]).map(e => (null == e ? void 0 : e.markdown_content) || (null == e ? void 0 : e.markdownContent) || "").filter(e => e.trim().length > 0);
                            q(n.length > 0 ? n : ["No markdown content found in the response."])
                        } else q([])
                    }, [p, z]);
                    let er = (0, l.useCallback)(e => {
                            q([e])
                        }, [p]),
                        el = (0, l.useCallback)((e, t) => {
                            if (S && A && z) try {
                                let n = e.replace(/\[(\d+)\]/g, ".$1").split(".").filter(e => "root" !== e);
                                if (0 === n.length) {
                                    A(t);
                                    return
                                }
                                let r = JSON.parse(JSON.stringify(z)),
                                    l = r;
                                for (let t = 0; t < n.length - 1; t++) {
                                    let r = n[t];
                                    if (null == (l = l[isNaN(Number(r)) ? r : Number(r)])) {
                                        D && D("Cannot navigate path: ".concat(e));
                                        return
                                    }
                                }
                                let o = n[n.length - 1];
                                l[isNaN(Number(o)) ? o : Number(o)] = t, W(r), A(r)
                            } catch (e) {
                                console.error("Error updating value:", e), D && D(e instanceof Error ? e.message : "Failed to update value")
                            }
                        }, [S, A, z, D]);
                    return Z ? (0, r.jsx)("div", {
                        className: (0, c.cn)("mx-0 mb-0 grid h-[220px] place-items-center rounded-md border border-border/40", N && "border-dashed", j && "bg-slate-400/10", w),
                        children: (0, r.jsxs)("div", {
                            className: "flex flex-col items-center gap-2",
                            children: [(0, r.jsx)(b.O, {
                                className: "size-5 rounded"
                            }), (0, r.jsx)(b.O, {
                                className: "h-4 w-40"
                            })]
                        })
                    }) : z ? (0, r.jsx)("div", {
                        className: (0, c.cn)(E ? "w-full" : "size-full", "json" === p && "pb-0"),
                        children: "markdown" === p ? (0, r.jsx)("div", {
                            className: "flex h-full flex-col overflow-auto",
                            children: U.map((e, t) => (0, r.jsx)("div", {
                                className: "mx-0 mb-0 flex flex-col rounded-lg border shadow-md",
                                children: (0, r.jsx)(m.Z, {
                                    markdownContent: e
                                })
                            }, t))
                        }) : "form" === p ? (0, r.jsx)(F.Z, {
                            value: z,
                            onChange: e => {
                                W(e), null == A || A(e)
                            },
                            fullData: z,
                            highlightedPath: M,
                            showNullValues: g,
                            onFieldFocus: (e, t) => {
                                var n, r;
                                if (null == t ? void 0 : null === (n = t.bboxes) || void 0 === n ? void 0 : n[0]) {
                                    let n = null !== (r = t.bboxes[0].page) && void 0 !== r ? r : 0,
                                        l = (0, a.BV)(e, n),
                                        {
                                            setSelectedPath: o,
                                            setForceShowPdf: s
                                        } = d.s.getState();
                                    o(null), setTimeout(() => {
                                        o(l), s(!0)
                                    }, 100)
                                }
                            }
                        }) : (0, r.jsx)("div", {
                            className: (0, c.cn)("relative mx-0 mb-0", !E && "h-full"),
                            children: S ? (0, r.jsx)("div", {
                                className: (0, c.cn)("h-full min-h-[400px] overflow-hidden rounded-md", N && "border border-dashed", j && "bg-slate-400/10", w),
                                children: (0, r.jsx)(h.VT, {
                                    ref: R,
                                    value: z,
                                    onChange: e => {
                                        W(e), null == A || A(e)
                                    },
                                    onValidationError: D,
                                    className: "h-full",
                                    searchTerm: T,
                                    searchStep: I,
                                    onCursorChange: O
                                })
                            }) : E ? (0, r.jsx)("div", {
                                ref: Q,
                                className: (0, c.cn)(V ? "px-0 py-0" : "rounded-md p-4 pt-2", N && "border border-dashed", j && "bg-slate-400/10", w),
                                children: (0, r.jsx)(k, {
                                    data: z,
                                    treeData: z,
                                    onMarkdownPreview: er,
                                    onNodeClick: y,
                                    expandedNodes: J,
                                    setExpandedNodes: $,
                                    path: "root",
                                    showNullValues: g,
                                    registerNodeRef: Y,
                                    autoExpandChildren: !C,
                                    maxDepth: _,
                                    editable: !1,
                                    onValueChange: el,
                                    searchTerm: T,
                                    showLineNumbers: L,
                                    compact: V
                                })
                            }) : (0, r.jsx)(f.x, {
                                ref: Q,
                                className: (0, c.cn)("h-full rounded-md p-4 pt-2", N && "border border-dashed", j && "bg-slate-400/10", w),
                                children: (0, r.jsx)(k, {
                                    data: z,
                                    treeData: z,
                                    onMarkdownPreview: er,
                                    onNodeClick: y,
                                    expandedNodes: J,
                                    setExpandedNodes: $,
                                    path: "root",
                                    showNullValues: g,
                                    registerNodeRef: Y,
                                    autoExpandChildren: !C,
                                    maxDepth: _,
                                    editable: !1,
                                    onValueChange: el,
                                    searchTerm: T,
                                    showLineNumbers: L
                                })
                            })
                        })
                    }) : (0, r.jsx)("div", {
                        className: (0, c.cn)("mx-0 mb-0 flex h-[220px] items-center justify-center rounded-md border border-border/40", N && "border-dashed", j && "bg-slate-400/10", w),
                        children: (0, r.jsxs)("div", {
                            className: "flex flex-col items-center gap-2 text-center text-muted-foreground",
                            children: [(0, r.jsx)(s.Z, {
                                className: "size-5"
                            }), (0, r.jsx)("span", {
                                children: "No data available"
                            })]
                        })
                    })
                })
        },
        53024: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return p
                }
            });
            var r = n(57437),
                l = n(2265),
                o = n(89682),
                a = n(94508),
                s = n(95186),
                i = n(26815),
                u = n(1828),
                c = n(76818);
            let d = e => "object" == typeof e && null !== e && !Array.isArray(e),
                f = e => null === e || ["string", "number", "boolean"].includes(typeof e),
                b = (e, t, n) => {
                    if (0 === t.length) return n;
                    let [r, ...l] = t, o = Array.isArray(e) ? [...e] : {
                        ...e
                    };
                    return 0 === l.length ? o[r] = n : o[r] = b(o[r], l, n), o
                },
                h = (e, t) => {
                    if ("number" == typeof t) {
                        let t = Number(e);
                        return Number.isFinite(t) ? t : null
                    }
                    return "boolean" == typeof t ? "true" === e.toLowerCase() : null === t && "null" === e.trim().toLowerCase() ? null : e
                },
                m = e => null !== e && (Array.isArray(e) ? e.some(e => m(e)) : !d(e) || Object.values(e).some(e => m(e)));

            function x(e) {
                let {
                    label: t,
                    value: n,
                    path: b,
                    onChange: p,
                    fullData: v,
                    highlightedPath: g,
                    onFieldFocus: N,
                    showNullValues: j = !1
                } = e, w = (0, l.useRef)(null), y = (0, l.useMemo)(() => {
                    if (!g) return !1;
                    let e = (0, o.s2)(g);
                    return (0, o.cO)(b, e)
                }, [g, b]);
                (0, l.useEffect)(() => {
                    y && w.current && w.current.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    })
                }, [y]);
                let C = (0, l.useMemo)(() => v && 0 !== b.length ? (0, o.cQ)(b, v) : null, [v, b]),
                    k = (0, l.useCallback)(() => {
                        N && b.length > 0 && N(b, C)
                    }, [N, b, C]);
                if (!j && !m(n)) return null;
                if (d(n)) {
                    let e = 0 === b.length,
                        l = Object.entries(n).filter(e => {
                            let [t, n] = e;
                            return !t.endsWith("_metadata") && (j || m(n))
                        });
                    return (0, r.jsxs)("div", {
                        ref: w,
                        className: (0, a.cn)(e ? "space-y-3" : "space-y-3 rounded-[10px] border border-border/70 p-3", y && "border-[#D2E9FF] bg-[#F5FAFF]"),
                        onClick: k,
                        children: [!e && (0, r.jsx)("div", {
                            className: "text-xs font-semibold text-muted-foreground",
                            children: t
                        }), l.map(e => {
                            let [t, n] = e;
                            return (0, r.jsx)(x, {
                                label: t,
                                value: n,
                                path: [...b, t],
                                onChange: p,
                                fullData: v,
                                highlightedPath: g,
                                onFieldFocus: N,
                                showNullValues: j
                            }, "".concat(b.join("."), ".").concat(t))
                        })]
                    })
                }
                return Array.isArray(n) ? n.every(e => f(e)) ? (0, r.jsxs)("div", {
                    ref: w,
                    className: (0, a.cn)("space-y-2", y && "rounded-[10px] border border-[#D2E9FF] bg-[#F5FAFF] p-2"),
                    onClick: k,
                    children: [(0, r.jsx)(i._, {
                        className: "text-xs font-medium text-muted-foreground",
                        children: t
                    }), (0, r.jsx)(c.g, {
                        value: n.map(e => String(null != e ? e : "")).join("\n"),
                        onChange: e => {
                            var t;
                            let r = e.target.value.split("\n"),
                                l = null !== (t = n.find(e => null != e)) && void 0 !== t ? t : n[0];
                            p(b, void 0 === l ? r : r.map(e => h(e, l)))
                        },
                        className: "min-h-24 rounded-[10px] text-sm focus-visible:border-[#D2E9FF] focus-visible:ring-0"
                    }), (0, r.jsx)("p", {
                        className: "text-xs text-muted-foreground",
                        children: "One item per line."
                    })]
                }) : (0, r.jsxs)("div", {
                    ref: w,
                    className: (0, a.cn)("space-y-3 rounded-[10px] border border-border/70 p-3", y && "border-[#D2E9FF] bg-[#F5FAFF]"),
                    onClick: k,
                    children: [(0, r.jsx)("div", {
                        className: "text-xs font-semibold text-muted-foreground",
                        children: t
                    }), n.map((e, t) => (0, r.jsx)(x, {
                        label: "Item ".concat(t + 1),
                        value: e,
                        path: [...b, t],
                        onChange: p,
                        fullData: v,
                        highlightedPath: g,
                        onFieldFocus: N,
                        showNullValues: j
                    }, "".concat(b.join("."), ".").concat(t)))]
                }) : "boolean" == typeof n ? (0, r.jsxs)("div", {
                    ref: w,
                    className: (0, a.cn)("flex items-center justify-between rounded-[10px] border border-border/60 p-3", y && "border-[#D2E9FF] bg-[#F5FAFF]"),
                    onClick: k,
                    children: [(0, r.jsx)(i._, {
                        className: "text-sm font-medium",
                        children: t
                    }), (0, r.jsx)(u.r, {
                        checked: n,
                        onCheckedChange: e => p(b, e)
                    })]
                }) : "number" == typeof n ? (0, r.jsxs)("div", {
                    ref: w,
                    className: (0, a.cn)("space-y-2", y && "rounded-[10px] border border-[#D2E9FF] bg-[#F5FAFF] p-2"),
                    onClick: k,
                    children: [(0, r.jsx)(i._, {
                        className: "text-xs font-medium text-muted-foreground",
                        children: t
                    }), (0, r.jsx)(s.I, {
                        type: "number",
                        value: n,
                        onChange: e => p(b, Number(e.target.value)),
                        className: "rounded-[10px] text-sm focus-visible:border-[#D2E9FF] focus-visible:ring-0"
                    })]
                }) : (0, r.jsxs)("div", {
                    ref: w,
                    className: (0, a.cn)("space-y-2", y && "rounded-[10px] border border-[#D2E9FF] bg-[#F5FAFF] p-2"),
                    onClick: k,
                    children: [(0, r.jsx)(i._, {
                        className: "text-xs font-medium text-muted-foreground",
                        children: t
                    }), (0, r.jsx)(s.I, {
                        value: null != n ? n : "",
                        onChange: e => p(b, e.target.value),
                        className: "rounded-[10px] text-sm focus-visible:border-[#D2E9FF] focus-visible:ring-0"
                    })]
                })
            }

            function p(e) {
                let {
                    value: t,
                    onChange: n,
                    fullData: l,
                    highlightedPath: o,
                    onFieldFocus: a,
                    showNullValues: s = !1
                } = e;
                return (0, r.jsx)("div", {
                    className: "h-full overflow-auto p-4",
                    children: (0, r.jsx)("div", {
                        className: "space-y-4",
                        children: (0, r.jsx)(x, {
                            label: "Response",
                            value: t,
                            path: [],
                            onChange: (e, r) => {
                                n(b(t, e, r))
                            },
                            fullData: null != l ? l : t,
                            highlightedPath: o,
                            onFieldFocus: a,
                            showNullValues: s
                        })
                    })
                })
            }
        },
        26815: function(e, t, n) {
            n.d(t, {
                _: function() {
                    return u
                }
            });
            var r = n(57437),
                l = n(2265),
                o = n(6394),
                a = n(77712),
                s = n(94508);
            let i = (0, a.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
                u = l.forwardRef((e, t) => {
                    let {
                        className: n,
                        ...l
                    } = e;
                    return (0, r.jsx)(o.f, {
                        ref: t,
                        className: (0, s.cn)(i(), n),
                        ...l
                    })
                });
            u.displayName = o.f.displayName
        },
        93022: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return o
                }
            });
            var r = n(57437),
                l = n(94508);

            function o(e) {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, l.cn)("animate-pulse rounded-md bg-primary/10", t),
                    ...n
                })
            }
        },
        1828: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return s
                }
            });
            var r = n(57437),
                l = n(2265),
                o = n(50721),
                a = n(94508);
            let s = l.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, r.jsx)(o.fC, {
                    className: (0, a.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", n),
                    ...l,
                    ref: t,
                    children: (0, r.jsx)(o.bU, {
                        className: (0, a.cn)("pointer-events-none block size-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")
                    })
                })
            });
            s.displayName = o.fC.displayName
        },
        76818: function(e, t, n) {
            n.d(t, {
                g: function() {
                    return a
                }
            });
            var r = n(57437),
                l = n(2265),
                o = n(94508);
            let a = l.forwardRef((e, t) => {
                let {
                    className: n,
                    disableFocusRing: l = !1,
                    ...a
                } = e;
                return (0, r.jsx)("textarea", {
                    className: (0, o.cn)("flex min-h-[60px] w-full rounded-[10px] border border-border bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", l ? "focus-visible:shadow-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0" : "focus-visible:ring-1 focus-visible:ring-ring", n),
                    ref: t,
                    ...a
                })
            });
            a.displayName = "Textarea"
        },
        54578: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return r
                }
            });
            let r = (0, n(59625).Ue)(e => ({
                selectedTime: null,
                selectedTimeId: null,
                clickCounter: 0,
                setSelectedTime: t => {
                    e({
                        selectedTime: t
                    })
                },
                setSelectedTimeId: t => {
                    e({
                        selectedTimeId: t
                    })
                },
                incrementClickCounter: () => {
                    e(e => ({
                        clickCounter: e.clickCounter + 1
                    }))
                },
                resetMediaViewerOptions: () => e({
                    selectedTime: null,
                    selectedTimeId: null,
                    clickCounter: 0
                })
            }))
        },
        93474: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return r
                }
            });
            let r = (0, n(59625).Ue)(e => ({
                selectedPath: null,
                showBoundingBoxes: !0,
                showNullValues: !1,
                forceShowPdf: !1,
                viewMode: "json",
                setSelectedPath: t => e({
                    selectedPath: t
                }),
                setShowBoundingBoxes: t => e({
                    showBoundingBoxes: t
                }),
                setShowNullValues: t => e({
                    showNullValues: t
                }),
                setForceShowPdf: t => e({
                    forceShowPdf: t
                }),
                setViewMode: t => e({
                    viewMode: t
                }),
                resetSelection: () => e({
                    selectedPath: null,
                    forceShowPdf: !1
                })
            }))
        },
        12019: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return l
                },
                j: function() {
                    return o
                }
            });
            var r = n(83464);
            async function l(e) {
                var t, n;
                let l = await r.default.get(e);
                return null !== (n = null === (t = l.data) || void 0 === t ? void 0 : t.response) && void 0 !== n ? n : l.data
            }
            async function o(e, t) {
                let n = new Blob([JSON.stringify(await l(e), null, 2)], {
                        type: "application/json"
                    }),
                    r = URL.createObjectURL(n),
                    o = document.createElement("a");
                o.href = r, o.download = t, document.body.appendChild(o), o.click(), setTimeout(() => {
                    document.body.removeChild(o), URL.revokeObjectURL(r)
                }, 100)
            }
        },
        76736: function(e, t, n) {
            n.d(t, {
                Iu: function() {
                    return o
                },
                rC: function() {
                    return r
                },
                u0: function() {
                    return l
                }
            });
            let r = e => {
                    let t = [],
                        n = {},
                        r = {};
                    if (!e) return {
                        extractedBoxes: t,
                        boxesByPage: n,
                        boxIdToPathMap: r
                    };
                    let l = function(e) {
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        Object.entries(e).forEach(e => {
                            var a;
                            let [s, i] = e;
                            if (!i || "object" != typeof i) return;
                            let u = o ? "".concat(o, ".").concat(s) : s;
                            s.endsWith("metadata") && (null == i ? void 0 : null === (a = i.bboxes) || void 0 === a ? void 0 : a.length) && i.bboxes.forEach((e, l) => {
                                var o, a;
                                if ((null == e ? void 0 : null === (a = e.bbox) || void 0 === a ? void 0 : null === (o = a.xywh) || void 0 === o ? void 0 : o.length) === 4) {
                                    let o = e.bbox.xywh,
                                        a = void 0 !== e.page ? e.page : 0,
                                        s = "".concat(u, ".bboxes[").concat(l, "]"),
                                        i = {
                                            id: s.split("_metadata")[0],
                                            x: o[0],
                                            y: o[1],
                                            width: o[2],
                                            height: o[3],
                                            content: e.content || "",
                                            page: a,
                                            path: s
                                        };
                                    r[s] = s, t.push(i), n[a] || (n[a] = []), n[a].push(i)
                                }
                            }), "object" != typeof i || Array.isArray(i) ? Array.isArray(i) && i.forEach((e, t) => {
                                e && "object" == typeof e && l(e, "".concat(u, "[").concat(t, "]"))
                            }) : l(i, u)
                        })
                    };
                    return l(e), {
                        extractedBoxes: t,
                        boxesByPage: n,
                        boxIdToPathMap: r
                    }
                },
                l = e => {
                    if (!e) return null;
                    let t = e.lastIndexOf("_");
                    return (t > 0 && (e = e.substring(0, t)), e.startsWith("root.")) ? e.substring(5) : e
                },
                o = e => {
                    if (!e) return 0;
                    let t = e.lastIndexOf("_");
                    return t > 0 && parseInt(e.substring(t + 1), 10) || 0
                }
        },
        89682: function(e, t, n) {
            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = e.map(e => "number" == typeof e ? "[".concat(e, "]") : e).reduce((t, n, r) => "number" == typeof e[r] ? t + n : t ? "".concat(t, ".").concat(n) : n, "");
                return "".concat(n, "_").concat(t)
            }

            function l(e) {
                if (!e) return [];
                let t = e;
                t.startsWith("root.") && (t = t.substring(5));
                let n = (t = t.replace(/_\d+$/, "")).split("."),
                    r = [];
                for (let e of n) {
                    let t = e.match(/^(.+?)\[(\d+)\]$/);
                    if (t) {
                        let [, e, n] = t;
                        r.push(e), r.push(parseInt(n, 10))
                    } else r.push(e)
                }
                return r
            }

            function o(e, t) {
                var n, r, l, o, a, s, i, u;
                if (0 === e.length) return null;
                let c = t;
                for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    if (!c) break;
                    c = c[n]
                }
                if ((null == c ? void 0 : null === (r = c._metadata) || void 0 === r ? void 0 : null === (n = r.bboxes) || void 0 === n ? void 0 : n.length) > 0) return {
                    bboxes: c._metadata.bboxes,
                    pageNumber: null !== (l = c._metadata.bboxes[0].page) && void 0 !== l ? l : 0,
                    annotation_ids: c._metadata.annotation_ids
                };
                if (e.length > 0) {
                    let n = e[e.length - 1],
                        r = e.slice(0, -1),
                        l = t;
                    for (let e = 0; e < r.length && l; e++) l = l[r[e]];
                    let i = "".concat(n, "_metadata");
                    if ((null == l ? void 0 : null === (a = l[i]) || void 0 === a ? void 0 : null === (o = a.bboxes) || void 0 === o ? void 0 : o.length) > 0) return {
                        bboxes: l[i].bboxes,
                        pageNumber: null !== (s = l[i].bboxes[0].page) && void 0 !== s ? s : 0,
                        annotation_ids: l[i].annotation_ids
                    }
                }
                if (e.length > 0) {
                    let n = [...e],
                        r = n.pop();
                    n.push("".concat(r, "_metadata"));
                    let l = t;
                    for (let e = 0; e < n.length && l; e++) l = l[n[e]];
                    if ((null == l ? void 0 : null === (i = l.bboxes) || void 0 === i ? void 0 : i.length) > 0) return {
                        bboxes: l.bboxes,
                        pageNumber: null !== (u = l.bboxes[0].page) && void 0 !== u ? u : 0,
                        annotation_ids: l.annotation_ids
                    }
                }
                return null
            }

            function a(e, t) {
                return e.length === t.length && e.every((e, n) => e === t[n])
            }
            n.d(t, {
                BV: function() {
                    return r
                },
                cO: function() {
                    return a
                },
                cQ: function() {
                    return o
                },
                s2: function() {
                    return l
                }
            })
        }
    }
]);