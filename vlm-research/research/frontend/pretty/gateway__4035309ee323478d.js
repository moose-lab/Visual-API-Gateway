(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 676525, r => {
    "use strict";
    let e, t;
    var n = r.i(205112),
        i = r.i(7284);
    let o = r => "boolean" == typeof r ? `${r}` : 0 === r ? "0" : r,
        a = i.clsx;
    var d = r.i(647163);
    let l = (e = "inline-flex items-center justify-center gap-1.5 cursor-pointer transition-[transform,box-shadow,background-color,opacity] duration-300 ease-out hover:opacity-90 hover:-translate-y-px no-underline font-medium", t = {
        variants: {
            variant: {
                primary: "bg-primary text-white rounded-lg border-0",
                "primary-mid": "bg-primary-mid text-white rounded-[20px] border border-primary-border shadow-btn",
                "primary-dark": "bg-primary-dark text-white rounded-[20px] border border-primary-border shadow-btn",
                secondary: "bg-primary-mid/10 text-navy rounded-[20px] border-0",
                ghost: "bg-transparent text-navy border border-navy/20 rounded-lg",
                "ghost-dark": "bg-transparent text-primary-light border border-primary rounded-lg",
                glass: "bg-white/15 text-white rounded-[20px] backdrop-blur-sm border-0",
                "cta-white": "bg-white text-primary-mid rounded-[20px] border border-btn-white-border shadow-btn-white"
            },
            size: {
                xs: "text-label px-3 py-2",
                sm: "text-body-md px-3 py-2",
                md: "text-body-md px-6 py-3",
                lg: "text-body-md px-7 py-3.5",
                cta: "h-9 px-3 text-sm leading-4"
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md"
        }
    }, r => {
        var n;
        if ((null == t ? void 0 : t.variants) == null) return a(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
        let {
            variants: i,
            defaultVariants: d
        } = t, l = Object.keys(i).map(e => {
            let t = null == r ? void 0 : r[e],
                n = null == d ? void 0 : d[e];
            if (null === t) return null;
            let a = o(t) || o(n);
            return i[e][a]
        }), s = r && Object.entries(r).reduce((r, e) => {
            let [t, n] = e;
            return void 0 === n || (r[t] = n), r
        }, {});
        return a(e, l, null == t || null == (n = t.compoundVariants) ? void 0 : n.reduce((r, e) => {
            let {
                class: t,
                className: n,
                ...i
            } = e;
            return Object.entries(i).every(r => {
                let [e, t] = r;
                return Array.isArray(t) ? t.includes({
                    ...d,
                    ...s
                } [e]) : ({
                    ...d,
                    ...s
                })[e] === t
            }) ? [...r, t, n] : r
        }, []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
    });

    function s({
        variant: r,
        size: e,
        className: t,
        children: i,
        ...o
    }) {
        let a = (0, d.cn)(l({
            variant: r,
            size: e
        }), t);
        if ("href" in o && void 0 !== o.href) {
            let {
                href: r,
                external: e,
                ...t
            } = o;
            return (0, n.jsx)("a", {
                href: r,
                target: e ? "_blank" : void 0,
                rel: e ? "noopener noreferrer" : void 0,
                className: a,
                ...t,
                children: i
            })
        }
        return (0, n.jsx)("button", {
            className: a,
            ...o,
            children: i
        })
    }
    r.s(["default", () => s], 676525)
}, 930390, r => {
    "use strict";
    var e = r.i(205112),
        t = r.i(676525);

    function n({
        label: r,
        className: n
    }) {
        return (0, e.jsxs)(t.default, {
            type: "button",
            variant: "ghost",
            size: "sm",
            className: n,
            onClick: () => {
                window.history.length > 1 ? window.history.back() : window.location.href = "/"
            },
            children: [(0, e.jsx)("svg", {
                className: "size-3.5 shrink-0",
                "aria-hidden": !0,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: (0, e.jsx)("path", {
                    d: "m15 18-6-6 6-6"
                })
            }), r]
        })
    }
    r.s(["default", () => n])
}]);