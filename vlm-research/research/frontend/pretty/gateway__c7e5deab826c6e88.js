(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 591139, e => {
    "use strict";
    var t = e.i(205112);

    function a(e, s = {}) {
        if ("string" != typeof e || !e.includes("`")) return e;
        let n = "dark" === (s.tone ?? "light") ? "kbd-chip inline-block max-w-full whitespace-nowrap rounded-[6px] border-0 bg-white/10 px-1.5 py-px font-mono text-[0.85em] leading-[1.4] text-primary-light no-underline [box-decoration-break:clone] [-webkit-box-decoration-break:clone]" : "kbd-chip inline-block max-w-full whitespace-nowrap rounded-[6px] border border-primary/10 bg-primary/[0.04] px-1.5 py-px font-mono text-[0.85em] leading-[1.4] text-primary-dark no-underline [box-decoration-break:clone] [-webkit-box-decoration-break:clone]";
        return e.split("`").map((e, a) => a % 2 == 1 ? (0, t.jsx)("kbd", {
            className: n,
            children: (0, t.jsx)("span", {
                className: "whitespace-nowrap",
                children: e
            })
        }, a) : /^\s*,\s*$/.test(e) ? (0, t.jsx)("span", {
            children: ", "
        }, a) : e)
    }
    e.s(["withInlineCode", () => a])
}, 133224, e => {
    "use strict";
    var t = e.i(205112),
        a = e.i(796353),
        s = e.i(588634),
        n = e.i(647163);
    let i = new Set(["False", "None", "True", "and", "as", "assert", "async", "await", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "nonlocal", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"]),
        r = new Set(["if", "then", "else", "elif", "fi", "for", "do", "done", "while", "until", "case", "esac", "function", "in", "select", "time", "return", "exit", "break", "continue", "declare", "local", "export", "readonly", "set", "unset"]),
        l = new Set(["as", "async", "await", "break", "case", "catch", "class", "const", "continue", "default", "delete", "do", "else", "enum", "export", "extends", "false", "finally", "for", "from", "function", "if", "implements", "import", "in", "instanceof", "interface", "let", "new", "null", "of", "return", "satisfies", "static", "super", "switch", "this", "throw", "true", "try", "type", "typeof", "undefined", "var", "void", "while", "yield"]),
        o = new Set(["Promise", "Array", "Record", "Partial", "Readonly", "URL", "Date", "Map", "Set", "string", "number", "boolean", "object", "unknown", "any", "never"]);

    function c(e, t, a) {
        let s = e[e.length - 1];
        s && s.cls === a ? s.text += t : e.push({
            text: t,
            cls: a
        })
    }
    let d = new Set(["(", "[", "{"]),
        m = new Set([")", "]", "}"]),
        u = ["code-bracket-1", "code-bracket-2", "code-bracket-3"];

    function x() {
        let e = 0;
        return t => {
            if (d.has(t)) {
                let t = u[e % 3];
                return e += 1, t
            }
            return m.has(t) ? u[(e = Math.max(0, e - 1)) % 3] : null
        }
    }
    let p = {
        "code-default": "text-[#000000]",
        "code-keyword": "text-[#0000ff]",
        "code-string": "text-[#a31515]",
        "code-comment": "text-[#008000]",
        "code-number": "text-[#098658]",
        "code-function": "text-[#795e26]",
        "code-variable": "text-[#001080]",
        "code-operator": "text-[#000000]",
        "code-bracket-1": "text-[#0431fa]",
        "code-bracket-2": "text-[#319331]",
        "code-bracket-3": "text-[#7b3814]"
    };

    function h({
        code: e,
        language: s = "python",
        hideLineNumbers: n,
        compact: d,
        variant: m
    }) {
        let u = e.trim().split("\n").length,
            h = (0, a.useMemo)(() => "bash" === s ? function(e) {
                let t, a = [],
                    s = x(),
                    n = /#[^\n]*|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\$\{[^}]+\}|\$\w+|--[a-zA-Z][\w-]*|-[a-zA-Z][\w-]*|\d+(?:\.\d+)?|[a-zA-Z_][\w-]*|[\s\S]/g,
                    i = !0,
                    l = !1;
                for (; null !== (t = n.exec(e));) {
                    let e, n = t[0],
                        o = s(n);
                    o ? e = o : n.startsWith("#") ? e = "code-comment" : '"' === n[0] || "'" === n[0] ? e = "code-string" : n.startsWith("$") ? e = "code-variable" : r.has(n) ? (e = "code-keyword", i = !1) : /^[a-zA-Z_][\w-]*$/.test(n) ? i ? (e = "code-function", i = !1) : e = "code-default" : e = /^\d/.test(n) ? "code-number" : "code-default", "\\" === n ? l = !0 : "\n" === n ? l ? l = !1 : i = !0 : ";" === n || "|" === n || "&" === n ? (i = !0, l = !1) : " " !== n && "	" !== n && (l = !1), c(a, n, e)
                }
                return a
            }(e) : "typescript" === s ? function(e) {
                let t, a = [],
                    s = x(),
                    n = /\/\/[^\n]*|\/\*[\s\S]*?\*\/|`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\d+(?:\.\d+)?|[a-zA-Z_$][\w$]*|[\s\S]/g;
                for (; null !== (t = n.exec(e));) {
                    let e, n = t[0],
                        i = s(n);
                    e = i || (n.startsWith("//") || n.startsWith("/*") ? "code-comment" : '"' === n[0] || "'" === n[0] || "`" === n[0] ? "code-string" : /^\d/.test(n) ? "code-number" : l.has(n) ? "code-keyword" : o.has(n) ? "code-function" : "code-default"), c(a, n, e)
                }
                return a
            }(e) : "json" === s ? function(e) {
                let t, a = [],
                    s = x(),
                    n = /"(?:[^"\\]|\\.)*"|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null|[\s\S]/g;
                for (; null !== (t = n.exec(e));) {
                    let i, r = t[0],
                        l = s(r);
                    if (l) i = l;
                    else if ('"' === r[0]) {
                        let t = e.slice(n.lastIndex);
                        i = /^\s*:/.test(t) ? "code-variable" : "code-string"
                    } else i = /^-?\d/.test(r) ? "code-number" : "true" === r || "false" === r || "null" === r ? "code-keyword" : "code-default";
                    c(a, r, i)
                }
                return a
            }(e) : "text" === s ? [{
                text: e,
                cls: "code-default"
            }] : function(e) {
                let t, a = [],
                    s = x(),
                    n = /#[^\n]*|"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\d+(?:\.\d+)?|[a-zA-Z_]\w*|[\s\S]/g;
                for (; null !== (t = n.exec(e));) {
                    let e, n = t[0],
                        r = s(n);
                    e = r || (n.startsWith("#") ? "code-comment" : '"' === n[0] || "'" === n[0] ? "code-string" : /^\d/.test(n) ? "code-number" : i.has(n) ? "code-keyword" : "code-default"), c(a, n, e)
                }
                return a
            }(e), [e, s]),
            f = "light" === m;
        return (0, t.jsxs)(t.Fragment, {
            children: [n ? null : (0, t.jsx)("div", {
                className: `flex min-w-[1.25rem] shrink-0 select-none flex-col items-end pr-2.5 ${f?"opacity-40":"opacity-[0.29]"}`,
                children: Array.from({
                    length: u
                }, (e, a) => (0, t.jsx)("span", {
                    className: `font-mono text-right ${f?"text-muted":"text-white"} ${d?"text-[11px] leading-[16px]":"text-[12px] leading-[20px]"}`,
                    children: a + 1
                }, a))
            }), (0, t.jsx)("pre", {
                className: `min-w-0 flex-1 whitespace-pre font-mono ${d?"text-[12px] leading-[16px]":"text-[13px] leading-[20px]"}`,
                children: (0, t.jsx)("code", {
                    className: "block min-w-max",
                    children: h.map((e, a) => {
                        var s;
                        return (0, t.jsx)("span", {
                            className: (s = e.cls, "dark" === m ? s : p[s] ?? "text-[#1a2b45]"),
                            children: e.text
                        }, a)
                    })
                })
            })]
        })
    }

    function f(e, t, a, s = !1) {
        return (0, n.cn)("flex min-w-0 w-full overflow-x-auto lg:no-scrollbar", e ? t ? s ? "h-full overflow-y-auto px-4 py-3.5" : "min-h-[320px] px-4 py-3.5" : "max-h-[520px] overflow-y-auto px-2.5 py-3" : "px-3 py-4", a && "bg-transparent")
    }

    function b({
        tabs: e,
        activeIndex: i,
        onActiveIndexChange: r,
        hideTabBar: l = !1,
        hideHeader: o = !1,
        hideLineNumbers: c = !1,
        compact: d = !1,
        bare: m = !1,
        variant: u = "light"
    }) {
        let [x, p] = (0, a.useState)(!1), [b, g] = (0, a.useState)(0), v = null != i, y = v ? i : b, w = "light" === u, j = e[y] ?? e[0], N = j?.code ?? "", k = j?.language ?? "python", M = !l && e.length >= 1, C = v && l && e.length > 1, P = async () => {
            try {
                if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(N);
                else {
                    let e = document.createElement("textarea");
                    e.value = N, e.setAttribute("readonly", ""), e.style.position = "fixed", e.style.opacity = "0", document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e)
                }
                p(!0), setTimeout(() => p(!1), 2e3)
            } catch {}
        };
        return m ? (0, t.jsx)("div", {
            className: "min-w-0 overflow-x-auto",
            children: (0, t.jsx)(h, {
                code: N,
                language: k,
                hideLineNumbers: !0,
                compact: !0,
                variant: u
            })
        }) : (0, t.jsxs)("div", {
            className: `group relative w-full min-w-0 overflow-hidden ${w?`border border-black/[0.08] bg-white/60 shadow-[0_8px_30px_rgba(16,42,86,0.04)] backdrop-blur-[4px] ${d?"rounded-[12px]":"rounded-[10px]"}`:`border border-white/[0.08] shadow-[0_20px_40px_-2px_rgba(0,0,0,0.4)] ${d?"rounded-[10px]":"rounded-[6px]"}`}`,
            style: w ? void 0 : {
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(30, 30, 30, 0.78)"
            },
            children: [o ? (0, t.jsxs)("button", {
                type: "button",
                onClick: P,
                className: `absolute right-2.5 top-2.5 z-10 flex cursor-pointer items-center gap-1.5 rounded-md bg-white/95 p-1.5 text-[11px] font-medium transition-all duration-150 ${x?"visible text-success opacity-100":"invisible text-muted opacity-0 hover:text-navy group-hover:visible group-hover:opacity-100 focus-visible:visible focus-visible:opacity-100"}`,
                "aria-label": x ? "Copied" : "Copy code",
                children: [x ? (0, t.jsx)(s.CheckIcon, {}) : (0, t.jsx)(s.CopyIcon, {}), x ? (0, t.jsx)("span", {
                    children: "Copied"
                }) : null]
            }) : null, o ? null : (0, t.jsxs)("div", {
                className: `flex h-8 items-center justify-between border-b px-3 ${w?"border-black/[0.06] bg-white/20":"border-white/[0.04]"}`,
                style: w ? void 0 : {
                    backgroundColor: "rgba(36, 36, 36, 0.65)"
                },
                children: [(0, t.jsx)("div", {
                    className: "flex h-full min-w-0 items-stretch gap-3",
                    children: M ? (0, t.jsx)("div", {
                        className: "flex h-full items-stretch gap-4",
                        children: e.map((a, s) => {
                            let n = y === s,
                                i = e.length > 1;
                            return (0, t.jsxs)("button", {
                                type: "button",
                                onClick: () => {
                                    !v && g(s), r?.(s)
                                },
                                disabled: !i,
                                className: `relative flex h-8 items-center font-mono text-[11px] font-medium uppercase tracking-[0.14em] leading-[144%] transition-all duration-200 ${w?n?"text-muted":"text-muted/40 hover:text-muted/70":n?"text-white/75":"text-white/25 hover:text-white/55"} ${i?"":"cursor-default"}`,
                                children: [n && (0, t.jsx)("span", {
                                    className: `absolute inset-x-0 bottom-0 h-px ${w?"bg-primary/50":"bg-[rgb(77,139,255)]/60"}`
                                }), a.label]
                            }, a.label)
                        })
                    }) : (0, t.jsx)("span", {
                        className: `flex items-center truncate font-mono text-[10px] font-medium uppercase tracking-[0.14em] ${w?"text-muted":"text-white/45"}`,
                        children: j?.label ?? "Code"
                    })
                }), (0, t.jsxs)("button", {
                    type: "button",
                    onClick: P,
                    className: `flex shrink-0 cursor-pointer items-center gap-1.5 rounded p-1.5 text-[11px] font-medium transition-colors duration-200 ${x?"text-success":w?"text-muted/60 hover:text-navy":"text-white/40 hover:text-white/80"}`,
                    "aria-label": x ? "Copied" : "Copy code",
                    children: [x ? (0, t.jsx)(s.CheckIcon, {}) : (0, t.jsx)(s.CopyIcon, {}), x ? (0, t.jsx)("span", {
                        children: "Copied"
                    }) : null]
                })]
            }), C ? (0, t.jsx)("div", {
                className: "relative min-h-[320px]",
                children: e.map((e, a) => (0, t.jsx)("div", {
                    "aria-hidden": a !== y,
                    className: (0, n.cn)("absolute inset-0 transition-opacity duration-200 ease-out motion-reduce:transition-none", a === y ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"),
                    children: (0, t.jsx)("div", {
                        className: f(d, c, w, !0),
                        children: (0, t.jsx)(h, {
                            code: e.code,
                            language: e.language,
                            hideLineNumbers: c,
                            compact: d,
                            variant: u
                        })
                    })
                }, e.label))
            }) : (0, t.jsx)("div", {
                className: f(d, c, w),
                children: (0, t.jsx)(h, {
                    code: N,
                    language: k,
                    hideLineNumbers: c,
                    compact: d,
                    variant: u
                })
            })]
        })
    }
    e.s(["default", () => b])
}, 575003, e => {
    "use strict";
    var t = e.i(205112),
        a = e.i(647163);

    function s({
        children: e,
        className: s
    }) {
        return (0, t.jsx)("div", {
            className: (0, a.cn)("mx-auto max-w-[1168px] px-5 sm:px-8 lg:px-16", s),
            children: e
        })
    }
    e.s(["default", () => s])
}, 193443, e => {
    "use strict";
    var t = e.i(205112),
        a = e.i(796353),
        s = e.i(676525),
        n = e.i(133224),
        i = e.i(588634),
        r = e.i(591139),
        l = e.i(885076);

    function o({
        headline: e,
        description: o,
        tabs: c,
        primaryCta: d,
        secondaryCta: m
    }) {
        let [u, x] = (0, a.useState)(0), p = (0, a.useMemo)(() => {
            let e = [];
            return c.forEach((t, a) => {
                if (!t.group) return;
                let s = e[e.length - 1];
                s && s.name === t.group ? s.indices.push(a) : e.push({
                    name: t.group,
                    indices: [a]
                })
            }), e
        }, [c]), h = p.length > 0, f = (0, a.useMemo)(() => {
            if (!h) return c.map((e, t) => t);
            let e = p.find(e => e.indices.includes(u)) ?? p[0];
            return e?.indices ?? []
        }, [h, p, u, c]), b = p.find(e => e.indices.includes(u))?.name ?? p[0]?.name, g = e => {
            let t = e.indices[0];
            void 0 !== t && x(t)
        }, v = f.map(e => c[e]).filter(e => !!e), y = Math.max(0, f.indexOf(u)), w = e => {
            let a = c[e];
            if (!a) return null;
            let s = e === u;
            return (0, t.jsx)("li", {
                children: (0, t.jsxs)("button", {
                    type: "button",
                    onClick: () => x(e),
                    "aria-current": s ? "true" : void 0,
                    className: `group flex w-full items-center justify-between gap-3 rounded-[10px] px-3 py-2.5 text-left transition-colors duration-200 ${s?"bg-surface text-navy":"text-muted hover:bg-surface/70 hover:text-navy"}`,
                    children: [(0, t.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-3",
                        children: [(0, t.jsx)("span", {
                            className: `font-mono text-[10px] font-medium tracking-[0.12em] ${s?"text-primary-mid":"text-muted/70"}`,
                            children: String(e + 1).padStart(2, "0")
                        }), (0, t.jsx)("span", {
                            className: `truncate text-body-md font-medium ${s?"text-navy":""}`,
                            children: a.label
                        })]
                    }), (0, t.jsx)("span", {
                        className: `shrink-0 transition-transform duration-200 ${s?"translate-x-0.5 text-primary-mid":"text-muted/40 group-hover:text-primary-mid/70"}`,
                        "aria-hidden": "true",
                        children: (0, t.jsx)(i.ArrowRightIcon, {
                            size: 14
                        })
                    })]
                })
            }, a.label)
        };
        return (0, t.jsx)("section", {
            className: "bg-surface",
            children: (0, t.jsx)("div", {
                className: "pt-16 pb-16 lg:pt-24 lg:pb-24",
                children: (0, t.jsx)("div", {
                    className: "w-full min-w-0 max-w-full overflow-x-auto lg:overflow-x-clip",
                    style: l.pageGridRailOuterStyle,
                    children: (0, t.jsx)("div", {
                        className: "lg:px-16",
                        children: (0, t.jsx)("div", {
                            className: "overflow-x-auto overflow-y-hidden border border-border bg-white shadow-[0_1px_0_rgba(16,42,86,0.03)] lg:overflow-hidden",
                            children: (0, t.jsxs)("div", {
                                className: "grid min-w-0 grid-cols-1 items-stretch lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,680px)_minmax(0,1fr)]",
                                children: [(0, t.jsxs)("div", {
                                    className: "relative flex min-w-0 items-center overflow-hidden border-b border-border bg-[#eef4fb] lg:border-b-0 lg:border-r lg:border-border",
                                    children: [(0, t.jsx)("div", {
                                        "aria-hidden": "true",
                                        className: "pointer-events-none absolute inset-0 bg-cover bg-center opacity-50",
                                        style: {
                                            backgroundImage: "url(/images/textures/code-bg.png)"
                                        }
                                    }), (0, t.jsx)("div", {
                                        "aria-hidden": "true",
                                        className: "absolute inset-0 bg-[#eef4fb]/70"
                                    }), (0, t.jsx)("div", {
                                        "aria-hidden": "true",
                                        className: "pointer-events-none absolute -inset-2 opacity-80",
                                        style: {
                                            background: "radial-gradient(60% 50% at 50% 50%, rgba(18,101,255,0.18) 0%, rgba(18,101,255,0) 70%)",
                                            filter: "blur(8px)"
                                        }
                                    }), (0, t.jsxs)("div", {
                                        className: "relative w-full min-w-0 p-5 lg:p-7",
                                        children: [h ? (0, t.jsx)("div", {
                                            role: "tablist",
                                            "aria-label": "Who is calling",
                                            className: "mb-4 flex items-center justify-center gap-1",
                                            children: p.map(e => {
                                                let a = e.name === b;
                                                return (0, t.jsx)("button", {
                                                    type: "button",
                                                    role: "tab",
                                                    "aria-selected": a,
                                                    onClick: () => g(e),
                                                    className: `cursor-pointer rounded-full px-3 py-1 text-label font-medium transition-colors ${a?"bg-white text-primary-mid shadow-sm":"text-muted hover:text-navy"}`,
                                                    children: a ? (0, t.jsx)("span", {
                                                        className: "quickstart-shimmer",
                                                        "data-text": e.name,
                                                        children: e.name
                                                    }) : e.name
                                                }, e.name)
                                            })
                                        }) : null, (0, t.jsx)(n.default, {
                                            tabs: v,
                                            activeIndex: y,
                                            onActiveIndexChange: e => {
                                                let t = f[e];
                                                void 0 !== t && x(t)
                                            }
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "flex min-w-0 flex-col justify-center px-4 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-10",
                                    children: [(0, t.jsx)("h2", {
                                        className: "mb-3 max-w-xl font-serif text-display-md text-navy antialiased",
                                        children: e
                                    }), (0, t.jsx)("p", {
                                        className: "mb-6 max-w-xl text-pretty text-body-md text-muted",
                                        children: (0, r.withInlineCode)(o)
                                    }), (0, t.jsx)("nav", {
                                        "aria-label": "Quickstart examples",
                                        className: "mb-7",
                                        children: h ? (0, t.jsx)("div", {
                                            className: "flex flex-col gap-1",
                                            children: p.map(e => {
                                                let a = e.name === b,
                                                    s = `quickstart-group-${e.name.toLowerCase().replace(/\s+/g,"-")}`;
                                                return (0, t.jsxs)("div", {
                                                    children: [(0, t.jsxs)("button", {
                                                        type: "button",
                                                        "aria-expanded": a,
                                                        "aria-controls": s,
                                                        onClick: () => g(e),
                                                        className: `flex w-full items-center justify-between gap-3 rounded-[10px] px-3 py-2 text-left font-mono text-[12px] font-medium uppercase tracking-[0.16em] transition-colors ${a?"text-primary-mid":"text-primary-light hover:text-primary-mid"}`,
                                                        children: [(0, t.jsx)("span", {
                                                            className: "quickstart-shimmer",
                                                            "data-text": e.name,
                                                            children: e.name
                                                        }), (0, t.jsx)(i.ChevronIcon, {
                                                            open: a
                                                        })]
                                                    }), (0, t.jsx)("ul", {
                                                        id: s,
                                                        className: `flex-col gap-1 pb-1 ${a?"flex":"hidden"}`,
                                                        children: e.indices.map(w)
                                                    })]
                                                }, e.name)
                                            })
                                        }) : (0, t.jsx)("ul", {
                                            className: "flex flex-col gap-1",
                                            children: c.map((e, t) => w(t))
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col gap-3 sm:flex-row",
                                        children: [(0, t.jsxs)(s.default, {
                                            href: d.href,
                                            external: !0,
                                            variant: "primary-mid",
                                            size: "sm",
                                            children: [/(^|\/\/)([\w.-]+\.)?github\.com(\/|$)/.test(d.href) && (0, t.jsx)(i.GitHubIcon, {
                                                size: 14
                                            }), d.label]
                                        }), m ? (0, t.jsx)(s.default, {
                                            href: m.href,
                                            external: !0,
                                            variant: "secondary",
                                            size: "sm",
                                            children: m.label
                                        }) : null]
                                    })]
                                })]
                            })
                        })
                    })
                })
            })
        })
    }
    e.s(["default", () => o])
}, 973936, e => {
    "use strict";
    var t = e.i(205112),
        a = e.i(796353),
        s = e.i(647163),
        n = e.i(74710),
        i = e.i(885076),
        r = e.i(599658);

    function l(e) {
        if (e < 60) return {
            value: String(Math.round(e)),
            unit: "minutes"
        };
        let t = e / 60,
            a = t < 10 ? Number(t.toFixed(1)) : Math.round(t);
        return {
            value: (0, r.formatCompactNumber)(a),
            unit: "hours"
        }
    }

    function o(e, t) {
        return t.framesPerMinute * e.tokensPerFrame + (t.hasSpeech ? e.audioTokensPerMinute : 0)
    }

    function c(e, t, a) {
        let s = a * o(e, t),
            n = a * t.outputTokensPerMinute;
        return (s * e.inputPrice + n * e.outputPrice) / 1e6
    }

    function d(e, t) {
        return "native" === e.intake ? 60 * e.videoTokensPerSecond + (t.hasSpeech ? 60 * e.audioTokensPerSecond : 0) : t.framesPerMinute * e.tokensPerFrame
    }

    function m({
        eyebrow: e,
        headline: m,
        subheadline: u,
        workloads: x,
        durationsHours: p,
        models: h,
        competitors: f,
        perMinuteApis: b,
        embedded: g = !1,
        showControls: v = !0
    }) {
        let y = (0, a.useMemo)(() => [...p].sort((e, t) => e - t), [p]),
            w = (y[0] ?? 1) * 60,
            j = (y[y.length - 1] ?? 1e3) * 60,
            [N, k] = (0, a.useState)(x[0]?.id ?? ""),
            [M, C] = (0, a.useState)(50),
            [P, $] = (0, a.useState)(""),
            S = (0, a.useMemo)(() => x.find(e => e.id === N) ?? x[0], [N, x]),
            I = (0, a.useMemo)(() => P ? h.find(e => e.id === P) ?? null : null, [P, h]),
            D = (0, a.useMemo)(() => {
                let e, t = w * Math.pow(j / w, M / 100);
                return Math.max(w, Math.min(j, (e = t < 120 ? 5 : t < 1200 ? 30 : t < 12e3 ? 300 : 600, Math.round(t / e) * e)))
            }, [w, j, M]),
            {
                vlmInputTokens: _,
                vlmInputTokensMax: T,
                vlmOutputTokens: L,
                vlmCostMin: A,
                vlmCostMax: z
            } = (0, a.useMemo)(() => {
                if (!S) return {
                    vlmInputTokens: 0,
                    vlmInputTokensMax: 0,
                    vlmOutputTokens: 0,
                    vlmCostMin: 0,
                    vlmCostMax: 0
                };
                let e = D * S.outputTokensPerMinute;
                if (I) {
                    let t = D * o(I, S),
                        a = c(I, S, D);
                    return {
                        vlmInputTokens: t,
                        vlmInputTokensMax: t,
                        vlmOutputTokens: e,
                        vlmCostMin: a,
                        vlmCostMax: a
                    }
                }
                let t = h.map(e => c(e, S, D)),
                    a = h.map(e => D * o(e, S));
                return {
                    vlmInputTokens: a.length ? Math.min(...a) : 0,
                    vlmInputTokensMax: a.length ? Math.max(...a) : 0,
                    vlmOutputTokens: e,
                    vlmCostMin: t.length ? Math.min(...t) : 0,
                    vlmCostMax: t.length ? Math.max(...t) : 0
                }
            }, [D, h, I, S]),
            F = f[0] ?? null,
            R = (0, a.useMemo)(() => S && F ? {
                input: D * d(F, S),
                output: D * S.outputTokensPerMinute * 2
            } : null, [D, F, S]),
            E = (0, a.useMemo)(() => S ? f.map(e => {
                let t, a;
                return {
                    competitor: e,
                    cost: (t = D * d(e, S), a = D * S.outputTokensPerMinute * 2, (t * e.inputPrice + a * e.outputPrice) / 1e6 + ("frames" === e.intake && S.hasSpeech ? D * e.transcriptionPricePerMinute : 0))
                }
            }) : [], [f, D, S]),
            O = (0, a.useMemo)(() => {
                let e = new Map;
                for (let {
                        competitor: t,
                        cost: a
                    }
                    of E) {
                    let s = e.get(t.group) ?? {
                        subtitle: t.groupSubtitle,
                        costs: []
                    };
                    s.costs.push(a), e.set(t.group, s)
                }
                return [...e.entries()].map(([e, {
                    subtitle: t,
                    costs: a
                }]) => {
                    let s = Math.min(...a),
                        n = Math.max(...a),
                        i = n > s + Number.EPSILON;
                    return {
                        id: e,
                        label: e,
                        subtitle: t,
                        cost: n,
                        costMin: i ? s : void 0,
                        costMax: i ? n : void 0
                    }
                })
            }, [E]),
            W = (0, a.useMemo)(() => {
                let e;
                if (!S) return [];
                let t = !I && z > A + Number.EPSILON,
                    a = [{
                        id: "vlmrun",
                        label: "VLM Run Gateway",
                        subtitle: I ? (e = I.label.match(/\(([^)]+)\)/), e?.[1] ? e[1] : I.id.includes(":") ? I.id.split(":").pop() ?? I.id : I.label) : "Native Video",
                        cost: z,
                        costMin: t ? A : void 0,
                        costMax: t ? z : void 0,
                        highlight: !0
                    }, ...O];
                return b && a.push({
                    id: "per-minute-apis",
                    label: b.label,
                    subtitle: b.subtitle,
                    cost: D * b.pricePerMinuteMax,
                    costMin: D * b.pricePerMinuteMin,
                    costMax: D * b.pricePerMinuteMax
                }), a
            }, [E, D, b, I, z, A, S, O]);
        if (!S) return null;
        let U = (0, t.jsxs)("div", {
            className: (0, s.cn)("grid min-w-0 gap-6", v && (g ? "md:grid-cols-3" : "lg:grid-cols-3")),
            children: [v ? (0, t.jsxs)("div", {
                className: (0, s.cn)("flex min-w-0 flex-col rounded border border-border bg-white p-4 sm:p-6", g ? "md:col-span-1" : "lg:col-span-1"),
                children: [(0, t.jsxs)("div", {
                    className: "flex flex-col gap-6",
                    children: [(0, t.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [(0, t.jsx)("label", {
                            htmlFor: "video-workload",
                            className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
                            children: "Workload"
                        }), (0, t.jsxs)("div", {
                            className: "relative",
                            children: [(0, t.jsx)("select", {
                                id: "video-workload",
                                value: N,
                                onChange: e => k(e.target.value),
                                className: r.selectClassName,
                                children: x.map(e => (0, t.jsxs)("option", {
                                    value: e.id,
                                    children: [e.label, ": ", e.description]
                                }, e.id))
                            }), (0, t.jsx)(r.SelectChevron, {})]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [(0, t.jsx)("label", {
                            htmlFor: "video-model",
                            className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
                            children: "Model"
                        }), (0, t.jsxs)("div", {
                            className: "relative",
                            children: [(0, t.jsxs)("select", {
                                id: "video-model",
                                value: P,
                                onChange: e => $(e.target.value),
                                className: r.selectClassName,
                                children: [(0, t.jsx)("option", {
                                    value: "",
                                    children: "All models (price band)"
                                }), h.map(e => (0, t.jsx)("option", {
                                    value: e.id,
                                    children: e.label
                                }, e.id))]
                            }), (0, t.jsx)(r.SelectChevron, {})]
                        })]
                    }), (0, t.jsx)(r.RangeSlider, {
                        value: M,
                        onChange: C,
                        ariaLabel: "Footage volume",
                        valueLabel: function(e) {
                            let {
                                value: t,
                                unit: a
                            } = l(e);
                            return `${t} ${"hours"===a?"h":"min"}`
                        }(D),
                        caption: "Footage volume / month"
                    })]
                }), (0, t.jsxs)("div", {
                    className: "mt-auto border-t border-border pt-5",
                    children: [(0, t.jsx)("p", {
                        className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
                        children: "Gateway billed tokens (in / out)"
                    }), (0, t.jsx)("p", {
                        className: "mt-1 font-mono text-body-lg font-medium tabular-nums text-navy",
                        children: T > _ ? `${(0,r.formatCompactNumber)(_)} - ${(0,r.formatCompactNumber)(T)} / ${(0,r.formatCompactNumber)(L)}` : `${(0,r.formatCompactNumber)(_)} / ${(0,r.formatCompactNumber)(L)}`
                    }), F && R ? (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsxs)("p", {
                            className: "mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
                            children: [F.label, " billed tokens (in / out)"]
                        }), (0, t.jsxs)("p", {
                            className: "mt-1 font-mono text-body-lg font-medium tabular-nums text-navy",
                            children: [(0, r.formatCompactNumber)(R.input), " /", " ", (0, r.formatCompactNumber)(R.output)]
                        })]
                    }) : null]
                })]
            }) : null, (0, t.jsxs)("div", {
                className: (0, s.cn)("flex min-w-0 flex-col rounded border border-border bg-white p-4 sm:p-8", v ? g ? "md:col-span-2" : "lg:col-span-2" : "col-span-full"),
                children: [(0, t.jsxs)("div", {
                    className: "grid grid-cols-1 gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-x-10 sm:gap-y-6",
                    children: [(0, t.jsxs)("div", {
                        className: "min-w-0 sm:pr-2",
                        children: [(0, t.jsxs)("p", {
                            className: "inline-flex min-h-[14px] items-center font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
                            children: ["Total cost", (0, t.jsx)(r.InfoHint, {
                                label: "What the gateway bills for this workload",
                                tooltip: "what the gateway bills for this workload"
                            })]
                        }), (0, t.jsx)("p", {
                            className: "mt-2 font-serif text-display-sm tabular-nums text-navy max-sm:text-[28px] sm:whitespace-nowrap",
                            children: z > A + Number.EPSILON ? `${(0,r.formatCurrency)(A)} - ${(0,r.formatCurrency)(z)}` : (0, r.formatCurrency)(z)
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "min-w-0 sm:justify-self-end sm:pl-6 sm:text-right",
                        children: [(0, t.jsxs)("p", {
                            className: "inline-flex min-h-[14px] items-center whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
                            children: ["Video / month", (0, t.jsx)("span", {
                                className: "ml-1 inline-block size-3.5 shrink-0",
                                "aria-hidden": "true"
                            })]
                        }), (0, t.jsxs)("p", {
                            className: "mt-2 font-serif text-display-sm tabular-nums text-navy max-sm:text-[28px] sm:whitespace-nowrap",
                            children: [l(D).value, (0, t.jsx)("span", {
                                className: "ml-2 font-sans text-body-md font-normal text-muted",
                                children: l(D).unit
                            })]
                        })]
                    })]
                }), (0, t.jsxs)("div", {
                    className: "mt-10 border-t border-border pt-8",
                    children: [(0, t.jsxs)("div", {
                        className: "mb-6 flex flex-col items-start gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4",
                        children: [(0, t.jsxs)("h3", {
                            className: "font-serif text-heading-md text-navy",
                            children: ["Cost comparison ", (0, t.jsx)("span", {
                                className: "text-muted",
                                children: "(log scale)"
                            })]
                        }), (0, t.jsx)("span", {
                            className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
                            children: "Cheapest - most expensive"
                        })]
                    }), (0, t.jsx)(r.ComparisonBarChart, {
                        bars: W
                    })]
                })]
            })]
        });
        return g ? (0, t.jsx)("div", {
            className: "w-full",
            children: U
        }) : (0, t.jsx)("section", {
            id: "video-pricing-calculator",
            className: "scroll-mt-24 overflow-x-clip border-y border-border bg-surface",
            children: (0, t.jsx)("div", {
                style: i.pageGridRailOuterStyle,
                children: (0, t.jsxs)("div", {
                    className: i.gatewaySectionPaddingClass,
                    children: [(0, t.jsxs)("div", {
                        className: "mb-12 max-w-2xl",
                        children: [(0, t.jsx)("p", {
                            className: "mb-4 font-mono text-[12px] font-medium uppercase tracking-[2.4px] leading-5 text-primary-light",
                            children: e
                        }), (0, t.jsx)(n.default, {
                            headline: m,
                            subheadline: u,
                            size: "md",
                            subheadlineWrap: "balance"
                        })]
                    }), U]
                })
            })
        })
    }
    e.s(["default", () => m])
}, 74710, 599658, e => {
    "use strict";
    var t = e.i(205112),
        a = e.i(647163);
    let s = {
        sm: "text-display-sm",
        md: "text-display-md",
        lg: "text-display-lg"
    };

    function n({
        headline: e,
        subheadline: n,
        size: i = "lg",
        align: r = "left",
        subheadlineWrap: l = "pretty",
        className: o
    }) {
        return (0, t.jsxs)("div", {
            className: (0, a.cn)("flex flex-col gap-4", "center" === r && "items-center text-center", o),
            children: [(0, t.jsx)("h2", {
                className: (0, a.cn)("text-balance font-serif text-navy", s[i]),
                children: e
            }), n && (0, t.jsx)("p", {
                className: (0, a.cn)("text-body-lg text-muted", "balance" === l ? "text-balance" : "text-pretty"),
                children: n
            })]
        })
    }
    e.s(["default", () => n], 74710);
    var i = e.i(796353);

    function r(e) {
        return new Intl.NumberFormat("en-US", {
            notation: "compact",
            maximumFractionDigits: 1
        }).format(e)
    }

    function l(e) {
        return 1e3 > Math.abs(e) ? new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(e) : new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            notation: "compact",
            minimumFractionDigits: 0,
            maximumFractionDigits: 1
        }).format(e)
    }

    function o({
        value: e,
        min: s = 0,
        max: n = 100,
        onChange: r,
        ariaLabel: l,
        valueLabel: o,
        caption: c
    }) {
        let d = (0, i.useRef)(null),
            [m, u] = (0, i.useState)(!1),
            x = (0, i.useCallback)(e => {
                if (!d.current) return;
                let t = d.current.getBoundingClientRect(),
                    a = (e - t.left) / t.width * 100;
                r(Math.min(100, Math.max(0, a > 99 ? 100 : a < 1 ? 0 : a)))
            }, [r]);
        (0, i.useEffect)(() => {
            if (!m) return;
            let e = e => x(e.clientX),
                t = () => u(!1);
            return window.addEventListener("pointermove", e), window.addEventListener("pointerup", t), () => {
                window.removeEventListener("pointermove", e), window.removeEventListener("pointerup", t)
            }
        }, [m, x]);
        let p = (e - s) / (n - s) * 100;
        return (0, t.jsxs)("div", {
            className: "w-full pt-8",
            children: [(0, t.jsxs)("div", {
                ref: d,
                role: "slider",
                "aria-label": l,
                "aria-valuemin": s,
                "aria-valuemax": n,
                "aria-valuenow": e,
                "aria-valuetext": o,
                tabIndex: 0,
                onPointerDown: e => {
                    x(e.clientX), u(!0)
                },
                onKeyDown: t => {
                    "ArrowLeft" === t.key || "ArrowDown" === t.key ? (t.preventDefault(), r(Math.max(s, e - 1))) : "ArrowRight" === t.key || "ArrowUp" === t.key ? (t.preventDefault(), r(Math.min(n, e + 1))) : "PageDown" === t.key ? (t.preventDefault(), r(Math.max(s, e - 10))) : "PageUp" === t.key ? (t.preventDefault(), r(Math.min(n, e + 10))) : "Home" === t.key ? (t.preventDefault(), r(s)) : "End" === t.key && (t.preventDefault(), r(n))
                },
                className: (0, a.cn)("group relative flex h-5 w-full cursor-pointer items-center touch-none focus:outline-none", m && "cursor-grabbing"),
                children: [(0, t.jsx)("div", {
                    className: "absolute inset-x-0 h-[3px] rounded-full bg-border"
                }), (0, t.jsx)("div", {
                    className: "absolute left-0 h-[3px] rounded-full bg-primary",
                    style: {
                        width: `${p}%`
                    }
                }), (0, t.jsxs)("div", {
                    className: "absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                    style: {
                        left: `${p}%`
                    },
                    onPointerDown: e => {
                        e.stopPropagation(), u(!0)
                    },
                    children: [(0, t.jsx)("div", {
                        "aria-hidden": "true",
                        className: "pointer-events-none absolute bottom-full left-1/2 mb-2.5 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-2.5 py-1 font-mono text-[11px] font-medium tabular-nums text-white shadow-[0_1px_2px_rgba(18,101,255,0.25)]",
                        children: o
                    }), (0, t.jsx)("div", {
                        "aria-hidden": "true",
                        className: (0, a.cn)("size-4 rounded-full bg-primary shadow-[0_1px_3px_rgba(18,101,255,0.35)] transition-shadow", m ? "shadow-[0_0_0_4px_rgba(18,101,255,0.18)]" : "group-focus-visible:shadow-[0_0_0_4px_rgba(18,101,255,0.18)]")
                    })]
                })]
            }), (0, t.jsx)("p", {
                className: "mt-3 text-center text-body-sm text-muted",
                children: c
            })]
        })
    }

    function c() {
        return (0, t.jsx)("svg", {
            className: "pointer-events-none absolute right-3.5 top-1/2 h-3 w-3 -translate-y-1/2 text-muted",
            viewBox: "0 0 12 12",
            fill: "none",
            "aria-hidden": "true",
            children: (0, t.jsx)("path", {
                d: "M2.5 4.5L6 8l3.5-3.5",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        })
    }

    function d({
        label: e,
        tooltip: a,
        href: s
    }) {
        let n = "inline-flex size-3.5 items-center justify-center text-muted transition-colors hover:text-primary-mid focus:outline-none focus-visible:rounded-full focus-visible:ring-2 focus-visible:ring-primary/40",
            i = (0, t.jsxs)("svg", {
                viewBox: "0 0 14 14",
                className: "size-3.5",
                fill: "none",
                "aria-hidden": "true",
                children: [(0, t.jsx)("circle", {
                    cx: "7",
                    cy: "7",
                    r: "6.25",
                    stroke: "currentColor",
                    strokeWidth: "1",
                    opacity: "0.5"
                }), (0, t.jsx)("path", {
                    d: "M5.2 5.35A1.85 1.85 0 0 1 7 3.55c1.05 0 1.85.72 1.85 1.7 0 .7-.34 1.15-1.02 1.55-.6.34-.83.56-.83 1.1v.35",
                    stroke: "currentColor",
                    strokeWidth: "1.15",
                    strokeLinecap: "round"
                }), (0, t.jsx)("circle", {
                    cx: "7",
                    cy: "10.2",
                    r: "0.68",
                    fill: "currentColor"
                })]
            });
        return (0, t.jsxs)("span", {
            className: "group/hint relative ml-1 inline-flex align-middle",
            children: [s ? (0, t.jsx)("a", {
                href: s,
                target: "_blank",
                rel: "noopener noreferrer",
                className: n,
                "aria-label": e,
                children: i
            }) : (0, t.jsx)("button", {
                type: "button",
                className: n,
                "aria-label": e,
                children: i
            }), (0, t.jsx)("span", {
                role: "tooltip",
                className: "pointer-events-none absolute bottom-full left-1/2 z-20 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded bg-navy px-2 py-1 font-mono text-[10px] font-medium text-white opacity-0 shadow-sm transition-opacity group-hover/hint:opacity-100 group-focus-within/hint:opacity-100",
                children: a
            })]
        })
    }
    let m = {
        backgroundColor: "color-mix(in srgb, var(--primary) 8%, white)",
        backgroundImage: "repeating-linear-gradient(45deg, color-mix(in srgb, var(--primary) 26%, transparent) 0 1px, transparent 1px 6px)"
    };

    function u(e) {
        let t = e.flatMap(e => [e.costMin ?? e.cost, e.costMax ?? e.cost]).filter(e => e > 0);
        if (0 === t.length) return {
            lo: 1,
            hi: 10
        };
        let a = Math.pow(10, Math.ceil(Math.log10(Math.max(...t)))),
            s = Math.pow(10, Math.floor(Math.log10(Math.min(...t))));
        return {
            lo: s,
            hi: a > s ? a : 10 * s
        }
    }

    function x(e, t, a) {
        return e <= t ? 0 : e >= a ? 100 : (Math.log10(e) - Math.log10(t)) / (Math.log10(a) - Math.log10(t)) * 100
    }

    function p(e, t) {
        let a = [];
        for (let s = e; s <= 1.0001 * t; s *= 10) a.push(s);
        return a
    }

    function h({
        bars: e
    }) {
        let {
            lo: s,
            hi: n
        } = (0, i.useMemo)(() => u(e), [e]), r = (0, i.useMemo)(() => p(s, n), [s, n]);
        return (0, t.jsxs)("div", {
            className: "flex flex-col gap-5 pt-2",
            children: [e.map(e => {
                let i = null != e.costMin && null != e.costMax,
                    r = i ? x(e.costMin, s, n) : 0,
                    o = x(i ? e.costMax : e.cost, s, n),
                    c = x(e.cost, s, n),
                    d = i ? `${l(e.costMin)} - ${l(e.costMax)}` : l(e.cost);
                return (0, t.jsxs)("div", {
                    className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4",
                    children: [(0, t.jsxs)("div", {
                        className: "flex min-w-0 items-baseline justify-between gap-3 text-left leading-tight sm:block sm:w-56 sm:shrink-0 sm:text-right",
                        children: [(0, t.jsxs)("div", {
                            children: [(0, t.jsx)("div", {
                                className: (0, a.cn)("font-sans text-body-md text-navy", e.highlight && "font-semibold"),
                                children: e.label
                            }), (0, t.jsx)("div", {
                                className: "mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
                                children: e.subtitle
                            })]
                        }), (0, t.jsx)("div", {
                            className: "shrink-0 text-right font-mono text-[12px] font-medium tabular-nums text-navy sm:hidden",
                            children: d
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex min-w-0 flex-1 items-center gap-3",
                        children: [(0, t.jsxs)("div", {
                            className: "relative flex h-6 min-w-0 flex-1 items-center",
                            children: [(0, t.jsx)("div", {
                                className: "absolute inset-x-0 h-px bg-border"
                            }), (0, t.jsx)("div", {
                                className: (0, a.cn)("absolute h-4 -translate-y-1/2 rounded-[2px] transition-all duration-500", e.highlight ? "bg-primary-mid" : "ring-1 ring-inset ring-primary/20"),
                                style: {
                                    top: "50%",
                                    ...i ? {
                                        left: `${r}%`,
                                        width: `max(6px, ${o-r}%)`
                                    } : {
                                        left: `calc(${c}% - 3px)`,
                                        width: "6px"
                                    },
                                    ...e.highlight ? {} : m
                                }
                            })]
                        }), (0, t.jsx)("div", {
                            className: "hidden w-32 shrink-0 text-right font-mono text-body-md font-medium tabular-nums text-navy sm:block",
                            children: d
                        })]
                    })]
                }, e.id)
            }), (0, t.jsxs)("div", {
                className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4",
                children: [(0, t.jsx)("div", {
                    className: "hidden sm:block sm:w-56 sm:shrink-0",
                    "aria-hidden": "true"
                }), (0, t.jsxs)("div", {
                    className: "flex min-w-0 flex-1 items-center gap-3",
                    children: [(0, t.jsx)("div", {
                        className: "relative h-4 min-w-0 flex-1",
                        children: r.map(e => (0, t.jsxs)("span", {
                            className: "absolute top-0 flex -translate-x-1/2 flex-col items-center gap-1",
                            style: {
                                left: `${x(e,s,n)}%`
                            },
                            children: [(0, t.jsx)("span", {
                                className: "h-1.5 w-px bg-border"
                            }), (0, t.jsx)("span", {
                                className: "font-mono text-[10px] tabular-nums text-muted",
                                children: l(e)
                            })]
                        }, e))
                    }), (0, t.jsx)("div", {
                        className: "hidden sm:block sm:w-32",
                        "aria-hidden": "true"
                    })]
                })]
            })]
        })
    }
    e.s(["ComparisonBarChart", () => h, "InfoHint", () => d, "RangeSlider", () => o, "SelectChevron", () => c, "formatCompactNumber", () => r, "formatCurrency", () => l, "logDomain", () => u, "logPercent", () => x, "logTicks", () => p, "selectClassName", 0, "w-full appearance-none rounded border border-border bg-white py-3 pl-3 pr-10 font-mono text-body-md text-navy focus:outline-none focus:ring-2 focus:ring-primary/50"], 599658)
}, 902156, e => {
    "use strict";
    var t = e.i(205112),
        a = e.i(796353),
        s = e.i(647163),
        n = e.i(74710),
        i = e.i(599658),
        r = e.i(885076);

    function l(e) {
        return new Intl.NumberFormat("en-US", {
            notation: "compact",
            maximumFractionDigits: 1
        }).format(e)
    }

    function o(e) {
        return 1e3 > Math.abs(e) ? new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(e) : new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            notation: "compact",
            minimumFractionDigits: 0,
            maximumFractionDigits: 1
        }).format(e)
    }

    function c(e, t, a) {
        return (t * e.inputTokensPerPage * e.inputPrice + t * a * e.outputPrice) / 1e6
    }

    function d({
        value: e,
        min: n = 0,
        max: i = 100,
        onChange: r,
        ariaLabel: l,
        valueLabel: o,
        caption: c
    }) {
        let d = (0, a.useRef)(null),
            [m, u] = (0, a.useState)(!1),
            x = (0, a.useCallback)(e => {
                if (!d.current) return;
                let t = d.current.getBoundingClientRect(),
                    a = (e - t.left) / t.width * 100;
                r(Math.min(100, Math.max(0, a > 99 ? 100 : a < 1 ? 0 : a)))
            }, [r]);
        (0, a.useEffect)(() => {
            if (!m) return;
            let e = e => x(e.clientX),
                t = () => u(!1);
            return window.addEventListener("pointermove", e), window.addEventListener("pointerup", t), () => {
                window.removeEventListener("pointermove", e), window.removeEventListener("pointerup", t)
            }
        }, [m, x]);
        let p = (e - n) / (i - n) * 100;
        return (0, t.jsxs)("div", {
            className: "w-full pt-8",
            children: [(0, t.jsxs)("div", {
                ref: d,
                role: "slider",
                "aria-label": l,
                "aria-valuemin": n,
                "aria-valuemax": i,
                "aria-valuenow": e,
                "aria-valuetext": o,
                tabIndex: 0,
                onPointerDown: e => {
                    x(e.clientX), u(!0)
                },
                onKeyDown: t => {
                    "ArrowLeft" === t.key || "ArrowDown" === t.key ? (t.preventDefault(), r(Math.max(n, e - 1))) : "ArrowRight" === t.key || "ArrowUp" === t.key ? (t.preventDefault(), r(Math.min(i, e + 1))) : "PageDown" === t.key ? (t.preventDefault(), r(Math.max(n, e - 10))) : "PageUp" === t.key ? (t.preventDefault(), r(Math.min(i, e + 10))) : "Home" === t.key ? (t.preventDefault(), r(n)) : "End" === t.key && (t.preventDefault(), r(i))
                },
                className: (0, s.cn)("group relative flex h-5 w-full cursor-pointer items-center touch-none focus:outline-none", m && "cursor-grabbing"),
                children: [(0, t.jsx)("div", {
                    className: "absolute inset-x-0 h-[3px] rounded-full bg-border"
                }), (0, t.jsx)("div", {
                    className: "absolute left-0 h-[3px] rounded-full bg-primary-mid",
                    style: {
                        width: `${p}%`
                    }
                }), (0, t.jsxs)("div", {
                    className: "absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                    style: {
                        left: `${p}%`
                    },
                    onPointerDown: e => {
                        e.stopPropagation(), u(!0)
                    },
                    children: [(0, t.jsx)("div", {
                        "aria-hidden": "true",
                        className: "pointer-events-none absolute bottom-full left-1/2 mb-2.5 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary-mid px-2.5 py-1 font-mono text-[11px] font-medium tabular-nums text-white shadow-[0_1px_2px_rgba(31,90,202,0.25)]",
                        children: o
                    }), (0, t.jsx)("div", {
                        "aria-hidden": "true",
                        className: (0, s.cn)("size-4 rounded-full bg-primary-mid shadow-[0_1px_3px_rgba(31,90,202,0.35)] transition-shadow", m ? "shadow-[0_0_0_4px_rgba(31,90,202,0.18)]" : "group-focus-visible:shadow-[0_0_0_4px_rgba(31,90,202,0.18)]")
                    })]
                })]
            }), (0, t.jsx)("p", {
                className: "mt-3 text-center text-body-sm text-muted",
                children: c
            })]
        })
    }

    function m() {
        return (0, t.jsx)("svg", {
            className: "pointer-events-none absolute right-3.5 top-1/2 h-3 w-3 -translate-y-1/2 text-muted",
            viewBox: "0 0 12 12",
            fill: "none",
            "aria-hidden": "true",
            children: (0, t.jsx)("path", {
                d: "M2.5 4.5L6 8l3.5-3.5",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        })
    }

    function u({
        label: e,
        tooltip: a,
        href: s
    }) {
        let n = "inline-flex size-3.5 items-center justify-center text-muted transition-colors hover:text-primary-mid focus:outline-none focus-visible:rounded-full focus-visible:ring-2 focus-visible:ring-primary/40",
            i = (0, t.jsxs)("svg", {
                viewBox: "0 0 14 14",
                className: "size-3.5",
                fill: "none",
                "aria-hidden": "true",
                children: [(0, t.jsx)("circle", {
                    cx: "7",
                    cy: "7",
                    r: "6.25",
                    stroke: "currentColor",
                    strokeWidth: "1",
                    opacity: "0.5"
                }), (0, t.jsx)("path", {
                    d: "M5.2 5.35A1.85 1.85 0 0 1 7 3.55c1.05 0 1.85.72 1.85 1.7 0 .7-.34 1.15-1.02 1.55-.6.34-.83.56-.83 1.1v.35",
                    stroke: "currentColor",
                    strokeWidth: "1.15",
                    strokeLinecap: "round"
                }), (0, t.jsx)("circle", {
                    cx: "7",
                    cy: "10.2",
                    r: "0.68",
                    fill: "currentColor"
                })]
            });
        return (0, t.jsxs)("span", {
            className: "group/hint relative ml-1 inline-flex align-middle",
            children: [s ? (0, t.jsx)("a", {
                href: s,
                target: "_blank",
                rel: "noopener noreferrer",
                className: n,
                "aria-label": e,
                children: i
            }) : (0, t.jsx)("button", {
                type: "button",
                className: n,
                "aria-label": e,
                children: i
            }), (0, t.jsx)("span", {
                role: "tooltip",
                className: "pointer-events-none absolute bottom-full left-1/2 z-20 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded bg-navy px-2 py-1 font-mono text-[10px] font-medium text-white opacity-0 shadow-sm transition-opacity group-hover/hint:opacity-100 group-focus-within/hint:opacity-100",
                children: a
            })]
        })
    }
    let x = "w-full appearance-none rounded border border-border bg-white py-3 pl-3 pr-10 font-mono text-body-md text-navy focus:outline-none focus:ring-2 focus:ring-primary/50",
        p = {
            backgroundColor: "color-mix(in srgb, var(--primary) 8%, white)",
            backgroundImage: "repeating-linear-gradient(45deg, color-mix(in srgb, var(--primary) 26%, transparent) 0 1px, transparent 1px 6px)"
        };

    function h({
        eyebrow: e,
        headline: h,
        subheadline: f,
        documentTypes: b,
        pageCounts: g,
        models: v,
        competitors: y,
        embedded: w = !1,
        showControls: j = !0
    }) {
        let N = (0, a.useMemo)(() => [...g].sort((e, t) => e - t), [g]),
            k = N[0] ?? 1e4,
            M = N[N.length - 1] ?? 1e6,
            [C, P] = (0, a.useState)(b[0]?.id ?? ""),
            [$, S] = (0, a.useState)(50),
            [I, D] = (0, a.useState)(""),
            _ = (0, a.useMemo)(() => b.find(e => e.id === C) ?? b[0], [C, b]),
            T = (0, a.useMemo)(() => I ? v.find(e => e.id === I) ?? null : null, [I, v]),
            L = (0, a.useMemo)(() => {
                let e = k * Math.pow(M / k, $ / 100);
                return Math.max(k, Math.min(M, 1e3 * Math.round(e / 1e3)))
            }, [k, M, $]),
            {
                gatewayInputTokens: A,
                gatewayInputTokensMax: z,
                ocrOutputTokens: F,
                frontierInputTokens: R,
                frontierOutputTokens: E,
                gatewayCostMin: O,
                gatewayCostMax: W
            } = (0, a.useMemo)(() => {
                if (!_) return {
                    gatewayInputTokens: 0,
                    gatewayInputTokensMax: 0,
                    ocrOutputTokens: 0,
                    frontierInputTokens: 0,
                    frontierOutputTokens: 0,
                    gatewayCostMin: 0,
                    gatewayCostMax: 0
                };
                let e = L * _.tokensPerPage,
                    t = 2500 * L,
                    a = 2 * e;
                if (T) {
                    let s = L * T.inputTokensPerPage,
                        n = c(T, L, _.tokensPerPage);
                    return {
                        gatewayInputTokens: s,
                        gatewayInputTokensMax: s,
                        ocrOutputTokens: e,
                        frontierInputTokens: t,
                        frontierOutputTokens: a,
                        gatewayCostMin: n,
                        gatewayCostMax: n
                    }
                }
                let s = v.map(e => c(e, L, _.tokensPerPage)),
                    n = s.length ? Math.min(...s) : 0,
                    i = s.length ? Math.max(...s) : 0,
                    r = v.map(e => L * e.inputTokensPerPage).filter(e => e > 0);
                return {
                    gatewayInputTokens: r.length ? Math.min(...r) : 0,
                    gatewayInputTokensMax: r.length ? Math.max(...r) : 0,
                    ocrOutputTokens: e,
                    frontierInputTokens: t,
                    frontierOutputTokens: a,
                    gatewayCostMin: n,
                    gatewayCostMax: i
                }
            }, [_, v, L, T]),
            U = (0, a.useMemo)(() => {
                if (!_ || 0 === y.length) return null;
                let e = 2500 * L,
                    t = L * _.tokensPerPage * 2,
                    a = y.map(a => (e * a.inputPrice + t * a.outputPrice) / 1e6);
                return {
                    min: Math.min(...a),
                    max: Math.max(...a)
                }
            }, [y, _, L]),
            B = (0, a.useMemo)(() => {
                if (!_) return [];
                let e = .0015 * L,
                    t = .01 * L,
                    a = .01 * L,
                    s = .06 * L,
                    n = !T && W > O + Number.EPSILON;
                return [{
                    id: "gateway",
                    label: "VLM Run Gateway",
                    subtitle: T ? T.label || (T.id.split("/").pop() ?? T.id) : "Document OCR VLMs",
                    cost: W,
                    costMin: n ? O : void 0,
                    costMax: n ? W : void 0,
                    kind: "open",
                    barClass: "bg-primary-mid"
                }, {
                    id: "ocr-apis",
                    label: "OCR APIs",
                    subtitle: "Textract, Azure Doc AI",
                    cost: t,
                    costMin: e,
                    costMax: t,
                    kind: "closed",
                    barClass: ""
                }, {
                    id: "document-ai-apis",
                    label: "Document AI APIs",
                    subtitle: "Reducto, LlamaParse, Extend",
                    cost: s,
                    costMin: a,
                    costMax: s,
                    kind: "closed",
                    barClass: ""
                }, {
                    id: "frontier-vlms",
                    label: "Frontier VLMs",
                    subtitle: "Gemini, Claude, GPT",
                    cost: U?.max ?? 0,
                    costMin: U?.min,
                    costMax: U?.max,
                    kind: "closed",
                    barClass: ""
                }]
            }, [_, U, W, O, L, T]),
            {
                lo: G,
                hi: V
            } = (0, a.useMemo)(() => (0, i.logDomain)(B), [B]),
            H = (0, a.useMemo)(() => (0, i.logTicks)(G, V), [G, V]);
        if (!_) return null;
        let K = (0, t.jsxs)("div", {
            className: (0, s.cn)("grid min-w-0 gap-6", j && (w ? "md:grid-cols-3" : "lg:grid-cols-3")),
            children: [j ? (0, t.jsxs)("div", {
                className: (0, s.cn)("flex min-w-0 flex-col rounded border border-border bg-white p-4 sm:p-6", w ? "md:col-span-1" : "lg:col-span-1"),
                children: [(0, t.jsxs)("div", {
                    className: "flex flex-col gap-6",
                    children: [(0, t.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [(0, t.jsx)("label", {
                            htmlFor: "document-type",
                            className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
                            children: "Document type"
                        }), (0, t.jsxs)("div", {
                            className: "relative",
                            children: [(0, t.jsx)("select", {
                                id: "document-type",
                                value: C,
                                onChange: e => P(e.target.value),
                                className: x,
                                children: b.map(e => (0, t.jsxs)("option", {
                                    value: e.id,
                                    children: [e.label, " (", e.description, ")"]
                                }, e.id))
                            }), (0, t.jsx)(m, {})]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [(0, t.jsx)("label", {
                            htmlFor: "model",
                            className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
                            children: "OCR model"
                        }), (0, t.jsxs)("div", {
                            className: "relative",
                            children: [(0, t.jsxs)("select", {
                                id: "model",
                                value: I,
                                onChange: e => D(e.target.value),
                                className: x,
                                children: [(0, t.jsx)("option", {
                                    value: "",
                                    children: "All models (price band)"
                                }), v.map(e => (0, t.jsx)("option", {
                                    value: e.id,
                                    children: e.label
                                }, e.id))]
                            }), (0, t.jsx)(m, {})]
                        })]
                    }), (0, t.jsx)(d, {
                        value: $,
                        onChange: S,
                        ariaLabel: "Page volume",
                        valueLabel: l(L),
                        caption: "Page volume / month"
                    })]
                }), (0, t.jsxs)("div", {
                    className: "mt-auto border-t border-border pt-5",
                    children: [(0, t.jsx)("p", {
                        className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
                        children: "Gateway OCR tokens (in / out)"
                    }), (0, t.jsx)("p", {
                        className: "mt-1 font-mono text-body-lg font-medium tabular-nums text-navy",
                        children: z > A ? `${l(A)} - ${l(z)} / ${l(F)}` : `${l(A)} / ${l(F)}`
                    }), (0, t.jsx)("p", {
                        className: "mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
                        children: "Frontier billed tokens (in / out)"
                    }), (0, t.jsxs)("p", {
                        className: "mt-1 font-mono text-body-lg font-medium tabular-nums text-navy",
                        children: [l(R), " /", " ", l(E)]
                    }), (0, t.jsx)("p", {
                        className: "mt-2 text-body-sm text-muted",
                        children: "2.5K image tokens per page; output includes reasoning at 2× OCR text."
                    })]
                })]
            }) : null, (0, t.jsxs)("div", {
                className: (0, s.cn)("flex min-w-0 flex-col rounded border border-border bg-white p-4 sm:p-8", j ? w ? "md:col-span-2" : "lg:col-span-2" : "col-span-full"),
                children: [(0, t.jsxs)("div", {
                    className: "grid grid-cols-1 gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-x-10 sm:gap-y-6",
                    children: [(0, t.jsxs)("div", {
                        className: "min-w-0 sm:pr-2",
                        children: [(0, t.jsxs)("p", {
                            className: "inline-flex min-h-[14px] items-center font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
                            children: ["Total cost", (0, t.jsx)(u, {
                                label: "What the gateway bills for this workload",
                                tooltip: "what the gateway bills for this workload"
                            })]
                        }), (0, t.jsx)("p", {
                            className: "mt-2 font-serif text-display-sm tabular-nums text-navy max-sm:text-[28px] sm:whitespace-nowrap",
                            children: W > O + Number.EPSILON ? `${o(O)} - ${o(W)}` : o(W)
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "min-w-0 sm:justify-self-end sm:pl-6 sm:text-right",
                        children: [(0, t.jsxs)("p", {
                            className: "inline-flex min-h-[14px] items-center whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
                            children: ["Documents / month", (0, t.jsx)("span", {
                                className: "ml-1 inline-block size-3.5 shrink-0",
                                "aria-hidden": "true"
                            })]
                        }), (0, t.jsxs)("p", {
                            className: "mt-2 font-serif text-display-sm tabular-nums text-navy max-sm:text-[28px] sm:whitespace-nowrap",
                            children: [l(L), (0, t.jsx)("span", {
                                className: "ml-2 font-sans text-body-md font-normal text-muted",
                                children: "pages"
                            })]
                        })]
                    })]
                }), (0, t.jsxs)("div", {
                    className: "mt-10 border-t border-border pt-8",
                    children: [(0, t.jsxs)("div", {
                        className: "mb-6 flex flex-col items-start gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4",
                        children: [(0, t.jsxs)("h3", {
                            className: "font-serif text-heading-md text-navy",
                            children: ["Cost comparison ", (0, t.jsx)("span", {
                                className: "text-muted",
                                children: "(log scale)"
                            })]
                        }), (0, t.jsx)("span", {
                            className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
                            children: "Cheapest - most expensive"
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-col gap-5 pt-2",
                        children: [B.map(e => {
                            let a = "gateway" === e.id,
                                n = null != e.costMin && null != e.costMax,
                                r = n ? e.costMin : e.cost,
                                l = n ? e.costMax : e.cost,
                                c = n ? (0, i.logPercent)(r, G, V) : 0,
                                d = (0, i.logPercent)(l, G, V),
                                m = (0, i.logPercent)(e.cost, G, V),
                                u = n ? `${o(r)} - ${o(l)}` : o(e.cost);
                            return (0, t.jsxs)("div", {
                                className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex min-w-0 items-baseline justify-between gap-3 text-left leading-tight sm:block sm:w-56 sm:shrink-0 sm:text-right",
                                    children: [(0, t.jsxs)("div", {
                                        children: [(0, t.jsx)("div", {
                                            className: (0, s.cn)("font-sans text-body-md text-navy", a && "font-semibold"),
                                            children: e.label
                                        }), (0, t.jsx)("div", {
                                            className: "mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
                                            children: e.subtitle
                                        })]
                                    }), (0, t.jsx)("div", {
                                        className: "shrink-0 text-right font-mono text-[12px] font-medium tabular-nums text-navy sm:hidden",
                                        children: u
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "flex min-w-0 flex-1 items-center gap-3",
                                    children: [(0, t.jsxs)("div", {
                                        className: "relative flex h-6 min-w-0 flex-1 items-center",
                                        children: [(0, t.jsx)("div", {
                                            className: "absolute inset-x-0 h-px bg-border"
                                        }), (0, t.jsx)("div", {
                                            className: (0, s.cn)("absolute h-4 -translate-y-1/2 rounded-[2px] transition-all duration-500", a ? "bg-primary-mid" : "ring-1 ring-inset ring-primary/20"),
                                            style: {
                                                top: "50%",
                                                ...n ? {
                                                    left: `${c}%`,
                                                    width: `max(6px, ${d-c}%)`
                                                } : {
                                                    left: `calc(${m}% - 3px)`,
                                                    width: "6px"
                                                },
                                                ...a ? {} : p
                                            }
                                        })]
                                    }), (0, t.jsx)("div", {
                                        className: "hidden w-32 shrink-0 text-right font-mono text-body-md font-medium tabular-nums text-navy sm:block",
                                        children: u
                                    })]
                                })]
                            }, e.id)
                        }), (0, t.jsxs)("div", {
                            className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4",
                            children: [(0, t.jsx)("div", {
                                className: "hidden sm:block sm:w-56 sm:shrink-0",
                                "aria-hidden": "true"
                            }), (0, t.jsxs)("div", {
                                className: "flex min-w-0 flex-1 items-center gap-3",
                                children: [(0, t.jsx)("div", {
                                    className: "relative h-4 min-w-0 flex-1",
                                    children: H.map(e => (0, t.jsxs)("span", {
                                        className: "absolute top-0 flex -translate-x-1/2 flex-col items-center gap-1",
                                        style: {
                                            left: `${(0,i.logPercent)(e,G,V)}%`
                                        },
                                        children: [(0, t.jsx)("span", {
                                            className: "h-1.5 w-px bg-border"
                                        }), (0, t.jsx)("span", {
                                            className: "font-mono text-[10px] tabular-nums text-muted",
                                            children: o(e)
                                        })]
                                    }, e))
                                }), (0, t.jsx)("div", {
                                    className: "hidden sm:block sm:w-32",
                                    "aria-hidden": "true"
                                })]
                            })]
                        })]
                    })]
                }), (0, t.jsxs)("p", {
                    className: "mt-6 text-body-sm text-muted",
                    children: ["Estimates vs typical OCR, Document AI, and frontier VLM pricing.", (0, t.jsx)(u, {
                        label: "Pricing source",
                        tooltip: "Source: llm-prices.com",
                        href: "https://www.llm-prices.com/current-v1.json"
                    })]
                })]
            })]
        });
        return w ? (0, t.jsx)("div", {
            className: "w-full",
            children: K
        }) : (0, t.jsx)("section", {
            id: "pricing-calculator",
            className: "scroll-mt-24 border-y border-border bg-surface",
            children: (0, t.jsx)("div", {
                style: r.pageGridRailOuterStyle,
                children: (0, t.jsxs)("div", {
                    className: r.gatewaySectionPaddingClass,
                    children: [(0, t.jsxs)("div", {
                        className: "mb-12 max-w-2xl",
                        children: [(0, t.jsx)("p", {
                            className: "mb-4 font-mono text-[12px] font-medium uppercase tracking-[2.4px] leading-5 text-primary-light",
                            children: e
                        }), (0, t.jsx)(n.default, {
                            headline: h,
                            subheadline: f,
                            size: "md",
                            subheadlineWrap: "balance"
                        })]
                    }), K]
                })
            })
        })
    }
    e.s(["default", () => h])
}, 565704, e => {
    "use strict";
    var t = e.i(205112),
        a = e.i(796353),
        s = e.i(133224),
        n = e.i(647163);

    function i({
        tabs: e,
        activeIndex: i,
        onActiveIndexChange: r,
        className: l,
        maxWidthClassName: o = "max-w-[560px] xl:max-w-[640px]",
        framed: c = !0,
        tight: d = !1,
        withTabs: m = !1,
        withGroups: u = !1,
        roomy: x = !1
    }) {
        let [p, h] = (0, a.useState)(0), f = null != i, b = (0, a.useMemo)(() => {
            let t;
            return t = [], e.forEach((e, a) => {
                if (!e.group) return;
                let s = t[t.length - 1];
                s && s.name === e.group ? s.indices.push(a) : t.push({
                    name: e.group,
                    indices: [a]
                })
            }), t
        }, [e]), g = u && b.length > 0, v = m || g, y = f ? i : p, w = (0, a.useMemo)(() => {
            if (!g) return e.map((e, t) => t);
            let t = b.find(e => e.indices.includes(y)) ?? b[0];
            return t?.indices ?? []
        }, [g, b, y, e]), j = b.find(e => e.indices.includes(y))?.name ?? b[0]?.name, N = g ? w.map(t => e[t]).filter(e => !!e) : e, k = g ? Math.max(0, w.indexOf(y)) : y;
        return (0, t.jsxs)("div", {
            className: (0, n.cn)("relative flex items-center justify-center overflow-hidden bg-[#eef4fb]", d ? "p-2" : x ? "px-6 py-5 sm:px-8 sm:py-6" : "p-3 sm:p-4 lg:p-5", c && "rounded-[20px] border border-border shadow-[0_1px_0_rgba(16,42,86,0.03)]", l),
            children: [(0, t.jsx)("div", {
                "aria-hidden": "true",
                className: "pointer-events-none absolute inset-0 bg-cover bg-center opacity-50",
                style: {
                    backgroundImage: "url(/images/textures/code-bg.png)"
                }
            }), (0, t.jsx)("div", {
                "aria-hidden": "true",
                className: "absolute inset-0 bg-[#eef4fb]/70"
            }), (0, t.jsx)("div", {
                "aria-hidden": "true",
                className: "pointer-events-none absolute -inset-2 opacity-80",
                style: {
                    background: "radial-gradient(60% 50% at 50% 50%, rgba(18,101,255,0.18) 0%, rgba(18,101,255,0) 70%)",
                    filter: "blur(8px)"
                }
            }), (0, t.jsxs)("div", {
                className: (0, n.cn)("relative w-full", o),
                children: [g ? (0, t.jsx)("div", {
                    role: "tablist",
                    "aria-label": "Who is calling",
                    className: "mb-4 flex items-center justify-center gap-1",
                    children: b.map(e => {
                        let a = e.name === j;
                        return (0, t.jsx)("button", {
                            type: "button",
                            role: "tab",
                            "aria-selected": a,
                            onClick: () => {
                                let t;
                                void 0 !== (t = e.indices[0]) && (!f && h(t), r?.(t))
                            },
                            className: `cursor-pointer rounded-full px-3 py-1 text-label font-medium transition-colors ${a?"bg-white text-primary-mid shadow-sm":"text-muted hover:text-navy"}`,
                            children: a ? (0, t.jsx)("span", {
                                className: "quickstart-shimmer",
                                "data-text": e.name,
                                children: e.name
                            }) : e.name
                        }, e.name)
                    })
                }) : null, (0, t.jsx)(s.default, {
                    tabs: N,
                    activeIndex: g || f ? k : i,
                    onActiveIndexChange: e => {
                        if (!g) return void r?.(e);
                        let t = w[e];
                        void 0 !== t && (f || h(t), r?.(t))
                    },
                    hideTabBar: !v,
                    hideHeader: !v,
                    hideLineNumbers: !0,
                    compact: !0,
                    variant: "light"
                })]
            })]
        })
    }
    e.s(["default", () => i])
}, 860115, e => {
    "use strict";
    var t = e.i(205112),
        a = e.i(575003),
        s = e.i(676525),
        n = e.i(565704),
        i = e.i(588634),
        r = e.i(591139),
        l = e.i(885076);

    function o({
        headline: e,
        subheadline: o,
        primaryCta: c,
        secondaryCta: d,
        examples: m
    }) {
        return (0, t.jsx)("section", {
            className: "relative z-[11] bg-surface",
            children: (0, t.jsx)("div", {
                style: l.pageGridRailOuterStyle,
                children: (0, t.jsx)("div", {
                    className: "border-x border-border bg-surface",
                    children: (0, t.jsxs)("div", {
                        className: l.gatewaySectionPaddingYClass,
                        children: [(0, t.jsx)(a.default, {
                            children: (0, t.jsxs)("div", {
                                className: "mx-auto flex max-w-3xl flex-col items-center gap-6 text-center",
                                children: [(0, t.jsx)("h1", {
                                    className: "font-serif text-display-xl text-navy antialiased",
                                    children: e
                                }), (0, t.jsx)("p", {
                                    className: "max-w-2xl text-pretty text-body-lg text-muted",
                                    children: (0, r.withInlineCode)(o)
                                }), (0, t.jsxs)("div", {
                                    className: "flex flex-col items-center gap-4 sm:flex-row sm:justify-center",
                                    children: [(0, t.jsxs)(s.default, {
                                        href: c.href,
                                        external: !0,
                                        variant: "primary-mid",
                                        size: "sm",
                                        children: [c.label, (0, t.jsx)(i.ArrowRightIcon, {})]
                                    }), (0, t.jsx)(s.default, {
                                        href: d.href,
                                        external: !0,
                                        variant: "secondary",
                                        size: "sm",
                                        children: d.label
                                    })]
                                })]
                            })
                        }), m.length > 0 ? (0, t.jsx)("div", {
                            className: "mt-12 lg:px-16",
                            children: (0, t.jsx)(n.default, {
                                withTabs: !0,
                                roomy: !0,
                                tabs: m,
                                maxWidthClassName: "max-w-[580px]",
                                className: "mx-auto w-full max-w-[644px]"
                            })
                        }) : null]
                    })
                })
            })
        })
    }
    e.s(["default", () => o])
}, 681312, e => {
    "use strict";
    var t = e.i(205112),
        a = e.i(796353),
        s = e.i(647163),
        n = e.i(74710),
        i = e.i(885076),
        r = e.i(902156),
        l = e.i(973936);
    let o = [{
        id: "documents",
        label: "Documents",
        unit: "Billed by the page"
    }, {
        id: "video",
        label: "Video",
        unit: "Billed by the hour"
    }];

    function c({
        label: e,
        unit: a
    }) {
        return (0, t.jsxs)("div", {
            className: "mb-6 flex items-baseline justify-between gap-4 border-b border-border pb-3",
            children: [(0, t.jsx)("p", {
                className: "font-serif text-heading-md text-navy",
                children: e
            }), (0, t.jsx)("p", {
                className: "shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
                children: a
            })]
        })
    }

    function d({
        eyebrow: e,
        headline: d,
        subheadline: m,
        layout: u,
        documents: x,
        video: p,
        initialModality: h = "documents"
    }) {
        let [f, b] = (0, a.useState)(h), g = (0, a.useRef)([]), v = "combined-pricing-calculator", y = e => {
            let t = (e + o.length) % o.length,
                a = o[t];
            a && (b(a.id), g.current[t]?.focus())
        }, w = (0, t.jsx)(r.default, {
            ...x,
            embedded: !0
        }), j = (0, t.jsx)(l.default, {
            ...p,
            embedded: !0
        }), N = "documents" === f ? x : p, k = e ?? N.eyebrow ?? "Pricing calculator", M = d ?? N.headline, C = m ?? N.subheadline;
        return (0, t.jsx)("section", {
            id: v,
            className: "scroll-mt-24 border-y border-border bg-surface",
            children: (0, t.jsx)("div", {
                style: i.pageGridRailOuterStyle,
                children: (0, t.jsxs)("div", {
                    className: i.gatewaySectionPaddingClass,
                    children: [(0, t.jsxs)("div", {
                        className: "mb-12 max-w-2xl",
                        children: [(0, t.jsx)("p", {
                            className: "mb-4 font-mono text-[12px] font-medium uppercase tracking-[2.4px] leading-5 text-primary-light",
                            children: k
                        }), (0, t.jsx)(n.default, {
                            headline: M,
                            subheadline: C,
                            size: "md",
                            subheadlineWrap: "balance"
                        })]
                    }), "tabs" === u ? (0, t.jsxs)("div", {
                        className: "flex flex-col gap-8",
                        children: [(0, t.jsx)("div", {
                            role: "tablist",
                            "aria-label": "Pricing modality",
                            className: "flex items-center gap-8 border-b border-border",
                            children: o.map((e, a) => {
                                let n = e.id === f;
                                return (0, t.jsx)("button", {
                                    ref: e => {
                                        g.current[a] = e
                                    },
                                    type: "button",
                                    role: "tab",
                                    id: `${v}-tab-${e.id}`,
                                    "aria-selected": n,
                                    "aria-controls": `${v}-panel-${e.id}`,
                                    tabIndex: n ? 0 : -1,
                                    onClick: () => b(e.id),
                                    onKeyDown: e => {
                                        "ArrowRight" === e.key ? (e.preventDefault(), y(a + 1)) : "ArrowLeft" === e.key ? (e.preventDefault(), y(a - 1)) : "Home" === e.key ? (e.preventDefault(), y(0)) : "End" === e.key && (e.preventDefault(), y(o.length - 1))
                                    },
                                    className: (0, s.cn)("-mb-px cursor-pointer pb-3 font-mono text-[12px] font-medium uppercase tracking-[2.4px] leading-5 transition-colors", n ? "border-b-2 border-primary-mid text-primary-mid" : "border-b-2 border-transparent text-muted hover:text-navy"),
                                    children: e.label
                                }, e.id)
                            })
                        }), o.map(e => (0, t.jsx)("div", {
                            role: "tabpanel",
                            id: `${v}-panel-${e.id}`,
                            "aria-labelledby": `${v}-tab-${e.id}`,
                            hidden: e.id !== f,
                            children: "documents" === e.id ? w : j
                        }, e.id))]
                    }) : (0, t.jsxs)("div", {
                        className: "flex flex-col gap-16",
                        children: [(0, t.jsxs)("div", {
                            children: [(0, t.jsx)(c, {
                                label: "Documents",
                                unit: "Billed by the page"
                            }), w]
                        }), (0, t.jsxs)("div", {
                            children: [(0, t.jsx)(c, {
                                label: "Video",
                                unit: "Billed by the hour"
                            }), j]
                        })]
                    })]
                })
            })
        })
    }
    e.s(["default", () => d])
}]);