try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0b2010a0-cad7-4d99-97e7-64f16114534e", e._sentryDebugIdIdentifier = "sentry-dbid-0b2010a0-cad7-4d99-97e7-64f16114534e")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [27292], {
        86581: function(e, t, r) {
            r.d(t, {
                D: function() {
                    return o
                },
                g: function() {
                    return l
                }
            });
            var n = r(2265),
                a = r(36147);
            let o = "vlm_user_features",
                l = function() {
                    var e, t, r, l;
                    let u = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        [i, s] = (0, n.useState)(null);
                    (0, n.useEffect)(() => {
                        try {
                            let e = localStorage.getItem(o);
                            e && s(JSON.parse(e))
                        } catch (e) {
                            console.warn("Failed to load features from cache:", e)
                        }
                    }, []);
                    let {
                        data: d,
                        isLoading: c,
                        error: v
                    } = (0, a.Zd)(u);
                    (0, n.useEffect)(() => {
                        if (d) {
                            s(d);
                            try {
                                localStorage.setItem(o, JSON.stringify(d))
                            } catch (e) {
                                console.warn("Failed to cache features:", e)
                            }
                        }
                    }, [d]);
                    let f = null !== (e = null == i ? void 0 : i.agents) && void 0 !== e && e;
                    return {
                        isAgentsEnabled: f,
                        isAgentsChatEnabled: null !== (t = null == i ? void 0 : i.agents_chat) && void 0 !== t && t,
                        isAgentsAdvancedEnabled: null !== (r = null == i ? void 0 : i.agents_advanced) && void 0 !== r && r,
                        isExecutionsEnabled: null !== (l = null == i ? void 0 : i.agents) && void 0 !== l && l,
                        features: i,
                        isLoading: c && !i,
                        error: v
                    }
                }
        },
        25066: function(e, t, r) {
            r.d(t, {
                $d: function() {
                    return n
                },
                EI: function() {
                    return c
                },
                Ef: function() {
                    return v
                },
                Js: function() {
                    return u
                },
                R0: function() {
                    return o
                },
                au: function() {
                    return i
                },
                ft: function() {
                    return l
                },
                jN: function() {
                    return f
                },
                ld: function() {
                    return s
                },
                v2: function() {
                    return d
                },
                vP: function() {
                    return a
                }
            });
            let n = "/dashboard",
                a = "/dashboard/insights",
                o = "/dashboard/analytics/logs",
                l = "/dashboard/settings/api-keys",
                u = "/dashboard/explore",
                i = "/dashboard/requests",
                s = "https://docs.vlm.run/",
                d = "https://chat.vlm.run",
                c = "create",
                v = () => n,
                f = () => "".concat(l, "?").concat(c, "=1")
        },
        51495: function(e, t, r) {
            r.d(t, {
                Tg: function() {
                    return l
                },
                Yw: function() {
                    return u
                },
                iL: function() {
                    return a
                }
            });
            var n = r(25066);
            let a = () => !1,
                o = () => a() ? "/" : (0, n.Ef)(),
                l = e => {
                    if (!e) return null;
                    if (e.startsWith("/")) return e;
                    try {
                        return new URL(e).pathname
                    } catch (e) {
                        return null
                    }
                },
                u = e => {
                    var t;
                    return null !== (t = l(e)) && void 0 !== t ? t : o()
                }
        },
        27292: function(e, t, r) {
            r.d(t, {
                Yh: function() {
                    return c
                },
                _m: function() {
                    return l
                },
                eq: function() {
                    return i
                },
                tK: function() {
                    return s
                },
                yJ: function() {
                    return d
                },
                z0: function() {
                    return u
                }
            });
            var n = r(8481),
                a = r(25066),
                o = r(51495);
            let l = [{
                    value: "google",
                    label: "Google"
                }, {
                    value: "reddit",
                    label: "Reddit"
                }, {
                    value: "x",
                    label: "X (Twitter)"
                }, {
                    value: "linkedin",
                    label: "LinkedIn"
                }, {
                    value: "friend_or_colleague",
                    label: "Friend or colleague"
                }, {
                    value: "hackernews",
                    label: "Hacker News"
                }, {
                    value: "youtube",
                    label: "YouTube"
                }, {
                    value: "conference_or_event",
                    label: "Conference or event"
                }, {
                    value: "other",
                    label: "Other"
                }],
                u = [{
                    value: "structured_extraction",
                    label: "Structured Extraction"
                }, {
                    value: "multimodal_agents",
                    label: "Orion 2: Explore multimodal agents"
                }, {
                    value: "gateway",
                    label: "Gateway: Experiment with new VLMs"
                }, {
                    value: "chat_playground",
                    label: "Chat Playground"
                }],
                i = (e, t) => {
                    var r, n;
                    return "other" === e && (null == t ? void 0 : t.trim()) ? t.trim() : null !== (n = null === (r = l.find(t => t.value === e)) || void 0 === r ? void 0 : r.label) && void 0 !== n ? n : e
                },
                s = e => {
                    var t, r;
                    return null !== (r = null === (t = u.find(t => t.value === e)) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : e
                },
                d = e => e === a.$d || "/" === e ? "/onboarding" : "/onboarding?redirect_url=".concat(encodeURIComponent(e)),
                c = e => {
                    let t = (0, o.Yw)(e);
                    return (0, n.N0)() ? t : d(t)
                }
        },
        18302: function(e, t, r) {
            r.d(t, {
                w: function() {
                    return a
                }
            });
            var n = r(31125);
            let a = {
                getCurrentUserFeatures: async () => (await n.Z.get("/api/v1/features/me")).data,
                getFeatures: async e => (await n.Z.get("/api/v1/features/".concat(e))).data,
                updateFeatures: async (e, t) => (await n.Z.patch("/api/v1/features/".concat(e), t)).data
            }
        },
        36147: function(e, t, r) {
            r.d(t, {
                Lq: function() {
                    return i
                },
                Zd: function() {
                    return u
                },
                eO: function() {
                    return s
                }
            });
            var n = r(92850),
                a = r(29827),
                o = r(21770),
                l = r(18302);
            let u = function() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    return (0, n.a)({
                        queryKey: ["features", "me"],
                        queryFn: () => l.w.getCurrentUserFeatures(),
                        enabled: e
                    })
                },
                i = e => (0, n.a)({
                    queryKey: ["features", e],
                    queryFn: () => l.w.getFeatures(e),
                    enabled: !!e
                }),
                s = () => {
                    let e = (0, a.NL)();
                    return (0, o.D)({
                        mutationFn: async e => {
                            let {
                                organizationId: t,
                                features: r
                            } = e;
                            return l.w.updateFeatures(t, r)
                        },
                        onSuccess: t => {
                            e.invalidateQueries({
                                queryKey: ["features", t.org_id]
                            }), e.invalidateQueries({
                                queryKey: ["organizations"]
                            })
                        }
                    })
                }
        },
        31125: function(e, t, r) {
            var n = r(83688),
                a = r(83464),
                o = r(8481),
                l = r(12655),
                u = r(9715);
            let i = () => "".concat(Date.now(), "-").concat(Math.random().toString(16).slice(2, 8)),
                s = e => {
                    if (!e) return "";
                    let t = e.baseURL || "",
                        r = e.url || "";
                    return "".concat(t).concat(r)
                },
                d = function(e, t) {
                    var r, a;
                    let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "info",
                        l = "[axios:".concat(e, "] ").concat(null !== (r = t.method) && void 0 !== r ? r : "", " ").concat(null !== (a = t.url) && void 0 !== a ? a : "");
                    n.n({
                        category: "http",
                        message: l,
                        data: t,
                        level: o
                    })
                },
                c = a.default.create({
                    baseURL: "https://prod-vlm-cloud-nfsnfpr33q-uc.a.run.app",
                    paramsSerializer: e => {
                        let t = new URLSearchParams;
                        return Object.entries(e).forEach(e => {
                            let [r, n] = e;
                            Array.isArray(n) ? r.endsWith("__in") ? n.length > 0 && t.append(r, n.join(",")) : n.forEach(e => t.append(r, String(e))) : null != n && t.append(r, String(n))
                        }), t.toString()
                    }
                });
            c.interceptors.request.use(e => {
                var t;
                let r = localStorage.getItem("access_token"),
                    n = ["/login/clerk-user", "/refresh-token"].some(t => e.url && e.url.includes(t));
                r && !n && (e.headers.Authorization = "Bearer ".concat(r)), (0, l.Wh)() && (e.headers["X-Demo-Analytics"] = "1");
                let a = i();
                return e.metadata = {
                    requestId: a,
                    startTime: Date.now()
                }, d("request", {
                    requestId: a,
                    url: s(e),
                    method: null === (t = e.method) || void 0 === t ? void 0 : t.toUpperCase(),
                    hasAuthHeader: !!e.headers.Authorization,
                    isNoAuthEndpoint: n
                }), e
            }, e => Promise.reject(e)), c.interceptors.response.use(e => {
                var t, r, n, a;
                let o = e.config,
                    l = o.metadata ? Date.now() - o.metadata.startTime : void 0;
                return d("response", {
                    requestId: null === (t = o.metadata) || void 0 === t ? void 0 : t.requestId,
                    url: s(o),
                    method: null === (r = o.method) || void 0 === r ? void 0 : r.toUpperCase(),
                    status: e.status,
                    durationMs: l,
                    responseRequestId: (null === (n = e.headers) || void 0 === n ? void 0 : n["x-request-id"]) || (null === (a = e.headers) || void 0 === a ? void 0 : a["request-id"])
                }), e
            }, async e => {
                var t, r, n, a, l, i, v, f, g, m, h, p, y;
                let _ = e.config,
                    b = (null == _ ? void 0 : _.metadata) ? Date.now() - _.metadata.startTime : void 0,
                    w = null === (t = e.response) || void 0 === t ? void 0 : t.status,
                    S = (null === (n = e.response) || void 0 === n ? void 0 : null === (r = n.headers) || void 0 === r ? void 0 : r["x-request-id"]) || (null === (l = e.response) || void 0 === l ? void 0 : null === (a = l.headers) || void 0 === a ? void 0 : a["request-id"]),
                    I = null === (i = e.response) || void 0 === i ? void 0 : i.data,
                    k = "string" == typeof I ? I.slice(0, 500) : (null == I ? void 0 : I.message) || (null == I ? void 0 : I.error);
                if (d("error", {
                        requestId: null == _ ? void 0 : null === (v = _.metadata) || void 0 === v ? void 0 : v.requestId,
                        url: s(_),
                        method: null == _ ? void 0 : null === (f = _.method) || void 0 === f ? void 0 : f.toUpperCase(),
                        status: w,
                        durationMs: b,
                        errorName: e.name,
                        errorMessage: e.message,
                        responseMessage: k,
                        responseRequestId: S,
                        hasAuthHeader: !!(null == _ ? void 0 : null === (g = _.headers) || void 0 === g ? void 0 : g.Authorization)
                    }, "error"), (null === (m = e.response) || void 0 === m ? void 0 : m.status) === 498 && !_._retry && localStorage.getItem("refresh_token")) {
                    _._retry = !0;
                    let e = await (0, u.refreshToken)();
                    if (null == e ? void 0 : e.access_token) return _.headers = _.headers || {}, _.headers.Authorization = "Bearer ".concat(e.access_token), c(_)
                }
                return (null === (h = e.response) || void 0 === h ? void 0 : h.status) === 400 && (null === (y = e.response) || void 0 === y ? void 0 : null === (p = y.data) || void 0 === p ? void 0 : p.detail) === "Inactive user" && ((0, o.wH)(), window.location.href = "/logout"), Promise.reject(e)
            }), t.Z = c
        },
        12655: function(e, t, r) {
            r.d(t, {
                D5: function() {
                    return u
                },
                FZ: function() {
                    return o
                },
                Wh: function() {
                    return l
                }
            });
            var n = r(14438);
            let a = !1;

            function o(e) {
                a = e
            }

            function l() {
                return a
            }

            function u() {
                return !!a && (n.Am.message("Demo data — row details are not available in demo mode."), !0)
            }
            a = function() {
                try {
                    var e, t;
                    let r = localStorage.getItem("userState");
                    if (!r) return !1;
                    let n = JSON.parse(r);
                    return !!((null === (e = n.state) || void 0 === e ? void 0 : e.demoAnalytics) && (null === (t = n.state) || void 0 === t ? void 0 : t.isSuperUser))
                } catch (e) {
                    return !1
                }
            }()
        },
        8481: function(e, t, r) {
            r.d(t, {
                N0: function() {
                    return u
                },
                Sl: function() {
                    return c
                },
                l9: function() {
                    return a
                },
                n5: function() {
                    return l
                },
                sw: function() {
                    return s
                },
                wH: function() {
                    return o
                },
                w_: function() {
                    return d
                }
            });
            var n = r(86581);
            let a = e => {
                    localStorage.setItem("access_token", e.access_token), localStorage.setItem("refresh_token", e.refresh_token), localStorage.setItem("id", e.id), localStorage.setItem("email", e.email), localStorage.setItem("clerk_id", e.clerk_id), localStorage.setItem("is_sup", e.is_superuser), localStorage.setItem("signup_survey_completed", !1 === e.signup_survey_completed ? "false" : "true"), localStorage.removeItem("api_key")
                },
                o = () => {
                    localStorage.removeItem("access_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("id"), localStorage.removeItem("email"), localStorage.removeItem("clerk_id"), localStorage.removeItem("is_sup"), localStorage.removeItem("signup_survey_completed"), localStorage.removeItem("api_key"), localStorage.removeItem(n.D), c()
                },
                l = () => localStorage.getItem("id"),
                u = () => "false" !== localStorage.getItem("signup_survey_completed"),
                i = "vlm_onboarding_api_key",
                s = (e, t) => {
                    try {
                        localStorage.setItem(i, JSON.stringify({
                            key: e,
                            orgId: t
                        }))
                    } catch (e) {}
                },
                d = e => {
                    try {
                        let t = localStorage.getItem(i);
                        if (!t) return null;
                        let r = JSON.parse(t);
                        if (!r.key || e && r.orgId && r.orgId !== e) return null;
                        return r.key
                    } catch (e) {
                        return null
                    }
                },
                c = () => {
                    try {
                        localStorage.removeItem(i)
                    } catch (e) {}
                }
        },
        9715: function(e, t, r) {
            r.d(t, {
                refreshToken: function() {
                    return s
                }
            });
            var n = r(83688),
                a = r(22048),
                o = r(83464),
                l = r(14438),
                u = r(8481);
            let i = null,
                s = async () => {
                    let e = localStorage.getItem("refresh_token");
                    if (!e) return null;
                    if (i) return i;
                    i = d(e);
                    try {
                        return await i
                    } finally {
                        i = null
                    }
                }, d = async e => {
                    try {
                        let {
                            data: t
                        } = await o.default.post("".concat("https://prod-vlm-cloud-nfsnfpr33q-uc.a.run.app", "/api/v1/refresh-token"), {
                            refresh_token: e
                        });
                        return n.n({
                            category: "auth",
                            message: "[auth] Token refresh succeeded"
                        }), (0, u.l9)(t), t
                    } catch (e) {
                        return console.error("[auth] Token refresh failed", e), a.uT("token_refresh_failed", {
                            level: "warning",
                            extra: {
                                message: e instanceof Error ? e.message : "unknown_error"
                            }
                        }), (0, u.wH)(), l.Am.error("Session expired", {
                            description: "Your session has expired. Please log in again."
                        }), window.location.replace("/logout"), null
                    }
                }
        }
    }
]);