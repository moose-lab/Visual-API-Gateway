try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4d5085f2-b187-40c8-a621-d5a528c79abe", e._sentryDebugIdIdentifier = "sentry-dbid-4d5085f2-b187-40c8-a621-d5a528c79abe")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6116], {
        72144: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return nM
                }
            });
            var l = n(57437),
                r = n(2265),
                i = n(33145),
                a = n(27648),
                s = n(99376),
                o = n(73781),
                d = n(55112),
                c = n(3311),
                u = n(30698),
                m = n(91141),
                f = n(54353),
                p = n(57635),
                h = n.n(p),
                g = n(87769),
                x = n(90945),
                v = n(31349),
                b = n(73198),
                y = n(60026),
                w = n(80804),
                j = n(51817),
                N = n(32489),
                k = n(33276),
                C = n(59426),
                S = n(48736),
                I = n(40875),
                E = n(53113),
                _ = n(76858),
                z = n(49322),
                F = n(61094),
                M = n(20265),
                T = n(29374),
                D = n(54887),
                A = n(14438),
                U = n(49360),
                R = n(31604),
                L = n(10586),
                O = n(96647),
                P = n(48661),
                Z = n(48919),
                J = n(94508),
                q = n(8102);
            let W = n(31653).f;
            var V = n(62869),
                B = n(23518),
                K = n(26110),
                H = n(84190),
                $ = n(95186),
                Y = n(26815),
                G = n(39481),
                X = n(19378),
                Q = n(76818),
                ee = n(81103),
                et = n(46878),
                en = n(85285),
                el = n(58239),
                er = n(7999);

            function ei(e) {
                let {
                    open: t,
                    onOpenChange: n,
                    title: r,
                    sharedChatUrl: i,
                    onTryClick: a,
                    tryButtonLabel: s = "Try skill",
                    tryButtonDisabled: o = !1
                } = e, d = i.length > 0, c = d ? function(e) {
                    try {
                        let t = new URL(e);
                        return t.pathname.startsWith("/c/") && (t.pathname = "/embed" + t.pathname), t.searchParams.set("lockdown", "1"), t.toString()
                    } catch (t) {
                        return e
                    }
                }(i) : i, u = d && i.includes("dev-chat.vlm.run");
                return (0, l.jsx)(K.Vq, {
                    open: t,
                    onOpenChange: n,
                    children: (0, l.jsx)(K.cZ, {
                        className: "shared-chat-preview-dialog h-[80vh] w-[min(95vw,1100px)] max-w-6xl overflow-hidden p-0",
                        hideCloseButton: !0,
                        children: (0, l.jsx)("div", {
                            className: "flex h-full flex-col",
                            children: (0, l.jsxs)("div", {
                                className: "relative flex-1 bg-muted",
                                children: [d ? u ? (0, l.jsx)("iframe", {
                                    src: c,
                                    title: r,
                                    className: "size-full border-0",
                                    allow: "clipboard-write; fullscreen *; geolocation *; microphone *; camera *; autoplay *; encrypted-media *; storage-access *"
                                }) : (0, l.jsx)("iframe", {
                                    src: c,
                                    title: r,
                                    className: "size-full border-0",
                                    sandbox: "allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
                                }) : (0, l.jsxs)("div", {
                                    className: "flex size-full flex-col items-center justify-center gap-3 text-muted-foreground",
                                    children: [(0, l.jsx)("p", {
                                        className: "text-lg font-medium",
                                        children: r
                                    }), (0, l.jsx)("p", {
                                        className: "text-sm",
                                        children: "No shared chat preview available for this skill yet."
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "pointer-events-none absolute inset-0",
                                    children: (0, l.jsx)("div", {
                                        className: "pointer-events-auto absolute bottom-4 right-4 flex gap-2",
                                        children: (0, l.jsx)(V.z, {
                                            onClick: a,
                                            disabled: o,
                                            className: "rounded-full",
                                            children: s
                                        })
                                    })
                                })]
                            })
                        })
                    })
                })
            }
            var ea = n(48263);
            let es = '<g data-annotation-id="building-a" data-shape="box"><rect x="0.05" y="0.1" width="0.35" height="0.4" fill="none" stroke="#ea580c" stroke-width="0.003"/></g><g data-annotation-id="building-b" data-shape="box"><rect x="0.55" y="0.08" width="0.4" height="0.35" fill="none" stroke="#2563eb" stroke-width="0.003"/></g><g data-annotation-id="parking" data-shape="box"><rect x="0.1" y="0.6" width="0.5" height="0.3" fill="none" stroke="#9333ea" stroke-width="0.003"/></g><g data-annotation-id="loading-dock" data-shape="box"><rect x="0.42" y="0.35" width="0.12" height="0.15" fill="none" stroke="#16a34a" stroke-width="0.003"/></g><g data-annotation-id="entry-gate" data-shape="box"><rect x="0.7" y="0.85" width="0.08" height="0.06" fill="none" stroke="#dc2626" stroke-width="0.003"/></g>',
                eo = '<g data-annotation-id="cg-box" data-shape="box"><rect x="0.06" y="0.08" width="0.22" height="0.18" fill="none" stroke="#2563eb" stroke-width="0.003"/></g><g data-annotation-id="cg-poly" data-shape="polygon"><polygon points="0.36,0.13 0.72,0.15 0.7,0.38 0.38,0.36" fill="#16a34a" fill-opacity="0.16" stroke="#16a34a" stroke-width="0.003"/></g><g data-annotation-id="cg-path" data-shape="path"><path d="M 0.1 0.55 Q 0.35 0.45 0.55 0.58 T 0.92 0.55" fill="none" stroke="#ca8a04" stroke-width="0.003"/></g>',
                ed = '<g data-annotation-id="header" data-shape="box"><rect x="0.08" y="0.03" width="0.84" height="0.08" fill="none" stroke="#2563eb" stroke-width="0.003"/></g><g data-annotation-id="body-text" data-shape="box"><rect x="0.08" y="0.22" width="0.84" height="0.45" fill="none" stroke="#16a34a" stroke-width="0.003"/></g>',
                ec = '<g data-annotation-id="truck-1" data-timestamp="0" data-end-timestamp="3"><rect x="0.1" y="0.35" width="0.4" height="0.35" fill="none" stroke="#ef4444" stroke-width="0.003"/></g>',
                eu = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
                em = "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
                ef = "/samples/sample-video.mp4",
                ep = [{
                    id: "building-a",
                    label: "Warehouse A",
                    color: "#ea580c",
                    spatialKind: "box",
                    confidence: .96
                }, {
                    id: "building-b",
                    label: "Warehouse B",
                    color: "#2563eb",
                    spatialKind: "box",
                    confidence: .93
                }, {
                    id: "parking",
                    label: "Parking Lot",
                    color: "#9333ea",
                    spatialKind: "box",
                    confidence: .91
                }, {
                    id: "loading-dock",
                    label: "Loading Dock",
                    color: "#16a34a",
                    spatialKind: "box",
                    confidence: .87
                }, {
                    id: "entry-gate",
                    label: "Entry Gate",
                    color: "#dc2626",
                    spatialKind: "box",
                    confidence: .94
                }],
                eh = [{
                    id: "cg-box",
                    label: "Bounding box",
                    color: "#2563eb",
                    spatialKind: "box",
                    confidence: .94
                }, {
                    id: "cg-poly",
                    label: "Polygon region",
                    color: "#16a34a",
                    spatialKind: "polygon",
                    confidence: .91
                }, {
                    id: "cg-path",
                    label: "Codegen path",
                    color: "#ca8a04",
                    spatialKind: "path",
                    confidence: .88
                }],
                eg = [{
                    id: "detections",
                    label: "Bounding boxes",
                    annotationIds: ["cg-box"]
                }, {
                    id: "regions",
                    label: "Polygon regions",
                    annotationIds: ["cg-poly"]
                }, {
                    id: "paths",
                    label: "SVG paths",
                    annotationIds: ["cg-path"]
                }],
                ex = eh.map(e => ({
                    ...e,
                    page: 0
                })),
                ev = [{
                    id: "truck-1",
                    label: "Delivery Truck",
                    color: "#ef4444",
                    spatialKind: "box",
                    timestamp: 0,
                    endTimestamp: 3,
                    confidence: .94
                }, {
                    id: "worker-a-1",
                    label: "Worker A",
                    color: "#3b82f6",
                    spatialKind: "box",
                    timestamp: 1,
                    endTimestamp: 3.5,
                    confidence: .89
                }],
                eb = [{
                    id: "truck",
                    label: "Truck",
                    annotationIds: ["truck-1"]
                }, {
                    id: "worker-a",
                    label: "Worker A",
                    annotationIds: ["worker-a-1"]
                }],
                ey = [{
                    id: "grid-1",
                    label: "Warehouse aerial",
                    startTime: 0,
                    thumbnailUrl: eu
                }, {
                    id: "grid-2",
                    label: "Street scene",
                    startTime: 0,
                    thumbnailUrl: em
                }, {
                    id: "grid-3",
                    label: "Approach frame",
                    startTime: .2,
                    thumbnailUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=320&q=80"
                }, {
                    id: "grid-4",
                    label: "Detail crop",
                    startTime: .5,
                    thumbnailUrl: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=320&q=80"
                }, {
                    id: "grid-5",
                    label: "Satellite view",
                    startTime: 0,
                    thumbnailUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                }, {
                    id: "grid-6",
                    label: "Night warehouse",
                    startTime: 0,
                    thumbnailUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80"
                }],
                ew = [{
                    id: "dual-a",
                    label: "Image A",
                    startTime: 0,
                    thumbnailUrl: eu
                }, {
                    id: "dual-b",
                    label: "Image B",
                    startTime: 0,
                    thumbnailUrl: em
                }];

            function ej(e) {
                return {
                    version: 1,
                    annotations: [],
                    tracks: [],
                    clips: [],
                    transcriptSegments: [],
                    evidenceItems: [],
                    ...e
                }
            }
            let eN = {
                    id: "image-and-description",
                    label: "Image and description",
                    description: "MediaCard hero + description. Chat uses preview_objects for the image URL; canvas fence adds the description block.",
                    mediaCard: {
                        type: "image",
                        src: eu,
                        title: "Warehouse Facility"
                    },
                    layout: {
                        version: 2,
                        rows: [{
                            id: "row-image-desc",
                            blocks: [{
                                id: "blk-image-desc",
                                kind: "expandable_video_description"
                            }]
                        }]
                    },
                    mediaContext: ej({
                        description: {
                            summary: "Warehouse aerial — loading docks and parking layout (fixture).",
                            metadataLine: "Image \xb7 fixture"
                        }
                    })
                },
                ek = {
                    id: "image-bounding-boxes",
                    label: "Image with bounding boxes",
                    description: "MediaCard with SVG overlay + detections table (catalog parity). Chat needs preview_objects plus fence media_context.",
                    mediaCard: {
                        type: "image",
                        title: "Warehouse Facility",
                        description: "Aerial view with detected structures and zones",
                        src: eu,
                        annotations: ep,
                        spatialOverlaySvgInner: es
                    },
                    layout: {
                        version: 2,
                        rows: [{
                            id: "row-image-table",
                            blocks: [{
                                id: "blk-image-table",
                                kind: "annotation_table"
                            }]
                        }]
                    },
                    mediaContext: ej({
                        annotations: ep,
                        tracks: [],
                        spatialOverlaySvgInner: es,
                        description: {
                            summary: "Aerial view with detected structures and zones"
                        }
                    })
                },
                eC = {
                    id: "video-bounding-boxes",
                    label: "Video with bounding boxes",
                    description: "Video hero, MOT timeline, and annotation table with temporal SVG groups.",
                    mediaCard: {
                        type: "video",
                        src: ef,
                        title: "Loading dock scene",
                        description: "Trucks, workers, and equipment tracked over time.",
                        annotations: ev,
                        tracks: eb,
                        spatialOverlaySvgInner: ec,
                        duration: 12
                    },
                    layout: {
                        version: 2,
                        rows: [{
                            id: "row-video-vp",
                            blocks: [{
                                id: "blk-video-vp",
                                kind: "video_viewport"
                            }]
                        }, {
                            id: "row-video-tl",
                            blocks: [{
                                id: "blk-video-tl",
                                kind: "video_timeline"
                            }]
                        }, {
                            id: "row-video-table",
                            blocks: [{
                                id: "blk-video-table",
                                kind: "annotation_table"
                            }]
                        }]
                    },
                    mediaContext: ej({
                        activeClip: {
                            id: "preset-video-clip",
                            label: "Sample video",
                            src: ef,
                            startTime: 0,
                            endTime: 12
                        },
                        duration: 12,
                        annotations: ev,
                        tracks: eb,
                        spatialOverlaySvgInner: ec,
                        description: {
                            summary: "Loading dock scene — trucks, workers, and equipment tracked over time."
                        }
                    })
                },
                eS = [eN, ek, eC, {
                    id: "document-bounding-boxes",
                    label: "Document with bounding boxes",
                    description: "MediaCard PDF viewer + field boxes. Canvas fence only carries the annotation table block.",
                    mediaCard: {
                        type: "document",
                        title: "Sample document",
                        description: "Extracted document structure fields",
                        src: "/samples/sample-document.pdf",
                        annotations: ex,
                        spatialOverlaySvgInner: ed,
                        pageCount: 1,
                        fileType: "PDF"
                    },
                    layout: {
                        version: 2,
                        rows: [{
                            id: "row-doc-table",
                            blocks: [{
                                id: "blk-doc-table",
                                kind: "annotation_table"
                            }]
                        }]
                    },
                    mediaContext: ej({
                        annotations: ex,
                        tracks: eg,
                        spatialOverlaySvgInner: ed,
                        description: {
                            summary: "Sample PDF — header, body, table, and page number regions."
                        }
                    })
                }, {
                    id: "image-grid",
                    label: "Image grid",
                    description: "Multiple still thumbnails in a grid (scene_evidence_mini_grid).",
                    layout: {
                        version: 2,
                        rows: [{
                            id: "row-grid",
                            blocks: [{
                                id: "blk-grid",
                                kind: "scene_evidence_mini_grid"
                            }]
                        }]
                    },
                    mediaContext: ej({
                        evidenceItems: ey,
                        description: {
                            summary: "Six related stills from the same analysis batch.",
                            metadataLine: "Image grid \xb7 fixture"
                        }
                    })
                }, {
                    id: "dual-image-bounding-boxes",
                    label: "Dual image with bounding boxes",
                    description: "Two-up evidence row + paired tables (canvas layout test). Use two MediaCards in product UI when comparing stills.",
                    mediaCard: {
                        type: "image",
                        src: eu,
                        title: "Dual image with bounding boxes",
                        annotations: eh,
                        spatialOverlaySvgInner: eo,
                        tracks: eg
                    },
                    layout: {
                        version: 2,
                        rows: [{
                            id: "row-dual-evidence",
                            blocks: [{
                                id: "blk-dual-evidence",
                                kind: "scene_evidence_mini_grid"
                            }]
                        }, {
                            id: "row-dual-tables",
                            blocks: [{
                                id: "blk-dual-left-table",
                                kind: "annotation_table"
                            }, {
                                id: "blk-dual-right-table",
                                kind: "annotation_table"
                            }]
                        }]
                    },
                    mediaContext: ej({
                        evidenceItems: ew,
                        annotations: eh,
                        tracks: eg,
                        spatialOverlaySvgInner: eo,
                        description: {
                            summary: "Two stills with the same detection schema — exercises multi-column canvas rows."
                        }
                    })
                }];
            var eI = n(51271),
                eE = n(5531),
                e_ = n(20061),
                ez = n(24466),
                eF = n(47071),
                eM = n(92850),
                eT = n(29827),
                eD = n(47156);
            let eA = Number.POSITIVE_INFINITY;
            var eU = n(12782),
                eR = n(79047),
                eL = n(55216);
            let eO = new Set(["video_viewport", "expandable_video_description", "transcript_card", "audio_view", "annotation_table", "scene_evidence_mini_grid", "video_timeline", "video_clips_picker"]),
                eP = new Set(["audio_view"]),
                eZ = e => e.startsWith("image/"),
                eJ = e => "application/pdf" === e,
                eq = e => e.startsWith("audio/"),
                eW = e => e.startsWith("video/");
            var eV = n(70166),
                eB = n(42783),
                eK = n(11794),
                eH = n(48931),
                e$ = n(89222);
            let eY = "__user_upload__";

            function eG(e) {
                return e.filter(e => "image" === e.type && "ready" === e.status)
            }

            function eX(e) {
                return e.previewUrl || e.uploadedUrl || ""
            }

            function eQ(e) {
                var t;
                return (null === (t = e.file) || void 0 === t ? void 0 : t.name) || "Uploaded image"
            }

            function e0(e) {
                var t;
                return (null === (t = e.file) || void 0 === t ? void 0 : t.type) || "image/jpeg"
            }

            function e1(e) {
                let t = new Map;
                for (let n of eG(e)) {
                    let e = "".concat(eY, ":").concat(n.id);
                    t.set(e, {
                        id: e,
                        artifactId: eY,
                        objectId: n.id,
                        label: eQ(n),
                        previewUrl: eX(n),
                        mimetype: e0(n),
                        kind: "image"
                    })
                }
                return t
            }
            var e2 = n(47896),
                e5 = n(99397);

            function e4(e) {
                let {
                    onFilesSelected: t,
                    isUploading: n = !1,
                    disabled: i = !1
                } = e, a = (0, r.useRef)(null), {
                    isSignedIn: s
                } = (0, f.aF)(), o = i || n;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(V.z, {
                        type: "button",
                        variant: "ghost",
                        size: "sm",
                        disabled: o,
                        onClick: () => {
                            if (!o) {
                                var e;
                                null === (e = a.current) || void 0 === e || e.click()
                            }
                        },
                        className: "relative size-8 rounded-full p-0 hover:bg-muted/50",
                        title: "Add files or photos",
                        children: (0, l.jsx)(e5.Z, {
                            className: "size-4 text-muted-foreground"
                        })
                    }), (0, l.jsx)("input", {
                        ref: a,
                        type: "file",
                        multiple: !0,
                        accept: s ? "image/*,application/pdf,audio/*,video/*" : "image/*,application/pdf",
                        onChange: e => {
                            let n = Array.from(e.target.files || []);
                            n.length > 0 && t(n), a.current && (a.current.value = "")
                        },
                        className: "hidden",
                        disabled: o
                    })]
                })
            }
            let e3 = {
                    "--c-borPri": "#e6e5e3",
                    borderRadius: 20,
                    boxShadow: "0px 0px 0px 1px var(--c-borPri), 0px 3px 8px rgba(0, 0, 0, 0.04)"
                },
                e6 = "-mb-[12px] inline-flex shrink-0 items-center whitespace-nowrap border px-3 pb-[16px] pt-1.5 text-sm font-normal transition-colors duration-150";

            function e8(e) {
                let {
                    children: t,
                    className: n
                } = e;
                return (0, l.jsx)("div", {
                    className: (0, J.cn)("relative z-10 bg-background transition-all duration-200", n),
                    style: e3,
                    children: t
                })
            }
            var e7 = n(73041),
                e9 = n(42208);

            function te(e) {
                let {
                    isOpen: t,
                    onToggle: n,
                    disabled: r = !1,
                    className: i
                } = e;
                return (0, l.jsxs)("button", {
                    type: "button",
                    onClick: n,
                    disabled: r,
                    "aria-pressed": t,
                    title: t ? "Hide preview panel" : "Show preview panel",
                    className: (0, J.cn)("inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-50", i),
                    children: [t ? (0, l.jsx)(g.Z, {
                        className: "size-4"
                    }) : (0, l.jsx)(e9.Z, {
                        className: "size-4"
                    }), (0, l.jsx)("span", {
                        className: "hidden sm:inline",
                        children: t ? "Hide preview" : "Preview panel"
                    }), (0, l.jsx)("span", {
                        className: "sm:hidden",
                        children: t ? "Hide" : "Preview"
                    })]
                })
            }

            function tt(e) {
                let {
                    isSignedIn: t,
                    isSidebarOpen: n,
                    isNarrow: r,
                    lockdownView: i,
                    showPublicNewChatLink: a,
                    hideAuthButtons: s = !1,
                    isArtifactPanelOpen: o = !1,
                    canOpenArtifactPanel: d = !1,
                    onToggleArtifactPanel: c,
                    onSignIn: u,
                    onSignUp: m,
                    apiConfigSlot: f,
                    showDebugDrawerButton: p = !1,
                    isDebugDrawerOpen: h = !1,
                    onToggleDebugDrawer: g,
                    modeSwitch: x
                } = e;
                return (0, l.jsx)("div", {
                    className: "absolute inset-x-0 top-0 z-30 p-2 transition-all duration-200",
                    children: (0, l.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, l.jsxs)("div", {
                            className: "flex items-center gap-3 ".concat(!n && t ? "ml-12" : ""),
                            style: t || x ? void 0 : {
                                marginTop: -20
                            },
                            children: [x, f]
                        }), (0, l.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [t && p && !r && (0, l.jsxs)("button", {
                                type: "button",
                                onClick: null != g ? g : () => {},
                                "aria-pressed": h,
                                title: h ? "Hide chat JSON" : "Show chat JSON (superuser)",
                                className: (0, J.cn)("hidden items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:inline-flex", h ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
                                children: [(0, l.jsx)(e7.Z, {
                                    className: "size-4"
                                }), (0, l.jsx)("span", {
                                    className: "hidden sm:inline",
                                    children: h ? "Hide JSON" : "Chat JSON"
                                })]
                            }), t ? !r && (d || o) && (0, l.jsx)(te, {
                                isOpen: !!o,
                                onToggle: null != c ? c : () => {},
                                disabled: !o && !d,
                                className: "hidden sm:inline-flex"
                            }) : !s && !a && !i && (0, l.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, l.jsx)(V.z, {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: u,
                                    className: "rounded-full px-4 text-xs",
                                    children: "Sign In"
                                }), (0, l.jsx)(V.z, {
                                    variant: "default",
                                    size: "sm",
                                    onClick: m,
                                    className: "rounded-full px-4 text-xs",
                                    children: "Sign Up"
                                })]
                            })]
                        })]
                    })
                })
            }
            let tn = (0, r.memo)(function(e) {
                    let {
                        sections: t,
                        activeSectionId: n,
                        onSectionClick: i
                    } = e, [a, s] = (0, r.useState)(!1), [o, d] = (0, r.useState)(null), c = (0, r.useRef)(null), u = (0, r.useCallback)(() => {
                        c.current && (clearTimeout(c.current), c.current = null), s(!0)
                    }, []), m = (0, r.useCallback)(() => {
                        c.current = setTimeout(() => {
                            s(!1), d(null)
                        }, 200)
                    }, []), f = (0, r.useMemo)(() => t.length <= 1 ? 10 : Math.max(3, Math.min(10, Math.floor((60 * window.innerHeight / 100 - 3 * t.length) / (t.length - 1)))), [t.length]);
                    return 0 === t.length ? null : (0, l.jsxs)("div", {
                        className: "absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 md:block",
                        onMouseEnter: u,
                        onMouseLeave: m,
                        children: [(0, l.jsx)("div", {
                            className: "flex flex-col items-center",
                            style: {
                                gap: f
                            },
                            children: t.map((e, t) => {
                                let r = e.id === n;
                                return (0, l.jsx)("button", {
                                    type: "button",
                                    className: "group flex items-center",
                                    onClick: () => i(e.id),
                                    onMouseEnter: () => d(t),
                                    onMouseLeave: () => d(null),
                                    "aria-label": "Go to: ".concat(e.title),
                                    children: (0, l.jsx)("div", {
                                        className: (0, J.cn)("h-[3px] rounded-full transition-all duration-150", r ? "w-4 bg-foreground" : "w-2.5 bg-foreground/30", "group-hover:w-4 group-hover:bg-foreground/70")
                                    })
                                }, e.id)
                            })
                        }), a && (0, l.jsx)("div", {
                            className: "absolute right-6 top-1/2 -translate-y-1/2",
                            children: (0, l.jsx)("div", {
                                className: "w-64 rounded-xl border border-border bg-background p-2 shadow-lg",
                                children: t.map((e, t) => {
                                    let r = e.id === n;
                                    return (0, l.jsx)("button", {
                                        type: "button",
                                        className: (0, J.cn)("w-full truncate rounded-lg px-3 py-2 text-left text-sm transition-colors", r ? "bg-muted font-medium text-foreground" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground", o === t && !r && "bg-muted/50"),
                                        onClick: () => i(e.id),
                                        onMouseEnter: () => d(t),
                                        onMouseLeave: () => d(null),
                                        children: e.title
                                    }, e.id)
                                })
                            })
                        })]
                    })
                }),
                tl = e => {
                    let {
                        className: t = "",
                        delay: n = 0
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "relative h-3 overflow-hidden rounded-full bg-muted/25 ".concat(t),
                        children: (0, l.jsx)("div", {
                            className: "absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-background/60 to-transparent",
                            style: {
                                animationDelay: "".concat(n, "s")
                            }
                        })
                    })
                };
            var tr = () => (0, l.jsxs)("div", {
                className: "flex-1 px-4 py-8",
                children: [(0, l.jsxs)("div", {
                    className: "mx-auto flex w-full max-w-3xl flex-col gap-12",
                    children: [(0, l.jsx)("div", {
                        className: "flex gap-4",
                        children: (0, l.jsxs)("div", {
                            className: "flex-1 space-y-3 pt-2",
                            children: [(0, l.jsx)(tl, {
                                className: "w-3/4",
                                delay: .1
                            }), (0, l.jsx)(tl, {
                                className: "w-full",
                                delay: .2
                            }), (0, l.jsx)(tl, {
                                className: "w-5/6",
                                delay: .3
                            }), (0, l.jsx)(tl, {
                                className: "w-2/3",
                                delay: .4
                            })]
                        })
                    }), (0, l.jsx)("div", {
                        className: "flex gap-4",
                        children: (0, l.jsxs)("div", {
                            className: "flex-1 space-y-3 pt-2",
                            children: [(0, l.jsx)(tl, {
                                className: "w-2/3",
                                delay: .55
                            }), (0, l.jsx)(tl, {
                                className: "w-full",
                                delay: .65
                            }), (0, l.jsx)(tl, {
                                className: "w-3/4",
                                delay: .75
                            }), (0, l.jsx)(tl, {
                                className: "w-[55%]",
                                delay: .85
                            })]
                        })
                    })]
                }), (0, l.jsx)("style", {
                    children: "\n          @keyframes shimmer {\n            100% {\n              transform: translateX(100%);\n            }\n          }\n        "
                })]
            });

            function ti(e) {
                let {
                    suggestions: t,
                    isCompactView: n = !1,
                    disabled: i = !1,
                    showSuggestionsTab: a = !1,
                    createSkillTab: s,
                    renderSuggestionContent: o,
                    onSuggestionClick: d,
                    children: c
                } = e, u = function(e) {
                    let [t, n] = (0, r.useState)(!1), [l, i] = (0, r.useState)(() => new Set), a = (0, r.useMemo)(() => e.map(e => e.id).join("|"), [e]);
                    (0, r.useEffect)(() => {
                        i(new Set), n(!1)
                    }, [a]);
                    let s = (0, r.useMemo)(() => e.filter(e => !l.has(e.id)), [l, e]),
                        o = s.length > 0,
                        d = (0, r.useCallback)(() => {
                            n(!0)
                        }, []),
                        c = (0, r.useCallback)(() => {
                            n(!1)
                        }, []);
                    return {
                        visibleSuggestions: s,
                        hasSuggestions: o,
                        isPanelVisible: o && !t,
                        showSuggestionsTab: o && t,
                        dismissSuggestion: (0, r.useCallback)(e => {
                            i(t => {
                                let n = new Set(t);
                                return n.add(e), n
                            })
                        }, []),
                        dismissAllSuggestions: d,
                        openSuggestionsSection: c
                    }
                }(t), m = n ? u.visibleSuggestions.slice(0, 2) : u.visibleSuggestions, f = a && u.showSuggestionsTab, p = !!s || f, h = u.isPanelVisible && m.length > 0, g = h && !p, x = e => (0, l.jsx)("button", {
                    type: "button",
                    "aria-label": "Dismiss suggestions",
                    disabled: i,
                    onClick: e => {
                        e.stopPropagation(), u.dismissAllSuggestions()
                    },
                    className: (0, J.cn)("flex size-6 items-center justify-center rounded-md text-muted-foreground/80 transition-all duration-150", "opacity-0 group-hover/suggestions-section:opacity-100 focus-visible:opacity-100", "hover:bg-muted/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30", i && "pointer-events-none", e),
                    children: (0, l.jsx)(N.Z, {
                        className: "size-3.5"
                    })
                }), v = h ? (0, l.jsxs)("div", {
                    className: (0, J.cn)("mb-2 flex w-full flex-wrap items-stretch gap-2.5", g && "relative"),
                    children: [g ? x("absolute right-0 top-0 z-10") : null, m.map((e, t) => (0, l.jsx)("div", {
                        className: (0, J.cn)("group flex min-w-0 flex-1 basis-0", n && "snap-center", "animate-in fade-in slide-in-from-top-2 duration-300"),
                        style: {
                            animationDelay: "".concat(45 * t, "ms"),
                            animationFillMode: "backwards"
                        },
                        children: (0, l.jsxs)("button", {
                            type: "button",
                            onClick: () => d(e.text),
                            disabled: i,
                            className: (0, J.cn)("flex h-full w-full min-w-0 items-center justify-between rounded-xl border border-border/40 bg-card/30 px-3.5 py-2 text-left text-sm font-normal leading-snug text-foreground/90 backdrop-blur-sm transition-all duration-200 hover:border-border hover:bg-card/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-60"),
                            style: {
                                borderColor: "#E5E4E2"
                            },
                            children: [(0, l.jsx)("span", {
                                className: "min-w-0 flex-1 whitespace-pre-wrap",
                                children: o(e.text, e.id)
                            }), (0, l.jsx)(_.Z, {
                                className: "size-3.5 shrink-0 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                            })]
                        })
                    }, e.id))]
                }) : null, b = p ? (0, l.jsxs)("div", {
                    className: "flex items-center",
                    children: [(0, l.jsxs)("div", {
                        className: "flex items-end",
                        children: [s, f ? (0, l.jsx)("button", {
                            type: "button",
                            "aria-label": "Show suggestions",
                            onClick: u.openSuggestionsSection,
                            className: (0, J.cn)(e6, "border-[#B8D9FF] bg-[#EBF5FF] text-foreground hover:bg-[#E0EFFC]", s ? "relative z-0 -ml-5 border-l-0 rounded-tl-none pl-8" : null, !s && "border-l", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/60", i && "cursor-not-allowed opacity-50"),
                            style: {
                                borderRadius: s ? "0 20px 0 0" : "20px 20px 0 0"
                            },
                            disabled: i,
                            children: "Suggestions"
                        }) : null]
                    }), h ? x("ml-auto") : null]
                }) : null;
                return (0, l.jsxs)("div", {
                    className: "group/suggestions-section flex flex-col gap-0",
                    children: [v, b, (0, l.jsx)(e8, {
                        children: c
                    })]
                })
            }

            function ta(e) {
                let {
                    items: t,
                    interval: n = 6500,
                    onClose: i,
                    className: a
                } = e, [s, o] = (0, r.useState)(0), [d, c] = (0, r.useState)(!1), u = (0, r.useRef)(null), m = (0, r.useRef)(null), f = (0, r.useCallback)(() => {
                    u.current && (clearInterval(u.current), u.current = null)
                }, []), p = (0, r.useCallback)(() => {
                    f(), n > 0 && t.length > 1 && !d && (u.current = setInterval(() => {
                        o(e => (e + 1) % t.length)
                    }, n))
                }, [n, t.length, d, f]);
                (0, r.useEffect)(() => (p(), f), [p, f]);
                let h = (0, r.useCallback)(e => {
                        o(e), p()
                    }, [p]),
                    g = (0, r.useCallback)(() => {
                        h((s + 1) % t.length)
                    }, [s, t.length, h]),
                    x = (0, r.useCallback)(() => {
                        h((s - 1 + t.length) % t.length)
                    }, [s, t.length, h]),
                    v = (0, r.useCallback)(e => {
                        m.current = e.touches[0].clientX
                    }, []),
                    b = (0, r.useCallback)(e => {
                        if (null === m.current) return;
                        let t = e.changedTouches[0].clientX - m.current;
                        m.current = null, 40 > Math.abs(t) || (t < 0 ? g() : x())
                    }, [g, x]);
                if (0 === t.length) return null;
                let y = t[s];
                return (0, l.jsxs)("div", {
                    role: "region",
                    "aria-label": "Feature highlights",
                    onMouseEnter: () => c(!0),
                    onMouseLeave: () => c(!1),
                    className: (0, J.cn)("flex w-full flex-col gap-2.5 p-3", a),
                    children: [(0, l.jsxs)("div", {
                        className: "flex items-center justify-between gap-3",
                        children: [(0, l.jsx)("div", {
                            className: "relative h-5 flex-1 overflow-hidden",
                            children: t.map((e, t) => (0, l.jsx)("span", {
                                "aria-hidden": t !== s,
                                className: (0, J.cn)("absolute inset-0 truncate text-sm font-medium leading-5 text-foreground transition-opacity duration-500", t === s ? "opacity-100" : "opacity-0"),
                                children: e.title
                            }, t))
                        }), i && (0, l.jsx)("button", {
                            type: "button",
                            onClick: i,
                            className: "-mr-1 flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground/70 transition-colors hover:bg-muted hover:text-foreground",
                            "aria-label": "Dismiss carousel",
                            children: (0, l.jsx)(N.Z, {
                                className: "size-3.5"
                            })
                        })]
                    }), (0, l.jsx)("div", {
                        className: "relative w-full overflow-hidden rounded-xl bg-muted/40",
                        style: {
                            aspectRatio: "16 / 7"
                        },
                        onTouchStart: v,
                        onTouchEnd: b,
                        children: t.map((e, t) => {
                            var n;
                            return (0, l.jsx)("div", {
                                className: (0, J.cn)("absolute inset-0 flex items-center justify-center transition-opacity duration-500", t === s ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"),
                                "aria-hidden": t !== s,
                                children: null !== (n = e.preview) && void 0 !== n ? n : (0, l.jsx)("div", {
                                    className: "size-full bg-muted-foreground/10"
                                })
                            }, t)
                        })
                    }), t.length > 1 && (0, l.jsx)("div", {
                        className: "flex items-center justify-center gap-1.5",
                        children: t.map((e, t) => (0, l.jsx)("button", {
                            type: "button",
                            onClick: () => h(t),
                            className: (0, J.cn)("h-1.5 rounded-full transition-all duration-300", t === s ? "w-5 bg-foreground" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"),
                            "aria-label": "Go to slide ".concat(t + 1),
                            "aria-current": t === s ? "true" : void 0
                        }, t))
                    }), (0, l.jsx)("span", {
                        className: "sr-only",
                        "aria-live": "polite",
                        children: y.title
                    })]
                })
            }
            var ts = n(34797),
                to = n(62143),
                td = n(67212),
                tc = n(75448),
                tu = n(74720),
                tm = n(88226);

            function tf(e) {
                let {
                    open: t,
                    onOpenChange: n
                } = e, r = (0, s.useRouter)(), {
                    isSignedIn: i,
                    isLoaded: a
                } = (0, f.aF)(), o = a && i, d = o ? () => {
                    window.open("".concat("https://app.vlm.run", "/dashboard/settings/billing"), "_blank"), n(!1)
                } : () => {
                    r.push("/sign-in?redirect_url=".concat(encodeURIComponent("/"))), n(!1)
                };
                return (0, l.jsx)(K.Vq, {
                    open: t,
                    onOpenChange: n,
                    children: (0, l.jsxs)(K.cZ, {
                        className: "sm:max-w-[425px]",
                        children: [(0, l.jsxs)(K.fK, {
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [(0, l.jsx)("div", {
                                    className: "flex size-10 items-center justify-center rounded-full bg-orange-500/10",
                                    children: o ? (0, l.jsx)(tm.Z, {
                                        className: "size-5 text-orange-500"
                                    }) : (0, l.jsx)(z.Z, {
                                        className: "size-5 text-orange-500"
                                    })
                                }), (0, l.jsx)(K.$N, {
                                    children: o ? "Payment Method Required" : "Sign In Required"
                                })]
                            }), (0, l.jsx)(K.Be, {
                                className: "pt-2",
                                children: o ? "Add a payment method to continue chatting. You'll only be charged for what you use." : "Sign in and add a payment method to continue chatting."
                            })]
                        }), (0, l.jsxs)(K.cN, {
                            className: "flex-col gap-2 sm:flex-row",
                            children: [(0, l.jsx)(V.z, {
                                variant: "outline",
                                onClick: () => n(!1),
                                className: "w-full sm:w-auto",
                                children: "Cancel"
                            }), (0, l.jsx)(V.z, {
                                onClick: d,
                                className: "w-full sm:w-auto",
                                children: o ? "Add Payment Method" : "Sign In"
                            })]
                        })]
                    })
                })
            }

            function tp(e) {
                let {
                    open: t,
                    onOpenChange: n
                } = e, r = (0, s.useRouter)(), {
                    isSignedIn: i,
                    isLoaded: a
                } = (0, f.aF)(), o = a && i, d = o ? () => {
                    window.open("".concat("https://app.vlm.run", "/dashboard/settings/billing"), "_blank"), n(!1)
                } : () => {
                    r.push("/sign-in?redirect_url=".concat(encodeURIComponent("/"))), n(!1)
                };
                return (0, l.jsx)(K.Vq, {
                    open: t,
                    onOpenChange: n,
                    children: (0, l.jsxs)(K.cZ, {
                        className: "sm:max-w-[425px]",
                        children: [(0, l.jsxs)(K.fK, {
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [(0, l.jsx)("div", {
                                    className: "flex size-10 items-center justify-center rounded-full bg-destructive/10",
                                    children: (0, l.jsx)(z.Z, {
                                        className: "size-5 text-destructive"
                                    })
                                }), (0, l.jsx)(K.$N, {
                                    children: o ? "Daily Free Limit Reached" : "Free Turns Completed"
                                })]
                            }), (0, l.jsx)(K.Be, {
                                className: "pt-2",
                                children: o ? "Unlock more messages with Pay-as-You-Go or wait until tomorrow for more Free Messages" : "You've reached your free turns limit. Please sign in to continue chatting."
                            })]
                        }), (0, l.jsx)(K.cN, {
                            children: (0, l.jsx)(V.z, {
                                onClick: d,
                                className: "w-full sm:w-auto",
                                children: o ? "Pay-as-You-Go" : "Sign In to Continue"
                            })
                        })]
                    })
                })
            }
            var th = n(15051);

            function tg(e) {
                let {
                    onClick: t
                } = e;
                return (0, l.jsx)(V.z, {
                    onClick: t,
                    variant: "outline",
                    size: "icon",
                    className: (0, J.cn)("size-8 rounded-full shadow-sm transition-all duration-200 hover:shadow-lg", "border border-border bg-background/95 backdrop-blur-sm hover:bg-muted/90 active:scale-95", "flex items-center justify-center", "animate-in fade-in"),
                    "aria-label": "Scroll to bottom",
                    title: "Scroll to bottom of chat",
                    children: (0, l.jsx)(th.Z, {
                        className: "size-5"
                    })
                })
            }
            var tx = n(84234),
                tv = n(18361),
                tb = n(17814);

            function ty(e) {
                let {
                    skillId: t,
                    onClose: n,
                    onSkillUpdated: i
                } = e, {
                    isMobile: a,
                    mounted: s
                } = (0, eE.sT)(), [o, d] = (0, r.useState)(!1), [c, u] = (0, r.useState)(!1), m = (0, r.useRef)(null);
                if ((0, r.useEffect)(() => {
                        d(!0), m.current = requestAnimationFrame(() => {
                            m.current = requestAnimationFrame(() => u(!0))
                        });
                        let e = document.body.style.overflow;
                        return document.body.style.overflow = "hidden", () => {
                            document.body.style.overflow = e, null !== m.current && cancelAnimationFrame(m.current)
                        }
                    }, []), !o || !s) return null;
                let f = (0, l.jsx)(ez.ChatHistoryProvider, {
                    children: (0, l.jsx)(tv._, {
                        params: {
                            id: t
                        },
                        onClose: n,
                        onSkillUpdated: i
                    })
                }, t);
                return a ? (0, l.jsx)(tb.dy, {
                    open: !0,
                    onOpenChange: e => !e && n(),
                    children: (0, l.jsx)(tb.sc, {
                        className: "flex h-[100dvh] flex-col gap-0 overflow-hidden p-0",
                        children: f
                    })
                }) : (0, D.createPortal)((0, l.jsx)("div", {
                    className: "fixed inset-0 z-[9999]",
                    style: {
                        backgroundColor: "rgba(0,0,0,0.2)",
                        backdropFilter: "blur(2px)",
                        transition: "opacity 220ms ease",
                        opacity: c ? 1 : 0
                    },
                    onDragOver: e => {
                        e.preventDefault(), e.stopPropagation()
                    },
                    onDrop: e => {
                        e.preventDefault(), e.stopPropagation()
                    },
                    onDragEnter: e => {
                        e.preventDefault(), e.stopPropagation()
                    },
                    onDragLeave: e => e.stopPropagation(),
                    children: (0, l.jsx)("div", {
                        className: "absolute inset-3 overflow-hidden rounded-2xl border border-border bg-background shadow-xl",
                        style: {
                            transition: "transform 340ms cubic-bezier(0.32, 0.72, 0, 1), opacity 220ms ease",
                            transform: c ? "translateY(0)" : "translateY(calc(100% + 12px))",
                            opacity: c ? 1 : 0
                        },
                        children: f
                    })
                }), document.body)
            }
            var tw = n(65315),
                tj = n(64982),
                tN = n(49842),
                tk = n(4093),
                tC = n(84696);

            function tS(e) {
                var t, n;
                let {
                    skillId: i,
                    open: a,
                    onClose: o,
                    onEdit: d,
                    maxWidth: c = "max-w-6xl",
                    sessionId: u
                } = e, [f, p] = (0, r.useState)(!1), [g, x] = (0, r.useState)(!1), v = (0, s.useRouter)(), {
                    isBackendAuthenticated: b
                } = (0, tN.a)(), {
                    data: y,
                    isLoading: w
                } = (0, m.U$)(i, u), {
                    data: j,
                    isLoading: N
                } = (0, m.cd)(i, u), {
                    data: k
                } = (0, tj.$r)(), {
                    mutateAsync: C
                } = (0, m.K)(), S = null !== (t = null == j ? void 0 : j.instructions) && void 0 !== t ? t : null, I = null !== (n = null == j ? void 0 : j.schema) && void 0 !== n ? n : null, E = y && k && y.org_id === k.id, _ = async () => {
                    if (!b) {
                        sessionStorage.setItem("pending-copy-skill", i), v.push("/sign-in?redirect_url=".concat(encodeURIComponent(window.location.pathname + window.location.search)));
                        return
                    }
                    if (y && S) {
                        x(!0);
                        try {
                            let t = new(h());
                            if (t.file("SKILL.md", S), I && t.file(I.name || "schema.json", I.content), null == j ? void 0 : j.extraFiles)
                                for (let n of j.extraFiles) {
                                    let l = n.name.split("/").map(e => (0, tC.H)(e)).join("/");
                                    if (n.content.startsWith("data:")) {
                                        var e;
                                        let r = null !== (e = n.content.split(",")[1]) && void 0 !== e ? e : "";
                                        t.file(l, r, {
                                            base64: !0
                                        })
                                    } else t.file(l, n.content)
                                }
                            let n = await t.generateAsync({
                                    type: "blob"
                                }),
                                l = new File([n], "skill-copy.zip", {
                                    type: "application/zip"
                                }),
                                r = await C({
                                    skillData: {
                                        name: y.name,
                                        description: y.description,
                                        is_public: !1
                                    },
                                    file: l
                                });
                            p(!1), o(), null == d || d(r.id)
                        } catch (e) {} finally {
                            x(!1)
                        }
                    }
                }, {
                    isMobile: z,
                    mounted: F
                } = (0, eE.sT)(), M = !(w || N) && y ? (0, l.jsx)("button", {
                    type: "button",
                    onClick: () => {
                        E ? (o(), null == d || d(i)) : p(!0)
                    },
                    className: "inline-flex h-5 cursor-pointer items-center rounded-full border border-border px-2 py-0 text-[10px] font-normal transition-colors hover:bg-muted",
                    children: "Edit"
                }) : null;
                return (0, l.jsxs)(l.Fragment, {
                    children: [F && z ? (0, l.jsx)(tb.dy, {
                        open: a,
                        onOpenChange: e => !e && o(),
                        children: (0, l.jsx)(tb.sc, {
                            className: "flex h-[90vh] flex-col gap-0 overflow-hidden p-0",
                            children: (0, l.jsx)(tk.s, {
                                skillId: i,
                                sessionId: u,
                                variant: "modal",
                                headerActions: M
                            })
                        })
                    }) : F ? (0, l.jsx)(K.Vq, {
                        open: a,
                        onOpenChange: e => !e && o(),
                        children: (0, l.jsx)(K.cZ, {
                            hideCloseButton: !0,
                            className: (0, J.cn)(c, "h-[85vh]", "flex flex-col gap-0 overflow-hidden p-0", "outline-none focus:outline-none focus-visible:outline-none"),
                            children: (0, l.jsx)(tk.s, {
                                skillId: i,
                                sessionId: u,
                                variant: "modal",
                                headerActions: M
                            })
                        })
                    }) : null, (0, l.jsx)(K.Vq, {
                        open: f,
                        onOpenChange: p,
                        children: (0, l.jsxs)(K.cZ, {
                            className: "sm:max-w-[425px]",
                            children: [(0, l.jsxs)(K.fK, {
                                children: [(0, l.jsx)(K.$N, {
                                    children: "Copy skill to edit?"
                                }), (0, l.jsx)(K.Be, {
                                    className: "pt-2",
                                    children: "This is a public skill. A copy will be added to your workspace so you can make edits."
                                })]
                            }), (0, l.jsxs)(K.cN, {
                                className: "flex-col gap-2 sm:flex-row",
                                children: [(0, l.jsx)(V.z, {
                                    variant: "outline",
                                    onClick: () => p(!1),
                                    disabled: g,
                                    className: "w-full sm:w-auto",
                                    children: "Cancel"
                                }), (0, l.jsx)(V.z, {
                                    onClick: _,
                                    disabled: g,
                                    className: "w-full sm:w-auto",
                                    children: g ? "Copying..." : "Copy & edit"
                                })]
                            })]
                        })
                    })]
                })
            }
            var tI = n(33073),
                tE = n(22931);

            function t_(e) {
                let {
                    onSkillSelect: t,
                    disabled: n,
                    compact: i = !1
                } = e, [a, s] = (0, r.useState)(!1);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(V.z, {
                        type: "button",
                        variant: "ghost",
                        size: "sm",
                        disabled: n,
                        onClick: () => s(!0),
                        className: (0, J.cn)("inline-flex items-center gap-2 rounded-full", "h-auto cursor-pointer text-sm font-medium transition-all duration-200", i ? "border-none bg-transparent p-0 text-muted-foreground hover:bg-transparent hover:text-foreground" : "border border-gray-200 bg-white px-4 py-2 text-gray-700 hover:border-gray-400 hover:bg-gray-100"),
                        title: "Select a skill",
                        children: i ? (0, l.jsx)(tI.Z, {
                            className: "size-4"
                        }) : (0, l.jsx)("span", {
                            className: "select-none leading-none",
                            children: "No skill selected"
                        })
                    }), (0, l.jsx)(tE.i, {
                        open: a,
                        onOpenChange: s,
                        onSkillSelect: e => {
                            t(e), s(!1)
                        }
                    })]
                })
            }
            var tz = n(41193),
                tF = n(73247),
                tM = n(22135),
                tT = n(82431),
                tD = n(18930),
                tA = n(92129),
                tU = n(45767),
                tR = n(50575),
                tL = n(8164);
            let tO = e => ["chat-session-completions", e];
            var tP = n(20943),
                tZ = n(90423),
                tJ = n(51308);
            let tq = [{
                    key: "runs",
                    label: "Runs"
                }, {
                    key: "timeline",
                    label: "Timeline"
                }, {
                    key: "issues",
                    label: "Issues"
                }, {
                    key: "raw",
                    label: "Raw"
                }, {
                    key: "client",
                    label: "Client"
                }],
                tW = [{
                    key: "messages",
                    label: "Completions"
                }, {
                    key: "turns",
                    label: "Turns"
                }, {
                    key: "rendered",
                    label: "Rendered"
                }];

            function tV(e) {
                let {
                    data: t,
                    emptyMessage: n,
                    searchPlaceholder: i = "Search JSON…"
                } = e, [a, s] = (0, r.useState)(""), [o, d] = (0, r.useState)(0), c = (0, r.useRef)(new Map), u = (0, r.useMemo)(() => {
                    try {
                        return JSON.stringify(null != t ? t : null, null, 2)
                    } catch (e) {
                        return "// Unable to serialize value (likely contains circular references)."
                    }
                }, [t]), m = a.trim(), f = (0, r.useMemo)(() => {
                    if (!m) return null;
                    try {
                        return RegExp(m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi")
                    } catch (e) {
                        return null
                    }
                }, [m]), p = (0, r.useMemo)(() => {
                    if (!f || !u) return 0;
                    let e = new RegExp(f.source, f.flags),
                        t = 0;
                    for (; null !== e.exec(u) && (t += 1, 0 !== e.lastIndex););
                    return t
                }, [f, u]);
                (0, r.useEffect)(() => {
                    d(0)
                }, [m, u]), (0, r.useEffect)(() => {
                    p > 0 && o >= p && d(0)
                }, [o, p]), (0, r.useEffect)(() => {
                    c.current.clear()
                }, [u, m]), (0, r.useEffect)(() => {
                    if (0 === p) return;
                    let e = c.current.get(o);
                    e && e.scrollIntoView({
                        block: "center",
                        behavior: "smooth"
                    })
                }, [o, p, u]);
                let h = e => {
                        0 !== p && d(t => (t + e + p) % p)
                    },
                    g = Array.isArray(t) && 0 === t.length;
                return (0, l.jsxs)("div", {
                    className: "flex min-h-0 flex-1 flex-col",
                    children: [(0, l.jsxs)("div", {
                        className: "flex items-center gap-2 border-b border-border px-3 py-2",
                        children: [(0, l.jsxs)("div", {
                            className: "relative flex flex-1 items-center",
                            children: [(0, l.jsx)(tF.Z, {
                                className: "pointer-events-none absolute left-2 size-3.5 text-muted-foreground"
                            }), (0, l.jsx)("input", {
                                type: "text",
                                value: a,
                                onChange: e => s(e.target.value),
                                onKeyDown: e => {
                                    "Enter" === e.key ? (e.preventDefault(), h(e.shiftKey ? -1 : 1)) : "Escape" === e.key && (e.preventDefault(), s(""))
                                },
                                placeholder: i,
                                className: "h-7 w-full rounded-md border border-border bg-background pl-7 pr-7 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                            }), a ? (0, l.jsx)("button", {
                                type: "button",
                                onClick: () => s(""),
                                className: "absolute right-1.5 rounded p-0.5 text-muted-foreground hover:bg-muted hover:text-foreground",
                                "aria-label": "Clear search",
                                children: (0, l.jsx)(N.Z, {
                                    className: "size-3"
                                })
                            }) : null]
                        }), (0, l.jsx)("span", {
                            className: "min-w-[4.5rem] text-right text-[11px] tabular-nums text-muted-foreground",
                            children: m ? p > 0 ? "".concat(o + 1, " / ").concat(p) : "0 / 0" : ""
                        }), (0, l.jsx)("button", {
                            type: "button",
                            onClick: () => h(-1),
                            disabled: 0 === p,
                            className: "rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40",
                            "aria-label": "Previous match",
                            children: (0, l.jsx)(tM.Z, {
                                className: "size-3.5"
                            })
                        }), (0, l.jsx)("button", {
                            type: "button",
                            onClick: () => h(1),
                            disabled: 0 === p,
                            className: "rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40",
                            "aria-label": "Next match",
                            children: (0, l.jsx)(I.Z, {
                                className: "size-3.5"
                            })
                        })]
                    }), (0, l.jsx)("div", {
                        className: "min-h-0 flex-1 overflow-auto px-3 py-2",
                        children: g && n ? (0, l.jsx)("div", {
                            className: "flex h-full items-center justify-center px-4 text-center text-xs text-muted-foreground",
                            children: n
                        }) : (0, l.jsx)(tA.d, {
                            language: "json",
                            tokenPattern: null != f ? f : void 0,
                            renderInlineToken: f ? (e, t) => (0, l.jsx)("span", {
                                ref: e => {
                                    e ? c.current.set(t, e) : c.current.delete(t)
                                },
                                className: (0, J.cn)("rounded-sm", t === o ? "bg-amber-400 text-black" : "bg-yellow-200 text-black"),
                                children: e
                            }) : void 0,
                            children: u
                        })
                    })]
                })
            }

            function tB(e) {
                let {
                    isOpen: t,
                    onClose: n,
                    sessionId: i,
                    cachedMessages: a,
                    turns: s,
                    renderedMessages: o,
                    debugLogs: d,
                    onClearDebugLogs: c
                } = e, [u, m] = (0, r.useState)("runs"), [f, p] = (0, r.useState)("messages"), [h, g] = (0, r.useState)(null), {
                    runs: x,
                    errorSpans: v,
                    completionErrors: b,
                    diagnostics: y,
                    isLoading: w,
                    isError: k,
                    refetch: C
                } = function(e) {
                    var t, n;
                    let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        i = function(e) {
                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            return (0, eM.a)({
                                queryKey: tO(null != e ? e : ""),
                                queryFn: () => (0, tU.XM)(e),
                                enabled: !!(e && t),
                                staleTime: 1e4
                            })
                        }(e, l),
                        a = null !== (n = null === (t = i.data) || void 0 === t ? void 0 : t.data) && void 0 !== n ? n : [],
                        s = (0, tL.h)({
                            queries: a.map(t => ({
                                queryKey: (0, tR.T)(t.id),
                                queryFn: () => (0, tU.bO)(t.id),
                                enabled: !!(e && l),
                                staleTime: 3e4
                            }))
                        }),
                        o = (0, r.useMemo)(() => a.map((e, t) => {
                            var n, l, r, i;
                            return {
                                completion: e,
                                runCost: null !== (r = null === (n = s[t]) || void 0 === n ? void 0 : n.data) && void 0 !== r ? r : null,
                                isLoading: null !== (i = null === (l = s[t]) || void 0 === l ? void 0 : l.isLoading) && void 0 !== i && i
                            }
                        }), [a, s]),
                        d = (0, r.useMemo)(() => {
                            let e = [];
                            for (let l of o) {
                                var t, n;
                                for (let r of null !== (n = null === (t = l.runCost) || void 0 === t ? void 0 : t.spans) && void 0 !== n ? n : [])(function(e) {
                                    var t;
                                    let n = null !== (t = e.attrs) && void 0 !== t ? t : {};
                                    return "string" == typeof n.error && n.error.trim().length > 0 || !1 === n.ok || "string" == typeof n.failure && n.failure.trim().length > 0
                                })(r) && e.push({
                                    completion: l.completion,
                                    span: r
                                })
                            }
                            return e
                        }, [o]),
                        c = (0, r.useMemo)(() => o.filter(e => e.completion.error_msg || "failed" === e.completion.status), [o]),
                        u = (0, r.useMemo)(() => {
                            let e = [];
                            for (let t of o) e.push(... function(e, t) {
                                var n, l, r, i;
                                if (!t) return [];
                                let a = [],
                                    s = [...null !== (n = t.spans) && void 0 !== n ? n : []].sort((e, t) => e.seq - t.seq),
                                    o = e.id;
                                t.header.mllm_turns >= 4 && a.push({
                                    id: "".concat(o, "-mllm-volume"),
                                    severity: "warn",
                                    category: "volume",
                                    title: "High MLLM turn count",
                                    message: "".concat(t.header.mllm_turns, " model turns for one completion — often indicates validation or tool retries."),
                                    completionId: o,
                                    details: {
                                        mllm_turns: t.header.mllm_turns
                                    }
                                }), t.header.execute_code_calls >= 2 && a.push({
                                    id: "".concat(o, "-code-volume"),
                                    severity: "info",
                                    category: "volume",
                                    title: "Multiple code executions",
                                    message: "".concat(t.header.execute_code_calls, " execute_code calls recorded for this completion."),
                                    completionId: o,
                                    details: {
                                        execute_code_calls: t.header.execute_code_calls
                                    }
                                });
                                let d = s.filter(e => "execute_code" === e.span_type);
                                for (let e of d.filter(e => (function(e) {
                                        var t;
                                        let n = null !== (t = e.attrs) && void 0 !== t ? t : {};
                                        return "execute_code_retry" === n.phase || !0 === n.recovered || !1 === n.ok && "string" == typeof n.error
                                    })(e))) {
                                    let t = (null === (l = e.attrs) || void 0 === l ? void 0 : l.ok) === !1;
                                    a.push({
                                        id: "".concat(o, "-code-retry-").concat(e.seq),
                                        severity: t ? "warn" : "error",
                                        category: "retry",
                                        title: t ? "Code execution retry attempt" : "Code execution failed",
                                        message: "string" == typeof(null === (r = e.attrs) || void 0 === r ? void 0 : r.error) ? e.attrs.error : "execute_code span recorded a failure or retry.",
                                        completionId: o,
                                        spanSeq: e.seq,
                                        details: {
                                            attrs: e.attrs,
                                            latency_ms: e.latency_ms
                                        }
                                    })
                                }
                                for (let e of d) null != e.latency_ms && (e.latency_ms >= 3e4 ? a.push({
                                    id: "".concat(o, "-slow-code-").concat(e.seq),
                                    severity: "error",
                                    category: "slow",
                                    title: "Very slow code execution",
                                    message: "execute_code seq ".concat(e.seq, " took ").concat((e.latency_ms / 1e3).toFixed(1), "s."),
                                    completionId: o,
                                    spanSeq: e.seq,
                                    details: {
                                        latency_ms: e.latency_ms
                                    }
                                }) : e.latency_ms >= 1e4 && a.push({
                                    id: "".concat(o, "-slow-code-").concat(e.seq),
                                    severity: "warn",
                                    category: "slow",
                                    title: "Slow code execution",
                                    message: "execute_code seq ".concat(e.seq, " took ").concat((e.latency_ms / 1e3).toFixed(1), "s."),
                                    completionId: o,
                                    spanSeq: e.seq,
                                    details: {
                                        latency_ms: e.latency_ms
                                    }
                                }));
                                for (let e = 0; e < s.length - 2; e += 1) {
                                    let t = s[e],
                                        n = s[e + 1],
                                        l = s[e + 2];
                                    "execute_code" === t.span_type && "mllm" === n.span_type && "execute_code" === l.span_type && a.push({
                                        id: "".concat(o, "-loop-").concat(t.seq, "-").concat(l.seq),
                                        severity: "warn",
                                        category: "loop",
                                        title: "Code → model → code loop",
                                        message: "Retry loop detected between execute_code seq ".concat(t.seq, " and ").concat(l.seq, "."),
                                        completionId: o,
                                        details: {
                                            span_seqs: [t.seq, n.seq, l.seq]
                                        }
                                    })
                                }
                                for (let e of s)(function(e) {
                                    var t;
                                    let n = null !== (t = e.attrs) && void 0 !== t ? t : {};
                                    return "string" == typeof n.error && n.error.trim().length > 0 || !1 === n.ok || "string" == typeof n.failure && n.failure.trim().length > 0
                                })(e) && "execute_code" !== e.span_type && a.push({
                                    id: "".concat(o, "-span-error-").concat(e.seq),
                                    severity: "error",
                                    category: "failure",
                                    title: "".concat(e.span_type, " span error"),
                                    message: "string" == typeof(null === (i = e.attrs) || void 0 === i ? void 0 : i.error) ? e.attrs.error : "Span attrs indicate a failure.",
                                    completionId: o,
                                    spanSeq: e.seq,
                                    details: {
                                        attrs: e.attrs
                                    }
                                });
                                return null != t.header.duration_ms && t.header.duration_ms >= 6e4 && a.push({
                                    id: "".concat(o, "-slow-run"),
                                    severity: "warn",
                                    category: "slow",
                                    title: "Slow overall run",
                                    message: "Completion took ".concat((t.header.duration_ms / 1e3).toFixed(1), "s end-to-end."),
                                    completionId: o,
                                    details: {
                                        duration_ms: t.header.duration_ms
                                    }
                                }), a
                            }(t.completion, t.runCost));
                            return e
                        }, [o]);
                    return {
                        completionsQuery: i,
                        runs: o,
                        errorSpans: d,
                        completionErrors: c,
                        diagnostics: u,
                        isLoading: i.isLoading || s.some(e => e.isLoading),
                        isError: i.isError,
                        refetch: i.refetch
                    }
                }(i, t);
                (0, r.useEffect)(() => {
                    g(null)
                }, [i]), (0, r.useEffect)(() => {
                    if (h) return;
                    let e = x[x.length - 1];
                    e && g(e.completion.id)
                }, [x, h]);
                let S = (0, r.useMemo)(() => {
                        var e;
                        return null !== (e = x.find(e => e.completion.id === h)) && void 0 !== e ? e : null
                    }, [x, h]),
                    I = (0, r.useMemo)(() => "messages" === f ? a : "turns" === f ? s : o, [f, a, s, o]),
                    E = (0, r.useMemo)(() => d.filter(e => "agent" === e.category || "stream" === e.category), [d]),
                    _ = y.length + v.length + b.length + d.filter(e => "error" === e.level).length + E.filter(e => "warn" === e.level).length;
                return t ? (0, l.jsxs)("div", {
                    className: (0, J.cn)("fixed inset-y-0 right-0 z-40 flex h-[100dvh] max-h-[100dvh] w-full max-w-xl flex-col border-l border-border bg-background shadow-xl", "sm:w-[36rem]"),
                    role: "complementary",
                    "aria-label": "Superuser debug drawer",
                    children: [(0, l.jsxs)("div", {
                        className: "flex items-center justify-between border-b border-border px-4 py-3",
                        children: [(0, l.jsxs)("div", {
                            className: "min-w-0 flex-1 flex-col",
                            children: [(0, l.jsx)("span", {
                                className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
                                children: "Superuser Debug"
                            }), (0, l.jsx)("span", {
                                className: "truncate text-sm font-medium text-foreground",
                                children: i ? "session: ".concat(i) : "no session"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [(0, l.jsx)("button", {
                                type: "button",
                                onClick: () => void C(),
                                className: "rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                                "aria-label": "Refresh debug data",
                                title: "Refresh debug data",
                                children: (0, l.jsx)(tT.Z, {
                                    className: (0, J.cn)("size-4", w && "animate-spin")
                                })
                            }), (0, l.jsx)("button", {
                                type: "button",
                                onClick: n,
                                className: "rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                                "aria-label": "Close debug drawer",
                                children: (0, l.jsx)(N.Z, {
                                    className: "size-4"
                                })
                            })]
                        })]
                    }), (0, l.jsx)("div", {
                        className: "flex flex-wrap items-center gap-1 border-b border-border px-3 py-2",
                        children: tq.map(e => (0, l.jsxs)("button", {
                            type: "button",
                            onClick: () => m(e.key),
                            className: (0, J.cn)("rounded-full px-3 py-1 text-xs font-medium transition-colors", u === e.key ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
                            children: [e.label, "runs" === e.key && x.length > 0 ? (0, l.jsx)("span", {
                                className: "ml-1.5 rounded-full bg-background/20 px-1.5 py-0.5 text-[10px] tabular-nums",
                                children: x.length
                            }) : null, "issues" === e.key && _ > 0 ? (0, l.jsx)("span", {
                                className: "ml-1.5 rounded-full bg-destructive/20 px-1.5 py-0.5 text-[10px] tabular-nums text-destructive",
                                children: _
                            }) : null, "client" === e.key && d.length > 0 ? (0, l.jsx)("span", {
                                className: "ml-1.5 rounded-full bg-background/20 px-1.5 py-0.5 text-[10px] tabular-nums",
                                children: d.length
                            }) : null]
                        }, e.key))
                    }), (0, l.jsxs)("div", {
                        className: "relative min-h-0 flex-1 overflow-hidden",
                        children: ["runs" === u ? (0, l.jsx)("div", {
                            className: "absolute inset-0 overflow-y-auto overscroll-y-contain",
                            children: i ? w && 0 === x.length ? (0, l.jsxs)("div", {
                                className: "flex min-h-full items-center justify-center text-xs text-muted-foreground",
                                children: [(0, l.jsx)(j.Z, {
                                    className: "mr-2 size-4 animate-spin"
                                }), "Loading session runs…"]
                            }) : k ? (0, l.jsxs)("div", {
                                className: "flex min-h-full flex-col items-center justify-center gap-2 px-4 text-center text-xs text-muted-foreground",
                                children: [(0, l.jsx)("p", {
                                    children: "Failed to load session runs."
                                }), (0, l.jsx)(V.z, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: () => void C(),
                                    children: "Retry"
                                })]
                            }) : 0 === x.length ? (0, l.jsx)("div", {
                                className: "flex min-h-full items-center justify-center px-4 text-center text-xs text-muted-foreground",
                                children: "No chat completions recorded for this session yet."
                            }) : (0, l.jsx)("div", {
                                className: "p-3",
                                children: (0, l.jsx)("div", {
                                    className: "space-y-2",
                                    children: x.map((e, t) => {
                                        var n, r, i, a;
                                        let s = e.completion,
                                            o = null === (n = e.runCost) || void 0 === n ? void 0 : n.header,
                                            d = s.id === h;
                                        return (0, l.jsxs)("button", {
                                            type: "button",
                                            onClick: () => {
                                                g(s.id), m("timeline")
                                            },
                                            className: (0, J.cn)("w-full rounded-xl border p-3 text-left transition-colors", d ? "border-primary bg-primary/5" : "border-border hover:border-primary/40 hover:bg-muted/40"),
                                            children: [(0, l.jsxs)("div", {
                                                className: "flex items-start justify-between gap-2",
                                                children: [(0, l.jsxs)("div", {
                                                    className: "min-w-0",
                                                    children: [(0, l.jsxs)("p", {
                                                        className: "text-xs font-medium text-foreground",
                                                        children: ["Run ", t + 1, s.model_id ? (0, l.jsx)("span", {
                                                            className: "ml-2 font-normal text-muted-foreground",
                                                            children: s.model_id
                                                        }) : null]
                                                    }), (0, l.jsx)("p", {
                                                        className: "mt-1 truncate font-mono text-[10px] text-muted-foreground",
                                                        children: s.id
                                                    })]
                                                }), (0, l.jsx)("span", {
                                                    className: (0, J.cn)("shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium capitalize", "failed" === (a = s.status) ? "bg-destructive/10 text-destructive" : "completed" === a ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "bg-muted text-muted-foreground"),
                                                    children: null !== (r = s.status) && void 0 !== r ? r : "unknown"
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground",
                                                children: [(0, l.jsx)("span", {
                                                    children: (0, tJ.i$)(null !== (i = s.created_at) && void 0 !== i ? i : null)
                                                }), o ? (0, l.jsxs)(l.Fragment, {
                                                    children: [(0, l.jsx)("span", {
                                                        children: (0, tJ.JD)(o.duration_ms)
                                                    }), (0, l.jsx)("span", {
                                                        children: (0, tJ.gC)(o.effective_cost)
                                                    }), (0, l.jsxs)("span", {
                                                        children: [o.mllm_turns, " mllm \xb7 ", o.execute_code_calls, " code \xb7 ", o.tool_calls, " tools"]
                                                    })]
                                                }) : e.isLoading ? (0, l.jsxs)("span", {
                                                    className: "inline-flex items-center gap-1",
                                                    children: [(0, l.jsx)(j.Z, {
                                                        className: "size-3 animate-spin"
                                                    }), "Loading ledger…"]
                                                }) : (0, l.jsx)("span", {
                                                    children: "No run ledger"
                                                }), s.error_msg ? (0, l.jsx)("span", {
                                                    className: "text-destructive",
                                                    children: s.error_msg
                                                }) : null]
                                            })]
                                        }, s.id)
                                    })
                                })
                            }) : (0, l.jsx)("div", {
                                className: "flex min-h-full items-center justify-center px-4 text-center text-xs text-muted-foreground",
                                children: "Start or open a chat session to inspect backend runs."
                            })
                        }) : null, "timeline" === u ? (0, l.jsx)("div", {
                            className: "absolute inset-0 overflow-y-auto overscroll-y-contain",
                            children: S ? S.isLoading ? (0, l.jsxs)("div", {
                                className: "flex min-h-full items-center justify-center text-xs text-muted-foreground",
                                children: [(0, l.jsx)(j.Z, {
                                    className: "mr-2 size-4 animate-spin"
                                }), "Loading run ledger…"]
                            }) : S.runCost ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)("div", {
                                    className: "border-b border-border p-3",
                                    children: (0, l.jsx)(tP.b, {
                                        header: S.runCost.header
                                    })
                                }), (0, l.jsx)(tZ.J, {
                                    spans: S.runCost.spans,
                                    className: "p-0"
                                })]
                            }) : (0, l.jsxs)("div", {
                                className: "flex min-h-full flex-col items-center justify-center gap-2 px-4 text-center text-xs text-muted-foreground",
                                children: [(0, l.jsx)("p", {
                                    children: "No billing ledger found for this completion."
                                }), (0, l.jsx)("p", {
                                    className: "font-mono text-[10px]",
                                    children: S.completion.id
                                }), S.completion.error_msg ? (0, l.jsx)("p", {
                                    className: "text-destructive",
                                    children: S.completion.error_msg
                                }) : null]
                            }) : (0, l.jsx)("div", {
                                className: "flex min-h-full items-center justify-center px-4 text-center text-xs text-muted-foreground",
                                children: "Select a run from the Runs tab to inspect its execution timeline."
                            })
                        }) : null, "issues" === u ? (0, l.jsx)("div", {
                            className: "absolute inset-0 overflow-y-auto overscroll-y-contain p-3",
                            children: 0 === b.length && 0 === v.length && 0 === y.length && 0 === d.filter(e => "error" === e.level).length && 0 === E.length ? (0, l.jsx)("div", {
                                className: "flex min-h-full items-center justify-center px-4 text-center text-xs text-muted-foreground",
                                children: "No issues detected for this session yet. Retries, slow spans, and agent stream signals will appear here."
                            }) : (0, l.jsxs)("div", {
                                className: "space-y-3",
                                children: [y.map(e => {
                                    var t, n;
                                    return (0, l.jsxs)("div", {
                                        className: (0, J.cn)("rounded-xl border p-3", "error" === (t = e.severity) ? "border-destructive/30 bg-destructive/5" : "warn" === t ? "border-amber-500/30 bg-amber-500/5" : "border-border bg-muted/20"),
                                        children: [(0, l.jsxs)("p", {
                                            className: (0, J.cn)("text-xs font-medium", "error" === (n = e.severity) ? "text-destructive" : "warn" === n ? "text-amber-700 dark:text-amber-400" : "text-foreground"),
                                            children: [e.title, " \xb7 ", e.category]
                                        }), (0, l.jsx)("p", {
                                            className: "mt-1 text-xs text-foreground",
                                            children: e.message
                                        }), (0, l.jsxs)("p", {
                                            className: "mt-1 font-mono text-[10px] text-muted-foreground",
                                            children: ["completion: ", e.completionId, null != e.spanSeq ? " \xb7 seq ".concat(e.spanSeq) : ""]
                                        }), e.details ? (0, l.jsx)("pre", {
                                            className: "mt-2 overflow-auto rounded-md bg-background/80 p-2 font-mono text-[10px] text-foreground",
                                            children: JSON.stringify(e.details, null, 2)
                                        }) : null]
                                    }, e.id)
                                }), E.map(e => (0, l.jsxs)("div", {
                                    className: (0, J.cn)("rounded-xl border p-3", "error" === e.level ? "border-destructive/30 bg-destructive/5" : "border-amber-500/30 bg-amber-500/5"),
                                    children: [(0, l.jsxs)("p", {
                                        className: (0, J.cn)("text-xs font-medium", "error" === e.level ? "text-destructive" : "text-amber-700 dark:text-amber-400"),
                                        children: ["Live stream \xb7 ", e.category, " \xb7 ", (0, tJ.i$)(e.timestamp)]
                                    }), (0, l.jsx)("p", {
                                        className: "mt-1 text-xs text-foreground",
                                        children: e.message
                                    }), e.details ? (0, l.jsx)("pre", {
                                        className: "mt-2 overflow-auto rounded-md bg-background/80 p-2 font-mono text-[10px] text-foreground",
                                        children: JSON.stringify(e.details, null, 2)
                                    }) : null]
                                }, e.id)), b.map(e => (0, l.jsxs)("div", {
                                    className: "rounded-xl border border-destructive/30 bg-destructive/5 p-3",
                                    children: [(0, l.jsx)("p", {
                                        className: "text-xs font-medium text-destructive",
                                        children: "Completion failed"
                                    }), (0, l.jsx)("p", {
                                        className: "mt-1 font-mono text-[10px] text-muted-foreground",
                                        children: e.completion.id
                                    }), e.completion.error_msg ? (0, l.jsx)("p", {
                                        className: "mt-2 text-xs text-foreground",
                                        children: e.completion.error_msg
                                    }) : null]
                                }, e.completion.id)), v.map(e => {
                                    let {
                                        completion: t,
                                        span: n
                                    } = e;
                                    return (0, l.jsxs)("div", {
                                        className: "rounded-xl border border-destructive/30 bg-destructive/5 p-3",
                                        children: [(0, l.jsxs)("p", {
                                            className: "text-xs font-medium text-destructive",
                                            children: [(0, tJ.Fm)(n.span_type), " \xb7 seq ", n.seq]
                                        }), (0, l.jsx)("p", {
                                            className: "mt-1 font-mono text-[10px] text-muted-foreground",
                                            children: (0, tJ.$A)(n)
                                        }), (0, l.jsxs)("p", {
                                            className: "mt-1 font-mono text-[10px] text-muted-foreground",
                                            children: ["completion: ", t.id]
                                        }), (0, l.jsx)("pre", {
                                            className: "mt-2 overflow-auto rounded-md bg-background/80 p-2 font-mono text-[10px] text-foreground",
                                            children: JSON.stringify(n.attrs, null, 2)
                                        })]
                                    }, "".concat(t.id, "-").concat(n.id))
                                }), d.filter(e => "error" === e.level).map(e => (0, l.jsxs)("div", {
                                    className: "rounded-xl border border-destructive/30 bg-destructive/5 p-3",
                                    children: [(0, l.jsxs)("p", {
                                        className: "text-xs font-medium text-destructive",
                                        children: ["Client \xb7 ", e.category, " \xb7 ", (0, tJ.i$)(e.timestamp)]
                                    }), (0, l.jsx)("p", {
                                        className: "mt-1 text-xs text-foreground",
                                        children: e.message
                                    }), e.details ? (0, l.jsx)("pre", {
                                        className: "mt-2 overflow-auto rounded-md bg-background/80 p-2 font-mono text-[10px] text-foreground",
                                        children: JSON.stringify(e.details, null, 2)
                                    }) : null]
                                }, e.id))]
                            })
                        }) : null, "raw" === u ? (0, l.jsxs)("div", {
                            className: "absolute inset-0 flex min-h-0 flex-col overflow-hidden",
                            children: [(0, l.jsx)("div", {
                                className: "flex shrink-0 items-center gap-1 border-b border-border px-3 py-2",
                                children: tW.map(e => (0, l.jsx)("button", {
                                    type: "button",
                                    onClick: () => p(e.key),
                                    className: (0, J.cn)("rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors", f === e.key ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"),
                                    children: e.label
                                }, e.key))
                            }), (0, l.jsx)(tV, {
                                data: I
                            })]
                        }) : null, "client" === u ? (0, l.jsxs)("div", {
                            className: "absolute inset-0 flex min-h-0 flex-col overflow-hidden",
                            children: [(0, l.jsx)("div", {
                                className: "flex shrink-0 items-center justify-end gap-2 border-b border-border px-3 py-2",
                                children: c ? (0, l.jsx)(V.z, {
                                    type: "button",
                                    variant: "ghost",
                                    size: "icon-sm",
                                    onClick: c,
                                    disabled: 0 === d.length,
                                    "aria-label": "Clear debug logs",
                                    title: "Clear debug logs",
                                    children: (0, l.jsx)(tD.Z, {
                                        className: "size-3.5"
                                    })
                                }) : null
                            }), (0, l.jsx)(tV, {
                                data: d,
                                emptyMessage: "No client debug logs yet. Stream errors, API failures, upload issues, and retries will appear here.",
                                searchPlaceholder: "Search logs…"
                            })]
                        }) : null]
                    })]
                }) : null
            }
            var tK = n(87168),
                tH = n(93022),
                t$ = n(13762);
            let tY = [".mp4", ".webm", ".ogg", ".mov", ".avi"],
                tG = [".pdf", ".doc", ".docx"],
                tX = (e, t) => t.some(t => e.toLowerCase().endsWith(t)),
                tQ = e => tX(e, tY),
                t0 = e => tX(e, tG),
                t1 = () => {
                    if ("undefined" != typeof navigator) return navigator.connection
                },
                t2 = () => {
                    let e = t1();
                    return !!e && (!!e.saveData || "2g" === e.effectiveType || "slow-2g" === e.effectiveType)
                },
                t5 = [{
                    type: "image",
                    label: "Image",
                    icon: E.Z,
                    accent: "from-emerald-500/15 to-emerald-600/10",
                    iconColor: "text-emerald-600"
                }, {
                    type: "pdf",
                    label: "Document",
                    icon: S.Z,
                    accent: "from-blue-500/15 to-blue-600/10",
                    iconColor: "text-blue-600"
                }, {
                    type: "video",
                    label: "Video",
                    icon: T.Z,
                    accent: "from-violet-500/15 to-violet-600/10",
                    iconColor: "text-violet-600"
                }],
                t4 = {
                    pdf: "Document",
                    image: "Image",
                    video: "Video"
                },
                t3 = e => {
                    var t;
                    return null !== (t = t4[e]) && void 0 !== t ? t : e
                };

            function t6(e) {
                let {
                    src: t,
                    previewTime: n,
                    duration: r,
                    className: i = ""
                } = e;
                return (0, l.jsxs)("div", {
                    className: "relative size-full",
                    children: [(0, l.jsx)("video", {
                        src: t,
                        className: (0, J.cn)("size-full object-cover transition-transform duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105", i),
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        preload: "metadata",
                        onLoadedMetadata: e => {
                            n && (e.currentTarget.currentTime = n)
                        },
                        onMouseEnter: e => {
                            var t;
                            null === (t = e.currentTarget.play()) || void 0 === t || t.catch(e => {
                                (null == e ? void 0 : e.name) !== "AbortError" && console.warn("Preview failed to play", e)
                            })
                        },
                        onMouseLeave: e => {
                            e.currentTarget.pause(), n && (e.currentTarget.currentTime = n)
                        }
                    }), r && (0, l.jsx)("div", {
                        className: "absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs text-white opacity-0 transition-opacity duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100",
                        children: function(e) {
                            let t = Math.floor(e / 3600),
                                n = Math.floor(e % 3600 / 60),
                                l = e % 60,
                                r = e => e.toString().padStart(2, "0");
                            return t > 0 ? "".concat(t, ":").concat(r(n), ":").concat(r(l)) : "".concat(n, ":").concat(r(l))
                        }(r)
                    })]
                })
            }

            function t8(e) {
                let {
                    onTemplateClick: t,
                    onMediaClick: n,
                    onMediaFileClick: i,
                    onTemplatePreview: a,
                    isStreaming: s,
                    isThinking: o,
                    showMediaShowcase: d = null,
                    onCloseShowcase: c,
                    onTemplatesVisibilityChange: u
                } = e, {
                    data: m = [],
                    isLoading: f,
                    isError: p
                } = (0, t$.rx)(), {
                    data: h
                } = (0, t$.$9)(), [g, x] = (0, r.useState)(9), v = (0, r.useRef)(null), b = m.filter(e => !1 !== e.isActive), y = p ? "Unable to load use case templates right now." : null, {
                    prefetchMedia: w,
                    prefetchSharedChat: j,
                    prefetchTemplate: N
                } = function() {
                    let e = (0, r.useRef)(new Set),
                        t = (0, r.useCallback)((t, n) => {
                            if (!e.current.has(t)) {
                                e.current.add(t);
                                try {
                                    if ("image" === n) {
                                        let e = new Image;
                                        e.decoding = "async", e.src = t
                                    } else fetch(t, {
                                        mode: "no-cors",
                                        credentials: "omit"
                                    }).catch(() => {})
                                } catch (e) {}
                            }
                        }, []),
                        n = (0, r.useCallback)(e => {
                            if (!t2())
                                for (let n of e) !n || tQ(n) || t(n, t0(n) ? "fetch" : "image")
                        }, [t]),
                        l = (0, r.useCallback)(e => {
                            n([...e.documentUrl, ...e.imageUrl, ...e.inputUrl, e.previewUrl])
                        }, [n]),
                        i = (0, r.useCallback)(t => {
                            let n;
                            if (!t || t2()) return;
                            try {
                                n = new URL(t)
                            } catch (e) {
                                return
                            }
                            if ("undefined" != typeof document && !e.current.has(t)) {
                                e.current.add(t);
                                try {
                                    let e = document.createElement("link");
                                    e.rel = "prefetch", e.setAttribute("as", "document"), e.href = t, document.head.appendChild(e)
                                } catch (e) {}
                            }
                            let l = n.pathname.split("/").filter(Boolean).pop();
                            if (l) {
                                let t = "".concat(n.origin, "/api/chat-messages/").concat(l);
                                if (!e.current.has(t)) {
                                    e.current.add(t);
                                    try {
                                        fetch(t, {
                                            mode: "no-cors",
                                            credentials: "omit"
                                        }).catch(() => {})
                                    } catch (e) {}
                                }
                            }
                        }, []),
                        a = (0, r.useCallback)(e => {
                            l(e), i(e.sharedUrl)
                        }, [l, i]);
                    return {
                        prefetchMedia: n,
                        prefetchTemplateMedia: l,
                        prefetchSharedChat: i,
                        prefetchTemplate: a
                    }
                }();
                (0, r.useEffect)(() => {
                    null == u || u(!0)
                }, [u]), (0, r.useEffect)(() => {
                    d ? null == u || u(!1) : null == u || u(!0)
                }, [d, u]), (0, r.useEffect)(() => {
                    let e = b.slice(0, 6);
                    if (!e.length) return;
                    let t = () => e.forEach(e => j(e.sharedUrl));
                    if ("function" == typeof window.requestIdleCallback) {
                        let e = window.requestIdleCallback(t, {
                            timeout: 3e3
                        });
                        return () => {
                            var t, n;
                            return null === (t = (n = window).cancelIdleCallback) || void 0 === t ? void 0 : t.call(n, e)
                        }
                    }
                    let n = window.setTimeout(t, 1500);
                    return () => window.clearTimeout(n)
                }, [b, j]), (0, r.useEffect)(() => {
                    let e = v.current;
                    if (!e) return;
                    let t = new IntersectionObserver(e => {
                        var t;
                        (null === (t = e[0]) || void 0 === t ? void 0 : t.isIntersecting) && g < b.length && x(e => e + 9)
                    }, {
                        threshold: .1
                    });
                    return t.observe(e), () => t.disconnect()
                }, [g, b.length]);
                let k = (0, r.useCallback)(async e => {
                        var n, l, r;
                        let s = null !== (r = null !== (l = null !== (n = e.sharedUrl) && void 0 !== n ? n : e.sharedURL) && void 0 !== l ? l : e.shared_url) && void 0 !== r ? r : e.sharedurl;
                        if (a) {
                            a({
                                ...e,
                                sharedUrl: null != s ? s : e.sharedUrl
                            });
                            return
                        }
                        if ((e.inputUrl.length > 0 || e.documentUrl.length > 0) && i) try {
                            await i(e.type, e), await new Promise(e => setTimeout(e, 0))
                        } catch (e) {
                            console.error("Failed to load predefined media asset:", e)
                        }
                        t(e.prompt)
                    }, [i, t, a]),
                    C = b.slice(0, g),
                    I = g < b.length;
                return d ? (() => {
                    var e, n;
                    if (!d) return null;
                    if (!h) return (0, l.jsx)("div", {
                        className: "flex min-h-[calc(52vh)] flex-col items-center justify-center px-6",
                        children: (0, l.jsx)("p", {
                            className: "text-center text-sm text-muted-foreground",
                            children: "Loading showcase content..."
                        })
                    });
                    let r = null !== (e = h.samplePromptOptions[d]) && void 0 !== e ? e : [],
                        a = null !== (n = h.mediaFileOptions[d]) && void 0 !== n ? n : [],
                        c = r.map(e => e.prompt);
                    return (0, l.jsx)("div", {
                        className: "flex min-h-[calc(52vh)] flex-col",
                        children: (0, l.jsx)("div", {
                            className: "flex flex-1 flex-col items-center justify-start px-4 pb-12 sm:px-6",
                            children: (0, l.jsxs)("div", {
                                className: "mx-auto w-full max-w-3xl space-y-6",
                                children: [(0, l.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [(0, l.jsx)("h2", {
                                        className: "text-sm font-semibold text-gray-600",
                                        children: "Pick a task"
                                    }), (0, l.jsx)("div", {
                                        className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
                                        children: c.map((e, n) => {
                                            let i = r[n];
                                            return (0, l.jsxs)("button", {
                                                onClick: () => t(e),
                                                disabled: s || o,
                                                className: "group relative aspect-[4/2.5] overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 disabled:cursor-not-allowed disabled:opacity-60",
                                                children: [(0, l.jsx)("div", {
                                                    className: "absolute inset-0 flex items-center justify-center transition-opacity duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-0",
                                                    children: (0, l.jsx)("h3", {
                                                        className: "whitespace-pre-line px-4 text-center text-lg font-medium leading-tight text-gray-900 group-hover:text-gray-800",
                                                        children: i.title
                                                    })
                                                }), (0, l.jsx)("div", {
                                                    className: "absolute inset-0 flex items-center p-3 opacity-0 transition-opacity duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100",
                                                    children: (0, l.jsx)("p", {
                                                        className: "text-sm leading-relaxed text-gray-700",
                                                        children: e
                                                    })
                                                })]
                                            }, n)
                                        })
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [(0, l.jsxs)("h2", {
                                        className: "text-sm font-semibold text-gray-600",
                                        children: ["Sample ", "pdf" === d ? "documents" : "image" === d ? "images" : "videos"]
                                    }), (0, l.jsx)("div", {
                                        className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
                                        children: a.map(e => (0, l.jsxs)("button", {
                                            onClick: () => {
                                                var t, n, l, r, a, s, o, c, u;
                                                if (!i) return;
                                                let m = {
                                                    id: e.id,
                                                    type: d,
                                                    title: e.title,
                                                    prompt: "",
                                                    category: "featured",
                                                    previewUrl: null !== (r = null !== (l = e.thumbnailUrl) && void 0 !== l ? l : null === (t = e.imageUrl) || void 0 === t ? void 0 : t[0]) && void 0 !== r ? r : null === (n = e.videoUrl) || void 0 === n ? void 0 : n[0],
                                                    inputUrl: "image" === d ? null !== (a = e.imageUrl) && void 0 !== a ? a : [] : "video" === d && null !== (s = e.videoUrl) && void 0 !== s ? s : [],
                                                    documentUrl: "pdf" === d && null !== (o = e.imageUrl) && void 0 !== o ? o : [],
                                                    imageUrl: null !== (c = e.imageUrl) && void 0 !== c ? c : [],
                                                    videoUrl: null !== (u = e.videoUrl) && void 0 !== u ? u : [],
                                                    previewTime: e.previewTime,
                                                    duration: e.duration
                                                };
                                                i(d, m)
                                            },
                                            onMouseEnter: () => {
                                                var t;
                                                return w([...null !== (t = e.imageUrl) && void 0 !== t ? t : [], e.thumbnailUrl])
                                            },
                                            onFocus: () => {
                                                var t;
                                                return w([...null !== (t = e.imageUrl) && void 0 !== t ? t : [], e.thumbnailUrl])
                                            },
                                            disabled: s || o,
                                            className: "group flex flex-col items-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-60",
                                            children: [(0, l.jsx)("div", {
                                                className: "relative mb-3 aspect-video w-full overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] group-hover:border-gray-300",
                                                children: e.thumbnailUrl ? (0, l.jsx)("img", {
                                                    src: e.thumbnailUrl,
                                                    alt: e.title,
                                                    className: "size-full object-cover transition-transform duration-300 group-hover:scale-105",
                                                    loading: "lazy"
                                                }) : e.imageUrl ? (0, l.jsx)("img", {
                                                    src: e.imageUrl[0],
                                                    alt: e.title,
                                                    className: "size-full object-cover transition-transform duration-300 group-hover:scale-105",
                                                    loading: "lazy"
                                                }) : e.videoUrl ? (0, l.jsx)(t6, {
                                                    src: e.videoUrl[0],
                                                    previewTime: e.previewTime,
                                                    duration: e.duration
                                                }) : (0, l.jsx)("div", {
                                                    className: "flex size-full items-center justify-center bg-muted px-3 text-center",
                                                    children: (0, l.jsx)("span", {
                                                        className: "text-sm font-semibold text-gray-600",
                                                        children: e.title
                                                    })
                                                })
                                            }), (0, l.jsx)("h3", {
                                                className: "text-center text-sm font-bold leading-tight text-gray-900 group-hover:text-gray-800",
                                                children: e.title
                                            })]
                                        }, e.id))
                                    })]
                                })]
                            })
                        })
                    })
                })() : (0, l.jsxs)("div", {
                    className: "mx-auto w-full max-w-4xl pb-8 sm:px-6",
                    children: [(0, l.jsx)("div", {
                        className: "mb-6",
                        children: (0, l.jsx)("div", {
                            className: "flex justify-center",
                            children: (0, l.jsx)("div", {
                                className: "flex flex-wrap justify-center gap-2",
                                children: t5.map(e => {
                                    let {
                                        type: t,
                                        label: r,
                                        icon: i,
                                        accent: a,
                                        iconColor: o
                                    } = e;
                                    return (0, l.jsxs)("button", {
                                        onClick: () => n(t),
                                        disabled: s,
                                        className: "group flex items-center gap-1.5 rounded-2xl border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 transition-all duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:border-gray-400 hover:bg-gray-100 hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-60",
                                        type: "button",
                                        children: [(0, l.jsx)("span", {
                                            className: (0, J.cn)("flex size-5 items-center justify-center rounded-md bg-gradient-to-br", a, "border border-transparent transition-colors"),
                                            children: (0, l.jsx)(i, {
                                                className: (0, J.cn)("size-3", o)
                                            })
                                        }), (0, l.jsx)("span", {
                                            children: r
                                        })]
                                    }, t)
                                })
                            })
                        })
                    }), y && (0, l.jsx)("p", {
                        className: "mb-4 text-center text-sm text-amber-600",
                        children: y
                    }), !f && 0 === C.length && (0, l.jsx)("p", {
                        className: "mb-4 text-center text-sm text-muted-foreground",
                        children: "No templates available yet."
                    }), f ? (0, l.jsx)("div", {
                        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                        children: Array.from({
                            length: 9
                        }).map((e, t) => (0, l.jsxs)("div", {
                            className: "flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white",
                            style: {
                                minHeight: "160px"
                            },
                            children: [(0, l.jsx)(tH.O, {
                                className: "aspect-[5/4] w-full rounded-none rounded-t-2xl"
                            }), (0, l.jsx)("div", {
                                className: "px-4 py-3",
                                children: (0, l.jsx)(tH.O, {
                                    className: "h-4 w-3/4"
                                })
                            })]
                        }, t))
                    }) : (0, l.jsx)("div", {
                        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                        children: C.map((e, t) => {
                            var n;
                            let r = t5.find(t => t.type === e.type),
                                i = null !== (n = null == r ? void 0 : r.icon) && void 0 !== n ? n : S.Z;
                            return (0, l.jsxs)("button", {
                                type: "button",
                                onClick: () => void k(e),
                                onMouseEnter: () => N(e),
                                onFocus: () => N(e),
                                disabled: s || o,
                                "data-reveal": !0,
                                className: "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white text-left opacity-100 transition-all duration-200 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:border-gray-400 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 disabled:cursor-not-allowed disabled:opacity-60",
                                style: {
                                    "--i": t,
                                    transitionDelay: "calc(var(--i) * 60ms)",
                                    minHeight: "160px"
                                },
                                children: [(0, l.jsx)("div", {
                                    className: "flex aspect-[5/4] w-full items-center justify-center overflow-hidden rounded-t-2xl border-b border-border/20 bg-gradient-to-br from-gray-100 to-gray-50",
                                    children: e.previewUrl ? tQ(e.previewUrl) ? (0, l.jsx)(t6, {
                                        src: e.previewUrl,
                                        previewTime: e.previewTime,
                                        duration: e.duration
                                    }) : t0(e.previewUrl) ? (0, l.jsx)("div", {
                                        className: "flex size-full items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50",
                                        children: (0, l.jsx)(S.Z, {
                                            className: "size-12 text-blue-500"
                                        })
                                    }) : (0, l.jsx)("img", {
                                        src: e.previewUrl,
                                        alt: e.title,
                                        className: "size-full object-cover",
                                        loading: "lazy"
                                    }) : e.documentUrl && e.documentUrl.length > 0 ? (0, l.jsx)("div", {
                                        className: "flex size-full items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50",
                                        children: (0, l.jsx)(S.Z, {
                                            className: "size-12 text-blue-500"
                                        })
                                    }) : (0, l.jsx)("img", {
                                        src: "/placeholder.svg",
                                        alt: "placeholder",
                                        className: "size-12 opacity-20"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "px-4 py-3",
                                    children: (0, l.jsxs)("div", {
                                        className: "flex items-center justify-between gap-2",
                                        children: [(0, l.jsx)("h3", {
                                            className: "text-sm font-medium leading-tight text-gray-800",
                                            children: e.title
                                        }), (0, l.jsx)("span", {
                                            className: (0, J.cn)("flex size-4 shrink-0 items-center justify-center rounded-md border border-transparent bg-gradient-to-br", null == r ? void 0 : r.accent),
                                            "aria-label": t3(e.type),
                                            children: (0, l.jsx)(i, {
                                                className: (0, J.cn)("size-2.5", null == r ? void 0 : r.iconColor)
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)("span", {
                                    className: "sr-only",
                                    children: e.title
                                })]
                            }, e.id)
                        })
                    }), I && (0, l.jsx)("div", {
                        ref: v,
                        className: "h-8"
                    })]
                })
            }
            var t7 = n(9009),
                t9 = n(86408);
            let ne = ["See. Think. Create. Repeat.", "Turn pixels into possibilities.", "Lights, camera, inference!", "Got something to show me? I've got the vision.", "Let's look closer — there's magic in every pixel.", "I see what you mean — literally."],
                nt = "https://app.vlm.run",
                nn = "We're experiencing some slowness reaching the model and couldn't complete the request after a few retries. Please try again in a moment.",
                nl = "vlm_chat_draft_state",
                nr = "vlm_chat_draft_text",
                ni = "vlm_create_draft_card",
                na = "https://storage.googleapis.com/vlm-data-public-prod/web/videos/Orion.mp4",
                ns = [{
                    title: "Extract data from documents",
                    preview: (0, l.jsx)("img", {
                        src: "/feature-cards/document.svg",
                        alt: "",
                        className: "h-auto w-full"
                    })
                }, {
                    title: "Analyze images and videos",
                    preview: (0, l.jsx)("img", {
                        src: "/feature-cards/visual_artifacts.svg",
                        alt: "",
                        className: "h-auto w-full"
                    })
                }, {
                    title: "Generate structured output",
                    preview: (0, l.jsx)("img", {
                        src: "/feature-cards/generate_structured_outputs.svg",
                        alt: "",
                        className: "h-auto w-full"
                    })
                }, {
                    title: "Build visual workflows",
                    preview: (0, l.jsx)("img", {
                        src: "/feature-cards/Build_visual_workflows.svg",
                        alt: "",
                        className: "h-auto w-full"
                    })
                }];

            function no(e, t) {
                var n, l;
                let r = null == e ? void 0 : null === (l = e.response) || void 0 === l ? void 0 : null === (n = l.data) || void 0 === n ? void 0 : n.detail;
                return r ? "string" == typeof r ? r : Array.isArray(r) ? r.map(e => "string" == typeof e ? e : (null == e ? void 0 : e.msg) || JSON.stringify(e)).join("; ") : JSON.stringify(r) : (null == e ? void 0 : e.message) || t
            }

            function nd(e) {
                return no(e, "").toLowerCase().includes("chat session not found")
            }
            async function nc(e) {
                let t;
                try {
                    return await e()
                } catch (e) {
                    if (!nd(e)) throw e;
                    t = e
                }
                for (let n of [5e3, 15e3, 45e3, 9e4]) {
                    await new Promise(e => setTimeout(e, n));
                    try {
                        return await e()
                    } catch (e) {
                        if (!nd(e)) throw e;
                        t = e
                    }
                }
                throw t
            }
            let nu = e => {
                    var t, n, l;
                    let r = null !== (l = null === (n = e.message) || void 0 === n ? void 0 : null === (t = n.toLowerCase) || void 0 === t ? void 0 : t.call(n)) && void 0 !== l ? l : "";
                    return "TypeError" === e.name || ["network", "fetch", "timeout", "503", "504", "502", "err_http2", "socket hang up", "temporarily unavailable", "vlm agent api error (5"].some(e => r.includes(e))
                },
                nm = [{
                    value: "none",
                    label: "Off",
                    Icon: g.Z
                }, {
                    value: "rectangle",
                    label: "Box",
                    Icon: x.Z
                }, {
                    value: "pointer",
                    label: "Point",
                    Icon: v.Z
                }, {
                    value: "brush",
                    label: "Brush",
                    Icon: b.Z
                }],
                nf = e => "touch" === e.pointerType ? !1 !== e.isPrimary : 0 === e.button || 1 === e.buttons || -1 === e.button && !1 !== e.isPrimary,
                np = "mention_ref",
                nh = () => RegExp("\\[\\[img:([^:]+):([^\\]]+)\\]\\]", "g"),
                ng = e => {
                    if (!e) return e;
                    let t = RegExp("<".concat(np, ">[\\s\\S]*?<\\/").concat(np, ">"), "g");
                    return e.replace(t, "").replace(/(?:^|\s)(Image|Video|Document)\s+reference:[^\n]*\n?/gi, "")
                },
                nx = (e, t) => "[[img:".concat(e, ":").concat(t, "]]"),
                nv = (e, t) => t ? e.replace(/(^|\s)@([a-zA-Z0-9_-]{6,})(?=$|\s|[.,!?:;)\]])/g, (e, n, l) => "".concat(null != n ? n : "").concat(nx(t, l))) : e,
                nb = (e, t) => e.replace(/@\[(?:([a-zA-Z0-9_-]+):)?([a-zA-Z0-9_-]+)\]/g, (e, n, l) => {
                    var r;
                    let i = (null !== (r = null != n ? n : t) && void 0 !== r ? r : "").trim();
                    return i ? nx(i, l) : e
                }),
                ny = (e, t) => nb(nv(e, t), t),
                nw = (e, t, n) => Math.min(Math.max(e, t), n),
                nj = {
                    pdf: "Document",
                    image: "Image",
                    video: "Video"
                },
                nN = e => {
                    var t, n, a;
                    let {
                        file: s,
                        isProcessing: o,
                        isError: d,
                        isReady: c,
                        onPreviewClick: u,
                        onRemove: m
                    } = e, [f, p] = (0, r.useState)(null), h = (0, r.useRef)(null), [g, x] = (0, r.useState)(!1), [v, b] = (0, r.useState)(!1), [k, C] = (0, r.useState)(!1), [S, I] = (0, r.useState)(null);
                    (0, r.useEffect)(() => {
                        if (!s.file || "video" !== s.type && "audio" !== s.type) {
                            I(null);
                            return
                        }
                        let e = URL.createObjectURL(s.file);
                        return I(e), () => {
                            URL.revokeObjectURL(e)
                        }
                    }, [s.file, s.id, s.type]);
                    let E = S || s.previewUrl,
                        _ = (null === (n = s.file) || void 0 === n ? void 0 : null === (t = n.name) || void 0 === t ? void 0 : t.trim()) || "Video";
                    (0, r.useEffect)(() => {
                        p(null), b(!1), C(!1), x(!1)
                    }, [E]);
                    let z = (0, r.useMemo)(() => {
                        if (!f) return {
                            width: 96,
                            height: 96
                        };
                        let {
                            width: e,
                            height: t
                        } = f;
                        if (e <= 0 || t <= 0) return {
                            width: 96,
                            height: 96
                        };
                        let n = Math.min(160 / e, 160 / t, 1);
                        return {
                            width: Math.round(e * n),
                            height: Math.round(t * n)
                        }
                    }, [f]);
                    return (0, l.jsx)("div", {
                        className: "flex flex-col items-center gap-1",
                        children: (0, l.jsxs)("div", {
                            className: "relative",
                            style: {
                                width: z.width,
                                height: z.height
                            },
                            children: [(0, l.jsxs)("button", {
                                type: "button",
                                onClick: () => {
                                    c && u()
                                },
                                onMouseEnter: () => {
                                    "video" === s.type && h.current && !k && h.current.play().then(() => {
                                        x(!0)
                                    }).catch(() => {})
                                },
                                onMouseLeave: () => {
                                    "video" === s.type && h.current && (h.current.pause(), h.current.currentTime = 0, x(!1))
                                },
                                disabled: !c,
                                className: "group relative flex size-full items-center justify-center overflow-hidden rounded-xl border border-border/40 bg-muted/40 transition-all duration-200 ".concat(c ? "cursor-pointer hover:border-border/80" : o ? "cursor-default opacity-80" : "cursor-not-allowed", " ").concat(d ? "border-red-300 bg-red-50/70" : ""),
                                children: ["video" === s.type ? (0, l.jsxs)("div", {
                                    className: "relative size-full bg-black",
                                    children: [E && !k ? (0, l.jsx)("video", {
                                        ref: h,
                                        src: E,
                                        muted: !0,
                                        loop: !0,
                                        playsInline: !0,
                                        preload: "metadata",
                                        onLoadedMetadata: e => {
                                            let t = e.currentTarget;
                                            t.videoWidth && t.videoHeight && p(e => e && e.width === t.videoWidth && e.height === t.videoHeight ? e : {
                                                width: t.videoWidth,
                                                height: t.videoHeight
                                            })
                                        },
                                        onLoadedData: () => b(!0),
                                        onError: () => C(!0),
                                        className: "size-full object-contain transition-transform duration-200 ".concat(c ? "group-hover:scale-105" : "", " ").concat(v ? "" : "invisible")
                                    }) : null, v || k || !E ? null : (0, l.jsx)("div", {
                                        className: "absolute inset-0",
                                        children: (0, l.jsx)(G.d, {
                                            kind: "video",
                                            rounded: "xl",
                                            className: "border-0",
                                            pathSeed: E || s.id
                                        })
                                    }), k || !E ? (0, l.jsxs)("div", {
                                        className: "absolute inset-0 flex flex-col items-center justify-center gap-1 bg-zinc-900 px-2 text-center",
                                        children: [(0, l.jsx)(y.Z, {
                                            className: "size-6 text-white/80"
                                        }), (0, l.jsx)("span", {
                                            className: "line-clamp-2 w-full text-[10px] font-medium leading-tight text-white/80",
                                            children: _
                                        })]
                                    }) : null]
                                }) : s.previewUrl ? (0, l.jsx)(i.default, {
                                    src: s.previewUrl,
                                    alt: (null === (a = s.file) || void 0 === a ? void 0 : a.name) || "Image preview",
                                    onLoad: e => {
                                        let t = e.currentTarget;
                                        t.naturalWidth && t.naturalHeight && p(e => e && e.width === t.naturalWidth && e.height === t.naturalHeight ? e : {
                                            width: t.naturalWidth,
                                            height: t.naturalHeight
                                        })
                                    },
                                    fill: !0,
                                    className: "object-contain transition-transform duration-200 ".concat(c ? "group-hover:scale-105" : ""),
                                    unoptimized: !0
                                }) : (0, l.jsx)("div", {
                                    className: "flex size-full items-center justify-center bg-muted/50",
                                    children: (0, l.jsx)(w.Z, {
                                        className: "size-8 text-muted-foreground"
                                    })
                                }), o && (0, l.jsxs)("div", {
                                    className: "absolute inset-0 flex flex-col items-center justify-center bg-background/70 backdrop-blur-sm",
                                    children: [(0, l.jsx)(j.Z, {
                                        className: "size-5 animate-spin text-muted-foreground"
                                    }), (0, l.jsx)("span", {
                                        className: "mt-1 px-1 text-center text-[10px] font-medium text-muted-foreground",
                                        children: s.statusLabel || "Uploading…"
                                    })]
                                }), d && (0, l.jsxs)("div", {
                                    className: "absolute inset-0 flex flex-col items-center justify-center bg-red-500/10",
                                    children: [(0, l.jsx)(N.Z, {
                                        className: "size-5 text-red-500"
                                    }), (0, l.jsx)("span", {
                                        className: "mt-1 text-[10px] font-medium text-red-500",
                                        children: "Failed"
                                    })]
                                })]
                            }), (0, l.jsx)("button", {
                                type: "button",
                                onClick: e => {
                                    e.stopPropagation(), m()
                                },
                                className: "absolute right-1 top-1 flex size-6 items-center justify-center rounded-full bg-background ring-1 ring-border/60 transition hover:bg-muted",
                                children: (0, l.jsx)(N.Z, {
                                    className: "size-3"
                                })
                            })]
                        })
                    })
                },
                nk = e => {
                    let t = nh(),
                        n = [],
                        l = e.replace(t, (e, t, l) => (n.push({
                            artifactId: t,
                            objectId: l
                        }), ""));
                    return {
                        mentions: n,
                        text: l.replace(/\s{2,}/g, " ").trim(),
                        textWithWhitespace: l
                    }
                },
                nC = (e, t) => {
                    let n;
                    let l = e.slice(0, t),
                        r = l.lastIndexOf("@");
                    if (-1 === r) return null;
                    let i = nh();
                    for (; null !== (n = i.exec(e));) {
                        let e = n.index,
                            t = e + n[0].length;
                        if (r >= e && r <= t) return null
                    }
                    if (r > 0) {
                        let e = l[r - 1];
                        if (e && !/\s/.test(e)) return null
                    }
                    let a = l.slice(r + 1);
                    return {
                        start: r,
                        end: t,
                        query: a
                    }
                },
                nS = (e, t) => {
                    let n;
                    let l = nh();
                    for (; null !== (n = l.exec(e));) {
                        let e = n.index,
                            l = e + n[0].length;
                        if (t > e && t <= l) return {
                            start: e,
                            end: l
                        }
                    }
                    return null
                },
                nI = (e, t, n) => e.slice(0, t) + e.slice(n),
                nE = e => {
                    let t = [],
                        n = 0,
                        l = nh();
                    return e.replace(l, (l, r, i, a) => (a > n && t.push({
                        type: "text",
                        text: e.slice(n, a)
                    }), t.push({
                        type: "mention",
                        artifactId: r,
                        objectId: i
                    }), n = a + l.length, l)), n < e.length && t.push({
                        type: "text",
                        text: e.slice(n)
                    }), 0 === t.length && t.push({
                        type: "text",
                        text: e
                    }), t
                },
                n_ = (0, r.memo)(function(e) {
                    let {
                        item: t,
                        editingState: n,
                        isStreaming: i,
                        isThinking: a,
                        isAutoScrollLocked: s,
                        streamingTurnId: o,
                        handleArtifactClick: d,
                        contextPreviewMap: c,
                        mentionObjectMap: u,
                        handlePreviewOpen: m,
                        handleStartEdit: f,
                        handleEditDraftChange: p,
                        handleCancelEdit: h,
                        handleSubmitEdit: g,
                        handleNavigateBranch: x,
                        handleRegenerate: v,
                        onShare: b,
                        isViewOnly: y,
                        sessionCredits: w,
                        sessionMetadata: j,
                        sessionId: N,
                        onSkillClick: k,
                        mediaCardsLayoutEnabled: C,
                        embedChrome: S = !1,
                        onEmbedPreviewOpenChange: I
                    } = e, E = "user" === t.role, _ = (null == n ? void 0 : n.turnId) === t.turnId, z = (0, r.useCallback)((e, t) => {
                        if ("inline" === e) {
                            let e = null == u ? void 0 : u.get(t);
                            return e ? c.get("".concat(e, ":").concat(t)) : void 0
                        }
                        let n = "".concat(e, ":").concat(t),
                            l = c.get(n);
                        if (l) return l;
                        let r = null == u ? void 0 : u.get(t);
                        if (r) return c.get("".concat(r, ":").concat(t))
                    }, [c, u]);
                    return (0, l.jsx)("div", {
                        ...E ? {
                            "data-section-id": t.key
                        } : {},
                        style: {
                            contain: "layout style paint",
                            contentVisibility: "auto"
                        },
                        children: (0, l.jsx)(tc.K, {
                            message: t.message,
                            onArtifactClick: d,
                            resolveMentionImage: z,
                            mentionObjectMap: u,
                            autoScrollLocked: s,
                            onPreviewOpen: m,
                            turnId: E ? t.turnId : void 0,
                            branchMeta: E ? t.branchMeta : void 0,
                            branchModelLabel: E ? t.modelLabel : void 0,
                            isEditing: E ? _ : void 0,
                            editingDraft: E && _ ? null == n ? void 0 : n.draft : void 0,
                            onStartEdit: E ? () => f(t.turnId) : void 0,
                            onEditChange: E ? p : void 0,
                            onEditCancel: E ? h : void 0,
                            onEditSave: E ? g : void 0,
                            disableEdit: E ? i || a || !!o : void 0,
                            onBranchNavigate: E && t.branchMeta && t.branchMeta.total > 1 ? e => x(t.turnId, e) : void 0,
                            onRegenerate: E ? void 0 : () => v(t.turnId),
                            isStreamingForTurn: o === t.turnId,
                            onShare: b,
                            isViewOnly: y,
                            sessionCredits: w,
                            sessionMetadata: j,
                            sessionId: N,
                            onSkillClick: k,
                            mediaCardsLayoutEnabled: C,
                            embedChrome: S,
                            onEmbedPreviewOpenChange: I
                        })
                    })
                });

            function nz(e) {
                if (!e) return;
                let {
                    width: t,
                    height: n
                } = e;
                if (t && n && Number.isFinite(t) && Number.isFinite(n) && 0 !== n) return Number((t / n).toFixed(4))
            }

            function nF(e) {
                let {
                    image: t
                } = e;
                return "image" === t.kind ? (0, l.jsx)(i.default, {
                    src: t.url,
                    alt: t.label,
                    fill: !0,
                    className: "object-cover",
                    unoptimized: !0
                }) : "video" === t.kind ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("video", {
                        src: "".concat(t.url, "#t=0.1"),
                        muted: !0,
                        playsInline: !0,
                        preload: "metadata",
                        className: "size-full object-cover"
                    }), (0, l.jsx)("span", {
                        className: "pointer-events-none absolute inset-0 flex items-center justify-center",
                        children: (0, l.jsx)("span", {
                            className: "flex size-7 items-center justify-center rounded-full bg-black/55 text-white",
                            children: (0, l.jsx)(k.Z, {
                                className: "size-3.5 fill-current"
                            })
                        })
                    })]
                }) : "model" === t.kind ? (0, l.jsx)("div", {
                    className: "flex size-full items-center justify-center rounded-2xl bg-slate-900",
                    children: (0, l.jsx)("span", {
                        className: "flex size-9 items-center justify-center rounded-full bg-white/10 text-white",
                        children: (0, l.jsx)(C.Z, {
                            className: "size-5"
                        })
                    })
                }) : (0, l.jsx)("div", {
                    className: "flex size-full items-center justify-center rounded-2xl bg-background",
                    children: (0, l.jsx)("span", {
                        className: "flex size-9 items-center justify-center rounded-full bg-red-50 text-red-500",
                        children: (0, l.jsx)(S.Z, {
                            className: "size-5"
                        })
                    })
                })
            }

            function nM(e) {
                var t, n, p, g, x, v, b, w, G;
                let {
                    onArtifactSelected: es,
                    onStreamingStart: eo,
                    onStreamingEnd: ed,
                    sessionId: ec,
                    initialConversation: eu,
                    onConversationUpdate: em,
                    headerVisible: ef = !0,
                    isArtifactPanelOpen: ep = !1,
                    onArtifactPanelClose: eh,
                    isSidebarOpen: eg = !1,
                    useCaseButtonOffsetPx: ex = 0,
                    showPublicNewChatLink: ev = !1,
                    lockdownView: eb = !1,
                    hideAuthButtons: ey = !1,
                    customTitle: ew,
                    showLogo: ej = !0,
                    showInputBanner: eN = !1,
                    inputBannerText: ek,
                    hideUseCaseTemplates: eC = !1,
                    hideScrollToBottomButton: e5 = !1,
                    showModeLabels: e3 = !0,
                    hideSkillSelector: e7 = !1,
                    initialSkillId: e9,
                    initialAttachmentUrl: te,
                    initialAttachmentType: tl,
                    initialFileIds: tm,
                    initialMessage: th,
                    autoSubmit: tv = !1,
                    initialToolsets: tb,
                    initialModels: tj,
                    ocrArenaEnabled: tN = !1,
                    ocrArenaRequest: tk = 0,
                    onOcrCompareModeChange: tC,
                    storybookSlot: tI
                } = e, tE = (0, to.n)(), {
                    isShort: tF,
                    isNarrow: tM,
                    width: tT,
                    height: tD,
                    mounted: tA
                } = (0, eE.sT)(), tU = tF || tM, tR = tU && tT > tD && (tD > 0 ? tT / Math.max(tD, 1) : 1) >= 1.5, [tL, tO] = (0, r.useState)(() => null != ec ? ec : null), [tP, tZ] = (0, r.useState)(""), [tJ, tq] = (0, r.useState)(""), [tW, tV] = (0, r.useState)(new Map), [tH, t$] = (0, r.useState)(() => {
                    try {
                        {
                            let e = new URLSearchParams(window.location.hash.replace(/^#/, "")).get("pending_chat_files");
                            if (e) {
                                history.replaceState(null, "", "".concat(window.location.pathname).concat(window.location.search));
                                let t = JSON.parse(e);
                                if (Array.isArray(t) && t.length > 0) return t.map(e => ({
                                    id: crypto.randomUUID(),
                                    type: e.type || "pdf",
                                    fileId: e.fileId,
                                    base64: e.base64,
                                    url: e.previewUrl || e.base64,
                                    previewUrl: e.previewUrl || e.base64,
                                    uploadedUrl: e.previewUrl,
                                    status: "ready"
                                }))
                            }
                            let t = sessionStorage.getItem("pending_chat_files");
                            if (t) {
                                sessionStorage.removeItem("pending_chat_files");
                                let e = JSON.parse(t);
                                if (Array.isArray(e) && e.length > 0) return e.map(e => ({
                                    id: crypto.randomUUID(),
                                    type: e.type || "pdf",
                                    fileId: e.fileId,
                                    base64: e.base64,
                                    url: e.previewUrl || e.base64,
                                    previewUrl: e.previewUrl || e.base64,
                                    uploadedUrl: e.previewUrl,
                                    status: "ready"
                                }))
                            }
                            let n = sessionStorage.getItem("pending_chat_file_ids");
                            if (n) {
                                sessionStorage.removeItem("pending_chat_file_ids");
                                let e = JSON.parse(n);
                                if (Array.isArray(e) && e.length > 0) return e.map(e => ({
                                    id: crypto.randomUUID(),
                                    type: "pdf",
                                    fileId: e,
                                    status: "ready"
                                }))
                            }
                        }
                    } catch (e) {}
                    return []
                }), [tY, tG] = (0, r.useState)(null), tX = (0, r.useMemo)(() => tH.filter(e => e.id !== tY), [tH, tY]), [tQ, t0] = (0, r.useState)([]), t1 = (0, r.useRef)(new Set), [t2, t5] = (0, r.useState)(!1), [t4, t3] = (0, r.useState)(!1), [t6, nd] = (0, r.useState)(!1), [np, nv] = (0, r.useState)(!1), [nb, nM] = (0, r.useState)(!1), nT = (0, r.useRef)(0), [nD, nA] = (0, r.useState)(null), [nU, nR] = (0, r.useState)(null), [nL, nO] = (0, r.useState)("See. Think. Create. Repeat."), [nP, nZ] = (0, r.useState)(!1), [nJ, nq] = (0, r.useState)({}), [nW, nV] = (0, r.useState)({
                    isOpen: !1,
                    file: null
                }), [nB, nK] = (0, r.useState)(!1), nH = ey && (nW.isOpen || nB), [n$, nY] = (0, r.useState)(!1), [nG, nX] = (0, r.useState)(null), [nQ, n0] = (0, r.useState)(null), [n1, n2] = (0, r.useState)(null), [n5, n4] = (0, r.useState)(!1), [n3, n6] = (0, r.useState)(!1), [n8, n7] = (0, r.useState)(!0), [n9, le] = (0, r.useState)(!1), [lt, ln] = (0, r.useState)(!1), [ll, lr] = (0, r.useState)(!1), {
                    debugLogs: li,
                    appendDebugLog: la,
                    clearDebugLogs: ls
                } = function() {
                    let [e, t] = (0, r.useState)([]);
                    return {
                        debugLogs: e,
                        appendDebugLog: (0, r.useCallback)(e => {
                            t(t => {
                                var n;
                                return [...t, {
                                    id: crypto.randomUUID(),
                                    timestamp: null !== (n = e.timestamp) && void 0 !== n ? n : new Date().toISOString(),
                                    level: e.level,
                                    category: e.category,
                                    message: e.message,
                                    ...e.details ? {
                                        details: e.details
                                    } : {}
                                }].slice(-200)
                            })
                        }, []),
                        clearDebugLogs: (0, r.useCallback)(() => {
                            t([])
                        }, [])
                    }
                }();
                (0, r.useEffect)(() => {
                    ls()
                }, [tL, ls]);
                let [lo, ld] = (0, r.useState)(!1), [lc, lu] = (0, r.useState)(!1), [lm, lf] = (0, r.useState)(""), [lp, lh] = (0, r.useState)(null), [lg, lx] = (0, r.useState)(null), [lv, lb] = (0, r.useState)(!1), [ly, lw] = (0, r.useState)(null), [lj, lN] = (0, r.useState)(eb), [lk, lC] = (0, r.useState)([]), [lS] = (0, r.useState)(null != tb ? tb : tK.h1.map(e => e.id)), [lI, lE] = (0, r.useState)(null !== (n = null == tj ? void 0 : tj[0]) && void 0 !== n ? n : null), [l_, lz] = (0, r.useState)(!1), lF = e => {
                    lz(e);
                    let t = new URL(window.location.href);
                    e ? t.hash = "ocr" : "#ocr" === t.hash && (t.hash = "");
                    let n = "".concat(t.pathname).concat(t.search).concat(t.hash);
                    n !== "".concat(window.location.pathname).concat(window.location.search).concat(window.location.hash) && window.history.replaceState(null, "", n)
                }, lM = (0, q.L)(e => e.isSuperUser), [lT, lD] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    let e = !1;
                    try {
                        e = "true" === localStorage.getItem("is_sup")
                    } catch (t) {
                        e = !1
                    }
                    lD(!!(lM || e))
                }, [lM]), (0, r.useEffect)(() => {
                    if (!tN) {
                        l_ && lF(!1);
                        return
                    }
                    "#ocr" === window.location.hash && lF(!0)
                }, [tN, l_]), (0, r.useEffect)(() => {
                    tN && 0 !== tk && lF(!0)
                }, [tN, tk]), (0, r.useEffect)(() => {
                    null == tC || tC(!!(tN && l_))
                }, [l_, tN, tC]);
                let {
                    data: lA
                } = (0, u.F7)({
                    enabled: lT || tN
                }), lU = (0, r.useMemo)(() => lT ? (0, eV.iH)(lA) : new Set, [lT, lA]), lR = (0, r.useRef)(new Set);
                (0, r.useEffect)(() => {
                    lR.current = lU
                }, [lU]);
                let lL = (0, r.useCallback)(e => lR.current.has(e) ? eV.yi : void 0, []),
                    [lO, lP] = (0, r.useState)(null),
                    [lZ, lJ] = (0, r.useState)(null),
                    [lq, lW] = (0, r.useState)("none"),
                    [lV, lB] = (0, r.useState)(!1),
                    [lK, lH] = (0, r.useState)(null),
                    [l$, lY] = (0, r.useState)(null),
                    lG = (null !== (p = null == eu ? void 0 : null === (t = eu.rootTurnIds) || void 0 === t ? void 0 : t.length) && void 0 !== p ? p : 0) > 0,
                    [lX, lQ] = (0, r.useState)(eN && lG),
                    l0 = null != ek ? ek : "Create Skill",
                    l1 = l0.toLowerCase().includes("skill") ? "Skill" : "Agent",
                    [l2, l5] = (0, r.useState)(() => {
                        if (!tL) return null;
                        try {
                            let e = "".concat(ni, "_").concat(tL),
                                t = localStorage.getItem(e);
                            if (t) return JSON.parse(t)
                        } catch (e) {
                            console.error("Failed to load draft card from localStorage:", e)
                        }
                        return null
                    }),
                    l4 = (0, r.useRef)(null),
                    l3 = (0, r.useRef)([]),
                    l6 = (0, r.useRef)(null),
                    l8 = (0, r.useRef)(""),
                    {
                        showButton: l7,
                        scrollToBottom: l9
                    } = function(e) {
                        let [t, n] = (0, r.useState)(!1);
                        return (0, r.useEffect)(() => {
                            if (!e) {
                                n(!1);
                                return
                            }
                            let t = () => {
                                if (!e) return;
                                let t = e.scrollTop;
                                n(e.scrollHeight - (t + e.clientHeight) > 200)
                            };
                            return e.addEventListener("scroll", t, {
                                passive: !0
                            }), t(), () => {
                                e.removeEventListener("scroll", t)
                            }
                        }, [e]), {
                            showButton: t,
                            scrollToBottom: (0, r.useCallback)(() => {
                                e && e.scrollTo({
                                    top: e.scrollHeight,
                                    behavior: "smooth"
                                })
                            }, [e])
                        }
                    }(ly),
                    re = (0, r.useCallback)(() => {
                        r4.current = !0, r6.current = !1, r8.current = !1, nd(!1), l9()
                    }, [l9]),
                    {
                        status: rt,
                        checkHealth: rn,
                        updateHealthFromApiCall: rl
                    } = function() {
                        let [e, t] = (0, r.useState)("green"), n = (0, r.useRef)(0), l = (0, r.useRef)(!1);
                        return {
                            status: e,
                            checkHealth: (0, r.useCallback)(async () => {
                                let e = Date.now();
                                if (l.current || e - n.current < 3e3) return;
                                l.current = !0, n.current = e;
                                let r = new AbortController,
                                    i = setTimeout(() => r.abort(), 5e3);
                                try {
                                    let e = await fetch("".concat((0, e_.r6)(), "/health"), {
                                        method: "GET",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        signal: r.signal
                                    });
                                    if (clearTimeout(i), !e.ok) return t("yellow"), !1;
                                    return t("green"), !0
                                } catch (e) {
                                    return clearTimeout(i), t("yellow"), !1
                                } finally {
                                    l.current = !1
                                }
                            }, []),
                            updateHealthFromApiCall: (0, r.useCallback)(e => {
                                t(e ? "green" : "yellow")
                            }, [])
                        }
                    }(),
                    rr = np || t4 || !!tJ,
                    ri = (0, s.useRouter)(),
                    ra = (0, s.usePathname)(),
                    {
                        mutate: rs,
                        isPending: ro
                    } = (0, c.X5)(),
                    rd = (0, m.Oj)();
                (0, m.bY)();
                let {
                    isSignedIn: rc,
                    user: ru,
                    isLoaded: rm
                } = (0, f.aF)(), rf = (0, r.useRef)(null != rc ? rc : null), rp = (0, ez.useChatHistory)(), rh = (0, r.useMemo)(() => (0, eI.pD)(), []);
                (0, r.useEffect)(() => {
                    rh || lO || lZ || "active" !== lq || lW("none")
                }, [lO, lZ, lq, rh]);
                let rg = (null == ra ? void 0 : ra.includes("/dashboard/skills/")) && !(null == ra ? void 0 : ra.includes("/dashboard/skills/create")),
                    {
                        data: rx,
                        error: rv
                    } = (0, m.cd)((null == l2 ? void 0 : l2.id) || ""),
                    rb = null !== (g = null == rx ? void 0 : rx.instructions) && void 0 !== g ? g : null;
                (0, r.useEffect)(() => {
                    rb && (null == l2 ? void 0 : l2.id) && (!l2.prompt || l2.prompt !== rb) && l5(e => e ? {
                        ...e,
                        prompt: rb,
                        isStreaming: !1
                    } : e)
                }, [rb, null == l2 ? void 0 : l2.id, null == l2 ? void 0 : l2.prompt]), (0, r.useEffect)(() => {
                    lN(eb)
                }, [eb]), (0, r.useEffect)(() => {
                    ew ? nO(ew) : nO(ne[Math.floor(Math.random() * ne.length)])
                }, [ew]), (0, r.useEffect)(() => {
                    if (!tL) return;
                    let e = "".concat(ni, "_").concat(tL);
                    l2 ? localStorage.setItem(e, JSON.stringify(l2)) : localStorage.removeItem(e)
                }, [l2, tL]), (0, r.useEffect)(() => {
                    if (!rc) return;
                    let e = e => {
                            setTimeout(() => {
                                r7.current && (r7.current.focus(), r7.current.setSelectionRange(e, e), sR())
                            }, 500)
                        },
                        t = () => {
                            let t = localStorage.getItem(nr);
                            return !!t && (tZ(t), localStorage.removeItem(nr), e(t.length), !0)
                        };
                    try {
                        let s = localStorage.getItem(nl);
                        if (s) {
                            var n, l, r, i, a;
                            let o = JSON.parse(s),
                                d = "string" == typeof o.input ? o.input : "";
                            d && (tZ(d), e(d.length));
                            let c = Array.isArray(o.attachments) ? o.attachments.filter(e => !!((null == e ? void 0 : e.url) && (null == e ? void 0 : e.type))).map(e => {
                                var t, n, l;
                                return {
                                    id: null !== (t = e.id) && void 0 !== t ? t : crypto.randomUUID(),
                                    type: e.type,
                                    status: "ready",
                                    url: e.url,
                                    previewUrl: null !== (n = e.previewUrl) && void 0 !== n ? n : e.url,
                                    uploadedUrl: null !== (l = e.uploadedUrl) && void 0 !== l ? l : e.url
                                }
                            }) : [];
                            c.length > 0 && t$(c), nX(null !== (l = o.selectedMediaType) && void 0 !== l ? l : null);
                            let u = null !== (i = null !== (r = o.selectedMediaAttachmentId) && void 0 !== r ? r : null === (n = c[0]) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null;
                            n0(u), n2(null !== (a = o.showMediaShowcase) && void 0 !== a ? a : null), localStorage.removeItem(nl), localStorage.removeItem(nr), d || t();
                            return
                        }
                    } catch (e) {
                        console.error("Failed to restore chat draft state", e)
                    }
                    t()
                }, [rc]), (0, r.useEffect)(() => {
                    if (!rc) return;
                    let e = sessionStorage.getItem("pending-copy-skill");
                    e && (sessionStorage.removeItem("pending-copy-skill"), (async () => {
                        let t = A.Am.loading("Copying skill to your workspace...");
                        try {
                            let [n, l] = await Promise.all([(0, d.aV)(e), (0, d.AW)(e)]), r = new(h());
                            r.file("SKILL.md", l.instructions), l.schema && r.file(l.schema.name || "schema.json", l.schema.content);
                            let i = await r.generateAsync({
                                    type: "blob"
                                }),
                                a = new globalThis.File([i], "skill-copy.zip", {
                                    type: "application/zip"
                                }),
                                {
                                    id: s
                                } = await (0, d.pb)(a),
                                o = await (0, d.Vi)({
                                    name: n.name,
                                    description: n.description,
                                    file_id: s,
                                    is_public: !1
                                });
                            A.Am.success("Skill copied — opening editor", {
                                id: t
                            }), lY(o.id)
                        } catch (e) {
                            A.Am.error("Failed to copy skill", {
                                id: t
                            }), console.error(e)
                        }
                    })())
                }, [rc]);
                let [ry, rw] = (0, r.useState)(() => {
                    var e;
                    return null !== (e = null == eu ? void 0 : eu.turns) && void 0 !== e ? e : {}
                }), [rj, rN] = (0, r.useState)(() => {
                    var e;
                    return null !== (e = null == eu ? void 0 : eu.rootTurnIds) && void 0 !== e ? e : []
                }), [rk, rC] = (0, r.useState)(() => {
                    var e, t, n;
                    return null !== (n = null !== (t = null == eu ? void 0 : eu.selectedRootId) && void 0 !== t ? t : null == eu ? void 0 : null === (e = eu.rootTurnIds) || void 0 === e ? void 0 : e[0]) && void 0 !== n ? n : null
                });
                (0, r.useEffect)(() => {
                    lQ(eN && !l2 && rj.length > 0)
                }, [eN, l2, rj.length]);
                let [rS, rI] = (0, r.useState)(!1), rE = (0, r.useRef)(new Set), r_ = (0, r.useRef)(new Set), rz = (0, r.useRef)(new Set), rF = (0, r.useRef)(null != ec ? ec : null), rM = null != ec ? ec : null, rT = rF.current !== rM, rD = (0, r.useMemo)(() => rp.chats.find(e => e.session_id === tL), [rp.chats, tL]), [rA, rU] = (0, r.useState)(null), rR = null !== (x = null == rA ? void 0 : rA.credit_cost) && void 0 !== x ? x : void 0, rL = null !== (b = null !== (v = null == rD ? void 0 : rD.is_public) && void 0 !== v ? v : null == lg ? void 0 : lg.is_public) && void 0 !== b && b, rO = null !== (w = null == rD ? void 0 : rD.user_id) && void 0 !== w ? w : null == lg ? void 0 : lg.user_id, rP = !!rm && (ru ? rL && null != rO && rO !== ru.id : rL), rZ = !tL || rm && (void 0 !== rD || null !== lg || lv || r_.current.has(tL));
                (0, r.useEffect)(() => {
                    if (!tL) {
                        rU(null);
                        return
                    }(0, eD.bl)(tL).then(rU).catch(console.error)
                }, [tL, null == rD ? void 0 : rD.id, null == rD ? void 0 : rD.updated_at, null == rD ? void 0 : rD.messages_count]);
                let rJ = (0, r.useMemo)(() => !ru || !rD, [ru, rD]),
                    rq = (0, r.useCallback)(async () => {
                        if (!tL) {
                            lx(null), lb(!1);
                            return
                        }
                        if (rD) {
                            lx({
                                is_public: rD.is_public,
                                user_id: rD.user_id
                            }), lb(!1);
                            return
                        }
                        if (r_.current.has(tL)) {
                            lb(!1);
                            return
                        }
                        try {
                            let e = await (0, eD.c8)(tL);
                            if (null == e ? void 0 : e.unavailable) {
                                lx(null), lb(!0);
                                return
                            }
                            lb(!1), e && lx(e)
                        } catch (e) {
                            console.error("Failed to fetch chat metadata:", e), la({
                                level: "warn",
                                category: "metadata",
                                message: "Failed to fetch chat metadata",
                                details: {
                                    sessionId: tL,
                                    error: e instanceof Error ? e.message : String(e)
                                }
                            })
                        }
                    }, [tL, rD, la]),
                    {
                        data: rW,
                        isLoading: rV,
                        isFetched: rB,
                        isSuccess: rK,
                        isError: rH
                    } = function(e, t) {
                        let {
                            isPublicView: n = !1
                        } = null != t ? t : {};
                        return (0, eM.a)({
                            queryKey: [...eF.U7.PRIVATE.CHAT.MESSAGES(null != e ? e : ""), {
                                isPublicView: n
                            }],
                            queryFn: async t => {
                                let {
                                    signal: l
                                } = t, r = setTimeout(() => {
                                    l && l.dispatchEvent(new Event("abort"))
                                }, 3e4);
                                try {
                                    return await (0, eD.v4)(e, {
                                        useCache: n
                                    })
                                } finally {
                                    clearTimeout(r)
                                }
                            },
                            enabled: !!e,
                            staleTime: eA,
                            gcTime: 18e5,
                            refetchOnWindowFocus: !1,
                            retry: 1,
                            retryDelay: 1e3
                        })
                    }(tL || null, {
                        isPublicView: rJ
                    }),
                    {
                        invalidateSession: r$
                    } = function() {
                        let e = (0, eT.NL)();
                        return {
                            invalidateSession: (0, r.useCallback)(t => {
                                e.invalidateQueries({
                                    queryKey: eF.U7.PRIVATE.CHAT.MESSAGES(t)
                                })
                            }, [e]),
                            updateSessionMessages: (0, r.useCallback)((t, n, l) => {
                                var r;
                                let i = function(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    return [...eF.U7.PRIVATE.CHAT.MESSAGES(e), {
                                        isPublicView: t
                                    }]
                                }(t, null !== (r = null == l ? void 0 : l.isPublicView) && void 0 !== r && r);
                                e.setQueryData(i, n)
                            }, [e])
                        }
                    }();
                (0, r.useEffect)(() => {
                    rB && rl(rK && !rH)
                }, [rB, rK, rH, rl]);
                let rY = (0, r.useCallback)(() => {
                        if (!tL || !rW || 0 === rW.length || rE.current.has(tL)) return;
                        rE.current.add(tL);
                        let e = (0, eB.aG)(rW);
                        rw(e.turns), rN(e.rootTurnIds), rC(e.selectedRootId)
                    }, [tL, rW]),
                    rG = rV && !rB || rS,
                    rX = (0, r.useCallback)(() => {
                        tL && !rE.current.has(tL) && (rw({}), rN([]), rC(null))
                    }, [tL]);
                (0, r.useEffect)(() => {
                    rq()
                }, [rq]), (0, r.useEffect)(() => {
                    rY()
                }, [rY]), (0, r.useEffect)(() => {
                    rX()
                }, [rX]);
                let rQ = (0, r.useCallback)(() => {
                        tZ(""), t$([]), t0([]), n0(null), nX(null), n2(null), n0(null), nX(null), tq(""), nA(null), t3(!1), nv(!1), nq({}), nR(null), iI(null), iT({}), iF(null), i_("none"), iA(null), iK(!1), iP.current = "rectangle", i0.current = null, iX.current = null, iQ.current = null, i2.current = null, tV(new Map), i3({}), i8(new Map), i9(new Map), r6.current = !1, r8.current = !1, ae.current.clear(), ai.current = [], aa.current = [], ix(null), ib(null), iw(0), an(null), rI(!1), lC([])
                    }, []),
                    r0 = (0, r.useCallback)(() => {
                        var e, t, n, l, r;
                        rQ(), rw(null !== (t = null == eu ? void 0 : eu.turns) && void 0 !== t ? t : {}), rN(null !== (n = null == eu ? void 0 : eu.rootTurnIds) && void 0 !== n ? n : []), rC(null !== (r = null !== (l = null == eu ? void 0 : eu.selectedRootId) && void 0 !== l ? l : null == eu ? void 0 : null === (e = eu.rootTurnIds) || void 0 === e ? void 0 : e[0]) && void 0 !== r ? r : null)
                    }, [eu, rQ]);
                (0, r.useEffect)(() => {
                    let e = rF.current,
                        t = null != ec ? ec : null;
                    if (e !== t) {
                        if (rF.current = t, null === t) {
                            e && rE.current.delete(e), r0(), tO(null);
                            return
                        }
                        tL !== t && (rE.current.delete(t), rQ(), rw({}), rN([]), rC(null), tO(t))
                    }
                }, [ec, r0, rQ, tL]);
                let r1 = (0, r.useRef)({}),
                    r2 = (0, r.useRef)(!1),
                    r5 = (0, r.useRef)(null),
                    r4 = (0, r.useRef)(!0),
                    r3 = (0, r.useRef)(0),
                    r6 = (0, r.useRef)(!1),
                    r8 = (0, r.useRef)(!1),
                    r7 = (0, r.useRef)(null),
                    r9 = (0, r.useRef)(null),
                    ie = (0, r.useRef)(null),
                    it = (0, r.useRef)(() => !1),
                    il = (0, r.useRef)(!1),
                    ir = (0, r.useRef)(null),
                    ii = (0, r.useRef)(() => {}),
                    ia = (0, r.useRef)(null),
                    is = (0, r.useRef)(null),
                    io = (0, r.useRef)(null),
                    id = (0, r.useRef)(null),
                    ic = (0, r.useRef)(null),
                    iu = (0, r.useRef)(null),
                    im = (0, r.useRef)(!1),
                    ip = (0, r.useRef)(null),
                    ih = (0, r.useCallback)(e => {
                        if (id.current && ip.current && (id.current.removeEventListener("loadeddata", ip.current), ip.current = null), id.current = e, !e) return;
                        let t = () => {
                            try {
                                e.currentTime = 0;
                                let t = e.play();
                                null == t || t.catch(() => {})
                            } catch (e) {}
                        };
                        if (e.readyState >= e.HAVE_CURRENT_DATA) {
                            t();
                            return
                        }
                        let n = () => {
                            t()
                        };
                        ip.current = n, e.addEventListener("loadeddata", n, {
                            once: !0
                        })
                    }, []);
                (0, r.useEffect)(() => {
                    let e = ic.current;
                    if (!e) return;
                    if (!n$) {
                        e.pause(), e.currentTime = 0;
                        return
                    }
                    let t = () => {
                        e.currentTime = 0;
                        let t = e.play();
                        null == t || t.catch(() => {})
                    };
                    if (e.readyState >= e.HAVE_CURRENT_DATA) {
                        t();
                        return
                    }
                    let n = () => {
                        t()
                    };
                    return e.addEventListener("loadeddata", n, {
                        once: !0
                    }), () => {
                        e.removeEventListener("loadeddata", n)
                    }
                }, [n$]), (0, r.useEffect)(() => {
                    let e = iu.current;
                    if (!e) return;
                    let t = () => {
                            e.pause(), e.currentTime = 0
                        },
                        n = () => {
                            im.current && (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) !== e && (im.current = !1, t())
                        },
                        l = () => {
                            im.current && document.fullscreenElement === e && document.exitFullscreen && document.exitFullscreen().catch(() => {}), im.current = !1, t()
                        },
                        r = () => {
                            im.current = !1, t()
                        };
                    return document.addEventListener("fullscreenchange", n), document.addEventListener("webkitfullscreenchange", n), document.addEventListener("mozfullscreenchange", n), document.addEventListener("MSFullscreenChange", n), e.addEventListener("ended", l), e.addEventListener("webkitendfullscreen", r), () => {
                        document.removeEventListener("fullscreenchange", n), document.removeEventListener("webkitfullscreenchange", n), document.removeEventListener("mozfullscreenchange", n), document.removeEventListener("MSFullscreenChange", n), e.removeEventListener("ended", l), e.removeEventListener("webkitendfullscreen", r)
                    }
                }, []);
                let [ig, ix] = (0, r.useState)(null), [iv, ib] = (0, r.useState)(null), [iy, iw] = (0, r.useState)(0), [ij, iN] = (0, r.useState)(0), [ik, iC] = (0, r.useState)(0), [iS, iI] = (0, r.useState)(null), [iE, i_] = (0, r.useState)("none"), [iz, iF] = (0, r.useState)(null), [iM, iT] = (0, r.useState)({}), [iD, iA] = (0, r.useState)(null), [iU, iR] = (0, r.useState)(90), [iL, iO] = (0, r.useState)(0), iP = (0, r.useRef)("rectangle"), iZ = "none" !== iE, iJ = !tU && iZ, iq = (null == iS ? void 0 : iS.gallery.artifactId) === eY, iW = tU && iZ && !!iS || iq, iV = iZ ? iE : iP.current, [iB, iK] = (0, r.useState)(!1), iH = (0, r.useRef)(null), i$ = (0, r.useCallback)(e => {
                    let t = iH.current;
                    if (t && "function" == typeof t.setPointerCapture) try {
                        t.setPointerCapture(e)
                    } catch (e) {}
                }, []), iY = (0, r.useCallback)(e => {
                    let t = iH.current;
                    if (t && "function" == typeof t.releasePointerCapture) try {
                        t.releasePointerCapture(e)
                    } catch (e) {}
                }, []), iG = (0, r.useCallback)(e => {
                    let t = iH.current;
                    if (!t || "function" != typeof t.hasPointerCapture) return !1;
                    try {
                        return t.hasPointerCapture(e)
                    } catch (e) {
                        return !1
                    }
                }, []), iX = (0, r.useRef)(null), iQ = (0, r.useRef)(null), i0 = (0, r.useRef)(null), i1 = (0, r.useCallback)(e => {
                    let t = iX.current;
                    return t ? t.pointerId === e.pointerId : null !== i0.current ? i0.current === e.pointerId : !1 !== e.isPrimary
                }, []), i2 = (0, r.useRef)(null), i5 = (0, r.useRef)(null), [i4, i3] = (0, r.useState)({}), [i6, i8] = (0, r.useState)(new Map), [i7, i9] = (0, r.useState)(new Map), ae = (0, r.useRef)(new Map), [at, an] = (0, r.useState)(null), [al, ar] = (0, r.useState)(!1), ai = (0, r.useRef)([]), aa = (0, r.useRef)([]), [as, ao] = (0, r.useState)(!1), ad = (0, r.useRef)(null), ac = (0, r.useRef)(null), [au, am] = (0, r.useState)(200), af = (0, r.useCallback)(e => {
                    var t;
                    if (null === (t = io.current) || void 0 === t || t.disconnect(), ia.current = e, !e || "undefined" == typeof ResizeObserver) {
                        io.current = null;
                        return
                    }
                    let n = new ResizeObserver(e => {
                        let [t] = e;
                        t && ao(t.contentRect.width < 768)
                    });
                    n.observe(e), io.current = n, ao(e.clientWidth < 768)
                }, []);
                (0, r.useEffect)(() => () => {
                    var e;
                    null === (e = io.current) || void 0 === e || e.disconnect(), io.current = null
                }, []);
                let ap = (0, r.useCallback)(() => {
                        let e = ad.current;
                        if (!e) {
                            am(e => 200 !== e ? 200 : e);
                            return
                        }
                        let t = Math.ceil(e.getBoundingClientRect().height);
                        if (!Number.isFinite(t) || t <= 0) {
                            am(e => 200 !== e ? 200 : e);
                            return
                        }
                        am(e => Math.abs(e - t) > 1 ? t : e)
                    }, []),
                    ah = (0, r.useCallback)(e => {
                        var t;
                        if (null === (t = ac.current) || void 0 === t || t.disconnect(), ac.current = null, ad.current = e, !e) {
                            am(200);
                            return
                        }
                        if (ap(), "undefined" == typeof ResizeObserver) return;
                        let n = new ResizeObserver(() => {
                            ap()
                        });
                        n.observe(e), ac.current = n
                    }, [ap]);
                (0, r.useEffect)(() => {
                    let e = () => {
                        ap()
                    };
                    return window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e)
                    }
                }, [ap]), (0, r.useEffect)(() => () => {
                    var e;
                    null === (e = ac.current) || void 0 === e || e.disconnect(), ac.current = null
                }, []), (0, r.useCallback)(e => {
                    if (!e) return !1;
                    try {
                        let t = e.trim();
                        if (!t) return !1;
                        let n = t.toLowerCase();
                        if (!n.startsWith("http")) return !1;
                        let l = (0, e_.r6)();
                        if (l) {
                            let e = l.toLowerCase();
                            if (n.startsWith("".concat(e, "/preview/"))) return !1
                        }
                        if (n.includes("storage.googleapis.com") || n.includes("googleusercontent.com") || n.includes("//cdn.") || n.includes("/cdn/")) return !0;
                        return n.startsWith("https://") && !n.includes("/preview/")
                    } catch (e) {
                        return !1
                    }
                }, []);
                let ag = (0, r.useCallback)(e => {
                        if (ey) {
                            (0, t9.b)({
                                item: e,
                                setDialog: nV,
                                expandHost: !0
                            });
                            return
                        }
                        nV({
                            isOpen: !0,
                            file: e
                        })
                    }, [ey]),
                    ax = (0, r.useCallback)(() => r5.current ? r5.current.querySelector("[data-radix-scroll-area-viewport]") : null, []),
                    av = (0, r.useCallback)((e, t, n) => {
                        if (!t || !n || !Number.isFinite(t) || !Number.isFinite(n) || 0 === n) return;
                        let l = Number((t / n).toFixed(4));
                        Number.isFinite(l) && !(l <= 0) && i3(t => {
                            var n;
                            return 1e-4 > Math.abs((null !== (n = t[e]) && void 0 !== n ? n : 0) - l) ? t : {
                                ...t,
                                [e]: l
                            }
                        })
                    }, []),
                    ab = (0, r.useCallback)(() => {
                        let e = is.current;
                        if (e) {
                            e.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                            return
                        }
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }, []);
                (0, r.useEffect)(() => {
                    r1.current = ry
                }, [ry]), (0, r.useEffect)(() => {
                    var e, t;
                    eu && (r2.current = !0, rw(eu.turns), rN(eu.rootTurnIds), rC(null !== (t = null !== (e = eu.selectedRootId) && void 0 !== e ? e : eu.rootTurnIds[0]) && void 0 !== t ? t : null), setTimeout(() => {
                        r2.current = !1
                    }, 0))
                }, [eu]);
                let ay = e => {
                        var t, n, l, r;
                        if (!e) return null;
                        let i = e,
                            a = null !== (n = null === (t = r1.current[i]) || void 0 === t ? void 0 : t.parentId) && void 0 !== n ? n : null;
                        for (; a;) i = a, a = null !== (r = null === (l = r1.current[i]) || void 0 === l ? void 0 : l.parentId) && void 0 !== r ? r : null;
                        return i
                    },
                    aw = (0, r.useCallback)((e, t) => {
                        rw(n => {
                            let l = n[e];
                            return l ? {
                                ...n,
                                [e]: {
                                    ...l,
                                    assistantMessages: [...l.assistantMessages, t]
                                }
                            } : n
                        })
                    }, []),
                    aj = (0, r.useCallback)(e => {
                        if (rw(t => {
                                let n = {
                                    ...t,
                                    [e.id]: e
                                };
                                if (e.parentId) {
                                    let l = t[e.parentId];
                                    if (l) {
                                        let t = l.children.includes(e.id);
                                        n[e.parentId] = {
                                            ...l,
                                            children: t ? l.children : [...l.children, e.id],
                                            selectedChildId: e.id
                                        }
                                    }
                                }
                                return n
                            }), e.parentId) {
                            if (!rk) {
                                let t = ay(e.parentId);
                                t && rC(t)
                            }
                        } else rN(t => [...t, e.id]), rC(e.id)
                    }, [rk]),
                    aN = (0, r.useCallback)(e => {
                        if (!e || 0 === e.length) return [];
                        let t = [],
                            n = (e, t) => {
                                if (e.preview) return e.preview;
                                if (!e.base64) return;
                                let n = e.base64.trim();
                                if (n) return n.startsWith("data:") ? n : "data:".concat(t, ";base64,").concat(n)
                            };
                        return e.forEach(e => {
                            if ("image" === e.type) {
                                let l = n(e, "image/*");
                                l ? t.push({
                                    type: "image_url",
                                    image_url: {
                                        url: l,
                                        detail: "auto"
                                    }
                                }) : e.fileId && t.push({
                                    type: "input_file",
                                    file_id: e.fileId
                                })
                            } else if ("pdf" === e.type) {
                                let l = n(e, "application/pdf");
                                l ? t.push({
                                    type: "file_url",
                                    file_url: {
                                        url: l,
                                        detail: "auto"
                                    }
                                }) : e.fileId && t.push({
                                    type: "input_file",
                                    file_id: e.fileId
                                })
                            } else if (("audio" === e.type || "video" === e.type) && e.fileId) t.push({
                                type: "input_file",
                                file_id: e.fileId
                            });
                            else if ("video" === e.type) {
                                let l = n(e, "video/mp4");
                                l && t.push({
                                    type: "video_url",
                                    video_url: {
                                        url: l,
                                        detail: "auto"
                                    }
                                })
                            } else if ("audio" === e.type) {
                                let l = n(e, "audio/mpeg");
                                l && t.push({
                                    type: "audio_url",
                                    audio_url: {
                                        url: l,
                                        detail: "auto"
                                    }
                                })
                            } else {
                                let l = n(e, "application/octet-stream");
                                l && t.push({
                                    type: "file_url",
                                    file_url: {
                                        url: l,
                                        detail: "auto"
                                    }
                                })
                            }
                        }), t
                    }, []),
                    ak = e => "string" == typeof e.content ? ng(e.content) : ng(e.content.filter(e => "text" === e.type && e.text).map(e => e.text).join("\n")),
                    aC = e => {
                        let t = e.attachments ? [...e.attachments] : [];
                        if (!Array.isArray(e.content)) return t;
                        let n = [];
                        if (e.content.forEach((e, t) => {
                                var l, r, i, a, s, o, d, c, u;
                                let m = {
                                    size: 0,
                                    fileId: null !== (s = e.file_id) && void 0 !== s ? s : void 0
                                };
                                "image_url" === e.type && (null === (l = e.image_url) || void 0 === l ? void 0 : l.url) ? n.push({
                                    id: null !== (o = e.file_id) && void 0 !== o ? o : "content-image-".concat(t),
                                    name: "Image ".concat(t + 1),
                                    type: "image",
                                    preview: e.image_url.url,
                                    ...m
                                }) : "file_url" === e.type && (null === (r = e.file_url) || void 0 === r ? void 0 : r.url) ? n.push({
                                    id: null !== (d = e.file_id) && void 0 !== d ? d : "content-file-".concat(t),
                                    name: "Document ".concat(t + 1),
                                    type: "pdf",
                                    preview: e.file_url.url,
                                    ...m
                                }) : "video_url" === e.type && (null === (i = e.video_url) || void 0 === i ? void 0 : i.url) ? n.push({
                                    id: null !== (c = e.file_id) && void 0 !== c ? c : "content-video-".concat(t),
                                    name: "Video ".concat(t + 1),
                                    type: "video",
                                    preview: e.video_url.url,
                                    ...m
                                }) : "audio_url" === e.type && (null === (a = e.audio_url) || void 0 === a ? void 0 : a.url) && n.push({
                                    id: null !== (u = e.file_id) && void 0 !== u ? u : "content-audio-".concat(t),
                                    name: "Audio ".concat(t + 1),
                                    type: "audio",
                                    preview: e.audio_url.url,
                                    ...m
                                })
                            }), 0 === n.length) return t;
                        let l = [...t];
                        return n.forEach(e => {
                            -1 === l.findIndex(t => t.id && t.id === e.id) && l.push(e)
                        }), l
                    },
                    aS = (0, r.useMemo)(() => {
                        if (!rk) return [];
                        let e = [],
                            t = rk;
                        for (; t;) {
                            e.push(t);
                            let n = ry[t];
                            if (!(null == n ? void 0 : n.selectedChildId)) break;
                            t = n.selectedChildId
                        }
                        return e
                    }, [rk, ry]),
                    aI = (0, r.useCallback)(() => {
                        tq(""), nA(null), nv(!1), t3(!1), nq({}), l8.current = "", l6.current = null, ed()
                    }, [ed]),
                    aE = (0, r.useCallback)(() => {
                        (t4 || np) && (l6.current ? l6.current.abort() : aI())
                    }, [t4, np, aI]),
                    a_ = (0, r.useCallback)(async (e, t, n, l, r) => {
                        var i, a, s, o, d, c, u, m;
                        let f = new AbortController;
                        l6.current = f, l8.current = "";
                        let p = null !== (a = null != r ? r : lI) && void 0 !== a ? a : "vlmrun-orion-2:auto",
                            h = lL(p),
                            g = void 0 !== h,
                            x = g ? (() => {
                                let e = [...t].reverse().find(e => "user" === e.role);
                                return e ? [e] : t
                            })() : t;
                        rw(t => t[e] ? {
                            ...t,
                            [e]: {
                                ...t[e],
                                modelId: p
                            }
                        } : t), t3(!0), eo(), tq(""), nA(e), rn();
                        let v = !0,
                            b = 0,
                            y = null,
                            w = e => new Promise(t => setTimeout(t, e)),
                            j = [...x].reverse().find(e => "user" === e.role),
                            N = null != lZ && null !== (s = null === (i = eS.find(e => e.id === lZ)) || void 0 === i ? void 0 : i.layout) && void 0 !== s ? s : null,
                            k = "active" === lq ? (0, eI.sh)({
                                composedSchema: null != lO ? lO : N,
                                defaultPlacementEnabled: rh,
                                lastUserContent: null == j ? void 0 : j.content
                            }) : null;
                        if (k) {
                            let e = function(e) {
                                if (!e || 2 !== e.version || !Array.isArray(e.rows)) return {
                                    valid: !1,
                                    invalidKinds: ["<invalid schema>"]
                                };
                                let t = [];
                                for (let i of e.rows) {
                                    var n, l, r;
                                    for (let e of null !== (n = i.blocks) && void 0 !== n ? n : []) eO.has(String(e.kind)) || t.push(String(e.kind));
                                    if ((null !== (l = i.blocks) && void 0 !== l ? l : []).length > 1)
                                        for (let e of null !== (r = i.blocks) && void 0 !== r ? r : []) eP.has(String(e.kind)) && t.push("".concat(String(e.kind), " must be full row"))
                                }
                                return {
                                    valid: 0 === t.length,
                                    invalidKinds: t
                                }
                            }(k);
                            if (!e.valid) {
                                la({
                                    level: "error",
                                    category: "layout",
                                    message: "Canvas layout validation failed before stream",
                                    details: {
                                        sessionId: l,
                                        invalidKinds: e.invalidKinds,
                                        layoutPresetId: lZ
                                    }
                                }), A.Am.error("Canvas layout has unsupported block kinds: ".concat(e.invalidKinds.join(", "), ". Fix the layout or turn off Use in chat.")), aI();
                                return
                            }
                        }
                        for (; b < 5;) {
                            b += 1;
                            try {
                                await (0, eD.ZY)(x, l, e => {
                                    if (v) {
                                        v = !1;
                                        let t = new Date;
                                        nq(e => ({
                                            ...e,
                                            firstTokenAt: t
                                        })), nv(!1), l8.current = e, tq(e)
                                    } else tq(t => {
                                        let n = t + e;
                                        return l8.current = n, n
                                    })
                                }, t => {
                                    nv(!1), rl(!0);
                                    let n = nJ.firstTokenAt,
                                        r = (0, eL.h)(t, l),
                                        i = {
                                            id: (0, U.Z)(),
                                            role: "assistant",
                                            content: t,
                                            timestamp: n || new Date,
                                            artifactRefs: r.artifactRefs
                                        };
                                    aw(e, i), tq(""), nA(null), t3(!1), l8.current = "", l6.current = null, tL && !g && r$(tL), ed(), nq({}), g || rz.current.has(l) || (rz.current.add(l), rp.addNewChatWithTitleAndPolling(l, "Untitled Chat"))
                                }, async e => {}, {
                                    modelId: p,
                                    ...h ? {
                                        apiBaseUrl: h
                                    } : {},
                                    signal: f.signal,
                                    skills: lk.map(e => ({
                                        skill_id: e.id,
                                        name: e.name
                                    })),
                                    toolsets: lS,
                                    sessionToken: (0, O.YW)(l),
                                    ...k ? {
                                        canvas_schema: k
                                    } : {},
                                    onDebugLog: la
                                });
                                return
                            } catch (a) {
                                rl(!1);
                                let t = a instanceof Error ? a : Error("Unknown streaming error");
                                if ("AbortError" === t.name) {
                                    let t = l8.current || tJ;
                                    if (t) {
                                        let n = nJ.firstTokenAt || new Date,
                                            r = (0, eL.h)(t, l);
                                        aw(e, {
                                            id: (0, U.Z)(),
                                            role: "assistant",
                                            content: t,
                                            timestamp: n,
                                            artifactRefs: r.artifactRefs
                                        })
                                    }
                                    aI();
                                    return
                                }
                                if (y = t, null === (o = t.message) || void 0 === o ? void 0 : o.includes("429")) {
                                    la({
                                        level: "warn",
                                        category: "api",
                                        message: "Chat stream hit rate limit",
                                        details: {
                                            sessionId: l,
                                            modelId: p,
                                            attempt: b
                                        }
                                    }), n4(!0);
                                    break
                                }
                                if (null === (d = t.message) || void 0 === d ? void 0 : d.includes("402")) {
                                    la({
                                        level: "warn",
                                        category: "api",
                                        message: "Chat stream hit payment required",
                                        details: {
                                            sessionId: l,
                                            modelId: p,
                                            attempt: b
                                        }
                                    }), n6(!0);
                                    break
                                }
                                if (!(b < 5 && nu(t))) break;
                                let n = b + 1,
                                    i = Math.min(5e3, 1200 * b);
                                la({
                                    level: "warn",
                                    category: "stream",
                                    message: "Chat stream retry scheduled",
                                    details: {
                                        sessionId: l,
                                        modelId: p,
                                        attempt: n,
                                        maxAttempts: 5,
                                        retryDelayMs: i,
                                        error: t.message,
                                        errorType: t.name
                                    }
                                }), tq("We're having trouble with ".concat(null !== (c = null != r ? r : lI) && void 0 !== c ? c : "Auto", " mode. Retrying (").concat(n, "/").concat(5, ")...")), await w(i)
                            }
                        }
                        if (y) {
                            let e = {
                                error: y.message,
                                errorType: y.name,
                                modelId: p,
                                modelVersion: p.split(":")[1] || "unknown",
                                modelLabel: p,
                                sessionId: l,
                                attempt: b,
                                timestamp: new Date().toISOString()
                            };
                            if (console.error("Chat completion failed:", e), la({
                                    level: "error",
                                    category: "stream",
                                    message: "Chat completion failed",
                                    details: e
                                }), null === (u = y.message) || void 0 === u ? void 0 : u.includes("429")) {
                                n4(!0), aI();
                                return
                            }
                            if (null === (m = y.message) || void 0 === m ? void 0 : m.includes("402")) {
                                n6(!0), aI();
                                return
                            }
                        }
                        aI();
                        let C = nJ.firstTokenAt || new Date;
                        aw(e, {
                            id: (0, U.Z)(),
                            role: "assistant",
                            content: nn,
                            timestamp: C
                        })
                    }, [aw, la, eo, aI, n4, n6, nJ.firstTokenAt, lk, rl, rn, lq, lO, lZ, rh, lS, lI, lL]),
                    az = (0, r.useMemo)(() => {
                        let e = [];
                        return aS.forEach(t => {
                            var n, l;
                            let r = ry[t];
                            if (!r) return;
                            let i = r.parentId ? null !== (l = null === (n = ry[r.parentId]) || void 0 === n ? void 0 : n.children) && void 0 !== l ? l : [] : rj,
                                a = Math.max(0, i.indexOf(t)),
                                s = i.length || 1,
                                o = s > 1 && r.modelId ? lU.has(r.modelId) ? (0, eV.h8)(r.modelId) : r.modelId.replace(/^vlmrun-/, "") : void 0;
                            e.push({
                                key: "".concat(t, "-user"),
                                message: r.userMessage,
                                role: "user",
                                turnId: t,
                                branchMeta: {
                                    index: a,
                                    total: s,
                                    parentId: r.parentId
                                },
                                modelLabel: o
                            }), r.assistantMessages.forEach((n, l) => {
                                e.push({
                                    key: "".concat(t, "-assistant-").concat(l),
                                    message: n,
                                    role: "assistant",
                                    turnId: t,
                                    assistantIndex: l
                                })
                            })
                        }), e
                    }, [aS, rj, ry, lU]);
                (0, r.useEffect)(() => {
                    l3.current = az
                }, [az]);
                let {
                    sections: aF,
                    activeSectionId: aM,
                    shouldShow: aT,
                    scrollToSection: aD
                } = function(e) {
                    let {
                        messages: t,
                        viewportElement: n
                    } = e, [l, i] = (0, r.useState)(null), a = (0, r.useRef)(null), s = (0, r.useRef)(new Set), o = (0, r.useMemo)(() => {
                        let e = 0;
                        return t.filter(e => "user" === e.role).map(t => {
                            let n = function(e) {
                                var t;
                                if ("string" == typeof e) return e;
                                let n = e.find(e => "text" === e.type && e.text);
                                return null !== (t = null == n ? void 0 : n.text) && void 0 !== t ? t : ""
                            }(t.message.content);
                            return {
                                id: t.key,
                                turnId: t.turnId,
                                title: function(e) {
                                    let t = e.split("\n")[0].trim();
                                    return t.length <= 60 ? t : t.slice(0, 60).trimEnd() + "..."
                                }(n),
                                index: e++
                            }
                        })
                    }, [t]), d = o.length >= 3, c = (0, r.useCallback)(e => {
                        if (!n) return;
                        let t = n.querySelector('[data-section-id="'.concat(e, '"]'));
                        t && t.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }, [n]);
                    return (0, r.useEffect)(() => {
                        var e;
                        if (!n || !d) return;
                        null === (e = a.current) || void 0 === e || e.disconnect(), s.current.clear();
                        let t = new IntersectionObserver(e => {
                            for (let t of e) {
                                let e = t.target.dataset.sectionId;
                                e && (t.isIntersecting ? s.current.add(e) : s.current.delete(e))
                            }
                            let t = s.current;
                            if (0 === t.size) return;
                            let n = o.find(e => t.has(e.id));
                            n && i(n.id)
                        }, {
                            root: n,
                            rootMargin: "0px 0px -60% 0px",
                            threshold: 0
                        });
                        return a.current = t, n.querySelectorAll("[data-section-id]").forEach(e => t.observe(e)), () => t.disconnect()
                    }, [n, d, o]), (0, r.useEffect)(() => {
                        if (!a.current || !n || !d) return;
                        let e = a.current;
                        n.querySelectorAll("[data-section-id]").forEach(t => e.observe(t))
                    }, [n, d, o.length]), {
                        sections: o,
                        activeSectionId: l,
                        shouldShow: d,
                        scrollToSection: c
                    }
                }({
                    messages: az,
                    viewportElement: ly
                });
                (0, r.useEffect)(() => {
                    !em || r2.current || rT || em({
                        renderedMessages: az,
                        turns: ry,
                        rootTurnIds: rj,
                        selectedRootId: rk,
                        sessionId: tL || null
                    })
                }, [em, az, rj, rk, ry, tL, rT]);
                let aA = (0, r.useMemo)(() => {
                        let e = [],
                            t = (0, e$.G)(),
                            n = (0, e_.r6)(),
                            l = new Map;
                        az.forEach(e => {
                            let t;
                            let n = "string" == typeof e.message.content ? e.message.content : Array.isArray(e.message.content) ? e.message.content.filter(e => "text" === e.type && "string" == typeof e.text).map(e => e.text).join(" ") : "";
                            if (!n) return;
                            let r = /\bdoc_[a-z0-9]+\b/gi;
                            for (; null !== (t = r.exec(n));) {
                                let e = t[0];
                                if (!e || l.has(e) || !tL) continue;
                                let n = (0, R.pC)(tL, e);
                                l.set(e, {
                                    id: "doc-ref:".concat(e, ":").concat(e),
                                    artifactId: "doc-ref:".concat(e),
                                    objectId: e,
                                    label: "Document ".concat(e.slice(-4)),
                                    groupTitle: "Documents",
                                    previewUrl: n,
                                    fileId: e,
                                    mimetype: "application/pdf",
                                    kind: "document",
                                    isPreviewEnabled: !0
                                })
                            }
                        });
                        let r = e => {
                                for (let t of e)
                                    if ("number" == typeof t && Number.isFinite(t) && t > 0) return t
                            },
                            i = function() {
                                for (var e, t = arguments.length, l = Array(t), r = 0; r < t; r++) l[r] = arguments[r];
                                let i = [];
                                if (l.forEach(e => {
                                        if ("string" != typeof e) return;
                                        let t = e.trim();
                                        t && !i.includes(t) && i.push(t)
                                    }), 0 === i.length) return;
                                let a = null !== (e = null == n ? void 0 : n.toLowerCase()) && void 0 !== e ? e : "",
                                    s = e => {
                                        let t = e.toLowerCase(),
                                            n = 0;
                                        return t.startsWith("https://") ? n += 6 : t.startsWith("http://") && (n += 3), t.includes("storage.googleapis.com") && (n += 40), t.includes("googleusercontent.com") && (n += 35), t.includes("public") && (n += 4), t.includes("cdn.") && (n += 3), t.includes("signed") && (n += 2), (t.endsWith(".png") || t.endsWith(".jpg") || t.endsWith(".jpeg") || t.endsWith(".webp")) && (n += 2), a && t.startsWith(a) && (n -= 30), t.includes("/preview/") && (n -= 5), n
                                    };
                                return i.reduce((e, t) => e ? s(t) > s(e) ? t : e : t)
                            },
                            a = (e, t) => {
                                let n = new Set,
                                    l = e => {
                                        "string" == typeof e && e.trim().length > 0 && !e.includes("://") && n.add(e.trim())
                                    },
                                    r = e => {
                                        if (!e || "object" != typeof e) return;
                                        if (Array.isArray(e)) {
                                            e.forEach(r);
                                            return
                                        }
                                        let t = "string" == typeof e.object ? e.object.toLowerCase() : "";
                                        Object.entries(e).forEach(e => {
                                            let [n, i] = e, a = n.toLowerCase();
                                            "string" == typeof i ? a.includes("file") && a.includes("id") ? l(i) : "id" === a && t.includes("file") && l(i) : Array.isArray(i) ? i.forEach(r) : i && "object" == typeof i && r(i)
                                        })
                                    };
                                return r(e), t && r(t), Array.from(n).sort((e, t) => {
                                    let n = e => {
                                        let t = 0;
                                        return e.startsWith("file_") && (t += 10), e.includes("_") && (t += 5), /^[a-z0-9\-_]+$/i.test(e) && (t += 1), t
                                    };
                                    return n(t) - n(e)
                                })[0]
                            },
                            s = (e, t) => {
                                let n = [],
                                    l = (e, t) => {
                                        e && t.forEach(t => {
                                            let l = e[t];
                                            "string" == typeof l && n.push(l)
                                        })
                                    },
                                    r = ["thumbnail_url", "thumbnailUrl", "thumbnailURL", "thumbnail", "thumb_url", "thumbUrl", "thumbURL", "poster_url", "posterUrl", "posterURL", "poster", "preview_image_url", "previewImageUrl", "preview_image", "previewImage", "public_url", "publicUrl", "publicURL", "url", "file_url", "fileUrl", "signed_url", "signedUrl", "download_url", "downloadUrl", "preview_url", "previewUrl", "cdn_url", "cdnUrl"];
                                l(e, r), l(t, r);
                                let i = e => {
                                    e && ("string" == typeof e ? n.push(e) : Array.isArray(e) ? e.forEach(i) : "object" == typeof e && l(e, r))
                                };
                                return i(null == e ? void 0 : e.sources), i(null == t ? void 0 : t.sources), i(null == e ? void 0 : e.resource), i(null == t ? void 0 : t.resource), i(null == e ? void 0 : e.thumbnail), i(null == t ? void 0 : t.thumbnail), i(null == e ? void 0 : e.preview), i(null == t ? void 0 : t.preview), i(null == e ? void 0 : e.previews), i(null == t ? void 0 : t.previews), i(null == e ? void 0 : e.thumbnails), i(null == t ? void 0 : t.thumbnails), n
                            };
                        tW.forEach(n => {
                            if (!(0, eU.$)(n) || !n.previewObjects) return;
                            let l = n.sessionId || tL;
                            l === tL && (n.previewObjects.data || []).forEach((o, d) => {
                                (Array.isArray(o.objects) ? o.objects : []).forEach((c, u) => {
                                    var m;
                                    let f = c.mimetype || "",
                                        p = f.toLowerCase(),
                                        h = p.startsWith("image/"),
                                        g = p.startsWith("video/"),
                                        x = "application/pdf" === p,
                                        v = "".concat(n.id, ":").concat(c.id),
                                        b = (null == c ? void 0 : c.metadata) || void 0,
                                        y = (null == b ? void 0 : b.dimensions) || void 0,
                                        w = (null == c ? void 0 : c.dimensions) || y,
                                        j = (null == c ? void 0 : c.size) || void 0,
                                        N = a(c, b),
                                        k = !!N,
                                        C = !1 !== c.preview || k,
                                        S = i6.get(c.id),
                                        I = null !== (m = null != S ? S : l ? (0, R.pC)(l, c.id) : void 0) && void 0 !== m ? m : i(...s(c, b)),
                                        E = (0, eK.j8)(c.id, N, I);
                                    if (!h && !x && !g && !E) return;
                                    let _ = o.title || "".concat(h ? "Image" : g ? "Video" : x ? "Document" : "Model", " ").concat(d + 1),
                                        z = o.objects.length > 1 ? "".concat(_, " #").concat(u + 1) : _,
                                        F = E ? "model" : h ? "image" : g ? "video" : "document",
                                        M = t({
                                            kind: F,
                                            primaryLabel: o.title,
                                            fallbackLabel: z
                                        }),
                                        T = r([null == c ? void 0 : c.width, null == c ? void 0 : c.w, null == b ? void 0 : b.width, null == b ? void 0 : b.w, null == w ? void 0 : w.width, null == w ? void 0 : w.w, null == y ? void 0 : y.width, null == y ? void 0 : y.w, null == j ? void 0 : j.width, null == j ? void 0 : j.w]),
                                        D = r([null == c ? void 0 : c.height, null == c ? void 0 : c.h, null == b ? void 0 : b.height, null == b ? void 0 : b.h, null == w ? void 0 : w.height, null == w ? void 0 : w.h, null == y ? void 0 : y.height, null == y ? void 0 : y.h, null == j ? void 0 : j.height, null == j ? void 0 : j.h]);
                                    e.push({
                                        id: v,
                                        artifactId: n.id,
                                        objectId: c.id,
                                        label: M,
                                        groupTitle: o.title,
                                        previewUrl: I,
                                        fileId: N,
                                        mimetype: f,
                                        kind: F,
                                        dimensions: T && D ? {
                                            width: T,
                                            height: D
                                        } : void 0,
                                        isPreviewEnabled: C
                                    })
                                })
                            })
                        });
                        let o = new Set(e.map(e => {
                            var t;
                            return null !== (t = (0, eR.V)(e.objectId)) && void 0 !== t ? t : e.objectId
                        }));
                        return (0, eR.i)(tW.values()).filter(e => {
                            var t;
                            return "previewCard" === e.source && "audio" !== e.kind && (null !== (t = e.sessionId) && void 0 !== t ? t : tL) === tL && !o.has(e.refId)
                        }).forEach(n => {
                            var l, r;
                            if ("audio" === n.kind) return;
                            let i = n.kind,
                                a = n.sessionId || tL,
                                s = n.src && (0, eR.V)(n.src) === n.refId ? n.src : n.refId,
                                o = i6.get(n.refId),
                                d = "string" == typeof n.src && (n.src.startsWith("http://") || n.src.startsWith("https://") || n.src.startsWith("data:")) ? n.src : void 0,
                                c = null !== (l = null != o ? o : d) && void 0 !== l ? l : a ? (0, R.pC)(a, n.refId) : void 0,
                                u = n.title || n.groupTitle || n.refId,
                                m = t({
                                    kind: i,
                                    primaryLabel: n.title,
                                    fallbackLabel: u
                                });
                            e.push({
                                id: "".concat(n.artifactId, ":").concat(s),
                                artifactId: n.artifactId,
                                objectId: s,
                                label: m,
                                groupTitle: null !== (r = n.groupTitle) && void 0 !== r ? r : n.title,
                                previewUrl: c,
                                mimetype: n.mimetype,
                                kind: i,
                                isPreviewEnabled: !0
                            })
                        }), l.forEach(t => {
                            e.push(t)
                        }), e
                    }, [tW, i6, az, tL]),
                    aU = (0, r.useMemo)(() => {
                        let e = new Map;
                        return aA.forEach(t => {
                            t.objectId && e.set(t.objectId, t.artifactId)
                        }), e
                    }, [aA]),
                    aR = (0, r.useRef)(new Set),
                    aL = (0, r.useRef)(new Set);
                (0, r.useEffect)(() => {
                    if (0 === aA.length) return;
                    let e = (0, e_.r6)();
                    aA.forEach(t => {
                        if (!1 === t.isPreviewEnabled || i6.has(t.objectId)) return;
                        let n = t.previewUrl;
                        !(!n || e && n.startsWith("".concat(e, "/preview/"))) || aR.current.has(t.objectId) || aR.current.add(t.objectId)
                    })
                }, [aA, i6]), (0, r.useEffect)(() => {
                    if (0 === aA.length) return;
                    let e = e => new Promise(t => {
                        let n = document.createElement("video"),
                            l = () => {
                                n.pause(), n.removeAttribute("src"), n.load()
                            };
                        n.crossOrigin = "anonymous", n.preload = "auto", n.muted = !0, n.playsInline = !0, n.addEventListener("loadeddata", () => {
                            try {
                                let e = Math.max(1, n.videoWidth || 0),
                                    r = Math.max(1, n.videoHeight || 0);
                                if (!e || !r) {
                                    l(), t(null);
                                    return
                                }
                                let i = document.createElement("canvas");
                                i.width = e, i.height = r;
                                let a = i.getContext("2d");
                                if (!a) {
                                    l(), t(null);
                                    return
                                }
                                a.drawImage(n, 0, 0, e, r);
                                let s = i.toDataURL("image/png");
                                l(), t(s)
                            } catch (e) {
                                console.warn("Failed to capture video thumbnail", e), l(), t(null)
                            }
                        }, {
                            once: !0
                        }), n.addEventListener("error", () => {
                            l(), t(null)
                        }, {
                            once: !0
                        }), n.src = e, n.load()
                    });
                    aA.forEach(t => {
                        var n;
                        if (!1 === t.isPreviewEnabled || "video" !== t.kind) return;
                        let l = t.objectId;
                        if (i7.has(l)) return;
                        let r = null !== (n = i6.get(l)) && void 0 !== n ? n : t.previewUrl;
                        !r || aL.current.has(l) || (aL.current.add(l), e(r).then(e => {
                            e && i9(t => {
                                if (t.get(l) === e) return t;
                                let n = new Map(t);
                                return n.set(l, e), n
                            })
                        }).catch(e => {
                            console.warn("Unable to generate video thumbnail", e)
                        }).finally(() => {
                            aL.current.delete(l)
                        }))
                    })
                }, [aA, i6, i7]), (0, r.useEffect)(() => {
                    let e = ae.current;
                    aA.forEach(t => {
                        e.set(t.id, t)
                    })
                }, [aA]);
                let [aO, aP] = (0, r.useState)(new Map), aZ = (0, r.useMemo)(() => {
                    let e = new Map;
                    return aA.forEach(t => {
                        e.set(t.id, t)
                    }), e1(tX).forEach((t, n) => {
                        e.has(n) || e.set(n, t)
                    }), aO.forEach((t, n) => {
                        e.has(n) || e.set(n, t)
                    }), e
                }, [aA, tX, aO]), aJ = (0, r.useMemo)(() => {
                    let e = null;
                    return tW.forEach(t => {
                        "preview" === t.type && (t.previewObjects || t.previewCard) && (e = t)
                    }), e
                }, [tW]), aq = (0, r.useMemo)(() => (function(e) {
                    var t, n, l, r, i, a;
                    let s;
                    let o = Array.from(e).filter(e => "preview" === e.type && !!(e.previewObjects || e.previewCard)),
                        d = null !== (t = o[o.length - 1]) && void 0 !== t ? t : null,
                        c = null == d ? void 0 : d.sessionId,
                        u = o.filter(e => e.sessionId === c),
                        m = [],
                        f = new Set,
                        p = new Set,
                        h = [];
                    for (let e of u)
                        for (let t of (s = null !== (l = e.previewCard) && void 0 !== l ? l : s, e.previewCard && h.push({
                                stream: e.previewCard,
                                title: "Canvas ".concat(h.length + 1),
                                artifactId: e.id
                            }), null !== (r = null === (n = e.previewObjects) || void 0 === n ? void 0 : n.data) && void 0 !== r ? r : [])) {
                            let n = Array.isArray(t.objects) ? t.objects : [];
                            if (0 === n.length) continue;
                            let l = n.filter(t => {
                                var n, l;
                                let r = null !== (n = (0, eR.V)(t.id)) && void 0 !== n ? n : t.id,
                                    i = "".concat(null !== (l = e.sessionId) && void 0 !== l ? l : "", ":").concat(r);
                                return !p.has(i) && (p.add(i), f.add(i), !0)
                            });
                            l.length > 0 && m.push({
                                title: t.title,
                                objects: l
                            })
                        }
                    if (!d) return null;
                    for (let e of (0, eR.i)(u).filter(e => {
                            var t;
                            return "previewCard" === e.source && !f.has("".concat(null !== (t = e.sessionId) && void 0 !== t ? t : "", ":").concat(e.refId))
                        })) {
                        let t = e.src && (0, eR.V)(e.src) === e.refId ? e.src : e.refId;
                        m.push({
                            title: null !== (i = e.title) && void 0 !== i ? i : "Media",
                            objects: [{
                                id: t,
                                mimetype: e.mimetype,
                                preview: !0
                            }]
                        })
                    }
                    let g = m.length > 0 ? {
                        object: "preview.objects",
                        data: m
                    } : void 0;
                    return {
                        ...d,
                        previewObjects: null != g ? g : d.previewObjects,
                        previewCard: null !== (a = d.previewCard) && void 0 !== a ? a : s,
                        previewCards: h.length > 0 ? h : void 0
                    }
                })(tW.values()), [tW]), aW = (0, r.useMemo)(() => !!aq && (aq.previewObjects ? (aq.previewObjects.data || []).some(e => e.objects && e.objects.length > 0) : !!aq.previewCard), [aq]), aV = (0, r.useCallback)(() => {
                    if (ep) {
                        null == eh || eh();
                        return
                    }
                    aq && es(aq)
                }, [ep, aq, eh, es]);
                (0, r.useEffect)(() => {
                    ep && aq && es(aq)
                }, [aq, ep, es]);
                let aB = (0, r.useCallback)((e, t) => {
                        var n, l;
                        let r = "".concat(e, ":").concat(t);
                        return null !== (l = null !== (n = aZ.get(r)) && void 0 !== n ? n : ae.current.get(r)) && void 0 !== l ? l : null
                    }, [aZ]),
                    aK = (0, r.useCallback)((e, t) => {
                        if ("inline" === e) {
                            let e = aU.get(t);
                            return e ? aZ.get("".concat(e, ":").concat(t)) : void 0
                        }
                        return aZ.get("".concat(e, ":").concat(t))
                    }, [aZ, aU]),
                    aH = (0, r.useCallback)(e => {
                        let t = nE(ny(e, null == aJ ? void 0 : aJ.id)),
                            n = [],
                            l = [],
                            r = [],
                            i = e => {
                                if (!e) return;
                                let t = n[n.length - 1];
                                if (t && "text" === t.type) {
                                    var l;
                                    t.text = "".concat(null !== (l = t.text) && void 0 !== l ? l : "").concat(e)
                                } else n.push({
                                    type: "text",
                                    text: e
                                })
                            },
                            a = function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "image",
                                    l = "video" === t ? "video_ref" : "document" === t ? "doc_ref" : "img_ref",
                                    r = n[n.length - 1],
                                    a = r && "text" === r.type && r.text && !/\s$/.test(r.text);
                                i("".concat(a ? " " : "", "<").concat(l, ">").concat(e, "</").concat(l, ">"))
                            };
                        return t.forEach(e => {
                            if ("text" === e.type) {
                                if (0 === e.text.length) return;
                                i(e.text);
                                return
                            }
                            let t = aB(e.artifactId, e.objectId);
                            if (t) {
                                l.push(t), a(t.objectId, t.kind);
                                return
                            }
                            a(e.objectId), r.push({
                                artifactId: e.artifactId,
                                objectId: e.objectId
                            })
                        }), {
                            segments: n,
                            resolvedMentionItems: l,
                            missingMentionIds: r
                        }
                    }, [null == aJ ? void 0 : aJ.id, aB]),
                    a$ = (0, r.useCallback)(e => {
                        let t = [];
                        return e.forEach(e => {
                            let n = r1.current[e];
                            if (!n) return;
                            let l = aC(n.userMessage);
                            if ("string" == typeof n.userMessage.content) {
                                let {
                                    segments: e
                                } = aH(n.userMessage.content), r = a3([...e, ...aN(l)]);
                                t.push({
                                    ...n.userMessage,
                                    content: r,
                                    attachments: l.length ? l : void 0
                                })
                            } else t.push({
                                ...n.userMessage,
                                attachments: l.length ? l : void 0
                            });
                            n.assistantMessages.forEach(e => t.push(e))
                        }), t
                    }, [aN, aH]),
                    aY = (0, r.useCallback)(e => {
                        if (t4 || np) return;
                        let t = r1.current[e];
                        t && nR({
                            turnId: e,
                            draft: ak(t.userMessage)
                        })
                    }, [t4, np]),
                    aG = (0, r.useCallback)(e => {
                        nR(t => t ? {
                            ...t,
                            draft: e
                        } : t)
                    }, []),
                    aX = (0, r.useCallback)(() => {
                        nR(null)
                    }, []),
                    aQ = (0, r.useCallback)(async () => {
                        if (!nU || t4 || np) return;
                        let {
                            turnId: e,
                            draft: t
                        } = nU, n = r1.current[e];
                        if (!n) return;
                        let l = aC(n.userMessage),
                            r = l.length > 0,
                            {
                                segments: i,
                                missingMentionIds: a
                            } = aH(t);
                        a.length > 0 && console.warn("Mention tokens present in edit but no matching images found", a);
                        let s = i.some(e => {
                                var t;
                                return "text" === e.type && (null !== (t = e.text) && void 0 !== t ? t : "").trim().length > 0
                            }),
                            o = i.some(e => "text" !== e.type);
                        if (!s && !o && !r) return;
                        let d = aS.indexOf(e),
                            c = d > -1 ? aS.slice(0, d) : [],
                            u = new Date;
                        nq({
                            sentAt: u
                        }), nv(!0), nR(null);
                        let m = (0, U.Z)(),
                            f = a3([...i, ...aN(l)]),
                            p = [...a$(c).map(e => ({
                                role: e.role,
                                content: e.content
                            })), {
                                role: "user",
                                content: f
                            }];
                        aj({
                            id: m,
                            parentId: n.parentId,
                            userMessage: {
                                ...n.userMessage,
                                content: t,
                                timestamp: u,
                                attachments: l.length ? l : void 0
                            },
                            assistantMessages: [],
                            children: []
                        }), await a_(m, p, u, tL)
                    }, [aS, aj, aN, aH, nU, a$, t4, np, tL, a_]),
                    a0 = (0, r.useCallback)(async (e, t) => {
                        if (t4 || np) return;
                        let n = r1.current[e];
                        if (!n) return;
                        let l = aS.indexOf(e),
                            r = l > -1 ? aS.slice(0, l) : [],
                            i = new Date;
                        nq({
                            sentAt: i
                        }), nv(!0);
                        let a = (0, U.Z)(),
                            s = aC(n.userMessage),
                            o = aN(s),
                            {
                                segments: d
                            } = aH(ak(n.userMessage)),
                            c = a3([...d, ...o]),
                            u = [...a$(r).map(e => ({
                                role: e.role,
                                content: e.content
                            })), {
                                role: "user",
                                content: c
                            }];
                        aj({
                            id: a,
                            parentId: n.parentId,
                            userMessage: {
                                ...n.userMessage,
                                timestamp: i,
                                attachments: s.length ? s : void 0
                            },
                            assistantMessages: [],
                            children: []
                        }), await a_(a, u, i, tL, t)
                    }, [aS, aj, aN, aH, a$, t4, np, tL, a_]),
                    a1 = (0, r.useCallback)(e => {
                        if (lE(e), !e || e === lI || !lR.current.has(e) || t4 || np) return;
                        let t = aS[aS.length - 1],
                            n = t ? r1.current[t] : void 0;
                        n && 0 !== n.assistantMessages.length && a0(t, e)
                    }, [aS, a0, t4, np, lI]),
                    a2 = (0, r.useCallback)(e => {
                        let t = r1.current[e];
                        if (!t) return [];
                        if (!t.parentId) return [...rj];
                        let n = r1.current[t.parentId];
                        return n ? [...n.children] : []
                    }, [rj]),
                    a5 = (0, r.useCallback)(e => {
                        let t = r1.current[e];
                        if (t) {
                            if (!t.parentId) {
                                rC(e);
                                return
                            }
                            rw(n => {
                                let l = n[t.parentId];
                                return l && l.selectedChildId !== e ? {
                                    ...n,
                                    [t.parentId]: {
                                        ...l,
                                        selectedChildId: e
                                    }
                                } : n
                            })
                        }
                    }, []),
                    a4 = (0, r.useCallback)((e, t) => {
                        let n = a2(e);
                        if (n.length <= 1) return;
                        let l = n.indexOf(e);
                        if (-1 === l) return;
                        let r = l + ("next" === t ? 1 : -1);
                        r < 0 ? r = n.length - 1 : r >= n.length && (r = 0);
                        let i = n[r];
                        i && (nR(null), a5(i))
                    }, [a2, a5]),
                    a3 = e => 0 === e.length ? "" : e.some(e => "text" !== e.type) ? e.map(e => {
                        var t;
                        return "text" === e.type ? {
                            type: "text",
                            text: null !== (t = e.text) && void 0 !== t ? t : ""
                        } : e
                    }) : e.map(e => {
                        var t;
                        return null !== (t = e.text) && void 0 !== t ? t : ""
                    }).join(""),
                    a6 = (0, r.useMemo)(() => {
                        let e = aA.filter(e => ("image" === e.kind || "video" === e.kind || "document" === e.kind || "model" === e.kind) && !1 !== e.isPreviewEnabled),
                            t = new Set,
                            n = e.filter(e => {
                                let n = "".concat(e.artifactId, ":").concat(e.objectId);
                                return !t.has(n) && (t.add(n), !0)
                            });
                        if (!ig) return n;
                        let l = ig.query.toLowerCase();
                        return l ? n.filter(e => {
                            var t, n;
                            return e.label.toLowerCase().includes(l) || e.objectId.toLowerCase().includes(l) || null !== (n = null === (t = e.groupTitle) || void 0 === t ? void 0 : t.toLowerCase().includes(l)) && void 0 !== n && n
                        }) : n
                    }, [aA, ig]),
                    a8 = (0, r.useMemo)(() => {
                        let e = new Map;
                        return a6.forEach((t, n) => {
                            e.set(t.id, n)
                        }), e
                    }, [a6]),
                    a7 = (0, r.useMemo)(() => a6.filter(e => "image" === e.kind), [a6]),
                    a9 = (0, r.useMemo)(() => a6.filter(e => "video" === e.kind), [a6]),
                    se = (0, r.useMemo)(() => a6.filter(e => "document" === e.kind), [a6]),
                    st = (0, r.useMemo)(() => a6.filter(e => "model" === e.kind), [a6]),
                    {
                        data: sn
                    } = (0, m.U$)(null != e9 ? e9 : ""),
                    sl = (0, r.useRef)(!1);
                (0, r.useEffect)(() => {
                    e9 && !sl.current && sn && sn.id === e9 && (sl.current = !0, lC([sn]))
                }, [e9, sn]);
                let sr = (0, r.useRef)(!1),
                    [si, sa] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    if (!te || sr.current) return;
                    sr.current = !0;
                    let e = function(e, t) {
                        var n, l, r;
                        if (t) return t;
                        let i = null !== (r = (null !== (l = null === (n = e.split("?")[0]) || void 0 === n ? void 0 : n.toLowerCase()) && void 0 !== l ? l : "").split(".").pop()) && void 0 !== r ? r : "";
                        return "pdf" === i ? "pdf" : ["png", "jpg", "jpeg", "gif", "webp", "bmp", "svg", "tiff", "tif"].includes(i) ? "image" : ["mp4", "webm", "ogg", "mov"].includes(i) ? "video" : ["mp3", "wav", "m4a"].includes(i) ? "audio" : null
                    }(te, tl);
                    if (!e) {
                        console.warn("Unsupported attachment type for URL, skipping: ".concat(te)), sa(!0);
                        return
                    }
                    let t = {
                        id: crypto.randomUUID(),
                        type: e,
                        url: te,
                        previewUrl: te,
                        uploadedUrl: te,
                        status: "ready"
                    };
                    t$(e => [...e, t])
                }, [te, tl]);
                let ss = (0, r.useRef)(!1);
                (0, r.useEffect)(() => {
                    if (!(null == tm ? void 0 : tm.length) || ss.current) return;
                    if (tm.every(e => tH.some(t => t.fileId === e))) {
                        ss.current = !0;
                        return
                    }
                    ss.current = !0;
                    let e = tm.map(e => ({
                        id: crypto.randomUUID(),
                        type: "pdf",
                        fileId: e,
                        status: "ready"
                    }));
                    t$(t => [...t, ...e])
                }, [tm]);
                let so = (0, r.useRef)(new Set);
                (0, r.useEffect)(() => {
                    let e = tH.filter(e => e.fileId && !e.file && !e.url && !e.previewUrl && !so.current.has(e.fileId));
                    0 !== e.length && (e.forEach(e => so.current.add(e.fileId)), (async () => {
                        for (let t of e) try {
                            let e = await (0, o.Li)(t.fileId);
                            if (!e) throw Error("Failed to load file metadata");
                            let n = e.filename || "File",
                                l = e.public_url || "",
                                r = n.endsWith(".pdf") ? "pdf" : /\.(png|jpg|jpeg|gif|webp|svg|tiff|bmp)$/i.test(n) ? "image" : /\.(mp3|wav|ogg|m4a|flac)$/i.test(n) ? "audio" : /\.(mp4|mov|avi|webm|mkv)$/i.test(n) ? "video" : t.type;
                            t$(e => e.map(e => e.id === t.id ? {
                                ...e,
                                type: r,
                                url: l,
                                previewUrl: l,
                                uploadedUrl: l
                            } : e))
                        } catch (e) {
                            console.error("Failed to fetch file metadata for", t.fileId, e)
                        }
                    })())
                }, [tH]);
                let sd = !(null == tm ? void 0 : tm.length) || tm.every(e => tH.some(t => t.fileId === e)),
                    sc = !te || si || tH.some(e => e.url === te || e.previewUrl === te || e.uploadedUrl === te),
                    su = sd && sc,
                    sm = (0, r.useRef)(!1);
                (0, r.useEffect)(() => {
                    if (tv || sm.current) return;
                    let e = null == th ? void 0 : th.trim();
                    e && (sm.current = !0, tZ(e))
                }, [tv, th]);
                let sf = (0, r.useRef)(!1);
                il.current = t4 || np;
                let sp = (0, r.useCallback)(e => {
                    let t = e.trim();
                    return !t || ((tZ(t), il.current) ? (ir.current = t, !1) : (Promise.resolve(it.current(t)).then(e => {
                        !1 === e ? ir.current = t : ir.current === t && (ir.current = null)
                    }), !0))
                }, []);
                (0, r.useEffect)(() => {
                    if (t4 || np) return;
                    let e = ir.current;
                    e && sp(e)
                }, [t4, np, sp]), (0, r.useEffect)(() => {
                    if (tv && !sf.current && (!e9 || 0 !== lk.length) && su) {
                        if (null == th ? void 0 : th.trim()) {
                            sf.current = !0;
                            let e = th.trim();
                            tZ(e), ir.current = e;
                            let t = 0,
                                n = !1,
                                l = window.setInterval(() => {
                                    t += 1, !n && (il.current && t < 25 || (n = !0, Promise.resolve(it.current(e)).then(e => {
                                        if (!1 === e && t < 25) {
                                            n = !1;
                                            return
                                        }
                                        ir.current = null, window.clearInterval(l)
                                    })))
                                }, 150);
                            return () => window.clearInterval(l)
                        }
                        if (lk.length > 0) {
                            sf.current = !0;
                            let e = window.setTimeout(() => {
                                it.current()
                            }, 200);
                            return () => window.clearTimeout(e)
                        }
                    }
                }, [tv, th, e9, lk.length, su]), (0, r.useEffect)(() => {
                    if (window.parent === window) return;
                    try {
                        window.parent.postMessage({
                            type: "vlm-chat-embed-ready"
                        }, "*")
                    } catch (e) {}
                    let e = e => {
                        if (e.source !== window.parent) return;
                        let t = e.data;
                        if (!t || "object" != typeof t) return;
                        if ("vlm-chat-embed-drop-files" === t.type) {
                            let e = Array.isArray(t.files) ? t.files.filter(e => e instanceof globalThis.File) : [];
                            if (0 === e.length && Array.isArray(t.filePayloads) && (e = t.filePayloads.filter(e => e && e.buffer instanceof ArrayBuffer && "string" == typeof e.name).map(e => new globalThis.File([e.buffer], e.name, {
                                    type: "string" == typeof e.type ? e.type : "",
                                    lastModified: "number" == typeof e.lastModified ? e.lastModified : Date.now()
                                }))), 0 === e.length) return;
                            ii.current(e);
                            return
                        }
                        if ("vlm-chat-embed-set-prompt" !== t.type) return;
                        let n = "string" == typeof t.prompt ? t.prompt.trim() : "",
                            l = "string" == typeof t.skillId ? t.skillId.trim() : "",
                            r = "string" == typeof t.skillSessionId ? t.skillSessionId.trim() : "",
                            i = Array.isArray(t.files) ? t.files.filter(e => e instanceof globalThis.File) : [];
                        0 === i.length && Array.isArray(t.filePayloads) && (i = t.filePayloads.filter(e => e && e.buffer instanceof ArrayBuffer && "string" == typeof e.name).map(e => new globalThis.File([e.buffer], e.name, {
                            type: "string" == typeof e.type ? e.type : "",
                            lastModified: "number" == typeof e.lastModified ? e.lastModified : Date.now()
                        }))), (n || 0 !== i.length || l) && (async () => {
                            if (l) try {
                                let e = await (0, d.aV)(l, r || void 0);
                                e && lC([e])
                            } catch (e) {
                                console.error("Failed to apply embed skill", l, e)
                            }
                            if (i.length > 0 && await ii.current(i), n && tZ(n), !1 !== t.autoSubmit) {
                                if (n) {
                                    ir.current = n, window.setTimeout(() => {
                                        sp(n)
                                    }, 50);
                                    return
                                }
                                window.setTimeout(() => {
                                    it.current()
                                }, 50)
                            }
                        })()
                    };
                    return window.addEventListener("message", e), () => window.removeEventListener("message", e)
                }, [sp]);
                let sh = (0, r.useMemo)(() => {
                        let e = e => {
                            let t = new Set,
                                n = [];
                            return e.forEach(e => {
                                "preview" === e.type && e.previewSuggestions && e.previewSuggestions.data.forEach((l, r) => {
                                    let i = ("string" == typeof(null == l ? void 0 : l.suggestion) ? l.suggestion : "").trim();
                                    if (!i) return;
                                    let a = (0, tc.a)(i, aU),
                                        s = a.toLowerCase();
                                    t.has(s) || (t.add(s), n.push({
                                        id: "".concat(e.id, "-").concat(r),
                                        text: a
                                    }))
                                })
                            }), n
                        };
                        if (tJ) {
                            let t = e((0, eL.h)(tJ, null != tL ? tL : void 0, !0).artifacts);
                            if (t.length > 0) return t
                        }
                        for (let t = az.length - 1; t >= 0; t--) {
                            let n = az[t];
                            if ("assistant" !== n.role) continue;
                            let l = "string" == typeof n.message.content ? n.message.content : "";
                            if (!l) continue;
                            let r = e((0, eL.h)(l, null != tL ? tL : void 0, n.message.isStreaming).artifacts);
                            if (r.length > 0) return r
                        }
                        return []
                    }, [aU, az, tL, tJ]),
                    sg = (0, r.useMemo)(() => nk(ny(tP, null == aJ ? void 0 : aJ.id)), [tP, null == aJ ? void 0 : aJ.id]),
                    sx = sg.text.length > 0,
                    sv = sg.mentions.length > 0,
                    sb = (0, r.useMemo)(() => {
                        var e;
                        return nQ && null !== (e = tX.find(e => e.id === nQ)) && void 0 !== e ? e : null
                    }, [tX, nQ]),
                    sy = (0, r.useMemo)(() => (function(e) {
                        let t = eG(e);
                        if (0 === t.length) return null;
                        let n = t.map(e => ({
                            artifactId: eY,
                            objectId: e.id,
                            url: eX(e),
                            label: eQ(e),
                            mimetype: e0(e),
                            kind: "image"
                        }));
                        return {
                            artifactId: eY,
                            title: "Uploaded Images",
                            images: n
                        }
                    })(tX), [tX]);
                (0, r.useEffect)(() => {
                    e1(tX).forEach((e, t) => {
                        ae.current.set(t, e)
                    })
                }, [tX]), (0, r.useEffect)(() => {
                    nQ && (tX.some(e => e.id === nQ) || n0(null))
                }, [tX, nQ]), (0, r.useEffect)(() => {
                    r7.current && az.length > 0 && !tU && r7.current.focus()
                }, [az.length, tU]);
                let sw = (0, r.useCallback)(e => new Promise((t, n) => {
                        let l = new FileReader;
                        l.onload = () => t(l.result), l.onerror = () => n(Error("Failed to read file: ".concat(e.name))), l.readAsDataURL(e)
                    }), []),
                    sj = (0, r.useCallback)(async e => {
                        try {
                            if ((0, P.d)(e)) return await (0, P.f)(e);
                            return await sw(e)
                        } catch (e) {
                            throw console.error("Failed to generate preview:", e), e
                        }
                    }, [sw]),
                    sN = async (e, t) => {
                        var n, l;
                        let r = null !== (n = null == t ? void 0 : t.surface) && void 0 !== n ? n : "chat",
                            i = function(e, t) {
                                let {
                                    isSignedIn: n,
                                    currentFileCount: l
                                } = t, r = [], i = [], a = [], s = [], o = [];
                                if (!n && e.length > 8 - l) return i.push("Please sign in to upload more than ".concat(8, " files.")), {
                                    validFiles: [],
                                    errors: i
                                };
                                if (e.forEach(e => {
                                        let t = eZ(e.type),
                                            l = eJ(e.type),
                                            i = eq(e.type),
                                            d = eW(e.type);
                                        if (!(t || l || i || d)) {
                                            o.push(e.name);
                                            return
                                        }
                                        if (!n && (i || d)) {
                                            s.push(e.name);
                                            return
                                        }
                                        if (!n && e.size > 5242880) {
                                            a.push(e.name);
                                            return
                                        }
                                        r.push(e)
                                    }), s.length > 0) {
                                    let e = s[0],
                                        t = e.lastIndexOf("."),
                                        n = -1 !== t ? e.slice(t) : "unknown";
                                    i.push("Please sign in to upload files of type: ".concat(n, "."))
                                }
                                if (o.length > 0) {
                                    let e = o[0],
                                        t = e.lastIndexOf("."),
                                        n = -1 !== t ? e.slice(t) : "unknown";
                                    i.push("File type ".concat(n, " is not supported. Supported types: images, PDFs, audio, and video files."))
                                }
                                return a.length > 0 && i.push("Please sign in to upload files larger than ".concat(5, "MB.")), {
                                    validFiles: r,
                                    errors: i
                                }
                            }(e, {
                                isSignedIn: null != rc && rc,
                                currentFileCount: tX.length
                            }),
                            a = [...i.errors],
                            s = () => {
                                "chat" === r && (a.length > 0 ? t0(a.map(e => ({
                                    id: crypto.randomUUID(),
                                    message: e
                                }))) : i.validFiles.length > 0 && t0([]))
                            };
                        if (s(), 0 === i.validFiles.length) return {
                            files: [],
                            errors: a
                        };
                        let o = [];
                        for (let e of i.validFiles) {
                            if (e.size > 524288e4) {
                                a.push("".concat(e.name, " is too large (max 5GB)."));
                                continue
                            }
                            let t = e.type.startsWith("image/") ? "image" : "application/pdf" === e.type ? "pdf" : e.type.startsWith("audio/") ? "audio" : e.type.startsWith("video/") ? "video" : "pdf",
                                n = {
                                    id: crypto.randomUUID(),
                                    file: e,
                                    type: t,
                                    status: "pending",
                                    uploadProgress: 0
                                };
                            if (rc || "image" !== t && "pdf" !== t) {
                                if ("image" === t) try {
                                    let t = await sj(e);
                                    n.previewUrl = t
                                } catch (e) {
                                    console.error("Failed to generate preview:", e)
                                } else if ("video" === t || "audio" === t) {
                                    try {
                                        n.previewUrl = URL.createObjectURL(e)
                                    } catch (e) {
                                        console.error("Failed to generate media preview:", e)
                                    }
                                    "video" === t && (n.status = "uploading", n.statusLabel = "Checking video…")
                                }
                            } else try {
                                if ("image" === t) {
                                    let t = await sj(e);
                                    n.base64 = t, n.previewUrl = t
                                } else {
                                    let t = await sw(e);
                                    n.base64 = t, n.previewUrl = t
                                }
                                n.status = "ready"
                            } catch (t) {
                                console.error("Failed to generate base64 for file:", e.name, t), n.status = "error", n.errorMessage = t instanceof Error && t.message.trim() ? t.message : "Failed to process file"
                            }
                            o.push(n)
                        }
                        for (let e of (a.length > i.errors.length && s(), t$(e => [...e, ...o]), "ocr" === r && o.forEach(e => t1.current.add(e.id)), o))
                            if ("video" === e.type && e.file) try {
                                let {
                                    file: t,
                                    transcoded: n
                                } = await (0, Z.gC)(e.file, t => {
                                    let {
                                        progress: n,
                                        phase: l
                                    } = t;
                                    t$(t => t.map(t => t.id === e.id ? {
                                        ...t,
                                        status: "uploading",
                                        statusLabel: "loading" === l ? "Loading converter…" : "Converting…",
                                        uploadProgress: n
                                    } : t))
                                });
                                if (n) {
                                    (null === (l = e.previewUrl) || void 0 === l ? void 0 : l.startsWith("blob:")) && URL.revokeObjectURL(e.previewUrl);
                                    let n = URL.createObjectURL(t);
                                    e.file = t, e.previewUrl = n, t$(l => l.map(l => l.id === e.id ? {
                                        ...l,
                                        file: t,
                                        previewUrl: n,
                                        status: "pending",
                                        statusLabel: void 0,
                                        uploadProgress: 0
                                    } : l))
                                } else t$(t => t.map(t => t.id === e.id ? {
                                    ...t,
                                    status: "pending",
                                    statusLabel: void 0,
                                    uploadProgress: 0
                                } : t))
                            } catch (t) {
                                console.warn("Video transcode skipped:", e.file.name, t), t$(t => t.map(t => t.id === e.id ? {
                                    ...t,
                                    status: "pending",
                                    statusLabel: void 0,
                                    uploadProgress: 0
                                } : t))
                            }
                        let d = rc ? o : o.filter(e => "ready" !== e.status);
                        return d.length > 0 && sS(d), {
                            files: o,
                            errors: a
                        }
                    };
                ii.current = sN;
                let sk = (e, t) => {
                        try {
                            let n = e.split("/");
                            return n[n.length - 1] || t
                        } catch (e) {
                            return t
                        }
                    },
                    sC = async (e, t, n) => ({
                        id: crypto.randomUUID(),
                        url: e,
                        type: n,
                        status: "ready",
                        previewUrl: e,
                        uploadedUrl: e
                    }), sS = (0, r.useCallback)(async e => {
                        t5(!0);
                        let t = e.map(async e => {
                            try {
                                let t;
                                if (t$(t => t.map(t => t.id === e.id ? {
                                        ...t,
                                        status: "uploading",
                                        uploadProgress: 0
                                    } : t)), !e.file) return;
                                t = await (0, o.x9)(e.file, t => {
                                    t$(n => n.map(n => n.id === e.id ? {
                                        ...n,
                                        uploadProgress: t
                                    } : n))
                                });
                                let n = !!e.previewUrl && ("video" === e.type || "audio" === e.type || null != e.file && (0, P.d)(e.file));
                                t1.current.delete(e.id), t$(l => l.map(l => l.id === e.id ? {
                                    ...l,
                                    status: "ready",
                                    fileId: t.id,
                                    uploadedUrl: t.public_url || void 0,
                                    url: t.public_url || void 0,
                                    previewUrl: n ? e.previewUrl : t.public_url || e.previewUrl,
                                    uploadProgress: 100
                                } : l))
                            } catch (c) {
                                var t, n, l, r, i, a;
                                if (console.error("Upload failed for", (null === (t = e.file) || void 0 === t ? void 0 : t.name) || e.url, c), e.file && ("image" === e.type || "pdf" === e.type)) try {
                                    let t = "image" === e.type ? await sj(e.file) : await sw(e.file);
                                    t$(n => n.map(n => n.id === e.id ? {
                                        ...n,
                                        status: "ready",
                                        base64: t,
                                        previewUrl: t,
                                        fileId: void 0,
                                        uploadProgress: 100
                                    } : n)), t1.current.delete(e.id), t0(t => t.filter(t => t.id !== e.id));
                                    return
                                } catch (t) {
                                    console.error("Failed to generate base64 fallback for", null === (i = e.file) || void 0 === i ? void 0 : i.name, t)
                                }
                                let s = c instanceof Error && null !== (a = null === (n = c.message) || void 0 === n ? void 0 : n.trim()) && void 0 !== a ? a : "",
                                    o = (null === (r = e.file) || void 0 === r ? void 0 : null === (l = r.name) || void 0 === l ? void 0 : l.trim()) || "file",
                                    d = s ? "Failed to upload ".concat(o, ": ").concat(s) : "Failed to upload ".concat(o);
                                if (t1.current.has(e.id)) {
                                    t1.current.delete(e.id), t$(t => t.map(t => t.id === e.id ? {
                                        ...t,
                                        status: "error",
                                        errorMessage: d
                                    } : t));
                                    return
                                }
                                t0(t => [...t.filter(t => t.id !== e.id), {
                                    id: e.id,
                                    message: d
                                }]), t$(t => t.filter(t => t.id !== e.id))
                            }
                        });
                        try {
                            await Promise.all(t)
                        } finally {
                            t5(!1)
                        }
                    }, [sw, sj]);
                (0, r.useEffect)(() => {
                    let e = rf.current;
                    if (rf.current = null != rc ? rc : null, !rc || !0 === e) return;
                    let t = tH.filter(e => e.file && !e.fileId && "ready" === e.status && !!e.base64);
                    if (0 === t.length) return;
                    let n = new Set(t.map(e => e.id));
                    t$(e => e.map(e => n.has(e.id) ? {
                        ...e,
                        status: "pending",
                        uploadProgress: 0
                    } : e)), sS(t)
                }, [rc, tH, sS]), (0, r.useCallback)(() => {
                    let e = iu.current;
                    if (!e) return !1;
                    let t = e.requestFullscreen || e.webkitRequestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen,
                        n = e.webkitEnterFullscreen;
                    if (!t && "function" != typeof n) return !1;
                    try {
                        if (e.pause(), e.currentTime = 0, t) {
                            im.current = !0;
                            let n = t.call(e);
                            n instanceof Promise && n.catch(() => {
                                im.current = !1
                            })
                        } else "function" == typeof n && (im.current = !1, n.call(e));
                        let l = e.play();
                        return null == l || l.catch(() => {}), !0
                    } catch (e) {
                        return im.current = !1, !1
                    }
                }, []);
                let sI = e => {
                        n2(e), nX(e), n0(null), n7(!1), requestAnimationFrame(() => {
                            var e;
                            sR(), sq(), null === (e = r7.current) || void 0 === e || e.focus()
                        })
                    },
                    sE = (0, r.useCallback)(() => {
                        n2(null), nX(null), n0(null), n7(!1)
                    }, []),
                    s_ = (0, r.useCallback)(() => {
                        n0(null), nX(null), n2(null), n7(!1)
                    }, []);
                (0, r.useEffect)(() => {
                    if (!n1 && !nG && !nQ) return;
                    let e = e => {
                        "Escape" === e.key && (e.preventDefault(), n1 ? sE() : (nG || nQ) && s_())
                    };
                    return window.addEventListener("keydown", e), () => {
                        window.removeEventListener("keydown", e)
                    }
                }, [n1, nG, nQ, sE, s_]);
                let sz = (0, r.useCallback)(e => {
                        t0(t => t.filter(t => t.id !== e))
                    }, []),
                    sF = (0, r.useCallback)(e => {
                        lC([e])
                    }, []),
                    sM = (0, ea.XC)({
                        inputRef: r7,
                        inputWrapperRef: r9,
                        setInput: tZ,
                        onSkillSelected: sF,
                        enabled: !e7
                    }),
                    sT = (0, r.useCallback)(e => {
                        lC(t => t.filter(t => t.id !== e))
                    }, []),
                    sD = (0, r.useCallback)(e => {
                        lH(e)
                    }, []),
                    sA = () => 0 === lk.length ? (0, l.jsx)(t_, {
                        onSkillSelect: sF,
                        disabled: t4 || np,
                        compact: tU
                    }) : lk.map(e => (0, l.jsx)(tw.W, {
                        skill: e,
                        onRemove: () => sT(e.id),
                        onClick: () => sD(e.id),
                        compact: tU
                    }, e.id)),
                    sU = e => {
                        var t;
                        let n = null === (t = e.dataTransfer) || void 0 === t ? void 0 : t.types;
                        return !!n && Array.from(n).includes("Files")
                    },
                    sR = (0, r.useCallback)(() => {
                        if (!r7.current) return;
                        let e = r7.current;
                        e.style.height = "auto";
                        let t = Math.max(Math.min(e.scrollHeight, 384), 24);
                        e.style.height = "".concat(t, "px"), iC(e.scrollTop), nZ(t > 24)
                    }, []),
                    sL = e => {
                        var t;
                        an(null), tZ(e.target.value);
                        let n = null !== (t = e.target.selectionStart) && void 0 !== t ? t : 0;
                        iN(e => e === n ? e : n), sR(), requestAnimationFrame(sq)
                    },
                    sO = () => {
                        ar(!0), sq()
                    },
                    sP = () => {
                        ar(!1), sW(), sM.closeMenu()
                    },
                    sZ = e => {
                        iC(e.currentTarget.scrollTop)
                    },
                    sJ = async e => {
                        if (t2 || np) return;
                        let t = e.clipboardData;
                        t && t.files && t.files.length > 0 && (e.preventDefault(), sN(Array.from(t.files)))
                    }, sq = () => {
                        var e, t;
                        if (!r7.current) return;
                        let n = r7.current,
                            l = n.value,
                            r = null !== (e = n.selectionStart) && void 0 !== e ? e : 0,
                            i = null !== (t = n.selectionEnd) && void 0 !== t ? t : r;
                        if (r === i) {
                            let e = r < ij,
                                t = t => {
                                    for (let l of t) {
                                        if (!(r > l.start && r < l.end)) continue;
                                        let t = ij < l.start;
                                        l.end;
                                        let a = null;
                                        return null !== (a = e || t ? l.start : l.end) && a !== r && (n.setSelectionRange(a, a), r = a, i = a), e = r < ij, !0
                                    }
                                    return !1
                                };
                            ai.current.length > 0 && t(ai.current), aa.current.length > 0 && t(aa.current)
                        }
                        let a = i;
                        iN(e => e === a ? e : a);
                        let s = null,
                            o = l.lastIndexOf("@", a - 1);
                        if (-1 !== o && o < a) {
                            let e = l.slice(o + 1, a);
                            /^[^\n,;:()\[\]{}]*$/.test(e) && (s = {
                                start: o,
                                end: a,
                                query: e
                            })
                        }
                        if (s) {
                            let e = !!ig;
                            ix(s), e || iw(0);
                            try {
                                let e = (0, ea.qC)(n, a);
                                if (e && r9.current) {
                                    let t = r9.current.getBoundingClientRect();
                                    ib({
                                        top: e.top - t.top + 24,
                                        left: e.left - t.left
                                    })
                                }
                            } catch (e) {
                                ib(null)
                            }
                        } else ix(null), ib(null), iw(0);
                        sM.updateDetection({
                            block: !!s
                        })
                    }, sW = () => {
                        ix(null), ib(null), iw(0)
                    }, sV = e => {
                        var t;
                        if ("image" !== e.kind && "video" !== e.kind && "document" !== e.kind || !r7.current) return;
                        ae.current.set("".concat(e.artifactId, ":").concat(e.objectId), e), an(null);
                        let n = r7.current,
                            l = null !== (t = n.selectionStart) && void 0 !== t ? t : 0,
                            r = n.value,
                            i = ig || nC(r, l);
                        if (!i) return;
                        let a = nx(e.artifactId, e.objectId),
                            s = r.slice(0, i.start),
                            o = r.slice(l),
                            d = 0 === o.length || !/^\s/.test(o);
                        tZ("".concat(s).concat(d ? "".concat(a, " ") : a).concat(o)), sW(), requestAnimationFrame(() => {
                            sR();
                            let e = s.length + a.length + (d ? 1 : 0);
                            n.setSelectionRange(e, e), n.focus(), sq()
                        })
                    }, sB = (0, r.useCallback)(e => {
                        let t, {
                                artifactId: n,
                                objectId: l,
                                label: r,
                                selection: i
                            } = e,
                            a = nx(n, l),
                            s = aB(n, l);
                        s && ae.current.set("".concat(n, ":").concat(l), s), an(null);
                        let o = e => "".concat(Math.round(100 * e), "%");
                        switch (i.type) {
                            case "rectangle": {
                                let {
                                    box: e
                                } = i;
                                t = "selection[type:rectangle, top:".concat(o(e.y), ", left:").concat(o(e.x), ", width:").concat(o(e.width), ", height:").concat(o(e.height), "]");
                                break
                            }
                            case "point": {
                                let {
                                    point: e
                                } = i;
                                t = "selection[type:point, x:".concat(o(e.x), ", y:").concat(o(e.y), "]");
                                break
                            }
                            case "brush": {
                                let {
                                    points: e,
                                    strokeWidth: n
                                } = i, l = e.slice(0, 20).map(e => "(".concat(o(e.x), ",").concat(o(e.y), ")")).join(" -> "), r = e.length > 20 ? " -> ..." : "";
                                t = "selection[type:brush, stroke:".concat(Math.round(n / 1e3 * 100), "%, points:").concat(e.length, ", path:").concat(l).concat(r, "]");
                                break
                            }
                            default:
                                t = "selection[type:unknown]"
                        }
                        return "".concat(a, " (").concat(r, ") ").concat(t)
                    }, [aB]), sK = (0, r.useCallback)(e => {
                        tZ(t => {
                            let n = t.replace(/\s*$/, ""),
                                l = n.length > 0 ? "\n" : "";
                            return "".concat(n).concat(l).concat(e, "\n")
                        }), requestAnimationFrame(sR)
                    }, [sR]), sH = (0, r.useCallback)((e, t) => {
                        e !== t && (tZ(n => {
                            let l = n.endsWith("\n"),
                                r = l ? n.slice(0, -1) : n,
                                i = r.length > 0 ? r.split("\n") : [],
                                a = i.findIndex(t => t === e);
                            if (-1 === a) return n;
                            i[a] = t;
                            let s = i.join("\n");
                            return l && s.length > 0 ? "".concat(s, "\n") : s
                        }), requestAnimationFrame(sR))
                    }, [sR]), s$ = (0, r.useCallback)(e => {
                        tZ(t => {
                            let n = t.endsWith("\n"),
                                l = n ? t.slice(0, -1) : t,
                                r = l.length > 0 ? l.split("\n") : [],
                                i = r.findIndex(t => t === e);
                            if (-1 === i) return t;
                            r.splice(i, 1);
                            let a = r.join("\n");
                            return n && a.length > 0 ? "".concat(a, "\n") : a
                        }), requestAnimationFrame(sR)
                    }, [sR]), sY = (0, r.useMemo)(() => {
                        var e;
                        if (!iS) return null;
                        let {
                            gallery: t,
                            imageId: n
                        } = iS, l = t.images;
                        if (!l || 0 === l.length) return null;
                        let r = null !== (e = l.find(e => e.objectId === n)) && void 0 !== e ? e : l[0];
                        return r && "image" === r.kind ? r : null
                    }, [iS]), sG = (0, r.useMemo)(() => sY ? "".concat(sY.artifactId, ":").concat(sY.objectId) : null, [sY]), sX = (0, r.useMemo)(() => {
                        var e;
                        return sG && null !== (e = iM[sG]) && void 0 !== e ? e : []
                    }, [sG, iM]), sQ = (0, r.useMemo)(() => {
                        let e = new Map,
                            t = Object.values(iM).flat();
                        return 0 !== t.length && tP && t.forEach(t => {
                            let n = nx(t.artifactId, t.objectId),
                                l = t.line.slice(n.length),
                                r = 0;
                            for (; r < tP.length;) {
                                let i = tP.indexOf(t.line, r);
                                if (-1 === i) break;
                                e.has(i) || e.set(i, {
                                    entry: t,
                                    descriptorText: l,
                                    tokenLength: n.length
                                }), r = i + t.line.length
                            }
                        }), e
                    }, [tP, iM]), s0 = e => {
                        for (let [t, n] of Array.from(sQ.entries())) {
                            let l = t + n.entry.line.length;
                            if (e >= t && e <= l) return {
                                entryStart: t,
                                entryEnd: l,
                                meta: n
                            }
                        }
                        return null
                    }, s1 = (e, t, n) => {
                        let l = "\n" === tP[t];
                        tZ(tP.slice(0, e) + tP.slice(l ? t + 1 : t)), s6("".concat(n.entry.artifactId, ":").concat(n.entry.objectId), n.entry.id), requestAnimationFrame(() => {
                            var t;
                            sR(), null === (t = r7.current) || void 0 === t || t.setSelectionRange(e, e), sq()
                        })
                    }, s2 = (0, r.useMemo)(() => {
                        let e = [];
                        return sQ.forEach((t, n) => {
                            let l = t.descriptorText.length;
                            if (0 === l) return;
                            let r = n + t.tokenLength,
                                i = r + l;
                            i > r && e.push({
                                start: r,
                                end: i
                            })
                        }), e.sort((e, t) => e.start - t.start), e
                    }, [sQ]);
                (0, r.useEffect)(() => {
                    ai.current = s2
                }, [s2]);
                let s5 = (0, r.useMemo)(() => {
                    let e;
                    let t = [];
                    if (!tP) return t;
                    let n = nh();
                    for (; null !== (e = n.exec(tP));) {
                        let n = e.index,
                            l = e.index + e[0].length;
                        " " === tP[l] && (l += 1), t.push({
                            start: n,
                            end: l
                        })
                    }
                    return t
                }, [tP]);
                (0, r.useEffect)(() => {
                    aa.current = s5
                }, [s5]), (0, r.useEffect)(() => {
                    if (!sG) {
                        iA(null);
                        return
                    }
                    iA(e => e && e.key === sG ? e : null)
                }, [sG]);
                let s4 = (0, r.useCallback)((e, t) => {
                        var n;
                        let l = "".concat(e.artifactId, ":").concat(e.objectId),
                            r = sB({
                                artifactId: e.artifactId,
                                objectId: e.objectId,
                                label: e.label,
                                selection: t
                            }),
                            i = {
                                id: (0, U.Z)(),
                                shape: t,
                                artifactId: e.artifactId,
                                objectId: e.objectId,
                                label: e.label,
                                line: r,
                                colorIndex: iL
                            };
                        sK(r), iT(e => {
                            var t;
                            let n = null !== (t = e[l]) && void 0 !== t ? t : [];
                            return {
                                ...e,
                                [l]: [...n, i]
                            }
                        }), iO(e => (e + 1) % L.Y.length), iA({
                            key: l,
                            id: i.id
                        }), null === (n = iH.current) || void 0 === n || n.focus()
                    }, [sK, sB, iL]),
                    s3 = (0, r.useCallback)((e, t, n) => {
                        iT(l => {
                            let r = l[e];
                            if (!r) return l;
                            let i = r.findIndex(e => e.id === t);
                            if (-1 === i) return l;
                            let a = r[i],
                                s = sB({
                                    artifactId: a.artifactId,
                                    objectId: a.objectId,
                                    label: a.label,
                                    selection: n
                                });
                            sH(a.line, s);
                            let o = {
                                    ...a,
                                    shape: n,
                                    line: s
                                },
                                d = [...r];
                            return d[i] = o, {
                                ...l,
                                [e]: d
                            }
                        })
                    }, [sB, sH]),
                    s6 = (0, r.useCallback)((e, t) => {
                        iT(n => {
                            let l = n[e];
                            if (!l) return n;
                            let r = l.findIndex(e => e.id === t);
                            if (-1 === r) return n;
                            s$(l[r].line);
                            let i = [...l.slice(0, r), ...l.slice(r + 1)],
                                a = {
                                    ...n
                                };
                            return i.length > 0 ? a[e] = i : delete a[e], a
                        }), iA(n => n && n.key === e && n.id === t ? null : n), iX.current && iX.current.key === e && iX.current.id === t && (iX.current = null)
                    }, [s$]),
                    s8 = (0, r.useCallback)(() => {
                        null !== i0.current && (iG(i0.current) && iY(i0.current), i0.current = null), iX.current = null, iF(null), iQ.current = null, iK(!1)
                    }, [iG, iY]),
                    s7 = (0, r.useCallback)(e => {
                        iT(t => {
                            let n = t[e];
                            if (!n || 0 === n.length) return t;
                            n.forEach(e => s$(e.line));
                            let l = {
                                ...t
                            };
                            return delete l[e], l
                        }), iA(t => t && t.key === e ? null : t), iX.current && iX.current.key === e && (iX.current = null)
                    }, [s$]),
                    s9 = (0, r.useCallback)(() => {
                        s8(), sG && (s7(sG), iO(0))
                    }, [sG, s7, s8]),
                    oe = (0, r.useCallback)(e => {
                        if (e !== iE) {
                            if (s8(), "none" === e) {
                                i_("none");
                                return
                            }
                            iP.current = e, i_(e)
                        }
                    }, [s8, iE]),
                    ot = (0, r.useCallback)(() => {
                        iI(null), i_("none"), s8(), iA(null), i5.current = null;
                        let e = i2.current;
                        null != e && requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                let t = ax();
                                t && t.scrollTo({
                                    top: e
                                }), i2.current = null
                            })
                        })
                    }, [ax, s8]);
                (0, r.useEffect)(() => {
                    iI(e => e && e.gallery.artifactId === eY ? sy ? sy.images.some(t => t.objectId === e.imageId) ? {
                        ...e,
                        gallery: sy
                    } : sy.images.length > 0 ? {
                        ...e,
                        gallery: sy,
                        imageId: sy.images[0].objectId
                    } : null : null : e)
                }, [sy]);
                let on = (0, r.useCallback)(e => {
                    let t = ax();
                    i2.current = t ? t.scrollTop : null, i5.current = "".concat(e.gallery.artifactId, ":").concat(e.imageId), null == eh || eh(), iI({
                        gallery: e.gallery,
                        imageId: e.imageId,
                        onSelectImage: e.onSelectImage
                    })
                }, [ax, eh]);
                (0, r.useEffect)(() => {
                    let e = e => {
                        let t = e.detail;
                        t && on({
                            gallery: t.gallery,
                            imageId: t.imageId,
                            onSelectImage: e => {
                                var n;
                                null === (n = t.onSelectImage) || void 0 === n || n.call(t, e)
                            }
                        })
                    };
                    return window.addEventListener(eH.Z, e), () => window.removeEventListener(eH.Z, e)
                }, [on]), (0, r.useEffect)(() => {
                    if (!iS) return;
                    let e = e => {
                        "Escape" === e.key && (e.preventDefault(), ot())
                    };
                    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                }, [iS, ot]), (0, r.useEffect)(() => {
                    if (!iS) return;
                    let e = i5.current;
                    if (!e) return;
                    let t = () => {
                            let t = document.querySelector('[data-preview-thumb="'.concat(e, '"]'));
                            t && t.scrollIntoView({
                                block: "nearest",
                                inline: "nearest",
                                behavior: "smooth"
                            }), i5.current = null
                        },
                        n = requestAnimationFrame(() => {
                            requestAnimationFrame(t)
                        });
                    return () => cancelAnimationFrame(n)
                }, [iS]);
                let ol = e => {
                        if (!iH.current) return null;
                        let t = iH.current.getBoundingClientRect();
                        return 0 === t.width || 0 === t.height ? null : {
                            x: Math.min(Math.max((e.clientX - t.left) / t.width, 0), 1),
                            y: Math.min(Math.max((e.clientY - t.top) / t.height, 0), 1)
                        }
                    },
                    or = (e, t) => {
                        let n = Math.min(e.x, t.x),
                            l = Math.min(e.y, t.y);
                        return {
                            x: Math.max(n, 0),
                            y: Math.max(l, 0),
                            width: Math.min(Math.max(Math.max(e.x, t.x), 0), 1) - Math.max(n, 0),
                            height: Math.min(Math.max(Math.max(e.y, t.y), 0), 1) - Math.max(l, 0)
                        }
                    },
                    oi = (e, t, n) => {
                        switch (e.type) {
                            case "rectangle":
                                return {
                                    type: "rectangle", box: {
                                        x: nw(e.box.x + t, 0, 1 - e.box.width),
                                        y: nw(e.box.y + n, 0, 1 - e.box.height),
                                        width: e.box.width,
                                        height: e.box.height
                                    }
                                };
                            case "point":
                                return {
                                    type: "point", point: {
                                        x: nw(e.point.x + t, 0, 1),
                                        y: nw(e.point.y + n, 0, 1)
                                    }
                                };
                            case "brush":
                                return {
                                    type: "brush", strokeWidth: e.strokeWidth, points: e.points.map(e => ({
                                        x: nw(e.x + t, 0, 1),
                                        y: nw(e.y + n, 0, 1)
                                    }))
                                };
                            default:
                                return e
                        }
                    },
                    oa = (e, t, n, l) => {
                        let r = e.box,
                            i = r.x,
                            a = r.y,
                            s = r.x + r.width,
                            o = r.y + r.height,
                            d = e => t.includes(e);
                        d("w") && (i = nw(i + n, 0, s - .01)), d("e") && (s = nw(s + n, i + .01, 1)), d("n") && (a = nw(a + l, 0, o - .01)), d("s") && (o = nw(o + l, a + .01, 1));
                        let c = Math.max(s - i, .01),
                            u = Math.max(o - a, .01);
                        return {
                            type: "rectangle",
                            box: {
                                x: nw(i, 0, 1 - c),
                                y: nw(a, 0, 1 - u),
                                width: Math.min(c, 1),
                                height: Math.min(u, 1)
                            }
                        }
                    },
                    os = e => {
                        if (!iJ || !nf(e)) return;
                        let t = ol(e);
                        if (t) {
                            if ("pointer" === iV) {
                                if (e.preventDefault(), !sY) return;
                                s4(sY, {
                                    type: "point",
                                    point: t
                                }), iF(null), iK(!1);
                                return
                            }
                            if (!sY) return;
                            e.preventDefault(), i0.current = e.pointerId, i$(e.pointerId), iA(null), "rectangle" === iV ? (iQ.current = t, iF({
                                type: "rectangle",
                                box: {
                                    x: t.x,
                                    y: t.y,
                                    width: 0,
                                    height: 0
                                }
                            })) : "brush" === iV && (iQ.current = null, iF({
                                type: "brush",
                                points: [t],
                                strokeWidth: iU
                            })), iK(!0)
                        }
                    },
                    oo = (e, t, n) => {
                        var l, r;
                        if (!iJ || !nf(e)) return;
                        e.preventDefault(), e.stopPropagation();
                        let i = ol(e);
                        if (!i) return;
                        let a = (null !== (r = iM[t]) && void 0 !== r ? r : []).find(e => e.id === n);
                        a && (iX.current = {
                            pointerId: e.pointerId,
                            key: t,
                            id: n,
                            mode: "move",
                            startPoint: i,
                            originalShape: a.shape,
                            hasMoved: !1
                        }, iA({
                            key: t,
                            id: n
                        }), i$(e.pointerId), null === (l = iH.current) || void 0 === l || l.focus())
                    },
                    od = (e, t, n, l) => {
                        var r, i;
                        if (!iJ || !nf(e)) return;
                        e.preventDefault(), e.stopPropagation();
                        let a = ol(e);
                        if (!a) return;
                        let s = (null !== (i = iM[t]) && void 0 !== i ? i : []).find(e => e.id === n);
                        s && "rectangle" === s.shape.type && (iX.current = {
                            pointerId: e.pointerId,
                            key: t,
                            id: n,
                            mode: "resize",
                            handle: l,
                            startPoint: a,
                            originalShape: s.shape,
                            hasMoved: !1
                        }, iA({
                            key: t,
                            id: n
                        }), i$(e.pointerId), null === (r = iH.current) || void 0 === r || r.focus())
                    },
                    oc = e => {
                        if (!iJ || !i1(e)) return;
                        "touch" === e.pointerType && e.preventDefault();
                        let t = iX.current;
                        if (t) {
                            let n = ol(e);
                            if (!n) return;
                            let l = n.x - t.startPoint.x,
                                r = n.y - t.startPoint.y;
                            if (5e-4 > Math.abs(l) && 5e-4 > Math.abs(r)) return;
                            if ("move" === t.mode) {
                                let e = oi(t.originalShape, l, r);
                                t.hasMoved = !0, s3(t.key, t.id, e);
                                return
                            }
                            if ("resize" === t.mode && t.handle) {
                                let e = t.originalShape;
                                if ("rectangle" !== e.type) return;
                                let n = oa(e, t.handle, l, r);
                                t.hasMoved = !0, s3(t.key, t.id, n)
                            }
                            return
                        }
                        if (!iB) return;
                        let n = ol(e);
                        if (n) {
                            if ("rectangle" === iP.current) {
                                let e = iQ.current;
                                if (!e) return;
                                iF({
                                    type: "rectangle",
                                    box: or(e, n)
                                });
                                return
                            }
                            "brush" === iP.current && iF(e => {
                                let t = e && "brush" === e.type ? e.points : [],
                                    l = t[t.length - 1];
                                return !l || Math.hypot(l.x - n.x, l.y - n.y) > .0035 ? {
                                    type: "brush",
                                    points: [...t, n],
                                    strokeWidth: e && "brush" === e.type ? e.strokeWidth : iU
                                } : e
                            })
                        }
                    },
                    ou = (0, r.useCallback)(e => {
                        if (!iJ || "brush" !== iV || !e.metaKey && !e.ctrlKey || 0 === e.deltaY) return;
                        e.preventDefault(), e.stopPropagation();
                        let t = nw(iU + (e.deltaY < 0 ? 1 : -1) * 10, 30, 200);
                        t !== iU && iR(t)
                    }, [iU, iJ, iV]),
                    om = e => {
                        if (iJ) {
                            if (!sY) {
                                s8();
                                return
                            }
                            if ("rectangle" === iP.current) {
                                let t = iQ.current;
                                if (!t) {
                                    s8();
                                    return
                                }
                                let n = ol(e);
                                if (!n) {
                                    s8();
                                    return
                                }
                                let l = or(t, n);
                                l.width > 0 && l.height > 0 && s4(sY, {
                                    type: "rectangle",
                                    box: l
                                }), iF(null)
                            } else if ("brush" === iP.current) {
                                let t = iz && "brush" === iz.type ? iz : null;
                                if (!t) {
                                    s8();
                                    return
                                }
                                let n = ol(e),
                                    l = [...t.points];
                                if (n) {
                                    let e = l[l.length - 1];
                                    (!e || Math.hypot(e.x - n.x, e.y - n.y) > .0025) && l.push(n)
                                }
                                let r = l.length > 1 ? {
                                    type: "brush",
                                    points: l,
                                    strokeWidth: t.strokeWidth
                                } : null;
                                r && s4(sY, r), iF(null)
                            }
                            iK(!1), iQ.current = null, iG(e.pointerId) && iY(e.pointerId), i0.current = null
                        }
                    },
                    of = e => {
                        if (iJ && i1(e)) {
                            if (iX.current) {
                                if (iX.current.pointerId !== e.pointerId) return;
                                iG(e.pointerId) && iY(e.pointerId), iX.current = null;
                                return
                            }
                            iB && om(e)
                        }
                    },
                    op = e => {
                        if (iJ && i1(e)) {
                            if (iX.current) {
                                if (iX.current.pointerId !== e.pointerId) return;
                                iG(e.pointerId) && iY(e.pointerId), iX.current = null;
                                return
                            }
                            iB && om(e)
                        }
                    },
                    oh = (0, r.useCallback)(e => {
                        iJ && iD && ("Backspace" === e.key || "Delete" === e.key) && (e.preventDefault(), e.stopPropagation(), s6(iD.key, iD.id))
                    }, [iD, s6, iJ]),
                    og = () => {
                        if (!sG) return null;
                        let e = iJ && !!iz;
                        if (0 === sX.length && !e) return null;
                        let t = (e, t) => {
                                let {
                                    box: n
                                } = e;
                                if (n.width <= 0 || n.height <= 0) return null;
                                let {
                                    key: r,
                                    isActive: i,
                                    isDraft: a,
                                    onPointerDown: s,
                                    imageKey: o,
                                    selectionKey: d,
                                    colorIndex: c = 0
                                } = t, u = (0, L.r)(c), m = (e, t) => {
                                    let n = t.getBoundingClientRect();
                                    if (0 === n.width || 0 === n.height) return null;
                                    let l = (e.clientX - n.left) / n.width,
                                        r = (e.clientY - n.top) / n.height,
                                        i = l <= .06 ? "w" : l >= .94 ? "e" : "",
                                        a = r <= .06 ? "n" : r >= .94 ? "s" : "";
                                    return i || a ? i && a ? "".concat(a).concat(i) : i || a : null
                                }, f = e => {
                                    switch (e) {
                                        case "n":
                                        case "s":
                                            return "ns-resize";
                                        case "e":
                                        case "w":
                                            return "ew-resize";
                                        case "ne":
                                        case "sw":
                                            return "nesw-resize";
                                        case "nw":
                                        case "se":
                                            return "nwse-resize";
                                        default:
                                            return "move"
                                    }
                                };
                                return (0, l.jsx)("div", {
                                    className: "absolute",
                                    style: {
                                        left: "".concat(100 * n.x, "%"),
                                        top: "".concat(100 * n.y, "%"),
                                        width: "".concat(100 * n.width, "%"),
                                        height: "".concat(100 * n.height, "%")
                                    },
                                    children: (0, l.jsx)("div", {
                                        className: (0, J.cn)("size-full rounded-3xl border-2 transition-all duration-150", a ? "pointer-events-none" : "pointer-events-auto cursor-move"),
                                        style: {
                                            borderColor: i ? u.borderActive : u.border,
                                            backgroundColor: i ? u.overlayActive : u.overlay
                                        },
                                        onPointerDown: e => {
                                            if (a || !o || !d || !nf(e)) {
                                                null == s || s(e);
                                                return
                                            }
                                            let t = e.currentTarget;
                                            if (!t) {
                                                null == s || s(e);
                                                return
                                            }
                                            let n = m(e, t);
                                            if (n) {
                                                od(e, o, d, n);
                                                return
                                            }
                                            null == s || s(e)
                                        },
                                        onPointerMove: e => {
                                            if (a) return;
                                            let t = e.currentTarget;
                                            if (!t) return;
                                            let n = o && d ? m(e, t) : null;
                                            t.style.cursor = f(n)
                                        },
                                        onPointerLeave: e => {
                                            if (a) return;
                                            let t = e.currentTarget;
                                            t && (t.style.cursor = "move")
                                        }
                                    })
                                }, r)
                            },
                            n = (e, t) => {
                                let {
                                    key: n,
                                    isActive: r,
                                    isDraft: i,
                                    onPointerDown: a,
                                    colorIndex: s = 0
                                } = t, o = (0, L.r)(s);
                                return (0, l.jsx)("div", {
                                    className: "absolute",
                                    style: {
                                        left: "".concat(100 * e.point.x, "%"),
                                        top: "".concat(100 * e.point.y, "%"),
                                        transform: "translate(-50%, -50%)"
                                    },
                                    children: (0, l.jsx)("div", {
                                        className: (0, J.cn)("rounded-full border-[3px] transition-all duration-150", i ? "pointer-events-none" : "pointer-events-auto cursor-move"),
                                        style: {
                                            width: "".concat(2.6, "%"),
                                            aspectRatio: "1 / 1",
                                            borderColor: r ? o.borderActive : o.border,
                                            backgroundColor: r ? o.overlayActive : o.overlay
                                        },
                                        onPointerDown: i ? void 0 : a
                                    })
                                }, n)
                            },
                            r = (e, t) => {
                                let {
                                    key: n,
                                    isActive: r,
                                    isDraft: i,
                                    onPointerDown: a,
                                    colorIndex: s = 0
                                } = t, o = (0, L.r)(s);
                                if (0 === e.points.length) return null;
                                if (1 === e.points.length) {
                                    let t = e.points[0],
                                        s = nw(e.strokeWidth / 1e3 * 100, 4, 25);
                                    return (0, l.jsx)("div", {
                                        className: "absolute",
                                        style: {
                                            left: "".concat(100 * t.x, "%"),
                                            top: "".concat(100 * t.y, "%"),
                                            transform: "translate(-50%, -50%)"
                                        },
                                        children: (0, l.jsx)("div", {
                                            className: (0, J.cn)("rounded-full border-[3px] transition-all duration-150", i ? "pointer-events-none" : "pointer-events-auto cursor-move"),
                                            style: {
                                                width: "".concat(s, "%"),
                                                height: "".concat(s, "%"),
                                                borderColor: r ? o.borderActive : o.border,
                                                backgroundColor: r ? o.overlayActive : o.overlay
                                            },
                                            onPointerDown: i ? void 0 : a
                                        })
                                    }, n)
                                }
                                let d = e.points.map(e => "".concat(Math.round(1e3 * e.x), ",").concat(Math.round(1e3 * e.y))).join(" ");
                                return (0, l.jsx)("div", {
                                    className: "absolute inset-0",
                                    children: (0, l.jsx)("svg", {
                                        className: "absolute inset-0 size-full",
                                        viewBox: "0 0 1000 1000",
                                        preserveAspectRatio: "none",
                                        children: (0, l.jsx)("polyline", {
                                            fill: "none",
                                            stroke: o.primary,
                                            strokeWidth: e.strokeWidth,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeOpacity: r ? .95 : .75,
                                            className: (0, J.cn)("transition-opacity duration-150", i ? "pointer-events-none" : "pointer-events-auto cursor-move"),
                                            points: d,
                                            onPointerDown: i ? void 0 : a,
                                            pointerEvents: i ? "none" : "stroke"
                                        })
                                    })
                                }, n)
                            },
                            i = (e, l) => {
                                switch (e.type) {
                                    case "rectangle":
                                        return t(e, l);
                                    case "point":
                                        return n(e, l);
                                    case "brush":
                                        return r(e, l);
                                    default:
                                        return null
                                }
                            };
                        return (0, l.jsxs)("div", {
                            className: "absolute inset-0",
                            "aria-hidden": !0,
                            children: [sX.map(e => {
                                let t = (null == iD ? void 0 : iD.key) === sG && iD.id === e.id;
                                return i(e.shape, {
                                    key: e.id,
                                    isActive: t,
                                    onPointerDown: t => oo(t, sG, e.id),
                                    imageKey: sG,
                                    selectionKey: e.id,
                                    colorIndex: e.colorIndex
                                })
                            }), iJ && iz ? i(iz, {
                                key: "draft",
                                isDraft: !0,
                                colorIndex: iL
                            }) : null]
                        })
                    };
                (0, r.useEffect)(() => {
                    iS && (s8(), iA(null), tU && "none" === iE && (iP.current = "rectangle", i_("rectangle")))
                }, [iS, s8, tU, iE]);
                let ox = (e, t, n, r, i) => {
                        var a;
                        let s = "".concat(e, ":").concat(t),
                            o = null !== (a = aZ.get(s)) && void 0 !== a ? a : ae.current.get(s);
                        return o ? (0, l.jsx)(td.A, {
                            artifactId: e,
                            objectId: t,
                            label: o.label,
                            previewUrl: o.previewUrl,
                            kind: o.kind,
                            selectionEntry: r,
                            allowWrap: null == i ? void 0 : i.allowWrap,
                            onChipMouseDown: e => {
                                var t;
                                e.preventDefault(), null === (t = r7.current) || void 0 === t || t.focus()
                            },
                            onOpenPreview: e => {
                                let {
                                    previewUrl: t,
                                    kind: n
                                } = e;
                                t && ag({
                                    id: s,
                                    type: "document" === n ? "pdf" : null != n ? n : "image",
                                    name: o.label,
                                    label: o.label,
                                    previewUrl: t,
                                    mimeType: o.mimetype
                                })
                            }
                        }) : null
                    },
                    ov = (e, t) => nE(e).map((e, n) => {
                        var r, i;
                        if ("text" === e.type) return e.text ? (0, l.jsx)("span", {
                            children: e.text
                        }, "".concat(t, "-text-").concat(n)) : null;
                        let a = "".concat(e.artifactId, ":").concat(e.objectId),
                            s = null !== (r = aZ.get(a)) && void 0 !== r ? r : ae.current.get(a),
                            o = null !== (i = null == s ? void 0 : s.label) && void 0 !== i ? i : nx(e.artifactId, e.objectId);
                        return (0, l.jsx)("span", {
                            className: "whitespace-normal break-words text-primary",
                            children: o
                        }, "".concat(t, "-mention-").concat(n))
                    }),
                    ob = () => {
                        let e = nE(tP),
                            t = 1 === e.length && "text" === e[0].type && 0 === e[0].text.length,
                            n = Math.max(0, Math.min(ij, tP.length)),
                            r = ik ? {
                                transform: "translateY(-".concat(ik, "px)")
                            } : void 0,
                            i = e => (0, l.jsx)("span", {
                                "aria-hidden": !0,
                                className: "animate-caret-blink inline-block h-[1.2em] w-[1.5px] bg-foreground align-middle"
                            }, e);
                        if (t) return (0, l.jsx)("div", {
                            className: "pointer-events-none absolute inset-0 z-20 overflow-hidden",
                            "aria-hidden": !0,
                            children: (0, l.jsxs)("div", {
                                className: "whitespace-pre-wrap break-words font-composer text-base leading-5 text-foreground sm:text-sm",
                                style: r,
                                children: [al ? i("caret-empty") : null, (0, l.jsx)("span", {
                                    className: "text-muted-foreground/70",
                                    children: "Ask anything"
                                })]
                            })
                        });
                        let a = !1,
                            s = 0,
                            o = null,
                            d = [],
                            c = (e, t, r) => {
                                if (0 === e.length) return;
                                let s = t + e.length;
                                if (al && !a && n >= t && n <= s) {
                                    let s = n - t,
                                        o = e.slice(0, s),
                                        c = e.slice(s);
                                    o.length > 0 && d.push((0, l.jsx)("span", {
                                        children: o
                                    }, "".concat(r, "-before"))), d.push(i("".concat(r, "-caret"))), a = !0, c.length > 0 && d.push((0, l.jsx)("span", {
                                        children: c
                                    }, "".concat(r, "-after")))
                                } else d.push((0, l.jsx)("span", {
                                    children: e
                                }, r))
                            };
                        return e.forEach((e, t) => {
                            var r;
                            if ("text" === e.type) {
                                let l = e.text,
                                    r = s,
                                    u = r + l.length;
                                if (o && o.length > 0 && l.startsWith(o)) {
                                    let e = o.length,
                                        m = r + e;
                                    al && !a && n >= r && n <= m && (d.push(i("caret-selection-".concat(t))), a = !0);
                                    let f = l.slice(e);
                                    f.length > 0 && c(f, m, "text-".concat(t)), o = null, s = u;
                                    return
                                }
                                o = null, l.length > 0 && c(l, r, "text-".concat(t)), s = u;
                                return
                            }
                            let u = nx(e.artifactId, e.objectId),
                                m = s,
                                f = m + u.length;
                            al && !a && n === m && (d.push(i("caret-".concat(t, "-before"))), a = !0);
                            let p = sQ.get(m);
                            d.push((0, l.jsx)("span", {
                                className: "inline-flex items-center",
                                children: ox(e.artifactId, e.objectId, t, null == p ? void 0 : p.entry)
                            }, "mention-".concat(t))), al && !a && n > m && n <= f && (d.push(i("caret-".concat(t))), a = !0), s = f, o = null !== (r = null == p ? void 0 : p.descriptorText) && void 0 !== r ? r : null
                        }), al && !a && d.push(i("caret-end")), (0, l.jsx)("div", {
                            className: "pointer-events-none absolute inset-0 z-20 overflow-hidden",
                            "aria-hidden": !0,
                            children: (0, l.jsx)("div", {
                                className: "whitespace-pre-wrap break-words font-composer text-base leading-5 text-foreground sm:text-sm",
                                style: r,
                                children: d
                            })
                        })
                    },
                    oy = () => {
                        if (!ig || !iv) return null;
                        let e = iv.top - 280,
                            t = iv.left,
                            n = e => {
                                var t, n;
                                let l = i7.get(e.objectId);
                                if (l) return l;
                                let r = null !== (t = i6.get(e.objectId)) && void 0 !== t ? t : e.previewUrl;
                                if (!r) return null;
                                if (r.startsWith("data:image")) return r;
                                try {
                                    let e = null !== (n = r.split("?")[0]) && void 0 !== n ? n : r;
                                    if (/\.(png|jpe?g|gif|webp)$/i.test(e)) return r
                                } catch (e) {}
                                return null
                            },
                            r = e => {
                                var t, n;
                                let l = null !== (t = i6.get(e.objectId)) && void 0 !== t ? t : e.previewUrl;
                                if (!l) return null;
                                if (l.startsWith("data:image")) return l;
                                try {
                                    let e = null !== (n = l.split("?")[0]) && void 0 !== n ? n : l;
                                    if (/\.(png|jpe?g|gif|webp)$/i.test(e)) return l
                                } catch (e) {}
                                return null
                            };
                        return (0, l.jsx)("div", {
                            className: "absolute z-50 w-64 rounded-lg border border-border/60 bg-popover",
                            style: {
                                top: e,
                                left: t
                            },
                            children: (0, l.jsx)(B.mY, {
                                className: "bg-transparent",
                                value: "",
                                onValueChange: () => {},
                                children: (0, l.jsxs)(B.e8, {
                                    children: [0 === a6.length && (0, l.jsx)(B.rb, {
                                        children: "No media items found"
                                    }), a6.length > 0 && (0, l.jsxs)(l.Fragment, {
                                        children: [se.length > 0 && (0, l.jsx)(B.fu, {
                                            heading: "Documents",
                                            children: se.map(e => {
                                                var t;
                                                let n = null !== (t = a8.get(e.id)) && void 0 !== t ? t : 0,
                                                    a = r(e);
                                                return (0, l.jsxs)(B.di, {
                                                    "data-mention-index": n,
                                                    className: (0, J.cn)("flex cursor-pointer items-center gap-2 px-3 py-2", iy === n && "bg-muted/70 text-foreground"),
                                                    onMouseEnter: () => iw(n),
                                                    onMouseDown: e => e.preventDefault(),
                                                    onSelect: () => sV(e),
                                                    children: [(0, l.jsx)("span", {
                                                        className: "relative flex size-10 shrink-0 overflow-hidden rounded-md border border-border/50 bg-muted",
                                                        children: a ? (0, l.jsx)(i.default, {
                                                            src: a,
                                                            alt: e.label,
                                                            fill: !0,
                                                            className: "object-cover",
                                                            unoptimized: !0
                                                        }) : (0, l.jsx)("div", {
                                                            className: "flex size-full items-center justify-center bg-muted",
                                                            children: (0, l.jsx)(S.Z, {
                                                                className: "size-5 text-amber-500"
                                                            })
                                                        })
                                                    }), (0, l.jsx)("div", {
                                                        className: "flex flex-col text-left",
                                                        children: (0, l.jsx)("span", {
                                                            className: "text-sm font-medium leading-5",
                                                            children: e.label
                                                        })
                                                    })]
                                                }, e.id)
                                            })
                                        }), a7.length > 0 && (0, l.jsx)(B.fu, {
                                            heading: "Images",
                                            children: a7.map(e => {
                                                var t, n;
                                                let r = null !== (t = a8.get(e.id)) && void 0 !== t ? t : 0,
                                                    a = null !== (n = i6.get(e.objectId)) && void 0 !== n ? n : e.previewUrl;
                                                return (0, l.jsxs)(B.di, {
                                                    "data-mention-index": r,
                                                    className: (0, J.cn)("flex cursor-pointer items-center gap-2 px-3 py-2", iy === r && "bg-muted/70 text-foreground"),
                                                    onMouseEnter: () => iw(r),
                                                    onMouseDown: e => e.preventDefault(),
                                                    onSelect: () => sV(e),
                                                    children: [(0, l.jsx)("span", {
                                                        className: "relative flex size-10 shrink-0 overflow-hidden rounded-md border border-border/50 bg-muted",
                                                        children: a ? (0, l.jsx)(i.default, {
                                                            src: a,
                                                            alt: e.label,
                                                            fill: !0,
                                                            className: "object-cover",
                                                            unoptimized: !0
                                                        }) : (0, l.jsx)("div", {
                                                            className: "flex size-full items-center justify-center bg-muted",
                                                            children: (0, l.jsx)(E.Z, {
                                                                className: "size-5 text-muted-foreground",
                                                                "aria-label": "User avatar"
                                                            })
                                                        })
                                                    }), (0, l.jsx)("div", {
                                                        className: "flex flex-col text-left",
                                                        children: (0, l.jsx)("span", {
                                                            className: "text-sm font-medium leading-5",
                                                            children: e.label
                                                        })
                                                    })]
                                                }, e.id)
                                            })
                                        }), a9.length > 0 && (0, l.jsx)(B.fu, {
                                            heading: "Videos",
                                            children: a9.map(e => {
                                                var t;
                                                let r = null !== (t = a8.get(e.id)) && void 0 !== t ? t : 0,
                                                    a = n(e);
                                                return (0, l.jsxs)(B.di, {
                                                    "data-mention-index": r,
                                                    className: (0, J.cn)("flex cursor-pointer items-center gap-2 px-3 py-2", iy === r && "bg-muted/70 text-foreground"),
                                                    onMouseEnter: () => iw(r),
                                                    onMouseDown: e => e.preventDefault(),
                                                    onSelect: () => sV(e),
                                                    children: [(0, l.jsx)("span", {
                                                        className: "relative flex size-10 shrink-0 overflow-hidden rounded-md border border-border/50 bg-muted",
                                                        children: a ? (0, l.jsxs)(l.Fragment, {
                                                            children: [(0, l.jsx)(i.default, {
                                                                src: a,
                                                                alt: e.label,
                                                                fill: !0,
                                                                className: "object-cover opacity-90",
                                                                unoptimized: !0
                                                            }), (0, l.jsx)("div", {
                                                                className: "absolute inset-0 flex items-center justify-center bg-black/30",
                                                                children: (0, l.jsx)(k.Z, {
                                                                    className: "size-4 text-white"
                                                                })
                                                            })]
                                                        }) : (0, l.jsx)("div", {
                                                            className: "flex size-full items-center justify-center bg-muted",
                                                            children: (0, l.jsx)(y.Z, {
                                                                className: "size-5 text-blue-500"
                                                            })
                                                        })
                                                    }), (0, l.jsx)("div", {
                                                        className: "flex flex-col text-left",
                                                        children: (0, l.jsx)("span", {
                                                            className: "text-sm font-medium leading-5",
                                                            children: e.label
                                                        })
                                                    })]
                                                }, e.id)
                                            })
                                        }), st.length > 0 && (0, l.jsx)(B.fu, {
                                            heading: "3D Models",
                                            children: st.map(e => {
                                                var t;
                                                let n = null !== (t = a8.get(e.id)) && void 0 !== t ? t : 0;
                                                return (0, l.jsxs)(B.di, {
                                                    "data-mention-index": n,
                                                    className: (0, J.cn)("flex cursor-pointer items-center gap-2 px-3 py-2", iy === n && "bg-muted/70 text-foreground"),
                                                    onMouseEnter: () => iw(n),
                                                    onMouseDown: e => e.preventDefault(),
                                                    onSelect: () => sV(e),
                                                    children: [(0, l.jsx)("span", {
                                                        className: "flex size-10 shrink-0 items-center justify-center rounded-md border border-border/50 bg-muted",
                                                        children: (0, l.jsx)(C.Z, {
                                                            className: "size-5 text-slate-500"
                                                        })
                                                    }), (0, l.jsx)("div", {
                                                        className: "flex flex-col text-left",
                                                        children: (0, l.jsx)("span", {
                                                            className: "text-sm font-medium leading-5",
                                                            children: e.label
                                                        })
                                                    })]
                                                }, e.id)
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    },
                    ow = () => {
                        r7.current && (r7.current.style.height = "24px", r7.current.scrollTop = 0), nZ(!1), iC(0)
                    },
                    oj = (0, r.useCallback)(function() {
                        let {
                            smooth: e = !0,
                            force: t = !1
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = ax();
                        if (n) {
                            if (!t && !r4.current) return;
                            n.scrollTo({
                                top: n.scrollHeight,
                                behavior: e ? "smooth" : "auto"
                            }), r4.current = !0, r3.current = n.scrollTop
                        }
                    }, [ax]);
                (0, r.useEffect)(() => {
                    let e = () => {
                            let e = ax();
                            if (!e) return;
                            let t = e.scrollTop,
                                n = r3.current,
                                l = t > n + .5;
                            r3.current = t;
                            let r = e.scrollHeight - (t + e.clientHeight) <= 96;
                            if (r8.current && rr) {
                                r4.current = !1, nd(!0);
                                return
                            }
                            if (t < n - .5) {
                                r4.current = !1, r6.current = !0, rr && (r8.current = !0), nd(!0);
                                return
                            }
                            if (!r4.current && rr && l) {
                                r8.current = !0, nd(!0);
                                return
                            }
                            if (r6.current) {
                                !rr && r && l && (r6.current = !1, r4.current = !0, r8.current || nd(!1));
                                return
                            }
                            r && (r4.current = !0, r8.current || nd(!1))
                        },
                        t = ax();
                    if (t) return r3.current = t.scrollTop, t.addEventListener("scroll", e), e(), () => t.removeEventListener("scroll", e)
                }, [ax, rr]), (0, r.useEffect)(() => {
                    rr || (r8.current = !1, r6.current || (nd(!1), r4.current = !0))
                }, [rr]);
                let oN = (0, r.useRef)(az.length);
                (0, r.useEffect)(() => {
                    let e = oN.current,
                        t = az.length;
                    oN.current = t, t > e && requestAnimationFrame(() => {
                        requestAnimationFrame(() => oj({
                            force: !0
                        }))
                    })
                }, [az, oj]), (0, r.useEffect)(() => {
                    if (!np) return;
                    let e = requestAnimationFrame(() => {
                        oj({
                            smooth: !1
                        })
                    });
                    return () => cancelAnimationFrame(e)
                }, [np, oj]), (0, r.useEffect)(() => {
                    if (!t4) return;
                    let e = requestAnimationFrame(() => {
                        oj({
                            smooth: !1
                        })
                    });
                    return () => cancelAnimationFrame(e)
                }, [t4, oj]), (0, r.useEffect)(() => {
                    let e = null,
                        t = () => {
                            if (!r5.current) {
                                e = setTimeout(t, 50);
                                return
                            }
                            let n = r5.current.querySelector("[data-radix-scroll-area-viewport]");
                            n ? lw(n) : e = setTimeout(t, 50)
                        };
                    return t(), () => {
                        e && clearTimeout(e)
                    }
                }, [az.length]), (0, r.useEffect)(() => {
                    ly && 0 !== az.length && requestAnimationFrame(() => {
                        oj({
                            smooth: !1,
                            force: !0
                        })
                    })
                }, [ly, oj]), (0, r.useEffect)(() => {
                    tJ && oj({
                        smooth: !1
                    })
                }, [tJ, oj]), (0, r.useEffect)(() => {
                    let e = e => e.replace(/<(img|doc|url|video|audio)_ref>[\s\S]*?<\/\1_ref>/g, ""),
                        t = t => "string" == typeof t ? e(t) : Array.isArray(t) ? t.map(t => "text" === t.type && t.text ? e(t.text) : "").filter(Boolean).join(" ") : "",
                        n = new Map;
                    az.forEach(e => {
                        if ("assistant" !== e.role) return;
                        let l = e.message,
                            r = t(l.content);
                        (0, eL.h)(r, null != tL ? tL : void 0, l.isStreaming).artifacts.forEach(e => {
                            n.set(e.id, e)
                        })
                    }), tJ && (0, eL.h)(e(tJ), null != tL ? tL : void 0, !0).artifacts.forEach(e => {
                        n.set(e.id, e)
                    }), tV(n)
                }, [az, tL, tJ]);
                let ok = e => {
                        var t, n, l;
                        if (!r7.current) return;
                        let r = r7.current,
                            i = null !== (t = r.selectionStart) && void 0 !== t ? t : 0,
                            a = null !== (n = r.selectionEnd) && void 0 !== n ? n : i,
                            s = [...aa.current, ...ai.current],
                            o = a6.length;
                        if (ig) {
                            if ("ArrowDown" === e.key && o > 0) {
                                e.preventDefault(), iw(e => {
                                    let t = (e + 1) % o;
                                    return requestAnimationFrame(() => {
                                        let e = document.querySelector('[data-mention-index="'.concat(t, '"]'));
                                        null == e || e.scrollIntoView({
                                            block: "nearest",
                                            behavior: "smooth"
                                        })
                                    }), t
                                });
                                return
                            }
                            if ("ArrowUp" === e.key && o > 0) {
                                e.preventDefault(), iw(e => {
                                    let t = (e - 1 + o) % o;
                                    return requestAnimationFrame(() => {
                                        let e = document.querySelector('[data-mention-index="'.concat(t, '"]'));
                                        null == e || e.scrollIntoView({
                                            block: "nearest",
                                            behavior: "smooth"
                                        })
                                    }), t
                                });
                                return
                            }
                            if (("Enter" === e.key || "Tab" === e.key) && !e.shiftKey && o > 0) {
                                e.preventDefault();
                                let t = null !== (l = a6[iy]) && void 0 !== l ? l : a6[0];
                                t && sV(t);
                                return
                            }
                            if ("Escape" === e.key) {
                                e.preventDefault(), sW();
                                return
                            }
                        }
                        if (!sM.handleKeyDown(e)) {
                            if (i === a && ("ArrowLeft" === e.key || "ArrowRight" === e.key)) {
                                let t = "ArrowRight" === e.key,
                                    n = t ? s.find(e => i > e.start && i < e.end - 1) : s.find(e => i > e.start && i <= e.end);
                                if (n) {
                                    e.preventDefault();
                                    let l = t ? n.end : n.start;
                                    r.setSelectionRange(l, l), requestAnimationFrame(sq);
                                    return
                                }
                            }
                            if (("Backspace" === e.key || "Delete" === e.key) && i === a) {
                                let t = s0("Backspace" === e.key ? Math.max(0, i - 1) : i);
                                if (t) {
                                    e.preventDefault();
                                    let {
                                        entryStart: n,
                                        entryEnd: l,
                                        meta: r
                                    } = t;
                                    s1(n, l, r);
                                    return
                                }
                            }
                            if ("Backspace" === e.key && i === a) {
                                let t = nS(tP, i);
                                if (t && i === t.end) {
                                    e.preventDefault(), tZ(nI(tP, t.start, t.end)), requestAnimationFrame(() => {
                                        sR(), r.setSelectionRange(t.start, t.start), sq()
                                    });
                                    return
                                }
                            }
                            if ("Delete" === e.key && i === a) {
                                let t = nS(tP, i);
                                if (t && i === t.start) {
                                    e.preventDefault(), tZ(nI(tP, t.start, t.end)), requestAnimationFrame(() => {
                                        sR(), r.setSelectionRange(t.start, t.start), sq()
                                    });
                                    return
                                }
                            }
                            if ("Enter" === e.key && !e.shiftKey && !ig && !sM.isOpen) {
                                e.preventDefault();
                                let t = tX.some(e => "uploading" === e.status || "pending" === e.status),
                                    n = tX.some(e => "ready" === e.status);
                                (sx || sv || n) && !t4 && !t && !np && oD();
                                return
                            }
                            requestAnimationFrame(sq)
                        }
                    },
                    oC = (0, r.useCallback)(e => {
                        let t = tW.get(e);
                        t ? es(t) : console.error("Artifact not found:", e)
                    }, [tW, es]),
                    oS = (0, r.useCallback)(() => {
                        le(!0)
                    }, []),
                    oI = e => {
                        var t, n;
                        if ("ready" === e.status) {
                            if ("image" === e.type && sy) {
                                on({
                                    gallery: sy,
                                    imageId: e.id,
                                    onSelectImage: e => {
                                        iI(t => t ? {
                                            ...t,
                                            imageId: e
                                        } : null)
                                    }
                                });
                                return
                            }
                            ag({
                                id: e.id,
                                type: e.type,
                                name: (null === (t = e.file) || void 0 === t ? void 0 : t.name) || sk(e.url || "", "File"),
                                previewUrl: e.previewUrl,
                                base64: e.base64,
                                file: e.file,
                                mimeType: (null === (n = e.file) || void 0 === n ? void 0 : n.type) || "application/octet-stream"
                            })
                        }
                    },
                    oE = () => {
                        let e = tP.trim();
                        e ? localStorage.setItem(nr, e) : localStorage.removeItem(nr);
                        let t = tX.filter(e => !e.file && (e.url || e.uploadedUrl || e.previewUrl)).map(e => {
                            var t, n, l;
                            return {
                                id: e.id,
                                type: e.type,
                                url: null !== (l = null !== (n = null !== (t = e.url) && void 0 !== t ? t : e.uploadedUrl) && void 0 !== n ? n : e.previewUrl) && void 0 !== l ? l : "",
                                previewUrl: e.previewUrl,
                                uploadedUrl: e.uploadedUrl
                            }
                        });
                        if (!e && 0 === t.length && !nG && !nQ && !n1) {
                            localStorage.removeItem(nl);
                            return
                        }
                        try {
                            localStorage.setItem(nl, JSON.stringify({
                                input: tP,
                                attachments: t,
                                selectedMediaType: nG,
                                selectedMediaAttachmentId: nQ,
                                showMediaShowcase: n1
                            }))
                        } catch (e) {
                            console.error("Failed to persist chat draft state", e)
                        }
                    },
                    o_ = async () => {
                        await oz()
                    }, oz = async () => {
                        if (!rd.isPending) {
                            if (!tL) {
                                A.Am.error("No conversation to create skill from", {
                                    description: "Start a conversation first before creating a skill"
                                });
                                return
                            }
                            try {
                                var e;
                                A.Am.info("Creating skill from conversation...", {
                                    duration: 5e3
                                });
                                let t = [...l3.current].reverse().find(e => "assistant" === e.role);
                                l5({
                                    id: null,
                                    title: "Creating skill...",
                                    prompt: "",
                                    fullPrompt: "",
                                    isStreaming: !0,
                                    anchorKey: null !== (e = null == t ? void 0 : t.key) && void 0 !== e ? e : null,
                                    messageIndex: l3.current.length
                                });
                                let n = await nc(() => rd.mutateAsync({
                                    name: "skill-".concat(tL.slice(0, 8)),
                                    description: "Skill created from chat session",
                                    session_id: tL,
                                    is_public: !1
                                }));
                                l5(e => e ? {
                                    ...e,
                                    id: n.id,
                                    title: n.name,
                                    isStreaming: !1
                                } : e), A.Am.success("Skill created successfully!", {
                                    duration: 3e3
                                }), lC([n])
                            } catch (e) {
                                console.error("Failed to create skill:", e), A.Am.error(no(e, "Failed to create skill")), l5(null)
                            }
                        }
                    }, oF = () => {
                        null !== l4.current && (window.clearInterval(l4.current), l4.current = null)
                    };
                (0, r.useEffect)(() => () => {
                    oF()
                }, []);
                let oM = () => {
                        (null == l2 ? void 0 : l2.id) && lY(l2.id)
                    },
                    oT = async () => {
                        var e;
                        if (ro || rd.isPending) return;
                        let t = lm.trim();
                        if (!t) return;
                        if (!/^[a-zA-Z0-9\/-]+$/.test(t)) {
                            A.Am.error("Invalid name", {
                                description: "Name must contain only alphanumeric characters, '/', or '-'"
                            });
                            return
                        }
                        ld(!1);
                        let n = a$(aS),
                            l = ((rW && rW.length > 0 ? rW : n).length, [...l3.current].reverse().find(e => "assistant" === e.role));
                        l5({
                            id: null,
                            title: t,
                            prompt: "",
                            fullPrompt: "",
                            isStreaming: !0,
                            anchorKey: null !== (e = null == l ? void 0 : l.key) && void 0 !== e ? e : null,
                            messageIndex: l3.current.length
                        });
                        try {
                            A.Am.info("Creating skill from conversation...", {
                                duration: 3e3
                            });
                            let e = await rd.mutateAsync({
                                name: t,
                                description: "Skill created from chat session",
                                session_id: null != tL ? tL : void 0,
                                is_public: !1
                            });
                            ld(!1), lf(""), l5(t => t ? {
                                ...t,
                                id: e.id,
                                isStreaming: !1
                            } : t), A.Am.success("Skill created successfully!", {
                                duration: 3e3
                            }), lC([e])
                        } catch (e) {
                            console.error("Failed to create skill:", e), A.Am.error(no(e, "Failed to create skill")), l5(null)
                        }
                    }, oD = async e => {
                        let t = tX.some(e => "uploading" === e.status || "pending" === e.status),
                            n = tX.some(e => "error" === e.status),
                            l = null != e ? e : tP,
                            r = tX.some(e => "ready" === e.status),
                            i = lk.length > 0;
                        i && !l.trim() && (l = "Use selected skill");
                        let {
                            segments: a,
                            resolvedMentionItems: s
                        } = aH(ny(l));
                        an(null);
                        let o = a.some(e => {
                                var t;
                                return "text" === e.type && (null !== (t = e.text) && void 0 !== t ? t : "").trim().length > 0
                            }),
                            d = a.some(e => "text" !== e.type);
                        if (!(o || d || r || i) || t4 || t || np) return !1;
                        let c = tL;
                        if (!c) {
                            c = (0, U.Z)(), rE.current.add(c), r_.current.add(c), tO(c);
                            let e = (0, O.LC)();
                            (0, O.IA)(c, e)
                        }
                        nR(null);
                        let u = tX.filter(e => "ready" === e.status);
                        n && t$(e => e.filter(e => e.id === tY || "ready" === e.status));
                        let m = l,
                            f = [...aS],
                            p = u.map(e => {
                                var t, n;
                                return {
                                    id: e.id,
                                    name: (null === (t = e.file) || void 0 === t ? void 0 : t.name) || sk(e.url || "", "File"),
                                    type: e.type,
                                    size: (null === (n = e.file) || void 0 === n ? void 0 : n.size) || 0,
                                    base64: e.base64,
                                    preview: e.uploadedUrl || e.previewUrl,
                                    fileId: e.fileId
                                }
                            }),
                            h = a3([...a, ...aN(p)]),
                            g = new Date;
                        nq({
                            sentAt: g
                        });
                        let x = f.length > 0 ? f[f.length - 1] : null,
                            v = (0, U.Z)(),
                            b = {
                                id: (0, U.Z)(),
                                role: "user",
                                content: m,
                                timestamp: g,
                                attachments: p.length > 0 ? p : void 0,
                                skills: lk.length > 0 ? lk : void 0
                            },
                            y = e1(u);
                        y.size > 0 && aP(e => {
                            let t = new Map(e);
                            return y.forEach((e, n) => t.set(n, e)), t
                        }), tZ(""), sW(), t$([]), t0([]), n2(null), nX(null), (null == iS ? void 0 : iS.gallery.artifactId) === eY && ot(), n0(null), ow(), nv(!0), r4.current = !0, r6.current = !1, r8.current = !1, nd(!1), aj({
                            id: v,
                            parentId: x,
                            userMessage: b,
                            assistantMessages: [],
                            children: []
                        }), tU || setTimeout(() => {
                            var e;
                            null === (e = r7.current) || void 0 === e || e.focus()
                        }, 0);
                        let w = lk.length > 0 ? (0, eB.N2)(lk) + " " : "",
                            j = "" === w ? h : "string" == typeof h ? w + h : (() => {
                                let e = h.findIndex(e => "text" === e.type);
                                return e >= 0 ? h.map((t, n) => {
                                    var l;
                                    return n === e ? {
                                        ...t,
                                        text: w + (null !== (l = t.text) && void 0 !== l ? l : "")
                                    } : t
                                }) : [{
                                    type: "text",
                                    text: w.trim()
                                }, ...h]
                            })(),
                            N = [...a$(f).map(e => ({
                                role: e.role,
                                content: e.content
                            })), {
                                role: "user",
                                content: j
                            }];
                        try {
                            await a_(v, N, g, c)
                        } catch (t) {
                            nv(!1), nq({});
                            let e = new Date;
                            aw(v, {
                                id: (0, U.Z)(),
                                role: "assistant",
                                content: nn,
                                timestamp: e
                            })
                        }
                        return !0
                    };
                it.current = oD;
                let oA = e => {
                        let t = e.trim();
                        t && (t4 || np || (tZ(t), requestAnimationFrame(() => {
                            sR(), sq(), oD(t)
                        })))
                    },
                    oU = e => {
                        lh(e)
                    };
                (0, r.useEffect)(() => {
                    lp && (lp.sharedUrl, lp.sharedUrl)
                }, [lp]);
                let oR = e => {
                        let t = e.trim();
                        t && (t4 || np || (n1 && n2(null), tZ(t), requestAnimationFrame(() => {
                            var e;
                            sR(), sq(), null === (e = r7.current) || void 0 === e || e.focus()
                        })))
                    },
                    oL = e => {
                        let t = e.trim();
                        t && (t4 || np || (tZ(t), requestAnimationFrame(() => {
                            var e;
                            sR(), sq(), null === (e = r7.current) || void 0 === e || e.focus()
                        })))
                    },
                    oO = async (e, t) => {
                        let n = "pdf" === t ? "pdf" : "video" === t ? "mp4" : "jpg";
                        return Promise.all(e.map(async (e, l) => {
                            let r = "sample_".concat(l + 1, ".").concat(n);
                            return await sC(e, r, t)
                        }))
                    }, oP = async (e, t) => {
                        t$([]), n0(null), t0([]);
                        let n = [];
                        if ("pdf" === e ? n = [...t.documentUrl || [], ...t.inputUrl || [], ...t.imageUrl || []] : t.inputUrl && t.inputUrl.length > 0 ? n = t.inputUrl : t.imageUrl && t.imageUrl.length > 0 ? n = t.imageUrl : t.videoUrl && t.videoUrl.length > 0 && (n = t.videoUrl), 0 === (n = Array.from(new Set(n))).length) {
                            console.error("No file URLs found for template:", t);
                            return
                        }
                        t.prompt && t.prompt.trim() && (tZ(t.prompt), requestAnimationFrame(sR), requestAnimationFrame(sq));
                        try {
                            let t = await oO(n, e);
                            t$(t), t.length > 0 && (n0(t[0].id), nX(e)), requestAnimationFrame(() => {
                                var e;
                                sR(), null === (e = r7.current) || void 0 === e || e.focus()
                            })
                        } catch (t) {
                            console.error("Failed to process predefined ".concat(e, " files:"), t)
                        }
                    }, oZ = async e => {
                        if (e && !t4 && !np) {
                            if (n1 && n2(null), e.inputUrl && e.inputUrl.length > 0 || e.documentUrl && e.documentUrl.length > 0 || e.imageUrl && e.imageUrl.length > 0 || e.videoUrl && e.videoUrl.length > 0) {
                                await oP(e.type, e), n0(null), nX(null);
                                return
                            }
                            oR(e.prompt)
                        }
                    }, oJ = e => {
                        var t;
                        return (0, l.jsx)(ts.T, {
                            fileName: (null === (t = e.file) || void 0 === t ? void 0 : t.name) || sk(e.url || "", "File"),
                            fileType: e.type,
                            status: e.status,
                            errorMessage: e.errorMessage,
                            onClick: () => oI(e),
                            onRemove: () => t$(t => t.filter(t => t.id !== e.id))
                        }, e.id)
                    }, oq = e => {
                        let t = "uploading" === e.status || "pending" === e.status,
                            n = "error" === e.status,
                            r = "ready" === e.status;
                        return (0, l.jsx)(nN, {
                            file: e,
                            isProcessing: t,
                            isError: n,
                            isReady: r,
                            onPreviewClick: () => oI(e),
                            onRemove: () => t$(t => t.filter(t => t.id !== e.id))
                        }, e.id)
                    }, oW = () => {
                        if (!rZ) return null;
                        let e = tX.filter(e => "image" === e.type || "video" === e.type),
                            t = tX.filter(e => "image" !== e.type && "video" !== e.type),
                            n = tX.length > 0,
                            r = tQ.length > 0;
                        if (nG && nj[nG], null == sb || sb.status, rP) return eb ? null : (0, l.jsxs)("div", {
                            className: "flex flex-col items-center gap-3 pb-4",
                            children: [(0, l.jsx)("p", {
                                className: "text-center text-[13px] text-muted-foreground/70",
                                children: "This is a shared chat — you can view but not reply."
                            }), ev && (0, l.jsxs)("a", {
                                href: "".concat("https://chat.vlm.run") || 0,
                                className: "group inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary/15",
                                children: [(0, l.jsx)("span", {
                                    children: "Try it free"
                                }), (0, l.jsx)(_.Z, {
                                    className: "size-3.5 opacity-70 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                                })]
                            })]
                        });
                        let i = tX.some(e => "uploading" === e.status || "pending" === e.status),
                            a = tX.some(e => "ready" === e.status),
                            s = lk.length > 0,
                            o = (sx || sv || a || s) && !t4 && !i && !np,
                            d = rr ? "bg-foreground text-background hover:bg-foreground/90" : o ? "bg-foreground text-background hover:bg-foreground/90" : "bg-muted/50 text-muted-foreground/50 hover:bg-muted/50 cursor-not-allowed",
                            c = az.length > 0 && sh.length > 0,
                            u = lX && ek ? (0, l.jsx)("div", {
                                className: (0, J.cn)(e6, "border-[#D2E9FF] bg-[#F5FAFF] text-foreground", c && "relative z-10", rr ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:opacity-90"),
                                style: {
                                    borderRadius: "20px 20px 0 0"
                                },
                                onClick: rr ? void 0 : o_,
                                children: ek
                            }) : null,
                            m = (0, l.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, l.jsxs)("div", {
                                    ref: ie,
                                    className: "relative px-3 pb-2 pt-3",
                                    children: [(0, l.jsx)("div", {
                                        className: "absolute right-4 top-4 z-20",
                                        children: (0, l.jsx)(ee.pn, {
                                            children: (0, l.jsxs)(ee.u, {
                                                children: [(0, l.jsx)(ee.aJ, {
                                                    asChild: !0,
                                                    children: (0, l.jsx)("div", {
                                                        className: (0, J.cn)("size-1.5 rounded-full transition-colors", "green" === rt && "bg-green-500", "yellow" === rt && "bg-yellow-500", "connecting" === rt && "animate-pulse bg-gray-400")
                                                    })
                                                }), (0, l.jsx)(ee._v, {
                                                    children: (0, l.jsxs)("div", {
                                                        className: "text-xs",
                                                        children: ["Backend:", " ", "green" === rt ? "Online" : "yellow" === rt ? "Offline" : "Connecting..."]
                                                    })
                                                })]
                                            })
                                        })
                                    }), r && (0, l.jsx)("div", {
                                        className: "mb-3 flex flex-col gap-2",
                                        children: tQ.map(e => (0, l.jsxs)("div", {
                                            className: "flex items-start gap-2 rounded-xl border border-red-200 bg-red-50/80 px-3 py-2 text-xs text-red-600",
                                            children: [(0, l.jsx)(z.Z, {
                                                className: "mt-0.5 size-3.5 shrink-0"
                                            }), (0, l.jsx)("span", {
                                                className: "flex-1 leading-snug",
                                                children: e.message
                                            }), (0, l.jsx)("button", {
                                                type: "button",
                                                onClick: () => sz(e.id),
                                                className: "-mr-1 rounded-full p-1 text-red-500 transition hover:bg-red-100/80",
                                                "aria-label": "Dismiss upload error",
                                                children: (0, l.jsx)(N.Z, {
                                                    className: "size-3"
                                                })
                                            })]
                                        }, e.id))
                                    }), n && (0, l.jsxs)("div", {
                                        className: "mb-3 flex flex-col gap-3",
                                        children: [e.length > 0 && (0, l.jsx)("div", {
                                            className: "flex flex-wrap gap-3",
                                            children: e.map(oq)
                                        }), t.length > 0 && (0, l.jsx)("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: t.map(oJ)
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        ref: r9,
                                        className: "relative",
                                        children: [ob(), (0, l.jsx)(Q.g, {
                                            ref: r7,
                                            value: tP,
                                            onChange: sL,
                                            onKeyDown: ok,
                                            onKeyUp: sq,
                                            onClick: sq,
                                            onFocus: sO,
                                            onSelect: sq,
                                            onBlur: sP,
                                            onPaste: sJ,
                                            onScroll: sZ,
                                            placeholder: "Give Manus a task to work on...",
                                            spellCheck: !1,
                                            autoCorrect: tU ? "on" : "off",
                                            autoCapitalize: tU ? "sentences" : "none",
                                            enterKeyHint: "send",
                                            className: (0, J.cn)("relative z-10 max-h-96 min-h-6 w-full resize-none border-0 bg-transparent p-0 font-composer text-base leading-5 text-transparent shadow-none outline-none placeholder:text-transparent focus:border-0 focus:shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-sm"),
                                            rows: 2,
                                            autoFocus: az.length > 0 && !tU,
                                            style: tU ? {
                                                caretColor: "transparent",
                                                userSelect: "text"
                                            } : {
                                                caretColor: "transparent",
                                                userSelect: "none"
                                            }
                                        }), oy(), sM.renderMenu()]
                                    }), at && (0, l.jsx)("div", {
                                        className: "mt-2 text-xs font-medium text-red-500",
                                        children: at
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "flex flex-wrap items-center justify-between gap-y-2 px-3 pb-2",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex min-w-0 flex-wrap items-center gap-1.5",
                                        children: [(0, l.jsx)(e4, {
                                            onFilesSelected: sN,
                                            isUploading: t2,
                                            disabled: t4 || np
                                        }), (0, l.jsx)(tK.ho, {
                                            selectedModel: lI,
                                            onModelChange: a1,
                                            includeGateway: lT && !ey,
                                            menuSide: "top",
                                            avoidCollisions: !1,
                                            clearanceRef: ie,
                                            disabled: t4 || np
                                        }), oV()]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex items-center gap-2.5",
                                        children: [!e7 && sA(), (0, l.jsx)(V.z, {
                                            onClick: rr ? aE : () => oD(),
                                            disabled: !rr && !o,
                                            size: "sm",
                                            "aria-label": rr ? "Stop response" : "Send message",
                                            className: "size-8 rounded-full p-0 transition-all duration-200 ".concat(d),
                                            children: rr ? (0, l.jsx)(F.Z, {
                                                className: "size-3",
                                                fill: "currentColor"
                                            }) : (0, l.jsx)(M.Z, {
                                                className: "size-5"
                                            })
                                        })]
                                    })]
                                })]
                            });
                        return t4 || np ? (0, l.jsxs)("div", {
                            className: "flex flex-col gap-0",
                            children: [(0, l.jsx)("div", {
                                className: "flex items-end",
                                children: u
                            }), (0, l.jsx)(e8, {
                                children: m
                            })]
                        }) : (0, l.jsx)(ti, {
                            suggestions: sh,
                            isCompactView: as,
                            disabled: t4 || np,
                            showSuggestionsTab: c,
                            createSkillTab: u,
                            renderSuggestionContent: ov,
                            onSuggestionClick: oA,
                            children: m
                        })
                    }, oV = () => {
                        let e = nG ? nj[nG] : null,
                            t = null == sb ? void 0 : sb.status;
                        if (!e) return null;
                        let {
                            icon: n,
                            color: r,
                            accent: i
                        } = (() => {
                            switch (nG) {
                                case "image":
                                    return {
                                        icon: E.Z, color: "text-emerald-600", accent: "from-emerald-500/15 to-emerald-600/10"
                                    };
                                case "video":
                                    return {
                                        icon: T.Z, color: "text-violet-600", accent: "from-violet-500/15 to-violet-600/10"
                                    };
                                default:
                                    return {
                                        icon: S.Z, color: "text-blue-600", accent: "from-blue-500/15 to-blue-600/10"
                                    }
                            }
                        })();
                        return (0, l.jsxs)("button", {
                            type: "button",
                            onClick: s_,
                            className: (0, J.cn)("inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40", "error" === t ? "border-red-200 bg-red-50 text-red-700 hover:border-red-300 hover:bg-red-100" : "border-gray-200 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-100"),
                            "aria-label": "Remove ".concat(e),
                            children: [(0, l.jsx)("span", {
                                className: (0, J.cn)("flex size-5 items-center justify-center rounded-md border border-transparent bg-gradient-to-br transition-colors", i),
                                children: (0, l.jsx)(n, {
                                    className: (0, J.cn)("size-3", r)
                                })
                            }), (0, l.jsx)("span", {
                                className: "leading-none",
                                children: e
                            }), (0, l.jsx)(N.Z, {
                                className: "size-3.5 opacity-60 transition-opacity hover:opacity-100"
                            })]
                        })
                    }, oB = Math.max(au + 16, 140), oK = tF || tM ? oB : Math.max(oB / 2, 70), oH = (tF || tM) && !tR && !eC;
                return tA && rm ? lv ? (0, l.jsx)(et.J, {
                    title: "Chat Unavailable",
                    description: "This chat could not be found or is no longer available."
                }) : l_ && tN ? (0, l.jsx)("div", {
                    className: "h-full min-h-0 bg-background",
                    children: (0, l.jsx)(tu.h, {
                        models: null != lA ? lA : [],
                        attachedFiles: tH,
                        documentId: tY,
                        onDocumentIdChange: tG,
                        isUploading: t2,
                        onFilesSelected: e => sN(e, {
                            surface: "ocr"
                        }),
                        onReadyFile: e => t$(t => [...t, e]),
                        onRemoveFile: e => t$(t => t.filter(t => t.id !== e)),
                        onShowChat: () => lF(!1),
                        disabled: t4 || np
                    })
                }) : (0, l.jsxs)("div", {
                    ref: af,
                    [t7.Jn]: "",
                    className: (0, J.cn)("relative flex h-full min-h-0 flex-col overflow-hidden transition-[padding] duration-200 ease-out", nH ? "bg-transparent [&>*]:pointer-events-none [&>*]:invisible" : "bg-background", lM && ll && "sm:pr-[36rem]"),
                    onDrop: e => {
                        if (e.preventDefault(), e.stopPropagation(), nT.current = 0, nM(!1), t2 || np) return;
                        t0([]);
                        let t = Array.from(e.dataTransfer.files);
                        0 !== t.length && sN(t)
                    },
                    onDragEnter: e => {
                        sU(e) && (e.preventDefault(), e.stopPropagation(), nT.current += 1, 1 === nT.current && nM(!0))
                    },
                    onDragOver: e => {
                        sU(e) && (e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "copy")
                    },
                    onDragLeave: e => {
                        sU(e) && (e.preventDefault(), e.stopPropagation(), nT.current = Math.max(0, nT.current - 1), 0 === nT.current && nM(!1))
                    },
                    style: {
                        overscrollBehaviorY: "contain",
                        WebkitOverflowScrolling: "auto"
                    },
                    ...tE,
                    children: [ef && !iW && (0, l.jsx)(tt, {
                        isSignedIn: null != rc && rc,
                        isSidebarOpen: eg,
                        isNarrow: tM,
                        lockdownView: eb,
                        showPublicNewChatLink: ev,
                        hideAuthButtons: ey,
                        isArtifactPanelOpen: ep,
                        canOpenArtifactPanel: aW,
                        onToggleArtifactPanel: aV,
                        onSignIn: () => {
                            oE(), ri.push("/sign-in?redirect_url=".concat(encodeURIComponent("/")))
                        },
                        onSignUp: () => {
                            oE(), ri.push("/sign-up?redirect_url=".concat(encodeURIComponent("/")))
                        },
                        modeSwitch: !tN || rc || ev ? void 0 : (0, l.jsx)(tu.d, {
                            mode: "chat",
                            onChange: e => "ocr" === e && lF(!0)
                        }),
                        apiConfigSlot: void 0,
                        showDebugDrawerButton: lM,
                        isDebugDrawerOpen: ll,
                        onToggleDebugDrawer: () => lr(e => !e)
                    }), lM && ll && (0, l.jsx)(tB, {
                        isOpen: ll,
                        onClose: () => lr(!1),
                        sessionId: tL,
                        cachedMessages: rW,
                        turns: ry,
                        renderedMessages: az,
                        debugLogs: li,
                        onClearDebugLogs: ls
                    }), 0 !== az.length || iS ? (0, l.jsxs)(l.Fragment, {
                        children: [iS ? (() => {
                            var e;
                            if (!iS) return null;
                            let {
                                gallery: t,
                                imageId: n
                            } = iS, r = t.images;
                            if (0 === r.length) return null;
                            let a = r.find(e => e.objectId === n) || r[0];
                            if (!a) return null;
                            let s = r.filter(e => "image" === e.kind && e.url).map(e => (0, l.jsx)("img", {
                                    src: e.url,
                                    alt: "",
                                    "aria-hidden": !0,
                                    className: "sr-only pointer-events-none absolute",
                                    fetchpriority: "low"
                                }, e.objectId)),
                                o = "image" === a.kind,
                                d = "video" === a.kind,
                                c = "model" === a.kind,
                                u = null !== (e = nm.find(e => e.value === iE)) && void 0 !== e ? e : nm[0],
                                m = u.Icon,
                                f = (0, J.cn)("flex-1 overflow-auto px-4 pb-6", iW ? "pt-4" : "pt-20");
                            return (0, l.jsx)("div", {
                                className: f,
                                onPointerDown: e => {
                                    nf(e) && e.target === e.currentTarget && (e.preventDefault(), ot())
                                },
                                children: (0, l.jsxs)("div", {
                                    className: "mx-auto flex size-full max-w-5xl flex-col gap-6",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [(0, l.jsx)("button", {
                                            type: "button",
                                            onClick: ot,
                                            className: (0, J.cn)("inline-flex size-9 items-center justify-center rounded-full border border-border bg-background text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground", tU && "ml-auto"),
                                            children: (0, l.jsx)(N.Z, {
                                                className: "size-4"
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "flex items-center gap-2",
                                            children: o && !tU && (0, l.jsxs)(l.Fragment, {
                                                children: [(0, l.jsx)("button", {
                                                    type: "button",
                                                    onClick: s9,
                                                    disabled: 0 === sX.length && !iz,
                                                    "aria-label": "Reset selections",
                                                    className: "inline-flex items-center justify-center rounded-full bg-background text-xs text-muted-foreground transition-colors duration-150 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",
                                                    children: "Clear"
                                                }), (0, l.jsxs)(H.h_, {
                                                    children: [(0, l.jsx)(H.$F, {
                                                        asChild: !0,
                                                        children: (0, l.jsxs)("button", {
                                                            type: "button",
                                                            className: "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ".concat(iJ ? "border-primary/50 bg-primary/10 text-primary" : "border-border bg-background text-muted-foreground hover:text-foreground"),
                                                            children: [(0, l.jsx)(m, {
                                                                className: "size-4"
                                                            }), (0, l.jsxs)("span", {
                                                                children: ["Selection: ", u.label]
                                                            }), (0, l.jsx)(I.Z, {
                                                                className: "size-4 opacity-70"
                                                            })]
                                                        })
                                                    }), (0, l.jsx)(H.AW, {
                                                        align: "end",
                                                        className: "w-40",
                                                        children: (0, l.jsx)(H._x, {
                                                            value: iE,
                                                            onValueChange: e => oe(e),
                                                            children: nm.map(e => {
                                                                let {
                                                                    value: t,
                                                                    label: n,
                                                                    Icon: r
                                                                } = e;
                                                                return (0, l.jsxs)(H.qB, {
                                                                    value: t,
                                                                    className: "flex items-center gap-2 text-xs",
                                                                    children: [(0, l.jsx)(r, {
                                                                        className: "size-4"
                                                                    }), n]
                                                                }, t)
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex h-full flex-col justify-center gap-6 lg:flex-row",
                                        children: [(() => {
                                            var e, t, n;
                                            if (o) {
                                                let n = "".concat(a.artifactId, ":").concat(a.objectId),
                                                    r = aZ.get(n),
                                                    o = null !== (t = null !== (e = i4[n]) && void 0 !== e ? e : nz(a.dimensions)) && void 0 !== t ? t : nz(null == r ? void 0 : r.dimensions),
                                                    d = {
                                                        maxHeight: "80vh"
                                                    };
                                                o && (d.aspectRatio = o, d.maxWidth = "min(90vw, 56rem, calc(80vh * ".concat(o, "))")), d.touchAction = iJ ? "none" : "manipulation";
                                                let c = (0, J.cn)("relative mx-auto w-full overflow-hidden rounded-3xl bg-muted/20", o ? "" : "aspect-[4/3] max-w-[90vw] lg:max-w-4xl", iJ ? "cursor-crosshair touch-none" : "cursor-default touch-pan-y");
                                                return (0, l.jsxs)("div", {
                                                    className: "flex w-full flex-1 justify-center",
                                                    children: [s, (0, l.jsxs)("div", {
                                                        ref: iH,
                                                        className: c,
                                                        style: d,
                                                        tabIndex: -1,
                                                        onPointerDown: os,
                                                        onPointerMove: oc,
                                                        onPointerUp: of,
                                                        onPointerLeave: op,
                                                        onPointerCancel: of,
                                                        onKeyDown: oh,
                                                        onWheel: ou,
                                                        children: [(0, l.jsx)(i.default, {
                                                            src: a.url,
                                                            alt: a.label,
                                                            fill: !0,
                                                            className: "pointer-events-none object-contain",
                                                            unoptimized: !0,
                                                            onLoad: e => av(n, e.currentTarget.naturalWidth, e.currentTarget.naturalHeight)
                                                        }, a.objectId), og(), (0, l.jsx)("div", {
                                                            className: "pointer-events-none absolute bottom-5 left-5 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur",
                                                            children: a.label
                                                        })]
                                                    })]
                                                })
                                            }
                                            if (c) {
                                                let e = (0, eK.F8)(a.objectId, a.url);
                                                return (0, l.jsx)("div", {
                                                    className: "flex w-full flex-1 justify-center",
                                                    children: (0, l.jsxs)("div", {
                                                        className: "relative mx-auto w-full max-w-[90vw] overflow-hidden rounded-3xl border border-border lg:max-w-4xl",
                                                        style: {
                                                            maxHeight: "80vh"
                                                        },
                                                        children: [(0, l.jsx)("div", {
                                                            className: "h-[50vh] w-full",
                                                            children: (0, l.jsx)(tz.SparkModelViewer, {
                                                                url: a.url,
                                                                fileType: e,
                                                                className: "size-full rounded-none",
                                                                hideBuiltInControls: !0
                                                            })
                                                        }), (0, l.jsx)("div", {
                                                            className: "absolute bottom-5 left-5 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur",
                                                            children: a.label
                                                        })]
                                                    })
                                                })
                                            }
                                            if (d) {
                                                let e = "".concat(a.artifactId, ":").concat(a.objectId),
                                                    t = null !== (n = i4[e]) && void 0 !== n ? n : nz(a.dimensions),
                                                    r = {
                                                        maxHeight: "80vh"
                                                    };
                                                return t && (r.aspectRatio = t, r.maxWidth = "min(90vw, 56rem, calc(80vh * ".concat(t, "))")), (0, l.jsx)("div", {
                                                    className: "flex w-full flex-1 justify-center",
                                                    children: (0, l.jsxs)("div", {
                                                        className: (0, J.cn)("relative mx-auto w-full overflow-hidden rounded-3xl bg-black", t ? "" : "aspect-video max-w-[90vw] lg:max-w-4xl"),
                                                        style: r,
                                                        children: [(0, l.jsx)("video", {
                                                            ref: ih,
                                                            src: a.url,
                                                            controls: !0,
                                                            autoPlay: !0,
                                                            muted: !0,
                                                            loop: !0,
                                                            playsInline: !0,
                                                            preload: "metadata",
                                                            className: "absolute inset-0 size-full object-contain",
                                                            onLoadedMetadata: t => av(e, t.currentTarget.videoWidth, t.currentTarget.videoHeight)
                                                        }, a.objectId), (0, l.jsx)("div", {
                                                            className: "absolute bottom-5 left-5 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur",
                                                            children: a.label
                                                        })]
                                                    })
                                                })
                                            }
                                            return (0, l.jsx)("div", {
                                                className: "flex w-full flex-1 justify-center",
                                                children: (0, l.jsxs)("div", {
                                                    className: "relative mx-auto w-full max-w-[90vw] overflow-hidden rounded-3xl bg-background lg:max-w-4xl",
                                                    style: {
                                                        maxHeight: "80vh"
                                                    },
                                                    children: [(0, l.jsx)("div", {
                                                        className: "h-[75vh] w-full",
                                                        children: (0, l.jsx)(er.H, {
                                                            pdfUrl: a.url,
                                                            responseUrl: "",
                                                            showBoundingBoxes: !1
                                                        }, a.objectId)
                                                    }), (0, l.jsx)("div", {
                                                        className: "absolute bottom-5 left-5 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur",
                                                        children: a.label
                                                    })]
                                                })
                                            })
                                        })(), r.length > 1 && (0, l.jsx)("div", {
                                            className: "flex max-h-[520px] shrink-0 gap-2 overflow-y-auto pr-1 lg:flex-col",
                                            children: r.map(e => {
                                                let t = e.objectId === a.objectId;
                                                return (0, l.jsx)("button", {
                                                    type: "button",
                                                    "data-preview-thumb": "".concat(e.artifactId, ":").concat(e.objectId),
                                                    onClick: () => {
                                                        iS.onSelectImage(e.objectId), iI(t => t ? {
                                                            ...t,
                                                            imageId: e.objectId
                                                        } : t), s8(), iO(0)
                                                    },
                                                    className: "relative size-[80px] overflow-hidden rounded-2xl border transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ".concat(t ? "border-primary/60" : "border-border/60 hover:border-border"),
                                                    title: e.label,
                                                    children: (0, l.jsx)(nF, {
                                                        image: e
                                                    })
                                                }, e.objectId)
                                            })
                                        })]
                                    })]
                                })
                            })
                        })() : (0, l.jsxs)("div", {
                            className: (0, J.cn)("relative min-h-0 min-w-0 flex-1 overflow-hidden", ef && !ey && "mt-12"),
                            children: [aT && !ey && (0, l.jsx)(tn, {
                                sections: aF,
                                activeSectionId: aM,
                                onSectionClick: aD
                            }), (0, l.jsx)(X.x, {
                                className: "relative h-full pt-0 [&>[data-radix-scroll-area-viewport]>div]:!block [&>[data-radix-scroll-area-viewport]>div]:min-h-full",
                                ref: r5,
                                style: {
                                    overscrollBehavior: "contain"
                                },
                                children: (0, l.jsx)("div", {
                                    className: "flex min-h-full flex-col justify-end",
                                    children: (0, l.jsxs)("div", {
                                        className: (0, J.cn)("mx-auto w-full max-w-4xl space-y-6 px-4", ef && !ey ? "pt-14" : "pt-3"),
                                        style: {
                                            paddingBottom: "calc(".concat(oK, "px + env(safe-area-inset-bottom, 0px))")
                                        },
                                        children: [az.map((e, t) => (0, l.jsxs)(r.Fragment, {
                                            children: [(0, l.jsx)(n_, {
                                                item: e,
                                                editingState: nU,
                                                isStreaming: t4,
                                                isThinking: np,
                                                isAutoScrollLocked: t6,
                                                streamingTurnId: nD,
                                                handleArtifactClick: oC,
                                                contextPreviewMap: aZ,
                                                mentionObjectMap: aU,
                                                handlePreviewOpen: on,
                                                handleStartEdit: aY,
                                                handleEditDraftChange: aG,
                                                handleCancelEdit: aX,
                                                handleSubmitEdit: aQ,
                                                handleNavigateBranch: a4,
                                                handleRegenerate: a0,
                                                onShare: oS,
                                                isViewOnly: rP,
                                                sessionCredits: rR,
                                                sessionMetadata: rA,
                                                sessionId: tL,
                                                onSkillClick: sD,
                                                mediaCardsLayoutEnabled: "active" === lq,
                                                embedChrome: ey,
                                                onEmbedPreviewOpenChange: ey ? nK : void 0
                                            }, e.key), l2 && e.key === l2.anchorKey && !rg && (0, l.jsxs)("div", {
                                                className: "rounded-2xl border border-border/60 bg-background",
                                                children: [(0, l.jsxs)("div", {
                                                    className: "flex items-center justify-between border-b border-border/60 py-0.5 pl-4 pr-2",
                                                    children: [(0, l.jsx)("div", {
                                                        className: "text-sm font-medium leading-none text-foreground",
                                                        children: l2.title
                                                    }), (0, l.jsx)(V.z, {
                                                        variant: "ghost",
                                                        size: "sm",
                                                        onClick: oM,
                                                        className: "h-auto cursor-pointer py-1 text-xs text-muted-foreground hover:bg-transparent hover:text-black",
                                                        "aria-label": "Edit",
                                                        children: "Edit"
                                                    })]
                                                }), (0, l.jsx)("div", {
                                                    className: "px-4 py-3",
                                                    children: (0, l.jsx)("div", {
                                                        className: "h-[280px]",
                                                        children: l2.prompt ? (0, l.jsx)(X.x, {
                                                            className: "h-full",
                                                            children: (0, l.jsx)(el.Z, {
                                                                markdownContent: l2.prompt
                                                            })
                                                        }) : (0, l.jsx)("div", {
                                                            className: "flex h-full items-center justify-center",
                                                            children: l2.isStreaming ? (0, l.jsxs)("div", {
                                                                className: "inline-flex items-center gap-1.5 rounded-full border border-[#D2E9FF] bg-[#F5FAFF] px-3 py-1 text-sm font-normal text-foreground",
                                                                children: [(0, l.jsx)(j.Z, {
                                                                    className: "size-3 animate-spin"
                                                                }), (0, l.jsx)("span", {
                                                                    children: "Loading skill..."
                                                                })]
                                                            }) : (0, l.jsx)("div", {
                                                                className: "text-[15px] text-muted-foreground",
                                                                children: "No content available."
                                                            })
                                                        })
                                                    })
                                                })]
                                            }), l2 && !l2.anchorKey && t === l2.messageIndex - 1 && !rg && (0, l.jsxs)("div", {
                                                className: "rounded-2xl border border-border/60 bg-background",
                                                children: [(0, l.jsxs)("div", {
                                                    className: "flex items-center justify-between border-b border-border/60 py-0.5 pl-4 pr-2",
                                                    children: [(0, l.jsx)("div", {
                                                        className: "text-sm font-semibold leading-none text-foreground",
                                                        children: l2.title
                                                    }), (0, l.jsx)(V.z, {
                                                        variant: "ghost",
                                                        size: "sm",
                                                        onClick: oM,
                                                        className: "h-auto cursor-pointer py-1 text-xs text-muted-foreground hover:bg-transparent hover:text-black",
                                                        "aria-label": "Edit",
                                                        children: "Edit"
                                                    })]
                                                }), (0, l.jsx)("div", {
                                                    className: "px-4 py-3",
                                                    children: (0, l.jsx)("div", {
                                                        className: "h-[280px]",
                                                        children: l2.prompt ? (0, l.jsx)(X.x, {
                                                            className: "h-full",
                                                            children: (0, l.jsx)(el.Z, {
                                                                markdownContent: l2.prompt
                                                            })
                                                        }) : (0, l.jsx)("div", {
                                                            className: "flex h-full items-center justify-center",
                                                            children: l2.isStreaming ? (0, l.jsxs)("div", {
                                                                className: "inline-flex items-center gap-1.5 rounded-full border border-[#D2E9FF] bg-[#F5FAFF] px-3 py-1 text-sm font-normal text-foreground",
                                                                children: [(0, l.jsx)(j.Z, {
                                                                    className: "size-3 animate-spin"
                                                                }), (0, l.jsx)("span", {
                                                                    children: "Loading skill..."
                                                                })]
                                                            }) : (0, l.jsx)("div", {
                                                                className: "text-[15px] text-muted-foreground",
                                                                children: "No content available."
                                                            })
                                                        })
                                                    })
                                                })]
                                            })]
                                        }, "".concat(e.key, "-group"))), tI ? (0, l.jsx)("div", {
                                            className: "group flex w-full flex-col items-start",
                                            children: (0, l.jsx)("div", {
                                                className: "w-full max-w-4xl space-y-6 pb-4 pt-2",
                                                children: tI
                                            })
                                        }) : null, np && !tJ && nJ.sentAt && (0, l.jsx)(tc.K, {
                                            message: {
                                                role: "assistant",
                                                content: "",
                                                timestamp: new Date,
                                                isThinking: !0,
                                                isUploadingFiles: t2
                                            },
                                            sessionCredits: rR,
                                            sessionMetadata: rA,
                                            onArtifactClick: oC,
                                            mentionObjectMap: aU,
                                            resolveMentionImage: aK,
                                            onPreviewOpen: on,
                                            autoScrollLocked: t6,
                                            mediaCardsLayoutEnabled: "active" === lq,
                                            embedChrome: ey,
                                            onEmbedPreviewOpenChange: ey ? nK : void 0
                                        }), tJ && (0, l.jsx)(tc.K, {
                                            message: {
                                                role: "assistant",
                                                content: tJ,
                                                timestamp: new Date,
                                                isStreaming: !0
                                            },
                                            sessionCredits: rR,
                                            sessionMetadata: rA,
                                            onArtifactClick: oC,
                                            mentionObjectMap: aU,
                                            resolveMentionImage: aK,
                                            onPreviewOpen: on,
                                            autoScrollLocked: t6,
                                            mediaCardsLayoutEnabled: "active" === lq,
                                            embedChrome: ey,
                                            onEmbedPreviewOpenChange: ey ? nK : void 0
                                        })]
                                    })
                                })
                            })]
                        }), !iW && (0, l.jsx)("div", {
                            ref: ah,
                            className: "shrink-0 bg-background px-4 pt-3",
                            style: {
                                paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.25rem)"
                            },
                            children: (0, l.jsxs)("div", {
                                className: "relative",
                                children: [l7 && !e5 && (0, l.jsx)("div", {
                                    className: "pointer-events-auto absolute -top-14 left-1/2 z-10 -translate-x-1/2",
                                    children: (0, l.jsx)(tg, {
                                        show: l7,
                                        onClick: re
                                    })
                                }), function() {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    return (0, l.jsx)("div", {
                                        className: e ? "mx-auto max-w-2xl" : "mx-auto max-w-4xl",
                                        children: oW()
                                    })
                                }()]
                            })
                        })]
                    }) : (0, l.jsx)("div", {
                        ref: is,
                        className: (0, J.cn)("flex flex-1 select-none flex-col px-4", ef && !ey && "mt-12", rG ? "pt-6" : tF || tM ? "pt-0" : n1 ? "pt-10" : n8 ? "pt-0" : "pb-20", oH ? "chat-scrollbar overflow-y-auto" : tF || tM ? "overflow-hidden" : "chat-scrollbar overflow-y-auto"),
                        children: rG ? (0, l.jsx)(tr, {}) : tF || tM ? (0, l.jsxs)("div", {
                            className: (0, J.cn)("relative flex flex-1 flex-col px-4", oH ? "justify-start pt-4" : "justify-center"),
                            style: {
                                paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.5rem)"
                            },
                            children: [(0, l.jsx)("div", {
                                className: (0, J.cn)("flex flex-col items-center", oH && "min-h-[40vh] justify-end"),
                                children: (0, l.jsxs)("div", {
                                    className: (0, J.cn)("flex w-full select-none flex-col items-center gap-3 text-center", tR ? "mx-auto max-w-2xl" : oH ? "mx-auto max-w-4xl" : "mx-auto max-w-3xl"),
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex flex-col items-center gap-2",
                                        children: [ej && (0, l.jsx)(a.default, {
                                            href: "".concat(nt, "/dashboard"),
                                            children: (0, l.jsx)(i.default, {
                                                src: "/vlm-blue.svg",
                                                alt: "VLM Run Logo",
                                                width: 48,
                                                height: 48,
                                                className: "select-none opacity-90 transition-opacity hover:opacity-100",
                                                draggable: !1
                                            })
                                        }), (0, l.jsx)("h1", {
                                            className: "select-none text-2xl text-foreground",
                                            children: nL
                                        })]
                                    }), (0, l.jsx)("div", {
                                        className: "mt-1 w-full text-left",
                                        children: (0, l.jsx)("div", {
                                            className: (0, J.cn)("mx-auto w-full", oH ? "max-w-4xl sm:px-6" : "max-w-3xl"),
                                            children: oW()
                                        })
                                    })]
                                })
                            }), oH && (0, l.jsx)("div", {
                                className: "mt-6 w-full",
                                children: (0, l.jsx)(t8, {
                                    onTemplateClick: n1 ? oL : oR,
                                    onTemplatePreview: oU,
                                    onMediaClick: sI,
                                    onMediaFileClick: oP,
                                    isStreaming: t4,
                                    isThinking: np,
                                    showMediaShowcase: n1,
                                    onCloseShowcase: sE,
                                    onTemplatesVisibilityChange: n7,
                                    areTemplatesVisible: n8,
                                    floatingButtonOffsetPx: ex
                                })
                            }), !oH && !lc && tD >= 680 && tT >= 400 && (0, l.jsx)("div", {
                                className: "pointer-events-none absolute inset-x-0 bottom-0 z-20 px-4",
                                style: {
                                    paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)"
                                },
                                children: (0, l.jsx)("div", {
                                    className: "pointer-events-auto mx-auto w-full max-w-md",
                                    children: (0, l.jsx)(ta, {
                                        items: ns,
                                        onClose: () => lu(!0)
                                    })
                                })
                            })]
                        }) : (0, l.jsxs)("div", {
                            className: "min-h-full shrink-0",
                            children: [(0, l.jsx)("div", {
                                className: "flex min-h-[40vh] shrink-0 flex-col justify-end pb-6",
                                children: (0, l.jsxs)("div", {
                                    className: "select-none space-y-4 text-center",
                                    children: [ej && (0, l.jsx)("div", {
                                        className: "mb-4 flex justify-center",
                                        children: (0, l.jsx)(a.default, {
                                            href: "".concat(nt, "/dashboard"),
                                            children: (0, l.jsx)(i.default, {
                                                src: "/vlm-blue.svg",
                                                alt: "VLM Run Logo",
                                                width: 64,
                                                height: 64,
                                                className: "select-none opacity-90 transition-opacity hover:opacity-100",
                                                draggable: !1
                                            })
                                        })
                                    }), (0, l.jsx)("h1", {
                                        className: "select-none text-3xl text-foreground",
                                        children: nL
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "sticky top-0 z-20 bg-background pb-4 pt-3",
                                children: (0, l.jsx)("div", {
                                    className: "mx-auto w-full max-w-4xl sm:px-6",
                                    children: oW()
                                })
                            }), !(tF || tM) && !eC && (0, l.jsx)(t8, {
                                onTemplateClick: n1 ? oL : oR,
                                onTemplatePreview: oU,
                                onMediaClick: sI,
                                onMediaFileClick: oP,
                                isStreaming: t4,
                                isThinking: np,
                                showMediaShowcase: n1,
                                onCloseShowcase: sE,
                                onTemplatesVisibilityChange: n7,
                                areTemplatesVisible: n8,
                                floatingButtonOffsetPx: ex
                            })]
                        })
                    }), nb && "undefined" != typeof document && (0, D.createPortal)((0, l.jsx)("div", {
                        className: "pointer-events-none fixed inset-0 z-[200] flex items-center justify-center bg-background/80 backdrop-blur-sm",
                        children: (0, l.jsxs)("div", {
                            className: "flex flex-col items-center gap-2",
                            children: [(0, l.jsx)("p", {
                                className: "text-xl font-semibold",
                                children: "Add anything"
                            }), (0, l.jsx)("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Drop any file here to attach"
                            })]
                        })
                    }), document.body), (0, l.jsx)("video", {
                        ref: iu,
                        src: na,
                        preload: "metadata",
                        playsInline: !0,
                        controls: !0,
                        tabIndex: -1,
                        className: "pointer-events-none fixed inset-0 size-px opacity-0"
                    }), (0, l.jsx)(ei, {
                        open: !!lp,
                        onOpenChange: e => {
                            e || lh(null)
                        },
                        title: (null == lp ? void 0 : lp.title) || "Use case preview",
                        sharedChatUrl: null !== (G = null == lp ? void 0 : lp.sharedUrl) && void 0 !== G ? G : "https://dev-chat.vlm.run/c/62102841-6670-4f45-8c03-c14d923bb125?lockdown=1",
                        tryButtonLabel: "Try use case",
                        tryButtonDisabled: t4 || np,
                        onTryClick: async () => {
                            await oZ(lp), lh(null), requestAnimationFrame(() => {
                                requestAnimationFrame(() => ab())
                            })
                        }
                    }), (0, l.jsx)(K.Vq, {
                        open: n$,
                        onOpenChange: nY,
                        children: (0, l.jsx)(K.cZ, {
                            className: "w-[min(95vw,960px)] max-w-5xl border-none bg-transparent p-0 shadow-2xl",
                            hideCloseButton: !0,
                            children: (0, l.jsxs)("div", {
                                className: "relative overflow-hidden rounded-3xl bg-black",
                                children: [(0, l.jsx)(W, {
                                    ratio: 16 / 9,
                                    children: (0, l.jsx)("video", {
                                        ref: ic,
                                        src: na,
                                        controls: !0,
                                        autoPlay: !0,
                                        playsInline: !0,
                                        className: "h-auto w-full"
                                    })
                                }), (0, l.jsx)("button", {
                                    type: "button",
                                    onClick: () => nY(!1),
                                    className: "absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                                    "aria-label": "Close video",
                                    children: (0, l.jsx)(N.Z, {
                                        className: "size-4"
                                    })
                                })]
                            })
                        })
                    }), (0, l.jsx)(e2.v, {
                        isOpen: nW.isOpen,
                        file: nW.file,
                        onOpenChange: e => {
                            if (!ey) {
                                nV(t => ({
                                    isOpen: e,
                                    file: e ? t.file : null
                                }));
                                return
                            }
                            if (e) {
                                var t;
                                (0, t9.b)({
                                    item: null !== (t = nW.file) && void 0 !== t ? t : {
                                        type: "pdf"
                                    },
                                    setDialog: nV,
                                    expandHost: !0
                                });
                                return
                            }(0, t9.w)({
                                setDialog: nV,
                                expandHost: !0
                            })
                        },
                        onBackgroundClick: e => {
                            if (e.target === e.currentTarget) {
                                if (ey) {
                                    (0, t9.w)({
                                        setDialog: nV,
                                        expandHost: !0
                                    });
                                    return
                                }
                                nV({
                                    isOpen: !1,
                                    file: null
                                })
                            }
                        },
                        embedChrome: ey
                    }), (0, l.jsx)(tp, {
                        open: n5,
                        onOpenChange: n4
                    }), (0, l.jsx)(tf, {
                        open: n3,
                        onOpenChange: n6
                    }), (0, l.jsx)(en.Re, {
                        open: lV,
                        onOpenChange: lB,
                        title: "Chat layout",
                        instanceKey: "chat-layout",
                        initialSchema: lO,
                        onSave: e => {
                            lP(e), lJ(null), lW("active"), lB(!1), A.Am.success("Layout saved for chat")
                        }
                    }), (0, l.jsx)(K.Vq, {
                        open: lo,
                        onOpenChange: ld,
                        children: (0, l.jsxs)(K.cZ, {
                            className: "sm:max-w-[425px]",
                            children: [(0, l.jsx)(K.fK, {
                                children: (0, l.jsx)(K.$N, {
                                    children: l0
                                })
                            }), (0, l.jsx)("div", {
                                className: "grid gap-4 py-4",
                                children: (0, l.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [(0, l.jsxs)(Y._, {
                                        htmlFor: "agent-name",
                                        children: ["Name ", (0, l.jsx)("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        })]
                                    }), (0, l.jsx)($.I, {
                                        id: "agent-name",
                                        value: lm,
                                        onChange: e => lf(e.target.value),
                                        onKeyDown: e => {
                                            "Enter" === e.key && !ro && lm.trim() && oT()
                                        },
                                        placeholder: "My ".concat(l1),
                                        autoFocus: !0,
                                        required: !0
                                    })]
                                })
                            }), (0, l.jsxs)(K.cN, {
                                children: [(0, l.jsx)(V.z, {
                                    variant: "outline",
                                    onClick: () => {
                                        ld(!1), lf("")
                                    },
                                    disabled: ro,
                                    children: "Cancel"
                                }), (0, l.jsx)(V.z, {
                                    onClick: oT,
                                    disabled: ro || !lm.trim(),
                                    children: ro ? "Creating..." : l0
                                })]
                            })]
                        })
                    }), tL && (0, l.jsx)(tx.g, {
                        isOpen: n9,
                        onOpenChange: le,
                        sessionId: tL,
                        chatTitle: (null == rD ? void 0 : rD.title) || null,
                        isShared: null == rD ? void 0 : rD.is_public,
                        isLoading: lt,
                        canToggleLockdown: lM,
                        defaultLockdown: lj,
                        onShare: async e => {
                            try {
                                ln(!0), lN(e), await rp.shareChat(tL, !0)
                            } finally {
                                ln(!1)
                            }
                        },
                        onStopSharing: async () => {
                            try {
                                ln(!0), lN(!1), await rp.shareChat(tL, !1)
                            } finally {
                                ln(!1)
                            }
                        }
                    }), lK && (0, l.jsx)(tS, {
                        skillId: lK,
                        open: !!lK,
                        onClose: () => lH(null),
                        onEdit: e => {
                            lH(null), lY(e)
                        },
                        maxWidth: "max-w-4xl",
                        sessionId: null != tL ? tL : void 0
                    }), l$ && (0, l.jsx)(ty, {
                        skillId: l$,
                        onClose: () => lY(null),
                        onSkillUpdated: (e, t) => {
                            lC(n => n.map(n => n.id === e ? t : n)), l5(n => n && n.id === e ? {
                                ...n,
                                id: t.id,
                                title: t.name
                            } : n), lY(null)
                        }
                    })]
                }) : (0, l.jsx)("div", {
                    className: "flex h-svh items-center justify-center bg-background",
                    children: (0, l.jsx)(j.Z, {
                        className: "size-5 animate-spin text-muted-foreground"
                    })
                })
            }
        },
        84234: function(e, t, n) {
            n.d(t, {
                g: function() {
                    return m
                }
            });
            var l = n(57437),
                r = n(2265),
                i = n(66337),
                a = n(30401),
                s = n(78867),
                o = n(14438),
                d = n(62869),
                c = n(26110),
                u = n(1828);

            function m(e) {
                let {
                    isOpen: t,
                    onOpenChange: n,
                    sessionId: m,
                    chatTitle: f,
                    isShared: p = !1,
                    onShare: h,
                    onStopSharing: g,
                    isLoading: x = !1,
                    canToggleLockdown: v = !1,
                    defaultLockdown: b = !1
                } = e, [y, w] = (0, r.useState)(!1), [j, N] = (0, r.useState)(b), k = (0, r.useRef)(null);
                (0, r.useEffect)(() => {
                    t && (N(b), w(!1))
                }, [t, b]);
                let C = window.location.origin,
                    S = "".concat(C, "/c/").concat(m).concat(j ? "?lockdown=1" : ""),
                    I = S.length > 50 ? S.substring(0, 50) + "..." : S,
                    E = async () => {
                        try {
                            return await navigator.clipboard.writeText(S), w(!0), setTimeout(() => w(!1), 2e3), !0
                        } catch (e) {
                            return console.error("Failed to copy link:", e), !1
                        }
                    }, _ = async () => {
                        try {
                            let e = await E();
                            await h(j), o.Am.success("Chat shared", {
                                description: e ? "Link copied to clipboard." : "Sharing enabled. Copy the link above if needed."
                            }), n(!1)
                        } catch (e) {
                            console.error("Failed to share chat:", e), o.Am.error("Unable to share chat", {
                                description: "Please try again."
                            })
                        }
                    }, z = async () => {
                        await (null == g ? void 0 : g()), n(!1)
                    };
                return (0, l.jsx)(c.Vq, {
                    open: t,
                    onOpenChange: n,
                    children: (0, l.jsxs)(c.cZ, {
                        children: [(0, l.jsxs)(c.fK, {
                            children: [(0, l.jsx)(c.$N, {
                                className: "text-lg",
                                children: f || "Untitled Chat"
                            }), (0, l.jsx)(c.Be, {
                                children: "Create a shareable link for this chat. Anyone with the link can view it."
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "space-y-4",
                            children: [v && (0, l.jsxs)("div", {
                                className: "flex items-start gap-3 rounded-lg border border-border/50 bg-muted/30 px-3 py-2.5",
                                children: [(0, l.jsx)("div", {
                                    className: "mt-0.5",
                                    children: (0, l.jsx)(u.r, {
                                        checked: j,
                                        onCheckedChange: N,
                                        className: "data-[state=checked]:bg-primary"
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "space-y-1",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex items-center gap-2 text-sm font-medium",
                                        children: [(0, l.jsx)(i.Z, {
                                            className: "size-4 text-muted-foreground"
                                        }), (0, l.jsx)("span", {
                                            children: "Lockdown shared view"
                                        })]
                                    }), (0, l.jsx)("p", {
                                        className: "text-xs text-muted-foreground/80",
                                        children: "Hide sidebar, logo, and CTAs for viewers. Best for tight embeds or focused demos."
                                    })]
                                })]
                            }), (0, l.jsx)("div", {
                                className: "space-y-2",
                                children: (0, l.jsxs)("div", {
                                    className: "relative flex items-center gap-2",
                                    children: [(0, l.jsx)("button", {
                                        type: "button",
                                        onClick: E,
                                        className: "flex-1 cursor-pointer rounded-md  border bg-muted/20 px-3 py-2 text-left transition-colors hover:bg-muted/50",
                                        children: (0, l.jsx)("p", {
                                            className: "truncate text-sm text-muted-foreground",
                                            children: I
                                        })
                                    }), (0, l.jsxs)("div", {
                                        className: "relative",
                                        children: [(0, l.jsx)(d.z, {
                                            ref: k,
                                            type: "button",
                                            size: "sm",
                                            variant: "outline",
                                            onClick: E,
                                            className: "size-9 shrink-0 border-none p-0",
                                            title: y ? "Copied!" : "Copy link",
                                            children: y ? (0, l.jsx)(a.Z, {
                                                className: "size-4 text-green-600"
                                            }) : (0, l.jsx)(s.Z, {
                                                className: "size-4"
                                            })
                                        }), y && (0, l.jsx)("div", {
                                            className: "pointer-events-none absolute bottom-full right-0 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-xs text-white animate-in fade-in-0 zoom-in-95",
                                            children: "Copied!"
                                        })]
                                    })]
                                })
                            }), !p && (0, l.jsx)("p", {
                                className: "text-sm text-blue-600",
                                children: "Note: Shared chats are read-only and cannot be edited."
                            }), p && (0, l.jsx)("p", {
                                className: "text-sm text-green-600",
                                children: "This chat is currently shared and in read-only mode."
                            }), p && j && (0, l.jsx)("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Lockdown enabled for the copied link — viewers will see a minimal, no-sidebar experience."
                            }), (0, l.jsxs)("div", {
                                className: "flex justify-end gap-3 pt-2",
                                children: [(0, l.jsx)(d.z, {
                                    type: "button",
                                    variant: "outline",
                                    onClick: () => n(!1),
                                    children: "Close"
                                }), p ? (0, l.jsx)(d.z, {
                                    type: "button",
                                    onClick: z,
                                    disabled: x,
                                    variant: "destructive",
                                    children: x ? "Stopping..." : "Stop Sharing"
                                }) : (0, l.jsx)(d.z, {
                                    type: "button",
                                    onClick: _,
                                    disabled: x,
                                    className: "bg-blue-600 hover:bg-blue-700",
                                    children: x ? "Sharing..." : "Share Chat"
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        24466: function(e, t, n) {
            n.r(t), n.d(t, {
                ChatHistoryProvider: function() {
                    return m
                },
                useChatHistory: function() {
                    return f
                }
            });
            var l = n(57437),
                r = n(2265),
                i = n(49842),
                a = n(5531),
                s = n(47156);
            let o = (e, t) => {
                    let n = (0, r.useCallback)(async () => {
                            if (!e.isLoadingMore && e.hasMore) {
                                t(e => ({
                                    ...e,
                                    isLoadingMore: !0,
                                    error: null
                                }));
                                try {
                                    let n = await (0, s.Hi)({
                                        skip: e.chats.length,
                                        limit: 20
                                    });
                                    t(e => ({
                                        ...e,
                                        chats: [...e.chats, ...n.chats],
                                        hasMore: n.hasMore || !1,
                                        isLoadingMore: !1,
                                        error: null
                                    }))
                                } catch (e) {
                                    t(t => ({
                                        ...t,
                                        isLoadingMore: !1,
                                        error: e instanceof Error ? e.message : "Failed to load more chats"
                                    }))
                                }
                            }
                        }, [e.chats.length, e.isLoadingMore, e.hasMore, t]),
                        l = (0, r.useCallback)(async () => {
                            try {
                                let e = await (0, s.Hi)({
                                    skip: 0,
                                    limit: 20
                                });
                                t(t => ({
                                    ...t,
                                    chats: e.chats,
                                    hasMore: e.hasMore || !1,
                                    error: null
                                }))
                            } catch (e) {
                                t(t => ({
                                    ...t,
                                    error: e instanceof Error ? e.message : "Failed to refresh chat history"
                                }))
                            }
                        }, [t]),
                        i = (0, r.useCallback)(t => e.chats.find(e => e.id === t || e.session_id === t), [e.chats]),
                        a = (0, r.useCallback)(async (e, n) => {
                            let l = i(e);
                            if (l) try {
                                let r = await (0, s.KV)(l.session_id, n);
                                t(t => {
                                    var n, l;
                                    return {
                                        ...t,
                                        chats: t.chats.map(t => t.id === e || t.session_id === e ? r : t),
                                        selectedChat: (null === (n = t.selectedChat) || void 0 === n ? void 0 : n.id) === e || (null === (l = t.selectedChat) || void 0 === l ? void 0 : l.session_id) === e ? r : t.selectedChat
                                    }
                                })
                            } catch (e) {
                                console.error("Failed to pin chat:", e)
                            }
                        }, [i, t]),
                        o = (0, r.useCallback)(async (e, n) => {
                            let l = i(e);
                            if (l) try {
                                let r = await (0, s.lp)(l.session_id, n);
                                t(t => {
                                    var n, l;
                                    return {
                                        ...t,
                                        chats: t.chats.map(t => t.id === e || t.session_id === e ? r : t),
                                        selectedChat: (null === (n = t.selectedChat) || void 0 === n ? void 0 : n.id) === e || (null === (l = t.selectedChat) || void 0 === l ? void 0 : l.session_id) === e ? r : t.selectedChat
                                    }
                                })
                            } catch (e) {
                                console.error("Failed to rename chat:", e)
                            }
                        }, [i, t]),
                        d = (0, r.useCallback)(async e => {
                            let n = i(e);
                            if (n) try {
                                await (0, s.q5)(n.session_id), t(t => {
                                    var l, r;
                                    return {
                                        ...t,
                                        chats: t.chats.filter(t => t.id !== e && t.session_id !== e),
                                        selectedChat: (null === (l = t.selectedChat) || void 0 === l ? void 0 : l.id) === e || (null === (r = t.selectedChat) || void 0 === r ? void 0 : r.session_id) === e ? null : t.selectedChat,
                                        currentChatId: t.currentChatId === n.session_id ? null : t.currentChatId
                                    }
                                })
                            } catch (e) {
                                console.error("Failed to delete chat:", e)
                            }
                        }, [i, t]),
                        c = (0, r.useCallback)(() => {
                            t(e => {
                                let t = !e.sidebarOpen;
                                return localStorage.setItem("chatSidebarOpen", JSON.stringify(t)), {
                                    ...e,
                                    sidebarOpen: t
                                }
                            })
                        }, [t]),
                        u = (0, r.useCallback)(e => {
                            t(t => ({
                                ...t,
                                selectedChat: e,
                                currentChatId: e.session_id
                            }))
                        }, [t]),
                        m = (0, r.useCallback)(e => {
                            t(t => ({
                                ...t,
                                searchQuery: e
                            }))
                        }, [t]),
                        f = (0, r.useCallback)(() => {
                            t(e => ({
                                ...e,
                                selectedChat: null,
                                currentChatId: null
                            }))
                        }, [t]),
                        p = (0, r.useCallback)((e, n) => {
                            t(t => {
                                var l;
                                return {
                                    ...t,
                                    chats: t.chats.map(t => t.session_id === e ? {
                                        ...t,
                                        title: n
                                    } : t),
                                    selectedChat: (null === (l = t.selectedChat) || void 0 === l ? void 0 : l.session_id) === e ? {
                                        ...t.selectedChat,
                                        title: n
                                    } : t.selectedChat
                                }
                            })
                        }, [t]),
                        h = (0, r.useCallback)((e, n) => {
                            t(t => {
                                let l = t.chats.find(t => t.session_id === e || t.id === e);
                                if (l) {
                                    let r = {
                                        ...l,
                                        title: n
                                    };
                                    return {
                                        ...t,
                                        chats: t.chats.map(t => t.session_id === e || t.id === e ? r : t),
                                        selectedChat: t.selectedChat && (t.selectedChat.session_id === e || t.selectedChat.id === e) ? r : t.selectedChat
                                    }
                                }
                                let r = new Date().toISOString(),
                                    i = {
                                        session_id: e,
                                        id: e,
                                        title: n,
                                        summary: null,
                                        messages_count: 0,
                                        created_at: r,
                                        updated_at: r,
                                        status: "active",
                                        is_pinned: !1,
                                        tags: null,
                                        user_id: null,
                                        org_id: null,
                                        model_id: null,
                                        model_version: null,
                                        source: "chat",
                                        messages_uri: null,
                                        last_accessed_at: null,
                                        expired_at: null
                                    },
                                    a = window.location.pathname,
                                    s = a === "/chat/".concat(e) || a === "/c/".concat(e) || ("/chat" === a || "/c" === a) && null === t.currentChatId;
                                return {
                                    ...t,
                                    chats: [i, ...t.chats],
                                    ...s ? {
                                        selectedChat: i,
                                        currentChatId: e
                                    } : {}
                                }
                            })
                        }, [t]),
                        g = (0, r.useCallback)(e => {
                            let n = 0,
                                l = async () => {
                                    try {
                                        let r = (await (0, s.Hi)({
                                            skip: 0,
                                            limit: 20
                                        })).chats.find(t => t.session_id === e);
                                        if ((null == r ? void 0 : r.title) && "Untitled Chat" !== r.title) {
                                            t(t => {
                                                var n;
                                                return {
                                                    ...t,
                                                    chats: t.chats.map(t => t.session_id === e ? {
                                                        ...t,
                                                        title: r.title
                                                    } : t),
                                                    selectedChat: (null === (n = t.selectedChat) || void 0 === n ? void 0 : n.session_id) === e ? {
                                                        ...t.selectedChat,
                                                        title: r.title
                                                    } : t.selectedChat
                                                }
                                            });
                                            return
                                        }++n < 6 && setTimeout(l, 2e4)
                                    } catch (e) {
                                        console.error("Failed to fetch updated title:", e), ++n < 6 && setTimeout(l, 2e4)
                                    }
                                };
                            setTimeout(l, 2e4)
                        }, [t]),
                        x = (0, r.useCallback)(function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Untitled Chat";
                            h(e, t), g(e)
                        }, [h, g]);
                    return {
                        loadMoreChats: n,
                        refreshChats: l,
                        pinChat: a,
                        renameChat: o,
                        deleteChat: d,
                        toggleSidebar: c,
                        selectChat: u,
                        setSearchQuery: m,
                        clearSelection: f,
                        updateChatTitleLocally: p,
                        addNewChatWithTitle: h,
                        addNewChatWithTitleAndPolling: x,
                        shareChat: (0, r.useCallback)(async (e, n) => {
                            let l = i(e);
                            if (l) try {
                                let r = await (0, s.k6)(l.session_id, n);
                                t(t => {
                                    var n, l;
                                    return {
                                        ...t,
                                        chats: t.chats.map(t => t.id === e || t.session_id === e ? r : t),
                                        selectedChat: (null === (n = t.selectedChat) || void 0 === n ? void 0 : n.id) === e || (null === (l = t.selectedChat) || void 0 === l ? void 0 : l.session_id) === e ? r : t.selectedChat
                                    }
                                })
                            } catch (e) {
                                console.error("Failed to share chat:", e)
                            }
                        }, [i, t]),
                        setSidebarOpen: (0, r.useCallback)((e, n) => {
                            var l;
                            let r = null === (l = null == n ? void 0 : n.persist) || void 0 === l || l;
                            t(t => t.sidebarOpen === e ? t : (r && localStorage.setItem("chatSidebarOpen", JSON.stringify(e)), {
                                ...t,
                                sidebarOpen: e
                            }))
                        }, [t])
                    }
                },
                d = {
                    chats: [],
                    currentChatId: null,
                    isLoading: !0,
                    isLoadingMore: !1,
                    hasMore: !0,
                    error: null,
                    searchQuery: "",
                    selectedChat: null,
                    sidebarOpen: !0
                },
                c = (0, r.createContext)(null),
                u = () => {
                    let [e, t] = (0, r.useState)(d), [n, l] = (0, r.useState)(!1), [o, c] = (0, r.useState)(!1), {
                        isBackendAuthenticated: u,
                        isAuthenticating: m
                    } = (0, i.a)(), f = (0, r.useCallback)(async () => {
                        if (!u) {
                            t(e => ({
                                ...e,
                                chats: [],
                                hasMore: !1,
                                isLoading: m,
                                error: null
                            })), c(!1);
                            return
                        }
                        t(e => ({
                            ...e,
                            isLoading: !0
                        }));
                        try {
                            let e = await (0, s.Hi)({
                                skip: 0,
                                limit: 20
                            });
                            t(t => ({
                                ...t,
                                chats: e.chats,
                                hasMore: e.hasMore || !1,
                                isLoading: !1,
                                error: null
                            })), c(!0)
                        } catch (e) {
                            t(t => ({
                                ...t,
                                chats: [],
                                hasMore: !1,
                                isLoading: !1,
                                error: e instanceof Error ? e.message : "Failed to load chat history"
                            })), c(!1)
                        }
                    }, [u, m]);
                    return (0, r.useEffect)(() => {
                        let e = !(window.innerWidth < a.LQ.isNarrow);
                        try {
                            let t = localStorage.getItem("chatSidebarOpen");
                            null !== t && (e = JSON.parse(t))
                        } catch (e) {
                            console.error("Failed to parse chat sidebar state:", e)
                        }
                        t(t => ({
                            ...t,
                            sidebarOpen: e
                        }))
                    }, []), (0, r.useEffect)(() => {
                        n || (l(!0), f())
                    }, [n, f]), (0, r.useEffect)(() => {
                        n && u && !o && f()
                    }, [u, n, o, f]), {
                        state: e,
                        setState: t,
                        loadInitialChats: f
                    }
                };

            function m(e) {
                let {
                    children: t
                } = e, {
                    state: n,
                    setState: r
                } = u(), i = o(n, r), a = {
                    ...n,
                    ...i
                };
                return (0, l.jsx)(c.Provider, {
                    value: a,
                    children: t
                })
            }

            function f() {
                let e = (0, r.useContext)(c);
                if (!e) throw Error("useChatHistory must be used within a ChatHistoryProvider");
                return e
            }
        },
        13762: function(e, t, n) {
            n.d(t, {
                HD: function() {
                    return u
                },
                rv: function() {
                    return c
                },
                rx: function() {
                    return m
                },
                $9: function() {
                    return f
                }
            });
            var l = n(47071),
                r = n(92850),
                i = n(31125);

            function a(e) {
                var t, n, l, r, i, a, s, o, d, c;
                let u = function(e) {
                    if (e) try {
                        let t = new URL(e);
                        return t.searchParams.has("lockdown") || t.searchParams.set("lockdown", "1"), t.toString()
                    } catch (t) {
                        return e.includes("?") ? "".concat(e, "&lockdown=1") : "".concat(e, "?lockdown=1")
                    }
                }(null !== (r = null !== (l = null !== (n = null !== (t = e.sharedUrl) && void 0 !== t ? t : e.sharedURL) && void 0 !== n ? n : e.shared_url) && void 0 !== l ? l : e.sharedurl) && void 0 !== r ? r : void 0);
                return {
                    id: e.id,
                    category: e.category,
                    type: e.type,
                    title: e.title,
                    description: e.description,
                    sharedUrl: u,
                    prompt: e.prompt,
                    previewUrl: null !== (i = e.previewUrl) && void 0 !== i ? i : void 0,
                    inputUrl: e.inputUrl,
                    documentUrl: e.documentUrl,
                    imageUrl: e.imageUrl,
                    videoUrl: e.videoUrl,
                    previewTime: null !== (a = e.previewTime) && void 0 !== a ? a : void 0,
                    duration: null !== (s = e.duration) && void 0 !== s ? s : void 0,
                    isFeatured: null !== (o = e.isFeatured) && void 0 !== o ? o : void 0,
                    displayOrder: null !== (d = e.displayOrder) && void 0 !== d ? d : void 0,
                    isActive: null === (c = e.isActive) || void 0 === c || c
                }
            }
            async function s() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (await i.Z.get("/api/v1/use-case-templates", {
                    params: e
                })).data.data.map(a)
            }
            let o = ["pdf", "image", "video"];
            async function d() {
                var e;
                let t = await i.Z.get("/api/v1/use-case-templates/metadata"),
                    n = {
                        pdf: [],
                        image: [],
                        video: []
                    },
                    l = {
                        pdf: [],
                        image: [],
                        video: []
                    };
                return o.forEach(e => {
                    var r, i;
                    let a = null === (r = t.data.samplePromptOptions) || void 0 === r ? void 0 : r[e];
                    a && (n[e] = a);
                    let s = null === (i = t.data.mediaFileOptions) || void 0 === i ? void 0 : i[e];
                    s && (l[e] = s)
                }), {
                    samplePromptOptions: n,
                    mediaFileOptions: l,
                    tabConfig: null !== (e = t.data.tabConfig) && void 0 !== e ? e : []
                }
            }
            let c = {
                    queryKey: l.U7.PUBLIC.USE_CASE_TEMPLATES.ALL,
                    queryFn: () => s(),
                    staleTime: 3e5,
                    refetchOnWindowFocus: !1,
                    retry: 2
                },
                u = {
                    queryKey: l.U7.PUBLIC.USE_CASE_TEMPLATES.METADATA,
                    queryFn: () => d(),
                    staleTime: 3e5,
                    refetchOnWindowFocus: !1,
                    retry: 2
                },
                m = () => (0, r.a)(c),
                f = () => (0, r.a)(u)
        },
        5531: function(e, t, n) {
            n.d(t, {
                LQ: function() {
                    return l.LQ
                },
                sT: function() {
                    return l.sT
                },
                ul: function() {
                    return l.ul
                }
            });
            var l = n(32342)
        },
        48931: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return l
                },
                d: function() {
                    return r
                }
            });
            let l = "chat-preview-lightbox-open",
                r = e => {
                    window.dispatchEvent(new CustomEvent(l, {
                        detail: e
                    }))
                }
        },
        79047: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return a
                },
                i: function() {
                    return o
                }
            });
            var l = n(2293),
                r = n(31604);
            let i = {
                image: "image/*",
                video: "video/*",
                document: "application/pdf",
                audio: "audio/*",
                model: "application/octet-stream"
            };

            function a(e) {
                if ("string" != typeof e) return null;
                let t = e.trim();
                return t && l.kW.test(t) ? (0, r.Tf)(t) : null
            }

            function s(e, t) {
                return "".concat(null != e ? e : "", ":").concat(t)
            }

            function o(e) {
                let t = new Map;
                for (let f of e) {
                    var n, l, r, o, d, c, u, m;
                    if ("preview" === f.type) {
                        for (let e of null !== (r = null === (n = f.previewObjects) || void 0 === n ? void 0 : n.data) && void 0 !== r ? r : [])
                            for (let n of Array.isArray(e.objects) ? e.objects : []) {
                                let l = null !== (o = a(n.id)) && void 0 !== o ? o : n.id,
                                    r = s(f.sessionId, l);
                                if (!l || t.has(r)) continue;
                                let i = function(e) {
                                    if (!e) return null;
                                    let t = e.toLowerCase();
                                    return t.startsWith("image/") ? "image" : t.startsWith("video/") ? "video" : t.startsWith("audio/") ? "audio" : "application/pdf" === t ? "document" : null
                                }(n.mimetype);
                                i && t.set(r, {
                                    refId: l,
                                    artifactId: f.id,
                                    sessionId: f.sessionId,
                                    kind: i,
                                    mimetype: n.mimetype,
                                    groupTitle: e.title,
                                    source: "previewObjects"
                                })
                            }
                        for (let e of Object.values(null !== (d = null === (l = f.previewCard) || void 0 === l ? void 0 : l.records) && void 0 !== d ? d : {})) {
                            if (!("preview.image" === e.object || "preview.video" === e.object || "preview.audio" === e.object || "preview.document" === e.object || "preview.recon" === e.object)) continue;
                            let n = function(e) {
                                switch (e) {
                                    case "preview.image":
                                        return "image";
                                    case "preview.video":
                                        return "video";
                                    case "preview.audio":
                                        return "audio";
                                    case "preview.document":
                                        return "document";
                                    case "preview.recon":
                                        return "model";
                                    default:
                                        return null
                                }
                            }(e.object);
                            if (!n) continue;
                            let l = null !== (u = null !== (c = a(e.src)) && void 0 !== c ? c : a(e.id)) && void 0 !== u ? u : e.id,
                                r = s(f.sessionId, l);
                            !l || t.has(r) || t.set(r, {
                                refId: l,
                                artifactId: f.id,
                                sessionId: f.sessionId,
                                kind: n,
                                mimetype: i[n],
                                title: null !== (m = e.title) && void 0 !== m ? m : void 0,
                                src: e.src,
                                source: "previewCard"
                            })
                        }
                    }
                }
                return Array.from(t.values())
            }
        },
        84696: function(e, t, n) {
            n.d(t, {
                H: function() {
                    return i
                },
                R: function() {
                    return a
                }
            });
            var l = n(57635),
                r = n.n(l);

            function i(e) {
                return e.replace(/\.\.\//g, "").replace(/\.\.\\/g, "").replace(/[\\/]/g, "_").replace(/^\.+/, "")
            }
            async function a(e, t) {
                let n = new(r());
                return e.children && e.children.forEach(e => (function e(l) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    if ("file" === l.type) {
                        var a, s, o;
                        let e = null !== (s = null !== (a = t[l.id]) && void 0 !== a ? a : l.content) && void 0 !== s ? s : "",
                            d = i(l.name),
                            c = r ? "".concat(r, "/").concat(d) : d;
                        if (e.startsWith("data:")) {
                            let t = atob(null !== (o = e.split(",")[1]) && void 0 !== o ? o : ""),
                                l = new Uint8Array(t.length);
                            for (let e = 0; e < t.length; e++) l[e] = t.charCodeAt(e);
                            n.file(c, l)
                        } else n.file(c, e)
                    } else if ("folder" === l.type && l.children) {
                        let t = i(l.name),
                            n = r ? "".concat(r, "/").concat(t) : t;
                        l.children.forEach(t => e(t, n))
                    }
                })(e, "")), new File([await n.generateAsync({
                    type: "blob"
                })], "skill-update.zip", {
                    type: "application/zip"
                })
            }
        },
        90663: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var l = n(57437),
                r = n(2265),
                i = n(26110),
                a = n(56254);

            function s(e) {
                let {
                    executionId: t,
                    open: n,
                    onOpenChange: s
                } = e, [o, d] = (0, r.useState)(!1), c = s || d;
                return t ? (0, l.jsx)(i.Vq, {
                    open: void 0 !== n ? n : o,
                    onOpenChange: c,
                    children: (0, l.jsx)(i.cZ, {
                        className: "flex h-[90vh] max-w-7xl flex-col gap-0 overflow-hidden p-0",
                        hideCloseButton: !0,
                        children: (0, l.jsx)(a.Z, {
                            executionId: t,
                            onBack: () => c(!1)
                        })
                    })
                }) : null
            }
        },
        62303: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return v
                }
            });
            var l = n(57437);
            n(2265);
            var r = n(27648),
                i = n(43476),
                a = n(95658),
                s = n(53491),
                o = n(94508),
                d = n(59421),
                c = n(75952),
                u = n(76443),
                m = n(71225),
                f = n(11293),
                p = n(87731),
                h = n(32661);
            let g = e => {
                    e.stopPropagation()
                },
                x = e => {
                    var t;
                    let {
                        execution: n
                    } = e, i = n.skill_id, a = null === (t = n.skill) || void 0 === t ? void 0 : t.name, s = n.agent;
                    if (i) {
                        let e = null != a ? a : i.slice(0, 8);
                        return (0, l.jsx)("div", {
                            className: "flex items-center space-x-2",
                            children: (0, l.jsx)(r.default, {
                                href: "/dashboard/skills/".concat(i),
                                onClick: g,
                                className: u.NY,
                                children: e
                            })
                        })
                    }
                    return (null == s ? void 0 : s.name) ? (0, l.jsx)("div", {
                        className: "flex items-center space-x-2",
                        children: s.id ? (0, l.jsx)(r.default, {
                            href: "/dashboard/agents/".concat(s.id),
                            onClick: g,
                            className: u.NY,
                            children: s.name
                        }) : (0, l.jsx)("div", {
                            className: (0, o.cn)("truncate", u.O8),
                            children: s.name
                        })
                    }) : null
                },
                v = [{
                    accessorKey: "id",
                    header: e => {
                        let {
                            column: t
                        } = e;
                        return (0, l.jsx)(p.p, {
                            column: t,
                            title: "ID"
                        })
                    },
                    cell: e => {
                        let {
                            row: t
                        } = e;
                        return (0, l.jsx)(f.G, {
                            id: t.getValue("id"),
                            textClassName: (0, o.cn)("truncate", u.O8, "text-muted-foreground")
                        })
                    },
                    filterFn: (e, t, n) => {
                        let l = String(e.getValue(t)).toLowerCase(),
                            r = String(n).toLowerCase();
                        return l.includes(r)
                    },
                    enableSorting: !1,
                    enableHiding: !1,
                    enableResizing: !1,
                    size: 100,
                    minSize: 100,
                    maxSize: 100
                }, {
                    id: "name",
                    header: e => {
                        let {
                            column: t
                        } = e;
                        return (0, l.jsx)(p.p, {
                            column: t,
                            title: "Name"
                        })
                    },
                    cell: e => {
                        let {
                            row: t
                        } = e;
                        return (0, l.jsx)(x, {
                            execution: t.original
                        })
                    },
                    enableSorting: !1,
                    enableHiding: !1,
                    size: 140,
                    enableResizing: !0,
                    minSize: 100,
                    maxSize: 360,
                    meta: {
                        align: "left"
                    }
                }, {
                    id: "version",
                    header: e => {
                        let {
                            column: t
                        } = e;
                        return (0, l.jsx)(p.p, {
                            column: t,
                            title: "Version",
                            className: "text-center"
                        })
                    },
                    cell: e => {
                        var t, n, r;
                        let {
                            row: i
                        } = e, a = null !== (r = null === (t = i.original.skill) || void 0 === t ? void 0 : t.version) && void 0 !== r ? r : null === (n = i.original.agent) || void 0 === n ? void 0 : n.version;
                        return a ? (0, l.jsx)("div", {
                            className: "flex items-center justify-center",
                            children: (0, l.jsx)(c.O, {
                                version: a
                            })
                        }) : null
                    },
                    enableSorting: !1,
                    size: 160
                }, {
                    accessorKey: "status",
                    header: e => {
                        let {
                            column: t
                        } = e;
                        return (0, l.jsx)(p.p, {
                            column: t,
                            title: "Status",
                            className: "text-center"
                        })
                    },
                    cell: e => {
                        let {
                            row: t
                        } = e, n = t.getValue("status");
                        return n ? (0, l.jsx)("div", {
                            className: "flex justify-center",
                            children: (0, l.jsx)(d.O, {
                                status: n,
                                children: n
                            })
                        }) : null
                    },
                    enableSorting: !1,
                    filterFn: (e, t, n) => n.includes(e.getValue(t)),
                    size: 100
                }, {
                    accessorKey: "created_at",
                    header: e => {
                        let {
                            column: t
                        } = e;
                        return (0, l.jsx)(p.p, {
                            column: t,
                            title: "Created At"
                        })
                    },
                    cell: e => {
                        let {
                            row: t
                        } = e, n = t.getValue("created_at");
                        return "string" == typeof n || "number" == typeof n || n instanceof Date ? (0, l.jsx)("div", {
                            className: u.O8,
                            children: (0, s.Z)((0, i.kT)(n), "yyyy-MM-dd HH:mm")
                        }) : (0, l.jsx)("div", {
                            children: "Invalid date"
                        })
                    },
                    enableSorting: !0,
                    filterFn: (e, t, n) => n.includes(e.getValue(t)),
                    size: 126
                }, {
                    id: "duration",
                    header: e => {
                        let {
                            column: t
                        } = e;
                        return (0, l.jsx)(p.p, {
                            column: t,
                            title: "Duration",
                            className: "whitespace-normal text-right"
                        })
                    },
                    cell: e => {
                        var t;
                        let {
                            row: n
                        } = e, r = n.original.created_at, i = n.original.completed_at, s = null === (t = n.original.status) || void 0 === t ? void 0 : t.toLowerCase(), d = new Date(r).getTime(), c = ("running" !== s && "pending" !== s && "enqueued" !== s && "paused" !== s && i ? new Date(i).getTime() : Date.now()) - d;
                        return c < 0 ? (0, l.jsx)("div", {
                            className: (0, o.cn)("text-right", u.O8),
                            children: "--"
                        }) : (0, l.jsxs)("div", {
                            className: (0, o.cn)("text-right", u.O8),
                            children: [(0, a.FX)(c), (0, l.jsx)("span", {
                                className: "text-muted-foreground",
                                children: "s"
                            })]
                        })
                    },
                    enableSorting: !1,
                    enableHiding: !1,
                    size: 50
                }, {
                    accessorKey: "credit_cost",
                    header: e => {
                        let {
                            column: t
                        } = e;
                        return (0, l.jsx)(p.p, {
                            column: t,
                            title: "Cost",
                            className: "whitespace-normal text-center leading-tight"
                        })
                    },
                    cell: e => {
                        let {
                            row: t
                        } = e;
                        return (0, l.jsx)("div", {
                            className: "flex justify-center px-2",
                            children: (0, l.jsx)(m.u, {
                                executionId: t.original.id,
                                creditCost: t.original.credit_cost,
                                costDollars: t.original.cost_dollars
                            })
                        })
                    },
                    enableSorting: !1,
                    enableHiding: !0,
                    size: 90
                }, {
                    accessorKey: "flag",
                    header: e => {
                        let {
                            column: t
                        } = e;
                        return (0, l.jsx)(p.p, {
                            column: t,
                            title: "Flag"
                        })
                    },
                    cell: e => {
                        let {
                            row: t
                        } = e;
                        return (0, l.jsx)("div", {
                            children: (0, l.jsx)(h.Z, {
                                flag: t.getValue("flag"),
                                executionId: t.getValue("id"),
                                ref: e => {
                                    e && t.original && window.flagRefs && window.flagRefs.set(t.id, e)
                                }
                            })
                        })
                    },
                    enableSorting: !1,
                    enableHiding: !1,
                    filterFn: (e, t, n) => !!e.getValue(t) == ("string" == typeof n ? "true" === n : !!n),
                    size: 40
                }]
        },
        87731: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return o
                }
            });
            var l = n(57437),
                r = n(20653),
                i = n(94508),
                a = n(62869),
                s = n(84190);

            function o(e) {
                let {
                    column: t,
                    title: n,
                    className: o,
                    centered: d
                } = e, c = null != d ? d : t.getIndex() > 0;
                return t.getCanSort() ? (0, l.jsx)("div", {
                    className: (0, i.cn)("flex items-center space-x-2", c && "justify-center"),
                    children: (0, l.jsxs)(s.h_, {
                        children: [(0, l.jsx)(s.$F, {
                            asChild: !0,
                            children: (0, l.jsxs)(a.z, {
                                variant: "ghost",
                                size: "sm",
                                className: (0, i.cn)("-ml-3 h-8 data-[state=open]:bg-accent", c && "ml-0"),
                                children: [(0, l.jsx)("span", {
                                    className: (0, i.cn)("text-xs font-medium uppercase text-muted-foreground", o),
                                    children: n
                                }), "desc" === t.getIsSorted() ? (0, l.jsx)(r.veu, {
                                    className: "ml-2 size-4"
                                }) : "asc" === t.getIsSorted() ? (0, l.jsx)(r.Hf3, {
                                    className: "ml-2 size-4"
                                }) : (0, l.jsx)(r.jnn, {
                                    className: "ml-2 size-4"
                                })]
                            })
                        }), (0, l.jsxs)(s.AW, {
                            align: "start",
                            children: [(0, l.jsxs)(s.Xi, {
                                onClick: () => t.toggleSorting(!1),
                                children: [(0, l.jsx)(r.Hf3, {
                                    className: "mr-2 size-3.5 text-muted-foreground/70"
                                }), "Asc"]
                            }), (0, l.jsxs)(s.Xi, {
                                onClick: () => t.toggleSorting(!0),
                                children: [(0, l.jsx)(r.veu, {
                                    className: "mr-2 size-3.5 text-muted-foreground/70"
                                }), "Desc"]
                            }), t.getCanHide() && (0, l.jsxs)(s.Xi, {
                                onClick: () => t.toggleVisibility(!1),
                                children: [(0, l.jsx)(r.L52, {
                                    className: "mr-2 size-3.5 text-muted-foreground/70"
                                }), "Hide"]
                            })]
                        })]
                    })
                }) : (0, l.jsx)("div", {
                    className: (0, i.cn)("text-xs font-medium uppercase text-muted-foreground", c && "text-center", o),
                    children: n
                })
            }
        },
        11293: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return d
                }
            });
            var l = n(57437),
                r = n(2265),
                i = n(30401),
                a = n(78867),
                s = n(14438),
                o = n(94508);

            function d(e) {
                let {
                    id: t,
                    format: n = "hyphenated",
                    containerClassName: d,
                    textClassName: c = "truncate font-mono font-medium text-muted-foreground",
                    buttonClassName: u = "size-4 shrink-0 hover:bg-muted"
                } = e, [m, f] = (0, r.useState)(!1), [p, h] = (0, r.useState)(!1);
                return (0, l.jsxs)("div", {
                    className: (0, o.cn)("relative flex h-5 min-w-0 items-center", d),
                    onMouseEnter: () => h(!0),
                    onMouseLeave: () => h(!1),
                    children: [(0, l.jsx)("div", {
                        className: (0, o.cn)("min-w-0 pr-5", c),
                        children: "hyphenated" === n ? "".concat(t.slice(0, 8), "-").concat(t.slice(9, 13)) : t.slice(0, 8)
                    }), (0, l.jsx)("button", {
                        type: "button",
                        className: (0, o.cn)("absolute right-0 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-[10px]", u, !p && !m && "pointer-events-none invisible"),
                        onClick: e => {
                            e.stopPropagation(), navigator.clipboard.writeText(t), f(!0), s.Am.success("Copied to clipboard"), setTimeout(() => f(!1), 2e3)
                        },
                        title: "Copy",
                        "aria-label": "Copy",
                        tabIndex: p || m ? 0 : -1,
                        children: m ? (0, l.jsx)(i.Z, {
                            className: "size-3 text-green-600"
                        }) : (0, l.jsx)(a.Z, {
                            className: "size-3 text-muted-foreground"
                        })
                    })]
                })
            }
        },
        57024: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var l = n(57437),
                r = n(2265),
                i = n(26110),
                a = n(81103),
                s = n(83964);

            function o(e) {
                let {
                    requestId: t,
                    open: n,
                    onOpenChange: o
                } = e;
                return ((0, r.useEffect)(() => {
                    if (!n) return;
                    let e = setTimeout(() => {
                        window.dispatchEvent(new Event("resize"))
                    }, 250);
                    return () => clearTimeout(e)
                }, [n]), t) ? (0, l.jsx)(i.Vq, {
                    open: n,
                    onOpenChange: o,
                    children: (0, l.jsx)(i.cZ, {
                        className: "flex h-[90vh] max-w-7xl flex-col gap-0 overflow-hidden p-0",
                        hideCloseButton: !0,
                        children: (0, l.jsx)(a.pn, {
                            delayDuration: 150,
                            children: (0, l.jsx)(s.c, {
                                requestId: t,
                                onBack: () => o(!1)
                            })
                        })
                    })
                }) : null
            }
        },
        72015: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return y
                }
            });
            var l = n(57437),
                r = n(43476),
                i = n(95658),
                a = n(53491),
                s = n(94508),
                o = n(35974),
                d = n(59421),
                c = n(75952),
                u = n(76443),
                m = n(11293),
                f = n(87731),
                p = n(5545),
                h = n(13312);
            n(2265);
            var g = n(27648);
            let x = e => {
                    e.stopPropagation()
                },
                v = e => {
                    var t;
                    let {
                        request: n
                    } = e, r = null !== (t = n.skill_id) && void 0 !== t ? t : "", i = n.skill_name;
                    if (r && i) return (0, l.jsx)("div", {
                        className: "flex items-center space-x-2",
                        children: (0, l.jsx)(g.default, {
                            href: "/dashboard/skills/".concat(r),
                            onClick: x,
                            className: u.NY,
                            children: i
                        })
                    });
                    let a = "string" == typeof n.domain ? n.domain : "";
                    return a && "skill" !== a ? (0, l.jsx)("div", {
                        className: "flex items-center space-x-2",
                        children: (0, l.jsx)("div", {
                            className: "truncate rounded-md border bg-background px-2 ".concat(u.O8),
                            children: a
                        })
                    }) : (0, l.jsx)("div", {
                        className: "truncate",
                        children: "-"
                    })
                };
            var b = n(16503);
            let y = [{
                accessorKey: "id",
                header: e => {
                    let {
                        column: t
                    } = e;
                    return (0, l.jsx)(f.p, {
                        column: t,
                        title: "ID"
                    })
                },
                cell: e => {
                    let {
                        row: t
                    } = e;
                    return (0, l.jsx)(m.G, {
                        id: t.getValue("id"),
                        textClassName: (0, s.cn)("truncate", u.O8, "text-muted-foreground")
                    })
                },
                filterFn: (e, t, n) => {
                    let l = String(e.getValue(t)).toLowerCase(),
                        r = String(n).toLowerCase();
                    return l.includes(r)
                },
                enableSorting: !1,
                enableHiding: !1,
                enableResizing: !1,
                size: 100,
                minSize: 100,
                maxSize: 100
            }, {
                id: "name",
                header: e => {
                    let {
                        column: t
                    } = e;
                    return (0, l.jsx)(f.p, {
                        column: t,
                        title: "Name"
                    })
                },
                cell: e => {
                    let {
                        row: t
                    } = e;
                    return (0, l.jsx)(v, {
                        request: t.original
                    })
                },
                enableSorting: !1,
                enableHiding: !1,
                size: 140,
                enableResizing: !0,
                minSize: 100,
                maxSize: 360,
                meta: {
                    align: "left"
                }
            }, {
                accessorKey: "skill_version",
                header: e => {
                    let {
                        column: t
                    } = e;
                    return (0, l.jsx)(f.p, {
                        column: t,
                        title: "Version"
                    })
                },
                cell: e => {
                    let {
                        row: t
                    } = e, n = t.getValue("skill_version");
                    return n ? (0, l.jsx)("div", {
                        className: "flex items-center",
                        children: (0, l.jsx)(c.O, {
                            version: n
                        })
                    }) : (0, l.jsx)("div", {
                        className: "text-muted-foreground",
                        children: "-"
                    })
                },
                enableSorting: !1,
                enableHiding: !0,
                size: 160
            }, {
                accessorKey: "type",
                header: e => {
                    let {
                        column: t
                    } = e;
                    return (0, l.jsx)(f.p, {
                        column: t,
                        title: "Type"
                    })
                },
                cell: e => {
                    let {
                        row: t
                    } = e, n = t.getValue("type");
                    return n ? (0, l.jsx)("div", {
                        className: "flex w-[80px] items-center",
                        children: (0, l.jsx)("span", {
                            className: (0, s.cn)("truncate rounded-md border bg-background px-2", u.O8),
                            children: n.toUpperCase()
                        })
                    }) : null
                },
                enableSorting: !1,
                filterFn: (e, t, n) => n.includes(e.getValue(t)),
                size: 60
            }, {
                accessorKey: "status",
                header: e => {
                    let {
                        column: t
                    } = e;
                    return (0, l.jsx)(f.p, {
                        column: t,
                        title: "Status"
                    })
                },
                cell: e => {
                    let {
                        row: t
                    } = e, n = p.Do.find(e => e === t.getValue("status"));
                    return n ? (0, l.jsx)("div", {
                        className: "flex w-[100px]",
                        children: (0, l.jsx)(d.O, {
                            status: n,
                            children: n
                        })
                    }) : null
                },
                enableSorting: !1,
                filterFn: (e, t, n) => n.includes(e.getValue(t)),
                size: 100
            }, {
                accessorKey: "created_at",
                header: e => {
                    let {
                        column: t
                    } = e;
                    return (0, l.jsx)(f.p, {
                        column: t,
                        title: "Created At"
                    })
                },
                cell: e => {
                    let {
                        row: t
                    } = e, n = t.getValue("created_at");
                    return "string" == typeof n || "number" == typeof n || n instanceof Date ? (0, l.jsx)("div", {
                        className: u.O8,
                        children: (0, a.Z)((0, r.kT)(n), "yyyy-MM-dd HH:mm")
                    }) : (0, l.jsx)("div", {
                        children: "Invalid date"
                    })
                },
                enableSorting: !0,
                filterFn: (e, t, n) => n.includes(e.getValue(t)),
                size: 126
            }, {
                accessorKey: "duration_ms",
                header: e => {
                    let {
                        column: t
                    } = e;
                    return (0, l.jsx)(f.p, {
                        column: t,
                        title: "Duration",
                        className: "whitespace-normal text-right"
                    })
                },
                cell: e => {
                    let {
                        row: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: (0, s.cn)("text-right", u.O8),
                        children: [(0, i.FX)(t.getValue("duration_ms")), (0, l.jsx)("span", {
                            className: "text-muted-foreground",
                            children: "s"
                        })]
                    })
                },
                enableSorting: !1,
                enableHiding: !1,
                size: 50
            }, {
                accessorKey: "credit_cost",
                header: e => {
                    let {
                        column: t
                    } = e;
                    return (0, l.jsx)(f.p, {
                        column: t,
                        title: "Cost",
                        className: "whitespace-normal text-center leading-tight"
                    })
                },
                cell: e => {
                    let {
                        row: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "flex justify-center px-2",
                        children: (0, l.jsx)(b.t1, {
                            creditCost: t.getValue("credit_cost"),
                            className: u.NY
                        })
                    })
                },
                enableSorting: !1,
                enableHiding: !0,
                size: 90
            }, {
                accessorKey: "flag",
                header: e => {
                    let {
                        column: t
                    } = e;
                    return (0, l.jsx)(f.p, {
                        column: t,
                        title: "Flag"
                    })
                },
                cell: e => {
                    let {
                        row: t
                    } = e;
                    return (0, l.jsx)("div", {
                        children: (0, l.jsx)(h.Z, {
                            flag: t.getValue("flag"),
                            requestId: t.original.id,
                            ref: e => {
                                e && t.original && window.flagRefs && window.flagRefs.set(t.id, e)
                            }
                        })
                    })
                },
                enableSorting: !1,
                enableHiding: !1,
                filterFn: (e, t, n) => !!e.getValue(t) == ("string" == typeof n ? "true" === n : !!n),
                size: 40
            }, {
                accessorKey: "model_id",
                header: e => {
                    let {
                        column: t
                    } = e;
                    return (0, l.jsx)(f.p, {
                        column: t,
                        title: "Model"
                    })
                },
                cell: e => {
                    let {
                        row: t
                    } = e, n = t.getValue("model_id");
                    return n ? (0, l.jsx)("div", {
                        className: "flex items-center",
                        children: (0, l.jsx)(o.C, {
                            variant: "outline",
                            className: (0, s.cn)("h-5 px-1.5 py-0 leading-5", u.O8),
                            children: String(n).toLowerCase()
                        })
                    }) : null
                },
                enableSorting: !1,
                size: 70
            }]
        },
        5545: function(e, t, n) {
            n.d(t, {
                Do: function() {
                    return l
                }
            });
            let l = ["submitting", "pending", "running", "completed", "failed", "paused", "enqueued"]
        },
        18361: function(e, t, n) {
            n.d(t, {
                _: function() {
                    return te
                }
            });
            var l = n(57437),
                r = n(2265),
                i = n(99376),
                a = n(55112),
                s = n(64982),
                o = n(91141),
                d = n(43476),
                c = n(49842),
                u = n(53491),
                m = n(32489),
                f = n(32660),
                p = n(82718),
                h = n(25330),
                g = n(99397),
                x = n(18930),
                v = n(30755),
                b = n(10484),
                y = n(24581),
                w = n(82023),
                j = n(93807),
                N = n(61094),
                k = n(56272),
                C = n(51817),
                S = n(92735),
                I = n(23374),
                E = n(14438),
                _ = n(94508),
                z = n(2635),
                F = n(63585),
                M = n(8102),
                T = n(35974),
                D = n(62869),
                A = n(6418),
                U = n(20653),
                R = n(92934);
            let L = A.fC,
                O = A.xz;
            A.ZA, A.Uv, A.Tr, A.Ee, r.forwardRef((e, t) => {
                let {
                    className: n,
                    inset: r,
                    children: i,
                    ...a
                } = e;
                return (0, l.jsxs)(A.fF, {
                    ref: t,
                    className: (0, _.cn)("flex cursor-pointer select-none items-center rounded-[6px] px-3 py-1.5 text-sm outline-none hover:bg-[#F7F7F7] focus:bg-[#F7F7F7] focus:text-accent-foreground data-[state=open]:bg-[#F7F7F7] data-[state=open]:text-accent-foreground", r && "pl-8", n),
                    ...a,
                    children: [i, (0, l.jsx)(U.XCv, {
                        className: "ml-auto size-4"
                    })]
                })
            }).displayName = A.fF.displayName, r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, l.jsx)(A.tu, {
                    ref: t,
                    className: (0, _.cn)("z-50 min-w-32 overflow-hidden rounded-[10px] border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n),
                    ...r
                })
            }).displayName = A.tu.displayName;
            let P = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, l.jsx)(A.Uv, {
                    children: (0, l.jsx)(A.VY, {
                        ref: t,
                        className: (0, _.cn)("z-50 min-w-32 overflow-hidden rounded-[10px] border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n),
                        ...r
                    })
                })
            });
            P.displayName = A.VY.displayName;
            let Z = r.forwardRef((e, t) => {
                let {
                    className: n,
                    inset: r,
                    ...i
                } = e;
                return (0, l.jsx)(A.ck, {
                    ref: t,
                    className: (0, _.cn)("relative flex cursor-pointer select-none items-center rounded-[6px] px-3 py-1.5 text-sm outline-none hover:bg-[#F7F7F7] focus:bg-[#F7F7F7] focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r && "pl-8", n),
                    ...i
                })
            });
            Z.displayName = A.ck.displayName, r.forwardRef((e, t) => {
                let {
                    className: n,
                    children: r,
                    checked: i,
                    ...a
                } = e;
                return (0, l.jsxs)(A.oC, {
                    ref: t,
                    className: (0, _.cn)("relative flex cursor-pointer select-none items-center rounded-[6px] py-1.5 pl-3 pr-8 text-sm outline-none hover:bg-[#F7F7F7] focus:bg-[#F7F7F7] focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n),
                    checked: i,
                    ...a,
                    children: [r, (0, l.jsx)("span", {
                        className: "absolute right-2 flex size-3.5 items-center justify-center",
                        children: (0, l.jsx)(A.wU, {
                            children: (0, l.jsx)(R.Z, {
                                className: "size-3.5 fill-current stroke-background"
                            })
                        })
                    })]
                })
            }).displayName = A.oC.displayName, r.forwardRef((e, t) => {
                let {
                    className: n,
                    children: r,
                    ...i
                } = e;
                return (0, l.jsxs)(A.Rk, {
                    ref: t,
                    className: (0, _.cn)("relative flex cursor-pointer select-none items-center rounded-[6px] py-1.5 pl-3 pr-8 text-sm outline-none hover:bg-[#F7F7F7] focus:bg-[#F7F7F7] focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n),
                    ...i,
                    children: [r, (0, l.jsx)("span", {
                        className: "absolute right-2 flex size-3.5 items-center justify-center",
                        children: (0, l.jsx)(A.wU, {
                            children: (0, l.jsx)(R.Z, {
                                className: "size-3.5 fill-current stroke-background"
                            })
                        })
                    })]
                })
            }).displayName = A.Rk.displayName, r.forwardRef((e, t) => {
                let {
                    className: n,
                    inset: r,
                    ...i
                } = e;
                return (0, l.jsx)(A.__, {
                    ref: t,
                    className: (0, _.cn)("px-2 py-1.5 text-sm font-semibold text-foreground", r && "pl-8", n),
                    ...i
                })
            }).displayName = A.__.displayName;
            let J = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, l.jsx)(A.Z0, {
                    ref: t,
                    className: (0, _.cn)("-mx-1 my-1 h-px bg-border", n),
                    ...r
                })
            });
            J.displayName = A.Z0.displayName;
            var q = n(26110),
                W = n(17814),
                V = n(19378),
                B = n(69304),
                K = n(93022),
                H = n(12339),
                $ = n(81103),
                Y = n(73164),
                G = n(63836),
                X = n(56475),
                Q = n(14924),
                ee = n(71947),
                et = n(48736),
                en = n(40875),
                el = n(10407);

            function er(e) {
                let {
                    node: t,
                    level: n,
                    expandedIds: i,
                    onToggle: a,
                    onSelect: s,
                    selectedFileId: o,
                    onCreateFile: d,
                    onCreateFolder: c,
                    onMoveNode: u,
                    onRename: m,
                    onDelete: f
                } = e, p = "folder" === t.type, h = p && i.has(t.id), g = o === t.id, x = !p && /\.(py|js|jsx|ts|tsx|json|ya?ml|sh|rb|go|rs|java|c|cc|cpp|h|hpp|css|scss|html|sql)$/i.test(t.name), v = p ? h ? X.Z : Q.Z : x ? ee.Z : et.Z, b = ["agent-root", "agent-prompt-file", "agent-schema-file", "skill-instructions-file", "skill-scheme-file"], y = !b.includes(t.id), w = !b.includes(t.id), [j, N] = (0, r.useState)(null), [k, C] = (0, r.useState)(!1), [S, I] = (0, r.useState)(t.name), E = (0, r.useCallback)(e => {
                    e && requestAnimationFrame(() => {
                        e.focus(), e.select()
                    })
                }, []), z = () => {
                    C(!0), I(t.name)
                }, F = () => {
                    S.trim() && S !== t.name && m && m(t.id, S.trim()), C(!1)
                }, M = () => {
                    C(!1), I(t.name)
                };
                return (0, l.jsxs)("div", {
                    children: [(0, l.jsxs)(L, {
                        children: [(0, l.jsx)(O, {
                            asChild: !0,
                            children: (0, l.jsxs)("div", {
                                draggable: !0,
                                onDragStart: e => {
                                    e.stopPropagation(), e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData("text/plain", t.id)
                                },
                                onDragOver: e => {
                                    if (e.dataTransfer.types.includes("Files")) return;
                                    e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "move";
                                    let t = e.currentTarget.getBoundingClientRect(),
                                        n = e.clientY - t.top,
                                        l = t.height;
                                    p ? n < .25 * l ? N("before") : n > .75 * l ? N("after") : N("inside") : n < l / 2 ? N("before") : N("after")
                                },
                                onDragLeave: () => {
                                    N(null)
                                },
                                onDrop: e => {
                                    if (e.dataTransfer.types.includes("Files")) {
                                        N(null);
                                        return
                                    }
                                    e.preventDefault(), e.stopPropagation();
                                    let n = e.dataTransfer.getData("text/plain");
                                    n && n !== t.id && j && u && u(n, t.id, j), N(null)
                                },
                                className: "relative",
                                children: ["before" === j && (0, l.jsx)("div", {
                                    className: "absolute inset-x-0 top-0 h-px bg-border"
                                }), "after" === j && (0, l.jsx)("div", {
                                    className: "absolute inset-x-0 bottom-0 h-px bg-border"
                                }), k ? (0, l.jsxs)("div", {
                                    className: (0, _.cn)("flex w-full items-center gap-2 rounded-lg px-2 py-1 text-xs", "bg-accent/70 text-foreground"),
                                    style: {
                                        paddingLeft: "".concat(12 * n + 8, "px")
                                    },
                                    children: [p ? h ? (0, l.jsx)(en.Z, {
                                        className: "size-3"
                                    }) : (0, l.jsx)(el.Z, {
                                        className: "size-3"
                                    }) : (0, l.jsx)("span", {
                                        className: "w-3"
                                    }), (0, l.jsx)(v, {
                                        className: "size-3.5"
                                    }), (0, l.jsx)("input", {
                                        ref: E,
                                        type: "text",
                                        value: S,
                                        onChange: e => I(e.target.value),
                                        onBlur: F,
                                        onKeyDown: e => {
                                            "Enter" === e.key ? F() : "Escape" === e.key && M()
                                        },
                                        className: "flex-1 truncate bg-transparent outline-none",
                                        onClick: e => e.stopPropagation()
                                    })]
                                }) : (0, l.jsxs)("button", {
                                    type: "button",
                                    onClick: () => s(t.id),
                                    onDoubleClick: () => {
                                        y && z()
                                    },
                                    className: (0, _.cn)("flex w-full min-w-0 items-center gap-2 overflow-hidden rounded-lg px-2 py-1 text-left text-xs transition-colors", g ? "bg-accent/70 text-foreground" : "text-muted-foreground hover:bg-accent/40 hover:text-foreground", "inside" === j && "bg-accent/50"),
                                    style: {
                                        paddingLeft: "".concat(12 * n + 8, "px")
                                    },
                                    children: [p ? h ? (0, l.jsx)(en.Z, {
                                        className: "size-3 shrink-0"
                                    }) : (0, l.jsx)(el.Z, {
                                        className: "size-3 shrink-0"
                                    }) : (0, l.jsx)("span", {
                                        className: "w-3 shrink-0"
                                    }), (0, l.jsx)(v, {
                                        className: "size-3.5 shrink-0"
                                    }), (0, l.jsx)("span", {
                                        className: "truncate",
                                        children: t.name
                                    })]
                                })]
                            })
                        }), (0, l.jsxs)(P, {
                            children: [(0, l.jsx)(Z, {
                                onSelect: () => {
                                    d && (d(t.id), p && !h && a(t.id))
                                },
                                children: "New File"
                            }), (0, l.jsx)(Z, {
                                onSelect: () => {
                                    c && (c(t.id), p && !h && a(t.id))
                                },
                                children: "New Folder"
                            }), (y || w) && (0, l.jsx)(J, {}), y && (0, l.jsx)(Z, {
                                onSelect: z,
                                children: "Rename"
                            }), w && (0, l.jsx)(Z, {
                                onSelect: () => {
                                    f && f(t.id)
                                },
                                className: "text-destructive focus:text-destructive",
                                children: "Delete"
                            })]
                        })]
                    }), p && h && t.children && (0, l.jsx)("div", {
                        children: t.children.map(e => (0, l.jsx)(er, {
                            node: e,
                            level: n + 1,
                            expandedIds: i,
                            onToggle: a,
                            onSelect: s,
                            selectedFileId: o,
                            onCreateFile: d,
                            onCreateFolder: c,
                            onMoveNode: u,
                            onRename: m,
                            onDelete: f
                        }, e.id))
                    })]
                })
            }

            function ei(e) {
                let {
                    rows: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: "flex h-full flex-col p-3",
                    children: [(0, l.jsx)("div", {
                        className: "mb-2 text-xs font-semibold text-muted-foreground",
                        children: "Metadata"
                    }), (0, l.jsx)("div", {
                        className: "flex min-h-0 flex-1 flex-col space-y-2 overflow-auto",
                        children: t.map(e => (0, l.jsxs)("div", {
                            className: "flex items-center justify-between gap-3 text-xs",
                            children: [(0, l.jsx)("span", {
                                className: "shrink-0 select-none text-muted-foreground",
                                children: e.label
                            }), (0, l.jsx)("span", {
                                className: "flex min-w-0 flex-1 select-none justify-end text-foreground",
                                children: "string" == typeof e.value ? (0, l.jsx)($.pn, {
                                    children: (0, l.jsxs)($.u, {
                                        children: [(0, l.jsx)($.aJ, {
                                            asChild: !0,
                                            children: (0, l.jsx)("span", {
                                                className: "truncate",
                                                children: e.value
                                            })
                                        }), (0, l.jsx)($._v, {
                                            side: "left",
                                            className: "max-w-64 break-words",
                                            children: e.value
                                        })]
                                    })
                                }) : e.value
                            })]
                        }, e.label))
                    })]
                })
            }
            var ea = n(51110),
                es = n(68955),
                eo = n(73041),
                ed = n(17689),
                ec = n(84190);

            function eu(e) {
                let {
                    paneId: t,
                    tabs: n,
                    activeId: i,
                    onSelect: a,
                    onClose: s,
                    onSplit: o,
                    onAddTab: d,
                    showSchemaOption: c = !1,
                    onUploadFiles: u,
                    getNode: f,
                    className: p,
                    dragState: h,
                    onTabDragStart: x,
                    onTabDragOver: v,
                    onTabDragLeave: b,
                    onTabDrop: y,
                    onTabDragEnd: w
                } = e;
                return (0, l.jsxs)("div", {
                    className: (0, _.cn)("flex w-full items-center overflow-hidden h-full", p),
                    children: [(0, l.jsx)(H.mQ, {
                        value: null != i ? i : "",
                        onValueChange: a,
                        className: "flex min-w-0 flex-1",
                        children: (0, l.jsxs)(H.dr, {
                            className: "h-[41px] flex-1 justify-start overflow-x-auto overflow-y-hidden rounded-none bg-transparent p-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                            children: [0 === n.length && (0, l.jsx)("div", {
                                className: "flex h-full flex-1 items-center px-3 text-xs text-muted-foreground",
                                onDragOver: e => {
                                    e.preventDefault(), e.dataTransfer.dropEffect = "move", h.draggedTabId && v(t, 0, e)
                                },
                                onDrop: e => {
                                    e.preventDefault(), e.stopPropagation(), h.draggedTabId && y(t, 0)
                                },
                                children: h.dragOverPaneId === t ? "Drop tab here" : "No file selected"
                            }), n.map((e, n) => {
                                let i = f(e);
                                if (!i) return null;
                                let a = h.draggedTabId === e,
                                    o = h.dragOverPaneId === t && h.dragOverPosition === n && h.draggedTabId !== e;
                                return (0, l.jsxs)(r.Fragment, {
                                    children: [o && (0, l.jsx)("div", {
                                        className: "h-[41px] w-px bg-border"
                                    }), (0, l.jsx)(H.SP, {
                                        value: e,
                                        draggable: !0,
                                        onDragStart: n => {
                                            n.dataTransfer.effectAllowed = "move", n.dataTransfer.setData("text/html", ""), x(t, e)
                                        },
                                        onDragOver: e => {
                                            v(t, n, e)
                                        },
                                        onDragLeave: b,
                                        onDrop: e => {
                                            e.preventDefault(), e.stopPropagation(), y(t, n)
                                        },
                                        onDragEnd: w,
                                        className: (0, _.cn)("group h-[41px] shrink-0 rounded-none border-r border-border/70 px-3 text-xs shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-[#1D4FD8] data-[state=active]:bg-white data-[state=active]:text-[#1D4FD8] data-[state=active]:shadow-none", a && "scale-[0.98] cursor-grabbing opacity-30", !h.isDragging && "cursor-grab active:cursor-grabbing"),
                                        children: (0, l.jsxs)("span", {
                                            className: "flex w-full items-center gap-2",
                                            children: [(0, l.jsx)(et.Z, {
                                                className: "size-3.5 text-muted-foreground group-data-[state=active]:text-[#1D4FD8]"
                                            }), (0, l.jsx)("span", {
                                                className: "truncate",
                                                children: i.name
                                            }), (0, l.jsx)("span", {
                                                className: "ml-auto flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100",
                                                children: (0, l.jsx)("span", {
                                                    role: "button",
                                                    tabIndex: 0,
                                                    onPointerDown: n => {
                                                        n.preventDefault(), n.stopPropagation(), s(t, e)
                                                    },
                                                    onKeyDown: n => {
                                                        ("Enter" === n.key || " " === n.key) && (n.preventDefault(), n.stopPropagation(), s(t, e))
                                                    },
                                                    className: "cursor-pointer rounded p-0.5 text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                                                    "aria-label": "Close ".concat(i.name),
                                                    children: (0, l.jsx)(m.Z, {
                                                        className: "size-3.5"
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                }, e)
                            }), n.length > 0 && (0, l.jsx)("div", {
                                className: "h-[41px] min-w-[40px] flex-1",
                                onDragOver: e => {
                                    e.preventDefault(), e.dataTransfer.dropEffect = "move", h.draggedTabId && v(t, n.length, e)
                                },
                                onDrop: e => {
                                    e.preventDefault(), e.stopPropagation(), h.draggedTabId && y(t, n.length)
                                },
                                children: h.dragOverPaneId === t && h.dragOverPosition === n.length && (0, l.jsx)("div", {
                                    className: "h-[41px] w-px bg-border"
                                })
                            })]
                        })
                    }), (0, l.jsxs)(ec.h_, {
                        children: [(0, l.jsx)(ec.$F, {
                            asChild: !0,
                            children: (0, l.jsx)("button", {
                                type: "button",
                                className: "mr-2 rounded-md p-1.5 text-muted-foreground transition hover:bg-muted/50 hover:text-foreground",
                                "aria-label": "Add file",
                                children: (0, l.jsx)(g.Z, {
                                    className: "size-4"
                                })
                            })
                        }), (0, l.jsxs)(ec.AW, {
                            align: "end",
                            sideOffset: 6,
                            className: "min-w-[160px]",
                            children: [c && (0, l.jsxs)(ec.Xi, {
                                onClick: () => d(t),
                                children: [(0, l.jsx)(eo.Z, {
                                    className: "mr-2 size-4"
                                }), "Create schema.json"]
                            }), (0, l.jsxs)(ec.Xi, {
                                onClick: () => u(t),
                                children: [(0, l.jsx)(ed.Z, {
                                    className: "mr-2 size-4"
                                }), "Upload files"]
                            })]
                        })]
                    })]
                })
            }
            var em = n(34789),
                ef = n(90933),
                ep = n(75952),
                eh = n(72144),
                eg = n(24466),
                ex = n(5531),
                ev = n(84696),
                eb = n(6483),
                ey = n(24670),
                ew = n(62997),
                ej = n(80162),
                eN = n(87191),
                ek = n(1695),
                eC = n(78325);

            function eS(e, t) {
                return ej.lg.fromClass(class {
                    update(e) {
                        e.docChanged && (this.decorations = this.buildDecos(e.view))
                    }
                    buildDecos(n) {
                        let l = new ew.f_;
                        for (let r of [...e].sort((e, t) => e - t))
                            if (r >= 1 && r <= n.state.doc.lines) {
                                let e = n.state.doc.line(r);
                                l.add(e.from, e.from, ej.p.line({
                                    class: t
                                }))
                            } return l.finish()
                    }
                    constructor(e) {
                        this.decorations = this.buildDecos(e)
                    }
                }, {
                    decorations: e => e.decorations
                })
            }
            let eI = ej.tk.theme({
                    "&": {
                        height: "100%",
                        fontSize: "14px"
                    },
                    ".cm-editor": {
                        height: "100%"
                    },
                    ".cm-scroller": {
                        overflow: "auto"
                    },
                    ".cm-diff-removed": {
                        backgroundColor: "rgb(254 242 242)"
                    },
                    ".cm-diff-added": {
                        backgroundColor: "rgb(240 253 244)"
                    }
                }),
                eE = {
                    lineNumbers: !0,
                    highlightActiveLineGutter: !1,
                    highlightSpecialChars: !1,
                    foldGutter: !1,
                    drawSelection: !1,
                    dropCursor: !1,
                    allowMultipleSelections: !1,
                    indentOnInput: !1,
                    syntaxHighlighting: !0,
                    bracketMatching: !1,
                    closeBrackets: !1,
                    autocompletion: !1,
                    rectangularSelection: !1,
                    crosshairCursor: !1,
                    highlightActiveLine: !1,
                    highlightSelectionMatches: !1,
                    closeBracketsKeymap: !1,
                    defaultKeymap: !1,
                    searchKeymap: !1,
                    historyKeymap: !1,
                    foldKeymap: !1,
                    completionKeymap: !1,
                    lintKeymap: !1
                };

            function e_(e) {
                var t, n, i;
                let {
                    open: a,
                    onClose: s,
                    skillName: o,
                    originalFiles: d,
                    currentFiles: c
                } = e, {
                    isMobile: u,
                    mounted: m
                } = (0, ex.sT)(), [f, p] = (0, r.useState)(null), h = (0, r.useRef)(null), g = (0, r.useRef)(null), x = (0, r.useRef)(!1), v = (0, r.useRef)(null), b = () => {
                    var e;
                    let t = h.current,
                        n = g.current;
                    if (!t || !n) return;
                    null === (e = v.current) || void 0 === e || e.call(v);
                    let l = () => {
                            x.current || (x.current = !0, n.scrollDOM.scrollTop = t.scrollDOM.scrollTop, x.current = !1)
                        },
                        r = () => {
                            x.current || (x.current = !0, t.scrollDOM.scrollTop = n.scrollDOM.scrollTop, x.current = !1)
                        };
                    t.scrollDOM.addEventListener("scroll", l, {
                        passive: !0
                    }), n.scrollDOM.addEventListener("scroll", r, {
                        passive: !0
                    }), v.current = () => {
                        t.scrollDOM.removeEventListener("scroll", l), n.scrollDOM.removeEventListener("scroll", r)
                    }
                };
                (0, r.useEffect)(() => () => {
                    var e;
                    return null === (e = v.current) || void 0 === e ? void 0 : e.call(v)
                }, []);
                let y = (0, r.useMemo)(() => {
                        let e = Object.fromEntries(c.map(e => [e.id, e])),
                            t = [];
                        for (let n of d) {
                            let l = e[n.id];
                            l && l.content !== n.content && t.push({
                                id: n.id,
                                name: n.name,
                                original: n.content,
                                current: l.content
                            })
                        }
                        let n = new Set(d.map(e => e.id));
                        for (let e of c) n.has(e.id) || t.push({
                            id: e.id,
                            name: e.name,
                            original: "",
                            current: e.content
                        });
                        return t
                    }, [d, c]),
                    w = null !== (n = null != f ? f : null === (t = y[0]) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null,
                    j = null !== (i = y.find(e => e.id === w)) && void 0 !== i ? i : null,
                    {
                        removedLines: N,
                        addedLines: k,
                        langExtensions: C,
                        isJson: S
                    } = (0, r.useMemo)(() => {
                        if (!j) return {
                            removedLines: new Set,
                            addedLines: new Set,
                            langExtensions: [],
                            isJson: !1
                        };
                        let e = j.name.endsWith(".json");
                        return {
                            ... function(e, t) {
                                let n = (0, ek.Mp)(e, t),
                                    l = new Set,
                                    r = new Set,
                                    i = 1,
                                    a = 1;
                                for (let e of n) {
                                    var s;
                                    let t = null !== (s = e.count) && void 0 !== s ? s : 0;
                                    if (e.added || e.removed) {
                                        if (e.removed)
                                            for (let e = 0; e < t; e++) l.add(i++);
                                        else
                                            for (let e = 0; e < t; e++) r.add(a++)
                                    } else i += t, a += t
                                }
                                return {
                                    removedLines: l,
                                    addedLines: r
                                }
                            }(j.original, j.current),
                            langExtensions: e ? [(0, ey.AV)(), eC.hm, eC.uk, eC.Ks] : [...(0, G.pt)(j.name), eC.uk],
                            isJson: e
                        }
                    }, [j]),
                    I = (0, r.useMemo)(() => [...C, eS(N, "cm-diff-removed"), eI, ej.tk.lineWrapping, ej.tk.editable.of(!1)], [C, N]),
                    E = (0, r.useMemo)(() => [...C, eS(k, "cm-diff-added"), eI, ej.tk.lineWrapping, ej.tk.editable.of(!1)], [C, k]),
                    z = (0, l.jsxs)("div", {
                        className: "flex shrink-0 items-center justify-between border-b px-6 py-2",
                        children: [(0, l.jsx)("span", {
                            className: "text-lg font-medium",
                            children: o
                        }), y.length > 1 && (0, l.jsx)("div", {
                            className: "flex items-center gap-0.5 rounded-[10px] border border-border/60 bg-muted/40 p-0.5 text-xs",
                            children: y.map(e => (0, l.jsx)("button", {
                                type: "button",
                                onClick: () => p(e.id),
                                className: (0, _.cn)("rounded-[7px] px-2.5 py-1 font-medium transition-colors", w === e.id ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                children: e.name
                            }, e.id))
                        })]
                    }),
                    F = 0 === y.length ? (0, l.jsx)("div", {
                        className: "flex flex-1 items-center justify-center text-sm text-muted-foreground",
                        children: "No changes"
                    }) : j ? (0, l.jsxs)("div", {
                        className: (0, _.cn)("relative flex min-h-0 flex-1", u && "flex-col"),
                        children: [!u && (0, l.jsx)("div", {
                            className: "absolute inset-y-0 left-1/2 z-10 w-px bg-border"
                        }), (0, l.jsx)("div", {
                            className: "flex min-h-0 min-w-0 flex-1 flex-col",
                            children: (0, l.jsx)(eN.ZP, {
                                value: j.original,
                                theme: S ? "light" : G.vU,
                                extensions: I,
                                basicSetup: eE,
                                height: "100%",
                                editable: !1,
                                className: "h-full",
                                onCreateEditor: e => {
                                    h.current = e, b()
                                }
                            })
                        }), u && (0, l.jsx)("div", {
                            className: "h-px w-full bg-border"
                        }), (0, l.jsx)("div", {
                            className: "flex min-h-0 min-w-0 flex-1 flex-col",
                            children: (0, l.jsx)(eN.ZP, {
                                value: j.current,
                                theme: S ? "light" : G.vU,
                                extensions: E,
                                basicSetup: eE,
                                height: "100%",
                                editable: !1,
                                className: "h-full",
                                onCreateEditor: e => {
                                    g.current = e, b()
                                }
                            })
                        })]
                    }) : null;
                return m && u ? (0, l.jsx)(W.dy, {
                    open: a,
                    onOpenChange: e => !e && s(),
                    children: (0, l.jsxs)(W.sc, {
                        className: "flex h-[90dvh] flex-col gap-0 overflow-hidden p-0",
                        children: [z, F]
                    })
                }) : (0, l.jsx)(q.Vq, {
                    open: a,
                    onOpenChange: e => !e && s(),
                    children: (0, l.jsxs)(q.cZ, {
                        hideCloseButton: !0,
                        className: "flex h-[85vh] max-w-6xl flex-col gap-0 overflow-hidden p-0 outline-none focus:outline-none focus-visible:outline-none",
                        children: [z, F]
                    })
                })
            }
            var ez = n(45767),
                eF = n(20265),
                eM = n(58239);

            function eT(e) {
                let {
                    isOpen: t,
                    onClose: n,
                    allFiles: i,
                    fileName: a,
                    skillName: s,
                    onApplyChange: o
                } = e, [d, c] = (0, r.useState)(""), [u, m] = (0, r.useState)(!1), [f, p] = (0, r.useState)(""), h = (0, r.useRef)(null), g = (0, r.useRef)(crypto.randomUUID()), x = (0, r.useRef)([]), v = (0, r.useRef)(null);
                (0, r.useEffect)(() => {
                    if (t) setTimeout(() => {
                        var e;
                        return null === (e = h.current) || void 0 === e ? void 0 : e.focus()
                    }, 50);
                    else {
                        var e;
                        null === (e = v.current) || void 0 === e || e.abort()
                    }
                }, [t]);
                let b = async () => {
                    let e = f.trim();
                    if (!e || u) return;
                    p(""), h.current && (h.current.style.height = "22px"), c(""), m(!0);
                    let t = i.map(e => {
                            let t = e.name.endsWith(".json") ? "json" : "markdown";
                            return "### ".concat(e.name, "\n```").concat(t, "\n").concat(e.content, "\n```")
                        }).join("\n\n"),
                        n = [{
                            role: "system",
                            content: 'You are an AI copilot helping edit files in skill "'.concat(s, '".\n\nThe skill contains the following files:\n\n').concat(t, '\n\nThe user is currently viewing "').concat(a, '" but may ask you to edit any file. When asked to make edits, return the complete updated content in a code block where the language specifier is exactly the target filename (e.g. ```schema.json or ```SKILL.md), along with a brief plain-text explanation of what you changed. The code block will be applied to the correct file automatically. When asked a question, answer concisely without a code block.')
                        }, ...x.current, {
                            role: "user",
                            content: e
                        }];
                    v.current = new AbortController;
                    try {
                        let t = await (0, ez.As)(n, g.current, v.current.signal),
                            l = function(e) {
                                let t = [...e.matchAll(/```(\S+)\n([\s\S]*?)```/g)];
                                if (0 === t.length) return null;
                                let n = t[t.length - 1];
                                return {
                                    fileName: n[1],
                                    content: n[2].trim()
                                }
                            }(t),
                            r = t.replace(/```\S+\n[\s\S]*?```/g, "").replace(/\n{3,}/g, "\n\n").trim().replace(/<think>[\s\S]*?(?:<\/redacted_thinking>|<\/think>)/g, "").trim();
                        c(r), l && o(l.fileName, l.content), x.current = [...x.current, {
                            role: "user",
                            content: e
                        }, {
                            role: "assistant",
                            content: t
                        }]
                    } catch (e) {
                        c("Error: ".concat(e instanceof Error ? e.message : "Something went wrong"))
                    } finally {
                        m(!1)
                    }
                };
                return t ? (0, l.jsxs)("div", {
                    className: "absolute inset-x-4 bottom-4 z-20 overflow-hidden rounded-2xl border bg-popover shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-2px_rgba(0,0,0,0.05)]",
                    children: [u ? (0, l.jsxs)("div", {
                        className: "flex items-center gap-2 px-4 pb-3 pt-4 text-sm text-muted-foreground",
                        children: [(0, l.jsx)(C.Z, {
                            className: "size-3.5 animate-spin"
                        }), (0, l.jsx)("span", {
                            children: "Thinking..."
                        })]
                    }) : d ? (0, l.jsx)("div", {
                        className: "max-h-[40vh] overflow-y-auto px-4 pb-3 pt-4 [scrollbar-width:thin]",
                        children: (0, l.jsx)(eM.Z, {
                            markdownContent: d,
                            enableSoftBreaks: !1,
                            stripYamlFrontmatter: !1,
                            noPadding: !0
                        })
                    }) : null, (0, l.jsxs)("div", {
                        className: "flex items-center gap-2 px-3 py-2",
                        children: [(0, l.jsx)("textarea", {
                            ref: h,
                            value: f,
                            onChange: e => {
                                p(e.target.value), e.target.style.height = "auto", e.target.style.height = "".concat(Math.min(e.target.scrollHeight, 96), "px")
                            },
                            onKeyDown: e => {
                                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), b()), "Escape" === e.key && n()
                            },
                            placeholder: "Ask Orion anything...",
                            rows: 1,
                            className: "min-h-0 flex-1 resize-none bg-transparent text-sm outline-none placeholder:text-muted-foreground/50",
                            style: {
                                height: "22px"
                            }
                        }), u ? (0, l.jsx)(C.Z, {
                            className: "size-4 shrink-0 animate-spin text-muted-foreground"
                        }) : (0, l.jsx)("button", {
                            type: "button",
                            onClick: b,
                            disabled: !f.trim(),
                            className: (0, _.cn)("flex size-6 shrink-0 items-center justify-center rounded-full transition-colors", f.trim() ? "bg-[#1D4FD8] text-white hover:bg-[#193FB0]" : "bg-muted/50 text-muted-foreground"),
                            children: (0, l.jsx)(eF.Z, {
                                className: "size-3.5"
                            })
                        })]
                    })]
                }) : null
            }
            var eD = n(27648),
                eA = n(5307),
                eU = n(81907),
                eR = n(95658),
                eL = n(30401),
                eO = n(78867),
                eP = n(59421),
                eZ = n(90663),
                eJ = n(62303),
                eq = n(63864),
                eW = n(87731),
                eV = n(57024),
                eB = n(72015);

            function eK(e) {
                var t, n, l, r, i;
                return {
                    id: e.id,
                    _type: "execution",
                    name: null !== (r = null !== (l = null === (t = e.skill) || void 0 === t ? void 0 : t.name) && void 0 !== l ? l : null === (n = e.agent) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : null,
                    skill_id: null !== (i = e.skill_id) && void 0 !== i ? i : null,
                    status: e.status,
                    created_at: e.created_at,
                    duration_ms: e.created_at && e.completed_at ? new Date(e.completed_at).getTime() - new Date(e.created_at).getTime() : null
                }
            }

            function eH(e) {
                var t, n, l;
                return {
                    id: e.id,
                    _type: "request",
                    name: null !== (t = e.skill_name) && void 0 !== t ? t : "string" == typeof e.domain && "skill" !== e.domain ? e.domain : null,
                    skill_id: null !== (n = e.skill_id) && void 0 !== n ? n : null,
                    status: e.status,
                    created_at: e.created_at,
                    duration_ms: null !== (l = e.duration_ms) && void 0 !== l ? l : null
                }
            }
            let e$ = [{
                    id: "all",
                    label: "All"
                }, {
                    id: "requests",
                    label: "Requests"
                }, {
                    id: "executions",
                    label: "Executions"
                }],
                eY = "created_at";

            function eG(e) {
                let {
                    id: t
                } = e, [n, i] = (0, r.useState)(!1), [a, s] = (0, r.useState)(!1);
                return (0, l.jsxs)("div", {
                    className: "flex items-center space-x-1",
                    onMouseEnter: () => s(!0),
                    onMouseLeave: () => s(!1),
                    children: [(0, l.jsxs)("div", {
                        className: "truncate font-mono font-medium text-muted-foreground",
                        children: [t.slice(0, 8), "-", t.slice(9, 13)]
                    }), (a || n) && (0, l.jsx)(D.z, {
                        variant: "ghost",
                        size: "icon",
                        className: "size-4 shrink-0 hover:bg-muted",
                        onClick: e => {
                            e.stopPropagation(), navigator.clipboard.writeText(t), i(!0), E.Am.success("Copied to clipboard"), setTimeout(() => i(!1), 2e3)
                        },
                        children: n ? (0, l.jsx)(eL.Z, {
                            className: "size-3 text-green-600"
                        }) : (0, l.jsx)(eO.Z, {
                            className: "size-3 text-muted-foreground"
                        })
                    })]
                })
            }
            let eX = [{
                id: "id",
                size: 100,
                enableResizing: !1,
                enableSorting: !1,
                header: e => {
                    let {
                        column: t
                    } = e;
                    return (0, l.jsx)(eW.p, {
                        column: t,
                        title: "ID"
                    })
                },
                cell: e => {
                    let {
                        row: t
                    } = e;
                    return (0, l.jsx)(eG, {
                        id: t.original.id
                    })
                }
            }, {
                id: "name",
                size: 160,
                enableResizing: !1,
                enableSorting: !1,
                header: e => {
                    let {
                        column: t
                    } = e;
                    return (0, l.jsx)(eW.p, {
                        column: t,
                        title: "Name"
                    })
                },
                meta: {
                    align: "left"
                },
                cell: e => {
                    let {
                        row: t
                    } = e, {
                        name: n,
                        skill_id: r
                    } = t.original;
                    return n ? r ? (0, l.jsx)("div", {
                        className: "flex items-center space-x-2",
                        children: (0, l.jsx)(eD.default, {
                            href: "/dashboard/skills/".concat(r),
                            onClick: e => e.stopPropagation(),
                            className: "truncate border-b border-border font-medium text-foreground hover:text-muted-foreground",
                            children: n
                        })
                    }) : (0, l.jsx)("span", {
                        className: "truncate font-medium",
                        children: n
                    }) : (0, l.jsx)("span", {
                        className: "text-muted-foreground",
                        children: "-"
                    })
                }
            }, {
                id: "_type",
                size: 90,
                enableResizing: !1,
                enableSorting: !1,
                header: e => {
                    let {
                        column: t
                    } = e;
                    return (0, l.jsx)(eW.p, {
                        column: t,
                        title: "Type"
                    })
                },
                cell: e => {
                    let {
                        row: t
                    } = e;
                    return (0, l.jsx)(T.C, {
                        variant: "outline",
                        className: "rounded-[10px] text-xs font-normal",
                        children: "execution" === t.original._type ? "Execution" : "Request"
                    })
                }
            }, {
                id: "status",
                size: 100,
                enableResizing: !1,
                enableSorting: !1,
                header: e => {
                    let {
                        column: t
                    } = e;
                    return (0, l.jsx)(eW.p, {
                        column: t,
                        title: "Status"
                    })
                },
                cell: e => {
                    let {
                        row: t
                    } = e;
                    return t.original.status ? (0, l.jsx)(eP.O, {
                        status: t.original.status,
                        children: t.original.status
                    }) : (0, l.jsx)("span", {
                        className: "text-muted-foreground",
                        children: "-"
                    })
                }
            }, {
                id: "created_at",
                size: 130,
                enableResizing: !1,
                enableSorting: !1,
                header: e => {
                    let {
                        column: t
                    } = e;
                    return (0, l.jsx)(eW.p, {
                        column: t,
                        title: "Created At"
                    })
                },
                cell: e => {
                    let {
                        row: t
                    } = e;
                    return t.original.created_at ? (0, l.jsx)("div", {
                        children: (0, u.Z)((0, d.kT)(t.original.created_at), "yyyy-MM-dd HH:mm")
                    }) : (0, l.jsx)("span", {
                        className: "text-muted-foreground",
                        children: "-"
                    })
                }
            }, {
                id: "duration",
                size: 70,
                enableResizing: !1,
                enableSorting: !1,
                header: e => {
                    let {
                        column: t
                    } = e;
                    return (0, l.jsx)(eW.p, {
                        column: t,
                        title: "Duration",
                        className: "whitespace-normal text-right"
                    })
                },
                cell: e => {
                    let {
                        row: t
                    } = e;
                    return null == t.original.duration_ms ? (0, l.jsx)("div", {
                        className: "text-right font-mono text-muted-foreground",
                        children: "-"
                    }) : (0, l.jsxs)("div", {
                        className: "text-right font-mono",
                        children: [(0, eR.FX)(t.original.duration_ms), (0, l.jsx)("span", {
                            className: "text-muted-foreground",
                            children: "s"
                        })]
                    })
                }
            }];

            function eQ(e) {
                let {
                    skillId: t
                } = e, n = function() {
                    let [e, t] = (0, r.useState)(!1);
                    return (0, r.useEffect)(() => {
                        let e = window.matchMedia("(max-width: ".concat(767, "px)"));
                        t(e.matches);
                        let n = e => t(e.matches);
                        return e.addEventListener("change", n), () => e.removeEventListener("change", n)
                    }, []), e
                }(), [i, a] = (0, r.useState)("all"), [s, o] = (0, r.useState)(null), [d, c] = (0, r.useState)(null), [u, m] = (0, r.useState)(0), [f, p] = (0, r.useState)([]), [h, g] = (0, r.useState)(0), [x, v] = (0, r.useState)(0), [b, y] = (0, r.useState)([]), [w, j] = (0, r.useState)(0);
                (0, r.useEffect)(() => {
                    m(0), p([]), g(0), v(0), y([]), j(0)
                }, [t]);
                let N = {
                        skill_id: t
                    },
                    {
                        data: k
                    } = (0, eA.HV)(20, u, eY, !0, void 0, N),
                    {
                        data: C
                    } = (0, eU.eL)(20, x, eY, !0, N);
                (0, r.useEffect)(() => {
                    (null == k ? void 0 : k.data) && (p(e => 0 === u ? k.data : [...e, ...k.data]), g(k.count))
                }, [k]), (0, r.useEffect)(() => {
                    var e;
                    (null == C ? void 0 : C.data) && (y(e => 0 === x ? C.data : [...e, ...C.data]), j(null !== (e = C.count) && void 0 !== e ? e : 0))
                }, [C]);
                let S = [...f.map(eK), ...b.map(eH)].sort((e, t) => {
                        var n, l;
                        return new Date(null !== (n = t.created_at) && void 0 !== n ? n : 0).getTime() - new Date(null !== (l = e.created_at) && void 0 !== l ? l : 0).getTime()
                    }),
                    I = f.length < h || b.length < w,
                    E = n ? {
                        id: !1,
                        created_at: !1,
                        duration: !1
                    } : {};
                return (0, l.jsxs)("div", {
                    className: "flex min-h-0 flex-1 flex-col overflow-hidden",
                    children: [(0, l.jsx)("div", {
                        className: "flex shrink-0 items-center gap-1 px-2 py-1.5",
                        children: e$.map(e => (0, l.jsx)("button", {
                            type: "button",
                            onClick: () => a(e.id),
                            className: (0, _.cn)("rounded-[10px] px-2 py-0.5 text-xs transition-colors", i === e.id ? "bg-muted text-foreground" : "border border-border/70 text-muted-foreground hover:text-foreground"),
                            children: e.label
                        }, e.id))
                    }), (0, l.jsxs)("div", {
                        className: "min-h-0 flex-1 overflow-auto",
                        children: ["all" === i && (0, l.jsx)(eq.w, {
                            columns: eX,
                            data: S,
                            onRowClick: e => {
                                "execution" === e._type ? o(e.id) : "request" === e._type && c(e.id)
                            },
                            listView: !0,
                            onLoadMore: () => {
                                f.length < h && m(e => e + 1), b.length < w && v(e => e + 1)
                            },
                            hasMore: I,
                            enableFilters: !1,
                            enablePagination: !1,
                            defaultColumnVisibility: E
                        }), "executions" === i && (0, l.jsx)(eq.w, {
                            columns: eJ.z,
                            data: f,
                            onRowClick: e => o(e.id),
                            listView: !0,
                            onLoadMore: () => m(e => e + 1),
                            hasMore: f.length < h,
                            enableFilters: !1,
                            enablePagination: !1,
                            defaultColumnVisibility: {
                                completed_at: !1,
                                "agent.name": !1,
                                version: !1,
                                flag: !1,
                                credit_cost: !1,
                                ...E
                            }
                        }), "requests" === i && (0, l.jsx)(eq.w, {
                            columns: eB.z,
                            data: b,
                            onRowClick: e => c(e.id),
                            listView: !0,
                            onLoadMore: () => v(e => e + 1),
                            hasMore: b.length < w,
                            enableFilters: !1,
                            enablePagination: !1,
                            defaultColumnVisibility: {
                                flag: !1,
                                model_id: !1,
                                type: !1,
                                credit_cost: !1,
                                signed_thumbnail_uri: !1,
                                ...n ? {
                                    id: !1,
                                    created_at: !1,
                                    duration_ms: !1
                                } : {}
                            }
                        })]
                    }), (0, l.jsx)(eZ.Z, {
                        executionId: s,
                        open: !!s,
                        onOpenChange: e => {
                            e || o(null)
                        }
                    }), (0, l.jsx)(eV.Z, {
                        requestId: d,
                        open: !!d,
                        onOpenChange: e => {
                            e || c(null)
                        }
                    })]
                })
            }
            var e0 = n(76822);

            function e1(e) {
                let {
                    value: t,
                    onSave: n,
                    disabled: i,
                    className: a
                } = e, [s, o] = (0, r.useState)(!1), [d, c] = (0, r.useState)(t), u = (0, r.useRef)(null);
                (0, r.useEffect)(() => {
                    c(t)
                }, [t]), (0, r.useEffect)(() => {
                    s && requestAnimationFrame(() => {
                        var e, t;
                        null === (e = u.current) || void 0 === e || e.focus(), null === (t = u.current) || void 0 === t || t.select()
                    })
                }, [s]);
                let m = (0, r.useCallback)(() => {
                        let e = d.trim();
                        e && e !== t ? n(e) : c(t), o(!1)
                    }, [d, t, n]),
                    f = (0, r.useCallback)(e => {
                        "Enter" === e.key ? (e.preventDefault(), m()) : "Escape" === e.key && (e.preventDefault(), c(t), o(!1))
                    }, [m, t]);
                return s ? (0, l.jsx)("input", {
                    ref: u,
                    value: d,
                    onChange: e => c(e.target.value),
                    onBlur: m,
                    onKeyDown: f,
                    className: (0, _.cn)("w-full rounded border border-border bg-background px-1 py-0 text-foreground outline-none focus:ring-1 focus:ring-ring", a)
                }) : (0, l.jsx)("span", {
                    onDoubleClick: i ? void 0 : () => o(!0),
                    className: (0, _.cn)("truncate", !i && "cursor-pointer hover:underline hover:decoration-dotted", a),
                    title: i ? void 0 : "Double-click to edit",
                    children: t
                })
            }
            let e2 = "file",
                e5 = "view";

            function e4(e, t, n, l) {
                let r = t[e];
                if (r) return r;
                let i = l[e];
                if ((null == i ? void 0 : i.type) === "file") return i.name;
                let a = n.get(e);
                return (null == a ? void 0 : a.type) === "file" ? a.name : null
            }

            function e3(e) {
                var t, n;
                let l = new URLSearchParams(null !== (n = null === (t = e.existingParams) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "");
                return (e.sessionId && l.set("sessionId", e.sessionId), e.filePath) ? l.set(e2, encodeURIComponent(e.filePath)) : l.delete(e2), "edit" === e.viewMode ? l.set(e5, "edit") : l.delete(e5), e.debugMermaid && l.set("debug", "mermaid"), l.toString()
            }

            function e6(e, t) {
                let n = e3(t);
                return n ? "/dashboard/skills/".concat(e, "?").concat(n) : "/dashboard/skills/".concat(e)
            }
            let e8 = (e, t) => e.map(e => {
                    if ("file" === e.type) {
                        var n, l;
                        return {
                            ...e,
                            content: null !== (l = null !== (n = t[e.id]) && void 0 !== n ? n : e.content) && void 0 !== l ? l : ""
                        }
                    }
                    return {
                        ...e,
                        children: e.children ? e8(e.children, t) : e.children
                    }
                }),
                e7 = (e, t) => Object.keys(e).sort().reduce((n, l) => {
                    var r, i;
                    let a = e[l];
                    return n[l] = {
                        ...a,
                        content: null !== (i = null !== (r = t[l]) && void 0 !== r ? r : a.content) && void 0 !== i ? i : ""
                    }, n
                }, {}),
                e9 = (e, t, n) => {
                    let l = {
                        treeData: e8(e, n),
                        virtualFiles: e7(t, n)
                    };
                    return {
                        snapshot: l,
                        serialized: JSON.stringify(l)
                    }
                };

            function te(e) {
                var t, n, A, U, R, J, K;
                let {
                    params: X,
                    onClose: Q,
                    onSkillUpdated: ee
                } = e, et = (0, i.useRouter)(), {
                    isBackendAuthenticated: en,
                    isAuthenticating: el
                } = (0, c.a)(), {
                    isMobile: eo
                } = (0, ex.sT)(), ed = (0, z.f)(), {
                    isSuperUser: ec
                } = (0, M.L)(e => ({
                    isSuperUser: e.isSuperUser
                }));
                (0, r.useEffect)(() => {
                    let e = ed.isOpen;
                    return e && ed.setOpen(!1), () => {
                        e && z.f.getState().setOpen(!0)
                    }
                }, []);
                let {
                    data: ey,
                    isLoading: ew,
                    error: ej,
                    isPending: eN
                } = (0, o.U$)(X.id), {
                    data: ek,
                    isLoading: eC,
                    error: eS
                } = (0, o.cd)(X.id), eI = null !== (t = null == ek ? void 0 : ek.instructions) && void 0 !== t ? t : null, eE = null !== (n = null == ek ? void 0 : ek.schema) && void 0 !== n ? n : null, ez = null !== (A = null == ek ? void 0 : ek.vlmrunYaml) && void 0 !== A ? A : null, eF = null == ek ? void 0 : ek.extraFiles, eM = (0, o.iO)(), eD = (0, o.bY)(), {
                    data: eA
                } = (0, s.$r)(), {
                    mutateAsync: eU
                } = (0, o.K)(), eR = ey && eA && ey.org_id === eA.id, [eL, eO] = (0, r.useState)(!1), [eP, eZ] = (0, r.useState)(!1), eJ = (0, r.useCallback)(e => {
                    ey && eD.mutate({
                        skillId: ey.id,
                        data: {
                            name: e
                        }
                    })
                }, [ey, eD]), eq = (0, i.useSearchParams)(), eW = null !== (U = null == eq ? void 0 : eq.toString()) && void 0 !== U ? U : "", eV = null !== (J = null !== (R = null == eq ? void 0 : eq.get("sessionId")) && void 0 !== R ? R : null == ey ? void 0 : ey.session_id) && void 0 !== J ? J : void 0, eB = (null == eq ? void 0 : eq.get("debug")) === "mermaid", eK = null == eq ? void 0 : eq.get(e2), eH = null == eq ? void 0 : eq.get(e5), [e$, eY] = (0, r.useState)(!1), [eG, eX] = (0, r.useState)(() => !(null == eq ? void 0 : eq.get(e2))), [e8, e7] = (0, r.useState)(!1), te = (0, r.useCallback)(async () => {
                    if (ey) {
                        e7(!0);
                        try {
                            let {
                                download_url: e
                            } = await (0, a.Ky)(X.id, eV), t = await fetch(e);
                            if (!t.ok) throw Error("Failed to download skill");
                            let n = await t.blob(),
                                l = URL.createObjectURL(n),
                                r = document.createElement("a");
                            r.href = l, r.download = "".concat((0, ev.H)(ey.name), ".zip"), document.body.appendChild(r), r.click(), document.body.removeChild(r), setTimeout(() => URL.revokeObjectURL(l), 100)
                        } catch (e) {
                            console.error("[SkillDetails] Download failed:", e), E.Am.error("Failed to download skill")
                        } finally {
                            e7(!1)
                        }
                    }
                }, [ey, X.id, eV]), [tn, tl] = (0, r.useState)(!0), [tr, ti] = (0, r.useState)("preview"), [ta, ts] = (0, r.useState)([]), {
                    nodeById: to,
                    fileIds: td,
                    rootIds: tc
                } = (0, r.useMemo)(() => (function(e) {
                    let t = new Map,
                        n = [],
                        l = e.map(e => e.id),
                        r = e => {
                            var l;
                            t.set(e.id, e), "file" === e.type && n.push(e.id), null === (l = e.children) || void 0 === l || l.forEach(r)
                        };
                    return e.forEach(r), {
                        nodeById: t,
                        fileIds: n,
                        rootIds: l
                    }
                })(ta), [ta]), tu = (0, r.useMemo)(() => to.has("skill-scheme-file"), [to]), [tm, tf] = (0, r.useState)(() => new Set(["skill-root"])), tp = (0, r.useMemo)(() => ey ? "skill-editor:".concat(ey.id) : null, [null == ey ? void 0 : ey.id]), th = (0, r.useRef)(1), tg = "pane-1", [tx, tv] = (0, r.useState)(() => [
                    [tg]
                ]), [tb, ty] = (0, r.useState)(() => ({
                    [tg]: ["skill-instructions-file"]
                })), [tw, tj] = (0, r.useState)(() => ({
                    [tg]: "skill-instructions-file"
                })), [tN, tk] = (0, r.useState)(tg), [tC, tS] = (0, r.useState)({}), [tI, tE] = (0, r.useState)({}), t_ = (0, r.useMemo)(() => (0, es.tx)(ta), [ta]), tz = (0, r.useMemo)(() => {
                    let e = [],
                        t = n => {
                            for (let s of n) {
                                var l, r, i, a;
                                if ("file" === s.type && (null === (l = s.mimeType) || void 0 === l ? void 0 : l.startsWith("image/"))) {
                                    let t = null !== (i = null !== (r = tI[s.id]) && void 0 !== r ? r : s.content) && void 0 !== i ? i : "";
                                    if (t.startsWith("data:")) {
                                        let n = null !== (a = t_[s.id]) && void 0 !== a ? a : s.name;
                                        e.push({
                                            id: s.id,
                                            name: s.name,
                                            path: n,
                                            dataUrl: t
                                        })
                                    }
                                }
                                s.children && t(s.children)
                            }
                        };
                    return t(ta), e
                }, [ta, tI, t_]), tF = (0, r.useMemo)(() => {
                    let e = {},
                        t = n => {
                            for (let a of n) {
                                if ("file" === a.type) {
                                    var l, r, i;
                                    let t = null !== (r = null !== (l = tI[a.id]) && void 0 !== l ? l : a.content) && void 0 !== r ? r : "";
                                    if (t.startsWith("data:")) {
                                        let n = null !== (i = t_[a.id]) && void 0 !== i ? i : a.name;
                                        e[n] = t, n !== a.name && void 0 === e[a.name] && (e[a.name] = t)
                                    }
                                }
                                a.children && t(a.children)
                            }
                        };
                    return t(ta), e
                }, [ta, tI, t_]), [tM, tT] = (0, r.useState)(!1), [tD, tA] = (0, r.useState)(null), tU = (0, r.useRef)(null), [tR, tL] = (0, r.useState)(!1), [tO, tP] = (0, r.useState)(!0), tZ = (0, r.useRef)(null), tJ = (0, r.useRef)(null), tq = (0, r.useRef)({}), tW = (0, F.h)(e => e.showExecutionsByDefault), [tV, tB] = (0, r.useState)(tW), [tK, tH] = (0, r.useState)(!1), [t$, tY] = (0, r.useState)(null), tG = (0, r.useRef)(!1);
                (0, r.useEffect)(() => {
                    eo && !tG.current && (tG.current = !0, tl(!1), tB(!1), tP(!1), tY(null))
                }, [eo]);
                let [tX, tQ] = (0, r.useState)(!1), [t0, t1] = (0, r.useState)(!1), t2 = (0, r.useRef)(tN);
                t2.current = tN;
                let t5 = (0, r.useRef)(() => {}),
                    t4 = (0, r.useRef)(320),
                    [t3, t6] = (0, r.useState)(320),
                    t8 = (0, r.useRef)(null),
                    t7 = (0, r.useRef)(tg),
                    t9 = (0, eg.useChatHistory)(),
                    [ne, nt] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    nt(!1), eY(!1), eX(!1)
                }, [X.id]), (0, r.useEffect)(() => {
                    (async () => {
                        eV && !ne && (await t9.refreshChats(), nt(!0))
                    })()
                }, [eV, ne, t9]), (0, r.useEffect)(() => {
                    if (!ne || !eV || t9.isLoading) return;
                    let e = t9.chats.find(e => e.session_id === eV);
                    e && t9.currentChatId !== eV ? t9.selectChat(e) : e || null === t9.currentChatId || t9.clearSelection()
                }, [eV, t9, ne]);
                let nn = (0, r.useRef)(null);
                (0, r.useEffect)(() => {
                    if (!eV || !(null == ey ? void 0 : ey.is_public)) return;
                    let e = t9.chats.find(e => e.session_id === eV);
                    e && !e.is_public && nn.current !== eV && (nn.current = eV, t9.shareChat(eV, !0))
                }, [eV, null == ey ? void 0 : ey.is_public, t9.chats, t9.shareChat]);
                let nl = (0, r.useRef)(null);
                (0, r.useEffect)(() => {
                    if (!ey || eC || nl.current === ey.id) return;
                    nl.current = ey.id;
                    let e = function(e, t, n, l) {
                            let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
                            if (!e) return [];
                            let i = [{
                                id: "skill-instructions-file",
                                name: "SKILL.md",
                                type: "file",
                                content: t || ""
                            }];
                            for (let e of (null !== n && i.push({
                                    id: "skill-scheme-file",
                                    name: n.name,
                                    type: "file",
                                    content: n.content
                                }), null !== l && i.push({
                                    id: "skill-vlmrun-yaml-file",
                                    name: l.name,
                                    type: "file",
                                    content: l.content
                                }), r)) ! function e(t, n, l, r) {
                                let i = n.split("/");
                                if (1 === i.length) {
                                    t.push({
                                        id: "".concat(r, "-").concat(n),
                                        name: n,
                                        type: "file",
                                        content: l.content,
                                        mimeType: l.mimeType
                                    });
                                    return
                                }
                                let a = i[0],
                                    s = i.slice(1).join("/"),
                                    o = t.find(e => "folder" === e.type && e.name === a);
                                o || (o = {
                                    id: "".concat(r, "-folder-").concat(a),
                                    name: a,
                                    type: "folder",
                                    children: []
                                }, t.push(o)), o.children || (o.children = []), e(o.children, s, l, r)
                            }(i, e.name, {
                                content: e.content,
                                mimeType: e.mimeType
                            }, "extra");
                            return [{
                                id: "skill-root",
                                name: e.name,
                                type: "folder",
                                children: i
                            }]
                        }(ey, eI || null, eE || null, ez, eF),
                        t = e,
                        n = {};
                    if (tp) {
                        let r = localStorage.getItem(tp);
                        if (r) try {
                            let i = JSON.parse(r);
                            if ((null == i ? void 0 : i.skillUpdatedAt) && i.skillUpdatedAt === ey.updated_at) {
                                var l;
                                t = Array.isArray(i.treeData) ? i.treeData : e, n = null !== (l = i.virtualFiles) && void 0 !== l ? l : {}, eI && t.length > 0 && (t = t.map(e => "skill-root" === e.id && "folder" === e.type && e.children ? {
                                    ...e,
                                    children: e.children.map(e => "skill-instructions-file" === e.id ? {
                                        ...e,
                                        content: eI
                                    } : e)
                                } : e)), eE && t.length > 0 && (t = t.map(e => {
                                    if ("skill-root" === e.id && "folder" === e.type && e.children) {
                                        let t = e.children.find(e => "skill-scheme-file" === e.id);
                                        return {
                                            ...e,
                                            children: t ? e.children.map(e => "skill-scheme-file" === e.id ? {
                                                ...e,
                                                name: eE.name,
                                                content: eE.content
                                            } : e) : [...e.children, {
                                                id: "skill-scheme-file",
                                                name: eE.name,
                                                type: "file",
                                                content: eE.content
                                            }]
                                        }
                                    }
                                    return e
                                }))
                            }
                        } catch (e) {}
                    }
                    ts(t), tS(n), tE({}), null !== eE && ty(e => {
                        var t;
                        let n = null !== (t = e[tg]) && void 0 !== t ? t : [];
                        return n.includes("skill-scheme-file") ? e : {
                            ...e,
                            [tg]: [...n, "skill-scheme-file"]
                        }
                    });
                    let {
                        snapshot: r,
                        serialized: i
                    } = e9(t, n, {});
                    tU.current = r, tA(i), eY(!0)
                }, [ey, eC, eI, eE, ez, eF, tp]), (0, r.useEffect)(() => {
                    if (!e$ || !ey) return;
                    if (("edit" === eH || "preview" === eH) && ti(eH), !eK) {
                        eX(!0);
                        return
                    }
                    let e = function(e, t, n, l) {
                        let r = function(e) {
                            try {
                                return decodeURIComponent(e)
                            } catch (t) {
                                return e
                            }
                        }(e);
                        for (let [e, n] of Object.entries(t))
                            if (n === r) return e;
                        for (let [e, n] of Object.entries(t))
                            if (n.split("/").pop() === r) return e;
                        for (let [e, t] of Object.entries(l))
                            if ("file" === t.type && t.name === r) return e;
                        for (let [e, t] of n.entries())
                            if ("file" === t.type && t.name === r) return e;
                        return null
                    }(eK, t_, to, tC);
                    e && (tk(tg), ty(t => {
                        var n;
                        let l = null !== (n = t[tg]) && void 0 !== n ? n : [];
                        return l.includes(e) ? t : {
                            ...t,
                            [tg]: [...l, e]
                        }
                    }), tj(t => ({
                        ...t,
                        [tg]: e
                    }))), eX(!0)
                }, [e$, ey, eK, eH, t_, to, tC]);
                let [nr, ni] = (0, r.useState)({
                    draggedTabId: null,
                    draggedFromPaneId: null,
                    dragOverPaneId: null,
                    dragOverPosition: null,
                    isDragging: !1
                }), na = null !== (K = tw[tN]) && void 0 !== K ? K : null;
                (0, r.useEffect)(() => {
                    if (!e$ || !eG) return;
                    let e = na ? e4(na, t_, to, tC) : null;
                    e3({
                        sessionId: eV,
                        filePath: e,
                        viewMode: tr,
                        debugMermaid: eB,
                        existingParams: eq
                    }) !== eW && et.replace(e6(X.id, {
                        sessionId: eV,
                        filePath: e,
                        viewMode: tr,
                        debugMermaid: eB
                    }), {
                        scroll: !1
                    })
                }, [e$, eG, na, tr, eV, t_, to, tC, eB, X.id, et, eq, eW]);
                let ns = (e, t) => {
                        ty(n => {
                            var l;
                            let r = null !== (l = n[e]) && void 0 !== l ? l : [];
                            return r.includes(t) ? n : {
                                ...n,
                                [e]: [...r, t]
                            }
                        }), tj(n => ({
                            ...n,
                            [e]: t
                        }))
                    },
                    no = e => {
                        let t = "file-".concat(Date.now()),
                            n = {
                                id: t,
                                name: "untitled.txt",
                                type: "file",
                                content: ""
                            };
                        ts(t => (0, es.BX)(t, e, n)), ns(tN, t)
                    },
                    nd = e => {
                        let t = "folder-".concat(Date.now()),
                            n = {
                                id: t,
                                name: "New Folder",
                                type: "folder",
                                children: []
                            };
                        ts(t => (0, es.BX)(t, e, n)), tf(e => new Set([...e, t]))
                    },
                    nc = (e, t, n) => {
                        ts(l => {
                            let r = null,
                                i = t => t.filter(t => t.id === e ? (r = t, !1) : (t.children && (t.children = i(t.children)), !0)),
                                a = i(JSON.parse(JSON.stringify(l)));
                            if (!r) return l;
                            let s = e => {
                                if ("inside" === n) return e.map(e => e.id === t && "folder" === e.type ? {
                                    ...e,
                                    children: [...e.children || [], r]
                                } : e.children ? {
                                    ...e,
                                    children: s(e.children)
                                } : e);
                                {
                                    let l = [];
                                    for (let i of e) i.id === t ? "before" === n ? (l.push(r), l.push(i)) : (l.push(i), l.push(r)) : (i.children && (i.children = s(i.children)), l.push(i));
                                    return l
                                }
                            };
                            return s(a)
                        })
                    },
                    nu = (e, t) => {
                        ts(n => {
                            let l = n => n.map(n => n.id === e ? {
                                ...n,
                                name: t
                            } : n.children ? {
                                ...n,
                                children: l(n.children)
                            } : n);
                            return l(n)
                        })
                    },
                    nm = e => {
                        Object.entries(tb).forEach(t => {
                            let [n, l] = t;
                            l.includes(e) && nA(n, e)
                        }), ts(t => {
                            let n = t => t.filter(t => t.id !== e && (t.children && (t.children = n(t.children)), !0));
                            return n(t)
                        }), tS(t => {
                            let {
                                [e]: n, ...l
                            } = t;
                            return l
                        }), tE(t => {
                            let {
                                [e]: n, ...l
                            } = t;
                            return l
                        })
                    },
                    nf = e => {
                        e.preventDefault(), e.stopPropagation(), e.dataTransfer.types.includes("Files") && tT(!0)
                    },
                    np = e => {
                        e.preventDefault(), e.stopPropagation(), e.currentTarget.contains(e.relatedTarget) || tT(!1)
                    },
                    nh = async e => {
                        e.preventDefault(), e.stopPropagation(), tT(!1);
                        let t = Array.from(e.dataTransfer.files);
                        if (0 !== t.length)
                            for (let e of t) try {
                                let t = await nv(e),
                                    n = nx(e),
                                    l = "file-".concat(Date.now(), "-").concat(Math.random().toString(36).slice(2, 11)),
                                    r = {
                                        id: l,
                                        name: (0, ev.H)(e.name),
                                        type: "file",
                                        content: t,
                                        mimeType: n
                                    };
                                ts(e => (0, es.k2)(e, r)), tE(e => ({
                                    ...e,
                                    [l]: t
                                })), ns(tN, l)
                            } catch (t) {
                                console.error("Error reading file ".concat(e.name, ":"), t)
                            }
                    }, ng = async e => {
                        var t;
                        let n = Array.from(null !== (t = e.target.files) && void 0 !== t ? t : []);
                        if (0 === n.length) return;
                        let l = t7.current;
                        for (let e of n) try {
                            let t = await nv(e),
                                n = nx(e),
                                r = "file-".concat(Date.now(), "-").concat(Math.random().toString(36).slice(2, 11)),
                                i = {
                                    id: r,
                                    name: (0, ev.H)(e.name),
                                    type: "file",
                                    content: t,
                                    mimeType: n
                                };
                            ts(e => (0, es.k2)(e, i)), tE(e => ({
                                ...e,
                                [r]: t
                            })), ns(l, r)
                        } catch (t) {
                            console.error("Error reading file ".concat(e.name, ":"), t)
                        }
                        e.target.value = ""
                    }, nx = e => {
                        var t;
                        return e.type ? e.type : ({
                            png: "image/png",
                            jpg: "image/jpeg",
                            jpeg: "image/jpeg",
                            gif: "image/gif",
                            svg: "image/svg+xml",
                            webp: "image/webp",
                            bmp: "image/bmp",
                            ico: "image/x-icon",
                            mp4: "video/mp4",
                            webm: "video/webm",
                            ogg: "video/ogg",
                            mov: "video/quicktime",
                            avi: "video/x-msvideo",
                            pdf: "application/pdf",
                            txt: "text/plain",
                            md: "text/markdown",
                            json: "application/json",
                            js: "text/javascript",
                            ts: "text/typescript",
                            jsx: "text/javascript",
                            tsx: "text/typescript",
                            html: "text/html",
                            css: "text/css",
                            py: "text/x-python",
                            java: "text/x-java",
                            c: "text/x-c",
                            cpp: "text/x-c++",
                            xml: "text/xml"
                        })[(null === (t = e.name.split(".").pop()) || void 0 === t ? void 0 : t.toLowerCase()) || ""] || "text/plain"
                    }, nv = e => new Promise((t, n) => {
                        let l = new FileReader;
                        l.onload = e => {
                            var n;
                            let l = null === (n = e.target) || void 0 === n ? void 0 : n.result;
                            t("string" == typeof l ? l : "")
                        }, l.onerror = () => {
                            n(Error("Failed to read file: ".concat(e.name)))
                        };
                        let r = nx(e),
                            i = r.startsWith("image/"),
                            a = r.startsWith("video/");
                        i || a || "application/pdf" === r ? l.readAsDataURL(e) : l.readAsText(e)
                    }), nb = () => {
                        sessionStorage.getItem("skill-save-redirect") ? (sessionStorage.removeItem("skill-save-redirect"), window.history.go(-2)) : et.back()
                    }, ny = (0, r.useCallback)(async e => {
                        try {
                            let t = await nv(e),
                                n = nx(e),
                                l = (0, ev.H)(e.name),
                                r = "file-".concat(Date.now(), "-").concat(Math.random().toString(36).slice(2, 11)),
                                i = {
                                    id: r,
                                    name: l,
                                    type: "file",
                                    content: t,
                                    mimeType: n
                                };
                            return ts(e => (0, es.k2)(e, i)), tE(e => ({
                                ...e,
                                [r]: t
                            })), ns(tN, r), (0, es.Um)(l, n, l)
                        } catch (e) {
                            return E.Am.error("Failed to read file", {
                                description: e instanceof Error ? e.message : "Read failed"
                            }), ""
                        }
                    }, [tN]), nw = (0, r.useMemo)(() => e9(ta, tC, tI), [ta, tC, tI]), nj = !!tD && nw.serialized !== tD, nN = new Set(["SKILL.md", "schema.json", "vlmrun.yaml"]), nk = (0, r.useMemo)(() => {
                        if (!tD) return [];
                        try {
                            let e = JSON.parse(tD),
                                t = [],
                                n = e => {
                                    for (let r of e)
                                        if ("file" === r.type && nN.has(r.name)) {
                                            var l;
                                            t.push({
                                                id: r.id,
                                                name: r.name,
                                                content: null !== (l = r.content) && void 0 !== l ? l : ""
                                            })
                                        } else r.children && n(r.children)
                                };
                            return n(e.treeData), Object.entries(e.virtualFiles).forEach(e => {
                                let [n, l] = e;
                                if (nN.has(l.name)) {
                                    var r;
                                    t.push({
                                        id: n,
                                        name: l.name,
                                        content: null !== (r = l.content) && void 0 !== r ? r : ""
                                    })
                                }
                            }), t
                        } catch (e) {
                            return []
                        }
                    }, [tD]);
                if ((0, r.useEffect)(() => {
                        let e = e => {
                            if (!(e.metaKey || e.ctrlKey)) return;
                            let t = e.target,
                                n = "INPUT" === t.tagName || "TEXTAREA" === t.tagName || "SELECT" === t.tagName || t.isContentEditable,
                                l = e.key.toLowerCase();
                            if (!n || "s" === l) switch (l) {
                                case "s":
                                    e.shiftKey || (e.preventDefault(), t5.current());
                                    break;
                                case "j":
                                    e.shiftKey || (e.preventDefault(), tB(e => !e));
                                    break;
                                case "b":
                                    e.shiftKey || (e.preventDefault(), tl(e => !e));
                                    break;
                                case "\\":
                                    e.shiftKey || (e.preventDefault(), tP(e => !e));
                                    break;
                                case "i":
                                    e.shiftKey || (e.preventDefault(), tY(e => e === t2.current ? null : t2.current));
                                    break;
                                case "l":
                                    e.shiftKey && (e.preventDefault(), tL(e => !e));
                                    break;
                                case "enter":
                                    e.shiftKey && (e.preventDefault(), tH(!0));
                                    break;
                                case "d":
                                    e.shiftKey && (e.preventDefault(), tQ(!0))
                            }
                        };
                        return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                    }, []), el || !en || ew || eN) return (0, l.jsx)(tt, {});
                if (ej || !ey) return (0, l.jsx)("div", {
                    className: "flex h-full w-full items-center justify-center",
                    children: (0, l.jsx)("div", {
                        className: "text-destructive",
                        children: "Error loading skill details. Please try again."
                    })
                });
                let nC = e => {
                        var t;
                        return e ? null !== (t = to.get(e)) && void 0 !== t ? t : tC[e] : null
                    },
                    nS = e => {
                        var t, n, l;
                        if (!e) return "";
                        let r = null !== (n = null === (t = nC(e)) || void 0 === t ? void 0 : t.content) && void 0 !== n ? n : "";
                        return null !== (l = tI[e]) && void 0 !== l ? l : r
                    },
                    nI = () => (th.current += 1, "pane-".concat(th.current)),
                    nE = e => e.reduce((e, t) => e + t.length, 0),
                    n_ = (e, t) => {
                        let n = e.map(e => e.filter(e => e !== t)).filter(e => e.length > 0);
                        return n.length > 0 ? n : [
                            []
                        ]
                    },
                    nz = (e, t, n) => {
                        var l, r, i, a, s, o, d, c;
                        let {
                            colIndex: u,
                            rowIndex: m
                        } = nU(n, t);
                        return -1 === u ? null !== (d = null === (l = e[0]) || void 0 === l ? void 0 : l[0]) && void 0 !== d ? d : "" : (null === (r = n[u]) || void 0 === r ? void 0 : r[m + 1]) ? n[u][m + 1] : (null === (i = n[u]) || void 0 === i ? void 0 : i[m - 1]) ? n[u][m - 1] : (null === (a = n[u + 1]) || void 0 === a ? void 0 : a[0]) ? n[u + 1][0] : (null === (s = n[u - 1]) || void 0 === s ? void 0 : s[0]) ? n[u - 1][0] : null !== (c = null === (o = e[0]) || void 0 === o ? void 0 : o[0]) && void 0 !== c ? c : ""
                    },
                    nF = e => {
                        tf(t => {
                            let n = new Set(t);
                            return n.has(e) ? n.delete(e) : n.add(e), n
                        })
                    },
                    nM = e => {
                        let t = to.get(e);
                        (null == t ? void 0 : t.type) === "file" && ns(tN, e), (null == t ? void 0 : t.type) === "folder" && nF(e)
                    },
                    nT = e => {
                        if (!tu && ey) {
                            let t = {
                                id: "skill-scheme-file",
                                name: "schema.json",
                                type: "file",
                                content: JSON.stringify({
                                    $schema: "http://json-schema.org/draft-07/schema#",
                                    title: ey.name,
                                    description: ey.description,
                                    type: "object",
                                    properties: {}
                                }, null, 2)
                            };
                            ts(e => e.map(e => {
                                var n;
                                return "skill-root" === e.id && "folder" === e.type ? {
                                    ...e,
                                    children: [...null !== (n = e.children) && void 0 !== n ? n : [], t]
                                } : e
                            })), ns(e, "skill-scheme-file");
                            return
                        }
                        let t = Object.keys(tC).length + 1,
                            n = "untitled-".concat(t),
                            l = {
                                id: n,
                                name: "Untitled ".concat(t),
                                type: "file",
                                content: ""
                            };
                        tS(e => ({
                            ...e,
                            [n]: l
                        })), ns(e, n)
                    },
                    nD = (e, t) => {
                        e && tE(n => ({
                            ...n,
                            [e]: t
                        }))
                    },
                    nA = (e, t) => {
                        var n;
                        let l = null !== (n = tb[e]) && void 0 !== n ? n : [],
                            r = 0 === l.filter(e => e !== t).length,
                            i = nE(tx);
                        if (ty(n => {
                                var l;
                                return {
                                    ...n,
                                    [e]: (null !== (l = n[e]) && void 0 !== l ? l : []).filter(e => e !== t)
                                }
                            }), tj(n => {
                                var r;
                                let i = l.filter(e => e !== t);
                                return {
                                    ...n,
                                    [e]: null !== (r = i[i.length - 1]) && void 0 !== r ? r : null
                                }
                            }), r && i > 1) {
                            let t = n_(tx, e);
                            tv(t), ty(t => {
                                let {
                                    [e]: n, ...l
                                } = t;
                                return l
                            }), tj(t => {
                                let {
                                    [e]: n, ...l
                                } = t;
                                return l
                            }), tN === e && tk(nz(t, e, tx))
                        }
                    },
                    nU = (e, t) => {
                        for (let n = 0; n < e.length; n += 1) {
                            let l = e[n].indexOf(t);
                            if (-1 !== l) return {
                                colIndex: n,
                                rowIndex: l
                            }
                        }
                        return {
                            colIndex: -1,
                            rowIndex: -1
                        }
                    },
                    nR = (e, t, n) => {
                        var l;
                        let r = null !== (l = tb[e]) && void 0 !== l ? l : [],
                            i = r.length <= 1,
                            a = nI();
                        ty(n => {
                            let l = {
                                ...n,
                                [a]: [t]
                            };
                            if (!i) {
                                var r;
                                l[e] = (null !== (r = l[e]) && void 0 !== r ? r : []).filter(e => e !== t)
                            }
                            return l
                        }), tj(n => {
                            let l = {
                                ...n,
                                [a]: t
                            };
                            if (!i && n[e] === t) {
                                var s;
                                let n = r.filter(e => e !== t);
                                l[e] = null !== (s = n[n.length - 1]) && void 0 !== s ? s : null
                            }
                            return l
                        }), tv(t => {
                            let {
                                colIndex: l,
                                rowIndex: r
                            } = nU(t, e);
                            if (-1 === l) return t;
                            let i = t.map(e => [...e]);
                            return "right" === n ? i.splice(l + 1, 0, [a]) : i[l].splice(r + 1, 0, a), i
                        }), tk(a)
                    },
                    nL = (e, t) => {
                        ni({
                            draggedTabId: t,
                            draggedFromPaneId: e,
                            dragOverPaneId: null,
                            dragOverPosition: null,
                            isDragging: !0
                        })
                    },
                    nO = (e, t, n) => {
                        n.preventDefault(), n.dataTransfer.dropEffect = "move", nr.draggedTabId && nr.draggedFromPaneId && ni(n => ({
                            ...n,
                            dragOverPaneId: e,
                            dragOverPosition: t
                        }))
                    },
                    nP = () => {
                        ni(e => ({
                            ...e,
                            dragOverPosition: null
                        }))
                    },
                    nZ = (e, t) => {
                        var n, l, r;
                        if (!nr.draggedTabId || !nr.draggedFromPaneId) return;
                        let i = nr.draggedTabId,
                            a = nr.draggedFromPaneId;
                        if (a === e) {
                            let l = null !== (n = tb[e]) && void 0 !== n ? n : [],
                                r = l.indexOf(i);
                            if (r === t) {
                                nJ();
                                return
                            }
                            let a = [...l];
                            a.splice(r, 1);
                            let s = t;
                            r < t && (s = t - 1), a.splice(s, 0, i), ty(t => ({
                                ...t,
                                [e]: a
                            }))
                        } else {
                            let n = null !== (l = tb[a]) && void 0 !== l ? l : [],
                                s = null !== (r = tb[e]) && void 0 !== r ? r : [],
                                o = n.filter(e => e !== i),
                                d = [...s];
                            d.splice(t, 0, i), ty(t => ({
                                ...t,
                                [a]: o,
                                [e]: d
                            })), tw[a] === i ? tj(t => {
                                var n;
                                return {
                                    ...t,
                                    [a]: null !== (n = o[o.length - 1]) && void 0 !== n ? n : null,
                                    [e]: i
                                }
                            }) : tj(t => ({
                                ...t,
                                [e]: i
                            })), tk(e)
                        }
                        nJ()
                    },
                    nJ = () => {
                        ni({
                            draggedTabId: null,
                            draggedFromPaneId: null,
                            dragOverPaneId: null,
                            dragOverPosition: null,
                            isDragging: !1
                        })
                    },
                    nq = e => {
                        var t;
                        return null !== (t = to.get(e)) && void 0 !== t ? t : tC[e]
                    },
                    nW = async () => {
                        if (ey && nj && !eM.isPending) {
                            if (ey.is_public && !eR) {
                                eO(!0);
                                return
                            }
                            try {
                                var e;
                                let t = ta.find(e => "skill-root" === e.id);
                                if (!t) throw Error("Root node not found");
                                E.Am.info("Packaging skill files...");
                                let n = await (0, ev.R)(t, tI);
                                E.Am.info("Updating skill...");
                                let {
                                    oldId: l,
                                    newSkill: r
                                } = await eM.mutateAsync({
                                    skillId: ey.id,
                                    file: n,
                                    metadata: {
                                        name: ey.name,
                                        description: ey.description,
                                        is_public: ey.is_public,
                                        session_id: null !== (e = ey.session_id) && void 0 !== e ? e : void 0
                                    }
                                });
                                if (localStorage.removeItem("skill-editor:".concat(l)), Q) E.Am.success("Skill saved"), null == ee || ee(l, r), Q();
                                else {
                                    E.Am.success("Navigating to updated skill...");
                                    let e = na ? e4(na, t_, to, tC) : null,
                                        t = e6(r.id, {
                                            sessionId: r.session_id,
                                            filePath: e,
                                            viewMode: tr
                                        });
                                    sessionStorage.setItem("skill-save-redirect", "true"), window.location.href = t
                                }
                            } catch (e) {
                                console.error("[handleSaveChanges] Error:", e), E.Am.error("Failed to save changes", {
                                    description: e instanceof Error ? e.message : "Please try again."
                                })
                            }
                        }
                    }, nV = async () => {
                        if (ey && nj) {
                            eZ(!0);
                            try {
                                let e = ta.find(e => "skill-root" === e.id);
                                if (!e) throw Error("Root node not found");
                                let t = await (0, ev.R)(e, tI),
                                    n = await eU({
                                        skillData: {
                                            name: "".concat(ey.name, " (copy)"),
                                            description: ey.description,
                                            is_public: !1
                                        },
                                        file: t
                                    });
                                if (eO(!1), E.Am.success("Skill copied and saved"), Q) null == ee || ee(ey.id, n), Q();
                                else {
                                    let e = na ? e4(na, t_, to, tC) : null,
                                        t = e6(n.id, {
                                            sessionId: n.session_id,
                                            filePath: e,
                                            viewMode: tr
                                        });
                                    sessionStorage.setItem("skill-save-redirect", "true"), window.location.href = t
                                }
                            } catch (e) {
                                console.error("[handleCopyAndSave] Error:", e), E.Am.error("Failed to copy and save skill", {
                                    description: e instanceof Error ? e.message : "Please try again."
                                })
                            } finally {
                                eZ(!1)
                            }
                        }
                    };
                t5.current = nW;
                let nB = e => {
                        var t, n, r, i, a, s, o, d, c, u, v, b, y, w, j, N, k, C, S, E, z, F, M, T, A, U;
                        let R = null !== (r = tb[e]) && void 0 !== r ? r : [],
                            L = null !== (i = tw[e]) && void 0 !== i ? i : null,
                            O = L ? nq(L) : null,
                            P = null !== (a = null == O ? void 0 : null === (t = O.name) || void 0 === t ? void 0 : t.toLowerCase().endsWith(".md")) && void 0 !== a && a,
                            Z = null !== (s = null == O ? void 0 : null === (n = O.name) || void 0 === n ? void 0 : n.toLowerCase().endsWith(".json")) && void 0 !== s && s,
                            J = /\.(ya?ml)$/i.test(null !== (o = null == O ? void 0 : O.name) && void 0 !== o ? o : ""),
                            q = !tO && (P || Z || J) && R.length > 0;
                        return (0, l.jsxs)("div", {
                            className: (0, _.cn)("flex h-full min-h-0 flex-col overflow-hidden", nr.dragOverPaneId === e && nr.draggedFromPaneId !== e && "ring-1 ring-inset ring-border"),
                            children: [e === tg && (0, l.jsxs)("div", {
                                className: "flex h-9 shrink-0 items-center gap-2 border-b border-border/70 px-3",
                                children: [(0, l.jsx)($.pn, {
                                    delayDuration: 200,
                                    children: (0, l.jsxs)($.u, {
                                        children: [(0, l.jsx)($.aJ, {
                                            asChild: !0,
                                            children: (0, l.jsx)("button", {
                                                type: "button",
                                                onClick: null != Q ? Q : nb,
                                                className: "rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent/40 hover:text-foreground",
                                                children: Q ? (0, l.jsx)(m.Z, {
                                                    className: "size-3.5"
                                                }) : (0, l.jsx)(f.Z, {
                                                    className: "size-3"
                                                })
                                            })
                                        }), (0, l.jsx)($._v, {
                                            side: "bottom",
                                            children: Q ? "Close" : "Go back"
                                        })]
                                    })
                                }), (0, l.jsx)(e1, {
                                    value: ey.name,
                                    onSave: eJ,
                                    disabled: !ec,
                                    className: "text-xs font-semibold text-muted-foreground"
                                }), (0, l.jsxs)(D.z, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () => et.push("/chat?skill_id=".concat(X.id)),
                                    className: "ml-auto h-6 gap-1.5 px-2",
                                    children: [(0, l.jsx)(p.Z, {
                                        className: "size-3.5"
                                    }), "Chat"]
                                }), (0, l.jsxs)(D.z, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () => t1(!0),
                                    className: "h-6 gap-1.5 px-2",
                                    children: [(0, l.jsx)(h.Z, {
                                        className: "size-3.5"
                                    }), "Code"]
                                }), (0, l.jsxs)(D.z, {
                                    variant: "outline",
                                    size: "sm",
                                    className: "h-6 gap-1.5 px-2",
                                    onClick: () => tH(!0),
                                    children: [(0, l.jsx)(g.Z, {
                                        className: "size-3.5"
                                    }), "Run Skill"]
                                }), ec && !ey.is_public && (0, l.jsx)(eb.k, {
                                    skillId: ey.id,
                                    skillName: ey.name,
                                    skillVersion: ey.version,
                                    onDeleted: () => et.push("/dashboard/skills"),
                                    children: (0, l.jsxs)(D.z, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "h-6 gap-1.5 px-2 text-destructive hover:bg-destructive/10 hover:text-destructive",
                                        title: "Delete",
                                        children: [(0, l.jsx)(x.Z, {
                                            className: "size-3.5"
                                        }), "Delete"]
                                    })
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flex h-9 shrink-0 items-center border-b border-border/70 ",
                                children: [(0, l.jsx)(eu, {
                                    className: "flex-1",
                                    paneId: e,
                                    tabs: R,
                                    activeId: L,
                                    onSelect: t => {
                                        tk(e), tj(n => ({
                                            ...n,
                                            [e]: t
                                        }))
                                    },
                                    onClose: nA,
                                    onSplit: nR,
                                    onAddTab: e => {
                                        tk(e), nT(e)
                                    },
                                    showSchemaOption: !tu,
                                    onUploadFiles: e => {
                                        var t;
                                        tk(e), t7.current = e, null === (t = t8.current) || void 0 === t || t.click()
                                    },
                                    getNode: nq,
                                    dragState: nr,
                                    onTabDragStart: nL,
                                    onTabDragOver: nO,
                                    onTabDragLeave: nP,
                                    onTabDrop: nZ,
                                    onTabDragEnd: nJ
                                }), q && (0, l.jsxs)("div", {
                                    className: "flex shrink-0 items-center gap-0.5 px-2",
                                    children: [(0, l.jsx)("button", {
                                        type: "button",
                                        onClick: () => ti("edit"),
                                        className: (0, _.cn)("rounded px-2 py-0.5 text-xs transition-colors", "edit" === tr ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"),
                                        children: P ? "Edit" : "JSON"
                                    }), (0, l.jsx)("button", {
                                        type: "button",
                                        onClick: () => ti("preview"),
                                        className: (0, _.cn)("rounded px-2 py-0.5 text-xs transition-colors", "preview" === tr ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"),
                                        children: P ? "Preview" : "Schema"
                                    })]
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "relative min-h-0 min-w-0 flex-1",
                                children: [(0, l.jsx)(eT, {
                                    isOpen: t$ === e && R.length > 0,
                                    onClose: () => tY(null),
                                    allFiles: [...new Set([...td, ...Object.keys(tC)])].map(e => {
                                        var t, n;
                                        return {
                                            name: null !== (n = null === (t = nC(e)) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e,
                                            content: nS(e)
                                        }
                                    }),
                                    fileName: null !== (d = null == O ? void 0 : O.name) && void 0 !== d ? d : "",
                                    skillName: ey.name,
                                    onApplyChange: (e, t) => {
                                        var n;
                                        let l = [...td, ...Object.keys(tC)],
                                            r = l.find(t => {
                                                var n;
                                                return (null === (n = nC(t)) || void 0 === n ? void 0 : n.name) === e
                                            });
                                        r || (r = "json" === e || (() => {
                                            try {
                                                return JSON.parse(t), !0
                                            } catch (e) {
                                                return !1
                                            }
                                        })() ? l.find(e => {
                                            var t;
                                            return null === (t = nC(e)) || void 0 === t ? void 0 : t.name.endsWith(".json")
                                        }) : l.find(e => {
                                            var t;
                                            return null === (t = nC(e)) || void 0 === t ? void 0 : t.name.endsWith(".md")
                                        })), nD(null !== (n = null != r ? r : L) && void 0 !== n ? n : "", t)
                                    }
                                }), R.length > 0 ? (0, l.jsx)(l.Fragment, {
                                    children: P ? tO ? (0, l.jsxs)(I.eh, {
                                        direction: "horizontal",
                                        className: "h-full",
                                        children: [(0, l.jsx)(I.s_, {
                                            defaultSize: 50,
                                            minSize: 20,
                                            className: "min-w-0",
                                            children: (0, l.jsx)(G.J4, {
                                                value: nS(L),
                                                onChange: e => L && nD(L, e),
                                                isActive: tN === e,
                                                onActivate: () => tk(e),
                                                mimeType: L ? null === (j = nq(L)) || void 0 === j ? void 0 : j.mimeType : void 0,
                                                fileName: L ? null === (N = nq(L)) || void 0 === N ? void 0 : N.name : void 0,
                                                onFileDrop: ny,
                                                imageFiles: tz
                                            })
                                        }), (0, l.jsx)(I.OT, {
                                            className: "relative w-px cursor-col-resize bg-border/40",
                                            children: (0, l.jsx)("div", {
                                                className: "absolute -inset-x-1.5 inset-y-0"
                                            })
                                        }), (0, l.jsx)(I.s_, {
                                            defaultSize: 50,
                                            minSize: 20,
                                            className: "min-w-0",
                                            children: (0, l.jsx)(ea.T, {
                                                value: nS(L),
                                                fileName: L ? null === (k = nq(L)) || void 0 === k ? void 0 : k.name : void 0,
                                                mimeType: L ? null === (C = nq(L)) || void 0 === C ? void 0 : C.mimeType : void 0,
                                                isActive: tN === e,
                                                onActivate: () => tk(e),
                                                onChange: e => L && nD(L, e),
                                                fileMap: tF
                                            })
                                        })]
                                    }) : "edit" === tr ? (0, l.jsx)(G.J4, {
                                        value: nS(L),
                                        onChange: e => L && nD(L, e),
                                        isActive: tN === e,
                                        onActivate: () => tk(e),
                                        mimeType: L ? null === (v = nq(L)) || void 0 === v ? void 0 : v.mimeType : void 0,
                                        fileName: L ? null === (b = nq(L)) || void 0 === b ? void 0 : b.name : void 0,
                                        onFileDrop: ny,
                                        imageFiles: tz
                                    }) : (0, l.jsx)(ea.T, {
                                        value: nS(L),
                                        fileName: L ? null === (y = nq(L)) || void 0 === y ? void 0 : y.name : void 0,
                                        mimeType: L ? null === (w = nq(L)) || void 0 === w ? void 0 : w.mimeType : void 0,
                                        isActive: tN === e,
                                        onActivate: () => tk(e),
                                        onChange: e => L && nD(L, e),
                                        fileMap: tF
                                    }) : Z ? tO ? (0, l.jsxs)(I.eh, {
                                        direction: "horizontal",
                                        className: "h-full",
                                        children: [(0, l.jsx)(I.s_, {
                                            defaultSize: 50,
                                            minSize: 20,
                                            className: "min-w-0",
                                            children: (0, l.jsx)(G.J4, {
                                                ref: t => {
                                                    tq.current[e] = t
                                                },
                                                value: nS(L),
                                                onChange: e => L && nD(L, e),
                                                isActive: tN === e,
                                                onActivate: () => tk(e),
                                                mimeType: L ? null === (z = nq(L)) || void 0 === z ? void 0 : z.mimeType : void 0,
                                                fileName: L ? null === (F = nq(L)) || void 0 === F ? void 0 : F.name : void 0,
                                                onCursorChange: e => {
                                                    var t;
                                                    tZ.current = e, null === (t = tJ.current) || void 0 === t || t.setHighlightedField(e)
                                                },
                                                imageFiles: tz
                                            })
                                        }), (0, l.jsx)(I.OT, {
                                            className: "relative w-px cursor-col-resize bg-border/40",
                                            children: (0, l.jsx)("div", {
                                                className: "absolute -inset-x-1.5 inset-y-0"
                                            })
                                        }), (0, l.jsx)(I.s_, {
                                            defaultSize: 50,
                                            minSize: 20,
                                            className: "min-w-0",
                                            children: (0, l.jsx)("div", {
                                                className: "h-full overflow-hidden p-4",
                                                onClick: () => tk(e),
                                                children: (0, l.jsx)(Y.Z, {
                                                    ref: tJ,
                                                    schema: (() => {
                                                        try {
                                                            return JSON.parse(nS(L))
                                                        } catch (e) {
                                                            return {}
                                                        }
                                                    })(),
                                                    mode: "editable",
                                                    showModeBadge: !1,
                                                    showTabSwitch: !1,
                                                    onSchemaUpdate: e => L && nD(L, JSON.stringify(e, null, 2)),
                                                    onFieldClick: t => {
                                                        var n, l;
                                                        tZ.current = t, null === (n = tJ.current) || void 0 === n || n.setHighlightedField(t), null === (l = tq.current[e]) || void 0 === l || l.scrollToKey(t)
                                                    }
                                                })
                                            })
                                        })]
                                    }) : "edit" === tr ? (0, l.jsx)(G.J4, {
                                        value: nS(L),
                                        onChange: e => L && nD(L, e),
                                        isActive: tN === e,
                                        onActivate: () => tk(e),
                                        mimeType: L ? null === (S = nq(L)) || void 0 === S ? void 0 : S.mimeType : void 0,
                                        fileName: L ? null === (E = nq(L)) || void 0 === E ? void 0 : E.name : void 0,
                                        imageFiles: tz
                                    }) : (0, l.jsx)("div", {
                                        className: "h-full overflow-auto p-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                                        onClick: () => tk(e),
                                        children: (0, l.jsx)(Y.Z, {
                                            schema: (() => {
                                                try {
                                                    return JSON.parse(nS(L))
                                                } catch (e) {
                                                    return {}
                                                }
                                            })(),
                                            mode: "editable",
                                            showModeBadge: !1,
                                            showTabSwitch: !1,
                                            onSchemaUpdate: e => L && nD(L, JSON.stringify(e, null, 2))
                                        })
                                    }) : J ? tO ? (0, l.jsxs)(I.eh, {
                                        direction: "horizontal",
                                        className: "h-full",
                                        children: [(0, l.jsx)(I.s_, {
                                            defaultSize: 50,
                                            minSize: 20,
                                            className: "min-w-0",
                                            children: (0, l.jsx)(G.J4, {
                                                value: nS(L),
                                                onChange: e => L && nD(L, e),
                                                isActive: tN === e,
                                                onActivate: () => tk(e),
                                                mimeType: L ? null === (A = nq(L)) || void 0 === A ? void 0 : A.mimeType : void 0,
                                                fileName: L ? null === (U = nq(L)) || void 0 === U ? void 0 : U.name : void 0,
                                                imageFiles: tz
                                            })
                                        }), (0, l.jsx)(I.OT, {
                                            className: "relative w-px cursor-col-resize bg-border/40",
                                            children: (0, l.jsx)("div", {
                                                className: "absolute -inset-x-1.5 inset-y-0"
                                            })
                                        }), (0, l.jsx)(I.s_, {
                                            defaultSize: 50,
                                            minSize: 20,
                                            className: "min-w-0",
                                            children: (0, l.jsx)("div", {
                                                className: "h-full overflow-hidden p-4",
                                                onClick: () => tk(e),
                                                children: (0, l.jsx)(e0.N, {
                                                    value: nS(L),
                                                    debug: eB
                                                })
                                            })
                                        })]
                                    }) : "edit" === tr ? (0, l.jsx)(G.J4, {
                                        value: nS(L),
                                        onChange: e => L && nD(L, e),
                                        isActive: tN === e,
                                        onActivate: () => tk(e),
                                        mimeType: L ? null === (M = nq(L)) || void 0 === M ? void 0 : M.mimeType : void 0,
                                        fileName: L ? null === (T = nq(L)) || void 0 === T ? void 0 : T.name : void 0,
                                        imageFiles: tz
                                    }) : (0, l.jsx)("div", {
                                        className: "h-full overflow-auto p-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                                        onClick: () => tk(e),
                                        children: (0, l.jsx)(e0.N, {
                                            value: nS(L),
                                            debug: eB
                                        })
                                    }) : (0, l.jsx)(G.J4, {
                                        value: nS(L),
                                        onChange: e => L && nD(L, e),
                                        isActive: tN === e,
                                        onActivate: () => tk(e),
                                        mimeType: L ? null === (c = nq(L)) || void 0 === c ? void 0 : c.mimeType : void 0,
                                        fileName: L ? null === (u = nq(L)) || void 0 === u ? void 0 : u.name : void 0,
                                        imageFiles: tz,
                                        codeChrome: !0
                                    })
                                }) : (0, l.jsx)("div", {
                                    className: (0, _.cn)("flex h-full flex-col items-center justify-center gap-3 text-sm text-muted-foreground", tN === e && "bg-white"),
                                    onClick: () => tk(e),
                                    children: (0, l.jsx)("span", {
                                        children: "Choose a file to start editing."
                                    })
                                })]
                            })]
                        })
                    },
                    nK = [{
                        label: "Name",
                        value: (0, l.jsx)(e1, {
                            value: ey.name,
                            onSave: eJ,
                            disabled: !ec,
                            className: "text-xs"
                        })
                    }, {
                        label: "Version",
                        value: (0, l.jsx)(ep.O, {
                            version: ey.version
                        })
                    }, {
                        label: "Visibility",
                        value: (0, l.jsx)(T.C, {
                            variant: ey.is_public ? "default" : "secondary",
                            className: "h-5 text-xs font-medium",
                            children: ey.is_public ? "Public" : "Private"
                        })
                    }, {
                        label: "Description",
                        value: ey.description || "No description"
                    }, {
                        label: "Created",
                        value: ey.created_at ? (0, u.Z)((0, d.kT)(ey.created_at), "MMM d, h:mm a") : "N/A"
                    }, {
                        label: "Updated",
                        value: ey.updated_at ? (0, u.Z)((0, d.kT)(ey.updated_at), "MMM d, h:mm a") : "N/A"
                    }];
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("input", {
                        ref: t8,
                        type: "file",
                        multiple: !0,
                        className: "hidden",
                        onChange: ng
                    }), (0, l.jsxs)("div", {
                        className: "flex h-full w-full",
                        children: [tR && eV && (eo ? (0, l.jsx)(W.dy, {
                            open: tR,
                            onOpenChange: e => !e && tL(!1),
                            children: (0, l.jsx)(W.sc, {
                                className: "flex h-[80dvh] flex-col gap-0 overflow-hidden p-0",
                                children: (0, l.jsx)(eh.f, {
                                    sessionId: eV,
                                    onArtifactSelected: () => {},
                                    onStreamingStart: () => {},
                                    onStreamingEnd: () => {},
                                    onConversationUpdate: () => {},
                                    headerVisible: !1,
                                    isArtifactPanelOpen: !1,
                                    onArtifactPanelClose: () => {},
                                    isSidebarOpen: !1,
                                    useCaseButtonOffsetPx: 0,
                                    showPublicNewChatLink: !1,
                                    lockdownView: !1,
                                    showLogo: !1,
                                    showInputBanner: !1,
                                    showModeLabels: !1,
                                    hideSkillSelector: !0
                                }, "skill-".concat(X.id, "-").concat(eV))
                            })
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                style: {
                                    width: t3
                                },
                                className: "flex h-full shrink-0 flex-col bg-background",
                                children: (0, l.jsx)(eh.f, {
                                    sessionId: eV,
                                    onArtifactSelected: () => {},
                                    onStreamingStart: () => {},
                                    onStreamingEnd: () => {},
                                    onConversationUpdate: () => {},
                                    headerVisible: !1,
                                    isArtifactPanelOpen: !1,
                                    onArtifactPanelClose: () => {},
                                    isSidebarOpen: !1,
                                    useCaseButtonOffsetPx: 0,
                                    showPublicNewChatLink: !1,
                                    lockdownView: !1,
                                    showLogo: !1,
                                    showInputBanner: !1,
                                    showModeLabels: !1,
                                    hideSkillSelector: !0
                                }, "skill-".concat(X.id, "-").concat(eV))
                            }), (0, l.jsx)("div", {
                                className: "group relative w-px shrink-0 cursor-col-resize bg-border/70",
                                onPointerDown: e => {
                                    e.preventDefault();
                                    let t = e.clientX,
                                        n = t4.current,
                                        l = e => {
                                            let l = Math.max(200, Math.min(800, n + (e.clientX - t)));
                                            t4.current = l, t6(l)
                                        },
                                        r = () => {
                                            document.removeEventListener("pointermove", l), document.removeEventListener("pointerup", r)
                                        };
                                    document.addEventListener("pointermove", l), document.addEventListener("pointerup", r)
                                },
                                children: (0, l.jsx)("div", {
                                    className: "absolute -inset-x-2 inset-y-0 w-4"
                                })
                            })]
                        })), (0, l.jsxs)("div", {
                            className: "relative flex h-full min-w-0 flex-1 flex-col bg-white",
                            children: [(0, l.jsx)("div", {
                                className: "min-h-0 flex-1 overflow-hidden",
                                children: (0, l.jsx)(I.eh, {
                                    direction: "horizontal",
                                    className: "size-full min-w-0",
                                    children: tx.map((e, t) => (0, l.jsxs)(r.Fragment, {
                                        children: [(0, l.jsx)(I.s_, {
                                            defaultSize: 100 / tx.length,
                                            minSize: 15,
                                            className: "flex min-w-0 flex-col",
                                            children: e.length > 1 ? (0, l.jsx)(I.eh, {
                                                direction: "vertical",
                                                className: "h-full",
                                                children: e.map((t, n) => (0, l.jsxs)(r.Fragment, {
                                                    children: [(0, l.jsx)(I.s_, {
                                                        defaultSize: 100 / e.length,
                                                        minSize: 12,
                                                        className: "flex min-h-0 flex-col",
                                                        children: nB(t)
                                                    }), n < e.length - 1 && (0, l.jsx)(I.OT, {
                                                        className: "h-px cursor-row-resize bg-border/40 hover:bg-border/60"
                                                    })]
                                                }, t))
                                            }) : nB(e[0])
                                        }), t < tx.length - 1 && (0, l.jsx)(I.OT, {
                                            className: "w-px cursor-col-resize bg-border/40 hover:bg-border/60"
                                        })]
                                    }, "col-".concat(t)))
                                })
                            }), tV && (eo ? (0, l.jsx)(W.dy, {
                                open: tV,
                                onOpenChange: e => !e && tB(!1),
                                children: (0, l.jsxs)(W.sc, {
                                    className: "flex h-[50dvh] flex-col gap-0 overflow-hidden p-0",
                                    children: [(0, l.jsx)("div", {
                                        className: "flex h-[41px] shrink-0 items-center border-b border-border/70",
                                        children: (0, l.jsx)(H.mQ, {
                                            value: "executions",
                                            className: "flex min-w-0 flex-1",
                                            children: (0, l.jsx)(H.dr, {
                                                className: "h-[41px] flex-1 justify-start rounded-none bg-transparent p-0",
                                                children: (0, l.jsx)(H.SP, {
                                                    value: "executions",
                                                    className: "h-[40px] shrink-0 rounded-none border-r border-border/70 px-3 text-xs shadow-none data-[state=active]:bg-white data-[state=active]:text-[#1D4FD8] data-[state=active]:shadow-none",
                                                    children: "Runs"
                                                })
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "flex min-h-0 flex-1 flex-col overflow-hidden",
                                        children: (0, l.jsx)(eQ, {
                                            skillId: X.id
                                        })
                                    })]
                                })
                            }) : (0, l.jsxs)("div", {
                                style: {
                                    height: "calc(40% - 50px)"
                                },
                                className: "flex shrink-0 flex-col overflow-hidden border-t border-border/70 bg-white",
                                children: [(0, l.jsx)("div", {
                                    className: "flex h-[41px] shrink-0 items-center border-b border-border/70",
                                    children: (0, l.jsx)(H.mQ, {
                                        value: "executions",
                                        className: "flex min-w-0 flex-1",
                                        children: (0, l.jsx)(H.dr, {
                                            className: "h-[41px] flex-1 justify-start rounded-none bg-transparent p-0",
                                            children: (0, l.jsx)(H.SP, {
                                                value: "executions",
                                                className: "h-[40px] shrink-0 rounded-none border-r border-border/70 px-3 text-xs shadow-none data-[state=active]:bg-white data-[state=active]:text-[#1D4FD8] data-[state=active]:shadow-none",
                                                children: "Runs"
                                            })
                                        })
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "flex min-h-0 flex-1 flex-col overflow-hidden",
                                    children: (0, l.jsx)(eQ, {
                                        skillId: X.id
                                    })
                                })]
                            })), (0, l.jsx)("div", {
                                className: "flex h-9 items-center gap-0.5 border-t border-border/70 bg-white px-2",
                                children: (0, l.jsxs)($.pn, {
                                    delayDuration: 200,
                                    children: [eV && (0, l.jsxs)($.u, {
                                        children: [(0, l.jsx)($.aJ, {
                                            asChild: !0,
                                            children: (0, l.jsx)("button", {
                                                type: "button",
                                                onClick: () => tL(e => !e),
                                                "aria-pressed": tR,
                                                className: (0, _.cn)("rounded-[10px] p-1.5 text-muted-foreground transition-colors", tR ? "bg-muted text-foreground" : "hover:bg-muted/70 hover:text-foreground"),
                                                children: (0, l.jsx)(v.Z, {
                                                    className: "size-4"
                                                })
                                            })
                                        }), (0, l.jsx)($._v, {
                                            side: "top",
                                            children: tR ? "Hide chat (⌘⇧L)" : "Show chat (⌘⇧L)"
                                        })]
                                    }), (0, l.jsxs)($.u, {
                                        children: [(0, l.jsx)($.aJ, {
                                            asChild: !0,
                                            children: (0, l.jsx)("button", {
                                                type: "button",
                                                onClick: () => tB(e => !e),
                                                "aria-pressed": tV,
                                                className: (0, _.cn)("rounded-[10px] p-1.5 text-muted-foreground transition-colors", tV ? "bg-muted text-foreground" : "hover:bg-muted/70 hover:text-foreground"),
                                                children: (0, l.jsx)(b.Z, {
                                                    className: "size-4"
                                                })
                                            })
                                        }), (0, l.jsx)($._v, {
                                            side: "top",
                                            children: tV ? "Hide executions (⌘J)" : "Show executions (⌘J)"
                                        })]
                                    }), (0, l.jsxs)($.u, {
                                        children: [(0, l.jsx)($.aJ, {
                                            asChild: !0,
                                            children: (0, l.jsx)("button", {
                                                type: "button",
                                                onClick: () => tl(e => !e),
                                                "aria-pressed": tn,
                                                className: (0, _.cn)("rounded-[10px] p-1.5 text-muted-foreground transition-colors", tn ? "bg-muted text-foreground" : "hover:bg-muted/70 hover:text-foreground"),
                                                children: (0, l.jsx)(y.Z, {
                                                    className: "size-4"
                                                })
                                            })
                                        }), (0, l.jsx)($._v, {
                                            side: "top",
                                            children: tn ? "Hide file tree (⌘B)" : "Show file tree (⌘B)"
                                        })]
                                    }), (0, l.jsxs)($.u, {
                                        children: [(0, l.jsx)($.aJ, {
                                            asChild: !0,
                                            children: (0, l.jsx)("button", {
                                                type: "button",
                                                onClick: () => tY(t$ === tN ? null : tN),
                                                "aria-pressed": !!t$,
                                                className: (0, _.cn)("ml-auto rounded-[10px] p-1.5 text-muted-foreground transition-colors", t$ ? "bg-muted text-foreground" : "hover:bg-muted/70 hover:text-foreground"),
                                                children: (0, l.jsx)(w.Z, {
                                                    className: "size-4"
                                                })
                                            })
                                        }), (0, l.jsx)($._v, {
                                            side: "top",
                                            children: t$ ? "Hide AI copilot (⌘I)" : "AI copilot (⌘I)"
                                        })]
                                    }), !eo && (0, l.jsxs)($.u, {
                                        children: [(0, l.jsx)($.aJ, {
                                            asChild: !0,
                                            children: (0, l.jsx)("button", {
                                                type: "button",
                                                onClick: () => tP(e => !e),
                                                "aria-pressed": tO,
                                                className: (0, _.cn)("rounded-[10px] p-1.5 text-muted-foreground transition-colors", tO ? "bg-muted text-foreground" : "hover:bg-muted/70 hover:text-foreground"),
                                                children: tO ? (0, l.jsx)(j.Z, {
                                                    className: "size-4"
                                                }) : (0, l.jsx)(N.Z, {
                                                    className: "size-4"
                                                })
                                            })
                                        }), (0, l.jsx)($._v, {
                                            side: "top",
                                            children: tO ? "Single view (⌘\\)" : "Split view (⌘\\)"
                                        })]
                                    })]
                                })
                            }), nj && (0, l.jsxs)("div", {
                                className: (0, _.cn)("pointer-events-none absolute bottom-4 left-1/2 z-20 flex h-9 -translate-x-1/2 items-center rounded-full border border-border/70 bg-white shadow-lg", eo ? "gap-1.5 px-2" : "gap-3 px-3"),
                                children: [(0, l.jsxs)("span", {
                                    className: "inline-flex items-center gap-1 text-xs text-muted-foreground",
                                    children: [!eo && "Unsaved changes", (0, l.jsx)($.pn, {
                                        delayDuration: 200,
                                        children: (0, l.jsxs)($.u, {
                                            children: [(0, l.jsx)($.aJ, {
                                                asChild: !0,
                                                children: (0, l.jsx)("button", {
                                                    type: "button",
                                                    onClick: () => tQ(!0),
                                                    className: "pointer-events-auto ml-0.5 rounded p-0.5 transition-colors hover:text-foreground",
                                                    children: (0, l.jsx)(k.Z, {
                                                        className: "size-3"
                                                    })
                                                })
                                            }), (0, l.jsx)($._v, {
                                                side: "top",
                                                children: "View diff"
                                            })]
                                        })
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "flex items-center gap-2 text-xs",
                                    children: [(0, l.jsx)("button", {
                                        type: "button",
                                        onClick: () => {
                                            tU.current && (ts(tU.current.treeData), tS(tU.current.virtualFiles), tE({}))
                                        },
                                        disabled: eM.isPending,
                                        className: (0, _.cn)("pointer-events-auto rounded-full px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors", eM.isPending ? "cursor-not-allowed opacity-60" : "hover:bg-accent/40 hover:text-foreground"),
                                        children: "Reset"
                                    }), (0, l.jsx)("button", {
                                        type: "button",
                                        onClick: nW,
                                        disabled: eM.isPending,
                                        className: (0, _.cn)("pointer-events-auto rounded-full bg-[#1D4FD8] px-2.5 py-1 text-xs font-semibold text-white transition-colors", eM.isPending ? "cursor-not-allowed opacity-60" : "hover:bg-[#193FB0]"),
                                        children: eM.isPending ? "Saving..." : "Save"
                                    })]
                                })]
                            })]
                        }), tn && (eo ? (0, l.jsx)(B.yo, {
                            open: tn,
                            onOpenChange: e => !e && tl(!1),
                            children: (0, l.jsxs)(B.ue, {
                                side: "right",
                                showCloseButton: !1,
                                className: "flex w-72 flex-col gap-0 p-0",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex h-9 items-center justify-between border-b border-border/70 px-3 text-xs font-semibold text-muted-foreground",
                                    children: [(0, l.jsx)("span", {
                                        children: "Files"
                                    }), (0, l.jsxs)(D.z, {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: te,
                                        disabled: e8,
                                        className: "h-6 gap-1.5 px-2 text-foreground",
                                        children: [e8 ? (0, l.jsx)(C.Z, {
                                            className: "size-3.5 animate-spin"
                                        }) : (0, l.jsx)(S.Z, {
                                            className: "size-3.5"
                                        }), "Download"]
                                    })]
                                }), (0, l.jsxs)(L, {
                                    children: [(0, l.jsx)(O, {
                                        asChild: !0,
                                        children: (0, l.jsxs)("div", {
                                            className: "relative min-h-0 flex-1",
                                            onDragOver: nf,
                                            onDragLeave: np,
                                            onDrop: nh,
                                            children: [tM && (0, l.jsx)("div", {
                                                className: "absolute inset-0 z-10 bg-accent/30"
                                            }), (0, l.jsx)(V.x, {
                                                className: "h-full [&>[data-radix-scroll-area-viewport]>div]:!block",
                                                children: (0, l.jsx)("div", {
                                                    className: "min-h-full p-2",
                                                    children: ta.map(e => (0, l.jsx)(er, {
                                                        node: e,
                                                        level: 0,
                                                        expandedIds: tm,
                                                        onToggle: nF,
                                                        onSelect: nM,
                                                        selectedFileId: na,
                                                        onCreateFile: no,
                                                        onCreateFolder: nd,
                                                        onMoveNode: nc,
                                                        onRename: nu,
                                                        onDelete: nm
                                                    }, e.id))
                                                })
                                            })]
                                        })
                                    }), (0, l.jsxs)(P, {
                                        children: [(0, l.jsx)(Z, {
                                            onSelect: () => no("skill-root"),
                                            children: "New File"
                                        }), (0, l.jsx)(Z, {
                                            onSelect: () => nd("skill-root"),
                                            children: "New Folder"
                                        })]
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "border-t border-border/70",
                                    children: (0, l.jsx)(ei, {
                                        rows: nK
                                    })
                                })]
                            })
                        }) : (0, l.jsxs)("div", {
                            className: "flex h-full w-64 shrink-0 flex-col border-l border-border/70bg-[#FBFBFB]",
                            children: [(0, l.jsxs)("div", {
                                className: "flex h-9 items-center justify-between border-b border-border/70 px-3 text-xs font-semibold text-muted-foreground",
                                children: [(0, l.jsx)("span", {
                                    children: "Files"
                                }), (0, l.jsx)(D.z, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: te,
                                    disabled: e8,
                                    className: "h-6 gap-1.5 px-2 text-foreground",
                                    children: e8 ? (0, l.jsx)(C.Z, {
                                        className: "size-3.5 animate-spin"
                                    }) : (0, l.jsx)(S.Z, {
                                        className: "size-3.5"
                                    })
                                })]
                            }), (0, l.jsxs)(I.eh, {
                                direction: "vertical",
                                className: "min-h-0 flex-1",
                                children: [(0, l.jsx)(I.s_, {
                                    defaultSize: 60,
                                    minSize: 25,
                                    className: "min-h-0",
                                    children: (0, l.jsxs)(L, {
                                        children: [(0, l.jsx)(O, {
                                            asChild: !0,
                                            children: (0, l.jsxs)("div", {
                                                className: "relative h-full",
                                                onDragOver: nf,
                                                onDragLeave: np,
                                                onDrop: nh,
                                                children: [tM && (0, l.jsx)("div", {
                                                    className: "absolute inset-0 z-10 bg-accent/30"
                                                }), (0, l.jsx)(V.x, {
                                                    className: "h-full [&>[data-radix-scroll-area-viewport]>div]:!block",
                                                    children: (0, l.jsx)("div", {
                                                        className: "min-h-full p-2",
                                                        children: ta.map(e => (0, l.jsx)(er, {
                                                            node: e,
                                                            level: 0,
                                                            expandedIds: tm,
                                                            onToggle: nF,
                                                            onSelect: nM,
                                                            selectedFileId: na,
                                                            onCreateFile: no,
                                                            onCreateFolder: nd,
                                                            onMoveNode: nc,
                                                            onRename: nu,
                                                            onDelete: nm
                                                        }, e.id))
                                                    })
                                                })]
                                            })
                                        }), (0, l.jsxs)(P, {
                                            children: [(0, l.jsx)(Z, {
                                                onSelect: () => no("skill-root"),
                                                children: "New File"
                                            }), (0, l.jsx)(Z, {
                                                onSelect: () => nd("skill-root"),
                                                children: "New Folder"
                                            })]
                                        })]
                                    })
                                }), (0, l.jsx)(I.OT, {
                                    className: "relative h-px cursor-row-resize bg-border/70"
                                }), (0, l.jsx)(I.s_, {
                                    defaultSize: 40,
                                    minSize: 15,
                                    className: "min-h-0",
                                    children: (0, l.jsx)(ei, {
                                        rows: nK
                                    })
                                })]
                            })]
                        }))]
                    }), (0, l.jsx)(em.QA, {
                        open: t0,
                        onOpenChange: t1,
                        skillName: ey.name,
                        skillVersion: ey.version
                    }), (0, l.jsx)(e_, {
                        open: tX,
                        onClose: () => tQ(!1),
                        skillName: ey.name,
                        originalFiles: nk,
                        currentFiles: [...new Set([...td, ...Object.keys(tC)])].map(e => {
                            var t, n;
                            return {
                                id: e,
                                name: null !== (n = null === (t = nC(e)) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e,
                                content: nS(e)
                            }
                        }).filter(e => nN.has(e.name))
                    }), (0, l.jsx)(ef.l, {
                        open: tK,
                        onOpenChange: tH,
                        defaultSkill: null != ey ? ey : void 0
                    }), (0, l.jsx)(q.Vq, {
                        open: eL,
                        onOpenChange: eO,
                        children: (0, l.jsxs)(q.cZ, {
                            className: "sm:max-w-[425px]",
                            children: [(0, l.jsxs)(q.fK, {
                                children: [(0, l.jsx)(q.$N, {
                                    children: "Copy skill to save?"
                                }), (0, l.jsx)(q.Be, {
                                    className: "pt-2",
                                    children: "This is a public skill. A copy will be added to your workspace so you can save your edits."
                                })]
                            }), (0, l.jsxs)(q.cN, {
                                className: "flex-col gap-2 sm:flex-row",
                                children: [(0, l.jsx)(D.z, {
                                    variant: "outline",
                                    onClick: () => eO(!1),
                                    disabled: eP,
                                    className: "w-full sm:w-auto",
                                    children: "Cancel"
                                }), (0, l.jsx)(D.z, {
                                    onClick: nV,
                                    disabled: eP,
                                    className: "w-full sm:w-auto",
                                    children: eP ? "Copying..." : "Copy & save"
                                })]
                            })]
                        })
                    })]
                })
            }

            function tt() {
                return (0, l.jsxs)("div", {
                    className: "flex h-full w-full",
                    children: [(0, l.jsx)("div", {
                        className: "flex h-full w-1/3 shrink-0 flex-col border-r border-border/70 bg-background",
                        children: (0, l.jsxs)("div", {
                            className: "flex-1 space-y-4 p-4",
                            children: [(0, l.jsx)(K.O, {
                                className: "h-20 w-full"
                            }), (0, l.jsx)(K.O, {
                                className: "h-16 w-full"
                            }), (0, l.jsx)(K.O, {
                                className: "h-20 w-full"
                            }), (0, l.jsx)(K.O, {
                                className: "h-16 w-full"
                            })]
                        })
                    }), (0, l.jsxs)("div", {
                        className: "relative flex h-full flex-1 flex-col bg-background",
                        children: [(0, l.jsxs)("div", {
                            className: "flex h-9 items-center border-b border-border/70 bg-[#FBFBFB]",
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center gap-2 border-r border-border/70 px-3",
                                children: [(0, l.jsx)(K.O, {
                                    className: "size-3 rounded-sm"
                                }), (0, l.jsx)(K.O, {
                                    className: "h-[41px] w-32"
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flex items-center gap-1 px-2",
                                children: [(0, l.jsx)(K.O, {
                                    className: "h-6 w-24 rounded-sm"
                                }), (0, l.jsx)(K.O, {
                                    className: "h-6 w-24 rounded-sm"
                                })]
                            })]
                        }), (0, l.jsx)("div", {
                            className: "flex-1 p-4",
                            children: (0, l.jsx)(K.O, {
                                className: "size-full"
                            })
                        }), (0, l.jsx)("div", {
                            className: "mt-auto flex h-9 items-center justify-end gap-2 border-t border-border/70 bg-white px-2",
                            children: (0, l.jsx)(K.O, {
                                className: "size-7 rounded-md"
                            })
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "flex h-full w-64 shrink-0 flex-col border-l border-border/70 bg-[#FBFBFB]",
                        children: [(0, l.jsx)("div", {
                            className: "flex h-9 items-center justify-between border-b border-border/70 px-3",
                            children: (0, l.jsx)(K.O, {
                                className: "h-[41px] w-12"
                            })
                        }), (0, l.jsxs)("div", {
                            className: "flex-1 space-y-2 p-2",
                            children: [(0, l.jsx)(K.O, {
                                className: "h-6 w-full"
                            }), (0, l.jsx)(K.O, {
                                className: "h-6 w-full"
                            }), (0, l.jsx)(K.O, {
                                className: "h-6 w-full"
                            }), (0, l.jsx)(K.O, {
                                className: "h-6 w-full"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "space-y-2 border-t border-border/70 p-3",
                            children: [(0, l.jsx)(K.O, {
                                className: "h-[41px] w-16"
                            }), (0, l.jsx)(K.O, {
                                className: "h-3 w-full"
                            }), (0, l.jsx)(K.O, {
                                className: "h-3 w-full"
                            }), (0, l.jsx)(K.O, {
                                className: "h-3 w-full"
                            })]
                        })]
                    })]
                })
            }
        },
        6483: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return d
                }
            });
            var l = n(57437),
                r = n(2265),
                i = n(91141),
                a = n(76865),
                s = n(51817),
                o = n(37099);

            function d(e) {
                let {
                    skillId: t,
                    skillName: n,
                    skillVersion: d,
                    onDeleted: c,
                    children: u
                } = e, [m, f] = (0, r.useState)(!1), p = (0, i.ah)(), h = async () => {
                    try {
                        await p.mutateAsync(t), f(!1), null == c || c()
                    } catch (e) {}
                };
                return (0, l.jsx)("span", {
                    onClick: e => e.stopPropagation(),
                    onPointerDown: e => e.stopPropagation(),
                    children: (0, l.jsxs)(o.aR, {
                        open: m,
                        onOpenChange: e => {
                            p.isPending || f(e)
                        },
                        children: [(0, l.jsx)(o.vW, {
                            asChild: !0,
                            children: u
                        }), (0, l.jsxs)(o._T, {
                            children: [(0, l.jsxs)(o.fY, {
                                children: [(0, l.jsxs)(o.f$, {
                                    className: "flex items-center gap-2",
                                    children: [(0, l.jsx)(a.Z, {
                                        className: "size-5 text-destructive"
                                    }), "Delete Skill"]
                                }), (0, l.jsxs)(o.yT, {
                                    className: "space-y-2",
                                    children: [(0, l.jsxs)("p", {
                                        className: "break-all",
                                        children: ["Are you sure you want to  delete ", (0, l.jsx)("strong", {
                                            children: n
                                        }), d && (0, l.jsxs)(l.Fragment, {
                                            children: [" version ", (0, l.jsx)("code", {
                                                className: "rounded bg-muted px-1 py-0.5 font-mono text-xs",
                                                children: d
                                            })]
                                        }), "?"]
                                    }), (0, l.jsx)("p", {
                                        className: "text-sm font-medium text-destructive",
                                        children: "This action cannot be undone."
                                    })]
                                })]
                            }), (0, l.jsxs)(o.xo, {
                                children: [(0, l.jsx)(o.le, {
                                    disabled: p.isPending,
                                    children: "Cancel"
                                }), (0, l.jsxs)(o.OL, {
                                    onClick: e => {
                                        e.preventDefault(), h()
                                    },
                                    disabled: p.isPending,
                                    className: "gap-2 bg-destructive text-destructive-foreground hover:bg-destructive/90",
                                    children: [p.isPending && (0, l.jsx)(s.Z, {
                                        className: "size-4 animate-spin"
                                    }), p.isPending ? "Deleting..." : "Delete Skill"]
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        63836: function(e, t, n) {
            n.d(t, {
                J4: function() {
                    return R
                },
                vU: function() {
                    return k
                },
                pt: function() {
                    return U
                }
            });
            var l = n(57437),
                r = n(2265),
                i = n(33145),
                a = n(85755),
                s = n(24670),
                o = n(26663),
                d = n(67891),
                c = n(24758),
                u = n(6494),
                m = n(60691),
                f = n(62997),
                p = n(80162),
                h = n(93252),
                g = n(9367),
                x = n(87191),
                v = n(53113),
                b = n(94508),
                y = n(23518),
                w = n(78325);
            let j = RegExp("(?:^|(?<=\\s))\\/(\\S*)$");
            var N = n(68955);
            let k = (0, g.j)({
                    theme: "light",
                    settings: {
                        background: "#ffffff",
                        foreground: "#374151",
                        fontFamily: w.R8,
                        caret: "#1948A3",
                        selection: "#E0EAFB",
                        selectionMatch: "#D2E9FF",
                        lineHighlight: "#F5FAFF",
                        gutterBackground: "transparent",
                        gutterForeground: "hsl(0 0% 40%)",
                        gutterBorder: "transparent"
                    },
                    styles: [{
                        tag: h.pJ.comment,
                        color: "#9ca3af",
                        fontStyle: "italic"
                    }, {
                        tag: h.pJ.variableName,
                        color: "#4b5563"
                    }, {
                        tag: [h.pJ.string, h.pJ.special(h.pJ.brace)],
                        color: "#60a5fa"
                    }, {
                        tag: h.pJ.number,
                        color: "#60a5fa"
                    }, {
                        tag: h.pJ.bool,
                        color: "#60a5fa"
                    }, {
                        tag: h.pJ.null,
                        color: "#9ca3af"
                    }, {
                        tag: h.pJ.keyword,
                        color: "#3b82f6",
                        fontWeight: "500"
                    }, {
                        tag: h.pJ.operator,
                        color: "#6b7280"
                    }, {
                        tag: h.pJ.className,
                        color: "#60a5fa"
                    }, {
                        tag: h.pJ.definition(h.pJ.typeName),
                        color: "#60a5fa"
                    }, {
                        tag: h.pJ.typeName,
                        color: "#60a5fa"
                    }, {
                        tag: h.pJ.angleBracket,
                        color: "#9ca3af"
                    }, {
                        tag: h.pJ.tagName,
                        color: "#3b82f6"
                    }, {
                        tag: h.pJ.attributeName,
                        color: "#60a5fa"
                    }, {
                        tag: h.pJ.heading,
                        color: "#1948A3",
                        fontWeight: "600"
                    }, {
                        tag: h.pJ.link,
                        color: "#3b82f6",
                        textDecoration: "underline"
                    }, {
                        tag: h.pJ.emphasis,
                        fontStyle: "italic",
                        color: "#6b7280"
                    }, {
                        tag: h.pJ.strong,
                        fontWeight: "600",
                        color: "#374151"
                    }, {
                        tag: [h.pJ.propertyName, h.pJ.definition(h.pJ.propertyName)],
                        color: "#1948A3",
                        fontWeight: "500"
                    }, {
                        tag: h.pJ.atom,
                        color: "#3b82f6"
                    }, {
                        tag: h.pJ.meta,
                        color: "#9ca3af"
                    }]
                }),
                C = "#2c2e36",
                S = "#5a5d67",
                I = "#8e9094",
                E = "#0184bc",
                _ = "#4078f2",
                z = "#3fa742",
                F = "#e45649",
                M = "#986801",
                T = (0, g.j)({
                    theme: "light",
                    settings: {
                        background: "transparent",
                        foreground: C,
                        caret: "#0451a5",
                        selection: "rgba(191, 219, 254, 0.5)",
                        selectionMatch: "rgba(191, 219, 254, 0.5)",
                        lineHighlight: "transparent",
                        gutterBackground: "transparent",
                        gutterForeground: "hsl(0 0% 35%)",
                        gutterBorder: "transparent"
                    },
                    styles: [{
                        tag: [h.pJ.comment, h.pJ.lineComment, h.pJ.blockComment, h.pJ.docComment],
                        color: I,
                        fontStyle: "italic"
                    }, {
                        tag: h.pJ.meta,
                        color: I
                    }, {
                        tag: [h.pJ.string, h.pJ.special(h.pJ.string)],
                        color: z
                    }, {
                        tag: h.pJ.regexp,
                        color: z
                    }, {
                        tag: h.pJ.escape,
                        color: E
                    }, {
                        tag: [h.pJ.keyword, h.pJ.controlKeyword, h.pJ.moduleKeyword, h.pJ.modifier, h.pJ.definitionKeyword, h.pJ.operatorKeyword],
                        color: "#a626a4"
                    }, {
                        tag: [h.pJ.self, h.pJ.special(h.pJ.variableName)],
                        color: F,
                        fontStyle: "italic"
                    }, {
                        tag: [h.pJ.function(h.pJ.variableName), h.pJ.function(h.pJ.propertyName), h.pJ.macroName],
                        color: _
                    }, {
                        tag: h.pJ.link,
                        color: _,
                        textDecoration: "underline"
                    }, {
                        tag: [h.pJ.className, h.pJ.typeName, h.pJ.definition(h.pJ.typeName)],
                        color: "#c18401"
                    }, {
                        tag: [h.pJ.standard(h.pJ.variableName), h.pJ.standard(h.pJ.name), h.pJ.standard(h.pJ.typeName), h.pJ.namespace],
                        color: E
                    }, {
                        tag: [h.pJ.number, h.pJ.integer, h.pJ.float],
                        color: M
                    }, {
                        tag: [h.pJ.bool, h.pJ.null, h.pJ.atom, h.pJ.literal],
                        color: M
                    }, {
                        tag: h.pJ.variableName,
                        color: F
                    }, {
                        tag: h.pJ.labelName,
                        color: F
                    }, {
                        tag: [h.pJ.propertyName, h.pJ.definition(h.pJ.propertyName)],
                        color: C
                    }, {
                        tag: h.pJ.operator,
                        color: C
                    }, {
                        tag: [h.pJ.punctuation, h.pJ.separator, h.pJ.bracket, h.pJ.paren, h.pJ.brace, h.pJ.squareBracket],
                        color: C
                    }, {
                        tag: h.pJ.tagName,
                        color: F
                    }, {
                        tag: h.pJ.attributeName,
                        color: M
                    }, {
                        tag: h.pJ.attributeValue,
                        color: z
                    }, {
                        tag: h.pJ.angleBracket,
                        color: C
                    }, {
                        tag: h.pJ.heading,
                        color: S,
                        fontWeight: "600"
                    }, {
                        tag: h.pJ.strong,
                        color: S,
                        fontWeight: "600"
                    }, {
                        tag: h.pJ.emphasis,
                        color: S,
                        fontStyle: "italic"
                    }, {
                        tag: h.pJ.strikethrough,
                        textDecoration: "line-through"
                    }, {
                        tag: h.pJ.invalid,
                        color: "#ca1243"
                    }]
                }),
                D = {
                    py: {
                        unit: "    ",
                        tabSize: 4
                    },
                    go: {
                        unit: "	",
                        tabSize: 4
                    },
                    makefile: {
                        unit: "	",
                        tabSize: 4
                    }
                },
                A = "/* prettier-ignore */\n  .codemirror-wrapper { width: 100%; min-width: 0; contain: layout; }\n  .codemirror-wrapper .cm-editor { height: 100%; outline: none; border: none; }\n  .codemirror-wrapper .cm-editor.cm-focused { outline: none; box-shadow: none; }\n  .codemirror-wrapper .cm-scroller { overflow: auto; }\n  .codemirror-wrapper .cm-gutters {\n    padding-right: 16px;\n    font-family: ".concat(w.R8, ";\n    font-variant-numeric: tabular-nums;\n  }\n  .codemirror-wrapper .cm-content { padding-left: 16px; }\n"),
                U = e => {
                    if (!e) return [];
                    let t = e.toLowerCase().split(".").pop();
                    switch (t) {
                        case "md":
                        case "markdown":
                            return [(0, o.JH)()];
                        case "js":
                        case "jsx":
                        case "ts":
                        case "tsx":
                            return [(0, a.eJ)({
                                jsx: !0,
                                typescript: t.startsWith("t")
                            })];
                        case "py":
                            return [(0, d.Vs)()];
                        case "yaml":
                        case "yml":
                            return [(0, c.rV)()];
                        case "json":
                            return [(0, s.AV)()];
                        default:
                            return []
                    }
                },
                R = (0, r.forwardRef)(function(e, t) {
                    let {
                        value: n,
                        onChange: a,
                        isActive: s,
                        onActivate: o,
                        mimeType: d,
                        fileName: c,
                        onFileDrop: h,
                        onCursorChange: g,
                        imageFiles: C,
                        codeChrome: S
                    } = e, [I, E] = (0, r.useState)(null), [_, z] = (0, r.useState)(!1), F = (0, r.useRef)(null), M = (0, r.useRef)(null), [R, L] = (0, r.useState)(null), [O, P] = (0, r.useState)(0), Z = (0, r.useRef)(null), J = (0, r.useMemo)(() => {
                        if (!C || !R) return null != C ? C : [];
                        let e = R.query.toLowerCase();
                        return e ? C.filter(t => t.name.toLowerCase().includes(e)) : C
                    }, [C, R]), q = null !== R;
                    (0, r.useEffect)(() => {
                        Z.current = R
                    }, [R]), (0, r.useEffect)(() => {
                        P(0)
                    }, [J.length]);
                    let W = (0, r.useCallback)(e => {
                            L(e)
                        }, []),
                        V = (0, r.useRef)(!1);
                    V.current = q;
                    let B = (0, r.useRef)(J);
                    B.current = J;
                    let K = (0, r.useRef)(O);
                    K.current = O;
                    let H = (0, r.useCallback)(e => {
                            var t, n;
                            let l = F.current,
                                r = Z.current;
                            if (!l || !r) return;
                            let i = null !== (n = null === (t = e.dataUrl.match(/^data:([^;,]+)/)) || void 0 === t ? void 0 : t[1]) && void 0 !== n ? n : "image/png",
                                a = (0, N.Um)(e.name, i, e.path);
                            l.dispatch({
                                changes: {
                                    from: r.from,
                                    to: l.state.selection.main.head,
                                    insert: a
                                }
                            }), L(null), l.focus()
                        }, []),
                        $ = (0, r.useCallback)(e => {
                            if (!V.current) return !1;
                            if ("Escape" === e) return L(null), !0;
                            let t = B.current,
                                n = t.length;
                            if (0 === n) return !1;
                            if ("ArrowDown" === e) return P(e => (e + 1) % n), !0;
                            if ("ArrowUp" === e) return P(e => (e - 1 + n) % n), !0;
                            if ("Enter" === e || "Tab" === e) {
                                var l;
                                let e = null !== (l = t[K.current]) && void 0 !== l ? l : t[0];
                                return e && H(e), !0
                            }
                            return !1
                        }, [H]);
                    (0, r.useImperativeHandle)(t, () => ({
                        scrollToKey(e) {
                            if (!F.current) return;
                            let t = F.current,
                                n = new m.FH(t.state.doc, '"'.concat(e, '":'), 0);
                            if (n.next(), !n.done) {
                                let {
                                    from: e,
                                    to: l
                                } = n.value;
                                t.dispatch({
                                    selection: {
                                        anchor: e,
                                        head: l
                                    },
                                    effects: p.tk.scrollIntoView(e, {
                                        y: "start",
                                        yMargin: 10
                                    })
                                })
                            }
                        }
                    }));
                    let Y = "text/markdown" === d || /\.(md|markdown)$/i.test(c || ""),
                        G = (null == d ? void 0 : d.startsWith("image/")) || /\.(png|jpg|jpeg|gif|svg|webp|bmp|ico)$/i.test(c || ""),
                        X = (null == d ? void 0 : d.startsWith("video/")) || /\.(mp4|webm|ogg|mov|avi)$/i.test(c || ""),
                        Q = "application/pdf" === d || (null == c ? void 0 : c.toLowerCase().endsWith(".pdf")),
                        ee = "application/json" === d || (null == c ? void 0 : c.toLowerCase().endsWith(".json")),
                        et = n.startsWith("data:"),
                        en = (0, r.useMemo)(() => U(c), [c]),
                        el = (0, r.useMemo)(() => p.tk.theme({
                            "&": {
                                height: "auto"
                            },
                            ".cm-scroller": {
                                overflow: "visible",
                                height: "auto"
                            }
                        }), []),
                        er = (0, r.useMemo)(() => {
                            var e;
                            return Y ? [p.lg.fromClass(class {
                                update(e) {
                                    if (!e.docChanged && !e.selectionSet) return;
                                    let {
                                        state: t
                                    } = e.view, n = t.selection.main.head, l = t.doc.lineAt(n), r = function(e) {
                                        var t;
                                        let n = e.match(j);
                                        return n ? {
                                            offset: e.length - n[0].length,
                                            query: null !== (t = n[1]) && void 0 !== t ? t : ""
                                        } : null
                                    }(l.text.slice(0, n - l.from));
                                    if (!r) {
                                        W(null);
                                        return
                                    }
                                    W({
                                        from: l.from + r.offset,
                                        query: r.query
                                    })
                                }
                            }), (e = () => V.current, p.tk.domEventHandlers({
                                keydown: t => !!e() && $(t.key)
                            }))] : []
                        }, [Y, W, $]),
                        ei = (0, r.useRef)(n);
                    ei.current = n;
                    let ea = (0, r.useMemo)(() => (function(e, t) {
                            var n, l, r;
                            let i = D[null !== (n = null == e ? void 0 : e.toLowerCase().split(".").pop()) && void 0 !== n ? n : ""],
                                a = null !== (l = function(e) {
                                    if (!e) return null;
                                    let t = e.split(/\r?\n/, 200),
                                        n = 0,
                                        l = 0,
                                        r = 0;
                                    for (let e of t) {
                                        if (!e || /^\s*$/.test(e)) continue;
                                        if ("	" === e[0]) {
                                            n++;
                                            continue
                                        }
                                        let t = e.match(/^( +)/);
                                        if (!t) continue;
                                        let i = t[1].length;
                                        i >= 4 && i % 4 == 0 ? r++ : i >= 2 && i % 2 == 0 && l++
                                    }
                                    return n > l && n > r ? "	" : r > l ? "    " : l > 0 ? "  " : null
                                }(t)) && void 0 !== l ? l : null == i ? void 0 : i.unit;
                            if (!a) return [];
                            let s = "	" === a ? null !== (r = null == i ? void 0 : i.tabSize) && void 0 !== r ? r : 4 : a.length;
                            return [u.c.of(a), f.yy.tabSize.of(s)]
                        })(c, ei.current), [c]),
                        es = (0, r.useMemo)(() => {
                            let e = [...en, ...ea, p.tk.lineWrapping, w.uk];
                            return ee ? [...e, w.Ks, w.hm, w.d1, el] : Y ? [...e, ...er] : S ? [...e, w.Ks, w.d1] : e
                        }, [ee, Y, S, en, ea, el, er]);
                    (0, r.useEffect)(() => {
                        if (!(Q && et)) {
                            E(null);
                            return
                        }
                        let e = atob(n.split(",")[1]),
                            t = Array(e.length);
                        for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
                        let l = new Blob([new Uint8Array(t)], {
                                type: "application/pdf"
                            }),
                            r = URL.createObjectURL(l);
                        return E(r), () => URL.revokeObjectURL(r)
                    }, [n, Q, et]);
                    let [eo, ed] = (0, r.useState)(null);
                    return ((0, r.useEffect)(() => {
                        if (!R || !F.current || !M.current) {
                            ed(null);
                            return
                        }
                        let e = F.current.coordsAtPos(R.from);
                        if (!e) {
                            ed(null);
                            return
                        }
                        let t = M.current.getBoundingClientRect();
                        ed({
                            top: e.top - t.top - 4,
                            left: e.left - t.left
                        })
                    }, [R]), G && et) ? (0, l.jsx)("div", {
                        className: (0, b.cn)("flex size-full min-h-0 items-center justify-center overflow-auto", s && "bg-white"),
                        onClick: o,
                        children: (0, l.jsx)(i.default, {
                            src: n,
                            alt: c || "Image",
                            className: "max-h-full max-w-full object-contain",
                            width: 800,
                            height: 600,
                            unoptimized: !0
                        })
                    }) : X && et ? (0, l.jsx)("div", {
                        className: (0, b.cn)("flex size-full min-h-0 items-center justify-center overflow-auto p-4", s && "bg-white"),
                        onClick: o,
                        children: (0, l.jsxs)("video", {
                            controls: !0,
                            className: "max-h-full max-w-full",
                            children: [(0, l.jsx)("source", {
                                src: n,
                                type: d
                            }), "Your browser does not support the video tag."]
                        })
                    }) : Q && I ? (0, l.jsx)("div", {
                        className: (0, b.cn)("flex size-full min-h-0 flex-col", s && "bg-white"),
                        onClick: o,
                        children: (0, l.jsx)("iframe", {
                            src: I,
                            className: "size-full border-0",
                            title: c || "PDF"
                        })
                    }) : (0, l.jsxs)("div", {
                        ref: M,
                        className: (0, b.cn)("relative size-full min-w-0 overflow-auto", (S || s) && "bg-white"),
                        onClick: o,
                        onDragOver: e => {
                            e.dataTransfer.types.includes("Files") && h && (e.preventDefault(), e.dataTransfer.dropEffect = "copy", z(!0))
                        },
                        onDragLeave: e => {
                            e.currentTarget.contains(e.relatedTarget) || z(!1)
                        },
                        onDrop: async e => {
                            var t;
                            if (!h) return;
                            let n = Array.from(e.dataTransfer.files);
                            if (0 === n.length) return;
                            e.preventDefault();
                            let l = F.current,
                                r = l ? null !== (t = l.posAtCoords({
                                    x: e.clientX,
                                    y: e.clientY
                                })) && void 0 !== t ? t : l.state.doc.length : null;
                            for (let e of n) {
                                let t = await h(e);
                                if (!t || !l) continue;
                                let n = null != r ? r : l.state.doc.length,
                                    i = t + "\n";
                                l.dispatch({
                                    changes: {
                                        from: n,
                                        insert: i
                                    }
                                }), null !== r && (r += i.length)
                            }
                            z(!1)
                        },
                        children: [_ && (0, l.jsx)("div", {
                            className: "pointer-events-none absolute inset-0 z-10 bg-blue-50/40"
                        }), q && eo && (0, l.jsx)("div", {
                            className: "absolute z-50 w-64 rounded-lg border border-border/60 bg-popover shadow-lg",
                            style: {
                                top: eo.top,
                                left: eo.left,
                                transform: "translateY(-100%)"
                            },
                            children: (0, l.jsx)(y.mY, {
                                className: "bg-transparent",
                                value: "",
                                onValueChange: () => {},
                                children: (0, l.jsxs)(y.e8, {
                                    children: [(0, l.jsx)(y.rb, {
                                        className: "py-3 text-center text-xs text-muted-foreground",
                                        children: "No images found"
                                    }), (0, l.jsx)(y.fu, {
                                        heading: "Images",
                                        children: J.map((e, t) => (0, l.jsxs)(y.di, {
                                            className: (0, b.cn)("flex cursor-pointer items-center gap-2 px-3 py-2", O === t && "bg-muted/70 text-foreground"),
                                            onMouseEnter: () => P(t),
                                            onMouseDown: e => e.preventDefault(),
                                            onSelect: () => H(e),
                                            children: [(0, l.jsx)("span", {
                                                className: "relative flex size-10 shrink-0 overflow-hidden rounded-md border border-border/50 bg-muted",
                                                children: e.dataUrl ? (0, l.jsx)(i.default, {
                                                    src: e.dataUrl,
                                                    alt: e.name,
                                                    fill: !0,
                                                    className: "object-cover",
                                                    unoptimized: !0
                                                }) : (0, l.jsx)("span", {
                                                    className: "flex size-full items-center justify-center bg-muted",
                                                    children: (0, l.jsx)(v.Z, {
                                                        className: "size-5 text-muted-foreground"
                                                    })
                                                })
                                            }), (0, l.jsx)("span", {
                                                className: "truncate text-sm font-medium leading-5",
                                                children: e.name
                                            })]
                                        }, e.id))
                                    })]
                                })
                            })
                        }), (0, l.jsx)("style", {
                            children: A
                        }), (0, l.jsx)("div", {
                            className: (0, b.cn)("codemirror-wrapper", Y && " w-full max-w-3xl ", S && "min-h-full bg-white"),
                            children: (0, l.jsx)(x.ZP, {
                                value: n,
                                onChange: a,
                                onCreateEditor: e => {
                                    F.current = e
                                },
                                theme: ee ? "light" : S ? T : k,
                                extensions: es,
                                basicSetup: {
                                    lineNumbers: !0,
                                    highlightActiveLineGutter: !1,
                                    highlightSpecialChars: !0,
                                    foldGutter: !1,
                                    drawSelection: !0,
                                    dropCursor: !0,
                                    allowMultipleSelections: !0,
                                    indentOnInput: !0,
                                    syntaxHighlighting: !0,
                                    bracketMatching: !0,
                                    closeBrackets: !0,
                                    autocompletion: !0,
                                    rectangularSelection: !0,
                                    crosshairCursor: !1,
                                    highlightActiveLine: !1,
                                    highlightSelectionMatches: !0,
                                    closeBracketsKeymap: !0,
                                    defaultKeymap: !0,
                                    searchKeymap: !1,
                                    historyKeymap: !0,
                                    foldKeymap: !1,
                                    completionKeymap: !0,
                                    lintKeymap: !1
                                },
                                className: "font-mono text-sm",
                                style: {
                                    fontFamily: S ? void 0 : w.R8
                                },
                                height: ee ? "auto" : "100%"
                            })
                        })]
                    })
                })
        },
        68955: function(e, t, n) {
            function l(e, t) {
                return e.map(e => {
                    var n;
                    return "skill-root" === e.id && "folder" === e.type ? {
                        ...e,
                        children: [...null !== (n = e.children) && void 0 !== n ? n : [], t]
                    } : e
                })
            }

            function r(e, t, n) {
                let r = !1,
                    i = e => e.map(e => {
                        if (e.id === t && "folder" === e.type) {
                            var l;
                            return r = !0, {
                                ...e,
                                children: [...null !== (l = e.children) && void 0 !== l ? l : [], n]
                            }
                        }
                        return e.children ? {
                            ...e,
                            children: i(e.children)
                        } : e
                    }),
                    a = i(e);
                return r ? a : l(e, n)
            }

            function i(e, t, n) {
                let l = null != n ? n : e;
                return t.startsWith("image/") ? "![".concat(e, "](<").concat(l, ">)") : "[".concat(e, "](<").concat(l, ">)")
            }

            function a(e) {
                let t = {},
                    n = (e, l) => {
                        for (let r of e) "file" === r.type ? t[r.id] = l ? "".concat(l, "/").concat(r.name) : r.name : "folder" === r.type && r.children && n(r.children, l ? "".concat(l, "/").concat(r.name) : r.name)
                    },
                    l = e.find(e => "skill-root" === e.id);
                return (null == l ? void 0 : l.children) && n(l.children, ""), t
            }
            n.d(t, {
                BX: function() {
                    return r
                },
                Um: function() {
                    return i
                },
                k2: function() {
                    return l
                },
                tx: function() {
                    return a
                }
            })
        },
        48263: function(e, t, n) {
            n.d(t, {
                XC: function() {
                    return u
                },
                qC: function() {
                    return c
                }
            });
            var l = n(57437),
                r = n(2265),
                i = n(91141),
                a = n(10407),
                s = n(54887),
                o = n(94508),
                d = n(43650);

            function c(e, t) {
                let n = document.createElement("div");
                n.style.position = "absolute", n.style.visibility = "hidden", n.style.whiteSpace = "pre-wrap", n.style.wordWrap = "break-word";
                let l = window.getComputedStyle(e);
                ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontFamily", "lineHeight", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing"].forEach(e => {
                    n.style[e] = l[e]
                }), n.style.overflow = "hidden", n.style.width = "".concat(e.clientWidth, "px");
                let r = e.value.slice(0, t),
                    i = e.value.slice(t);
                n.textContent = r;
                let a = document.createElement("span");
                a.textContent = 0 === i.length ? "." : i[0], n.appendChild(a), document.body.appendChild(n);
                let s = a.getBoundingClientRect(),
                    o = n.getBoundingClientRect();
                return document.body.removeChild(n), {
                    top: s.top - o.top + e.getBoundingClientRect().top - e.scrollTop,
                    left: s.left - o.left + e.getBoundingClientRect().left - e.scrollLeft
                }
            }

            function u(e) {
                let {
                    inputRef: t,
                    inputWrapperRef: n,
                    setInput: u,
                    onSkillSelected: m,
                    enabled: f = !0,
                    publicOnly: p = !1
                } = e, [h, g] = (0, r.useState)(null), [x, v] = (0, r.useState)(null), [b, y] = (0, r.useState)(0), [w, j] = (0, r.useState)(null), N = (0, r.useRef)(null), k = (0, r.useCallback)(() => {
                    N.current && (clearTimeout(N.current), N.current = null)
                }, []), C = (0, r.useCallback)(() => {
                    k(), N.current = setTimeout(() => {
                        j(null), N.current = null
                    }, o.vR.SLASH_MENU.FLYOUT_CLOSE_DELAY)
                }, [k]);
                (0, r.useEffect)(() => () => {
                    N.current && clearTimeout(N.current)
                }, []);
                let {
                    data: S
                } = (0, i.kw)(200, 0, "created_at", !0, !1, f && null !== h), I = (0, r.useMemo)(() => {
                    var e, t, n;
                    let l = (null !== (e = null == S ? void 0 : S.data) && void 0 !== e ? e : []).filter(e => !p || e.is_public),
                        r = e => "".concat(e.name, "::").concat(e.is_public),
                        i = new Map;
                    for (let e of l) {
                        let n = r(e),
                            l = null !== (t = i.get(n)) && void 0 !== t ? t : [];
                        l.push(e), i.set(n, l)
                    }
                    let a = Array.from(i.values()).map(e => {
                            var t;
                            let n = [...e].sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime()),
                                l = null !== (t = (0, d.JF)(e)) && void 0 !== t ? t : n[0];
                            return {
                                name: n[0].name,
                                latest: l,
                                versions: n,
                                isPublic: n[0].is_public
                            }
                        }),
                        s = null !== (n = null == h ? void 0 : h.query.toLowerCase()) && void 0 !== n ? n : "",
                        o = s ? a.filter(e => e.name.toLowerCase().includes(s)) : a,
                        c = o.filter(e => !e.isPublic),
                        u = o.filter(e => e.isPublic),
                        m = [...c, ...u];
                    return {
                        user: c,
                        public: u,
                        flat: m
                    }
                }, [S, h, p]), E = (0, r.useCallback)(() => {
                    g(null), v(null), y(0), j(null)
                }, []), _ = (0, r.useCallback)(e => {
                    var l;
                    if (!f || (null == e ? void 0 : e.block)) {
                        E();
                        return
                    }
                    let r = t.current;
                    if (!r) return;
                    let i = r.value,
                        a = null !== (l = r.selectionStart) && void 0 !== l ? l : i.length,
                        s = function(e, t) {
                            let n = e.slice(0, t),
                                l = n.lastIndexOf("/");
                            if (-1 === l) return null;
                            if (l > 0) {
                                let e = n[l - 1];
                                if (e && !/\s/.test(e)) return null
                            }
                            let r = n.slice(l + 1);
                            return /[\s,;:()\[\]{}]/.test(r) ? null : {
                                start: l,
                                end: t,
                                query: r
                            }
                        }(i, a);
                    if (!s) {
                        E();
                        return
                    }
                    g(e => (e || y(0), s));
                    try {
                        let e = c(r, a);
                        if (e && n.current) {
                            let t = n.current.getBoundingClientRect();
                            v({
                                top: e.top - t.top + o.vR.SLASH_MENU.CARET_LINE_OFFSET,
                                left: e.left - t.left
                            })
                        }
                    } catch (e) {
                        v(null)
                    }
                }, [f, E, t, n]), z = (0, r.useCallback)(e => {
                    let n = t.current;
                    if (!n || !h) return;
                    let l = n.value,
                        r = l.slice(0, h.start);
                    u(r + l.slice(h.end)), m(e), E(), requestAnimationFrame(() => {
                        (0, o.F5)(n), n.setSelectionRange(r.length, r.length), n.focus()
                    })
                }, [t, h, u, m, E]), F = (0, r.useCallback)(e => {
                    if (!h) return !1;
                    let t = I.flat.length;
                    if ("ArrowDown" === e.key && t > 0) return e.preventDefault(), y(e => {
                        let n = (e + 1) % t;
                        return j(null), requestAnimationFrame(() => {
                            let e = document.querySelector('[data-slash-index="'.concat(n, '"]'));
                            null == e || e.scrollIntoView({
                                block: "nearest",
                                behavior: "smooth"
                            })
                        }), n
                    }), !0;
                    if ("ArrowUp" === e.key && t > 0) return e.preventDefault(), y(e => {
                        let n = (e - 1 + t) % t;
                        return j(null), requestAnimationFrame(() => {
                            let e = document.querySelector('[data-slash-index="'.concat(n, '"]'));
                            null == e || e.scrollIntoView({
                                block: "nearest",
                                behavior: "smooth"
                            })
                        }), n
                    }), !0;
                    if (("Enter" === e.key || "Tab" === e.key) && !e.shiftKey && t > 0) {
                        var n;
                        e.preventDefault();
                        let t = null !== (n = I.flat[b]) && void 0 !== n ? n : I.flat[0];
                        return t && z(t.latest), !0
                    }
                    return "Escape" === e.key && (e.preventDefault(), E(), !0)
                }, [h, I, b, z, E]), M = (0, r.useCallback)(() => {
                    if (!h || !x) return null;
                    let e = o.vR.SLASH_MENU.MENU_HEIGHT,
                        t = x.top - e,
                        n = x.left,
                        {
                            user: r,
                            public: i,
                            flat: d
                        } = I,
                        c = 0,
                        u = w ? d.find(e => "".concat(e.name, "::").concat(e.isPublic) === w.key) : null,
                        m = e => {
                            let t = c++,
                                n = "".concat(e.name, "::").concat(e.isPublic),
                                r = e.versions.length > 1;
                            return (0, l.jsxs)("div", {
                                "data-slash-index": t,
                                className: (0, o.cn)("relative flex cursor-pointer select-none items-center justify-between rounded-[6px] px-3 py-1.5 text-sm outline-none transition-colors", b === t ? "bg-[#F7F7F7] text-foreground" : "hover:bg-[#F7F7F7]"),
                                onMouseEnter: e => {
                                    if (y(t), k(), r) {
                                        let t = e.currentTarget.getBoundingClientRect();
                                        j({
                                            key: n,
                                            rect: {
                                                top: t.top,
                                                right: t.right
                                            }
                                        })
                                    } else j(null)
                                },
                                onMouseDown: e => e.preventDefault(),
                                onClick: () => z(e.latest),
                                children: [(0, l.jsx)("span", {
                                    className: "truncate",
                                    children: e.name
                                }), r && (0, l.jsx)(a.Z, {
                                    className: "size-3.5 shrink-0 text-muted-foreground"
                                })]
                            }, n)
                        };
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: "absolute z-50 max-h-60 w-64 overflow-y-auto rounded-lg border border-border/60 bg-popover p-1 shadow-md",
                            style: {
                                top: t,
                                left: n
                            },
                            onMouseEnter: k,
                            onMouseLeave: C,
                            children: [0 === d.length && (0, l.jsx)("div", {
                                className: "px-3 py-4 text-center text-sm text-muted-foreground",
                                children: "No skills found"
                            }), r.length > 0 && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)("div", {
                                    className: "px-3 py-2 text-[11px] font-semibold tracking-wide text-gray-500",
                                    children: "Your skills"
                                }), r.map(m)]
                            }), r.length > 0 && i.length > 0 && (0, l.jsx)("div", {
                                className: "my-1 h-px bg-border"
                            }), i.length > 0 && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)("div", {
                                    className: "px-3 py-2 text-[11px] font-semibold tracking-wide text-gray-500",
                                    children: "Public skills"
                                }), i.map(m)]
                            })]
                        }), u && w && "undefined" != typeof document && (0, s.createPortal)((0, l.jsx)("div", {
                            className: "max-h-60 w-max min-w-52 max-w-xs overflow-y-auto rounded-lg border border-border/60 bg-popover p-1 shadow-md",
                            style: {
                                position: "fixed",
                                top: w.rect.top,
                                left: w.rect.right + 4,
                                zIndex: 51
                            },
                            onMouseDown: e => e.preventDefault(),
                            onMouseEnter: k,
                            onMouseLeave: C,
                            children: u.versions.map((e, t) => (0, l.jsxs)("div", {
                                className: "flex cursor-pointer select-none items-center justify-between gap-2 whitespace-nowrap rounded-[6px] px-3 py-1.5 text-sm outline-none transition-colors hover:bg-[#F7F7F7]",
                                onMouseDown: e => e.preventDefault(),
                                onClick: () => z(e),
                                children: [(0, l.jsxs)("span", {
                                    children: ["v", e.version]
                                }), 0 === t && (0, l.jsx)("span", {
                                    className: "shrink-0 rounded-full border border-border px-1.5 py-0 text-[10px] text-muted-foreground",
                                    children: "latest"
                                })]
                            }, e.id))
                        }), document.body)]
                    })
                }, [h, x, I, b, w, z, k, C]);
                return {
                    isOpen: !!h,
                    updateDetection: _,
                    handleKeyDown: F,
                    closeMenu: E,
                    renderMenu: M
                }
            }
        },
        2635: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return i
                }
            });
            var l = n(59625),
                r = n(89134);
            let i = (0, l.Ue)((0, r.tJ)((e, t) => ({
                isOpen: !0,
                setIsOpen: () => {
                    e({
                        isOpen: !t().isOpen
                    })
                },
                setOpen: t => {
                    e({
                        isOpen: t
                    })
                }
            }), {
                name: "sidebarOpen",
                storage: (0, r.FL)(() => localStorage)
            }))
        },
        48661: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return i
                },
                f: function() {
                    return a
                }
            });
            var l = n(82244),
                r = n.n(l);

            function i(e) {
                let t = e.type.toLowerCase(),
                    n = e.name.toLowerCase();
                return "image/tiff" === t || "image/tif" === t || n.endsWith(".tiff") || n.endsWith(".tif")
            }
            async function a(e) {
                let t = await e.arrayBuffer(),
                    n = r().decode(t);
                if (!n || 0 === n.length) throw Error("No image data found in TIFF file");
                let l = n[0];
                r().decodeImage(t, l);
                let i = r().toRGBA8(l),
                    a = document.createElement("canvas");
                a.width = l.width, a.height = l.height;
                let s = a.getContext("2d");
                if (!s) throw Error("Failed to get canvas context");
                let o = new ImageData(new Uint8ClampedArray(i), l.width, l.height);
                return s.putImageData(o, 0, 0), a.toDataURL("image/png")
            }
        },
        48919: function(e, t, n) {
            async function l(e) {
                if ("undefined" == typeof document || !e.type.startsWith("video/") && !/\.(mp4|m4v|mov|webm|mkv)$/i.test(e.name)) return !1;
                let t = URL.createObjectURL(e);
                try {
                    return await new Promise(e => {
                        let n = document.createElement("video"),
                            l = !1,
                            r = t => {
                                l || (l = !0, window.clearTimeout(i), n.removeAttribute("src"), n.load(), e(t))
                            },
                            i = window.setTimeout(() => r(!1), 8e3);
                        n.preload = "auto", n.muted = !0, n.playsInline = !0, n.onloadeddata = () => r(n.videoWidth > 0 && n.videoHeight > 0), n.onerror = () => r(!1), n.src = t
                    })
                } finally {
                    URL.revokeObjectURL(t)
                }
            }
            n.d(t, {
                gC: function() {
                    return d
                }
            });
            let r = "https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/umd",
                i = null,
                a = null;
            async function s() {
                if (null == i ? void 0 : i.loaded) return i;
                if (a) return a;
                a = (async () => {
                    let [{
                        FFmpeg: e
                    }, {
                        toBlobURL: t
                    }] = await Promise.all([n.e(42877).then(n.bind(n, 42877)), n.e(63847).then(n.bind(n, 63847))]), l = new e;
                    return await l.load({
                        coreURL: await t("".concat(r, "/ffmpeg-core.js"), "text/javascript"),
                        wasmURL: await t("".concat(r, "/ffmpeg-core.wasm"), "application/wasm")
                    }), i = l, l
                })();
                try {
                    return await a
                } catch (e) {
                    throw a = null, e
                }
            }
            async function o(e, t) {
                null == t || t({
                    progress: 0,
                    phase: "loading"
                });
                let l = await s();
                null == t || t({
                    progress: 0,
                    phase: "transcoding"
                });
                let {
                    fetchFile: r
                } = await n.e(63847).then(n.bind(n, 63847)), i = function(e) {
                    var t;
                    let n = null === (t = e.name.split(".").pop()) || void 0 === t ? void 0 : t.toLowerCase();
                    return n && /^[a-z0-9]+$/.test(n) ? n : e.type.includes("webm") ? "webm" : e.type.includes("quicktime") ? "mov" : "mp4"
                }(e), a = "input.".concat(i), o = "output.mp4", d = e => {
                    let {
                        progress: n
                    } = e;
                    null == t || t({
                        progress: Math.max(0, Math.min(100, Math.round(100 * n))),
                        phase: "transcoding"
                    })
                };
                l.on("progress", d);
                try {
                    await l.writeFile(a, await r(e)), await l.exec(["-i", a, "-map", "0:v:0", "-map", "0:a:0?", "-c:v", "libx264", "-preset", "ultrafast", "-crf", "28", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart", o]);
                    let t = await l.readFile(o);
                    if ("string" == typeof t) throw Error("Unexpected ffmpeg text output");
                    let n = t instanceof Uint8Array ? t : new Uint8Array(t),
                        i = new Uint8Array(n.byteLength);
                    i.set(n);
                    let s = e.name.replace(/\.[^.]+$/, "") || "video";
                    return new File([i], "".concat(s, ".mp4"), {
                        type: "video/mp4",
                        lastModified: Date.now()
                    })
                } finally {
                    l.off("progress", d);
                    try {
                        await l.deleteFile(a)
                    } catch (e) {}
                    try {
                        await l.deleteFile(o)
                    } catch (e) {}
                }
            }
            async function d(e, t) {
                if (!e.type.startsWith("video/") && !/\.(mp4|m4v|mov|webm|mkv|avi)$/i.test(e.name) || await l(e)) return {
                    file: e,
                    transcoded: !1
                };
                if (e.size > 83886080) throw Error("This video uses a codec this browser cannot preview, and the file is too large to convert in-browser (max ".concat(Math.round(80), "MB). Re-encode to H.264 and try again."));
                return {
                    file: await o(e, t),
                    transcoded: !0
                }
            }
        }
    }
]);