(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 676525, e => {
    "use strict";
    let t, r;
    var n = e.i(205112),
        i = e.i(7284);
    let a = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        o = i.clsx;
    var s = e.i(647163);
    let l = (t = "inline-flex items-center justify-center gap-1.5 cursor-pointer transition-[transform,box-shadow,background-color,opacity] duration-300 ease-out hover:opacity-90 hover:-translate-y-px no-underline font-medium", r = {
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
    }, e => {
        var n;
        if ((null == r ? void 0 : r.variants) == null) return o(t, null == e ? void 0 : e.class, null == e ? void 0 : e.className);
        let {
            variants: i,
            defaultVariants: s
        } = r, l = Object.keys(i).map(t => {
            let r = null == e ? void 0 : e[t],
                n = null == s ? void 0 : s[t];
            if (null === r) return null;
            let o = a(r) || a(n);
            return i[t][o]
        }), d = e && Object.entries(e).reduce((e, t) => {
            let [r, n] = t;
            return void 0 === n || (e[r] = n), e
        }, {});
        return o(t, l, null == r || null == (n = r.compoundVariants) ? void 0 : n.reduce((e, t) => {
            let {
                class: r,
                className: n,
                ...i
            } = t;
            return Object.entries(i).every(e => {
                let [t, r] = e;
                return Array.isArray(r) ? r.includes({
                    ...s,
                    ...d
                } [t]) : ({
                    ...s,
                    ...d
                })[t] === r
            }) ? [...e, r, n] : e
        }, []), null == e ? void 0 : e.class, null == e ? void 0 : e.className)
    });

    function d({
        variant: e,
        size: t,
        className: r,
        children: i,
        ...a
    }) {
        let o = (0, s.cn)(l({
            variant: e,
            size: t
        }), r);
        if ("href" in a && void 0 !== a.href) {
            let {
                href: e,
                external: t,
                ...r
            } = a;
            return (0, n.jsx)("a", {
                href: e,
                target: t ? "_blank" : void 0,
                rel: t ? "noopener noreferrer" : void 0,
                className: o,
                ...r,
                children: i
            })
        }
        return (0, n.jsx)("button", {
            className: o,
            ...a,
            children: i
        })
    }
    e.s(["default", () => d], 676525)
}, 588634, e => {
    "use strict";
    var t = e.i(205112);
    e.s(["ArrowRightIcon", 0, ({
        size: e = 14
    }) => (0, t.jsx)("svg", {
        width: e,
        height: e,
        viewBox: "0 0 14 14",
        fill: "none",
        "aria-hidden": "true",
        children: (0, t.jsx)("path", {
            d: "M5.5 3.5L9 7l-3.5 3.5",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }), "CheckIcon", 0, () => (0, t.jsx)("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        "aria-hidden": "true",
        children: (0, t.jsx)("path", {
            d: "M2 6l3 3 5-5",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }), "ChevronIcon", 0, ({
        open: e
    }) => (0, t.jsx)("svg", {
        width: "10",
        height: "6",
        viewBox: "0 0 10 6",
        fill: "none",
        "aria-hidden": "true",
        className: `opacity-50 transition-transform duration-200 ease-in-out motion-reduce:transition-none ${e?"rotate-180":"rotate-0"}`,
        children: (0, t.jsx)("path", {
            d: "M1 1l4 4 4-4",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }), "CloseIcon", 0, () => (0, t.jsx)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        children: (0, t.jsx)("path", {
            d: "M6 6l12 12M18 6L6 18",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        })
    }), "CopyIcon", 0, () => (0, t.jsxs)("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        "aria-hidden": "true",
        children: [(0, t.jsx)("rect", {
            x: "4",
            y: "4",
            width: "7",
            height: "7",
            rx: "1",
            stroke: "currentColor",
            strokeWidth: "1.2"
        }), (0, t.jsx)("path", {
            d: "M3 8H2a1 1 0 01-1-1V2a1 1 0 011-1h5a1 1 0 011 1v1",
            stroke: "currentColor",
            strokeWidth: "1.2"
        })]
    }), "GitHubIcon", 0, ({
        size: e = 16
    }) => (0, t.jsx)("svg", {
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: (0, t.jsx)("path", {
            d: "M12 .296C5.37.296 0 5.666 0 12.296c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.807 1.304 3.492.997.108-.776.42-1.305.762-1.605-2.665-.302-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.019.005 2.045.138 3.003.404 2.291-1.553 3.298-1.23 3.298-1.23.654 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 22.092 24 17.596 24 12.296 24 5.666 18.627.296 12 .296Z"
        })
    }), "HamburgerIcon", 0, () => (0, t.jsx)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        children: (0, t.jsx)("path", {
            d: "M3 6h18M3 12h18M3 18h18",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        })
    })])
}, 412872, e => {
    "use strict";
    var t = e.i(796353);
    let r = (...e) => e.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim(),
        n = e => {
            let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase());
            return t.charAt(0).toUpperCase() + t.slice(1)
        };
    var i = {
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
    let a = (0, t.createContext)({}),
        o = (0, t.forwardRef)(({
            color: e,
            size: n,
            strokeWidth: o,
            absoluteStrokeWidth: s,
            className: l = "",
            children: d,
            iconNode: c,
            ...u
        }, m) => {
            let {
                size: h = 24,
                strokeWidth: p = 2,
                absoluteStrokeWidth: g = !1,
                color: x = "currentColor",
                className: f = ""
            } = (0, t.useContext)(a) ?? {}, v = s ?? g ? 24 * Number(o ?? p) / Number(n ?? h) : o ?? p;
            return (0, t.createElement)("svg", {
                ref: m,
                ...i,
                width: n ?? h ?? i.width,
                height: n ?? h ?? i.height,
                stroke: e ?? x,
                strokeWidth: v,
                className: r("lucide", f, l),
                ...!d && !(e => {
                    for (let t in e)
                        if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
                    return !1
                })(u) && {
                    "aria-hidden": "true"
                },
                ...u
            }, [...c.map(([e, r]) => (0, t.createElement)(e, r)), ...Array.isArray(d) ? d : [d]])
        }),
        s = (e, i) => {
            let a = (0, t.forwardRef)(({
                className: a,
                ...s
            }, l) => (0, t.createElement)(o, {
                ref: l,
                iconNode: i,
                className: r(`lucide-${n(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, a),
                ...s
            }));
            return a.displayName = n(e), a
        };
    e.s(["default", () => s], 412872)
}, 71829, e => {
    "use strict";
    let t = {
        app: "https://app.vlm.run",
        appSignIn: "https://app.vlm.run/sign-in",
        chat: "https://chat.vlm.run",
        docs: "https://docs.vlm.run",
        docsIntro: "https://docs.vlm.run/introduction",
        docsLlmsTxt: "https://docs.vlm.run/llms.txt",
        docsWaysToUse: "https://docs.vlm.run/ways-to-use-vlm-run",
        docsAgentsIntro: "https://docs.vlm.run/agents/introduction",
        docsInvoiceGuide: "https://docs.vlm.run/guides/doc-ai/guide-parsing-invoices",
        docsMm: "https://vlm-run.github.io/mm",
        docsPricing: "https://docs.vlm.run/pricing",
        bookDemo: "https://calendar.app.google/fSpmZfSCUk6mmrzx5"
    };
    t.chat, t.docsIntro, e.s(["URLS", 0, t])
}, 194177, e => {
    "use strict";
    e.s(["VIDEO_HERO_COLLAPSED_EVENT", 0, "video-hero-collapsed"])
}, 189242, e => {
    "use strict";
    var t = e.i(205112);
    let r = {
        white: "rgb(255,255,255)",
        navy: "rgb(16,42,86)",
        primary: "#1265FF",
        "primary-mid": "#1F5ACA"
    };

    function n({
        className: e,
        color: n = "navy"
    }) {
        let i = r[n];
        return (0, t.jsxs)("svg", {
            viewBox: "0 0 67.6 52",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-label": "VLM Run",
            className: e,
            children: [(0, t.jsx)("path", {
                d: "M 4.21 6.45 C 4.21 2.888 7.098 0 10.66 0 L 19.08 0 L 19.08 4.3 L 10.66 4.3 C 9.473 4.3 8.51 5.263 8.51 6.45 L 8.51 23.335 C 8.51 24.522 7.547 25.485 6.36 25.485 L 6.36 26.515 C 7.547 26.515 8.51 27.478 8.51 28.665 L 8.51 45.55 C 8.51 46.737 9.473 47.7 10.66 47.7 L 19.08 47.7 L 19.08 52 L 10.66 52 C 7.098 52 4.21 49.112 4.21 45.55 L 4.21 28.15 L 0 28.15 L 0 23.85 L 4.21 23.85 Z",
                fill: i
            }), (0, t.jsx)("path", {
                d: "M 17.788 24.387 L 13.015 11.125 L 16.911 11.125 L 20.11 20.672 L 23.258 11.125 L 27.077 11.125 L 22.303 24.387 Z",
                fill: i
            }), (0, t.jsx)("path", {
                d: "M 27.773 24.387 L 27.773 6.326 L 31.411 6.326 L 31.411 24.387 Z",
                fill: i
            }), (0, t.jsx)("path", {
                d: "M 49.299 10.97 C 52.034 10.97 54.201 12.518 54.201 16.776 L 54.201 24.387 L 50.563 24.387 L 50.563 16.982 C 50.563 14.995 49.84 13.963 48.267 13.963 C 46.693 13.963 45.635 15.124 45.635 17.137 L 45.635 24.387 L 41.997 24.387 L 41.997 16.982 C 41.997 14.995 41.274 13.963 39.674 13.963 C 38.101 13.963 37.068 15.176 37.068 17.163 L 37.068 24.387 L 33.43 24.387 L 33.43 11.125 L 36.604 11.125 L 36.94 12.776 C 37.739 11.744 38.9 10.996 40.835 10.97 C 42.461 10.944 43.983 11.538 44.809 13.215 C 45.738 11.796 47.286 10.97 49.299 10.97 Z",
                fill: i
            }), (0, t.jsx)("path", {
                d: "M 23.399 29.401 L 24.019 29.401 L 24.019 32.704 L 22.574 32.704 C 20.406 32.704 19.581 34.149 19.581 36.161 L 19.581 42.664 L 15.943 42.664 L 15.943 29.401 L 19.245 29.401 L 19.581 31.388 C 20.303 30.201 21.335 29.401 23.399 29.401 Z",
                fill: i
            }), (0, t.jsx)("path", {
                d: "M 33.977 36.032 L 33.977 29.401 L 37.615 29.401 L 37.615 42.664 L 34.39 42.664 L 34.055 41.064 C 33.203 42.096 32.042 42.818 30.159 42.818 C 27.424 42.818 24.895 41.451 24.895 36.755 L 24.895 29.401 L 28.533 29.401 L 28.533 36.265 C 28.533 38.638 29.307 39.8 31.113 39.8 C 32.92 39.8 33.977 38.484 33.977 36.032 Z",
                fill: i
            }), (0, t.jsx)("path", {
                d: "M 47.24 29.246 C 50.104 29.246 52.556 30.769 52.556 35.31 L 52.556 42.664 L 48.918 42.664 L 48.918 35.671 C 48.918 33.426 48.066 32.239 46.234 32.239 C 44.351 32.239 43.267 33.581 43.267 35.878 L 43.267 42.664 L 39.629 42.664 L 39.629 29.401 L 42.803 29.401 L 43.138 31.053 C 43.989 30.021 45.202 29.246 47.24 29.246 Z",
                fill: i
            }), (0, t.jsx)("path", {
                d: "M 64.052 6.45 C 64.052 2.888 61.164 0 57.602 0 L 49.182 0 L 49.182 4.3 L 57.602 4.3 C 58.789 4.3 59.752 5.263 59.752 6.45 L 59.752 23.335 C 59.752 24.522 60.715 25.485 61.902 25.485 L 61.902 26.515 C 60.715 26.515 59.752 27.478 59.752 28.665 L 59.752 45.55 C 59.752 46.737 58.789 47.7 57.602 47.7 L 49.182 47.7 L 49.182 52 L 57.602 52 C 61.164 52 64.052 49.112 64.052 45.55 L 64.052 28.15 L 68.262 28.15 L 68.262 23.85 L 64.052 23.85 Z",
                fill: i
            })]
        })
    }
    e.s(["default", () => n])
}, 993983, e => {
    "use strict";
    var t = e.i(205112),
        r = e.i(520353),
        n = e.i(796353),
        i = e.i(307002),
        a = e.i(903965),
        o = e.i(676525),
        s = e.i(433770),
        l = e.i(71829);
    let d = {
            label: "Solutions",
            groups: [{
                heading: "By Modality",
                items: [{
                    label: "Documents",
                    href: "/doc-ai",
                    description: "Turn hours of manual document work into seconds of schema-validated JSON.",
                    image: "/images/icons/documents.svg"
                }, {
                    label: "Videos",
                    href: "/video-ai",
                    description: "Summarize, transcribe, and search long-form video without watching it.",
                    image: "/images/icons/videos.svg"
                }, {
                    label: "Images",
                    href: "/product/images",
                    description: "Caption, detect, segment, and generate. Every image operation through one API.",
                    image: "/images/icons/images.svg",
                    badge: "Coming soon"
                }]
            }, {
                heading: "By Industry",
                items: [{
                    label: "Physical AI",
                    href: "/product/physical-ai",
                    description: "Agentic data-labeling for robotics training data.",
                    image: "/images/icons/robotics.svg"
                }, {
                    label: "Healthcare",
                    href: "/solutions/healthcare",
                    description: "Document AI for faxes, scans, and clinical paperwork.",
                    image: "/images/icons/healthcare.svg"
                }, {
                    label: "Construction",
                    href: "/solutions/construction",
                    description: "Document AI for blueprints, schedules, and specs.",
                    image: "/images/icons/construction.svg"
                }]
            }]
        },
        c = {
            label: "Product",
            groups: [{
                heading: "Platform",
                items: [{
                    label: "Orion",
                    href: "/orion",
                    description: "The flagship visual agent that sees, reasons, and acts on images, video, and documents.",
                    image: "/images/icons/orion-agent.svg"
                }, {
                    label: "Gateway",
                    href: "/gateway",
                    description: "One unified API, Any Visual Model.",
                    image: "/images/icons/gateway-overview.svg"
                }]
            }, {
                heading: "Orion",
                items: [{
                    label: "Chat Playground",
                    href: l.URLS.chat,
                    description: "Try Orion in our hosted chat interface.",
                    image: "/images/icons/orion-chat.svg",
                    external: !0
                }, {
                    label: "Whitepaper",
                    href: "https://storage.googleapis.com/vlm-data-public-prod/web/assets/vlmrun-orion-whitepaper-latest.pdf",
                    description: "The technical overview of Orion, our flagship visual agent.",
                    image: "/images/icons/orion-whitepaper.svg",
                    external: !0
                }]
            }, {
                heading: "Open Source",
                items: [{
                    label: "mm",
                    href: "/open-source/mm",
                    description: "Fast, multi-modal context for agents.",
                    image: "/images/icons/mm.svg"
                }, {
                    label: "vlmbench",
                    href: "/open-source/vlmbench",
                    description: "Benchmark any VLM on your hardware, in one command.",
                    image: "/images/icons/vlmbench.svg"
                }, {
                    label: "vlmrun-hub",
                    href: "/open-source/vlmrun-hub",
                    description: "Structured schemas for production VLM use cases.",
                    image: "/images/icons/vlmrun-hub.svg"
                }]
            }]
        },
        u = [{
            label: "Pricing",
            href: "/pricing"
        }, {
            label: "Docs",
            href: l.URLS.docsIntro,
            external: !0
        }, {
            label: "Blog",
            href: "/blog"
        }, {
            label: "About",
            href: "/about"
        }];
    d.groups.find(e => "By Industry" === e.heading)?.items;
    var m = e.i(189242),
        h = e.i(885076),
        p = e.i(588634),
        g = e.i(647163);

    function x(e) {
        return !!e && (!!/^\/share\/[^/]+\.html\/?$/.test(e) || /^\/demos\/[^/]+\/?$/.test(e))
    }
    var f = e.i(194177);

    function v({
        src: e,
        size: r = "md"
    }) {
        let n = "sm" === r ? 18 : 20;
        return (0, t.jsxs)("span", {
            className: `relative mt-0.5 flex ${"sm"===r?"h-8 w-8":"h-9 w-9"} shrink-0 items-center justify-center bg-primary/[0.04] transition-colors duration-300 group-hover:bg-primary-tint`,
            children: [(0, t.jsx)(a.default, {
                src: e,
                alt: "",
                width: n,
                height: n,
                className: "object-contain opacity-50 transition-opacity duration-300 group-hover:opacity-100"
            }), (0, t.jsxs)("svg", {
                className: "pointer-events-none absolute inset-0 h-full w-full opacity-40 transition-opacity duration-300 group-hover:opacity-100",
                viewBox: "0 0 56 56",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true",
                children: [(0, t.jsx)("path", {
                    d: "M0 8V1C0 0.448 0.448 0 1 0H8",
                    className: "stroke-primary-light",
                    strokeMiterlimit: "10"
                }), (0, t.jsx)("path", {
                    d: "M48 0H55C55.552 0 56 0.448 56 1V8",
                    className: "stroke-primary-light",
                    strokeMiterlimit: "10"
                }), (0, t.jsx)("path", {
                    d: "M56 48V55C56 55.552 55.552 56 55 56H48",
                    className: "stroke-primary-light",
                    strokeMiterlimit: "10"
                }), (0, t.jsx)("path", {
                    d: "M8 56H1C0.448 56 0 55.552 0 55V48",
                    className: "stroke-primary-light",
                    strokeMiterlimit: "10"
                })]
            })]
        })
    }

    function b({
        item: e,
        variant: n = "rich",
        onClick: i
    }) {
        let a = e.external ?? /^https?:/.test(e.href),
            o = "group flex items-start gap-3 rounded-xl px-3 py-2.5 no-underline transition-colors hover:bg-surface",
            s = (0, t.jsxs)(t.Fragment, {
                children: [e.image ? (0, t.jsx)(v, {
                    src: e.image,
                    size: "compact" === n ? "sm" : "md"
                }) : null, (0, t.jsxs)("span", {
                    className: "flex min-w-0 flex-col gap-0.5 pt-0.5",
                    children: [(0, t.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-1.5",
                        children: [(0, t.jsx)("span", {
                            className: "text-body-sm font-medium leading-[130%] text-navy transition-colors group-hover:text-primary-mid",
                            children: e.label
                        }), e.badge ? (0, t.jsx)("span", {
                            className: "shrink-0 rounded-[5px] border border-border bg-surface px-1.5 py-0.5 font-mono text-[9px] font-medium uppercase tracking-[0.1em] text-muted",
                            children: e.badge
                        }) : null]
                    }), e.description ? (0, t.jsx)("span", {
                        className: "text-label leading-[140%] text-muted line-clamp-2",
                        children: e.description
                    }) : null]
                })]
            });
        return a ? (0, t.jsx)("a", {
            href: e.href,
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: i,
            className: o,
            children: s
        }) : (0, t.jsx)(r.default, {
            href: e.href,
            onClick: i,
            className: o,
            children: s
        })
    }

    function w({
        dropdown: e,
        id: r,
        onClose: n,
        onMouseEnter: i,
        onMouseLeave: a,
        contained: o = !1
    }) {
        let s = e.groups.length,
            l = 1 === s;
        return (0, t.jsx)("div", {
            id: r,
            role: "dialog",
            "aria-label": `${e.label} menu`,
            className: (0, g.cn)("z-[60] overflow-hidden rounded-2xl border border-border bg-white shadow-[0_16px_48px_rgba(15,23,42,0.10)]", o ? "absolute top-full" : "fixed top-[68px]"),
            style: {
                left: h.PAGE_RAIL_INSET,
                right: h.PAGE_RAIL_INSET
            },
            onMouseEnter: i,
            onMouseLeave: a,
            children: (0, t.jsx)("div", {
                className: `grid gap-6 p-5 sm:gap-6 sm:p-6 ${s>=3?"sm:grid-cols-2 lg:grid-cols-3":2===s?"sm:grid-cols-2":"grid-cols-1"}`,
                children: e.groups.map(e => {
                    let r = l && e.items.length >= 2 ? "grid grid-cols-1 gap-0.5 sm:grid-cols-2" : "flex flex-col gap-0.5";
                    return (0, t.jsxs)("div", {
                        className: "flex min-w-0 flex-col gap-2",
                        children: [(0, t.jsx)("div", {
                            className: "px-3 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted",
                            children: e.heading
                        }), (0, t.jsx)("div", {
                            className: r,
                            children: e.items.map(e => (0, t.jsx)(b, {
                                item: e,
                                variant: "rich",
                                onClick: n
                            }, e.label))
                        })]
                    }, e.heading)
                })
            })
        })
    }

    function y({
        label: e,
        isOpen: r,
        panelId: n,
        onOpen: i,
        onClose: a,
        inverted: o = !1
    }) {
        return (0, t.jsx)("div", {
            onMouseEnter: i,
            onMouseLeave: a,
            children: (0, t.jsxs)("button", {
                type: "button",
                className: (0, g.cn)("flex items-center gap-1 text-label font-medium transition-[color,opacity] duration-500 ease-out", o ? "text-white/50 hover:text-white" : "text-navy hover:opacity-70"),
                "aria-expanded": r,
                "aria-controls": n,
                "aria-haspopup": "true",
                children: [e, (0, t.jsx)(p.ChevronIcon, {
                    open: r
                })]
            })
        })
    }

    function j({
        dropdown: e,
        onNavigate: r,
        defaultOpen: i = !1
    }) {
        let [a, o] = (0, n.useState)(i), s = `mobile-${e.label.toLowerCase()}-panel`;
        return (0, t.jsxs)("div", {
            className: "w-full",
            children: [(0, t.jsxs)("button", {
                type: "button",
                className: "flex items-center justify-between w-full text-body-sm font-medium text-navy hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer",
                "aria-expanded": a,
                "aria-controls": s,
                onClick: () => o(e => !e),
                children: [e.label, (0, t.jsx)(p.ChevronIcon, {
                    open: a
                })]
            }), (0, t.jsx)("div", {
                id: s,
                "aria-hidden": !a,
                className: `overflow-hidden transition-[max-height] duration-200 ${a?"max-h-[1200px] mt-3":"max-h-0"}`,
                children: (0, t.jsx)("div", {
                    className: "flex flex-col gap-4 pb-2",
                    children: e.groups.map(e => (0, t.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [(0, t.jsx)("div", {
                            className: "px-3 pt-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted",
                            children: e.heading
                        }), e.items.map(e => (0, t.jsx)(b, {
                            item: e,
                            variant: "compact",
                            onClick: r
                        }, e.label))]
                    }, e.heading))
                })
            })]
        })
    }

    function k() {
        let e = (0, i.usePathname)(),
            [a, v] = (0, n.useState)(!1),
            [b, k] = (0, n.useState)(null),
            [L, C] = (0, n.useState)(!1),
            N = (0, n.useRef)(null),
            E = (0, s.useMarketingChatOptional)(),
            M = E?.open ?? !1,
            S = E?.skillsBrowserOpen ?? !1,
            A = "/video-ai" === e,
            I = "/" === e,
            O = x(e),
            R = (A || I) && !L && !a && !M,
            _ = (0, n.useCallback)(e => {
                N.current && clearTimeout(N.current), k(e)
            }, []),
            T = (0, n.useCallback)(() => {
                N.current && clearTimeout(N.current), N.current = setTimeout(() => k(null), 150)
            }, []),
            P = (0, n.useCallback)(() => k(null), []);
        (0, n.useEffect)(() => () => {
            N.current && clearTimeout(N.current)
        }, []), (0, n.useLayoutEffect)(() => {
            if (A) {
                let e = e => {
                    let t = e instanceof CustomEvent ? !!e.detail?.collapsed : void 0,
                        r = "1" === document.documentElement.dataset.videoHeroCollapsed;
                    C(t ?? r)
                };
                return e(), window.addEventListener(f.VIDEO_HERO_COLLAPSED_EVENT, e), () => window.removeEventListener(f.VIDEO_HERO_COLLAPSED_EVENT, e)
            }
            if (!I) return void C(!1);
            let e = () => {
                C(window.scrollY > Math.max(window.innerHeight - 140, 280))
            };
            return e(), window.addEventListener("scroll", e, {
                passive: !0
            }), () => window.removeEventListener("scroll", e)
        }, [A, I, M]);
        let z = M ? "hidden @lg:flex" : "hidden lg:flex",
            D = M ? "@lg:hidden" : "lg:hidden",
            F = M ? "pl-4 pr-4 @lg:px-16" : "pl-4 pr-4 lg:px-16",
            B = (0, h.isGatewayModelCardPath)(e) || "/gateway/rankings" === e ? "hidden" : M ? "hidden h-[68px] @lg:block" : "hidden h-[68px] lg:block",
            V = (0, g.cn)("text-label font-medium whitespace-nowrap transition-[color,opacity] duration-500 ease-out", R ? "text-white/50 hover:text-white" : "text-navy hover:opacity-70");
        return (0, t.jsxs)("header", {
            className: (0, g.cn)("z-50 transition-[background-color,border-color] duration-500 ease-out", R ? "border-b border-transparent bg-transparent" : "border-b border-border bg-surface", M ? "sticky top-0" : "fixed top-0 left-0 right-0", S && "pointer-events-none opacity-0"),
            "aria-hidden": S || void 0,
            children: [(0, t.jsx)("div", {
                "aria-hidden": "true",
                className: (0, g.cn)("pointer-events-none absolute top-0 left-0 right-0 transition-opacity duration-500 ease-out", B, R && "opacity-0"),
                style: h.pageGridRailOuterStyle,
                children: (0, t.jsx)("div", {
                    className: "h-full border-x border-border"
                })
            }), (0, t.jsxs)("nav", {
                "aria-label": "Main",
                className: (0, g.cn)("relative z-10 mx-auto flex h-[68px] max-w-[1168px] items-center justify-between py-[18px]", F),
                children: [(0, t.jsx)(r.default, {
                    href: "/",
                    className: "shrink-0",
                    children: (0, t.jsx)(m.default, {
                        className: "h-[26px] w-auto",
                        color: R ? "white" : "primary-mid"
                    })
                }), O ? null : (0, t.jsxs)("div", {
                    className: (0, g.cn)(z, "items-center gap-6"),
                    children: [(0, t.jsx)(y, {
                        label: c.label,
                        isOpen: "product" === b,
                        panelId: "product-dropdown",
                        onOpen: () => _("product"),
                        onClose: T,
                        inverted: R
                    }), (0, t.jsx)(y, {
                        label: d.label,
                        isOpen: "solutions" === b,
                        panelId: "solutions-dropdown",
                        onOpen: () => _("solutions"),
                        onClose: T,
                        inverted: R
                    }), u.map(e => e.external ? (0, t.jsx)("a", {
                        href: e.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: V,
                        children: e.label
                    }, e.label) : (0, t.jsx)(r.default, {
                        href: e.href,
                        className: V,
                        children: e.label
                    }, e.label))]
                }), (0, t.jsxs)("div", {
                    className: "flex items-center gap-3 shrink-0",
                    children: [(0, t.jsxs)("div", {
                        className: (0, g.cn)(z, "items-center gap-3"),
                        children: [(0, t.jsx)(o.default, {
                            href: l.URLS.bookDemo,
                            external: !0,
                            variant: R ? "glass" : "secondary",
                            size: "xs",
                            children: "Book a Demo"
                        }), (0, t.jsxs)(o.default, {
                            href: l.URLS.appSignIn,
                            external: !0,
                            variant: I && R ? "primary-mid" : R ? "cta-white" : "primary-dark",
                            size: "xs",
                            children: ["Dashboard", (0, t.jsx)(p.ArrowRightIcon, {})]
                        })]
                    }), (0, t.jsx)("button", {
                        type: "button",
                        className: (0, g.cn)("flex size-11 items-center justify-center border-none bg-transparent p-0 cursor-pointer transition-colors duration-500 ease-out", D, R ? "text-white" : "text-navy"),
                        onClick: () => v(e => !e),
                        "aria-label": a ? "Close menu" : "Open menu",
                        "aria-expanded": a,
                        "aria-controls": "mobile-panel",
                        children: a ? (0, t.jsx)(p.CloseIcon, {}) : (0, t.jsx)(p.HamburgerIcon, {})
                    })]
                })]
            }), !O && "product" === b && (0, t.jsx)(w, {
                dropdown: c,
                id: "product-dropdown",
                onClose: P,
                onMouseEnter: () => _("product"),
                onMouseLeave: T,
                contained: M
            }), !O && "solutions" === b && (0, t.jsx)(w, {
                dropdown: d,
                id: "solutions-dropdown",
                onClose: P,
                onMouseEnter: () => _("solutions"),
                onMouseLeave: T,
                contained: M
            }), (0, t.jsxs)("div", {
                id: "mobile-panel",
                "aria-hidden": !a,
                className: (0, g.cn)("relative z-10 bg-white border-b border-l border-border max-h-[calc(100vh-68px)] overflow-y-auto p-5 items-start gap-4", D, a ? "flex flex-col" : "hidden"),
                children: [O ? null : (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(j, {
                        dropdown: c,
                        defaultOpen: !0,
                        onNavigate: () => v(!1)
                    }), (0, t.jsx)(j, {
                        dropdown: d,
                        onNavigate: () => v(!1)
                    }), u.map(e => e.external ? (0, t.jsx)("a", {
                        href: e.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-body-sm font-medium text-navy hover:opacity-70 transition-opacity",
                        onClick: () => v(!1),
                        children: e.label
                    }, e.label) : (0, t.jsx)(r.default, {
                        href: e.href,
                        className: "text-body-sm font-medium text-navy hover:opacity-70 transition-opacity",
                        onClick: () => v(!1),
                        children: e.label
                    }, e.label))]
                }), (0, t.jsxs)("div", {
                    className: "flex flex-row gap-3 w-full pt-4",
                    children: [(0, t.jsx)(o.default, {
                        href: l.URLS.bookDemo,
                        external: !0,
                        variant: "secondary",
                        size: "xs",
                        className: "flex-1",
                        children: "Book a Demo"
                    }), (0, t.jsxs)(o.default, {
                        href: l.URLS.appSignIn,
                        external: !0,
                        variant: "primary-dark",
                        size: "xs",
                        className: "flex-1",
                        children: ["Dashboard", (0, t.jsx)(p.ArrowRightIcon, {})]
                    })]
                })]
            })]
        })
    }

    function L() {
        let e = (0, s.useMarketingChatOptional)()?.open ?? !1,
            r = (0, i.usePathname)();
        return e || "/video-ai" === r || x(r) ? null : (0, t.jsx)("div", {
            className: (0, g.cn)("h-[68px]", "/" === r && "bg-[#0a0a0a]"),
            "aria-hidden": "true"
        })
    }
    e.s(["HeaderSpacer", () => L, "default", () => k], 993983)
}, 18198, e => {
    "use strict";
    var t = e.i(205112),
        r = e.i(796353),
        n = e.i(728200),
        i = e.i(433770),
        a = e.i(481672);

    function o(e) {
        let t = e instanceof Element ? e : e?.parentElement;
        return !t || !!t.closest('[data-orion-composer-embed], [data-orion-chat-embed], [data-orion-ask], input, textarea, select, [contenteditable="true"]')
    }

    function s() {
        return a.marketingChat.enabled ? (0, t.jsx)(l, {}) : null
    }

    function l() {
        let [e, a] = (0, r.useState)(null), s = (0, i.useMarketingChatOptional)();
        return ((0, r.useEffect)(() => {
            let e = () => {
                    a(function() {
                        let e = window.getSelection();
                        if (!e || 0 === e.rangeCount || e.isCollapsed) return null;
                        let t = e.toString().replace(/\s+/g, " ").trim();
                        if (t.length < 3 || o(e.anchorNode) || o(e.focusNode)) return null;
                        let r = e.getRangeAt(0).getBoundingClientRect();
                        if (0 === r.width && 0 === r.height) return null;
                        let n = r.top - 10 - 36;
                        return n < 8 && (n = r.bottom + 10), {
                            text: t,
                            top: n,
                            left: Math.min(Math.max(r.left + r.width / 2, 88), window.innerWidth - 88)
                        }
                    }())
                },
                t = () => {
                    requestAnimationFrame(e)
                },
                r = t => {
                    ("Shift" === t.key || t.key.startsWith("Arrow")) && requestAnimationFrame(e)
                },
                n = () => a(null);
            return document.addEventListener("mouseup", t), document.addEventListener("keyup", r), window.addEventListener("scroll", n, !0), window.addEventListener("resize", n), () => {
                document.removeEventListener("mouseup", t), document.removeEventListener("keyup", r), window.removeEventListener("scroll", n, !0), window.removeEventListener("resize", n)
            }
        }, []), e) ? (0, t.jsx)("button", {
            type: "button",
            "data-orion-ask": "",
            onMouseDown: e => e.preventDefault(),
            onClick: () => {
                var t;
                let r;
                return t = e.text, void((r = (0, n.buildAskOrionPrompt)(t)) && s && (a(null), window.getSelection()?.removeAllRanges(), s.askInChat(r)))
            },
            className: "pointer-events-auto fixed z-[70] inline-flex -translate-x-1/2 items-center rounded-full bg-primary-mid px-3.5 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-primary-mid/90",
            style: {
                top: e.top,
                left: e.left
            },
            children: "Ask Orion"
        }) : null
    }
    e.s(["default", () => s])
}, 462276, e => {
    "use strict";
    var t = e.i(205112),
        r = e.i(796353),
        n = e.i(433770),
        i = e.i(481672),
        a = e.i(189242);

    function o() {
        let e = (0, n.useMarketingChatOptional)();
        return i.marketingChat.enabled && e && !e.open && e.embedSrc ? (0, t.jsx)("button", {
            type: "button",
            onClick: e.reopenChat,
            "aria-label": "Open Orion chat",
            title: "Open Orion",
            className: "fixed bottom-5 right-5 z-[60] inline-flex size-11 items-center justify-center rounded-full border border-black/[0.06] bg-white shadow-[0_8px_24px_rgba(16,41,85,0.12)] transition-colors hover:bg-primary-tint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-mid/40 focus-visible:ring-offset-2 sm:bottom-6 sm:right-6",
            children: (0, t.jsx)(a.default, {
                className: "h-[18px] w-auto",
                color: "primary-mid"
            })
        }) : null
    }
    var s = e.i(412872);
    let l = (0, s.default)("maximize-2", [
            ["path", {
                d: "M15 3h6v6",
                key: "1q9fwt"
            }],
            ["path", {
                d: "m21 3-7 7",
                key: "1l2asr"
            }],
            ["path", {
                d: "m3 21 7-7",
                key: "tjx5ai"
            }],
            ["path", {
                d: "M9 21H3v-6",
                key: "wtvkvv"
            }]
        ]),
        d = (0, s.default)("x", [
            ["path", {
                d: "M18 6 6 18",
                key: "1bl5f8"
            }],
            ["path", {
                d: "m6 6 12 12",
                key: "d8bk6v"
            }]
        ]);
    var c = e.i(728200),
        u = e.i(647163);

    function m(e) {
        let t = e.dataTransfer?.types;
        return !!t && Array.from(t).includes("Files")
    }

    function h({
        className: e
    }) {
        let {
            open: i,
            iframeSrc: a,
            expandHref: o,
            pendingPrompt: s,
            clearPendingPrompt: h,
            pendingFiles: p,
            clearPendingFiles: g,
            pendingSkillId: x,
            pendingSkillSessionId: f,
            clearPendingSkill: v,
            pendingAutoSubmit: b,
            closeChat: w,
            setSkillsBrowserOpen: y
        } = (0, n.useMarketingChat)(), [j, k] = (0, r.useState)(!1), [L, C] = (0, r.useState)(!1), [N, E] = (0, r.useState)(!1), [M, S] = (0, r.useState)(null), A = M === a, I = (0, r.useRef)(0), O = (0, r.useRef)(null), R = (0, r.useRef)(null), _ = (0, r.useRef)(null), T = (0, r.useRef)(!1), P = function(e, t) {
            if (!e) return t;
            try {
                return new URL(e).origin
            } catch {
                return t
            }
        }(a, (0, c.chatOrigin)()), z = (0, r.useCallback)(() => {
            C(!0), _.current && clearTimeout(_.current), _.current = setTimeout(() => {
                T.current || C(!1)
            }, 1800)
        }, []);
        if ((0, r.useEffect)(() => (y(N), () => y(!1)), [N, y]), (0, r.useEffect)(() => {
                let e = () => {
                    I.current = 0, k(!1), R.current && (R.current.style.pointerEvents = "none"), O.current && (O.current.style.pointerEvents = "")
                };
                return window.addEventListener("dragend", e), window.addEventListener("drop", e), () => {
                    window.removeEventListener("dragend", e), window.removeEventListener("drop", e)
                }
            }, []), (0, r.useEffect)(() => {
                if (!i || !a) return;
                let e = e => {
                        if (e.source !== O.current?.contentWindow) return;
                        let t = e.data;
                        if (t && "object" == typeof t && "string" == typeof t.type) {
                            if (t.type === c.CHAT_EMBED_READY_MESSAGE) return void S(a);
                            if (t.type === c.CHAT_EMBED_ACTIVITY_MESSAGE) return void z();
                            t.type === c.CHAT_EMBED_OVERLAY_MESSAGE && E(!!t.open)
                        }
                    },
                    t = () => {
                        document.activeElement === O.current && z()
                    };
                return window.addEventListener("message", e), window.addEventListener("blur", t), () => {
                    window.removeEventListener("message", e), window.removeEventListener("blur", t), _.current && clearTimeout(_.current)
                }
            }, [i, a, z]), (0, r.useEffect)(() => {
                !i && (C(!1), E(!1), T.current = !1, _.current && clearTimeout(_.current))
            }, [i]), (0, r.useEffect)(() => {
                if (!A || !s && !p?.length && !x) return;
                let e = O.current?.contentWindow;
                if (!e) return;
                let t = {
                    type: c.CHAT_EMBED_SET_PROMPT_MESSAGE,
                    prompt: s ?? "",
                    autoSubmit: b,
                    skillId: x ?? void 0,
                    skillSessionId: f ?? void 0,
                    files: p ?? void 0
                };
                e.postMessage(t, P), h(), g(), v()
            }, [s, p, x, f, b, A, P, h, g, v]), !a) return null;
        let D = e => {
                O.current && (O.current.style.pointerEvents = e ? "none" : ""), R.current && (R.current.style.pointerEvents = e ? "auto" : "none"), k(e)
            },
            F = async e => {
                if (!i || N || !m(e)) return;
                e.preventDefault(), e.stopPropagation(), I.current = 0, D(!1);
                let t = Array.from(e.dataTransfer.files),
                    r = O.current?.contentWindow;
                if (r && 0 !== t.length) try {
                    r.postMessage({
                        type: "vlm-chat-embed-drop-files",
                        files: t
                    }, P)
                } catch {
                    let e = await Promise.all(t.map(async e => ({
                        name: e.name,
                        type: e.type,
                        lastModified: e.lastModified,
                        buffer: await e.arrayBuffer()
                    })));
                    r.postMessage({
                        type: "vlm-chat-embed-drop-files",
                        filePayloads: e
                    }, P)
                }
            };
        return (0, t.jsxs)("aside", {
            className: (0, u.cn)("relative flex flex-col overflow-hidden", N ? "fixed inset-0 z-[200] max-w-none rounded-none bg-navy-dark/50 p-4 backdrop-blur-sm sm:p-8" : "h-full w-full max-w-[440px] shrink-0 rounded-2xl bg-white lg:max-w-none lg:w-[min(420px,36vw)]", !i && "pointer-events-none invisible fixed top-0 right-0 z-0 h-dvh w-[min(420px,36vw)]", i && !N && e),
            "aria-label": "Orion chat",
            "aria-hidden": !i,
            onDragEnter: e => {
                i && !N && m(e) && (e.preventDefault(), e.stopPropagation(), I.current += 1, 1 === I.current && D(!0))
            },
            onDragOver: e => {
                i && !N && m(e) && (e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "copy")
            },
            onDragLeave: e => {
                i && !N && m(e) && (e.preventDefault(), e.stopPropagation(), I.current = Math.max(0, I.current - 1), 0 === I.current && D(!1))
            },
            onDrop: F,
            children: [N ? null : (0, t.jsx)("div", {
                className: "flex h-12 shrink-0 items-center justify-end gap-2 bg-white px-3",
                onMouseEnter: () => {
                    T.current = !0, z()
                },
                onMouseLeave: () => {
                    T.current = !1, z()
                },
                onFocusCapture: z,
                children: (0, t.jsxs)("div", {
                    className: (0, u.cn)("flex items-center gap-0.5 transition-opacity duration-200", L ? "opacity-100" : "pointer-events-none opacity-0"),
                    children: [o ? (0, t.jsx)("a", {
                        href: o,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        tabIndex: L ? 0 : -1,
                        className: "inline-flex size-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-primary-tint hover:text-primary-mid",
                        title: "Open in chat.vlm.run",
                        "aria-label": "Expand chat to full page",
                        children: (0, t.jsx)(l, {
                            className: "size-4",
                            strokeWidth: 2
                        })
                    }) : null, (0, t.jsx)("button", {
                        type: "button",
                        onClick: w,
                        tabIndex: L ? 0 : -1,
                        className: "inline-flex size-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-primary-tint hover:text-primary-mid",
                        "aria-label": "Close chat",
                        children: (0, t.jsx)(d, {
                            className: "size-4",
                            strokeWidth: 2
                        })
                    })]
                })
            }), (0, t.jsxs)("div", {
                className: (0, u.cn)("relative min-h-0 flex-1", N && "h-full"),
                children: [(0, t.jsx)("iframe", {
                    ref: O,
                    src: a,
                    title: "Orion chat",
                    "data-orion-chat-embed": "",
                    referrerPolicy: "strict-origin-when-cross-origin",
                    allow: `clipboard-write ${P}; fullscreen ${P}; storage-access ${P}`,
                    sandbox: "allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-downloads",
                    className: (0, u.cn)("h-full min-h-0 w-full border-0", N ? "bg-transparent" : "bg-white"),
                    onLoad: () => S(a)
                }, a), N ? null : (0, t.jsx)("div", {
                    ref: R,
                    className: (0, u.cn)("absolute inset-0 z-10 flex items-center justify-center rounded-b-2xl transition-colors", j ? "bg-white/85" : "bg-transparent"),
                    style: {
                        pointerEvents: "none"
                    },
                    "aria-hidden": !0,
                    children: j ? (0, t.jsxs)("div", {
                        className: "text-center",
                        children: [(0, t.jsx)("p", {
                            className: "text-sm font-medium text-navy",
                            children: "Drop to attach"
                        }), (0, t.jsx)("p", {
                            className: "mt-0.5 text-xs text-muted",
                            children: "Images, PDFs, video, and more"
                        })]
                    }) : null
                })]
            })]
        })
    }

    function p({
        children: e
    }) {
        let {
            open: a,
            iframeSrc: s,
            gatewayPlayground: l
        } = (0, n.useMarketingChat)(), d = i.marketingChat.enabled || l, c = d && a;
        (0, r.useEffect)(() => {
            if (!c) return;
            let e = document.documentElement,
                {
                    body: t
                } = document,
                r = e.style.backgroundColor,
                n = t.style.backgroundColor;
            return e.style.backgroundColor = "#FFFFFF", t.style.backgroundColor = "#FFFFFF", () => {
                e.style.backgroundColor = r, t.style.backgroundColor = n
            }
        }, [c]);
        let m = c ? {
            "--page-rail-width": "100%"
        } : void 0;
        return (0, t.jsxs)("div", {
            className: (0, u.cn)("min-h-dvh transition-[padding] duration-300 ease-out", c ? "overflow-hidden p-2 sm:p-3" : "bg-surface"),
            style: c ? {
                backgroundColor: "#FFFFFF"
            } : void 0,
            children: [(0, t.jsxs)("div", {
                className: (0, u.cn)(c && "flex h-[calc(100dvh-1rem)] gap-2 sm:h-[calc(100dvh-1.5rem)] sm:gap-3"),
                children: [(0, t.jsx)("div", {
                    "data-marketing-shell-site": "",
                    style: m,
                    className: (0, u.cn)("@container min-w-0", c ? "chat-scrollbar relative hidden h-full min-w-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain rounded-2xl border border-black/[0.06] bg-surface md:block" : "min-h-dvh"),
                    children: e
                }), d && s ? (0, t.jsx)(h, {
                    className: "max-md:max-w-none max-md:flex-1"
                }) : null]
            }), (0, t.jsx)(o, {})]
        })
    }
    e.s(["MarketingShell", () => p], 462276)
}, 617571, e => {
    "use strict";
    var t = e.i(205112),
        r = e.i(520353),
        n = e.i(307002),
        i = e.i(796353);
    let a = ["/"],
        o = "vlm-announce-gateway-page";
    var s = e.i(588634),
        l = e.i(885076),
        d = e.i(647163);

    function c() {
        let e = (0, n.usePathname)(),
            t = a.some(t => "/" === t ? "/" === e : e === t || e.startsWith(`${t}/`)),
            [r, s] = (0, i.useState)(!1);
        return (0, i.useEffect)(() => {
            window.localStorage.removeItem(o), s("1" === window.sessionStorage.getItem(o))
        }, []), {
            visible: t && !r,
            dismiss: () => {
                window.sessionStorage.setItem(o, "1"), s(!0)
            }
        }
    }

    function u({
        className: e,
        contained: i = !1
    }) {
        let a = (0, n.usePathname)(),
            {
                visible: o,
                dismiss: u
            } = c(),
            m = "/" === a;
        return o ? (0, t.jsx)("div", {
            className: (0, d.cn)("pointer-events-none z-[5] flex justify-center", i ? "absolute inset-x-0 top-full mt-2.5" : "relative z-20 pb-[10px]", m && !i && "bg-[#0a0a0a] pb-0", e),
            style: m ? void 0 : {
                paddingLeft: l.PAGE_RAIL_INSET,
                paddingRight: l.PAGE_RAIL_INSET
            },
            children: (0, t.jsxs)("div", {
                className: (0, d.cn)("pointer-events-auto relative flex h-11 w-full items-center justify-center rounded-none border px-12 lg:h-9 lg:px-10", m ? "border-white/10 bg-white/[0.06]" : "announcement-shimmer border-border bg-primary-tint-badge"),
                children: [(0, t.jsxs)(r.default, {
                    href: "/blog/introducing-gateway",
                    className: (0, d.cn)("inline-flex min-w-0 items-center gap-1.5 truncate font-sans text-[13px] font-medium transition-opacity hover:opacity-80", m ? "text-white/80" : "text-navy"),
                    children: [(0, t.jsx)("span", {
                        className: "truncate",
                        children: "Now live: VLM Run Gateway"
                    }), (0, t.jsx)(s.ArrowRightIcon, {
                        size: 12
                    })]
                }), (0, t.jsx)("button", {
                    type: "button",
                    onClick: u,
                    "aria-label": "Dismiss announcement",
                    className: (0, d.cn)("absolute right-1.5 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center transition-colors lg:size-7", m ? "text-white/50 hover:text-white" : "text-muted hover:text-navy"),
                    children: (0, t.jsx)("span", {
                        className: "scale-75",
                        children: (0, t.jsx)(s.CloseIcon, {})
                    })
                })]
            })
        }) : null
    }
    e.s(["default", () => u, "useAnnouncementVisible", () => c], 617571)
}, 575863, e => {
    "use strict";
    var t = e.i(205112),
        r = e.i(796353),
        n = e.i(588634),
        i = e.i(71829);

    function a() {
        let [e, i] = (0, r.useState)(""), [a, o] = (0, r.useState)("idle"), [s, l] = (0, r.useState)("");
        async function d(t) {
            if (t.preventDefault(), "loading" !== a) {
                o("loading"), l("");
                try {
                    let t = await fetch("/api/newsletter", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: e
                            })
                        }),
                        r = await t.json().catch(() => null);
                    if (!t.ok) {
                        o("error"), l(r?.message ?? "Something went wrong. Please try again.");
                        return
                    }
                    o("success"), l(r?.message ?? "You're subscribed. Thanks for joining."), i("")
                } catch {
                    o("error"), l("Something went wrong. Please try again.")
                }
            }
        }
        return (0, t.jsxs)("div", {
            className: "flex flex-col gap-3 pt-2",
            children: [(0, t.jsx)("h3", {
                className: "text-white text-label font-semibold tracking-[0.12em] uppercase",
                children: "Newsletter"
            }), "success" === a ? (0, t.jsx)("p", {
                className: "text-white/70 text-sm leading-[140%]",
                role: "status",
                children: s
            }) : (0, t.jsxs)("form", {
                onSubmit: d,
                className: "flex flex-col gap-2",
                children: [(0, t.jsxs)("div", {
                    className: "relative",
                    children: [(0, t.jsx)("label", {
                        htmlFor: "footer-newsletter-email",
                        className: "sr-only",
                        children: "Email address"
                    }), (0, t.jsx)("input", {
                        id: "footer-newsletter-email",
                        type: "email",
                        name: "email",
                        required: !0,
                        autoComplete: "email",
                        value: e,
                        onChange: e => {
                            i(e.target.value), "error" === a && (o("idle"), l(""))
                        },
                        placeholder: "you@company.com",
                        disabled: "loading" === a,
                        className: "w-full rounded-lg border border-white/10 bg-white/[0.08] px-3.5 py-2.5 pr-14 text-sm text-white outline-none transition-[border-color,background-color] placeholder:text-white/40 focus:border-white/25 focus:bg-white/[0.12] disabled:opacity-60"
                    }), (0, t.jsx)("button", {
                        type: "submit",
                        "aria-label": "Subscribe to newsletter",
                        disabled: "loading" === a,
                        className: "absolute right-1.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md text-white/60 transition-colors hover:text-white disabled:opacity-60 lg:h-8 lg:w-8",
                        children: (0, t.jsx)(n.ArrowRightIcon, {
                            size: 16
                        })
                    })]
                }), (0, t.jsx)("p", {
                    className: "text-white/40 text-xs leading-[140%]",
                    children: "Product updates and research. Unsubscribe in one click."
                }), "error" === a && s ? (0, t.jsx)("p", {
                    className: "text-red-300 text-xs leading-[140%]",
                    role: "alert",
                    children: s
                }) : null]
            })]
        })
    }
    i.URLS.app, i.URLS.chat, i.URLS.docs, e.s(["default", () => a], 575863)
}, 502506, e => {
    "use strict";
    var t = e.i(205112),
        r = e.i(307002),
        n = e.i(433770),
        i = e.i(885076),
        a = e.i(647163);

    function o() {
        let e = (0, r.usePathname)(),
            o = (0, n.useMarketingChatOptional)()?.open ?? !1;
        return "/" === e || "/gateway/rankings" === e || (0, i.isGatewayModelCardPath)(e) ? null : (0, t.jsx)("div", {
            "aria-hidden": "true",
            className: (0, a.cn)("pointer-events-none z-10", o ? "absolute inset-0" : "fixed bottom-0 left-0 right-0 top-[68px] lg:inset-0"),
            style: i.pageGridRailOuterStyle,
            children: (0, t.jsx)("div", {
                className: "h-full border-x border-border"
            })
        })
    }
    e.s(["default", () => o])
}]);