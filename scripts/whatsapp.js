!function(f, v, b, j) {
    "use strict";
    j = f.extend({
        $div: null,
        settings: null,
        store: null,
        chatbox: !1,
        showed_at: 0,
        is_ready: !1,
        is_mobile: !!navigator.userAgent.match(/Android|iPhone|BlackBerry|IEMobile|Opera Mini/i),
        can_qr: v.QrCreator && "function" == typeof QrCreator.render
    }, j),
    (v.joinchat_obj = j).$ = function(t) {
        return f(t || this.$div, this.$div)
    }
    ,
    j.send_event = function(t) {
        if ((t = f.extend({
            event_category: "JoinChat",
            event_label: "",
            event_action: "",
            chat_channel: "whatsapp",
            chat_id: "--",
            is_mobile: this.is_mobile ? "yes" : "no",
            page_location: location.href,
            page_title: b.title || "no title"
        }, t)).event_label = t.event_label || t.link || "",
        t.event_action = t.event_action || t.chat_channel + ": " + t.chat_id,
        delete t.link,
        !1 !== f(b).triggerHandler("joinchat:event", [t])) {
            var e = v[this.settings.data_layer] || v[v.gtm4wp_datalayer_name] || v.dataLayer;
            if ("object" == typeof e) {
                "undefined" == typeof gtag && (v.gtag = function() {
                    e.push(arguments)
                }
                );
                var n = this.settings.ga_event || "generate_lead"
                  , i = f.extend({
                    transport_type: "beacon"
                }, t)
                  , s = (f.each(i, function(t, e) {
                    "page_location" == t ? i[t] = e.substring(0, 1e3) : "page_referrer" == t ? i[t] = e.substring(0, 420) : "page_title" == t ? i[t] = e.substring(0, 300) : "string" == typeof e && (i[t] = e.substring(0, 100))
                }),
                [])
                  , a = function(t) {
                    s.includes(t) || (t.startsWith("G-") || t.startsWith("GT-")) && (s.push(t),
                    gtag("event", n, f.extend({
                        send_to: t
                    }, i)))
                };
                if (v.google_tag_data && google_tag_data.tidr && google_tag_data.tidr.destination)
                    for (var o in google_tag_data.tidr.destination)
                        a(o);
                e.forEach(function(t) {
                    "config" == t[0] && t[1] && a(t[1])
                }),
                this.settings.gads && gtag("event", "conversion", {
                    send_to: this.settings.gads
                })
            }
            var h = t.event_category;
            delete t.event_category,
            "object" == typeof e && e.push(f.extend({
                event: h
            }, t)),
            "function" == typeof fbq && fbq("trackCustom", h, t)
        }
    }
    ,
    j.whatsapp_link = function(t, e, n) {
        return e = void 0 !== e ? e : this.settings.message_send || "",
        ((n = void 0 !== n ? n : this.settings.whatsapp_web && !this.is_mobile) ? "https://web.whatsapp.com/send?phone=" : "https://wa.me/") + encodeURIComponent(t || this.settings.telephone) + (e ? (n ? "&text=" : "?text=") + encodeURIComponent(e) : "")
    }
    ,
    j.show = function(t) {
        this.$div.addClass("joinchat--show" + (t ? " joinchat--tooltip" : ""))
    }
    ,
    j.hide = function() {
        this.$div.removeClass("joinchat--show")
    }
    ,
    j.chatbox_show = function() {
        this.chatbox || (this.chatbox = !0,
        this.showed_at = Date.now(),
        this.$div.addClass("joinchat--chatbox"),
        this.settings.message_badge && this.$(".joinchat__badge").hasClass("joinchat__badge--in") && this.$(".joinchat__badge").toggleClass("joinchat__badge--in joinchat__badge--out"),
        f(b).trigger("joinchat:show"))
    }
    ,
    j.chatbox_hide = function() {
        this.chatbox && (this.chatbox = !1,
        this.$div.removeClass("joinchat--chatbox joinchat--tooltip"),
        this.settings.message_badge && this.$(".joinchat__badge").removeClass("joinchat__badge--out"),
        f(b).trigger("joinchat:hide"))
    }
    ,
    j.save_hash = function(t) {
        !this.settings.message_hash || this.settings.message_delay < 0 && !t || -1 === (t = (this.store.getItem("joinchat_hashes") || "").split(",").filter(Boolean)).indexOf(this.settings.message_hash) && (t.push(this.settings.message_hash),
        this.store.setItem("joinchat_hashes", t.join(",")))
    }
    ,
    j.open_whatsapp = function(t, e) {
        t = t || this.settings.telephone,
        e = void 0 !== e ? e : this.settings.message_send || "";
        t = {
            link: this.whatsapp_link(t, e),
            chat_channel: "whatsapp",
            chat_id: t,
            chat_message: e
        },
        e = new RegExp("^https?://(wa.me|(api|web|chat).whatsapp.com|" + location.hostname.replace(".", ".") + ")/.*","i");
        !1 !== f(b).triggerHandler("joinchat:open", [t]) && (e.test(t.link) ? (this.send_event(t),
        v.open(t.link, "joinchat", "noopener")) : console.error("Joinchat: the link doesn't seem safe, it must point to the current domain or whatsapp.com"))
    }
    ,
    j.optin = function() {
        return !this.$div.hasClass("joinchat--optout")
    }
    ,
    j.use_qr = function() {
        return !!this.settings.qr && this.can_qr && !this.is_mobile
    }
    ,
    j.qr = function(t, e) {
        var n = b.createElement("CANVAS");
        return QrCreator.render(f.extend({
            text: t,
            radius: .4,
            background: "#FFF",
            size: 200
        }, this.settings.qr || {}, e || {}), n),
        n
    }
    ;
    function t() {
        e && e.apply(this, arguments),
        e = null
    }
    var e;
    e = function() {
        if (j.$div = f(".joinchat"),
        j.$div.length) {
            j.settings = j.$div.data("settings");
            try {
                localStorage.setItem("test", 1),
                localStorage.removeItem("test"),
                j.store = localStorage
            } catch (t) {
                j.store = {
                    _data: {},
                    setItem: function(t, e) {
                        this._data[t] = String(e)
                    },
                    getItem: function(t) {
                        return this._data.hasOwnProperty(t) ? this._data[t] : null
                    }
                }
            }
            if ("object" != typeof j.settings)
                try {
                    j.settings = JSON.parse(j.$div.attr("data-settings"))
                } catch (t) {
                    j.settings = void 0,
                    console.error("Joinchat: can't get settings")
                }
            var t, e, n, i, s, a, o, h, c, r, _, g, l, d;
            j.settings && j.settings.telephone && (j.is_mobile || !j.settings.mobile_only ? (f(b).trigger("joinchat:starting"),
            n = 1e3 * j.settings.button_delay,
            i = Math.max(0, 1e3 * j.settings.message_delay),
            s = !!j.settings.message_hash,
            a = !!j.$(".joinchat__box").length,
            o = parseInt(j.store.getItem("joinchat_views") || 1) >= j.settings.message_views,
            l = (j.store.getItem("joinchat_hashes") || "").split(",").filter(Boolean),
            h = void 0 !== j.settings.is_viewed ? j.settings.is_viewed : -1 !== l.indexOf(j.settings.message_hash || "none"),
            _ = !h && (j.settings.message_badge || !s || !i || !o),
            setTimeout(function() {
                j.show(_)
            }, n),
            s && i && !h && (j.settings.message_badge ? e = setTimeout(function() {
                j.$(".joinchat__badge").addClass("joinchat__badge--in")
            }, n + i) : o && (e = setTimeout(u, n + i))),
            a && !j.is_mobile && j.$(".joinchat__button").on("mouseenter", function() {
                t = setTimeout(u, 1500)
            }).on("mouseleave", function() {
                clearTimeout(t)
            }),
            j.$(".joinchat__button").on("click", function() {
                a && !j.chatbox ? u() : Date.now() > j.showed_at + 600 && (p(),
                j.open_whatsapp())
            }),
            j.$(".joinchat__close").on("click", p),
            j.$("#joinchat_optin").on("change", function() {
                j.$div.toggleClass("joinchat--optout", !this.checked)
            }),
            j.$(".joinchat__box__scroll").on("mousewheel DOMMouseScroll", function(t) {
                t.preventDefault();
                t = t.originalEvent.wheelDelta || -t.originalEvent.detail;
                this.scrollTop += 30 * (t < 0 ? 1 : -1)
            }),
            j.is_mobile && (f(b).on("focus blur", "input, textarea", function(t) {
                f(t.target).closest(j.$div).length || (clearTimeout(c),
                c = setTimeout(m, 200))
            }),
            f(v).on("resize", function() {
                clearTimeout(r),
                r = setTimeout(function() {
                    j.$div[0].style.setProperty("--vh", v.innerHeight + "px")
                }, 200)
            }).trigger("resize")),
            "#joinchat" == (l = new URL(v.location)).hash && (j.show(),
            setTimeout(u, 700)),
            l.searchParams.has("joinchat") && (n = 1e3 * (parseInt(l.searchParams.get("joinchat")) || 0),
            setTimeout(function() {
                j.show()
            }, n),
            setTimeout(u, 700 + n)),
            f(b).on("click", '.joinchat_open, .joinchat_app, a[href="#joinchat"], a[href="#whatsapp"]', function(t) {
                t.preventDefault(),
                !a || j.optin() && !f(this).is('.joinchat_open, a[href="#joinchat"]') ? j.open_whatsapp(f(this).data("phone"), f(this).data("message")) : u()
            }),
            f(b).on("click", ".joinchat_close", function(t) {
                t.preventDefault(),
                j.chatbox_hide()
            }),
            l = f(".joinchat_show, .joinchat_force_show"),
            s && l.length && "IntersectionObserver"in v && (g = new IntersectionObserver(function(t) {
                f.each(t, function() {
                    if (!(this.intersectionRatio <= 0)) {
                        var t = this.target.classList.contains("joinchat_force_show");
                        if (!h || t)
                            return g.disconnect(),
                            j.save_hash(!t),
                            u(),
                            !1
                    }
                })
            }
            ),
            l.each(function() {
                g.observe(this)
            })),
            j.use_qr() ? j.$(".joinchat__qr").append(j.qr(j.whatsapp_link(void 0, void 0, !1))) : j.$(".joinchat__qr").remove(),
            a && j.$div.css("--peak", "url(#joinchat__peak_" + (j.$div.closest("[dir=rtl]").length ? "r" : "l") + ")"),
            i && !o && j.store.setItem("joinchat_views", parseInt(j.store.getItem("joinchat_views") || 0) + 1),
            f(b).trigger("joinchat:start"),
            j.is_ready = !0) : (j.hide(),
            f(b).on("click", '.joinchat_open, .joinchat_app, a[href="#joinchat"], a[href="#whatsapp"]', function(t) {
                t.preventDefault(),
                j.open_whatsapp(f(this).data("phone"), f(this).data("message"))
            })),
            j.can_qr && !j.is_mobile ? f(".joinchat-button__qr").each(function() {
                f(this).append(j.qr(j.whatsapp_link(f(this).data("phone"), f(this).data("message"), !1)))
            }) : f(".wp-block-joinchat-button figure").remove(),
            void 0 !== j.settings.sku) && (d = j.settings.message_send,
            f("form.variations_form").on("found_variation reset_data", function(t, e) {
                e = e && e.sku || j.settings.sku;
                j.$(".joinchat__box sku").text(e),
                j.settings.message_send = d.replace(/<sku>.*<\/sku>/g, e)
            }))
        }
        function u() {
            clearTimeout(e),
            j.chatbox_show()
        }
        function p() {
            j.save_hash(),
            j.chatbox_hide()
        }
        function m() {
            var t = (b.activeElement.type || "").toLowerCase();
            0 <= ["date", "datetime", "email", "month", "number", "password", "search", "tel", "text", "textarea", "time", "url", "week"].indexOf(t) ? j.chatbox ? (j.chatbox_hide(),
            setTimeout(function() {
                j.hide()
            }, 400)) : j.hide() : j.show()
        }
    }
    ;
    f(t),
    f(v).on("load", t),
    b.addEventListener("DOMContentLoaded", t)
}(jQuery, window, document, window.joinchat_obj || {});
