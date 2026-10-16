(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 658927, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 248971, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(796353);

    function a(e, t) {
        let r = (0, n.useRef)(null),
            a = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null, e());
                let t = a.current;
                t && (a.current = null, t())
            } else e && (r.current = i(e, n)), t && (a.current = i(t, n))
        }, [e, t])
    }

    function i(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        };
        {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 222242, (e, t, r) => {
    "use strict";

    function n({
        widthInt: e,
        heightInt: t,
        blurWidth: r,
        blurHeight: n,
        blurDataURL: a,
        objectFit: i
    }) {
        let o = r ? 40 * r : e,
            u = n ? 40 * n : t,
            l = o && u ? `viewBox='0 0 ${o} ${u}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 402164, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        VALID_LOADERS: function() {
            return i
        },
        imageConfigDefault: function() {
            return o
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        o = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumRedirects: 3,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1
        }
}, 660297, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return l
        }
    }), e.r(658927);
    let n = e.r(222242),
        a = e.r(402164),
        i = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function o(e) {
        return void 0 !== e.default
    }

    function u(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function l({
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: l = !1,
        preload: s = !1,
        loading: c,
        className: d,
        quality: f,
        width: p,
        height: m,
        fill: h = !1,
        style: g,
        overrideSrc: b,
        onLoad: y,
        onLoadingComplete: _,
        placeholder: v = "empty",
        blurDataURL: P,
        fetchPriority: S,
        decoding: E = "async",
        layout: w,
        objectFit: C,
        objectPosition: O,
        lazyBoundary: j,
        lazyRoot: x,
        ...R
    }, M) {
        var I;
        let A, k, T, {
                imgConf: L,
                showAltText: $,
                blurComplete: U,
                defaultLoader: N
            } = M,
            z = L || a.imageConfigDefault;
        if ("allSizes" in z) A = z;
        else {
            let e = [...z.deviceSizes, ...z.imageSizes].sort((e, t) => e - t),
                t = z.deviceSizes.sort((e, t) => e - t),
                r = z.qualities?.sort((e, t) => e - t);
            A = {
                ...z,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === N) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let D = R.loader || N;
        delete R.loader, delete R.srcSet;
        let F = "__next_img_default" in D;
        if (F) {
            if ("custom" === A.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = D;
            D = t => {
                let {
                    config: r,
                    ...n
                } = t;
                return e(n)
            }
        }
        if (w) {
            "fill" === w && (h = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            } [w];
            e && (g = {
                ...g,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            } [w];
            r && !t && (t = r)
        }
        let B = "",
            G = u(p),
            H = u(m);
        if ((I = e) && "object" == typeof I && (o(I) || void 0 !== I.src)) {
            let t = o(e) ? e.default : e;
            if (!t.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: !1,
                configurable: !0
            });
            if (!t.height || !t.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: !1,
                configurable: !0
            });
            if (k = t.blurWidth, T = t.blurHeight, P = P || t.blurDataURL, B = t.src, !h)
                if (G || H) {
                    if (G && !H) {
                        let e = G / t.width;
                        H = Math.round(t.height * e)
                    } else if (!G && H) {
                        let e = H / t.height;
                        G = Math.round(t.width * e)
                    }
                } else G = t.width, H = t.height
        }
        let q = !l && !s && ("lazy" === c || void 0 === c);
        (!(e = "string" == typeof e ? e : B) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, q = !1), A.unoptimized && (r = !0), F && !A.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let W = u(f),
            V = Object.assign(h ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: C,
                objectPosition: O
            } : {}, $ ? {} : {
                color: "transparent"
            }, g),
            X = U || "empty" === v ? null : "blur" === v ? `url("data:image/svg+xml;charset=utf-8,${(0,n.getImageBlurSvg)({widthInt:G,heightInt:H,blurWidth:k,blurHeight:T,blurDataURL:P||"",objectFit:V.objectFit})}")` : `url("${v}")`,
            K = i.includes(V.objectFit) ? "fill" === V.objectFit ? "100% 100%" : "cover" : V.objectFit,
            Y = X ? {
                backgroundSize: K,
                backgroundPosition: V.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: X
            } : {},
            J = function({
                config: e,
                src: t,
                unoptimized: r,
                width: n,
                quality: a,
                sizes: i,
                loader: o
            }) {
                if (r) return {
                    src: t,
                    srcSet: void 0,
                    sizes: void 0
                };
                let {
                    widths: u,
                    kind: l
                } = function({
                    deviceSizes: e,
                    allSizes: t
                }, r, n) {
                    if (n) {
                        let r = /(^|\s)(1?\d?\d)vw/g,
                            a = [];
                        for (let e; e = r.exec(n);) a.push(parseInt(e[2]));
                        if (a.length) {
                            let r = .01 * Math.min(...a);
                            return {
                                widths: t.filter(t => t >= e[0] * r),
                                kind: "w"
                            }
                        }
                        return {
                            widths: t,
                            kind: "w"
                        }
                    }
                    return "number" != typeof r ? {
                        widths: e,
                        kind: "w"
                    } : {
                        widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                        kind: "x"
                    }
                }(e, n, i), s = u.length - 1;
                return {
                    sizes: i || "w" !== l ? i : "100vw",
                    srcSet: u.map((r, n) => `${o({config:e,src:t,quality:a,width:r})} ${"w"===l?r:n+1}${l}`).join(", "),
                    src: o({
                        config: e,
                        src: t,
                        quality: a,
                        width: u[s]
                    })
                }
            }({
                config: A,
                src: e,
                unoptimized: r,
                width: G,
                quality: W,
                sizes: t,
                loader: D
            }),
            Q = q ? "lazy" : c;
        return {
            props: {
                ...R,
                loading: Q,
                fetchPriority: S,
                width: G,
                height: H,
                decoding: E,
                className: d,
                style: {
                    ...V,
                    ...Y
                },
                sizes: J.sizes,
                srcSet: J.srcSet,
                src: b || J.src
            },
            meta: {
                unoptimized: r,
                preload: s || l,
                placeholder: v,
                fill: h
            }
        }
    }
}, 136444, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let n = e.r(796353),
        a = "undefined" == typeof window,
        i = a ? () => {} : n.useLayoutEffect,
        o = a ? () => {} : n.useEffect;

    function u(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function u() {
            if (t && t.mountedInstances) {
                let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return a && (t?.mountedInstances?.add(e.children), u()), i(() => (t?.mountedInstances?.add(e.children), () => {
            t?.mountedInstances?.delete(e.children)
        })), i(() => (t && (t._pendingUpdate = u), () => {
            t && (t._pendingUpdate = u)
        })), o(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 613351, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return h
        },
        defaultHead: function() {
            return d
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let i = e.r(481258),
        o = e.r(744066),
        u = e.r(205112),
        l = o._(e.r(796353)),
        s = i._(e.r(136444)),
        c = e.r(348965);

    function d() {
        return [(0, u.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, u.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function f(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === l.default.Fragment ? e.concat(l.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(658927);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];

    function m(e) {
        let t, r, n, a;
        return e.reduce(f, []).reverse().concat(d().reverse()).filter((t = new Set, r = new Set, n = new Set, a = {}, e => {
            let i = !0,
                o = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                o = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? i = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? i = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = p.length; t < r; t++) {
                        let r = p[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) n.has(r) ? i = !1 : n.add(r);
                            else {
                                let t = e.props[r],
                                    n = a[r] || new Set;
                                ("name" !== r || !o) && n.has(t) ? i = !1 : (n.add(t), a[r] = n)
                            }
                    }
            }
            return i
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return l.default.cloneElement(e, {
                key: r
            })
        })
    }
    let h = function({
        children: e
    }) {
        let t = (0, l.useContext)(c.HeadManagerContext);
        return (0, u.jsx)(s.default, {
            reduceComponentsToState: m,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 926464, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(481258)._(e.r(796353)),
        a = e.r(402164),
        i = n.default.createContext(a.imageConfigDefault)
}, 58586, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(481258)._(e.r(796353)).default.createContext(null)
}, 33109, (e, t, r) => {
    "use strict";

    function n(e, t) {
        let r = e || 75;
        return t?.qualities?.length ? t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, 0) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 8640, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(33109);

    function a({
        config: e,
        src: t,
        width: r,
        quality: a
    }) {
        if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let i = (0, n.findClosestQuality)(a, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${i}${t.startsWith("/_next/static/media/")&&1?"&dpl=dpl_ECYyVTvmC2RAfYSm8YdEVejNFnj3":""}`
    }
    a.__next_img_default = !0;
    let i = a
}, 453135, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return v
        }
    });
    let n = e.r(481258),
        a = e.r(744066),
        i = e.r(205112),
        o = a._(e.r(796353)),
        u = n._(e.r(129120)),
        l = n._(e.r(613351)),
        s = e.r(660297),
        c = e.r(402164),
        d = e.r(926464);
    e.r(658927);
    let f = e.r(58586),
        p = n._(e.r(8640)),
        m = e.r(248971),
        h = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function g(e, t, r, n, a, i, o) {
        let u = e?.src;
        e && e["data-loaded-src"] !== u && (e["data-loaded-src"] = u, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && a(!0), r?.current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let n = !1,
                        a = !1;
                    r.current({
                        ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => n,
                        isPropagationStopped: () => a,
                        persist: () => {},
                        preventDefault: () => {
                            n = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            a = !0, t.stopPropagation()
                        }
                    })
                }
                n?.current && n.current(e)
            }
        }))
    }

    function b(e) {
        return o.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let y = (0, o.forwardRef)(({
        src: e,
        srcSet: t,
        sizes: r,
        height: n,
        width: a,
        decoding: u,
        className: l,
        style: s,
        fetchPriority: c,
        placeholder: d,
        loading: f,
        unoptimized: p,
        fill: h,
        onLoadRef: y,
        onLoadingCompleteRef: _,
        setBlurComplete: v,
        setShowAltText: P,
        sizesInput: S,
        onLoad: E,
        onError: w,
        ...C
    }, O) => {
        let j = (0, o.useCallback)(e => {
                e && (w && (e.src = e.src), e.complete && g(e, d, y, _, v, p, S))
            }, [e, d, y, _, v, w, p, S]),
            x = (0, m.useMergedRef)(O, j);
        return (0, i.jsx)("img", {
            ...C,
            ...b(c),
            loading: f,
            width: a,
            height: n,
            decoding: u,
            "data-nimg": h ? "fill" : "1",
            className: l,
            style: s,
            sizes: r,
            srcSet: t,
            src: e,
            ref: x,
            onLoad: e => {
                g(e.currentTarget, d, y, _, v, p, S)
            },
            onError: e => {
                P(!0), "empty" !== d && v(!0), w && w(e)
            }
        })
    });

    function _({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...b(t.fetchPriority)
        };
        return e && u.default.preload ? (u.default.preload(t.src, r), null) : (0, i.jsx)(l.default, {
            children: (0, i.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let v = (0, o.forwardRef)((e, t) => {
        let r = (0, o.useContext)(f.RouterContext),
            n = (0, o.useContext)(d.ImageConfigContext),
            a = (0, o.useMemo)(() => {
                let e = h || n || c.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    r = e.deviceSizes.sort((e, t) => e - t),
                    a = e.qualities?.sort((e, t) => e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: r,
                    qualities: a,
                    localPatterns: "undefined" == typeof window ? n?.localPatterns : e.localPatterns
                }
            }, [n]),
            {
                onLoad: u,
                onLoadingComplete: l
            } = e,
            m = (0, o.useRef)(u);
        (0, o.useEffect)(() => {
            m.current = u
        }, [u]);
        let g = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
            g.current = l
        }, [l]);
        let [b, v] = (0, o.useState)(!1), [P, S] = (0, o.useState)(!1), {
            props: E,
            meta: w
        } = (0, s.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: a,
            blurComplete: b,
            showAltText: P
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(y, {
                ...E,
                unoptimized: w.unoptimized,
                placeholder: w.placeholder,
                fill: w.fill,
                onLoadRef: m,
                onLoadingCompleteRef: g,
                setBlurComplete: v,
                setShowAltText: S,
                sizesInput: e.sizes,
                ref: t
            }), w.preload ? (0, i.jsx)(_, {
                isAppRouter: !r,
                imgAttributes: E
            }) : null]
        })
    });
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 834256, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        assign: function() {
            return l
        },
        searchParamsToUrlQuery: function() {
            return i
        },
        urlQueryToSearchParams: function() {
            return u
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });

    function i(e) {
        let t = {};
        for (let [r, n] of e.entries()) {
            let e = t[r];
            void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n]
        }
        return t
    }

    function o(e) {
        return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }

    function u(e) {
        let t = new URLSearchParams;
        for (let [r, n] of Object.entries(e))
            if (Array.isArray(n))
                for (let e of n) t.append(r, o(e));
            else t.set(r, o(n));
        return t
    }

    function l(e, ...t) {
        for (let r of t) {
            for (let t of r.keys()) e.delete(t);
            for (let [t, n] of r.entries()) e.append(t, n)
        }
        return e
    }
}, 889167, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        formatUrl: function() {
            return u
        },
        formatWithValidation: function() {
            return s
        },
        urlObjectKeys: function() {
            return l
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let i = e.r(744066)._(e.r(834256)),
        o = /https?|ftp|gopher|file/;

    function u(e) {
        let {
            auth: t,
            hostname: r
        } = e, n = e.protocol || "", a = e.pathname || "", u = e.hash || "", l = e.query || "", s = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? s = t + e.host : r && (s = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (s += ":" + e.port)), l && "object" == typeof l && (l = String(i.urlQueryToSearchParams(l)));
        let c = e.search || l && `?${l}` || "";
        return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || o.test(n)) && !1 !== s ? (s = "//" + (s || ""), a && "/" !== a[0] && (a = "/" + a)) : s || (s = ""), u && "#" !== u[0] && (u = "#" + u), c && "?" !== c[0] && (c = "?" + c), a = a.replace(/[?#]/g, encodeURIComponent), c = c.replace("#", "%23"), `${n}${s}${a}${c}${u}`
    }
    let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function s(e) {
        return u(e)
    }
}, 124927, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        DecodeError: function() {
            return b
        },
        MiddlewareNotFoundError: function() {
            return P
        },
        MissingStaticPage: function() {
            return v
        },
        NormalizeError: function() {
            return y
        },
        PageNotFoundError: function() {
            return _
        },
        SP: function() {
            return h
        },
        ST: function() {
            return g
        },
        WEB_VITALS: function() {
            return i
        },
        execOnce: function() {
            return o
        },
        getDisplayName: function() {
            return d
        },
        getLocationOrigin: function() {
            return s
        },
        getURL: function() {
            return c
        },
        isAbsoluteUrl: function() {
            return l
        },
        isResSent: function() {
            return f
        },
        loadGetInitialProps: function() {
            return m
        },
        normalizeRepeatedSlashes: function() {
            return p
        },
        stringifyError: function() {
            return S
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function o(e) {
        let t, r = !1;
        return (...n) => (r || (r = !0, t = e(...n)), t)
    }
    let u = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        l = e => u.test(e);

    function s() {
        let {
            protocol: e,
            hostname: t,
            port: r
        } = window.location;
        return `${e}//${t}${r?":"+r:""}`
    }

    function c() {
        let {
            href: e
        } = window.location, t = s();
        return e.substring(t.length)
    }

    function d(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function f(e) {
        return e.finished || e.headersSent
    }

    function p(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function m(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await m(t.Component, t.ctx)
        } : {};
        let n = await e.getInitialProps(t);
        if (r && f(r)) return n;
        if (!n) throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return n
    }
    let h = "undefined" != typeof performance,
        g = h && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class b extends Error {}
    class y extends Error {}
    class _ extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class v extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class P extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function S(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}, 111268, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(124927),
        a = e.r(80240);

    function i(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, n.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, a.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}, 528318, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 520353, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return b
        },
        useLinkStatus: function() {
            return _
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let i = e.r(744066),
        o = e.r(205112),
        u = i._(e.r(796353)),
        l = e.r(889167),
        s = e.r(515711),
        c = e.r(248971),
        d = e.r(124927),
        f = e.r(188149);
    e.r(658927);
    let p = e.r(976073),
        m = e.r(111268),
        h = e.r(359068);

    function g(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e)
    }

    function b(t) {
        var r;
        let n, a, i, [l, b] = (0, u.useOptimistic)(p.IDLE_LINK_STATUS),
            _ = (0, u.useRef)(null),
            {
                href: v,
                as: P,
                children: S,
                prefetch: E = null,
                passHref: w,
                replace: C,
                shallow: O,
                scroll: j,
                onClick: x,
                onMouseEnter: R,
                onTouchStart: M,
                legacyBehavior: I = !1,
                onNavigate: A,
                ref: k,
                unstable_dynamicOnHover: T,
                ...L
            } = t;
        n = S, I && ("string" == typeof n || "number" == typeof n) && (n = (0, o.jsx)("a", {
            children: n
        }));
        let $ = u.default.useContext(s.AppRouterContext),
            U = !1 !== E,
            N = !1 !== E ? null === (r = E) || "auto" === r ? h.FetchStrategy.PPR : h.FetchStrategy.Full : h.FetchStrategy.PPR,
            {
                href: z,
                as: D
            } = u.default.useMemo(() => {
                let e = g(v);
                return {
                    href: e,
                    as: P ? g(P) : e
                }
            }, [v, P]);
        if (I) {
            if (n?.$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            a = u.default.Children.only(n)
        }
        let F = I ? a && "object" == typeof a && a.ref : k,
            B = u.default.useCallback(e => (null !== $ && (_.current = (0, p.mountLinkInstance)(e, z, $, N, U, b)), () => {
                _.current && ((0, p.unmountLinkForCurrentNavigation)(_.current), _.current = null), (0, p.unmountPrefetchableInstance)(e)
            }), [U, z, $, N, b]),
            G = {
                ref: (0, c.useMergedRef)(B, F),
                onClick(t) {
                    I || "function" != typeof x || x(t), I && a.props && "function" == typeof a.props.onClick && a.props.onClick(t), !$ || t.defaultPrevented || function(t, r, n, a, i, o, l) {
                        if ("undefined" != typeof window) {
                            let s, {
                                nodeName: c
                            } = t.currentTarget;
                            if ("A" === c.toUpperCase() && ((s = t.currentTarget.getAttribute("target")) && "_self" !== s || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, m.isLocalURL)(r)) {
                                i && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), l) {
                                let e = !1;
                                if (l({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: d
                            } = e.r(731138);
                            u.default.startTransition(() => {
                                d(n || r, i ? "replace" : "push", o ?? !0, a.current)
                            })
                        }
                    }(t, z, D, _, C, j, A)
                },
                onMouseEnter(e) {
                    I || "function" != typeof R || R(e), I && a.props && "function" == typeof a.props.onMouseEnter && a.props.onMouseEnter(e), $ && U && (0, p.onNavigationIntent)(e.currentTarget, !0 === T)
                },
                onTouchStart: function(e) {
                    I || "function" != typeof M || M(e), I && a.props && "function" == typeof a.props.onTouchStart && a.props.onTouchStart(e), $ && U && (0, p.onNavigationIntent)(e.currentTarget, !0 === T)
                }
            };
        return (0, d.isAbsoluteUrl)(D) ? G.href = D : I && !w && ("a" !== a.type || "href" in a.props) || (G.href = (0, f.addBasePath)(D)), i = I ? u.default.cloneElement(a, G) : (0, o.jsx)("a", {
            ...L,
            ...G,
            children: n
        }), (0, o.jsx)(y.Provider, {
            value: l,
            children: i
        })
    }
    e.r(528318);
    let y = (0, u.createContext)(p.IDLE_LINK_STATUS),
        _ = () => (0, u.useContext)(y);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 885076, e => {
    "use strict";
    let t = "max(20px, calc((var(--page-rail-width, 100vw) - 1168px) / 2))";

    function r(e) {
        return /^\/gateway\/models\/(?!frontier-models$)[^/]+$/.test(e)
    }
    let n = {
        padding: `0 ${t}`
    };
    e.s(["PAGE_RAIL_INSET", 0, t, "gatewaySectionPaddingClass", 0, "px-5 pb-24 pt-28 sm:px-8 sm:py-24 lg:px-16", "gatewaySectionPaddingYClass", 0, "pb-24 pt-28 sm:py-24", "isGatewayModelCardPath", () => r, "pageGridRailOuterStyle", 0, n])
}, 939027, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return c
        },
        getImageProps: function() {
            return s
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let i = e.r(481258),
        o = e.r(660297),
        u = e.r(453135),
        l = i._(e.r(8640));

    function s(e) {
        let {
            props: t
        } = (0, o.getImgProps)(e, {
            defaultLoader: l.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            }
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return {
            props: t
        }
    }
    let c = u.Image
}, 903965, (e, t, r) => {
    t.exports = e.r(939027)
}, 433770, 728200, 481672, e => {
    "use strict";
    var t = e.i(205112),
        r = e.i(796353),
        n = e.i(283491);
    let a = new Set(["/c", "/embed/c", "/embed/chat"]),
        i = new Set(["initial_message", "auto_submit", "hide_auth", "utm_source", "utm_medium", "utm_campaign", "toolsets", "models"]);

    function o() {
        return (n.default.env.NEXT_PUBLIC_CHAT_ORIGIN?.replace(/\/$/, "") || "https://chat.vlm.run").trim()
    }

    function u(e) {
        let t = e.replace(/\s+/g, " ").trim();
        return t ? `Can you explain this:

"${t}"` : ""
    }

    function l(e) {
        let t = e.trim(),
            r = o(),
            n = new URL("/c", r);
        n.searchParams.set("initial_message", t), n.searchParams.set("auto_submit", "true"), n.searchParams.set("utm_source", "website"), n.searchParams.set("utm_medium", "ask-orion"), n.searchParams.set("utm_campaign", "selection");
        let a = new URL("/embed/chat", r);
        return a.searchParams.set("initial_message", t), a.searchParams.set("auto_submit", "true"), a.searchParams.set("hide_auth", "true"), a.searchParams.set("utm_source", "website"), a.searchParams.set("utm_medium", "ask-orion"), a.searchParams.set("utm_campaign", "selection"), {
            embedSrc: a.toString(),
            expandHref: n.toString()
        }
    }

    function s() {
        let e = new URL("/embed/c", o());
        return e.searchParams.set("hide_auth", "true"), e.searchParams.set("utm_source", "website"), e.searchParams.set("utm_medium", "prefetch"), e.searchParams.set("utm_campaign", "sidebar"), e.toString()
    }

    function c(e, t) {
        try {
            return new URL(e).searchParams.get(t)?.trim() || null
        } catch {
            return null
        }
    }

    function d(e) {
        return c(e, "initial_message")
    }

    function f(e) {
        return c(e, "skill_id")
    }

    function p(e) {
        return c(e, "session_id")
    }

    function m(e) {
        return !!f(e)
    }

    function h(e) {
        return !!(c(e, "file_ids") || c(e, "attachment_url"))
    }

    function g(e) {
        if (!e) return !1;
        try {
            let t = new URL(e);
            return "/embed/c" === t.pathname && !t.searchParams.has("initial_message")
        } catch {
            return !1
        }
    }

    function b(e) {
        try {
            return /^\/embed\/(chat|c)\/.+/.test(new URL(e).pathname)
        } catch {
            return !1
        }
    }

    function y(e) {
        try {
            let t = new URL(e);
            if (!a.has(t.pathname) || !t.searchParams.get("initial_message")?.trim()) return !1;
            for (let [e] of t.searchParams.entries())
                if (!i.has(e)) return !1;
            return !0
        } catch {
            return !1
        }
    }

    function _(e) {
        try {
            let t = new URL(e);
            return t.searchParams.delete("auto_submit"), t.toString()
        } catch {
            return e
        }
    }

    function v(e, t) {
        if (b(e)) return !0;
        let r = !!(t && t.length > 0);
        return h(e) && !r
    }

    function P(e, t, r) {
        return !!e && !v(t, r)
    }

    function S(e, t, r) {
        let n = d(t),
            a = f(t),
            i = p(t),
            o = !!(r && r.length > 0) || !!a || h(t);
        return {
            reuse: P(e, t, r),
            stageOnly: o,
            autoSubmit: !o,
            prompt: n,
            skillId: a,
            skillSessionId: i
        }
    }

    function E(e) {
        let t = Array.isArray(e.files) ? e.files.filter(e => "undefined" != typeof File && e instanceof File) : [];
        return t.length > 0 ? t : Array.isArray(e.filePayloads) ? e.filePayloads.filter(e => e && e.buffer instanceof ArrayBuffer && "string" == typeof e.name).map(e => new File([e.buffer], e.name, {
            type: "string" == typeof e.type ? e.type : "",
            lastModified: "number" == typeof e.lastModified ? e.lastModified : Date.now()
        })) : []
    }
    e.s(["CHAT_EMBED_ACTIVITY_MESSAGE", 0, "vlm-chat-embed-activity", "CHAT_EMBED_OVERLAY_MESSAGE", 0, "vlm-chat-embed-overlay", "CHAT_EMBED_READY_MESSAGE", 0, "vlm-chat-embed-ready", "CHAT_EMBED_SET_PROMPT_MESSAGE", 0, "vlm-chat-embed-set-prompt", "buildAskOrionChatUrls", () => l, "buildAskOrionPrompt", () => u, "buildWarmChatEmbedUrl", () => s, "canReuseChatIframe", () => P, "chatLaunchHasRemoteFiles", () => h, "chatLaunchHasSkill", () => m, "chatLaunchNeedsRemount", () => v, "chatOrigin", () => o, "extractInitialMessage", () => d, "extractSkillId", () => f, "extractSkillSessionId", () => p, "filesFromEmbedMessage", () => E, "isSessionChatEmbedUrl", () => b, "isTextOnlyChatLaunchUrl", () => y, "isWarmChatEmbedUrl", () => g, "planChatLaunch", () => S, "withoutAutoSubmit", () => _], 728200);
    let w = {
        enabled: !1
    };
    e.s(["marketingChat", 0, w], 481672);
    var C = e.i(302766);
    let O = "vlm.marketingChat.v1",
        j = (0, r.createContext)(null);

    function x({
        children: e
    }) {
        let [n, a] = (0, r.useState)(!1), [i, u] = (0, r.useState)(null), [c, d] = (0, r.useState)(null), [f, p] = (0, r.useState)(null), [m, h] = (0, r.useState)(null), [g, b] = (0, r.useState)(null), [y, v] = (0, r.useState)(null), [P, E] = (0, r.useState)(null), [x, R] = (0, r.useState)(!0), [M, I] = (0, r.useState)(!1), [A, k] = (0, r.useState)(!1), [T, L] = (0, r.useState)(!1), [$, U] = (0, r.useState)(!1), N = (0, r.useRef)(null);
        N.current = c, (0, r.useEffect)(() => {
            if (!w.enabled) return void U(!0);
            let e = function() {
                try {
                    let e = sessionStorage.getItem(O);
                    if (!e) return null;
                    let t = JSON.parse(e);
                    if ("string" != typeof t.embedSrc || !t.embedSrc) return null;
                    return {
                        open: !!t.open,
                        embedSrc: t.embedSrc,
                        expandHref: "string" == typeof t.expandHref ? t.expandHref : null
                    }
                } catch {
                    return null
                }
            }();
            e && (u(e.embedSrc), d(e.embedSrc), p(e.expandHref), a(e.open)), U(!0)
        }, []), (0, r.useEffect)(() => {
            $ && w.enabled && function(e) {
                try {
                    if (!e?.embedSrc) return void sessionStorage.removeItem(O);
                    sessionStorage.setItem(O, JSON.stringify(e))
                } catch {}
            }(i ? {
                open: n,
                embedSrc: i,
                expandHref: f
            } : null)
        }, [$, n, i, f]), (0, r.useEffect)(() => {
            $ && w.enabled && M && !c && d(s())
        }, [$, M, c]);
        let z = (0, r.useCallback)(e => {
                let {
                    embedSrc: t,
                    expandHref: r
                } = (0, C.gatewayPlaygroundLaunch)(e, o());
                d(t), u(t), p(r), h(null), b(null), v(null), E(null), R(!1), L(!0), a(!0)
            }, []),
            D = (0, r.useCallback)(({
                embedSrc: e,
                expandHref: t,
                files: r
            }) => {
                if (!w.enabled) return;
                let n = r && r.length > 0 ? r : null,
                    i = S(N.current, e, n);
                i.reuse ? (h(i.prompt), b(n)) : (d(i.stageOnly ? _(e) : e), b(n), h(i.stageOnly ? i.prompt : null)), v(i.skillId), E(i.skillSessionId), R(i.autoSubmit), u(e), p(t), a(!0)
            }, []),
            F = (0, r.useCallback)(() => a(!1), []),
            B = (0, r.useCallback)(() => {
                w.enabled && i && a(!0)
            }, [i]),
            G = (0, r.useCallback)(() => {
                w.enabled && I(!0)
            }, []),
            H = (0, r.useCallback)(() => h(null), []),
            q = (0, r.useCallback)(() => b(null), []),
            W = (0, r.useCallback)(() => {
                v(null), E(null)
            }, []),
            V = (0, r.useCallback)(e => {
                let t = e.trim();
                t && D(l(t))
            }, [D]),
            X = (0, r.useMemo)(() => ({
                open: n,
                embedSrc: i,
                iframeSrc: c,
                expandHref: f,
                pendingPrompt: m,
                clearPendingPrompt: H,
                pendingFiles: g,
                clearPendingFiles: q,
                pendingSkillId: y,
                pendingSkillSessionId: P,
                clearPendingSkill: W,
                pendingAutoSubmit: x,
                skillsBrowserOpen: A,
                setSkillsBrowserOpen: k,
                openChat: D,
                gatewayPlayground: T,
                openGatewayPlayground: z,
                askInChat: V,
                prefetchChat: G,
                reopenChat: B,
                closeChat: F
            }), [n, i, c, f, m, H, g, q, y, P, W, x, A, D, T, z, V, G, B, F]);
        return (0, t.jsx)(j.Provider, {
            value: X,
            children: e
        })
    }

    function R() {
        let e = (0, r.useContext)(j);
        if (!e) throw Error("useMarketingChat must be used within MarketingChatProvider");
        return e
    }

    function M() {
        return (0, r.useContext)(j)
    }
    e.s(["MarketingChatProvider", () => x, "useMarketingChat", () => R, "useMarketingChatOptional", () => M], 433770)
}]);