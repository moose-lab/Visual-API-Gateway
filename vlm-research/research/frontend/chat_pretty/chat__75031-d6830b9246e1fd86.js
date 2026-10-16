try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b82c4c81-aa47-4495-93ac-e3046f66ba58", e._sentryDebugIdIdentifier = "sentry-dbid-b82c4c81-aa47-4495-93ac-e3046f66ba58")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [75031], {
        79205: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(2265);
            let a = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                o = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()),
                i = e => {
                    let t = o(e);
                    return t.charAt(0).toUpperCase() + t.slice(1)
                },
                l = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.filter((e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t).join(" ").trim()
                },
                c = e => {
                    for (let t in e)
                        if (t.startsWith("aria-") || "role" === t || "title" === t) return !0
                };
            var u = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let d = (0, r.forwardRef)((e, t) => {
                    let {
                        color: n = "currentColor",
                        size: a = 24,
                        strokeWidth: o = 2,
                        absoluteStrokeWidth: i,
                        className: d = "",
                        children: s,
                        iconNode: f,
                        ...p
                    } = e;
                    return (0, r.createElement)("svg", {
                        ref: t,
                        ...u,
                        width: a,
                        height: a,
                        stroke: n,
                        strokeWidth: i ? 24 * Number(o) / Number(a) : o,
                        className: l("lucide", d),
                        ...!s && !c(p) && {
                            "aria-hidden": "true"
                        },
                        ...p
                    }, [...f.map(e => {
                        let [t, n] = e;
                        return (0, r.createElement)(t, n)
                    }), ...Array.isArray(s) ? s : [s]])
                }),
                s = (e, t) => {
                    let n = (0, r.forwardRef)((n, o) => {
                        let {
                            className: c,
                            ...u
                        } = n;
                        return (0, r.createElement)(d, {
                            ref: o,
                            iconNode: t,
                            className: l("lucide-".concat(a(i(e))), "lucide-".concat(e), c),
                            ...u
                        })
                    });
                    return n.displayName = i(e), n
                }
        },
        71769: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("book-open", [
                ["path", {
                    d: "M12 7v14",
                    key: "1akyts"
                }],
                ["path", {
                    d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
                    key: "ruj8y"
                }]
            ])
        },
        81596: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("chart-line", [
                ["path", {
                    d: "M3 3v16a2 2 0 0 0 2 2h16",
                    key: "c24i48"
                }],
                ["path", {
                    d: "m19 9-5 5-4-4-3 3",
                    key: "2osh9i"
                }]
            ])
        },
        6818: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("chart-no-axes-column", [
                ["path", {
                    d: "M5 21v-6",
                    key: "1hz6c0"
                }],
                ["path", {
                    d: "M12 21V3",
                    key: "1lcnhd"
                }],
                ["path", {
                    d: "M19 21V9",
                    key: "unv183"
                }]
            ])
        },
        45575: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("clipboard-check", [
                ["rect", {
                    width: "8",
                    height: "4",
                    x: "8",
                    y: "2",
                    rx: "1",
                    ry: "1",
                    key: "tgr4d6"
                }],
                ["path", {
                    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
                    key: "116196"
                }],
                ["path", {
                    d: "m9 14 2 2 4-4",
                    key: "df797q"
                }]
            ])
        },
        69317: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("compass", [
                ["path", {
                    d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
                    key: "9ktpf1"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }]
            ])
        },
        88226: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("credit-card", [
                ["rect", {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "5",
                    rx: "2",
                    key: "ynyp8z"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "10",
                    y2: "10",
                    key: "1b3vmo"
                }]
            ])
        },
        48736: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("file-text", [
                ["path", {
                    d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
                    key: "1oefj6"
                }],
                ["path", {
                    d: "M14 2v5a1 1 0 0 0 1 1h5",
                    key: "wfsgrz"
                }],
                ["path", {
                    d: "M10 9H8",
                    key: "b1mrlr"
                }],
                ["path", {
                    d: "M16 13H8",
                    key: "t4e002"
                }],
                ["path", {
                    d: "M16 17H8",
                    key: "z1uh3a"
                }]
            ])
        },
        54001: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("key", [
                ["path", {
                    d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
                    key: "g0fldk"
                }],
                ["path", {
                    d: "m21 2-9.6 9.6",
                    key: "1j0ho8"
                }],
                ["circle", {
                    cx: "7.5",
                    cy: "15.5",
                    r: "5.5",
                    key: "yqb3hr"
                }]
            ])
        },
        51817: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("loader-circle", [
                ["path", {
                    d: "M21 12a9 9 0 1 1-6.219-8.56",
                    key: "13zald"
                }]
            ])
        },
        11: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("message-square", [
                ["path", {
                    d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
                    key: "18887p"
                }]
            ])
        },
        33276: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("play", [
                ["path", {
                    d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
                    key: "10ikf1"
                }]
            ])
        },
        33073: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("puzzle", [
                ["path", {
                    d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
                    key: "w46dr5"
                }]
            ])
        },
        98728: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("settings", [
                ["path", {
                    d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
                    key: "1i5ecw"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3",
                    key: "1v7zrd"
                }]
            ])
        },
        82023: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("sparkles", [
                ["path", {
                    d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
                    key: "1s2grr"
                }],
                ["path", {
                    d: "M20 2v4",
                    key: "1rf3ol"
                }],
                ["path", {
                    d: "M22 4h-4",
                    key: "gwowj6"
                }],
                ["circle", {
                    cx: "4",
                    cy: "20",
                    r: "2",
                    key: "6kqj1y"
                }]
            ])
        },
        95080: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("ticket", [
                ["path", {
                    d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
                    key: "qn84l0"
                }],
                ["path", {
                    d: "M13 5v2",
                    key: "dyzc3o"
                }],
                ["path", {
                    d: "M13 17v2",
                    key: "1ont0d"
                }],
                ["path", {
                    d: "M13 11v2",
                    key: "1wjjxi"
                }]
            ])
        },
        70525: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("trending-up", [
                ["path", {
                    d: "M16 7h6v6",
                    key: "box55l"
                }],
                ["path", {
                    d: "m22 7-8.5 8.5-5-5L2 17",
                    key: "1t1m79"
                }]
            ])
        },
        51884: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("user-cog", [
                ["path", {
                    d: "M10 15H6a4 4 0 0 0-4 4v2",
                    key: "1nfge6"
                }],
                ["path", {
                    d: "m14.305 16.53.923-.382",
                    key: "1itpsq"
                }],
                ["path", {
                    d: "m15.228 13.852-.923-.383",
                    key: "eplpkm"
                }],
                ["path", {
                    d: "m16.852 12.228-.383-.923",
                    key: "13v3q0"
                }],
                ["path", {
                    d: "m16.852 17.772-.383.924",
                    key: "1i8mnm"
                }],
                ["path", {
                    d: "m19.148 12.228.383-.923",
                    key: "1q8j1v"
                }],
                ["path", {
                    d: "m19.53 18.696-.382-.924",
                    key: "vk1qj3"
                }],
                ["path", {
                    d: "m20.772 13.852.924-.383",
                    key: "n880s0"
                }],
                ["path", {
                    d: "m20.772 16.148.924.383",
                    key: "1g6xey"
                }],
                ["circle", {
                    cx: "18",
                    cy: "15",
                    r: "3",
                    key: "gjjjvw"
                }],
                ["circle", {
                    cx: "9",
                    cy: "7",
                    r: "4",
                    key: "nufk8"
                }]
            ])
        },
        95805: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("users", [
                ["path", {
                    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
                    key: "1yyitq"
                }],
                ["path", {
                    d: "M16 3.128a4 4 0 0 1 0 7.744",
                    key: "16gr8j"
                }],
                ["path", {
                    d: "M22 21v-2a4 4 0 0 0-3-3.87",
                    key: "kshegd"
                }],
                ["circle", {
                    cx: "9",
                    cy: "7",
                    r: "4",
                    key: "nufk8"
                }]
            ])
        },
        91804: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("wallet", [
                ["path", {
                    d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
                    key: "18etb6"
                }],
                ["path", {
                    d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",
                    key: "xoc0q4"
                }]
            ])
        },
        32489: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(79205).Z)("x", [
                ["path", {
                    d: "M18 6 6 18",
                    key: "1bl5f8"
                }],
                ["path", {
                    d: "m6 6 12 12",
                    key: "d8bk6v"
                }]
            ])
        },
        49027: function(e, t, n) {
            n.d(t, {
                Dx: function() {
                    return er
                },
                VY: function() {
                    return en
                },
                aV: function() {
                    return et
                },
                dk: function() {
                    return ea
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
                    return b
                },
                x8: function() {
                    return eo
                },
                xz: function() {
                    return Q
                }
            });
            var r = n(2265),
                a = n(6741),
                o = n(98575),
                i = n(73966),
                l = n(99255),
                c = n(80886),
                u = n(15278),
                d = n(99103),
                s = n(83832),
                f = n(71599),
                p = n(66840),
                h = n(86097),
                y = n(99157),
                k = n(5478),
                g = n(37053),
                v = n(57437),
                m = "Dialog",
                [x, b] = (0, i.b)(m),
                [w, Z] = x(m),
                M = e => {
                    let {
                        __scopeDialog: t,
                        children: n,
                        open: a,
                        defaultOpen: o,
                        onOpenChange: i,
                        modal: u = !0
                    } = e, d = r.useRef(null), s = r.useRef(null), [f, p] = (0, c.T)({
                        prop: a,
                        defaultProp: null != o && o,
                        onChange: i,
                        caller: m
                    });
                    return (0, v.jsx)(w, {
                        scope: t,
                        triggerRef: d,
                        contentRef: s,
                        contentId: (0, l.M)(),
                        titleId: (0, l.M)(),
                        descriptionId: (0, l.M)(),
                        open: f,
                        onOpenChange: p,
                        onOpenToggle: r.useCallback(() => p(e => !e), [p]),
                        modal: u,
                        children: n
                    })
                };
            M.displayName = m;
            var j = "DialogTrigger",
                D = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, i = Z(j, n), l = (0, o.e)(t, i.triggerRef);
                    return (0, v.jsx)(p.WV.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": i.open,
                        "aria-controls": i.contentId,
                        "data-state": U(i.open),
                        ...r,
                        ref: l,
                        onClick: (0, a.Mj)(e.onClick, i.onOpenToggle)
                    })
                });
            D.displayName = j;
            var C = "DialogPortal",
                [R, I] = x(C, {
                    forceMount: void 0
                }),
                _ = e => {
                    let {
                        __scopeDialog: t,
                        forceMount: n,
                        children: a,
                        container: o
                    } = e, i = Z(C, t);
                    return (0, v.jsx)(R, {
                        scope: t,
                        forceMount: n,
                        children: r.Children.map(a, e => (0, v.jsx)(f.z, {
                            present: n || i.open,
                            children: (0, v.jsx)(s.h, {
                                asChild: !0,
                                container: o,
                                children: e
                            })
                        }))
                    })
                };
            _.displayName = C;
            var z = "DialogOverlay",
                N = r.forwardRef((e, t) => {
                    let n = I(z, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...a
                        } = e,
                        o = Z(z, e.__scopeDialog);
                    return o.modal ? (0, v.jsx)(f.z, {
                        present: r || o.open,
                        children: (0, v.jsx)(A, {
                            ...a,
                            ref: t
                        })
                    }) : null
                });
            N.displayName = z;
            var E = (0, g.Z8)("DialogOverlay.RemoveScroll"),
                A = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, a = Z(z, n);
                    return (0, v.jsx)(y.Z, {
                        as: E,
                        allowPinchZoom: !0,
                        shards: [a.contentRef],
                        children: (0, v.jsx)(p.WV.div, {
                            "data-state": U(a.open),
                            ...r,
                            ref: t,
                            style: {
                                pointerEvents: "auto",
                                ...r.style
                            }
                        })
                    })
                }),
                O = "DialogContent",
                V = r.forwardRef((e, t) => {
                    let n = I(O, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...a
                        } = e,
                        o = Z(O, e.__scopeDialog);
                    return (0, v.jsx)(f.z, {
                        present: r || o.open,
                        children: o.modal ? (0, v.jsx)(F, {
                            ...a,
                            ref: t
                        }) : (0, v.jsx)(q, {
                            ...a,
                            ref: t
                        })
                    })
                });
            V.displayName = O;
            var F = r.forwardRef((e, t) => {
                    let n = Z(O, e.__scopeDialog),
                        i = r.useRef(null),
                        l = (0, o.e)(t, n.contentRef, i);
                    return r.useEffect(() => {
                        let e = i.current;
                        if (e) return (0, k.Ry)(e)
                    }, []), (0, v.jsx)(W, {
                        ...e,
                        ref: l,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, a.Mj)(e.onCloseAutoFocus, e => {
                            var t;
                            e.preventDefault(), null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                        }),
                        onPointerDownOutside: (0, a.Mj)(e.onPointerDownOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey;
                            (2 === t.button || n) && e.preventDefault()
                        }),
                        onFocusOutside: (0, a.Mj)(e.onFocusOutside, e => e.preventDefault())
                    })
                }),
                q = r.forwardRef((e, t) => {
                    let n = Z(O, e.__scopeDialog),
                        a = r.useRef(!1),
                        o = r.useRef(!1);
                    return (0, v.jsx)(W, {
                        ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var r, i;
                            null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, t), t.defaultPrevented || (a.current || null === (i = n.triggerRef.current) || void 0 === i || i.focus(), t.preventDefault()), a.current = !1, o.current = !1
                        },
                        onInteractOutside: t => {
                            var r, i;
                            null === (r = e.onInteractOutside) || void 0 === r || r.call(e, t), t.defaultPrevented || (a.current = !0, "pointerdown" !== t.detail.originalEvent.type || (o.current = !0));
                            let l = t.target;
                            (null === (i = n.triggerRef.current) || void 0 === i ? void 0 : i.contains(l)) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
                        }
                    })
                }),
                W = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        trapFocus: a,
                        onOpenAutoFocus: i,
                        onCloseAutoFocus: l,
                        ...c
                    } = e, s = Z(O, n), f = r.useRef(null), p = (0, o.e)(t, f);
                    return (0, h.EW)(), (0, v.jsxs)(v.Fragment, {
                        children: [(0, v.jsx)(d.M, {
                            asChild: !0,
                            loop: !0,
                            trapped: a,
                            onMountAutoFocus: i,
                            onUnmountAutoFocus: l,
                            children: (0, v.jsx)(u.XB, {
                                role: "dialog",
                                id: s.contentId,
                                "aria-describedby": s.descriptionId,
                                "aria-labelledby": s.titleId,
                                "data-state": U(s.open),
                                ...c,
                                ref: p,
                                onDismiss: () => s.onOpenChange(!1)
                            })
                        }), (0, v.jsxs)(v.Fragment, {
                            children: [(0, v.jsx)(Y, {
                                titleId: s.titleId
                            }), (0, v.jsx)(G, {
                                contentRef: f,
                                descriptionId: s.descriptionId
                            })]
                        })]
                    })
                }),
                H = "DialogTitle",
                L = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, a = Z(H, n);
                    return (0, v.jsx)(p.WV.h2, {
                        id: a.titleId,
                        ...r,
                        ref: t
                    })
                });
            L.displayName = H;
            var P = "DialogDescription",
                T = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, a = Z(P, n);
                    return (0, v.jsx)(p.WV.p, {
                        id: a.descriptionId,
                        ...r,
                        ref: t
                    })
                });
            T.displayName = P;
            var B = "DialogClose",
                S = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = Z(B, n);
                    return (0, v.jsx)(p.WV.button, {
                        type: "button",
                        ...r,
                        ref: t,
                        onClick: (0, a.Mj)(e.onClick, () => o.onOpenChange(!1))
                    })
                });

            function U(e) {
                return e ? "open" : "closed"
            }
            S.displayName = B;
            var $ = "DialogTitleWarning",
                [K, X] = (0, i.k)($, {
                    contentName: O,
                    titleName: H,
                    docsSlug: "dialog"
                }),
                Y = e => {
                    let {
                        titleId: t
                    } = e, n = X($), a = "`".concat(n.contentName, "` requires a `").concat(n.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);
                    return r.useEffect(() => {
                        t && !document.getElementById(t) && console.error(a)
                    }, [a, t]), null
                },
                G = e => {
                    let {
                        contentRef: t,
                        descriptionId: n
                    } = e, a = X("DialogDescriptionWarning"), o = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(a.contentName, "}.");
                    return r.useEffect(() => {
                        var e;
                        let r = null === (e = t.current) || void 0 === e ? void 0 : e.getAttribute("aria-describedby");
                        n && r && !document.getElementById(n) && console.warn(o)
                    }, [o, t, n]), null
                },
                J = M,
                Q = D,
                ee = _,
                et = N,
                en = V,
                er = L,
                ea = T,
                eo = S
        }
    }
]);