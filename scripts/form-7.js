( () => {
    "use strict";
    const e = window.wp.i18n
      , t = e => Math.abs(parseInt(e, 10))
      , a = (e, t, a) => {
        const n = new CustomEvent(`wpcf7${t}`,{
            bubbles: !0,
            detail: a
        });
        "string" == typeof e && (e = document.querySelector(e)),
        e.dispatchEvent(n)
    }
      , n = (e, t) => {
        const n = new Map([["init", "init"], ["validation_failed", "invalid"], ["acceptance_missing", "unaccepted"], ["spam", "spam"], ["aborted", "aborted"], ["mail_sent", "sent"], ["mail_failed", "failed"], ["submitting", "submitting"], ["resetting", "resetting"], ["validating", "validating"], ["payment_required", "payment-required"]]);
        n.has(t) && (t = n.get(t)),
        Array.from(n.values()).includes(t) || (t = `custom-${t = (t = t.replace(/[^0-9a-z]+/i, " ").trim()).replace(/\s+/, "-")}`);
        const r = e.getAttribute("data-status");
        if (e.wpcf7.status = t,
        e.setAttribute("data-status", t),
        e.classList.add(t),
        r && r !== t) {
            e.classList.remove(r);
            const t = {
                contactFormId: e.wpcf7.id,
                pluginVersion: e.wpcf7.pluginVersion,
                contactFormLocale: e.wpcf7.locale,
                unitTag: e.wpcf7.unitTag,
                containerPostId: e.wpcf7.containerPost,
                status: e.wpcf7.status,
                prevStatus: r
            };
            a(e, "statuschanged", t)
        }
        return t
    }
      , r = e => {
        const {root: t, namespace: a="contact-form-7/v1"} = wpcf7.api;
        return o.reduceRight(( (e, t) => a => t(a, e)), (e => {
            let n, r, {url: o, path: c, endpoint: s, headers: i, body: l, data: p, ...d} = e;
            "string" == typeof s && (n = a.replace(/^\/|\/$/g, ""),
            r = s.replace(/^\//, ""),
            c = r ? n + "/" + r : n),
            "string" == typeof c && (-1 !== t.indexOf("?") && (c = c.replace("?", "&")),
            c = c.replace(/^\//, ""),
            o = t + c),
            i = {
                Accept: "application/json, */*;q=0.1",
                ...i
            },
            delete i["X-WP-Nonce"],
            p && (l = JSON.stringify(p),
            i["Content-Type"] = "application/json");
            const f = {
                code: "fetch_error",
                message: "You are probably offline."
            }
              , u = {
                code: "invalid_json",
                message: "The response is not a valid JSON response."
            };
            return window.fetch(o || c || window.location.href, {
                ...d,
                headers: i,
                body: l
            }).then((e => Promise.resolve(e).then((e => {
                if (e.status >= 200 && e.status < 300)
                    return e;
                throw e
            }
            )).then((e => {
                if (204 === e.status)
                    return null;
                if (e && e.json)
                    return e.json().catch(( () => {
                        throw u
                    }
                    ));
                throw u
            }
            ))), ( () => {
                throw f
            }
            ))
        }
        ))(e)
    }
      , o = [];
    function c(e, t={}) {
        const {target: a, scope: r=e, ...o} = t;
        if (void 0 === e.wpcf7?.schema)
            return;
        const c = {
            ...e.wpcf7.schema
        };
        if (void 0 !== a) {
            if (!e.contains(a))
                return;
            if (!a.closest(".wpcf7-form-control-wrap[data-name]"))
                return;
            if (a.closest(".novalidate"))
                return
        }
        const p = r.querySelectorAll(".wpcf7-form-control-wrap")
          , d = Array.from(p).reduce(( (e, t) => (t.closest(".novalidate") || t.querySelectorAll(":where( input, textarea, select ):enabled").forEach((t => {
            if (t.name)
                switch (t.type) {
                case "button":
                case "image":
                case "reset":
                case "submit":
                    break;
                case "checkbox":
                case "radio":
                    t.checked && e.append(t.name, t.value);
                    break;
                case "select-multiple":
                    for (const a of t.selectedOptions)
                        e.append(t.name, a.value);
                    break;
                case "file":
                    for (const a of t.files)
                        e.append(t.name, a);
                    break;
                default:
                    e.append(t.name, t.value)
                }
        }
        )),
        e)), new FormData)
          , f = e.getAttribute("data-status");
        Promise.resolve(n(e, "validating")).then((n => {
            if (void 0 !== swv) {
                const n = swv.validate(c, d, t);
                for (const t of p) {
                    if (void 0 === t.dataset.name)
                        continue;
                    const o = t.dataset.name;
                    if (n.has(o)) {
                        const {error: t, validInputs: a} = n.get(o);
                        i(e, o),
                        void 0 !== t && s(e, o, t, {
                            scope: r
                        }),
                        l(e, o, null != a ? a : [])
                    }
                    if (t.contains(a))
                        break
                }
            }
        }
        )).finally(( () => {
            n(e, f)
        }
        ))
    }
    r.use = e => {
        o.unshift(e)
    }
    ;
    const s = (e, t, a, n) => {
        const {scope: r=e, ...o} = null != n ? n : {}
          , c = `${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, "")
          , s = e.querySelector(`.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`);
        ( () => {
            const t = document.createElement("li");
            t.setAttribute("id", c),
            s && s.id ? t.insertAdjacentHTML("beforeend", `<a href="#${s.id}">${a}</a>`) : t.insertAdjacentText("beforeend", a),
            e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(t)
        }
        )(),
        r.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e => {
            const t = document.createElement("span");
            t.classList.add("wpcf7-not-valid-tip"),
            t.setAttribute("aria-hidden", "true"),
            t.insertAdjacentText("beforeend", a),
            e.appendChild(t),
            e.querySelectorAll("[aria-invalid]").forEach((e => {
                e.setAttribute("aria-invalid", "true")
            }
            )),
            e.querySelectorAll(".wpcf7-form-control").forEach((e => {
                e.classList.add("wpcf7-not-valid"),
                e.setAttribute("aria-describedby", c),
                "function" == typeof e.setCustomValidity && e.setCustomValidity(a),
                e.closest(".use-floating-validation-tip") && (e.addEventListener("focus", (e => {
                    t.setAttribute("style", "display: none")
                }
                )),
                t.addEventListener("click", (e => {
                    t.setAttribute("style", "display: none")
                }
                )))
            }
            ))
        }
        ))
    }
      , i = (e, t) => {
        const a = `${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, "");
        e.wpcf7.parent.querySelector(`.screen-reader-response ul li#${a}`)?.remove(),
        e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e => {
            e.querySelector(".wpcf7-not-valid-tip")?.remove(),
            e.querySelectorAll("[aria-invalid]").forEach((e => {
                e.setAttribute("aria-invalid", "false")
            }
            )),
            e.querySelectorAll(".wpcf7-form-control").forEach((e => {
                e.removeAttribute("aria-describedby"),
                e.classList.remove("wpcf7-not-valid"),
                "function" == typeof e.setCustomValidity && e.setCustomValidity("")
            }
            ))
        }
        ))
    }
      , l = (e, t, a) => {
        e.querySelectorAll(`[data-reflection-of="${t}"]`).forEach((e => {
            if ("output" === e.tagName.toLowerCase()) {
                const t = e;
                0 === a.length && a.push(t.dataset.default),
                a.slice(0, 1).forEach((e => {
                    e instanceof File && (e = e.name),
                    t.textContent = e
                }
                ))
            } else
                e.querySelectorAll("output").forEach((e => {
                    e.hasAttribute("data-default") ? 0 === a.length ? e.removeAttribute("hidden") : e.setAttribute("hidden", "hidden") : e.remove()
                }
                )),
                a.forEach((a => {
                    a instanceof File && (a = a.name);
                    const n = document.createElement("output");
                    n.setAttribute("name", t),
                    n.textContent = a,
                    e.appendChild(n)
                }
                ))
        }
        ))
    }
    ;
    function p(e, t={}) {
        if (wpcf7.blocked)
            return d(e),
            void n(e, "submitting");
        const o = new FormData(e);
        t.submitter && t.submitter.name && o.append(t.submitter.name, t.submitter.value);
        const c = {
            contactFormId: e.wpcf7.id,
            pluginVersion: e.wpcf7.pluginVersion,
            contactFormLocale: e.wpcf7.locale,
            unitTag: e.wpcf7.unitTag,
            containerPostId: e.wpcf7.containerPost,
            status: e.wpcf7.status,
            inputs: Array.from(o, (e => {
                const t = e[0]
                  , a = e[1];
                return !t.match(/^_/) && {
                    name: t,
                    value: a
                }
            }
            )).filter((e => !1 !== e)),
            formData: o
        };
        r({
            endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
            method: "POST",
            body: o,
            wpcf7: {
                endpoint: "feedback",
                form: e,
                detail: c
            }
        }).then((t => {
            const r = n(e, t.status);
            return c.status = t.status,
            c.apiResponse = t,
            ["invalid", "unaccepted", "spam", "aborted"].includes(r) ? a(e, r, c) : ["sent", "failed"].includes(r) && a(e, `mail${r}`, c),
            a(e, "submit", c),
            t
        }
        )).then((t => {
            t.posted_data_hash && (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value = t.posted_data_hash),
            "mail_sent" === t.status && (e.reset(),
            e.wpcf7.resetOnMailSent = !0),
            t.invalid_fields && t.invalid_fields.forEach((t => {
                s(e, t.field, t.message)
            }
            )),
            e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend", t.message),
            e.querySelectorAll(".wpcf7-response-output").forEach((e => {
                e.innerText = t.message
            }
            ))
        }
        )).catch((e => console.error(e)))
    }
    r.use(( (e, t) => {
        if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
            const {form: t, detail: r} = e.wpcf7;
            d(t),
            a(t, "beforesubmit", r),
            n(t, "submitting")
        }
        return t(e)
    }
    ));
    const d = e => {
        e.querySelectorAll(".wpcf7-form-control-wrap").forEach((t => {
            t.dataset.name && i(e, t.dataset.name)
        }
        )),
        e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText = "",
        e.querySelectorAll(".wpcf7-response-output").forEach((e => {
            e.innerText = ""
        }
        ))
    }
    ;
    function f(e) {
        const t = new FormData(e)
          , o = {
            contactFormId: e.wpcf7.id,
            pluginVersion: e.wpcf7.pluginVersion,
            contactFormLocale: e.wpcf7.locale,
            unitTag: e.wpcf7.unitTag,
            containerPostId: e.wpcf7.containerPost,
            status: e.wpcf7.status,
            inputs: Array.from(t, (e => {
                const t = e[0]
                  , a = e[1];
                return !t.match(/^_/) && {
                    name: t,
                    value: a
                }
            }
            )).filter((e => !1 !== e)),
            formData: t
        };
        r({
            endpoint: `contact-forms/${e.wpcf7.id}/refill`,
            method: "GET",
            wpcf7: {
                endpoint: "refill",
                form: e,
                detail: o
            }
        }).then((t => {
            e.wpcf7.resetOnMailSent ? (delete e.wpcf7.resetOnMailSent,
            n(e, "mail_sent")) : n(e, "init"),
            o.apiResponse = t,
            a(e, "reset", o)
        }
        )).catch((e => console.error(e)))
    }
    r.use(( (e, t) => {
        if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
            const {form: t, detail: a} = e.wpcf7;
            d(t),
            n(t, "resetting")
        }
        return t(e)
    }
    ));
    const u = (e, t) => {
        for (const a in t) {
            const n = t[a];
            e.querySelectorAll(`input[name="${a}"]`).forEach((e => {
                e.value = ""
            }
            )),
            e.querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":", "")}`).forEach((e => {
                e.setAttribute("src", n)
            }
            ));
            const r = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
            r && e.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`).forEach((e => {
                e.value = r[1]
            }
            ))
        }
    }
      , m = (e, t) => {
        for (const a in t) {
            const n = t[a][0]
              , r = t[a][1];
            e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${a}"]`).forEach((e => {
                e.querySelector(`input[name="${a}"]`).value = "",
                e.querySelector(".wpcf7-quiz-label").textContent = n,
                e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value = r
            }
            ))
        }
    }
    ;
    function w(e) {
        const a = new FormData(e);
        e.wpcf7 = {
            id: t(a.get("_wpcf7")),
            status: e.getAttribute("data-status"),
            pluginVersion: a.get("_wpcf7_version"),
            locale: a.get("_wpcf7_locale"),
            unitTag: a.get("_wpcf7_unit_tag"),
            containerPost: t(a.get("_wpcf7_container_post")),
            parent: e.closest(".wpcf7"),
            get schema() {
                return wpcf7.schemas.get(this.id)
            }
        },
        wpcf7.schemas.set(e.wpcf7.id, void 0),
        e.querySelectorAll(".has-spinner").forEach((e => {
            e.insertAdjacentHTML("afterend", '<span class="wpcf7-spinner"></span>')
        }
        )),
        (e => {
            e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t => {
                t.addEventListener("change", (t => {
                    const a = t.target.getAttribute("name");
                    e.querySelectorAll(`input[type="checkbox"][name="${a}"]`).forEach((e => {
                        e !== t.target && (e.checked = !1)
                    }
                    ))
                }
                ))
            }
            ))
        }
        )(e),
        (e => {
            e.querySelectorAll(".has-free-text").forEach((t => {
                const a = t.querySelector("input.wpcf7-free-text")
                  , n = t.querySelector('input[type="checkbox"], input[type="radio"]');
                a.disabled = !n.checked,
                e.addEventListener("change", (e => {
                    a.disabled = !n.checked,
                    e.target === n && n.checked && a.focus()
                }
                ))
            }
            ))
        }
        )(e),
        (e => {
            e.querySelectorAll(".wpcf7-validates-as-url").forEach((e => {
                e.addEventListener("change", (t => {
                    let a = e.value.trim();
                    a && !a.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== a.indexOf(".") && (a = a.replace(/^\/+/, ""),
                    a = "http://" + a),
                    e.value = a
                }
                ))
            }
            ))
        }
        )(e),
        (e => {
            if (!e.querySelector(".wpcf7-acceptance") || e.classList.contains("wpcf7-acceptance-as-validation"))
                return;
            const t = () => {
                let t = !0;
                e.querySelectorAll(".wpcf7-acceptance").forEach((e => {
                    if (!t || e.classList.contains("optional"))
                        return;
                    const a = e.querySelector('input[type="checkbox"]');
                    (e.classList.contains("invert") && a.checked || !e.classList.contains("invert") && !a.checked) && (t = !1)
                }
                )),
                e.querySelectorAll(".wpcf7-submit").forEach((e => {
                    e.disabled = !t
                }
                ))
            }
            ;
            t(),
            e.addEventListener("change", (e => {
                t()
            }
            )),
            e.addEventListener("wpcf7reset", (e => {
                t()
            }
            ))
        }
        )(e),
        (e => {
            const a = (e, a) => {
                const n = t(e.getAttribute("data-starting-value"))
                  , r = t(e.getAttribute("data-maximum-value"))
                  , o = t(e.getAttribute("data-minimum-value"))
                  , c = e.classList.contains("down") ? n - a.value.length : a.value.length;
                e.setAttribute("data-current-value", c),
                e.innerText = c,
                r && r < a.value.length ? e.classList.add("too-long") : e.classList.remove("too-long"),
                o && a.value.length < o ? e.classList.add("too-short") : e.classList.remove("too-short")
            }
              , n = t => {
                t = {
                    init: !1,
                    ...t
                },
                e.querySelectorAll(".wpcf7-character-count").forEach((n => {
                    const r = n.getAttribute("data-target-name")
                      , o = e.querySelector(`[name="${r}"]`);
                    o && (o.value = o.defaultValue,
                    a(n, o),
                    t.init && o.addEventListener("keyup", (e => {
                        a(n, o)
                    }
                    )))
                }
                ))
            }
            ;
            n({
                init: !0
            }),
            e.addEventListener("wpcf7reset", (e => {
                n()
            }
            ))
        }
        )(e),
        window.addEventListener("load", (t => {
            wpcf7.cached && e.reset()
        }
        )),
        e.addEventListener("reset", (t => {
            wpcf7.reset(e)
        }
        )),
        e.addEventListener("submit", (t => {
            wpcf7.submit(e, {
                submitter: t.submitter
            }),
            t.preventDefault()
        }
        )),
        e.addEventListener("wpcf7submit", (t => {
            t.detail.apiResponse.captcha && u(e, t.detail.apiResponse.captcha),
            t.detail.apiResponse.quiz && m(e, t.detail.apiResponse.quiz)
        }
        )),
        e.addEventListener("wpcf7reset", (t => {
            t.detail.apiResponse.captcha && u(e, t.detail.apiResponse.captcha),
            t.detail.apiResponse.quiz && m(e, t.detail.apiResponse.quiz)
        }
        )),
        e.addEventListener("change", (t => {
            t.target.closest(".wpcf7-form-control") && wpcf7.validate(e, {
                target: t.target
            })
        }
        )),
        e.addEventListener("wpcf7statuschanged", (t => {
            const a = t.detail.status;
            e.querySelectorAll(".active-on-any").forEach((e => {
                e.removeAttribute("inert"),
                e.classList.remove("active-on-any")
            }
            )),
            e.querySelectorAll(`.inert-on-${a}`).forEach((e => {
                e.setAttribute("inert", "inert"),
                e.classList.add("active-on-any")
            }
            ))
        }
        ))
    }
    document.addEventListener("DOMContentLoaded", (t => {
        var a;
        if ("undefined" != typeof wpcf7)
            if (void 0 !== wpcf7.api)
                if ("function" == typeof window.fetch)
                    if ("function" == typeof window.FormData)
                        if ("function" == typeof NodeList.prototype.forEach)
                            if ("function" == typeof String.prototype.replaceAll) {
                                wpcf7 = {
                                    init: w,
                                    submit: p,
                                    reset: f,
                                    validate: c,
                                    schemas: new Map,
                                    ...null !== (a = wpcf7) && void 0 !== a ? a : {}
                                },
                                document.querySelectorAll("form .wpcf7").forEach((t => {
                                    const a = document.createElement("p");
                                    a.setAttribute("class", "wpcf7-form-in-wrong-place");
                                    const n = document.createElement("strong");
                                    n.append((0,
                                    e.__)("Error:", "contact-form-7"));
                                    const r = (0,
                                    e.__)("This contact form is placed in the wrong place.", "contact-form-7");
                                    a.append(n, " ", r),
                                    t.replaceWith(a)
                                }
                                )),
                                document.querySelectorAll(".wpcf7 > form").forEach((e => {
                                    wpcf7.init(e),
                                    e.closest(".wpcf7").classList.replace("no-js", "js")
                                }
                                ));
                                for (const e of wpcf7.schemas.keys())
                                    r({
                                        endpoint: `contact-forms/${e}/feedback/schema`,
                                        method: "GET"
                                    }).then((t => {
                                        wpcf7.schemas.set(e, t)
                                    }
                                    ))
                            } else
                                console.error("Your browser does not support String.replaceAll().");
                        else
                            console.error("Your browser does not support NodeList.forEach().");
                    else
                        console.error("Your browser does not support window.FormData().");
                else
                    console.error("Your browser does not support window.fetch().");
            else
                console.error("wpcf7.api is not defined.");
        else
            console.error("wpcf7 is not defined.")
    }
    ))
}
)();
