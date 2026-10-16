try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "dde97309-45fe-4778-97b3-8bb01416ae76", e._sentryDebugIdIdentifier = "sentry-dbid-dde97309-45fe-4778-97b3-8bb01416ae76")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4388], {
        62869: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return l
                },
                z: function() {
                    return u
                }
            });
            var r = n(57437),
                i = n(2265),
                o = n(37053),
                a = n(77712),
                s = n(94508);
            let l = (0, a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
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
                u = i.forwardRef((e, t) => {
                    let {
                        className: n,
                        variant: i,
                        size: a,
                        asChild: u = !1,
                        ...d
                    } = e, c = u ? o.g7 : "button";
                    return (0, r.jsx)(c, {
                        className: (0, s.cn)(l({
                            variant: i,
                            size: a,
                            className: n
                        })),
                        ref: t,
                        ...d
                    })
                });
            u.displayName = "Button"
        },
        8102: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return a
                }
            });
            var r = n(59625),
                i = n(89134),
                o = n(12655);
            let a = (0, r.Ue)((0, i.tJ)(e => ({
                id: null,
                email: null,
                inspecting: null,
                isSuperUser: !1,
                isOrgAdmin: !1,
                isPro: !1,
                planType: null,
                originalClerkId: null,
                showAdminControls: !1,
                demoAnalytics: !1,
                setUser: (t, n, r, i, a, s) => {
                    if (!r) {
                        (0, o.FZ)(!1), e({
                            id: t,
                            email: n,
                            isSuperUser: r,
                            isOrgAdmin: i,
                            isPro: a,
                            planType: s,
                            demoAnalytics: !1
                        });
                        return
                    }
                    e({
                        id: t,
                        email: n,
                        isSuperUser: r,
                        isOrgAdmin: i,
                        isPro: a,
                        planType: s
                    })
                },
                clearUser: () => {
                    (0, o.FZ)(!1), e({
                        id: null,
                        email: null,
                        isSuperUser: !1,
                        isOrgAdmin: !1,
                        isPro: !1,
                        planType: null,
                        inspecting: null,
                        originalClerkId: null,
                        showAdminControls: !1,
                        demoAnalytics: !1
                    })
                },
                setInspecting: t => e({
                    inspecting: t
                }),
                setOriginalClerkId: t => e({
                    originalClerkId: t
                }),
                setShowAdminControls: t => e({
                    showAdminControls: t
                }),
                setDemoAnalytics: t => {
                    (0, o.FZ)(t), e({
                        demoAnalytics: t
                    })
                }
            }), {
                name: "userState",
                storage: (0, i.FL)(() => localStorage)
            }))
        },
        91377: function(e, t, n) {
            var r, i;
            n.d(t, {
                L0: function() {
                    return r
                },
                Sm: function() {
                    return a
                },
                w4: function() {
                    return s
                },
                wd: function() {
                    return l
                }
            }), (i = r || (r = {})).FREE = "free", i.PAYG = "payg", i.STARTER = "starter", i.PRO = "pro", i.ENTERPRISE = "enterprise";
            let o = ["starter", "pro", "enterprise"],
                a = e => o.includes(e),
                s = 90,
                l = (e, t) => !!t && !!e && Date.now() - new Date(e).getTime() > 864e5 * s
        },
        94508: function(e, t, n) {
            n.d(t, {
                BM: function() {
                    return u
                },
                CB: function() {
                    return c
                },
                F5: function() {
                    return m
                },
                Jb: function() {
                    return l
                },
                Nm: function() {
                    return g
                },
                cn: function() {
                    return o
                },
                hL: function() {
                    return f
                },
                lV: function() {
                    return a
                },
                p6: function() {
                    return d
                },
                tS: function() {
                    return s
                },
                vR: function() {
                    return p
                }
            });
            var r = n(54365),
                i = n(71407);

            function o() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, i.m)((0, r.W)(t))
            }

            function a(e) {
                return e.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/&/g, "-and-").replace(/[^\w\-\.]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            }

            function s(e, t) {
                var n;
                if (!e) return "unknown";
                let r = e && (null === (n = e.split("?")[0].split(".").pop()) || void 0 === n ? void 0 : n.toLowerCase()) || "";
                if (["jpg", "jpeg", "png", "gif", "webp", "svg", "bmp"].includes(r)) return "image";
                if (["mp4", "webm", "ogg", "mov", "avi", "mkv"].includes(r)) return "video";
                if (["mp3", "wav", "ogg", "aac", "flac", "m4a", "wma", "mpeg"].includes(r)) return "audio";
                if ("pdf" === r) return "pdf";
                if (["doc", "docx", "ppt", "pptx", "xls", "xlsx", "txt"].includes(r)) return "file";
                if (t && t.length > 0) {
                    if (t.includes("image")) return "image";
                    if (t.includes("video")) return "video";
                    if (t.includes("audio")) return "audio";
                    if (t.includes("document")) return "file"
                }
                return "unknown"
            }

            function l(e) {
                if (!e) return null;
                let t = s(e);
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

            function u(e) {
                if (e.name.toLowerCase().endsWith(".zip")) return !0;
                let t = e.type.toLowerCase();
                return "application/zip" === t || "application/x-zip-compressed" === t || "application/x-zip" === t
            }

            function d(e) {
                return new Date(e).toLocaleDateString(void 0, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                })
            }

            function c(e) {
                if (!e || "string" != typeof e) return !1;
                try {
                    return new URL(e), !0
                } catch (e) {
                    return !1
                }
            }

            function g(e) {
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

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
                if (!e || !c(e) || e.length <= t) return {
                    truncated: e,
                    isTruncated: !1
                };
                try {
                    let n = new URL(e),
                        r = n.pathname,
                        i = r.split("/").pop() || "";
                    if (r.substring(0, r.lastIndexOf("/")), n.hostname.includes("storage.googleapis.com")) {
                        let e = r.split("/").filter(Boolean);
                        if (e.length >= 2) {
                            let t = e[e.length - 1];
                            return {
                                truncated: "https://storage.../".concat(t),
                                isTruncated: !0,
                                filename: t
                            }
                        }
                    }
                    let o = Math.floor((t - 3) / 2),
                        a = t - 3 - o;
                    return {
                        truncated: e.substring(0, o) + "..." + e.substring(e.length - a),
                        isTruncated: !0,
                        filename: i
                    }
                } catch (n) {
                    return {
                        truncated: e.substring(0, t - 3) + "...",
                        isTruncated: !0
                    }
                }
            }
            let p = {
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

            function m(e) {
                e.style.height = "auto";
                let t = Math.max(Math.min(e.scrollHeight, p.TEXTAREA.MAX_HEIGHT), p.TEXTAREA.MIN_HEIGHT);
                e.style.height = "".concat(t, "px")
            }
        },
        47071: function(e, t, n) {
            n.d(t, {
                Cd: function() {
                    return i
                },
                U7: function() {
                    return r
                }
            });
            let r = {
                    PUBLIC: {
                        PLAYGROUND: {
                            MODELS: ["playground-models"],
                            CATEGORIES: ["playground-categories"],
                            INDUSTRIES: ["playground-industries"],
                            TAGS: ["playground-tags"],
                            PURPOSES: ["playground-purposes"]
                        },
                        COOKBOOK: {
                            ALL: ["cookbooks"],
                            SINGLE: e => ["cookbook", e],
                            SINGLE_BY_SLUG: e => ["cookbook", "slug", e],
                            NOTEBOOK: e => ["notebook", e]
                        },
                        USE_CASE_TEMPLATES: {
                            ALL: ["use-case-templates"],
                            METADATA: ["use-case-templates-metadata"]
                        }
                    },
                    PRIVATE: {
                        CHAT: {
                            HISTORY: ["chat-history"],
                            MESSAGES: e => ["chat-messages", e],
                            METADATA: e => ["chat-metadata", e]
                        }
                    }
                },
                i = () => {
                    let e = [],
                        t = n => {
                            Object.values(n).forEach(n => {
                                n && Array.isArray(n) ? e.push(n) : n && "object" == typeof n && !n.hasOwnProperty("call") && t(n)
                            })
                        };
                    return t(r.PUBLIC), e
                }
        },
        14856: function(e, t, n) {
            n.d(t, {
                x4: function() {
                    return a
                },
                zC: function() {
                    return s
                }
            });
            var r = n(31125),
                i = n(83464);
            let o = "[vlm-login-client]",
                a = async e => {
                    try {
                        let {
                            data: t
                        } = await i.default.post("/api/login", {
                            clerk_id: e
                        });
                        return console.info(o, "POST /api/login ok", {
                            clerkId: e
                        }), t
                    } catch (e) {
                        if (i.default.isAxiosError(e)) {
                            var t, n, r;
                            console.error(o, "POST /api/login failed", {
                                status: null === (t = e.response) || void 0 === t ? void 0 : t.status,
                                data: "string" == typeof(null === (n = e.response) || void 0 === n ? void 0 : n.data) ? e.response.data : JSON.stringify(null === (r = e.response) || void 0 === r ? void 0 : r.data),
                                message: e.message,
                                code: e.code
                            })
                        } else console.error(o, "POST /api/login unexpected error", e);
                        throw e
                    }
                }, s = async e => {
                    let {
                        data: t
                    } = await r.Z.post("/api/v1/login/account-exists", {
                        email: e
                    });
                    return !!(null == t ? void 0 : t.exists)
                }
        },
        58549: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return o
                }
            });
            var r = n(21770),
                i = n(14856);
            let o = () => (0, r.D)({
                mutationFn: e => (0, i.x4)(e)
            })
        },
        49842: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return b
                }
            });
            var r = n(57437),
                i = n(2265),
                o = n(99376),
                a = n(47071),
                s = n(58549),
                l = n(54353),
                u = n(29827),
                d = n(37296),
                c = n(83464),
                g = n(51495),
                f = n(91377),
                p = n(27292),
                m = n(8102),
                v = n(18302),
                h = n(8481);
            let y = ["/sign-in", "/sign-up", "/sso-callback", "/onboarding", "/reset-password"],
                w = (0, i.createContext)({
                    isBackendAuthenticated: !1,
                    isAuthenticating: !1,
                    isInitializing: !0,
                    currentUserId: null
                }),
                b = () => {
                    let e = (0, i.useContext)(w);
                    if (!e) throw Error("useAuth must be used within AuthProvider");
                    return e
                };
            t.default = e => {
                let {
                    children: t
                } = e, {
                    user: n,
                    isLoaded: b
                } = (0, l.aF)(), {
                    signOut: E
                } = (0, l.ll)(), {
                    mutate: S,
                    isPending: A
                } = (0, s.f)(), {
                    isSignedIn: _,
                    isLoaded: T
                } = (0, l.kP)(), x = (0, u.NL)(), k = (0, d.cP)(), {
                    setUser: I,
                    clearUser: L,
                    setInspecting: C,
                    inspecting: O,
                    originalClerkId: U,
                    id: P
                } = (0, m.L)(), R = (0, o.usePathname)(), [N, D] = (0, i.useState)(!1), [H, M] = (0, i.useState)(!1), [F, G] = (0, i.useState)(!0), [z, B] = (0, i.useState)(null);
                (0, i.useEffect)(() => {
                    localStorage.getItem("access_token") && localStorage.getItem("id") && (M(!0), G(!1), B(localStorage.getItem("clerk_id")))
                }, []), (0, i.useEffect)(() => {
                    let e = e => {
                        "assume_role_cancelled" === e.key && e.newValue && (null == n ? void 0 : n.id) === e.newValue && (localStorage.removeItem("assume_role_cancelled"), S(n.id, {
                            onSuccess: e => {
                                var t, n;
                                (0, h.l9)(e), I(e.id, e.email, e.is_superuser, null !== (t = e.is_org_admin) && void 0 !== t && t, (0, f.Sm)(e.org_plan_type), null !== (n = e.org_plan_type) && void 0 !== n ? n : null), C(null), m.L.setState({
                                    originalClerkId: null
                                }), window.location.href = "/dashboard"
                            }
                        }))
                    };
                    return window.addEventListener("storage", e), () => window.removeEventListener("storage", e)
                }, [null == n ? void 0 : n.id, S, I, C]);
                let j = (0, i.useCallback)(() => {
                        (0, h.wH)(), L(), C(null), M(!1), D(!1), B(null);
                        let e = (0, a.Cd)();
                        x.removeQueries({
                            predicate: t => !e.some(e => e.every((e, n) => t.queryKey[n] === e))
                        })
                    }, [L, C, x]),
                    Y = (0, i.useCallback)(async () => {
                        if (!n || !b || !T || N || A || "/logout" === R) return;
                        let e = e => {
                            if (y.some(e => R === e || (null == R ? void 0 : R.startsWith("".concat(e, "/")))) || O || (0, h.N0)()) return;
                            let t = (0, g.Yw)(e);
                            window.location.replace((0, p.yJ)(t))
                        };
                        if (O && U === n.id && (0, h.n5)() === P) {
                            M(!0), G(!1), B(n.id), D(!0);
                            return
                        }
                        z && z !== n.id && j(), B(n.id), D(!0), S(n.id, {
                            onSuccess: t => {
                                var n, r;
                                (0, h.l9)(t), t.initial_api_key && (0, h.sw)(t.initial_api_key, t.organization_id || t.org_id), I(t.id, t.email, t.is_superuser, null !== (n = t.is_org_admin) && void 0 !== n && n, (0, f.Sm)(t.org_plan_type), null !== (r = t.org_plan_type) && void 0 !== r ? r : null), O || C(null), M(!0), G(!1), x.prefetchQuery({
                                    queryKey: ["features", "me"],
                                    queryFn: () => v.w.getCurrentUserFeatures()
                                }), e(new URLSearchParams(window.location.search).get("redirect_url")), k && k.identify(t.email)
                            },
                            onError: e => {
                                if (c.default.isAxiosError(e)) {
                                    var t, r, i;
                                    console.error("[vlm-login-auth-provider] backend exchange failed", {
                                        pathname: R,
                                        clerkUserId: n.id,
                                        status: null === (t = e.response) || void 0 === t ? void 0 : t.status,
                                        data: "string" == typeof(null === (r = e.response) || void 0 === r ? void 0 : r.data) ? e.response.data : JSON.stringify(null === (i = e.response) || void 0 === i ? void 0 : i.data),
                                        message: e.message,
                                        code: e.code
                                    })
                                } else console.error("[vlm-login-auth-provider] backend exchange failed (non-axios)", {
                                    pathname: R,
                                    clerkUserId: n.id,
                                    err: e
                                });
                                j(), G(!1), "/logout" !== R && window.location.replace("/logout")
                            }
                        })
                    }, [n, b, T, N, A, O, U, P, z, j, S, I, C, k, R]);
                return (0, i.useEffect)(() => {
                    if (b && T) {
                        if (!1 === _) j(), G(!1);
                        else if (n && z && z !== n.id) {
                            if (O && U === n.id) return;
                            j()
                        }
                    }
                }, [_, n, z, O, U, b, T, j]), (0, i.useEffect)(() => {
                    b && T && (_ && n && !N ? Y() : _ || G(!1))
                }, [b, T, _, n, N, Y]), (0, r.jsx)(w.Provider, {
                    value: {
                        isBackendAuthenticated: H,
                        isAuthenticating: !!(A || _ && !H && N),
                        isInitializing: !!(F || !b || !T),
                        currentUserId: z
                    },
                    children: t
                })
            }
        }
    }
]);