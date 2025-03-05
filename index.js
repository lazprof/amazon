(function (b, a, c, d) { if ((b = b.AmazonUIPageJS || b.P) && b.when && b.register) { c = []; for (a = a.currentScript; a; a = a.parentElement)a.id && c.push(a.id); return b.log("A copy of P has already been loaded on this page.", "FATAL", c.join(" ")) } })(window, document, Date); (function (a, b, c, d) { "use strict"; a._pSetI = function () { return null } })(window, document, Date); (function (d, I, K, L) {
                "use strict"; d._sw = function () {
                    var p; return function (w, g, u, B, h, C, q, k, x, y) {
                        p || (p = !0, y.execute("RetailPageServiceWorker", function () {
                            function z(a, b) { e.controller && a ? (a = { feature: "retail_service_worker_messaging", command: a }, b && (a.data = b), e.controller.postMessage(a)) : a && h("sw:sw_message_no_ctrl", 1) } function p(a) {
                                var b = a.data; if (b && "retail_service_worker_messaging" === b.feature && b.command && b.data) {
                                    var c = b.data; a = d.ue; var f = d.ueLogError; switch (b.command) {
                                        case "log_counter": a && k(a.count) &&
                                            c.name && a.count(c.name, 0 === c.value ? 0 : c.value || 1); break; case "log_tag": a && k(a.tag) && c.tag && (a.tag(c.tag), b = d.uex, a.isl && k(b) && b("at")); break; case "log_error": f && k(f) && c.message && f({ message: c.message, logLevel: c.level || "ERROR", attribution: c.attribution || "RetailServiceWorker" }); break; case "log_weblab_trigger": if (!c.weblab || !c.treatment) break; a && k(a.trigger) ? a.trigger(c.weblab, c.treatment) : (h("sw:wt:miss"), h("sw:wt:miss:" + c.weblab + ":" + c.treatment)); break; default: h("sw:unsupported_message_command", 1)
                                    }
                                }
                            }
                            function v(a, b) { return "sw:" + (b || "") + ":" + a + ":" } function D(a, b) { e.register("/service-worker.js").then(function () { h(a + "success") }).catch(function (c) { y.logError(c, "[AUI SW] Failed to " + b + " service worker: ", "ERROR", "RetailPageServiceWorker"); h(a + "failure") }) } function E() { l.forEach(function (a) { q(a) }) } function n(a) { return a.capabilities.isAmazonApp && a.capabilities.android } function F(a, b, c) {
                                if (b) if (b.mshop && n(a)) a = v(c, "mshop_and"), b = b.mshop.action, l.push(a + "supported"), b(a, c); else if (b.browser) {
                                    a = u(/Chrome/i) &&
                                    !u(/Edge/i) && !u(/OPR/i) && !a.capabilities.isAmazonApp && !u(new RegExp(B + "bwv" + B + "b")); var f = b.browser; b = v(c, "browser"); a ? (a = f.action, l.push(b + "supported"), a(b, c)) : l.push(b + "unsupported")
                                }
                            } function G(a, b, c) { a && l.push(v("register", c) + "unsupported"); b && l.push(v("unregister", c) + "unsupported"); E() } try { var e = navigator.serviceWorker } catch (a) { q("sw:nav_err") } (function () {
                                if (e) {
                                    var a = function () { z("page_loaded", { rid: d.ue_id, mid: d.ue_mid, pty: d.ue_pty, sid: d.ue_sid, spty: d.ue_spty, furl: d.ue_furl }) }; x(e, "message",
                                        p); z("client_messaging_ready"); y.when("load").execute(a); x(e, "controllerchange", function () { z("client_messaging_ready"); "complete" === I.readyState && a() })
                                }
                            })(); var l = [], m = function (a, b) { var c = d.uex, f = d.uet; a = g(":", "aui", "sw", a); "ld" === b && k(c) ? c("ld", a, { wb: 1 }) : k(f) && f(b, a, { wb: 1 }) }, J = function (a, b, c) {
                                function f(a) { b && k(b.failure) && b.failure(a) } function H() { l = setTimeout(function () { q(g(":", "sw:" + r, t.TIMED_OUT)); f({ ok: !1, statusCode: t.TIMED_OUT, done: !1 }); m(r, "ld") }, c || 4E3) } var t = {
                                    NO_CONTROLLER: "no_ctrl", TIMED_OUT: "timed_out",
                                    UNSUPPORTED_BROWSER: "unsupported_browser", UNEXPECTED_RESPONSE: "unexpected_response"
                                }, r = g(":", a.feature, a.command), l, n = !0; if ("MessageChannel" in d && e && "controller" in e) if (e.controller) { var p = new MessageChannel; p.port1.onmessage = function (c) { (c = c.data) && c.feature === a.feature && c.command === a.command ? (n && (m(r, "cf"), n = !1), m(r, "af"), clearTimeout(l), c.done || H(), c.ok ? b && k(b.success) && b.success(c) : f(c), c.done && m(r, "ld")) : h(g(":", "sw:" + r, t.UNEXPECTED_RESPONSE), 1) }; H(); m(r, "bb"); e.controller.postMessage(a, [p.port2]) } else q(g(":",
                                    "sw:" + a.feature, t.NO_CONTROLLER)), f({ ok: !1, statusCode: t.NO_CONTROLLER, done: !0 }); else q(g(":", "sw:" + a.feature, t.UNSUPPORTED_BROWSER)), f({ ok: !1, statusCode: t.UNSUPPORTED_BROWSER, done: !0 })
                            }; (function () { e ? (m("ctrl_changed", "bb"), e.addEventListener("controllerchange", function () { q("sw:ctrl_changed"); m("ctrl_changed", "ld") })) : h(g(":", "sw:ctrl_changed", "sw_unsupp"), 1) })(); (function () {
                                var a = function () {
                                    m(b, "ld"); var a = d.uex; J({ feature: "page_proxy", command: "request_feature_tags" }, {
                                        success: function (b) {
                                            b = b.data;
                                            Array.isArray(b) && b.forEach(function (a) { "string" === typeof a ? q(g(":", "sw:ppft", a)) : h(g(":", "sw:ppft", "invalid_tag"), 1) }); h(g(":", "sw:ppft", "success"), 1); C && C.isl && k(a) && a("at")
                                        }, failure: function (a) { h(g(":", "sw:ppft", "error:" + (a.statusCode || "ppft_error")), 1) }
                                    })
                                }; if ("requestIdleCallback" in d) { var b = g(":", "ppft", "callback_ricb"); d.requestIdleCallback(a, { timeout: 1E3 }) } else b = g(":", "ppft", "callback_timeout"), setTimeout(a, 0); m(b, "bb")
                            })(); var A = { reg: {}, unreg: {} }; A.reg.mshop = { action: D }; A.reg.browser = { action: D };
                            (function (a) { var b = a.reg, c = a.unreg; e && e.getRegistrations ? (w.when("A").execute(function (b) { if ((a.reg.mshop || a.unreg.mshop) && "function" === typeof n && n(b)) { var f = a.reg.mshop ? "T1" : "C", e = d.ue; e && e.trigger ? e.trigger("MSHOP_SW_CLIENT_446196", f) : h("sw:mshop:wt:failed") } F(b, c, "unregister") }), x(d, "load", function () { w.when("A").execute(function (a) { F(a, b, "register"); E() }) })) : (G(b && b.browser, c && c.browser, "browser"), w.when("A").execute(function (a) { "function" === typeof n && n(a) && G(b && b.mshop, c && c.mshop, "mshop_and") })) })(A)
                        }))
                    }
                }()
            })(window,
                document, Date); (function (b, a, J, C) {
                    "use strict"; b._pd = function () {
                        var c, v; return function (D, e, g, h, d, E, w, F, G) {
                            function x(b) { try { return b() } catch (K) { return !1 } } function p(c) { return b.matchMedia ? b.matchMedia(c) : { matches: !1 } } function k() { if (l) { var y = c.mobile || c.tablet ? q.matches && m.matches : m.matches; if (z !== y) { var a = { w: b.innerWidth || d.clientWidth, h: b.innerHeight || d.clientHeight }; if (17 < Math.abs(r.w - a.w) || 50 < Math.abs(r.h - a.h)) r = a, (z = y) ? h(d, "a-ws") : d.className = w(d, "a-ws") } } } function H(b) { (l = b === C ? !l : !!b) && k() } function I() { return l }
                            if (!v) {
                                v = !0; var t = function () { var b = ["O", "ms", "Moz", "Webkit"], c = a.createElement("div"); return { testGradients: function () { return !0 }, test: function (a) { var d = a.charAt(0).toUpperCase() + a.substr(1); a = (b.join(d + " ") + d + " " + a).split(" "); for (d = a.length; d--;)if ("" === c.style[a[d]]) return !0; return !1 }, testTransform3d: function () { return !0 } } }(); g = d.className; var A = /(^| )a-mobile( |$)/.test(g), B = /(^| )a-tablet( |$)/.test(g); c = {
                                    audio: function () { return !!a.createElement("audio").canPlayType }, video: function () { return !!a.createElement("video").canPlayType },
                                    canvas: function () { return !!a.createElement("canvas").getContext }, svg: function () { return !!a.createElementNS && !!a.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect }, offline: function () { return navigator.hasOwnProperty && navigator.hasOwnProperty("onLine") && navigator.onLine }, dragDrop: function () { return "draggable" in a.createElement("span") }, geolocation: function () { return !!navigator.geolocation }, history: function () { return !(!b.history || !b.history.pushState) }, webworker: function () { return !!b.Worker },
                                    autofocus: function () { return "autofocus" in a.createElement("input") }, inputPlaceholder: function () { return "placeholder" in a.createElement("input") }, textareaPlaceholder: function () { return "placeholder" in a.createElement("textarea") }, localStorage: function () { return "localStorage" in b && null !== b.localStorage }, orientation: function () { return "orientation" in b }, touch: function () { return "ontouchend" in a }, gradients: function () { return t.testGradients() }, hires: function () {
                                        var a = b.devicePixelRatio && 1.5 <= b.devicePixelRatio ||
                                            b.matchMedia && b.matchMedia("(min-resolution:144dpi)").matches; F("hiRes" + (A ? "Mobile" : B ? "Tablet" : "Desktop"), a ? 1 : 0); return a
                                    }, transform3d: function () { return t.testTransform3d() }, touchScrolling: function () { return e(/Windowshop|android|OS ([5-9]|[1-9][0-9]+)(_[0-9]{1,2})+ like Mac OS X|SOFTWARE=([5-9]|[1-9][0-9]+)(.[0-9]{1,2})+.*DEVICE=iPhone|Chrome|Silk|Firefox|Trident.+?; Touch/i) }, ios: function () { return e(/OS [1-9][0-9]*(_[0-9]*)+ like Mac OS X/i) && !e(/trident|Edge/i) }, android: function () {
                                        return e(/android.([1-9]|[L-Z])/i) &&
                                            !e(/trident|Edge/i)
                                    }, mobile: function () { return A }, tablet: function () { return B }, rtl: function () { return "rtl" === d.dir }
                                }; for (var f in c) c.hasOwnProperty(f) && (c[f] = x(c[f])); for (var u = "textShadow textStroke boxShadow borderRadius borderImage opacity transform transition".split(" "), n = 0; n < u.length; n++)c[u[n]] = x(function () { return t.test(u[n]) }); var l = !0, r = { w: 0, h: 0 }, q = p("(orientation:landscape)"), m = c.mobile || c.tablet ? p("(min-width:451px)") : p("(min-width:1250px)"); q.addListener && q.addListener(k); m.addListener &&
                                    m.addListener(k); var z; k(); d.className = w(d, "a-no-js"); h(d, "a-js"); !e(/OS [1-8](_[0-9]*)+ like Mac OS X/i) || b.navigator.standalone || e(/safari/i) || h(d, "a-ember"); g = []; for (f in c) c.hasOwnProperty(f) && c[f] && g.push("a-" + f.replace(/([A-Z])/g, function (a) { return "-" + a.toLowerCase() })); h(d, g.join(" ")); d.setAttribute("data-aui-build-date", G); D.register("p-detect", function () { return { capabilities: c, localStorage: c.localStorage && E, toggleResponsiveGrid: H, responsiveGridEnabled: I } }); return c || {}
                            }
                        }
                    }()
                })(window, document,
                    Date); (function (g, l, E, F) {
                        function G(a) { n && n.tag && n.tag(p(":", "aui", a)) } function m(a, b) { n && n.count && n.count("aui:" + a, 0 === b ? 0 : b || (n.count("aui:" + a) || 0) + 1) } function H(a) { try { return a.test(navigator.userAgent) } catch (b) { return !1 } } function I(a) { return "function" === typeof a } function u(a, b, d) { a.addEventListener ? a.addEventListener(b, d, !1) : a.attachEvent && a.attachEvent("on" + b, d) } function p(a, b, d, e) { b = b && d ? b + a + d : b || d; return e ? p(a, b, e) : b } function y(a, b, d) {
                            try { Object.defineProperty(a, b, { value: d, writable: !1 }) } catch (e) {
                                a[b] =
                                d
                            } return d
                        } function R(a, b) { a.className = S(a, b) + " " + b } function S(a, b) { return (" " + a.className + " ").split(" " + b + " ").join(" ").replace(/^ | $/g, "") } function J(a) { (a || []).forEach(function (a) { a in z || (z[a] = 1, J(T[a])) }) } function ha(a, b, d) { var e = a.length, f = e, c = function () { f-- || ((d && z.hasOwnProperty(d) ? A : K).push(b), L || (q ? q.set(B) : setTimeout(B, 0), L = !0)) }; for (c(); e--;)U[a[e]] ? c() : (v[a[e]] = v[a[e]] || []).push(c) } function ia(a, b, d, e, f) {
                            var c = l.createElement(a ? "script" : "link"); u(c, "error", e); f && u(c, "load", f); a ? (c.type =
                                "text/javascript", c.async = !0, d && /AUIClients|images[/]I/.test(b) && c.setAttribute("crossorigin", "anonymous"), c.src = b) : (c.rel = "stylesheet", c.href = b); l.getElementsByTagName("head")[0].appendChild(c)
                        } function V(a, b) {
                            return function (d, e) {
                                function f() { ia(b, d, c, function (b) { M ? m("resource_unload") : c ? (c = !1, m("resource_retry"), f()) : (m("resource_error"), a.log("Asset failed to load: " + d)); b && b.stopPropagation ? b.stopPropagation() : g.event && (g.event.cancelBubble = !0) }, e) } if (W[d]) return !1; W[d] = !0; m("resource_count");
                                var c = !0; return !f()
                            }
                        } function ja(a, b, d) { for (var e = { name: a, guard: function (c) { return b.guardFatal(a, c) }, guardTime: function (a) { return b.guardTime(a) }, logError: function (c, d, e) { b.logError(c, d, e, a) } }, f = [], c = 0; c < d.length; c++)C.hasOwnProperty(d[c]) && (f[c] = N.hasOwnProperty(d[c]) ? N[d[c]](C[d[c]], e) : C[d[c]]); return f } function w(a, b, d, e, f) {
                            return function (c, k) {
                                function n() {
                                    var a = null; e ? a = k : I(k) && (q.start = r(), a = k.apply(g, ja(c, h, l)), q.end = r()); if (b) { C[c] = a; a = c; for (U[a] = !0; (v[a] || []).length;)v[a].shift()(); delete v[a] } q.done =
                                        !0
                                } var h = f || this; I(c) && (k = c, c = F); b && (c = c ? c.replace(X, "") : "__NONAME__", O.hasOwnProperty(c) && h.error(p(", reregistered by ", p(" by ", c + " already registered", O[c]), h.attribution), c), O[c] = h.attribution); for (var l = T[c] = [], m = 0; m < a.length; m++)l[m] = a[m].replace(X, ""); var q = x[c || "anon" + ++ka] = { depend: l, registered: r(), namespace: h.namespace }; c && z.hasOwnProperty(c) && J(l); d ? n() : ha(l, h.guardFatal(c, n), c); return { decorate: function (a) { N[c] = h.guardFatal(c, a) } }
                            }
                        } function Y(a) {
                            return function () {
                                var b = Array.prototype.slice.call(arguments);
                                return { execute: w(b, !1, a, !1, this), register: w(b, !0, a, !1, this) }
                            }
                        } function P(a, b) { return function (d, e) { e || (e = d, d = F); var f = this.attribution; return function () { h.push(b || { attribution: f, name: d, logLevel: a }); var c = e.apply(this, arguments); h.pop(); return c } } } function D(a, b) { this.load = { js: V(this, !0), css: V(this) }; y(this, "namespace", b); y(this, "attribution", a) } function Z() { l.body ? k.trigger("a-bodyBegin") : setTimeout(Z, 20) } "use strict"; var t = E.now = E.now || function () { return +new E }, r = function (a) {
                            return a && a.now ? a.now.bind(a) :
                                t
                        }(g.performance), la = r(), z = {}, T = {}, n = g.ue; G(); G("aui_build_date:3.24.9-2024-10-31"); var aa = { getItem: function (a) { try { return g.localStorage.getItem(a) } catch (b) { } }, setItem: function (a, b) { try { return g.localStorage.setItem(a, b) } catch (d) { } } }, q = g._pSetI(), K = [], A = [], L = !1, ma = navigator.scheduling && "function" === typeof navigator.scheduling.isInputPending; var B = function () {
                            for (var a = q ? q.set(B) : setTimeout(B, 0), b = t(); A.length || K.length;)if ((A.length ? A : K).shift()(), q && ma) {
                                if (150 < t() - b && !navigator.scheduling.isInputPending() ||
                                    50 < t() - b && navigator.scheduling.isInputPending()) return
                            } else if (50 < t() - b) return; q ? q.clear(a) : clearTimeout(a); L = !1
                        }; var U = {}, v = {}, W = {}, M = !1; u(g, "beforeunload", function () { M = !0; setTimeout(function () { M = !1 }, 1E4) }); var X = /^prv:/, O = {}, C = {}, N = {}, x = {}, ka = 0, ba = String.fromCharCode(92), h = [], ca = !0, da = g.onerror; g.onerror = function (a, b, d, e, f) {
                            f && "object" === typeof f || (f = Error(a, b, d), f.columnNumber = e, f.stack = b || d || e ? p(ba, f.message, "at " + p(":", b, d, e)) : F); var c = h.pop() || {}; f.attribution = p(":", f.attribution || c.attribution,
                                c.name); f.logLevel = c.logLevel; f.attribution && console && console.log && console.log([f.logLevel || "ERROR", a, "thrown by", f.attribution].join(" ")); h = []; da && (c = [].slice.call(arguments), c[4] = f, da.apply(g, c))
                        }; D.prototype = {
                            logError: function (a, b, d, e) { b = { message: b, logLevel: d || "ERROR", attribution: p(":", this.attribution, e) }; if (g.ueLogError) return g.ueLogError(a || b, a ? b : null), !0; console && console.error && (console.log(b), console.error(a)); return !1 }, error: function (a, b, d, e) {
                                a = Error(p(":", e, a, d)); a.attribution = p(":", this.attribution,
                                    b); throw a;
                            }, guardError: P(), guardFatal: P("FATAL"), guardCurrent: function (a) { var b = h[h.length - 1]; return b ? P(b.logLevel, b).call(this, a) : a }, guardTime: function (a) { var b = h[h.length - 1], d = b && b.name; return d && d in x ? function () { var b = r(), f = a.apply(this, arguments); x[d].async = (x[d].async || 0) + r() - b; return f } : a }, log: function (a, b, d) { return this.logError(null, a, b, d) }, declare: w([], !0, !0, !0), register: w([], !0), execute: w([]), AUI_BUILD_DATE: "3.24.9-2024-10-31", when: Y(), now: Y(!0), trigger: function (a, b, d) {
                                var e = t(); this.declare(a,
                                    { data: b, pageElapsedTime: e - (g.aPageStart || NaN), triggerTime: e }); d && d.instrument && Q.when("prv:a-logTrigger").execute(function (b) { b(a) })
                            }, handleTriggers: function () { this.log("handleTriggers deprecated") }, attributeErrors: function (a) { return new D(a) }, _namespace: function (a, b) { return new D(a, b) }, setPriority: function (a) { ca ? (ca = !1, J(a)) : this.log("setPriority only accept the first call.") }
                        }; var k = y(g, "AmazonUIPageJS", new D); var Q = k._namespace("PageJS", "AmazonUI"); Q.declare("prv:p-debug", x); k.declare("p-recorder-events",
                            []); k.declare("p-recorder-stop", function () { }); y(g, "P", k); Z(); if (l.addEventListener) { var ea; l.addEventListener("DOMContentLoaded", ea = function () { k.trigger("a-domready"); l.removeEventListener("DOMContentLoaded", ea, !1) }, !1) } var fa = l.documentElement, na = g._pd(k, H, u, R, fa, aa, S, m, "3.24.9-2024-10-31"); H(/UCBrowser/i) || na.localStorage && R(fa, aa.getItem("a-font-class")); k.declare("a-event-revised-handling", !1); g._sw(Q, p, H, ba, m, n, G, I, u, k); k.declare("a-fix-event-off", !1); m("pagejs:pkgExecTime", r() - la)
                    })(window,
                        document, Date);
        (function (b) {
            function q(a, e, d) {
                function g(a, b, c) { var f = Array(e.length); ~l && (f[l] = {}); ~m && (f[m] = c); for (c = 0; c < n.length; c++) { var g = n[c], h = a[c]; f[g] = h } for (c = 0; c < p.length; c++)g = p[c], h = b[c], f[g] = h; a = d.apply(null, f); return ~l ? f[l] : a } "string" !== typeof a && b.P.error("C001"); -1 === a.indexOf("@") && -1 < a.indexOf("/") && (-1 < a.indexOf("es3") || -1 < a.indexOf("evergreen")) && (a = a.substring(0, a.lastIndexOf("/"))); if (!r[a]) {
                    r[a] = !0; d || (d = e, e = []); a = a.split(":", 2); var c = a[1] ? a[0] : void 0, f = (a[1] || a[0]).replace(/@capability\//,
                        "@c/"), k = c ? b.P._namespace(c) : b.P, t = !f.lastIndexOf("@c/", 0), u = !f.lastIndexOf("@m/", 0), n = []; a = []; var p = [], v = [], m = -1, l = -1; for (c = 0; c < e.length; c++) { var h = e[c]; "module" === h && k.error("C002"); "exports" === h ? l = c : "require" === h ? m = c : h.lastIndexOf("@p/", 0) ? h.lastIndexOf("@c/", 0) && h.lastIndexOf("@m/", 0) ? (n.push(c), a.push("mix:" + h)) : (p.push(c), v.push(h)) : (n.push(c), a.push(h.substr(3))) } k.when.apply(k, a).register("mix:" + f, function () {
                            var a = [].slice.call(arguments); return t || u || ~m || p.length ? {
                                capabilities: v, cardModuleFactory: function (b,
                                    c) { b = g(a, b, c); b.P = k; return b }, require: ~m ? q : void 0
                            } : g(a, [], function () { })
                        }); (t || u) && k.when("mix:@amzn/mix.client-runtime", "mix:" + f).execute(function (a, b) { a.registerCapabilityModule(f, b) }); k.when("mix:" + f).register("xcp:" + f, function (a) { return a }); var q = function (a, b, c) { try { var e = -1 < f.indexOf("/") ? f.split("/")[0] : f, d = a[0], g = d.lastIndexOf("./", 0) ? d : e + "/" + d.substr(2), h = g.lastIndexOf("@p/", 0) ? "mix:" + g : g.substr(3); k.when(h).execute(function (a) { try { b(a) } catch (x) { c(x) } }) } catch (w) { c(w) } }
                }
            } "use strict"; var r =
                {}; b.mix_d || ((b.Promise ? P : P.when("3p-promise")).register("@p/promise-is-ready", function (a) { b.Promise = b.Promise || a }), (Array.prototype.includes ? P : P.when("a-polyfill")).register("@p/polyfill-is-ready", function () { }), b.mix_d = function (a, b, d) { P.when("@p/promise-is-ready", "@p/polyfill-is-ready").execute("@p/mix-d-deps", function () { q(a, b, d) }) }, b.xcp_d = b.mix_d, P.when("mix:@amzn/mix.client-runtime").execute(function (a) { P.declare("xcp:@xcp/runtime", a) })); b.mixTimeout || (b.mixTimeout = function (a, e, d) {
                    b.mixCardInitTimeouts ||
                    (b.mixCardInitTimeouts = {}); b.mixCardInitTimeouts[e] && clearTimeout(b.mixCardInitTimeouts[e]); b.mixCardInitTimeouts[e] = setTimeout(function () { P.log("Client-side initialization timeout", "WARN", a) }, d)
                }); b.mix_csa_map = b.mix_csa_map || {}; b.mix_csa_internal = b.mix_csa_internal || function (a, e, d) { return b.mix_csa_map[e] = b.mix_csa_map[e] || b.csa(a, d) }; b.mix_csa_internal_key = b.mix_csa_internal_key || function (a, b) {
                    for (var d = "", e = 0; e < b.length; e++) { var c = b[e]; void 0 !== a[c] && "object" !== typeof a[c] && (d += c + ":" + a[c] + ",") } if (!d) throw Error("bad mix-csa key gen.");
                    return d
                }; b.mix_csa_event = b.mix_csa_event || function (a) { try { var e = b.mix_csa_internal_key(a, ["producerId"]) } catch (d) { return P.logError(d, "MIX C005", "WARN", void 0), function () { } } try { return b.mix_csa_internal("Events", e, a) } catch (d) { return P.logError(d, "MIX C004", "WARN", e), function () { } } }; b.mix_csa = b.mix_csa || function (a, e) {
                    try {
                        e = e || ""; var d = document.querySelectorAll(a); if (1 < d.length) for (var g = 0; g < d.length; g++) { if (d[g].querySelector(e)) { var c = d[g]; break } } else 1 === d.length && (c = d[0]); if (!c) throw Error(" ");
                        return b.mix_csa_internal("Content", a, { element: c })
                    } catch (f) { return P.logError(f, "MIX C004", "WARN", a), function () { } }
                }
        })(window);
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).when('sp.load.js').execute(function () {
            (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/61xJcNKKLXL.js?AUIClients/AmazonUIjQuery');
            (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/11zuylp74DL._RC|11Y+5x+kkTL.js,51cR93oXsVL.js,11yKORv-GTL.js,11GgN1+C7hL.js,01+z+uIeJ-L.js,01VRMV3FBdL.js,21u+kGQyRqL.js,012FVc3131L.js,11aD5q6kNBL.js,11rRjDLdAVL.js,51LgVZTDoFL.js,11nAhXzgUmL.js,119kvzYmMJL.js,1110g-SvlBL.js,11npBNHo-jL.js,21eKR4hvwNL.js,0190vxtlzcL.js,51P8J4TsllL.js,01JYHc2oIlL.js,31nfKXylf6L.js,01ktRCtOqKL.js,01ASnt2lbqL.js,11bEz2VIYrL.js,31o2NGTXThL.js,01rpauTep4L.js,31lTOzOlAqL.js,01tvglXfQOL.js,11Rf82oewsL.js,014gnDeJDsL.js,01A2fK8tgRL.js_.js?AUIClients/AmazonUI');
            (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/51BqsgbDI7L.js?AUIClients/CardJsRuntimeBuzzCopyBuild');
        });
