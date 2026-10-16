try {
    ! function() {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "769443e5-bbfc-4274-a0ff-caeda2fd2661", t._sentryDebugIdIdentifier = "sentry-dbid-769443e5-bbfc-4274-a0ff-caeda2fd2661")
    }()
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [75651], {
        43194: function(module, __unused_webpack_exports, __webpack_require__) {
            var Buffer = __webpack_require__(82957).Buffer,
                process = __webpack_require__(25566);
            ! function(t, e) {
                module.exports = e()
            }(globalThis, () => (() => {
                "use strict";
                var __webpack_modules__ = [, (t, e) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.VerbosityLevel = e.Util = e.UnknownErrorException = e.UnexpectedResponseException = e.TextRenderingMode = e.RenderingIntentFlag = e.PromiseCapability = e.PermissionFlag = e.PasswordResponses = e.PasswordException = e.PageActionEventType = e.OPS = e.MissingPDFException = e.MAX_IMAGE_SIZE_TO_CACHE = e.LINE_FACTOR = e.LINE_DESCENT_FACTOR = e.InvalidPDFException = e.ImageKind = e.IDENTITY_MATRIX = e.FormatError = e.FeatureTest = e.FONT_IDENTITY_MATRIX = e.DocumentActionEventType = e.CMapCompressionType = e.BaseException = e.BASELINE_FACTOR = e.AnnotationType = e.AnnotationStateModelType = e.AnnotationReviewState = e.AnnotationReplyType = e.AnnotationMode = e.AnnotationMarkedState = e.AnnotationFlag = e.AnnotationFieldFlag = e.AnnotationEditorType = e.AnnotationEditorPrefix = e.AnnotationEditorParamsType = e.AnnotationBorderStyleType = e.AnnotationActionEventType = e.AbortException = void 0, e.assert = N, e.bytesToString = K, e.createValidAbsoluteUrl = B, e.getModificationDate = tc, e.getVerbosityLevel = O, e.info = I, e.isArrayBuffer = th, e.isArrayEqual = td, e.normalizeUnicode = tf, e.objectFromMap = Z, e.objectSize = Q, e.setVerbosityLevel = F, e.shadow = U, e.string32 = J, e.stringToBytes = Y, e.stringToPDFString = tn, e.stringToUTF8String = to, e.unreachable = L, e.utf8StringToString = tl, e.warn = D;
                        let i = [1, 0, 0, 1, 0, 0];
                        e.IDENTITY_MATRIX = i;
                        let s = [.001, 0, 0, .001, 0, 0];
                        e.FONT_IDENTITY_MATRIX = s;
                        let r = 1e7;
                        e.MAX_IMAGE_SIZE_TO_CACHE = r;
                        let a = 1.35;
                        e.LINE_FACTOR = a;
                        let n = .35;
                        e.LINE_DESCENT_FACTOR = n;
                        let o = n / a;
                        e.BASELINE_FACTOR = o;
                        let l = {
                            ANY: 1,
                            DISPLAY: 2,
                            PRINT: 4,
                            SAVE: 8,
                            ANNOTATIONS_FORMS: 16,
                            ANNOTATIONS_STORAGE: 32,
                            ANNOTATIONS_DISABLE: 64,
                            OPLIST: 256
                        };
                        e.RenderingIntentFlag = l;
                        let h = {
                            DISABLE: 0,
                            ENABLE: 1,
                            ENABLE_FORMS: 2,
                            ENABLE_STORAGE: 3
                        };
                        e.AnnotationMode = h;
                        let d = "pdfjs_internal_editor_";
                        e.AnnotationEditorPrefix = d;
                        let c = {
                            DISABLE: -1,
                            NONE: 0,
                            FREETEXT: 3,
                            INK: 15
                        };
                        e.AnnotationEditorType = c;
                        let u = {
                            FREETEXT_SIZE: 1,
                            FREETEXT_COLOR: 2,
                            FREETEXT_OPACITY: 3,
                            INK_COLOR: 11,
                            INK_THICKNESS: 12,
                            INK_OPACITY: 13
                        };
                        e.AnnotationEditorParamsType = u;
                        let p = {
                            PRINT: 4,
                            MODIFY_CONTENTS: 8,
                            COPY: 16,
                            MODIFY_ANNOTATIONS: 32,
                            FILL_INTERACTIVE_FORMS: 256,
                            COPY_FOR_ACCESSIBILITY: 512,
                            ASSEMBLE: 1024,
                            PRINT_HIGH_QUALITY: 2048
                        };
                        e.PermissionFlag = p;
                        let g = {
                            FILL: 0,
                            STROKE: 1,
                            FILL_STROKE: 2,
                            INVISIBLE: 3,
                            FILL_ADD_TO_PATH: 4,
                            STROKE_ADD_TO_PATH: 5,
                            FILL_STROKE_ADD_TO_PATH: 6,
                            ADD_TO_PATH: 7,
                            FILL_STROKE_MASK: 3,
                            ADD_TO_PATH_FLAG: 4
                        };
                        e.TextRenderingMode = g;
                        let f = {
                            GRAYSCALE_1BPP: 1,
                            RGB_24BPP: 2,
                            RGBA_32BPP: 3
                        };
                        e.ImageKind = f;
                        let m = {
                            TEXT: 1,
                            LINK: 2,
                            FREETEXT: 3,
                            LINE: 4,
                            SQUARE: 5,
                            CIRCLE: 6,
                            POLYGON: 7,
                            POLYLINE: 8,
                            HIGHLIGHT: 9,
                            UNDERLINE: 10,
                            SQUIGGLY: 11,
                            STRIKEOUT: 12,
                            STAMP: 13,
                            CARET: 14,
                            INK: 15,
                            POPUP: 16,
                            FILEATTACHMENT: 17,
                            SOUND: 18,
                            MOVIE: 19,
                            WIDGET: 20,
                            SCREEN: 21,
                            PRINTERMARK: 22,
                            TRAPNET: 23,
                            WATERMARK: 24,
                            THREED: 25,
                            REDACT: 26
                        };
                        e.AnnotationType = m;
                        let b = {
                            MARKED: "Marked",
                            REVIEW: "Review"
                        };
                        e.AnnotationStateModelType = b;
                        let A = {
                            MARKED: "Marked",
                            UNMARKED: "Unmarked"
                        };
                        e.AnnotationMarkedState = A;
                        let v = {
                            ACCEPTED: "Accepted",
                            REJECTED: "Rejected",
                            CANCELLED: "Cancelled",
                            COMPLETED: "Completed",
                            NONE: "None"
                        };
                        e.AnnotationReviewState = v;
                        let y = {
                            GROUP: "Group",
                            REPLY: "R"
                        };
                        e.AnnotationReplyType = y;
                        let _ = {
                            INVISIBLE: 1,
                            HIDDEN: 2,
                            PRINT: 4,
                            NOZOOM: 8,
                            NOROTATE: 16,
                            NOVIEW: 32,
                            READONLY: 64,
                            LOCKED: 128,
                            TOGGLENOVIEW: 256,
                            LOCKEDCONTENTS: 512
                        };
                        e.AnnotationFlag = _;
                        let S = {
                            READONLY: 1,
                            REQUIRED: 2,
                            NOEXPORT: 4,
                            MULTILINE: 4096,
                            PASSWORD: 8192,
                            NOTOGGLETOOFF: 16384,
                            RADIO: 32768,
                            PUSHBUTTON: 65536,
                            COMBO: 131072,
                            EDIT: 262144,
                            SORT: 524288,
                            FILESELECT: 1048576,
                            MULTISELECT: 2097152,
                            DONOTSPELLCHECK: 4194304,
                            DONOTSCROLL: 8388608,
                            COMB: 16777216,
                            RICHTEXT: 33554432,
                            RADIOSINUNISON: 33554432,
                            COMMITONSELCHANGE: 67108864
                        };
                        e.AnnotationFieldFlag = S;
                        let C = {
                            SOLID: 1,
                            DASHED: 2,
                            BEVELED: 3,
                            INSET: 4,
                            UNDERLINE: 5
                        };
                        e.AnnotationBorderStyleType = C;
                        let x = {
                            E: "Mouse Enter",
                            X: "Mouse Exit",
                            D: "Mouse Down",
                            U: "Mouse Up",
                            Fo: "Focus",
                            Bl: "Blur",
                            PO: "PageOpen",
                            PC: "PageClose",
                            PV: "PageVisible",
                            PI: "PageInvisible",
                            K: "Keystroke",
                            F: "Format",
                            V: "Validate",
                            C: "Calculate"
                        };
                        e.AnnotationActionEventType = x;
                        let E = {
                            WC: "WillClose",
                            WS: "WillSave",
                            DS: "DidSave",
                            WP: "WillPrint",
                            DP: "DidPrint"
                        };
                        e.DocumentActionEventType = E;
                        let T = {
                            O: "PageOpen",
                            C: "PageClose"
                        };
                        e.PageActionEventType = T;
                        let P = {
                            ERRORS: 0,
                            WARNINGS: 1,
                            INFOS: 5
                        };
                        e.VerbosityLevel = P;
                        let M = {
                            NONE: 0,
                            BINARY: 1
                        };
                        e.CMapCompressionType = M;
                        let w = {
                            dependency: 1,
                            setLineWidth: 2,
                            setLineCap: 3,
                            setLineJoin: 4,
                            setMiterLimit: 5,
                            setDash: 6,
                            setRenderingIntent: 7,
                            setFlatness: 8,
                            setGState: 9,
                            save: 10,
                            restore: 11,
                            transform: 12,
                            moveTo: 13,
                            lineTo: 14,
                            curveTo: 15,
                            curveTo2: 16,
                            curveTo3: 17,
                            closePath: 18,
                            rectangle: 19,
                            stroke: 20,
                            closeStroke: 21,
                            fill: 22,
                            eoFill: 23,
                            fillStroke: 24,
                            eoFillStroke: 25,
                            closeFillStroke: 26,
                            closeEOFillStroke: 27,
                            endPath: 28,
                            clip: 29,
                            eoClip: 30,
                            beginText: 31,
                            endText: 32,
                            setCharSpacing: 33,
                            setWordSpacing: 34,
                            setHScale: 35,
                            setLeading: 36,
                            setFont: 37,
                            setTextRenderingMode: 38,
                            setTextRise: 39,
                            moveText: 40,
                            setLeadingMoveText: 41,
                            setTextMatrix: 42,
                            nextLine: 43,
                            showText: 44,
                            showSpacedText: 45,
                            nextLineShowText: 46,
                            nextLineSetSpacingShowText: 47,
                            setCharWidth: 48,
                            setCharWidthAndBounds: 49,
                            setStrokeColorSpace: 50,
                            setFillColorSpace: 51,
                            setStrokeColor: 52,
                            setStrokeColorN: 53,
                            setFillColor: 54,
                            setFillColorN: 55,
                            setStrokeGray: 56,
                            setFillGray: 57,
                            setStrokeRGBColor: 58,
                            setFillRGBColor: 59,
                            setStrokeCMYKColor: 60,
                            setFillCMYKColor: 61,
                            shadingFill: 62,
                            beginInlineImage: 63,
                            beginImageData: 64,
                            endInlineImage: 65,
                            paintXObject: 66,
                            markPoint: 67,
                            markPointProps: 68,
                            beginMarkedContent: 69,
                            beginMarkedContentProps: 70,
                            endMarkedContent: 71,
                            beginCompat: 72,
                            endCompat: 73,
                            paintFormXObjectBegin: 74,
                            paintFormXObjectEnd: 75,
                            beginGroup: 76,
                            endGroup: 77,
                            beginAnnotation: 80,
                            endAnnotation: 81,
                            paintImageMaskXObject: 83,
                            paintImageMaskXObjectGroup: 84,
                            paintImageXObject: 85,
                            paintInlineImageXObject: 86,
                            paintInlineImageXObjectGroup: 87,
                            paintImageXObjectRepeat: 88,
                            paintImageMaskXObjectRepeat: 89,
                            paintSolidColorImageMask: 90,
                            constructPath: 91
                        };
                        e.OPS = w;
                        let k = {
                            NEED_PASSWORD: 1,
                            INCORRECT_PASSWORD: 2
                        };
                        e.PasswordResponses = k;
                        let R = P.WARNINGS;

                        function F(t) {
                            Number.isInteger(t) && (R = t)
                        }

                        function O() {
                            return R
                        }

                        function I(t) {
                            R >= P.INFOS && console.log(`Info: ${t}`)
                        }

                        function D(t) {
                            R >= P.WARNINGS && console.log(`Warning: ${t}`)
                        }

                        function L(t) {
                            throw Error(t)
                        }

                        function N(t, e) {
                            t || L(e)
                        }

                        function j(t) {
                            switch (t?.protocol) {
                                case "http:":
                                case "https:":
                                case "ftp:":
                                case "mailto:":
                                case "tel:":
                                    return !0;
                                default:
                                    return !1
                            }
                        }

                        function B(t, e = null, i = null) {
                            if (!t) return null;
                            try {
                                if (i && "string" == typeof t) {
                                    if (i.addDefaultProtocol && t.startsWith("www.")) {
                                        let e = t.match(/\./g);
                                        e?.length >= 2 && (t = `http://${t}`)
                                    }
                                    if (i.tryConvertEncoding) try {
                                        t = to(t)
                                    } catch (t) {}
                                }
                                let s = e ? new URL(t, e) : new URL(t);
                                if (j(s)) return s
                            } catch (t) {}
                            return null
                        }

                        function U(t, e, i, s = !1) {
                            return Object.defineProperty(t, e, {
                                value: i,
                                enumerable: !s,
                                configurable: !0,
                                writable: !1
                            }), i
                        }
                        let G = function() {
                            function t(e, i) {
                                this.constructor === t && L("Cannot initialize BaseException."), this.message = e, this.name = i
                            }
                            return t.prototype = Error(), t.constructor = t, t
                        }();
                        e.BaseException = G;
                        class H extends G {
                            constructor(t, e) {
                                super(t, "PasswordException"), this.code = e
                            }
                        }
                        e.PasswordException = H;
                        class q extends G {
                            constructor(t, e) {
                                super(t, "UnknownErrorException"), this.details = e
                            }
                        }
                        e.UnknownErrorException = q;
                        class W extends G {
                            constructor(t) {
                                super(t, "InvalidPDFException")
                            }
                        }
                        e.InvalidPDFException = W;
                        class z extends G {
                            constructor(t) {
                                super(t, "MissingPDFException")
                            }
                        }
                        e.MissingPDFException = z;
                        class V extends G {
                            constructor(t, e) {
                                super(t, "UnexpectedResponseException"), this.status = e
                            }
                        }
                        e.UnexpectedResponseException = V;
                        class $ extends G {
                            constructor(t) {
                                super(t, "FormatError")
                            }
                        }
                        e.FormatError = $;
                        class X extends G {
                            constructor(t) {
                                super(t, "AbortException")
                            }
                        }

                        function K(t) {
                            ("object" != typeof t || t?.length === void 0) && L("Invalid argument for bytesToString");
                            let e = t.length,
                                i = 8192;
                            if (e < 8192) return String.fromCharCode.apply(null, t);
                            let s = [];
                            for (let r = 0; r < e; r += i) {
                                let a = Math.min(r + i, e),
                                    n = t.subarray(r, a);
                                s.push(String.fromCharCode.apply(null, n))
                            }
                            return s.join("")
                        }

                        function Y(t) {
                            "string" != typeof t && L("Invalid argument for stringToBytes");
                            let e = t.length,
                                i = new Uint8Array(e);
                            for (let s = 0; s < e; ++s) i[s] = 255 & t.charCodeAt(s);
                            return i
                        }

                        function J(t) {
                            return String.fromCharCode(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t)
                        }

                        function Q(t) {
                            return Object.keys(t).length
                        }

                        function Z(t) {
                            let e = Object.create(null);
                            for (let [i, s] of t) e[i] = s;
                            return e
                        }

                        function tt() {
                            let t = new Uint8Array(4);
                            return t[0] = 1, 1 === new Uint32Array(t.buffer, 0, 1)[0]
                        }

                        function te() {
                            try {
                                return Function(""), !0
                            } catch (t) {
                                return !1
                            }
                        }
                        e.AbortException = X;
                        class ti {
                            static get isLittleEndian() {
                                return U(this, "isLittleEndian", tt())
                            }
                            static get isEvalSupported() {
                                return U(this, "isEvalSupported", te())
                            }
                            static get isOffscreenCanvasSupported() {
                                return U(this, "isOffscreenCanvasSupported", "undefined" != typeof OffscreenCanvas)
                            }
                            static get platform() {
                                return "undefined" == typeof navigator ? U(this, "platform", {
                                    isWin: !1,
                                    isMac: !1
                                }) : U(this, "platform", {
                                    isWin: navigator.platform.includes("Win"),
                                    isMac: navigator.platform.includes("Mac")
                                })
                            }
                        }
                        e.FeatureTest = ti;
                        let ts = [...Array(256).keys()].map(t => t.toString(16).padStart(2, "0"));
                        class tr {
                            static makeHexColor(t, e, i) {
                                return `#${ts[t]}${ts[e]}${ts[i]}`
                            }
                            static scaleMinMax(t, e) {
                                let i;
                                t[0] ? (t[0] < 0 && (i = e[0], e[0] = e[1], e[1] = i), e[0] *= t[0], e[1] *= t[0], t[3] < 0 && (i = e[2], e[2] = e[3], e[3] = i), e[2] *= t[3], e[3] *= t[3]) : (i = e[0], e[0] = e[2], e[2] = i, i = e[1], e[1] = e[3], e[3] = i, t[1] < 0 && (i = e[2], e[2] = e[3], e[3] = i), e[2] *= t[1], e[3] *= t[1], t[2] < 0 && (i = e[0], e[0] = e[1], e[1] = i), e[0] *= t[2], e[1] *= t[2]), e[0] += t[4], e[1] += t[4], e[2] += t[5], e[3] += t[5]
                            }
                            static transform(t, e) {
                                return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]]
                            }
                            static applyTransform(t, e) {
                                return [t[0] * e[0] + t[1] * e[2] + e[4], t[0] * e[1] + t[1] * e[3] + e[5]]
                            }
                            static applyInverseTransform(t, e) {
                                let i = e[0] * e[3] - e[1] * e[2];
                                return [(t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / i, (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / i]
                            }
                            static getAxialAlignedBoundingBox(t, e) {
                                let i = tr.applyTransform(t, e),
                                    s = tr.applyTransform(t.slice(2, 4), e),
                                    r = tr.applyTransform([t[0], t[3]], e),
                                    a = tr.applyTransform([t[2], t[1]], e);
                                return [Math.min(i[0], s[0], r[0], a[0]), Math.min(i[1], s[1], r[1], a[1]), Math.max(i[0], s[0], r[0], a[0]), Math.max(i[1], s[1], r[1], a[1])]
                            }
                            static inverseTransform(t) {
                                let e = t[0] * t[3] - t[1] * t[2];
                                return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e]
                            }
                            static singularValueDecompose2dScale(t) {
                                let e = [t[0], t[2], t[1], t[3]],
                                    i = t[0] * e[0] + t[1] * e[2],
                                    s = t[0] * e[1] + t[1] * e[3],
                                    r = t[2] * e[0] + t[3] * e[2],
                                    a = t[2] * e[1] + t[3] * e[3],
                                    n = (i + a) / 2,
                                    o = Math.sqrt((i + a) ** 2 - 4 * (i * a - r * s)) / 2;
                                return [Math.sqrt(n + o || 1), Math.sqrt(n - o || 1)]
                            }
                            static normalizeRect(t) {
                                let e = t.slice(0);
                                return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e
                            }
                            static intersect(t, e) {
                                let i = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])),
                                    s = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
                                if (i > s) return null;
                                let r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])),
                                    a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
                                return r > a ? null : [i, r, s, a]
                            }
                            static bezierBoundingBox(t, e, i, s, r, a, n, o) {
                                let l, h, d, c, u, p, g, f;
                                let m = [],
                                    b = [
                                        [],
                                        []
                                    ];
                                for (let b = 0; b < 2; ++b) {
                                    if (0 === b ? (h = 6 * t - 12 * i + 6 * r, l = -3 * t + 9 * i - 9 * r + 3 * n, d = 3 * i - 3 * t) : (h = 6 * e - 12 * s + 6 * a, l = -3 * e + 9 * s - 9 * a + 3 * o, d = 3 * s - 3 * e), 1e-12 > Math.abs(l)) {
                                        if (1e-12 > Math.abs(h)) continue;
                                        0 < (c = -d / h) && c < 1 && m.push(c);
                                        continue
                                    }
                                    f = Math.sqrt(g = h * h - 4 * d * l), !(g < 0) && (0 < (u = (-h + f) / (2 * l)) && u < 1 && m.push(u), 0 < (p = (-h - f) / (2 * l)) && p < 1 && m.push(p))
                                }
                                let A = m.length,
                                    v, y = A;
                                for (; A--;) v = 1 - (c = m[A]), b[0][A] = v * v * v * t + 3 * v * v * c * i + 3 * v * c * c * r + c * c * c * n, b[1][A] = v * v * v * e + 3 * v * v * c * s + 3 * v * c * c * a + c * c * c * o;
                                return b[0][y] = t, b[1][y] = e, b[0][y + 1] = n, b[1][y + 1] = o, b[0].length = b[1].length = y + 2, [Math.min(...b[0]), Math.min(...b[1]), Math.max(...b[0]), Math.max(...b[1])]
                            }
                        }
                        e.Util = tr;
                        let ta = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];

                        function tn(t) {
                            if (t[0] >= "\xef") {
                                let e;
                                if ("\xfe" === t[0] && "\xff" === t[1] ? e = "utf-16be" : "\xff" === t[0] && "\xfe" === t[1] ? e = "utf-16le" : "\xef" === t[0] && "\xbb" === t[1] && "\xbf" === t[2] && (e = "utf-8"), e) try {
                                    let i = new TextDecoder(e, {
                                            fatal: !0
                                        }),
                                        s = Y(t);
                                    return i.decode(s)
                                } catch (t) {
                                    D(`stringToPDFString: "${t}".`)
                                }
                            }
                            let e = [];
                            for (let i = 0, s = t.length; i < s; i++) {
                                let s = ta[t.charCodeAt(i)];
                                e.push(s ? String.fromCharCode(s) : t.charAt(i))
                            }
                            return e.join("")
                        }

                        function to(t) {
                            return decodeURIComponent(escape(t))
                        }

                        function tl(t) {
                            return unescape(encodeURIComponent(t))
                        }

                        function th(t) {
                            return "object" == typeof t && t?.byteLength !== void 0
                        }

                        function td(t, e) {
                            if (t.length !== e.length) return !1;
                            for (let i = 0, s = t.length; i < s; i++)
                                if (t[i] !== e[i]) return !1;
                            return !0
                        }

                        function tc(t = new Date) {
                            return [t.getUTCFullYear().toString(), (t.getUTCMonth() + 1).toString().padStart(2, "0"), t.getUTCDate().toString().padStart(2, "0"), t.getUTCHours().toString().padStart(2, "0"), t.getUTCMinutes().toString().padStart(2, "0"), t.getUTCSeconds().toString().padStart(2, "0")].join("")
                        }
                        class tu {
                            #t = !1;
                            constructor() {
                                this.promise = new Promise((t, e) => {
                                    this.resolve = e => {
                                        this.#t = !0, t(e)
                                    }, this.reject = t => {
                                        this.#t = !0, e(t)
                                    }
                                })
                            }
                            get settled() {
                                return this.#t
                            }
                        }
                        e.PromiseCapability = tu;
                        let tp = null,
                            tg = null;

                        function tf(t) {
                            return tp || (tp = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, tg = new Map([
                                ["ﬅ", "ſt"]
                            ])), t.replaceAll(tp, (t, e, i) => e ? e.normalize("NFKC") : tg.get(i))
                        }
                    }, (__unused_webpack_module, exports, __w_pdfjs_require__) => {
                        let createPDFNetworkStream;
                        Object.defineProperty(exports, "__esModule", {
                            value: !0
                        }), exports.build = exports.RenderTask = exports.PDFWorkerUtil = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultFilterFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0, exports.getDocument = getDocument, exports.version = void 0;
                        var _util = __w_pdfjs_require__(1),
                            _annotation_storage = __w_pdfjs_require__(3),
                            _display_utils = __w_pdfjs_require__(6),
                            _font_loader = __w_pdfjs_require__(9),
                            _canvas = __w_pdfjs_require__(11),
                            _worker_options = __w_pdfjs_require__(14),
                            _is_node = __w_pdfjs_require__(10),
                            _message_handler = __w_pdfjs_require__(15),
                            _metadata = __w_pdfjs_require__(16),
                            _optional_content_config = __w_pdfjs_require__(17),
                            _transport_stream = __w_pdfjs_require__(18),
                            _xfa_text = __w_pdfjs_require__(19);
                        let DEFAULT_RANGE_CHUNK_SIZE = 65536,
                            RENDERING_CANCELLED_TIMEOUT = 100,
                            DELAYED_CLEANUP_TIMEOUT = 5e3,
                            DefaultCanvasFactory = _display_utils.DOMCanvasFactory;
                        exports.DefaultCanvasFactory = DefaultCanvasFactory;
                        let DefaultCMapReaderFactory = _display_utils.DOMCMapReaderFactory;
                        exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
                        let DefaultFilterFactory = _display_utils.DOMFilterFactory;
                        exports.DefaultFilterFactory = DefaultFilterFactory;
                        let DefaultStandardFontDataFactory = _display_utils.DOMStandardFontDataFactory;
                        if (exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory, _is_node.isNodeJS) {
                            let {
                                NodeCanvasFactory,
                                NodeCMapReaderFactory,
                                NodeFilterFactory,
                                NodeStandardFontDataFactory
                            } = __w_pdfjs_require__(20);
                            exports.DefaultCanvasFactory = DefaultCanvasFactory = NodeCanvasFactory, exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory = NodeCMapReaderFactory, exports.DefaultFilterFactory = DefaultFilterFactory = NodeFilterFactory, exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory = NodeStandardFontDataFactory
                        }
                        if (_is_node.isNodeJS) {
                            let {
                                PDFNodeStream
                            } = __w_pdfjs_require__(21);
                            createPDFNetworkStream = t => new PDFNodeStream(t)
                        } else {
                            let {
                                PDFNetworkStream
                            } = __w_pdfjs_require__(24), {
                                PDFFetchStream
                            } = __w_pdfjs_require__(25);
                            createPDFNetworkStream = t => (0, _display_utils.isValidFetchUrl)(t.url) ? new PDFFetchStream(t) : new PDFNetworkStream(t)
                        }

                        function getDocument(t) {
                            if ("string" == typeof t || t instanceof URL ? t = {
                                    url: t
                                } : (0, _util.isArrayBuffer)(t) && (t = {
                                    data: t
                                }), "object" != typeof t) throw Error("Invalid parameter in getDocument, need parameter object.");
                            if (!t.url && !t.data && !t.range) throw Error("Invalid parameter object: need either .data, .range or .url");
                            let e = new PDFDocumentLoadingTask,
                                {
                                    docId: i
                                } = e,
                                s = t.url ? getUrlProp(t.url) : null,
                                r = t.data ? getDataProp(t.data) : null,
                                a = t.httpHeaders || null,
                                n = !0 === t.withCredentials,
                                o = t.password ?? null,
                                l = t.range instanceof PDFDataRangeTransport ? t.range : null,
                                h = Number.isInteger(t.rangeChunkSize) && t.rangeChunkSize > 0 ? t.rangeChunkSize : DEFAULT_RANGE_CHUNK_SIZE,
                                d = t.worker instanceof PDFWorker ? t.worker : null,
                                c = t.verbosity,
                                u = "string" != typeof t.docBaseUrl || (0, _display_utils.isDataScheme)(t.docBaseUrl) ? null : t.docBaseUrl,
                                p = "string" == typeof t.cMapUrl ? t.cMapUrl : null,
                                g = !1 !== t.cMapPacked,
                                f = t.CMapReaderFactory || DefaultCMapReaderFactory,
                                m = "string" == typeof t.standardFontDataUrl ? t.standardFontDataUrl : null,
                                b = t.StandardFontDataFactory || DefaultStandardFontDataFactory,
                                A = !0 !== t.stopAtErrors,
                                v = Number.isInteger(t.maxImageSize) && t.maxImageSize > -1 ? t.maxImageSize : -1,
                                y = !1 !== t.isEvalSupported,
                                _ = "boolean" == typeof t.isOffscreenCanvasSupported ? t.isOffscreenCanvasSupported : !_is_node.isNodeJS,
                                S = Number.isInteger(t.canvasMaxAreaInBytes) ? t.canvasMaxAreaInBytes : -1,
                                C = "boolean" == typeof t.disableFontFace ? t.disableFontFace : _is_node.isNodeJS,
                                x = !0 === t.fontExtraProperties,
                                E = !0 === t.enableXfa,
                                T = t.ownerDocument || globalThis.document,
                                P = !0 === t.disableRange,
                                M = !0 === t.disableStream,
                                w = !0 === t.disableAutoFetch,
                                k = !0 === t.pdfBug,
                                R = l ? l.length : t.length ?? NaN,
                                F = "boolean" == typeof t.useSystemFonts ? t.useSystemFonts : !_is_node.isNodeJS && !C,
                                O = "boolean" == typeof t.useWorkerFetch ? t.useWorkerFetch : f === _display_utils.DOMCMapReaderFactory && b === _display_utils.DOMStandardFontDataFactory && (0, _display_utils.isValidFetchUrl)(p, document.baseURI) && (0, _display_utils.isValidFetchUrl)(m, document.baseURI),
                                I = t.canvasFactory || new DefaultCanvasFactory({
                                    ownerDocument: T
                                }),
                                D = t.filterFactory || new DefaultFilterFactory({
                                    docId: i,
                                    ownerDocument: T
                                }),
                                L = null;
                            (0, _util.setVerbosityLevel)(c);
                            let N = {
                                canvasFactory: I,
                                filterFactory: D
                            };
                            if (O || (N.cMapReaderFactory = new f({
                                    baseUrl: p,
                                    isCompressed: g
                                }), N.standardFontDataFactory = new b({
                                    baseUrl: m
                                })), !d) {
                                let t = {
                                    verbosity: c,
                                    port: _worker_options.GlobalWorkerOptions.workerPort
                                };
                                d = t.port ? PDFWorker.fromPort(t) : new PDFWorker(t), e._worker = d
                            }
                            let j = {
                                    docId: i,
                                    apiVersion: "3.7.107",
                                    data: r,
                                    password: o,
                                    disableAutoFetch: w,
                                    rangeChunkSize: h,
                                    length: R,
                                    docBaseUrl: u,
                                    enableXfa: E,
                                    evaluatorOptions: {
                                        maxImageSize: v,
                                        disableFontFace: C,
                                        ignoreErrors: A,
                                        isEvalSupported: y,
                                        isOffscreenCanvasSupported: _,
                                        canvasMaxAreaInBytes: S,
                                        fontExtraProperties: x,
                                        useSystemFonts: F,
                                        cMapUrl: O ? p : null,
                                        standardFontDataUrl: O ? m : null
                                    }
                                },
                                B = {
                                    ignoreErrors: A,
                                    isEvalSupported: y,
                                    disableFontFace: C,
                                    fontExtraProperties: x,
                                    enableXfa: E,
                                    ownerDocument: T,
                                    disableAutoFetch: w,
                                    pdfBug: k,
                                    styleElement: L
                                };
                            return d.promise.then(function() {
                                if (e.destroyed) throw Error("Loading aborted");
                                return Promise.all([_fetchDocument(d, j), new Promise(function(t) {
                                    let e;
                                    l ? e = new _transport_stream.PDFDataTransportStream({
                                        length: R,
                                        initialData: l.initialData,
                                        progressiveDone: l.progressiveDone,
                                        contentDispositionFilename: l.contentDispositionFilename,
                                        disableRange: P,
                                        disableStream: M
                                    }, l) : r || (e = createPDFNetworkStream({
                                        url: s,
                                        length: R,
                                        httpHeaders: a,
                                        withCredentials: n,
                                        rangeChunkSize: h,
                                        disableRange: P,
                                        disableStream: M
                                    })), t(e)
                                })]).then(function([t, s]) {
                                    if (e.destroyed) throw Error("Loading aborted");
                                    let r = new _message_handler.MessageHandler(i, t, d.port),
                                        a = new WorkerTransport(r, e, s, B, N);
                                    e._transport = a, r.send("Ready", null)
                                })
                            }).catch(e._capability.reject), e
                        }
                        async function _fetchDocument(t, e) {
                            if (t.destroyed) throw Error("Worker was destroyed");
                            let i = await t.messageHandler.sendWithPromise("GetDocRequest", e, e.data ? [e.data.buffer] : null);
                            if (t.destroyed) throw Error("Worker was destroyed");
                            return i
                        }

                        function getUrlProp(t) {
                            if (t instanceof URL) return t.href;
                            try {
                                return new URL(t, window.location).href
                            } catch (e) {
                                if (_is_node.isNodeJS && "string" == typeof t) return t
                            }
                            throw Error("Invalid PDF url data: either string or URL-object is expected in the url property.")
                        }

                        function getDataProp(t) {
                            if (_is_node.isNodeJS && void 0 !== Buffer && t instanceof Buffer) return (0, _display_utils.deprecated)("Please provide binary data as `Uint8Array`, rather than `Buffer`."), new Uint8Array(t);
                            if (t instanceof Uint8Array && t.byteLength === t.buffer.byteLength) return t;
                            if ("string" == typeof t) return (0, _util.stringToBytes)(t);
                            if ("object" == typeof t && !isNaN(t?.length) || (0, _util.isArrayBuffer)(t)) return new Uint8Array(t);
                            throw Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.")
                        }
                        class PDFDocumentLoadingTask {
                            static #e = 0;
                            constructor() {
                                this._capability = new _util.PromiseCapability, this._transport = null, this._worker = null, this.docId = `d${PDFDocumentLoadingTask.#e++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null
                            }
                            get promise() {
                                return this._capability.promise
                            }
                            async destroy() {
                                this.destroyed = !0, await this._transport?.destroy(), this._transport = null, this._worker && (this._worker.destroy(), this._worker = null)
                            }
                        }
                        exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
                        class PDFDataRangeTransport {
                            constructor(t, e, i = !1, s = null) {
                                this.length = t, this.initialData = e, this.progressiveDone = i, this.contentDispositionFilename = s, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = new _util.PromiseCapability
                            }
                            addRangeListener(t) {
                                this._rangeListeners.push(t)
                            }
                            addProgressListener(t) {
                                this._progressListeners.push(t)
                            }
                            addProgressiveReadListener(t) {
                                this._progressiveReadListeners.push(t)
                            }
                            addProgressiveDoneListener(t) {
                                this._progressiveDoneListeners.push(t)
                            }
                            onDataRange(t, e) {
                                for (let i of this._rangeListeners) i(t, e)
                            }
                            onDataProgress(t, e) {
                                this._readyCapability.promise.then(() => {
                                    for (let i of this._progressListeners) i(t, e)
                                })
                            }
                            onDataProgressiveRead(t) {
                                this._readyCapability.promise.then(() => {
                                    for (let e of this._progressiveReadListeners) e(t)
                                })
                            }
                            onDataProgressiveDone() {
                                this._readyCapability.promise.then(() => {
                                    for (let t of this._progressiveDoneListeners) t()
                                })
                            }
                            transportReady() {
                                this._readyCapability.resolve()
                            }
                            requestDataRange(t, e) {
                                (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange")
                            }
                            abort() {}
                        }
                        exports.PDFDataRangeTransport = PDFDataRangeTransport;
                        class PDFDocumentProxy {
                            constructor(t, e) {
                                this._pdfInfo = t, this._transport = e
                            }
                            get annotationStorage() {
                                return this._transport.annotationStorage
                            }
                            get filterFactory() {
                                return this._transport.filterFactory
                            }
                            get numPages() {
                                return this._pdfInfo.numPages
                            }
                            get fingerprints() {
                                return this._pdfInfo.fingerprints
                            }
                            get isPureXfa() {
                                return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa)
                            }
                            get allXfaHtml() {
                                return this._transport._htmlForXfa
                            }
                            getPage(t) {
                                return this._transport.getPage(t)
                            }
                            getPageIndex(t) {
                                return this._transport.getPageIndex(t)
                            }
                            getDestinations() {
                                return this._transport.getDestinations()
                            }
                            getDestination(t) {
                                return this._transport.getDestination(t)
                            }
                            getPageLabels() {
                                return this._transport.getPageLabels()
                            }
                            getPageLayout() {
                                return this._transport.getPageLayout()
                            }
                            getPageMode() {
                                return this._transport.getPageMode()
                            }
                            getViewerPreferences() {
                                return this._transport.getViewerPreferences()
                            }
                            getOpenAction() {
                                return this._transport.getOpenAction()
                            }
                            getAttachments() {
                                return this._transport.getAttachments()
                            }
                            getJavaScript() {
                                return this._transport.getJavaScript()
                            }
                            getJSActions() {
                                return this._transport.getDocJSActions()
                            }
                            getOutline() {
                                return this._transport.getOutline()
                            }
                            getOptionalContentConfig() {
                                return this._transport.getOptionalContentConfig()
                            }
                            getPermissions() {
                                return this._transport.getPermissions()
                            }
                            getMetadata() {
                                return this._transport.getMetadata()
                            }
                            getMarkInfo() {
                                return this._transport.getMarkInfo()
                            }
                            getData() {
                                return this._transport.getData()
                            }
                            saveDocument() {
                                return this._transport.saveDocument()
                            }
                            getDownloadInfo() {
                                return this._transport.downloadInfoCapability.promise
                            }
                            cleanup(t = !1) {
                                return this._transport.startCleanup(t || this.isPureXfa)
                            }
                            destroy() {
                                return this.loadingTask.destroy()
                            }
                            get loadingParams() {
                                return this._transport.loadingParams
                            }
                            get loadingTask() {
                                return this._transport.loadingTask
                            }
                            getFieldObjects() {
                                return this._transport.getFieldObjects()
                            }
                            hasJSActions() {
                                return this._transport.hasJSActions()
                            }
                            getCalculationOrderIds() {
                                return this._transport.getCalculationOrderIds()
                            }
                        }
                        exports.PDFDocumentProxy = PDFDocumentProxy;
                        class PDFPageProxy {
                            #i = null;
                            #s = !1;
                            constructor(t, e, i, s = !1) {
                                this._pageIndex = t, this._pageInfo = e, this._transport = i, this._stats = s ? new _display_utils.StatTimer : null, this._pdfBug = s, this.commonObjs = i.commonObjs, this.objs = new PDFObjects, this._maybeCleanupAfterRender = !1, this._intentStates = new Map, this.destroyed = !1
                            }
                            get pageNumber() {
                                return this._pageIndex + 1
                            }
                            get rotate() {
                                return this._pageInfo.rotate
                            }
                            get ref() {
                                return this._pageInfo.ref
                            }
                            get userUnit() {
                                return this._pageInfo.userUnit
                            }
                            get view() {
                                return this._pageInfo.view
                            }
                            getViewport({
                                scale: t,
                                rotation: e = this.rotate,
                                offsetX: i = 0,
                                offsetY: s = 0,
                                dontFlip: r = !1
                            } = {}) {
                                return new _display_utils.PageViewport({
                                    viewBox: this.view,
                                    scale: t,
                                    rotation: e,
                                    offsetX: i,
                                    offsetY: s,
                                    dontFlip: r
                                })
                            }
                            getAnnotations({
                                intent: t = "display"
                            } = {}) {
                                let e = this._transport.getRenderingIntent(t);
                                return this._transport.getAnnotations(this._pageIndex, e.renderingIntent)
                            }
                            getJSActions() {
                                return this._transport.getPageJSActions(this._pageIndex)
                            }
                            get isPureXfa() {
                                return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa)
                            }
                            async getXfa() {
                                return this._transport._htmlForXfa?.children[this._pageIndex] || null
                            }
                            render({
                                canvasContext: t,
                                viewport: e,
                                intent: i = "display",
                                annotationMode: s = _util.AnnotationMode.ENABLE,
                                transform: r = null,
                                background: a = null,
                                optionalContentConfigPromise: n = null,
                                annotationCanvasMap: o = null,
                                pageColors: l = null,
                                printAnnotationStorage: h = null
                            }) {
                                if (arguments[0]?.canvasFactory) throw Error("render no longer accepts the `canvasFactory`-option, please pass it to the `getDocument`-function instead.");
                                this._stats?.time("Overall");
                                let d = this._transport.getRenderingIntent(i, s, h);
                                this.#s = !1, this.#r(), n || (n = this._transport.getOptionalContentConfig());
                                let c = this._intentStates.get(d.cacheKey);
                                c || (c = Object.create(null), this._intentStates.set(d.cacheKey, c)), c.streamReaderCancelTimeout && (clearTimeout(c.streamReaderCancelTimeout), c.streamReaderCancelTimeout = null);
                                let u = !!(d.renderingIntent & _util.RenderingIntentFlag.PRINT);
                                c.displayReadyCapability || (c.displayReadyCapability = new _util.PromiseCapability, c.operatorList = {
                                    fnArray: [],
                                    argsArray: [],
                                    lastChunk: !1,
                                    separateAnnots: null
                                }, this._stats?.time("Page Request"), this._pumpOperatorList(d));
                                let p = t => {
                                        c.renderTasks.delete(g), (this._maybeCleanupAfterRender || u) && (this.#s = !0), this.#a(!u), t ? (g.capability.reject(t), this._abortOperatorList({
                                            intentState: c,
                                            reason: t instanceof Error ? t : Error(t)
                                        })) : g.capability.resolve(), this._stats?.timeEnd("Rendering"), this._stats?.timeEnd("Overall")
                                    },
                                    g = new InternalRenderTask({
                                        callback: p,
                                        params: {
                                            canvasContext: t,
                                            viewport: e,
                                            transform: r,
                                            background: a
                                        },
                                        objs: this.objs,
                                        commonObjs: this.commonObjs,
                                        annotationCanvasMap: o,
                                        operatorList: c.operatorList,
                                        pageIndex: this._pageIndex,
                                        canvasFactory: this._transport.canvasFactory,
                                        filterFactory: this._transport.filterFactory,
                                        useRequestAnimationFrame: !u,
                                        pdfBug: this._pdfBug,
                                        pageColors: l
                                    });
                                (c.renderTasks ||= new Set).add(g);
                                let f = g.task;
                                return Promise.all([c.displayReadyCapability.promise, n]).then(([t, e]) => {
                                    if (this.#s) {
                                        p();
                                        return
                                    }
                                    this._stats?.time("Rendering"), g.initializeGraphics({
                                        transparency: t,
                                        optionalContentConfig: e
                                    }), g.operatorListChanged()
                                }).catch(p), f
                            }
                            getOperatorList({
                                intent: t = "display",
                                annotationMode: e = _util.AnnotationMode.ENABLE,
                                printAnnotationStorage: i = null
                            } = {}) {
                                let s;

                                function r() {
                                    n.operatorList.lastChunk && (n.opListReadCapability.resolve(n.operatorList), n.renderTasks.delete(s))
                                }
                                let a = this._transport.getRenderingIntent(t, e, i, !0),
                                    n = this._intentStates.get(a.cacheKey);
                                return n || (n = Object.create(null), this._intentStates.set(a.cacheKey, n)), n.opListReadCapability || ((s = Object.create(null)).operatorListChanged = r, n.opListReadCapability = new _util.PromiseCapability, (n.renderTasks ||= new Set).add(s), n.operatorList = {
                                    fnArray: [],
                                    argsArray: [],
                                    lastChunk: !1,
                                    separateAnnots: null
                                }, this._stats?.time("Page Request"), this._pumpOperatorList(a)), n.opListReadCapability.promise
                            }
                            streamTextContent({
                                includeMarkedContent: t = !1,
                                disableNormalization: e = !1
                            } = {}) {
                                let i = 100;
                                return this._transport.messageHandler.sendWithStream("GetTextContent", {
                                    pageIndex: this._pageIndex,
                                    includeMarkedContent: !0 === t,
                                    disableNormalization: !0 === e
                                }, {
                                    highWaterMark: i,
                                    size: t => t.items.length
                                })
                            }
                            getTextContent(t = {}) {
                                if (this._transport._htmlForXfa) return this.getXfa().then(t => _xfa_text.XfaText.textContent(t));
                                let e = this.streamTextContent(t);
                                return new Promise(function(t, i) {
                                    function s() {
                                        r.read().then(function({
                                            value: e,
                                            done: i
                                        }) {
                                            if (i) {
                                                t(a);
                                                return
                                            }
                                            Object.assign(a.styles, e.styles), a.items.push(...e.items), s()
                                        }, i)
                                    }
                                    let r = e.getReader(),
                                        a = {
                                            items: [],
                                            styles: Object.create(null)
                                        };
                                    s()
                                })
                            }
                            getStructTree() {
                                return this._transport.getStructTree(this._pageIndex)
                            }
                            _destroy() {
                                this.destroyed = !0;
                                let t = [];
                                for (let e of this._intentStates.values())
                                    if (this._abortOperatorList({
                                            intentState: e,
                                            reason: Error("Page was destroyed."),
                                            force: !0
                                        }), !e.opListReadCapability)
                                        for (let i of e.renderTasks) t.push(i.completed), i.cancel();
                                return this.objs.clear(), this.#s = !1, this.#r(), Promise.all(t)
                            }
                            cleanup(t = !1) {
                                this.#s = !0;
                                let e = this.#a(!1);
                                return t && e && (this._stats &&= new _display_utils.StatTimer), e
                            }
                            #a(t = !1) {
                                if (this.#r(), !this.#s) return !1;
                                if (t) return this.#i = setTimeout(() => {
                                    this.#i = null, this.#a(!1)
                                }, DELAYED_CLEANUP_TIMEOUT), !1;
                                for (let {
                                        renderTasks: t,
                                        operatorList: e
                                    }
                                    of this._intentStates.values())
                                    if (t.size > 0 || !e.lastChunk) return !1;
                                return this._intentStates.clear(), this.objs.clear(), this.#s = !1, !0
                            }
                            #r() {
                                this.#i && (clearTimeout(this.#i), this.#i = null)
                            }
                            _startRenderPage(t, e) {
                                let i = this._intentStates.get(e);
                                i && (this._stats?.timeEnd("Page Request"), i.displayReadyCapability?.resolve(t))
                            }
                            _renderPageChunk(t, e) {
                                for (let i = 0, s = t.length; i < s; i++) e.operatorList.fnArray.push(t.fnArray[i]), e.operatorList.argsArray.push(t.argsArray[i]);
                                for (let i of (e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots, e.renderTasks)) i.operatorListChanged();
                                t.lastChunk && this.#a(!0)
                            }
                            _pumpOperatorList({
                                renderingIntent: t,
                                cacheKey: e,
                                annotationStorageMap: i
                            }) {
                                let s = this._transport.messageHandler.sendWithStream("GetOperatorList", {
                                        pageIndex: this._pageIndex,
                                        intent: t,
                                        cacheKey: e,
                                        annotationStorage: i
                                    }).getReader(),
                                    r = this._intentStates.get(e);
                                r.streamReader = s;
                                let a = () => {
                                    s.read().then(({
                                        value: t,
                                        done: e
                                    }) => {
                                        if (e) {
                                            r.streamReader = null;
                                            return
                                        }
                                        this._transport.destroyed || (this._renderPageChunk(t, r), a())
                                    }, t => {
                                        if (r.streamReader = null, !this._transport.destroyed) {
                                            if (r.operatorList) {
                                                for (let t of (r.operatorList.lastChunk = !0, r.renderTasks)) t.operatorListChanged();
                                                this.#a(!0)
                                            }
                                            if (r.displayReadyCapability) r.displayReadyCapability.reject(t);
                                            else if (r.opListReadCapability) r.opListReadCapability.reject(t);
                                            else throw t
                                        }
                                    })
                                };
                                a()
                            }
                            _abortOperatorList({
                                intentState: t,
                                reason: e,
                                force: i = !1
                            }) {
                                if (t.streamReader) {
                                    if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !i) {
                                        if (t.renderTasks.size > 0) return;
                                        if (e instanceof _display_utils.RenderingCancelledException) {
                                            let i = RENDERING_CANCELLED_TIMEOUT;
                                            e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
                                                t.streamReaderCancelTimeout = null, this._abortOperatorList({
                                                    intentState: t,
                                                    reason: e,
                                                    force: !0
                                                })
                                            }, i);
                                            return
                                        }
                                    }
                                    if (t.streamReader.cancel(new _util.AbortException(e.message)).catch(() => {}), t.streamReader = null, !this._transport.destroyed) {
                                        for (let [e, i] of this._intentStates)
                                            if (i === t) {
                                                this._intentStates.delete(e);
                                                break
                                            } this.cleanup()
                                    }
                                }
                            }
                            get stats() {
                                return this._stats
                            }
                        }
                        exports.PDFPageProxy = PDFPageProxy;
                        class LoopbackPort {
                            #n = new Set;
                            #o = Promise.resolve();
                            postMessage(t, e) {
                                let i = {
                                    data: structuredClone(t, e ? {
                                        transfer: e
                                    } : null)
                                };
                                this.#o.then(() => {
                                    for (let t of this.#n) t.call(this, i)
                                })
                            }
                            addEventListener(t, e) {
                                this.#n.add(e)
                            }
                            removeEventListener(t, e) {
                                this.#n.delete(e)
                            }
                            terminate() {
                                this.#n.clear()
                            }
                        }
                        exports.LoopbackPort = LoopbackPort;
                        let PDFWorkerUtil = {
                            isWorkerDisabled: !1,
                            fallbackWorkerSrc: null,
                            fakeWorkerId: 0
                        };
                        if (exports.PDFWorkerUtil = PDFWorkerUtil, _is_node.isNodeJS) PDFWorkerUtil.isWorkerDisabled = !0, PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
                        else if ("object" == typeof document) {
                            let pdfjsFilePath = document?.currentScript?.src;
                            pdfjsFilePath && (PDFWorkerUtil.fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"))
                        }
                        PDFWorkerUtil.isSameOrigin = function(t, e) {
                            let i;
                            try {
                                if (!(i = new URL(t)).origin || "null" === i.origin) return !1
                            } catch (t) {
                                return !1
                            }
                            let s = new URL(e, i);
                            return i.origin === s.origin
                        }, PDFWorkerUtil.createCDNWrapper = function(t) {
                            let e = `importScripts("${t}");`;
                            return URL.createObjectURL(new Blob([e]))
                        };
                        class PDFWorker {
                            static #l = new WeakMap;
                            constructor({
                                name: t = null,
                                port: e = null,
                                verbosity: i = (0, _util.getVerbosityLevel)()
                            } = {}) {
                                if (e && PDFWorker.#l.has(e)) throw Error("Cannot use more than one PDFWorker per port.");
                                if (this.name = t, this.destroyed = !1, this.verbosity = i, this._readyCapability = new _util.PromiseCapability, this._port = null, this._webWorker = null, this._messageHandler = null, e) {
                                    PDFWorker.#l.set(e, this), this._initializeFromPort(e);
                                    return
                                }
                                this._initialize()
                            }
                            get promise() {
                                return this._readyCapability.promise
                            }
                            get port() {
                                return this._port
                            }
                            get messageHandler() {
                                return this._messageHandler
                            }
                            _initializeFromPort(t) {
                                this._port = t, this._messageHandler = new _message_handler.MessageHandler("main", "worker", t), this._messageHandler.on("ready", function() {}), this._readyCapability.resolve(), this._messageHandler.send("configure", {
                                    verbosity: this.verbosity
                                })
                            }
                            _initialize() {
                                if (!PDFWorkerUtil.isWorkerDisabled && !PDFWorker._mainThreadWorkerMessageHandler) {
                                    let {
                                        workerSrc: t
                                    } = PDFWorker;
                                    try {
                                        PDFWorkerUtil.isSameOrigin(window.location.href, t) || (t = PDFWorkerUtil.createCDNWrapper(new URL(t, window.location).href));
                                        let e = new Worker(t),
                                            i = new _message_handler.MessageHandler("main", "worker", e),
                                            s = () => {
                                                e.removeEventListener("error", r), i.destroy(), e.terminate(), this.destroyed ? this._readyCapability.reject(Error("Worker was destroyed")) : this._setupFakeWorker()
                                            },
                                            r = () => {
                                                this._webWorker || s()
                                            };
                                        e.addEventListener("error", r), i.on("test", t => {
                                            if (e.removeEventListener("error", r), this.destroyed) {
                                                s();
                                                return
                                            }
                                            t ? (this._messageHandler = i, this._port = e, this._webWorker = e, this._readyCapability.resolve(), i.send("configure", {
                                                verbosity: this.verbosity
                                            })) : (this._setupFakeWorker(), i.destroy(), e.terminate())
                                        }), i.on("ready", t => {
                                            if (e.removeEventListener("error", r), this.destroyed) {
                                                s();
                                                return
                                            }
                                            try {
                                                a()
                                            } catch (t) {
                                                this._setupFakeWorker()
                                            }
                                        });
                                        let a = () => {
                                            let t = new Uint8Array;
                                            i.send("test", t, [t.buffer])
                                        };
                                        a();
                                        return
                                    } catch (t) {
                                        (0, _util.info)("The worker has been disabled.")
                                    }
                                }
                                this._setupFakeWorker()
                            }
                            _setupFakeWorker() {
                                PDFWorkerUtil.isWorkerDisabled || ((0, _util.warn)("Setting up fake worker."), PDFWorkerUtil.isWorkerDisabled = !0), PDFWorker._setupFakeWorkerGlobal.then(t => {
                                    if (this.destroyed) {
                                        this._readyCapability.reject(Error("Worker was destroyed"));
                                        return
                                    }
                                    let e = new LoopbackPort;
                                    this._port = e;
                                    let i = `fake${PDFWorkerUtil.fakeWorkerId++}`,
                                        s = new _message_handler.MessageHandler(i + "_worker", i, e);
                                    t.setup(s, e);
                                    let r = new _message_handler.MessageHandler(i, i + "_worker", e);
                                    this._messageHandler = r, this._readyCapability.resolve(), r.send("configure", {
                                        verbosity: this.verbosity
                                    })
                                }).catch(t => {
                                    this._readyCapability.reject(Error(`Setting up fake worker failed: "${t.message}".`))
                                })
                            }
                            destroy() {
                                this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), PDFWorker.#l.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null)
                            }
                            static fromPort(t) {
                                if (!t?.port) throw Error("PDFWorker.fromPort - invalid method signature.");
                                return this.#l.has(t.port) ? this.#l.get(t.port) : new PDFWorker(t)
                            }
                            static get workerSrc() {
                                if (_worker_options.GlobalWorkerOptions.workerSrc) return _worker_options.GlobalWorkerOptions.workerSrc;
                                if (null !== PDFWorkerUtil.fallbackWorkerSrc) return _is_node.isNodeJS || (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'), PDFWorkerUtil.fallbackWorkerSrc;
                                throw Error('No "GlobalWorkerOptions.workerSrc" specified.')
                            }
                            static get _mainThreadWorkerMessageHandler() {
                                try {
                                    return globalThis.pdfjsWorker?.WorkerMessageHandler || null
                                } catch (t) {
                                    return null
                                }
                            }
                            static get _setupFakeWorkerGlobal() {
                                let loader = async () => {
                                    let mainWorkerMessageHandler = this._mainThreadWorkerMessageHandler;
                                    if (mainWorkerMessageHandler) return mainWorkerMessageHandler;
                                    if (_is_node.isNodeJS) {
                                        let worker = eval("require")(this.workerSrc);
                                        return worker.WorkerMessageHandler
                                    }
                                    return await (0, _display_utils.loadScript)(this.workerSrc), window.pdfjsWorker.WorkerMessageHandler
                                };
                                return (0, _util.shadow)(this, "_setupFakeWorkerGlobal", loader())
                            }
                        }
                        exports.PDFWorker = PDFWorker;
                        class WorkerTransport {
                            #h = new Map;
                            #d = new Map;
                            #c = new Map;
                            constructor(t, e, i, s, r) {
                                this.messageHandler = t, this.loadingTask = e, this.commonObjs = new PDFObjects, this.fontLoader = new _font_loader.FontLoader({
                                    ownerDocument: s.ownerDocument,
                                    styleElement: s.styleElement
                                }), this._params = s, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._passwordCapability = null, this._networkStream = i, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = new _util.PromiseCapability, this.setupMessageHandler()
                            }
                            #u(t, e = null) {
                                let i = this.#h.get(t);
                                if (i) return i;
                                let s = this.messageHandler.sendWithPromise(t, e);
                                return this.#h.set(t, s), s
                            }
                            get annotationStorage() {
                                return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage)
                            }
                            getRenderingIntent(t, e = _util.AnnotationMode.ENABLE, i = null, s = !1) {
                                let r = _util.RenderingIntentFlag.DISPLAY,
                                    a = null;
                                switch (t) {
                                    case "any":
                                        r = _util.RenderingIntentFlag.ANY;
                                        break;
                                    case "display":
                                        break;
                                    case "print":
                                        r = _util.RenderingIntentFlag.PRINT;
                                        break;
                                    default:
                                        (0, _util.warn)(`getRenderingIntent - invalid intent: ${t}`)
                                }
                                switch (e) {
                                    case _util.AnnotationMode.DISABLE:
                                        r += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                                        break;
                                    case _util.AnnotationMode.ENABLE:
                                        break;
                                    case _util.AnnotationMode.ENABLE_FORMS:
                                        r += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                                        break;
                                    case _util.AnnotationMode.ENABLE_STORAGE:
                                        a = ((r += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE) & _util.RenderingIntentFlag.PRINT && i instanceof _annotation_storage.PrintAnnotationStorage ? i : this.annotationStorage).serializable;
                                        break;
                                    default:
                                        (0, _util.warn)(`getRenderingIntent - invalid annotationMode: ${e}`)
                                }
                                return s && (r += _util.RenderingIntentFlag.OPLIST), {
                                    renderingIntent: r,
                                    cacheKey: `${r}_${_annotation_storage.AnnotationStorage.getHash(a)}`,
                                    annotationStorageMap: a
                                }
                            }
                            destroy() {
                                if (this.destroyCapability) return this.destroyCapability.promise;
                                this.destroyed = !0, this.destroyCapability = new _util.PromiseCapability, this._passwordCapability && this._passwordCapability.reject(Error("Worker was destroyed during onPassword callback"));
                                let t = [];
                                for (let e of this.#d.values()) t.push(e._destroy());
                                this.#d.clear(), this.#c.clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
                                let e = this.messageHandler.sendWithPromise("Terminate", null);
                                return t.push(e), Promise.all(t).then(() => {
                                    this.commonObjs.clear(), this.fontLoader.clear(), this.#h.clear(), this.filterFactory.destroy(), this._networkStream && this._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve()
                                }, this.destroyCapability.reject), this.destroyCapability.promise
                            }
                            setupMessageHandler() {
                                let {
                                    messageHandler: t,
                                    loadingTask: e
                                } = this;
                                t.on("GetReader", (t, e) => {
                                    (0, _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = t => {
                                        this._lastProgress = {
                                            loaded: t.loaded,
                                            total: t.total
                                        }
                                    }, e.onPull = () => {
                                        this._fullReader.read().then(function({
                                            value: t,
                                            done: i
                                        }) {
                                            if (i) {
                                                e.close();
                                                return
                                            }(0, _util.assert)(t instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), e.enqueue(new Uint8Array(t), 1, [t])
                                        }).catch(t => {
                                            e.error(t)
                                        })
                                    }, e.onCancel = t => {
                                        this._fullReader.cancel(t), e.ready.catch(t => {
                                            if (!this.destroyed) throw t
                                        })
                                    }
                                }), t.on("ReaderHeadersReady", t => {
                                    let i = new _util.PromiseCapability,
                                        s = this._fullReader;
                                    return s.headersReady.then(() => {
                                        s.isStreamingSupported && s.isRangeSupported || (this._lastProgress && e.onProgress?.(this._lastProgress), s.onProgress = t => {
                                            e.onProgress?.({
                                                loaded: t.loaded,
                                                total: t.total
                                            })
                                        }), i.resolve({
                                            isStreamingSupported: s.isStreamingSupported,
                                            isRangeSupported: s.isRangeSupported,
                                            contentLength: s.contentLength
                                        })
                                    }, i.reject), i.promise
                                }), t.on("GetRangeReader", (t, e) => {
                                    (0, _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                                    let i = this._networkStream.getRangeReader(t.begin, t.end);
                                    if (!i) {
                                        e.close();
                                        return
                                    }
                                    e.onPull = () => {
                                        i.read().then(function({
                                            value: t,
                                            done: i
                                        }) {
                                            if (i) {
                                                e.close();
                                                return
                                            }(0, _util.assert)(t instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), e.enqueue(new Uint8Array(t), 1, [t])
                                        }).catch(t => {
                                            e.error(t)
                                        })
                                    }, e.onCancel = t => {
                                        i.cancel(t), e.ready.catch(t => {
                                            if (!this.destroyed) throw t
                                        })
                                    }
                                }), t.on("GetDoc", ({
                                    pdfInfo: t
                                }) => {
                                    this._numPages = t.numPages, this._htmlForXfa = t.htmlForXfa, delete t.htmlForXfa, e._capability.resolve(new PDFDocumentProxy(t, this))
                                }), t.on("DocException", function(t) {
                                    let i;
                                    switch (t.name) {
                                        case "PasswordException":
                                            i = new _util.PasswordException(t.message, t.code);
                                            break;
                                        case "InvalidPDFException":
                                            i = new _util.InvalidPDFException(t.message);
                                            break;
                                        case "MissingPDFException":
                                            i = new _util.MissingPDFException(t.message);
                                            break;
                                        case "UnexpectedResponseException":
                                            i = new _util.UnexpectedResponseException(t.message, t.status);
                                            break;
                                        case "UnknownErrorException":
                                            i = new _util.UnknownErrorException(t.message, t.details);
                                            break;
                                        default:
                                            (0, _util.unreachable)("DocException - expected a valid Error.")
                                    }
                                    e._capability.reject(i)
                                }), t.on("PasswordRequest", t => {
                                    if (this._passwordCapability = new _util.PromiseCapability, e.onPassword) {
                                        let i = t => {
                                            t instanceof Error ? this._passwordCapability.reject(t) : this._passwordCapability.resolve({
                                                password: t
                                            })
                                        };
                                        try {
                                            e.onPassword(i, t.code)
                                        } catch (t) {
                                            this._passwordCapability.reject(t)
                                        }
                                    } else this._passwordCapability.reject(new _util.PasswordException(t.message, t.code));
                                    return this._passwordCapability.promise
                                }), t.on("DataLoaded", t => {
                                    e.onProgress?.({
                                        loaded: t.length,
                                        total: t.length
                                    }), this.downloadInfoCapability.resolve(t)
                                }), t.on("StartRenderPage", t => {
                                    this.destroyed || this.#d.get(t.pageIndex)._startRenderPage(t.transparency, t.cacheKey)
                                }), t.on("commonobj", ([e, i, s]) => {
                                    if (!(this.destroyed || this.commonObjs.has(e))) switch (i) {
                                        case "Font":
                                            let r = this._params;
                                            if ("error" in s) {
                                                let t = s.error;
                                                (0, _util.warn)(`Error during font loading: ${t}`), this.commonObjs.resolve(e, t);
                                                break
                                            }
                                            let a = r.pdfBug && globalThis.FontInspector?.enabled ? (t, e) => globalThis.FontInspector.fontAdded(t, e) : null,
                                                n = new _font_loader.FontFaceObject(s, {
                                                    isEvalSupported: r.isEvalSupported,
                                                    disableFontFace: r.disableFontFace,
                                                    ignoreErrors: r.ignoreErrors,
                                                    inspectFont: a
                                                });
                                            this.fontLoader.bind(n).catch(i => t.sendWithPromise("FontFallback", {
                                                id: e
                                            })).finally(() => {
                                                !r.fontExtraProperties && n.data && (n.data = null), this.commonObjs.resolve(e, n)
                                            });
                                            break;
                                        case "FontPath":
                                        case "Image":
                                        case "Pattern":
                                            this.commonObjs.resolve(e, s);
                                            break;
                                        default:
                                            throw Error(`Got unknown common object type ${i}`)
                                    }
                                }), t.on("obj", ([t, e, i, s]) => {
                                    if (this.destroyed) return;
                                    let r = this.#d.get(e);
                                    if (!r.objs.has(t)) switch (i) {
                                        case "Image":
                                            if (r.objs.resolve(t, s), s) {
                                                let t;
                                                if (s.bitmap) {
                                                    let {
                                                        width: e,
                                                        height: i
                                                    } = s;
                                                    t = e * i * 4
                                                } else t = s.data?.length || 0;
                                                t > _util.MAX_IMAGE_SIZE_TO_CACHE && (r._maybeCleanupAfterRender = !0)
                                            }
                                            break;
                                        case "Pattern":
                                            r.objs.resolve(t, s);
                                            break;
                                        default:
                                            throw Error(`Got unknown object type ${i}`)
                                    }
                                }), t.on("DocProgress", t => {
                                    this.destroyed || e.onProgress?.({
                                        loaded: t.loaded,
                                        total: t.total
                                    })
                                }), t.on("FetchBuiltInCMap", t => this.destroyed ? Promise.reject(Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(t) : Promise.reject(Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), t.on("FetchStandardFontData", t => this.destroyed ? Promise.reject(Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(t) : Promise.reject(Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")))
                            }
                            getData() {
                                return this.messageHandler.sendWithPromise("GetData", null)
                            }
                            saveDocument() {
                                return this.annotationStorage.size <= 0 && (0, _util.warn)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead."), this.messageHandler.sendWithPromise("SaveDocument", {
                                    isPureXfa: !!this._htmlForXfa,
                                    numPages: this._numPages,
                                    annotationStorage: this.annotationStorage.serializable,
                                    filename: this._fullReader?.filename ?? null
                                }).finally(() => {
                                    this.annotationStorage.resetModified()
                                })
                            }
                            getPage(t) {
                                if (!Number.isInteger(t) || t <= 0 || t > this._numPages) return Promise.reject(Error("Invalid page request."));
                                let e = t - 1,
                                    i = this.#c.get(e);
                                if (i) return i;
                                let s = this.messageHandler.sendWithPromise("GetPage", {
                                    pageIndex: e
                                }).then(t => {
                                    if (this.destroyed) throw Error("Transport destroyed");
                                    let i = new PDFPageProxy(e, t, this, this._params.pdfBug);
                                    return this.#d.set(e, i), i
                                });
                                return this.#c.set(e, s), s
                            }
                            getPageIndex(t) {
                                return "object" != typeof t || null === t || !Number.isInteger(t.num) || t.num < 0 || !Number.isInteger(t.gen) || t.gen < 0 ? Promise.reject(Error("Invalid pageIndex request.")) : this.messageHandler.sendWithPromise("GetPageIndex", {
                                    num: t.num,
                                    gen: t.gen
                                })
                            }
                            getAnnotations(t, e) {
                                return this.messageHandler.sendWithPromise("GetAnnotations", {
                                    pageIndex: t,
                                    intent: e
                                })
                            }
                            getFieldObjects() {
                                return this.#u("GetFieldObjects")
                            }
                            hasJSActions() {
                                return this.#u("HasJSActions")
                            }
                            getCalculationOrderIds() {
                                return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null)
                            }
                            getDestinations() {
                                return this.messageHandler.sendWithPromise("GetDestinations", null)
                            }
                            getDestination(t) {
                                return "string" != typeof t ? Promise.reject(Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
                                    id: t
                                })
                            }
                            getPageLabels() {
                                return this.messageHandler.sendWithPromise("GetPageLabels", null)
                            }
                            getPageLayout() {
                                return this.messageHandler.sendWithPromise("GetPageLayout", null)
                            }
                            getPageMode() {
                                return this.messageHandler.sendWithPromise("GetPageMode", null)
                            }
                            getViewerPreferences() {
                                return this.messageHandler.sendWithPromise("GetViewerPreferences", null)
                            }
                            getOpenAction() {
                                return this.messageHandler.sendWithPromise("GetOpenAction", null)
                            }
                            getAttachments() {
                                return this.messageHandler.sendWithPromise("GetAttachments", null)
                            }
                            getJavaScript() {
                                return this.messageHandler.sendWithPromise("GetJavaScript", null)
                            }
                            getDocJSActions() {
                                return this.messageHandler.sendWithPromise("GetDocJSActions", null)
                            }
                            getPageJSActions(t) {
                                return this.messageHandler.sendWithPromise("GetPageJSActions", {
                                    pageIndex: t
                                })
                            }
                            getStructTree(t) {
                                return this.messageHandler.sendWithPromise("GetStructTree", {
                                    pageIndex: t
                                })
                            }
                            getOutline() {
                                return this.messageHandler.sendWithPromise("GetOutline", null)
                            }
                            getOptionalContentConfig() {
                                return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then(t => new _optional_content_config.OptionalContentConfig(t))
                            }
                            getPermissions() {
                                return this.messageHandler.sendWithPromise("GetPermissions", null)
                            }
                            getMetadata() {
                                let t = "GetMetadata",
                                    e = this.#h.get(t);
                                if (e) return e;
                                let i = this.messageHandler.sendWithPromise(t, null).then(t => ({
                                    info: t[0],
                                    metadata: t[1] ? new _metadata.Metadata(t[1]) : null,
                                    contentDispositionFilename: this._fullReader?.filename ?? null,
                                    contentLength: this._fullReader?.contentLength ?? null
                                }));
                                return this.#h.set(t, i), i
                            }
                            getMarkInfo() {
                                return this.messageHandler.sendWithPromise("GetMarkInfo", null)
                            }
                            async startCleanup(t = !1) {
                                if (!this.destroyed) {
                                    for (let t of (await this.messageHandler.sendWithPromise("Cleanup", null), this.#d.values()))
                                        if (!t.cleanup()) throw Error(`startCleanup: Page ${t.pageNumber} is currently rendering.`);
                                    this.commonObjs.clear(), t || this.fontLoader.clear(), this.#h.clear(), this.filterFactory.destroy(!0)
                                }
                            }
                            get loadingParams() {
                                let {
                                    disableAutoFetch: t,
                                    enableXfa: e
                                } = this._params;
                                return (0, _util.shadow)(this, "loadingParams", {
                                    disableAutoFetch: t,
                                    enableXfa: e
                                })
                            }
                        }
                        class PDFObjects {
                            #p = Object.create(null);
                            #g(t) {
                                return this.#p[t] || (this.#p[t] = {
                                    capability: new _util.PromiseCapability,
                                    data: null
                                })
                            }
                            get(t, e = null) {
                                if (e) {
                                    let i = this.#g(t);
                                    return i.capability.promise.then(() => e(i.data)), null
                                }
                                let i = this.#p[t];
                                if (!i?.capability.settled) throw Error(`Requesting object that isn't resolved yet ${t}.`);
                                return i.data
                            }
                            has(t) {
                                let e = this.#p[t];
                                return e?.capability.settled || !1
                            }
                            resolve(t, e = null) {
                                let i = this.#g(t);
                                i.data = e, i.capability.resolve()
                            }
                            clear() {
                                for (let t in this.#p) {
                                    let {
                                        data: e
                                    } = this.#p[t];
                                    e?.bitmap?.close()
                                }
                                this.#p = Object.create(null)
                            }
                        }
                        class RenderTask {
                            #f = null;
                            constructor(t) {
                                this.#f = t, this.onContinue = null
                            }
                            get promise() {
                                return this.#f.capability.promise
                            }
                            cancel(t = 0) {
                                this.#f.cancel(null, t)
                            }
                            get separateAnnots() {
                                let {
                                    separateAnnots: t
                                } = this.#f.operatorList;
                                if (!t) return !1;
                                let {
                                    annotationCanvasMap: e
                                } = this.#f;
                                return t.form || t.canvas && e?.size > 0
                            }
                        }
                        exports.RenderTask = RenderTask;
                        class InternalRenderTask {
                            static #m = new WeakSet;
                            constructor({
                                callback: t,
                                params: e,
                                objs: i,
                                commonObjs: s,
                                annotationCanvasMap: r,
                                operatorList: a,
                                pageIndex: n,
                                canvasFactory: o,
                                filterFactory: l,
                                useRequestAnimationFrame: h = !1,
                                pdfBug: d = !1,
                                pageColors: c = null
                            }) {
                                this.callback = t, this.params = e, this.objs = i, this.commonObjs = s, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = n, this.canvasFactory = o, this.filterFactory = l, this._pdfBug = d, this.pageColors = c, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = !0 === h && "undefined" != typeof window, this.cancelled = !1, this.capability = new _util.PromiseCapability, this.task = new RenderTask(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas
                            }
                            get completed() {
                                return this.capability.promise.catch(function() {})
                            }
                            initializeGraphics({
                                transparency: t = !1,
                                optionalContentConfig: e
                            }) {
                                if (this.cancelled) return;
                                if (this._canvas) {
                                    if (InternalRenderTask.#m.has(this._canvas)) throw Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                                    InternalRenderTask.#m.add(this._canvas)
                                }
                                this._pdfBug && globalThis.StepperManager?.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
                                let {
                                    canvasContext: i,
                                    viewport: s,
                                    transform: r,
                                    background: a
                                } = this.params;
                                this.gfx = new _canvas.CanvasGraphics(i, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                                    optionalContentConfig: e
                                }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
                                    transform: r,
                                    viewport: s,
                                    transparency: t,
                                    background: a
                                }), this.operatorListIdx = 0, this.graphicsReady = !0, this.graphicsReadyCallback?.()
                            }
                            cancel(t = null, e = 0) {
                                this.running = !1, this.cancelled = !0, this.gfx?.endDrawing(), this._canvas && InternalRenderTask.#m.delete(this._canvas), this.callback(t || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex+1}`, "canvas", e))
                            }
                            operatorListChanged() {
                                if (!this.graphicsReady) {
                                    this.graphicsReadyCallback ||= this._continueBound;
                                    return
                                }
                                this.stepper?.updateOperatorList(this.operatorList), this.running || this._continue()
                            }
                            _continue() {
                                this.running = !0, this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext())
                            }
                            _scheduleNext() {
                                this._useRequestAnimationFrame ? window.requestAnimationFrame(() => {
                                    this._nextBound().catch(this._cancelBound)
                                }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound)
                            }
                            async _next() {
                                !this.cancelled && (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(this.pageColors), this._canvas && InternalRenderTask.#m.delete(this._canvas), this.callback())))
                            }
                        }
                        let version = "3.7.107";
                        exports.version = version;
                        let build = "036f855dc";
                        exports.build = build
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.PrintAnnotationStorage = e.AnnotationStorage = void 0;
                        var s = i(1),
                            r = i(4),
                            a = i(8);
                        class n {
                            #b = !1;
                            #A = new Map;
                            constructor() {
                                this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null
                            }
                            getValue(t, e) {
                                let i = this.#A.get(t);
                                return void 0 === i ? e : Object.assign(e, i)
                            }
                            getRawValue(t) {
                                return this.#A.get(t)
                            }
                            remove(t) {
                                if (this.#A.delete(t), 0 === this.#A.size && this.resetModified(), "function" == typeof this.onAnnotationEditor) {
                                    for (let t of this.#A.values())
                                        if (t instanceof r.AnnotationEditor) return;
                                    this.onAnnotationEditor(null)
                                }
                            }
                            setValue(t, e) {
                                let i = this.#A.get(t),
                                    s = !1;
                                if (void 0 !== i)
                                    for (let [t, r] of Object.entries(e)) i[t] !== r && (s = !0, i[t] = r);
                                else s = !0, this.#A.set(t, e);
                                s && this.#v(), e instanceof r.AnnotationEditor && "function" == typeof this.onAnnotationEditor && this.onAnnotationEditor(e.constructor._type)
                            }
                            has(t) {
                                return this.#A.has(t)
                            }
                            getAll() {
                                return this.#A.size > 0 ? (0, s.objectFromMap)(this.#A) : null
                            }
                            setAll(t) {
                                for (let [e, i] of Object.entries(t)) this.setValue(e, i)
                            }
                            get size() {
                                return this.#A.size
                            }
                            #v() {
                                this.#b || (this.#b = !0, "function" == typeof this.onSetModified && this.onSetModified())
                            }
                            resetModified() {
                                this.#b && (this.#b = !1, "function" == typeof this.onResetModified && this.onResetModified())
                            }
                            get print() {
                                return new o(this)
                            }
                            get serializable() {
                                if (0 === this.#A.size) return null;
                                let t = new Map;
                                for (let [e, i] of this.#A) {
                                    let s = i instanceof r.AnnotationEditor ? i.serialize() : i;
                                    s && t.set(e, s)
                                }
                                return t
                            }
                            static getHash(t) {
                                if (!t) return "";
                                let e = new a.MurmurHash3_64;
                                for (let [i, s] of t) e.update(`${i}:${JSON.stringify(s)}`);
                                return e.hexdigest()
                            }
                        }
                        e.AnnotationStorage = n;
                        class o extends n {
                            #y = null;
                            constructor(t) {
                                super(), this.#y = structuredClone(t.serializable)
                            }
                            get print() {
                                (0, s.unreachable)("Should not call PrintAnnotationStorage.print")
                            }
                            get serializable() {
                                return this.#y
                            }
                        }
                        e.PrintAnnotationStorage = o
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.AnnotationEditor = void 0;
                        var s = i(5),
                            r = i(1);
                        class a {
                            #_ = this.focusin.bind(this);
                            #S = this.focusout.bind(this);
                            #C = !1;
                            #x = !1;
                            #E = !1;
                            _uiManager = null;
                            #T = a._zIndex++;
                            static _colorManager = new s.ColorManager;
                            static _zIndex = 1;
                            constructor(t) {
                                this.constructor === a && (0, r.unreachable)("Cannot initialize AnnotationEditor."), this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager;
                                let {
                                    rotation: e,
                                    rawDims: {
                                        pageWidth: i,
                                        pageHeight: s,
                                        pageX: n,
                                        pageY: o
                                    }
                                } = this.parent.viewport;
                                this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [i, s], this.pageTranslation = [n, o];
                                let [l, h] = this.parentDimensions;
                                this.x = t.x / l, this.y = t.y / h, this.isAttachedToDOM = !1
                            }
                            static get _defaultLineColor() {
                                return (0, r.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"))
                            }
                            addCommands(t) {
                                this._uiManager.addCommands(t)
                            }
                            get currentLayer() {
                                return this._uiManager.currentLayer
                            }
                            setInBackground() {
                                this.div.style.zIndex = 0
                            }
                            setInForeground() {
                                this.div.style.zIndex = this.#T
                            }
                            setParent(t) {
                                null !== t && (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions), this.parent = t
                            }
                            focusin(t) {
                                this.#C ? this.#C = !1 : this.parent.setSelected(this)
                            }
                            focusout(t) {
                                if (!this.isAttachedToDOM) return;
                                let e = t.relatedTarget;
                                !e?.closest(`#${this.id}`) && (t.preventDefault(), this.parent?.isMultipleSelection || this.commitOrRemove())
                            }
                            commitOrRemove() {
                                this.isEmpty() ? this.remove() : this.commit()
                            }
                            commit() {
                                this.addToAnnotationStorage()
                            }
                            addToAnnotationStorage() {
                                this._uiManager.addToAnnotationStorage(this)
                            }
                            dragstart(t) {
                                let e = this.parent.div.getBoundingClientRect();
                                this.startX = t.clientX - e.x, this.startY = t.clientY - e.y, t.dataTransfer.setData("text/plain", this.id), t.dataTransfer.effectAllowed = "move"
                            }
                            setAt(t, e, i, s) {
                                let [r, a] = this.parentDimensions;
                                [i, s] = this.screenToPageTranslation(i, s), this.x = (t + i) / r, this.y = (e + s) / a, this.div.style.left = `${100*this.x}%`, this.div.style.top = `${100*this.y}%`
                            }
                            translate(t, e) {
                                let [i, s] = this.parentDimensions;
                                [t, e] = this.screenToPageTranslation(t, e), this.x += t / i, this.y += e / s, this.div.style.left = `${100*this.x}%`, this.div.style.top = `${100*this.y}%`
                            }
                            screenToPageTranslation(t, e) {
                                switch (this.parentRotation) {
                                    case 90:
                                        return [e, -t];
                                    case 180:
                                        return [-t, -e];
                                    case 270:
                                        return [-e, t];
                                    default:
                                        return [t, e]
                                }
                            }
                            get parentScale() {
                                return this._uiManager.viewParameters.realScale
                            }
                            get parentRotation() {
                                return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360
                            }
                            get parentDimensions() {
                                let {
                                    realScale: t
                                } = this._uiManager.viewParameters, [e, i] = this.pageDimensions;
                                return [e * t, i * t]
                            }
                            setDims(t, e) {
                                let [i, s] = this.parentDimensions;
                                this.div.style.width = `${100*t/i}%`, this.div.style.height = `${100*e/s}%`
                            }
                            fixDims() {
                                let {
                                    style: t
                                } = this.div, {
                                    height: e,
                                    width: i
                                } = t, s = i.endsWith("%"), r = e.endsWith("%");
                                if (s && r) return;
                                let [a, n] = this.parentDimensions;
                                s || (t.width = `${100*parseFloat(i)/a}%`), r || (t.height = `${100*parseFloat(e)/n}%`)
                            }
                            getInitialTranslation() {
                                return [0, 0]
                            }
                            render() {
                                this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.setAttribute("tabIndex", 0), this.setInForeground(), this.div.addEventListener("focusin", this.#_), this.div.addEventListener("focusout", this.#S);
                                let [t, e] = this.getInitialTranslation();
                                return this.translate(t, e), (0, s.bindEvents)(this, this.div, ["dragstart", "pointerdown"]), this.div
                            }
                            pointerdown(t) {
                                let {
                                    isMac: e
                                } = r.FeatureTest.platform;
                                if (0 !== t.button || t.ctrlKey && e) {
                                    t.preventDefault();
                                    return
                                }
                                t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this), this.#C = !0
                            }
                            getRect(t, e) {
                                let i = this.parentScale,
                                    [s, r] = this.pageDimensions,
                                    [a, n] = this.pageTranslation,
                                    o = t / i,
                                    l = e / i,
                                    h = this.x * s,
                                    d = this.y * r,
                                    c = this.width * s,
                                    u = this.height * r;
                                switch (this.rotation) {
                                    case 0:
                                        return [h + o + a, r - d - l - u + n, h + o + c + a, r - d - l + n];
                                    case 90:
                                        return [h + l + a, r - d + o + n, h + l + u + a, r - d + o + c + n];
                                    case 180:
                                        return [h - o - c + a, r - d + l + n, h - o + a, r - d + l + u + n];
                                    case 270:
                                        return [h - l - u + a, r - d - o - c + n, h - l + a, r - d - o + n];
                                    default:
                                        throw Error("Invalid rotation")
                                }
                            }
                            getRectInCurrentCoords(t, e) {
                                let [i, s, r, a] = t, n = r - i, o = a - s;
                                switch (this.rotation) {
                                    case 0:
                                        return [i, e - a, n, o];
                                    case 90:
                                        return [i, e - s, o, n];
                                    case 180:
                                        return [r, e - s, n, o];
                                    case 270:
                                        return [r, e - a, o, n];
                                    default:
                                        throw Error("Invalid rotation")
                                }
                            }
                            onceAdded() {}
                            isEmpty() {
                                return !1
                            }
                            enableEditMode() {
                                this.#E = !0
                            }
                            disableEditMode() {
                                this.#E = !1
                            }
                            isInEditMode() {
                                return this.#E
                            }
                            shouldGetKeyboardEvents() {
                                return !1
                            }
                            needsToBeRebuilt() {
                                return this.div && !this.isAttachedToDOM
                            }
                            rebuild() {
                                this.div?.addEventListener("focusin", this.#_)
                            }
                            serialize() {
                                (0, r.unreachable)("An editor must be serializable")
                            }
                            static deserialize(t, e, i) {
                                let s = new this.prototype.constructor({
                                    parent: e,
                                    id: e.getNextId(),
                                    uiManager: i
                                });
                                s.rotation = t.rotation;
                                let [r, a] = s.pageDimensions, [n, o, l, h] = s.getRectInCurrentCoords(t.rect, a);
                                return s.x = n / r, s.y = o / a, s.width = l / r, s.height = h / a, s
                            }
                            remove() {
                                this.div.removeEventListener("focusin", this.#_), this.div.removeEventListener("focusout", this.#S), this.isEmpty() || this.commit(), this.parent.remove(this)
                            }
                            select() {
                                this.div?.classList.add("selectedEditor")
                            }
                            unselect() {
                                this.div?.classList.remove("selectedEditor")
                            }
                            updateParams(t, e) {}
                            disableEditing() {}
                            enableEditing() {}
                            get propertiesToUpdate() {
                                return {}
                            }
                            get contentDiv() {
                                return this.div
                            }
                            get isEditing() {
                                return this.#x
                            }
                            set isEditing(t) {
                                this.#x = t, t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null)
                            }
                        }
                        e.AnnotationEditor = a
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.KeyboardManager = e.CommandManager = e.ColorManager = e.AnnotationEditorUIManager = void 0, e.bindEvents = a, e.opacityToHex = n;
                        var s = i(1),
                            r = i(6);

                        function a(t, e, i) {
                            for (let s of i) e.addEventListener(s, t[s].bind(t))
                        }

                        function n(t) {
                            return Math.round(Math.min(255, Math.max(1, 255 * t))).toString(16).padStart(2, "0")
                        }
                        class o {
                            #P = 0;
                            getId() {
                                return `${s.AnnotationEditorPrefix}${this.#P++}`
                            }
                        }
                        class l {
                            #M = [];
                            #w = !1;
                            #k;
                            #R = -1;
                            constructor(t = 128) {
                                this.#k = t
                            }
                            add({
                                cmd: t,
                                undo: e,
                                mustExec: i,
                                type: s = NaN,
                                overwriteIfSameType: r = !1,
                                keepUndo: a = !1
                            }) {
                                if (i && t(), this.#w) return;
                                let n = {
                                    cmd: t,
                                    undo: e,
                                    type: s
                                };
                                if (-1 === this.#R) {
                                    this.#M.length > 0 && (this.#M.length = 0), this.#R = 0, this.#M.push(n);
                                    return
                                }
                                if (r && this.#M[this.#R].type === s) {
                                    a && (n.undo = this.#M[this.#R].undo), this.#M[this.#R] = n;
                                    return
                                }
                                let o = this.#R + 1;
                                o === this.#k ? this.#M.splice(0, 1) : (this.#R = o, o < this.#M.length && this.#M.splice(o)), this.#M.push(n)
                            }
                            undo() {
                                -1 !== this.#R && (this.#w = !0, this.#M[this.#R].undo(), this.#w = !1, this.#R -= 1)
                            }
                            redo() {
                                this.#R < this.#M.length - 1 && (this.#R += 1, this.#w = !0, this.#M[this.#R].cmd(), this.#w = !1)
                            }
                            hasSomethingToUndo() {
                                return -1 !== this.#R
                            }
                            hasSomethingToRedo() {
                                return this.#R < this.#M.length - 1
                            }
                            destroy() {
                                this.#M = null
                            }
                        }
                        e.CommandManager = l;
                        class h {
                            constructor(t) {
                                this.buffer = [], this.callbacks = new Map, this.allKeys = new Set;
                                let {
                                    isMac: e
                                } = s.FeatureTest.platform;
                                for (let [i, s] of t)
                                    for (let t of i) {
                                        let i = t.startsWith("mac+");
                                        e && i ? (this.callbacks.set(t.slice(4), s), this.allKeys.add(t.split("+").at(-1))) : e || i || (this.callbacks.set(t, s), this.allKeys.add(t.split("+").at(-1)))
                                    }
                            }
                            #F(t) {
                                t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
                                let e = this.buffer.join("+");
                                return this.buffer.length = 0, e
                            }
                            exec(t, e) {
                                if (!this.allKeys.has(e.key)) return;
                                let i = this.callbacks.get(this.#F(e));
                                i && (i.bind(t)(), e.stopPropagation(), e.preventDefault())
                            }
                        }
                        e.KeyboardManager = h;
                        class d {
                            static _colorsMapping = new Map([
                                ["CanvasText", [0, 0, 0]],
                                ["Canvas", [255, 255, 255]]
                            ]);
                            get _colors() {
                                let t = new Map([
                                    ["CanvasText", null],
                                    ["Canvas", null]
                                ]);
                                return (0, r.getColorValues)(t), (0, s.shadow)(this, "_colors", t)
                            }
                            convert(t) {
                                let e = (0, r.getRGB)(t);
                                if (!window.matchMedia("(forced-colors: active)").matches) return e;
                                for (let [t, i] of this._colors)
                                    if (i.every((t, i) => t === e[i])) return d._colorsMapping.get(t);
                                return e
                            }
                            getHexCode(t) {
                                let e = this._colors.get(t);
                                return e ? s.Util.makeHexColor(...e) : t
                            }
                        }
                        e.ColorManager = d;
                        class c {
                            #O = null;
                            #I = new Map;
                            #D = new Map;
                            #L = null;
                            #N = new l;
                            #j = 0;
                            #B = null;
                            #U = new Set;
                            #G = null;
                            #H = new o;
                            #q = !1;
                            #W = s.AnnotationEditorType.NONE;
                            #z = new Set;
                            #V = this.copy.bind(this);
                            #$ = this.cut.bind(this);
                            #X = this.paste.bind(this);
                            #K = this.keydown.bind(this);
                            #Y = this.onEditingAction.bind(this);
                            #J = this.onPageChanging.bind(this);
                            #Q = this.onScaleChanging.bind(this);
                            #Z = this.onRotationChanging.bind(this);
                            #tt = {
                                isEditing: !1,
                                isEmpty: !0,
                                hasSomethingToUndo: !1,
                                hasSomethingToRedo: !1,
                                hasSelectedEditor: !1
                            };
                            #te = null;
                            static _keyboardManager = new h([
                                [
                                    ["ctrl+a", "mac+meta+a"], c.prototype.selectAll
                                ],
                                [
                                    ["ctrl+z", "mac+meta+z"], c.prototype.undo
                                ],
                                [
                                    ["ctrl+y", "ctrl+shift+Z", "mac+meta+shift+Z"], c.prototype.redo
                                ],
                                [
                                    ["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete"], c.prototype.delete
                                ],
                                [
                                    ["Escape", "mac+Escape"], c.prototype.unselectAll
                                ]
                            ]);
                            constructor(t, e, i) {
                                this.#te = t, this.#G = e, this.#G._on("editingaction", this.#Y), this.#G._on("pagechanging", this.#J), this.#G._on("scalechanging", this.#Q), this.#G._on("rotationchanging", this.#Z), this.#L = i, this.viewParameters = {
                                    realScale: r.PixelsPerInch.PDF_TO_CSS_UNITS,
                                    rotation: 0
                                }
                            }
                            destroy() {
                                for (let t of (this.#ti(), this.#G._off("editingaction", this.#Y), this.#G._off("pagechanging", this.#J), this.#G._off("scalechanging", this.#Q), this.#G._off("rotationchanging", this.#Z), this.#D.values())) t.destroy();
                                this.#D.clear(), this.#I.clear(), this.#U.clear(), this.#O = null, this.#z.clear(), this.#N.destroy()
                            }
                            onPageChanging({
                                pageNumber: t
                            }) {
                                this.#j = t - 1
                            }
                            focusMainContainer() {
                                this.#te.focus()
                            }
                            addShouldRescale(t) {
                                this.#U.add(t)
                            }
                            removeShouldRescale(t) {
                                this.#U.delete(t)
                            }
                            onScaleChanging({
                                scale: t
                            }) {
                                for (let e of (this.commitOrRemove(), this.viewParameters.realScale = t * r.PixelsPerInch.PDF_TO_CSS_UNITS, this.#U)) e.onScaleChanging()
                            }
                            onRotationChanging({
                                pagesRotation: t
                            }) {
                                this.commitOrRemove(), this.viewParameters.rotation = t
                            }
                            addToAnnotationStorage(t) {
                                t.isEmpty() || !this.#L || this.#L.has(t.id) || this.#L.setValue(t.id, t)
                            }
                            #ts() {
                                this.#te.addEventListener("keydown", this.#K)
                            }
                            #ti() {
                                this.#te.removeEventListener("keydown", this.#K)
                            }
                            #tr() {
                                document.addEventListener("copy", this.#V), document.addEventListener("cut", this.#$), document.addEventListener("paste", this.#X)
                            }
                            #ta() {
                                document.removeEventListener("copy", this.#V), document.removeEventListener("cut", this.#$), document.removeEventListener("paste", this.#X)
                            }
                            copy(t) {
                                if (t.preventDefault(), this.#O && this.#O.commitOrRemove(), !this.hasSelection) return;
                                let e = [];
                                for (let t of this.#z) t.isEmpty() || e.push(t.serialize());
                                0 !== e.length && t.clipboardData.setData("application/pdfjs", JSON.stringify(e))
                            }
                            cut(t) {
                                this.copy(t), this.delete()
                            }
                            paste(t) {
                                t.preventDefault();
                                let e = t.clipboardData.getData("application/pdfjs");
                                if (!e) return;
                                try {
                                    e = JSON.parse(e)
                                } catch (t) {
                                    (0, s.warn)(`paste: "${t.message}".`);
                                    return
                                }
                                if (!Array.isArray(e)) return;
                                this.unselectAll();
                                let i = this.#D.get(this.#j);
                                try {
                                    let t = [];
                                    for (let s of e) {
                                        let e = i.deserialize(s);
                                        if (!e) return;
                                        t.push(e)
                                    }
                                    let s = () => {
                                            for (let e of t) this.#tn(e);
                                            this.#to(t)
                                        },
                                        r = () => {
                                            for (let e of t) e.remove()
                                        };
                                    this.addCommands({
                                        cmd: s,
                                        undo: r,
                                        mustExec: !0
                                    })
                                } catch (t) {
                                    (0, s.warn)(`paste: "${t.message}".`)
                                }
                            }
                            keydown(t) {
                                this.getActive()?.shouldGetKeyboardEvents() || c._keyboardManager.exec(this, t)
                            }
                            onEditingAction(t) {
                                ["undo", "redo", "delete", "selectAll"].includes(t.name) && this[t.name]()
                            }
                            #tl(t) {
                                Object.entries(t).some(([t, e]) => this.#tt[t] !== e) && this.#G.dispatch("annotationeditorstateschanged", {
                                    source: this,
                                    details: Object.assign(this.#tt, t)
                                })
                            }
                            #th(t) {
                                this.#G.dispatch("annotationeditorparamschanged", {
                                    source: this,
                                    details: t
                                })
                            }
                            setEditingState(t) {
                                t ? (this.#ts(), this.#tr(), this.#tl({
                                    isEditing: this.#W !== s.AnnotationEditorType.NONE,
                                    isEmpty: this.#td(),
                                    hasSomethingToUndo: this.#N.hasSomethingToUndo(),
                                    hasSomethingToRedo: this.#N.hasSomethingToRedo(),
                                    hasSelectedEditor: !1
                                })) : (this.#ti(), this.#ta(), this.#tl({
                                    isEditing: !1
                                }))
                            }
                            registerEditorTypes(t) {
                                if (!this.#B)
                                    for (let e of (this.#B = t, this.#B)) this.#th(e.defaultPropertiesToUpdate)
                            }
                            getId() {
                                return this.#H.getId()
                            }
                            get currentLayer() {
                                return this.#D.get(this.#j)
                            }
                            get currentPageIndex() {
                                return this.#j
                            }
                            addLayer(t) {
                                this.#D.set(t.pageIndex, t), this.#q ? t.enable() : t.disable()
                            }
                            removeLayer(t) {
                                this.#D.delete(t.pageIndex)
                            }
                            updateMode(t) {
                                if (this.#W = t, t === s.AnnotationEditorType.NONE) this.setEditingState(!1), this.#tc();
                                else
                                    for (let e of (this.setEditingState(!0), this.#tu(), this.#D.values())) e.updateMode(t)
                            }
                            updateToolbar(t) {
                                t !== this.#W && this.#G.dispatch("switchannotationeditormode", {
                                    source: this,
                                    mode: t
                                })
                            }
                            updateParams(t, e) {
                                if (this.#B) {
                                    for (let i of this.#z) i.updateParams(t, e);
                                    for (let i of this.#B) i.updateDefaultParams(t, e)
                                }
                            }
                            #tu() {
                                if (!this.#q)
                                    for (let t of (this.#q = !0, this.#D.values())) t.enable()
                            }
                            #tc() {
                                if (this.unselectAll(), this.#q)
                                    for (let t of (this.#q = !1, this.#D.values())) t.disable()
                            }
                            getEditors(t) {
                                let e = [];
                                for (let i of this.#I.values()) i.pageIndex === t && e.push(i);
                                return e
                            }
                            getEditor(t) {
                                return this.#I.get(t)
                            }
                            addEditor(t) {
                                this.#I.set(t.id, t)
                            }
                            removeEditor(t) {
                                this.#I.delete(t.id), this.unselect(t), this.#L?.remove(t.id)
                            }
                            #tn(t) {
                                let e = this.#D.get(t.pageIndex);
                                e ? e.addOrRebuild(t) : this.addEditor(t)
                            }
                            setActiveEditor(t) {
                                this.#O !== t && (this.#O = t, t && this.#th(t.propertiesToUpdate))
                            }
                            toggleSelected(t) {
                                if (this.#z.has(t)) {
                                    this.#z.delete(t), t.unselect(), this.#tl({
                                        hasSelectedEditor: this.hasSelection
                                    });
                                    return
                                }
                                this.#z.add(t), t.select(), this.#th(t.propertiesToUpdate), this.#tl({
                                    hasSelectedEditor: !0
                                })
                            }
                            setSelected(t) {
                                for (let e of this.#z) e !== t && e.unselect();
                                this.#z.clear(), this.#z.add(t), t.select(), this.#th(t.propertiesToUpdate), this.#tl({
                                    hasSelectedEditor: !0
                                })
                            }
                            isSelected(t) {
                                return this.#z.has(t)
                            }
                            unselect(t) {
                                t.unselect(), this.#z.delete(t), this.#tl({
                                    hasSelectedEditor: this.hasSelection
                                })
                            }
                            get hasSelection() {
                                return 0 !== this.#z.size
                            }
                            undo() {
                                this.#N.undo(), this.#tl({
                                    hasSomethingToUndo: this.#N.hasSomethingToUndo(),
                                    hasSomethingToRedo: !0,
                                    isEmpty: this.#td()
                                })
                            }
                            redo() {
                                this.#N.redo(), this.#tl({
                                    hasSomethingToUndo: !0,
                                    hasSomethingToRedo: this.#N.hasSomethingToRedo(),
                                    isEmpty: this.#td()
                                })
                            }
                            addCommands(t) {
                                this.#N.add(t), this.#tl({
                                    hasSomethingToUndo: !0,
                                    hasSomethingToRedo: !1,
                                    isEmpty: this.#td()
                                })
                            }
                            #td() {
                                if (0 === this.#I.size) return !0;
                                if (1 === this.#I.size)
                                    for (let t of this.#I.values()) return t.isEmpty();
                                return !1
                            }
                            delete() {
                                if (this.commitOrRemove(), !this.hasSelection) return;
                                let t = [...this.#z],
                                    e = () => {
                                        for (let e of t) e.remove()
                                    },
                                    i = () => {
                                        for (let e of t) this.#tn(e)
                                    };
                                this.addCommands({
                                    cmd: e,
                                    undo: i,
                                    mustExec: !0
                                })
                            }
                            commitOrRemove() {
                                this.#O?.commitOrRemove()
                            }
                            #to(t) {
                                for (let e of (this.#z.clear(), t)) e.isEmpty() || (this.#z.add(e), e.select());
                                this.#tl({
                                    hasSelectedEditor: !0
                                })
                            }
                            selectAll() {
                                for (let t of this.#z) t.commit();
                                this.#to(this.#I.values())
                            }
                            unselectAll() {
                                if (this.#O) {
                                    this.#O.commitOrRemove();
                                    return
                                }
                                if (0 !== this.#z.size) {
                                    for (let t of this.#z) t.unselect();
                                    this.#z.clear(), this.#tl({
                                        hasSelectedEditor: !1
                                    })
                                }
                            }
                            isActive(t) {
                                return this.#O === t
                            }
                            getActive() {
                                return this.#O
                            }
                            getMode() {
                                return this.#W
                            }
                        }
                        e.AnnotationEditorUIManager = c
                    }, (t, e, i) => {
                        let s;
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.StatTimer = e.RenderingCancelledException = e.PixelsPerInch = e.PageViewport = e.PDFDateString = e.DOMStandardFontDataFactory = e.DOMSVGFactory = e.DOMFilterFactory = e.DOMCanvasFactory = e.DOMCMapReaderFactory = e.AnnotationPrefix = void 0, e.deprecated = x, e.getColorValues = M, e.getCurrentTransform = w, e.getCurrentTransformInverse = k, e.getFilenameFromUrl = v, e.getPdfFilenameFromUrl = y, e.getRGB = P, e.getXfaPageViewport = T, e.isDataScheme = b, e.isPdfFile = A, e.isValidFetchUrl = S, e.loadScript = C, e.setLayerDimensions = R;
                        var r = i(7),
                            a = i(1);
                        let n = "http://www.w3.org/2000/svg",
                            o = "pdfjs_internal_id_";
                        e.AnnotationPrefix = o;
                        class l {
                            static CSS = 96;
                            static PDF = 72;
                            static PDF_TO_CSS_UNITS = this.CSS / this.PDF
                        }
                        e.PixelsPerInch = l;
                        class h extends r.BaseFilterFactory {
                            #tp;
                            #tg;
                            #e;
                            #tf;
                            #tm;
                            #tb;
                            #tA;
                            #P = 0;
                            constructor({
                                docId: t,
                                ownerDocument: e = globalThis.document
                            } = {}) {
                                super(), this.#e = t, this.#tf = e
                            }
                            get #tv() {
                                return this.#tp ||= new Map
                            }
                            get #ty() {
                                if (!this.#tg) {
                                    let t = this.#tf.createElement("div"),
                                        {
                                            style: e
                                        } = t;
                                    e.visibility = "hidden", e.contain = "strict", e.width = e.height = 0, e.position = "absolute", e.top = e.left = 0, e.zIndex = -1;
                                    let i = this.#tf.createElementNS(n, "svg");
                                    i.setAttribute("width", 0), i.setAttribute("height", 0), this.#tg = this.#tf.createElementNS(n, "defs"), t.append(i), i.append(this.#tg), this.#tf.body.append(t)
                                }
                                return this.#tg
                            }
                            #t_(t, e, i) {
                                let s = this.#tf.createElementNS(n, e);
                                s.setAttribute("type", "discrete"), s.setAttribute("tableValues", i), t.append(s)
                            }
                            addFilter(t) {
                                let e, i, s, r;
                                if (!t) return "none";
                                let a = this.#tv.get(t);
                                if (a) return a;
                                if (1 === t.length) {
                                    let a = t[0],
                                        n = Array(256);
                                    for (let t = 0; t < 256; t++) n[t] = a[t] / 255;
                                    r = e = i = s = n.join(",")
                                } else {
                                    let [a, n, o] = t, l = Array(256), h = Array(256), d = Array(256);
                                    for (let t = 0; t < 256; t++) l[t] = a[t] / 255, h[t] = n[t] / 255, d[t] = o[t] / 255;
                                    e = l.join(","), i = h.join(","), s = d.join(","), r = `${e}${i}${s}`
                                }
                                if (a = this.#tv.get(r)) return this.#tv.set(t, a), a;
                                let o = `g_${this.#e}_transfer_map_${this.#P++}`,
                                    l = `url(#${o})`;
                                this.#tv.set(t, l), this.#tv.set(r, l);
                                let h = this.#tf.createElementNS(n, "filter", n);
                                h.setAttribute("id", o), h.setAttribute("color-interpolation-filters", "sRGB");
                                let d = this.#tf.createElementNS(n, "feComponentTransfer");
                                return h.append(d), this.#t_(d, "feFuncR", e), this.#t_(d, "feFuncG", i), this.#t_(d, "feFuncB", s), this.#ty.append(h), l
                            }
                            addHCMFilter(t, e) {
                                let i = `${t}-${e}`;
                                if (this.#tb === i || (this.#tb = i, this.#tA = "none", this.#tm?.remove(), !t || !e)) return this.#tA;
                                this.#ty.style.color = t;
                                let s = P(t = getComputedStyle(this.#ty).getPropertyValue("color"));
                                t = a.Util.makeHexColor(...s), this.#ty.style.color = e;
                                let r = P(e = getComputedStyle(this.#ty).getPropertyValue("color"));
                                if (e = a.Util.makeHexColor(...r), this.#ty.style.color = "", "#000000" === t && "#ffffff" === e || t === e) return this.#tA;
                                let o = Array(256);
                                for (let t = 0; t <= 255; t++) {
                                    let e = t / 255;
                                    o[t] = e <= .03928 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4
                                }
                                let l = o.join(","),
                                    h = `g_${this.#e}_hcm_filter`,
                                    d = this.#tm = this.#tf.createElementNS(n, "filter", n);
                                d.setAttribute("id", h), d.setAttribute("color-interpolation-filters", "sRGB");
                                let c = this.#tf.createElementNS(n, "feComponentTransfer");
                                d.append(c), this.#t_(c, "feFuncR", l), this.#t_(c, "feFuncG", l), this.#t_(c, "feFuncB", l);
                                let u = this.#tf.createElementNS(n, "feColorMatrix");
                                u.setAttribute("type", "matrix"), u.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), d.append(u), c = this.#tf.createElementNS(n, "feComponentTransfer"), d.append(c);
                                let p = (t, e) => {
                                    let i = s[t] / 255,
                                        a = r[t] / 255,
                                        n = Array(e + 1);
                                    for (let t = 0; t <= e; t++) n[t] = i + t / e * (a - i);
                                    return n.join(",")
                                };
                                return this.#t_(c, "feFuncR", p(0, 5)), this.#t_(c, "feFuncG", p(1, 5)), this.#t_(c, "feFuncB", p(2, 5)), this.#ty.append(d), this.#tA = `url(#${h})`, this.#tA
                            }
                            destroy(t = !1) {
                                t && this.#tA || (this.#tg && (this.#tg.parentNode.parentNode.remove(), this.#tg = null), this.#tp && (this.#tp.clear(), this.#tp = null), this.#P = 0)
                            }
                        }
                        e.DOMFilterFactory = h;
                        class d extends r.BaseCanvasFactory {
                            constructor({
                                ownerDocument: t = globalThis.document
                            } = {}) {
                                super(), this._document = t
                            }
                            _createCanvas(t, e) {
                                let i = this._document.createElement("canvas");
                                return i.width = t, i.height = e, i
                            }
                        }
                        async function c(t, e = !1) {
                            if (S(t, document.baseURI)) {
                                let i = await fetch(t);
                                if (!i.ok) throw Error(i.statusText);
                                return e ? new Uint8Array(await i.arrayBuffer()) : (0, a.stringToBytes)(await i.text())
                            }
                            return new Promise((i, s) => {
                                let r = new XMLHttpRequest;
                                r.open("GET", t, !0), e && (r.responseType = "arraybuffer"), r.onreadystatechange = () => {
                                    if (r.readyState === XMLHttpRequest.DONE) {
                                        if (200 === r.status || 0 === r.status) {
                                            let t;
                                            if (e && r.response ? t = new Uint8Array(r.response) : !e && r.responseText && (t = (0, a.stringToBytes)(r.responseText)), t) {
                                                i(t);
                                                return
                                            }
                                        }
                                        s(Error(r.statusText))
                                    }
                                }, r.send(null)
                            })
                        }
                        e.DOMCanvasFactory = d;
                        class u extends r.BaseCMapReaderFactory {
                            _fetchData(t, e) {
                                return c(t, this.isCompressed).then(t => ({
                                    cMapData: t,
                                    compressionType: e
                                }))
                            }
                        }
                        e.DOMCMapReaderFactory = u;
                        class p extends r.BaseStandardFontDataFactory {
                            _fetchData(t) {
                                return c(t, !0)
                            }
                        }
                        e.DOMStandardFontDataFactory = p;
                        class g extends r.BaseSVGFactory {
                            _createSVG(t) {
                                return document.createElementNS(n, t)
                            }
                        }
                        e.DOMSVGFactory = g;
                        class f {
                            constructor({
                                viewBox: t,
                                scale: e,
                                rotation: i,
                                offsetX: s = 0,
                                offsetY: r = 0,
                                dontFlip: a = !1
                            }) {
                                let n, o, l, h, d, c, u, p;
                                this.viewBox = t, this.scale = e, this.rotation = i, this.offsetX = s, this.offsetY = r;
                                let g = (t[2] + t[0]) / 2,
                                    f = (t[3] + t[1]) / 2;
                                switch ((i %= 360) < 0 && (i += 360), i) {
                                    case 180:
                                        n = -1, o = 0, l = 0, h = 1;
                                        break;
                                    case 90:
                                        n = 0, o = 1, l = 1, h = 0;
                                        break;
                                    case 270:
                                        n = 0, o = -1, l = -1, h = 0;
                                        break;
                                    case 0:
                                        n = 1, o = 0, l = 0, h = -1;
                                        break;
                                    default:
                                        throw Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.")
                                }
                                a && (l = -l, h = -h), 0 === n ? (d = Math.abs(f - t[1]) * e + s, c = Math.abs(g - t[0]) * e + r, u = (t[3] - t[1]) * e, p = (t[2] - t[0]) * e) : (d = Math.abs(g - t[0]) * e + s, c = Math.abs(f - t[1]) * e + r, u = (t[2] - t[0]) * e, p = (t[3] - t[1]) * e), this.transform = [n * e, o * e, l * e, h * e, d - n * e * g - l * e * f, c - o * e * g - h * e * f], this.width = u, this.height = p
                            }
                            get rawDims() {
                                let {
                                    viewBox: t
                                } = this;
                                return (0, a.shadow)(this, "rawDims", {
                                    pageWidth: t[2] - t[0],
                                    pageHeight: t[3] - t[1],
                                    pageX: t[0],
                                    pageY: t[1]
                                })
                            }
                            clone({
                                scale: t = this.scale,
                                rotation: e = this.rotation,
                                offsetX: i = this.offsetX,
                                offsetY: s = this.offsetY,
                                dontFlip: r = !1
                            } = {}) {
                                return new f({
                                    viewBox: this.viewBox.slice(),
                                    scale: t,
                                    rotation: e,
                                    offsetX: i,
                                    offsetY: s,
                                    dontFlip: r
                                })
                            }
                            convertToViewportPoint(t, e) {
                                return a.Util.applyTransform([t, e], this.transform)
                            }
                            convertToViewportRectangle(t) {
                                let e = a.Util.applyTransform([t[0], t[1]], this.transform),
                                    i = a.Util.applyTransform([t[2], t[3]], this.transform);
                                return [e[0], e[1], i[0], i[1]]
                            }
                            convertToPdfPoint(t, e) {
                                return a.Util.applyInverseTransform([t, e], this.transform)
                            }
                        }
                        e.PageViewport = f;
                        class m extends a.BaseException {
                            constructor(t, e, i = 0) {
                                super(t, "RenderingCancelledException"), this.type = e, this.extraDelay = i
                            }
                        }

                        function b(t) {
                            let e = t.length,
                                i = 0;
                            for (; i < e && "" === t[i].trim();) i++;
                            return "data:" === t.substring(i, i + 5).toLowerCase()
                        }

                        function A(t) {
                            return "string" == typeof t && /\.pdf$/i.test(t)
                        }

                        function v(t, e = !1) {
                            return e || ([t] = t.split(/[#?]/, 1)), t.substring(t.lastIndexOf("/") + 1)
                        }

                        function y(t, e = "document.pdf") {
                            if ("string" != typeof t) return e;
                            if (b(t)) return (0, a.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), e;
                            let i = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i,
                                s = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(t),
                                r = i.exec(s[1]) || i.exec(s[2]) || i.exec(s[3]);
                            if (r && (r = r[0]).includes("%")) try {
                                r = i.exec(decodeURIComponent(r))[0]
                            } catch (t) {}
                            return r || e
                        }
                        e.RenderingCancelledException = m;
                        class _ {
                            started = Object.create(null);
                            times = [];
                            time(t) {
                                t in this.started && (0, a.warn)(`Timer is already running for ${t}`), this.started[t] = Date.now()
                            }
                            timeEnd(t) {
                                t in this.started || (0, a.warn)(`Timer has not been started for ${t}`), this.times.push({
                                    name: t,
                                    start: this.started[t],
                                    end: Date.now()
                                }), delete this.started[t]
                            }
                            toString() {
                                let t = [],
                                    e = 0;
                                for (let {
                                        name: t
                                    }
                                    of this.times) e = Math.max(t.length, e);
                                for (let {
                                        name: i,
                                        start: s,
                                        end: r
                                    }
                                    of this.times) t.push(`${i.padEnd(e)} ${r-s}ms
`);
                                return t.join("")
                            }
                        }

                        function S(t, e) {
                            try {
                                let {
                                    protocol: i
                                } = e ? new URL(t, e) : new URL(t);
                                return "http:" === i || "https:" === i
                            } catch (t) {
                                return !1
                            }
                        }

                        function C(t, e = !1) {
                            return new Promise((i, s) => {
                                let r = document.createElement("script");
                                r.src = t, r.onload = function(t) {
                                    e && r.remove(), i(t)
                                }, r.onerror = function() {
                                    s(Error(`Cannot load script at: ${r.src}`))
                                }, (document.head || document.documentElement).append(r)
                            })
                        }

                        function x(t) {
                            console.log("Deprecated API usage: " + t)
                        }
                        e.StatTimer = _;
                        class E {
                            static toDateObject(t) {
                                if (!t || "string" != typeof t) return null;
                                let e = (s ||= RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?")).exec(t);
                                if (!e) return null;
                                let i = parseInt(e[1], 10),
                                    r = parseInt(e[2], 10);
                                r = r >= 1 && r <= 12 ? r - 1 : 0;
                                let a = parseInt(e[3], 10);
                                a = a >= 1 && a <= 31 ? a : 1;
                                let n = parseInt(e[4], 10);
                                n = n >= 0 && n <= 23 ? n : 0;
                                let o = parseInt(e[5], 10);
                                o = o >= 0 && o <= 59 ? o : 0;
                                let l = parseInt(e[6], 10);
                                l = l >= 0 && l <= 59 ? l : 0;
                                let h = e[7] || "Z",
                                    d = parseInt(e[8], 10);
                                d = d >= 0 && d <= 23 ? d : 0;
                                let c = parseInt(e[9], 10) || 0;
                                return c = c >= 0 && c <= 59 ? c : 0, "-" === h ? (n += d, o += c) : "+" === h && (n -= d, o -= c), new Date(Date.UTC(i, r, a, n, o, l))
                            }
                        }

                        function T(t, {
                            scale: e = 1,
                            rotation: i = 0
                        }) {
                            let {
                                width: s,
                                height: r
                            } = t.attributes.style;
                            return new f({
                                viewBox: [0, 0, parseInt(s), parseInt(r)],
                                scale: e,
                                rotation: i
                            })
                        }

                        function P(t) {
                            if (t.startsWith("#")) {
                                let e = parseInt(t.slice(1), 16);
                                return [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]
                            }
                            return t.startsWith("rgb(") ? t.slice(4, -1).split(",").map(t => parseInt(t)) : t.startsWith("rgba(") ? t.slice(5, -1).split(",").map(t => parseInt(t)).slice(0, 3) : ((0, a.warn)(`Not a valid color format: "${t}"`), [0, 0, 0])
                        }

                        function M(t) {
                            let e = document.createElement("span");
                            for (let i of (e.style.visibility = "hidden", document.body.append(e), t.keys())) {
                                e.style.color = i;
                                let s = window.getComputedStyle(e).color;
                                t.set(i, P(s))
                            }
                            e.remove()
                        }

                        function w(t) {
                            let {
                                a: e,
                                b: i,
                                c: s,
                                d: r,
                                e: a,
                                f: n
                            } = t.getTransform();
                            return [e, i, s, r, a, n]
                        }

                        function k(t) {
                            let {
                                a: e,
                                b: i,
                                c: s,
                                d: r,
                                e: a,
                                f: n
                            } = t.getTransform().invertSelf();
                            return [e, i, s, r, a, n]
                        }

                        function R(t, e, i = !1, s = !0) {
                            if (e instanceof f) {
                                let {
                                    pageWidth: s,
                                    pageHeight: r
                                } = e.rawDims, {
                                    style: a
                                } = t, n = `calc(var(--scale-factor) * ${s}px)`, o = `calc(var(--scale-factor) * ${r}px)`;
                                i && e.rotation % 180 != 0 ? (a.width = o, a.height = n) : (a.width = n, a.height = o)
                            }
                            s && t.setAttribute("data-main-rotation", e.rotation)
                        }
                        e.PDFDateString = E
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.BaseStandardFontDataFactory = e.BaseSVGFactory = e.BaseFilterFactory = e.BaseCanvasFactory = e.BaseCMapReaderFactory = void 0;
                        var s = i(1);
                        class r {
                            constructor() {
                                this.constructor === r && (0, s.unreachable)("Cannot initialize BaseFilterFactory.")
                            }
                            addFilter(t) {
                                return "none"
                            }
                            addHCMFilter(t, e) {
                                return "none"
                            }
                            destroy(t = !1) {}
                        }
                        e.BaseFilterFactory = r;
                        class a {
                            constructor() {
                                this.constructor === a && (0, s.unreachable)("Cannot initialize BaseCanvasFactory.")
                            }
                            create(t, e) {
                                if (t <= 0 || e <= 0) throw Error("Invalid canvas size");
                                let i = this._createCanvas(t, e);
                                return {
                                    canvas: i,
                                    context: i.getContext("2d")
                                }
                            }
                            reset(t, e, i) {
                                if (!t.canvas) throw Error("Canvas is not specified");
                                if (e <= 0 || i <= 0) throw Error("Invalid canvas size");
                                t.canvas.width = e, t.canvas.height = i
                            }
                            destroy(t) {
                                if (!t.canvas) throw Error("Canvas is not specified");
                                t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null
                            }
                            _createCanvas(t, e) {
                                (0, s.unreachable)("Abstract method `_createCanvas` called.")
                            }
                        }
                        e.BaseCanvasFactory = a;
                        class n {
                            constructor({
                                baseUrl: t = null,
                                isCompressed: e = !0
                            }) {
                                this.constructor === n && (0, s.unreachable)("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = t, this.isCompressed = e
                            }
                            async fetch({
                                name: t
                            }) {
                                if (!this.baseUrl) throw Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
                                if (!t) throw Error("CMap name must be specified.");
                                let e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : ""),
                                    i = this.isCompressed ? s.CMapCompressionType.BINARY : s.CMapCompressionType.NONE;
                                return this._fetchData(e, i).catch(t => {
                                    throw Error(`Unable to load ${this.isCompressed?"binary ":""}CMap at: ${e}`)
                                })
                            }
                            _fetchData(t, e) {
                                (0, s.unreachable)("Abstract method `_fetchData` called.")
                            }
                        }
                        e.BaseCMapReaderFactory = n;
                        class o {
                            constructor({
                                baseUrl: t = null
                            }) {
                                this.constructor === o && (0, s.unreachable)("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = t
                            }
                            async fetch({
                                filename: t
                            }) {
                                if (!this.baseUrl) throw Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
                                if (!t) throw Error("Font filename must be specified.");
                                let e = `${this.baseUrl}${t}`;
                                return this._fetchData(e).catch(t => {
                                    throw Error(`Unable to load font data at: ${e}`)
                                })
                            }
                            _fetchData(t) {
                                (0, s.unreachable)("Abstract method `_fetchData` called.")
                            }
                        }
                        e.BaseStandardFontDataFactory = o;
                        class l {
                            constructor() {
                                this.constructor === l && (0, s.unreachable)("Cannot initialize BaseSVGFactory.")
                            }
                            create(t, e, i = !1) {
                                if (t <= 0 || e <= 0) throw Error("Invalid SVG dimensions");
                                let s = this._createSVG("svg:svg");
                                return s.setAttribute("version", "1.1"), i || (s.setAttribute("width", `${t}px`), s.setAttribute("height", `${e}px`)), s.setAttribute("preserveAspectRatio", "none"), s.setAttribute("viewBox", `0 0 ${t} ${e}`), s
                            }
                            createElement(t) {
                                if ("string" != typeof t) throw Error("Invalid SVG element type");
                                return this._createSVG(t)
                            }
                            _createSVG(t) {
                                (0, s.unreachable)("Abstract method `_createSVG` called.")
                            }
                        }
                        e.BaseSVGFactory = l
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.MurmurHash3_64 = void 0;
                        var s = i(1);
                        let r = 3285377520,
                            a = 4294901760,
                            n = 65535;
                        class o {
                            constructor(t) {
                                this.h1 = t ? 4294967295 & t : r, this.h2 = t ? 4294967295 & t : r
                            }
                            update(t) {
                                let e, i;
                                if ("string" == typeof t) {
                                    e = new Uint8Array(2 * t.length), i = 0;
                                    for (let s = 0, r = t.length; s < r; s++) {
                                        let r = t.charCodeAt(s);
                                        r <= 255 ? e[i++] = r : (e[i++] = r >>> 8, e[i++] = 255 & r)
                                    }
                                } else if ((0, s.isArrayBuffer)(t)) i = (e = t.slice()).byteLength;
                                else throw Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");
                                let r = i >> 2,
                                    o = i - 4 * r,
                                    l = new Uint32Array(e.buffer, 0, r),
                                    h = 0,
                                    d = 0,
                                    c = this.h1,
                                    u = this.h2,
                                    p = 3432918353,
                                    g = 461845907,
                                    f = 3432918353 & n,
                                    m = 461845907 & n;
                                for (let t = 0; t < r; t++) 1 & t ? (c ^= h = (h = (h = (h = l[t]) * p & a | h * f & n) << 15 | h >>> 17) * g & a | h * m & n, c = 5 * (c = c << 13 | c >>> 19) + 3864292196) : (u ^= d = (d = (d = (d = l[t]) * p & a | d * f & n) << 15 | d >>> 17) * g & a | d * m & n, u = 5 * (u = u << 13 | u >>> 19) + 3864292196);
                                switch (h = 0, o) {
                                    case 3:
                                        h ^= e[4 * r + 2] << 16;
                                    case 2:
                                        h ^= e[4 * r + 1] << 8;
                                    case 1:
                                        h ^= e[4 * r], h = (h = (h = h * p & a | h * f & n) << 15 | h >>> 17) * g & a | h * m & n, 1 & r ? c ^= h : u ^= h
                                }
                                this.h1 = c, this.h2 = u
                            }
                            hexdigest() {
                                let t = this.h1,
                                    e = this.h2;
                                return t ^= e >>> 1, t = 3981806797 * t & a | 36045 * t & n, e = 4283543511 * e & a | ((e << 16 | t >>> 16) * 2950163797 & a) >>> 16, t ^= e >>> 1, t = 444984403 * t & a | 60499 * t & n, e = 3301882366 * e & a | ((e << 16 | t >>> 16) * 3120437893 & a) >>> 16, ((t ^= e >>> 1) >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0")
                            }
                        }
                        e.MurmurHash3_64 = o
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.FontLoader = e.FontFaceObject = void 0;
                        var s = i(1),
                            r = i(10);
                        class a {
                            #tS = new Set;
                            constructor({
                                ownerDocument: t = globalThis.document,
                                styleElement: e = null
                            }) {
                                this._document = t, this.nativeFontFaces = new Set, this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0
                            }
                            addNativeFontFace(t) {
                                this.nativeFontFaces.add(t), this._document.fonts.add(t)
                            }
                            removeNativeFontFace(t) {
                                this.nativeFontFaces.delete(t), this._document.fonts.delete(t)
                            }
                            insertRule(t) {
                                this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
                                let e = this.styleElement.sheet;
                                e.insertRule(t, e.cssRules.length)
                            }
                            clear() {
                                for (let t of this.nativeFontFaces) this._document.fonts.delete(t);
                                this.nativeFontFaces.clear(), this.#tS.clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null)
                            }
                            async loadSystemFont(t) {
                                if (!(!t || this.#tS.has(t.loadedName))) {
                                    if ((0, s.assert)(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
                                        let {
                                            loadedName: e,
                                            src: i,
                                            style: r
                                        } = t, a = new FontFace(e, i, r);
                                        this.addNativeFontFace(a);
                                        try {
                                            await a.load(), this.#tS.add(e)
                                        } catch {
                                            (0, s.warn)(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(a)
                                        }
                                        return
                                    }(0, s.unreachable)("Not implemented: loadSystemFont without the Font Loading API.")
                                }
                            }
                            async bind(t) {
                                if (t.attached || t.missingFile && !t.systemFontInfo) return;
                                if (t.attached = !0, t.systemFontInfo) {
                                    await this.loadSystemFont(t.systemFontInfo);
                                    return
                                }
                                if (this.isFontLoadingAPISupported) {
                                    let e = t.createNativeFontFace();
                                    if (e) {
                                        this.addNativeFontFace(e);
                                        try {
                                            await e.loaded
                                        } catch (i) {
                                            throw (0, s.warn)(`Failed to load font '${e.family}': '${i}'.`), t.disableFontFace = !0, i
                                        }
                                    }
                                    return
                                }
                                let e = t.createFontFaceRule();
                                if (e) {
                                    if (this.insertRule(e), this.isSyncFontLoadingSupported) return;
                                    await new Promise(e => {
                                        let i = this._queueLoadingCallback(e);
                                        this._prepareFontLoadEvent(t, i)
                                    })
                                }
                            }
                            get isFontLoadingAPISupported() {
                                let t = !!this._document?.fonts;
                                return (0, s.shadow)(this, "isFontLoadingAPISupported", t)
                            }
                            get isSyncFontLoadingSupported() {
                                let t = !1;
                                return r.isNodeJS ? t = !0 : "undefined" != typeof navigator && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent) && (t = !0), (0, s.shadow)(this, "isSyncFontLoadingSupported", t)
                            }
                            _queueLoadingCallback(t) {
                                let {
                                    loadingRequests: e
                                } = this, i = {
                                    done: !1,
                                    complete: function() {
                                        for ((0, s.assert)(!i.done, "completeRequest() cannot be called twice."), i.done = !0; e.length > 0 && e[0].done;) setTimeout(e.shift().callback, 0)
                                    },
                                    callback: t
                                };
                                return e.push(i), i
                            }
                            get _loadTestFont() {
                                let t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
                                return (0, s.shadow)(this, "_loadTestFont", t)
                            }
                            _prepareFontLoadEvent(t, e) {
                                let i, r;

                                function a(t, e) {
                                    return t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | 255 & t.charCodeAt(e + 3)
                                }

                                function n(t, e, i, s) {
                                    return t.substring(0, e) + s + t.substring(e + i)
                                }
                                let o = this._document.createElement("canvas");
                                o.width = 1, o.height = 1;
                                let l = o.getContext("2d"),
                                    h = 0;

                                function d(t, e) {
                                    if (++h > 30) {
                                        (0, s.warn)("Load test font never loaded."), e();
                                        return
                                    }
                                    if (l.font = "30px " + t, l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
                                        e();
                                        return
                                    }
                                    setTimeout(d.bind(null, t, e))
                                }
                                let c = `lt${Date.now()}${this.loadTestFontId++}`,
                                    u = this._loadTestFont;
                                u = n(u, 976, c.length, c);
                                let p = 16,
                                    g = 1482184792,
                                    f = a(u, 16);
                                for (i = 0, r = c.length - 3; i < r; i += 4) f = f - g + a(c, i) | 0;
                                i < c.length && (f = f - g + a(c + "XXX", i) | 0), u = n(u, p, 4, (0, s.string32)(f));
                                let m = `url(data:font/opentype;base64,${btoa(u)});`,
                                    b = `@font-face {font-family:"${c}";src:${m}}`;
                                this.insertRule(b);
                                let A = this._document.createElement("div");
                                for (let e of (A.style.visibility = "hidden", A.style.width = A.style.height = "10px", A.style.position = "absolute", A.style.top = A.style.left = "0px", [t.loadedName, c])) {
                                    let t = this._document.createElement("span");
                                    t.textContent = "Hi", t.style.fontFamily = e, A.append(t)
                                }
                                this._document.body.append(A), d(c, () => {
                                    A.remove(), e.complete()
                                })
                            }
                        }
                        e.FontLoader = a;
                        class n {
                            constructor(t, {
                                isEvalSupported: e = !0,
                                disableFontFace: i = !1,
                                ignoreErrors: s = !1,
                                inspectFont: r = null
                            }) {
                                for (let e in this.compiledGlyphs = Object.create(null), t) this[e] = t[e];
                                this.isEvalSupported = !1 !== e, this.disableFontFace = !0 === i, this.ignoreErrors = !0 === s, this._inspectFont = r
                            }
                            createNativeFontFace() {
                                let t;
                                if (!this.data || this.disableFontFace) return null;
                                if (this.cssFontInfo) {
                                    let e = {
                                        weight: this.cssFontInfo.fontWeight
                                    };
                                    this.cssFontInfo.italicAngle && (e.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, e)
                                } else t = new FontFace(this.loadedName, this.data, {});
                                return this._inspectFont?.(this), t
                            }
                            createFontFaceRule() {
                                let t;
                                if (!this.data || this.disableFontFace) return null;
                                let e = (0, s.bytesToString)(this.data),
                                    i = `url(data:${this.mimetype};base64,${btoa(e)});`;
                                if (this.cssFontInfo) {
                                    let e = `font-weight: ${this.cssFontInfo.fontWeight};`;
                                    this.cssFontInfo.italicAngle && (e += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), t = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${e}src:${i}}`
                                } else t = `@font-face {font-family:"${this.loadedName}";src:${i}}`;
                                return this._inspectFont?.(this, i), t
                            }
                            getPathGenerator(t, e) {
                                let i;
                                if (void 0 !== this.compiledGlyphs[e]) return this.compiledGlyphs[e];
                                try {
                                    i = t.get(this.loadedName + "_path_" + e)
                                } catch (t) {
                                    if (!this.ignoreErrors) throw t;
                                    return (0, s.warn)(`getPathGenerator - ignoring character: "${t}".`), this.compiledGlyphs[e] = function(t, e) {}
                                }
                                if (this.isEvalSupported && s.FeatureTest.isEvalSupported) {
                                    let t = [];
                                    for (let e of i) {
                                        let i = void 0 !== e.args ? e.args.join(",") : "";
                                        t.push("c.", e.cmd, "(", i, ");\n")
                                    }
                                    return this.compiledGlyphs[e] = Function("c", "size", t.join(""))
                                }
                                return this.compiledGlyphs[e] = function(t, e) {
                                    for (let s of i) "scale" === s.cmd && (s.args = [e, -e]), t[s.cmd].apply(t, s.args)
                                }
                            }
                        }
                        e.FontFaceObject = n
                    }, (t, e) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.isNodeJS = void 0;
                        let i = "object" == typeof process && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && "browser" !== process.type);
                        e.isNodeJS = i
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.CanvasGraphics = void 0;
                        var s = i(1),
                            r = i(6),
                            a = i(12),
                            n = i(13),
                            o = i(10);
                        let l = 16,
                            h = 100,
                            d = 4096,
                            c = 15,
                            u = 10,
                            p = 1e3,
                            g = 16;

                        function f(t, e) {
                            if (t._removeMirroring) throw Error("Context is already forwarding operations.");
                            t.__originalSave = t.save, t.__originalRestore = t.restore, t.__originalRotate = t.rotate, t.__originalScale = t.scale, t.__originalTranslate = t.translate, t.__originalTransform = t.transform, t.__originalSetTransform = t.setTransform, t.__originalResetTransform = t.resetTransform, t.__originalClip = t.clip, t.__originalMoveTo = t.moveTo, t.__originalLineTo = t.lineTo, t.__originalBezierCurveTo = t.bezierCurveTo, t.__originalRect = t.rect, t.__originalClosePath = t.closePath, t.__originalBeginPath = t.beginPath, t._removeMirroring = () => {
                                t.save = t.__originalSave, t.restore = t.__originalRestore, t.rotate = t.__originalRotate, t.scale = t.__originalScale, t.translate = t.__originalTranslate, t.transform = t.__originalTransform, t.setTransform = t.__originalSetTransform, t.resetTransform = t.__originalResetTransform, t.clip = t.__originalClip, t.moveTo = t.__originalMoveTo, t.lineTo = t.__originalLineTo, t.bezierCurveTo = t.__originalBezierCurveTo, t.rect = t.__originalRect, t.closePath = t.__originalClosePath, t.beginPath = t.__originalBeginPath, delete t._removeMirroring
                            }, t.save = function() {
                                e.save(), this.__originalSave()
                            }, t.restore = function() {
                                e.restore(), this.__originalRestore()
                            }, t.translate = function(t, i) {
                                e.translate(t, i), this.__originalTranslate(t, i)
                            }, t.scale = function(t, i) {
                                e.scale(t, i), this.__originalScale(t, i)
                            }, t.transform = function(t, i, s, r, a, n) {
                                e.transform(t, i, s, r, a, n), this.__originalTransform(t, i, s, r, a, n)
                            }, t.setTransform = function(t, i, s, r, a, n) {
                                e.setTransform(t, i, s, r, a, n), this.__originalSetTransform(t, i, s, r, a, n)
                            }, t.resetTransform = function() {
                                e.resetTransform(), this.__originalResetTransform()
                            }, t.rotate = function(t) {
                                e.rotate(t), this.__originalRotate(t)
                            }, t.clip = function(t) {
                                e.clip(t), this.__originalClip(t)
                            }, t.moveTo = function(t, i) {
                                e.moveTo(t, i), this.__originalMoveTo(t, i)
                            }, t.lineTo = function(t, i) {
                                e.lineTo(t, i), this.__originalLineTo(t, i)
                            }, t.bezierCurveTo = function(t, i, s, r, a, n) {
                                e.bezierCurveTo(t, i, s, r, a, n), this.__originalBezierCurveTo(t, i, s, r, a, n)
                            }, t.rect = function(t, i, s, r) {
                                e.rect(t, i, s, r), this.__originalRect(t, i, s, r)
                            }, t.closePath = function() {
                                e.closePath(), this.__originalClosePath()
                            }, t.beginPath = function() {
                                e.beginPath(), this.__originalBeginPath()
                            }
                        }
                        class m {
                            constructor(t) {
                                this.canvasFactory = t, this.cache = Object.create(null)
                            }
                            getCanvas(t, e, i) {
                                let s;
                                return void 0 !== this.cache[t] ? (s = this.cache[t], this.canvasFactory.reset(s, e, i)) : (s = this.canvasFactory.create(e, i), this.cache[t] = s), s
                            }
                            delete(t) {
                                delete this.cache[t]
                            }
                            clear() {
                                for (let t in this.cache) {
                                    let e = this.cache[t];
                                    this.canvasFactory.destroy(e), delete this.cache[t]
                                }
                            }
                        }

                        function b(t, e, i, s, a, n, o, l, h, d) {
                            let [c, u, p, g, f, m] = (0, r.getCurrentTransform)(t);
                            if (0 === u && 0 === p) {
                                let r = Math.round(o * c + f),
                                    b = Math.round(l * g + m),
                                    A = Math.abs(Math.round((o + h) * c + f) - r) || 1,
                                    v = Math.abs(Math.round((l + d) * g + m) - b) || 1;
                                return t.setTransform(Math.sign(c), 0, 0, Math.sign(g), r, b), t.drawImage(e, i, s, a, n, 0, 0, A, v), t.setTransform(c, u, p, g, f, m), [A, v]
                            }
                            if (0 === c && 0 === g) {
                                let r = Math.round(l * p + f),
                                    b = Math.round(o * u + m),
                                    A = Math.abs(Math.round((l + d) * p + f) - r) || 1,
                                    v = Math.abs(Math.round((o + h) * u + m) - b) || 1;
                                return t.setTransform(0, Math.sign(u), Math.sign(p), 0, r, b), t.drawImage(e, i, s, a, n, 0, 0, v, A), t.setTransform(c, u, p, g, f, m), [v, A]
                            }
                            return t.drawImage(e, i, s, a, n, o, l, h, d), [Math.hypot(c, u) * h, Math.hypot(p, g) * d]
                        }

                        function A(t) {
                            let e, i, s;
                            let {
                                width: r,
                                height: a
                            } = t;
                            if (r > p || a > p) return null;
                            let n = 1e3,
                                o = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]),
                                l = r + 1,
                                h = new Uint8Array(l * (a + 1)),
                                d = r + 7 & -8,
                                c = new Uint8Array(d * a),
                                u = 0;
                            for (let e of t.data) {
                                let t = 128;
                                for (; t > 0;) c[u++] = e & t ? 0 : 255, t >>= 1
                            }
                            let g = 0;
                            for (0 !== c[u = 0] && (h[0] = 1, ++g), i = 1; i < r; i++) c[u] !== c[u + 1] && (h[i] = c[u] ? 2 : 1, ++g), u++;
                            for (0 !== c[u] && (h[i] = 2, ++g), e = 1; e < a; e++) {
                                u = e * d, s = e * l, c[u - d] !== c[u] && (h[s] = c[u] ? 1 : 8, ++g);
                                let t = (c[u] ? 4 : 0) + (c[u - d] ? 8 : 0);
                                for (i = 1; i < r; i++) o[t = (t >> 2) + (c[u + 1] ? 4 : 0) + (c[u - d + 1] ? 8 : 0)] && (h[s + i] = o[t], ++g), u++;
                                if (c[u - d] !== c[u] && (h[s + i] = c[u] ? 2 : 4, ++g), g > n) return null
                            }
                            for (u = d * (a - 1), s = e * l, 0 !== c[u] && (h[s] = 8, ++g), i = 1; i < r; i++) c[u] !== c[u + 1] && (h[s + i] = c[u] ? 4 : 8, ++g), u++;
                            if (0 !== c[u] && (h[s + i] = 4, ++g), g > n) return null;
                            let f = new Int32Array([0, l, -1, 0, -l, 0, 0, 0, 1]),
                                m = new Path2D;
                            for (e = 0; g && e <= a; e++) {
                                let t = e * l,
                                    i = t + r;
                                for (; t < i && !h[t];) t++;
                                if (t === i) continue;
                                m.moveTo(t % l, e);
                                let s = t,
                                    a = h[t];
                                do {
                                    let e = f[a];
                                    do t += e; while (!h[t]);
                                    let i = h[t];
                                    5 !== i && 10 !== i ? (a = i, h[t] = 0) : (a = i & 51 * a >> 4, h[t] &= a >> 2 | a << 2), m.lineTo(t % l, t / l | 0), !h[t] && --g
                                } while (s !== t);
                                --e
                            }
                            return c = null, h = null,
                                function(t) {
                                    t.save(), t.scale(1 / r, -1 / a), t.translate(0, -a), t.fill(m), t.beginPath(), t.restore()
                                }
                        }
                        class v {
                            constructor(t, e) {
                                this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = s.IDENTITY_MATRIX, this.textMatrixScale = 1, this.fontMatrix = s.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = s.TextRenderingMode.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, t, e])
                            }
                            clone() {
                                let t = Object.create(this);
                                return t.clipBox = this.clipBox.slice(), t
                            }
                            setCurrentPoint(t, e) {
                                this.x = t, this.y = e
                            }
                            updatePathMinMax(t, e, i) {
                                [e, i] = s.Util.applyTransform([e, i], t), this.minX = Math.min(this.minX, e), this.minY = Math.min(this.minY, i), this.maxX = Math.max(this.maxX, e), this.maxY = Math.max(this.maxY, i)
                            }
                            updateRectMinMax(t, e) {
                                let i = s.Util.applyTransform(e, t),
                                    r = s.Util.applyTransform(e.slice(2), t);
                                this.minX = Math.min(this.minX, i[0], r[0]), this.minY = Math.min(this.minY, i[1], r[1]), this.maxX = Math.max(this.maxX, i[0], r[0]), this.maxY = Math.max(this.maxY, i[1], r[1])
                            }
                            updateScalingPathMinMax(t, e) {
                                s.Util.scaleMinMax(t, e), this.minX = Math.min(this.minX, e[0]), this.maxX = Math.max(this.maxX, e[1]), this.minY = Math.min(this.minY, e[2]), this.maxY = Math.max(this.maxY, e[3])
                            }
                            updateCurvePathMinMax(t, e, i, r, a, n, o, l, h, d) {
                                let c = s.Util.bezierBoundingBox(e, i, r, a, n, o, l, h);
                                if (d) {
                                    d[0] = Math.min(d[0], c[0], c[2]), d[1] = Math.max(d[1], c[0], c[2]), d[2] = Math.min(d[2], c[1], c[3]), d[3] = Math.max(d[3], c[1], c[3]);
                                    return
                                }
                                this.updateRectMinMax(t, c)
                            }
                            getPathBoundingBox(t = a.PathType.FILL, e = null) {
                                let i = [this.minX, this.minY, this.maxX, this.maxY];
                                if (t === a.PathType.STROKE) {
                                    e || (0, s.unreachable)("Stroke bounding box must include transform.");
                                    let t = s.Util.singularValueDecompose2dScale(e),
                                        r = t[0] * this.lineWidth / 2,
                                        a = t[1] * this.lineWidth / 2;
                                    i[0] -= r, i[1] -= a, i[2] += r, i[3] += a
                                }
                                return i
                            }
                            updateClipFromPath() {
                                let t = s.Util.intersect(this.clipBox, this.getPathBoundingBox());
                                this.startNewPathAndClipBox(t || [0, 0, 0, 0])
                            }
                            isEmptyClip() {
                                return this.minX === 1 / 0
                            }
                            startNewPathAndClipBox(t) {
                                this.clipBox = t, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0
                            }
                            getClippedPathBoundingBox(t = a.PathType.FILL, e = null) {
                                return s.Util.intersect(this.clipBox, this.getPathBoundingBox(t, e))
                            }
                        }

                        function y(t, e) {
                            let i, r, a, n;
                            if ("undefined" != typeof ImageData && e instanceof ImageData) {
                                t.putImageData(e, 0, 0);
                                return
                            }
                            let o = e.height,
                                l = e.width,
                                h = o % g,
                                d = (o - h) / g,
                                c = 0 === h ? d : d + 1,
                                u = t.createImageData(l, g),
                                p = 0,
                                f, m = e.data,
                                b = u.data;
                            if (e.kind === s.ImageKind.GRAYSCALE_1BPP) {
                                let e = m.byteLength,
                                    n = new Uint32Array(b.buffer, 0, b.byteLength >> 2),
                                    o = n.length,
                                    A = l + 7 >> 3,
                                    v = 4294967295,
                                    y = s.FeatureTest.isLittleEndian ? 4278190080 : 255;
                                for (i = 0; i < c; i++) {
                                    for (r = 0, a = i < d ? g : h, f = 0; r < a; r++) {
                                        let t = e - p,
                                            i = 0,
                                            s = t > A ? l : 8 * t - 7,
                                            r = -8 & s,
                                            a = 0,
                                            o = 0;
                                        for (; i < r; i += 8) o = m[p++], n[f++] = 128 & o ? v : y, n[f++] = 64 & o ? v : y, n[f++] = 32 & o ? v : y, n[f++] = 16 & o ? v : y, n[f++] = 8 & o ? v : y, n[f++] = 4 & o ? v : y, n[f++] = 2 & o ? v : y, n[f++] = 1 & o ? v : y;
                                        for (; i < s; i++) 0 === a && (o = m[p++], a = 128), n[f++] = o & a ? v : y, a >>= 1
                                    }
                                    for (; f < o;) n[f++] = 0;
                                    t.putImageData(u, 0, i * g)
                                }
                            } else if (e.kind === s.ImageKind.RGBA_32BPP) {
                                for (i = 0, r = 0, n = l * g * 4; i < d; i++) b.set(m.subarray(p, p + n)), p += n, t.putImageData(u, 0, r), r += g;
                                i < c && (n = l * h * 4, b.set(m.subarray(p, p + n)), t.putImageData(u, 0, r))
                            } else if (e.kind === s.ImageKind.RGB_24BPP)
                                for (i = 0, n = l * (a = g); i < c; i++) {
                                    for (i >= d && (n = l * (a = h)), f = 0, r = n; r--;) b[f++] = m[p++], b[f++] = m[p++], b[f++] = m[p++], b[f++] = 255;
                                    t.putImageData(u, 0, i * g)
                                } else throw Error(`bad image kind: ${e.kind}`)
                        }

                        function _(t, e) {
                            if (e.bitmap) {
                                t.drawImage(e.bitmap, 0, 0);
                                return
                            }
                            let i = e.height,
                                s = e.width,
                                r = i % g,
                                a = (i - r) / g,
                                o = 0 === r ? a : a + 1,
                                l = t.createImageData(s, g),
                                h = 0,
                                d = e.data,
                                c = l.data;
                            for (let e = 0; e < o; e++) {
                                let i = e < a ? g : r;
                                ({
                                    srcPos: h
                                } = (0, n.convertBlackAndWhiteToRGBA)({
                                    src: d,
                                    srcPos: h,
                                    dest: c,
                                    width: s,
                                    height: i,
                                    nonBlackColor: 0
                                })), t.putImageData(l, 0, e * g)
                            }
                        }

                        function S(t, e) {
                            for (let i of ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"]) void 0 !== t[i] && (e[i] = t[i]);
                            void 0 !== t.setLineDash && (e.setLineDash(t.getLineDash()), e.lineDashOffset = t.lineDashOffset)
                        }

                        function C(t) {
                            t.strokeStyle = t.fillStyle = "#000000", t.fillRule = "nonzero", t.globalAlpha = 1, t.lineWidth = 1, t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 10, t.globalCompositeOperation = "source-over", t.font = "10px sans-serif", void 0 !== t.setLineDash && (t.setLineDash([]), t.lineDashOffset = 0), o.isNodeJS || (t.filter = "none")
                        }

                        function x(t, e, i, s) {
                            let r = t.length;
                            for (let a = 3; a < r; a += 4) {
                                let r = t[a];
                                if (0 === r) t[a - 3] = e, t[a - 2] = i, t[a - 1] = s;
                                else if (r < 255) {
                                    let n = 255 - r;
                                    t[a - 3] = t[a - 3] * r + e * n >> 8, t[a - 2] = t[a - 2] * r + i * n >> 8, t[a - 1] = t[a - 1] * r + s * n >> 8
                                }
                            }
                        }

                        function E(t, e, i) {
                            let s = t.length,
                                r = 1 / 255;
                            for (let a = 3; a < s; a += 4) {
                                let s = i ? i[t[a]] : t[a];
                                e[a] = e[a] * s * r | 0
                            }
                        }

                        function T(t, e, i) {
                            let s = t.length;
                            for (let r = 3; r < s; r += 4) {
                                let s = 77 * t[r - 3] + 152 * t[r - 2] + 28 * t[r - 1];
                                e[r] = i ? e[r] * i[s >> 8] >> 8 : e[r] * s >> 16
                            }
                        }

                        function P(t, e, i, s, r, a, n, o, l, h, d) {
                            let c;
                            let u = !!a,
                                p = u ? a[0] : 0,
                                g = u ? a[1] : 0,
                                f = u ? a[2] : 0;
                            c = "Luminosity" === r ? T : E;
                            let m = Math.min(s, Math.ceil(1048576 / i));
                            for (let r = 0; r < s; r += m) {
                                let a = Math.min(m, s - r),
                                    b = t.getImageData(o - h, r + (l - d), i, a),
                                    A = e.getImageData(o, r + l, i, a);
                                u && x(b.data, p, g, f), c(b.data, A.data, n), e.putImageData(A, o, r + l)
                            }
                        }

                        function M(t, e, i, s) {
                            let r = s[0],
                                a = s[1],
                                n = s[2] - r,
                                o = s[3] - a;
                            0 !== n && 0 !== o && (P(e.context, i, n, o, e.subtype, e.backdrop, e.transferMap, r, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(i.canvas, 0, 0), t.restore())
                        }

                        function w(t, e) {
                            let i = s.Util.singularValueDecompose2dScale(t);
                            i[0] = Math.fround(i[0]), i[1] = Math.fround(i[1]);
                            let a = Math.fround((globalThis.devicePixelRatio || 1) * r.PixelsPerInch.PDF_TO_CSS_UNITS);
                            return void 0 !== e ? e : i[0] <= a || i[1] <= a
                        }
                        let k = ["butt", "round", "square"],
                            R = ["miter", "round", "bevel"],
                            F = {},
                            O = {};
                        class I {
                            constructor(t, e, i, s, r, {
                                optionalContentConfig: a,
                                markedContentStack: n = null
                            }, o, l) {
                                this.ctx = t, this.current = new v(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = i, this.canvasFactory = s, this.filterFactory = r, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = n || [], this.optionalContentConfig = a, this.cachedCanvases = new m(this.canvasFactory), this.cachedPatterns = new Map, this.annotationCanvasMap = o, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = l, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = new Map
                            }
                            getObject(t, e = null) {
                                return "string" == typeof t ? t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t) : e
                            }
                            beginDrawing({
                                transform: t,
                                viewport: e,
                                transparency: i = !1,
                                background: s = null
                            }) {
                                let a = this.ctx.canvas.width,
                                    n = this.ctx.canvas.height,
                                    o = this.ctx.fillStyle;
                                if (this.ctx.fillStyle = s || "#ffffff", this.ctx.fillRect(0, 0, a, n), this.ctx.fillStyle = o, i) {
                                    let t = this.cachedCanvases.getCanvas("transparent", a, n);
                                    this.compositeCtx = this.ctx, this.transparentCanvas = t.canvas, this.ctx = t.context, this.ctx.save(), this.ctx.transform(...(0, r.getCurrentTransform)(this.compositeCtx))
                                }
                                this.ctx.save(), C(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = (0, r.getCurrentTransform)(this.ctx)
                            }
                            executeOperatorList(t, e, i, r) {
                                let a;
                                let n = t.argsArray,
                                    o = t.fnArray,
                                    l = e || 0,
                                    h = n.length;
                                if (h === l) return l;
                                let d = h - l > u && "function" == typeof i,
                                    p = d ? Date.now() + c : 0,
                                    g = 0,
                                    f = this.commonObjs,
                                    m = this.objs;
                                for (;;) {
                                    if (void 0 !== r && l === r.nextBreakPoint) return r.breakIt(l, i), l;
                                    if ((a = o[l]) !== s.OPS.dependency) this[a].apply(this, n[l]);
                                    else
                                        for (let t of n[l]) {
                                            let e = t.startsWith("g_") ? f : m;
                                            if (!e.has(t)) return e.get(t, i), l
                                        }
                                    if (++l === h) return l;
                                    if (d && ++g > u) {
                                        if (Date.now() > p) return i(), l;
                                        g = 0
                                    }
                                }
                            }
                            #tC() {
                                for (; this.stateStack.length || this.inSMaskMode;) this.restore();
                                this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null)
                            }
                            endDrawing() {
                                for (let t of (this.#tC(), this.cachedCanvases.clear(), this.cachedPatterns.clear(), this._cachedBitmapsMap.values())) {
                                    for (let e of t.values()) "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
                                    t.clear()
                                }
                                this._cachedBitmapsMap.clear(), this.#tx()
                            }
                            #tx() {
                                if (this.pageColors) {
                                    let t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
                                    if ("none" !== t) {
                                        let e = this.ctx.filter;
                                        this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e
                                    }
                                }
                            }
                            _scaleImage(t, e) {
                                let i, s;
                                let r = t.width,
                                    a = t.height,
                                    n = Math.max(Math.hypot(e[0], e[1]), 1),
                                    o = Math.max(Math.hypot(e[2], e[3]), 1),
                                    l = r,
                                    h = a,
                                    d = "prescale1";
                                for (; n > 2 && l > 1 || o > 2 && h > 1;) {
                                    let e = l,
                                        r = h;
                                    n > 2 && l > 1 && (e = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l / 2), n /= l / e), o > 2 && h > 1 && (r = h >= 16384 ? Math.floor(h / 2) - 1 || 1 : Math.ceil(h) / 2, o /= h / r), (s = (i = this.cachedCanvases.getCanvas(d, e, r)).context).clearRect(0, 0, e, r), s.drawImage(t, 0, 0, l, h, 0, 0, e, r), t = i.canvas, l = e, h = r, d = "prescale1" === d ? "prescale2" : "prescale1"
                                }
                                return {
                                    img: t,
                                    paintWidth: l,
                                    paintHeight: h
                                }
                            }
                            _createMaskCanvas(t) {
                                let e, i, n, o;
                                let l = this.ctx,
                                    {
                                        width: h,
                                        height: d
                                    } = t,
                                    c = this.current.fillColor,
                                    u = this.current.patternFill,
                                    p = (0, r.getCurrentTransform)(l);
                                if ((t.bitmap || t.data) && t.count > 1) {
                                    let s = t.bitmap || t.data.buffer;
                                    i = JSON.stringify(u ? p : [p.slice(0, 4), c]), (e = this._cachedBitmapsMap.get(s)) || (e = new Map, this._cachedBitmapsMap.set(s, e));
                                    let r = e.get(i);
                                    if (r && !u) return {
                                        canvas: r,
                                        offsetX: Math.round(Math.min(p[0], p[2]) + p[4]),
                                        offsetY: Math.round(Math.min(p[1], p[3]) + p[5])
                                    };
                                    n = r
                                }
                                n || _((o = this.cachedCanvases.getCanvas("maskCanvas", h, d)).context, t);
                                let g = s.Util.transform(p, [1 / h, 0, 0, -1 / d, 0, 0]);
                                g = s.Util.transform(g, [1, 0, 0, 1, 0, -d]);
                                let f = s.Util.applyTransform([0, 0], g),
                                    m = s.Util.applyTransform([h, d], g),
                                    A = s.Util.normalizeRect([f[0], f[1], m[0], m[1]]),
                                    v = Math.round(A[2] - A[0]) || 1,
                                    y = Math.round(A[3] - A[1]) || 1,
                                    S = this.cachedCanvases.getCanvas("fillCanvas", v, y),
                                    C = S.context,
                                    x = Math.min(f[0], m[0]),
                                    E = Math.min(f[1], m[1]);
                                C.translate(-x, -E), C.transform(...g), !n && (n = (n = this._scaleImage(o.canvas, (0, r.getCurrentTransformInverse)(C))).img, e && u && e.set(i, n)), C.imageSmoothingEnabled = w((0, r.getCurrentTransform)(C), t.interpolate), b(C, n, 0, 0, n.width, n.height, 0, 0, h, d), C.globalCompositeOperation = "source-in";
                                let T = s.Util.transform((0, r.getCurrentTransformInverse)(C), [1, 0, 0, 1, -x, -E]);
                                return C.fillStyle = u ? c.getPattern(l, this, T, a.PathType.FILL) : c, C.fillRect(0, 0, h, d), e && !u && (this.cachedCanvases.delete("fillCanvas"), e.set(i, S.canvas)), {
                                    canvas: S.canvas,
                                    offsetX: Math.round(x),
                                    offsetY: Math.round(E)
                                }
                            }
                            setLineWidth(t) {
                                t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t
                            }
                            setLineCap(t) {
                                this.ctx.lineCap = k[t]
                            }
                            setLineJoin(t) {
                                this.ctx.lineJoin = R[t]
                            }
                            setMiterLimit(t) {
                                this.ctx.miterLimit = t
                            }
                            setDash(t, e) {
                                let i = this.ctx;
                                void 0 !== i.setLineDash && (i.setLineDash(t), i.lineDashOffset = e)
                            }
                            setRenderingIntent(t) {}
                            setFlatness(t) {}
                            setGState(t) {
                                for (let [e, i] of t) switch (e) {
                                    case "LW":
                                        this.setLineWidth(i);
                                        break;
                                    case "LC":
                                        this.setLineCap(i);
                                        break;
                                    case "LJ":
                                        this.setLineJoin(i);
                                        break;
                                    case "ML":
                                        this.setMiterLimit(i);
                                        break;
                                    case "D":
                                        this.setDash(i[0], i[1]);
                                        break;
                                    case "RI":
                                        this.setRenderingIntent(i);
                                        break;
                                    case "FL":
                                        this.setFlatness(i);
                                        break;
                                    case "Font":
                                        this.setFont(i[0], i[1]);
                                        break;
                                    case "CA":
                                        this.current.strokeAlpha = i;
                                        break;
                                    case "ca":
                                        this.current.fillAlpha = i, this.ctx.globalAlpha = i;
                                        break;
                                    case "BM":
                                        this.ctx.globalCompositeOperation = i;
                                        break;
                                    case "SMask":
                                        this.current.activeSMask = i ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
                                        break;
                                    case "TR":
                                        this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(i)
                                }
                            }
                            get inSMaskMode() {
                                return !!this.suspendedCtx
                            }
                            checkSMaskState() {
                                let t = this.inSMaskMode;
                                this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode()
                            }
                            beginSMaskMode() {
                                if (this.inSMaskMode) throw Error("beginSMaskMode called while already in smask mode");
                                let t = this.ctx.canvas.width,
                                    e = this.ctx.canvas.height,
                                    i = "smaskGroupAt" + this.groupLevel,
                                    s = this.cachedCanvases.getCanvas(i, t, e);
                                this.suspendedCtx = this.ctx, this.ctx = s.context;
                                let a = this.ctx;
                                a.setTransform(...(0, r.getCurrentTransform)(this.suspendedCtx)), S(this.suspendedCtx, a), f(a, this.suspendedCtx), this.setGState([
                                    ["BM", "source-over"],
                                    ["ca", 1],
                                    ["CA", 1]
                                ])
                            }
                            endSMaskMode() {
                                if (!this.inSMaskMode) throw Error("endSMaskMode called while not in smask mode");
                                this.ctx._removeMirroring(), S(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null
                            }
                            compose(t) {
                                if (!this.current.activeSMask) return;
                                t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
                                let e = this.current.activeSMask;
                                M(this.suspendedCtx, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore()
                            }
                            save() {
                                this.inSMaskMode ? (S(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
                                let t = this.current;
                                this.stateStack.push(t), this.current = t.clone()
                            }
                            restore() {
                                0 === this.stateStack.length && this.inSMaskMode && this.endSMaskMode(), 0 !== this.stateStack.length && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), S(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null)
                            }
                            transform(t, e, i, s, r, a) {
                                this.ctx.transform(t, e, i, s, r, a), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null
                            }
                            constructPath(t, e, i) {
                                let a, n;
                                let o = this.ctx,
                                    l = this.current,
                                    h = l.x,
                                    d = l.y,
                                    c = (0, r.getCurrentTransform)(o),
                                    u = 0 === c[0] && 0 === c[3] || 0 === c[1] && 0 === c[2],
                                    p = u ? i.slice(0) : null;
                                for (let i = 0, r = 0, g = t.length; i < g; i++) switch (0 | t[i]) {
                                    case s.OPS.rectangle:
                                        h = e[r++], d = e[r++];
                                        let g = e[r++],
                                            f = e[r++],
                                            m = h + g,
                                            b = d + f;
                                        o.moveTo(h, d), 0 === g || 0 === f ? o.lineTo(m, b) : (o.lineTo(m, d), o.lineTo(m, b), o.lineTo(h, b)), u || l.updateRectMinMax(c, [h, d, m, b]), o.closePath();
                                        break;
                                    case s.OPS.moveTo:
                                        h = e[r++], d = e[r++], o.moveTo(h, d), u || l.updatePathMinMax(c, h, d);
                                        break;
                                    case s.OPS.lineTo:
                                        h = e[r++], d = e[r++], o.lineTo(h, d), u || l.updatePathMinMax(c, h, d);
                                        break;
                                    case s.OPS.curveTo:
                                        a = h, n = d, h = e[r + 4], d = e[r + 5], o.bezierCurveTo(e[r], e[r + 1], e[r + 2], e[r + 3], h, d), l.updateCurvePathMinMax(c, a, n, e[r], e[r + 1], e[r + 2], e[r + 3], h, d, p), r += 6;
                                        break;
                                    case s.OPS.curveTo2:
                                        a = h, n = d, o.bezierCurveTo(h, d, e[r], e[r + 1], e[r + 2], e[r + 3]), l.updateCurvePathMinMax(c, a, n, h, d, e[r], e[r + 1], e[r + 2], e[r + 3], p), h = e[r + 2], d = e[r + 3], r += 4;
                                        break;
                                    case s.OPS.curveTo3:
                                        a = h, n = d, h = e[r + 2], d = e[r + 3], o.bezierCurveTo(e[r], e[r + 1], h, d, h, d), l.updateCurvePathMinMax(c, a, n, e[r], e[r + 1], h, d, h, d, p), r += 4;
                                        break;
                                    case s.OPS.closePath:
                                        o.closePath()
                                }
                                u && l.updateScalingPathMinMax(c, p), l.setCurrentPoint(h, d)
                            }
                            closePath() {
                                this.ctx.closePath()
                            }
                            stroke(t = !0) {
                                let e = this.ctx,
                                    i = this.current.strokeColor;
                                e.globalAlpha = this.current.strokeAlpha, this.contentVisible && ("object" == typeof i && i?.getPattern ? (e.save(), e.strokeStyle = i.getPattern(e, this, (0, r.getCurrentTransformInverse)(e), a.PathType.STROKE), this.rescaleAndStroke(!1), e.restore()) : this.rescaleAndStroke(!0)), t && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha
                            }
                            closeStroke() {
                                this.closePath(), this.stroke()
                            }
                            fill(t = !0) {
                                let e = this.ctx,
                                    i = this.current.fillColor,
                                    s = this.current.patternFill,
                                    n = !1;
                                s && (e.save(), e.fillStyle = i.getPattern(e, this, (0, r.getCurrentTransformInverse)(e), a.PathType.FILL), n = !0);
                                let o = this.current.getClippedPathBoundingBox();
                                this.contentVisible && null !== o && (this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = !1) : e.fill()), n && e.restore(), t && this.consumePath(o)
                            }
                            eoFill() {
                                this.pendingEOFill = !0, this.fill()
                            }
                            fillStroke() {
                                this.fill(!1), this.stroke(!1), this.consumePath()
                            }
                            eoFillStroke() {
                                this.pendingEOFill = !0, this.fillStroke()
                            }
                            closeFillStroke() {
                                this.closePath(), this.fillStroke()
                            }
                            closeEOFillStroke() {
                                this.pendingEOFill = !0, this.closePath(), this.fillStroke()
                            }
                            endPath() {
                                this.consumePath()
                            }
                            clip() {
                                this.pendingClip = F
                            }
                            eoClip() {
                                this.pendingClip = O
                            }
                            beginText() {
                                this.current.textMatrix = s.IDENTITY_MATRIX, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0
                            }
                            endText() {
                                let t = this.pendingTextPaths,
                                    e = this.ctx;
                                if (void 0 === t) {
                                    e.beginPath();
                                    return
                                }
                                for (let i of (e.save(), e.beginPath(), t)) e.setTransform(...i.transform), e.translate(i.x, i.y), i.addToPath(e, i.fontSize);
                                e.restore(), e.clip(), e.beginPath(), delete this.pendingTextPaths
                            }
                            setCharSpacing(t) {
                                this.current.charSpacing = t
                            }
                            setWordSpacing(t) {
                                this.current.wordSpacing = t
                            }
                            setHScale(t) {
                                this.current.textHScale = t / 100
                            }
                            setLeading(t) {
                                this.current.leading = -t
                            }
                            setFont(t, e) {
                                let i = this.commonObjs.get(t),
                                    r = this.current;
                                if (!i) throw Error(`Can't find font for ${t}`);
                                if (r.fontMatrix = i.fontMatrix || s.FONT_IDENTITY_MATRIX, (0 === r.fontMatrix[0] || 0 === r.fontMatrix[3]) && (0, s.warn)("Invalid font matrix for font " + t), e < 0 ? (e = -e, r.fontDirection = -1) : r.fontDirection = 1, this.current.font = i, this.current.fontSize = e, i.isType3Font) return;
                                let a = i.loadedName || "sans-serif",
                                    n = i.systemFontInfo?.css || `"${a}", ${i.fallbackName}`,
                                    o = "normal";
                                i.black ? o = "900" : i.bold && (o = "bold");
                                let d = i.italic ? "italic" : "normal",
                                    c = e;
                                e < l ? c = l : e > h && (c = h), this.current.fontSizeScale = e / c, this.ctx.font = `${d} ${o} ${c}px ${n}`
                            }
                            setTextRenderingMode(t) {
                                this.current.textRenderingMode = t
                            }
                            setTextRise(t) {
                                this.current.textRise = t
                            }
                            moveText(t, e) {
                                this.current.x = this.current.lineX += t, this.current.y = this.current.lineY += e
                            }
                            setLeadingMoveText(t, e) {
                                this.setLeading(-e), this.moveText(t, e)
                            }
                            setTextMatrix(t, e, i, s, r, a) {
                                this.current.textMatrix = [t, e, i, s, r, a], this.current.textMatrixScale = Math.hypot(t, e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0
                            }
                            nextLine() {
                                this.moveText(0, this.current.leading)
                            }
                            paintChar(t, e, i, a) {
                                let n;
                                let o = this.ctx,
                                    l = this.current,
                                    h = l.font,
                                    d = l.textRenderingMode,
                                    c = l.fontSize / l.fontSizeScale,
                                    u = d & s.TextRenderingMode.FILL_STROKE_MASK,
                                    p = !!(d & s.TextRenderingMode.ADD_TO_PATH_FLAG),
                                    g = l.patternFill && !h.missingFile;
                                (h.disableFontFace || p || g) && (n = h.getPathGenerator(this.commonObjs, t)), h.disableFontFace || g ? (o.save(), o.translate(e, i), o.beginPath(), n(o, c), a && o.setTransform(...a), (u === s.TextRenderingMode.FILL || u === s.TextRenderingMode.FILL_STROKE) && o.fill(), (u === s.TextRenderingMode.STROKE || u === s.TextRenderingMode.FILL_STROKE) && o.stroke(), o.restore()) : ((u === s.TextRenderingMode.FILL || u === s.TextRenderingMode.FILL_STROKE) && o.fillText(t, e, i), (u === s.TextRenderingMode.STROKE || u === s.TextRenderingMode.FILL_STROKE) && o.strokeText(t, e, i)), p && (this.pendingTextPaths ||= []).push({
                                    transform: (0, r.getCurrentTransform)(o),
                                    x: e,
                                    y: i,
                                    fontSize: c,
                                    addToPath: n
                                })
                            }
                            get isFontSubpixelAAEnabled() {
                                let {
                                    context: t
                                } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
                                t.scale(1.5, 1), t.fillText("I", 0, 10);
                                let e = t.getImageData(0, 0, 10, 10).data,
                                    i = !1;
                                for (let t = 3; t < e.length; t += 4)
                                    if (e[t] > 0 && e[t] < 255) {
                                        i = !0;
                                        break
                                    } return (0, s.shadow)(this, "isFontSubpixelAAEnabled", i)
                            }
                            showText(t) {
                                let e;
                                let i = this.current,
                                    n = i.font;
                                if (n.isType3Font) return this.showType3Text(t);
                                let o = i.fontSize;
                                if (0 === o) return;
                                let l = this.ctx,
                                    h = i.fontSizeScale,
                                    d = i.charSpacing,
                                    c = i.wordSpacing,
                                    u = i.fontDirection,
                                    p = i.textHScale * u,
                                    g = t.length,
                                    f = n.vertical,
                                    m = f ? 1 : -1,
                                    b = n.defaultVMetrics,
                                    A = o * i.fontMatrix[0],
                                    v = i.textRenderingMode === s.TextRenderingMode.FILL && !n.disableFontFace && !i.patternFill;
                                if (l.save(), l.transform(...i.textMatrix), l.translate(i.x, i.y + i.textRise), u > 0 ? l.scale(p, -1) : l.scale(p, 1), i.patternFill) {
                                    l.save();
                                    let t = i.fillColor.getPattern(l, this, (0, r.getCurrentTransformInverse)(l), a.PathType.FILL);
                                    e = (0, r.getCurrentTransform)(l), l.restore(), l.fillStyle = t
                                }
                                let y = i.lineWidth,
                                    _ = i.textMatrixScale;
                                if (0 === _ || 0 === y) {
                                    let t = i.textRenderingMode & s.TextRenderingMode.FILL_STROKE_MASK;
                                    (t === s.TextRenderingMode.STROKE || t === s.TextRenderingMode.FILL_STROKE) && (y = this.getSinglePixelWidth())
                                } else y /= _;
                                if (1 !== h && (l.scale(h, h), y /= h), l.lineWidth = y, n.isInvalidPDFjsFont) {
                                    let e = [],
                                        s = 0;
                                    for (let i of t) e.push(i.unicode), s += i.width;
                                    l.fillText(e.join(""), 0, 0), i.x += s * A * p, l.restore(), this.compose();
                                    return
                                }
                                let S = 0,
                                    C;
                                for (C = 0; C < g; ++C) {
                                    let i, s, r;
                                    let a = t[C];
                                    if ("number" == typeof a) {
                                        S += m * a * o / 1e3;
                                        continue
                                    }
                                    let p = !1,
                                        g = (a.isSpace ? c : 0) + d,
                                        y = a.fontChar,
                                        _ = a.accent,
                                        x = a.width;
                                    if (f) {
                                        let t = a.vmetric || b,
                                            e = -(a.vmetric ? t[1] : .5 * x) * A,
                                            r = t[2] * A;
                                        x = t ? -t[0] : x, i = e / h, s = (S + r) / h
                                    } else i = S / h, s = 0;
                                    if (n.remeasure && x > 0) {
                                        let t = 1e3 * l.measureText(y).width / o * h;
                                        if (x < t && this.isFontSubpixelAAEnabled) {
                                            let e = x / t;
                                            p = !0, l.save(), l.scale(e, 1), i /= e
                                        } else x !== t && (i += (x - t) / 2e3 * o / h)
                                    }
                                    if (this.contentVisible && (a.isInFont || n.missingFile)) {
                                        if (v && !_) l.fillText(y, i, s);
                                        else if (this.paintChar(y, i, s, e), _) {
                                            let t = i + o * _.offset.x / h,
                                                r = s - o * _.offset.y / h;
                                            this.paintChar(_.fontChar, t, r, e)
                                        }
                                    }
                                    S += r = f ? x * A - g * u : x * A + g * u, p && l.restore()
                                }
                                f ? i.y -= S : i.x += S * p, l.restore(), this.compose()
                            }
                            showType3Text(t) {
                                let e, i, r, a;
                                let n = this.ctx,
                                    o = this.current,
                                    l = o.font,
                                    h = o.fontSize,
                                    d = o.fontDirection,
                                    c = l.vertical ? 1 : -1,
                                    u = o.charSpacing,
                                    p = o.wordSpacing,
                                    g = o.textHScale * d,
                                    f = o.fontMatrix || s.FONT_IDENTITY_MATRIX,
                                    m = t.length;
                                if (o.textRenderingMode !== s.TextRenderingMode.INVISIBLE && 0 !== h) {
                                    for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, n.save(), n.transform(...o.textMatrix), n.translate(o.x, o.y), n.scale(g, d), e = 0; e < m; ++e) {
                                        if ("number" == typeof(i = t[e])) {
                                            a = c * i * h / 1e3, this.ctx.translate(a, 0), o.x += a * g;
                                            continue
                                        }
                                        let d = (i.isSpace ? p : 0) + u,
                                            m = l.charProcOperatorList[i.operatorListId];
                                        if (!m) {
                                            (0, s.warn)(`Type3 character "${i.operatorListId}" is not available.`);
                                            continue
                                        }
                                        this.contentVisible && (this.processingType3 = i, this.save(), n.scale(h, h), n.transform(...f), this.executeOperatorList(m), this.restore()), r = s.Util.applyTransform([i.width, 0], f)[0] * h + d, n.translate(r, 0), o.x += r * g
                                    }
                                    n.restore(), this.processingType3 = null
                                }
                            }
                            setCharWidth(t, e) {}
                            setCharWidthAndBounds(t, e, i, s, r, a) {
                                this.ctx.rect(i, s, r - i, a - s), this.ctx.clip(), this.endPath()
                            }
                            getColorN_Pattern(t) {
                                let e;
                                if ("TilingPattern" === t[0]) {
                                    let i = t[1],
                                        s = this.baseTransform || (0, r.getCurrentTransform)(this.ctx),
                                        n = {
                                            createCanvasGraphics: t => new I(t, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                                                optionalContentConfig: this.optionalContentConfig,
                                                markedContentStack: this.markedContentStack
                                            })
                                        };
                                    e = new a.TilingPattern(t, i, this.ctx, n, s)
                                } else e = this._getPattern(t[1], t[2]);
                                return e
                            }
                            setStrokeColorN() {
                                this.current.strokeColor = this.getColorN_Pattern(arguments)
                            }
                            setFillColorN() {
                                this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0
                            }
                            setStrokeRGBColor(t, e, i) {
                                let r = s.Util.makeHexColor(t, e, i);
                                this.ctx.strokeStyle = r, this.current.strokeColor = r
                            }
                            setFillRGBColor(t, e, i) {
                                let r = s.Util.makeHexColor(t, e, i);
                                this.ctx.fillStyle = r, this.current.fillColor = r, this.current.patternFill = !1
                            }
                            _getPattern(t, e = null) {
                                let i;
                                return this.cachedPatterns.has(t) ? i = this.cachedPatterns.get(t) : (i = (0, a.getShadingPattern)(this.getObject(t)), this.cachedPatterns.set(t, i)), e && (i.matrix = e), i
                            }
                            shadingFill(t) {
                                if (!this.contentVisible) return;
                                let e = this.ctx;
                                this.save();
                                let i = this._getPattern(t);
                                e.fillStyle = i.getPattern(e, this, (0, r.getCurrentTransformInverse)(e), a.PathType.SHADING);
                                let n = (0, r.getCurrentTransformInverse)(e);
                                if (n) {
                                    let t = e.canvas,
                                        i = t.width,
                                        r = t.height,
                                        a = s.Util.applyTransform([0, 0], n),
                                        o = s.Util.applyTransform([0, r], n),
                                        l = s.Util.applyTransform([i, 0], n),
                                        h = s.Util.applyTransform([i, r], n),
                                        d = Math.min(a[0], o[0], l[0], h[0]),
                                        c = Math.min(a[1], o[1], l[1], h[1]),
                                        u = Math.max(a[0], o[0], l[0], h[0]),
                                        p = Math.max(a[1], o[1], l[1], h[1]);
                                    this.ctx.fillRect(d, c, u - d, p - c)
                                } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                                this.compose(this.current.getClippedPathBoundingBox()), this.restore()
                            }
                            beginInlineImage() {
                                (0, s.unreachable)("Should not call beginInlineImage")
                            }
                            beginImageData() {
                                (0, s.unreachable)("Should not call beginImageData")
                            }
                            paintFormXObjectBegin(t, e) {
                                if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(t) && 6 === t.length && this.transform(...t), this.baseTransform = (0, r.getCurrentTransform)(this.ctx), e)) {
                                    let t = e[2] - e[0],
                                        i = e[3] - e[1];
                                    this.ctx.rect(e[0], e[1], t, i), this.current.updateRectMinMax((0, r.getCurrentTransform)(this.ctx), e), this.clip(), this.endPath()
                                }
                            }
                            paintFormXObjectEnd() {
                                this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop())
                            }
                            beginGroup(t) {
                                if (!this.contentVisible) return;
                                this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
                                let e = this.ctx;
                                t.isolated || (0, s.info)("TODO: Support non-isolated groups."), t.knockout && (0, s.warn)("Knockout groups not supported.");
                                let i = (0, r.getCurrentTransform)(e);
                                if (t.matrix && e.transform(...t.matrix), !t.bbox) throw Error("Bounding box is required.");
                                let a = s.Util.getAxialAlignedBoundingBox(t.bbox, (0, r.getCurrentTransform)(e)),
                                    n = [0, 0, e.canvas.width, e.canvas.height],
                                    o = Math.floor((a = s.Util.intersect(a, n) || [0, 0, 0, 0])[0]),
                                    l = Math.floor(a[1]),
                                    h = Math.max(Math.ceil(a[2]) - o, 1),
                                    c = Math.max(Math.ceil(a[3]) - l, 1),
                                    u = 1,
                                    p = 1;
                                h > d && (u = h / d, h = d), c > d && (p = c / d, c = d), this.current.startNewPathAndClipBox([0, 0, h, c]);
                                let g = "groupAt" + this.groupLevel;
                                t.smask && (g += "_smask_" + this.smaskCounter++ % 2);
                                let f = this.cachedCanvases.getCanvas(g, h, c),
                                    m = f.context;
                                m.scale(1 / u, 1 / p), m.translate(-o, -l), m.transform(...i), t.smask ? this.smaskStack.push({
                                    canvas: f.canvas,
                                    context: m,
                                    offsetX: o,
                                    offsetY: l,
                                    scaleX: u,
                                    scaleY: p,
                                    subtype: t.smask.subtype,
                                    backdrop: t.smask.backdrop,
                                    transferMap: t.smask.transferMap || null,
                                    startTransformInverse: null
                                }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(o, l), e.scale(u, p), e.save()), S(e, m), this.ctx = m, this.setGState([
                                    ["BM", "source-over"],
                                    ["ca", 1],
                                    ["CA", 1]
                                ]), this.groupStack.push(e), this.groupLevel++
                            }
                            endGroup(t) {
                                if (!this.contentVisible) return;
                                this.groupLevel--;
                                let e = this.ctx,
                                    i = this.groupStack.pop();
                                if (this.ctx = i, this.ctx.imageSmoothingEnabled = !1, t.smask) this.tempSMask = this.smaskStack.pop(), this.restore();
                                else {
                                    this.ctx.restore();
                                    let t = (0, r.getCurrentTransform)(this.ctx);
                                    this.restore(), this.ctx.save(), this.ctx.setTransform(...t);
                                    let i = s.Util.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], t);
                                    this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(i)
                                }
                            }
                            beginAnnotation(t, e, i, a, n) {
                                if (this.#tC(), C(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), Array.isArray(e) && 4 === e.length) {
                                    let a = e[2] - e[0],
                                        o = e[3] - e[1];
                                    if (n && this.annotationCanvasMap) {
                                        i = i.slice(), i[4] -= e[0], i[5] -= e[1], (e = e.slice())[0] = e[1] = 0, e[2] = a, e[3] = o;
                                        let [n, l] = s.Util.singularValueDecompose2dScale((0, r.getCurrentTransform)(this.ctx)), {
                                            viewportScale: h
                                        } = this, d = Math.ceil(a * this.outputScaleX * h), c = Math.ceil(o * this.outputScaleY * h);
                                        this.annotationCanvas = this.canvasFactory.create(d, c);
                                        let {
                                            canvas: u,
                                            context: p
                                        } = this.annotationCanvas;
                                        this.annotationCanvasMap.set(t, u), this.annotationCanvas.savedCtx = this.ctx, this.ctx = p, this.ctx.save(), this.ctx.setTransform(n, 0, 0, -l, 0, o * l), C(this.ctx)
                                    } else C(this.ctx), this.ctx.rect(e[0], e[1], a, o), this.ctx.clip(), this.endPath()
                                }
                                this.current = new v(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...i), this.transform(...a)
                            }
                            endAnnotation() {
                                this.annotationCanvas && (this.ctx.restore(), this.#tx(), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas)
                            }
                            paintImageMaskXObject(t) {
                                if (!this.contentVisible) return;
                                let e = t.count;
                                (t = this.getObject(t.data, t)).count = e;
                                let i = this.ctx,
                                    s = this.processingType3;
                                if (s && (void 0 === s.compiled && (s.compiled = A(t)), s.compiled)) {
                                    s.compiled(i);
                                    return
                                }
                                let r = this._createMaskCanvas(t),
                                    a = r.canvas;
                                i.save(), i.setTransform(1, 0, 0, 1, 0, 0), i.drawImage(a, r.offsetX, r.offsetY), i.restore(), this.compose()
                            }
                            paintImageMaskXObjectRepeat(t, e, i = 0, a = 0, n, o) {
                                if (!this.contentVisible) return;
                                t = this.getObject(t.data, t);
                                let l = this.ctx;
                                l.save();
                                let h = (0, r.getCurrentTransform)(l);
                                l.transform(e, i, a, n, 0, 0);
                                let d = this._createMaskCanvas(t);
                                l.setTransform(1, 0, 0, 1, d.offsetX - h[4], d.offsetY - h[5]);
                                for (let t = 0, r = o.length; t < r; t += 2) {
                                    let r = s.Util.transform(h, [e, i, a, n, o[t], o[t + 1]]),
                                        [c, u] = s.Util.applyTransform([0, 0], r);
                                    l.drawImage(d.canvas, c, u)
                                }
                                l.restore(), this.compose()
                            }
                            paintImageMaskXObjectGroup(t) {
                                if (!this.contentVisible) return;
                                let e = this.ctx,
                                    i = this.current.fillColor,
                                    s = this.current.patternFill;
                                for (let n of t) {
                                    let {
                                        data: t,
                                        width: o,
                                        height: l,
                                        transform: h
                                    } = n, d = this.cachedCanvases.getCanvas("maskCanvas", o, l), c = d.context;
                                    c.save(), _(c, this.getObject(t, n)), c.globalCompositeOperation = "source-in", c.fillStyle = s ? i.getPattern(c, this, (0, r.getCurrentTransformInverse)(e), a.PathType.FILL) : i, c.fillRect(0, 0, o, l), c.restore(), e.save(), e.transform(...h), e.scale(1, -1), b(e, d.canvas, 0, 0, o, l, 0, -1, 1, 1), e.restore()
                                }
                                this.compose()
                            }
                            paintImageXObject(t) {
                                if (!this.contentVisible) return;
                                let e = this.getObject(t);
                                if (!e) {
                                    (0, s.warn)("Dependent image isn't ready yet");
                                    return
                                }
                                this.paintInlineImageXObject(e)
                            }
                            paintImageXObjectRepeat(t, e, i, r) {
                                if (!this.contentVisible) return;
                                let a = this.getObject(t);
                                if (!a) {
                                    (0, s.warn)("Dependent image isn't ready yet");
                                    return
                                }
                                let n = a.width,
                                    o = a.height,
                                    l = [];
                                for (let t = 0, s = r.length; t < s; t += 2) l.push({
                                    transform: [e, 0, 0, i, r[t], r[t + 1]],
                                    x: 0,
                                    y: 0,
                                    w: n,
                                    h: o
                                });
                                this.paintInlineImageXObjectGroup(a, l)
                            }
                            applyTransferMapsToCanvas(t) {
                                return "none" !== this.current.transferMaps && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas
                            }
                            applyTransferMapsToBitmap(t) {
                                if ("none" === this.current.transferMaps) return t.bitmap;
                                let {
                                    bitmap: e,
                                    width: i,
                                    height: s
                                } = t, r = this.cachedCanvases.getCanvas("inlineImage", i, s), a = r.context;
                                return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = "none", r.canvas
                            }
                            paintInlineImageXObject(t) {
                                let e;
                                if (!this.contentVisible) return;
                                let i = t.width,
                                    s = t.height,
                                    a = this.ctx;
                                if (this.save(), o.isNodeJS || (a.filter = "none"), a.scale(1 / i, -1 / s), t.bitmap) e = this.applyTransferMapsToBitmap(t);
                                else if ("function" == typeof HTMLElement && t instanceof HTMLElement || !t.data) e = t;
                                else {
                                    let r = this.cachedCanvases.getCanvas("inlineImage", i, s).context;
                                    y(r, t), e = this.applyTransferMapsToCanvas(r)
                                }
                                let n = this._scaleImage(e, (0, r.getCurrentTransformInverse)(a));
                                a.imageSmoothingEnabled = w((0, r.getCurrentTransform)(a), t.interpolate), b(a, n.img, 0, 0, n.paintWidth, n.paintHeight, 0, -s, i, s), this.compose(), this.restore()
                            }
                            paintInlineImageXObjectGroup(t, e) {
                                let i;
                                if (!this.contentVisible) return;
                                let s = this.ctx;
                                if (t.bitmap) i = t.bitmap;
                                else {
                                    let e = t.width,
                                        s = t.height,
                                        r = this.cachedCanvases.getCanvas("inlineImage", e, s).context;
                                    y(r, t), i = this.applyTransferMapsToCanvas(r)
                                }
                                for (let t of e) s.save(), s.transform(...t.transform), s.scale(1, -1), b(s, i, t.x, t.y, t.w, t.h, 0, -1, 1, 1), s.restore();
                                this.compose()
                            }
                            paintSolidColorImageMask() {
                                this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose())
                            }
                            markPoint(t) {}
                            markPointProps(t, e) {}
                            beginMarkedContent(t) {
                                this.markedContentStack.push({
                                    visible: !0
                                })
                            }
                            beginMarkedContentProps(t, e) {
                                "OC" === t ? this.markedContentStack.push({
                                    visible: this.optionalContentConfig.isVisible(e)
                                }) : this.markedContentStack.push({
                                    visible: !0
                                }), this.contentVisible = this.isContentVisible()
                            }
                            endMarkedContent() {
                                this.markedContentStack.pop(), this.contentVisible = this.isContentVisible()
                            }
                            beginCompat() {}
                            endCompat() {}
                            consumePath(t) {
                                let e = this.current.isEmptyClip();
                                this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(t);
                                let i = this.ctx;
                                this.pendingClip && (e || (this.pendingClip === O ? i.clip("evenodd") : i.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), i.beginPath()
                            }
                            getSinglePixelWidth() {
                                if (!this._cachedGetSinglePixelWidth) {
                                    let t = (0, r.getCurrentTransform)(this.ctx);
                                    if (0 === t[1] && 0 === t[2]) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
                                    else {
                                        let e = Math.abs(t[0] * t[3] - t[2] * t[1]),
                                            i = Math.hypot(t[0], t[2]),
                                            s = Math.hypot(t[1], t[3]);
                                        this._cachedGetSinglePixelWidth = Math.max(i, s) / e
                                    }
                                }
                                return this._cachedGetSinglePixelWidth
                            }
                            getScaleForStroking() {
                                if (-1 === this._cachedScaleForStroking[0]) {
                                    let t, e;
                                    let {
                                        lineWidth: i
                                    } = this.current, {
                                        a: s,
                                        b: r,
                                        c: a,
                                        d: n
                                    } = this.ctx.getTransform();
                                    if (0 === r && 0 === a) {
                                        let r = Math.abs(s),
                                            a = Math.abs(n);
                                        if (r === a) {
                                            if (0 === i) t = e = 1 / r;
                                            else {
                                                let s = r * i;
                                                t = e = s < 1 ? 1 / s : 1
                                            }
                                        } else if (0 === i) t = 1 / r, e = 1 / a;
                                        else {
                                            let s = r * i,
                                                n = a * i;
                                            t = s < 1 ? 1 / s : 1, e = n < 1 ? 1 / n : 1
                                        }
                                    } else {
                                        let o = Math.abs(s * n - r * a),
                                            l = Math.hypot(s, r),
                                            h = Math.hypot(a, n);
                                        if (0 === i) t = h / o, e = l / o;
                                        else {
                                            let s = i * o;
                                            t = h > s ? h / s : 1, e = l > s ? l / s : 1
                                        }
                                    }
                                    this._cachedScaleForStroking[0] = t, this._cachedScaleForStroking[1] = e
                                }
                                return this._cachedScaleForStroking
                            }
                            rescaleAndStroke(t) {
                                let {
                                    ctx: e
                                } = this, {
                                    lineWidth: i
                                } = this.current, [s, r] = this.getScaleForStroking();
                                if (e.lineWidth = i || 1, 1 === s && 1 === r) {
                                    e.stroke();
                                    return
                                }
                                let a = e.getLineDash();
                                if (t && e.save(), e.scale(s, r), a.length > 0) {
                                    let t = Math.max(s, r);
                                    e.setLineDash(a.map(e => e / t)), e.lineDashOffset /= t
                                }
                                e.stroke(), t && e.restore()
                            }
                            isContentVisible() {
                                for (let t = this.markedContentStack.length - 1; t >= 0; t--)
                                    if (!this.markedContentStack[t].visible) return !1;
                                return !0
                            }
                        }
                        for (let t in e.CanvasGraphics = I, s.OPS) void 0 !== I.prototype[t] && (I.prototype[s.OPS[t]] = I.prototype[t])
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.TilingPattern = e.PathType = void 0, e.getShadingPattern = p;
                        var s = i(1),
                            r = i(6);
                        let a = {
                            FILL: "Fill",
                            STROKE: "Stroke",
                            SHADING: "Shading"
                        };

                        function n(t, e) {
                            if (!e) return;
                            let i = e[2] - e[0],
                                s = e[3] - e[1],
                                r = new Path2D;
                            r.rect(e[0], e[1], i, s), t.clip(r)
                        }
                        e.PathType = a;
                        class o {
                            constructor() {
                                this.constructor === o && (0, s.unreachable)("Cannot initialize BaseShadingPattern.")
                            }
                            getPattern() {
                                (0, s.unreachable)("Abstract method `getPattern` called.")
                            }
                        }
                        class l extends o {
                            constructor(t) {
                                super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null
                            }
                            _createGradient(t) {
                                let e;
                                for (let i of ("axial" === this._type ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : "radial" === this._type && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1)), this._colorStops)) e.addColorStop(i[0], i[1]);
                                return e
                            }
                            getPattern(t, e, i, o) {
                                let l;
                                if (o === a.STROKE || o === a.FILL) {
                                    let a = e.current.getClippedPathBoundingBox(o, (0, r.getCurrentTransform)(t)) || [0, 0, 0, 0],
                                        h = Math.ceil(a[2] - a[0]) || 1,
                                        d = Math.ceil(a[3] - a[1]) || 1,
                                        c = e.cachedCanvases.getCanvas("pattern", h, d, !0),
                                        u = c.context;
                                    u.clearRect(0, 0, u.canvas.width, u.canvas.height), u.beginPath(), u.rect(0, 0, u.canvas.width, u.canvas.height), u.translate(-a[0], -a[1]), i = s.Util.transform(i, [1, 0, 0, 1, a[0], a[1]]), u.transform(...e.baseTransform), this.matrix && u.transform(...this.matrix), n(u, this._bbox), u.fillStyle = this._createGradient(u), u.fill(), l = t.createPattern(c.canvas, "no-repeat");
                                    let p = new DOMMatrix(i);
                                    l.setTransform(p)
                                } else n(t, this._bbox), l = this._createGradient(t);
                                return l
                            }
                        }

                        function h(t, e, i, s, r, a, n, o) {
                            let l, h, d, c, u, p, g, f, m;
                            let b = e.coords,
                                A = e.colors,
                                v = t.data,
                                y = 4 * t.width;
                            b[i + 1] > b[s + 1] && (l = i, i = s, s = l, l = a, a = n, n = l), b[s + 1] > b[r + 1] && (l = s, s = r, r = l, l = n, n = o, o = l), b[i + 1] > b[s + 1] && (l = i, i = s, s = l, l = a, a = n, n = l);
                            let _ = (b[i] + e.offsetX) * e.scaleX,
                                S = (b[i + 1] + e.offsetY) * e.scaleY,
                                C = (b[s] + e.offsetX) * e.scaleX,
                                x = (b[s + 1] + e.offsetY) * e.scaleY,
                                E = (b[r] + e.offsetX) * e.scaleX,
                                T = (b[r + 1] + e.offsetY) * e.scaleY;
                            if (S >= T) return;
                            let P = A[a],
                                M = A[a + 1],
                                w = A[a + 2],
                                k = A[n],
                                R = A[n + 1],
                                F = A[n + 2],
                                O = A[o],
                                I = A[o + 1],
                                D = A[o + 2],
                                L = Math.round(S),
                                N = Math.round(T);
                            for (let t = L; t <= N; t++) {
                                let e;
                                if (t < x) {
                                    let e;
                                    h = _ - (_ - C) * (e = t < S ? 0 : (S - t) / (S - x)), d = P - (P - k) * e, c = M - (M - R) * e, u = w - (w - F) * e
                                } else {
                                    let e;
                                    h = C - (C - E) * (e = t > T ? 1 : x === T ? 0 : (x - t) / (x - T)), d = k - (k - O) * e, c = R - (R - I) * e, u = F - (F - D) * e
                                }
                                p = _ - (_ - E) * (e = t < S ? 0 : t > T ? 1 : (S - t) / (S - T)), g = P - (P - O) * e, f = M - (M - I) * e, m = w - (w - D) * e;
                                let i = Math.round(Math.min(h, p)),
                                    s = Math.round(Math.max(h, p)),
                                    r = y * t + 4 * i;
                                for (let t = i; t <= s; t++)(e = (h - t) / (h - p)) < 0 ? e = 0 : e > 1 && (e = 1), v[r++] = d - (d - g) * e | 0, v[r++] = c - (c - f) * e | 0, v[r++] = u - (u - m) * e | 0, v[r++] = 255
                            }
                        }

                        function d(t, e, i) {
                            let s, r;
                            let a = e.coords,
                                n = e.colors;
                            switch (e.type) {
                                case "lattice":
                                    let o = e.verticesPerRow,
                                        l = Math.floor(a.length / o) - 1,
                                        d = o - 1;
                                    for (s = 0; s < l; s++) {
                                        let e = s * o;
                                        for (let s = 0; s < d; s++, e++) h(t, i, a[e], a[e + 1], a[e + o], n[e], n[e + 1], n[e + o]), h(t, i, a[e + o + 1], a[e + 1], a[e + o], n[e + o + 1], n[e + 1], n[e + o])
                                    }
                                    break;
                                case "triangles":
                                    for (s = 0, r = a.length; s < r; s += 3) h(t, i, a[s], a[s + 1], a[s + 2], n[s], n[s + 1], n[s + 2]);
                                    break;
                                default:
                                    throw Error("illegal figure")
                            }
                        }
                        class c extends o {
                            constructor(t) {
                                super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[7], this._background = t[8], this.matrix = null
                            }
                            _createMeshCanvas(t, e, i) {
                                let s = 1.1,
                                    r = 3e3,
                                    a = 2,
                                    n = Math.floor(this._bounds[0]),
                                    o = Math.floor(this._bounds[1]),
                                    l = Math.ceil(this._bounds[2]) - n,
                                    h = Math.ceil(this._bounds[3]) - o,
                                    c = Math.min(Math.ceil(Math.abs(l * t[0] * s)), r),
                                    u = Math.min(Math.ceil(Math.abs(h * t[1] * s)), r),
                                    p = l / c,
                                    g = h / u,
                                    f = {
                                        coords: this._coords,
                                        colors: this._colors,
                                        offsetX: -n,
                                        offsetY: -o,
                                        scaleX: 1 / p,
                                        scaleY: 1 / g
                                    },
                                    m = c + 2 * a,
                                    b = u + 2 * a,
                                    A = i.getCanvas("mesh", m, b, !1),
                                    v = A.context,
                                    y = v.createImageData(c, u);
                                if (e) {
                                    let t = y.data;
                                    for (let i = 0, s = t.length; i < s; i += 4) t[i] = e[0], t[i + 1] = e[1], t[i + 2] = e[2], t[i + 3] = 255
                                }
                                for (let t of this._figures) d(y, t, f);
                                return v.putImageData(y, a, a), {
                                    canvas: A.canvas,
                                    offsetX: n - a * p,
                                    offsetY: o - a * g,
                                    scaleX: p,
                                    scaleY: g
                                }
                            }
                            getPattern(t, e, i, o) {
                                let l;
                                if (n(t, this._bbox), o === a.SHADING) l = s.Util.singularValueDecompose2dScale((0, r.getCurrentTransform)(t));
                                else if (l = s.Util.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
                                    let t = s.Util.singularValueDecompose2dScale(this.matrix);
                                    l = [l[0] * t[0], l[1] * t[1]]
                                }
                                let h = this._createMeshCanvas(l, o === a.SHADING ? null : this._background, e.cachedCanvases);
                                return o !== a.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(h.offsetX, h.offsetY), t.scale(h.scaleX, h.scaleY), t.createPattern(h.canvas, "no-repeat")
                            }
                        }
                        class u extends o {
                            getPattern() {
                                return "hotpink"
                            }
                        }

                        function p(t) {
                            switch (t[0]) {
                                case "RadialAxial":
                                    return new l(t);
                                case "Mesh":
                                    return new c(t);
                                case "Dummy":
                                    return new u
                            }
                            throw Error(`Unknown IR type: ${t[0]}`)
                        }
                        let g = {
                            COLORED: 1,
                            UNCOLORED: 2
                        };
                        class f {
                            static MAX_PATTERN_SIZE = 3e3;
                            constructor(t, e, i, s, r) {
                                this.operatorList = t[2], this.matrix = t[3] || [1, 0, 0, 1, 0, 0], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.color = e, this.ctx = i, this.canvasGraphicsFactory = s, this.baseTransform = r
                            }
                            createPatternCanvas(t) {
                                let e = this.operatorList,
                                    i = this.bbox,
                                    a = this.xstep,
                                    n = this.ystep,
                                    o = this.paintType,
                                    l = this.tilingType,
                                    h = this.color,
                                    d = this.canvasGraphicsFactory;
                                (0, s.info)("TilingType: " + l);
                                let c = i[0],
                                    u = i[1],
                                    p = i[2],
                                    g = i[3],
                                    f = s.Util.singularValueDecompose2dScale(this.matrix),
                                    m = s.Util.singularValueDecompose2dScale(this.baseTransform),
                                    b = [f[0] * m[0], f[1] * m[1]],
                                    A = this.getSizeAndScale(a, this.ctx.canvas.width, b[0]),
                                    v = this.getSizeAndScale(n, this.ctx.canvas.height, b[1]),
                                    y = t.cachedCanvases.getCanvas("pattern", A.size, v.size, !0),
                                    _ = y.context,
                                    S = d.createCanvasGraphics(_);
                                S.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(S, o, h);
                                let C = c,
                                    x = u,
                                    E = p,
                                    T = g;
                                return c < 0 && (C = 0, E += Math.abs(c)), u < 0 && (x = 0, T += Math.abs(u)), _.translate(-(A.scale * C), -(v.scale * x)), S.transform(A.scale, 0, 0, v.scale, 0, 0), _.save(), this.clipBbox(S, C, x, E, T), S.baseTransform = (0, r.getCurrentTransform)(S.ctx), S.executeOperatorList(e), S.endDrawing(), {
                                    canvas: y.canvas,
                                    scaleX: A.scale,
                                    scaleY: v.scale,
                                    offsetX: C,
                                    offsetY: x
                                }
                            }
                            getSizeAndScale(t, e, i) {
                                t = Math.abs(t);
                                let s = Math.max(f.MAX_PATTERN_SIZE, e),
                                    r = Math.ceil(t * i);
                                return r >= s ? r = s : i = r / t, {
                                    scale: i,
                                    size: r
                                }
                            }
                            clipBbox(t, e, i, s, a) {
                                let n = s - e,
                                    o = a - i;
                                t.ctx.rect(e, i, n, o), t.current.updateRectMinMax((0, r.getCurrentTransform)(t.ctx), [e, i, s, a]), t.clip(), t.endPath()
                            }
                            setFillAndStrokeStyleToContext(t, e, i) {
                                let r = t.ctx,
                                    a = t.current;
                                switch (e) {
                                    case g.COLORED:
                                        let n = this.ctx;
                                        r.fillStyle = n.fillStyle, r.strokeStyle = n.strokeStyle, a.fillColor = n.fillStyle, a.strokeColor = n.strokeStyle;
                                        break;
                                    case g.UNCOLORED:
                                        let o = s.Util.makeHexColor(i[0], i[1], i[2]);
                                        r.fillStyle = o, r.strokeStyle = o, a.fillColor = o, a.strokeColor = o;
                                        break;
                                    default:
                                        throw new s.FormatError(`Unsupported paint type: ${e}`)
                                }
                            }
                            getPattern(t, e, i, r) {
                                let n = i;
                                r !== a.SHADING && (n = s.Util.transform(n, e.baseTransform), this.matrix && (n = s.Util.transform(n, this.matrix)));
                                let o = this.createPatternCanvas(e),
                                    l = new DOMMatrix(n);
                                l = (l = l.translate(o.offsetX, o.offsetY)).scale(1 / o.scaleX, 1 / o.scaleY);
                                let h = t.createPattern(o.canvas, "repeat");
                                return h.setTransform(l), h
                            }
                        }
                        e.TilingPattern = f
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.convertBlackAndWhiteToRGBA = a, e.convertToRGBA = r, e.grayToRGBA = o;
                        var s = i(1);

                        function r(t) {
                            switch (t.kind) {
                                case s.ImageKind.GRAYSCALE_1BPP:
                                    return a(t);
                                case s.ImageKind.RGB_24BPP:
                                    return n(t)
                            }
                            return null
                        }

                        function a({
                            src: t,
                            srcPos: e = 0,
                            dest: i,
                            width: r,
                            height: a,
                            nonBlackColor: n = 4294967295,
                            inverseDecode: o = !1
                        }) {
                            let l = s.FeatureTest.isLittleEndian ? 4278190080 : 255,
                                [h, d] = o ? [n, l] : [l, n],
                                c = r >> 3,
                                u = 7 & r,
                                p = t.length;
                            i = new Uint32Array(i.buffer);
                            let g = 0;
                            for (let s = 0; s < a; s++) {
                                for (let s = e + c; e < s; e++) {
                                    let s = e < p ? t[e] : 255;
                                    i[g++] = 128 & s ? d : h, i[g++] = 64 & s ? d : h, i[g++] = 32 & s ? d : h, i[g++] = 16 & s ? d : h, i[g++] = 8 & s ? d : h, i[g++] = 4 & s ? d : h, i[g++] = 2 & s ? d : h, i[g++] = 1 & s ? d : h
                                }
                                if (0 === u) continue;
                                let s = e < p ? t[e++] : 255;
                                for (let t = 0; t < u; t++) i[g++] = s & 1 << 7 - t ? d : h
                            }
                            return {
                                srcPos: e,
                                destPos: g
                            }
                        }

                        function n({
                            src: t,
                            srcPos: e = 0,
                            dest: i,
                            destPos: r = 0,
                            width: a,
                            height: n
                        }) {
                            let o = 0,
                                l = t.length >> 2,
                                h = new Uint32Array(t.buffer, e, l);
                            if (s.FeatureTest.isLittleEndian) {
                                for (; o < l - 2; o += 3, r += 4) {
                                    let t = h[o],
                                        e = h[o + 1],
                                        s = h[o + 2];
                                    i[r] = 4278190080 | t, i[r + 1] = t >>> 24 | e << 8 | 4278190080, i[r + 2] = e >>> 16 | s << 16 | 4278190080, i[r + 3] = s >>> 8 | 4278190080
                                }
                                for (let e = 4 * o, s = t.length; e < s; e += 3) i[r++] = t[e] | t[e + 1] << 8 | t[e + 2] << 16 | 4278190080
                            } else {
                                for (; o < l - 2; o += 3, r += 4) {
                                    let t = h[o],
                                        e = h[o + 1],
                                        s = h[o + 2];
                                    i[r] = 255 | t, i[r + 1] = t << 24 | e >>> 8 | 255, i[r + 2] = e << 16 | s >>> 16 | 255, i[r + 3] = s << 8 | 255
                                }
                                for (let e = 4 * o, s = t.length; e < s; e += 3) i[r++] = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | 255
                            }
                            return {
                                srcPos: e,
                                destPos: r
                            }
                        }

                        function o(t, e) {
                            if (s.FeatureTest.isLittleEndian)
                                for (let i = 0, s = t.length; i < s; i++) e[i] = 65793 * t[i] | 4278190080;
                            else
                                for (let i = 0, s = t.length; i < s; i++) e[i] = 16843008 * t[i] | 255
                        }
                    }, (t, e) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.GlobalWorkerOptions = void 0;
                        let i = Object.create(null);
                        e.GlobalWorkerOptions = i, i.workerPort = null, i.workerSrc = ""
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.MessageHandler = void 0;
                        var s = i(1);
                        let r = {
                                DATA: 1,
                                ERROR: 2
                            },
                            a = {
                                CANCEL: 1,
                                CANCEL_COMPLETE: 2,
                                CLOSE: 3,
                                ENQUEUE: 4,
                                ERROR: 5,
                                PULL: 6,
                                PULL_COMPLETE: 7,
                                START_COMPLETE: 8
                            };

                        function n(t) {
                            switch (t instanceof Error || "object" == typeof t && null !== t || (0, s.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), t.name) {
                                case "AbortException":
                                    return new s.AbortException(t.message);
                                case "MissingPDFException":
                                    return new s.MissingPDFException(t.message);
                                case "PasswordException":
                                    return new s.PasswordException(t.message, t.code);
                                case "UnexpectedResponseException":
                                    return new s.UnexpectedResponseException(t.message, t.status);
                                case "UnknownErrorException":
                                    return new s.UnknownErrorException(t.message, t.details);
                                default:
                                    return new s.UnknownErrorException(t.message, t.toString())
                            }
                        }
                        class o {
                            constructor(t, e, i) {
                                this.sourceName = t, this.targetName = e, this.comObj = i, this.callbackId = 1, this.streamId = 1, this.streamSinks = Object.create(null), this.streamControllers = Object.create(null), this.callbackCapabilities = Object.create(null), this.actionHandler = Object.create(null), this._onComObjOnMessage = t => {
                                    let e = t.data;
                                    if (e.targetName !== this.sourceName) return;
                                    if (e.stream) {
                                        this.#tE(e);
                                        return
                                    }
                                    if (e.callback) {
                                        let t = e.callbackId,
                                            i = this.callbackCapabilities[t];
                                        if (!i) throw Error(`Cannot resolve callback ${t}`);
                                        if (delete this.callbackCapabilities[t], e.callback === r.DATA) i.resolve(e.data);
                                        else if (e.callback === r.ERROR) i.reject(n(e.reason));
                                        else throw Error("Unexpected callback case");
                                        return
                                    }
                                    let s = this.actionHandler[e.action];
                                    if (!s) throw Error(`Unknown action from worker: ${e.action}`);
                                    if (e.callbackId) {
                                        let t = this.sourceName,
                                            a = e.sourceName;
                                        new Promise(function(t) {
                                            t(s(e.data))
                                        }).then(function(s) {
                                            i.postMessage({
                                                sourceName: t,
                                                targetName: a,
                                                callback: r.DATA,
                                                callbackId: e.callbackId,
                                                data: s
                                            })
                                        }, function(s) {
                                            i.postMessage({
                                                sourceName: t,
                                                targetName: a,
                                                callback: r.ERROR,
                                                callbackId: e.callbackId,
                                                reason: n(s)
                                            })
                                        });
                                        return
                                    }
                                    if (e.streamId) {
                                        this.#tT(e);
                                        return
                                    }
                                    s(e.data)
                                }, i.addEventListener("message", this._onComObjOnMessage)
                            }
                            on(t, e) {
                                let i = this.actionHandler;
                                if (i[t]) throw Error(`There is already an actionName called "${t}"`);
                                i[t] = e
                            }
                            send(t, e, i) {
                                this.comObj.postMessage({
                                    sourceName: this.sourceName,
                                    targetName: this.targetName,
                                    action: t,
                                    data: e
                                }, i)
                            }
                            sendWithPromise(t, e, i) {
                                let r = this.callbackId++,
                                    a = new s.PromiseCapability;
                                this.callbackCapabilities[r] = a;
                                try {
                                    this.comObj.postMessage({
                                        sourceName: this.sourceName,
                                        targetName: this.targetName,
                                        action: t,
                                        callbackId: r,
                                        data: e
                                    }, i)
                                } catch (t) {
                                    a.reject(t)
                                }
                                return a.promise
                            }
                            sendWithStream(t, e, i, r) {
                                let o = this.streamId++,
                                    l = this.sourceName,
                                    h = this.targetName,
                                    d = this.comObj;
                                return new ReadableStream({
                                    start: i => {
                                        let a = new s.PromiseCapability;
                                        return this.streamControllers[o] = {
                                            controller: i,
                                            startCall: a,
                                            pullCall: null,
                                            cancelCall: null,
                                            isClosed: !1
                                        }, d.postMessage({
                                            sourceName: l,
                                            targetName: h,
                                            action: t,
                                            streamId: o,
                                            data: e,
                                            desiredSize: i.desiredSize
                                        }, r), a.promise
                                    },
                                    pull: t => {
                                        let e = new s.PromiseCapability;
                                        return this.streamControllers[o].pullCall = e, d.postMessage({
                                            sourceName: l,
                                            targetName: h,
                                            stream: a.PULL,
                                            streamId: o,
                                            desiredSize: t.desiredSize
                                        }), e.promise
                                    },
                                    cancel: t => {
                                        (0, s.assert)(t instanceof Error, "cancel must have a valid reason");
                                        let e = new s.PromiseCapability;
                                        return this.streamControllers[o].cancelCall = e, this.streamControllers[o].isClosed = !0, d.postMessage({
                                            sourceName: l,
                                            targetName: h,
                                            stream: a.CANCEL,
                                            streamId: o,
                                            reason: n(t)
                                        }), e.promise
                                    }
                                }, i)
                            }
                            #tT(t) {
                                let e = t.streamId,
                                    i = this.sourceName,
                                    r = t.sourceName,
                                    o = this.comObj,
                                    l = this,
                                    h = this.actionHandler[t.action],
                                    d = {
                                        enqueue(t, n = 1, l) {
                                            if (this.isCancelled) return;
                                            let h = this.desiredSize;
                                            this.desiredSize -= n, h > 0 && this.desiredSize <= 0 && (this.sinkCapability = new s.PromiseCapability, this.ready = this.sinkCapability.promise), o.postMessage({
                                                sourceName: i,
                                                targetName: r,
                                                stream: a.ENQUEUE,
                                                streamId: e,
                                                chunk: t
                                            }, l)
                                        },
                                        close() {
                                            this.isCancelled || (this.isCancelled = !0, o.postMessage({
                                                sourceName: i,
                                                targetName: r,
                                                stream: a.CLOSE,
                                                streamId: e
                                            }), delete l.streamSinks[e])
                                        },
                                        error(t) {
                                            (0, s.assert)(t instanceof Error, "error must have a valid reason"), this.isCancelled || (this.isCancelled = !0, o.postMessage({
                                                sourceName: i,
                                                targetName: r,
                                                stream: a.ERROR,
                                                streamId: e,
                                                reason: n(t)
                                            }))
                                        },
                                        sinkCapability: new s.PromiseCapability,
                                        onPull: null,
                                        onCancel: null,
                                        isCancelled: !1,
                                        desiredSize: t.desiredSize,
                                        ready: null
                                    };
                                d.sinkCapability.resolve(), d.ready = d.sinkCapability.promise, this.streamSinks[e] = d, new Promise(function(e) {
                                    e(h(t.data, d))
                                }).then(function() {
                                    o.postMessage({
                                        sourceName: i,
                                        targetName: r,
                                        stream: a.START_COMPLETE,
                                        streamId: e,
                                        success: !0
                                    })
                                }, function(t) {
                                    o.postMessage({
                                        sourceName: i,
                                        targetName: r,
                                        stream: a.START_COMPLETE,
                                        streamId: e,
                                        reason: n(t)
                                    })
                                })
                            }
                            #tE(t) {
                                let e = t.streamId,
                                    i = this.sourceName,
                                    r = t.sourceName,
                                    o = this.comObj,
                                    l = this.streamControllers[e],
                                    h = this.streamSinks[e];
                                switch (t.stream) {
                                    case a.START_COMPLETE:
                                        t.success ? l.startCall.resolve() : l.startCall.reject(n(t.reason));
                                        break;
                                    case a.PULL_COMPLETE:
                                        t.success ? l.pullCall.resolve() : l.pullCall.reject(n(t.reason));
                                        break;
                                    case a.PULL:
                                        if (!h) {
                                            o.postMessage({
                                                sourceName: i,
                                                targetName: r,
                                                stream: a.PULL_COMPLETE,
                                                streamId: e,
                                                success: !0
                                            });
                                            break
                                        }
                                        h.desiredSize <= 0 && t.desiredSize > 0 && h.sinkCapability.resolve(), h.desiredSize = t.desiredSize, new Promise(function(t) {
                                            t(h.onPull?.())
                                        }).then(function() {
                                            o.postMessage({
                                                sourceName: i,
                                                targetName: r,
                                                stream: a.PULL_COMPLETE,
                                                streamId: e,
                                                success: !0
                                            })
                                        }, function(t) {
                                            o.postMessage({
                                                sourceName: i,
                                                targetName: r,
                                                stream: a.PULL_COMPLETE,
                                                streamId: e,
                                                reason: n(t)
                                            })
                                        });
                                        break;
                                    case a.ENQUEUE:
                                        if ((0, s.assert)(l, "enqueue should have stream controller"), l.isClosed) break;
                                        l.controller.enqueue(t.chunk);
                                        break;
                                    case a.CLOSE:
                                        if ((0, s.assert)(l, "close should have stream controller"), l.isClosed) break;
                                        l.isClosed = !0, l.controller.close(), this.#tP(l, e);
                                        break;
                                    case a.ERROR:
                                        (0, s.assert)(l, "error should have stream controller"), l.controller.error(n(t.reason)), this.#tP(l, e);
                                        break;
                                    case a.CANCEL_COMPLETE:
                                        t.success ? l.cancelCall.resolve() : l.cancelCall.reject(n(t.reason)), this.#tP(l, e);
                                        break;
                                    case a.CANCEL:
                                        if (!h) break;
                                        new Promise(function(e) {
                                            e(h.onCancel?.(n(t.reason)))
                                        }).then(function() {
                                            o.postMessage({
                                                sourceName: i,
                                                targetName: r,
                                                stream: a.CANCEL_COMPLETE,
                                                streamId: e,
                                                success: !0
                                            })
                                        }, function(t) {
                                            o.postMessage({
                                                sourceName: i,
                                                targetName: r,
                                                stream: a.CANCEL_COMPLETE,
                                                streamId: e,
                                                reason: n(t)
                                            })
                                        }), h.sinkCapability.reject(n(t.reason)), h.isCancelled = !0, delete this.streamSinks[e];
                                        break;
                                    default:
                                        throw Error("Unexpected stream case")
                                }
                            }
                            async #tP(t, e) {
                                await Promise.allSettled([t.startCall?.promise, t.pullCall?.promise, t.cancelCall?.promise]), delete this.streamControllers[e]
                            }
                            destroy() {
                                this.comObj.removeEventListener("message", this._onComObjOnMessage)
                            }
                        }
                        e.MessageHandler = o
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.Metadata = void 0;
                        var s = i(1);
                        class r {
                            #tM;
                            #tw;
                            constructor({
                                parsedData: t,
                                rawData: e
                            }) {
                                this.#tM = t, this.#tw = e
                            }
                            getRaw() {
                                return this.#tw
                            }
                            get(t) {
                                return this.#tM.get(t) ?? null
                            }
                            getAll() {
                                return (0, s.objectFromMap)(this.#tM)
                            }
                            has(t) {
                                return this.#tM.has(t)
                            }
                        }
                        e.Metadata = r
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.OptionalContentConfig = void 0;
                        var s = i(1),
                            r = i(8);
                        let a = Symbol("INTERNAL");
                        class n {
                            #tk = !0;
                            constructor(t, e) {
                                this.name = t, this.intent = e
                            }
                            get visible() {
                                return this.#tk
                            }
                            _setVisible(t, e) {
                                t !== a && (0, s.unreachable)("Internal method `_setVisible` called."), this.#tk = e
                            }
                        }
                        class o {
                            #tR = null;
                            #tF = new Map;
                            #tO = null;
                            #tI = null;
                            constructor(t) {
                                if (this.name = null, this.creator = null, null === t) return;
                                for (let e of (this.name = t.name, this.creator = t.creator, this.#tI = t.order, t.groups)) this.#tF.set(e.id, new n(e.name, e.intent));
                                if ("OFF" === t.baseState)
                                    for (let t of this.#tF.values()) t._setVisible(a, !1);
                                for (let e of t.on) this.#tF.get(e)._setVisible(a, !0);
                                for (let e of t.off) this.#tF.get(e)._setVisible(a, !1);
                                this.#tO = this.getHash()
                            }
                            #tD(t) {
                                let e = t.length;
                                if (e < 2) return !0;
                                let i = t[0];
                                for (let r = 1; r < e; r++) {
                                    let e;
                                    let a = t[r];
                                    if (Array.isArray(a)) e = this.#tD(a);
                                    else {
                                        if (!this.#tF.has(a)) return (0, s.warn)(`Optional content group not found: ${a}`), !0;
                                        e = this.#tF.get(a).visible
                                    }
                                    switch (i) {
                                        case "And":
                                            if (!e) return !1;
                                            break;
                                        case "Or":
                                            if (e) return !0;
                                            break;
                                        case "Not":
                                            return !e;
                                        default:
                                            return !0
                                    }
                                }
                                return "And" === i
                            }
                            isVisible(t) {
                                if (0 === this.#tF.size) return !0;
                                if (!t) return (0, s.warn)("Optional content group not defined."), !0;
                                if ("OCG" === t.type) return this.#tF.has(t.id) ? this.#tF.get(t.id).visible : ((0, s.warn)(`Optional content group not found: ${t.id}`), !0);
                                if ("OCMD" === t.type) {
                                    if (t.expression) return this.#tD(t.expression);
                                    if (t.policy && "AnyOn" !== t.policy) {
                                        if ("AllOn" === t.policy) {
                                            for (let e of t.ids) {
                                                if (!this.#tF.has(e)) {
                                                    (0, s.warn)(`Optional content group not found: ${e}`);
                                                    break
                                                }
                                                if (!this.#tF.get(e).visible) return !1
                                            }
                                            return !0
                                        }
                                        if ("AnyOff" === t.policy) {
                                            for (let e of t.ids) {
                                                if (!this.#tF.has(e)) return (0, s.warn)(`Optional content group not found: ${e}`), !0;
                                                if (!this.#tF.get(e).visible) return !0
                                            }
                                            return !1
                                        }
                                        if ("AllOff" === t.policy) {
                                            for (let e of t.ids) {
                                                if (!this.#tF.has(e)) {
                                                    (0, s.warn)(`Optional content group not found: ${e}`);
                                                    break
                                                }
                                                if (this.#tF.get(e).visible) return !1
                                            }
                                            return !0
                                        }
                                    } else {
                                        for (let e of t.ids) {
                                            if (!this.#tF.has(e)) return (0, s.warn)(`Optional content group not found: ${e}`), !0;
                                            if (this.#tF.get(e).visible) return !0
                                        }
                                        return !1
                                    }
                                    return (0, s.warn)(`Unknown optional content policy ${t.policy}.`), !0
                                }
                                return (0, s.warn)(`Unknown group type ${t.type}.`), !0
                            }
                            setVisibility(t, e = !0) {
                                if (!this.#tF.has(t)) {
                                    (0, s.warn)(`Optional content group not found: ${t}`);
                                    return
                                }
                                this.#tF.get(t)._setVisible(a, !!e), this.#tR = null
                            }
                            get hasInitialVisibility() {
                                return this.getHash() === this.#tO
                            }
                            getOrder() {
                                return this.#tF.size ? this.#tI ? this.#tI.slice() : [...this.#tF.keys()] : null
                            }
                            getGroups() {
                                return this.#tF.size > 0 ? (0, s.objectFromMap)(this.#tF) : null
                            }
                            getGroup(t) {
                                return this.#tF.get(t) || null
                            }
                            getHash() {
                                if (null !== this.#tR) return this.#tR;
                                let t = new r.MurmurHash3_64;
                                for (let [e, i] of this.#tF) t.update(`${e}:${i.visible}`);
                                return this.#tR = t.hexdigest()
                            }
                        }
                        e.OptionalContentConfig = o
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.PDFDataTransportStream = void 0;
                        var s = i(1),
                            r = i(6);
                        class a {
                            constructor({
                                length: t,
                                initialData: e,
                                progressiveDone: i = !1,
                                contentDispositionFilename: r = null,
                                disableRange: a = !1,
                                disableStream: n = !1
                            }, o) {
                                if ((0, s.assert)(o, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'), this._queuedChunks = [], this._progressiveDone = i, this._contentDispositionFilename = r, e?.length > 0) {
                                    let t = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
                                    this._queuedChunks.push(t)
                                }
                                this._pdfDataRangeTransport = o, this._isStreamingSupported = !n, this._isRangeSupported = !a, this._contentLength = t, this._fullRequestReader = null, this._rangeReaders = [], this._pdfDataRangeTransport.addRangeListener((t, e) => {
                                    this._onReceiveData({
                                        begin: t,
                                        chunk: e
                                    })
                                }), this._pdfDataRangeTransport.addProgressListener((t, e) => {
                                    this._onProgress({
                                        loaded: t,
                                        total: e
                                    })
                                }), this._pdfDataRangeTransport.addProgressiveReadListener(t => {
                                    this._onReceiveData({
                                        chunk: t
                                    })
                                }), this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
                                    this._onProgressiveDone()
                                }), this._pdfDataRangeTransport.transportReady()
                            }
                            _onReceiveData({
                                begin: t,
                                chunk: e
                            }) {
                                let i = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
                                if (void 0 === t) this._fullRequestReader ? this._fullRequestReader._enqueue(i) : this._queuedChunks.push(i);
                                else {
                                    let e = this._rangeReaders.some(function(e) {
                                        return e._begin === t && (e._enqueue(i), !0)
                                    });
                                    (0, s.assert)(e, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.")
                                }
                            }
                            get _progressiveDataLength() {
                                return this._fullRequestReader?._loaded ?? 0
                            }
                            _onProgress(t) {
                                void 0 === t.total ? this._rangeReaders[0]?.onProgress?.({
                                    loaded: t.loaded
                                }) : this._fullRequestReader?.onProgress?.({
                                    loaded: t.loaded,
                                    total: t.total
                                })
                            }
                            _onProgressiveDone() {
                                this._fullRequestReader?.progressiveDone(), this._progressiveDone = !0
                            }
                            _removeRangeReader(t) {
                                let e = this._rangeReaders.indexOf(t);
                                e >= 0 && this._rangeReaders.splice(e, 1)
                            }
                            getFullReader() {
                                (0, s.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
                                let t = this._queuedChunks;
                                return this._queuedChunks = null, new n(this, t, this._progressiveDone, this._contentDispositionFilename)
                            }
                            getRangeReader(t, e) {
                                if (e <= this._progressiveDataLength) return null;
                                let i = new o(this, t, e);
                                return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(i), i
                            }
                            cancelAllRequests(t) {
                                for (let e of (this._fullRequestReader?.cancel(t), this._rangeReaders.slice(0))) e.cancel(t);
                                this._pdfDataRangeTransport.abort()
                            }
                        }
                        e.PDFDataTransportStream = a;
                        class n {
                            constructor(t, e, i = !1, s = null) {
                                for (let a of (this._stream = t, this._done = i || !1, this._filename = (0, r.isPdfFile)(s) ? s : null, this._queuedChunks = e || [], this._loaded = 0, this._queuedChunks)) this._loaded += a.byteLength;
                                this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null
                            }
                            _enqueue(t) {
                                this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
                                    value: t,
                                    done: !1
                                }) : this._queuedChunks.push(t), this._loaded += t.byteLength)
                            }
                            get headersReady() {
                                return this._headersReady
                            }
                            get filename() {
                                return this._filename
                            }
                            get isRangeSupported() {
                                return this._stream._isRangeSupported
                            }
                            get isStreamingSupported() {
                                return this._stream._isStreamingSupported
                            }
                            get contentLength() {
                                return this._stream._contentLength
                            }
                            async read() {
                                if (this._queuedChunks.length > 0) return {
                                    value: this._queuedChunks.shift(),
                                    done: !1
                                };
                                if (this._done) return {
                                    value: void 0,
                                    done: !0
                                };
                                let t = new s.PromiseCapability;
                                return this._requests.push(t), t.promise
                            }
                            cancel(t) {
                                for (let t of (this._done = !0, this._requests)) t.resolve({
                                    value: void 0,
                                    done: !0
                                });
                                this._requests.length = 0
                            }
                            progressiveDone() {
                                this._done || (this._done = !0)
                            }
                        }
                        class o {
                            constructor(t, e, i) {
                                this._stream = t, this._begin = e, this._end = i, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null
                            }
                            _enqueue(t) {
                                if (!this._done) {
                                    if (0 === this._requests.length) this._queuedChunk = t;
                                    else {
                                        for (let e of (this._requests.shift().resolve({
                                                value: t,
                                                done: !1
                                            }), this._requests)) e.resolve({
                                            value: void 0,
                                            done: !0
                                        });
                                        this._requests.length = 0
                                    }
                                    this._done = !0, this._stream._removeRangeReader(this)
                                }
                            }
                            get isStreamingSupported() {
                                return !1
                            }
                            async read() {
                                if (this._queuedChunk) {
                                    let t = this._queuedChunk;
                                    return this._queuedChunk = null, {
                                        value: t,
                                        done: !1
                                    }
                                }
                                if (this._done) return {
                                    value: void 0,
                                    done: !0
                                };
                                let t = new s.PromiseCapability;
                                return this._requests.push(t), t.promise
                            }
                            cancel(t) {
                                for (let t of (this._done = !0, this._requests)) t.resolve({
                                    value: void 0,
                                    done: !0
                                });
                                this._requests.length = 0, this._stream._removeRangeReader(this)
                            }
                        }
                    }, (t, e) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.XfaText = void 0;
                        class i {
                            static textContent(t) {
                                let e = [],
                                    s = {
                                        items: e,
                                        styles: Object.create(null)
                                    };

                                function r(t) {
                                    if (!t) return;
                                    let s = null,
                                        a = t.name;
                                    if ("#text" === a) s = t.value;
                                    else {
                                        if (!i.shouldBuildText(a)) return;
                                        t?.attributes?.textContent ? s = t.attributes.textContent : t.value && (s = t.value)
                                    }
                                    if (null !== s && e.push({
                                            str: s
                                        }), t.children)
                                        for (let e of t.children) r(e)
                                }
                                return r(t), s
                            }
                            static shouldBuildText(t) {
                                return !("textarea" === t || "input" === t || "option" === t || "select" === t)
                            }
                        }
                        e.XfaText = i
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.NodeStandardFontDataFactory = e.NodeFilterFactory = e.NodeCanvasFactory = e.NodeCMapReaderFactory = void 0;
                        var s = i(7);
                        let r = function(t) {
                            return new Promise((e, i) => {
                                __webpack_require__(70172).readFile(t, (t, s) => {
                                    if (t || !s) {
                                        i(Error(t));
                                        return
                                    }
                                    e(new Uint8Array(s))
                                })
                            })
                        };
                        class a extends s.BaseFilterFactory {}
                        e.NodeFilterFactory = a;
                        class n extends s.BaseCanvasFactory {
                            _createCanvas(t, e) {
                                return __webpack_require__(93414).createCanvas(t, e)
                            }
                        }
                        e.NodeCanvasFactory = n;
                        class o extends s.BaseCMapReaderFactory {
                            _fetchData(t, e) {
                                return r(t).then(t => ({
                                    cMapData: t,
                                    compressionType: e
                                }))
                            }
                        }
                        e.NodeCMapReaderFactory = o;
                        class l extends s.BaseStandardFontDataFactory {
                            _fetchData(t) {
                                return r(t)
                            }
                        }
                        e.NodeStandardFontDataFactory = l
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.PDFNodeStream = void 0;
                        var s = i(1),
                            r = i(22);
                        let a = __webpack_require__(70172),
                            n = __webpack_require__(2001),
                            o = __webpack_require__(33779),
                            l = __webpack_require__(93813),
                            h = /^file:\/\/\/[a-zA-Z]:\//;

                        function d(t) {
                            let e = l.parse(t);
                            return "file:" === e.protocol || e.host ? e : /^[a-z]:[/\\]/i.test(t) ? l.parse(`file:///${t}`) : (e.host || (e.protocol = "file:"), e)
                        }
                        class c {
                            constructor(t) {
                                this.source = t, this.url = d(t.url), this.isHttp = "http:" === this.url.protocol || "https:" === this.url.protocol, this.isFsUrl = "file:" === this.url.protocol, this.httpHeaders = this.isHttp && t.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = []
                            }
                            get _progressiveDataLength() {
                                return this._fullRequestReader?._loaded ?? 0
                            }
                            getFullReader() {
                                return (0, s.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new b(this) : new f(this), this._fullRequestReader
                            }
                            getRangeReader(t, e) {
                                if (e <= this._progressiveDataLength) return null;
                                let i = this.isFsUrl ? new A(this, t, e) : new m(this, t, e);
                                return this._rangeRequestReaders.push(i), i
                            }
                            cancelAllRequests(t) {
                                for (let e of (this._fullRequestReader?.cancel(t), this._rangeRequestReaders.slice(0))) e.cancel(t)
                            }
                        }
                        e.PDFNodeStream = c;
                        class u {
                            constructor(t) {
                                this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
                                let e = t.source;
                                this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = new s.PromiseCapability, this._headersCapability = new s.PromiseCapability
                            }
                            get headersReady() {
                                return this._headersCapability.promise
                            }
                            get filename() {
                                return this._filename
                            }
                            get contentLength() {
                                return this._contentLength
                            }
                            get isRangeSupported() {
                                return this._isRangeSupported
                            }
                            get isStreamingSupported() {
                                return this._isStreamingSupported
                            }
                            async read() {
                                if (await this._readCapability.promise, this._done) return {
                                    value: void 0,
                                    done: !0
                                };
                                if (this._storedError) throw this._storedError;
                                let t = this._readableStream.read();
                                return null === t ? (this._readCapability = new s.PromiseCapability, this.read()) : (this._loaded += t.length, this.onProgress?.({
                                    loaded: this._loaded,
                                    total: this._contentLength
                                }), {
                                    value: new Uint8Array(t).buffer,
                                    done: !1
                                })
                            }
                            cancel(t) {
                                if (!this._readableStream) {
                                    this._error(t);
                                    return
                                }
                                this._readableStream.destroy(t)
                            }
                            _error(t) {
                                this._storedError = t, this._readCapability.resolve()
                            }
                            _setReadableStream(t) {
                                this._readableStream = t, t.on("readable", () => {
                                    this._readCapability.resolve()
                                }), t.on("end", () => {
                                    t.destroy(), this._done = !0, this._readCapability.resolve()
                                }), t.on("error", t => {
                                    this._error(t)
                                }), !this._isStreamingSupported && this._isRangeSupported && this._error(new s.AbortException("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError)
                            }
                        }
                        class p {
                            constructor(t) {
                                this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = new s.PromiseCapability;
                                let e = t.source;
                                this._isStreamingSupported = !e.disableStream
                            }
                            get isStreamingSupported() {
                                return this._isStreamingSupported
                            }
                            async read() {
                                if (await this._readCapability.promise, this._done) return {
                                    value: void 0,
                                    done: !0
                                };
                                if (this._storedError) throw this._storedError;
                                let t = this._readableStream.read();
                                return null === t ? (this._readCapability = new s.PromiseCapability, this.read()) : (this._loaded += t.length, this.onProgress?.({
                                    loaded: this._loaded
                                }), {
                                    value: new Uint8Array(t).buffer,
                                    done: !1
                                })
                            }
                            cancel(t) {
                                if (!this._readableStream) {
                                    this._error(t);
                                    return
                                }
                                this._readableStream.destroy(t)
                            }
                            _error(t) {
                                this._storedError = t, this._readCapability.resolve()
                            }
                            _setReadableStream(t) {
                                this._readableStream = t, t.on("readable", () => {
                                    this._readCapability.resolve()
                                }), t.on("end", () => {
                                    t.destroy(), this._done = !0, this._readCapability.resolve()
                                }), t.on("error", t => {
                                    this._error(t)
                                }), this._storedError && this._readableStream.destroy(this._storedError)
                            }
                        }

                        function g(t, e) {
                            return {
                                protocol: t.protocol,
                                auth: t.auth,
                                host: t.hostname,
                                port: t.port,
                                path: t.path,
                                method: "GET",
                                headers: e
                            }
                        }
                        class f extends u {
                            constructor(t) {
                                super(t);
                                let e = e => {
                                    if (404 === e.statusCode) {
                                        let t = new s.MissingPDFException(`Missing PDF "${this._url}".`);
                                        this._storedError = t, this._headersCapability.reject(t);
                                        return
                                    }
                                    this._headersCapability.resolve(), this._setReadableStream(e);
                                    let i = t => this._readableStream.headers[t.toLowerCase()],
                                        {
                                            allowRangeRequests: a,
                                            suggestedLength: n
                                        } = (0, r.validateRangeRequestCapabilities)({
                                            getResponseHeader: i,
                                            isHttp: t.isHttp,
                                            rangeChunkSize: this._rangeChunkSize,
                                            disableRange: this._disableRange
                                        });
                                    this._isRangeSupported = a, this._contentLength = n || this._contentLength, this._filename = (0, r.extractFilenameFromHeader)(i)
                                };
                                this._request = null, "http:" === this._url.protocol ? this._request = n.request(g(this._url, t.httpHeaders), e) : this._request = o.request(g(this._url, t.httpHeaders), e), this._request.on("error", t => {
                                    this._storedError = t, this._headersCapability.reject(t)
                                }), this._request.end()
                            }
                        }
                        class m extends p {
                            constructor(t, e, i) {
                                for (let e in super(t), this._httpHeaders = {}, t.httpHeaders) {
                                    let i = t.httpHeaders[e];
                                    void 0 !== i && (this._httpHeaders[e] = i)
                                }
                                this._httpHeaders.Range = `bytes=${e}-${i-1}`;
                                let r = t => {
                                    if (404 === t.statusCode) {
                                        let t = new s.MissingPDFException(`Missing PDF "${this._url}".`);
                                        this._storedError = t;
                                        return
                                    }
                                    this._setReadableStream(t)
                                };
                                this._request = null, "http:" === this._url.protocol ? this._request = n.request(g(this._url, this._httpHeaders), r) : this._request = o.request(g(this._url, this._httpHeaders), r), this._request.on("error", t => {
                                    this._storedError = t
                                }), this._request.end()
                            }
                        }
                        class b extends u {
                            constructor(t) {
                                super(t);
                                let e = decodeURIComponent(this._url.path);
                                h.test(this._url.href) && (e = e.replace(/^\//, "")), a.lstat(e, (t, i) => {
                                    if (t) {
                                        "ENOENT" === t.code && (t = new s.MissingPDFException(`Missing PDF "${e}".`)), this._storedError = t, this._headersCapability.reject(t);
                                        return
                                    }
                                    this._contentLength = i.size, this._setReadableStream(a.createReadStream(e)), this._headersCapability.resolve()
                                })
                            }
                        }
                        class A extends p {
                            constructor(t, e, i) {
                                super(t);
                                let s = decodeURIComponent(this._url.path);
                                h.test(this._url.href) && (s = s.replace(/^\//, "")), this._setReadableStream(a.createReadStream(s, {
                                    start: e,
                                    end: i - 1
                                }))
                            }
                        }
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.createResponseStatusError = l, e.extractFilenameFromHeader = o, e.validateRangeRequestCapabilities = n, e.validateResponseStatus = h;
                        var s = i(1),
                            r = i(23),
                            a = i(6);

                        function n({
                            getResponseHeader: t,
                            isHttp: e,
                            rangeChunkSize: i,
                            disableRange: s
                        }) {
                            let r = {
                                    allowRangeRequests: !1,
                                    suggestedLength: void 0
                                },
                                a = parseInt(t("Content-Length"), 10);
                            return Number.isInteger(a) && (r.suggestedLength = a, a <= 2 * i || s || !e || "bytes" !== t("Accept-Ranges") || "identity" !== (t("Content-Encoding") || "identity") || (r.allowRangeRequests = !0)), r
                        }

                        function o(t) {
                            let e = t("Content-Disposition");
                            if (e) {
                                let t = (0, r.getFilenameFromContentDispositionHeader)(e);
                                if (t.includes("%")) try {
                                    t = decodeURIComponent(t)
                                } catch (t) {}
                                if ((0, a.isPdfFile)(t)) return t
                            }
                            return null
                        }

                        function l(t, e) {
                            return 404 === t || 0 === t && e.startsWith("file:") ? new s.MissingPDFException('Missing PDF "' + e + '".') : new s.UnexpectedResponseException(`Unexpected server response (${t}) while retrieving PDF "${e}".`, t)
                        }

                        function h(t) {
                            return 200 === t || 206 === t
                        }
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.getFilenameFromContentDispositionHeader = r;
                        var s = i(1);

                        function r(t) {
                            let e = !0,
                                i = r("filename\\*", "i").exec(t);
                            if (i) {
                                let t = l(i = i[1]);
                                return n(t = d(t = h(t = unescape(t))))
                            }
                            if (i = o(t)) return n(d(i));
                            if (i = r("filename", "i").exec(t)) {
                                let t = l(i = i[1]);
                                return n(t = d(t))
                            }

                            function r(t, e) {
                                return RegExp("(?:^|;)\\s*" + t + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', e)
                            }

                            function a(t, i) {
                                if (t) {
                                    if (!/^[\x00-\xFF]+$/.test(i)) return i;
                                    try {
                                        let r = new TextDecoder(t, {
                                                fatal: !0
                                            }),
                                            a = (0, s.stringToBytes)(i);
                                        i = r.decode(a), e = !1
                                    } catch (t) {}
                                }
                                return i
                            }

                            function n(t) {
                                return e && /[\x80-\xff]/.test(t) && (t = a("utf-8", t), e && (t = a("iso-8859-1", t))), t
                            }

                            function o(t) {
                                let e;
                                let i = [],
                                    s = r("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
                                for (; null !== (e = s.exec(t));) {
                                    let [, t, s, r] = e;
                                    if ((t = parseInt(t, 10)) in i) {
                                        if (0 === t) break;
                                        continue
                                    }
                                    i[t] = [s, r]
                                }
                                let a = [];
                                for (let t = 0; t < i.length && (t in i); ++t) {
                                    let [e, s] = i[t];
                                    s = l(s), e && (s = unescape(s), 0 === t && (s = h(s))), a.push(s)
                                }
                                return a.join("")
                            }

                            function l(t) {
                                if (t.startsWith('"')) {
                                    let e = t.slice(1).split('\\"');
                                    for (let t = 0; t < e.length; ++t) {
                                        let i = e[t].indexOf('"'); - 1 !== i && (e[t] = e[t].slice(0, i), e.length = t + 1), e[t] = e[t].replaceAll(/\\(.)/g, "$1")
                                    }
                                    t = e.join('"')
                                }
                                return t
                            }

                            function h(t) {
                                let e = t.indexOf("'");
                                return -1 === e ? t : a(t.slice(0, e), t.slice(e + 1).replace(/^[^']*'/, ""))
                            }

                            function d(t) {
                                return !t.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t) ? t : t.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(t, e, i, s) {
                                    if ("q" === i || "Q" === i) return a(e, s = (s = s.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, function(t, e) {
                                        return String.fromCharCode(parseInt(e, 16))
                                    }));
                                    try {
                                        s = atob(s)
                                    } catch (t) {}
                                    return a(e, s)
                                })
                            }
                            return ""
                        }
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.PDFNetworkStream = void 0;
                        var s = i(1),
                            r = i(22);
                        let a = 200,
                            n = 206;

                        function o(t) {
                            let e = t.response;
                            return "string" != typeof e ? e : (0, s.stringToBytes)(e).buffer
                        }
                        class l {
                            constructor(t, e = {}) {
                                this.url = t, this.isHttp = /^https?:/i.test(t), this.httpHeaders = this.isHttp && e.httpHeaders || Object.create(null), this.withCredentials = e.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = Object.create(null)
                            }
                            requestRange(t, e, i) {
                                let s = {
                                    begin: t,
                                    end: e
                                };
                                for (let t in i) s[t] = i[t];
                                return this.request(s)
                            }
                            requestFull(t) {
                                return this.request(t)
                            }
                            request(t) {
                                let e = new XMLHttpRequest,
                                    i = this.currXhrId++,
                                    s = this.pendingRequests[i] = {
                                        xhr: e
                                    };
                                for (let t in e.open("GET", this.url), e.withCredentials = this.withCredentials, this.httpHeaders) {
                                    let i = this.httpHeaders[t];
                                    void 0 !== i && e.setRequestHeader(t, i)
                                }
                                return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end-1}`), s.expectedStatus = n) : s.expectedStatus = a, e.responseType = "arraybuffer", t.onError && (e.onerror = function(i) {
                                    t.onError(e.status)
                                }), e.onreadystatechange = this.onStateChange.bind(this, i), e.onprogress = this.onProgress.bind(this, i), s.onHeadersReceived = t.onHeadersReceived, s.onDone = t.onDone, s.onError = t.onError, s.onProgress = t.onProgress, e.send(null), i
                            }
                            onProgress(t, e) {
                                let i = this.pendingRequests[t];
                                i && i.onProgress?.(e)
                            }
                            onStateChange(t, e) {
                                let i = this.pendingRequests[t];
                                if (!i) return;
                                let s = i.xhr;
                                if (s.readyState >= 2 && i.onHeadersReceived && (i.onHeadersReceived(), delete i.onHeadersReceived), 4 !== s.readyState || !(t in this.pendingRequests)) return;
                                if (delete this.pendingRequests[t], 0 === s.status && this.isHttp) {
                                    i.onError?.(s.status);
                                    return
                                }
                                let r = s.status || a;
                                if (!(r === a && i.expectedStatus === n) && r !== i.expectedStatus) {
                                    i.onError?.(s.status);
                                    return
                                }
                                let l = o(s);
                                if (r === n) {
                                    let t = s.getResponseHeader("Content-Range"),
                                        e = /bytes (\d+)-(\d+)\/(\d+)/.exec(t);
                                    i.onDone({
                                        begin: parseInt(e[1], 10),
                                        chunk: l
                                    })
                                } else l ? i.onDone({
                                    begin: 0,
                                    chunk: l
                                }) : i.onError?.(s.status)
                            }
                            getRequestXhr(t) {
                                return this.pendingRequests[t].xhr
                            }
                            isPendingRequest(t) {
                                return t in this.pendingRequests
                            }
                            abortRequest(t) {
                                let e = this.pendingRequests[t].xhr;
                                delete this.pendingRequests[t], e.abort()
                            }
                        }
                        class h {
                            constructor(t) {
                                this._source = t, this._manager = new l(t.url, {
                                    httpHeaders: t.httpHeaders,
                                    withCredentials: t.withCredentials
                                }), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = []
                            }
                            _onRangeRequestReaderClosed(t) {
                                let e = this._rangeRequestReaders.indexOf(t);
                                e >= 0 && this._rangeRequestReaders.splice(e, 1)
                            }
                            getFullReader() {
                                return (0, s.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new d(this._manager, this._source), this._fullRequestReader
                            }
                            getRangeReader(t, e) {
                                let i = new c(this._manager, t, e);
                                return i.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(i), i
                            }
                            cancelAllRequests(t) {
                                for (let e of (this._fullRequestReader?.cancel(t), this._rangeRequestReaders.slice(0))) e.cancel(t)
                            }
                        }
                        e.PDFNetworkStream = h;
                        class d {
                            constructor(t, e) {
                                this._manager = t;
                                let i = {
                                    onHeadersReceived: this._onHeadersReceived.bind(this),
                                    onDone: this._onDone.bind(this),
                                    onError: this._onError.bind(this),
                                    onProgress: this._onProgress.bind(this)
                                };
                                this._url = e.url, this._fullRequestId = t.requestFull(i), this._headersReceivedCapability = new s.PromiseCapability, this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null
                            }
                            _onHeadersReceived() {
                                let t = this._fullRequestId,
                                    e = this._manager.getRequestXhr(t),
                                    i = t => e.getResponseHeader(t),
                                    {
                                        allowRangeRequests: s,
                                        suggestedLength: a
                                    } = (0, r.validateRangeRequestCapabilities)({
                                        getResponseHeader: i,
                                        isHttp: this._manager.isHttp,
                                        rangeChunkSize: this._rangeChunkSize,
                                        disableRange: this._disableRange
                                    });
                                s && (this._isRangeSupported = !0), this._contentLength = a || this._contentLength, this._filename = (0, r.extractFilenameFromHeader)(i), this._isRangeSupported && this._manager.abortRequest(t), this._headersReceivedCapability.resolve()
                            }
                            _onDone(t) {
                                if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
                                        value: t.chunk,
                                        done: !1
                                    }) : this._cachedChunks.push(t.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
                                    for (let t of this._requests) t.resolve({
                                        value: void 0,
                                        done: !0
                                    });
                                    this._requests.length = 0
                                }
                            }
                            _onError(t) {
                                for (let e of (this._storedError = (0, r.createResponseStatusError)(t, this._url), this._headersReceivedCapability.reject(this._storedError), this._requests)) e.reject(this._storedError);
                                this._requests.length = 0, this._cachedChunks.length = 0
                            }
                            _onProgress(t) {
                                this.onProgress?.({
                                    loaded: t.loaded,
                                    total: t.lengthComputable ? t.total : this._contentLength
                                })
                            }
                            get filename() {
                                return this._filename
                            }
                            get isRangeSupported() {
                                return this._isRangeSupported
                            }
                            get isStreamingSupported() {
                                return this._isStreamingSupported
                            }
                            get contentLength() {
                                return this._contentLength
                            }
                            get headersReady() {
                                return this._headersReceivedCapability.promise
                            }
                            async read() {
                                if (this._storedError) throw this._storedError;
                                if (this._cachedChunks.length > 0) return {
                                    value: this._cachedChunks.shift(),
                                    done: !1
                                };
                                if (this._done) return {
                                    value: void 0,
                                    done: !0
                                };
                                let t = new s.PromiseCapability;
                                return this._requests.push(t), t.promise
                            }
                            cancel(t) {
                                for (let e of (this._done = !0, this._headersReceivedCapability.reject(t), this._requests)) e.resolve({
                                    value: void 0,
                                    done: !0
                                });
                                this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null
                            }
                        }
                        class c {
                            constructor(t, e, i) {
                                this._manager = t;
                                let s = {
                                    onDone: this._onDone.bind(this),
                                    onError: this._onError.bind(this),
                                    onProgress: this._onProgress.bind(this)
                                };
                                this._url = t.url, this._requestId = t.requestRange(e, i, s), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null
                            }
                            _close() {
                                this.onClosed?.(this)
                            }
                            _onDone(t) {
                                let e = t.chunk;
                                for (let t of (this._requests.length > 0 ? this._requests.shift().resolve({
                                        value: e,
                                        done: !1
                                    }) : this._queuedChunk = e, this._done = !0, this._requests)) t.resolve({
                                    value: void 0,
                                    done: !0
                                });
                                this._requests.length = 0, this._close()
                            }
                            _onError(t) {
                                for (let e of (this._storedError = (0, r.createResponseStatusError)(t, this._url), this._requests)) e.reject(this._storedError);
                                this._requests.length = 0, this._queuedChunk = null
                            }
                            _onProgress(t) {
                                this.isStreamingSupported || this.onProgress?.({
                                    loaded: t.loaded
                                })
                            }
                            get isStreamingSupported() {
                                return !1
                            }
                            async read() {
                                if (this._storedError) throw this._storedError;
                                if (null !== this._queuedChunk) {
                                    let t = this._queuedChunk;
                                    return this._queuedChunk = null, {
                                        value: t,
                                        done: !1
                                    }
                                }
                                if (this._done) return {
                                    value: void 0,
                                    done: !0
                                };
                                let t = new s.PromiseCapability;
                                return this._requests.push(t), t.promise
                            }
                            cancel(t) {
                                for (let t of (this._done = !0, this._requests)) t.resolve({
                                    value: void 0,
                                    done: !0
                                });
                                this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close()
                            }
                        }
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.PDFFetchStream = void 0;
                        var s = i(1),
                            r = i(22);

                        function a(t, e, i) {
                            return {
                                method: "GET",
                                headers: t,
                                signal: i.signal,
                                mode: "cors",
                                credentials: e ? "include" : "same-origin",
                                redirect: "follow"
                            }
                        }

                        function n(t) {
                            let e = new Headers;
                            for (let i in t) {
                                let s = t[i];
                                void 0 !== s && e.append(i, s)
                            }
                            return e
                        }

                        function o(t) {
                            return t instanceof Uint8Array ? t.buffer : t instanceof ArrayBuffer ? t : ((0, s.warn)(`getArrayBuffer - unexpected data format: ${t}`), new Uint8Array(t).buffer)
                        }
                        class l {
                            constructor(t) {
                                this.source = t, this.isHttp = /^https?:/i.test(t.url), this.httpHeaders = this.isHttp && t.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = []
                            }
                            get _progressiveDataLength() {
                                return this._fullRequestReader?._loaded ?? 0
                            }
                            getFullReader() {
                                return (0, s.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new h(this), this._fullRequestReader
                            }
                            getRangeReader(t, e) {
                                if (e <= this._progressiveDataLength) return null;
                                let i = new d(this, t, e);
                                return this._rangeRequestReaders.push(i), i
                            }
                            cancelAllRequests(t) {
                                for (let e of (this._fullRequestReader?.cancel(t), this._rangeRequestReaders.slice(0))) e.cancel(t)
                            }
                        }
                        e.PDFFetchStream = l;
                        class h {
                            constructor(t) {
                                this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
                                let e = t.source;
                                this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = new s.PromiseCapability, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._abortController = new AbortController, this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._headers = n(this._stream.httpHeaders);
                                let i = e.url;
                                fetch(i, a(this._headers, this._withCredentials, this._abortController)).then(t => {
                                    if (!(0, r.validateResponseStatus)(t.status)) throw (0, r.createResponseStatusError)(t.status, i);
                                    this._reader = t.body.getReader(), this._headersCapability.resolve();
                                    let e = e => t.headers.get(e),
                                        {
                                            allowRangeRequests: a,
                                            suggestedLength: n
                                        } = (0, r.validateRangeRequestCapabilities)({
                                            getResponseHeader: e,
                                            isHttp: this._stream.isHttp,
                                            rangeChunkSize: this._rangeChunkSize,
                                            disableRange: this._disableRange
                                        });
                                    this._isRangeSupported = a, this._contentLength = n || this._contentLength, this._filename = (0, r.extractFilenameFromHeader)(e), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new s.AbortException("Streaming is disabled."))
                                }).catch(this._headersCapability.reject), this.onProgress = null
                            }
                            get headersReady() {
                                return this._headersCapability.promise
                            }
                            get filename() {
                                return this._filename
                            }
                            get contentLength() {
                                return this._contentLength
                            }
                            get isRangeSupported() {
                                return this._isRangeSupported
                            }
                            get isStreamingSupported() {
                                return this._isStreamingSupported
                            }
                            async read() {
                                await this._headersCapability.promise;
                                let {
                                    value: t,
                                    done: e
                                } = await this._reader.read();
                                return e ? {
                                    value: t,
                                    done: e
                                } : (this._loaded += t.byteLength, this.onProgress?.({
                                    loaded: this._loaded,
                                    total: this._contentLength
                                }), {
                                    value: o(t),
                                    done: !1
                                })
                            }
                            cancel(t) {
                                this._reader?.cancel(t), this._abortController.abort()
                            }
                        }
                        class d {
                            constructor(t, e, i) {
                                this._stream = t, this._reader = null, this._loaded = 0;
                                let o = t.source;
                                this._withCredentials = o.withCredentials || !1, this._readCapability = new s.PromiseCapability, this._isStreamingSupported = !o.disableStream, this._abortController = new AbortController, this._headers = n(this._stream.httpHeaders), this._headers.append("Range", `bytes=${e}-${i-1}`);
                                let l = o.url;
                                fetch(l, a(this._headers, this._withCredentials, this._abortController)).then(t => {
                                    if (!(0, r.validateResponseStatus)(t.status)) throw (0, r.createResponseStatusError)(t.status, l);
                                    this._readCapability.resolve(), this._reader = t.body.getReader()
                                }).catch(this._readCapability.reject), this.onProgress = null
                            }
                            get isStreamingSupported() {
                                return this._isStreamingSupported
                            }
                            async read() {
                                await this._readCapability.promise;
                                let {
                                    value: t,
                                    done: e
                                } = await this._reader.read();
                                return e ? {
                                    value: t,
                                    done: e
                                } : (this._loaded += t.byteLength, this.onProgress?.({
                                    loaded: this._loaded
                                }), {
                                    value: o(t),
                                    done: !1
                                })
                            }
                            cancel(t) {
                                this._reader?.cancel(t), this._abortController.abort()
                            }
                        }
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.TextLayerRenderTask = void 0, e.renderTextLayer = f, e.updateTextLayer = m;
                        var s = i(1),
                            r = i(6);
                        let a = 1e5,
                            n = 30,
                            o = .8,
                            l = new Map;

                        function h(t, e) {
                            let i;
                            if (e && s.FeatureTest.isOffscreenCanvasSupported) i = new OffscreenCanvas(t, t).getContext("2d", {
                                alpha: !1
                            });
                            else {
                                let e = document.createElement("canvas");
                                e.width = e.height = t, i = e.getContext("2d", {
                                    alpha: !1
                                })
                            }
                            return i
                        }

                        function d(t, e) {
                            let i = l.get(t);
                            if (i) return i;
                            let s = h(n, e);
                            s.font = `${n}px ${t}`;
                            let r = s.measureText(""),
                                a = r.fontBoundingBoxAscent,
                                d = Math.abs(r.fontBoundingBoxDescent);
                            if (a) {
                                let e = a / (a + d);
                                return l.set(t, e), s.canvas.width = s.canvas.height = 0, e
                            }
                            s.strokeStyle = "red", s.clearRect(0, 0, n, n), s.strokeText("g", 0, 0);
                            let c = s.getImageData(0, 0, n, n).data;
                            d = 0;
                            for (let t = c.length - 1 - 3; t >= 0; t -= 4)
                                if (c[t] > 0) {
                                    d = Math.ceil(t / 4 / n);
                                    break
                                } s.clearRect(0, 0, n, n), s.strokeText("A", 0, n), c = s.getImageData(0, 0, n, n).data, a = 0;
                            for (let t = 0, e = c.length; t < e; t += 4)
                                if (c[t] > 0) {
                                    a = n - Math.floor(t / 4 / n);
                                    break
                                } if (s.canvas.width = s.canvas.height = 0, a) {
                                let e = a / (a + d);
                                return l.set(t, e), e
                            }
                            return l.set(t, o), o
                        }

                        function c(t, e, i) {
                            let r, a;
                            let n = document.createElement("span"),
                                o = {
                                    angle: 0,
                                    canvasWidth: 0,
                                    hasText: "" !== e.str,
                                    hasEOL: e.hasEOL,
                                    fontSize: 0
                                };
                            t._textDivs.push(n);
                            let l = s.Util.transform(t._transform, e.transform),
                                h = Math.atan2(l[1], l[0]),
                                c = i[e.fontName];
                            c.vertical && (h += Math.PI / 2);
                            let u = Math.hypot(l[2], l[3]),
                                p = u * d(c.fontFamily, t._isOffscreenCanvasSupported);
                            0 === h ? (r = l[4], a = l[5] - p) : (r = l[4] + p * Math.sin(h), a = l[5] - p * Math.cos(h));
                            let g = "calc(var(--scale-factor)*",
                                f = n.style;
                            t._container === t._rootContainer ? (f.left = `${(100*r/t._pageWidth).toFixed(2)}%`, f.top = `${(100*a/t._pageHeight).toFixed(2)}%`) : (f.left = `${g}${r.toFixed(2)}px)`, f.top = `${g}${a.toFixed(2)}px)`), f.fontSize = `${g}${u.toFixed(2)}px)`, f.fontFamily = c.fontFamily, o.fontSize = u, n.setAttribute("role", "presentation"), n.textContent = e.str, n.dir = e.dir, t._fontInspectorEnabled && (n.dataset.fontName = e.fontName), 0 !== h && (o.angle = 180 / Math.PI * h);
                            let m = !1;
                            if (e.str.length > 1) m = !0;
                            else if (" " !== e.str && e.transform[0] !== e.transform[3]) {
                                let t = Math.abs(e.transform[0]),
                                    i = Math.abs(e.transform[3]);
                                t !== i && Math.max(t, i) / Math.min(t, i) > 1.5 && (m = !0)
                            }
                            m && (o.canvasWidth = c.vertical ? e.height : e.width), t._textDivProperties.set(n, o), t._isReadableStream && t._layoutText(n)
                        }

                        function u(t) {
                            let {
                                div: e,
                                scale: i,
                                properties: s,
                                ctx: r,
                                prevFontSize: a,
                                prevFontFamily: n
                            } = t, {
                                style: o
                            } = e, l = "";
                            if (0 !== s.canvasWidth && s.hasText) {
                                let {
                                    fontFamily: h
                                } = o, {
                                    canvasWidth: d,
                                    fontSize: c
                                } = s;
                                (a !== c || n !== h) && (r.font = `${c*i}px ${h}`, t.prevFontSize = c, t.prevFontFamily = h);
                                let {
                                    width: u
                                } = r.measureText(e.textContent);
                                u > 0 && (l = `scaleX(${d*i/u})`)
                            }
                            0 !== s.angle && (l = `rotate(${s.angle}deg) ${l}`), l.length > 0 && (o.transform = l)
                        }

                        function p(t) {
                            if (t._canceled) return;
                            let e = t._textDivs,
                                i = t._capability;
                            if (e.length > a) {
                                i.resolve();
                                return
                            }
                            if (!t._isReadableStream)
                                for (let i of e) t._layoutText(i);
                            i.resolve()
                        }
                        class g {
                            constructor({
                                textContentSource: t,
                                container: e,
                                viewport: i,
                                textDivs: a,
                                textDivProperties: n,
                                textContentItemsStr: o,
                                isOffscreenCanvasSupported: l
                            }) {
                                this._textContentSource = t, this._isReadableStream = t instanceof ReadableStream, this._container = this._rootContainer = e, this._textDivs = a || [], this._textContentItemsStr = o || [], this._isOffscreenCanvasSupported = l, this._fontInspectorEnabled = !!globalThis.FontInspector?.enabled, this._reader = null, this._textDivProperties = n || new WeakMap, this._canceled = !1, this._capability = new s.PromiseCapability, this._layoutTextParams = {
                                    prevFontSize: null,
                                    prevFontFamily: null,
                                    div: null,
                                    scale: i.scale * (globalThis.devicePixelRatio || 1),
                                    properties: null,
                                    ctx: h(0, l)
                                };
                                let {
                                    pageWidth: d,
                                    pageHeight: c,
                                    pageX: u,
                                    pageY: p
                                } = i.rawDims;
                                this._transform = [1, 0, 0, -1, -u, p + c], this._pageWidth = d, this._pageHeight = c, (0, r.setLayerDimensions)(e, i), this._capability.promise.finally(() => {
                                    this._layoutTextParams = null
                                }).catch(() => {})
                            }
                            get promise() {
                                return this._capability.promise
                            }
                            cancel() {
                                this._canceled = !0, this._reader && (this._reader.cancel(new s.AbortException("TextLayer task cancelled.")).catch(() => {}), this._reader = null), this._capability.reject(new s.AbortException("TextLayer task cancelled."))
                            }
                            _processItems(t, e) {
                                for (let i of t) {
                                    if (void 0 === i.str) {
                                        if ("beginMarkedContentProps" === i.type || "beginMarkedContent" === i.type) {
                                            let t = this._container;
                                            this._container = document.createElement("span"), this._container.classList.add("markedContent"), null !== i.id && this._container.setAttribute("id", `${i.id}`), t.append(this._container)
                                        } else "endMarkedContent" === i.type && (this._container = this._container.parentNode);
                                        continue
                                    }
                                    this._textContentItemsStr.push(i.str), c(this, i, e)
                                }
                            }
                            _layoutText(t) {
                                let e = this._layoutTextParams.properties = this._textDivProperties.get(t);
                                if (this._layoutTextParams.div = t, u(this._layoutTextParams), e.hasText && this._container.append(t), e.hasEOL) {
                                    let t = document.createElement("br");
                                    t.setAttribute("role", "presentation"), this._container.append(t)
                                }
                            }
                            _render() {
                                let t = new s.PromiseCapability,
                                    e = Object.create(null);
                                if (this._isReadableStream) {
                                    let i = () => {
                                        this._reader.read().then(({
                                            value: s,
                                            done: r
                                        }) => {
                                            if (r) {
                                                t.resolve();
                                                return
                                            }
                                            Object.assign(e, s.styles), this._processItems(s.items, e), i()
                                        }, t.reject)
                                    };
                                    this._reader = this._textContentSource.getReader(), i()
                                } else if (this._textContentSource) {
                                    let {
                                        items: e,
                                        styles: i
                                    } = this._textContentSource;
                                    this._processItems(e, i), t.resolve()
                                } else throw Error('No "textContentSource" parameter specified.');
                                t.promise.then(() => {
                                    e = null, p(this)
                                }, this._capability.reject)
                            }
                        }

                        function f(t) {
                            !t.textContentSource && (t.textContent || t.textContentStream) && ((0, r.deprecated)("The TextLayerRender `textContent`/`textContentStream` parameters will be removed in the future, please use `textContentSource` instead."), t.textContentSource = t.textContent || t.textContentStream);
                            let {
                                container: e,
                                viewport: i
                            } = t, s = getComputedStyle(e), a = s.getPropertyValue("visibility"), n = parseFloat(s.getPropertyValue("--scale-factor"));
                            "visible" === a && (!n || Math.abs(n - i.scale) > 1e-5) && console.error("The `--scale-factor` CSS-variable must be set, to the same value as `viewport.scale`, either on the `container`-element itself or higher up in the DOM.");
                            let o = new g(t);
                            return o._render(), o
                        }

                        function m({
                            container: t,
                            viewport: e,
                            textDivs: i,
                            textDivProperties: s,
                            isOffscreenCanvasSupported: a,
                            mustRotate: n = !0,
                            mustRescale: o = !0
                        }) {
                            if (n && (0, r.setLayerDimensions)(t, {
                                    rotation: e.rotation
                                }), o) {
                                let t = h(0, a),
                                    r = {
                                        prevFontSize: null,
                                        prevFontFamily: null,
                                        div: null,
                                        scale: e.scale * (globalThis.devicePixelRatio || 1),
                                        properties: null,
                                        ctx: t
                                    };
                                for (let t of i) r.properties = s.get(t), r.div = t, u(r)
                            }
                        }
                        e.TextLayerRenderTask = g
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.AnnotationEditorLayer = void 0;
                        var s = i(1),
                            r = i(5),
                            a = i(28),
                            n = i(29),
                            o = i(6);
                        class l {
                            #tL;
                            #tN = !1;
                            #tj = this.pointerup.bind(this);
                            #tB = this.pointerdown.bind(this);
                            #tU = new Map;
                            #tG = !1;
                            #tH = !1;
                            #tq;
                            static _initialized = !1;
                            constructor(t) {
                                l._initialized || (l._initialized = !0, a.FreeTextEditor.initialize(t.l10n), n.InkEditor.initialize(t.l10n)), t.uiManager.registerEditorTypes([a.FreeTextEditor, n.InkEditor]), this.#tq = t.uiManager, this.pageIndex = t.pageIndex, this.div = t.div, this.#tL = t.accessibilityManager, this.#tq.addLayer(this)
                            }
                            get isEmpty() {
                                return 0 === this.#tU.size
                            }
                            updateToolbar(t) {
                                this.#tq.updateToolbar(t)
                            }
                            updateMode(t = this.#tq.getMode()) {
                                this.#tW(), t === s.AnnotationEditorType.INK ? (this.addInkEditorIfNeeded(!1), this.disableClick()) : this.enableClick(), this.#tq.unselectAll(), t !== s.AnnotationEditorType.NONE && (this.div.classList.toggle("freeTextEditing", t === s.AnnotationEditorType.FREETEXT), this.div.classList.toggle("inkEditing", t === s.AnnotationEditorType.INK), this.div.hidden = !1)
                            }
                            addInkEditorIfNeeded(t) {
                                if (t || this.#tq.getMode() === s.AnnotationEditorType.INK) {
                                    if (!t) {
                                        for (let t of this.#tU.values())
                                            if (t.isEmpty()) {
                                                t.setInBackground();
                                                return
                                            }
                                    }
                                    this.#tz({
                                        offsetX: 0,
                                        offsetY: 0
                                    }).setInBackground()
                                }
                            }
                            setEditingState(t) {
                                this.#tq.setEditingState(t)
                            }
                            addCommands(t) {
                                this.#tq.addCommands(t)
                            }
                            enable() {
                                for (let t of (this.div.style.pointerEvents = "auto", this.#tU.values())) t.enableEditing()
                            }
                            disable() {
                                for (let t of (this.div.style.pointerEvents = "none", this.#tU.values())) t.disableEditing();
                                this.#tW(), this.isEmpty && (this.div.hidden = !0)
                            }
                            setActiveEditor(t) {
                                this.#tq.getActive() !== t && this.#tq.setActiveEditor(t)
                            }
                            enableClick() {
                                this.div.addEventListener("pointerdown", this.#tB), this.div.addEventListener("pointerup", this.#tj)
                            }
                            disableClick() {
                                this.div.removeEventListener("pointerdown", this.#tB), this.div.removeEventListener("pointerup", this.#tj)
                            }
                            attach(t) {
                                this.#tU.set(t.id, t)
                            }
                            detach(t) {
                                this.#tU.delete(t.id), this.#tL?.removePointerInTextLayer(t.contentDiv)
                            }
                            remove(t) {
                                this.#tq.removeEditor(t), this.detach(t), t.div.style.display = "none", setTimeout(() => {
                                    t.div.style.display = "", t.div.remove(), t.isAttachedToDOM = !1, document.activeElement === document.body && this.#tq.focusMainContainer()
                                }, 0), this.#tH || this.addInkEditorIfNeeded(!1)
                            }
                            #tV(t) {
                                t.parent !== this && (this.attach(t), t.parent?.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)))
                            }
                            add(t) {
                                if (this.#tV(t), this.#tq.addEditor(t), this.attach(t), !t.isAttachedToDOM) {
                                    let e = t.render();
                                    this.div.append(e), t.isAttachedToDOM = !0
                                }
                                this.moveEditorInDOM(t), t.onceAdded(), this.#tq.addToAnnotationStorage(t)
                            }
                            moveEditorInDOM(t) {
                                this.#tL?.moveElementInDOM(this.div, t.div, t.contentDiv, !0)
                            }
                            addOrRebuild(t) {
                                t.needsToBeRebuilt() ? t.rebuild() : this.add(t)
                            }
                            addANewEditor(t) {
                                let e = () => {
                                        this.addOrRebuild(t)
                                    },
                                    i = () => {
                                        t.remove()
                                    };
                                this.addCommands({
                                    cmd: e,
                                    undo: i,
                                    mustExec: !0
                                })
                            }
                            addUndoableEditor(t) {
                                let e = () => {
                                        this.addOrRebuild(t)
                                    },
                                    i = () => {
                                        t.remove()
                                    };
                                this.addCommands({
                                    cmd: e,
                                    undo: i,
                                    mustExec: !1
                                })
                            }
                            getNextId() {
                                return this.#tq.getId()
                            }
                            #t$(t) {
                                switch (this.#tq.getMode()) {
                                    case s.AnnotationEditorType.FREETEXT:
                                        return new a.FreeTextEditor(t);
                                    case s.AnnotationEditorType.INK:
                                        return new n.InkEditor(t)
                                }
                                return null
                            }
                            deserialize(t) {
                                switch (t.annotationType) {
                                    case s.AnnotationEditorType.FREETEXT:
                                        return a.FreeTextEditor.deserialize(t, this, this.#tq);
                                    case s.AnnotationEditorType.INK:
                                        return n.InkEditor.deserialize(t, this, this.#tq)
                                }
                                return null
                            }
                            #tz(t) {
                                let e = this.getNextId(),
                                    i = this.#t$({
                                        parent: this,
                                        id: e,
                                        x: t.offsetX,
                                        y: t.offsetY,
                                        uiManager: this.#tq
                                    });
                                return i && this.add(i), i
                            }
                            setSelected(t) {
                                this.#tq.setSelected(t)
                            }
                            toggleSelected(t) {
                                this.#tq.toggleSelected(t)
                            }
                            isSelected(t) {
                                return this.#tq.isSelected(t)
                            }
                            unselect(t) {
                                this.#tq.unselect(t)
                            }
                            pointerup(t) {
                                let {
                                    isMac: e
                                } = s.FeatureTest.platform;
                                if (0 === t.button && (!t.ctrlKey || !e) && t.target === this.div && this.#tG) {
                                    if (this.#tG = !1, !this.#tN) {
                                        this.#tN = !0;
                                        return
                                    }
                                    this.#tz(t)
                                }
                            }
                            pointerdown(t) {
                                let {
                                    isMac: e
                                } = s.FeatureTest.platform;
                                if (0 !== t.button || t.ctrlKey && e || t.target !== this.div) return;
                                this.#tG = !0;
                                let i = this.#tq.getActive();
                                this.#tN = !i || i.isEmpty()
                            }
                            drop(t) {
                                let e = t.dataTransfer.getData("text/plain"),
                                    i = this.#tq.getEditor(e);
                                if (!i) return;
                                t.preventDefault(), t.dataTransfer.dropEffect = "move", this.#tV(i);
                                let s = this.div.getBoundingClientRect(),
                                    r = t.clientX - s.x,
                                    a = t.clientY - s.y;
                                i.translate(r - i.startX, a - i.startY), this.moveEditorInDOM(i), i.div.focus()
                            }
                            dragover(t) {
                                t.preventDefault()
                            }
                            destroy() {
                                for (let t of (this.#tq.getActive()?.parent === this && this.#tq.setActiveEditor(null), this.#tU.values())) this.#tL?.removePointerInTextLayer(t.contentDiv), t.setParent(null), t.isAttachedToDOM = !1, t.div.remove();
                                this.div = null, this.#tU.clear(), this.#tq.removeLayer(this)
                            }
                            #tW() {
                                for (let t of (this.#tH = !0, this.#tU.values())) t.isEmpty() && t.remove();
                                this.#tH = !1
                            }
                            render({
                                viewport: t
                            }) {
                                for (let e of (this.viewport = t, (0, o.setLayerDimensions)(this.div, t), (0, r.bindEvents)(this, this.div, ["dragover", "drop"]), this.#tq.getEditors(this.pageIndex))) this.add(e);
                                this.updateMode()
                            }
                            update({
                                viewport: t
                            }) {
                                this.#tq.commitOrRemove(), this.viewport = t, (0, o.setLayerDimensions)(this.div, {
                                    rotation: t.rotation
                                }), this.updateMode()
                            }
                            get pageDimensions() {
                                let {
                                    pageWidth: t,
                                    pageHeight: e
                                } = this.viewport.rawDims;
                                return [t, e]
                            }
                        }
                        e.AnnotationEditorLayer = l
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.FreeTextEditor = void 0;
                        var s = i(1),
                            r = i(5),
                            a = i(4);
                        class n extends a.AnnotationEditor {
                            #tX = this.editorDivBlur.bind(this);
                            #tK = this.editorDivFocus.bind(this);
                            #tY = this.editorDivInput.bind(this);
                            #tJ = this.editorDivKeydown.bind(this);
                            #tQ;
                            #tZ = "";
                            #t0 = `${this.id}-editor`;
                            #t1 = !1;
                            #t2;
                            static _freeTextDefaultContent = "";
                            static _l10nPromise;
                            static _internalPadding = 0;
                            static _defaultColor = null;
                            static _defaultFontSize = 10;
                            static _keyboardManager = new r.KeyboardManager([
                                [
                                    ["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], n.prototype.commitOrRemove
                                ]
                            ]);
                            static _type = "freetext";
                            constructor(t) {
                                super({
                                    ...t,
                                    name: "freeTextEditor"
                                }), this.#tQ = t.color || n._defaultColor || a.AnnotationEditor._defaultLineColor, this.#t2 = t.fontSize || n._defaultFontSize
                            }
                            static initialize(t) {
                                this._l10nPromise = new Map(["free_text2_default_content", "editor_free_text2_aria_label"].map(e => [e, t.get(e)]));
                                let e = getComputedStyle(document.documentElement);
                                this._internalPadding = parseFloat(e.getPropertyValue("--freetext-padding"))
                            }
                            static updateDefaultParams(t, e) {
                                switch (t) {
                                    case s.AnnotationEditorParamsType.FREETEXT_SIZE:
                                        n._defaultFontSize = e;
                                        break;
                                    case s.AnnotationEditorParamsType.FREETEXT_COLOR:
                                        n._defaultColor = e
                                }
                            }
                            updateParams(t, e) {
                                switch (t) {
                                    case s.AnnotationEditorParamsType.FREETEXT_SIZE:
                                        this.#t3(e);
                                        break;
                                    case s.AnnotationEditorParamsType.FREETEXT_COLOR:
                                        this.#t5(e)
                                }
                            }
                            static get defaultPropertiesToUpdate() {
                                return [
                                    [s.AnnotationEditorParamsType.FREETEXT_SIZE, n._defaultFontSize],
                                    [s.AnnotationEditorParamsType.FREETEXT_COLOR, n._defaultColor || a.AnnotationEditor._defaultLineColor]
                                ]
                            }
                            get propertiesToUpdate() {
                                return [
                                    [s.AnnotationEditorParamsType.FREETEXT_SIZE, this.#t2],
                                    [s.AnnotationEditorParamsType.FREETEXT_COLOR, this.#tQ]
                                ]
                            }
                            #t3(t) {
                                let e = t => {
                                        this.editorDiv.style.fontSize = `calc(${t}px * var(--scale-factor))`, this.translate(0, -(t - this.#t2) * this.parentScale), this.#t2 = t, this.#t4()
                                    },
                                    i = this.#t2;
                                this.addCommands({
                                    cmd: () => {
                                        e(t)
                                    },
                                    undo: () => {
                                        e(i)
                                    },
                                    mustExec: !0,
                                    type: s.AnnotationEditorParamsType.FREETEXT_SIZE,
                                    overwriteIfSameType: !0,
                                    keepUndo: !0
                                })
                            }
                            #t5(t) {
                                let e = this.#tQ;
                                this.addCommands({
                                    cmd: () => {
                                        this.#tQ = this.editorDiv.style.color = t
                                    },
                                    undo: () => {
                                        this.#tQ = this.editorDiv.style.color = e
                                    },
                                    mustExec: !0,
                                    type: s.AnnotationEditorParamsType.FREETEXT_COLOR,
                                    overwriteIfSameType: !0,
                                    keepUndo: !0
                                })
                            }
                            getInitialTranslation() {
                                let t = this.parentScale;
                                return [-n._internalPadding * t, -(n._internalPadding + this.#t2) * t]
                            }
                            rebuild() {
                                super.rebuild(), null !== this.div && (this.isAttachedToDOM || this.parent.add(this))
                            }
                            enableEditMode() {
                                this.isInEditMode() || (this.parent.setEditingState(!1), this.parent.updateToolbar(s.AnnotationEditorType.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this.div.draggable = !1, this.div.removeAttribute("aria-activedescendant"), this.editorDiv.addEventListener("keydown", this.#tJ), this.editorDiv.addEventListener("focus", this.#tK), this.editorDiv.addEventListener("blur", this.#tX), this.editorDiv.addEventListener("input", this.#tY))
                            }
                            disableEditMode() {
                                this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", this.#t0), this.div.draggable = !0, this.editorDiv.removeEventListener("keydown", this.#tJ), this.editorDiv.removeEventListener("focus", this.#tK), this.editorDiv.removeEventListener("blur", this.#tX), this.editorDiv.removeEventListener("input", this.#tY), this.div.focus({
                                    preventScroll: !0
                                }), this.isEditing = !1, this.parent.div.classList.add("freeTextEditing"))
                            }
                            focusin(t) {
                                super.focusin(t), t.target !== this.editorDiv && this.editorDiv.focus()
                            }
                            onceAdded() {
                                this.width || (this.enableEditMode(), this.editorDiv.focus())
                            }
                            isEmpty() {
                                return !this.editorDiv || "" === this.editorDiv.innerText.trim()
                            }
                            remove() {
                                this.isEditing = !1, this.parent.setEditingState(!0), this.parent.div.classList.add("freeTextEditing"), super.remove()
                            }
                            #t8() {
                                let t = this.editorDiv.getElementsByTagName("div");
                                if (0 === t.length) return this.editorDiv.innerText;
                                let e = [];
                                for (let i of t) e.push(i.innerText.replace(/\r\n?|\n/, ""));
                                return e.join("\n")
                            }
                            #t4() {
                                let t;
                                let [e, i] = this.parentDimensions;
                                if (this.isAttachedToDOM) t = this.div.getBoundingClientRect();
                                else {
                                    let {
                                        currentLayer: e,
                                        div: i
                                    } = this, s = i.style.display;
                                    i.style.display = "hidden", e.div.append(this.div), t = i.getBoundingClientRect(), i.remove(), i.style.display = s
                                }
                                this.width = t.width / e, this.height = t.height / i
                            }
                            commit() {
                                this.isInEditMode() && (super.commit(), this.#t1 || (this.#t1 = !0, this.parent.addUndoableEditor(this)), this.disableEditMode(), this.#tZ = this.#t8().trimEnd(), this.#t4())
                            }
                            shouldGetKeyboardEvents() {
                                return this.isInEditMode()
                            }
                            dblclick(t) {
                                this.enableEditMode(), this.editorDiv.focus()
                            }
                            keydown(t) {
                                t.target === this.div && "Enter" === t.key && (this.enableEditMode(), this.editorDiv.focus())
                            }
                            editorDivKeydown(t) {
                                n._keyboardManager.exec(this, t)
                            }
                            editorDivFocus(t) {
                                this.isEditing = !0
                            }
                            editorDivBlur(t) {
                                this.isEditing = !1
                            }
                            editorDivInput(t) {
                                this.parent.div.classList.toggle("freeTextEditing", this.isEmpty())
                            }
                            disableEditing() {
                                this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline")
                            }
                            enableEditing() {
                                this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0)
                            }
                            render() {
                                let t, e;
                                if (this.div) return this.div;
                                this.width && (t = this.x, e = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", this.#t0), this.enableEditing(), n._l10nPromise.get("editor_free_text2_aria_label").then(t => this.editorDiv?.setAttribute("aria-label", t)), n._l10nPromise.get("free_text2_default_content").then(t => this.editorDiv?.setAttribute("default-content", t)), this.editorDiv.contentEditable = !0;
                                let {
                                    style: i
                                } = this.editorDiv;
                                if (i.fontSize = `calc(${this.#t2}px * var(--scale-factor))`, i.color = this.#tQ, this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), (0, r.bindEvents)(this, this.div, ["dblclick", "keydown"]), this.width) {
                                    let [i, s] = this.parentDimensions;
                                    for (let r of (this.setAt(t * i, e * s, this.width * i, this.height * s), this.#tZ.split("\n"))) {
                                        let t = document.createElement("div");
                                        t.append(r ? document.createTextNode(r) : document.createElement("br")), this.editorDiv.append(t)
                                    }
                                    this.div.draggable = !0, this.editorDiv.contentEditable = !1
                                } else this.div.draggable = !1, this.editorDiv.contentEditable = !0;
                                return this.div
                            }
                            get contentDiv() {
                                return this.editorDiv
                            }
                            static deserialize(t, e, i) {
                                let r = super.deserialize(t, e, i);
                                return r.#t2 = t.fontSize, r.#tQ = s.Util.makeHexColor(...t.color), r.#tZ = t.value, r
                            }
                            serialize() {
                                if (this.isEmpty()) return null;
                                let t = n._internalPadding * this.parentScale,
                                    e = this.getRect(t, t),
                                    i = a.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.#tQ);
                                return {
                                    annotationType: s.AnnotationEditorType.FREETEXT,
                                    color: i,
                                    fontSize: this.#t2,
                                    value: this.#tZ,
                                    pageIndex: this.pageIndex,
                                    rect: e,
                                    rotation: this.rotation
                                }
                            }
                        }
                        e.FreeTextEditor = n
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.InkEditor = void 0;
                        var s = i(1),
                            r = i(4),
                            a = i(5);
                        let n = 16;
                        class o extends r.AnnotationEditor {
                            #t6 = 0;
                            #t7 = 0;
                            #t9 = 0;
                            #et = this.canvasContextMenu.bind(this);
                            #ee = this.canvasPointermove.bind(this);
                            #ei = this.canvasPointerleave.bind(this);
                            #es = this.canvasPointerup.bind(this);
                            #er = this.canvasPointerdown.bind(this);
                            #ea = new Path2D;
                            #en = !1;
                            #eo = !1;
                            #el = !1;
                            #eh = null;
                            #ed = 0;
                            #ec = 0;
                            #eu = null;
                            static _defaultColor = null;
                            static _defaultOpacity = 1;
                            static _defaultThickness = 1;
                            static _l10nPromise;
                            static _type = "ink";
                            constructor(t) {
                                super({
                                    ...t,
                                    name: "inkEditor"
                                }), this.color = t.color || null, this.thickness = t.thickness || null, this.opacity = t.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0
                            }
                            static initialize(t) {
                                this._l10nPromise = new Map(["editor_ink_canvas_aria_label", "editor_ink2_aria_label"].map(e => [e, t.get(e)]))
                            }
                            static updateDefaultParams(t, e) {
                                switch (t) {
                                    case s.AnnotationEditorParamsType.INK_THICKNESS:
                                        o._defaultThickness = e;
                                        break;
                                    case s.AnnotationEditorParamsType.INK_COLOR:
                                        o._defaultColor = e;
                                        break;
                                    case s.AnnotationEditorParamsType.INK_OPACITY:
                                        o._defaultOpacity = e / 100
                                }
                            }
                            updateParams(t, e) {
                                switch (t) {
                                    case s.AnnotationEditorParamsType.INK_THICKNESS:
                                        this.#ep(e);
                                        break;
                                    case s.AnnotationEditorParamsType.INK_COLOR:
                                        this.#t5(e);
                                        break;
                                    case s.AnnotationEditorParamsType.INK_OPACITY:
                                        this.#eg(e)
                                }
                            }
                            static get defaultPropertiesToUpdate() {
                                return [
                                    [s.AnnotationEditorParamsType.INK_THICKNESS, o._defaultThickness],
                                    [s.AnnotationEditorParamsType.INK_COLOR, o._defaultColor || r.AnnotationEditor._defaultLineColor],
                                    [s.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * o._defaultOpacity)]
                                ]
                            }
                            get propertiesToUpdate() {
                                return [
                                    [s.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || o._defaultThickness],
                                    [s.AnnotationEditorParamsType.INK_COLOR, this.color || o._defaultColor || r.AnnotationEditor._defaultLineColor],
                                    [s.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * (this.opacity ?? o._defaultOpacity))]
                                ]
                            }
                            #ep(t) {
                                let e = this.thickness;
                                this.addCommands({
                                    cmd: () => {
                                        this.thickness = t, this.#ef()
                                    },
                                    undo: () => {
                                        this.thickness = e, this.#ef()
                                    },
                                    mustExec: !0,
                                    type: s.AnnotationEditorParamsType.INK_THICKNESS,
                                    overwriteIfSameType: !0,
                                    keepUndo: !0
                                })
                            }
                            #t5(t) {
                                let e = this.color;
                                this.addCommands({
                                    cmd: () => {
                                        this.color = t, this.#em()
                                    },
                                    undo: () => {
                                        this.color = e, this.#em()
                                    },
                                    mustExec: !0,
                                    type: s.AnnotationEditorParamsType.INK_COLOR,
                                    overwriteIfSameType: !0,
                                    keepUndo: !0
                                })
                            }
                            #eg(t) {
                                t /= 100;
                                let e = this.opacity;
                                this.addCommands({
                                    cmd: () => {
                                        this.opacity = t, this.#em()
                                    },
                                    undo: () => {
                                        this.opacity = e, this.#em()
                                    },
                                    mustExec: !0,
                                    type: s.AnnotationEditorParamsType.INK_OPACITY,
                                    overwriteIfSameType: !0,
                                    keepUndo: !0
                                })
                            }
                            rebuild() {
                                super.rebuild(), null !== this.div && (this.canvas || (this.#eb(), this.#eA()), this.isAttachedToDOM || (this.parent.add(this), this.#ev()), this.#ef())
                            }
                            remove() {
                                null !== this.canvas && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, this.#eh.disconnect(), this.#eh = null, super.remove())
                            }
                            setParent(t) {
                                !this.parent && t ? this._uiManager.removeShouldRescale(this) : this.parent && null === t && this._uiManager.addShouldRescale(this), super.setParent(t)
                            }
                            onScaleChanging() {
                                let [t, e] = this.parentDimensions, i = this.width * t, s = this.height * e;
                                this.setDimensions(i, s)
                            }
                            enableEditMode() {
                                this.#en || null === this.canvas || (super.enableEditMode(), this.div.draggable = !1, this.canvas.addEventListener("pointerdown", this.#er))
                            }
                            disableEditMode() {
                                this.isInEditMode() && null !== this.canvas && (super.disableEditMode(), this.div.draggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", this.#er))
                            }
                            onceAdded() {
                                this.div.draggable = !this.isEmpty()
                            }
                            isEmpty() {
                                return 0 === this.paths.length || 1 === this.paths.length && 0 === this.paths[0].length
                            }
                            #ey() {
                                let {
                                    parentRotation: t,
                                    parentDimensions: [e, i]
                                } = this;
                                switch (t) {
                                    case 90:
                                        return [0, i, i, e];
                                    case 180:
                                        return [e, i, e, i];
                                    case 270:
                                        return [e, 0, i, e];
                                    default:
                                        return [0, 0, e, i]
                                }
                            }
                            #e_() {
                                let {
                                    ctx: t,
                                    color: e,
                                    opacity: i,
                                    thickness: s,
                                    parentScale: r,
                                    scaleFactor: n
                                } = this;
                                t.lineWidth = s * r / n, t.lineCap = "round", t.lineJoin = "round", t.miterLimit = 10, t.strokeStyle = `${e}${(0,a.opacityToHex)(i)}`
                            }
                            #eS(t, e) {
                                this.canvas.addEventListener("contextmenu", this.#et), this.canvas.addEventListener("pointerleave", this.#ei), this.canvas.addEventListener("pointermove", this.#ee), this.canvas.addEventListener("pointerup", this.#es), this.canvas.removeEventListener("pointerdown", this.#er), this.isEditing = !0, this.#el || (this.#el = !0, this.#ev(), this.thickness ||= o._defaultThickness, this.color ||= o._defaultColor || r.AnnotationEditor._defaultLineColor, this.opacity ??= o._defaultOpacity), this.currentPath.push([t, e]), this.#eo = !1, this.#e_(), this.#eu = () => {
                                    this.#eC(), this.#eu && window.requestAnimationFrame(this.#eu)
                                }, window.requestAnimationFrame(this.#eu)
                            }
                            #ex(t, e) {
                                let [i, s] = this.currentPath.at(-1);
                                if (this.currentPath.length > 1 && t === i && e === s) return;
                                let r = this.currentPath,
                                    a = this.#ea;
                                if (r.push([t, e]), this.#eo = !0, r.length <= 2) {
                                    a.moveTo(...r[0]), a.lineTo(t, e);
                                    return
                                }
                                3 === r.length && (this.#ea = a = new Path2D, a.moveTo(...r[0])), this.#eE(a, ...r.at(-3), ...r.at(-2), t, e)
                            }
                            #eT() {
                                if (0 === this.currentPath.length) return;
                                let t = this.currentPath.at(-1);
                                this.#ea.lineTo(...t)
                            }
                            #eP(t, e) {
                                let i;
                                if (this.#eu = null, t = Math.min(Math.max(t, 0), this.canvas.width), e = Math.min(Math.max(e, 0), this.canvas.height), this.#ex(t, e), this.#eT(), 1 !== this.currentPath.length) i = this.#eM();
                                else {
                                    let s = [t, e];
                                    i = [
                                        [s, s.slice(), s.slice(), s]
                                    ]
                                }
                                let s = this.#ea,
                                    r = this.currentPath;
                                this.currentPath = [], this.#ea = new Path2D;
                                let a = () => {
                                        this.allRawPaths.push(r), this.paths.push(i), this.bezierPath2D.push(s), this.rebuild()
                                    },
                                    n = () => {
                                        this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), 0 === this.paths.length ? this.remove() : (this.canvas || (this.#eb(), this.#eA()), this.#ef())
                                    };
                                this.addCommands({
                                    cmd: a,
                                    undo: n,
                                    mustExec: !0
                                })
                            }
                            #eC() {
                                if (!this.#eo) return;
                                this.#eo = !1, this.thickness, this.parentScale;
                                let t = this.currentPath.slice(-3),
                                    {
                                        ctx: e
                                    } = (t.map(t => t[0]), t.map(t => t[1]), this);
                                for (let t of (e.save(), e.clearRect(0, 0, this.canvas.width, this.canvas.height), this.bezierPath2D)) e.stroke(t);
                                e.stroke(this.#ea), e.restore()
                            }
                            #eE(t, e, i, s, r, a, n) {
                                let o = (e + s) / 2,
                                    l = (i + r) / 2,
                                    h = (s + a) / 2,
                                    d = (r + n) / 2;
                                t.bezierCurveTo(o + 2 * (s - o) / 3, l + 2 * (r - l) / 3, h + 2 * (s - h) / 3, d + 2 * (r - d) / 3, h, d)
                            }
                            #eM() {
                                let t;
                                let e = this.currentPath;
                                if (e.length <= 2) return [
                                    [e[0], e[0], e.at(-1), e.at(-1)]
                                ];
                                let i = [],
                                    [s, r] = e[0];
                                for (t = 1; t < e.length - 2; t++) {
                                    let [a, n] = e[t], [o, l] = e[t + 1], h = (a + o) / 2, d = (n + l) / 2, c = [s + 2 * (a - s) / 3, r + 2 * (n - r) / 3], u = [h + 2 * (a - h) / 3, d + 2 * (n - d) / 3];
                                    i.push([
                                        [s, r], c, u, [h, d]
                                    ]), [s, r] = [h, d]
                                }
                                let [a, n] = e[t], [o, l] = e[t + 1], h = [s + 2 * (a - s) / 3, r + 2 * (n - r) / 3], d = [o + 2 * (a - o) / 3, l + 2 * (n - l) / 3];
                                return i.push([
                                    [s, r], h, d, [o, l]
                                ]), i
                            }
                            #em() {
                                if (this.isEmpty()) {
                                    this.#ew();
                                    return
                                }
                                this.#e_();
                                let {
                                    canvas: t,
                                    ctx: e
                                } = this;
                                for (let i of (e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, t.width, t.height), this.#ew(), this.bezierPath2D)) e.stroke(i)
                            }
                            commit() {
                                this.#en || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), this.#en = !0, this.div.classList.add("disabled"), this.#ef(!0), this.parent.addInkEditorIfNeeded(!0), this.parent.moveEditorInDOM(this), this.div.focus({
                                    preventScroll: !0
                                }))
                            }
                            focusin(t) {
                                super.focusin(t), this.enableEditMode()
                            }
                            canvasPointerdown(t) {
                                0 === t.button && this.isInEditMode() && !this.#en && (this.setInForeground(), t.preventDefault(), "mouse" !== t.type && this.div.focus(), this.#eS(t.offsetX, t.offsetY))
                            }
                            canvasContextMenu(t) {
                                t.preventDefault()
                            }
                            canvasPointermove(t) {
                                t.preventDefault(), this.#ex(t.offsetX, t.offsetY)
                            }
                            canvasPointerup(t) {
                                t.preventDefault(), this.#ek(t)
                            }
                            canvasPointerleave(t) {
                                this.#ek(t)
                            }
                            #ek(t) {
                                this.canvas.removeEventListener("pointerleave", this.#ei), this.canvas.removeEventListener("pointermove", this.#ee), this.canvas.removeEventListener("pointerup", this.#es), this.canvas.addEventListener("pointerdown", this.#er), setTimeout(() => {
                                    this.canvas.removeEventListener("contextmenu", this.#et)
                                }, 10), this.#eP(t.offsetX, t.offsetY), this.addToAnnotationStorage(), this.setInBackground()
                            }
                            #eb() {
                                this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", o._l10nPromise.get("editor_ink_canvas_aria_label").then(t => this.canvas?.setAttribute("aria-label", t)), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d")
                            }
                            #eA() {
                                this.#eh = new ResizeObserver(t => {
                                    let e = t[0].contentRect;
                                    e.width && e.height && this.setDimensions(e.width, e.height)
                                }), this.#eh.observe(this.div)
                            }
                            render() {
                                let t, e;
                                if (this.div) return this.div;
                                this.width && (t = this.x, e = this.y), super.render(), o._l10nPromise.get("editor_ink2_aria_label").then(t => this.div?.setAttribute("aria-label", t));
                                let [i, s, r, a] = this.#ey();
                                if (this.setAt(i, s, 0, 0), this.setDims(r, a), this.#eb(), this.width) {
                                    let [i, s] = this.parentDimensions;
                                    this.setAt(t * i, e * s, this.width * i, this.height * s), this.#el = !0, this.#ev(), this.setDims(this.width * i, this.height * s), this.#em(), this.#eR(), this.div.classList.add("disabled")
                                } else this.div.classList.add("editing"), this.enableEditMode();
                                return this.#eA(), this.div
                            }
                            #ev() {
                                if (!this.#el) return;
                                let [t, e] = this.parentDimensions;
                                this.canvas.width = Math.ceil(this.width * t), this.canvas.height = Math.ceil(this.height * e), this.#ew()
                            }
                            setDimensions(t, e) {
                                let i = Math.round(t),
                                    s = Math.round(e);
                                if (this.#ed === i && this.#ec === s) return;
                                this.#ed = i, this.#ec = s, this.canvas.style.visibility = "hidden", this.#t6 && Math.abs(this.#t6 - t / e) > .01 && (e = Math.ceil(t / this.#t6), this.setDims(t, e));
                                let [r, a] = this.parentDimensions;
                                this.width = t / r, this.height = e / a, this.#en && this.#eF(t, e), this.#ev(), this.#em(), this.canvas.style.visibility = "visible", this.fixDims()
                            }
                            #eF(t, e) {
                                let i = this.#eO(),
                                    s = (t - i) / this.#t9,
                                    r = (e - i) / this.#t7;
                                this.scaleFactor = Math.min(s, r)
                            }
                            #ew() {
                                let t = this.#eO() / 2;
                                this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + t, this.translationY * this.scaleFactor + t)
                            }
                            static #eI(t) {
                                let e = new Path2D;
                                for (let i = 0, s = t.length; i < s; i++) {
                                    let [s, r, a, n] = t[i];
                                    0 === i && e.moveTo(...s), e.bezierCurveTo(r[0], r[1], a[0], a[1], n[0], n[1])
                                }
                                return e
                            }
                            #eD(t, e, i, s) {
                                let r, a;
                                let n = 4,
                                    o = [],
                                    l = this.thickness / 2;
                                for (let h of this.paths) {
                                    r = [], a = [];
                                    for (let o = 0, d = h.length; o < d; o++) {
                                        let [d, c, u, p] = h[o], g = t * (d[0] + e) + l, f = s - t * (d[1] + i) - l, m = t * (c[0] + e) + l, b = s - t * (c[1] + i) - l, A = t * (u[0] + e) + l, v = s - t * (u[1] + i) - l, y = t * (p[0] + e) + l, _ = s - t * (p[1] + i) - l;
                                        0 === o && (r.push(g, f), a.push(g, f)), r.push(m, b, A, v, y, _), this.#eL(g, f, m, b, A, v, y, _, n, a)
                                    }
                                    o.push({
                                        bezier: r,
                                        points: a
                                    })
                                }
                                return o
                            }
                            #eL(t, e, i, s, r, a, n, o, l, h) {
                                if (this.#eN(t, e, i, s, r, a, n, o)) {
                                    h.push(n, o);
                                    return
                                }
                                for (let d = 1; d < l - 1; d++) {
                                    let c = d / l,
                                        u = 1 - c,
                                        p = c * t + u * i,
                                        g = c * e + u * s,
                                        f = c * i + u * r,
                                        m = c * s + u * a,
                                        b = c * r + u * n,
                                        A = c * a + u * o;
                                    p = c * p + u * f, g = c * g + u * m, f = c * f + u * b, m = c * m + u * A, p = c * p + u * f, g = c * g + u * m, h.push(p, g)
                                }
                                h.push(n, o)
                            }
                            #eN(t, e, i, s, r, a, n, o) {
                                return Math.max((3 * i - 2 * t - n) ** 2, (3 * r - t - 2 * n) ** 2) + Math.max((3 * s - 2 * e - o) ** 2, (3 * a - e - 2 * o) ** 2) <= 10
                            }
                            #ej() {
                                let t = 1 / 0,
                                    e = -1 / 0,
                                    i = 1 / 0,
                                    r = -1 / 0;
                                for (let a of this.paths)
                                    for (let [n, o, l, h] of a) {
                                        let a = s.Util.bezierBoundingBox(...n, ...o, ...l, ...h);
                                        t = Math.min(t, a[0]), i = Math.min(i, a[1]), e = Math.max(e, a[2]), r = Math.max(r, a[3])
                                    }
                                return [t, i, e, r]
                            }
                            #eO() {
                                return this.#en ? Math.ceil(this.thickness * this.parentScale) : 0
                            }
                            #ef(t = !1) {
                                if (this.isEmpty()) return;
                                if (!this.#en) {
                                    this.#em();
                                    return
                                }
                                let e = this.#ej(),
                                    i = this.#eO();
                                this.#t9 = Math.max(n, e[2] - e[0]), this.#t7 = Math.max(n, e[3] - e[1]);
                                let s = Math.ceil(i + this.#t9 * this.scaleFactor),
                                    r = Math.ceil(i + this.#t7 * this.scaleFactor),
                                    [a, o] = this.parentDimensions;
                                this.width = s / a, this.height = r / o, this.#t6 = s / r, this.#eR();
                                let l = this.translationX,
                                    h = this.translationY;
                                this.translationX = -e[0], this.translationY = -e[1], this.#ev(), this.#em(), this.#ed = s, this.#ec = r, this.setDims(s, r);
                                let d = t ? i / this.scaleFactor / 2 : 0;
                                this.translate(l - this.translationX - d, h - this.translationY - d)
                            }
                            #eR() {
                                let {
                                    style: t
                                } = this.div;
                                this.#t6 >= 1 ? (t.minHeight = `${n}px`, t.minWidth = `${Math.round(this.#t6*n)}px`) : (t.minWidth = `${n}px`, t.minHeight = `${Math.round(n/this.#t6)}px`)
                            }
                            static deserialize(t, e, i) {
                                let r = super.deserialize(t, e, i);
                                r.thickness = t.thickness, r.color = s.Util.makeHexColor(...t.color), r.opacity = t.opacity;
                                let [a, o] = r.pageDimensions, l = r.width * a, h = r.height * o, d = r.parentScale, c = t.thickness / 2;
                                for (let {
                                        bezier: e
                                    }
                                    of(r.#t6 = l / h, r.#en = !0, r.#ed = Math.round(l), r.#ec = Math.round(h), t.paths)) {
                                    let t = [];
                                    r.paths.push(t);
                                    let i = d * (e[0] - c),
                                        s = d * (h - e[1] - c);
                                    for (let r = 2, a = e.length; r < a; r += 6) {
                                        let a = d * (e[r] - c),
                                            n = d * (h - e[r + 1] - c),
                                            o = d * (e[r + 2] - c),
                                            l = d * (h - e[r + 3] - c),
                                            u = d * (e[r + 4] - c),
                                            p = d * (h - e[r + 5] - c);
                                        t.push([
                                            [i, s],
                                            [a, n],
                                            [o, l],
                                            [u, p]
                                        ]), i = u, s = p
                                    }
                                    let a = this.#eI(t);
                                    r.bezierPath2D.push(a)
                                }
                                let u = r.#ej();
                                return r.#t9 = Math.max(n, u[2] - u[0]), r.#t7 = Math.max(n, u[3] - u[1]), r.#eF(l, h), r
                            }
                            serialize() {
                                if (this.isEmpty()) return null;
                                let t = this.getRect(0, 0),
                                    e = this.rotation % 180 == 0 ? t[3] - t[1] : t[2] - t[0],
                                    i = r.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
                                return {
                                    annotationType: s.AnnotationEditorType.INK,
                                    color: i,
                                    thickness: this.thickness,
                                    opacity: this.opacity,
                                    paths: this.#eD(this.scaleFactor / this.parentScale, this.translationX, this.translationY, e),
                                    pageIndex: this.pageIndex,
                                    rect: t,
                                    rotation: this.rotation
                                }
                            }
                        }
                        e.InkEditor = o
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.AnnotationLayer = void 0;
                        var s = i(1),
                            r = i(6),
                            a = i(3),
                            n = i(31),
                            o = i(32);
                        let l = 1e3,
                            h = 9,
                            d = new WeakSet;

                        function c(t) {
                            return {
                                width: t[2] - t[0],
                                height: t[3] - t[1]
                            }
                        }
                        class u {
                            static create(t) {
                                switch (t.data.annotationType) {
                                    case s.AnnotationType.LINK:
                                        return new g(t);
                                    case s.AnnotationType.TEXT:
                                        return new f(t);
                                    case s.AnnotationType.WIDGET:
                                        switch (t.data.fieldType) {
                                            case "Tx":
                                                return new b(t);
                                            case "Btn":
                                                if (t.data.radioButton) return new v(t);
                                                if (t.data.checkBox) return new A(t);
                                                return new y(t);
                                            case "Ch":
                                                return new _(t)
                                        }
                                        return new m(t);
                                    case s.AnnotationType.POPUP:
                                        return new S(t);
                                    case s.AnnotationType.FREETEXT:
                                        return new x(t);
                                    case s.AnnotationType.LINE:
                                        return new E(t);
                                    case s.AnnotationType.SQUARE:
                                        return new T(t);
                                    case s.AnnotationType.CIRCLE:
                                        return new P(t);
                                    case s.AnnotationType.POLYLINE:
                                        return new M(t);
                                    case s.AnnotationType.CARET:
                                        return new k(t);
                                    case s.AnnotationType.INK:
                                        return new R(t);
                                    case s.AnnotationType.POLYGON:
                                        return new w(t);
                                    case s.AnnotationType.HIGHLIGHT:
                                        return new F(t);
                                    case s.AnnotationType.UNDERLINE:
                                        return new O(t);
                                    case s.AnnotationType.SQUIGGLY:
                                        return new I(t);
                                    case s.AnnotationType.STRIKEOUT:
                                        return new D(t);
                                    case s.AnnotationType.STAMP:
                                        return new L(t);
                                    case s.AnnotationType.FILEATTACHMENT:
                                        return new N(t);
                                    default:
                                        return new p(t)
                                }
                            }
                        }
                        class p {
                            constructor(t, {
                                isRenderable: e = !1,
                                ignoreBorder: i = !1,
                                createQuadrilaterals: s = !1
                            } = {}) {
                                this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.page = t.page, this.viewport = t.viewport, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, e && (this.container = this._createContainer(i)), s && (this.quadrilaterals = this._createQuadrilaterals(i))
                            }
                            _createContainer(t = !1) {
                                let {
                                    data: e,
                                    page: i,
                                    viewport: r
                                } = this, a = document.createElement("section");
                                a.setAttribute("data-annotation-id", e.id), e.noRotate && a.classList.add("norotate");
                                let {
                                    pageWidth: n,
                                    pageHeight: o,
                                    pageX: l,
                                    pageY: h
                                } = r.rawDims, {
                                    width: d,
                                    height: u
                                } = c(e.rect), p = s.Util.normalizeRect([e.rect[0], i.view[3] - e.rect[1] + i.view[1], e.rect[2], i.view[3] - e.rect[3] + i.view[1]]);
                                if (!t && e.borderStyle.width > 0) {
                                    a.style.borderWidth = `${e.borderStyle.width}px`;
                                    let t = e.borderStyle.horizontalCornerRadius,
                                        i = e.borderStyle.verticalCornerRadius;
                                    if (t > 0 || i > 0) {
                                        let e = `calc(${t}px * var(--scale-factor)) / calc(${i}px * var(--scale-factor))`;
                                        a.style.borderRadius = e
                                    } else if (this instanceof v) {
                                        let t = `calc(${d}px * var(--scale-factor)) / calc(${u}px * var(--scale-factor))`;
                                        a.style.borderRadius = t
                                    }
                                    switch (e.borderStyle.style) {
                                        case s.AnnotationBorderStyleType.SOLID:
                                            a.style.borderStyle = "solid";
                                            break;
                                        case s.AnnotationBorderStyleType.DASHED:
                                            a.style.borderStyle = "dashed";
                                            break;
                                        case s.AnnotationBorderStyleType.BEVELED:
                                            (0, s.warn)("Unimplemented border style: beveled");
                                            break;
                                        case s.AnnotationBorderStyleType.INSET:
                                            (0, s.warn)("Unimplemented border style: inset");
                                            break;
                                        case s.AnnotationBorderStyleType.UNDERLINE:
                                            a.style.borderBottomStyle = "solid"
                                    }
                                    let r = e.borderColor || null;
                                    r ? a.style.borderColor = s.Util.makeHexColor(0 | r[0], 0 | r[1], 0 | r[2]) : a.style.borderWidth = 0
                                }
                                a.style.left = `${100*(p[0]-l)/n}%`, a.style.top = `${100*(p[1]-h)/o}%`;
                                let {
                                    rotation: g
                                } = e;
                                return e.hasOwnCanvas || 0 === g ? (a.style.width = `${100*d/n}%`, a.style.height = `${100*u/o}%`) : this.setRotation(g, a), a
                            }
                            setRotation(t, e = this.container) {
                                let i, s;
                                let {
                                    pageWidth: r,
                                    pageHeight: a
                                } = this.viewport.rawDims, {
                                    width: n,
                                    height: o
                                } = c(this.data.rect);
                                t % 180 == 0 ? (i = 100 * n / r, s = 100 * o / a) : (i = 100 * o / r, s = 100 * n / a), e.style.width = `${i}%`, e.style.height = `${s}%`, e.setAttribute("data-main-rotation", (360 - t) % 360)
                            }
                            get _commonActions() {
                                let t = (t, e, i) => {
                                    let s = i.detail[t];
                                    i.target.style[e] = n.ColorConverters[`${s[0]}_HTML`](s.slice(1))
                                };
                                return (0, s.shadow)(this, "_commonActions", {
                                    display: t => {
                                        let e = t.detail.display % 2 == 1;
                                        this.container.style.visibility = e ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                                            hidden: e,
                                            print: 0 === t.detail.display || 3 === t.detail.display
                                        })
                                    },
                                    print: t => {
                                        this.annotationStorage.setValue(this.data.id, {
                                            print: t.detail.print
                                        })
                                    },
                                    hidden: t => {
                                        this.container.style.visibility = t.detail.hidden ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                                            hidden: t.detail.hidden
                                        })
                                    },
                                    focus: t => {
                                        setTimeout(() => t.target.focus({
                                            preventScroll: !1
                                        }), 0)
                                    },
                                    userName: t => {
                                        t.target.title = t.detail.userName
                                    },
                                    readonly: t => {
                                        t.detail.readonly ? t.target.setAttribute("readonly", "") : t.target.removeAttribute("readonly")
                                    },
                                    required: t => {
                                        this._setRequired(t.target, t.detail.required)
                                    },
                                    bgColor: e => {
                                        t("bgColor", "backgroundColor", e)
                                    },
                                    fillColor: e => {
                                        t("fillColor", "backgroundColor", e)
                                    },
                                    fgColor: e => {
                                        t("fgColor", "color", e)
                                    },
                                    textColor: e => {
                                        t("textColor", "color", e)
                                    },
                                    borderColor: e => {
                                        t("borderColor", "borderColor", e)
                                    },
                                    strokeColor: e => {
                                        t("strokeColor", "borderColor", e)
                                    },
                                    rotation: t => {
                                        let e = t.detail.rotation;
                                        this.setRotation(e), this.annotationStorage.setValue(this.data.id, {
                                            rotation: e
                                        })
                                    }
                                })
                            }
                            _dispatchEventFromSandbox(t, e) {
                                let i = this._commonActions;
                                for (let s of Object.keys(e.detail)) {
                                    let r = t[s] || i[s];
                                    r?.(e)
                                }
                            }
                            _setDefaultPropertiesFromJS(t) {
                                if (!this.enableScripting) return;
                                let e = this.annotationStorage.getRawValue(this.data.id);
                                if (!e) return;
                                let i = this._commonActions;
                                for (let [s, r] of Object.entries(e)) {
                                    let a = i[s];
                                    a && (a({
                                        detail: {
                                            [s]: r
                                        },
                                        target: t
                                    }), delete e[s])
                                }
                            }
                            _createQuadrilaterals(t = !1) {
                                if (!this.data.quadPoints) return null;
                                let e = [],
                                    i = this.data.rect;
                                for (let i of this.data.quadPoints) this.data.rect = [i[2].x, i[2].y, i[1].x, i[1].y], e.push(this._createContainer(t));
                                return this.data.rect = i, e
                            }
                            _createPopup(t, e) {
                                let i = this.container;
                                this.quadrilaterals && (t ||= this.quadrilaterals, i = this.quadrilaterals[0]), t || ((t = document.createElement("div")).classList.add("popupTriggerArea"), i.append(t));
                                let s = new C({
                                    container: i,
                                    trigger: t,
                                    color: e.color,
                                    titleObj: e.titleObj,
                                    modificationDate: e.modificationDate,
                                    contentsObj: e.contentsObj,
                                    richText: e.richText,
                                    hideWrapper: !0
                                }).render();
                                s.style.left = "100%", i.append(s)
                            }
                            _renderQuadrilaterals(t) {
                                for (let e of this.quadrilaterals) e.classList.add(t);
                                return this.quadrilaterals
                            }
                            render() {
                                (0, s.unreachable)("Abstract method `AnnotationElement.render` called")
                            }
                            _getElementsByName(t, e = null) {
                                let i = [];
                                if (this._fieldObjects) {
                                    let r = this._fieldObjects[t];
                                    if (r)
                                        for (let {
                                                page: t,
                                                id: a,
                                                exportValues: n
                                            }
                                            of r) {
                                            if (-1 === t || a === e) continue;
                                            let r = "string" == typeof n ? n : null,
                                                o = document.querySelector(`[data-element-id="${a}"]`);
                                            if (o && !d.has(o)) {
                                                (0, s.warn)(`_getElementsByName - element not allowed: ${a}`);
                                                continue
                                            }
                                            i.push({
                                                id: a,
                                                exportValue: r,
                                                domElement: o
                                            })
                                        }
                                    return i
                                }
                                for (let s of document.getElementsByName(t)) {
                                    let {
                                        exportValue: t
                                    } = s, r = s.getAttribute("data-element-id");
                                    r !== e && d.has(s) && i.push({
                                        id: r,
                                        exportValue: t,
                                        domElement: s
                                    })
                                }
                                return i
                            }
                        }
                        class g extends p {
                            constructor(t, e = null) {
                                super(t, {
                                    isRenderable: !0,
                                    ignoreBorder: !!e?.ignoreBorder,
                                    createQuadrilaterals: !0
                                }), this.isTooltipOnly = t.data.isTooltipOnly
                            }
                            render() {
                                let {
                                    data: t,
                                    linkService: e
                                } = this, i = document.createElement("a");
                                i.setAttribute("data-element-id", t.id);
                                let s = !1;
                                return (t.url ? (e.addLinkAttributes(i, t.url, t.newWindow), s = !0) : t.action ? (this._bindNamedAction(i, t.action), s = !0) : t.attachment ? (this._bindAttachment(i, t.attachment), s = !0) : t.setOCGState ? (this.#eB(i, t.setOCGState), s = !0) : t.dest ? (this._bindLink(i, t.dest), s = !0) : (t.actions && (t.actions.Action || t.actions["Mouse Up"] || t.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, t), s = !0), t.resetForm ? (this._bindResetFormAction(i, t.resetForm), s = !0) : this.isTooltipOnly && !s && (this._bindLink(i, ""), s = !0)), this.quadrilaterals) ? this._renderQuadrilaterals("linkAnnotation").map((t, e) => {
                                    let s = 0 === e ? i : i.cloneNode();
                                    return t.append(s), t
                                }) : (this.container.classList.add("linkAnnotation"), s && this.container.append(i), this.container)
                            }
                            #eU() {
                                this.container.setAttribute("data-internal-link", "")
                            }
                            _bindLink(t, e) {
                                t.href = this.linkService.getDestinationHash(e), t.onclick = () => (e && this.linkService.goToDestination(e), !1), (e || "" === e) && this.#eU()
                            }
                            _bindNamedAction(t, e) {
                                t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeNamedAction(e), !1), this.#eU()
                            }
                            _bindAttachment(t, e) {
                                t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.downloadManager?.openOrDownloadData(this.container, e.content, e.filename), !1), this.#eU()
                            }
                            #eB(t, e) {
                                t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeSetOCGState(e), !1), this.#eU()
                            }
                            _bindJSAction(t, e) {
                                t.href = this.linkService.getAnchorUrl("");
                                let i = new Map([
                                    ["Action", "onclick"],
                                    ["Mouse Up", "onmouseup"],
                                    ["Mouse Down", "onmousedown"]
                                ]);
                                for (let s of Object.keys(e.actions)) {
                                    let r = i.get(s);
                                    r && (t[r] = () => (this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                        source: this,
                                        detail: {
                                            id: e.id,
                                            name: s
                                        }
                                    }), !1))
                                }
                                t.onclick || (t.onclick = () => !1), this.#eU()
                            }
                            _bindResetFormAction(t, e) {
                                let i = t.onclick;
                                if (i || (t.href = this.linkService.getAnchorUrl("")), this.#eU(), !this._fieldObjects) {
                                    (0, s.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (t.onclick = () => !1);
                                    return
                                }
                                t.onclick = () => {
                                    i?.();
                                    let {
                                        fields: t,
                                        refs: r,
                                        include: a
                                    } = e, n = [];
                                    if (0 !== t.length || 0 !== r.length) {
                                        let e = new Set(r);
                                        for (let i of t)
                                            for (let {
                                                    id: t
                                                }
                                                of this._fieldObjects[i] || []) e.add(t);
                                        for (let t of Object.values(this._fieldObjects))
                                            for (let i of t) e.has(i.id) === a && n.push(i)
                                    } else
                                        for (let t of Object.values(this._fieldObjects)) n.push(...t);
                                    let o = this.annotationStorage,
                                        l = [];
                                    for (let t of n) {
                                        let {
                                            id: e
                                        } = t;
                                        switch (l.push(e), t.type) {
                                            case "text": {
                                                let i = t.defaultValue || "";
                                                o.setValue(e, {
                                                    value: i
                                                });
                                                break
                                            }
                                            case "checkbox":
                                            case "radiobutton": {
                                                let i = t.defaultValue === t.exportValues;
                                                o.setValue(e, {
                                                    value: i
                                                });
                                                break
                                            }
                                            case "combobox":
                                            case "listbox": {
                                                let i = t.defaultValue || "";
                                                o.setValue(e, {
                                                    value: i
                                                });
                                                break
                                            }
                                            default:
                                                continue
                                        }
                                        let i = document.querySelector(`[data-element-id="${e}"]`);
                                        if (i) {
                                            if (!d.has(i)) {
                                                (0, s.warn)(`_bindResetFormAction - element not allowed: ${e}`);
                                                continue
                                            }
                                            i.dispatchEvent(new Event("resetform"))
                                        }
                                    }
                                    return this.enableScripting && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                        source: this,
                                        detail: {
                                            id: "app",
                                            ids: l,
                                            name: "ResetForm"
                                        }
                                    }), !1
                                }
                            }
                        }
                        class f extends p {
                            constructor(t) {
                                super(t, {
                                    isRenderable: !!(t.data.hasPopup || t.data.titleObj?.str || t.data.contentsObj?.str || t.data.richText?.str)
                                })
                            }
                            render() {
                                this.container.classList.add("textAnnotation");
                                let t = document.createElement("img");
                                return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.alt = "[{{type}} Annotation]", t.dataset.l10nId = "text_annotation_type", t.dataset.l10nArgs = JSON.stringify({
                                    type: this.data.name
                                }), this.data.hasPopup || this._createPopup(t, this.data), this.container.append(t), this.container
                            }
                        }
                        class m extends p {
                            render() {
                                return this.data.alternativeText && (this.container.title = this.data.alternativeText), this.container
                            }
                            showElementAndHideCanvas(t) {
                                this.data.hasOwnCanvas && (t.previousSibling?.nodeName === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1)
                            }
                            _getKeyModifier(t) {
                                let {
                                    isWin: e,
                                    isMac: i
                                } = s.FeatureTest.platform;
                                return e && t.ctrlKey || i && t.metaKey
                            }
                            _setEventListener(t, e, i, s) {
                                e.includes("mouse") ? t.addEventListener(e, t => {
                                    this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                        source: this,
                                        detail: {
                                            id: this.data.id,
                                            name: i,
                                            value: s(t),
                                            shift: t.shiftKey,
                                            modifier: this._getKeyModifier(t)
                                        }
                                    })
                                }) : t.addEventListener(e, t => {
                                    this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                        source: this,
                                        detail: {
                                            id: this.data.id,
                                            name: i,
                                            value: s(t)
                                        }
                                    })
                                })
                            }
                            _setEventListeners(t, e, i) {
                                for (let [s, r] of e)("Action" === r || this.data.actions?.[r]) && this._setEventListener(t, s, r, i)
                            }
                            _setBackgroundColor(t) {
                                let e = this.data.backgroundColor || null;
                                t.style.backgroundColor = null === e ? "transparent" : s.Util.makeHexColor(e[0], e[1], e[2])
                            }
                            _setTextStyle(t) {
                                let e;
                                let i = ["left", "center", "right"],
                                    {
                                        fontColor: r
                                    } = this.data.defaultAppearanceData,
                                    a = this.data.defaultAppearanceData.fontSize || h,
                                    n = t.style,
                                    o = 2,
                                    l = t => Math.round(10 * t) / 10;
                                if (this.data.multiLine) {
                                    let t = Math.abs(this.data.rect[3] - this.data.rect[1] - o),
                                        i = Math.round(t / (s.LINE_FACTOR * a)) || 1;
                                    e = Math.min(a, l(t / i / s.LINE_FACTOR))
                                } else e = Math.min(a, l(Math.abs(this.data.rect[3] - this.data.rect[1] - o) / s.LINE_FACTOR));
                                n.fontSize = `calc(${e}px * var(--scale-factor))`, n.color = s.Util.makeHexColor(r[0], r[1], r[2]), null !== this.data.textAlignment && (n.textAlign = i[this.data.textAlignment])
                            }
                            _setRequired(t, e) {
                                e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e)
                            }
                        }
                        class b extends m {
                            constructor(t) {
                                super(t, {
                                    isRenderable: t.renderForms || !t.data.hasAppearance && !!t.data.fieldValue
                                })
                            }
                            setPropertyOnSiblings(t, e, i, s) {
                                let r = this.annotationStorage;
                                for (let a of this._getElementsByName(t.name, t.id)) a.domElement && (a.domElement[e] = i), r.setValue(a.id, {
                                    [s]: i
                                })
                            }
                            render() {
                                let t = this.annotationStorage,
                                    e = this.data.id;
                                this.container.classList.add("textWidgetAnnotation");
                                let i = null;
                                if (this.renderForms) {
                                    let s = t.getValue(e, {
                                            value: this.data.fieldValue
                                        }),
                                        r = s.value || "",
                                        a = t.getValue(e, {
                                            charLimit: this.data.maxLen
                                        }).charLimit;
                                    a && r.length > a && (r = r.slice(0, a));
                                    let n = s.formattedValue || this.data.textContent?.join("\n") || null;
                                    n && this.data.comb && (n = n.replaceAll(/\s+/g, ""));
                                    let o = {
                                        userValue: r,
                                        formattedValue: n,
                                        lastCommittedValue: null,
                                        commitKey: 1
                                    };
                                    this.data.multiLine ? ((i = document.createElement("textarea")).textContent = n ?? r, this.data.doNotScroll && (i.style.overflowY = "hidden")) : ((i = document.createElement("input")).type = "text", i.setAttribute("value", n ?? r), this.data.doNotScroll && (i.style.overflowX = "hidden")), this.data.hasOwnCanvas && (i.hidden = !0), d.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, i.name = this.data.fieldName, i.tabIndex = l, this._setRequired(i, this.data.required), a && (i.maxLength = a), i.addEventListener("input", s => {
                                        t.setValue(e, {
                                            value: s.target.value
                                        }), this.setPropertyOnSiblings(i, "value", s.target.value, "value"), o.formattedValue = null
                                    }), i.addEventListener("resetform", t => {
                                        let e = this.data.defaultFieldValue ?? "";
                                        i.value = o.userValue = e, o.formattedValue = null
                                    });
                                    let h = t => {
                                        let {
                                            formattedValue: e
                                        } = o;
                                        null != e && (t.target.value = e), t.target.scrollLeft = 0
                                    };
                                    if (this.enableScripting && this.hasJSActions) {
                                        i.addEventListener("focus", t => {
                                            let {
                                                target: e
                                            } = t;
                                            o.userValue && (e.value = o.userValue), o.lastCommittedValue = e.value, o.commitKey = 1
                                        }), i.addEventListener("updatefromsandbox", i => {
                                            this.showElementAndHideCanvas(i.target);
                                            let s = {
                                                value(i) {
                                                    o.userValue = i.detail.value ?? "", t.setValue(e, {
                                                        value: o.userValue.toString()
                                                    }), i.target.value = o.userValue
                                                },
                                                formattedValue(i) {
                                                    let {
                                                        formattedValue: s
                                                    } = i.detail;
                                                    o.formattedValue = s, null != s && i.target !== document.activeElement && (i.target.value = s), t.setValue(e, {
                                                        formattedValue: s
                                                    })
                                                },
                                                selRange(t) {
                                                    t.target.setSelectionRange(...t.detail.selRange)
                                                },
                                                charLimit: i => {
                                                    let {
                                                        charLimit: s
                                                    } = i.detail, {
                                                        target: r
                                                    } = i;
                                                    if (0 === s) {
                                                        r.removeAttribute("maxLength");
                                                        return
                                                    }
                                                    r.setAttribute("maxLength", s);
                                                    let a = o.userValue;
                                                    a && !(a.length <= s) && (a = a.slice(0, s), r.value = o.userValue = a, t.setValue(e, {
                                                        value: a
                                                    }), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                                        source: this,
                                                        detail: {
                                                            id: e,
                                                            name: "Keystroke",
                                                            value: a,
                                                            willCommit: !0,
                                                            commitKey: 1,
                                                            selStart: r.selectionStart,
                                                            selEnd: r.selectionEnd
                                                        }
                                                    }))
                                                }
                                            };
                                            this._dispatchEventFromSandbox(s, i)
                                        }), i.addEventListener("keydown", t => {
                                            o.commitKey = 1;
                                            let i = -1;
                                            if ("Escape" === t.key ? i = 0 : "Enter" !== t.key || this.data.multiLine ? "Tab" === t.key && (o.commitKey = 3) : i = 2, -1 === i) return;
                                            let {
                                                value: s
                                            } = t.target;
                                            o.lastCommittedValue !== s && (o.lastCommittedValue = s, o.userValue = s, this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                                source: this,
                                                detail: {
                                                    id: e,
                                                    name: "Keystroke",
                                                    value: s,
                                                    willCommit: !0,
                                                    commitKey: i,
                                                    selStart: t.target.selectionStart,
                                                    selEnd: t.target.selectionEnd
                                                }
                                            }))
                                        });
                                        let s = h;
                                        h = null, i.addEventListener("blur", t => {
                                            if (!t.relatedTarget) return;
                                            let {
                                                value: i
                                            } = t.target;
                                            o.userValue = i, o.lastCommittedValue !== i && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                                source: this,
                                                detail: {
                                                    id: e,
                                                    name: "Keystroke",
                                                    value: i,
                                                    willCommit: !0,
                                                    commitKey: o.commitKey,
                                                    selStart: t.target.selectionStart,
                                                    selEnd: t.target.selectionEnd
                                                }
                                            }), s(t)
                                        }), this.data.actions?.Keystroke && i.addEventListener("beforeinput", t => {
                                            o.lastCommittedValue = null;
                                            let {
                                                data: i,
                                                target: s
                                            } = t, {
                                                value: r,
                                                selectionStart: a,
                                                selectionEnd: n
                                            } = s, l = a, h = n;
                                            switch (t.inputType) {
                                                case "deleteWordBackward": {
                                                    let t = r.substring(0, a).match(/\w*[^\w]*$/);
                                                    t && (l -= t[0].length);
                                                    break
                                                }
                                                case "deleteWordForward": {
                                                    let t = r.substring(a).match(/^[^\w]*\w*/);
                                                    t && (h += t[0].length);
                                                    break
                                                }
                                                case "deleteContentBackward":
                                                    a === n && (l -= 1);
                                                    break;
                                                case "deleteContentForward":
                                                    a === n && (h += 1)
                                            }
                                            t.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                                source: this,
                                                detail: {
                                                    id: e,
                                                    name: "Keystroke",
                                                    value: r,
                                                    change: i || "",
                                                    willCommit: !1,
                                                    selStart: l,
                                                    selEnd: h
                                                }
                                            })
                                        }), this._setEventListeners(i, [
                                            ["focus", "Focus"],
                                            ["blur", "Blur"],
                                            ["mousedown", "Mouse Down"],
                                            ["mouseenter", "Mouse Enter"],
                                            ["mouseleave", "Mouse Exit"],
                                            ["mouseup", "Mouse Up"]
                                        ], t => t.target.value)
                                    }
                                    if (h && i.addEventListener("blur", h), this.data.comb) {
                                        let t = (this.data.rect[2] - this.data.rect[0]) / a;
                                        i.classList.add("comb"), i.style.letterSpacing = `calc(${t}px * var(--scale-factor) - 1ch)`
                                    }
                                } else(i = document.createElement("div")).textContent = this.data.fieldValue, i.style.verticalAlign = "middle", i.style.display = "table-cell";
                                return this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container
                            }
                        }
                        class A extends m {
                            constructor(t) {
                                super(t, {
                                    isRenderable: t.renderForms
                                })
                            }
                            render() {
                                let t = this.annotationStorage,
                                    e = this.data,
                                    i = e.id,
                                    s = t.getValue(i, {
                                        value: e.exportValue === e.fieldValue
                                    }).value;
                                "string" == typeof s && (s = "Off" !== s, t.setValue(i, {
                                    value: s
                                })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
                                let r = document.createElement("input");
                                return d.add(r), r.setAttribute("data-element-id", i), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "checkbox", r.name = e.fieldName, s && r.setAttribute("checked", !0), r.setAttribute("exportValue", e.exportValue), r.tabIndex = l, r.addEventListener("change", s => {
                                    let {
                                        name: r,
                                        checked: a
                                    } = s.target;
                                    for (let s of this._getElementsByName(r, i)) {
                                        let i = a && s.exportValue === e.exportValue;
                                        s.domElement && (s.domElement.checked = i), t.setValue(s.id, {
                                            value: i
                                        })
                                    }
                                    t.setValue(i, {
                                        value: a
                                    })
                                }), r.addEventListener("resetform", t => {
                                    let i = e.defaultFieldValue || "Off";
                                    t.target.checked = i === e.exportValue
                                }), this.enableScripting && this.hasJSActions && (r.addEventListener("updatefromsandbox", e => {
                                    let s = {
                                        value(e) {
                                            e.target.checked = "Off" !== e.detail.value, t.setValue(i, {
                                                value: e.target.checked
                                            })
                                        }
                                    };
                                    this._dispatchEventFromSandbox(s, e)
                                }), this._setEventListeners(r, [
                                    ["change", "Validate"],
                                    ["change", "Action"],
                                    ["focus", "Focus"],
                                    ["blur", "Blur"],
                                    ["mousedown", "Mouse Down"],
                                    ["mouseenter", "Mouse Enter"],
                                    ["mouseleave", "Mouse Exit"],
                                    ["mouseup", "Mouse Up"]
                                ], t => t.target.checked)), this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container
                            }
                        }
                        class v extends m {
                            constructor(t) {
                                super(t, {
                                    isRenderable: t.renderForms
                                })
                            }
                            render() {
                                this.container.classList.add("buttonWidgetAnnotation", "radioButton");
                                let t = this.annotationStorage,
                                    e = this.data,
                                    i = e.id,
                                    s = t.getValue(i, {
                                        value: e.fieldValue === e.buttonValue
                                    }).value;
                                "string" == typeof s && (s = s !== e.buttonValue, t.setValue(i, {
                                    value: s
                                }));
                                let r = document.createElement("input");
                                if (d.add(r), r.setAttribute("data-element-id", i), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "radio", r.name = e.fieldName, s && r.setAttribute("checked", !0), r.tabIndex = l, r.addEventListener("change", e => {
                                        let {
                                            name: s,
                                            checked: r
                                        } = e.target;
                                        for (let e of this._getElementsByName(s, i)) t.setValue(e.id, {
                                            value: !1
                                        });
                                        t.setValue(i, {
                                            value: r
                                        })
                                    }), r.addEventListener("resetform", t => {
                                        let i = e.defaultFieldValue;
                                        t.target.checked = null != i && i === e.buttonValue
                                    }), this.enableScripting && this.hasJSActions) {
                                    let s = e.buttonValue;
                                    r.addEventListener("updatefromsandbox", e => {
                                        let r = {
                                            value: e => {
                                                let r = s === e.detail.value;
                                                for (let s of this._getElementsByName(e.target.name)) {
                                                    let e = r && s.id === i;
                                                    s.domElement && (s.domElement.checked = e), t.setValue(s.id, {
                                                        value: e
                                                    })
                                                }
                                            }
                                        };
                                        this._dispatchEventFromSandbox(r, e)
                                    }), this._setEventListeners(r, [
                                        ["change", "Validate"],
                                        ["change", "Action"],
                                        ["focus", "Focus"],
                                        ["blur", "Blur"],
                                        ["mousedown", "Mouse Down"],
                                        ["mouseenter", "Mouse Enter"],
                                        ["mouseleave", "Mouse Exit"],
                                        ["mouseup", "Mouse Up"]
                                    ], t => t.target.checked)
                                }
                                return this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container
                            }
                        }
                        class y extends g {
                            constructor(t) {
                                super(t, {
                                    ignoreBorder: t.data.hasAppearance
                                })
                            }
                            render() {
                                let t = super.render();
                                t.classList.add("buttonWidgetAnnotation", "pushButton"), this.data.alternativeText && (t.title = this.data.alternativeText);
                                let e = t.lastChild;
                                return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", t => {
                                    this._dispatchEventFromSandbox({}, t)
                                })), t
                            }
                        }
                        class _ extends m {
                            constructor(t) {
                                super(t, {
                                    isRenderable: t.renderForms
                                })
                            }
                            render() {
                                this.container.classList.add("choiceWidgetAnnotation");
                                let t = this.annotationStorage,
                                    e = this.data.id,
                                    i = t.getValue(e, {
                                        value: this.data.fieldValue
                                    }),
                                    s = document.createElement("select");
                                d.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, this._setRequired(s, this.data.required), s.name = this.data.fieldName, s.tabIndex = l;
                                let r = this.data.combo && this.data.options.length > 0;
                                for (let t of (!this.data.combo && (s.size = this.data.options.length, this.data.multiSelect && (s.multiple = !0)), s.addEventListener("resetform", t => {
                                        let e = this.data.defaultFieldValue;
                                        for (let t of s.options) t.selected = t.value === e
                                    }), this.data.options)) {
                                    let e = document.createElement("option");
                                    e.textContent = t.displayValue, e.value = t.exportValue, i.value.includes(t.exportValue) && (e.setAttribute("selected", !0), r = !1), s.append(e)
                                }
                                let a = null;
                                if (r) {
                                    let t = document.createElement("option");
                                    t.value = " ", t.setAttribute("hidden", !0), t.setAttribute("selected", !0), s.prepend(t), a = () => {
                                        t.remove(), s.removeEventListener("input", a), a = null
                                    }, s.addEventListener("input", a)
                                }
                                let n = t => {
                                        let e = t ? "value" : "textContent",
                                            {
                                                options: i,
                                                multiple: r
                                            } = s;
                                        return r ? Array.prototype.filter.call(i, t => t.selected).map(t => t[e]) : -1 === i.selectedIndex ? null : i[i.selectedIndex][e]
                                    },
                                    o = n(!1),
                                    h = t => {
                                        let e = t.target.options;
                                        return Array.prototype.map.call(e, t => ({
                                            displayValue: t.textContent,
                                            exportValue: t.value
                                        }))
                                    };
                                return this.enableScripting && this.hasJSActions ? (s.addEventListener("updatefromsandbox", i => {
                                    let r = {
                                        value(i) {
                                            a?.();
                                            let r = i.detail.value,
                                                l = new Set(Array.isArray(r) ? r : [r]);
                                            for (let t of s.options) t.selected = l.has(t.value);
                                            t.setValue(e, {
                                                value: n(!0)
                                            }), o = n(!1)
                                        },
                                        multipleSelection(t) {
                                            s.multiple = !0
                                        },
                                        remove(i) {
                                            let r = s.options,
                                                a = i.detail.remove;
                                            r[a].selected = !1, s.remove(a), r.length > 0 && -1 === Array.prototype.findIndex.call(r, t => t.selected) && (r[0].selected = !0), t.setValue(e, {
                                                value: n(!0),
                                                items: h(i)
                                            }), o = n(!1)
                                        },
                                        clear(i) {
                                            for (; 0 !== s.length;) s.remove(0);
                                            t.setValue(e, {
                                                value: null,
                                                items: []
                                            }), o = n(!1)
                                        },
                                        insert(i) {
                                            let {
                                                index: r,
                                                displayValue: a,
                                                exportValue: l
                                            } = i.detail.insert, d = s.children[r], c = document.createElement("option");
                                            c.textContent = a, c.value = l, d ? d.before(c) : s.append(c), t.setValue(e, {
                                                value: n(!0),
                                                items: h(i)
                                            }), o = n(!1)
                                        },
                                        items(i) {
                                            let {
                                                items: r
                                            } = i.detail;
                                            for (; 0 !== s.length;) s.remove(0);
                                            for (let t of r) {
                                                let {
                                                    displayValue: e,
                                                    exportValue: i
                                                } = t, r = document.createElement("option");
                                                r.textContent = e, r.value = i, s.append(r)
                                            }
                                            s.options.length > 0 && (s.options[0].selected = !0), t.setValue(e, {
                                                value: n(!0),
                                                items: h(i)
                                            }), o = n(!1)
                                        },
                                        indices(i) {
                                            let s = new Set(i.detail.indices);
                                            for (let t of i.target.options) t.selected = s.has(t.index);
                                            t.setValue(e, {
                                                value: n(!0)
                                            }), o = n(!1)
                                        },
                                        editable(t) {
                                            t.target.disabled = !t.detail.editable
                                        }
                                    };
                                    this._dispatchEventFromSandbox(r, i)
                                }), s.addEventListener("input", i => {
                                    let s = n(!0);
                                    t.setValue(e, {
                                        value: s
                                    }), i.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                        source: this,
                                        detail: {
                                            id: e,
                                            name: "Keystroke",
                                            value: o,
                                            changeEx: s,
                                            willCommit: !1,
                                            commitKey: 1,
                                            keyDown: !1
                                        }
                                    })
                                }), this._setEventListeners(s, [
                                    ["focus", "Focus"],
                                    ["blur", "Blur"],
                                    ["mousedown", "Mouse Down"],
                                    ["mouseenter", "Mouse Enter"],
                                    ["mouseleave", "Mouse Exit"],
                                    ["mouseup", "Mouse Up"],
                                    ["input", "Action"],
                                    ["input", "Validate"]
                                ], t => t.target.value)) : s.addEventListener("input", function(i) {
                                    t.setValue(e, {
                                        value: n(!0)
                                    })
                                }), this.data.combo && this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container
                            }
                        }
                        class S extends p {
                            static IGNORE_TYPES = new Set(["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"]);
                            constructor(t) {
                                let {
                                    data: e
                                } = t;
                                super(t, {
                                    isRenderable: !S.IGNORE_TYPES.has(e.parentType) && !!(e.titleObj?.str || e.contentsObj?.str || e.richText?.str)
                                })
                            }
                            render() {
                                this.container.classList.add("popupAnnotation");
                                let t = this.layer.querySelectorAll(`[data-annotation-id="${this.data.parentId}"]`);
                                if (0 === t.length) return this.container;
                                let e = new C({
                                        container: this.container,
                                        trigger: Array.from(t),
                                        color: this.data.color,
                                        titleObj: this.data.titleObj,
                                        modificationDate: this.data.modificationDate,
                                        contentsObj: this.data.contentsObj,
                                        richText: this.data.richText
                                    }),
                                    i = this.page,
                                    r = s.Util.normalizeRect([this.data.parentRect[0], i.view[3] - this.data.parentRect[1] + i.view[1], this.data.parentRect[2], i.view[3] - this.data.parentRect[3] + i.view[1]]),
                                    a = r[0] + this.data.parentRect[2] - this.data.parentRect[0],
                                    n = r[1],
                                    {
                                        pageWidth: o,
                                        pageHeight: l,
                                        pageX: h,
                                        pageY: d
                                    } = this.viewport.rawDims;
                                return this.container.style.left = `${100*(a-h)/o}%`, this.container.style.top = `${100*(n-d)/l}%`, this.container.append(e.render()), this.container
                            }
                        }
                        class C {
                            constructor(t) {
                                this.container = t.container, this.trigger = t.trigger, this.color = t.color, this.titleObj = t.titleObj, this.modificationDate = t.modificationDate, this.contentsObj = t.contentsObj, this.richText = t.richText, this.hideWrapper = t.hideWrapper || !1, this.pinned = !1
                            }
                            render() {
                                let t = .7,
                                    e = document.createElement("div");
                                e.classList.add("popupWrapper"), this.hideElement = this.hideWrapper ? e : this.container, this.hideElement.hidden = !0;
                                let i = document.createElement("div");
                                i.classList.add("popup");
                                let a = this.color;
                                if (a) {
                                    let e = t * (255 - a[0]) + a[0],
                                        r = t * (255 - a[1]) + a[1],
                                        n = t * (255 - a[2]) + a[2];
                                    i.style.backgroundColor = s.Util.makeHexColor(0 | e, 0 | r, 0 | n)
                                }
                                let n = document.createElement("h1");
                                n.dir = this.titleObj.dir, n.textContent = this.titleObj.str, i.append(n);
                                let l = r.PDFDateString.toDateObject(this.modificationDate);
                                if (l) {
                                    let t = document.createElement("span");
                                    t.classList.add("popupDate"), t.textContent = "{{date}}, {{time}}", t.dataset.l10nId = "annotation_date_string", t.dataset.l10nArgs = JSON.stringify({
                                        date: l.toLocaleDateString(),
                                        time: l.toLocaleTimeString()
                                    }), i.append(t)
                                }
                                if (this.richText?.str && (!this.contentsObj?.str || this.contentsObj.str === this.richText.str)) o.XfaLayer.render({
                                    xfaHtml: this.richText.html,
                                    intent: "richText",
                                    div: i
                                }), i.lastChild.classList.add("richText", "popupContent");
                                else {
                                    let t = this._formatContents(this.contentsObj);
                                    i.append(t)
                                }
                                for (let t of (Array.isArray(this.trigger) || (this.trigger = [this.trigger]), this.trigger)) t.addEventListener("click", this._toggle.bind(this)), t.addEventListener("mouseover", this._show.bind(this, !1)), t.addEventListener("mouseout", this._hide.bind(this, !1));
                                return i.addEventListener("click", this._hide.bind(this, !0)), e.append(i), e
                            }
                            _formatContents({
                                str: t,
                                dir: e
                            }) {
                                let i = document.createElement("p");
                                i.classList.add("popupContent"), i.dir = e;
                                let s = t.split(/(?:\r\n?|\n)/);
                                for (let t = 0, e = s.length; t < e; ++t) {
                                    let r = s[t];
                                    i.append(document.createTextNode(r)), t < e - 1 && i.append(document.createElement("br"))
                                }
                                return i
                            }
                            _toggle() {
                                this.pinned ? this._hide(!0) : this._show(!0)
                            }
                            _show(t = !1) {
                                t && (this.pinned = !0), this.hideElement.hidden && (this.hideElement.hidden = !1, this.container.style.zIndex = parseInt(this.container.style.zIndex) + 1e3)
                            }
                            _hide(t = !0) {
                                t && (this.pinned = !1), this.hideElement.hidden || this.pinned || (this.hideElement.hidden = !0, this.container.style.zIndex = parseInt(this.container.style.zIndex) - 1e3)
                            }
                        }
                        class x extends p {
                            constructor(t) {
                                super(t, {
                                    isRenderable: !!(t.data.hasPopup || t.data.titleObj?.str || t.data.contentsObj?.str || t.data.richText?.str),
                                    ignoreBorder: !0
                                }), this.textContent = t.data.textContent
                            }
                            render() {
                                if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
                                    let t = document.createElement("div");
                                    for (let e of (t.classList.add("annotationTextContent"), t.setAttribute("role", "comment"), this.textContent)) {
                                        let i = document.createElement("span");
                                        i.textContent = e, t.append(i)
                                    }
                                    this.container.append(t)
                                }
                                return this.data.hasPopup || this._createPopup(null, this.data), this.container
                            }
                        }
                        class E extends p {
                            constructor(t) {
                                super(t, {
                                    isRenderable: !!(t.data.hasPopup || t.data.titleObj?.str || t.data.contentsObj?.str || t.data.richText?.str),
                                    ignoreBorder: !0
                                })
                            }
                            render() {
                                this.container.classList.add("lineAnnotation");
                                let t = this.data,
                                    {
                                        width: e,
                                        height: i
                                    } = c(t.rect),
                                    s = this.svgFactory.create(e, i, !0),
                                    r = this.svgFactory.createElement("svg:line");
                                return r.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]), r.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]), r.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]), r.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]), r.setAttribute("stroke-width", t.borderStyle.width || 1), r.setAttribute("stroke", "transparent"), r.setAttribute("fill", "transparent"), s.append(r), this.container.append(s), this._createPopup(r, t), this.container
                            }
                        }
                        class T extends p {
                            constructor(t) {
                                super(t, {
                                    isRenderable: !!(t.data.hasPopup || t.data.titleObj?.str || t.data.contentsObj?.str || t.data.richText?.str),
                                    ignoreBorder: !0
                                })
                            }
                            render() {
                                this.container.classList.add("squareAnnotation");
                                let t = this.data,
                                    {
                                        width: e,
                                        height: i
                                    } = c(t.rect),
                                    s = this.svgFactory.create(e, i, !0),
                                    r = t.borderStyle.width,
                                    a = this.svgFactory.createElement("svg:rect");
                                return a.setAttribute("x", r / 2), a.setAttribute("y", r / 2), a.setAttribute("width", e - r), a.setAttribute("height", i - r), a.setAttribute("stroke-width", r || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), s.append(a), this.container.append(s), this._createPopup(a, t), this.container
                            }
                        }
                        class P extends p {
                            constructor(t) {
                                super(t, {
                                    isRenderable: !!(t.data.hasPopup || t.data.titleObj?.str || t.data.contentsObj?.str || t.data.richText?.str),
                                    ignoreBorder: !0
                                })
                            }
                            render() {
                                this.container.classList.add("circleAnnotation");
                                let t = this.data,
                                    {
                                        width: e,
                                        height: i
                                    } = c(t.rect),
                                    s = this.svgFactory.create(e, i, !0),
                                    r = t.borderStyle.width,
                                    a = this.svgFactory.createElement("svg:ellipse");
                                return a.setAttribute("cx", e / 2), a.setAttribute("cy", i / 2), a.setAttribute("rx", e / 2 - r / 2), a.setAttribute("ry", i / 2 - r / 2), a.setAttribute("stroke-width", r || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), s.append(a), this.container.append(s), this._createPopup(a, t), this.container
                            }
                        }
                        class M extends p {
                            constructor(t) {
                                super(t, {
                                    isRenderable: !!(t.data.hasPopup || t.data.titleObj?.str || t.data.contentsObj?.str || t.data.richText?.str),
                                    ignoreBorder: !0
                                }), this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline"
                            }
                            render() {
                                this.container.classList.add(this.containerClassName);
                                let t = this.data,
                                    {
                                        width: e,
                                        height: i
                                    } = c(t.rect),
                                    s = this.svgFactory.create(e, i, !0),
                                    r = [];
                                for (let e of t.vertices) {
                                    let i = e.x - t.rect[0],
                                        s = t.rect[3] - e.y;
                                    r.push(i + "," + s)
                                }
                                r = r.join(" ");
                                let a = this.svgFactory.createElement(this.svgElementName);
                                return a.setAttribute("points", r), a.setAttribute("stroke-width", t.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), s.append(a), this.container.append(s), this._createPopup(a, t), this.container
                            }
                        }
                        class w extends M {
                            constructor(t) {
                                super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon"
                            }
                        }
                        class k extends p {
                            constructor(t) {
                                super(t, {
                                    isRenderable: !!(t.data.hasPopup || t.data.titleObj?.str || t.data.contentsObj?.str || t.data.richText?.str),
                                    ignoreBorder: !0
                                })
                            }
                            render() {
                                return this.container.classList.add("caretAnnotation"), this.data.hasPopup || this._createPopup(null, this.data), this.container
                            }
                        }
                        class R extends p {
                            constructor(t) {
                                super(t, {
                                    isRenderable: !!(t.data.hasPopup || t.data.titleObj?.str || t.data.contentsObj?.str || t.data.richText?.str),
                                    ignoreBorder: !0
                                }), this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline"
                            }
                            render() {
                                this.container.classList.add(this.containerClassName);
                                let t = this.data,
                                    {
                                        width: e,
                                        height: i
                                    } = c(t.rect),
                                    s = this.svgFactory.create(e, i, !0);
                                for (let e of t.inkLists) {
                                    let i = [];
                                    for (let s of e) {
                                        let e = s.x - t.rect[0],
                                            r = t.rect[3] - s.y;
                                        i.push(`${e},${r}`)
                                    }
                                    i = i.join(" ");
                                    let r = this.svgFactory.createElement(this.svgElementName);
                                    r.setAttribute("points", i), r.setAttribute("stroke-width", t.borderStyle.width || 1), r.setAttribute("stroke", "transparent"), r.setAttribute("fill", "transparent"), this._createPopup(r, t), s.append(r)
                                }
                                return this.container.append(s), this.container
                            }
                        }
                        class F extends p {
                            constructor(t) {
                                super(t, {
                                    isRenderable: !!(t.data.hasPopup || t.data.titleObj?.str || t.data.contentsObj?.str || t.data.richText?.str),
                                    ignoreBorder: !0,
                                    createQuadrilaterals: !0
                                })
                            }
                            render() {
                                return (this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals) ? this._renderQuadrilaterals("highlightAnnotation") : (this.container.classList.add("highlightAnnotation"), this.container)
                            }
                        }
                        class O extends p {
                            constructor(t) {
                                super(t, {
                                    isRenderable: !!(t.data.hasPopup || t.data.titleObj?.str || t.data.contentsObj?.str || t.data.richText?.str),
                                    ignoreBorder: !0,
                                    createQuadrilaterals: !0
                                })
                            }
                            render() {
                                return (this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals) ? this._renderQuadrilaterals("underlineAnnotation") : (this.container.classList.add("underlineAnnotation"), this.container)
                            }
                        }
                        class I extends p {
                            constructor(t) {
                                super(t, {
                                    isRenderable: !!(t.data.hasPopup || t.data.titleObj?.str || t.data.contentsObj?.str || t.data.richText?.str),
                                    ignoreBorder: !0,
                                    createQuadrilaterals: !0
                                })
                            }
                            render() {
                                return (this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals) ? this._renderQuadrilaterals("squigglyAnnotation") : (this.container.classList.add("squigglyAnnotation"), this.container)
                            }
                        }
                        class D extends p {
                            constructor(t) {
                                super(t, {
                                    isRenderable: !!(t.data.hasPopup || t.data.titleObj?.str || t.data.contentsObj?.str || t.data.richText?.str),
                                    ignoreBorder: !0,
                                    createQuadrilaterals: !0
                                })
                            }
                            render() {
                                return (this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals) ? this._renderQuadrilaterals("strikeoutAnnotation") : (this.container.classList.add("strikeoutAnnotation"), this.container)
                            }
                        }
                        class L extends p {
                            constructor(t) {
                                super(t, {
                                    isRenderable: !!(t.data.hasPopup || t.data.titleObj?.str || t.data.contentsObj?.str || t.data.richText?.str),
                                    ignoreBorder: !0
                                })
                            }
                            render() {
                                return this.container.classList.add("stampAnnotation"), this.data.hasPopup || this._createPopup(null, this.data), this.container
                            }
                        }
                        class N extends p {
                            constructor(t) {
                                super(t, {
                                    isRenderable: !0
                                });
                                let {
                                    filename: e,
                                    content: i
                                } = this.data.file;
                                this.filename = (0, r.getFilenameFromUrl)(e, !0), this.content = i, this.linkService.eventBus?.dispatch("fileattachmentannotation", {
                                    source: this,
                                    filename: e,
                                    content: i
                                })
                            }
                            render() {
                                let t;
                                return this.container.classList.add("fileAttachmentAnnotation"), this.data.hasAppearance ? t = document.createElement("div") : (t = document.createElement("img")).src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(this.data.name)?"paperclip":"pushpin"}.svg`, t.classList.add("popupTriggerArea"), t.addEventListener("dblclick", this._download.bind(this)), !this.data.hasPopup && (this.data.titleObj?.str || this.data.contentsObj?.str || this.data.richText) && this._createPopup(t, this.data), this.container.append(t), this.container
                            }
                            _download() {
                                this.downloadManager?.openOrDownloadData(this.container, this.content, this.filename)
                            }
                        }
                        class j {
                            static #eG(t, e, i, s) {
                                let a = t.firstChild || t;
                                a.id = `${r.AnnotationPrefix}${e}`, i.append(t), s?.moveElementInDOM(i, t, a, !1)
                            }
                            static render(t) {
                                let {
                                    annotations: e,
                                    div: i,
                                    viewport: n,
                                    accessibilityManager: o
                                } = t;
                                (0, r.setLayerDimensions)(i, n);
                                let l = {
                                        data: null,
                                        layer: i,
                                        page: t.page,
                                        viewport: n,
                                        linkService: t.linkService,
                                        downloadManager: t.downloadManager,
                                        imageResourcesPath: t.imageResourcesPath || "",
                                        renderForms: !1 !== t.renderForms,
                                        svgFactory: new r.DOMSVGFactory,
                                        annotationStorage: t.annotationStorage || new a.AnnotationStorage,
                                        enableScripting: !0 === t.enableScripting,
                                        hasJSActions: t.hasJSActions,
                                        fieldObjects: t.fieldObjects
                                    },
                                    h = 0;
                                for (let t of e) {
                                    if (t.noHTML) continue;
                                    if (t.annotationType !== s.AnnotationType.POPUP) {
                                        let {
                                            width: e,
                                            height: i
                                        } = c(t.rect);
                                        if (e <= 0 || i <= 0) continue
                                    }
                                    l.data = t;
                                    let e = u.create(l);
                                    if (!e.isRenderable) continue;
                                    let r = e.render();
                                    if (t.hidden && (r.style.visibility = "hidden"), Array.isArray(r))
                                        for (let e of r) e.style.zIndex = h++, j.#eG(e, t.id, i, o);
                                    else r.style.zIndex = h++, e instanceof S ? i.prepend(r) : j.#eG(r, t.id, i, o)
                                }
                                this.#eH(i, t.annotationCanvasMap)
                            }
                            static update(t) {
                                let {
                                    annotationCanvasMap: e,
                                    div: i,
                                    viewport: s
                                } = t;
                                (0, r.setLayerDimensions)(i, {
                                    rotation: s.rotation
                                }), this.#eH(i, e), i.hidden = !1
                            }
                            static #eH(t, e) {
                                if (e) {
                                    for (let [i, s] of e) {
                                        let e = t.querySelector(`[data-annotation-id="${i}"]`);
                                        if (!e) continue;
                                        let {
                                            firstChild: r
                                        } = e;
                                        r ? "CANVAS" === r.nodeName ? r.replaceWith(s) : r.before(s) : e.append(s)
                                    }
                                    e.clear()
                                }
                            }
                        }
                        e.AnnotationLayer = j
                    }, (t, e) => {
                        function i(t) {
                            return Math.floor(255 * Math.max(0, Math.min(1, t))).toString(16).padStart(2, "0")
                        }
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.ColorConverters = void 0;
                        class s {
                            static CMYK_G([t, e, i, s]) {
                                return ["G", 1 - Math.min(1, .3 * t + .59 * i + .11 * e + s)]
                            }
                            static G_CMYK([t]) {
                                return ["CMYK", 0, 0, 0, 1 - t]
                            }
                            static G_RGB([t]) {
                                return ["RGB", t, t, t]
                            }
                            static G_HTML([t]) {
                                let e = i(t);
                                return `#${e}${e}${e}`
                            }
                            static RGB_G([t, e, i]) {
                                return ["G", .3 * t + .59 * e + .11 * i]
                            }
                            static RGB_HTML([t, e, s]) {
                                let r = i(t),
                                    a = i(e),
                                    n = i(s);
                                return `#${r}${a}${n}`
                            }
                            static T_HTML() {
                                return "#00000000"
                            }
                            static CMYK_RGB([t, e, i, s]) {
                                return ["RGB", 1 - Math.min(1, t + s), 1 - Math.min(1, i + s), 1 - Math.min(1, e + s)]
                            }
                            static CMYK_HTML(t) {
                                let e = this.CMYK_RGB(t).slice(1);
                                return this.RGB_HTML(e)
                            }
                            static RGB_CMYK([t, e, i]) {
                                let s = 1 - t,
                                    r = 1 - e,
                                    a = 1 - i,
                                    n = Math.min(s, r, a);
                                return ["CMYK", s, r, a, n]
                            }
                        }
                        e.ColorConverters = s
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.XfaLayer = void 0;
                        var s = i(19);
                        class r {
                            static setupStorage(t, e, i, s, r) {
                                let a = s.getValue(e, {
                                    value: null
                                });
                                switch (i.name) {
                                    case "textarea":
                                        if (null !== a.value && (t.textContent = a.value), "print" === r) break;
                                        t.addEventListener("input", t => {
                                            s.setValue(e, {
                                                value: t.target.value
                                            })
                                        });
                                        break;
                                    case "input":
                                        if ("radio" === i.attributes.type || "checkbox" === i.attributes.type) {
                                            if (a.value === i.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === i.attributes.xfaOff && t.removeAttribute("checked"), "print" === r) break;
                                            t.addEventListener("change", t => {
                                                s.setValue(e, {
                                                    value: t.target.checked ? t.target.getAttribute("xfaOn") : t.target.getAttribute("xfaOff")
                                                })
                                            })
                                        } else {
                                            if (null !== a.value && t.setAttribute("value", a.value), "print" === r) break;
                                            t.addEventListener("input", t => {
                                                s.setValue(e, {
                                                    value: t.target.value
                                                })
                                            })
                                        }
                                        break;
                                    case "select":
                                        if (null !== a.value)
                                            for (let t of i.children) t.attributes.value === a.value && (t.attributes.selected = !0);
                                        t.addEventListener("input", t => {
                                            let i = t.target.options,
                                                r = -1 === i.selectedIndex ? "" : i[i.selectedIndex].value;
                                            s.setValue(e, {
                                                value: r
                                            })
                                        })
                                }
                            }
                            static setAttributes({
                                html: t,
                                element: e,
                                storage: i = null,
                                intent: s,
                                linkService: r
                            }) {
                                let {
                                    attributes: a
                                } = e, n = t instanceof HTMLAnchorElement;
                                for (let [e, i] of("radio" === a.type && (a.name = `${a.name}-${s}`), Object.entries(a)))
                                    if (null != i) switch (e) {
                                        case "class":
                                            i.length && t.setAttribute(e, i.join(" "));
                                            break;
                                        case "dataId":
                                            break;
                                        case "id":
                                            t.setAttribute("data-element-id", i);
                                            break;
                                        case "style":
                                            Object.assign(t.style, i);
                                            break;
                                        case "textContent":
                                            t.textContent = i;
                                            break;
                                        default:
                                            n && ("href" === e || "newWindow" === e) || t.setAttribute(e, i)
                                    }
                                n && r.addLinkAttributes(t, a.href, a.newWindow), i && a.dataId && this.setupStorage(t, a.dataId, e, i)
                            }
                            static render(t) {
                                let e = t.annotationStorage,
                                    i = t.linkService,
                                    r = t.xfaHtml,
                                    a = t.intent || "display",
                                    n = document.createElement(r.name);
                                r.attributes && this.setAttributes({
                                    html: n,
                                    element: r,
                                    intent: a,
                                    linkService: i
                                });
                                let o = [
                                        [r, -1, n]
                                    ],
                                    l = t.div;
                                if (l.append(n), t.viewport) {
                                    let e = `matrix(${t.viewport.transform.join(",")})`;
                                    l.style.transform = e
                                }
                                "richText" !== a && l.setAttribute("class", "xfaLayer xfaFont");
                                let h = [];
                                for (; o.length > 0;) {
                                    let t;
                                    let [r, n, l] = o.at(-1);
                                    if (n + 1 === r.children.length) {
                                        o.pop();
                                        continue
                                    }
                                    let d = r.children[++o.at(-1)[1]];
                                    if (null === d) continue;
                                    let {
                                        name: c
                                    } = d;
                                    if ("#text" === c) {
                                        let t = document.createTextNode(d.value);
                                        h.push(t), l.append(t);
                                        continue
                                    }
                                    if (t = d?.attributes?.xmlns ? document.createElementNS(d.attributes.xmlns, c) : document.createElement(c), l.append(t), d.attributes && this.setAttributes({
                                            html: t,
                                            element: d,
                                            storage: e,
                                            intent: a,
                                            linkService: i
                                        }), d.children && d.children.length > 0) o.push([d, -1, t]);
                                    else if (d.value) {
                                        let e = document.createTextNode(d.value);
                                        s.XfaText.shouldBuildText(c) && h.push(e), t.append(e)
                                    }
                                }
                                for (let t of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) t.setAttribute("readOnly", !0);
                                return {
                                    textDivs: h
                                }
                            }
                            static update(t) {
                                let e = `matrix(${t.viewport.transform.join(",")})`;
                                t.div.style.transform = e, t.div.hidden = !1
                            }
                        }
                        e.XfaLayer = r
                    }, (t, e, i) => {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.SVGGraphics = void 0;
                        var s = i(6),
                            r = i(1),
                            a = i(10);
                        let n = class {
                            constructor() {
                                (0, r.unreachable)("Not implemented: SVGGraphics")
                            }
                        };
                        e.SVGGraphics = n;
                        {
                            let t = {
                                    fontStyle: "normal",
                                    fontWeight: "normal",
                                    fillColor: "#000000"
                                },
                                i = "http://www.w3.org/XML/1998/namespace",
                                d = "http://www.w3.org/1999/xlink",
                                c = ["butt", "round", "square"],
                                u = ["miter", "round", "bevel"],
                                p = function(t, e = "", i = !1) {
                                    if (URL.createObjectURL && "undefined" != typeof Blob && !i) return URL.createObjectURL(new Blob([t], {
                                        type: e
                                    }));
                                    let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                                        r = `data:${e};base64,`;
                                    for (let e = 0, i = t.length; e < i; e += 3) {
                                        let a = 255 & t[e],
                                            n = 255 & t[e + 1],
                                            o = 255 & t[e + 2],
                                            l = a >> 2,
                                            h = (3 & a) << 4 | n >> 4,
                                            d = e + 1 < i ? (15 & n) << 2 | o >> 6 : 64,
                                            c = e + 2 < i ? 63 & o : 64;
                                        r += s[l] + s[h] + s[d] + s[c]
                                    }
                                    return r
                                },
                                g = function() {
                                    let t = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
                                        e = 12,
                                        i = new Int32Array(256);
                                    for (let t = 0; t < 256; t++) {
                                        let e = t;
                                        for (let t = 0; t < 8; t++) e = 1 & e ? 3988292384 ^ e >> 1 & 2147483647 : e >> 1 & 2147483647;
                                        i[t] = e
                                    }

                                    function s(t, e, s) {
                                        let r = -1;
                                        for (let a = e; a < s; a++) {
                                            let e = i[(r ^ t[a]) & 255];
                                            r = r >>> 8 ^ e
                                        }
                                        return -1 ^ r
                                    }

                                    function n(t, e, i, r) {
                                        let a = r,
                                            n = e.length;
                                        i[a] = n >> 24 & 255, i[a + 1] = n >> 16 & 255, i[a + 2] = n >> 8 & 255, i[a + 3] = 255 & n, i[a += 4] = 255 & t.charCodeAt(0), i[a + 1] = 255 & t.charCodeAt(1), i[a + 2] = 255 & t.charCodeAt(2), i[a + 3] = 255 & t.charCodeAt(3), a += 4, i.set(e, a);
                                        let o = s(i, r + 4, a += e.length);
                                        i[a] = o >> 24 & 255, i[a + 1] = o >> 16 & 255, i[a + 2] = o >> 8 & 255, i[a + 3] = 255 & o
                                    }

                                    function o(t, e, i) {
                                        let s = 1,
                                            r = 0;
                                        for (let a = e; a < i; ++a) r = (r + (s = (s + (255 & t[a])) % 65521)) % 65521;
                                        return r << 16 | s
                                    }

                                    function l(t) {
                                        if (!a.isNodeJS) return h(t);
                                        try {
                                            let e;
                                            e = parseInt(process.versions.node) >= 8 ? t : Buffer.from(t);
                                            let i = __webpack_require__(82258).deflateSync(e, {
                                                level: 9
                                            });
                                            return i instanceof Uint8Array ? i : new Uint8Array(i)
                                        } catch (t) {
                                            (0, r.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + t)
                                        }
                                        return h(t)
                                    }

                                    function h(t) {
                                        let e = t.length,
                                            i = 65535,
                                            s = Math.ceil(e / 65535),
                                            r = new Uint8Array(2 + e + 5 * s + 4),
                                            a = 0;
                                        r[a++] = 120, r[a++] = 156;
                                        let n = 0;
                                        for (; e > i;) r[a++] = 0, r[a++] = 255, r[a++] = 255, r[a++] = 0, r[a++] = 0, r.set(t.subarray(n, n + i), a), a += i, n += i, e -= i;
                                        r[a++] = 1, r[a++] = 255 & e, r[a++] = e >> 8 & 255, r[a++] = 255 & ~e, r[a++] = (65535 & ~e) >> 8 & 255, r.set(t.subarray(n), a), a += t.length - n;
                                        let l = o(t, 0, t.length);
                                        return r[a++] = l >> 24 & 255, r[a++] = l >> 16 & 255, r[a++] = l >> 8 & 255, r[a++] = 255 & l, r
                                    }

                                    function d(i, s, a, o) {
                                        let h, d, c;
                                        let u = i.width,
                                            g = i.height,
                                            f = i.data;
                                        switch (s) {
                                            case r.ImageKind.GRAYSCALE_1BPP:
                                                d = 0, h = 1, c = u + 7 >> 3;
                                                break;
                                            case r.ImageKind.RGB_24BPP:
                                                d = 2, h = 8, c = 3 * u;
                                                break;
                                            case r.ImageKind.RGBA_32BPP:
                                                d = 6, h = 8, c = 4 * u;
                                                break;
                                            default:
                                                throw Error("invalid format")
                                        }
                                        let m = new Uint8Array((1 + c) * g),
                                            b = 0,
                                            A = 0;
                                        for (let t = 0; t < g; ++t) m[b++] = 0, m.set(f.subarray(A, A + c), b), A += c, b += c;
                                        if (s === r.ImageKind.GRAYSCALE_1BPP && o) {
                                            b = 0;
                                            for (let t = 0; t < g; t++) {
                                                b++;
                                                for (let t = 0; t < c; t++) m[b++] ^= 255
                                            }
                                        }
                                        let v = new Uint8Array([u >> 24 & 255, u >> 16 & 255, u >> 8 & 255, 255 & u, g >> 24 & 255, g >> 16 & 255, g >> 8 & 255, 255 & g, h, d, 0, 0, 0]),
                                            y = l(m),
                                            _ = new Uint8Array(t.length + 3 * e + v.length + y.length),
                                            S = 0;
                                        return _.set(t, S), n("IHDR", v, _, S += t.length), n("IDATA", y, _, S += e + v.length), S += e + y.length, n("IEND", new Uint8Array(0), _, S), p(_, "image/png", a)
                                    }
                                    return function(t, e, i) {
                                        let s = void 0 === t.kind ? r.ImageKind.GRAYSCALE_1BPP : t.kind;
                                        return d(t, s, e, i)
                                    }
                                }();
                            class f {
                                constructor() {
                                    this.fontSizeScale = 1, this.fontWeight = t.fontWeight, this.fontSize = 0, this.textMatrix = r.IDENTITY_MATRIX, this.fontMatrix = r.FONT_IDENTITY_MATRIX, this.leading = 0, this.textRenderingMode = r.TextRenderingMode.FILL, this.textMatrixScale = 1, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRise = 0, this.fillColor = t.fillColor, this.strokeColor = "#000000", this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.lineJoin = "", this.lineCap = "", this.miterLimit = 0, this.dashArray = [], this.dashPhase = 0, this.dependencies = [], this.activeClipUrl = null, this.clipGroup = null, this.maskId = ""
                                }
                                clone() {
                                    return Object.create(this)
                                }
                                setCurrentPoint(t, e) {
                                    this.x = t, this.y = e
                                }
                            }

                            function o(t) {
                                let e = [],
                                    i = [];
                                for (let s of t) {
                                    if ("save" === s.fn) {
                                        e.push({
                                            fnId: 92,
                                            fn: "group",
                                            items: []
                                        }), i.push(e), e = e.at(-1).items;
                                        continue
                                    }
                                    "restore" === s.fn ? e = i.pop() : e.push(s)
                                }
                                return e
                            }

                            function l(t) {
                                if (Number.isInteger(t)) return t.toString();
                                let e = t.toFixed(10),
                                    i = e.length - 1;
                                if ("0" !== e[i]) return e;
                                do i--; while ("0" === e[i]);
                                return e.substring(0, "." === e[i] ? i : i + 1)
                            }

                            function h(t) {
                                if (0 === t[4] && 0 === t[5]) {
                                    if (0 === t[1] && 0 === t[2]) return 1 === t[0] && 1 === t[3] ? "" : `scale(${l(t[0])} ${l(t[3])})`;
                                    if (t[0] === t[3] && t[1] === -t[2]) {
                                        let e = 180 * Math.acos(t[0]) / Math.PI;
                                        return `rotate(${l(e)})`
                                    }
                                } else if (1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3]) return `translate(${l(t[4])} ${l(t[5])})`;
                                return `matrix(${l(t[0])} ${l(t[1])} ${l(t[2])} ${l(t[3])} ${l(t[4])} ${l(t[5])})`
                            }
                            let m = 0,
                                b = 0,
                                A = 0;
                            e.SVGGraphics = n = class {
                                constructor(t, e, i = !1) {
                                    for (let a in (0, s.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future."), this.svgFactory = new s.DOMSVGFactory, this.current = new f, this.transformMatrix = r.IDENTITY_MATRIX, this.transformStack = [], this.extraStack = [], this.commonObjs = t, this.objs = e, this.pendingClip = null, this.pendingEOFill = !1, this.embedFonts = !1, this.embeddedFonts = Object.create(null), this.cssStyle = null, this.forceDataSchema = !!i, this._operatorIdMapping = [], r.OPS) this._operatorIdMapping[r.OPS[a]] = a
                                }
                                getObject(t, e = null) {
                                    return "string" == typeof t ? t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t) : e
                                }
                                save() {
                                    this.transformStack.push(this.transformMatrix);
                                    let t = this.current;
                                    this.extraStack.push(t), this.current = t.clone()
                                }
                                restore() {
                                    this.transformMatrix = this.transformStack.pop(), this.current = this.extraStack.pop(), this.pendingClip = null, this.tgrp = null
                                }
                                group(t) {
                                    this.save(), this.executeOpTree(t), this.restore()
                                }
                                loadDependencies(t) {
                                    let e = t.fnArray,
                                        i = t.argsArray;
                                    for (let t = 0, s = e.length; t < s; t++)
                                        if (e[t] === r.OPS.dependency)
                                            for (let e of i[t]) {
                                                let t = e.startsWith("g_") ? this.commonObjs : this.objs,
                                                    i = new Promise(i => {
                                                        t.get(e, i)
                                                    });
                                                this.current.dependencies.push(i)
                                            }
                                    return Promise.all(this.current.dependencies)
                                }
                                transform(t, e, i, s, a, n) {
                                    let o = [t, e, i, s, a, n];
                                    this.transformMatrix = r.Util.transform(this.transformMatrix, o), this.tgrp = null
                                }
                                getSVG(t, e) {
                                    this.viewport = e;
                                    let i = this._initialize(e);
                                    return this.loadDependencies(t).then(() => (this.transformMatrix = r.IDENTITY_MATRIX, this.executeOpTree(this.convertOpList(t)), i))
                                }
                                convertOpList(t) {
                                    let e = this._operatorIdMapping,
                                        i = t.argsArray,
                                        s = t.fnArray,
                                        r = [];
                                    for (let t = 0, a = s.length; t < a; t++) {
                                        let a = s[t];
                                        r.push({
                                            fnId: a,
                                            fn: e[a],
                                            args: i[t]
                                        })
                                    }
                                    return o(r)
                                }
                                executeOpTree(t) {
                                    for (let e of t) {
                                        let t = e.fn,
                                            i = e.fnId,
                                            s = e.args;
                                        switch (0 | i) {
                                            case r.OPS.beginText:
                                                this.beginText();
                                                break;
                                            case r.OPS.dependency:
                                                break;
                                            case r.OPS.setLeading:
                                                this.setLeading(s);
                                                break;
                                            case r.OPS.setLeadingMoveText:
                                                this.setLeadingMoveText(s[0], s[1]);
                                                break;
                                            case r.OPS.setFont:
                                                this.setFont(s);
                                                break;
                                            case r.OPS.showText:
                                            case r.OPS.showSpacedText:
                                                this.showText(s[0]);
                                                break;
                                            case r.OPS.endText:
                                                this.endText();
                                                break;
                                            case r.OPS.moveText:
                                                this.moveText(s[0], s[1]);
                                                break;
                                            case r.OPS.setCharSpacing:
                                                this.setCharSpacing(s[0]);
                                                break;
                                            case r.OPS.setWordSpacing:
                                                this.setWordSpacing(s[0]);
                                                break;
                                            case r.OPS.setHScale:
                                                this.setHScale(s[0]);
                                                break;
                                            case r.OPS.setTextMatrix:
                                                this.setTextMatrix(s[0], s[1], s[2], s[3], s[4], s[5]);
                                                break;
                                            case r.OPS.setTextRise:
                                                this.setTextRise(s[0]);
                                                break;
                                            case r.OPS.setTextRenderingMode:
                                                this.setTextRenderingMode(s[0]);
                                                break;
                                            case r.OPS.setLineWidth:
                                                this.setLineWidth(s[0]);
                                                break;
                                            case r.OPS.setLineJoin:
                                                this.setLineJoin(s[0]);
                                                break;
                                            case r.OPS.setLineCap:
                                                this.setLineCap(s[0]);
                                                break;
                                            case r.OPS.setMiterLimit:
                                                this.setMiterLimit(s[0]);
                                                break;
                                            case r.OPS.setFillRGBColor:
                                                this.setFillRGBColor(s[0], s[1], s[2]);
                                                break;
                                            case r.OPS.setStrokeRGBColor:
                                                this.setStrokeRGBColor(s[0], s[1], s[2]);
                                                break;
                                            case r.OPS.setStrokeColorN:
                                                this.setStrokeColorN(s);
                                                break;
                                            case r.OPS.setFillColorN:
                                                this.setFillColorN(s);
                                                break;
                                            case r.OPS.shadingFill:
                                                this.shadingFill(s[0]);
                                                break;
                                            case r.OPS.setDash:
                                                this.setDash(s[0], s[1]);
                                                break;
                                            case r.OPS.setRenderingIntent:
                                                this.setRenderingIntent(s[0]);
                                                break;
                                            case r.OPS.setFlatness:
                                                this.setFlatness(s[0]);
                                                break;
                                            case r.OPS.setGState:
                                                this.setGState(s[0]);
                                                break;
                                            case r.OPS.fill:
                                                this.fill();
                                                break;
                                            case r.OPS.eoFill:
                                                this.eoFill();
                                                break;
                                            case r.OPS.stroke:
                                                this.stroke();
                                                break;
                                            case r.OPS.fillStroke:
                                                this.fillStroke();
                                                break;
                                            case r.OPS.eoFillStroke:
                                                this.eoFillStroke();
                                                break;
                                            case r.OPS.clip:
                                                this.clip("nonzero");
                                                break;
                                            case r.OPS.eoClip:
                                                this.clip("evenodd");
                                                break;
                                            case r.OPS.paintSolidColorImageMask:
                                                this.paintSolidColorImageMask();
                                                break;
                                            case r.OPS.paintImageXObject:
                                                this.paintImageXObject(s[0]);
                                                break;
                                            case r.OPS.paintInlineImageXObject:
                                                this.paintInlineImageXObject(s[0]);
                                                break;
                                            case r.OPS.paintImageMaskXObject:
                                                this.paintImageMaskXObject(s[0]);
                                                break;
                                            case r.OPS.paintFormXObjectBegin:
                                                this.paintFormXObjectBegin(s[0], s[1]);
                                                break;
                                            case r.OPS.paintFormXObjectEnd:
                                                this.paintFormXObjectEnd();
                                                break;
                                            case r.OPS.closePath:
                                                this.closePath();
                                                break;
                                            case r.OPS.closeStroke:
                                                this.closeStroke();
                                                break;
                                            case r.OPS.closeFillStroke:
                                                this.closeFillStroke();
                                                break;
                                            case r.OPS.closeEOFillStroke:
                                                this.closeEOFillStroke();
                                                break;
                                            case r.OPS.nextLine:
                                                this.nextLine();
                                                break;
                                            case r.OPS.transform:
                                                this.transform(s[0], s[1], s[2], s[3], s[4], s[5]);
                                                break;
                                            case r.OPS.constructPath:
                                                this.constructPath(s[0], s[1]);
                                                break;
                                            case r.OPS.endPath:
                                                this.endPath();
                                                break;
                                            case 92:
                                                this.group(e.items);
                                                break;
                                            default:
                                                (0, r.warn)(`Unimplemented operator ${t}`)
                                        }
                                    }
                                }
                                setWordSpacing(t) {
                                    this.current.wordSpacing = t
                                }
                                setCharSpacing(t) {
                                    this.current.charSpacing = t
                                }
                                nextLine() {
                                    this.moveText(0, this.current.leading)
                                }
                                setTextMatrix(t, e, i, s, r, a) {
                                    let n = this.current;
                                    n.textMatrix = n.lineMatrix = [t, e, i, s, r, a], n.textMatrixScale = Math.hypot(t, e), n.x = n.lineX = 0, n.y = n.lineY = 0, n.xcoords = [], n.ycoords = [], n.tspan = this.svgFactory.createElement("svg:tspan"), n.tspan.setAttributeNS(null, "font-family", n.fontFamily), n.tspan.setAttributeNS(null, "font-size", `${l(n.fontSize)}px`), n.tspan.setAttributeNS(null, "y", l(-n.y)), n.txtElement = this.svgFactory.createElement("svg:text"), n.txtElement.append(n.tspan)
                                }
                                beginText() {
                                    let t = this.current;
                                    t.x = t.lineX = 0, t.y = t.lineY = 0, t.textMatrix = r.IDENTITY_MATRIX, t.lineMatrix = r.IDENTITY_MATRIX, t.textMatrixScale = 1, t.tspan = this.svgFactory.createElement("svg:tspan"), t.txtElement = this.svgFactory.createElement("svg:text"), t.txtgrp = this.svgFactory.createElement("svg:g"), t.xcoords = [], t.ycoords = []
                                }
                                moveText(t, e) {
                                    let i = this.current;
                                    i.x = i.lineX += t, i.y = i.lineY += e, i.xcoords = [], i.ycoords = [], i.tspan = this.svgFactory.createElement("svg:tspan"), i.tspan.setAttributeNS(null, "font-family", i.fontFamily), i.tspan.setAttributeNS(null, "font-size", `${l(i.fontSize)}px`), i.tspan.setAttributeNS(null, "y", l(-i.y))
                                }
                                showText(e) {
                                    let s = this.current,
                                        a = s.font,
                                        n = s.fontSize;
                                    if (0 === n) return;
                                    let o = s.fontSizeScale,
                                        d = s.charSpacing,
                                        c = s.wordSpacing,
                                        u = s.fontDirection,
                                        p = s.textHScale * u,
                                        g = a.vertical,
                                        f = g ? 1 : -1,
                                        m = a.defaultVMetrics,
                                        b = n * s.fontMatrix[0],
                                        A = 0;
                                    for (let t of e) {
                                        let e, i, r;
                                        if (null === t) {
                                            A += u * c;
                                            continue
                                        }
                                        if ("number" == typeof t) {
                                            A += f * t * n / 1e3;
                                            continue
                                        }
                                        let l = (t.isSpace ? c : 0) + d,
                                            h = t.fontChar,
                                            p = t.width;
                                        if (g) {
                                            let s;
                                            let r = t.vmetric || m;
                                            s = -(s = t.vmetric ? r[1] : .5 * p) * b;
                                            let a = r[2] * b;
                                            p = r ? -r[0] : p, e = s / o, i = (A + a) / o
                                        } else e = A / o, i = 0;
                                        (t.isInFont || a.missingFile) && (s.xcoords.push(s.x + e), g && s.ycoords.push(-s.y + i), s.tspan.textContent += h), A += r = g ? p * b - l * u : p * b + l * u
                                    }
                                    s.tspan.setAttributeNS(null, "x", s.xcoords.map(l).join(" ")), g ? s.tspan.setAttributeNS(null, "y", s.ycoords.map(l).join(" ")) : s.tspan.setAttributeNS(null, "y", l(-s.y)), g ? s.y -= A : s.x += A * p, s.tspan.setAttributeNS(null, "font-family", s.fontFamily), s.tspan.setAttributeNS(null, "font-size", `${l(s.fontSize)}px`), s.fontStyle !== t.fontStyle && s.tspan.setAttributeNS(null, "font-style", s.fontStyle), s.fontWeight !== t.fontWeight && s.tspan.setAttributeNS(null, "font-weight", s.fontWeight);
                                    let v = s.textRenderingMode & r.TextRenderingMode.FILL_STROKE_MASK;
                                    if (v === r.TextRenderingMode.FILL || v === r.TextRenderingMode.FILL_STROKE ? (s.fillColor !== t.fillColor && s.tspan.setAttributeNS(null, "fill", s.fillColor), s.fillAlpha < 1 && s.tspan.setAttributeNS(null, "fill-opacity", s.fillAlpha)) : s.textRenderingMode === r.TextRenderingMode.ADD_TO_PATH ? s.tspan.setAttributeNS(null, "fill", "transparent") : s.tspan.setAttributeNS(null, "fill", "none"), v === r.TextRenderingMode.STROKE || v === r.TextRenderingMode.FILL_STROKE) {
                                        let t = 1 / (s.textMatrixScale || 1);
                                        this._setStrokeAttributes(s.tspan, t)
                                    }
                                    let y = s.textMatrix;
                                    0 !== s.textRise && (y = y.slice(), y[5] += s.textRise), s.txtElement.setAttributeNS(null, "transform", `${h(y)} scale(${l(p)}, -1)`), s.txtElement.setAttributeNS(i, "xml:space", "preserve"), s.txtElement.append(s.tspan), s.txtgrp.append(s.txtElement), this._ensureTransformGroup().append(s.txtElement)
                                }
                                setLeadingMoveText(t, e) {
                                    this.setLeading(-e), this.moveText(t, e)
                                }
                                addFontStyle(t) {
                                    if (!t.data) throw Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
                                    this.cssStyle || (this.cssStyle = this.svgFactory.createElement("svg:style"), this.cssStyle.setAttributeNS(null, "type", "text/css"), this.defs.append(this.cssStyle));
                                    let e = p(t.data, t.mimetype, this.forceDataSchema);
                                    this.cssStyle.textContent += `@font-face { font-family: "${t.loadedName}"; src: url(${e}); }
`
                                }
                                setFont(t) {
                                    let e = this.current,
                                        i = this.commonObjs.get(t[0]),
                                        s = t[1];
                                    e.font = i, !this.embedFonts || i.missingFile || this.embeddedFonts[i.loadedName] || (this.addFontStyle(i), this.embeddedFonts[i.loadedName] = i), e.fontMatrix = i.fontMatrix || r.FONT_IDENTITY_MATRIX;
                                    let a = "normal";
                                    i.black ? a = "900" : i.bold && (a = "bold");
                                    let n = i.italic ? "italic" : "normal";
                                    s < 0 ? (s = -s, e.fontDirection = -1) : e.fontDirection = 1, e.fontSize = s, e.fontFamily = i.loadedName, e.fontWeight = a, e.fontStyle = n, e.tspan = this.svgFactory.createElement("svg:tspan"), e.tspan.setAttributeNS(null, "y", l(-e.y)), e.xcoords = [], e.ycoords = []
                                }
                                endText() {
                                    let t = this.current;
                                    t.textRenderingMode & r.TextRenderingMode.ADD_TO_PATH_FLAG && t.txtElement?.hasChildNodes() && (t.element = t.txtElement, this.clip("nonzero"), this.endPath())
                                }
                                setLineWidth(t) {
                                    t > 0 && (this.current.lineWidth = t)
                                }
                                setLineCap(t) {
                                    this.current.lineCap = c[t]
                                }
                                setLineJoin(t) {
                                    this.current.lineJoin = u[t]
                                }
                                setMiterLimit(t) {
                                    this.current.miterLimit = t
                                }
                                setStrokeAlpha(t) {
                                    this.current.strokeAlpha = t
                                }
                                setStrokeRGBColor(t, e, i) {
                                    this.current.strokeColor = r.Util.makeHexColor(t, e, i)
                                }
                                setFillAlpha(t) {
                                    this.current.fillAlpha = t
                                }
                                setFillRGBColor(t, e, i) {
                                    this.current.fillColor = r.Util.makeHexColor(t, e, i), this.current.tspan = this.svgFactory.createElement("svg:tspan"), this.current.xcoords = [], this.current.ycoords = []
                                }
                                setStrokeColorN(t) {
                                    this.current.strokeColor = this._makeColorN_Pattern(t)
                                }
                                setFillColorN(t) {
                                    this.current.fillColor = this._makeColorN_Pattern(t)
                                }
                                shadingFill(t) {
                                    let e = this.viewport.width,
                                        i = this.viewport.height,
                                        s = r.Util.inverseTransform(this.transformMatrix),
                                        a = r.Util.applyTransform([0, 0], s),
                                        n = r.Util.applyTransform([0, i], s),
                                        o = r.Util.applyTransform([e, 0], s),
                                        l = r.Util.applyTransform([e, i], s),
                                        h = Math.min(a[0], n[0], o[0], l[0]),
                                        d = Math.min(a[1], n[1], o[1], l[1]),
                                        c = Math.max(a[0], n[0], o[0], l[0]),
                                        u = Math.max(a[1], n[1], o[1], l[1]),
                                        p = this.svgFactory.createElement("svg:rect");
                                    p.setAttributeNS(null, "x", h), p.setAttributeNS(null, "y", d), p.setAttributeNS(null, "width", c - h), p.setAttributeNS(null, "height", u - d), p.setAttributeNS(null, "fill", this._makeShadingPattern(t)), this.current.fillAlpha < 1 && p.setAttributeNS(null, "fill-opacity", this.current.fillAlpha), this._ensureTransformGroup().append(p)
                                }
                                _makeColorN_Pattern(t) {
                                    return "TilingPattern" === t[0] ? this._makeTilingPattern(t) : this._makeShadingPattern(t)
                                }
                                _makeTilingPattern(t) {
                                    let e = t[1],
                                        i = t[2],
                                        s = t[3] || r.IDENTITY_MATRIX,
                                        [a, n, o, l] = t[4],
                                        h = t[5],
                                        d = t[6],
                                        c = t[7],
                                        u = `shading${A++}`,
                                        [p, g, f, m] = r.Util.normalizeRect([...r.Util.applyTransform([a, n], s), ...r.Util.applyTransform([o, l], s)]),
                                        [b, v] = r.Util.singularValueDecompose2dScale(s),
                                        y = h * b,
                                        _ = d * v,
                                        S = this.svgFactory.createElement("svg:pattern");
                                    S.setAttributeNS(null, "id", u), S.setAttributeNS(null, "patternUnits", "userSpaceOnUse"), S.setAttributeNS(null, "width", y), S.setAttributeNS(null, "height", _), S.setAttributeNS(null, "x", `${p}`), S.setAttributeNS(null, "y", `${g}`);
                                    let C = this.svg,
                                        x = this.transformMatrix,
                                        E = this.current.fillColor,
                                        T = this.current.strokeColor,
                                        P = this.svgFactory.create(f - p, m - g);
                                    if (this.svg = P, this.transformMatrix = s, 2 === c) {
                                        let t = r.Util.makeHexColor(...e);
                                        this.current.fillColor = t, this.current.strokeColor = t
                                    }
                                    return this.executeOpTree(this.convertOpList(i)), this.svg = C, this.transformMatrix = x, this.current.fillColor = E, this.current.strokeColor = T, S.append(P.childNodes[0]), this.defs.append(S), `url(#${u})`
                                }
                                _makeShadingPattern(t) {
                                    switch ("string" == typeof t && (t = this.objs.get(t)), t[0]) {
                                        case "RadialAxial":
                                            let e;
                                            let i = `shading${A++}`,
                                                s = t[3];
                                            switch (t[1]) {
                                                case "axial":
                                                    let a = t[4],
                                                        n = t[5];
                                                    (e = this.svgFactory.createElement("svg:linearGradient")).setAttributeNS(null, "id", i), e.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), e.setAttributeNS(null, "x1", a[0]), e.setAttributeNS(null, "y1", a[1]), e.setAttributeNS(null, "x2", n[0]), e.setAttributeNS(null, "y2", n[1]);
                                                    break;
                                                case "radial":
                                                    let o = t[4],
                                                        l = t[5],
                                                        h = t[6],
                                                        d = t[7];
                                                    (e = this.svgFactory.createElement("svg:radialGradient")).setAttributeNS(null, "id", i), e.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), e.setAttributeNS(null, "cx", l[0]), e.setAttributeNS(null, "cy", l[1]), e.setAttributeNS(null, "r", d), e.setAttributeNS(null, "fx", o[0]), e.setAttributeNS(null, "fy", o[1]), e.setAttributeNS(null, "fr", h);
                                                    break;
                                                default:
                                                    throw Error(`Unknown RadialAxial type: ${t[1]}`)
                                            }
                                            for (let t of s) {
                                                let i = this.svgFactory.createElement("svg:stop");
                                                i.setAttributeNS(null, "offset", t[0]), i.setAttributeNS(null, "stop-color", t[1]), e.append(i)
                                            }
                                            return this.defs.append(e), `url(#${i})`;
                                        case "Mesh":
                                            return (0, r.warn)("Unimplemented pattern Mesh"), null;
                                        case "Dummy":
                                            return "hotpink";
                                        default:
                                            throw Error(`Unknown IR type: ${t[0]}`)
                                    }
                                }
                                setDash(t, e) {
                                    this.current.dashArray = t, this.current.dashPhase = e
                                }
                                constructPath(t, e) {
                                    let i = this.current,
                                        s = i.x,
                                        a = i.y,
                                        n = [],
                                        o = 0;
                                    for (let i of t) switch (0 | i) {
                                        case r.OPS.rectangle:
                                            s = e[o++], a = e[o++];
                                            let t = e[o++],
                                                h = e[o++],
                                                d = s + t,
                                                c = a + h;
                                            n.push("M", l(s), l(a), "L", l(d), l(a), "L", l(d), l(c), "L", l(s), l(c), "Z");
                                            break;
                                        case r.OPS.moveTo:
                                            s = e[o++], a = e[o++], n.push("M", l(s), l(a));
                                            break;
                                        case r.OPS.lineTo:
                                            s = e[o++], a = e[o++], n.push("L", l(s), l(a));
                                            break;
                                        case r.OPS.curveTo:
                                            s = e[o + 4], a = e[o + 5], n.push("C", l(e[o]), l(e[o + 1]), l(e[o + 2]), l(e[o + 3]), l(s), l(a)), o += 6;
                                            break;
                                        case r.OPS.curveTo2:
                                            n.push("C", l(s), l(a), l(e[o]), l(e[o + 1]), l(e[o + 2]), l(e[o + 3])), s = e[o + 2], a = e[o + 3], o += 4;
                                            break;
                                        case r.OPS.curveTo3:
                                            s = e[o + 2], a = e[o + 3], n.push("C", l(e[o]), l(e[o + 1]), l(s), l(a), l(s), l(a)), o += 4;
                                            break;
                                        case r.OPS.closePath:
                                            n.push("Z")
                                    }
                                    n = n.join(" "), i.path && t.length > 0 && t[0] !== r.OPS.rectangle && t[0] !== r.OPS.moveTo ? n = i.path.getAttributeNS(null, "d") + n : (i.path = this.svgFactory.createElement("svg:path"), this._ensureTransformGroup().append(i.path)), i.path.setAttributeNS(null, "d", n), i.path.setAttributeNS(null, "fill", "none"), i.element = i.path, i.setCurrentPoint(s, a)
                                }
                                endPath() {
                                    let t = this.current;
                                    if (t.path = null, !this.pendingClip) return;
                                    if (!t.element) {
                                        this.pendingClip = null;
                                        return
                                    }
                                    let e = `clippath${m++}`,
                                        i = this.svgFactory.createElement("svg:clipPath");
                                    i.setAttributeNS(null, "id", e), i.setAttributeNS(null, "transform", h(this.transformMatrix));
                                    let s = t.element.cloneNode(!0);
                                    if ("evenodd" === this.pendingClip ? s.setAttributeNS(null, "clip-rule", "evenodd") : s.setAttributeNS(null, "clip-rule", "nonzero"), this.pendingClip = null, i.append(s), this.defs.append(i), t.activeClipUrl) {
                                        for (let e of (t.clipGroup = null, this.extraStack)) e.clipGroup = null;
                                        i.setAttributeNS(null, "clip-path", t.activeClipUrl)
                                    }
                                    t.activeClipUrl = `url(#${e})`, this.tgrp = null
                                }
                                clip(t) {
                                    this.pendingClip = t
                                }
                                closePath() {
                                    let t = this.current;
                                    if (t.path) {
                                        let e = `${t.path.getAttributeNS(null,"d")}Z`;
                                        t.path.setAttributeNS(null, "d", e)
                                    }
                                }
                                setLeading(t) {
                                    this.current.leading = -t
                                }
                                setTextRise(t) {
                                    this.current.textRise = t
                                }
                                setTextRenderingMode(t) {
                                    this.current.textRenderingMode = t
                                }
                                setHScale(t) {
                                    this.current.textHScale = t / 100
                                }
                                setRenderingIntent(t) {}
                                setFlatness(t) {}
                                setGState(t) {
                                    for (let [e, i] of t) switch (e) {
                                        case "LW":
                                            this.setLineWidth(i);
                                            break;
                                        case "LC":
                                            this.setLineCap(i);
                                            break;
                                        case "LJ":
                                            this.setLineJoin(i);
                                            break;
                                        case "ML":
                                            this.setMiterLimit(i);
                                            break;
                                        case "D":
                                            this.setDash(i[0], i[1]);
                                            break;
                                        case "RI":
                                            this.setRenderingIntent(i);
                                            break;
                                        case "FL":
                                            this.setFlatness(i);
                                            break;
                                        case "Font":
                                            this.setFont(i);
                                            break;
                                        case "CA":
                                            this.setStrokeAlpha(i);
                                            break;
                                        case "ca":
                                            this.setFillAlpha(i);
                                            break;
                                        default:
                                            (0, r.warn)(`Unimplemented graphic state operator ${e}`)
                                    }
                                }
                                fill() {
                                    let t = this.current;
                                    t.element && (t.element.setAttributeNS(null, "fill", t.fillColor), t.element.setAttributeNS(null, "fill-opacity", t.fillAlpha), this.endPath())
                                }
                                stroke() {
                                    let t = this.current;
                                    t.element && (this._setStrokeAttributes(t.element), t.element.setAttributeNS(null, "fill", "none"), this.endPath())
                                }
                                _setStrokeAttributes(t, e = 1) {
                                    let i = this.current,
                                        s = i.dashArray;
                                    1 !== e && s.length > 0 && (s = s.map(function(t) {
                                        return e * t
                                    })), t.setAttributeNS(null, "stroke", i.strokeColor), t.setAttributeNS(null, "stroke-opacity", i.strokeAlpha), t.setAttributeNS(null, "stroke-miterlimit", l(i.miterLimit)), t.setAttributeNS(null, "stroke-linecap", i.lineCap), t.setAttributeNS(null, "stroke-linejoin", i.lineJoin), t.setAttributeNS(null, "stroke-width", l(e * i.lineWidth) + "px"), t.setAttributeNS(null, "stroke-dasharray", s.map(l).join(" ")), t.setAttributeNS(null, "stroke-dashoffset", l(e * i.dashPhase) + "px")
                                }
                                eoFill() {
                                    this.current.element?.setAttributeNS(null, "fill-rule", "evenodd"), this.fill()
                                }
                                fillStroke() {
                                    this.stroke(), this.fill()
                                }
                                eoFillStroke() {
                                    this.current.element?.setAttributeNS(null, "fill-rule", "evenodd"), this.fillStroke()
                                }
                                closeStroke() {
                                    this.closePath(), this.stroke()
                                }
                                closeFillStroke() {
                                    this.closePath(), this.fillStroke()
                                }
                                closeEOFillStroke() {
                                    this.closePath(), this.eoFillStroke()
                                }
                                paintSolidColorImageMask() {
                                    let t = this.svgFactory.createElement("svg:rect");
                                    t.setAttributeNS(null, "x", "0"), t.setAttributeNS(null, "y", "0"), t.setAttributeNS(null, "width", "1px"), t.setAttributeNS(null, "height", "1px"), t.setAttributeNS(null, "fill", this.current.fillColor), this._ensureTransformGroup().append(t)
                                }
                                paintImageXObject(t) {
                                    let e = this.getObject(t);
                                    if (!e) {
                                        (0, r.warn)(`Dependent image with object ID ${t} is not ready yet`);
                                        return
                                    }
                                    this.paintInlineImageXObject(e)
                                }
                                paintInlineImageXObject(t, e) {
                                    let i = t.width,
                                        s = t.height,
                                        r = g(t, this.forceDataSchema, !!e),
                                        a = this.svgFactory.createElement("svg:rect");
                                    a.setAttributeNS(null, "x", "0"), a.setAttributeNS(null, "y", "0"), a.setAttributeNS(null, "width", l(i)), a.setAttributeNS(null, "height", l(s)), this.current.element = a, this.clip("nonzero");
                                    let n = this.svgFactory.createElement("svg:image");
                                    n.setAttributeNS(d, "xlink:href", r), n.setAttributeNS(null, "x", "0"), n.setAttributeNS(null, "y", l(-s)), n.setAttributeNS(null, "width", l(i) + "px"), n.setAttributeNS(null, "height", l(s) + "px"), n.setAttributeNS(null, "transform", `scale(${l(1/i)} ${l(-1/s)})`), e ? e.append(n) : this._ensureTransformGroup().append(n)
                                }
                                paintImageMaskXObject(t) {
                                    let e = this.getObject(t.data, t);
                                    if (e.bitmap) {
                                        (0, r.warn)("paintImageMaskXObject: ImageBitmap support is not implemented, ensure that the `isOffscreenCanvasSupported` API parameter is disabled.");
                                        return
                                    }
                                    let i = this.current,
                                        s = e.width,
                                        a = e.height,
                                        n = i.fillColor;
                                    i.maskId = `mask${b++}`;
                                    let o = this.svgFactory.createElement("svg:mask");
                                    o.setAttributeNS(null, "id", i.maskId);
                                    let h = this.svgFactory.createElement("svg:rect");
                                    h.setAttributeNS(null, "x", "0"), h.setAttributeNS(null, "y", "0"), h.setAttributeNS(null, "width", l(s)), h.setAttributeNS(null, "height", l(a)), h.setAttributeNS(null, "fill", n), h.setAttributeNS(null, "mask", `url(#${i.maskId})`), this.defs.append(o), this._ensureTransformGroup().append(h), this.paintInlineImageXObject(e, o)
                                }
                                paintFormXObjectBegin(t, e) {
                                    if (Array.isArray(t) && 6 === t.length && this.transform(t[0], t[1], t[2], t[3], t[4], t[5]), e) {
                                        let t = e[2] - e[0],
                                            i = e[3] - e[1],
                                            s = this.svgFactory.createElement("svg:rect");
                                        s.setAttributeNS(null, "x", e[0]), s.setAttributeNS(null, "y", e[1]), s.setAttributeNS(null, "width", l(t)), s.setAttributeNS(null, "height", l(i)), this.current.element = s, this.clip("nonzero"), this.endPath()
                                    }
                                }
                                paintFormXObjectEnd() {}
                                _initialize(t) {
                                    let e = this.svgFactory.create(t.width, t.height),
                                        i = this.svgFactory.createElement("svg:defs");
                                    e.append(i), this.defs = i;
                                    let s = this.svgFactory.createElement("svg:g");
                                    return s.setAttributeNS(null, "transform", h(t.transform)), e.append(s), this.svg = s, e
                                }
                                _ensureClipGroup() {
                                    if (!this.current.clipGroup) {
                                        let t = this.svgFactory.createElement("svg:g");
                                        t.setAttributeNS(null, "clip-path", this.current.activeClipUrl), this.svg.append(t), this.current.clipGroup = t
                                    }
                                    return this.current.clipGroup
                                }
                                _ensureTransformGroup() {
                                    return this.tgrp || (this.tgrp = this.svgFactory.createElement("svg:g"), this.tgrp.setAttributeNS(null, "transform", h(this.transformMatrix)), this.current.activeClipUrl ? this._ensureClipGroup().append(this.tgrp) : this.svg.append(this.tgrp)), this.tgrp
                                }
                            }
                        }
                    }],
                    __webpack_module_cache__ = {};

                function __w_pdfjs_require__(t) {
                    var e = __webpack_module_cache__[t];
                    if (void 0 !== e) return e.exports;
                    var i = __webpack_module_cache__[t] = {
                        exports: {}
                    };
                    return __webpack_modules__[t](i, i.exports, __w_pdfjs_require__), i.exports
                }
                var __nested_webpack_exports__ = {};
                return (() => {
                    var t = __nested_webpack_exports__;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), Object.defineProperty(t, "AbortException", {
                        enumerable: !0,
                        get: function() {
                            return e.AbortException
                        }
                    }), Object.defineProperty(t, "AnnotationEditorLayer", {
                        enumerable: !0,
                        get: function() {
                            return a.AnnotationEditorLayer
                        }
                    }), Object.defineProperty(t, "AnnotationEditorParamsType", {
                        enumerable: !0,
                        get: function() {
                            return e.AnnotationEditorParamsType
                        }
                    }), Object.defineProperty(t, "AnnotationEditorType", {
                        enumerable: !0,
                        get: function() {
                            return e.AnnotationEditorType
                        }
                    }), Object.defineProperty(t, "AnnotationEditorUIManager", {
                        enumerable: !0,
                        get: function() {
                            return n.AnnotationEditorUIManager
                        }
                    }), Object.defineProperty(t, "AnnotationLayer", {
                        enumerable: !0,
                        get: function() {
                            return o.AnnotationLayer
                        }
                    }), Object.defineProperty(t, "AnnotationMode", {
                        enumerable: !0,
                        get: function() {
                            return e.AnnotationMode
                        }
                    }), Object.defineProperty(t, "CMapCompressionType", {
                        enumerable: !0,
                        get: function() {
                            return e.CMapCompressionType
                        }
                    }), Object.defineProperty(t, "FeatureTest", {
                        enumerable: !0,
                        get: function() {
                            return e.FeatureTest
                        }
                    }), Object.defineProperty(t, "GlobalWorkerOptions", {
                        enumerable: !0,
                        get: function() {
                            return l.GlobalWorkerOptions
                        }
                    }), Object.defineProperty(t, "InvalidPDFException", {
                        enumerable: !0,
                        get: function() {
                            return e.InvalidPDFException
                        }
                    }), Object.defineProperty(t, "MissingPDFException", {
                        enumerable: !0,
                        get: function() {
                            return e.MissingPDFException
                        }
                    }), Object.defineProperty(t, "OPS", {
                        enumerable: !0,
                        get: function() {
                            return e.OPS
                        }
                    }), Object.defineProperty(t, "PDFDataRangeTransport", {
                        enumerable: !0,
                        get: function() {
                            return i.PDFDataRangeTransport
                        }
                    }), Object.defineProperty(t, "PDFDateString", {
                        enumerable: !0,
                        get: function() {
                            return s.PDFDateString
                        }
                    }), Object.defineProperty(t, "PDFWorker", {
                        enumerable: !0,
                        get: function() {
                            return i.PDFWorker
                        }
                    }), Object.defineProperty(t, "PasswordResponses", {
                        enumerable: !0,
                        get: function() {
                            return e.PasswordResponses
                        }
                    }), Object.defineProperty(t, "PermissionFlag", {
                        enumerable: !0,
                        get: function() {
                            return e.PermissionFlag
                        }
                    }), Object.defineProperty(t, "PixelsPerInch", {
                        enumerable: !0,
                        get: function() {
                            return s.PixelsPerInch
                        }
                    }), Object.defineProperty(t, "PromiseCapability", {
                        enumerable: !0,
                        get: function() {
                            return e.PromiseCapability
                        }
                    }), Object.defineProperty(t, "RenderingCancelledException", {
                        enumerable: !0,
                        get: function() {
                            return s.RenderingCancelledException
                        }
                    }), Object.defineProperty(t, "SVGGraphics", {
                        enumerable: !0,
                        get: function() {
                            return h.SVGGraphics
                        }
                    }), Object.defineProperty(t, "UnexpectedResponseException", {
                        enumerable: !0,
                        get: function() {
                            return e.UnexpectedResponseException
                        }
                    }), Object.defineProperty(t, "Util", {
                        enumerable: !0,
                        get: function() {
                            return e.Util
                        }
                    }), Object.defineProperty(t, "VerbosityLevel", {
                        enumerable: !0,
                        get: function() {
                            return e.VerbosityLevel
                        }
                    }), Object.defineProperty(t, "XfaLayer", {
                        enumerable: !0,
                        get: function() {
                            return d.XfaLayer
                        }
                    }), Object.defineProperty(t, "build", {
                        enumerable: !0,
                        get: function() {
                            return i.build
                        }
                    }), Object.defineProperty(t, "createValidAbsoluteUrl", {
                        enumerable: !0,
                        get: function() {
                            return e.createValidAbsoluteUrl
                        }
                    }), Object.defineProperty(t, "getDocument", {
                        enumerable: !0,
                        get: function() {
                            return i.getDocument
                        }
                    }), Object.defineProperty(t, "getFilenameFromUrl", {
                        enumerable: !0,
                        get: function() {
                            return s.getFilenameFromUrl
                        }
                    }), Object.defineProperty(t, "getPdfFilenameFromUrl", {
                        enumerable: !0,
                        get: function() {
                            return s.getPdfFilenameFromUrl
                        }
                    }), Object.defineProperty(t, "getXfaPageViewport", {
                        enumerable: !0,
                        get: function() {
                            return s.getXfaPageViewport
                        }
                    }), Object.defineProperty(t, "isDataScheme", {
                        enumerable: !0,
                        get: function() {
                            return s.isDataScheme
                        }
                    }), Object.defineProperty(t, "isPdfFile", {
                        enumerable: !0,
                        get: function() {
                            return s.isPdfFile
                        }
                    }), Object.defineProperty(t, "loadScript", {
                        enumerable: !0,
                        get: function() {
                            return s.loadScript
                        }
                    }), Object.defineProperty(t, "normalizeUnicode", {
                        enumerable: !0,
                        get: function() {
                            return e.normalizeUnicode
                        }
                    }), Object.defineProperty(t, "renderTextLayer", {
                        enumerable: !0,
                        get: function() {
                            return r.renderTextLayer
                        }
                    }), Object.defineProperty(t, "setLayerDimensions", {
                        enumerable: !0,
                        get: function() {
                            return s.setLayerDimensions
                        }
                    }), Object.defineProperty(t, "shadow", {
                        enumerable: !0,
                        get: function() {
                            return e.shadow
                        }
                    }), Object.defineProperty(t, "updateTextLayer", {
                        enumerable: !0,
                        get: function() {
                            return r.updateTextLayer
                        }
                    }), Object.defineProperty(t, "version", {
                        enumerable: !0,
                        get: function() {
                            return i.version
                        }
                    });
                    var e = __w_pdfjs_require__(1),
                        i = __w_pdfjs_require__(2),
                        s = __w_pdfjs_require__(6),
                        r = __w_pdfjs_require__(26),
                        a = __w_pdfjs_require__(27),
                        n = __w_pdfjs_require__(5),
                        o = __w_pdfjs_require__(30),
                        l = __w_pdfjs_require__(14),
                        h = __w_pdfjs_require__(33),
                        d = __w_pdfjs_require__(32)
                })(), __nested_webpack_exports__
            })())
        }
    }
]);