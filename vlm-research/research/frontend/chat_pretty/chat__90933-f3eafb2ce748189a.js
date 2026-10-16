try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2a52cf18-6fec-43bb-bd58-6e2d997794c0", e._sentryDebugIdIdentifier = "sentry-dbid-2a52cf18-6fec-43bb-bd58-6e2d997794c0")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [90933], {
        87168: function(e, n, t) {
            t.d(n, {
                g$: function() {
                    return _
                },
                h1: function() {
                    return h
                },
                ho: function() {
                    return P
                }
            });
            var l = t(57437),
                a = t(2265),
                i = t(54353),
                r = t(30698),
                s = t(92934),
                o = t(33245),
                c = t(40875),
                d = t(94508),
                u = t(84190),
                m = t(1828),
                f = t(81103),
                p = t(70166);
            let h = [{
                    id: "core",
                    label: "Core",
                    description: "Image analysis, file upload, document extraction, video analysis"
                }, {
                    id: "document",
                    label: "Document",
                    description: "Document pages, layout detection, OCR, filtered PDF"
                }, {
                    id: "image",
                    label: "Image",
                    description: "Object/text/point detection, segmentation, UI detection"
                }, {
                    id: "image-gen",
                    label: "Image Gen",
                    description: "Image generation, transformation, blur regions"
                }, {
                    id: "video",
                    label: "Video",
                    description: "Video analysis, frame sampling, trimming, generation"
                }, {
                    id: "viz",
                    label: "Viz",
                    description: "Draw boxes, points, and masks"
                }, {
                    id: "web",
                    label: "Web",
                    description: "Web search"
                }, {
                    id: "world-gen",
                    label: "World Gen",
                    description: "3D object and scene reconstruction"
                }],
                g = ["vlmrun-orion-1:fast", "vlmrun-orion-1:auto", "vlmrun-orion-1:pro"],
                x = ["vlmrun-orion-2:fast", "vlmrun-orion-2:pro"],
                v = new Set(["vlm-1", "vlmrun-orion-1", "vlmrun-orion-1:auto", "vlmrun-orion-1:fast", "vlmrun-orion-1:lite", "vlmrun-orion-1:pro", "vlmrun-orion-2", "vlmrun-orion-2:auto", "vlmrun-orion-2:lite"]),
                b = "flex min-h-0 flex-col overflow-y-auto overscroll-contain p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

            function y(e) {
                return e.replace(/^vlmrun-/, "")
            }

            function j(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                if (!e) return !1;
                let t = n - 1e3 * e;
                return t >= 0 && t < 1296e6
            }

            function w(e) {
                let n = x.indexOf(e);
                return -1 === n ? x.length : n
            }

            function k(e) {
                return x.includes(e)
            }

            function N(e) {
                return g.includes(e)
            }

            function C(e) {
                return {
                    id: e,
                    object: "model",
                    created: 0,
                    owned_by: "vlm-run"
                }
            }

            function S(e, n) {
                let t = w(e.id) - w(n.id);
                return 0 !== t ? t : n.created - e.created || e.id.localeCompare(n.id)
            }

            function _(e) {
                return null != e ? e : "vlmrun-orion-2:auto"
            }

            function A(e) {
                let {
                    name: n,
                    qualifier: t
                } = e, a = t ? "".concat(n, ":").concat(t) : n;
                return (0, l.jsxs)(f.u, {
                    children: [(0, l.jsx)(f.aJ, {
                        asChild: !0,
                        children: (0, l.jsxs)("span", {
                            className: "min-w-0 truncate",
                            children: [(0, l.jsx)("span", {
                                children: n
                            }), t && (0, l.jsxs)("span", {
                                className: "text-muted-foreground",
                                children: [":", t]
                            })]
                        })
                    }), (0, l.jsx)(f._v, {
                        side: "top",
                        className: "max-w-xs break-all font-mono text-xs",
                        children: a
                    })]
                })
            }

            function V() {
                return (0, l.jsx)("span", {
                    className: "shrink-0 rounded-full bg-primary/10 px-1.5 py-px text-[9px] font-medium uppercase leading-none tracking-wide text-primary",
                    children: "New"
                })
            }

            function T() {
                return (0, l.jsx)(s.Z, {
                    className: "size-3.5 shrink-0 fill-current stroke-background"
                })
            }

            function P(e) {
                let {
                    selectedModel: n,
                    onModelChange: t,
                    disabled: s = !1,
                    variant: h = "inline",
                    includeOrion1: x = !1,
                    includeGateway: w = !1,
                    className: _,
                    menuSide: P = "top",
                    avoidCollisions: R = !0,
                    clearanceRef: L,
                    comfortable: I = !1,
                    onOpenChange: O
                } = e, D = "field" === h, E = (0, a.useRef)(null), [z, M] = (0, a.useState)(!1), [F, q] = (0, a.useState)(null !== n), {
                    sideOffset: U,
                    updateSideOffset: Z
                } = function(e, n, t, l) {
                    let [i, r] = (0, a.useState)(6), s = (0, a.useCallback)(() => {
                        if ("top" !== n || !(null == l ? void 0 : l.current) || !t.current) {
                            r(6);
                            return
                        }
                        r(Math.max(6, Math.round(t.current.getBoundingClientRect().top - l.current.getBoundingClientRect().top + 8)))
                    }, [l, n, t]);
                    return (0, a.useLayoutEffect)(() => {
                        e && s()
                    }, [e, s]), (0, a.useEffect)(() => {
                        if (!e || !(null == l ? void 0 : l.current)) return;
                        let n = new ResizeObserver(s);
                        return n.observe(l.current), window.addEventListener("resize", s), () => {
                            n.disconnect(), window.removeEventListener("resize", s)
                        }
                    }, [e, l, s]), {
                        sideOffset: i,
                        updateSideOffset: s
                    }
                }(z, P, E, L), {
                    isSignedIn: W
                } = (0, i.aF)(), {
                    data: J,
                    isLoading: B
                } = (0, r.JK)(), {
                    data: G,
                    isLoading: X,
                    isError: K
                } = (0, r.F7)({
                    enabled: w
                }), {
                    orion2Models: H,
                    orion1Models: Q
                } = (0, a.useMemo)(() => {
                    let e = function(e, n) {
                        let t = (null != e ? e : []).filter(e => {
                            var t;
                            return t = e.id, !(!(n && N(t)) && v.has(t))
                        });
                        if (n) {
                            let e = new Set(t.map(e => e.id));
                            for (let n of g) e.has(n) || t.push(C(n))
                        }
                        let l = t.filter(e => !N(e.id)).slice().sort(S);
                        return n ? [...l, ...g.map(e => {
                            var n;
                            return null !== (n = t.find(n => n.id === e)) && void 0 !== n ? n : C(e)
                        })] : l
                    }(J, x);
                    if (!x) return {
                        orion2Models: e,
                        orion1Models: []
                    };
                    let n = new Set(g);
                    return {
                        orion2Models: e.filter(e => !n.has(e.id)),
                        orion1Models: e.filter(e => n.has(e.id))
                    }
                }, [J, x]), $ = (0, a.useMemo)(() => w ? (0, p.Gs)(G) : [], [G, w]), Y = (0, a.useMemo)(() => $.find(e => e.id === n), [$, n]), ee = H.length > 0 || Q.length > 0;
                (0, a.useEffect)(() => {
                    null !== n && q(!0)
                }, [n]), (0, a.useEffect)(() => {
                    if (W || null === n || k(n)) return;
                    let e = null == J ? void 0 : J.find(e => e.id === n);
                    e && j(e.created) || (q(!1), t(null))
                }, [J, W, t, n]);
                let en = (0, a.useCallback)(e => {
                        e && Z(), M(e), null == O || O(e)
                    }, [O, Z]),
                    et = (0, a.useCallback)(e => {
                        q(!e), t(e ? null : "vlmrun-orion-2:pro")
                    }, [t]),
                    el = Y ? (0, p.h8)(Y.id) : n ? y(n) : "Auto",
                    ea = e => (0, l.jsxs)(f.u, {
                        children: [(0, l.jsx)(f.aJ, {
                            asChild: !0,
                            children: (0, l.jsx)("span", {
                                className: "inline-flex shrink-0 cursor-help text-muted-foreground",
                                onClick: e => e.preventDefault(),
                                children: (0, l.jsx)(o.Z, {
                                    className: "size-3.5"
                                })
                            })
                        }), (0, l.jsx)(f._v, {
                            side: "top",
                            children: e
                        })]
                    }),
                    ei = (e, n, t) => (0, l.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-1.5",
                        children: [(0, l.jsx)(A, {
                            name: e,
                            qualifier: n
                        }), j(t) && (0, l.jsx)(V, {})]
                    }),
                    er = e => {
                        let {
                            name: a,
                            qualifier: i
                        } = function(e) {
                            let n = y(e),
                                t = n.indexOf(":");
                            return -1 === t ? {
                                name: n,
                                qualifier: null
                            } : {
                                name: n.slice(0, t),
                                qualifier: n.slice(t + 1)
                            }
                        }(e.id), r = !W && !(k(e.id) || j(e.created)), s = ei(a, i, e.created);
                        return r ? (0, l.jsxs)("div", {
                            "aria-disabled": !0,
                            className: (0, d.cn)("flex cursor-not-allowed items-center justify-between gap-3 px-3 text-sm opacity-50", I ? "py-2.5 text-[15px]" : "py-1.5"),
                            children: [s, ea("Sign in to enable")]
                        }, e.id) : (0, l.jsxs)(u.Xi, {
                            onSelect: () => t(e.id),
                            className: (0, d.cn)("flex items-center justify-between gap-3 pr-2", I && "py-2.5 text-[15px]"),
                            children: [s, n === e.id && (0, l.jsx)(T, {})]
                        }, e.id)
                    };
                return (0, l.jsxs)(u.h_, {
                    modal: !1,
                    onOpenChange: en,
                    children: [(0, l.jsx)(u.$F, {
                        asChild: !0,
                        children: (0, l.jsxs)("button", {
                            ref: E,
                            type: "button",
                            disabled: s,
                            className: (0, d.cn)("transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50", D ? "flex h-9 w-full items-center justify-between gap-2 rounded-[10px] border border-border bg-background px-4 py-2 text-sm font-normal ring-offset-background hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-ring" : "inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:text-foreground", _),
                            children: [(0, l.jsx)("span", {
                                className: (0, d.cn)("truncate", D ? "min-w-0 flex-1 text-left" : "max-w-48"),
                                children: el
                            }), (0, l.jsx)(c.Z, {
                                className: (0, d.cn)("shrink-0", D ? "ml-2 size-4 opacity-50" : "size-3.5 opacity-70")
                            })]
                        })
                    }), (0, l.jsx)(u.AW, {
                        side: P,
                        align: "start",
                        sideOffset: U,
                        collisionPadding: 12,
                        avoidCollisions: R,
                        className: (0, d.cn)("flex flex-row items-stretch overflow-hidden p-0", "max-h-[min(18rem,var(--radix-dropdown-menu-content-available-height,40dvh))]", I && "shadow-none max-h-[min(20rem,var(--radix-dropdown-menu-content-available-height,50dvh))]", D ? "w-[var(--radix-dropdown-menu-trigger-width)] min-w-56" : w ? I ? "w-[36rem]" : "w-[34rem]" : I ? "w-72 min-w-72" : "w-64"),
                        children: (0, l.jsxs)(f.pn, {
                            delayDuration: 300,
                            children: [(0, l.jsxs)("div", {
                                className: (0, d.cn)(b, "min-w-0 flex-1", w && "border-r border-border"),
                                children: [(0, l.jsxs)("button", {
                                    type: "button",
                                    onClick: () => et(F),
                                    className: (0, d.cn)("flex w-full cursor-pointer select-none items-center justify-between gap-3 rounded-[6px] px-3 text-left outline-none transition-colors hover:bg-[#F7F7F7]", I ? "py-2.5 text-[15px]" : "py-1.5 text-sm"),
                                    children: [(0, l.jsx)("span", {
                                        className: "min-w-0 truncate",
                                        children: "Auto"
                                    }), (0, l.jsx)(m.r, {
                                        checked: !F,
                                        tabIndex: -1,
                                        className: "pointer-events-none h-4 w-7 data-[state=checked]:bg-emerald-500 data-[state=unchecked]:bg-muted-foreground/30 [&>span]:size-3 [&>span]:data-[state=checked]:translate-x-3"
                                    })]
                                }), (0, l.jsx)(u.VD, {}), B && (0, l.jsx)("div", {
                                    className: "px-2 py-1.5 text-xs text-muted-foreground",
                                    children: "Loading models…"
                                }), !B && !ee && (0, l.jsx)("div", {
                                    className: "px-2 py-1.5 text-xs text-muted-foreground",
                                    children: "No models available"
                                }), H.map(er), x && Q.length > 0 && (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(u.VD, {}), Q.map(er)]
                                })]
                            }), w && (0, l.jsxs)("div", {
                                className: (0, d.cn)(b, "w-72 shrink-0"),
                                children: [(0, l.jsx)("div", {
                                    className: "px-3 py-1.5 text-xs font-semibold text-muted-foreground",
                                    children: "Gateway"
                                }), X && (0, l.jsx)("div", {
                                    className: "px-3 py-1.5 text-xs text-muted-foreground",
                                    children: "Loading models…"
                                }), !X && K && (0, l.jsx)("div", {
                                    className: "px-3 py-1.5 text-xs text-muted-foreground",
                                    children: "Failed to load gateway models"
                                }), !X && !K && 0 === $.length && (0, l.jsx)("div", {
                                    className: "px-3 py-1.5 text-xs text-muted-foreground",
                                    children: "No gateway models"
                                }), $.map(e => {
                                    let a = (0, p.DC)(e.model),
                                        i = (0, p.fs)(e.model),
                                        r = null != a ? a : i ? "Requires image or document" : null,
                                        s = n === e.id,
                                        o = ei((0, p.h8)(e.baseId), e.hasMultipleMethods ? e.method : null, e.model.created);
                                    return a ? (0, l.jsxs)("div", {
                                        "aria-disabled": !0,
                                        className: "flex cursor-not-allowed items-center justify-between gap-2 px-3 py-1.5 text-sm opacity-50",
                                        children: [o, ea(null != r ? r : a)]
                                    }, e.id) : (0, l.jsxs)(u.Xi, {
                                        onSelect: () => t(e.id),
                                        className: "flex items-center justify-between gap-2 pr-2",
                                        children: [o, (0, l.jsxs)("span", {
                                            className: "flex shrink-0 items-center gap-1.5",
                                            children: [r && ea(r), s && (0, l.jsx)(T, {})]
                                        })]
                                    }, e.id)
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        34789: function(e, n, t) {
            t.d(n, {
                A$: function() {
                    return N
                },
                QA: function() {
                    return C
                },
                U1: function() {
                    return x
                },
                UY: function() {
                    return g
                },
                Uv: function() {
                    return b
                },
                Wr: function() {
                    return m
                },
                bh: function() {
                    return d
                },
                s8: function() {
                    return w
                },
                sG: function() {
                    return v
                },
                sw: function() {
                    return k
                },
                y_: function() {
                    return u
                }
            });
            var l = t(57437),
                a = t(2265),
                i = t(26110),
                r = t(17814),
                s = t(12339),
                o = t(92129),
                c = t(32342);
            let d = "https://storage.googleapis.com/vlm-data-public-prod/web/misc/Skill-defaults/exampleDocument.pdf",
                u = "https://storage.googleapis.com/vlm-data-public-prod/web/misc/Skill-defaults/exampleImage.jpg",
                m = "https://storage.googleapis.com/vlm-data-public-prod/web/misc/Skill-defaults/exampleVideo.mp4",
                f = [d, u, m],
                p = "508ece97-b893-4147-b82e-199d76080e5b",
                h = e => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

            function g(e) {
                var n;
                return (null !== (n = e.split("/").pop()) && void 0 !== n ? n : e).split("?")[0]
            }

            function x(e) {
                return e.map(e => {
                    var n;
                    let t = f.reduce((e, n) => e.replace(RegExp(h(n), "g"), g(n)), e.code);
                    return t === e.code ? e : {
                        ...e,
                        code: t,
                        copyCode: null !== (n = e.copyCode) && void 0 !== n ? n : e.code
                    }
                })
            }

            function v(e) {
                return "<VLMRUN_API_KEY>" === e ? e : e.slice(0, 7) + "..."
            }

            function b(e, n, t) {
                return n === t ? e : e.map(e => ({
                    ...e,
                    copyCode: e.code.replaceAll(n, t)
                }))
            }
            let y = e => JSON.stringify(e),
                j = e => "'".concat(e.replace(/'/g, "'\"'\"'"), "'");

            function w(e, n, t, l) {
                let a = l && l.length > 0 ? l : [p];
                return [{
                    label: "Agent",
                    code: 'from pydantic import BaseModel, Field\nfrom vlmrun.client import VLMRun\nfrom vlmrun.client.types import AgentExecutionConfig, AgentSkill\nfrom vlmrun.types import MessageContent\n\nclient = VLMRun(base_url="https://agent.vlm.run/v1", api_key='.concat(y(t), ")\n").concat(function(e) {
                        if (1 === e.length) return 'class FileInput(BaseModel):\n    file: MessageContent = Field(..., description="The file to process")';
                        let n = e.map((e, n) => "    file_".concat(n, ': MessageContent = Field(..., description="File ').concat(n + 1, ' to process")')).join("\n");
                        return "class FileInput(BaseModel):\n".concat(n)
                    }(a), "\n\nresponse = client.agent.execute(\n    inputs=FileInput(\n").concat(1 === a.length ? '        file=MessageContent(type="input_file", file_id='.concat(y(a[0]), "),") : a.map((e, n) => "        file_".concat(n, '=MessageContent(type="input_file", file_id=').concat(y(e), "),")).join("\n"), "\n    ),\n    config=AgentExecutionConfig(\n        skills=[AgentSkill(skill_name=").concat(y(e), ", skill_version=").concat(y(n), ")]\n    ),\n    batch=True,\n)")
                }, {
                    label: "Image",
                    code: "from vlmrun.client import VLMRun\nfrom vlmrun.client.types import GenerationConfig, AgentSkill\n\nclient = VLMRun(api_key=".concat(y(t), ")\n\nresponse = client.image.generate(\n    images=[").concat(y(u), "],\n    config=GenerationConfig(\n        skills=[AgentSkill(skill_name=").concat(y(e), ", skill_version=").concat(y(n), ")]\n    )\n)")
                }, {
                    label: "Document",
                    code: "from vlmrun.client import VLMRun\nfrom vlmrun.client.types import GenerationConfig, AgentSkill\n\nclient = VLMRun(api_key=".concat(y(t), ")\n\nresponse = client.document.generate(\n    file=").concat(y(d), ",\n    config=GenerationConfig(\n        skills=[AgentSkill(skill_name=").concat(y(e), ", skill_version=").concat(y(n), ")]\n    )\n)")
                }, {
                    label: "Video",
                    code: "from vlmrun.client import VLMRun\nfrom vlmrun.client.types import GenerationConfig, AgentSkill\n\nclient = VLMRun(api_key=".concat(y(t), ")\n\nresponse = client.video.generate(\n    file=").concat(y(m), ",\n    batch=True,\n    config=GenerationConfig(\n        skills=[AgentSkill(skill_name=").concat(y(e), ", skill_version=").concat(y(n), ")]\n    )\n)")
                }, {
                    label: "Completions",
                    code: 'from vlmrun.client import VLMRun\n\nclient = VLMRun(base_url="https://agent.vlm.run/v1", api_key='.concat(y(t), ")\n\nresponse = client.agent.completions.create(\n    model=").concat(y("vlmrun-orion-1:auto"), ',\n    messages=[{"role": "user", "content": "Summarize this document."}],\n    skills=[{"skill_name": ').concat(y(e), ', "skill_version": ').concat(y(n), "}],\n)")
                }]
            }

            function k(e, n, t, l) {
                let a = l && l.length > 0 ? l : [p];
                return [{
                    label: "Agent",
                    code: 'import { VlmRun } from "vlmrun";\n\nconst client = new VlmRun({\n    baseURL: "https://agent.vlm.run/v1",\n    apiKey: '.concat(y(t), ",\n});\n\nconst response = await client.agent.execute({\n    inputs: ").concat(function(e) {
                        if (1 === e.length) return '{ file: { type: "input_file", file_id: '.concat(y(e[0]), " } }");
                        let n = e.map((e, n) => "        file_".concat(n, ': { type: "input_file", file_id: ').concat(y(e), " }")).join(",\n");
                        return "{\n".concat(n, ",\n    }")
                    }(a), ",\n    config: {\n        skills: [{ skillName: ").concat(y(e), ", skillVersion: ").concat(y(n), " }],\n    },\n    batch: true,\n});")
                }, {
                    label: "Image",
                    code: 'import { VlmRun } from "vlmrun";\n\nconst client = new VlmRun({ apiKey: '.concat(y(t), " });\n\nconst response = await client.image.generate({\n    images: [").concat(y(u), "],\n    config: {\n        skills: [{ skillName: ").concat(y(e), ", skillVersion: ").concat(y(n), " }],\n    },\n});")
                }, {
                    label: "Document",
                    code: 'import { VlmRun } from "vlmrun";\n\nconst client = new VlmRun({ apiKey: '.concat(y(t), " });\n\nconst fileResponse = await client.files.upload({ filePath: ").concat(y(d), " });\nconst response = await client.document.generate({\n    fileId: fileResponse.id,\n    config: {\n        skills: [{ skillName: ").concat(y(e), ", skillVersion: ").concat(y(n), " }],\n    },\n});")
                }, {
                    label: "Video",
                    code: 'import { VlmRun } from "vlmrun";\n\nconst client = new VlmRun({ apiKey: '.concat(y(t), " });\n\nconst fileResponse = await client.files.upload({ filePath: ").concat(y(m), " });\nconst response = await client.video.generate({\n    fileId: fileResponse.id,\n    batch: true,\n    config: {\n        skills: [{ skillName: ").concat(y(e), ", skillVersion: ").concat(y(n), " }],\n    },\n});")
                }, {
                    label: "Completions",
                    code: 'import { VlmRun } from "vlmrun";\n\nconst client = new VlmRun({\n    baseURL: "https://agent.vlm.run/v1",\n    apiKey: '.concat(y(t), ',\n});\n\nconst response = await client.agent.completions.create({\n    model: "vlmrun-orion-1:auto",\n    messages: [{ role: "user", content: "Summarize this document." }],\n    skills: [{ skillName: ').concat(y(e), ", skillVersion: ").concat(y(n), " }],\n});")
                }]
            }

            function N(e, n, t, l) {
                let a = l && l.length > 0 ? l : [p],
                    i = j("Authorization: Bearer ".concat(t)),
                    r = j("Content-Type: application/json"),
                    s = j(JSON.stringify({
                        inputs: 1 === a.length ? {
                            file: {
                                type: "input_file",
                                file_id: a[0]
                            }
                        } : a.reduce((e, n, t) => (e["file_".concat(t)] = {
                            type: "input_file",
                            file_id: n
                        }, e), {}),
                        config: {
                            skills: [{
                                skill_name: e,
                                skill_version: n
                            }]
                        },
                        batch: !0
                    }, null, 2)),
                    o = j(JSON.stringify({
                        model: "vlm-1",
                        images: [u],
                        config: {
                            skills: [{
                                skill_name: e,
                                skill_version: n
                            }]
                        }
                    }, null, 2)),
                    c = j(JSON.stringify({
                        model: "vlm-1",
                        file_id: p,
                        config: {
                            skills: [{
                                skill_name: e,
                                skill_version: n
                            }]
                        }
                    }, null, 2)),
                    d = j(JSON.stringify({
                        model: "vlm-1",
                        file_id: "ac99b553-ada2-4844-a6a1-f9efde03368d",
                        batch: !0,
                        config: {
                            skills: [{
                                skill_name: e,
                                skill_version: n
                            }]
                        }
                    }, null, 2)),
                    m = j(JSON.stringify({
                        model: "vlmrun-orion-1:auto",
                        messages: [{
                            role: "user",
                            content: "Summarize this document."
                        }],
                        skills: [{
                            skill_name: e,
                            skill_version: n
                        }]
                    }, null, 2));
                return [{
                    label: "Agent",
                    code: "curl -X POST https://agent.vlm.run/v1/agent/execute \\\n  -H ".concat(i, " \\\n  -H ").concat(r, " \\\n  -d ").concat(s)
                }, {
                    label: "Image",
                    code: "curl -X POST https://api.vlm.run/v1/image/generate \\\n  -H ".concat(i, " \\\n  -H ").concat(r, " \\\n  -d ").concat(o)
                }, {
                    label: "Document",
                    code: "curl -X POST https://api.vlm.run/v1/document/generate \\\n  -H ".concat(i, " \\\n  -H ").concat(r, " \\\n  -d ").concat(c)
                }, {
                    label: "Video",
                    code: "curl -X POST https://api.vlm.run/v1/video/generate \\\n  -H ".concat(i, " \\\n  -H ").concat(r, " \\\n  -d ").concat(d)
                }, {
                    label: "Completions",
                    code: "curl -X POST https://agent.vlm.run/v1/openai/chat/completions \\\n  -H ".concat(i, " \\\n  -H ").concat(r, " \\\n  -d ").concat(m)
                }]
            }

            function C(e) {
                let {
                    open: n,
                    onOpenChange: t,
                    skillName: f = "<skill-name>",
                    skillVersion: p = "latest"
                } = e, h = "<VLMRUN_API_KEY>", y = v(h), [j, C] = (0, a.useState)("Agent"), S = [{
                    from: g(d),
                    to: d
                }, {
                    from: g(u),
                    to: u
                }, {
                    from: g(m),
                    to: m
                }], {
                    isMobile: _,
                    mounted: A
                } = (0, c.sT)(), V = (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: "flex items-center justify-between px-6 pt-6",
                        children: [(0, l.jsx)("h2", {
                            className: "text-lg font-semibold",
                            children: "Skill code snippet"
                        }), (0, l.jsx)("a", {
                            href: "https://docs.vlm.run/capabilities/skills",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex h-8 items-center rounded-[10px] border border-border bg-background px-3 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                            children: "View docs"
                        })]
                    }), (0, l.jsx)("div", {
                        className: "px-6 pb-6",
                        children: (0, l.jsxs)(s.mQ, {
                            defaultValue: "python",
                            children: [(0, l.jsxs)(s.dr, {
                                children: [(0, l.jsx)(s.SP, {
                                    value: "python",
                                    children: "Python"
                                }), (0, l.jsx)(s.SP, {
                                    value: "node",
                                    children: "Node"
                                }), (0, l.jsx)(s.SP, {
                                    value: "curl",
                                    children: "cURL"
                                })]
                            }), (0, l.jsx)(s.nU, {
                                value: "python",
                                children: (0, l.jsx)(o.d, {
                                    bordered: !0,
                                    language: "python",
                                    contentTabs: x(b(w(f, p, y), y, h)),
                                    selectedTab: j,
                                    onSelectedTabChange: C,
                                    copySubstitutions: S
                                })
                            }), (0, l.jsx)(s.nU, {
                                value: "node",
                                children: (0, l.jsx)(o.d, {
                                    bordered: !0,
                                    language: "javascript",
                                    contentTabs: x(b(k(f, p, y), y, h)),
                                    selectedTab: j,
                                    onSelectedTabChange: C,
                                    copySubstitutions: S
                                })
                            }), (0, l.jsx)(s.nU, {
                                value: "curl",
                                children: (0, l.jsx)(o.d, {
                                    bordered: !0,
                                    language: "bash",
                                    contentTabs: x(b(N(f, p, y), y, h)),
                                    selectedTab: j,
                                    onSelectedTabChange: C,
                                    copySubstitutions: S
                                })
                            })]
                        })
                    })]
                });
                return A && _ ? (0, l.jsx)(r.dy, {
                    open: n,
                    onOpenChange: t,
                    children: (0, l.jsx)(r.sc, {
                        className: "flex max-h-[90dvh] flex-col gap-0 overflow-auto p-0",
                        children: V
                    })
                }) : (0, l.jsx)(i.Vq, {
                    open: n,
                    onOpenChange: t,
                    children: (0, l.jsxs)(i.cZ, {
                        hideCloseButton: !0,
                        className: "max-w-2xl",
                        children: [(0, l.jsxs)(i.fK, {
                            className: "flex-row items-center justify-between space-y-0",
                            children: [(0, l.jsx)(i.$N, {
                                children: "Skill code snippet"
                            }), (0, l.jsx)("a", {
                                href: "https://docs.vlm.run/capabilities/skills",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex h-8 items-center rounded-[10px] border border-border bg-background px-3 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                children: "View docs"
                            })]
                        }), (0, l.jsxs)(s.mQ, {
                            defaultValue: "python",
                            children: [(0, l.jsxs)(s.dr, {
                                children: [(0, l.jsx)(s.SP, {
                                    value: "python",
                                    children: "Python"
                                }), (0, l.jsx)(s.SP, {
                                    value: "node",
                                    children: "Node"
                                }), (0, l.jsx)(s.SP, {
                                    value: "curl",
                                    children: "cURL"
                                })]
                            }), (0, l.jsx)(s.nU, {
                                value: "python",
                                children: (0, l.jsx)(o.d, {
                                    bordered: !0,
                                    language: "python",
                                    contentTabs: x(b(w(f, p, y), y, h)),
                                    selectedTab: j,
                                    onSelectedTabChange: C,
                                    copySubstitutions: S
                                })
                            }), (0, l.jsx)(s.nU, {
                                value: "node",
                                children: (0, l.jsx)(o.d, {
                                    bordered: !0,
                                    language: "javascript",
                                    contentTabs: x(b(k(f, p, y), y, h)),
                                    selectedTab: j,
                                    onSelectedTabChange: C,
                                    copySubstitutions: S
                                })
                            }), (0, l.jsx)(s.nU, {
                                value: "curl",
                                children: (0, l.jsx)(o.d, {
                                    bordered: !0,
                                    language: "bash",
                                    contentTabs: x(b(N(f, p, y), y, h)),
                                    selectedTab: j,
                                    onSelectedTabChange: C,
                                    copySubstitutions: S
                                })
                            })]
                        })]
                    })
                })
            }
        },
        12339: function(e, n, t) {
            t.d(n, {
                SP: function() {
                    return p
                },
                dr: function() {
                    return f
                },
                mQ: function() {
                    return o
                },
                nU: function() {
                    return h
                }
            });
            var l = t(57437),
                a = t(2265),
                i = t(20271),
                r = t(77712),
                s = t(94508);
            let o = i.fC,
                c = (0, r.j)("inline-flex items-center justify-center text-muted-foreground", {
                    variants: {
                        size: {
                            default: "h-9 p-1",
                            sm: "h-7 p-[3px]"
                        },
                        variant: {
                            pill: "rounded-[10px] bg-[#F5F5F5]",
                            underline: "h-auto justify-start gap-5 rounded-none border-b border-border bg-transparent p-0"
                        }
                    },
                    defaultVariants: {
                        size: "default",
                        variant: "pill"
                    }
                }),
                d = (0, r.j)("inline-flex h-full items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
                    variants: {
                        size: {
                            default: "text-sm",
                            sm: "text-xs leading-none"
                        },
                        variant: {
                            pill: "data-[state=active]:bg-background data-[state=active]:text-foreground",
                            underline: "rounded-none border-b-2 border-transparent px-0 pb-2.5 text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground"
                        }
                    },
                    compoundVariants: [{
                        variant: "pill",
                        size: "default",
                        className: "rounded-[8px] px-3 py-1"
                    }, {
                        variant: "pill",
                        size: "sm",
                        className: "rounded-[10px] px-2 py-0 data-[state=active]:shadow-sm"
                    }],
                    defaultVariants: {
                        size: "default",
                        variant: "pill"
                    }
                }),
                u = a.createContext("default"),
                m = a.createContext("pill"),
                f = a.forwardRef((e, n) => {
                    let {
                        className: t,
                        size: a = "default",
                        variant: r = "pill",
                        ...o
                    } = e;
                    return (0, l.jsx)(u.Provider, {
                        value: a,
                        children: (0, l.jsx)(m.Provider, {
                            value: r,
                            children: (0, l.jsx)(i.aV, {
                                ref: n,
                                className: (0, s.cn)(c({
                                    size: a,
                                    variant: r
                                }), t),
                                ...o
                            })
                        })
                    })
                });
            f.displayName = i.aV.displayName;
            let p = a.forwardRef((e, n) => {
                var t, r;
                let {
                    className: o,
                    size: c,
                    variant: f,
                    ...p
                } = e, h = a.useContext(u), g = a.useContext(m), x = null !== (t = null != c ? c : h) && void 0 !== t ? t : "default", v = null !== (r = null != f ? f : g) && void 0 !== r ? r : "pill";
                return (0, l.jsx)(i.xz, {
                    ref: n,
                    className: (0, s.cn)(d({
                        size: x,
                        variant: v
                    }), o),
                    ...p
                })
            });
            p.displayName = i.xz.displayName;
            let h = a.forwardRef((e, n) => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, l.jsx)(i.VY, {
                    ref: n,
                    className: (0, s.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", t),
                    ...a
                })
            });
            h.displayName = i.VY.displayName
        },
        90933: function(e, n, t) {
            t.d(n, {
                l: function() {
                    return et
                }
            });
            var l = t(57437),
                a = t(2265),
                i = t(99376),
                r = t(49981),
                s = t(3311),
                o = t(81907),
                c = t(91141),
                d = t(13590),
                u = t(40875),
                m = t(51817),
                f = t(22135),
                p = t(78406),
                h = t(48736),
                g = t(29501),
                x = t(14438),
                v = t(49360),
                b = t(91351),
                y = t(29133),
                j = t(94508),
                w = t(43650),
                k = t(58759),
                N = t(32342),
                C = t(62869),
                S = t(19060),
                _ = t(74928),
                A = t(26110),
                V = t(17814),
                T = t(84190),
                P = t(15681),
                R = t(95186),
                L = t(53647),
                I = t(1828),
                O = t(12339),
                D = t(92129),
                E = t(87168),
                z = t(34789),
                M = t(22931),
                F = t(75952),
                q = t(34797);
            let U = e => "".concat(e.name, "-").concat(e.size, "-").concat(e.lastModified),
                Z = () => "undefined" != typeof crypto && "function" == typeof crypto.randomUUID ? crypto.randomUUID() : "".concat(Math.random().toString(36).slice(2), "-").concat(Date.now()),
                W = [z.bh, z.y_, z.Wr],
                J = e => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

            function B(e) {
                let {
                    skillName: n,
                    skillVersion: t,
                    open: i,
                    onlyAgentTab: r = !1,
                    excludeContentTabs: s = [],
                    contentTabOrder: o,
                    defaultContentTab: c = "Agent",
                    agentFileIds: d,
                    fileName: u,
                    activeLanguageTab: m,
                    onActiveLanguageTabChange: f
                } = e, p = "<VLMRUN_API_KEY>", h = (0, z.sG)(p), [g, x] = (0, a.useState)(c), v = null != d ? d : [], [b, y] = (0, a.useState)(u);
                (0, a.useEffect)(() => {
                    y(u)
                }, [u]);
                let j = a.useMemo(() => [{
                        from: (0, z.UY)(z.bh),
                        to: z.bh
                    }, {
                        from: (0, z.UY)(z.y_),
                        to: z.y_
                    }, {
                        from: (0, z.UY)(z.Wr),
                        to: z.Wr
                    }], []),
                    w = a.useMemo(() => W.map(e => RegExp(J(e), "g")), []),
                    k = a.useCallback(e => {
                        let n = r ? e.filter(e => "Agent" === e.label) : e.filter(e => !s.includes(e.label));
                        return o && (n = [...n].sort((e, n) => {
                            let t = o.indexOf(e.label),
                                l = o.indexOf(n.label);
                            return (-1 === t ? 999 : t) - (-1 === l ? 999 : l)
                        })), n
                    }, [r, s, o]),
                    N = a.useCallback(e => b ? e.map(e => {
                        let n = e => {
                            let n = e;
                            for (let e of w) n = n.replace(e, b);
                            return n
                        };
                        return {
                            ...e,
                            code: n(e.code),
                            copyCode: null != e.copyCode ? n(e.copyCode) : void 0
                        }
                    }) : e, [b, w]),
                    C = a.useCallback(e => (0, z.U1)(N(k((0, z.Uv)(e(n, t, h, v), h, p)))), [N, k, n, t, h, v, p]),
                    S = a.useMemo(() => C(z.s8), [C]),
                    _ = a.useMemo(() => C(z.sw), [C]),
                    A = a.useMemo(() => C(z.A$), [C]);
                return (0, l.jsx)("div", {
                    className: "space-y-2",
                    children: (0, l.jsxs)(O.mQ, {
                        value: null != m ? m : "python",
                        onValueChange: f,
                        children: [(0, l.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, l.jsx)("span", {
                                    className: "text-sm font-medium leading-none",
                                    children: "Code snippet"
                                }), (0, l.jsxs)(O.dr, {
                                    className: "h-7 p-0.5",
                                    children: [(0, l.jsx)(O.SP, {
                                        value: "python",
                                        className: "h-6 px-2.5 text-xs",
                                        children: "Python"
                                    }), (0, l.jsx)(O.SP, {
                                        value: "node",
                                        className: "h-6 px-2.5 text-xs",
                                        children: "Node"
                                    }), (0, l.jsx)(O.SP, {
                                        value: "curl",
                                        className: "h-6 px-2.5 text-xs",
                                        children: "cURL"
                                    })]
                                })]
                            }), (0, l.jsx)("a", {
                                href: "https://docs.vlm.run/capabilities/skills",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex h-7 items-center rounded-[10px] border border-border bg-background px-3 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                children: "View docs"
                            })]
                        }), (0, l.jsx)(O.nU, {
                            value: "python",
                            children: (0, l.jsx)(D.d, {
                                bordered: !0,
                                language: "python",
                                contentTabs: S,
                                selectedTab: g,
                                onSelectedTabChange: x,
                                copySubstitutions: j
                            })
                        }), (0, l.jsx)(O.nU, {
                            value: "node",
                            children: (0, l.jsx)(D.d, {
                                bordered: !0,
                                language: "javascript",
                                contentTabs: _,
                                selectedTab: g,
                                onSelectedTabChange: x,
                                copySubstitutions: j
                            })
                        }), (0, l.jsx)(O.nU, {
                            value: "curl",
                            children: (0, l.jsx)(D.d, {
                                bordered: !0,
                                language: "bash",
                                contentTabs: A,
                                selectedTab: g,
                                onSelectedTabChange: x,
                                copySubstitutions: j
                            })
                        })]
                    })
                })
            }
            let G = b.Ry({
                    agentId: b.Z_().optional(),
                    prompt: b.Z_().optional(),
                    model: b.Z_().nullable().optional(),
                    detail: b.Km(["auto", "hi", "lo"]).default("auto"),
                    files: b.IX(b.Pp(File, {
                        message: "File is required"
                    })).min(1, "Please upload at least one file")
                }),
                X = e => {
                    var n, t;
                    let {
                        selectedSkillName: i,
                        selectedSkillVersion: r,
                        selectedAgentId: s,
                        onSkillBrowse: o,
                        onAgentSelect: c,
                        agentsData: d,
                        isLoadingAgents: m
                    } = e, [f, p] = (0, a.useState)(!1), h = null == d ? void 0 : null === (n = d.data) || void 0 === n ? void 0 : n.find(e => e.id === s), g = i || (null == h ? void 0 : h.name) || null, x = i ? r : null !== (t = null == h ? void 0 : h.version) && void 0 !== t ? t : null, v = (0, a.useMemo)(() => {
                        var e;
                        return Array.from((null !== (e = null == d ? void 0 : d.data) && void 0 !== e ? e : []).reduce((e, n) => {
                            var t;
                            let l = null !== (t = e.get(n.name)) && void 0 !== t ? t : [];
                            return l.push(n), e.set(n.name, l), e
                        }, new Map).entries()).map(e => {
                            let [n, t] = e;
                            return {
                                name: n,
                                versions: [...t].sort((e, n) => new Date(n.created_at).getTime() - new Date(e.created_at).getTime())
                            }
                        })
                    }, [d]), b = e => {
                        var n;
                        let {
                            name: t,
                            versions: a
                        } = e, i = null !== (n = (0, w.JF)(a)) && void 0 !== n ? n : a[0];
                        return 1 === a.length ? (0, l.jsx)(T.Xi, {
                            onClick: () => c(i.id),
                            children: t
                        }, i.id) : (0, l.jsxs)(T.Ph, {
                            children: [(0, l.jsx)(T.kt, {
                                onClick: () => c(i.id),
                                children: t
                            }), (0, l.jsx)(T.TG, {
                                className: "max-h-80 overflow-y-auto",
                                children: a.map(e => (0, l.jsxs)(T.Xi, {
                                    onClick: () => c(e.id),
                                    children: ["v", e.version]
                                }, e.id))
                            })]
                        }, t)
                    };
                    return (0, l.jsxs)(T.h_, {
                        open: f,
                        onOpenChange: p,
                        children: [(0, l.jsx)(T.$F, {
                            asChild: !0,
                            children: (0, l.jsxs)(C.z, {
                                type: "button",
                                variant: "outline",
                                className: (0, j.cn)("w-full justify-between font-normal", !g && "text-muted-foreground"),
                                children: [(0, l.jsx)("span", {
                                    className: "min-w-0 flex-1 truncate text-left",
                                    children: null != g ? g : "Select a Skill or Agent"
                                }), x && (0, l.jsx)(F.O, {
                                    version: x,
                                    truncate: !0,
                                    readOnly: !0,
                                    className: "ml-2 shrink-0"
                                }), (0, l.jsx)(u.Z, {
                                    className: "ml-2 size-4 shrink-0 opacity-50"
                                })]
                            })
                        }), (0, l.jsxs)(T.AW, {
                            className: "w-[var(--radix-dropdown-menu-trigger-width)]",
                            children: [(0, l.jsx)(T.Xi, {
                                onClick: () => {
                                    p(!1), o()
                                },
                                children: "Skills"
                            }), (0, l.jsxs)(T.Ph, {
                                children: [(0, l.jsx)(T.kt, {
                                    children: "Agents"
                                }), (0, l.jsx)(T.TG, {
                                    className: "max-h-80 w-64 overflow-y-auto",
                                    children: m ? (0, l.jsx)(T.Ju, {
                                        className: "py-4 text-center font-normal text-muted-foreground",
                                        children: "Loading agents..."
                                    }) : v.length > 0 ? v.map(e => b(e)) : (0, l.jsx)(T.Ju, {
                                        className: "py-4 text-center font-normal text-muted-foreground",
                                        children: "No agents available"
                                    })
                                })]
                            })]
                        })]
                    })
                },
                K = e => {
                    var n, t, i;
                    let {
                        open: r,
                        onOpenChange: o,
                        defaultSkill: p,
                        activeLanguageTab: h,
                        onActiveLanguageTabChange: v,
                        onFilesChange: b
                    } = e, [y, w] = (0, a.useState)(!1), [k, N] = (0, a.useState)(null), [S, A] = (0, a.useState)(!1), [V, T] = (0, a.useState)([]), [R, L] = (0, a.useState)(!1), [O, D] = (0, a.useState)(!0), z = (0, a.useRef)([]), F = (0, a.useRef)(null), W = (0, a.useRef)(null), J = (0, a.useRef)(null);
                    (0, a.useEffect)(() => {
                        z.current = V
                    }, [V]), (0, a.useEffect)(() => {
                        b(V.map(e => e.file))
                    }, [V, b]), (0, a.useEffect)(() => {
                        r && p && N(p)
                    }, [r, p]), (0, a.useEffect)(() => {
                        D(!k)
                    }, [k]);
                    let {
                        data: K,
                        isLoading: H
                    } = (0, s.Eo)(100, 0, "created_at", !0), {
                        mutateAsync: Q
                    } = (0, s.pD)(), {
                        mutate: $,
                        isPending: Y
                    } = (0, s.iz)(), {
                        data: ee,
                        isLoading: en
                    } = (0, c.cd)(null !== (n = null == k ? void 0 : k.id) && void 0 !== n ? n : ""), et = (0, g.cI)({
                        resolver: (0, d.F)(G),
                        defaultValues: {
                            agentId: "",
                            prompt: "",
                            model: null,
                            detail: "auto",
                            files: []
                        }
                    });
                    (0, a.useEffect)(() => {
                        z.current = V
                    }, [V]);
                    let el = (0, a.useCallback)((e, n) => {
                            T(t => t.map(t => t.id === e ? {
                                ...t,
                                ...n
                            } : t))
                        }, []),
                        ea = (0, a.useCallback)(e => {
                            el(e.id, {
                                status: "uploading",
                                progress: 0,
                                fileId: null,
                                previewUrl: null
                            }), Q({
                                file: e.file,
                                onProgress: n => el(e.id, {
                                    progress: n
                                })
                            }).then(n => {
                                el(e.id, {
                                    fileId: null == n ? void 0 : n.id,
                                    previewUrl: null == n ? void 0 : n.public_url,
                                    progress: 100,
                                    status: "success"
                                }), x.Am.success("Uploaded ".concat(e.file.name))
                            }).catch(() => {
                                el(e.id, {
                                    status: "error"
                                }), x.Am.error("Failed to upload ".concat(e.file.name, ". Please try again."))
                            })
                        }, [Q, el]),
                        ei = (0, a.useCallback)(e => {
                            var n;
                            if (!e.length) return;
                            let t = e.filter(j.BM);
                            t.length && x.Am.error(1 === t.length ? "".concat(t[0].name, " is a zip file and cannot be uploaded.") : "".concat(t.length, " zip files were skipped. Zip files cannot be uploaded."));
                            let l = e.filter(e => !(0, j.BM)(e));
                            if (!l.length) return;
                            let a = new Set(z.current.map(e => e.key)),
                                i = l.filter(e => !a.has(U(e))).map(e => ({
                                    id: Z(),
                                    key: U(e),
                                    file: e,
                                    fileId: null,
                                    previewUrl: null,
                                    progress: 0,
                                    status: "uploading"
                                }));
                            i.length && (T(e => [...e, ...i]), et.setValue("files", [...null !== (n = et.getValues("files")) && void 0 !== n ? n : [], ...i.map(e => e.file)], {
                                shouldValidate: !0
                            }), et.trigger("files"), i.forEach(ea))
                        }, [et, ea]),
                        er = (0, a.useCallback)(e => {
                            e.preventDefault(), e.stopPropagation()
                        }, []),
                        es = (0, a.useCallback)(e => {
                            er(e), w(!0)
                        }, [er]),
                        eo = (0, a.useCallback)(e => {
                            er(e), w(!0)
                        }, [er]),
                        ec = (0, a.useCallback)(e => {
                            er(e), e.currentTarget.contains(e.relatedTarget) || w(!1)
                        }, [er]),
                        ed = (0, a.useCallback)(async e => {
                            if (e.isFile) return new Promise(n => {
                                e.file(e => n([e]), () => n([]))
                            });
                            if (e.isDirectory) {
                                let n = e.createReader();
                                return new Promise(e => {
                                    let t = [],
                                        l = () => {
                                            n.readEntries(async n => {
                                                if (!n.length) {
                                                    e(t);
                                                    return
                                                }
                                                let a = await Promise.all(n.map(ed));
                                                t.push(...a.flat()), l()
                                            }, () => e(t))
                                        };
                                    l()
                                })
                            }
                            return []
                        }, []),
                        eu = (0, a.useCallback)(async e => {
                            er(e), w(!1);
                            let n = [];
                            if (e.dataTransfer.items) {
                                let t = Array.from(e.dataTransfer.items).map(e => e.webkitGetAsEntry()).filter(Boolean),
                                    l = await Promise.all(t.map(ed));
                                n.push(...l.flat())
                            } else n.push(...Array.from(e.dataTransfer.files || []));
                            n.length > 0 && ei(n)
                        }, [ei, er, ed]),
                        em = (0, a.useCallback)(e => {
                            let n = e.target.files ? Array.from(e.target.files) : [];
                            n.length > 0 && ei(n), F.current && (F.current.value = "")
                        }, [ei]),
                        ef = (0, a.useCallback)(e => {
                            var n;
                            let t = z.current.find(n => n.id === e);
                            if (!t) return;
                            T(n => n.filter(n => n.id !== e));
                            let l = (null !== (n = et.getValues("files")) && void 0 !== n ? n : []).filter(e => U(e) !== t.key);
                            et.setValue("files", l, {
                                shouldValidate: !0
                            }), et.trigger("files")
                        }, [et]),
                        ep = (0, a.useCallback)(e => ea(e), [ea]),
                        eh = (0, a.useCallback)(e => {
                            var n;
                            if ("loading" === e || "no-agents" === e || !e) return;
                            let t = null == K ? void 0 : null === (n = K.data) || void 0 === n ? void 0 : n.find(n => n.id === e);
                            t && "prompt" in t && t.prompt && et.setValue("prompt", t.prompt)
                        }, [K, et]);
                    (0, a.useEffect)(() => {
                        !r && (T([]), w(!1), N(null), D(!0), et.reset(), F.current && (F.current.value = ""), W.current && (W.current.value = ""))
                    }, [r, et]);
                    let eg = async e => {
                        var n, t, l;
                        let a, i, r, s;
                        let c = V.filter(e => "success" === e.status && e.fileId);
                        if (V.some(e => "uploading" === e.status)) return x.Am.error("Please wait for all files to finish uploading.");
                        if (V.some(e => "error" === e.status)) return x.Am.error("Please resolve any upload errors before executing the agent.");
                        if (!c.length) return x.Am.error("Upload at least one file before executing the agent.");
                        if (k) {
                            if (en) return x.Am.error("Loading skill details, please wait and try again.");
                            if (!(null == ee ? void 0 : ee.schema)) return x.Am.error("This skill doesn't have a JSON schema.", {
                                description: "Add a schema to this skill before using it to run agent executions."
                            })
                        }
                        if (k) r = k.name, s = k.version;
                        else {
                            let n = e.agentId ? null == K ? void 0 : null === (t = K.data) || void 0 === t ? void 0 : t.find(n => n.id === e.agentId) : void 0;
                            a = null == n ? void 0 : n.name, i = null == n ? void 0 : n.version
                        }
                        $({
                            fileIds: c.map(e => e.fileId),
                            agentName: a,
                            agentVersion: i,
                            skillName: r,
                            skillVersion: s,
                            prompt: (null === (n = e.prompt) || void 0 === n ? void 0 : n.trim()) || void 0,
                            model: (0, E.g$)(null !== (l = e.model) && void 0 !== l ? l : null),
                            detail: e.detail,
                            mode: O ? "agent" : "program"
                        }, {
                            onSuccess: () => {
                                x.Am.success("Agent execution started successfully!"), o(!1)
                            },
                            onError: e => x.Am.error((null == e ? void 0 : e.message) || "Failed to execute agent")
                        })
                    }, ex = V.some(e => "uploading" === e.status);
                    return (0, l.jsxs)("div", {
                        ref: J,
                        children: [(0, l.jsx)(P.l0, {
                            ...et,
                            children: (0, l.jsxs)("form", {
                                onSubmit: et.handleSubmit(eg),
                                className: "w-full min-w-0 max-w-full space-y-2",
                                onDragEnter: es,
                                onDragLeave: ec,
                                onDragOver: eo,
                                onDrop: eu,
                                children: [(0, l.jsx)(P.Wi, {
                                    control: et.control,
                                    name: "files",
                                    render: () => (0, l.jsxs)(P.xJ, {
                                        children: [(0, l.jsx)(P.NI, {
                                            children: (0, l.jsx)("div", {
                                                className: "relative min-h-[140px] cursor-pointer rounded-xl border border-dashed p-4 transition-all duration-200 ".concat(y ? "border-primary/50 bg-primary/5" : "border-[#E4E4E4] hover:bg-muted/20"),
                                                onDrop: eu,
                                                onDragEnter: es,
                                                onDragOver: eo,
                                                onDragLeave: ec,
                                                onClick: () => {
                                                    var e;
                                                    return null === (e = F.current) || void 0 === e ? void 0 : e.click()
                                                },
                                                children: (0, l.jsx)("div", {
                                                    className: "flex min-h-[124px] flex-col gap-3",
                                                    children: V.length > 0 ? (0, l.jsx)("div", {
                                                        className: "flex max-h-[220px] flex-col gap-2 overflow-y-auto pr-1",
                                                        children: V.map(e => (0, l.jsx)(q.T, {
                                                            fileName: e.file.name,
                                                            fileType: (0, q.o)(e.file.name),
                                                            status: "success" === e.status ? "ready" : e.status,
                                                            fullWidth: !0,
                                                            onRetry: "error" === e.status ? () => ep(e) : void 0,
                                                            onRemove: () => ef(e.id)
                                                        }, e.id))
                                                    }) : (0, l.jsx)("div", {
                                                        className: "flex min-h-[124px] flex-col items-center justify-center space-y-3 text-center",
                                                        children: (0, l.jsxs)("div", {
                                                            className: "space-y-1",
                                                            children: [(0, l.jsx)("p", {
                                                                className: "text-sm font-medium text-foreground",
                                                                children: "Drop your files here or click to browse"
                                                            }), (0, l.jsx)("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Supports documents, images, videos, and more"
                                                            })]
                                                        })
                                                    })
                                                })
                                            })
                                        }), (0, l.jsx)("input", {
                                            ref: F,
                                            type: "file",
                                            multiple: !0,
                                            onChange: em,
                                            className: "hidden",
                                            accept: "*/*"
                                        }), (0, l.jsx)("input", {
                                            ref: W,
                                            type: "file",
                                            multiple: !0,
                                            onChange: em,
                                            className: "hidden",
                                            accept: "*/*",
                                            webkitdirectory: ""
                                        }), (0, l.jsx)(P.zG, {})]
                                    })
                                }), (0, l.jsx)(B, {
                                    skillName: null !== (t = null == k ? void 0 : k.name) && void 0 !== t ? t : "<skill-name>",
                                    skillVersion: null !== (i = null == k ? void 0 : k.version) && void 0 !== i ? i : "latest",
                                    open: r,
                                    onlyAgentTab: !0,
                                    agentFileIds: V.filter(e => "success" === e.status && null != e.fileId).map(e => e.fileId),
                                    activeLanguageTab: h,
                                    onActiveLanguageTabChange: v
                                }), (0, l.jsx)("hr", {
                                    className: "border-border"
                                }), (0, l.jsxs)(_.zF, {
                                    open: R,
                                    onOpenChange: L,
                                    className: "space-y-2",
                                    children: [(0, l.jsx)(_.wy, {
                                        asChild: !0,
                                        children: (0, l.jsxs)(C.z, {
                                            variant: "ghost",
                                            size: "sm",
                                            className: "flex w-full justify-between px-0 py-1 hover:bg-transparent",
                                            children: [(0, l.jsx)("span", {
                                                className: "text-sm",
                                                children: "Advanced Options"
                                            }), R ? (0, l.jsx)(f.Z, {
                                                className: "size-4"
                                            }) : (0, l.jsx)(u.Z, {
                                                className: "size-4"
                                            })]
                                        })
                                    }), (0, l.jsxs)(_.Fw, {
                                        className: "space-y-4",
                                        children: [(0, l.jsx)(P.Wi, {
                                            control: et.control,
                                            name: "agentId",
                                            render: e => {
                                                var n, t, a;
                                                let {
                                                    field: i
                                                } = e;
                                                return (0, l.jsxs)(P.xJ, {
                                                    children: [(0, l.jsx)(P.lX, {
                                                        children: "Skill or Agent"
                                                    }), (0, l.jsx)(P.NI, {
                                                        children: (0, l.jsx)(X, {
                                                            selectedSkillName: null !== (n = null == k ? void 0 : k.name) && void 0 !== n ? n : null,
                                                            selectedSkillVersion: null !== (t = null == k ? void 0 : k.version) && void 0 !== t ? t : null,
                                                            selectedAgentId: null !== (a = i.value) && void 0 !== a ? a : "",
                                                            onSkillBrowse: () => A(!0),
                                                            onAgentSelect: e => {
                                                                N(null), i.onChange(e), eh(e)
                                                            },
                                                            agentsData: K,
                                                            isLoadingAgents: H
                                                        })
                                                    }), (0, l.jsx)(P.zG, {})]
                                                })
                                            }
                                        }), (0, l.jsx)(P.Wi, {
                                            control: et.control,
                                            name: "model",
                                            render: e => {
                                                var n;
                                                let {
                                                    field: t
                                                } = e;
                                                return (0, l.jsxs)(P.xJ, {
                                                    children: [(0, l.jsx)(P.lX, {
                                                        children: "Model"
                                                    }), (0, l.jsx)(P.NI, {
                                                        children: (0, l.jsx)(E.ho, {
                                                            variant: "field",
                                                            includeOrion1: !0,
                                                            selectedModel: null !== (n = t.value) && void 0 !== n ? n : null,
                                                            onModelChange: t.onChange
                                                        })
                                                    }), (0, l.jsx)(P.zG, {})]
                                                })
                                            }
                                        }), (0, l.jsxs)("label", {
                                            htmlFor: "run-skill-agent-mode-toggle",
                                            className: "flex w-full cursor-pointer items-center gap-3 rounded-lg py-1",
                                            children: [(0, l.jsx)("span", {
                                                className: "text-sm font-medium text-foreground",
                                                children: "Agent mode"
                                            }), (0, l.jsx)("span", {
                                                className: "flex-1",
                                                "aria-hidden": "true"
                                            }), (0, l.jsx)(I.r, {
                                                id: "run-skill-agent-mode-toggle",
                                                checked: O,
                                                onCheckedChange: D
                                            })]
                                        })]
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "h-2"
                                }), (0, l.jsx)(C.z, {
                                    type: "submit",
                                    className: "w-full",
                                    disabled: Y || ex,
                                    children: Y ? (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)(m.Z, {
                                            className: "mr-2 size-4 animate-spin"
                                        }), "Executing..."]
                                    }) : ex ? (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)(m.Z, {
                                            className: "mr-2 size-4 animate-spin"
                                        }), "Uploading..."]
                                    }) : "Execute"
                                })]
                            })
                        }), (0, l.jsx)(M.i, {
                            open: S,
                            onOpenChange: A,
                            onSkillSelect: e => {
                                N(e), et.setValue("agentId", ""), et.setValue("prompt", "")
                            }
                        })]
                    })
                },
                H = e => ({
                    image: "image",
                    video: "video",
                    audio: "audio",
                    file: "document",
                    url: "document"
                })[e],
                Q = e => {
                    let n = e.type.toLowerCase();
                    return n.startsWith("image/") ? "image" : n.startsWith("video/") ? "video" : n.startsWith("audio/") ? "audio" : "file"
                },
                $ = (e, n) => {
                    if (!e) return [];
                    switch (n) {
                        case "audio":
                            return e.filter(e => e.domain.startsWith("audio."));
                        case "video":
                            return e.filter(e => e.domain.startsWith("video."));
                        case "image":
                        case "file":
                            return e.filter(e => !e.domain.startsWith("audio.") && !e.domain.startsWith("video."));
                        default:
                            return e
                    }
                },
                Y = b.Ry({
                    model: b.Z_().nullable(),
                    domain: b.Z_(),
                    config: b.Ry({
                        detail: b.Km(["auto", "hi", "lo"]),
                        confidence: b.O7(),
                        grounding: b.O7()
                    }),
                    metadata: b.Ry({
                        allow_training: b.O7()
                    }),
                    input_method: b.Km(["file", "url"]).default("file"),
                    url: b.Z_().optional(),
                    skill_name: b.Z_().optional()
                }).superRefine((e, n) => {
                    if ("url" === e.input_method) {
                        if (e.url && "" !== e.url.trim()) try {
                            new URL(e.url)
                        } catch (e) {
                            n.addIssue({
                                code: y.NL.custom,
                                message: "Please enter a valid URL",
                                path: ["url"]
                            })
                        } else n.addIssue({
                            code: y.NL.custom,
                            message: "Please enter a valid URL",
                            path: ["url"]
                        });
                        e.domain || e.skill_name || n.addIssue({
                            code: y.NL.custom,
                            message: "Please select a skill or domain",
                            path: ["domain"]
                        })
                    }
                }),
                ee = e => {
                    let {
                        domain: n,
                        selectedSkillName: t,
                        selectedSkillVersion: i,
                        onDomainChange: r,
                        onSkillBrowse: s,
                        filteredModels: o,
                        currentType: c
                    } = e, [d, m] = (0, a.useState)(!1), f = o.reduce((e, n) => {
                        var t;
                        let l = n.domain.indexOf("."),
                            a = -1 !== l ? n.domain.slice(0, l) : n.domain;
                        return (null !== (t = e[a]) && void 0 !== t ? t : e[a] = []).push(n), e
                    }, {}), p = t || n || null;
                    return (0, l.jsxs)(T.h_, {
                        open: d,
                        onOpenChange: m,
                        children: [(0, l.jsx)(T.$F, {
                            asChild: !0,
                            children: (0, l.jsxs)(C.z, {
                                type: "button",
                                variant: "outline",
                                className: (0, j.cn)("w-full justify-between font-normal", !p && "text-muted-foreground"),
                                children: [(0, l.jsx)("span", {
                                    className: "min-w-0 flex-1 truncate text-left",
                                    children: null != p ? p : "Select a Skill or Domain"
                                }), t && i && (0, l.jsx)(F.O, {
                                    version: i,
                                    truncate: !0,
                                    readOnly: !0,
                                    className: "ml-2 shrink-0"
                                }), (0, l.jsx)(u.Z, {
                                    className: "ml-2 size-4 shrink-0 opacity-50"
                                })]
                            })
                        }), (0, l.jsxs)(T.AW, {
                            className: "w-[var(--radix-dropdown-menu-trigger-width)]",
                            children: [(0, l.jsx)(T.Xi, {
                                onClick: () => {
                                    m(!1), s()
                                },
                                children: "Skills"
                            }), (0, l.jsxs)(T.Ph, {
                                children: [(0, l.jsxs)(T.kt, {
                                    disabled: !c || 0 === o.length,
                                    className: (0, j.cn)(!c && "cursor-not-allowed opacity-50"),
                                    children: [(0, l.jsx)("span", {
                                        className: "flex-1",
                                        children: "Domains"
                                    }), !c && (0, l.jsx)("span", {
                                        className: "ml-2 text-[11px] text-muted-foreground",
                                        children: "Select a file or URL first"
                                    })]
                                }), (0, l.jsx)(T.TG, {
                                    className: "max-h-80 w-64 overflow-y-auto",
                                    children: c ? 0 === o.length ? (0, l.jsx)(T.Ju, {
                                        className: "py-4 text-center font-normal text-muted-foreground",
                                        children: "No matching domains"
                                    }) : Object.entries(f).map((e, n) => {
                                        let [t, i] = e;
                                        return (0, l.jsxs)(a.Fragment, {
                                            children: [n > 0 && (0, l.jsx)(T.VD, {
                                                className: "mx-3"
                                            }), (0, l.jsx)(T.Ju, {
                                                className: "px-3 py-2 text-[11px] font-semibold capitalize tracking-wide text-gray-500",
                                                children: t
                                            }), i.map(e => {
                                                let n = e.domain.indexOf("."),
                                                    t = -1 !== n ? e.domain.slice(n + 1).replace(/-/g, " ").replace(/\b\w/g, e => e.toUpperCase()) : e.domain;
                                                return (0, l.jsx)(T.Xi, {
                                                    onClick: () => r(e.domain),
                                                    children: t
                                                }, e.domain)
                                            })]
                                        }, t)
                                    }) : (0, l.jsx)(T.Ju, {
                                        className: "py-4 text-center font-normal text-muted-foreground",
                                        children: "Select a file or URL first"
                                    })
                                })]
                            })]
                        })]
                    })
                },
                en = e => {
                    var n, t, s, p;
                    let {
                        open: h,
                        onOpenChange: b,
                        defaultSkill: y,
                        activeLanguageTab: w,
                        onActiveLanguageTabChange: N,
                        agentFiles: A
                    } = e, V = (0, i.useRouter)(), {
                        data: T,
                        isLoading: I
                    } = (0, o.Wp)(), {
                        mutateAsync: O,
                        isPending: D
                    } = (0, o.Vb)(), {
                        mutateAsync: E,
                        isPending: z
                    } = (0, o.ju)(), {
                        mutateAsync: F,
                        isPending: W
                    } = (0, o.$J)(), {
                        mutateAsync: J,
                        isPending: G
                    } = (0, o.C5)(), {
                        mutateAsync: X,
                        isPending: K
                    } = (0, o.Rr)(), {
                        canPerformActions: en,
                        needsPurchase: et,
                        isLoading: el
                    } = (0, k.L)(), ea = (0, g.cI)({
                        resolver: (0, d.F)(Y),
                        defaultValues: {
                            model: null,
                            domain: "",
                            config: {
                                detail: "auto",
                                confidence: !1,
                                grounding: !1
                            },
                            metadata: {
                                allow_training: !1
                            },
                            input_method: "file",
                            url: ""
                        }
                    });
                    ea.watch("input_method");
                    let ei = ea.watch("config.detail"),
                        [er, es] = (0, a.useState)([]),
                        [eo, ec] = (0, a.useState)(null),
                        [ed, eu] = (0, a.useState)(null),
                        [em, ef] = (0, a.useState)(!1),
                        [ep, eh] = (0, a.useState)(!1),
                        [eg, ex] = (0, a.useState)(!1),
                        [ev, eb] = (0, a.useState)(!1),
                        [ey, ej] = (0, a.useState)([]),
                        ew = (0, a.useRef)([]),
                        ek = (0, a.useRef)(null),
                        eN = (0, a.useRef)(null),
                        eC = (0, a.useRef)(null),
                        {
                            data: eS,
                            isLoading: e_
                        } = (0, c.cd)(null !== (t = null == ed ? void 0 : ed.id) && void 0 !== t ? t : "");
                    (0, a.useEffect)(() => {
                        ew.current = ey
                    }, [ey]);
                    let eA = a.useMemo(() => T ? [...new Set(T.map(e => e.model))] : [], [T]);
                    (0, a.useEffect)(() => {
                        h && eA.length && !ea.getValues("model") && ea.setValue("model", eA[0])
                    }, [h, eA, ea]);
                    let eV = (0, a.useCallback)((e, n) => {
                            ej(t => t.map(t => t.id === e ? {
                                ...t,
                                ...n
                            } : t))
                        }, []),
                        eT = (0, a.useCallback)(e => {
                            if ("image" === e.fileType) {
                                let n = new FileReader;
                                n.onloadend = () => {
                                    eV(e.id, {
                                        base64: n.result,
                                        status: "ready"
                                    })
                                }, n.onerror = () => eV(e.id, {
                                    status: "error"
                                }), n.readAsDataURL(e.file)
                            } else {
                                let n = new FormData;
                                n.append("file", e.file), (0, r.cT)(n).then(n => eV(e.id, {
                                    fileId: n.id,
                                    status: "ready"
                                })).catch(() => {
                                    eV(e.id, {
                                        status: "error"
                                    }), x.Am.error("Failed to upload ".concat(e.file.name))
                                })
                            }
                        }, [eV]),
                        eP = (0, a.useCallback)(e => {
                            if (!e.length) return;
                            let n = e.filter(j.BM);
                            n.length && x.Am.error(1 === n.length ? "".concat(n[0].name, " is a zip file and cannot be uploaded.") : "".concat(n.length, " zip files were skipped. Zip files cannot be uploaded."));
                            let t = e.filter(e => !(0, j.BM)(e));
                            if (!t.length) return;
                            let l = new Set(ew.current.map(e => e.key)),
                                a = t.filter(e => !l.has(U(e))).map(e => ({
                                    id: Z(),
                                    key: U(e),
                                    file: e,
                                    fileType: Q(e),
                                    base64: null,
                                    fileId: null,
                                    status: "uploading"
                                }));
                            if (a.length) {
                                if (ej(e => [...e, ...a]), 0 === ew.current.length && a.length > 0) {
                                    let e = a[0].fileType;
                                    ec(e);
                                    let n = $(T, e);
                                    es(n), 1 === n.length && ea.setValue("domain", n[0].domain)
                                }
                                a.forEach(eT)
                            }
                        }, [T, ea, eT]);
                    (0, a.useEffect)(() => {
                        A.length > 0 && eP(A)
                    }, [A, eP]);
                    let eR = (0, a.useCallback)(e => {
                            ej(n => {
                                let t = n.filter(n => n.id !== e);
                                return 0 === t.length && (ec(null), es([])), t
                            })
                        }, []),
                        eL = (0, a.useCallback)(e => {
                            eV(e.id, {
                                status: "uploading",
                                fileId: null,
                                base64: null
                            }), eT({
                                ...e,
                                status: "uploading",
                                fileId: null,
                                base64: null
                            })
                        }, [eV, eT]),
                        eI = (0, a.useCallback)(async e => {
                            if (e.isFile) return new Promise(n => {
                                e.file(e => n([e]), () => n([]))
                            });
                            if (e.isDirectory) {
                                let n = e.createReader();
                                return new Promise(e => {
                                    let t = [],
                                        l = () => {
                                            n.readEntries(async n => {
                                                if (!n.length) {
                                                    e(t);
                                                    return
                                                }
                                                let a = await Promise.all(n.map(eI));
                                                t.push(...a.flat()), l()
                                            }, () => e(t))
                                        };
                                    l()
                                })
                            }
                            return []
                        }, []),
                        eO = (0, a.useCallback)(() => {
                            var e;
                            ea.reset({
                                model: null !== (e = eA[0]) && void 0 !== e ? e : "",
                                domain: "",
                                config: {
                                    detail: "auto",
                                    confidence: !1,
                                    grounding: !1
                                },
                                metadata: {
                                    allow_training: !0
                                },
                                input_method: "file",
                                url: "",
                                skill_name: void 0
                            }), ec(null), es([]), eu(null), eh(!1), ej([]), ek.current && (ek.current.value = ""), eN.current && (eN.current.value = "")
                        }, [ea, eA]);
                    (0, a.useEffect)(() => {
                        h || (eO(), ex(!1))
                    }, [h, eO]), (0, a.useEffect)(() => {
                        h && y && (eu(y), ea.setValue("skill_name", y.name))
                    }, [h, y, ea]);
                    let eD = e => {
                            var n;
                            let t = (null === (n = e.split(".").pop()) || void 0 === n ? void 0 : n.toLowerCase()) || "";
                            return ["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg", "tiff", "tif", "heic", "heif", "raw", "avif"].includes(t) ? "image" : ["mp4", "webm", "mov", "avi", "mkv", "flv", "wmv", "m4v", "3gp", "mpeg", "mpg", "ts", "mts"].includes(t) ? "video" : ["mp3", "wav", "ogg", "aac", "m4a", "flac", "wma", "aiff", "alac", "opus", "mid", "midi"].includes(t) ? "audio" : "file"
                        },
                        eE = e => {
                            if (!e) {
                                es([]), ec(null);
                                return
                            }
                            let n = eD(e);
                            ec(n);
                            let t = $(T, n);
                            es(t), 1 === t.length && ea.setValue("domain", t[0].domain)
                        },
                        ez = (0, a.useCallback)(e => {
                            e.preventDefault(), e.stopPropagation(), eh(!0)
                        }, []),
                        eM = (0, a.useCallback)(e => {
                            e.preventDefault(), e.stopPropagation(), e.currentTarget.contains(e.relatedTarget) || eh(!1)
                        }, []),
                        eF = (0, a.useCallback)(e => {
                            e.preventDefault(), e.stopPropagation()
                        }, []),
                        eq = (0, a.useCallback)(async e => {
                            e.preventDefault(), e.stopPropagation(), eh(!1), ea.setValue("input_method", "file", {
                                shouldDirty: !0,
                                shouldValidate: !0
                            });
                            let n = [];
                            if (e.dataTransfer.items) {
                                let t = Array.from(e.dataTransfer.items).map(e => e.webkitGetAsEntry()).filter(Boolean),
                                    l = await Promise.all(t.map(eI));
                                n.push(...l.flat())
                            } else n.push(...Array.from(e.dataTransfer.files));
                            n.length > 0 && eP(n)
                        }, [eP, eI, ea]),
                        eU = e => {
                            console.error(e), x.Am.error("Error submitting request", {
                                description: e.message || "An error occurred while submitting your request."
                            })
                        },
                        eZ = async e => {
                            var n, t;
                            let {
                                model: l,
                                domain: a,
                                config: i,
                                metadata: r,
                                input_method: s,
                                url: o
                            } = e, c = null !== (n = null != l ? l : eA[0]) && void 0 !== n ? n : "";
                            if ("file" === s) {
                                if (0 === ey.length) {
                                    x.Am.error("Please select at least one file");
                                    return
                                }
                                if (ey.some(e => "uploading" === e.status)) {
                                    x.Am.error("Please wait for all files to finish uploading");
                                    return
                                }
                                if (ey.some(e => "error" === e.status)) {
                                    x.Am.error("Please resolve any upload errors before submitting");
                                    return
                                }
                                if (!a && !ed) {
                                    ea.setError("domain", {
                                        message: "Please select a skill or domain"
                                    });
                                    return
                                }
                            }
                            if (ed) {
                                if (e_) {
                                    x.Am.error("Loading skill details, please wait and try again.");
                                    return
                                }
                                if (!(null == eS ? void 0 : eS.schema)) {
                                    x.Am.error("This skill doesn't have a JSON schema.", {
                                        description: "Add a schema to this skill before using it to run requests."
                                    });
                                    return
                                }
                            }
                            let d = {
                                model: c,
                                ...ed ? {} : {
                                    domain: a
                                },
                                config: i,
                                metadata: r
                            };
                            b(!1), ea.reset({
                                model: null !== (t = eA[0]) && void 0 !== t ? t : "",
                                domain: "",
                                config: {
                                    detail: "auto",
                                    confidence: !1,
                                    grounding: !1
                                },
                                metadata: {
                                    allow_training: !0
                                },
                                input_method: "file",
                                url: ""
                            }), ec(null), es([]), eu(null), ej([]);
                            let u = async e => {
                                let n = {
                                    ...d,
                                    id: (0, v.Z)(),
                                    batch: !0
                                };
                                if (ed) {
                                    await X({
                                        request: {
                                            type: H(e.fileType),
                                            model: c,
                                            skills: [{
                                                skill_name: ed.name,
                                                skill_version: ed.skill_version || "latest"
                                            }],
                                            skill_id: ed.id,
                                            config: i,
                                            metadata: r,
                                            ..."image" === e.fileType ? {
                                                image: e.base64
                                            } : {
                                                file_id: e.fileId,
                                                id: (0, v.Z)(),
                                                batch: !0
                                            }
                                        }
                                    });
                                    return
                                }
                                switch (e.fileType) {
                                    case "image":
                                        await O({
                                            request: {
                                                ...d,
                                                image: e.base64
                                            }
                                        });
                                        break;
                                    case "file":
                                        await E({
                                            request: {
                                                ...n,
                                                file_id: e.fileId
                                            }
                                        });
                                        break;
                                    case "video":
                                        await F({
                                            request: {
                                                ...n,
                                                file_id: e.fileId
                                            }
                                        });
                                        break;
                                    case "audio":
                                        await J({
                                            request: {
                                                ...n,
                                                file_id: e.fileId
                                            }
                                        })
                                }
                            };
                            if ("url" === s && o) {
                                let e = null != eo ? eo : eD(o);
                                try {
                                    if (eb(!0), ed) await X({
                                        request: {
                                            type: H(e),
                                            model: c,
                                            skills: [{
                                                skill_name: ed.name,
                                                skill_version: ed.skill_version || "latest"
                                            }],
                                            skill_id: ed.id,
                                            config: i,
                                            metadata: r,
                                            ..."image" === e ? {
                                                urls: [o]
                                            } : {
                                                url: o
                                            }
                                        }
                                    });
                                    else switch (e) {
                                        case "image":
                                            await O({
                                                request: {
                                                    ...d,
                                                    urls: [o]
                                                }
                                            });
                                            break;
                                        case "file":
                                            await E({
                                                request: {
                                                    ...d,
                                                    id: (0, v.Z)(),
                                                    batch: !0,
                                                    url: o
                                                }
                                            });
                                            break;
                                        case "video":
                                            await F({
                                                request: {
                                                    ...d,
                                                    id: (0, v.Z)(),
                                                    batch: !0,
                                                    url: o
                                                }
                                            });
                                            break;
                                        case "audio":
                                            await J({
                                                request: {
                                                    ...d,
                                                    id: (0, v.Z)(),
                                                    batch: !0,
                                                    url: o
                                                }
                                            })
                                    }
                                    x.Am.success("Request submitted", {
                                        description: "Your request has been submitted successfully."
                                    })
                                } catch (e) {
                                    eU(e)
                                } finally {
                                    eb(!1)
                                }
                                return
                            }
                            try {
                                if (eb(!0), 1 === ey.length) await u(ey[0]), x.Am.success("Request submitted", {
                                    description: "Your request has been submitted successfully."
                                });
                                else {
                                    let e = await Promise.allSettled(ey.map(e => u(e))),
                                        n = e.filter(e => "fulfilled" === e.status).length,
                                        t = e.filter(e => "rejected" === e.status).length;
                                    if (n > 0 && x.Am.success("".concat(n, " request").concat(1 !== n ? "s" : "", " submitted")), t > 0) {
                                        x.Am.error("".concat(t, " request").concat(1 !== t ? "s" : "", " failed to submit"));
                                        return
                                    }
                                }
                            } catch (e) {
                                eU(e)
                            } finally {
                                eb(!1)
                            }
                        };
                    return en || el ? (0, l.jsxs)("div", {
                        ref: eC,
                        onDragEnter: ez,
                        onDragLeave: eM,
                        onDragOver: eF,
                        onDrop: eq,
                        children: [(0, l.jsx)(P.l0, {
                            ...ea,
                            children: (0, l.jsxs)("form", {
                                onSubmit: ea.handleSubmit(eZ),
                                className: "min-w-0 space-y-2 overflow-hidden",
                                children: [(0, l.jsxs)("div", {
                                    className: "min-w-0 space-y-1.5",
                                    children: [(0, l.jsx)("div", {
                                        className: (0, j.cn)("relative min-h-[140px] w-full cursor-pointer overflow-hidden rounded-xl border border-dashed p-4 transition-all duration-200", ep ? "border-primary/50 bg-primary/5" : "border-[#E4E4E4] hover:bg-muted/20"),
                                        onDragEnter: ez,
                                        onDragLeave: eM,
                                        onDragOver: eF,
                                        onDrop: eq,
                                        onClick: () => {
                                            var e;
                                            return null === (e = ek.current) || void 0 === e ? void 0 : e.click()
                                        },
                                        children: (0, l.jsx)("div", {
                                            className: "flex min-h-[124px] min-w-0 flex-col gap-3",
                                            children: ey.length > 0 ? (0, l.jsx)("div", {
                                                className: "flex max-h-[220px] min-w-0 flex-col gap-2 overflow-y-auto overflow-x-hidden pr-1",
                                                children: ey.map(e => (0, l.jsx)(q.T, {
                                                    fileName: e.file.name,
                                                    fileType: (0, q.o)(e.file.name),
                                                    status: e.status,
                                                    fullWidth: !0,
                                                    onRetry: "error" === e.status ? () => eL(e) : void 0,
                                                    onRemove: () => eR(e.id)
                                                }, e.id))
                                            }) : (0, l.jsx)("div", {
                                                className: "flex min-h-[124px] flex-col items-center justify-center space-y-3 text-center",
                                                children: (0, l.jsxs)("div", {
                                                    className: "space-y-1",
                                                    children: [(0, l.jsx)("p", {
                                                        className: "text-sm font-medium text-foreground",
                                                        children: "Drop your files here or click to browse"
                                                    }), (0, l.jsx)("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Supports documents, images, videos, and more"
                                                    })]
                                                })
                                            })
                                        })
                                    }), (0, l.jsx)("input", {
                                        ref: ek,
                                        type: "file",
                                        multiple: !0,
                                        className: "hidden",
                                        accept: "image/*,video/*,audio/*,application/pdf",
                                        onChange: e => {
                                            let n = e.target.files ? Array.from(e.target.files) : [];
                                            n.length > 0 && eP(n), ek.current && (ek.current.value = "")
                                        }
                                    }), (0, l.jsx)("input", {
                                        ref: eN,
                                        type: "file",
                                        multiple: !0,
                                        className: "hidden",
                                        accept: "image/*,video/*,audio/*,application/pdf",
                                        webkitdirectory: "",
                                        onChange: e => {
                                            let n = e.target.files ? Array.from(e.target.files) : [];
                                            n.length > 0 && eP(n), eN.current && (eN.current.value = "")
                                        }
                                    })]
                                }), (0, l.jsx)(B, {
                                    skillName: null !== (s = null == ed ? void 0 : ed.name) && void 0 !== s ? s : "<skill-name>",
                                    skillVersion: null !== (p = null == ed ? void 0 : ed.version) && void 0 !== p ? p : "latest",
                                    open: h,
                                    excludeContentTabs: ["Completions", "Agent"],
                                    contentTabOrder: ["Document", "Video", "Image", "Audio"],
                                    defaultContentTab: "Document",
                                    fileName: null === (n = ey.find(e => "ready" === e.status)) || void 0 === n ? void 0 : n.file.name,
                                    activeLanguageTab: w,
                                    onActiveLanguageTabChange: N
                                }), (0, l.jsx)("hr", {
                                    className: "border-border"
                                }), (0, l.jsxs)(_.zF, {
                                    open: eg,
                                    onOpenChange: ex,
                                    className: "space-y-2",
                                    children: [(0, l.jsx)(_.wy, {
                                        asChild: !0,
                                        children: (0, l.jsxs)(C.z, {
                                            variant: "ghost",
                                            size: "sm",
                                            className: "flex w-full justify-between px-0 py-1 hover:bg-transparent",
                                            children: [(0, l.jsx)("span", {
                                                className: "text-sm",
                                                children: "Advanced Options"
                                            }), eg ? (0, l.jsx)(f.Z, {
                                                className: "size-4"
                                            }) : (0, l.jsx)(u.Z, {
                                                className: "size-4"
                                            })]
                                        })
                                    }), (0, l.jsxs)(_.Fw, {
                                        className: "space-y-4 px-px",
                                        children: [(0, l.jsx)(P.Wi, {
                                            control: ea.control,
                                            name: "domain",
                                            render: e => {
                                                var n, t;
                                                let {
                                                    field: a
                                                } = e;
                                                return (0, l.jsxs)(P.xJ, {
                                                    children: [(0, l.jsx)(P.lX, {
                                                        children: "Skill or Domain"
                                                    }), (0, l.jsx)(P.NI, {
                                                        children: (0, l.jsx)(ee, {
                                                            domain: a.value,
                                                            selectedSkillName: null !== (n = null == ed ? void 0 : ed.name) && void 0 !== n ? n : null,
                                                            selectedSkillVersion: null !== (t = null == ed ? void 0 : ed.version) && void 0 !== t ? t : null,
                                                            onDomainChange: e => {
                                                                a.onChange(e), eu(null), ea.setValue("skill_name", void 0)
                                                            },
                                                            onSkillBrowse: () => ef(!0),
                                                            filteredModels: er,
                                                            currentType: eo
                                                        })
                                                    }), (0, l.jsx)(P.zG, {})]
                                                })
                                            }
                                        }), (0, l.jsx)(P.Wi, {
                                            control: ea.control,
                                            name: "url",
                                            render: e => {
                                                let {
                                                    field: n
                                                } = e;
                                                return (0, l.jsxs)(P.xJ, {
                                                    children: [(0, l.jsx)(P.lX, {
                                                        children: "URL (optional)"
                                                    }), (0, l.jsx)(P.NI, {
                                                        children: (0, l.jsx)(R.I, {
                                                            ...n,
                                                            type: "url",
                                                            placeholder: "https://example.com/image.jpg",
                                                            onChange: e => {
                                                                n.onChange(e), eE(e.target.value)
                                                            }
                                                        })
                                                    }), (0, l.jsx)(P.zG, {})]
                                                })
                                            }
                                        }), (0, l.jsxs)("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [(0, l.jsx)(P.Wi, {
                                                control: ea.control,
                                                name: "model",
                                                render: e => {
                                                    var n;
                                                    let {
                                                        field: t
                                                    } = e;
                                                    return (0, l.jsxs)(P.xJ, {
                                                        children: [(0, l.jsx)(P.lX, {
                                                            children: "Model"
                                                        }), (0, l.jsxs)(L.Ph, {
                                                            onValueChange: t.onChange,
                                                            value: null !== (n = t.value) && void 0 !== n ? n : "",
                                                            children: [(0, l.jsx)(P.NI, {
                                                                children: (0, l.jsx)(L.i4, {
                                                                    className: "h-9 bg-background text-sm",
                                                                    hideIcon: !0,
                                                                    children: (0, l.jsx)(L.ki, {
                                                                        placeholder: "Select a model"
                                                                    })
                                                                })
                                                            }), (0, l.jsx)(L.Bw, {
                                                                container: eC.current,
                                                                hideScrollButtons: !0,
                                                                children: eA.map(e => (0, l.jsx)(L.Ql, {
                                                                    value: e,
                                                                    children: e
                                                                }, e))
                                                            })]
                                                        }), (0, l.jsx)(P.zG, {})]
                                                    })
                                                }
                                            }), (0, l.jsx)(P.Wi, {
                                                control: ea.control,
                                                name: "config.detail",
                                                render: e => {
                                                    let {
                                                        field: n
                                                    } = e;
                                                    return (0, l.jsxs)(P.xJ, {
                                                        children: [(0, l.jsx)(P.lX, {
                                                            children: "Detail"
                                                        }), (0, l.jsxs)(L.Ph, {
                                                            onValueChange: e => {
                                                                n.onChange(e), "lo" === e && (ea.setValue("config.confidence", !1, {
                                                                    shouldValidate: !0
                                                                }), ea.setValue("config.grounding", !1, {
                                                                    shouldValidate: !0
                                                                }))
                                                            },
                                                            defaultValue: n.value,
                                                            children: [(0, l.jsx)(P.NI, {
                                                                children: (0, l.jsx)(L.i4, {
                                                                    className: "h-9 bg-background text-sm",
                                                                    hideIcon: !0,
                                                                    children: (0, l.jsx)(L.ki, {
                                                                        placeholder: "Select detail"
                                                                    })
                                                                })
                                                            }), (0, l.jsxs)(L.Bw, {
                                                                container: eC.current,
                                                                hideScrollButtons: !0,
                                                                children: [(0, l.jsx)(L.Ql, {
                                                                    value: "auto",
                                                                    children: "Auto"
                                                                }), (0, l.jsx)(L.Ql, {
                                                                    value: "hi",
                                                                    children: "High"
                                                                }), (0, l.jsx)(L.Ql, {
                                                                    value: "lo",
                                                                    children: "Low"
                                                                })]
                                                            })]
                                                        }), (0, l.jsx)(P.zG, {})]
                                                    })
                                                }
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [(0, l.jsx)(P.Wi, {
                                                control: ea.control,
                                                name: "config.confidence",
                                                render: e => {
                                                    let {
                                                        field: n
                                                    } = e;
                                                    return (0, l.jsx)(P.xJ, {
                                                        children: (0, l.jsxs)("div", {
                                                            className: (0, j.cn)("flex flex-row items-center space-x-2 rounded-md p-2", "lo" === ei ? "cursor-not-allowed opacity-50" : "hover:bg-accent/50"),
                                                            children: [(0, l.jsx)(P.lX, {
                                                                htmlFor: "req-confidence-checkbox",
                                                                className: (0, j.cn)("flex-1", "lo" !== ei && "cursor-pointer"),
                                                                children: "Confidence"
                                                            }), (0, l.jsx)(P.NI, {
                                                                children: (0, l.jsx)(S.X, {
                                                                    id: "req-confidence-checkbox",
                                                                    checked: n.value,
                                                                    disabled: "lo" === ei,
                                                                    onCheckedChange: e => {
                                                                        e && ea.setValue("config.detail", "hi", {
                                                                            shouldValidate: !0
                                                                        }), n.onChange(e), ea.setValue("config.confidence", e, {
                                                                            shouldValidate: !0
                                                                        })
                                                                    }
                                                                })
                                                            })]
                                                        })
                                                    })
                                                }
                                            }), (0, l.jsx)(P.Wi, {
                                                control: ea.control,
                                                name: "config.grounding",
                                                render: e => {
                                                    let {
                                                        field: n
                                                    } = e;
                                                    return (0, l.jsx)(P.xJ, {
                                                        children: (0, l.jsxs)("div", {
                                                            className: (0, j.cn)("flex flex-row items-center space-x-2 rounded-md p-2", "lo" === ei ? "cursor-not-allowed opacity-50" : "hover:bg-accent/50"),
                                                            children: [(0, l.jsx)(P.lX, {
                                                                htmlFor: "req-grounding-checkbox",
                                                                className: (0, j.cn)("flex-1", "lo" !== ei && "cursor-pointer"),
                                                                children: "Grounding"
                                                            }), (0, l.jsx)(P.NI, {
                                                                children: (0, l.jsx)(S.X, {
                                                                    id: "req-grounding-checkbox",
                                                                    checked: n.value,
                                                                    disabled: "lo" === ei,
                                                                    onCheckedChange: e => {
                                                                        e && ea.setValue("config.detail", "hi", {
                                                                            shouldValidate: !0
                                                                        }), n.onChange(e), ea.setValue("config.grounding", e, {
                                                                            shouldValidate: !0
                                                                        })
                                                                    }
                                                                })
                                                            })]
                                                        })
                                                    })
                                                }
                                            })]
                                        })]
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "h-2"
                                }), (0, l.jsx)(C.z, {
                                    type: "submit",
                                    className: "w-full",
                                    disabled: ev || ey.some(e => "uploading" === e.status),
                                    children: ev ? (0, l.jsxs)("span", {
                                        className: "flex items-center",
                                        children: [(0, l.jsx)(m.Z, {
                                            className: "mr-2 size-4 animate-spin"
                                        }), "Submitting..."]
                                    }) : ey.length > 1 ? "Submit individually" : "Submit"
                                })]
                            })
                        }), (0, l.jsx)(M.i, {
                            open: em,
                            onOpenChange: ef,
                            onSkillSelect: e => {
                                eu(e), ea.setValue("domain", ""), ea.setValue("skill_name", e.name)
                            }
                        })]
                    }) : (0, l.jsxs)("div", {
                        className: "p-4 text-center",
                        children: [(0, l.jsx)("p", {
                            className: "mb-2 font-medium text-destructive",
                            children: "Billing Required"
                        }), (0, l.jsx)("p", {
                            className: "mb-4 text-muted-foreground",
                            children: "You need to set up billing or have available balance to create new requests."
                        }), (0, l.jsx)(C.z, {
                            onClick: () => V.push("/dashboard/settings/billing"),
                            children: "Go to Billing"
                        })]
                    })
                };

            function et(e) {
                let {
                    open: n,
                    onOpenChange: t,
                    defaultTab: i,
                    defaultSkill: r
                } = e, [s, o] = (0, a.useState)("python"), [c, d] = (0, a.useState)([]), {
                    isMobile: u,
                    mounted: m
                } = (0, N.sT)(), f = (0, l.jsxs)(O.mQ, {
                    defaultValue: null != i ? i : "agent",
                    children: [(0, l.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, l.jsx)("h2", {
                            className: "text-lg font-semibold",
                            children: "Run skill"
                        }), (0, l.jsxs)(O.dr, {
                            className: "h-7 p-0.5",
                            children: [(0, l.jsxs)(O.SP, {
                                value: "agent",
                                className: "h-6 gap-1.5 px-2.5 text-xs",
                                children: [(0, l.jsx)(p.Z, {
                                    className: "size-3"
                                }), "Agent"]
                            }), (0, l.jsxs)(O.SP, {
                                value: "request",
                                className: "h-6 gap-1.5 px-2.5 text-xs",
                                children: [(0, l.jsx)(h.Z, {
                                    className: "size-3"
                                }), "Request"]
                            })]
                        })]
                    }), (0, l.jsx)(O.nU, {
                        value: "agent",
                        forceMount: !0,
                        className: "data-[state=inactive]:hidden",
                        children: (0, l.jsx)(K, {
                            open: n,
                            onOpenChange: t,
                            defaultSkill: r,
                            activeLanguageTab: s,
                            onActiveLanguageTabChange: o,
                            onFilesChange: d
                        })
                    }), (0, l.jsx)(O.nU, {
                        value: "request",
                        forceMount: !0,
                        className: "data-[state=inactive]:hidden",
                        children: (0, l.jsx)(en, {
                            open: n,
                            onOpenChange: t,
                            defaultSkill: r,
                            activeLanguageTab: s,
                            onActiveLanguageTabChange: o,
                            agentFiles: c
                        })
                    })]
                });
                return m && u ? (0, l.jsx)(V.dy, {
                    open: n,
                    onOpenChange: t,
                    children: (0, l.jsx)(V.sc, {
                        className: "flex max-h-[90dvh] flex-col gap-0 overflow-hidden p-0",
                        children: (0, l.jsx)("div", {
                            className: "flex-1 overflow-y-auto p-4",
                            "data-vaul-no-drag": !0,
                            children: f
                        })
                    })
                }) : (0, l.jsx)(A.Vq, {
                    open: n,
                    onOpenChange: t,
                    children: (0, l.jsx)(A.cZ, {
                        className: "max-h-[90vh] gap-0 overflow-hidden p-0 sm:max-w-2xl",
                        hideCloseButton: !0,
                        children: (0, l.jsx)("div", {
                            className: "max-h-[inherit] overflow-y-auto p-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                            children: f
                        })
                    })
                })
            }
        },
        58759: function(e, n, t) {
            t.d(n, {
                L: function() {
                    return a
                }
            });
            var l = t(64982);

            function a() {
                var e, n;
                let {
                    data: t,
                    isLoading: a
                } = (0, l.$r)();
                if (a || !t) return {
                    canPerformActions: !1,
                    needsPurchase: !1,
                    hasCreditsOnly: !1,
                    hasSubscription: !1,
                    organization: null,
                    isLoading: !0
                };
                let i = !0 === t.is_billable,
                    r = "dollars" === t.billing_mode ? (null !== (e = t.dollar_balance) && void 0 !== e ? e : 0) > 0 : (null !== (n = t.credit_balance) && void 0 !== n ? n : 0) > 0;
                return {
                    canPerformActions: i || r,
                    needsPurchase: !i && !r,
                    hasCreditsOnly: !i && r,
                    hasSubscription: i,
                    organization: t,
                    isLoading: a
                }
            }
        },
        32342: function(e, n, t) {
            t.d(n, {
                LQ: function() {
                    return a
                },
                sT: function() {
                    return i
                },
                ul: function() {
                    return r
                }
            });
            var l = t(2265);
            let a = {
                isMobile: 768,
                isNarrow: 1024,
                isShort: 700
            };

            function i() {
                let {
                    width: e,
                    height: n
                } = function() {
                    let [e, n] = (0, l.useState)(() => ({
                        width: window.innerWidth,
                        height: window.innerHeight
                    }));
                    return (0, l.useEffect)(() => {
                        let e = () => {
                            n({
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        };
                        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                    }, []), e
                }(), [t, i] = (0, l.useState)(!1);
                return (0, l.useEffect)(() => {
                    i(!0)
                }, []), {
                    mounted: t,
                    width: e,
                    height: n,
                    isMobile: e < a.isMobile,
                    isNarrow: e < a.isNarrow,
                    isShort: n < a.isShort
                }
            }
            let r = {
                hideMobile: "lg:hidden",
                hideDesktop: "hidden lg:block",
                showMobileOnly: "block lg:hidden",
                showDesktopOnly: "hidden lg:block"
            }
        },
        73781: function(e, n, t) {
            t.d(n, {
                Fr: function() {
                    return p
                },
                Li: function() {
                    return d
                },
                Lr: function() {
                    return x
                },
                j8: function() {
                    return u
                },
                q: function() {
                    return m
                },
                x9: function() {
                    return g
                },
                x_: function() {
                    return f
                }
            });
            var l = t(31125),
                a = t(1304),
                i = t(83464),
                r = t(20061),
                s = t(16302);

            function o() {
                var e;
                let n = null === (e = localStorage.getItem("access_token")) || void 0 === e ? void 0 : e.trim();
                if (!n) throw Error("Please sign in again to upload files");
                return n
            }

            function c() {
                return (0, r.r6)() || "https://agent.vlm.run/v1"
            }
            let d = async e => {
                try {
                    await (0, a.r)();
                    let n = o(),
                        t = c(),
                        l = await fetch("".concat(t, "/files/").concat(e, "?generate_public_url=true"), {
                            headers: {
                                Authorization: "Bearer ".concat(n),
                                "Content-Type": "application/json"
                            }
                        });
                    if (!l.ok) return null;
                    let i = await l.json();
                    if (!(null == i ? void 0 : i.id)) return null;
                    return {
                        id: i.id,
                        filename: i.filename || "",
                        public_url: i.public_url || ""
                    }
                } catch (e) {
                    return null
                }
            }, u = async function(e, n, t, a) {
                let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    s = arguments.length > 6 ? arguments[6] : void 0,
                    {
                        data: o
                    } = await l.Z.get("/api/v1/agents", {
                        params: {
                            limit: e,
                            offset: n,
                            order_by: t,
                            descending: a,
                            grouped: i,
                            hide_inactive: r,
                            name: s
                        }
                    });
                return o
            }, m = async e => {
                let {
                    data: n
                } = await l.Z.get("/api/v1/agents/".concat(e));
                return n
            }, f = async e => {
                var n, t, l, a, i, r, o;
                console.log("[create-agent] received", {
                    name: e.name,
                    hasPrompt: !!e.prompt,
                    chatHistoryKeys: e.chatHistoryContext ? Object.keys(e.chatHistoryContext) : [],
                    chatMessageCount: Array.isArray(null === (n = e.chatHistoryContext) || void 0 === n ? void 0 : n.messages) ? e.chatHistoryContext.messages.length : 0,
                    sampleMessage: null === (l = e.chatHistoryContext) || void 0 === l ? void 0 : null === (t = l.messages) || void 0 === t ? void 0 : t[0]
                });
                let c = (() => {
                        if (!e.chatHistoryContext) return null;
                        let n = e.chatHistoryContext.messages;
                        if (Array.isArray(n)) return n.map(e => {
                            var n;
                            let t = null !== (n = null == e ? void 0 : e.role) && void 0 !== n ? n : "user",
                                l = "string" == typeof(null == e ? void 0 : e.content) ? e.content : (() => {
                                    try {
                                        return JSON.stringify(null == e ? void 0 : e.content)
                                    } catch (e) {
                                        return ""
                                    }
                                })();
                            return "".concat(t, ": ").concat(l)
                        }).join("\n");
                        try {
                            return JSON.stringify(e.chatHistoryContext)
                        } catch (e) {
                            return null
                        }
                    })(),
                    d = (null === (a = e.prompt) || void 0 === a ? void 0 : a.trim()) || c || "Chat history unavailable.";
                console.log("[create-agent] prompt generation", {
                    providedPrompt: e.prompt,
                    derivedPromptPreview: null == c ? void 0 : null === (i = c.slice) || void 0 === i ? void 0 : i.call(c, 0, 500),
                    promptUsedPreview: d.slice(0, 500)
                });
                let u = {
                    prompt: d
                };
                console.log("[create-agent] final payload", {
                    name: e.name,
                    configPromptPreview: null === (o = u.prompt) || void 0 === o ? void 0 : null === (r = o.slice) || void 0 === r ? void 0 : r.call(o, 0, 500)
                });
                let m = {
                    name: e.name,
                    config: u
                };
                console.log("[create-agent] sending payload to agent API", m);
                let f = await (0, s.K)().agent.create(m);
                return console.log("[create-agent] response", f), {
                    ...f,
                    __promptUsed: d
                }
            }, p = async e => {
                let {
                    fileIds: n,
                    agentName: t,
                    agentVersion: l,
                    skillName: a,
                    skillVersion: r,
                    prompt: s,
                    model: o,
                    detail: c,
                    grounding: d,
                    mode: u
                } = e, m = Array.from(new Set((n || []).filter(Boolean)));
                if (!m.length) throw Error("At least one file is required to execute the agent.");
                let f = {};
                m.forEach((e, n) => {
                    f["file_".concat(n)] = {
                        type: "input_file",
                        file_id: e
                    }
                });
                let p = null == s ? void 0 : s.trim();
                if (a) {
                    let e = localStorage.getItem("access_token"),
                        n = {
                            skills: [{
                                skill_name: a,
                                skill_version: r || "latest"
                            }]
                        };
                    p && (n.prompt = p), c && (n.detail = c), d && (n.grounding = !0), u && (n.mode = u);
                    let t = {
                        batch: !0,
                        inputs: f,
                        config: n
                    };
                    return o && (t.model = o), (await i.default.post("".concat("https://agent.vlm.run/v1", "/agent/execute"), t, {
                        headers: {
                            Authorization: "Bearer ".concat(e),
                            "Content-Type": "application/json"
                        }
                    })).data
                }
                let h = l ? "".concat(null == t ? void 0 : t.trim(), ":").concat(l) : null == t ? void 0 : t.trim();
                if (!h && !p) throw Error("Agent name or prompt is required to execute.");
                let g = localStorage.getItem("access_token"),
                    x = {};
                p && (x.prompt = p), c && (x.detail = c), d && (x.grounding = !0), u && (x.mode = u);
                let v = {
                    batch: !0,
                    inputs: f
                };
                return h && (v.name = h), o && (v.model = o), Object.keys(x).length > 0 && (v.config = x), (await i.default.post("".concat("https://agent.vlm.run/v1", "/agent/execute"), v, {
                    headers: {
                        Authorization: "Bearer ".concat(g),
                        "Content-Type": "application/json"
                    }
                })).data
            }, h = async (e, n) => {
                await (0, a.r)();
                let t = o(),
                    l = c();
                return new Promise((a, i) => {
                    let r = new XMLHttpRequest;
                    r.upload.addEventListener("progress", e => {
                        e.lengthComputable && n && n(Math.round(e.loaded / e.total * 100))
                    }), r.addEventListener("load", () => {
                        if (r.status >= 200 && r.status < 300) try {
                            let e = JSON.parse(r.responseText);
                            a({
                                id: e.id,
                                filename: e.filename,
                                public_url: e.public_url || ""
                            })
                        } catch (e) {
                            i(Error("Failed to parse upload response"))
                        } else {
                            let e = r.statusText || "HTTP ".concat(r.status);
                            try {
                                let n = JSON.parse(r.responseText);
                                "string" == typeof(null == n ? void 0 : n.detail) && n.detail.trim() && (e = n.detail.trim())
                            } catch (e) {}
                            i(Error(e))
                        }
                    }), r.addEventListener("error", () => {
                        i(Error("Upload failed"))
                    });
                    let s = new FormData;
                    s.append("file", e), s.append("purpose", "assistants"), r.open("POST", "".concat(l, "/files")), r.setRequestHeader("Authorization", "Bearer ".concat(t)), r.send(s)
                })
            }, g = async (e, n) => await h(e, n), x = async e => {
                await l.Z.delete("/api/v1/agents/".concat(e))
            }
        },
        45767: function(e, n, t) {
            t.d(n, {
                As: function() {
                    return m
                },
                GI: function() {
                    return u
                },
                Lo: function() {
                    return d
                },
                S$: function() {
                    return s
                },
                XM: function() {
                    return r
                },
                Xj: function() {
                    return o
                },
                bO: function() {
                    return c
                },
                jO: function() {
                    return i
                }
            });
            var l = t(31125);
            let a = e => {
                    let n = {};
                    return e && Object.entries(e).forEach(e => {
                        let [t, l] = e;
                        null != l && "" !== l && (n[t] = l)
                    }), n
                },
                i = async (e, n, t, i, r) => {
                    let s = {
                            limit: e,
                            offset: n,
                            order_by: t,
                            descending: i,
                            ...a(r)
                        },
                        {
                            data: o
                        } = await l.Z.get("/api/chat-completions/org", {
                            params: s,
                            baseURL: ""
                        });
                    return o
                }, r = async function(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                        {
                            data: t
                        } = await l.Z.get("/api/v1/chat-completions/org/by-session/".concat(e), {
                            params: {
                                limit: n
                            }
                        });
                    return t
                }, s = async e => {
                    let {
                        data: n
                    } = await l.Z.get("/api/v1/chat-completions/org/".concat(e, "/messages"));
                    return n
                }, o = async e => {
                    let {
                        data: n
                    } = await l.Z.get("/api/v1/chat-completions/org/".concat(e, "/logs"));
                    return n
                }, c = async e => {
                    try {
                        let {
                            data: n
                        } = await l.Z.get("/api/v1/chat-completions/org/".concat(e, "/run-cost"));
                        return n
                    } catch (e) {
                        if ("object" == typeof e && null !== e && "response" in e) {
                            let n = e.response;
                            if ((null == n ? void 0 : n.status) === 404) return null
                        }
                        throw e
                    }
                }, d = async e => {
                    let {
                        data: n
                    } = await l.Z.get("/api/v1/metrics/chat-completion-model-distribution", {
                        params: a(e)
                    });
                    return n
                }, u = async e => {
                    let {
                        data: n
                    } = await l.Z.get("/api/v1/metrics/chat-completion-token-breakdown", {
                        params: a(e)
                    });
                    return n
                }, m = async (e, n, t) => {
                    let {
                        data: a
                    } = await l.Z.post("/api/v1/chat-completions/complete", {
                        messages: e,
                        session_id: n
                    }, {
                        signal: t
                    });
                    return a.content
                }
        },
        3311: function(e, n, t) {
            t.d(n, {
                Eo: function() {
                    return o
                },
                W: function() {
                    return f
                },
                X5: function() {
                    return d
                },
                _B: function() {
                    return c
                },
                iz: function() {
                    return u
                },
                pD: function() {
                    return m
                }
            });
            var l = t(49842),
                a = t(92850),
                i = t(29827),
                r = t(21770),
                s = t(73781);
            let o = function(e, n, t, i) {
                    let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                        c = arguments.length > 6 ? arguments[6] : void 0,
                        {
                            isBackendAuthenticated: d
                        } = (0, l.a)();
                    return (0, a.a)({
                        queryKey: ["agents", e, n, t, i, r, o, c],
                        queryFn: () => (0, s.j8)(e, e * n, t, i, r, o, c),
                        enabled: d,
                        staleTime: 3e5,
                        refetchOnWindowFocus: !1,
                        refetchOnMount: !1
                    })
                },
                c = e => {
                    let {
                        isBackendAuthenticated: n
                    } = (0, l.a)();
                    return (0, a.a)({
                        queryKey: ["agent", e],
                        queryFn: () => (0, s.q)(e),
                        enabled: n && !!e,
                        refetchOnWindowFocus: !1,
                        retry: (e, n) => {
                            var t, l;
                            return (null == n ? void 0 : null === (t = n.response) || void 0 === t ? void 0 : t.status) !== 403 && (null == n ? void 0 : null === (l = n.response) || void 0 === l ? void 0 : l.status) !== 404 && e < 3
                        }
                    })
                },
                d = () => {
                    let e = (0, i.NL)();
                    return (0, r.D)({
                        mutationFn: s.x_,
                        onSuccess: () => {
                            e.invalidateQueries({
                                queryKey: ["agents"]
                            }), e.invalidateQueries({
                                queryKey: ["vlm-agents"]
                            })
                        }
                    })
                },
                u = () => {
                    let e = (0, i.NL)();
                    return (0, r.D)({
                        mutationFn: e => {
                            let {
                                fileIds: n,
                                agentName: t,
                                agentVersion: l,
                                skillName: a,
                                skillVersion: i,
                                prompt: r,
                                model: o,
                                detail: c,
                                grounding: d,
                                mode: u
                            } = e;
                            return (0, s.Fr)({
                                fileIds: n,
                                agentName: t,
                                agentVersion: l,
                                skillName: a,
                                skillVersion: i,
                                prompt: r,
                                model: o,
                                detail: c,
                                grounding: d,
                                mode: u
                            })
                        },
                        onSuccess: () => {
                            e.invalidateQueries({
                                queryKey: ["agent-executions"],
                                exact: !1
                            })
                        }
                    })
                },
                m = () => (0, r.D)({
                    mutationFn: e => {
                        let {
                            file: n,
                            onProgress: t
                        } = e;
                        return (0, s.x9)(n, t)
                    }
                }),
                f = () => {
                    let e = (0, i.NL)();
                    return (0, r.D)({
                        mutationFn: e => {
                            let {
                                id: n
                            } = e;
                            return (0, s.Lr)(n)
                        },
                        onSuccess: () => {
                            e.invalidateQueries({
                                queryKey: ["agents"]
                            }), e.invalidateQueries({
                                queryKey: ["agent"]
                            })
                        }
                    })
                }
        },
        30698: function(e, n, t) {
            t.d(n, {
                F7: function() {
                    return c
                },
                JK: function() {
                    return o
                },
                pc: function() {
                    return d
                }
            });
            var l = t(92850),
                a = t(47156),
                i = t(45767);
            let r = ["chat_model_list"],
                s = ["gateway_model_list"],
                o = () => (0, l.a)({
                    queryKey: r,
                    queryFn: a.ET,
                    staleTime: 3e5,
                    refetchOnWindowFocus: !1,
                    refetchOnMount: !1
                }),
                c = e => {
                    var n;
                    return (0, l.a)({
                        queryKey: s,
                        queryFn: a.vZ,
                        enabled: null === (n = null == e ? void 0 : e.enabled) || void 0 === n || n,
                        staleTime: 3e5,
                        refetchOnWindowFocus: !1,
                        refetchOnMount: !1
                    })
                },
                d = (e, n, t, a, r, s) => {
                    var o;
                    return (0, l.a)({
                        queryKey: ["chat-completions", e, n, t, a, r],
                        queryFn: () => (0, i.jO)(e, e * n, t, a, r),
                        enabled: null === (o = null == s ? void 0 : s.enabled) || void 0 === o || o
                    })
                }
        }
    }
]);