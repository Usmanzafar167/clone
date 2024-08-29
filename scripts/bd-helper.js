var debounce = function(t, e, r) {
    var a;
    return function() {
        var s = this
          , n = arguments
          , i = r && !a;
        clearTimeout(a),
        a = setTimeout((function() {
            a = null,
            r || t.apply(s, n)
        }
        ), e),
        i && t.apply(s, n)
    }
};
function returnCurrencySymbol(t=null) {
    if (null === t)
        return "";
    let e = {
        USD: "$",
        EUR: "€",
        CRC: "₡",
        GBP: "£",
        ILS: "₪",
        INR: "₹",
        JPY: "¥",
        KRW: "₩",
        NGN: "₦",
        PHP: "₱",
        PLN: "zł",
        PYG: "₲",
        THB: "฿",
        UAH: "₴",
        VND: "₫"
    };
    return void 0 !== e[t] ? e[t] : ""
}
jQuery(document).ready((function() {
    jQuery(".bdt-ss-link").on("click", (function() {
        var t = jQuery("<input>");
        jQuery("body").append(t),
        t.val(jQuery(this).data("url")).select(),
        document.execCommand("copy"),
        t.remove(),
        jQuery(this).find(".bdt-social-share-title").html(jQuery(this).data("copied")),
        setTimeout(( () => {
            jQuery(this).find(".bdt-social-share-title").html(jQuery(this).data("orginal"))
        }
        ), 5e3)
    }
    ))
}
)),
jQuery(document).ajaxComplete((function(t, e, r) {
    if (e.responseJSON && void 0 !== e.responseJSON.cart_hash && e.responseJSON.cart_hash && jQuery(".bdt-offcanvas").hasClass("__update_cart")) {
        let t = jQuery(".bdt-offcanvas.__update_cart").attr("id");
        bdtUIkit.util.ready((function() {
            bdtUIkit.offcanvas("#" + t).show()
        }
        ))
    }
}
)),
jQuery(document).ready((function() {
    const t = {
        "elementor-widget-bdt-post-grid-tab": {
            selectors: [".bdt-post-grid-desc-inner a", ".bdt-post-grid-tab-readmore"]
        },
        "elementor-widget-bdt-post-grid": {
            selectors: [".bdt-post-grid-title a"]
        }
    };
    Object.keys(t).forEach((function(e) {
        jQuery("." + e).length > 0 && void 0 !== jQuery("." + e).data("settings") && "yes" === jQuery("." + e).data("settings").bdt_link_new_tab && t[e].selectors.forEach((function(t) {
            jQuery(t).attr("target", "_blank")
        }
        ))
    }
    )),
    jQuery(".bdt-pass-input-wrapper").find("i").on("click", (function() {
        jQuery(this).hasClass("fa-eye") && jQuery(this).toggleClass("fa-eye-slash");
        let t = jQuery(this).closest(".bdt-pass-input-wrapper").find("input");
        "password" == t.attr("type") ? jQuery(t).attr("type", "text") : jQuery(t).attr("type", "password")
    }
    ))
}
));
