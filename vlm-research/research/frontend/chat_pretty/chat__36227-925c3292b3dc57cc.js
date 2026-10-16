try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1c751e21-3eed-40a3-bc70-332bffee5339", e._sentryDebugIdIdentifier = "sentry-dbid-1c751e21-3eed-40a3-bc70-332bffee5339")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [36227], {
        68398: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return u
                }
            });
            var r = n(2265),
                l = n(73966),
                o = n(98575),
                f = n(37053),
                i = n(57437);

            function u(e) {
                let t = e + "CollectionProvider",
                    [n, u] = (0, l.b)(t),
                    [c, a] = n(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    d = e => {
                        let {
                            scope: t,
                            children: n
                        } = e, l = r.useRef(null), o = r.useRef(new Map).current;
                        return (0, i.jsx)(c, {
                            scope: t,
                            itemMap: o,
                            collectionRef: l,
                            children: n
                        })
                    };
                d.displayName = t;
                let s = e + "CollectionSlot",
                    b = (0, f.Z8)(s),
                    p = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: r
                        } = e, l = a(s, n), f = (0, o.e)(t, l.collectionRef);
                        return (0, i.jsx)(b, {
                            ref: f,
                            children: r
                        })
                    });
                p.displayName = s;
                let y = e + "CollectionItemSlot",
                    m = "data-radix-collection-item",
                    w = (0, f.Z8)(y),
                    C = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: l,
                            ...f
                        } = e, u = r.useRef(null), c = (0, o.e)(t, u), d = a(y, n);
                        return r.useEffect(() => (d.itemMap.set(u, {
                            ref: u,
                            ...f
                        }), () => void d.itemMap.delete(u))), (0, i.jsx)(w, {
                            [m]: "",
                            ref: c,
                            children: l
                        })
                    });
                return C.displayName = y, [{
                    Provider: d,
                    Slot: p,
                    ItemSlot: C
                }, function(t) {
                    let n = a(e + "CollectionConsumer", t);
                    return r.useCallback(() => {
                        let e = n.collectionRef.current;
                        if (!e) return [];
                        let t = Array.from(e.querySelectorAll("[".concat(m, "]")));
                        return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
                    }, [n.collectionRef, n.itemMap])
                }, u]
            }
        },
        29114: function(e, t, n) {
            n.d(t, {
                gm: function() {
                    return o
                }
            });
            var r = n(2265);
            n(57437);
            var l = r.createContext(void 0);

            function o(e) {
                let t = r.useContext(l);
                return e || t || "ltr"
            }
        }
    }
]);