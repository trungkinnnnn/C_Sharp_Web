﻿/*
Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function () {
    window.CKEDITOR && window.CKEDITOR.dom || (window.CKEDITOR || (window.CKEDITOR = function () {
        var a = /(^|.*[\\\/])ckeditor\.js(?:\?.*|;.*)?$/i, f = {
            timestamp: "L4K9", version: "4.16.1 (Standard)", revision: "cae20318d4", rnd: Math.floor(900 * Math.random()) + 100, _: { pending: [], basePathSrcPattern: a }, status: "unloaded", basePath: function () {
                var d = window.CKEDITOR_BASEPATH || ""; if (!d) for (var b = document.getElementsByTagName("script"), e = 0; e < b.length; e++) { var m = b[e].src.match(a); if (m) { d = m[1]; break } } -1 == d.indexOf(":/") &&
                    "//" != d.slice(0, 2) && (d = 0 === d.indexOf("/") ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + d : location.href.match(/^[^\?]*\/(?:)/)[0] + d); if (!d) throw 'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.'; return d
            }(), getUrl: function (a) {
                -1 == a.indexOf(":/") && 0 !== a.indexOf("/") && (a = this.basePath + a); this.timestamp && "/" != a.charAt(a.length - 1) && !/[&?]t=/.test(a) && (a += (0 <= a.indexOf("?") ? "\x26" : "?") + "t\x3d" + this.timestamp);
                return a
            }, domReady: function () {
                function a() { try { document.addEventListener ? (document.removeEventListener("DOMContentLoaded", a, !1), window.removeEventListener("load", a, !1), b()) : document.attachEvent && "complete" === document.readyState && (document.detachEvent("onreadystatechange", a), window.detachEvent("onload", a), b()) } catch (e) { } } function b() { for (var a; a = e.shift();)a() } var e = []; return function (b) {
                    function c() { try { document.documentElement.doScroll("left") } catch (g) { setTimeout(c, 1); return } a() } e.push(b); "complete" ===
                        document.readyState && setTimeout(a, 1); if (1 == e.length) if (document.addEventListener) document.addEventListener("DOMContentLoaded", a, !1), window.addEventListener("load", a, !1); else if (document.attachEvent) { document.attachEvent("onreadystatechange", a); window.attachEvent("onload", a); b = !1; try { b = !window.frameElement } catch (k) { } document.documentElement.doScroll && b && c() }
                }
            }()
        }, e = window.CKEDITOR_GETURL; if (e) { var b = f.getUrl; f.getUrl = function (a) { return e.call(f, a) || b.call(f, a) } } return f
    }()), function () {
        var a = {}; CKEDITOR.event ||
            (CKEDITOR.event = function () { }, CKEDITOR.event.implementOn = function (a) { var e = CKEDITOR.event.prototype, b; for (b in e) null == a[b] && (a[b] = e[b]) }, CKEDITOR.event.prototype = function () {
                function f(a) { var l = e(this); return l[a] || (l[a] = new b(a)) } var e = function (a) { a = a.getPrivate && a.getPrivate() || a._ || (a._ = {}); return a.events || (a.events = {}) }, b = function (a) { this.name = a; this.listeners = [] }; b.prototype = { getListenerIndex: function (a) { for (var b = 0, e = this.listeners; b < e.length; b++)if (e[b].fn == a) return b; return -1 } }; return {
                    define: function (a,
                        b) { var e = f.call(this, a); CKEDITOR.tools.extend(e, b, !0) }, on: function (b, e, h, m, c) { function k(n, c, k, r) { n = { name: b, sender: this, editor: n, data: c, listenerData: m, stop: k, cancel: r, removeListener: g }; return !1 === e.call(h, n) ? a : n.data } function g() { n.removeListener(b, e) } var n = this, r = f.call(this, b); if (0 > r.getListenerIndex(e)) { r = r.listeners; h || (h = this); isNaN(c) && (c = 10); k.fn = e; k.priority = c; for (var w = r.length - 1; 0 <= w; w--)if (r[w].priority <= c) return r.splice(w + 1, 0, k), { removeListener: g }; r.unshift(k) } return { removeListener: g } },
                    once: function () { var a = Array.prototype.slice.call(arguments), b = a[1]; a[1] = function (a) { a.removeListener(); return b.apply(this, arguments) }; return this.on.apply(this, a) }, capture: function () { CKEDITOR.event.useCapture = 1; var a = this.on.apply(this, arguments); CKEDITOR.event.useCapture = 0; return a }, fire: function () {
                        var b = 0, l = function () { b = 1 }, h = 0, m = function () { h = 1 }; return function (c, k, g) {
                            var n = e(this)[c]; c = b; var r = h; b = h = 0; if (n) {
                                var f = n.listeners; if (f.length) for (var f = f.slice(0), p, t = 0; t < f.length; t++) {
                                    if (n.errorProof) try {
                                        p =
                                        f[t].call(this, g, k, l, m)
                                    } catch (u) { } else p = f[t].call(this, g, k, l, m); p === a ? h = 1 : "undefined" != typeof p && (k = p); if (b || h) break
                                }
                            } k = h ? !1 : "undefined" == typeof k ? !0 : k; b = c; h = r; return k
                        }
                    }(), fireOnce: function (a, b, h) { b = this.fire(a, b, h); delete e(this)[a]; return b }, removeListener: function (a, b) { var h = e(this)[a]; if (h) { var m = h.getListenerIndex(b); 0 <= m && h.listeners.splice(m, 1) } }, removeAllListeners: function () { var a = e(this), b; for (b in a) delete a[b] }, hasListeners: function (a) { return (a = e(this)[a]) && 0 < a.listeners.length }
                }
            }())
    }(),
        CKEDITOR.editor || (CKEDITOR.editor = function () { CKEDITOR._.pending.push([this, arguments]); CKEDITOR.event.call(this) }, CKEDITOR.editor.prototype.fire = function (a, f) { a in { instanceReady: 1, loaded: 1 } && (this[a] = !0); return CKEDITOR.event.prototype.fire.call(this, a, f, this) }, CKEDITOR.editor.prototype.fireOnce = function (a, f) { a in { instanceReady: 1, loaded: 1 } && (this[a] = !0); return CKEDITOR.event.prototype.fireOnce.call(this, a, f, this) }, CKEDITOR.event.implementOn(CKEDITOR.editor.prototype)), CKEDITOR.env || (CKEDITOR.env =
            function () {
                var a = navigator.userAgent.toLowerCase(), f = a.match(/edge[ \/](\d+.?\d*)/), e = -1 < a.indexOf("trident/"), e = !(!f && !e), e = {
                    ie: e, edge: !!f, webkit: !e && -1 < a.indexOf(" applewebkit/"), air: -1 < a.indexOf(" adobeair/"), mac: -1 < a.indexOf("macintosh"), quirks: "BackCompat" == document.compatMode && (!document.documentMode || 10 > document.documentMode), mobile: -1 < a.indexOf("mobile"), iOS: /(ipad|iphone|ipod)/.test(a), isCustomDomain: function () {
                        if (!this.ie) return !1; var a = document.domain, b = window.location.hostname; return a !=
                            b && a != "[" + b + "]"
                    }, secure: "https:" == location.protocol
                }; e.gecko = "Gecko" == navigator.product && !e.webkit && !e.ie; e.webkit && (-1 < a.indexOf("chrome") ? e.chrome = !0 : e.safari = !0); var b = 0; e.ie && (b = f ? parseFloat(f[1]) : e.quirks || !document.documentMode ? parseFloat(a.match(/msie (\d+)/)[1]) : document.documentMode, e.ie9Compat = 9 == b, e.ie8Compat = 8 == b, e.ie7Compat = 7 == b, e.ie6Compat = 7 > b || e.quirks); e.gecko && (f = a.match(/rv:([\d\.]+)/)) && (f = f[1].split("."), b = 1E4 * f[0] + 100 * (f[1] || 0) + 1 * (f[2] || 0)); e.air && (b = parseFloat(a.match(/ adobeair\/(\d+)/)[1]));
                e.webkit && (b = parseFloat(a.match(/ applewebkit\/(\d+)/)[1])); e.version = b; e.isCompatible = !(e.ie && 7 > b) && !(e.gecko && 4E4 > b) && !(e.webkit && 534 > b); e.hidpi = 2 <= window.devicePixelRatio; e.needsBrFiller = e.gecko || e.webkit || e.ie && 10 < b; e.needsNbspFiller = e.ie && 11 > b; e.cssClass = "cke_browser_" + (e.ie ? "ie" : e.gecko ? "gecko" : e.webkit ? "webkit" : "unknown"); e.quirks && (e.cssClass += " cke_browser_quirks"); e.ie && (e.cssClass += " cke_browser_ie" + (e.quirks ? "6 cke_browser_iequirks" : e.version)); e.air && (e.cssClass += " cke_browser_air");
                e.iOS && (e.cssClass += " cke_browser_ios"); e.hidpi && (e.cssClass += " cke_hidpi"); return e
            }()), "unloaded" == CKEDITOR.status && function () {
                CKEDITOR.event.implementOn(CKEDITOR); CKEDITOR.loadFullCore = function () { if ("basic_ready" != CKEDITOR.status) CKEDITOR.loadFullCore._load = 1; else { delete CKEDITOR.loadFullCore; var a = document.createElement("script"); a.type = "text/javascript"; a.src = CKEDITOR.basePath + "ckeditor.js"; document.getElementsByTagName("head")[0].appendChild(a) } }; CKEDITOR.loadFullCoreTimeout = 0; CKEDITOR.add =
                    function (a) { (this._.pending || (this._.pending = [])).push(a) }; (function () { CKEDITOR.domReady(function () { var a = CKEDITOR.loadFullCore, f = CKEDITOR.loadFullCoreTimeout; a && (CKEDITOR.status = "basic_ready", a && a._load ? a() : f && setTimeout(function () { CKEDITOR.loadFullCore && CKEDITOR.loadFullCore() }, 1E3 * f)) }) })(); CKEDITOR.status = "basic_loaded"
            }(), "use strict", CKEDITOR.VERBOSITY_WARN = 1, CKEDITOR.VERBOSITY_ERROR = 2, CKEDITOR.verbosity = CKEDITOR.VERBOSITY_WARN | CKEDITOR.VERBOSITY_ERROR, CKEDITOR.warn = function (a, f) {
                CKEDITOR.verbosity &
                CKEDITOR.VERBOSITY_WARN && CKEDITOR.fire("log", { type: "warn", errorCode: a, additionalData: f })
            }, CKEDITOR.error = function (a, f) { CKEDITOR.verbosity & CKEDITOR.VERBOSITY_ERROR && CKEDITOR.fire("log", { type: "error", errorCode: a, additionalData: f }) }, CKEDITOR.on("log", function (a) {
                if (window.console && window.console.log) {
                    var f = console[a.data.type] ? a.data.type : "log", e = a.data.errorCode; if (a = a.data.additionalData) console[f]("[CKEDITOR] Error code: " + e + ".", a); else console[f]("[CKEDITOR] Error code: " + e + "."); console[f]("[CKEDITOR] For more information about this error go to https://ckeditor.com/docs/ckeditor4/latest/guide/dev_errors.html#" +
                        e)
                }
            }, null, null, 999), CKEDITOR.dom = {}, function () {
                function a(a, c, g) { this._minInterval = a; this._context = g; this._lastOutput = this._scheduledTimer = 0; this._output = CKEDITOR.tools.bind(c, g || {}); var b = this; this.input = function () { function a() { b._lastOutput = (new Date).getTime(); b._scheduledTimer = 0; b._call() } if (!b._scheduledTimer || !1 !== b._reschedule()) { var n = (new Date).getTime() - b._lastOutput; n < b._minInterval ? b._scheduledTimer = setTimeout(a, b._minInterval - n) : a() } } } function f(n, c, g) {
                    a.call(this, n, c, g); this._args = [];
                    var b = this; this.input = CKEDITOR.tools.override(this.input, function (a) { return function () { b._args = Array.prototype.slice.call(arguments); a.call(this) } })
                } var e = [], b = CKEDITOR.env.gecko ? "-moz-" : CKEDITOR.env.webkit ? "-webkit-" : CKEDITOR.env.ie ? "-ms-" : "", d = /&/g, l = />/g, h = /</g, m = /"/g, c = /&(lt|gt|amp|quot|nbsp|shy|#\d{1,5});/g, k = { lt: "\x3c", gt: "\x3e", amp: "\x26", quot: '"', nbsp: " ", shy: "­" }, g = function (a, c) { return "#" == c[0] ? String.fromCharCode(parseInt(c.slice(1), 10)) : k[c] }; CKEDITOR.on("reset", function () { e = [] }); CKEDITOR.tools =
                {
                    arrayCompare: function (a, c) { if (!a && !c) return !0; if (!a || !c || a.length != c.length) return !1; for (var g = 0; g < a.length; g++)if (a[g] != c[g]) return !1; return !0 }, getIndex: function (a, c) { for (var g = 0; g < a.length; ++g)if (c(a[g])) return g; return -1 }, clone: function (a) {
                        var c; if (a && a instanceof Array) { c = []; for (var g = 0; g < a.length; g++)c[g] = CKEDITOR.tools.clone(a[g]); return c } if (null === a || "object" != typeof a || a instanceof String || a instanceof Number || a instanceof Boolean || a instanceof Date || a instanceof RegExp || a.nodeType || a.window ===
                            a) return a; c = new a.constructor; for (g in a) c[g] = CKEDITOR.tools.clone(a[g]); return c
                    }, capitalize: function (a, c) { return a.charAt(0).toUpperCase() + (c ? a.slice(1) : a.slice(1).toLowerCase()) }, extend: function (a) { var c = arguments.length, g, b; "boolean" == typeof (g = arguments[c - 1]) ? c-- : "boolean" == typeof (g = arguments[c - 2]) && (b = arguments[c - 1], c -= 2); for (var d = 1; d < c; d++) { var k = arguments[d] || {}; CKEDITOR.tools.array.forEach(CKEDITOR.tools.object.keys(k), function (c) { if (!0 === g || null == a[c]) if (!b || c in b) a[c] = k[c] }) } return a },
                    prototypedCopy: function (a) { var c = function () { }; c.prototype = a; return new c }, copy: function (a) { var c = {}, g; for (g in a) c[g] = a[g]; return c }, isArray: function (a) { return "[object Array]" == Object.prototype.toString.call(a) }, isEmpty: function (a) { for (var c in a) if (a.hasOwnProperty(c)) return !1; return !0 }, cssVendorPrefix: function (a, c, g) { if (g) return b + a + ":" + c + ";" + a + ":" + c; g = {}; g[a] = c; g[b + a] = c; return g }, cssStyleToDomStyle: function () {
                        var a = document.createElement("div").style, c = "undefined" != typeof a.cssFloat ? "cssFloat" :
                            "undefined" != typeof a.styleFloat ? "styleFloat" : "float"; return function (a) { return "float" == a ? c : a.replace(/-./g, function (a) { return a.substr(1).toUpperCase() }) }
                    }(), buildStyleHtml: function (a) { a = [].concat(a); for (var c, g = [], b = 0; b < a.length; b++)if (c = a[b]) /@import|[{}]/.test(c) ? g.push("\x3cstyle\x3e" + c + "\x3c/style\x3e") : g.push('\x3clink type\x3d"text/css" rel\x3dstylesheet href\x3d"' + c + '"\x3e'); return g.join("") }, htmlEncode: function (a) {
                        return void 0 === a || null === a ? "" : String(a).replace(d, "\x26amp;").replace(l,
                            "\x26gt;").replace(h, "\x26lt;")
                    }, htmlDecode: function (a) { return a.replace(c, g) }, htmlEncodeAttr: function (a) { return CKEDITOR.tools.htmlEncode(a).replace(m, "\x26quot;") }, htmlDecodeAttr: function (a) { return CKEDITOR.tools.htmlDecode(a) }, transformPlainTextToHtml: function (a, c) {
                        var g = c == CKEDITOR.ENTER_BR, b = this.htmlEncode(a.replace(/\r\n/g, "\n")), b = b.replace(/\t/g, "\x26nbsp;\x26nbsp; \x26nbsp;"), d = c == CKEDITOR.ENTER_P ? "p" : "div"; if (!g) {
                            var k = /\n{2}/g; if (k.test(b)) var e = "\x3c" + d + "\x3e", m = "\x3c/" + d + "\x3e", b = e +
                                b.replace(k, function () { return m + e }) + m
                        } b = b.replace(/\n/g, "\x3cbr\x3e"); g || (b = b.replace(new RegExp("\x3cbr\x3e(?\x3d\x3c/" + d + "\x3e)"), function (a) { return CKEDITOR.tools.repeat(a, 2) })); b = b.replace(/^ | $/g, "\x26nbsp;"); return b = b.replace(/(>|\s) /g, function (a, c) { return c + "\x26nbsp;" }).replace(/ (?=<)/g, "\x26nbsp;")
                    }, getNextNumber: function () { var a = 0; return function () { return ++a } }(), getNextId: function () { return "cke_" + this.getNextNumber() }, getUniqueId: function () {
                        for (var a = "e", c = 0; 8 > c; c++)a += Math.floor(65536 *
                            (1 + Math.random())).toString(16).substring(1); return a
                    }, override: function (a, c) { var g = c(a); g.prototype = a.prototype; return g }, setTimeout: function (a, c, g, b, d) { d || (d = window); g || (g = d); return d.setTimeout(function () { b ? a.apply(g, [].concat(b)) : a.apply(g) }, c || 0) }, throttle: function (a, c, g) { return new this.buffers.throttle(a, c, g) }, trim: function () { var a = /(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g; return function (c) { return c.replace(a, "") } }(), ltrim: function () { var a = /^[ \t\n\r]+/g; return function (c) { return c.replace(a, "") } }(),
                    rtrim: function () { var a = /[ \t\n\r]+$/g; return function (c) { return c.replace(a, "") } }(), indexOf: function (a, c) { if ("function" == typeof c) for (var g = 0, b = a.length; g < b; g++) { if (c(a[g])) return g } else { if (a.indexOf) return a.indexOf(c); g = 0; for (b = a.length; g < b; g++)if (a[g] === c) return g } return -1 }, search: function (a, c) { var g = CKEDITOR.tools.indexOf(a, c); return 0 <= g ? a[g] : null }, bind: function (a, c) { var g = Array.prototype.slice.call(arguments, 2); return function () { return a.apply(c, g.concat(Array.prototype.slice.call(arguments))) } },
                    createClass: function (a) {
                        var c = a.$, g = a.base, b = a.privates || a._, d = a.proto; a = a.statics; !c && (c = function () { g && this.base.apply(this, arguments) }); if (b) var k = c, c = function () { var a = this._ || (this._ = {}), c; for (c in b) { var g = b[c]; a[c] = "function" == typeof g ? CKEDITOR.tools.bind(g, this) : g } k.apply(this, arguments) }; g && (c.prototype = this.prototypedCopy(g.prototype), c.prototype.constructor = c, c.base = g, c.baseProto = g.prototype, c.prototype.base = function q() { this.base = g.prototype.base; g.apply(this, arguments); this.base = q }); d &&
                            this.extend(c.prototype, d, !0); a && this.extend(c, a, !0); return c
                    }, addFunction: function (a, c) { return e.push(function () { return a.apply(c || this, arguments) }) - 1 }, removeFunction: function (a) { e[a] = null }, callFunction: function (a) { var c = e[a]; return c && c.apply(window, Array.prototype.slice.call(arguments, 1)) }, cssLength: function () { var a = /^-?\d+\.?\d*px$/, c; return function (g) { c = CKEDITOR.tools.trim(g + "") + "px"; return a.test(c) ? c : g || "" } }(), convertToPx: function () {
                        var a; return function (c) {
                            a || (a = CKEDITOR.dom.element.createFromHtml('\x3cdiv style\x3d"position:absolute;left:-9999px;top:-9999px;margin:0px;padding:0px;border:0px;"\x3e\x3c/div\x3e',
                                CKEDITOR.document), CKEDITOR.document.getBody().append(a)); if (!/%$/.test(c)) { var g = 0 > parseFloat(c); g && (c = c.replace("-", "")); a.setStyle("width", c); c = a.$.clientWidth; return g ? -c : c } return c
                        }
                    }(), repeat: function (a, c) { return Array(c + 1).join(a) }, tryThese: function () { for (var a, c = 0, g = arguments.length; c < g; c++) { var b = arguments[c]; try { a = b(); break } catch (d) { } } return a }, genKey: function () { return Array.prototype.slice.call(arguments).join("-") }, defer: function (a) {
                        return function () {
                            var c = arguments, g = this; window.setTimeout(function () {
                                a.apply(g,
                                    c)
                            }, 0)
                        }
                    }, normalizeCssText: function (a, c) { var g = [], b, d = CKEDITOR.tools.parseCssText(a, !0, c); for (b in d) g.push(b + ":" + d[b]); g.sort(); return g.length ? g.join(";") + ";" : "" }, convertRgbToHex: function (a) { return a.replace(/(?:rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\))/gi, function (a, c, g, b) { a = [c, g, b]; for (c = 0; 3 > c; c++)a[c] = ("0" + parseInt(a[c], 10).toString(16)).slice(-2); return "#" + a.join("") }) }, normalizeHex: function (a) {
                        return a.replace(/#(([0-9a-f]{3}){1,2})($|;|\s+)/gi, function (a, c, g, b) {
                            a = c.toLowerCase(); 3 == a.length &&
                                (a = a.split(""), a = [a[0], a[0], a[1], a[1], a[2], a[2]].join("")); return "#" + a + b
                        })
                    }, _isValidColorFormat: function (a) { if (!a) return !1; a = a.replace(/\s+/g, ""); return /^[a-z0-9()#%,./]+$/i.test(a) }, parseCssText: function (a, c, g) {
                        var b = {}; g && (a = (new CKEDITOR.dom.element("span")).setAttribute("style", a).getAttribute("style") || ""); a && (a = CKEDITOR.tools.normalizeHex(CKEDITOR.tools.convertRgbToHex(a))); if (!a || ";" == a) return b; a.replace(/&quot;/g, '"').replace(/\s*([^:;\s]+)\s*:\s*([^;]+)\s*(?=;|$)/g, function (a, g, n) {
                            c && (g =
                                g.toLowerCase(), "font-family" == g && (n = n.replace(/\s*,\s*/g, ",")), n = CKEDITOR.tools.trim(n)); b[g] = n
                        }); return b
                    }, writeCssText: function (a, c) { var g, b = []; for (g in a) b.push(g + ":" + a[g]); c && b.sort(); return b.join("; ") }, objectCompare: function (a, c, g) { var b; if (!a && !c) return !0; if (!a || !c) return !1; for (b in a) if (a[b] != c[b]) return !1; if (!g) for (b in c) if (a[b] != c[b]) return !1; return !0 }, objectKeys: function (a) { return CKEDITOR.tools.object.keys(a) }, convertArrayToObject: function (a, c) {
                        var g = {}; 1 == arguments.length && (c = !0);
                        for (var b = 0, d = a.length; b < d; ++b)g[a[b]] = c; return g
                    }, getStyledSpans: function (a, c) { var g = CKEDITOR.env.ie && 8 == CKEDITOR.env.version ? a.toUpperCase() : a, g = c.find("span[style*\x3d" + g + "]").toArray(); return CKEDITOR.tools.array.filter(g, function (c) { return !!c.getStyle(a) }) }, fixDomain: function () { for (var a; ;)try { a = window.parent.document.domain; break } catch (c) { a = a ? a.replace(/.+?(?:\.|$)/, "") : document.domain; if (!a) break; document.domain = a } return !!a }, eventsBuffer: function (a, c, g) { return new this.buffers.event(a, c, g) },
                    enableHtml5Elements: function (a, c) { for (var g = "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video".split(" "), b = g.length, d; b--;)d = a.createElement(g[b]), c && a.appendChild(d) }, checkIfAnyArrayItemMatches: function (a, c) { for (var g = 0, b = a.length; g < b; ++g)if (a[g].match(c)) return !0; return !1 }, checkIfAnyObjectPropertyMatches: function (a, c) { for (var g in a) if (g.match(c)) return !0; return !1 }, keystrokeToString: function (a,
                        c) { var g = this.keystrokeToArray(a, c); g.display = g.display.join("+"); g.aria = g.aria.join("+"); return g }, keystrokeToArray: function (a, c) { var g = c & 16711680, b = c & 65535, d = CKEDITOR.env.mac, k = [], e = []; g & CKEDITOR.CTRL && (k.push(d ? "⌘" : a[17]), e.push(d ? a[224] : a[17])); g & CKEDITOR.ALT && (k.push(d ? "⌥" : a[18]), e.push(a[18])); g & CKEDITOR.SHIFT && (k.push(d ? "⇧" : a[16]), e.push(a[16])); b && (a[b] ? (k.push(a[b]), e.push(a[b])) : (k.push(String.fromCharCode(b)), e.push(String.fromCharCode(b)))); return { display: k, aria: e } }, transparentImageData: "data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw\x3d\x3d",
                    getCookie: function (a) { a = a.toLowerCase(); for (var c = document.cookie.split(";"), g, b, d = 0; d < c.length; d++)if (g = c[d].split("\x3d"), b = decodeURIComponent(CKEDITOR.tools.trim(g[0]).toLowerCase()), b === a) return decodeURIComponent(1 < g.length ? g[1] : ""); return null }, setCookie: function (a, c) { document.cookie = encodeURIComponent(a) + "\x3d" + encodeURIComponent(c) + ";path\x3d/" }, getCsrfToken: function () {
                        var a = CKEDITOR.tools.getCookie("ckCsrfToken"); if (!a || 40 != a.length) {
                            var a = [], c = ""; if (window.crypto && window.crypto.getRandomValues) a =
                                new Uint8Array(40), window.crypto.getRandomValues(a); else for (var g = 0; 40 > g; g++)a.push(Math.floor(256 * Math.random())); for (g = 0; g < a.length; g++)var b = "abcdefghijklmnopqrstuvwxyz0123456789".charAt(a[g] % 36), c = c + (.5 < Math.random() ? b.toUpperCase() : b); a = c; CKEDITOR.tools.setCookie("ckCsrfToken", a)
                        } return a
                    }, escapeCss: function (a) { return a ? window.CSS && CSS.escape ? CSS.escape(a) : isNaN(parseInt(a.charAt(0), 10)) ? a : "\\3" + a.charAt(0) + " " + a.substring(1, a.length) : "" }, getMouseButton: function (a) {
                        return (a = a && a.data ? a.data.$ :
                            a) ? CKEDITOR.tools.normalizeMouseButton(a.button) : !1
                    }, normalizeMouseButton: function (a, c) { if (!CKEDITOR.env.ie || 9 <= CKEDITOR.env.version && !CKEDITOR.env.ie6Compat) return a; for (var g = [[CKEDITOR.MOUSE_BUTTON_LEFT, 1], [CKEDITOR.MOUSE_BUTTON_MIDDLE, 4], [CKEDITOR.MOUSE_BUTTON_RIGHT, 2]], b = 0; b < g.length; b++) { var d = g[b]; if (d[0] === a && c) return d[1]; if (!c && d[1] === a) return d[0] } }, convertHexStringToBytes: function (a) { var c = [], g = a.length / 2, b; for (b = 0; b < g; b++)c.push(parseInt(a.substr(2 * b, 2), 16)); return c }, convertBytesToBase64: function (a) {
                        var c =
                            "", g = a.length, b; for (b = 0; b < g; b += 3) { var d = a.slice(b, b + 3), k = d.length, e = [], m; if (3 > k) for (m = k; 3 > m; m++)d[m] = 0; e[0] = (d[0] & 252) >> 2; e[1] = (d[0] & 3) << 4 | d[1] >> 4; e[2] = (d[1] & 15) << 2 | (d[2] & 192) >> 6; e[3] = d[2] & 63; for (m = 0; 4 > m; m++)c = m <= k ? c + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e[m]) : c + "\x3d" } return c
                    }, style: {
                        parse: {
                            _borderStyle: "none hidden dotted dashed solid double groove ridge inset outset".split(" "), _widthRegExp: /^(thin|medium|thick|[\+-]?\d+(\.\d+)?[a-z%]+|[\+-]?0+(\.0+)?|\.\d+[a-z%]+)$/,
                            _rgbaRegExp: /rgba?\(\s*\d+%?\s*,\s*\d+%?\s*,\s*\d+%?\s*(?:,\s*[0-9.]+\s*)?\)/gi, _hslaRegExp: /hsla?\(\s*[0-9.]+\s*,\s*\d+%\s*,\s*\d+%\s*(?:,\s*[0-9.]+\s*)?\)/gi, background: function (a) { var c = {}, g = this._findColor(a); g.length && (c.color = g[0], CKEDITOR.tools.array.forEach(g, function (c) { a = a.replace(c, "") })); if (a = CKEDITOR.tools.trim(a)) c.unprocessed = a; return c }, margin: function (a) {
                                return CKEDITOR.tools.style.parse.sideShorthand(a, function (a) {
                                    return a.match(/(?:\-?[\.\d]+(?:%|\w*)|auto|inherit|initial|unset|revert)/g) ||
                                        ["0px"]
                                })
                            }, sideShorthand: function (a, c) { function g(a) { b.top = d[a[0]]; b.right = d[a[1]]; b.bottom = d[a[2]]; b.left = d[a[3]] } var b = {}, d = c ? c(a) : a.split(/\s+/); switch (d.length) { case 1: g([0, 0, 0, 0]); break; case 2: g([0, 1, 0, 1]); break; case 3: g([0, 1, 2, 1]); break; case 4: g([0, 1, 2, 3]) }return b }, border: function (a) { return CKEDITOR.tools.style.border.fromCssRule(a) }, _findColor: function (a) {
                                var c = [], g = CKEDITOR.tools.array, c = c.concat(a.match(this._rgbaRegExp) || []), c = c.concat(a.match(this._hslaRegExp) || []); return c = c.concat(g.filter(a.split(/\s+/),
                                    function (a) { return a.match(/^\#[a-f0-9]{3}(?:[a-f0-9]{3})?$/gi) ? !0 : a.toLowerCase() in CKEDITOR.tools.style.parse._colors }))
                            }
                        }
                    }, array: {
                        filter: function (a, c, g) { var b = []; this.forEach(a, function (d, k) { c.call(g, d, k, a) && b.push(d) }); return b }, find: function (a, c, g) { for (var b = a.length, d = 0; d < b;) { if (c.call(g, a[d], d, a)) return a[d]; d++ } }, forEach: function (a, c, g) { var b = a.length, d; for (d = 0; d < b; d++)c.call(g, a[d], d, a) }, map: function (a, c, g) { for (var b = [], d = 0; d < a.length; d++)b.push(c.call(g, a[d], d, a)); return b }, reduce: function (a,
                            c, g, b) { for (var d = 0; d < a.length; d++)g = c.call(b, g, a[d], d, a); return g }, every: function (a, c, g) { if (!a.length) return !0; c = this.filter(a, c, g); return a.length === c.length }, some: function (a, c, g) { for (var b = 0; b < a.length; b++)if (c.call(g, a[b], b, a)) return !0; return !1 }, zip: function (a, c) { return CKEDITOR.tools.array.map(a, function (a, g) { return [a, c[g]] }) }, unique: function (a) { return this.filter(a, function (c, g) { return g === CKEDITOR.tools.array.indexOf(a, c) }) }
                    }, object: {
                        DONT_ENUMS: "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),
                        entries: function (a) { return CKEDITOR.tools.array.map(CKEDITOR.tools.object.keys(a), function (c) { return [c, a[c]] }) }, values: function (a) { return CKEDITOR.tools.array.map(CKEDITOR.tools.object.keys(a), function (c) { return a[c] }) }, keys: function (a) {
                            var c = Object.prototype.hasOwnProperty, g = [], b = CKEDITOR.tools.object.DONT_ENUMS; if (CKEDITOR.env.ie && 9 > CKEDITOR.env.version && (!a || "object" !== typeof a)) { c = []; if ("string" === typeof a) for (g = 0; g < a.length; g++)c.push(String(g)); return c } for (var d in a) g.push(d); if (CKEDITOR.env.ie &&
                                9 > CKEDITOR.env.version) for (d = 0; d < b.length; d++)c.call(a, b[d]) && g.push(b[d]); return g
                        }, findKey: function (a, c) { if ("object" !== typeof a) return null; for (var g in a) if (a[g] === c) return g; return null }, merge: function (a, c) { var g = CKEDITOR.tools, b = g.clone(a), d = g.clone(c); g.array.forEach(g.object.keys(d), function (a) { b[a] = "object" === typeof d[a] && "object" === typeof b[a] ? g.object.merge(b[a], d[a]) : d[a] }); return b }
                    }, getAbsoluteRectPosition: function (a, c) {
                        function g(a) {
                            if (a) {
                                var c = a.getClientRect(); b.top += c.top; b.left +=
                                    c.left; "x" in b && "y" in b && (b.x += c.x, b.y += c.y); g(a.getWindow().getFrame())
                            }
                        } var b = CKEDITOR.tools.copy(c); g(a.getFrame()); var d = CKEDITOR.document.getWindow().getScrollPosition(); b.top += d.y; b.left += d.x; "x" in b && "y" in b && (b.y += d.y, b.x += d.x); b.right = b.left + b.width; b.bottom = b.top + b.height; return b
                    }
                }; a.prototype = {
                    reset: function () { this._lastOutput = 0; this._clearTimer() }, _reschedule: function () { return !1 }, _call: function () { this._output() }, _clearTimer: function () {
                        this._scheduledTimer && clearTimeout(this._scheduledTimer);
                        this._scheduledTimer = 0
                    }
                }; f.prototype = CKEDITOR.tools.prototypedCopy(a.prototype); f.prototype._reschedule = function () { this._scheduledTimer && this._clearTimer() }; f.prototype._call = function () { this._output.apply(this._context, this._args) }; CKEDITOR.tools.buffers = {}; CKEDITOR.tools.buffers.event = a; CKEDITOR.tools.buffers.throttle = f; CKEDITOR.tools.style.border = CKEDITOR.tools.createClass({
                    $: function (a) { a = a || {}; this.width = a.width; this.style = a.style; this.color = a.color; this._.normalize() }, _: {
                        normalizeMap: {
                            color: [[/windowtext/g,
                                "black"]]
                        }, normalize: function () { for (var a in this._.normalizeMap) { var c = this[a]; c && (this[a] = CKEDITOR.tools.array.reduce(this._.normalizeMap[a], function (a, c) { return a.replace(c[0], c[1]) }, c)) } }
                    }, proto: { toString: function () { return CKEDITOR.tools.array.filter([this.width, this.style, this.color], function (a) { return !!a }).join(" ") } }, statics: {
                        fromCssRule: function (a) {
                            var c = {}, g = a.split(/\s+/g); a = CKEDITOR.tools.style.parse._findColor(a); a.length && (c.color = a[0]); CKEDITOR.tools.array.forEach(g, function (a) {
                                c.style ||
                                -1 === CKEDITOR.tools.indexOf(CKEDITOR.tools.style.parse._borderStyle, a) ? !c.width && CKEDITOR.tools.style.parse._widthRegExp.test(a) && (c.width = a) : c.style = a
                            }); return new CKEDITOR.tools.style.border(c)
                        }, splitCssValues: function (a, c) {
                            c = c || {}; var g = CKEDITOR.tools.array.reduce(["width", "style", "color"], function (g, b) { var d = a["border-" + b] || c[b]; g[b] = d ? CKEDITOR.tools.style.parse.sideShorthand(d) : null; return g }, {}); return CKEDITOR.tools.array.reduce(["top", "right", "bottom", "left"], function (c, b) {
                                var d = {}, k; for (k in g) {
                                    var e =
                                        a["border-" + b + "-" + k]; d[k] = e ? e : g[k] && g[k][b]
                                } c["border-" + b] = new CKEDITOR.tools.style.border(d); return c
                            }, {})
                        }
                    }
                }); CKEDITOR.tools.array.indexOf = CKEDITOR.tools.indexOf; CKEDITOR.tools.array.isArray = CKEDITOR.tools.isArray; CKEDITOR.MOUSE_BUTTON_LEFT = 0; CKEDITOR.MOUSE_BUTTON_MIDDLE = 1; CKEDITOR.MOUSE_BUTTON_RIGHT = 2
            }(), CKEDITOR.dtd = function () {
                var a = CKEDITOR.tools.extend, f = function (a, c) { for (var b = CKEDITOR.tools.clone(a), d = 1; d < arguments.length; d++) { c = arguments[d]; for (var e in c) delete b[e] } return b }, e = {}, b = {},
                d = { address: 1, article: 1, aside: 1, blockquote: 1, details: 1, div: 1, dl: 1, fieldset: 1, figure: 1, footer: 1, form: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, header: 1, hgroup: 1, hr: 1, main: 1, menu: 1, nav: 1, ol: 1, p: 1, pre: 1, section: 1, table: 1, ul: 1 }, l = { command: 1, link: 1, meta: 1, noscript: 1, script: 1, style: 1 }, h = {}, m = { "#": 1 }, c = { center: 1, dir: 1, noframes: 1 }; a(e, {
                    a: 1, abbr: 1, area: 1, audio: 1, b: 1, bdi: 1, bdo: 1, br: 1, button: 1, canvas: 1, cite: 1, code: 1, command: 1, datalist: 1, del: 1, dfn: 1, em: 1, embed: 1, i: 1, iframe: 1, img: 1, input: 1, ins: 1, kbd: 1, keygen: 1, label: 1, map: 1,
                    mark: 1, meter: 1, noscript: 1, object: 1, output: 1, progress: 1, q: 1, ruby: 1, s: 1, samp: 1, script: 1, select: 1, small: 1, span: 1, strong: 1, sub: 1, sup: 1, textarea: 1, time: 1, u: 1, "var": 1, video: 1, wbr: 1
                }, m, { acronym: 1, applet: 1, basefont: 1, big: 1, font: 1, isindex: 1, strike: 1, style: 1, tt: 1 }); a(b, d, e, c); f = {
                    a: f(e, { a: 1, button: 1 }), abbr: e, address: b, area: h, article: b, aside: b, audio: a({ source: 1, track: 1 }, b), b: e, base: h, bdi: e, bdo: e, blockquote: b, body: b, br: h, button: f(e, { a: 1, button: 1 }), canvas: e, caption: b, cite: e, code: e, col: h, colgroup: { col: 1 }, command: h,
                    datalist: a({ option: 1 }, e), dd: b, del: e, details: a({ summary: 1 }, b), dfn: e, div: b, dl: { dt: 1, dd: 1 }, dt: b, em: e, embed: h, fieldset: a({ legend: 1 }, b), figcaption: b, figure: a({ figcaption: 1 }, b), footer: b, form: b, h1: e, h2: e, h3: e, h4: e, h5: e, h6: e, head: a({ title: 1, base: 1 }, l), header: b, hgroup: { h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1 }, hr: h, html: a({ head: 1, body: 1 }, b, l), i: e, iframe: m, img: h, input: h, ins: e, kbd: e, keygen: h, label: e, legend: e, li: b, link: h, main: b, map: b, mark: e, menu: a({ li: 1 }, b), meta: h, meter: f(e, { meter: 1 }), nav: b, noscript: a({ link: 1, meta: 1, style: 1 },
                        e), object: a({ param: 1 }, e), ol: { li: 1 }, optgroup: { option: 1 }, option: m, output: e, p: e, param: h, pre: e, progress: f(e, { progress: 1 }), q: e, rp: e, rt: e, ruby: a({ rp: 1, rt: 1 }, e), s: e, samp: e, script: m, section: b, select: { optgroup: 1, option: 1 }, small: e, source: h, span: e, strong: e, style: m, sub: e, summary: a({ h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1 }, e), sup: e, table: { caption: 1, colgroup: 1, thead: 1, tfoot: 1, tbody: 1, tr: 1 }, tbody: { tr: 1 }, td: b, textarea: m, tfoot: { tr: 1 }, th: b, thead: { tr: 1 }, time: f(e, { time: 1 }), title: m, tr: { th: 1, td: 1 }, track: h, u: e, ul: { li: 1 }, "var": e,
                    video: a({ source: 1, track: 1 }, b), wbr: h, acronym: e, applet: a({ param: 1 }, b), basefont: h, big: e, center: b, dialog: h, dir: { li: 1 }, font: e, isindex: h, noframes: b, strike: e, tt: e
                }; a(f, {
                    $block: a({ audio: 1, dd: 1, dt: 1, figcaption: 1, li: 1, video: 1 }, d, c), $blockLimit: { article: 1, aside: 1, audio: 1, body: 1, caption: 1, details: 1, dir: 1, div: 1, dl: 1, fieldset: 1, figcaption: 1, figure: 1, footer: 1, form: 1, header: 1, hgroup: 1, main: 1, menu: 1, nav: 1, ol: 1, section: 1, table: 1, td: 1, th: 1, tr: 1, ul: 1, video: 1 }, $cdata: { script: 1, style: 1 }, $editable: {
                        address: 1, article: 1,
                        aside: 1, blockquote: 1, body: 1, details: 1, div: 1, fieldset: 1, figcaption: 1, footer: 1, form: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, header: 1, hgroup: 1, main: 1, nav: 1, p: 1, pre: 1, section: 1
                    }, $empty: { area: 1, base: 1, basefont: 1, br: 1, col: 1, command: 1, dialog: 1, embed: 1, hr: 1, img: 1, input: 1, isindex: 1, keygen: 1, link: 1, meta: 1, param: 1, source: 1, track: 1, wbr: 1 }, $inline: e, $list: { dl: 1, ol: 1, ul: 1 }, $listItem: { dd: 1, dt: 1, li: 1 }, $nonBodyContent: a({ body: 1, head: 1, html: 1 }, f.head), $nonEditable: {
                        applet: 1, audio: 1, button: 1, embed: 1, iframe: 1, map: 1, object: 1,
                        option: 1, param: 1, script: 1, textarea: 1, video: 1
                    }, $object: { applet: 1, audio: 1, button: 1, hr: 1, iframe: 1, img: 1, input: 1, object: 1, select: 1, table: 1, textarea: 1, video: 1 }, $removeEmpty: { abbr: 1, acronym: 1, b: 1, bdi: 1, bdo: 1, big: 1, cite: 1, code: 1, del: 1, dfn: 1, em: 1, font: 1, i: 1, ins: 1, label: 1, kbd: 1, mark: 1, meter: 1, output: 1, q: 1, ruby: 1, s: 1, samp: 1, small: 1, span: 1, strike: 1, strong: 1, sub: 1, sup: 1, time: 1, tt: 1, u: 1, "var": 1 }, $tabIndex: { a: 1, area: 1, button: 1, input: 1, object: 1, select: 1, textarea: 1 }, $tableContent: {
                        caption: 1, col: 1, colgroup: 1, tbody: 1,
                        td: 1, tfoot: 1, th: 1, thead: 1, tr: 1
                    }, $transparent: { a: 1, audio: 1, canvas: 1, del: 1, ins: 1, map: 1, noscript: 1, object: 1, video: 1 }, $intermediate: { caption: 1, colgroup: 1, dd: 1, dt: 1, figcaption: 1, legend: 1, li: 1, optgroup: 1, option: 1, rp: 1, rt: 1, summary: 1, tbody: 1, td: 1, tfoot: 1, th: 1, thead: 1, tr: 1 }
                }); return f
            }(), CKEDITOR.dom.event = function (a) { this.$ = a }, CKEDITOR.dom.event.prototype = {
                getKey: function () { return this.$.keyCode || this.$.which }, getKeystroke: function () {
                    var a = this.getKey(); if (this.$.ctrlKey || this.$.metaKey) a += CKEDITOR.CTRL;
                    this.$.shiftKey && (a += CKEDITOR.SHIFT); this.$.altKey && (a += CKEDITOR.ALT); return a
                }, preventDefault: function (a) { var f = this.$; f.preventDefault ? f.preventDefault() : f.returnValue = !1; a && this.stopPropagation() }, stopPropagation: function () { var a = this.$; a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0 }, getTarget: function () { var a = this.$.target || this.$.srcElement; return a ? new CKEDITOR.dom.node(a) : null }, getPhase: function () { return this.$.eventPhase || 2 }, getPageOffset: function () {
                    var a = this.getTarget().getDocument().$;
                    return { x: this.$.pageX || this.$.clientX + (a.documentElement.scrollLeft || a.body.scrollLeft), y: this.$.pageY || this.$.clientY + (a.documentElement.scrollTop || a.body.scrollTop) }
                }
            }, CKEDITOR.CTRL = 1114112, CKEDITOR.SHIFT = 2228224, CKEDITOR.ALT = 4456448, CKEDITOR.EVENT_PHASE_CAPTURING = 1, CKEDITOR.EVENT_PHASE_AT_TARGET = 2, CKEDITOR.EVENT_PHASE_BUBBLING = 3, CKEDITOR.dom.domObject = function (a) { a && (this.$ = a) }, CKEDITOR.dom.domObject.prototype = function () {
                var a = function (a, e) {
                    return function (b) {
                        "undefined" != typeof CKEDITOR && a.fire(e,
                            new CKEDITOR.dom.event(b))
                    }
                }; return {
                    getPrivate: function () { var a; (a = this.getCustomData("_")) || this.setCustomData("_", a = {}); return a }, on: function (f) { var e = this.getCustomData("_cke_nativeListeners"); e || (e = {}, this.setCustomData("_cke_nativeListeners", e)); e[f] || (e = e[f] = a(this, f), this.$.addEventListener ? this.$.addEventListener(f, e, !!CKEDITOR.event.useCapture) : this.$.attachEvent && this.$.attachEvent("on" + f, e)); return CKEDITOR.event.prototype.on.apply(this, arguments) }, removeListener: function (a) {
                        CKEDITOR.event.prototype.removeListener.apply(this,
                            arguments); if (!this.hasListeners(a)) { var e = this.getCustomData("_cke_nativeListeners"), b = e && e[a]; b && (this.$.removeEventListener ? this.$.removeEventListener(a, b, !1) : this.$.detachEvent && this.$.detachEvent("on" + a, b), delete e[a]) }
                    }, removeAllListeners: function () {
                        try { var a = this.getCustomData("_cke_nativeListeners"), e; for (e in a) { var b = a[e]; this.$.detachEvent ? this.$.detachEvent("on" + e, b) : this.$.removeEventListener && this.$.removeEventListener(e, b, !1); delete a[e] } } catch (d) {
                            if (!CKEDITOR.env.edge || -2146828218 !==
                                d.number) throw d;
                        } CKEDITOR.event.prototype.removeAllListeners.call(this)
                    }
                }
            }(), function (a) {
                var f = {}; CKEDITOR.on("reset", function () { f = {} }); a.equals = function (a) { try { return a && a.$ === this.$ } catch (b) { return !1 } }; a.setCustomData = function (a, b) { var d = this.getUniqueId(); (f[d] || (f[d] = {}))[a] = b; return this }; a.getCustomData = function (a) { var b = this.$["data-cke-expando"]; return (b = b && f[b]) && a in b ? b[a] : null }; a.removeCustomData = function (a) {
                    var b = this.$["data-cke-expando"], b = b && f[b], d, l; b && (d = b[a], l = a in b, delete b[a]);
                    return l ? d : null
                }; a.clearCustomData = function () { this.removeAllListeners(); var a = this.getUniqueId(); a && delete f[a] }; a.getUniqueId = function () { return this.$["data-cke-expando"] || (this.$["data-cke-expando"] = CKEDITOR.tools.getNextNumber()) }; CKEDITOR.event.implementOn(a)
            }(CKEDITOR.dom.domObject.prototype), CKEDITOR.dom.node = function (a) {
                return a ? new CKEDITOR.dom[a.nodeType == CKEDITOR.NODE_DOCUMENT ? "document" : a.nodeType == CKEDITOR.NODE_ELEMENT ? "element" : a.nodeType == CKEDITOR.NODE_TEXT ? "text" : a.nodeType == CKEDITOR.NODE_COMMENT ?
                    "comment" : a.nodeType == CKEDITOR.NODE_DOCUMENT_FRAGMENT ? "documentFragment" : "domObject"](a) : this
            }, CKEDITOR.dom.node.prototype = new CKEDITOR.dom.domObject, CKEDITOR.NODE_ELEMENT = 1, CKEDITOR.NODE_DOCUMENT = 9, CKEDITOR.NODE_TEXT = 3, CKEDITOR.NODE_COMMENT = 8, CKEDITOR.NODE_DOCUMENT_FRAGMENT = 11, CKEDITOR.POSITION_IDENTICAL = 0, CKEDITOR.POSITION_DISCONNECTED = 1, CKEDITOR.POSITION_FOLLOWING = 2, CKEDITOR.POSITION_PRECEDING = 4, CKEDITOR.POSITION_IS_CONTAINED = 8, CKEDITOR.POSITION_CONTAINS = 16, CKEDITOR.tools.extend(CKEDITOR.dom.node.prototype,
                {
                    appendTo: function (a, f) { a.append(this, f); return a }, clone: function (a, f) {
                        function e(b) { b["data-cke-expando"] && (b["data-cke-expando"] = !1); if (b.nodeType == CKEDITOR.NODE_ELEMENT || b.nodeType == CKEDITOR.NODE_DOCUMENT_FRAGMENT) if (f || b.nodeType != CKEDITOR.NODE_ELEMENT || b.removeAttribute("id", !1), a) { b = b.childNodes; for (var d = 0; d < b.length; d++)e(b[d]) } } function b(d) {
                            if (d.type == CKEDITOR.NODE_ELEMENT || d.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT) {
                                if (d.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT) {
                                    var e = d.getName(); ":" == e[0] &&
                                        d.renameNode(e.substring(1))
                                } if (a) for (e = 0; e < d.getChildCount(); e++)b(d.getChild(e))
                            }
                        } var d = this.$.cloneNode(a); e(d); d = new CKEDITOR.dom.node(d); CKEDITOR.env.ie && 9 > CKEDITOR.env.version && (this.type == CKEDITOR.NODE_ELEMENT || this.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT) && b(d); return d
                    }, hasPrevious: function () { return !!this.$.previousSibling }, hasNext: function () { return !!this.$.nextSibling }, insertAfter: function (a) { a.$.parentNode.insertBefore(this.$, a.$.nextSibling); return a }, insertBefore: function (a) {
                        a.$.parentNode.insertBefore(this.$,
                            a.$); return a
                    }, insertBeforeMe: function (a) { this.$.parentNode.insertBefore(a.$, this.$); return a }, getAddress: function (a) { for (var f = [], e = this.getDocument().$.documentElement, b = this; b && b != e;) { var d = b.getParent(); d && f.unshift(this.getIndex.call(b, a)); b = d } return f }, getDocument: function () { return new CKEDITOR.dom.document(this.$.ownerDocument || this.$.parentNode.ownerDocument) }, getIndex: function (a) {
                        function f(a, b) {
                            var d = b ? a.getNext() : a.getPrevious(); return d && d.type == CKEDITOR.NODE_TEXT ? d.isEmpty() ? f(d, b) : d :
                                null
                        } var e = this, b = -1, d; if (!this.getParent() || a && e.type == CKEDITOR.NODE_TEXT && e.isEmpty() && !f(e) && !f(e, !0)) return -1; do if (!a || e.equals(this) || e.type != CKEDITOR.NODE_TEXT || !d && !e.isEmpty()) b++, d = e.type == CKEDITOR.NODE_TEXT; while (e = e.getPrevious()); return b
                    }, getNextSourceNode: function (a, f, e) {
                        if (e && !e.call) { var b = e; e = function (a) { return !a.equals(b) } } a = !a && this.getFirst && this.getFirst(); var d; if (!a) { if (this.type == CKEDITOR.NODE_ELEMENT && e && !1 === e(this, !0)) return null; a = this.getNext() } for (; !a && (d = (d || this).getParent());) {
                            if (e &&
                                !1 === e(d, !0)) return null; a = d.getNext()
                        } return !a || e && !1 === e(a) ? null : f && f != a.type ? a.getNextSourceNode(!1, f, e) : a
                    }, getPreviousSourceNode: function (a, f, e) {
                        if (e && !e.call) { var b = e; e = function (a) { return !a.equals(b) } } a = !a && this.getLast && this.getLast(); var d; if (!a) { if (this.type == CKEDITOR.NODE_ELEMENT && e && !1 === e(this, !0)) return null; a = this.getPrevious() } for (; !a && (d = (d || this).getParent());) { if (e && !1 === e(d, !0)) return null; a = d.getPrevious() } return !a || e && !1 === e(a) ? null : f && a.type != f ? a.getPreviousSourceNode(!1, f, e) :
                            a
                    }, getPrevious: function (a) { var f = this.$, e; do e = (f = f.previousSibling) && 10 != f.nodeType && new CKEDITOR.dom.node(f); while (e && a && !a(e)); return e }, getNext: function (a) { var f = this.$, e; do e = (f = f.nextSibling) && new CKEDITOR.dom.node(f); while (e && a && !a(e)); return e }, getParent: function (a) { var f = this.$.parentNode; return f && (f.nodeType == CKEDITOR.NODE_ELEMENT || a && f.nodeType == CKEDITOR.NODE_DOCUMENT_FRAGMENT) ? new CKEDITOR.dom.node(f) : null }, getParents: function (a) {
                        var f = this, e = []; do e[a ? "push" : "unshift"](f); while (f = f.getParent());
                        return e
                    }, getCommonAncestor: function (a) { if (a.equals(this)) return this; if (a.contains && a.contains(this)) return a; var f = this.contains ? this : this.getParent(); do if (f.contains(a)) return f; while (f = f.getParent()); return null }, getPosition: function (a) {
                        var f = this.$, e = a.$; if (f.compareDocumentPosition) return f.compareDocumentPosition(e); if (f == e) return CKEDITOR.POSITION_IDENTICAL; if (this.type == CKEDITOR.NODE_ELEMENT && a.type == CKEDITOR.NODE_ELEMENT) {
                            if (f.contains) {
                                if (f.contains(e)) return CKEDITOR.POSITION_CONTAINS +
                                    CKEDITOR.POSITION_PRECEDING; if (e.contains(f)) return CKEDITOR.POSITION_IS_CONTAINED + CKEDITOR.POSITION_FOLLOWING
                            } if ("sourceIndex" in f) return 0 > f.sourceIndex || 0 > e.sourceIndex ? CKEDITOR.POSITION_DISCONNECTED : f.sourceIndex < e.sourceIndex ? CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_FOLLOWING
                        } f = this.getAddress(); a = a.getAddress(); for (var e = Math.min(f.length, a.length), b = 0; b < e; b++)if (f[b] != a[b]) return f[b] < a[b] ? CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_FOLLOWING; return f.length < a.length ? CKEDITOR.POSITION_CONTAINS +
                            CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_IS_CONTAINED + CKEDITOR.POSITION_FOLLOWING
                    }, getAscendant: function (a, f) { var e = this.$, b, d; f || (e = e.parentNode); "function" == typeof a ? (d = !0, b = a) : (d = !1, b = function (b) { b = "string" == typeof b.nodeName ? b.nodeName.toLowerCase() : ""; return "string" == typeof a ? b == a : b in a }); for (; e;) { if (b(d ? new CKEDITOR.dom.node(e) : e)) return new CKEDITOR.dom.node(e); try { e = e.parentNode } catch (l) { e = null } } return null }, hasAscendant: function (a, f) {
                        var e = this.$; f || (e = e.parentNode); for (; e;) {
                            if (e.nodeName &&
                                e.nodeName.toLowerCase() == a) return !0; e = e.parentNode
                        } return !1
                    }, move: function (a, f) { a.append(this.remove(), f) }, remove: function (a) { var f = this.$, e = f.parentNode; if (e) { if (a) for (; a = f.firstChild;)e.insertBefore(f.removeChild(a), f); e.removeChild(f) } return this }, replace: function (a) { this.insertBefore(a); a.remove() }, trim: function () { this.ltrim(); this.rtrim() }, ltrim: function () {
                        for (var a; this.getFirst && (a = this.getFirst());) {
                            if (a.type == CKEDITOR.NODE_TEXT) {
                                var f = CKEDITOR.tools.ltrim(a.getText()), e = a.getLength(); if (f) f.length <
                                    e && (a.split(e - f.length), this.$.removeChild(this.$.firstChild)); else { a.remove(); continue }
                            } break
                        }
                    }, rtrim: function () { for (var a; this.getLast && (a = this.getLast());) { if (a.type == CKEDITOR.NODE_TEXT) { var f = CKEDITOR.tools.rtrim(a.getText()), e = a.getLength(); if (f) f.length < e && (a.split(f.length), this.$.lastChild.parentNode.removeChild(this.$.lastChild)); else { a.remove(); continue } } break } CKEDITOR.env.needsBrFiller && (a = this.$.lastChild) && 1 == a.type && "br" == a.nodeName.toLowerCase() && a.parentNode.removeChild(a) }, isReadOnly: function (a) {
                        var f =
                            this; this.type != CKEDITOR.NODE_ELEMENT && (f = this.getParent()); CKEDITOR.env.edge && f && f.is("textarea", "input") && (a = !0); if (!a && f && "undefined" != typeof f.$.isContentEditable) return !(f.$.isContentEditable || f.data("cke-editable")); for (; f;) { if (f.data("cke-editable")) return !1; if (f.hasAttribute("contenteditable")) return "false" == f.getAttribute("contenteditable"); f = f.getParent() } return !0
                    }
                }), CKEDITOR.dom.window = function (a) { CKEDITOR.dom.domObject.call(this, a) }, CKEDITOR.dom.window.prototype = new CKEDITOR.dom.domObject,
        CKEDITOR.tools.extend(CKEDITOR.dom.window.prototype, {
            focus: function () { this.$.focus() }, getViewPaneSize: function () { var a = this.$.document, f = "CSS1Compat" == a.compatMode; return { width: (f ? a.documentElement.clientWidth : a.body.clientWidth) || 0, height: (f ? a.documentElement.clientHeight : a.body.clientHeight) || 0 } }, getScrollPosition: function () {
                var a = this.$; if ("pageXOffset" in a) return { x: a.pageXOffset || 0, y: a.pageYOffset || 0 }; a = a.document; return {
                    x: a.documentElement.scrollLeft || a.body.scrollLeft || 0, y: a.documentElement.scrollTop ||
                        a.body.scrollTop || 0
                }
            }, getFrame: function () { var a = this.$.frameElement; return a ? new CKEDITOR.dom.element.get(a) : null }
        }), CKEDITOR.dom.document = function (a) { CKEDITOR.dom.domObject.call(this, a) }, CKEDITOR.dom.document.prototype = new CKEDITOR.dom.domObject, CKEDITOR.tools.extend(CKEDITOR.dom.document.prototype, {
            type: CKEDITOR.NODE_DOCUMENT, appendStyleSheet: function (a) {
                if (this.$.createStyleSheet) this.$.createStyleSheet(a); else {
                    var f = new CKEDITOR.dom.element("link"); f.setAttributes({
                        rel: "stylesheet", type: "text/css",
                        href: a
                    }); this.getHead().append(f)
                }
            }, appendStyleText: function (a) { if (this.$.createStyleSheet) { var f = this.$.createStyleSheet(""); f.cssText = a } else { var e = new CKEDITOR.dom.element("style", this); e.append(new CKEDITOR.dom.text(a, this)); this.getHead().append(e) } return f || e.$.sheet }, createElement: function (a, f) { var e = new CKEDITOR.dom.element(a, this); f && (f.attributes && e.setAttributes(f.attributes), f.styles && e.setStyles(f.styles)); return e }, createText: function (a) { return new CKEDITOR.dom.text(a, this) }, focus: function () { this.getWindow().focus() },
            getActive: function () { var a; try { a = this.$.activeElement } catch (f) { return null } return new CKEDITOR.dom.element(a) }, getById: function (a) { return (a = this.$.getElementById(a)) ? new CKEDITOR.dom.element(a) : null }, getByAddress: function (a, f) {
                for (var e = this.$.documentElement, b = 0; e && b < a.length; b++) { var d = a[b]; if (f) for (var l = -1, h = 0; h < e.childNodes.length; h++) { var m = e.childNodes[h]; if (!0 !== f || 3 != m.nodeType || !m.previousSibling || 3 != m.previousSibling.nodeType) if (l++, l == d) { e = m; break } } else e = e.childNodes[d] } return e ? new CKEDITOR.dom.node(e) :
                    null
            }, getElementsByTag: function (a, f) { CKEDITOR.env.ie && 8 >= document.documentMode || !f || (a = f + ":" + a); return new CKEDITOR.dom.nodeList(this.$.getElementsByTagName(a)) }, getHead: function () { var a = this.$.getElementsByTagName("head")[0]; return a = a ? new CKEDITOR.dom.element(a) : this.getDocumentElement().append(new CKEDITOR.dom.element("head"), !0) }, getBody: function () { return new CKEDITOR.dom.element(this.$.body) }, getDocumentElement: function () { return new CKEDITOR.dom.element(this.$.documentElement) }, getWindow: function () {
                return new CKEDITOR.dom.window(this.$.parentWindow ||
                    this.$.defaultView)
            }, write: function (a) { this.$.open("text/html", "replace"); CKEDITOR.env.ie && (a = a.replace(/(?:^\s*<!DOCTYPE[^>]*?>)|^/i, '$\x26\n\x3cscript data-cke-temp\x3d"1"\x3e(' + CKEDITOR.tools.fixDomain + ")();\x3c/script\x3e")); this.$.write(a); this.$.close() }, find: function (a) { return new CKEDITOR.dom.nodeList(this.$.querySelectorAll(a)) }, findOne: function (a) { return (a = this.$.querySelector(a)) ? new CKEDITOR.dom.element(a) : null }, _getHtml5ShivFrag: function () {
                var a = this.getCustomData("html5ShivFrag"); a ||
                    (a = this.$.createDocumentFragment(), CKEDITOR.tools.enableHtml5Elements(a, !0), this.setCustomData("html5ShivFrag", a)); return a
            }
        }), CKEDITOR.dom.nodeList = function (a) { this.$ = a }, CKEDITOR.dom.nodeList.prototype = { count: function () { return this.$.length }, getItem: function (a) { return 0 > a || a >= this.$.length ? null : (a = this.$[a]) ? new CKEDITOR.dom.node(a) : null }, toArray: function () { return CKEDITOR.tools.array.map(this.$, function (a) { return new CKEDITOR.dom.node(a) }) } }, CKEDITOR.dom.element = function (a, f) {
            "string" == typeof a &&
            (a = (f ? f.$ : document).createElement(a)); CKEDITOR.dom.domObject.call(this, a)
        }, CKEDITOR.dom.element.get = function (a) { return (a = "string" == typeof a ? document.getElementById(a) || document.getElementsByName(a)[0] : a) && (a.$ ? a : new CKEDITOR.dom.element(a)) }, CKEDITOR.dom.element.prototype = new CKEDITOR.dom.node, CKEDITOR.dom.element.createFromHtml = function (a, f) { var e = new CKEDITOR.dom.element("div", f); e.setHtml(a); return e.getFirst().remove() }, CKEDITOR.dom.element.setMarker = function (a, f, e, b) {
            var d = f.getCustomData("list_marker_id") ||
                f.setCustomData("list_marker_id", CKEDITOR.tools.getNextNumber()).getCustomData("list_marker_id"), l = f.getCustomData("list_marker_names") || f.setCustomData("list_marker_names", {}).getCustomData("list_marker_names"); a[d] = f; l[e] = 1; return f.setCustomData(e, b)
        }, CKEDITOR.dom.element.clearAllMarkers = function (a) { for (var f in a) CKEDITOR.dom.element.clearMarkers(a, a[f], 1) }, CKEDITOR.dom.element.clearMarkers = function (a, f, e) {
            var b = f.getCustomData("list_marker_names"), d = f.getCustomData("list_marker_id"), l; for (l in b) f.removeCustomData(l);
            f.removeCustomData("list_marker_names"); e && (f.removeCustomData("list_marker_id"), delete a[d])
        }, function () {
            function a(a, c) { return -1 < (" " + a + " ").replace(l, " ").indexOf(" " + c + " ") } function f(a) { var c = !0; a.$.id || (a.$.id = "cke_tmp_" + CKEDITOR.tools.getNextNumber(), c = !1); return function () { c || a.removeAttribute("id") } } function e(a, c) { var b = CKEDITOR.tools.escapeCss(a.$.id); return "#" + b + " " + c.split(/,\s*/).join(", #" + b + " ") } function b(a) {
                for (var c = 0, b = 0, g = h[a].length; b < g; b++)c += parseFloat(this.getComputedStyle(h[a][b]) ||
                    0, 10) || 0; return c
            } var d = document.createElement("_").classList, d = "undefined" !== typeof d && null !== String(d.add).match(/\[Native code\]/gi), l = /[\n\t\r]/g; CKEDITOR.tools.extend(CKEDITOR.dom.element.prototype, {
                type: CKEDITOR.NODE_ELEMENT, addClass: d ? function (a) { this.$.classList.add(a); return this } : function (b) { var c = this.$.className; c && (a(c, b) || (c += " " + b)); this.$.className = c || b; return this }, removeClass: d ? function (a) { var c = this.$; c.classList.remove(a); c.className || c.removeAttribute("class"); return this } : function (b) {
                    var c =
                        this.getAttribute("class"); c && a(c, b) && ((c = c.replace(new RegExp("(?:^|\\s+)" + b + "(?\x3d\\s|$)"), "").replace(/^\s+/, "")) ? this.setAttribute("class", c) : this.removeAttribute("class")); return this
                }, hasClass: function (b) { return a(this.$.className, b) }, append: function (a, c) { "string" == typeof a && (a = this.getDocument().createElement(a)); c ? this.$.insertBefore(a.$, this.$.firstChild) : this.$.appendChild(a.$); return a }, appendHtml: function (a) {
                    if (this.$.childNodes.length) {
                        var c = new CKEDITOR.dom.element("div", this.getDocument());
                        c.setHtml(a); c.moveChildren(this)
                    } else this.setHtml(a)
                }, appendText: function (a) { null != this.$.text && CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? this.$.text += a : this.append(new CKEDITOR.dom.text(a)) }, appendBogus: function (a) { if (a || CKEDITOR.env.needsBrFiller) { for (a = this.getLast(); a && a.type == CKEDITOR.NODE_TEXT && !CKEDITOR.tools.rtrim(a.getText());)a = a.getPrevious(); a && a.is && a.is("br") || (a = this.getDocument().createElement("br"), CKEDITOR.env.gecko && a.setAttribute("type", "_moz"), this.append(a)) } }, breakParent: function (a,
                    c) { var b = new CKEDITOR.dom.range(this.getDocument()); b.setStartAfter(this); b.setEndAfter(a); var g = b.extractContents(!1, c || !1), d; b.insertNode(this.remove()); if (CKEDITOR.env.ie && !CKEDITOR.env.edge) { for (b = new CKEDITOR.dom.element("div"); d = g.getFirst();)d.$.style.backgroundColor && (d.$.style.backgroundColor = d.$.style.backgroundColor), b.append(d); b.insertAfter(this); b.remove(!0) } else g.insertAfterNode(this) }, contains: document.compareDocumentPosition ? function (a) {
                        return !!(this.$.compareDocumentPosition(a.$) &
                            16)
                    } : function (a) { var c = this.$; return a.type != CKEDITOR.NODE_ELEMENT ? c.contains(a.getParent().$) : c != a.$ && c.contains(a.$) }, focus: function () { function a() { try { this.$.focus() } catch (c) { } } return function (c) { c ? CKEDITOR.tools.setTimeout(a, 100, this) : a.call(this) } }(), getHtml: function () { var a = this.$.innerHTML; return CKEDITOR.env.ie ? a.replace(/<\?[^>]*>/g, "") : a }, getOuterHtml: function () {
                        if (this.$.outerHTML) return this.$.outerHTML.replace(/<\?[^>]*>/, ""); var a = this.$.ownerDocument.createElement("div"); a.appendChild(this.$.cloneNode(!0));
                        return a.innerHTML
                    }, getClientRect: function (a) { var c = CKEDITOR.tools.extend({}, this.$.getBoundingClientRect()); !c.width && (c.width = c.right - c.left); !c.height && (c.height = c.bottom - c.top); return a ? CKEDITOR.tools.getAbsoluteRectPosition(this.getWindow(), c) : c }, setHtml: CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? function (a) {
                        try { var c = this.$; if (this.getParent()) return c.innerHTML = a; var b = this.getDocument()._getHtml5ShivFrag(); b.appendChild(c); c.innerHTML = a; b.removeChild(c); return a } catch (g) {
                            this.$.innerHTML = "";
                            c = new CKEDITOR.dom.element("body", this.getDocument()); c.$.innerHTML = a; for (c = c.getChildren(); c.count();)this.append(c.getItem(0)); return a
                        }
                    } : function (a) { return this.$.innerHTML = a }, setText: function () { var a = document.createElement("p"); a.innerHTML = "x"; a = a.textContent; return function (c) { this.$[a ? "textContent" : "innerText"] = c } }(), getAttribute: function () {
                        var a = function (a) { return this.$.getAttribute(a, 2) }; return CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) ? function (a) {
                            switch (a) {
                                case "class": a =
                                    "className"; break; case "http-equiv": a = "httpEquiv"; break; case "name": return this.$.name; case "tabindex": return a = this.$.getAttribute(a, 2), 0 !== a && 0 === this.$.tabIndex && (a = null), a; case "checked": return a = this.$.attributes.getNamedItem(a), (a.specified ? a.nodeValue : this.$.checked) ? "checked" : null; case "hspace": case "value": return this.$[a]; case "style": return this.$.style.cssText; case "contenteditable": case "contentEditable": return this.$.attributes.getNamedItem("contentEditable").specified ? this.$.getAttribute("contentEditable") :
                                        null
                            }return this.$.getAttribute(a, 2)
                        } : a
                    }(), getAttributes: function (a) { var c = {}, b = this.$.attributes, g; a = CKEDITOR.tools.isArray(a) ? a : []; for (g = 0; g < b.length; g++)-1 === CKEDITOR.tools.indexOf(a, b[g].name) && (c[b[g].name] = b[g].value); return c }, getChildren: function () { return new CKEDITOR.dom.nodeList(this.$.childNodes) }, getClientSize: function () { return { width: this.$.clientWidth, height: this.$.clientHeight } }, getComputedStyle: document.defaultView && document.defaultView.getComputedStyle ? function (a) {
                        var c = this.getWindow().$.getComputedStyle(this.$,
                            null); return c ? c.getPropertyValue(a) : ""
                    } : function (a) { return this.$.currentStyle[CKEDITOR.tools.cssStyleToDomStyle(a)] }, getDtd: function () { var a = CKEDITOR.dtd[this.getName()]; this.getDtd = function () { return a }; return a }, getElementsByTag: CKEDITOR.dom.document.prototype.getElementsByTag, getTabIndex: function () { var a = this.$.tabIndex; return 0 !== a || CKEDITOR.dtd.$tabIndex[this.getName()] || 0 === parseInt(this.getAttribute("tabindex"), 10) ? a : -1 }, getText: function () { return this.$.textContent || this.$.innerText || "" },
                getWindow: function () { return this.getDocument().getWindow() }, getId: function () { return this.$.id || null }, getNameAtt: function () { return this.$.name || null }, getName: function () { var a = this.$.nodeName.toLowerCase(); if (CKEDITOR.env.ie && 8 >= document.documentMode) { var c = this.$.scopeName; "HTML" != c && (a = c.toLowerCase() + ":" + a) } this.getName = function () { return a }; return this.getName() }, getValue: function () { return this.$.value }, getFirst: function (a) {
                    var c = this.$.firstChild; (c = c && new CKEDITOR.dom.node(c)) && a && !a(c) && (c = c.getNext(a));
                    return c
                }, getLast: function (a) { var c = this.$.lastChild; (c = c && new CKEDITOR.dom.node(c)) && a && !a(c) && (c = c.getPrevious(a)); return c }, getStyle: function (a) { return this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)] }, is: function () { var a = this.getName(); if ("object" == typeof arguments[0]) return !!arguments[0][a]; for (var c = 0; c < arguments.length; c++)if (arguments[c] == a) return !0; return !1 }, isEditable: function (a) {
                    var c = this.getName(); return this.isReadOnly() || "none" == this.getComputedStyle("display") || "hidden" == this.getComputedStyle("visibility") ||
                        CKEDITOR.dtd.$nonEditable[c] || CKEDITOR.dtd.$empty[c] || this.is("a") && (this.data("cke-saved-name") || this.hasAttribute("name")) && !this.getChildCount() ? !1 : !1 !== a ? (a = CKEDITOR.dtd[c] || CKEDITOR.dtd.span, !(!a || !a["#"])) : !0
                }, isIdentical: function (a) {
                    var c = this.clone(0, 1); a = a.clone(0, 1); c.removeAttributes(["_moz_dirty", "data-cke-expando", "data-cke-saved-href", "data-cke-saved-name"]); a.removeAttributes(["_moz_dirty", "data-cke-expando", "data-cke-saved-href", "data-cke-saved-name"]); if (c.$.isEqualNode) return c.$.style.cssText =
                        CKEDITOR.tools.normalizeCssText(c.$.style.cssText), a.$.style.cssText = CKEDITOR.tools.normalizeCssText(a.$.style.cssText), c.$.isEqualNode(a.$); c = c.getOuterHtml(); a = a.getOuterHtml(); if (CKEDITOR.env.ie && 9 > CKEDITOR.env.version && this.is("a")) { var b = this.getParent(); b.type == CKEDITOR.NODE_ELEMENT && (b = b.clone(), b.setHtml(c), c = b.getHtml(), b.setHtml(a), a = b.getHtml()) } return c == a
                }, isVisible: function () {
                    var a = (this.$.offsetHeight || this.$.offsetWidth) && "hidden" != this.getComputedStyle("visibility"), c, b; a && CKEDITOR.env.webkit &&
                        (c = this.getWindow(), !c.equals(CKEDITOR.document.getWindow()) && (b = c.$.frameElement) && (a = (new CKEDITOR.dom.element(b)).isVisible())); return !!a
                }, isEmptyInlineRemoveable: function () { if (!CKEDITOR.dtd.$removeEmpty[this.getName()]) return !1; for (var a = this.getChildren(), c = 0, b = a.count(); c < b; c++) { var g = a.getItem(c); if (g.type != CKEDITOR.NODE_ELEMENT || !g.data("cke-bookmark")) if (g.type == CKEDITOR.NODE_ELEMENT && !g.isEmptyInlineRemoveable() || g.type == CKEDITOR.NODE_TEXT && CKEDITOR.tools.trim(g.getText())) return !1 } return !0 },
                hasAttributes: CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) ? function () { for (var a = this.$.attributes, c = 0; c < a.length; c++) { var b = a[c]; switch (b.nodeName) { case "class": if (this.getAttribute("class")) return !0; case "data-cke-expando": continue; default: if (b.specified) return !0 } } return !1 } : function () { var a = this.$.attributes, c = a.length, b = { "data-cke-expando": 1, _moz_dirty: 1 }; return 0 < c && (2 < c || !b[a[0].nodeName] || 2 == c && !b[a[1].nodeName]) }, hasAttribute: function () {
                    function a(c) {
                        var b = this.$.attributes.getNamedItem(c);
                        if ("input" == this.getName()) switch (c) { case "class": return 0 < this.$.className.length; case "checked": return !!this.$.checked; case "value": return c = this.getAttribute("type"), "checkbox" == c || "radio" == c ? "on" != this.$.value : !!this.$.value }return b ? b.specified : !1
                    } return CKEDITOR.env.ie ? 8 > CKEDITOR.env.version ? function (c) { return "name" == c ? !!this.$.name : a.call(this, c) } : a : function (a) { return !!this.$.attributes.getNamedItem(a) }
                }(), hide: function () { this.setStyle("display", "none") }, moveChildren: function (a, c) {
                    var b = this.$;
                    a = a.$; if (b != a) { var g; if (c) for (; g = b.lastChild;)a.insertBefore(b.removeChild(g), a.firstChild); else for (; g = b.firstChild;)a.appendChild(b.removeChild(g)) }
                }, mergeSiblings: function () {
                    function a(c, b, g) {
                        if (b && b.type == CKEDITOR.NODE_ELEMENT) {
                            for (var d = []; b.data("cke-bookmark") || b.isEmptyInlineRemoveable();)if (d.push(b), b = g ? b.getNext() : b.getPrevious(), !b || b.type != CKEDITOR.NODE_ELEMENT) return; if (c.isIdentical(b)) {
                                for (var e = g ? c.getLast() : c.getFirst(); d.length;)d.shift().move(c, !g); b.moveChildren(c, !g); b.remove();
                                e && e.type == CKEDITOR.NODE_ELEMENT && e.mergeSiblings()
                            }
                        }
                    } return function (c) { if (!1 === c || CKEDITOR.dtd.$removeEmpty[this.getName()] || this.is("a")) a(this, this.getNext(), !0), a(this, this.getPrevious()) }
                }(), show: function () { this.setStyles({ display: "", visibility: "" }) }, setAttribute: function () {
                    var a = function (a, b) { this.$.setAttribute(a, b); return this }; return CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) ? function (c, b) {
                        "class" == c ? this.$.className = b : "style" == c ? this.$.style.cssText = b : "tabindex" == c ?
                            this.$.tabIndex = b : "checked" == c ? this.$.checked = b : "contenteditable" == c ? a.call(this, "contentEditable", b) : a.apply(this, arguments); return this
                    } : CKEDITOR.env.ie8Compat && CKEDITOR.env.secure ? function (c, b) { if ("src" == c && b.match(/^http:\/\//)) try { a.apply(this, arguments) } catch (g) { } else a.apply(this, arguments); return this } : a
                }(), setAttributes: function (a) { for (var c in a) this.setAttribute(c, a[c]); return this }, setValue: function (a) { this.$.value = a; return this }, removeAttribute: function () {
                    var a = function (a) { this.$.removeAttribute(a) };
                    return CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) ? function (a) { "class" == a ? a = "className" : "tabindex" == a ? a = "tabIndex" : "contenteditable" == a && (a = "contentEditable"); this.$.removeAttribute(a) } : a
                }(), removeAttributes: function (a) { if (CKEDITOR.tools.isArray(a)) for (var c = 0; c < a.length; c++)this.removeAttribute(a[c]); else for (c in a = a || this.getAttributes(), a) a.hasOwnProperty(c) && this.removeAttribute(c) }, removeStyle: function (a) {
                    var c = this.$.style; if (c.removeProperty || "border" != a && "margin" != a && "padding" !=
                        a) c.removeProperty ? c.removeProperty(a) : c.removeAttribute(CKEDITOR.tools.cssStyleToDomStyle(a)), this.$.style.cssText || this.removeAttribute("style"); else { var b = ["top", "left", "right", "bottom"], g; "border" == a && (g = ["color", "style", "width"]); for (var c = [], d = 0; d < b.length; d++)if (g) for (var e = 0; e < g.length; e++)c.push([a, b[d], g[e]].join("-")); else c.push([a, b[d]].join("-")); for (a = 0; a < c.length; a++)this.removeStyle(c[a]) }
                }, setStyle: function (a, c) { this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)] = c; return this }, setStyles: function (a) {
                    for (var c in a) this.setStyle(c,
                        a[c]); return this
                }, setOpacity: function (a) { CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? (a = Math.round(100 * a), this.setStyle("filter", 100 <= a ? "" : "progid:DXImageTransform.Microsoft.Alpha(opacity\x3d" + a + ")")) : this.setStyle("opacity", a) }, unselectable: function () { this.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select", "none")); if (CKEDITOR.env.ie) { this.setAttribute("unselectable", "on"); for (var a, c = this.getElementsByTag("*"), b = 0, g = c.count(); b < g; b++)a = c.getItem(b), a.setAttribute("unselectable", "on") } }, getPositionedAncestor: function () {
                    for (var a =
                        this; "html" != a.getName();) { if ("static" != a.getComputedStyle("position")) return a; a = a.getParent() } return null
                }, getDocumentPosition: function (a) {
                    var c = 0, b = 0, g = this.getDocument(), d = g.getBody(), e = "BackCompat" == g.$.compatMode; if (document.documentElement.getBoundingClientRect && (CKEDITOR.env.ie ? 8 !== CKEDITOR.env.version : 1)) {
                        var l = this.$.getBoundingClientRect(), h = g.$.documentElement, f = h.clientTop || d.$.clientTop || 0, u = h.clientLeft || d.$.clientLeft || 0, y = !0; CKEDITOR.env.ie && (y = g.getDocumentElement().contains(this),
                            g = g.getBody().contains(this), y = e && g || !e && y); y && (CKEDITOR.env.webkit || CKEDITOR.env.ie && 12 <= CKEDITOR.env.version ? (c = d.$.scrollLeft || h.scrollLeft, b = d.$.scrollTop || h.scrollTop) : (b = e ? d.$ : h, c = b.scrollLeft, b = b.scrollTop), c = l.left + c - u, b = l.top + b - f)
                    } else for (f = this, u = null; f && "body" != f.getName() && "html" != f.getName();) {
                        c += f.$.offsetLeft - f.$.scrollLeft; b += f.$.offsetTop - f.$.scrollTop; f.equals(this) || (c += f.$.clientLeft || 0, b += f.$.clientTop || 0); for (; u && !u.equals(f);)c -= u.$.scrollLeft, b -= u.$.scrollTop, u = u.getParent();
                        u = f; f = (l = f.$.offsetParent) ? new CKEDITOR.dom.element(l) : null
                    } a && (l = this.getWindow(), f = a.getWindow(), !l.equals(f) && l.$.frameElement && (a = (new CKEDITOR.dom.element(l.$.frameElement)).getDocumentPosition(a), c += a.x, b += a.y)); document.documentElement.getBoundingClientRect || !CKEDITOR.env.gecko || e || (c += this.$.clientLeft ? 1 : 0, b += this.$.clientTop ? 1 : 0); return { x: c, y: b }
                }, scrollIntoView: function (a) {
                    var c = this.getParent(); if (c) {
                        do if ((c.$.clientWidth && c.$.clientWidth < c.$.scrollWidth || c.$.clientHeight && c.$.clientHeight <
                            c.$.scrollHeight) && !c.is("body") && this.scrollIntoParent(c, a, 1), c.is("html")) { var b = c.getWindow(); try { var g = b.$.frameElement; g && (c = new CKEDITOR.dom.element(g)) } catch (d) { } } while (c = c.getParent())
                    }
                }, scrollIntoParent: function (a, c, b) {
                    var g, d, e, l; function h(c, g) { /body|html/.test(a.getName()) ? a.getWindow().$.scrollBy(c, g) : (a.$.scrollLeft += c, a.$.scrollTop += g) } function f(a, c) {
                        var g = { x: 0, y: 0 }; if (!a.is(y ? "body" : "html")) { var b = a.$.getBoundingClientRect(); g.x = b.left; g.y = b.top } b = a.getWindow(); b.equals(c) || (b = f(CKEDITOR.dom.element.get(b.$.frameElement),
                            c), g.x += b.x, g.y += b.y); return g
                    } function u(a, c) { return parseInt(a.getComputedStyle("margin-" + c) || 0, 10) || 0 } !a && (a = this.getWindow()); e = a.getDocument(); var y = "BackCompat" == e.$.compatMode; a instanceof CKEDITOR.dom.window && (a = y ? e.getBody() : e.getDocumentElement()); CKEDITOR.env.webkit && (e = this.getEditor(!1)) && (e._.previousScrollTop = null); e = a.getWindow(); d = f(this, e); var q = f(a, e), A = this.$.offsetHeight; g = this.$.offsetWidth; var v = a.$.clientHeight, z = a.$.clientWidth; e = d.x - u(this, "left") - q.x || 0; l = d.y - u(this, "top") -
                        q.y || 0; g = d.x + g + u(this, "right") - (q.x + z) || 0; d = d.y + A + u(this, "bottom") - (q.y + v) || 0; (0 > l || 0 < d) && h(0, !0 === c ? l : !1 === c ? d : 0 > l ? l : d); b && (0 > e || 0 < g) && h(0 > e ? e : g, 0)
                }, setState: function (a, c, b) {
                    c = c || "cke"; switch (a) {
                        case CKEDITOR.TRISTATE_ON: this.addClass(c + "_on"); this.removeClass(c + "_off"); this.removeClass(c + "_disabled"); b && this.setAttribute("aria-pressed", !0); b && this.removeAttribute("aria-disabled"); break; case CKEDITOR.TRISTATE_DISABLED: this.addClass(c + "_disabled"); this.removeClass(c + "_off"); this.removeClass(c + "_on");
                            b && this.setAttribute("aria-disabled", !0); b && this.removeAttribute("aria-pressed"); break; default: this.addClass(c + "_off"), this.removeClass(c + "_on"), this.removeClass(c + "_disabled"), b && this.removeAttribute("aria-pressed"), b && this.removeAttribute("aria-disabled")
                    }
                }, getFrameDocument: function () { var a = this.$; try { a.contentWindow.document } catch (c) { a.src = a.src } return a && new CKEDITOR.dom.document(a.contentWindow.document) }, copyAttributes: function (a, c) {
                    var b = this.$.attributes; c = c || {}; for (var g = 0; g < b.length; g++) {
                        var d =
                            b[g], e = d.nodeName.toLowerCase(), l; if (!(e in c)) if ("checked" == e && (l = this.getAttribute(e))) a.setAttribute(e, l); else if (!CKEDITOR.env.ie || this.hasAttribute(e)) l = this.getAttribute(e), null === l && (l = d.nodeValue), a.setAttribute(e, l)
                    } "" !== this.$.style.cssText && (a.$.style.cssText = this.$.style.cssText)
                }, renameNode: function (a) {
                    if (this.getName() != a) {
                        var c = this.getDocument(); a = new CKEDITOR.dom.element(a, c); this.copyAttributes(a); this.moveChildren(a); this.getParent(!0) && this.$.parentNode.replaceChild(a.$, this.$);
                        a.$["data-cke-expando"] = this.$["data-cke-expando"]; this.$ = a.$; delete this.getName
                    }
                }, getChild: function () { function a(c, b) { var g = c.childNodes; if (0 <= b && b < g.length) return g[b] } return function (c) { var b = this.$; if (c.slice) for (c = c.slice(); 0 < c.length && b;)b = a(b, c.shift()); else b = a(b, c); return b ? new CKEDITOR.dom.node(b) : null } }(), getChildCount: function () { return this.$.childNodes.length }, disableContextMenu: function () {
                    function a(c) { return c.type == CKEDITOR.NODE_ELEMENT && c.hasClass("cke_enable_context_menu") } this.on("contextmenu",
                        function (c) { c.data.getTarget().getAscendant(a, !0) || c.data.preventDefault() })
                }, getDirection: function (a) { return a ? this.getComputedStyle("direction") || this.getDirection() || this.getParent() && this.getParent().getDirection(1) || this.getDocument().$.dir || "ltr" : this.getStyle("direction") || this.getAttribute("dir") }, data: function (a, c) { a = "data-" + a; if (void 0 === c) return this.getAttribute(a); !1 === c ? this.removeAttribute(a) : this.setAttribute(a, c); return null }, getEditor: function (a) {
                    var c = CKEDITOR.instances, b, g, d; a =
                        a || void 0 === a; for (b in c) if (g = c[b], g.element.equals(this) && g.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO || !a && (d = g.editable()) && (d.equals(this) || d.contains(this))) return g; return null
                }, find: function (a) { var c = f(this); a = new CKEDITOR.dom.nodeList(this.$.querySelectorAll(e(this, a))); c(); return a }, findOne: function (a) { var c = f(this); a = this.$.querySelector(e(this, a)); c(); return a ? new CKEDITOR.dom.element(a) : null }, forEach: function (a, c, b) {
                    if (!(b || c && this.type != c)) var g = a(this); if (!1 !== g) {
                        b = this.getChildren();
                        for (var d = 0; d < b.count(); d++)g = b.getItem(d), g.type == CKEDITOR.NODE_ELEMENT ? g.forEach(a, c) : c && g.type != c || a(g)
                    }
                }, fireEventHandler: function (a, c) { var b = "on" + a, g = this.$; if (CKEDITOR.env.ie && 9 > CKEDITOR.env.version) { var d = g.ownerDocument.createEventObject(), e; for (e in c) d[e] = c[e]; g.fireEvent(b, d) } else g[g[a] ? a : b](c) }, isDetached: function () {
                    var a = this.getDocument(), c = a.getDocumentElement(); return c.equals(this) || c.contains(this) ? !CKEDITOR.env.ie || 8 < CKEDITOR.env.version && !CKEDITOR.env.quirks ? !a.$.defaultView :
                        !1 : !0
                }
            }); var h = { width: ["border-left-width", "border-right-width", "padding-left", "padding-right"], height: ["border-top-width", "border-bottom-width", "padding-top", "padding-bottom"] }; CKEDITOR.dom.element.prototype.setSize = function (a, c, d) { "number" == typeof c && (!d || CKEDITOR.env.ie && CKEDITOR.env.quirks || (c -= b.call(this, a)), this.setStyle(a, c + "px")) }; CKEDITOR.dom.element.prototype.getSize = function (a, c) {
                var d = Math.max(this.$["offset" + CKEDITOR.tools.capitalize(a)], this.$["client" + CKEDITOR.tools.capitalize(a)]) ||
                    0; c && (d -= b.call(this, a)); return d
            }
        }(), CKEDITOR.dom.documentFragment = function (a) { a = a || CKEDITOR.document; this.$ = a.type == CKEDITOR.NODE_DOCUMENT ? a.$.createDocumentFragment() : a }, CKEDITOR.tools.extend(CKEDITOR.dom.documentFragment.prototype, CKEDITOR.dom.element.prototype, {
            type: CKEDITOR.NODE_DOCUMENT_FRAGMENT, insertAfterNode: function (a) { a = a.$; a.parentNode.insertBefore(this.$, a.nextSibling) }, getHtml: function () {
                var a = new CKEDITOR.dom.element("div"); this.clone(1, 1).appendTo(a); return a.getHtml().replace(/\s*data-cke-expando=".*?"/g,
                    "")
            }
        }, !0, { append: 1, appendBogus: 1, clone: 1, getFirst: 1, getHtml: 1, getLast: 1, getParent: 1, getNext: 1, getPrevious: 1, appendTo: 1, moveChildren: 1, insertBefore: 1, insertAfterNode: 1, replace: 1, trim: 1, type: 1, ltrim: 1, rtrim: 1, getDocument: 1, getChildCount: 1, getChild: 1, getChildren: 1 }), CKEDITOR.tools.extend(CKEDITOR.dom.documentFragment.prototype, CKEDITOR.dom.document.prototype, !0, { find: 1, findOne: 1 }), function () {
            function a(a, c) {
                var b = this.range; if (this._.end) return null; if (!this._.start) {
                    this._.start = 1; if (b.collapsed) return this.end(),
                        null; b.optimize()
                } var g, d = b.startContainer; g = b.endContainer; var e = b.startOffset, k = b.endOffset, n, l = this.guard, h = this.type, f = a ? "getPreviousSourceNode" : "getNextSourceNode"; if (!a && !this._.guardLTR) { var m = g.type == CKEDITOR.NODE_ELEMENT ? g : g.getParent(), B = g.type == CKEDITOR.NODE_ELEMENT ? g.getChild(k) : g.getNext(); this._.guardLTR = function (a, c) { return (!c || !m.equals(a)) && (!B || !a.equals(B)) && (a.type != CKEDITOR.NODE_ELEMENT || !c || !a.equals(b.root)) } } if (a && !this._.guardRTL) {
                    var F = d.type == CKEDITOR.NODE_ELEMENT ? d : d.getParent(),
                    E = d.type == CKEDITOR.NODE_ELEMENT ? e ? d.getChild(e - 1) : null : d.getPrevious(); this._.guardRTL = function (a, c) { return (!c || !F.equals(a)) && (!E || !a.equals(E)) && (a.type != CKEDITOR.NODE_ELEMENT || !c || !a.equals(b.root)) }
                } var L = a ? this._.guardRTL : this._.guardLTR; n = l ? function (a, c) { return !1 === L(a, c) ? !1 : l(a, c) } : L; this.current ? g = this.current[f](!1, h, n) : (a ? g.type == CKEDITOR.NODE_ELEMENT && (g = 0 < k ? g.getChild(k - 1) : !1 === n(g, !0) ? null : g.getPreviousSourceNode(!0, h, n)) : (g = d, g.type == CKEDITOR.NODE_ELEMENT && ((g = g.getChild(e)) || (g = !1 ===
                    n(d, !0) ? null : d.getNextSourceNode(!0, h, n)))), g && !1 === n(g) && (g = null)); for (; g && !this._.end;) { this.current = g; if (!this.evaluator || !1 !== this.evaluator(g)) { if (!c) return g } else if (c && this.evaluator) return !1; g = g[f](!1, h, n) } this.end(); return this.current = null
            } function f(c) { for (var b, g = null; b = a.call(this, c);)g = b; return g } CKEDITOR.dom.walker = CKEDITOR.tools.createClass({
                $: function (a) { this.range = a; this._ = {} }, proto: {
                    end: function () { this._.end = 1 }, next: function () { return a.call(this) }, previous: function () {
                        return a.call(this,
                            1)
                    }, checkForward: function () { return !1 !== a.call(this, 0, 1) }, checkBackward: function () { return !1 !== a.call(this, 1, 1) }, lastForward: function () { return f.call(this) }, lastBackward: function () { return f.call(this, 1) }, reset: function () { delete this.current; this._ = {} }
                }
            }); var e = { block: 1, "list-item": 1, table: 1, "table-row-group": 1, "table-header-group": 1, "table-footer-group": 1, "table-row": 1, "table-column-group": 1, "table-column": 1, "table-cell": 1, "table-caption": 1 }, b = { absolute: 1, fixed: 1 }; CKEDITOR.dom.element.prototype.isBlockBoundary =
                function (a) { return "none" != this.getComputedStyle("float") || this.getComputedStyle("position") in b || !e[this.getComputedStyle("display")] ? !!(this.is(CKEDITOR.dtd.$block) || a && this.is(a)) : !0 }; CKEDITOR.dom.walker.blockBoundary = function (a) { return function (c) { return !(c.type == CKEDITOR.NODE_ELEMENT && c.isBlockBoundary(a)) } }; CKEDITOR.dom.walker.listItemBoundary = function () { return this.blockBoundary({ br: 1 }) }; CKEDITOR.dom.walker.bookmark = function (a, c) {
                    function b(a) { return a && a.getName && "span" == a.getName() && a.data("cke-bookmark") }
                    return function (g) { var d, e; d = g && g.type != CKEDITOR.NODE_ELEMENT && (e = g.getParent()) && b(e); d = a ? d : d || b(g); return !!(c ^ d) }
                }; CKEDITOR.dom.walker.whitespaces = function (a) { return function (c) { var g; c && c.type == CKEDITOR.NODE_TEXT && (g = !CKEDITOR.tools.trim(c.getText()) || CKEDITOR.env.webkit && c.getText() == CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE); return !!(a ^ g) } }; CKEDITOR.dom.walker.invisible = function (a) {
                    var c = CKEDITOR.dom.walker.whitespaces(), g = CKEDITOR.env.webkit ? 1 : 0; return function (b) {
                        c(b) ? b = 1 : (b.type == CKEDITOR.NODE_TEXT &&
                            (b = b.getParent()), b = b.$.offsetWidth <= g); return !!(a ^ b)
                    }
                }; CKEDITOR.dom.walker.nodeType = function (a, c) { return function (b) { return !!(c ^ b.type == a) } }; CKEDITOR.dom.walker.bogus = function (a) { function c(a) { return !l(a) && !h(a) } return function (b) { var g = CKEDITOR.env.needsBrFiller ? b.is && b.is("br") : b.getText && d.test(b.getText()); g && (g = b.getParent(), b = b.getNext(c), g = g.isBlockBoundary() && (!b || b.type == CKEDITOR.NODE_ELEMENT && b.isBlockBoundary())); return !!(a ^ g) } }; CKEDITOR.dom.walker.temp = function (a) {
                    return function (b) {
                        b.type !=
                        CKEDITOR.NODE_ELEMENT && (b = b.getParent()); b = b && b.hasAttribute("data-cke-temp"); return !!(a ^ b)
                    }
                }; var d = /^[\t\r\n ]*(?:&nbsp;|\xa0)$/, l = CKEDITOR.dom.walker.whitespaces(), h = CKEDITOR.dom.walker.bookmark(), m = CKEDITOR.dom.walker.temp(), c = function (a) { return h(a) || l(a) || a.type == CKEDITOR.NODE_ELEMENT && a.is(CKEDITOR.dtd.$inline) && !a.is(CKEDITOR.dtd.$empty) }; CKEDITOR.dom.walker.ignored = function (a) { return function (b) { b = l(b) || h(b) || m(b); return !!(a ^ b) } }; var k = CKEDITOR.dom.walker.ignored(); CKEDITOR.dom.walker.empty =
                    function (a) { return function (b) { for (var c = 0, g = b.getChildCount(); c < g; ++c)if (!k(b.getChild(c))) return !!a; return !a } }; var g = CKEDITOR.dom.walker.empty(), n = CKEDITOR.dom.walker.validEmptyBlockContainers = CKEDITOR.tools.extend(function (a) { var b = {}, c; for (c in a) CKEDITOR.dtd[c]["#"] && (b[c] = 1); return b }(CKEDITOR.dtd.$block), { caption: 1, td: 1, th: 1 }); CKEDITOR.dom.walker.editable = function (a) {
                        return function (b) {
                            b = k(b) ? !1 : b.type == CKEDITOR.NODE_TEXT || b.type == CKEDITOR.NODE_ELEMENT && (b.is(CKEDITOR.dtd.$inline) || b.is("hr") ||
                                "false" == b.getAttribute("contenteditable") || !CKEDITOR.env.needsBrFiller && b.is(n) && g(b)) ? !0 : !1; return !!(a ^ b)
                        }
                    }; CKEDITOR.dom.element.prototype.getBogus = function () { var a = this; do a = a.getPreviousSourceNode(); while (c(a)); return a && (CKEDITOR.env.needsBrFiller ? a.is && a.is("br") : a.getText && d.test(a.getText())) ? a : !1 }
        }(), CKEDITOR.dom.range = function (a) {
            this.endOffset = this.endContainer = this.startOffset = this.startContainer = null; this.collapsed = !0; var f = a instanceof CKEDITOR.dom.document; this.document = f ? a : a.getDocument();
            this.root = f ? a.getBody() : a
        }, function () {
            function a(a) { a.collapsed = a.startContainer && a.endContainer && a.startContainer.equals(a.endContainer) && a.startOffset == a.endOffset } function f(a, b, c, d, e) {
                function k(a, b, c, g) { var d = c ? a.getPrevious() : a.getNext(); if (g && f) return d; v || g ? b.append(a.clone(!0, e), c) : (a.remove(), m && b.append(a, c)); return d } function l() { var a, b, c, g = Math.min(J.length, N.length); for (a = 0; a < g; a++)if (b = J[a], c = N[a], !b.equals(c)) return a; return a - 1 } function h() {
                    var b = R - 1, c = L && M && !z.equals(x); b < H - 1 ||
                        b < I - 1 || c ? (c ? a.moveToPosition(x, CKEDITOR.POSITION_BEFORE_START) : I == b + 1 && E ? a.moveToPosition(N[b], CKEDITOR.POSITION_BEFORE_END) : a.moveToPosition(N[b + 1], CKEDITOR.POSITION_BEFORE_START), d && (b = J[b + 1]) && b.type == CKEDITOR.NODE_ELEMENT && (c = CKEDITOR.dom.element.createFromHtml('\x3cspan data-cke-bookmark\x3d"1" style\x3d"display:none"\x3e\x26nbsp;\x3c/span\x3e', a.document), c.insertAfter(b), b.mergeSiblings(!1), a.moveToBookmark({ startNode: c }))) : a.collapse(!0)
                } a.optimizeBookmark(); var f = 0 === b, m = 1 == b, v = 2 == b; b = v ||
                    m; var z = a.startContainer, x = a.endContainer, D = a.startOffset, B = a.endOffset, F, E, L, M, C, O; if (v && x.type == CKEDITOR.NODE_TEXT && (z.equals(x) || z.type === CKEDITOR.NODE_ELEMENT && z.getFirst().equals(x))) c.append(a.document.createText(x.substring(D, B))); else {
                        x.type == CKEDITOR.NODE_TEXT ? v ? O = !0 : x = x.split(B) : 0 < x.getChildCount() ? B >= x.getChildCount() ? (x = x.getChild(B - 1), E = !0) : x = x.getChild(B) : M = E = !0; z.type == CKEDITOR.NODE_TEXT ? v ? C = !0 : z.split(D) : 0 < z.getChildCount() ? 0 === D ? (z = z.getChild(D), F = !0) : z = z.getChild(D - 1) : L = F = !0; for (var J =
                            z.getParents(), N = x.getParents(), R = l(), H = J.length - 1, I = N.length - 1, P = c, X, U, Y, ha = -1, K = R; K <= H; K++) { U = J[K]; Y = U.getNext(); for (K != H || U.equals(N[K]) && H < I ? b && (X = P.append(U.clone(0, e))) : F ? k(U, P, !1, L) : C && P.append(a.document.createText(U.substring(D))); Y;) { if (Y.equals(N[K])) { ha = K; break } Y = k(Y, P) } P = X } P = c; for (K = R; K <= I; K++)if (c = N[K], Y = c.getPrevious(), c.equals(J[K])) b && (P = P.getChild(0)); else {
                                K != I || c.equals(J[K]) && I < H ? b && (X = P.append(c.clone(0, e))) : E ? k(c, P, !1, M) : O && P.append(a.document.createText(c.substring(0, B))); if (K >
                                    ha) for (; Y;)Y = k(Y, P, !0); P = X
                            } v || h()
                    }
            } function e() { var a = !1, b = CKEDITOR.dom.walker.whitespaces(), c = CKEDITOR.dom.walker.bookmark(!0), d = CKEDITOR.dom.walker.bogus(); return function (e) { return c(e) || b(e) ? !0 : d(e) && !a ? a = !0 : e.type == CKEDITOR.NODE_TEXT && (e.hasAscendant("pre") || CKEDITOR.tools.trim(e.getText()).length) || e.type == CKEDITOR.NODE_ELEMENT && !e.is(l) ? !1 : !0 } } function b(a) {
                var b = CKEDITOR.dom.walker.whitespaces(), c = CKEDITOR.dom.walker.bookmark(1); return function (d) {
                    return c(d) || b(d) ? !0 : !a && h(d) || d.type == CKEDITOR.NODE_ELEMENT &&
                        d.is(CKEDITOR.dtd.$removeEmpty)
                }
            } function d(a) { return function () { var b; return this[a ? "getPreviousNode" : "getNextNode"](function (a) { !b && k(a) && (b = a); return c(a) && !(h(a) && a.equals(b)) }) } } var l = { abbr: 1, acronym: 1, b: 1, bdo: 1, big: 1, cite: 1, code: 1, del: 1, dfn: 1, em: 1, font: 1, i: 1, ins: 1, label: 1, kbd: 1, q: 1, samp: 1, small: 1, span: 1, strike: 1, strong: 1, sub: 1, sup: 1, tt: 1, u: 1, "var": 1 }, h = CKEDITOR.dom.walker.bogus(), m = /^[\t\r\n ]*(?:&nbsp;|\xa0)$/, c = CKEDITOR.dom.walker.editable(), k = CKEDITOR.dom.walker.ignored(!0); CKEDITOR.dom.range.prototype =
            {
                clone: function () { var a = new CKEDITOR.dom.range(this.root); a._setStartContainer(this.startContainer); a.startOffset = this.startOffset; a._setEndContainer(this.endContainer); a.endOffset = this.endOffset; a.collapsed = this.collapsed; return a }, collapse: function (a) { a ? (this._setEndContainer(this.startContainer), this.endOffset = this.startOffset) : (this._setStartContainer(this.endContainer), this.startOffset = this.endOffset); this.collapsed = !0 }, cloneContents: function (a) {
                    var b = new CKEDITOR.dom.documentFragment(this.document);
                    this.collapsed || f(this, 2, b, !1, "undefined" == typeof a ? !0 : a); return b
                }, deleteContents: function (a) { this.collapsed || f(this, 0, null, a) }, extractContents: function (a, b) { var c = new CKEDITOR.dom.documentFragment(this.document); this.collapsed || f(this, 1, c, a, "undefined" == typeof b ? !0 : b); return c }, equals: function (a) { return this.startOffset === a.startOffset && this.endOffset === a.endOffset && this.startContainer.equals(a.startContainer) && this.endContainer.equals(a.endContainer) }, createBookmark: function (a) {
                    function b(a) {
                        return a.getAscendant(function (a) {
                            var b;
                            if (b = a.data && a.data("cke-temp")) b = -1 === CKEDITOR.tools.array.indexOf(["cke_copybin", "cke_pastebin"], a.getAttribute("id")); return b
                        }, !0)
                    } var c = this.startContainer, d = this.endContainer, e = this.collapsed, k, l, h, f; k = this.document.createElement("span"); k.data("cke-bookmark", 1); k.setStyle("display", "none"); k.setHtml("\x26nbsp;"); a && (h = "cke_bm_" + CKEDITOR.tools.getNextNumber(), k.setAttribute("id", h + (e ? "C" : "S"))); e || (l = k.clone(), l.setHtml("\x26nbsp;"), a && l.setAttribute("id", h + "E"), f = this.clone(), b(d) && (d = b(d),
                        f.moveToPosition(d, CKEDITOR.POSITION_AFTER_END)), f.collapse(), f.insertNode(l)); f = this.clone(); b(c) && (d = b(c), f.moveToPosition(d, CKEDITOR.POSITION_BEFORE_START)); f.collapse(!0); f.insertNode(k); l ? (this.setStartAfter(k), this.setEndBefore(l)) : this.moveToPosition(k, CKEDITOR.POSITION_AFTER_END); return { startNode: a ? h + (e ? "C" : "S") : k, endNode: a ? h + "E" : l, serializable: a, collapsed: e }
                }, createBookmark2: function () {
                    function a(b) {
                        var g = b.container, d = b.offset, e; e = g; var k = d; e = e.type != CKEDITOR.NODE_ELEMENT || 0 === k || k == e.getChildCount() ?
                            0 : e.getChild(k - 1).type == CKEDITOR.NODE_TEXT && e.getChild(k).type == CKEDITOR.NODE_TEXT; e && (g = g.getChild(d - 1), d = g.getLength()); if (g.type == CKEDITOR.NODE_ELEMENT && 0 < d) { a: { for (e = g; d--;)if (k = e.getChild(d).getIndex(!0), 0 <= k) { d = k; break a } d = -1 } d += 1 } if (g.type == CKEDITOR.NODE_TEXT) {
                                e = g; for (k = 0; (e = e.getPrevious()) && e.type == CKEDITOR.NODE_TEXT;)k += e.getText().replace(CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE, "").length; e = k; g.isEmpty() ? (k = g.getPrevious(c), e ? (d = e, g = k ? k.getNext() : g.getParent().getFirst()) : (g = g.getParent(),
                                    d = k ? k.getIndex(!0) + 1 : 0)) : d += e
                            } b.container = g; b.offset = d
                    } function b(a, c) { var g = c.getCustomData("cke-fillingChar"); if (g) { var d = a.container; g.equals(d) && (a.offset -= CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE.length, 0 >= a.offset && (a.offset = d.getIndex(), a.container = d.getParent())) } } var c = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_TEXT, !0); return function (c) {
                        var d = this.collapsed, e = { container: this.startContainer, offset: this.startOffset }, k = { container: this.endContainer, offset: this.endOffset }; c && (a(e), b(e, this.root),
                            d || (a(k), b(k, this.root))); return { start: e.container.getAddress(c), end: d ? null : k.container.getAddress(c), startOffset: e.offset, endOffset: k.offset, normalized: c, collapsed: d, is2: !0 }
                    }
                }(), moveToBookmark: function (a) {
                    if (a.is2) { var b = this.document.getByAddress(a.start, a.normalized), c = a.startOffset, d = a.end && this.document.getByAddress(a.end, a.normalized); a = a.endOffset; this.setStart(b, c); d ? this.setEnd(d, a) : this.collapse(!0) } else b = (c = a.serializable) ? this.document.getById(a.startNode) : a.startNode, a = c ? this.document.getById(a.endNode) :
                        a.endNode, this.setStartBefore(b), b.remove(), a ? (this.setEndBefore(a), a.remove()) : this.collapse(!0)
                }, getBoundaryNodes: function () {
                    var a = this.startContainer, b = this.endContainer, c = this.startOffset, d = this.endOffset, e; if (a.type == CKEDITOR.NODE_ELEMENT) if (e = a.getChildCount(), e > c) a = a.getChild(c); else if (1 > e) a = a.getPreviousSourceNode(); else { for (a = a.$; a.lastChild;)a = a.lastChild; a = new CKEDITOR.dom.node(a); a = a.getNextSourceNode() || a } if (b.type == CKEDITOR.NODE_ELEMENT) if (e = b.getChildCount(), e > d) b = b.getChild(d).getPreviousSourceNode(!0);
                    else if (1 > e) b = b.getPreviousSourceNode(); else { for (b = b.$; b.lastChild;)b = b.lastChild; b = new CKEDITOR.dom.node(b) } a.getPosition(b) & CKEDITOR.POSITION_FOLLOWING && (a = b); return { startNode: a, endNode: b }
                }, getCommonAncestor: function (a, b) { var c = this.startContainer, d = this.endContainer, c = c.equals(d) ? a && c.type == CKEDITOR.NODE_ELEMENT && this.startOffset == this.endOffset - 1 ? c.getChild(this.startOffset) : c : c.getCommonAncestor(d); return b && !c.is ? c.getParent() : c }, optimize: function () {
                    var a = this.startContainer, b = this.startOffset;
                    a.type != CKEDITOR.NODE_ELEMENT && (b ? b >= a.getLength() && this.setStartAfter(a) : this.setStartBefore(a)); a = this.endContainer; b = this.endOffset; a.type != CKEDITOR.NODE_ELEMENT && (b ? b >= a.getLength() && this.setEndAfter(a) : this.setEndBefore(a))
                }, optimizeBookmark: function () { var a = this.startContainer, b = this.endContainer; a.is && a.is("span") && a.data("cke-bookmark") && this.setStartAt(a, CKEDITOR.POSITION_BEFORE_START); b && b.is && b.is("span") && b.data("cke-bookmark") && this.setEndAt(b, CKEDITOR.POSITION_AFTER_END) }, trim: function (a,
                    b) {
                        var c = this.startContainer, d = this.startOffset, e = this.collapsed; if ((!a || e) && c && c.type == CKEDITOR.NODE_TEXT) { if (d) if (d >= c.getLength()) d = c.getIndex() + 1, c = c.getParent(); else { var k = c.split(d), d = c.getIndex() + 1, c = c.getParent(); this.startContainer.equals(this.endContainer) ? this.setEnd(k, this.endOffset - this.startOffset) : c.equals(this.endContainer) && (this.endOffset += 1) } else d = c.getIndex(), c = c.getParent(); this.setStart(c, d); if (e) { this.collapse(!0); return } } c = this.endContainer; d = this.endOffset; b || e || !c || c.type !=
                            CKEDITOR.NODE_TEXT || (d ? (d >= c.getLength() || c.split(d), d = c.getIndex() + 1) : d = c.getIndex(), c = c.getParent(), this.setEnd(c, d))
                }, enlarge: function (a, b) {
                    function c(a) { return a && a.type == CKEDITOR.NODE_ELEMENT && a.hasAttribute("contenteditable") ? null : a } var d = new RegExp(/[^\s\ufeff]/); switch (a) {
                        case CKEDITOR.ENLARGE_INLINE: var e = 1; case CKEDITOR.ENLARGE_ELEMENT: var k = function (a, b) {
                            var c = new CKEDITOR.dom.range(h); c.setStart(a, b); c.setEndAt(h, CKEDITOR.POSITION_BEFORE_END); var c = new CKEDITOR.dom.walker(c), g; for (c.guard =
                                function (a) { return !(a.type == CKEDITOR.NODE_ELEMENT && a.isBlockBoundary()) }; g = c.next();) { if (g.type != CKEDITOR.NODE_TEXT) return !1; F = g != a ? g.getText() : g.substring(b); if (d.test(F)) return !1 } return !0
                        }; if (this.collapsed) break; var l = this.getCommonAncestor(), h = this.root, f, m, v, z, x, D = !1, B, F; B = this.startContainer; var E = this.startOffset; B.type == CKEDITOR.NODE_TEXT ? (E && (B = !CKEDITOR.tools.trim(B.substring(0, E)).length && B, D = !!B), B && ((z = B.getPrevious()) || (v = B.getParent()))) : (E && (z = B.getChild(E - 1) || B.getLast()), z || (v = B));
                            for (v = c(v); v || z;) {
                                if (v && !z) { !x && v.equals(l) && (x = !0); if (e ? v.isBlockBoundary() : !h.contains(v)) break; D && "inline" == v.getComputedStyle("display") || (D = !1, x ? f = v : this.setStartBefore(v)); z = v.getPrevious() } for (; z;)if (B = !1, z.type == CKEDITOR.NODE_COMMENT) z = z.getPrevious(); else {
                                    if (z.type == CKEDITOR.NODE_TEXT) F = z.getText(), d.test(F) && (z = null), B = /[\s\ufeff]$/.test(F); else if ((z.$.offsetWidth > (CKEDITOR.env.webkit ? 1 : 0) || b && z.is("br")) && !z.data("cke-bookmark")) if (D && CKEDITOR.dtd.$removeEmpty[z.getName()]) {
                                        F = z.getText();
                                        if (d.test(F)) z = null; else for (var E = z.$.getElementsByTagName("*"), L = 0, M; M = E[L++];)if (!CKEDITOR.dtd.$removeEmpty[M.nodeName.toLowerCase()]) { z = null; break } z && (B = !!F.length)
                                    } else z = null; B && (D ? x ? f = v : v && this.setStartBefore(v) : D = !0); if (z) { B = z.getPrevious(); if (!v && !B) { v = z; z = null; break } z = B } else v = null
                                } v && (v = c(v.getParent()))
                            } B = this.endContainer; E = this.endOffset; v = z = null; x = D = !1; B.type == CKEDITOR.NODE_TEXT ? CKEDITOR.tools.trim(B.substring(E)).length ? D = !0 : (D = !B.getLength(), E == B.getLength() ? (z = B.getNext()) || (v = B.getParent()) :
                                k(B, E) && (v = B.getParent())) : (z = B.getChild(E)) || (v = B); for (; v || z;) {
                                    if (v && !z) { !x && v.equals(l) && (x = !0); if (e ? v.isBlockBoundary() : !h.contains(v)) break; D && "inline" == v.getComputedStyle("display") || (D = !1, x ? m = v : v && this.setEndAfter(v)); z = v.getNext() } for (; z;) {
                                        B = !1; if (z.type == CKEDITOR.NODE_TEXT) F = z.getText(), k(z, 0) || (z = null), B = /^[\s\ufeff]/.test(F); else if (z.type == CKEDITOR.NODE_ELEMENT) {
                                            if ((0 < z.$.offsetWidth || b && z.is("br")) && !z.data("cke-bookmark")) if (D && CKEDITOR.dtd.$removeEmpty[z.getName()]) {
                                                F = z.getText(); if (d.test(F)) z =
                                                    null; else for (E = z.$.getElementsByTagName("*"), L = 0; M = E[L++];)if (!CKEDITOR.dtd.$removeEmpty[M.nodeName.toLowerCase()]) { z = null; break } z && (B = !!F.length)
                                            } else z = null
                                        } else B = 1; B && D && (x ? m = v : this.setEndAfter(v)); if (z) { B = z.getNext(); if (!v && !B) { v = z; z = null; break } z = B } else v = null
                                    } v && (v = c(v.getParent()))
                                } f && m && (l = f.contains(m) ? m : f, this.setStartBefore(l), this.setEndAfter(l)); break; case CKEDITOR.ENLARGE_BLOCK_CONTENTS: case CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS: v = new CKEDITOR.dom.range(this.root); h = this.root; v.setStartAt(h,
                                    CKEDITOR.POSITION_AFTER_START); v.setEnd(this.startContainer, this.startOffset); v = new CKEDITOR.dom.walker(v); var C, O, J = CKEDITOR.dom.walker.blockBoundary(a == CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS ? { br: 1 } : null), N = null, R = function (a) { if (a.type == CKEDITOR.NODE_ELEMENT && "false" == a.getAttribute("contenteditable")) if (N) { if (N.equals(a)) { N = null; return } } else N = a; else if (N) return; var b = J(a); b || (C = a); return b }, e = function (a) { var b = R(a); !b && a.is && a.is("br") && (O = a); return b }; v.guard = R; v = v.lastBackward(); C = C || h; this.setStartAt(C,
                                        !C.is("br") && (!v && this.checkStartOfBlock() || v && C.contains(v)) ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_AFTER_END); if (a == CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS) { v = this.clone(); v = new CKEDITOR.dom.walker(v); var H = CKEDITOR.dom.walker.whitespaces(), I = CKEDITOR.dom.walker.bookmark(); v.evaluator = function (a) { return !H(a) && !I(a) }; if ((v = v.previous()) && v.type == CKEDITOR.NODE_ELEMENT && v.is("br")) break } v = this.clone(); v.collapse(); v.setEndAt(h, CKEDITOR.POSITION_BEFORE_END); v = new CKEDITOR.dom.walker(v); v.guard =
                                            a == CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS ? e : R; C = N = O = null; v = v.lastForward(); C = C || h; this.setEndAt(C, !v && this.checkEndOfBlock() || v && C.contains(v) ? CKEDITOR.POSITION_BEFORE_END : CKEDITOR.POSITION_BEFORE_START); O && this.setEndAfter(O)
                    }
                }, shrink: function (a, b, c) {
                    var d = "boolean" === typeof c ? c : c && "boolean" === typeof c.shrinkOnBlockBoundary ? c.shrinkOnBlockBoundary : !0, e = c && c.skipBogus; if (!this.collapsed) {
                        a = a || CKEDITOR.SHRINK_TEXT; var k = this.clone(), l = this.startContainer, h = this.endContainer, f = this.startOffset, m = this.endOffset,
                            v = c = 1; l && l.type == CKEDITOR.NODE_TEXT && (f ? f >= l.getLength() ? k.setStartAfter(l) : (k.setStartBefore(l), c = 0) : k.setStartBefore(l)); h && h.type == CKEDITOR.NODE_TEXT && (m ? m >= h.getLength() ? k.setEndAfter(h) : (k.setEndAfter(h), v = 0) : k.setEndBefore(h)); var k = new CKEDITOR.dom.walker(k), z = CKEDITOR.dom.walker.bookmark(), x = CKEDITOR.dom.walker.bogus(); k.evaluator = function (b) { return b.type == (a == CKEDITOR.SHRINK_ELEMENT ? CKEDITOR.NODE_ELEMENT : CKEDITOR.NODE_TEXT) }; var D; k.guard = function (b, c) {
                                if (e && x(b) || z(b)) return !0; if (a == CKEDITOR.SHRINK_ELEMENT &&
                                    b.type == CKEDITOR.NODE_TEXT || c && b.equals(D) || !1 === d && b.type == CKEDITOR.NODE_ELEMENT && b.isBlockBoundary() || b.type == CKEDITOR.NODE_ELEMENT && b.hasAttribute("contenteditable")) return !1; c || b.type != CKEDITOR.NODE_ELEMENT || (D = b); return !0
                            }; c && (l = k[a == CKEDITOR.SHRINK_ELEMENT ? "lastForward" : "next"]()) && this.setStartAt(l, b ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_BEFORE_START); v && (k.reset(), (k = k[a == CKEDITOR.SHRINK_ELEMENT ? "lastBackward" : "previous"]()) && this.setEndAt(k, b ? CKEDITOR.POSITION_BEFORE_END : CKEDITOR.POSITION_AFTER_END));
                        return !(!c && !v)
                    }
                }, insertNode: function (a) { this.optimizeBookmark(); this.trim(!1, !0); var b = this.startContainer, c = b.getChild(this.startOffset); c ? a.insertBefore(c) : b.append(a); a.getParent() && a.getParent().equals(this.endContainer) && this.endOffset++; this.setStartBefore(a) }, moveToPosition: function (a, b) { this.setStartAt(a, b); this.collapse(!0) }, moveToRange: function (a) { this.setStart(a.startContainer, a.startOffset); this.setEnd(a.endContainer, a.endOffset) }, selectNodeContents: function (a) {
                    this.setStart(a, 0); this.setEnd(a,
                        a.type == CKEDITOR.NODE_TEXT ? a.getLength() : a.getChildCount())
                }, setStart: function (b, c) { b.type == CKEDITOR.NODE_ELEMENT && CKEDITOR.dtd.$empty[b.getName()] && (c = b.getIndex(), b = b.getParent()); this._setStartContainer(b); this.startOffset = c; this.endContainer || (this._setEndContainer(b), this.endOffset = c); a(this) }, setEnd: function (b, c) {
                    b.type == CKEDITOR.NODE_ELEMENT && CKEDITOR.dtd.$empty[b.getName()] && (c = b.getIndex() + 1, b = b.getParent()); this._setEndContainer(b); this.endOffset = c; this.startContainer || (this._setStartContainer(b),
                        this.startOffset = c); a(this)
                }, setStartAfter: function (a) { this.setStart(a.getParent(), a.getIndex() + 1) }, setStartBefore: function (a) { this.setStart(a.getParent(), a.getIndex()) }, setEndAfter: function (a) { this.setEnd(a.getParent(), a.getIndex() + 1) }, setEndBefore: function (a) { this.setEnd(a.getParent(), a.getIndex()) }, setStartAt: function (b, c) {
                    switch (c) {
                        case CKEDITOR.POSITION_AFTER_START: this.setStart(b, 0); break; case CKEDITOR.POSITION_BEFORE_END: b.type == CKEDITOR.NODE_TEXT ? this.setStart(b, b.getLength()) : this.setStart(b,
                            b.getChildCount()); break; case CKEDITOR.POSITION_BEFORE_START: this.setStartBefore(b); break; case CKEDITOR.POSITION_AFTER_END: this.setStartAfter(b)
                    }a(this)
                }, setEndAt: function (b, c) { switch (c) { case CKEDITOR.POSITION_AFTER_START: this.setEnd(b, 0); break; case CKEDITOR.POSITION_BEFORE_END: b.type == CKEDITOR.NODE_TEXT ? this.setEnd(b, b.getLength()) : this.setEnd(b, b.getChildCount()); break; case CKEDITOR.POSITION_BEFORE_START: this.setEndBefore(b); break; case CKEDITOR.POSITION_AFTER_END: this.setEndAfter(b) }a(this) }, fixBlock: function (a,
                    b) { var c = this.createBookmark(), d = this.document.createElement(b); this.collapse(a); this.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS); this.extractContents().appendTo(d); d.trim(); this.insertNode(d); var e = d.getBogus(); e && e.remove(); d.appendBogus(); this.moveToBookmark(c); return d }, splitBlock: function (a, b) {
                        var c = new CKEDITOR.dom.elementPath(this.startContainer, this.root), d = new CKEDITOR.dom.elementPath(this.endContainer, this.root), e = c.block, k = d.block, l = null; if (!c.blockLimit.equals(d.blockLimit)) return null; "br" !=
                            a && (e || (e = this.fixBlock(!0, a), k = (new CKEDITOR.dom.elementPath(this.endContainer, this.root)).block), k || (k = this.fixBlock(!1, a))); c = e && this.checkStartOfBlock(); d = k && this.checkEndOfBlock(); this.deleteContents(); e && e.equals(k) && (d ? (l = new CKEDITOR.dom.elementPath(this.startContainer, this.root), this.moveToPosition(k, CKEDITOR.POSITION_AFTER_END), k = null) : c ? (l = new CKEDITOR.dom.elementPath(this.startContainer, this.root), this.moveToPosition(e, CKEDITOR.POSITION_BEFORE_START), e = null) : (k = this.splitElement(e, b ||
                                !1), e.is("ul", "ol") || e.appendBogus())); return { previousBlock: e, nextBlock: k, wasStartOfBlock: c, wasEndOfBlock: d, elementPath: l }
                    }, splitElement: function (a, b) { if (!this.collapsed) return null; this.setEndAt(a, CKEDITOR.POSITION_BEFORE_END); var c = this.extractContents(!1, b || !1), d = a.clone(!1, b || !1); c.appendTo(d); d.insertAfter(a); this.moveToPosition(a, CKEDITOR.POSITION_AFTER_END); return d }, removeEmptyBlocksAtEnd: function () {
                        function a(d) {
                            return function (a) {
                                return b(a) || c(a) || a.type == CKEDITOR.NODE_ELEMENT && a.isEmptyInlineRemoveable() ||
                                    d.is("table") && a.is("caption") ? !1 : !0
                            }
                        } var b = CKEDITOR.dom.walker.whitespaces(), c = CKEDITOR.dom.walker.bookmark(!1); return function (b) { for (var c = this.createBookmark(), d = this[b ? "endPath" : "startPath"](), e = d.block || d.blockLimit, k; e && !e.equals(d.root) && !e.getFirst(a(e));)k = e.getParent(), this[b ? "setEndAt" : "setStartAt"](e, CKEDITOR.POSITION_AFTER_END), e.remove(1), e = k; this.moveToBookmark(c) }
                    }(), startPath: function () { return new CKEDITOR.dom.elementPath(this.startContainer, this.root) }, endPath: function () {
                        return new CKEDITOR.dom.elementPath(this.endContainer,
                            this.root)
                    }, checkBoundaryOfElement: function (a, c) { var d = c == CKEDITOR.START, e = this.clone(); e.collapse(d); e[d ? "setStartAt" : "setEndAt"](a, d ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_BEFORE_END); e = new CKEDITOR.dom.walker(e); e.evaluator = b(d); return e[d ? "checkBackward" : "checkForward"]() }, checkStartOfBlock: function () {
                        var a = this.startContainer, b = this.startOffset; CKEDITOR.env.ie && b && a.type == CKEDITOR.NODE_TEXT && (a = CKEDITOR.tools.ltrim(a.substring(0, b)), m.test(a) && this.trim(0, 1)); this.trim(); a = new CKEDITOR.dom.elementPath(this.startContainer,
                            this.root); b = this.clone(); b.collapse(!0); b.setStartAt(a.block || a.blockLimit, CKEDITOR.POSITION_AFTER_START); a = new CKEDITOR.dom.walker(b); a.evaluator = e(); return a.checkBackward()
                    }, checkEndOfBlock: function () {
                        var a = this.endContainer, b = this.endOffset; CKEDITOR.env.ie && a.type == CKEDITOR.NODE_TEXT && (a = CKEDITOR.tools.rtrim(a.substring(b)), m.test(a) && this.trim(1, 0)); this.trim(); a = new CKEDITOR.dom.elementPath(this.endContainer, this.root); b = this.clone(); b.collapse(!1); b.setEndAt(a.block || a.blockLimit, CKEDITOR.POSITION_BEFORE_END);
                        a = new CKEDITOR.dom.walker(b); a.evaluator = e(); return a.checkForward()
                    }, getPreviousNode: function (a, b, c) { var d = this.clone(); d.collapse(1); d.setStartAt(c || this.root, CKEDITOR.POSITION_AFTER_START); c = new CKEDITOR.dom.walker(d); c.evaluator = a; c.guard = b; return c.previous() }, getNextNode: function (a, b, c) { var d = this.clone(); d.collapse(); d.setEndAt(c || this.root, CKEDITOR.POSITION_BEFORE_END); c = new CKEDITOR.dom.walker(d); c.evaluator = a; c.guard = b; return c.next() }, checkReadOnly: function () {
                        function a(b, c) {
                            for (; b;) {
                                if (b.type ==
                                    CKEDITOR.NODE_ELEMENT) { if ("false" == b.getAttribute("contentEditable") && !b.data("cke-editable")) return 0; if (b.is("html") || "true" == b.getAttribute("contentEditable") && (b.contains(c) || b.equals(c))) break } b = b.getParent()
                            } return 1
                        } return function () { var b = this.startContainer, c = this.endContainer; return !(a(b, c) && a(c, b)) }
                    }(), moveToElementEditablePosition: function (a, b) {
                        if (a.type == CKEDITOR.NODE_ELEMENT && !a.isEditable(!1)) return this.moveToPosition(a, b ? CKEDITOR.POSITION_AFTER_END : CKEDITOR.POSITION_BEFORE_START),
                            !0; for (var c = 0; a;) {
                                if (a.type == CKEDITOR.NODE_TEXT) { b && this.endContainer && this.checkEndOfBlock() && m.test(a.getText()) ? this.moveToPosition(a, CKEDITOR.POSITION_BEFORE_START) : this.moveToPosition(a, b ? CKEDITOR.POSITION_AFTER_END : CKEDITOR.POSITION_BEFORE_START); c = 1; break } if (a.type == CKEDITOR.NODE_ELEMENT) if (a.isEditable()) this.moveToPosition(a, b ? CKEDITOR.POSITION_BEFORE_END : CKEDITOR.POSITION_AFTER_START), c = 1; else if (b && a.is("br") && this.endContainer && this.checkEndOfBlock()) this.moveToPosition(a, CKEDITOR.POSITION_BEFORE_START);
                                else if ("false" == a.getAttribute("contenteditable") && a.is(CKEDITOR.dtd.$block)) return this.setStartBefore(a), this.setEndAfter(a), !0; var d = a, e = c, l = void 0; d.type == CKEDITOR.NODE_ELEMENT && d.isEditable(!1) && (l = d[b ? "getLast" : "getFirst"](k)); e || l || (l = d[b ? "getPrevious" : "getNext"](k)); a = l
                            } return !!c
                    }, moveToClosestEditablePosition: function (a, b) {
                        var c, d = 0, e, k, l = [CKEDITOR.POSITION_AFTER_END, CKEDITOR.POSITION_BEFORE_START]; a ? (c = new CKEDITOR.dom.range(this.root), c.moveToPosition(a, l[b ? 0 : 1])) : c = this.clone(); if (a &&
                            !a.is(CKEDITOR.dtd.$block)) d = 1; else if (e = c[b ? "getNextEditableNode" : "getPreviousEditableNode"]()) d = 1, (k = e.type == CKEDITOR.NODE_ELEMENT) && e.is(CKEDITOR.dtd.$block) && "false" == e.getAttribute("contenteditable") ? (c.setStartAt(e, CKEDITOR.POSITION_BEFORE_START), c.setEndAt(e, CKEDITOR.POSITION_AFTER_END)) : !CKEDITOR.env.needsBrFiller && k && e.is(CKEDITOR.dom.walker.validEmptyBlockContainers) ? (c.setEnd(e, 0), c.collapse()) : c.moveToPosition(e, l[b ? 1 : 0]); d && this.moveToRange(c); return !!d
                    }, moveToElementEditStart: function (a) { return this.moveToElementEditablePosition(a) },
                moveToElementEditEnd: function (a) { return this.moveToElementEditablePosition(a, !0) }, getEnclosedNode: function () { var a = this.clone(); a.optimize(); if (a.startContainer.type != CKEDITOR.NODE_ELEMENT || a.endContainer.type != CKEDITOR.NODE_ELEMENT) return null; var a = new CKEDITOR.dom.walker(a), b = CKEDITOR.dom.walker.bookmark(!1, !0), c = CKEDITOR.dom.walker.whitespaces(!0); a.evaluator = function (a) { return c(a) && b(a) }; var d = a.next(); a.reset(); return d && d.equals(a.previous()) ? d : null }, getTouchedStartNode: function () {
                    var a = this.startContainer;
                    return this.collapsed || a.type != CKEDITOR.NODE_ELEMENT ? a : a.getChild(this.startOffset) || a
                }, getTouchedEndNode: function () { var a = this.endContainer; return this.collapsed || a.type != CKEDITOR.NODE_ELEMENT ? a : a.getChild(this.endOffset - 1) || a }, getNextEditableNode: d(), getPreviousEditableNode: d(1), _getTableElement: function (a) {
                    a = a || { td: 1, th: 1, tr: 1, tbody: 1, thead: 1, tfoot: 1, table: 1 }; var b = this.getTouchedStartNode(), c = this.getTouchedEndNode(), d = b.getAscendant("table", !0), c = c.getAscendant("table", !0); return d && !this.root.contains(d) ?
                        null : this.getEnclosedNode() ? this.getEnclosedNode().getAscendant(a, !0) : d && c && (d.equals(c) || d.contains(c) || c.contains(d)) ? b.getAscendant(a, !0) : null
                }, scrollIntoView: function () {
                    var a = new CKEDITOR.dom.element.createFromHtml("\x3cspan\x3e\x26nbsp;\x3c/span\x3e", this.document), b, c, d, e = this.clone(); e.optimize(); (d = e.startContainer.type == CKEDITOR.NODE_TEXT) ? (c = e.startContainer.getText(), b = e.startContainer.split(e.startOffset), a.insertAfter(e.startContainer)) : e.insertNode(a); a.scrollIntoView(); d && (e.startContainer.setText(c),
                        b.remove()); a.remove()
                }, getClientRects: function () {
                    function a(b, c) {
                        var d = CKEDITOR.tools.array.map(b, function (a) { return a }), g = new CKEDITOR.dom.range(c.root), e, k, l; c.startContainer instanceof CKEDITOR.dom.element && (k = 0 === c.startOffset && c.startContainer.hasAttribute("data-widget")); c.endContainer instanceof CKEDITOR.dom.element && (l = (l = c.endOffset === (c.endContainer.getChildCount ? c.endContainer.getChildCount() : c.endContainer.length)) && c.endContainer.hasAttribute("data-widget")); k && g.setStart(c.startContainer.getParent(),
                            c.startContainer.getIndex()); l && g.setEnd(c.endContainer.getParent(), c.endContainer.getIndex() + 1); if (k || l) c = g; g = c.cloneContents().find("[data-cke-widget-id]").toArray(); if (g = CKEDITOR.tools.array.map(g, function (a) { var b = c.root.editor; a = a.getAttribute("data-cke-widget-id"); return b.widgets.instances[a].element })) return g = CKEDITOR.tools.array.map(g, function (a) {
                                var b; b = a.getParent().hasClass("cke_widget_wrapper") ? a.getParent() : a; e = this.root.getDocument().$.createRange(); e.setStart(b.getParent().$, b.getIndex());
                                e.setEnd(b.getParent().$, b.getIndex() + 1); b = e.getClientRects(); b.widgetRect = a.getClientRect(); return b
                            }, c), CKEDITOR.tools.array.forEach(g, function (a) { function b(g) { CKEDITOR.tools.array.forEach(d, function (b, e) { var k = CKEDITOR.tools.objectCompare(a[g], b); k || (k = CKEDITOR.tools.objectCompare(a.widgetRect, b)); k && (Array.prototype.splice.call(d, e, a.length - g, a.widgetRect), c = !0) }); c || (g < d.length - 1 ? b(g + 1) : d.push(a.widgetRect)) } var c; b(0) }), d
                    } function b(a, c, g) {
                        var e; c.collapsed ? g.startContainer instanceof CKEDITOR.dom.element ?
                            (a = g.checkStartOfBlock(), e = new CKEDITOR.dom.text("​"), a ? g.startContainer.append(e, !0) : 0 === g.startOffset ? e.insertBefore(g.startContainer.getFirst()) : (g = g.startContainer.getChildren().getItem(g.startOffset - 1), e.insertAfter(g)), c.setStart(e.$, 0), c.setEnd(e.$, 0), a = c.getClientRects(), e.remove()) : g.startContainer instanceof CKEDITOR.dom.text && ("" === g.startContainer.getText() ? (g.startContainer.setText("​"), a = c.getClientRects(), g.startContainer.setText("")) : a = [d(g.createBookmark())]) : a = [d(g.createBookmark())];
                        return a
                    } function c(a, b, d) { a = CKEDITOR.tools.extend({}, a); b && (a = CKEDITOR.tools.getAbsoluteRectPosition(d.document.getWindow(), a)); !a.width && (a.width = a.right - a.left); !a.height && (a.height = a.bottom - a.top); return a } function d(a) {
                        var b = a.startNode; a = a.endNode; var c; b.setText("​"); b.removeStyle("display"); a ? (a.setText("​"), a.removeStyle("display"), c = [b.getClientRect(), a.getClientRect()], a.remove()) : c = [b.getClientRect(), b.getClientRect()]; b.remove(); return {
                            right: Math.max(c[0].right, c[1].right), bottom: Math.max(c[0].bottom,
                                c[1].bottom), left: Math.min(c[0].left, c[1].left), top: Math.min(c[0].top, c[1].top), width: Math.abs(c[0].left - c[1].left), height: Math.max(c[0].bottom, c[1].bottom) - Math.min(c[0].top, c[1].top)
                        }
                    } return void 0 !== this.document.getSelection ? function (d) {
                        var e = this.root.getDocument().$.createRange(), k; e.setStart(this.startContainer.$, this.startOffset); e.setEnd(this.endContainer.$, this.endOffset); k = e.getClientRects(); k = a(k, this); k.length || (k = b(k, e, this)); return CKEDITOR.tools.array.map(k, function (a) {
                            return c(a,
                                d, this)
                        }, this)
                    } : function (a) { return [c(d(this.createBookmark()), a, this)] }
                }(), _setStartContainer: function (a) { this.startContainer = a }, _setEndContainer: function (a) { this.endContainer = a }, _find: function (a, b) {
                    var c = this.getCommonAncestor(), d = this.getBoundaryNodes(), e = [], k, l, h, f; if (c && c.find) for (l = c.find(a), k = 0; k < l.count(); k++)if (c = l.getItem(k), b || !c.isReadOnly()) h = c.getPosition(d.startNode) & CKEDITOR.POSITION_FOLLOWING || d.startNode.equals(c), f = c.getPosition(d.endNode) & CKEDITOR.POSITION_PRECEDING + CKEDITOR.POSITION_IS_CONTAINED ||
                        d.endNode.equals(c), h && f && e.push(c); return e
                }
            }; CKEDITOR.dom.range.mergeRanges = function (a) {
                return CKEDITOR.tools.array.reduce(a, function (a, b) {
                    var c = a[a.length - 1], d = !1; b = b.clone(); b.enlarge(CKEDITOR.ENLARGE_ELEMENT); if (c) { var g = new CKEDITOR.dom.range(b.root), d = new CKEDITOR.dom.walker(g), e = CKEDITOR.dom.walker.whitespaces(); g.setStart(c.endContainer, c.endOffset); g.setEnd(b.startContainer, b.startOffset); for (g = d.next(); e(g) || b.endContainer.equals(g);)g = d.next(); d = !g } d ? c.setEnd(b.endContainer, b.endOffset) :
                        a.push(b); return a
                }, [])
            }
        }(), CKEDITOR.POSITION_AFTER_START = 1, CKEDITOR.POSITION_BEFORE_END = 2, CKEDITOR.POSITION_BEFORE_START = 3, CKEDITOR.POSITION_AFTER_END = 4, CKEDITOR.ENLARGE_ELEMENT = 1, CKEDITOR.ENLARGE_BLOCK_CONTENTS = 2, CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS = 3, CKEDITOR.ENLARGE_INLINE = 4, CKEDITOR.START = 1, CKEDITOR.END = 2, CKEDITOR.SHRINK_ELEMENT = 1, CKEDITOR.SHRINK_TEXT = 2, "use strict", function () {
            function a(a) {
                1 > arguments.length || (this.range = a, this.forceBrBreak = 0, this.enlargeBr = 1, this.enforceRealBlocks = 0, this._ ||
                    (this._ = {}))
            } function f(a) { var b = []; a.forEach(function (a) { if ("true" == a.getAttribute("contenteditable")) return b.push(a), !1 }, CKEDITOR.NODE_ELEMENT, !0); return b } function e(a, b, c, d) {
                a: { null == d && (d = f(c)); for (var l; l = d.shift();)if (l.getDtd().p) { d = { element: l, remaining: d }; break a } d = null } if (!d) return 0; if ((l = CKEDITOR.filter.instances[d.element.data("cke-filter")]) && !l.check(b)) return e(a, b, c, d.remaining); b = new CKEDITOR.dom.range(d.element); b.selectNodeContents(d.element); b = b.createIterator(); b.enlargeBr =
                    a.enlargeBr; b.enforceRealBlocks = a.enforceRealBlocks; b.activeFilter = b.filter = l; a._.nestedEditable = { element: d.element, container: c, remaining: d.remaining, iterator: b }; return 1
            } function b(a, b, c) { if (!b) return !1; a = a.clone(); a.collapse(!c); return a.checkBoundaryOfElement(b, c ? CKEDITOR.START : CKEDITOR.END) } var d = /^[\r\n\t ]+$/, l = CKEDITOR.dom.walker.bookmark(!1, !0), h = CKEDITOR.dom.walker.whitespaces(!0), m = function (a) { return l(a) && h(a) }, c = { dd: 1, dt: 1, li: 1 }; a.prototype = {
                getNextParagraph: function (a) {
                    var g, h, f, w, p;
                    a = a || "p"; if (this._.nestedEditable) { if (g = this._.nestedEditable.iterator.getNextParagraph(a)) return this.activeFilter = this._.nestedEditable.iterator.activeFilter, g; this.activeFilter = this.filter; if (e(this, a, this._.nestedEditable.container, this._.nestedEditable.remaining)) return this.activeFilter = this._.nestedEditable.iterator.activeFilter, this._.nestedEditable.iterator.getNextParagraph(a); this._.nestedEditable = null } if (!this.range.root.getDtd()[a]) return null; if (!this._.started) {
                        var t = this.range.clone();
                        h = t.startPath(); var u = t.endPath(), y = !t.collapsed && b(t, h.block), q = !t.collapsed && b(t, u.block, 1); t.shrink(CKEDITOR.SHRINK_ELEMENT, !0); y && t.setStartAt(h.block, CKEDITOR.POSITION_BEFORE_END); q && t.setEndAt(u.block, CKEDITOR.POSITION_AFTER_START); h = t.endContainer.hasAscendant("pre", !0) || t.startContainer.hasAscendant("pre", !0); t.enlarge(this.forceBrBreak && !h || !this.enlargeBr ? CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS : CKEDITOR.ENLARGE_BLOCK_CONTENTS); t.collapsed || (h = new CKEDITOR.dom.walker(t.clone()), u = CKEDITOR.dom.walker.bookmark(!0,
                            !0), h.evaluator = u, this._.nextNode = h.next(), h = new CKEDITOR.dom.walker(t.clone()), h.evaluator = u, h = h.previous(), this._.lastNode = h.getNextSourceNode(!0, null, t.root), this._.lastNode && this._.lastNode.type == CKEDITOR.NODE_TEXT && !CKEDITOR.tools.trim(this._.lastNode.getText()) && this._.lastNode.getParent().isBlockBoundary() && (u = this.range.clone(), u.moveToPosition(this._.lastNode, CKEDITOR.POSITION_AFTER_END), u.checkEndOfBlock() && (u = new CKEDITOR.dom.elementPath(u.endContainer, u.root), this._.lastNode = (u.block ||
                                u.blockLimit).getNextSourceNode(!0))), this._.lastNode && t.root.contains(this._.lastNode) || (this._.lastNode = this._.docEndMarker = t.document.createText(""), this._.lastNode.insertAfter(h)), t = null); this._.started = 1; h = t
                    } u = this._.nextNode; t = this._.lastNode; for (this._.nextNode = null; u;) {
                        var y = 0, q = u.hasAscendant("pre"), A = u.type != CKEDITOR.NODE_ELEMENT, v = 0; if (A) u.type == CKEDITOR.NODE_TEXT && d.test(u.getText()) && (A = 0); else {
                            var z = u.getName(); if (CKEDITOR.dtd.$block[z] && "false" == u.getAttribute("contenteditable")) {
                                g =
                                u; e(this, a, g); break
                            } else if (u.isBlockBoundary(this.forceBrBreak && !q && { br: 1 })) { if ("br" == z) A = 1; else if (!h && !u.getChildCount() && "hr" != z) { g = u; f = u.equals(t); break } h && (h.setEndAt(u, CKEDITOR.POSITION_BEFORE_START), "br" != z && (this._.nextNode = u)); y = 1 } else { if (u.getFirst()) { h || (h = this.range.clone(), h.setStartAt(u, CKEDITOR.POSITION_BEFORE_START)); u = u.getFirst(); continue } A = 1 }
                        } A && !h && (h = this.range.clone(), h.setStartAt(u, CKEDITOR.POSITION_BEFORE_START)); f = (!y || A) && u.equals(t); if (h && !y) for (; !u.getNext(m) && !f;) {
                            z =
                            u.getParent(); if (z.isBlockBoundary(this.forceBrBreak && !q && { br: 1 })) { y = 1; A = 0; f || z.equals(t); h.setEndAt(z, CKEDITOR.POSITION_BEFORE_END); break } u = z; A = 1; f = u.equals(t); v = 1
                        } A && h.setEndAt(u, CKEDITOR.POSITION_AFTER_END); u = this._getNextSourceNode(u, v, t); if ((f = !u) || y && h) break
                    } if (!g) {
                        if (!h) return this._.docEndMarker && this._.docEndMarker.remove(), this._.nextNode = null; g = new CKEDITOR.dom.elementPath(h.startContainer, h.root); u = g.blockLimit; y = { div: 1, th: 1, td: 1 }; g = g.block; !g && u && !this.enforceRealBlocks && y[u.getName()] &&
                            h.checkStartOfBlock() && h.checkEndOfBlock() && !u.equals(h.root) ? g = u : !g || this.enforceRealBlocks && g.is(c) ? (g = this.range.document.createElement(a), h.extractContents().appendTo(g), g.trim(), h.insertNode(g), w = p = !0) : "li" != g.getName() ? h.checkStartOfBlock() && h.checkEndOfBlock() || (g = g.clone(!1), h.extractContents().appendTo(g), g.trim(), p = h.splitBlock(), w = !p.wasStartOfBlock, p = !p.wasEndOfBlock, h.insertNode(g)) : f || (this._.nextNode = g.equals(t) ? null : this._getNextSourceNode(h.getBoundaryNodes().endNode, 1, t))
                    } w && (w =
                        g.getPrevious()) && w.type == CKEDITOR.NODE_ELEMENT && ("br" == w.getName() ? w.remove() : w.getLast() && "br" == w.getLast().$.nodeName.toLowerCase() && w.getLast().remove()); p && (w = g.getLast()) && w.type == CKEDITOR.NODE_ELEMENT && "br" == w.getName() && (!CKEDITOR.env.needsBrFiller || w.getPrevious(l) || w.getNext(l)) && w.remove(); this._.nextNode || (this._.nextNode = f || g.equals(t) || !t ? null : this._getNextSourceNode(g, 1, t)); return g
                }, _getNextSourceNode: function (a, b, c) {
                    function d(a) { return !(a.equals(c) || a.equals(e)) } var e = this.range.root;
                    for (a = a.getNextSourceNode(b, null, d); !l(a);)a = a.getNextSourceNode(b, null, d); return a
                }
            }; CKEDITOR.dom.range.prototype.createIterator = function () { return new a(this) }
        }(), CKEDITOR.command = function (a, f) {
            this.uiItems = []; this.exec = function (b) { if (this.state == CKEDITOR.TRISTATE_DISABLED || !this.checkAllowed()) return !1; this.editorFocus && a.focus(); return !1 === this.fire("exec") ? !0 : !1 !== f.exec.call(this, a, b) }; this.refresh = function (a, d) {
                if (!this.readOnly && a.readOnly) return !0; if (this.context && !d.isContextFor(this.context) ||
                    !this.checkAllowed(!0)) return this.disable(), !0; this.startDisabled || this.enable(); this.modes && !this.modes[a.mode] && this.disable(); return !1 === this.fire("refresh", { editor: a, path: d }) ? !0 : f.refresh && !1 !== f.refresh.apply(this, arguments)
            }; var e; this.checkAllowed = function (b) { return b || "boolean" != typeof e ? e = a.activeFilter.checkFeature(this) : e }; CKEDITOR.tools.extend(this, f, { modes: { wysiwyg: 1 }, editorFocus: 1, contextSensitive: !!f.context, state: CKEDITOR.TRISTATE_DISABLED }); CKEDITOR.event.call(this)
        }, CKEDITOR.command.prototype =
        {
            enable: function () { this.state == CKEDITOR.TRISTATE_DISABLED && this.checkAllowed() && this.setState(this.preserveState && "undefined" != typeof this.previousState ? this.previousState : CKEDITOR.TRISTATE_OFF) }, disable: function () { this.setState(CKEDITOR.TRISTATE_DISABLED) }, setState: function (a) { if (this.state == a || a != CKEDITOR.TRISTATE_DISABLED && !this.checkAllowed()) return !1; this.previousState = this.state; this.state = a; this.fire("state"); return !0 }, toggleState: function () {
                this.state == CKEDITOR.TRISTATE_OFF ? this.setState(CKEDITOR.TRISTATE_ON) :
                this.state == CKEDITOR.TRISTATE_ON && this.setState(CKEDITOR.TRISTATE_OFF)
            }
        }, CKEDITOR.event.implementOn(CKEDITOR.command.prototype), CKEDITOR.ENTER_P = 1, CKEDITOR.ENTER_BR = 2, CKEDITOR.ENTER_DIV = 3, CKEDITOR.config = {
            customConfig: "config.js", autoUpdateElement: !0, language: "", defaultLanguage: "en", contentsLangDirection: "", enterMode: CKEDITOR.ENTER_P, forceEnterMode: !1, shiftEnterMode: CKEDITOR.ENTER_BR, docType: "\x3c!DOCTYPE html\x3e", bodyId: "", bodyClass: "", fullPage: !1, height: 200, contentsCss: CKEDITOR.getUrl("contents.css"),
            extraPlugins: "", removePlugins: "", protectedSource: [], tabIndex: 0, width: "", baseFloatZIndex: 1E4, blockedKeystrokes: [CKEDITOR.CTRL + 66, CKEDITOR.CTRL + 73, CKEDITOR.CTRL + 85]
        }, function () {
            function a(a, b, c, d, g) {
                var e, k; a = []; for (e in b) {
                    k = b[e]; k = "boolean" == typeof k ? {} : "function" == typeof k ? { match: k } : L(k); "$" != e.charAt(0) && (k.elements = e); c && (k.featureName = c.toLowerCase()); var l = k; l.elements = h(l.elements, /\s+/) || null; l.propertiesOnly = l.propertiesOnly || !0 === l.elements; var f = /\s*,\s*/, m = void 0; for (m in O) {
                        l[m] = h(l[m],
                            f) || null; var n = l, z = J[m], u = h(l[J[m]], f), I = l[m], x = [], H = !0, q = void 0; u ? H = !1 : u = {}; for (q in I) "!" == q.charAt(0) && (q = q.slice(1), x.push(q), u[q] = !0, H = !1); for (; q = x.pop();)I[q] = I["!" + q], delete I["!" + q]; n[z] = (H ? !1 : u) || null
                    } l.match = l.match || null; d.push(k); a.push(k)
                } b = g.elements; g = g.generic; var r; c = 0; for (d = a.length; c < d; ++c) {
                    e = L(a[c]); k = !0 === e.classes || !0 === e.styles || !0 === e.attributes; l = e; m = z = f = void 0; for (f in O) l[f] = y(l[f]); n = !0; for (m in J) {
                        f = J[m]; z = l[f]; u = []; I = void 0; for (I in z) -1 < I.indexOf("*") ? u.push(new RegExp("^" +
                            I.replace(/\*/g, ".*") + "$")) : u.push(I); z = u; z.length && (l[f] = z, n = !1)
                    } l.nothingRequired = n; l.noProperties = !(l.attributes || l.classes || l.styles); if (!0 === e.elements || null === e.elements) g[k ? "unshift" : "push"](e); else for (r in l = e.elements, delete e.elements, l) if (b[r]) b[r][k ? "unshift" : "push"](e); else b[r] = [e]
                }
            } function f(a, b, c, d) {
                if (!a.match || a.match(b)) if (d || m(a, b)) if (a.propertiesOnly || (c.valid = !0), c.allAttributes || (c.allAttributes = e(a.attributes, b.attributes, c.validAttributes)), c.allStyles || (c.allStyles = e(a.styles,
                    b.styles, c.validStyles)), !c.allClasses) { a = a.classes; b = b.classes; d = c.validClasses; if (a) if (!0 === a) a = !0; else { for (var g = 0, k = b.length, l; g < k; ++g)l = b[g], d[l] || (d[l] = a(l)); a = !1 } else a = !1; c.allClasses = a }
            } function e(a, b, c) { if (!a) return !1; if (!0 === a) return !0; for (var d in b) c[d] || (c[d] = a(d)); return !1 } function b(a, b, c) {
                if (!a.match || a.match(b)) {
                    if (a.noProperties) return !1; c.hadInvalidAttribute = d(a.attributes, b.attributes) || c.hadInvalidAttribute; c.hadInvalidStyle = d(a.styles, b.styles) || c.hadInvalidStyle; a = a.classes;
                    b = b.classes; if (a) { for (var g = !1, e = !0 === a, k = b.length; k--;)if (e || a(b[k])) b.splice(k, 1), g = !0; a = g } else a = !1; c.hadInvalidClass = a || c.hadInvalidClass
                }
            } function d(a, b) { if (!a) return !1; var c = !1, d = !0 === a, g; for (g in b) if (d || a(g)) delete b[g], c = !0; return c } function l(a, b, c) { if (a.disabled || a.customConfig && !c || !b) return !1; a._.cachedChecks = {}; return !0 } function h(a, b) {
                if (!a) return !1; if (!0 === a) return a; if ("string" == typeof a) return a = M(a), "*" == a ? !0 : CKEDITOR.tools.convertArrayToObject(a.split(b)); if (CKEDITOR.tools.isArray(a)) return a.length ?
                    CKEDITOR.tools.convertArrayToObject(a) : !1; var c = {}, d = 0, g; for (g in a) c[g] = a[g], d++; return d ? c : !1
            } function m(a, b) { if (a.nothingRequired) return !0; var d, g, e, k; if (e = a.requiredClasses) for (k = b.classes, d = 0; d < e.length; ++d)if (g = e[d], "string" == typeof g) { if (-1 == CKEDITOR.tools.indexOf(k, g)) return !1 } else if (!CKEDITOR.tools.checkIfAnyArrayItemMatches(k, g)) return !1; return c(b.styles, a.requiredStyles) && c(b.attributes, a.requiredAttributes) } function c(a, b) {
                if (!b) return !0; for (var c = 0, d; c < b.length; ++c)if (d = b[c], "string" ==
                    typeof d) { if (!(d in a)) return !1 } else if (!CKEDITOR.tools.checkIfAnyObjectPropertyMatches(a, d)) return !1; return !0
            } function k(a) { if (!a) return {}; a = a.split(/\s*,\s*/).sort(); for (var b = {}; a.length;)b[a.shift()] = "cke-test"; return b } function g(a) { var b, c, d, g, e = {}, k = 1; for (a = M(a); b = a.match(N);)(c = b[2]) ? (d = n(c, "styles"), g = n(c, "attrs"), c = n(c, "classes")) : d = g = c = null, e["$" + k++] = { elements: b[1], classes: c, styles: d, attributes: g }, a = a.slice(b[0].length); return e } function n(a, b) { var c = a.match(R[b]); return c ? M(c[1]) : null }
            function r(a) { var b = a.styleBackup = a.attributes.style, c = a.classBackup = a.attributes["class"]; a.styles || (a.styles = CKEDITOR.tools.parseCssText(b || "", 1)); a.classes || (a.classes = c ? c.split(/\s+/) : []) } function w(a, c, d, g) {
                var e = 0, k; g.toHtml && (c.name = c.name.replace(H, "$1")); if (g.doCallbacks && a.elementCallbacks) { a: { k = a.elementCallbacks; for (var l = 0, h = k.length, m; l < h; ++l)if (m = k[l](c)) { k = m; break a } k = void 0 } if (k) return k } if (g.doTransform && (k = a._.transformations[c.name])) { r(c); for (l = 0; l < k.length; ++l)z(a, c, k[l]); t(c) } if (g.doFilter) {
                    a: {
                        l =
                        c.name; h = a._; a = h.allowedRules.elements[l]; k = h.allowedRules.generic; l = h.disallowedRules.elements[l]; h = h.disallowedRules.generic; m = g.skipRequired; var n = { valid: !1, validAttributes: {}, validClasses: {}, validStyles: {}, allAttributes: !1, allClasses: !1, allStyles: !1, hadInvalidAttribute: !1, hadInvalidClass: !1, hadInvalidStyle: !1 }, x, q; if (a || k) {
                            r(c); if (l) for (x = 0, q = l.length; x < q; ++x)if (!1 === b(l[x], c, n)) { a = null; break a } if (h) for (x = 0, q = h.length; x < q; ++x)b(h[x], c, n); if (a) for (x = 0, q = a.length; x < q; ++x)f(a[x], c, n, m); if (k) for (x =
                                0, q = k.length; x < q; ++x)f(k[x], c, n, m); a = n
                        } else a = null
                    } if (!a || !a.valid) return d.push(c), 1; q = a.validAttributes; var y = a.validStyles; k = a.validClasses; var l = c.attributes, D = c.styles, h = c.classes; m = c.classBackup; var G = c.styleBackup, Q, M, E = [], n = [], v = /^data-cke-/; x = !1; delete l.style; delete l["class"]; delete c.classBackup; delete c.styleBackup; if (!a.allAttributes) for (Q in l) q[Q] || (v.test(Q) ? Q == (M = Q.replace(/^data-cke-saved-/, "")) || q[M] || (delete l[Q], x = !0) : (delete l[Q], x = !0)); if (!a.allStyles || a.hadInvalidStyle) {
                        for (Q in D) a.allStyles ||
                            y[Q] ? E.push(Q + ":" + D[Q]) : x = !0; E.length && (l.style = E.sort().join("; "))
                    } else G && (l.style = G); if (!a.allClasses || a.hadInvalidClass) { for (Q = 0; Q < h.length; ++Q)(a.allClasses || k[h[Q]]) && n.push(h[Q]); n.length && (l["class"] = n.sort().join(" ")); m && n.length < m.split(/\s+/).length && (x = !0) } else m && (l["class"] = m); x && (e = 1); if (!g.skipFinalValidation && !u(c)) return d.push(c), 1
                } g.toHtml && (c.name = c.name.replace(I, "cke:$1")); return e
            } function p(a) {
                var b = [], c; for (c in a) -1 < c.indexOf("*") && b.push(c.replace(/\*/g, ".*")); return b.length ?
                    new RegExp("^(?:" + b.join("|") + ")$") : null
            } function t(a) { var b = a.attributes, c; delete b.style; delete b["class"]; if (c = CKEDITOR.tools.writeCssText(a.styles, !0)) b.style = c; a.classes.length && (b["class"] = a.classes.sort().join(" ")) } function u(a) { switch (a.name) { case "a": if (!(a.children.length || a.attributes.name || a.attributes.id)) return !1; break; case "img": if (!a.attributes.src) return !1 }return !0 } function y(a) { if (!a) return !1; if (!0 === a) return !0; var b = p(a); return function (c) { return c in a || b && c.match(b) } } function q() { return new CKEDITOR.htmlParser.element("br") }
            function A(a) { return a.type == CKEDITOR.NODE_ELEMENT && ("br" == a.name || E.$block[a.name]) } function v(a, b, c) {
                var d = a.name; if (E.$empty[d] || !a.children.length) "hr" == d && "br" == b ? a.replaceWith(q()) : (a.parent && c.push({ check: "it", el: a.parent }), a.remove()); else if (E.$block[d] || "tr" == d) if ("br" == b) a.previous && !A(a.previous) && (b = q(), b.insertBefore(a)), a.next && !A(a.next) && (b = q(), b.insertAfter(a)), a.replaceWithChildren(); else {
                    var d = a.children, g; b: {
                        g = E[b]; for (var e = 0, k = d.length, l; e < k; ++e)if (l = d[e], l.type == CKEDITOR.NODE_ELEMENT &&
                            !g[l.name]) { g = !1; break b } g = !0
                    } if (g) a.name = b, a.attributes = {}, c.push({ check: "parent-down", el: a }); else {
                        g = a.parent; for (var e = g.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT || "body" == g.name, h, f, k = d.length; 0 < k;)l = d[--k], e && (l.type == CKEDITOR.NODE_TEXT || l.type == CKEDITOR.NODE_ELEMENT && E.$inline[l.name]) ? (h || (h = new CKEDITOR.htmlParser.element(b), h.insertAfter(a), c.push({ check: "parent-down", el: h })), h.add(l, 0)) : (h = null, f = E[g.name] || E.span, l.insertAfter(a), g.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT || l.type != CKEDITOR.NODE_ELEMENT ||
                            f[l.name] || c.push({ check: "el-up", el: l })); a.remove()
                    }
                } else d in { style: 1, script: 1 } ? a.remove() : (a.parent && c.push({ check: "it", el: a.parent }), a.replaceWithChildren())
            } function z(a, b, c) { var d, g; for (d = 0; d < c.length; ++d)if (g = c[d], !(g.check && !a.check(g.check, !1) || g.left && !g.left(b))) { g.right(b, P); break } } function x(a, b) {
                var c = b.getDefinition(), d = c.attributes, g = c.styles, e, k, l, h; if (a.name != c.element) return !1; for (e in d) if ("class" == e) for (c = d[e].split(/\s+/), l = a.classes.join("|"); h = c.pop();) { if (-1 == l.indexOf(h)) return !1 } else if (a.attributes[e] !=
                    d[e]) return !1; for (k in g) if (a.styles[k] != g[k]) return !1; return !0
            } function D(a, b) { var c, d; "string" == typeof a ? c = a : a instanceof CKEDITOR.style ? d = a : (c = a[0], d = a[1]); return [{ element: c, left: d, right: function (a, c) { c.transform(a, b) } }] } function B(a) { return function (b) { return x(b, a) } } function F(a) { return function (b, c) { c[a](b) } } var E = CKEDITOR.dtd, L = CKEDITOR.tools.copy, M = CKEDITOR.tools.trim, C = ["", "p", "br", "div"]; CKEDITOR.FILTER_SKIP_TREE = 2; CKEDITOR.filter = function (a, b) {
                this.allowedContent = []; this.disallowedContent =
                    []; this.elementCallbacks = null; this.disabled = !1; this.editor = null; this.id = CKEDITOR.tools.getNextNumber(); this._ = { allowedRules: { elements: {}, generic: [] }, disallowedRules: { elements: {}, generic: [] }, transformations: {}, cachedTests: {}, cachedChecks: {} }; CKEDITOR.filter.instances[this.id] = this; var c = this.editor = a instanceof CKEDITOR.editor ? a : null; if (c && !b) {
                        this.customConfig = !0; var d = c.config.allowedContent; !0 === d ? this.disabled = !0 : (d || (this.customConfig = !1), this.allow(d, "config", 1), this.allow(c.config.extraAllowedContent,
                            "extra", 1), this.allow(C[c.enterMode] + " " + C[c.shiftEnterMode], "default", 1), this.disallow(c.config.disallowedContent))
                    } else this.customConfig = !1, this.allow(b || a, "default", 1)
            }; CKEDITOR.filter.instances = {}; CKEDITOR.filter.prototype = {
                allow: function (b, c, d) {
                    if (!l(this, b, d)) return !1; var e, k; if ("string" == typeof b) b = g(b); else if (b instanceof CKEDITOR.style) {
                        if (b.toAllowedContentRules) return this.allow(b.toAllowedContentRules(this.editor), c, d); e = b.getDefinition(); b = {}; d = e.attributes; b[e.element] = e = {
                            styles: e.styles,
                            requiredStyles: e.styles && CKEDITOR.tools.object.keys(e.styles)
                        }; d && (d = L(d), e.classes = d["class"] ? d["class"].split(/\s+/) : null, e.requiredClasses = e.classes, delete d["class"], e.attributes = d, e.requiredAttributes = d && CKEDITOR.tools.object.keys(d))
                    } else if (CKEDITOR.tools.isArray(b)) { for (e = 0; e < b.length; ++e)k = this.allow(b[e], c, d); return k } a(this, b, c, this.allowedContent, this._.allowedRules); return !0
                }, applyTo: function (a, b, c, d) {
                    if (this.disabled) return !1; var g = this, e = [], k = this.editor && this.editor.config.protectedSource,
                        l, h = !1, f = { doFilter: !c, doTransform: !0, doCallbacks: !0, toHtml: b }; a.forEach(function (a) {
                            if (a.type == CKEDITOR.NODE_ELEMENT) { if ("off" == a.attributes["data-cke-filter"]) return !1; if (!b || "span" != a.name || !~CKEDITOR.tools.object.keys(a.attributes).join("|").indexOf("data-cke-")) if (l = w(g, a, e, f), l & 1) h = !0; else if (l & 2) return !1 } else if (a.type == CKEDITOR.NODE_COMMENT && a.value.match(/^\{cke_protected\}(?!\{C\})/)) {
                                var c; a: {
                                    var d = decodeURIComponent(a.value.replace(/^\{cke_protected\}/, "")); c = []; var m, n, z; if (k) for (n = 0; n <
                                        k.length; ++n)if ((z = d.match(k[n])) && z[0].length == d.length) { c = !0; break a } d = CKEDITOR.htmlParser.fragment.fromHtml(d); 1 == d.children.length && (m = d.children[0]).type == CKEDITOR.NODE_ELEMENT && w(g, m, c, f); c = !c.length
                                } c || e.push(a)
                            }
                        }, null, !0); e.length && (h = !0); var m; a = []; d = C[d || (this.editor ? this.editor.enterMode : CKEDITOR.ENTER_P)]; for (var n; c = e.pop();)c.type == CKEDITOR.NODE_ELEMENT ? v(c, d, a) : c.remove(); for (; m = a.pop();)if (c = m.el, c.parent) switch (n = E[c.parent.name] || E.span, m.check) {
                            case "it": E.$removeEmpty[c.name] &&
                                !c.children.length ? v(c, d, a) : u(c) || v(c, d, a); break; case "el-up": c.parent.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT || n[c.name] || v(c, d, a); break; case "parent-down": c.parent.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT || n[c.name] || v(c.parent, d, a)
                        }return h
                }, checkFeature: function (a) { if (this.disabled || !a) return !0; a.toFeature && (a = a.toFeature(this.editor)); return !a.requiredContent || this.check(a.requiredContent) }, disable: function () { this.disabled = !0 }, disallow: function (b) {
                    if (!l(this, b, !0)) return !1; "string" == typeof b && (b =
                        g(b)); a(this, b, null, this.disallowedContent, this._.disallowedRules); return !0
                }, addContentForms: function (a) { if (!this.disabled && a) { var b, c, d = [], g; for (b = 0; b < a.length && !g; ++b)c = a[b], ("string" == typeof c || c instanceof CKEDITOR.style) && this.check(c) && (g = c); if (g) { for (b = 0; b < a.length; ++b)d.push(D(a[b], g)); this.addTransformations(d) } } }, addElementCallback: function (a) { this.elementCallbacks || (this.elementCallbacks = []); this.elementCallbacks.push(a) }, addFeature: function (a) {
                    if (this.disabled || !a) return !0; a.toFeature &&
                        (a = a.toFeature(this.editor)); this.allow(a.allowedContent, a.name); this.addTransformations(a.contentTransformations); this.addContentForms(a.contentForms); return a.requiredContent && (this.customConfig || this.disallowedContent.length) ? this.check(a.requiredContent) : !0
                }, addTransformations: function (a) {
                    var b, c; if (!this.disabled && a) {
                        var d = this._.transformations, g; for (g = 0; g < a.length; ++g) {
                            b = a[g]; var e = void 0, k = void 0, l = void 0, h = void 0, f = void 0, m = void 0; c = []; for (k = 0; k < b.length; ++k)l = b[k], "string" == typeof l ? (l =
                                l.split(/\s*:\s*/), h = l[0], f = null, m = l[1]) : (h = l.check, f = l.left, m = l.right), e || (e = l, e = e.element ? e.element : h ? h.match(/^([a-z0-9]+)/i)[0] : e.left.getDefinition().element), f instanceof CKEDITOR.style && (f = B(f)), c.push({ check: h == e ? null : h, left: f, right: "string" == typeof m ? F(m) : m }); b = e; d[b] || (d[b] = []); d[b].push(c)
                        }
                    }
                }, check: function (a, b, c) {
                    if (this.disabled) return !0; if (CKEDITOR.tools.isArray(a)) { for (var d = a.length; d--;)if (this.check(a[d], b, c)) return !0; return !1 } var e, l; if ("string" == typeof a) {
                        l = a + "\x3c" + (!1 === b ? "0" :
                            "1") + (c ? "1" : "0") + "\x3e"; if (l in this._.cachedChecks) return this._.cachedChecks[l]; e = g(a).$1; var h = e.styles, d = e.classes; e.name = e.elements; e.classes = d = d ? d.split(/\s*,\s*/) : []; e.styles = k(h); e.attributes = k(e.attributes); e.children = []; d.length && (e.attributes["class"] = d.join(" ")); h && (e.attributes.style = CKEDITOR.tools.writeCssText(e.styles))
                    } else e = a.getDefinition(), h = e.styles, d = e.attributes || {}, h && !CKEDITOR.tools.isEmpty(h) ? (h = L(h), d.style = CKEDITOR.tools.writeCssText(h, !0)) : h = {}, e = {
                        name: e.element, attributes: d,
                        classes: d["class"] ? d["class"].split(/\s+/) : [], styles: h, children: []
                    }; var h = CKEDITOR.tools.clone(e), f = [], m; if (!1 !== b && (m = this._.transformations[e.name])) { for (d = 0; d < m.length; ++d)z(this, e, m[d]); t(e) } w(this, h, f, { doFilter: !0, doTransform: !1 !== b, skipRequired: !c, skipFinalValidation: !c }); 0 < f.length ? c = !1 : ((b = e.attributes["class"]) && (e.attributes["class"] = e.attributes["class"].split(" ").sort().join(" ")), c = CKEDITOR.tools.objectCompare(e.attributes, h.attributes, !0), b && (e.attributes["class"] = b)); "string" == typeof a &&
                        (this._.cachedChecks[l] = c); return c
                }, getAllowedEnterMode: function () { var a = ["p", "div", "br"], b = { p: CKEDITOR.ENTER_P, div: CKEDITOR.ENTER_DIV, br: CKEDITOR.ENTER_BR }; return function (c, d) { var e = a.slice(), g; if (this.check(C[c])) return c; for (d || (e = e.reverse()); g = e.pop();)if (this.check(g)) return b[g]; return CKEDITOR.ENTER_BR } }(), clone: function () {
                    var a = new CKEDITOR.filter, b = CKEDITOR.tools.clone; a.allowedContent = b(this.allowedContent); a._.allowedRules = b(this._.allowedRules); a.disallowedContent = b(this.disallowedContent);
                    a._.disallowedRules = b(this._.disallowedRules); a._.transformations = b(this._.transformations); a.disabled = this.disabled; a.editor = this.editor; return a
                }, destroy: function () { delete CKEDITOR.filter.instances[this.id]; delete this._; delete this.allowedContent; delete this.disallowedContent }
            }; var O = { styles: 1, attributes: 1, classes: 1 }, J = { styles: "requiredStyles", attributes: "requiredAttributes", classes: "requiredClasses" }, N = /^([a-z0-9\-*\s]+)((?:\s*\{[!\w\-,\s\*]+\}\s*|\s*\[[!\w\-,\s\*]+\]\s*|\s*\([!\w\-,\s\*]+\)\s*){0,3})(?:;\s*|$)/i,
                R = { styles: /{([^}]+)}/, attrs: /\[([^\]]+)\]/, classes: /\(([^\)]+)\)/ }, H = /^cke:(object|embed|param)$/, I = /^(object|embed|param)$/, P; P = CKEDITOR.filter.transformationsTools = {
                    sizeToStyle: function (a) { this.lengthToStyle(a, "width"); this.lengthToStyle(a, "height") }, sizeToAttribute: function (a) { this.lengthToAttribute(a, "width"); this.lengthToAttribute(a, "height") }, lengthToStyle: function (a, b, c) { c = c || b; if (!(c in a.styles)) { var d = a.attributes[b]; d && (/^\d+$/.test(d) && (d += "px"), a.styles[c] = d) } delete a.attributes[b] },
                    lengthToAttribute: function (a, b, c) { c = c || b; if (!(c in a.attributes)) { var d = a.styles[b], e = d && d.match(/^(\d+)(?:\.\d*)?px$/); e ? a.attributes[c] = e[1] : "cke-test" == d && (a.attributes[c] = "cke-test") } delete a.styles[b] }, alignmentToStyle: function (a) { if (!("float" in a.styles)) { var b = a.attributes.align; if ("left" == b || "right" == b) a.styles["float"] = b } delete a.attributes.align }, alignmentToAttribute: function (a) { if (!("align" in a.attributes)) { var b = a.styles["float"]; if ("left" == b || "right" == b) a.attributes.align = b } delete a.styles["float"] },
                    splitBorderShorthand: function (a) { if (a.styles.border) { var b = CKEDITOR.tools.style.parse.border(a.styles.border); b.color && (a.styles["border-color"] = b.color); b.style && (a.styles["border-style"] = b.style); b.width && (a.styles["border-width"] = b.width); delete a.styles.border } }, listTypeToStyle: function (a) {
                        if (a.attributes.type) switch (a.attributes.type) {
                            case "a": a.styles["list-style-type"] = "lower-alpha"; break; case "A": a.styles["list-style-type"] = "upper-alpha"; break; case "i": a.styles["list-style-type"] = "lower-roman";
                                break; case "I": a.styles["list-style-type"] = "upper-roman"; break; case "1": a.styles["list-style-type"] = "decimal"; break; default: a.styles["list-style-type"] = a.attributes.type
                        }
                    }, splitMarginShorthand: function (a) {
                        function b(d) { a.styles["margin-top"] = c[d[0]]; a.styles["margin-right"] = c[d[1]]; a.styles["margin-bottom"] = c[d[2]]; a.styles["margin-left"] = c[d[3]] } if (a.styles.margin) {
                            var c = a.styles.margin.match(/(auto|0|(?:\-?[\.\d]+(?:\w+|%)))/g) || ["0px"]; switch (c.length) {
                                case 1: b([0, 0, 0, 0]); break; case 2: b([0, 1, 0,
                                    1]); break; case 3: b([0, 1, 2, 1]); break; case 4: b([0, 1, 2, 3])
                            }delete a.styles.margin
                        }
                    }, matchesStyle: x, transform: function (a, b) { if ("string" == typeof b) a.name = b; else { var c = b.getDefinition(), d = c.styles, e = c.attributes, g, k, l, h; a.name = c.element; for (g in e) if ("class" == g) for (c = a.classes.join("|"), l = e[g].split(/\s+/); h = l.pop();)-1 == c.indexOf(h) && a.classes.push(h); else a.attributes[g] = e[g]; for (k in d) a.styles[k] = d[k] } }
                }
        }(), function () {
            CKEDITOR.focusManager = function (a) {
                if (a.focusManager) return a.focusManager; this.hasFocus =
                    !1; this.currentActive = null; this._ = { editor: a }; return this
            }; CKEDITOR.focusManager._ = { blurDelay: 200 }; CKEDITOR.focusManager.prototype = {
                focus: function (a) { this._.timer && clearTimeout(this._.timer); a && (this.currentActive = a); this.hasFocus || this._.locked || ((a = CKEDITOR.currentInstance) && a.focusManager.blur(1), this.hasFocus = !0, (a = this._.editor.container) && a.addClass("cke_focus"), this._.editor.fire("focus")) }, lock: function () { this._.locked = 1 }, unlock: function () { delete this._.locked }, blur: function (a) {
                    function f() {
                        if (this.hasFocus) {
                            this.hasFocus =
                            !1; var a = this._.editor.container; a && a.removeClass("cke_focus"); this._.editor.fire("blur")
                        }
                    } if (!this._.locked) { this._.timer && clearTimeout(this._.timer); var e = CKEDITOR.focusManager._.blurDelay; a || !e ? f.call(this) : this._.timer = CKEDITOR.tools.setTimeout(function () { delete this._.timer; f.call(this) }, e, this) }
                }, add: function (a, f) {
                    var e = a.getCustomData("focusmanager"); if (!e || e != this) {
                        e && e.remove(a); var e = "focus", b = "blur"; f && (CKEDITOR.env.ie ? (e = "focusin", b = "focusout") : CKEDITOR.event.useCapture = 1); var d = {
                            blur: function () {
                                a.equals(this.currentActive) &&
                                this.blur()
                            }, focus: function () { this.focus(a) }
                        }; a.on(e, d.focus, this); a.on(b, d.blur, this); f && (CKEDITOR.event.useCapture = 0); a.setCustomData("focusmanager", this); a.setCustomData("focusmanager_handlers", d)
                    }
                }, remove: function (a) { a.removeCustomData("focusmanager"); var f = a.removeCustomData("focusmanager_handlers"); a.removeListener("blur", f.blur); a.removeListener("focus", f.focus) }
            }
        }(), CKEDITOR.keystrokeHandler = function (a) {
            if (a.keystrokeHandler) return a.keystrokeHandler; this.keystrokes = {}; this.blockedKeystrokes =
                {}; this._ = { editor: a }; return this
        }, function () { var a, f = function (b) { b = b.data; var d = b.getKeystroke(), e = this.keystrokes[d], h = this._.editor; a = !1 === h.fire("key", { keyCode: d, domEvent: b }); a || (e && (a = !1 !== h.execCommand(e, { from: "keystrokeHandler" })), a || (a = !!this.blockedKeystrokes[d])); a && b.preventDefault(!0); return !a }, e = function (b) { a && (a = !1, b.data.preventDefault(!0)) }; CKEDITOR.keystrokeHandler.prototype = { attach: function (a) { a.on("keydown", f, this); if (CKEDITOR.env.gecko && CKEDITOR.env.mac) a.on("keypress", e, this) } } }(),
        function () {
            CKEDITOR.lang = {
                languages: { af: 1, ar: 1, az: 1, bg: 1, bn: 1, bs: 1, ca: 1, cs: 1, cy: 1, da: 1, de: 1, "de-ch": 1, el: 1, "en-au": 1, "en-ca": 1, "en-gb": 1, en: 1, eo: 1, es: 1, "es-mx": 1, et: 1, eu: 1, fa: 1, fi: 1, fo: 1, "fr-ca": 1, fr: 1, gl: 1, gu: 1, he: 1, hi: 1, hr: 1, hu: 1, id: 1, is: 1, it: 1, ja: 1, ka: 1, km: 1, ko: 1, ku: 1, lt: 1, lv: 1, mk: 1, mn: 1, ms: 1, nb: 1, nl: 1, no: 1, oc: 1, pl: 1, "pt-br": 1, pt: 1, ro: 1, ru: 1, si: 1, sk: 1, sl: 1, sq: 1, "sr-latn": 1, sr: 1, sv: 1, th: 1, tr: 1, tt: 1, ug: 1, uk: 1, vi: 1, "zh-cn": 1, zh: 1 }, rtl: { ar: 1, fa: 1, he: 1, ku: 1, ug: 1 }, load: function (a, f, e) {
                    a && CKEDITOR.lang.languages[a] ||
                    (a = this.detect(f, a)); var b = this; f = function () { b[a].dir = b.rtl[a] ? "rtl" : "ltr"; e(a, b[a]) }; this[a] ? f() : CKEDITOR.scriptLoader.load(CKEDITOR.getUrl("lang/" + a + ".js"), f, this)
                }, detect: function (a, f) { var e = this.languages; f = f || navigator.userLanguage || navigator.language || a; var b = f.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/), d = b[1], b = b[2]; e[d + "-" + b] ? d = d + "-" + b : e[d] || (d = null); CKEDITOR.lang.detect = d ? function () { return d } : function (a) { return a }; return d || a }
            }
        }(), CKEDITOR.scriptLoader = function () {
            var a = {}, f = {}; return {
                load: function (e,
                    b, d, l) {
                        var h = "string" == typeof e; h && (e = [e]); d || (d = CKEDITOR); var m = e.length, c = m, k = [], g = [], n = function (a) { b && (h ? b.call(d, a) : b.call(d, k, g)) }; if (0 === c) n(!0); else {
                            var r = function (a, b) { (b ? k : g).push(a); 0 >= --c && (l && CKEDITOR.document.getDocumentElement().removeStyle("cursor"), n(b)) }, w = function (b, c) { a[b] = 1; var d = f[b]; delete f[b]; for (var e = 0; e < d.length; e++)d[e](b, c) }, p = function (c) {
                                if (a[c]) r(c, !0); else {
                                    var d = f[c] || (f[c] = []); d.push(r); if (!(1 < d.length)) {
                                        var e = new CKEDITOR.dom.element("script"); e.setAttributes({
                                            type: "text/javascript",
                                            src: c
                                        }); b && (CKEDITOR.env.ie && (8 >= CKEDITOR.env.version || CKEDITOR.env.ie9Compat) ? e.$.onreadystatechange = function () { if ("loaded" == e.$.readyState || "complete" == e.$.readyState) e.$.onreadystatechange = null, w(c, !0) } : (e.$.onload = function () { setTimeout(function () { e.$.onload = null; e.$.onerror = null; w(c, !0) }, 0) }, e.$.onerror = function () { e.$.onload = null; e.$.onerror = null; w(c, !1) })); e.appendTo(CKEDITOR.document.getHead())
                                    }
                                }
                            }; l && CKEDITOR.document.getDocumentElement().setStyle("cursor", "wait"); for (var t = 0; t < m; t++)p(e[t])
                        }
                },
                queue: function () { function a() { var d; (d = b[0]) && this.load(d.scriptUrl, d.callback, CKEDITOR, 0) } var b = []; return function (d, l) { var h = this; b.push({ scriptUrl: d, callback: function () { l && l.apply(this, arguments); b.shift(); a.call(h) } }); 1 == b.length && a.call(this) } }()
            }
        }(), CKEDITOR.resourceManager = function (a, f) { this.basePath = a; this.fileName = f; this.registered = {}; this.loaded = {}; this.externals = {}; this._ = { waitingList: {} } }, CKEDITOR.resourceManager.prototype = {
            add: function (a, f) {
                if (this.registered[a]) throw Error('[CKEDITOR.resourceManager.add] The resource name "' +
                    a + '" is already registered.'); var e = this.registered[a] = f || {}; e.name = a; e.path = this.getPath(a); CKEDITOR.fire(a + CKEDITOR.tools.capitalize(this.fileName) + "Ready", e); return this.get(a)
            }, get: function (a) { return this.registered[a] || null }, getPath: function (a) { var f = this.externals[a]; return CKEDITOR.getUrl(f && f.dir || this.basePath + a + "/") }, getFilePath: function (a) { var f = this.externals[a]; return CKEDITOR.getUrl(this.getPath(a) + (f ? f.file : this.fileName + ".js")) }, addExternal: function (a, f, e) {
                e || (f = f.replace(/[^\/]+$/,
                    function (a) { e = a; return "" })); e = e || this.fileName + ".js"; a = a.split(","); for (var b = 0; b < a.length; b++)this.externals[a[b]] = { dir: f, file: e }
            }, load: function (a, f, e) {
                CKEDITOR.tools.isArray(a) || (a = a ? [a] : []); for (var b = this.loaded, d = this.registered, l = [], h = {}, m = {}, c = 0; c < a.length; c++) { var k = a[c]; if (k) if (b[k] || d[k]) m[k] = this.get(k); else { var g = this.getFilePath(k); l.push(g); g in h || (h[g] = []); h[g].push(k) } } CKEDITOR.scriptLoader.load(l, function (a, c) {
                    if (c.length) throw Error('[CKEDITOR.resourceManager.load] Resource name "' +
                        h[c[0]].join(",") + '" was not found at "' + c[0] + '".'); for (var d = 0; d < a.length; d++)for (var g = h[a[d]], k = 0; k < g.length; k++) { var l = g[k]; m[l] = this.get(l); b[l] = 1 } f.call(e, m)
                }, this)
            }
        }, CKEDITOR.plugins = new CKEDITOR.resourceManager("plugins/", "plugin"), CKEDITOR.plugins.load = CKEDITOR.tools.override(CKEDITOR.plugins.load, function (a) {
            var f = {}; return function (e, b, d) {
                var l = {}, h = function (e) {
                    a.call(this, e, function (a) {
                        CKEDITOR.tools.extend(l, a); var e = [], g; for (g in a) {
                            var m = a[g], r = m && m.requires; if (!f[g]) {
                                if (m.icons) for (var w =
                                    m.icons.split(","), p = w.length; p--;)CKEDITOR.skin.addIcon(w[p], m.path + "icons/" + (CKEDITOR.env.hidpi && m.hidpi ? "hidpi/" : "") + w[p] + ".png"); m.isSupportedEnvironment = m.isSupportedEnvironment || function () { return !0 }; f[g] = 1
                            } if (r) for (r.split && (r = r.split(",")), m = 0; m < r.length; m++)l[r[m]] || e.push(r[m])
                        } if (e.length) h.call(this, e); else { for (g in l) m = l[g], m.onLoad && !m.onLoad._called && (!1 === m.onLoad() && delete l[g], m.onLoad._called = 1); b && b.call(d || window, l) }
                    }, this)
                }; h.call(this, e)
            }
        }), CKEDITOR.plugins.setLang = function (a,
            f, e) { var b = this.get(a); a = b.langEntries || (b.langEntries = {}); b = b.lang || (b.lang = []); b.split && (b = b.split(",")); -1 == CKEDITOR.tools.indexOf(b, f) && b.push(f); a[f] = e }, CKEDITOR.ui = function (a) { if (a.ui) return a.ui; this.items = {}; this.instances = {}; this.editor = a; this._ = { handlers: {} }; return this }, CKEDITOR.ui.prototype = {
                add: function (a, f, e) { e.name = a.toLowerCase(); var b = this.items[a] = { type: f, command: e.command || null, args: Array.prototype.slice.call(arguments, 2) }; CKEDITOR.tools.extend(b, e) }, get: function (a) { return this.instances[a] },
                create: function (a) { var f = this.items[a], e = f && this._.handlers[f.type], b = f && f.command && this.editor.getCommand(f.command), e = e && e.create.apply(this, f.args); this.instances[a] = e; b && b.uiItems.push(e); e && !e.type && (e.type = f.type); return e }, addHandler: function (a, f) { this._.handlers[a] = f }, space: function (a) { return CKEDITOR.document.getById(this.spaceId(a)) }, spaceId: function (a) { return this.editor.id + "_" + a }
            }, CKEDITOR.event.implementOn(CKEDITOR.ui), function () {
                function a(a, c, d) {
                    CKEDITOR.event.call(this); a = a && CKEDITOR.tools.clone(a);
                    if (void 0 !== c) {
                        if (!(c instanceof CKEDITOR.dom.element)) throw Error("Expect element of type CKEDITOR.dom.element."); if (!d) throw Error("One of the element modes must be specified."); if (CKEDITOR.env.ie && CKEDITOR.env.quirks && d == CKEDITOR.ELEMENT_MODE_INLINE) throw Error("Inline element mode is not supported on IE quirks."); if (!e(c, d)) throw Error('The specified element mode is not supported on element: "' + c.getName() + '".'); this.element = c; this.elementMode = d; this.name = this.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO &&
                            (c.getId() || c.getNameAtt())
                    } else this.elementMode = CKEDITOR.ELEMENT_MODE_NONE; this._ = {}; this.commands = {}; this.templates = {}; this.name = this.name || f(); this.id = CKEDITOR.tools.getNextId(); this.status = "unloaded"; this.config = CKEDITOR.tools.prototypedCopy(CKEDITOR.config); this.ui = new CKEDITOR.ui(this); this.focusManager = new CKEDITOR.focusManager(this); this.keystrokeHandler = new CKEDITOR.keystrokeHandler(this); this.on("readOnly", b); this.on("selectionChange", function (a) { l(this, a.data.path) }); this.on("activeFilterChange",
                        function () { l(this, this.elementPath(), !0) }); this.on("mode", b); CKEDITOR.dom.selection.setupEditorOptimization(this); this.on("instanceReady", function () { if (this.config.startupFocus) { if ("end" === this.config.startupFocus) { var a = this.createRange(); a.selectNodeContents(this.editable()); a.shrink(CKEDITOR.SHRINK_ELEMENT, !0); a.collapse(); this.getSelection().selectRanges([a]) } this.focus() } }); CKEDITOR.fire("instanceCreated", null, this); CKEDITOR.add(this); CKEDITOR.tools.setTimeout(function () {
                            this.isDestroyed() ||
                            this.isDetached() || m(this, a)
                        }, 0, this)
                } function f() { do var a = "editor" + ++p; while (CKEDITOR.instances[a]); return a } function e(a, b) { return b == CKEDITOR.ELEMENT_MODE_INLINE ? a.is(CKEDITOR.dtd.$editable) || a.is("textarea") : b == CKEDITOR.ELEMENT_MODE_REPLACE ? !a.is(CKEDITOR.dtd.$nonBodyContent) : 1 } function b() { var a = this.commands, b; for (b in a) d(this, a[b]) } function d(a, b) { b[b.startDisabled ? "disable" : a.readOnly && !b.readOnly ? "disable" : b.modes[a.mode] ? "enable" : "disable"]() } function l(a, b, c) {
                    if (b) {
                        var d, e, g = a.commands;
                        for (e in g) d = g[e], (c || d.contextSensitive) && d.refresh(a, b)
                    }
                } function h(a) { var b = a.config.customConfig; if (!b) return !1; var b = CKEDITOR.getUrl(b), c = t[b] || (t[b] = {}); c.fn ? (c.fn.call(a, a.config), CKEDITOR.getUrl(a.config.customConfig) != b && h(a) || a.fireOnce("customConfigLoaded")) : CKEDITOR.scriptLoader.queue(b, function () { c.fn = c.fn || CKEDITOR.editorConfig || function () { }; h(a) }); return !0 } function m(a, b) {
                    a.on("customConfigLoaded", function () {
                        if (b) {
                            if (b.on) for (var d in b.on) a.on(d, b.on[d]); CKEDITOR.tools.extend(a.config,
                                b, !0); delete a.config.on
                        } d = a.config; a.readOnly = d.readOnly ? !0 : a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? a.element.is("textarea") ? a.element.hasAttribute("disabled") || a.element.hasAttribute("readonly") : a.element.isReadOnly() : a.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE ? a.element.hasAttribute("disabled") || a.element.hasAttribute("readonly") : !1; a.blockless = a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? !(a.element.is("textarea") || CKEDITOR.dtd[a.element.getName()].p) : !1; a.tabIndex = d.tabIndex || a.element &&
                            a.element.getAttribute("tabindex") || 0; a.activeEnterMode = a.enterMode = a.blockless ? CKEDITOR.ENTER_BR : d.enterMode; a.activeShiftEnterMode = a.shiftEnterMode = a.blockless ? CKEDITOR.ENTER_BR : d.shiftEnterMode; d.skin && (CKEDITOR.skinName = d.skin); a.fireOnce("configLoaded"); a.dataProcessor = new CKEDITOR.htmlDataProcessor(a); a.filter = a.activeFilter = new CKEDITOR.filter(a); c(a)
                    }); b && null != b.customConfig && (a.config.customConfig = b.customConfig); h(a) || a.fireOnce("customConfigLoaded")
                } function c(a) {
                    CKEDITOR.skin.loadPart("editor",
                        function () { k(a) })
                } function k(a) { CKEDITOR.lang.load(a.config.language, a.config.defaultLanguage, function (b, c) { var d = a.config.title; a.langCode = b; a.lang = CKEDITOR.tools.prototypedCopy(c); a.title = "string" == typeof d || !1 === d ? d : [a.lang.editor, a.name].join(", "); a.config.contentsLangDirection || (a.config.contentsLangDirection = a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? a.element.getDirection(1) : a.lang.dir); a.fire("langLoaded"); g(a) }) } function g(a) {
                    a.getStylesSet(function (b) {
                        a.once("loaded", function () {
                            a.fire("stylesSet",
                                { styles: b })
                        }, null, null, 1); n(a)
                    })
                } function n(a) {
                    function b(a) { if (!a) return ""; CKEDITOR.tools.isArray(a) && (a = a.join(",")); return a.replace(/\s/g, "") } var c = a.config, d = b(c.plugins), e = b(c.extraPlugins), g = b(c.removePlugins); if (e) var k = new RegExp("(?:^|,)(?:" + e.replace(/,/g, "|") + ")(?\x3d,|$)", "g"), d = d.replace(k, ""), d = d + ("," + e); if (g) var l = new RegExp("(?:^|,)(?:" + g.replace(/,/g, "|") + ")(?\x3d,|$)", "g"), d = d.replace(l, ""); CKEDITOR.env.air && (d += ",adobeair"); CKEDITOR.plugins.load(d.split(","), function (b) {
                        var d =
                            [], e = [], g = []; a.plugins = CKEDITOR.tools.extend({}, a.plugins, b); for (var k in b) {
                                var h = b[k], f = h.lang, m = null, n = h.requires, z; CKEDITOR.tools.isArray(n) && (n = n.join(",")); if (n && (z = n.match(l))) for (; n = z.pop();)CKEDITOR.error("editor-plugin-required", { plugin: n.replace(",", ""), requiredBy: k }); f && !a.lang[k] && (f.split && (f = f.split(",")), 0 <= CKEDITOR.tools.indexOf(f, a.langCode) ? m = a.langCode : (m = a.langCode.replace(/-.*/, ""), m = m != a.langCode && 0 <= CKEDITOR.tools.indexOf(f, m) ? m : 0 <= CKEDITOR.tools.indexOf(f, "en") ? "en" : f[0]),
                                    h.langEntries && h.langEntries[m] ? (a.lang[k] = h.langEntries[m], m = null) : g.push(CKEDITOR.getUrl(h.path + "lang/" + m + ".js"))); e.push(m); d.push(h)
                            } CKEDITOR.scriptLoader.load(g, function () {
                                if (!a.isDestroyed() && !a.isDetached()) {
                                    for (var b = ["beforeInit", "init", "afterInit"], g = 0; g < b.length; g++)for (var k = 0; k < d.length; k++) { var l = d[k]; 0 === g && e[k] && l.lang && l.langEntries && (a.lang[l.name] = l.langEntries[e[k]]); if (l[b[g]]) l[b[g]](a) } a.fireOnce("pluginsLoaded"); c.keystrokes && a.setKeystroke(a.config.keystrokes); for (k = 0; k < a.config.blockedKeystrokes.length; k++)a.keystrokeHandler.blockedKeystrokes[a.config.blockedKeystrokes[k]] =
                                        1; a.status = "loaded"; a.fireOnce("loaded"); CKEDITOR.fire("instanceLoaded", null, a)
                                }
                            })
                    })
                } function r() { var a = this.element; if (a && this.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO) { var b = this.getData(); this.config.htmlEncodeOutput && (b = CKEDITOR.tools.htmlEncode(b)); a.is("textarea") ? a.setValue(b) : a.setHtml(b); return !0 } return !1 } function w(a, b) {
                    function c(a) { var b = a.startContainer, d = a.endContainer; return b.is && (b.is("tr") || b.is("td") && b.equals(d) && a.endOffset === b.getChildCount()) ? !0 : !1 } function d(a) {
                        var b = a.startContainer;
                        return b.is("tr") ? a.cloneContents() : b.clone(!0)
                    } for (var e = new CKEDITOR.dom.documentFragment, g, k, l, h = 0; h < a.length; h++) { var f = a[h], m = f.startContainer.getAscendant("tr", !0); c(f) ? (g || (g = m.getAscendant("table").clone(), g.append(m.getAscendant({ thead: 1, tbody: 1, tfoot: 1 }).clone()), e.append(g), g = g.findOne("thead, tbody, tfoot")), k && k.equals(m) || (k = m, l = m.clone(), g.append(l)), l.append(d(f))) : e.append(f.cloneContents()) } return g ? e : b.getHtmlFromRange(a[0])
                } a.prototype = CKEDITOR.editor.prototype; CKEDITOR.editor =
                    a; var p = 0, t = {}; CKEDITOR.tools.extend(CKEDITOR.editor.prototype, {
                        plugins: { detectConflict: function (a, b) { for (var c = 0; c < b.length; c++) { var d = b[c]; if (this[d]) return CKEDITOR.warn("editor-plugin-conflict", { plugin: a, replacedWith: d }), !0 } return !1 } }, addCommand: function (a, b) { b.name = a.toLowerCase(); var c = b instanceof CKEDITOR.command ? b : new CKEDITOR.command(this, b); this.mode && d(this, c); return this.commands[a] = c }, _attachToForm: function () {
                            function a(b) {
                                c.updateElement(); c._.required && !d.getValue() && !1 === c.fire("required") &&
                                    b.data.preventDefault()
                            } function b(a) { return !!(a && a.call && a.apply) } var c = this, d = c.element, e = new CKEDITOR.dom.element(d.$.form); d.is("textarea") && e && (e.on("submit", a), b(e.$.submit) && (e.$.submit = CKEDITOR.tools.override(e.$.submit, function (b) { return function () { a(); b.apply ? b.apply(this) : b() } })), c.on("destroy", function () { e.removeListener("submit", a) }))
                        }, destroy: function (a) {
                            var b = CKEDITOR.filter.instances, c = this; this.fire("beforeDestroy"); !a && r.call(this); this.editable(null); this.filter && delete this.filter;
                            CKEDITOR.tools.array.forEach(CKEDITOR.tools.object.keys(b), function (a) { a = b[a]; c === a.editor && a.destroy() }); delete this.activeFilter; this.status = "destroyed"; this.fire("destroy"); this.removeAllListeners(); CKEDITOR.remove(this); CKEDITOR.fire("instanceDestroyed", null, this)
                        }, elementPath: function (a) { if (!a) { a = this.getSelection(); if (!a) return null; a = a.getStartElement() } return a ? new CKEDITOR.dom.elementPath(a, this.editable()) : null }, createRange: function () {
                            var a = this.editable(); return a ? new CKEDITOR.dom.range(a) :
                                null
                        }, execCommand: function (a, b) { var c = this.getCommand(a), d = { name: a, commandData: b || {}, command: c }; return c && c.state != CKEDITOR.TRISTATE_DISABLED && !1 !== this.fire("beforeCommandExec", d) && (d.returnValue = c.exec(d.commandData), !c.async && !1 !== this.fire("afterCommandExec", d)) ? d.returnValue : !1 }, getCommand: function (a) { return this.commands[a] }, getData: function (a) {
                            !a && this.fire("beforeGetData"); var b = this._.data; "string" != typeof b && (b = (b = this.element) && this.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE ? b.is("textarea") ?
                                b.getValue() : b.getHtml() : ""); b = { dataValue: b }; !a && this.fire("getData", b); return b.dataValue
                        }, getSnapshot: function () { var a = this.fire("getSnapshot"); "string" != typeof a && (a = (a = this.element) && this.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE ? a.is("textarea") ? a.getValue() : a.getHtml() : ""); return a }, loadSnapshot: function (a) { this.fire("loadSnapshot", a) }, setData: function (a, b, c) {
                            var d = !0, e = b; b && "object" == typeof b && (c = b.internal, e = b.callback, d = !b.noSnapshot); !c && d && this.fire("saveSnapshot"); if (e || !c) this.once("dataReady",
                                function (a) { !c && d && this.fire("saveSnapshot"); e && e.call(a.editor) }); a = { dataValue: a }; !c && this.fire("setData", a); this._.data = a.dataValue; !c && this.fire("afterSetData", a)
                        }, setReadOnly: function (a) { a = null == a || a; this.readOnly != a && (this.readOnly = a, this.keystrokeHandler.blockedKeystrokes[8] = +a, this.editable().setReadOnly(a), this.fire("readOnly")) }, insertHtml: function (a, b, c) { this.fire("insertHtml", { dataValue: a, mode: b, range: c }) }, insertText: function (a) { this.fire("insertText", a) }, insertElement: function (a) {
                            this.fire("insertElement",
                                a)
                        }, getSelectedHtml: function (a) { var b = this.editable(), c = this.getSelection(), c = c && c.getRanges(); if (!b || !c || 0 === c.length) return null; b = w(c, b); return a ? b.getHtml() : b }, extractSelectedHtml: function (a, b) { var c = this.editable(), d = this.getSelection().getRanges(), e = new CKEDITOR.dom.documentFragment, g; if (!c || 0 === d.length) return null; for (g = 0; g < d.length; g++)e.append(c.extractHtmlFromRange(d[g], b)); b || this.getSelection().selectRanges([d[0]]); return a ? e.getHtml() : e }, focus: function () { this.fire("beforeFocus") }, checkDirty: function () {
                            return "ready" ==
                                this.status && this._.previousValue !== this.getSnapshot()
                        }, resetDirty: function () { this._.previousValue = this.getSnapshot() }, updateElement: function () { return r.call(this) }, setKeystroke: function () { for (var a = this.keystrokeHandler.keystrokes, b = CKEDITOR.tools.isArray(arguments[0]) ? arguments[0] : [[].slice.call(arguments, 0)], c, d, e = b.length; e--;)c = b[e], d = 0, CKEDITOR.tools.isArray(c) && (d = c[1], c = c[0]), d ? a[c] = d : delete a[c] }, getCommandKeystroke: function (a, b) {
                            var c = "string" === typeof a ? this.getCommand(a) : a, d = []; if (c) {
                                var e =
                                    CKEDITOR.tools.object.findKey(this.commands, c), g = this.keystrokeHandler.keystrokes; if (c.fakeKeystroke) d.push(c.fakeKeystroke); else for (var k in g) g[k] === e && d.push(k)
                            } return b ? d : d[0] || null
                        }, addFeature: function (a) { return this.filter.addFeature(a) }, setActiveFilter: function (a) {
                            a || (a = this.filter); this.activeFilter !== a && (this.activeFilter = a, this.fire("activeFilterChange"), a === this.filter ? this.setActiveEnterMode(null, null) : this.setActiveEnterMode(a.getAllowedEnterMode(this.enterMode), a.getAllowedEnterMode(this.shiftEnterMode,
                                !0)))
                        }, setActiveEnterMode: function (a, b) { a = a ? this.blockless ? CKEDITOR.ENTER_BR : a : this.enterMode; b = b ? this.blockless ? CKEDITOR.ENTER_BR : b : this.shiftEnterMode; if (this.activeEnterMode != a || this.activeShiftEnterMode != b) this.activeEnterMode = a, this.activeShiftEnterMode = b, this.fire("activeEnterModeChange") }, showNotification: function (a) { alert(a) }, isDetached: function () { return !!this.container && this.container.isDetached() }, isDestroyed: function () { return "destroyed" === this.status }
                    }); CKEDITOR.editor._getEditorElement =
                        function (a) { if (!CKEDITOR.env.isCompatible) return null; var b = CKEDITOR.dom.element.get(a); return b ? b.getEditor() ? (CKEDITOR.error("editor-element-conflict", { editorName: b.getEditor().name }), null) : b : (CKEDITOR.error("editor-incorrect-element", { element: a }), null) }
            }(), CKEDITOR.ELEMENT_MODE_NONE = 0, CKEDITOR.ELEMENT_MODE_REPLACE = 1, CKEDITOR.ELEMENT_MODE_APPENDTO = 2, CKEDITOR.ELEMENT_MODE_INLINE = 3, CKEDITOR.htmlParser = function () { this._ = { htmlPartsRegex: /<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)--!?>)|(?:([^\/\s>]+)((?:\s+[\w\-:.]+(?:\s*=\s*?(?:(?:"[^"]*")|(?:'[^']*')|[^\s"'\/>]+))?)*)[\S\s]*?(\/?)>))/g } },
        function () {
            var a = /([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g, f = { checked: 1, compact: 1, declare: 1, defer: 1, disabled: 1, ismap: 1, multiple: 1, nohref: 1, noresize: 1, noshade: 1, nowrap: 1, readonly: 1, selected: 1 }; CKEDITOR.htmlParser.prototype = {
                onTagOpen: function () { }, onTagClose: function () { }, onText: function () { }, onCDATA: function () { }, onComment: function () { }, parse: function (e) {
                    for (var b, d, l = 0, h; b = this._.htmlPartsRegex.exec(e);) {
                        d = b.index; if (d > l) if (l = e.substring(l, d), h) h.push(l); else this.onText(l);
                        l = this._.htmlPartsRegex.lastIndex; if (d = b[1]) if (d = d.toLowerCase(), h && CKEDITOR.dtd.$cdata[d] && (this.onCDATA(h.join("")), h = null), !h) { this.onTagClose(d); continue } if (h) h.push(b[0]); else if (d = b[3]) { if (d = d.toLowerCase(), !/="/.test(d)) { var m = {}, c, k = b[4]; b = !!b[5]; if (k) for (; c = a.exec(k);) { var g = c[1].toLowerCase(); c = c[2] || c[3] || c[4] || ""; m[g] = !c && f[g] ? g : CKEDITOR.tools.htmlDecodeAttr(c) } this.onTagOpen(d, m, b); !h && CKEDITOR.dtd.$cdata[d] && (h = []) } } else if (d = b[2]) this.onComment(d)
                    } if (e.length > l) this.onText(e.substring(l,
                        e.length))
                }
            }
        }(), CKEDITOR.htmlParser.basicWriter = CKEDITOR.tools.createClass({
            $: function () { this._ = { output: [] } }, proto: {
                openTag: function (a) { this._.output.push("\x3c", a) }, openTagClose: function (a, f) { f ? this._.output.push(" /\x3e") : this._.output.push("\x3e") }, attribute: function (a, f) { "string" == typeof f && (f = CKEDITOR.tools.htmlEncodeAttr(f)); this._.output.push(" ", a, '\x3d"', f, '"') }, closeTag: function (a) { this._.output.push("\x3c/", a, "\x3e") }, text: function (a) { this._.output.push(a) }, comment: function (a) {
                    this._.output.push("\x3c!--",
                        a, "--\x3e")
                }, write: function (a) { this._.output.push(a) }, reset: function () { this._.output = []; this._.indent = !1 }, getHtml: function (a) { var f = this._.output.join(""); a && this.reset(); return f }
            }
        }), "use strict", function () {
            CKEDITOR.htmlParser.node = function () { }; CKEDITOR.htmlParser.node.prototype = {
                remove: function () { var a = this.parent.children, f = CKEDITOR.tools.indexOf(a, this), e = this.previous, b = this.next; e && (e.next = b); b && (b.previous = e); a.splice(f, 1); this.parent = null }, replaceWith: function (a) {
                    var f = this.parent.children,
                    e = CKEDITOR.tools.indexOf(f, this), b = a.previous = this.previous, d = a.next = this.next; b && (b.next = a); d && (d.previous = a); f[e] = a; a.parent = this.parent; this.parent = null
                }, insertAfter: function (a) { var f = a.parent.children, e = CKEDITOR.tools.indexOf(f, a), b = a.next; f.splice(e + 1, 0, this); this.next = a.next; this.previous = a; a.next = this; b && (b.previous = this); this.parent = a.parent }, insertBefore: function (a) {
                    var f = a.parent.children, e = CKEDITOR.tools.indexOf(f, a); f.splice(e, 0, this); this.next = a; (this.previous = a.previous) && (a.previous.next =
                        this); a.previous = this; this.parent = a.parent
                }, getAscendant: function (a) { var f = "function" == typeof a ? a : "string" == typeof a ? function (b) { return b.name == a } : function (b) { return b.name in a }, e = this.parent; for (; e && e.type == CKEDITOR.NODE_ELEMENT;) { if (f(e)) return e; e = e.parent } return null }, wrapWith: function (a) { this.replaceWith(a); a.add(this); return a }, getIndex: function () { return CKEDITOR.tools.indexOf(this.parent.children, this) }, getFilterContext: function (a) { return a || {} }
            }
        }(), "use strict", CKEDITOR.htmlParser.comment =
        function (a) { this.value = a; this._ = { isBlockLike: !1 } }, CKEDITOR.htmlParser.comment.prototype = CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node, { type: CKEDITOR.NODE_COMMENT, filter: function (a, f) { var e = this.value; if (!(e = a.onComment(f, e, this))) return this.remove(), !1; if ("string" != typeof e) return this.replaceWith(e), !1; this.value = e; return !0 }, writeHtml: function (a, f) { f && this.filter(f); a.comment(this.value) } }), "use strict", function () {
            CKEDITOR.htmlParser.text = function (a) { this.value = a; this._ = { isBlockLike: !1 } }; CKEDITOR.htmlParser.text.prototype =
                CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node, { type: CKEDITOR.NODE_TEXT, filter: function (a, f) { if (!(this.value = a.onText(f, this.value, this))) return this.remove(), !1 }, writeHtml: function (a, f) { f && this.filter(f); a.text(this.value) } })
        }(), "use strict", function () { CKEDITOR.htmlParser.cdata = function (a) { this.value = a }; CKEDITOR.htmlParser.cdata.prototype = CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node, { type: CKEDITOR.NODE_TEXT, filter: function () { }, writeHtml: function (a) { a.write(this.value) } }) }(), "use strict",
        CKEDITOR.htmlParser.fragment = function () { this.children = []; this.parent = null; this._ = { isBlockLike: !0, hasInlineStarted: !1 } }, function () {
            function a(a) { return a.attributes["data-cke-survive"] ? !1 : "a" == a.name && a.attributes.href || CKEDITOR.dtd.$removeEmpty[a.name] } var f = CKEDITOR.tools.extend({ table: 1, ul: 1, ol: 1, dl: 1 }, CKEDITOR.dtd.table, CKEDITOR.dtd.ul, CKEDITOR.dtd.ol, CKEDITOR.dtd.dl), e = { ol: 1, ul: 1 }, b = CKEDITOR.tools.extend({}, { html: 1 }, CKEDITOR.dtd.html, CKEDITOR.dtd.body, CKEDITOR.dtd.head, { style: 1, script: 1 }), d = {
                ul: "li",
                ol: "li", dl: "dd", table: "tbody", tbody: "tr", thead: "tr", tfoot: "tr", tr: "td"
            }; CKEDITOR.htmlParser.fragment.fromHtml = function (l, h, m) {
                function c(a) { var b; if (0 < u.length) for (var c = 0; c < u.length; c++) { var d = u[c], e = d.name, g = CKEDITOR.dtd[e], l = q.name && CKEDITOR.dtd[q.name]; l && !l[e] || a && g && !g[a] && CKEDITOR.dtd[a] ? e == q.name && (n(q, q.parent, 1), c--) : (b || (k(), b = 1), d = d.clone(), d.parent = q, q = d, u.splice(c, 1), c--) } } function k() { for (; y.length;)n(y.shift(), q) } function g(a) {
                    if (a._.isBlockLike && "pre" != a.name && "textarea" != a.name) {
                        var b =
                            a.children.length, c = a.children[b - 1], d; c && c.type == CKEDITOR.NODE_TEXT && ((d = CKEDITOR.tools.rtrim(c.value)) ? c.value = d : a.children.length = b - 1)
                    }
                } function n(b, c, d) { c = c || q || t; var e = q; void 0 === b.previous && (r(c, b) && (q = c, p.onTagOpen(m, {}), b.returnPoint = c = q), g(b), a(b) && !b.children.length || c.add(b), "pre" == b.name && (v = !1), "textarea" == b.name && (A = !1)); b.returnPoint ? (q = b.returnPoint, delete b.returnPoint) : q = d ? c : e } function r(a, b) {
                    if ((a == t || "body" == a.name) && m && (!a.name || CKEDITOR.dtd[a.name][m])) {
                        var c, d; return (c = b.attributes &&
                            (d = b.attributes["data-cke-real-element-type"]) ? d : b.name) && c in CKEDITOR.dtd.$inline && !(c in CKEDITOR.dtd.head) && !b.isOrphan || b.type == CKEDITOR.NODE_TEXT
                    }
                } function w(a, b) { return a in CKEDITOR.dtd.$listItem || a in CKEDITOR.dtd.$tableContent ? a == b || "dt" == a && "dd" == b || "dd" == a && "dt" == b : !1 } var p = new CKEDITOR.htmlParser, t = h instanceof CKEDITOR.htmlParser.element ? h : "string" == typeof h ? new CKEDITOR.htmlParser.element(h) : new CKEDITOR.htmlParser.fragment, u = [], y = [], q = t, A = "textarea" == t.name, v = "pre" == t.name; p.onTagOpen =
                    function (d, g, l, h) {
                        g = new CKEDITOR.htmlParser.element(d, g); g.isUnknown && l && (g.isEmpty = !0); g.isOptionalClose = h; if (a(g)) u.push(g); else {
                            if ("pre" == d) v = !0; else { if ("br" == d && v) { q.add(new CKEDITOR.htmlParser.text("\n")); return } "textarea" == d && (A = !0) } if ("br" == d) y.push(g); else {
                                for (; !(h = (l = q.name) ? CKEDITOR.dtd[l] || (q._.isBlockLike ? CKEDITOR.dtd.div : CKEDITOR.dtd.span) : b, g.isUnknown || q.isUnknown || h[d]);)if (q.isOptionalClose) p.onTagClose(l); else if (d in e && l in e) l = q.children, (l = l[l.length - 1]) && "li" == l.name || n(l = new CKEDITOR.htmlParser.element("li"),
                                    q), !g.returnPoint && (g.returnPoint = q), q = l; else if (d in CKEDITOR.dtd.$listItem && !w(d, l)) p.onTagOpen("li" == d ? "ul" : "dl", {}, 0, 1); else if (l in f && !w(d, l)) !g.returnPoint && (g.returnPoint = q), q = q.parent; else if (l in CKEDITOR.dtd.$inline && u.unshift(q), q.parent) n(q, q.parent, 1); else { g.isOrphan = 1; break } c(d); k(); g.parent = q; g.isEmpty ? n(g) : q = g
                            }
                        }
                    }; p.onTagClose = function (a) {
                        for (var b = u.length - 1; 0 <= b; b--)if (a == u[b].name) { u.splice(b, 1); return } for (var c = [], d = [], e = q; e != t && e.name != a;)e._.isBlockLike || d.unshift(e), c.push(e),
                            e = e.returnPoint || e.parent; if (e != t) { for (b = 0; b < c.length; b++) { var g = c[b]; n(g, g.parent) } q = e; e._.isBlockLike && k(); n(e, e.parent); e == q && (q = q.parent); u = u.concat(d) } "body" == a && (m = !1)
                    }; p.onText = function (a) {
                        if (!(q._.hasInlineStarted && !y.length || v || A) && (a = CKEDITOR.tools.ltrim(a), 0 === a.length)) return; var e = q.name, g = e ? CKEDITOR.dtd[e] || (q._.isBlockLike ? CKEDITOR.dtd.div : CKEDITOR.dtd.span) : b; if (!A && !g["#"] && e in f) p.onTagOpen(d[e] || ""), p.onText(a); else {
                            k(); c(); v || A || (a = a.replace(/[\t\r\n ]{2,}|[\t\r\n]/g, " ")); a =
                                new CKEDITOR.htmlParser.text(a); if (r(q, a)) this.onTagOpen(m, {}, 0, 1); q.add(a)
                        }
                    }; p.onCDATA = function (a) { q.add(new CKEDITOR.htmlParser.cdata(a)) }; p.onComment = function (a) { k(); c(); q.add(new CKEDITOR.htmlParser.comment(a)) }; p.parse(l); for (k(); q != t;)n(q, q.parent, 1); g(t); return t
            }; CKEDITOR.htmlParser.fragment.prototype = {
                type: CKEDITOR.NODE_DOCUMENT_FRAGMENT, add: function (a, b) {
                    isNaN(b) && (b = this.children.length); var d = 0 < b ? this.children[b - 1] : null; if (d) {
                        if (a._.isBlockLike && d.type == CKEDITOR.NODE_TEXT && (d.value = CKEDITOR.tools.rtrim(d.value),
                            0 === d.value.length)) { this.children.pop(); this.add(a); return } d.next = a
                    } a.previous = d; a.parent = this; this.children.splice(b, 0, a); this._.hasInlineStarted || (this._.hasInlineStarted = a.type == CKEDITOR.NODE_TEXT || a.type == CKEDITOR.NODE_ELEMENT && !a._.isBlockLike)
                }, filter: function (a, b) { b = this.getFilterContext(b); a.onRoot(b, this); this.filterChildren(a, !1, b) }, filterChildren: function (a, b, d) {
                    if (this.childrenFilteredBy != a.id) {
                        d = this.getFilterContext(d); if (b && !this.parent) a.onRoot(d, this); this.childrenFilteredBy = a.id;
                        for (b = 0; b < this.children.length; b++)!1 === this.children[b].filter(a, d) && b--
                    }
                }, writeHtml: function (a, b) { b && this.filter(b); this.writeChildrenHtml(a) }, writeChildrenHtml: function (a, b, d) { var c = this.getFilterContext(); if (d && !this.parent && b) b.onRoot(c, this); b && this.filterChildren(b, !1, c); b = 0; d = this.children; for (c = d.length; b < c; b++)d[b].writeHtml(a) }, forEach: function (a, b, d) {
                    if (!(d || b && this.type != b)) var c = a(this); if (!1 !== c) {
                        d = this.children; for (var e = 0; e < d.length; e++)c = d[e], c.type == CKEDITOR.NODE_ELEMENT ? c.forEach(a,
                            b) : b && c.type != b || a(c)
                    }
                }, getFilterContext: function (a) { return a || {} }
            }
        }(), "use strict", function () {
            function a() { this.rules = [] } function f(e, b, d, l) { var h, f; for (h in b) (f = e[h]) || (f = e[h] = new a), f.add(b[h], d, l) } CKEDITOR.htmlParser.filter = CKEDITOR.tools.createClass({
                $: function (e) { this.id = CKEDITOR.tools.getNextNumber(); this.elementNameRules = new a; this.attributeNameRules = new a; this.elementsRules = {}; this.attributesRules = {}; this.textRules = new a; this.commentRules = new a; this.rootRules = new a; e && this.addRules(e, 10) },
                proto: {
                    addRules: function (a, b) {
                        var d; "number" == typeof b ? d = b : b && "priority" in b && (d = b.priority); "number" != typeof d && (d = 10); "object" != typeof b && (b = {}); a.elementNames && this.elementNameRules.addMany(a.elementNames, d, b); a.attributeNames && this.attributeNameRules.addMany(a.attributeNames, d, b); a.elements && f(this.elementsRules, a.elements, d, b); a.attributes && f(this.attributesRules, a.attributes, d, b); a.text && this.textRules.add(a.text, d, b); a.comment && this.commentRules.add(a.comment, d, b); a.root && this.rootRules.add(a.root,
                            d, b)
                    }, applyTo: function (a) { a.filter(this) }, onElementName: function (a, b) { return this.elementNameRules.execOnName(a, b) }, onAttributeName: function (a, b) { return this.attributeNameRules.execOnName(a, b) }, onText: function (a, b, d) { return this.textRules.exec(a, b, d) }, onComment: function (a, b, d) { return this.commentRules.exec(a, b, d) }, onRoot: function (a, b) { return this.rootRules.exec(a, b) }, onElement: function (a, b) {
                        for (var d = [this.elementsRules["^"], this.elementsRules[b.name], this.elementsRules.$], l, h = 0; 3 > h; h++)if (l = d[h]) {
                            l =
                            l.exec(a, b, this); if (!1 === l) return null; if (l && l != b) return this.onNode(a, l); if (b.parent && !b.name) break
                        } return b
                    }, onNode: function (a, b) { var d = b.type; return d == CKEDITOR.NODE_ELEMENT ? this.onElement(a, b) : d == CKEDITOR.NODE_TEXT ? new CKEDITOR.htmlParser.text(this.onText(a, b.value, b)) : d == CKEDITOR.NODE_COMMENT ? new CKEDITOR.htmlParser.comment(this.onComment(a, b.value, b)) : null }, onAttribute: function (a, b, d, l) { return (d = this.attributesRules[d]) ? d.exec(a, l, b, this) : l }
                }
            }); CKEDITOR.htmlParser.filterRulesGroup = a; a.prototype =
            {
                add: function (a, b, d) { this.rules.splice(this.findIndex(b), 0, { value: a, priority: b, options: d }) }, addMany: function (a, b, d) { for (var l = [this.findIndex(b), 0], h = 0, f = a.length; h < f; h++)l.push({ value: a[h], priority: b, options: d }); this.rules.splice.apply(this.rules, l) }, findIndex: function (a) { for (var b = this.rules, d = b.length - 1; 0 <= d && a < b[d].priority;)d--; return d + 1 }, exec: function (a, b) {
                    var d = b instanceof CKEDITOR.htmlParser.node || b instanceof CKEDITOR.htmlParser.fragment, l = Array.prototype.slice.call(arguments, 1), h = this.rules,
                    f = h.length, c, k, g, n; for (n = 0; n < f; n++)if (d && (c = b.type, k = b.name), g = h[n], !(a.nonEditable && !g.options.applyToAll || a.nestedEditable && g.options.excludeNestedEditable)) { g = g.value.apply(null, l); if (!1 === g || d && g && (g.name != k || g.type != c)) return g; null != g && (l[0] = b = g) } return b
                }, execOnName: function (a, b) { for (var d = 0, l = this.rules, h = l.length, f; b && d < h; d++)f = l[d], a.nonEditable && !f.options.applyToAll || a.nestedEditable && f.options.excludeNestedEditable || (b = b.replace(f.value[0], f.value[1])); return b }
            }
        }(), function () {
            function a(a,
                c) {
                    function g(a) { return a || CKEDITOR.env.needsNbspFiller ? new CKEDITOR.htmlParser.text(" ") : new CKEDITOR.htmlParser.element("br", { "data-cke-bogus": 1 }) } function k(a, c) {
                        return function (d) {
                            if (d.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT) {
                                var k = [], h = e(d), m, I; if (h) for (f(h, 1) && k.push(h); h;)l(h) && (m = b(h)) && f(m) && ((I = b(m)) && !l(I) ? k.push(m) : (g(n).insertAfter(m), m.remove())), h = h.previous; for (h = 0; h < k.length; h++)k[h].remove(); if (k = !a || !1 !== ("function" == typeof c ? c(d) : c)) n || CKEDITOR.env.needsBrFiller || d.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT ?
                                    n || CKEDITOR.env.needsBrFiller || !(7 < document.documentMode || d.name in CKEDITOR.dtd.tr || d.name in CKEDITOR.dtd.$listItem) ? (k = e(d), k = !k || "form" == d.name && "input" == k.name) : k = !1 : k = !1; k && d.add(g(a))
                            }
                        }
                    } function f(a, b) {
                        if ((!n || CKEDITOR.env.needsBrFiller) && a.type == CKEDITOR.NODE_ELEMENT && "br" == a.name && !a.attributes["data-cke-eol"]) return !0; var c; return a.type == CKEDITOR.NODE_TEXT && (c = a.value.match(y)) && (c.index && ((new CKEDITOR.htmlParser.text(a.value.substring(0, c.index))).insertBefore(a), a.value = c[0]), !CKEDITOR.env.needsBrFiller &&
                            n && (!b || a.parent.name in x) || !n && ((c = a.previous) && "br" == c.name || !c || l(c))) ? !0 : !1
                    } var m = { elements: {} }, n = "html" == c, x = CKEDITOR.tools.extend({}, z), H; for (H in x) "#" in A[H] || delete x[H]; for (H in x) m.elements[H] = k(n, a.config.fillEmptyBlocks); m.root = k(n, !1); m.elements.br = function (a) {
                        return function (c) {
                            if (c.parent.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT) {
                                var e = c.attributes; if ("data-cke-bogus" in e || "data-cke-eol" in e) delete e["data-cke-bogus"]; else {
                                    for (e = c.next; e && d(e);)e = e.next; var k = b(c); !e && l(c.parent) ? h(c.parent,
                                        g(a)) : l(e) && k && !l(k) && g(a).insertBefore(e)
                                }
                            }
                        }
                    }(n); return m
            } function f(a, b) { return a != CKEDITOR.ENTER_BR && !1 !== b ? a == CKEDITOR.ENTER_DIV ? "div" : "p" : !1 } function e(a) { for (a = a.children[a.children.length - 1]; a && d(a);)a = a.previous; return a } function b(a) { for (a = a.previous; a && d(a);)a = a.previous; return a } function d(a) { return a.type == CKEDITOR.NODE_TEXT && !CKEDITOR.tools.trim(a.value) || a.type == CKEDITOR.NODE_ELEMENT && a.attributes["data-cke-bookmark"] } function l(a) {
                return a && (a.type == CKEDITOR.NODE_ELEMENT && a.name in
                    z || a.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT)
            } function h(a, b) { var c = a.children[a.children.length - 1]; a.children.push(b); b.parent = a; c && (c.next = b, b.previous = c) } function m(a) { a = a.attributes; "false" != a.contenteditable && (a["data-cke-editable"] = a.contenteditable ? "true" : 1); a.contenteditable = "false" } function c(a) { a = a.attributes; switch (a["data-cke-editable"]) { case "true": a.contenteditable = "true"; break; case "1": delete a.contenteditable } } function k(a) {
                return a.replace(E, function (a, b, c) {
                    return "\x3c" + b + c.replace(L,
                        function (a, b) { return M.test(b) && -1 == c.indexOf("data-cke-saved-" + b) ? " data-cke-saved-" + a + " data-cke-" + CKEDITOR.rnd + "-" + a : a }) + "\x3e"
                })
            } function g(a, b) { return a.replace(b, function (a, b, c) { 0 === a.indexOf("\x3ctextarea") && (a = b + w(c).replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;") + "\x3c/textarea\x3e"); return "\x3ccke:encoded\x3e" + encodeURIComponent(a) + "\x3c/cke:encoded\x3e" }) } function n(a) { return a.replace(J, function (a, b) { return decodeURIComponent(b) }) } function r(a) {
                return a.replace(/\x3c!--(?!{cke_protected})[\s\S]+?--\x3e/g,
                    function (a) { return "\x3c!--" + q + "{C}" + encodeURIComponent(a).replace(/--/g, "%2D%2D") + "--\x3e" })
            } function w(a) { return a.replace(/\x3c!--\{cke_protected\}\{C\}([\s\S]+?)--\x3e/g, function (a, b) { return decodeURIComponent(b) }) } function p(a, b) { var c = b._.dataStore; return a.replace(/\x3c!--\{cke_protected\}([\s\S]+?)--\x3e/g, function (a, b) { return decodeURIComponent(b) }).replace(/\{cke_protected_(\d+)\}/g, function (a, b) { return c && c[b] || "" }) } function t(a, b) {
                var c = [], d = b.config.protectedSource, e = b._.dataStore || (b._.dataStore =
                    { id: 1 }), g = /<\!--\{cke_temp(comment)?\}(\d*?)--\x3e/g, d = [/<script[\s\S]*?(<\/script>|$)/gi, /<noscript[\s\S]*?<\/noscript>/gi, /<meta[\s\S]*?\/?>/gi].concat(d); a = a.replace(/\x3c!--[\s\S]*?--\x3e/g, function (a) { return "\x3c!--{cke_tempcomment}" + (c.push(a) - 1) + "--\x3e" }); for (var k = 0; k < d.length; k++)a = a.replace(d[k], function (a) { a = a.replace(g, function (a, b, d) { return c[d] }); return /cke_temp(comment)?/.test(a) ? a : "\x3c!--{cke_temp}" + (c.push(a) - 1) + "--\x3e" }); a = a.replace(g, function (a, b, d) {
                        return "\x3c!--" + q + (b ? "{C}" :
                            "") + encodeURIComponent(c[d]).replace(/--/g, "%2D%2D") + "--\x3e"
                    }); a = a.replace(/<\w+(?:\s+(?:(?:[^\s=>]+\s*=\s*(?:[^'"\s>]+|'[^']*'|"[^"]*"))|[^\s=\/>]+))+\s*\/?>/g, function (a) { return a.replace(/\x3c!--\{cke_protected\}([^>]*)--\x3e/g, function (a, b) { e[e.id] = decodeURIComponent(b); return "{cke_protected_" + e.id++ + "}" }) }); return a = a.replace(/<(title|iframe|textarea)([^>]*)>([\s\S]*?)<\/\1>/g, function (a, c, d, e) { return "\x3c" + c + d + "\x3e" + p(w(e), b) + "\x3c/" + c + "\x3e" })
            } var u; CKEDITOR.htmlDataProcessor = function (b) {
                var c,
                d, e = this; this.editor = b; this.dataFilter = c = new CKEDITOR.htmlParser.filter; this.htmlFilter = d = new CKEDITOR.htmlParser.filter; this.writer = new CKEDITOR.htmlParser.basicWriter; c.addRules(x); c.addRules(D, { applyToAll: !0 }); c.addRules(a(b, "data"), { applyToAll: !0 }); d.addRules(B); d.addRules(F, { applyToAll: !0 }); d.addRules(a(b, "html"), { applyToAll: !0 }); b.on("toHtml", function (a) {
                    a = a.data; var c = a.dataValue, d, c = u(c), c = t(c, b), c = g(c, O), c = k(c), c = g(c, C), c = c.replace(N, "$1cke:$2"), c = c.replace(H, "\x3ccke:$1$2\x3e\x3c/cke:$1\x3e"),
                        c = c.replace(/(<pre\b[^>]*>)(\r\n|\n)/g, "$1$2$2"), c = c.replace(/([^a-z0-9<\-])(on\w{3,})(?!>)/gi, "$1data-cke-" + CKEDITOR.rnd + "-$2"); d = a.context || b.editable().getName(); var e; CKEDITOR.env.ie && 9 > CKEDITOR.env.version && "pre" == d && (d = "div", c = "\x3cpre\x3e" + c + "\x3c/pre\x3e", e = 1); d = b.document.createElement(d); d.setHtml("a" + c); c = d.getHtml().substr(1); c = c.replace(new RegExp("data-cke-" + CKEDITOR.rnd + "-", "ig"), ""); e && (c = c.replace(/^<pre>|<\/pre>$/gi, "")); c = c.replace(R, "$1$2"); c = n(c); c = w(c); d = !1 === a.fixForBody ? !1 :
                            f(a.enterMode, b.config.autoParagraph); c = CKEDITOR.htmlParser.fragment.fromHtml(c, a.context, d); d && (e = c, !e.children.length && CKEDITOR.dtd[e.name][d] && (d = new CKEDITOR.htmlParser.element(d), e.add(d))); a.dataValue = c
                }, null, null, 5); b.on("toHtml", function (a) { a.data.filter.applyTo(a.data.dataValue, !0, a.data.dontFilter, a.data.enterMode) && b.fire("dataFiltered") }, null, null, 6); b.on("toHtml", function (a) { a.data.dataValue.filterChildren(e.dataFilter, !0) }, null, null, 10); b.on("toHtml", function (a) {
                    a = a.data; var b = a.dataValue,
                        c = new CKEDITOR.htmlParser.basicWriter; b.writeChildrenHtml(c); b = c.getHtml(!0); a.dataValue = r(b)
                }, null, null, 15); b.on("toDataFormat", function (a) { var c = a.data.dataValue; a.data.enterMode != CKEDITOR.ENTER_BR && (c = c.replace(/^<br *\/?>/i, "")); a.data.dataValue = CKEDITOR.htmlParser.fragment.fromHtml(c, a.data.context, f(a.data.enterMode, b.config.autoParagraph)) }, null, null, 5); b.on("toDataFormat", function (a) { a.data.dataValue.filterChildren(e.htmlFilter, !0) }, null, null, 10); b.on("toDataFormat", function (a) {
                    a.data.filter.applyTo(a.data.dataValue,
                        !1, !0)
                }, null, null, 11); b.on("toDataFormat", function (a) { var c = a.data.dataValue, d = e.writer; d.reset(); c.writeChildrenHtml(d); c = d.getHtml(!0); c = w(c); c = p(c, b); a.data.dataValue = c }, null, null, 15)
            }; CKEDITOR.htmlDataProcessor.prototype = {
                toHtml: function (a, b, c, d) {
                    var e = this.editor, g, k, l, h; b && "object" == typeof b ? (g = b.context, c = b.fixForBody, d = b.dontFilter, k = b.filter, l = b.enterMode, h = b.protectedWhitespaces) : g = b; g || null === g || (g = e.editable().getName()); return e.fire("toHtml", {
                        dataValue: a, context: g, fixForBody: c, dontFilter: d,
                        filter: k || e.filter, enterMode: l || e.enterMode, protectedWhitespaces: h
                    }).dataValue
                }, toDataFormat: function (a, b) { var c, d, e; b && (c = b.context, d = b.filter, e = b.enterMode); c || null === c || (c = this.editor.editable().getName()); return this.editor.fire("toDataFormat", { dataValue: a, filter: d || this.editor.filter, context: c, enterMode: e || this.editor.enterMode }).dataValue }, protectSource: function (a) { return t(a, this.editor) }, unprotectSource: function (a) { return p(a, this.editor) }
            }; var y = /(?:&nbsp;|\xa0)$/, q = "{cke_protected}", A = CKEDITOR.dtd,
                v = "caption colgroup col thead tfoot tbody".split(" "), z = CKEDITOR.tools.extend({}, A.$blockLimit, A.$block), x = { elements: { input: m, textarea: m } }, D = { attributeNames: [[/^on/, "data-cke-pa-on"], [/^srcdoc/, "data-cke-pa-srcdoc"], [/^data-cke-expando$/, ""]], elements: { iframe: function (a) { if (a.attributes && a.attributes.src) { var b = a.attributes.src.toLowerCase().replace(/[^a-z]/gi, ""); if (0 === b.indexOf("javascript") || 0 === b.indexOf("data")) a.attributes["data-cke-pa-src"] = a.attributes.src, delete a.attributes.src } } } }, B = {
                    elements: {
                        embed: function (a) {
                            var b =
                                a.parent; if (b && "object" == b.name) { var c = b.attributes.width, b = b.attributes.height; c && (a.attributes.width = c); b && (a.attributes.height = b) }
                        }, a: function (a) { var b = a.attributes; if (!(a.children.length || b.name || b.id || a.attributes["data-cke-saved-name"])) return !1 }
                    }
                }, F = {
                    elementNames: [[/^cke:/, ""], [/^\?xml:namespace$/, ""]], attributeNames: [[/^data-cke-(saved|pa)-/, ""], [/^data-cke-.*/, ""], ["hidefocus", ""]], elements: {
                        $: function (a) {
                            var b = a.attributes; if (b) {
                                if (b["data-cke-temp"]) return !1; for (var c = ["name", "href", "src"],
                                    d, e = 0; e < c.length; e++)d = "data-cke-saved-" + c[e], d in b && delete b[c[e]]
                            } return a
                        }, table: function (a) { a.children.slice(0).sort(function (a, b) { var c, d; a.type == CKEDITOR.NODE_ELEMENT && b.type == a.type && (c = CKEDITOR.tools.indexOf(v, a.name), d = CKEDITOR.tools.indexOf(v, b.name)); -1 < c && -1 < d && c != d || (c = a.parent ? a.getIndex() : -1, d = b.parent ? b.getIndex() : -1); return c > d ? 1 : -1 }) }, param: function (a) { a.children = []; a.isEmpty = !0; return a }, span: function (a) { "Apple-style-span" == a.attributes["class"] && delete a.name }, html: function (a) {
                            delete a.attributes.contenteditable;
                            delete a.attributes["class"]
                        }, body: function (a) { delete a.attributes.spellcheck; delete a.attributes.contenteditable }, style: function (a) { var b = a.children[0]; b && b.value && (b.value = CKEDITOR.tools.trim(b.value)); a.attributes.type || (a.attributes.type = "text/css") }, title: function (a) { var b = a.children[0]; !b && h(a, b = new CKEDITOR.htmlParser.text); b.value = a.attributes["data-cke-title"] || "" }, input: c, textarea: c
                    }, attributes: { "class": function (a) { return CKEDITOR.tools.ltrim(a.replace(/(?:^|\s+)cke_[^\s]*/g, "")) || !1 } }
                };
            CKEDITOR.env.ie && (F.attributes.style = function (a) { return a.replace(/(^|;)([^\:]+)/g, function (a) { return a.toLowerCase() }) }); var E = /<(a|area|img|input|source)\b([^>]*)>/gi, L = /([\w-:]+)\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|(?:[^ "'>]+))/gi, M = /^(href|src|name)$/i, C = /(?:<style(?=[ >])[^>]*>[\s\S]*?<\/style>)|(?:<(:?link|meta|base)[^>]*>)/gi, O = /(<textarea(?=[ >])[^>]*>)([\s\S]*?)(?:<\/textarea>)/gi, J = /<cke:encoded>([^<]*)<\/cke:encoded>/gi, N = /(<\/?)((?:object|embed|param|html|body|head|title)([\s][^>]*)?>)/gi,
                R = /(<\/?)cke:((?:html|body|head|title)[^>]*>)/gi, H = /<cke:(param|embed)([^>]*?)\/?>(?!\s*<\/cke:\1)/gi; u = function () {
                    function a(c) { return CKEDITOR.tools.array.reduce(c.split(""), function (a, c) { var d = c.toLowerCase(), e = c.toUpperCase(), g = b(d); d !== e && (g += "|" + b(e)); return a + ("(" + g + ")") }, "") } function b(a) { var c; c = a.charCodeAt(0); var d = c.toString(16); c = { htmlCode: "\x26#" + c + ";?", hex: "\x26#x0*" + d + ";?", entity: { "\x3c": "\x26lt;", "\x3e": "\x26gt;", ":": "\x26colon;" }[a] }; for (var e in c) c[e] && (a += "|" + c[e]); return a } var c =
                        new RegExp("(" + a("\x3ccke:encoded\x3e") + "(.*?)" + a("\x3c/cke:encoded\x3e") + ")|(" + a("\x3c") + a("/") + "?" + a("cke:encoded\x3e") + ")", "gi"), d = new RegExp("((" + a("{cke_protected") + ")(_[0-9]*)?" + a("}") + ")", "gi"); return function (a) { return a.replace(c, "").replace(d, "") }
                }()
        }(), "use strict", CKEDITOR.htmlParser.element = function (a, f) {
            this.name = a; this.attributes = f || {}; this.children = []; var e = a || "", b = e.match(/^cke:(.*)/); b && (e = b[1]); e = !!(CKEDITOR.dtd.$nonBodyContent[e] || CKEDITOR.dtd.$block[e] || CKEDITOR.dtd.$listItem[e] ||
                CKEDITOR.dtd.$tableContent[e] || CKEDITOR.dtd.$nonEditable[e] || "br" == e); this.isEmpty = !!CKEDITOR.dtd.$empty[a]; this.isUnknown = !CKEDITOR.dtd[a]; this._ = { isBlockLike: e, hasInlineStarted: this.isEmpty || !e }
        }, CKEDITOR.htmlParser.cssStyle = function (a) {
            var f = {}; ((a instanceof CKEDITOR.htmlParser.element ? a.attributes.style : a) || "").replace(/&quot;/g, '"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g, function (a, b, d) { "font-family" == b && (d = d.replace(/["']/g, "")); f[b.toLowerCase()] = d }); return {
                rules: f, populate: function (a) {
                    var b =
                        this.toString(); b && (a instanceof CKEDITOR.dom.element ? a.setAttribute("style", b) : a instanceof CKEDITOR.htmlParser.element ? a.attributes.style = b : a.style = b)
                }, toString: function () { var a = [], b; for (b in f) f[b] && a.push(b, ":", f[b], ";"); return a.join("") }
            }
        }, function () {
            function a(a) { return function (d) { return d.type == CKEDITOR.NODE_ELEMENT && ("string" == typeof a ? d.name == a : d.name in a) } } var f = function (a, d) { a = a[0]; d = d[0]; return a < d ? -1 : a > d ? 1 : 0 }, e = CKEDITOR.htmlParser.fragment.prototype; CKEDITOR.htmlParser.element.prototype =
                CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node, {
                    type: CKEDITOR.NODE_ELEMENT, add: e.add, clone: function () { return new CKEDITOR.htmlParser.element(this.name, this.attributes) }, filter: function (a, d) {
                        var e = this, h, f; d = e.getFilterContext(d); if (!e.parent) a.onRoot(d, e); for (; ;) {
                            h = e.name; if (!(f = a.onElementName(d, h))) return this.remove(), !1; e.name = f; if (!(e = a.onElement(d, e))) return this.remove(), !1; if (e !== this) return this.replaceWith(e), !1; if (e.name == h) break; if (e.type != CKEDITOR.NODE_ELEMENT) return this.replaceWith(e),
                                !1; if (!e.name) return this.replaceWithChildren(), !1
                        } h = e.attributes; var c, k; for (c in h) { for (f = h[c]; ;)if (k = a.onAttributeName(d, c)) if (k != c) delete h[c], c = k; else break; else { delete h[c]; break } k && (!1 === (f = a.onAttribute(d, e, k, f)) ? delete h[k] : h[k] = f) } e.isEmpty || this.filterChildren(a, !1, d); return !0
                    }, filterChildren: e.filterChildren, writeHtml: function (a, d) {
                        d && this.filter(d); var e = this.name, h = [], m = this.attributes, c, k; a.openTag(e, m); for (c in m) h.push([c, m[c]]); a.sortAttributes && h.sort(f); c = 0; for (k = h.length; c < k; c++)m =
                            h[c], a.attribute(m[0], m[1]); a.openTagClose(e, this.isEmpty); this.writeChildrenHtml(a); this.isEmpty || a.closeTag(e)
                    }, writeChildrenHtml: e.writeChildrenHtml, replaceWithChildren: function () { for (var a = this.children, d = a.length; d;)a[--d].insertAfter(this); this.remove() }, forEach: e.forEach, getFirst: function (b) { if (!b) return this.children.length ? this.children[0] : null; "function" != typeof b && (b = a(b)); for (var d = 0, e = this.children.length; d < e; ++d)if (b(this.children[d])) return this.children[d]; return null }, getHtml: function () {
                        var a =
                            new CKEDITOR.htmlParser.basicWriter; this.writeChildrenHtml(a); return a.getHtml()
                    }, setHtml: function (a) { a = this.children = CKEDITOR.htmlParser.fragment.fromHtml(a).children; for (var d = 0, e = a.length; d < e; ++d)a[d].parent = this }, getOuterHtml: function () { var a = new CKEDITOR.htmlParser.basicWriter; this.writeHtml(a); return a.getHtml() }, split: function (a) {
                        for (var d = this.children.splice(a, this.children.length - a), e = this.clone(), h = 0; h < d.length; ++h)d[h].parent = e; e.children = d; d[0] && (d[0].previous = null); 0 < a && (this.children[a -
                            1].next = null); this.parent.add(e, this.getIndex() + 1); return e
                    }, find: function (a, d) { void 0 === d && (d = !1); var e = [], h; for (h = 0; h < this.children.length; h++) { var f = this.children[h]; "function" == typeof a && a(f) ? e.push(f) : "string" == typeof a && f.name === a && e.push(f); d && f.find && (e = e.concat(f.find(a, d))) } return e }, findOne: function (a, d) {
                        var e = null, h = CKEDITOR.tools.array.find(this.children, function (h) { var c = "function" === typeof a ? a(h) : h.name === a; if (c || !d) return c; h.children && h.findOne && (e = h.findOne(a, !0)); return !!e }); return e ||
                            h || null
                    }, addClass: function (a) { if (!this.hasClass(a)) { var d = this.attributes["class"] || ""; this.attributes["class"] = d + (d ? " " : "") + a } }, removeClass: function (a) { var d = this.attributes["class"]; d && ((d = CKEDITOR.tools.trim(d.replace(new RegExp("(?:\\s+|^)" + a + "(?:\\s+|$)"), " "))) ? this.attributes["class"] = d : delete this.attributes["class"]) }, hasClass: function (a) { var d = this.attributes["class"]; return d ? (new RegExp("(?:^|\\s)" + a + "(?\x3d\\s|$)")).test(d) : !1 }, getFilterContext: function (a) {
                        var d = []; a || (a = {
                            nonEditable: !1,
                            nestedEditable: !1
                        }); a.nonEditable || "false" != this.attributes.contenteditable ? a.nonEditable && !a.nestedEditable && "true" == this.attributes.contenteditable && d.push("nestedEditable", !0) : d.push("nonEditable", !0); if (d.length) { a = CKEDITOR.tools.copy(a); for (var e = 0; e < d.length; e += 2)a[d[e]] = d[e + 1] } return a
                    }
                }, !0)
        }(), function () {
            var a = /{([^}]+)}/g; CKEDITOR.template = function (a) { this.source = "function" === typeof a ? a : String(a) }; CKEDITOR.template.prototype.output = function (f, e) {
                var b = ("function" === typeof this.source ? this.source(f) :
                    this.source).replace(a, function (a, b) { return void 0 !== f[b] ? f[b] : a }); return e ? e.push(b) : b
            }
        }(), delete CKEDITOR.loadFullCore, CKEDITOR.instances = {}, CKEDITOR.document = new CKEDITOR.dom.document(document), CKEDITOR.add = function (a) {
            function f() { CKEDITOR.currentInstance == a && (CKEDITOR.currentInstance = null, CKEDITOR.fire("currentInstance")) } CKEDITOR.instances[a.name] = a; a.on("focus", function () { CKEDITOR.currentInstance != a && (CKEDITOR.currentInstance = a, CKEDITOR.fire("currentInstance")) }); a.on("blur", f); a.on("destroy",
                f); CKEDITOR.fire("instance", null, a)
        }, CKEDITOR.remove = function (a) { delete CKEDITOR.instances[a.name] }, function () { var a = {}; CKEDITOR.addTemplate = function (f, e) { var b = a[f]; if (b) return b; b = { name: f, source: e }; CKEDITOR.fire("template", b); return a[f] = new CKEDITOR.template(b.source) }; CKEDITOR.getTemplate = function (f) { return a[f] } }(), function () { var a = []; CKEDITOR.addCss = function (f) { a.push(f) }; CKEDITOR.getCss = function () { return a.join("\n") } }(), CKEDITOR.on("instanceDestroyed", function () {
            CKEDITOR.tools.isEmpty(this.instances) &&
            CKEDITOR.fire("reset")
        }), CKEDITOR.TRISTATE_ON = 1, CKEDITOR.TRISTATE_OFF = 2, CKEDITOR.TRISTATE_DISABLED = 0, function () {
            CKEDITOR.inline = function (a, f) {
                a = CKEDITOR.editor._getEditorElement(a); if (!a) return null; var e = new CKEDITOR.editor(f, a, CKEDITOR.ELEMENT_MODE_INLINE), b = a.is("textarea") ? a : null; b ? (e.setData(b.getValue(), null, !0), a = CKEDITOR.dom.element.createFromHtml('\x3cdiv contenteditable\x3d"' + !!e.readOnly + '" class\x3d"cke_textarea_inline"\x3e' + b.getValue() + "\x3c/div\x3e", CKEDITOR.document), a.insertAfter(b),
                    b.hide(), b.$.form && e._attachToForm()) : (f && "undefined" !== typeof f.readOnly && !f.readOnly && a.setAttribute("contenteditable", "true"), e.setData(a.getHtml(), null, !0)); e.on("loaded", function () { e.fire("uiReady"); e.editable(a); e.container = a; e.ui.contentsElement = a; e.setData(e.getData(1)); e.resetDirty(); e.fire("contentDom"); e.mode = "wysiwyg"; e.fire("mode"); e.status = "ready"; e.fireOnce("instanceReady"); CKEDITOR.fire("instanceReady", null, e) }, null, null, 1E4); e.on("destroy", function () {
                        var a = e.container; b && a && (a.clearCustomData(),
                            a.remove()); b && b.show(); e.element.clearCustomData(); delete e.element
                    }); return e
            }; CKEDITOR.inlineAll = function () { var a, f, e; for (e in CKEDITOR.dtd.$editable) for (var b = CKEDITOR.document.getElementsByTag(e), d = 0, l = b.count(); d < l; d++)a = b.getItem(d), "true" != a.getAttribute("contenteditable") || a.getEditor() || (f = { element: a, config: {} }, !1 !== CKEDITOR.fire("inline", f) && CKEDITOR.inline(a, f.config)) }; CKEDITOR.domReady(function () { !CKEDITOR.disableAutoInline && CKEDITOR.inlineAll() })
        }(), CKEDITOR.replaceClass = "ckeditor",
        function () {
            function a(a, d, l, h) {
                a = CKEDITOR.editor._getEditorElement(a); if (!a) return null; var m = new CKEDITOR.editor(d, a, h); h == CKEDITOR.ELEMENT_MODE_REPLACE && (a.setStyle("visibility", "hidden"), m._.required = a.hasAttribute("required"), a.removeAttribute("required")); l && m.setData(l, null, !0); m.on("loaded", function () {
                    m.isDestroyed() || m.isDetached() || (e(m), h == CKEDITOR.ELEMENT_MODE_REPLACE && m.config.autoUpdateElement && a.$.form && m._attachToForm(), m.setMode(m.config.startupMode, function () {
                        m.resetDirty(); m.status =
                            "ready"; m.fireOnce("instanceReady"); CKEDITOR.fire("instanceReady", null, m)
                    }))
                }); m.on("destroy", f); return m
            } function f() { var a = this.container, d = this.element; a && (a.clearCustomData(), a.remove()); d && (d.clearCustomData(), this.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE && (d.show(), this._.required && d.setAttribute("required", "required")), delete this.element) } function e(a) {
                var d = a.name, e = a.element, h = a.elementMode, f = a.fire("uiSpace", { space: "top", html: "" }).html, c = a.fire("uiSpace", { space: "bottom", html: "" }).html,
                k = new CKEDITOR.template('\x3c{outerEl} id\x3d"cke_{name}" class\x3d"{id} cke cke_reset cke_chrome cke_editor_{name} cke_{langDir} ' + CKEDITOR.env.cssClass + '"  dir\x3d"{langDir}" lang\x3d"{langCode}" role\x3d"application"' + (a.title ? ' aria-labelledby\x3d"cke_{name}_arialbl"' : "") + "\x3e" + (a.title ? '\x3cspan id\x3d"cke_{name}_arialbl" class\x3d"cke_voice_label"\x3e{voiceLabel}\x3c/span\x3e' : "") + '\x3c{outerEl} class\x3d"cke_inner cke_reset" role\x3d"presentation"\x3e{topHtml}\x3c{outerEl} id\x3d"{contentId}" class\x3d"cke_contents cke_reset" role\x3d"presentation"\x3e\x3c/{outerEl}\x3e{bottomHtml}\x3c/{outerEl}\x3e\x3c/{outerEl}\x3e'),
                d = CKEDITOR.dom.element.createFromHtml(k.output({ id: a.id, name: d, langDir: a.lang.dir, langCode: a.langCode, voiceLabel: a.title, topHtml: f ? '\x3cspan id\x3d"' + a.ui.spaceId("top") + '" class\x3d"cke_top cke_reset_all" role\x3d"presentation" style\x3d"height:auto"\x3e' + f + "\x3c/span\x3e" : "", contentId: a.ui.spaceId("contents"), bottomHtml: c ? '\x3cspan id\x3d"' + a.ui.spaceId("bottom") + '" class\x3d"cke_bottom cke_reset_all" role\x3d"presentation"\x3e' + c + "\x3c/span\x3e" : "", outerEl: CKEDITOR.env.ie ? "span" : "div" })); h == CKEDITOR.ELEMENT_MODE_REPLACE ?
                    (e.hide(), d.insertAfter(e)) : e.append(d); a.container = d; a.ui.contentsElement = a.ui.space("contents"); f && a.ui.space("top").unselectable(); c && a.ui.space("bottom").unselectable(); e = a.config.width; h = a.config.height; e && d.setStyle("width", CKEDITOR.tools.cssLength(e)); h && a.ui.space("contents").setStyle("height", CKEDITOR.tools.cssLength(h)); d.disableContextMenu(); CKEDITOR.env.webkit && d.on("focus", function () { a.focus() }); a.fireOnce("uiReady")
            } CKEDITOR.replace = function (b, d) { return a(b, d, null, CKEDITOR.ELEMENT_MODE_REPLACE) };
            CKEDITOR.appendTo = function (b, d, e) { return a(b, d, e, CKEDITOR.ELEMENT_MODE_APPENDTO) }; CKEDITOR.replaceAll = function () { for (var a = document.getElementsByTagName("textarea"), d = 0; d < a.length; d++) { var e = null, h = a[d]; if (h.name || h.id) { if ("string" == typeof arguments[0]) { if (!(new RegExp("(?:^|\\s)" + arguments[0] + "(?:$|\\s)")).test(h.className)) continue } else if ("function" == typeof arguments[0] && (e = {}, !1 === arguments[0](h, e))) continue; this.replace(h, e) } } }; CKEDITOR.editor.prototype.addMode = function (a, d) {
                (this._.modes || (this._.modes =
                    {}))[a] = d
            }; CKEDITOR.editor.prototype.setMode = function (a, d) {
                var e = this, h = this._.modes; if (a != e.mode && h && h[a]) {
                    e.fire("beforeSetMode", a); if (e.mode) { var f = e.checkDirty(), h = e._.previousModeData, c, k = 0; e.fire("beforeModeUnload"); e.editable(0); e._.previousMode = e.mode; e._.previousModeData = c = e.getData(1); "source" == e.mode && h == c && (e.fire("lockSnapshot", { forceUpdate: !0 }), k = 1); e.ui.space("contents").setHtml(""); e.mode = "" } else e._.previousModeData = e.getData(1); this._.modes[a](function () {
                        e.mode = a; void 0 !== f && !f &&
                            e.resetDirty(); k ? e.fire("unlockSnapshot") : "wysiwyg" == a && e.fire("saveSnapshot"); setTimeout(function () { e.isDestroyed() || e.isDetached() || (e.fire("mode"), d && d.call(e)) }, 0)
                    })
                }
            }; CKEDITOR.editor.prototype.resize = function (a, d, e, h) {
                var f = this.container, c = this.ui.space("contents"), k = CKEDITOR.env.webkit && this.document && this.document.getWindow().$.frameElement; h = h ? this.container.getFirst(function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasClass("cke_inner") }) : f; if (a || 0 === a) a = CKEDITOR.tools.convertToPx(CKEDITOR.tools.cssLength(a));
                h.setSize("width", a, !0); k && (k.style.width = "1%"); d = CKEDITOR.tools.convertToPx(CKEDITOR.tools.cssLength(d)); var g = (h.$.offsetHeight || 0) - (c.$.clientHeight || 0), f = Math.max(d - (e ? 0 : g), 0); d = e ? d + g : d; c.setStyle("height", CKEDITOR.tools.cssLength(f)); k && (k.style.width = "100%"); this.fire("resize", { outerHeight: d, contentsHeight: f, outerWidth: a || h.getSize("width") })
            }; CKEDITOR.editor.prototype.getResizable = function (a) { return a ? this.ui.space("contents") : this.container }; CKEDITOR.domReady(function () {
                CKEDITOR.replaceClass &&
                CKEDITOR.replaceAll(CKEDITOR.replaceClass)
            })
        }(), CKEDITOR.config.startupMode = "wysiwyg", function () {
            function a(a) {
                var c = a.editor, d = a.data.path, e = d.blockLimit, g = a.data.selection, k = g.getRanges()[0], l; if (CKEDITOR.env.gecko || CKEDITOR.env.ie && CKEDITOR.env.needsBrFiller) if (g = f(g, d)) g.appendBogus(), l = CKEDITOR.env.ie && !CKEDITOR.env.edge || CKEDITOR.env.edge && c._.previousActive; h(c, d.block, e) && k.collapsed && !k.getCommonAncestor().isReadOnly() && (d = k.clone(), d.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS), e = new CKEDITOR.dom.walker(d),
                    e.guard = function (a) { return !b(a) || a.type == CKEDITOR.NODE_COMMENT || a.isReadOnly() }, !e.checkForward() || d.checkStartOfBlock() && d.checkEndOfBlock()) && (c = k.fixBlock(!0, c.activeEnterMode == CKEDITOR.ENTER_DIV ? "div" : "p"), CKEDITOR.env.needsBrFiller || (c = c.getFirst(b)) && c.type == CKEDITOR.NODE_TEXT && CKEDITOR.tools.trim(c.getText()).match(/^(?:&nbsp;|\xa0)$/) && c.remove(), l = 1, a.cancel()); l && k.select()
            } function f(a, c) {
                if (a.isFake) return 0; var d = c.block || c.blockLimit, e = d && d.getLast(b); if (!(!d || !d.isBlockBoundary() ||
                    e && e.type == CKEDITOR.NODE_ELEMENT && e.isBlockBoundary() || d.is("pre") || d.getBogus())) return d
            } function e(a) { var c = a.data.getTarget(); c.is("input") && (c = c.getAttribute("type"), "submit" != c && "reset" != c || a.data.preventDefault()) } function b(a) { return n(a) && r(a) } function d(a, c) { return function (b) { var d = b.data.$.toElement || b.data.$.fromElement || b.data.$.relatedTarget; (d = d && d.nodeType == CKEDITOR.NODE_ELEMENT ? new CKEDITOR.dom.element(d) : null) && (c.equals(d) || c.contains(d)) || a.call(this, b) } } function l(a) {
                function c(a) {
                    return function (c,
                        e) { e && c.type == CKEDITOR.NODE_ELEMENT && c.is(g) && (d = c); if (!(e || !b(c) || a && p(c))) return !1 }
                } var d, e = a.getRanges()[0]; a = a.root; var g = { table: 1, ul: 1, ol: 1, dl: 1 }; if (e.startPath().contains(g)) { var k = e.clone(); k.collapse(1); k.setStartAt(a, CKEDITOR.POSITION_AFTER_START); a = new CKEDITOR.dom.walker(k); a.guard = c(); a.checkBackward(); if (d) return k = e.clone(), k.collapse(), k.setEndAt(d, CKEDITOR.POSITION_AFTER_END), a = new CKEDITOR.dom.walker(k), a.guard = c(!0), d = !1, a.checkForward(), d } return null
            } function h(a, c, b) {
                return !1 !==
                    a.config.autoParagraph && a.activeEnterMode != CKEDITOR.ENTER_BR && (a.editable().equals(b) && !c || c && "true" == c.getAttribute("contenteditable"))
            } function m(a) { return a.activeEnterMode != CKEDITOR.ENTER_BR && !1 !== a.config.autoParagraph ? a.activeEnterMode == CKEDITOR.ENTER_DIV ? "div" : "p" : !1 } function c(a) { a && a.isEmptyInlineRemoveable() && a.remove() } function k(a) { var c = a.editor; c.getSelection().scrollIntoView(); setTimeout(function () { c.fire("saveSnapshot") }, 0) } function g(a, c, b) {
                var d = a.getCommonAncestor(c); for (c = a = b ?
                    c : a; (a = a.getParent()) && !d.equals(a) && 1 == a.getChildCount();)c = a; c.remove()
            } var n, r, w, p, t, u, y, q, A, v; CKEDITOR.editable = CKEDITOR.tools.createClass({
                base: CKEDITOR.dom.element, $: function (a, c) { this.base(c.$ || c); this.editor = a; this.status = "unloaded"; this.hasFocus = !1; this.setup() }, proto: {
                    focus: function () {
                        var a; if (CKEDITOR.env.webkit && !this.hasFocus && (a = this.editor._.previousActive || this.getDocument().getActive(), this.contains(a))) { a.focus(); return } CKEDITOR.env.edge && 14 < CKEDITOR.env.version && !this.hasFocus &&
                            this.getDocument().equals(CKEDITOR.document) && (this.editor._.previousScrollTop = this.$.scrollTop); try { if (!CKEDITOR.env.ie || CKEDITOR.env.edge && 14 < CKEDITOR.env.version || !this.getDocument().equals(CKEDITOR.document)) if (CKEDITOR.env.chrome) { var c = this.$.scrollTop; this.$.focus(); this.$.scrollTop = c } else this.$.focus(); else this.$.setActive() } catch (b) { if (!CKEDITOR.env.ie) throw b; } CKEDITOR.env.safari && !this.isInline() && (a = CKEDITOR.document.getActive(), a.equals(this.getWindow().getFrame()) || this.getWindow().focus())
                    },
                    on: function (a, c) { var b = Array.prototype.slice.call(arguments, 0); CKEDITOR.env.ie && /^focus|blur$/.exec(a) && (a = "focus" == a ? "focusin" : "focusout", c = d(c, this), b[0] = a, b[1] = c); return CKEDITOR.dom.element.prototype.on.apply(this, b) }, attachListener: function (a) { !this._.listeners && (this._.listeners = []); var c = Array.prototype.slice.call(arguments, 1), c = a.on.apply(a, c); this._.listeners.push(c); return c }, clearListeners: function () { var a = this._.listeners; try { for (; a.length;)a.pop().removeListener() } catch (c) { } }, restoreAttrs: function () {
                        var a =
                            this._.attrChanges, c, b; for (b in a) a.hasOwnProperty(b) && (c = a[b], null !== c ? this.setAttribute(b, c) : this.removeAttribute(b))
                    }, attachClass: function (a) { var c = this.getCustomData("classes"); this.hasClass(a) || (!c && (c = []), c.push(a), this.setCustomData("classes", c), this.addClass(a)) }, changeAttr: function (a, c) { var b = this.getAttribute(a); c !== b && (!this._.attrChanges && (this._.attrChanges = {}), a in this._.attrChanges || (this._.attrChanges[a] = b), this.setAttribute(a, c)) }, insertText: function (a) {
                        this.editor.focus(); this.insertHtml(this.transformPlainTextToHtml(a),
                            "text")
                    }, transformPlainTextToHtml: function (a) { var c = this.editor.getSelection().getStartElement().hasAscendant("pre", !0) ? CKEDITOR.ENTER_BR : this.editor.activeEnterMode; return CKEDITOR.tools.transformPlainTextToHtml(a, c) }, insertHtml: function (a, c, b) { var d = this.editor; d.focus(); d.fire("saveSnapshot"); b || (b = d.getSelection().getRanges()[0]); u(this, c || "html", a, b); b.select(); k(this); this.editor.fire("afterInsertHtml", {}) }, insertHtmlIntoRange: function (a, c, b) {
                        u(this, b || "html", a, c); this.editor.fire("afterInsertHtml",
                            { intoRange: c })
                    }, insertElement: function (a, c) {
                        var d = this.editor; d.focus(); d.fire("saveSnapshot"); var e = d.activeEnterMode, d = d.getSelection(), g = a.getName(), g = CKEDITOR.dtd.$block[g]; c || (c = d.getRanges()[0]); this.insertElementIntoRange(a, c) && (c.moveToPosition(a, CKEDITOR.POSITION_AFTER_END), g && ((g = a.getNext(function (a) { return b(a) && !p(a) })) && g.type == CKEDITOR.NODE_ELEMENT && g.is(CKEDITOR.dtd.$block) ? g.getDtd()["#"] ? c.moveToElementEditStart(g) : c.moveToElementEditEnd(a) : g || e == CKEDITOR.ENTER_BR || (g = c.fixBlock(!0,
                            e == CKEDITOR.ENTER_DIV ? "div" : "p"), c.moveToElementEditStart(g)))); d.selectRanges([c]); k(this)
                    }, insertElementIntoSelection: function (a) { this.insertElement(a) }, insertElementIntoRange: function (a, b) {
                        var d = this.editor, e = d.config.enterMode, g = a.getName(), k = CKEDITOR.dtd.$block[g]; if (b.checkReadOnly()) return !1; b.deleteContents(1); b.startContainer.type == CKEDITOR.NODE_ELEMENT && (b.startContainer.is({ tr: 1, table: 1, tbody: 1, thead: 1, tfoot: 1 }) ? y(b) : b.startContainer.is(CKEDITOR.dtd.$list) && q(b)); var h, f; if (k) for (; (h = b.getCommonAncestor(0,
                            1)) && (f = CKEDITOR.dtd[h.getName()]) && (!f || !f[g]);)if (h.getName() in CKEDITOR.dtd.span) { var k = b.splitElement(h), l = b.createBookmark(); c(h); c(k); b.moveToBookmark(l) } else b.checkStartOfBlock() && b.checkEndOfBlock() ? (b.setStartBefore(h), b.collapse(!0), h.remove()) : b.splitBlock(e == CKEDITOR.ENTER_DIV ? "div" : "p", d.editable()); b.insertNode(a); return !0
                    }, setData: function (a, c) { c || (a = this.editor.dataProcessor.toHtml(a)); this.setHtml(a); this.fixInitialSelection(); "unloaded" == this.status && (this.status = "ready"); this.editor.fire("dataReady") },
                    getData: function (a) { var c = this.getHtml(); a || (c = this.editor.dataProcessor.toDataFormat(c)); return c }, setReadOnly: function (a) { this.setAttribute("contenteditable", !a) }, detach: function () { this.status = "detached"; this.editor.setData(this.editor.getData(), { internal: !0 }); this.clearListeners(); try { this._.cleanCustomData() } catch (a) { if (!CKEDITOR.env.ie || -2146828218 !== a.number) throw a; } this.editor.fire("contentDomUnload"); delete this.editor.document; delete this.editor.window; delete this.editor }, isInline: function () { return this.getDocument().equals(CKEDITOR.document) },
                    fixInitialSelection: function () {
                        function a() { var c = b.getDocument().$, d = c.getSelection(), e; a: if (d.anchorNode && d.anchorNode == b.$) e = !0; else { if (CKEDITOR.env.webkit && (e = b.getDocument().getActive()) && e.equals(b) && !d.anchorNode) { e = !0; break a } e = void 0 } e && (e = new CKEDITOR.dom.range(b), e.moveToElementEditStart(b), c = c.createRange(), c.setStart(e.startContainer.$, e.startOffset), c.collapse(!0), d.removeAllRanges(), d.addRange(c)) } function c() {
                            var a = b.getDocument().$, d = a.selection, e = b.getDocument().getActive(); "None" ==
                                d.type && e.equals(b) && (d = new CKEDITOR.dom.range(b), a = a.body.createTextRange(), d.moveToElementEditStart(b), d = d.startContainer, d.type != CKEDITOR.NODE_ELEMENT && (d = d.getParent()), a.moveToElementText(d.$), a.collapse(!0), a.select())
                        } var b = this; if (CKEDITOR.env.ie && (9 > CKEDITOR.env.version || CKEDITOR.env.quirks)) this.hasFocus && (this.focus(), c()); else if (this.hasFocus) this.focus(), a(); else this.once("focus", function () { a() }, null, null, -999)
                    }, getHtmlFromRange: function (a) {
                        if (a.collapsed) return new CKEDITOR.dom.documentFragment(a.document);
                        a = { doc: this.getDocument(), range: a.clone() }; A.eol.detect(a, this); A.bogus.exclude(a); A.cell.shrink(a); a.fragment = a.range.cloneContents(); A.tree.rebuild(a, this); A.eol.fix(a, this); return new CKEDITOR.dom.documentFragment(a.fragment.$)
                    }, extractHtmlFromRange: function (a, c) {
                        var b = v, d = { range: a, doc: a.document }, e = this.getHtmlFromRange(a); if (a.collapsed) return a.optimize(), e; a.enlarge(CKEDITOR.ENLARGE_INLINE, 1); b.table.detectPurge(d); d.bookmark = a.createBookmark(); delete d.range; var g = this.editor.createRange();
                        g.moveToPosition(d.bookmark.startNode, CKEDITOR.POSITION_BEFORE_START); d.targetBookmark = g.createBookmark(); b.list.detectMerge(d, this); b.table.detectRanges(d, this); b.block.detectMerge(d, this); d.tableContentsRanges ? (b.table.deleteRanges(d), a.moveToBookmark(d.bookmark), d.range = a) : (a.moveToBookmark(d.bookmark), d.range = a, a.extractContents(b.detectExtractMerge(d))); a.moveToBookmark(d.targetBookmark); a.optimize(); b.fixUneditableRangePosition(a); b.list.merge(d, this); b.table.purge(d, this); b.block.merge(d, this);
                        if (c) { b = a.startPath(); if (d = a.checkStartOfBlock() && a.checkEndOfBlock() && b.block && !a.root.equals(b.block)) { a: { var d = b.block.getElementsByTag("span"), g = 0, k; if (d) for (; k = d.getItem(g++);)if (!r(k)) { d = !0; break a } d = !1 } d = !d } d && (a.moveToPosition(b.block, CKEDITOR.POSITION_BEFORE_START), b.block.remove()) } else b.autoParagraph(this.editor, a), w(a.startContainer) && a.startContainer.appendBogus(); a.startContainer.mergeSiblings(); return e
                    }, setup: function () {
                        var a = this.editor; this.attachListener(a, "beforeGetData", function () {
                            var c =
                                this.getData(); this.is("textarea") || !1 !== a.config.ignoreEmptyParagraph && (c = c.replace(t, function (a, c) { return c })); a.setData(c, null, 1)
                        }, this); this.attachListener(a, "getSnapshot", function (a) { a.data = this.getData(1) }, this); this.attachListener(a, "afterSetData", function () { this.setData(a.getData(1)) }, this); this.attachListener(a, "loadSnapshot", function (a) { this.setData(a.data, 1) }, this); this.attachListener(a, "beforeFocus", function () { var c = a.getSelection(); (c = c && c.getNative()) && "Control" == c.type || this.focus() },
                            this); this.attachListener(a, "insertHtml", function (a) { this.insertHtml(a.data.dataValue, a.data.mode, a.data.range) }, this); this.attachListener(a, "insertElement", function (a) { this.insertElement(a.data) }, this); this.attachListener(a, "insertText", function (a) { this.insertText(a.data) }, this); this.setReadOnly(a.readOnly); this.attachClass("cke_editable"); a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? this.attachClass("cke_editable_inline") : a.elementMode != CKEDITOR.ELEMENT_MODE_REPLACE && a.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO ||
                                this.attachClass("cke_editable_themed"); this.attachClass("cke_contents_" + a.config.contentsLangDirection); a.keystrokeHandler.blockedKeystrokes[8] = +a.readOnly; a.keystrokeHandler.attach(this); this.on("blur", function () { this.hasFocus = !1 }, null, null, -1); this.on("focus", function () { this.hasFocus = !0 }, null, null, -1); if (CKEDITOR.env.webkit) this.on("scroll", function () { a._.previousScrollTop = a.editable().$.scrollTop }, null, null, -1); if (CKEDITOR.env.edge && 14 < CKEDITOR.env.version) {
                                    var c = function () {
                                        var b = a.editable();
                                        null != a._.previousScrollTop && b.getDocument().equals(CKEDITOR.document) && (b.$.scrollTop = a._.previousScrollTop, a._.previousScrollTop = null, this.removeListener("scroll", c))
                                    }; this.on("scroll", c)
                                } a.focusManager.add(this); this.equals(CKEDITOR.document.getActive()) && (this.hasFocus = !0, a.once("contentDom", function () { a.focusManager.focus(this) }, this)); this.isInline() && this.changeAttr("tabindex", a.tabIndex); if (!this.is("textarea")) {
                                    a.document = this.getDocument(); a.window = this.getWindow(); var d = a.document; this.changeAttr("spellcheck",
                                        !a.config.disableNativeSpellChecker); var k = a.config.contentsLangDirection; this.getDirection(1) != k && this.changeAttr("dir", k); var h = CKEDITOR.getCss(); if (h) { var k = d.getHead(), f = k.getCustomData("stylesheet"); f ? h != f.getText() && (CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? f.$.styleSheet.cssText = h : f.setText(h)) : (h = d.appendStyleText(h), h = new CKEDITOR.dom.element(h.ownerNode || h.owningElement), k.setCustomData("stylesheet", h), h.data("cke-temp", 1)) } k = d.getCustomData("stylesheet_ref") || 0; d.setCustomData("stylesheet_ref",
                                            k + 1); this.setCustomData("cke_includeReadonly", !a.config.disableReadonlyStyling); this.attachListener(this, "click", function (a) { a = a.data; var c = (new CKEDITOR.dom.elementPath(a.getTarget(), this)).contains("a"); c && 2 != a.$.button && c.isReadOnly() && a.preventDefault() }); var m = { 8: 1, 46: 1 }; this.attachListener(a, "key", function (c) {
                                                if (a.readOnly) return !0; var b = c.data.domEvent.getKey(), d; c = a.getSelection(); if (0 !== c.getRanges().length) {
                                                    if (b in m) {
                                                        var e, g = c.getRanges()[0], k = g.startPath(), h, f, r, b = 8 == b; CKEDITOR.env.ie &&
                                                            11 > CKEDITOR.env.version && (e = c.getSelectedElement()) || (e = l(c)) ? (a.fire("saveSnapshot"), g.moveToPosition(e, CKEDITOR.POSITION_BEFORE_START), e.remove(), g.select(), a.fire("saveSnapshot"), d = 1) : g.collapsed && ((h = k.block) && (r = h[b ? "getPrevious" : "getNext"](n)) && r.type == CKEDITOR.NODE_ELEMENT && r.is("table") && g[b ? "checkStartOfBlock" : "checkEndOfBlock"]() ? (a.fire("saveSnapshot"), g[b ? "checkEndOfBlock" : "checkStartOfBlock"]() && h.remove(), g["moveToElementEdit" + (b ? "End" : "Start")](r), g.select(), a.fire("saveSnapshot"),
                                                                d = 1) : k.blockLimit && k.blockLimit.is("td") && (f = k.blockLimit.getAscendant("table")) && g.checkBoundaryOfElement(f, b ? CKEDITOR.START : CKEDITOR.END) && (r = f[b ? "getPrevious" : "getNext"](n)) ? (a.fire("saveSnapshot"), g["moveToElementEdit" + (b ? "End" : "Start")](r), g.checkStartOfBlock() && g.checkEndOfBlock() ? r.remove() : g.select(), a.fire("saveSnapshot"), d = 1) : (f = k.contains(["td", "th", "caption"])) && g.checkBoundaryOfElement(f, b ? CKEDITOR.START : CKEDITOR.END) && (d = 1))
                                                    } return !d
                                                }
                                            }); a.blockless && CKEDITOR.env.ie && CKEDITOR.env.needsBrFiller &&
                                                this.attachListener(this, "keyup", function (c) { c.data.getKeystroke() in m && !this.getFirst(b) && (this.appendBogus(), c = a.createRange(), c.moveToPosition(this, CKEDITOR.POSITION_AFTER_START), c.select()) }); this.attachListener(this, "dblclick", function (c) { if (a.readOnly) return !1; c = { element: c.data.getTarget() }; a.fire("doubleclick", c) }); CKEDITOR.env.ie && this.attachListener(this, "click", e); CKEDITOR.env.ie && !CKEDITOR.env.edge || this.attachListener(this, "mousedown", function (c) {
                                                    var b = c.data.getTarget(); b.is("img", "hr",
                                                        "input", "textarea", "select") && !b.isReadOnly() && (a.getSelection().selectElement(b), b.is("input", "textarea", "select") && c.data.preventDefault())
                                                }); CKEDITOR.env.edge && this.attachListener(this, "mouseup", function (c) { (c = c.data.getTarget()) && c.is("img") && !c.isReadOnly() && a.getSelection().selectElement(c) }); CKEDITOR.env.gecko && this.attachListener(this, "mouseup", function (c) {
                                                    if (2 == c.data.$.button && (c = c.data.getTarget(), !c.getAscendant("table") && !c.getOuterHtml().replace(t, ""))) {
                                                        var b = a.createRange(); b.moveToElementEditStart(c);
                                                        b.select(!0)
                                                    }
                                                }); CKEDITOR.env.webkit && (this.attachListener(this, "click", function (a) { a.data.getTarget().is("input", "select") && a.data.preventDefault() }), this.attachListener(this, "mouseup", function (a) { a.data.getTarget().is("input", "textarea") && a.data.preventDefault() })); CKEDITOR.env.webkit && this.attachListener(a, "key", function (c) {
                                                    if (a.readOnly) return !0; var b = c.data.domEvent.getKey(); if (b in m && (c = a.getSelection(), 0 !== c.getRanges().length)) {
                                                        var b = 8 == b, d = c.getRanges()[0]; c = d.startPath(); if (d.collapsed) a: {
                                                            var e =
                                                                c.block; if (e && d[b ? "checkStartOfBlock" : "checkEndOfBlock"]() && d.moveToClosestEditablePosition(e, !b) && d.collapsed) {
                                                                    if (d.startContainer.type == CKEDITOR.NODE_ELEMENT) { var k = d.startContainer.getChild(d.startOffset - (b ? 1 : 0)); if (k && k.type == CKEDITOR.NODE_ELEMENT && k.is("hr")) { a.fire("saveSnapshot"); k.remove(); c = !0; break a } } d = d.startPath().block; if (!d || d && d.contains(e)) c = void 0; else {
                                                                        a.fire("saveSnapshot"); var h; (h = (b ? d : e).getBogus()) && h.remove(); h = a.getSelection(); k = h.createBookmarks(); (b ? e : d).moveChildren(b ?
                                                                            d : e, !1); c.lastElement.mergeSiblings(); g(e, d, !b); h.selectBookmarks(k); c = !0
                                                                    }
                                                                } else c = !1
                                                        } else b = d, h = c.block, d = b.endPath().block, h && d && !h.equals(d) ? (a.fire("saveSnapshot"), (e = h.getBogus()) && e.remove(), b.enlarge(CKEDITOR.ENLARGE_INLINE), b.deleteContents(), d.getParent() && (d.moveChildren(h, !1), c.lastElement.mergeSiblings(), g(h, d, !0)), b = a.getSelection().getRanges()[0], b.collapse(1), b.optimize(), "" === b.startContainer.getHtml() && b.startContainer.appendBogus(), b.select(), c = !0) : c = !1; if (!c) return; a.getSelection().scrollIntoView();
                                                        a.fire("saveSnapshot"); return !1
                                                    }
                                                }, this, null, 100)
                                }
                    }, getUniqueId: function () { var a; try { this._.expandoNumber = a = CKEDITOR.dom.domObject.prototype.getUniqueId.call(this) } catch (c) { a = this._ && this._.expandoNumber } return a }
                }, _: {
                    cleanCustomData: function () {
                        this.removeClass("cke_editable"); this.restoreAttrs(); for (var a = this.removeCustomData("classes"); a && a.length;)this.removeClass(a.pop()); if (!this.is("textarea")) {
                            var a = this.getDocument(), c = a.getHead(); if (c.getCustomData("stylesheet")) {
                                var b = a.getCustomData("stylesheet_ref");
                                --b ? a.setCustomData("stylesheet_ref", b) : (a.removeCustomData("stylesheet_ref"), c.removeCustomData("stylesheet").remove())
                            }
                        }
                    }
                }
            }); CKEDITOR.editor.prototype.editable = function (a) { var c = this._.editable; if (c && a) return 0; if (!arguments.length) return c; a ? c = a instanceof CKEDITOR.editable ? a : new CKEDITOR.editable(this, a) : (c && c.detach(), c = null); return this._.editable = c }; CKEDITOR.on("instanceLoaded", function (c) {
                var b = c.editor; b.on("insertElement", function (a) {
                    a = a.data; a.type == CKEDITOR.NODE_ELEMENT && (a.is("input") ||
                        a.is("textarea")) && ("false" != a.getAttribute("contentEditable") && a.data("cke-editable", a.hasAttribute("contenteditable") ? "true" : "1"), a.setAttribute("contentEditable", !1))
                }); b.on("selectionChange", function (c) { if (!b.readOnly) { var d = b.getSelection(); d && !d.isLocked && (d = b.checkDirty(), b.fire("lockSnapshot"), a(c), b.fire("unlockSnapshot"), !d && b.resetDirty()) } })
            }); CKEDITOR.on("instanceCreated", function (a) {
                var c = a.editor; c.on("mode", function () {
                    var a = c.editable(); if (a && a.isInline()) {
                        var b = c.title; a.changeAttr("role",
                            "textbox"); a.changeAttr("aria-multiline", "true"); a.changeAttr("aria-label", b); b && a.changeAttr("title", b); var d = c.fire("ariaEditorHelpLabel", {}).label; if (d && (b = this.ui.space(this.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? "top" : "contents"))) { var e = CKEDITOR.tools.getNextId(), d = CKEDITOR.dom.element.createFromHtml('\x3cspan id\x3d"' + e + '" class\x3d"cke_voice_label"\x3e' + d + "\x3c/span\x3e"); b.append(d); a.changeAttr("aria-describedby", e) }
                    }
                })
            }); CKEDITOR.addCss(".cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}");
            n = CKEDITOR.dom.walker.whitespaces(!0); r = CKEDITOR.dom.walker.bookmark(!1, !0); w = CKEDITOR.dom.walker.empty(); p = CKEDITOR.dom.walker.bogus(); t = /(^|<body\b[^>]*>)\s*<(p|div|address|h\d|center|pre)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;)?\s*(:?<\/\2>)?\s*(?=$|<\/body>)/gi; u = function () {
                function a(c) { return c.type == CKEDITOR.NODE_ELEMENT } function d(c, b) {
                    var e, g, k, h, f = [], l = b.range.startContainer; e = b.range.startPath(); for (var l = n[l.getName()], m = 0, r = c.getChildren(), u = r.count(), q = -1, y = -1, E = 0, v = e.contains(n.$list); m <
                        u; ++m)e = r.getItem(m), a(e) ? (k = e.getName(), v && k in CKEDITOR.dtd.$list ? f = f.concat(d(e, b)) : (h = !!l[k], "br" != k || !e.data("cke-eol") || m && m != u - 1 || (E = (g = m ? f[m - 1].node : r.getItem(m + 1)) && (!a(g) || !g.is("br")), g = g && a(g) && n.$block[g.getName()]), -1 != q || h || (q = m), h || (y = m), f.push({ isElement: 1, isLineBreak: E, isBlock: e.isBlockBoundary(), hasBlockSibling: g, node: e, name: k, allowed: h }), g = E = 0)) : f.push({ isElement: 0, node: e, allowed: 1 }); -1 < q && (f[q].firstNotAllowed = 1); -1 < y && (f[y].lastNotAllowed = 1); return f
                } function e(c, b) {
                    var d = [],
                    g = c.getChildren(), k = g.count(), h, f = 0, l = n[b], m = !c.is(n.$inline) || c.is("br"); for (m && d.push(" "); f < k; f++)h = g.getItem(f), a(h) && !h.is(l) ? d = d.concat(e(h, b)) : d.push(h); m && d.push(" "); return d
                } function g(c) { return a(c.startContainer) && c.startContainer.getChild(c.startOffset - 1) } function k(c) { return c && a(c) && (c.is(n.$removeEmpty) || c.is("a") && !c.isBlockBoundary()) } function f(c, b, d, e) {
                    var g = c.clone(), k, h; g.setEndAt(b, CKEDITOR.POSITION_BEFORE_END); (k = (new CKEDITOR.dom.walker(g)).next()) && a(k) && r[k.getName()] &&
                        (h = k.getPrevious()) && a(h) && !h.getParent().equals(c.startContainer) && d.contains(h) && e.contains(k) && k.isIdentical(h) && (k.moveChildren(h), k.remove(), f(c, b, d, e))
                } function l(c, b) { function d(c, b) { if (b.isBlock && b.isElement && !b.node.is("br") && a(c) && c.is("br")) return c.remove(), 1 } var e = b.endContainer.getChild(b.endOffset), g = b.endContainer.getChild(b.endOffset - 1); e && d(e, c[c.length - 1]); g && d(g, c[0]) && (b.setEnd(b.endContainer, b.endOffset - 1), b.collapse()) } var n = CKEDITOR.dtd, r = {
                    p: 1, div: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1,
                    h6: 1, ul: 1, ol: 1, li: 1, pre: 1, dl: 1, blockquote: 1
                }, q = { p: 1, div: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1 }, u = CKEDITOR.tools.extend({}, n.$inline); delete u.br; return function (r, y, H, I) {
                    var v = r.editor, w = !1, A; "unfiltered_html" == y && (y = "html", w = !0); if (!I.checkReadOnly()) {
                        var p = (new CKEDITOR.dom.elementPath(I.startContainer, I.root)).blockLimit || I.root; y = { type: y, dontFilter: w, editable: r, editor: v, range: I, blockLimit: p, mergeCandidates: [], zombies: [] }; var w = y.range, p = y.mergeCandidates, C = "html" === y.type, K, V, W, aa, ba; "text" == y.type &&
                            w.shrink(CKEDITOR.SHRINK_ELEMENT, !0, !1) && (V = CKEDITOR.dom.element.createFromHtml("\x3cspan\x3e\x26nbsp;\x3c/span\x3e", w.document), w.insertNode(V), w.setStartAfter(V)); W = new CKEDITOR.dom.elementPath(w.startContainer); y.endPath = aa = new CKEDITOR.dom.elementPath(w.endContainer); if (!w.collapsed) { K = aa.block || aa.blockLimit; var ca = w.getCommonAncestor(); K && !K.equals(ca) && !K.contains(ca) && w.checkEndOfBlock() && y.zombies.push(K); w.deleteContents() } for (; (ba = g(w)) && a(ba) && ba.isBlockBoundary() && W.contains(ba);)w.moveToPosition(ba,
                                CKEDITOR.POSITION_BEFORE_END); f(w, y.blockLimit, W, aa); V && (w.setEndBefore(V), w.collapse(), V.remove()); V = w.startPath(); if (K = V.contains(k, !1, 1)) A = w.splitElement(K), y.inlineStylesRoot = K, y.inlineStylesPeak = V.lastElement; V = w.createBookmark(); C && (c(K), c(A)); (K = V.startNode.getPrevious(b)) && a(K) && k(K) && p.push(K); (K = V.startNode.getNext(b)) && a(K) && k(K) && p.push(K); for (K = V.startNode; (K = K.getParent()) && k(K);)p.push(K); w.moveToBookmark(V); A = r.getHtml(); A = "" === A || A.match(t); v.enterMode === CKEDITOR.ENTER_DIV && A && ((v =
                                    r.getFirst()) && v.remove(), I.setStartAt(r, CKEDITOR.POSITION_AFTER_START), I.collapse(!0)); if (r = H) {
                                        r = y.range; if ("text" == y.type && y.inlineStylesRoot) { I = y.inlineStylesPeak; v = I.getDocument().createText("{cke-peak}"); for (A = y.inlineStylesRoot.getParent(); !I.equals(A);)v = v.appendTo(I.clone()), I = I.getParent(); H = v.getOuterHtml().split("{cke-peak}").join(H) } I = y.blockLimit.getName(); if (/^\s+|\s+$/.test(H) && "span" in CKEDITOR.dtd[I]) { var Z = '\x3cspan data-cke-marker\x3d"1"\x3e\x26nbsp;\x3c/span\x3e'; H = Z + H + Z } H = y.editor.dataProcessor.toHtml(H,
                                            { context: null, fixForBody: !1, protectedWhitespaces: !!Z, dontFilter: y.dontFilter, filter: y.editor.activeFilter, enterMode: y.editor.activeEnterMode }); I = r.document.createElement("body"); I.setHtml(H); Z && (I.getFirst().remove(), I.getLast().remove()); if ((Z = r.startPath().block) && (1 != Z.getChildCount() || !Z.getBogus())) a: {
                                                var S; if (1 == I.getChildCount() && a(S = I.getFirst()) && S.is(q) && !S.hasAttribute("contenteditable")) {
                                                    Z = S.getElementsByTag("*"); r = 0; for (A = Z.count(); r < A; r++)if (v = Z.getItem(r), !v.is(u)) break a; S.moveChildren(S.getParent(1));
                                                    S.remove()
                                                }
                                            } y.dataWrapper = I; r = H
                                    } if (r) {
                                        S = y.range; r = S.document; I = y.blockLimit; A = 0; var T, Z = [], ea, G; H = V = 0; var Q, v = S.startContainer; ba = y.endPath.elements[0]; var da, w = ba.getPosition(v), p = !!ba.getCommonAncestor(v) && w != CKEDITOR.POSITION_IDENTICAL && !(w & CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_IS_CONTAINED), v = d(y.dataWrapper, y); for (l(v, S); A < v.length; A++) {
                                            w = v[A]; if (C = w.isLineBreak) C = S, K = I, aa = W = void 0, w.hasBlockSibling ? C = 1 : (W = C.startContainer.getAscendant(n.$block, 1)) && W.is({ div: 1, p: 1 }) ? (aa = W.getPosition(K),
                                                aa == CKEDITOR.POSITION_IDENTICAL || aa == CKEDITOR.POSITION_CONTAINS ? C = 0 : (K = C.splitElement(W), C.moveToPosition(K, CKEDITOR.POSITION_AFTER_START), C = 1)) : C = 0; if (C) H = 0 < A; else {
                                                    C = S.startPath(); !w.isBlock && h(y.editor, C.block, C.blockLimit) && (G = m(y.editor)) && (G = r.createElement(G), G.appendBogus(), S.insertNode(G), CKEDITOR.env.needsBrFiller && (T = G.getBogus()) && T.remove(), S.moveToPosition(G, CKEDITOR.POSITION_BEFORE_END)); if ((C = S.startPath().block) && !C.equals(ea)) { if (T = C.getBogus()) T.remove(), Z.push(C); ea = C } w.firstNotAllowed &&
                                                        (V = 1); if (V && w.isElement) { C = S.startContainer; for (K = null; C && !n[C.getName()][w.name];) { if (C.equals(I)) { C = null; break } K = C; C = C.getParent() } if (C) K && (Q = S.splitElement(K), y.zombies.push(Q), y.zombies.push(K)); else { K = I.getName(); da = !A; C = A == v.length - 1; K = e(w.node, K); W = []; aa = K.length; for (var ca = 0, ga = void 0, fa = 0, ja = -1; ca < aa; ca++)ga = K[ca], " " == ga ? (fa || da && !ca || (W.push(new CKEDITOR.dom.text(" ")), ja = W.length), fa = 1) : (W.push(ga), fa = 0); C && ja == W.length && W.pop(); da = W } } if (da) { for (; C = da.pop();)S.insertNode(C); da = 0 } else S.insertNode(w.node);
                                                    w.lastNotAllowed && A < v.length - 1 && ((Q = p ? ba : Q) && S.setEndAt(Q, CKEDITOR.POSITION_AFTER_START), V = 0); S.collapse()
                                                }
                                        } 1 != v.length ? T = !1 : (T = v[0], T = T.isElement && "false" == T.node.getAttribute("contenteditable")); T && (H = !0, C = v[0].node, S.setStartAt(C, CKEDITOR.POSITION_BEFORE_START), S.setEndAt(C, CKEDITOR.POSITION_AFTER_END)); y.dontMoveCaret = H; y.bogusNeededBlocks = Z
                                    } T = y.range; var ia; da = y.bogusNeededBlocks; for (ea = T.createBookmark(); G = y.zombies.pop();)G.getParent() && (Q = T.clone(), Q.moveToElementEditStart(G), Q.removeEmptyBlocksAtEnd());
                        if (da) for (; G = da.pop();)CKEDITOR.env.needsBrFiller ? G.appendBogus() : G.append(T.document.createText(" ")); for (; G = y.mergeCandidates.pop();)G.mergeSiblings(); CKEDITOR.env.webkit && T.startPath() && (G = T.startPath(), G.block ? G.block.$.normalize() : G.blockLimit && G.blockLimit.$.normalize()); T.moveToBookmark(ea); if (!y.dontMoveCaret) {
                            for (G = g(T); G && a(G) && !G.is(n.$empty);) {
                                if (G.isBlockBoundary()) T.moveToPosition(G, CKEDITOR.POSITION_BEFORE_END); else {
                                    if (k(G) && G.getHtml().match(/(\s|&nbsp;)$/g)) { ia = null; break } ia = T.clone();
                                    ia.moveToPosition(G, CKEDITOR.POSITION_BEFORE_END)
                                } G = G.getLast(b)
                            } ia && T.moveToRange(ia)
                        }
                    }
                }
            }(); y = function () {
                function a(c) { c = new CKEDITOR.dom.walker(c); c.guard = function (a, c) { if (c) return !1; if (a.type == CKEDITOR.NODE_ELEMENT) return a.is(CKEDITOR.dtd.$tableContent) }; c.evaluator = function (a) { return a.type == CKEDITOR.NODE_ELEMENT }; return c } function c(a, b, d) { b = a.getDocument().createElement(b); a.append(b, d); return b } function b(a) {
                    var c = a.count(), d; for (c; 0 < c--;)d = a.getItem(c), CKEDITOR.tools.trim(d.getHtml()) || (d.appendBogus(),
                        CKEDITOR.env.ie && 9 > CKEDITOR.env.version && d.getChildCount() && d.getFirst().remove())
                } return function (d) {
                    var e = d.startContainer, g = e.getAscendant("table", 1), k = !1; b(g.getElementsByTag("td")); b(g.getElementsByTag("th")); g = d.clone(); g.setStart(e, 0); g = a(g).lastBackward(); g || (g = d.clone(), g.setEndAt(e, CKEDITOR.POSITION_BEFORE_END), g = a(g).lastForward(), k = !0); g || (g = e); g.is("table") ? (d.setStartAt(g, CKEDITOR.POSITION_BEFORE_START), d.collapse(!0), g.remove()) : (g.is({ tbody: 1, thead: 1, tfoot: 1 }) && (g = c(g, "tr", k)), g.is("tr") &&
                        (g = c(g, g.getParent().is("thead") ? "th" : "td", k)), (e = g.getBogus()) && e.remove(), d.moveToPosition(g, k ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_BEFORE_END))
                }
            }(); q = function () {
                function a(c) { c = new CKEDITOR.dom.walker(c); c.guard = function (a, c) { if (c) return !1; if (a.type == CKEDITOR.NODE_ELEMENT) return a.is(CKEDITOR.dtd.$list) || a.is(CKEDITOR.dtd.$listItem) }; c.evaluator = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.is(CKEDITOR.dtd.$listItem) }; return c } return function (c) {
                    var b = c.startContainer, d = !1, e; e =
                        c.clone(); e.setStart(b, 0); e = a(e).lastBackward(); e || (e = c.clone(), e.setEndAt(b, CKEDITOR.POSITION_BEFORE_END), e = a(e).lastForward(), d = !0); e || (e = b); e.is(CKEDITOR.dtd.$list) ? (c.setStartAt(e, CKEDITOR.POSITION_BEFORE_START), c.collapse(!0), e.remove()) : ((b = e.getBogus()) && b.remove(), c.moveToPosition(e, d ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_BEFORE_END), c.select())
                }
            }(); A = {
                eol: {
                    detect: function (a, c) {
                        var b = a.range, d = b.clone(), e = b.clone(), g = new CKEDITOR.dom.elementPath(b.startContainer, c), k = new CKEDITOR.dom.elementPath(b.endContainer,
                            c); d.collapse(1); e.collapse(); g.block && d.checkBoundaryOfElement(g.block, CKEDITOR.END) && (b.setStartAfter(g.block), a.prependEolBr = 1); k.block && e.checkBoundaryOfElement(k.block, CKEDITOR.START) && (b.setEndBefore(k.block), a.appendEolBr = 1)
                    }, fix: function (a, c) { var b = c.getDocument(), d; a.appendEolBr && (d = this.createEolBr(b), a.fragment.append(d)); !a.prependEolBr || d && !d.getPrevious() || a.fragment.append(this.createEolBr(b), 1) }, createEolBr: function (a) { return a.createElement("br", { attributes: { "data-cke-eol": 1 } }) }
                },
                bogus: { exclude: function (a) { var c = a.range.getBoundaryNodes(), b = c.startNode, c = c.endNode; !c || !p(c) || b && b.equals(c) || a.range.setEndBefore(c) } }, tree: {
                    rebuild: function (a, c) {
                        var b = a.range, d = b.getCommonAncestor(), e = new CKEDITOR.dom.elementPath(d, c), g = new CKEDITOR.dom.elementPath(b.startContainer, c), b = new CKEDITOR.dom.elementPath(b.endContainer, c), k; d.type == CKEDITOR.NODE_TEXT && (d = d.getParent()); if (e.blockLimit.is({ tr: 1, table: 1 })) { var h = e.contains("table").getParent(); k = function (a) { return !a.equals(h) } } else if (e.block &&
                            e.block.is(CKEDITOR.dtd.$listItem) && (g = g.contains(CKEDITOR.dtd.$list), b = b.contains(CKEDITOR.dtd.$list), !g.equals(b))) { var f = e.contains(CKEDITOR.dtd.$list).getParent(); k = function (a) { return !a.equals(f) } } k || (k = function (a) { return !a.equals(e.block) && !a.equals(e.blockLimit) }); this.rebuildFragment(a, c, d, k)
                    }, rebuildFragment: function (a, c, b, d) { for (var e; b && !b.equals(c) && d(b);)e = b.clone(0, 1), a.fragment.appendTo(e), a.fragment = e, b = b.getParent() }
                }, cell: {
                    shrink: function (a) {
                        a = a.range; var c = a.startContainer, b = a.endContainer,
                            d = a.startOffset, e = a.endOffset; c.type == CKEDITOR.NODE_ELEMENT && c.equals(b) && c.is("tr") && ++d == e && a.shrink(CKEDITOR.SHRINK_TEXT)
                    }
                }
            }; v = function () {
                function a(c, b) { var d = c.getParent(); if (d.is(CKEDITOR.dtd.$inline)) c[b ? "insertBefore" : "insertAfter"](d) } function c(b, d, e) { a(d); a(e, 1); for (var g; g = e.getNext();)g.insertAfter(d), d = g; w(b) && b.remove() } function b(a, c) { var d = new CKEDITOR.dom.range(a); d.setStartAfter(c.startNode); d.setEndBefore(c.endNode); return d } return {
                    list: {
                        detectMerge: function (a, c) {
                            var d = b(c, a.bookmark),
                            e = d.startPath(), g = d.endPath(), k = e.contains(CKEDITOR.dtd.$list), h = g.contains(CKEDITOR.dtd.$list); a.mergeList = k && h && k.getParent().equals(h.getParent()) && !k.equals(h); a.mergeListItems = e.block && g.block && e.block.is(CKEDITOR.dtd.$listItem) && g.block.is(CKEDITOR.dtd.$listItem); if (a.mergeList || a.mergeListItems) d = d.clone(), d.setStartBefore(a.bookmark.startNode), d.setEndAfter(a.bookmark.endNode), a.mergeListBookmark = d.createBookmark()
                        }, merge: function (a, b) {
                            if (a.mergeListBookmark) {
                                var d = a.mergeListBookmark.startNode,
                                e = a.mergeListBookmark.endNode, g = new CKEDITOR.dom.elementPath(d, b), k = new CKEDITOR.dom.elementPath(e, b); if (a.mergeList) { var h = g.contains(CKEDITOR.dtd.$list), f = k.contains(CKEDITOR.dtd.$list); h.equals(f) || (f.moveChildren(h), f.remove()) } a.mergeListItems && (g = g.contains(CKEDITOR.dtd.$listItem), k = k.contains(CKEDITOR.dtd.$listItem), g.equals(k) || c(k, d, e)); d.remove(); e.remove()
                            }
                        }
                    }, block: {
                        detectMerge: function (a, c) {
                            if (!a.tableContentsRanges && !a.mergeListBookmark) {
                                var b = new CKEDITOR.dom.range(c); b.setStartBefore(a.bookmark.startNode);
                                b.setEndAfter(a.bookmark.endNode); a.mergeBlockBookmark = b.createBookmark()
                            }
                        }, merge: function (a, b) { if (a.mergeBlockBookmark && !a.purgeTableBookmark) { var d = a.mergeBlockBookmark.startNode, e = a.mergeBlockBookmark.endNode, g = new CKEDITOR.dom.elementPath(d, b), k = new CKEDITOR.dom.elementPath(e, b), g = g.block, k = k.block; g && k && !g.equals(k) && c(k, d, e); d.remove(); e.remove() } }
                    }, table: function () {
                        function a(b) {
                            var e = [], g, k = new CKEDITOR.dom.walker(b), h = b.startPath().contains(d), f = b.endPath().contains(d), l = {}; k.guard = function (a,
                                k) {
                                    if (a.type == CKEDITOR.NODE_ELEMENT) { var m = "visited_" + (k ? "out" : "in"); if (a.getCustomData(m)) return; CKEDITOR.dom.element.setMarker(l, a, m, 1) } if (k && h && a.equals(h)) g = b.clone(), g.setEndAt(h, CKEDITOR.POSITION_BEFORE_END), e.push(g); else if (!k && f && a.equals(f)) g = b.clone(), g.setStartAt(f, CKEDITOR.POSITION_AFTER_START), e.push(g); else {
                                        if (m = !k) m = a.type == CKEDITOR.NODE_ELEMENT && a.is(d) && (!h || c(a, h)) && (!f || c(a, f)); if (!m && (m = k)) if (a.is(d)) var m = h && h.getAscendant("table", !0), n = f && f.getAscendant("table", !0), r = a.getAscendant("table",
                                            !0), m = m && m.contains(r) || n && n.contains(r); else m = void 0; m && (g = b.clone(), g.selectNodeContents(a), e.push(g))
                                    }
                            }; k.lastForward(); CKEDITOR.dom.element.clearAllMarkers(l); return e
                        } function c(a, b) { var d = CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_IS_CONTAINED, e = a.getPosition(b); return e === CKEDITOR.POSITION_IDENTICAL ? !1 : 0 === (e & d) } var d = { td: 1, th: 1, caption: 1 }; return {
                            detectPurge: function (a) {
                                var c = a.range, b = c.clone(); b.enlarge(CKEDITOR.ENLARGE_ELEMENT); var b = new CKEDITOR.dom.walker(b), e = 0; b.evaluator = function (a) {
                                    a.type ==
                                    CKEDITOR.NODE_ELEMENT && a.is(d) && ++e
                                }; b.checkForward(); if (1 < e) { var b = c.startPath().contains("table"), g = c.endPath().contains("table"); b && g && c.checkBoundaryOfElement(b, CKEDITOR.START) && c.checkBoundaryOfElement(g, CKEDITOR.END) && (c = a.range.clone(), c.setStartBefore(b), c.setEndAfter(g), a.purgeTableBookmark = c.createBookmark()) }
                            }, detectRanges: function (e, g) {
                                var k = b(g, e.bookmark), h = k.clone(), f, l, m = k.getCommonAncestor(); m.is(CKEDITOR.dtd.$tableContent) && !m.is(d) && (m = m.getAscendant("table", !0)); l = m; m = new CKEDITOR.dom.elementPath(k.startContainer,
                                    l); l = new CKEDITOR.dom.elementPath(k.endContainer, l); m = m.contains("table"); l = l.contains("table"); if (m || l) m && l && c(m, l) ? (e.tableSurroundingRange = h, h.setStartAt(m, CKEDITOR.POSITION_AFTER_END), h.setEndAt(l, CKEDITOR.POSITION_BEFORE_START), h = k.clone(), h.setEndAt(m, CKEDITOR.POSITION_AFTER_END), f = k.clone(), f.setStartAt(l, CKEDITOR.POSITION_BEFORE_START), f = a(h).concat(a(f))) : m ? l || (e.tableSurroundingRange = h, h.setStartAt(m, CKEDITOR.POSITION_AFTER_END), k.setEndAt(m, CKEDITOR.POSITION_AFTER_END)) : (e.tableSurroundingRange =
                                        h, h.setEndAt(l, CKEDITOR.POSITION_BEFORE_START), k.setStartAt(l, CKEDITOR.POSITION_AFTER_START)), e.tableContentsRanges = f ? f : a(k)
                            }, deleteRanges: function (a) { for (var c; c = a.tableContentsRanges.pop();)c.extractContents(), w(c.startContainer) && c.startContainer.appendBogus(); a.tableSurroundingRange && a.tableSurroundingRange.extractContents() }, purge: function (a) {
                                if (a.purgeTableBookmark) {
                                    var c = a.doc, b = a.range.clone(), c = c.createElement("p"); c.insertBefore(a.purgeTableBookmark.startNode); b.moveToBookmark(a.purgeTableBookmark);
                                    b.deleteContents(); a.range.moveToPosition(c, CKEDITOR.POSITION_AFTER_START)
                                }
                            }
                        }
                    }(), detectExtractMerge: function (a) { return !(a.range.startPath().contains(CKEDITOR.dtd.$listItem) && a.range.endPath().contains(CKEDITOR.dtd.$listItem)) }, fixUneditableRangePosition: function (a) { a.startContainer.getDtd()["#"] || a.moveToClosestEditablePosition(null, !0) }, autoParagraph: function (a, c) {
                        var b = c.startPath(), d; h(a, b.block, b.blockLimit) && (d = m(a)) && (d = c.document.createElement(d), d.appendBogus(), c.insertNode(d), c.moveToPosition(d,
                            CKEDITOR.POSITION_AFTER_START))
                    }
                }
            }()
        }(), function () {
            function a(a) { return CKEDITOR.plugins.widget && CKEDITOR.plugins.widget.isDomWidget(a) } function f(c, b) {
                if (0 === c.length || a(c[0].getEnclosedNode())) return !1; var d, e; if ((d = !b && 1 === c.length) && !(d = c[0].collapsed)) {
                    var g = c[0]; d = g.startContainer.getAscendant({ td: 1, th: 1 }, !0); var k = g.endContainer.getAscendant({ td: 1, th: 1 }, !0); e = CKEDITOR.tools.trim; d && d.equals(k) && !d.findOne("td, th, tr, tbody, table") ? (g = g.cloneContents(), d = g.getFirst() ? e(g.getFirst().getText()) !==
                        e(d.getText()) : !0) : d = !1
                } if (d) return !1; for (e = 0; e < c.length; e++)if (d = c[e]._getTableElement(), !d) return !1; return !0
            } function e(a) { function c(a) { a = a.find("td, th"); var b = [], d; for (d = 0; d < a.count(); d++)b.push(a.getItem(d)); return b } var b = [], d, e; for (e = 0; e < a.length; e++)d = a[e]._getTableElement(), d.is && d.is({ td: 1, th: 1 }) ? b.push(d) : b = b.concat(c(d)); return b } function b(a) {
                a = e(a); var c = "", b = [], d, g; for (g = 0; g < a.length; g++)d && !d.equals(a[g].getAscendant("tr")) ? (c += b.join("\t") + "\n", d = a[g].getAscendant("tr"), b = []) : 0 ===
                    g && (d = a[g].getAscendant("tr")), b.push(a[g].getText()); return c += b.join("\t")
            } function d(a) { var c = this.root.editor, d = c.getSelection(1); this.reset(); v = !0; d.root.once("selectionchange", function (a) { a.cancel() }, null, null, 0); d.selectRanges([a[0]]); d = this._.cache; d.ranges = new CKEDITOR.dom.rangeList(a); d.type = CKEDITOR.SELECTION_TEXT; d.selectedElement = a[0]._getTableElement(); d.selectedText = b(a); d.nativeSel = null; this.isFake = 1; this.rev = y++; c._.fakeSelection = this; v = !1; this.root.fire("selectionchange") } function l() {
                var c =
                    this._.fakeSelection, b; if (c) {
                        b = this.getSelection(1); var d; if (!(d = !b) && (d = !b.isHidden())) {
                            d = c; var e = b.getRanges(), g = d.getRanges(), k = e.length && e[0]._getTableElement() && e[0]._getTableElement().getAscendant("table", !0), h = g.length && g[0]._getTableElement() && g[0]._getTableElement().getAscendant("table", !0), l = 1 === e.length && e[0]._getTableElement() && e[0]._getTableElement().is("table"), m = 1 === g.length && g[0]._getTableElement() && g[0]._getTableElement().is("table"); if (a(d.getSelectedElement())) d = !1; else {
                                var n = 1 ===
                                    e.length && e[0].collapsed, g = f(e, !!CKEDITOR.env.webkit) && f(g); k = k && h ? k.equals(h) || h.contains(k) : !1; k && (n || g) ? (l && !m && d.selectRanges(e), d = !0) : d = !1
                            } d = !d
                        } d && (c.reset(), c = 0)
                    } if (!c && (c = b || this.getSelection(1), !c || c.getType() == CKEDITOR.SELECTION_NONE)) return; this.fire("selectionCheck", c); b = this.elementPath(); b.compare(this._.selectionPreviousPath) || (d = this._.selectionPreviousPath && this._.selectionPreviousPath.blockLimit.equals(b.blockLimit), !CKEDITOR.env.webkit && !CKEDITOR.env.gecko || d || (this._.previousActive =
                        this.document.getActive()), this._.selectionPreviousPath = b, this.fire("selectionChange", { selection: c, path: b }))
            } function h() { x = !0; z || (m.call(this), z = CKEDITOR.tools.setTimeout(m, 200, this)) } function m() { z = null; x && (CKEDITOR.tools.setTimeout(l, 0, this), x = !1) } function c(a) { return D(a) || a.type == CKEDITOR.NODE_ELEMENT && !a.is(CKEDITOR.dtd.$empty) ? !0 : !1 } function k(a) {
                function b(c, d) { return c && c.type != CKEDITOR.NODE_TEXT ? a.clone()["moveToElementEdit" + (d ? "End" : "Start")](c) : !1 } if (!(a.root instanceof CKEDITOR.editable)) return !1;
                var d = a.startContainer, e = a.getPreviousNode(c, null, d), g = a.getNextNode(c, null, d); return b(e) || b(g, 1) || !(e || g || d.type == CKEDITOR.NODE_ELEMENT && d.isBlockBoundary() && d.getBogus()) ? !0 : !1
            } function g(a) { n(a, !1); var c = a.getDocument().createText(q); a.setCustomData("cke-fillingChar", c); return c } function n(a, c) {
                var b = a && a.removeCustomData("cke-fillingChar"); if (b) {
                    if (!1 !== c) {
                        var d = a.getDocument().getSelection().getNative(), e = d && "None" != d.type && d.getRangeAt(0), g = q.length; if (b.getLength() > g && e && e.intersectsNode(b.$)) {
                            var k =
                                [{ node: d.anchorNode, offset: d.anchorOffset }, { node: d.focusNode, offset: d.focusOffset }]; d.anchorNode == b.$ && d.anchorOffset > g && (k[0].offset -= g); d.focusNode == b.$ && d.focusOffset > g && (k[1].offset -= g)
                        }
                    } b.setText(r(b.getText(), 1)); k && (b = a.getDocument().$, d = b.getSelection(), b = b.createRange(), b.setStart(k[0].node, k[0].offset), b.collapse(!0), d.removeAllRanges(), d.addRange(b), d.extend(k[1].node, k[1].offset))
                }
            } function r(a, c) { return c ? a.replace(A, function (a, c) { return c ? " " : "" }) : a.replace(q, "") } function w(a, c) {
                var b =
                    c && CKEDITOR.tools.htmlEncode(c) || "\x26nbsp;", b = CKEDITOR.dom.element.createFromHtml('\x3cdiv data-cke-hidden-sel\x3d"1" data-cke-temp\x3d"1" style\x3d"' + (CKEDITOR.env.ie && 14 > CKEDITOR.env.version ? "display:none" : "position:fixed;top:0;left:-1000px;width:0;height:0;overflow:hidden;") + '"\x3e' + b + "\x3c/div\x3e", a.document); a.fire("lockSnapshot"); a.editable().append(b); var d = a.getSelection(1), e = a.createRange(), g = d.root.on("selectionchange", function (a) { a.cancel() }, null, null, 0); e.setStartAt(b, CKEDITOR.POSITION_AFTER_START);
                e.setEndAt(b, CKEDITOR.POSITION_BEFORE_END); d.selectRanges([e]); g.removeListener(); a.fire("unlockSnapshot"); a._.hiddenSelectionContainer = b
            } function p(a) {
                var c = { 37: 1, 39: 1, 8: 1, 46: 1 }; return function (b) {
                    var d = b.data.getKeystroke(); if (c[d]) {
                        var e = a.getSelection(), g = e.getRanges()[0]; e.isCollapsed() && (g = g[38 > d ? "getPreviousEditableNode" : "getNextEditableNode"]()) && g.type == CKEDITOR.NODE_ELEMENT && "false" == g.getAttribute("contenteditable") && (e = e.getStartElement(), !e.isBlockBoundary() || "" !== (void 0 === e.$.textContent ?
                            e.$.innerText : e.$.textContent) || 8 !== d && 46 !== d || (e.remove(), a.fire("saveSnapshot")), a.getSelection().fake(g), b.data.preventDefault(), b.cancel())
                    }
                }
            } function t(a) {
                for (var c = 0; c < a.length; c++) {
                    var b = a[c]; b.getCommonAncestor().isReadOnly() && a.splice(c, 1); if (!b.collapsed) {
                        if (b.startContainer.isReadOnly()) for (var d = b.startContainer, e; d && !((e = d.type == CKEDITOR.NODE_ELEMENT) && d.is("body") || !d.isReadOnly());)e && "false" == d.getAttribute("contentEditable") && b.setStartAfter(d), d = d.getParent(); d = b.startContainer;
                        e = b.endContainer; var g = b.startOffset, k = b.endOffset, h = b.clone(); d && d.type == CKEDITOR.NODE_TEXT && (g >= d.getLength() ? h.setStartAfter(d) : h.setStartBefore(d)); e && e.type == CKEDITOR.NODE_TEXT && (k ? h.setEndAfter(e) : h.setEndBefore(e)); d = new CKEDITOR.dom.walker(h); d.evaluator = function (d) { if (d.type == CKEDITOR.NODE_ELEMENT && d.isReadOnly()) { var e = b.clone(); b.setEndBefore(d); b.collapsed && a.splice(c--, 1); d.getPosition(h.endContainer) & CKEDITOR.POSITION_CONTAINS || (e.setStartAfter(d), e.collapsed || a.splice(c + 1, 0, e)); return !0 } return !1 };
                        d.next()
                    }
                } return a
            } var u = "function" != typeof window.getSelection, y = 1, q = CKEDITOR.tools.repeat("​", 7), A = new RegExp(q + "( )?", "g"), v, z, x, D = CKEDITOR.dom.walker.invisible(1), B = function () {
                function a(c) { return function (a) { var b = a.editor.createRange(); b.moveToClosestEditablePosition(a.selected, c) && a.editor.getSelection().selectRanges([b]); return !1 } } function c(a) {
                    return function (c) {
                        var b = c.editor, d = b.createRange(), e; if (!b.readOnly) return (e = d.moveToClosestEditablePosition(c.selected, a)) || (e = d.moveToClosestEditablePosition(c.selected,
                            !a)), e && b.getSelection().selectRanges([d]), b.fire("saveSnapshot"), c.selected.remove(), e || (d.moveToElementEditablePosition(b.editable()), b.getSelection().selectRanges([d])), b.fire("saveSnapshot"), !1
                    }
                } var b = a(), d = a(1); return { 37: b, 38: b, 39: d, 40: d, 8: c(), 46: c(1) }
            }(); CKEDITOR.on("instanceCreated", function (a) {
                function c() { var a = b.getSelection(); a && a.removeAllRanges() } var b = a.editor; b.on("contentDom", function () {
                    function a() { v = new CKEDITOR.dom.selection(b.getSelection()); v.lock() } function c() {
                        k.removeListener("mouseup",
                            c); r.removeListener("mouseup", c); var a = CKEDITOR.document.$.selection, b = a.createRange(); "None" != a.type && b.parentElement() && b.parentElement().ownerDocument == g.$ && b.select()
                    } function d(a) { var c, b; c = (c = this.document.getActive()) ? "input" === c.getName() || "textarea" === c.getName() : !1; c || (c = this.getSelection(1), (b = e(c)) && !b.equals(f) && (c.selectElement(b), a.data.preventDefault())) } function e(a) {
                        a = a.getRanges()[0]; return a ? (a = a.startContainer.getAscendant(function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasAttribute("contenteditable") },
                            !0)) && "false" === a.getAttribute("contenteditable") ? a : null : null
                    } var g = b.document, k = CKEDITOR.document, f = b.editable(), m = g.getBody(), r = g.getDocumentElement(), q = f.isInline(), y, v; CKEDITOR.env.gecko && f.attachListener(f, "focus", function (a) { a.removeListener(); 0 !== y && (a = b.getSelection().getNative()) && a.isCollapsed && a.anchorNode == f.$ && (a = b.createRange(), a.moveToElementEditStart(f), a.select()) }, null, null, -2); f.attachListener(f, CKEDITOR.env.webkit || CKEDITOR.env.gecko ? "focusin" : "focus", function () {
                        if (y && (CKEDITOR.env.webkit ||
                            CKEDITOR.env.gecko)) { y = b._.previousActive && b._.previousActive.equals(g.getActive()); var a = null != b._.previousScrollTop && b._.previousScrollTop != f.$.scrollTop; CKEDITOR.env.webkit && y && a && (f.$.scrollTop = b._.previousScrollTop) } b.unlockSelection(y); y = 0
                    }, null, null, -1); f.attachListener(f, "mousedown", function () { y = 0 }); if (CKEDITOR.env.ie || CKEDITOR.env.gecko || q) u ? f.attachListener(f, "beforedeactivate", a, null, null, -1) : f.attachListener(b, "selectionCheck", a, null, null, -1), f.attachListener(f, CKEDITOR.env.webkit || CKEDITOR.env.gecko ?
                        "focusout" : "blur", function () { var a = v && (v.isFake || 2 > v.getRanges().length); CKEDITOR.env.gecko && !q && a || (b.lockSelection(v), y = 1) }, null, null, -1), f.attachListener(f, "mousedown", function () { y = 0 }); if (CKEDITOR.env.ie && !q) {
                            var x; f.attachListener(f, "mousedown", function (a) { 2 == a.data.$.button && ((a = b.document.getSelection()) && a.getType() != CKEDITOR.SELECTION_NONE || (x = b.window.getScrollPosition())) }); f.attachListener(f, "mouseup", function (a) {
                                2 == a.data.$.button && x && (b.document.$.documentElement.scrollLeft = x.x, b.document.$.documentElement.scrollTop =
                                    x.y); x = null
                            }); if ("BackCompat" != g.$.compatMode) {
                                if (CKEDITOR.env.ie7Compat || CKEDITOR.env.ie6Compat) {
                                    var t, w; r.on("mousedown", function (a) {
                                        function c(a) { a = a.data.$; if (t) { var b = m.$.createTextRange(); try { b.moveToPoint(a.clientX, a.clientY) } catch (d) { } t.setEndPoint(0 > w.compareEndPoints("StartToStart", b) ? "EndToEnd" : "StartToStart", b); t.select() } } function b() { r.removeListener("mousemove", c); k.removeListener("mouseup", b); r.removeListener("mouseup", b); t.select() } a = a.data; if (a.getTarget().is("html") && a.$.y < r.$.clientHeight &&
                                            a.$.x < r.$.clientWidth) { t = m.$.createTextRange(); try { t.moveToPoint(a.$.clientX, a.$.clientY) } catch (d) { } w = t.duplicate(); r.on("mousemove", c); k.on("mouseup", b); r.on("mouseup", b) }
                                    })
                                } if (7 < CKEDITOR.env.version && 11 > CKEDITOR.env.version) r.on("mousedown", function (a) { a.data.getTarget().is("html") && (k.on("mouseup", c), r.on("mouseup", c)) })
                            }
                        } f.attachListener(f, "selectionchange", l, b); f.attachListener(f, "keyup", h, b); f.attachListener(f, "touchstart", h, b); f.attachListener(f, "touchend", h, b); CKEDITOR.env.ie && f.attachListener(f,
                            "keydown", d, b); f.attachListener(f, CKEDITOR.env.webkit || CKEDITOR.env.gecko ? "focusin" : "focus", function () { b.forceNextSelectionCheck(); b.selectionChange(1) }); if (q && (CKEDITOR.env.webkit || CKEDITOR.env.gecko)) { var A; f.attachListener(f, "mousedown", function () { A = 1 }); f.attachListener(g.getDocumentElement(), "mouseup", function () { A && h.call(b); A = 0 }) } else f.attachListener(CKEDITOR.env.ie ? f : g.getDocumentElement(), "mouseup", h, b); CKEDITOR.env.webkit && f.attachListener(g, "keydown", function (a) {
                                switch (a.data.getKey()) {
                                    case 13: case 33: case 34: case 35: case 36: case 37: case 39: case 8: case 45: case 46: f.hasFocus &&
                                        n(f)
                                }
                            }, null, null, -1); f.attachListener(f, "keydown", p(b), null, null, -1)
                }); b.on("setData", function () { b.unlockSelection(); CKEDITOR.env.webkit && c() }); b.on("contentDomUnload", function () { b.unlockSelection() }); if (CKEDITOR.env.ie9Compat) b.on("beforeDestroy", c, null, null, 9); b.on("dataReady", function () { delete b._.fakeSelection; delete b._.hiddenSelectionContainer; b.selectionChange(1) }); b.on("loadSnapshot", function () {
                    var a = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT), c = b.editable().getLast(a); c && c.hasAttribute("data-cke-hidden-sel") &&
                        (c.remove(), CKEDITOR.env.gecko && (a = b.editable().getFirst(a)) && a.is("br") && a.getAttribute("_moz_editor_bogus_node") && a.remove())
                }, null, null, 100); b.on("key", function (a) { if ("wysiwyg" == b.mode) { var c = b.getSelection(); if (c.isFake) { var d = B[a.data.keyCode]; if (d) return d({ editor: b, selected: c.getSelectedElement(), selection: c, keyEvent: a }) } } })
            }); if (CKEDITOR.env.webkit) CKEDITOR.on("instanceReady", function (a) {
                var c = a.editor; c.on("selectionChange", function () {
                    var a = c.editable(), b = a.getCustomData("cke-fillingChar");
                    b && (b.getCustomData("ready") ? (n(a), a.editor.fire("selectionCheck")) : b.setCustomData("ready", 1))
                }, null, null, -1); c.on("beforeSetMode", function () { n(c.editable()) }, null, null, -1); c.on("getSnapshot", function (a) { a.data && (a.data = r(a.data)) }, c, null, 20); c.on("toDataFormat", function (a) { a.data.dataValue = r(a.data.dataValue) }, null, null, 0)
            }); CKEDITOR.editor.prototype.selectionChange = function (a) { (a ? l : h).call(this) }; CKEDITOR.editor.prototype.getSelection = function (a) {
                return !this._.savedSelection && !this._.fakeSelection ||
                    a ? (a = this.editable()) && "wysiwyg" == this.mode ? new CKEDITOR.dom.selection(a) : null : this._.savedSelection || this._.fakeSelection
            }; CKEDITOR.editor.prototype.getSelectedRanges = function (a) { var c = this.getSelection(); return c && c.getRanges(a) || [] }; CKEDITOR.editor.prototype.lockSelection = function (a) { a = a || this.getSelection(1); return a.getType() != CKEDITOR.SELECTION_NONE ? (!a.isLocked && a.lock(), this._.savedSelection = a, !0) : !1 }; CKEDITOR.editor.prototype.unlockSelection = function (a) {
                var c = this._.savedSelection; return c ?
                    (c.unlock(a), delete this._.savedSelection, !0) : !1
            }; CKEDITOR.editor.prototype.forceNextSelectionCheck = function () { delete this._.selectionPreviousPath }; CKEDITOR.dom.document.prototype.getSelection = function () { return new CKEDITOR.dom.selection(this) }; CKEDITOR.dom.range.prototype.select = function () { var a = this.root instanceof CKEDITOR.editable ? this.root.editor.getSelection() : new CKEDITOR.dom.selection(this.root); a.selectRanges([this]); return a }; CKEDITOR.SELECTION_NONE = 1; CKEDITOR.SELECTION_TEXT = 2; CKEDITOR.SELECTION_ELEMENT =
                3; CKEDITOR.dom.selection = function (a) {
                    if (a instanceof CKEDITOR.dom.selection) { var c = a; a = a.root } var b = a instanceof CKEDITOR.dom.element; this.rev = c ? c.rev : y++; this.document = a instanceof CKEDITOR.dom.document ? a : a.getDocument(); this.root = b ? a : this.document.getBody(); this.isLocked = 0; this._ = { cache: {} }; if (c) return CKEDITOR.tools.extend(this._.cache, c._.cache), this.isFake = c.isFake, this.isLocked = c.isLocked, this; a = this.getNative(); var d, e; if (a) if (a.getRangeAt) d = (e = a.rangeCount && a.getRangeAt(0)) && new CKEDITOR.dom.node(e.commonAncestorContainer);
                    else { try { e = a.createRange() } catch (g) { } d = e && CKEDITOR.dom.element.get(e.item && e.item(0) || e.parentElement()) } if (!d || d.type != CKEDITOR.NODE_ELEMENT && d.type != CKEDITOR.NODE_TEXT || !this.root.equals(d) && !this.root.contains(d)) this._.cache.type = CKEDITOR.SELECTION_NONE, this._.cache.startElement = null, this._.cache.selectedElement = null, this._.cache.selectedText = "", this._.cache.ranges = new CKEDITOR.dom.rangeList; return this
                }; var F = {
                    img: 1, hr: 1, li: 1, table: 1, tr: 1, td: 1, th: 1, embed: 1, object: 1, ol: 1, ul: 1, a: 1, input: 1, form: 1,
                    select: 1, textarea: 1, button: 1, fieldset: 1, thead: 1, tfoot: 1
                }; CKEDITOR.tools.extend(CKEDITOR.dom.selection, { _removeFillingCharSequenceString: r, _createFillingCharSequenceNode: g, FILLING_CHAR_SEQUENCE: q }); CKEDITOR.dom.selection.prototype = {
                    getNative: function () { return void 0 !== this._.cache.nativeSel ? this._.cache.nativeSel : this._.cache.nativeSel = u ? this.document.$.selection : this.document.getWindow().$.getSelection() }, getType: u ? function () {
                        var a = this._.cache; if (a.type) return a.type; var c = CKEDITOR.SELECTION_NONE;
                        try { var b = this.getNative(), d = b.type; "Text" == d && (c = CKEDITOR.SELECTION_TEXT); "Control" == d && (c = CKEDITOR.SELECTION_ELEMENT); b.createRange().parentElement() && (c = CKEDITOR.SELECTION_TEXT) } catch (e) { } return a.type = c
                    } : function () {
                        var a = this._.cache; if (a.type) return a.type; var c = CKEDITOR.SELECTION_TEXT, b = this.getNative(); if (!b || !b.rangeCount) c = CKEDITOR.SELECTION_NONE; else if (1 == b.rangeCount) {
                            var b = b.getRangeAt(0), d = b.startContainer; d == b.endContainer && 1 == d.nodeType && 1 == b.endOffset - b.startOffset && F[d.childNodes[b.startOffset].nodeName.toLowerCase()] &&
                                (c = CKEDITOR.SELECTION_ELEMENT)
                        } return a.type = c
                    }, getRanges: function () {
                        var a = u ? function () {
                            function a(c) { return (new CKEDITOR.dom.node(c)).getIndex() } var c = function (c, b) {
                                c = c.duplicate(); c.collapse(b); var d = c.parentElement(); if (!d.hasChildNodes()) return { container: d, offset: 0 }; for (var e = d.children, g, k, h = c.duplicate(), f = 0, l = e.length - 1, m = -1, n, r; f <= l;)if (m = Math.floor((f + l) / 2), g = e[m], h.moveToElementText(g), n = h.compareEndPoints("StartToStart", c), 0 < n) l = m - 1; else if (0 > n) f = m + 1; else return { container: d, offset: a(g) };
                                if (-1 == m || m == e.length - 1 && 0 > n) { h.moveToElementText(d); h.setEndPoint("StartToStart", c); h = h.text.replace(/(\r\n|\r)/g, "\n").length; e = d.childNodes; if (!h) return g = e[e.length - 1], g.nodeType != CKEDITOR.NODE_TEXT ? { container: d, offset: e.length } : { container: g, offset: g.nodeValue.length }; for (d = e.length; 0 < h && 0 < d;)k = e[--d], k.nodeType == CKEDITOR.NODE_TEXT && (r = k, h -= k.nodeValue.length); return { container: r, offset: -h } } h.collapse(0 < n ? !0 : !1); h.setEndPoint(0 < n ? "StartToStart" : "EndToStart", c); h = h.text.replace(/(\r\n|\r)/g, "\n").length;
                                if (!h) return { container: d, offset: a(g) + (0 < n ? 0 : 1) }; for (; 0 < h;)try { k = g[0 < n ? "previousSibling" : "nextSibling"], k.nodeType == CKEDITOR.NODE_TEXT && (h -= k.nodeValue.length, r = k), g = k } catch (q) { return { container: d, offset: a(g) } } return { container: r, offset: 0 < n ? -h : r.nodeValue.length + h }
                            }; return function () {
                                var a = this.getNative(), b = a && a.createRange(), d = this.getType(); if (!a) return []; if (d == CKEDITOR.SELECTION_TEXT) return a = new CKEDITOR.dom.range(this.root), d = c(b, !0), a.setStart(new CKEDITOR.dom.node(d.container), d.offset), d = c(b),
                                    a.setEnd(new CKEDITOR.dom.node(d.container), d.offset), a.endContainer.getPosition(a.startContainer) & CKEDITOR.POSITION_PRECEDING && a.endOffset <= a.startContainer.getIndex() && a.collapse(), [a]; if (d == CKEDITOR.SELECTION_ELEMENT) { for (var d = [], e = 0; e < b.length; e++) { for (var g = b.item(e), k = g.parentNode, h = 0, a = new CKEDITOR.dom.range(this.root); h < k.childNodes.length && k.childNodes[h] != g; h++); a.setStart(new CKEDITOR.dom.node(k), h); a.setEnd(new CKEDITOR.dom.node(k), h + 1); d.push(a) } return d } return []
                            }
                        }() : function () {
                            var a =
                                [], c, b = this.getNative(); if (!b) return a; for (var d = 0; d < b.rangeCount; d++) { var e = b.getRangeAt(d); c = new CKEDITOR.dom.range(this.root); c.setStart(new CKEDITOR.dom.node(e.startContainer), e.startOffset); c.setEnd(new CKEDITOR.dom.node(e.endContainer), e.endOffset); a.push(c) } return a
                        }; return function (c) { var b = this._.cache, d = b.ranges; d || (b.ranges = d = new CKEDITOR.dom.rangeList(a.call(this))); return c ? t(new CKEDITOR.dom.rangeList(d.slice())) : d }
                    }(), getStartElement: function () {
                        var a = this._.cache; if (void 0 !== a.startElement) return a.startElement;
                        var c; switch (this.getType()) {
                            case CKEDITOR.SELECTION_ELEMENT: return this.getSelectedElement(); case CKEDITOR.SELECTION_TEXT: var b = this.getRanges()[0]; if (b) {
                                if (b.collapsed) c = b.startContainer, c.type != CKEDITOR.NODE_ELEMENT && (c = c.getParent()); else {
                                    for (b.optimize(); c = b.startContainer, b.startOffset == (c.getChildCount ? c.getChildCount() : c.getLength()) && !c.isBlockBoundary();)b.setStartAfter(c); c = b.startContainer; if (c.type != CKEDITOR.NODE_ELEMENT) return c.getParent(); if ((c = c.getChild(b.startOffset)) && c.type ==
                                        CKEDITOR.NODE_ELEMENT) for (b = c.getFirst(); b && b.type == CKEDITOR.NODE_ELEMENT;)c = b, b = b.getFirst(); else c = b.startContainer
                                } c = c.$
                            }
                        }return a.startElement = c ? new CKEDITOR.dom.element(c) : null
                    }, getSelectedElement: function () {
                        var a = this._.cache; if (void 0 !== a.selectedElement) return a.selectedElement; var c = this, b = CKEDITOR.tools.tryThese(function () { return c.getNative().createRange().item(0) }, function () {
                            for (var a = c.getRanges()[0].clone(), b, d, e = 2; e && !((b = a.getEnclosedNode()) && b.type == CKEDITOR.NODE_ELEMENT && F[b.getName()] &&
                                (d = b)); e--)a.shrink(CKEDITOR.SHRINK_ELEMENT); return d && d.$
                        }); return a.selectedElement = b ? new CKEDITOR.dom.element(b) : null
                    }, getSelectedText: function () { var a = this._.cache; if (void 0 !== a.selectedText) return a.selectedText; var c = this.getNative(), c = u ? "Control" == c.type ? "" : c.createRange().text : c.toString(); return a.selectedText = c }, lock: function () { this.getRanges(); this.getStartElement(); this.getSelectedElement(); this.getSelectedText(); this._.cache.nativeSel = null; this.isLocked = 1 }, unlock: function (a) {
                        if (this.isLocked) {
                            if (a) var c =
                                this.getSelectedElement(), b = this.getRanges(), e = this.isFake; this.isLocked = 0; this.reset(); a && (a = c || b[0] && b[0].getCommonAncestor()) && a.getAscendant("body", 1) && ((a = this.root.editor) && a.plugins.tableselection && a.plugins.tableselection.isSupportedEnvironment(a) && f(b) ? d.call(this, b) : e ? this.fake(c) : c && 2 > b.length ? this.selectElement(c) : this.selectRanges(b))
                        }
                    }, reset: function () {
                        this._.cache = {}; this.isFake = 0; var a = this.root.editor; if (a && a._.fakeSelection) if (this.rev == a._.fakeSelection.rev) {
                            delete a._.fakeSelection;
                            var c = a._.hiddenSelectionContainer; if (c) { var b = a.checkDirty(); a.fire("lockSnapshot"); c.remove(); a.fire("unlockSnapshot"); !b && a.resetDirty() } delete a._.hiddenSelectionContainer
                        } else CKEDITOR.warn("selection-fake-reset"); this.rev = y++
                    }, selectElement: function (a) { var c = new CKEDITOR.dom.range(this.root); c.setStartBefore(a); c.setEndAfter(a); this.selectRanges([c]) }, selectRanges: function (a) {
                        var c = this.root.editor, b = c && c._.hiddenSelectionContainer; this.reset(); if (b) for (var b = this.root, e, h = 0; h < a.length; ++h)e =
                            a[h], e.endContainer.equals(b) && (e.endOffset = Math.min(e.endOffset, b.getChildCount())); if (a.length) if (this.isLocked) { var l = CKEDITOR.document.getActive(); this.unlock(); this.selectRanges(a); this.lock(); l && !l.equals(this.root) && l.focus() } else {
                                var m; a: {
                                    var r, H; if (1 == a.length && !(H = a[0]).collapsed && (m = H.getEnclosedNode()) && m.type == CKEDITOR.NODE_ELEMENT && (H = H.clone(), H.shrink(CKEDITOR.SHRINK_ELEMENT, !0), (r = H.getEnclosedNode()) && r.type == CKEDITOR.NODE_ELEMENT && (m = r), "false" == m.getAttribute("contenteditable"))) break a;
                                    m = void 0
                                } if (m) this.fake(m); else if (c && c.plugins.tableselection && c.plugins.tableselection.isSupportedEnvironment(c) && f(a) && !v && !a[0]._getTableElement({ table: 1 }).hasAttribute("data-cke-tableselection-ignored")) d.call(this, a); else {
                                    if (u) {
                                        r = CKEDITOR.dom.walker.whitespaces(!0); m = /\ufeff|\u00a0/; H = { table: 1, tbody: 1, tr: 1 }; 1 < a.length && (c = a[a.length - 1], a[0].setEnd(c.endContainer, c.endOffset)); c = a[0]; a = c.collapsed; var q, y, x; if ((b = c.getEnclosedNode()) && b.type == CKEDITOR.NODE_ELEMENT && b.getName() in F && (!b.is("a") ||
                                            !b.getText())) try { x = b.$.createControlRange(); x.addElement(b.$); x.select(); return } catch (t) { } if (c.startContainer.type == CKEDITOR.NODE_ELEMENT && c.startContainer.getName() in H || c.endContainer.type == CKEDITOR.NODE_ELEMENT && c.endContainer.getName() in H) c.shrink(CKEDITOR.NODE_ELEMENT, !0), a = c.collapsed; x = c.createBookmark(); H = x.startNode; a || (l = x.endNode); x = c.document.$.body.createTextRange(); x.moveToElementText(H.$); x.moveStart("character", 1); l ? (m = c.document.$.body.createTextRange(), m.moveToElementText(l.$),
                                                x.setEndPoint("EndToEnd", m), x.moveEnd("character", -1)) : (q = H.getNext(r), y = H.hasAscendant("pre"), q = !(q && q.getText && q.getText().match(m)) && (y || !H.hasPrevious() || H.getPrevious().is && H.getPrevious().is("br")), y = c.document.createElement("span"), y.setHtml("\x26#65279;"), y.insertBefore(H), q && c.document.createText("﻿").insertBefore(H)); c.setStartBefore(H); H.remove(); a ? (q ? (x.moveStart("character", -1), x.select(), c.document.$.selection.clear()) : x.select(), c.moveToPosition(y, CKEDITOR.POSITION_BEFORE_START), y.remove()) :
                                                    (c.setEndBefore(l), l.remove(), x.select())
                                    } else {
                                        l = this.getNative(); if (!l) return; this.removeAllRanges(); for (x = 0; x < a.length; x++) {
                                            if (x < a.length - 1 && (q = a[x], y = a[x + 1], m = q.clone(), m.setStart(q.endContainer, q.endOffset), m.setEnd(y.startContainer, y.startOffset), !m.collapsed && (m.shrink(CKEDITOR.NODE_ELEMENT, !0), c = m.getCommonAncestor(), m = m.getEnclosedNode(), c.isReadOnly() || m && m.isReadOnly()))) { y.setStart(q.startContainer, q.startOffset); a.splice(x--, 1); continue } c = a[x]; y = this.document.$.createRange(); c.collapsed &&
                                                CKEDITOR.env.webkit && k(c) && (m = g(this.root), c.insertNode(m), (q = m.getNext()) && !m.getPrevious() && q.type == CKEDITOR.NODE_ELEMENT && "br" == q.getName() ? (n(this.root), c.moveToPosition(q, CKEDITOR.POSITION_BEFORE_START)) : c.moveToPosition(m, CKEDITOR.POSITION_AFTER_END)); y.setStart(c.startContainer.$, c.startOffset); try { y.setEnd(c.endContainer.$, c.endOffset) } catch (w) { if (0 <= w.toString().indexOf("NS_ERROR_ILLEGAL_VALUE")) c.collapse(1), y.setEnd(c.endContainer.$, c.endOffset); else throw w; } l.addRange(y)
                                        }
                                    } this.reset();
                                    this.root.fire("selectionchange")
                                }
                            }
                    }, fake: function (a, c) { var b = this.root.editor; void 0 === c && a.hasAttribute("aria-label") && (c = a.getAttribute("aria-label")); this.reset(); w(b, c); var d = this._.cache, e = new CKEDITOR.dom.range(this.root); e.setStartBefore(a); e.setEndAfter(a); d.ranges = new CKEDITOR.dom.rangeList(e); d.selectedElement = d.startElement = a; d.type = CKEDITOR.SELECTION_ELEMENT; d.selectedText = d.nativeSel = null; this.isFake = 1; this.rev = y++; b._.fakeSelection = this; this.root.fire("selectionchange") }, isHidden: function () {
                        var a =
                            this.getCommonAncestor(); a && a.type == CKEDITOR.NODE_TEXT && (a = a.getParent()); return !(!a || !a.data("cke-hidden-sel"))
                    }, isInTable: function (a) { return f(this.getRanges(), a) }, isCollapsed: function () { var a = this.getRanges(); return 1 === a.length && a[0].collapsed }, createBookmarks: function (a) { a = this.getRanges().createBookmarks(a); this.isFake && (a.isFake = 1); return a }, createBookmarks2: function (a) { a = this.getRanges().createBookmarks2(a); this.isFake && (a.isFake = 1); return a }, selectBookmarks: function (a) {
                        for (var c = [], b, d = 0; d <
                            a.length; d++) { var e = new CKEDITOR.dom.range(this.root); e.moveToBookmark(a[d]); c.push(e) } a.isFake && (b = f(c) ? c[0]._getTableElement() : c[0].getEnclosedNode(), b && b.type == CKEDITOR.NODE_ELEMENT || (CKEDITOR.warn("selection-not-fake"), a.isFake = 0)); a.isFake && !f(c) ? this.fake(b) : this.selectRanges(c); return this
                    }, getCommonAncestor: function () { var a = this.getRanges(); return a.length ? a[0].startContainer.getCommonAncestor(a[a.length - 1].endContainer) : null }, scrollIntoView: function () {
                        this.getType() != CKEDITOR.SELECTION_NONE &&
                        this.getRanges()[0].scrollIntoView()
                    }, removeAllRanges: function () { if (this.getType() != CKEDITOR.SELECTION_NONE) { var a = this.getNative(); try { a && a[u ? "empty" : "removeAllRanges"]() } catch (c) { } this.reset() } }
                }
        }(), "use strict", CKEDITOR.STYLE_BLOCK = 1, CKEDITOR.STYLE_INLINE = 2, CKEDITOR.STYLE_OBJECT = 3, function () {
            function a(a, c) { for (var b, d; (a = a.getParent()) && !a.equals(c);)if (a.getAttribute("data-nostyle")) b = a; else if (!d) { var e = a.getAttribute("contentEditable"); "false" == e ? b = a : "true" == e && (d = 1) } return b } function f(a,
                c, b, d) { return (a.getPosition(c) | d) == d && (!b.childRule || b.childRule(a)) } function e(c) {
                    var b = c.document; if (c.collapsed) b = y(this, b), c.insertNode(b), c.moveToPosition(b, CKEDITOR.POSITION_BEFORE_END); else {
                        var g = this.element, k = this._.definition, h, l = k.ignoreReadonly, m = l || k.includeReadonly; null == m && (m = c.root.getCustomData("cke_includeReadonly")); var n = CKEDITOR.dtd[g]; n || (h = !0, n = CKEDITOR.dtd.span); c.enlarge(CKEDITOR.ENLARGE_INLINE, 1); c.trim(); var r = c.createBookmark(), q = r.startNode, u = r.endNode, x = q, v; if (!l) {
                            var t =
                                c.getCommonAncestor(), l = a(q, t), t = a(u, t); l && (x = l.getNextSourceNode(!0)); t && (u = t)
                        } for (x.getPosition(u) == CKEDITOR.POSITION_FOLLOWING && (x = 0); x;) {
                            l = !1; if (x.equals(u)) x = null, l = !0; else {
                                var w = x.type == CKEDITOR.NODE_ELEMENT ? x.getName() : null, t = w && "false" == x.getAttribute("contentEditable"), A = w && -1 !== CKEDITOR.tools.array.indexOf(CKEDITOR.style.unstylableElements, w), A = w && (x.getAttribute("data-nostyle") || A); if (w && x.data("cke-bookmark") || x.type === CKEDITOR.NODE_COMMENT) { x = x.getNextSourceNode(!0); continue } if (t && m &&
                                    CKEDITOR.dtd.$block[w]) for (var z = x, D = d(z), F = void 0, G = D.length, Q = 0, z = G && new CKEDITOR.dom.range(z.getDocument()); Q < G; ++Q) { var F = D[Q], da = CKEDITOR.filter.instances[F.data("cke-filter")]; if (da ? da.check(this) : 1) z.selectNodeContents(F), e.call(this, z) } D = w ? !n[w] || A ? 0 : t && !m ? 0 : f(x, u, k, O) : 1; if (D) if (F = x.getParent(), D = k, G = g, Q = h, !F || !(F.getDtd() || CKEDITOR.dtd.span)[G] && !Q || D.parentRule && !D.parentRule(F)) l = !0; else {
                                        if (v || w && CKEDITOR.dtd.$removeEmpty[w] && (x.getPosition(u) | O) != O || (v = c.clone(), v.setStartBefore(x)), w =
                                            x.type, w == CKEDITOR.NODE_TEXT || t || w == CKEDITOR.NODE_ELEMENT && !x.getChildCount()) { for (var w = x, ga; (l = !w.getNext(M)) && (ga = w.getParent(), n[ga.getName()]) && f(ga, q, k, J);)w = ga; v.setEndAfter(w) }
                                    } else l = !0; x = x.getNextSourceNode(A || t)
                            } if (l && v && !v.collapsed) {
                                for (var l = y(this, b), t = l.hasAttributes(), A = v.getCommonAncestor(), w = {}, D = {}, F = {}, G = {}, fa, B, E; l && A;) {
                                    if (A.getName() == g) {
                                        for (fa in k.attributes) !G[fa] && (E = A.getAttribute(B)) && (l.getAttribute(fa) == E ? D[fa] = 1 : G[fa] = 1); for (B in k.styles) !F[B] && (E = A.getStyle(B)) &&
                                            (l.getStyle(B) == E ? w[B] = 1 : F[B] = 1)
                                    } A = A.getParent()
                                } for (fa in D) l.removeAttribute(fa); for (B in w) l.removeStyle(B); t && !l.hasAttributes() && (l = null); l ? (v.extractContents().appendTo(l), v.insertNode(l), p.call(this, l), l.mergeSiblings(), CKEDITOR.env.ie || l.$.normalize()) : (l = new CKEDITOR.dom.element("span"), v.extractContents().appendTo(l), v.insertNode(l), p.call(this, l), l.remove(!0)); v = null
                            }
                        } c.moveToBookmark(r); c.shrink(CKEDITOR.SHRINK_TEXT); c.shrink(CKEDITOR.NODE_ELEMENT, !0)
                    }
                } function b(a) {
                    function c() {
                        for (var a =
                            new CKEDITOR.dom.elementPath(d.getParent()), b = new CKEDITOR.dom.elementPath(m.getParent()), e = null, g = null, k = 0; k < a.elements.length; k++) { var h = a.elements[k]; if (h == a.block || h == a.blockLimit) break; n.checkElementRemovable(h, !0) && (e = h) } for (k = 0; k < b.elements.length; k++) { h = b.elements[k]; if (h == b.block || h == b.blockLimit) break; n.checkElementRemovable(h, !0) && (g = h) } g && m.breakParent(g); e && d.breakParent(e)
                    } a.enlarge(CKEDITOR.ENLARGE_INLINE, 1); var b = a.createBookmark(), d = b.startNode, e = this._.definition.alwaysRemoveElement;
                    if (a.collapsed) {
                        for (var g = new CKEDITOR.dom.elementPath(d.getParent(), a.root), k, h = 0, f; h < g.elements.length && (f = g.elements[h]) && f != g.block && f != g.blockLimit; h++)if (this.checkElementRemovable(f)) { var l; !e && a.collapsed && (a.checkBoundaryOfElement(f, CKEDITOR.END) || (l = a.checkBoundaryOfElement(f, CKEDITOR.START))) ? (k = f, k.match = l ? "start" : "end") : (f.mergeSiblings(), f.is(this.element) ? w.call(this, f) : t(f, v(this)[f.getName()])) } if (k) {
                            e = d; for (h = 0; ; h++) {
                                f = g.elements[h]; if (f.equals(k)) break; else if (f.match) continue;
                                else f = f.clone(); f.append(e); e = f
                            } e["start" == k.match ? "insertBefore" : "insertAfter"](k)
                        }
                    } else { var m = b.endNode, n = this; c(); for (g = d; !g.equals(m);)k = g.getNextSourceNode(), g.type == CKEDITOR.NODE_ELEMENT && this.checkElementRemovable(g) && (g.getName() == this.element ? w.call(this, g) : t(g, v(this)[g.getName()]), k.type == CKEDITOR.NODE_ELEMENT && k.contains(d) && (c(), k = d.getNext())), g = k } a.moveToBookmark(b); a.shrink(CKEDITOR.NODE_ELEMENT, !0)
                } function d(a) {
                    var c = []; a.forEach(function (a) {
                        if ("true" == a.getAttribute("contenteditable")) return c.push(a),
                            !1
                    }, CKEDITOR.NODE_ELEMENT, !0); return c
                } function l(a) { var c = a.getEnclosedNode() || a.getCommonAncestor(!1, !0); (a = (new CKEDITOR.dom.elementPath(c, a.root)).contains(this.element, 1)) && !a.isReadOnly() && q(a, this) } function h(a) { var c = a.getCommonAncestor(!0, !0); if (a = (new CKEDITOR.dom.elementPath(c, a.root)).contains(this.element, 1)) { var c = this._.definition, b = c.attributes; if (b) for (var d in b) a.removeAttribute(d, b[d]); if (c.styles) for (var e in c.styles) c.styles.hasOwnProperty(e) && a.removeStyle(e) } } function m(a) {
                    var c =
                        a.createBookmark(!0), b = a.createIterator(); b.enforceRealBlocks = !0; this._.enterMode && (b.enlargeBr = this._.enterMode != CKEDITOR.ENTER_BR); for (var d, e = a.document, g; d = b.getNextParagraph();)!d.isReadOnly() && (b.activeFilter ? b.activeFilter.check(this) : 1) && (g = y(this, e, d), k(d, g)); a.moveToBookmark(c)
                } function c(a) {
                    var c = a.createBookmark(1), b = a.createIterator(); b.enforceRealBlocks = !0; b.enlargeBr = this._.enterMode != CKEDITOR.ENTER_BR; for (var d, e; d = b.getNextParagraph();)this.checkElementRemovable(d) && (d.is("pre") ?
                        ((e = this._.enterMode == CKEDITOR.ENTER_BR ? null : a.document.createElement(this._.enterMode == CKEDITOR.ENTER_P ? "p" : "div")) && d.copyAttributes(e), k(d, e)) : w.call(this, d)); a.moveToBookmark(c)
                } function k(a, c) {
                    var b = !c; b && (c = a.getDocument().createElement("div"), a.copyAttributes(c)); var d = c && c.is("pre"), e = a.is("pre"), k = !d && e; if (d && !e) {
                        e = c; (k = a.getBogus()) && k.remove(); k = a.getHtml(); k = n(k, /(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g, ""); k = k.replace(/[ \t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi, "$1"); k = k.replace(/([ \t\n\r]+|&nbsp;)/g,
                            " "); k = k.replace(/<br\b[^>]*>/gi, "\n"); if (CKEDITOR.env.ie) { var h = a.getDocument().createElement("div"); h.append(e); e.$.outerHTML = "\x3cpre\x3e" + k + "\x3c/pre\x3e"; e.copyAttributes(h.getFirst()); e = h.getFirst().remove() } else e.setHtml(k); c = e
                    } else k ? c = r(b ? [a.getHtml()] : g(a), c) : a.moveChildren(c); c.replace(a); if (d) {
                        var b = c, f; (f = b.getPrevious(C)) && f.type == CKEDITOR.NODE_ELEMENT && f.is("pre") && (d = n(f.getHtml(), /\n$/, "") + "\n\n" + n(b.getHtml(), /^\n/, ""), CKEDITOR.env.ie ? b.$.outerHTML = "\x3cpre\x3e" + d + "\x3c/pre\x3e" :
                            b.setHtml(d), f.remove())
                    } else b && u(c)
                } function g(a) { var c = []; n(a.getOuterHtml(), /(\S\s*)\n(?:\s|(<span[^>]+data-cke-bookmark.*?\/span>))*\n(?!$)/gi, function (a, c, b) { return c + "\x3c/pre\x3e" + b + "\x3cpre\x3e" }).replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi, function (a, b) { c.push(b) }); return c } function n(a, c, b) { var d = "", e = ""; a = a.replace(/(^<span[^>]+data-cke-bookmark.*?\/span>)|(<span[^>]+data-cke-bookmark.*?\/span>$)/gi, function (a, c, b) { c && (d = c); b && (e = b); return "" }); return d + a.replace(c, b) + e } function r(a, c) {
                    var b;
                    1 < a.length && (b = new CKEDITOR.dom.documentFragment(c.getDocument())); for (var d = 0; d < a.length; d++) {
                        var e = a[d], e = e.replace(/(\r\n|\r)/g, "\n"), e = n(e, /^[ \t]*\n/, ""), e = n(e, /\n$/, ""), e = n(e, /^[ \t]+|[ \t]+$/g, function (a, c) { return 1 == a.length ? "\x26nbsp;" : c ? " " + CKEDITOR.tools.repeat("\x26nbsp;", a.length - 1) : CKEDITOR.tools.repeat("\x26nbsp;", a.length - 1) + " " }), e = e.replace(/\n/g, "\x3cbr\x3e"), e = e.replace(/[ \t]{2,}/g, function (a) { return CKEDITOR.tools.repeat("\x26nbsp;", a.length - 1) + " " }); if (b) {
                            var g = c.clone(); g.setHtml(e);
                            b.append(g)
                        } else c.setHtml(e)
                    } return b || c
                } function w(a, c) {
                    var b = this._.definition, d = b.attributes, b = b.styles, e = v(this)[a.getName()], g = CKEDITOR.tools.isEmpty(d) && CKEDITOR.tools.isEmpty(b), k; for (k in d) if ("class" != k && !this._.definition.fullMatch || a.getAttribute(k) == z(k, d[k])) c && "data-" == k.slice(0, 5) || (g = a.hasAttribute(k), a.removeAttribute(k)); for (var h in b) this._.definition.fullMatch && a.getStyle(h) != z(h, b[h], !0) || (g = g || !!a.getStyle(h), a.removeStyle(h)); t(a, e, B[a.getName()]); g && (this._.definition.alwaysRemoveElement ?
                        u(a, 1) : !CKEDITOR.dtd.$block[a.getName()] || this._.enterMode == CKEDITOR.ENTER_BR && !a.hasAttributes() ? u(a) : a.renameNode(this._.enterMode == CKEDITOR.ENTER_P ? "p" : "div"))
                } function p(a) { for (var c = v(this), b = a.getElementsByTag(this.element), d, e = b.count(); 0 <= --e;)d = b.getItem(e), d.isReadOnly() || w.call(this, d, !0); for (var g in c) if (g != this.element) for (b = a.getElementsByTag(g), e = b.count() - 1; 0 <= e; e--)d = b.getItem(e), d.isReadOnly() || t(d, c[g]) } function t(a, c, b) {
                    if (c = c && c.attributes) for (var d = 0; d < c.length; d++) {
                        var e = c[d][0],
                        g; if (g = a.getAttribute(e)) { var k = c[d][1]; (null === k || k.test && k.test(g) || "string" == typeof k && g == k) && a.removeAttribute(e) }
                    } b || u(a)
                } function u(a, c) {
                    if (!a.hasAttributes() || c) if (CKEDITOR.dtd.$block[a.getName()]) { var b = a.getPrevious(C), d = a.getNext(C); !b || b.type != CKEDITOR.NODE_TEXT && b.isBlockBoundary({ br: 1 }) || a.append("br", 1); !d || d.type != CKEDITOR.NODE_TEXT && d.isBlockBoundary({ br: 1 }) || a.append("br"); a.remove(!0) } else b = a.getFirst(), d = a.getLast(), a.remove(!0), b && (b.type == CKEDITOR.NODE_ELEMENT && b.mergeSiblings(),
                        d && !b.equals(d) && d.type == CKEDITOR.NODE_ELEMENT && d.mergeSiblings())
                } function y(a, c, b) { var d; d = a.element; "*" == d && (d = "span"); d = new CKEDITOR.dom.element(d, c); b && b.copyAttributes(d); d = q(d, a); c.getCustomData("doc_processing_style") && d.hasAttribute("id") ? d.removeAttribute("id") : c.setCustomData("doc_processing_style", 1); return d } function q(a, c) {
                    var b = c._.definition, d = b.attributes, b = CKEDITOR.style.getStyleText(b); if (d) for (var e in d) a.setAttribute(e, d[e]); b && a.setAttribute("style", b); a.getDocument().removeCustomData("doc_processing_style");
                    return a
                } function A(a, c) { for (var b in a) a[b] = a[b].replace(L, function (a, b) { return c[b] }) } function v(a) { if (a._.overrides) return a._.overrides; var c = a._.overrides = {}, b = a._.definition.overrides; if (b) { CKEDITOR.tools.isArray(b) || (b = [b]); for (var d = 0; d < b.length; d++) { var e = b[d], g, k; "string" == typeof e ? g = e.toLowerCase() : (g = e.element ? e.element.toLowerCase() : a.element, k = e.attributes); e = c[g] || (c[g] = {}); if (k) { var e = e.attributes = e.attributes || [], h; for (h in k) e.push([h.toLowerCase(), k[h]]) } } } return c } function z(a,
                    c, b) { var d = new CKEDITOR.dom.element("span"); d[b ? "setStyle" : "setAttribute"](a, c); return d[b ? "getStyle" : "getAttribute"](a) } function x(a, c) { function b(a, c) { return "font-family" == c.toLowerCase() ? a.replace(/["']/g, "") : a } "string" == typeof a && (a = CKEDITOR.tools.parseCssText(a)); "string" == typeof c && (c = CKEDITOR.tools.parseCssText(c, !0)); for (var d in a) if (!(d in c) || b(c[d], d) != b(a[d], d) && "inherit" != a[d] && "inherit" != c[d]) return !1; return !0 } function D(a, c, b) {
                        var d = a.getRanges(); c = c ? this.removeFromRange : this.applyToRange;
                        for (var e, g = d.createIterator(); e = g.getNextRange();)c.call(this, e, b); a.selectRanges(d)
                    } var B = { address: 1, div: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, p: 1, pre: 1, section: 1, header: 1, footer: 1, nav: 1, article: 1, aside: 1, figure: 1, dialog: 1, hgroup: 1, time: 1, meter: 1, menu: 1, command: 1, keygen: 1, output: 1, progress: 1, details: 1, datagrid: 1, datalist: 1 }, F = { a: 1, blockquote: 1, embed: 1, hr: 1, img: 1, li: 1, object: 1, ol: 1, table: 1, td: 1, tr: 1, th: 1, ul: 1, dl: 1, dt: 1, dd: 1, form: 1, audio: 1, video: 1 }, E = /\s*(?:;\s*|$)/, L = /#\((.+?)\)/g, M = CKEDITOR.dom.walker.bookmark(0,
                        1), C = CKEDITOR.dom.walker.whitespaces(1); CKEDITOR.style = function (a, c) {
                            if ("string" == typeof a.type) return new CKEDITOR.style.customHandlers[a.type](a); var b = a.attributes; b && b.style && (a.styles = CKEDITOR.tools.extend({}, a.styles, CKEDITOR.tools.parseCssText(b.style)), delete b.style); c && (a = CKEDITOR.tools.clone(a), A(a.attributes, c), A(a.styles, c)); b = this.element = a.element ? "string" == typeof a.element ? a.element.toLowerCase() : a.element : "*"; this.type = a.type || (B[b] ? CKEDITOR.STYLE_BLOCK : F[b] ? CKEDITOR.STYLE_OBJECT :
                                CKEDITOR.STYLE_INLINE); "object" == typeof this.element && (this.type = CKEDITOR.STYLE_OBJECT); this._ = { definition: a }
                        }; CKEDITOR.style.prototype = {
                            apply: function (a) { if (a instanceof CKEDITOR.dom.document) return D.call(this, a.getSelection()); if (this.checkApplicable(a.elementPath(), a)) { var c = this._.enterMode; c || (this._.enterMode = a.activeEnterMode); D.call(this, a.getSelection(), 0, a); this._.enterMode = c } }, remove: function (a) {
                                if (a instanceof CKEDITOR.dom.document) return D.call(this, a.getSelection(), 1); if (this.checkApplicable(a.elementPath(),
                                    a)) { var c = this._.enterMode; c || (this._.enterMode = a.activeEnterMode); D.call(this, a.getSelection(), 1, a); this._.enterMode = c }
                            }, applyToRange: function (a) { this.applyToRange = this.type == CKEDITOR.STYLE_INLINE ? e : this.type == CKEDITOR.STYLE_BLOCK ? m : this.type == CKEDITOR.STYLE_OBJECT ? l : null; return this.applyToRange(a) }, removeFromRange: function (a) { this.removeFromRange = this.type == CKEDITOR.STYLE_INLINE ? b : this.type == CKEDITOR.STYLE_BLOCK ? c : this.type == CKEDITOR.STYLE_OBJECT ? h : null; return this.removeFromRange(a) }, applyToObject: function (a) {
                                q(a,
                                    this)
                            }, checkActive: function (a, c) { switch (this.type) { case CKEDITOR.STYLE_BLOCK: return this.checkElementRemovable(a.block || a.blockLimit, !0, c); case CKEDITOR.STYLE_OBJECT: case CKEDITOR.STYLE_INLINE: for (var b = a.elements, d = 0, e; d < b.length; d++)if (e = b[d], this.type != CKEDITOR.STYLE_INLINE || e != a.block && e != a.blockLimit) { if (this.type == CKEDITOR.STYLE_OBJECT) { var g = e.getName(); if (!("string" == typeof this.element ? g == this.element : g in this.element)) continue } if (this.checkElementRemovable(e, !0, c)) return !0 } }return !1 }, checkApplicable: function (a,
                                c, b) { c && c instanceof CKEDITOR.filter && (b = c); if (b && !b.check(this)) return !1; switch (this.type) { case CKEDITOR.STYLE_OBJECT: return !!a.contains(this.element); case CKEDITOR.STYLE_BLOCK: return !!a.blockLimit.getDtd()[this.element] }return !0 }, checkElementMatch: function (a, c) {
                                    var b = this._.definition; if (!a || !b.ignoreReadonly && a.isReadOnly()) return !1; var d = a.getName(); if ("string" == typeof this.element ? d == this.element : d in this.element) {
                                        if (!c && !a.hasAttributes()) return !0; if (d = b._AC) b = d; else {
                                            var d = {}, e = 0, g = b.attributes;
                                            if (g) for (var k in g) e++, d[k] = g[k]; if (k = CKEDITOR.style.getStyleText(b)) d.style || e++, d.style = k; d._length = e; b = b._AC = d
                                        } if (b._length) { for (var h in b) if ("_length" != h) if (d = a.getAttribute(h) || "", "style" == h ? x(b[h], d) : b[h] == d) { if (!c) return !0 } else if (c) return !1; if (c) return !0 } else return !0
                                    } return !1
                                }, checkElementRemovable: function (a, c, b) {
                                    if (this.checkElementMatch(a, c, b)) return !0; if (c = v(this)[a.getName()]) {
                                        var d; if (!(c = c.attributes)) return !0; for (b = 0; b < c.length; b++)if (d = c[b][0], d = a.getAttribute(d)) {
                                            var e = c[b][1];
                                            if (null === e) return !0; if ("string" == typeof e) { if (d == e) return !0 } else if (e.test(d)) return !0
                                        }
                                    } return !1
                                }, buildPreview: function (a) { var c = this._.definition, b = [], d = c.element; "bdo" == d && (d = "span"); var b = ["\x3c", d], e = c.attributes; if (e) for (var g in e) b.push(" ", g, '\x3d"', e[g], '"'); (e = CKEDITOR.style.getStyleText(c)) && b.push(' style\x3d"', e, '"'); b.push("\x3e", a || c.name, "\x3c/", d, "\x3e"); return b.join("") }, getDefinition: function () { return this._.definition }
                        }; CKEDITOR.style.getStyleText = function (a) {
                            var c = a._ST; if (c) return c;
                            var c = a.styles, b = a.attributes && a.attributes.style || "", d = ""; b.length && (b = b.replace(E, ";")); for (var e in c) { var g = c[e], k = (e + ":" + g).replace(E, ";"); "inherit" == g ? d += k : b += k } b.length && (b = CKEDITOR.tools.normalizeCssText(b, !0)); return a._ST = b + d
                        }; CKEDITOR.style.customHandlers = {}; CKEDITOR.style.unstylableElements = []; CKEDITOR.style.addCustomHandler = function (a) {
                            var c = function (a) { this._ = { definition: a }; this.setup && this.setup(a) }; c.prototype = CKEDITOR.tools.extend(CKEDITOR.tools.prototypedCopy(CKEDITOR.style.prototype),
                                { assignedTo: CKEDITOR.STYLE_OBJECT }, a, !0); return this.customHandlers[a.type] = c
                        }; var O = CKEDITOR.POSITION_PRECEDING | CKEDITOR.POSITION_IDENTICAL | CKEDITOR.POSITION_IS_CONTAINED, J = CKEDITOR.POSITION_FOLLOWING | CKEDITOR.POSITION_IDENTICAL | CKEDITOR.POSITION_IS_CONTAINED
        }(), CKEDITOR.styleCommand = function (a, f) { this.requiredContent = this.allowedContent = this.style = a; CKEDITOR.tools.extend(this, f, !0) }, CKEDITOR.styleCommand.prototype.exec = function (a) {
            a.focus(); this.state == CKEDITOR.TRISTATE_OFF ? a.applyStyle(this.style) :
                this.state == CKEDITOR.TRISTATE_ON && a.removeStyle(this.style)
        }, CKEDITOR.stylesSet = new CKEDITOR.resourceManager("", "stylesSet"), CKEDITOR.addStylesSet = CKEDITOR.tools.bind(CKEDITOR.stylesSet.add, CKEDITOR.stylesSet), CKEDITOR.loadStylesSet = function (a, f, e) { CKEDITOR.stylesSet.addExternal(a, f, ""); CKEDITOR.stylesSet.load(a, e) }, CKEDITOR.tools.extend(CKEDITOR.editor.prototype, {
            attachStyleStateChange: function (a, f) {
                var e = this._.styleStateChangeCallbacks; e || (e = this._.styleStateChangeCallbacks = [], this.on("selectionChange",
                    function (a) { for (var d = 0; d < e.length; d++) { var f = e[d], h = f.style.checkActive(a.data.path, this) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF; f.fn.call(this, h) } })); e.push({ style: a, fn: f })
            }, applyStyle: function (a) { a.apply(this) }, removeStyle: function (a) { a.remove(this) }, getStylesSet: function (a) {
                if (this._.stylesDefinitions) a(this._.stylesDefinitions); else {
                    var f = this, e = f.config.stylesCombo_stylesSet || f.config.stylesSet; if (!1 === e) a(null); else if (e instanceof Array) f._.stylesDefinitions = e, a(e); else {
                        e || (e = "default");
                        var e = e.split(":"), b = e[0]; CKEDITOR.stylesSet.addExternal(b, e[1] ? e.slice(1).join(":") : CKEDITOR.getUrl("styles.js"), ""); CKEDITOR.stylesSet.load(b, function (d) { f._.stylesDefinitions = d[b]; a(f._.stylesDefinitions) })
                    }
                }
            }
        }), function () {
            if (window.Promise) CKEDITOR.tools.promise = Promise; else {
                var a = CKEDITOR.getUrl("vendor/promise.js"); if ("function" === typeof window.define && window.define.amd && "function" === typeof window.require) return window.require([a], function (a) { CKEDITOR.tools.promise = a }); CKEDITOR.scriptLoader.load(a,
                    function (f) { if (!f) return CKEDITOR.error("no-vendor-lib", { path: a }); if ("undefined" !== typeof window.ES6Promise) return CKEDITOR.tools.promise = ES6Promise })
            }
        }(), function () {
            function a(a, d, l) { a.once("selectionCheck", function (a) { if (!f) { var b = a.data.getRanges()[0]; l.equals(b) ? a.cancel() : d.equals(b) && (e = !0) } }, null, null, -1) } var f = !0, e = !1; CKEDITOR.dom.selection.setupEditorOptimization = function (a) {
                a.on("selectionCheck", function (a) { a.data && !e && a.data.optimizeInElementEnds(); e = !1 }); a.on("contentDom", function () {
                    var d =
                        a.editable(); d && (d.attachListener(d, "keydown", function (a) { this._.shiftPressed = a.data.$.shiftKey }, this), d.attachListener(d, "keyup", function (a) { this._.shiftPressed = a.data.$.shiftKey }, this))
                })
            }; CKEDITOR.dom.selection.prototype.optimizeInElementEnds = function () {
                var b = this.getRanges()[0], d = this.root.editor, e; if (this.root.editor._.shiftPressed || this.isFake || b.isCollapsed || b.startContainer.equals(b.endContainer)) e = !1; else if (0 === b.endOffset) e = !0; else {
                    e = b.startContainer.type === CKEDITOR.NODE_TEXT; var h = b.endContainer.type ===
                        CKEDITOR.NODE_TEXT, m = e ? b.startContainer.getLength() : b.startContainer.getChildCount(); e = b.startOffset === m || e ^ h
                } e && (e = b.clone(), b.shrink(CKEDITOR.SHRINK_TEXT, !1, { skipBogus: !CKEDITOR.env.webkit }), f = !1, a(d, b, e), b.select(), f = !0)
            }
        }(), function () {
            function a(a, b) { e(a) ? a = Math.round(b * (parseFloat(a) / 100)) : "string" === typeof a && a.match(/^\d+$/gm) && (a = parseInt(a, 10)); return a } function f(a, b) { e(a) ? a = b * (parseFloat(a) / 100) : "string" === typeof a && a.match(/^\d?\.\d+/gm) && (a = parseFloat(a)); return a } function e(a) {
                return "string" ===
                    typeof a && a.match(/^((\d*\.\d+)|(\d+))%{1}$/gm)
            } function b(a, b, d) { return !isNaN(a) && a >= b && a <= d } function d(a) { a = a.toString(16); return 1 == a.length ? "0" + a : a } CKEDITOR.tools.color = CKEDITOR.tools.createClass({
                $: function (a, b) { this._.initialColorCode = a; this._.defaultValue = b; this._.parseInput(a) }, proto: {
                    getHex: function () { if (!this._.isValidColor) return this._.defaultValue; var a = this._.blendAlphaColor(this._.red, this._.green, this._.blue, this._.alpha); return this._.formatHexString(a[0], a[1], a[2]) }, getHexWithAlpha: function () {
                        if (!this._.isValidColor) return this._.defaultValue;
                        var a = Math.round(this._.alpha * CKEDITOR.tools.color.MAX_RGB_CHANNEL_VALUE); return this._.formatHexString(this._.red, this._.green, this._.blue, a)
                    }, getRgb: function () { if (!this._.isValidColor) return this._.defaultValue; var a = this._.blendAlphaColor(this._.red, this._.green, this._.blue, this._.alpha); return this._.formatRgbString("rgb", a[0], a[1], a[2]) }, getRgba: function () { return this._.isValidColor ? this._.formatRgbString("rgba", this._.red, this._.green, this._.blue, this._.alpha) : this._.defaultValue }, getHsl: function () {
                        if (!this._.isValidColor) return this._.defaultValue;
                        var a = this._.blendAlphaColor(this._.red, this._.green, this._.blue, this._.alpha), a = this._.rgbToHsl(a[0], a[1], a[2]); return this._.formatHslString("hsl", a[0], a[1], a[2])
                    }, getHsla: function () { if (!this._.isValidColor) return this._.defaultValue; var a = this._.rgbToHsl(this._.red, this._.green, this._.blue); return this._.formatHslString("hsla", a[0], a[1], a[2], this._.alpha) }, getInitialValue: function () { return this._.initialColorCode }
                }, _: {
                    initialColorCode: "", isValidColor: !0, red: 0, green: 0, blue: 0, alpha: 1, blendAlphaColor: function (a,
                        b, d, c) { return CKEDITOR.tools.array.map([a, b, d], function (a) { return Math.round(CKEDITOR.tools.color.MAX_RGB_CHANNEL_VALUE - c * (CKEDITOR.tools.color.MAX_RGB_CHANNEL_VALUE - a)) }) }, formatHexString: function (a, b, e, c) { a = "#" + d(a) + d(b) + d(e); void 0 !== c && (a += d(c)); return a.toUpperCase() }, formatRgbString: function (a, b, d, c, e) { b = [b, d, c]; void 0 !== e && b.push(e); return a + "(" + b.join(",") + ")" }, formatHslString: function (a, b, d, c, e) { return a + "(" + b + "," + d + "%," + c + "%" + (void 0 !== e ? "," + e : "") + ")" }, parseInput: function (a) {
                            if ("string" !==
                                typeof a) this._.isValidColor = !1; else { a = CKEDITOR.tools.trim(a); var b = this._.matchStringToNamedColor(a); b && (a = b); var b = this._.extractColorChannelsFromHex(a), d = this._.extractColorChannelsFromRgba(a); a = this._.extractColorChannelsFromHsla(a); (a = b || d || a) ? (this._.red = a[0], this._.green = a[1], this._.blue = a[2], this._.alpha = a[3]) : this._.isValidColor = !1 }
                        }, matchStringToNamedColor: function (a) { return CKEDITOR.tools.color.namedColors[a.toLowerCase()] || null }, extractColorChannelsFromHex: function (a) {
                            a.match(CKEDITOR.tools.color.hex3CharsRegExp) &&
                            (a = this._.hex3ToHex6(a)); if (!a.match(CKEDITOR.tools.color.hex6CharsRegExp) && !a.match(CKEDITOR.tools.color.hex8CharsRegExp)) return null; a = a.split(""); var b = 1; a[7] && a[8] && (b = parseInt(a[7] + a[8], 16), b /= CKEDITOR.tools.color.MAX_RGB_CHANNEL_VALUE, b = Number(b.toFixed(1))); return [parseInt(a[1] + a[2], 16), parseInt(a[3] + a[4], 16), parseInt(a[5] + a[6], 16), b]
                        }, extractColorChannelsFromRgba: function (b) {
                            var d = this._.extractColorChannelsByPattern(b, CKEDITOR.tools.color.rgbRegExp); if (!d || (b = 0 === b.indexOf("rgba")) && 4 !==
                                d.length || !b && 3 !== d.length) return null; var e = a(d[0], CKEDITOR.tools.color.MAX_RGB_CHANNEL_VALUE), c = a(d[1], CKEDITOR.tools.color.MAX_RGB_CHANNEL_VALUE), k = a(d[2], CKEDITOR.tools.color.MAX_RGB_CHANNEL_VALUE), g = 1; b && (g = f(d[3], CKEDITOR.tools.color.MAX_ALPHA_CHANNEL_VALUE)); return this._.areColorChannelsValid(e, c, k, g) ? [e, c, k, g] : null
                        }, extractColorChannelsFromHsla: function (b) {
                            var d = this._.extractColorChannelsByPattern(b, CKEDITOR.tools.color.hslRegExp); if (!d || (b = 0 === b.indexOf("hsla")) && 4 !== d.length || !b && 3 !==
                                d.length) return null; var e = a(d[0], CKEDITOR.tools.color.MAX_HUE_CHANNEL_VALUE), c = f(d[1], CKEDITOR.tools.color.MAX_SATURATION_LIGHTNESS_CHANNEL_VALUE), k = f(d[2], CKEDITOR.tools.color.MAX_SATURATION_LIGHTNESS_CHANNEL_VALUE), g = 1, e = this._.hslToRgb(e, c, k); b && (g = f(d[3], CKEDITOR.tools.color.MAX_ALPHA_CHANNEL_VALUE)); e.push(g); return this._.areColorChannelsValid(e[0], e[1], e[2], e[3]) ? e : null
                        }, hex3ToHex6: function (a) { a = a.split(""); return "#" + a[1] + a[1] + a[2] + a[2] + a[3] + a[3] }, extractColorChannelsByPattern: function (a,
                            b) { var d = a.match(b); if (!d) return null; d = d[2].split(","); return d = CKEDITOR.tools.array.map(d, function (a) { return CKEDITOR.tools.trim(a) }) }, areColorChannelsValid: function (a, d, e, c) { return b(a, 0, CKEDITOR.tools.color.MAX_RGB_CHANNEL_VALUE) && b(d, 0, CKEDITOR.tools.color.MAX_RGB_CHANNEL_VALUE) && b(e, 0, CKEDITOR.tools.color.MAX_RGB_CHANNEL_VALUE) && b(c, 0, CKEDITOR.tools.color.MAX_ALPHA_CHANNEL_VALUE) }, hslToRgb: function (a, b, d) {
                                var c = function (c) {
                                    var e = (c + a / 30) % 12; c = b * Math.min(d, 1 - d); e = Math.min(e - 3, 9 - e, 1); e = Math.max(-1,
                                        e); return Math.round((d - c * e) * CKEDITOR.tools.color.MAX_RGB_CHANNEL_VALUE)
                                }; return [c(0), c(8), c(4)]
                            }, rgbToHsl: function (a, b, d) {
                                a /= CKEDITOR.tools.color.MAX_RGB_CHANNEL_VALUE; b /= CKEDITOR.tools.color.MAX_RGB_CHANNEL_VALUE; var c = d / CKEDITOR.tools.color.MAX_RGB_CHANNEL_VALUE, e = Math.max(a, b, c), g = Math.min(a, b, c); d = e - g; var f = 0; switch (e) { case a: f = (b - c) / d % 6; break; case b: f = (c - a) / d + 2; break; case c: f = (a - b) / d + 4 }a = 0 === d ? 0 : 60 * f; b = (e + g) / 2; e = 0; 1 !== b && 0 !== b && (e = d / (1 - Math.abs(2 * b - 1))); a = Math.round(a); e = 100 * Math.round(e); return [a,
                                    e, 100 * b]
                            }
                }, statics: {
                    MAX_RGB_CHANNEL_VALUE: 255, MAX_ALPHA_CHANNEL_VALUE: 1, MAX_HUE_CHANNEL_VALUE: 360, MAX_SATURATION_LIGHTNESS_CHANNEL_VALUE: 1, hex3CharsRegExp: /#([0-9a-f]{3}$)/gim, hex6CharsRegExp: /#([0-9a-f]{6}$)/gim, hex8CharsRegExp: /#([0-9a-f]{8}$)/gim, rgbRegExp: /(rgb[a]?)\(([.,\d\s%]*)\)/i, hslRegExp: /(hsl[a]?)\(([.,\d\s%]*)\)/i, namedColors: {
                        aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#00FFFF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000000", blanchedalmond: "#FFEBCD",
                        blue: "#0000FF", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#00FFFF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgreen: "#006400", darkgrey: "#A9A9A9", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F",
                        darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#FF00FF", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", green: "#008000", greenyellow: "#ADFF2F", grey: "#808080", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082",
                        ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgreen: "#90EE90", lightgrey: "#D3D3D3", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#00FF00", limegreen: "#32CD32", linen: "#FAF0E6",
                        magenta: "#FF00FF", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA",
                        palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#FF0000", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F",
                        steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", windowtext: "windowtext", wheat: "#F5DEB3", white: "#FFFFFF", whitesmoke: "#F5F5F5", yellow: "#FFFF00", yellowgreen: "#9ACD32"
                    }
                }
            }); CKEDITOR.tools.style.parse._colors = CKEDITOR.tools.color.namedColors
        }(), CKEDITOR.dom.comment = function (a, f) { "string" == typeof a && (a = (f ? f.$ : document).createComment(a)); CKEDITOR.dom.domObject.call(this, a) }, CKEDITOR.dom.comment.prototype = new CKEDITOR.dom.node, CKEDITOR.tools.extend(CKEDITOR.dom.comment.prototype,
            { type: CKEDITOR.NODE_COMMENT, getOuterHtml: function () { return "\x3c!--" + this.$.nodeValue + "--\x3e" } }), "use strict", function () {
                var a = {}, f = {}, e; for (e in CKEDITOR.dtd.$blockLimit) e in CKEDITOR.dtd.$list || (a[e] = 1); for (e in CKEDITOR.dtd.$block) e in CKEDITOR.dtd.$blockLimit || e in CKEDITOR.dtd.$empty || (f[e] = 1); CKEDITOR.dom.elementPath = function (b, d) {
                    var e = null, h = null, m = [], c = b, k; d = d || b.getDocument().getBody(); c || (c = d); do if (c.type == CKEDITOR.NODE_ELEMENT) {
                        m.push(c); if (!this.lastElement && (this.lastElement = c, c.is(CKEDITOR.dtd.$object) ||
                            "false" == c.getAttribute("contenteditable"))) continue; if (c.equals(d)) break; if (!h && (k = c.getName(), "true" == c.getAttribute("contenteditable") ? h = c : !e && f[k] && (e = c), a[k])) { if (k = !e && "div" == k) { a: { k = c.getChildren(); for (var g = 0, n = k.count(); g < n; g++) { var r = k.getItem(g); if (r.type == CKEDITOR.NODE_ELEMENT && CKEDITOR.dtd.$block[r.getName()]) { k = !0; break a } } k = !1 } k = !k } k ? e = c : h = c }
                    } while (c = c.getParent()); h || (h = d); this.block = e; this.blockLimit = h; this.root = d; this.elements = m
                }
            }(), CKEDITOR.dom.elementPath.prototype = {
                compare: function (a) {
                    var f =
                        this.elements; a = a && a.elements; if (!a || f.length != a.length) return !1; for (var e = 0; e < f.length; e++)if (!f[e].equals(a[e])) return !1; return !0
                }, contains: function (a, f, e) {
                    var b = 0, d; "string" == typeof a && (d = function (b) { return b.getName() == a }); a instanceof CKEDITOR.dom.element ? d = function (b) { return b.equals(a) } : CKEDITOR.tools.isArray(a) ? d = function (b) { return -1 < CKEDITOR.tools.indexOf(a, b.getName()) } : "function" == typeof a ? d = a : "object" == typeof a && (d = function (b) { return b.getName() in a }); var l = this.elements, h = l.length; f &&
                        (e ? b += 1 : --h); e && (l = Array.prototype.slice.call(l, 0), l.reverse()); for (; b < h; b++)if (d(l[b])) return l[b]; return null
                }, isContextFor: function (a) { var f; return a in CKEDITOR.dtd.$block ? (f = this.contains(CKEDITOR.dtd.$intermediate) || this.root.equals(this.block) && this.block || this.blockLimit, !!f.getDtd()[a]) : !0 }, direction: function () { return (this.block || this.blockLimit || this.root).getDirection(1) }
            }, CKEDITOR.dom.text = function (a, f) { "string" == typeof a && (a = (f ? f.$ : document).createTextNode(a)); this.$ = a }, CKEDITOR.dom.text.prototype =
        new CKEDITOR.dom.node, CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype, {
            type: CKEDITOR.NODE_TEXT, getLength: function () { return this.$.nodeValue.length }, getText: function () { return this.$.nodeValue }, setText: function (a) { this.$.nodeValue = a }, isEmpty: function (a) { var f = this.getText(); a && (f = CKEDITOR.tools.trim(f)); return !f || f === CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE }, split: function (a) {
                var f = this.$.parentNode, e = f.childNodes.length, b = this.getLength(), d = this.getDocument(), l = new CKEDITOR.dom.text(this.$.splitText(a),
                    d); f.childNodes.length == e && (a >= b ? (l = d.createText(""), l.insertAfter(this)) : (a = d.createText(""), a.insertAfter(l), a.remove())); return l
            }, substring: function (a, f) { return "number" != typeof f ? this.$.nodeValue.substr(a) : this.$.nodeValue.substring(a, f) }
        }), function () {
            function a(a, b, d) {
                var f = a.serializable, h = b[d ? "endContainer" : "startContainer"], m = d ? "endOffset" : "startOffset", c = f ? b.document.getById(a.startNode) : a.startNode; a = f ? b.document.getById(a.endNode) : a.endNode; h.equals(c.getPrevious()) ? (b.startOffset = b.startOffset -
                    h.getLength() - a.getPrevious().getLength(), h = a.getNext()) : h.equals(a.getPrevious()) && (b.startOffset -= h.getLength(), h = a.getNext()); h.equals(c.getParent()) && b[m]++; h.equals(a.getParent()) && b[m]++; b[d ? "endContainer" : "startContainer"] = h; return b
            } CKEDITOR.dom.rangeList = function (a) { if (a instanceof CKEDITOR.dom.rangeList) return a; a ? a instanceof CKEDITOR.dom.range && (a = [a]) : a = []; return CKEDITOR.tools.extend(a, f) }; var f = {
                createIterator: function () {
                    var a = this, b = CKEDITOR.dom.walker.bookmark(), d = [], f; return {
                        getNextRange: function (h) {
                            f =
                            void 0 === f ? 0 : f + 1; var m = a[f]; if (m && 1 < a.length) { if (!f) for (var c = a.length - 1; 0 <= c; c--)d.unshift(a[c].createBookmark(!0)); if (h) for (var k = 0; a[f + k + 1];) { var g = m.document; h = 0; c = g.getById(d[k].endNode); for (g = g.getById(d[k + 1].startNode); ;) { c = c.getNextSourceNode(!1); if (g.equals(c)) h = 1; else if (b(c) || c.type == CKEDITOR.NODE_ELEMENT && c.isBlockBoundary()) continue; break } if (!h) break; k++ } for (m.moveToBookmark(d.shift()); k--;)c = a[++f], c.moveToBookmark(d.shift()), m.setEnd(c.endContainer, c.endOffset) } return m
                        }
                    }
                }, createBookmarks: function (e) {
                    for (var b =
                        [], d, f = 0; f < this.length; f++) { b.push(d = this[f].createBookmark(e, !0)); for (var h = f + 1; h < this.length; h++)this[h] = a(d, this[h]), this[h] = a(d, this[h], !0) } return b
                }, createBookmarks2: function (a) { for (var b = [], d = 0; d < this.length; d++)b.push(this[d].createBookmark2(a)); return b }, moveToBookmarks: function (a) { for (var b = 0; b < this.length; b++)this[b].moveToBookmark(a[b]) }
            }
        }(), function () {
            function a() { return CKEDITOR.getUrl(CKEDITOR.skinName.split(",")[1] || "skins/" + CKEDITOR.skinName.split(",")[0] + "/") } function f(c) {
                var b =
                    CKEDITOR.skin["ua_" + c], d = CKEDITOR.env; if (b) for (var b = b.split(",").sort(function (a, c) { return a > c ? -1 : 1 }), e = 0, f; e < b.length; e++)if (f = b[e], d.ie && (f.replace(/^ie/, "") == d.version || d.quirks && "iequirks" == f) && (f = "ie"), d[f]) { c += "_" + b[e]; break } return CKEDITOR.getUrl(a() + c + ".css")
            } function e(a, c) { l[a] || (CKEDITOR.document.appendStyleSheet(f(a)), l[a] = 1); c && c() } function b(a) { var c = a.getById(h); c || (c = a.getHead().append("style"), c.setAttribute("id", h), c.setAttribute("type", "text/css")); return c } function d(a, c, b) {
                var d,
                e, f; if (CKEDITOR.env.webkit) for (c = c.split("}").slice(0, -1), e = 0; e < c.length; e++)c[e] = c[e].split("{"); for (var h = 0; h < a.length; h++)if (CKEDITOR.env.webkit) for (e = 0; e < c.length; e++) { f = c[e][1]; for (d = 0; d < b.length; d++)f = f.replace(b[d][0], b[d][1]); a[h].$.sheet.addRule(c[e][0], f) } else { f = c; for (d = 0; d < b.length; d++)f = f.replace(b[d][0], b[d][1]); CKEDITOR.env.ie && 11 > CKEDITOR.env.version ? a[h].$.styleSheet.cssText += f : a[h].$.innerHTML += f }
            } var l = {}; CKEDITOR.skin = {
                path: a, loadPart: function (c, b) {
                    CKEDITOR.skin.name != CKEDITOR.skinName.split(",")[0] ?
                    CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(a() + "skin.js"), function () { e(c, b) }) : e(c, b)
                }, getPath: function (a) { return CKEDITOR.getUrl(f(a)) }, icons: {}, addIcon: function (a, c, b, d) { a = a.toLowerCase(); this.icons[a] || (this.icons[a] = { path: c, offset: b || 0, bgsize: d || "16px" }) }, getIconStyle: function (a, c, b, d, e) {
                    var f; a && (a = a.toLowerCase(), c && (f = this.icons[a + "-rtl"]), f || (f = this.icons[a])); a = b || f && f.path || ""; d = d || f && f.offset; e = e || f && f.bgsize || "16px"; a && (a = a.replace(/'/g, "\\'")); return a && "background-image:url('" + CKEDITOR.getUrl(a) +
                        "');background-position:0 " + d + "px;background-size:" + e + ";"
                }
            }; CKEDITOR.tools.extend(CKEDITOR.editor.prototype, { getUiColor: function () { return this.uiColor }, setUiColor: function (a) { var e = b(CKEDITOR.document); return (this.setUiColor = function (a) { this.uiColor = a; var b = CKEDITOR.skin.chameleon, k = "", f = ""; "function" == typeof b && (k = b(this, "editor"), f = b(this, "panel")); a = [[c, a]]; d([e], k, a); d(m, f, a) }).call(this, a) } }); var h = "cke_ui_color", m = [], c = /\$color/g; CKEDITOR.on("instanceLoaded", function (a) {
                if (!CKEDITOR.env.ie ||
                    !CKEDITOR.env.quirks) { var e = a.editor; a = function (a) { a = (a.data[0] || a.data).element.getElementsByTag("iframe").getItem(0).getFrameDocument(); if (!a.getById("cke_ui_color")) { var k = b(a); m.push(k); e.on("destroy", function () { m = CKEDITOR.tools.array.filter(m, function (a) { return k !== a }) }); (a = e.getUiColor()) && d([k], CKEDITOR.skin.chameleon(e, "panel"), [[c, a]]) } }; e.on("panelShow", a); e.on("menuShow", a); e.config.uiColor && e.setUiColor(e.config.uiColor) }
            })
        }(), function () {
            var a = CKEDITOR.dom.element.createFromHtml('\x3cdiv style\x3d"width:0;height:0;position:absolute;left:-10000px;border:1px solid;border-color:red blue"\x3e\x3c/div\x3e',
                CKEDITOR.document); a.appendTo(CKEDITOR.document.getHead()); try { var f = a.getComputedStyle("border-top-color"), e = a.getComputedStyle("border-right-color"); CKEDITOR.env.hc = !(!f || f != e) } catch (b) { CKEDITOR.env.hc = !1 } a.remove(); CKEDITOR.env.hc && (CKEDITOR.env.cssClass += " cke_hc"); CKEDITOR.document.appendStyleText(".cke{visibility:hidden;}"); CKEDITOR.status = "loaded"; CKEDITOR.fireOnce("loaded"); if (a = CKEDITOR._.pending) for (delete CKEDITOR._.pending, f = 0; f < a.length; f++)CKEDITOR.editor.prototype.constructor.apply(a[f][0],
                    a[f][1]), CKEDITOR.add(a[f][0])
        }(), CKEDITOR.skin.name = "moono-lisa", CKEDITOR.skin.ua_editor = "ie,iequirks,ie8,gecko", CKEDITOR.skin.ua_dialog = "ie,iequirks,ie8", CKEDITOR.skin.chameleon = function () {
            var a = function () { return function (a, b) { for (var d = a.match(/[^#]./g), f = 0; 3 > f; f++) { var h = f, m; m = parseInt(d[f], 16); m = ("0" + (0 > b ? 0 | m * (1 + b) : 0 | m + (255 - m) * b).toString(16)).slice(-2); d[h] = m } return "#" + d.join("") } }(), f = {
                editor: new CKEDITOR.template("{id}.cke_chrome [border-color:{defaultBorder};] {id} .cke_top [ background-color:{defaultBackground};border-bottom-color:{defaultBorder};] {id} .cke_bottom [background-color:{defaultBackground};border-top-color:{defaultBorder};] {id} .cke_resizer [border-right-color:{ckeResizer}] {id} .cke_dialog_title [background-color:{defaultBackground};border-bottom-color:{defaultBorder};] {id} .cke_dialog_footer [background-color:{defaultBackground};outline-color:{defaultBorder};] {id} .cke_dialog_tab [background-color:{dialogTab};border-color:{defaultBorder};] {id} .cke_dialog_tab:hover [background-color:{lightBackground};] {id} .cke_dialog_contents [border-top-color:{defaultBorder};] {id} .cke_dialog_tab_selected, {id} .cke_dialog_tab_selected:hover [background:{dialogTabSelected};border-bottom-color:{dialogTabSelectedBorder};] {id} .cke_dialog_body [background:{dialogBody};border-color:{defaultBorder};] {id} a.cke_button_off:hover,{id} a.cke_button_off:focus,{id} a.cke_button_off:active [background-color:{darkBackground};border-color:{toolbarElementsBorder};] {id} .cke_button_on [background-color:{ckeButtonOn};border-color:{toolbarElementsBorder};] {id} .cke_toolbar_separator,{id} .cke_toolgroup a.cke_button:last-child:after,{id} .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after [background-color: {toolbarElementsBorder};border-color: {toolbarElementsBorder};] {id} a.cke_combo_button:hover,{id} a.cke_combo_button:focus,{id} .cke_combo_on a.cke_combo_button [border-color:{toolbarElementsBorder};background-color:{darkBackground};] {id} .cke_combo:after [border-color:{toolbarElementsBorder};] {id} .cke_path_item [color:{elementsPathColor};] {id} a.cke_path_item:hover,{id} a.cke_path_item:focus,{id} a.cke_path_item:active [background-color:{darkBackground};] {id}.cke_panel [border-color:{defaultBorder};] "),
                panel: new CKEDITOR.template(".cke_panel_grouptitle [background-color:{lightBackground};border-color:{defaultBorder};] .cke_menubutton_icon [background-color:{menubuttonIcon};] .cke_menubutton:hover,.cke_menubutton:focus,.cke_menubutton:active [background-color:{menubuttonHover};] .cke_menubutton:hover .cke_menubutton_icon, .cke_menubutton:focus .cke_menubutton_icon, .cke_menubutton:active .cke_menubutton_icon [background-color:{menubuttonIconHover};] .cke_menubutton_disabled:hover .cke_menubutton_icon,.cke_menubutton_disabled:focus .cke_menubutton_icon,.cke_menubutton_disabled:active .cke_menubutton_icon [background-color:{menubuttonIcon};] .cke_menuseparator [background-color:{menubuttonIcon};] a:hover.cke_colorbox, a:active.cke_colorbox [border-color:{defaultBorder};] a:hover.cke_colorauto, a:hover.cke_colormore, a:active.cke_colorauto, a:active.cke_colormore [background-color:{ckeColorauto};border-color:{defaultBorder};] ")
            };
            return function (e, b) { var d = a(e.uiColor, .4), d = { id: "." + e.id, defaultBorder: a(d, -.2), toolbarElementsBorder: a(d, -.25), defaultBackground: d, lightBackground: a(d, .8), darkBackground: a(d, -.15), ckeButtonOn: a(d, .4), ckeResizer: a(d, -.4), ckeColorauto: a(d, .8), dialogBody: a(d, .7), dialogTab: a(d, .65), dialogTabSelected: "#FFF", dialogTabSelectedBorder: "#FFF", elementsPathColor: a(d, -.6), menubuttonHover: a(d, .1), menubuttonIcon: a(d, .5), menubuttonIconHover: a(d, .3) }; return f[b].output(d).replace(/\[/g, "{").replace(/\]/g, "}") }
        }(),
        CKEDITOR.plugins.add("dialogui", {
            onLoad: function () {
                var a = function (a) { this._ || (this._ = {}); this._["default"] = this._.initValue = a["default"] || ""; this._.required = a.required || !1; for (var b = [this._], d = 1; d < arguments.length; d++)b.push(arguments[d]); b.push(!0); CKEDITOR.tools.extend.apply(CKEDITOR.tools, b); return this._ }, f = { build: function (a, b, d) { return new CKEDITOR.ui.dialog.textInput(a, b, d) } }, e = { build: function (a, b, d) { return new CKEDITOR.ui.dialog[b.type](a, b, d) } }, b = {
                    isChanged: function () {
                        return this.getValue() !=
                            this.getInitValue()
                    }, reset: function (a) { this.setValue(this.getInitValue(), a) }, setInitValue: function () { this._.initValue = this.getValue() }, resetInitValue: function () { this._.initValue = this._["default"] }, getInitValue: function () { return this._.initValue }
                }, d = CKEDITOR.tools.extend({}, CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors, {
                    onChange: function (a, b) {
                        this._.domOnChangeRegistered || (a.on("load", function () {
                            this.getInputElement().on("change", function () { a.parts.dialog.isVisible() && this.fire("change", { value: this.getValue() }) },
                                this)
                        }, this), this._.domOnChangeRegistered = !0); this.on("change", b)
                    }
                }, !0), l = /^on([A-Z]\w+)/, h = function (a) { for (var b in a) (l.test(b) || "title" == b || "type" == b) && delete a[b]; return a }, m = function (a) { a = a.data.getKeystroke(); a == CKEDITOR.SHIFT + CKEDITOR.ALT + 36 ? this.setDirectionMarker("ltr") : a == CKEDITOR.SHIFT + CKEDITOR.ALT + 35 && this.setDirectionMarker("rtl") }; CKEDITOR.tools.extend(CKEDITOR.ui.dialog, {
                    labeledElement: function (c, b, d, e) {
                        if (!(4 > arguments.length)) {
                            var f = a.call(this, b); f.labelId = CKEDITOR.tools.getNextId() +
                                "_label"; this._.children = []; var h = { role: b.role || "presentation" }; b.includeLabel && (h["aria-labelledby"] = f.labelId); CKEDITOR.ui.dialog.uiElement.call(this, c, b, d, "div", null, h, function () {
                                    var a = [], d = b.required ? " cke_required" : ""; "horizontal" != b.labelLayout ? a.push('\x3clabel class\x3d"cke_dialog_ui_labeled_label' + d + '" ', ' id\x3d"' + f.labelId + '"', f.inputId ? ' for\x3d"' + f.inputId + '"' : "", (b.labelStyle ? ' style\x3d"' + b.labelStyle + '"' : "") + "\x3e", b.label, "\x3c/label\x3e", '\x3cdiv class\x3d"cke_dialog_ui_labeled_content"',
                                        b.controlStyle ? ' style\x3d"' + b.controlStyle + '"' : "", ' role\x3d"presentation"\x3e', e.call(this, c, b), "\x3c/div\x3e") : (d = {
                                            type: "hbox", widths: b.widths, padding: 0, children: [{ type: "html", html: '\x3clabel class\x3d"cke_dialog_ui_labeled_label' + d + '" id\x3d"' + f.labelId + '" for\x3d"' + f.inputId + '"' + (b.labelStyle ? ' style\x3d"' + b.labelStyle + '"' : "") + "\x3e" + CKEDITOR.tools.htmlEncode(b.label) + "\x3c/label\x3e" }, {
                                                type: "html", html: '\x3cspan class\x3d"cke_dialog_ui_labeled_content"' + (b.controlStyle ? ' style\x3d"' + b.controlStyle +
                                                    '"' : "") + "\x3e" + e.call(this, c, b) + "\x3c/span\x3e"
                                            }]
                                        }, CKEDITOR.dialog._.uiElementBuilders.hbox.build(c, d, a)); return a.join("")
                                })
                        }
                    }, textInput: function (b, d, e) {
                        if (!(3 > arguments.length)) {
                            a.call(this, d); var f = this._.inputId = CKEDITOR.tools.getNextId() + "_textInput", h = { "class": "cke_dialog_ui_input_" + d.type, id: f, type: d.type }; d.validate && (this.validate = d.validate); d.maxLength && (h.maxlength = d.maxLength); d.size && (h.size = d.size); d.inputStyle && (h.style = d.inputStyle); var l = this, p = !1; b.on("load", function () {
                                l.getInputElement().on("keydown",
                                    function (a) { 13 == a.data.getKeystroke() && (p = !0) }); l.getInputElement().on("keyup", function (a) { 13 == a.data.getKeystroke() && p && (b.getButton("ok") && setTimeout(function () { b.getButton("ok").click() }, 0), p = !1); l.bidi && m.call(l, a) }, null, null, 1E3)
                            }); CKEDITOR.ui.dialog.labeledElement.call(this, b, d, e, function () {
                                var a = ['\x3cdiv class\x3d"cke_dialog_ui_input_', d.type, '" role\x3d"presentation"']; d.width && a.push('style\x3d"width:' + d.width + '" '); a.push("\x3e\x3cinput "); h["aria-labelledby"] = this._.labelId; this._.required &&
                                    (h["aria-required"] = this._.required); for (var b in h) a.push(b + '\x3d"' + h[b] + '" '); a.push(" /\x3e\x3c/div\x3e"); return a.join("")
                            })
                        }
                    }, textarea: function (b, d, e) {
                        if (!(3 > arguments.length)) {
                            a.call(this, d); var f = this, h = this._.inputId = CKEDITOR.tools.getNextId() + "_textarea", l = {}; d.validate && (this.validate = d.validate); l.rows = d.rows || 5; l.cols = d.cols || 20; l["class"] = "cke_dialog_ui_input_textarea " + (d["class"] || ""); "undefined" != typeof d.inputStyle && (l.style = d.inputStyle); d.dir && (l.dir = d.dir); if (f.bidi) b.on("load",
                                function () { f.getInputElement().on("keyup", m) }, f); CKEDITOR.ui.dialog.labeledElement.call(this, b, d, e, function () { l["aria-labelledby"] = this._.labelId; this._.required && (l["aria-required"] = this._.required); var a = ['\x3cdiv class\x3d"cke_dialog_ui_input_textarea" role\x3d"presentation"\x3e\x3ctextarea id\x3d"', h, '" '], b; for (b in l) a.push(b + '\x3d"' + CKEDITOR.tools.htmlEncode(l[b]) + '" '); a.push("\x3e", CKEDITOR.tools.htmlEncode(f._["default"]), "\x3c/textarea\x3e\x3c/div\x3e"); return a.join("") })
                        }
                    }, checkbox: function (b,
                        d, e) {
                            if (!(3 > arguments.length)) {
                                var f = a.call(this, d, { "default": !!d["default"] }); d.validate && (this.validate = d.validate); CKEDITOR.ui.dialog.uiElement.call(this, b, d, e, "span", null, null, function () {
                                    var a = CKEDITOR.tools.extend({}, d, { id: d.id ? d.id + "_checkbox" : CKEDITOR.tools.getNextId() + "_checkbox" }, !0), e = [], g = CKEDITOR.tools.getNextId() + "_label", l = { "class": "cke_dialog_ui_checkbox_input", type: "checkbox", "aria-labelledby": g }; h(a); d["default"] && (l.checked = "checked"); "undefined" != typeof a.inputStyle && (a.style = a.inputStyle);
                                    f.checkbox = new CKEDITOR.ui.dialog.uiElement(b, a, e, "input", null, l); e.push(' \x3clabel id\x3d"', g, '" for\x3d"', l.id, '"' + (d.labelStyle ? ' style\x3d"' + d.labelStyle + '"' : "") + "\x3e", CKEDITOR.tools.htmlEncode(d.label), "\x3c/label\x3e"); return e.join("")
                                })
                            }
                    }, radio: function (b, d, e) {
                        if (!(3 > arguments.length)) {
                            a.call(this, d); this._["default"] || (this._["default"] = this._.initValue = d.items[0][1]); d.validate && (this.validate = d.validate); var f = [], l = this; d.role = "radiogroup"; d.includeLabel = !0; CKEDITOR.ui.dialog.labeledElement.call(this,
                                b, d, e, function () {
                                    for (var a = [], e = [], g = (d.id ? d.id : CKEDITOR.tools.getNextId()) + "_radio", m = 0; m < d.items.length; m++) {
                                        var y = d.items[m], q = void 0 !== y[2] ? y[2] : y[0], A = void 0 !== y[1] ? y[1] : y[0], v = CKEDITOR.tools.getNextId() + "_radio_input", z = v + "_label", v = CKEDITOR.tools.extend({}, d, { id: v, title: null, type: null }, !0), q = CKEDITOR.tools.extend({}, v, { title: q }, !0), x = { type: "radio", "class": "cke_dialog_ui_radio_input", name: g, value: A, "aria-labelledby": z }, D = []; l._["default"] == A && (x.checked = "checked"); h(v); h(q); "undefined" != typeof v.inputStyle &&
                                            (v.style = v.inputStyle); v.keyboardFocusable = !0; f.push(new CKEDITOR.ui.dialog.uiElement(b, v, D, "input", null, x)); D.push(" "); new CKEDITOR.ui.dialog.uiElement(b, q, D, "label", null, { id: z, "for": x.id }, y[0]); a.push(D.join(""))
                                    } new CKEDITOR.ui.dialog.hbox(b, f, a, e); return e.join("")
                                }); this._.children = f
                        }
                    }, button: function (b, d, e) {
                        if (arguments.length) {
                            "function" == typeof d && (d = d(b.getParentEditor())); a.call(this, d, { disabled: d.disabled || !1 }); CKEDITOR.event.implementOn(this); var f = this; b.on("load", function () {
                                var a = this.getElement();
                                (function () { a.on("click", function (a) { f.click(); a.data.preventDefault() }); a.on("keydown", function (a) { a.data.getKeystroke() in { 32: 1 } && (f.click(), a.data.preventDefault()) }) })(); a.unselectable()
                            }, this); var h = CKEDITOR.tools.extend({}, d); delete h.style; var l = CKEDITOR.tools.getNextId() + "_label"; CKEDITOR.ui.dialog.uiElement.call(this, b, h, e, "a", null, { style: d.style, href: "javascript:void(0)", title: d.label, hidefocus: "true", "class": d["class"], role: "button", "aria-labelledby": l }, '\x3cspan id\x3d"' + l + '" class\x3d"cke_dialog_ui_button"\x3e' +
                                CKEDITOR.tools.htmlEncode(d.label) + "\x3c/span\x3e")
                        }
                    }, select: function (b, d, e) {
                        if (!(3 > arguments.length)) {
                            var f = a.call(this, d); d.validate && (this.validate = d.validate); f.inputId = CKEDITOR.tools.getNextId() + "_select"; CKEDITOR.ui.dialog.labeledElement.call(this, b, d, e, function () {
                                var a = CKEDITOR.tools.extend({}, d, { id: d.id ? d.id + "_select" : CKEDITOR.tools.getNextId() + "_select" }, !0), e = [], g = [], l = { id: f.inputId, "class": "cke_dialog_ui_input_select", "aria-labelledby": this._.labelId }; e.push('\x3cdiv class\x3d"cke_dialog_ui_input_',
                                    d.type, '" role\x3d"presentation"'); d.width && e.push('style\x3d"width:' + d.width + '" '); e.push("\x3e"); void 0 !== d.size && (l.size = d.size); void 0 !== d.multiple && (l.multiple = d.multiple); h(a); for (var m = 0, y; m < d.items.length && (y = d.items[m]); m++)g.push('\x3coption value\x3d"', CKEDITOR.tools.htmlEncode(void 0 !== y[1] ? y[1] : y[0]).replace(/"/g, "\x26quot;"), '" /\x3e ', CKEDITOR.tools.htmlEncode(y[0])); "undefined" != typeof a.inputStyle && (a.style = a.inputStyle); f.select = new CKEDITOR.ui.dialog.uiElement(b, a, e, "select", null,
                                        l, g.join("")); e.push("\x3c/div\x3e"); return e.join("")
                            })
                        }
                    }, file: function (b, d, e) {
                        if (!(3 > arguments.length)) {
                            void 0 === d["default"] && (d["default"] = ""); var f = CKEDITOR.tools.extend(a.call(this, d), { definition: d, buttons: [] }); d.validate && (this.validate = d.validate); b.on("load", function () { CKEDITOR.document.getById(f.frameId).getParent().addClass("cke_dialog_ui_input_file") }); CKEDITOR.ui.dialog.labeledElement.call(this, b, d, e, function () {
                                f.frameId = CKEDITOR.tools.getNextId() + "_fileInput"; var a = ['\x3ciframe frameborder\x3d"0" allowtransparency\x3d"0" class\x3d"cke_dialog_ui_input_file" role\x3d"presentation" id\x3d"',
                                    f.frameId, '" title\x3d"', d.label, '" src\x3d"javascript:void(']; a.push(CKEDITOR.env.ie ? "(function(){" + encodeURIComponent("document.open();(" + CKEDITOR.tools.fixDomain + ")();document.close();") + "})()" : "0"); a.push(')"\x3e\x3c/iframe\x3e'); return a.join("")
                            })
                        }
                    }, fileButton: function (b, d, e) {
                        var f = this; if (!(3 > arguments.length)) {
                            a.call(this, d); d.validate && (this.validate = d.validate); var h = CKEDITOR.tools.extend({}, d), l = h.onClick; h.className = (h.className ? h.className + " " : "") + "cke_dialog_ui_button"; h.onClick = function (a) {
                                var e =
                                    d["for"]; a = l ? l.call(this, a) : !1; !1 !== a && ("xhr" !== a && b.getContentElement(e[0], e[1]).submit(), this.disable())
                            }; b.on("load", function () { b.getContentElement(d["for"][0], d["for"][1])._.buttons.push(f) }); CKEDITOR.ui.dialog.button.call(this, b, h, e)
                        }
                    }, html: function () {
                        var a = /^\s*<[\w:]+\s+([^>]*)?>/, b = /^(\s*<[\w:]+(?:\s+[^>]*)?)((?:.|\r|\n)+)$/, d = /\/$/; return function (e, f, h) {
                            if (!(3 > arguments.length)) {
                                var l = [], m = f.html; "\x3c" != m.charAt(0) && (m = "\x3cspan\x3e" + m + "\x3c/span\x3e"); var u = f.focus; if (u) {
                                    var y = this.focus;
                                    this.focus = function () { ("function" == typeof u ? u : y).call(this); this.fire("focus") }; f.isFocusable && (this.isFocusable = this.isFocusable); this.keyboardFocusable = !0
                                } CKEDITOR.ui.dialog.uiElement.call(this, e, f, l, "span", null, null, ""); l = l.join("").match(a); m = m.match(b) || ["", "", ""]; d.test(m[1]) && (m[1] = m[1].slice(0, -1), m[2] = "/" + m[2]); h.push([m[1], " ", l[1] || "", m[2]].join(""))
                            }
                        }
                    }(), fieldset: function (a, b, d, e, f) {
                        var h = f.label; this._ = { children: b }; CKEDITOR.ui.dialog.uiElement.call(this, a, f, e, "fieldset", null, null, function () {
                            var a =
                                []; h && a.push("\x3clegend" + (f.labelStyle ? ' style\x3d"' + f.labelStyle + '"' : "") + "\x3e" + h + "\x3c/legend\x3e"); for (var b = 0; b < d.length; b++)a.push(d[b]); return a.join("")
                        })
                    }
                }, !0); CKEDITOR.ui.dialog.html.prototype = new CKEDITOR.ui.dialog.uiElement; CKEDITOR.ui.dialog.labeledElement.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement, {
                    setLabel: function (a) {
                        var b = CKEDITOR.document.getById(this._.labelId); 1 > b.getChildCount() ? (new CKEDITOR.dom.text(a, CKEDITOR.document)).appendTo(b) : b.getChild(0).$.nodeValue =
                            a; return this
                    }, getLabel: function () { var a = CKEDITOR.document.getById(this._.labelId); return !a || 1 > a.getChildCount() ? "" : a.getChild(0).getText() }, eventProcessors: d
                }, !0); CKEDITOR.ui.dialog.button.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement, {
                    click: function () { return this._.disabled ? !1 : this.fire("click", { dialog: this._.dialog }) }, enable: function () { this._.disabled = !1; var a = this.getElement(); a && a.removeClass("cke_disabled") }, disable: function () { this._.disabled = !0; this.getElement().addClass("cke_disabled") },
                    isVisible: function () { return this.getElement().getFirst().isVisible() }, isEnabled: function () { return !this._.disabled }, eventProcessors: CKEDITOR.tools.extend({}, CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors, { onClick: function (a, b) { this.on("click", function () { b.apply(this, arguments) }) } }, !0), accessKeyUp: function () { this.click() }, accessKeyDown: function () { this.focus() }, keyboardFocusable: !0
                }, !0); CKEDITOR.ui.dialog.textInput.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement, {
                    getInputElement: function () { return CKEDITOR.document.getById(this._.inputId) },
                    focus: function () { var a = this.selectParentTab(); setTimeout(function () { var b = a.getInputElement(); b && b.$.focus() }, 0) }, select: function () { var a = this.selectParentTab(); setTimeout(function () { var b = a.getInputElement(); b && (b.$.focus(), b.$.select()) }, 0) }, accessKeyUp: function () { this.select() }, setValue: function (a) { if (this.bidi) { var b = a && a.charAt(0); (b = "‪" == b ? "ltr" : "‫" == b ? "rtl" : null) && (a = a.slice(1)); this.setDirectionMarker(b) } a || (a = ""); return CKEDITOR.ui.dialog.uiElement.prototype.setValue.apply(this, arguments) },
                    getValue: function () { var a = CKEDITOR.ui.dialog.uiElement.prototype.getValue.call(this); if (this.bidi && a) { var b = this.getDirectionMarker(); b && (a = ("ltr" == b ? "‪" : "‫") + a) } return a }, setDirectionMarker: function (a) { var b = this.getInputElement(); a ? b.setAttributes({ dir: a, "data-cke-dir-marker": a }) : this.getDirectionMarker() && b.removeAttributes(["dir", "data-cke-dir-marker"]) }, getDirectionMarker: function () { return this.getInputElement().data("cke-dir-marker") }, keyboardFocusable: !0
                }, b, !0); CKEDITOR.ui.dialog.textarea.prototype =
                    new CKEDITOR.ui.dialog.textInput; CKEDITOR.ui.dialog.select.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement, {
                        getInputElement: function () { return this._.select.getElement() }, add: function (a, b, d) { var e = new CKEDITOR.dom.element("option", this.getDialog().getParentEditor().document), f = this.getInputElement().$; e.$.text = a; e.$.value = void 0 === b || null === b ? a : b; void 0 === d || null === d ? CKEDITOR.env.ie ? f.add(e.$) : f.add(e.$, null) : f.add(e.$, d); return this }, remove: function (a) {
                            this.getInputElement().$.remove(a);
                            return this
                        }, clear: function () { for (var a = this.getInputElement().$; 0 < a.length;)a.remove(0); return this }, keyboardFocusable: !0
                    }, b, !0); CKEDITOR.ui.dialog.checkbox.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement, {
                        getInputElement: function () { return this._.checkbox.getElement() }, setValue: function (a, b) { this.getInputElement().$.checked = a; !b && this.fire("change", { value: a }) }, getValue: function () { return this.getInputElement().$.checked }, accessKeyUp: function () { this.setValue(!this.getValue()) }, eventProcessors: {
                            onChange: function (a,
                                b) { if (!CKEDITOR.env.ie || 8 < CKEDITOR.env.version) return d.onChange.apply(this, arguments); a.on("load", function () { var a = this._.checkbox.getElement(); a.on("propertychange", function (b) { b = b.data.$; "checked" == b.propertyName && this.fire("change", { value: a.$.checked }) }, this) }, this); this.on("change", b); return null }
                        }, keyboardFocusable: !0
                    }, b, !0); CKEDITOR.ui.dialog.radio.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement, {
                        setValue: function (a, b) {
                            for (var d = this._.children, e, f = 0; f < d.length && (e = d[f]); f++)e.getElement().$.checked =
                                e.getValue() == a; !b && this.fire("change", { value: a })
                        }, getValue: function () { for (var a = this._.children, b = 0; b < a.length; b++)if (a[b].getElement().$.checked) return a[b].getValue(); return null }, accessKeyUp: function () { var a = this._.children, b; for (b = 0; b < a.length; b++)if (a[b].getElement().$.checked) { a[b].getElement().focus(); return } a[0].getElement().focus() }, eventProcessors: {
                            onChange: function (a, b) {
                                if (!CKEDITOR.env.ie || 8 < CKEDITOR.env.version) return d.onChange.apply(this, arguments); a.on("load", function () {
                                    for (var a =
                                        this._.children, b = this, c = 0; c < a.length; c++)a[c].getElement().on("propertychange", function (a) { a = a.data.$; "checked" == a.propertyName && this.$.checked && b.fire("change", { value: this.getAttribute("value") }) })
                                }, this); this.on("change", b); return null
                            }
                        }
                    }, b, !0); CKEDITOR.ui.dialog.file.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement, b, {
                        getInputElement: function () {
                            var a = CKEDITOR.document.getById(this._.frameId).getFrameDocument(); return 0 < a.$.forms.length ? new CKEDITOR.dom.element(a.$.forms[0].elements[0]) :
                                this.getElement()
                        }, submit: function () { this.getInputElement().getParent().$.submit(); return this }, getAction: function () { return this.getInputElement().getParent().$.action }, registerEvents: function (a) { var b = /^on([A-Z]\w+)/, d, e = function (a, b, c, d) { a.on("formLoaded", function () { a.getInputElement().on(c, d, a) }) }, f; for (f in a) if (d = f.match(b)) this.eventProcessors[f] ? this.eventProcessors[f].call(this, this._.dialog, a[f]) : e(this, this._.dialog, d[1].toLowerCase(), a[f]); return this }, reset: function () {
                            function a() {
                                d.$.open();
                                var c = ""; e.size && (c = e.size - (CKEDITOR.env.ie ? 7 : 0)); var q = b.frameId + "_input"; d.$.write(['\x3chtml dir\x3d"' + m + '" lang\x3d"' + u + '"\x3e\x3chead\x3e\x3ctitle\x3e\x3c/title\x3e\x3c/head\x3e\x3cbody style\x3d"margin: 0; overflow: hidden; background: transparent;"\x3e', '\x3cform enctype\x3d"multipart/form-data" method\x3d"POST" dir\x3d"' + m + '" lang\x3d"' + u + '" action\x3d"', CKEDITOR.tools.htmlEncode(e.action), '"\x3e\x3clabel id\x3d"', b.labelId, '" for\x3d"', q, '" style\x3d"display:none"\x3e', CKEDITOR.tools.htmlEncode(e.label),
                                    '\x3c/label\x3e\x3cinput style\x3d"width:100%" id\x3d"', q, '" aria-labelledby\x3d"', b.labelId, '" type\x3d"file" name\x3d"', CKEDITOR.tools.htmlEncode(e.id || "cke_upload"), '" size\x3d"', CKEDITOR.tools.htmlEncode(0 < c ? c : ""), '" /\x3e\x3c/form\x3e\x3c/body\x3e\x3c/html\x3e\x3cscript\x3e', CKEDITOR.env.ie ? "(" + CKEDITOR.tools.fixDomain + ")();" : "", "window.parent.CKEDITOR.tools.callFunction(" + h + ");", "window.onbeforeunload \x3d function() {window.parent.CKEDITOR.tools.callFunction(" + l + ")}", "\x3c/script\x3e"].join(""));
                                d.$.close(); for (c = 0; c < f.length; c++)f[c].enable()
                            } var b = this._, d = CKEDITOR.document.getById(b.frameId).getFrameDocument(), e = b.definition, f = b.buttons, h = this.formLoadedNumber, l = this.formUnloadNumber, m = b.dialog._.editor.lang.dir, u = b.dialog._.editor.langCode; h || (h = this.formLoadedNumber = CKEDITOR.tools.addFunction(function () { this.fire("formLoaded") }, this), l = this.formUnloadNumber = CKEDITOR.tools.addFunction(function () { this.getInputElement().clearCustomData() }, this), this.getDialog()._.editor.on("destroy", function () {
                                CKEDITOR.tools.removeFunction(h);
                                CKEDITOR.tools.removeFunction(l)
                            })); CKEDITOR.env.gecko ? setTimeout(a, 500) : a()
                        }, getValue: function () { return this.getInputElement().$.value || "" }, setInitValue: function () { this._.initValue = "" }, eventProcessors: { onChange: function (a, b) { this._.domOnChangeRegistered || (this.on("formLoaded", function () { this.getInputElement().on("change", function () { this.fire("change", { value: this.getValue() }) }, this) }, this), this._.domOnChangeRegistered = !0); this.on("change", b) } }, keyboardFocusable: !0
                    }, !0); CKEDITOR.ui.dialog.fileButton.prototype =
                        new CKEDITOR.ui.dialog.button; CKEDITOR.ui.dialog.fieldset.prototype = CKEDITOR.tools.clone(CKEDITOR.ui.dialog.hbox.prototype); CKEDITOR.dialog.addUIElement("text", f); CKEDITOR.dialog.addUIElement("password", f); CKEDITOR.dialog.addUIElement("tel", f); CKEDITOR.dialog.addUIElement("textarea", e); CKEDITOR.dialog.addUIElement("checkbox", e); CKEDITOR.dialog.addUIElement("radio", e); CKEDITOR.dialog.addUIElement("button", e); CKEDITOR.dialog.addUIElement("select", e); CKEDITOR.dialog.addUIElement("file", e); CKEDITOR.dialog.addUIElement("fileButton",
                            e); CKEDITOR.dialog.addUIElement("html", e); CKEDITOR.dialog.addUIElement("fieldset", { build: function (a, b, d) { for (var e = b.children, f, h = [], l = [], m = 0; m < e.length && (f = e[m]); m++) { var u = []; h.push(u); l.push(CKEDITOR.dialog._.uiElementBuilders[f.type].build(a, f, u)) } return new CKEDITOR.ui.dialog[b.type](a, l, h, d, b) } })
            }
        }), CKEDITOR.DIALOG_RESIZE_NONE = 0, CKEDITOR.DIALOG_RESIZE_WIDTH = 1, CKEDITOR.DIALOG_RESIZE_HEIGHT = 2, CKEDITOR.DIALOG_RESIZE_BOTH = 3, CKEDITOR.DIALOG_STATE_IDLE = 1, CKEDITOR.DIALOG_STATE_BUSY = 2, function () {
            function a(a) {
                a._.tabBarMode =
                !0; a._.tabs[a._.currentTabId][0].focus(); a._.currentFocusIndex = -1
            } function f() { for (var a = this._.tabIdList.length, b = CKEDITOR.tools.indexOf(this._.tabIdList, this._.currentTabId) + a, c = b - 1; c > b - a; c--)if (this._.tabs[this._.tabIdList[c % a]][0].$.offsetHeight) return this._.tabIdList[c % a]; return null } function e() {
                for (var a = this._.tabIdList.length, b = CKEDITOR.tools.indexOf(this._.tabIdList, this._.currentTabId), c = b + 1; c < b + a; c++)if (this._.tabs[this._.tabIdList[c % a]][0].$.offsetHeight) return this._.tabIdList[c % a];
                return null
            } function b(a, b) { for (var c = a.$.getElementsByTagName("input"), d = 0, e = c.length; d < e; d++) { var g = new CKEDITOR.dom.element(c[d]); "text" == g.getAttribute("type").toLowerCase() && (b ? (g.setAttribute("value", g.getCustomData("fake_value") || ""), g.removeCustomData("fake_value")) : (g.setCustomData("fake_value", g.getAttribute("value")), g.setAttribute("value", ""))) } } function d(a, b) {
                var c = this.getInputElement(); c && (a ? c.removeAttribute("aria-invalid") : c.setAttribute("aria-invalid", !0)); a || (this.select ? this.select() :
                    this.focus()); b && alert(b); this.fire("validated", { valid: a, msg: b })
            } function l() { var a = this.getInputElement(); a && a.removeAttribute("aria-invalid") } function h(a) {
                var b = CKEDITOR.dom.element.createFromHtml(CKEDITOR.addTemplate("dialog", M).output({ id: CKEDITOR.tools.getNextNumber(), editorId: a.id, langDir: a.lang.dir, langCode: a.langCode, editorDialogClass: "cke_editor_" + a.name.replace(/\./g, "\\.") + "_dialog", closeTitle: a.lang.common.close, hidpi: CKEDITOR.env.hidpi ? "cke_hidpi" : "" })), c = b.getChild([0, 0, 0, 0, 0]), d = c.getChild(0),
                e = c.getChild(1); a.plugins.clipboard && CKEDITOR.plugins.clipboard.preventDefaultDropOnElement(c); !CKEDITOR.env.ie || CKEDITOR.env.quirks || CKEDITOR.env.edge || (a = "javascript:void(function(){" + encodeURIComponent("document.open();(" + CKEDITOR.tools.fixDomain + ")();document.close();") + "}())", CKEDITOR.dom.element.createFromHtml('\x3ciframe frameBorder\x3d"0" class\x3d"cke_iframe_shim" src\x3d"' + a + '" tabIndex\x3d"-1"\x3e\x3c/iframe\x3e').appendTo(c.getParent())); d.unselectable(); e.unselectable(); return {
                    element: b,
                    parts: { dialog: b.getChild(0), title: d, close: e, tabs: c.getChild(2), contents: c.getChild([3, 0, 0, 0]), footer: c.getChild([3, 0, 1, 0]) }
                }
            } function m(a, b, c) { this.element = b; this.focusIndex = c; this.tabIndex = 0; this.isFocusable = function () { return !b.getAttribute("disabled") && b.isVisible() }; this.focus = function () { a._.currentFocusIndex = this.focusIndex; this.element.focus() }; b.on("keydown", function (a) { a.data.getKeystroke() in { 32: 1, 13: 1 } && this.fire("click") }); b.on("focus", function () { this.fire("mouseover") }); b.on("blur", function () { this.fire("mouseout") }) }
            function c(a) { function b() { a.layout() } var c = CKEDITOR.document.getWindow(); c.on("resize", b); a.on("hide", function () { c.removeListener("resize", b) }) } function k(a, b) { this.dialog = a; for (var c = b.contents, d = 0, e; e = c[d]; d++)c[d] = e && new g(a, e); CKEDITOR.tools.extend(this, b) } function g(a, b) { this._ = { dialog: a }; CKEDITOR.tools.extend(this, b) } function n(a) {
                function b(c) {
                    var k = a.getSize(), l = a.parts.dialog.getParent().getClientSize(), m = c.data.$.screenX, n = c.data.$.screenY, q = m - d.x, y = n - d.y; d = { x: m, y: n }; e.x += q; e.y += y; m = e.x +
                        h[3] < f ? -h[3] : e.x - h[1] > l.width - k.width - f ? l.width - k.width + ("rtl" == g.lang.dir ? 0 : h[1]) : e.x; k = e.y + h[0] < f ? -h[0] : e.y - h[2] > l.height - k.height - f ? l.height - k.height + h[2] : e.y; m = Math.floor(m); k = Math.floor(k); a.move(m, k, 1); c.data.preventDefault()
                } function c() { CKEDITOR.document.removeListener("mousemove", b); CKEDITOR.document.removeListener("mouseup", c); if (CKEDITOR.env.ie6Compat) { var a = F.getChild(0).getFrameDocument(); a.removeListener("mousemove", b); a.removeListener("mouseup", c) } } var d = null, e = null, g = a.getParentEditor(),
                    f = g.config.dialog_magnetDistance, h = CKEDITOR.skin.margins || [0, 0, 0, 0]; "undefined" == typeof f && (f = 20); a.parts.title.on("mousedown", function (g) { if (!a._.moved) { var f = a._.element; f.getFirst().setStyle("position", "absolute"); f.removeStyle("display"); a._.moved = !0; a.layout() } d = { x: g.data.$.screenX, y: g.data.$.screenY }; CKEDITOR.document.on("mousemove", b); CKEDITOR.document.on("mouseup", c); e = a.getPosition(); CKEDITOR.env.ie6Compat && (f = F.getChild(0).getFrameDocument(), f.on("mousemove", b), f.on("mouseup", c)); g.data.preventDefault() },
                        a)
            } function r(a) {
                function b(c) {
                    var n = "rtl" == g.lang.dir, q = m.width, y = m.height, G = q + (c.data.$.screenX - l.x) * (n ? -1 : 1) * (a._.moved ? 1 : 2), Q = y + (c.data.$.screenY - l.y) * (a._.moved ? 1 : 2), r = a._.element.getFirst(), r = n && parseInt(r.getComputedStyle("right"), 10), x = a.getPosition(); x.x = x.x || 0; x.y = x.y || 0; x.y + Q > k.height && (Q = k.height - x.y); (n ? r : x.x) + G > k.width && (G = k.width - (n ? r : x.x)); Q = Math.floor(Q); G = Math.floor(G); if (e == CKEDITOR.DIALOG_RESIZE_WIDTH || e == CKEDITOR.DIALOG_RESIZE_BOTH) q = Math.max(d.minWidth || 0, G - f); if (e == CKEDITOR.DIALOG_RESIZE_HEIGHT ||
                        e == CKEDITOR.DIALOG_RESIZE_BOTH) y = Math.max(d.minHeight || 0, Q - h); a.resize(q, y); a._.moved && w(a, a._.position.x, a._.position.y); a._.moved || a.layout(); c.data.preventDefault()
                } function c() { CKEDITOR.document.removeListener("mouseup", c); CKEDITOR.document.removeListener("mousemove", b); n && (n.remove(), n = null); if (CKEDITOR.env.ie6Compat) { var a = F.getChild(0).getFrameDocument(); a.removeListener("mouseup", c); a.removeListener("mousemove", b) } } var d = a.definition, e = d.resizable; if (e != CKEDITOR.DIALOG_RESIZE_NONE) {
                    var g =
                        a.getParentEditor(), f, h, k, l, m, n, q = CKEDITOR.tools.addFunction(function (d) {
                            function e(a) { return a.isVisible() } m = a.getSize(); var g = a.parts.contents, q = g.$.getElementsByTagName("iframe").length, y = !(CKEDITOR.env.gecko || CKEDITOR.env.ie && CKEDITOR.env.quirks); q && (n = CKEDITOR.dom.element.createFromHtml('\x3cdiv class\x3d"cke_dialog_resize_cover" style\x3d"height: 100%; position: absolute; width: 100%; left:0; top:0;"\x3e\x3c/div\x3e'), g.append(n)); h = m.height - a.parts.contents.getFirst(e).getSize("height", y);
                            f = m.width - a.parts.contents.getFirst(e).getSize("width", 1); l = { x: d.screenX, y: d.screenY }; k = CKEDITOR.document.getWindow().getViewPaneSize(); CKEDITOR.document.on("mousemove", b); CKEDITOR.document.on("mouseup", c); CKEDITOR.env.ie6Compat && (g = F.getChild(0).getFrameDocument(), g.on("mousemove", b), g.on("mouseup", c)); d.preventDefault && d.preventDefault()
                        }); a.on("load", function () {
                            var b = ""; e == CKEDITOR.DIALOG_RESIZE_WIDTH ? b = " cke_resizer_horizontal" : e == CKEDITOR.DIALOG_RESIZE_HEIGHT && (b = " cke_resizer_vertical"); b = CKEDITOR.dom.element.createFromHtml('\x3cdiv class\x3d"cke_resizer' +
                                b + " cke_resizer_" + g.lang.dir + '" title\x3d"' + CKEDITOR.tools.htmlEncode(g.lang.common.resize) + '" onmousedown\x3d"CKEDITOR.tools.callFunction(' + q + ', event )"\x3e' + ("ltr" == g.lang.dir ? "◢" : "◣") + "\x3c/div\x3e"); a.parts.footer.append(b, 1)
                        }); g.on("destroy", function () { CKEDITOR.tools.removeFunction(q) })
                }
            } function w(a, b, c) {
                var d = a.parts.dialog.getParent().getClientSize(), e = a.getSize(), g = a._.viewportRatio, f = Math.max(d.width - e.width, 0), d = Math.max(d.height - e.height, 0); g.width = f ? b / f : g.width; g.height = d ? c / d : g.height;
                a._.viewportRatio = g
            } function p(a) { a.data.preventDefault(1) } function t(a) {
                var b = a.config, c = CKEDITOR.skinName || a.config.skin, d = b.dialog_backgroundCoverColor || ("moono-lisa" == c ? "black" : "white"), c = b.dialog_backgroundCoverOpacity, e = b.baseFloatZIndex, b = CKEDITOR.tools.genKey(d, c, e), g = N[b]; CKEDITOR.document.getBody().addClass("cke_dialog_open"); g ? g.show() : (e = ['\x3cdiv tabIndex\x3d"-1" style\x3d"position: ', CKEDITOR.env.ie6Compat ? "absolute" : "fixed", "; z-index: ", e, "; top: 0px; left: 0px; ", "; width: 100%; height: 100%;",
                    CKEDITOR.env.ie6Compat ? "" : "background-color: " + d, '" class\x3d"cke_dialog_background_cover"\x3e'], CKEDITOR.env.ie6Compat && (d = "\x3chtml\x3e\x3cbody style\x3d\\'background-color:" + d + ";\\'\x3e\x3c/body\x3e\x3c/html\x3e", e.push('\x3ciframe hidefocus\x3d"true" frameborder\x3d"0" id\x3d"cke_dialog_background_iframe" src\x3d"javascript:'), e.push("void((function(){" + encodeURIComponent("document.open();(" + CKEDITOR.tools.fixDomain + ")();document.write( '" + d + "' );document.close();") + "})())"), e.push('" style\x3d"position:absolute;left:0;top:0;width:100%;height: 100%;filter: progid:DXImageTransform.Microsoft.Alpha(opacity\x3d0)"\x3e\x3c/iframe\x3e')),
                    e.push("\x3c/div\x3e"), g = CKEDITOR.dom.element.createFromHtml(e.join("")), g.setOpacity(void 0 !== c ? c : .5), g.on("keydown", p), g.on("keypress", p), g.on("keyup", p), g.appendTo(CKEDITOR.document.getBody()), N[b] = g); a.focusManager.add(g); F = g; CKEDITOR.env.mac && CKEDITOR.env.webkit || g.focus()
            } function u(a) { CKEDITOR.document.getBody().removeClass("cke_dialog_open"); F && (a.focusManager.remove(F), F.hide()) } function y(a) {
                var b = a.data.$.ctrlKey || a.data.$.metaKey, c = a.data.$.altKey, d = a.data.$.shiftKey, e = String.fromCharCode(a.data.$.keyCode);
                (b = R[(b ? "CTRL+" : "") + (c ? "ALT+" : "") + (d ? "SHIFT+" : "") + e]) && b.length && (b = b[b.length - 1], b.keydown && b.keydown.call(b.uiElement, b.dialog, b.key), a.data.preventDefault())
            } function q(a) { var b = a.data.$.ctrlKey || a.data.$.metaKey, c = a.data.$.altKey, d = a.data.$.shiftKey, e = String.fromCharCode(a.data.$.keyCode); (b = R[(b ? "CTRL+" : "") + (c ? "ALT+" : "") + (d ? "SHIFT+" : "") + e]) && b.length && (b = b[b.length - 1], b.keyup && (b.keyup.call(b.uiElement, b.dialog, b.key), a.data.preventDefault())) } function A(a, b, c, d, e) {
                (R[c] || (R[c] = [])).push({
                    uiElement: a,
                    dialog: b, key: c, keyup: e || a.accessKeyUp, keydown: d || a.accessKeyDown
                })
            } function v(a) { for (var b in R) { for (var c = R[b], d = c.length - 1; 0 <= d; d--)c[d].dialog != a && c[d].uiElement != a || c.splice(d, 1); 0 === c.length && delete R[b] } } function z(a, b) { a._.accessKeyMap[b] && a.selectPage(a._.accessKeyMap[b]) } function x() { } var D = CKEDITOR.tools.cssLength, B, F, E = !1, L = !CKEDITOR.env.ie || CKEDITOR.env.edge, M = '\x3cdiv class\x3d"cke_reset_all cke_dialog_container {editorId} {editorDialogClass} {hidpi}" dir\x3d"{langDir}" style\x3d"' + (L ?
                "display:flex" : "") + '" lang\x3d"{langCode}" role\x3d"dialog" aria-labelledby\x3d"cke_dialog_title_{id}"\x3e\x3ctable class\x3d"cke_dialog ' + CKEDITOR.env.cssClass + ' cke_{langDir}" style\x3d"' + (L ? "margin:auto" : "position:absolute") + '" role\x3d"presentation"\x3e\x3ctr\x3e\x3ctd role\x3d"presentation"\x3e\x3cdiv class\x3d"cke_dialog_body" role\x3d"presentation"\x3e\x3cdiv id\x3d"cke_dialog_title_{id}" class\x3d"cke_dialog_title" role\x3d"presentation"\x3e\x3c/div\x3e\x3ca id\x3d"cke_dialog_close_button_{id}" class\x3d"cke_dialog_close_button" href\x3d"javascript:void(0)" title\x3d"{closeTitle}" role\x3d"button"\x3e\x3cspan class\x3d"cke_label"\x3eX\x3c/span\x3e\x3c/a\x3e\x3cdiv id\x3d"cke_dialog_tabs_{id}" class\x3d"cke_dialog_tabs" role\x3d"tablist"\x3e\x3c/div\x3e\x3ctable class\x3d"cke_dialog_contents" role\x3d"presentation"\x3e\x3ctr\x3e\x3ctd id\x3d"cke_dialog_contents_{id}" class\x3d"cke_dialog_contents_body" role\x3d"presentation"\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd id\x3d"cke_dialog_footer_{id}" class\x3d"cke_dialog_footer" role\x3d"presentation"\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e';
            CKEDITOR.dialog = function (b, c) {
                function g() { var a = p._.focusList; a.sort(function (a, b) { return a.tabIndex != b.tabIndex ? b.tabIndex - a.tabIndex : a.focusIndex - b.focusIndex }); for (var b = a.length, c = 0; c < b; c++)a[c].focusIndex = c } function m(a) {
                    var b = p._.focusList; a = a || 0; if (!(1 > b.length)) {
                        var c = p._.currentFocusIndex; p._.tabBarMode && 0 > a && (c = 0); try { b[c].getInputElement().$.blur() } catch (d) { } var e = c, g = 1 < p._.pageCount; do {
                            e += a; if (g && !p._.tabBarMode && (e == b.length || -1 == e)) {
                                p._.tabBarMode = !0; p._.tabs[p._.currentTabId][0].focus();
                                p._.currentFocusIndex = -1; return
                            } e = (e + b.length) % b.length; if (e == c) break
                        } while (a && !b[e].isFocusable()); b[e].focus(); "text" == b[e].type && b[e].select()
                    }
                } function q(c) {
                    if (p == CKEDITOR.dialog._.currentTop) {
                        var d = c.data.getKeystroke(), g = "rtl" == b.lang.dir, h = [37, 38, 39, 40]; t = w = 0; if (9 == d || d == CKEDITOR.SHIFT + 9) m(d == CKEDITOR.SHIFT + 9 ? -1 : 1), t = 1; else if (d == CKEDITOR.ALT + 121 && !p._.tabBarMode && 1 < p.getPageCount()) a(p), t = 1; else if (-1 != CKEDITOR.tools.indexOf(h, d) && p._.tabBarMode) d = -1 != CKEDITOR.tools.indexOf([g ? 39 : 37, 38], d) ?
                            f.call(p) : e.call(p), p.selectPage(d), p._.tabs[d][0].focus(), t = 1; else if (13 != d && 32 != d || !p._.tabBarMode) if (13 == d) d = c.data.getTarget(), d.is("a", "button", "select", "textarea") || d.is("input") && "button" == d.$.type || ((d = this.getButton("ok")) && CKEDITOR.tools.setTimeout(d.click, 0, d), t = 1), w = 1; else if (27 == d) (d = this.getButton("cancel")) ? CKEDITOR.tools.setTimeout(d.click, 0, d) : !1 !== this.fire("cancel", { hide: !0 }).hide && this.hide(), w = 1; else return; else this.selectPage(this._.currentTabId), this._.tabBarMode = !1, this._.currentFocusIndex =
                                -1, m(1), t = 1; y(c)
                    }
                } function y(a) { t ? a.data.preventDefault(1) : w && a.data.stopPropagation() } var x = CKEDITOR.dialog._.dialogDefinitions[c], u = CKEDITOR.tools.clone(B), v = b.config.dialog_buttonsOrder || "OS", A = b.lang.dir, z = {}, t, w; ("OS" == v && CKEDITOR.env.mac || "rtl" == v && "ltr" == A || "ltr" == v && "rtl" == A) && u.buttons.reverse(); x = CKEDITOR.tools.extend(x(b), u); x = CKEDITOR.tools.clone(x); x = new k(this, x); u = h(b); this._ = {
                    editor: b, element: u.element, name: c, model: null, contentSize: { width: 0, height: 0 }, size: { width: 0, height: 0 }, contents: {},
                    buttons: {}, accessKeyMap: {}, viewportRatio: { width: .5, height: .5 }, tabs: {}, tabIdList: [], currentTabId: null, currentTabIndex: null, pageCount: 0, lastTab: null, tabBarMode: !1, focusList: [], currentFocusIndex: 0, hasFocus: !1
                }; this.parts = u.parts; CKEDITOR.tools.setTimeout(function () { b.fire("ariaWidget", this.parts.contents) }, 0, this); u = { top: 0, visibility: "hidden" }; CKEDITOR.env.ie6Compat && (u.position = "absolute"); u["rtl" == A ? "right" : "left"] = 0; this.parts.dialog.setStyles(u); CKEDITOR.event.call(this); this.definition = x = CKEDITOR.fire("dialogDefinition",
                    { name: c, definition: x, dialog: this }, b).definition; if (!("removeDialogTabs" in b._) && b.config.removeDialogTabs) { u = b.config.removeDialogTabs.split(";"); for (A = 0; A < u.length; A++)if (v = u[A].split(":"), 2 == v.length) { var D = v[0]; z[D] || (z[D] = []); z[D].push(v[1]) } b._.removeDialogTabs = z } if (b._.removeDialogTabs && (z = b._.removeDialogTabs[c])) for (A = 0; A < z.length; A++)x.removeContents(z[A]); if (x.onLoad) this.on("load", x.onLoad); if (x.onShow) this.on("show", x.onShow); if (x.onHide) this.on("hide", x.onHide); if (x.onOk) this.on("ok",
                        function (a) { b.fire("saveSnapshot"); setTimeout(function () { b.fire("saveSnapshot") }, 0); !1 === x.onOk.call(this, a) && (a.data.hide = !1) }); this.state = CKEDITOR.DIALOG_STATE_IDLE; if (x.onCancel) this.on("cancel", function (a) { !1 === x.onCancel.call(this, a) && (a.data.hide = !1) }); var p = this, F = function (a) { var b = p._.contents, c = !1, d; for (d in b) for (var e in b[d]) if (c = a.call(this, b[d][e])) return }; this.on("ok", function (a) {
                            F(function (b) {
                                if (b.validate) {
                                    var c = b.validate(this), e = "string" == typeof c || !1 === c; e && (a.data.hide = !1, a.stop());
                                    d.call(b, !e, "string" == typeof c ? c : void 0); return e
                                }
                            })
                        }, this, null, 0); this.on("cancel", function (a) { F(function (c) { if (c.isChanged()) return b.config.dialog_noConfirmCancel || confirm(b.lang.common.confirmCancel) || (a.data.hide = !1), !0 }) }, this, null, 0); this.parts.close.on("click", function (a) { !1 !== this.fire("cancel", { hide: !0 }).hide && this.hide(); a.data.preventDefault() }, this); this.changeFocus = m; var E = this._.element; b.focusManager.add(E, 1); this.on("show", function () {
                            E.on("keydown", q, this); if (CKEDITOR.env.gecko) E.on("keypress",
                                y, this)
                        }); this.on("hide", function () { E.removeListener("keydown", q); CKEDITOR.env.gecko && E.removeListener("keypress", y); F(function (a) { l.apply(a) }) }); this.on("iframeAdded", function (a) { (new CKEDITOR.dom.document(a.data.iframe.$.contentWindow.document)).on("keydown", q, this, null, 0) }); this.on("show", function () {
                            g(); var a = 1 < p._.pageCount; b.config.dialog_startupFocusTab && a ? (p._.tabBarMode = !0, p._.tabs[p._.currentTabId][0].focus(), p._.currentFocusIndex = -1) : this._.hasFocus || (this._.currentFocusIndex = a ? -1 : this._.focusList.length -
                                1, x.onFocus ? (a = x.onFocus.call(this)) && a.focus() : m(1))
                        }, this, null, 4294967295); if (CKEDITOR.env.ie6Compat) this.on("load", function () { var a = this.getElement(), b = a.getFirst(); b.remove(); b.appendTo(a) }, this); n(this); r(this); (new CKEDITOR.dom.text(x.title, CKEDITOR.document)).appendTo(this.parts.title); for (A = 0; A < x.contents.length; A++)(z = x.contents[A]) && this.addPage(z); this.parts.tabs.on("click", function (b) {
                            var c = b.data.getTarget(); c.hasClass("cke_dialog_tab") && (c = c.$.id, this.selectPage(c.substring(4, c.lastIndexOf("_"))),
                                a(this), b.data.preventDefault())
                        }, this); A = []; z = CKEDITOR.dialog._.uiElementBuilders.hbox.build(this, { type: "hbox", className: "cke_dialog_footer_buttons", widths: [], children: x.buttons }, A).getChild(); this.parts.footer.setHtml(A.join("")); for (A = 0; A < z.length; A++)this._.buttons[z[A].id] = z[A]
            }; CKEDITOR.dialog.prototype = {
                destroy: function () { this.hide(); this._.element.remove() }, resize: function (a, b) {
                    if (!this._.contentSize || this._.contentSize.width != a || this._.contentSize.height != b) {
                        CKEDITOR.dialog.fire("resize",
                            { dialog: this, width: a, height: b }, this._.editor); this.fire("resize", { width: a, height: b }, this._.editor); this.parts.contents.setStyles({ width: a + "px", height: b + "px" }); if ("rtl" == this._.editor.lang.dir && this._.position) { var c = this.parts.dialog.getParent().getClientSize().width; this._.position.x = c - this._.contentSize.width - parseInt(this._.element.getFirst().getStyle("right"), 10) } this._.contentSize = { width: a, height: b }
                    }
                }, getSize: function () {
                    var a = this._.element.getFirst(); return {
                        width: a.$.offsetWidth || 0, height: a.$.offsetHeight ||
                            0
                    }
                }, move: function (a, b, c) {
                    var d = this._.element.getFirst(), e = "rtl" == this._.editor.lang.dir; CKEDITOR.env.ie && d.setStyle("zoom", "100%"); var g = this.parts.dialog.getParent().getClientSize(), f = this.getSize(), h = this._.viewportRatio, k = Math.max(g.width - f.width, 0), g = Math.max(g.height - f.height, 0); this._.position && this._.position.x == a && this._.position.y == b ? (a = Math.floor(k * h.width), b = Math.floor(g * h.height)) : w(this, a, b); this._.position = { x: a, y: b }; e && (a = k - a); b = { top: (0 < b ? b : 0) + "px" }; b[e ? "right" : "left"] = (0 < a ? a : 0) + "px";
                    d.setStyles(b); c && (this._.moved = 1)
                }, getPosition: function () { return CKEDITOR.tools.extend({}, this._.position) }, show: function () {
                    var a = this._.element, b = this.definition, d = CKEDITOR.document.getBody(), e = this._.editor.config.baseFloatZIndex; a.getParent() && a.getParent().equals(d) ? a.setStyle("display", L ? "flex" : "block") : a.appendTo(d); this.resize(this._.contentSize && this._.contentSize.width || b.width || b.minWidth, this._.contentSize && this._.contentSize.height || b.height || b.minHeight); this.reset(); null === this._.currentTabId &&
                        this.selectPage(this.definition.contents[0].id); null === CKEDITOR.dialog._.currentZIndex && (CKEDITOR.dialog._.currentZIndex = e); this._.element.getFirst().setStyle("z-index", CKEDITOR.dialog._.currentZIndex += 10); this.getElement().setStyle("z-index", CKEDITOR.dialog._.currentZIndex); null === CKEDITOR.dialog._.currentTop ? (CKEDITOR.dialog._.currentTop = this, this._.parentDialog = null, t(this._.editor)) : (this._.parentDialog = CKEDITOR.dialog._.currentTop, d = this._.parentDialog.getElement().getFirst(), d.$.style.zIndex -=
                            Math.floor(e / 2), this._.parentDialog.getElement().setStyle("z-index", d.$.style.zIndex), CKEDITOR.dialog._.currentTop = this); a.on("keydown", y); a.on("keyup", q); this._.hasFocus = !1; for (var g in b.contents) if (b.contents[g]) {
                                var a = b.contents[g], e = this._.tabs[a.id], d = a.requiredContent, f = 0; if (e) {
                                    for (var h in this._.contents[a.id]) {
                                        var k = this._.contents[a.id][h]; "hbox" != k.type && "vbox" != k.type && k.getInputElement() && (k.requiredContent && !this._.editor.activeFilter.check(k.requiredContent) ? k.disable() : (k.enable(),
                                            f++))
                                    } !f || d && !this._.editor.activeFilter.check(d) ? e[0].addClass("cke_dialog_tab_disabled") : e[0].removeClass("cke_dialog_tab_disabled")
                                }
                            } CKEDITOR.tools.setTimeout(function () { this.layout(); c(this); this.parts.dialog.setStyle("visibility", ""); this.fireOnce("load", {}); CKEDITOR.ui.fire("ready", this); this.fire("show", {}); this._.editor.fire("dialogShow", this); this._.parentDialog || this._.editor.focusManager.lock(); this.foreach(function (a) { a.setInitValue && a.setInitValue() }) }, 100, this)
                }, layout: function () {
                    var a =
                        this.parts.dialog; if (this._.moved || !L) { var b = this.getSize(), c = CKEDITOR.document.getWindow().getViewPaneSize(), d; this._.moved && this._.position ? (d = this._.position.x, b = this._.position.y) : (d = (c.width - b.width) / 2, b = (c.height - b.height) / 2); CKEDITOR.env.ie6Compat || (a.setStyle("position", "absolute"), a.removeStyle("margin")); d = Math.floor(d); b = Math.floor(b); this.move(d, b) }
                }, foreach: function (a) { for (var b in this._.contents) for (var c in this._.contents[b]) a.call(this, this._.contents[b][c]); return this }, reset: function () {
                    var a =
                        function (a) { a.reset && a.reset(1) }; return function () { this.foreach(a); return this }
                }(), setupContent: function () { var a = arguments; this.foreach(function (b) { b.setup && b.setup.apply(b, a) }) }, commitContent: function () { var a = arguments; this.foreach(function (b) { CKEDITOR.env.ie && this._.currentFocusIndex == b.focusIndex && b.getInputElement().$.blur(); b.commit && b.commit.apply(b, a) }) }, hide: function () {
                    if (this.parts.dialog.isVisible()) {
                        this.fire("hide", {}); this._.editor.fire("dialogHide", this); this.selectPage(this._.tabIdList[0]);
                        var a = this._.element; a.setStyle("display", "none"); this.parts.dialog.setStyle("visibility", "hidden"); for (v(this); CKEDITOR.dialog._.currentTop != this;)CKEDITOR.dialog._.currentTop.hide(); if (this._.parentDialog) { var b = this._.parentDialog.getElement().getFirst(); this._.parentDialog.getElement().removeStyle("z-index"); b.setStyle("z-index", parseInt(b.$.style.zIndex, 10) + Math.floor(this._.editor.config.baseFloatZIndex / 2)) } else u(this._.editor); if (CKEDITOR.dialog._.currentTop = this._.parentDialog) CKEDITOR.dialog._.currentZIndex -=
                            10; else { CKEDITOR.dialog._.currentZIndex = null; a.removeListener("keydown", y); a.removeListener("keyup", q); var c = this._.editor; c.focus(); setTimeout(function () { c.focusManager.unlock(); CKEDITOR.env.iOS && c.window.focus() }, 0) } delete this._.parentDialog; this.foreach(function (a) { a.resetInitValue && a.resetInitValue() }); this.setState(CKEDITOR.DIALOG_STATE_IDLE)
                    }
                }, addPage: function (a) {
                    if (!a.requiredContent || this._.editor.filter.check(a.requiredContent)) {
                        for (var b = [], c = a.label ? ' title\x3d"' + CKEDITOR.tools.htmlEncode(a.label) +
                            '"' : "", d = CKEDITOR.dialog._.uiElementBuilders.vbox.build(this, { type: "vbox", className: "cke_dialog_page_contents", children: a.elements, expand: !!a.expand, padding: a.padding, style: a.style || "width: 100%;" }, b), e = this._.contents[a.id] = {}, g = d.getChild(), f = 0; d = g.shift();)d.notAllowed || "hbox" == d.type || "vbox" == d.type || f++, e[d.id] = d, "function" == typeof d.getChild && g.push.apply(g, d.getChild()); f || (a.hidden = !0); b = CKEDITOR.dom.element.createFromHtml(b.join("")); b.setAttribute("role", "tabpanel"); b.setStyle("min-height",
                                "100%"); d = CKEDITOR.env; e = "cke_" + a.id + "_" + CKEDITOR.tools.getNextNumber(); c = CKEDITOR.dom.element.createFromHtml(['\x3ca class\x3d"cke_dialog_tab"', 0 < this._.pageCount ? " cke_last" : "cke_first", c, a.hidden ? ' style\x3d"display:none"' : "", ' id\x3d"', e, '"', d.gecko && !d.hc ? "" : ' href\x3d"javascript:void(0)"', ' tabIndex\x3d"-1" hidefocus\x3d"true" role\x3d"tab"\x3e', a.label, "\x3c/a\x3e"].join("")); b.setAttribute("aria-labelledby", e); this._.tabs[a.id] = [c, b]; this._.tabIdList.push(a.id); !a.hidden && this._.pageCount++;
                        this._.lastTab = c; this.updateStyle(); b.setAttribute("name", a.id); b.appendTo(this.parts.contents); c.unselectable(); this.parts.tabs.append(c); a.accessKey && (A(this, this, "CTRL+" + a.accessKey, x, z), this._.accessKeyMap["CTRL+" + a.accessKey] = a.id)
                    }
                }, selectPage: function (a) {
                    if (this._.currentTabId != a && !this._.tabs[a][0].hasClass("cke_dialog_tab_disabled") && !1 !== this.fire("selectPage", { page: a, currentPage: this._.currentTabId })) {
                        for (var c in this._.tabs) {
                            var d = this._.tabs[c][0], e = this._.tabs[c][1]; c != a && (d.removeClass("cke_dialog_tab_selected"),
                                d.removeAttribute("aria-selected"), e.hide()); e.setAttribute("aria-hidden", c != a)
                        } var g = this._.tabs[a]; g[0].addClass("cke_dialog_tab_selected"); g[0].setAttribute("aria-selected", !0); CKEDITOR.env.ie6Compat || CKEDITOR.env.ie7Compat ? (b(g[1]), g[1].show(), setTimeout(function () { b(g[1], 1) }, 0)) : g[1].show(); this._.currentTabId = a; this._.currentTabIndex = CKEDITOR.tools.indexOf(this._.tabIdList, a)
                    }
                }, updateStyle: function () { this.parts.dialog[(1 === this._.pageCount ? "add" : "remove") + "Class"]("cke_single_page") }, hidePage: function (a) {
                    var b =
                        this._.tabs[a] && this._.tabs[a][0]; b && 1 != this._.pageCount && b.isVisible() && (a == this._.currentTabId && this.selectPage(f.call(this)), b.hide(), this._.pageCount--, this.updateStyle())
                }, showPage: function (a) { if (a = this._.tabs[a] && this._.tabs[a][0]) a.show(), this._.pageCount++, this.updateStyle() }, getElement: function () { return this._.element }, getName: function () { return this._.name }, getContentElement: function (a, b) { var c = this._.contents[a]; return c && c[b] }, getValueOf: function (a, b) { return this.getContentElement(a, b).getValue() },
                setValueOf: function (a, b, c) { return this.getContentElement(a, b).setValue(c) }, getButton: function (a) { return this._.buttons[a] }, click: function (a) { return this._.buttons[a].click() }, disableButton: function (a) { return this._.buttons[a].disable() }, enableButton: function (a) { return this._.buttons[a].enable() }, getPageCount: function () { return this._.pageCount }, getParentEditor: function () { return this._.editor }, getSelectedElement: function () { return this.getParentEditor().getSelection().getSelectedElement() }, addFocusable: function (a,
                    b) { if ("undefined" == typeof b) b = this._.focusList.length, this._.focusList.push(new m(this, a, b)); else { this._.focusList.splice(b, 0, new m(this, a, b)); for (var c = b + 1; c < this._.focusList.length; c++)this._.focusList[c].focusIndex++ } }, setState: function (a) {
                        if (this.state != a) {
                            this.state = a; if (a == CKEDITOR.DIALOG_STATE_BUSY) {
                                if (!this.parts.spinner) {
                                    var b = this.getParentEditor().lang.dir, c = { attributes: { "class": "cke_dialog_spinner" }, styles: { "float": "rtl" == b ? "right" : "left" } }; c.styles["margin-" + ("rtl" == b ? "left" : "right")] =
                                        "8px"; this.parts.spinner = CKEDITOR.document.createElement("div", c); this.parts.spinner.setHtml("\x26#8987;"); this.parts.spinner.appendTo(this.parts.title, 1)
                                } this.parts.spinner.show(); this.getButton("ok").disable()
                            } else a == CKEDITOR.DIALOG_STATE_IDLE && (this.parts.spinner && this.parts.spinner.hide(), this.getButton("ok").enable()); this.fire("state", a)
                        }
                    }, getModel: function (a) { return this._.model ? this._.model : this.definition.getModel ? this.definition.getModel(a) : null }, setModel: function (a) { this._.model = a }, getMode: function (a) {
                        if (this.definition.getMode) return this.definition.getMode(a);
                        a = this.getModel(a); return !a || a instanceof CKEDITOR.dom.element && !a.getParent() ? CKEDITOR.dialog.CREATION_MODE : CKEDITOR.dialog.EDITING_MODE
                    }
            }; CKEDITOR.tools.extend(CKEDITOR.dialog, {
                CREATION_MODE: 0, EDITING_MODE: 1, add: function (a, b) { this._.dialogDefinitions[a] && "function" != typeof b || (this._.dialogDefinitions[a] = b) }, exists: function (a) { return !!this._.dialogDefinitions[a] }, getCurrent: function () { return CKEDITOR.dialog._.currentTop }, isTabEnabled: function (a, b, c) {
                    a = a.config.removeDialogTabs; return !(a && a.match(new RegExp("(?:^|;)" +
                        b + ":" + c + "(?:$|;)", "i")))
                }, okButton: function () { var a = function (a, b) { b = b || {}; return CKEDITOR.tools.extend({ id: "ok", type: "button", label: a.lang.common.ok, "class": "cke_dialog_ui_button_ok", onClick: function (a) { a = a.data.dialog; !1 !== a.fire("ok", { hide: !0 }).hide && a.hide() } }, b, !0) }; a.type = "button"; a.override = function (b) { return CKEDITOR.tools.extend(function (c) { return a(c, b) }, { type: "button" }, !0) }; return a }(), cancelButton: function () {
                    var a = function (a, b) {
                        b = b || {}; return CKEDITOR.tools.extend({
                            id: "cancel", type: "button",
                            label: a.lang.common.cancel, "class": "cke_dialog_ui_button_cancel", onClick: function (a) { a = a.data.dialog; !1 !== a.fire("cancel", { hide: !0 }).hide && a.hide() }
                        }, b, !0)
                    }; a.type = "button"; a.override = function (b) { return CKEDITOR.tools.extend(function (c) { return a(c, b) }, { type: "button" }, !0) }; return a
                }(), addUIElement: function (a, b) { this._.uiElementBuilders[a] = b }
            }); CKEDITOR.dialog._ = { uiElementBuilders: {}, dialogDefinitions: {}, currentTop: null, currentZIndex: null }; CKEDITOR.event.implementOn(CKEDITOR.dialog); CKEDITOR.event.implementOn(CKEDITOR.dialog.prototype);
            B = { resizable: CKEDITOR.DIALOG_RESIZE_BOTH, minWidth: 600, minHeight: 400, buttons: [CKEDITOR.dialog.okButton, CKEDITOR.dialog.cancelButton] }; var C = function (a, b, c) { for (var d = 0, e; e = a[d]; d++)if (e.id == b || c && e[c] && (e = C(e[c], b, c))) return e; return null }, O = function (a, b, c, d, e) { if (c) { for (var g = 0, f; f = a[g]; g++) { if (f.id == c) return a.splice(g, 0, b), b; if (d && f[d] && (f = O(f[d], b, c, d, !0))) return f } if (e) return null } a.push(b); return b }, J = function (a, b, c) {
                for (var d = 0, e; e = a[d]; d++) {
                    if (e.id == b) return a.splice(d, 1); if (c && e[c] && (e = J(e[c],
                        b, c))) return e
                } return null
            }; k.prototype = { getContents: function (a) { return C(this.contents, a) }, getButton: function (a) { return C(this.buttons, a) }, addContents: function (a, b) { return O(this.contents, a, b) }, addButton: function (a, b) { return O(this.buttons, a, b) }, removeContents: function (a) { J(this.contents, a) }, removeButton: function (a) { J(this.buttons, a) } }; g.prototype = {
                get: function (a) { return C(this.elements, a, "children") }, add: function (a, b) { return O(this.elements, a, b, "children") }, remove: function (a) {
                    J(this.elements, a,
                        "children")
                }
            }; var N = {}, R = {}; (function () {
                CKEDITOR.ui.dialog = {
                    uiElement: function (a, b, c, d, e, g, f) {
                        if (!(4 > arguments.length)) {
                            var h = (d.call ? d(b) : d) || "div", k = ["\x3c", h, " "], l = (e && e.call ? e(b) : e) || {}, m = (g && g.call ? g(b) : g) || {}, n = (f && f.call ? f.call(this, a, b) : f) || "", q = this.domId = m.id || CKEDITOR.tools.getNextId() + "_uiElement"; b.requiredContent && !a.getParentEditor().filter.check(b.requiredContent) && (l.display = "none", this.notAllowed = !0); m.id = q; var x = {}; b.type && (x["cke_dialog_ui_" + b.type] = 1); b.className && (x[b.className] =
                                1); b.disabled && (x.cke_disabled = 1); for (var y = m["class"] && m["class"].split ? m["class"].split(" ") : [], q = 0; q < y.length; q++)y[q] && (x[y[q]] = 1); y = []; for (q in x) y.push(q); m["class"] = y.join(" "); b.title && (m.title = b.title); x = (b.style || "").split(";"); b.align && (y = b.align, l["margin-left"] = "left" == y ? 0 : "auto", l["margin-right"] = "right" == y ? 0 : "auto"); for (q in l) x.push(q + ":" + l[q]); b.hidden && x.push("display:none"); for (q = x.length - 1; 0 <= q; q--)"" === x[q] && x.splice(q, 1); 0 < x.length && (m.style = (m.style ? m.style + "; " : "") + x.join("; "));
                            for (q in m) k.push(q + '\x3d"' + CKEDITOR.tools.htmlEncode(m[q]) + '" '); k.push("\x3e", n, "\x3c/", h, "\x3e"); c.push(k.join("")); (this._ || (this._ = {})).dialog = a; "boolean" == typeof b.isChanged && (this.isChanged = function () { return b.isChanged }); "function" == typeof b.isChanged && (this.isChanged = b.isChanged); "function" == typeof b.setValue && (this.setValue = CKEDITOR.tools.override(this.setValue, function (a) { return function (c) { a.call(this, b.setValue.call(this, c)) } })); "function" == typeof b.getValue && (this.getValue = CKEDITOR.tools.override(this.getValue,
                                function (a) { return function () { return b.getValue.call(this, a.call(this)) } })); CKEDITOR.event.implementOn(this); this.registerEvents(b); this.accessKeyUp && this.accessKeyDown && b.accessKey && A(this, a, "CTRL+" + b.accessKey); var r = this; a.on("load", function () {
                                    var b = r.getInputElement(); if (b) {
                                        var c = r.type in { checkbox: 1, ratio: 1 } && CKEDITOR.env.ie && 8 > CKEDITOR.env.version ? "cke_dialog_ui_focused" : ""; b.on("focus", function () { a._.tabBarMode = !1; a._.hasFocus = !0; r.fire("focus"); c && this.addClass(c) }); b.on("blur", function () {
                                            r.fire("blur");
                                            c && this.removeClass(c)
                                        })
                                    }
                                }); CKEDITOR.tools.extend(this, b); this.keyboardFocusable && (this.tabIndex = b.tabIndex || 0, this.focusIndex = a._.focusList.push(this) - 1, this.on("focus", function () { a._.currentFocusIndex = r.focusIndex }))
                        }
                    }, hbox: function (a, b, c, d, e) {
                        if (!(4 > arguments.length)) {
                            this._ || (this._ = {}); var g = this._.children = b, f = e && e.widths || null, h = e && e.height || null, k, l = { role: "presentation" }; e && e.align && (l.align = e.align); CKEDITOR.ui.dialog.uiElement.call(this, a, e || { type: "hbox" }, d, "table", {}, l, function () {
                                var a =
                                    ['\x3ctbody\x3e\x3ctr class\x3d"cke_dialog_ui_hbox"\x3e']; for (k = 0; k < c.length; k++) {
                                        var b = "cke_dialog_ui_hbox_child", d = []; 0 === k && (b = "cke_dialog_ui_hbox_first"); k == c.length - 1 && (b = "cke_dialog_ui_hbox_last"); a.push('\x3ctd class\x3d"', b, '" role\x3d"presentation" '); f ? f[k] && d.push("width:" + D(f[k])) : d.push("width:" + Math.floor(100 / c.length) + "%"); h && d.push("height:" + D(h)); e && void 0 !== e.padding && d.push("padding:" + D(e.padding)); CKEDITOR.env.ie && CKEDITOR.env.quirks && g[k].align && d.push("text-align:" + g[k].align);
                                        0 < d.length && a.push('style\x3d"' + d.join("; ") + '" '); a.push("\x3e", c[k], "\x3c/td\x3e")
                                    } a.push("\x3c/tr\x3e\x3c/tbody\x3e"); return a.join("")
                            })
                        }
                    }, vbox: function (a, b, c, d, e) {
                        if (!(3 > arguments.length)) {
                            this._ || (this._ = {}); var g = this._.children = b, f = e && e.width || null, h = e && e.heights || null; CKEDITOR.ui.dialog.uiElement.call(this, a, e || { type: "vbox" }, d, "div", null, { role: "presentation" }, function () {
                                var b = ['\x3ctable role\x3d"presentation" cellspacing\x3d"0" border\x3d"0" ']; b.push('style\x3d"'); e && e.expand && b.push("height:100%;");
                                b.push("width:" + D(f || "100%"), ";"); CKEDITOR.env.webkit && b.push("float:none;"); b.push('"'); b.push('align\x3d"', CKEDITOR.tools.htmlEncode(e && e.align || ("ltr" == a.getParentEditor().lang.dir ? "left" : "right")), '" '); b.push("\x3e\x3ctbody\x3e"); for (var d = 0; d < c.length; d++) {
                                    var k = []; b.push('\x3ctr\x3e\x3ctd role\x3d"presentation" '); f && k.push("width:" + D(f || "100%")); h ? k.push("height:" + D(h[d])) : e && e.expand && k.push("height:" + Math.floor(100 / c.length) + "%"); e && void 0 !== e.padding && k.push("padding:" + D(e.padding)); CKEDITOR.env.ie &&
                                        CKEDITOR.env.quirks && g[d].align && k.push("text-align:" + g[d].align); 0 < k.length && b.push('style\x3d"', k.join("; "), '" '); b.push(' class\x3d"cke_dialog_ui_vbox_child"\x3e', c[d], "\x3c/td\x3e\x3c/tr\x3e")
                                } b.push("\x3c/tbody\x3e\x3c/table\x3e"); return b.join("")
                            })
                        }
                    }
                }
            })(); CKEDITOR.ui.dialog.uiElement.prototype = {
                getElement: function () { return CKEDITOR.document.getById(this.domId) }, getInputElement: function () { return this.getElement() }, getDialog: function () { return this._.dialog }, setValue: function (a, b) {
                    this.getInputElement().setValue(a);
                    !b && this.fire("change", { value: a }); return this
                }, getValue: function () { return this.getInputElement().getValue() }, isChanged: function () { return !1 }, selectParentTab: function () { for (var a = this.getInputElement(); (a = a.getParent()) && -1 == a.$.className.search("cke_dialog_page_contents");); if (!a) return this; a = a.getAttribute("name"); this._.dialog._.currentTabId != a && this._.dialog.selectPage(a); return this }, focus: function () { this.selectParentTab().getInputElement().focus(); return this }, registerEvents: function (a) {
                    var b =
                        /^on([A-Z]\w+)/, c, d = function (a, b, c, d) { b.on("load", function () { a.getInputElement().on(c, d, a) }) }, e; for (e in a) if (c = e.match(b)) this.eventProcessors[e] ? this.eventProcessors[e].call(this, this._.dialog, a[e]) : d(this, this._.dialog, c[1].toLowerCase(), a[e]); return this
                }, eventProcessors: { onLoad: function (a, b) { a.on("load", b, this) }, onShow: function (a, b) { a.on("show", b, this) }, onHide: function (a, b) { a.on("hide", b, this) } }, accessKeyDown: function () { this.focus() }, accessKeyUp: function () { }, disable: function () {
                    var a = this.getElement();
                    this.getInputElement().setAttribute("disabled", "true"); a.addClass("cke_disabled")
                }, enable: function () { var a = this.getElement(); this.getInputElement().removeAttribute("disabled"); a.removeClass("cke_disabled") }, isEnabled: function () { return !this.getElement().hasClass("cke_disabled") }, isVisible: function () { return this.getInputElement().isVisible() }, isFocusable: function () { return this.isEnabled() && this.isVisible() ? !0 : !1 }
            }; CKEDITOR.ui.dialog.hbox.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,
                { getChild: function (a) { if (1 > arguments.length) return this._.children.concat(); a.splice || (a = [a]); return 2 > a.length ? this._.children[a[0]] : this._.children[a[0]] && this._.children[a[0]].getChild ? this._.children[a[0]].getChild(a.slice(1, a.length)) : null } }, !0); CKEDITOR.ui.dialog.vbox.prototype = new CKEDITOR.ui.dialog.hbox; (function () {
                    var a = {
                        build: function (a, b, c) {
                            for (var d = b.children, e, g = [], f = [], h = 0; h < d.length && (e = d[h]); h++) { var k = []; g.push(k); f.push(CKEDITOR.dialog._.uiElementBuilders[e.type].build(a, e, k)) } return new CKEDITOR.ui.dialog[b.type](a,
                                f, g, c, b)
                        }
                    }; CKEDITOR.dialog.addUIElement("hbox", a); CKEDITOR.dialog.addUIElement("vbox", a)
                })(); CKEDITOR.dialogCommand = function (a, b) { this.dialogName = a; CKEDITOR.tools.extend(this, b, !0) }; CKEDITOR.dialogCommand.prototype = { exec: function (a) { var b = this.tabId; a.openDialog(this.dialogName, function (a) { b && a.selectPage(b) }) }, canUndo: !1, editorFocus: 1 }; (function () {
                    var a = /^([a]|[^a])+$/, b = /^\d*$/, c = /^\d*(?:\.\d+)?$/, d = /^(((\d*(\.\d+))|(\d*))(px|\%)?)?$/, e = /^(((\d*(\.\d+))|(\d*))(px|em|ex|in|cm|mm|pt|pc|\%)?)?$/i,
                    g = /^(--|-?([a-zA-Z_]|\\))(\\|[a-zA-Z0-9-_])*\s*?:\s*?[^:;]+$/; CKEDITOR.VALIDATE_OR = 1; CKEDITOR.VALIDATE_AND = 2; CKEDITOR.dialog.validate = {
                        functions: function () {
                            var a = arguments; return function () {
                                var b = this && this.getValue ? this.getValue() : a[0], c, d = CKEDITOR.VALIDATE_AND, e = [], g; for (g = 0; g < a.length; g++)if ("function" == typeof a[g]) e.push(a[g]); else break; g < a.length && "string" == typeof a[g] && (c = a[g], g++); g < a.length && "number" == typeof a[g] && (d = a[g]); var f = d == CKEDITOR.VALIDATE_AND ? !0 : !1; for (g = 0; g < e.length; g++)f = d ==
                                    CKEDITOR.VALIDATE_AND ? f && e[g](b) : f || e[g](b); return f ? !0 : c
                            }
                        }, regex: function (a, b) { return function (c) { c = this && this.getValue ? this.getValue() : c; return a.test(c) ? !0 : b } }, notEmpty: function (b) { return this.regex(a, b) }, integer: function (a) { return this.regex(b, a) }, number: function (a) { return this.regex(c, a) }, cssLength: function (a) { return this.functions(function (a) { return e.test(CKEDITOR.tools.trim(a)) }, a) }, htmlLength: function (a) { return this.functions(function (a) { return d.test(CKEDITOR.tools.trim(a)) }, a) }, inlineStyle: function (a) {
                            return this.functions(function (a) {
                                a =
                                CKEDITOR.tools.trim(a).split(";"); "" === a[a.length - 1] && a.pop(); return CKEDITOR.tools.array.every(a, function (a) { return g.test(CKEDITOR.tools.trim(a)) })
                            }, a)
                        }, equals: function (a, b) { return this.functions(function (b) { return b == a }, b) }, notEqual: function (a, b) { return this.functions(function (b) { return b != a }, b) }
                    }; CKEDITOR.on("instanceDestroyed", function (a) {
                        if (CKEDITOR.tools.isEmpty(CKEDITOR.instances)) { for (var b; b = CKEDITOR.dialog._.currentTop;)b.hide(); for (var c in N) N[c].remove(); N = {} } a = a.editor._.storedDialogs;
                        for (var d in a) a[d].destroy()
                    })
                })(); CKEDITOR.tools.extend(CKEDITOR.editor.prototype, {
                    openDialog: function (a, b, c) {
                        var d = null, e = CKEDITOR.dialog._.dialogDefinitions[a]; null === CKEDITOR.dialog._.currentTop && t(this); if ("function" == typeof e) e = this._.storedDialogs || (this._.storedDialogs = {}), d = e[a] || (e[a] = new CKEDITOR.dialog(this, a)), d.setModel(c), b && b.call(d, d), d.show(); else {
                            if ("failed" == e) throw u(this), Error('[CKEDITOR.dialog.openDialog] Dialog "' + a + '" failed when loading definition.'); "string" == typeof e &&
                                CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(e), function () { "function" != typeof CKEDITOR.dialog._.dialogDefinitions[a] && (CKEDITOR.dialog._.dialogDefinitions[a] = "failed"); this.openDialog(a, b, c) }, this, 0, 1)
                        } CKEDITOR.skin.loadPart("dialog"); if (d) d.once("hide", function () { d.setModel(null) }, null, null, 999); return d
                    }
                }); CKEDITOR.plugins.add("dialog", {
                    requires: "dialogui", init: function (a) {
                        E || (CKEDITOR.document.appendStyleSheet(this.path + "styles/dialog.css"), E = !0); a.on("doubleclick", function (b) { b.data.dialog && a.openDialog(b.data.dialog) },
                            null, null, 999)
                    }
                })
        }(), function () {
            CKEDITOR.plugins.add("a11yhelp", {
                requires: "dialog", availableLangs: { af: 1, ar: 1, az: 1, bg: 1, ca: 1, cs: 1, cy: 1, da: 1, de: 1, "de-ch": 1, el: 1, en: 1, "en-au": 1, "en-gb": 1, eo: 1, es: 1, "es-mx": 1, et: 1, eu: 1, fa: 1, fi: 1, fo: 1, fr: 1, "fr-ca": 1, gl: 1, gu: 1, he: 1, hi: 1, hr: 1, hu: 1, id: 1, it: 1, ja: 1, km: 1, ko: 1, ku: 1, lt: 1, lv: 1, mk: 1, mn: 1, nb: 1, nl: 1, no: 1, oc: 1, pl: 1, pt: 1, "pt-br": 1, ro: 1, ru: 1, si: 1, sk: 1, sl: 1, sq: 1, sr: 1, "sr-latn": 1, sv: 1, th: 1, tr: 1, tt: 1, ug: 1, uk: 1, vi: 1, zh: 1, "zh-cn": 1 }, init: function (a) {
                    var f = this; a.addCommand("a11yHelp",
                        { exec: function () { var e = a.langCode, e = f.availableLangs[e] ? e : f.availableLangs[e.replace(/-.*/, "")] ? e.replace(/-.*/, "") : "en"; CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(f.path + "dialogs/lang/" + e + ".js"), function () { a.lang.a11yhelp = f.langEntries[e]; a.openDialog("a11yHelp") }) }, modes: { wysiwyg: 1, source: 1 }, readOnly: 1, canUndo: !1 }); a.setKeystroke(CKEDITOR.ALT + 48, "a11yHelp"); CKEDITOR.dialog.add("a11yHelp", this.path + "dialogs/a11yhelp.js"); a.on("ariaEditorHelpLabel", function (e) { e.data.label = a.lang.common.editorHelp })
                }
            })
        }(),
        CKEDITOR.plugins.add("about", { requires: "dialog", init: function (a) { var f = a.addCommand("about", new CKEDITOR.dialogCommand("about")); f.modes = { wysiwyg: 1, source: 1 }; f.canUndo = !1; f.readOnly = 1; a.ui.addButton && a.ui.addButton("About", { label: a.lang.about.dlgTitle, command: "about", toolbar: "about" }); CKEDITOR.dialog.add("about", this.path + "dialogs/about.js") } }), CKEDITOR.plugins.add("basicstyles", {
            init: function (a) {
                var f = 0, e = function (d, e, c, k) {
                    if (k) {
                        k = new CKEDITOR.style(k); var g = b[c]; g.unshift(k); a.attachStyleStateChange(k,
                            function (b) { !a.readOnly && a.getCommand(c).setState(b) }); a.addCommand(c, new CKEDITOR.styleCommand(k, { contentForms: g })); a.ui.addButton && a.ui.addButton(d, { label: e, command: c, toolbar: "basicstyles," + (f += 10) })
                    }
                }, b = {
                    bold: ["strong", "b", ["span", function (a) { a = a.styles["font-weight"]; return "bold" == a || 700 <= +a }]], italic: ["em", "i", ["span", function (a) { return "italic" == a.styles["font-style"] }]], underline: ["u", ["span", function (a) { return "underline" == a.styles["text-decoration"] }]], strike: ["s", "strike", ["span", function (a) {
                        return "line-through" ==
                            a.styles["text-decoration"]
                    }]], subscript: ["sub"], superscript: ["sup"]
                }, d = a.config, l = a.lang.basicstyles; e("Bold", l.bold, "bold", d.coreStyles_bold); e("Italic", l.italic, "italic", d.coreStyles_italic); e("Underline", l.underline, "underline", d.coreStyles_underline); e("Strike", l.strike, "strike", d.coreStyles_strike); e("Subscript", l.subscript, "subscript", d.coreStyles_subscript); e("Superscript", l.superscript, "superscript", d.coreStyles_superscript); a.setKeystroke([[CKEDITOR.CTRL + 66, "bold"], [CKEDITOR.CTRL + 73, "italic"],
                [CKEDITOR.CTRL + 85, "underline"]])
            }
        }), CKEDITOR.config.coreStyles_bold = { element: "strong", overrides: "b" }, CKEDITOR.config.coreStyles_italic = { element: "em", overrides: "i" }, CKEDITOR.config.coreStyles_underline = { element: "u" }, CKEDITOR.config.coreStyles_strike = { element: "s", overrides: "strike" }, CKEDITOR.config.coreStyles_subscript = { element: "sub" }, CKEDITOR.config.coreStyles_superscript = { element: "sup" }, function () {
            var a = {
                exec: function (a) {
                    var e = a.getCommand("blockquote").state, b = a.getSelection(), d = b && b.getRanges()[0];
                    if (d) {
                        var l = b.createBookmarks(); if (CKEDITOR.env.ie) { var h = l[0].startNode, m = l[0].endNode, c; if (h && "blockquote" == h.getParent().getName()) for (c = h; c = c.getNext();)if (c.type == CKEDITOR.NODE_ELEMENT && c.isBlockBoundary()) { h.move(c, !0); break } if (m && "blockquote" == m.getParent().getName()) for (c = m; c = c.getPrevious();)if (c.type == CKEDITOR.NODE_ELEMENT && c.isBlockBoundary()) { m.move(c); break } } var k = d.createIterator(); k.enlargeBr = a.config.enterMode != CKEDITOR.ENTER_BR; if (e == CKEDITOR.TRISTATE_OFF) {
                            for (h = []; e = k.getNextParagraph();)h.push(e);
                            1 > h.length && (e = a.document.createElement(a.config.enterMode == CKEDITOR.ENTER_P ? "p" : "div"), m = l.shift(), d.insertNode(e), e.append(new CKEDITOR.dom.text("﻿", a.document)), d.moveToBookmark(m), d.selectNodeContents(e), d.collapse(!0), m = d.createBookmark(), h.push(e), l.unshift(m)); c = h[0].getParent(); d = []; for (m = 0; m < h.length; m++)e = h[m], c = c.getCommonAncestor(e.getParent()); for (e = { table: 1, tbody: 1, tr: 1, ol: 1, ul: 1 }; e[c.getName()];)c = c.getParent(); for (m = null; 0 < h.length;) {
                                for (e = h.shift(); !e.getParent().equals(c);)e = e.getParent();
                                e.equals(m) || d.push(e); m = e
                            } for (; 0 < d.length;)if (e = d.shift(), "blockquote" == e.getName()) { for (m = new CKEDITOR.dom.documentFragment(a.document); e.getFirst();)m.append(e.getFirst().remove()), h.push(m.getLast()); m.replace(e) } else h.push(e); d = a.document.createElement("blockquote"); for (d.insertBefore(h[0]); 0 < h.length;)e = h.shift(), d.append(e)
                        } else if (e == CKEDITOR.TRISTATE_ON) {
                            m = []; for (c = {}; e = k.getNextParagraph();) {
                                for (h = d = null; e.getParent();) {
                                    if ("blockquote" == e.getParent().getName()) { d = e.getParent(); h = e; break } e =
                                        e.getParent()
                                } d && h && !h.getCustomData("blockquote_moveout") && (m.push(h), CKEDITOR.dom.element.setMarker(c, h, "blockquote_moveout", !0))
                            } CKEDITOR.dom.element.clearAllMarkers(c); e = []; h = []; for (c = {}; 0 < m.length;)k = m.shift(), d = k.getParent(), k.getPrevious() ? k.getNext() ? (k.breakParent(k.getParent()), h.push(k.getNext())) : k.remove().insertAfter(d) : k.remove().insertBefore(d), d.getCustomData("blockquote_processed") || (h.push(d), CKEDITOR.dom.element.setMarker(c, d, "blockquote_processed", !0)), e.push(k); CKEDITOR.dom.element.clearAllMarkers(c);
                            for (m = h.length - 1; 0 <= m; m--) { d = h[m]; a: { c = d; for (var k = 0, g = c.getChildCount(), n = void 0; k < g && (n = c.getChild(k)); k++)if (n.type == CKEDITOR.NODE_ELEMENT && n.isBlockBoundary()) { c = !1; break a } c = !0 } c && d.remove() } if (a.config.enterMode == CKEDITOR.ENTER_BR) for (d = !0; e.length;)if (k = e.shift(), "div" == k.getName()) {
                                m = new CKEDITOR.dom.documentFragment(a.document); !d || !k.getPrevious() || k.getPrevious().type == CKEDITOR.NODE_ELEMENT && k.getPrevious().isBlockBoundary() || m.append(a.document.createElement("br")); for (d = k.getNext() &&
                                    !(k.getNext().type == CKEDITOR.NODE_ELEMENT && k.getNext().isBlockBoundary()); k.getFirst();)k.getFirst().remove().appendTo(m); d && m.append(a.document.createElement("br")); m.replace(k); d = !1
                            }
                        } b.selectBookmarks(l); a.focus()
                    }
                }, refresh: function (a, e) { this.setState(a.elementPath(e.block || e.blockLimit).contains("blockquote", 1) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF) }, context: "blockquote", allowedContent: "blockquote", requiredContent: "blockquote"
            }; CKEDITOR.plugins.add("blockquote", {
                init: function (f) {
                    f.blockless ||
                    (f.addCommand("blockquote", a), f.ui.addButton && f.ui.addButton("Blockquote", { label: f.lang.blockquote.toolbar, command: "blockquote", toolbar: "blocks,10" }))
                }
            })
        }(), "use strict", function () {
            function a(a, b) { CKEDITOR.tools.extend(this, b, { editor: a, id: "cke-" + CKEDITOR.tools.getUniqueId(), area: a._.notificationArea }); b.type || (this.type = "info"); this.element = this._createElement(); a.plugins.clipboard && CKEDITOR.plugins.clipboard.preventDefaultDropOnElement(this.element) } function f(a) {
                var b = this; this.editor = a; this.notifications =
                    []; this.element = this._createElement(); this._uiBuffer = CKEDITOR.tools.eventsBuffer(10, this._layout, this); this._changeBuffer = CKEDITOR.tools.eventsBuffer(500, this._layout, this); a.on("destroy", function () { b._removeListeners(); b.element.remove() })
            } CKEDITOR.plugins.add("notification", {
                init: function (a) {
                    function b(a) {
                        var b = new CKEDITOR.dom.element("div"); b.setStyles({ position: "fixed", "margin-left": "-9999px" }); b.setAttributes({ "aria-live": "assertive", "aria-atomic": "true" }); b.setText(a); CKEDITOR.document.getBody().append(b);
                        setTimeout(function () { b.remove() }, 100)
                    } a._.notificationArea = new f(a); a.showNotification = function (b, f, h) { var m, c; "progress" == f ? m = h : c = h; b = new CKEDITOR.plugins.notification(a, { message: b, type: f, progress: m, duration: c }); b.show(); return b }; a.on("key", function (d) { if (27 == d.data.keyCode) { var f = a._.notificationArea.notifications; f.length && (b(a.lang.notification.closed), f[f.length - 1].hide(), d.cancel()) } })
                }
            }); a.prototype = {
                show: function () {
                    !1 !== this.editor.fire("notificationShow", { notification: this }) && (this.area.add(this),
                        this._hideAfterTimeout())
                }, update: function (a) {
                    var b = !0; !1 === this.editor.fire("notificationUpdate", { notification: this, options: a }) && (b = !1); var d = this.element, f = d.findOne(".cke_notification_message"), h = d.findOne(".cke_notification_progress"), m = a.type; d.removeAttribute("role"); a.progress && "progress" != this.type && (m = "progress"); m && (d.removeClass(this._getClass()), d.removeAttribute("aria-label"), this.type = m, d.addClass(this._getClass()), d.setAttribute("aria-label", this.type), "progress" != this.type || h ? "progress" !=
                        this.type && h && h.remove() : (h = this._createProgressElement(), h.insertBefore(f))); void 0 !== a.message && (this.message = a.message, f.setHtml(this.message)); void 0 !== a.progress && (this.progress = a.progress, h && h.setStyle("width", this._getPercentageProgress())); b && a.important && (d.setAttribute("role", "alert"), this.isVisible() || this.area.add(this)); this.duration = a.duration; this._hideAfterTimeout()
                }, hide: function () { !1 !== this.editor.fire("notificationHide", { notification: this }) && this.area.remove(this) }, isVisible: function () {
                    return 0 <=
                        CKEDITOR.tools.indexOf(this.area.notifications, this)
                }, _createElement: function () {
                    var a = this, b, d, f = this.editor.lang.common.close; b = new CKEDITOR.dom.element("div"); b.addClass("cke_notification"); b.addClass(this._getClass()); b.setAttributes({ id: this.id, role: "alert", "aria-label": this.type }); "progress" == this.type && b.append(this._createProgressElement()); d = new CKEDITOR.dom.element("p"); d.addClass("cke_notification_message"); d.setHtml(this.message); b.append(d); d = CKEDITOR.dom.element.createFromHtml('\x3ca class\x3d"cke_notification_close" href\x3d"javascript:void(0)" title\x3d"' +
                        f + '" role\x3d"button" tabindex\x3d"-1"\x3e\x3cspan class\x3d"cke_label"\x3eX\x3c/span\x3e\x3c/a\x3e'); b.append(d); d.on("click", function () { a.editor.focus(); a.hide() }); return b
                }, _getClass: function () { return "progress" == this.type ? "cke_notification_info" : "cke_notification_" + this.type }, _createProgressElement: function () { var a = new CKEDITOR.dom.element("span"); a.addClass("cke_notification_progress"); a.setStyle("width", this._getPercentageProgress()); return a }, _getPercentageProgress: function () {
                    return Math.round(100 *
                        (this.progress || 0)) + "%"
                }, _hideAfterTimeout: function () { var a = this, b; this._hideTimeoutId && clearTimeout(this._hideTimeoutId); if ("number" == typeof this.duration) b = this.duration; else if ("info" == this.type || "success" == this.type) b = "number" == typeof this.editor.config.notification_duration ? this.editor.config.notification_duration : 5E3; b && (a._hideTimeoutId = setTimeout(function () { a.hide() }, b)) }
            }; f.prototype = {
                add: function (a) {
                    this.notifications.push(a); this.element.append(a.element); 1 == this.element.getChildCount() &&
                        (CKEDITOR.document.getBody().append(this.element), this._attachListeners()); this._layout()
                }, remove: function (a) { var b = CKEDITOR.tools.indexOf(this.notifications, a); 0 > b || (this.notifications.splice(b, 1), a.element.remove(), this.element.getChildCount() || (this._removeListeners(), this.element.remove())) }, _createElement: function () {
                    var a = this.editor, b = a.config, d = new CKEDITOR.dom.element("div"); d.addClass("cke_notifications_area"); d.setAttribute("id", "cke_notifications_area_" + a.name); d.setStyle("z-index", b.baseFloatZIndex -
                        2); return d
                }, _attachListeners: function () { var a = CKEDITOR.document.getWindow(), b = this.editor; a.on("scroll", this._uiBuffer.input); a.on("resize", this._uiBuffer.input); b.on("change", this._changeBuffer.input); b.on("floatingSpaceLayout", this._layout, this, null, 20); b.on("blur", this._layout, this, null, 20) }, _removeListeners: function () {
                    var a = CKEDITOR.document.getWindow(), b = this.editor; a.removeListener("scroll", this._uiBuffer.input); a.removeListener("resize", this._uiBuffer.input); b.removeListener("change", this._changeBuffer.input);
                    b.removeListener("floatingSpaceLayout", this._layout); b.removeListener("blur", this._layout)
                }, _layout: function () {
                    function a() { b.setStyle("left", y(q + f.width - n - r)) } var b = this.element, d = this.editor, f = d.ui.contentsElement.getClientRect(), h = d.ui.contentsElement.getDocumentPosition(), m, c, k = b.getClientRect(), g, n = this._notificationWidth, r = this._notificationMargin; g = CKEDITOR.document.getWindow(); var w = g.getScrollPosition(), p = g.getViewPaneSize(), t = CKEDITOR.document.getBody(), u = t.getDocumentPosition(), y = CKEDITOR.tools.cssLength;
                    n && r || (g = this.element.getChild(0), n = this._notificationWidth = g.getClientRect().width, r = this._notificationMargin = parseInt(g.getComputedStyle("margin-left"), 10) + parseInt(g.getComputedStyle("margin-right"), 10)); d.toolbar && (m = d.ui.space(d.config.toolbarLocation), c = m.getClientRect()); m && m.isVisible() && c.bottom > f.top && c.bottom < f.bottom - k.height ? b.setStyles({ position: "fixed", top: y(c.bottom) }) : 0 < f.top ? b.setStyles({ position: "absolute", top: y(h.y) }) : h.y + f.height - k.height > w.y ? b.setStyles({ position: "fixed", top: 0 }) :
                        b.setStyles({ position: "absolute", top: y(h.y + f.height - k.height) }); var q = "fixed" == b.getStyle("position") ? f.left : "static" != t.getComputedStyle("position") ? h.x - u.x : h.x; f.width < n + r ? h.x + n + r > w.x + p.width ? a() : b.setStyle("left", y(q)) : h.x + n + r > w.x + p.width ? b.setStyle("left", y(q)) : h.x + f.width / 2 + n / 2 + r > w.x + p.width ? b.setStyle("left", y(q - h.x + w.x + p.width - n - r)) : 0 > f.left + f.width - n - r ? a() : 0 > f.left + f.width / 2 - n / 2 ? b.setStyle("left", y(q - h.x + w.x)) : b.setStyle("left", y(q + f.width / 2 - n / 2 - r / 2))
                }
            }; CKEDITOR.plugins.notification = a
        }(),
        function () {
            var a = '\x3ca id\x3d"{id}" class\x3d"cke_button cke_button__{name} cke_button_{state} {cls}"' + (CKEDITOR.env.gecko && !CKEDITOR.env.hc ? "" : " href\x3d\"javascript:void('{titleJs}')\"") + ' title\x3d"{title}" tabindex\x3d"-1" hidefocus\x3d"true" role\x3d"button" aria-labelledby\x3d"{id}_label" aria-describedby\x3d"{id}_description" aria-haspopup\x3d"{hasArrow}" aria-disabled\x3d"{ariaDisabled}"'; CKEDITOR.env.gecko && CKEDITOR.env.mac && (a += ' onkeypress\x3d"return false;"'); CKEDITOR.env.gecko && (a +=
                ' onblur\x3d"this.style.cssText \x3d this.style.cssText;"'); var f = ""; CKEDITOR.env.ie && (f = 'return false;" onmouseup\x3d"CKEDITOR.tools.getMouseButton(event)\x3d\x3dCKEDITOR.MOUSE_BUTTON_LEFT\x26\x26'); var a = a + (' onkeydown\x3d"return CKEDITOR.tools.callFunction({keydownFn},event);" onfocus\x3d"return CKEDITOR.tools.callFunction({focusFn},event);" onclick\x3d"' + f + 'CKEDITOR.tools.callFunction({clickFn},this);return false;"\x3e\x3cspan class\x3d"cke_button_icon cke_button__{iconName}_icon" style\x3d"{style}"') +
                    '\x3e\x26nbsp;\x3c/span\x3e\x3cspan id\x3d"{id}_label" class\x3d"cke_button_label cke_button__{name}_label" aria-hidden\x3d"false"\x3e{label}\x3c/span\x3e\x3cspan id\x3d"{id}_description" class\x3d"cke_button_label" aria-hidden\x3d"false"\x3e{ariaShortcutSpace}{ariaShortcut}\x3c/span\x3e{arrowHtml}\x3c/a\x3e', e = CKEDITOR.addTemplate("buttonArrow", '\x3cspan class\x3d"cke_button_arrow"\x3e' + (CKEDITOR.env.hc ? "\x26#9660;" : "") + "\x3c/span\x3e"), b = CKEDITOR.addTemplate("button", a); CKEDITOR.plugins.add("button",
                        { beforeInit: function (a) { a.ui.addHandler(CKEDITOR.UI_BUTTON, CKEDITOR.ui.button.handler) } }); CKEDITOR.UI_BUTTON = "button"; CKEDITOR.ui.button = function (a) { CKEDITOR.tools.extend(this, a, { title: a.label, click: a.click || function (b) { b.execCommand(a.command) } }); this._ = {} }; CKEDITOR.ui.button.handler = { create: function (a) { return new CKEDITOR.ui.button(a) } }; CKEDITOR.ui.button.prototype = {
                            render: function (a, f) {
                                function h() {
                                    var b = a.mode; b && (b = this.modes[b] ? void 0 !== m[b] ? m[b] : CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED,
                                        b = a.readOnly && !this.readOnly ? CKEDITOR.TRISTATE_DISABLED : b, this.setState(b), this.refresh && this.refresh())
                                } var m = null, c = CKEDITOR.env, k = this._.id = CKEDITOR.tools.getNextId(), g = "", n = this.command, r, w, p; this._.editor = a; var t = { id: k, button: this, editor: a, focus: function () { CKEDITOR.document.getById(k).focus() }, execute: function () { this.button.click(a) }, attach: function (a) { this.button.attach(a) } }, u = CKEDITOR.tools.addFunction(function (a) { if (t.onkey) return a = new CKEDITOR.dom.event(a), !1 !== t.onkey(t, a.getKeystroke()) }),
                                    y = CKEDITOR.tools.addFunction(function (a) { var b; t.onfocus && (b = !1 !== t.onfocus(t, new CKEDITOR.dom.event(a))); return b }), q = 0; t.clickFn = r = CKEDITOR.tools.addFunction(function () { q && (a.unlockSelection(1), q = 0); t.execute(); c.iOS && a.focus() }); this.modes ? (m = {}, a.on("beforeModeUnload", function () { a.mode && this._.state != CKEDITOR.TRISTATE_DISABLED && (m[a.mode] = this._.state) }, this), a.on("activeFilterChange", h, this), a.on("mode", h, this), !this.readOnly && a.on("readOnly", h, this)) : n && (n = a.getCommand(n)) && (n.on("state", function () { this.setState(n.state) },
                                        this), g += n.state == CKEDITOR.TRISTATE_ON ? "on" : n.state == CKEDITOR.TRISTATE_DISABLED ? "disabled" : "off"); var A; if (this.directional) a.on("contentDirChanged", function (b) { var c = CKEDITOR.document.getById(this._.id), e = c.getFirst(); b = b.data; b != a.lang.dir ? c.addClass("cke_" + b) : c.removeClass("cke_ltr").removeClass("cke_rtl"); e.setAttribute("style", CKEDITOR.skin.getIconStyle(A, "rtl" == b, this.icon, this.iconOffset)) }, this); n ? (w = a.getCommandKeystroke(n)) && (p = CKEDITOR.tools.keystrokeToString(a.lang.common.keyboard, w)) :
                                            g += "off"; w = this.name || this.command; var v = null, z = this.icon; A = w; this.icon && !/\./.test(this.icon) ? (A = this.icon, z = null) : (this.icon && (v = this.icon), CKEDITOR.env.hidpi && this.iconHiDpi && (v = this.iconHiDpi)); v ? (CKEDITOR.skin.addIcon(v, v), z = null) : v = A; g = {
                                                id: k, name: w, iconName: A, label: this.label, cls: (this.hasArrow ? "cke_button_expandable " : "") + (this.className || ""), state: g, ariaDisabled: "disabled" == g ? "true" : "false", title: this.title + (p ? " (" + p.display + ")" : ""), ariaShortcutSpace: p ? "\x26nbsp;" : "", ariaShortcut: p ? a.lang.common.keyboardShortcut +
                                                    " " + p.aria : "", titleJs: c.gecko && !c.hc ? "" : (this.title || "").replace("'", ""), hasArrow: "string" === typeof this.hasArrow && this.hasArrow || (this.hasArrow ? "true" : "false"), keydownFn: u, focusFn: y, clickFn: r, style: CKEDITOR.skin.getIconStyle(v, "rtl" == a.lang.dir, z, this.iconOffset), arrowHtml: this.hasArrow ? e.output() : ""
                                            }; b.output(g, f); if (this.onRender) this.onRender(); return t
                            }, setState: function (a) {
                                if (this._.state == a) return !1; this._.state = a; var b = CKEDITOR.document.getById(this._.id); return b ? (b.setState(a, "cke_button"),
                                    b.setAttribute("aria-disabled", a == CKEDITOR.TRISTATE_DISABLED), this.hasArrow ? b.setAttribute("aria-expanded", a == CKEDITOR.TRISTATE_ON) : a === CKEDITOR.TRISTATE_ON ? b.setAttribute("aria-pressed", !0) : b.removeAttribute("aria-pressed"), !0) : !1
                            }, getState: function () { return this._.state }, toFeature: function (a) { if (this._.feature) return this._.feature; var b = this; this.allowedContent || this.requiredContent || !this.command || (b = a.getCommand(this.command) || b); return this._.feature = b }
                        }; CKEDITOR.ui.prototype.addButton = function (a,
                            b) { this.add(a, CKEDITOR.UI_BUTTON, b) }
        }(), function () {
            function a(a) {
                function b() { for (var c = e(), g = CKEDITOR.tools.clone(a.config.toolbarGroups) || f(a), k = 0; k < g.length; k++) { var l = g[k]; if ("/" != l) { "string" == typeof l && (l = g[k] = { name: l }); var t, u = l.groups; if (u) for (var y = 0; y < u.length; y++)t = u[y], (t = c[t]) && m(l, t); (t = c[l.name]) && m(l, t) } } return g } function e() {
                    var b = {}, c, g, f; for (c in a.ui.items) g = a.ui.items[c], f = g.toolbar || "others", f = f.split(","), g = f[0], f = parseInt(f[1] || -1, 10), b[g] || (b[g] = []), b[g].push({ name: c, order: f });
                    for (g in b) b[g] = b[g].sort(function (a, b) { return a.order == b.order ? 0 : 0 > b.order ? -1 : 0 > a.order ? 1 : a.order < b.order ? -1 : 1 }); return b
                } function m(b, c) { if (c.length) { b.items ? b.items.push(a.ui.create("-")) : b.items = []; for (var e; e = c.shift();)e = "string" == typeof e ? e : e.name, k && -1 != CKEDITOR.tools.indexOf(k, e) || (e = a.ui.create(e)) && a.addFeature(e) && b.items.push(e) } } function c(a) {
                    var b = [], c, d, e; for (c = 0; c < a.length; ++c)d = a[c], e = {}, "/" == d ? b.push(d) : CKEDITOR.tools.isArray(d) ? (m(e, CKEDITOR.tools.clone(d)), b.push(e)) : d.items &&
                        (m(e, CKEDITOR.tools.clone(d.items)), e.name = d.name, b.push(e)); return b
                } var k = a.config.removeButtons, k = k && k.split(","), g = a.config.toolbar; "string" == typeof g && (g = a.config["toolbar_" + g]); return a.toolbar = g ? c(g) : b()
            } function f(a) {
                return a._.toolbarGroups || (a._.toolbarGroups = [{ name: "document", groups: ["mode", "document", "doctools"] }, { name: "clipboard", groups: ["clipboard", "undo"] }, { name: "editing", groups: ["find", "selection", "spellchecker"] }, { name: "forms" }, "/", { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
                { name: "paragraph", groups: ["list", "indent", "blocks", "align", "bidi"] }, { name: "links" }, { name: "insert" }, "/", { name: "styles" }, { name: "colors" }, { name: "tools" }, { name: "others" }, { name: "about" }])
            } var e = function () { this.toolbars = []; this.focusCommandExecuted = !1 }; e.prototype.focus = function () { for (var a = 0, b; b = this.toolbars[a++];)for (var e = 0, f; f = b.items[e++];)if (f.focus) { f.focus(); return } }; var b = {
                modes: { wysiwyg: 1, source: 1 }, readOnly: 1, exec: function (a) {
                    a.toolbox && (a.toolbox.focusCommandExecuted = !0, CKEDITOR.env.ie || CKEDITOR.env.air ?
                        setTimeout(function () { a.toolbox.focus() }, 100) : a.toolbox.focus())
                }
            }; CKEDITOR.plugins.add("toolbar", {
                requires: "button", init: function (d) {
                    var f, h = function (a, b) {
                        var e, g = "rtl" == d.lang.dir, n = d.config.toolbarGroupCycling, r = g ? 37 : 39, g = g ? 39 : 37, n = void 0 === n || n; switch (b) {
                            case 9: case CKEDITOR.SHIFT + 9: for (; !e || !e.items.length;)if (e = 9 == b ? (e ? e.next : a.toolbar.next) || d.toolbox.toolbars[0] : (e ? e.previous : a.toolbar.previous) || d.toolbox.toolbars[d.toolbox.toolbars.length - 1], e.items.length) for (a = e.items[f ? e.items.length -
                                1 : 0]; a && !a.focus;)(a = f ? a.previous : a.next) || (e = 0); a && a.focus(); return !1; case r: e = a; do e = e.next, !e && n && (e = a.toolbar.items[0]); while (e && !e.focus); e ? e.focus() : h(a, 9); return !1; case 40: return a.button && a.button.hasArrow ? a.execute() : h(a, 40 == b ? r : g), !1; case g: case 38: e = a; do e = e.previous, !e && n && (e = a.toolbar.items[a.toolbar.items.length - 1]); while (e && !e.focus); e ? e.focus() : (f = 1, h(a, CKEDITOR.SHIFT + 9), f = 0); return !1; case 27: return d.focus(), !1; case 13: case 32: return a.execute(), !1
                        }return !0
                    }; d.on("uiSpace", function (b) {
                        if (b.data.space ==
                            d.config.toolbarLocation) {
                                b.removeListener(); d.toolbox = new e; var c = CKEDITOR.tools.getNextId(), f = ['\x3cspan id\x3d"', c, '" class\x3d"cke_voice_label"\x3e', d.lang.toolbar.toolbars, "\x3c/span\x3e", '\x3cspan id\x3d"' + d.ui.spaceId("toolbox") + '" class\x3d"cke_toolbox" role\x3d"group" aria-labelledby\x3d"', c, '" onmousedown\x3d"return false;"\x3e'], c = !1 !== d.config.toolbarStartupExpanded, g, l; d.config.toolbarCanCollapse && d.elementMode != CKEDITOR.ELEMENT_MODE_INLINE && f.push('\x3cspan class\x3d"cke_toolbox_main"' +
                                    (c ? "\x3e" : ' style\x3d"display:none"\x3e')); for (var r = d.toolbox.toolbars, w = a(d), p = w.length, t = 0; t < p; t++) {
                                        var u, y = 0, q, A = w[t], v = "/" !== A && ("/" === w[t + 1] || t == p - 1), z; if (A) if (g && (f.push("\x3c/span\x3e"), l = g = 0), "/" === A) f.push('\x3cspan class\x3d"cke_toolbar_break"\x3e\x3c/span\x3e'); else {
                                            z = A.items || A; for (var x = 0; x < z.length; x++) {
                                                var D = z[x], B; if (D) {
                                                    var F = function (a) {
                                                        a = a.render(d, f); E = y.items.push(a) - 1; 0 < E && (a.previous = y.items[E - 1], a.previous.next = a); a.toolbar = y; a.onkey = h; a.onfocus = function () {
                                                            d.toolbox.focusCommandExecuted ||
                                                            d.focus()
                                                        }
                                                    }; if (D.type == CKEDITOR.UI_SEPARATOR) l = g && D; else {
                                                        B = !1 !== D.canGroup; if (!y) {
                                                            u = CKEDITOR.tools.getNextId(); y = { id: u, items: [] }; q = A.name && (d.lang.toolbar.toolbarGroups[A.name] || A.name); f.push('\x3cspan id\x3d"', u, '" class\x3d"cke_toolbar' + (v ? ' cke_toolbar_last"' : '"'), q ? ' aria-labelledby\x3d"' + u + '_label"' : "", ' role\x3d"toolbar"\x3e'); q && f.push('\x3cspan id\x3d"', u, '_label" class\x3d"cke_voice_label"\x3e', q, "\x3c/span\x3e"); f.push('\x3cspan class\x3d"cke_toolbar_start"\x3e\x3c/span\x3e'); var E = r.push(y) -
                                                                1; 0 < E && (y.previous = r[E - 1], y.previous.next = y)
                                                        } B ? g || (f.push('\x3cspan class\x3d"cke_toolgroup" role\x3d"presentation"\x3e'), g = 1) : g && (f.push("\x3c/span\x3e"), g = 0); l && (F(l), l = 0); F(D)
                                                    }
                                                }
                                            } g && (f.push("\x3c/span\x3e"), l = g = 0); y && f.push('\x3cspan class\x3d"cke_toolbar_end"\x3e\x3c/span\x3e\x3c/span\x3e')
                                        }
                                    } d.config.toolbarCanCollapse && f.push("\x3c/span\x3e"); if (d.config.toolbarCanCollapse && d.elementMode != CKEDITOR.ELEMENT_MODE_INLINE) {
                                        var L = CKEDITOR.tools.addFunction(function () { d.execCommand("toolbarCollapse") });
                                        d.on("destroy", function () { CKEDITOR.tools.removeFunction(L) }); d.addCommand("toolbarCollapse", {
                                            readOnly: 1, exec: function (a) {
                                                var b = a.ui.space("toolbar_collapser"), c = b.getPrevious(), d = a.ui.space("contents"), e = c.getParent(), g = parseInt(d.$.style.height, 10), f = e.$.offsetHeight, h = b.hasClass("cke_toolbox_collapser_min"); h ? (c.show(), b.removeClass("cke_toolbox_collapser_min"), b.setAttribute("title", a.lang.toolbar.toolbarCollapse)) : (c.hide(), b.addClass("cke_toolbox_collapser_min"), b.setAttribute("title", a.lang.toolbar.toolbarExpand));
                                                b.getFirst().setText(h ? "▲" : "◀"); d.setStyle("height", g - (e.$.offsetHeight - f) + "px"); a.fire("resize", { outerHeight: a.container.$.offsetHeight, contentsHeight: d.$.offsetHeight, outerWidth: a.container.$.offsetWidth })
                                            }, modes: { wysiwyg: 1, source: 1 }
                                        }); d.setKeystroke(CKEDITOR.ALT + (CKEDITOR.env.ie || CKEDITOR.env.webkit ? 189 : 109), "toolbarCollapse"); f.push('\x3ca title\x3d"' + (c ? d.lang.toolbar.toolbarCollapse : d.lang.toolbar.toolbarExpand) + '" id\x3d"' + d.ui.spaceId("toolbar_collapser") + '" tabIndex\x3d"-1" class\x3d"cke_toolbox_collapser');
                                        c || f.push(" cke_toolbox_collapser_min"); f.push('" onclick\x3d"CKEDITOR.tools.callFunction(' + L + ')"\x3e', '\x3cspan class\x3d"cke_arrow"\x3e\x26#9650;\x3c/span\x3e', "\x3c/a\x3e")
                                    } f.push("\x3c/span\x3e"); b.data.html += f.join("")
                        }
                    }); d.on("destroy", function () { if (this.toolbox) { var a, b = 0, d, e, f; for (a = this.toolbox.toolbars; b < a.length; b++)for (e = a[b].items, d = 0; d < e.length; d++)f = e[d], f.clickFn && CKEDITOR.tools.removeFunction(f.clickFn), f.keyDownFn && CKEDITOR.tools.removeFunction(f.keyDownFn) } }); d.on("uiReady", function () {
                        var a =
                            d.ui.space("toolbox"); a && d.focusManager.add(a, 1)
                    }); d.addCommand("toolbarFocus", b); d.setKeystroke(CKEDITOR.ALT + 121, "toolbarFocus"); d.ui.add("-", CKEDITOR.UI_SEPARATOR, {}); d.ui.addHandler(CKEDITOR.UI_SEPARATOR, { create: function () { return { render: function (a, b) { b.push('\x3cspan class\x3d"cke_toolbar_separator" role\x3d"separator"\x3e\x3c/span\x3e'); return {} } } } })
                }
            }); CKEDITOR.ui.prototype.addToolbarGroup = function (a, b, e) {
                var m = f(this.editor), c = 0 === b, k = { name: a }; if (e) {
                    if (e = CKEDITOR.tools.search(m, function (a) {
                        return a.name ==
                            e
                    })) { !e.groups && (e.groups = []); if (b && (b = CKEDITOR.tools.indexOf(e.groups, b), 0 <= b)) { e.groups.splice(b + 1, 0, a); return } c ? e.groups.splice(0, 0, a) : e.groups.push(a); return } b = null
                } b && (b = CKEDITOR.tools.indexOf(m, function (a) { return a.name == b })); c ? m.splice(0, 0, a) : "number" == typeof b ? m.splice(b + 1, 0, k) : m.push(a)
            }
        }(), CKEDITOR.UI_SEPARATOR = "separator", CKEDITOR.config.toolbarLocation = "top", "use strict", function () {
            function a(a, b, c) {
                b.type || (b.type = "auto"); if (c && !1 === a.fire("beforePaste", b) || !b.dataValue && b.dataTransfer.isEmpty()) return !1;
                b.dataValue || (b.dataValue = ""); if (CKEDITOR.env.gecko && "drop" == b.method && a.toolbox) a.once("afterPaste", function () { a.toolbox.focus() }); return a.fire("paste", b)
            } function f(b) {
                function c() {
                    var a = b.editable(); if (CKEDITOR.plugins.clipboard.isCustomCopyCutSupported) { var d = function (a) { b.getSelection().isCollapsed() || (b.readOnly && "cut" == a.name || B.initPasteDataTransfer(a, b), a.data.preventDefault()) }; a.on("copy", d); a.on("cut", d); a.on("cut", function () { b.readOnly || b.extractSelectedHtml() }, null, null, 999) } a.on(B.mainPasteEvent,
                        function (a) { "beforepaste" == B.mainPasteEvent && F || z(a) }); "beforepaste" == B.mainPasteEvent && (a.on("paste", function (a) { E || (f(), a.data.preventDefault(), z(a), k("paste")) }), a.on("contextmenu", h, null, null, 0), a.on("beforepaste", function (a) { !a.data || a.data.$.ctrlKey || a.data.$.shiftKey || h() }, null, null, 0)); a.on("beforecut", function () { !F && l(b) }); var e; a.attachListener(CKEDITOR.env.ie ? a : b.document.getDocumentElement(), "mouseup", function () { e = setTimeout(x, 0) }); b.on("destroy", function () { clearTimeout(e) }); a.on("keyup",
                            x)
                } function d(a) { return { type: a, canUndo: "cut" == a, startDisabled: !0, fakeKeystroke: "cut" == a ? CKEDITOR.CTRL + 88 : CKEDITOR.CTRL + 67, exec: function () { "cut" == this.type && l(); var a; var c = this.type; if (CKEDITOR.env.ie) a = k(c); else try { a = b.document.$.execCommand(c, !1, null) } catch (d) { a = !1 } a || b.showNotification(b.lang.clipboard[this.type + "Error"]); return a } } } function e() {
                    return {
                        canUndo: !1, async: !0, fakeKeystroke: CKEDITOR.CTRL + 86, exec: function (b, c) {
                            function d(c, f) {
                                f = "undefined" !== typeof f ? f : !0; c ? (c.method = "paste", c.dataTransfer ||
                                    (c.dataTransfer = B.initPasteDataTransfer()), a(b, c, f)) : g && !b._.forcePasteDialog && b.showNotification(k, "info", b.config.clipboard_notificationDuration); b._.forcePasteDialog = !1; b.fire("afterCommandExec", { name: "paste", command: e, returnValue: !!c })
                            } c = "undefined" !== typeof c && null !== c ? c : {}; var e = this, g = "undefined" !== typeof c.notification ? c.notification : !0, f = c.type, h = CKEDITOR.tools.keystrokeToString(b.lang.common.keyboard, b.getCommandKeystroke(this)), k = "string" === typeof g ? g : b.lang.clipboard.pasteNotification.replace(/%1/,
                                '\x3ckbd aria-label\x3d"' + h.aria + '"\x3e' + h.display + "\x3c/kbd\x3e"), h = "string" === typeof c ? c : c.dataValue; f && !0 !== b.config.forcePasteAsPlainText && "allow-word" !== b.config.forcePasteAsPlainText ? b._.nextPasteType = f : delete b._.nextPasteType; "string" === typeof h ? d({ dataValue: h }) : b.getClipboardData(d)
                        }
                    }
                } function f() { E = 1; setTimeout(function () { E = 0 }, 100) } function h() { F = 1; setTimeout(function () { F = 0 }, 10) } function k(a) {
                    var c = b.document, d = c.getBody(), e = !1, f = function () { e = !0 }; d.on(a, f); 7 < CKEDITOR.env.version ? c.$.execCommand(a) :
                        c.$.selection.createRange().execCommand(a); d.removeListener(a, f); return e
                } function l() { if (CKEDITOR.env.ie && !CKEDITOR.env.quirks) { var a = b.getSelection(), c, d, e; a.getType() == CKEDITOR.SELECTION_ELEMENT && (c = a.getSelectedElement()) && (d = a.getRanges()[0], e = b.document.createText(""), e.insertBefore(c), d.setStartBefore(e), d.setEndAfter(c), a.selectRanges([d]), setTimeout(function () { c.getParent() && (e.remove(), a.selectElement(c)) }, 0)) } } function m(a, c) {
                    var d = b.document, e = b.editable(), f = function (a) { a.cancel() }, h;
                    if (!d.getById("cke_pastebin")) {
                        var k = b.getSelection(), l = k.createBookmarks(); CKEDITOR.env.ie && k.root.fire("selectionchange"); var n = new CKEDITOR.dom.element(!CKEDITOR.env.webkit && !e.is("body") || CKEDITOR.env.ie ? "div" : "body", d); n.setAttributes({ id: "cke_pastebin", "data-cke-temp": "1" }); var q = 0, d = d.getWindow(); CKEDITOR.env.webkit ? (e.append(n), n.addClass("cke_editable"), e.is("body") || (q = "static" != e.getComputedStyle("position") ? e : CKEDITOR.dom.element.get(e.$.offsetParent), q = q.getDocumentPosition().y)) : e.getAscendant(CKEDITOR.env.ie ?
                            "body" : "html", 1).append(n); n.setStyles({ position: "absolute", top: d.getScrollPosition().y - q + 10 + "px", width: "1px", height: Math.max(1, d.getViewPaneSize().height - 20) + "px", overflow: "hidden", margin: 0, padding: 0 }); CKEDITOR.env.safari && n.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select", "text")); (q = n.getParent().isReadOnly()) ? (n.setOpacity(0), n.setAttribute("contenteditable", !0)) : n.setStyle("ltr" == b.config.contentsLangDirection ? "left" : "right", "-10000px"); b.on("selectionChange", f, null, null, 0); if (CKEDITOR.env.webkit ||
                                CKEDITOR.env.gecko) h = e.once("blur", f, null, null, -100); q && n.focus(); q = new CKEDITOR.dom.range(n); q.selectNodeContents(n); var y = q.select(); CKEDITOR.env.ie && (h = e.once("blur", function () { b.lockSelection(y) })); var x = CKEDITOR.document.getWindow().getScrollPosition().y; setTimeout(function () {
                                    CKEDITOR.env.webkit && (CKEDITOR.document.getBody().$.scrollTop = x); h && h.removeListener(); CKEDITOR.env.ie && e.focus(); k.selectBookmarks(l); n.remove(); var a; CKEDITOR.env.webkit && (a = n.getFirst()) && a.is && a.hasClass("Apple-style-span") &&
                                        (n = a); b.removeListener("selectionChange", f); c(n.getHtml())
                                }, 0)
                    }
                } function A() { if ("paste" == B.mainPasteEvent) return b.fire("beforePaste", { type: "auto", method: "paste" }), !1; b.focus(); f(); var a = b.focusManager; a.lock(); if (b.editable().fire(B.mainPasteEvent) && !k("paste")) return a.unlock(), !1; a.unlock(); return !0 } function v(a) {
                    if ("wysiwyg" == b.mode) switch (a.data.keyCode) {
                        case CKEDITOR.CTRL + 86: case CKEDITOR.SHIFT + 45: a = b.editable(); f(); "paste" == B.mainPasteEvent && a.fire("beforepaste"); break; case CKEDITOR.CTRL + 88: case CKEDITOR.SHIFT +
                            46: b.fire("saveSnapshot"), setTimeout(function () { b.fire("saveSnapshot") }, 50)
                    }
                } function z(c) { var d = { type: "auto", method: "paste", dataTransfer: B.initPasteDataTransfer(c) }; d.dataTransfer.cacheData(); var e = !1 !== b.fire("beforePaste", d); e && B.canClipboardApiBeTrusted(d.dataTransfer, b) ? (c.data.preventDefault(), setTimeout(function () { a(b, d) }, 0)) : m(c, function (c) { d.dataValue = c.replace(/<span[^>]+data-cke-bookmark[^<]*?<\/span>/ig, ""); e && a(b, d) }) } function x() {
                    if ("wysiwyg" == b.mode) {
                        var a = D("paste"); b.getCommand("cut").setState(D("cut"));
                        b.getCommand("copy").setState(D("copy")); b.getCommand("paste").setState(a); b.fire("pasteState", a)
                    }
                } function D(a) { var c = b.getSelection(), c = c && c.getRanges()[0]; if ((b.readOnly || c && c.checkReadOnly()) && a in { paste: 1, cut: 1 }) return CKEDITOR.TRISTATE_DISABLED; if ("paste" == a) return CKEDITOR.TRISTATE_OFF; a = b.getSelection(); c = a.getRanges(); return a.getType() == CKEDITOR.SELECTION_NONE || 1 == c.length && c[0].collapsed ? CKEDITOR.TRISTATE_DISABLED : CKEDITOR.TRISTATE_OFF } var B = CKEDITOR.plugins.clipboard, F = 0, E = 0; (function () {
                    b.on("key",
                        v); b.on("contentDom", c); b.on("selectionChange", x); if (b.contextMenu) { b.contextMenu.addListener(function () { return { cut: D("cut"), copy: D("copy"), paste: D("paste") } }); var a = null; b.on("menuShow", function () { a && (a.removeListener(), a = null); var c = b.contextMenu.findItemByCommandName("paste"); c && c.element && (a = c.element.on("touchend", function () { b._.forcePasteDialog = !0 })) }) } if (b.ui.addButton) b.once("instanceReady", function () {
                            b._.pasteButtons && CKEDITOR.tools.array.forEach(b._.pasteButtons, function (a) {
                                if (a = b.ui.get(a)) if (a =
                                    CKEDITOR.document.getById(a._.id)) a.on("touchend", function () { b._.forcePasteDialog = !0 })
                            })
                        })
                })(); (function () { function a(c, d, e, f, h) { var k = b.lang.clipboard[d]; b.addCommand(d, e); b.ui.addButton && b.ui.addButton(c, { label: k, command: d, toolbar: "clipboard," + f }); b.addMenuItems && b.addMenuItem(d, { label: k, command: d, group: "clipboard", order: h }) } a("Cut", "cut", d("cut"), 10, 1); a("Copy", "copy", d("copy"), 20, 4); a("Paste", "paste", e(), 30, 8); b._.pasteButtons || (b._.pasteButtons = []); b._.pasteButtons.push("Paste") })(); b.getClipboardData =
                    function (a, c) {
                        function d(a) { a.removeListener(); a.cancel(); c(a.data) } function e(a) { a.removeListener(); a.cancel(); c({ type: h, dataValue: a.data.dataValue, dataTransfer: a.data.dataTransfer, method: "paste" }) } var f = !1, h = "auto"; c || (c = a, a = null); b.on("beforePaste", function (a) { a.removeListener(); f = !0; h = a.data.type }, null, null, 1E3); b.on("paste", d, null, null, 0); !1 === A() && (b.removeListener("paste", d), b._.forcePasteDialog && f && b.fire("pasteDialog") ? (b.on("pasteDialogCommit", e), b.on("dialogHide", function (a) {
                            a.removeListener();
                            a.data.removeListener("pasteDialogCommit", e); a.data._.committed || c(null)
                        })) : c(null))
                    }
            } function e(a) { if (CKEDITOR.env.webkit) { if (!a.match(/^[^<]*$/g) && !a.match(/^(<div><br( ?\/)?><\/div>|<div>[^<]*<\/div>)*$/gi)) return "html" } else if (CKEDITOR.env.ie) { if (!a.match(/^([^<]|<br( ?\/)?>)*$/gi) && !a.match(/^(<p>([^<]|<br( ?\/)?>)*<\/p>|(\r\n))*$/gi)) return "html" } else if (CKEDITOR.env.gecko) { if (!a.match(/^([^<]|<br( ?\/)?>)*$/gi)) return "html" } else return "html"; return "htmlifiedtext" } function b(a, b) {
                function c(a) {
                    return CKEDITOR.tools.repeat("\x3c/p\x3e\x3cp\x3e",
                        ~~(a / 2)) + (1 == a % 2 ? "\x3cbr\x3e" : "")
                } b = b.replace(/(?!\u3000)\s+/g, " ").replace(/> +</g, "\x3e\x3c").replace(/<br ?\/>/gi, "\x3cbr\x3e"); b = b.replace(/<\/?[A-Z]+>/g, function (a) { return a.toLowerCase() }); if (b.match(/^[^<]$/)) return b; CKEDITOR.env.webkit && -1 < b.indexOf("\x3cdiv\x3e") && (b = b.replace(/^(<div>(<br>|)<\/div>)(?!$|(<div>(<br>|)<\/div>))/g, "\x3cbr\x3e").replace(/^(<div>(<br>|)<\/div>){2}(?!$)/g, "\x3cdiv\x3e\x3c/div\x3e"), b.match(/<div>(<br>|)<\/div>/) && (b = "\x3cp\x3e" + b.replace(/(<div>(<br>|)<\/div>)+/g,
                    function (a) { return c(a.split("\x3c/div\x3e\x3cdiv\x3e").length + 1) }) + "\x3c/p\x3e"), b = b.replace(/<\/div><div>/g, "\x3cbr\x3e"), b = b.replace(/<\/?div>/g, "")); CKEDITOR.env.gecko && a.enterMode != CKEDITOR.ENTER_BR && (CKEDITOR.env.gecko && (b = b.replace(/^<br><br>$/, "\x3cbr\x3e")), -1 < b.indexOf("\x3cbr\x3e\x3cbr\x3e") && (b = "\x3cp\x3e" + b.replace(/(<br>){2,}/g, function (a) { return c(a.length / 4) }) + "\x3c/p\x3e")); return h(a, b)
            } function d(a) {
                function b() {
                    var a = {}, c; for (c in CKEDITOR.dtd) "$" != c.charAt(0) && "div" != c && "span" !=
                        c && (a[c] = 1); return a
                } var c = {}; return { get: function (d) { return "plain-text" == d ? c.plainText || (c.plainText = new CKEDITOR.filter(a, "br")) : "semantic-content" == d ? ((d = c.semanticContent) || (d = new CKEDITOR.filter(a, {}), d.allow({ $1: { elements: b(), attributes: !0, styles: !1, classes: !1 } }), d = c.semanticContent = d), d) : d ? new CKEDITOR.filter(a, d) : null } }
            } function l(a, b, c) { b = CKEDITOR.htmlParser.fragment.fromHtml(b); var d = new CKEDITOR.htmlParser.basicWriter; c.applyTo(b, !0, !1, a.activeEnterMode); b.writeHtml(d); return d.getHtml() }
            function h(a, b) { a.enterMode == CKEDITOR.ENTER_BR ? b = b.replace(/(<\/p><p>)+/g, function (a) { return CKEDITOR.tools.repeat("\x3cbr\x3e", a.length / 7 * 2) }).replace(/<\/?p>/g, "") : a.enterMode == CKEDITOR.ENTER_DIV && (b = b.replace(/<(\/)?p>/g, "\x3c$1div\x3e")); return b } function m(a) { a.data.preventDefault(); a.data.$.dataTransfer.dropEffect = "none" } function c(b) {
                var c = CKEDITOR.plugins.clipboard; b.on("contentDom", function () {
                    function d(c, e, f) {
                        e.select(); a(b, { dataTransfer: f, method: "drop" }, 1); f.sourceEditor.fire("saveSnapshot");
                        f.sourceEditor.editable().extractHtmlFromRange(c); f.sourceEditor.getSelection().selectRanges([c]); f.sourceEditor.fire("saveSnapshot")
                    } function e(d, f) { d.select(); a(b, { dataTransfer: f, method: "drop" }, 1); c.resetDragDataTransfer() } function f(a, c, d) { var e = { $: a.data.$, target: a.data.getTarget() }; c && (e.dragRange = c); d && (e.dropRange = d); !1 === b.fire(a.name, e) && a.data.preventDefault() } function h(a) { a.type != CKEDITOR.NODE_ELEMENT && (a = a.getParent()); return a.getChildCount() } var k = b.editable(), l = CKEDITOR.plugins.clipboard.getDropTarget(b),
                        m = b.ui.space("top"), A = b.ui.space("bottom"); c.preventDefaultDropOnElement(m); c.preventDefaultDropOnElement(A); k.attachListener(l, "dragstart", f); k.attachListener(b, "dragstart", c.resetDragDataTransfer, c, null, 1); k.attachListener(b, "dragstart", function (a) { c.initDragDataTransfer(a, b) }, null, null, 2); k.attachListener(b, "dragstart", function () {
                            var a = c.dragRange = b.getSelection().getRanges()[0]; CKEDITOR.env.ie && 10 > CKEDITOR.env.version && (c.dragStartContainerChildCount = a ? h(a.startContainer) : null, c.dragEndContainerChildCount =
                                a ? h(a.endContainer) : null)
                        }, null, null, 100); k.attachListener(l, "dragend", f); k.attachListener(b, "dragend", c.initDragDataTransfer, c, null, 1); k.attachListener(b, "dragend", c.resetDragDataTransfer, c, null, 100); k.attachListener(l, "dragover", function (a) { if (CKEDITOR.env.edge) a.data.preventDefault(); else { var b = a.data.getTarget(); b && b.is && b.is("html") ? a.data.preventDefault() : CKEDITOR.env.ie && CKEDITOR.plugins.clipboard.isFileApiSupported && a.data.$.dataTransfer.types.contains("Files") && a.data.preventDefault() } });
                    k.attachListener(l, "drop", function (a) { if (!a.data.$.defaultPrevented && (a.data.preventDefault(), !b.readOnly)) { var d = a.data.getTarget(); if (!d.isReadOnly() || d.type == CKEDITOR.NODE_ELEMENT && d.is("html")) { var d = c.getRangeAtDropPosition(a, b), e = c.dragRange; d && f(a, e, d) } } }, null, null, 9999); k.attachListener(b, "drop", c.initDragDataTransfer, c, null, 1); k.attachListener(b, "drop", function (a) {
                        if (a = a.data) {
                            var f = a.dropRange, h = a.dragRange, k = a.dataTransfer; k.getTransferType(b) == CKEDITOR.DATA_TRANSFER_INTERNAL ? setTimeout(function () {
                                c.internalDrop(h,
                                    f, k, b)
                            }, 0) : k.getTransferType(b) == CKEDITOR.DATA_TRANSFER_CROSS_EDITORS ? d(h, f, k) : e(f, k)
                        }
                    }, null, null, 9999)
                })
            } var k; CKEDITOR.plugins.add("clipboard", {
                requires: "dialog,notification,toolbar", init: function (a) {
                    function h(a) { if (!a || t === a.id) return !1; var b = a.getTypes(), b = 1 === b.length && "Files" === b[0]; a = 1 === a.getFilesCount(); return b && a } var k, m = d(a); a.config.forcePasteAsPlainText ? k = "plain-text" : a.config.pasteFilter ? k = a.config.pasteFilter : !CKEDITOR.env.webkit || "pasteFilter" in a.config || (k = "semantic-content");
                    a.pasteFilter = m.get(k); f(a); c(a); CKEDITOR.dialog.add("paste", CKEDITOR.getUrl(this.path + "dialogs/paste.js")); if (CKEDITOR.env.gecko) {
                        var p = ["image/png", "image/jpeg", "image/gif"], t; a.on("paste", function (b) {
                            var c = b.data, d = c.dataTransfer; if (!c.dataValue && "paste" == c.method && h(d) && (d = d.getFile(0), -1 != CKEDITOR.tools.indexOf(p, d.type))) {
                                var e = new FileReader; e.addEventListener("load", function () { b.data.dataValue = '\x3cimg src\x3d"' + e.result + '" /\x3e'; a.fire("paste", b.data) }, !1); e.addEventListener("abort", function () {
                                    a.fire("paste",
                                        b.data)
                                }, !1); e.addEventListener("error", function () { a.fire("paste", b.data) }, !1); e.readAsDataURL(d); t = c.dataTransfer.id; b.stop()
                            }
                        }, null, null, 1)
                    } a.on("paste", function (b) { b.data.dataTransfer || (b.data.dataTransfer = new CKEDITOR.plugins.clipboard.dataTransfer); if (!b.data.dataValue) { var c = b.data.dataTransfer, d = c.getData("text/html"); if (d) b.data.dataValue = d, b.data.type = "html"; else if (d = c.getData("text/plain")) b.data.dataValue = a.editable().transformPlainTextToHtml(d), b.data.type = "text" } }, null, null, 1); a.on("paste",
                        function (a) {
                            var b = a.data.dataValue, c = CKEDITOR.dtd.$block; -1 < b.indexOf("Apple-") && (b = b.replace(/<span class="Apple-converted-space">&nbsp;<\/span>/gi, " "), "html" != a.data.type && (b = b.replace(/<span class="Apple-tab-span"[^>]*>([^<]*)<\/span>/gi, function (a, b) { return b.replace(/\t/g, "\x26nbsp;\x26nbsp; \x26nbsp;") })), -1 < b.indexOf('\x3cbr class\x3d"Apple-interchange-newline"\x3e') && (a.data.startsWithEOL = 1, a.data.preSniffing = "html", b = b.replace(/<br class="Apple-interchange-newline">/, "")), b = b.replace(/(<[^>]+) class="Apple-[^"]*"/gi,
                                "$1")); if (b.match(/^<[^<]+cke_(editable|contents)/i)) { var d, e, g = new CKEDITOR.dom.element("div"); for (g.setHtml(b); 1 == g.getChildCount() && (d = g.getFirst()) && d.type == CKEDITOR.NODE_ELEMENT && (d.hasClass("cke_editable") || d.hasClass("cke_contents"));)g = e = d; e && (b = e.getHtml().replace(/<br>$/i, "")) } CKEDITOR.env.ie ? b = b.replace(/^&nbsp;(?: |\r\n)?<(\w+)/g, function (b, d) { return d.toLowerCase() in c ? (a.data.preSniffing = "html", "\x3c" + d) : b }) : CKEDITOR.env.webkit ? b = b.replace(/<\/(\w+)><div><br><\/div>$/, function (b, d) {
                                    return d in
                                        c ? (a.data.endsWithEOL = 1, "\x3c/" + d + "\x3e") : b
                                }) : CKEDITOR.env.gecko && (b = b.replace(/(\s)<br>$/, "$1")); a.data.dataValue = b
                        }, null, null, 3); a.on("paste", function (c) {
                            c = c.data; var d = a._.nextPasteType || c.type, f = c.dataValue, h, k = a.config.clipboard_defaultContentType || "html", n = c.dataTransfer.getTransferType(a) == CKEDITOR.DATA_TRANSFER_EXTERNAL, x = !0 === a.config.forcePasteAsPlainText; h = "html" == d || "html" == c.preSniffing ? "html" : e(f); delete a._.nextPasteType; "htmlifiedtext" == h && (f = b(a.config, f)); if ("text" == d && "html" == h) f =
                                l(a, f, m.get("plain-text")); else if (n && a.pasteFilter && !c.dontFilter || x) f = l(a, f, a.pasteFilter); c.startsWithEOL && (f = '\x3cbr data-cke-eol\x3d"1"\x3e' + f); c.endsWithEOL && (f += '\x3cbr data-cke-eol\x3d"1"\x3e'); "auto" == d && (d = "html" == h || "html" == k ? "html" : "text"); c.type = d; c.dataValue = f; delete c.preSniffing; delete c.startsWithEOL; delete c.endsWithEOL
                        }, null, null, 6); a.on("paste", function (b) { b = b.data; b.dataValue && (a.insertHtml(b.dataValue, b.type, b.range), setTimeout(function () { a.fire("afterPaste") }, 0)) }, null, null,
                            1E3); a.on("pasteDialog", function (b) { setTimeout(function () { a.openDialog("paste", b.data) }, 0) })
                }
            }); CKEDITOR.plugins.clipboard = {
                isCustomCopyCutSupported: CKEDITOR.env.ie && 16 > CKEDITOR.env.version || CKEDITOR.env.iOS && 605 > CKEDITOR.env.version ? !1 : !0, isCustomDataTypesSupported: !CKEDITOR.env.ie || 16 <= CKEDITOR.env.version, isFileApiSupported: !CKEDITOR.env.ie || 9 < CKEDITOR.env.version, mainPasteEvent: CKEDITOR.env.ie && !CKEDITOR.env.edge ? "beforepaste" : "paste", addPasteButton: function (a, b, c) {
                    a.ui.addButton && (a.ui.addButton(b,
                        c), a._.pasteButtons || (a._.pasteButtons = []), a._.pasteButtons.push(b))
                }, canClipboardApiBeTrusted: function (a, b) { return a.getTransferType(b) != CKEDITOR.DATA_TRANSFER_EXTERNAL || CKEDITOR.env.chrome && !a.isEmpty() || CKEDITOR.env.gecko && (a.getData("text/html") || a.getFilesCount()) || CKEDITOR.env.safari && 603 <= CKEDITOR.env.version && !CKEDITOR.env.iOS || CKEDITOR.env.iOS && 605 <= CKEDITOR.env.version || CKEDITOR.env.edge && 16 <= CKEDITOR.env.version ? !0 : !1 }, getDropTarget: function (a) {
                    var b = a.editable(); return CKEDITOR.env.ie &&
                        9 > CKEDITOR.env.version || b.isInline() ? b : a.document
                }, fixSplitNodesAfterDrop: function (a, b, c, d) {
                    function e(a, c, d) { var g = a; g.type == CKEDITOR.NODE_TEXT && (g = a.getParent()); if (g.equals(c) && d != c.getChildCount()) return a = b.startContainer.getChild(b.startOffset - 1), c = b.startContainer.getChild(b.startOffset), a && a.type == CKEDITOR.NODE_TEXT && c && c.type == CKEDITOR.NODE_TEXT && (d = a.getLength(), a.setText(a.getText() + c.getText()), c.remove(), b.setStart(a, d), b.collapse(!0)), !0 } var f = b.startContainer; "number" == typeof d && "number" ==
                        typeof c && f.type == CKEDITOR.NODE_ELEMENT && (e(a.startContainer, f, c) || e(a.endContainer, f, d))
                }, isDropRangeAffectedByDragRange: function (a, b) { var c = b.startContainer, d = b.endOffset; return a.endContainer.equals(c) && a.endOffset <= d || a.startContainer.getParent().equals(c) && a.startContainer.getIndex() < d || a.endContainer.getParent().equals(c) && a.endContainer.getIndex() < d ? !0 : !1 }, internalDrop: function (b, c, d, e) {
                    var f = CKEDITOR.plugins.clipboard, h = e.editable(), k, l; e.fire("saveSnapshot"); e.fire("lockSnapshot", { dontUpdate: 1 });
                    CKEDITOR.env.ie && 10 > CKEDITOR.env.version && this.fixSplitNodesAfterDrop(b, c, f.dragStartContainerChildCount, f.dragEndContainerChildCount); (l = this.isDropRangeAffectedByDragRange(b, c)) || (k = b.createBookmark(!1)); f = c.clone().createBookmark(!1); l && (k = b.createBookmark(!1)); b = k.startNode; c = k.endNode; l = f.startNode; c && b.getPosition(l) & CKEDITOR.POSITION_PRECEDING && c.getPosition(l) & CKEDITOR.POSITION_FOLLOWING && l.insertBefore(b); b = e.createRange(); b.moveToBookmark(k); h.extractHtmlFromRange(b, 1); c = e.createRange();
                    f.startNode.getCommonAncestor(h) || (f = e.getSelection().createBookmarks()[0]); c.moveToBookmark(f); a(e, { dataTransfer: d, method: "drop", range: c }, 1); e.fire("unlockSnapshot")
                }, getRangeAtDropPosition: function (a, b) {
                    var c = a.data.$, d = c.clientX, e = c.clientY, f = b.getSelection(!0).getRanges()[0], h = b.createRange(); if (a.data.testRange) return a.data.testRange; if (document.caretRangeFromPoint && b.document.$.caretRangeFromPoint(d, e)) c = b.document.$.caretRangeFromPoint(d, e), h.setStart(CKEDITOR.dom.node(c.startContainer), c.startOffset),
                        h.collapse(!0); else if (c.rangeParent) h.setStart(CKEDITOR.dom.node(c.rangeParent), c.rangeOffset), h.collapse(!0); else {
                            if (CKEDITOR.env.ie && 8 < CKEDITOR.env.version && f && b.editable().hasFocus) return f; if (document.body.createTextRange) {
                                b.focus(); c = b.document.getBody().$.createTextRange(); try {
                                    for (var k = !1, l = 0; 20 > l && !k; l++) { if (!k) try { c.moveToPoint(d, e - l), k = !0 } catch (m) { } if (!k) try { c.moveToPoint(d, e + l), k = !0 } catch (v) { } } if (k) {
                                        var z = "cke-temp-" + (new Date).getTime(); c.pasteHTML('\x3cspan id\x3d"' + z + '"\x3e​\x3c/span\x3e');
                                        var x = b.document.getById(z); h.moveToPosition(x, CKEDITOR.POSITION_BEFORE_START); x.remove()
                                    } else { var D = b.document.$.elementFromPoint(d, e), B = new CKEDITOR.dom.element(D), F; if (B.equals(b.editable()) || "html" == B.getName()) return f && f.startContainer && !f.startContainer.equals(b.editable()) ? f : null; F = B.getClientRect(); d < F.left ? h.setStartAt(B, CKEDITOR.POSITION_AFTER_START) : h.setStartAt(B, CKEDITOR.POSITION_BEFORE_END); h.collapse(!0) }
                                } catch (E) { return null }
                            } else return null
                        } return h
                }, initDragDataTransfer: function (a,
                    b) { var c = a.data.$ ? a.data.$.dataTransfer : null, d = new this.dataTransfer(c, b); "dragstart" === a.name && d.storeId(); c ? this.dragData && d.id == this.dragData.id ? d = this.dragData : this.dragData = d : this.dragData ? d = this.dragData : this.dragData = d; a.data.dataTransfer = d }, resetDragDataTransfer: function () { this.dragData = null }, initPasteDataTransfer: function (a, b) {
                        if (this.isCustomCopyCutSupported) {
                            if (a && a.data && a.data.$) {
                                var c = a.data.$.clipboardData, d = new this.dataTransfer(c, b); "copy" !== a.name && "cut" !== a.name || d.storeId(); this.copyCutData &&
                                    d.id == this.copyCutData.id ? (d = this.copyCutData, d.$ = c) : this.copyCutData = d; return d
                            } return new this.dataTransfer(null, b)
                        } return new this.dataTransfer(CKEDITOR.env.edge && a && a.data.$ && a.data.$.clipboardData || null, b)
                    }, preventDefaultDropOnElement: function (a) { a && a.on("dragover", m) }
            }; k = CKEDITOR.plugins.clipboard.isCustomDataTypesSupported ? "cke/id" : "Text"; CKEDITOR.plugins.clipboard.dataTransfer = function (a, b) {
                a && (this.$ = a); this._ = {
                    metaRegExp: /^<meta.*?>/i, bodyRegExp: /<body(?:[\s\S]*?)>([\s\S]*)<\/body>/i, fragmentRegExp: /\s*\x3c!--StartFragment--\x3e|\x3c!--EndFragment--\x3e\s*/g,
                    data: {}, files: [], nativeHtmlCache: "", normalizeType: function (a) { a = a.toLowerCase(); return "text" == a || "text/plain" == a ? "Text" : "url" == a ? "URL" : a }
                }; this._.fallbackDataTransfer = new CKEDITOR.plugins.clipboard.fallbackDataTransfer(this); this.id = this.getData(k); this.id || (this.id = "Text" == k ? "" : "cke-" + CKEDITOR.tools.getUniqueId()); b && (this.sourceEditor = b, this.setData("text/html", b.getSelectedHtml(1)), "Text" == k || this.getData("text/plain") || this.setData("text/plain", b.getSelection().getSelectedText()))
            }; CKEDITOR.DATA_TRANSFER_INTERNAL =
                1; CKEDITOR.DATA_TRANSFER_CROSS_EDITORS = 2; CKEDITOR.DATA_TRANSFER_EXTERNAL = 3; CKEDITOR.plugins.clipboard.dataTransfer.prototype = {
                    getData: function (a, b) {
                        a = this._.normalizeType(a); var c = "text/html" == a && b ? this._.nativeHtmlCache : this._.data[a]; if (void 0 === c || null === c || "" === c) { if (this._.fallbackDataTransfer.isRequired()) c = this._.fallbackDataTransfer.getData(a, b); else try { c = this.$.getData(a) || "" } catch (d) { c = "" } "text/html" != a || b || (c = this._stripHtml(c)) } "Text" == a && CKEDITOR.env.gecko && this.getFilesCount() && "file://" ==
                            c.substring(0, 7) && (c = ""); if ("string" === typeof c) var e = c.indexOf("\x3c/html\x3e"), c = -1 !== e ? c.substring(0, e + 7) : c; return c
                    }, setData: function (a, b) { a = this._.normalizeType(a); "text/html" == a ? (this._.data[a] = this._stripHtml(b), this._.nativeHtmlCache = b) : this._.data[a] = b; if (CKEDITOR.plugins.clipboard.isCustomDataTypesSupported || "URL" == a || "Text" == a) if ("Text" == k && "Text" == a && (this.id = b), this._.fallbackDataTransfer.isRequired()) this._.fallbackDataTransfer.setData(a, b); else try { this.$.setData(a, b) } catch (c) { } }, storeId: function () {
                        "Text" !==
                        k && this.setData(k, this.id)
                    }, getTransferType: function (a) { return this.sourceEditor ? this.sourceEditor == a ? CKEDITOR.DATA_TRANSFER_INTERNAL : CKEDITOR.DATA_TRANSFER_CROSS_EDITORS : CKEDITOR.DATA_TRANSFER_EXTERNAL }, cacheData: function () {
                        function a(c) { c = b._.normalizeType(c); var d = b.getData(c); "text/html" == c && (b._.nativeHtmlCache = b.getData(c, !0), d = b._stripHtml(d)); d && (b._.data[c] = d) } if (this.$) {
                            var b = this, c, d; if (CKEDITOR.plugins.clipboard.isCustomDataTypesSupported) { if (this.$.types) for (c = 0; c < this.$.types.length; c++)a(this.$.types[c]) } else a("Text"),
                                a("URL"); d = this._getImageFromClipboard(); if (this.$ && this.$.files || d) { this._.files = []; if (this.$.files && this.$.files.length) for (c = 0; c < this.$.files.length; c++)this._.files.push(this.$.files[c]); 0 === this._.files.length && d && this._.files.push(d) }
                        }
                    }, getFilesCount: function () { return this._.files.length ? this._.files.length : this.$ && this.$.files && this.$.files.length ? this.$.files.length : this._getImageFromClipboard() ? 1 : 0 }, getFile: function (a) {
                        return this._.files.length ? this._.files[a] : this.$ && this.$.files && this.$.files.length ?
                            this.$.files[a] : 0 === a ? this._getImageFromClipboard() : void 0
                    }, isEmpty: function () { var a = {}, b; if (this.getFilesCount()) return !1; CKEDITOR.tools.array.forEach(CKEDITOR.tools.object.keys(this._.data), function (b) { a[b] = 1 }); if (this.$) if (CKEDITOR.plugins.clipboard.isCustomDataTypesSupported) { if (this.$.types) for (var c = 0; c < this.$.types.length; c++)a[this.$.types[c]] = 1 } else a.Text = 1, a.URL = 1; "Text" != k && (a[k] = 0); for (b in a) if (a[b] && "" !== this.getData(b)) return !1; return !0 }, getTypes: function () {
                        return this.$ && this.$.types ?
                            [].slice.call(this.$.types) : []
                    }, _getImageFromClipboard: function () { var a; try { if (this.$ && this.$.items && this.$.items[0] && (a = this.$.items[0].getAsFile()) && a.type) return a } catch (b) { } }, _stripHtml: function (a) { if (a && a.length) { a = a.replace(this._.metaRegExp, ""); var b = this._.bodyRegExp.exec(a); b && b.length && (a = b[1], a = a.replace(this._.fragmentRegExp, "")) } return a }
                }; CKEDITOR.plugins.clipboard.fallbackDataTransfer = function (a) { this._dataTransfer = a; this._customDataFallbackType = "text/html" }; CKEDITOR.plugins.clipboard.fallbackDataTransfer._isCustomMimeTypeSupported =
                    null; CKEDITOR.plugins.clipboard.fallbackDataTransfer._customTypes = []; CKEDITOR.plugins.clipboard.fallbackDataTransfer.prototype = {
                        isRequired: function () {
                            var a = CKEDITOR.plugins.clipboard.fallbackDataTransfer, b = this._dataTransfer.$; if (null === a._isCustomMimeTypeSupported) if (b) { a._isCustomMimeTypeSupported = !1; if (CKEDITOR.env.edge && 17 <= CKEDITOR.env.version) return !0; try { b.setData("cke/mimetypetest", "cke test value"), a._isCustomMimeTypeSupported = "cke test value" === b.getData("cke/mimetypetest"), b.clearData("cke/mimetypetest") } catch (c) { } } else return !1;
                            return !a._isCustomMimeTypeSupported
                        }, getData: function (a, b) { var c = this._getData(this._customDataFallbackType, !0); if (b) return c; var c = this._extractDataComment(c), d = null, d = a === this._customDataFallbackType ? c.content : c.data && c.data[a] ? c.data[a] : this._getData(a, !0); return null !== d ? d : "" }, setData: function (a, b) {
                            var c = a === this._customDataFallbackType; c && (b = this._applyDataComment(b, this._getFallbackTypeData())); var d = b, e = this._dataTransfer.$; try { e.setData(a, d), c && (this._dataTransfer._.nativeHtmlCache = d) } catch (f) {
                                if (this._isUnsupportedMimeTypeError(f)) {
                                    c =
                                    CKEDITOR.plugins.clipboard.fallbackDataTransfer; -1 === CKEDITOR.tools.indexOf(c._customTypes, a) && c._customTypes.push(a); var c = this._getFallbackTypeContent(), h = this._getFallbackTypeData(); h[a] = d; try { d = this._applyDataComment(c, h), e.setData(this._customDataFallbackType, d), this._dataTransfer._.nativeHtmlCache = d } catch (k) { d = "" }
                                }
                            } return d
                        }, _getData: function (a, b) { var c = this._dataTransfer._.data; if (!b && c[a]) return c[a]; try { return this._dataTransfer.$.getData(a) } catch (d) { return null } }, _getFallbackTypeContent: function () {
                            var a =
                                this._dataTransfer._.data[this._customDataFallbackType]; a || (a = this._extractDataComment(this._getData(this._customDataFallbackType, !0)).content); return a
                        }, _getFallbackTypeData: function () { var a = CKEDITOR.plugins.clipboard.fallbackDataTransfer._customTypes, b = this._extractDataComment(this._getData(this._customDataFallbackType, !0)).data || {}, c = this._dataTransfer._.data; CKEDITOR.tools.array.forEach(a, function (a) { void 0 !== c[a] ? b[a] = c[a] : void 0 !== b[a] && (b[a] = b[a]) }, this); return b }, _isUnsupportedMimeTypeError: function (a) {
                            return a.message &&
                                -1 !== a.message.search(/element not found/gi)
                        }, _extractDataComment: function (a) { var b = { data: null, content: a || "" }; if (a && 16 < a.length) { var c; (c = /\x3c!--cke-data:(.*?)--\x3e/g.exec(a)) && c[1] && (b.data = JSON.parse(decodeURIComponent(c[1])), b.content = a.replace(c[0], "")) } return b }, _applyDataComment: function (a, b) { var c = ""; b && CKEDITOR.tools.object.keys(b).length && (c = "\x3c!--cke-data:" + encodeURIComponent(JSON.stringify(b)) + "--\x3e"); return c + (a && a.length ? a : "") }
                    }
        }(), CKEDITOR.config.clipboard_notificationDuration =
        1E4, function () {
            CKEDITOR.plugins.add("panel", { beforeInit: function (a) { a.ui.addHandler(CKEDITOR.UI_PANEL, CKEDITOR.ui.panel.handler) } }); CKEDITOR.UI_PANEL = "panel"; CKEDITOR.ui.panel = function (a, d) { d && CKEDITOR.tools.extend(this, d); CKEDITOR.tools.extend(this, { className: "", css: [] }); this.id = CKEDITOR.tools.getNextId(); this.document = a; this.isFramed = this.forceIFrame || this.css.length; this._ = { blocks: {} } }; CKEDITOR.ui.panel.handler = { create: function (a) { return new CKEDITOR.ui.panel(a) } }; var a = CKEDITOR.addTemplate("panel",
                '\x3cdiv lang\x3d"{langCode}" id\x3d"{id}" dir\x3d{dir} class\x3d"cke cke_reset_all {editorId} cke_panel cke_panel {cls} cke_{dir}" style\x3d"z-index:{z-index}" role\x3d"presentation"\x3e{frame}\x3c/div\x3e'), f = CKEDITOR.addTemplate("panel-frame", '\x3ciframe id\x3d"{id}" class\x3d"cke_panel_frame" role\x3d"presentation" frameborder\x3d"0" src\x3d"{src}"\x3e\x3c/iframe\x3e'), e = CKEDITOR.addTemplate("panel-frame-inner", '\x3c!DOCTYPE html\x3e\x3chtml class\x3d"cke_panel_container {env}" dir\x3d"{dir}" lang\x3d"{langCode}"\x3e\x3chead\x3e{css}\x3c/head\x3e\x3cbody class\x3d"cke_{dir}" style\x3d"margin:0;padding:0" onload\x3d"{onload}"\x3e\x3c/body\x3e\x3c/html\x3e');
            CKEDITOR.ui.panel.prototype = {
                render: function (b, d) {
                    var l = { editorId: b.id, id: this.id, langCode: b.langCode, dir: b.lang.dir, cls: this.className, frame: "", env: CKEDITOR.env.cssClass, "z-index": b.config.baseFloatZIndex + 1 }; this.getHolderElement = function () {
                        var a = this._.holder; if (!a) {
                            if (this.isFramed) {
                                var a = this.document.getById(this.id + "_frame"), b = a.getParent(), a = a.getFrameDocument(); CKEDITOR.env.iOS && b.setStyles({ overflow: "scroll", "-webkit-overflow-scrolling": "touch" }); b = CKEDITOR.tools.addFunction(CKEDITOR.tools.bind(function () {
                                    this.isLoaded =
                                    !0; if (this.onLoad) this.onLoad()
                                }, this)); a.write(e.output(CKEDITOR.tools.extend({ css: CKEDITOR.tools.buildStyleHtml(this.css), onload: "window.parent.CKEDITOR.tools.callFunction(" + b + ");" }, l))); a.getWindow().$.CKEDITOR = CKEDITOR; a.on("keydown", function (a) {
                                    var b = a.data.getKeystroke(), c = this.document.getById(this.id).getAttribute("dir"); if ("input" !== a.data.getTarget().getName() || 37 !== b && 39 !== b) this._.onKeyDown && !1 === this._.onKeyDown(b) ? "input" === a.data.getTarget().getName() && 32 === b || a.data.preventDefault() :
                                        (27 == b || b == ("rtl" == c ? 39 : 37)) && this.onEscape && !1 === this.onEscape(b) && a.data.preventDefault()
                                }, this); a = a.getBody(); a.unselectable(); CKEDITOR.env.air && CKEDITOR.tools.callFunction(b)
                            } else a = this.document.getById(this.id); this._.holder = a
                        } return a
                    }; if (this.isFramed) {
                        var h = CKEDITOR.env.air ? "javascript:void(0)" : CKEDITOR.env.ie && !CKEDITOR.env.edge ? "javascript:void(function(){" + encodeURIComponent("document.open();(" + CKEDITOR.tools.fixDomain + ")();document.close();") + "}())" : ""; l.frame = f.output({
                            id: this.id + "_frame",
                            src: h
                        })
                    } h = a.output(l); d && d.push(h); return h
                }, addBlock: function (a, d) { d = this._.blocks[a] = d instanceof CKEDITOR.ui.panel.block ? d : new CKEDITOR.ui.panel.block(this.getHolderElement(), d); this._.currentBlock || this.showBlock(a); return d }, getBlock: function (a) { return this._.blocks[a] }, showBlock: function (a) {
                    a = this._.blocks[a]; var d = this._.currentBlock, e = !this.forceIFrame || CKEDITOR.env.ie ? this._.holder : this.document.getById(this.id + "_frame"); d && d.hide(); this._.currentBlock = a; CKEDITOR.fire("ariaWidget", e); a._.focusIndex =
                        -1; this._.onKeyDown = a.onKeyDown && CKEDITOR.tools.bind(a.onKeyDown, a); a.show(); return a
                }, destroy: function () { this.element && this.element.remove() }
            }; CKEDITOR.ui.panel.block = CKEDITOR.tools.createClass({
                $: function (a, d) {
                    this.element = a.append(a.getDocument().createElement("div", { attributes: { tabindex: -1, "class": "cke_panel_block" }, styles: { display: "none" } })); d && CKEDITOR.tools.extend(this, d); this.element.setAttributes({
                        role: this.attributes.role || "presentation", "aria-label": this.attributes["aria-label"], title: this.attributes.title ||
                            this.attributes["aria-label"]
                    }); this.keys = {}; this._.focusIndex = -1; this.element.disableContextMenu()
                }, _: {
                    markItem: function (a) { -1 != a && (a = this._.getItems().getItem(this._.focusIndex = a), CKEDITOR.env.webkit && a.getDocument().getWindow().focus(), a.focus(), this.onMark && this.onMark(a)) }, markFirstDisplayed: function (a) {
                        for (var d = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && "none" == a.getStyle("display") }, e = this._.getItems(), f, m, c = e.count() - 1; 0 <= c; c--)if (f = e.getItem(c), f.getAscendant(d) || (m = f, this._.focusIndex =
                            c), "true" == f.getAttribute("aria-selected")) { m = f; this._.focusIndex = c; break } m && (a && a(), CKEDITOR.env.webkit && m.getDocument().getWindow().focus(), m.focus(), this.onMark && this.onMark(m))
                    }, getItems: function () { return this.element.find("a,input") }
                }, proto: {
                    show: function () { this.element.setStyle("display", "") }, hide: function () { this.onHide && !0 === this.onHide.call(this) || this.element.setStyle("display", "none") }, onKeyDown: function (a, d) {
                        var e = this.keys[a]; switch (e) {
                            case "next": for (var f = this._.focusIndex, e = this._.getItems(),
                                m; m = e.getItem(++f);)if (m.getAttribute("_cke_focus") && m.$.offsetWidth) { this._.focusIndex = f; m.focus(!0); break } return m || d ? !1 : (this._.focusIndex = -1, this.onKeyDown(a, 1)); case "prev": f = this._.focusIndex; for (e = this._.getItems(); 0 < f && (m = e.getItem(--f));) { if (m.getAttribute("_cke_focus") && m.$.offsetWidth) { this._.focusIndex = f; m.focus(!0); break } m = null } return m || d ? !1 : (this._.focusIndex = e.count(), this.onKeyDown(a, 1)); case "click": case "mouseup": return f = this._.focusIndex, (m = 0 <= f && this._.getItems().getItem(f)) &&
                                    m.fireEventHandler(e, { button: CKEDITOR.tools.normalizeMouseButton(CKEDITOR.MOUSE_BUTTON_LEFT, !0) }), !1
                        }return !0
                    }
                }
            })
        }(), CKEDITOR.plugins.add("floatpanel", { requires: "panel" }), function () {
            function a(a, b, d, l, h) { h = CKEDITOR.tools.genKey(b.getUniqueId(), d.getUniqueId(), a.lang.dir, a.uiColor || "", l.css || "", h || ""); var m = f[h]; m || (m = f[h] = new CKEDITOR.ui.panel(b, l), m.element = d.append(CKEDITOR.dom.element.createFromHtml(m.render(a), b)), m.element.setStyles({ display: "none", position: "absolute" })); return m } var f = {}; CKEDITOR.ui.floatPanel =
                CKEDITOR.tools.createClass({
                    $: function (e, b, d, f) {
                        function h() { g.hide() } d.forceIFrame = 1; d.toolbarRelated && e.elementMode == CKEDITOR.ELEMENT_MODE_INLINE && (b = CKEDITOR.document.getById("cke_" + e.name)); var m = b.getDocument(); f = a(e, m, b, d, f || 0); var c = f.element, k = c.getFirst(), g = this; c.disableContextMenu(); this.element = c; this._ = { editor: e, panel: f, parentElement: b, definition: d, document: m, iframe: k, children: [], dir: e.lang.dir, showBlockParams: null, markFirst: void 0 !== d.markFirst ? d.markFirst : !0 }; e.on("mode", h); e.on("resize",
                            h); m.getWindow().on("resize", function () { this.reposition() }, this)
                    }, proto: {
                        addBlock: function (a, b) { return this._.panel.addBlock(a, b) }, addListBlock: function (a, b) { return this._.panel.addListBlock(a, b) }, getBlock: function (a) { return this._.panel.getBlock(a) }, showBlock: function (a, b, d, f, h, m) {
                            var c = this._.panel, k = c.showBlock(a); this._.showBlockParams = [].slice.call(arguments); this.allowBlur(!1); var g = this._.editor.editable(); this._.returnFocus = g.hasFocus ? g : new CKEDITOR.dom.element(CKEDITOR.document.$.activeElement);
                            this._.hideTimeout = 0; var n = this.element, g = this._.iframe, g = CKEDITOR.env.ie && !CKEDITOR.env.edge ? g : new CKEDITOR.dom.window(g.$.contentWindow), r = n.getDocument(), w = this._.parentElement.getPositionedAncestor(), p = b.getDocumentPosition(r), r = w ? w.getDocumentPosition(r) : { x: 0, y: 0 }, t = "rtl" == this._.dir, u = p.x + (f || 0) - r.x, y = p.y + (h || 0) - r.y; !t || 1 != d && 4 != d ? t || 2 != d && 3 != d || (u += b.$.offsetWidth - 1) : u += b.$.offsetWidth; if (3 == d || 4 == d) y += b.$.offsetHeight - 1; this._.panel._.offsetParentId = b.getId(); n.setStyles({
                                top: y + "px", left: 0,
                                display: ""
                            }); n.setOpacity(0); n.getFirst().removeStyle("width"); this._.editor.focusManager.add(g); this._.blurSet || (CKEDITOR.event.useCapture = !0, g.on("blur", function (a) { function b() { delete this._.returnFocus; this.hide() } this.allowBlur() && a.data.getPhase() == CKEDITOR.EVENT_PHASE_AT_TARGET && this.visible && !this._.activeChild && (CKEDITOR.env.iOS ? this._.hideTimeout || (this._.hideTimeout = CKEDITOR.tools.setTimeout(b, 0, this)) : b.call(this)) }, this), g.on("focus", function () { this._.focused = !0; this.hideChild(); this.allowBlur(!0) },
                                this), CKEDITOR.env.iOS && (g.on("touchstart", function () { clearTimeout(this._.hideTimeout) }, this), g.on("touchend", function () { this._.hideTimeout = 0; this.focus() }, this)), CKEDITOR.event.useCapture = !1, this._.blurSet = 1); c.onEscape = CKEDITOR.tools.bind(function (a) { if (this.onEscape && !1 === this.onEscape(a)) return !1 }, this); CKEDITOR.tools.setTimeout(function () {
                                    var a = CKEDITOR.tools.bind(function () {
                                        var a = n; a.removeStyle("width"); if (k.autoSize) {
                                            var b = k.element.getDocument(), b = (CKEDITOR.env.webkit || CKEDITOR.env.edge ?
                                                k.element : b.getBody()).$.scrollWidth; CKEDITOR.env.ie && CKEDITOR.env.quirks && 0 < b && (b += (a.$.offsetWidth || 0) - (a.$.clientWidth || 0) + 3); a.setStyle("width", b + 10 + "px"); b = k.element.$.scrollHeight; CKEDITOR.env.ie && CKEDITOR.env.quirks && 0 < b && (b += (a.$.offsetHeight || 0) - (a.$.clientHeight || 0) + 3); a.setStyle("height", b + "px"); c._.currentBlock.element.setStyle("display", "none").removeStyle("display")
                                        } else a.removeStyle("height"); t && (u -= n.$.offsetWidth); n.setStyle("left", u + "px"); var b = c.element.getWindow(), a = n.$.getBoundingClientRect(),
                                            b = b.getViewPaneSize(), d = a.width || a.right - a.left, e = a.height || a.bottom - a.top, f = t ? a.right : b.width - a.left, g = t ? b.width - a.right : a.left; t ? f < d && (u = g > d ? u + d : b.width > d ? u - a.left : u - a.right + b.width) : f < d && (u = g > d ? u - d : b.width > d ? u - a.right + b.width : u - a.left); d = a.top; b.height - a.top < e && (y = d > e ? y - e : b.height > e ? y - a.bottom + b.height : y - a.top); CKEDITOR.env.ie && !CKEDITOR.env.edge && ((b = a = n.$.offsetParent && new CKEDITOR.dom.element(n.$.offsetParent)) && "html" == b.getName() && (b = b.getDocument().getBody()), b && "rtl" == b.getComputedStyle("direction") &&
                                                (u = CKEDITOR.env.ie8Compat ? u - 2 * n.getDocument().getDocumentElement().$.scrollLeft : u - (a.$.scrollWidth - a.$.clientWidth))); var a = n.getFirst(), h; (h = a.getCustomData("activePanel")) && h.onHide && h.onHide.call(this, 1); a.setCustomData("activePanel", this); n.setStyles({ top: y + "px", left: u + "px" }); n.setOpacity(1); m && m()
                                    }, this); c.isLoaded ? a() : c.onLoad = a; CKEDITOR.tools.setTimeout(function () {
                                        var a = CKEDITOR.env.webkit && CKEDITOR.document.getWindow().getScrollPosition().y; this.focus(); k.element.focus(); CKEDITOR.env.webkit &&
                                            (CKEDITOR.document.getBody().$.scrollTop = a); this.allowBlur(!0); this._.markFirst && (CKEDITOR.env.ie ? CKEDITOR.tools.setTimeout(function () { k.markFirstDisplayed ? k.markFirstDisplayed() : k._.markFirstDisplayed() }, 0) : k.markFirstDisplayed ? k.markFirstDisplayed() : k._.markFirstDisplayed()); this._.editor.fire("panelShow", this)
                                    }, 0, this)
                                }, CKEDITOR.env.air ? 200 : 0, this); this.visible = 1; this.onShow && this.onShow.call(this)
                        }, reposition: function () {
                            var a = this._.showBlockParams; this.visible && this._.showBlockParams && (this.hide(),
                                this.showBlock.apply(this, a))
                        }, focus: function () { if (CKEDITOR.env.webkit) { var a = CKEDITOR.document.getActive(); a && !a.equals(this._.iframe) && a.$.blur() } (this._.lastFocused || this._.iframe.getFrameDocument().getWindow()).focus() }, blur: function () { var a = this._.iframe.getFrameDocument().getActive(); a && a.is("a") && (this._.lastFocused = a) }, hide: function (a) {
                            if (this.visible && (!this.onHide || !0 !== this.onHide.call(this))) {
                                this.hideChild(); CKEDITOR.env.gecko && this._.iframe.getFrameDocument().$.activeElement.blur();
                                this.element.setStyle("display", "none"); this.visible = 0; this.element.getFirst().removeCustomData("activePanel"); if (a = a && this._.returnFocus) CKEDITOR.env.webkit && a.type && a.getWindow().$.focus(), a.focus(); delete this._.lastFocused; this._.showBlockParams = null; this._.editor.fire("panelHide", this)
                            }
                        }, allowBlur: function (a) { var b = this._.panel; void 0 !== a && (b.allowBlur = a); return b.allowBlur }, showAsChild: function (a, b, d, f, h, m) {
                            if (this._.activeChild != a || a._.panel._.offsetParentId != d.getId()) this.hideChild(), a.onHide =
                                CKEDITOR.tools.bind(function () { CKEDITOR.tools.setTimeout(function () { this._.focused || this.hide() }, 0, this) }, this), this._.activeChild = a, this._.focused = !1, a.showBlock(b, d, f, h, m), this.blur(), (CKEDITOR.env.ie7Compat || CKEDITOR.env.ie6Compat) && setTimeout(function () { a.element.getChild(0).$.style.cssText += "" }, 100)
                        }, hideChild: function (a) { var b = this._.activeChild; b && (delete b.onHide, delete this._.activeChild, b.hide(), a && this.focus()) }
                    }
                }); CKEDITOR.on("instanceDestroyed", function () {
                    var a = CKEDITOR.tools.isEmpty(CKEDITOR.instances),
                    b; for (b in f) { var d = f[b]; a ? d.destroy() : d.element.hide() } a && (f = {})
                })
        }(), CKEDITOR.plugins.add("menu", {
            requires: "floatpanel", beforeInit: function (a) {
                for (var f = a.config.menu_groups.split(","), e = a._.menuGroups = {}, b = a._.menuItems = {}, d = 0; d < f.length; d++)e[f[d]] = d + 1; a.addMenuGroup = function (a, b) { e[a] = b || 100 }; a.addMenuItem = function (a, d) { e[d.group] && (b[a] = new CKEDITOR.menuItem(this, a, d)) }; a.addMenuItems = function (a) { for (var b in a) this.addMenuItem(b, a[b]) }; a.getMenuItem = function (a) { return b[a] }; a.removeMenuItem =
                    function (a) { delete b[a] }
            }
        }), function () {
            function a(a) { a.sort(function (a, b) { return a.group < b.group ? -1 : a.group > b.group ? 1 : a.order < b.order ? -1 : a.order > b.order ? 1 : 0 }) } var f = '\x3cspan class\x3d"cke_menuitem"\x3e\x3ca id\x3d"{id}" class\x3d"cke_menubutton cke_menubutton__{name} cke_menubutton_{state} {cls}" href\x3d"{href}" title\x3d"{title}" tabindex\x3d"-1" _cke_focus\x3d1 hidefocus\x3d"true" role\x3d"{role}" aria-label\x3d"{attrLabel}" aria-describedby\x3d"{id}_description" aria-haspopup\x3d"{hasPopup}" aria-disabled\x3d"{disabled}" {ariaChecked} draggable\x3d"false"',
                e = ""; CKEDITOR.env.gecko && CKEDITOR.env.mac && (f += ' onkeypress\x3d"return false;"'); CKEDITOR.env.gecko && (f += ' onblur\x3d"this.style.cssText \x3d this.style.cssText;" ondragstart\x3d"return false;"'); CKEDITOR.env.ie && (e = 'return false;" onmouseup\x3d"CKEDITOR.tools.getMouseButton(event)\x3d\x3d\x3dCKEDITOR.MOUSE_BUTTON_LEFT\x26\x26'); var f = f + (' onmouseover\x3d"CKEDITOR.tools.callFunction({hoverFn},{index});" onmouseout\x3d"CKEDITOR.tools.callFunction({moveOutFn},{index});" onclick\x3d"' + e + 'CKEDITOR.tools.callFunction({clickFn},{index}); return false;"\x3e') +
                    '\x3cspan class\x3d"cke_menubutton_inner"\x3e\x3cspan class\x3d"cke_menubutton_icon"\x3e\x3cspan class\x3d"cke_button_icon cke_button__{iconName}_icon" style\x3d"{iconStyle}"\x3e\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"cke_menubutton_label"\x3e{label}\x3c/span\x3e{shortcutHtml}{arrowHtml}\x3c/span\x3e\x3c/a\x3e\x3cspan id\x3d"{id}_description" class\x3d"cke_voice_label" aria-hidden\x3d"false"\x3e{ariaShortcut}\x3c/span\x3e\x3c/span\x3e', b = CKEDITOR.addTemplate("menuItem", f), d = CKEDITOR.addTemplate("menuArrow",
                        '\x3cspan class\x3d"cke_menuarrow"\x3e\x3cspan\x3e{label}\x3c/span\x3e\x3c/span\x3e'), l = CKEDITOR.addTemplate("menuShortcut", '\x3cspan class\x3d"cke_menubutton_label cke_menubutton_shortcut"\x3e{shortcut}\x3c/span\x3e'); CKEDITOR.menu = CKEDITOR.tools.createClass({
                            $: function (a, b) {
                                b = this._.definition = b || {}; this.id = CKEDITOR.tools.getNextId(); this.editor = a; this.items = []; this._.listeners = []; this._.level = b.level || 1; var c = CKEDITOR.tools.extend({}, b.panel, {
                                    css: [CKEDITOR.skin.getPath("editor")], level: this._.level -
                                        1, block: {}
                                }), d = c.block.attributes = c.attributes || {}; !d.role && (d.role = "menu"); this._.panelDefinition = c
                            }, _: {
                                onShow: function () { var a = this.editor.getSelection(), b = a && a.getStartElement(), c = this.editor.elementPath(), d = this._.listeners; this.removeAll(); for (var e = 0; e < d.length; e++) { var f = d[e](b, a, c); if (f) for (var l in f) { var w = this.editor.getMenuItem(l); !w || w.command && !this.editor.getCommand(w.command).state || (w.state = f[l], this.add(w)) } } }, onClick: function (a) {
                                    this.hide(); if (a.onClick) a.onClick(); else a.command &&
                                        this.editor.execCommand(a.command)
                                }, onEscape: function (a) { var b = this.parent; b ? b._.panel.hideChild(1) : 27 == a && this.hide(1); return !1 }, onHide: function () { this.onHide && this.onHide() }, showSubMenu: function (a) {
                                    var b = this._.subMenu, c = this.items[a]; if (c = c.getItems && c.getItems()) {
                                        b ? b.removeAll() : (b = this._.subMenu = new CKEDITOR.menu(this.editor, CKEDITOR.tools.extend({}, this._.definition, { level: this._.level + 1 }, !0)), b.parent = this, b._.onClick = CKEDITOR.tools.bind(this._.onClick, this)); for (var d in c) {
                                            var e = this.editor.getMenuItem(d);
                                            e && (e.state = c[d], b.add(e))
                                        } var f = this._.panel.getBlock(this.id).element.getDocument().getById(this.id + String(a)); setTimeout(function () { b.show(f, 2) }, 0)
                                    } else this._.panel.hideChild(1)
                                }
                            }, proto: {
                                add: function (a) { a.order || (a.order = this.items.length); this.items.push(a) }, removeAll: function () { this.items = [] }, show: function (b, d, c, e) {
                                    if (!this.parent && (this._.onShow(), !this.items.length)) return; d = d || ("rtl" == this.editor.lang.dir ? 2 : 1); var f = this.items, l = this.editor, r = this._.panel, w = this._.element; if (!r) {
                                        r = this._.panel =
                                        new CKEDITOR.ui.floatPanel(this.editor, CKEDITOR.document.getBody(), this._.panelDefinition, this._.level); r.onEscape = CKEDITOR.tools.bind(function (a) { if (!1 === this._.onEscape(a)) return !1 }, this); r.onShow = function () { r._.panel.getHolderElement().getParent().addClass("cke").addClass("cke_reset_all") }; r.onHide = CKEDITOR.tools.bind(function () { this._.onHide && this._.onHide() }, this); w = r.addBlock(this.id, this._.panelDefinition.block); w.autoSize = !0; var p = w.keys; p[40] = "next"; p[9] = "next"; p[38] = "prev"; p[CKEDITOR.SHIFT +
                                            9] = "prev"; p["rtl" == l.lang.dir ? 37 : 39] = CKEDITOR.env.ie ? "mouseup" : "click"; p[32] = CKEDITOR.env.ie ? "mouseup" : "click"; CKEDITOR.env.ie && (p[13] = "mouseup"); w = this._.element = w.element; p = w.getDocument(); p.getBody().setStyle("overflow", "hidden"); p.getElementsByTag("html").getItem(0).setStyle("overflow", "hidden"); this._.itemOverFn = CKEDITOR.tools.addFunction(function (a) { clearTimeout(this._.showSubTimeout); this._.showSubTimeout = CKEDITOR.tools.setTimeout(this._.showSubMenu, l.config.menu_subMenuDelay || 400, this, [a]) },
                                                this); this._.itemOutFn = CKEDITOR.tools.addFunction(function () { clearTimeout(this._.showSubTimeout) }, this); this._.itemClickFn = CKEDITOR.tools.addFunction(function (a) { var b = this.items[a]; if (b.state == CKEDITOR.TRISTATE_DISABLED) this.hide(1); else if (b.getItems) this._.showSubMenu(a); else this._.onClick(b) }, this)
                                    } a(f); for (var p = l.elementPath(), p = ['\x3cdiv class\x3d"cke_menu' + (p && p.direction() != l.lang.dir ? " cke_mixed_dir_content" : "") + '" role\x3d"presentation"\x3e'], t = f.length, u = t && f[0].group, y = 0; y < t; y++) {
                                        var q =
                                            f[y]; u != q.group && (p.push('\x3cdiv class\x3d"cke_menuseparator" role\x3d"separator"\x3e\x3c/div\x3e'), u = q.group); q.render(this, y, p)
                                    } p.push("\x3c/div\x3e"); w.setHtml(p.join("")); CKEDITOR.ui.fire("ready", this); this.parent ? this.parent._.panel.showAsChild(r, this.id, b, d, c, e) : r.showBlock(this.id, b, d, c, e); l.fire("menuShow", [r])
                                }, addListener: function (a) { this._.listeners.push(a) }, hide: function (a) { this._.onHide && this._.onHide(); this._.panel && this._.panel.hide(a) }, findItemByCommandName: function (a) {
                                    var b = CKEDITOR.tools.array.filter(this.items,
                                        function (b) { return a === b.command }); return b.length ? (b = b[0], { item: b, element: this._.element.findOne("." + b.className) }) : null
                                }
                            }
                        }); CKEDITOR.menuItem = CKEDITOR.tools.createClass({
                            $: function (a, b, c) { CKEDITOR.tools.extend(this, c, { order: 0, className: "cke_menubutton__" + b }); this.group = a._.menuGroups[this.group]; this.editor = a; this.name = b }, proto: {
                                render: function (a, e, c) {
                                    var f = a.id + String(e), g = "undefined" == typeof this.state ? CKEDITOR.TRISTATE_OFF : this.state, n = "", r = this.editor, w, p, t = g == CKEDITOR.TRISTATE_ON ? "on" : g == CKEDITOR.TRISTATE_DISABLED ?
                                        "disabled" : "off"; this.role in { menuitemcheckbox: 1, menuitemradio: 1 } && (n = ' aria-checked\x3d"' + (g == CKEDITOR.TRISTATE_ON ? "true" : "false") + '"'); var u = this.getItems, y = "\x26#" + ("rtl" == this.editor.lang.dir ? "9668" : "9658") + ";", q = this.name; this.icon && !/\./.test(this.icon) && (q = this.icon); this.command && (w = r.getCommand(this.command), (w = r.getCommandKeystroke(w)) && (p = CKEDITOR.tools.keystrokeToString(r.lang.common.keyboard, w))); w = CKEDITOR.tools.htmlEncodeAttr(this.label); a = {
                                            id: f, name: this.name, iconName: q, label: this.label,
                                            attrLabel: w, cls: this.className || "", state: t, hasPopup: u ? "true" : "false", disabled: g == CKEDITOR.TRISTATE_DISABLED, title: w + (p ? " (" + p.display + ")" : ""), ariaShortcut: p ? r.lang.common.keyboardShortcut + " " + p.aria : "", href: "javascript:void('" + (w || "").replace("'") + "')", hoverFn: a._.itemOverFn, moveOutFn: a._.itemOutFn, clickFn: a._.itemClickFn, index: e, iconStyle: CKEDITOR.skin.getIconStyle(q, "rtl" == this.editor.lang.dir, q == this.icon ? null : this.icon, this.iconOffset), shortcutHtml: p ? l.output({ shortcut: p.display }) : "", arrowHtml: u ?
                                                d.output({ label: y }) : "", role: this.role ? this.role : "menuitem", ariaChecked: n
                                        }; b.output(a, c)
                                }
                            }
                        })
        }(), CKEDITOR.config.menu_groups = "clipboard,form,tablecell,tablecellproperties,tablerow,tablecolumn,table,anchor,link,image,flash,checkbox,radio,textfield,hiddenfield,imagebutton,button,select,textarea,div", CKEDITOR.plugins.add("contextmenu", {
            requires: "menu", onLoad: function () {
                CKEDITOR.plugins.contextMenu = CKEDITOR.tools.createClass({
                    base: CKEDITOR.menu, $: function (a) {
                        this.base.call(this, a, {
                            panel: {
                                css: a.config.contextmenu_contentsCss,
                                className: "cke_menu_panel", attributes: { "aria-label": a.lang.contextmenu.options }
                            }
                        })
                    }, proto: {
                        addTarget: function (a, f) {
                            function e() { d = !1 } var b, d; a.on("contextmenu", function (a) {
                                a = a.data; var e = CKEDITOR.env.webkit ? b : CKEDITOR.env.mac ? a.$.metaKey : a.$.ctrlKey; if (!f || !e) if (a.preventDefault(), !d) {
                                    if (CKEDITOR.env.mac && CKEDITOR.env.webkit) {
                                        var e = this.editor, c = (new CKEDITOR.dom.elementPath(a.getTarget(), e.editable())).contains(function (a) { return a.hasAttribute("contenteditable") }, !0); c && "false" == c.getAttribute("contenteditable") &&
                                            e.getSelection().fake(c)
                                    } var c = a.getTarget().getDocument(), k = a.getTarget().getDocument().getDocumentElement(), e = !c.equals(CKEDITOR.document), c = c.getWindow().getScrollPosition(), g = e ? a.$.clientX : a.$.pageX || c.x + a.$.clientX, l = e ? a.$.clientY : a.$.pageY || c.y + a.$.clientY; CKEDITOR.tools.setTimeout(function () { this.open(k, null, g, l) }, CKEDITOR.env.ie ? 200 : 0, this)
                                }
                            }, this); if (CKEDITOR.env.webkit) {
                                var l = function () { b = 0 }; a.on("keydown", function (a) { b = CKEDITOR.env.mac ? a.data.$.metaKey : a.data.$.ctrlKey }); a.on("keyup", l);
                                a.on("contextmenu", l)
                            } CKEDITOR.env.gecko && !CKEDITOR.env.mac && (a.on("keydown", function (a) { a.data.$.shiftKey && 121 === a.data.$.keyCode && (d = !0) }, null, null, 0), a.on("keyup", e), a.on("contextmenu", e))
                        }, open: function (a, f, e, b) { !1 !== this.editor.config.enableContextMenu && this.editor.getSelection().getType() !== CKEDITOR.SELECTION_NONE && (this.editor.focus(), a = a || CKEDITOR.document.getDocumentElement(), this.editor.selectionChange(1), this.show(a, f, e, b)) }
                    }
                })
            }, beforeInit: function (a) {
                var f = a.contextMenu = new CKEDITOR.plugins.contextMenu(a);
                a.on("contentDom", function () { f.addTarget(a.editable(), !1 !== a.config.browserContextMenuOnCtrl) }); a.addCommand("contextMenu", { exec: function (a) { var b = 0, d = 0, f = a.getSelection().getRanges(), f = f[f.length - 1].getClientRects(a.editable().isInline()); if (f = f[f.length - 1]) b = f["rtl" === a.lang.dir ? "left" : "right"], d = f.bottom; a.contextMenu.open(a.document.getBody().getParent(), null, b, d) } }); a.setKeystroke(CKEDITOR.SHIFT + 121, "contextMenu"); a.setKeystroke(CKEDITOR.CTRL + CKEDITOR.SHIFT + 121, "contextMenu")
            }
        }), function () {
            function a(a,
                e) {
                    function h(b) { b = g.list[b]; var c; b.equals(a.editable()) || "true" == b.getAttribute("contenteditable") ? (c = a.createRange(), c.selectNodeContents(b), c = c.select()) : (c = a.getSelection(), c.selectElement(b)); CKEDITOR.env.ie && a.fire("selectionChange", { selection: c, path: new CKEDITOR.dom.elementPath(b) }); a.focus() } function m() { k && k.setHtml('\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e'); delete g.list } var c = a.ui.spaceId("path"), k, g = a._.elementsPath, n = g.idBase; e.html += '\x3cspan id\x3d"' + c + '_label" class\x3d"cke_voice_label"\x3e' +
                        a.lang.elementspath.eleLabel + '\x3c/span\x3e\x3cspan id\x3d"' + c + '" class\x3d"cke_path" role\x3d"group" aria-labelledby\x3d"' + c + '_label"\x3e\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e\x3c/span\x3e'; a.on("uiReady", function () { var b = a.ui.space("path"); b && a.focusManager.add(b, 1) }); g.onClick = h; var r = CKEDITOR.tools.addFunction(h), w = CKEDITOR.tools.addFunction(function (b, c) {
                            var e = g.idBase, f; c = new CKEDITOR.dom.event(c); f = "rtl" == a.lang.dir; switch (c.getKeystroke()) {
                                case f ? 39 : 37: case 9: return (f =
                                    CKEDITOR.document.getById(e + (b + 1))) || (f = CKEDITOR.document.getById(e + "0")), f.focus(), !1; case f ? 37 : 39: case CKEDITOR.SHIFT + 9: return (f = CKEDITOR.document.getById(e + (b - 1))) || (f = CKEDITOR.document.getById(e + (g.list.length - 1))), f.focus(), !1; case 27: return a.focus(), !1; case 13: case 32: return h(b), !1
                            }return !0
                        }); a.on("selectionChange", function (e) {
                            for (var f = [], h = g.list = [], l = [], m = g.filters, A = !0, v = e.data.path.elements, z = v.length; z--;) {
                                var x = v[z], D = 0; e = x.data("cke-display-name") ? x.data("cke-display-name") : x.data("cke-real-element-type") ?
                                    x.data("cke-real-element-type") : x.getName(); (A = x.hasAttribute("contenteditable") ? "true" == x.getAttribute("contenteditable") : A) || x.hasAttribute("contenteditable") || (D = 1); for (var B = 0; B < m.length; B++) { var F = m[B](x, e); if (!1 === F) { D = 1; break } e = F || e } D || (h.unshift(x), l.unshift(e))
                            } h = h.length; for (m = 0; m < h; m++)e = l[m], A = a.lang.elementspath.eleTitle.replace(/%1/, e), e = b.output({ id: n + m, label: A, text: e, jsTitle: "javascript:void('" + e + "')", index: m, keyDownFn: w, clickFn: r }), f.unshift(e); k || (k = CKEDITOR.document.getById(c));
                            l = k; l.setHtml(f.join("") + '\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e'); a.fire("elementsPathUpdate", { space: l })
                        }); a.on("readOnly", m); a.on("contentDomUnload", m); a.addCommand("elementsPathFocus", f.toolbarFocus); a.setKeystroke(CKEDITOR.ALT + 122, "elementsPathFocus")
            } var f = { toolbarFocus: { editorFocus: !1, readOnly: 1, exec: function (a) { (a = CKEDITOR.document.getById(a._.elementsPath.idBase + "0")) && a.focus(CKEDITOR.env.ie || CKEDITOR.env.air) } } }, e = ""; CKEDITOR.env.gecko && CKEDITOR.env.mac && (e += ' onkeypress\x3d"return false;"');
            CKEDITOR.env.gecko && (e += ' onblur\x3d"this.style.cssText \x3d this.style.cssText;"'); var b = CKEDITOR.addTemplate("pathItem", '\x3ca id\x3d"{id}" href\x3d"{jsTitle}" tabindex\x3d"-1" class\x3d"cke_path_item" title\x3d"{label}"' + e + ' hidefocus\x3d"true"  draggable\x3d"false"  ondragstart\x3d"return false;" onkeydown\x3d"return CKEDITOR.tools.callFunction({keyDownFn},{index}, event );" onclick\x3d"CKEDITOR.tools.callFunction({clickFn},{index}); return false;" role\x3d"button" aria-label\x3d"{label}"\x3e{text}\x3c/a\x3e');
            CKEDITOR.plugins.add("elementspath", { init: function (b) { b._.elementsPath = { idBase: "cke_elementspath_" + CKEDITOR.tools.getNextNumber() + "_", filters: [] }; b.on("uiSpace", function (e) { "bottom" == e.data.space && a(b, e.data) }) } })
        }(), function () {
            function a(a, d) {
                var l, h; d.on("refresh", function (a) { var b = [f], d; for (d in a.data.states) b.push(a.data.states[d]); this.setState(CKEDITOR.tools.search(b, e) ? e : f) }, d, null, 100); d.on("exec", function (d) { l = a.getSelection(); h = l.createBookmarks(1); d.data || (d.data = {}); d.data.done = !1 }, d,
                    null, 0); d.on("exec", function () { a.forceNextSelectionCheck(); l.selectBookmarks(h) }, d, null, 100)
            } var f = CKEDITOR.TRISTATE_DISABLED, e = CKEDITOR.TRISTATE_OFF; CKEDITOR.plugins.add("indent", {
                init: function (b) {
                    var d = CKEDITOR.plugins.indent.genericDefinition; a(b, b.addCommand("indent", new d(!0))); a(b, b.addCommand("outdent", new d)); b.ui.addButton && (b.ui.addButton("Indent", { label: b.lang.indent.indent, command: "indent", directional: !0, toolbar: "indent,20" }), b.ui.addButton("Outdent", {
                        label: b.lang.indent.outdent, command: "outdent",
                        directional: !0, toolbar: "indent,10"
                    })); b.on("dirChanged", function (a) {
                        var d = b.createRange(), e = a.data.node; d.setStartBefore(e); d.setEndAfter(e); for (var c = new CKEDITOR.dom.walker(d), f; f = c.next();)if (f.type == CKEDITOR.NODE_ELEMENT) if (!f.equals(e) && f.getDirection()) d.setStartAfter(f), c = new CKEDITOR.dom.walker(d); else {
                            var g = b.config.indentClasses; if (g) for (var n = "ltr" == a.data.dir ? ["_rtl", ""] : ["", "_rtl"], r = 0; r < g.length; r++)f.hasClass(g[r] + n[0]) && (f.removeClass(g[r] + n[0]), f.addClass(g[r] + n[1])); g = f.getStyle("margin-right");
                            n = f.getStyle("margin-left"); g ? f.setStyle("margin-left", g) : f.removeStyle("margin-left"); n ? f.setStyle("margin-right", n) : f.removeStyle("margin-right")
                        }
                    })
                }
            }); CKEDITOR.plugins.indent = {
                genericDefinition: function (a) { this.isIndent = !!a; this.startDisabled = !this.isIndent }, specificDefinition: function (a, d, e) { this.name = d; this.editor = a; this.jobs = {}; this.enterBr = a.config.enterMode == CKEDITOR.ENTER_BR; this.isIndent = !!e; this.relatedGlobal = e ? "indent" : "outdent"; this.indentKey = e ? 9 : CKEDITOR.SHIFT + 9; this.database = {} }, registerCommands: function (a,
                    d) { a.on("pluginsLoaded", function () { for (var a in d) (function (a, b) { var c = a.getCommand(b.relatedGlobal), d; for (d in b.jobs) c.on("exec", function (c) { c.data.done || (a.fire("lockSnapshot"), b.execJob(a, d) && (c.data.done = !0), a.fire("unlockSnapshot"), CKEDITOR.dom.element.clearAllMarkers(b.database)) }, this, null, d), c.on("refresh", function (c) { c.data.states || (c.data.states = {}); c.data.states[b.name + "@" + d] = b.refreshJob(a, d, c.data.path) }, this, null, d); a.addFeature(b) })(this, d[a]) }) }
            }; CKEDITOR.plugins.indent.genericDefinition.prototype =
                { context: "p", exec: function () { } }; CKEDITOR.plugins.indent.specificDefinition.prototype = { execJob: function (a, d) { var e = this.jobs[d]; if (e.state != f) return e.exec.call(this, a) }, refreshJob: function (a, d, e) { d = this.jobs[d]; a.activeFilter.checkFeature(this) ? d.state = d.refresh.call(this, a, e) : d.state = f; return d.state }, getContext: function (a) { return a.contains(this.context) } }
        }(), function () {
            function a(a) {
                function b(c) {
                    for (var f = l.startContainer, q = l.endContainer; f && !f.getParent().equals(c);)f = f.getParent(); for (; q && !q.getParent().equals(c);)q =
                        q.getParent(); if (!f || !q) return !1; for (var A = [], v = !1; !v;)f.equals(q) && (v = !0), A.push(f), f = f.getNext(); if (1 > A.length) return !1; f = c.getParents(!0); for (q = 0; q < f.length; q++)if (f[q].getName && h[f[q].getName()]) { c = f[q]; break } for (var f = d.isIndent ? 1 : -1, q = A[0], A = A[A.length - 1], v = CKEDITOR.plugins.list.listToArray(c, g), z = v[A.getCustomData("listarray_index")].indent, q = q.getCustomData("listarray_index"); q <= A.getCustomData("listarray_index"); q++)if (v[q].indent += f, 0 < f) {
                            for (var x = v[q].parent, t = q - 1; 0 <= t; t--)if (v[t].indent ===
                                f) { x = v[t].parent; break } v[q].parent = new CKEDITOR.dom.element(x.getName(), x.getDocument())
                        } for (q = A.getCustomData("listarray_index") + 1; q < v.length && v[q].indent > z; q++)v[q].indent += f; f = CKEDITOR.plugins.list.arrayToList(v, g, null, a.config.enterMode, c.getDirection()); if (!d.isIndent) { var p; if ((p = c.getParent()) && p.is("li")) for (var A = f.listNode.getChildren(), F = [], w, q = A.count() - 1; 0 <= q; q--)(w = A.getItem(q)) && w.is && w.is("li") && F.push(w) } f && f.listNode.replace(c); if (F && F.length) for (q = 0; q < F.length; q++) {
                            for (w = c = F[q]; (w =
                                w.getNext()) && w.is && w.getName() in h;)CKEDITOR.env.needsNbspFiller && !c.getFirst(e) && c.append(l.document.createText(" ")), c.append(w); c.insertAfter(p)
                        } f && a.fire("contentDomInvalidated"); return !0
                } for (var d = this, g = this.database, h = this.context, l, w = a.getSelection(), w = (w && w.getRanges()).createIterator(); l = w.getNextRange();) {
                    for (var p = l.getCommonAncestor(); p && (p.type != CKEDITOR.NODE_ELEMENT || !h[p.getName()]);) { if (a.editable().equals(p)) { p = !1; break } p = p.getParent() } p || (p = l.startPath().contains(h)) && l.setEndAt(p,
                        CKEDITOR.POSITION_BEFORE_END); if (!p) { var t = l.getEnclosedNode(); t && t.type == CKEDITOR.NODE_ELEMENT && t.getName() in h && (l.setStartAt(t, CKEDITOR.POSITION_AFTER_START), l.setEndAt(t, CKEDITOR.POSITION_BEFORE_END), p = t) } p && l.startContainer.type == CKEDITOR.NODE_ELEMENT && l.startContainer.getName() in h && (t = new CKEDITOR.dom.walker(l), t.evaluator = f, l.startContainer = t.next()); p && l.endContainer.type == CKEDITOR.NODE_ELEMENT && l.endContainer.getName() in h && (t = new CKEDITOR.dom.walker(l), t.evaluator = f, l.endContainer = t.previous());
                    if (p) return b(p)
                } return 0
            } function f(a) { return a.type == CKEDITOR.NODE_ELEMENT && a.is("li") } function e(a) { return b(a) && d(a) } var b = CKEDITOR.dom.walker.whitespaces(!0), d = CKEDITOR.dom.walker.bookmark(!1, !0), l = CKEDITOR.TRISTATE_DISABLED, h = CKEDITOR.TRISTATE_OFF; CKEDITOR.plugins.add("indentlist", {
                requires: "indent", init: function (b) {
                    function c(b) {
                        d.specificDefinition.apply(this, arguments); this.requiredContent = ["ul", "ol"]; b.on("key", function (a) {
                            var c = b.elementPath(); if ("wysiwyg" == b.mode && a.data.keyCode == this.indentKey &&
                                c) { var d = this.getContext(c); !d || this.isIndent && CKEDITOR.plugins.indentList.firstItemInPath(this.context, c, d) || (b.execCommand(this.relatedGlobal), a.cancel()) }
                        }, this); this.jobs[this.isIndent ? 10 : 30] = { refresh: this.isIndent ? function (a, b) { var c = this.getContext(b), d = CKEDITOR.plugins.indentList.firstItemInPath(this.context, b, c); return c && this.isIndent && !d ? h : l } : function (a, b) { return !this.getContext(b) || this.isIndent ? l : h }, exec: CKEDITOR.tools.bind(a, this) }
                    } var d = CKEDITOR.plugins.indent; d.registerCommands(b, {
                        indentlist: new c(b,
                            "indentlist", !0), outdentlist: new c(b, "outdentlist")
                    }); CKEDITOR.tools.extend(c.prototype, d.specificDefinition.prototype, { context: { ol: 1, ul: 1 } })
                }
            }); CKEDITOR.plugins.indentList = {}; CKEDITOR.plugins.indentList.firstItemInPath = function (a, b, d) { var e = b.contains(f); d || (d = b.contains(a)); return d && e && e.equals(d.getFirst(f)) }
        }(), function () {
            function a(a, b, c, d) {
                for (var e = CKEDITOR.plugins.list.listToArray(b.root, c), f = [], g = 0; g < b.contents.length; g++) {
                    var h = b.contents[g]; (h = h.getAscendant("li", !0)) && !h.getCustomData("list_item_processed") &&
                        (f.push(h), CKEDITOR.dom.element.setMarker(c, h, "list_item_processed", !0))
                } for (var h = b.root.getDocument(), k, l, g = 0; g < f.length; g++) { var m = f[g].getCustomData("listarray_index"); k = e[m].parent; k.is(this.type) || (l = h.createElement(this.type), k.copyAttributes(l, { start: 1, type: 1 }), l.removeStyle("list-style-type"), e[m].parent = l) } c = CKEDITOR.plugins.list.arrayToList(e, c, null, a.config.enterMode); for (var n, e = c.listNode.getChildCount(), g = 0; g < e && (n = c.listNode.getChild(g)); g++)n.getName() == this.type && d.push(n); c.listNode.replace(b.root);
                a.fire("contentDomInvalidated")
            } function f(a, b, c) {
                var d = b.contents, e = b.root.getDocument(), f = []; if (1 == d.length && d[0].equals(b.root)) { var g = e.createElement("div"); d[0].moveChildren && d[0].moveChildren(g); d[0].append(g); d[0] = g } b = b.contents[0].getParent(); for (g = 0; g < d.length; g++)b = b.getCommonAncestor(d[g].getParent()); a = a.config.useComputedState; var h, k; a = void 0 === a || a; for (g = 0; g < d.length; g++)for (var l = d[g], m; m = l.getParent();) {
                    if (m.equals(b)) {
                        f.push(l); !k && l.getDirection() && (k = 1); l = l.getDirection(a); null !==
                            h && (h = h && h != l ? null : l); break
                    } l = m
                } if (!(1 > f.length)) { d = f[f.length - 1].getNext(); g = e.createElement(this.type); for (c.push(g); f.length;)c = f.shift(), a = e.createElement("li"), l = c, l.is("pre") || p.test(l.getName()) || "false" == l.getAttribute("contenteditable") ? c.appendTo(a) : (c.copyAttributes(a), h && c.getDirection() && (a.removeStyle("direction"), a.removeAttribute("dir")), c.moveChildren(a), c.remove()), a.appendTo(g); h && k && g.setAttribute("dir", h); d ? g.insertBefore(d) : g.appendTo(b) }
            } function e(a, b, c) {
                function d(c) {
                    if (!(!(l =
                        k[c ? "getFirst" : "getLast"]()) || l.is && l.isBlockBoundary() || !(m = b.root[c ? "getPrevious" : "getNext"](CKEDITOR.dom.walker.invisible(!0))) || m.is && m.isBlockBoundary({ br: 1 }))) a.document.createElement("br")[c ? "insertBefore" : "insertAfter"](l)
                } for (var e = CKEDITOR.plugins.list.listToArray(b.root, c), f = [], g = 0; g < b.contents.length; g++) { var h = b.contents[g]; (h = h.getAscendant("li", !0)) && !h.getCustomData("list_item_processed") && (f.push(h), CKEDITOR.dom.element.setMarker(c, h, "list_item_processed", !0)) } h = null; for (g = 0; g < f.length; g++)h =
                    f[g].getCustomData("listarray_index"), e[h].indent = -1; for (g = h + 1; g < e.length; g++)if (e[g].indent > e[g - 1].indent + 1) { f = e[g - 1].indent + 1 - e[g].indent; for (h = e[g].indent; e[g] && e[g].indent >= h;)e[g].indent += f, g++; g-- } var k = CKEDITOR.plugins.list.arrayToList(e, c, null, a.config.enterMode, b.root.getAttribute("dir")).listNode, l, m; d(!0); d(); k.replace(b.root); a.fire("contentDomInvalidated")
            } function b(a, b) { this.name = a; this.context = this.type = b; this.allowedContent = b + " li"; this.requiredContent = b } function d(a, b, c, d) {
                for (var e,
                    f; e = a[d ? "getLast" : "getFirst"](t);)(f = e.getDirection(1)) !== b.getDirection(1) && e.setAttribute("dir", f), e.remove(), c ? e[d ? "insertBefore" : "insertAfter"](c) : b.append(e, d), c = e
            } function l(a) { function b(c) { var e = a[c ? "getPrevious" : "getNext"](r); e && e.type == CKEDITOR.NODE_ELEMENT && e.is(a.getName()) && (d(a, e, null, !c), a.remove(), a = e) } b(); b(1) } function h(a) { return a.type == CKEDITOR.NODE_ELEMENT && (a.getName() in CKEDITOR.dtd.$block || a.getName() in CKEDITOR.dtd.$listItem) && CKEDITOR.dtd[a.getName()]["#"] } function m(a, b,
                e) {
                    a.fire("saveSnapshot"); e.enlarge(CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS); var f = e.extractContents(); b.trim(!1, !0); var g = b.createBookmark(), h = new CKEDITOR.dom.elementPath(b.startContainer), k = h.block, h = h.lastElement.getAscendant("li", 1) || k, m = new CKEDITOR.dom.elementPath(e.startContainer), n = m.contains(CKEDITOR.dtd.$listItem), m = m.contains(CKEDITOR.dtd.$list); k ? (k = k.getBogus()) && k.remove() : m && (k = m.getPrevious(r)) && w(k) && k.remove(); (k = f.getLast()) && k.type == CKEDITOR.NODE_ELEMENT && k.is("br") && k.remove(); (k =
                        b.startContainer.getChild(b.startOffset)) ? f.insertBefore(k) : b.startContainer.append(f); n && (f = c(n)) && (h.contains(n) ? (d(f, n.getParent(), n), f.remove()) : h.append(f)); for (; e.checkStartOfBlock() && e.checkEndOfBlock();) { m = e.startPath(); f = m.block; if (!f) break; f.is("li") && (h = f.getParent(), f.equals(h.getLast(r)) && f.equals(h.getFirst(r)) && (f = h)); e.moveToPosition(f, CKEDITOR.POSITION_BEFORE_START); f.remove() } e = e.clone(); f = a.editable(); e.setEndAt(f, CKEDITOR.POSITION_BEFORE_END); e = new CKEDITOR.dom.walker(e); e.evaluator =
                            function (a) { return r(a) && !w(a) }; (e = e.next()) && e.type == CKEDITOR.NODE_ELEMENT && e.getName() in CKEDITOR.dtd.$list && l(e); b.moveToBookmark(g); b.select(); a.fire("saveSnapshot")
            } function c(a) { return (a = a.getLast(r)) && a.type == CKEDITOR.NODE_ELEMENT && a.getName() in k ? a : null } var k = { ol: 1, ul: 1 }, g = CKEDITOR.dom.walker.whitespaces(), n = CKEDITOR.dom.walker.bookmark(), r = function (a) { return !(g(a) || n(a)) }, w = CKEDITOR.dom.walker.bogus(); CKEDITOR.plugins.list = {
                listToArray: function (a, b, c, d, e) {
                    if (!k[a.getName()]) return []; d || (d =
                        0); c || (c = []); for (var f = 0, g = a.getChildCount(); f < g; f++) {
                            var h = a.getChild(f); h.type == CKEDITOR.NODE_ELEMENT && h.getName() in CKEDITOR.dtd.$list && CKEDITOR.plugins.list.listToArray(h, b, c, d + 1); if ("li" == h.$.nodeName.toLowerCase()) {
                                var l = { parent: a, indent: d, element: h, contents: [] }; e ? l.grandparent = e : (l.grandparent = a.getParent(), l.grandparent && "li" == l.grandparent.$.nodeName.toLowerCase() && (l.grandparent = l.grandparent.getParent())); b && CKEDITOR.dom.element.setMarker(b, h, "listarray_index", c.length); c.push(l); for (var m =
                                    0, n = h.getChildCount(), r; m < n; m++)r = h.getChild(m), r.type == CKEDITOR.NODE_ELEMENT && k[r.getName()] ? CKEDITOR.plugins.list.listToArray(r, b, c, d + 1, l.grandparent) : l.contents.push(r)
                            }
                        } return c
                }, arrayToList: function (a, b, c, d, e) {
                    c || (c = 0); if (!a || a.length < c + 1) return null; for (var f, g = a[c].parent.getDocument(), h = new CKEDITOR.dom.documentFragment(g), l = null, m = c, t = Math.max(a[c].indent, 0), p = null, w, C, O = d == CKEDITOR.ENTER_P ? "p" : "div"; ;) {
                        var J = a[m]; f = J.grandparent; w = J.element.getDirection(1); if (J.indent == t) {
                            l && a[m].parent.getName() ==
                            l.getName() || (l = a[m].parent.clone(!1, 1), e && l.setAttribute("dir", e), h.append(l)); p = l.append(J.element.clone(0, 1)); w != l.getDirection(1) && p.setAttribute("dir", w); for (f = 0; f < J.contents.length; f++)p.append(J.contents[f].clone(1, 1)); m++
                        } else if (J.indent == Math.max(t, 0) + 1) J = a[m - 1].element.getDirection(1), m = CKEDITOR.plugins.list.arrayToList(a, null, m, d, J != w ? w : null), !p.getChildCount() && CKEDITOR.env.needsNbspFiller && 7 >= g.$.documentMode && p.append(g.createText(" ")), p.append(m.listNode), m = m.nextIndex; else if (-1 ==
                            J.indent && !c && f) {
                                k[f.getName()] ? (p = J.element.clone(!1, !0), w != f.getDirection(1) && p.setAttribute("dir", w)) : p = new CKEDITOR.dom.documentFragment(g); var l = f.getDirection(1) != w, N = J.element, R = N.getAttribute("class"), H = N.getAttribute("style"), I = p.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT && (d != CKEDITOR.ENTER_BR || l || H || R), P, X = J.contents.length, U; for (f = 0; f < X; f++)if (P = J.contents[f], n(P) && 1 < X) I ? U = P.clone(1, 1) : p.append(P.clone(1, 1)); else if (P.type == CKEDITOR.NODE_ELEMENT && P.isBlockBoundary()) {
                                    l && !P.getDirection() &&
                                    P.setAttribute("dir", w); C = P; var Y = N.getAttribute("style"); Y && C.setAttribute("style", Y.replace(/([^;])$/, "$1;") + (C.getAttribute("style") || "")); R && P.addClass(R); C = null; U && (p.append(U), U = null); p.append(P.clone(1, 1))
                                } else I ? (C || (C = g.createElement(O), p.append(C), l && C.setAttribute("dir", w)), H && C.setAttribute("style", H), R && C.setAttribute("class", R), U && (C.append(U), U = null), C.append(P.clone(1, 1))) : p.append(P.clone(1, 1)); U && ((C || p).append(U), U = null); p.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT && m != a.length - 1 && (CKEDITOR.env.needsBrFiller &&
                                    (w = p.getLast()) && w.type == CKEDITOR.NODE_ELEMENT && w.is("br") && w.remove(), (w = p.getLast(r)) && w.type == CKEDITOR.NODE_ELEMENT && w.is(CKEDITOR.dtd.$block) || p.append(g.createElement("br"))); w = p.$.nodeName.toLowerCase(); "div" != w && "p" != w || p.appendBogus(); h.append(p); l = null; m++
                        } else return null; C = null; if (a.length <= m || Math.max(a[m].indent, 0) < t) break
                    } if (b) for (a = h.getFirst(); a;) {
                        if (a.type == CKEDITOR.NODE_ELEMENT && (CKEDITOR.dom.element.clearMarkers(b, a), a.getName() in CKEDITOR.dtd.$listItem && (c = a, g = e = d = void 0, d = c.getDirection()))) {
                            for (e =
                                c.getParent(); e && !(g = e.getDirection());)e = e.getParent(); d == g && c.removeAttribute("dir")
                        } a = a.getNextSourceNode()
                    } return { listNode: h, nextIndex: m }
                }
            }; var p = /^h[1-6]$/, t = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT); b.prototype = {
                exec: function (b) {
                    function c(a) { return k[a.root.getName()] && !d(a.root, [CKEDITOR.NODE_COMMENT]) } function d(a, b) { return CKEDITOR.tools.array.filter(a.getChildren().toArray(), function (a) { return -1 === CKEDITOR.tools.array.indexOf(b, a.type) }).length } function g(a) {
                        var b = !0; if (0 === a.getChildCount()) return !1;
                        a.forEach(function (a) { if (a.type !== CKEDITOR.NODE_COMMENT) return b = !1 }, null, !0); return b
                    } this.refresh(b, b.elementPath()); var h = b.config, m = b.getSelection(), n = m && m.getRanges(); if (this.state == CKEDITOR.TRISTATE_OFF) { var t = b.editable(); if (t.getFirst(r)) { var p = 1 == n.length && n[0]; (h = p && p.getEnclosedNode()) && h.is && this.type == h.getName() && this.setState(CKEDITOR.TRISTATE_ON) } else h.enterMode == CKEDITOR.ENTER_BR ? t.appendBogus() : n[0].fixBlock(1, h.enterMode == CKEDITOR.ENTER_P ? "p" : "div"), m.selectRanges(n) } for (var h =
                        m.createBookmarks(!0), t = [], w = {}, n = n.createIterator(), E = 0; (p = n.getNextRange()) && ++E;) {
                            var L = p.getBoundaryNodes(), M = L.startNode, C = L.endNode; M.type == CKEDITOR.NODE_ELEMENT && "td" == M.getName() && p.setStartAt(L.startNode, CKEDITOR.POSITION_AFTER_START); C.type == CKEDITOR.NODE_ELEMENT && "td" == C.getName() && p.setEndAt(L.endNode, CKEDITOR.POSITION_BEFORE_END); p = p.createIterator(); for (p.forceBrBreak = this.state == CKEDITOR.TRISTATE_OFF; L = p.getNextParagraph();)if (!L.getCustomData("list_block") && !g(L)) {
                                CKEDITOR.dom.element.setMarker(w,
                                    L, "list_block", 1); for (var O = b.elementPath(L), M = O.elements, C = 0, O = O.blockLimit, J, N = M.length - 1; 0 <= N && (J = M[N]); N--)if (k[J.getName()] && O.contains(J)) { O.removeCustomData("list_group_object_" + E); (M = J.getCustomData("list_group_object")) ? M.contents.push(L) : (M = { root: J, contents: [L] }, t.push(M), CKEDITOR.dom.element.setMarker(w, J, "list_group_object", M)); C = 1; break } C || (C = O, C.getCustomData("list_group_object_" + E) ? C.getCustomData("list_group_object_" + E).contents.push(L) : (M = { root: C, contents: [L] }, CKEDITOR.dom.element.setMarker(w,
                                        C, "list_group_object_" + E, M), t.push(M)))
                            }
                    } for (J = []; 0 < t.length;)M = t.shift(), this.state == CKEDITOR.TRISTATE_OFF ? c(M) || (k[M.root.getName()] ? a.call(this, b, M, w, J) : f.call(this, b, M, J)) : this.state == CKEDITOR.TRISTATE_ON && k[M.root.getName()] && !c(M) && e.call(this, b, M, w); for (N = 0; N < J.length; N++)l(J[N]); CKEDITOR.dom.element.clearAllMarkers(w); m.selectBookmarks(h); b.focus()
                }, refresh: function (a, b) {
                    var c = b.contains(k, 1), d = b.blockLimit || b.root; c && d.contains(c) ? this.setState(c.is(this.type) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF) :
                        this.setState(CKEDITOR.TRISTATE_OFF)
                }
            }; CKEDITOR.plugins.add("list", {
                requires: "indentlist", init: function (a) {
                    a.blockless || (a.addCommand("numberedlist", new b("numberedlist", "ol")), a.addCommand("bulletedlist", new b("bulletedlist", "ul")), a.ui.addButton && (a.ui.addButton("NumberedList", { label: a.lang.list.numberedlist, command: "numberedlist", directional: !0, toolbar: "list,10" }), a.ui.addButton("BulletedList", { label: a.lang.list.bulletedlist, command: "bulletedlist", directional: !0, toolbar: "list,20" })), a.on("key",
                        function (b) {
                            var d = b.data.domEvent.getKey(), e; if ("wysiwyg" == a.mode && d in { 8: 1, 46: 1 }) {
                                var f = a.getSelection().getRanges()[0], g = f && f.startPath(); if (f && f.collapsed) {
                                    var l = 8 == d, n = a.editable(), t = new CKEDITOR.dom.walker(f.clone()); t.evaluator = function (a) { return r(a) && !w(a) }; t.guard = function (a, b) { return !(b && a.type == CKEDITOR.NODE_ELEMENT && a.is("table")) }; d = f.clone(); if (l) {
                                        var p; (p = g.contains(k)) && f.checkBoundaryOfElement(p, CKEDITOR.START) && (p = p.getParent()) && p.is("li") && (p = c(p)) ? (e = p, p = p.getPrevious(r), d.moveToPosition(p &&
                                            w(p) ? p : e, CKEDITOR.POSITION_BEFORE_START)) : (t.range.setStartAt(n, CKEDITOR.POSITION_AFTER_START), t.range.setEnd(f.startContainer, f.startOffset), (p = t.previous()) && p.type == CKEDITOR.NODE_ELEMENT && (p.getName() in k || p.is("li")) && (p.is("li") || (t.range.selectNodeContents(p), t.reset(), t.evaluator = h, p = t.previous()), e = p, d.moveToElementEditEnd(e), d.moveToPosition(d.endPath().block, CKEDITOR.POSITION_BEFORE_END))); if (e) m(a, d, f), b.cancel(); else {
                                                var E = g.contains(k); E && f.checkBoundaryOfElement(E, CKEDITOR.START) && (e =
                                                    E.getFirst(r), f.checkBoundaryOfElement(e, CKEDITOR.START) && (p = E.getPrevious(r), c(e) ? p && (f.moveToElementEditEnd(p), f.select()) : a.execCommand("outdent"), b.cancel()))
                                            }
                                    } else if (e = g.contains("li")) {
                                        if (t.range.setEndAt(n, CKEDITOR.POSITION_BEFORE_END), l = (n = e.getLast(r)) && h(n) ? n : e, g = 0, (p = t.next()) && p.type == CKEDITOR.NODE_ELEMENT && p.getName() in k && p.equals(n) ? (g = 1, p = t.next()) : f.checkBoundaryOfElement(l, CKEDITOR.END) && (g = 2), g && p) {
                                            f = f.clone(); f.moveToElementEditStart(p); if (1 == g && (d.optimize(), !d.startContainer.equals(e))) {
                                                for (e =
                                                    d.startContainer; e.is(CKEDITOR.dtd.$inline);)E = e, e = e.getParent(); E && d.moveToPosition(E, CKEDITOR.POSITION_AFTER_END)
                                            } 2 == g && (d.moveToPosition(d.endPath().block, CKEDITOR.POSITION_BEFORE_END), f.endPath().block && f.moveToPosition(f.endPath().block, CKEDITOR.POSITION_AFTER_START)); m(a, d, f); b.cancel()
                                        }
                                    } else t.range.setEndAt(n, CKEDITOR.POSITION_BEFORE_END), (p = t.next()) && p.type == CKEDITOR.NODE_ELEMENT && p.is(k) && (p = p.getFirst(r), g.block && f.checkStartOfBlock() && f.checkEndOfBlock() ? (g.block.remove(), f.moveToElementEditStart(p),
                                        f.select()) : c(p) ? (f.moveToElementEditStart(p), f.select()) : (f = f.clone(), f.moveToElementEditStart(p), m(a, d, f)), b.cancel()); setTimeout(function () { a.selectionChange(1) })
                                }
                            }
                        }))
                }
            })
        }(), function () {
            function a(a, b, c) { c = a.config.forceEnterMode || c; if ("wysiwyg" == a.mode) { b || (b = a.activeEnterMode); var d = a.elementPath(); d && !d.isContextFor("p") && (b = CKEDITOR.ENTER_BR, c = 1); a.fire("saveSnapshot"); b == CKEDITOR.ENTER_BR ? h(a, b, null, c) : m(a, b, null, c); a.fire("saveSnapshot") } } function f(a) {
                a = a.getSelection().getRanges(!0); for (var b =
                    a.length - 1; 0 < b; b--)a[b].deleteContents(); return a[0]
            } function e(a) { var b = a.startContainer.getAscendant(function (a) { return a.type == CKEDITOR.NODE_ELEMENT && "true" == a.getAttribute("contenteditable") }, !0); if (a.root.equals(b)) return a; b = new CKEDITOR.dom.range(b); b.moveToRange(a); return b } CKEDITOR.plugins.add("enterkey", {
                init: function (b) {
                    b.addCommand("enter", { modes: { wysiwyg: 1 }, editorFocus: !1, exec: function (b) { a(b) } }); b.addCommand("shiftEnter", {
                        modes: { wysiwyg: 1 }, editorFocus: !1, exec: function (b) {
                            a(b, b.activeShiftEnterMode,
                                1)
                        }
                    }); b.setKeystroke([[13, "enter"], [CKEDITOR.SHIFT + 13, "shiftEnter"]])
                }
            }); var b = CKEDITOR.dom.walker.whitespaces(), d = CKEDITOR.dom.walker.bookmark(), l, h, m, c; CKEDITOR.plugins.enterkey = {
                enterBlock: function (a, g, l, m) {
                    function w(a) { var b; if (a === CKEDITOR.ENTER_BR || -1 === CKEDITOR.tools.indexOf(["td", "th"], y.lastElement.getName()) || 1 !== y.lastElement.getChildCount()) return !1; a = y.lastElement.getChild(0).clone(!0); (b = a.getBogus()) && b.remove(); return a.getText().length ? !1 : !0 } if (l = l || f(a)) {
                        l = e(l); var p = l.document,
                            t = l.checkStartOfBlock(), u = l.checkEndOfBlock(), y = a.elementPath(l.startContainer), q = y.block, A = g == CKEDITOR.ENTER_DIV ? "div" : "p", v; if (q && t && u) {
                                t = q.getParent(); if (t.is("li") && 1 < t.getChildCount()) { p = new CKEDITOR.dom.element("li"); v = a.createRange(); p.insertAfter(t); q.remove(); v.setStart(p, 0); a.getSelection().selectRanges([v]); return } if (q.is("li") || q.getParent().is("li")) {
                                    q.is("li") || (q = q.getParent(), t = q.getParent()); v = t.getParent(); l = !q.hasPrevious(); var z = !q.hasNext(); m = a.getSelection(); var A = m.createBookmarks(),
                                        x = q.getDirection(1), u = q.getAttribute("class"), D = q.getAttribute("style"), B = v.getDirection(1) != x; a = a.enterMode != CKEDITOR.ENTER_BR || B || D || u; if (v.is("li")) l || z ? (l && z && t.remove(), q[z ? "insertAfter" : "insertBefore"](v)) : q.breakParent(v); else {
                                            if (a) if (y.block.is("li") ? (v = p.createElement(g == CKEDITOR.ENTER_P ? "p" : "div"), B && v.setAttribute("dir", x), D && v.setAttribute("style", D), u && v.setAttribute("class", u), q.moveChildren(v)) : v = y.block, l || z) v[l ? "insertBefore" : "insertAfter"](t); else q.breakParent(t), v.insertAfter(t);
                                            else if (q.appendBogus(!0), l || z) for (; p = q[l ? "getFirst" : "getLast"]();)p[l ? "insertBefore" : "insertAfter"](t); else for (q.breakParent(t); p = q.getLast();)p.insertAfter(t); q.remove()
                                        } m.selectBookmarks(A); return
                                } if (q && q.getParent().is("blockquote")) { q.breakParent(q.getParent()); q.getPrevious().getFirst(CKEDITOR.dom.walker.invisible(1)) || q.getPrevious().remove(); q.getNext().getFirst(CKEDITOR.dom.walker.invisible(1)) || q.getNext().remove(); l.moveToElementEditStart(q); l.select(); return }
                            } else if (q && q.is("pre") &&
                                !u) { h(a, g, l, m); return } if (D = l.splitBlock(A)) {
                                    a = D.previousBlock; q = D.nextBlock; t = D.wasStartOfBlock; u = D.wasEndOfBlock; q ? (z = q.getParent(), z.is("li") && (q.breakParent(z), q.move(q.getNext(), 1))) : a && (z = a.getParent()) && z.is("li") && (a.breakParent(z), z = a.getNext(), l.moveToElementEditStart(z), a.move(a.getPrevious())); if (t || u) if (w(g)) l.moveToElementEditStart(l.getTouchedStartNode()); else {
                                        if (a) { if (a.is("li") || !c.test(a.getName()) && !a.is("pre")) v = a.clone() } else q && (v = q.clone()); v ? m && !v.is("li") && v.renameNode(A) :
                                            z && z.is("li") ? v = z : (v = p.createElement(A), a && (x = a.getDirection()) && v.setAttribute("dir", x)); if (p = D.elementPath) for (g = 0, m = p.elements.length; g < m; g++) { A = p.elements[g]; if (A.equals(p.block) || A.equals(p.blockLimit)) break; CKEDITOR.dtd.$removeEmpty[A.getName()] && (A = A.clone(), v.moveChildren(A), v.append(A)) } v.appendBogus(); v.getParent() || l.insertNode(v); v.is("li") && v.removeAttribute("value"); !CKEDITOR.env.ie || !t || u && a.getChildCount() || (l.moveToElementEditStart(u ? a : v), l.select()); l.moveToElementEditStart(t && !u ?
                                                q : v)
                                    } else q.is("li") && (v = l.clone(), v.selectNodeContents(q), v = new CKEDITOR.dom.walker(v), v.evaluator = function (a) { return !(d(a) || b(a) || a.type == CKEDITOR.NODE_ELEMENT && a.getName() in CKEDITOR.dtd.$inline && !(a.getName() in CKEDITOR.dtd.$empty)) }, (z = v.next()) && z.type == CKEDITOR.NODE_ELEMENT && z.is("ul", "ol") && (CKEDITOR.env.needsBrFiller ? p.createElement("br") : p.createText(" ")).insertBefore(z)), q && l.moveToElementEditStart(q); l.select(); l.scrollIntoView()
                                }
                    }
                }, enterBr: function (a, b, d, e) {
                    if (d = d || f(a)) {
                        var h = d.document,
                        l = d.checkEndOfBlock(), t = new CKEDITOR.dom.elementPath(a.getSelection().getStartElement()), u = t.block, y = u && t.block.getName(); e || "li" != y ? (!e && l && c.test(y) ? (l = u.getDirection()) ? (h = h.createElement("div"), h.setAttribute("dir", l), h.insertAfter(u), d.setStart(h, 0)) : (h.createElement("br").insertAfter(u), CKEDITOR.env.gecko && h.createText("").insertAfter(u), d.setStartAt(u.getNext(), CKEDITOR.env.ie ? CKEDITOR.POSITION_BEFORE_START : CKEDITOR.POSITION_AFTER_START)) : (a = "pre" == y && CKEDITOR.env.ie && 8 > CKEDITOR.env.version ?
                            h.createText("\r") : h.createElement("br"), d.deleteContents(), d.insertNode(a), CKEDITOR.env.needsBrFiller ? (h.createText("﻿").insertAfter(a), l && (u || t.blockLimit).appendBogus(), a.getNext().$.nodeValue = "", d.setStartAt(a.getNext(), CKEDITOR.POSITION_AFTER_START)) : d.setStartAt(a, CKEDITOR.POSITION_AFTER_END)), d.collapse(!0), d.select(), d.scrollIntoView()) : m(a, b, d, e)
                    }
                }
            }; l = CKEDITOR.plugins.enterkey; h = l.enterBr; m = l.enterBlock; c = /^h[1-6]$/
        }(), function () {
            function a(a, e) {
                var b = {}, d = [], l = {
                    nbsp: " ", shy: "­", gt: "\x3e",
                    lt: "\x3c", amp: "\x26", apos: "'", quot: '"'
                }; a = a.replace(/\b(nbsp|shy|gt|lt|amp|apos|quot)(?:,|$)/g, function (a, c) { var f = e ? "\x26" + c + ";" : l[c]; b[f] = e ? l[c] : "\x26" + c + ";"; d.push(f); return "" }); a = a.replace(/,$/, ""); if (!e && a) { a = a.split(","); var h = document.createElement("div"), m; h.innerHTML = "\x26" + a.join(";\x26") + ";"; m = h.innerHTML; h = null; for (h = 0; h < m.length; h++) { var c = m.charAt(h); b[c] = "\x26" + a[h] + ";"; d.push(c) } } b.regex = d.join(e ? "|" : ""); return b
            } CKEDITOR.plugins.add("entities", {
                afterInit: function (f) {
                    function e(a) { return c[a] }
                    function b(a) { return "force" != d.entities_processNumerical && h[a] ? h[a] : "\x26#" + a.charCodeAt(0) + ";" } var d = f.config; if (f = (f = f.dataProcessor) && f.htmlFilter) {
                        var l = []; !1 !== d.basicEntities && l.push("nbsp,gt,lt,amp"); d.entities && (l.length && l.push("quot,iexcl,cent,pound,curren,yen,brvbar,sect,uml,copy,ordf,laquo,not,shy,reg,macr,deg,plusmn,sup2,sup3,acute,micro,para,middot,cedil,sup1,ordm,raquo,frac14,frac12,frac34,iquest,times,divide,fnof,bull,hellip,prime,Prime,oline,frasl,weierp,image,real,trade,alefsym,larr,uarr,rarr,darr,harr,crarr,lArr,uArr,rArr,dArr,hArr,forall,part,exist,empty,nabla,isin,notin,ni,prod,sum,minus,lowast,radic,prop,infin,ang,and,or,cap,cup,int,there4,sim,cong,asymp,ne,equiv,le,ge,sub,sup,nsub,sube,supe,oplus,otimes,perp,sdot,lceil,rceil,lfloor,rfloor,lang,rang,loz,spades,clubs,hearts,diams,circ,tilde,ensp,emsp,thinsp,zwnj,zwj,lrm,rlm,ndash,mdash,lsquo,rsquo,sbquo,ldquo,rdquo,bdquo,dagger,Dagger,permil,lsaquo,rsaquo,euro"),
                            d.entities_latin && l.push("Agrave,Aacute,Acirc,Atilde,Auml,Aring,AElig,Ccedil,Egrave,Eacute,Ecirc,Euml,Igrave,Iacute,Icirc,Iuml,ETH,Ntilde,Ograve,Oacute,Ocirc,Otilde,Ouml,Oslash,Ugrave,Uacute,Ucirc,Uuml,Yacute,THORN,szlig,agrave,aacute,acirc,atilde,auml,aring,aelig,ccedil,egrave,eacute,ecirc,euml,igrave,iacute,icirc,iuml,eth,ntilde,ograve,oacute,ocirc,otilde,ouml,oslash,ugrave,uacute,ucirc,uuml,yacute,thorn,yuml,OElig,oelig,Scaron,scaron,Yuml"), d.entities_greek && l.push("Alpha,Beta,Gamma,Delta,Epsilon,Zeta,Eta,Theta,Iota,Kappa,Lambda,Mu,Nu,Xi,Omicron,Pi,Rho,Sigma,Tau,Upsilon,Phi,Chi,Psi,Omega,alpha,beta,gamma,delta,epsilon,zeta,eta,theta,iota,kappa,lambda,mu,nu,xi,omicron,pi,rho,sigmaf,sigma,tau,upsilon,phi,chi,psi,omega,thetasym,upsih,piv"),
                            d.entities_additional && l.push(d.entities_additional)); var h = a(l.join(",")), m = h.regex ? "[" + h.regex + "]" : "a^"; delete h.regex; d.entities && d.entities_processNumerical && (m = "[^ -~]|" + m); var m = new RegExp(m, "g"), c = a("nbsp,gt,lt,amp,shy", !0), k = new RegExp(c.regex, "g"); f.addRules({ text: function (a) { return a.replace(k, e).replace(m, b) } }, { applyToAll: !0, excludeNestedEditable: !0 })
                    }
                }
            })
        }(), CKEDITOR.config.basicEntities = !0, CKEDITOR.config.entities = !0, CKEDITOR.config.entities_latin = !0, CKEDITOR.config.entities_greek = !0,
        CKEDITOR.config.entities_additional = "#39", CKEDITOR.plugins.add("popup"), CKEDITOR.tools.extend(CKEDITOR.editor.prototype, {
            popup: function (a, f, e, b) {
                f = f || "80%"; e = e || "70%"; "string" == typeof f && 1 < f.length && "%" == f.substr(f.length - 1, 1) && (f = parseInt(window.screen.width * parseInt(f, 10) / 100, 10)); "string" == typeof e && 1 < e.length && "%" == e.substr(e.length - 1, 1) && (e = parseInt(window.screen.height * parseInt(e, 10) / 100, 10)); 640 > f && (f = 640); 420 > e && (e = 420); var d = parseInt((window.screen.height - e) / 2, 10), l = parseInt((window.screen.width -
                    f) / 2, 10); b = (b || "location\x3dno,menubar\x3dno,toolbar\x3dno,dependent\x3dyes,minimizable\x3dno,modal\x3dyes,alwaysRaised\x3dyes,resizable\x3dyes,scrollbars\x3dyes") + ",width\x3d" + f + ",height\x3d" + e + ",top\x3d" + d + ",left\x3d" + l; var h = window.open("", null, b, !0); if (!h) return !1; try { -1 == navigator.userAgent.toLowerCase().indexOf(" chrome/") && (h.moveTo(l, d), h.resizeTo(f, e)), h.focus(), h.location.href = a } catch (m) { window.open(a, null, b, !0) } return !0
            }
        }), "use strict", function () {
            function a(a) {
                this.editor = a; this.loaders =
                    []
            } function f(a, b, f) { var m = a.config.fileTools_defaultFileName; this.editor = a; this.lang = a.lang; "string" === typeof b ? (this.data = b, this.file = e(this.data), this.loaded = this.total = this.file.size) : (this.data = null, this.file = b, this.total = this.file.size, this.loaded = 0); f ? this.fileName = f : this.file.name ? this.fileName = this.file.name : (a = this.file.type.split("/"), m && (a[0] = m), this.fileName = a.join(".")); this.uploaded = 0; this.responseData = this.uploadTotal = null; this.status = "created"; this.abort = function () { this.changeStatus("abort") } }
            function e(a) { var e = a.match(b)[1]; a = a.replace(b, ""); a = atob(a); var f = [], m, c, k, g; for (m = 0; m < a.length; m += 512) { c = a.slice(m, m + 512); k = Array(c.length); for (g = 0; g < c.length; g++)k[g] = c.charCodeAt(g); c = new Uint8Array(k); f.push(c) } return new Blob(f, { type: e }) } CKEDITOR.plugins.add("filetools", {
                beforeInit: function (b) {
                    b.uploadRepository = new a(b); b.on("fileUploadRequest", function (a) { var b = a.data.fileLoader; b.xhr.open("POST", b.uploadUrl, !0); a.data.requestData.upload = { file: b.file, name: b.fileName } }, null, null, 5); b.on("fileUploadRequest",
                        function (a) { var e = a.data.fileLoader, f = new FormData; a = a.data.requestData; var c = b.config.fileTools_requestHeaders, k, g; for (g in a) { var n = a[g]; "object" === typeof n && n.file ? f.append(g, n.file, n.name) : f.append(g, n) } f.append("ckCsrfToken", CKEDITOR.tools.getCsrfToken()); if (c) for (k in c) e.xhr.setRequestHeader(k, c[k]); e.xhr.send(f) }, null, null, 999); b.on("fileUploadResponse", function (a) {
                            var b = a.data.fileLoader, d = b.xhr, c = a.data; try {
                                var e = JSON.parse(d.responseText); e.error && e.error.message && (c.message = e.error.message);
                                if (e.uploaded) for (var f in e) c[f] = e[f]; else a.cancel()
                            } catch (n) { c.message = b.lang.filetools.responseError, CKEDITOR.warn("filetools-response-error", { responseText: d.responseText }), a.cancel() }
                        }, null, null, 999)
                }
            }); a.prototype = { create: function (a, b, e) { e = e || f; var m = this.loaders.length; a = new e(this.editor, a, b); a.id = m; this.loaders[m] = a; this.fire("instanceCreated", a); return a }, isFinished: function () { for (var a = 0; a < this.loaders.length; ++a)if (!this.loaders[a].isFinished()) return !1; return !0 } }; f.prototype = {
                loadAndUpload: function (a,
                    b) { var e = this; this.once("loaded", function (f) { f.cancel(); e.once("update", function (a) { a.cancel() }, null, null, 0); e.upload(a, b) }, null, null, 0); this.load() }, load: function () {
                        var a = this, b = this.reader = new FileReader; a.changeStatus("loading"); this.abort = function () { a.reader.abort() }; b.onabort = function () { a.changeStatus("abort") }; b.onerror = function () { a.message = a.lang.filetools.loadError; a.changeStatus("error") }; b.onprogress = function (b) { a.loaded = b.loaded; a.update() }; b.onload = function () {
                            a.loaded = a.total; a.data = b.result;
                            a.changeStatus("loaded")
                        }; b.readAsDataURL(this.file)
                    }, upload: function (a, b) { var e = b || {}; a ? (this.uploadUrl = a, this.xhr = new XMLHttpRequest, this.attachRequestListeners(), this.editor.fire("fileUploadRequest", { fileLoader: this, requestData: e }) && this.changeStatus("uploading")) : (this.message = this.lang.filetools.noUrlError, this.changeStatus("error")) }, attachRequestListeners: function () {
                        function a() { "error" != e.status && (e.message = e.lang.filetools.networkError, e.changeStatus("error")) } function b() {
                            "abort" != e.status &&
                            e.changeStatus("abort")
                        } var e = this, f = this.xhr; e.abort = function () { f.abort(); b() }; f.onerror = a; f.onabort = b; f.upload ? (f.upload.onprogress = function (a) { a.lengthComputable && (e.uploadTotal || (e.uploadTotal = a.total), e.uploaded = a.loaded, e.update()) }, f.upload.onerror = a, f.upload.onabort = b) : (e.uploadTotal = e.total, e.update()); f.onload = function () {
                            e.update(); if ("abort" != e.status) if (e.uploaded = e.uploadTotal, 200 > f.status || 299 < f.status) e.message = e.lang.filetools["httpError" + f.status], e.message || (e.message = e.lang.filetools.httpError.replace("%1",
                                f.status)), e.changeStatus("error"); else { for (var a = { fileLoader: e }, b = ["message", "fileName", "url"], d = e.editor.fire("fileUploadResponse", a), l = 0; l < b.length; l++) { var r = b[l]; "string" === typeof a[r] && (e[r] = a[r]) } e.responseData = a; delete e.responseData.fileLoader; !1 === d ? e.changeStatus("error") : e.changeStatus("uploaded") }
                        }
                    }, changeStatus: function (a) { this.status = a; if ("error" == a || "abort" == a || "loaded" == a || "uploaded" == a) this.abort = function () { }; this.fire(a); this.update() }, update: function () { this.fire("update") }, isFinished: function () { return !!this.status.match(/^(?:loaded|uploaded|error|abort)$/) }
            };
            CKEDITOR.event.implementOn(a.prototype); CKEDITOR.event.implementOn(f.prototype); var b = /^data:(\S*?);base64,/; CKEDITOR.fileTools || (CKEDITOR.fileTools = {}); CKEDITOR.tools.extend(CKEDITOR.fileTools, {
                uploadRepository: a, fileLoader: f, getUploadUrl: function (a, b) {
                    var e = CKEDITOR.tools.capitalize; return b && a[b + "UploadUrl"] ? a[b + "UploadUrl"] : a.uploadUrl ? a.uploadUrl : b && a["filebrowser" + e(b, 1) + "UploadUrl"] ? a["filebrowser" + e(b, 1) + "UploadUrl"] + "\x26responseType\x3djson" : a.filebrowserUploadUrl ? a.filebrowserUploadUrl +
                        "\x26responseType\x3djson" : null
                }, isTypeSupported: function (a, b) { return !!a.type.match(b) }, isFileUploadSupported: "function" === typeof FileReader && "function" === typeof (new FileReader).readAsDataURL && "function" === typeof FormData && "function" === typeof (new FormData).append && "function" === typeof XMLHttpRequest && "function" === typeof Blob
            })
        }(), function () {
            function a(a, b) { var c = []; if (b) for (var d in b) c.push(d + "\x3d" + encodeURIComponent(b[d])); else return a; return a + (-1 != a.indexOf("?") ? "\x26" : "?") + c.join("\x26") } function f(b) {
                return !b.match(/command=QuickUpload/) ||
                    b.match(/(\?|&)responseType=json/) ? b : a(b, { responseType: "json" })
            } function e(a) { a += ""; return a.charAt(0).toUpperCase() + a.substr(1) } function b() {
                var b = this.getDialog(), c = b.getParentEditor(); c._.filebrowserSe = this; var d = c.config["filebrowser" + e(b.getName()) + "WindowWidth"] || c.config.filebrowserWindowWidth || "80%", b = c.config["filebrowser" + e(b.getName()) + "WindowHeight"] || c.config.filebrowserWindowHeight || "70%", f = this.filebrowser.params || {}; f.CKEditor = c.name; f.CKEditorFuncNum = c._.filebrowserFn; f.langCode ||
                    (f.langCode = c.langCode); f = a(this.filebrowser.url, f); c.popup(f, d, b, c.config.filebrowserWindowFeatures || c.config.fileBrowserWindowFeatures)
            } function d(a) { var b = new CKEDITOR.dom.element(a.$.form); b && ((a = b.$.elements.ckCsrfToken) ? a = new CKEDITOR.dom.element(a) : (a = new CKEDITOR.dom.element("input"), a.setAttributes({ name: "ckCsrfToken", type: "hidden" }), b.append(a)), a.setAttribute("value", CKEDITOR.tools.getCsrfToken())) } function l() {
                var a = this.getDialog(); a.getParentEditor()._.filebrowserSe = this; return a.getContentElement(this["for"][0],
                    this["for"][1]).getInputElement().$.value && a.getContentElement(this["for"][0], this["for"][1]).getAction() ? !0 : !1
            } function h(b, c, d) { var e = d.params || {}; e.CKEditor = b.name; e.CKEditorFuncNum = b._.filebrowserFn; e.langCode || (e.langCode = b.langCode); c.action = a(d.url, e); c.filebrowser = d } function m(a, k, w, p) {
                if (p && p.length) for (var t, u = p.length; u--;)if (t = p[u], "hbox" != t.type && "vbox" != t.type && "fieldset" != t.type || m(a, k, w, t.children), t.filebrowser) if ("string" == typeof t.filebrowser && (t.filebrowser = {
                    action: "fileButton" ==
                        t.type ? "QuickUpload" : "Browse", target: t.filebrowser
                }), "Browse" == t.filebrowser.action) { var y = t.filebrowser.url; void 0 === y && (y = a.config["filebrowser" + e(k) + "BrowseUrl"], void 0 === y && (y = a.config.filebrowserBrowseUrl)); y && (t.onClick = b, t.filebrowser.url = y, t.hidden = !1) } else if ("QuickUpload" == t.filebrowser.action && t["for"] && (y = t.filebrowser.url, void 0 === y && (y = a.config["filebrowser" + e(k) + "UploadUrl"], void 0 === y && (y = a.config.filebrowserUploadUrl)), y)) {
                    var q = t.onClick; t.onClick = function (b) {
                        var e = b.sender, h = e.getDialog().getContentElement(this["for"][0],
                            this["for"][1]).getInputElement(), k = CKEDITOR.fileTools && CKEDITOR.fileTools.isFileUploadSupported; if (q && !1 === q.call(e, b)) return !1; if (l.call(e, b)) { if ("form" !== a.config.filebrowserUploadMethod && k) return b = a.uploadRepository.create(h.$.files[0]), b.on("uploaded", function (a) { var b = a.sender.responseData; g.call(a.sender.editor, b.url, b.message) }), b.on("error", c.bind(this)), b.on("abort", c.bind(this)), b.loadAndUpload(f(y)), "xhr"; d(h); return !0 } return !1
                    }; t.filebrowser.url = y; t.hidden = !1; h(a, w.getContents(t["for"][0]).get(t["for"][1]),
                        t.filebrowser)
                }
            } function c(a) { var b = {}; try { b = JSON.parse(a.sender.xhr.response) || {} } catch (c) { } this.enable(); alert(b.error ? b.error.message : a.sender.message) } function k(a, b, c) { if (-1 !== c.indexOf(";")) { c = c.split(";"); for (var d = 0; d < c.length; d++)if (k(a, b, c[d])) return !0; return !1 } return (a = a.getContents(b).get(c).filebrowser) && a.url } function g(a, b) {
                var c = this._.filebrowserSe.getDialog(), d = this._.filebrowserSe["for"], e = this._.filebrowserSe.filebrowser.onSelect; d && c.getContentElement(d[0], d[1]).reset(); if ("function" !=
                    typeof b || !1 !== b.call(this._.filebrowserSe)) if (!e || !1 !== e.call(this._.filebrowserSe, a, b)) if ("string" == typeof b && b && alert(b), a && (d = this._.filebrowserSe, c = d.getDialog(), d = d.filebrowser.target || null)) if (d = d.split(":"), e = c.getContentElement(d[0], d[1])) e.setValue(a), c.selectPage(d[0])
            } CKEDITOR.plugins.add("filebrowser", { requires: "popup,filetools", init: function (a) { a._.filebrowserFn = CKEDITOR.tools.addFunction(g, a); a.on("destroy", function () { CKEDITOR.tools.removeFunction(this._.filebrowserFn) }) } }); CKEDITOR.on("dialogDefinition",
                function (a) { if (a.editor.plugins.filebrowser) for (var b = a.data.definition, c, d = 0; d < b.contents.length; ++d)if (c = b.contents[d]) m(a.editor, a.data.name, b, c.elements), c.hidden && c.filebrowser && (c.hidden = !k(b, c.id, c.filebrowser)) })
        }(), function () {
            function a(a) {
                var d = a.config, l = a.fire("uiSpace", { space: "top", html: "" }).html, h = function () {
                    function g(a, b, d) { c.setStyle(b, e(d)); c.setStyle("position", a) } function k(a) {
                        var b = m.getDocumentPosition(); switch (a) {
                            case "top": g("absolute", "top", b.y - q - z); break; case "pin": g("fixed",
                                "top", D); break; case "bottom": g("absolute", "top", b.y + (u.height || u.bottom - u.top) + z)
                        }l = a
                    } var l, m, t, u, y, q, A, v = d.floatSpaceDockedOffsetX || 0, z = d.floatSpaceDockedOffsetY || 0, x = d.floatSpacePinnedOffsetX || 0, D = d.floatSpacePinnedOffsetY || 0; return function (g) {
                        if (m = a.editable()) {
                            var n = g && "focus" == g.name; n && c.show(); a.fire("floatingSpaceLayout", { show: n }); c.removeStyle("left"); c.removeStyle("right"); t = c.getClientRect(); u = m.getClientRect(); y = f.getViewPaneSize(); q = t.height; A = "pageXOffset" in f.$ ? f.$.pageXOffset : CKEDITOR.document.$.documentElement.scrollLeft;
                            l ? (q + z <= u.top ? k("top") : q + z > y.height - u.bottom ? k("pin") : k("bottom"), g = y.width / 2, g = d.floatSpacePreferRight ? "right" : 0 < u.left && u.right < y.width && u.width > t.width ? "rtl" == d.contentsLangDirection ? "right" : "left" : g - u.left > u.right - g ? "left" : "right", t.width > y.width ? (g = "left", n = 0) : (n = "left" == g ? 0 < u.left ? u.left : 0 : u.right < y.width ? y.width - u.right : 0, n + t.width > y.width && (g = "left" == g ? "right" : "left", n = 0)), c.setStyle(g, e(("pin" == l ? x : v) + n + ("pin" == l ? 0 : "left" == g ? A : -A)))) : (l = "pin", k("pin"), h(g))
                        }
                    }
                }(); if (l) {
                    var m = new CKEDITOR.template('\x3cdiv id\x3d"cke_{name}" class\x3d"cke {id} cke_reset_all cke_chrome cke_editor_{name} cke_float cke_{langDir} ' +
                        CKEDITOR.env.cssClass + '" dir\x3d"{langDir}" title\x3d"' + (CKEDITOR.env.gecko ? " " : "") + '" lang\x3d"{langCode}" role\x3d"application" style\x3d"{style}"' + (a.title ? ' aria-labelledby\x3d"cke_{name}_arialbl"' : " ") + "\x3e" + (a.title ? '\x3cspan id\x3d"cke_{name}_arialbl" class\x3d"cke_voice_label"\x3e{voiceLabel}\x3c/span\x3e' : " ") + '\x3cdiv class\x3d"cke_inner"\x3e\x3cdiv id\x3d"{topId}" class\x3d"cke_top" role\x3d"presentation"\x3e{content}\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'), c = CKEDITOR.document.getBody().append(CKEDITOR.dom.element.createFromHtml(m.output({
                            content: l,
                            id: a.id, langDir: a.lang.dir, langCode: a.langCode, name: a.name, style: "display:none;z-index:" + (d.baseFloatZIndex - 1), topId: a.ui.spaceId("top"), voiceLabel: a.title
                        }))), k = CKEDITOR.tools.eventsBuffer(500, h), g = CKEDITOR.tools.eventsBuffer(100, h); c.unselectable(); c.on("mousedown", function (a) { a = a.data; a.getTarget().hasAscendant("a", 1) || a.preventDefault() }); a.on("focus", function (c) { h(c); a.on("change", k.input); f.on("scroll", g.input); f.on("resize", g.input) }); a.on("blur", function () {
                            c.hide(); a.removeListener("change",
                                k.input); f.removeListener("scroll", g.input); f.removeListener("resize", g.input)
                        }); a.on("destroy", function () { f.removeListener("scroll", g.input); f.removeListener("resize", g.input); c.clearCustomData(); c.remove() }); a.focusManager.hasFocus && c.show(); a.focusManager.add(c, 1)
                }
            } var f = CKEDITOR.document.getWindow(), e = CKEDITOR.tools.cssLength; CKEDITOR.plugins.add("floatingspace", { init: function (b) { b.on("loaded", function () { a(this) }, null, null, 20) } })
        }(), CKEDITOR.plugins.add("listblock", {
            requires: "panel", onLoad: function () {
                var a =
                    CKEDITOR.addTemplate("panel-list", '\x3cul role\x3d"presentation" class\x3d"cke_panel_list"\x3e{items}\x3c/ul\x3e'), f = CKEDITOR.addTemplate("panel-list-item", '\x3cli id\x3d"{id}" class\x3d"cke_panel_listItem" role\x3dpresentation\x3e\x3ca id\x3d"{id}_option" _cke_focus\x3d1 hidefocus\x3dtrue title\x3d"{title}" draggable\x3d"false" ondragstart\x3d"return false;" href\x3d"javascript:void(\'{val}\')"  onclick\x3d"{onclick}CKEDITOR.tools.callFunction({clickFn},\'{val}\'); return false;" role\x3d"option"\x3e{text}\x3c/a\x3e\x3c/li\x3e'),
                e = CKEDITOR.addTemplate("panel-list-group", '\x3ch1 id\x3d"{id}" draggable\x3d"false" ondragstart\x3d"return false;" class\x3d"cke_panel_grouptitle" role\x3d"presentation" \x3e{label}\x3c/h1\x3e'), b = /\'/g; CKEDITOR.ui.panel.prototype.addListBlock = function (a, b) { return this.addBlock(a, new CKEDITOR.ui.listBlock(this.getHolderElement(), b)) }; CKEDITOR.ui.listBlock = CKEDITOR.tools.createClass({
                    base: CKEDITOR.ui.panel.block, $: function (a, b) {
                        b = b || {}; var e = b.attributes || (b.attributes = {}); (this.multiSelect = !!b.multiSelect) &&
                            (e["aria-multiselectable"] = !0); !e.role && (e.role = "listbox"); this.base.apply(this, arguments); this.element.setAttribute("role", e.role); e = this.keys; e[40] = "next"; e[9] = "next"; e[38] = "prev"; e[CKEDITOR.SHIFT + 9] = "prev"; e[32] = CKEDITOR.env.ie ? "mouseup" : "click"; CKEDITOR.env.ie && (e[13] = "mouseup"); this._.pendingHtml = []; this._.pendingList = []; this._.items = {}; this._.groups = {}
                    }, _: {
                        close: function () {
                            if (this._.started) {
                                var b = a.output({ items: this._.pendingList.join("") }); this._.pendingList = []; this._.pendingHtml.push(b);
                                delete this._.started
                            }
                        }, getClick: function () { this._.click || (this._.click = CKEDITOR.tools.addFunction(function (a) { var b = this.toggle(a); if (this.onClick) this.onClick(a, b) }, this)); return this._.click }
                    }, proto: {
                        add: function (a, e, h) {
                            var m = CKEDITOR.tools.getNextId(); this._.started || (this._.started = 1, this._.size = this._.size || 0); this._.items[a] = m; var c; c = CKEDITOR.tools.htmlEncodeAttr(a).replace(b, "\\'"); a = {
                                id: m, val: c, onclick: CKEDITOR.env.ie ? 'return false;" onmouseup\x3d"CKEDITOR.tools.getMouseButton(event)\x3d\x3d\x3dCKEDITOR.MOUSE_BUTTON_LEFT\x26\x26' :
                                    "", clickFn: this._.getClick(), title: CKEDITOR.tools.htmlEncodeAttr(h || a), text: e || a
                            }; this._.pendingList.push(f.output(a))
                        }, startGroup: function (a) { this._.close(); var b = CKEDITOR.tools.getNextId(); this._.groups[a] = b; this._.pendingHtml.push(e.output({ id: b, label: a })) }, commit: function () { this._.close(); this.element.appendHtml(this._.pendingHtml.join("")); delete this._.size; this._.pendingHtml = [] }, toggle: function (a) { var b = this.isMarked(a); b ? this.unmark(a) : this.mark(a); return !b }, hideGroup: function (a) {
                            var b = (a =
                                this.element.getDocument().getById(this._.groups[a])) && a.getNext(); a && (a.setStyle("display", "none"), b && "ul" == b.getName() && b.setStyle("display", "none"))
                        }, hideItem: function (a) { this.element.getDocument().getById(this._.items[a]).setStyle("display", "none") }, showAll: function () {
                            var a = this._.items, b = this._.groups, e = this.element.getDocument(), f; for (f in a) e.getById(a[f]).setStyle("display", ""); for (var c in b) a = e.getById(b[c]), f = a.getNext(), a.setStyle("display", ""), f && "ul" == f.getName() && f.setStyle("display",
                                "")
                        }, mark: function (a) { this.multiSelect || this.unmarkAll(); a = this._.items[a]; var b = this.element.getDocument().getById(a); b.addClass("cke_selected"); this.element.getDocument().getById(a + "_option").setAttribute("aria-selected", !0); this.onMark && this.onMark(b) }, markFirstDisplayed: function () { var a = this; this._.markFirstDisplayed(function () { a.multiSelect || a.unmarkAll() }) }, unmark: function (a) {
                            var b = this.element.getDocument(); a = this._.items[a]; var e = b.getById(a); e.removeClass("cke_selected"); b.getById(a + "_option").removeAttribute("aria-selected");
                            this.onUnmark && this.onUnmark(e)
                        }, unmarkAll: function () { var a = this._.items, b = this.element.getDocument(), e; for (e in a) { var f = a[e]; b.getById(f).removeClass("cke_selected"); b.getById(f + "_option").removeAttribute("aria-selected") } this.onUnmark && this.onUnmark() }, isMarked: function (a) { return this.element.getDocument().getById(this._.items[a]).hasClass("cke_selected") }, focus: function (a) {
                            this._.focusIndex = -1; var b = this.element.getElementsByTag("a"), e, f = -1; if (a) for (e = this.element.getDocument().getById(this._.items[a]).getFirst(); a =
                                b.getItem(++f);) { if (a.equals(e)) { this._.focusIndex = f; break } } else this.element.focus(); e && setTimeout(function () { e.focus() }, 0)
                        }
                    }
                })
            }
        }), CKEDITOR.plugins.add("richcombo", { requires: "floatpanel,listblock,button", beforeInit: function (a) { a.ui.addHandler(CKEDITOR.UI_RICHCOMBO, CKEDITOR.ui.richCombo.handler) } }), function () {
            var a = '\x3cspan id\x3d"{id}" class\x3d"cke_combo cke_combo__{name} {cls}" role\x3d"presentation"\x3e\x3cspan id\x3d"{id}_label" class\x3d"cke_combo_label"\x3e{label}\x3c/span\x3e\x3ca class\x3d"cke_combo_button" title\x3d"{title}" tabindex\x3d"-1"' +
                (CKEDITOR.env.gecko && !CKEDITOR.env.hc ? "" : " href\x3d\"javascript:void('{titleJs}')\"") + ' hidefocus\x3d"true" role\x3d"button" aria-labelledby\x3d"{id}_label" aria-haspopup\x3d"listbox"', f = ""; CKEDITOR.env.gecko && CKEDITOR.env.mac && (a += ' onkeypress\x3d"return false;"'); CKEDITOR.env.gecko && (a += ' onblur\x3d"this.style.cssText \x3d this.style.cssText;"'); CKEDITOR.env.ie && (f = 'return false;" onmouseup\x3d"CKEDITOR.tools.getMouseButton(event)\x3d\x3dCKEDITOR.MOUSE_BUTTON_LEFT\x26\x26'); var a = a + (' onkeydown\x3d"return CKEDITOR.tools.callFunction({keydownFn},event,this);" onfocus\x3d"return CKEDITOR.tools.callFunction({focusFn},event);" onclick\x3d"' +
                    f + 'CKEDITOR.tools.callFunction({clickFn},this);return false;"\x3e\x3cspan id\x3d"{id}_text" class\x3d"cke_combo_text cke_combo_inlinelabel"\x3e{label}\x3c/span\x3e\x3cspan class\x3d"cke_combo_open"\x3e\x3cspan class\x3d"cke_combo_arrow"\x3e' + (CKEDITOR.env.hc ? "\x26#9660;" : CKEDITOR.env.air ? "\x26nbsp;" : "") + "\x3c/span\x3e\x3c/span\x3e\x3c/a\x3e\x3c/span\x3e"), e = CKEDITOR.addTemplate("combo", a); CKEDITOR.UI_RICHCOMBO = "richcombo"; CKEDITOR.ui.richCombo = CKEDITOR.tools.createClass({
                        $: function (a) {
                            CKEDITOR.tools.extend(this,
                                a, { canGroup: !1, title: a.label, modes: { wysiwyg: 1 }, editorFocus: 1 }); a = this.panel || {}; delete this.panel; this.id = CKEDITOR.tools.getNextNumber(); this.document = a.parent && a.parent.getDocument() || CKEDITOR.document; a.className = "cke_combopanel"; a.block = { multiSelect: a.multiSelect, attributes: a.attributes }; a.toolbarRelated = !0; this._ = { panelDefinition: a, items: {}, listeners: [] }
                        }, proto: {
                            renderHtml: function (a) { var d = []; this.render(a, d); return d.join("") }, render: function (a, d) {
                                function f() {
                                    if (this.getState() != CKEDITOR.TRISTATE_ON) {
                                        var c =
                                            this.modes[a.mode] ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED; a.readOnly && !this.readOnly && (c = CKEDITOR.TRISTATE_DISABLED); this.setState(c); this.setValue(""); c != CKEDITOR.TRISTATE_DISABLED && this.refresh && this.refresh()
                                    }
                                } var h = CKEDITOR.env, m, c, k = "cke_" + this.id, g = CKEDITOR.tools.addFunction(function (d) { c && (a.unlockSelection(1), c = 0); m.execute(d) }, this), n = this; m = {
                                    id: k, combo: this, focus: function () { CKEDITOR.document.getById(k).getChild(1).focus() }, execute: function (c) {
                                        var d = n._; if (d.state != CKEDITOR.TRISTATE_DISABLED) if (n.createPanel(a),
                                            d.on) d.panel.hide(); else { n.commit(); var e = n.getValue(); e ? d.list.mark(e) : d.list.unmarkAll(); d.panel.showBlock(n.id, new CKEDITOR.dom.element(c), 4) }
                                    }, clickFn: g
                                }; this._.listeners.push(a.on("activeFilterChange", f, this)); this._.listeners.push(a.on("mode", f, this)); this._.listeners.push(a.on("selectionChange", f, this)); !this.readOnly && this._.listeners.push(a.on("readOnly", f, this)); var r = CKEDITOR.tools.addFunction(function (a, b) {
                                    a = new CKEDITOR.dom.event(a); var c = a.getKeystroke(); switch (c) {
                                        case 13: case 32: case 40: CKEDITOR.tools.callFunction(g,
                                            b); break; default: m.onkey(m, c)
                                    }a.preventDefault()
                                }), w = CKEDITOR.tools.addFunction(function () { m.onfocus && m.onfocus() }); c = 0; m.keyDownFn = r; h = { id: k, name: this.name || this.command, label: this.label, title: this.title, cls: this.className || "", titleJs: h.gecko && !h.hc ? "" : (this.title || "").replace("'", ""), keydownFn: r, focusFn: w, clickFn: g }; e.output(h, d); if (this.onRender) this.onRender(); return m
                            }, createPanel: function (a) {
                                if (!this._.panel) {
                                    var d = this._.panelDefinition, e = this._.panelDefinition.block, f = d.parent || CKEDITOR.document.getBody(),
                                    m = "cke_combopanel__" + this.name, c = new CKEDITOR.ui.floatPanel(a, f, d), d = c.addListBlock(this.id, e), k = this; c.onShow = function () { this.element.addClass(m); k.setState(CKEDITOR.TRISTATE_ON); k._.on = 1; k.editorFocus && !a.focusManager.hasFocus && a.focus(); if (k.onOpen) k.onOpen() }; c.onHide = function (c) { this.element.removeClass(m); k.setState(k.modes && k.modes[a.mode] ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED); k._.on = 0; if (!c && k.onClose) k.onClose() }; c.onEscape = function () { c.hide(1) }; d.onClick = function (a, b) {
                                        k.onClick &&
                                        k.onClick.call(k, a, b); c.hide()
                                    }; this._.panel = c; this._.list = d; c.getBlock(this.id).onHide = function () { k._.on = 0; k.setState(CKEDITOR.TRISTATE_OFF) }; this.init && this.init()
                                }
                            }, setValue: function (a, d) {
                                this._.value = a; var e = this.document.getById("cke_" + this.id + "_text"); e && (a || d ? e.removeClass("cke_combo_inlinelabel") : (d = this.label, e.addClass("cke_combo_inlinelabel")), e.setText("undefined" != typeof d ? d : a)); var e = "undefined" != typeof d ? d : a, f = this.label, e = e === f ? e : e + ", " + f; (f = this.document.getById("cke_" + this.id + "_label")) &&
                                    f.setText(e)
                            }, getValue: function () { return this._.value || "" }, unmarkAll: function () { this._.list.unmarkAll() }, mark: function (a) { this._.list.mark(a) }, hideItem: function (a) { this._.list.hideItem(a) }, hideGroup: function (a) { this._.list.hideGroup(a) }, showAll: function () { this._.list.showAll() }, add: function (a, d, e) { this._.items[a] = e || a; this._.list.add(a, d, e) }, startGroup: function (a) { this._.list.startGroup(a) }, commit: function () {
                                this._.committed || (this._.list.commit(), this._.committed = 1, CKEDITOR.ui.fire("ready", this));
                                this._.committed = 1
                            }, setState: function (a) { if (this._.state != a) { var d = this.document.getById("cke_" + this.id), e = d.getElementsByTag("a").getItem(0); d.setState(a, "cke_combo"); a == CKEDITOR.TRISTATE_DISABLED ? d.setAttribute("aria-disabled", !0) : d.removeAttribute("aria-disabled"); e && e.setAttribute("aria-expanded", a == CKEDITOR.TRISTATE_ON); this._.state = a } }, getState: function () { return this._.state }, enable: function () { this._.state == CKEDITOR.TRISTATE_DISABLED && this.setState(this._.lastState) }, disable: function () {
                                this._.state !=
                                CKEDITOR.TRISTATE_DISABLED && (this._.lastState = this._.state, this.setState(CKEDITOR.TRISTATE_DISABLED))
                            }, destroy: function () { CKEDITOR.tools.array.forEach(this._.listeners, function (a) { a.removeListener() }); this._.listeners = [] }, select: function (a) { if (!CKEDITOR.tools.isEmpty(this._.items)) for (var d in this._.items) if (a({ value: d, text: this._.items[d] })) { this.setValue(d); break } }
                        }, statics: { handler: { create: function (a) { return new CKEDITOR.ui.richCombo(a) } } }
                    }); CKEDITOR.ui.prototype.addRichCombo = function (a, d) {
                        this.add(a,
                            CKEDITOR.UI_RICHCOMBO, d)
                    }
        }(), CKEDITOR.plugins.add("format", {
            requires: "richcombo", init: function (a) {
                if (!a.blockless) {
                    for (var f = a.config, e = a.lang.format, b = f.format_tags.split(";"), d = {}, l = 0, h = [], m = 0; m < b.length; m++) { var c = b[m], k = new CKEDITOR.style(f["format_" + c]); if (!a.filter.customConfig || a.filter.check(k)) l++, d[c] = k, d[c]._.enterMode = a.config.enterMode, h.push(k) } 0 !== l && a.ui.addRichCombo("Format", {
                        label: e.label, title: e.panelTitle, toolbar: "styles,20", allowedContent: h, panel: {
                            css: [CKEDITOR.skin.getPath("editor")].concat(f.contentsCss),
                            multiSelect: !1, attributes: { "aria-label": e.panelTitle }
                        }, init: function () { this.startGroup(e.panelTitle); for (var a in d) { var b = e["tag_" + a]; this.add(a, d[a].buildPreview(b), b) } }, onClick: function (b) { a.focus(); a.fire("saveSnapshot"); b = d[b]; var c = a.elementPath(); a.fire("stylesRemove", { type: CKEDITOR.STYLE_BLOCK }); b.checkActive(c, a) || a.applyStyle(b); setTimeout(function () { a.fire("saveSnapshot") }, 0) }, onRender: function () {
                            a.on("selectionChange", function (b) {
                                var c = this.getValue(); b = b.data.path; this.refresh(); for (var e in d) if (d[e].checkActive(b,
                                    a)) { e != c && this.setValue(e, a.lang.format["tag_" + e]); return } this.setValue("")
                            }, this)
                        }, onOpen: function () { this.showAll(); for (var b in d) a.activeFilter.check(d[b]) || this.hideItem(b) }, refresh: function () { var b = a.elementPath(); if (b) { if (b.isContextFor("p")) for (var c in d) if (a.activeFilter.check(d[c])) return; this.setState(CKEDITOR.TRISTATE_DISABLED) } }
                    })
                }
            }
        }), CKEDITOR.config.format_tags = "p;h1;h2;h3;h4;h5;h6;pre;address;div", CKEDITOR.config.format_p = { element: "p" }, CKEDITOR.config.format_div = { element: "div" }, CKEDITOR.config.format_pre =
        { element: "pre" }, CKEDITOR.config.format_address = { element: "address" }, CKEDITOR.config.format_h1 = { element: "h1" }, CKEDITOR.config.format_h2 = { element: "h2" }, CKEDITOR.config.format_h3 = { element: "h3" }, CKEDITOR.config.format_h4 = { element: "h4" }, CKEDITOR.config.format_h5 = { element: "h5" }, CKEDITOR.config.format_h6 = { element: "h6" }, function () {
            var a = { canUndo: !1, exec: function (a) { var e = a.document.createElement("hr"); a.insertElement(e) }, allowedContent: "hr", requiredContent: "hr" }; CKEDITOR.plugins.add("horizontalrule", {
                init: function (f) {
                    f.blockless ||
                    (f.addCommand("horizontalrule", a), f.ui.addButton && f.ui.addButton("HorizontalRule", { label: f.lang.horizontalrule.toolbar, command: "horizontalrule", toolbar: "insert,40" }))
                }
            })
        }(), CKEDITOR.plugins.add("htmlwriter", { init: function (a) { var f = new CKEDITOR.htmlWriter; f.forceSimpleAmpersand = a.config.forceSimpleAmpersand; f.indentationChars = "string" === typeof a.config.dataIndentationChars ? a.config.dataIndentationChars : "\t"; a.dataProcessor.writer = f } }), CKEDITOR.htmlWriter = CKEDITOR.tools.createClass({
            base: CKEDITOR.htmlParser.basicWriter,
            $: function () {
                this.base(); this.indentationChars = "\t"; this.selfClosingEnd = " /\x3e"; this.lineBreakChars = "\n"; this.sortAttributes = 1; this._.indent = 0; this._.indentation = ""; this._.inPre = 0; this._.rules = {}; var a = CKEDITOR.dtd, f; for (f in CKEDITOR.tools.extend({}, a.$nonBodyContent, a.$block, a.$listItem, a.$tableContent)) this.setRules(f, { indent: !a[f]["#"], breakBeforeOpen: 1, breakBeforeClose: !a[f]["#"], breakAfterClose: 1, needsSpace: f in a.$block && !(f in { li: 1, dt: 1, dd: 1 }) }); this.setRules("br", { breakAfterOpen: 1 }); this.setRules("title",
                    { indent: 0, breakAfterOpen: 0 }); this.setRules("style", { indent: 0, breakBeforeClose: 1 }); this.setRules("pre", { breakAfterOpen: 1, indent: 0 })
            }, proto: {
                openTag: function (a) { var f = this._.rules[a]; this._.afterCloser && f && f.needsSpace && this._.needsSpace && this._.output.push("\n"); this._.indent ? this.indentation() : f && f.breakBeforeOpen && (this.lineBreak(), this.indentation()); this._.output.push("\x3c", a); this._.afterCloser = 0 }, openTagClose: function (a, f) {
                    var e = this._.rules[a]; f ? (this._.output.push(this.selfClosingEnd), e &&
                        e.breakAfterClose && (this._.needsSpace = e.needsSpace)) : (this._.output.push("\x3e"), e && e.indent && (this._.indentation += this.indentationChars)); e && e.breakAfterOpen && this.lineBreak(); "pre" == a && (this._.inPre = 1)
                }, attribute: function (a, f) { "string" == typeof f && (f = CKEDITOR.tools.htmlEncodeAttr(f), this.forceSimpleAmpersand && (f = f.replace(/&amp;/g, "\x26"))); this._.output.push(" ", a, '\x3d"', f, '"') }, closeTag: function (a) {
                    var f = this._.rules[a]; f && f.indent && (this._.indentation = this._.indentation.substr(this.indentationChars.length));
                    this._.indent ? this.indentation() : f && f.breakBeforeClose && (this.lineBreak(), this.indentation()); this._.output.push("\x3c/", a, "\x3e"); "pre" == a && (this._.inPre = 0); f && f.breakAfterClose && (this.lineBreak(), this._.needsSpace = f.needsSpace); this._.afterCloser = 1
                }, text: function (a) { this._.indent && (this.indentation(), !this._.inPre && (a = CKEDITOR.tools.ltrim(a))); this._.output.push(a) }, comment: function (a) { this._.indent && this.indentation(); this._.output.push("\x3c!--", a, "--\x3e") }, lineBreak: function () {
                    !this._.inPre &&
                    0 < this._.output.length && this._.output.push(this.lineBreakChars); this._.indent = 1
                }, indentation: function () { !this._.inPre && this._.indentation && this._.output.push(this._.indentation); this._.indent = 0 }, reset: function () { this._.output = []; this._.indent = 0; this._.indentation = ""; this._.afterCloser = 0; this._.inPre = 0; this._.needsSpace = 0 }, setRules: function (a, f) { var e = this._.rules[a]; e ? CKEDITOR.tools.extend(e, f, !0) : this._.rules[a] = f }
            }
        }), function () {
            function a(a, b) {
                b || (b = a.getSelection().getSelectedElement()); if (b &&
                    b.is("img") && !b.data("cke-realelement") && !b.isReadOnly()) return b
            } function f(a) { var b = a.getStyle("float"); if ("inherit" == b || "none" == b) b = 0; b || (b = a.getAttribute("align")); return b } CKEDITOR.plugins.add("image", {
                requires: "dialog", init: function (e) {
                    if (!e.plugins.detectConflict("image", ["easyimage", "image2"])) {
                        CKEDITOR.dialog.add("image", this.path + "dialogs/image.js"); var b = "img[alt,!src]{border-style,border-width,float,height,margin,margin-bottom,margin-left,margin-right,margin-top,width}"; CKEDITOR.dialog.isTabEnabled(e,
                            "image", "advanced") && (b = "img[alt,dir,id,lang,longdesc,!src,title]{*}(*)"); e.addCommand("image", new CKEDITOR.dialogCommand("image", { allowedContent: b, requiredContent: "img[alt,src]", contentTransformations: [["img{width}: sizeToStyle", "img[width]: sizeToAttribute"], ["img{float}: alignmentToStyle", "img[align]: alignmentToAttribute"]] })); e.ui.addButton && e.ui.addButton("Image", { label: e.lang.common.image, command: "image", toolbar: "insert,10" }); e.on("doubleclick", function (a) {
                                var b = a.data.element; !b.is("img") ||
                                    b.data("cke-realelement") || b.isReadOnly() || (a.data.dialog = "image")
                            }); e.addMenuItems && e.addMenuItems({ image: { label: e.lang.image.menu, command: "image", group: "image" } }); e.contextMenu && e.contextMenu.addListener(function (b) { if (a(e, b)) return { image: CKEDITOR.TRISTATE_OFF } })
                    }
                }, afterInit: function (e) {
                    function b(b) {
                        var l = e.getCommand("justify" + b); if (l) {
                            if ("left" == b || "right" == b) l.on("exec", function (h) {
                                var l = a(e), c; l && (c = f(l), c == b ? (l.removeStyle("float"), b == f(l) && l.removeAttribute("align")) : l.setStyle("float", b),
                                    h.cancel())
                            }); l.on("refresh", function (h) { var l = a(e); l && (l = f(l), this.setState(l == b ? CKEDITOR.TRISTATE_ON : "right" == b || "left" == b ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED), h.cancel()) })
                        }
                    } e.plugins.image2 || (b("left"), b("right"), b("center"), b("block"))
                }
            })
        }(), CKEDITOR.config.image_removeLinkByEmptyURL = !0, function () {
            function a(a, d) { var e = b.exec(a), c = b.exec(d); if (e) { if (!e[2] && "px" == c[2]) return c[1]; if ("px" == e[2] && !c[2]) return c[1] + "px" } return d } var f = CKEDITOR.htmlParser.cssStyle, e = CKEDITOR.tools.cssLength,
                b = /^((?:\d*(?:\.\d+))|(?:\d+))(.*)?$/i, d = { elements: { $: function (b) { var d = b.attributes; if ((d = (d = (d = d && d["data-cke-realelement"]) && new CKEDITOR.htmlParser.fragment.fromHtml(decodeURIComponent(d))) && d.children[0]) && b.attributes["data-cke-resizable"]) { var e = (new f(b)).rules; b = d.attributes; var c = e.width, e = e.height; c && (b.width = a(b.width, c)); e && (b.height = a(b.height, e)) } return d } } }; CKEDITOR.plugins.add("fakeobjects", {
                    init: function (a) { a.filter.allow("img[!data-cke-realelement,src,alt,title](*){*}", "fakeobjects") },
                    afterInit: function (a) { (a = (a = a.dataProcessor) && a.htmlFilter) && a.addRules(d, { applyToAll: !0 }) }
                }); CKEDITOR.editor.prototype.createFakeElement = function (a, b, d, c) {
                    var k = this.lang.fakeobjects, k = k[d] || k.unknown; b = { "class": b, "data-cke-realelement": encodeURIComponent(a.getOuterHtml()), "data-cke-real-node-type": a.type, alt: k, title: k, align: a.getAttribute("align") || "" }; CKEDITOR.env.hc || (b.src = CKEDITOR.tools.transparentImageData); d && (b["data-cke-real-element-type"] = d); c && (b["data-cke-resizable"] = c, d = new f, c = a.getAttribute("width"),
                        a = a.getAttribute("height"), c && (d.rules.width = e(c)), a && (d.rules.height = e(a)), d.populate(b)); return this.document.createElement("img", { attributes: b })
                }; CKEDITOR.editor.prototype.createFakeParserElement = function (a, b, d, c) {
                    var k = this.lang.fakeobjects, k = k[d] || k.unknown, g; g = new CKEDITOR.htmlParser.basicWriter; a.writeHtml(g); g = g.getHtml(); b = { "class": b, "data-cke-realelement": encodeURIComponent(g), "data-cke-real-node-type": a.type, alt: k, title: k, align: a.attributes.align || "" }; CKEDITOR.env.hc || (b.src = CKEDITOR.tools.transparentImageData);
                    d && (b["data-cke-real-element-type"] = d); c && (b["data-cke-resizable"] = c, c = a.attributes, a = new f, d = c.width, c = c.height, void 0 !== d && (a.rules.width = e(d)), void 0 !== c && (a.rules.height = e(c)), a.populate(b)); return new CKEDITOR.htmlParser.element("img", b)
                }; CKEDITOR.editor.prototype.restoreRealElement = function (b) {
                    if (b.data("cke-real-node-type") != CKEDITOR.NODE_ELEMENT) return null; var d = CKEDITOR.dom.element.createFromHtml(decodeURIComponent(b.data("cke-realelement")), this.document); if (b.data("cke-resizable")) {
                        var e =
                            b.getStyle("width"); b = b.getStyle("height"); e && d.setAttribute("width", a(d.getAttribute("width"), e)); b && d.setAttribute("height", a(d.getAttribute("height"), b))
                    } return d
                }
        }(), "use strict", function () {
            function a(a) { return a.replace(/'/g, "\\$\x26") } function f(a) { for (var b = a.length, c = [], d, e = 0; e < b; e++)d = a.charCodeAt(e), c.push(d); return "String.fromCharCode(" + c.join(",") + ")" } function e(b, c) {
                for (var d = b.plugins.link, e = d.compiledProtectionFunction.params, d = [d.compiledProtectionFunction.name, "("], f, g, h = 0; h < e.length; h++)f =
                    e[h].toLowerCase(), g = c[f], 0 < h && d.push(","), d.push("'", g ? a(encodeURIComponent(c[f])) : "", "'"); d.push(")"); return d.join("")
            } function b(a) { a = a.config.emailProtection || ""; var b; a && "encode" != a && (b = {}, a.replace(/^([^(]+)\(([^)]+)\)$/, function (a, c, d) { b.name = c; b.params = []; d.replace(/[^,\s]+/g, function (a) { b.params.push(a) }) })); return b } CKEDITOR.plugins.add("link", {
                requires: "dialog,fakeobjects", onLoad: function () {
                    function a(b) { return c.replace(/%1/g, "rtl" == b ? "right" : "left").replace(/%2/g, "cke_contents_" + b) }
                    var b = "background:url(" + CKEDITOR.getUrl(this.path + "images" + (CKEDITOR.env.hidpi ? "/hidpi" : "") + "/anchor.png") + ") no-repeat %1 center;border:1px dotted #00f;background-size:16px;", c = ".%2 a.cke_anchor,.%2 a.cke_anchor_empty,.cke_editable.%2 a[name],.cke_editable.%2 a[data-cke-saved-name]{" + b + "padding-%1:18px;cursor:auto;}.%2 img.cke_anchor{" + b + "width:16px;min-height:15px;height:1.15em;vertical-align:text-bottom;}"; CKEDITOR.addCss(a("ltr") + a("rtl"))
                }, init: function (a) {
                    var c = "a[!href]"; CKEDITOR.dialog.isTabEnabled(a,
                        "link", "advanced") && (c = c.replace("]", ",accesskey,charset,dir,id,lang,name,rel,tabindex,title,type,download]{*}(*)")); CKEDITOR.dialog.isTabEnabled(a, "link", "target") && (c = c.replace("]", ",target,onclick]")); a.addCommand("link", new CKEDITOR.dialogCommand("link", { allowedContent: c, requiredContent: "a[href]" })); a.addCommand("anchor", new CKEDITOR.dialogCommand("anchor", { allowedContent: "a[!name,id]", requiredContent: "a[name]" })); a.addCommand("unlink", new CKEDITOR.unlinkCommand); a.addCommand("removeAnchor", new CKEDITOR.removeAnchorCommand);
                    a.setKeystroke(CKEDITOR.CTRL + 76, "link"); a.setKeystroke(CKEDITOR.CTRL + 75, "link"); a.ui.addButton && (a.ui.addButton("Link", { label: a.lang.link.toolbar, command: "link", toolbar: "links,10" }), a.ui.addButton("Unlink", { label: a.lang.link.unlink, command: "unlink", toolbar: "links,20" }), a.ui.addButton("Anchor", { label: a.lang.link.anchor.toolbar, command: "anchor", toolbar: "links,30" })); CKEDITOR.dialog.add("link", this.path + "dialogs/link.js"); CKEDITOR.dialog.add("anchor", this.path + "dialogs/anchor.js"); a.on("doubleclick",
                        function (b) { var c = b.data.element.getAscendant({ a: 1, img: 1 }, !0); c && !c.isReadOnly() && (c.is("a") ? (b.data.dialog = !c.getAttribute("name") || c.getAttribute("href") && c.getChildCount() ? "link" : "anchor", b.data.link = c) : CKEDITOR.plugins.link.tryRestoreFakeAnchor(a, c) && (b.data.dialog = "anchor")) }, null, null, 0); a.on("doubleclick", function (b) { b.data.dialog in { link: 1, anchor: 1 } && b.data.link && a.getSelection().selectElement(b.data.link) }, null, null, 20); a.addMenuItems && a.addMenuItems({
                            anchor: {
                                label: a.lang.link.anchor.menu,
                                command: "anchor", group: "anchor", order: 1
                            }, removeAnchor: { label: a.lang.link.anchor.remove, command: "removeAnchor", group: "anchor", order: 5 }, link: { label: a.lang.link.menu, command: "link", group: "link", order: 1 }, unlink: { label: a.lang.link.unlink, command: "unlink", group: "link", order: 5 }
                        }); a.contextMenu && a.contextMenu.addListener(function (b) {
                            if (!b || b.isReadOnly()) return null; b = CKEDITOR.plugins.link.tryRestoreFakeAnchor(a, b); if (!b && !(b = CKEDITOR.plugins.link.getSelectedLink(a))) return null; var c = {}; b.getAttribute("href") &&
                                b.getChildCount() && (c = { link: CKEDITOR.TRISTATE_OFF, unlink: CKEDITOR.TRISTATE_OFF }); b && b.hasAttribute("name") && (c.anchor = c.removeAnchor = CKEDITOR.TRISTATE_OFF); return c
                        }); this.compiledProtectionFunction = b(a)
                }, afterInit: function (a) {
                    a.dataProcessor.dataFilter.addRules({ elements: { a: function (b) { return b.attributes.name ? b.children.length ? null : a.createFakeParserElement(b, "cke_anchor", "anchor") : null } } }); var b = a._.elementsPath && a._.elementsPath.filters; b && b.push(function (b, c) {
                        if ("a" == c && (CKEDITOR.plugins.link.tryRestoreFakeAnchor(a,
                            b) || b.getAttribute("name") && (!b.getAttribute("href") || !b.getChildCount()))) return "anchor"
                    })
                }
            }); var d = /^javascript:/, l = /^(?:mailto)(?:(?!\?(subject|body)=).)+/i, h = /subject=([^;?:@&=$,\/]*)/i, m = /body=([^;?:@&=$,\/]*)/i, c = /^#(.*)$/, k = /^((?:http|https|ftp|news):\/\/)?(.*)$/, g = /^(_(?:self|top|parent|blank))$/, n = /^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/, r = /^javascript:([^(]+)\(([^)]+)\)$/, w = /\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/,
                p = /(?:^|,)([^=]+)=(\d+|yes|no)/gi, t = /^tel:(.*)$/, u = { id: "advId", dir: "advLangDir", accessKey: "advAccessKey", name: "advName", lang: "advLangCode", tabindex: "advTabIndex", title: "advTitle", type: "advContentType", "class": "advCSSClasses", charset: "advCharset", style: "advStyles", rel: "advRel" }; CKEDITOR.plugins.link = {
                    getSelectedLink: function (a, b) {
                        var c = a.getSelection(), d = c.getSelectedElement(), e = c.getRanges(), f = [], g; if (!b && d && d.is("a")) return d; for (d = 0; d < e.length; d++)if (g = c.getRanges()[d], g.shrink(CKEDITOR.SHRINK_ELEMENT,
                            !0, { skipBogus: !0 }), (g = a.elementPath(g.getCommonAncestor()).contains("a", 1)) && b) f.push(g); else if (g) return g; return b ? f : null
                    }, getEditorAnchors: function (a) {
                        for (var b = a.editable(), c = b.isInline() && !a.plugins.divarea ? a.document : b, b = c.getElementsByTag("a"), c = c.getElementsByTag("img"), d = [], e = 0, f; f = b.getItem(e++);)(f.data("cke-saved-name") || f.hasAttribute("name")) && d.push({ name: f.data("cke-saved-name") || f.getAttribute("name"), id: f.getAttribute("id") }); for (e = 0; f = c.getItem(e++);)(f = this.tryRestoreFakeAnchor(a,
                            f)) && d.push({ name: f.getAttribute("name"), id: f.getAttribute("id") }); return d
                    }, fakeAnchor: !0, tryRestoreFakeAnchor: function (a, b) { if (b && b.data("cke-real-element-type") && "anchor" == b.data("cke-real-element-type")) { var c = a.restoreRealElement(b); if (c.data("cke-saved-name")) return c } }, parseLinkAttributes: function (a, b) {
                        var e = b && (b.data("cke-saved-href") || b.getAttribute("href")) || "", f = a.plugins.link.compiledProtectionFunction, z = a.config.emailProtection, x = {}, D; e.match(d) && ("encode" == z ? e = e.replace(n, function (a,
                            b, c) { c = c || ""; return "mailto:" + String.fromCharCode.apply(String, b.split(",")) + c.replace(/\\'/g, "'") }) : z && e.replace(r, function (a, b, c) { if (b == f.name) { x.type = "email"; a = x.email = {}; b = /(^')|('$)/g; c = c.match(/[^,\s]+/g); for (var d = c.length, e, g, h = 0; h < d; h++)e = decodeURIComponent, g = c[h].replace(b, "").replace(/\\'/g, "'"), g = e(g), e = f.params[h].toLowerCase(), a[e] = g; a.address = [a.name, a.domain].join("@") } })); if (!x.type) if (z = e.match(c)) x.type = "anchor", x.anchor = {}, x.anchor.name = x.anchor.id = z[1]; else if (z = e.match(t)) x.type =
                                "tel", x.tel = z[1]; else if (z = e.match(l)) { D = e.match(h); var e = e.match(m), B = x.email = {}; x.type = "email"; B.address = z[0].replace("mailto:", ""); D && (B.subject = decodeURIComponent(D[1])); e && (B.body = decodeURIComponent(e[1])) } else e && (D = e.match(k)) && (x.type = "url", x.url = {}, x.url.protocol = D[1], x.url.url = D[2]); if (b) {
                                    if (e = b.getAttribute("target")) x.target = { type: e.match(g) ? e : "frame", name: e }; else if (e = (e = b.data("cke-pa-onclick") || b.getAttribute("onclick")) && e.match(w)) for (x.target = { type: "popup", name: e[1] }; z = p.exec(e[2]);)"yes" !=
                                        z[2] && "1" != z[2] || z[1] in { height: 1, width: 1, top: 1, left: 1 } ? isFinite(z[2]) && (x.target[z[1]] = z[2]) : x.target[z[1]] = !0; null !== b.getAttribute("download") && (x.download = !0); var e = {}, F; for (F in u) (z = b.getAttribute(F)) && (e[u[F]] = z); if (F = b.data("cke-saved-name") || e.advName) e.advName = F; CKEDITOR.tools.isEmpty(e) || (x.advanced = e)
                                } return x
                    }, getLinkAttributes: function (b, c) {
                        var d = b.config.emailProtection || "", g = {}; switch (c.type) {
                            case "url": var d = c.url && void 0 !== c.url.protocol ? c.url.protocol : "http://", h = c.url && CKEDITOR.tools.trim(c.url.url) ||
                                ""; g["data-cke-saved-href"] = 0 === h.indexOf("/") ? h : d + h; break; case "anchor": d = c.anchor && c.anchor.id; g["data-cke-saved-href"] = "#" + (c.anchor && c.anchor.name || d || ""); break; case "email": var k = c.email, h = k.address; switch (d) {
                                    case "": case "encode": var l = encodeURIComponent(k.subject || ""), m = encodeURIComponent(k.body || ""), k = []; l && k.push("subject\x3d" + l); m && k.push("body\x3d" + m); k = k.length ? "?" + k.join("\x26") : ""; "encode" == d ? (d = ["javascript:void(location.href\x3d'mailto:'+", f(h)], k && d.push("+'", a(k), "'"), d.push(")")) :
                                        d = ["mailto:", h, k]; break; default: d = h.split("@", 2), k.name = d[0], k.domain = d[1], d = ["javascript:", e(b, k)]
                                }g["data-cke-saved-href"] = d.join(""); break; case "tel": g["data-cke-saved-href"] = "tel:" + c.tel
                        }if (c.target) if ("popup" == c.target.type) {
                            for (var d = ["window.open(this.href, '", c.target.name || "", "', '"], n = "resizable status location toolbar menubar fullscreen scrollbars dependent".split(" "), h = n.length, l = function (a) { c.target[a] && n.push(a + "\x3d" + c.target[a]) }, k = 0; k < h; k++)n[k] += c.target[n[k]] ? "\x3dyes" : "\x3dno";
                            l("width"); l("left"); l("height"); l("top"); d.push(n.join(","), "'); return false;"); g["data-cke-pa-onclick"] = d.join("")
                        } else "notSet" != c.target.type && c.target.name && (g.target = c.target.name); c.download && (g.download = ""); if (c.advanced) { for (var t in u) (d = c.advanced[u[t]]) && (g[t] = d); g.name && (g["data-cke-saved-name"] = g.name) } g["data-cke-saved-href"] && (g.href = g["data-cke-saved-href"]); t = { target: 1, onclick: 1, "data-cke-pa-onclick": 1, "data-cke-saved-name": 1, download: 1 }; c.advanced && CKEDITOR.tools.extend(t, u); for (var r in g) delete t[r];
                        return { set: g, removed: CKEDITOR.tools.object.keys(t) }
                    }, showDisplayTextForElement: function (a, b) { var c = { img: 1, table: 1, tbody: 1, thead: 1, tfoot: 1, input: 1, select: 1, textarea: 1 }, d = b.getSelection(); return b.widgets && b.widgets.focused || d && 1 < d.getRanges().length ? !1 : !a || !a.getName || !a.is(c) }
                }; CKEDITOR.unlinkCommand = function () { }; CKEDITOR.unlinkCommand.prototype = {
                    exec: function (a) {
                        if (CKEDITOR.env.ie) {
                            var b = a.getSelection().getRanges()[0], c = b.getPreviousEditableNode() && b.getPreviousEditableNode().getAscendant("a", !0) ||
                                b.getNextEditableNode() && b.getNextEditableNode().getAscendant("a", !0), d; b.collapsed && c && (d = b.createBookmark(), b.selectNodeContents(c), b.select())
                        } c = new CKEDITOR.style({ element: "a", type: CKEDITOR.STYLE_INLINE, alwaysRemoveElement: 1 }); a.removeStyle(c); d && (b.moveToBookmark(d), b.select())
                    }, refresh: function (a, b) { var c = b.lastElement && b.lastElement.getAscendant("a", !0); c && "a" == c.getName() && c.getAttribute("href") && c.getChildCount() ? this.setState(CKEDITOR.TRISTATE_OFF) : this.setState(CKEDITOR.TRISTATE_DISABLED) },
                    contextSensitive: 1, startDisabled: 1, requiredContent: "a[href]", editorFocus: 1
                }; CKEDITOR.removeAnchorCommand = function () { }; CKEDITOR.removeAnchorCommand.prototype = {
                    exec: function (a) {
                        var b = a.getSelection(), c = b.createBookmarks(), d; if (b && (d = b.getSelectedElement()) && (d.getChildCount() ? d.is("a") : CKEDITOR.plugins.link.tryRestoreFakeAnchor(a, d))) d.remove(1); else if (d = CKEDITOR.plugins.link.getSelectedLink(a)) d.hasAttribute("href") ? (d.removeAttributes({ name: 1, "data-cke-saved-name": 1 }), d.removeClass("cke_anchor")) :
                            d.remove(1); b.selectBookmarks(c)
                    }, requiredContent: "a[name]"
                }; CKEDITOR.tools.extend(CKEDITOR.config, { linkShowAdvancedTab: !0, linkShowTargetTab: !0, linkDefaultProtocol: "http://" })
        }(), "use strict", function () {
            function a(a, b, c) { return n(b) && n(c) && c.equals(b.getNext(function (a) { return !(S(a) || T(a) || r(a)) })) } function f(a) { this.upper = a[0]; this.lower = a[1]; this.set.apply(this, a.slice(2)) } function e(a) {
                var b = a.element; if (b && n(b) && (b = b.getAscendant(a.triggers, !0)) && a.editable.contains(b)) {
                    var c = h(b); if ("true" ==
                        c.getAttribute("contenteditable")) return b; if (c.is(a.triggers)) return c
                } return null
            } function b(a, b, c) { v(a, b); v(a, c); a = b.size.bottom; c = c.size.top; return a && c ? 0 | (a + c) / 2 : a || c } function d(a, b, c) { return b = b[c ? "getPrevious" : "getNext"](function (b) { return b && b.type == CKEDITOR.NODE_TEXT && !S(b) || n(b) && !r(b) && !g(a, b) }) } function l(a, b, c) { return a > b && a < c } function h(a, b) { if (a.data("cke-editable")) return null; for (b || (a = a.getParent()); a && !a.data("cke-editable");) { if (a.hasAttribute("contenteditable")) return a; a = a.getParent() } return null }
            function m(a) {
                var b = a.doc, d = E('\x3cspan contenteditable\x3d"false" data-cke-magic-line\x3d"1" style\x3d"' + aa + "position:absolute;border-top:1px dashed " + a.boxColor + '"\x3e\x3c/span\x3e', b), e = CKEDITOR.getUrl(this.path + "images/" + (L.hidpi ? "hidpi/" : "") + "icon" + (a.rtl ? "-rtl" : "") + ".png"); B(d, {
                    attach: function () { this.wrap.getParent() || this.wrap.appendTo(a.editable, !0); return this }, lineChildren: [B(E('\x3cspan title\x3d"' + a.editor.lang.magicline.title + '" contenteditable\x3d"false"\x3e\x26#8629;\x3c/span\x3e',
                        b), { base: aa + "height:17px;width:17px;" + (a.rtl ? "left" : "right") + ":17px;background:url(" + e + ") center no-repeat " + a.boxColor + ";cursor:pointer;" + (L.hc ? "font-size: 15px;line-height:14px;border:1px solid #fff;text-align:center;" : "") + (L.hidpi ? "background-size: 9px 10px;" : ""), looks: ["top:-8px; border-radius: 2px;", "top:-17px; border-radius: 2px 2px 0px 0px;", "top:-1px; border-radius: 0px 0px 2px 2px;"] }), B(E(ca, b), {
                            base: ba + "left:0px;border-left-color:" + a.boxColor + ";", looks: ["border-width:8px 0 8px 8px;top:-8px",
                                "border-width:8px 0 0 8px;top:-8px", "border-width:0 0 8px 8px;top:0px"]
                        }), B(E(ca, b), { base: ba + "right:0px;border-right-color:" + a.boxColor + ";", looks: ["border-width:8px 8px 8px 0;top:-8px", "border-width:8px 8px 0 0;top:-8px", "border-width:0 8px 8px 0;top:0px"] })], detach: function () { this.wrap.getParent() && this.wrap.remove(); return this }, mouseNear: function () { v(a, this); var b = a.holdDistance, c = this.size; return c && l(a.mouse.y, c.top - b, c.bottom + b) && l(a.mouse.x, c.left - b, c.right + b) ? !0 : !1 }, place: function () {
                            var b =
                                a.view, c = a.editable, d = a.trigger, e = d.upper, f = d.lower, g = e || f, h = g.getParent(), k = {}; this.trigger = d; e && v(a, e, !0); f && v(a, f, !0); v(a, h, !0); a.inInlineMode && z(a, !0); h.equals(c) ? (k.left = b.scroll.x, k.right = -b.scroll.x, k.width = "") : (k.left = g.size.left - g.size.margin.left + b.scroll.x - (a.inInlineMode ? b.editable.left + b.editable.border.left : 0), k.width = g.size.outerWidth + g.size.margin.left + g.size.margin.right + b.scroll.x, k.right = ""); e && f ? k.top = e.size.margin.bottom === f.size.margin.top ? 0 | e.size.bottom + e.size.margin.bottom /
                                    2 : e.size.margin.bottom < f.size.margin.top ? e.size.bottom + e.size.margin.bottom : e.size.bottom + e.size.margin.bottom - f.size.margin.top : e ? f || (k.top = e.size.bottom + e.size.margin.bottom) : k.top = f.size.top - f.size.margin.top; d.is(I) || l(k.top, b.scroll.y - 15, b.scroll.y + 5) ? (k.top = a.inInlineMode ? 0 : b.scroll.y, this.look(I)) : d.is(P) || l(k.top, b.pane.bottom - 5, b.pane.bottom + 15) ? (k.top = a.inInlineMode ? b.editable.height + b.editable.padding.top + b.editable.padding.bottom : b.pane.bottom - 1, this.look(P)) : (a.inInlineMode && (k.top -=
                                        b.editable.top + b.editable.border.top), this.look(X)); a.inInlineMode && (k.top--, k.top += b.editable.scroll.top, k.left += b.editable.scroll.left); for (var m in k) k[m] = CKEDITOR.tools.cssLength(k[m]); this.setStyles(k)
                        }, look: function (a) { if (this.oldLook != a) { for (var b = this.lineChildren.length, c; b--;)(c = this.lineChildren[b]).setAttribute("style", c.base + c.looks[0 | a / 2]); this.oldLook = a } }, wrap: new F("span", a.doc)
                }); for (b = d.lineChildren.length; b--;)d.lineChildren[b].appendTo(d); d.look(X); d.appendTo(d.wrap); d.unselectable();
                d.lineChildren[0].on("mouseup", function (b) { d.detach(); c(a, function (b) { var c = a.line.trigger; b[c.is(J) ? "insertBefore" : "insertAfter"](c.is(J) ? c.lower : c.upper) }, !0); a.editor.focus(); L.ie || a.enterMode == CKEDITOR.ENTER_BR || a.hotNode.scrollIntoView(); b.data.preventDefault(!0) }); d.on("mousedown", function (a) { a.data.preventDefault(!0) }); a.line = d
            } function c(a, b, c) {
                var d = new CKEDITOR.dom.range(a.doc), e = a.editor, f; L.ie && a.enterMode == CKEDITOR.ENTER_BR ? f = a.doc.createText(U) : (f = (f = h(a.element, !0)) && f.data("cke-enter-mode") ||
                    a.enterMode, f = new F(O[f], a.doc), f.is("br") || a.doc.createText(U).appendTo(f)); c && e.fire("saveSnapshot"); b(f); d.moveToPosition(f, CKEDITOR.POSITION_AFTER_START); e.getSelection().selectRanges([d]); a.hotNode = f; c && e.fire("saveSnapshot")
            } function k(a, b) {
                return {
                    canUndo: !0, modes: { wysiwyg: 1 }, exec: function () {
                        function f(d) {
                            var e = L.ie && 9 > L.version ? " " : U, g = a.hotNode && a.hotNode.getText() == e && a.element.equals(a.hotNode) && a.lastCmdDirection === !!b; c(a, function (c) {
                                g && a.hotNode && a.hotNode.remove(); c[b ? "insertAfter" :
                                    "insertBefore"](d); c.setAttributes({ "data-cke-magicline-hot": 1, "data-cke-magicline-dir": !!b }); a.lastCmdDirection = !!b
                            }); L.ie || a.enterMode == CKEDITOR.ENTER_BR || a.hotNode.scrollIntoView(); a.line.detach()
                        } return function (c) {
                            c = c.getSelection().getStartElement(); var g; c = c.getAscendant(V, 1); if (!t(a, c) && c && !c.equals(a.editable) && !c.contains(a.editable)) {
                                (g = h(c)) && "false" == g.getAttribute("contenteditable") && (c = g); a.element = c; g = d(a, c, !b); var k; n(g) && g.is(a.triggers) && g.is(K) && (!d(a, g, !b) || (k = d(a, g, !b)) && n(k) &&
                                    k.is(a.triggers)) ? f(g) : (k = e(a, c), n(k) && (d(a, k, !b) ? (c = d(a, k, !b)) && n(c) && c.is(a.triggers) && f(k) : f(k)))
                            }
                        }
                    }()
                }
            } function g(a, b) { if (!b || b.type != CKEDITOR.NODE_ELEMENT || !b.$) return !1; var c = a.line; return c.wrap.equals(b) || c.wrap.contains(b) } function n(a) { return a && a.type == CKEDITOR.NODE_ELEMENT && a.$ } function r(a) { if (!n(a)) return !1; var b; (b = w(a)) || (n(a) ? (b = { left: 1, right: 1, center: 1 }, b = !(!b[a.getComputedStyle("float")] && !b[a.getAttribute("align")])) : b = !1); return b } function w(a) { return !!{ absolute: 1, fixed: 1 }[a.getComputedStyle("position")] }
            function p(a, b) { return n(b) ? b.is(a.triggers) : null } function t(a, b) { if (!b) return !1; for (var c = b.getParents(1), d = c.length; d--;)for (var e = a.tabuList.length; e--;)if (c[d].hasAttribute(a.tabuList[e])) return !0; return !1 } function u(a, b, c) { b = b[c ? "getLast" : "getFirst"](function (b) { return a.isRelevant(b) && !b.is(ha) }); if (!b) return !1; v(a, b); return c ? b.size.top > a.mouse.y : b.size.bottom < a.mouse.y } function y(a) {
                var b = a.editable, c = a.mouse, d = a.view, e = a.triggerOffset; z(a); var k = c.y > (a.inInlineMode ? d.editable.top + d.editable.height /
                    2 : Math.min(d.editable.height, d.pane.height) / 2), b = b[k ? "getLast" : "getFirst"](function (a) { return !(S(a) || T(a)) }); if (!b) return null; g(a, b) && (b = a.line.wrap[k ? "getPrevious" : "getNext"](function (a) { return !(S(a) || T(a)) })); if (!n(b) || r(b) || !p(a, b)) return null; v(a, b); return !k && 0 <= b.size.top && l(c.y, 0, b.size.top + e) ? (a = a.inInlineMode || 0 === d.scroll.y ? I : X, new f([null, b, J, H, a])) : k && b.size.bottom <= d.pane.height && l(c.y, b.size.bottom - e, d.pane.height) ? (a = a.inInlineMode || l(b.size.bottom, d.pane.height - e, d.pane.height) ? P :
                        X, new f([b, null, N, H, a])) : null
            } function q(a) {
                var b = a.mouse, c = a.view, g = a.triggerOffset, k = e(a); if (!k) return null; v(a, k); var g = Math.min(g, 0 | k.size.outerHeight / 2), h = [], m, G; if (l(b.y, k.size.top - 1, k.size.top + g)) G = !1; else if (l(b.y, k.size.bottom - g, k.size.bottom + 1)) G = !0; else return null; if (r(k) || u(a, k, G) || k.getParent().is(Y)) return null; var x = d(a, k, !G); if (x) { if (x && x.type == CKEDITOR.NODE_TEXT) return null; if (n(x)) { if (r(x) || !p(a, x) || x.getParent().is(Y)) return null; h = [x, k][G ? "reverse" : "concat"]().concat([R, H]) } } else k.equals(a.editable[G ?
                    "getLast" : "getFirst"](a.isRelevant)) ? (z(a), G && l(b.y, k.size.bottom - g, c.pane.height) && l(k.size.bottom, c.pane.height - g, c.pane.height) ? m = P : l(b.y, 0, k.size.top + g) && (m = I)) : m = X, h = [null, k][G ? "reverse" : "concat"]().concat([G ? N : J, H, m, k.equals(a.editable[G ? "getLast" : "getFirst"](a.isRelevant)) ? G ? P : I : X]); return 0 in h ? new f(h) : null
            } function A(a, b, c, d) {
                for (var e = b.getDocumentPosition(), f = {}, g = {}, k = {}, h = {}, l = G.length; l--;)f[G[l]] = parseInt(b.getComputedStyle.call(b, "border-" + G[l] + "-width"), 10) || 0, k[G[l]] = parseInt(b.getComputedStyle.call(b,
                    "padding-" + G[l]), 10) || 0, g[G[l]] = parseInt(b.getComputedStyle.call(b, "margin-" + G[l]), 10) || 0; c && !d || x(a, d); h.top = e.y - (c ? 0 : a.view.scroll.y); h.left = e.x - (c ? 0 : a.view.scroll.x); h.outerWidth = b.$.offsetWidth; h.outerHeight = b.$.offsetHeight; h.height = h.outerHeight - (k.top + k.bottom + f.top + f.bottom); h.width = h.outerWidth - (k.left + k.right + f.left + f.right); h.bottom = h.top + h.outerHeight; h.right = h.left + h.outerWidth; a.inInlineMode && (h.scroll = { top: b.$.scrollTop, left: b.$.scrollLeft }); return B({ border: f, padding: k, margin: g, ignoreScroll: c },
                        h, !0)
            } function v(a, b, c) { if (!n(b)) return b.size = null; if (!b.size) b.size = {}; else if (b.size.ignoreScroll == c && b.size.date > new Date - W) return null; return B(b.size, A(a, b, c), { date: +new Date }, !0) } function z(a, b) { a.view.editable = A(a, a.editable, b, !0) } function x(a, b) {
                a.view || (a.view = {}); var c = a.view; if (!(!b && c && c.date > new Date - W)) {
                    var d = a.win, c = d.getScrollPosition(), d = d.getViewPaneSize(); B(a.view, {
                        scroll: {
                            x: c.x, y: c.y, width: a.doc.$.documentElement.scrollWidth - d.width, height: a.doc.$.documentElement.scrollHeight -
                                d.height
                        }, pane: { width: d.width, height: d.height, bottom: d.height + c.y }, date: +new Date
                    }, !0)
                }
            } function D(a, b, c, d) { for (var e = d, g = d, k = 0, h = !1, l = !1, m = a.view.pane.height, n = a.mouse; n.y + k < m && 0 < n.y - k;) { h || (h = b(e, d)); l || (l = b(g, d)); !h && 0 < n.y - k && (e = c(a, { x: n.x, y: n.y - k })); !l && n.y + k < m && (g = c(a, { x: n.x, y: n.y + k })); if (h && l) break; k += 2 } return new f([e, g, null, null]) } CKEDITOR.plugins.add("magicline", {
                init: function (a) {
                    var b = a.config, h = b.magicline_triggerOffset || 30, l = {
                        editor: a, enterMode: b.enterMode, triggerOffset: h, holdDistance: 0 |
                            h * (b.magicline_holdDistance || .5), boxColor: b.magicline_color || "#ff0000", rtl: "rtl" == b.contentsLangDirection, tabuList: ["data-cke-hidden-sel"].concat(b.magicline_tabuList || []), triggers: b.magicline_everywhere ? V : { table: 1, hr: 1, div: 1, ul: 1, ol: 1, dl: 1, form: 1, blockquote: 1 }
                    }, G, u, p; l.isRelevant = function (a) { return n(a) && !g(l, a) && !r(a) }; a.on("contentDom", function () {
                        var h = a.editable(), n = a.document, r = a.window; B(l, { editable: h, inInlineMode: h.isInline(), doc: n, win: r, hotNode: null }, !0); l.boundary = l.inInlineMode ? l.editable :
                            l.doc.getDocumentElement(); h.is(C.$inline) || (l.inInlineMode && !w(h) && h.setStyles({ position: "relative", top: null, left: null }), m.call(this, l), x(l), h.attachListener(a, "beforeUndoImage", function () { l.line.detach() }), h.attachListener(a, "beforeGetData", function () { l.line.wrap.getParent() && (l.line.detach(), a.once("getData", function () { l.line.attach() }, null, null, 1E3)) }, null, null, 0), h.attachListener(l.inInlineMode ? n : n.getWindow().getFrame(), "mouseout", function (b) {
                                if ("wysiwyg" == a.mode) if (l.inInlineMode) {
                                    var c = b.data.$.clientX;
                                    b = b.data.$.clientY; x(l); z(l, !0); var d = l.view.editable, e = l.view.scroll; c > d.left - e.x && c < d.right - e.x && b > d.top - e.y && b < d.bottom - e.y || (clearTimeout(p), p = null, l.line.detach())
                                } else clearTimeout(p), p = null, l.line.detach()
                            }), h.attachListener(h, "keyup", function () { l.hiddenMode = 0 }), h.attachListener(h, "keydown", function (b) { if ("wysiwyg" == a.mode) switch (b.data.getKeystroke()) { case 2228240: case 16: l.hiddenMode = 1, l.line.detach() } }), h.attachListener(l.inInlineMode ? h : n, "mousemove", function (b) {
                                u = !0; if ("wysiwyg" == a.mode &&
                                    !a.readOnly && !p) { var c = { x: b.data.$.clientX, y: b.data.$.clientY }; p = setTimeout(function () { l.mouse = c; p = l.trigger = null; x(l); u && !l.hiddenMode && a.focusManager.hasFocus && !l.line.mouseNear() && (l.element = Z(l, !0)) && ((l.trigger = y(l) || q(l) || ea(l)) && !t(l, l.trigger.upper || l.trigger.lower) ? l.line.attach().place() : (l.trigger = null, l.line.detach()), u = !1) }, 30) }
                            }), h.attachListener(r, "scroll", function () {
                                "wysiwyg" == a.mode && (l.line.detach(), L.webkit && (l.hiddenMode = 1, clearTimeout(G), G = setTimeout(function () {
                                    l.mouseDown || (l.hiddenMode =
                                        0)
                                }, 50)))
                            }), h.attachListener(M ? n : r, "mousedown", function () { "wysiwyg" == a.mode && (l.line.detach(), l.hiddenMode = 1, l.mouseDown = 1) }), h.attachListener(M ? n : r, "mouseup", function () { l.hiddenMode = 0; l.mouseDown = 0 }), a.addCommand("accessPreviousSpace", k(l)), a.addCommand("accessNextSpace", k(l, !0)), a.setKeystroke([[b.magicline_keystrokePrevious, "accessPreviousSpace"], [b.magicline_keystrokeNext, "accessNextSpace"]]), a.on("loadSnapshot", function () {
                                var b, c, d, e; for (e in { p: 1, br: 1, div: 1 }) for (b = a.document.getElementsByTag(e),
                                    d = b.count(); d--;)if ((c = b.getItem(d)).data("cke-magicline-hot")) { l.hotNode = c; l.lastCmdDirection = "true" === c.data("cke-magicline-dir") ? !0 : !1; return }
                            }), a._.magiclineBackdoor = { accessFocusSpace: c, boxTrigger: f, isLine: g, getAscendantTrigger: e, getNonEmptyNeighbour: d, getSize: A, that: l, triggerEdge: q, triggerEditable: y, triggerExpand: ea })
                    }, this)
                }
            }); var B = CKEDITOR.tools.extend, F = CKEDITOR.dom.element, E = F.createFromHtml, L = CKEDITOR.env, M = CKEDITOR.env.ie && 9 > CKEDITOR.env.version, C = CKEDITOR.dtd, O = {}, J = 128, N = 64, R = 32, H = 16,
                I = 4, P = 2, X = 1, U = " ", Y = C.$listItem, ha = C.$tableContent, K = B({}, C.$nonEditable, C.$empty), V = C.$block, W = 100, aa = "width:0px;height:0px;padding:0px;margin:0px;display:block;z-index:9999;color:#fff;position:absolute;font-size: 0px;line-height:0px;", ba = aa + "border-color:transparent;display:block;border-style:solid;", ca = "\x3cspan\x3e" + U + "\x3c/span\x3e"; O[CKEDITOR.ENTER_BR] = "br"; O[CKEDITOR.ENTER_P] = "p"; O[CKEDITOR.ENTER_DIV] = "div"; f.prototype = {
                    set: function (a, b, c) { this.properties = a + b + (c || X); return this }, is: function (a) {
                        return (this.properties &
                            a) == a
                    }
                }; var Z = function () { function a(b, c) { var d = b.$.elementFromPoint(c.x, c.y); return d && d.nodeType ? new CKEDITOR.dom.element(d) : null } return function (b, c, d) { if (!b.mouse) return null; var e = b.doc, f = b.line.wrap; d = d || b.mouse; var k = a(e, d); c && g(b, k) && (f.hide(), k = a(e, d), f.show()); return !k || k.type != CKEDITOR.NODE_ELEMENT || !k.$ || L.ie && 9 > L.version && !b.boundary.equals(k) && !b.boundary.contains(k) ? null : k } }(), S = CKEDITOR.dom.walker.whitespaces(), T = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_COMMENT), ea = function () {
                    function c(e) {
                        var f =
                            e.element, g, k, h; if (!n(f) || f.contains(e.editable) || f.isReadOnly()) return null; h = D(e, function (a, b) { return !b.equals(a) }, function (a, b) { return Z(a, !0, b) }, f); g = h.upper; k = h.lower; if (a(e, g, k)) return h.set(R, 8); if (g && f.contains(g)) for (; !g.getParent().equals(f);)g = g.getParent(); else g = f.getFirst(function (a) { return d(e, a) }); if (k && f.contains(k)) for (; !k.getParent().equals(f);)k = k.getParent(); else k = f.getLast(function (a) { return d(e, a) }); if (!g || !k) return null; v(e, g); v(e, k); if (!l(e.mouse.y, g.size.top, k.size.bottom)) return null;
                        for (var f = Number.MAX_VALUE, m, G, x, t; k && !k.equals(g) && (G = g.getNext(e.isRelevant));)m = Math.abs(b(e, g, G) - e.mouse.y), m < f && (f = m, x = g, t = G), g = G, v(e, g); if (!x || !t || !l(e.mouse.y, x.size.top, t.size.bottom)) return null; h.upper = x; h.lower = t; return h.set(R, 8)
                    } function d(a, b) { return !(b && b.type == CKEDITOR.NODE_TEXT || T(b) || r(b) || g(a, b) || b.type == CKEDITOR.NODE_ELEMENT && b.$ && b.is("br")) } return function (b) {
                        var d = c(b), e; if (e = d) {
                            e = d.upper; var f = d.lower; e = !e || !f || r(f) || r(e) || f.equals(e) || e.equals(f) || f.contains(e) || e.contains(f) ?
                                !1 : p(b, e) && p(b, f) && a(b, e, f) ? !0 : !1
                        } return e ? d : null
                    }
                }(), G = ["top", "left", "right", "bottom"]
        }(), CKEDITOR.config.magicline_keystrokePrevious = CKEDITOR.CTRL + CKEDITOR.SHIFT + 51, CKEDITOR.config.magicline_keystrokeNext = CKEDITOR.CTRL + CKEDITOR.SHIFT + 52, function () {
            function a(a) { if (!a || a.type != CKEDITOR.NODE_ELEMENT || "form" != a.getName()) return []; for (var b = [], d = ["style", "className"], c = 0; c < d.length; c++) { var e = a.$.elements.namedItem(d[c]); e && (e = new CKEDITOR.dom.element(e), b.push([e, e.nextSibling]), e.remove()) } return b }
            function f(a, b) { if (a && a.type == CKEDITOR.NODE_ELEMENT && "form" == a.getName() && 0 < b.length) for (var d = b.length - 1; 0 <= d; d--) { var c = b[d][0], e = b[d][1]; e ? c.insertBefore(e) : c.appendTo(a) } } function e(b, d) { var e = a(b), c = {}, k = b.$; d || (c["class"] = k.className || "", k.className = ""); c.inline = k.style.cssText || ""; d || (k.style.cssText = "position: static; overflow: visible"); f(e); return c } function b(b, d) { var e = a(b), c = b.$; "class" in d && (c.className = d["class"]); "inline" in d && (c.style.cssText = d.inline); f(e) } function d(a) {
                if (!a.editable().isInline()) {
                    var b =
                        CKEDITOR.instances, d; for (d in b) { var c = b[d]; "wysiwyg" != c.mode || c.readOnly || (c = c.document.getBody(), c.setAttribute("contentEditable", !1), c.setAttribute("contentEditable", !0)) } a.editable().hasFocus && (a.toolbox.focus(), a.focus())
                }
            } CKEDITOR.plugins.add("maximize", {
                init: function (a) {
                    function f() { var b = k.getViewPaneSize(); a.resize(b.width, b.height, null, !0) } if (a.elementMode != CKEDITOR.ELEMENT_MODE_INLINE) {
                        var m = a.lang, c = CKEDITOR.document, k = c.getWindow(), g, n, r, w = CKEDITOR.TRISTATE_OFF; a.addCommand("maximize",
                            {
                                modes: { wysiwyg: !CKEDITOR.env.iOS, source: !CKEDITOR.env.iOS }, readOnly: 1, editorFocus: !1, exec: function () {
                                    var p = a.container.getFirst(function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasClass("cke_inner") }), t = a.ui.space("contents"); if ("wysiwyg" == a.mode) { var u = a.getSelection(); g = u && u.getRanges(); n = k.getScrollPosition() } else { var y = a.editable().$; g = !CKEDITOR.env.ie && [y.selectionStart, y.selectionEnd]; n = [y.scrollLeft, y.scrollTop] } if (this.state == CKEDITOR.TRISTATE_OFF) {
                                        k.on("resize", f); r = k.getScrollPosition();
                                        for (u = a.container; u = u.getParent();)u.setCustomData("maximize_saved_styles", e(u)), u.setStyle("z-index", a.config.baseFloatZIndex - 5); t.setCustomData("maximize_saved_styles", e(t, !0)); p.setCustomData("maximize_saved_styles", e(p, !0)); t = { overflow: CKEDITOR.env.webkit ? "" : "hidden", width: 0, height: 0 }; c.getDocumentElement().setStyles(t); !CKEDITOR.env.gecko && c.getDocumentElement().setStyle("position", "fixed"); CKEDITOR.env.gecko && CKEDITOR.env.quirks || c.getBody().setStyles(t); CKEDITOR.env.ie ? setTimeout(function () {
                                            k.$.scrollTo(0,
                                                0)
                                        }, 0) : k.$.scrollTo(0, 0); p.setStyle("position", CKEDITOR.env.gecko && CKEDITOR.env.quirks ? "fixed" : "absolute"); p.$.offsetLeft; p.setStyles({ "z-index": a.config.baseFloatZIndex - 5, left: "0px", top: "0px" }); p.addClass("cke_maximized"); f(); t = p.getDocumentPosition(); p.setStyles({ left: -1 * t.x + "px", top: -1 * t.y + "px" }); CKEDITOR.env.gecko && d(a)
                                    } else if (this.state == CKEDITOR.TRISTATE_ON) {
                                        k.removeListener("resize", f); for (var u = [t, p], q = 0; q < u.length; q++)b(u[q], u[q].getCustomData("maximize_saved_styles")), u[q].removeCustomData("maximize_saved_styles");
                                        for (u = a.container; u = u.getParent();)b(u, u.getCustomData("maximize_saved_styles")), u.removeCustomData("maximize_saved_styles"); CKEDITOR.env.ie ? setTimeout(function () { k.$.scrollTo(r.x, r.y) }, 0) : k.$.scrollTo(r.x, r.y); p.removeClass("cke_maximized"); CKEDITOR.env.webkit && (p.setStyle("display", "inline"), setTimeout(function () { p.setStyle("display", "block") }, 0)); a.fire("resize", { outerHeight: a.container.$.offsetHeight, contentsHeight: t.$.offsetHeight, outerWidth: a.container.$.offsetWidth })
                                    } this.toggleState(); if (u =
                                        this.uiItems[0]) t = this.state == CKEDITOR.TRISTATE_OFF ? m.maximize.maximize : m.maximize.minimize, u = CKEDITOR.document.getById(u._.id), u.getChild(1).setHtml(t), u.setAttribute("title", t), u.setAttribute("href", 'javascript:void("' + t + '");'); "wysiwyg" == a.mode ? g ? (CKEDITOR.env.gecko && d(a), a.getSelection().selectRanges(g), (y = a.getSelection().getStartElement()) && y.scrollIntoView(!0)) : k.$.scrollTo(n.x, n.y) : (g && (y.selectionStart = g[0], y.selectionEnd = g[1]), y.scrollLeft = n[0], y.scrollTop = n[1]); g = n = null; w = this.state; a.fire("maximize",
                                            this.state)
                                }, canUndo: !1
                            }); a.ui.addButton && a.ui.addButton("Maximize", { label: m.maximize.maximize, command: "maximize", toolbar: "tools,10" }); a.on("mode", function () { var b = a.getCommand("maximize"); b.setState(b.state == CKEDITOR.TRISTATE_DISABLED ? CKEDITOR.TRISTATE_DISABLED : w) }, null, null, 100)
                    }
                }
            })
        }(), function () {
            CKEDITOR.plugins.add("xml", {}); CKEDITOR.xml = function (a) {
                var f = null; if ("object" == typeof a) f = a; else if (a = (a || "").replace(/&nbsp;/g, " "), "ActiveXObject" in window) {
                    try { f = new ActiveXObject("MSXML2.DOMDocument") } catch (e) {
                        try {
                            f =
                            new ActiveXObject("Microsoft.XmlDom")
                        } catch (b) { }
                    } f && (f.async = !1, f.resolveExternals = !1, f.validateOnParse = !1, f.loadXML(a))
                } else window.DOMParser && (f = (new DOMParser).parseFromString(a, "text/xml")); this.baseXml = f
            }; CKEDITOR.xml.prototype = {
                selectSingleNode: function (a, f) { var e = this.baseXml; if (f || (f = e)) { if ("selectSingleNode" in f) return f.selectSingleNode(a); if (e.evaluate) return (e = e.evaluate(a, f, null, 9, null)) && e.singleNodeValue || null } return null }, selectNodes: function (a, f) {
                    var e = this.baseXml, b = []; if (f || (f =
                        e)) { if ("selectNodes" in f) return f.selectNodes(a); if (e.evaluate && (e = e.evaluate(a, f, null, 5, null))) for (var d; d = e.iterateNext();)b.push(d) } return b
                }, getInnerXml: function (a, f) { var e = this.selectSingleNode(a, f), b = []; if (e) for (e = e.firstChild; e;)e.xml ? b.push(e.xml) : window.XMLSerializer && b.push((new XMLSerializer).serializeToString(e)), e = e.nextSibling; return b.length ? b.join("") : null }
            }
        }(), function () {
            CKEDITOR.plugins.add("ajax", { requires: "xml" }); CKEDITOR.ajax = function () {
                function a() {
                    if (!CKEDITOR.env.ie || "file:" !=
                        location.protocol) try { return new XMLHttpRequest } catch (a) { } try { return new ActiveXObject("Msxml2.XMLHTTP") } catch (b) { } try { return new ActiveXObject("Microsoft.XMLHTTP") } catch (e) { } return null
                } function f(a, b) { if (4 != a.readyState || !(200 <= a.status && 300 > a.status || 304 == a.status || 0 === a.status || 1223 == a.status)) return null; switch (b) { case "text": return a.responseText; case "xml": var e = a.responseXML; return new CKEDITOR.xml(e && e.firstChild ? e : a.responseText); case "arraybuffer": return a.response; default: return null } }
                function e(b, e, h) { var m = !!e, c = a(); if (!c) return null; m && "text" !== h && "xml" !== h && (c.responseType = h); c.open("GET", b, m); m && (c.onreadystatechange = function () { 4 == c.readyState && (e(f(c, h)), c = null) }); c.send(null); return m ? "" : f(c, h) } function b(b, e, h, m, c) { var k = a(); if (!k) return null; k.open("POST", b, !0); k.onreadystatechange = function () { 4 == k.readyState && (m && m(f(k, c)), k = null) }; k.setRequestHeader("Content-type", h || "application/x-www-form-urlencoded; charset\x3dUTF-8"); k.send(e) } return {
                    load: function (a, b, f) {
                        return e(a,
                            b, f || "text")
                    }, post: function (a, e, f, m) { return b(a, e, f, m, "text") }, loadXml: function (a, b) { return e(a, b, "xml") }, loadText: function (a, b) { return e(a, b, "text") }, loadBinary: function (a, b) { return e(a, b, "arraybuffer") }
                }
            }()
        }(), function () {
            function a(a, b) { return CKEDITOR.tools.array.filter(a, function (a) { return a.canHandle(b) }).sort(function (a, b) { return a.priority === b.priority ? 0 : a.priority - b.priority }) } function f(a, b) { var c = a.shift(); c && c.handle(b, function () { f(a, b) }) } function e(a) {
                var b = CKEDITOR.tools.array.reduce(a,
                    function (a, b) { return CKEDITOR.tools.array.isArray(b.filters) ? a.concat(b.filters) : a }, []); return CKEDITOR.tools.array.filter(b, function (a, d) { return CKEDITOR.tools.array.indexOf(b, a) === d })
            } function b(a, b) {
                var c = 0, e, f; if (!CKEDITOR.tools.array.isArray(a) || 0 === a.length) return !0; e = CKEDITOR.tools.array.filter(a, function (a) { return -1 === CKEDITOR.tools.array.indexOf(d, a) }); if (0 < e.length) for (f = 0; f < e.length; f++)(function (a) { CKEDITOR.scriptLoader.queue(a, function (f) { f && d.push(a); ++c === e.length && b() }) })(e[f]); return 0 ===
                    e.length
            } var d = [], l = CKEDITOR.tools.createClass({ $: function () { this.handlers = [] }, proto: { register: function (a) { "number" !== typeof a.priority && (a.priority = 10); this.handlers.push(a) }, addPasteListener: function (d) { d.on("paste", function (l) { var c = a(this.handlers, l), k; if (0 !== c.length) { k = e(c); k = b(k, function () { return d.fire("paste", l.data) }); if (!k) return l.cancel(); f(c, l) } }, this, null, 3) } } }); CKEDITOR.plugins.add("pastetools", { requires: ["clipboard", "ajax"], beforeInit: function (a) { a.pasteTools = new l; a.pasteTools.addPasteListener(a) } });
            CKEDITOR.plugins.pastetools = {
                filters: {}, loadFilters: b, createFilter: function (a) { var b = CKEDITOR.tools.array.isArray(a.rules) ? a.rules : [a.rules], c = a.additionalTransforms; return function (a, d) { var e = new CKEDITOR.htmlParser.basicWriter, f = new CKEDITOR.htmlParser.filter, h; c && (a = c(a, d)); CKEDITOR.tools.array.forEach(b, function (b) { f.addRules(b(a, d, f)) }); h = CKEDITOR.htmlParser.fragment.fromHtml(a); f.applyTo(h); h.writeHtml(e); return e.getHtml() } }, getClipboardData: function (a, b) {
                    var c; return CKEDITOR.plugins.clipboard.isCustomDataTypesSupported ||
                        "text/html" === b ? (c = a.dataTransfer.getData(b, !0)) || "text/html" !== b ? c : a.dataValue : null
                }, getConfigValue: function (a, b) { if (a && a.config) { var c = CKEDITOR.tools, d = a.config, e = c.object.keys(d), f = ["pasteTools_" + b, "pasteFromWord_" + b, "pasteFromWord" + c.capitalize(b, !0)], f = c.array.find(f, function (a) { return -1 !== c.array.indexOf(e, a) }); return d[f] } }, getContentGeneratorName: function (a) {
                    if ((a = /<meta\s+name=["']?generator["']?\s+content=["']?(\w+)/gi.exec(a)) && a.length) return a = a[1].toLowerCase(), 0 === a.indexOf("microsoft") ?
                        "microsoft" : 0 === a.indexOf("libreoffice") ? "libreoffice" : "unknown"
                }
            }; CKEDITOR.pasteFilters = CKEDITOR.plugins.pastetools.filters
        }(), function () {
            CKEDITOR.plugins.add("pastefromgdocs", {
                requires: "pastetools", init: function (a) {
                    var f = CKEDITOR.plugins.getPath("pastetools"), e = this.path; a.pasteTools.register({
                        filters: [CKEDITOR.getUrl(f + "filter/common.js"), CKEDITOR.getUrl(e + "filter/default.js")], canHandle: function (a) { return /id=(\"|\')?docs\-internal\-guid\-/.test(a.data.dataValue) }, handle: function (b, d) {
                            var e = b.data,
                            f = CKEDITOR.plugins.pastetools.getClipboardData(e, "text/html"); e.dontFilter = !0; e.dataValue = CKEDITOR.pasteFilters.gdocs(f, a); !0 === a.config.forcePasteAsPlainText && (e.type = "text"); d()
                        }
                    })
                }
            })
        }(), function () {
            CKEDITOR.plugins.add("pastefromlibreoffice", {
                requires: "pastetools", isSupportedEnvironment: function () { var a = CKEDITOR.env.ie && 11 >= CKEDITOR.env.version; return !(CKEDITOR.env.webkit && !CKEDITOR.env.chrome) && !a }, init: function (a) {
                    if (this.isSupportedEnvironment()) {
                        var f = CKEDITOR.plugins.getPath("pastetools"),
                        e = this.path; a.pasteTools.register({
                            priority: 100, filters: [CKEDITOR.getUrl(f + "filter/common.js"), CKEDITOR.getUrl(f + "filter/image.js"), CKEDITOR.getUrl(e + "filter/default.js")], canHandle: function (a) { a = a.data; return (a = a.dataTransfer.getData("text/html", !0) || a.dataValue) ? "libreoffice" === CKEDITOR.plugins.pastetools.getContentGeneratorName(a) : !1 }, handle: function (b, d) {
                                var e = b.data, f = e.dataValue || CKEDITOR.plugins.pastetools.getClipboardData(e, "text/html"); e.dontFilter = !0; f = CKEDITOR.pasteFilters.image(f, a, CKEDITOR.plugins.pastetools.getClipboardData(e,
                                    "text/rtf")); e.dataValue = CKEDITOR.pasteFilters.libreoffice(f, a); !0 === a.config.forcePasteAsPlainText && (e.type = "text"); d()
                            }
                        })
                    }
                }
            })
        }(), function () {
            CKEDITOR.plugins.add("pastefromword", {
                requires: "pastetools", init: function (a) {
                    var f = 0, e = CKEDITOR.plugins.getPath("pastetools"), b = this.path, d = void 0 === a.config.pasteFromWord_inlineImages ? !0 : a.config.pasteFromWord_inlineImages, e = [CKEDITOR.getUrl(e + "filter/common.js"), CKEDITOR.getUrl(e + "filter/image.js"), CKEDITOR.getUrl(b + "filter/default.js")]; a.addCommand("pastefromword",
                        { canUndo: !1, async: !0, exec: function (a, b) { f = 1; a.execCommand("paste", { type: "html", notification: b && "undefined" !== typeof b.notification ? b.notification : !0 }) } }); CKEDITOR.plugins.clipboard.addPasteButton(a, "PasteFromWord", { label: a.lang.pastefromword.toolbar, command: "pastefromword", toolbar: "clipboard,50" }); a.pasteTools.register({
                            filters: a.config.pasteFromWordCleanupFile ? [a.config.pasteFromWordCleanupFile] : e, canHandle: function (a) {
                                a = CKEDITOR.plugins.pastetools.getClipboardData(a.data, "text/html"); var b = CKEDITOR.plugins.pastetools.getContentGeneratorName(a),
                                    d = /(class="?Mso|style=["'][^"]*?\bmso\-|w:WordDocument|<o:\w+>|<\/font>)/, b = b ? "microsoft" === b : d.test(a); return a && (f || b)
                            }, handle: function (b, e) {
                                var m = b.data, c = CKEDITOR.plugins.pastetools.getClipboardData(m, "text/html"), k = CKEDITOR.plugins.pastetools.getClipboardData(m, "text/rtf"), c = { dataValue: c, dataTransfer: { "text/rtf": k } }; if (!1 !== a.fire("pasteFromWord", c) || f) {
                                    m.dontFilter = !0; if (f || !a.config.pasteFromWordPromptCleanup || confirm(a.lang.pastefromword.confirmCleanup)) c.dataValue = CKEDITOR.cleanWord(c.dataValue,
                                        a), CKEDITOR.plugins.clipboard.isCustomDataTypesSupported && d && CKEDITOR.pasteFilters.image && (c.dataValue = CKEDITOR.pasteFilters.image(c.dataValue, a, k)), a.fire("afterPasteFromWord", c), m.dataValue = c.dataValue, !0 === a.config.forcePasteAsPlainText ? m.type = "text" : CKEDITOR.plugins.clipboard.isCustomCopyCutSupported || "allow-word" !== a.config.forcePasteAsPlainText || (m.type = "html"); f = 0; e()
                                }
                            }
                        })
                }
            })
        }(), function () {
            var a = {
                canUndo: !1, async: !0, exec: function (a, e) {
                    var b = a.lang, d = CKEDITOR.tools.keystrokeToString(b.common.keyboard,
                        a.getCommandKeystroke(CKEDITOR.env.ie ? a.commands.paste : this)), l = e && "undefined" !== typeof e.notification ? e.notification : !e || !e.from || "keystrokeHandler" === e.from && CKEDITOR.env.ie, b = l && "string" === typeof l ? l : b.pastetext.pasteNotification.replace(/%1/, '\x3ckbd aria-label\x3d"' + d.aria + '"\x3e' + d.display + "\x3c/kbd\x3e"); a.execCommand("paste", { type: "text", notification: l ? b : !1 })
                }
            }; CKEDITOR.plugins.add("pastetext", {
                requires: "clipboard", init: function (f) {
                    var e = CKEDITOR.env.safari ? CKEDITOR.CTRL + CKEDITOR.ALT + CKEDITOR.SHIFT +
                        86 : CKEDITOR.CTRL + CKEDITOR.SHIFT + 86; f.addCommand("pastetext", a); f.setKeystroke(e, "pastetext"); CKEDITOR.plugins.clipboard.addPasteButton(f, "PasteText", { label: f.lang.pastetext.button, command: "pastetext", toolbar: "clipboard,40" }); if (f.config.forcePasteAsPlainText) f.on("beforePaste", function (a) { "html" != a.data.type && (a.data.type = "text") }); f.on("pasteState", function (a) { f.getCommand("pastetext").setState(a.data) })
                }
            })
        }(), CKEDITOR.plugins.add("removeformat", {
            init: function (a) {
                a.addCommand("removeFormat", CKEDITOR.plugins.removeformat.commands.removeformat);
                a.ui.addButton && a.ui.addButton("RemoveFormat", { label: a.lang.removeformat.toolbar, command: "removeFormat", toolbar: "cleanup,10" })
            }
        }), CKEDITOR.plugins.removeformat = {
            commands: {
                removeformat: {
                    exec: function (a) {
                        for (var f = a._.removeFormatRegex || (a._.removeFormatRegex = new RegExp("^(?:" + a.config.removeFormatTags.replace(/,/g, "|") + ")$", "i")), e = a._.removeAttributes || (a._.removeAttributes = a.config.removeFormatAttributes.split(",")), b = CKEDITOR.plugins.removeformat.filter, d = a.getSelection().getRanges(), l = d.createIterator(),
                            h = function (a) { return a.type == CKEDITOR.NODE_ELEMENT }, m; m = l.getNextRange();) {
                                m.enlarge(CKEDITOR.ENLARGE_INLINE); var c = m.createBookmark(), k = c.startNode, g = c.endNode, n = function (c) { for (var d = a.elementPath(c), e = d.elements, g = 1, k; (k = e[g]) && !k.equals(d.block) && !k.equals(d.blockLimit); g++)f.test(k.getName()) && b(a, k) && c.breakParent(k) }; n(k); if (g) for (n(g), k = k.getNextSourceNode(!0, CKEDITOR.NODE_ELEMENT); k && !k.equals(g);)if (k.isReadOnly()) { if (k.getPosition(g) & CKEDITOR.POSITION_CONTAINS) break; k = k.getNext(h) } else n =
                                    k.getNextSourceNode(!1, CKEDITOR.NODE_ELEMENT), "img" == k.getName() && k.data("cke-realelement") || !b(a, k) || (f.test(k.getName()) ? k.remove(1) : (k.removeAttributes(e), a.fire("removeFormatCleanup", k))), k = n; m.moveToBookmark(c)
                        } a.forceNextSelectionCheck(); a.getSelection().selectRanges(d)
                    }
                }
            }, filter: function (a, f) { for (var e = a._.removeFormatFilters || [], b = 0; b < e.length; b++)if (!1 === e[b](f)) return !1; return !0 }
        }, CKEDITOR.editor.prototype.addRemoveFormatFilter = function (a) {
            this._.removeFormatFilters || (this._.removeFormatFilters =
                []); this._.removeFormatFilters.push(a)
        }, CKEDITOR.config.removeFormatTags = "b,big,cite,code,del,dfn,em,font,i,ins,kbd,q,s,samp,small,span,strike,strong,sub,sup,tt,u,var", CKEDITOR.config.removeFormatAttributes = "class,style,lang,width,height,align,hspace,valign", CKEDITOR.plugins.add("resize", {
            init: function (a) {
                function f(d) {
                    var e = c.width, f = c.height, h = e + (d.data.$.screenX - m.x) * ("rtl" == l ? -1 : 1); d = f + (d.data.$.screenY - m.y); k && (e = Math.max(b.resize_minWidth, Math.min(h, b.resize_maxWidth))); g && (f = Math.max(b.resize_minHeight,
                        Math.min(d, b.resize_maxHeight))); a.resize(k ? e : null, f)
                } function e() { CKEDITOR.document.removeListener("mousemove", f); CKEDITOR.document.removeListener("mouseup", e); a.document && (a.document.removeListener("mousemove", f), a.document.removeListener("mouseup", e)) } var b = a.config, d = a.ui.spaceId("resizer"), l = a.element ? a.element.getDirection(1) : "ltr"; !b.resize_dir && (b.resize_dir = "vertical"); void 0 === b.resize_maxWidth && (b.resize_maxWidth = 3E3); void 0 === b.resize_maxHeight && (b.resize_maxHeight = 3E3); void 0 === b.resize_minWidth &&
                    (b.resize_minWidth = 750); void 0 === b.resize_minHeight && (b.resize_minHeight = 250); if (!1 !== b.resize_enabled) {
                        var h = null, m, c, k = ("both" == b.resize_dir || "horizontal" == b.resize_dir) && b.resize_minWidth != b.resize_maxWidth, g = ("both" == b.resize_dir || "vertical" == b.resize_dir) && b.resize_minHeight != b.resize_maxHeight, n = CKEDITOR.tools.addFunction(function (d) {
                            h || (h = a.getResizable()); c = { width: h.$.offsetWidth || 0, height: h.$.offsetHeight || 0 }; m = { x: d.screenX, y: d.screenY }; b.resize_minWidth > c.width && (b.resize_minWidth = c.width);
                            b.resize_minHeight > c.height && (b.resize_minHeight = c.height); CKEDITOR.document.on("mousemove", f); CKEDITOR.document.on("mouseup", e); a.document && (a.document.on("mousemove", f), a.document.on("mouseup", e)); d.preventDefault && d.preventDefault()
                        }); a.on("destroy", function () { CKEDITOR.tools.removeFunction(n) }); a.on("uiSpace", function (b) {
                            if ("bottom" == b.data.space) {
                                var c = ""; k && !g && (c = " cke_resizer_horizontal"); !k && g && (c = " cke_resizer_vertical"); var e = '\x3cspan id\x3d"' + d + '" class\x3d"cke_resizer' + c + " cke_resizer_" +
                                    l + '" title\x3d"' + CKEDITOR.tools.htmlEncode(a.lang.common.resize) + '" onmousedown\x3d"CKEDITOR.tools.callFunction(' + n + ', event)"\x3e' + ("ltr" == l ? "◢" : "◣") + "\x3c/span\x3e"; "ltr" == l && "ltr" == c ? b.data.html += e : b.data.html = e + b.data.html
                            }
                        }, a, null, 100); a.on("maximize", function (b) { a.ui.space("resizer")[b.data == CKEDITOR.TRISTATE_ON ? "hide" : "show"]() })
                    }
            }
        }), CKEDITOR.plugins.add("menubutton", {
            requires: "button,menu", onLoad: function () {
                var a = function (a) {
                    var e = this._, b = e.menu; e.state !== CKEDITOR.TRISTATE_DISABLED && (e.on &&
                        b ? b.hide() : (e.previousState = e.state, b || (b = e.menu = new CKEDITOR.menu(a, { panel: { className: "cke_menu_panel", attributes: { "aria-label": a.lang.common.options } } }), b.onHide = CKEDITOR.tools.bind(function () { var b = this.command ? a.getCommand(this.command).modes : this.modes; this.setState(!b || b[a.mode] ? e.previousState : CKEDITOR.TRISTATE_DISABLED); e.on = 0 }, this), this.onMenu && b.addListener(this.onMenu)), this.setState(CKEDITOR.TRISTATE_ON), e.on = 1, setTimeout(function () { b.show(CKEDITOR.document.getById(e.id), 4) }, 0)))
                }; CKEDITOR.ui.menuButton =
                    CKEDITOR.tools.createClass({ base: CKEDITOR.ui.button, $: function (f) { delete f.panel; this.base(f); this.hasArrow = "menu"; this.click = a }, statics: { handler: { create: function (a) { return new CKEDITOR.ui.menuButton(a) } } } })
            }, beforeInit: function (a) { a.ui.addHandler(CKEDITOR.UI_MENUBUTTON, CKEDITOR.ui.menuButton.handler) }
        }), CKEDITOR.UI_MENUBUTTON = "menubutton", "use strict", CKEDITOR.plugins.add("scayt", {
            requires: "menubutton,dialog", tabToOpen: null, dialogName: "scaytDialog", onLoad: function (a) {
                "moono-lisa" == (CKEDITOR.skinName ||
                    a.config.skin) && CKEDITOR.document.appendStyleSheet(CKEDITOR.getUrl(this.path + "skins/" + CKEDITOR.skin.name + "/scayt.css")); CKEDITOR.document.appendStyleSheet(CKEDITOR.getUrl(this.path + "dialogs/dialog.css")); var f = !1; CKEDITOR.on("instanceLoaded", function (a) {
                        if (!f && CKEDITOR.plugins.autocomplete) {
                            f = !0; var b = CKEDITOR.plugins.autocomplete.prototype.getModel; CKEDITOR.plugins.autocomplete.prototype.getModel = function (a) {
                                var e = this.editor; a = b.bind(this)(a); a.on("change-isActive", function (a) {
                                    a.data ? e.fire("autocompletePanelShow") :
                                    e.fire("autocompletePanelHide")
                                }); return a
                            }
                        }
                    })
            }, init: function (a) {
                var f = this, e = CKEDITOR.plugins.scayt; this.bindEvents(a); this.parseConfig(a); this.addRule(a); CKEDITOR.dialog.add(this.dialogName, CKEDITOR.getUrl(this.path + "dialogs/options.js")); this.addMenuItems(a); var b = a.lang.scayt, d = CKEDITOR.env; a.ui.add("Scayt", CKEDITOR.UI_MENUBUTTON, {
                    label: b.text_title, title: a.plugins.wsc ? a.lang.wsc.title : b.text_title, modes: { wysiwyg: !(d.ie && (8 > d.version || d.quirks)) }, toolbar: "spellchecker,20", refresh: function () {
                        var b =
                            a.ui.instances.Scayt.getState(); a.scayt && (b = e.state.scayt[a.name] ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF); a.fire("scaytButtonState", b)
                    }, onRender: function () { var b = this; a.on("scaytButtonState", function (a) { void 0 !== typeof a.data && b.setState(a.data) }) }, onMenu: function () {
                        var b = a.scayt; a.getMenuItem("scaytToggle").label = a.lang.scayt[b && e.state.scayt[a.name] ? "btn_disable" : "btn_enable"]; var d = {
                            scaytToggle: CKEDITOR.TRISTATE_OFF, scaytOptions: b ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, scaytLangs: b ?
                                CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, scaytDict: b ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, scaytAbout: b ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, WSC: a.plugins.wsc ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED
                        }; a.config.scayt_uiTabs[0] || delete d.scaytOptions; a.config.scayt_uiTabs[1] || delete d.scaytLangs; a.config.scayt_uiTabs[2] || delete d.scaytDict; b && !CKEDITOR.plugins.scayt.isNewUdSupported(b) && (delete d.scaytDict, a.config.scayt_uiTabs[2] = 0, CKEDITOR.plugins.scayt.alarmCompatibilityMessage());
                        return d
                    }
                }); a.contextMenu && a.addMenuItems && (a.contextMenu.addListener(function (b, d) { var e = a.scayt, c, k; e && (k = e.getSelectionNode()) && (c = f.menuGenerator(a, k), e.showBanner("." + a.contextMenu._.definition.panel.className.split(" ").join(" ."))); return c }), a.contextMenu._.onHide = CKEDITOR.tools.override(a.contextMenu._.onHide, function (b) { return function () { var d = a.scayt; d && d.hideBanner(); return b.apply(this) } }))
            }, addMenuItems: function (a) {
                var f = this, e = CKEDITOR.plugins.scayt; a.addMenuGroup("scaytButton"); for (var b =
                    a.config.scayt_contextMenuItemsOrder.split("|"), d = 0; d < b.length; d++)b[d] = "scayt_" + b[d]; if ((b = ["grayt_description", "grayt_suggest", "grayt_control"].concat(b)) && b.length) for (d = 0; d < b.length; d++)a.addMenuGroup(b[d], d - 10); a.addCommand("scaytToggle", { exec: function (a) { var b = a.scayt; e.state.scayt[a.name] = !e.state.scayt[a.name]; !0 === e.state.scayt[a.name] ? b || e.createScayt(a) : b && e.destroy(a) } }); a.addCommand("scaytAbout", { exec: function (a) { a.scayt.tabToOpen = "about"; e.openDialog(f.dialogName, a) } }); a.addCommand("scaytOptions",
                        { exec: function (a) { a.scayt.tabToOpen = "options"; e.openDialog(f.dialogName, a) } }); a.addCommand("scaytLangs", { exec: function (a) { a.scayt.tabToOpen = "langs"; e.openDialog(f.dialogName, a) } }); a.addCommand("scaytDict", { exec: function (a) { a.scayt.tabToOpen = "dictionaries"; e.openDialog(f.dialogName, a) } }); b = {
                            scaytToggle: { label: a.lang.scayt.btn_enable, group: "scaytButton", command: "scaytToggle" }, scaytAbout: { label: a.lang.scayt.btn_about, group: "scaytButton", command: "scaytAbout" }, scaytOptions: {
                                label: a.lang.scayt.btn_options,
                                group: "scaytButton", command: "scaytOptions"
                            }, scaytLangs: { label: a.lang.scayt.btn_langs, group: "scaytButton", command: "scaytLangs" }, scaytDict: { label: a.lang.scayt.btn_dictionaries, group: "scaytButton", command: "scaytDict" }
                        }; a.plugins.wsc && (b.WSC = {
                            label: a.lang.wsc.toolbar, group: "scaytButton", onClick: function () {
                                var b = CKEDITOR.plugins.scayt, d = a.scayt, e = a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? a.container.getText() : a.document.getBody().getText(); (e = e.replace(/\s/g, "")) ? (d && b.state.scayt[a.name] && d.setMarkupPaused &&
                                    d.setMarkupPaused(!0), a.lockSelection(), a.execCommand("checkspell")) : alert("Nothing to check!")
                            }
                        }); a.addMenuItems(b)
            }, bindEvents: function (a) {
                var f = CKEDITOR.plugins.scayt, e = a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE, b = function () { f.destroy(a) }, d = function () { !f.state.scayt[a.name] || a.readOnly || a.scayt || f.createScayt(a) }, l = function () {
                    var b = a.editable(); b.attachListener(b, "focus", function (b) {
                        CKEDITOR.plugins.scayt && !a.scayt && setTimeout(d, 0); b = CKEDITOR.plugins.scayt && CKEDITOR.plugins.scayt.state.scayt[a.name] &&
                            a.scayt; var f, g; if ((e || b) && a._.savedSelection) { b = a._.savedSelection.getSelectedElement(); b = !b && a._.savedSelection.getRanges(); for (var h = 0; h < b.length; h++)g = b[h], "string" === typeof g.startContainer.$.nodeValue && (f = g.startContainer.getText().length, (f < g.startOffset || f < g.endOffset) && a.unlockSelection(!1)) }
                    }, this, null, -10)
                }, h = function () {
                    e ? a.config.scayt_inlineModeImmediateMarkup ? d() : (a.on("blur", function () { setTimeout(b, 0) }), a.on("focus", d), a.focusManager.hasFocus && d()) : d(); l(); var f = a.editable(); f.attachListener(f,
                        "mousedown", function (b) { b = b.data.getTarget(); var d = a.widgets && a.widgets.getByElement(b); d && (d.wrapper = b.getAscendant(function (a) { return a.hasAttribute("data-cke-widget-wrapper") }, !0)) }, this, null, -10)
                }; a.on("contentDom", h); a.on("beforeCommandExec", function (b) {
                    var c = a.scayt, d = !1, e = !1, h = !0; b.data.name in f.options.disablingCommandExec && "wysiwyg" == a.mode ? c && (f.destroy(a), a.fire("scaytButtonState", CKEDITOR.TRISTATE_DISABLED)) : "bold" !== b.data.name && "italic" !== b.data.name && "underline" !== b.data.name && "strike" !==
                        b.data.name && "subscript" !== b.data.name && "superscript" !== b.data.name && "enter" !== b.data.name && "cut" !== b.data.name && "language" !== b.data.name || !c || ("cut" === b.data.name && (h = !1, e = !0), "language" === b.data.name && (e = d = !0), a.fire("reloadMarkupScayt", { removeOptions: { removeInside: h, forceBookmark: e, language: d }, timeout: 0 }))
                }); a.on("beforeSetMode", function (b) { if ("source" == b.data) { if (b = a.scayt) f.destroy(a), a.fire("scaytButtonState", CKEDITOR.TRISTATE_DISABLED); a.document && a.document.getBody().removeAttribute("_jquid") } });
                a.on("afterCommandExec", function (b) { "wysiwyg" != a.mode || "undo" != b.data.name && "redo" != b.data.name || setTimeout(function () { f.reloadMarkup(a.scayt) }, 250) }); a.on("readOnly", function (b) { var c; b && (c = a.scayt, !0 === b.editor.readOnly ? c && c.fire("removeMarkupInDocument", {}) : c ? f.reloadMarkup(c) : "wysiwyg" == b.editor.mode && !0 === f.state.scayt[b.editor.name] && (f.createScayt(a), b.editor.fire("scaytButtonState", CKEDITOR.TRISTATE_ON))) }); a.on("beforeDestroy", b); a.on("setData", function () {
                    b(); (a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ||
                        a.plugins.divarea) && h()
                }, this, null, 50); a.on("reloadMarkupScayt", function (b) { var c = b.data && b.data.removeOptions, d = b.data && b.data.timeout, e = b.data && b.data.language, h = a.scayt; h && setTimeout(function () { e && (c.selectionNode = a.plugins.language.getCurrentLangElement(a), c.selectionNode = c.selectionNode && c.selectionNode.$ || null); h.removeMarkupInSelectionNode(c); f.reloadMarkup(h) }, d || 0) }); a.on("insertElement", function () { a.fire("reloadMarkupScayt", { removeOptions: { forceBookmark: !0 } }) }, this, null, 50); a.on("insertHtml",
                    function () { a.scayt && a.scayt.setFocused && a.scayt.setFocused(!0); a.fire("reloadMarkupScayt") }, this, null, 50); a.on("insertText", function () { a.scayt && a.scayt.setFocused && a.scayt.setFocused(!0); a.fire("reloadMarkupScayt") }, this, null, 50); a.on("scaytDialogShown", function (b) { b.data.selectPage(a.scayt.tabToOpen) }); a.on("autocompletePanelShow", function (b) { (b = a.scayt) && b.setMarkupPaused && b.setMarkupPaused(!0) }); a.on("autocompletePanelHide", function (b) { (b = a.scayt) && b.setMarkupPaused && b.setMarkupPaused(!1) })
            }, parseConfig: function (a) {
                var f =
                    CKEDITOR.plugins.scayt; f.replaceOldOptionsNames(a.config); "boolean" !== typeof a.config.scayt_autoStartup && (a.config.scayt_autoStartup = !1); f.state.scayt[a.name] = a.config.scayt_autoStartup; "boolean" !== typeof a.config.grayt_autoStartup && (a.config.grayt_autoStartup = !1); "boolean" !== typeof a.config.scayt_inlineModeImmediateMarkup && (a.config.scayt_inlineModeImmediateMarkup = !1); f.state.grayt[a.name] = a.config.grayt_autoStartup; a.config.scayt_contextCommands || (a.config.scayt_contextCommands = "ignoreall|add");
                a.config.scayt_contextMenuItemsOrder || (a.config.scayt_contextMenuItemsOrder = "suggest|moresuggest|control"); a.config.scayt_sLang || (a.config.scayt_sLang = "en_US"); if (void 0 === a.config.scayt_maxSuggestions || "number" != typeof a.config.scayt_maxSuggestions || 0 > a.config.scayt_maxSuggestions) a.config.scayt_maxSuggestions = 3; if (void 0 === a.config.scayt_minWordLength || "number" != typeof a.config.scayt_minWordLength || 1 > a.config.scayt_minWordLength) a.config.scayt_minWordLength = 3; if (void 0 === a.config.scayt_customDictionaryIds ||
                    "string" !== typeof a.config.scayt_customDictionaryIds) a.config.scayt_customDictionaryIds = ""; if (void 0 === a.config.scayt_userDictionaryName || "string" !== typeof a.config.scayt_userDictionaryName) a.config.scayt_userDictionaryName = null; if ("string" === typeof a.config.scayt_uiTabs && 3 === a.config.scayt_uiTabs.split(",").length) {
                        var e = [], b = []; a.config.scayt_uiTabs = a.config.scayt_uiTabs.split(","); CKEDITOR.tools.search(a.config.scayt_uiTabs, function (a) {
                            1 === Number(a) || 0 === Number(a) ? (b.push(!0), e.push(Number(a))) :
                            b.push(!1)
                        }); null === CKEDITOR.tools.search(b, !1) ? a.config.scayt_uiTabs = e : a.config.scayt_uiTabs = [1, 1, 1]
                    } else a.config.scayt_uiTabs = [1, 1, 1]; "string" != typeof a.config.scayt_serviceProtocol && (a.config.scayt_serviceProtocol = null); "string" != typeof a.config.scayt_serviceHost && (a.config.scayt_serviceHost = null); "string" != typeof a.config.scayt_servicePort && (a.config.scayt_servicePort = null); "string" != typeof a.config.scayt_servicePath && (a.config.scayt_servicePath = null); a.config.scayt_moreSuggestions || (a.config.scayt_moreSuggestions =
                        "on"); "string" !== typeof a.config.scayt_customerId && (a.config.scayt_customerId = "1:WvF0D4-UtPqN1-43nkD4-NKvUm2-daQqk3-LmNiI-z7Ysb4-mwry24-T8YrS3-Q2tpq2"); "string" !== typeof a.config.scayt_customPunctuation && (a.config.scayt_customPunctuation = "-"); "string" !== typeof a.config.scayt_srcUrl && (f = document.location.protocol, f = -1 != f.search(/https?:/) ? f : "http:", a.config.scayt_srcUrl = f + "//svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js"); "boolean" !== typeof CKEDITOR.config.scayt_handleCheckDirty && (CKEDITOR.config.scayt_handleCheckDirty =
                            !0); "boolean" !== typeof CKEDITOR.config.scayt_handleUndoRedo && (CKEDITOR.config.scayt_handleUndoRedo = !0); CKEDITOR.config.scayt_handleUndoRedo = CKEDITOR.plugins.undo ? CKEDITOR.config.scayt_handleUndoRedo : !1; a.config.scayt_ignoreAllCapsWords && "boolean" !== typeof a.config.scayt_ignoreAllCapsWords && (a.config.scayt_ignoreAllCapsWords = !1); a.config.scayt_ignoreDomainNames && "boolean" !== typeof a.config.scayt_ignoreDomainNames && (a.config.scayt_ignoreDomainNames = !1); a.config.scayt_ignoreWordsWithMixedCases && "boolean" !==
                                typeof a.config.scayt_ignoreWordsWithMixedCases && (a.config.scayt_ignoreWordsWithMixedCases = !1); a.config.scayt_ignoreWordsWithNumbers && "boolean" !== typeof a.config.scayt_ignoreWordsWithNumbers && (a.config.scayt_ignoreWordsWithNumbers = !1); if (a.config.scayt_disableOptionsStorage) {
                                    var f = CKEDITOR.tools.isArray(a.config.scayt_disableOptionsStorage) ? a.config.scayt_disableOptionsStorage : "string" === typeof a.config.scayt_disableOptionsStorage ? [a.config.scayt_disableOptionsStorage] : void 0, d = "all options lang ignore-all-caps-words ignore-domain-names ignore-words-with-mixed-cases ignore-words-with-numbers".split(" "),
                                    l = ["lang", "ignore-all-caps-words", "ignore-domain-names", "ignore-words-with-mixed-cases", "ignore-words-with-numbers"], h = CKEDITOR.tools.search, m = CKEDITOR.tools.indexOf; a.config.scayt_disableOptionsStorage = function (a) { for (var b = [], e = 0; e < a.length; e++) { var f = a[e], r = !!h(a, "options"); if (!h(d, f) || r && h(l, function (a) { if ("lang" === a) return !1 })) return; h(l, f) && l.splice(m(l, f), 1); if ("all" === f || r && h(a, "lang")) return []; "options" === f && (l = ["lang"]) } return b = b.concat(l) }(f)
                                }
            }, addRule: function (a) {
                var f = CKEDITOR.plugins.scayt,
                e = a.dataProcessor, b = e && e.htmlFilter, d = a._.elementsPath && a._.elementsPath.filters, e = e && e.dataFilter, l = a.addRemoveFormatFilter, h = function (b) { if (a.scayt && (b.hasAttribute(f.options.data_attribute_name) || b.hasAttribute(f.options.problem_grammar_data_attribute))) return !1 }, m = function (b) { var d = !0; a.scayt && (b.hasAttribute(f.options.data_attribute_name) || b.hasAttribute(f.options.problem_grammar_data_attribute)) && (d = !1); return d }; d && d.push(h); e && e.addRules({
                    elements: {
                        span: function (a) {
                            var b = a.hasClass(f.options.misspelled_word_class) &&
                                a.attributes[f.options.data_attribute_name], d = a.hasClass(f.options.problem_grammar_class) && a.attributes[f.options.problem_grammar_data_attribute]; f && (b || d) && delete a.name; return a
                        }
                    }
                }); b && b.addRules({ elements: { span: function (a) { var b = a.hasClass(f.options.misspelled_word_class) && a.attributes[f.options.data_attribute_name], d = a.hasClass(f.options.problem_grammar_class) && a.attributes[f.options.problem_grammar_data_attribute]; f && (b || d) && delete a.name; return a } } }); l && l.call(a, m)
            }, scaytMenuDefinition: function (a) {
                var f =
                    this, e = CKEDITOR.plugins.scayt; a = a.scayt; return {
                        scayt: {
                            scayt_ignore: { label: a.getLocal("btn_ignore"), group: "scayt_control", order: 1, exec: function (a) { a.scayt.ignoreWord() } }, scayt_ignoreall: { label: a.getLocal("btn_ignoreAll"), group: "scayt_control", order: 2, exec: function (a) { a.scayt.ignoreAllWords() } }, scayt_add: { label: a.getLocal("btn_addWord"), group: "scayt_control", order: 3, exec: function (a) { var d = a.scayt; setTimeout(function () { d.addWordToUserDictionary() }, 10) } }, scayt_option: {
                                label: a.getLocal("btn_options"),
                                group: "scayt_control", order: 4, exec: function (a) { a.scayt.tabToOpen = "options"; e.openDialog(f.dialogName, a) }, verification: function (a) { return 1 == a.config.scayt_uiTabs[0] ? !0 : !1 }
                            }, scayt_language: { label: a.getLocal("btn_langs"), group: "scayt_control", order: 5, exec: function (a) { a.scayt.tabToOpen = "langs"; e.openDialog(f.dialogName, a) }, verification: function (a) { return 1 == a.config.scayt_uiTabs[1] ? !0 : !1 } }, scayt_dictionary: {
                                label: a.getLocal("btn_dictionaries"), group: "scayt_control", order: 6, exec: function (a) {
                                    a.scayt.tabToOpen =
                                    "dictionaries"; e.openDialog(f.dialogName, a)
                                }, verification: function (a) { return 1 == a.config.scayt_uiTabs[2] ? !0 : !1 }
                            }, scayt_about: { label: a.getLocal("btn_about"), group: "scayt_control", order: 7, exec: function (a) { a.scayt.tabToOpen = "about"; e.openDialog(f.dialogName, a) } }
                        }, grayt: {
                            grayt_problemdescription: { label: "Grammar problem description", group: "grayt_description", order: 1, state: CKEDITOR.TRISTATE_DISABLED, exec: function (a) { } }, grayt_ignore: { label: a.getLocal("btn_ignore"), group: "grayt_control", order: 2, exec: function (a) { a.scayt.ignorePhrase() } },
                            grayt_ignoreall: { label: a.getLocal("btn_ignoreAll"), group: "grayt_control", order: 3, exec: function (a) { a.scayt.ignoreAllPhrases() } }
                        }
                    }
            }, buildSuggestionMenuItems: function (a, f, e) {
                var b = {}, d = {}, l = e ? "word" : "phrase", h = e ? "startGrammarCheck" : "startSpellCheck", m = a.scayt; if (0 < f.length && "no_any_suggestions" !== f[0]) if (e) for (e = 0; e < f.length; e++) {
                    var c = "scayt_suggest_" + CKEDITOR.plugins.scayt.suggestions[e].replace(" ", "_"); a.addCommand(c, this.createCommand(CKEDITOR.plugins.scayt.suggestions[e], l, h)); e < a.config.scayt_maxSuggestions ?
                        (a.addMenuItem(c, { label: f[e], command: c, group: "scayt_suggest", order: e + 1 }), b[c] = CKEDITOR.TRISTATE_OFF) : (a.addMenuItem(c, { label: f[e], command: c, group: "scayt_moresuggest", order: e + 1 }), d[c] = CKEDITOR.TRISTATE_OFF, "on" === a.config.scayt_moreSuggestions && (a.addMenuItem("scayt_moresuggest", { label: m.getLocal("btn_moreSuggestions"), group: "scayt_moresuggest", order: 10, getItems: function () { return d } }), b.scayt_moresuggest = CKEDITOR.TRISTATE_OFF))
                } else for (e = 0; e < f.length; e++)c = "grayt_suggest_" + CKEDITOR.plugins.scayt.suggestions[e].replace(" ",
                    "_"), a.addCommand(c, this.createCommand(CKEDITOR.plugins.scayt.suggestions[e], l, h)), a.addMenuItem(c, { label: f[e], command: c, group: "grayt_suggest", order: e + 1 }), b[c] = CKEDITOR.TRISTATE_OFF; else b.no_scayt_suggest = CKEDITOR.TRISTATE_DISABLED, a.addCommand("no_scayt_suggest", { exec: function () { } }), a.addMenuItem("no_scayt_suggest", { label: m.getLocal("btn_noSuggestions") || "no_scayt_suggest", command: "no_scayt_suggest", group: "scayt_suggest", order: 0 }); return b
            }, menuGenerator: function (a, f) {
                var e = a.scayt, b = this.scaytMenuDefinition(a),
                d = {}, l = a.config.scayt_contextCommands.split("|"), h = f.getAttribute(e.getLangAttribute()) || e.getLang(), m, c, k, g; c = e.isScaytNode(f); k = e.isGraytNode(f); c ? (b = b.scayt, m = f.getAttribute(e.getScaytNodeAttributeName()), e.fire("getSuggestionsList", { lang: h, word: m }), d = this.buildSuggestionMenuItems(a, CKEDITOR.plugins.scayt.suggestions, c)) : k && (b = b.grayt, d = f.getAttribute(e.getGraytNodeAttributeName()), e.getGraytNodeRuleAttributeName ? (m = f.getAttribute(e.getGraytNodeRuleAttributeName()), e.getProblemDescriptionText(d,
                    m, h)) : e.getProblemDescriptionText(d, h), g = e.getProblemDescriptionText(d, m, h), b.grayt_problemdescription && g && (g = g.replace(/([.!?])\s/g, "$1\x3cbr\x3e"), b.grayt_problemdescription.label = g), e.fire("getGrammarSuggestionsList", { lang: h, phrase: d, rule: m }), d = this.buildSuggestionMenuItems(a, CKEDITOR.plugins.scayt.suggestions, c)); if (c && "off" == a.config.scayt_contextCommands) return d; for (var n in b) c && -1 == CKEDITOR.tools.indexOf(l, n.replace("scayt_", "")) && "all" != a.config.scayt_contextCommands || k && "grayt_problemdescription" !==
                        n && -1 == CKEDITOR.tools.indexOf(l, n.replace("grayt_", "")) && "all" != a.config.scayt_contextCommands || (d[n] = "undefined" != typeof b[n].state ? b[n].state : CKEDITOR.TRISTATE_OFF, "function" !== typeof b[n].verification || b[n].verification(a) || delete d[n], a.addCommand(n, { exec: b[n].exec }), a.addMenuItem(n, { label: a.lang.scayt[b[n].label] || b[n].label, command: n, group: b[n].group, order: b[n].order })); return d
            }, createCommand: function (a, f, e) {
                return {
                    exec: function (b) {
                        b = b.scayt; var d = {}; d[f] = a; b.replaceSelectionNode(d); "startGrammarCheck" ===
                            e && b.removeMarkupInSelectionNode({ grammarOnly: !0 }); b.fire(e)
                    }
                }
            }
        }), CKEDITOR.plugins.scayt = {
            charsToObserve: [{ charName: "cke-fillingChar", charCode: function () { var a = CKEDITOR.version, f = [4, 5, 6], e = String.fromCharCode(8203), b = Array(8).join(e), d, l; if (!a) return e; for (var a = a.split("."), h = 0; h < f.length; h++) { d = f[h]; l = Number(a[h]); if (l > d) return b; if (l < d) break } return e }() }], state: { scayt: {}, grayt: {} }, warningCounter: 0, suggestions: [], options: {
                disablingCommandExec: { source: !0, newpage: !0, templates: !0 }, data_attribute_name: "data-scayt-word",
                misspelled_word_class: "scayt-misspell-word", problem_grammar_data_attribute: "data-grayt-phrase", problem_grammar_class: "gramm-problem"
            }, backCompatibilityMap: { scayt_service_protocol: "scayt_serviceProtocol", scayt_service_host: "scayt_serviceHost", scayt_service_port: "scayt_servicePort", scayt_service_path: "scayt_servicePath", scayt_customerid: "scayt_customerId" }, openDialog: function (a, f) { var e = f.scayt; e.isAllModulesReady && !1 === e.isAllModulesReady() || (f.lockSelection(), f.openDialog(a)) }, alarmCompatibilityMessage: function () {
                5 >
                this.warningCounter && (console.warn("You are using the latest version of SCAYT plugin for CKEditor with the old application version. In order to have access to the newest features, it is recommended to upgrade the application version to latest one as well. Contact us for more details at support@webspellchecker.net."), this.warningCounter += 1)
            }, isNewUdSupported: function (a) { return a.getUserDictionary ? !0 : !1 }, reloadMarkup: function (a) {
                var f; a && (f = a.getScaytLangList(), a.reloadMarkup ? a.reloadMarkup() : (this.alarmCompatibilityMessage(),
                    f && f.ltr && f.rtl && a.fire("startSpellCheck, startGrammarCheck")))
            }, replaceOldOptionsNames: function (a) { for (var f in a) f in this.backCompatibilityMap && (a[this.backCompatibilityMap[f]] = a[f], delete a[f]) }, createScayt: function (a) {
                var f = this, e = CKEDITOR.plugins.scayt; this.loadScaytLibrary(a, function (a) {
                    function d(a) { return new SCAYT.CKSCAYT(a, function () { }, function () { }) } var l; a.window && (l = "BODY" == a.editable().$.nodeName ? a.window.getFrame() : a.editable()); if (l) {
                        l = {
                            lang: a.config.scayt_sLang, container: l.$, customDictionary: a.config.scayt_customDictionaryIds,
                            userDictionaryName: a.config.scayt_userDictionaryName, localization: a.langCode, customer_id: a.config.scayt_customerId, customPunctuation: a.config.scayt_customPunctuation, debug: a.config.scayt_debug, data_attribute_name: f.options.data_attribute_name, misspelled_word_class: f.options.misspelled_word_class, problem_grammar_data_attribute: f.options.problem_grammar_data_attribute, problem_grammar_class: f.options.problem_grammar_class, "options-to-restore": a.config.scayt_disableOptionsStorage, focused: a.editable().hasFocus,
                            ignoreElementsRegex: a.config.scayt_elementsToIgnore, ignoreGraytElementsRegex: a.config.grayt_elementsToIgnore, minWordLength: a.config.scayt_minWordLength, graytAutoStartup: a.config.grayt_autoStartup, charsToObserve: e.charsToObserve
                        }; a.config.scayt_serviceProtocol && (l.service_protocol = a.config.scayt_serviceProtocol); a.config.scayt_serviceHost && (l.service_host = a.config.scayt_serviceHost); a.config.scayt_servicePort && (l.service_port = a.config.scayt_servicePort); a.config.scayt_servicePath && (l.service_path =
                            a.config.scayt_servicePath); "boolean" === typeof a.config.scayt_ignoreAllCapsWords && (l["ignore-all-caps-words"] = a.config.scayt_ignoreAllCapsWords); "boolean" === typeof a.config.scayt_ignoreDomainNames && (l["ignore-domain-names"] = a.config.scayt_ignoreDomainNames); "boolean" === typeof a.config.scayt_ignoreWordsWithMixedCases && (l["ignore-words-with-mixed-cases"] = a.config.scayt_ignoreWordsWithMixedCases); "boolean" === typeof a.config.scayt_ignoreWordsWithNumbers && (l["ignore-words-with-numbers"] = a.config.scayt_ignoreWordsWithNumbers);
                        var h; try { h = d(l) } catch (m) { f.alarmCompatibilityMessage(), delete l.charsToObserve, h = d(l) } h.subscribe("suggestionListSend", function (a) { for (var b = {}, d = [], e = 0; e < a.suggestionList.length; e++)b["word_" + a.suggestionList[e]] || (b["word_" + a.suggestionList[e]] = a.suggestionList[e], d.push(a.suggestionList[e])); CKEDITOR.plugins.scayt.suggestions = d }); h.subscribe("selectionIsChanged", function (c) { a.getSelection().isLocked && "restoreSelection" !== c.action && a.lockSelection(); "restoreSelection" === c.action && a.selectionChange(!0) });
                        h.subscribe("graytStateChanged", function (c) { e.state.grayt[a.name] = c.state }); h.addMarkupHandler && h.addMarkupHandler(function (c) { var d = a.editable(), e = d.getCustomData(c.charName); e && (e.$ = c.node, d.setCustomData(c.charName, e)) }); a.scayt = h; a.fire("scaytButtonState", a.readOnly ? CKEDITOR.TRISTATE_DISABLED : CKEDITOR.TRISTATE_ON)
                    } else e.state.scayt[a.name] = !1
                })
            }, destroy: function (a) { a.scayt && a.scayt.destroy(); delete a.scayt; a.fire("scaytButtonState", CKEDITOR.TRISTATE_OFF) }, loadScaytLibrary: function (a, f) {
                var e,
                b = function () { CKEDITOR.fireOnce("scaytReady"); a.scayt || "function" === typeof f && f(a) }; "undefined" === typeof window.SCAYT || "function" !== typeof window.SCAYT.CKSCAYT ? (e = a.config.scayt_srcUrl, CKEDITOR.scriptLoader.load(e, function (a) { a && b() })) : window.SCAYT && "function" === typeof window.SCAYT.CKSCAYT && b()
            }
        }, CKEDITOR.on("dialogDefinition", function (a) {
            var f = a.data.name; a = a.data.definition.dialog; "scaytDialog" !== f && "checkspell" !== f && (a.on("show", function (a) {
                a = a.sender && a.sender.getParentEditor(); var b = CKEDITOR.plugins.scayt,
                    d = a.scayt; d && b.state.scayt[a.name] && d.setMarkupPaused && d.setMarkupPaused(!0)
            }), a.on("hide", function (a) { a = a.sender && a.sender.getParentEditor(); var b = CKEDITOR.plugins.scayt, d = a.scayt; d && b.state.scayt[a.name] && d.setMarkupPaused && d.setMarkupPaused(!1) })); if ("scaytDialog" === f) a.on("cancel", function (a) { return !1 }, this, null, -1); if ("checkspell" === f) a.on("cancel", function (a) {
                a = a.sender && a.sender.getParentEditor(); var b = CKEDITOR.plugins.scayt, d = a.scayt; d && b.state.scayt[a.name] && d.setMarkupPaused && d.setMarkupPaused(!1);
                a.unlockSelection()
            }, this, null, -2); if ("link" === f) a.on("ok", function (a) { var b = a.sender && a.sender.getParentEditor(); b && setTimeout(function () { b.fire("reloadMarkupScayt", { removeOptions: { removeInside: !0, forceBookmark: !0 }, timeout: 0 }) }, 0) }); if ("replace" === f) a.on("hide", function (a) { a = a.sender && a.sender.getParentEditor(); var b = CKEDITOR.plugins.scayt, d = a.scayt; a && setTimeout(function () { d && (d.fire("removeMarkupInDocument", {}), b.reloadMarkup(d)) }, 0) })
        }), CKEDITOR.on("scaytReady", function () {
            if (!0 === CKEDITOR.config.scayt_handleCheckDirty) {
                var a =
                    CKEDITOR.editor.prototype; a.checkDirty = CKEDITOR.tools.override(a.checkDirty, function (a) { return function () { var b = null, d = this.scayt; if (CKEDITOR.plugins.scayt && CKEDITOR.plugins.scayt.state.scayt[this.name] && this.scayt) { if (b = "ready" == this.status) var f = d.removeMarkupFromString(this.getSnapshot()), d = d.removeMarkupFromString(this._.previousValue), b = b && d !== f } else b = a.call(this); return b } }); a.resetDirty = CKEDITOR.tools.override(a.resetDirty, function (a) {
                        return function () {
                            var b = this.scayt; CKEDITOR.plugins.scayt &&
                                CKEDITOR.plugins.scayt.state.scayt[this.name] && this.scayt ? this._.previousValue = b.removeMarkupFromString(this.getSnapshot()) : a.call(this)
                        }
                    })
            } if (!0 === CKEDITOR.config.scayt_handleUndoRedo) {
                var a = CKEDITOR.plugins.undo.Image.prototype, f = "function" == typeof a.equalsContent ? "equalsContent" : "equals"; a[f] = CKEDITOR.tools.override(a[f], function (a) {
                    return function (b) {
                        var d = b.editor.scayt, f = this.contents, h = b.contents, m = null; CKEDITOR.plugins.scayt && CKEDITOR.plugins.scayt.state.scayt[b.editor.name] && b.editor.scayt &&
                            (this.contents = d.removeMarkupFromString(f) || "", b.contents = d.removeMarkupFromString(h) || ""); m = a.apply(this, arguments); this.contents = f; b.contents = h; return m
                    }
                })
            }
        }), function () {
            var a = { preserveState: !0, editorFocus: !1, readOnly: 1, exec: function (a) { this.toggleState(); this.refresh(a) }, refresh: function (a) { if (a.document) { var e = this.state == CKEDITOR.TRISTATE_ON ? "attachClass" : "removeClass"; a.editable()[e]("cke_show_borders") } } }; CKEDITOR.plugins.add("showborders", {
                modes: { wysiwyg: 1 }, onLoad: function () {
                    var a; a = (CKEDITOR.env.ie6Compat ?
                        [".%1 table.%2,", ".%1 table.%2 td, .%1 table.%2 th", "{", "border : #d3d3d3 1px dotted", "}"] : ".%1 table.%2,;.%1 table.%2 \x3e tr \x3e td, .%1 table.%2 \x3e tr \x3e th,;.%1 table.%2 \x3e tbody \x3e tr \x3e td, .%1 table.%2 \x3e tbody \x3e tr \x3e th,;.%1 table.%2 \x3e thead \x3e tr \x3e td, .%1 table.%2 \x3e thead \x3e tr \x3e th,;.%1 table.%2 \x3e tfoot \x3e tr \x3e td, .%1 table.%2 \x3e tfoot \x3e tr \x3e th;{;border : #d3d3d3 1px dotted;}".split(";")).join("").replace(/%2/g, "cke_show_border").replace(/%1/g,
                            "cke_show_borders "); CKEDITOR.addCss(a)
                }, init: function (f) {
                    var e = f.addCommand("showborders", a); e.canUndo = !1; !1 !== f.config.startupShowBorders && e.setState(CKEDITOR.TRISTATE_ON); f.on("mode", function () { e.state != CKEDITOR.TRISTATE_DISABLED && e.refresh(f) }, null, null, 100); f.on("contentDom", function () { e.state != CKEDITOR.TRISTATE_DISABLED && e.refresh(f) }); f.on("removeFormatCleanup", function (a) {
                        a = a.data; f.getCommand("showborders").state == CKEDITOR.TRISTATE_ON && a.is("table") && (!a.hasAttribute("border") || 0 >= parseInt(a.getAttribute("border"),
                            10)) && a.addClass("cke_show_border")
                    })
                }, afterInit: function (a) { var e = a.dataProcessor; a = e && e.dataFilter; e = e && e.htmlFilter; a && a.addRules({ elements: { table: function (a) { a = a.attributes; var d = a["class"], e = parseInt(a.border, 10); e && !(0 >= e) || d && -1 != d.indexOf("cke_show_border") || (a["class"] = (d || "") + " cke_show_border") } } }); e && e.addRules({ elements: { table: function (a) { a = a.attributes; var d = a["class"]; d && (a["class"] = d.replace("cke_show_border", "").replace(/\s{2}/, " ").replace(/^\s+|\s+$/, "")) } } }) }
            }); CKEDITOR.on("dialogDefinition",
                function (a) {
                    var e = a.data.name; if ("table" == e || "tableProperties" == e) if (a = a.data.definition, e = a.getContents("info").get("txtBorder"), e.commit = CKEDITOR.tools.override(e.commit, function (a) { return function (d, e) { a.apply(this, arguments); var f = parseInt(this.getValue(), 10); e[!f || 0 >= f ? "addClass" : "removeClass"]("cke_show_border") } }), a = (a = a.getContents("advanced")) && a.get("advCSSClasses")) a.setup = CKEDITOR.tools.override(a.setup, function (a) {
                        return function () {
                            a.apply(this, arguments); this.setValue(this.getValue().replace(/cke_show_border/,
                                ""))
                        }
                    }), a.commit = CKEDITOR.tools.override(a.commit, function (a) { return function (d, e) { a.apply(this, arguments); parseInt(e.getAttribute("border"), 10) || e.addClass("cke_show_border") } })
                })
        }(), function () {
            CKEDITOR.plugins.add("sourcearea", {
                init: function (f) {
                    function e() { var a = d && this.equals(CKEDITOR.document.getActive()); this.hide(); this.setStyle("height", this.getParent().$.clientHeight + "px"); this.setStyle("width", this.getParent().$.clientWidth + "px"); this.show(); a && this.focus() } if (f.elementMode != CKEDITOR.ELEMENT_MODE_INLINE) {
                        var b =
                            CKEDITOR.plugins.sourcearea; f.addMode("source", function (b) {
                                var d = f.ui.space("contents").getDocument().createElement("textarea"); d.setStyles(CKEDITOR.tools.extend({ width: CKEDITOR.env.ie7Compat ? "99%" : "100%", height: "100%", resize: "none", outline: "none", "text-align": "left" }, CKEDITOR.tools.cssVendorPrefix("tab-size", f.config.sourceAreaTabSize || 4))); d.setAttribute("dir", "ltr"); d.addClass("cke_source").addClass("cke_reset").addClass("cke_enable_context_menu"); f.ui.space("contents").append(d); d = f.editable(new a(f,
                                    d)); d.setData(f.getData(1)); CKEDITOR.env.ie && (d.attachListener(f, "resize", e, d), d.attachListener(CKEDITOR.document.getWindow(), "resize", e, d), CKEDITOR.tools.setTimeout(e, 0, d)); f.fire("ariaWidget", this); b()
                            }); f.addCommand("source", b.commands.source); f.ui.addButton && f.ui.addButton("Source", { label: f.lang.sourcearea.toolbar, command: "source", toolbar: "mode,10" }); f.on("mode", function () { f.getCommand("source").setState("source" == f.mode ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF) }); var d = CKEDITOR.env.ie && 9 ==
                                CKEDITOR.env.version
                    }
                }
            }); var a = CKEDITOR.tools.createClass({ base: CKEDITOR.editable, proto: { setData: function (a) { this.setValue(a); this.status = "ready"; this.editor.fire("dataReady") }, getData: function () { return this.getValue() }, insertHtml: function () { }, insertElement: function () { }, insertText: function () { }, setReadOnly: function (a) { this[(a ? "set" : "remove") + "Attribute"]("readOnly", "readonly") }, detach: function () { a.baseProto.detach.call(this); this.clearCustomData(); this.remove() } } })
        }(), CKEDITOR.plugins.sourcearea = {
            commands: {
                source: {
                    modes: {
                        wysiwyg: 1,
                        source: 1
                    }, editorFocus: !1, readOnly: 1, exec: function (a) { "wysiwyg" == a.mode && a.fire("saveSnapshot"); a.getCommand("source").setState(CKEDITOR.TRISTATE_DISABLED); a.setMode("source" == a.mode ? "wysiwyg" : "source") }, canUndo: !1
                }
            }
        }, CKEDITOR.plugins.add("specialchar", {
            availableLangs: {
                af: 1, ar: 1, az: 1, bg: 1, ca: 1, cs: 1, cy: 1, da: 1, de: 1, "de-ch": 1, el: 1, en: 1, "en-au": 1, "en-ca": 1, "en-gb": 1, eo: 1, es: 1, "es-mx": 1, et: 1, eu: 1, fa: 1, fi: 1, fr: 1, "fr-ca": 1, gl: 1, he: 1, hr: 1, hu: 1, id: 1, it: 1, ja: 1, km: 1, ko: 1, ku: 1, lt: 1, lv: 1, nb: 1, nl: 1, no: 1, oc: 1, pl: 1,
                pt: 1, "pt-br": 1, ro: 1, ru: 1, si: 1, sk: 1, sl: 1, sq: 1, sr: 1, "sr-latn": 1, sv: 1, th: 1, tr: 1, tt: 1, ug: 1, uk: 1, vi: 1, zh: 1, "zh-cn": 1
            }, requires: "dialog", init: function (a) {
                var f = this; CKEDITOR.dialog.add("specialchar", this.path + "dialogs/specialchar.js"); a.addCommand("specialchar", {
                    exec: function () {
                        var e = a.langCode, e = f.availableLangs[e] ? e : f.availableLangs[e.replace(/-.*/, "")] ? e.replace(/-.*/, "") : "en"; CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(f.path + "dialogs/lang/" + e + ".js"), function () {
                            CKEDITOR.tools.extend(a.lang.specialchar,
                                f.langEntries[e]); a.openDialog("specialchar")
                        })
                    }, modes: { wysiwyg: 1 }, canUndo: !1
                }); a.ui.addButton && a.ui.addButton("SpecialChar", { label: a.lang.specialchar.toolbar, command: "specialchar", toolbar: "insert,50" })
            }
        }), CKEDITOR.config.specialChars = "! \x26quot; # $ % \x26amp; ' ( ) * + - . / 0 1 2 3 4 5 6 7 8 9 : ; \x26lt; \x3d \x26gt; ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ ] ^ _ ` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~ \x26euro; \x26lsquo; \x26rsquo; \x26ldquo; \x26rdquo; \x26ndash; \x26mdash; \x26iexcl; \x26cent; \x26pound; \x26curren; \x26yen; \x26brvbar; \x26sect; \x26uml; \x26copy; \x26ordf; \x26laquo; \x26not; \x26reg; \x26macr; \x26deg; \x26sup2; \x26sup3; \x26acute; \x26micro; \x26para; \x26middot; \x26cedil; \x26sup1; \x26ordm; \x26raquo; \x26frac14; \x26frac12; \x26frac34; \x26iquest; \x26Agrave; \x26Aacute; \x26Acirc; \x26Atilde; \x26Auml; \x26Aring; \x26AElig; \x26Ccedil; \x26Egrave; \x26Eacute; \x26Ecirc; \x26Euml; \x26Igrave; \x26Iacute; \x26Icirc; \x26Iuml; \x26ETH; \x26Ntilde; \x26Ograve; \x26Oacute; \x26Ocirc; \x26Otilde; \x26Ouml; \x26times; \x26Oslash; \x26Ugrave; \x26Uacute; \x26Ucirc; \x26Uuml; \x26Yacute; \x26THORN; \x26szlig; \x26agrave; \x26aacute; \x26acirc; \x26atilde; \x26auml; \x26aring; \x26aelig; \x26ccedil; \x26egrave; \x26eacute; \x26ecirc; \x26euml; \x26igrave; \x26iacute; \x26icirc; \x26iuml; \x26eth; \x26ntilde; \x26ograve; \x26oacute; \x26ocirc; \x26otilde; \x26ouml; \x26divide; \x26oslash; \x26ugrave; \x26uacute; \x26ucirc; \x26uuml; \x26yacute; \x26thorn; \x26yuml; \x26OElig; \x26oelig; \x26#372; \x26#374 \x26#373 \x26#375; \x26sbquo; \x26#8219; \x26bdquo; \x26hellip; \x26trade; \x26#9658; \x26bull; \x26rarr; \x26rArr; \x26hArr; \x26diams; \x26asymp;".split(" "),
        function () {
            CKEDITOR.plugins.add("stylescombo", {
                requires: "richcombo", init: function (a) {
                    var f = a.config, e = a.lang.stylescombo, b = {}, d = [], l = []; a.on("stylesSet", function (e) {
                        if (e = e.data.styles) {
                            for (var m, c, k, g = 0, n = e.length; g < n; g++)(m = e[g], a.blockless && m.element in CKEDITOR.dtd.$block || "string" == typeof m.type && !CKEDITOR.style.customHandlers[m.type] || (c = m.name, m = new CKEDITOR.style(m), a.filter.customConfig && !a.filter.check(m))) || (m._name = c, m._.enterMode = f.enterMode, m._.type = k = m.assignedTo || m.type, m._.weight =
                                g + 1E3 * (k == CKEDITOR.STYLE_OBJECT ? 1 : k == CKEDITOR.STYLE_BLOCK ? 2 : 3), b[c] = m, d.push(m), l.push(m)); d.sort(function (a, b) { return a._.weight - b._.weight })
                        }
                    }); a.on("stylesRemove", function (d) { d = d.data && d.data.type; var e = void 0 === d, c; for (c in b) { var f = b[c]; (e || f.type === d) && a.removeStyle(f) } }); a.ui.addRichCombo("Styles", {
                        label: e.label, title: e.panelTitle, toolbar: "styles,10", allowedContent: l, panel: { css: [CKEDITOR.skin.getPath("editor")].concat(f.contentsCss), multiSelect: !0, attributes: { "aria-label": e.panelTitle } }, init: function () {
                            var a,
                            b, c, f, g, l; g = 0; for (l = d.length; g < l; g++)a = d[g], b = a._name, f = a._.type, f != c && (this.startGroup(e["panelTitle" + String(f)]), c = f), this.add(b, a.type == CKEDITOR.STYLE_OBJECT ? b : a.buildPreview(), b); this.commit()
                        }, onClick: function (d) { a.focus(); a.fire("saveSnapshot"); d = b[d]; var e = a.elementPath(); if (d.group && d.removeStylesFromSameGroup(a)) a.applyStyle(d); else a[d.checkActive(e, a) ? "removeStyle" : "applyStyle"](d); a.fire("saveSnapshot") }, onRender: function () {
                            a.on("selectionChange", function (d) {
                                var e = this.getValue(); d = d.data.path.elements;
                                for (var c = 0, f = d.length, g; c < f; c++) { g = d[c]; for (var l in b) if (b[l].checkElementRemovable(g, !0, a)) { l != e && this.setValue(l); return } } this.setValue("")
                            }, this)
                        }, onOpen: function () {
                            var d = a.getSelection(), d = d.getSelectedElement() || d.getStartElement() || a.editable(), d = a.elementPath(d), f = [0, 0, 0, 0]; this.showAll(); this.unmarkAll(); for (var c in b) { var k = b[c], g = k._.type; k.checkApplicable(d, a, a.activeFilter) ? f[g]++ : this.hideItem(c); k.checkActive(d, a) && this.mark(c) } f[CKEDITOR.STYLE_BLOCK] || this.hideGroup(e["panelTitle" +
                                String(CKEDITOR.STYLE_BLOCK)]); f[CKEDITOR.STYLE_INLINE] || this.hideGroup(e["panelTitle" + String(CKEDITOR.STYLE_INLINE)]); f[CKEDITOR.STYLE_OBJECT] || this.hideGroup(e["panelTitle" + String(CKEDITOR.STYLE_OBJECT)])
                        }, refresh: function () { var d = a.elementPath(); if (d) { for (var e in b) if (b[e].checkApplicable(d, a, a.activeFilter)) return; this.setState(CKEDITOR.TRISTATE_DISABLED) } }, reset: function () { b = {}; d = [] }
                    })
                }
            })
        }(), function () {
            function a(a) {
                return {
                    editorFocus: !1, canUndo: !1, modes: { wysiwyg: 1 }, exec: function (b) {
                        if (b.editable().hasFocus) {
                            var e =
                                b.getSelection(), f; if (f = (new CKEDITOR.dom.elementPath(e.getCommonAncestor(), e.root)).contains({ td: 1, th: 1 }, 1)) {
                                    var e = b.createRange(), c = CKEDITOR.tools.tryThese(function () { var b = f.getParent().$.cells[f.$.cellIndex + (a ? -1 : 1)]; b.parentNode.parentNode; return b }, function () { var b = f.getParent(), b = b.getAscendant("table").$.rows[b.$.rowIndex + (a ? -1 : 1)]; return b.cells[a ? b.cells.length - 1 : 0] }); if (c || a) if (c) c = new CKEDITOR.dom.element(c), e.moveToElementEditStart(c), e.checkStartOfBlock() && e.checkEndOfBlock() || e.selectNodeContents(c);
                                    else return !0; else { for (var k = f.getAscendant("table").$, c = f.getParent().$.cells, k = new CKEDITOR.dom.element(k.insertRow(-1), b.document), g = 0, n = c.length; g < n; g++)k.append((new CKEDITOR.dom.element(c[g], b.document)).clone(!1, !1)).appendBogus(); e.moveToElementEditStart(k) } e.select(!0); return !0
                                }
                        } return !1
                    }
                }
            } var f = { editorFocus: !1, modes: { wysiwyg: 1, source: 1 } }, e = { exec: function (a) { a.container.focusNext(!0, a.tabIndex) } }, b = { exec: function (a) { a.container.focusPrevious(!0, a.tabIndex) } }; CKEDITOR.plugins.add("tab", {
                init: function (d) {
                    for (var l =
                        !1 !== d.config.enableTabKeyTools, h = d.config.tabSpaces || 0, m = ""; h--;)m += " "; if (m) d.on("key", function (a) { 9 == a.data.keyCode && (d.insertText(m), a.cancel()) }); if (l) d.on("key", function (a) { (9 == a.data.keyCode && d.execCommand("selectNextCell") || a.data.keyCode == CKEDITOR.SHIFT + 9 && d.execCommand("selectPreviousCell")) && a.cancel() }); d.addCommand("blur", CKEDITOR.tools.extend(e, f)); d.addCommand("blurBack", CKEDITOR.tools.extend(b, f)); d.addCommand("selectNextCell", a()); d.addCommand("selectPreviousCell", a(!0))
                }
            })
        }(), CKEDITOR.dom.element.prototype.focusNext =
        function (a, f) {
            var e = void 0 === f ? this.getTabIndex() : f, b, d, l, h, m, c; if (0 >= e) for (m = this.getNextSourceNode(a, CKEDITOR.NODE_ELEMENT); m;) { if (m.isVisible() && 0 === m.getTabIndex()) { l = m; break } m = m.getNextSourceNode(!1, CKEDITOR.NODE_ELEMENT) } else for (m = this.getDocument().getBody().getFirst(); m = m.getNextSourceNode(!1, CKEDITOR.NODE_ELEMENT);) {
                if (!b) if (!d && m.equals(this)) { if (d = !0, a) { if (!(m = m.getNextSourceNode(!0, CKEDITOR.NODE_ELEMENT))) break; b = 1 } } else d && !this.contains(m) && (b = 1); if (m.isVisible() && !(0 > (c = m.getTabIndex()))) {
                    if (b &&
                        c == e) { l = m; break } c > e && (!l || !h || c < h) ? (l = m, h = c) : l || 0 !== c || (l = m, h = c)
                }
            } l && l.focus()
        }, CKEDITOR.dom.element.prototype.focusPrevious = function (a, f) {
            for (var e = void 0 === f ? this.getTabIndex() : f, b, d, l, h = 0, m, c = this.getDocument().getBody().getLast(); c = c.getPreviousSourceNode(!1, CKEDITOR.NODE_ELEMENT);) {
                if (!b) if (!d && c.equals(this)) { if (d = !0, a) { if (!(c = c.getPreviousSourceNode(!0, CKEDITOR.NODE_ELEMENT))) break; b = 1 } } else d && !this.contains(c) && (b = 1); if (c.isVisible() && !(0 > (m = c.getTabIndex()))) if (0 >= e) {
                    if (b && 0 === m) { l = c; break } m >
                        h && (l = c, h = m)
                } else { if (b && m == e) { l = c; break } m < e && (!l || m > h) && (l = c, h = m) }
            } l && l.focus()
        }, CKEDITOR.plugins.add("table", {
            requires: "dialog", init: function (a) {
                function f(a) { return CKEDITOR.tools.extend(a || {}, { contextSensitive: 1, refresh: function (a, b) { this.setState(b.contains("table", 1) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED) } }) } if (!a.blockless) {
                    var e = a.lang.table; a.addCommand("table", new CKEDITOR.dialogCommand("table", {
                        context: "table", allowedContent: "table{width,height,border-collapse}[align,border,cellpadding,cellspacing,summary];caption tbody thead tfoot;th td tr[scope];td{border*,background-color,vertical-align,width,height}[colspan,rowspan];" +
                            (a.plugins.dialogadvtab ? "table" + a.plugins.dialogadvtab.allowedContent() : ""), requiredContent: "table", contentTransformations: [["table{width}: sizeToStyle", "table[width]: sizeToAttribute"], ["td: splitBorderShorthand"], [{
                                element: "table", right: function (a) {
                                    if (a.styles) {
                                        var d; if (a.styles.border) d = CKEDITOR.tools.style.parse.border(a.styles.border); else if (CKEDITOR.env.ie && 8 === CKEDITOR.env.version) {
                                            var e = a.styles; e["border-left"] && e["border-left"] === e["border-right"] && e["border-right"] === e["border-top"] &&
                                                e["border-top"] === e["border-bottom"] && (d = CKEDITOR.tools.style.parse.border(e["border-top"]))
                                        } d && d.style && "solid" === d.style && d.width && 0 !== parseFloat(d.width) && (a.attributes.border = 1); "collapse" == a.styles["border-collapse"] && (a.attributes.cellspacing = 0)
                                    }
                                }
                            }]]
                    })); a.addCommand("tableProperties", new CKEDITOR.dialogCommand("tableProperties", f())); a.addCommand("tableDelete", f({
                        exec: function (a) {
                            var d = a.elementPath().contains("table", 1); if (d) {
                                var e = d.getParent(), f = a.editable(); 1 != e.getChildCount() || e.is("td",
                                    "th") || e.equals(f) || (d = e); a = a.createRange(); a.moveToPosition(d, CKEDITOR.POSITION_BEFORE_START); d.remove(); a.select()
                            }
                        }
                    })); a.ui.addButton && a.ui.addButton("Table", { label: e.toolbar, command: "table", toolbar: "insert,30" }); CKEDITOR.dialog.add("table", this.path + "dialogs/table.js"); CKEDITOR.dialog.add("tableProperties", this.path + "dialogs/table.js"); a.addMenuItems && a.addMenuItems({
                        table: { label: e.menu, command: "tableProperties", group: "table", order: 5 }, tabledelete: {
                            label: e.deleteTable, command: "tableDelete", group: "table",
                            order: 1
                        }
                    }); a.on("doubleclick", function (a) { a.data.element.is("table") && (a.data.dialog = "tableProperties") }); a.contextMenu && a.contextMenu.addListener(function () { return { tabledelete: CKEDITOR.TRISTATE_OFF, table: CKEDITOR.TRISTATE_OFF } })
                }
            }
        }), function () {
            function a(a, b) {
                function c(a) { return b ? b.contains(a) && a.getAscendant("table", !0).equals(b) : !0 } function d(a) {
                    var b = /^(?:td|th)$/; 0 < e.length || a.type != CKEDITOR.NODE_ELEMENT || !b.test(a.getName()) || a.getCustomData("selected_cell") || (CKEDITOR.dom.element.setMarker(f,
                        a, "selected_cell", !0), e.push(a))
                } var e = [], f = {}; if (!a) return e; for (var g = a.getRanges(), k = 0; k < g.length; k++) { var h = g[k]; if (h.collapsed) (h = h.getCommonAncestor().getAscendant({ td: 1, th: 1 }, !0)) && c(h) && e.push(h); else { var h = new CKEDITOR.dom.walker(h), l; for (h.guard = d; l = h.next();)l.type == CKEDITOR.NODE_ELEMENT && l.is(CKEDITOR.dtd.table) || (l = l.getAscendant({ td: 1, th: 1 }, !0)) && !l.getCustomData("selected_cell") && c(l) && (CKEDITOR.dom.element.setMarker(f, l, "selected_cell", !0), e.push(l)) } } CKEDITOR.dom.element.clearAllMarkers(f);
                return e
            } function f(b, c) {
                for (var d = p(b) ? b : a(b), e = d[0], f = e.getAscendant("table"), e = e.getDocument(), g = d[0].getParent(), k = g.$.rowIndex, d = d[d.length - 1], h = d.getParent().$.rowIndex + d.$.rowSpan - 1, d = new CKEDITOR.dom.element(f.$.rows[h]), k = c ? k : h, g = c ? g : d, d = CKEDITOR.tools.buildTableMap(f), f = d[k], k = c ? d[k - 1] : d[k + 1], d = d[0].length, e = e.createElement("tr"), h = 0; f[h] && h < d; h++) {
                    var l; 1 < f[h].rowSpan && k && f[h] == k[h] ? (l = f[h], l.rowSpan += 1) : (l = (new CKEDITOR.dom.element(f[h])).clone(), l.removeAttribute("rowSpan"), l.appendBogus(),
                        e.append(l), l = l.$); h += l.colSpan - 1
                } c ? e.insertBefore(g) : e.insertAfter(g); return e
            } function e(b) {
                if (b instanceof CKEDITOR.dom.selection) {
                    var c = b.getRanges(), d = a(b), f = d[0].getAscendant("table"), g = CKEDITOR.tools.buildTableMap(f), k = d[0].getParent().$.rowIndex, d = d[d.length - 1], h = d.getParent().$.rowIndex + d.$.rowSpan - 1, d = []; b.reset(); for (b = k; b <= h; b++) {
                        for (var l = g[b], m = new CKEDITOR.dom.element(f.$.rows[b]), n = 0; n < l.length; n++) {
                            var p = new CKEDITOR.dom.element(l[n]), r = p.getParent().$.rowIndex; 1 == p.$.rowSpan ? p.remove() :
                                (--p.$.rowSpan, r == b && (r = g[b + 1], r[n - 1] ? p.insertAfter(new CKEDITOR.dom.element(r[n - 1])) : (new CKEDITOR.dom.element(f.$.rows[b + 1])).append(p, 1))); n += p.$.colSpan - 1
                        } d.push(m)
                    } g = f.$.rows; c[0].moveToPosition(f, CKEDITOR.POSITION_BEFORE_START); k = new CKEDITOR.dom.element(g[h + 1] || (0 < k ? g[k - 1] : null) || f.$.parentNode); for (b = d.length; 0 <= b; b--)e(d[b]); return f.$.parentNode ? k : (c[0].select(), null)
                } b instanceof CKEDITOR.dom.element && (f = b.getAscendant("table"), 1 == f.$.rows.length ? f.remove() : b.remove()); return null
            } function b(a) {
                for (var b =
                    a.getParent().$.cells, c = 0, d = 0; d < b.length; d++) { var e = b[d], c = c + e.colSpan; if (e == a.$) break } return c - 1
            } function d(a, c) { for (var d = c ? Infinity : 0, e = 0; e < a.length; e++) { var f = b(a[e]); if (c ? f < d : f > d) d = f } return d } function l(b, c) {
                for (var e = p(b) ? b : a(b), f = e[0].getAscendant("table"), g = d(e, 1), e = d(e), k = c ? g : e, h = CKEDITOR.tools.buildTableMap(f), f = [], g = [], e = [], l = h.length, m = 0; m < l; m++) { var n = c ? h[m][k - 1] : h[m][k + 1]; f.push(h[m][k]); g.push(n) } for (m = 0; m < l; m++)f[m] && (1 < f[m].colSpan && g[m] == f[m] ? (h = f[m], h.colSpan += 1) : (k = new CKEDITOR.dom.element(f[m]),
                    h = k.clone(), h.removeAttribute("colSpan"), h.appendBogus(), h[c ? "insertBefore" : "insertAfter"].call(h, k), e.push(h), h = h.$), m += h.rowSpan - 1); return e
            } function h(b) {
                function c(a) {
                    var b = a.getRanges(), d, e; if (1 !== b.length) return a; b = b[0]; if (b.collapsed || 0 !== b.endOffset) return a; d = b.endContainer; e = d.getName().toLowerCase(); if ("td" !== e && "th" !== e) return a; for ((e = d.getPrevious()) || (e = d.getParent().getPrevious().getLast()); e.type !== CKEDITOR.NODE_TEXT && "br" !== e.getName().toLowerCase();)if (e = e.getLast(), !e) return a;
                    b.setEndAt(e, CKEDITOR.POSITION_BEFORE_END); return b.select()
                } CKEDITOR.env.webkit && !b.isFake && (b = c(b)); var d = b.getRanges(), e = a(b), f = e[0], g = e[e.length - 1], e = f.getAscendant("table"), k = CKEDITOR.tools.buildTableMap(e), h, l, m = []; b.reset(); var n = 0; for (b = k.length; n < b; n++)for (var p = 0, r = k[n].length; p < r; p++)void 0 === h && k[n][p] == f.$ && (h = p), k[n][p] == g.$ && (l = p); for (n = h; n <= l; n++)for (p = 0; p < k.length; p++)g = k[p], f = new CKEDITOR.dom.element(e.$.rows[p]), g = new CKEDITOR.dom.element(g[n]), g.$ && (1 == g.$.colSpan ? g.remove() : --g.$.colSpan,
                    p += g.$.rowSpan - 1, f.$.cells.length || m.push(f)); h = k[0].length - 1 > l ? new CKEDITOR.dom.element(k[0][l + 1]) : h && -1 !== k[0][h - 1].cellIndex ? new CKEDITOR.dom.element(k[0][h - 1]) : new CKEDITOR.dom.element(e.$.parentNode); m.length == b && (d[0].moveToPosition(e, CKEDITOR.POSITION_AFTER_END), d[0].select(), e.remove()); return h
            } function m(a, b) { var c = a.getStartElement().getAscendant({ td: 1, th: 1 }, !0); if (c) { var d = c.clone(); d.appendBogus(); b ? d.insertBefore(c) : d.insertAfter(c) } } function c(b) {
                if (b instanceof CKEDITOR.dom.selection) {
                    var d =
                        b.getRanges(), e = a(b), f = e[0] && e[0].getAscendant("table"), g; a: { var h = 0; g = e.length - 1; for (var l = {}, m, n; m = e[h++];)CKEDITOR.dom.element.setMarker(l, m, "delete_cell", !0); for (h = 0; m = e[h++];)if ((n = m.getPrevious()) && !n.getCustomData("delete_cell") || (n = m.getNext()) && !n.getCustomData("delete_cell")) { CKEDITOR.dom.element.clearAllMarkers(l); g = n; break a } CKEDITOR.dom.element.clearAllMarkers(l); h = e[0].getParent(); (h = h.getPrevious()) ? g = h.getLast() : (h = e[g].getParent(), g = (h = h.getNext()) ? h.getChild(0) : null) } b.reset(); for (b =
                            e.length - 1; 0 <= b; b--)c(e[b]); g ? k(g, !0) : f && (d[0].moveToPosition(f, CKEDITOR.POSITION_BEFORE_START), d[0].select(), f.remove())
                } else b instanceof CKEDITOR.dom.element && (d = b.getParent(), 1 == d.getChildCount() ? d.remove() : b.remove())
            } function k(a, b) { var c = a.getDocument(), d = CKEDITOR.document; CKEDITOR.env.ie && 10 == CKEDITOR.env.version && (d.focus(), c.focus()); c = new CKEDITOR.dom.range(c); c["moveToElementEdit" + (b ? "End" : "Start")](a) || (c.selectNodeContents(a), c.collapse(b ? !1 : !0)); c.select(!0) } function g(a, b, c) {
                a = a[b];
                if ("undefined" == typeof c) return a; for (b = 0; a && b < a.length; b++) { if (c.is && a[b] == c.$) return b; if (b == c) return new CKEDITOR.dom.element(a[b]) } return c.is ? -1 : null
            } function n(b, c, d) {
                var e = a(b), f; if ((c ? 1 != e.length : 2 > e.length) || (f = b.getCommonAncestor()) && f.type == CKEDITOR.NODE_ELEMENT && f.is("table")) return !1; b = e[0]; f = b.getAscendant("table"); var k = CKEDITOR.tools.buildTableMap(f), h = k.length, l = k[0].length, m = b.getParent().$.rowIndex, n = g(k, m, b), p; if (c) {
                    var r; try {
                        var w = parseInt(b.getAttribute("rowspan"), 10) || 1; p = parseInt(b.getAttribute("colspan"),
                            10) || 1; r = k["up" == c ? m - w : "down" == c ? m + w : m]["left" == c ? n - p : "right" == c ? n + p : n]
                    } catch (M) { return !1 } if (!r || b.$ == r) return !1; e["up" == c || "left" == c ? "unshift" : "push"](new CKEDITOR.dom.element(r))
                } c = b.getDocument(); var C = m, w = r = 0, O = !d && new CKEDITOR.dom.documentFragment(c), J = 0; for (c = 0; c < e.length; c++) {
                    p = e[c]; var N = p.getParent(), R = p.getFirst(), H = p.$.colSpan, I = p.$.rowSpan, N = N.$.rowIndex, P = g(k, N, p), J = J + H * I, w = Math.max(w, P - n + H); r = Math.max(r, N - m + I); d || (H = p, (I = H.getBogus()) && I.remove(), H.trim(), p.getChildren().count() && (N ==
                        C || !R || R.isBlockBoundary && R.isBlockBoundary({ br: 1 }) || (C = O.getLast(CKEDITOR.dom.walker.whitespaces(!0)), !C || C.is && C.is("br") || O.append("br")), p.moveChildren(O)), c ? p.remove() : p.setHtml("")); C = N
                } if (d) return r * w == J; O.moveChildren(b); b.appendBogus(); w >= l ? b.removeAttribute("rowSpan") : b.$.rowSpan = r; r >= h ? b.removeAttribute("colSpan") : b.$.colSpan = w; d = new CKEDITOR.dom.nodeList(f.$.rows); e = d.count(); for (c = e - 1; 0 <= c; c--)f = d.getItem(c), f.$.cells.length || (f.remove(), e++); return b
            } function r(b, c) {
                var d = a(b); if (1 <
                    d.length) return !1; if (c) return !0; var d = d[0], e = d.getParent(), f = e.getAscendant("table"), k = CKEDITOR.tools.buildTableMap(f), h = e.$.rowIndex, l = g(k, h, d), m = d.$.rowSpan, n; if (1 < m) { n = Math.ceil(m / 2); for (var m = Math.floor(m / 2), e = h + n, f = new CKEDITOR.dom.element(f.$.rows[e]), k = g(k, e), p, e = d.clone(), h = 0; h < k.length; h++)if (p = k[h], p.parentNode == f.$ && h > l) { e.insertBefore(new CKEDITOR.dom.element(p)); break } else p = null; p || f.append(e) } else for (m = n = 1, f = e.clone(), f.insertAfter(e), f.append(e = d.clone()), p = g(k, h), l = 0; l < p.length; l++)p[l].rowSpan++;
                e.appendBogus(); d.$.rowSpan = n; e.$.rowSpan = m; 1 == n && d.removeAttribute("rowSpan"); 1 == m && e.removeAttribute("rowSpan"); return e
            } function w(b, c) {
                var d = a(b); if (1 < d.length) return !1; if (c) return !0; var d = d[0], e = d.getParent(), f = e.getAscendant("table"), f = CKEDITOR.tools.buildTableMap(f), k = g(f, e.$.rowIndex, d), h = d.$.colSpan; if (1 < h) e = Math.ceil(h / 2), h = Math.floor(h / 2); else { for (var h = e = 1, l = [], m = 0; m < f.length; m++) { var n = f[m]; l.push(n[k]); 1 < n[k].rowSpan && (m += n[k].rowSpan - 1) } for (f = 0; f < l.length; f++)l[f].colSpan++ } f = d.clone();
                f.insertAfter(d); f.appendBogus(); d.$.colSpan = e; f.$.colSpan = h; 1 == e && d.removeAttribute("colSpan"); 1 == h && f.removeAttribute("colSpan"); return f
            } var p = CKEDITOR.tools.isArray; CKEDITOR.plugins.tabletools = {
                requires: "table,dialog,contextmenu", init: function (b) {
                    function d(a) { return CKEDITOR.tools.extend(a || {}, { contextSensitive: 1, refresh: function (a, b) { this.setState(b.contains({ td: 1, th: 1 }, 1) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED) } }) } function g(a, c) { var d = b.addCommand(a, c); b.addFeature(d) } var p = b.lang.table,
                        A = CKEDITOR.tools.style.parse, v = "td{width} td{height} td{border-color} td{background-color} td{white-space} td{vertical-align} td{text-align} td[colspan] td[rowspan] th".split(" "); g("cellProperties", new CKEDITOR.dialogCommand("cellProperties", d({
                            allowedContent: "td th{width,height,border-color,background-color,white-space,vertical-align,text-align}[colspan,rowspan]", requiredContent: v, contentTransformations: [[{
                                element: "td", left: function (a) { return a.styles.background && A.background(a.styles.background).color },
                                right: function (a) { a.styles["background-color"] = A.background(a.styles.background).color }
                            }, { element: "td", check: "td{vertical-align}", left: function (a) { return a.attributes && a.attributes.valign }, right: function (a) { a.styles["vertical-align"] = a.attributes.valign; delete a.attributes.valign } }], [{
                                element: "tr", check: "td{height}", left: function (a) { return a.styles && a.styles.height }, right: function (a) {
                                    CKEDITOR.tools.array.forEach(a.children, function (b) { b.name in { td: 1, th: 1 } && (b.attributes["cke-row-height"] = a.styles.height) });
                                    delete a.styles.height
                                }
                            }], [{ element: "td", check: "td{height}", left: function (a) { return (a = a.attributes) && a["cke-row-height"] }, right: function (a) { a.styles.height = a.attributes["cke-row-height"]; delete a.attributes["cke-row-height"] } }]]
                        }))); CKEDITOR.dialog.add("cellProperties", this.path + "dialogs/tableCell.js"); g("rowDelete", d({ requiredContent: "table", exec: function (a) { a = a.getSelection(); (a = e(a)) && k(a) } })); g("rowInsertBefore", d({ requiredContent: "table", exec: function (b) { b = b.getSelection(); b = a(b); f(b, !0) } }));
                    g("rowInsertAfter", d({ requiredContent: "table", exec: function (b) { b = b.getSelection(); b = a(b); f(b) } })); g("columnDelete", d({ requiredContent: "table", exec: function (a) { a = a.getSelection(); (a = h(a)) && k(a, !0) } })); g("columnInsertBefore", d({ requiredContent: "table", exec: function (b) { b = b.getSelection(); b = a(b); l(b, !0) } })); g("columnInsertAfter", d({ requiredContent: "table", exec: function (b) { b = b.getSelection(); b = a(b); l(b) } })); g("cellDelete", d({ requiredContent: "table", exec: function (a) { a = a.getSelection(); c(a) } })); g("cellMerge",
                        d({ allowedContent: "td[colspan,rowspan]", requiredContent: "td[colspan,rowspan]", exec: function (a, b) { b.cell = n(a.getSelection()); k(b.cell, !0) } })); g("cellMergeRight", d({ allowedContent: "td[colspan]", requiredContent: "td[colspan]", exec: function (a, b) { b.cell = n(a.getSelection(), "right"); k(b.cell, !0) } })); g("cellMergeDown", d({ allowedContent: "td[rowspan]", requiredContent: "td[rowspan]", exec: function (a, b) { b.cell = n(a.getSelection(), "down"); k(b.cell, !0) } })); g("cellVerticalSplit", d({
                            allowedContent: "td[rowspan]", requiredContent: "td[rowspan]",
                            exec: function (a) { k(w(a.getSelection())) }
                        })); g("cellHorizontalSplit", d({ allowedContent: "td[colspan]", requiredContent: "td[colspan]", exec: function (a) { k(r(a.getSelection())) } })); g("cellInsertBefore", d({ requiredContent: "table", exec: function (a) { a = a.getSelection(); m(a, !0) } })); g("cellInsertAfter", d({ requiredContent: "table", exec: function (a) { a = a.getSelection(); m(a) } })); b.addMenuItems && b.addMenuItems({
                            tablecell: {
                                label: p.cell.menu, group: "tablecell", order: 1, getItems: function () {
                                    var c = b.getSelection(), d = a(c), c =
                                    {
                                        tablecell_insertBefore: CKEDITOR.TRISTATE_OFF, tablecell_insertAfter: CKEDITOR.TRISTATE_OFF, tablecell_delete: CKEDITOR.TRISTATE_OFF, tablecell_merge: n(c, null, !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, tablecell_merge_right: n(c, "right", !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, tablecell_merge_down: n(c, "down", !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, tablecell_split_vertical: w(c, !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, tablecell_split_horizontal: r(c, !0) ? CKEDITOR.TRISTATE_OFF :
                                            CKEDITOR.TRISTATE_DISABLED
                                    }; b.filter.check(v) && (c.tablecell_properties = 0 < d.length ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED); return c
                                }
                            }, tablecell_insertBefore: { label: p.cell.insertBefore, group: "tablecell", command: "cellInsertBefore", order: 5 }, tablecell_insertAfter: { label: p.cell.insertAfter, group: "tablecell", command: "cellInsertAfter", order: 10 }, tablecell_delete: { label: p.cell.deleteCell, group: "tablecell", command: "cellDelete", order: 15 }, tablecell_merge: {
                                label: p.cell.merge, group: "tablecell", command: "cellMerge",
                                order: 16
                            }, tablecell_merge_right: { label: p.cell.mergeRight, group: "tablecell", command: "cellMergeRight", order: 17 }, tablecell_merge_down: { label: p.cell.mergeDown, group: "tablecell", command: "cellMergeDown", order: 18 }, tablecell_split_horizontal: { label: p.cell.splitHorizontal, group: "tablecell", command: "cellHorizontalSplit", order: 19 }, tablecell_split_vertical: { label: p.cell.splitVertical, group: "tablecell", command: "cellVerticalSplit", order: 20 }, tablecell_properties: {
                                label: p.cell.title, group: "tablecellproperties", command: "cellProperties",
                                order: 21
                            }, tablerow: { label: p.row.menu, group: "tablerow", order: 1, getItems: function () { return { tablerow_insertBefore: CKEDITOR.TRISTATE_OFF, tablerow_insertAfter: CKEDITOR.TRISTATE_OFF, tablerow_delete: CKEDITOR.TRISTATE_OFF } } }, tablerow_insertBefore: { label: p.row.insertBefore, group: "tablerow", command: "rowInsertBefore", order: 5 }, tablerow_insertAfter: { label: p.row.insertAfter, group: "tablerow", command: "rowInsertAfter", order: 10 }, tablerow_delete: { label: p.row.deleteRow, group: "tablerow", command: "rowDelete", order: 15 },
                            tablecolumn: { label: p.column.menu, group: "tablecolumn", order: 1, getItems: function () { return { tablecolumn_insertBefore: CKEDITOR.TRISTATE_OFF, tablecolumn_insertAfter: CKEDITOR.TRISTATE_OFF, tablecolumn_delete: CKEDITOR.TRISTATE_OFF } } }, tablecolumn_insertBefore: { label: p.column.insertBefore, group: "tablecolumn", command: "columnInsertBefore", order: 5 }, tablecolumn_insertAfter: { label: p.column.insertAfter, group: "tablecolumn", command: "columnInsertAfter", order: 10 }, tablecolumn_delete: {
                                label: p.column.deleteColumn, group: "tablecolumn",
                                command: "columnDelete", order: 15
                            }
                        }); b.contextMenu && b.contextMenu.addListener(function (a, b, c) { return (a = c.contains({ td: 1, th: 1 }, 1)) && !a.isReadOnly() ? { tablecell: CKEDITOR.TRISTATE_OFF, tablerow: CKEDITOR.TRISTATE_OFF, tablecolumn: CKEDITOR.TRISTATE_OFF } : null })
                }, getCellColIndex: b, insertRow: f, insertColumn: l, getSelectedCells: a
            }; CKEDITOR.plugins.add("tabletools", CKEDITOR.plugins.tabletools)
        }(), CKEDITOR.tools.buildTableMap = function (a, f, e, b, d) {
            a = a.$.rows; e = e || 0; b = "number" === typeof b ? b : a.length - 1; d = "number" === typeof d ?
                d : -1; var l = -1, h = []; for (f = f || 0; f <= b; f++) { l++; !h[l] && (h[l] = []); for (var m = -1, c = e; c <= (-1 === d ? a[f].cells.length - 1 : d); c++) { var k = a[f].cells[c]; if (!k) break; for (m++; h[l][m];)m++; for (var g = isNaN(k.colSpan) ? 1 : k.colSpan, k = isNaN(k.rowSpan) ? 1 : k.rowSpan, n = 0; n < k && !(f + n > b); n++) { h[l + n] || (h[l + n] = []); for (var r = 0; r < g; r++)h[l + n][m + r] = a[f].cells[c] } m += g - 1; if (-1 !== d && m >= d) break } } return h
        }, function () {
            function a(a) { return CKEDITOR.plugins.widget && CKEDITOR.plugins.widget.isDomWidget(a) } function f(a, b) {
                var d = a.getAscendant("table"),
                e = b.getAscendant("table"), f = CKEDITOR.tools.buildTableMap(d), g = c(a), k = c(b), h = [], l = {}, m, n; d.contains(e) && (b = b.getAscendant({ td: 1, th: 1 }), k = c(b)); g > k && (d = g, g = k, k = d, d = a, a = b, b = d); for (d = 0; d < f[g].length; d++)if (a.$ === f[g][d]) { m = d; break } for (d = 0; d < f[k].length; d++)if (b.$ === f[k][d]) { n = d; break } m > n && (d = m, m = n, n = d); for (d = g; d <= k; d++)for (g = m; g <= n; g++)e = new CKEDITOR.dom.element(f[d][g]), e.$ && !e.getCustomData("selected_cell") && (h.push(e), CKEDITOR.dom.element.setMarker(l, e, "selected_cell", !0)); CKEDITOR.dom.element.clearAllMarkers(l);
                return h
            } function e(a) { return (a = a.editable().findOne(".cke_table-faked-selection")) && a.getAscendant("table") } function b(a, b) {
                var c = a.editable().find(".cke_table-faked-selection"), d = a.editable().findOne("[data-cke-table-faked-selection-table]"), e; a.fire("lockSnapshot"); a.editable().removeClass("cke_table-faked-selection-editor"); for (e = 0; e < c.count(); e++)c.getItem(e).removeClass("cke_table-faked-selection"); d && d.data("cke-table-faked-selection-table", !1); a.fire("unlockSnapshot"); b && (t = { active: !1 }, a.getSelection().isInTable() &&
                    a.getSelection().reset())
            } function d(a, b) { var c = [], d, e; for (e = 0; e < b.length; e++)d = a.createRange(), d.setStartBefore(b[e]), d.setEndAfter(b[e]), c.push(d); a.getSelection().selectRanges(c) } function l(a) { var b = a.editable().find(".cke_table-faked-selection"); 1 > b.count() || (b = f(b.getItem(0), b.getItem(b.count() - 1)), d(a, b)) } function h(c, e, g) {
                var k = y(c.getSelection(!0)); e = e.is("table") ? null : e; var h; (h = t.active && !t.first) && !(h = e) && (h = c.getSelection().getRanges(), h = 1 < k.length || h[0] && !h[0].collapsed ? !0 : !1); if (h) t.first =
                    e || k[0], t.dirty = e ? !1 : 1 !== k.length; else if (t.active && e && t.first.getAscendant("table").equals(e.getAscendant("table"))) { k = f(t.first, e); if (!t.dirty && 1 === k.length && !a(g.data.getTarget())) return b(c, "mouseup" === g.name); t.dirty = !0; t.last = e; d(c, k) }
            } function m(a) {
                var c = (a = a.editor || a.sender.editor) && a.getSelection(), d = c && c.getRanges() || [], e = d && d[0].getEnclosedNode(), e = e && e.type == CKEDITOR.NODE_ELEMENT && e.is("img"), f; if (c && (b(a), c.isInTable() && c.isFake)) if (e) a.getSelection().reset(); else if (!d[0]._getTableElement({ table: 1 }).hasAttribute("data-cke-tableselection-ignored")) {
                    1 ===
                    d.length && d[0]._getTableElement() && d[0]._getTableElement().is("table") && (f = d[0]._getTableElement()); f = y(c, f); a.fire("lockSnapshot"); for (c = 0; c < f.length; c++)f[c].addClass("cke_table-faked-selection"); 0 < f.length && (a.editable().addClass("cke_table-faked-selection-editor"), f[0].getAscendant("table").data("cke-table-faked-selection-table", "")); a.fire("unlockSnapshot")
                }
            } function c(a) { return a.getAscendant("tr", !0).$.rowIndex } function k(c) {
                function d(a, b) {
                    return a && b ? a.equals(b) || a.contains(b) || b.contains(a) ||
                        a.getCommonAncestor(b).is(w) : !1
                } function f(a) { return !a.getAscendant("table", !0) && a.getDocument().equals(m.document) } function g(a, b, c, d) { if ("mousedown" === a.name && (CKEDITOR.tools.getMouseButton(a) === CKEDITOR.MOUSE_BUTTON_LEFT || !d)) return !0; if (b = a.name === (CKEDITOR.env.gecko ? "mousedown" : "mouseup") && !f(a.data.getTarget())) a = a.data.getTarget().getAscendant({ td: 1, th: 1 }, !0), b = !(a && a.hasClass("cke_table-faked-selection")); return b } if (c.data.getTarget().getName && ("mouseup" === c.name || !a(c.data.getTarget()))) {
                    var m =
                        c.editor || c.listenerData.editor, n = m.getSelection(1), p = e(m), r = c.data.getTarget(), q = r && r.getAscendant({ td: 1, th: 1 }, !0), r = r && r.getAscendant("table", !0), w = { table: 1, thead: 1, tbody: 1, tfoot: 1, tr: 1, td: 1, th: 1 }; r && r.hasAttribute("data-cke-tableselection-ignored") || (g(c, n, p, r) && b(m, !0), !t.active && "mousedown" === c.name && CKEDITOR.tools.getMouseButton(c) === CKEDITOR.MOUSE_BUTTON_LEFT && r && (t = { active: !0 }, CKEDITOR.document.on("mouseup", k, null, { editor: m })), (q || r) && h(m, q || r, c), "mouseup" === c.name && (CKEDITOR.tools.getMouseButton(c) ===
                            CKEDITOR.MOUSE_BUTTON_LEFT && (f(c.data.getTarget()) || d(p, r)) && l(m), t = { active: !1 }, CKEDITOR.document.removeListener("mouseup", k)))
                }
            } function g(a) { var b = a.data.getTarget().getAscendant("table", !0); b && b.hasAttribute("data-cke-tableselection-ignored") || (b = a.data.getTarget().getAscendant({ td: 1, th: 1 }, !0)) && !b.hasClass("cke_table-faked-selection") && (a.cancel(), a.data.preventDefault()) } function n(a, b) {
                function c(a) { a.cancel() } var d = a.getSelection(), e = d.createBookmarks(), f = a.document, g = a.createRange(), k = f.getDocumentElement().$,
                    h = CKEDITOR.env.ie && 9 > CKEDITOR.env.version, l = a.blockless || CKEDITOR.env.ie ? "span" : "div", m, n, p, r; f.getById("cke_table_copybin") || (m = f.createElement(l), n = f.createElement(l), n.setAttributes({ id: "cke_table_copybin", "data-cke-temp": "1" }), m.setStyles({ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }), m.setStyle("ltr" == a.config.contentsLangDirection ? "left" : "right", "-5000px"), m.setHtml(a.getSelectedHtml(!0)), a.fire("lockSnapshot"), n.append(m), a.editable().append(n), r = a.on("selectionChange", c,
                        null, null, 0), h && (p = k.scrollTop), g.selectNodeContents(m), g.select(), h && (k.scrollTop = p), setTimeout(function () { n.remove(); d.selectBookmarks(e); r.removeListener(); a.fire("unlockSnapshot"); b && (a.extractSelectedHtml(), a.fire("saveSnapshot")) }, 100))
            } function r(a) { var b = a.editor || a.sender.editor, c = b.getSelection(); c.isInTable() && (c.getRanges()[0]._getTableElement({ table: 1 }).hasAttribute("data-cke-tableselection-ignored") || n(b, "cut" === a.name)) } function w(a) { this._reset(); a && this.setSelectedCells(a) } function p(a,
                b, c) { a.on("beforeCommandExec", function (c) { -1 !== CKEDITOR.tools.array.indexOf(b, c.data.name) && (c.data.selectedCells = y(a.getSelection())) }); a.on("afterCommandExec", function (d) { -1 !== CKEDITOR.tools.array.indexOf(b, d.data.name) && c(a, d.data) }) } var t = { active: !1 }, u, y, q, A, v; w.prototype = {}; w.prototype._reset = function () { this.cells = { first: null, last: null, all: [] }; this.rows = { first: null, last: null } }; w.prototype.setSelectedCells = function (a) {
                    this._reset(); a = a.slice(0); this._arraySortByDOMOrder(a); this.cells.all = a; this.cells.first =
                        a[0]; this.cells.last = a[a.length - 1]; this.rows.first = a[0].getAscendant("tr"); this.rows.last = this.cells.last.getAscendant("tr")
                }; w.prototype.getTableMap = function () { var a = q(this.cells.first), b; a: { b = this.cells.last; var d = b.getAscendant("table"), e = c(b), d = CKEDITOR.tools.buildTableMap(d), f; for (f = 0; f < d[e].length; f++)if ((new CKEDITOR.dom.element(d[e][f])).equals(b)) { b = f; break a } b = void 0 } return CKEDITOR.tools.buildTableMap(this._getTable(), c(this.rows.first), a, c(this.rows.last), b) }; w.prototype._getTable = function () { return this.rows.first.getAscendant("table") };
            w.prototype.insertRow = function (a, b, c) { if ("undefined" === typeof a) a = 1; else if (0 >= a) return; for (var d = this.cells.first.$.cellIndex, e = this.cells.last.$.cellIndex, f = c ? [] : this.cells.all, g, k = 0; k < a; k++)g = A(c ? this.cells.all : f, b), g = CKEDITOR.tools.array.filter(g.find("td, th").toArray(), function (a) { return c ? !0 : a.$.cellIndex >= d && a.$.cellIndex <= e }), f = b ? g.concat(f) : f.concat(g); this.setSelectedCells(f) }; w.prototype.insertColumn = function (a) {
                function b(a) { a = c(a); return a >= f && a <= g } if ("undefined" === typeof a) a = 1; else if (0 >=
                    a) return; for (var d = this.cells, e = d.all, f = c(d.first), g = c(d.last), d = 0; d < a; d++)e = e.concat(CKEDITOR.tools.array.filter(v(e), b)); this.setSelectedCells(e)
            }; w.prototype.emptyCells = function (a) { a = a || this.cells.all; for (var b = 0; b < a.length; b++)a[b].setHtml("") }; w.prototype._arraySortByDOMOrder = function (a) { a.sort(function (a, b) { return a.getPosition(b) & CKEDITOR.POSITION_PRECEDING ? -1 : 1 }) }; var z = {
                onPaste: function (a) {
                    function b(a) { var c = e.createRange(); c.selectNodeContents(a); c.select() } function c(a) {
                        return Math.max.apply(null,
                            CKEDITOR.tools.array.map(a, function (a) { return a.length }, 0))
                    } var e = a.editor, g = e.getSelection(), k = y(g), h = g.isInTable(!0) && this.isBoundarySelection(g), l = this.findTableInPastedContent(e, a.data.dataValue), m, n; (function (a, b, c, d) {
                        a = a.getRanges(); var e = a.length && a[0]._getTableElement({ table: 1 }); if (!b.length || e && e.hasAttribute("data-cke-tableselection-ignored") || d && !c) return !1; if (b = !d) (b = a[0]) ? (b = b.clone(), b.enlarge(CKEDITOR.ENLARGE_ELEMENT), b = (b = b.getEnclosedNode()) && b.is && b.is(CKEDITOR.dtd.$tableContent)) :
                            b = void 0, b = !b; return b ? !1 : !0
                    })(g, k, l, h) && (k = k[0].getAscendant("table"), m = new w(y(g, k)), e.once("afterPaste", function () { var a; if (n) { a = new CKEDITOR.dom.element(n[0][0]); var b = n[n.length - 1]; a = f(a, new CKEDITOR.dom.element(b[b.length - 1])) } else a = m.cells.all; d(e, a) }), l ? (a.stop(), h ? (m.insertRow(1, 1 === h, !0), g.selectElement(m.rows.first)) : (m.emptyCells(), d(e, m.cells.all)), a = m.getTableMap(), n = CKEDITOR.tools.buildTableMap(l), m.insertRow(n.length - a.length), m.insertColumn(c(n) - c(a)), a = m.getTableMap(), this.pasteTable(m,
                        a, n), e.fire("saveSnapshot"), setTimeout(function () { e.fire("afterPaste") }, 0)) : (b(m.cells.first), e.once("afterPaste", function () { e.fire("lockSnapshot"); m.emptyCells(m.cells.all.slice(1)); d(e, m.cells.all); e.fire("unlockSnapshot") })))
                }, isBoundarySelection: function (a) { a = a.getRanges()[0]; var b = a.endContainer.getAscendant("tr", !0); if (b && a.collapsed) { if (a.checkBoundaryOfElement(b, CKEDITOR.START)) return 1; if (a.checkBoundaryOfElement(b, CKEDITOR.END)) return 2 } return 0 }, findTableInPastedContent: function (a, b) {
                    var c =
                        a.dataProcessor, d = new CKEDITOR.dom.element("body"); c || (c = new CKEDITOR.htmlDataProcessor(a)); d.setHtml(c.toHtml(b), { fixForBody: !1 }); return 1 < d.getChildCount() ? null : d.findOne("table")
                }, pasteTable: function (a, b, c) {
                    var d, e = q(a.cells.first), f = a._getTable(), g = {}, k, h, l, m; for (l = 0; l < c.length; l++)for (k = new CKEDITOR.dom.element(f.$.rows[a.rows.first.$.rowIndex + l]), m = 0; m < c[l].length; m++)if (h = new CKEDITOR.dom.element(c[l][m]), d = b[l] && b[l][m] ? new CKEDITOR.dom.element(b[l][m]) : null, h && !h.getCustomData("processed")) {
                        if (d &&
                            d.getParent()) h.replace(d); else if (0 === m || c[l][m - 1]) (d = 0 !== m ? new CKEDITOR.dom.element(c[l][m - 1]) : null) && k.equals(d.getParent()) ? h.insertAfter(d) : 0 < e ? k.$.cells[e] ? h.insertAfter(new CKEDITOR.dom.element(k.$.cells[e])) : k.append(h) : k.append(h, !0); CKEDITOR.dom.element.setMarker(g, h, "processed", !0)
                    } else h.getCustomData("processed") && d && d.remove(); CKEDITOR.dom.element.clearAllMarkers(g)
                }
            }; CKEDITOR.plugins.tableselection = {
                getCellsBetween: f, keyboardIntegration: function (a) {
                    function b(a) {
                        var c = a.getEnclosedNode();
                        c && "function" === typeof c.is && c.is({ td: 1, th: 1 }) ? c.setText("") : a.deleteContents(); CKEDITOR.tools.array.forEach(a._find("td"), function (a) { a.appendBogus() })
                    } var c = a.editable(); c.attachListener(c, "keydown", function (a) {
                        function c(b, d) {
                            if (!d.length) return null; var f = a.createRange(), g = CKEDITOR.dom.range.mergeRanges(d); CKEDITOR.tools.array.forEach(g, function (a) { a.enlarge(CKEDITOR.ENLARGE_ELEMENT) }); var k = g[0].getBoundaryNodes(), h = k.startNode, k = k.endNode; if (h && h.is && h.is(e)) {
                                for (var l = h.getAscendant("table",
                                    !0), m = h.getPreviousSourceNode(!1, CKEDITOR.NODE_ELEMENT, l), n = !1, p = function (a) { return !h.contains(a) && a.is && a.is("td", "th") }; m && !p(m);)m = m.getPreviousSourceNode(!1, CKEDITOR.NODE_ELEMENT, l); !m && k && k.is && !k.is("table") && k.getNext() && (m = k.getNext().findOne("td, th"), n = !0); if (m) f["moveToElementEdit" + (n ? "Start" : "End")](m); else f.setStartBefore(h.getAscendant("table", !0)), f.collapse(!0); g[0].deleteContents(); return [f]
                            } if (h) return f.moveToElementEditablePosition(h), [f]
                        } var d = { 37: 1, 38: 1, 39: 1, 40: 1, 8: 1, 46: 1, 13: 1 },
                            e = CKEDITOR.tools.extend({ table: 1 }, CKEDITOR.dtd.$tableContent); delete e.td; delete e.th; return function (e) {
                                var f = e.data.getKey(), g = e.data.getKeystroke(), k, h = 37 === f || 38 == f, l, m, n; if (d[f] && !a.readOnly && (k = a.getSelection()) && k.isInTable() && k.isFake) {
                                    l = k.getRanges(); m = l[0]._getTableElement(); n = l[l.length - 1]._getTableElement(); if (13 !== f || a.plugins.enterkey) e.data.preventDefault(), e.cancel(); if (36 < f && 41 > f) l[0].moveToElementEditablePosition(h ? m : n, !h), k.selectRanges([l[0]]); else if (13 !== f || 13 === g || g === CKEDITOR.SHIFT +
                                        13) { for (e = 0; e < l.length; e++)b(l[e]); (e = c(m, l)) ? l = e : l[0].moveToElementEditablePosition(m); k.selectRanges(l); 13 === f && a.plugins.enterkey ? (a.fire("lockSnapshot"), 13 === g ? a.execCommand("enter") : a.execCommand("shiftEnter"), a.fire("unlockSnapshot"), a.fire("saveSnapshot")) : 13 !== f && a.fire("saveSnapshot") }
                                }
                            }
                    }(a), null, null, -1); c.attachListener(c, "keypress", function (c) {
                        var d = a.getSelection(), e = c.data.$.charCode || 13 === c.data.getKey(), f; if (!a.readOnly && d && d.isInTable() && d.isFake && e && !(c.data.getKeystroke() & CKEDITOR.CTRL)) {
                            c =
                            d.getRanges(); e = c[0].getEnclosedNode().getAscendant({ td: 1, th: 1 }, !0); for (f = 0; f < c.length; f++)b(c[f]); e && (c[0].moveToElementEditablePosition(e), d.selectRanges([c[0]]))
                        }
                    }, null, null, -1)
                }
            }; CKEDITOR.plugins.add("tableselection", {
                requires: "clipboard,tabletools", isSupportedEnvironment: function () { return !(CKEDITOR.env.ie && 11 > CKEDITOR.env.version) }, onLoad: function () {
                    u = CKEDITOR.plugins.tabletools; y = u.getSelectedCells; q = u.getCellColIndex; A = u.insertRow; v = u.insertColumn; CKEDITOR.document.appendStyleSheet(this.path +
                        "styles/tableselection.css")
                }, init: function (a) {
                    this.isSupportedEnvironment() && (a.addContentsCss && a.addContentsCss(this.path + "styles/tableselection.css"), a.on("contentDom", function () {
                        var b = a.editable(), c = b.isInline() ? b : a.document, d = { editor: a }; b.attachListener(c, "mousedown", k, null, d); b.attachListener(c, "mousemove", k, null, d); b.attachListener(c, "mouseup", k, null, d); b.attachListener(b, "dragstart", g); b.attachListener(a, "selectionCheck", m); CKEDITOR.plugins.tableselection.keyboardIntegration(a); CKEDITOR.plugins.clipboard &&
                            !CKEDITOR.plugins.clipboard.isCustomCopyCutSupported && (b.attachListener(b, "cut", r), b.attachListener(b, "copy", r))
                    }), a.on("paste", z.onPaste, z), p(a, "rowInsertBefore rowInsertAfter columnInsertBefore columnInsertAfter cellInsertBefore cellInsertAfter".split(" "), function (a, b) { d(a, b.selectedCells) }), p(a, ["cellMerge", "cellMergeRight", "cellMergeDown"], function (a, b) { d(a, [b.commandData.cell]) }), p(a, ["cellDelete"], function (a) { b(a, !0) }))
                }
            })
        }(), "use strict", function () {
            function a(a, b) {
                return CKEDITOR.tools.array.reduce(b,
                    function (a, b) { return b(a) }, a)
            } var f = [CKEDITOR.CTRL + 90, CKEDITOR.CTRL + 89, CKEDITOR.CTRL + CKEDITOR.SHIFT + 90], e = { 8: 1, 46: 1 }; CKEDITOR.plugins.add("undo", {
                init: function (a) {
                    function d(a) { l.enabled && !1 !== a.data.command.canUndo && l.save() } function e() { l.enabled = a.readOnly ? !1 : "wysiwyg" == a.mode; l.onChange() } var l = a.undoManager = new b(a), m = l.editingHandler = new h(l), w = a.addCommand("undo", { exec: function () { l.undo() && (a.selectionChange(), this.fire("afterUndo")) }, startDisabled: !0, canUndo: !1 }), p = a.addCommand("redo", {
                        exec: function () {
                            l.redo() &&
                            (a.selectionChange(), this.fire("afterRedo"))
                        }, startDisabled: !0, canUndo: !1
                    }); a.setKeystroke([[f[0], "undo"], [f[1], "redo"], [f[2], "redo"]]); l.onChange = function () { w.setState(l.undoable() ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED); p.setState(l.redoable() ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED) }; a.on("beforeCommandExec", d); a.on("afterCommandExec", d); a.on("saveSnapshot", function (a) { l.save(a.data && a.data.contentOnly) }); a.on("contentDom", m.attachListeners, m); a.on("instanceReady", function () { a.fire("saveSnapshot") });
                    a.on("beforeModeUnload", function () { "wysiwyg" == a.mode && l.save(!0) }); a.on("mode", e); a.on("readOnly", e); a.ui.addButton && (a.ui.addButton("Undo", { label: a.lang.undo.undo, command: "undo", toolbar: "undo,10" }), a.ui.addButton("Redo", { label: a.lang.undo.redo, command: "redo", toolbar: "undo,20" })); a.resetUndo = function () { l.reset(); a.fire("saveSnapshot") }; a.on("updateSnapshot", function () { l.currentImage && l.update() }); a.on("lockSnapshot", function (a) { a = a.data; l.lock(a && a.dontUpdate, a && a.forceUpdate) }); a.on("unlockSnapshot",
                        l.unlock, l)
                }
            }); CKEDITOR.plugins.undo = {}; var b = CKEDITOR.plugins.undo.UndoManager = function (a) { this.strokesRecorded = [0, 0]; this.locked = null; this.previousKeyGroup = -1; this.limit = a.config.undoStackSize || 20; this.strokesLimit = 25; this._filterRules = []; this.editor = a; this.reset(); CKEDITOR.env.ie && this.addFilterRule(function (a) { return a.replace(/\s+data-cke-expando=".*?"/g, "") }) }; b.prototype = {
                type: function (a, d) {
                    var e = b.getKeyGroup(a), f = this.strokesRecorded[e] + 1; d = d || f >= this.strokesLimit; this.typing || (this.hasUndo =
                        this.typing = !0, this.hasRedo = !1, this.onChange()); d ? (f = 0, this.editor.fire("saveSnapshot")) : this.editor.fire("change"); this.strokesRecorded[e] = f; this.previousKeyGroup = e
                }, keyGroupChanged: function (a) { return b.getKeyGroup(a) != this.previousKeyGroup }, reset: function () { this.snapshots = []; this.index = -1; this.currentImage = null; this.hasRedo = this.hasUndo = !1; this.locked = null; this.resetType() }, resetType: function () { this.strokesRecorded = [0, 0]; this.typing = !1; this.previousKeyGroup = -1 }, refreshState: function () {
                    this.hasUndo =
                    !!this.getNextImage(!0); this.hasRedo = !!this.getNextImage(!1); this.resetType(); this.onChange()
                }, save: function (a, b, e) {
                    var f = this.editor; if (this.locked || "ready" != f.status || "wysiwyg" != f.mode) return !1; var h = f.editable(); if (!h || "ready" != h.status) return !1; h = this.snapshots; b || (b = new d(f)); if (!1 === b.contents) return !1; if (this.currentImage) if (b.equalsContent(this.currentImage)) { if (a || b.equalsSelection(this.currentImage)) return !1 } else !1 !== e && f.fire("change"); h.splice(this.index + 1, h.length - this.index - 1); h.length ==
                        this.limit && h.shift(); this.index = h.push(b) - 1; this.currentImage = b; !1 !== e && this.refreshState(); return !0
                }, restoreImage: function (a) {
                    var b = this.editor, d; a.bookmarks && (b.focus(), d = b.getSelection()); this.locked = { level: 999 }; this.editor.loadSnapshot(a.contents); a.bookmarks ? d.selectBookmarks(a.bookmarks) : CKEDITOR.env.ie && (d = this.editor.document.getBody().$.createTextRange(), d.collapse(!0), d.select()); this.locked = null; this.index = a.index; this.currentImage = this.snapshots[this.index]; this.update(); this.refreshState();
                    b.fire("change")
                }, getNextImage: function (a) { var b = this.snapshots, d = this.currentImage, e; if (d) if (a) for (e = this.index - 1; 0 <= e; e--) { if (a = b[e], !d.equalsContent(a)) return a.index = e, a } else for (e = this.index + 1; e < b.length; e++)if (a = b[e], !d.equalsContent(a)) return a.index = e, a; return null }, redoable: function () { return this.enabled && this.hasRedo }, undoable: function () { return this.enabled && this.hasUndo }, undo: function () { if (this.undoable()) { this.save(!0); var a = this.getNextImage(!0); if (a) return this.restoreImage(a), !0 } return !1 },
                redo: function () { if (this.redoable() && (this.save(!0), this.redoable())) { var a = this.getNextImage(!1); if (a) return this.restoreImage(a), !0 } return !1 }, update: function (a) { if (!this.locked) { a || (a = new d(this.editor)); for (var b = this.index, e = this.snapshots; 0 < b && this.currentImage.equalsContent(e[b - 1]);)--b; e.splice(b, this.index - b + 1, a); this.index = b; this.currentImage = a } }, updateSelection: function (a) {
                    if (!this.snapshots.length) return !1; var b = this.snapshots, d = b[b.length - 1]; return d.equalsContent(a) && !d.equalsSelection(a) ?
                        (this.currentImage = b[b.length - 1] = a, !0) : !1
                }, lock: function (a, b) { if (this.locked) this.locked.level++; else if (a) this.locked = { level: 1 }; else { var e = null; if (b) e = !0; else { var f = new d(this.editor, !0); this.currentImage && this.currentImage.equalsContent(f) && (e = f) } this.locked = { update: e, level: 1 } } }, unlock: function () { if (this.locked && !--this.locked.level) { var a = this.locked.update; this.locked = null; if (!0 === a) this.update(); else if (a) { var b = new d(this.editor, !0); a.equalsContent(b) || this.update() } } }, addFilterRule: function (a) { this._filterRules.push(a) }
            };
            b.navigationKeyCodes = { 37: 1, 38: 1, 39: 1, 40: 1, 36: 1, 35: 1, 33: 1, 34: 1 }; b.keyGroups = { PRINTABLE: 0, FUNCTIONAL: 1 }; b.isNavigationKey = function (a) { return !!b.navigationKeyCodes[a] }; b.getKeyGroup = function (a) { var d = b.keyGroups; return e[a] ? d.FUNCTIONAL : d.PRINTABLE }; b.getOppositeKeyGroup = function (a) { var d = b.keyGroups; return a == d.FUNCTIONAL ? d.PRINTABLE : d.FUNCTIONAL }; b.ieFunctionalKeysBug = function (a) { return CKEDITOR.env.ie && b.getKeyGroup(a) == b.keyGroups.FUNCTIONAL }; var d = CKEDITOR.plugins.undo.Image = function (b, d) {
                this.editor =
                b; b.fire("beforeUndoImage"); var e = b.getSnapshot(); e && (this.contents = a(e, b.undoManager._filterRules)); d || (this.bookmarks = (e = e && b.getSelection()) && e.createBookmarks2(!0)); b.fire("afterUndoImage")
            }, l = /\b(?:href|src|name)="[^"]*?"/gi; d.prototype = {
                equalsContent: function (a) { var b = this.contents; a = a.contents; CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) && (b = b.replace(l, ""), a = a.replace(l, "")); return b != a ? !1 : !0 }, equalsSelection: function (a) {
                    var b = this.bookmarks; a = a.bookmarks; if (b || a) {
                        if (!b ||
                            !a || b.length != a.length) return !1; for (var d = 0; d < b.length; d++) { var e = b[d], f = a[d]; if (e.startOffset != f.startOffset || e.endOffset != f.endOffset || !CKEDITOR.tools.arrayCompare(e.start, f.start) || !CKEDITOR.tools.arrayCompare(e.end, f.end)) return !1 }
                    } return !0
                }
            }; var h = CKEDITOR.plugins.undo.NativeEditingHandler = function (a) { this.undoManager = a; this.ignoreInputEvent = !1; this.keyEventsStack = new m; this.lastKeydownImage = null }; h.prototype = {
                onKeydown: function (a) {
                    var e = a.data.getKey(); if (229 !== e) if (-1 < CKEDITOR.tools.indexOf(f,
                        a.data.getKeystroke())) a.data.preventDefault(); else if (this.keyEventsStack.cleanUp(a), a = this.undoManager, this.keyEventsStack.getLast(e) || this.keyEventsStack.push(e), this.lastKeydownImage = new d(a.editor), b.isNavigationKey(e) || this.undoManager.keyGroupChanged(e)) if (a.strokesRecorded[0] || a.strokesRecorded[1]) a.save(!1, this.lastKeydownImage, !1), a.resetType()
                }, onInput: function () {
                    if (this.ignoreInputEvent) this.ignoreInputEvent = !1; else {
                        var a = this.keyEventsStack.getLast(); a || (a = this.keyEventsStack.push(0));
                        this.keyEventsStack.increment(a.keyCode); this.keyEventsStack.getTotalInputs() >= this.undoManager.strokesLimit && (this.undoManager.type(a.keyCode, !0), this.keyEventsStack.resetInputs())
                    }
                }, onKeyup: function (a) { var e = this.undoManager; a = a.data.getKey(); var f = this.keyEventsStack.getTotalInputs(); this.keyEventsStack.remove(a); if (!(b.ieFunctionalKeysBug(a) && this.lastKeydownImage && this.lastKeydownImage.equalsContent(new d(e.editor, !0)))) if (0 < f) e.type(a); else if (b.isNavigationKey(a)) this.onNavigationKey(!0) },
                onNavigationKey: function (a) { var b = this.undoManager; !a && b.save(!0, null, !1) || b.updateSelection(new d(b.editor)); b.resetType() }, ignoreInputEventListener: function () { this.ignoreInputEvent = !0 }, activateInputEventListener: function () { this.ignoreInputEvent = !1 }, attachListeners: function () {
                    var a = this.undoManager.editor, d = a.editable(), e = this; d.attachListener(d, "keydown", function (a) { e.onKeydown(a); if (b.ieFunctionalKeysBug(a.data.getKey())) e.onInput() }, null, null, 999); d.attachListener(d, CKEDITOR.env.ie ? "keypress" :
                        "input", e.onInput, e, null, 999); d.attachListener(d, "keyup", e.onKeyup, e, null, 999); d.attachListener(d, "paste", e.ignoreInputEventListener, e, null, 999); d.attachListener(d, "drop", e.ignoreInputEventListener, e, null, 999); a.on("afterPaste", e.activateInputEventListener, e, null, 999); d.attachListener(d.isInline() ? d : a.document.getDocumentElement(), "click", function () { e.onNavigationKey() }, null, null, 999); d.attachListener(this.undoManager.editor, "blur", function () { e.keyEventsStack.remove(9) }, null, null, 999)
                }
            }; var m = CKEDITOR.plugins.undo.KeyEventsStack =
                function () { this.stack = [] }; m.prototype = {
                    push: function (a) { a = this.stack.push({ keyCode: a, inputs: 0 }); return this.stack[a - 1] }, getLastIndex: function (a) { if ("number" != typeof a) return this.stack.length - 1; for (var b = this.stack.length; b--;)if (this.stack[b].keyCode == a) return b; return -1 }, getLast: function (a) { a = this.getLastIndex(a); return -1 != a ? this.stack[a] : null }, increment: function (a) { this.getLast(a).inputs++ }, remove: function (a) { a = this.getLastIndex(a); -1 != a && this.stack.splice(a, 1) }, resetInputs: function (a) {
                        if ("number" ==
                            typeof a) this.getLast(a).inputs = 0; else for (a = this.stack.length; a--;)this.stack[a].inputs = 0
                    }, getTotalInputs: function () { for (var a = this.stack.length, b = 0; a--;)b += this.stack[a].inputs; return b }, cleanUp: function (a) { a = a.data.$; a.ctrlKey || a.metaKey || this.remove(17); a.shiftKey || this.remove(16); a.altKey || this.remove(18) }
                }
        }(), "use strict", function () {
            function a(a, b) {
                CKEDITOR.tools.extend(this, { editor: a, editable: a.editable(), doc: a.document, win: a.window }, b, !0); this.inline = this.editable.isInline(); this.inline ||
                    (this.frame = this.win.getFrame()); this.target = this[this.inline ? "editable" : "doc"]
            } function f(a, b) { CKEDITOR.tools.extend(this, b, { editor: a }, !0) } function e(a, b) {
                var e = a.editable(); CKEDITOR.tools.extend(this, { editor: a, editable: e, inline: e.isInline(), doc: a.document, win: a.window, container: CKEDITOR.document.getBody(), winTop: CKEDITOR.document.getWindow() }, b, !0); this.hidden = {}; this.visible = {}; this.inline || (this.frame = this.win.getFrame()); this.queryViewport(); var f = CKEDITOR.tools.bind(this.queryViewport, this),
                    h = CKEDITOR.tools.bind(this.hideVisible, this), m = CKEDITOR.tools.bind(this.removeAll, this); e.attachListener(this.winTop, "resize", f); e.attachListener(this.winTop, "scroll", f); e.attachListener(this.winTop, "resize", h); e.attachListener(this.win, "scroll", h); e.attachListener(this.inline ? e : this.frame, "mouseout", function (a) {
                        var b = a.data.$.clientX; a = a.data.$.clientY; this.queryViewport(); (b <= this.rect.left || b >= this.rect.right || a <= this.rect.top || a >= this.rect.bottom) && this.hideVisible(); (0 >= b || b >= this.winTopPane.width ||
                            0 >= a || a >= this.winTopPane.height) && this.hideVisible()
                    }, this); e.attachListener(a, "resize", f); e.attachListener(a, "mode", m); a.on("destroy", m); this.lineTpl = (new CKEDITOR.template('\x3cdiv data-cke-lineutils-line\x3d"1" class\x3d"cke_reset_all" style\x3d"{lineStyle}"\x3e\x3cspan style\x3d"{tipLeftStyle}"\x3e\x26nbsp;\x3c/span\x3e\x3cspan style\x3d"{tipRightStyle}"\x3e\x26nbsp;\x3c/span\x3e\x3c/div\x3e')).output({
                        lineStyle: CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({}, l, this.lineStyle, !0)), tipLeftStyle: CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({},
                            d, { left: "0px", "border-left-color": "red", "border-width": "6px 0 6px 6px" }, this.tipCss, this.tipLeftStyle, !0)), tipRightStyle: CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({}, d, { right: "0px", "border-right-color": "red", "border-width": "6px 6px 6px 0" }, this.tipCss, this.tipRightStyle, !0))
                    })
            } function b(a) { var b; if (b = a && a.type == CKEDITOR.NODE_ELEMENT) b = !(h[a.getComputedStyle("float")] || h[a.getAttribute("align")]); return b && !m[a.getComputedStyle("position")] } CKEDITOR.plugins.add("lineutils"); CKEDITOR.LINEUTILS_BEFORE =
                1; CKEDITOR.LINEUTILS_AFTER = 2; CKEDITOR.LINEUTILS_INSIDE = 4; a.prototype = {
                    start: function (a) {
                        var b = this, d = this.editor, e = this.doc, f, h, l, m, u = CKEDITOR.tools.eventsBuffer(50, function () { d.readOnly || "wysiwyg" != d.mode || (b.relations = {}, (h = e.$.elementFromPoint(l, m)) && h.nodeType && (f = new CKEDITOR.dom.element(h), b.traverseSearch(f), isNaN(l + m) || b.pixelSearch(f, l, m), a && a(b.relations, l, m))) }); this.listener = this.editable.attachListener(this.target, "mousemove", function (a) { l = a.data.$.clientX; m = a.data.$.clientY; u.input() });
                        this.editable.attachListener(this.inline ? this.editable : this.frame, "mouseout", function () { u.reset() })
                    }, stop: function () { this.listener && this.listener.removeListener() }, getRange: function () { var a = {}; a[CKEDITOR.LINEUTILS_BEFORE] = CKEDITOR.POSITION_BEFORE_START; a[CKEDITOR.LINEUTILS_AFTER] = CKEDITOR.POSITION_AFTER_END; a[CKEDITOR.LINEUTILS_INSIDE] = CKEDITOR.POSITION_AFTER_START; return function (b) { var d = this.editor.createRange(); d.moveToPosition(this.relations[b.uid].element, a[b.type]); return d } }(), store: function () {
                        function a(b,
                            c, d) { var e = b.getUniqueId(); e in d ? d[e].type |= c : d[e] = { element: b, type: c } } return function (d, e) { var f; e & CKEDITOR.LINEUTILS_AFTER && b(f = d.getNext()) && f.isVisible() && (a(f, CKEDITOR.LINEUTILS_BEFORE, this.relations), e ^= CKEDITOR.LINEUTILS_AFTER); e & CKEDITOR.LINEUTILS_INSIDE && b(f = d.getFirst()) && f.isVisible() && (a(f, CKEDITOR.LINEUTILS_BEFORE, this.relations), e ^= CKEDITOR.LINEUTILS_INSIDE); a(d, e, this.relations) }
                    }(), traverseSearch: function (a) {
                        var d, e, f; do if (f = a.$["data-cke-expando"], !(f && f in this.relations)) {
                            if (a.equals(this.editable)) break;
                            if (b(a)) for (d in this.lookups) (e = this.lookups[d](a)) && this.store(a, e)
                        } while ((!a || a.type != CKEDITOR.NODE_ELEMENT || "true" != a.getAttribute("contenteditable")) && (a = a.getParent()))
                    }, pixelSearch: function () {
                        function a(c, e, f, h, l) { for (var m = 0, u; l(f);) { f += h; if (25 == ++m) break; if (u = this.doc.$.elementFromPoint(e, f)) if (u == c) m = 0; else if (d(c, u) && (m = 0, b(u = new CKEDITOR.dom.element(u)))) return u } } var d = CKEDITOR.env.ie || CKEDITOR.env.webkit ? function (a, b) { return a.contains(b) } : function (a, b) {
                            return !!(a.compareDocumentPosition(b) &
                                16)
                        }; return function (d, e, f) { var h = this.win.getViewPaneSize().height, k = a.call(this, d.$, e, f, -1, function (a) { return 0 < a }); e = a.call(this, d.$, e, f, 1, function (a) { return a < h }); if (k) for (this.traverseSearch(k); !k.getParent().equals(d);)k = k.getParent(); if (e) for (this.traverseSearch(e); !e.getParent().equals(d);)e = e.getParent(); for (; k || e;) { k && (k = k.getNext(b)); if (!k || k.equals(e)) break; this.traverseSearch(k); e && (e = e.getPrevious(b)); if (!e || e.equals(k)) break; this.traverseSearch(e) } }
                    }(), greedySearch: function () {
                        this.relations =
                        {}; for (var a = this.editable.getElementsByTag("*"), d = 0, e, f, h; e = a.getItem(d++);)if (!e.equals(this.editable) && e.type == CKEDITOR.NODE_ELEMENT && (e.hasAttribute("contenteditable") || !e.isReadOnly()) && b(e) && e.isVisible()) for (h in this.lookups) (f = this.lookups[h](e)) && this.store(e, f); return this.relations
                    }
                }; f.prototype = {
                    locate: function () {
                        function a(c, d) {
                            var e = c.element[d === CKEDITOR.LINEUTILS_BEFORE ? "getPrevious" : "getNext"](); return e && b(e) ? (c.siblingRect = e.getClientRect(), d == CKEDITOR.LINEUTILS_BEFORE ? (c.siblingRect.bottom +
                                c.elementRect.top) / 2 : (c.elementRect.bottom + c.siblingRect.top) / 2) : d == CKEDITOR.LINEUTILS_BEFORE ? c.elementRect.top : c.elementRect.bottom
                        } return function (b) {
                            var d; this.locations = {}; for (var e in b) d = b[e], d.elementRect = d.element.getClientRect(), d.type & CKEDITOR.LINEUTILS_BEFORE && this.store(e, CKEDITOR.LINEUTILS_BEFORE, a(d, CKEDITOR.LINEUTILS_BEFORE)), d.type & CKEDITOR.LINEUTILS_AFTER && this.store(e, CKEDITOR.LINEUTILS_AFTER, a(d, CKEDITOR.LINEUTILS_AFTER)), d.type & CKEDITOR.LINEUTILS_INSIDE && this.store(e, CKEDITOR.LINEUTILS_INSIDE,
                                (d.elementRect.top + d.elementRect.bottom) / 2); return this.locations
                        }
                    }(), sort: function () { var a, b, d, e; return function (f, h) { a = this.locations; b = []; for (var l in a) for (var m in a[l]) if (d = Math.abs(f - a[l][m]), b.length) { for (e = 0; e < b.length; e++)if (d < b[e].dist) { b.splice(e, 0, { uid: +l, type: m, dist: d }); break } e == b.length && b.push({ uid: +l, type: m, dist: d }) } else b.push({ uid: +l, type: m, dist: d }); return "undefined" != typeof h ? b.slice(0, h) : b } }(), store: function (a, b, d) {
                        this.locations[a] || (this.locations[a] = {}); this.locations[a][b] =
                            d
                    }
                }; var d = { display: "block", width: "0px", height: "0px", "border-color": "transparent", "border-style": "solid", position: "absolute", top: "-6px" }, l = { height: "0px", "border-top": "1px dashed red", position: "absolute", "z-index": 9999 }; e.prototype = {
                    removeAll: function () { for (var a in this.hidden) this.hidden[a].remove(), delete this.hidden[a]; for (a in this.visible) this.visible[a].remove(), delete this.visible[a] }, hideLine: function (a) { var b = a.getUniqueId(); a.hide(); this.hidden[b] = a; delete this.visible[b] }, showLine: function (a) {
                        var b =
                            a.getUniqueId(); a.show(); this.visible[b] = a; delete this.hidden[b]
                    }, hideVisible: function () { for (var a in this.visible) this.hideLine(this.visible[a]) }, placeLine: function (a, b) {
                        var d, e, f; if (d = this.getStyle(a.uid, a.type)) {
                            for (f in this.visible) if (this.visible[f].getCustomData("hash") !== this.hash) { e = this.visible[f]; break } if (!e) for (f in this.hidden) if (this.hidden[f].getCustomData("hash") !== this.hash) { this.showLine(e = this.hidden[f]); break } e || this.showLine(e = this.addLine()); e.setCustomData("hash", this.hash);
                            this.visible[e.getUniqueId()] = e; e.setStyles(d); b && b(e)
                        }
                    }, getStyle: function (a, b) {
                        var d = this.relations[a], e = this.locations[a][b], f = {}; f.width = d.siblingRect ? Math.max(d.siblingRect.width, d.elementRect.width) : d.elementRect.width; f.top = this.inline ? e + this.winTopScroll.y - this.rect.relativeY : this.rect.top + this.winTopScroll.y + e; if (f.top - this.winTopScroll.y < this.rect.top || f.top - this.winTopScroll.y > this.rect.bottom) return !1; this.inline ? f.left = d.elementRect.left - this.rect.relativeX : (0 < d.elementRect.left ? f.left =
                            this.rect.left + d.elementRect.left : (f.width += d.elementRect.left, f.left = this.rect.left), 0 < (d = f.left + f.width - (this.rect.left + this.winPane.width)) && (f.width -= d)); f.left += this.winTopScroll.x; for (var h in f) f[h] = CKEDITOR.tools.cssLength(f[h]); return f
                    }, addLine: function () { var a = CKEDITOR.dom.element.createFromHtml(this.lineTpl); a.appendTo(this.container); return a }, prepare: function (a, b) { this.relations = a; this.locations = b; this.hash = Math.random() }, cleanup: function () {
                        var a, b; for (b in this.visible) a = this.visible[b],
                            a.getCustomData("hash") !== this.hash && this.hideLine(a)
                    }, queryViewport: function () { this.winPane = this.win.getViewPaneSize(); this.winTopScroll = this.winTop.getScrollPosition(); this.winTopPane = this.winTop.getViewPaneSize(); this.rect = this.getClientRect(this.inline ? this.editable : this.frame) }, getClientRect: function (a) {
                        a = a.getClientRect(); var b = this.container.getDocumentPosition(), d = this.container.getComputedStyle("position"); a.relativeX = a.relativeY = 0; "static" != d && (a.relativeY = b.y, a.relativeX = b.x, a.top -= a.relativeY,
                            a.bottom -= a.relativeY, a.left -= a.relativeX, a.right -= a.relativeX); return a
                    }
                }; var h = { left: 1, right: 1, center: 1 }, m = { absolute: 1, fixed: 1 }; CKEDITOR.plugins.lineutils = { finder: a, locator: f, liner: e }
        }(), function () {
            function a(a) { return a.getName && !a.hasAttribute("data-cke-temp") } CKEDITOR.plugins.add("widgetselection", {
                init: function (a) {
                    if (CKEDITOR.env.webkit) {
                        var e = CKEDITOR.plugins.widgetselection; a.on("contentDom", function (a) {
                            a = a.editor; var d = a.editable(); d.attachListener(d, "keydown", function (a) {
                                a.data.getKeystroke() ==
                                CKEDITOR.CTRL + 65 && CKEDITOR.tools.setTimeout(function () { e.addFillers(d) || e.removeFillers(d) }, 0)
                            }, null, null, -1); a.on("selectionCheck", function (a) { e.removeFillers(a.editor.editable()) }); a.on("paste", function (a) { a.data.dataValue = e.cleanPasteData(a.data.dataValue) }); "selectall" in a.plugins && e.addSelectAllIntegration(a)
                        })
                    }
                }
            }); CKEDITOR.plugins.widgetselection = {
                startFiller: null, endFiller: null, fillerAttribute: "data-cke-filler-webkit", fillerContent: "\x26nbsp;", fillerTagName: "div", addFillers: function (f) {
                    var e =
                        f.editor; if (!this.isWholeContentSelected(f) && 0 < f.getChildCount()) { var b = f.getFirst(a), d = f.getLast(a); b && b.type == CKEDITOR.NODE_ELEMENT && !b.isEditable() && (this.startFiller = this.createFiller(), f.append(this.startFiller, 1)); d && d.type == CKEDITOR.NODE_ELEMENT && !d.isEditable() && (this.endFiller = this.createFiller(!0), f.append(this.endFiller, 0)); if (this.hasFiller(f)) return e = e.createRange(), e.selectNodeContents(f), e.select(), !0 } return !1
                }, removeFillers: function (a) {
                    if (this.hasFiller(a) && !this.isWholeContentSelected(a)) {
                        var e =
                            a.findOne(this.fillerTagName + "[" + this.fillerAttribute + "\x3dstart]"), b = a.findOne(this.fillerTagName + "[" + this.fillerAttribute + "\x3dend]"); this.startFiller && e && this.startFiller.equals(e) ? this.removeFiller(this.startFiller, a) : this.startFiller = e; this.endFiller && b && this.endFiller.equals(b) ? this.removeFiller(this.endFiller, a) : this.endFiller = b
                    }
                }, cleanPasteData: function (a) { a && a.length && (a = a.replace(this.createFillerRegex(), "").replace(this.createFillerRegex(!0), "")); return a }, isWholeContentSelected: function (a) {
                    var e =
                        a.editor.getSelection().getRanges()[0]; return !e || e && e.collapsed ? !1 : (e = e.clone(), e.enlarge(CKEDITOR.ENLARGE_ELEMENT), !!(e && a && e.startContainer && e.endContainer && 0 === e.startOffset && e.endOffset === a.getChildCount() && e.startContainer.equals(a) && e.endContainer.equals(a)))
                }, hasFiller: function (a) { return 0 < a.find(this.fillerTagName + "[" + this.fillerAttribute + "]").count() }, createFiller: function (a) {
                    var e = new CKEDITOR.dom.element(this.fillerTagName); e.setHtml(this.fillerContent); e.setAttribute(this.fillerAttribute,
                        a ? "end" : "start"); e.setAttribute("data-cke-temp", 1); e.setStyles({ display: "block", width: 0, height: 0, padding: 0, border: 0, margin: 0, position: "absolute", top: 0, left: "-9999px", opacity: 0, overflow: "hidden" }); return e
                }, removeFiller: function (a, e) {
                    if (a) {
                        var b = e.editor, d = e.editor.getSelection().getRanges()[0].startPath(), l = b.createRange(), h, m; d.contains(a) && (h = a.getHtml(), m = !0); d = "start" == a.getAttribute(this.fillerAttribute); a.remove(); h && 0 < h.length && h != this.fillerContent ? (e.insertHtmlIntoRange(h, b.getSelection().getRanges()[0]),
                            l.setStartAt(e.getChild(e.getChildCount() - 1), CKEDITOR.POSITION_BEFORE_END), b.getSelection().selectRanges([l])) : m && (d ? l.setStartAt(e.getFirst().getNext(), CKEDITOR.POSITION_AFTER_START) : l.setEndAt(e.getLast().getPrevious(), CKEDITOR.POSITION_BEFORE_END), e.editor.getSelection().selectRanges([l]))
                    }
                }, createFillerRegex: function (a) { var e = this.createFiller(a).getOuterHtml().replace(/style="[^"]*"/gi, 'style\x3d"[^"]*"').replace(/>[^<]*</gi, "\x3e[^\x3c]*\x3c"); return new RegExp((a ? "" : "^") + e + (a ? "$" : "")) }, addSelectAllIntegration: function (a) {
                    var e =
                        this; a.editable().attachListener(a, "beforeCommandExec", function (b) { var d = a.editable(); "selectAll" == b.data.name && d && e.addFillers(d) }, null, null, 9999)
                }
            }
        }(), "use strict", function () {
            function a(a) {
                this.editor = a; this.registered = {}; this.instances = {}; this.selected = []; this.widgetHoldingFocusedEditable = this.focused = null; this._ = { nextId: 0, upcasts: [], upcastCallbacks: [], filters: {} }; F(this); B(this); this.on("checkWidgets", h); this.editor.on("contentDomInvalidated", this.checkWidgets, this); D(this); v(this); z(this); A(this);
                x(this)
            } function f(a, b, c, d, e) {
                var g = a.editor; CKEDITOR.tools.extend(this, d, { editor: g, id: b, inline: "span" == c.getParent().getName(), element: c, data: CKEDITOR.tools.extend({}, "function" == typeof d.defaults ? d.defaults() : d.defaults), dataReady: !1, inited: !1, ready: !1, edit: f.prototype.edit, focusedEditable: null, definition: d, repository: a, draggable: !1 !== d.draggable, _: { downcastFn: d.downcast && "string" == typeof d.downcast ? d.downcasts[d.downcast] : d.downcast } }, !0); a.fire("instanceCreated", this); I(this, d); this.init && this.init();
                this.inited = !0; (a = this.element.data("cke-widget-data")) && this.setData(JSON.parse(decodeURIComponent(a))); e && this.setData(e); this.data.classes || this.setData("classes", this.getClasses()); this.dataReady = !0; ca(this); this.fire("data", this.data); this.isInited() && g.editable().contains(this.wrapper) && (this.ready = !0, this.fire("ready"))
            } function e(a, b, c) {
                CKEDITOR.dom.element.call(this, b.$); this.editor = a; this._ = {}; b = this.filter = c.filter; CKEDITOR.dtd[this.getName()].p ? (this.enterMode = b ? b.getAllowedEnterMode(a.enterMode) :
                    a.enterMode, this.shiftEnterMode = b ? b.getAllowedEnterMode(a.shiftEnterMode, !0) : a.shiftEnterMode) : this.enterMode = this.shiftEnterMode = CKEDITOR.ENTER_BR
            } function b(a, b) {
                a.addCommand(b.name, {
                    exec: function (a, c) {
                        function d() { a.widgets.finalizeCreation(h) } var e = a.widgets.focused; if (e && e.name == b.name) e.edit(); else if (b.insert) b.insert({ editor: a, commandData: c }); else if (b.template) {
                            var e = "function" == typeof b.defaults ? b.defaults() : b.defaults, e = CKEDITOR.dom.element.createFromHtml(b.template.output(e), a.document),
                            f, g = a.widgets.wrapElement(e, b.name), h = new CKEDITOR.dom.documentFragment(g.getDocument()); h.append(g); (f = a.widgets.initOn(e, b, c && c.startupData)) ? (e = f.once("edit", function (b) { if (b.data.dialog) f.once("dialog", function (b) { b = b.data; var c, e; c = b.once("ok", d, null, null, 20); e = b.once("cancel", function (b) { b.data && !1 === b.data.hide || a.widgets.destroy(f, !0) }); b.once("hide", function () { c.removeListener(); e.removeListener() }) }); else d() }, null, null, 999), f.edit(), e.removeListener()) : d()
                        }
                    }, allowedContent: b.allowedContent,
                    requiredContent: b.requiredContent, contentForms: b.contentForms, contentTransformations: b.contentTransformations
                })
            } function d(a, b) {
                function c(a, d) { var e = b.upcast.split(","), f, g; for (g = 0; g < e.length; g++)if (f = e[g], f === a.name) return b.upcasts[f].call(this, a, d); return !1 } function d(b, c, e) { var f = CKEDITOR.tools.getIndex(a._.upcasts, function (a) { return a[2] > e }); 0 > f && (f = a._.upcasts.length); a._.upcasts.splice(f, 0, [CKEDITOR.tools.bind(b, c), c.name, e]) } var e = b.upcast, f = b.upcastPriority || 10; e && ("string" == typeof e ? d(c,
                    b, f) : d(e, b, f))
            } function l(a, b) { a.focused = null; if (b.isInited()) { var c = b.editor.checkDirty(); a.fire("widgetBlurred", { widget: b }); b.setFocused(!1); !c && b.editor.resetDirty() } } function h(a) {
                a = a.data; if ("wysiwyg" == this.editor.mode) {
                    var b = this.editor.editable(), c = this.instances, d, e, g, h; if (b) {
                        for (d in c) c[d].isReady() && !b.contains(c[d].wrapper) && this.destroy(c[d], !0); if (a && a.initOnlyNew) c = this.initOnAll(); else {
                            var k = b.find(".cke_widget_wrapper"), c = []; d = 0; for (e = k.count(); d < e; d++) {
                                g = k.getItem(d); if (h = !this.getByElement(g,
                                    !0)) { a: { h = t; for (var l = g; l = l.getParent();)if (h(l)) { h = !0; break a } h = !1 } h = !h } h && b.contains(g) && (g.addClass("cke_widget_new"), c.push(this.initOn(g.getFirst(f.isDomWidgetElement))))
                            }
                        } a && a.focusInited && 1 == c.length && c[0].focus()
                    }
                }
            } function m(a) {
                if ("undefined" != typeof a.attributes && a.attributes["data-widget"]) {
                    var b = c(a), d = k(a), e = !1; b && b.value && b.value.match(/^\s/g) && (b.parent.attributes["data-cke-white-space-first"] = 1, b.value = b.value.replace(/^\s/g, "\x26nbsp;"), e = !0); d && d.value && d.value.match(/\s$/g) && (d.parent.attributes["data-cke-white-space-last"] =
                        1, d.value = d.value.replace(/\s$/g, "\x26nbsp;"), e = !0); e && (a.attributes["data-cke-widget-white-space"] = 1)
                }
            } function c(a) { return a.find(function (a) { return 3 === a.type }, !0).shift() } function k(a) { return a.find(function (a) { return 3 === a.type }, !0).pop() } function g(a, b, c) {
                if (!c.allowedContent && !c.disallowedContent) return null; var d = this._.filters[a]; d || (this._.filters[a] = d = {}); a = d[b]; a || (a = c.allowedContent ? new CKEDITOR.filter(c.allowedContent) : this.editor.filter.clone(), d[b] = a, c.disallowedContent && a.disallow(c.disallowedContent));
                return a
            } function n(a) {
                var b = [], c = a._.upcasts, d = a._.upcastCallbacks; return {
                    toBeWrapped: b, iterator: function (a) {
                        var e, g, h, k, l; if ("data-cke-widget-wrapper" in a.attributes) return (a = a.getFirst(f.isParserWidgetElement)) && b.push([a]), !1; if ("data-widget" in a.attributes) return b.push([a]), !1; if (l = c.length) {
                            if (a.attributes["data-cke-widget-upcasted"]) return !1; k = 0; for (e = d.length; k < e; ++k)if (!1 === d[k](a)) return; for (k = 0; k < l; ++k)if (e = c[k], h = {}, g = e[0](a, h)) return g instanceof CKEDITOR.htmlParser.element && (a = g), a.attributes["data-cke-widget-data"] =
                                encodeURIComponent(JSON.stringify(h)), a.attributes["data-cke-widget-upcasted"] = 1, b.push([a, e[1]]), !1
                        }
                    }
                }
            } function r(a, b) { return { tabindex: -1, contenteditable: "false", "data-cke-widget-wrapper": 1, "data-cke-filter": "off", "class": "cke_widget_wrapper cke_widget_new cke_widget_" + (a ? "inline" : "block") + (b ? " cke_widget_" + b : "") } } function w(a, b, c) {
                if (a.type == CKEDITOR.NODE_ELEMENT) {
                    var d = CKEDITOR.dtd[a.name]; if (d && !d[c.name]) {
                        var d = a.split(b), e = a.parent; b = d.getIndex(); a.children.length || (--b, a.remove()); d.children.length ||
                            d.remove(); return w(e, b, c)
                    }
                } a.add(c, b)
            } function p(a, b) { return "boolean" == typeof a.inline ? a.inline : !!CKEDITOR.dtd.$inline[b] } function t(a) { return a.hasAttribute("data-cke-temp") } function u(a, b, c, d) {
                var e = a.editor; e.fire("lockSnapshot"); c ? (d = c.data("cke-widget-editable"), d = b.editables[d], a.widgetHoldingFocusedEditable = b, b.focusedEditable = d, c.addClass("cke_widget_editable_focused"), d.filter && e.setActiveFilter(d.filter), e.setActiveEnterMode(d.enterMode, d.shiftEnterMode)) : (d || b.focusedEditable.removeClass("cke_widget_editable_focused"),
                    b.focusedEditable = null, a.widgetHoldingFocusedEditable = null, e.setActiveFilter(null), e.setActiveEnterMode(null, null)); e.fire("unlockSnapshot")
            } function y(a) { a.contextMenu && a.contextMenu.addListener(function (b) { if (b = a.widgets.getByElement(b, !0)) return b.fire("contextMenu", {}) }) } function q(a, b) { return CKEDITOR.tools.trim(b) } function A(a) {
                var b = a.editor, c = CKEDITOR.plugins.lineutils; b.on("dragstart", function (c) {
                    var d = c.data.target; f.isDomDragHandler(d) && (d = a.getByElement(d), c.data.dataTransfer.setData("cke/widget-id",
                        d.id), b.focus(), d.focus())
                }); b.on("drop", function (c) {
                    function d(a, b) { return a && b ? a.wrapper.equals(b.wrapper) || a.wrapper.contains(b.wrapper) : !1 } var e = c.data.dataTransfer, f = e.getData("cke/widget-id"), g = e.getTransferType(b), e = b.createRange(), h = function (a) { a = a.getBoundaryNodes().startNode; a.type !== CKEDITOR.NODE_ELEMENT && (a = a.getParent()); return b.widgets.getByElement(a) }(c.data.dropRange); if ("" !== f && g === CKEDITOR.DATA_TRANSFER_CROSS_EDITORS) c.cancel(); else if (g == CKEDITOR.DATA_TRANSFER_INTERNAL) if ("" ===
                        f && 0 < b.widgets.selected.length) c.data.dataTransfer.setData("text/html", H(b)); else if (f = a.instances[f]) d(f, h) ? c.cancel() : (e.setStartBefore(f.wrapper), e.setEndAfter(f.wrapper), c.data.dragRange = e, delete CKEDITOR.plugins.clipboard.dragStartContainerChildCount, delete CKEDITOR.plugins.clipboard.dragEndContainerChildCount, c.data.dataTransfer.setData("text/html", f.getClipboardHtml()), b.widgets.destroy(f, !0))
                }); b.on("contentDom", function () {
                    var d = b.editable(); CKEDITOR.tools.extend(a, {
                        finder: new c.finder(b,
                            { lookups: { "default": function (b) { if (!b.is(CKEDITOR.dtd.$listItem) && b.is(CKEDITOR.dtd.$block) && !f.isDomNestedEditable(b) && !a._.draggedWidget.wrapper.contains(b)) { var c = f.getNestedEditable(d, b); if (c) { b = a._.draggedWidget; if (a.getByElement(c) == b) return; c = CKEDITOR.filter.instances[c.data("cke-filter")]; b = b.requiredContent; if (c && b && !c.check(b)) return } return CKEDITOR.LINEUTILS_BEFORE | CKEDITOR.LINEUTILS_AFTER } } } }), locator: new c.locator(b), liner: new c.liner(b, {
                                lineStyle: { cursor: "move !important", "border-top-color": "#666" },
                                tipLeftStyle: { "border-left-color": "#666" }, tipRightStyle: { "border-right-color": "#666" }
                            })
                    }, !0)
                })
            } function v(a) {
                var b = a.editor; b.on("contentDom", function () {
                    var c = b.editable(), d = c.isInline() ? c : b.document, e, g; c.attachListener(d, "mousedown", function (c) {
                        var d = c.data.getTarget(); e = d instanceof CKEDITOR.dom.element ? a.getByElement(d) : null; g = 0; e && (e.inline && d.type == CKEDITOR.NODE_ELEMENT && d.hasAttribute("data-cke-widget-drag-handler") ? (g = 1, a.focused != e && b.getSelection().removeAllRanges()) : f.getNestedEditable(e.wrapper,
                            d) ? e = null : (c.data.preventDefault(), CKEDITOR.env.ie || e.focus()))
                    }); c.attachListener(d, "mouseup", function () { g && e && e.wrapper && (g = 0, e.focus()) }); CKEDITOR.env.ie && c.attachListener(d, "mouseup", function () { setTimeout(function () { e && e.wrapper && c.contains(e.wrapper) && (e.focus(), e = null) }) })
                }); b.on("doubleclick", function (b) { var c = a.getByElement(b.data.element); if (c && !f.getNestedEditable(c.wrapper, b.data.element)) return c.fire("doubleclick", { element: b.data.element }) }, null, null, 1)
            } function z(a) {
                a.editor.on("key",
                    function (b) { var c = a.focused, d = a.widgetHoldingFocusedEditable, e; c ? e = c.fire("key", { keyCode: b.data.keyCode }) : d && (c = b.data.keyCode, b = d.focusedEditable, c == CKEDITOR.CTRL + 65 ? (c = b.getBogus(), d = d.editor.createRange(), d.selectNodeContents(b), c && d.setEndAt(c, CKEDITOR.POSITION_BEFORE_START), d.select(), e = !1) : 8 == c || 46 == c ? (e = d.editor.getSelection().getRanges(), d = e[0], e = !(1 == e.length && d.collapsed && d.checkBoundaryOfElement(b, CKEDITOR[8 == c ? "START" : "END"]))) : e = void 0); return e }, null, null, 1)
            } function x(a) {
                function b(d) {
                    1 >
                    a.selected.length || O(c, "cut" === d.name)
                } var c = a.editor; c.on("contentDom", function () { var a = c.editable(); a.attachListener(a, "copy", b); a.attachListener(a, "cut", b) })
            } function D(a) {
                function b() { var a = e.getSelection(); if (a && (a = a.getRanges()[0]) && !a.collapsed) { var d = c(a.startContainer), f = c(a.endContainer); !d && f ? (a.setEndBefore(f.wrapper), a.select()) : d && !f && (a.setStartAfter(d.wrapper), a.select()) } } function c(a) { return a ? a.type == CKEDITOR.NODE_TEXT ? c(a.getParent()) : e.widgets.getByElement(a) : null } function d() { a.fire("checkSelection") }
                var e = a.editor; e.on("selectionCheck", d); e.on("contentDom", function () { e.editable().attachListener(e, "key", function () { setTimeout(d, 10) }) }); if (!CKEDITOR.env.ie) a.on("checkSelection", b); a.on("checkSelection", a.checkSelection, a); e.on("selectionChange", function (b) { var c = (b = f.getNestedEditable(e.editable(), b.data.selection.getStartElement())) && a.getByElement(b), d = a.widgetHoldingFocusedEditable; d ? d === c && d.focusedEditable.equals(b) || (u(a, d, null), c && b && u(a, c, b)) : c && b && u(a, c, b) }); e.on("dataReady", function () { E(a).commit() });
                e.on("blur", function () { var b; (b = a.focused) && l(a, b); (b = a.widgetHoldingFocusedEditable) && u(a, b, null) })
            } function B(a) {
                var b = a.editor, d = {}; b.on("toDataFormat", function (b) {
                    var e = CKEDITOR.tools.getNextNumber(), g = []; b.data.downcastingSessionId = e; d[e] = g; b.data.dataValue.forEach(function (b) {
                        var d = b.attributes, e; if ("data-cke-widget-white-space" in d) {
                            e = c(b); var h = k(b); e.parent.attributes["data-cke-white-space-first"] && (e.value = e.value.replace(/^&nbsp;/g, " ")); h.parent.attributes["data-cke-white-space-last"] &&
                                (h.value = h.value.replace(/&nbsp;$/g, " "))
                        } if ("data-cke-widget-id" in d) { if (d = a.instances[d["data-cke-widget-id"]]) e = b.getFirst(f.isParserWidgetElement), g.push({ wrapper: b, element: e, widget: d, editables: {} }), "1" != e.attributes["data-cke-widget-keep-attr"] && delete e.attributes["data-widget"] } else if ("data-cke-widget-editable" in d) return 0 < g.length && (g[g.length - 1].editables[d["data-cke-widget-editable"]] = b), !1
                    }, CKEDITOR.NODE_ELEMENT, !0)
                }, null, null, 8); b.on("toDataFormat", function (a) {
                    if (a.data.downcastingSessionId) for (var b =
                        d[a.data.downcastingSessionId], c, e, f, g, h, k; c = b.shift();) { e = c.widget; f = c.element; g = e._.downcastFn && e._.downcastFn.call(e, f); a.data.widgetsCopy && e.getClipboardHtml && (g = CKEDITOR.htmlParser.fragment.fromHtml(e.getClipboardHtml()), g = g.children[0]); for (k in c.editables) h = c.editables[k], delete h.attributes.contenteditable, h.setHtml(e.editables[k].getData()); g || (g = f); c.wrapper.replaceWith(g) }
                }, null, null, 13); b.on("contentDomUnload", function () { a.destroyAll(!0) })
            } function F(a) {
                var b = a.editor, c, d; b.on("toHtml",
                    function (b) { var d = n(a), e; for (b.data.dataValue.forEach(d.iterator, CKEDITOR.NODE_ELEMENT, !0); e = d.toBeWrapped.pop();) { var g = e[0], h = g.parent; h.type == CKEDITOR.NODE_ELEMENT && h.attributes["data-cke-widget-wrapper"] && h.replaceWith(g); a.wrapElement(e[0], e[1]) } c = b.data.protectedWhitespaces ? 3 == b.data.dataValue.children.length && f.isParserWidgetWrapper(b.data.dataValue.children[1]) : 1 == b.data.dataValue.children.length && f.isParserWidgetWrapper(b.data.dataValue.children[0]) }, null, null, 8); b.on("dataReady", function () {
                        if (d) for (var c =
                            b.editable().find(".cke_widget_wrapper"), e, g, h = 0, k = c.count(); h < k; ++h)e = c.getItem(h), g = e.getFirst(f.isDomWidgetElement), g.type == CKEDITOR.NODE_ELEMENT && g.data("widget") ? (g.replace(e), a.wrapElement(g)) : e.remove(); d = 0; a.destroyAll(!0); a.initOnAll()
                    }); b.on("loadSnapshot", function (b) { /data-cke-widget/.test(b.data) && (d = 1); a.destroyAll(!0) }, null, null, 9); b.on("paste", function (a) {
                        a = a.data; a.dataValue = a.dataValue.replace(S, q); a.range && (a = f.getNestedEditable(b.editable(), a.range.startContainer)) && (a = CKEDITOR.filter.instances[a.data("cke-filter")]) &&
                            b.setActiveFilter(a)
                    }); b.on("afterInsertHtml", function (d) { d.data.intoRange ? a.checkWidgets({ initOnlyNew: !0 }) : (b.fire("lockSnapshot"), a.checkWidgets({ initOnlyNew: !0, focusInited: c }), b.fire("unlockSnapshot")) })
            } function E(a) {
                var b = a.selected, c = [], d = b.slice(0), e = null; return {
                    select: function (a) { 0 > CKEDITOR.tools.indexOf(b, a) && c.push(a); a = CKEDITOR.tools.indexOf(d, a); 0 <= a && d.splice(a, 1); return this }, focus: function (a) { e = a; return this }, commit: function () {
                        var f = a.focused !== e, g, h; a.editor.fire("lockSnapshot"); for (f &&
                            (g = a.focused) && l(a, g); g = d.pop();)b.splice(CKEDITOR.tools.indexOf(b, g), 1), g.isInited() && (h = g.editor.checkDirty(), g.setSelected(!1), !h && g.editor.resetDirty()); f && e && (h = a.editor.checkDirty(), a.focused = e, a.fire("widgetFocused", { widget: e }), e.setFocused(!0), !h && a.editor.resetDirty()); for (; g = c.pop();)b.push(g), g.setSelected(!0); a.editor.fire("unlockSnapshot")
                    }
                }
            } function L(a) {
                a && a.addFilterRule(function (a) {
                    return a.replace(/\s*cke_widget_selected/g, "").replace(/\s*cke_widget_focused/g, "").replace(/<span[^>]*cke_widget_drag_handler_container[^>]*.*?<\/span>/gmi,
                        "")
                })
            } function M(a, b, c) { var d = 0; b = J(b); var e = a.data.classes || {}, f; if (b) { for (e = CKEDITOR.tools.clone(e); f = b.pop();)c ? e[f] || (d = e[f] = 1) : e[f] && (delete e[f], d = 1); d && a.setData("classes", e) } } function C(a) { a.cancel() } function O(a, b) {
                var c = a.widgets.focused, d, e, f; ea.hasCopyBin(a) || (e = new ea(a, {
                    beforeDestroy: function () { !b && c && c.focus(); f && a.getSelection().selectBookmarks(f); d && CKEDITOR.plugins.widgetselection.addFillers(a.editable()) }, afterDestroy: function () {
                        b && !a.readOnly && (c ? a.widgets.del(c) : a.extractSelectedHtml(),
                            a.fire("saveSnapshot"))
                    }
                }), c || (d = CKEDITOR.env.webkit && CKEDITOR.plugins.widgetselection.isWholeContentSelected(a.editable()), f = a.getSelection().createBookmarks(!0)), e.handle(H(a)))
            } function J(a) { return (a = (a = a.getDefinition().attributes) && a["class"]) ? a.split(/\s+/) : null } function N() { var a = CKEDITOR.document.getActive(), b = this.editor, c = b.editable(); (c.isInline() ? c : b.document.getWindow().getFrame()).equals(a) && b.focusManager.focus(c) } function R() {
                CKEDITOR.env.gecko && this.editor.unlockSelection(); CKEDITOR.env.webkit ||
                    (this.editor.forceNextSelectionCheck(), this.editor.selectionChange(1))
            } function H(a) { var b = a.getSelectedHtml(!0); if (a.widgets.focused) return a.widgets.focused.getClipboardHtml(); a.once("toDataFormat", function (a) { a.data.widgetsCopy = !0 }, null, null, -1); return a.dataProcessor.toDataFormat(b) } function I(a, b) {
                P(a); X(a); U(a); Y(a); V(a); aa(a); ba(a); if (CKEDITOR.env.ie && 9 > CKEDITOR.env.version) a.wrapper.on("dragstart", function (b) {
                    var c = b.data.getTarget(); f.getNestedEditable(a, c) || a.inline && f.isDomDragHandler(c) ||
                        b.data.preventDefault()
                }); a.wrapper.removeClass("cke_widget_new"); a.element.addClass("cke_widget_element"); a.on("key", function (b) { b = b.data.keyCode; if (13 == b) a.edit(); else { if (b == CKEDITOR.CTRL + 67 || b == CKEDITOR.CTRL + 88) { O(a.editor, b == CKEDITOR.CTRL + 88); return } if (b in T || CKEDITOR.CTRL & b || CKEDITOR.ALT & b) return } return !1 }, null, null, 999); a.on("doubleclick", function (b) { a.edit() && b.cancel() }); if (b.data) a.on("data", b.data); if (b.edit) a.on("edit", b.edit)
            } function P(a) {
                (a.wrapper = a.element.getParent()).setAttribute("data-cke-widget-id",
                    a.id)
            } function X(a, b) { a.partSelectors || (a.partSelectors = a.parts); if (a.parts) { var c = {}, d, e; for (e in a.partSelectors) b || !a.parts[e] || "string" == typeof a.parts[e] ? (d = a.wrapper.findOne(a.partSelectors[e]), c[e] = d) : c[e] = a.parts[e]; a.parts = c } } function U(a) { var b = a.editables, c, d; a.editables = {}; if (a.editables) for (c in b) d = b[c], a.initEditable(c, "string" == typeof d ? { selector: d } : d) } function Y(a) {
                if (!0 === a.mask) ha(a); else if (a.mask) {
                    var b = new CKEDITOR.tools.buffers.throttle(250, K, a), c = CKEDITOR.env.gecko ? 300 : 0, d,
                    e; a.on("focus", function () { b.input(); d = a.editor.on("change", b.input); e = a.on("blur", function () { d.removeListener(); e.removeListener() }) }); a.editor.on("instanceReady", function () { setTimeout(function () { b.input() }, c) }); a.editor.on("mode", function () { setTimeout(function () { b.input() }, c) }); if (CKEDITOR.env.gecko) { var f = a.element.find("img"); CKEDITOR.tools.array.forEach(f.toArray(), function (a) { a.on("load", function () { b.input() }) }) } for (var g in a.editables) a.editables[g].on("focus", function () {
                        a.editor.on("change",
                            b.input); e && e.removeListener()
                    }), a.editables[g].on("blur", function () { a.editor.removeListener("change", b.input) }); b.input()
                }
            } function ha(a) { var b = a.wrapper.findOne(".cke_widget_mask"); b || (b = new CKEDITOR.dom.element("img", a.editor.document), b.setAttributes({ src: CKEDITOR.tools.transparentImageData, "class": "cke_reset cke_widget_mask" }), a.wrapper.append(b)); a.mask = b } function K() {
                if (this.wrapper) {
                    this.maskPart = this.maskPart || this.mask; var a = this.parts[this.maskPart], b; if (a && "string" != typeof a) {
                        b = this.wrapper.findOne(".cke_widget_partial_mask");
                        b || (b = new CKEDITOR.dom.element("img", this.editor.document), b.setAttributes({ src: CKEDITOR.tools.transparentImageData, "class": "cke_reset cke_widget_partial_mask" }), this.wrapper.append(b)); this.mask = b; var c = b.$, d = a.$, e = !(c.offsetTop == d.offsetTop && c.offsetLeft == d.offsetLeft); if (c.offsetWidth != d.offsetWidth || c.offsetHeight != d.offsetHeight || e) c = a.getParent(), d = CKEDITOR.plugins.widget.isDomWidget(c), b.setStyles({
                            top: a.$.offsetTop + (d ? 0 : c.$.offsetTop) + "px", left: a.$.offsetLeft + (d ? 0 : c.$.offsetLeft) + "px", width: a.$.offsetWidth +
                                "px", height: a.$.offsetHeight + "px"
                        })
                    }
                }
            } function V(a) {
                if (a.draggable) {
                    var b = a.editor, c = a.wrapper.getLast(f.isDomDragHandlerContainer), d; c ? d = c.findOne("img") : (c = new CKEDITOR.dom.element("span", b.document), c.setAttributes({ "class": "cke_reset cke_widget_drag_handler_container", style: "background:rgba(220,220,220,0.5);background-image:url(" + b.plugins.widget.path + "images/handle.png);display:none;" }), d = new CKEDITOR.dom.element("img", b.document), d.setAttributes({
                        "class": "cke_reset cke_widget_drag_handler",
                        "data-cke-widget-drag-handler": "1", src: CKEDITOR.tools.transparentImageData, width: 15, title: b.lang.widget.move, height: 15, role: "presentation"
                    }), a.inline && d.setAttribute("draggable", "true"), c.append(d), a.wrapper.append(c)); a.wrapper.on("dragover", function (a) { a.data.preventDefault() }); a.wrapper.on("mouseenter", a.updateDragHandlerPosition, a); setTimeout(function () { a.on("data", a.updateDragHandlerPosition, a) }, 50); if (!a.inline && (d.on("mousedown", W, a), CKEDITOR.env.ie && 9 > CKEDITOR.env.version)) d.on("dragstart",
                        function (a) { a.data.preventDefault(!0) }); a.dragHandlerContainer = c
                }
            } function W(a) {
                function b() { var c; for (p.reset(); c = h.pop();)c.removeListener(); var d = k; c = a.sender; var e = this.repository.finder, f = this.repository.liner, g = this.editor, l = this.editor.editable(); CKEDITOR.tools.isEmpty(f.visible) || (d = e.getRange(d[0]), this.focus(), g.fire("drop", { dropRange: d, target: d.startContainer })); l.removeClass("cke_widget_dragging"); f.hideVisible(); g.fire("dragend", { target: c }) } if (CKEDITOR.tools.getMouseButton(a) === CKEDITOR.MOUSE_BUTTON_LEFT) {
                    var c =
                        this.repository.finder, d = this.repository.locator, e = this.repository.liner, f = this.editor, g = f.editable(), h = [], k = [], l, m; this.repository._.draggedWidget = this; var n = c.greedySearch(), p = CKEDITOR.tools.eventsBuffer(50, function () { l = d.locate(n); k = d.sort(m, 1); k.length && (e.prepare(n, l), e.placeLine(k[0]), e.cleanup()) }); g.addClass("cke_widget_dragging"); h.push(g.on("mousemove", function (a) { m = a.data.$.clientY; p.input() })); f.fire("dragstart", { target: a.sender }); h.push(f.document.once("mouseup", b, this)); g.isInline() ||
                            h.push(CKEDITOR.document.once("mouseup", b, this))
                }
            } function aa(a) { var b = null; a.on("data", function () { var a = this.data.classes, c; if (b != a) { for (c in b) a && a[c] || this.removeClass(c); for (c in a) this.addClass(c); b = a } }) } function ba(a) { a.on("data", function () { if (a.wrapper) { var b = this.getLabel ? this.getLabel() : this.editor.lang.widget.label.replace(/%1/, this.pathName || this.element.getName()); a.wrapper.setAttribute("role", "region"); a.wrapper.setAttribute("aria-label", b) } }, null, null, 9999) } function ca(a) {
                a.element.data("cke-widget-data",
                    encodeURIComponent(JSON.stringify(a.data)))
            } function Z() {
                function a() { } function b(a, c, d) { return d && this.checkElement(a) ? (a = d.widgets.getByElement(a, !0)) && a.checkStyleActive(this) : !1 } function c(a) {
                    function b(a, c, d) { for (var e = a.length, f = 0; f < e;) { if (c.call(d, a[f], f, a)) return a[f]; f++ } } function e(a) {
                        function b(a, c) {
                            var d = CKEDITOR.tools.object.keys(a), e = CKEDITOR.tools.object.keys(c); if (d.length !== e.length) return !1; for (var f in a) if (("object" !== typeof a[f] || "object" !== typeof c[f] || !b(a[f], c[f])) && a[f] !==
                                c[f]) return !1; return !0
                        } return function (c) { return b(a.getDefinition(), c.getDefinition()) }
                    } var f = a.widget, g; d[f] || (d[f] = {}); for (var h = 0, k = a.group.length; h < k; h++)g = a.group[h], d[f][g] || (d[f][g] = []), g = d[f][g], b(g, e(a)) || g.push(a)
                } var d = {}; CKEDITOR.style.addCustomHandler({
                    type: "widget", setup: function (a) { this.widget = a.widget; (this.group = "string" == typeof a.group ? [a.group] : a.group) && c(this) }, apply: function (a) {
                        var b; a instanceof CKEDITOR.editor && this.checkApplicable(a.elementPath(), a) && (b = a.widgets.focused,
                            this.group && this.removeStylesFromSameGroup(a), b.applyStyle(this))
                    }, remove: function (a) { a instanceof CKEDITOR.editor && this.checkApplicable(a.elementPath(), a) && a.widgets.focused.removeStyle(this) }, removeStylesFromSameGroup: function (a) {
                        var b = !1, c, e; if (!(a instanceof CKEDITOR.editor)) return !1; e = a.elementPath(); if (this.checkApplicable(e, a)) for (var f = 0, g = this.group.length; f < g; f++) {
                            c = d[this.widget][this.group[f]]; for (var h = 0; h < c.length; h++)c[h] !== this && c[h].checkActive(e, a) && (a.widgets.focused.removeStyle(c[h]),
                                b = !0)
                        } return b
                    }, checkActive: function (a, b) { return this.checkElementMatch(a.lastElement, 0, b) }, checkApplicable: function (a, b) { return b instanceof CKEDITOR.editor ? this.checkElement(a.lastElement) : !1 }, checkElementMatch: b, checkElementRemovable: b, checkElement: function (a) { return f.isDomWidgetWrapper(a) ? (a = a.getFirst(f.isDomWidgetElement)) && a.data("widget") == this.widget : !1 }, buildPreview: function (a) { return a || this._.definition.name }, toAllowedContentRules: function (a) {
                        if (!a) return null; a = a.widgets.registered[this.widget];
                        var b, c = {}; if (!a) return null; if (a.styleableElements) { b = this.getClassesArray(); if (!b) return null; c[a.styleableElements] = { classes: b, propertiesOnly: !0 }; return c } return a.styleToAllowedContentRules ? a.styleToAllowedContentRules(this) : null
                    }, getClassesArray: function () { var a = this._.definition.attributes && this._.definition.attributes["class"]; return a ? CKEDITOR.tools.trim(a).split(/\s+/) : null }, applyToRange: a, removeFromRange: a, applyToObject: a
                })
            } CKEDITOR.plugins.add("widget", {
                requires: "lineutils,clipboard,widgetselection",
                onLoad: function () {
                    void 0 !== CKEDITOR.document.$.querySelectorAll && (CKEDITOR.addCss('.cke_widget_wrapper{position:relative;outline:none}.cke_widget_inline{display:inline-block}.cke_widget_wrapper:hover\x3e.cke_widget_element{outline:2px solid #ffd25c;cursor:default}.cke_widget_wrapper:hover .cke_widget_editable{outline:2px solid #ffd25c}.cke_widget_wrapper.cke_widget_focused\x3e.cke_widget_element,.cke_widget_wrapper .cke_widget_editable.cke_widget_editable_focused{outline:2px solid #47a4f5}.cke_widget_editable{cursor:text}.cke_widget_drag_handler_container{position:absolute;width:15px;height:0;display:block;opacity:0.75;transition:height 0s 0.2s;line-height:0}.cke_widget_wrapper:hover\x3e.cke_widget_drag_handler_container{height:15px;transition:none}.cke_widget_drag_handler_container:hover{opacity:1}.cke_editable[contenteditable\x3d"false"] .cke_widget_drag_handler_container{display:none;}img.cke_widget_drag_handler{cursor:move;width:15px;height:15px;display:inline-block}.cke_widget_mask{position:absolute;top:0;left:0;width:100%;height:100%;display:block}.cke_widget_partial_mask{position:absolute;display:block}.cke_editable.cke_widget_dragging, .cke_editable.cke_widget_dragging *{cursor:move !important}'),
                        Z())
                }, beforeInit: function (b) { void 0 !== CKEDITOR.document.$.querySelectorAll && (b.widgets = new a(b)) }, afterInit: function (a) { if (void 0 !== CKEDITOR.document.$.querySelectorAll) { var b = a.widgets.registered, c, d, e; for (d in b) c = b[d], (e = c.button) && a.ui.addButton && a.ui.addButton(CKEDITOR.tools.capitalize(c.name, !0), { label: e, command: c.name, toolbar: "insert,10" }); y(a); L(a.undoManager) } }
            }); a.prototype = {
                MIN_SELECTION_CHECK_INTERVAL: 500, add: function (a, c) {
                    var e = this.editor; c = CKEDITOR.tools.prototypedCopy(c); c.name = a;
                    c._ = c._ || {}; e.fire("widgetDefinition", c); c.template && (c.template = new CKEDITOR.template(c.template)); b(e, c); d(this, c); this.registered[a] = c; if (c.dialog && e.plugins.dialog) var f = CKEDITOR.on("dialogDefinition", function (a) { a = a.data.definition; var b = a.dialog; a.getMode || b.getName() !== c.dialog || (a.getMode = function () { var a = b.getModel(e); return a && a instanceof CKEDITOR.plugins.widget && a.ready ? CKEDITOR.dialog.EDITING_MODE : CKEDITOR.dialog.CREATION_MODE }); f.removeListener() }); return c
                }, addUpcastCallback: function (a) { this._.upcastCallbacks.push(a) },
                checkSelection: function () { if (this.editor.getSelection()) { var a = this.editor.getSelection(), b = a.getSelectedElement(), c = E(this), d; if (b && (d = this.getByElement(b, !0))) return c.focus(d).select(d).commit(); a = a.getRanges()[0]; if (!a || a.collapsed) return c.commit(); a = new CKEDITOR.dom.walker(a); for (a.evaluator = f.isDomWidgetWrapper; b = a.next();)c.select(this.getByElement(b)); c.commit() } }, checkWidgets: function (a) { this.fire("checkWidgets", CKEDITOR.tools.copy(a || {})) }, del: function (a) {
                    if (this.focused === a) {
                        var b = a.editor,
                        c = b.createRange(), d; (d = c.moveToClosestEditablePosition(a.wrapper, !0)) || (d = c.moveToClosestEditablePosition(a.wrapper, !1)); d && b.getSelection().selectRanges([c])
                    } a.wrapper.remove(); this.destroy(a, !0)
                }, destroy: function (a, b) { this.widgetHoldingFocusedEditable === a && u(this, a, null, b); a.destroy(b); delete this.instances[a.id]; this.fire("instanceDestroyed", a) }, destroyAll: function (a, b) {
                    var c, d, e = this.instances; if (b && !a) {
                        d = b.find(".cke_widget_wrapper"); for (var e = d.count(), f = 0; f < e; ++f)(c = this.getByElement(d.getItem(f),
                            !0)) && this.destroy(c)
                    } else for (d in e) c = e[d], this.destroy(c, a)
                }, finalizeCreation: function (a) { (a = a.getFirst()) && f.isDomWidgetWrapper(a) && (this.editor.insertElement(a), a = this.getByElement(a), a.ready = !0, a.fire("ready"), a.focus()) }, getByElement: function () { function a(c) { return c.is(b) && c.data("cke-widget-id") } var b = { div: 1, span: 1 }; return function (b, c) { if (!b) return null; var d = a(b); if (!c && !d) { var e = this.editor.editable(); do b = b.getParent(); while (b && !b.equals(e) && !(d = a(b))) } return this.instances[d] || null } }(),
                initOn: function (a, b, c) { b ? "string" == typeof b && (b = this.registered[b]) : b = this.registered[a.data("widget")]; if (!b) return null; var d = this.wrapElement(a, b.name); return d ? d.hasClass("cke_widget_new") ? (a = new f(this, this._.nextId++, a, b, c), a.isInited() ? this.instances[a.id] = a : null) : this.getByElement(a) : null }, initOnAll: function (a) { a = (a || this.editor.editable()).find(".cke_widget_new"); for (var b = [], c, d = a.count(); d--;)(c = this.initOn(a.getItem(d).getFirst(f.isDomWidgetElement))) && b.push(c); return b }, onWidget: function (a) {
                    var b =
                        Array.prototype.slice.call(arguments); b.shift(); for (var c in this.instances) { var d = this.instances[c]; d.name == a && d.on.apply(d, b) } this.on("instanceCreated", function (c) { c = c.data; c.name == a && c.on.apply(c, b) })
                }, parseElementClasses: function (a) { if (!a) return null; a = CKEDITOR.tools.trim(a).split(/\s+/); for (var b, c = {}, d = 0; b = a.pop();)-1 == b.indexOf("cke_") && (c[b] = d = 1); return d ? c : null }, wrapElement: function (a, b) {
                    var c = null, d, e; if (a instanceof CKEDITOR.dom.element) {
                        b = b || a.data("widget"); d = this.registered[b]; if (!d) return null;
                        if ((c = a.getParent()) && c.type == CKEDITOR.NODE_ELEMENT && c.data("cke-widget-wrapper")) return c; a.hasAttribute("data-cke-widget-keep-attr") || a.data("cke-widget-keep-attr", a.data("widget") ? 1 : 0); a.data("widget", b); (e = p(d, a.getName())) && m(a); c = new CKEDITOR.dom.element(e ? "span" : "div", a.getDocument()); c.setAttributes(r(e, b)); c.data("cke-display-name", d.pathName ? d.pathName : a.getName()); a.getParent(!0) && c.replace(a); a.appendTo(c)
                    } else if (a instanceof CKEDITOR.htmlParser.element) {
                        b = b || a.attributes["data-widget"];
                        d = this.registered[b]; if (!d) return null; if ((c = a.parent) && c.type == CKEDITOR.NODE_ELEMENT && c.attributes["data-cke-widget-wrapper"]) return c; "data-cke-widget-keep-attr" in a.attributes || (a.attributes["data-cke-widget-keep-attr"] = a.attributes["data-widget"] ? 1 : 0); b && (a.attributes["data-widget"] = b); (e = p(d, a.name)) && m(a); c = new CKEDITOR.htmlParser.element(e ? "span" : "div", r(e, b)); c.attributes["data-cke-display-name"] = d.pathName ? d.pathName : a.name; d = a.parent; var f; d && (f = a.getIndex(), a.remove()); c.add(a); d && w(d,
                            f, c)
                    } return c
                }, _tests_createEditableFilter: g
            }; CKEDITOR.event.implementOn(a.prototype); f.prototype = {
                addClass: function (a) { this.element.addClass(a); this.wrapper.addClass(f.WRAPPER_CLASS_PREFIX + a) }, applyStyle: function (a) { M(this, a, 1) }, checkStyleActive: function (a) { a = J(a); var b; if (!a) return !1; for (; b = a.pop();)if (!this.hasClass(b)) return !1; return !0 }, destroy: function (a) {
                    this.fire("destroy"); if (this.editables) for (var b in this.editables) this.destroyEditable(b, a); a || ("0" == this.element.data("cke-widget-keep-attr") &&
                        this.element.removeAttribute("data-widget"), this.element.removeAttributes(["data-cke-widget-data", "data-cke-widget-keep-attr"]), this.element.removeClass("cke_widget_element"), this.element.replace(this.wrapper)); this.wrapper = null
                }, destroyEditable: function (a, b) {
                    var c = this.editables[a], d = !0; c.removeListener("focus", R); c.removeListener("blur", N); this.editor.focusManager.remove(c); if (c.filter) {
                        for (var e in this.repository.instances) {
                            var f = this.repository.instances[e]; f.editables && (f = f.editables[a]) && f !==
                                c && c.filter === f.filter && (d = !1)
                        } d && (c.filter.destroy(), (d = this.repository._.filters[this.name]) && delete d[a])
                    } b || (this.repository.destroyAll(!1, c), c.removeClass("cke_widget_editable"), c.removeClass("cke_widget_editable_focused"), c.removeAttributes(["contenteditable", "data-cke-widget-editable", "data-cke-enter-mode"])); delete this.editables[a]
                }, edit: function () {
                    var a = { dialog: this.dialog }, b = this; if (!1 === this.fire("edit", a) || !a.dialog) return !1; this.editor.openDialog(a.dialog, function (a) {
                        var c, d; !1 !== b.fire("dialog",
                            a) && (c = a.on("show", function () { a.setupContent(b) }), d = a.on("ok", function () { var c, d = b.on("data", function (a) { c = 1; a.cancel() }, null, null, 0); b.editor.fire("saveSnapshot"); a.commitContent(b); d.removeListener(); c && (b.fire("data", b.data), b.editor.fire("saveSnapshot")) }), a.once("hide", function () { c.removeListener(); d.removeListener() }))
                    }, b); return !0
                }, getClasses: function () { return this.repository.parseElementClasses(this.element.getAttribute("class")) }, getClipboardHtml: function () {
                    var a = this.editor.createRange();
                    a.setStartBefore(this.wrapper); a.setEndAfter(this.wrapper); return this.editor.editable().getHtmlFromRange(a).getHtml()
                }, hasClass: function (a) { return this.element.hasClass(a) }, initEditable: function (a, b) {
                    var c = this._findOneNotNested(b.selector); return c && c.is(CKEDITOR.dtd.$editable) ? (c = new e(this.editor, c, { filter: g.call(this.repository, this.name, a, b) }), this.editables[a] = c, c.setAttributes({ contenteditable: "true", "data-cke-widget-editable": a, "data-cke-enter-mode": c.enterMode }), c.filter && c.data("cke-filter",
                        c.filter.id), c.addClass("cke_widget_editable"), c.removeClass("cke_widget_editable_focused"), b.pathName && c.data("cke-display-name", b.pathName), this.editor.focusManager.add(c), c.on("focus", R, this), CKEDITOR.env.ie && c.on("blur", N, this), c._.initialSetData = !0, c.setData(c.getHtml()), !0) : !1
                }, _findOneNotNested: function (a) { a = this.wrapper.find(a); for (var b, c, d = 0; d < a.count(); d++)if (b = a.getItem(d), c = b.getAscendant(f.isDomWidgetWrapper), this.wrapper.equals(c)) return b; return null }, isInited: function () {
                    return !(!this.wrapper ||
                        !this.inited)
                }, isReady: function () { return this.isInited() && this.ready }, focus: function () { var a = this.editor.getSelection(); if (a) { var b = this.editor.checkDirty(); a.fake(this.wrapper); !b && this.editor.resetDirty() } this.editor.focus() }, refreshMask: function () { Y(this) }, refreshParts: function (a) { X(this, "undefined" !== typeof a ? a : !0) }, removeClass: function (a) { this.element.removeClass(a); this.wrapper.removeClass(f.WRAPPER_CLASS_PREFIX + a) }, removeStyle: function (a) { M(this, a, 0) }, setData: function (a, b) {
                    var c = this.data,
                    d = 0; if ("string" == typeof a) c[a] !== b && (c[a] = b, d = 1); else { var e = a; for (a in e) c[a] !== e[a] && (d = 1, c[a] = e[a]) } d && this.dataReady && (ca(this), this.fire("data", c)); return this
                }, setFocused: function (a) { this.wrapper[a ? "addClass" : "removeClass"]("cke_widget_focused"); this.fire(a ? "focus" : "blur"); return this }, setSelected: function (a) { this.wrapper[a ? "addClass" : "removeClass"]("cke_widget_selected"); this.fire(a ? "select" : "deselect"); return this }, updateDragHandlerPosition: function () {
                    var a = this.editor, b = this.element.$, c = this._.dragHandlerOffset,
                    b = { x: b.offsetLeft, y: b.offsetTop - 15 }; c && b.x == c.x && b.y == c.y || (c = a.checkDirty(), a.fire("lockSnapshot"), this.dragHandlerContainer.setStyles({ top: b.y + "px", left: b.x + "px" }), this.dragHandlerContainer.removeStyle("display"), a.fire("unlockSnapshot"), !c && a.resetDirty(), this._.dragHandlerOffset = b)
                }
            }; CKEDITOR.event.implementOn(f.prototype); f.getNestedEditable = function (a, b) { return !b || b.equals(a) ? null : f.isDomNestedEditable(b) ? b : f.getNestedEditable(a, b.getParent()) }; f.isDomDragHandler = function (a) {
                return a.type ==
                    CKEDITOR.NODE_ELEMENT && a.hasAttribute("data-cke-widget-drag-handler")
            }; f.isDomDragHandlerContainer = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasClass("cke_widget_drag_handler_container") }; f.isDomNestedEditable = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasAttribute("data-cke-widget-editable") }; f.isDomWidgetElement = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasAttribute("data-widget") }; f.isDomWidgetWrapper = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasAttribute("data-cke-widget-wrapper") };
            f.isDomWidget = function (a) { return a ? this.isDomWidgetWrapper(a) || this.isDomWidgetElement(a) : !1 }; f.isParserWidgetElement = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && !!a.attributes["data-widget"] }; f.isParserWidgetWrapper = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && !!a.attributes["data-cke-widget-wrapper"] }; f.WRAPPER_CLASS_PREFIX = "cke_widget_wrapper_"; e.prototype = CKEDITOR.tools.extend(CKEDITOR.tools.prototypedCopy(CKEDITOR.dom.element.prototype), {
                setData: function (a) {
                    this._.initialSetData ||
                    this.editor.widgets.destroyAll(!1, this); this._.initialSetData = !1; a = this.editor.dataProcessor.unprotectSource(a); a = this.editor.dataProcessor.toHtml(a, { context: this.getName(), filter: this.filter, enterMode: this.enterMode }); this.setHtml(a); this.editor.widgets.initOnAll(this)
                }, getData: function () { return this.editor.dataProcessor.toDataFormat(this.getHtml(), { context: this.getName(), filter: this.filter, enterMode: this.enterMode }) }
            }); var S = /^(?:<(?:div|span)(?: data-cke-temp="1")?(?: id="cke_copybin")?(?: data-cke-temp="1")?>)?(?:<(?:div|span)(?: style="[^"]+")?>)?<span [^>]*data-cke-copybin-start="1"[^>]*>.?<\/span>([\s\S]+)<span [^>]*data-cke-copybin-end="1"[^>]*>.?<\/span>(?:<\/(?:div|span)>)?(?:<\/(?:div|span)>)?$/i,
                T = { 37: 1, 38: 1, 39: 1, 40: 1, 8: 1, 46: 1 }; T[CKEDITOR.SHIFT + 121] = 1; var ea = CKEDITOR.tools.createClass({
                    $: function (a, b) { this._.createCopyBin(a, b); this._.createListeners(b) }, _: {
                        createCopyBin: function (a) {
                            var b = a.document, c = CKEDITOR.env.edge && 16 <= CKEDITOR.env.version, d = !a.blockless && !CKEDITOR.env.ie || c ? "div" : "span", c = b.createElement(d), b = b.createElement(d); b.setAttributes({ id: "cke_copybin", "data-cke-temp": "1" }); c.setStyles({ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }); c.setStyle("ltr" == a.config.contentsLangDirection ?
                                "left" : "right", "-5000px"); this.editor = a; this.copyBin = c; this.container = b
                        }, createListeners: function (a) { a && (a.beforeDestroy && (this.beforeDestroy = a.beforeDestroy), a.afterDestroy && (this.afterDestroy = a.afterDestroy)) }
                    }, proto: {
                        handle: function (a) {
                            var b = this.copyBin, c = this.editor, d = this.container, e = CKEDITOR.env.ie && 9 > CKEDITOR.env.version, f = c.document.getDocumentElement().$, g = c.createRange(), h = this, k = CKEDITOR.env.mac && CKEDITOR.env.webkit, l = k ? 100 : 0, m = window.requestAnimationFrame && !k ? requestAnimationFrame : setTimeout,
                            n, p, q; b.setHtml('\x3cspan data-cke-copybin-start\x3d"1"\x3e​\x3c/span\x3e' + a + '\x3cspan data-cke-copybin-end\x3d"1"\x3e​\x3c/span\x3e'); c.fire("lockSnapshot"); d.append(b); c.editable().append(d); n = c.on("selectionChange", C, null, null, 0); p = c.widgets.on("checkSelection", C, null, null, 0); e && (q = f.scrollTop); g.selectNodeContents(b); g.select(); e && (f.scrollTop = q); return new CKEDITOR.tools.promise(function (a) {
                                m(function () {
                                    h.beforeDestroy && h.beforeDestroy(); d.remove(); n.removeListener(); p.removeListener(); c.fire("unlockSnapshot");
                                    h.afterDestroy && h.afterDestroy(); a()
                                }, l)
                            })
                        }
                    }, statics: { hasCopyBin: function (a) { return !!ea.getCopyBin(a) }, getCopyBin: function (a) { return a.document.getById("cke_copybin") } }
                }); CKEDITOR.plugins.widget = f; f.repository = a; f.nestedEditable = e
        }(), function () {
            function a(a, b, d) { this.editor = a; this.notification = null; this._message = new CKEDITOR.template(b); this._singularMessage = d ? new CKEDITOR.template(d) : null; this._tasks = []; this._doneTasks = this._doneWeights = this._totalWeights = 0 } function f(a) {
                this._weight = a || 1; this._doneWeight =
                    0; this._isCanceled = !1
            } CKEDITOR.plugins.add("notificationaggregator", { requires: "notification" }); a.prototype = {
                createTask: function (a) { a = a || {}; var b = !this.notification, d; b && (this.notification = this._createNotification()); d = this._addTask(a); d.on("updated", this._onTaskUpdate, this); d.on("done", this._onTaskDone, this); d.on("canceled", function () { this._removeTask(d) }, this); this.update(); b && this.notification.show(); return d }, update: function () { this._updateNotification(); this.isFinished() && this.fire("finished") },
                getPercentage: function () { return 0 === this.getTaskCount() ? 1 : this._doneWeights / this._totalWeights }, isFinished: function () { return this.getDoneTaskCount() === this.getTaskCount() }, getTaskCount: function () { return this._tasks.length }, getDoneTaskCount: function () { return this._doneTasks }, _updateNotification: function () { this.notification.update({ message: this._getNotificationMessage(), progress: this.getPercentage() }) }, _getNotificationMessage: function () {
                    var a = this.getTaskCount(), b = {
                        current: this.getDoneTaskCount(), max: a,
                        percentage: Math.round(100 * this.getPercentage())
                    }; return (1 == a && this._singularMessage ? this._singularMessage : this._message).output(b)
                }, _createNotification: function () { return new CKEDITOR.plugins.notification(this.editor, { type: "progress" }) }, _addTask: function (a) { a = new f(a.weight); this._tasks.push(a); this._totalWeights += a._weight; return a }, _removeTask: function (a) {
                    var b = CKEDITOR.tools.indexOf(this._tasks, a); -1 !== b && (a._doneWeight && (this._doneWeights -= a._doneWeight), this._totalWeights -= a._weight, this._tasks.splice(b,
                        1), this.update())
                }, _onTaskUpdate: function (a) { this._doneWeights += a.data; this.update() }, _onTaskDone: function () { this._doneTasks += 1; this.update() }
            }; CKEDITOR.event.implementOn(a.prototype); f.prototype = {
                done: function () { this.update(this._weight) }, update: function (a) { if (!this.isDone() && !this.isCanceled()) { a = Math.min(this._weight, a); var b = a - this._doneWeight; this._doneWeight = a; this.fire("updated", b); this.isDone() && this.fire("done") } }, cancel: function () { this.isDone() || this.isCanceled() || (this._isCanceled = !0, this.fire("canceled")) },
                isDone: function () { return this._weight === this._doneWeight }, isCanceled: function () { return this._isCanceled }
            }; CKEDITOR.event.implementOn(f.prototype); CKEDITOR.plugins.notificationAggregator = a; CKEDITOR.plugins.notificationAggregator.task = f
        }(), "use strict", function () {
            CKEDITOR.plugins.add("uploadwidget", { requires: "widget,clipboard,filetools,notificationaggregator", init: function (a) { a.filter.allow("*[!data-widget,!data-cke-upload-id]") }, isSupportedEnvironment: function () { return CKEDITOR.plugins.clipboard.isFileApiSupported } });
            CKEDITOR.fileTools || (CKEDITOR.fileTools = {}); CKEDITOR.tools.extend(CKEDITOR.fileTools, {
                addUploadWidget: function (a, f, e) {
                    var b = CKEDITOR.fileTools, d = a.uploadRepository, l = e.supportedTypes ? 10 : 20; if (e.fileToElement) a.on("paste", function (e) {
                        e = e.data; var l = a.widgets.registered[f], c = e.dataTransfer, k = c.getFilesCount(), g = l.loadMethod || "loadAndUpload", n, r; if (!e.dataValue && k) for (r = 0; r < k; r++)if (n = c.getFile(r), !l.supportedTypes || b.isTypeSupported(n, l.supportedTypes)) {
                            var w = l.fileToElement(n); n = d.create(n, void 0,
                                l.loaderType); w && (n[g](l.uploadUrl, l.additionalRequestParameters), CKEDITOR.fileTools.markElement(w, f, n.id), "loadAndUpload" != g && "upload" != g || l.skipNotifications || CKEDITOR.fileTools.bindNotifications(a, n), e.dataValue += w.getOuterHtml())
                        }
                    }, null, null, l); CKEDITOR.tools.extend(e, {
                        downcast: function () { return new CKEDITOR.htmlParser.text("") }, init: function () {
                            var b = this, e = this.wrapper.findOne("[data-cke-upload-id]").data("cke-upload-id"), c = d.loaders[e], f = CKEDITOR.tools.capitalize, g, l; c.on("update", function (d) {
                                if ("abort" ===
                                    c.status && "function" === typeof b.onAbort) b.onAbort(c); if (b.wrapper && b.wrapper.getParent()) { a.fire("lockSnapshot"); d = "on" + f(c.status); if ("abort" === c.status || "function" !== typeof b[d] || !1 !== b[d](c)) l = "cke_upload_" + c.status, b.wrapper && l != g && (g && b.wrapper.removeClass(g), b.wrapper.addClass(l), g = l), "error" != c.status && "abort" != c.status || a.widgets.del(b); a.fire("unlockSnapshot") } else CKEDITOR.instances[a.name] && a.editable().find('[data-cke-upload-id\x3d"' + e + '"]').count() || c.abort(), d.removeListener()
                            }); c.update()
                        },
                        replaceWith: function (b, d) { if ("" === b.trim()) a.widgets.del(this); else { var c = this == a.widgets.focused, e = a.editable(), f = a.createRange(), l, r; c || (r = a.getSelection().createBookmarks()); f.setStartBefore(this.wrapper); f.setEndAfter(this.wrapper); c && (l = f.createBookmark()); e.insertHtmlIntoRange(b, f, d); a.widgets.checkWidgets({ initOnlyNew: !0 }); a.widgets.destroy(this, !0); c ? (f.moveToBookmark(l), f.select()) : a.getSelection().selectBookmarks(r) } }, _getLoader: function () {
                            var a = this.wrapper.findOne("[data-cke-upload-id]");
                            return a ? this.editor.uploadRepository.loaders[a.data("cke-upload-id")] : null
                        }
                    }); a.widgets.add(f, e)
                }, markElement: function (a, f, e) { a.setAttributes({ "data-cke-upload-id": e, "data-widget": f }) }, bindNotifications: function (a, f) {
                    function e() {
                        b = a._.uploadWidgetNotificaionAggregator; if (!b || b.isFinished()) b = a._.uploadWidgetNotificaionAggregator = new CKEDITOR.plugins.notificationAggregator(a, a.lang.uploadwidget.uploadMany, a.lang.uploadwidget.uploadOne), b.once("finished", function () {
                            var d = b.getTaskCount(); 0 === d ? b.notification.hide() :
                                b.notification.update({ message: 1 == d ? a.lang.uploadwidget.doneOne : a.lang.uploadwidget.doneMany.replace("%1", d), type: "success", important: 1 })
                        })
                    } var b, d = null; f.on("update", function () { !d && f.uploadTotal && (e(), d = b.createTask({ weight: f.uploadTotal })); d && "uploading" == f.status && d.update(f.uploaded) }); f.on("uploaded", function () { d && d.done() }); f.on("error", function () { d && d.cancel(); a.showNotification(f.message, "warning") }); f.on("abort", function () {
                        d && d.cancel(); CKEDITOR.instances[a.name] && a.showNotification(a.lang.uploadwidget.abort,
                            "info")
                    })
                }
            })
        }(), "use strict", function () {
            function a(a) { 9 >= a && (a = "0" + a); return String(a) } function f(b) { var d = new Date, d = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()]; e += 1; return "image-" + CKEDITOR.tools.array.map(d, a).join("") + "-" + e + "." + b } var e = 0; CKEDITOR.plugins.add("uploadimage", {
                requires: "uploadwidget", onLoad: function () { CKEDITOR.addCss(".cke_upload_uploading img{opacity: 0.3}") }, isSupportedEnvironment: function () { return CKEDITOR.plugins.clipboard.isFileApiSupported },
                init: function (a) {
                    if (this.isSupportedEnvironment()) {
                        var d = CKEDITOR.fileTools, e = d.getUploadUrl(a.config, "image"); e && (d.addUploadWidget(a, "uploadimage", {
                            supportedTypes: /image\/(jpeg|png|gif|bmp)/, uploadUrl: e, fileToElement: function () { var a = new CKEDITOR.dom.element("img"); a.setAttribute("src", "data:image/gif;base64,R0lGODlhDgAOAIAAAAAAAP///yH5BAAAAAAALAAAAAAOAA4AAAIMhI+py+0Po5y02qsKADs\x3d"); return a }, parts: { img: "img" }, onUploading: function (a) { this.parts.img.setAttribute("src", a.data) }, onUploaded: function (a) {
                                var b =
                                    this.parts.img.$; this.replaceWith('\x3cimg src\x3d"' + a.url + '" width\x3d"' + (a.responseData.width || b.naturalWidth) + '" height\x3d"' + (a.responseData.height || b.naturalHeight) + '"\x3e')
                            }
                        }), a.on("paste", function (h) {
                            if (h.data.dataValue.match(/<img[\s\S]+data:/i)) {
                                h = h.data; var m = document.implementation.createHTMLDocument(""), m = new CKEDITOR.dom.element(m.body), c, k, g; m.data("cke-editable", 1); m.appendHtml(h.dataValue); c = m.find("img"); for (g = 0; g < c.count(); g++) {
                                    k = c.getItem(g); var n = k.getAttribute("src"), r = n && "data:" ==
                                        n.substring(0, 5), w = null === k.data("cke-realelement"); r && w && !k.data("cke-upload-id") && !k.isReadOnly(1) && (r = (r = n.match(/image\/([a-z]+?);/i)) && r[1] || "jpg", n = a.uploadRepository.create(n, f(r)), n.upload(e), d.markElement(k, "uploadimage", n.id), d.bindNotifications(a, n))
                                } h.dataValue = m.getHtml()
                            }
                        }))
                    }
                }
            })
        }(), function () {
            function a(a) {
                function b(a) {
                    var c = !1; g.attachListener(g, "keydown", function () { var b = m.getBody().getElementsByTag(a); if (!c) { for (var d = 0; d < b.count(); d++)b.getItem(d).setCustomData("retain", !0); c = !0 } },
                        null, null, 1); g.attachListener(g, "keyup", function () { var b = m.getElementsByTag(a); c && (1 == b.count() && !b.getItem(0).getCustomData("retain") && CKEDITOR.tools.isEmpty(b.getItem(0).getAttributes()) && b.getItem(0).remove(1), c = !1) })
                } var e = this.editor; if (e && !e.isDetached()) {
                    var m = a.document, c = m.body, k = m.getElementById("cke_actscrpt"); k && k.parentNode.removeChild(k); (k = m.getElementById("cke_shimscrpt")) && k.parentNode.removeChild(k); (k = m.getElementById("cke_basetagscrpt")) && k.parentNode.removeChild(k); c.contentEditable =
                        !0; CKEDITOR.env.ie && (c.hideFocus = !0, c.disabled = !0, c.removeAttribute("disabled")); delete this._.isLoadingData; this.$ = c; m = new CKEDITOR.dom.document(m); this.setup(); this.fixInitialSelection(); var g = this; CKEDITOR.env.ie && !CKEDITOR.env.edge && m.getDocumentElement().addClass(m.$.compatMode); CKEDITOR.env.ie && !CKEDITOR.env.edge && e.enterMode != CKEDITOR.ENTER_P ? b("p") : CKEDITOR.env.edge && 15 > CKEDITOR.env.version && e.enterMode != CKEDITOR.ENTER_DIV && b("div"); if (CKEDITOR.env.webkit || CKEDITOR.env.ie && 10 < CKEDITOR.env.version) m.getDocumentElement().on("mousedown",
                            function (a) { a.data.getTarget().is("html") && setTimeout(function () { e.editable().focus() }) }); f(e); try { e.document.$.execCommand("2D-position", !1, !0) } catch (n) { } (CKEDITOR.env.gecko || CKEDITOR.env.ie && "CSS1Compat" == e.document.$.compatMode) && this.attachListener(this, "keydown", function (a) {
                                var b = a.data.getKeystroke(); if (33 == b || 34 == b) if (CKEDITOR.env.ie) setTimeout(function () { e.getSelection().scrollIntoView() }, 0); else if (e.window.$.innerHeight > this.$.offsetHeight) {
                                    var c = e.createRange(); c[33 == b ? "moveToElementEditStart" :
                                        "moveToElementEditEnd"](this); c.select(); a.data.preventDefault()
                                }
                            }); CKEDITOR.env.ie && this.attachListener(m, "blur", function () { try { m.$.selection.empty() } catch (a) { } }); CKEDITOR.env.iOS && this.attachListener(m, "touchend", function () { a.focus() }); c = e.document.getElementsByTag("title").getItem(0); c.data("cke-title", c.getText()); CKEDITOR.env.ie && (e.document.$.title = this._.docTitle); CKEDITOR.tools.setTimeout(function () {
                                "unloaded" == this.status && (this.status = "ready"); e.fire("contentDom"); this._.isPendingFocus &&
                                    (e.focus(), this._.isPendingFocus = !1); setTimeout(function () { e.fire("dataReady") }, 0)
                            }, 0, this)
                }
            } function f(a) {
                function b() { var c; a.editable().attachListener(a, "selectionChange", function () { var b = a.getSelection().getSelectedElement(); b && (c && (c.detachEvent("onresizestart", e), c = null), b.$.attachEvent("onresizestart", e), c = b.$) }) } function e(a) { a.returnValue = !1 } if (CKEDITOR.env.gecko) try {
                    var f = a.document.$; f.execCommand("enableObjectResizing", !1, !a.config.disableObjectResizing); f.execCommand("enableInlineTableEditing",
                        !1, !a.config.disableNativeTableHandles)
                } catch (c) { } else CKEDITOR.env.ie && 11 > CKEDITOR.env.version && a.config.disableObjectResizing && b(a)
            } function e() {
                var a = []; if (8 <= CKEDITOR.document.$.documentMode) { a.push("html.CSS1Compat [contenteditable\x3dfalse]{min-height:0 !important}"); var b = [], e; for (e in CKEDITOR.dtd.$removeEmpty) b.push("html.CSS1Compat " + e + "[contenteditable\x3dfalse]"); a.push(b.join(",") + "{display:inline-block}") } else CKEDITOR.env.gecko && (a.push("html{height:100% !important}"), a.push("img:-moz-broken{-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"));
                a.push("html{cursor:text;*cursor:auto}"); a.push("img,input,textarea{cursor:default}"); return a.join("\n")
            } var b; CKEDITOR.plugins.add("wysiwygarea", {
                init: function (a) {
                    a.config.fullPage && a.addFeature({ allowedContent: "html head title; style [media,type]; body (*)[id]; meta link [*]", requiredContent: "body" }); a.addMode("wysiwyg", function (e) {
                        function f(g) { g && g.removeListener(); a.isDestroyed() || a.isDetached() || (a.editable(new b(a, c.$.contentWindow.document.body)), a.setData(a.getData(1), e)) } var m = "document.open();" +
                            (CKEDITOR.env.ie ? "(" + CKEDITOR.tools.fixDomain + ")();" : "") + "document.close();", m = CKEDITOR.env.air ? "javascript:void(0)" : CKEDITOR.env.ie && !CKEDITOR.env.edge ? "javascript:void(function(){" + encodeURIComponent(m) + "}())" : "", c = CKEDITOR.dom.element.createFromHtml('\x3ciframe src\x3d"' + m + '" frameBorder\x3d"0"\x3e\x3c/iframe\x3e'); c.setStyles({ width: "100%", height: "100%" }); c.addClass("cke_wysiwyg_frame").addClass("cke_reset"); m = a.ui.space("contents"); m.append(c); var k = CKEDITOR.env.ie && !CKEDITOR.env.edge || CKEDITOR.env.gecko;
                        if (k) c.on("load", f); var g = a.title, n = a.fire("ariaEditorHelpLabel", {}).label; g && (CKEDITOR.env.ie && n && (g += ", " + n), c.setAttribute("title", g)); if (n) { var g = CKEDITOR.tools.getNextId(), r = CKEDITOR.dom.element.createFromHtml('\x3cspan id\x3d"' + g + '" class\x3d"cke_voice_label"\x3e' + n + "\x3c/span\x3e"); m.append(r, 1); c.setAttribute("aria-describedby", g) } a.on("beforeModeUnload", function (a) { a.removeListener(); r && r.remove() }); c.setAttributes({ tabIndex: a.tabIndex, allowTransparency: "true" }); !k && f(); a.fire("ariaWidget",
                            c)
                    })
                }
            }); CKEDITOR.editor.prototype.addContentsCss = function (a) { var b = this.config, e = b.contentsCss; CKEDITOR.tools.isArray(e) || (b.contentsCss = e ? [e] : []); b.contentsCss.push(a) }; b = CKEDITOR.tools.createClass({
                $: function () { this.base.apply(this, arguments); this._.frameLoadedHandler = CKEDITOR.tools.addFunction(function (b) { CKEDITOR.tools.setTimeout(a, 0, this, b) }, this); this._.docTitle = this.getWindow().getFrame().getAttribute("title") }, base: CKEDITOR.editable, proto: {
                    setData: function (a, b) {
                        var f = this.editor; if (b) this.setHtml(a),
                            this.fixInitialSelection(), f.fire("dataReady"); else {
                                this._.isLoadingData = !0; f._.dataStore = { id: 1 }; var m = f.config, c = m.fullPage, k = m.docType, g = CKEDITOR.tools.buildStyleHtml(e()).replace(/<style>/, '\x3cstyle data-cke-temp\x3d"1"\x3e'); c || (g += CKEDITOR.tools.buildStyleHtml(f.config.contentsCss)); var n = m.baseHref ? '\x3cbase href\x3d"' + m.baseHref + '" data-cke-temp\x3d"1" /\x3e' : ""; c && (a = a.replace(/<!DOCTYPE[^>]*>/i, function (a) { f.docType = k = a; return "" }).replace(/<\?xml\s[^\?]*\?>/i, function (a) {
                                    f.xmlDeclaration =
                                    a; return ""
                                })); a = f.dataProcessor.toHtml(a); c ? (/<body[\s|>]/.test(a) || (a = "\x3cbody\x3e" + a), /<html[\s|>]/.test(a) || (a = "\x3chtml\x3e" + a + "\x3c/html\x3e"), /<head[\s|>]/.test(a) ? /<title[\s|>]/.test(a) || (a = a.replace(/<head[^>]*>/, "$\x26\x3ctitle\x3e\x3c/title\x3e")) : a = a.replace(/<html[^>]*>/, "$\x26\x3chead\x3e\x3ctitle\x3e\x3c/title\x3e\x3c/head\x3e"), n && (a = a.replace(/<head[^>]*?>/, "$\x26" + n)), a = a.replace(/<\/head\s*>/, g + "$\x26"), a = k + a) : a = m.docType + '\x3chtml dir\x3d"' + m.contentsLangDirection + '" lang\x3d"' +
                                    (m.contentsLanguage || f.langCode) + '"\x3e\x3chead\x3e\x3ctitle\x3e' + this._.docTitle + "\x3c/title\x3e" + n + g + "\x3c/head\x3e\x3cbody" + (m.bodyId ? ' id\x3d"' + m.bodyId + '"' : "") + (m.bodyClass ? ' class\x3d"' + m.bodyClass + '"' : "") + "\x3e" + a + "\x3c/body\x3e\x3c/html\x3e"; CKEDITOR.env.gecko && (a = a.replace(/<body/, '\x3cbody contenteditable\x3d"true" '), 2E4 > CKEDITOR.env.version && (a = a.replace(/<body[^>]*>/, "$\x26\x3c!-- cke-content-start --\x3e"))); m = '\x3cscript id\x3d"cke_actscrpt" type\x3d"text/javascript"' + (CKEDITOR.env.ie ?
                                        ' defer\x3d"defer" ' : "") + "\x3evar wasLoaded\x3d0;function onload(){if(!wasLoaded)window.parent.CKEDITOR.tools.callFunction(" + this._.frameLoadedHandler + ",window);wasLoaded\x3d1;}" + (CKEDITOR.env.ie ? "onload();" : 'document.addEventListener("DOMContentLoaded", onload, false );') + "\x3c/script\x3e"; CKEDITOR.env.ie && 9 > CKEDITOR.env.version && (m += '\x3cscript id\x3d"cke_shimscrpt"\x3ewindow.parent.CKEDITOR.tools.enableHtml5Elements(document)\x3c/script\x3e'); n && CKEDITOR.env.ie && 10 > CKEDITOR.env.version && (m += '\x3cscript id\x3d"cke_basetagscrpt"\x3evar baseTag \x3d document.querySelector( "base" );baseTag.href \x3d baseTag.href;\x3c/script\x3e');
                            a = a.replace(/(?=\s*<\/(:?head)>)/, m); this.clearCustomData(); this.clearListeners(); f.fire("contentDomUnload"); var r = this.getDocument(); try { r.write(a) } catch (w) { setTimeout(function () { r.write(a) }, 0) }
                        }
                    }, getData: function (a) {
                        if (a) return this.getHtml(); a = this.editor; var b = a.config, e = b.fullPage, f = e && a.docType, c = e && a.xmlDeclaration, k = this.getDocument(), e = e ? k.getDocumentElement().getOuterHtml() : k.getBody().getHtml(); CKEDITOR.env.gecko && b.enterMode != CKEDITOR.ENTER_BR && (e = e.replace(/<br>(?=\s*(:?$|<\/body>))/,
                            "")); e = a.dataProcessor.toDataFormat(e); c && (e = c + "\n" + e); f && (e = f + "\n" + e); return e
                    }, focus: function () { this._.isLoadingData ? this._.isPendingFocus = !0 : b.baseProto.focus.call(this) }, detach: function () {
                        var a = this.editor, e = a.document, a = a.container.findOne("iframe.cke_wysiwyg_frame"); b.baseProto.detach.call(this); this.clearCustomData(this._.expandoNumber); e.getDocumentElement().clearCustomData(); CKEDITOR.tools.removeFunction(this._.frameLoadedHandler); a && (a.clearCustomData(), (e = a.removeCustomData("onResize")) &&
                            e.removeListener(), a.isDetached() || a.remove())
                    }
                }
            })
        }(), CKEDITOR.config.disableObjectResizing = !1, CKEDITOR.config.disableNativeTableHandles = !0, CKEDITOR.config.disableNativeSpellChecker = !0, CKEDITOR.config.plugins = "dialogui,dialog,a11yhelp,about,basicstyles,blockquote,notification,button,toolbar,clipboard,panel,floatpanel,menu,contextmenu,elementspath,indent,indentlist,list,enterkey,entities,popup,filetools,filebrowser,floatingspace,listblock,richcombo,format,horizontalrule,htmlwriter,image,fakeobjects,link,magicline,maximize,xml,ajax,pastetools,pastefromgdocs,pastefromlibreoffice,pastefromword,pastetext,removeformat,resize,menubutton,scayt,showborders,sourcearea,specialchar,stylescombo,tab,table,tabletools,tableselection,undo,lineutils,widgetselection,widget,notificationaggregator,uploadwidget,uploadimage,wysiwygarea",
        CKEDITOR.config.skin = "moono-lisa", function () {
            var a = function (a, e) { var b = CKEDITOR.getUrl("plugins/" + e); a = a.split(","); for (var d = 0; d < a.length; d++)CKEDITOR.skin.icons[a[d]] = { path: b, offset: -a[++d], bgsize: a[++d] } }; CKEDITOR.env.hidpi ? a("about,0,,bold,24,,italic,48,,strike,72,,subscript,96,,superscript,120,,underline,144,,bidiltr,168,,bidirtl,192,,blockquote,216,,copy-rtl,240,,copy,264,,cut-rtl,288,,cut,312,,paste-rtl,336,,paste,360,,codesnippet,384,,bgcolor,408,,textcolor,432,,copyformatting,456,,creatediv,480,,docprops-rtl,504,,docprops,528,,easyimagealigncenter,552,,easyimagealignleft,576,,easyimagealignright,600,,easyimagealt,624,,easyimagefull,648,,easyimageside,672,,easyimageupload,696,,embed,720,,embedsemantic,744,,emojipanel,768,,exportpdf,792,,find-rtl,816,,find,840,,replace,864,,flash,888,,button,912,,checkbox,936,,form,960,,hiddenfield,984,,imagebutton,1008,,radio,1032,,select-rtl,1056,,select,1080,,textarea-rtl,1104,,textarea,1128,,textfield-rtl,1152,,textfield,1176,,horizontalrule,1200,,iframe,1224,,image,1248,,indent-rtl,1272,,indent,1296,,outdent-rtl,1320,,outdent,1344,,justifyblock,1368,,justifycenter,1392,,justifyleft,1416,,justifyright,1440,,language,1464,,anchor-rtl,1488,,anchor,1512,,link,1536,,unlink,1560,,bulletedlist-rtl,1584,,bulletedlist,1608,,numberedlist-rtl,1632,,numberedlist,1656,,mathjax,1680,,maximize,1704,,newpage-rtl,1728,,newpage,1752,,pagebreak-rtl,1776,,pagebreak,1800,,pastefromword-rtl,1824,,pastefromword,1848,,pastetext-rtl,1872,,pastetext,1896,,placeholder,1920,,preview-rtl,1944,,preview,1968,,print,1992,,removeformat,2016,,save,2040,,scayt,2064,,selectall,2088,,showblocks-rtl,2112,,showblocks,2136,,smiley,2160,,source-rtl,2184,,source,2208,,sourcedialog-rtl,2232,,sourcedialog,2256,,specialchar,2280,,table,2304,,templates-rtl,2328,,templates,2352,,uicolor,2376,,redo-rtl,2400,,redo,2424,,undo-rtl,2448,,undo,2472,,simplebox,4992,auto,spellchecker,2520,",
                "icons_hidpi.png") : a("about,0,auto,bold,24,auto,italic,48,auto,strike,72,auto,subscript,96,auto,superscript,120,auto,underline,144,auto,bidiltr,168,auto,bidirtl,192,auto,blockquote,216,auto,copy-rtl,240,auto,copy,264,auto,cut-rtl,288,auto,cut,312,auto,paste-rtl,336,auto,paste,360,auto,codesnippet,384,auto,bgcolor,408,auto,textcolor,432,auto,copyformatting,456,auto,creatediv,480,auto,docprops-rtl,504,auto,docprops,528,auto,easyimagealigncenter,552,auto,easyimagealignleft,576,auto,easyimagealignright,600,auto,easyimagealt,624,auto,easyimagefull,648,auto,easyimageside,672,auto,easyimageupload,696,auto,embed,720,auto,embedsemantic,744,auto,emojipanel,768,auto,exportpdf,792,auto,find-rtl,816,auto,find,840,auto,replace,864,auto,flash,888,auto,button,912,auto,checkbox,936,auto,form,960,auto,hiddenfield,984,auto,imagebutton,1008,auto,radio,1032,auto,select-rtl,1056,auto,select,1080,auto,textarea-rtl,1104,auto,textarea,1128,auto,textfield-rtl,1152,auto,textfield,1176,auto,horizontalrule,1200,auto,iframe,1224,auto,image,1248,auto,indent-rtl,1272,auto,indent,1296,auto,outdent-rtl,1320,auto,outdent,1344,auto,justifyblock,1368,auto,justifycenter,1392,auto,justifyleft,1416,auto,justifyright,1440,auto,language,1464,auto,anchor-rtl,1488,auto,anchor,1512,auto,link,1536,auto,unlink,1560,auto,bulletedlist-rtl,1584,auto,bulletedlist,1608,auto,numberedlist-rtl,1632,auto,numberedlist,1656,auto,mathjax,1680,auto,maximize,1704,auto,newpage-rtl,1728,auto,newpage,1752,auto,pagebreak-rtl,1776,auto,pagebreak,1800,auto,pastefromword-rtl,1824,auto,pastefromword,1848,auto,pastetext-rtl,1872,auto,pastetext,1896,auto,placeholder,1920,auto,preview-rtl,1944,auto,preview,1968,auto,print,1992,auto,removeformat,2016,auto,save,2040,auto,scayt,2064,auto,selectall,2088,auto,showblocks-rtl,2112,auto,showblocks,2136,auto,smiley,2160,auto,source-rtl,2184,auto,source,2208,auto,sourcedialog-rtl,2232,auto,sourcedialog,2256,auto,specialchar,2280,auto,table,2304,auto,templates-rtl,2328,auto,templates,2352,auto,uicolor,2376,auto,redo-rtl,2400,auto,redo,2424,auto,undo-rtl,2448,auto,undo,2472,auto,simplebox,2496,auto,spellchecker,2520,auto",
                    "icons.png")
        }())
})();