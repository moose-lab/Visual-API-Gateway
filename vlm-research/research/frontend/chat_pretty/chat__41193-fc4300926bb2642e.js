try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0e7dc7e1-e0a3-44eb-bffa-36030bd6b94f", e._sentryDebugIdIdentifier = "sentry-dbid-0e7dc7e1-e0a3-44eb-bffa-36030bd6b94f")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [41193], {
        41193: function(e, n, t) {
            t.r(n), t.d(n, {
                SPARK_VIEWER_DEFAULT_SETTINGS: function() {
                    return d.o
                },
                SparkModelViewer: function() {
                    return f
                },
                SparkViewerSettingsControls: function() {
                    return d.I
                },
                prewarmSparkModelViewer: function() {
                    return m
                }
            });
            var l = t(57437),
                o = t(2265),
                r = t(40875),
                i = t(10407),
                a = t(94508),
                s = t(74928),
                c = t(5037),
                d = t(54546);
            let u = null,
                p = null,
                v = null,
                h = null;

            function x() {
                return u || (u = Promise.all([t.e(54342), t.e(60432), t.e(15811)]).then(t.bind(t, 65410)), p = Promise.all([t.e(60432), t.e(40125)]).then(t.bind(t, 15811)), v = Promise.all([t.e(60432), t.e(2691)]).then(t.bind(t, 2691)), h = Promise.all([t.e(60432), t.e(1874)]).then(t.bind(t, 1874))), Promise.all([u, p, v, h])
            }

            function f(e) {
                let {
                    url: n,
                    className: t,
                    onError: u,
                    fileType: p,
                    enableMagic: v = !1,
                    debug: h = !1,
                    allowPoleFlip: f = !0,
                    hideBuiltInControls: m = !1,
                    lnScaleMin: g,
                    lnScaleMax: C,
                    flipSplat: w,
                    onLnScaleMinChange: y,
                    onLnScaleMaxChange: M,
                    onFlipSplatChange: b
                } = e, j = (0, o.useRef)(null), [z, k] = (0, o.useState)(!0), [L, V] = (0, o.useState)(d.o.lnScaleMin), [H, S] = (0, o.useState)(d.o.lnScaleMax), [B, P] = (0, o.useState)(d.o.flipSplat), E = null != g ? g : L, R = null != C ? C : H, T = null != w ? w : B, [Z, A] = (0, o.useState)(!1), D = (0, o.useRef)(E), F = (0, o.useRef)(R), N = (0, o.useRef)(.1), I = (0, o.useRef)(null), W = (0, o.useRef)(null), _ = (0, o.useRef)(null), G = (0, o.useRef)(null), O = (0, o.useRef)(() => {});
                return (0, o.useEffect)(() => {
                    k(!0);
                    let e = !1,
                        t = null,
                        l = null,
                        o = null,
                        r = null,
                        i = null,
                        a = null,
                        s = null,
                        c = null,
                        d = null,
                        m = null,
                        g = !1,
                        C = null,
                        w = null,
                        y = null,
                        M = null,
                        b = null,
                        z = null,
                        L = null,
                        V = 0,
                        H = !1,
                        S = !1,
                        B = !1,
                        P = !1,
                        E = !1,
                        R = 0,
                        Z = null,
                        A = {
                            lnScaleMin: D.current,
                            lnScaleMax: F.current
                        },
                        q = () => {},
                        U = () => {
                            e || k(!1)
                        },
                        Q = () => {
                            var n, a, u, p, v, h, x, f;
                            e = !0, null !== t && (cancelAnimationFrame(t), t = null), null == l || l.disconnect(), l = null, null == M || M.disconnect(), M = null, null == b || b(), b = null, null == z || z(), z = null, O.current = () => {}, s && (s.fpsMovement.enable = !1, s.pointerControls.enable = !1), null == c || null === (n = c.dispose) || void 0 === n || n.call(c), null == d || null === (a = d.dispose) || void 0 === a || a.call(d), null == r || null === (u = r.dispose) || void 0 === u || u.call(r), null == o || null === (p = o.dispose) || void 0 === p || p.call(o), I.current = null, W.current = null, _.current = null, G.current = null, C && i && i.remove(C), w && i && (i.remove(w), null === (h = w.geometry) || void 0 === h || null === (v = h.dispose) || void 0 === v || v.call(h), null === (f = w.material) || void 0 === f || null === (x = f.dispose) || void 0 === x || x.call(f)), m && y && m.removeEventListener("wheel", y), (null == m ? void 0 : m.parentNode) && m.parentNode.removeChild(m)
                        };
                    return (async () => {
                        try {
                            var k, D, F, _, G, Y, X, K;
                            let [{
                                SparkRenderer: J,
                                SplatMesh: $,
                                SparkControls: ee,
                                dyno: en
                            }, et, el, eo] = await x(), er = null !== (_ = et.default) && void 0 !== _ ? _ : et, ei = new er.Box3, ea = new er.Vector3, es = new er.Vector3, ec = new er.Box3, ed = () => {
                                var e, n, t, l, o, r, i, a;
                                if (!d) return !1;
                                d.updateMatrixWorld(!0), ei.makeEmpty(), ec.makeEmpty();
                                let s = () => (ei.copy(ec).applyMatrix4(d.matrixWorld), !ei.isEmpty()),
                                    c = d.packedSplats,
                                    u = null !== (o = null !== (l = null !== (t = null == c ? void 0 : c.aabbMin) && void 0 !== t ? t : null == c ? void 0 : c.boundsMin) && void 0 !== l ? l : null == c ? void 0 : c.bboxMin) && void 0 !== o ? o : null,
                                    p = null !== (a = null !== (i = null !== (r = null == c ? void 0 : c.aabbMax) && void 0 !== r ? r : null == c ? void 0 : c.boundsMax) && void 0 !== i ? i : null == c ? void 0 : c.bboxMax) && void 0 !== a ? a : null,
                                    v = (e, n) => !!e && !!n && (Array.isArray(e) && e.length >= 3 ? (n.set(e[0], e[1], e[2]), !0) : "number" == typeof e.x && "number" == typeof e.y && "number" == typeof e.z && (n.set(e.x, e.y, e.z), !0));
                                if (v(u, ec.min) && v(p, ec.max)) return s();
                                if ("function" == typeof d.getBoundingBox) {
                                    let e = d.getBoundingBox(!1);
                                    if (e instanceof er.Box3 && !e.isEmpty()) return ec.copy(e), s()
                                }
                                if (d.boundingBox instanceof er.Box3) ec.copy(d.boundingBox);
                                else if ((null === (e = d.geometry) || void 0 === e ? void 0 : e.boundingBox) instanceof er.Box3) ec.copy(d.geometry.boundingBox);
                                else {
                                    if (null === (n = d.geometry) || void 0 === n || !n.computeBoundingBox) return ei.setFromObject(d), !ei.isEmpty();
                                    d.geometry.computeBoundingBox(), d.geometry.boundingBox instanceof er.Box3 && ec.copy(d.geometry.boundingBox)
                                }
                                return s()
                            };
                            q = function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    {
                                        helpersOnly: n = !1,
                                        updateCamera: t = !0
                                    } = e;
                                if (c && d && a) try {
                                    let e = ed();
                                    if (!e || (ei.getCenter(ea), ei.getSize(es), !Number.isFinite(ea.x) || !Number.isFinite(ea.y) || !Number.isFinite(ea.z))) return;
                                    n || c.target.copy(ea);
                                    let o = Math.max(es.x, es.y, es.z, .001);
                                    if (N.current = Math.max(.06 * o, .02), t && !n) {
                                        var l;
                                        let n = o / 2 / Math.tan((null !== (l = a.fov) && void 0 !== l ? l : 60) * Math.PI / 360),
                                            t = new er.Vector3(.6, .5, .6).normalize();
                                        a.position.copy(ea).addScaledVector(t, 1.2 * n), a.lookAt(ea), c.update(), g = !0, H = H || e
                                    } else g = !0;
                                    h && C && w && (C.box.copy(ei), C.visible = !0, C.updateMatrixWorld(!0), w.position.copy(ea), w.scale.setScalar(Math.max(.03 * o, .02) / .02), w.visible = !0, console.info("[SparkModelViewer][debug] Box min/max", ei.min.toArray(), ei.max.toArray(), "target", ea.toArray()))
                                } catch (e) {}
                            };
                            let eu = null !== (Y = null !== (G = el.OrbitControls) && void 0 !== G ? G : null === (k = el.default) || void 0 === k ? void 0 : k.OrbitControls) && void 0 !== Y ? Y : el.default,
                                ep = null !== (K = null !== (X = eo.TrackballControls) && void 0 !== X ? X : null === (D = eo.default) || void 0 === D ? void 0 : D.TrackballControls) && void 0 !== K ? K : eo.default;
                            if (e || !j.current) return;
                            let ev = j.current,
                                eh = 90,
                                ex = !0,
                                ef = !1,
                                em = function() {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 90;
                                    eh = Math.max(eh, e)
                                };
                            O.current = em, (m = document.createElement("canvas")).style.width = "100%", m.style.height = "100%", m.style.outline = "none", m.tabIndex = 0, ev.appendChild(m);
                            let eg = m.getContext("webgl2", {
                                antialias: !1,
                                alpha: !0
                            });
                            if (!eg) {
                                let e = Error("WebGL2 not available; cannot render splats");
                                console.error("[SparkModelViewer] " + e.message), U(), null == u || u(e);
                                return
                            }
                            let eC = eg.shaderSource.bind(eg);
                            eg.shaderSource = (e, n) => {
                                let t = n;
                                if ("string" == typeof t && t.includes("sampler3D splatTexture") && !/precision\s+(lowp|mediump|highp)\s+sampler3D/.test(t)) {
                                    let e = t.indexOf("#version");
                                    if (-1 !== e) {
                                        let n = t.indexOf("\n", e); - 1 !== n ? t = t.slice(0, n + 1) + "precision highp sampler3D;\n" + t.slice(n + 1) : t += "\nprecision highp sampler3D;\n"
                                    } else t = "precision highp sampler3D;\n" + t
                                }
                                return eC(e, t)
                            }, "function" != typeof er.BufferAttribute.prototype.addUpdateRange && (er.BufferAttribute.prototype.addUpdateRange = function() {}), (o = new er.WebGLRenderer({
                                canvas: m,
                                context: eg,
                                antialias: !1,
                                alpha: !0
                            })).outputColorSpace = er.SRGBColorSpace, "function" != typeof o.readRenderTargetPixelsAsync && o.readRenderTargetPixels && (o.readRenderTargetPixelsAsync = (e, n, t, l, r, i) => {
                                let a = null != i ? i : new Uint8Array(4 * l * r);
                                try {
                                    return o.readRenderTargetPixels(e, n, t, l, r, a), Promise.resolve(a)
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                            }), i = new er.Scene, h && ((C = new er.Box3Helper(ei, 65280)).visible = !1, Array.isArray(C.material) ? C.material.forEach(e => {
                                e.depthTest = !1, e.depthWrite = !1, e.transparent = !0
                            }) : C.material && (C.material.depthTest = !1, C.material.depthWrite = !1, C.material.transparent = !0), C.renderOrder = 999, i.add(C), (w = new er.Mesh(new er.SphereGeometry(.02, 12, 12), new er.MeshBasicMaterial({
                                color: 16711935,
                                depthTest: !1,
                                depthWrite: !1,
                                transparent: !0
                            }))).visible = !1, w.renderOrder = 999, i.add(w)), (a = new er.PerspectiveCamera(60, 1, .1, 1e3)).position.set(0, 2, 3), a.lookAt(0, 0, 0), r = new J({
                                renderer: o,
                                view: {
                                    camera: a,
                                    sortRadial: !0
                                },
                                autoUpdate: !0,
                                splatEncoding: A
                            }), I.current = r, i.add(r), d = new $({
                                url: n,
                                fileType: p,
                                splatEncoding: A
                            }), W.current = d, d.rotation && (d.rotation.x = T ? Math.PI : 0), i.add(d);
                            let ew = () => {
                                if (!v) {
                                    L = null, V = 0;
                                    return
                                }
                                if (d && en && "function" == typeof en.dynoBlock && (L = "function" == typeof en.dynoFloat ? en.dynoFloat(5) : null)) {
                                    V = 5, L.value = V;
                                    try {
                                        var e;
                                        let n = "function" == typeof en.unindent ? en.unindent.bind(en) : e => e,
                                            t = "function" == typeof en.unindentLines ? en.unindentLines.bind(en) : e => [e];
                                        d.objectModifier = en.dynoBlock({
                                            gsplat: en.Gsplat
                                        }, {
                                            gsplat: en.Gsplat
                                        }, e => {
                                            let {
                                                gsplat: l
                                            } = e;
                                            return {
                                                gsplat: new en.Dyno({
                                                    inTypes: {
                                                        gsplat: en.Gsplat,
                                                        t: "float",
                                                        effectType: "int"
                                                    },
                                                    outTypes: {
                                                        gsplat: en.Gsplat
                                                    },
                                                    globals: () => [n("\n                      // Pseudo-random hash function\n                      vec3 hash(vec3 p) {\n                        p = fract(p * 0.3183099 + 0.1);\n                        p *= 17.0;\n                        return fract(vec3(p.x * p.y * p.z, p.x + p.y * p.z, p.x * p.y + p.z));\n                      }\n\n                      // 3D Perlin-style noise function\n                      vec3 noise(vec3 p) {\n                        vec3 i = floor(p);\n                        vec3 f = fract(p);\n                        f = f * f * (3.0 - 2.0 * f);\n\n                        vec3 n000 = hash(i + vec3(0,0,0));\n                        vec3 n100 = hash(i + vec3(1,0,0));\n                        vec3 n010 = hash(i + vec3(0,1,0));\n                        vec3 n110 = hash(i + vec3(1,1,0));\n                        vec3 n001 = hash(i + vec3(0,0,1));\n                        vec3 n101 = hash(i + vec3(1,0,1));\n                        vec3 n011 = hash(i + vec3(0,1,1));\n                        vec3 n111 = hash(i + vec3(1,1,1));\n\n                        vec3 x0 = mix(n000, n100, f.x);\n                        vec3 x1 = mix(n010, n110, f.x);\n                        vec3 x2 = mix(n001, n101, f.x);\n                        vec3 x3 = mix(n011, n111, f.x);\n\n                        vec3 y0 = mix(x0, x1, f.y);\n                        vec3 y1 = mix(x2, x3, f.y);\n\n                        return mix(y0, y1, f.z);\n                      }\n\n                      // 2D rotation matrix\n                      mat2 rot(float a) {\n                        float s=sin(a),c=cos(a);\n                        return mat2(c,-s,s,c);\n                      }\n\n                      // Twister weather effect\n                      vec4 twister(vec3 pos, vec3 scale, float t) {\n                        vec3 h = hash(pos);\n                        float s = smoothstep(0., 8., t*t*.1 - length(pos.xz)*2.+2.);\n                        if (length(scale) < .05) pos.y = mix(-10., pos.y, pow(s, 2.*h.x));\n                        pos.xz = mix(pos.xz*.5, pos.xz, pow(s, 2.*h.x));\n                        float rotationTime = t * (1.0 - s) * 0.2;\n                        pos.xz *= rot(rotationTime + pos.y*20.*(1.-s)*exp(-1.*length(pos.xz)));\n                        return vec4(pos, s*s*s*s);\n                      }\n\n                      // Rain weather effect\n                      vec4 rain(vec3 pos, vec3 scale, float t) {\n                        vec3 h = hash(pos);\n                        float s = pow(smoothstep(0., 5., t*t*.1 - length(pos.xz)*2. + 1.), .5 + h.x);\n                        float y = pos.y;\n                        pos.y = min(-10. + s*15., pos.y);\n                        pos.xz = mix(pos.xz*.3, pos.xz, s);\n                        pos.xz *= rot(t*.3);\n                        return vec4(pos, smoothstep(-10., y, pos.y));\n                      }\n                    ")],
                                                    statements: e => {
                                                        let {
                                                            inputs: n,
                                                            outputs: l
                                                        } = e;
                                                        return t("\n                      ".concat(l.gsplat, " = ").concat(n.gsplat, ";\n                      float t = ").concat(n.t, ";\n                      float s = smoothstep(0.,10.,t-4.5)*10.;\n                      vec3 scales = ").concat(n.gsplat, ".scales;\n                      vec3 localPos = ").concat(n.gsplat, ".center;\n                      float l = length(localPos.xz);\n\n                      if (").concat(n.effectType, " == 1) {\n                        // Magic Effect: Complex twister with noise and radial reveal\n                        float border = abs(s-l-.5);\n                        localPos *= 1.-.2*exp(-20.*border);\n                        vec3 finalScales = mix(scales,vec3(0.002),smoothstep(s-.5,s,l+.5));\n                        ").concat(l.gsplat, ".center = localPos + .1*noise(localPos.xyz*2.+t*.5)*smoothstep(s-.5,s,l+.5);\n                        ").concat(l.gsplat, ".scales = finalScales;\n                        float at = atan(localPos.x,localPos.z)/3.1416;\n                        ").concat(l.gsplat, ".rgba *= step(at,t-3.1416);\n                        ").concat(l.gsplat, ".rgba += exp(-20.*border) + exp(-50.*abs(t-at-3.1416))*.5;\n\n                      } else if (").concat(n.effectType, " == 2) {\n                        // Spread Effect: Gentle radial emergence with scaling\n                        float tt = t*t*.4+.5;\n                        localPos.xz *= min(1.,.3+max(0.,tt*.05));\n                        ").concat(l.gsplat, ".center = localPos;\n                        ").concat(l.gsplat, ".scales = max(\n                          mix(vec3(0.0),scales,min(tt-7.-l*2.5,1.)),\n                          mix(vec3(0.0),scales*.2,min(tt-1.-l*2.,1.))\n                        );\n                        ").concat(l.gsplat, ".rgba = mix(\n                          vec4(.3),\n                          ").concat(n.gsplat, ".rgba,\n                          clamp(tt-l*2.5-3.,0.,1.)\n                        );\n\n                      } else if (").concat(n.effectType, " == 3) {\n                        // Unroll Effect: Rotating helix with vertical reveal\n                        localPos.xz *= rot((localPos.y*50.-20.)*exp(-t));\n                        ").concat(l.gsplat, ".center = localPos * (1.-exp(-t)*2.);\n                        ").concat(l.gsplat, ".scales = mix(\n                          vec3(0.002),\n                          scales,\n                          smoothstep(.3,.7,t+localPos.y-2.)\n                        );\n                        ").concat(l.gsplat, ".rgba = ").concat(n.gsplat, ".rgba*step(0.,t*.5+localPos.y-.5);\n                      } else if (").concat(n.effectType, " == 4) {\n                        // Twister Effect: swirling weather reveal\n                        vec4 effectResult = twister(localPos, scales, t);\n                        ").concat(l.gsplat, ".center = effectResult.xyz;\n                        ").concat(l.gsplat, ".scales = mix(\n                          vec3(.002),\n                          scales,\n                          pow(effectResult.w, 12.)\n                        );\n                        float s2 = effectResult.w;\n                        float spin = -t * 0.3 * (1.0 - s2);\n                        vec4 spinQ = vec4(0.0, sin(spin*0.5), 0.0, cos(spin*0.5));\n                        ").concat(l.gsplat, ".quaternion = quatQuat(spinQ, ").concat(n.gsplat, ".quaternion);\n                      } else if (").concat(n.effectType, " == 5) {\n                        // Rain Effect: falling streaks\n                        vec4 effectResult = rain(localPos, scales, t);\n                        ").concat(l.gsplat, ".center = effectResult.xyz;\n                        ").concat(l.gsplat, ".scales = mix(\n                          vec3(.005),\n                          scales,\n                          pow(effectResult.w, 30.)\n                        );\n                        float spin = -t*.3;\n                        vec4 spinQ = vec4(0.0, sin(spin*0.5), 0.0, cos(spin*0.5));\n                        ").concat(l.gsplat, ".quaternion = quatQuat(spinQ, ").concat(n.gsplat, ".quaternion);\n                      }\n                    "))
                                                    }
                                                }).apply({
                                                    gsplat: l,
                                                    t: L,
                                                    effectType: en.dynoInt(1)
                                                }).gsplat
                                            }
                                        }), null == d || null === (e = d.updateGenerator) || void 0 === e || e.call(d)
                                    } catch (e) {
                                        console.error("[SparkModelViewer] failed to apply magic effect, falling back", e), L = null, d.objectModifier = void 0
                                    }
                                }
                            };
                            (null == d ? void 0 : null === (F = d.initialized) || void 0 === F ? void 0 : F.then) ? d.initialized.then(() => {
                                H = !0, Z = R, V = 5, em(), requestAnimationFrame(() => {
                                    ew(), q(), em()
                                })
                            }).catch(e => {
                                console.error("[SparkModelViewer] mesh initialization failed", e), U(), null == u || u(e)
                            }): q(), (s = new ee({
                                canvas: m
                            })).fpsMovement.enable = !1, s.pointerControls.enable = !1;
                            let ey = !1 !== f && !!ep,
                                eM = null;
                            if (ey) {
                                (c = new ep(a, m)).rotateSpeed = 2, c.zoomSpeed = 3, c.panSpeed = .8, c.staticMoving = !1, c.dynamicDampingFactor = .15, c.noRotate = !1, c.noZoom = !0, c.noPan = !1, c.noRoll = !1, c.minDistance = 1e-4, c.maxDistance = 1 / 0, c.target.set(0, 0, 0), c.object.up.set(0, 1, 0), eM = () => {
                                    var e;
                                    let {
                                        clientWidth: n,
                                        clientHeight: t
                                    } = ev;
                                    null == c || null === (e = c.handleResize) || void 0 === e || e.call(c, n, t)
                                };
                                let e = new er.Vector3,
                                    n = new er.Vector2,
                                    t = new er.Vector3;
                                y = l => {
                                    var o, r, i;
                                    if (!c || !a || !m) return;
                                    l.preventDefault(), em();
                                    let s = m.getBoundingClientRect();
                                    n.set((l.clientX - s.left) / Math.max(s.width, 1) * 2 - 1, -((l.clientY - s.top) / Math.max(s.height, 1) * 2) + 1), e.set(n.x, n.y, 1).unproject(a).sub(a.position).normalize();
                                    let d = Math.pow(.95, null !== (o = c.zoomSpeed) && void 0 !== o ? o : 1),
                                        u = l.deltaY > 0 ? 1 / d : d,
                                        p = a.position.distanceTo(c.target),
                                        v = Math.max(null !== (r = c.minDistance) && void 0 !== r ? r : 1e-4, Math.min(null !== (i = c.maxDistance) && void 0 !== i ? i : 1 / 0, p * u)),
                                        h = p - v;
                                    !Number.isFinite(h) || 1e-8 > Math.abs(h) || (a.position.addScaledVector(e, h), t.set(0, 0, -1).applyQuaternion(a.quaternion), c.target.copy(a.position).addScaledVector(t, v), c.update())
                                }, m.addEventListener("wheel", y, {
                                    passive: !1
                                })
                            } else eu ? ((c = new eu(a, m)).enableDamping = !0, c.enablePan = !0, c.enableZoom = !0, c.zoomToCursor = !0, c.zoomSpeed = 3, c.minDistance = 1e-4, c.maxDistance = 1 / 0, c.minPolarAngle = 0, c.maxPolarAngle = Math.PI, c.enableRotate = !0, c.target.set(0, 0, 0), y = e => {
                                var n;
                                if (!(null == c ? void 0 : null === (n = c.mouse) || void 0 === n ? void 0 : n.set) || !m) return;
                                e.preventDefault(), em();
                                let t = m.getBoundingClientRect(),
                                    l = (e.clientX - t.left) / t.width * 2 - 1,
                                    o = -((e.clientY - t.top) / t.height * 2) + 1;
                                c.mouse.set(l, o)
                            }, m.addEventListener("wheel", y, {
                                passive: !1
                            })) : s.pointerControls.enable = !0;
                            let eb = () => {
                                var e, n, t;
                                if (!ev || !o || !a) return;
                                let {
                                    clientWidth: l,
                                    clientHeight: i
                                } = ev;
                                if (0 === l || 0 === i) return;
                                let s = S ? Math.min(window.devicePixelRatio || 1, 2) : 1;
                                o.setPixelRatio(s), o.setSize(l, i, !1), a.aspect = l / Math.max(i, 1), a.updateProjectionMatrix(), (null == r ? void 0 : null === (t = r.uniforms) || void 0 === t ? void 0 : null === (n = t.renderSize) || void 0 === n ? void 0 : null === (e = n.value) || void 0 === e ? void 0 : e.set) && r.uniforms.renderSize.value.set(l, i), null == eM || eM(), em()
                            };
                            if ((l = new ResizeObserver(eb)).observe(ev), eb(), !B) {
                                let {
                                    clientWidth: e,
                                    clientHeight: n
                                } = ev;
                                B = !0
                            }(M = new IntersectionObserver(e => {
                                var n;
                                let t = e[e.length - 1];
                                (ex = null === (n = null == t ? void 0 : t.isIntersecting) || void 0 === n || n) && em()
                            }, {
                                threshold: 0
                            })).observe(ev);
                            let ej = () => {
                                document.hidden || em()
                            };
                            document.addEventListener("visibilitychange", ej), b = () => document.removeEventListener("visibilitychange", ej);
                            let ez = () => {
                                    ef = !0, em()
                                },
                                ek = () => {
                                    ef && em()
                                },
                                eL = () => {
                                    ef = !1, em()
                                },
                                eV = () => em();
                            m.addEventListener("pointerdown", ez), m.addEventListener("pointermove", ek), m.addEventListener("keydown", eV), window.addEventListener("pointerup", eL), z = () => {
                                null == m || m.removeEventListener("pointerdown", ez), null == m || m.removeEventListener("pointermove", ek), null == m || m.removeEventListener("keydown", eV), window.removeEventListener("pointerup", eL)
                            };
                            let eH = !1,
                                eS = () => {
                                    var n, l, u, p, v;
                                    if (e) return;
                                    t = requestAnimationFrame(eS), R += 1;
                                    let x = !!L;
                                    if (!(ex && !document.hidden && (x || !H || !g || eh > 0 || !S))) return;
                                    eh > 0 && (eh -= 1), L && (H ? (V += 1 / 60, L.value = V) : L.value = 0, null == d || null === (p = d.updateVersion) || void 0 === p || p.call(d)), c || s.update(a), !g && H ? q() : h && R % 30 == 0 && q({
                                        helpersOnly: !0,
                                        updateCamera: !1
                                    }), null == c || null === (n = c.update) || void 0 === n || n.call(c), a.updateMatrixWorld(), r.viewpoint.camera = a;
                                    let f = r.update({
                                        scene: i,
                                        viewToWorld: a.matrixWorld
                                    });
                                    (null == f ? void 0 : f.catch) && !eH && (eH = !0, f.catch(e => {
                                        console.error("[SparkModelViewer] spark.update failed", e), U(), Q()
                                    })), o.render(i, a), S || (P = !0);
                                    let m = null !== (v = null === (u = o.info) || void 0 === u ? void 0 : null === (l = u.render) || void 0 === l ? void 0 : l.calls) && void 0 !== v ? v : 0;
                                    H && !E && P && m > 0 ? (E = !0, U()) : !E && null !== Z && R - Z > 300 && (E = !0, console.warn("[SparkModelViewer] Timed out waiting for splat render, hiding loader."), U()), S = !0
                                };
                            eS()
                        } catch (n) {
                            e || (console.error("SparkModelViewer failed to initialize", n), null == u || u(n), U())
                        }
                    })().then(() => {
                        e || (_.current = e => q(e), G.current = () => {
                            g = !1
                        })
                    }), Q
                }, [u, n, p, v, h, f, T]), (0, o.useEffect)(() => {
                    var e, n;
                    D.current = E, F.current = R;
                    let t = {
                        lnScaleMin: E,
                        lnScaleMax: R
                    };
                    I.current && (I.current.splatEncoding = t, I.current.needsUpdate = !0);
                    let l = W.current;
                    (null == l ? void 0 : l.packedSplats) && (l.packedSplats.splatEncoding = t, l.packedSplats.needsUpdate = !0, null === (n = l.updateGenerator) || void 0 === n || n.call(l)), null === (e = O.current) || void 0 === e || e.call(O)
                }, [E, R]), (0, o.useEffect)(() => {
                    var e, n, t;
                    let l = W.current;
                    (null == l ? void 0 : l.rotation) && (l.rotation.x = T ? Math.PI : 0), null === (e = G.current) || void 0 === e || e.call(G), null === (n = _.current) || void 0 === n || n.call(_, {
                        updateCamera: !1
                    }), null === (t = O.current) || void 0 === t || t.call(O)
                }, [T]), (0, l.jsxs)("div", {
                    ref: j,
                    className: (0, a.cn)("relative size-full overflow-hidden rounded-3xl", z ? "bg-black" : "bg-white", t),
                    children: [z || m ? null : (0, l.jsx)(s.zF, {
                        open: Z,
                        onOpenChange: A,
                        className: "absolute left-3 top-3 z-20 w-56 text-gray-900",
                        children: (0, l.jsxs)("div", {
                            className: "rounded-lg border border-gray-200 bg-white/90 backdrop-blur",
                            children: [(0, l.jsx)(s.wy, {
                                asChild: !0,
                                children: (0, l.jsxs)("button", {
                                    className: "flex w-full items-center justify-between px-3 py-2 text-left",
                                    children: [(0, l.jsx)("span", {
                                        className: "text-sm font-medium",
                                        children: "Settings"
                                    }), Z ? (0, l.jsx)(r.Z, {
                                        className: "size-4 text-gray-600"
                                    }) : (0, l.jsx)(i.Z, {
                                        className: "size-4 text-gray-600"
                                    })]
                                })
                            }), (0, l.jsx)(s.Fw, {
                                className: "border-t border-gray-200 p-3",
                                children: (0, l.jsx)(d.I, {
                                    lnScaleMin: E,
                                    lnScaleMax: R,
                                    flipSplat: T,
                                    onLnScaleMinChange: null != y ? y : V,
                                    onLnScaleMaxChange: null != M ? M : S,
                                    onFlipSplatChange: null != b ? b : P
                                })
                            })]
                        })
                    }), z ? (0, l.jsx)("div", {
                        className: "pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-b from-black via-black/80 to-black/40",
                        children: (0, l.jsxs)("div", {
                            className: "flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 shadow-[0_0_40px_rgba(96,165,250,0.35)] backdrop-blur",
                            children: [(0, l.jsx)(c.P.spinner, {
                                className: "size-5 animate-spin text-sky-300"
                            }), (0, l.jsx)("span", {
                                className: "text-sm font-medium",
                                children: "Initializing..."
                            })]
                        })
                    }) : null]
                })
            }

            function m() {
                x()
            }
        },
        5037: function(e, n, t) {
            t.d(n, {
                P: function() {
                    return c
                }
            });
            var l = t(57437),
                o = t(72583),
                r = t(97226),
                i = t(42351),
                a = t(54001),
                s = t(29985);
            let c = {
                sun: o.Z,
                moon: r.Z,
                twitter: i.Z,
                key: a.Z,
                link: s.Z,
                logo: e => (0, l.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, l.jsx)("path", {
                        fill: "currentColor",
                        d: "M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
                    })
                }),
                logoA: e => (0, l.jsxs)("svg", {
                    viewBox: "0 0 1.6 1.6",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true",
                    role: "img",
                    preserveAspectRatio: "xMidYMid meet",
                    ...e,
                    children: [(0, l.jsx)("path", {
                        d: "M0.707 0.75h0.186l-0.093 -0.248z",
                        fill: "currentColor"
                    }), (0, l.jsx)("path", {
                        d: "M1.3 0.05H0.3C0.162 0.05 0.05 0.162 0.05 0.3v1c0 0.138 0.112 0.25 0.25 0.25h1c0.138 0 0.25 -0.112 0.25 -0.25V0.3c0 -0.138 -0.112 -0.25 -0.25 -0.25M1.043 1.15l-0.105 -0.28h-0.277L0.557 1.15H0.425l0.3 -0.8h0.15L1.175 1.15z",
                        fill: "currentColor"
                    })]
                }),
                gitHub: e => (0, l.jsx)("svg", {
                    viewBox: "0 0 438.549 438.549",
                    ...e,
                    children: (0, l.jsx)("path", {
                        fill: "#333",
                        d: "M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                    })
                }),
                home: e => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    ...e,
                    children: [(0, l.jsx)("path", {
                        d: "M4.5002 12.8335H11.5002C12.2366 12.8335 12.8335 12.2365 12.8335 11.5001V6.50016L8.00018 3.16682L3.16687 6.50016V11.5001C3.16687 12.2365 3.76383 12.8335 4.5002 12.8335Z",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, l.jsx)("path", {
                        d: "M6.49976 10.4995C6.49976 9.76313 7.09674 9.1662 7.83307 9.1662H8.1664C8.9028 9.1662 9.49974 9.76313 9.49974 10.4995V12.8329H6.49976V10.4995Z",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                }),
                radix: e => (0, l.jsxs)("svg", {
                    viewBox: "0 0 25 25",
                    fill: "none",
                    ...e,
                    children: [(0, l.jsx)("path", {
                        d: "M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z",
                        fill: "currentcolor"
                    }), (0, l.jsx)("path", {
                        d: "M12 0H4V8H12V0Z",
                        fill: "currentcolor"
                    }), (0, l.jsx)("path", {
                        d: "M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z",
                        fill: "currentcolor"
                    })]
                }),
                aria: e => (0, l.jsx)("svg", {
                    role: "img",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    ...e,
                    children: (0, l.jsx)("path", {
                        d: "M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z"
                    })
                }),
                npm: e => (0, l.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, l.jsx)("path", {
                        d: "M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z",
                        fill: "currentColor"
                    })
                }),
                yarn: e => (0, l.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, l.jsx)("path", {
                        d: "M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z",
                        fill: "currentColor"
                    })
                }),
                pnpm: e => (0, l.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, l.jsx)("path", {
                        d: "M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z",
                        fill: "currentColor"
                    })
                }),
                react: e => (0, l.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, l.jsx)("path", {
                        d: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z",
                        fill: "currentColor"
                    })
                }),
                tailwind: e => (0, l.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, l.jsx)("path", {
                        d: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
                        fill: "currentColor"
                    })
                }),
                google: e => (0, l.jsxs)("svg", {
                    role: "img",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, l.jsx)("path", {
                        fill: "#4285F4",
                        d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    }), (0, l.jsx)("path", {
                        fill: "#34A853",
                        d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    }), (0, l.jsx)("path", {
                        fill: "#FBBC05",
                        d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    }), (0, l.jsx)("path", {
                        fill: "#EA4335",
                        d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    })]
                }),
                microsoft: e => (0, l.jsxs)("svg", {
                    role: "img",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, l.jsx)("path", {
                        fill: "#F25022",
                        d: "M11.4 11.4H0V0h11.4v11.4z"
                    }), (0, l.jsx)("path", {
                        fill: "#00A4EF",
                        d: "M24 11.4H12.6V0H24v11.4z"
                    }), (0, l.jsx)("path", {
                        fill: "#7FBA00",
                        d: "M11.4 24H0V12.6h11.4V24z"
                    }), (0, l.jsx)("path", {
                        fill: "#FFB900",
                        d: "M24 24H12.6V12.6H24V24z"
                    })]
                }),
                apple: e => (0, l.jsx)("svg", {
                    role: "img",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, l.jsx)("path", {
                        d: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701",
                        fill: "currentColor"
                    })
                }),
                paypal: e => (0, l.jsx)("svg", {
                    role: "img",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, l.jsx)("path", {
                        d: "M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z",
                        fill: "currentColor"
                    })
                }),
                pdf: e => (0, l.jsx)("svg", {
                    ...e,
                    viewBox: "0 0 482.14 482.14",
                    children: (0, l.jsxs)("g", {
                        children: [(0, l.jsx)("path", {
                            fill: "currentColor",
                            d: "M142.024,310.194c0-8.007-5.556-12.782-15.359-12.782c-4.003,0-6.714,0.395-8.132,0.773v25.69 c1.679,0.378,3.743,0.504,6.588,0.504C135.57,324.379,142.024,319.1,142.024,310.194z"
                        }), " ", (0, l.jsx)("path", {
                            fill: "currentColor",
                            d: "M202.709,297.681c-4.39,0-7.227,0.379-8.905,0.772v56.896c1.679,0.394,4.39,0.394,6.841,0.394 c17.809,0.126,29.424-9.677,29.424-30.449C230.195,307.231,219.611,297.681,202.709,297.681z"
                        }), " ", (0, l.jsx)("path", {
                            fill: "currentColor",
                            d: "M315.458,0H121.811c-28.29,0-51.315,23.041-51.315,51.315v189.754h-5.012c-11.418,0-20.678,9.251-20.678,20.679v125.404 c0,11.427,9.259,20.677,20.678,20.677h5.012v22.995c0,28.305,23.025,51.315,51.315,51.315h264.223 c28.272,0,51.3-23.011,51.3-51.315V121.449L315.458,0z M99.053,284.379c6.06-1.024,14.578-1.796,26.579-1.796 c12.128,0,20.772,2.315,26.58,6.965c5.548,4.382,9.292,11.615,9.292,20.127c0,8.51-2.837,15.745-7.999,20.646 c-6.714,6.32-16.643,9.157-28.258,9.157c-2.585,0-4.902-0.128-6.714-0.379v31.096H99.053V284.379z M386.034,450.713H121.811 c-10.954,0-19.874-8.92-19.874-19.889v-22.995h246.31c11.42,0,20.679-9.25,20.679-20.677V261.748 c0-11.428-9.259-20.679-20.679-20.679h-246.31V51.315c0-10.938,8.921-19.858,19.874-19.858l181.89-0.19v67.233 c0,19.638,15.934,35.587,35.587,35.587l65.862-0.189l0.741,296.925C405.891,441.793,396.987,450.713,386.034,450.713z M174.065,369.801v-85.422c7.225-1.15,16.642-1.796,26.58-1.796c16.516,0,27.226,2.963,35.618,9.282 c9.031,6.714,14.704,17.416,14.704,32.781c0,16.643-6.06,28.133-14.453,35.224c-9.157,7.612-23.096,11.222-40.125,11.222 C186.191,371.092,178.966,370.446,174.065,369.801z M314.892,319.226v15.996h-31.23v34.973h-19.74v-86.966h53.16v16.122h-33.42 v19.875H314.892z"
                        }), " "]
                    })
                }),
                spinner: e => (0, l.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    ...e,
                    children: (0, l.jsx)("path", {
                        d: "M21 12a9 9 0 1 1-6.219-8.56"
                    })
                }),
                audio: e => (0, l.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    ...e,
                    children: [(0, l.jsx)("path", {
                        d: "M2 10v3"
                    }), (0, l.jsx)("path", {
                        d: "M6 6v11"
                    }), (0, l.jsx)("path", {
                        d: "M10 3v18"
                    }), (0, l.jsx)("path", {
                        d: "M14 8v7"
                    }), (0, l.jsx)("path", {
                        d: "M18 5v13"
                    }), (0, l.jsx)("path", {
                        d: "M22 10v3"
                    })]
                }),
                audioLines: e => (0, l.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    ...e,
                    children: [(0, l.jsx)("path", {
                        d: "M2 10v3"
                    }), (0, l.jsx)("path", {
                        d: "M6 6v11"
                    }), (0, l.jsx)("path", {
                        d: "M10 3v18"
                    }), (0, l.jsx)("path", {
                        d: "M14 8v7"
                    }), (0, l.jsx)("path", {
                        d: "M18 5v13"
                    }), (0, l.jsx)("path", {
                        d: "M22 10v3"
                    })]
                }),
                request: e => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, l.jsx)("path", {
                        d: "M6.16663 4.66667C6.16663 5.4951 5.49505 6.16667 4.66663 6.16667C3.8382 6.16667 3.16663 5.4951 3.16663 4.66667C3.16663 3.83825 3.8382 3.16667 4.66663 3.16667C5.49505 3.16667 6.16663 3.83825 6.16663 4.66667Z",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, l.jsx)("path", {
                        d: "M6.16663 11.3333C6.16663 12.1617 5.49505 12.8333 4.66663 12.8333C3.8382 12.8333 3.16663 12.1617 3.16663 11.3333C3.16663 10.5049 3.8382 9.83333 4.66663 9.83333C5.49505 9.83333 6.16663 10.5049 6.16663 11.3333Z",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, l.jsx)("path", {
                        d: "M12.8334 11.3333C12.8334 12.1617 12.1618 12.8333 11.3334 12.8333C10.505 12.8333 9.83337 12.1617 9.83337 11.3333C9.83337 10.5049 10.505 9.83333 11.3334 9.83333C12.1618 9.83333 12.8334 10.5049 12.8334 11.3333Z",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, l.jsx)("path", {
                        d: "M4.5 6.33333V9.5",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, l.jsx)("path", {
                        d: "M11.5 9.49999V6.98006C11.5 6.55961 11.3676 6.14988 11.1214 5.80905L9.33337 3.33333",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, l.jsx)("path", {
                        d: "M9.16663 5.5V3.16667H11.5",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                }),
                settings: e => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, l.jsx)("path", {
                        d: "M8.74603 3.74225C8.70049 3.41238 8.41856 3.16667 8.08563 3.16667H7.91429C7.58136 3.16667 7.29943 3.41238 7.25389 3.74225L7.19583 4.16341C7.15876 4.43211 6.96016 4.64598 6.70809 4.74615C6.67063 4.76104 6.63343 4.77657 6.59661 4.79271C6.34807 4.90161 6.05621 4.89227 5.83913 4.72947L5.63409 4.57568C5.36867 4.37662 4.99727 4.40301 4.76268 4.63761L4.63757 4.76273C4.40297 4.99732 4.37657 5.36871 4.57563 5.63413L4.72942 5.83918C4.89223 6.05625 4.90156 6.34811 4.79266 6.59665C4.77652 6.63348 4.761 6.67067 4.74611 6.70814C4.64594 6.9602 4.43206 7.15881 4.16337 7.19587L3.7422 7.25394C3.41233 7.29947 3.16663 7.58134 3.16663 7.91434V8.08567C3.16663 8.41861 3.41233 8.70054 3.7422 8.74607L4.16337 8.80414C4.43206 8.84121 4.64594 9.03981 4.74611 9.29187C4.761 9.32934 4.77652 9.36654 4.79266 9.40334C4.90156 9.65187 4.89223 9.94374 4.72942 10.1608L4.57563 10.3659C4.37657 10.6313 4.40297 11.0027 4.63756 11.2373L4.76268 11.3624C4.99727 11.597 5.36867 11.6234 5.63408 11.4243L5.83913 11.2705C6.05621 11.1077 6.34807 11.0984 6.5966 11.2073C6.63343 11.2235 6.67063 11.2389 6.70809 11.2539C6.96016 11.354 7.15876 11.5679 7.19583 11.8366L7.25389 12.2577C7.29943 12.5876 7.58136 12.8333 7.91429 12.8333H8.08563C8.41856 12.8333 8.70049 12.5876 8.74603 12.2577L8.80409 11.8366C8.84116 11.5679 9.03976 11.354 9.29183 11.2539C9.32929 11.2389 9.36649 11.2235 9.40329 11.2073C9.65183 11.0984 9.94369 11.1077 10.1608 11.2705L10.3658 11.4243C10.6312 11.6234 11.0026 11.597 11.2372 11.3624L11.3624 11.2373C11.597 11.0027 11.6234 10.6313 11.4243 10.3659L11.2705 10.1608C11.1077 9.94374 11.0984 9.65187 11.2073 9.40334C11.2234 9.36654 11.2389 9.32934 11.2538 9.29187C11.354 9.03981 11.5679 8.84121 11.8366 8.80414L12.2577 8.74607C12.5876 8.70054 12.8333 8.41861 12.8333 8.08567V7.91434C12.8333 7.58141 12.5876 7.29947 12.2577 7.25394L11.8366 7.19587C11.5679 7.15881 11.354 6.9602 11.2538 6.70814C11.2389 6.67067 11.2234 6.63348 11.2072 6.59665C11.0984 6.34811 11.1077 6.05625 11.2705 5.83917L11.4243 5.63414C11.6234 5.36872 11.597 4.99733 11.3624 4.76274L11.2372 4.63762C11.0026 4.40303 10.6312 4.37663 10.3658 4.57569L10.1608 4.72947C9.94369 4.89228 9.65183 4.90161 9.40329 4.79271C9.36649 4.77657 9.32929 4.76104 9.29183 4.74615C9.03976 4.64598 8.84116 4.43211 8.80409 4.16341L8.74603 3.74225Z",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, l.jsx)("path", {
                        d: "M8.83329 8.00001C8.83329 8.46027 8.46023 8.83334 7.99996 8.83334C7.53969 8.83334 7.16663 8.46027 7.16663 8.00001C7.16663 7.53974 7.53969 7.16667 7.99996 7.16667C8.46023 7.16667 8.83329 7.53974 8.83329 8.00001Z",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                }),
                billing: e => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, l.jsx)("path", {
                        d: "M3.16663 5.16666C3.16663 4.43028 3.76358 3.83333 4.49996 3.83333H11.5C12.2364 3.83333 12.8333 4.43028 12.8333 5.16666V10.8333C12.8333 11.5697 12.2364 12.1667 11.5 12.1667H4.49996C3.76358 12.1667 3.16663 11.5697 3.16663 10.8333V5.16666Z",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, l.jsx)("path", {
                        d: "M3.33337 6.83333H12.6667",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, l.jsx)("path", {
                        d: "M5.16663 9.5H6.83329",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, l.jsx)("path", {
                        d: "M10.5 9.5H10.8333",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                }),
                vlm: e => (0, l.jsxs)("svg", {
                    width: "38",
                    height: "38",
                    viewBox: "0 0 27 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, l.jsx)("path", {
                        d: "M1.61916 2.48095C1.61916 1.11076 2.72991 0 4.1001 0H7.33842V1.65397H4.1001C3.64337 1.65397 3.27312 2.02422 3.27312 2.48095V8.97498C3.27312 9.43171 2.90287 9.80196 2.44614 9.80196L2.44614 10.198C2.90287 10.198 3.27312 10.5683 3.27312 11.025V17.5191C3.27312 17.9758 3.64337 18.346 4.1001 18.346H7.33842V20H4.1001C2.72991 20 1.61916 18.8892 1.61916 17.5191V10.827H0V9.17302H1.61916V2.48095Z",
                        fill: e.color
                    }), (0, l.jsx)("path", {
                        d: "M6.84154 9.37968L5.00564 4.27884H6.50413L7.73468 7.95065L8.94539 4.27884H10.4141L8.57821 9.37968H6.84154Z",
                        fill: e.color
                    }), (0, l.jsx)("path", {
                        d: "M10.682 9.37968V2.43302H12.0812V9.37968H10.682Z",
                        fill: e.color
                    }), (0, l.jsx)("path", {
                        d: "M18.961 4.2193C20.0129 4.2193 20.8465 4.81473 20.8465 6.45216V9.37968H19.4472V6.53155C19.4472 5.76741 19.1694 5.37046 18.564 5.37046C17.9587 5.37046 17.5518 5.81703 17.5518 6.59109V9.37968H16.1525V6.53155C16.1525 5.76741 15.8747 5.37046 15.2594 5.37046C14.6541 5.37046 14.2571 5.83688 14.2571 6.60101V9.37968H12.8578V4.27884H14.0785L14.2075 4.91397C14.5151 4.51702 14.9617 4.22923 15.706 4.2193C16.3312 4.20938 16.9167 4.43763 17.2342 5.08267C17.5915 4.53686 18.1869 4.2193 18.961 4.2193Z",
                        fill: e.color
                    }), (0, l.jsx)("path", {
                        d: "M8.99974 11.3082H9.23791V12.5784H8.68217C7.84857 12.5784 7.53101 13.1342 7.53101 13.9082V16.409H6.13176V11.3082H7.402L7.53101 12.0723C7.80888 11.6158 8.20583 11.3082 8.99974 11.3082Z",
                        fill: e.color
                    }), (0, l.jsx)("path", {
                        d: "M13.0683 13.8586V11.3082H14.4675V16.409H13.227L13.098 15.7938C12.7705 16.1907 12.324 16.4686 11.5995 16.4686C10.5476 16.4686 9.57508 15.9426 9.57508 14.1365V11.3082H10.9743V13.9479C10.9743 14.8609 11.2721 15.3075 11.9667 15.3075C12.6614 15.3075 13.0683 14.8014 13.0683 13.8586Z",
                        fill: e.color
                    }), (0, l.jsx)("path", {
                        d: "M18.1694 11.2487C19.2709 11.2487 20.2137 11.8342 20.2137 13.5808V16.409H18.8144V13.7197C18.8144 12.8563 18.487 12.3998 17.7824 12.3998C17.0579 12.3998 16.6411 12.9159 16.6411 13.7991V16.409H15.2419V11.3082H16.4625L16.5915 11.9433C16.919 11.5464 17.3854 11.2487 18.1694 11.2487Z",
                        fill: e.color
                    }), (0, l.jsx)("path", {
                        d: "M24.6354 2.48095C24.6354 1.11076 23.5247 0 22.1545 0H18.9162V1.65397H22.1545C22.6112 1.65397 22.9815 2.02422 22.9815 2.48095V8.97498C22.9815 9.43171 23.3517 9.80196 23.8085 9.80196V10.198C23.3517 10.198 22.9815 10.5683 22.9815 11.025V17.5191C22.9815 17.9758 22.6112 18.346 22.1545 18.346H18.9162V20H22.1545C23.5247 20 24.6354 18.8892 24.6354 17.5191V10.827H26.2546V9.17302H24.6354V2.48095Z",
                        fill: e.color
                    })]
                })
            }
        }
    }
]);