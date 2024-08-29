/*! bdtUIkit 3.21.7 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License */
(function(we, xe) {
    typeof exports == "object" && typeof module < "u" ? module.exports = xe() : typeof define == "function" && define.amd ? define("uikit", xe) : (we = typeof globalThis < "u" ? globalThis : we || self,
    we.bdtUIkit = xe())
}
)(this, function() {
    "use strict";
    const {hasOwnProperty: we, toString: xe} = Object.prototype;
    function pt(t, e) {
        return we.call(t, e)
    }
    const nr = /\B([A-Z])/g
      , Dt = ct(t => t.replace(nr, "-$1").toLowerCase())
      , or = /-(\w)/g
      , $e = ct(t => (t.charAt(0).toLowerCase() + t.slice(1)).replace(or, (e, i) => i.toUpperCase()))
      , kt = ct(t => t.charAt(0).toUpperCase() + t.slice(1));
    function gt(t, e) {
        var i;
        return (i = t == null ? void 0 : t.startsWith) == null ? void 0 : i.call(t, e)
    }
    function Qt(t, e) {
        var i;
        return (i = t == null ? void 0 : t.endsWith) == null ? void 0 : i.call(t, e)
    }
    function v(t, e) {
        var i;
        return (i = t == null ? void 0 : t.includes) == null ? void 0 : i.call(t, e)
    }
    function wt(t, e) {
        var i;
        return (i = t == null ? void 0 : t.findIndex) == null ? void 0 : i.call(t, e)
    }
    const {isArray: G, from: Zt} = Array
      , {assign: ft} = Object;
    function tt(t) {
        return typeof t == "function"
    }
    function St(t) {
        return t !== null && typeof t == "object"
    }
    function te(t) {
        return xe.call(t) === "[object Object]"
    }
    function Qe(t) {
        return St(t) && t === t.window
    }
    function ye(t) {
        return Li(t) === 9
    }
    function Ze(t) {
        return Li(t) >= 1
    }
    function ke(t) {
        return Li(t) === 1
    }
    function Li(t) {
        return !Qe(t) && St(t) && t.nodeType
    }
    function ee(t) {
        return typeof t == "boolean"
    }
    function z(t) {
        return typeof t == "string"
    }
    function Se(t) {
        return typeof t == "number"
    }
    function mt(t) {
        return Se(t) || z(t) && !isNaN(t - parseFloat(t))
    }
    function ti(t) {
        return !(G(t) ? t.length : St(t) && Object.keys(t).length)
    }
    function X(t) {
        return t === void 0
    }
    function Wi(t) {
        return ee(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t
    }
    function xt(t) {
        const e = Number(t);
        return isNaN(e) ? !1 : e
    }
    function k(t) {
        return parseFloat(t) || 0
    }
    function W(t) {
        return t && T(t)[0]
    }
    function T(t) {
        return Ze(t) ? [t] : Array.from(t || []).filter(Ze)
    }
    function Mt(t) {
        if (Qe(t))
            return t;
        t = W(t);
        const e = ye(t) ? t : t == null ? void 0 : t.ownerDocument;
        return (e == null ? void 0 : e.defaultView) || window
    }
    function Ie(t, e) {
        return t === e || St(t) && St(e) && Object.keys(t).length === Object.keys(e).length && ie(t, (i, s) => i === e[s])
    }
    function ji(t, e, i) {
        return t.replace(new RegExp(`${e}|${i}`,"g"), s => s === e ? i : e)
    }
    function Bt(t) {
        return t[t.length - 1]
    }
    function ie(t, e) {
        for (const i in t)
            if (e(t[i], i) === !1)
                return !1;
        return !0
    }
    function js(t, e) {
        return t.slice().sort( ({[e]: i=0}, {[e]: s=0}) => i > s ? 1 : s > i ? -1 : 0)
    }
    function Nt(t, e) {
        return t.reduce( (i, s) => i + k(tt(e) ? e(s) : s[e]), 0)
    }
    function Rs(t, e) {
        const i = new Set;
        return t.filter( ({[e]: s}) => i.has(s) ? !1 : i.add(s))
    }
    function Ri(t, e) {
        return e.reduce( (i, s) => ({
            ...i,
            [s]: t[s]
        }), {})
    }
    function Q(t, e=0, i=1) {
        return Math.min(Math.max(xt(t) || 0, e), i)
    }
    function A() {}
    function ei(...t) {
        return [["bottom", "top"], ["right", "left"]].every( ([e,i]) => Math.min(...t.map( ({[e]: s}) => s)) - Math.max(...t.map( ({[i]: s}) => s)) > 0)
    }
    function ii(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top
    }
    function qi(t, e, i) {
        const s = e === "width" ? "height" : "width";
        return {
            [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s],
            [e]: i
        }
    }
    function qs(t, e) {
        t = {
            ...t
        };
        for (const i in t)
            t = t[i] > e[i] ? qi(t, i, e[i]) : t;
        return t
    }
    function rr(t, e) {
        t = qs(t, e);
        for (const i in t)
            t = t[i] < e[i] ? qi(t, i, e[i]) : t;
        return t
    }
    const Ui = {
        ratio: qi,
        contain: qs,
        cover: rr
    };
    function nt(t, e, i=0, s=!1) {
        e = T(e);
        const {length: n} = e;
        return n ? (t = mt(t) ? xt(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : t === "last" ? n - 1 : e.indexOf(W(t)),
        s ? Q(t, 0, n - 1) : (t %= n,
        t < 0 ? t + n : t)) : -1
    }
    function ct(t) {
        const e = Object.create(null);
        return (i, ...s) => e[i] || (e[i] = t(i, ...s))
    }
    function S(t, ...e) {
        for (const i of T(t)) {
            const s = zt(e).filter(n => !x(i, n));
            s.length && i.classList.add(...s)
        }
    }
    function _(t, ...e) {
        for (const i of T(t)) {
            const s = zt(e).filter(n => x(i, n));
            s.length && i.classList.remove(...s)
        }
    }
    function si(t, e, i) {
        i = zt(i),
        e = zt(e).filter(s => !v(i, s)),
        _(t, e),
        S(t, i)
    }
    function x(t, e) {
        return [e] = zt(e),
        T(t).some(i => i.classList.contains(e))
    }
    function j(t, e, i) {
        const s = zt(e);
        X(i) || (i = !!i);
        for (const n of T(t))
            for (const o of s)
                n.classList.toggle(o, i)
    }
    function zt(t) {
        return t ? G(t) ? t.map(zt).flat() : String(t).split(" ").filter(Boolean) : []
    }
    function g(t, e, i) {
        var s;
        if (St(e)) {
            for (const n in e)
                g(t, n, e[n]);
            return
        }
        if (X(i))
            return (s = W(t)) == null ? void 0 : s.getAttribute(e);
        for (const n of T(t))
            tt(i) && (i = i.call(n, g(n, e))),
            i === null ? Ee(n, e) : n.setAttribute(e, i)
    }
    function It(t, e) {
        return T(t).some(i => i.hasAttribute(e))
    }
    function Ee(t, e) {
        T(t).forEach(i => i.removeAttribute(e))
    }
    function J(t, e) {
        for (const i of [e, `data-${e}`])
            if (It(t, i))
                return g(t, i)
    }
    const Ft = typeof window < "u"
      , U = Ft && document.dir === "rtl"
      , se = Ft && "ontouchstart"in window
      , ne = Ft && window.PointerEvent
      , ht = ne ? "pointerdown" : se ? "touchstart" : "mousedown"
      , ni = ne ? "pointermove" : se ? "touchmove" : "mousemove"
      , Et = ne ? "pointerup" : se ? "touchend" : "mouseup"
      , Ht = ne ? "pointerenter" : se ? "" : "mouseenter"
      , oe = ne ? "pointerleave" : se ? "" : "mouseleave"
      , oi = ne ? "pointercancel" : "touchcancel"
      , ar = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    function Vi(t) {
        return T(t).some(e => ar[e.tagName.toLowerCase()])
    }
    const lr = Ft && Element.prototype.checkVisibility || function() {
        return this.offsetWidth || this.offsetHeight || this.getClientRects().length
    }
    ;
    function R(t) {
        return T(t).some(e => lr.call(e))
    }
    const Te = "input,select,textarea,button";
    function ri(t) {
        return T(t).some(e => C(e, Te))
    }
    const Ce = `${Te},a[href],[tabindex]`;
    function ai(t) {
        return C(t, Ce)
    }
    function D(t) {
        var e;
        return (e = W(t)) == null ? void 0 : e.parentElement
    }
    function Pe(t, e) {
        return T(t).filter(i => C(i, e))
    }
    function C(t, e) {
        return T(t).some(i => i.matches(e))
    }
    function _e(t, e) {
        const i = [];
        for (; t = D(t); )
            (!e || C(t, e)) && i.push(t);
        return i
    }
    function M(t, e) {
        t = W(t);
        const i = t ? Zt(t.children) : [];
        return e ? Pe(i, e) : i
    }
    function $t(t, e) {
        return e ? T(t).indexOf(W(e)) : M(D(t)).indexOf(t)
    }
    function re(t) {
        return t = W(t),
        t && ["origin", "pathname", "search"].every(e => t[e] === location[e])
    }
    function Yi(t) {
        if (re(t)) {
            const {hash: e, ownerDocument: i} = W(t)
              , s = decodeURIComponent(e).slice(1);
            return i.getElementById(s) || i.getElementsByName(s)[0]
        }
    }
    function Z(t, e) {
        return Gi(t, Us(t, e))
    }
    function Ae(t, e) {
        return Oe(t, Us(t, e))
    }
    function Gi(t, e) {
        return W(Gs(t, W(e), "querySelector"))
    }
    function Oe(t, e) {
        return T(Gs(t, W(e), "querySelectorAll"))
    }
    function Us(t, e=document) {
        return z(t) && Vs(t).isContextSelector || ye(e) ? e : e.ownerDocument
    }
    const cr = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g
      , hr = /(\([^)]*\)|[^,])+/g
      , Vs = ct(t => {
        t = t.replace(cr, "$1 *");
        let e = !1;
        const i = [];
        for (let s of t.match(hr))
            s = s.trim(),
            e || (e = ["!", "+", "~", "-", ">"].includes(s[0])),
            i.push(s);
        return {
            selector: i.join(","),
            selectors: i,
            isContextSelector: e
        }
    }
    )
      , ur = /(\([^)]*\)|\S)*/
      , Ys = ct(t => {
        t = t.slice(1).trim();
        const [e] = t.match(ur);
        return [e, t.slice(e.length + 1)]
    }
    );
    function Gs(t, e=document, i) {
        if (!t || !z(t))
            return t;
        const s = Vs(t);
        if (!s.isContextSelector)
            return Xi(e, i, s.selector);
        t = "";
        const n = s.selectors.length === 1;
        for (let o of s.selectors) {
            let r, a = e;
            if (o[0] === "!" && ([r,o] = Ys(o),
            a = e.parentElement.closest(r),
            !o && n) || a && o[0] === "-" && ([r,o] = Ys(o),
            a = a.previousElementSibling,
            a = C(a, r) ? a : null,
            !o && n))
                return a;
            if (a) {
                if (n)
                    return o[0] === "~" || o[0] === "+" ? (o = `:scope > :nth-child(${$t(a) + 1}) ${o}`,
                    a = a.parentElement) : o[0] === ">" && (o = `:scope ${o}`),
                    Xi(a, i, o);
                t += `${t ? "," : ""}${fr(a)} ${o}`
            }
        }
        return ye(e) || (e = e.ownerDocument),
        Xi(e, i, t)
    }
    function Xi(t, e, i) {
        try {
            return t[e](i)
        } catch {
            return null
        }
    }
    function fr(t) {
        const e = [];
        for (; t.parentNode; ) {
            const i = g(t, "id");
            if (i) {
                e.unshift(`#${Ji(i)}`);
                break
            } else {
                let {tagName: s} = t;
                s !== "HTML" && (s += `:nth-child(${$t(t) + 1})`),
                e.unshift(s),
                t = t.parentNode
            }
        }
        return e.join(" > ")
    }
    function Ji(t) {
        return z(t) ? CSS.escape(t) : ""
    }
    function $(...t) {
        let[e,i,s,n,o=!1] = Ki(t);
        n.length > 1 && (n = pr(n)),
        o != null && o.self && (n = gr(n)),
        s && (n = dr(s, n));
        for (const r of i)
            for (const a of e)
                a.addEventListener(r, n, o);
        return () => Tt(e, i, n, o)
    }
    function Tt(...t) {
        let[e,i,,s,n=!1] = Ki(t);
        for (const o of i)
            for (const r of e)
                r.removeEventListener(o, s, n)
    }
    function F(...t) {
        const [e,i,s,n,o=!1,r] = Ki(t)
          , a = $(e, i, s, l => {
            const c = !r || r(l);
            c && (a(),
            n(l, c))
        }
        , o);
        return a
    }
    function b(t, e, i) {
        return Qi(t).every(s => s.dispatchEvent(ae(e, !0, !0, i)))
    }
    function ae(t, e=!0, i=!1, s) {
        return z(t) && (t = new CustomEvent(t,{
            bubbles: e,
            cancelable: i,
            detail: s
        })),
        t
    }
    function Ki(t) {
        return t[0] = Qi(t[0]),
        z(t[1]) && (t[1] = t[1].split(" ")),
        tt(t[2]) && t.splice(2, 0, !1),
        t
    }
    function dr(t, e) {
        return i => {
            const s = t[0] === ">" ? Oe(t, i.currentTarget).reverse().find(n => n.contains(i.target)) : i.target.closest(t);
            s && (i.current = s,
            e.call(this, i),
            delete i.current)
        }
    }
    function pr(t) {
        return e => G(e.detail) ? t(e, ...e.detail) : t(e)
    }
    function gr(t) {
        return function(e) {
            if (e.target === e.currentTarget || e.target === e.current)
                return t.call(null, e)
        }
    }
    function Xs(t) {
        return t && "addEventListener"in t
    }
    function mr(t) {
        return Xs(t) ? t : W(t)
    }
    function Qi(t) {
        return G(t) ? t.map(mr).filter(Boolean) : z(t) ? Oe(t) : Xs(t) ? [t] : T(t)
    }
    function dt(t) {
        return t.pointerType === "touch" || !!t.touches
    }
    function yt(t) {
        var e, i;
        const {clientX: s, clientY: n} = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t;
        return {
            x: s,
            y: n
        }
    }
    const vr = {
        "animation-iteration-count": !0,
        "column-count": !0,
        "fill-opacity": !0,
        "flex-grow": !0,
        "flex-shrink": !0,
        "font-weight": !0,
        "line-height": !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0,
        widows: !0,
        "z-index": !0,
        zoom: !0
    };
    function h(t, e, i, s) {
        const n = T(t);
        for (const o of n)
            if (z(e)) {
                if (e = li(e),
                X(i))
                    return getComputedStyle(o).getPropertyValue(e);
                o.style.setProperty(e, mt(i) && !vr[e] ? `${i}px` : i || Se(i) ? i : "", s)
            } else if (G(e)) {
                const r = {};
                for (const a of e)
                    r[a] = h(o, a);
                return r
            } else if (St(e))
                for (const r in e)
                    h(o, r, e[r], i);
        return n[0]
    }
    const li = ct(t => {
        if (gt(t, "--"))
            return t;
        t = Dt(t);
        const {style: e} = document.documentElement;
        if (t in e)
            return t;
        for (const i of ["webkit", "moz"]) {
            const s = `-${i}-${t}`;
            if (s in e)
                return s
        }
    }
    )
      , Zi = "bdt-transition"
      , ts = "transitionend"
      , es = "transitioncanceled";
    function br(t, e, i=400, s="linear") {
        return i = Math.round(i),
        Promise.all(T(t).map(n => new Promise( (o, r) => {
            for (const l in e)
                h(n, l);
            const a = setTimeout( () => b(n, ts), i);
            F(n, [ts, es], ({type: l}) => {
                clearTimeout(a),
                _(n, Zi),
                h(n, {
                    transitionProperty: "",
                    transitionDuration: "",
                    transitionTimingFunction: ""
                }),
                l === es ? r() : o(n)
            }
            , {
                self: !0
            }),
            S(n, Zi),
            h(n, {
                transitionProperty: Object.keys(e).map(li).join(","),
                transitionDuration: `${i}ms`,
                transitionTimingFunction: s,
                ...e
            })
        }
        )))
    }
    const B = {
        start: br,
        async stop(t) {
            b(t, ts),
            await Promise.resolve()
        },
        async cancel(t) {
            b(t, es),
            await Promise.resolve()
        },
        inProgress(t) {
            return x(t, Zi)
        }
    }
      , De = "bdt-animation"
      , Js = "animationend"
      , ci = "animationcanceled";
    function Ks(t, e, i=200, s, n) {
        return Promise.all(T(t).map(o => new Promise( (r, a) => {
            x(o, De) && b(o, ci);
            const l = [e, De, `${De}-${n ? "leave" : "enter"}`, s && `bdt-transform-origin-${s}`, n && `${De}-reverse`]
              , c = setTimeout( () => b(o, Js), i);
            F(o, [Js, ci], ({type: u}) => {
                clearTimeout(c),
                u === ci ? a() : r(o),
                h(o, "animationDuration", ""),
                _(o, l)
            }
            , {
                self: !0
            }),
            h(o, "animationDuration", `${i}ms`),
            S(o, l)
        }
        )))
    }
    const Ct = {
        in: Ks,
        out(t, e, i, s) {
            return Ks(t, e, i, s, !0)
        },
        inProgress(t) {
            return x(t, De)
        },
        cancel(t) {
            b(t, ci)
        }
    };
    function wr(t) {
        if (document.readyState !== "loading") {
            t();
            return
        }
        F(document, "DOMContentLoaded", t)
    }
    function H(t, ...e) {
        return e.some(i => {
            var s;
            return ((s = t == null ? void 0 : t.tagName) == null ? void 0 : s.toLowerCase()) === i.toLowerCase()
        }
        )
    }
    function Qs(t) {
        return t = y(t),
        t.innerHTML = "",
        t
    }
    function Pt(t, e) {
        return X(e) ? y(t).innerHTML : q(Qs(t), e)
    }
    const xr = fi("prepend")
      , q = fi("append")
      , hi = fi("before")
      , ui = fi("after");
    function fi(t) {
        return function(e, i) {
            var s;
            const n = T(z(i) ? Lt(i) : i);
            return (s = y(e)) == null || s[t](...n),
            Zs(n)
        }
    }
    function ot(t) {
        T(t).forEach(e => e.remove())
    }
    function di(t, e) {
        for (e = W(hi(t, e)); e.firstElementChild; )
            e = e.firstElementChild;
        return q(e, t),
        e
    }
    function is(t, e) {
        return T(T(t).map(i => i.hasChildNodes() ? di(Zt(i.childNodes), e) : q(i, e)))
    }
    function Me(t) {
        T(t).map(D).filter( (e, i, s) => s.indexOf(e) === i).forEach(e => e.replaceWith(...e.childNodes))
    }
    const $r = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function Lt(t) {
        const e = $r.exec(t);
        if (e)
            return document.createElement(e[1]);
        const i = document.createElement("template");
        return i.innerHTML = t.trim(),
        Zs(i.content.childNodes)
    }
    function Zs(t) {
        return t.length > 1 ? t : t[0]
    }
    function _t(t, e) {
        if (ke(t))
            for (e(t),
            t = t.firstElementChild; t; )
                _t(t, e),
                t = t.nextElementSibling
    }
    function y(t, e) {
        return tn(t) ? W(Lt(t)) : Gi(t, e)
    }
    function N(t, e) {
        return tn(t) ? T(Lt(t)) : Oe(t, e)
    }
    function tn(t) {
        return z(t) && gt(t.trim(), "<")
    }
    const Wt = {
        width: ["left", "right"],
        height: ["top", "bottom"]
    };
    function m(t) {
        const e = ke(t) ? W(t).getBoundingClientRect() : {
            height: et(t),
            width: pi(t),
            top: 0,
            left: 0
        };
        return {
            height: e.height,
            width: e.width,
            top: e.top,
            left: e.left,
            bottom: e.top + e.height,
            right: e.left + e.width
        }
    }
    function E(t, e) {
        e && h(t, {
            left: 0,
            top: 0
        });
        const i = m(t);
        if (t) {
            const {scrollY: s, scrollX: n} = Mt(t)
              , o = {
                height: s,
                width: n
            };
            for (const r in Wt)
                for (const a of Wt[r])
                    i[a] += o[r]
        }
        if (!e)
            return i;
        for (const s of ["left", "top"])
            h(t, s, e[s] - i[s])
    }
    function ss(t) {
        let {top: e, left: i} = E(t);
        const {ownerDocument: {body: s, documentElement: n}, offsetParent: o} = W(t);
        let r = o || n;
        for (; r && (r === s || r === n) && h(r, "position") === "static"; )
            r = r.parentNode;
        if (ke(r)) {
            const a = E(r);
            e -= a.top + k(h(r, "borderTopWidth")),
            i -= a.left + k(h(r, "borderLeftWidth"))
        }
        return {
            top: e - k(h(t, "marginTop")),
            left: i - k(h(t, "marginLeft"))
        }
    }
    function Be(t) {
        t = W(t);
        const e = [t.offsetTop, t.offsetLeft];
        for (; t = t.offsetParent; )
            if (e[0] += t.offsetTop + k(h(t, "borderTopWidth")),
            e[1] += t.offsetLeft + k(h(t, "borderLeftWidth")),
            h(t, "position") === "fixed") {
                const i = Mt(t);
                return e[0] += i.scrollY,
                e[1] += i.scrollX,
                e
            }
        return e
    }
    const et = en("height")
      , pi = en("width");
    function en(t) {
        const e = kt(t);
        return (i, s) => {
            if (X(s)) {
                if (Qe(i))
                    return i[`inner${e}`];
                if (ye(i)) {
                    const n = i.documentElement;
                    return Math.max(n[`offset${e}`], n[`scroll${e}`])
                }
                return i = W(i),
                s = h(i, t),
                s = s === "auto" ? i[`offset${e}`] : k(s) || 0,
                s - le(i, t)
            } else
                return h(i, t, !s && s !== 0 ? "" : +s + le(i, t) + "px")
        }
    }
    function le(t, e, i="border-box") {
        return h(t, "boxSizing") === i ? Nt(Wt[e].map(kt), s => k(h(t, `padding${s}`)) + k(h(t, `border${s}Width`))) : 0
    }
    function gi(t) {
        for (const e in Wt)
            for (const i in Wt[e])
                if (Wt[e][i] === t)
                    return Wt[e][1 - i];
        return t
    }
    function Y(t, e="width", i=window, s=!1) {
        return z(t) ? Nt(kr(t), n => {
            const o = Ir(n);
            return o ? Er(o === "vh" ? Tr() : o === "vw" ? pi(Mt(i)) : s ? i[`offset${kt(e)}`] : m(i)[e], n) : n
        }
        ) : k(t)
    }
    const yr = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g
      , kr = ct(t => t.toString().replace(/\s/g, "").match(yr) || [])
      , Sr = /(?:v[hw]|%)$/
      , Ir = ct(t => (t.match(Sr) || [])[0]);
    function Er(t, e) {
        return t * k(e) / 100
    }
    let Ne, ce;
    function Tr() {
        return Ne || (ce || (ce = y("<div>"),
        h(ce, {
            height: "100vh",
            position: "fixed"
        }),
        $(window, "resize", () => Ne = null)),
        q(document.body, ce),
        Ne = ce.clientHeight,
        ot(ce),
        Ne)
    }
    const At = {
        read: Cr,
        write: Pr,
        clear: _r,
        flush: sn
    }
      , mi = []
      , vi = [];
    function Cr(t) {
        return mi.push(t),
        os(),
        t
    }
    function Pr(t) {
        return vi.push(t),
        os(),
        t
    }
    function _r(t) {
        on(mi, t),
        on(vi, t)
    }
    let ns = !1;
    function sn() {
        nn(mi),
        nn(vi.splice(0)),
        ns = !1,
        (mi.length || vi.length) && os()
    }
    function os() {
        ns || (ns = !0,
        queueMicrotask(sn))
    }
    function nn(t) {
        let e;
        for (; e = t.shift(); )
            try {
                e()
            } catch (i) {
                console.error(i)
            }
    }
    function on(t, e) {
        const i = t.indexOf(e);
        return ~i && t.splice(i, 1)
    }
    class rn {
        init() {
            this.positions = [];
            let e;
            this.unbind = $(document, "mousemove", i => e = yt(i)),
            this.interval = setInterval( () => {
                e && (this.positions.push(e),
                this.positions.length > 5 && this.positions.shift())
            }
            , 50)
        }
        cancel() {
            var e;
            (e = this.unbind) == null || e.call(this),
            clearInterval(this.interval)
        }
        movesTo(e) {
            if (!this.positions || this.positions.length < 2)
                return !1;
            const i = m(e)
              , {left: s, right: n, top: o, bottom: r} = i
              , [a] = this.positions
              , l = Bt(this.positions)
              , c = [a, l];
            return ii(l, i) ? !1 : [[{
                x: s,
                y: o
            }, {
                x: n,
                y: r
            }], [{
                x: s,
                y: r
            }, {
                x: n,
                y: o
            }]].some(f => {
                const d = Ar(c, f);
                return d && ii(d, i)
            }
            )
        }
    }
    function Ar([{x: t, y: e},{x: i, y: s}], [{x: n, y: o},{x: r, y: a}]) {
        const l = (a - o) * (i - t) - (r - n) * (s - e);
        if (l === 0)
            return !1;
        const c = ((r - n) * (e - o) - (a - o) * (t - n)) / l;
        return c < 0 ? !1 : {
            x: t + c * (i - t),
            y: e + c * (s - e)
        }
    }
    function an(t, e, i={}, {intersecting: s=!0}={}) {
        const n = new IntersectionObserver(s ? (o, r) => {
            o.some(a => a.isIntersecting) && e(o, r)
        }
        : e,i);
        for (const o of T(t))
            n.observe(o);
        return n
    }
    const Or = Ft && window.ResizeObserver;
    function ze(t, e, i={
        box: "border-box"
    }) {
        if (Or)
            return ln(ResizeObserver, t, e, i);
        const s = [$(window, "load resize", e), $(document, "loadedmetadata load", e, !0)];
        return {
            disconnect: () => s.map(n => n())
        }
    }
    function rs(t) {
        return {
            disconnect: $([window, window.visualViewport], "resize", t)
        }
    }
    function as(t, e, i) {
        return ln(MutationObserver, t, e, i)
    }
    function ln(t, e, i, s) {
        const n = new t(i);
        for (const o of T(e))
            n.observe(o, s);
        return n
    }
    function ls(t) {
        xi(t) && cs(t, {
            func: "playVideo",
            method: "play"
        }),
        wi(t) && t.play().catch(A)
    }
    function bi(t) {
        xi(t) && cs(t, {
            func: "pauseVideo",
            method: "pause"
        }),
        wi(t) && t.pause()
    }
    function cn(t) {
        xi(t) && cs(t, {
            func: "mute",
            method: "setVolume",
            value: 0
        }),
        wi(t) && (t.muted = !0)
    }
    function hn(t) {
        return wi(t) || xi(t)
    }
    function wi(t) {
        return H(t, "video")
    }
    function xi(t) {
        return H(t, "iframe") && (un(t) || fn(t))
    }
    function un(t) {
        return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
    }
    function fn(t) {
        return !!t.src.match(/vimeo\.com\/video\/.*/)
    }
    async function cs(t, e) {
        await Mr(t),
        dn(t, e)
    }
    function dn(t, e) {
        t.contentWindow.postMessage(JSON.stringify({
            event: "command",
            ...e
        }), "*")
    }
    const hs = "_ukPlayer";
    let Dr = 0;
    function Mr(t) {
        if (t[hs])
            return t[hs];
        const e = un(t)
          , i = fn(t)
          , s = ++Dr;
        let n;
        return t[hs] = new Promise(o => {
            e && F(t, "load", () => {
                const r = () => dn(t, {
                    event: "listening",
                    id: s
                });
                n = setInterval(r, 100),
                r()
            }
            ),
            F(window, "message", o, !1, ({data: r}) => {
                try {
                    return r = JSON.parse(r),
                    e && (r == null ? void 0 : r.id) === s && r.event === "onReady" || i && Number(r == null ? void 0 : r.player_id) === s
                } catch {}
            }
            ),
            t.src = `${t.src}${v(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${s}`}`
        }
        ).then( () => clearInterval(n))
    }
    function Br(t, e=0, i=0) {
        return R(t) ? ei(...Rt(t).map(s => {
            const {top: n, left: o, bottom: r, right: a} = rt(s);
            return {
                top: n - e,
                left: o - i,
                bottom: r + e,
                right: a + i
            }
        }
        ).concat(E(t))) : !1
    }
    function pn(t, {offset: e=0}={}) {
        const i = R(t) ? jt(t, !1, ["hidden"]) : [];
        return i.reduce( (r, a, l) => {
            const {scrollTop: c, scrollHeight: u, offsetHeight: f} = a
              , d = rt(a)
              , p = u - d.height
              , {height: w, top: I} = i[l - 1] ? rt(i[l - 1]) : E(t);
            let P = Math.ceil(I - d.top - e + c);
            return e > 0 && f < w + e ? P += e : e = 0,
            P > p ? (e -= P - p,
            P = p) : P < 0 && (e -= P,
            P = 0),
            () => s(a, P - c, t, p).then(r)
        }
        , () => Promise.resolve())();
        function s(r, a, l, c) {
            return new Promise(u => {
                const f = r.scrollTop
                  , d = n(Math.abs(a))
                  , p = Date.now()
                  , w = ds(r) === r
                  , I = E(l).top + (w ? 0 : f);
                let P = 0
                  , vt = 15;
                (function ve() {
                    const be = o(Q((Date.now() - p) / d));
                    let bt = 0;
                    i[0] === r && f + a < c && (bt = E(l).top + (w ? 0 : r.scrollTop) - I - m(us(l)).height),
                    r.scrollTop = f + (a + bt) * be,
                    be === 1 && (P === bt || !vt--) ? u() : (P = bt,
                    requestAnimationFrame(ve))
                }
                )()
            }
            )
        }
        function n(r) {
            return 40 * Math.pow(r, .375)
        }
        function o(r) {
            return .5 * (1 - Math.cos(Math.PI * r))
        }
    }
    function $i(t, e=0, i=0) {
        if (!R(t))
            return 0;
        const s = Ot(t, !0)
          , {scrollHeight: n, scrollTop: o} = s
          , {height: r} = rt(s)
          , a = n - r
          , l = Be(t)[0] - Be(s)[0]
          , c = Math.max(0, l - r + e)
          , u = Math.min(a, l + t.offsetHeight - i);
        return c < u ? Q((o - c) / (u - c)) : 1
    }
    function jt(t, e=!1, i=[]) {
        const s = ds(t);
        let n = _e(t).reverse();
        n = n.slice(n.indexOf(s) + 1);
        const o = wt(n, r => h(r, "position") === "fixed");
        return ~o && (n = n.slice(o)),
        [s].concat(n.filter(r => h(r, "overflow").split(" ").some(a => v(["auto", "scroll", ...i], a)) && (!e || r.scrollHeight > rt(r).height))).reverse()
    }
    function Ot(...t) {
        return jt(...t)[0]
    }
    function Rt(t) {
        return jt(t, !1, ["hidden", "clip"])
    }
    function rt(t) {
        const e = Mt(t)
          , i = ds(t)
          , s = t.contains(i);
        if (s && e.visualViewport) {
            let {height: l, width: c, scale: u, pageTop: f, pageLeft: d} = e.visualViewport;
            return l = Math.round(l * u),
            c = Math.round(c * u),
            {
                height: l,
                width: c,
                top: f,
                left: d,
                bottom: f + l,
                right: d + c
            }
        }
        let n = E(s ? e : t);
        if (h(t, "display") === "inline")
            return n;
        const {body: o, documentElement: r} = e.document
          , a = s ? i === r || i.clientHeight < o.clientHeight ? i : o : t;
        for (let[l,c,u,f] of [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]]) {
            const d = n[l] % 1;
            n[u] += k(h(a, `border-${u}-width`)),
            n[l] = n[c] = a[`client${kt(l)}`] - (d ? d < .5 ? -d : 1 - d : 0),
            n[f] = n[l] + n[u]
        }
        return n
    }
    function us(t) {
        const {left: e, width: i, top: s} = m(t);
        for (const n of s ? [0, s] : [0]) {
            let o;
            for (const r of Mt(t).document.elementsFromPoint(e + i / 2, n))
                !r.contains(t) && !x(r, "bdt-togglable-leave") && (fs(r, "fixed") && gn(_e(t).reverse().find(a => !a.contains(r) && !fs(a, "static"))) < gn(r) || fs(r, "sticky") && D(r).contains(t)) && (!o || m(o).height < m(r).height) && (o = r);
            if (o)
                return o
        }
    }
    function gn(t) {
        return k(h(t, "zIndex"))
    }
    function fs(t, e) {
        return h(t, "position") === e
    }
    function ds(t) {
        return Mt(t).document.scrollingElement
    }
    const at = [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]];
    function mn(t, e, i) {
        i = {
            attach: {
                element: ["left", "top"],
                target: ["left", "top"],
                ...i.attach
            },
            offset: [0, 0],
            placement: [],
            ...i
        },
        G(e) || (e = [e, e]),
        E(t, vn(t, e, i))
    }
    function vn(t, e, i) {
        const s = bn(t, e, i)
          , {boundary: n, viewportOffset: o=0, placement: r} = i;
        let a = s;
        for (const [l,[c,,u,f]] of Object.entries(at)) {
            const d = Nr(t, e[l], o, n, l);
            if (yi(s, d, l))
                continue;
            let p = 0;
            if (r[l] === "flip") {
                const w = i.attach.target[l];
                if (w === f && s[f] <= d[f] || w === u && s[u] >= d[u])
                    continue;
                p = Fr(t, e, i, l)[u] - s[u];
                const I = zr(t, e[l], o, l);
                if (!yi(ps(s, p, l), I, l)) {
                    if (yi(s, I, l))
                        continue;
                    if (i.recursion)
                        return !1;
                    const P = Hr(t, e, i);
                    if (P && yi(P, I, 1 - l))
                        return P;
                    continue
                }
            } else if (r[l] === "shift") {
                const w = E(e[l])
                  , {offset: I} = i;
                p = Q(Q(s[u], d[u], d[f] - s[c]), w[u] - s[c] + I[l], w[f] - I[l]) - s[u]
            }
            a = ps(a, p, l)
        }
        return a
    }
    function bn(t, e, i) {
        let {attach: s, offset: n} = {
            attach: {
                element: ["left", "top"],
                target: ["left", "top"],
                ...i.attach
            },
            offset: [0, 0],
            ...i
        }
          , o = E(t);
        for (const [r,[a,,l,c]] of Object.entries(at)) {
            const u = s.target[r] === s.element[r] ? rt(e[r]) : E(e[r]);
            o = ps(o, u[l] - o[l] + wn(s.target[r], c, u[a]) - wn(s.element[r], c, o[a]) + +n[r], r)
        }
        return o
    }
    function ps(t, e, i) {
        const [,s,n,o] = at[i]
          , r = {
            ...t
        };
        return r[n] = t[s] = t[n] + e,
        r[o] += e,
        r
    }
    function wn(t, e, i) {
        return t === "center" ? i / 2 : t === e ? i : 0
    }
    function Nr(t, e, i, s, n) {
        let o = $n(...xn(t, e).map(rt));
        return i && (o[at[n][2]] += i,
        o[at[n][3]] -= i),
        s && (o = $n(o, E(G(s) ? s[n] : s))),
        o
    }
    function zr(t, e, i, s) {
        const [n,o,r,a] = at[s]
          , [l] = xn(t, e)
          , c = rt(l);
        return ["auto", "scroll"].includes(h(l, `overflow-${o}`)) && (c[r] -= l[`scroll${kt(r)}`],
        c[a] = c[r] + l[`scroll${kt(n)}`]),
        c[r] += i,
        c[a] -= i,
        c
    }
    function xn(t, e) {
        return Rt(e).filter(i => i.contains(t))
    }
    function $n(...t) {
        let e = {};
        for (const i of t)
            for (const [,,s,n] of at)
                e[s] = Math.max(e[s] || 0, i[s]),
                e[n] = Math.min(...[e[n], i[n]].filter(Boolean));
        return e
    }
    function yi(t, e, i) {
        const [,,s,n] = at[i];
        return t[s] >= e[s] && t[n] <= e[n]
    }
    function Fr(t, e, {offset: i, attach: s}, n) {
        return bn(t, e, {
            attach: {
                element: yn(s.element, n),
                target: yn(s.target, n)
            },
            offset: Lr(i, n)
        })
    }
    function Hr(t, e, i) {
        return vn(t, e, {
            ...i,
            attach: {
                element: i.attach.element.map(kn).reverse(),
                target: i.attach.target.map(kn).reverse()
            },
            offset: i.offset.reverse(),
            placement: i.placement.reverse(),
            recursion: !0
        })
    }
    function yn(t, e) {
        const i = [...t]
          , s = at[e].indexOf(t[e]);
        return ~s && (i[e] = at[e][1 - s % 2 + 2]),
        i
    }
    function kn(t) {
        for (let e = 0; e < at.length; e++) {
            const i = at[e].indexOf(t);
            if (~i)
                return at[1 - e][i % 2 + 2]
        }
    }
    function Lr(t, e) {
        return t = [...t],
        t[e] *= -1,
        t
    }
    var Wr = Object.freeze({
        __proto__: null,
        $: y,
        $$: N,
        Animation: Ct,
        Dimensions: Ui,
        MouseTracker: rn,
        Transition: B,
        addClass: S,
        after: ui,
        append: q,
        apply: _t,
        assign: ft,
        attr: g,
        before: hi,
        boxModelAdjust: le,
        camelize: $e,
        children: M,
        clamp: Q,
        createEvent: ae,
        css: h,
        data: J,
        dimensions: m,
        each: ie,
        empty: Qs,
        endsWith: Qt,
        escape: Ji,
        fastdom: At,
        filter: Pe,
        find: Gi,
        findAll: Oe,
        findIndex: wt,
        flipPosition: gi,
        fragment: Lt,
        getCoveringElement: us,
        getEventPos: yt,
        getIndex: nt,
        getTargetedElement: Yi,
        hasAttr: It,
        hasClass: x,
        hasOwn: pt,
        hasTouch: se,
        height: et,
        html: Pt,
        hyphenate: Dt,
        inBrowser: Ft,
        includes: v,
        index: $t,
        intersectRect: ei,
        isArray: G,
        isBoolean: ee,
        isDocument: ye,
        isElement: ke,
        isEmpty: ti,
        isEqual: Ie,
        isFocusable: ai,
        isFunction: tt,
        isInView: Br,
        isInput: ri,
        isNode: Ze,
        isNumber: Se,
        isNumeric: mt,
        isObject: St,
        isPlainObject: te,
        isRtl: U,
        isSameSiteAnchor: re,
        isString: z,
        isTag: H,
        isTouch: dt,
        isUndefined: X,
        isVideo: hn,
        isVisible: R,
        isVoidElement: Vi,
        isWindow: Qe,
        last: Bt,
        matches: C,
        memoize: ct,
        mute: cn,
        noop: A,
        observeIntersection: an,
        observeMutation: as,
        observeResize: ze,
        observeViewportResize: rs,
        off: Tt,
        offset: E,
        offsetPosition: Be,
        offsetViewport: rt,
        on: $,
        once: F,
        overflowParents: Rt,
        parent: D,
        parents: _e,
        pause: bi,
        pick: Ri,
        play: ls,
        pointInRect: ii,
        pointerCancel: oi,
        pointerDown: ht,
        pointerEnter: Ht,
        pointerLeave: oe,
        pointerMove: ni,
        pointerUp: Et,
        position: ss,
        positionAt: mn,
        prepend: xr,
        propName: li,
        query: Z,
        queryAll: Ae,
        ready: wr,
        remove: ot,
        removeAttr: Ee,
        removeClass: _,
        replaceClass: si,
        scrollIntoView: pn,
        scrollParent: Ot,
        scrollParents: jt,
        scrolledOver: $i,
        selFocusable: Ce,
        selInput: Te,
        sortBy: js,
        startsWith: gt,
        sumBy: Nt,
        swap: ji,
        toArray: Zt,
        toBoolean: Wi,
        toEventTargets: Qi,
        toFloat: k,
        toNode: W,
        toNodes: T,
        toNumber: xt,
        toPx: Y,
        toWindow: Mt,
        toggleClass: j,
        trigger: b,
        ucfirst: kt,
        uniqueBy: Rs,
        unwrap: Me,
        width: pi,
        wrapAll: di,
        wrapInner: is
    })
      , it = {
        connected() {
            S(this.$el, this.$options.id)
        }
    };
    const jr = ["days", "hours", "minutes", "seconds"];
    var Rr = {
        mixins: [it],
        props: {
            date: String,
            clsWrapper: String,
            role: String
        },
        data: {
            date: "",
            clsWrapper: ".bdt-countdown-%unit%",
            role: "timer"
        },
        connected() {
            g(this.$el, "role", this.role),
            this.date = k(Date.parse(this.$props.date)),
            this.end = !1,
            this.start()
        },
        disconnected() {
            this.stop()
        },
        events: {
            name: "visibilitychange",
            el: () => document,
            handler() {
                document.hidden ? this.stop() : this.start()
            }
        },
        methods: {
            start() {
                this.stop(),
                this.update(),
                this.timer || (b(this.$el, "countdownstart"),
                this.timer = setInterval(this.update, 1e3))
            },
            stop() {
                this.timer && (clearInterval(this.timer),
                b(this.$el, "countdownstop"),
                this.timer = null)
            },
            update() {
                const t = qr(this.date);
                t.total || (this.stop(),
                this.end || (b(this.$el, "countdownend"),
                this.end = !0));
                for (const e of jr) {
                    const i = y(this.clsWrapper.replace("%unit%", e), this.$el);
                    if (!i)
                        continue;
                    let s = Math.trunc(t[e]).toString().padStart(2, "0");
                    i.textContent !== s && (s = s.split(""),
                    s.length !== i.children.length && Pt(i, s.map( () => "<span></span>").join("")),
                    s.forEach( (n, o) => i.children[o].textContent = n))
                }
            }
        }
    };
    function qr(t) {
        const e = Math.max(0, t - Date.now()) / 1e3;
        return {
            total: e,
            seconds: e % 60,
            minutes: e / 60 % 60,
            hours: e / 60 / 60 % 24,
            days: e / 60 / 60 / 24
        }
    }
    const V = {};
    V.events = V.watch = V.observe = V.created = V.beforeConnect = V.connected = V.beforeDisconnect = V.disconnected = V.destroy = gs,
    V.args = function(t, e) {
        return e !== !1 && gs(e || t)
    }
    ,
    V.update = function(t, e) {
        return js(gs(t, tt(e) ? {
            read: e
        } : e), "order")
    }
    ,
    V.props = function(t, e) {
        if (G(e)) {
            const i = {};
            for (const s of e)
                i[s] = String;
            e = i
        }
        return V.methods(t, e)
    }
    ,
    V.computed = V.methods = function(t, e) {
        return e ? t ? {
            ...t,
            ...e
        } : e : t
    }
    ,
    V.i18n = V.data = function(t, e, i) {
        return i ? Sn(t, e, i) : e ? t ? function(s) {
            return Sn(t, e, s)
        }
        : e : t
    }
    ;
    function Sn(t, e, i) {
        return V.computed(tt(t) ? t.call(i, i) : t, tt(e) ? e.call(i, i) : e)
    }
    function gs(t, e) {
        return t = t && !G(t) ? [t] : t,
        e ? t ? t.concat(e) : G(e) ? e : [e] : t
    }
    function Ur(t, e) {
        return X(e) ? t : e
    }
    function Fe(t, e, i) {
        const s = {};
        if (tt(e) && (e = e.options),
        e.extends && (t = Fe(t, e.extends, i)),
        e.mixins)
            for (const o of e.mixins)
                t = Fe(t, o, i);
        for (const o in t)
            n(o);
        for (const o in e)
            pt(t, o) || n(o);
        function n(o) {
            s[o] = (V[o] || Ur)(t[o], e[o], i)
        }
        return s
    }
    function he(t, e=[]) {
        try {
            return t ? gt(t, "{") ? JSON.parse(t) : e.length && !v(t, ":") ? {
                [e[0]]: t
            } : t.split(";").reduce( (i, s) => {
                const [n,o] = s.split(/:(.*)/);
                return n && !X(o) && (i[n.trim()] = o.trim()),
                i
            }
            , {}) : {}
        } catch {
            return {}
        }
    }
    function ms(t, e) {
        return t === Boolean ? Wi(e) : t === Number ? xt(e) : t === "list" ? Yr(e) : t === Object && z(e) ? he(e) : t ? t(e) : e
    }
    const Vr = /,(?![^(]*\))/;
    function Yr(t) {
        return G(t) ? t : z(t) ? t.split(Vr).map(e => mt(e) ? xt(e) : Wi(e.trim())) : [t]
    }
    function Gr(t) {
        t._data = {},
        t._updates = [...t.$options.update || []]
    }
    function Xr(t, e) {
        t._updates.unshift(e)
    }
    function Jr(t) {
        t._data = null
    }
    function He(t, e="update") {
        t._connected && t._updates.length && (t._queued || (t._queued = new Set,
        At.read( () => {
            t._connected && Kr(t, t._queued),
            t._queued = null
        }
        )),
        t._queued.add(e.type || e))
    }
    function Kr(t, e) {
        for (const {read: i, write: s, events: n=[]} of t._updates) {
            if (!e.has("update") && !n.some(r => e.has(r)))
                continue;
            let o;
            i && (o = i.call(t, t._data, e),
            o && te(o) && ft(t._data, o)),
            s && o !== !1 && At.write( () => {
                t._connected && s.call(t, t._data, e)
            }
            )
        }
    }
    function ut(t) {
        return We(ze, t, "resize")
    }
    function ue(t) {
        return We(an, t)
    }
    function ki(t) {
        return We(as, t)
    }
    function Si(t={}) {
        return ue({
            handler: function(e, i) {
                const {targets: s=this.$el, preload: n=5} = t;
                for (const o of T(tt(s) ? s(this) : s))
                    N('[loading="lazy"]', o).slice(0, n - 1).forEach(r => Ee(r, "loading"));
                for (const o of e.filter( ({isIntersecting: r}) => r).map( ({target: r}) => r))
                    i.unobserve(o)
            },
            ...t
        })
    }
    function vs(t) {
        return We( (e, i) => rs(i), t, "resize")
    }
    function Le(t) {
        return We( (e, i) => ({
            disconnect: $(Zr(e), "scroll", i, {
                passive: !0
            })
        }), t, "scroll")
    }
    function In(t) {
        return {
            observe(e, i) {
                return {
                    observe: A,
                    unobserve: A,
                    disconnect: $(e, ht, i, {
                        passive: !0
                    })
                }
            },
            handler(e) {
                if (!dt(e))
                    return;
                const i = yt(e)
                  , s = "tagName"in e.target ? e.target : D(e.target);
                F(document, `${Et} ${oi} scroll`, n => {
                    const {x: o, y: r} = yt(n);
                    (n.type !== "scroll" && s && o && Math.abs(i.x - o) > 100 || r && Math.abs(i.y - r) > 100) && setTimeout( () => {
                        b(s, "swipe"),
                        b(s, `swipe${Qr(i.x, i.y, o, r)}`)
                    }
                    )
                }
                )
            },
            ...t
        }
    }
    function We(t, e, i) {
        return {
            observe: t,
            handler() {
                He(this, i)
            },
            ...e
        }
    }
    function Qr(t, e, i, s) {
        return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down"
    }
    function Zr(t) {
        return T(t).map(e => {
            const {ownerDocument: i} = e
              , s = Ot(e, !0);
            return s === i.scrollingElement ? i : s
        }
        )
    }
    var En = {
        props: {
            margin: String,
            firstColumn: Boolean
        },
        data: {
            margin: "bdt-margin-small-top",
            firstColumn: "bdt-first-column"
        },
        observe: [ki({
            options: {
                childList: !0
            }
        }), ki({
            options: {
                attributes: !0,
                attributeFilter: ["style"]
            },
            target: ({$el: t}) => [t, ...M(t)]
        }), ut({
            target: ({$el: t}) => [t, ...M(t)]
        })],
        update: {
            read() {
                return {
                    rows: bs(M(this.$el))
                }
            },
            write({rows: t}) {
                for (const e of t)
                    for (const i of e)
                        j(i, this.margin, t[0] !== e),
                        j(i, this.firstColumn, e[U ? e.length - 1 : 0] === i)
            },
            events: ["resize"]
        }
    };
    function bs(t) {
        const e = [[]]
          , i = t.some( (s, n) => n && t[n - 1].offsetParent !== s.offsetParent);
        for (const s of t) {
            if (!R(s))
                continue;
            const n = ws(s, i);
            for (let o = e.length - 1; o >= 0; o--) {
                const r = e[o];
                if (!r[0]) {
                    r.push(s);
                    break
                }
                const a = ws(r[0], i);
                if (n.top >= a.bottom - 1 && n.top !== a.top) {
                    e.push([s]);
                    break
                }
                if (n.bottom - 1 > a.top || n.top === a.top) {
                    let l = r.length - 1;
                    for (; l >= 0; l--) {
                        const c = ws(r[l], i);
                        if (n.left >= c.left)
                            break
                    }
                    r.splice(l + 1, 0, s);
                    break
                }
                if (o === 0) {
                    e.unshift([s]);
                    break
                }
            }
        }
        return e
    }
    function ws(t, e=!1) {
        let {offsetTop: i, offsetLeft: s, offsetHeight: n, offsetWidth: o} = t;
        return e && ([i,s] = Be(t)),
        {
            top: i,
            left: s,
            bottom: i + n,
            right: s + o
        }
    }
    async function ta(t, e, i) {
        await xs();
        let s = M(e);
        const n = s.map(p => Tn(p, !0))
          , o = {
            ...h(e, ["height", "padding"]),
            display: "block"
        }
          , r = s.concat(e);
        await Promise.all(r.map(B.cancel)),
        h(r, "transitionProperty", "none"),
        await t(),
        s = s.concat(M(e).filter(p => !v(s, p))),
        await Promise.resolve(),
        h(r, "transitionProperty", "");
        const a = g(e, "style")
          , l = h(e, ["height", "padding"])
          , [c,u] = ea(e, s, n)
          , f = s.map(p => ({
            style: g(p, "style")
        }));
        s.forEach( (p, w) => u[w] && h(p, u[w])),
        h(e, o),
        b(e, "scroll"),
        await xs();
        const d = s.map( (p, w) => D(p) === e && B.start(p, c[w], i, "ease")).concat(B.start(e, l, i, "ease"));
        try {
            await Promise.all(d),
            s.forEach( (p, w) => {
                g(p, f[w]),
                D(p) === e && h(p, "display", c[w].opacity === 0 ? "none" : "")
            }
            ),
            g(e, "style", a)
        } catch {
            g(s, "style", ""),
            ia(e, o)
        }
    }
    function Tn(t, e) {
        const i = h(t, "zIndex");
        return R(t) ? {
            display: "",
            opacity: e ? h(t, "opacity") : "0",
            pointerEvents: "none",
            position: "absolute",
            zIndex: i === "auto" ? $t(t) : i,
            ...Cn(t)
        } : !1
    }
    function ea(t, e, i) {
        const s = e.map( (o, r) => D(o) && r in i ? i[r] ? R(o) ? Cn(o) : {
            opacity: 0
        } : {
            opacity: R(o) ? 1 : 0
        } : !1)
          , n = s.map( (o, r) => {
            const a = D(e[r]) === t && (i[r] || Tn(e[r]));
            if (!a)
                return !1;
            if (!o)
                delete a.opacity;
            else if (!("opacity"in o)) {
                const {opacity: l} = a;
                l % 1 ? o.opacity = 1 : delete a.opacity
            }
            return a
        }
        );
        return [s, n]
    }
    function ia(t, e) {
        for (const i in e)
            h(t, i, "")
    }
    function Cn(t) {
        const {height: e, width: i} = m(t);
        return {
            height: e,
            width: i,
            transform: "",
            ...ss(t),
            ...h(t, ["marginTop", "marginLeft"])
        }
    }
    function xs() {
        return new Promise(t => requestAnimationFrame(t))
    }
    const $s = "bdt-transition-leave"
      , ys = "bdt-transition-enter";
    function Pn(t, e, i, s=0) {
        const n = Ii(e, !0)
          , o = {
            opacity: 1
        }
          , r = {
            opacity: 0
        }
          , a = u => () => n === Ii(e) ? u() : Promise.reject()
          , l = a(async () => {
            S(e, $s),
            await Promise.all(An(e).map( (u, f) => new Promise(d => setTimeout( () => B.start(u, r, i / 2, "ease").then(d), f * s)))),
            _(e, $s)
        }
        )
          , c = a(async () => {
            const u = et(e);
            S(e, ys),
            t(),
            h(M(e), {
                opacity: 0
            }),
            await xs();
            const f = M(e)
              , d = et(e);
            h(e, "alignContent", "flex-start"),
            et(e, u);
            const p = An(e);
            h(f, r);
            const w = p.map(async (I, P) => {
                await sa(P * s),
                await B.start(I, o, i / 2, "ease")
            }
            );
            u !== d && w.push(B.start(e, {
                height: d
            }, i / 2 + p.length * s, "ease")),
            await Promise.all(w).then( () => {
                _(e, ys),
                n === Ii(e) && (h(e, {
                    height: "",
                    alignContent: ""
                }),
                h(f, {
                    opacity: ""
                }),
                delete e.dataset.transition)
            }
            )
        }
        );
        return x(e, $s) ? _n(e).then(c) : x(e, ys) ? _n(e).then(l).then(c) : l().then(c)
    }
    function Ii(t, e) {
        return e && (t.dataset.transition = 1 + Ii(t)),
        xt(t.dataset.transition) || 0
    }
    function _n(t) {
        return Promise.all(M(t).filter(B.inProgress).map(e => new Promise(i => F(e, "transitionend transitioncanceled", i))))
    }
    function An(t) {
        return bs(M(t)).flat().filter(R)
    }
    function sa(t) {
        return new Promise(e => setTimeout(e, t))
    }
    var On = {
        props: {
            duration: Number,
            animation: Boolean
        },
        data: {
            duration: 150,
            animation: "slide"
        },
        methods: {
            animate(t, e=this.$el) {
                const i = this.animation;
                return (i === "fade" ? Pn : i === "delayed-fade" ? (...n) => Pn(...n, 40) : i ? ta : () => (t(),
                Promise.resolve()))(t, e, this.duration).catch(A)
            }
        }
    };
    const O = {
        TAB: 9,
        ESC: 27,
        SPACE: 32,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };
    var na = {
        mixins: [On],
        args: "target",
        props: {
            target: String,
            selActive: Boolean
        },
        data: {
            target: "",
            selActive: !1,
            attrItem: "bdt-filter-control",
            cls: "bdt-active",
            duration: 250
        },
        computed: {
            children: ({target: t}, e) => N(`${t} > *`, e),
            toggles: ({attrItem: t}, e) => N(`[${t}],[data-${t}]`, e)
        },
        watch: {
            toggles(t) {
                this.updateState();
                const e = N(this.selActive, this.$el);
                for (const i of t) {
                    this.selActive !== !1 && j(i, this.cls, v(e, i));
                    const s = ca(i);
                    H(s, "a") && g(s, "role", "button")
                }
            },
            children(t, e) {
                e && this.updateState()
            }
        },
        events: {
            name: "click keydown",
            delegate: ({attrItem: t}) => `[${t}],[data-${t}]`,
            handler(t) {
                t.type === "keydown" && t.keyCode !== O.SPACE || t.target.closest("a,button") && (t.preventDefault(),
                this.apply(t.current))
            }
        },
        methods: {
            apply(t) {
                const e = this.getState()
                  , i = Mn(t, this.attrItem, this.getState());
                oa(e, i) || this.setState(i)
            },
            getState() {
                return this.toggles.filter(t => x(t, this.cls)).reduce( (t, e) => Mn(e, this.attrItem, t), {
                    filter: {
                        "": ""
                    },
                    sort: []
                })
            },
            async setState(t, e=!0) {
                t = {
                    filter: {
                        "": ""
                    },
                    sort: [],
                    ...t
                },
                b(this.$el, "beforeFilter", [this, t]);
                for (const i of this.toggles)
                    j(i, this.cls, aa(i, this.attrItem, t));
                await Promise.all(N(this.target, this.$el).map(i => {
                    const s = () => ra(t, i, M(i));
                    return e ? this.animate(s, i) : s()
                }
                )),
                b(this.$el, "afterFilter", [this])
            },
            updateState() {
                At.write( () => this.setState(this.getState(), !1))
            }
        }
    };
    function Dn(t, e) {
        return he(J(t, e), ["filter"])
    }
    function oa(t, e) {
        return ["filter", "sort"].every(i => Ie(t[i], e[i]))
    }
    function ra(t, e, i) {
        const s = Object.values(t.filter).join("");
        for (const r of i)
            h(r, "display", s && !C(r, s) ? "none" : "");
        const [n,o] = t.sort;
        if (n) {
            const r = la(i, n, o);
            Ie(r, i) || q(e, r)
        }
    }
    function Mn(t, e, i) {
        const {filter: s, group: n, sort: o, order: r="asc"} = Dn(t, e);
        return (s || X(o)) && (n ? s ? (delete i.filter[""],
        i.filter[n] = s) : (delete i.filter[n],
        (ti(i.filter) || ""in i.filter) && (i.filter = {
            "": s || ""
        })) : i.filter = {
            "": s || ""
        }),
        X(o) || (i.sort = [o, r]),
        i
    }
    function aa(t, e, {filter: i={
        "": ""
    }, sort: [s,n]}) {
        const {filter: o="", group: r="", sort: a, order: l="asc"} = Dn(t, e);
        return X(a) ? r in i && o === i[r] || !o && r && !(r in i) && !i[""] : s === a && n === l
    }
    function la(t, e, i) {
        return [...t].sort( (s, n) => J(s, e).localeCompare(J(n, e), void 0, {
            numeric: !0
        }) * (i === "asc" || -1))
    }
    function ca(t) {
        return y("a,button", t) || t
    }
    let ks;
    function Bn(t) {
        const e = $(t, "touchstart", s => {
            if (s.targetTouches.length !== 1 || C(s.target, 'input[type="range"'))
                return;
            let n = yt(s).y;
            const o = $(t, "touchmove", r => {
                const a = yt(r).y;
                a !== n && (n = a,
                jt(r.target).some(l => {
                    if (!t.contains(l))
                        return !1;
                    let {scrollHeight: c, clientHeight: u} = l;
                    return u < c
                }
                ) || r.preventDefault())
            }
            , {
                passive: !1
            });
            F(t, "scroll touchend touchcanel", o, {
                capture: !0
            })
        }
        , {
            passive: !0
        });
        if (ks)
            return e;
        ks = !0;
        const {scrollingElement: i} = document;
        return h(i, {
            overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
            touchAction: "none",
            paddingRight: pi(window) - i.clientWidth || ""
        }),
        () => {
            ks = !1,
            e(),
            h(i, {
                overflowY: "",
                touchAction: "",
                paddingRight: ""
            })
        }
    }
    var je = {
        props: {
            container: Boolean
        },
        data: {
            container: !0
        },
        computed: {
            container({container: t}) {
                return t === !0 && this.$container || t && y(t)
            }
        }
    }
      , qt = {
        props: {
            cls: Boolean,
            animation: "list",
            duration: Number,
            velocity: Number,
            origin: String,
            transition: String
        },
        data: {
            cls: !1,
            animation: [!1],
            duration: 200,
            velocity: .2,
            origin: !1,
            transition: "ease",
            clsEnter: "bdt-togglable-enter",
            clsLeave: "bdt-togglable-leave"
        },
        computed: {
            hasAnimation: ({animation: t}) => !!t[0],
            hasTransition: ({animation: t}) => ["slide", "reveal"].some(e => gt(t[0], e))
        },
        methods: {
            async toggleElement(t, e, i) {
                try {
                    return await Promise.all(T(t).map(s => {
                        const n = ee(e) ? e : !this.isToggled(s);
                        if (!b(s, `before${n ? "show" : "hide"}`, [this]))
                            return Promise.reject();
                        const o = (tt(i) ? i : i === !1 || !this.hasAnimation ? ha : this.hasTransition ? ua : fa)(s, n, this)
                          , r = n ? this.clsEnter : this.clsLeave;
                        S(s, r),
                        b(s, n ? "show" : "hide", [this]);
                        const a = () => {
                            _(s, r),
                            b(s, n ? "shown" : "hidden", [this])
                        }
                        ;
                        return o ? o.then(a, () => (_(s, r),
                        Promise.reject())) : a()
                    }
                    )),
                    !0
                } catch {
                    return !1
                }
            },
            isToggled(t=this.$el) {
                return t = W(t),
                x(t, this.clsEnter) ? !0 : x(t, this.clsLeave) ? !1 : this.cls ? x(t, this.cls.split(" ")[0]) : R(t)
            },
            _toggle(t, e) {
                if (!t)
                    return;
                e = !!e;
                let i;
                this.cls ? (i = v(this.cls, " ") || e !== x(t, this.cls),
                i && j(t, this.cls, v(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden,
                i && (t.hidden = !e)),
                N("[autofocus]", t).some(s => R(s) ? s.focus() || !0 : s.blur()),
                i && b(t, "toggled", [e, this])
            }
        }
    };
    function ha(t, e, {_toggle: i}) {
        return Ct.cancel(t),
        B.cancel(t),
        i(t, e)
    }
    async function ua(t, e, {animation: i, duration: s, velocity: n, transition: o, _toggle: r}) {
        var a;
        const [l="reveal",c="top"] = ((a = i[0]) == null ? void 0 : a.split("-")) || []
          , u = [["left", "right"], ["top", "bottom"]]
          , f = u[v(u[0], c) ? 0 : 1]
          , d = f[1] === c
          , w = ["width", "height"][u.indexOf(f)]
          , I = `margin-${f[0]}`
          , P = `margin-${c}`;
        let vt = m(t)[w];
        const ve = B.inProgress(t);
        await B.cancel(t),
        e && r(t, !0);
        const be = Object.fromEntries(["padding", "border", "width", "height", "minWidth", "minHeight", "overflowY", "overflowX", I, P].map(sr => [sr, t.style[sr]]))
          , bt = m(t)
          , Ws = k(h(t, I))
          , tr = k(h(t, P))
          , Kt = bt[w] + tr;
        !ve && !e && (vt += tr);
        const [Hi] = is(t, "<div>");
        h(Hi, {
            boxSizing: "border-box",
            height: bt.height,
            width: bt.width,
            ...h(t, ["overflow", "padding", "borderTop", "borderRight", "borderBottom", "borderLeft", "borderImage", P])
        }),
        h(t, {
            padding: 0,
            border: 0,
            minWidth: 0,
            minHeight: 0,
            [P]: 0,
            width: bt.width,
            height: bt.height,
            overflow: "hidden",
            [w]: vt
        });
        const er = vt / Kt;
        s = (n * Kt + s) * (e ? 1 - er : er);
        const ir = {
            [w]: e ? Kt : 0
        };
        d && (h(t, I, Kt - vt + Ws),
        ir[I] = e ? Ws : Kt + Ws),
        !d ^ l === "reveal" && (h(Hi, I, -Kt + vt),
        B.start(Hi, {
            [I]: e ? 0 : -Kt
        }, s, o));
        try {
            await B.start(t, ir, s, o)
        } finally {
            h(t, be),
            Me(Hi.firstChild),
            e || r(t, !1)
        }
    }
    function fa(t, e, i) {
        const {animation: s, duration: n, _toggle: o} = i;
        return e ? (o(t, !0),
        Ct.in(t, s[0], n, i.origin)) : Ct.out(t, s[1] || s[0], n, i.origin).then( () => o(t, !1))
    }
    const st = [];
    var Ss = {
        mixins: [it, je, qt],
        props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean,
            role: String
        },
        data: {
            cls: "bdt-open",
            escClose: !0,
            bgClose: !0,
            overlay: !0,
            stack: !1,
            role: "dialog"
        },
        computed: {
            panel: ({selPanel: t}, e) => y(t, e),
            transitionElement() {
                return this.panel
            },
            bgClose({bgClose: t}) {
                return t && this.panel
            }
        },
        connected() {
            g(this.panel || this.$el, "role", this.role),
            this.overlay && g(this.panel || this.$el, "aria-modal", !0)
        },
        beforeDisconnect() {
            v(st, this) && this.toggleElement(this.$el, !1, !1)
        },
        events: [{
            name: "click",
            delegate: ({selClose: t}) => `${t},a[href*="#"]`,
            handler(t) {
                const {current: e, defaultPrevented: i} = t
                  , {hash: s} = e;
                !i && s && re(e) && !this.$el.contains(y(s)) ? this.hide() : C(e, this.selClose) && (t.preventDefault(),
                this.hide())
            }
        }, {
            name: "toggle",
            self: !0,
            handler(t) {
                t.defaultPrevented || (t.preventDefault(),
                this.isToggled() === v(st, this) && this.toggle())
            }
        }, {
            name: "beforeshow",
            self: !0,
            handler(t) {
                if (v(st, this))
                    return !1;
                !this.stack && st.length ? (Promise.all(st.map(e => e.hide())).then(this.show),
                t.preventDefault()) : st.push(this)
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                this.stack && h(this.$el, "zIndex", k(h(this.$el, "zIndex")) + st.length);
                const t = [this.overlay && pa(this), this.overlay && Bn(this.$el), this.bgClose && ga(this), this.escClose && ma(this)];
                F(this.$el, "hidden", () => t.forEach(e => e && e()), {
                    self: !0
                }),
                S(document.documentElement, this.clsPage)
            }
        }, {
            name: "shown",
            self: !0,
            handler() {
                ai(this.$el) || g(this.$el, "tabindex", "-1"),
                C(this.$el, ":focus-within") || this.$el.focus()
            }
        }, {
            name: "hidden",
            self: !0,
            handler() {
                v(st, this) && st.splice(st.indexOf(this), 1),
                h(this.$el, "zIndex", ""),
                st.some(t => t.clsPage === this.clsPage) || _(document.documentElement, this.clsPage)
            }
        }],
        methods: {
            toggle() {
                return this.isToggled() ? this.hide() : this.show()
            },
            show() {
                return this.container && D(this.$el) !== this.container ? (q(this.container, this.$el),
                new Promise(t => requestAnimationFrame( () => this.show().then(t)))) : this.toggleElement(this.$el, !0, Nn)
            },
            hide() {
                return this.toggleElement(this.$el, !1, Nn)
            }
        }
    };
    function Nn(t, e, {transitionElement: i, _toggle: s}) {
        return new Promise( (n, o) => F(t, "show hide", () => {
            var r;
            (r = t._reject) == null || r.call(t),
            t._reject = o,
            s(t, e);
            const a = F(i, "transitionstart", () => {
                F(i, "transitionend transitioncancel", n, {
                    self: !0
                }),
                clearTimeout(l)
            }
            , {
                self: !0
            })
              , l = setTimeout( () => {
                a(),
                n()
            }
            , da(h(i, "transitionDuration")))
        }
        )).then( () => delete t._reject)
    }
    function da(t) {
        return t ? Qt(t, "ms") ? k(t) : k(t) * 1e3 : 0
    }
    function pa(t) {
        return $(document, "focusin", e => {
            Bt(st) === t && !t.$el.contains(e.target) && t.$el.focus()
        }
        )
    }
    function ga(t) {
        return $(document, ht, ({target: e}) => {
            Bt(st) !== t || t.overlay && !t.$el.contains(e) || t.panel.contains(e) || F(document, `${Et} ${oi} scroll`, ({defaultPrevented: i, type: s, target: n}) => {
                !i && s === Et && e === n && t.hide()
            }
            , !0)
        }
        )
    }
    function ma(t) {
        return $(document, "keydown", e => {
            e.keyCode === 27 && Bt(st) === t && t.hide()
        }
        )
    }
    var Is = {
        slide: {
            show(t) {
                return [{
                    transform: L(t * -100)
                }, {
                    transform: L()
                }]
            },
            percent(t) {
                return Re(t)
            },
            translate(t, e) {
                return [{
                    transform: L(e * -100 * t)
                }, {
                    transform: L(e * 100 * (1 - t))
                }]
            }
        }
    };
    function Re(t) {
        return Math.abs(new DOMMatrix(h(t, "transform")).m41 / t.offsetWidth)
    }
    function L(t=0, e="%") {
        return t += t ? e : "",
        `translate3d(${t}, 0, 0)`
    }
    function fe(t) {
        return `scale3d(${t}, ${t}, 1)`
    }
    function va(t, e, i, {animation: s, easing: n}) {
        const {percent: o, translate: r, show: a=A} = s
          , l = a(i)
          , {promise: c, resolve: u} = zn();
        return {
            dir: i,
            show(f, d=0, p) {
                const w = p ? "linear" : n;
                return f -= Math.round(f * Q(d, -1, 1)),
                this.translate(d),
                Ut(e, "itemin", {
                    percent: d,
                    duration: f,
                    timing: w,
                    dir: i
                }),
                Ut(t, "itemout", {
                    percent: 1 - d,
                    duration: f,
                    timing: w,
                    dir: i
                }),
                Promise.all([B.start(e, l[1], f, w), B.start(t, l[0], f, w)]).then( () => {
                    this.reset(),
                    u()
                }
                , A),
                c
            },
            cancel() {
                return B.cancel([e, t])
            },
            reset() {
                for (const f in l[0])
                    h([e, t], f, "")
            },
            async forward(f, d=this.percent()) {
                return await this.cancel(),
                this.show(f, d, !0)
            },
            translate(f) {
                this.reset();
                const d = r(f, i);
                h(e, d[1]),
                h(t, d[0]),
                Ut(e, "itemtranslatein", {
                    percent: f,
                    dir: i
                }),
                Ut(t, "itemtranslateout", {
                    percent: 1 - f,
                    dir: i
                })
            },
            percent() {
                return o(t || e, e, i)
            },
            getDistance() {
                return t == null ? void 0 : t.offsetWidth
            }
        }
    }
    function Ut(t, e, i) {
        b(t, ae(e, !1, !1, i))
    }
    function zn() {
        let t;
        return {
            promise: new Promise(e => t = e),
            resolve: t
        }
    }
    var Ei = {
        props: {
            i18n: Object
        },
        data: {
            i18n: null
        },
        methods: {
            t(t, ...e) {
                var i, s, n;
                let o = 0;
                return ((n = ((i = this.i18n) == null ? void 0 : i[t]) || ((s = this.$options.i18n) == null ? void 0 : s[t])) == null ? void 0 : n.replace(/%s/g, () => e[o++] || "")) || ""
            }
        }
    }
      , ba = {
        props: {
            autoplay: Boolean,
            autoplayInterval: Number,
            pauseOnHover: Boolean
        },
        data: {
            autoplay: !1,
            autoplayInterval: 7e3,
            pauseOnHover: !0
        },
        connected() {
            g(this.list, "aria-live", this.autoplay ? "off" : "polite"),
            this.autoplay && this.startAutoplay()
        },
        disconnected() {
            this.stopAutoplay()
        },
        update() {
            g(this.slides, "tabindex", "-1")
        },
        events: [{
            name: "visibilitychange",
            el: () => document,
            filter: ({autoplay: t}) => t,
            handler() {
                document.hidden ? this.stopAutoplay() : this.startAutoplay()
            }
        }],
        methods: {
            startAutoplay() {
                this.stopAutoplay(),
                this.interval = setInterval( () => {
                    this.stack.length || this.draggable && C(this.$el, ":focus-within") && !C(this.$el, ":focus") || this.pauseOnHover && C(this.$el, ":hover") || this.show("next")
                }
                , this.autoplayInterval)
            },
            stopAutoplay() {
                clearInterval(this.interval)
            }
        }
    };
    const qe = {
        passive: !1,
        capture: !0
    }
      , Fn = {
        passive: !0,
        capture: !0
    }
      , wa = "touchstart mousedown"
      , Es = "touchmove mousemove"
      , Hn = "touchend touchcancel mouseup click input scroll"
      , Ln = t => t.preventDefault();
    var xa = {
        props: {
            draggable: Boolean
        },
        data: {
            draggable: !0,
            threshold: 10
        },
        created() {
            for (const t of ["start", "move", "end"]) {
                const e = this[t];
                this[t] = i => {
                    const s = yt(i).x * (U ? -1 : 1);
                    this.prevPos = s === this.pos ? this.prevPos : this.pos,
                    this.pos = s,
                    e(i)
                }
            }
        },
        events: [{
            name: wa,
            passive: !0,
            delegate: ({selList: t}) => `${t} > *`,
            handler(t) {
                !this.draggable || this.parallax || !dt(t) && $a(t.target) || t.target.closest(Te) || t.button > 0 || this.length < 2 || this.start(t)
            }
        }, {
            name: "dragstart",
            handler(t) {
                t.preventDefault()
            }
        }, {
            name: Es,
            el: ({list: t}) => t,
            handler: A,
            ...qe
        }],
        methods: {
            start() {
                this.drag = this.pos,
                this._transitioner ? (this.percent = this._transitioner.percent(),
                this.drag += this._transitioner.getDistance() * this.percent * this.dir,
                this._transitioner.cancel(),
                this._transitioner.translate(this.percent),
                this.dragging = !0,
                this.stack = []) : this.prevIndex = this.index,
                $(document, Es, this.move, qe),
                $(document, Hn, this.end, Fn),
                h(this.list, "userSelect", "none")
            },
            move(t) {
                const e = this.pos - this.drag;
                if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
                    return;
                this.dragging || $(this.list, "click", Ln, qe),
                t.cancelable && t.preventDefault(),
                this.dragging = !0,
                this.dir = e < 0 ? 1 : -1;
                let {slides: i, prevIndex: s} = this
                  , n = Math.abs(e)
                  , o = this.getIndex(s + this.dir)
                  , r = Wn.call(this, s, o);
                for (; o !== s && n > r; )
                    this.drag -= r * this.dir,
                    s = o,
                    n -= r,
                    o = this.getIndex(s + this.dir),
                    r = Wn.call(this, s, o);
                this.percent = n / r;
                const a = i[s]
                  , l = i[o]
                  , c = this.index !== o
                  , u = s === o;
                let f;
                for (const d of [this.index, this.prevIndex])
                    v([o, s], d) || (b(i[d], "itemhidden", [this]),
                    u && (f = !0,
                    this.prevIndex = s));
                (this.index === s && this.prevIndex !== s || f) && b(i[this.index], "itemshown", [this]),
                c && (this.prevIndex = s,
                this.index = o,
                u || (b(a, "beforeitemhide", [this]),
                b(a, "itemhide", [this])),
                b(l, "beforeitemshow", [this]),
                b(l, "itemshow", [this])),
                this._transitioner = this._translate(Math.abs(this.percent), a, !u && l)
            },
            end() {
                if (Tt(document, Es, this.move, qe),
                Tt(document, Hn, this.end, Fn),
                this.dragging)
                    if (this.dragging = null,
                    this.index === this.prevIndex)
                        this.percent = 1 - this.percent,
                        this.dir *= -1,
                        this._show(!1, this.index, !0),
                        this._transitioner = null;
                    else {
                        const t = (U ? this.dir * (U ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                        this.index = t ? this.index : this.prevIndex,
                        t && (this.percent = 1 - this.percent),
                        this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", !0)
                    }
                setTimeout( () => Tt(this.list, "click", Ln, qe)),
                h(this.list, {
                    userSelect: ""
                }),
                this.drag = this.percent = null
            }
        }
    };
    function Wn(t, e) {
        return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth
    }
    function $a(t) {
        return h(t, "userSelect") !== "none" && Zt(t.childNodes).some(e => e.nodeType === 3 && e.textContent.trim())
    }
    function ya(t) {
        t._watches = [];
        for (const e of t.$options.watch || [])
            for (const [i,s] of Object.entries(e))
                jn(t, s, i);
        t._initial = !0
    }
    function jn(t, e, i) {
        t._watches.push({
            name: i,
            ...te(e) ? e : {
                handler: e
            }
        })
    }
    function ka(t, e) {
        for (const {name: i, handler: s, immediate: n=!0} of t._watches)
            (t._initial && n || pt(e, i) && !Ie(e[i], t[i])) && s.call(t, t[i], e[i]);
        t._initial = !1
    }
    function Sa(t) {
        const {computed: e} = t.$options;
        if (t._computed = {},
        e)
            for (const i in e)
                qn(t, i, e[i])
    }
    const Rn = {
        subtree: !0,
        childList: !0
    };
    function qn(t, e, i) {
        t._hasComputed = !0,
        Object.defineProperty(t, e, {
            enumerable: !0,
            get() {
                const {_computed: s, $props: n, $el: o} = t;
                if (!pt(s, e) && (s[e] = (i.get || i).call(t, n, o),
                i.observe && t._computedObserver)) {
                    const r = i.observe.call(t, n);
                    t._computedObserver.observe(["~", "+", "-"].includes(r[0]) ? o.parentElement : o.getRootNode(), Rn)
                }
                return s[e]
            },
            set(s) {
                const {_computed: n} = t;
                n[e] = i.set ? i.set.call(t, s) : s,
                X(n[e]) && delete n[e]
            }
        })
    }
    function Ia(t) {
        t._hasComputed && (Xr(t, {
            read: () => ka(t, Un(t)),
            events: ["resize", "computed"]
        }),
        t._computedObserver = as(t.$el, () => He(t, "computed"), Rn))
    }
    function Ea(t) {
        var e;
        (e = t._computedObserver) == null || e.disconnect(),
        delete t._computedObserver,
        Un(t)
    }
    function Un(t) {
        const e = {
            ...t._computed
        };
        return t._computed = {},
        e
    }
    function Ta(t) {
        t._events = [];
        for (const e of t.$options.events || [])
            if (pt(e, "handler"))
                Vn(t, e);
            else
                for (const i in e)
                    Vn(t, e[i], i)
    }
    function Ca(t) {
        t._events.forEach(e => e()),
        delete t._events
    }
    function Vn(t, e, i) {
        let {name: s, el: n, handler: o, capture: r, passive: a, delegate: l, filter: c, self: u} = te(e) ? e : {
            name: i,
            handler: e
        };
        n = tt(n) ? n.call(t, t) : n || t.$el,
        !(!n || G(n) && !n.length || c && !c.call(t, t)) && t._events.push($(n, s, l ? z(l) ? l : l.call(t, t) : null, z(o) ? t[o] : o.bind(t), {
            passive: a,
            capture: r,
            self: u
        }))
    }
    function Pa(t) {
        t._observers = [];
        for (const e of t.$options.observe || [])
            Aa(t, e)
    }
    function Yn(t, ...e) {
        t._observers.push(...e)
    }
    function _a(t) {
        for (const e of t._observers)
            e.disconnect()
    }
    function Aa(t, e) {
        let {observe: i, target: s=t.$el, handler: n, options: o, filter: r, args: a} = e;
        if (r && !r.call(t, t))
            return;
        const l = `_observe${t._observers.length}`;
        tt(s) && !pt(t, l) && qn(t, l, () => {
            const f = s.call(t, t);
            return G(f) ? T(f) : f
        }
        ),
        n = z(n) ? t[n] : n.bind(t),
        tt(o) && (o = o.call(t, t));
        const c = pt(t, l) ? t[l] : s
          , u = i(c, n, o, a);
        tt(s) && G(t[l]) && jn(t, {
            handler: Oa(u, o),
            immediate: !1
        }, l),
        Yn(t, u)
    }
    function Oa(t, e) {
        return (i, s) => {
            for (const n of s)
                v(i, n) || (t.unobserve ? t.unobserve(n) : t.observe && t.disconnect());
            for (const n of i)
                (!v(s, n) || !t.unobserve) && t.observe(n, e)
        }
    }
    function Da(t) {
        const {$options: e, $props: i} = t
          , s = Gn(e);
        ft(i, s);
        const {computed: n, methods: o} = e;
        for (let r in i)
            r in s && (!n || !pt(n, r)) && (!o || !pt(o, r)) && (t[r] = i[r])
    }
    function Gn(t) {
        const e = {}
          , {args: i=[], props: s={}, el: n, id: o} = t;
        if (!s)
            return e;
        for (const a in s) {
            const l = Dt(a);
            let c = J(n, l);
            X(c) || (c = s[a] === Boolean && c === "" ? !0 : ms(s[a], c),
            !(l === "target" && gt(c, "_")) && (e[a] = c))
        }
        const r = he(J(n, o), i);
        for (const a in r) {
            const l = $e(a);
            X(s[l]) || (e[l] = ms(s[l], r[a]))
        }
        return e
    }
    const Ma = ct( (t, e) => {
        const i = Object.keys(e)
          , s = i.concat(t).map(n => [Dt(n), `data-${Dt(n)}`]).flat();
        return {
            attributes: i,
            filter: s
        }
    }
    );
    function Ba(t) {
        const {$options: e, $props: i} = t
          , {id: s, props: n, el: o} = e;
        if (!n)
            return;
        const {attributes: r, filter: a} = Ma(s, n)
          , l = new MutationObserver(c => {
            const u = Gn(e);
            c.some( ({attributeName: f}) => {
                const d = f.replace("data-", "");
                return (d === s ? r : [$e(d), $e(f)]).some(p => !X(u[p]) && u[p] !== i[p])
            }
            ) && t.$reset()
        }
        );
        l.observe(o, {
            attributes: !0,
            attributeFilter: a
        }),
        Yn(t, l)
    }
    function de(t, e) {
        var i;
        (i = t.$options[e]) == null || i.forEach(s => s.call(t))
    }
    function Ts(t) {
        t._connected || (Da(t),
        de(t, "beforeConnect"),
        t._connected = !0,
        Ta(t),
        Gr(t),
        ya(t),
        Pa(t),
        Ba(t),
        Ia(t),
        de(t, "connected"),
        He(t))
    }
    function Cs(t) {
        t._connected && (de(t, "beforeDisconnect"),
        Ca(t),
        Jr(t),
        _a(t),
        Ea(t),
        de(t, "disconnected"),
        t._connected = !1)
    }
    let Na = 0;
    function Xn(t, e={}) {
        e.data = Ha(e, t.constructor.options),
        t.$options = Fe(t.constructor.options, e, t),
        t.$props = {},
        t._uid = Na++,
        za(t),
        Fa(t),
        Sa(t),
        de(t, "created"),
        e.el && t.$mount(e.el)
    }
    function za(t) {
        const {data: e={}} = t.$options;
        for (const i in e)
            t.$props[i] = t[i] = e[i]
    }
    function Fa(t) {
        const {methods: e} = t.$options;
        if (e)
            for (const i in e)
                t[i] = e[i].bind(t)
    }
    function Ha({data: t={}}, {args: e=[], props: i={}}) {
        G(t) && (t = t.slice(0, e.length).reduce( (s, n, o) => (te(n) ? ft(s, n) : s[e[o]] = n,
        s), {}));
        for (const s in t)
            X(t[s]) ? delete t[s] : i[s] && (t[s] = ms(i[s], t[s]));
        return t
    }
    const lt = function(t) {
        Xn(this, t)
    };
    lt.util = Wr,
    lt.options = {},
    lt.version = "3.21.7";
    const La = "bdt-"
      , Vt = "__uikit__"
      , pe = {};
    function Jn(t, e) {
        var i, s;
        const n = La + Dt(t);
        if (!e)
            return pe[n].options || (pe[n] = lt.extend(pe[n])),
            pe[n];
        t = $e(t),
        lt[t] = (r, a) => Ue(t, r, a);
        const o = (i = e.options) != null ? i : {
            ...e
        };
        return o.id = n,
        o.name = t,
        (s = o.install) == null || s.call(o, lt, o, t),
        lt._initialized && !o.functional && requestAnimationFrame( () => Ue(t, `[${n}],[data-${n}]`)),
        pe[n] = o
    }
    function Ue(t, e, i, ...s) {
        const n = Jn(t);
        return n.options.functional ? new n({
            data: te(e) ? e : [e, i, ...s]
        }) : e ? N(e).map(o)[0] : o();
        function o(r) {
            const a = Ti(r, t);
            if (a)
                if (i)
                    a.$destroy();
                else
                    return a;
            return new n({
                el: r,
                data: i
            })
        }
    }
    function Ve(t) {
        return (t == null ? void 0 : t[Vt]) || {}
    }
    function Ti(t, e) {
        return Ve(t)[e]
    }
    function Wa(t, e) {
        t[Vt] || (t[Vt] = {}),
        t[Vt][e.$options.name] = e
    }
    function ja(t, e) {
        var i;
        (i = t[Vt]) == null || delete i[e.$options.name],
        ti(t[Vt]) && delete t[Vt]
    }
    function Ra(t) {
        t.component = Jn,
        t.getComponents = Ve,
        t.getComponent = Ti,
        t.update = Kn,
        t.use = function(i) {
            if (!i.installed)
                return i.call(null, this),
                i.installed = !0,
                this
        }
        ,
        t.mixin = function(i, s) {
            s = (z(s) ? this.component(s) : s) || this,
            s.options = Fe(s.options, i)
        }
        ,
        t.extend = function(i) {
            i || (i = {});
            const s = this
              , n = function(r) {
                Xn(this, r)
            };
            return n.prototype = Object.create(s.prototype),
            n.prototype.constructor = n,
            n.options = Fe(s.options, i),
            n.super = s,
            n.extend = s.extend,
            n
        }
        ;
        let e;
        Object.defineProperty(t, "container", {
            get() {
                return e || document.body
            },
            set(i) {
                e = y(i)
            }
        })
    }
    function Kn(t, e) {
        t = t ? W(t) : document.body;
        for (const i of _e(t).reverse())
            Qn(i, e);
        _t(t, i => Qn(i, e))
    }
    function Qn(t, e) {
        const i = Ve(t);
        for (const s in i)
            He(i[s], e)
    }
    function qa(t) {
        t.prototype.$mount = function(e) {
            const i = this;
            Wa(e, i),
            i.$options.el = e,
            document.contains(e) && Ts(i)
        }
        ,
        t.prototype.$destroy = function(e=!1) {
            const i = this
              , {el: s} = i.$options;
            s && Cs(i),
            de(i, "destroy"),
            ja(s, i),
            e && ot(i.$el)
        }
        ,
        t.prototype.$create = Ue,
        t.prototype.$emit = function(e) {
            He(this, e)
        }
        ,
        t.prototype.$update = function(e=this.$el, i) {
            Kn(e, i)
        }
        ,
        t.prototype.$reset = function() {
            Cs(this),
            Ts(this)
        }
        ,
        t.prototype.$getComponent = Ti,
        Object.defineProperties(t.prototype, {
            $el: {
                get() {
                    return this.$options.el
                }
            },
            $container: Object.getOwnPropertyDescriptor(t, "container")
        })
    }
    let Ua = 1;
    function Yt(t, e=null) {
        return (e == null ? void 0 : e.id) || `${t.$options.id}-${Ua++}`
    }
    var Va = {
        i18n: {
            next: "Next slide",
            previous: "Previous slide",
            slideX: "Slide %s",
            slideLabel: "%s of %s",
            role: "String"
        },
        data: {
            selNav: !1,
            role: "region"
        },
        computed: {
            nav: ({selNav: t}, e) => y(t, e),
            navChildren() {
                return M(this.nav)
            },
            selNavItem: ({attrItem: t}) => `[${t}],[data-${t}]`,
            navItems(t, e) {
                return N(this.selNavItem, e)
            }
        },
        watch: {
            nav(t, e) {
                g(t, "role", "tablist"),
                this.padNavitems(),
                e && this.$emit()
            },
            list(t) {
                H(t, "ul") && g(t, "role", "presentation")
            },
            navChildren(t) {
                g(t, "role", "presentation"),
                this.padNavitems(),
                this.updateNav()
            },
            navItems(t) {
                for (const e of t) {
                    const i = J(e, this.attrItem)
                      , s = y("a,button", e) || e;
                    let n, o = null;
                    if (mt(i)) {
                        const r = xt(i)
                          , a = this.slides[r];
                        a && (a.id || (a.id = Yt(this, a)),
                        o = a.id),
                        n = this.t("slideX", k(i) + 1),
                        g(s, "role", "tab")
                    } else
                        this.list && (this.list.id || (this.list.id = Yt(this, this.list)),
                        o = this.list.id),
                        n = this.t(i);
                    g(s, {
                        "aria-controls": o,
                        "aria-label": g(s, "aria-label") || n
                    })
                }
            },
            slides(t) {
                t.forEach( (e, i) => g(e, {
                    role: this.nav ? "tabpanel" : "group",
                    "aria-label": this.t("slideLabel", i + 1, this.length),
                    "aria-roledescription": this.nav ? null : "slide"
                })),
                this.padNavitems()
            }
        },
        connected() {
            g(this.$el, {
                role: this.role,
                "aria-roledescription": "carousel"
            })
        },
        update: [{
            write() {
                this.navItems.concat(this.nav).forEach(t => t && (t.hidden = !this.maxIndex)),
                this.updateNav()
            },
            events: ["resize"]
        }],
        events: [{
            name: "click keydown",
            delegate: ({selNavItem: t}) => t,
            filter: ({parallax: t}) => !t,
            handler(t) {
                t.target.closest("a,button") && (t.type === "click" || t.keyCode === O.SPACE) && (t.preventDefault(),
                this.show(J(t.current, this.attrItem)))
            }
        }, {
            name: "itemshow",
            handler: "updateNav"
        }, {
            name: "keydown",
            delegate: ({selNavItem: t}) => t,
            filter: ({parallax: t}) => !t,
            handler(t) {
                const {current: e, keyCode: i} = t
                  , s = J(e, this.attrItem);
                if (!mt(s))
                    return;
                let n = i === O.HOME ? 0 : i === O.END ? "last" : i === O.LEFT ? "previous" : i === O.RIGHT ? "next" : -1;
                ~n && (t.preventDefault(),
                this.show(n))
            }
        }],
        methods: {
            updateNav() {
                const t = this.getValidIndex();
                for (const e of this.navItems) {
                    const i = J(e, this.attrItem)
                      , s = y("a,button", e) || e;
                    if (mt(i)) {
                        const o = xt(i) === t;
                        j(e, this.clsActive, o),
                        j(s, "bdt-disabled", this.parallax),
                        g(s, {
                            "aria-selected": o,
                            tabindex: o && !this.parallax ? null : -1
                        }),
                        o && s && C(D(e), ":focus-within") && s.focus()
                    } else
                        j(e, "bdt-invisible", this.finite && (i === "previous" && t === 0 || i === "next" && t >= this.maxIndex))
                }
            },
            padNavitems() {
                if (!this.nav)
                    return;
                const t = [];
                for (let e = 0; e < this.length; e++) {
                    const i = `${this.attrItem}="${e}"`;
                    t[e] = this.navChildren.findLast(s => s.matches(`[${i}]`)) || y(`<li ${i}><a href></a></li>`)
                }
                Ie(t, this.navChildren) || Pt(this.nav, t)
            }
        }
    };
    const Ya = "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      , Ga = "cubic-bezier(0.165, 0.84, 0.44, 1)";
    var Zn = {
        mixins: [ba, xa, Va, Ei],
        props: {
            clsActivated: String,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number
        },
        data: () => ({
            easing: "ease",
            finite: !1,
            velocity: 1,
            index: 0,
            prevIndex: -1,
            stack: [],
            percent: 0,
            clsActive: "bdt-active",
            clsActivated: "",
            clsEnter: "bdt-slide-enter",
            clsLeave: "bdt-slide-leave",
            clsSlideActive: "bdt-slide-active",
            Transitioner: !1,
            transitionOptions: {}
        }),
        connected() {
            this.prevIndex = -1,
            this.index = this.getValidIndex(this.$props.index),
            this.stack = []
        },
        disconnected() {
            _(this.slides, this.clsActive)
        },
        computed: {
            duration: ({velocity: t}, e) => to(e.offsetWidth / t),
            list: ({selList: t}, e) => y(t, e),
            maxIndex() {
                return this.length - 1
            },
            slides() {
                return M(this.list)
            },
            length() {
                return this.slides.length
            }
        },
        watch: {
            slides(t, e) {
                e && this.$emit()
            }
        },
        events: {
            itemshow({target: t}) {
                S(t, this.clsEnter, this.clsSlideActive)
            },
            itemshown({target: t}) {
                _(t, this.clsEnter)
            },
            itemhide({target: t}) {
                S(t, this.clsLeave)
            },
            itemhidden({target: t}) {
                _(t, this.clsLeave, this.clsSlideActive)
            }
        },
        methods: {
            show(t, e=!1) {
                var i;
                if (this.dragging || !this.length || this.parallax)
                    return;
                const {stack: s} = this
                  , n = e ? 0 : s.length
                  , o = () => {
                    s.splice(n, 1),
                    s.length && this.show(s.shift(), !0)
                }
                ;
                if (s[e ? "unshift" : "push"](t),
                !e && s.length > 1) {
                    s.length === 2 && ((i = this._transitioner) == null || i.forward(Math.min(this.duration, 200)));
                    return
                }
                const r = this.getIndex(this.index)
                  , a = x(this.slides, this.clsActive) && this.slides[r]
                  , l = this.getIndex(t, this.index)
                  , c = this.slides[l];
                if (a === c) {
                    o();
                    return
                }
                if (this.dir = Xa(t, r),
                this.prevIndex = r,
                this.index = l,
                a && !b(a, "beforeitemhide", [this]) || !b(c, "beforeitemshow", [this, a])) {
                    this.index = this.prevIndex,
                    o();
                    return
                }
                const u = this._show(a, c, e).then( () => {
                    a && b(a, "itemhidden", [this]),
                    b(c, "itemshown", [this]),
                    s.shift(),
                    this._transitioner = null,
                    s.length && requestAnimationFrame( () => s.length && this.show(s.shift(), !0))
                }
                );
                return a && b(a, "itemhide", [this]),
                b(c, "itemshow", [this]),
                u
            },
            getIndex(t=this.index, e=this.index) {
                return Q(nt(t, this.slides, e, this.finite), 0, Math.max(0, this.maxIndex))
            },
            getValidIndex(t=this.index, e=this.prevIndex) {
                return this.getIndex(t, e)
            },
            async _show(t, e, i) {
                if (this._transitioner = this._getTransitioner(t, e, this.dir, {
                    easing: i ? e.offsetWidth < 600 ? Ya : Ga : this.easing,
                    ...this.transitionOptions
                }),
                !i && !t) {
                    this._translate(1);
                    return
                }
                const {length: s} = this.stack;
                return this._transitioner[s > 1 ? "forward" : "show"](s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration, this.percent)
            },
            _translate(t, e=this.prevIndex, i=this.index) {
                const s = this._getTransitioner(e === i ? !1 : e, i);
                return s.translate(t),
                s
            },
            _getTransitioner(t=this.prevIndex, e=this.index, i=this.dir || 1, s=this.transitionOptions) {
                return new this.Transitioner(Se(t) ? this.slides[t] : t,Se(e) ? this.slides[e] : e,i * (U ? -1 : 1),s)
            }
        }
    };
    function Xa(t, e) {
        return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1
    }
    function to(t) {
        return .5 * t + 300
    }
    var eo = {
        mixins: [Zn],
        props: {
            animation: String
        },
        data: {
            animation: "slide",
            clsActivated: "bdt-transition-active",
            Animations: Is,
            Transitioner: va
        },
        computed: {
            animation({animation: t, Animations: e}) {
                return {
                    ...e[t] || e.slide,
                    name: t
                }
            },
            transitionOptions() {
                return {
                    animation: this.animation
                }
            }
        },
        observe: ut(),
        events: {
            beforeitemshow({target: t}) {
                S(t, this.clsActive)
            },
            itemshown({target: t}) {
                S(t, this.clsActivated)
            },
            itemhidden({target: t}) {
                _(t, this.clsActive, this.clsActivated)
            }
        }
    }
      , io = {
        ...Is,
        fade: {
            show() {
                return [{
                    opacity: 0
                }, {
                    opacity: 1
                }]
            },
            percent(t) {
                return 1 - h(t, "opacity")
            },
            translate(t) {
                return [{
                    opacity: 1 - t
                }, {
                    opacity: t
                }]
            }
        },
        scale: {
            show() {
                return [{
                    opacity: 0,
                    transform: fe(1 - .2)
                }, {
                    opacity: 1,
                    transform: fe(1)
                }]
            },
            percent(t) {
                return 1 - h(t, "opacity")
            },
            translate(t) {
                return [{
                    opacity: 1 - t,
                    transform: fe(1 - .2 * t)
                }, {
                    opacity: t,
                    transform: fe(1 - .2 + .2 * t)
                }]
            }
        }
    }
      , so = {
        mixins: [Ss, eo],
        functional: !0,
        props: {
            delayControls: Number,
            preload: Number,
            videoAutoplay: Boolean,
            template: String
        },
        data: () => ({
            preload: 1,
            videoAutoplay: !1,
            delayControls: 3e3,
            items: [],
            cls: "bdt-open",
            clsPage: "bdt-lightbox-page",
            selList: ".bdt-lightbox-items",
            attrItem: "bdt-lightbox-item",
            selClose: ".bdt-close-large",
            selCaption: ".bdt-lightbox-caption",
            pauseOnHover: !1,
            velocity: 2,
            Animations: io,
            template: '<div class="bdt-lightbox bdt-overflow-hidden"> <div class="bdt-lightbox-items"></div> <div class="bdt-lightbox-toolbar bdt-position-top bdt-text-right bdt-transition-slide-top bdt-transition-opaque"> <button class="bdt-lightbox-toolbar-icon bdt-close-large" type="button" bdt-close></button> </div> <a class="bdt-lightbox-button bdt-position-center-left bdt-position-medium bdt-transition-fade" href bdt-slidenav-previous bdt-lightbox-item="previous"></a> <a class="bdt-lightbox-button bdt-position-center-right bdt-position-medium bdt-transition-fade" href bdt-slidenav-next bdt-lightbox-item="next"></a> <div class="bdt-lightbox-toolbar bdt-lightbox-caption bdt-position-bottom bdt-text-center bdt-transition-slide-bottom bdt-transition-opaque"></div> </div>'
        }),
        created() {
            const t = y(this.template)
              , e = y(this.selList, t);
            this.items.forEach( () => q(e, "<div>"));
            const i = y("[bdt-close]", t)
              , s = this.t("close");
            i && s && (i.dataset.i18n = JSON.stringify({
                label: s
            })),
            this.$mount(q(this.container, t))
        },
        events: [{
            name: `${ni} ${ht} keydown`,
            handler: "showControls"
        }, {
            name: "click",
            self: !0,
            delegate: ({selList: t}) => `${t} > *`,
            handler(t) {
                t.defaultPrevented || this.hide()
            }
        }, {
            name: "shown",
            self: !0,
            handler: "showControls"
        }, {
            name: "hide",
            self: !0,
            handler() {
                this.hideControls(),
                _(this.slides, this.clsActive),
                B.stop(this.slides)
            }
        }, {
            name: "hidden",
            self: !0,
            handler() {
                this.$destroy(!0)
            }
        }, {
            name: "keyup",
            el: () => document,
            handler({keyCode: t}) {
                if (!this.isToggled(this.$el) || !this.draggable)
                    return;
                let e = -1;
                t === O.LEFT ? e = "previous" : t === O.RIGHT ? e = "next" : t === O.HOME ? e = 0 : t === O.END && (e = "last"),
                ~e && this.show(e)
            }
        }, {
            name: "beforeitemshow",
            handler(t) {
                this.isToggled() || (this.draggable = !1,
                t.preventDefault(),
                this.toggleElement(this.$el, !0, !1),
                this.animation = io.scale,
                _(t.target, this.clsActive),
                this.stack.splice(1, 0, this.index))
            }
        }, {
            name: "itemshow",
            handler() {
                Pt(y(this.selCaption, this.$el), this.getItem().caption || "");
                for (let t = -this.preload; t <= this.preload; t++)
                    this.loadItem(this.index + t)
            }
        }, {
            name: "itemshown",
            handler() {
                this.draggable = this.$props.draggable
            }
        }, {
            name: "itemload",
            async handler(t, e) {
                const {source: i, type: s, alt: n="", poster: o, attrs: r={}} = e;
                if (this.setItem(e, "<span bdt-spinner></span>"),
                !i)
                    return;
                let a;
                const l = {
                    allowfullscreen: "",
                    style: "max-width: 100%; box-sizing: border-box;",
                    "bdt-responsive": "",
                    "bdt-video": `${this.videoAutoplay}`
                };
                if (s === "image" || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
                    const c = Ye("img", {
                        src: i,
                        alt: n,
                        ...r
                    });
                    $(c, "load", () => this.setItem(e, c)),
                    $(c, "error", () => this.setError(e))
                } else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                    const c = Ye("video", {
                        src: i,
                        poster: o,
                        controls: "",
                        playsinline: "",
                        "bdt-video": `${this.videoAutoplay}`,
                        ...r
                    });
                    $(c, "loadedmetadata", () => this.setItem(e, c)),
                    $(c, "error", () => this.setError(e))
                } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i))
                    this.setItem(e, Ye("iframe", {
                        src: i,
                        allowfullscreen: "",
                        class: "bdt-lightbox-iframe",
                        ...r
                    }));
                else if (a = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))
                    this.setItem(e, Ye("iframe", {
                        src: `https://www.youtube${a[1] || ""}.com/embed/${a[2]}${a[3] ? `?${a[3]}` : ""}`,
                        width: 1920,
                        height: 1080,
                        ...l,
                        ...r
                    }));
                else if (a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))
                    try {
                        const {height: c, width: u} = await (await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`, {
                            credentials: "omit"
                        })).json();
                        this.setItem(e, Ye("iframe", {
                            src: `https://player.vimeo.com/video/${a[1]}${a[2] ? `?${a[2]}` : ""}`,
                            width: u,
                            height: c,
                            ...l,
                            ...r
                        }))
                    } catch {
                        this.setError(e)
                    }
            }
        }],
        methods: {
            loadItem(t=this.index) {
                const e = this.getItem(t);
                this.getSlide(e).childElementCount || b(this.$el, "itemload", [e])
            },
            getItem(t=this.index) {
                return this.items[nt(t, this.slides)]
            },
            setItem(t, e) {
                b(this.$el, "itemloaded", [this, Pt(this.getSlide(t), e)])
            },
            getSlide(t) {
                return this.slides[this.items.indexOf(t)]
            },
            setError(t) {
                this.setItem(t, '<span bdt-icon="icon: bolt; ratio: 2"></span>')
            },
            showControls() {
                clearTimeout(this.controlsTimer),
                this.controlsTimer = setTimeout(this.hideControls, this.delayControls),
                S(this.$el, "bdt-active", "bdt-transition-active")
            },
            hideControls() {
                _(this.$el, "bdt-active", "bdt-transition-active")
            }
        }
    };
    function Ye(t, e) {
        const i = Lt(`<${t}>`);
        return g(i, e),
        i
    }
    var Ja = {
        install: Ka,
        props: {
            toggle: String
        },
        data: {
            toggle: "a"
        },
        computed: {
            toggles: ({toggle: t}, e) => N(t, e)
        },
        watch: {
            toggles(t) {
                this.hide();
                for (const e of t)
                    H(e, "a") && g(e, "role", "button")
            }
        },
        disconnected() {
            this.hide()
        },
        events: {
            name: "click",
            delegate: ({toggle: t}) => `${t}:not(.bdt-disabled)`,
            handler(t) {
                t.defaultPrevented || (t.preventDefault(),
                this.show(t.current))
            }
        },
        methods: {
            show(t) {
                const e = Rs(this.toggles.map(no), "source");
                if (ke(t)) {
                    const {source: i} = no(t);
                    t = wt(e, ({source: s}) => i === s)
                }
                return this.panel = this.panel || this.$create("lightboxPanel", {
                    ...this.$props,
                    items: e
                }),
                $(this.panel.$el, "hidden", () => this.panel = null),
                this.panel.show(t)
            },
            hide() {
                var t;
                return (t = this.panel) == null ? void 0 : t.hide()
            }
        }
    };
    function Ka(t, e) {
        t.lightboxPanel || t.component("lightboxPanel", so),
        ft(e.props, t.component("lightboxPanel").options.props)
    }
    function no(t) {
        const e = {};
        for (const i of ["href", "caption", "type", "poster", "alt", "attrs"])
            e[i === "href" ? "source" : i] = J(t, i);
        return e.attrs = he(e.attrs),
        e
    }
    var Qa = {
        mixins: [je],
        functional: !0,
        args: ["message", "status"],
        data: {
            message: "",
            status: "",
            timeout: 5e3,
            group: "",
            pos: "top-center",
            clsContainer: "bdt-notification",
            clsClose: "bdt-notification-close",
            clsMsg: "bdt-notification-message"
        },
        install: Za,
        computed: {
            marginProp: ({pos: t}) => `margin-${t.match(/[a-z]+(?=-)/)[0]}`,
            startProps() {
                return {
                    opacity: 0,
                    [this.marginProp]: -this.$el.offsetHeight
                }
            }
        },
        created() {
            const t = `${this.clsContainer}-${this.pos}`
              , e = `data-${this.clsContainer}-container`
              , i = y(`.${t}[${e}]`, this.container) || q(this.container, `<div class="${this.clsContainer} ${t}" ${e}></div>`);
            this.$mount(q(i, `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-bdt-close></a> <div>${this.message}</div> </div>`))
        },
        async connected() {
            const t = k(h(this.$el, this.marginProp));
            await B.start(h(this.$el, this.startProps), {
                opacity: 1,
                [this.marginProp]: t
            }),
            this.timeout && (this.timer = setTimeout(this.close, this.timeout))
        },
        events: {
            click(t) {
                t.target.closest('a[href="#"],a[href=""]') && t.preventDefault(),
                this.close()
            },
            [Ht]() {
                this.timer && clearTimeout(this.timer)
            },
            [oe]() {
                this.timeout && (this.timer = setTimeout(this.close, this.timeout))
            }
        },
        methods: {
            async close(t) {
                const e = i => {
                    const s = D(i);
                    b(i, "close", [this]),
                    ot(i),
                    s != null && s.hasChildNodes() || ot(s)
                }
                ;
                this.timer && clearTimeout(this.timer),
                t || await B.start(this.$el, this.startProps),
                e(this.$el)
            }
        }
    };
    function Za(t) {
        t.notification.closeAll = function(e, i) {
            _t(document.body, s => {
                const n = t.getComponent(s, "notification");
                n && (!e || e === n.group) && n.close(i)
            }
            )
        }
    }
    var Ci = {
        props: {
            media: Boolean
        },
        data: {
            media: !1
        },
        connected() {
            const t = tl(this.media, this.$el);
            if (this.matchMedia = !0,
            t) {
                this.mediaObj = window.matchMedia(t);
                const e = () => {
                    this.matchMedia = this.mediaObj.matches,
                    b(this.$el, ae("mediachange", !1, !0, [this.mediaObj]))
                }
                ;
                this.offMediaObj = $(this.mediaObj, "change", () => {
                    e(),
                    this.$emit("resize")
                }
                ),
                e()
            }
        },
        disconnected() {
            var t;
            (t = this.offMediaObj) == null || t.call(this)
        }
    };
    function tl(t, e) {
        if (z(t)) {
            if (gt(t, "@"))
                t = k(h(e, `--bdt-breakpoint-${t.slice(1)}`));
            else if (isNaN(t))
                return t
        }
        return t && mt(t) ? `(min-width: ${t}px)` : ""
    }
    function oo(t) {
        return R(t) ? Math.ceil(Math.max(0, ...N("[stroke]", t).map(e => {
            var i;
            return ((i = e.getTotalLength) == null ? void 0 : i.call(e)) || 0
        }
        ))) : 0
    }
    const Pi = {
        x: _i,
        y: _i,
        rotate: _i,
        scale: _i,
        color: Ps,
        backgroundColor: Ps,
        borderColor: Ps,
        blur: Gt,
        hue: Gt,
        fopacity: Gt,
        grayscale: Gt,
        invert: Gt,
        saturate: Gt,
        sepia: Gt,
        opacity: il,
        stroke: sl,
        bgx: lo,
        bgy: lo
    }
      , {keys: ro} = Object;
    var ao = {
        mixins: [Ci],
        props: po(ro(Pi), "list"),
        data: po(ro(Pi), void 0),
        computed: {
            props(t, e) {
                const i = {};
                for (const n in t)
                    n in Pi && !X(t[n]) && (i[n] = t[n].slice());
                const s = {};
                for (const n in i)
                    s[n] = Pi[n](n, e, i[n], i);
                return s
            }
        },
        events: {
            load() {
                this.$emit()
            }
        },
        methods: {
            reset() {
                for (const t in this.getCss(0))
                    h(this.$el, t, "")
            },
            getCss(t) {
                const e = {};
                for (const i in this.props)
                    this.props[i](e, Q(t));
                return e.willChange = Object.keys(e).map(li).join(","),
                e
            }
        }
    };
    function _i(t, e, i) {
        let s = Oi(i) || {
            x: "px",
            y: "px",
            rotate: "deg"
        }[t] || "", n;
        return t === "x" || t === "y" ? (t = `translate${kt(t)}`,
        n = o => k(k(o).toFixed(s === "px" ? 0 : 6))) : t === "scale" && (s = "",
        n = o => {
            var r;
            return Oi([o]) ? Y(o, "width", e, !0) / e[`offset${(r = o.endsWith) != null && r.call(o, "vh") ? "Height" : "Width"}`] : k(o)
        }
        ),
        i.length === 1 && i.unshift(t === "scale" ? 1 : 0),
        i = ge(i, n),
        (o, r) => {
            o.transform = `${o.transform || ""} ${t}(${Ge(i, r)}${s})`
        }
    }
    function Ps(t, e, i) {
        return i.length === 1 && i.unshift(Xe(e, t, "")),
        i = ge(i, s => el(e, s)),
        (s, n) => {
            const [o,r,a] = fo(i, n)
              , l = o.map( (c, u) => (c += a * (r[u] - c),
            u === 3 ? k(c) : parseInt(c, 10))).join(",");
            s[t] = `rgba(${l})`
        }
    }
    function el(t, e) {
        return Xe(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(k)
    }
    function Gt(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = Oi(i) || {
            blur: "px",
            hue: "deg"
        }[t] || "%";
        return t = {
            fopacity: "opacity",
            hue: "hue-rotate"
        }[t] || t,
        i = ge(i),
        (n, o) => {
            const r = Ge(i, o);
            n.filter = `${n.filter || ""} ${t}(${r + s})`
        }
    }
    function il(t, e, i) {
        return i.length === 1 && i.unshift(Xe(e, t, "")),
        i = ge(i),
        (s, n) => {
            s[t] = Ge(i, n)
        }
    }
    function sl(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = Oi(i)
          , n = oo(e);
        return i = ge(i.reverse(), o => (o = k(o),
        s === "%" ? o * n / 100 : o)),
        i.some( ([o]) => o) ? (h(e, "strokeDasharray", n),
        (o, r) => {
            o.strokeDashoffset = Ge(i, r)
        }
        ) : A
    }
    function lo(t, e, i, s) {
        i.length === 1 && i.unshift(0);
        const n = t === "bgy" ? "height" : "width";
        s[t] = ge(i, a => Y(a, n, e));
        const o = ["bgx", "bgy"].filter(a => a in s);
        if (o.length === 2 && t === "bgx")
            return A;
        if (Xe(e, "backgroundSize", "") === "cover")
            return nl(t, e, i, s);
        const r = {};
        for (const a of o)
            r[a] = co(e, a);
        return ho(o, r, s)
    }
    function nl(t, e, i, s) {
        const n = ol(e);
        if (!n.width)
            return A;
        const o = {
            width: e.offsetWidth,
            height: e.offsetHeight
        }
          , r = ["bgx", "bgy"].filter(u => u in s)
          , a = {};
        for (const u of r) {
            const f = s[u].map( ([P]) => P)
              , d = Math.min(...f)
              , p = Math.max(...f)
              , w = f.indexOf(d) < f.indexOf(p)
              , I = p - d;
            a[u] = `${(w ? -I : 0) - (w ? d : p)}px`,
            o[u === "bgy" ? "height" : "width"] += I
        }
        const l = Ui.cover(n, o);
        for (const u of r) {
            const f = u === "bgy" ? "height" : "width"
              , d = l[f] - o[f];
            a[u] = `max(${co(e, u)},-${d}px) + ${a[u]}`
        }
        const c = ho(r, a, s);
        return (u, f) => {
            c(u, f),
            u.backgroundSize = `${l.width}px ${l.height}px`,
            u.backgroundRepeat = "no-repeat"
        }
    }
    function co(t, e) {
        return Xe(t, `background-position-${e.slice(-1)}`, "")
    }
    function ho(t, e, i) {
        return function(s, n) {
            for (const o of t) {
                const r = Ge(i[o], n);
                s[`background-position-${o.slice(-1)}`] = `calc(${e[o]} + ${r}px)`
            }
        }
    }
    const uo = {}
      , Ai = {};
    function ol(t) {
        const e = h(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
        if (Ai[e])
            return Ai[e];
        const i = new Image;
        return e && (i.src = e,
        !i.naturalWidth && !uo[e]) ? (F(i, "error load", () => {
            Ai[e] = _s(i),
            b(t, ae("load", !1))
        }
        ),
        uo[e] = !0,
        _s(i)) : Ai[e] = _s(i)
    }
    function _s(t) {
        return {
            width: t.naturalWidth,
            height: t.naturalHeight
        }
    }
    function ge(t, e=k) {
        const i = []
          , {length: s} = t;
        let n = 0;
        for (let o = 0; o < s; o++) {
            let[r,a] = z(t[o]) ? t[o].trim().split(/ (?![^(]*\))/) : [t[o]];
            if (r = e(r),
            a = a ? k(a) / 100 : null,
            o === 0 ? a === null ? a = 0 : a && i.push([r, 0]) : o === s - 1 && (a === null ? a = 1 : a !== 1 && (i.push([r, a]),
            a = 1)),
            i.push([r, a]),
            a === null)
                n++;
            else if (n) {
                const l = i[o - n - 1][1]
                  , c = (a - l) / (n + 1);
                for (let u = n; u > 0; u--)
                    i[o - u][1] = l + c * (n - u + 1);
                n = 0
            }
        }
        return i
    }
    function fo(t, e) {
        const i = wt(t.slice(1), ([,s]) => e <= s) + 1;
        return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])]
    }
    function Ge(t, e) {
        const [i,s,n] = fo(t, e);
        return i + Math.abs(i - s) * n * (i < s ? 1 : -1)
    }
    const rl = /^-?\d+(?:\.\d+)?(\S+)?/;
    function Oi(t, e) {
        var i;
        for (const s of t) {
            const n = (i = s.match) == null ? void 0 : i.call(s, rl);
            if (n)
                return n[1]
        }
        return e
    }
    function Xe(t, e, i) {
        const s = t.style[e]
          , n = h(h(t, e, i), e);
        return t.style[e] = s,
        n
    }
    function po(t, e) {
        return t.reduce( (i, s) => (i[s] = e,
        i), {})
    }
    function go(t, e) {
        return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e)
    }
    var al = {
        mixins: [ao],
        props: {
            target: String,
            viewport: Number,
            easing: Number,
            start: String,
            end: String
        },
        data: {
            target: !1,
            viewport: 1,
            easing: 1,
            start: 0,
            end: 0
        },
        computed: {
            target: ({target: t}, e) => mo(t && Z(t, e) || e),
            start({start: t}) {
                return Y(t, "height", this.target, !0)
            },
            end({end: t, viewport: e}) {
                return Y(t || (e = (1 - e) * 100) && `${e}vh+${e}%`, "height", this.target, !0)
            }
        },
        observe: [vs(), Le({
            target: ({target: t}) => t
        }), ut({
            target: ({$el: t, target: e}) => [t, e, Ot(e, !0)]
        })],
        update: {
            read({percent: t}, e) {
                if (e.has("scroll") || (t = !1),
                !R(this.$el))
                    return !1;
                if (!this.matchMedia)
                    return;
                const i = t;
                return t = go($i(this.target, this.start, this.end), this.easing),
                {
                    percent: t,
                    style: i === t ? !1 : this.getCss(t)
                }
            },
            write({style: t}) {
                if (!this.matchMedia) {
                    this.reset();
                    return
                }
                t && h(this.$el, t)
            },
            events: ["scroll", "resize"]
        }
    };
    function mo(t) {
        return t ? "offsetTop"in t ? t : mo(D(t)) : document.documentElement
    }
    var vo = {
        props: {
            parallax: Boolean,
            parallaxTarget: Boolean,
            parallaxStart: String,
            parallaxEnd: String,
            parallaxEasing: Number
        },
        data: {
            parallax: !1,
            parallaxTarget: !1,
            parallaxStart: 0,
            parallaxEnd: 0,
            parallaxEasing: 0
        },
        observe: [ut({
            target: ({$el: t, parallaxTarget: e}) => [t, e],
            filter: ({parallax: t}) => t
        }), Le({
            filter: ({parallax: t}) => t
        })],
        computed: {
            parallaxTarget({parallaxTarget: t}, e) {
                return t && Z(t, e) || this.list
            }
        },
        update: {
            read() {
                if (!this.parallax)
                    return !1;
                const t = this.parallaxTarget;
                if (!t)
                    return !1;
                const e = Y(this.parallaxStart, "height", t, !0)
                  , i = Y(this.parallaxEnd, "height", t, !0)
                  , s = go($i(t, e, i), this.parallaxEasing);
                return {
                    parallax: this.getIndexAt(s)
                }
            },
            write({parallax: t}) {
                const [e,i] = t
                  , s = this.getValidIndex(e + Math.ceil(i))
                  , n = this.slides[e]
                  , o = this.slides[s]
                  , {triggerShow: r, triggerShown: a, triggerHide: l, triggerHidden: c} = ll(this);
                if (~this.prevIndex)
                    for (const f of new Set([this.index, this.prevIndex]))
                        v([s, e], f) || (l(this.slides[f]),
                        c(this.slides[f]));
                const u = this.prevIndex !== e || this.index !== s;
                this.dir = 1,
                this.prevIndex = e,
                this.index = s,
                n !== o && l(n),
                r(o),
                u && a(n),
                this._translate(n === o ? 1 : i, n, o)
            },
            events: ["scroll", "resize"]
        },
        methods: {
            getIndexAt(t) {
                const e = t * (this.length - 1);
                return [Math.floor(e), e % 1]
            }
        }
    };
    function ll(t) {
        const {clsSlideActive: e, clsEnter: i, clsLeave: s} = t;
        return {
            triggerShow: n,
            triggerShown: o,
            triggerHide: r,
            triggerHidden: a
        };
        function n(l) {
            x(l, s) && (r(l),
            a(l)),
            x(l, e) || (b(l, "beforeitemshow", [t]),
            b(l, "itemshow", [t]))
        }
        function o(l) {
            x(l, i) && b(l, "itemshown", [t])
        }
        function r(l) {
            x(l, e) || n(l),
            x(l, i) && o(l),
            x(l, s) || (b(l, "beforeitemhide", [t]),
            b(l, "itemhide", [t]))
        }
        function a(l) {
            x(l, s) && b(l, "itemhidden", [t])
        }
    }
    var bo = {
        update: {
            write() {
                if (this.stack.length || this.dragging || this.parallax)
                    return;
                const t = this.getValidIndex();
                !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1)
            },
            events: ["resize"]
        }
    }
      , wo = {
        observe: Si({
            target: ({slides: t}) => t,
            targets: t => t.getAdjacentSlides()
        }),
        methods: {
            getAdjacentSlides() {
                return [1, -1].map(t => this.slides[this.getIndex(this.index + t)])
            }
        }
    };
    function cl(t, e, i, {center: s, easing: n, list: o}) {
        const r = t ? Je(t, o, s) : Je(e, o, s) + m(e).width * i
          , a = e ? Je(e, o, s) : r + m(t).width * i * (U ? -1 : 1)
          , {promise: l, resolve: c} = zn();
        return {
            dir: i,
            show(u, f=0, d) {
                const p = d ? "linear" : n;
                return u -= Math.round(u * Q(f, -1, 1)),
                h(o, "transitionProperty", "none"),
                this.translate(f),
                h(o, "transitionProperty", ""),
                f = t ? f : Q(f, 0, 1),
                Ut(this.getItemIn(), "itemin", {
                    percent: f,
                    duration: u,
                    timing: p,
                    dir: i
                }),
                t && Ut(this.getItemIn(!0), "itemout", {
                    percent: 1 - f,
                    duration: u,
                    timing: p,
                    dir: i
                }),
                B.start(o, {
                    transform: L(-a * (U ? -1 : 1), "px")
                }, u, p).then(c, A),
                l
            },
            cancel() {
                return B.cancel(o)
            },
            reset() {
                h(o, "transform", "")
            },
            async forward(u, f=this.percent()) {
                return await this.cancel(),
                this.show(u, f, !0)
            },
            translate(u) {
                if (u === this.percent())
                    return;
                const f = this.getDistance() * i * (U ? -1 : 1);
                h(o, "transform", L(Q(-a + (f - f * u), -me(o), m(o).width) * (U ? -1 : 1), "px"));
                const d = this.getActives()
                  , p = this.getItemIn()
                  , w = this.getItemIn(!0);
                u = t ? Q(u, -1, 1) : 0;
                for (const I of M(o)) {
                    const P = v(d, I)
                      , vt = I === p
                      , ve = I === w
                      , be = vt || !ve && (P || i * (U ? -1 : 1) === -1 ^ Di(I, o) > Di(t || e));
                    Ut(I, `itemtranslate${be ? "in" : "out"}`, {
                        dir: i,
                        percent: ve ? 1 - u : vt ? u : P ? 1 : 0
                    })
                }
            },
            percent() {
                return Math.abs((new DOMMatrix(h(o, "transform")).m41 * (U ? -1 : 1) + r) / (a - r))
            },
            getDistance() {
                return Math.abs(a - r)
            },
            getItemIn(u=!1) {
                let f = this.getActives()
                  , d = $o(o, Je(e || t, o, s));
                if (u) {
                    const p = f;
                    f = d,
                    d = p
                }
                return d[wt(d, p => !v(f, p))]
            },
            getActives() {
                return $o(o, Je(t || e, o, s))
            }
        }
    }
    function Je(t, e, i) {
        const s = Di(t, e);
        return i ? s - hl(t, e) : Math.min(s, xo(e))
    }
    function xo(t) {
        return Math.max(0, me(t) - m(t).width)
    }
    function me(t, e) {
        return Nt(M(t).slice(0, e), i => m(i).width)
    }
    function hl(t, e) {
        return m(e).width / 2 - m(t).width / 2
    }
    function Di(t, e) {
        return t && (ss(t).left + (U ? m(t).width - m(e).width : 0)) * (U ? -1 : 1) || 0
    }
    function $o(t, e) {
        e -= 1;
        const i = m(t).width
          , s = e + i + 2;
        return M(t).filter(n => {
            const o = Di(n, t)
              , r = o + Math.min(m(n).width, i);
            return o >= e && r <= s
        }
        )
    }
    var ul = {
        mixins: [it, Zn, bo, vo, wo],
        props: {
            center: Boolean,
            sets: Boolean,
            active: String
        },
        data: {
            center: !1,
            sets: !1,
            attrItem: "bdt-slider-item",
            selList: ".bdt-slider-items",
            selNav: ".bdt-slider-nav",
            clsContainer: "bdt-slider-container",
            active: "all",
            Transitioner: cl
        },
        computed: {
            finite({finite: t}) {
                return t || fl(this.list, this.center)
            },
            maxIndex() {
                if (!this.finite || this.center && !this.sets)
                    return this.length - 1;
                if (this.center)
                    return Bt(this.sets);
                let t = 0;
                const e = xo(this.list)
                  , i = wt(this.slides, s => {
                    if (t >= e)
                        return !0;
                    t += m(s).width
                }
                );
                return ~i ? i : this.length - 1
            },
            sets({sets: t}) {
                if (!t || this.parallax)
                    return;
                let e = 0;
                const i = []
                  , s = m(this.list).width;
                for (let n = 0; n < this.length; n++) {
                    const o = m(this.slides[n]).width;
                    e + o > s && (e = 0),
                    this.center ? e < s / 2 && e + o + m(this.slides[nt(n + 1, this.slides)]).width / 2 > s / 2 && (i.push(n),
                    e = s / 2 - o / 2) : e === 0 && i.push(Math.min(n, this.maxIndex)),
                    e += o
                }
                if (i.length)
                    return i
            },
            transitionOptions() {
                return {
                    center: this.center,
                    list: this.list
                }
            },
            slides() {
                return M(this.list).filter(R)
            }
        },
        connected() {
            j(this.$el, this.clsContainer, !y(`.${this.clsContainer}`, this.$el))
        },
        observe: ut({
            target: ({slides: t, $el: e}) => [e, ...t]
        }),
        update: {
            write() {
                for (const t of this.navItems) {
                    const e = xt(J(t, this.attrItem));
                    e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !v(this.sets, e))
                }
                this.reorder(),
                this.parallax || this._translate(1),
                this.updateActiveClasses()
            },
            events: ["resize"]
        },
        events: {
            beforeitemshow(t) {
                !this.dragging && this.sets && this.stack.length < 2 && !v(this.sets, this.index) && (this.index = this.getValidIndex());
                const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                if (!this.dragging && e > 1) {
                    for (let n = 0; n < e; n++)
                        this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                    t.preventDefault();
                    return
                }
                const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex
                  , s = me(this.list) / this.length;
                this.duration = to(s / this.velocity) * (m(this.slides[i]).width / s),
                this.reorder()
            },
            itemshow() {
                ~this.prevIndex && S(this._getTransitioner().getItemIn(), this.clsActive),
                this.updateActiveClasses(this.prevIndex)
            },
            itemshown() {
                this.updateActiveClasses()
            }
        },
        methods: {
            reorder() {
                if (this.finite) {
                    h(this.slides, "order", "");
                    return
                }
                const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                if (this.slides.forEach( (n, o) => h(n, "order", this.dir > 0 && o < t ? 1 : this.dir < 0 && o >= this.index ? -1 : "")),
                !this.center || !this.length)
                    return;
                const e = this.slides[t];
                let i = m(this.list).width / 2 - m(e).width / 2
                  , s = 0;
                for (; i > 0; ) {
                    const n = this.getIndex(--s + t, t)
                      , o = this.slides[n];
                    h(o, "order", n > t ? -2 : -1),
                    i -= m(o).width
                }
            },
            updateActiveClasses(t=this.index) {
                let e = this._getTransitioner(t).getActives();
                this.active !== "all" && (e = [this.slides[this.getValidIndex(t)]]);
                const i = [this.clsActive, !this.sets || v(this.sets, k(this.index)) ? this.clsActivated : ""];
                for (const s of this.slides) {
                    const n = v(e, s);
                    j(s, i, n),
                    g(s, "aria-hidden", !n);
                    for (const o of N(Ce, s))
                        pt(o, "_tabindex") || (o._tabindex = g(o, "tabindex")),
                        g(o, "tabindex", n ? o._tabindex : -1)
                }
            },
            getValidIndex(t=this.index, e=this.prevIndex) {
                if (t = this.getIndex(t, e),
                !this.sets)
                    return t;
                let i;
                do {
                    if (v(this.sets, t))
                        return t;
                    i = t,
                    t = this.getIndex(t + this.dir, e)
                } while (t !== i);
                return t
            },
            getAdjacentSlides() {
                const {width: t} = m(this.list)
                  , e = -t
                  , i = t * 2
                  , s = m(this.slides[this.index]).width
                  , n = this.center ? t / 2 - s / 2 : 0
                  , o = new Set;
                for (const r of [-1, 1]) {
                    let a = n + (r > 0 ? s : 0)
                      , l = 0;
                    do {
                        const c = this.slides[this.getIndex(this.index + r + l++ * r)];
                        a += m(c).width * r,
                        o.add(c)
                    } while (this.length > l && a > e && a < i)
                }
                return Array.from(o)
            },
            getIndexAt(t) {
                let e = -1;
                const i = this.center ? me(this.list) - (m(this.slides[0]).width / 2 + m(Bt(this.slides)).width / 2) : me(this.list, this.maxIndex);
                let s = t * i
                  , n = 0;
                do {
                    const o = m(this.slides[++e]).width
                      , r = this.center ? o / 2 + m(this.slides[e + 1]).width / 2 : o;
                    n = s / r % 1,
                    s -= r
                } while (s >= 0 && e < this.maxIndex);
                return [e, n]
            }
        }
    };
    function fl(t, e) {
        if (!t || t.length < 2)
            return !0;
        const {width: i} = m(t);
        if (!e)
            return Math.ceil(me(t)) < Math.trunc(i + dl(t));
        const s = M(t)
          , n = Math.trunc(i / 2);
        for (const o in s) {
            const r = s[o]
              , a = m(r).width
              , l = new Set([r]);
            let c = 0;
            for (const u of [-1, 1]) {
                let f = a / 2
                  , d = 0;
                for (; f < n; ) {
                    const p = s[nt(+o + u + d++ * u, s)];
                    if (l.has(p))
                        return !0;
                    f += m(p).width,
                    l.add(p)
                }
                c = Math.max(c, a / 2 + m(s[nt(+o + u, s)]).width / 2 - (f - n))
            }
            if (Math.trunc(c) > Nt(s.filter(u => !l.has(u)), u => m(u).width))
                return !0
        }
        return !1
    }
    function dl(t) {
        return Math.max(0, ...M(t).map(e => m(e).width))
    }
    var yo = {
        mixins: [ao],
        beforeConnect() {
            this.item = this.$el.closest(`.${this.$options.id.replace("parallax", "items")} > *`)
        },
        disconnected() {
            this.item = null
        },
        events: [{
            name: "itemin itemout",
            self: !0,
            el: ({item: t}) => t,
            handler({type: t, detail: {percent: e, duration: i, timing: s, dir: n}}) {
                At.read( () => {
                    if (!this.matchMedia)
                        return;
                    const o = this.getCss(So(t, n, e))
                      , r = this.getCss(ko(t) ? .5 : n > 0 ? 1 : 0);
                    At.write( () => {
                        h(this.$el, o),
                        B.start(this.$el, r, i, s).catch(A)
                    }
                    )
                }
                )
            }
        }, {
            name: "transitioncanceled transitionend",
            self: !0,
            el: ({item: t}) => t,
            handler() {
                B.cancel(this.$el)
            }
        }, {
            name: "itemtranslatein itemtranslateout",
            self: !0,
            el: ({item: t}) => t,
            handler({type: t, detail: {percent: e, dir: i}}) {
                At.read( () => {
                    if (!this.matchMedia) {
                        this.reset();
                        return
                    }
                    const s = this.getCss(So(t, i, e));
                    At.write( () => h(this.$el, s))
                }
                )
            }
        }]
    };
    function ko(t) {
        return Qt(t, "in")
    }
    function So(t, e, i) {
        return i /= 2,
        ko(t) ^ e < 0 ? i : 1 - i
    }
    var pl = {
        ...Is,
        fade: {
            show() {
                return [{
                    opacity: 0,
                    zIndex: 0
                }, {
                    zIndex: -1
                }]
            },
            percent(t) {
                return 1 - h(t, "opacity")
            },
            translate(t) {
                return [{
                    opacity: 1 - t,
                    zIndex: 0
                }, {
                    zIndex: -1
                }]
            }
        },
        scale: {
            show() {
                return [{
                    opacity: 0,
                    transform: fe(1 + .5),
                    zIndex: 0
                }, {
                    zIndex: -1
                }]
            },
            percent(t) {
                return 1 - h(t, "opacity")
            },
            translate(t) {
                return [{
                    opacity: 1 - t,
                    transform: fe(1 + .5 * t),
                    zIndex: 0
                }, {
                    zIndex: -1
                }]
            }
        },
        pull: {
            show(t) {
                return t < 0 ? [{
                    transform: L(30),
                    zIndex: -1
                }, {
                    transform: L(),
                    zIndex: 0
                }] : [{
                    transform: L(-100),
                    zIndex: 0
                }, {
                    transform: L(),
                    zIndex: -1
                }]
            },
            percent(t, e, i) {
                return i < 0 ? 1 - Re(e) : Re(t)
            },
            translate(t, e) {
                return e < 0 ? [{
                    transform: L(30 * t),
                    zIndex: -1
                }, {
                    transform: L(-100 * (1 - t)),
                    zIndex: 0
                }] : [{
                    transform: L(-t * 100),
                    zIndex: 0
                }, {
                    transform: L(30 * (1 - t)),
                    zIndex: -1
                }]
            }
        },
        push: {
            show(t) {
                return t < 0 ? [{
                    transform: L(100),
                    zIndex: 0
                }, {
                    transform: L(),
                    zIndex: -1
                }] : [{
                    transform: L(-30),
                    zIndex: -1
                }, {
                    transform: L(),
                    zIndex: 0
                }]
            },
            percent(t, e, i) {
                return i > 0 ? 1 - Re(e) : Re(t)
            },
            translate(t, e) {
                return e < 0 ? [{
                    transform: L(t * 100),
                    zIndex: 0
                }, {
                    transform: L(-30 * (1 - t)),
                    zIndex: -1
                }] : [{
                    transform: L(-30 * t),
                    zIndex: -1
                }, {
                    transform: L(100 * (1 - t)),
                    zIndex: 0
                }]
            }
        }
    }
      , gl = {
        mixins: [it, eo, bo, vo, wo],
        props: {
            ratio: String,
            minHeight: String,
            maxHeight: String
        },
        data: {
            ratio: "16:9",
            minHeight: void 0,
            maxHeight: void 0,
            selList: ".bdt-slideshow-items",
            attrItem: "bdt-slideshow-item",
            selNav: ".bdt-slideshow-nav",
            Animations: pl
        },
        watch: {
            list(t) {
                h(t, {
                    aspectRatio: this.ratio ? this.ratio.replace(":", "/") : void 0,
                    minHeight: this.minHeight,
                    maxHeight: this.maxHeight,
                    minWidth: "100%",
                    maxWidth: "100%"
                })
            }
        },
        methods: {
            getAdjacentSlides() {
                return [1, -1].map(t => this.slides[this.getIndex(this.index + t)])
            }
        }
    }
      , ml = {
        mixins: [it, On],
        props: {
            group: String,
            threshold: Number,
            clsItem: String,
            clsPlaceholder: String,
            clsDrag: String,
            clsDragState: String,
            clsBase: String,
            clsNoDrag: String,
            clsEmpty: String,
            clsCustom: String,
            handle: String
        },
        data: {
            group: !1,
            threshold: 5,
            clsItem: "bdt-sortable-item",
            clsPlaceholder: "bdt-sortable-placeholder",
            clsDrag: "bdt-sortable-drag",
            clsDragState: "bdt-drag",
            clsBase: "bdt-sortable",
            clsNoDrag: "bdt-sortable-nodrag",
            clsEmpty: "bdt-sortable-empty",
            clsCustom: "",
            handle: !1,
            pos: {}
        },
        events: {
            name: ht,
            passive: !1,
            handler: "init"
        },
        computed: {
            target: (t, e) => (e.tBodies || [e])[0],
            items() {
                return M(this.target)
            },
            isEmpty() {
                return !this.items.length
            },
            handles({handle: t}, e) {
                return t ? N(t, e) : this.items
            }
        },
        watch: {
            isEmpty(t) {
                j(this.target, this.clsEmpty, t)
            },
            handles(t, e) {
                h(e, {
                    touchAction: "",
                    userSelect: ""
                }),
                h(t, {
                    touchAction: "none",
                    userSelect: "none"
                })
            }
        },
        update: {
            write(t) {
                if (!this.drag || !D(this.placeholder))
                    return;
                const {pos: {x: e, y: i}, origin: {offsetTop: s, offsetLeft: n}, placeholder: o} = this;
                h(this.drag, {
                    top: i - s,
                    left: e - n
                });
                const r = this.getSortable(document.elementFromPoint(e, i));
                if (!r)
                    return;
                const {items: a} = r;
                if (a.some(B.inProgress))
                    return;
                const l = xl(a, {
                    x: e,
                    y: i
                });
                if (a.length && (!l || l === o))
                    return;
                const c = this.getSortable(o)
                  , u = $l(r.target, l, o, e, i, r === c && t.moved !== l);
                u !== !1 && (u && o === u || (r !== c ? (c.remove(o),
                t.moved = l) : delete t.moved,
                r.insert(o, u),
                this.touched.add(r)))
            },
            events: ["move"]
        },
        methods: {
            init(t) {
                const {target: e, button: i, defaultPrevented: s} = t
                  , [n] = this.items.filter(o => o.contains(e));
                !n || s || i > 0 || ri(e) || e.closest(`.${this.clsNoDrag}`) || this.handle && !e.closest(this.handle) || (t.preventDefault(),
                this.pos = yt(t),
                this.touched = new Set([this]),
                this.placeholder = n,
                this.origin = {
                    target: e,
                    index: $t(n),
                    ...this.pos
                },
                $(document, ni, this.move),
                $(document, Et, this.end),
                this.threshold || this.start(t))
            },
            start(t) {
                this.drag = wl(this.$container, this.placeholder);
                const {left: e, top: i} = m(this.placeholder);
                ft(this.origin, {
                    offsetLeft: this.pos.x - e,
                    offsetTop: this.pos.y - i
                }),
                S(this.drag, this.clsDrag, this.clsCustom),
                S(this.placeholder, this.clsPlaceholder),
                S(this.items, this.clsItem),
                S(document.documentElement, this.clsDragState),
                b(this.$el, "start", [this, this.placeholder]),
                vl(this.pos),
                this.move(t)
            },
            move: kl(function(t) {
                ft(this.pos, yt(t)),
                !this.drag && (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t),
                this.$emit("move")
            }),
            end() {
                if (Tt(document, ni, this.move),
                Tt(document, Et, this.end),
                !this.drag)
                    return;
                bl();
                const t = this.getSortable(this.placeholder);
                this === t ? this.origin.index !== $t(this.placeholder) && b(this.$el, "moved", [this, this.placeholder]) : (b(t.$el, "added", [t, this.placeholder]),
                b(this.$el, "removed", [this, this.placeholder])),
                b(this.$el, "stop", [this, this.placeholder]),
                ot(this.drag),
                this.drag = null;
                for (const {clsPlaceholder: e, clsItem: i} of this.touched)
                    for (const s of this.touched)
                        _(s.items, e, i);
                this.touched = null,
                _(document.documentElement, this.clsDragState)
            },
            insert(t, e) {
                S(this.items, this.clsItem),
                e && e.previousElementSibling !== t ? this.animate( () => hi(e, t)) : !e && this.target.lastElementChild !== t && this.animate( () => q(this.target, t))
            },
            remove(t) {
                this.target.contains(t) && this.animate( () => ot(t))
            },
            getSortable(t) {
                do {
                    const e = this.$getComponent(t, "sortable");
                    if (e && (e === this || this.group !== !1 && e.group === this.group))
                        return e
                } while (t = D(t))
            }
        }
    };
    let Io;
    function vl(t) {
        let e = Date.now();
        Io = setInterval( () => {
            let {x: i, y: s} = t;
            s += document.scrollingElement.scrollTop;
            const n = (Date.now() - e) * .3;
            e = Date.now(),
            jt(document.elementFromPoint(i, t.y)).reverse().some(o => {
                let {scrollTop: r, scrollHeight: a} = o;
                const {top: l, bottom: c, height: u} = rt(o);
                if (l < s && l + 35 > s)
                    r -= n;
                else if (c > s && c - 35 < s)
                    r += n;
                else
                    return;
                if (r > 0 && r < a - u)
                    return o.scrollTop = r,
                    !0
            }
            )
        }
        , 15)
    }
    function bl() {
        clearInterval(Io)
    }
    function wl(t, e) {
        let i;
        if (H(e, "li", "tr")) {
            i = y("<div>"),
            q(i, e.cloneNode(!0).children);
            for (const s of e.getAttributeNames())
                g(i, s, e.getAttribute(s))
        } else
            i = e.cloneNode(!0);
        return q(t, i),
        h(i, "margin", "0", "important"),
        h(i, {
            boxSizing: "border-box",
            width: e.offsetWidth,
            height: e.offsetHeight,
            padding: h(e, "padding")
        }),
        et(i.firstElementChild, et(e.firstElementChild)),
        i
    }
    function xl(t, e) {
        return t[wt(t, i => ii(e, m(i)))]
    }
    function $l(t, e, i, s, n, o) {
        if (!M(t).length)
            return;
        const r = m(e);
        if (!o)
            return yl(t, i) || n < r.top + r.height / 2 ? e : e.nextElementSibling;
        const a = m(i)
          , l = Eo([r.top, r.bottom], [a.top, a.bottom])
          , [c,u,f,d] = l ? [s, "width", "left", "right"] : [n, "height", "top", "bottom"]
          , p = a[u] < r[u] ? r[u] - a[u] : 0;
        return a[f] < r[f] ? p && c < r[f] + p ? !1 : e.nextElementSibling : p && c > r[d] - p ? !1 : e
    }
    function yl(t, e) {
        const i = M(t).length === 1;
        i && q(t, e);
        const s = M(t)
          , n = s.some( (o, r) => {
            const a = m(o);
            return s.slice(r + 1).some(l => {
                const c = m(l);
                return !Eo([a.left, a.right], [c.left, c.right])
            }
            )
        }
        );
        return i && ot(e),
        n
    }
    function Eo(t, e) {
        return t[1] > e[0] && e[1] > t[0]
    }
    function kl(t) {
        let e;
        return function(...i) {
            e || (e = !0,
            t.call(this, ...i),
            requestAnimationFrame( () => e = !1))
        }
    }
    var To = {
        props: {
            pos: String,
            offset: Boolean,
            flip: Boolean,
            shift: Boolean,
            inset: Boolean
        },
        data: {
            pos: `bottom-${U ? "right" : "left"}`,
            offset: !1,
            flip: !0,
            shift: !0,
            inset: !1
        },
        connected() {
            this.pos = this.$props.pos.split("-").concat("center").slice(0, 2),
            [this.dir,this.align] = this.pos,
            this.axis = v(["top", "bottom"], this.dir) ? "y" : "x"
        },
        methods: {
            positionAt(t, e, i) {
                let s = [this.getPositionOffset(t), this.getShiftOffset(t)];
                const n = [this.flip && "flip", this.shift && "shift"]
                  , o = {
                    element: [this.inset ? this.dir : gi(this.dir), this.align],
                    target: [this.dir, this.align]
                };
                if (this.axis === "y") {
                    for (const l in o)
                        o[l].reverse();
                    s.reverse(),
                    n.reverse()
                }
                const r = Co(t)
                  , a = m(t);
                h(t, {
                    top: -a.height,
                    left: -a.width
                }),
                mn(t, e, {
                    attach: o,
                    offset: s,
                    boundary: i,
                    placement: n,
                    viewportOffset: this.getViewportOffset(t)
                }),
                r()
            },
            getPositionOffset(t=this.$el) {
                return Y(this.offset === !1 ? h(t, "--bdt-position-offset") : this.offset, this.axis === "x" ? "width" : "height", t) * (v(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1)
            },
            getShiftOffset(t=this.$el) {
                return this.align === "center" ? 0 : Y(h(t, "--bdt-position-shift-offset"), this.axis === "y" ? "width" : "height", t) * (v(["left", "top"], this.align) ? 1 : -1)
            },
            getViewportOffset(t) {
                return Y(h(t, "--bdt-position-viewport-offset"))
            }
        }
    };
    function Co(t) {
        const e = Ot(t)
          , {scrollTop: i} = e;
        return () => {
            i !== e.scrollTop && (e.scrollTop = i)
        }
    }
    var Sl = {
        mixins: [je, qt, To],
        data: {
            pos: "top",
            animation: ["bdt-animation-scale-up"],
            duration: 100,
            cls: "bdt-active"
        },
        connected() {
            Il(this.$el)
        },
        disconnected() {
            this.hide()
        },
        methods: {
            show() {
                if (this.isToggled(this.tooltip || null))
                    return;
                const {delay: t=0, title: e} = Tl(this.$options);
                if (!e)
                    return;
                const i = g(this.$el, "title")
                  , s = $(this.$el, ["blur", oe], o => !dt(o) && this.hide());
                this.reset = () => {
                    g(this.$el, {
                        title: i,
                        "aria-describedby": null
                    }),
                    s()
                }
                ;
                const n = Yt(this);
                g(this.$el, {
                    title: null,
                    "aria-describedby": n
                }),
                clearTimeout(this.showTimer),
                this.showTimer = setTimeout( () => this._show(e, n), t)
            },
            async hide() {
                var t;
                C(this.$el, "input:focus") || (clearTimeout(this.showTimer),
                this.isToggled(this.tooltip || null) && await this.toggleElement(this.tooltip, !1, !1),
                (t = this.reset) == null || t.call(this),
                ot(this.tooltip),
                this.tooltip = null)
            },
            async _show(t, e) {
                this.tooltip = q(this.container, `<div id="${e}" class="bdt-${this.$options.name}" role="tooltip"> <div class="bdt-${this.$options.name}-inner">${t}</div> </div>`),
                $(this.tooltip, "toggled", (i, s) => {
                    if (!s)
                        return;
                    const n = () => this.positionAt(this.tooltip, this.$el);
                    n();
                    const [o,r] = El(this.tooltip, this.$el, this.pos);
                    this.origin = this.axis === "y" ? `${gi(o)}-${r}` : `${r}-${gi(o)}`;
                    const a = [F(document, `keydown ${ht}`, this.hide, !1, l => l.type === ht && !this.$el.contains(l.target) || l.type === "keydown" && l.keyCode === O.ESC), $([document, ...Rt(this.$el)], "scroll", n, {
                        passive: !0
                    })];
                    F(this.tooltip, "hide", () => a.forEach(l => l()), {
                        self: !0
                    })
                }
                ),
                await this.toggleElement(this.tooltip, !0) || this.hide()
            }
        },
        events: {
            [`focus ${Ht} ${ht}`](t) {
                (!dt(t) || t.type === ht) && this.show()
            }
        }
    };
    function Il(t) {
        ai(t) || g(t, "tabindex", "0")
    }
    function El(t, e, [i,s]) {
        const n = E(t)
          , o = E(e)
          , r = [["left", "right"], ["top", "bottom"]];
        for (const l of r) {
            if (n[l[0]] >= o[l[1]]) {
                i = l[1];
                break
            }
            if (n[l[1]] <= o[l[0]]) {
                i = l[0];
                break
            }
        }
        return s = (v(r[0], i) ? r[1] : r[0]).find(l => n[l] === o[l]) || "center",
        [i, s]
    }
    function Tl(t) {
        const {el: e, id: i, data: s} = t;
        return ["delay", "title"].reduce( (n, o) => ({
            [o]: J(e, o),
            ...n
        }), {
            ...he(J(e, i), ["title"]),
            ...s
        })
    }
    var Cl = {
        mixins: [Ei],
        i18n: {
            invalidMime: "Invalid File Type: %s",
            invalidName: "Invalid File Name: %s",
            invalidSize: "Invalid File Size: %s Kilobytes Max"
        },
        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
        },
        data: {
            allow: !1,
            clsDragover: "bdt-dragover",
            concurrent: 1,
            maxSize: 0,
            method: "POST",
            mime: !1,
            multiple: !1,
            name: "files[]",
            params: {},
            type: "",
            url: "",
            abort: A,
            beforeAll: A,
            beforeSend: A,
            complete: A,
            completeAll: A,
            error: A,
            fail: A,
            load: A,
            loadEnd: A,
            loadStart: A,
            progress: A
        },
        events: {
            change(t) {
                C(t.target, 'input[type="file"]') && (t.preventDefault(),
                t.target.files && this.upload(t.target.files),
                t.target.value = "")
            },
            drop(t) {
                Mi(t);
                const e = t.dataTransfer;
                e != null && e.files && (_(this.$el, this.clsDragover),
                this.upload(e.files))
            },
            dragenter(t) {
                Mi(t)
            },
            dragover(t) {
                Mi(t),
                S(this.$el, this.clsDragover)
            },
            dragleave(t) {
                Mi(t),
                _(this.$el, this.clsDragover)
            }
        },
        methods: {
            async upload(t) {
                if (t = Zt(t),
                !t.length)
                    return;
                b(this.$el, "upload", [t]);
                for (const s of t) {
                    if (this.maxSize && this.maxSize * 1e3 < s.size) {
                        this.fail(this.t("invalidSize", this.maxSize));
                        return
                    }
                    if (this.allow && !Po(this.allow, s.name)) {
                        this.fail(this.t("invalidName", this.allow));
                        return
                    }
                    if (this.mime && !Po(this.mime, s.type)) {
                        this.fail(this.t("invalidMime", this.mime));
                        return
                    }
                }
                this.multiple || (t = t.slice(0, 1)),
                this.beforeAll(this, t);
                const e = Pl(t, this.concurrent)
                  , i = async s => {
                    const n = new FormData;
                    s.forEach(o => n.append(this.name, o));
                    for (const o in this.params)
                        n.append(o, this.params[o]);
                    try {
                        const o = await _l(this.url, {
                            data: n,
                            method: this.method,
                            responseType: this.type,
                            beforeSend: r => {
                                const {xhr: a} = r;
                                $(a.upload, "progress", this.progress);
                                for (const l of ["loadStart", "load", "loadEnd", "abort"])
                                    $(a, l.toLowerCase(), this[l]);
                                return this.beforeSend(r)
                            }
                        });
                        this.complete(o),
                        e.length ? await i(e.shift()) : this.completeAll(o)
                    } catch (o) {
                        this.error(o)
                    }
                }
                ;
                await i(e.shift())
            }
        }
    };
    function Po(t, e) {
        return e.match(new RegExp(`^${t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}$`,"i"))
    }
    function Pl(t, e) {
        const i = [];
        for (let s = 0; s < t.length; s += e)
            i.push(t.slice(s, s + e));
        return i
    }
    function Mi(t) {
        t.preventDefault(),
        t.stopPropagation()
    }
    async function _l(t, e) {
        const i = {
            data: null,
            method: "GET",
            headers: {},
            xhr: new XMLHttpRequest,
            beforeSend: A,
            responseType: "",
            ...e
        };
        return await i.beforeSend(i),
        Al(t, i)
    }
    function Al(t, e) {
        return new Promise( (i, s) => {
            const {xhr: n} = e;
            for (const o in e)
                if (o in n)
                    try {
                        n[o] = e[o]
                    } catch {}
            n.open(e.method.toUpperCase(), t);
            for (const o in e.headers)
                n.setRequestHeader(o, e.headers[o]);
            $(n, "load", () => {
                n.status === 0 || n.status >= 200 && n.status < 300 || n.status === 304 ? i(n) : s(ft(Error(n.statusText), {
                    xhr: n,
                    status: n.status
                }))
            }
            ),
            $(n, "error", () => s(ft(Error("Network Error"), {
                xhr: n
            }))),
            $(n, "timeout", () => s(ft(Error("Network Timeout"), {
                xhr: n
            }))),
            n.send(e.data)
        }
        )
    }
    var Ol = Object.freeze({
        __proto__: null,
        Countdown: Rr,
        Filter: na,
        Lightbox: Ja,
        LightboxPanel: so,
        Notification: Qa,
        Parallax: al,
        Slider: ul,
        SliderParallax: yo,
        Slideshow: gl,
        SlideshowParallax: yo,
        Sortable: ml,
        Tooltip: Sl,
        Upload: Cl
    });
    function Dl(t) {
        Ft && window.MutationObserver && (document.body ? requestAnimationFrame( () => _o(t)) : new MutationObserver( (e, i) => {
            document.body && (_o(t),
            i.disconnect())
        }
        ).observe(document.documentElement, {
            childList: !0
        }))
    }
    function _o(t) {
        b(document, "uikit:init", t),
        document.body && _t(document.body, Ao),
        new MutationObserver(e => e.forEach(Ml)).observe(document, {
            subtree: !0,
            childList: !0
        }),
        new MutationObserver(e => e.forEach(Bl)).observe(document, {
            subtree: !0,
            attributes: !0
        }),
        t._initialized = !0
    }
    function Ml({addedNodes: t, removedNodes: e}) {
        for (const i of t)
            _t(i, Ao);
        for (const i of e)
            _t(i, Nl)
    }
    function Bl({target: t, attributeName: e}) {
        var i;
        const s = Oo(e);
        s && (It(t, e) ? Ue(s, t) : (i = Ti(t, s)) == null || i.$destroy())
    }
    function Ao(t) {
        const e = Ve(t);
        for (const i in e)
            Ts(e[i]);
        for (const i of t.getAttributeNames()) {
            const s = Oo(i);
            s && Ue(s, t)
        }
    }
    function Nl(t) {
        const e = Ve(t);
        for (const i in e)
            Cs(e[i])
    }
    function Oo(t) {
        gt(t, "data-") && (t = t.slice(5));
        const e = pe[t];
        return e && (e.options || e).name
    }
    Ra(lt),
    qa(lt);
    var Do = {
        mixins: [it, qt],
        props: {
            animation: Boolean,
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            offset: Number
        },
        data: {
            targets: "> *",
            active: !1,
            animation: !0,
            collapsible: !0,
            multiple: !1,
            clsOpen: "bdt-open",
            toggle: "> .bdt-accordion-title",
            content: "> .bdt-accordion-content",
            offset: 0
        },
        computed: {
            items: ({targets: t}, e) => N(t, e),
            toggles({toggle: t}) {
                return this.items.map(e => y(t, e))
            },
            contents({content: t}) {
                return this.items.map(e => {
                    var i;
                    return ((i = e._wrapper) == null ? void 0 : i.firstElementChild) || y(t, e)
                }
                )
            }
        },
        watch: {
            items(t, e) {
                if (e || x(t, this.clsOpen))
                    return;
                const i = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
                i && this.toggle(i, !1)
            },
            toggles() {
                this.$emit()
            },
            contents(t) {
                for (const e of t) {
                    const i = x(this.items.find(s => s.contains(e)), this.clsOpen);
                    Bi(e, !i)
                }
                this.$emit()
            }
        },
        observe: Si(),
        events: [{
            name: "click keydown",
            delegate: ({targets: t, $props: e}) => `${t} ${e.toggle}`,
            async handler(t) {
                var e;
                t.type === "keydown" && t.keyCode !== O.SPACE || (t.preventDefault(),
                (e = this._off) == null || e.call(this),
                this._off = Fl(t.target),
                await this.toggle($t(this.toggles, t.current)),
                this._off())
            }
        }, {
            name: "shown hidden",
            self: !0,
            delegate: ({targets: t}) => t,
            handler() {
                this.$emit()
            }
        }],
        update() {
            const t = Pe(this.items, `.${this.clsOpen}`);
            for (const e in this.items) {
                const i = this.toggles[e]
                  , s = this.contents[e];
                if (!i || !s)
                    continue;
                i.id = Yt(this, i),
                s.id = Yt(this, s);
                const n = v(t, this.items[e]);
                g(i, {
                    role: H(i, "a") ? "button" : null,
                    "aria-controls": s.id,
                    "aria-expanded": n,
                    "aria-disabled": !this.collapsible && t.length < 2 && n
                }),
                g(s, {
                    role: "region",
                    "aria-labelledby": i.id
                }),
                H(s, "ul") && g(M(s), "role", "presentation")
            }
        },
        methods: {
            toggle(t, e) {
                t = this.items[nt(t, this.items)];
                let i = [t];
                const s = Pe(this.items, `.${this.clsOpen}`);
                if (!this.multiple && !v(s, i[0]) && (i = i.concat(s)),
                !(!this.collapsible && s.length < 2 && v(s, t)))
                    return Promise.all(i.map(n => this.toggleElement(n, !v(s, n), (o, r) => {
                        if (j(o, this.clsOpen, r),
                        e === !1 || !this.animation) {
                            Bi(y(this.content, o), !r);
                            return
                        }
                        return zl(o, r, this)
                    }
                    )))
            }
        }
    };
    function Bi(t, e) {
        t && (t.hidden = e)
    }
    async function zl(t, e, {content: i, duration: s, velocity: n, transition: o}) {
        var r;
        i = ((r = t._wrapper) == null ? void 0 : r.firstElementChild) || y(i, t),
        t._wrapper || (t._wrapper = di(i, "<div>"));
        const a = t._wrapper;
        h(a, "overflow", "hidden");
        const l = k(h(a, "height"));
        await B.cancel(a),
        Bi(i, !1);
        const c = Nt(["marginTop", "marginBottom"], f => h(i, f)) + m(i).height
          , u = l / c;
        s = (n * c + s) * (e ? 1 - u : u),
        h(a, "height", l),
        await B.start(a, {
            height: e ? c : 0
        }, s, o),
        Me(i),
        delete t._wrapper,
        e || Bi(i, !0)
    }
    function Fl(t) {
        const e = Ot(t, !0);
        let i;
        return function s() {
            i = requestAnimationFrame( () => {
                const {top: n} = m(t);
                n < 0 && (e.scrollTop += n),
                s()
            }
            )
        }(),
        () => requestAnimationFrame( () => cancelAnimationFrame(i))
    }
    var Hl = {
        mixins: [it, qt],
        args: "animation",
        props: {
            animation: Boolean,
            close: String
        },
        data: {
            animation: !0,
            selClose: ".bdt-alert-close",
            duration: 150
        },
        events: {
            name: "click",
            delegate: ({selClose: t}) => t,
            handler(t) {
                t.preventDefault(),
                this.close()
            }
        },
        methods: {
            async close() {
                await this.toggleElement(this.$el, !1, Ll),
                this.$destroy(!0)
            }
        }
    };
    function Ll(t, e, {duration: i, transition: s, velocity: n}) {
        const o = k(h(t, "height"));
        return h(t, "height", o),
        B.start(t, {
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0,
            borderTop: 0,
            borderBottom: 0,
            opacity: 0
        }, n * o + i, s)
    }
    var Mo = {
        args: "autoplay",
        props: {
            automute: Boolean,
            autoplay: Boolean
        },
        data: {
            automute: !1,
            autoplay: !0
        },
        beforeConnect() {
            this.autoplay === "inview" && !It(this.$el, "preload") && (this.$el.preload = "none"),
            H(this.$el, "iframe") && !It(this.$el, "allow") && (this.$el.allow = "autoplay"),
            this.autoplay === "hover" && (H(this.$el, "video") ? this.$el.tabindex = 0 : this.autoplay = !0),
            this.automute && cn(this.$el)
        },
        events: [{
            name: `${Ht} focusin`,
            filter: ({autoplay: t}) => v(t, "hover"),
            handler(t) {
                !dt(t) || !Wl(this.$el) ? ls(this.$el) : bi(this.$el)
            }
        }, {
            name: `${oe} focusout`,
            filter: ({autoplay: t}) => v(t, "hover"),
            handler(t) {
                dt(t) || bi(this.$el)
            }
        }],
        observe: [ue({
            filter: ({$el: t, autoplay: e}) => e && e !== "hover" && hn(t),
            handler([{isIntersecting: t}]) {
                document.fullscreenElement || (t ? ls(this.$el) : bi(this.$el))
            },
            args: {
                intersecting: !1
            },
            options: ({$el: t, autoplay: e}) => ({
                root: e === "inview" ? null : D(t)
            })
        })]
    };
    function Wl(t) {
        return !t.paused && !t.ended
    }
    var jl = {
        mixins: [Mo],
        props: {
            width: Number,
            height: Number
        },
        data: {
            automute: !0
        },
        created() {
            this.useObjectFit = H(this.$el, "img", "video")
        },
        observe: ut({
            target: ({$el: t}) => Bo(t) || D(t),
            filter: ({useObjectFit: t}) => !t
        }),
        update: {
            read() {
                if (this.useObjectFit)
                    return !1;
                const {ratio: t, cover: e} = Ui
                  , {$el: i, width: s, height: n} = this;
                let o = {
                    width: s,
                    height: n
                };
                if (!s || !n) {
                    const c = {
                        width: i.naturalWidth || i.videoWidth || i.clientWidth,
                        height: i.naturalHeight || i.videoHeight || i.clientHeight
                    };
                    s ? o = t(c, "width", s) : n ? o = t(c, "height", n) : o = c
                }
                const {offsetHeight: r, offsetWidth: a} = Bo(i) || D(i)
                  , l = e(o, {
                    width: a,
                    height: r
                });
                return !l.width || !l.height ? !1 : l
            },
            write({height: t, width: e}) {
                h(this.$el, {
                    height: t,
                    width: e
                })
            },
            events: ["resize"]
        }
    };
    function Bo(t) {
        for (; t = D(t); )
            if (h(t, "position") !== "static")
                return t
    }
    let K;
    var No = {
        mixins: [je, To, qt],
        args: "pos",
        props: {
            mode: "list",
            toggle: Boolean,
            boundary: Boolean,
            boundaryX: Boolean,
            boundaryY: Boolean,
            target: Boolean,
            targetX: Boolean,
            targetY: Boolean,
            stretch: Boolean,
            delayShow: Number,
            delayHide: Number,
            autoUpdate: Boolean,
            clsDrop: String,
            animateOut: Boolean,
            bgScroll: Boolean,
            closeOnScroll: Boolean
        },
        data: {
            mode: ["click", "hover"],
            toggle: "- *",
            boundary: !1,
            boundaryX: !1,
            boundaryY: !1,
            target: !1,
            targetX: !1,
            targetY: !1,
            stretch: !1,
            delayShow: 0,
            delayHide: 800,
            autoUpdate: !0,
            clsDrop: !1,
            animateOut: !1,
            bgScroll: !0,
            animation: ["bdt-animation-fade"],
            cls: "bdt-open",
            container: !1,
            closeOnScroll: !1
        },
        computed: {
            boundary({boundary: t, boundaryX: e, boundaryY: i}, s) {
                return [Z(e || t, s) || window, Z(i || t, s) || window]
            },
            target({target: t, targetX: e, targetY: i}, s) {
                return e || (e = t || this.targetEl),
                i || (i = t || this.targetEl),
                [e === !0 ? window : Z(e, s), i === !0 ? window : Z(i, s)]
            }
        },
        created() {
            this.tracker = new rn
        },
        beforeConnect() {
            this.clsDrop = this.$props.clsDrop || this.$options.id
        },
        connected() {
            S(this.$el, "bdt-drop", this.clsDrop),
            this.toggle && !this.targetEl && (this.targetEl = ql(this)),
            this._style = Ri(this.$el.style, ["width", "height"])
        },
        disconnected() {
            this.isActive() && (this.hide(!1),
            K = null),
            h(this.$el, this._style)
        },
        events: [{
            name: "click",
            delegate: () => ".bdt-drop-close",
            handler(t) {
                t.preventDefault(),
                this.hide(!1)
            }
        }, {
            name: "click",
            delegate: () => 'a[href*="#"]',
            handler({defaultPrevented: t, current: e}) {
                const {hash: i} = e;
                !t && i && re(e) && !this.$el.contains(y(i)) && this.hide(!1)
            }
        }, {
            name: "beforescroll",
            handler() {
                this.hide(!1)
            }
        }, {
            name: "toggle",
            self: !0,
            handler(t, e) {
                t.preventDefault(),
                this.isToggled() ? this.hide(!1) : this.show(e == null ? void 0 : e.$el, !1)
            }
        }, {
            name: "toggleshow",
            self: !0,
            handler(t, e) {
                t.preventDefault(),
                this.show(e == null ? void 0 : e.$el)
            }
        }, {
            name: "togglehide",
            self: !0,
            handler(t) {
                t.preventDefault(),
                C(this.$el, ":focus,:hover") || this.hide()
            }
        }, {
            name: `${Ht} focusin`,
            filter: ({mode: t}) => v(t, "hover"),
            handler(t) {
                dt(t) || this.clearTimers()
            }
        }, {
            name: `${oe} focusout`,
            filter: ({mode: t}) => v(t, "hover"),
            handler(t) {
                !dt(t) && t.relatedTarget && this.hide()
            }
        }, {
            name: "toggled",
            self: !0,
            handler(t, e) {
                e && (this.clearTimers(),
                this.position())
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                K = this,
                this.tracker.init(),
                g(this.targetEl, "aria-expanded", !0);
                const t = [Ul(this), Vl(this), Gl(this), this.autoUpdate && zo(this), this.closeOnScroll && Yl(this)];
                F(this.$el, "hide", () => t.forEach(e => e && e()), {
                    self: !0
                }),
                this.bgScroll || F(this.$el, "hidden", Bn(this.$el), {
                    self: !0
                })
            }
        }, {
            name: "beforehide",
            self: !0,
            handler: "clearTimers"
        }, {
            name: "hide",
            handler({target: t}) {
                if (this.$el !== t) {
                    K = K === null && this.$el.contains(t) && this.isToggled() ? this : K;
                    return
                }
                K = this.isActive() ? null : K,
                this.tracker.cancel(),
                g(this.targetEl, "aria-expanded", null)
            }
        }],
        update: {
            write() {
                this.isToggled() && !x(this.$el, this.clsEnter) && this.position()
            }
        },
        methods: {
            show(t=this.targetEl, e=!0) {
                if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1),
                this.targetEl = t,
                this.clearTimers(),
                !this.isActive()) {
                    if (K) {
                        if (e && K.isDelaying()) {
                            this.showTimer = setTimeout( () => C(t, ":hover") && this.show(), 10);
                            return
                        }
                        let i;
                        for (; K && i !== K && !K.$el.contains(this.$el); )
                            i = K,
                            K.hide(!1, !1)
                    }
                    this.container && D(this.$el) !== this.container && q(this.container, this.$el),
                    this.showTimer = setTimeout( () => this.toggleElement(this.$el, !0), e && this.delayShow || 0)
                }
            },
            hide(t=!0, e=!0) {
                const i = () => this.toggleElement(this.$el, !1, this.animateOut && e);
                this.clearTimers(),
                this.isDelayedHide = t,
                t && this.isDelaying() ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i()
            },
            clearTimers() {
                clearTimeout(this.showTimer),
                clearTimeout(this.hideTimer),
                this.showTimer = null,
                this.hideTimer = null
            },
            isActive() {
                return K === this
            },
            isDelaying() {
                return [this.$el, ...N(".bdt-drop", this.$el)].some(t => this.tracker.movesTo(t))
            },
            position() {
                const t = Co(this.$el);
                _(this.$el, "bdt-drop-stack"),
                h(this.$el, this._style),
                this.$el.hidden = !0;
                const e = this.target.map(o => Rl(this.$el, o))
                  , i = this.getViewportOffset(this.$el)
                  , s = [[0, ["x", "width", "left", "right"]], [1, ["y", "height", "top", "bottom"]]];
                for (const [o,[r,a]] of s)
                    this.axis !== r && v([r, !0], this.stretch) && h(this.$el, {
                        [a]: Math.min(E(this.boundary[o])[a], e[o][a] - 2 * i),
                        [`overflow-${r}`]: "auto"
                    });
                const n = e[0].width - 2 * i;
                this.$el.hidden = !1,
                h(this.$el, "maxWidth", ""),
                this.$el.offsetWidth > n && S(this.$el, "bdt-drop-stack"),
                h(this.$el, "maxWidth", n),
                this.positionAt(this.$el, this.target, this.boundary);
                for (const [o,[r,a,l,c]] of s)
                    if (this.axis === r && v([r, !0], this.stretch)) {
                        const u = Math.abs(this.getPositionOffset())
                          , f = E(this.target[o])
                          , d = E(this.$el);
                        h(this.$el, {
                            [a]: (f[l] > d[l] ? f[this.inset ? c : l] - Math.max(E(this.boundary[o])[l], e[o][l] + i) : Math.min(E(this.boundary[o])[c], e[o][c] - i) - f[this.inset ? l : c]) - u,
                            [`overflow-${r}`]: "auto"
                        }),
                        this.positionAt(this.$el, this.target, this.boundary)
                    }
                t()
            }
        }
    };
    function Rl(t, e) {
        return rt(Rt(e).find(i => i.contains(t)))
    }
    function ql(t) {
        const {$el: e} = t.$create("toggle", Z(t.toggle, t.$el), {
            target: t.$el,
            mode: t.mode
        });
        return g(e, "aria-haspopup", !0),
        e
    }
    function Ul(t) {
        const e = () => t.$emit()
          , i = [rs(e), ze(Rt(t.$el).concat(t.target), e)];
        return () => i.map(s => s.disconnect())
    }
    function zo(t, e= () => t.$emit()) {
        return $([document, ...Rt(t.$el)], "scroll", e, {
            passive: !0
        })
    }
    function Vl(t) {
        return $(document, "keydown", e => {
            e.keyCode === O.ESC && t.hide(!1)
        }
        )
    }
    function Yl(t) {
        return zo(t, () => t.hide(!1))
    }
    function Gl(t) {
        return $(document, ht, ({target: e}) => {
            t.$el.contains(e) || F(document, `${Et} ${oi} scroll`, ({defaultPrevented: i, type: s, target: n}) => {
                var o;
                !i && s === Et && e === n && !((o = t.targetEl) != null && o.contains(e)) && t.hide(!1)
            }
            , !0)
        }
        )
    }
    var Fo = {
        mixins: [it, je],
        props: {
            align: String,
            clsDrop: String,
            boundary: Boolean,
            dropbar: Boolean,
            dropbarAnchor: Boolean,
            duration: Number,
            mode: Boolean,
            offset: Boolean,
            stretch: Boolean,
            delayShow: Boolean,
            delayHide: Boolean,
            target: Boolean,
            targetX: Boolean,
            targetY: Boolean,
            animation: Boolean,
            animateOut: Boolean,
            closeOnScroll: Boolean
        },
        data: {
            align: U ? "right" : "left",
            clsDrop: "bdt-dropdown",
            clsDropbar: "bdt-dropnav-dropbar",
            boundary: !0,
            dropbar: !1,
            dropbarAnchor: !1,
            duration: 200,
            container: !1,
            selNavItem: "> li > a, > ul > li > a"
        },
        computed: {
            dropbarAnchor: ({dropbarAnchor: t}, e) => Z(t, e) || e,
            dropbar({dropbar: t}) {
                return t ? (t = this._dropbar || Z(t, this.$el) || y(`+ .${this.clsDropbar}`, this.$el),
                t || (this._dropbar = y("<div></div>"))) : null
            },
            dropContainer(t, e) {
                return this.container || e
            },
            dropdowns({clsDrop: t}, e) {
                var i;
                const s = N(`.${t}`, e);
                if (this.dropContainer !== e)
                    for (const n of N(`.${t}`, this.dropContainer)) {
                        const o = (i = this.getDropdown(n)) == null ? void 0 : i.targetEl;
                        !v(s, n) && o && this.$el.contains(o) && s.push(n)
                    }
                return s
            },
            items({selNavItem: t}, e) {
                return N(t, e)
            }
        },
        watch: {
            dropbar(t) {
                S(t, "bdt-dropbar", "bdt-dropbar-top", this.clsDropbar, `bdt-${this.$options.name}-dropbar`)
            },
            dropdowns() {
                this.initializeDropdowns()
            }
        },
        connected() {
            this.initializeDropdowns()
        },
        disconnected() {
            ot(this._dropbar),
            delete this._dropbar
        },
        events: [{
            name: "mouseover focusin",
            delegate: ({selNavItem: t}) => t,
            handler({current: t}) {
                const e = this.getActive();
                e && v(e.mode, "hover") && e.targetEl && !t.contains(e.targetEl) && !e.isDelaying() && e.hide(!1)
            }
        }, {
            name: "keydown",
            self: !0,
            delegate: ({selNavItem: t}) => t,
            handler(t) {
                var e;
                const {current: i, keyCode: s} = t
                  , n = this.getActive();
                s === O.DOWN && (n == null ? void 0 : n.targetEl) === i && (t.preventDefault(),
                (e = y(Ce, n.$el)) == null || e.focus()),
                Ho(t, this.items, n)
            }
        }, {
            name: "keydown",
            el: ({dropContainer: t}) => t,
            delegate: ({clsDrop: t}) => `.${t}`,
            handler(t) {
                var e;
                const {current: i, keyCode: s, target: n} = t;
                if (ri(n) || !v(this.dropdowns, i))
                    return;
                const o = this.getActive();
                let r = -1;
                if (s === O.HOME ? r = 0 : s === O.END ? r = "last" : s === O.UP ? r = "previous" : s === O.DOWN ? r = "next" : s === O.ESC && ((e = o.targetEl) == null || e.focus()),
                ~r) {
                    t.preventDefault();
                    const a = N(Ce, i);
                    a[nt(r, a, wt(a, l => C(l, ":focus")))].focus()
                }
                Ho(t, this.items, o)
            }
        }, {
            name: "mouseleave",
            el: ({dropbar: t}) => t,
            filter: ({dropbar: t}) => t,
            handler() {
                const t = this.getActive();
                t && v(t.mode, "hover") && !this.dropdowns.some(e => C(e, ":hover")) && t.hide()
            }
        }, {
            name: "beforeshow",
            el: ({dropContainer: t}) => t,
            filter: ({dropbar: t}) => t,
            handler({target: t}) {
                this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && ui(this.dropbarAnchor, this.dropbar),
                S(t, `${this.clsDrop}-dropbar`))
            }
        }, {
            name: "show",
            el: ({dropContainer: t}) => t,
            filter: ({dropbar: t}) => t,
            handler({target: t}) {
                if (!this.isDropbarDrop(t))
                    return;
                const e = this.getDropdown(t)
                  , i = () => {
                    const s = Math.max(..._e(t, `.${this.clsDrop}`).concat(t).map(n => E(n).bottom));
                    E(this.dropbar, {
                        left: E(this.dropbar).left,
                        top: this.getDropbarOffset(e.getPositionOffset())
                    }),
                    this.transitionTo(s - E(this.dropbar).top + k(h(t, "marginBottom")), t)
                }
                ;
                this._observer = ze([e.$el, ...e.target], i),
                i()
            }
        }, {
            name: "beforehide",
            el: ({dropContainer: t}) => t,
            filter: ({dropbar: t}) => t,
            handler(t) {
                const e = this.getActive();
                C(this.dropbar, ":hover") && e.$el === t.target && this.isDropbarDrop(e.$el) && v(e.mode, "hover") && e.isDelayedHide && !this.items.some(i => e.targetEl !== i && C(i, ":focus")) && t.preventDefault()
            }
        }, {
            name: "hide",
            el: ({dropContainer: t}) => t,
            filter: ({dropbar: t}) => t,
            handler({target: t}) {
                var e;
                if (!this.isDropbarDrop(t))
                    return;
                (e = this._observer) == null || e.disconnect();
                const i = this.getActive();
                (!i || i.$el === t) && this.transitionTo(0)
            }
        }],
        methods: {
            getActive() {
                var t;
                return v(this.dropdowns, (t = K) == null ? void 0 : t.$el) && K
            },
            async transitionTo(t, e) {
                const {dropbar: i} = this
                  , s = et(i);
                if (e = s < t && e,
                await B.cancel([e, i]),
                e) {
                    const n = E(e).top - E(i).top - s;
                    n > 0 && h(e, "transitionDelay", `${n / t * this.duration}ms`)
                }
                h(e, "clipPath", `polygon(0 0,100% 0,100% ${s}px,0 ${s}px)`),
                et(i, s),
                await Promise.all([B.start(i, {
                    height: t
                }, this.duration), B.start(e, {
                    clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)`
                }, this.duration).finally( () => h(e, {
                    clipPath: "",
                    transitionDelay: ""
                }))]).catch(A)
            },
            getDropdown(t) {
                return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
            },
            isDropbarDrop(t) {
                return v(this.dropdowns, t) && x(t, this.clsDrop)
            },
            getDropbarOffset(t) {
                const {$el: e, target: i, targetY: s} = this
                  , {top: n, height: o} = E(Z(s || i || e, e));
                return n + o + t
            },
            initializeDropdowns() {
                this.$create("drop", this.dropdowns.filter(t => !this.getDropdown(t)), {
                    ...this.$props,
                    flip: !1,
                    shift: !0,
                    pos: `bottom-${this.align}`,
                    boundary: this.boundary === !0 ? this.$el : this.boundary
                })
            }
        }
    };
    function Ho(t, e, i) {
        var s, n, o;
        const {current: r, keyCode: a} = t;
        let l = -1;
        a === O.HOME ? l = 0 : a === O.END ? l = "last" : a === O.LEFT ? l = "previous" : a === O.RIGHT ? l = "next" : a === O.TAB && ((s = i.targetEl) == null || s.focus(),
        (n = i.hide) == null || n.call(i, !1)),
        ~l && (t.preventDefault(),
        (o = i.hide) == null || o.call(i, !1),
        e[nt(l, e, e.indexOf(i.targetEl || r))].focus())
    }
    var Xl = {
        mixins: [it],
        args: "target",
        props: {
            target: Boolean
        },
        data: {
            target: !1
        },
        computed: {
            input: (t, e) => y(Te, e),
            state() {
                return this.input.nextElementSibling
            },
            target({target: t}, e) {
                return t && (t === !0 && D(this.input) === e && this.input.nextElementSibling || y(t, e))
            }
        },
        update() {
            var t;
            const {target: e, input: i} = this;
            if (!e)
                return;
            let s;
            const n = ri(e) ? "value" : "textContent"
              , o = e[n]
              , r = (t = i.files) != null && t[0] ? i.files[0].name : C(i, "select") && (s = N("option", i).filter(a => a.selected)[0]) ? s.textContent : i.value;
            o !== r && (e[n] = r)
        },
        events: [{
            name: "change",
            handler() {
                this.$emit()
            }
        }, {
            name: "reset",
            el: ({$el: t}) => t.closest("form"),
            handler() {
                this.$emit()
            }
        }]
    }
      , Jl = {
        extends: En,
        mixins: [it],
        name: "grid",
        props: {
            masonry: Boolean,
            parallax: String,
            parallaxStart: String,
            parallaxEnd: String,
            parallaxJustify: Boolean
        },
        data: {
            margin: "bdt-grid-margin",
            clsStack: "bdt-grid-stack",
            masonry: !1,
            parallax: 0,
            parallaxStart: 0,
            parallaxEnd: 0,
            parallaxJustify: !1
        },
        connected() {
            this.masonry && S(this.$el, "bdt-flex-top", "bdt-flex-wrap-top")
        },
        observe: Le({
            filter: ({parallax: t, parallaxJustify: e}) => t || e
        }),
        update: [{
            write({rows: t}) {
                j(this.$el, this.clsStack, !t.some(e => e.length > 1))
            },
            events: ["resize"]
        }, {
            read(t) {
                const {rows: e} = t;
                let {masonry: i, parallax: s, parallaxJustify: n, margin: o} = this;
                if (s = Math.max(0, Y(s)),
                !(i || s || n) || Lo(e) || e[0].some( (w, I) => e.some(P => P[I] && P[I].offsetWidth !== w.offsetWidth)))
                    return t.translates = t.scrollColumns = !1;
                let r = Ql(e, o), a, l;
                i ? [a,l] = Kl(e, r, i === "next") : a = Zl(e);
                const c = a.map(w => Nt(w, "offsetHeight") + r * (w.length - 1))
                  , u = Math.max(0, ...c);
                let f, d, p;
                return (s || n) && (f = c.map( (w, I) => n ? u - w + s : s / (I % 2 || 8)),
                n || (s = Math.max(...c.map( (w, I) => w + f[I] - u))),
                d = Y(this.parallaxStart, "height", this.$el, !0),
                p = Y(this.parallaxEnd, "height", this.$el, !0)),
                {
                    columns: a,
                    translates: l,
                    scrollColumns: f,
                    parallaxStart: d,
                    parallaxEnd: p,
                    padding: s,
                    height: l ? u : ""
                }
            },
            write({height: t, padding: e}) {
                h(this.$el, "paddingBottom", e || ""),
                t !== !1 && h(this.$el, "height", t)
            },
            events: ["resize"]
        }, {
            read({rows: t, scrollColumns: e, parallaxStart: i, parallaxEnd: s}) {
                return {
                    scrolled: e && !Lo(t) ? $i(this.$el, i, s) : !1
                }
            },
            write({columns: t, scrolled: e, scrollColumns: i, translates: s}) {
                !e && !s || t.forEach( (n, o) => n.forEach( (r, a) => {
                    let[l,c] = s && s[o][a] || [0, 0];
                    e && (c += e * i[o]),
                    h(r, "transform", `translate(${l}px, ${c}px)`)
                }
                ))
            },
            events: ["scroll", "resize"]
        }]
    };
    function Lo(t) {
        return t.flat().some(e => h(e, "position") === "absolute")
    }
    function Kl(t, e, i) {
        const s = []
          , n = []
          , o = Array(t[0].length).fill(0);
        let r = 0;
        for (let a of t) {
            U && (a = a.reverse());
            let l = 0;
            for (const c in a) {
                const {offsetWidth: u, offsetHeight: f} = a[c]
                  , d = i ? c : o.indexOf(Math.min(...o));
                As(s, d, a[c]),
                As(n, d, [(d - c) * u * (U ? -1 : 1), o[d] - r]),
                o[d] += f + e,
                l = Math.max(l, f)
            }
            r += l + e
        }
        return [s, n]
    }
    function Ql(t, e) {
        const i = t.flat().find(s => x(s, e));
        return k(i ? h(i, "marginTop") : h(t[0][0], "paddingLeft"))
    }
    function Zl(t) {
        const e = [];
        for (const i of t)
            for (const s in i)
                As(e, s, i[s]);
        return e
    }
    function As(t, e, i) {
        t[e] || (t[e] = []),
        t[e].push(i)
    }
    var tc = {
        args: "target",
        props: {
            target: String,
            row: Boolean
        },
        data: {
            target: "> *",
            row: !0
        },
        computed: {
            elements: ({target: t}, e) => N(t, e)
        },
        observe: ut({
            target: ({$el: t, elements: e}) => e.reduce( (i, s) => i.concat(s, ...s.children), [t])
        }),
        events: {
            name: "loadingdone",
            el: () => document.fonts,
            handler() {
                this.$emit("resize")
            }
        },
        update: {
            read() {
                return {
                    rows: (this.row ? bs(this.elements) : [this.elements]).map(ec)
                }
            },
            write({rows: t}) {
                for (const {heights: e, elements: i} of t)
                    i.forEach( (s, n) => h(s, "minHeight", e[n]))
            },
            events: ["resize"]
        }
    };
    function ec(t) {
        if (t.length < 2)
            return {
                heights: [""],
                elements: t
            };
        let e = t.map(ic);
        const i = Math.max(...e);
        return {
            heights: t.map( (s, n) => e[n].toFixed(2) === i.toFixed(2) ? "" : i),
            elements: t
        }
    }
    function ic(t) {
        const e = Ri(t.style, ["display", "minHeight"]);
        R(t) || h(t, "display", "block", "important"),
        h(t, "minHeight", "");
        const i = m(t).height - le(t, "height", "content-box");
        return h(t, e),
        i
    }
    var sc = {
        args: "target",
        props: {
            target: String
        },
        data: {
            target: ""
        },
        computed: {
            target: {
                get: ({target: t}, e) => Z(t, e),
                observe: ({target: t}) => t
            }
        },
        observe: ut({
            target: ({target: t}) => t
        }),
        update: {
            read() {
                return this.target ? {
                    height: this.target.offsetHeight
                } : !1
            },
            write({height: t}) {
                h(this.$el, {
                    minHeight: t
                })
            },
            events: ["resize"]
        }
    }
      , nc = {
        props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean,
            minHeight: Number
        },
        data: {
            expand: !1,
            offsetTop: !1,
            offsetBottom: !1,
            minHeight: 0
        },
        observe: [vs({
            filter: ({expand: t}) => t
        }), ut({
            target: ({$el: t}) => jt(t)
        })],
        update: {
            read() {
                if (!R(this.$el))
                    return !1;
                let t = "";
                const e = le(this.$el, "height", "content-box")
                  , {body: i, scrollingElement: s} = document
                  , n = Ot(this.$el)
                  , {height: o} = rt(n === i ? s : n)
                  , r = s === n || i === n;
                if (t = `calc(${r ? "100vh" : `${o}px`}`,
                this.expand) {
                    const a = m(n).height - m(this.$el).height;
                    t += ` - ${a}px`
                } else {
                    if (this.offsetTop)
                        if (r) {
                            const a = this.offsetTop === !0 ? this.$el : Z(this.offsetTop, this.$el)
                              , {top: l} = E(a);
                            t += l > 0 && l < o / 2 ? ` - ${l}px` : ""
                        } else
                            t += ` - ${le(n, "height", h(n, "boxSizing"))}px`;
                    this.offsetBottom === !0 ? t += ` - ${m(this.$el.nextElementSibling).height}px` : mt(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && Qt(this.offsetBottom, "px") ? t += ` - ${k(this.offsetBottom)}px` : z(this.offsetBottom) && (t += ` - ${m(Z(this.offsetBottom, this.$el)).height}px`)
                }
                return t += `${e ? ` - ${e}px` : ""})`,
                {
                    minHeight: t
                }
            },
            write({minHeight: t}) {
                h(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`)
            },
            events: ["resize"]
        }
    }
      , oc = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>'
      , rc = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>'
      , ac = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>'
      , lc = '<svg width="20" height="20" viewBox="0 0 20 20"><rect width="1" height="11" x="9" y="4"/><rect width="11" height="1" x="4" y="9"/></svg>'
      , cc = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>'
      , hc = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>'
      , uc = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>'
      , fc = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.bdt-navbar-toggle-icon svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.bdt-navbar-toggle-icon svg&gt;.line-3{opacity:0}.bdt-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.bdt-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.bdt-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.bdt-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.bdt-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.bdt-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.bdt-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect width="20" height="2" y="3" class="line-1"/><rect width="20" height="2" y="9" class="line-2"/><rect width="20" height="2" y="9" class="line-3"/><rect width="20" height="2" y="15" class="line-4"/></svg>'
      , dc = '<svg width="40" height="40" viewBox="0 0 40 40"><rect width="1" height="40" x="19" y="0"/><rect width="40" height="1" x="0" y="19"/></svg>'
      , pc = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>'
      , gc = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>'
      , Wo = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>'
      , mc = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>'
      , vc = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>'
      , bc = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>'
      , wc = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>'
      , xc = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>'
      , $c = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>'
      , yc = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>'
      , kc = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>'
      , jo = {
        args: "src",
        props: {
            width: Number,
            height: Number,
            ratio: Number
        },
        data: {
            ratio: 1
        },
        connected() {
            this.svg = this.getSvg().then(t => {
                if (!this._connected)
                    return;
                const e = Sc(t, this.$el);
                return this.svgEl && e !== this.svgEl && ot(this.svgEl),
                Ic.call(this, e, t),
                this.svgEl = e
            }
            , A)
        },
        disconnected() {
            this.svg.then(t => {
                this._connected || (Vi(this.$el) && (this.$el.hidden = !1),
                ot(t),
                this.svgEl = null)
            }
            ),
            this.svg = null
        },
        methods: {
            async getSvg() {}
        }
    };
    function Sc(t, e) {
        if (Vi(e) || H(e, "canvas")) {
            e.hidden = !0;
            const s = e.nextElementSibling;
            return Ro(t, s) ? s : ui(e, t)
        }
        const i = e.lastElementChild;
        return Ro(t, i) ? i : q(e, t)
    }
    function Ro(t, e) {
        return H(t, "svg") && H(e, "svg") && t.innerHTML === e.innerHTML
    }
    function Ic(t, e) {
        const i = ["width", "height"];
        let s = i.map(o => this[o]);
        s.some(o => o) || (s = i.map(o => g(e, o)));
        const n = g(e, "viewBox");
        n && !s.some(o => o) && (s = n.split(" ").slice(2)),
        s.forEach( (o, r) => g(t, i[r], k(o) * this.ratio || null))
    }
    var Ec = {
        mixins: [jo],
        args: "src",
        props: {
            src: String,
            icon: String,
            attributes: "list",
            strokeAnimation: Boolean
        },
        data: {
            strokeAnimation: !1
        },
        observe: [ki({
            async handler() {
                const t = await this.svg;
                t && qo.call(this, t)
            },
            options: {
                attributes: !0,
                attributeFilter: ["id", "class", "style"]
            }
        })],
        async connected() {
            v(this.src, "#") && ([this.src,this.icon] = this.src.split("#"));
            const t = await this.svg;
            t && (qo.call(this, t),
            this.strokeAnimation && _c(t))
        },
        methods: {
            async getSvg() {
                return H(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" && await new Promise(t => F(this.$el, "load", t)),
                Cc(await Tc(this.src), this.icon) || Promise.reject("SVG not found.")
            }
        }
    };
    function qo(t) {
        const {$el: e} = this;
        S(t, g(e, "class"), "bdt-svg");
        for (let i = 0; i < e.style.length; i++) {
            const s = e.style[i];
            h(t, s, h(e, s))
        }
        for (const i in this.attributes) {
            const [s,n] = this.attributes[i].split(":", 2);
            g(t, s, n)
        }
        this.$el.id || Ee(t, "id")
    }
    const Tc = ct(async t => t ? gt(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
    function Cc(t, e) {
        return e && v(t, "<symbol") && (t = Pc(t)[e] || t),
        Vo(t)
    }
    const Uo = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g
      , Pc = ct(function(t) {
        const e = {};
        Uo.lastIndex = 0;
        let i;
        for (; i = Uo.exec(t); )
            e[i[3]] = `<svg ${i[1]}svg>`;
        return e
    });
    function _c(t) {
        const e = oo(t);
        e && h(t, "--bdt-animation-stroke", e)
    }
    function Vo(t) {
        const e = document.createElement("template");
        return e.innerHTML = t,
        e.content.firstElementChild
    }
    const Ni = {
        spinner: yc,
        totop: kc,
        marker: lc,
        "close-icon": oc,
        "close-large": rc,
        "drop-parent-icon": ac,
        "nav-parent-icon": hc,
        "nav-parent-icon-large": cc,
        "navbar-parent-icon": uc,
        "navbar-toggle-icon": fc,
        "overlay-icon": dc,
        "pagination-next": pc,
        "pagination-previous": gc,
        "search-icon": Wo,
        "search-medium": vc,
        "search-large": mc,
        "search-toggle-icon": Wo,
        "slidenav-next": wc,
        "slidenav-next-large": bc,
        "slidenav-previous": $c,
        "slidenav-previous-large": xc
    }
      , Os = {
        install: Lc,
        mixins: [jo],
        args: "icon",
        props: {
            icon: String
        },
        isIcon: !0,
        beforeConnect() {
            S(this.$el, "bdt-icon")
        },
        methods: {
            async getSvg() {
                const t = jc(this.icon);
                if (!t)
                    throw "Icon not found.";
                return t
            }
        }
    }
      , Xt = {
        args: !1,
        extends: Os,
        data: t => ({
            icon: Dt(t.constructor.options.name)
        }),
        beforeConnect() {
            S(this.$el, this.$options.id)
        }
    }
      , Ac = {
        extends: Xt,
        beforeConnect() {
            const t = this.$props.icon;
            this.icon = this.$el.closest(".bdt-nav-primary") ? `${t}-large` : t
        }
    }
      , Oc = {
        extends: Xt,
        mixins: [Ei],
        i18n: {
            toggle: "Open Search",
            submit: "Submit Search"
        },
        beforeConnect() {
            const t = x(this.$el, "bdt-search-toggle") || x(this.$el, "bdt-navbar-toggle");
            if (this.icon = t ? "search-toggle-icon" : x(this.$el, "bdt-search-icon") && this.$el.closest(".bdt-search-large") ? "search-large" : this.$el.closest(".bdt-search-medium") ? "search-medium" : this.$props.icon,
            !It(this.$el, "aria-label"))
                if (t) {
                    const e = this.t("toggle");
                    g(this.$el, "aria-label", e)
                } else {
                    const e = this.$el.closest("a,button");
                    if (e) {
                        const i = this.t("submit");
                        g(e, "aria-label", i)
                    }
                }
        }
    }
      , Dc = {
        extends: Xt,
        beforeConnect() {
            g(this.$el, "role", "status")
        },
        methods: {
            async getSvg() {
                const t = await Os.methods.getSvg.call(this);
                return this.ratio !== 1 && h(y("circle", t), "strokeWidth", 1 / this.ratio),
                t
            }
        }
    }
      , Jt = {
        extends: Xt,
        mixins: [Ei],
        beforeConnect() {
            const t = this.$el.closest("a,button");
            g(t, "role", this.role !== null && H(t, "a") ? "button" : this.role);
            const e = this.t("label");
            e && !It(t, "aria-label") && g(t, "aria-label", e)
        }
    }
      , Yo = {
        extends: Jt,
        beforeConnect() {
            S(this.$el, "bdt-slidenav");
            const t = this.$props.icon;
            this.icon = x(this.$el, "bdt-slidenav-large") ? `${t}-large` : t
        }
    }
      , Mc = {
        extends: Jt,
        i18n: {
            label: "Open menu"
        }
    }
      , Bc = {
        extends: Jt,
        i18n: {
            label: "Close"
        },
        beforeConnect() {
            this.icon = `close-${x(this.$el, "bdt-close-large") ? "large" : "icon"}`
        }
    }
      , Nc = {
        extends: Jt,
        i18n: {
            label: "Open"
        }
    }
      , zc = {
        extends: Jt,
        i18n: {
            label: "Back to top"
        }
    }
      , Fc = {
        extends: Jt,
        i18n: {
            label: "Next page"
        },
        data: {
            role: null
        }
    }
      , Hc = {
        extends: Jt,
        i18n: {
            label: "Previous page"
        },
        data: {
            role: null
        }
    }
      , zi = {};
    function Lc(t) {
        t.icon.add = (e, i) => {
            const s = z(e) ? {
                [e]: i
            } : e;
            ie(s, (n, o) => {
                Ni[o] = n,
                delete zi[o]
            }
            ),
            t._initialized && _t(document.body, n => ie(t.getComponents(n), o => {
                o.$options.isIcon && o.icon in s && o.$reset()
            }
            ))
        }
    }
    const Wc = {
        twitter: "x"
    };
    function jc(t) {
        return t = Wc[t] || t,
        Ni[t] ? (zi[t] || (zi[t] = Vo(Ni[Rc(t)] || Ni[t])),
        zi[t].cloneNode(!0)) : null
    }
    function Rc(t) {
        return U ? ji(ji(t, "left", "right"), "previous", "next") : t
    }
    var qc = {
        args: "dataSrc",
        props: {
            dataSrc: String,
            sources: String,
            margin: String,
            target: String,
            loading: String
        },
        data: {
            dataSrc: "",
            sources: !1,
            margin: "50%",
            target: !1,
            loading: "lazy"
        },
        connected() {
            this.loading !== "lazy" ? this.load() : Ms(this.$el) && (this.$el.loading = "lazy",
            Ds(this.$el))
        },
        disconnected() {
            this.img && (this.img.onload = ""),
            delete this.img
        },
        observe: ue({
            handler(t, e) {
                this.load(),
                e.disconnect()
            },
            options: ({margin: t}) => ({
                rootMargin: t
            }),
            filter: ({loading: t}) => t === "lazy",
            target: ({$el: t, $props: e}) => e.target ? [t, ...Ae(e.target, t)] : t
        }),
        methods: {
            load() {
                if (this.img)
                    return this.img;
                const t = Ms(this.$el) ? this.$el : Vc(this.$el, this.dataSrc, this.sources);
                return Ee(t, "loading"),
                Ds(this.$el, t.currentSrc),
                this.img = t
            }
        }
    };
    function Ds(t, e) {
        if (Ms(t)) {
            const i = D(t);
            (H(i, "picture") ? M(i) : [t]).forEach(n => Go(n, n))
        } else
            e && !v(t.style.backgroundImage, e) && (h(t, "backgroundImage", `url(${Ji(e)})`),
            b(t, ae("load", !1)))
    }
    const Uc = ["data-src", "data-srcset", "sizes"];
    function Go(t, e) {
        for (const i of Uc) {
            const s = J(t, i);
            s && g(e, i.replace(/^(data-)+/, ""), s)
        }
    }
    function Vc(t, e, i) {
        const s = new Image;
        return Yc(s, i),
        Go(t, s),
        s.onload = () => {
            Ds(t, s.currentSrc)
        }
        ,
        g(s, "src", e),
        s
    }
    function Yc(t, e) {
        if (e = Gc(e),
        e.length) {
            const i = Lt("<picture>");
            for (const s of e) {
                const n = Lt("<source>");
                g(n, s),
                q(i, n)
            }
            q(i, t)
        }
    }
    function Gc(t) {
        if (!t)
            return [];
        if (gt(t, "["))
            try {
                t = JSON.parse(t)
            } catch {
                t = []
            }
        else
            t = he(t);
        return G(t) || (t = [t]),
        t.filter(e => !ti(e))
    }
    function Ms(t) {
        return H(t, "img")
    }
    var Xc = {
        props: {
            target: String,
            selActive: String
        },
        data: {
            target: !1,
            selActive: !1
        },
        computed: {
            target: ({target: t}, e) => t ? N(t, e) : e
        },
        observe: [ue({
            handler(t) {
                this.isIntersecting = t.some( ({isIntersecting: e}) => e),
                this.$emit()
            },
            target: ({target: t}) => t,
            args: {
                intersecting: !1
            }
        }), ki({
            target: ({target: t}) => t,
            options: {
                attributes: !0,
                attributeFilter: ["class"],
                attributeOldValue: !0
            }
        }), {
            target: ({target: t}) => t,
            observe: (t, e) => {
                const i = ze([...T(t), document.documentElement], e)
                  , s = [$(document, "scroll itemshown itemhidden", e, {
                    passive: !0,
                    capture: !0
                }), $(document, "show hide transitionstart", n => (e(),
                i.observe(n.target))), $(document, "shown hidden transitionend transitioncancel", n => (e(),
                i.unobserve(n.target)))];
                return {
                    observe: i.observe.bind(i),
                    unobserve: i.unobserve.bind(i),
                    disconnect() {
                        i.disconnect(),
                        s.map(n => n())
                    }
                }
            }
            ,
            handler() {
                this.$emit()
            }
        }],
        update: {
            read() {
                if (!this.isIntersecting)
                    return !1;
                for (const t of T(this.target)) {
                    let e = !this.selActive || C(t, this.selActive) ? Jc(t) : "";
                    e !== !1 && si(t, "bdt-light bdt-dark", e)
                }
            }
        }
    };
    function Jc(t) {
        const e = m(t)
          , i = m(window);
        if (!ei(e, i))
            return !1;
        const {left: s, top: n, height: o, width: r} = e;
        let a;
        for (const l of [.25, .5, .75]) {
            const c = t.ownerDocument.elementsFromPoint(Math.max(0, Math.min(s + r * l, i.width - 1)), Math.max(0, Math.min(n + o / 2, i.height - 1)));
            for (const u of c) {
                if (t.contains(u) || !Kc(u) || u.closest('[class*="-leave"]') && c.some(d => u !== d && C(d, '[class*="-enter"]')))
                    continue;
                const f = h(u, "--bdt-inverse");
                if (f) {
                    if (f === a)
                        return `bdt-${f}`;
                    a = f;
                    break
                }
            }
        }
        return a ? `bdt-${a}` : ""
    }
    function Kc(t) {
        if (h(t, "visibility") !== "visible")
            return !1;
        for (; t; ) {
            if (h(t, "opacity") === "0")
                return !1;
            t = D(t)
        }
        return !0
    }
    var Qc = {
        mixins: [it, Ci],
        props: {
            fill: String
        },
        data: {
            fill: "",
            clsWrapper: "bdt-leader-fill",
            clsHide: "bdt-leader-hide",
            attrFill: "data-fill"
        },
        computed: {
            fill: ({fill: t}, e) => t || h(e, "--bdt-leader-fill-content")
        },
        connected() {
            [this.wrapper] = is(this.$el, `<span class="${this.clsWrapper}">`)
        },
        disconnected() {
            Me(this.wrapper.childNodes)
        },
        observe: ut(),
        update: {
            read() {
                return {
                    width: Math.trunc(this.$el.offsetWidth / 2),
                    fill: this.fill,
                    hide: !this.matchMedia
                }
            },
            write({width: t, fill: e, hide: i}) {
                j(this.wrapper, this.clsHide, i),
                g(this.wrapper, this.attrFill, new Array(t).join(e))
            },
            events: ["resize"]
        }
    }
      , Zc = {
        install: th,
        mixins: [Ss],
        data: {
            clsPage: "bdt-modal-page",
            selPanel: ".bdt-modal-dialog",
            selClose: '[class*="bdt-modal-close"]'
        },
        events: [{
            name: "fullscreenchange webkitendfullscreen",
            capture: !0,
            handler(t) {
                H(t.target, "video") && this.isToggled() && !document.fullscreenElement && this.hide()
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                x(this.panel, "bdt-margin-auto-vertical") ? S(this.$el, "bdt-flex") : h(this.$el, "display", "block"),
                et(this.$el)
            }
        }, {
            name: "hidden",
            self: !0,
            handler() {
                h(this.$el, "display", ""),
                _(this.$el, "bdt-flex")
            }
        }]
    };
    function th({modal: t}) {
        t.dialog = function(i, s) {
            const n = t(y(`<div><div class="bdt-modal-dialog">${i}</div></div>`), {
                stack: !0,
                role: "alertdialog",
                ...s
            });
            return n.show(),
            $(n.$el, "hidden", async () => {
                await Promise.resolve(),
                n.$destroy(!0)
            }
            , {
                self: !0
            }),
            n
        }
        ,
        t.alert = function(i, s) {
            return e( ({i18n: n}) => `<div class="bdt-modal-body">${z(i) ? i : Pt(i)}</div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-primary bdt-modal-close" autofocus>${n.ok}</button> </div>`, s)
        }
        ,
        t.confirm = function(i, s) {
            return e( ({i18n: n}) => `<form> <div class="bdt-modal-body">${z(i) ? i : Pt(i)}</div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-default bdt-modal-close" type="button">${n.cancel}</button> <button class="bdt-button bdt-button-primary" autofocus>${n.ok}</button> </div> </form>`, s, () => Promise.reject())
        }
        ,
        t.prompt = function(i, s, n) {
            const o = e( ({i18n: l}) => `<form class="bdt-form-stacked"> <div class="bdt-modal-body"> <label>${z(i) ? i : Pt(i)}</label> <input class="bdt-input" autofocus> </div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-default bdt-modal-close" type="button">${l.cancel}</button> <button class="bdt-button bdt-button-primary">${l.ok}</button> </div> </form>`, n, () => null, () => a.value)
              , {$el: r} = o.dialog
              , a = y("input", r);
            return a.value = s || "",
            $(r, "show", () => a.select()),
            o
        }
        ,
        t.i18n = {
            ok: "Ok",
            cancel: "Cancel"
        };
        function e(i, s, n=A, o=A) {
            s = {
                bgClose: !1,
                escClose: !0,
                ...s,
                i18n: {
                    ...t.i18n,
                    ...s == null ? void 0 : s.i18n
                }
            };
            const r = t.dialog(i(s), s);
            return ft(new Promise(a => {
                const l = $(r.$el, "hide", () => a(n()));
                $(r.$el, "submit", "form", c => {
                    c.preventDefault(),
                    a(o(r)),
                    l(),
                    r.hide()
                }
                )
            }
            ), {
                dialog: r
            })
        }
    }
    var eh = {
        extends: Do,
        data: {
            targets: "> .bdt-parent",
            toggle: "> a",
            content: "> ul"
        }
    };
    const Bs = "bdt-navbar-transparent";
    var ih = {
        extends: Fo,
        props: {
            dropbarTransparentMode: Boolean
        },
        data: {
            clsDrop: "bdt-navbar-dropdown",
            selNavItem: ".bdt-navbar-nav > li > a,a.bdt-navbar-item,button.bdt-navbar-item,.bdt-navbar-item a,.bdt-navbar-item button,.bdt-navbar-toggle",
            dropbarTransparentMode: !1
        },
        computed: {
            navbarContainer: (t, e) => e.closest(".bdt-navbar-container")
        },
        watch: {
            items() {
                const t = x(this.$el, "bdt-navbar-justify")
                  , e = N(".bdt-navbar-nav, .bdt-navbar-left, .bdt-navbar-right", this.$el);
                for (const i of e) {
                    const s = t ? N(".bdt-navbar-nav > li > a, .bdt-navbar-item, .bdt-navbar-toggle", i).length : "";
                    h(i, "flexGrow", s)
                }
            }
        },
        events: [{
            name: "show",
            el: ({dropContainer: t}) => t,
            handler({target: t}) {
                this.getTransparentMode(t) === "remove" && x(this.navbarContainer, Bs) && (_(this.navbarContainer, Bs),
                this._transparent = !0)
            }
        }, {
            name: "hide",
            el: ({dropContainer: t}) => t,
            async handler() {
                await sh(),
                !this.getActive() && this._transparent && (S(this.navbarContainer, Bs),
                this._transparent = null)
            }
        }],
        methods: {
            getTransparentMode(t) {
                if (!this.navbarContainer)
                    return;
                if (this.dropbar && this.isDropbarDrop(t))
                    return this.dropbarTransparentMode;
                const e = this.getDropdown(t);
                if (e && x(t, "bdt-dropbar"))
                    return e.inset ? "behind" : "remove"
            },
            getDropbarOffset(t) {
                const {top: e, height: i} = E(this.navbarContainer);
                return e + (this.dropbarTransparentMode === "behind" ? 0 : i + t)
            }
        }
    };
    function sh() {
        return new Promise(t => setTimeout(t))
    }
    var nh = {
        mixins: [Ss],
        args: "mode",
        props: {
            mode: String,
            flip: Boolean,
            overlay: Boolean,
            swiping: Boolean
        },
        data: {
            mode: "slide",
            flip: !1,
            overlay: !1,
            clsPage: "bdt-offcanvas-page",
            clsContainer: "bdt-offcanvas-container",
            selPanel: ".bdt-offcanvas-bar",
            clsFlip: "bdt-offcanvas-flip",
            clsContainerAnimation: "bdt-offcanvas-container-animation",
            clsSidebarAnimation: "bdt-offcanvas-bar-animation",
            clsMode: "bdt-offcanvas",
            clsOverlay: "bdt-offcanvas-overlay",
            selClose: ".bdt-offcanvas-close",
            container: !1,
            swiping: !0
        },
        computed: {
            clsFlip: ({flip: t, clsFlip: e}) => t ? e : "",
            clsOverlay: ({overlay: t, clsOverlay: e}) => t ? e : "",
            clsMode: ({mode: t, clsMode: e}) => `${e}-${t}`,
            clsSidebarAnimation: ({mode: t, clsSidebarAnimation: e}) => t === "none" || t === "reveal" ? "" : e,
            clsContainerAnimation: ({mode: t, clsContainerAnimation: e}) => t !== "push" && t !== "reveal" ? "" : e,
            transitionElement({mode: t}) {
                return t === "reveal" ? D(this.panel) : this.panel
            }
        },
        observe: In({
            filter: ({swiping: t}) => t
        }),
        update: {
            read() {
                this.isToggled() && !R(this.$el) && this.hide()
            },
            events: ["resize"]
        },
        events: [{
            name: "touchmove",
            self: !0,
            passive: !1,
            filter: ({overlay: t}) => t,
            handler(t) {
                t.cancelable && t.preventDefault()
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                this.mode === "reveal" && !x(D(this.panel), this.clsMode) && (di(this.panel, "<div>"),
                S(D(this.panel), this.clsMode));
                const {body: t, scrollingElement: e} = document;
                S(t, this.clsContainer, this.clsFlip),
                h(t, "touch-action", "pan-y pinch-zoom"),
                h(this.$el, "display", "block"),
                h(this.panel, "maxWidth", e.clientWidth),
                S(this.$el, this.clsOverlay),
                S(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode),
                et(t),
                S(t, this.clsContainerAnimation),
                this.clsContainerAnimation && oh()
            }
        }, {
            name: "hide",
            self: !0,
            handler() {
                _(document.body, this.clsContainerAnimation),
                h(document.body, "touch-action", "")
            }
        }, {
            name: "hidden",
            self: !0,
            handler() {
                this.clsContainerAnimation && rh(),
                this.mode === "reveal" && Me(this.panel),
                _(this.panel, this.clsSidebarAnimation, this.clsMode),
                _(this.$el, this.clsOverlay),
                h(this.$el, "display", ""),
                h(this.panel, "maxWidth", ""),
                _(document.body, this.clsContainer, this.clsFlip)
            }
        }, {
            name: "swipeLeft swipeRight",
            handler(t) {
                this.isToggled() && Qt(t.type, "Left") ^ this.flip && this.hide()
            }
        }]
    };
    function oh() {
        Xo().content += ",user-scalable=0"
    }
    function rh() {
        const t = Xo();
        t.content = t.content.replace(/,user-scalable=0$/, "")
    }
    function Xo() {
        return y('meta[name="viewport"]', document.head) || q(document.head, '<meta name="viewport">')
    }
    var ah = {
        mixins: [it],
        props: {
            selContainer: String,
            selContent: String,
            minHeight: Number
        },
        data: {
            selContainer: ".bdt-modal",
            selContent: ".bdt-modal-dialog",
            minHeight: 150
        },
        computed: {
            container: ({selContainer: t}, e) => e.closest(t),
            content: ({selContent: t}, e) => e.closest(t)
        },
        observe: ut({
            target: ({container: t, content: e}) => [t, e]
        }),
        update: {
            read() {
                return !this.content || !this.container || !R(this.$el) ? !1 : {
                    max: Math.max(this.minHeight, et(this.container) - (m(this.content).height - et(this.$el)))
                }
            },
            write({max: t}) {
                h(this.$el, {
                    minHeight: this.minHeight,
                    maxHeight: t
                })
            },
            events: ["resize"]
        }
    }
      , lh = {
        props: ["width", "height"],
        connected() {
            S(this.$el, "bdt-responsive-width"),
            h(this.$el, "aspectRatio", `${this.width}/${this.height}`)
        }
    }
      , ch = {
        props: {
            offset: Number
        },
        data: {
            offset: 0
        },
        connected() {
            hh(this)
        },
        disconnected() {
            uh(this)
        },
        methods: {
            async scrollTo(t) {
                t = t && y(t) || document.body,
                b(this.$el, "beforescroll", [this, t]) && (await pn(t, {
                    offset: this.offset
                }),
                b(this.$el, "scrolled", [this, t]))
            }
        }
    };
    const Ke = new Set;
    function hh(t) {
        Ke.size || $(document, "click", Jo),
        Ke.add(t)
    }
    function uh(t) {
        Ke.delete(t),
        Ke.size || Tt(document, "click", Jo)
    }
    function Jo(t) {
        if (!t.defaultPrevented)
            for (const e of Ke)
                e.$el.contains(t.target) && re(e.$el) && (t.preventDefault(),
                window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href),
                e.scrollTo(Yi(e.$el)))
    }
    const Ns = "bdt-scrollspy-inview";
    var fh = {
        args: "cls",
        props: {
            cls: String,
            target: String,
            hidden: Boolean,
            margin: String,
            repeat: Boolean,
            delay: Number
        },
        data: () => ({
            cls: "",
            target: !1,
            hidden: !0,
            margin: "-1px",
            repeat: !1,
            delay: 0
        }),
        computed: {
            elements: ({target: t}, e) => t ? N(t, e) : [e]
        },
        watch: {
            elements(t) {
                this.hidden && h(Pe(t, `:not(.${Ns})`), "opacity", 0)
            }
        },
        connected() {
            this.elementData = new Map
        },
        disconnected() {
            for (const [t,e] of this.elementData.entries())
                _(t, Ns, (e == null ? void 0 : e.cls) || "");
            delete this.elementData
        },
        observe: ue({
            target: ({elements: t}) => t,
            handler(t) {
                const e = this.elementData;
                for (const {target: i, isIntersecting: s} of t) {
                    e.has(i) || e.set(i, {
                        cls: J(i, "bdt-scrollspy-class") || this.cls
                    });
                    const n = e.get(i);
                    !this.repeat && n.show || (n.show = s)
                }
                this.$emit()
            },
            options: ({margin: t}) => ({
                rootMargin: t
            }),
            args: {
                intersecting: !1
            }
        }),
        update: [{
            write(t) {
                for (const [e,i] of this.elementData.entries())
                    i.show && !i.inview && !i.queued ? (i.queued = !0,
                    t.promise = (t.promise || Promise.resolve()).then( () => new Promise(s => setTimeout(s, this.delay))).then( () => {
                        this.toggle(e, !0),
                        setTimeout( () => {
                            i.queued = !1,
                            this.$emit()
                        }
                        , 300)
                    }
                    )) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1)
            }
        }],
        methods: {
            toggle(t, e) {
                var i, s;
                const n = (i = this.elementData) == null ? void 0 : i.get(t);
                if (!n)
                    return;
                (s = n.off) == null || s.call(n),
                h(t, "opacity", !e && this.hidden ? 0 : ""),
                j(t, Ns, e),
                j(t, n.cls);
                let o;
                if (o = n.cls.match(/\bbdt-animation-[\w-]+/g)) {
                    const r = () => _(t, o);
                    e ? n.off = F(t, "animationcancel animationend", r, {
                        self: !0
                    }) : r()
                }
                b(t, e ? "inview" : "outview"),
                n.inview = e
            }
        }
    }
      , dh = {
        props: {
            cls: String,
            closest: Boolean,
            scroll: Boolean,
            target: String,
            offset: Number
        },
        data: {
            cls: "bdt-active",
            closest: !1,
            scroll: !1,
            target: 'a[href]:not([role="button"])',
            offset: 0
        },
        computed: {
            links: ({target: t}, e) => N(t, e).filter(i => re(i)),
            elements({closest: t}) {
                return this.links.map(e => e.closest(t || "*"))
            }
        },
        watch: {
            links(t) {
                this.scroll && this.$create("scroll", t, {
                    offset: this.offset
                })
            }
        },
        observe: [ue(), Le()],
        update: [{
            read() {
                const t = this.links.map(l => Yi(l) || l.ownerDocument)
                  , {length: e} = t;
                if (!e || !R(this.$el))
                    return !1;
                const i = Ot(t, !0)
                  , {scrollTop: s, scrollHeight: n} = i
                  , o = rt(i)
                  , r = n - o.height;
                let a = !1;
                if (s >= r)
                    a = e - 1;
                else {
                    const l = this.offset + m(us()).height + o.height * .1;
                    for (let c = 0; c < t.length && !(E(t[c]).top - o.top - l > 0); c++)
                        a = +c
                }
                return {
                    active: a
                }
            },
            write({active: t}) {
                const e = t !== !1 && !x(this.elements[t], this.cls);
                this.links.forEach(i => i.blur());
                for (let i = 0; i < this.elements.length; i++)
                    j(this.elements[i], this.cls, +i === t);
                e && b(this.$el, "active", [t, this.elements[t]])
            },
            events: ["scroll", "resize"]
        }]
    }
      , ph = {
        mixins: [it, Ci],
        props: {
            position: String,
            top: null,
            bottom: null,
            start: null,
            end: null,
            offset: String,
            overflowFlip: Boolean,
            animation: String,
            clsActive: String,
            clsInactive: String,
            clsFixed: String,
            clsBelow: String,
            selTarget: String,
            showOnUp: Boolean,
            targetOffset: Number
        },
        data: {
            position: "top",
            top: !1,
            bottom: !1,
            start: !1,
            end: !1,
            offset: 0,
            overflowFlip: !1,
            animation: "",
            clsActive: "bdt-active",
            clsInactive: "",
            clsFixed: "bdt-sticky-fixed",
            clsBelow: "bdt-sticky-below",
            selTarget: "",
            showOnUp: !1,
            targetOffset: !1
        },
        computed: {
            target: ({selTarget: t}, e) => t && y(t, e) || e
        },
        connected() {
            this.start = Ko(this.start || this.top),
            this.end = Ko(this.end || this.bottom),
            this.placeholder = y("+ .bdt-sticky-placeholder", this.$el) || y('<div class="bdt-sticky-placeholder"></div>'),
            this.isFixed = !1,
            this.setActive(!1)
        },
        beforeDisconnect() {
            this.isFixed && (this.hide(),
            _(this.target, this.clsInactive)),
            Qo(this.$el),
            ot(this.placeholder),
            this.placeholder = null
        },
        observe: [vs(), Le({
            target: () => document.scrollingElement
        }), ut({
            target: ({$el: t}) => [t, Fi(t), document.scrollingElement],
            handler(t) {
                this.$emit(this._data.resized && t.some( ({target: e}) => e === Fi(this.$el)) ? "update" : "resize"),
                this._data.resized = !0
            }
        })],
        events: [{
            name: "load hashchange popstate",
            el: () => window,
            filter: ({targetOffset: t}) => t !== !1,
            handler() {
                const {scrollingElement: t} = document;
                !location.hash || t.scrollTop === 0 || setTimeout( () => {
                    const e = E(y(location.hash))
                      , i = E(this.$el);
                    this.isFixed && ei(e, i) && (t.scrollTop = Math.ceil(e.top - i.height - Y(this.targetOffset, "height", this.placeholder) - Y(this.offset, "height", this.placeholder)))
                }
                )
            }
        }],
        update: [{
            read({height: t, width: e, margin: i, sticky: s}, n) {
                if (this.inactive = !this.matchMedia || !R(this.$el) || !this.$el.offsetHeight,
                this.inactive)
                    return;
                const o = this.isFixed && n.has("update");
                o && (Hs(this.target),
                this.hide()),
                this.active || ({height: t, width: e} = m(this.$el),
                i = h(this.$el, "margin")),
                o && this.show();
                const r = Y("100vh", "height")
                  , a = et(window)
                  , l = Math.max(0, document.scrollingElement.scrollHeight - r);
                let c = this.position;
                this.overflowFlip && t > r && (c = c === "top" ? "bottom" : "top");
                const u = this.isFixed ? this.placeholder : this.$el;
                let f = Y(this.offset, "height", s ? this.$el : u);
                c === "bottom" && (t < a || this.overflowFlip) && (f += a - t);
                const d = this.overflowFlip ? 0 : Math.max(0, t + f - r)
                  , p = E(u).top
                  , w = m(this.$el).height
                  , I = (this.start === !1 ? p : zs(this.start, this.$el, p)) - f
                  , P = this.end === !1 ? l : Math.min(l, zs(this.end, this.$el, p + t, !0) - w - f + d);
                return s = l && !this.showOnUp && I + f === p && P === Math.min(l, zs(!0, this.$el, 0, !0) - w - f + d) && h(Fi(this.$el), "overflowY") === "visible",
                {
                    start: I,
                    end: P,
                    offset: f,
                    overflow: d,
                    height: t,
                    elHeight: w,
                    width: e,
                    margin: i,
                    top: Be(u)[0],
                    sticky: s,
                    viewport: r,
                    maxScrollHeight: l
                }
            },
            write({height: t, width: e, margin: i, offset: s, sticky: n}) {
                if ((this.inactive || n || !this.isFixed) && Qo(this.$el),
                this.inactive)
                    return;
                n && (t = e = i = 0,
                h(this.$el, {
                    position: "sticky",
                    top: s
                }));
                const {placeholder: o} = this;
                h(o, {
                    height: t,
                    width: e,
                    margin: i
                }),
                (D(o) !== D(this.$el) || n ^ $t(o) < $t(this.$el)) && ((n ? hi : ui)(this.$el, o),
                o.hidden = !0)
            },
            events: ["resize"]
        }, {
            read({scroll: t=0, dir: e="down", overflow: i, overflowScroll: s=0, start: n, end: o, elHeight: r, height: a, sticky: l, maxScrollHeight: c}) {
                const u = Math.min(document.scrollingElement.scrollTop, c)
                  , f = t <= u ? "down" : "up"
                  , d = this.isFixed ? this.placeholder : this.$el;
                return {
                    dir: f,
                    prevDir: e,
                    scroll: u,
                    prevScroll: t,
                    below: u > E(d).top + (l ? Math.min(a, r) : a),
                    offsetParentTop: E(d.offsetParent).top,
                    overflowScroll: Q(s + Q(u, n, o) - Q(t, n, o), 0, i)
                }
            },
            write(t, e) {
                const i = e.has("scroll")
                  , {initTimestamp: s=0, dir: n, prevDir: o, scroll: r, prevScroll: a=0, top: l, start: c, below: u} = t;
                if (r < 0 || r === a && i || this.showOnUp && !i && !this.isFixed)
                    return;
                const f = Date.now();
                if ((f - s > 300 || n !== o) && (t.initScroll = r,
                t.initTimestamp = f),
                !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - r) <= 30 && Math.abs(a - r) <= 10))
                    if (this.inactive || r < c || this.showOnUp && (r <= c || n === "down" && i || n === "up" && !this.isFixed && !u)) {
                        if (!this.isFixed) {
                            Ct.inProgress(this.$el) && l > r && (Ct.cancel(this.$el),
                            this.hide());
                            return
                        }
                        if (this.animation && u) {
                            if (x(this.$el, "bdt-animation-leave"))
                                return;
                            Ct.out(this.$el, this.animation).then( () => this.hide(), A)
                        } else
                            this.hide()
                    } else
                        this.isFixed ? this.update() : this.animation && u ? (this.show(),
                        Ct.in(this.$el, this.animation).catch(A)) : (Hs(this.target),
                        this.show())
            },
            events: ["resize", "resizeViewport", "scroll"]
        }],
        methods: {
            show() {
                this.isFixed = !0,
                this.update(),
                this.placeholder.hidden = !1
            },
            hide() {
                const {offset: t, sticky: e} = this._data;
                this.setActive(!1),
                _(this.$el, this.clsFixed, this.clsBelow),
                e ? h(this.$el, "top", t) : h(this.$el, {
                    position: "",
                    top: "",
                    width: "",
                    marginTop: ""
                }),
                this.placeholder.hidden = !0,
                this.isFixed = !1
            },
            update() {
                let {width: t, scroll: e=0, overflow: i, overflowScroll: s=0, start: n, end: o, offset: r, offsetParentTop: a, sticky: l, below: c} = this._data;
                const u = n !== 0 || e > n;
                if (!l) {
                    let f = "fixed";
                    e > o && (r += o - a + s - i,
                    f = "absolute"),
                    h(this.$el, {
                        position: f,
                        width: t,
                        marginTop: 0
                    }, "important")
                }
                h(this.$el, "top", r - s),
                this.setActive(u),
                j(this.$el, this.clsBelow, c),
                S(this.$el, this.clsFixed)
            },
            setActive(t) {
                const e = this.active;
                this.active = t,
                t ? (si(this.target, this.clsInactive, this.clsActive),
                e !== t && b(this.$el, "active")) : (si(this.target, this.clsActive, this.clsInactive),
                e !== t && (Hs(this.target),
                b(this.$el, "inactive")))
            }
        }
    };
    function zs(t, e, i, s) {
        if (!t)
            return 0;
        if (mt(t) || z(t) && t.match(/^-?\d/))
            return i + Y(t, "height", e, !0);
        {
            const n = t === !0 ? Fi(e) : Z(t, e);
            return E(n).bottom - (s && (n != null && n.contains(e)) ? k(h(n, "paddingBottom")) : 0)
        }
    }
    function Ko(t) {
        return t === "true" ? !0 : t === "false" ? !1 : t
    }
    function Qo(t) {
        h(t, {
            position: "",
            top: "",
            marginTop: "",
            width: ""
        })
    }
    const Fs = "bdt-transition-disable";
    function Hs(t) {
        x(t, Fs) || (S(t, Fs),
        requestAnimationFrame( () => _(t, Fs)))
    }
    function Fi(t) {
        for (; t = D(t); )
            if (R(t))
                return t
    }
    const Ls = ".bdt-disabled *, .bdt-disabled, [disabled]";
    var Zo = {
        mixins: [qt],
        args: "connect",
        props: {
            connect: String,
            toggle: String,
            itemNav: String,
            active: Number,
            followFocus: Boolean,
            swiping: Boolean
        },
        data: {
            connect: "~.bdt-switcher",
            toggle: "> * > :first-child",
            itemNav: !1,
            active: 0,
            cls: "bdt-active",
            attrItem: "bdt-switcher-item",
            selVertical: ".bdt-nav",
            followFocus: !1,
            swiping: !0
        },
        computed: {
            connects: {
                get: ({connect: t}, e) => Ae(t, e),
                observe: ({connect: t}) => t
            },
            connectChildren() {
                return this.connects.map(t => M(t)).flat()
            },
            toggles: ({toggle: t}, e) => N(t, e),
            children(t, e) {
                return M(e).filter(i => this.toggles.some(s => i.contains(s)))
            }
        },
        watch: {
            connects(t) {
                this.swiping && h(t, "touchAction", "pan-y pinch-zoom"),
                this.$emit()
            },
            connectChildren() {
                let t = Math.max(0, this.index());
                for (const e of this.connects)
                    M(e).forEach( (i, s) => j(i, this.cls, s === t));
                this.$emit()
            },
            toggles(t) {
                this.$emit();
                const e = this.index();
                this.show(~e ? e : t[this.active] || t[0])
            }
        },
        connected() {
            g(this.$el, "role", "tablist")
        },
        observe: [Si({
            targets: ({connectChildren: t}) => t
        }), In({
            target: ({connects: t}) => t,
            filter: ({swiping: t}) => t
        })],
        events: [{
            name: "click keydown",
            delegate: ({toggle: t}) => t,
            handler(t) {
                !C(t.current, Ls) && (t.type === "click" || t.keyCode === O.SPACE) && (t.preventDefault(),
                this.show(t.current))
            }
        }, {
            name: "keydown",
            delegate: ({toggle: t}) => t,
            handler(t) {
                const {current: e, keyCode: i} = t
                  , s = C(this.$el, this.selVertical);
                let n = i === O.HOME ? 0 : i === O.END ? "last" : i === O.LEFT && !s || i === O.UP && s ? "previous" : i === O.RIGHT && !s || i === O.DOWN && s ? "next" : -1;
                if (~n) {
                    t.preventDefault();
                    const o = this.toggles.filter(a => !C(a, Ls))
                      , r = o[nt(n, o, o.indexOf(e))];
                    r.focus(),
                    this.followFocus && this.show(r)
                }
            }
        }, {
            name: "click",
            el: ({$el: t, connects: e, itemNav: i}) => e.concat(i ? Ae(i, t) : []),
            delegate: ({attrItem: t}) => `[${t}],[data-${t}]`,
            handler(t) {
                t.target.closest("a,button") && (t.preventDefault(),
                this.show(J(t.current, this.attrItem)))
            }
        }, {
            name: "swipeRight swipeLeft",
            filter: ({swiping: t}) => t,
            el: ({connects: t}) => t,
            handler({type: t}) {
                this.show(Qt(t, "Left") ? "next" : "previous")
            }
        }],
        update() {
            var t;
            for (const e of this.connects)
                H(e, "ul") && g(e, "role", "presentation");
            g(M(this.$el), "role", "presentation");
            for (const e in this.toggles) {
                const i = this.toggles[e]
                  , s = (t = this.connects[0]) == null ? void 0 : t.children[e];
                g(i, "role", "tab"),
                s && (i.id = Yt(this, i),
                s.id = Yt(this, s),
                g(i, "aria-controls", s.id),
                g(s, {
                    role: "tabpanel",
                    "aria-labelledby": i.id
                }))
            }
            g(this.$el, "aria-orientation", C(this.$el, this.selVertical) ? "vertical" : null)
        },
        methods: {
            index() {
                return wt(this.children, t => x(t, this.cls))
            },
            show(t) {
                const e = this.toggles.filter(r => !C(r, Ls))
                  , i = this.index()
                  , s = nt(!Ze(t) || v(e, t) ? t : 0, e, nt(this.toggles[i], e))
                  , n = nt(e[s], this.toggles);
                this.children.forEach( (r, a) => {
                    j(r, this.cls, n === a),
                    g(this.toggles[a], {
                        "aria-selected": n === a,
                        tabindex: n === a ? null : -1
                    })
                }
                );
                const o = i >= 0 && i !== s;
                this.connects.forEach(async ({children: r}) => {
                    const a = Zt(r).filter( (l, c) => c !== n && x(l, this.cls));
                    await this.toggleElement(a, !1, o) && await this.toggleElement(r[n], !0, o)
                }
                )
            }
        }
    }
      , gh = {
        mixins: [it],
        extends: Zo,
        props: {
            media: Boolean
        },
        data: {
            media: 960,
            attrItem: "bdt-tab-item",
            selVertical: ".bdt-tab-left,.bdt-tab-right"
        },
        connected() {
            const t = x(this.$el, "bdt-tab-left") ? "bdt-tab-left" : x(this.$el, "bdt-tab-right") ? "bdt-tab-right" : !1;
            t && this.$create("toggle", this.$el, {
                cls: t,
                mode: "media",
                media: this.media
            })
        }
    };
    const mh = 32;
    var vh = {
        mixins: [Ci, qt],
        args: "target",
        props: {
            href: String,
            target: null,
            mode: "list",
            queued: Boolean
        },
        data: {
            href: !1,
            target: !1,
            mode: "click",
            queued: !0
        },
        computed: {
            target: {
                get: ({target: t}, e) => (t = Ae(t || e.hash, e),
                t.length ? t : [e]),
                observe: ({target: t}) => t
            }
        },
        connected() {
            v(this.mode, "media") || (ai(this.$el) || g(this.$el, "tabindex", "0"),
            !this.cls && H(this.$el, "a") && g(this.$el, "role", "button"))
        },
        observe: Si({
            targets: ({target: t}) => t
        }),
        events: [{
            name: ht,
            filter: ({mode: t}) => v(t, "hover"),
            handler(t) {
                this._preventClick = null,
                !(!dt(t) || ee(this._showState) || this.$el.disabled) && (b(this.$el, "focus"),
                F(document, ht, () => b(this.$el, "blur"), !0, e => !this.$el.contains(e.target)),
                v(this.mode, "click") && (this._preventClick = !0))
            }
        }, {
            name: `mouseenter mouseleave ${Ht} ${oe} focus blur`,
            filter: ({mode: t}) => v(t, "hover"),
            handler(t) {
                if (dt(t) || this.$el.disabled)
                    return;
                const e = v(["mouseenter", Ht, "focus"], t.type)
                  , i = this.isToggled(this.target);
                if (!e && (!ee(this._showState) || t.type !== "blur" && C(this.$el, ":focus") || t.type === "blur" && C(this.$el, ":hover"))) {
                    i === this._showState && (this._showState = null);
                    return
                }
                e && ee(this._showState) && i !== this._showState || (this._showState = e ? i : null,
                this.toggle(`toggle${e ? "show" : "hide"}`))
            }
        }, {
            name: "keydown",
            filter: ({$el: t, mode: e}) => v(e, "click") && !H(t, "input"),
            handler(t) {
                t.keyCode === mh && (t.preventDefault(),
                this.$el.click())
            }
        }, {
            name: "click",
            filter: ({mode: t}) => ["click", "hover"].some(e => v(t, e)),
            handler(t) {
                let e;
                (this._preventClick || t.target.closest('a[href="#"], a[href=""]') || (e = t.target.closest("a[href]")) && (!this.isToggled(this.target) || e.hash && C(this.target, e.hash))) && t.preventDefault(),
                !this._preventClick && v(this.mode, "click") && this.toggle()
            }
        }, {
            name: "mediachange",
            filter: ({mode: t}) => v(t, "media"),
            el: ({target: t}) => t,
            handler(t, e) {
                e.matches ^ this.isToggled(this.target) && this.toggle()
            }
        }],
        methods: {
            async toggle(t) {
                if (!b(this.target, t || "toggle", [this]))
                    return;
                if (It(this.$el, "aria-expanded") && g(this.$el, "aria-expanded", !this.isToggled(this.target)),
                !this.queued)
                    return this.toggleElement(this.target);
                const e = this.target.filter(s => x(s, this.clsLeave));
                if (e.length) {
                    for (const s of this.target) {
                        const n = v(e, s);
                        this.toggleElement(s, n, n)
                    }
                    return
                }
                const i = this.target.filter(this.isToggled);
                await this.toggleElement(i, !1) && await this.toggleElement(this.target.filter(s => !v(i, s)), !0)
            }
        }
    }
      , bh = Object.freeze({
        __proto__: null,
        Accordion: Do,
        Alert: Hl,
        Close: Bc,
        Cover: jl,
        Drop: No,
        DropParentIcon: Xt,
        Dropdown: No,
        Dropnav: Fo,
        FormCustom: Xl,
        Grid: Jl,
        HeightMatch: tc,
        HeightPlaceholder: sc,
        HeightViewport: nc,
        Icon: Os,
        Img: qc,
        Inverse: Xc,
        Leader: Qc,
        Margin: En,
        Marker: Nc,
        Modal: Zc,
        Nav: eh,
        NavParentIcon: Ac,
        Navbar: ih,
        NavbarParentIcon: Xt,
        NavbarToggleIcon: Mc,
        Offcanvas: nh,
        OverflowAuto: ah,
        OverlayIcon: Xt,
        PaginationNext: Fc,
        PaginationPrevious: Hc,
        Responsive: lh,
        Scroll: ch,
        Scrollspy: fh,
        ScrollspyNav: dh,
        SearchIcon: Oc,
        SlidenavNext: Yo,
        SlidenavPrevious: Yo,
        Spinner: Dc,
        Sticky: ph,
        Svg: Ec,
        Switcher: Zo,
        Tab: gh,
        Toggle: vh,
        Totop: zc,
        Video: Mo
    });
    return ie(bh, (t, e) => lt.component(e, t)),
    Dl(lt),
    ie(Ol, (t, e) => lt.component(e, t)),
    lt
});
