!function(e) {
    var t = {};
    function r(n) {
        if (t[n])
            return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r),
        o.l = !0,
        o.exports
    }
    r.m = e,
    r.c = t,
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                r.d(n, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return n
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "",
    r(r.s = 100)
}({
    100: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = function(e) {
            return "string" != typeof e || "" === e ? (console.error("The namespace must be a non-empty string."),
            !1) : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e) || (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),
            !1)
        };
        var o = function(e) {
            return "string" != typeof e || "" === e ? (console.error("The hook name must be a non-empty string."),
            !1) : /^__/.test(e) ? (console.error("The hook name cannot begin with `__`."),
            !1) : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e) || (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),
            !1)
        };
        var i = function(e, t) {
            return function(r, i, a) {
                var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10
                  , c = e[t];
                if (o(r) && n(i))
                    if ("function" == typeof a)
                        if ("number" == typeof s) {
                            var l = {
                                callback: a,
                                priority: s,
                                namespace: i
                            };
                            if (c[r]) {
                                var u, d = c[r].handlers;
                                for (u = d.length; u > 0 && !(s >= d[u - 1].priority); u--)
                                    ;
                                u === d.length ? d[u] = l : d.splice(u, 0, l),
                                c.__current.forEach((function(e) {
                                    e.name === r && e.currentIndex >= u && e.currentIndex++
                                }
                                ))
                            } else
                                c[r] = {
                                    handlers: [l],
                                    runs: 0
                                };
                            "hookAdded" !== r && e.doAction("hookAdded", r, i, a, s)
                        } else
                            console.error("If specified, the hook priority must be a number.");
                    else
                        console.error("The hook callback must be a function.")
            }
        };
        var a = function(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return function(i, a) {
                var s = e[t];
                if (o(i) && (r || n(a))) {
                    if (!s[i])
                        return 0;
                    var c = 0;
                    if (r)
                        c = s[i].handlers.length,
                        s[i] = {
                            runs: s[i].runs,
                            handlers: []
                        };
                    else
                        for (var l = s[i].handlers, u = function(e) {
                            l[e].namespace === a && (l.splice(e, 1),
                            c++,
                            s.__current.forEach((function(t) {
                                t.name === i && t.currentIndex >= e && t.currentIndex--
                            }
                            )))
                        }, d = l.length - 1; d >= 0; d--)
                            u(d);
                    return "hookRemoved" !== i && e.doAction("hookRemoved", i, a),
                    c
                }
            }
        };
        var s = function(e, t) {
            return function(r, n) {
                var o = e[t];
                return void 0 !== n ? r in o && o[r].handlers.some((function(e) {
                    return e.namespace === n
                }
                )) : r in o
            }
        };
        var c = function(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return function(n) {
                var o = e[t];
                o[n] || (o[n] = {
                    handlers: [],
                    runs: 0
                }),
                o[n].runs++;
                var i = o[n].handlers;
                for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
                    s[c - 1] = arguments[c];
                if (!i || !i.length)
                    return r ? s[0] : void 0;
                var l = {
                    name: n,
                    currentIndex: 0
                };
                for (o.__current.push(l); l.currentIndex < i.length; ) {
                    var u = i[l.currentIndex]
                      , d = u.callback.apply(null, s);
                    r && (s[0] = d),
                    l.currentIndex++
                }
                return o.__current.pop(),
                r ? s[0] : void 0
            }
        };
        var l = function(e, t) {
            return function() {
                var r, n, o = e[t];
                return null !== (r = null === (n = o.__current[o.__current.length - 1]) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : null
            }
        };
        var u = function(e, t) {
            return function(r) {
                var n = e[t];
                return void 0 === r ? void 0 !== n.__current[0] : !!n.__current[0] && r === n.__current[0].name
            }
        };
        var d = function(e, t) {
            return function(r) {
                var n = e[t];
                if (o(r))
                    return n[r] && n[r].runs ? n[r].runs : 0
            }
        }
          , f = function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.actions = Object.create(null),
            this.actions.__current = [],
            this.filters = Object.create(null),
            this.filters.__current = [],
            this.addAction = i(this, "actions"),
            this.addFilter = i(this, "filters"),
            this.removeAction = a(this, "actions"),
            this.removeFilter = a(this, "filters"),
            this.hasAction = s(this, "actions"),
            this.hasFilter = s(this, "filters"),
            this.removeAllActions = a(this, "actions", !0),
            this.removeAllFilters = a(this, "filters", !0),
            this.doAction = c(this, "actions"),
            this.applyFilters = c(this, "filters", !0),
            this.currentAction = l(this, "actions"),
            this.currentFilter = l(this, "filters"),
            this.doingAction = u(this, "actions"),
            this.doingFilter = u(this, "filters"),
            this.didAction = d(this, "actions"),
            this.didFilter = d(this, "filters")
        };
        var h = function() {
            return new f
        }
          , p = h();
        p.addAction,
        p.addFilter,
        p.removeAction,
        p.removeFilter,
        p.hasAction,
        p.hasFilter,
        p.removeAllActions,
        p.removeAllFilters,
        p.doAction,
        p.applyFilters,
        p.currentAction,
        p.currentFilter,
        p.doingAction,
        p.doingFilter,
        p.didAction,
        p.didFilter,
        p.actions,
        p.filters;
        function v(e) {
            return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function m(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(r), !0).forEach((function(t) {
                    g(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function g(e, t, r) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != v(e) || !e)
                        return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != v(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == v(t) ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        window.isEditMode = !1,
        window.ea = {
            hooks: h(),
            isEditMode: !1,
            elementStatusCheck: function(e) {
                return !(!window.eaElementList || !(e in window.eaElementList)) || (window.eaElementList = y(y({}, window.eaElementList), {}, g({}, e, !0)),
                !1)
            }
        },
        ea.hooks.addAction("widgets.reinit", "ea", (function(e) {
            var t = jQuery(".eael-filter-gallery-container", e)
              , r = jQuery(".eael-post-grid:not(.eael-post-carousel)", e)
              , n = jQuery(".eael-twitter-feed-masonry", e)
              , o = jQuery(".eael-instafeed", e)
              , i = jQuery(".premium-gallery-container", e)
              , a = jQuery(".eael-event-calendar-cls", e)
              , s = jQuery(".eael-testimonial-slider", e)
              , c = jQuery(".eael-tm-carousel", e)
              , l = jQuery(".eael-post-carousel:not(.eael-post-grid)", e)
              , u = jQuery(".eael-logo-carousel", e)
              , d = jQuery(".eael-twitter-feed-carousel", e);
            t.length && t.isotope("layout"),
            r.length && r.isotope("layout"),
            n.length && n.isotope("layout"),
            o.length && o.isotope("layout"),
            i.length && i.isotope("layout"),
            a.length && ea.hooks.doAction("eventCalendar.reinit"),
            s.length && ea.hooks.doAction("testimonialSlider.reinit"),
            c.length && ea.hooks.doAction("teamMemberCarousel.reinit"),
            l.length && ea.hooks.doAction("postCarousel.reinit"),
            u.length && ea.hooks.doAction("logoCarousel.reinit"),
            d.length && ea.hooks.doAction("twitterCarousel.reinit")
        }
        ));
        var b, w = function(e) {
            window.dispatchEvent(new Event("resize")),
            (e = "object" === v(e) ? e : jQuery(e)).find(".swiper-wrapper").each((function() {
                var e = jQuery(this).css("transform");
                jQuery(this).css("transform", e)
            }
            ))
        };
        ea.hooks.addAction("ea-advanced-tabs-triggered", "ea", w),
        ea.hooks.addAction("ea-advanced-accordion-triggered", "ea", w),
        jQuery(window).on("elementor/frontend/init", (function() {
            window.isEditMode = elementorFrontend.isEditMode(),
            window.ea.isEditMode = elementorFrontend.isEditMode(),
            ea.hooks.doAction("init"),
            ea.isEditMode && ea.hooks.doAction("editMode.init")
        }
        )),
        function(e) {
            ea.getToken = function() {
                localize.nonce && !ea.noncegenerated && e.ajax({
                    url: localize.ajaxurl,
                    type: "post",
                    data: {
                        action: "eael_get_token"
                    },
                    success: function(e) {
                        e.success && (localize.nonce = e.data.nonce,
                        ea.noncegenerated = !0)
                    }
                })
            }
            ,
            ea.sanitizeURL = function(e) {
                if (e.startsWith("/") || e.startsWith("#"))
                    return e;
                try {
                    var t = new URL(e);
                    if (!["http:", "https:", "ftp:", "ftps:", "mailto:", "news:", "irc:", "irc6:", "ircs:", "gopher:", "nntp:", "feed:", "telnet:", "mms:", "rtsp:", "sms:", "svn:", "tel:", "fax:", "xmpp:", "webcal:", "urn:"].includes(t.protocol))
                        throw new Error("Invalid protocol");
                    return t.toString()
                } catch (e) {
                    return console.error("Error sanitizing URL:", e.message),
                    "#"
                }
            }
            ;
            var t = !0;
            window.addEventListener("hashchange", (function() {
                if (t) {
                    var e = window.location.hash.substr(1);
                    "undefined" !== (e = "safari" === e ? "eael-safari" : e) && e && jQuery("#" + e).trigger("click")
                }
            }
            )),
            e("a").on("click", (function(r) {
                var n, o = e(this).attr("href");
                (n = (o = void 0 === o ? "" : o).startsWith("#")) || (n = (o = o.replace(localize.page_permalink, "")).startsWith("#")),
                n && (t = !1,
                setTimeout((function() {
                    t = !0
                }
                ), 100));
                try {
                    if (o.startsWith("#!")) {
                        var i = o.replace("#!", "#");
                        e(i).trigger("click")
                    } else {
                        if (n && (e(o).hasClass("eael-tab-item-trigger") || e(o).hasClass("eael-accordion-header")))
                            if (e(o).trigger("click"),
                            void 0 !== o && o)
                                if (e(o).closest(".eael-advance-tabs").length > 0) {
                                    var a = tab.data("custom-id-offset");
                                    a = a ? parseFloat(a) : 0,
                                    e("html, body").animate({
                                        scrollTop: e(o).offset().top - a
                                    }, 300)
                                }
                    }
                } catch (e) {}
            }
            )),
            e(document).on("click", ".e-n-tab-title", (function() {
                window.dispatchEvent(new Event("resize"))
            }
            ))
        }(jQuery),
        (b = jQuery)(document).on("click", ".theme-savoy .eael-product-popup .nm-qty-minus, .theme-savoy .eael-product-popup .nm-qty-plus", (function(e) {
            var t = b(this)
              , r = t.closest(".quantity").find(".qty")
              , n = parseFloat(r.val())
              , o = parseFloat(r.attr("max"))
              , i = parseFloat(r.attr("min"))
              , a = r.attr("step");
            n && "" !== n && "NaN" !== n || (n = 0),
            "" !== o && "NaN" !== o || (o = ""),
            "" !== i && "NaN" !== i || (i = 0),
            "any" !== a && "" !== a && void 0 !== a && "NaN" !== parseFloat(a) || (a = 1),
            t.hasClass("nm-qty-plus") ? o && (o == n || n > o) ? r.val(o) : r.val(n + parseFloat(a)) : i && (i == n || n < i) ? r.val(i) : n > 0 && r.val(n - parseFloat(a))
        }
        )),
        function(e) {
            e.fn.isInViewport = function() {
                if (e(this).length < 1)
                    return !1;
                var t = e(this).offset().top
                  , r = t + e(this).outerHeight() / 2
                  , n = e(window).scrollTop()
                  , o = n + e(window).height() / 2;
                return r > n && t < o
            }
            ,
            e(document).ready((function() {
                var e = new URLSearchParams(location.search);
                if (e.has("popup-selector") && (e.has("eael-lostpassword") || e.has("eael-resetpassword"))) {
                    var t = e.get("popup-selector");
                    t.length && (t = t.replace(/_/g, " "),
                    setTimeout((function() {
                        jQuery(t).trigger("click")
                    }
                    ), 300))
                }
            }
            ))
        }(jQuery)
    }
});
