try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1d9e907e-a03c-40ea-a770-83cdd53ad056", e._sentryDebugIdIdentifier = "sentry-dbid-1d9e907e-a03c-40ea-a770-83cdd53ad056")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [47156], {
        51271: function(e, t, n) {
            n.d(t, {
                J_: function() {
                    return i
                },
                pD: function() {
                    return s
                },
                sh: function() {
                    return l
                }
            });
            var o = n(25566);
            let i = {
                    version: 2,
                    rows: [{
                        id: "row-chat-default-desc",
                        blocks: [{
                            id: "blk-chat-default-desc",
                            kind: "expandable_video_description"
                        }]
                    }]
                },
                r = {
                    version: 2,
                    rows: [{
                        id: "row-chat-image-desc",
                        blocks: [{
                            id: "blk-chat-image-desc",
                            kind: "expandable_video_description"
                        }]
                    }]
                };

            function a(e) {
                return "text" === e.type && "string" == typeof e.text
            }

            function l(e) {
                if (e.composedSchema) return e.composedSchema;
                if (!e.defaultPlacementEnabled) return null;
                let t = e.lastUserContent ? function(e) {
                    let t = !1,
                        n = !1;
                    if ("string" == typeof e) return {
                        hasImage: t,
                        hasVideo: n
                    };
                    for (let o of e) "image_url" === o.type && (t = !0), "video_url" === o.type && (n = !0);
                    return {
                        hasImage: t,
                        hasVideo: n
                    }
                }(e.lastUserContent) : {
                    hasImage: !1,
                    hasVideo: !1
                };
                return t.hasImage && !t.hasVideo || e.lastUserContent && function(e) {
                    let t = "string" == typeof e ? e : e.filter(a).map(e => e.text).join(" ");
                    return !!t.trim() && (/\b(make|generate|create|draw|show)\b[\s\S]{0,48}\b(image|picture|photo|illustration|pic)\b/i.test(t) || /\b(image|picture|photo)\b[\s\S]{0,48}\b(of|for|showing)\b/i.test(t))
                }(e.lastUserContent) ? r : i
            }

            function s() {
                return "0" !== o.env.NEXT_PUBLIC_CHAT_STREAM_DEFAULT_CANVAS_PLACEMENT
            }
        },
        20061: function(e, t, n) {
            n.d(t, {
                r6: function() {
                    return r
                }
            }), n(2265);
            let o = "https://agent.vlm.run/v1";

            function i(e) {
                "undefined" != typeof document && (document.cookie = "".concat("agent_api_base_url", "=").concat(encodeURIComponent(e), ";path=/;max-age=31536000;SameSite=Lax"))
            }
            let r = () => {
                {
                    let e = localStorage.getItem("active_agent_api_config");
                    if (e && "default" !== e) {
                        let t = localStorage.getItem("saved_agent_api_configs");
                        if (t) try {
                            let n = JSON.parse(t).find(t => t.id === e);
                            if (n) return i(n.baseUrl), n.baseUrl
                        } catch (e) {}
                    }
                    i(o)
                }
                return o
            }
        },
        70166: function(e, t, n) {
            n.d(t, {
                $5: function() {
                    return d
                },
                BZ: function() {
                    return f
                },
                DC: function() {
                    return g
                },
                Gs: function() {
                    return h
                },
                fs: function() {
                    return v
                },
                h8: function() {
                    return y
                },
                hs: function() {
                    return _
                },
                iH: function() {
                    return w
                },
                pG: function() {
                    return c
                },
                y7: function() {
                    return p
                },
                yi: function() {
                    return o
                }
            });
            let o = "/api/gateway",
                i = new Set(["markdown", "ocr"]),
                r = new Set(["markdown", "text", "ocr", "parse_layout", "layout"]),
                a = {
                    "rednote-hilab/dots.mocr": new Set(["markdown"]),
                    "dots.mocr": new Set(["markdown"])
                },
                l = new Set(["parse_layout", "parse_layout_only", "layout", "detect", "grounding_ocr"]),
                s = new Set(["paddleocr/pp-ocrv6", "pp-ocrv6", "vlm-run/ocr:auto"]);

            function c(e) {
                var t;
                return (null !== (t = e.task_capabilities) && void 0 !== t ? t : []).some(e => i.has(e.toLowerCase()))
            }

            function u(e, t) {
                var n;
                return !t || !!r.has(t) && !(null === (n = a[e]) || void 0 === n ? void 0 : n.has(t))
            }

            function d(e, t) {
                return !!t && (!!l.has(t) || "ocr" === t && s.has(e))
            }

            function f(e) {
                return h((null != e ? e : []).map(e => {
                    var t;
                    let n = (null !== (t = e.methods) && void 0 !== t ? t : []).filter(t => u(e.id, t));
                    if (n.length > 0) return {
                        ...e,
                        methods: n
                    };
                    let o = e.default_method && u(e.id, e.default_method) ? [e.default_method] : [];
                    return {
                        ...e,
                        methods: o
                    }
                }))
            }

            function p(e, t, n) {
                var o;
                let i = e.filter(e => e.baseId === t);
                if (0 === i.length) return null;
                let r = n ? i.filter(e => !n.has(e.id)) : i,
                    a = r.length > 0 ? r : i,
                    l = a[0].model.default_method || "markdown";
                return null !== (o = a.find(e => e.method === l)) && void 0 !== o ? o : a[0]
            }

            function m(e) {
                return "chat" === e.task
            }

            function g(e) {
                return m(e) ? null : "Not supported in chat"
            }

            function v(e) {
                var t;
                return m(e) && (null === (t = e.capabilities) || void 0 === t ? void 0 : t.supports_text_only) === !1
            }

            function h(e) {
                let t = [...null != e ? e : []].sort((e, t) => Number(m(t)) - Number(m(e)) || t.created - e.created || e.id.localeCompare(t.id)),
                    n = [];
                for (let e of t) {
                    var o, i;
                    let t = null !== (o = e.methods) && void 0 !== o ? o : [],
                        r = t.length > 1;
                    if (r)
                        for (let o of t) n.push({
                            id: "".concat(e.id, ":").concat(o),
                            baseId: e.id,
                            method: o,
                            hasMultipleMethods: r,
                            model: e
                        });
                    else n.push({
                        id: e.id,
                        baseId: e.id,
                        method: null !== (i = t[0]) && void 0 !== i ? i : null,
                        hasMultipleMethods: r,
                        model: e
                    })
                }
                return n
            }

            function _(e) {
                let t = e.lastIndexOf(":");
                if (-1 === t) return {
                    baseId: e,
                    method: null
                };
                let n = e.slice(t + 1);
                return "auto" === n ? {
                    baseId: e,
                    method: null
                } : {
                    baseId: e.slice(0, t),
                    method: n
                }
            }

            function y(e) {
                let t = e.lastIndexOf("/");
                return -1 === t ? e : e.slice(t + 1)
            }

            function w(e) {
                let t = new Set;
                for (let n of h(e)) t.add(n.id), t.add(n.baseId);
                return t
            }
        },
        42783: function(e, t, n) {
            n.d(t, {
                N2: function() {
                    return f
                },
                aG: function() {
                    return _
                },
                zR: function() {
                    return m
                }
            });
            var o = n(31604);
            let i = "mention_ref",
                r = /(Image|Video|Document)\s+reference:[^\n]+/gi,
                a = (e, t) => "[[img:".concat(e, ":").concat(t, "]]"),
                l = e => {
                    let t = e.toLowerCase();
                    return "video" === t ? "video" : "document" === t ? "document" : "image"
                },
                s = (e, t) => {
                    let n;
                    let o = {
                            kind: t
                        },
                        i = /([a-z_]+)=("([^"]*)"|([^\s.]+))/gi;
                    for (; null !== (n = i.exec(e));) {
                        var r, a, l, s, c;
                        let e = null !== (l = null === (a = n[1]) || void 0 === a ? void 0 : null === (r = a.toLowerCase) || void 0 === r ? void 0 : r.call(a)) && void 0 !== l ? l : "",
                            t = null !== (c = null !== (s = n[3]) && void 0 !== s ? s : n[4]) && void 0 !== c ? c : "";
                        switch (e) {
                            case "id":
                                o.objectId = t;
                                break;
                            case "artifact":
                                o.artifactId = t;
                                break;
                            case "title":
                            case "label":
                                o.label = t;
                                break;
                            case "kind":
                                ("image" === t || "video" === t || "document" === t) && (o.kind = t);
                                break;
                            case "preview":
                            case "preview_url":
                                o.previewUrl = t
                        }
                    }
                    return o
                },
                c = e => e ? e.replace(r, (e, t, n, o) => {
                    var r, c, u, d;
                    let f = l(t),
                        p = s(e, f);
                    if (!p.artifactId || !p.objectId) return e;
                    let m = a(p.artifactId, p.objectId),
                        g = Math.max(0, n - (m.length + 4));
                    if (o.slice(g, n).trimEnd().endsWith(m)) return e;
                    let v = {
                            artifactId: p.artifactId,
                            objectId: p.objectId,
                            label: null !== (r = p.label) && void 0 !== r ? r : null,
                            kind: null !== (c = p.kind) && void 0 !== c ? c : f,
                            previewUrl: null !== (u = p.previewUrl) && void 0 !== u ? u : null
                        },
                        h = "<".concat(i, ">").concat(JSON.stringify(v), "</").concat(i, ">"),
                        _ = /[\s\n]/.test(null !== (d = o[n - 1]) && void 0 !== d ? d : "") ? "".concat(m).concat(e) : "".concat(m, " ").concat(e);
                    return "".concat(_).concat(h)
                }).replace(/\n\s*(\[\[img:[^\]]+\]\])/g, " $1") : e;

            function u(e) {
                let t = e.content;
                if ("string" == typeof t) {
                    let n = c(t);
                    return n === t ? e : {
                        ...e,
                        content: n
                    }
                }
                if (Array.isArray(t)) {
                    let n = !1,
                        o = t.map(e => {
                            if ("text" === e.type && "string" == typeof e.text) {
                                let t = c(e.text);
                                if (t !== e.text) return n = !0, {
                                    ...e,
                                    text: t
                                }
                            }
                            return e
                        });
                    if (n) return {
                        ...e,
                        content: o
                    }
                }
                return e
            }
            let d = /\[\[skill:([^:\]]+):([^\]]+)\]\]\s*/g;

            function f(e) {
                return e.map(e => {
                    let t = e.id.replace(/\]\]/g, ""),
                        n = e.name.replace(/\]\]/g, "");
                    return "[[skill:".concat(t, ":").concat(n, "]]")
                }).join(" ")
            }

            function p(e) {
                let t = [],
                    n = e.replace(d, (e, n, o) => (t.push({
                        id: n,
                        name: o.trim()
                    }), "")).trim();
                return {
                    skills: t,
                    text: n
                }
            }

            function m(e, t) {
                let n = {
                    id: "msg-".concat(Date.now(), "-").concat(Math.random()),
                    role: e.role,
                    timestamp: new Date
                };
                if ("user" === e.role && Array.isArray(e.content)) {
                    let r;
                    let a = e.content.find(e => "text" === e.type && e.text),
                        l = e.content;
                    if (a) {
                        var i;
                        let t = p(null !== (i = a.text) && void 0 !== i ? i : "");
                        t.skills.length > 0 && (r = t.skills, l = e.content.map(e => e === a ? {
                            ...e,
                            text: t.text
                        } : e))
                    }
                    let s = l.flatMap(e => {
                        var n, i, r, a;
                        return "text" === e.type && e.text && t ? function(e, t) {
                            let n;
                            let i = [],
                                r = /<(img|doc|url|video|vid|audio)_ref>([^<]+)<\/\1_ref>/g,
                                a = e => {
                                    let t = null == e ? void 0 : e.trim();
                                    return !!t && /^\[\s*(image|document|doc|video|audio|file)\s+summary[^\]]*]:/i.test(t)
                                },
                                l = 0;
                            for (; null !== (n = r.exec(e));) {
                                let [r, s, c] = n, {
                                    normalizedType: u,
                                    referenceId: d
                                } = function(e, t) {
                                    let n = e.toLowerCase(),
                                        o = t.trim(),
                                        i = o.match(/^(image|img|doc|document|file|video|audio):(.+)$/i);
                                    if (i) {
                                        let [, e, t] = i;
                                        return {
                                            normalizedType: e.toLowerCase(),
                                            referenceId: t.trim()
                                        }
                                    }
                                    return {
                                        normalizedType: n,
                                        referenceId: o
                                    }
                                }(s, c), f = e.slice(l, n.index).trim();
                                f && !a(f) && i.push({
                                    type: "text",
                                    text: f
                                });
                                let p = function(e, t, n) {
                                    let o = {
                                        file_id: n
                                    };
                                    switch (e) {
                                        case "img":
                                        case "image":
                                            return {
                                                type: "image_url", image_url: {
                                                    url: t,
                                                    detail: "auto"
                                                }, ...o
                                            };
                                        case "doc":
                                        case "document":
                                        case "file":
                                            return {
                                                type: "file_url", file_url: {
                                                    url: t,
                                                    detail: "auto"
                                                }, ...o
                                            };
                                        case "audio":
                                            return {
                                                type: "audio_url", audio_url: {
                                                    url: t,
                                                    detail: "auto"
                                                }, ...o
                                            };
                                        case "video":
                                        case "vid":
                                            return {
                                                type: "video_url", video_url: {
                                                    url: t,
                                                    detail: "auto"
                                                }, ...o
                                            };
                                        case "url":
                                            var i;
                                            if (null == n ? void 0 : null === (i = n.toLowerCase()) || void 0 === i ? void 0 : i.startsWith("url_")) return {
                                                type: "video_url",
                                                video_url: {
                                                    url: t,
                                                    detail: "auto"
                                                },
                                                ...o
                                            };
                                            return {
                                                type: "file_url", file_url: {
                                                    url: t,
                                                    detail: "auto"
                                                }, ...o
                                            };
                                        default:
                                            return {
                                                type: "file_url", file_url: {
                                                    url: t,
                                                    detail: "auto"
                                                }
                                            }
                                    }
                                }(u, (0, o.pC)(t, d), d);
                                p && i.push(p), l = n.index + r.length
                            }
                            let s = e.slice(l).trim();
                            return (s && !a(s) && i.push({
                                type: "text",
                                text: s
                            }), 0 === i.length) ? [{
                                type: "text",
                                text: e
                            }] : i
                        }(e.text, t) : v(e.image_url) || v(e.video_url) || v(e.audio_url) ? [] : [{
                            type: e.type,
                            text: e.text,
                            image_url: e.image_url ? {
                                url: null !== (n = g(e.image_url)) && void 0 !== n ? n : e.image_url
                            } : void 0,
                            file_url: e.file_url ? {
                                url: null !== (i = g(e.file_url)) && void 0 !== i ? i : e.file_url
                            } : void 0,
                            video_url: e.video_url ? {
                                url: null !== (r = g(e.video_url)) && void 0 !== r ? r : e.video_url
                            } : void 0,
                            audio_url: e.audio_url ? {
                                url: null !== (a = g(e.audio_url)) && void 0 !== a ? a : e.audio_url
                            } : void 0,
                            file_id: e.file_id || void 0
                        }]
                    });
                    return u({
                        ...n,
                        role: "user",
                        content: function(e) {
                            let t = e => {
                                    var t, n, o, i, r, a;
                                    return !!h.has(e.type) && (null !== (a = null !== (r = null !== (i = null === (t = e.image_url) || void 0 === t ? void 0 : t.url) && void 0 !== i ? i : null === (n = e.video_url) || void 0 === n ? void 0 : n.url) && void 0 !== r ? r : null === (o = e.audio_url) || void 0 === o ? void 0 : o.url) && void 0 !== a ? a : "").startsWith("/api/preview/")
                                },
                                n = e.some(e => h.has(e.type) && !t(e)),
                                o = e.some(e => "file_url" === e.type);
                            return n || o ? e.filter(e => !t(e)) : e
                        }(s),
                        skills: r
                    })
                }
                if ("user" === e.role && "string" == typeof e.content) {
                    let {
                        skills: t,
                        text: o
                    } = p(e.content);
                    return u({
                        ...n,
                        role: "user",
                        content: o,
                        skills: t.length > 0 ? t : void 0
                    })
                }
                return "assistant" === e.role && "string" == typeof e.content ? u({
                    ...n,
                    role: "assistant",
                    content: e.content,
                    isThinking: !1,
                    artifactRefs: []
                }) : u({
                    ...n,
                    content: "string" == typeof e.content ? e.content : ""
                })
            }

            function g(e) {
                return "string" == typeof e ? e : e && "object" == typeof e && "url" in e && "string" == typeof e.url ? e.url : void 0
            }

            function v(e) {
                let t = g(e);
                return !!t && (!!t.startsWith("data:") || t.length > 256 && !t.startsWith("http") && !t.startsWith("/"))
            }
            let h = new Set(["image_url", "video_url", "audio_url"]);

            function _(e) {
                let t = {},
                    n = [],
                    o = function(e) {
                        let t = [],
                            n = null;
                        for (let o of e) "user" === o.role ? (n && t.push(n), n = {
                            userMessage: o,
                            assistantMessages: []
                        }) : "assistant" === o.role && (n ? n.assistantMessages.push(o) : n = {
                            userMessage: {
                                id: "synthetic-user-".concat(Date.now()),
                                role: "user",
                                content: [{
                                    type: "text",
                                    text: "Continue with the task..."
                                }],
                                timestamp: new Date
                            },
                            assistantMessages: [o]
                        });
                        return n && t.push(n), t
                    }(e),
                    i = null;
                return o.forEach((e, o) => {
                    let r = "turn-".concat(o + 1),
                        a = function(e) {
                            if (0 === e.length) return null;
                            if (1 === e.length) return e[0];
                            let t = [],
                                n = null;
                            for (let o of e)
                                if ("string" == typeof o.content) {
                                    let e = o.content.match(/<think>[\s\S]*?<\/redacted_thinking>|<\/think>/g) || [];
                                    t.push(...e.map(e => e.replace(/<think>/gi, "").replace(/<\/redacted_thinking>|<\/think>/gi, "").trim()).filter(Boolean)), "" !== o.content.replace(/<think>[\s\S]*?<\/redacted_thinking>|<\/think>/g, "").trim() && (n = o)
                                } if (n && t.length > 0) {
                                let e = "string" == typeof n.content ? n.content.replace(/<think>[\s\S]*?<\/redacted_thinking>|<\/think>/g, "").trim() : n.content,
                                    o = t.join("\n\n").trim();
                                return {
                                    ...n,
                                    content: [o ? "<think>".concat(o) : "", "string" == typeof e ? e : ""].filter(Boolean).join("\n\n")
                                }
                            }
                            return n || e[e.length - 1]
                        }(e.assistantMessages),
                        l = {
                            id: r,
                            parentId: i,
                            userMessage: e.userMessage,
                            assistantMessages: a ? [a] : [],
                            children: [],
                            selectedChildId: void 0
                        };
                    t[r] = l, i && t[i] ? (t[i].children.push(r), t[i].selectedChildId = r) : n.push(r), i = r
                }), {
                    turns: t,
                    rootTurnIds: n,
                    selectedRootId: n[n.length - 1] || null
                }
            }
        },
        47156: function(e, t, n) {
            n.d(t, {
                ZY: function() {
                    return A
                },
                q5: function() {
                    return L
                },
                v4: function() {
                    return D
                },
                c8: function() {
                    return U
                },
                Hi: function() {
                    return S
                },
                vZ: function() {
                    return O
                },
                bl: function() {
                    return R
                },
                ET: function() {
                    return F
                },
                KV: function() {
                    return j
                },
                lp: function() {
                    return T
                },
                k6: function() {
                    return C
                }
            });
            var o = n(96647),
                i = n(51271);
            let r = RegExp(">\\s*\\*\\*Retrying:\\*\\*\\s*(.+?)(?:\\n\\n|$)", "gis"),
                a = /^Validation feedback:/im,
                l = /^Fix the errors and try again/im;
            var s = n(31125),
                c = n(84764);
            let u = null,
                d = async () => (u || (u = c.ZP.load()), u), f = async () => {
                    try {
                        let e = await d();
                        return (await e.get()).visitorId
                    } catch (e) {
                        return console.error("Error getting fingerprint:", e), "fallback-".concat(Math.random().toString(36).substring(2, 15))
                    }
                }, p = async () => {
                    let e = sessionStorage.getItem("browser_fingerprint");
                    if (e) return e;
                    let t = await f();
                    return sessionStorage.setItem("browser_fingerprint", t), t
                };
            var m = n(20061),
                g = n(70166),
                v = n(42783);
            async function h(e) {
                let t = await fetch("/api/agent/playground-ticket", {
                    method: "POST",
                    signal: e
                });
                if (!t.ok) {
                    let e = await t.text();
                    throw Error("Failed to mint playground ticket (".concat(t.status, "): ").concat(e))
                }
                let n = await t.json();
                return "string" == typeof n.ticket && n.ticket ? n.ticket : null
            }
            let _ = [/^Validation feedback:/i, /^Fix the errors and try again/i];

            function y(e, t) {
                null == e || e(t)
            }
            let w = e => {
                    if (e) {
                        if (e instanceof Headers) {
                            let t = {};
                            return e.forEach((e, n) => {
                                t[n] = e
                            }), t
                        }
                        return Array.isArray(e) ? e.reduce((e, t) => {
                            let [n, o] = t;
                            return e[n] = o, e
                        }, {}) : {
                            ...e
                        }
                    }
                },
                b = async function(e, t) {
                    var n, o;
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    if (!t.signal) {
                        let o = new AbortController,
                            a = setTimeout(() => o.abort(), 9e4);
                        try {
                            let l = await fetch(e, {
                                ...t,
                                redirect: null !== (n = t.redirect) && void 0 !== n ? n : "follow",
                                signal: o.signal
                            });
                            return clearTimeout(a), await k(l, e, t, i, r)
                        } catch (e) {
                            if (clearTimeout(a), e instanceof Error && "AbortError" === e.name) throw Error("Request timed out after 90 seconds. The Agent API may be experiencing high load.");
                            throw e
                        }
                    }
                    return k(await fetch(e, {
                        ...t,
                        redirect: null !== (o = t.redirect) && void 0 !== o ? o : "follow"
                    }), e, t, i, r)
                }, k = async (e, t, o, i, r) => {
                    if (303 === e.status) {
                        if (r >= 3) return e;
                        let n = e.headers.get("location");
                        if (!n) return e;
                        let a = new URL(n, t).toString(),
                            l = w(o.headers);
                        return l && (delete l["content-type"], delete l["Content-Type"]), b(a, {
                            ...o,
                            method: "GET",
                            body: void 0,
                            headers: l
                        }, i, r + 1)
                    }
                    if (498 === e.status && 0 === i) {
                        let {
                            refreshToken: e
                        } = await Promise.resolve().then(n.bind(n, 9715)), r = await e();
                        if (null == r ? void 0 : r.access_token) {
                            var a;
                            let e = {
                                ...null !== (a = w(o.headers)) && void 0 !== a ? a : {},
                                Authorization: "Bearer ".concat(r.access_token)
                            };
                            return b(t, {
                                ...o,
                                headers: e
                            }, i + 1)
                        }
                    }
                    return e
                };
            async function x(e, t, n) {
                let o = JSON.stringify({
                        layout: i.J_,
                        media_context: {
                            version: 1,
                            description: {
                                summary: "Storybook mock: default placement with description + empty annotations."
                            },
                            annotations: [],
                            tracks: [],
                            spatial_overlay_svg_inner: ""
                        }
                    }, null, 2),
                    r = "Here's a **storybook-only** reply with your canvas composed inline.\n\n```media-cards-canvas\n".concat(o, "\n```\n");
                for (let t = 0; t < r.length; t += 36) {
                    if (null == n ? void 0 : n.aborted) throw new DOMException("Aborted", "AbortError");
                    e(r.slice(t, t + 36)), await new Promise(e => setTimeout(e, 16))
                }
                t(r)
            }

            function I(e) {
                return "number" == typeof e && Number.isFinite(e) ? e : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? Number(e) : void 0
            }
            async function A(e, t, n, o, i, s) {
                var c, u, d, f, v, _, w, k, A, S, R, j, T, C, E, L, M;
                try {
                    if (window.__STORYBOOK_MOCK_VLM_CHAT_STREAM__) {
                        await x(n, o, null == s ? void 0 : s.signal);
                        return
                    }
                    let i = localStorage.getItem("access_token") || "",
                        T = null !== (u = null == s ? void 0 : s.modelId) && void 0 !== u ? u : "vlmrun-orion-2:auto",
                        C = (0, m.r6)(),
                        E = null !== (d = null == s ? void 0 : s.apiBaseUrl) && void 0 !== d ? d : C,
                        L = E === g.yi,
                        M = L ? (0, g.hs)(T) : null,
                        Z = {
                            model: M ? M.baseId : T,
                            messages: function(e, t) {
                                let n = e => e && "string" == typeof e.url && e.url.startsWith("/api/preview/") ? {
                                    ...e,
                                    url: "".concat(t).concat(e.url.slice(4))
                                } : e;
                                return e.map(e => Array.isArray(e.content) ? {
                                    ...e,
                                    content: e.content.map(e => {
                                        let t = n(e.image_url),
                                            o = n(e.video_url),
                                            i = n(e.audio_url),
                                            r = n(e.file_url);
                                        return t === e.image_url && o === e.video_url && i === e.audio_url && r === e.file_url ? e : {
                                            ...e,
                                            image_url: t,
                                            video_url: o,
                                            audio_url: i,
                                            file_url: r
                                        }
                                    })
                                } : e)
                            }(e, C),
                            session_id: t,
                            stream: !0,
                            preview: !0,
                            ...(null == M ? void 0 : M.method) ? {
                                method: M.method
                            } : {},
                            ...(null == s ? void 0 : s.skills) && s.skills.length > 0 ? {
                                skills: s.skills
                            } : {},
                            ...(null == s ? void 0 : s.toolsets) && s.toolsets.length > 0 ? {
                                toolsets: s.toolsets
                            } : {},
                            ...(null == s ? void 0 : s.models) && s.models.length > 0 ? {
                                models: s.models
                            } : {},
                            ...(null == s ? void 0 : s.canvas_schema) && Object.keys(s.canvas_schema).length > 0 ? {
                                canvas_schema: s.canvas_schema
                            } : {},
                            ...(null == s ? void 0 : s.sessionToken) ? {
                                session_token: s.sessionToken
                            } : {},
                            ...(null == s ? void 0 : s.maxTokens) != null ? {
                                max_tokens: s.maxTokens
                            } : {},
                            ...(null == s ? void 0 : s.temperature) != null ? {
                                temperature: s.temperature
                            } : {},
                            ...(null == s ? void 0 : s.seed) != null ? {
                                seed: s.seed
                            } : {},
                            ...(null == s ? void 0 : s.responseFormat) ? {
                                response_format: s.responseFormat
                            } : {},
                            ...(null == s ? void 0 : s.disableThinking) ? {
                                chat_template_kwargs: {
                                    enable_thinking: !1
                                }
                            } : {}
                        },
                        B = i || L ? null : await p(),
                        D = i || L ? null : await h(null == s ? void 0 : s.signal),
                        F = (null == s ? void 0 : null === (c = s.gatewayBearerToken) || void 0 === c ? void 0 : c.trim()) || "vlmrun",
                        O = await b("".concat(E, "/openai/chat/completions"), {
                            method: "POST",
                            headers: L ? {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(F)
                            } : {
                                "Content-Type": "application/json",
                                ...i ? {
                                    Authorization: "Bearer ".concat(i),
                                    "X-API-Base-URL": E
                                } : {},
                                ...D ? {
                                    "X-VLM-Playground-Ticket": D
                                } : {},
                                ...B ? {
                                    "X-Browser-Fingerprint": B
                                } : {}
                            },
                            body: JSON.stringify(Z),
                            signal: null == s ? void 0 : s.signal
                        });
                    if (!O.ok) {
                        let e = await O.text();
                        throw y(null == s ? void 0 : s.onDebugLog, {
                            level: "error",
                            category: "api",
                            message: "VLM Agent chat stream request failed",
                            details: {
                                sessionId: t,
                                modelId: T,
                                status: O.status,
                                responseBody: e,
                                skills: null !== (v = null == s ? void 0 : null === (f = s.skills) || void 0 === f ? void 0 : f.map(e => e.name)) && void 0 !== v ? v : [],
                                toolsets: null !== (_ = null == s ? void 0 : s.toolsets) && void 0 !== _ ? _ : []
                            }
                        }), Error("VLM Agent API error (".concat(O.status, "): ").concat(e))
                    }
                    if (!O.body) throw y(null == s ? void 0 : s.onDebugLog, {
                        level: "error",
                        category: "api",
                        message: "VLM Agent chat stream returned an empty body",
                        details: {
                            sessionId: t,
                            modelId: T
                        }
                    }), Error("Response body is null");
                    let U = O.body.getReader(),
                        V = new TextDecoder,
                        N = "",
                        P = new Set,
                        X = e => {
                            if (null == s ? void 0 : s.onDebugLog)
                                for (let n of function(e) {
                                        var t, n;
                                        let o = [];
                                        for (let n of e.matchAll(r)) {
                                            let e = null === (t = n[1]) || void 0 === t ? void 0 : t.trim();
                                            e && o.push({
                                                kind: "execute_code_retry",
                                                message: e
                                            })
                                        }
                                        if (a.test(e)) {
                                            let t = null === (n = e.split("\n").find(e => a.test(e))) || void 0 === n ? void 0 : n.trim();
                                            t && o.push({
                                                kind: "validation_feedback",
                                                message: t
                                            })
                                        }
                                        return l.test(e) && o.push({
                                            kind: "fix_errors_prompt",
                                            message: "Fix the errors and try again"
                                        }), o
                                    }(e)) {
                                    let e = "".concat(n.kind, ":").concat(n.message);
                                    P.has(e) || (P.add(e), y(s.onDebugLog, {
                                        level: "execute_code_retry" === n.kind ? "warn" : "info",
                                        category: "agent",
                                        message: "execute_code_retry" === n.kind ? "Agent retried code execution" : "validation_feedback" === n.kind ? "Agent received validation feedback" : "Agent asked to fix errors and retry",
                                        details: {
                                            sessionId: t,
                                            modelId: T,
                                            signalKind: n.kind,
                                            signal: n.message
                                        }
                                    }))
                                }
                        };
                    try {
                        for (;;) {
                            let {
                                done: e,
                                value: t
                            } = await U.read();
                            if (e) break;
                            for (let e of V.decode(t, {
                                    stream: !0
                                }).split("\n"))
                                if ("" !== e.trim() && e.startsWith("data: ")) {
                                    let t = e.slice(6);
                                    if ("[DONE]" === t) {
                                        console.log("[VLM Agent] Complete chat completion message:", N), o(N);
                                        return
                                    }
                                    try {
                                        let e = JSON.parse(t),
                                            i = function(e) {
                                                var t;
                                                let n = e.usage;
                                                if (!n || "object" != typeof n) return null;
                                                let o = I(null !== (t = n.completion_tokens) && void 0 !== t ? t : n.output_tokens),
                                                    i = I(n.cost);
                                                return null == o && null == i ? null : {
                                                    completionTokens: o,
                                                    costUsd: i
                                                }
                                            }(e);
                                        i && (null == s || null === (w = s.onUsage) || void 0 === w || w.call(s, i));
                                        let r = null === (S = e.choices) || void 0 === S ? void 0 : null === (A = S[0]) || void 0 === A ? void 0 : null === (k = A.delta) || void 0 === k ? void 0 : k.content;
                                        if (r && (N += r, X(N), n(r)), (null === (j = e.choices) || void 0 === j ? void 0 : null === (R = j[0]) || void 0 === R ? void 0 : R.finish_reason) === "stop") {
                                            console.log("[VLM Agent] Complete chat completion message:", N), o(N);
                                            return
                                        }
                                    } catch (e) {}
                                }
                        }
                    } finally {
                        U.releaseLock()
                    }
                } catch (n) {
                    let e = n instanceof Error ? n : Error("Unknown streaming error");
                    throw y(null == s ? void 0 : s.onDebugLog, {
                        level: "error",
                        category: "api",
                        message: "VLM Agent chat stream failed",
                        details: {
                            error: e.message,
                            errorType: e.name,
                            sessionId: t,
                            modelId: null == s ? void 0 : s.modelId,
                            modelVersion: null == s ? void 0 : null === (T = s.modelId) || void 0 === T ? void 0 : T.split(":")[1],
                            skills: null !== (L = null == s ? void 0 : null === (C = s.skills) || void 0 === C ? void 0 : C.map(e => e.name)) && void 0 !== L ? L : [],
                            toolsets: null !== (M = null == s ? void 0 : s.toolsets) && void 0 !== M ? M : []
                        }
                    }), console.error("VLM Agent API streaming error:", {
                        error: e.message,
                        sessionId: t,
                        modelId: null == s ? void 0 : s.modelId,
                        modelVersion: null == s ? void 0 : null === (E = s.modelId) || void 0 === E ? void 0 : E.split(":")[1],
                        timestamp: new Date().toISOString()
                    }), await i(e), e
                }
            }
            async function S() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        skip: t = 0,
                        limit: n = 20
                    } = e,
                    o = (await s.Z.get("/api/v1/chat-history", {
                        params: {
                            skip: t,
                            limit: n
                        }
                    })).data.map(e => ({
                        ...e,
                        messages_count: e.messages_count || 0,
                        status: e.status
                    })),
                    i = o.filter(e => !e.is_pinned);
                return {
                    chats: o,
                    total: o.length,
                    hasMore: i.length === n
                }
            }
            async function R(e) {
                try {
                    var t, n, o, i, r, a, l;
                    let c = (await s.Z.get("/api/v1/chat-history/".concat(e))).data;
                    return {
                        credit_cost: null !== (t = c.credit_cost) && void 0 !== t ? t : null,
                        cost_dollars: null !== (n = c.cost_dollars) && void 0 !== n ? n : null,
                        model_id: null !== (o = c.model_id) && void 0 !== o ? o : null,
                        model_version: null !== (i = c.model_version) && void 0 !== i ? i : null,
                        source: null !== (r = c.source) && void 0 !== r ? r : null,
                        messages_count: null !== (a = c.messages_count) && void 0 !== a ? a : 0,
                        created_at: c.created_at,
                        updated_at: c.updated_at,
                        status: c.status,
                        completion_metadata: null !== (l = c.completion_metadata) && void 0 !== l ? l : null
                    }
                } catch (t) {
                    return console.error("Failed to fetch metadata for session ".concat(e, ":"), t), null
                }
            }
            async function j(e, t) {
                let n = (await s.Z.patch("/api/v1/chat-history/".concat(e, "/pin"), {
                    is_pinned: t
                })).data;
                return {
                    ...n,
                    messages_count: n.messages_count || 0
                }
            }
            async function T(e, t) {
                let n = (await s.Z.patch("/api/v1/chat-history/".concat(e, "/rename"), {
                    title: t
                })).data;
                return {
                    ...n,
                    messages_count: n.messages_count || 0
                }
            }
            async function C(e, t) {
                let n = (await s.Z.patch("/api/v1/chat-history/".concat(e, "/share"), {
                    is_public: t
                })).data;
                return t || E(e).catch(() => {}), {
                    ...n,
                    messages_count: n.messages_count || 0
                }
            }
            async function E(e) {
                try {
                    await fetch("/api/purge-cache", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            sessionId: e
                        })
                    })
                } catch (e) {}
            }
            async function L(e) {
                await s.Z.delete("/api/v1/chat-history/".concat(e))
            }
            async function M(e, t) {
                var n;
                let o = localStorage.getItem("access_token") || "",
                    i = o ? null : await p();
                return (null !== (n = null == t ? void 0 : t.useCache) && void 0 !== n ? n : !o) ? Z(e, o, i) : B(e, o, i)
            }
            async function Z(e, t, n) {
                let i = "/api/chat-messages/".concat(e),
                    r = (0, o.YW)(e),
                    a = await fetch(i, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            ...t ? {
                                Authorization: "Bearer ".concat(t)
                            } : {},
                            ...n ? {
                                "X-Browser-Fingerprint": n
                            } : {},
                            ...r ? {
                                "X-Session-Token": r
                            } : {}
                        }
                    });
                if (401 === a.status || 403 === a.status) {
                    let e = new Date().toISOString();
                    return {
                        messages: [],
                        created_at: e,
                        updated_at: e
                    }
                }
                if (!a.ok) {
                    let e = await a.text();
                    throw Error("Failed to fetch chat messages (".concat(a.status, "): ").concat(e))
                }
                let l = await a.json();
                return l.media_token && (0, o.IA)(e, l.media_token), l
            }
            async function B(e, t, n) {
                let i = (0, m.r6)(),
                    r = new URL("".concat(i, "/chat/messages"));
                r.searchParams.set("session_id", e);
                let a = (0, o.YW)(e),
                    l = await b(r.toString(), {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "X-API-Base-URL": i,
                            ...t ? {
                                Authorization: "Bearer ".concat(t)
                            } : {},
                            ...n ? {
                                "X-Browser-Fingerprint": n
                            } : {},
                            ...a ? {
                                "X-Session-Token": a
                            } : {}
                        }
                    });
                if (401 === l.status || 403 === l.status) {
                    let e = new Date().toISOString();
                    return {
                        messages: [],
                        created_at: e,
                        updated_at: e
                    }
                }
                if (!l.ok) {
                    let e = await l.text();
                    throw Error("Failed to fetch chat messages (".concat(l.status, "): ").concat(e))
                }
                let s = await l.json();
                return s.media_token && (0, o.IA)(e, s.media_token), s
            }
            async function D(e, t) {
                var n;
                return (null !== (n = (await M(e, t)).messages) && void 0 !== n ? n : []).filter(e => "tool" !== e.role).filter(e => ! function(e) {
                    let t = ("string" == typeof e.content ? e.content : Array.isArray(e.content) ? e.content.filter(e => "text" === e.type).map(e => e.text).join("\n") : "").trim();
                    return _.some(e => e.test(t))
                }(e)).map(t => (0, v.zR)(t, e))
            }
            async function F() {
                let e = localStorage.getItem("access_token") || "",
                    t = e ? null : await p(),
                    n = (0, m.r6)(),
                    o = await b("".concat(n, "/openai/models"), {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "X-API-Base-URL": n,
                            ...e ? {
                                Authorization: "Bearer ".concat(e)
                            } : {},
                            ...t ? {
                                "X-Browser-Fingerprint": t
                            } : {}
                        }
                    });
                if (!o.ok) {
                    let e = await o.text();
                    throw Error("Failed to fetch chat models (".concat(o.status, "): ").concat(e))
                }
                let i = await o.json();
                return Array.isArray(null == i ? void 0 : i.data) ? i.data : []
            }
            async function O() {
                let e = await b("".concat(g.yi, "/openai/models"), {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer ".concat("vlmrun")
                    }
                });
                if (!e.ok) {
                    let t = await e.text();
                    throw Error("Failed to fetch gateway models (".concat(e.status, "): ").concat(t))
                }
                let t = await e.json();
                return Array.isArray(null == t ? void 0 : t.data) ? t.data : []
            }
            async function U(e) {
                try {
                    let t = await s.Z.get("/api/v1/chat-history/".concat(e));
                    return {
                        is_public: t.data.is_public,
                        user_id: t.data.user_id
                    }
                } catch (n) {
                    var t;
                    let e = null == n ? void 0 : null === (t = n.response) || void 0 === t ? void 0 : t.status;
                    if (403 === e || 404 === e) return {
                        unavailable: !0
                    };
                    return console.error("Failed to fetch chat metadata:", n), null
                }
            }
        },
        2293: function(e, t, n) {
            n.d(t, {
                am: function() {
                    return U
                },
                bI: function() {
                    return V
                },
                kW: function() {
                    return c
                }
            });
            var o = n(91351);
            let i = o.Z_().min(1),
                r = o.Z_().regex(/^(blk_|cel_)/, "Expected blk_* or cel_* id");
            o.Z_().regex(/^blk_/, "Expected blk_* id");
            let a = o.Z_().regex(/^cel_/, "Expected cel_* id"),
                l = o.Z_().regex(/^grid_/, "Expected grid_* id"),
                s = o.Rx().finite(),
                c = /^(img|vid|aud|doc|arr|data|recon)_[0-9a-zA-Z]+(?:\.[a-zA-Z0-9]+)?$/,
                u = o.Z_().regex(c, "Expected bare media object id (img_*, vid_*, aud_*, doc_*, arr_*, data_*, recon_*)"),
                d = o.G0([r, u]),
                f = o.G0([o.Z_().url(), o.Z_().regex(/^data:/), o.Z_().regex(c), a]),
                p = o.Z_().min(1).nullable().optional(),
                m = o.IM(o._4()).nullable().optional(),
                g = o.Z_().regex(/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, "Expected hex color"),
                v = o.Ry({
                    ref: i,
                    row: o.Rx().int().nonnegative(),
                    col: o.Rx().int().nonnegative(),
                    rowspan: o.Rx().int().positive().optional(),
                    colspan: o.Rx().int().positive().optional()
                }),
                h = o.Ry({
                    ref: i,
                    row: o.Rx().int().nonnegative(),
                    col: o.Rx().int().nonnegative(),
                    rowspan: o.Rx().int().positive().optional(),
                    colspan: o.Rx().int().positive().optional()
                }),
                _ = o.Ry({
                    object: o.i0("preview.image"),
                    id: d,
                    src: f,
                    title: p
                }),
                y = o.Ry({
                    object: o.i0("preview.audio"),
                    id: d,
                    src: f,
                    title: p,
                    duration: s.nullable().optional(),
                    start_time: s.nullable().optional(),
                    end_time: s.nullable().optional()
                }),
                w = o.Ry({
                    object: o.i0("preview.video"),
                    id: d,
                    src: f,
                    title: p,
                    duration: s.nullable().optional(),
                    start_time: s.nullable().optional(),
                    end_time: s.nullable().optional()
                }),
                b = o.Ry({
                    object: o.i0("preview.document"),
                    id: d,
                    src: f,
                    title: p,
                    npages: o.Rx().int().nonnegative().nullable().optional()
                }),
                k = o.Ry({
                    object: o.i0("preview.recon"),
                    id: d,
                    src: f,
                    title: p
                }),
                x = o.Ry({
                    object: o.i0("preview.image-annotation"),
                    id: i,
                    img_id: d,
                    label: p,
                    color: g.nullable().optional(),
                    data: o.Z_().min(1),
                    metadata: m
                }),
                I = o.Ry({
                    object: o.i0("preview.document-page-annotation"),
                    id: i,
                    doc_id: d,
                    page_index: o.Rx().int().nonnegative(),
                    label: p,
                    color: g.nullable().optional(),
                    data: o.Z_().min(1),
                    metadata: m
                }),
                A = o.VK("object", [x, I]),
                S = o.G0([o.Z_(), o.Rx(), o.O7(), o.lB(), v]),
                R = o.dj(e => Array.isArray(e) ? {
                    data: e
                } : e, o.Ry({
                    data: o.IX(S)
                })),
                j = o.Ry({
                    id: i,
                    columns: o.IX(i),
                    data: o.IX(R)
                }),
                T = j.extend({
                    object: o.i0("preview.table")
                }),
                C = j.extend({
                    object: o.i0("preview.audio-transcription-table")
                }),
                E = j.extend({
                    object: o.i0("preview.video-transcription-table")
                }),
                L = j.extend({
                    object: o.i0("preview.document-page-table")
                }),
                M = o.Ry({
                    object: o.i0("preview.video-transcription"),
                    id: d,
                    data: E
                }),
                Z = o.Ry({
                    object: o.i0("preview.video-timeline-item"),
                    id: i,
                    label: p,
                    color: g.nullable().optional(),
                    metadata: m,
                    start_time: s,
                    end_time: s
                }),
                B = o.Ry({
                    object: o.i0("preview.video-timeline"),
                    id: d,
                    video_id: d,
                    data: o.IX(Z)
                }),
                D = o.Ry({
                    object: o.i0("preview.grid"),
                    id: l,
                    cols: o.Rx().int().positive(),
                    data: o.IX(v)
                }),
                F = o.Ry({
                    object: o.i0("preview.canvas"),
                    id: i,
                    cols: o.Rx().int().positive(),
                    data: o.IX(h)
                });
            o.VK("object", [_, w, b, y, k, T, C, E, L, B, M]);
            let O = o.VK("object", [D, _, w, b, y, k, T, C, E, L, B, M]),
                U = o.VK("object", [F, D, _, w, b, y, k, T, C, E, L, B, M, x, I]),
                V = o.Ry({
                    canvas: F,
                    records: o.IM(O),
                    annotations: o.IX(A).optional()
                })
        },
        31604: function(e, t, n) {
            n.d(t, {
                Tf: function() {
                    return r
                },
                pC: function() {
                    return a
                }
            });
            var o = n(2293),
                i = n(96647);

            function r(e) {
                let t = e.trim();
                return o.kW.test(t) ? function(e) {
                    let t = e.indexOf(".");
                    return -1 === t ? e : e.slice(0, t)
                }(t) : e
            }

            function a(e, t, n) {
                let o = r(t),
                    a = void 0 !== n ? n : (0, i.YW)(e),
                    l = a ? "/api/preview/s/".concat(a, "/").concat(e, "/").concat(o) : "/api/preview/".concat(e, "/").concat(o),
                    s = function() {
                        try {
                            var e;
                            let t = null === (e = window.localStorage) || void 0 === e ? void 0 : e.getItem("debug:preview-nocache");
                            if (t && "0" !== t) return t;
                            if ("1" === new URLSearchParams(window.location.search).get("previewNoCache")) return "1"
                        } catch (e) {}
                        return null
                    }();
                return s ? "".concat(l, "?nocache=").concat(encodeURIComponent(s)) : l
            }
        },
        96647: function(e, t, n) {
            function o() {
                let e = new Uint8Array(32);
                return crypto.getRandomValues(e), btoa(String.fromCharCode(...e)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
            }

            function i(e, t) {
                try {
                    localStorage.setItem("".concat("st_").concat(e), t)
                } catch (e) {}
            }

            function r(e) {
                try {
                    return localStorage.getItem("".concat("st_").concat(e))
                } catch (e) {
                    return null
                }
            }
            n.d(t, {
                IA: function() {
                    return i
                },
                LC: function() {
                    return o
                },
                YW: function() {
                    return r
                }
            })
        }
    }
]);