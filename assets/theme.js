window.slate = window.slate || {}, window.theme = window.theme || {},
    function(t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, (function(t, e) {
        "use strict";
        var i = [],
            n = Object.getPrototypeOf,
            o = i.slice,
            r = i.flat ? function(t) {
                return i.flat.call(t)
            } : function(t) {
                return i.concat.apply([], t)
            },
            s = i.push,
            a = i.indexOf,
            l = {},
            c = l.toString,
            u = l.hasOwnProperty,
            d = u.toString,
            h = d.call(Object),
            p = {},
            f = function(t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            },
            m = function(t) {
                return null != t && t === t.window
            },
            g = t.document,
            v = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function y(t, e, i) {
            var n, o, r = (i = i || g).createElement("script");
            if (r.text = t, e)
                for (n in v)(o = e[n] || e.getAttribute && e.getAttribute(n)) && r.setAttribute(n, o);
            i.head.appendChild(r).parentNode.removeChild(r)
        }

        function b(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t
        }
        var w = "3.5.1",
            S = function(t, e) {
                return new S.fn.init(t, e)
            };

        function x(t) {
            var e = !!t && "length" in t && t.length,
                i = b(t);
            return !f(t) && !m(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
        }
        S.fn = S.prototype = {
            jquery: w,
            constructor: S,
            length: 0,
            toArray: function() {
                return o.call(this)
            },
            get: function(t) {
                return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = S.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function(t) {
                return S.each(this, t)
            },
            map: function(t) {
                return this.pushStack(S.map(this, (function(e, i) {
                    return t.call(e, i, e)
                })))
            },
            slice: function() {
                return this.pushStack(o.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(S.grep(this, (function(t, e) {
                    return (e + 1) % 2
                })))
            },
            odd: function() {
                return this.pushStack(S.grep(this, (function(t, e) {
                    return e % 2
                })))
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (t < 0 ? e : 0);
                return this.pushStack(0 <= i && i < e ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: s,
            sort: i.sort,
            splice: i.splice
        }, S.extend = S.fn.extend = function() {
            var t, e, i, n, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || f(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) n = t[e], "__proto__" !== e && s !== n && (c && n && (S.isPlainObject(n) || (o = Array.isArray(n))) ? (i = s[e], r = o && !Array.isArray(i) ? [] : o || S.isPlainObject(i) ? i : {}, o = !1, s[e] = S.extend(c, r, n)) : void 0 !== n && (s[e] = n));
            return s
        }, S.extend({
            expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isPlainObject: function(t) {
                var e, i;
                return !(!t || "[object Object]" !== c.call(t) || (e = n(t)) && ("function" != typeof(i = u.call(e, "constructor") && e.constructor) || d.call(i) !== h))
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            globalEval: function(t, e, i) {
                y(t, {
                    nonce: e && e.nonce
                }, i)
            },
            each: function(t, e) {
                var i, n = 0;
                if (x(t))
                    for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
                else
                    for (n in t)
                        if (!1 === e.call(t[n], n, t[n])) break;
                return t
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (x(Object(t)) ? S.merge(i, "string" == typeof t ? [t] : t) : s.call(i, t)), i
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : a.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];
                return t.length = o, t
            },
            grep: function(t, e, i) {
                for (var n = [], o = 0, r = t.length, s = !i; o < r; o++) !e(t[o], o) !== s && n.push(t[o]);
                return n
            },
            map: function(t, e, i) {
                var n, o, s = 0,
                    a = [];
                if (x(t))
                    for (n = t.length; s < n; s++) null != (o = e(t[s], s, i)) && a.push(o);
                else
                    for (s in t) null != (o = e(t[s], s, i)) && a.push(o);
                return r(a)
            },
            guid: 1,
            support: p
        }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = i[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
            l["[object " + e + "]"] = e.toLowerCase()
        }));
        var E = function(t) {
            var e, i, n, o, r, s, a, l, c, u, d, h, p, f, m, g, v, y, b, w = "sizzle" + 1 * new Date,
                S = t.document,
                x = 0,
                E = 0,
                k = lt(),
                C = lt(),
                A = lt(),
                L = lt(),
                P = function(t, e) {
                    return t === e && (d = !0), 0
                },
                T = {}.hasOwnProperty,
                _ = [],
                I = _.pop,
                q = _.push,
                D = _.push,
                F = _.slice,
                O = function(t, e) {
                    for (var i = 0, n = t.length; i < n; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                z = "[\\x20\\t\\r\\n\\f]",
                $ = "(?:\\\\[\\da-fA-F]{1,6}" + z + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                j = "\\[" + z + "*(" + $ + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + $ + "))|)" + z + "*\\]",
                N = ":(" + $ + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
                H = new RegExp(z + "+", "g"),
                B = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
                W = new RegExp("^" + z + "*," + z + "*"),
                R = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
                V = new RegExp(z + "|>"),
                U = new RegExp(N),
                G = new RegExp("^" + $ + "$"),
                X = {
                    ID: new RegExp("^#(" + $ + ")"),
                    CLASS: new RegExp("^\\.(" + $ + ")"),
                    TAG: new RegExp("^(" + $ + "|[*])"),
                    ATTR: new RegExp("^" + j),
                    PSEUDO: new RegExp("^" + N),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + M + ")$", "i"),
                    needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i")
                },
                Y = /HTML$/i,
                Z = /^(?:input|select|textarea|button)$/i,
                K = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                tt = /[+~]/,
                et = new RegExp("\\\\[\\da-fA-F]{1,6}" + z + "?|\\\\([^\\r\\n\\f])", "g"),
                it = function(t, e) {
                    var i = "0x" + t.slice(1) - 65536;
                    return e || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
                },
                nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ot = function(t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                },
                rt = function() {
                    h()
                },
                st = wt((function(t) {
                    return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                }), {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                D.apply(_ = F.call(S.childNodes), S.childNodes), _[S.childNodes.length].nodeType
            } catch (e) {
                D = {
                    apply: _.length ? function(t, e) {
                        q.apply(t, F.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }

            function at(t, e, n, o) {
                var r, a, c, u, d, f, v, y = e && e.ownerDocument,
                    S = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== S && 9 !== S && 11 !== S) return n;
                if (!o && (h(e), e = e || p, m)) {
                    if (11 !== S && (d = J.exec(t)))
                        if (r = d[1]) {
                            if (9 === S) {
                                if (!(c = e.getElementById(r))) return n;
                                if (c.id === r) return n.push(c), n
                            } else if (y && (c = y.getElementById(r)) && b(e, c) && c.id === r) return n.push(c), n
                        } else {
                            if (d[2]) return D.apply(n, e.getElementsByTagName(t)), n;
                            if ((r = d[3]) && i.getElementsByClassName && e.getElementsByClassName) return D.apply(n, e.getElementsByClassName(r)), n
                        } if (i.qsa && !L[t + " "] && (!g || !g.test(t)) && (1 !== S || "object" !== e.nodeName.toLowerCase())) {
                        if (v = t, y = e, 1 === S && (V.test(t) || R.test(t))) {
                            for ((y = tt.test(t) && vt(e.parentNode) || e) === e && i.scope || ((u = e.getAttribute("id")) ? u = u.replace(nt, ot) : e.setAttribute("id", u = w)), a = (f = s(t)).length; a--;) f[a] = (u ? "#" + u : ":scope") + " " + bt(f[a]);
                            v = f.join(",")
                        }
                        try {
                            return D.apply(n, y.querySelectorAll(v)), n
                        } catch (e) {
                            L(t, !0)
                        } finally {
                            u === w && e.removeAttribute("id")
                        }
                    }
                }
                return l(t.replace(B, "$1"), e, n, o)
            }

            function lt() {
                var t = [];
                return function e(i, o) {
                    return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = o
                }
            }

            function ct(t) {
                return t[w] = !0, t
            }

            function ut(t) {
                var e = p.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function dt(t, e) {
                for (var i = t.split("|"), o = i.length; o--;) n.attrHandle[i[o]] = e
            }

            function ht(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function pt(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function ft(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function mt(t) {
                return function(e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && st(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function gt(t) {
                return ct((function(e) {
                    return e = +e, ct((function(i, n) {
                        for (var o, r = t([], i.length, e), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                    }))
                }))
            }

            function vt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (e in i = at.support = {}, r = at.isXML = function(t) {
                    var e = t.namespaceURI,
                        i = (t.ownerDocument || t).documentElement;
                    return !Y.test(e || i && i.nodeName || "HTML")
                }, h = at.setDocument = function(t) {
                    var e, o, s = t ? t.ownerDocument || t : S;
                    return s != p && 9 === s.nodeType && s.documentElement && (f = (p = s).documentElement, m = !r(p), S != p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", rt, !1) : o.attachEvent && o.attachEvent("onunload", rt)), i.scope = ut((function(t) {
                        return f.appendChild(t).appendChild(p.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                    })), i.attributes = ut((function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    })), i.getElementsByTagName = ut((function(t) {
                        return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
                    })), i.getElementsByClassName = Q.test(p.getElementsByClassName), i.getById = ut((function(t) {
                        return f.appendChild(t).id = w, !p.getElementsByName || !p.getElementsByName(w).length
                    })), i.getById ? (n.filter.ID = function(t) {
                        var e = t.replace(et, it);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }, n.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && m) {
                            var i = e.getElementById(t);
                            return i ? [i] : []
                        }
                    }) : (n.filter.ID = function(t) {
                        var e = t.replace(et, it);
                        return function(t) {
                            var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return i && i.value === e
                        }
                    }, n.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && m) {
                            var i, n, o, r = e.getElementById(t);
                            if (r) {
                                if ((i = r.getAttributeNode("id")) && i.value === t) return [r];
                                for (o = e.getElementsByName(t), n = 0; r = o[n++];)
                                    if ((i = r.getAttributeNode("id")) && i.value === t) return [r]
                            }
                            return []
                        }
                    }), n.find.TAG = i.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var i, n = [],
                            o = 0,
                            r = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return r
                    }, n.find.CLASS = i.getElementsByClassName && function(t, e) {
                        if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
                    }, v = [], g = [], (i.qsa = Q.test(p.querySelectorAll)) && (ut((function(t) {
                        var e;
                        f.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + z + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + z + "*(?:value|" + M + ")"), t.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), (e = p.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || g.push("\\[" + z + "*name" + z + "*=" + z + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"), t.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                    })), ut((function(t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = p.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + z + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                    }))), (i.matchesSelector = Q.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ut((function(t) {
                        i.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", N)
                    })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = Q.test(f.compareDocumentPosition), b = e || Q.test(f.contains) ? function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, P = e ? function(t, e) {
                        if (t === e) return d = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n || (1 & (n = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t == p || t.ownerDocument == S && b(S, t) ? -1 : e == p || e.ownerDocument == S && b(S, e) ? 1 : u ? O(u, t) - O(u, e) : 0 : 4 & n ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return d = !0, 0;
                        var i, n = 0,
                            o = t.parentNode,
                            r = e.parentNode,
                            s = [t],
                            a = [e];
                        if (!o || !r) return t == p ? -1 : e == p ? 1 : o ? -1 : r ? 1 : u ? O(u, t) - O(u, e) : 0;
                        if (o === r) return ht(t, e);
                        for (i = t; i = i.parentNode;) s.unshift(i);
                        for (i = e; i = i.parentNode;) a.unshift(i);
                        for (; s[n] === a[n];) n++;
                        return n ? ht(s[n], a[n]) : s[n] == S ? -1 : a[n] == S ? 1 : 0
                    }), p
                }, at.matches = function(t, e) {
                    return at(t, null, null, e)
                }, at.matchesSelector = function(t, e) {
                    if (h(t), i.matchesSelector && m && !L[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
                        var n = y.call(t, e);
                        if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                    } catch (t) {
                        L(e, !0)
                    }
                    return 0 < at(e, p, null, [t]).length
                }, at.contains = function(t, e) {
                    return (t.ownerDocument || t) != p && h(t), b(t, e)
                }, at.attr = function(t, e) {
                    (t.ownerDocument || t) != p && h(t);
                    var o = n.attrHandle[e.toLowerCase()],
                        r = o && T.call(n.attrHandle, e.toLowerCase()) ? o(t, e, !m) : void 0;
                    return void 0 !== r ? r : i.attributes || !m ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }, at.escape = function(t) {
                    return (t + "").replace(nt, ot)
                }, at.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, at.uniqueSort = function(t) {
                    var e, n = [],
                        o = 0,
                        r = 0;
                    if (d = !i.detectDuplicates, u = !i.sortStable && t.slice(0), t.sort(P), d) {
                        for (; e = t[r++];) e === t[r] && (o = n.push(r));
                        for (; o--;) t.splice(n[o], 1)
                    }
                    return u = null, t
                }, o = at.getText = function(t) {
                    var e, i = "",
                        n = 0,
                        r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += o(t)
                        } else if (3 === r || 4 === r) return t.nodeValue
                    } else
                        for (; e = t[n++];) i += o(e);
                    return i
                }, (n = at.selectors = {
                    cacheLength: 50,
                    createPseudo: ct,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(et, it), t[3] = (t[3] || t[4] || t[5] || "").replace(et, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, i = !t[6] && t[2];
                            return X.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && U.test(i) && (e = s(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(et, it).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = k[t + " "];
                            return e || (e = new RegExp("(^|" + z + ")" + t + "(" + z + "|$)")) && k(t, (function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            }))
                        },
                        ATTR: function(t, e, i) {
                            return function(n) {
                                var o = at.attr(n, t);
                                return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && -1 < o.indexOf(i) : "$=" === e ? i && o.slice(-i.length) === i : "~=" === e ? -1 < (" " + o.replace(H, " ") + " ").indexOf(i) : "|=" === e && (o === i || o.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(t, e, i, n, o) {
                            var r = "nth" !== t.slice(0, 3),
                                s = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === n && 0 === o ? function(t) {
                                return !!t.parentNode
                            } : function(e, i, l) {
                                var c, u, d, h, p, f, m = r !== s ? "nextSibling" : "previousSibling",
                                    g = e.parentNode,
                                    v = a && e.nodeName.toLowerCase(),
                                    y = !l && !a,
                                    b = !1;
                                if (g) {
                                    if (r) {
                                        for (; m;) {
                                            for (h = e; h = h[m];)
                                                if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                            f = m = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [s ? g.firstChild : g.lastChild], s && y) {
                                        for (b = (p = (c = (u = (d = (h = g)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (b = p = 0) || f.pop();)
                                            if (1 === h.nodeType && ++b && h === e) {
                                                u[t] = [x, p, b];
                                                break
                                            }
                                    } else if (y && (b = p = (c = (u = (d = (h = e)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === x && c[1]), !1 === b)
                                        for (;
                                            (h = ++p && h && h[m] || (b = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (d = h[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] = [x, b]), h !== e)););
                                    return (b -= o) === n || b % n == 0 && 0 <= b / n
                                }
                            }
                        },
                        PSEUDO: function(t, e) {
                            var i, o = n.pseudos[t] || n.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                            return o[w] ? o(e) : 1 < o.length ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? ct((function(t, i) {
                                for (var n, r = o(t, e), s = r.length; s--;) t[n = O(t, r[s])] = !(i[n] = r[s])
                            })) : function(t) {
                                return o(t, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: ct((function(t) {
                            var e = [],
                                i = [],
                                n = a(t.replace(B, "$1"));
                            return n[w] ? ct((function(t, e, i, o) {
                                for (var r, s = n(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                            })) : function(t, o, r) {
                                return e[0] = t, n(e, null, r, i), e[0] = null, !i.pop()
                            }
                        })),
                        has: ct((function(t) {
                            return function(e) {
                                return 0 < at(t, e).length
                            }
                        })),
                        contains: ct((function(t) {
                            return t = t.replace(et, it),
                                function(e) {
                                    return -1 < (e.textContent || o(e)).indexOf(t)
                                }
                        })),
                        lang: ct((function(t) {
                            return G.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, it).toLowerCase(),
                                function(e) {
                                    var i;
                                    do {
                                        if (i = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        })),
                        target: function(e) {
                            var i = t.location && t.location.hash;
                            return i && i.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === f
                        },
                        focus: function(t) {
                            return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: mt(!1),
                        disabled: mt(!0),
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !n.pseudos.empty(t)
                        },
                        header: function(t) {
                            return K.test(t.nodeName)
                        },
                        input: function(t) {
                            return Z.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: gt((function() {
                            return [0]
                        })),
                        last: gt((function(t, e) {
                            return [e - 1]
                        })),
                        eq: gt((function(t, e, i) {
                            return [i < 0 ? i + e : i]
                        })),
                        even: gt((function(t, e) {
                            for (var i = 0; i < e; i += 2) t.push(i);
                            return t
                        })),
                        odd: gt((function(t, e) {
                            for (var i = 1; i < e; i += 2) t.push(i);
                            return t
                        })),
                        lt: gt((function(t, e, i) {
                            for (var n = i < 0 ? i + e : e < i ? e : i; 0 <= --n;) t.push(n);
                            return t
                        })),
                        gt: gt((function(t, e, i) {
                            for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                            return t
                        }))
                    }
                }).pseudos.nth = n.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) n.pseudos[e] = pt(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) n.pseudos[e] = ft(e);

            function yt() {}

            function bt(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                return n
            }

            function wt(t, e, i) {
                var n = e.dir,
                    o = e.next,
                    r = o || n,
                    s = i && "parentNode" === r,
                    a = E++;
                return e.first ? function(e, i, o) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) return t(e, i, o);
                    return !1
                } : function(e, i, l) {
                    var c, u, d, h = [x, a];
                    if (l) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || s) && t(e, i, l)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || s)
                                if (u = (d = e[w] || (e[w] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[n] || e;
                                else {
                                    if ((c = u[r]) && c[0] === x && c[1] === a) return h[2] = c[2];
                                    if ((u[r] = h)[2] = t(e, i, l)) return !0
                                } return !1
                }
            }

            function St(t) {
                return 1 < t.length ? function(e, i, n) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function xt(t, e, i, n, o) {
                for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(r = t[a]) && (i && !i(r, n, o) || (s.push(r), c && e.push(a)));
                return s
            }

            function Et(t, e, i, n, o, r) {
                return n && !n[w] && (n = Et(n)), o && !o[w] && (o = Et(o, r)), ct((function(r, s, a, l) {
                    var c, u, d, h = [],
                        p = [],
                        f = s.length,
                        m = r || function(t, e, i) {
                            for (var n = 0, o = e.length; n < o; n++) at(t, e[n], i);
                            return i
                        }(e || "*", a.nodeType ? [a] : a, []),
                        g = !t || !r && e ? m : xt(m, h, t, a, l),
                        v = i ? o || (r ? t : f || n) ? [] : s : g;
                    if (i && i(g, v, a, l), n)
                        for (c = xt(v, p), n(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[p[u]] = !(g[p[u]] = d));
                    if (r) {
                        if (o || t) {
                            if (o) {
                                for (c = [], u = v.length; u--;)(d = v[u]) && c.push(g[u] = d);
                                o(null, v = [], c, l)
                            }
                            for (u = v.length; u--;)(d = v[u]) && -1 < (c = o ? O(r, d) : h[u]) && (r[c] = !(s[c] = d))
                        }
                    } else v = xt(v === s ? v.splice(f, v.length) : v), o ? o(null, s, v, l) : D.apply(s, v)
                }))
            }

            function kt(t) {
                for (var e, i, o, r = t.length, s = n.relative[t[0].type], a = s || n.relative[" "], l = s ? 1 : 0, u = wt((function(t) {
                        return t === e
                    }), a, !0), d = wt((function(t) {
                        return -1 < O(e, t)
                    }), a, !0), h = [function(t, i, n) {
                        var o = !s && (n || i !== c) || ((e = i).nodeType ? u(t, i, n) : d(t, i, n));
                        return e = null, o
                    }]; l < r; l++)
                    if (i = n.relative[t[l].type]) h = [wt(St(h), i)];
                    else {
                        if ((i = n.filter[t[l].type].apply(null, t[l].matches))[w]) {
                            for (o = ++l; o < r && !n.relative[t[o].type]; o++);
                            return Et(1 < l && St(h), 1 < l && bt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(B, "$1"), i, l < o && kt(t.slice(l, o)), o < r && kt(t = t.slice(o)), o < r && bt(t))
                        }
                        h.push(i)
                    } return St(h)
            }
            return yt.prototype = n.filters = n.pseudos, n.setFilters = new yt, s = at.tokenize = function(t, e) {
                var i, o, r, s, a, l, c, u = C[t + " "];
                if (u) return e ? 0 : u.slice(0);
                for (a = t, l = [], c = n.preFilter; a;) {
                    for (s in i && !(o = W.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = R.exec(a)) && (i = o.shift(), r.push({
                            value: i,
                            type: o[0].replace(B, " ")
                        }), a = a.slice(i.length)), n.filter) !(o = X[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return e ? a.length : a ? at.error(t) : C(t, l).slice(0)
            }, a = at.compile = function(t, e) {
                var i, o, r, a, l, u, d = [],
                    f = [],
                    g = A[t + " "];
                if (!g) {
                    for (e || (e = s(t)), i = e.length; i--;)(g = kt(e[i]))[w] ? d.push(g) : f.push(g);
                    (g = A(t, (o = f, a = 0 < (r = d).length, l = 0 < o.length, u = function(t, e, i, s, u) {
                        var d, f, g, v = 0,
                            y = "0",
                            b = t && [],
                            w = [],
                            S = c,
                            E = t || l && n.find.TAG("*", u),
                            k = x += null == S ? 1 : Math.random() || .1,
                            C = E.length;
                        for (u && (c = e == p || e || u); y !== C && null != (d = E[y]); y++) {
                            if (l && d) {
                                for (f = 0, e || d.ownerDocument == p || (h(d), i = !m); g = o[f++];)
                                    if (g(d, e || p, i)) {
                                        s.push(d);
                                        break
                                    } u && (x = k)
                            }
                            a && ((d = !g && d) && v--, t && b.push(d))
                        }
                        if (v += y, a && y !== v) {
                            for (f = 0; g = r[f++];) g(b, w, e, i);
                            if (t) {
                                if (0 < v)
                                    for (; y--;) b[y] || w[y] || (w[y] = I.call(s));
                                w = xt(w)
                            }
                            D.apply(s, w), u && !t && 0 < w.length && 1 < v + r.length && at.uniqueSort(s)
                        }
                        return u && (x = k, c = S), b
                    }, a ? ct(u) : u))).selector = t
                }
                return g
            }, l = at.select = function(t, e, i, o) {
                var r, l, c, u, d, h = "function" == typeof t && t,
                    p = !o && s(t = h.selector || t);
                if (i = i || [], 1 === p.length) {
                    if (2 < (l = p[0] = p[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === e.nodeType && m && n.relative[l[1].type]) {
                        if (!(e = (n.find.ID(c.matches[0].replace(et, it), e) || [])[0])) return i;
                        h && (e = e.parentNode), t = t.slice(l.shift().value.length)
                    }
                    for (r = X.needsContext.test(t) ? 0 : l.length; r-- && (c = l[r], !n.relative[u = c.type]);)
                        if ((d = n.find[u]) && (o = d(c.matches[0].replace(et, it), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                            if (l.splice(r, 1), !(t = o.length && bt(l))) return D.apply(i, o), i;
                            break
                        }
                }
                return (h || a(t, p))(o, e, !m, i, !e || tt.test(t) && vt(e.parentNode) || e), i
            }, i.sortStable = w.split("").sort(P).join("") === w, i.detectDuplicates = !!d, h(), i.sortDetached = ut((function(t) {
                return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
            })), ut((function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            })) || dt("type|href|height|width", (function(t, e, i) {
                if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            })), i.attributes && ut((function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            })) || dt("value", (function(t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            })), ut((function(t) {
                return null == t.getAttribute("disabled")
            })) || dt(M, (function(t, e, i) {
                var n;
                if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            })), at
        }(t);
        S.find = E, S.expr = E.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = E.uniqueSort, S.text = E.getText, S.isXMLDoc = E.isXML, S.contains = E.contains, S.escapeSelector = E.escape;
        var k = function(t, e, i) {
                for (var n = [], o = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && S(t).is(i)) break;
                        n.push(t)
                    } return n
            },
            C = function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            A = S.expr.match.needsContext;

        function L(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function T(t, e, i) {
            return f(e) ? S.grep(t, (function(t, n) {
                return !!e.call(t, n, t) !== i
            })) : e.nodeType ? S.grep(t, (function(t) {
                return t === e !== i
            })) : "string" != typeof e ? S.grep(t, (function(t) {
                return -1 < a.call(e, t) !== i
            })) : S.filter(e, t, i)
        }
        S.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? S.find.matchesSelector(n, t) ? [n] : [] : S.find.matches(t, S.grep(e, (function(t) {
                return 1 === t.nodeType
            })))
        }, S.fn.extend({
            find: function(t) {
                var e, i, n = this.length,
                    o = this;
                if ("string" != typeof t) return this.pushStack(S(t).filter((function() {
                    for (e = 0; e < n; e++)
                        if (S.contains(o[e], this)) return !0
                })));
                for (i = this.pushStack([]), e = 0; e < n; e++) S.find(t, o[e], i);
                return 1 < n ? S.uniqueSort(i) : i
            },
            filter: function(t) {
                return this.pushStack(T(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(T(this, t || [], !0))
            },
            is: function(t) {
                return !!T(this, "string" == typeof t && A.test(t) ? S(t) : t || [], !1).length
            }
        });
        var _, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (S.fn.init = function(t, e, i) {
            var n, o;
            if (!t) return this;
            if (i = i || _, "string" == typeof t) {
                if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : I.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof S ? e[0] : e, S.merge(this, S.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : g, !0)), P.test(n[1]) && S.isPlainObject(e))
                        for (n in e) f(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return (o = g.getElementById(n[2])) && (this[0] = o, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : f(t) ? void 0 !== i.ready ? i.ready(t) : t(S) : S.makeArray(t, this)
        }).prototype = S.fn, _ = S(g);
        var q = /^(?:parents|prev(?:Until|All))/,
            D = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function F(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }
        S.fn.extend({
            has: function(t) {
                var e = S(t, this),
                    i = e.length;
                return this.filter((function() {
                    for (var t = 0; t < i; t++)
                        if (S.contains(this, e[t])) return !0
                }))
            },
            closest: function(t, e) {
                var i, n = 0,
                    o = this.length,
                    r = [],
                    s = "string" != typeof t && S(t);
                if (!A.test(t))
                    for (; n < o; n++)
                        for (i = this[n]; i && i !== e; i = i.parentNode)
                            if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && S.find.matchesSelector(i, t))) {
                                r.push(i);
                                break
                            } return this.pushStack(1 < r.length ? S.uniqueSort(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? a.call(S(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(S.uniqueSort(S.merge(this.get(), S(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), S.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return k(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return k(t, "parentNode", i)
            },
            next: function(t) {
                return F(t, "nextSibling")
            },
            prev: function(t) {
                return F(t, "previousSibling")
            },
            nextAll: function(t) {
                return k(t, "nextSibling")
            },
            prevAll: function(t) {
                return k(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return k(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return k(t, "previousSibling", i)
            },
            siblings: function(t) {
                return C((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return C(t.firstChild)
            },
            contents: function(t) {
                return null != t.contentDocument && n(t.contentDocument) ? t.contentDocument : (L(t, "template") && (t = t.content || t), S.merge([], t.childNodes))
            }
        }, (function(t, e) {
            S.fn[t] = function(i, n) {
                var o = S.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = S.filter(n, o)), 1 < this.length && (D[t] || S.uniqueSort(o), q.test(t) && o.reverse()), this.pushStack(o)
            }
        }));
        var O = /[^\x20\t\r\n\f]+/g;

        function M(t) {
            return t
        }

        function z(t) {
            throw t
        }

        function $(t, e, i, n) {
            var o;
            try {
                t && f(o = t.promise) ? o.call(t).done(e).fail(i) : t && f(o = t.then) ? o.call(t, e, i) : e.apply(void 0, [t].slice(n))
            } catch (t) {
                i.apply(void 0, [t])
            }
        }
        S.Callbacks = function(t) {
            var e, i;
            t = "string" == typeof t ? (e = t, i = {}, S.each(e.match(O) || [], (function(t, e) {
                i[e] = !0
            })), i) : S.extend({}, t);
            var n, o, r, s, a = [],
                l = [],
                c = -1,
                u = function() {
                    for (s = s || t.once, r = n = !0; l.length; c = -1)
                        for (o = l.shift(); ++c < a.length;) !1 === a[c].apply(o[0], o[1]) && t.stopOnFalse && (c = a.length, o = !1);
                    t.memory || (o = !1), n = !1, s && (a = o ? [] : "")
                },
                d = {
                    add: function() {
                        return a && (o && !n && (c = a.length - 1, l.push(o)), function e(i) {
                            S.each(i, (function(i, n) {
                                f(n) ? t.unique && d.has(n) || a.push(n) : n && n.length && "string" !== b(n) && e(n)
                            }))
                        }(arguments), o && !n && u()), this
                    },
                    remove: function() {
                        return S.each(arguments, (function(t, e) {
                            for (var i; - 1 < (i = S.inArray(e, a, i));) a.splice(i, 1), i <= c && c--
                        })), this
                    },
                    has: function(t) {
                        return t ? -1 < S.inArray(t, a) : 0 < a.length
                    },
                    empty: function() {
                        return a && (a = []), this
                    },
                    disable: function() {
                        return s = l = [], a = o = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return s = l = [], o || n || (a = o = ""), this
                    },
                    locked: function() {
                        return !!s
                    },
                    fireWith: function(t, e) {
                        return s || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), n || u()), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return d
        }, S.extend({
            Deferred: function(e) {
                var i = [
                        ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                        ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                    ],
                    n = "pending",
                    o = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        catch: function(t) {
                            return o.then(null, t)
                        },
                        pipe: function() {
                            var t = arguments;
                            return S.Deferred((function(e) {
                                S.each(i, (function(i, n) {
                                    var o = f(t[n[4]]) && t[n[4]];
                                    r[n[1]]((function() {
                                        var t = o && o.apply(this, arguments);
                                        t && f(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, o ? [t] : arguments)
                                    }))
                                })), t = null
                            })).promise()
                        },
                        then: function(e, n, o) {
                            var r = 0;

                            function s(e, i, n, o) {
                                return function() {
                                    var a = this,
                                        l = arguments,
                                        c = function() {
                                            var t, c;
                                            if (!(e < r)) {
                                                if ((t = n.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                                c = t && ("object" == typeof t || "function" == typeof t) && t.then, f(c) ? o ? c.call(t, s(r, i, M, o), s(r, i, z, o)) : (r++, c.call(t, s(r, i, M, o), s(r, i, z, o), s(r, i, M, i.notifyWith))) : (n !== M && (a = void 0, l = [t]), (o || i.resolveWith)(a, l))
                                            }
                                        },
                                        u = o ? c : function() {
                                            try {
                                                c()
                                            } catch (t) {
                                                S.Deferred.exceptionHook && S.Deferred.exceptionHook(t, u.stackTrace), r <= e + 1 && (n !== z && (a = void 0, l = [t]), i.rejectWith(a, l))
                                            }
                                        };
                                    e ? u() : (S.Deferred.getStackHook && (u.stackTrace = S.Deferred.getStackHook()), t.setTimeout(u))
                                }
                            }
                            return S.Deferred((function(t) {
                                i[0][3].add(s(0, t, f(o) ? o : M, t.notifyWith)), i[1][3].add(s(0, t, f(e) ? e : M)), i[2][3].add(s(0, t, f(n) ? n : z))
                            })).promise()
                        },
                        promise: function(t) {
                            return null != t ? S.extend(t, o) : o
                        }
                    },
                    r = {};
                return S.each(i, (function(t, e) {
                    var s = e[2],
                        a = e[5];
                    o[e[1]] = s.add, a && s.add((function() {
                        n = a
                    }), i[3 - t][2].disable, i[3 - t][3].disable, i[0][2].lock, i[0][3].lock), s.add(e[3].fire), r[e[0]] = function() {
                        return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                    }, r[e[0] + "With"] = s.fireWith
                })), o.promise(r), e && e.call(r, r), r
            },
            when: function(t) {
                var e = arguments.length,
                    i = e,
                    n = Array(i),
                    r = o.call(arguments),
                    s = S.Deferred(),
                    a = function(t) {
                        return function(i) {
                            n[t] = this, r[t] = 1 < arguments.length ? o.call(arguments) : i, --e || s.resolveWith(n, r)
                        }
                    };
                if (e <= 1 && ($(t, s.done(a(i)).resolve, s.reject, !e), "pending" === s.state() || f(r[i] && r[i].then))) return s.then();
                for (; i--;) $(r[i], a(i), s.reject);
                return s.promise()
            }
        });
        var j = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        S.Deferred.exceptionHook = function(e, i) {
            t.console && t.console.warn && e && j.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
        }, S.readyException = function(e) {
            t.setTimeout((function() {
                throw e
            }))
        };
        var N = S.Deferred();

        function H() {
            g.removeEventListener("DOMContentLoaded", H), t.removeEventListener("load", H), S.ready()
        }
        S.fn.ready = function(t) {
            return N.then(t).catch((function(t) {
                S.readyException(t)
            })), this
        }, S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --S.readyWait : S.isReady) || (S.isReady = !0) !== t && 0 < --S.readyWait || N.resolveWith(g, [S])
            }
        }), S.ready.then = N.then, "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll ? t.setTimeout(S.ready) : (g.addEventListener("DOMContentLoaded2", H), t.addEventListener("load", H));
        var B = function(t, e, i, n, o, r, s) {
                var a = 0,
                    l = t.length,
                    c = null == i;
                if ("object" === b(i))
                    for (a in o = !0, i) B(t, e, a, i[a], !0, r, s);
                else if (void 0 !== n && (o = !0, f(n) || (s = !0), c && (s ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                        return c.call(S(t), i)
                    })), e))
                    for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
                return o ? t : c ? e.call(t) : l ? e(t[0], i) : r
            },
            W = /^-ms-/,
            R = /-([a-z])/g;

        function V(t, e) {
            return e.toUpperCase()
        }

        function U(t) {
            return t.replace(W, "ms-").replace(R, V)
        }
        var G = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

        function X() {
            this.expando = S.expando + X.uid++
        }
        X.uid = 1, X.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, G(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, i) {
                var n, o = this.cache(t);
                if ("string" == typeof e) o[U(e)] = i;
                else
                    for (n in e) o[U(n)] = e[n];
                return o
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][U(e)]
            },
            access: function(t, e, i) {
                return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n = t[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== e) {
                        i = (e = Array.isArray(e) ? e.map(U) : (e = U(e)) in n ? [e] : e.match(O) || []).length;
                        for (; i--;) delete n[e[i]]
                    }(void 0 === e || S.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !S.isEmptyObject(e)
            }
        };
        var Y = new X,
            Z = new X,
            K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Q = /[A-Z]/g;

        function J(t, e, i) {
            var n, o;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(Q, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                    try {
                        i = "true" === (o = i) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : K.test(o) ? JSON.parse(o) : o)
                    } catch (t) {}
                    Z.set(t, e, i)
                } else i = void 0;
            return i
        }
        S.extend({
            hasData: function(t) {
                return Z.hasData(t) || Y.hasData(t)
            },
            data: function(t, e, i) {
                return Z.access(t, e, i)
            },
            removeData: function(t, e) {
                Z.remove(t, e)
            },
            _data: function(t, e, i) {
                return Y.access(t, e, i)
            },
            _removeData: function(t, e) {
                Y.remove(t, e)
            }
        }), S.fn.extend({
            data: function(t, e) {
                var i, n, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = Z.get(r), 1 === r.nodeType && !Y.get(r, "hasDataAttrs"))) {
                        for (i = s.length; i--;) s[i] && 0 === (n = s[i].name).indexOf("data-") && (n = U(n.slice(5)), J(r, n, o[n]));
                        Y.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each((function() {
                    Z.set(this, t)
                })) : B(this, (function(e) {
                    var i;
                    if (r && void 0 === e) return void 0 !== (i = Z.get(r, t)) || void 0 !== (i = J(r, t)) ? i : void 0;
                    this.each((function() {
                        Z.set(this, t, e)
                    }))
                }), null, e, 1 < arguments.length, null, !0)
            },
            removeData: function(t) {
                return this.each((function() {
                    Z.remove(this, t)
                }))
            }
        }), S.extend({
            queue: function(t, e, i) {
                var n;
                if (t) return e = (e || "fx") + "queue", n = Y.get(t, e), i && (!n || Array.isArray(i) ? n = Y.access(t, e, S.makeArray(i)) : n.push(i)), n || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = S.queue(t, e),
                    n = i.length,
                    o = i.shift(),
                    r = S._queueHooks(t, e);
                "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, (function() {
                    S.dequeue(t, e)
                }), r)), !n && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return Y.get(t, i) || Y.access(t, i, {
                    empty: S.Callbacks("once memory").add((function() {
                        Y.remove(t, [e + "queue", i])
                    }))
                })
            }
        }), S.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? S.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                    var i = S.queue(this, t, e);
                    S._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && S.dequeue(this, t)
                }))
            },
            dequeue: function(t) {
                return this.each((function() {
                    S.dequeue(this, t)
                }))
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    o = S.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {
                        --n || o.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(i = Y.get(r[s], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
            it = ["Top", "Right", "Bottom", "Left"],
            nt = g.documentElement,
            ot = function(t) {
                return S.contains(t.ownerDocument, t)
            },
            rt = {
                composed: !0
            };
        nt.getRootNode && (ot = function(t) {
            return S.contains(t.ownerDocument, t) || t.getRootNode(rt) === t.ownerDocument
        });
        var st = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && ot(t) && "none" === S.css(t, "display")
        };

        function at(t, e, i, n) {
            var o, r, s = 20,
                a = n ? function() {
                    return n.cur()
                } : function() {
                    return S.css(t, e, "")
                },
                l = a(),
                c = i && i[3] || (S.cssNumber[e] ? "" : "px"),
                u = t.nodeType && (S.cssNumber[e] || "px" !== c && +l) && et.exec(S.css(t, e));
            if (u && u[3] !== c) {
                for (l /= 2, c = c || u[3], u = +l || 1; s--;) S.style(t, e, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
                u *= 2, S.style(t, e, u + c), i = i || []
            }
            return i && (u = +u || +l || 0, o = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = o)), o
        }
        var lt = {};

        function ct(t, e) {
            for (var i, n, o, r, s, a, l, c = [], u = 0, d = t.length; u < d; u++)(n = t[u]).style && (i = n.style.display, e ? ("none" === i && (c[u] = Y.get(n, "display") || null, c[u] || (n.style.display = "")), "" === n.style.display && st(n) && (c[u] = (l = s = r = void 0, s = (o = n).ownerDocument, a = o.nodeName, (l = lt[a]) || (r = s.body.appendChild(s.createElement(a)), l = S.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), lt[a] = l)))) : "none" !== i && (c[u] = "none", Y.set(n, "display", i)));
            for (u = 0; u < d; u++) null != c[u] && (t[u].style.display = c[u]);
            return t
        }
        S.fn.extend({
            show: function() {
                return ct(this, !0)
            },
            hide: function() {
                return ct(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                    st(this) ? S(this).show() : S(this).hide()
                }))
            }
        });
        var ut, dt, ht = /^(?:checkbox|radio)$/i,
            pt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ft = /^$|^module$|\/(?:java|ecma)script/i;
        ut = g.createDocumentFragment().appendChild(g.createElement("div")), (dt = g.createElement("input")).setAttribute("type", "radio"), dt.setAttribute("checked", "checked"), dt.setAttribute("name", "t"), ut.appendChild(dt), p.checkClone = ut.cloneNode(!0).cloneNode(!0).lastChild.checked, ut.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ut.cloneNode(!0).lastChild.defaultValue, ut.innerHTML = "<option></option>", p.option = !!ut.lastChild;
        var mt = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function gt(t, e) {
            var i;
            return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && L(t, e) ? S.merge([t], i) : i
        }

        function vt(t, e) {
            for (var i = 0, n = t.length; i < n; i++) Y.set(t[i], "globalEval", !e || Y.get(e[i], "globalEval"))
        }
        mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead, mt.th = mt.td, p.option || (mt.optgroup = mt.option = [1, "<select multiple='multiple'>", "</select>"]);
        var yt = /<|&#?\w+;/;

        function bt(t, e, i, n, o) {
            for (var r, s, a, l, c, u, d = e.createDocumentFragment(), h = [], p = 0, f = t.length; p < f; p++)
                if ((r = t[p]) || 0 === r)
                    if ("object" === b(r)) S.merge(h, r.nodeType ? [r] : r);
                    else if (yt.test(r)) {
                for (s = s || d.appendChild(e.createElement("div")), a = (pt.exec(r) || ["", ""])[1].toLowerCase(), l = mt[a] || mt._default, s.innerHTML = l[1] + S.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
                S.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
            } else h.push(e.createTextNode(r));
            for (d.textContent = "", p = 0; r = h[p++];)
                if (n && -1 < S.inArray(r, n)) o && o.push(r);
                else if (c = ot(r), s = gt(d.appendChild(r), "script"), c && vt(s), i)
                for (u = 0; r = s[u++];) ft.test(r.type || "") && i.push(r);
            return d
        }
        var wt = /^key/,
            St = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            xt = /^([^.]*)(?:\.(.+)|)/;

        function Et() {
            return !0
        }

        function kt() {
            return !1
        }

        function Ct(t, e) {
            return t === function() {
                try {
                    return g.activeElement
                } catch (t) {}
            }() == ("focus" === e)
        }

        function At(t, e, i, n, o, r) {
            var s, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof i && (n = n || i, i = void 0), e) At(t, a, i, n, e[a], r);
                return t
            }
            if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = kt;
            else if (!o) return t;
            return 1 === r && (s = o, (o = function(t) {
                return S().off(t), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = S.guid++)), t.each((function() {
                S.event.add(this, e, o, n, i)
            }))
        }

        function Lt(t, e, i) {
            i ? (Y.set(t, e, !1), S.event.add(t, e, {
                namespace: !1,
                handler: function(t) {
                    var n, r, s = Y.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                        if (s.length)(S.event.special[e] || {}).delegateType && t.stopPropagation();
                        else if (s = o.call(arguments), Y.set(this, e, s), n = i(this, e), this[e](), s !== (r = Y.get(this, e)) || n ? Y.set(this, e, !1) : r = {}, s !== r) return t.stopImmediatePropagation(), t.preventDefault(), r.value
                    } else s.length && (Y.set(this, e, {
                        value: S.event.trigger(S.extend(s[0], S.Event.prototype), s.slice(1), this)
                    }), t.stopImmediatePropagation())
                }
            })) : void 0 === Y.get(t, e) && S.event.add(t, e, Et)
        }
        S.event = {
            global: {},
            add: function(t, e, i, n, o) {
                var r, s, a, l, c, u, d, h, p, f, m, g = Y.get(t);
                if (G(t))
                    for (i.handler && (i = (r = i).handler, o = r.selector), o && S.find.matchesSelector(nt, o), i.guid || (i.guid = S.guid++), (l = g.events) || (l = g.events = Object.create(null)), (s = g.handle) || (s = g.handle = function(e) {
                            return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                        }), c = (e = (e || "").match(O) || [""]).length; c--;) p = m = (a = xt.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (d = S.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = S.event.special[p] || {}, u = S.extend({
                        type: p,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && S.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, r), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, n, f, s) || t.addEventListener && t.addEventListener(p, s)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), S.event.global[p] = !0)
            },
            remove: function(t, e, i, n, o) {
                var r, s, a, l, c, u, d, h, p, f, m, g = Y.hasData(t) && Y.get(t);
                if (g && (l = g.events)) {
                    for (c = (e = (e || "").match(O) || [""]).length; c--;)
                        if (p = m = (a = xt.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                            for (d = S.event.special[p] || {}, h = l[p = (n ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) u = h[r], !o && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
                            s && !h.length && (d.teardown && !1 !== d.teardown.call(t, f, g.handle) || S.removeEvent(t, p, g.handle), delete l[p])
                        } else
                            for (p in l) S.event.remove(t, p + e[c], i, n, !0);
                    S.isEmptyObject(l) && Y.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, i, n, o, r, s, a = new Array(arguments.length),
                    l = S.event.fix(t),
                    c = (Y.get(this, "events") || Object.create(null))[l.type] || [],
                    u = S.event.special[l.type] || {};
                for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
                if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                    for (s = S.event.handlers.call(this, l, c), e = 0;
                        (o = s[e++]) && !l.isPropagationStopped();)
                        for (l.currentTarget = o.elem, i = 0;
                            (r = o.handlers[i++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (n = ((S.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, l), l.result
                }
            },
            handlers: function(t, e) {
                var i, n, o, r, s, a = [],
                    l = e.delegateCount,
                    c = t.target;
                if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                            for (r = [], s = {}, i = 0; i < l; i++) void 0 === s[o = (n = e[i]).selector + " "] && (s[o] = n.needsContext ? -1 < S(o, this).index(c) : S.find(o, this, null, [c]).length), s[o] && r.push(n);
                            r.length && a.push({
                                elem: c,
                                handlers: r
                            })
                        } return c = this, l < e.length && a.push({
                    elem: c,
                    handlers: e.slice(l)
                }), a
            },
            addProp: function(t, e) {
                Object.defineProperty(S.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: f(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[S.expando] ? t : new S.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(t) {
                        var e = this || t;
                        return ht.test(e.type) && e.click && L(e, "input") && Lt(e, "click", Et), !1
                    },
                    trigger: function(t) {
                        var e = this || t;
                        return ht.test(e.type) && e.click && L(e, "input") && Lt(e, "click"), !0
                    },
                    _default: function(t) {
                        var e = t.target;
                        return ht.test(e.type) && e.click && L(e, "input") && Y.get(e, "click") || L(e, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, S.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, S.Event = function(t, e) {
            if (!(this instanceof S.Event)) return new S.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Et : kt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && S.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[S.expando] = !0
        }, S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: kt,
            isPropagationStopped: kt,
            isImmediatePropagationStopped: kt,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = Et, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = Et, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = Et, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, S.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && wt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && St.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, S.event.addProp), S.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(t, e) {
            S.event.special[t] = {
                setup: function() {
                    return Lt(this, t, Ct), !1
                },
                trigger: function() {
                    return Lt(this, t), !0
                },
                delegateType: e
            }
        })), S.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(t, e) {
            S.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = t.relatedTarget,
                        o = t.handleObj;
                    return n && (n === this || S.contains(this, n)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        })), S.fn.extend({
            on: function(t, e, i, n) {
                return At(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return At(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, o;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, S(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = kt), this.each((function() {
                    S.event.remove(this, t, i, e)
                }))
            }
        });
        var Pt = /<script|<style|<link/i,
            Tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            _t = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function It(t, e) {
            return L(t, "table") && L(11 !== e.nodeType ? e : e.firstChild, "tr") && S(t).children("tbody")[0] || t
        }

        function qt(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function Dt(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function Ft(t, e) {
            var i, n, o, r, s, a;
            if (1 === e.nodeType) {
                if (Y.hasData(t) && (a = Y.get(t).events))
                    for (o in Y.remove(e, "handle events"), a)
                        for (i = 0, n = a[o].length; i < n; i++) S.event.add(e, o, a[o][i]);
                Z.hasData(t) && (r = Z.access(t), s = S.extend({}, r), Z.set(e, s))
            }
        }

        function Ot(t, e, i, n) {
            e = r(e);
            var o, s, a, l, c, u, d = 0,
                h = t.length,
                m = h - 1,
                g = e[0],
                v = f(g);
            if (v || 1 < h && "string" == typeof g && !p.checkClone && Tt.test(g)) return t.each((function(o) {
                var r = t.eq(o);
                v && (e[0] = g.call(this, o, r.html())), Ot(r, e, i, n)
            }));
            if (h && (s = (o = bt(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === o.childNodes.length && (o = s), s || n)) {
                for (l = (a = S.map(gt(o, "script"), qt)).length; d < h; d++) c = o, d !== m && (c = S.clone(c, !0, !0), l && S.merge(a, gt(c, "script"))), i.call(t[d], c, d);
                if (l)
                    for (u = a[a.length - 1].ownerDocument, S.map(a, Dt), d = 0; d < l; d++) c = a[d], ft.test(c.type || "") && !Y.access(c, "globalEval") && S.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? S._evalUrl && !c.noModule && S._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce")
                    }, u) : y(c.textContent.replace(_t, ""), c, u))
            }
            return t
        }

        function Mt(t, e, i) {
            for (var n, o = e ? S.filter(e, t) : t, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || S.cleanData(gt(n)), n.parentNode && (i && ot(n) && vt(gt(n, "script")), n.parentNode.removeChild(n));
            return t
        }
        S.extend({
            htmlPrefilter: function(t) {
                return t
            },
            clone: function(t, e, i) {
                var n, o, r, s, a, l, c, u = t.cloneNode(!0),
                    d = ot(t);
                if (!(p.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || S.isXMLDoc(t)))
                    for (s = gt(u), n = 0, o = (r = gt(t)).length; n < o; n++) a = r[n], "input" === (c = (l = s[n]).nodeName.toLowerCase()) && ht.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
                if (e)
                    if (i)
                        for (r = r || gt(t), s = s || gt(u), n = 0, o = r.length; n < o; n++) Ft(r[n], s[n]);
                    else Ft(t, u);
                return 0 < (s = gt(u, "script")).length && vt(s, !d && gt(t, "script")), u
            },
            cleanData: function(t) {
                for (var e, i, n, o = S.event.special, r = 0; void 0 !== (i = t[r]); r++)
                    if (G(i)) {
                        if (e = i[Y.expando]) {
                            if (e.events)
                                for (n in e.events) o[n] ? S.event.remove(i, n) : S.removeEvent(i, n, e.handle);
                            i[Y.expando] = void 0
                        }
                        i[Z.expando] && (i[Z.expando] = void 0)
                    }
            }
        }), S.fn.extend({
            detach: function(t) {
                return Mt(this, t, !0)
            },
            remove: function(t) {
                return Mt(this, t)
            },
            text: function(t) {
                return B(this, (function(t) {
                    return void 0 === t ? S.text(this) : this.empty().each((function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    }))
                }), null, t, arguments.length)
            },
            append: function() {
                return Ot(this, arguments, (function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || It(this, t).appendChild(t)
                }))
            },
            prepend: function() {
                return Ot(this, arguments, (function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = It(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                }))
            },
            before: function() {
                return Ot(this, arguments, (function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                }))
            },
            after: function() {
                return Ot(this, arguments, (function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                }))
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (S.cleanData(gt(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map((function() {
                    return S.clone(this, t, e)
                }))
            },
            html: function(t) {
                return B(this, (function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Pt.test(t) && !mt[(pt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = S.htmlPrefilter(t);
                        try {
                            for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (S.cleanData(gt(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }), null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return Ot(this, arguments, (function(e) {
                    var i = this.parentNode;
                    S.inArray(this, t) < 0 && (S.cleanData(gt(this)), i && i.replaceChild(e, this))
                }), t)
            }
        }), S.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(t, e) {
            S.fn[t] = function(t) {
                for (var i, n = [], o = S(t), r = o.length - 1, a = 0; a <= r; a++) i = a === r ? this : this.clone(!0), S(o[a])[e](i), s.apply(n, i.get());
                return this.pushStack(n)
            }
        }));
        var zt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
            $t = function(e) {
                var i = e.ownerDocument.defaultView;
                return i && i.opener || (i = t), i.getComputedStyle(e)
            },
            jt = function(t, e, i) {
                var n, o, r = {};
                for (o in e) r[o] = t.style[o], t.style[o] = e[o];
                for (o in n = i.call(t), e) t.style[o] = r[o];
                return n
            },
            Nt = new RegExp(it.join("|"), "i");

        function Ht(t, e, i) {
            var n, o, r, s, a = t.style;
            return (i = i || $t(t)) && ("" !== (s = i.getPropertyValue(e) || i[e]) || ot(t) || (s = S.style(t, e)), !p.pixelBoxStyles() && zt.test(s) && Nt.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
        }

        function Bt(t, e) {
            return {
                get: function() {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (u) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", nt.appendChild(c).appendChild(u);
                    var e = t.getComputedStyle(u);
                    n = "1%" !== e.top, l = 12 === i(e.marginLeft), u.style.right = "60%", s = 36 === i(e.right), o = 36 === i(e.width), u.style.position = "absolute", r = 12 === i(u.offsetWidth / 3), nt.removeChild(c), u = null
                }
            }

            function i(t) {
                return Math.round(parseFloat(t))
            }
            var n, o, r, s, a, l, c = g.createElement("div"),
                u = g.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, S.extend(p, {
                boxSizingReliable: function() {
                    return e(), o
                },
                pixelBoxStyles: function() {
                    return e(), s
                },
                pixelPosition: function() {
                    return e(), n
                },
                reliableMarginLeft: function() {
                    return e(), l
                },
                scrollboxSize: function() {
                    return e(), r
                },
                reliableTrDimensions: function() {
                    var e, i, n, o;
                    return null == a && (e = g.createElement("table"), i = g.createElement("tr"), n = g.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", i.style.height = "1px", n.style.height = "9px", nt.appendChild(e).appendChild(i).appendChild(n), o = t.getComputedStyle(i), a = 3 < parseInt(o.height), nt.removeChild(e)), a
                }
            }))
        }();
        var Wt = ["Webkit", "Moz", "ms"],
            Rt = g.createElement("div").style,
            Vt = {};

        function Ut(t) {
            return S.cssProps[t] || Vt[t] || (t in Rt ? t : Vt[t] = function(t) {
                for (var e = t[0].toUpperCase() + t.slice(1), i = Wt.length; i--;)
                    if ((t = Wt[i] + e) in Rt) return t
            }(t) || t)
        }
        var Gt = /^(none|table(?!-c[ea]).+)/,
            Xt = /^--/,
            Yt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Zt = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Kt(t, e, i) {
            var n = et.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function Qt(t, e, i, n, o, r) {
            var s = "width" === e ? 1 : 0,
                a = 0,
                l = 0;
            if (i === (n ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === i && (l += S.css(t, i + it[s], !0, o)), n ? ("content" === i && (l -= S.css(t, "padding" + it[s], !0, o)), "margin" !== i && (l -= S.css(t, "border" + it[s] + "Width", !0, o))) : (l += S.css(t, "padding" + it[s], !0, o), "padding" !== i ? l += S.css(t, "border" + it[s] + "Width", !0, o) : a += S.css(t, "border" + it[s] + "Width", !0, o));
            return !n && 0 <= r && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5)) || 0), l
        }

        function Jt(t, e, i) {
            var n = $t(t),
                o = (!p.boxSizingReliable() || i) && "border-box" === S.css(t, "boxSizing", !1, n),
                r = o,
                s = Ht(t, e, n),
                a = "offset" + e[0].toUpperCase() + e.slice(1);
            if (zt.test(s)) {
                if (!i) return s;
                s = "auto"
            }
            return (!p.boxSizingReliable() && o || !p.reliableTrDimensions() && L(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === S.css(t, "display", !1, n)) && t.getClientRects().length && (o = "border-box" === S.css(t, "boxSizing", !1, n), (r = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + Qt(t, e, i || (o ? "border" : "content"), r, n, s) + "px"
        }

        function te(t, e, i, n, o) {
            return new te.prototype.init(t, e, i, n, o)
        }
        S.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = Ht(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = U(e),
                        l = Xt.test(e),
                        c = t.style;
                    if (l || (e = Ut(a)), s = S.cssHooks[e] || S.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : c[e];
                    "string" == (r = typeof i) && (o = et.exec(i)) && o[1] && (i = at(t, e, o), r = "number"), null != i && i == i && ("number" !== r || l || (i += o && o[3] || (S.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))
                }
            },
            css: function(t, e, i, n) {
                var o, r, s, a = U(e);
                return Xt.test(e) || (e = Ut(a)), (s = S.cssHooks[e] || S.cssHooks[a]) && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = Ht(t, e, n)), "normal" === o && e in Zt && (o = Zt[e]), "" === i || i ? (r = parseFloat(o), !0 === i || isFinite(r) ? r || 0 : o) : o
            }
        }), S.each(["height", "width"], (function(t, e) {
            S.cssHooks[e] = {
                get: function(t, i, n) {
                    if (i) return !Gt.test(S.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Jt(t, e, n) : jt(t, Yt, (function() {
                        return Jt(t, e, n)
                    }))
                },
                set: function(t, i, n) {
                    var o, r = $t(t),
                        s = !p.scrollboxSize() && "absolute" === r.position,
                        a = (s || n) && "border-box" === S.css(t, "boxSizing", !1, r),
                        l = n ? Qt(t, e, n, a, r) : 0;
                    return a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - Qt(t, e, "border", !1, r) - .5)), l && (o = et.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = S.css(t, e)), Kt(0, i, l)
                }
            }
        })), S.cssHooks.marginLeft = Bt(p.reliableMarginLeft, (function(t, e) {
            if (e) return (parseFloat(Ht(t, "marginLeft")) || t.getBoundingClientRect().left - jt(t, {
                marginLeft: 0
            }, (function() {
                return t.getBoundingClientRect().left
            }))) + "px"
        })), S.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(t, e) {
            S.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[t + it[n] + e] = r[n] || r[n - 2] || r[0];
                    return o
                }
            }, "margin" !== t && (S.cssHooks[t + e].set = Kt)
        })), S.fn.extend({
            css: function(t, e) {
                return B(this, (function(t, e, i) {
                    var n, o, r = {},
                        s = 0;
                    if (Array.isArray(e)) {
                        for (n = $t(t), o = e.length; s < o; s++) r[e[s]] = S.css(t, e[s], !1, n);
                        return r
                    }
                    return void 0 !== i ? S.style(t, e, i) : S.css(t, e)
                }), t, e, 1 < arguments.length)
            }
        }), ((S.Tween = te).prototype = {
            constructor: te,
            init: function(t, e, i, n, o, r) {
                this.elem = t, this.prop = i, this.easing = o || S.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (S.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = te.propHooks[this.prop];
                return t && t.get ? t.get(this) : te.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = te.propHooks[this.prop];
                return this.options.duration ? this.pos = e = S.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : te.propHooks._default.set(this), this
            }
        }).init.prototype = te.prototype, (te.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = S.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    S.fx.step[t.prop] ? S.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !S.cssHooks[t.prop] && null == t.elem.style[Ut(t.prop)] ? t.elem[t.prop] = t.now : S.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }).scrollTop = te.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, S.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, S.fx = te.prototype.init, S.fx.step = {};
        var ee, ie, ne, oe, re = /^(?:toggle|show|hide)$/,
            se = /queueHooks$/;

        function ae() {
            ie && (!1 === g.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ae) : t.setTimeout(ae, S.fx.interval), S.fx.tick())
        }

        function le() {
            return t.setTimeout((function() {
                ee = void 0
            })), ee = Date.now()
        }

        function ce(t, e) {
            var i, n = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; n < 4; n += 2 - e) o["margin" + (i = it[n])] = o["padding" + i] = t;
            return e && (o.opacity = o.width = t), o
        }

        function ue(t, e, i) {
            for (var n, o = (de.tweeners[e] || []).concat(de.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                if (n = o[r].call(i, e, t)) return n
        }

        function de(t, e, i) {
            var n, o, r = 0,
                s = de.prefilters.length,
                a = S.Deferred().always((function() {
                    delete l.elem
                })),
                l = function() {
                    if (o) return !1;
                    for (var e = ee || le(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(n);
                    return a.notifyWith(t, [c, n, i]), n < 1 && s ? i : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: S.extend({}, e),
                    opts: S.extend(!0, {
                        specialEasing: {},
                        easing: S.easing._default
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: ee || le(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = S.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i < n; i++) c.tweens[i].run(1);
                        return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (function(t, e) {
                    var i, n, o, r, s;
                    for (i in t)
                        if (o = e[n = U(i)], r = t[i], Array.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), (s = S.cssHooks[n]) && "expand" in s)
                            for (i in r = s.expand(r), delete t[n], r) i in t || (t[i] = r[i], e[i] = o);
                        else e[n] = o
                }(u, c.opts.specialEasing); r < s; r++)
                if (n = de.prefilters[r].call(c, t, u, c.opts)) return f(n.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
            return S.map(u, ue, c), f(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), S.fx.timer(S.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c
        }
        S.Animation = S.extend(de, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return at(i.elem, t, et.exec(e), i), i
                }]
            },
            tweener: function(t, e) {
                f(t) ? (e = t, t = ["*"]) : t = t.match(O);
                for (var i, n = 0, o = t.length; n < o; n++) i = t[n], de.tweeners[i] = de.tweeners[i] || [], de.tweeners[i].unshift(e)
            },
            prefilters: [function(t, e, i) {
                var n, o, r, s, a, l, c, u, d = "width" in e || "height" in e,
                    h = this,
                    p = {},
                    f = t.style,
                    m = t.nodeType && st(t),
                    g = Y.get(t, "fxshow");
                for (n in i.queue || (null == (s = S._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || a()
                    }), s.unqueued++, h.always((function() {
                        h.always((function() {
                            s.unqueued--, S.queue(t, "fx").length || s.empty.fire()
                        }))
                    }))), e)
                    if (o = e[n], re.test(o)) {
                        if (delete e[n], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[n]) continue;
                            m = !0
                        }
                        p[n] = g && g[n] || S.style(t, n)
                    } if ((l = !S.isEmptyObject(e)) || !S.isEmptyObject(p))
                    for (n in d && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = Y.get(t, "display")), "none" === (u = S.css(t, "display")) && (c ? u = c : (ct([t], !0), c = t.style.display || c, u = S.css(t, "display"), ct([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === S.css(t, "float") && (l || (h.done((function() {
                            f.display = c
                        })), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always((function() {
                            f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                        }))), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = Y.access(t, "fxshow", {
                        display: c
                    }), r && (g.hidden = !m), m && ct([t], !0), h.done((function() {
                        for (n in m || ct([t]), Y.remove(t, "fxshow"), p) S.style(t, n, p[n])
                    }))), l = ue(m ? g[n] : 0, n, h), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(t, e) {
                e ? de.prefilters.unshift(t) : de.prefilters.push(t)
            }
        }), S.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? S.extend({}, t) : {
                complete: i || !i && e || f(t) && t,
                duration: t,
                easing: i && e || e && !f(e) && e
            };
            return S.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in S.fx.speeds ? n.duration = S.fx.speeds[n.duration] : n.duration = S.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                f(n.old) && n.old.call(this), n.queue && S.dequeue(this, n.queue)
            }, n
        }, S.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(st).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var o = S.isEmptyObject(t),
                    r = S.speed(e, i, n),
                    s = function() {
                        var e = de(this, S.extend({}, t), r);
                        (o || Y.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function() {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        r = S.timers,
                        s = Y.get(this);
                    if (o) s[o] && s[o].stop && n(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && se.test(o) && n(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(i), e = !1, r.splice(o, 1));
                    !e && i || S.dequeue(this, t)
                }))
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each((function() {
                    var e, i = Y.get(this),
                        n = i[t + "queue"],
                        o = i[t + "queueHooks"],
                        r = S.timers,
                        s = n ? n.length : 0;
                    for (i.finish = !0, S.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                }))
            }
        }), S.each(["toggle", "show", "hide"], (function(t, e) {
            var i = S.fn[e];
            S.fn[e] = function(t, n, o) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(ce(e, !0), t, n, o)
            }
        })), S.each({
            slideDown: ce("show"),
            slideUp: ce("hide"),
            slideToggle: ce("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(t, e) {
            S.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        })), S.timers = [], S.fx.tick = function() {
            var t, e = 0,
                i = S.timers;
            for (ee = Date.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || S.fx.stop(), ee = void 0
        }, S.fx.timer = function(t) {
            S.timers.push(t), S.fx.start()
        }, S.fx.interval = 13, S.fx.start = function() {
            ie || (ie = !0, ae())
        }, S.fx.stop = function() {
            ie = null
        }, S.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, S.fn.delay = function(e, i) {
            return e = S.fx && S.fx.speeds[e] || e, i = i || "fx", this.queue(i, (function(i, n) {
                var o = t.setTimeout(i, e);
                n.stop = function() {
                    t.clearTimeout(o)
                }
            }))
        }, ne = g.createElement("input"), oe = g.createElement("select").appendChild(g.createElement("option")), ne.type = "checkbox", p.checkOn = "" !== ne.value, p.optSelected = oe.selected, (ne = g.createElement("input")).value = "t", ne.type = "radio", p.radioValue = "t" === ne.value;
        var he, pe = S.expr.attrHandle;
        S.fn.extend({
            attr: function(t, e) {
                return B(this, S.attr, t, e, 1 < arguments.length)
            },
            removeAttr: function(t) {
                return this.each((function() {
                    S.removeAttr(this, t)
                }))
            }
        }), S.extend({
            attr: function(t, e, i) {
                var n, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? S.prop(t, e, i) : (1 === r && S.isXMLDoc(t) || (o = S.attrHooks[e.toLowerCase()] || (S.expr.match.bool.test(e) ? he : void 0)), void 0 !== i ? null === i ? void S.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : null == (n = S.find.attr(t, e)) ? void 0 : n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!p.radioValue && "radio" === e && L(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n = 0,
                    o = e && e.match(O);
                if (o && 1 === t.nodeType)
                    for (; i = o[n++];) t.removeAttribute(i)
            }
        }), he = {
            set: function(t, e, i) {
                return !1 === e ? S.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, S.each(S.expr.match.bool.source.match(/\w+/g), (function(t, e) {
            var i = pe[e] || S.find.attr;
            pe[e] = function(t, e, n) {
                var o, r, s = e.toLowerCase();
                return n || (r = pe[s], pe[s] = o, o = null != i(t, e, n) ? s : null, pe[s] = r), o
            }
        }));
        var fe = /^(?:input|select|textarea|button)$/i,
            me = /^(?:a|area)$/i;

        function ge(t) {
            return (t.match(O) || []).join(" ")
        }

        function ve(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function ye(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(O) || []
        }
        S.fn.extend({
            prop: function(t, e) {
                return B(this, S.prop, t, e, 1 < arguments.length)
            },
            removeProp: function(t) {
                return this.each((function() {
                    delete this[S.propFix[t] || t]
                }))
            }
        }), S.extend({
            prop: function(t, e, i) {
                var n, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && S.isXMLDoc(t) || (e = S.propFix[e] || e, o = S.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = S.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : fe.test(t.nodeName) || me.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), p.optSelected || (S.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
            S.propFix[this.toLowerCase()] = this
        })), S.fn.extend({
            addClass: function(t) {
                var e, i, n, o, r, s, a, l = 0;
                if (f(t)) return this.each((function(e) {
                    S(this).addClass(t.call(this, e, ve(this)))
                }));
                if ((e = ye(t)).length)
                    for (; i = this[l++];)
                        if (o = ve(i), n = 1 === i.nodeType && " " + ge(o) + " ") {
                            for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                            o !== (a = ge(n)) && i.setAttribute("class", a)
                        } return this
            },
            removeClass: function(t) {
                var e, i, n, o, r, s, a, l = 0;
                if (f(t)) return this.each((function(e) {
                    S(this).removeClass(t.call(this, e, ve(this)))
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((e = ye(t)).length)
                    for (; i = this[l++];)
                        if (o = ve(i), n = 1 === i.nodeType && " " + ge(o) + " ") {
                            for (s = 0; r = e[s++];)
                                for (; - 1 < n.indexOf(" " + r + " ");) n = n.replace(" " + r + " ", " ");
                            o !== (a = ge(n)) && i.setAttribute("class", a)
                        } return this
            },
            toggleClass: function(t, e) {
                var i = typeof t,
                    n = "string" === i || Array.isArray(t);
                return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : f(t) ? this.each((function(i) {
                    S(this).toggleClass(t.call(this, i, ve(this), e), e)
                })) : this.each((function() {
                    var e, o, r, s;
                    if (n)
                        for (o = 0, r = S(this), s = ye(t); e = s[o++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else void 0 !== t && "boolean" !== i || ((e = ve(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Y.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && -1 < (" " + ge(ve(i)) + " ").indexOf(e)) return !0;
                return !1
            }
        });
        var be = /\r/g;
        S.fn.extend({
            val: function(t) {
                var e, i, n, o = this[0];
                return arguments.length ? (n = f(t), this.each((function(i) {
                    var o;
                    1 === this.nodeType && (null == (o = n ? t.call(this, i, S(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = S.map(o, (function(t) {
                        return null == t ? "" : t + ""
                    }))), (e = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                }))) : o ? (e = S.valHooks[o.type] || S.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : "string" == typeof(i = o.value) ? i.replace(be, "") : null == i ? "" : i : void 0
            }
        }), S.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = S.find.attr(t, "value");
                        return null != e ? e : ge(S.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, i, n, o = t.options,
                            r = t.selectedIndex,
                            s = "select-one" === t.type,
                            a = s ? null : [],
                            l = s ? r + 1 : o.length;
                        for (n = r < 0 ? l : s ? r : 0; n < l; n++)
                            if (((i = o[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !L(i.parentNode, "optgroup"))) {
                                if (e = S(i).val(), s) return e;
                                a.push(e)
                            } return a
                    },
                    set: function(t, e) {
                        for (var i, n, o = t.options, r = S.makeArray(e), s = o.length; s--;)((n = o[s]).selected = -1 < S.inArray(S.valHooks.option.get(n), r)) && (i = !0);
                        return i || (t.selectedIndex = -1), r
                    }
                }
            }
        }), S.each(["radio", "checkbox"], (function() {
            S.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e)) return t.checked = -1 < S.inArray(S(t).val(), e)
                }
            }, p.checkOn || (S.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        })), p.focusin = "onfocusin" in t;
        var we = /^(?:focusinfocus|focusoutblur)$/,
            Se = function(t) {
                t.stopPropagation()
            };
        S.extend(S.event, {
            trigger: function(e, i, n, o) {
                var r, s, a, l, c, d, h, p, v = [n || g],
                    y = u.call(e, "type") ? e.type : e,
                    b = u.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = p = a = n = n || g, 3 !== n.nodeType && 8 !== n.nodeType && !we.test(y + S.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (e = e[S.expando] ? e : new S.Event(y, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : S.makeArray(i, [e]), h = S.event.special[y] || {}, o || !h.trigger || !1 !== h.trigger.apply(n, i))) {
                    if (!o && !h.noBubble && !m(n)) {
                        for (l = h.delegateType || y, we.test(l + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), a = s;
                        a === (n.ownerDocument || g) && v.push(a.defaultView || a.parentWindow || t)
                    }
                    for (r = 0;
                        (s = v[r++]) && !e.isPropagationStopped();) p = s, e.type = 1 < r ? l : h.bindType || y, (d = (Y.get(s, "events") || Object.create(null))[e.type] && Y.get(s, "handle")) && d.apply(s, i), (d = c && s[c]) && d.apply && G(s) && (e.result = d.apply(s, i), !1 === e.result && e.preventDefault());
                    return e.type = y, o || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), i) || !G(n) || c && f(n[y]) && !m(n) && ((a = n[c]) && (n[c] = null), S.event.triggered = y, e.isPropagationStopped() && p.addEventListener(y, Se), n[y](), e.isPropagationStopped() && p.removeEventListener(y, Se), S.event.triggered = void 0, a && (n[c] = a)), e.result
                }
            },
            simulate: function(t, e, i) {
                var n = S.extend(new S.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                S.event.trigger(n, null, e)
            }
        }), S.fn.extend({
            trigger: function(t, e) {
                return this.each((function() {
                    S.event.trigger(t, e, this)
                }))
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                if (i) return S.event.trigger(t, e, i, !0)
            }
        }), p.focusin || S.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(t, e) {
            var i = function(t) {
                S.event.simulate(e, t.target, S.event.fix(t))
            };
            S.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this.document || this,
                        o = Y.access(n, e);
                    o || n.addEventListener(t, i, !0), Y.access(n, e, (o || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this.document || this,
                        o = Y.access(n, e) - 1;
                    o ? Y.access(n, e, o) : (n.removeEventListener(t, i, !0), Y.remove(n, e))
                }
            }
        }));
        var xe = t.location,
            Ee = {
                guid: Date.now()
            },
            ke = /\?/;
        S.parseXML = function(e) {
            var i;
            if (!e || "string" != typeof e) return null;
            try {
                i = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                i = void 0
            }
            return i && !i.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), i
        };
        var Ce = /\[\]$/,
            Ae = /\r?\n/g,
            Le = /^(?:submit|button|image|reset|file)$/i,
            Pe = /^(?:input|select|textarea|keygen)/i;

        function Te(t, e, i, n) {
            var o;
            if (Array.isArray(e)) S.each(e, (function(e, o) {
                i || Ce.test(t) ? n(t, o) : Te(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
            }));
            else if (i || "object" !== b(e)) n(t, e);
            else
                for (o in e) Te(t + "[" + o + "]", e[o], i, n)
        }
        S.param = function(t, e) {
            var i, n = [],
                o = function(t, e) {
                    var i = f(e) ? e() : e;
                    n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
                };
            if (null == t) return "";
            if (Array.isArray(t) || t.jquery && !S.isPlainObject(t)) S.each(t, (function() {
                o(this.name, this.value)
            }));
            else
                for (i in t) Te(i, t[i], e, o);
            return n.join("&")
        }, S.fn.extend({
            serialize: function() {
                return S.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map((function() {
                    var t = S.prop(this, "elements");
                    return t ? S.makeArray(t) : this
                })).filter((function() {
                    var t = this.type;
                    return this.name && !S(this).is(":disabled") && Pe.test(this.nodeName) && !Le.test(t) && (this.checked || !ht.test(t))
                })).map((function(t, e) {
                    var i = S(this).val();
                    return null == i ? null : Array.isArray(i) ? S.map(i, (function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ae, "\r\n")
                        }
                    })) : {
                        name: e.name,
                        value: i.replace(Ae, "\r\n")
                    }
                })).get()
            }
        });
        var _e = /%20/g,
            Ie = /#.*$/,
            qe = /([?&])_=[^&]*/,
            De = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Fe = /^(?:GET|HEAD)$/,
            Oe = /^\/\//,
            Me = {},
            ze = {},
            $e = "*/".concat("*"),
            je = g.createElement("a");

        function Ne(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, o = 0,
                    r = e.toLowerCase().match(O) || [];
                if (f(i))
                    for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function He(t, e, i, n) {
            var o = {},
                r = t === ze;

            function s(a) {
                var l;
                return o[a] = !0, S.each(t[a] || [], (function(t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
                })), l
            }
            return s(e.dataTypes[0]) || !o["*"] && s("*")
        }

        function Be(t, e) {
            var i, n, o = S.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && S.extend(!0, t, n), t
        }
        je.href = xe.href, S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xe.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xe.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $e,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": S.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? Be(Be(t, S.ajaxSettings), e) : Be(S.ajaxSettings, t)
            },
            ajaxPrefilter: Ne(Me),
            ajaxTransport: Ne(ze),
            ajax: function(e, i) {
                "object" == typeof e && (i = e, e = void 0), i = i || {};
                var n, o, r, s, a, l, c, u, d, h, p = S.ajaxSetup({}, i),
                    f = p.context || p,
                    m = p.context && (f.nodeType || f.jquery) ? S(f) : S.event,
                    v = S.Deferred(),
                    y = S.Callbacks("once memory"),
                    b = p.statusCode || {},
                    w = {},
                    x = {},
                    E = "canceled",
                    k = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (c) {
                                if (!s)
                                    for (s = {}; e = De.exec(r);) s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = s[t.toLowerCase() + " "]
                            }
                            return null == e ? null : e.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return c ? r : null
                        },
                        setRequestHeader: function(t, e) {
                            return null == c && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, w[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return null == c && (p.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (c) k.always(t[k.status]);
                                else
                                    for (e in t) b[e] = [b[e], t[e]];
                            return this
                        },
                        abort: function(t) {
                            var e = t || E;
                            return n && n.abort(e), C(0, e), this
                        }
                    };
                if (v.promise(k), p.url = ((e || p.url || xe.href) + "").replace(Oe, xe.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(O) || [""], null == p.crossDomain) {
                    l = g.createElement("a");
                    try {
                        l.href = p.url, l.href = l.href, p.crossDomain = je.protocol + "//" + je.host != l.protocol + "//" + l.host
                    } catch (e) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = S.param(p.data, p.traditional)), He(Me, p, i, k), c) return k;
                for (d in (u = S.event && p.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Fe.test(p.type), o = p.url.replace(Ie, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(_e, "+")) : (h = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (ke.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(qe, "$1"), h = (ke.test(o) ? "&" : "?") + "_=" + Ee.guid++ + h), p.url = o + h), p.ifModified && (S.lastModified[o] && k.setRequestHeader("If-Modified-Since", S.lastModified[o]), S.etag[o] && k.setRequestHeader("If-None-Match", S.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || i.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : p.accepts["*"]), p.headers) k.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(f, k, p) || c)) return k.abort();
                if (E = "abort", y.add(p.complete), k.done(p.success), k.fail(p.error), n = He(ze, p, i, k)) {
                    if (k.readyState = 1, u && m.trigger("ajaxSend", [k, p]), c) return k;
                    p.async && 0 < p.timeout && (a = t.setTimeout((function() {
                        k.abort("timeout")
                    }), p.timeout));
                    try {
                        c = !1, n.send(w, C)
                    } catch (e) {
                        if (c) throw e;
                        C(-1, e)
                    }
                } else C(-1, "No Transport");

                function C(e, i, s, l) {
                    var d, h, g, w, x, E = i;
                    c || (c = !0, a && t.clearTimeout(a), n = void 0, r = l || "", k.readyState = 0 < e ? 4 : 0, d = 200 <= e && e < 300 || 304 === e, s && (w = function(t, e, i) {
                        for (var n, o, r, s, a = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (n)
                            for (o in a)
                                if (a[o] && a[o].test(n)) {
                                    l.unshift(o);
                                    break
                                } if (l[0] in i) r = l[0];
                        else {
                            for (o in i) {
                                if (!l[0] || t.converters[o + " " + l[0]]) {
                                    r = o;
                                    break
                                }
                                s || (s = o)
                            }
                            r = r || s
                        }
                        if (r) return r !== l[0] && l.unshift(r), i[r]
                    }(p, k, s)), !d && -1 < S.inArray("script", p.dataTypes) && (p.converters["text script"] = function() {}), w = function(t, e, i, n) {
                        var o, r, s, a, l, c = {},
                            u = t.dataTypes.slice();
                        if (u[1])
                            for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                        for (r = u.shift(); r;)
                            if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                                if ("*" === r) r = l;
                                else if ("*" !== l && l !== r) {
                            if (!(s = c[l + " " + r] || c["* " + r]))
                                for (o in c)
                                    if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                        !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                        break
                                    } if (!0 !== s)
                                if (s && t.throws) e = s(e);
                                else try {
                                    e = s(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: s ? t : "No conversion from " + l + " to " + r
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(p, w, k, d), d ? (p.ifModified && ((x = k.getResponseHeader("Last-Modified")) && (S.lastModified[o] = x), (x = k.getResponseHeader("etag")) && (S.etag[o] = x)), 204 === e || "HEAD" === p.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = w.state, h = w.data, d = !(g = w.error))) : (g = E, !e && E || (E = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (i || E) + "", d ? v.resolveWith(f, [h, E, k]) : v.rejectWith(f, [k, E, g]), k.statusCode(b), b = void 0, u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [k, p, d ? h : g]), y.fireWith(f, [k, E]), u && (m.trigger("ajaxComplete", [k, p]), --S.active || S.event.trigger("ajaxStop")))
                }
                return k
            },
            getJSON: function(t, e, i) {
                return S.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return S.get(t, void 0, e, "script")
            }
        }), S.each(["get", "post"], (function(t, e) {
            S[e] = function(t, i, n, o) {
                return f(i) && (o = o || n, n = i, i = void 0), S.ajax(S.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: i,
                    success: n
                }, S.isPlainObject(t) && t))
            }
        })), S.ajaxPrefilter((function(t) {
            var e;
            for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
        })), S._evalUrl = function(t, e, i) {
            return S.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(t) {
                    S.globalEval(t, e, i)
                }
            })
        }, S.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (f(t) && (t = t.call(this[0])), e = S(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                })).append(this)), this
            },
            wrapInner: function(t) {
                return f(t) ? this.each((function(e) {
                    S(this).wrapInner(t.call(this, e))
                })) : this.each((function() {
                    var e = S(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                }))
            },
            wrap: function(t) {
                var e = f(t);
                return this.each((function(i) {
                    S(this).wrapAll(e ? t.call(this, i) : t)
                }))
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each((function() {
                    S(this).replaceWith(this.childNodes)
                })), this
            }
        }), S.expr.pseudos.hidden = function(t) {
            return !S.expr.pseudos.visible(t)
        }, S.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, S.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        };
        var We = {
                0: 200,
                1223: 204
            },
            Re = S.ajaxSettings.xhr();
        p.cors = !!Re && "withCredentials" in Re, p.ajax = Re = !!Re, S.ajaxTransport((function(e) {
            var i, n;
            if (p.cors || Re && !e.crossDomain) return {
                send: function(o, r) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                    i = function(t) {
                        return function() {
                            i && (i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(We[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = i(), n = a.onerror = a.ontimeout = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout((function() {
                            i && n()
                        }))
                    }, i = i("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (o) {
                        if (i) throw o
                    }
                },
                abort: function() {
                    i && i()
                }
            }
        })), S.ajaxPrefilter((function(t) {
            t.crossDomain && (t.contents.script = !1)
        })), S.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return S.globalEval(t), t
                }
            }
        }), S.ajaxPrefilter("script", (function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        })), S.ajaxTransport("script", (function(t) {
            var e, i;
            if (t.crossDomain || t.scriptAttrs) return {
                send: function(n, o) {
                    e = S("<script>").attr(t.scriptAttrs || {}).prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), g.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }));
        var Ve, Ue = [],
            Ge = /(=)\?(?=&|$)|\?\?/;
        S.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ue.pop() || S.expando + "_" + Ee.guid++;
                return this[t] = !0, t
            }
        }), S.ajaxPrefilter("json jsonp", (function(e, i, n) {
            var o, r, s, a = !1 !== e.jsonp && (Ge.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ge.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = f(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ge, "$1" + o) : !1 !== e.jsonp && (e.url += (ke.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return s || S.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
                s = arguments
            }, n.always((function() {
                void 0 === r ? S(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = i.jsonpCallback, Ue.push(o)), s && f(r) && r(s[0]), s = r = void 0
            })), "script"
        })), p.createHTMLDocument = ((Ve = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ve.childNodes.length), S.parseHTML = function(t, e, i) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (p.createHTMLDocument ? ((n = (e = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href, e.head.appendChild(n)) : e = g), r = !i && [], (o = P.exec(t)) ? [e.createElement(o[1])] : (o = bt([t], e, r), r && r.length && S(r).remove(), S.merge([], o.childNodes)));
            var n, o, r
        }, S.fn.load = function(t, e, i) {
            var n, o, r, s = this,
                a = t.indexOf(" ");
            return -1 < a && (n = ge(t.slice(a)), t = t.slice(0, a)), f(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), 0 < s.length && S.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done((function(t) {
                r = arguments, s.html(n ? S("<div>").append(S.parseHTML(t)).find(n) : t)
            })).always(i && function(t, e) {
                s.each((function() {
                    i.apply(this, r || [t.responseText, e, t])
                }))
            }), this
        }, S.expr.pseudos.animated = function(t) {
            return S.grep(S.timers, (function(e) {
                return t === e.elem
            })).length
        }, S.offset = {
            setOffset: function(t, e, i) {
                var n, o, r, s, a, l, c = S.css(t, "position"),
                    u = S(t),
                    d = {};
                "static" === c && (t.style.position = "relative"), a = u.offset(), r = S.css(t, "top"), l = S.css(t, "left"), ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (n = u.position()).top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), f(e) && (e = e.call(t, i, S.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d))
            }
        }, S.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each((function(e) {
                    S.offset.setOffset(this, t, e)
                }));
                var e, i, n = this[0];
                return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                    top: e.top + i.pageYOffset,
                    left: e.left + i.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i, n = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === S.css(n, "position")) e = n.getBoundingClientRect();
                    else {
                        for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === S.css(t, "position");) t = t.parentNode;
                        t && t !== n && 1 === t.nodeType && ((o = S(t).offset()).top += S.css(t, "borderTopWidth", !0), o.left += S.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - o.top - S.css(n, "marginTop", !0),
                        left: e.left - o.left - S.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    for (var t = this.offsetParent; t && "static" === S.css(t, "position");) t = t.offsetParent;
                    return t || nt
                }))
            }
        }), S.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(t, e) {
            var i = "pageYOffset" === e;
            S.fn[t] = function(n) {
                return B(this, (function(t, n, o) {
                    var r;
                    if (m(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o) return r ? r[e] : t[n];
                    r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : t[n] = o
                }), t, n, arguments.length)
            }
        })), S.each(["top", "left"], (function(t, e) {
            S.cssHooks[e] = Bt(p.pixelPosition, (function(t, i) {
                if (i) return i = Ht(t, e), zt.test(i) ? S(t).position()[e] + "px" : i
            }))
        })), S.each({
            Height: "height",
            Width: "width"
        }, (function(t, e) {
            S.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, (function(i, n) {
                S.fn[n] = function(o, r) {
                    var s = arguments.length && (i || "boolean" != typeof o),
                        a = i || (!0 === o || !0 === r ? "margin" : "border");
                    return B(this, (function(e, i, o) {
                        var r;
                        return m(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? S.css(e, i, a) : S.style(e, i, o, a)
                    }), e, s ? o : void 0, s)
                }
            }))
        })), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
            S.fn[e] = function(t) {
                return this.on(e, t)
            }
        })), S.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
            S.fn[e] = function(t, i) {
                return 0 < arguments.length ? this.on(e, null, t, i) : this.trigger(e)
            }
        }));
        var Xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        S.proxy = function(t, e) {
            var i, n, r;
            if ("string" == typeof e && (i = t[e], e = t, t = i), f(t)) return n = o.call(arguments, 2), (r = function() {
                return t.apply(e || this, n.concat(o.call(arguments)))
            }).guid = t.guid = t.guid || S.guid++, r
        }, S.holdReady = function(t) {
            t ? S.readyWait++ : S.ready(!0)
        }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = L, S.isFunction = f, S.isWindow = m, S.camelCase = U, S.type = b, S.now = Date.now, S.isNumeric = function(t) {
            var e = S.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, S.trim = function(t) {
            return null == t ? "" : (t + "").replace(Xe, "")
        }, "function" == typeof define && define.amd && define("jquery", [], (function() {
            return S
        }));
        var Ye = t.jQuery,
            Ze = t.$;
        return S.noConflict = function(e) {
            return t.$ === S && (t.$ = Ze), e && t.jQuery === S && (t.jQuery = Ye), S
        }, void 0 === e && (t.jQuery = t.$ = S), S
    })),
    function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AOS = e() : t.AOS = e()
    }(this, (function() {
        return function(t) {
            function e(n) {
                if (i[n]) return i[n].exports;
                var o = i[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
            }
            var i = {};
            return e.m = t, e.c = i, e.p = "dist/", e(0)
        }([function(t, e, i) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                    }
                    return t
                },
                r = (n(i(1)), i(6)),
                s = n(r),
                a = n(i(7)),
                l = n(i(8)),
                c = n(i(9)),
                u = n(i(10)),
                d = n(i(11)),
                h = n(i(14)),
                p = [],
                f = !1,
                m = document.all && !window.atob,
                g = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                },
                v = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (t && (f = !0), f) return p = (0, d.default)(p, g), (0, u.default)(p, g.once), p
                },
                y = function() {
                    p = (0, h.default)(), v()
                };
            t.exports = {
                init: function(t) {
                    return g = o(g, t), p = (0, h.default)(),
                        function(t) {
                            return !0 === t || "mobile" === t && c.default.mobile() || "phone" === t && c.default.phone() || "tablet" === t && c.default.tablet() || "function" == typeof t && !0 === t()
                        }(g.disable) || m ? void p.forEach((function(t, e) {
                            t.node.removeAttribute("data-aos"), t.node.removeAttribute("data-aos-easing"), t.node.removeAttribute("data-aos-duration"), t.node.removeAttribute("data-aos-delay")
                        })) : (document.querySelector("body").setAttribute("data-aos-easing", g.easing), document.querySelector("body").setAttribute("data-aos-duration", g.duration), document.querySelector("body").setAttribute("data-aos-delay", g.delay), "DOMContentLoaded" === g.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? v(!0) : "load" === g.startEvent ? setTimeout(function() {
                            v(!0)
                        }) : document.addEventListener(g.startEvent, (function() {
                            v(!0)
                        })), window.addEventListener("resize", (0, a.default)(v, g.debounceDelay, !0)), window.addEventListener("orientationchange", (0, a.default)(v, g.debounceDelay, !0)), window.addEventListener("scroll", (0, s.default)((function() {
                            (0, u.default)(p, g.once)
                        }), g.throttleDelay)), g.disableMutationObserver || (0, l.default)("[data-aos]", y), p)
                },
                refresh: v,
                refreshHard: y
            }
        }, function(t, e) {}, , , , , function(t, e) {
            (function(e) {
                "use strict";

                function i(t, e, i) {
                    function o(e) {
                        var i = h,
                            n = p;
                        return h = p = void 0, y = e, m = t.apply(n, i)
                    }

                    function s(t) {
                        return y = t, g = setTimeout(c, e), x ? o(t) : m
                    }

                    function l(t) {
                        var i = t - v;
                        return void 0 === v || i >= e || i < 0 || E && t - y >= f
                    }

                    function c() {
                        var t = S();
                        return l(t) ? u(t) : void(g = setTimeout(c, function(t) {
                            var i = e - (t - v);
                            return E ? w(i, f - (t - y)) : i
                        }(t)))
                    }

                    function u(t) {
                        return g = void 0, k && h ? o(t) : (h = p = void 0, m)
                    }

                    function d() {
                        var t = S(),
                            i = l(t);
                        if (h = arguments, p = this, v = t, i) {
                            if (void 0 === g) return s(v);
                            if (E) return g = setTimeout(c, e), o(v)
                        }
                        return void 0 === g && (g = setTimeout(c, e)), m
                    }
                    var h, p, f, m, g, v, y = 0,
                        x = !1,
                        E = !1,
                        k = !0;
                    if ("function" != typeof t) throw new TypeError(a);
                    return e = r(e) || 0, n(i) && (x = !!i.leading, f = (E = "maxWait" in i) ? b(r(i.maxWait) || 0, e) : f, k = "trailing" in i ? !!i.trailing : k), d.cancel = function() {
                        void 0 !== g && clearTimeout(g), y = 0, h = v = p = g = void 0
                    }, d.flush = function() {
                        return void 0 === g ? m : u(S())
                    }, d
                }

                function n(t) {
                    var e = void 0 === t ? "undefined" : s(t);
                    return !!t && ("object" == e || "function" == e)
                }

                function o(t) {
                    return "symbol" == (void 0 === t ? "undefined" : s(t)) || function(t) {
                        return !!t && "object" == (void 0 === t ? "undefined" : s(t))
                    }(t) && y.call(t) == c
                }

                function r(t) {
                    if ("number" == typeof t) return t;
                    if (o(t)) return l;
                    if (n(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = n(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(u, "");
                    var i = h.test(t);
                    return i || p.test(t) ? f(t.slice(2), i ? 2 : 8) : d.test(t) ? l : +t
                }
                var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    a = "Expected a function",
                    l = NaN,
                    c = "[object Symbol]",
                    u = /^\s+|\s+$/g,
                    d = /^[-+]0x[0-9a-f]+$/i,
                    h = /^0b[01]+$/i,
                    p = /^0o[0-7]+$/i,
                    f = parseInt,
                    m = "object" == (void 0 === e ? "undefined" : s(e)) && e && e.Object === Object && e,
                    g = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
                    v = m || g || Function("return this")(),
                    y = Object.prototype.toString,
                    b = Math.max,
                    w = Math.min,
                    S = function() {
                        return v.Date.now()
                    };
                t.exports = function(t, e, o) {
                    var r = !0,
                        s = !0;
                    if ("function" != typeof t) throw new TypeError(a);
                    return n(o) && (r = "leading" in o ? !!o.leading : r, s = "trailing" in o ? !!o.trailing : s), i(t, e, {
                        leading: r,
                        maxWait: e,
                        trailing: s
                    })
                }
            }).call(e, function() {
                return this
            }())
        }, function(t, e) {
            (function(e) {
                "use strict";

                function i(t) {
                    var e = void 0 === t ? "undefined" : r(t);
                    return !!t && ("object" == e || "function" == e)
                }

                function n(t) {
                    return "symbol" == (void 0 === t ? "undefined" : r(t)) || function(t) {
                        return !!t && "object" == (void 0 === t ? "undefined" : r(t))
                    }(t) && v.call(t) == l
                }

                function o(t) {
                    if ("number" == typeof t) return t;
                    if (n(t)) return a;
                    if (i(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = i(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(c, "");
                    var o = d.test(t);
                    return o || h.test(t) ? p(t.slice(2), o ? 2 : 8) : u.test(t) ? a : +t
                }
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    s = "Expected a function",
                    a = NaN,
                    l = "[object Symbol]",
                    c = /^\s+|\s+$/g,
                    u = /^[-+]0x[0-9a-f]+$/i,
                    d = /^0b[01]+$/i,
                    h = /^0o[0-7]+$/i,
                    p = parseInt,
                    f = "object" == (void 0 === e ? "undefined" : r(e)) && e && e.Object === Object && e,
                    m = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                    g = f || m || Function("return this")(),
                    v = Object.prototype.toString,
                    y = Math.max,
                    b = Math.min,
                    w = function() {
                        return g.Date.now()
                    };
                t.exports = function(t, e, n) {
                    function r(e) {
                        var i = h,
                            n = p;
                        return h = p = void 0, S = e, m = t.apply(n, i)
                    }

                    function a(t) {
                        return S = t, g = setTimeout(c, e), x ? r(t) : m
                    }

                    function l(t) {
                        var i = t - v;
                        return void 0 === v || i >= e || i < 0 || E && t - S >= f
                    }

                    function c() {
                        var t = w();
                        return l(t) ? u(t) : void(g = setTimeout(c, function(t) {
                            var i = e - (t - v);
                            return E ? b(i, f - (t - S)) : i
                        }(t)))
                    }

                    function u(t) {
                        return g = void 0, k && h ? r(t) : (h = p = void 0, m)
                    }

                    function d() {
                        var t = w(),
                            i = l(t);
                        if (h = arguments, p = this, v = t, i) {
                            if (void 0 === g) return a(v);
                            if (E) return g = setTimeout(c, e), r(v)
                        }
                        return void 0 === g && (g = setTimeout(c, e)), m
                    }
                    var h, p, f, m, g, v, S = 0,
                        x = !1,
                        E = !1,
                        k = !0;
                    if ("function" != typeof t) throw new TypeError(s);
                    return e = o(e) || 0, i(n) && (x = !!n.leading, f = (E = "maxWait" in n) ? y(o(n.maxWait) || 0, e) : f, k = "trailing" in n ? !!n.trailing : k), d.cancel = function() {
                        void 0 !== g && clearTimeout(g), S = 0, h = v = p = g = void 0
                    }, d.flush = function() {
                        return void 0 === g ? m : u(w())
                    }, d
                }
            }).call(e, function() {
                return this
            }())
        }, function(t, e) {
            "use strict";

            function i(t) {
                t && t.forEach((function(t) {
                    var e = Array.prototype.slice.call(t.addedNodes),
                        i = Array.prototype.slice.call(t.removedNodes),
                        n = e.concat(i).filter((function(t) {
                            return t.hasAttribute && t.hasAttribute("data-aos")
                        })).length;
                    n && r()
                }))
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = window.document,
                o = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                r = function() {};
            e.default = function(t, e) {
                var s = new o(i);
                r = e, s.observe(n.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }
        }, function(t, e) {
            "use strict";

            function i() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(),
                o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                l = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return n(t, [{
                        key: "phone",
                        value: function() {
                            var t = i();
                            return !(!o.test(t) && !r.test(t.substr(0, 4)))
                        }
                    }, {
                        key: "mobile",
                        value: function() {
                            var t = i();
                            return !(!s.test(t) && !a.test(t.substr(0, 4)))
                        }
                    }, {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone()
                        }
                    }]), t
                }();
            e.default = new l
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function(t, e) {
                var i = window.pageYOffset,
                    n = window.innerHeight;
                t.forEach((function(t, o) {
                    ! function(t, e, i) {
                        var n = t.node.getAttribute("data-aos-once");
                        e > t.position ? t.node.classList.add("aos-animate") : void 0 !== n && ("false" === n || !i && "true" !== n) && t.node.classList.remove("aos-animate")
                    }(t, n + i, e)
                }))
            }
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(12));
            e.default = function(t, e) {
                return t.forEach((function(t, i) {
                    t.node.classList.add("aos-init"), t.position = (0, n.default)(t.node, e.offset)
                })), t
            }
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(13));
            e.default = function(t, e) {
                var i = 0,
                    o = 0,
                    r = window.innerHeight,
                    s = {
                        offset: t.getAttribute("data-aos-offset"),
                        anchor: t.getAttribute("data-aos-anchor"),
                        anchorPlacement: t.getAttribute("data-aos-anchor-placement")
                    };
                switch (s.offset && !isNaN(s.offset) && (o = parseInt(s.offset)), s.anchor && document.querySelectorAll(s.anchor) && (t = document.querySelectorAll(s.anchor)[0]), i = (0, n.default)(t).top, s.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        i += t.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        i += t.offsetHeight;
                        break;
                    case "top-center":
                        i += r / 2;
                        break;
                    case "bottom-center":
                        i += r / 2 + t.offsetHeight;
                        break;
                    case "center-center":
                        i += r / 2 + t.offsetHeight / 2;
                        break;
                    case "top-top":
                        i += r;
                        break;
                    case "bottom-top":
                        i += t.offsetHeight + r;
                        break;
                    case "center-top":
                        i += t.offsetHeight / 2 + r
                }
                return s.anchorPlacement || s.offset || isNaN(e) || (o = e), i + o
            }
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function(t) {
                for (var e = 0, i = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0), i += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0), t = t.offsetParent;
                return {
                    top: i,
                    left: e
                }
            }
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function(t) {
                return t = t || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(t, (function(t) {
                    return {
                        node: t
                    }
                }))
            }
        }])
    }));
/* ===================================================================================== @preserve =
___  _   _    _
/   || | | |  | |
\__  | | | |  | |  __
/    |/  |/_) |/  /  \_/\/
\___/|__/| \_/|__/\__/  /\_/
            |\
            |/
Ajaxinate
version v2.0.11
https://github.com/Elkfox/Ajaxinate
Copyright (c) 2017 Elkfox Co Pty Ltd
https://elkfox.com
MIT License
================================================================================================= */
var Ajaxinate = function(t) {
    var e = t || {};
    this.settings = Object.assign({
        pagination: ".AjaxinatePagination",
        method: "scroll",
        namespace: ".Ajaxinate",
        container: ".AjaxinateLoop",
        offset: 0,
        callback: null
    }, e), this.addScrollListeners = this.addScrollListeners.bind(this), this.addClickListener = this.addClickListener.bind(this), this.checkIfPaginationInView = this.checkIfPaginationInView.bind(this), this.stopMultipleClicks = this.stopMultipleClicks.bind(this), this.destroy = this.destroy.bind(this), this.namespace = this.settings.namespace, this.containerElement = document.querySelector(this.settings.container), this.paginationElement = document.querySelector(this.settings.pagination), this.initialize()
};

function replaceUrlParam(t, e, i) {
    var n = new RegExp("(" + e + "=).*?(&|$)"),
        o = t;
    return t.search(n) >= 0 ? t.replace(n, "$1" + i + "$2") : o + (o.indexOf("?") > 0 ? "&" : "?") + e + "=" + i
}
Ajaxinate.prototype.initialize = function() {
        this.containerElement && {
            click: this.addClickListener,
            scroll: this.addScrollListeners
        } [this.settings.method]()
    }, Ajaxinate.prototype.addScrollListeners = function() {
        this.paginationElement && $(window).on("scroll" + this.namespace, this.checkIfPaginationInView).on("resize" + this.namespace, this.checkIfPaginationInView).on("orientationchange" + this.namespace, this.checkIfPaginationInView)
    }, Ajaxinate.prototype.addClickListener = function() {
        this.paginationElement && (this.nextPageLinkElement = this.paginationElement.querySelector("a"), this.clickActive = !0, null !== this.nextPageLinkElement && this.nextPageLinkElement.addEventListener("click", this.stopMultipleClicks))
    }, Ajaxinate.prototype.stopMultipleClicks = function(t) {
        t.preventDefault(), this.clickActive && (this.nextPageUrl = this.nextPageLinkElement.href, this.clickActive = !1, this.loadMore())
    }, Ajaxinate.prototype.checkIfPaginationInView = function() {
        var t = this.paginationElement.getBoundingClientRect().top - this.settings.offset,
            e = this.paginationElement.getBoundingClientRect().bottom + this.settings.offset;
        t <= window.innerHeight && e >= 0 && (this.nextPageLinkElement = this.paginationElement.querySelector("a"), this.removeScrollListener(), this.nextPageLinkElement && (this.nextPageUrl = this.nextPageLinkElement.href, this.loadMore()))
    }, Ajaxinate.prototype.loadMore = function() {
        this.request = new XMLHttpRequest, this.request.onreadystatechange = function() {
            if (4 === this.request.readyState && 200 === this.request.status) {
                var t = $(this.request.response).find(this.settings.container),
                    e = $(this.request.response).find(this.settings.pagination);
                this.containerElement.insertAdjacentHTML("beforeend", t.html()), this.paginationElement.innerHTML = e.html(), this.settings.callback && "function" == typeof this.settings.callback && this.settings.callback(this.request.response), this.initialize()
            }
        }.bind(this), this.request.open("GET", this.nextPageUrl), this.request.send()
    }, Ajaxinate.prototype.removeClickListener = function() {
        this.nextPageLinkElement.addEventListener("click", this.stopMultipleClicks)
    }, Ajaxinate.prototype.removeScrollListener = function() {
        $(window).off("scroll" + this.namespace, this.checkIfPaginationInView).off("resize" + this.namespace, this.checkIfPaginationInView).off("orientationchange" + this.namespace, this.checkIfPaginationInView)
    }, Ajaxinate.prototype.destroy = function() {
        return {
            click: this.removeClickListener.bind(this),
            scroll: this.removeScrollListener.bind(this)
        } [this.settings.method](), this
    }, PaloAlto.debounce = function(t, e, i) {
        var n;
        return function() {
            var o = this,
                r = arguments,
                s = function() {
                    n = null, i || t.apply(o, r)
                },
                a = i && !n;
            clearTimeout(n), n = setTimeout(s, e), a && t.apply(o, r)
        }
    },
    /*!
     * Flickity PACKAGED v2.3.0
     * Touch, responsive, flickable carousels
     *
     * Licensed GPLv3 for open source use
     * or Flickity Commercial License for commercial use
     *
     * https://flickity.metafizzy.co
     * Copyright 2015-2021 Metafizzy
     */
    function(t, e) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], (function(i) {
            return e(t, i)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, (function(t, e) {
        "use strict";
        var i = Array.prototype.slice,
            n = t.console,
            o = void 0 === n ? function() {} : function(t) {
                n.error(t)
            };

        function r(n, r, a) {
            function l(t, e, i) {
                var r, s = "$()." + n + '("' + e + '")';
                return t.each((function(t, l) {
                    var c = a.data(l, n);
                    if (c) {
                        var u = c[e];
                        if (u && "_" != e.charAt(0)) {
                            var d = u.apply(c, i);
                            r = void 0 === r ? d : r
                        } else o(s + " is not a valid method")
                    } else o(n + " not initialized. Cannot call methods, i.e. " + s)
                })), void 0 !== r ? r : t
            }

            function c(t, e) {
                t.each((function(t, i) {
                    var o = a.data(i, n);
                    o ? (o.option(e), o._init()) : (o = new r(i, e), a.data(i, n, o))
                }))
            }(a = a || e || t.jQuery) && (r.prototype.option || (r.prototype.option = function(t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[n] = function(t) {
                if ("string" == typeof t) {
                    var e = i.call(arguments, 1);
                    return l(this, t, e)
                }
                return c(this, t), this
            }, s(a))
        }

        function s(t) {
            !t || t && t.bridget || (t.bridget = r)
        }
        return s(e || t.jQuery), r
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, (function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || {})[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                i = i.slice(0), e = e || [];
                for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                    var r = i[o];
                    n && n[r] && (this.off(t, r), delete n[r]), r.apply(this, e)
                }
                return this
            }
        }, e.allOff = function() {
            delete this._events, delete this._onceEvents
        }, t
    })),
    /*!
     * getSize v2.0.3
     * measure size of elements
     * MIT license
     */
    function(t, e) {
        "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, (function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }
        var e = "undefined" == typeof console ? function() {} : function(t) {
                console.error(t)
            },
            i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            n = i.length;

        function o(t) {
            var i = getComputedStyle(t);
            return i || e("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), i
        }
        var r, s = !1;

        function a() {
            if (!s) {
                s = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var n = o(e);
                r = 200 == Math.round(t(n.width)), l.isBoxSizeOuter = r, i.removeChild(e)
            }
        }

        function l(e) {
            if (a(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var s = o(e);
                if ("none" == s.display) return function() {
                    for (var t = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, e = 0; e < n; e++) t[i[e]] = 0;
                    return t
                }();
                var l = {};
                l.width = e.offsetWidth, l.height = e.offsetHeight;
                for (var c = l.isBorderBox = "border-box" == s.boxSizing, u = 0; u < n; u++) {
                    var d = i[u],
                        h = s[d],
                        p = parseFloat(h);
                    l[d] = isNaN(p) ? 0 : p
                }
                var f = l.paddingLeft + l.paddingRight,
                    m = l.paddingTop + l.paddingBottom,
                    g = l.marginLeft + l.marginRight,
                    v = l.marginTop + l.marginBottom,
                    y = l.borderLeftWidth + l.borderRightWidth,
                    b = l.borderTopWidth + l.borderBottomWidth,
                    w = c && r,
                    S = t(s.width);
                !1 !== S && (l.width = S + (w ? 0 : f + y));
                var x = t(s.height);
                return !1 !== x && (l.height = x + (w ? 0 : m + b)), l.innerWidth = l.width - (f + y), l.innerHeight = l.height - (m + b), l.outerWidth = l.width + g, l.outerHeight = l.height + v, l
            }
        }
        return l
    })),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, (function() {
        "use strict";
        var t = function() {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i] + "MatchesSelector";
                if (t[n]) return n
            }
        }();
        return function(e, i) {
            return e[t](i)
        }
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], (function(i) {
            return e(t, i)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, (function(t, e) {
        var i = {
                extend: function(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                },
                modulo: function(t, e) {
                    return (t % e + e) % e
                }
            },
            n = Array.prototype.slice;
        i.makeArray = function(t) {
            return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
        }, i.removeFrom = function(t, e) {
            var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
        }, i.getParent = function(t, i) {
            for (; t.parentNode && t != document.body;)
                if (t = t.parentNode, e(t, i)) return t
        }, i.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, i.filterFindElements = function(t, n) {
            t = i.makeArray(t);
            var o = [];
            return t.forEach((function(t) {
                if (t instanceof HTMLElement)
                    if (n) {
                        e(t, n) && o.push(t);
                        for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
                    } else o.push(t)
            })), o
        }, i.debounceMethod = function(t, e, i) {
            i = i || 100;
            var n = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[o];
                clearTimeout(t);
                var e = arguments,
                    r = this;
                this[o] = setTimeout((function() {
                    n.apply(r, e), delete r[o]
                }), i)
            }
        }, i.docReady = function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : setTimeout(t)
        }, i.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, (function(t, e, i) {
                return e + "-" + i
            })).toLowerCase()
        };
        var o = t.console;
        return i.htmlInit = function(e, n) {
            i.docReady((function() {
                var r = i.toDashed(n),
                    s = "data-" + r,
                    a = document.querySelectorAll("[" + s + "]"),
                    l = document.querySelectorAll(".js-" + r),
                    c = i.makeArray(a).concat(i.makeArray(l)),
                    u = s + "-options",
                    d = t.jQuery;
                c.forEach((function(t) {
                    var i, r = t.getAttribute(s) || t.getAttribute(u);
                    try {
                        i = r && JSON.parse(r)
                    } catch (r) {
                        return void(o && o.error("Error parsing " + s + " on " + t.className + ": " + r))
                    }
                    var a = new e(t, i);
                    d && d.data(t, n, a)
                }))
            }))
        }, i
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], (function(i) {
            return e(t, i)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(t, t.getSize))
    }(window, (function(t, e) {
        function i(t, e) {
            this.element = t, this.parent = e, this.create()
        }
        var n = i.prototype;
        return n.create = function() {
            this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0, this.element.style[this.parent.originSide] = 0
        }, n.destroy = function() {
            this.unselect(), this.element.style.position = "";
            var t = this.parent.originSide;
            this.element.style[t] = "", this.element.style.transform = "", this.element.removeAttribute("aria-hidden")
        }, n.getSize = function() {
            this.size = e(this.element)
        }, n.setPosition = function(t) {
            this.x = t, this.updateTarget(), this.renderPosition(t)
        }, n.updateTarget = n.setDefaultTarget = function() {
            var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
            this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
        }, n.renderPosition = function(t) {
            var e = "left" === this.parent.originSide ? 1 : -1,
                i = this.parent.options.percentPosition ? t * e * (this.parent.size.innerWidth / this.size.width) : t * e;
            this.element.style.transform = "translateX(" + this.parent.getPositionValue(i) + ")"
        }, n.select = function() {
          if(this.element.classList == "product-single__thumbnail"){
             document.getElementById("c_thumb").innerHTML = this.element.getAttribute("data-indx"); 
           }
            this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
        }, n.unselect = function() {
            this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
        }, n.wrapShift = function(t) {
            this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
        }, n.remove = function() {
            this.element.parentNode.removeChild(this.element)
        }, i
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e())
    }(window, (function() {
        "use strict";

        function t(t) {
            this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
        }
        var e = t.prototype;
        return e.addCell = function(t) {
            if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
                this.x = t.x;
                var e = this.isOriginLeft ? "marginLeft" : "marginRight";
                this.firstMargin = t.size[e]
            }
        }, e.updateTarget = function() {
            var t = this.isOriginLeft ? "marginRight" : "marginLeft",
                e = this.getLastCell(),
                i = e ? e.size[t] : 0,
                n = this.outerWidth - (this.firstMargin + i);
            this.target = this.x + this.firstMargin + n * this.parent.cellAlign
        }, e.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }, e.select = function() {
            this.cells.forEach((function(t) {
                t.select()
            }))
        }, e.unselect = function() {
            this.cells.forEach((function(t) {
                t.unselect()
            }))
        }, e.getCellElements = function() {
            return this.cells.map((function(t) {
                return t.element
            }))
        }, t
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], (function(i) {
            return e(t, i)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(t, t.fizzyUIUtils))
    }(window, (function(t, e) {
        var i = {
            startAnimation: function() {
                this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
            },
            animate: function() {
                this.applyDragForce(), this.applySelectedAttraction();
                var t = this.x;
                if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                    var e = this;
                    requestAnimationFrame((function() {
                        e.animate()
                    }))
                }
            },
            positionSlider: function() {
                var t = this.x;
                this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent()
            },
            setTranslateX: function(t, e) {
                t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
                var i = this.getPositionValue(t);
                this.slider.style.transform = e ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")"
            },
            dispatchScrollEvent: function() {
                var t = this.slides[0];
                if (t) {
                    var e = -this.x - t.target,
                        i = e / this.slidesWidth;
                    this.dispatchEvent("scroll", null, [i, e])
                }
            },
            positionSliderAtSelected: function() {
                this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
            },
            getPositionValue: function(t) {
                return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
            },
            settle: function(t) {
                !this.isPointerDown && Math.round(100 * this.x) == Math.round(100 * t) && this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
            },
            shiftWrapCells: function(t) {
                var e = this.cursorPosition + t;
                this._shiftCells(this.beforeShiftCells, e, -1);
                var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
                this._shiftCells(this.afterShiftCells, i, 1)
            },
            _shiftCells: function(t, e, i) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n],
                        r = e > 0 ? i : 0;
                    o.wrapShift(r), e -= o.size.outerWidth
                }
            },
            _unshiftCells: function(t) {
                if (t && t.length)
                    for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
            },
            integratePhysics: function() {
                this.x += this.velocity, this.velocity *= this.getFrictionFactor()
            },
            applyForce: function(t) {
                this.velocity += t
            },
            getFrictionFactor: function() {
                return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
            },
            getRestingPosition: function() {
                return this.x + this.velocity / (1 - this.getFrictionFactor())
            },
            applyDragForce: function() {
                if (this.isDraggable && this.isPointerDown) {
                    var t = this.dragX - this.x - this.velocity;
                    this.applyForce(t)
                }
            },
            applySelectedAttraction: function() {
                if (!(this.isDraggable && this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                    var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                    this.applyForce(t)
                }
            }
        };
        return i
    })),
    function(t, e) {
        if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], (function(i, n, o, r, s, a) {
            return e(t, i, n, o, r, s, a)
        }));
        else if ("object" == typeof module && module.exports) module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
        else {
            var i = t.Flickity;
            t.Flickity = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, i.Cell, i.Slide, i.animatePrototype)
        }
    }(window, (function(t, e, i, n, o, r, s) {
        var a = t.jQuery,
            l = t.getComputedStyle,
            c = t.console;

        function u(t, e) {
            for (t = n.makeArray(t); t.length;) e.appendChild(t.shift())
        }
        var d = 0,
            h = {};

        function p(t, e) {
            var i = n.getQueryElement(t);
            if (i) {
                if (this.element = i, this.element.flickityGUID) {
                    var o = h[this.element.flickityGUID];
                    return o && o.option(e), o
                }
                a && (this.$element = a(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e), this._create()
            } else c && c.error("Bad element for Flickity: " + (i || t))
        }
        p.defaults = {
            accessibility: !0,
            cellAlign: "center",
            freeScrollFriction: .075,
            friction: .28,
            namespaceJQueryEvents: !0,
            percentPosition: !0,
            resize: !0,
            selectedAttraction: .025,
            setGallerySize: !0
        }, p.createMethods = [];
        var f = p.prototype;
        n.extend(f, e.prototype), f._create = function() {
            var e = this.guid = ++d;
            for (var i in this.element.flickityGUID = e, h[e] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this), this.options.on) {
                var n = this.options.on[i];
                this.on(i, n)
            }
            p.createMethods.forEach((function(t) {
                this[t]()
            }), this), this.options.watchCSS ? this.watchCSS() : this.activate()
        }, f.option = function(t) {
            n.extend(this.options, t)
        }, f.activate = function() {
            this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), u(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"))
        }, f._createSlider = function() {
            var t = document.createElement("div");
            t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
        }, f._filterFindCellElements = function(t) {
            return n.filterFindElements(t, this.options.cellSelector)
        }, f.reloadCells = function() {
            this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
        }, f._makeCells = function(t) {
            return this._filterFindCellElements(t).map((function(t) {
                return new o(t, this)
            }), this)
        }, f.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }, f.getLastSlide = function() {
            return this.slides[this.slides.length - 1]
        }, f.positionCells = function() {
            this._sizeCells(this.cells), this._positionCells(0)
        }, f._positionCells = function(t) {
            t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;
            var e = 0;
            if (t > 0) {
                var i = this.cells[t - 1];
                e = i.x + i.size.outerWidth
            }
            for (var n = this.cells.length, o = t; o < n; o++) {
                var r = this.cells[o];
                r.setPosition(e), e += r.size.outerWidth, this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight)
            }
            this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
        }, f._sizeCells = function(t) {
            t.forEach((function(t) {
                t.getSize()
            }))
        }, f.updateSlides = function() {
            if (this.slides = [], this.cells.length) {
                var t = new r(this);
                this.slides.push(t);
                var e = "left" == this.originSide ? "marginRight" : "marginLeft",
                    i = this._getCanCellFit();
                this.cells.forEach((function(n, o) {
                    if (t.cells.length) {
                        var s = t.outerWidth - t.firstMargin + (n.size.outerWidth - n.size[e]);
                        i.call(this, o, s) || (t.updateTarget(), t = new r(this), this.slides.push(t)), t.addCell(n)
                    } else t.addCell(n)
                }), this), t.updateTarget(), this.updateSelectedSlide()
            }
        }, f._getCanCellFit = function() {
            var t = this.options.groupCells;
            if (!t) return function() {
                return !1
            };
            if ("number" == typeof t) {
                var e = parseInt(t, 10);
                return function(t) {
                    return t % e != 0
                }
            }
            var i = "string" == typeof t && t.match(/^(\d+)%$/),
                n = i ? parseInt(i[1], 10) / 100 : 1;
            return function(t, e) {
                return e <= (this.size.innerWidth + 1) * n
            }
        }, f._init = f.reposition = function() {
            this.positionCells(), this.positionSliderAtSelected()
        }, f.getSize = function() {
            this.size = i(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
        };
        var m = {
            center: {
                left: .5,
                right: .5
            },
            left: {
                left: 0,
                right: 1
            },
            right: {
                right: 0,
                left: 1
            }
        };
        return f.setCellAlign = function() {
            var t = m[this.options.cellAlign];
            this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
        }, f.setGallerySize = function() {
            if (this.options.setGallerySize) {
                var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                this.viewport.style.height = t + "px"
            }
        }, f._getWrapShiftCells = function() {
            if (this.options.wrapAround) {
                this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                var t = this.cursorPosition,
                    e = this.cells.length - 1;
                this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
            }
        }, f._getGapCells = function(t, e, i) {
            for (var n = []; t > 0;) {
                var o = this.cells[e];
                if (!o) break;
                n.push(o), e += i, t -= o.size.outerWidth
            }
            return n
        }, f._containSlides = function() {
            if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                var t = this.options.rightToLeft,
                    e = t ? "marginRight" : "marginLeft",
                    i = t ? "marginLeft" : "marginRight",
                    n = this.slideableWidth - this.getLastCell().size[i],
                    o = n < this.size.innerWidth,
                    r = this.cursorPosition + this.cells[0].size[e],
                    s = n - this.size.innerWidth * (1 - this.cellAlign);
                this.slides.forEach((function(t) {
                    o ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, r), t.target = Math.min(t.target, s))
                }), this)
            }
        }, f.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), a && this.$element) {
                var o = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
                if (e) {
                    var r = new a.Event(e);
                    r.type = t, o = r
                }
                this.$element.trigger(o, i)
            }
        }, f.select = function(t, e, i) {
            if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)), this.slides[t])) {
                var o = this.selectedIndex;
                this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != o && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect")
            }
        }, f._wrapSelect = function(t) {
            var e = this.slides.length;
            if (!(this.options.wrapAround && e > 1)) return t;
            var i = n.modulo(t, e),
                o = Math.abs(i - this.selectedIndex),
                r = Math.abs(i + e - this.selectedIndex),
                s = Math.abs(i - e - this.selectedIndex);
            !this.isDragSelect && r < o ? t += e : !this.isDragSelect && s < o && (t -= e), t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
        }, f.previous = function(t, e) {
            this.select(this.selectedIndex - 1, t, e)
        }, f.next = function(t, e) {
            this.select(this.selectedIndex + 1, t, e)
        }, f.updateSelectedSlide = function() {
            var t = this.slides[this.selectedIndex];
            t && (this.unselectSelectedSlide(), this.selectedSlide = t, t.select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
        }, f.unselectSelectedSlide = function() {
            this.selectedSlide && this.selectedSlide.unselect()
        }, f.selectInitialIndex = function() {
            var t = this.options.initialIndex;
            if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
            else {
                if (t && "string" == typeof t)
                    if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
                var e = 0;
                t && this.slides[t] && (e = t), this.select(e, !1, !0)
            }
        }, f.selectCell = function(t, e, i) {
            var n = this.queryCell(t);
            if (n) {
                var o = this.getCellSlideIndex(n);
                this.select(o, e, i)
            }
        }, f.getCellSlideIndex = function(t) {
            for (var e = 0; e < this.slides.length; e++) {
                if (-1 != this.slides[e].cells.indexOf(t)) return e
            }
        }, f.getCell = function(t) {
            for (var e = 0; e < this.cells.length; e++) {
                var i = this.cells[e];
                if (i.element == t) return i
            }
        }, f.getCells = function(t) {
            t = n.makeArray(t);
            var e = [];
            return t.forEach((function(t) {
                var i = this.getCell(t);
                i && e.push(i)
            }), this), e
        }, f.getCellElements = function() {
            return this.cells.map((function(t) {
                return t.element
            }))
        }, f.getParentCell = function(t) {
            var e = this.getCell(t);
            return e || (t = n.getParent(t, ".flickity-slider > *"), this.getCell(t))
        }, f.getAdjacentCellElements = function(t, e) {
            if (!t) return this.selectedSlide.getCellElements();
            e = void 0 === e ? this.selectedIndex : e;
            var i = this.slides.length;
            if (1 + 2 * t >= i) return this.getCellElements();
            for (var o = [], r = e - t; r <= e + t; r++) {
                var s = this.options.wrapAround ? n.modulo(r, i) : r,
                    a = this.slides[s];
                a && (o = o.concat(a.getCellElements()))
            }
            return o
        }, f.queryCell = function(t) {
            if ("number" == typeof t) return this.cells[t];
            if ("string" == typeof t) {
                if (t.match(/^[#.]?[\d/]/)) return;
                t = this.element.querySelector(t)
            }
            return this.getCell(t)
        }, f.uiChange = function() {
            this.emitEvent("uiChange")
        }, f.childUIPointerDown = function(t) {
            "touchstart" != t.type && t.preventDefault(), this.focus()
        }, f.onresize = function() {
            this.watchCSS(), this.resize()
        }, n.debounceMethod(p, "onresize", 150), f.resize = function() {
            if (this.isActive && !this.isAnimating && !this.isDragging) {
                this.getSize(), this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                var t = this.selectedElements && this.selectedElements[0];
                this.selectCell(t, !1, !0)
            }
        }, f.watchCSS = function() {
            this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
        }, f.onkeydown = function(t) {
            var e = document.activeElement && document.activeElement != this.element;
            if (this.options.accessibility && !e) {
                var i = p.keyboardHandlers[t.keyCode];
                i && i.call(this)
            }
        }, p.keyboardHandlers = {
            37: function() {
                var t = this.options.rightToLeft ? "next" : "previous";
                this.uiChange(), this[t]()
            },
            39: function() {
                var t = this.options.rightToLeft ? "previous" : "next";
                this.uiChange(), this[t]()
            }
        }, f.focus = function() {
            var e = t.pageYOffset;
            this.element.focus({
                preventScroll: !0
            }), t.pageYOffset != e && t.scrollTo(t.pageXOffset, e)
        }, f.deactivate = function() {
            this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach((function(t) {
                t.destroy()
            })), this.element.removeChild(this.viewport), u(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
        }, f.destroy = function() {
            this.deactivate(), t.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), a && this.$element && a.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete h[this.guid]
        }, n.extend(f, s), p.data = function(t) {
            var e = (t = n.getQueryElement(t)) && t.flickityGUID;
            return e && h[e]
        }, n.htmlInit(p, "flickity"), a && a.bridget && a.bridget("flickity", p), p.setJQuery = function(t) {
            a = t
        }, p.Cell = o, p.Slide = r, p
    })),
    /*!
     * Unipointer v2.4.0
     * base class for doing one thing with pointer event
     * MIT license
     */
    function(t, e) {
        "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], (function(i) {
            return e(t, i)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.Unipointer = e(t, t.EvEmitter)
    }(window, (function(t, e) {
        function i() {}
        var n = i.prototype = Object.create(e.prototype);
        n.bindStartEvent = function(t) {
            this._bindStartEvent(t, !0)
        }, n.unbindStartEvent = function(t) {
            this._bindStartEvent(t, !1)
        }, n._bindStartEvent = function(e, i) {
            var n = (i = void 0 === i || i) ? "addEventListener" : "removeEventListener",
                o = "mousedown";
            "ontouchstart" in t ? o = "touchstart" : t.PointerEvent && (o = "pointerdown"), e[n](o, this)
        }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.getTouch = function(t) {
            for (var e = 0; e < t.length; e++) {
                var i = t[e];
                if (i.identifier == this.pointerIdentifier) return i
            }
        }, n.onmousedown = function(t) {
            var e = t.button;
            e && 0 !== e && 1 !== e || this._pointerDown(t, t)
        }, n.ontouchstart = function(t) {
            this._pointerDown(t, t.changedTouches[0])
        }, n.onpointerdown = function(t) {
            this._pointerDown(t, t)
        }, n._pointerDown = function(t, e) {
            t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
        }, n.pointerDown = function(t, e) {
            this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
        };
        var o = {
            mousedown: ["mousemove", "mouseup"],
            touchstart: ["touchmove", "touchend", "touchcancel"],
            pointerdown: ["pointermove", "pointerup", "pointercancel"]
        };
        return n._bindPostStartEvents = function(e) {
            if (e) {
                var i = o[e.type];
                i.forEach((function(e) {
                    t.addEventListener(e, this)
                }), this), this._boundPointerEvents = i
            }
        }, n._unbindPostStartEvents = function() {
            this._boundPointerEvents && (this._boundPointerEvents.forEach((function(e) {
                t.removeEventListener(e, this)
            }), this), delete this._boundPointerEvents)
        }, n.onmousemove = function(t) {
            this._pointerMove(t, t)
        }, n.onpointermove = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
        }, n.ontouchmove = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerMove(t, e)
        }, n._pointerMove = function(t, e) {
            this.pointerMove(t, e)
        }, n.pointerMove = function(t, e) {
            this.emitEvent("pointerMove", [t, e])
        }, n.onmouseup = function(t) {
            this._pointerUp(t, t)
        }, n.onpointerup = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
        }, n.ontouchend = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerUp(t, e)
        }, n._pointerUp = function(t, e) {
            this._pointerDone(), this.pointerUp(t, e)
        }, n.pointerUp = function(t, e) {
            this.emitEvent("pointerUp", [t, e])
        }, n._pointerDone = function() {
            this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
        }, n._pointerReset = function() {
            this.isPointerDown = !1, delete this.pointerIdentifier
        }, n.pointerDone = function() {}, n.onpointercancel = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
        }, n.ontouchcancel = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerCancel(t, e)
        }, n._pointerCancel = function(t, e) {
            this._pointerDone(), this.pointerCancel(t, e)
        }, n.pointerCancel = function(t, e) {
            this.emitEvent("pointerCancel", [t, e])
        }, i.getPointerPoint = function(t) {
            return {
                x: t.pageX,
                y: t.pageY
            }
        }, i
    })),
    /*!
     * Unidragger v2.4.0
     * Draggable base class
     * MIT license
     */
    function(t, e) {
        "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], (function(i) {
            return e(t, i)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.Unidragger = e(t, t.Unipointer)
    }(window, (function(t, e) {
        function i() {}
        var n = i.prototype = Object.create(e.prototype);
        n.bindHandles = function() {
            this._bindHandles(!0)
        }, n.unbindHandles = function() {
            this._bindHandles(!1)
        }, n._bindHandles = function(e) {
            for (var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", n = e ? this._touchActionValue : "", o = 0; o < this.handles.length; o++) {
                var r = this.handles[o];
                this._bindStartEvent(r, e), r[i]("click", this), t.PointerEvent && (r.style.touchAction = n)
            }
        }, n._touchActionValue = "none", n.pointerDown = function(t, e) {
            this.okayPointerDown(t) && (this.pointerDownPointer = {
                pageX: e.pageX,
                pageY: e.pageY
            }, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
        };
        var o = {
                TEXTAREA: !0,
                INPUT: !0,
                SELECT: !0,
                OPTION: !0
            },
            r = {
                radio: !0,
                checkbox: !0,
                button: !0,
                submit: !0,
                image: !0,
                file: !0
            };
        return n.okayPointerDown = function(t) {
            var e = o[t.target.nodeName],
                i = r[t.target.type],
                n = !e || i;
            return n || this._pointerReset(), n
        }, n.pointerDownBlur = function() {
            var t = document.activeElement;
            t && t.blur && t != document.body && t.blur()
        }, n.pointerMove = function(t, e) {
            var i = this._dragPointerMove(t, e);
            this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
        }, n._dragPointerMove = function(t, e) {
            var i = {
                x: e.pageX - this.pointerDownPointer.pageX,
                y: e.pageY - this.pointerDownPointer.pageY
            };
            return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
        }, n.hasDragStarted = function(t) {
            return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
        }, n.pointerUp = function(t, e) {
            this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
        }, n._dragPointerUp = function(t, e) {
            this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
        }, n._dragStart = function(t, e) {
            this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e)
        }, n.dragStart = function(t, e) {
            this.emitEvent("dragStart", [t, e])
        }, n._dragMove = function(t, e, i) {
            this.isDragging && this.dragMove(t, e, i)
        }, n.dragMove = function(t, e, i) {
            t.preventDefault(), this.emitEvent("dragMove", [t, e, i])
        }, n._dragEnd = function(t, e) {
            this.isDragging = !1, setTimeout(function() {
                delete this.isPreventingClicks
            }.bind(this)), this.dragEnd(t, e)
        }, n.dragEnd = function(t, e) {
            this.emitEvent("dragEnd", [t, e])
        }, n.onclick = function(t) {
            this.isPreventingClicks && t.preventDefault()
        }, n._staticClick = function(t, e) {
            this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
                delete this.isIgnoringMouseUp
            }.bind(this), 400)))
        }, n.staticClick = function(t, e) {
            this.emitEvent("staticClick", [t, e])
        }, i.getPointerPoint = e.getPointerPoint, i
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], (function(i, n, o) {
            return e(t, i, n, o)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils)
    }(window, (function(t, e, i, n) {
        n.extend(e.defaults, {
            draggable: ">1",
            dragThreshold: 3
        }), e.createMethods.push("_createDrag");
        var o = e.prototype;
        n.extend(o, i.prototype), o._touchActionValue = "pan-y", o._createDrag = function() {
            this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable)
        }, o.onActivateDrag = function() {
            this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
        }, o.onDeactivateDrag = function() {
            this.unbindHandles(), this.element.classList.remove("is-draggable")
        }, o.updateDraggable = function() {
            ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
        }, o.bindDrag = function() {
            this.options.draggable = !0, this.updateDraggable()
        }, o.unbindDrag = function() {
            this.options.draggable = !1, this.updateDraggable()
        }, o._uiChangeDrag = function() {
            delete this.isFreeScrolling
        }, o.pointerDown = function(e, i) {
            this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = s(), t.addEventListener("scroll", this), this._pointerDownDefault(e, i)) : this._pointerDownDefault(e, i)
        }, o._pointerDownDefault = function(t, e) {
            this.pointerDownPointer = {
                pageX: e.pageX,
                pageY: e.pageY
            }, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e])
        };
        var r = {
            INPUT: !0,
            TEXTAREA: !0,
            SELECT: !0
        };

        function s() {
            return {
                x: t.pageXOffset,
                y: t.pageYOffset
            }
        }
        return o.pointerDownFocus = function(t) {
            r[t.target.nodeName] || this.focus()
        }, o._pointerDownPreventDefault = function(t) {
            var e = "touchstart" == t.type,
                i = "touch" == t.pointerType,
                n = r[t.target.nodeName];
            e || i || n || t.preventDefault()
        }, o.hasDragStarted = function(t) {
            return Math.abs(t.x) > this.options.dragThreshold
        }, o.pointerUp = function(t, e) {
            delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
        }, o.pointerDone = function() {
            t.removeEventListener("scroll", this), delete this.pointerDownScroll
        }, o.dragStart = function(e, i) {
            this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [i]))
        }, o.pointerMove = function(t, e) {
            var i = this._dragPointerMove(t, e);
            this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i)
        }, o.dragMove = function(t, e, i) {
            if (this.isDraggable) {
                t.preventDefault(), this.previousDragX = this.dragX;
                var n = this.options.rightToLeft ? -1 : 1;
                this.options.wrapAround && (i.x %= this.slideableWidth);
                var o = this.dragStartPosition + i.x * n;
                if (!this.options.wrapAround && this.slides.length) {
                    var r = Math.max(-this.slides[0].target, this.dragStartPosition);
                    o = o > r ? .5 * (o + r) : o;
                    var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                    o = o < s ? .5 * (o + s) : o
                }
                this.dragX = o, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
            }
        }, o.dragEnd = function(t, e) {
            if (this.isDraggable) {
                this.options.freeScroll && (this.isFreeScrolling = !0);
                var i = this.dragEndRestingSelect();
                if (this.options.freeScroll && !this.options.wrapAround) {
                    var n = this.getRestingPosition();
                    this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
                } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
                delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e])
            }
        }, o.dragEndRestingSelect = function() {
            var t = this.getRestingPosition(),
                e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
                i = this._getClosestResting(t, e, 1),
                n = this._getClosestResting(t, e, -1);
            return i.distance < n.distance ? i.index : n.index
        }, o._getClosestResting = function(t, e, i) {
            for (var n = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function(t, e) {
                    return t <= e
                } : function(t, e) {
                    return t < e
                }; r(e, o) && (n += i, o = e, null !== (e = this.getSlideDistance(-t, n)));) e = Math.abs(e);
            return {
                distance: o,
                index: n - i
            }
        }, o.getSlideDistance = function(t, e) {
            var i = this.slides.length,
                o = this.options.wrapAround && i > 1,
                r = o ? n.modulo(e, i) : e,
                s = this.slides[r];
            if (!s) return null;
            var a = o ? this.slideableWidth * Math.floor(e / i) : 0;
            return t - (s.target + a)
        }, o.dragEndBoostSelect = function() {
            if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
            var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
                e = this.previousDragX - this.dragX;
            return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
        }, o.staticClick = function(t, e) {
            var i = this.getParentCell(t.target),
                n = i && i.element,
                o = i && this.cells.indexOf(i);
            this.dispatchEvent("staticClick", t, [e, n, o])
        }, o.onscroll = function() {
            var t = s(),
                e = this.pointerDownScroll.x - t.x,
                i = this.pointerDownScroll.y - t.y;
            (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
        }, e
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], (function(i, n, o) {
            return e(t, i, n, o)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.Unipointer, t.fizzyUIUtils)
    }(window, (function(t, e, i, n) {
        "use strict";
        var o = "http://www.w3.org/2000/svg";

        function r(t, e) {
            this.direction = t, this.parent = e, this._create()
        }
        r.prototype = Object.create(i.prototype), r.prototype._create = function() {
            this.isEnabled = !0, this.isPrevious = -1 == this.direction;
            var t = this.parent.options.rightToLeft ? 1 : -1;
            this.isLeft = this.direction == t;
            var e = this.element = document.createElement("button");
            e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
            var i = this.createSVG();
            e.appendChild(i), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
        }, r.prototype.activate = function() {
            this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
        }, r.prototype.deactivate = function() {
            this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
        }, r.prototype.createSVG = function() {
            var t = document.createElementNS(o, "svg");
            t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
            var e = document.createElementNS(o, "path"),
                i = function(t) {
                    if ("string" == typeof t) return t;
                    return "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z"
                }(this.parent.options.arrowShape);
            return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
        }, r.prototype.handleEvent = n.handleEvent, r.prototype.onclick = function() {
            if (this.isEnabled) {
                this.parent.uiChange();
                var t = this.isPrevious ? "previous" : "next";
                this.parent[t]()
            }
        }, r.prototype.enable = function() {
            this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
        }, r.prototype.disable = function() {
            this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
        }, r.prototype.update = function() {
            var t = this.parent.slides;
            if (this.parent.options.wrapAround && t.length > 1) this.enable();
            else {
                var e = t.length ? t.length - 1 : 0,
                    i = this.isPrevious ? 0 : e;
                this[this.parent.selectedIndex == i ? "disable" : "enable"]()
            }
        }, r.prototype.destroy = function() {
            this.deactivate(), this.allOff()
        }, n.extend(e.defaults, {
            prevNextButtons: !0,
            arrowShape: {
                x0: 10,
                x1: 60,
                y1: 50,
                x2: 70,
                y2: 40,
                x3: 30
            }
        }), e.createMethods.push("_createPrevNextButtons");
        var s = e.prototype;
        return s._createPrevNextButtons = function() {
            this.options.prevNextButtons && (this.prevButton = new r(-1, this), this.nextButton = new r(1, this), this.on("activate", this.activatePrevNextButtons))
        }, s.activatePrevNextButtons = function() {
            this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
        }, s.deactivatePrevNextButtons = function() {
            this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
        }, e.PrevNextButton = r, e
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], (function(i, n, o) {
            return e(t, i, n, o)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.Unipointer, t.fizzyUIUtils)
    }(window, (function(t, e, i, n) {
        function o(t) {
            this.parent = t, this._create()
        }
        o.prototype = Object.create(i.prototype), o.prototype._create = function() {
            this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
        }, o.prototype.activate = function() {
            this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
        }, o.prototype.deactivate = function() {
            this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
        }, o.prototype.setDots = function() {
            var t = this.parent.slides.length - this.dots.length;
            t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
        }, o.prototype.addDots = function(t) {
            for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, o = n + t, r = n; r < o; r++) {
                var s = document.createElement("li");
                s.className = "dot", s.setAttribute("aria-label", "Page dot " + (r + 1)), e.appendChild(s), i.push(s)
            }
            this.holder.appendChild(e), this.dots = this.dots.concat(i)
        }, o.prototype.removeDots = function(t) {
            this.dots.splice(this.dots.length - t, t).forEach((function(t) {
                this.holder.removeChild(t)
            }), this)
        }, o.prototype.updateSelected = function() {
            this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
        }, o.prototype.onTap = o.prototype.onClick = function(t) {
            var e = t.target;
            if ("LI" == e.nodeName) {
                this.parent.uiChange();
                var i = this.dots.indexOf(e);
                this.parent.select(i)
            }
        }, o.prototype.destroy = function() {
            this.deactivate(), this.allOff()
        }, e.PageDots = o, n.extend(e.defaults, {
            pageDots: !0
        }), e.createMethods.push("_createPageDots");
        var r = e.prototype;
        return r._createPageDots = function() {
            this.options.pageDots && (this.pageDots = new o(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
        }, r.activatePageDots = function() {
            this.pageDots.activate()
        }, r.updateSelectedPageDots = function() {
            this.pageDots.updateSelected()
        }, r.updatePageDots = function() {
            this.pageDots.setDots()
        }, r.deactivatePageDots = function() {
            this.pageDots.deactivate()
        }, e.PageDots = o, e
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], (function(t, i, n) {
            return e(t, i, n)
        })) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
    }(window, (function(t, e, i) {
        function n(t) {
            this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
        }
        n.prototype = Object.create(t.prototype), n.prototype.play = function() {
            "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()))
        }, n.prototype.tick = function() {
            if ("playing" == this.state) {
                var t = this.parent.options.autoPlay;
                t = "number" == typeof t ? t : 3e3;
                var e = this;
                this.clear(), this.timeout = setTimeout((function() {
                    e.parent.next(!0), e.tick()
                }), t)
            }
        }, n.prototype.stop = function() {
            this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
        }, n.prototype.clear = function() {
            clearTimeout(this.timeout)
        }, n.prototype.pause = function() {
            "playing" == this.state && (this.state = "paused", this.clear())
        }, n.prototype.unpause = function() {
            "paused" == this.state && this.play()
        }, n.prototype.visibilityChange = function() {
            this[document.hidden ? "pause" : "unpause"]()
        }, n.prototype.visibilityPlay = function() {
            this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
        }, e.extend(i.defaults, {
            pauseAutoPlayOnHover: !0
        }), i.createMethods.push("_createPlayer");
        var o = i.prototype;
        return o._createPlayer = function() {
            this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
        }, o.activatePlayer = function() {
            this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
        }, o.playPlayer = function() {
            this.player.play()
        }, o.stopPlayer = function() {
            this.player.stop()
        }, o.pausePlayer = function() {
            this.player.pause()
        }, o.unpausePlayer = function() {
            this.player.unpause()
        }, o.deactivatePlayer = function() {
            this.player.stop(), this.element.removeEventListener("mouseenter", this)
        }, o.onmouseenter = function() {
            this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
        }, o.onmouseleave = function() {
            this.player.unpause(), this.element.removeEventListener("mouseleave", this)
        }, i.Player = n, i
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], (function(i, n) {
            return e(t, i, n)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
    }(window, (function(t, e, i) {
        var n = e.prototype;
        return n.insert = function(t, e) {
            var i = this._makeCells(t);
            if (i && i.length) {
                var n = this.cells.length;
                e = void 0 === e ? n : e;
                var o = function(t) {
                        var e = document.createDocumentFragment();
                        return t.forEach((function(t) {
                            e.appendChild(t.element)
                        })), e
                    }(i),
                    r = e == n;
                if (r) this.slider.appendChild(o);
                else {
                    var s = this.cells[e].element;
                    this.slider.insertBefore(o, s)
                }
                if (0 === e) this.cells = i.concat(this.cells);
                else if (r) this.cells = this.cells.concat(i);
                else {
                    var a = this.cells.splice(e, n - e);
                    this.cells = this.cells.concat(i).concat(a)
                }
                this._sizeCells(i), this.cellChange(e, !0)
            }
        }, n.append = function(t) {
            this.insert(t, this.cells.length)
        }, n.prepend = function(t) {
            this.insert(t, 0)
        }, n.remove = function(t) {
            var e = this.getCells(t);
            if (e && e.length) {
                var n = this.cells.length - 1;
                e.forEach((function(t) {
                    t.remove();
                    var e = this.cells.indexOf(t);
                    n = Math.min(e, n), i.removeFrom(this.cells, t)
                }), this), this.cellChange(n, !0)
            }
        }, n.cellSizeChange = function(t) {
            var e = this.getCell(t);
            if (e) {
                e.getSize();
                var i = this.cells.indexOf(e);
                this.cellChange(i)
            }
        }, n.cellChange = function(t, e) {
            var i = this.selectedElement;
            this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
            var n = this.getCell(i);
            n && (this.selectedIndex = this.getCellSlideIndex(n)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected()
        }, e
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], (function(i, n) {
            return e(t, i, n)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
    }(window, (function(t, e, i) {
        "use strict";
        e.createMethods.push("_createLazyload");
        var n = e.prototype;

        function o(t, e) {
            this.img = t, this.flickity = e, this.load()
        }
        return n._createLazyload = function() {
            this.on("select", this.lazyLoad)
        }, n.lazyLoad = function() {
            var t = this.options.lazyLoad;
            if (t) {
                var e = "number" == typeof t ? t : 0,
                    n = this.getAdjacentCellElements(e),
                    r = [];
                n.forEach((function(t) {
                    var e = function(t) {
                        if ("IMG" == t.nodeName) {
                            var e = t.getAttribute("data-flickity-lazyload"),
                                n = t.getAttribute("data-flickity-lazyload-src"),
                                o = t.getAttribute("data-flickity-lazyload-srcset");
                            if (e || n || o) return [t]
                        }
                        var r = "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]",
                            s = t.querySelectorAll(r);
                        return i.makeArray(s)
                    }(t);
                    r = r.concat(e)
                })), r.forEach((function(t) {
                    new o(t, this)
                }), this)
            }
        }, o.prototype.handleEvent = i.handleEvent, o.prototype.load = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this);
            var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
                e = this.img.getAttribute("data-flickity-lazyload-srcset");
            this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
        }, o.prototype.onload = function(t) {
            this.complete(t, "flickity-lazyloaded")
        }, o.prototype.onerror = function(t) {
            this.complete(t, "flickity-lazyerror")
        }, o.prototype.complete = function(t, e) {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            var i = this.flickity.getParentCell(this.img),
                n = i && i.element;
            this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n)
        }, e.LazyLoader = o, e
    })),
    /*!
     * Flickity v2.3.0
     * Touch, responsive, flickable carousels
     *
     * Licensed GPLv3 for open source use
     * or Flickity Commercial License for commercial use
     *
     * https://flickity.metafizzy.co
     * Copyright 2015-2021 Metafizzy
     */
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
    }(window, (function(t) {
        return t
    })),
    /*!
     * Flickity asNavFor v2.0.2
     * enable asNavFor for Flickity
     */
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
    }(window, (function(t, e) {
        t.createMethods.push("_createAsNavFor");
        var i = t.prototype;
        return i._createAsNavFor = function() {
            this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
            var t = this.options.asNavFor;
            if (t) {
                var e = this;
                setTimeout((function() {
                    e.setNavCompanion(t)
                }))
            }
        }, i.setNavCompanion = function(i) {
            i = e.getQueryElement(i);
            var n = t.data(i);
            if (n && n != this) {
                this.navCompanion = n;
                var o = this;
                this.onNavCompanionSelect = function() {
                    o.navCompanionSelect()
                }, n.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0)
            }
        }, i.navCompanionSelect = function(t) {
            var e = this.navCompanion && this.navCompanion.selectedCells;
            if (e) {
                var i = e[0],
                    n = this.navCompanion.cells.indexOf(i),
                    o = n + e.length - 1,
                    r = Math.floor(function(t, e, i) {
                        return (e - t) * i + t
                    }(n, o, this.navCompanion.cellAlign));
                if (this.selectCell(r, !1, t), this.removeNavSelectedElements(), !(r >= this.cells.length)) {
                    var s = this.cells.slice(n, o + 1);
                    this.navSelectedElements = s.map((function(t) {
                        return t.element
                    })), this.changeNavSelectedClass("add")
                }
            }
        }, i.changeNavSelectedClass = function(t) {
            this.navSelectedElements.forEach((function(e) {
                e.classList[t]("is-nav-selected")
            }))
        }, i.activateAsNavFor = function() {
            this.navCompanionSelect(!0)
        }, i.removeNavSelectedElements = function() {
            this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
        }, i.onNavStaticClick = function(t, e, i, n) {
            "number" == typeof n && this.navCompanion.selectCell(n)
        }, i.deactivateAsNavFor = function() {
            this.removeNavSelectedElements()
        }, i.destroyAsNavFor = function() {
            this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
        }, t
    })),
    /*!
     * imagesLoaded v4.1.4
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], (function(i) {
            return e(t, i)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
    }("undefined" != typeof window ? window : this, (function(t, e) {
        var i = t.jQuery,
            n = t.console;

        function o(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }
        var r = Array.prototype.slice;

        function s(t) {
            return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? r.call(t) : [t]
        }

        function a(t, e, r) {
            if (!(this instanceof a)) return new a(t, e, r);
            var l = t;
            "string" == typeof t && (l = document.querySelectorAll(t)), l ? (this.elements = s(l), this.options = o({}, this.options), "function" == typeof e ? r = e : o(this.options, e), r && this.on("always", r), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded " + (l || t))
        }
        a.prototype = Object.create(e.prototype), a.prototype.options = {}, a.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, a.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && l[e]) {
                for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var o = i[n];
                    this.addImage(o)
                }
                if ("string" == typeof this.options.background) {
                    var r = t.querySelectorAll(this.options.background);
                    for (n = 0; n < r.length; n++) {
                        var s = r[n];
                        this.addElementBackgroundImages(s)
                    }
                }
            }
        };
        var l = {
            1: !0,
            9: !0,
            11: !0
        };

        function c(t) {
            this.img = t
        }

        function u(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        return a.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                    var o = n && n[2];
                    o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
                }
        }, a.prototype.addImage = function(t) {
            var e = new c(t);
            this.images.push(e)
        }, a.prototype.addBackground = function(t, e) {
            var i = new u(t, e);
            this.images.push(i)
        }, a.prototype.check = function() {
            var t = this;

            function e(e, i, n) {
                setTimeout((function() {
                    t.progress(e, i, n)
                }))
            }
            this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach((function(t) {
                t.once("progress", e), t.check()
            })) : this.complete()
        }, a.prototype.progress = function(t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && n && n.log("progress: " + i, t, e)
        }, a.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, c.prototype = Object.create(e.prototype), c.prototype.check = function() {
            this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
        }, c.prototype.getIsImageComplete = function() {
            return this.img.complete && this.img.naturalWidth
        }, c.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, c.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, c.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, c.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, c.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, u.prototype = Object.create(c.prototype), u.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, u.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, u.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, a.makeJQueryPlugin = function(e) {
            (e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function(t, e) {
                return new a(this, t, e).jqDeferred.promise(i(this))
            })
        }, a.makeJQueryPlugin(), a
    })),
    /*!
     * Flickity imagesLoaded v2.0.0
     * enables imagesLoaded option for Flickity
     */
    function(t, e) {
        "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], (function(i, n) {
            return e(t, i, n)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded)
    }(window, (function(t, e, i) {
        "use strict";
        e.createMethods.push("_createImagesLoaded");
        var n = e.prototype;
        return n._createImagesLoaded = function() {
            this.on("activate", this.imagesLoaded)
        }, n.imagesLoaded = function() {
            if (this.options.imagesLoaded) {
                var t = this;
                i(this.slider).on("progress", (function(e, i) {
                    var n = t.getParentCell(i.img);
                    t.cellSizeChange(n && n.element), t.options.freeScroll || t.positionSliderAtSelected()
                }))
            }
        }, e
    })),
    /*!
     * Flickity sync v2.0.0
     * enable sync for Flickity
     */
    function(t, e) {
        "function" == typeof define && define.amd ? define(["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
    }(window, (function(t, e) {
        "use strict";
        return t.createMethods.push("_createSync"), t.prototype._createSync = function() {
            this.syncers = {};
            var t = this.options.sync;
            if (this.on("destroy", this.unsyncAll), t) {
                var e = this;
                setTimeout((function() {
                    e.sync(t)
                }))
            }
        }, t.prototype.sync = function(i) {
            i = e.getQueryElement(i);
            var n = t.data(i);
            n && (this._syncCompanion(n), n._syncCompanion(this))
        }, t.prototype._syncCompanion = function(t) {
            var e = this;

            function i() {
                var i = e.selectedIndex;
                t.selectedIndex != i && t.select(i)
            }
            this.on("select", i), this.syncers[t.guid] = {
                flickity: t,
                listener: i
            }
        }, t.prototype.unsync = function(i) {
            i = e.getQueryElement(i);
            var n = t.data(i);
            this._unsync(n)
        }, t.prototype._unsync = function(t) {
            t && (this._unsyncCompanion(t), t._unsyncCompanion(this))
        }, t.prototype._unsyncCompanion = function(t) {
            var e = t.guid,
                i = this.syncers[e];
            this.off("select", i.listener), delete this.syncers[e]
        }, t.prototype.unsyncAll = function() {
            for (var t in this.syncers) {
                var e = this.syncers[t];
                this._unsync(e.flickity)
            }
        }, t
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : e(t.Flickity, t.fizzyUIUtils)
    }(this, (function(t, e) {
        var i = t.Slide,
            n = i.prototype.updateTarget;
        i.prototype.updateTarget = function() {
            if (n.apply(this, arguments), this.parent.options.fade) {
                var t = this.target - this.x,
                    e = this.cells[0].x;
                this.cells.forEach((function(i) {
                    var n = i.x - e - t;
                    i.renderPosition(n)
                }))
            }
        }, i.prototype.setOpacity = function(t) {
            this.cells.forEach((function(e) {
                e.element.style.opacity = t
            }))
        };
        var o = t.prototype;
        t.createMethods.push("_createFade"), o._createFade = function() {
            this.fadeIndex = this.selectedIndex, this.prevSelectedIndex = this.selectedIndex, this.on("select", this.onSelectFade), this.on("dragEnd", this.onDragEndFade), this.on("settle", this.onSettleFade), this.on("activate", this.onActivateFade), this.on("deactivate", this.onDeactivateFade)
        };
        var r = o.updateSlides;
        o.updateSlides = function() {
            r.apply(this, arguments), this.options.fade && this.slides.forEach((function(t, e) {
                var i = e == this.selectedIndex ? 1 : 0;
                t.setOpacity(i)
            }), this)
        }, o.onSelectFade = function() {
            this.fadeIndex = Math.min(this.prevSelectedIndex, this.slides.length - 1), this.prevSelectedIndex = this.selectedIndex
        }, o.onSettleFade = function() {
            (delete this.didDragEnd, this.options.fade) && (this.selectedSlide.setOpacity(1), this.slides[this.fadeIndex] && this.fadeIndex != this.selectedIndex && this.slides[this.fadeIndex].setOpacity(0))
        }, o.onDragEndFade = function() {
            this.didDragEnd = !0
        }, o.onActivateFade = function() {
            this.options.fade && this.element.classList.add("is-fade")
        }, o.onDeactivateFade = function() {
            this.options.fade && (this.element.classList.remove("is-fade"), this.slides.forEach((function(t) {
                t.setOpacity("")
            })))
        };
        var s = o.positionSlider;
        o.positionSlider = function() {
            this.options.fade ? (this.fadeSlides(), this.dispatchScrollEvent()) : s.apply(this, arguments)
        };
        var a = o.positionSliderAtSelected;
        o.positionSliderAtSelected = function() {
            this.options.fade && this.setTranslateX(0), a.apply(this, arguments)
        }, o.fadeSlides = function() {
            if (!(this.slides.length < 2)) {
                var t = this.getFadeIndexes(),
                    e = this.slides[t.a],
                    i = this.slides[t.b],
                    n = this.wrapDifference(e.target, i.target),
                    o = this.wrapDifference(e.target, -this.x);
                o /= n, e.setOpacity(1 - o), i.setOpacity(o);
                var r = t.a;
                this.isDragging && (r = o > .5 ? t.a : t.b), null != this.fadeHideIndex && this.fadeHideIndex != r && this.fadeHideIndex != t.a && this.fadeHideIndex != t.b && this.slides[this.fadeHideIndex].setOpacity(0), this.fadeHideIndex = r
            }
        }, o.getFadeIndexes = function() {
            return this.isDragging || this.didDragEnd ? this.options.wrapAround ? this.getFadeDragWrapIndexes() : this.getFadeDragLimitIndexes() : {
                a: this.fadeIndex,
                b: this.selectedIndex
            }
        }, o.getFadeDragWrapIndexes = function() {
            var t = this.slides.map((function(t, e) {
                    return this.getSlideDistance(-this.x, e)
                }), this),
                i = t.map((function(t) {
                    return Math.abs(t)
                })),
                n = Math.min.apply(Math, i),
                o = i.indexOf(n),
                r = t[o],
                s = this.slides.length,
                a = r >= 0 ? 1 : -1;
            return {
                a: o,
                b: e.modulo(o + a, s)
            }
        }, o.getFadeDragLimitIndexes = function() {
            for (var t = 0, e = 0; e < this.slides.length - 1; e++) {
                var i = this.slides[e];
                if (-this.x < i.target) break;
                t = e
            }
            return {
                a: t,
                b: t + 1
            }
        }, o.wrapDifference = function(t, e) {
            var i = e - t;
            if (!this.options.wrapAround) return i;
            var n = i + this.slideableWidth,
                o = i - this.slideableWidth;
            return Math.abs(n) < Math.abs(i) && (i = n), Math.abs(o) < Math.abs(i) && (i = o), i
        };
        var l = o._getWrapShiftCells;
        o._getWrapShiftCells = function() {
            this.options.fade || l.apply(this, arguments)
        };
        var c = o.shiftWrapCells;
        return o.shiftWrapCells = function() {
            this.options.fade || c.apply(this, arguments)
        }, t
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipe = e()
    }(this, (function() {
        "use strict";
        return function(t, e, i, n) {
            var o = {
                features: null,
                bind: function(t, e, i, n) {
                    var o = (n ? "remove" : "add") + "EventListener";
                    e = e.split(" ");
                    for (var r = 0; r < e.length; r++) e[r] && t[o](e[r], i, !1)
                },
                isArray: function(t) {
                    return t instanceof Array
                },
                createEl: function(t, e) {
                    var i = document.createElement(e || "div");
                    return t && (i.className = t), i
                },
                getScrollY: function() {
                    var t = window.pageYOffset;
                    return void 0 !== t ? t : document.documentElement.scrollTop
                },
                unbind: function(t, e, i) {
                    o.bind(t, e, i, !0)
                },
                removeClass: function(t, e) {
                    var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
                    t.className = t.className.replace(i, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                },
                addClass: function(t, e) {
                    o.hasClass(t, e) || (t.className += (t.className ? " " : "") + e)
                },
                hasClass: function(t, e) {
                    return t.className && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
                },
                getChildByClass: function(t, e) {
                    for (var i = t.firstChild; i;) {
                        if (o.hasClass(i, e)) return i;
                        i = i.nextSibling
                    }
                },
                arraySearch: function(t, e, i) {
                    for (var n = t.length; n--;)
                        if (t[n][i] === e) return n;
                    return -1
                },
                extend: function(t, e, i) {
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            if (i && t.hasOwnProperty(n)) continue;
                            t[n] = e[n]
                        }
                },
                easing: {
                    sine: {
                        out: function(t) {
                            return Math.sin(t * (Math.PI / 2))
                        },
                        inOut: function(t) {
                            return -(Math.cos(Math.PI * t) - 1) / 2
                        }
                    },
                    cubic: {
                        out: function(t) {
                            return --t * t * t + 1
                        }
                    }
                },
                detectFeatures: function() {
                    if (o.features) return o.features;
                    var t = o.createEl().style,
                        e = "",
                        i = {};
                    if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = !!window.PointerEvent || navigator.msPointerEnabled, !i.pointerEvent) {
                        var n = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            r && r.length > 0 && ((r = parseInt(r[1], 10)) >= 1 && r < 8 && (i.isOldIOSPhone = !0))
                        }
                        var s = n.match(/Android\s([0-9\.]*)/),
                            a = s ? s[1] : 0;
                        (a = parseFloat(a)) >= 1 && (a < 4.4 && (i.isOldAndroid = !0), i.androidVersion = a), i.isMobileOpera = /opera mini|opera mobi/i.test(n)
                    }
                    for (var l, c, u = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], h = 0; h < 4; h++) {
                        e = d[h];
                        for (var p = 0; p < 3; p++) l = u[p], c = e + (e ? l.charAt(0).toUpperCase() + l.slice(1) : l), !i[l] && c in t && (i[l] = c);
                        e && !i.raf && (e = e.toLowerCase(), i.raf = window[e + "RequestAnimationFrame"], i.raf && (i.caf = window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"]))
                    }
                    if (!i.raf) {
                        var f = 0;
                        i.raf = function(t) {
                            var e = (new Date).getTime(),
                                i = Math.max(0, 16 - (e - f)),
                                n = window.setTimeout((function() {
                                    t(e + i)
                                }), i);
                            return f = e + i, n
                        }, i.caf = function(t) {
                            clearTimeout(t)
                        }
                    }
                    return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i
                }
            };
            o.detectFeatures(), o.features.oldIE && (o.bind = function(t, e, i, n) {
                e = e.split(" ");
                for (var o, r = (n ? "detach" : "attach") + "Event", s = function() {
                        i.handleEvent.call(i)
                    }, a = 0; a < e.length; a++)
                    if (o = e[a])
                        if ("object" == typeof i && i.handleEvent) {
                            if (n) {
                                if (!i["oldIE" + o]) return !1
                            } else i["oldIE" + o] = s;
                            t[r]("on" + o, i["oldIE" + o])
                        } else t[r]("on" + o, i)
            });
            var r = this,
                s = {
                    allowPanToNext: !0,
                    spacing: .12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    verticalDragRange: .75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: .35,
                    panEndFriction: .35,
                    isClickableElement: function(t) {
                        return "A" === t.tagName
                    },
                    getDoubleTapZoom: function(t, e) {
                        return t || e.initialZoomLevel < .7 ? 1 : 1.33
                    },
                    maxSpreadZoom: 1.33,
                    modal: !0,
                    scaleMode: "fit"
                };
            o.extend(s, n);
            var a, l, c, u, d, h, p, f, m, g, v, y, b, w, S, x, E, k, C, A, L, P, T, _, I, q, D, F, O, M, z, $, j, N, H, B, W, R, V, U, G, X, Y, Z, K, Q, J, tt, et, it, nt, ot, rt, st, at, lt, ct = {
                    x: 0,
                    y: 0
                },
                ut = {
                    x: 0,
                    y: 0
                },
                dt = {
                    x: 0,
                    y: 0
                },
                ht = {},
                pt = 0,
                ft = {},
                mt = {
                    x: 0,
                    y: 0
                },
                gt = 0,
                vt = !0,
                yt = [],
                bt = {},
                wt = !1,
                St = function(t, e) {
                    o.extend(r, e.publicMethods), yt.push(t)
                },
                xt = function(t) {
                    var e = He();
                    return t > e - 1 ? t - e : t < 0 ? e + t : t
                },
                Et = {},
                kt = function(t, e) {
                    return Et[t] || (Et[t] = []), Et[t].push(e)
                },
                Ct = function(t) {
                    var e = Et[t];
                    if (e) {
                        var i = Array.prototype.slice.call(arguments);
                        i.shift();
                        for (var n = 0; n < e.length; n++) e[n].apply(r, i)
                    }
                },
                At = function() {
                    return (new Date).getTime()
                },
                Lt = function(t) {
                    st = t, r.bg.style.opacity = t * s.bgOpacity
                },
                Pt = function(t, e, i, n, o) {
                    (!wt || o && o !== r.currItem) && (n /= o ? o.fitRatio : r.currItem.fitRatio), t[P] = y + e + "px, " + i + "px" + b + " scale(" + n + ")"
                },
                Tt = function(t) {
                    et && (t && (g > r.currItem.fitRatio ? wt || (Ze(r.currItem, !1, !0), wt = !0) : wt && (Ze(r.currItem), wt = !1)), Pt(et, dt.x, dt.y, g))
                },
                _t = function(t) {
                    t.container && Pt(t.container.style, t.initialPosition.x, t.initialPosition.y, t.initialZoomLevel, t)
                },
                It = function(t, e) {
                    e[P] = y + t + "px, 0px" + b
                },
                qt = function(t, e) {
                    if (!s.loop && e) {
                        var i = u + (mt.x * pt - t) / mt.x,
                            n = Math.round(t - ue.x);
                        (i < 0 && n > 0 || i >= He() - 1 && n < 0) && (t = ue.x + n * s.mainScrollEndFriction)
                    }
                    ue.x = t, It(t, d)
                },
                Dt = function(t, e) {
                    var i = de[t] - ft[t];
                    return ut[t] + ct[t] + i - i * (e / v)
                },
                Ft = function(t, e) {
                    t.x = e.x, t.y = e.y, e.id && (t.id = e.id)
                },
                Ot = function(t) {
                    t.x = Math.round(t.x), t.y = Math.round(t.y)
                },
                Mt = null,
                zt = function() {
                    Mt && (o.unbind(document, "mousemove", zt), o.addClass(t, "pswp--has_mouse"), s.mouseUsed = !0, Ct("mouseUsed")), Mt = setTimeout((function() {
                        Mt = null
                    }), 100)
                },
                $t = function(t, e) {
                    var i = Ue(r.currItem, ht, t);
                    return e && (tt = i), i
                },
                jt = function(t) {
                    return t || (t = r.currItem), t.initialZoomLevel
                },
                Nt = function(t) {
                    return t || (t = r.currItem), t.w > 0 ? s.maxSpreadZoom : 1
                },
                Ht = function(t, e, i, n) {
                    return n === r.currItem.initialZoomLevel ? (i[t] = r.currItem.initialPosition[t], !0) : (i[t] = Dt(t, n), i[t] > e.min[t] ? (i[t] = e.min[t], !0) : i[t] < e.max[t] && (i[t] = e.max[t], !0))
                },
                Bt = function(t) {
                    var e = "";
                    s.escKey && 27 === t.keyCode ? e = "close" : s.arrowKeys && (37 === t.keyCode ? e = "prev" : 39 === t.keyCode && (e = "next")), e && (t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, r[e]()))
                },
                Wt = function(t) {
                    t && (X || G || it || W) && (t.preventDefault(), t.stopPropagation())
                },
                Rt = function() {
                    r.setScrollOffset(0, o.getScrollY())
                },
                Vt = {},
                Ut = 0,
                Gt = function(t) {
                    Vt[t] && (Vt[t].raf && q(Vt[t].raf), Ut--, delete Vt[t])
                },
                Xt = function(t) {
                    Vt[t] && Gt(t), Vt[t] || (Ut++, Vt[t] = {})
                },
                Yt = function() {
                    for (var t in Vt) Vt.hasOwnProperty(t) && Gt(t)
                },
                Zt = function(t, e, i, n, o, r, s) {
                    var a, l = At();
                    Xt(t);
                    var c = function() {
                        if (Vt[t]) {
                            if ((a = At() - l) >= n) return Gt(t), r(i), void(s && s());
                            r((i - e) * o(a / n) + e), Vt[t].raf = I(c)
                        }
                    };
                    c()
                },
                Kt = {
                    shout: Ct,
                    listen: kt,
                    viewportSize: ht,
                    options: s,
                    isMainScrollAnimating: function() {
                        return it
                    },
                    getZoomLevel: function() {
                        return g
                    },
                    getCurrentIndex: function() {
                        return u
                    },
                    isDragging: function() {
                        return V
                    },
                    isZooming: function() {
                        return Q
                    },
                    setScrollOffset: function(t, e) {
                        ft.x = t, M = ft.y = e, Ct("updateScrollOffset", ft)
                    },
                    applyZoomPan: function(t, e, i, n) {
                        dt.x = e, dt.y = i, g = t, Tt(n)
                    },
                    init: function() {
                        if (!a && !l) {
                            var i;
                            r.framework = o, r.template = t, r.bg = o.getChildByClass(t, "pswp__bg"), D = t.className, a = !0, z = o.detectFeatures(), I = z.raf, q = z.caf, P = z.transform, O = z.oldIE, r.scrollWrap = o.getChildByClass(t, "pswp__scroll-wrap"), r.container = o.getChildByClass(r.scrollWrap, "pswp__container"), d = r.container.style, r.itemHolders = x = [{
                                    el: r.container.children[0],
                                    wrap: 0,
                                    index: -1
                                }, {
                                    el: r.container.children[1],
                                    wrap: 0,
                                    index: -1
                                }, {
                                    el: r.container.children[2],
                                    wrap: 0,
                                    index: -1
                                }], x[0].el.style.display = x[2].el.style.display = "none",
                                function() {
                                    if (P) {
                                        var e = z.perspective && !_;
                                        return y = "translate" + (e ? "3d(" : "("), void(b = z.perspective ? ", 0px)" : ")")
                                    }
                                    P = "left", o.addClass(t, "pswp--ie"), It = function(t, e) {
                                        e.left = t + "px"
                                    }, _t = function(t) {
                                        var e = t.fitRatio > 1 ? 1 : t.fitRatio,
                                            i = t.container.style,
                                            n = e * t.w,
                                            o = e * t.h;
                                        i.width = n + "px", i.height = o + "px", i.left = t.initialPosition.x + "px", i.top = t.initialPosition.y + "px"
                                    }, Tt = function() {
                                        if (et) {
                                            var t = et,
                                                e = r.currItem,
                                                i = e.fitRatio > 1 ? 1 : e.fitRatio,
                                                n = i * e.w,
                                                o = i * e.h;
                                            t.width = n + "px", t.height = o + "px", t.left = dt.x + "px", t.top = dt.y + "px"
                                        }
                                    }
                                }(), m = {
                                    resize: r.updateSize,
                                    orientationchange: function() {
                                        clearTimeout($), $ = setTimeout((function() {
                                            ht.x !== r.scrollWrap.clientWidth && r.updateSize()
                                        }), 500)
                                    },
                                    scroll: Rt,
                                    keydown: Bt,
                                    click: Wt
                                };
                            var n = z.isOldIOSPhone || z.isOldAndroid || z.isMobileOpera;
                            for (z.animationName && z.transform && !n || (s.showAnimationDuration = s.hideAnimationDuration = 0), i = 0; i < yt.length; i++) r["init" + yt[i]]();
                            if (e)(r.ui = new e(r, o)).init();
                            Ct("firstUpdate"), u = u || s.index || 0, (isNaN(u) || u < 0 || u >= He()) && (u = 0), r.currItem = Ne(u), (z.isOldIOSPhone || z.isOldAndroid) && (vt = !1), t.setAttribute("aria-hidden", "false"), s.modal && (vt ? t.style.position = "fixed" : (t.style.position = "absolute", t.style.top = o.getScrollY() + "px")), void 0 === M && (Ct("initialLayout"), M = F = o.getScrollY());
                            var c = "pswp--open ";
                            for (s.mainClass && (c += s.mainClass + " "), s.showHideOpacity && (c += "pswp--animate_opacity "), c += _ ? "pswp--touch" : "pswp--notouch", c += z.animationName ? " pswp--css_animation" : "", c += z.svg ? " pswp--svg" : "", o.addClass(t, c), r.updateSize(), h = -1, gt = null, i = 0; i < 3; i++) It((i + h) * mt.x, x[i].el.style);
                            O || o.bind(r.scrollWrap, f, r), kt("initialZoomInEnd", (function() {
                                r.setContent(x[0], u - 1), r.setContent(x[2], u + 1), x[0].el.style.display = x[2].el.style.display = "block", s.focus && t.focus(), o.bind(document, "keydown", r), z.transform && o.bind(r.scrollWrap, "click", r), s.mouseUsed || o.bind(document, "mousemove", zt), o.bind(window, "resize scroll orientationchange", r), Ct("bindEvents")
                            })), r.setContent(x[1], u), r.updateCurrItem(), Ct("afterInit"), vt || (w = setInterval((function() {
                                Ut || V || Q || g !== r.currItem.initialZoomLevel || r.updateSize()
                            }), 1e3)), o.addClass(t, "pswp--visible")
                        }
                    },
                    close: function() {
                        a && (a = !1, l = !0, Ct("close"), o.unbind(window, "resize scroll orientationchange", r), o.unbind(window, "scroll", m.scroll), o.unbind(document, "keydown", r), o.unbind(document, "mousemove", zt), z.transform && o.unbind(r.scrollWrap, "click", r), V && o.unbind(window, p, r), clearTimeout($), Ct("unbindEvents"), Be(r.currItem, null, !0, r.destroy))
                    },
                    destroy: function() {
                        Ct("destroy"), Me && clearTimeout(Me), t.setAttribute("aria-hidden", "true"), t.className = D, w && clearInterval(w), o.unbind(r.scrollWrap, f, r), o.unbind(window, "scroll", r), fe(), Yt(), Et = null
                    },
                    panTo: function(t, e, i) {
                        i || (t > tt.min.x ? t = tt.min.x : t < tt.max.x && (t = tt.max.x), e > tt.min.y ? e = tt.min.y : e < tt.max.y && (e = tt.max.y)), dt.x = t, dt.y = e, Tt()
                    },
                    handleEvent: function(t) {
                        t = t || window.event, m[t.type] && m[t.type](t)
                    },
                    goTo: function(t) {
                        var e = (t = xt(t)) - u;
                        gt = e, u = t, r.currItem = Ne(u), pt -= e, qt(mt.x * pt), Yt(), it = !1, r.updateCurrItem()
                    },
                    next: function() {
                        r.goTo(u + 1)
                    },
                    prev: function() {
                        r.goTo(u - 1)
                    },
                    updateCurrZoomItem: function(t) {
                        if (t && Ct("beforeChange", 0), x[1].el.children.length) {
                            var e = x[1].el.children[0];
                            et = o.hasClass(e, "pswp__zoom-wrap") ? e.style : null
                        } else et = null;
                        tt = r.currItem.bounds, v = g = r.currItem.initialZoomLevel, dt.x = tt.center.x, dt.y = tt.center.y, t && Ct("afterChange")
                    },
                    invalidateCurrItems: function() {
                        S = !0;
                        for (var t = 0; t < 3; t++) x[t].item && (x[t].item.needsUpdate = !0)
                    },
                    updateCurrItem: function(t) {
                        if (0 !== gt) {
                            var e, i = Math.abs(gt);
                            if (!(t && i < 2)) {
                                r.currItem = Ne(u), wt = !1, Ct("beforeChange", gt), i >= 3 && (h += gt + (gt > 0 ? -3 : 3), i = 3);
                                for (var n = 0; n < i; n++) gt > 0 ? (e = x.shift(), x[2] = e, h++, It((h + 2) * mt.x, e.el.style), r.setContent(e, u - i + n + 1 + 1)) : (e = x.pop(), x.unshift(e), h--, It(h * mt.x, e.el.style), r.setContent(e, u + i - n - 1 - 1));
                                if (et && 1 === Math.abs(gt)) {
                                    var o = Ne(E);
                                    o.initialZoomLevel !== g && (Ue(o, ht), Ze(o), _t(o))
                                }
                                gt = 0, r.updateCurrZoomItem(), E = u, Ct("afterChange")
                            }
                        }
                    },
                    updateSize: function(e) {
                        if (!vt && s.modal) {
                            var i = o.getScrollY();
                            if (M !== i && (t.style.top = i + "px", M = i), !e && bt.x === window.innerWidth && bt.y === window.innerHeight) return;
                            bt.x = window.innerWidth, bt.y = window.innerHeight, t.style.height = bt.y + "px"
                        }
                        if (ht.x = r.scrollWrap.clientWidth, ht.y = r.scrollWrap.clientHeight, Rt(), mt.x = ht.x + Math.round(ht.x * s.spacing), mt.y = ht.y, qt(mt.x * pt), Ct("beforeResize"), void 0 !== h) {
                            for (var n, a, l, c = 0; c < 3; c++) n = x[c], It((c + h) * mt.x, n.el.style), l = u + c - 1, s.loop && He() > 2 && (l = xt(l)), (a = Ne(l)) && (S || a.needsUpdate || !a.bounds) ? (r.cleanSlide(a), r.setContent(n, l), 1 === c && (r.currItem = a, r.updateCurrZoomItem(!0)), a.needsUpdate = !1) : -1 === n.index && l >= 0 && r.setContent(n, l), a && a.container && (Ue(a, ht), Ze(a), _t(a));
                            S = !1
                        }
                        v = g = r.currItem.initialZoomLevel, (tt = r.currItem.bounds) && (dt.x = tt.center.x, dt.y = tt.center.y, Tt(!0)), Ct("resize")
                    },
                    zoomTo: function(t, e, i, n, r) {
                        e && (v = g, de.x = Math.abs(e.x) - dt.x, de.y = Math.abs(e.y) - dt.y, Ft(ut, dt));
                        var s = $t(t, !1),
                            a = {};
                        Ht("x", s, a, t), Ht("y", s, a, t);
                        var l = g,
                            c = dt.x,
                            u = dt.y;
                        Ot(a);
                        var d = function(e) {
                            1 === e ? (g = t, dt.x = a.x, dt.y = a.y) : (g = (t - l) * e + l, dt.x = (a.x - c) * e + c, dt.y = (a.y - u) * e + u), r && r(e), Tt(1 === e)
                        };
                        i ? Zt("customZoomTo", 0, 1, i, n || o.easing.sine.inOut, d) : d(1)
                    }
                },
                Qt = {},
                Jt = {},
                te = {},
                ee = {},
                ie = {},
                ne = [],
                oe = {},
                re = [],
                se = {},
                ae = 0,
                le = {
                    x: 0,
                    y: 0
                },
                ce = 0,
                ue = {
                    x: 0,
                    y: 0
                },
                de = {
                    x: 0,
                    y: 0
                },
                he = {
                    x: 0,
                    y: 0
                },
                pe = function(t, e) {
                    return se.x = Math.abs(t.x - e.x), se.y = Math.abs(t.y - e.y), Math.sqrt(se.x * se.x + se.y * se.y)
                },
                fe = function() {
                    Y && (q(Y), Y = null)
                },
                me = function() {
                    V && (Y = I(me), Te())
                },
                ge = function(t, e) {
                    return !(!t || t === document) && !(t.getAttribute("class") && t.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (e(t) ? t : ge(t.parentNode, e))
                },
                ve = {},
                ye = function(t, e) {
                    return ve.prevent = !ge(t.target, s.isClickableElement), Ct("preventDragEvent", t, e, ve), ve.prevent
                },
                be = function(t, e) {
                    return e.x = t.pageX, e.y = t.pageY, e.id = t.identifier, e
                },
                we = function(t, e, i) {
                    i.x = .5 * (t.x + e.x), i.y = .5 * (t.y + e.y)
                },
                Se = function() {
                    var t = dt.y - r.currItem.initialPosition.y;
                    return 1 - Math.abs(t / (ht.y / 2))
                },
                xe = {},
                Ee = {},
                ke = [],
                Ce = function(t) {
                    for (; ke.length > 0;) ke.pop();
                    return T ? (lt = 0, ne.forEach((function(t) {
                        0 === lt ? ke[0] = t : 1 === lt && (ke[1] = t), lt++
                    }))) : t.type.indexOf("touch") > -1 ? t.touches && t.touches.length > 0 && (ke[0] = be(t.touches[0], xe), t.touches.length > 1 && (ke[1] = be(t.touches[1], Ee))) : (xe.x = t.pageX, xe.y = t.pageY, xe.id = "", ke[0] = xe), ke
                },
                Ae = function(t, e) {
                    var i, n, o, a, l = dt[t] + e[t],
                        c = e[t] > 0,
                        u = ue.x + e.x,
                        d = ue.x - oe.x;
                    return i = l > tt.min[t] || l < tt.max[t] ? s.panEndFriction : 1, l = dt[t] + e[t] * i, !s.allowPanToNext && g !== r.currItem.initialZoomLevel || (et ? "h" !== nt || "x" !== t || G || (c ? (l > tt.min[t] && (i = s.panEndFriction, tt.min[t] - l, n = tt.min[t] - ut[t]), (n <= 0 || d < 0) && He() > 1 ? (a = u, d < 0 && u > oe.x && (a = oe.x)) : tt.min.x !== tt.max.x && (o = l)) : (l < tt.max[t] && (i = s.panEndFriction, l - tt.max[t], n = ut[t] - tt.max[t]), (n <= 0 || d > 0) && He() > 1 ? (a = u, d > 0 && u < oe.x && (a = oe.x)) : tt.min.x !== tt.max.x && (o = l))) : a = u, "x" !== t) ? void(it || Z || g > r.currItem.fitRatio && (dt[t] += e[t] * i)) : (void 0 !== a && (qt(a, !0), Z = a !== oe.x), tt.min.x !== tt.max.x && (void 0 !== o ? dt.x = o : Z || (dt.x += e.x * i)), void 0 !== a)
                },
                Le = function(t) {
                    if (!("mousedown" === t.type && t.button > 0)) {
                        if (je) return void t.preventDefault();
                        if (!R || "mousedown" !== t.type) {
                            if (ye(t, !0) && t.preventDefault(), Ct("pointerDown"), T) {
                                var e = o.arraySearch(ne, t.pointerId, "id");
                                e < 0 && (e = ne.length), ne[e] = {
                                    x: t.pageX,
                                    y: t.pageY,
                                    id: t.pointerId
                                }
                            }
                            var i = Ce(t),
                                n = i.length;
                            K = null, Yt(), V && 1 !== n || (V = ot = !0, o.bind(window, p, r), B = at = rt = W = Z = X = U = G = !1, nt = null, Ct("firstTouchStart", i), Ft(ut, dt), ct.x = ct.y = 0, Ft(ee, i[0]), Ft(ie, ee), oe.x = mt.x * pt, re = [{
                                x: ee.x,
                                y: ee.y
                            }], N = j = At(), $t(g, !0), fe(), me()), !Q && n > 1 && !it && !Z && (v = g, G = !1, Q = U = !0, ct.y = ct.x = 0, Ft(ut, dt), Ft(Qt, i[0]), Ft(Jt, i[1]), we(Qt, Jt, he), de.x = Math.abs(he.x) - dt.x, de.y = Math.abs(he.y) - dt.y, J = pe(Qt, Jt))
                        }
                    }
                },
                Pe = function(t) {
                    if (t.preventDefault(), T) {
                        var e = o.arraySearch(ne, t.pointerId, "id");
                        if (e > -1) {
                            var i = ne[e];
                            i.x = t.pageX, i.y = t.pageY
                        }
                    }
                    if (V) {
                        var n = Ce(t);
                        if (nt || X || Q) K = n;
                        else if (ue.x !== mt.x * pt) nt = "h";
                        else {
                            var r = Math.abs(n[0].x - ee.x) - Math.abs(n[0].y - ee.y);
                            Math.abs(r) >= 10 && (nt = r > 0 ? "h" : "v", K = n)
                        }
                    }
                },
                Te = function() {
                    if (K) {
                        var t = K.length;
                        if (0 !== t)
                            if (Ft(Qt, K[0]), te.x = Qt.x - ee.x, te.y = Qt.y - ee.y, Q && t > 1) {
                                if (ee.x = Qt.x, ee.y = Qt.y, !te.x && !te.y && function(t, e) {
                                        return t.x === e.x && t.y === e.y
                                    }(K[1], Jt)) return;
                                Ft(Jt, K[1]), G || (G = !0, Ct("zoomGestureStarted"));
                                var e = pe(Qt, Jt),
                                    i = Fe(e);
                                i > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (at = !0);
                                var n = 1,
                                    o = jt(),
                                    a = Nt();
                                if (i < o)
                                    if (s.pinchToClose && !at && v <= r.currItem.initialZoomLevel) {
                                        var l = 1 - (o - i) / (o / 1.2);
                                        Lt(l), Ct("onPinchClose", l), rt = !0
                                    } else(n = (o - i) / o) > 1 && (n = 1), i = o - n * (o / 3);
                                else i > a && ((n = (i - a) / (6 * o)) > 1 && (n = 1), i = a + n * o);
                                n < 0 && (n = 0), e, we(Qt, Jt, le), ct.x += le.x - he.x, ct.y += le.y - he.y, Ft(he, le), dt.x = Dt("x", i), dt.y = Dt("y", i), B = i > g, g = i, Tt()
                            } else {
                                if (!nt) return;
                                if (ot && (ot = !1, Math.abs(te.x) >= 10 && (te.x -= K[0].x - ie.x), Math.abs(te.y) >= 10 && (te.y -= K[0].y - ie.y)), ee.x = Qt.x, ee.y = Qt.y, 0 === te.x && 0 === te.y) return;
                                if ("v" === nt && s.closeOnVerticalDrag && "fit" === s.scaleMode && g === r.currItem.initialZoomLevel) {
                                    ct.y += te.y, dt.y += te.y;
                                    var c = Se();
                                    return W = !0, Ct("onVerticalDrag", c), Lt(c), void Tt()
                                }(function(t, e, i) {
                                    if (t - N > 50) {
                                        var n = re.length > 2 ? re.shift() : {};
                                        n.x = e, n.y = i, re.push(n), N = t
                                    }
                                })(At(), Qt.x, Qt.y), X = !0, tt = r.currItem.bounds, Ae("x", te) || (Ae("y", te), Ot(dt), Tt())
                            }
                    }
                },
                _e = function(t) {
                    if (z.isOldAndroid) {
                        if (R && "mouseup" === t.type) return;
                        t.type.indexOf("touch") > -1 && (clearTimeout(R), R = setTimeout((function() {
                            R = 0
                        }), 600))
                    }
                    var e;
                    if (Ct("pointerUp"), ye(t, !1) && t.preventDefault(), T) {
                        var i = o.arraySearch(ne, t.pointerId, "id");
                        if (i > -1)
                            if (e = ne.splice(i, 1)[0], navigator.msPointerEnabled) {
                                e.type = {
                                    4: "mouse",
                                    2: "touch",
                                    3: "pen"
                                } [t.pointerType], e.type || (e.type = t.pointerType || "mouse")
                            } else e.type = t.pointerType || "mouse"
                    }
                    var n, a = Ce(t),
                        l = a.length;
                    if ("mouseup" === t.type && (l = 0), 2 === l) return K = null, !0;
                    1 === l && Ft(ie, a[0]), 0 !== l || nt || it || (e || ("mouseup" === t.type ? e = {
                        x: t.pageX,
                        y: t.pageY,
                        type: "mouse"
                    } : t.changedTouches && t.changedTouches[0] && (e = {
                        x: t.changedTouches[0].pageX,
                        y: t.changedTouches[0].pageY,
                        type: "touch"
                    })), Ct("touchRelease", t, e));
                    var c = -1;
                    if (0 === l && (V = !1, o.unbind(window, p, r), fe(), Q ? c = 0 : -1 !== ce && (c = At() - ce)), ce = 1 === l ? At() : -1, n = -1 !== c && c < 150 ? "zoom" : "swipe", Q && l < 2 && (Q = !1, 1 === l && (n = "zoomPointerUp"), Ct("zoomGestureEnded")), K = null, X || G || it || W)
                        if (Yt(), H || (H = Ie()), H.calculateSwipeSpeed("x"), W) {
                            if (Se() < s.verticalDragRange) r.close();
                            else {
                                var u = dt.y,
                                    d = st;
                                Zt("verticalDrag", 0, 1, 300, o.easing.cubic.out, (function(t) {
                                    dt.y = (r.currItem.initialPosition.y - u) * t + u, Lt((1 - d) * t + d), Tt()
                                })), Ct("onVerticalDrag", 1)
                            }
                        } else {
                            if ((Z || it) && 0 === l) {
                                if (De(n, H)) return;
                                n = "zoomPointerUp"
                            }
                            if (!it) return "swipe" !== n ? void Oe() : void(!Z && g > r.currItem.fitRatio && qe(H))
                        }
                },
                Ie = function() {
                    var t, e, i = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function(n) {
                            re.length > 1 ? (t = At() - N + 50, e = re[re.length - 2][n]) : (t = At() - j, e = ie[n]), i.lastFlickOffset[n] = ee[n] - e, i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n]), i.lastFlickDist[n] > 20 ? i.lastFlickSpeed[n] = i.lastFlickOffset[n] / t : i.lastFlickSpeed[n] = 0, Math.abs(i.lastFlickSpeed[n]) < .1 && (i.lastFlickSpeed[n] = 0), i.slowDownRatio[n] = .95, i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n], i.speedDecelerationRatio[n] = 1
                        },
                        calculateOverBoundsAnimOffset: function(t, e) {
                            i.backAnimStarted[t] || (dt[t] > tt.min[t] ? i.backAnimDestination[t] = tt.min[t] : dt[t] < tt.max[t] && (i.backAnimDestination[t] = tt.max[t]), void 0 !== i.backAnimDestination[t] && (i.slowDownRatio[t] = .7, i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t], i.speedDecelerationRatioAbs[t] < .05 && (i.lastFlickSpeed[t] = 0, i.backAnimStarted[t] = !0, Zt("bounceZoomPan" + t, dt[t], i.backAnimDestination[t], e || 300, o.easing.sine.out, (function(e) {
                                dt[t] = e, Tt()
                            })))))
                        },
                        calculateAnimOffset: function(t) {
                            i.backAnimStarted[t] || (i.speedDecelerationRatio[t] = i.speedDecelerationRatio[t] * (i.slowDownRatio[t] + i.slowDownRatioReverse[t] - i.slowDownRatioReverse[t] * i.timeDiff / 10), i.speedDecelerationRatioAbs[t] = Math.abs(i.lastFlickSpeed[t] * i.speedDecelerationRatio[t]), i.distanceOffset[t] = i.lastFlickSpeed[t] * i.speedDecelerationRatio[t] * i.timeDiff, dt[t] += i.distanceOffset[t])
                        },
                        panAnimLoop: function() {
                            if (Vt.zoomPan && (Vt.zoomPan.raf = I(i.panAnimLoop), i.now = At(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), Tt(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05)) return dt.x = Math.round(dt.x), dt.y = Math.round(dt.y), Tt(), void Gt("zoomPan")
                        }
                    };
                    return i
                },
                qe = function(t) {
                    return t.calculateSwipeSpeed("y"), tt = r.currItem.bounds, t.backAnimDestination = {}, t.backAnimStarted = {}, Math.abs(t.lastFlickSpeed.x) <= .05 && Math.abs(t.lastFlickSpeed.y) <= .05 ? (t.speedDecelerationRatioAbs.x = t.speedDecelerationRatioAbs.y = 0, t.calculateOverBoundsAnimOffset("x"), t.calculateOverBoundsAnimOffset("y"), !0) : (Xt("zoomPan"), t.lastNow = At(), void t.panAnimLoop())
                },
                De = function(t, e) {
                    var i, n, a;
                    if (it || (ae = u), "swipe" === t) {
                        var l = ee.x - ie.x,
                            c = e.lastFlickDist.x < 10;
                        l > 30 && (c || e.lastFlickOffset.x > 20) ? n = -1 : l < -30 && (c || e.lastFlickOffset.x < -20) && (n = 1)
                    }
                    n && ((u += n) < 0 ? (u = s.loop ? He() - 1 : 0, a = !0) : u >= He() && (u = s.loop ? 0 : He() - 1, a = !0), a && !s.loop || (gt += n, pt -= n, i = !0));
                    var d, h = mt.x * pt,
                        p = Math.abs(h - ue.x);
                    return i || h > ue.x == e.lastFlickSpeed.x > 0 ? (d = Math.abs(e.lastFlickSpeed.x) > 0 ? p / Math.abs(e.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, ae === u && (i = !1), it = !0, Ct("mainScrollAnimStart"), Zt("mainScroll", ue.x, h, d, o.easing.cubic.out, qt, (function() {
                        Yt(), it = !1, ae = -1, (i || ae !== u) && r.updateCurrItem(), Ct("mainScrollAnimComplete")
                    })), i && r.updateCurrItem(!0), i
                },
                Fe = function(t) {
                    return 1 / J * t * v
                },
                Oe = function() {
                    var t = g,
                        e = jt(),
                        i = Nt();
                    g < e ? t = e : g > i && (t = i);
                    var n, s = st;
                    return rt && !B && !at && g < e ? (r.close(), !0) : (rt && (n = function(t) {
                        Lt((1 - s) * t + s)
                    }), r.zoomTo(t, 0, 200, o.easing.cubic.out, n), !0)
                };
            St("Gestures", {
                publicMethods: {
                    initGestures: function() {
                        var t = function(t, e, i, n, o) {
                            k = t + e, C = t + i, A = t + n, L = o ? t + o : ""
                        };
                        (T = z.pointerEvent) && z.touch && (z.touch = !1), T ? navigator.msPointerEnabled ? t("MSPointer", "Down", "Move", "Up", "Cancel") : t("pointer", "down", "move", "up", "cancel") : z.touch ? (t("touch", "start", "move", "end", "cancel"), _ = !0) : t("mouse", "down", "move", "up"), p = C + " " + A + " " + L, f = k, T && !_ && (_ = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = _, m[k] = Le, m[C] = Pe, m[A] = _e, L && (m[L] = m[A]), z.touch && (f += " mousedown", p += " mousemove mouseup", m.mousedown = m[k], m.mousemove = m[C], m.mouseup = m[A]), _ || (s.allowPanToNext = !1)
                    }
                }
            });
            var Me, ze, $e, je, Ne, He, Be = function(e, i, n, a) {
                    var l;
                    Me && clearTimeout(Me), je = !0, $e = !0, e.initialLayout ? (l = e.initialLayout, e.initialLayout = null) : l = s.getThumbBoundsFn && s.getThumbBoundsFn(u);
                    var d = n ? s.hideAnimationDuration : s.showAnimationDuration,
                        h = function() {
                            Gt("initialZoom"), n ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (Lt(1), i && (i.style.display = "block"), o.addClass(t, "pswp--animated-in"), Ct("initialZoom" + (n ? "OutEnd" : "InEnd"))), a && a(), je = !1
                        };
                    if (!d || !l || void 0 === l.x) return Ct("initialZoom" + (n ? "Out" : "In")), g = e.initialZoomLevel, Ft(dt, e.initialPosition), Tt(), t.style.opacity = n ? 0 : 1, Lt(1), void(d ? setTimeout((function() {
                        h()
                    }), d) : h());
                    ! function() {
                        var i = c,
                            a = !r.currItem.src || r.currItem.loadError || s.showHideOpacity;
                        e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = "hidden"), n || (g = l.w / e.w, dt.x = l.x, dt.y = l.y - F, r[a ? "template" : "bg"].style.opacity = .001, Tt()), Xt("initialZoom"), n && !i && o.removeClass(t, "pswp--animated-in"), a && (n ? o[(i ? "remove" : "add") + "Class"](t, "pswp--animate_opacity") : setTimeout((function() {
                            o.addClass(t, "pswp--animate_opacity")
                        }), 30)), Me = setTimeout((function() {
                            if (Ct("initialZoom" + (n ? "Out" : "In")), n) {
                                var r = l.w / e.w,
                                    s = {
                                        x: dt.x,
                                        y: dt.y
                                    },
                                    c = g,
                                    u = st,
                                    p = function(e) {
                                        1 === e ? (g = r, dt.x = l.x, dt.y = l.y - M) : (g = (r - c) * e + c, dt.x = (l.x - s.x) * e + s.x, dt.y = (l.y - M - s.y) * e + s.y), Tt(), a ? t.style.opacity = 1 - e : Lt(u - e * u)
                                    };
                                i ? Zt("initialZoom", 0, 1, d, o.easing.cubic.out, p, h) : (p(1), Me = setTimeout(h, d + 20))
                            } else g = e.initialZoomLevel, Ft(dt, e.initialPosition), Tt(), Lt(1), a ? t.style.opacity = 1 : Lt(1), Me = setTimeout(h, d + 20)
                        }), n ? 25 : 90)
                    }()
                },
                We = {},
                Re = [],
                Ve = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [1, 1],
                    getNumItemsFn: function() {
                        return ze.length
                    }
                },
                Ue = function(t, e, i) {
                    if (t.src && !t.loadError) {
                        var n = !i;
                        if (n && (t.vGap || (t.vGap = {
                                top: 0,
                                bottom: 0
                            }), Ct("parseVerticalMargin", t)), We.x = e.x, We.y = e.y - t.vGap.top - t.vGap.bottom, n) {
                            var o = We.x / t.w,
                                r = We.y / t.h;
                            t.fitRatio = o < r ? o : r;
                            var a = s.scaleMode;
                            "orig" === a ? i = 1 : "fit" === a && (i = t.fitRatio), i > 1 && (i = 1), t.initialZoomLevel = i, t.bounds || (t.bounds = {
                                center: {
                                    x: 0,
                                    y: 0
                                },
                                max: {
                                    x: 0,
                                    y: 0
                                },
                                min: {
                                    x: 0,
                                    y: 0
                                }
                            })
                        }
                        if (!i) return;
                        return function(t, e, i) {
                            var n = t.bounds;
                            n.center.x = Math.round((We.x - e) / 2), n.center.y = Math.round((We.y - i) / 2) + t.vGap.top, n.max.x = e > We.x ? Math.round(We.x - e) : n.center.x, n.max.y = i > We.y ? Math.round(We.y - i) + t.vGap.top : n.center.y, n.min.x = e > We.x ? 0 : n.center.x, n.min.y = i > We.y ? t.vGap.top : n.center.y
                        }(t, t.w * i, t.h * i), n && i === t.initialZoomLevel && (t.initialPosition = t.bounds.center), t.bounds
                    }
                    return t.w = t.h = 0, t.initialZoomLevel = t.fitRatio = 1, t.bounds = {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    }, t.initialPosition = t.bounds.center, t.bounds
                },
                Ge = function(t, e, i, n, o, s) {
                    e.loadError || n && (e.imageAppended = !0, Ze(e, n, e === r.currItem && wt), i.appendChild(n), s && setTimeout((function() {
                        e && e.loaded && e.placeholder && (e.placeholder.style.display = "none", e.placeholder = null)
                    }), 500))
                },
                Xe = function(t) {
                    t.loading = !0, t.loaded = !1;
                    var e = t.img = o.createEl("pswp__img", "img"),
                        i = function() {
                            t.loading = !1, t.loaded = !0, t.loadComplete ? t.loadComplete(t) : t.img = null, e.onload = e.onerror = null, e = null
                        };
                    return e.onload = i, e.onerror = function() {
                        t.loadError = !0, i()
                    }, e.src = t.src, e
                },
                Ye = function(t, e) {
                    if (t.src && t.loadError && t.container) return e && (t.container.innerHTML = ""), t.container.innerHTML = s.errorMsg.replace("%url%", t.src), !0
                },
                Ze = function(t, e, i) {
                    if (t.src) {
                        e || (e = t.container.lastChild);
                        var n = i ? t.w : Math.round(t.w * t.fitRatio),
                            o = i ? t.h : Math.round(t.h * t.fitRatio);
                        t.placeholder && !t.loaded && (t.placeholder.style.width = n + "px", t.placeholder.style.height = o + "px"), e.style.width = n + "px", e.style.height = o + "px"
                    }
                },
                Ke = function() {
                    if (Re.length) {
                        for (var t, e = 0; e < Re.length; e++)(t = Re[e]).holder.index === t.index && Ge(t.index, t.item, t.baseDiv, t.img, 0, t.clearPlaceholder);
                        Re = []
                    }
                };
            St("Controller", {
                publicMethods: {
                    lazyLoadItem: function(t) {
                        t = xt(t);
                        var e = Ne(t);
                        e && (!e.loaded && !e.loading || S) && (Ct("gettingData", t, e), e.src && Xe(e))
                    },
                    initController: function() {
                        o.extend(s, Ve, !0), r.items = ze = i, Ne = r.getItemAt, He = s.getNumItemsFn, s.loop, He() < 3 && (s.loop = !1), kt("beforeChange", (function(t) {
                            var e, i = s.preload,
                                n = null === t || t >= 0,
                                o = Math.min(i[0], He()),
                                a = Math.min(i[1], He());
                            for (e = 1; e <= (n ? a : o); e++) r.lazyLoadItem(u + e);
                            for (e = 1; e <= (n ? o : a); e++) r.lazyLoadItem(u - e)
                        })), kt("initialLayout", (function() {
                            r.currItem.initialLayout = s.getThumbBoundsFn && s.getThumbBoundsFn(u)
                        })), kt("mainScrollAnimComplete", Ke), kt("initialZoomInEnd", Ke), kt("destroy", (function() {
                            for (var t, e = 0; e < ze.length; e++)(t = ze[e]).container && (t.container = null), t.placeholder && (t.placeholder = null), t.img && (t.img = null), t.preloader && (t.preloader = null), t.loadError && (t.loaded = t.loadError = !1);
                            Re = null
                        }))
                    },
                    getItemAt: function(t) {
                        return t >= 0 && void 0 !== ze[t] && ze[t]
                    },
                    allowProgressiveImg: function() {
                        return s.forceProgressiveLoading || !_ || s.mouseUsed || screen.width > 1200
                    },
                    setContent: function(t, e) {
                        s.loop && (e = xt(e));
                        var i = r.getItemAt(t.index);
                        i && (i.container = null);
                        var n, l = r.getItemAt(e);
                        if (l) {
                            Ct("gettingData", e, l), t.index = e, t.item = l;
                            var c = l.container = o.createEl("pswp__zoom-wrap");
                            if (!l.src && l.html && (l.html.tagName ? c.appendChild(l.html) : c.innerHTML = l.html), Ye(l), Ue(l, ht), !l.src || l.loadError || l.loaded) l.src && !l.loadError && ((n = o.createEl("pswp__img", "img")).style.opacity = 1, n.src = l.src, Ze(l, n), Ge(0, l, c, n));
                            else {
                                if (l.loadComplete = function(i) {
                                        if (a) {
                                            if (t && t.index === e) {
                                                if (Ye(i, !0)) return i.loadComplete = i.img = null, Ue(i, ht), _t(i), void(t.index === u && r.updateCurrZoomItem());
                                                i.imageAppended ? !je && i.placeholder && (i.placeholder.style.display = "none", i.placeholder = null) : z.transform && (it || je) ? Re.push({
                                                    item: i,
                                                    baseDiv: c,
                                                    img: i.img,
                                                    index: e,
                                                    holder: t,
                                                    clearPlaceholder: !0
                                                }) : Ge(0, i, c, i.img, 0, !0)
                                            }
                                            i.loadComplete = null, i.img = null, Ct("imageLoadComplete", e, i)
                                        }
                                    }, o.features.transform) {
                                    var d = "pswp__img pswp__img--placeholder";
                                    d += l.msrc ? "" : " pswp__img--placeholder--blank";
                                    var h = o.createEl(d, l.msrc ? "img" : "");
                                    l.msrc && (h.src = l.msrc), Ze(l, h), c.appendChild(h), l.placeholder = h
                                }
                                l.loading || Xe(l), r.allowProgressiveImg() && (!$e && z.transform ? Re.push({
                                    item: l,
                                    baseDiv: c,
                                    img: l.img,
                                    index: e,
                                    holder: t
                                }) : Ge(0, l, c, l.img, 0, !0))
                            }
                            $e || e !== u ? _t(l) : (et = c.style, Be(l, n || l.img)), t.el.innerHTML = "", t.el.appendChild(c)
                        } else t.el.innerHTML = ""
                    },
                    cleanSlide: function(t) {
                        t.img && (t.img.onload = t.img.onerror = null), t.loaded = t.loading = t.img = t.imageAppended = !1
                    }
                }
            });
            var Qe, Je, ti = {},
                ei = function(t, e, i) {
                    var n = document.createEvent("CustomEvent"),
                        o = {
                            origEvent: t,
                            target: t.target,
                            releasePoint: e,
                            pointerType: i || "touch"
                        };
                    n.initCustomEvent("pswpTap", !0, !0, o), t.target.dispatchEvent(n)
                };
            St("Tap", {
                publicMethods: {
                    initTap: function() {
                        kt("firstTouchStart", r.onTapStart), kt("touchRelease", r.onTapRelease), kt("destroy", (function() {
                            ti = {}, Qe = null
                        }))
                    },
                    onTapStart: function(t) {
                        t.length > 1 && (clearTimeout(Qe), Qe = null)
                    },
                    onTapRelease: function(t, e) {
                        if (e && !X && !U && !Ut) {
                            var i = e;
                            if (Qe && (clearTimeout(Qe), Qe = null, function(t, e) {
                                    return Math.abs(t.x - e.x) < 25 && Math.abs(t.y - e.y) < 25
                                }(i, ti))) return void Ct("doubleTap", i);
                            if ("mouse" === e.type) return void ei(t, e, "mouse");
                            if ("BUTTON" === t.target.tagName.toUpperCase() || o.hasClass(t.target, "pswp__single-tap")) return void ei(t, e);
                            Ft(ti, i), Qe = setTimeout((function() {
                                ei(t, e), Qe = null
                            }), 300)
                        }
                    }
                }
            }), St("DesktopZoom", {
                publicMethods: {
                    initDesktopZoom: function() {
                        O || (_ ? kt("mouseUsed", (function() {
                            r.setupDesktopZoom()
                        })) : r.setupDesktopZoom(!0))
                    },
                    setupDesktopZoom: function(e) {
                        Je = {};
                        var i = "wheel mousewheel DOMMouseScroll";
                        kt("bindEvents", (function() {
                            o.bind(t, i, r.handleMouseWheel)
                        })), kt("unbindEvents", (function() {
                            Je && o.unbind(t, i, r.handleMouseWheel)
                        })), r.mouseZoomedIn = !1;
                        var n, s = function() {
                                r.mouseZoomedIn && (o.removeClass(t, "pswp--zoomed-in"), r.mouseZoomedIn = !1), g < 1 ? o.addClass(t, "pswp--zoom-allowed") : o.removeClass(t, "pswp--zoom-allowed"), a()
                            },
                            a = function() {
                                n && (o.removeClass(t, "pswp--dragging"), n = !1)
                            };
                        kt("resize", s), kt("afterChange", s), kt("pointerDown", (function() {
                            r.mouseZoomedIn && (n = !0, o.addClass(t, "pswp--dragging"))
                        })), kt("pointerUp", a), e || s()
                    },
                    handleMouseWheel: function(t) {
                        if (g <= r.currItem.fitRatio) return s.modal && (!s.closeOnScroll || Ut || V ? t.preventDefault() : P && Math.abs(t.deltaY) > 2 && (c = !0, r.close())), !0;
                        if (t.stopPropagation(), Je.x = 0, "deltaX" in t) 1 === t.deltaMode ? (Je.x = 18 * t.deltaX, Je.y = 18 * t.deltaY) : (Je.x = t.deltaX, Je.y = t.deltaY);
                        else if ("wheelDelta" in t) t.wheelDeltaX && (Je.x = -.16 * t.wheelDeltaX), t.wheelDeltaY ? Je.y = -.16 * t.wheelDeltaY : Je.y = -.16 * t.wheelDelta;
                        else {
                            if (!("detail" in t)) return;
                            Je.y = t.detail
                        }
                        $t(g, !0);
                        var e = dt.x - Je.x,
                            i = dt.y - Je.y;
                        (s.modal || e <= tt.min.x && e >= tt.max.x && i <= tt.min.y && i >= tt.max.y) && t.preventDefault(), r.panTo(e, i)
                    },
                    toggleDesktopZoom: function(e) {
                        e = e || {
                            x: ht.x / 2 + ft.x,
                            y: ht.y / 2 + ft.y
                        };
                        var i = s.getDoubleTapZoom(!0, r.currItem),
                            n = g === i;
                        r.mouseZoomedIn = !n, r.zoomTo(n ? r.currItem.initialZoomLevel : i, e, 333), o[(n ? "remove" : "add") + "Class"](t, "pswp--zoomed-in")
                    }
                }
            });
            var ii, ni, oi, ri, si, ai, li, ci, ui, di, hi, pi, fi = {
                    history: !0,
                    galleryUID: 1
                },
                mi = function() {
                    return hi.hash.substring(1)
                },
                gi = function() {
                    ii && clearTimeout(ii), oi && clearTimeout(oi)
                },
                vi = function() {
                    var t = mi(),
                        e = {};
                    if (t.length < 5) return e;
                    var i, n = t.split("&");
                    for (i = 0; i < n.length; i++)
                        if (n[i]) {
                            var o = n[i].split("=");
                            o.length < 2 || (e[o[0]] = o[1])
                        } if (s.galleryPIDs) {
                        var r = e.pid;
                        for (e.pid = 0, i = 0; i < ze.length; i++)
                            if (ze[i].pid === r) {
                                e.pid = i;
                                break
                            }
                    } else e.pid = parseInt(e.pid, 10) - 1;
                    return e.pid < 0 && (e.pid = 0), e
                },
                yi = function() {
                    if (oi && clearTimeout(oi), Ut || V) oi = setTimeout(yi, 500);
                    else {
                        ri ? clearTimeout(ni) : ri = !0;
                        var t = u + 1,
                            e = Ne(u);
                        e.hasOwnProperty("pid") && (t = e.pid);
                        var i = li + "&gid=" + s.galleryUID + "&pid=" + t;
                        ci || -1 === hi.hash.indexOf(i) && (di = !0);
                        var n = hi.href.split("#")[0] + "#" + i;
                        pi ? "#" + i !== window.location.hash && history[ci ? "replaceState" : "pushState"]("", document.title, n) : ci ? hi.replace(n) : hi.hash = i, ci = !0, ni = setTimeout((function() {
                            ri = !1
                        }), 60)
                    }
                };
            St("History", {
                publicMethods: {
                    initHistory: function() {
                        if (o.extend(s, fi, !0), s.history) {
                            hi = window.location, di = !1, ui = !1, ci = !1, li = mi(), pi = "pushState" in history, li.indexOf("gid=") > -1 && (li = (li = li.split("&gid=")[0]).split("?gid=")[0]), kt("afterChange", r.updateURL), kt("unbindEvents", (function() {
                                o.unbind(window, "hashchange", r.onHashChange)
                            }));
                            var t = function() {
                                ai = !0, ui || (di ? history.back() : li ? hi.hash = li : pi ? history.pushState("", document.title, hi.pathname + hi.search) : hi.hash = ""), gi()
                            };
                            kt("unbindEvents", (function() {
                                c && t()
                            })), kt("destroy", (function() {
                                ai || t()
                            })), kt("firstUpdate", (function() {
                                u = vi().pid
                            }));
                            var e = li.indexOf("pid=");
                            e > -1 && ("&" === (li = li.substring(0, e)).slice(-1) && (li = li.slice(0, -1))), setTimeout((function() {
                                a && o.bind(window, "hashchange", r.onHashChange)
                            }), 40)
                        }
                    },
                    onHashChange: function() {
                        return mi() === li ? (ui = !0, void r.close()) : void(ri || (si = !0, r.goTo(vi().pid), si = !1))
                    },
                    updateURL: function() {
                        gi(), si || (ci ? ii = setTimeout(yi, 800) : yi())
                    }
                }
            }), o.extend(r, Kt)
        }
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipeUI_Default = e()
    }(this, (function() {
        "use strict";
        return function(t, e) {
            var i, n, o, r, s, a, l, c, u, d, h, p, f, m, g, v, y, b, w = this,
                S = !1,
                x = !0,
                E = !0,
                k = {
                    barsSize: {
                        top: 44,
                        bottom: "auto"
                    },
                    closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                    timeToIdle: 4e3,
                    timeToIdleOutside: 1e3,
                    loadingIndicatorDelay: 1e3,
                    addCaptionHTMLFn: function(t, e) {
                        return t.title ? (e.children[0].innerHTML = t.title, !0) : (e.children[0].innerHTML = "", !1)
                    },
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !0,
                    zoomEl: !0,
                    shareEl: !0,
                    counterEl: !0,
                    arrowEl: !0,
                    preloaderEl: !0,
                    tapToClose: !1,
                    tapToToggleControls: !0,
                    clickToCloseNonZoomable: !0,
                    shareButtons: [{
                        id: "facebook",
                        label: "Share on Facebook",
                        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                    }, {
                        id: "twitter",
                        label: "Tweet",
                        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                    }, {
                        id: "pinterest",
                        label: "Pin it",
                        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                    }, {
                        id: "download",
                        label: "Download image",
                        url: "{{raw_image_url}}",
                        download: !0
                    }],
                    getImageURLForShare: function() {
                        return t.currItem.src || ""
                    },
                    getPageURLForShare: function() {
                        return window.location.href
                    },
                    getTextForShare: function() {
                        return t.currItem.title || ""
                    },
                    indexIndicatorSep: " / ",
                    fitControlsWidth: 1200
                },
                C = function(t) {
                    if (v) return !0;
                    t = t || window.event, g.timeToIdle && g.mouseUsed && !u && O();
                    for (var i, n, o = (t.target || t.srcElement).getAttribute("class") || "", r = 0; r < j.length; r++)(i = j[r]).onTap && o.indexOf("pswp__" + i.name) > -1 && (i.onTap(), n = !0);
                    if (n) {
                        t.stopPropagation && t.stopPropagation(), v = !0;
                        var s = e.features.isOldAndroid ? 600 : 30;
                        setTimeout((function() {
                            v = !1
                        }), s)
                    }
                },
                A = function() {
                    return !t.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth
                },
                L = function(t, i, n) {
                    e[(n ? "add" : "remove") + "Class"](t, "pswp__" + i)
                },
                P = function() {
                    var t = 1 === g.getNumItemsFn();
                    t !== m && (L(n, "ui--one-slide", t), m = t)
                },
                T = function() {
                    L(l, "share-modal--hidden", E)
                },
                _ = function() {
                    return (E = !E) ? (e.removeClass(l, "pswp__share-modal--fade-in"), setTimeout((function() {
                        E && T()
                    }), 300)) : (T(), setTimeout((function() {
                        E || e.addClass(l, "pswp__share-modal--fade-in")
                    }), 30)), E || q(), !1
                },
                I = function(e) {
                    var i = (e = e || window.event).target || e.srcElement;
                    return t.shout("shareLinkClick", e, i), !(!i.href || !i.hasAttribute("download") && (window.open(i.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), E || _(), 1))
                },
                q = function() {
                    for (var t, e, i, n, o = "", r = 0; r < g.shareButtons.length; r++) t = g.shareButtons[r], e = g.getImageURLForShare(t), i = g.getPageURLForShare(t), n = g.getTextForShare(t), o += '<a href="' + t.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(e)).replace("{{raw_image_url}}", e).replace("{{text}}", encodeURIComponent(n)) + '" target="_blank" class="pswp__share--' + t.id + '"' + (t.download ? "download" : "") + ">" + t.label + "</a>", g.parseShareButtonOut && (o = g.parseShareButtonOut(t, o));
                    l.children[0].innerHTML = o, l.children[0].onclick = I
                },
                D = function(t) {
                    for (var i = 0; i < g.closeElClasses.length; i++)
                        if (e.hasClass(t, "pswp__" + g.closeElClasses[i])) return !0
                },
                F = 0,
                O = function() {
                    clearTimeout(b), F = 0, u && w.setIdle(!1)
                },
                M = function(t) {
                    var e = (t = t || window.event).relatedTarget || t.toElement;
                    e && "HTML" !== e.nodeName || (clearTimeout(b), b = setTimeout((function() {
                        w.setIdle(!0)
                    }), g.timeToIdleOutside))
                },
                z = function(t) {
                    p !== t && (L(h, "preloader--active", !t), p = t)
                },
                $ = function(t) {
                    var i = t.vGap;
                    if (A()) {
                        var s = g.barsSize;
                        if (g.captionEl && "auto" === s.bottom)
                            if (r || ((r = e.createEl("pswp__caption pswp__caption--fake")).appendChild(e.createEl("pswp__caption__center")), n.insertBefore(r, o), e.addClass(n, "pswp__ui--fit")), g.addCaptionHTMLFn(t, r, !0)) {
                                var a = r.clientHeight;
                                i.bottom = parseInt(a, 10) || 44
                            } else i.bottom = s.top;
                        else i.bottom = "auto" === s.bottom ? 0 : s.bottom;
                        i.top = s.top
                    } else i.top = i.bottom = 0
                },
                j = [{
                    name: "caption",
                    option: "captionEl",
                    onInit: function(t) {
                        o = t
                    }
                }, {
                    name: "share-modal",
                    option: "shareEl",
                    onInit: function(t) {
                        l = t
                    },
                    onTap: function() {
                        _()
                    }
                }, {
                    name: "button--share",
                    option: "shareEl",
                    onInit: function(t) {
                        a = t
                    },
                    onTap: function() {
                        _()
                    }
                }, {
                    name: "button--zoom",
                    option: "zoomEl",
                    onTap: t.toggleDesktopZoom
                }, {
                    name: "counter",
                    option: "counterEl",
                    onInit: function(t) {
                        s = t
                    }
                }, {
                    name: "button--close",
                    option: "closeEl",
                    onTap: t.close
                }, {
                    name: "button--arrow--left",
                    option: "arrowEl",
                    onTap: t.prev
                }, {
                    name: "button--arrow--right",
                    option: "arrowEl",
                    onTap: t.next
                }, {
                    name: "button--fs",
                    option: "fullscreenEl",
                    onTap: function() {
                        i.isFullscreen() ? i.exit() : i.enter()
                    }
                }, {
                    name: "preloader",
                    option: "preloaderEl",
                    onInit: function(t) {
                        h = t
                    }
                }];
            w.init = function() {
                e.extend(t.options, k, !0), g = t.options, n = e.getChildByClass(t.scrollWrap, "pswp__ui"), d = t.listen,
                    function() {
                        var t;
                        d("onVerticalDrag", (function(t) {
                            x && t < .95 ? w.hideControls() : !x && t >= .95 && w.showControls()
                        })), d("onPinchClose", (function(e) {
                            x && e < .9 ? (w.hideControls(), t = !0) : t && !x && e > .9 && w.showControls()
                        })), d("zoomGestureEnded", (function() {
                            (t = !1) && !x && w.showControls()
                        }))
                    }(), d("beforeChange", w.update), d("doubleTap", (function(e) {
                        var i = t.currItem.initialZoomLevel;
                        t.getZoomLevel() !== i ? t.zoomTo(i, e, 333) : t.zoomTo(g.getDoubleTapZoom(!1, t.currItem), e, 333)
                    })), d("preventDragEvent", (function(t, e, i) {
                        var n = t.target || t.srcElement;
                        n && n.getAttribute("class") && t.type.indexOf("mouse") > -1 && (n.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(n.tagName)) && (i.prevent = !1)
                    })), d("bindEvents", (function() {
                        e.bind(n, "pswpTap click", C), e.bind(t.scrollWrap, "pswpTap", w.onGlobalTap), t.likelyTouchDevice || e.bind(t.scrollWrap, "mouseover", w.onMouseOver)
                    })), d("unbindEvents", (function() {
                        E || _(), y && clearInterval(y), e.unbind(document, "mouseout", M), e.unbind(document, "mousemove", O), e.unbind(n, "pswpTap click", C), e.unbind(t.scrollWrap, "pswpTap", w.onGlobalTap), e.unbind(t.scrollWrap, "mouseover", w.onMouseOver), i && (e.unbind(document, i.eventK, w.updateFullscreen), i.isFullscreen() && (g.hideAnimationDuration = 0, i.exit()), i = null)
                    })), d("destroy", (function() {
                        g.captionEl && (r && n.removeChild(r), e.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), e.removeClass(n, "pswp__ui--over-close"), e.addClass(n, "pswp__ui--hidden"), w.setIdle(!1)
                    })), g.showAnimationDuration || e.removeClass(n, "pswp__ui--hidden"), d("initialZoomIn", (function() {
                        g.showAnimationDuration && e.removeClass(n, "pswp__ui--hidden")
                    })), d("initialZoomOut", (function() {
                        e.addClass(n, "pswp__ui--hidden")
                    })), d("parseVerticalMargin", $),
                    function() {
                        var t, i, o, r = function(n) {
                            if (n)
                                for (var r = n.length, s = 0; s < r; s++) {
                                    t = n[s], i = t.className;
                                    for (var a = 0; a < j.length; a++) o = j[a], i.indexOf("pswp__" + o.name) > -1 && (g[o.option] ? (e.removeClass(t, "pswp__element--disabled"), o.onInit && o.onInit(t)) : e.addClass(t, "pswp__element--disabled"))
                                }
                        };
                        r(n.children);
                        var s = e.getChildByClass(n, "pswp__top-bar");
                        s && r(s.children)
                    }(), g.shareEl && a && l && (E = !0), P(), g.timeToIdle && d("mouseUsed", (function() {
                        e.bind(document, "mousemove", O), e.bind(document, "mouseout", M), y = setInterval((function() {
                            2 == ++F && w.setIdle(!0)
                        }), g.timeToIdle / 2)
                    })), g.fullscreenEl && !e.features.isOldAndroid && (i || (i = w.getFullscreenAPI()), i ? (e.bind(document, i.eventK, w.updateFullscreen), w.updateFullscreen(), e.addClass(t.template, "pswp--supports-fs")) : e.removeClass(t.template, "pswp--supports-fs")), g.preloaderEl && (z(!0), d("beforeChange", (function() {
                        clearTimeout(f), f = setTimeout((function() {
                            t.currItem && t.currItem.loading ? (!t.allowProgressiveImg() || t.currItem.img && !t.currItem.img.naturalWidth) && z(!1) : z(!0)
                        }), g.loadingIndicatorDelay)
                    })), d("imageLoadComplete", (function(e, i) {
                        t.currItem === i && z(!0)
                    })))
            }, w.setIdle = function(t) {
                u = t, L(n, "ui--idle", t)
            }, w.update = function() {
                x && t.currItem ? (w.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(t.currItem, o), L(o, "caption--empty", !t.currItem.title)), S = !0) : S = !1, E || _(), P()
            }, w.updateFullscreen = function(n) {
                n && setTimeout((function() {
                    t.setScrollOffset(0, e.getScrollY())
                }), 50), e[(i.isFullscreen() ? "add" : "remove") + "Class"](t.template, "pswp--fs")
            }, w.updateIndexIndicator = function() {
                g.counterEl && (s.innerHTML = t.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
            }, w.onGlobalTap = function(i) {
                var n = (i = i || window.event).target || i.srcElement;
                if (!v)
                    if (i.detail && "mouse" === i.detail.pointerType) {
                        if (D(n)) return void t.close();
                        e.hasClass(n, "pswp__img") && (1 === t.getZoomLevel() && t.getZoomLevel() <= t.currItem.fitRatio ? g.clickToCloseNonZoomable && t.close() : t.toggleDesktopZoom(i.detail.releasePoint))
                    } else if (g.tapToToggleControls && (x ? w.hideControls() : w.showControls()), g.tapToClose && (e.hasClass(n, "pswp__img") || D(n))) return void t.close()
            }, w.onMouseOver = function(t) {
                var e = (t = t || window.event).target || t.srcElement;
                L(n, "ui--over-close", D(e))
            }, w.hideControls = function() {
                e.addClass(n, "pswp__ui--hidden"), x = !1
            }, w.showControls = function() {
                x = !0, S || w.update(), e.removeClass(n, "pswp__ui--hidden")
            }, w.supportsFullscreen = function() {
                var t = document;
                return !!(t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen)
            }, w.getFullscreenAPI = function() {
                var e, i = document.documentElement,
                    n = "fullscreenchange";
                return i.requestFullscreen ? e = {
                    enterK: "requestFullscreen",
                    exitK: "exitFullscreen",
                    elementK: "fullscreenElement",
                    eventK: n
                } : i.mozRequestFullScreen ? e = {
                    enterK: "mozRequestFullScreen",
                    exitK: "mozCancelFullScreen",
                    elementK: "mozFullScreenElement",
                    eventK: "moz" + n
                } : i.webkitRequestFullscreen ? e = {
                    enterK: "webkitRequestFullscreen",
                    exitK: "webkitExitFullscreen",
                    elementK: "webkitFullscreenElement",
                    eventK: "webkit" + n
                } : i.msRequestFullscreen && (e = {
                    enterK: "msRequestFullscreen",
                    exitK: "msExitFullscreen",
                    elementK: "msFullscreenElement",
                    eventK: "MSFullscreenChange"
                }), e && (e.enter = function() {
                    return c = g.closeOnScroll, g.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? t.template[this.enterK]() : void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                }, e.exit = function() {
                    return g.closeOnScroll = c, document[this.exitK]()
                }, e.isFullscreen = function() {
                    return document[this.elementK]
                }), e
            }
        }
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }(this, (function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || [])[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                e = e || [];
                for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                    var s = r && r[o];
                    s && (this.off(t, o), delete r[o]), o.apply(this, e), o = i[n += s ? 0 : 1]
                }
                return this
            }
        }, t
    })),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], (function(i) {
            return e(t, i)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
    }(window, (function(t, e) {
        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function n(t, e, o) {
            return this instanceof n ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = function(t) {
                var e = [];
                if (Array.isArray(t)) e = t;
                else if ("number" == typeof t.length)
                    for (var i = 0; i < t.length; i++) e.push(t[i]);
                else e.push(t);
                return e
            }(t), this.options = i({}, this.options), "function" == typeof e ? o = e : i(this.options, e), o && this.on("always", o), this.getImages(), s && (this.jqDeferred = new s.Deferred), void setTimeout(function() {
                this.check()
            }.bind(this))) : new n(t, e, o)
        }

        function o(t) {
            this.img = t
        }

        function r(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        var s = t.jQuery,
            a = t.console;
        n.prototype = Object.create(e.prototype), n.prototype.options = {}, n.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, n.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && l[e]) {
                for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var o = i[n];
                    this.addImage(o)
                }
                if ("string" == typeof this.options.background) {
                    var r = t.querySelectorAll(this.options.background);
                    for (n = 0; n < r.length; n++) {
                        var s = r[n];
                        this.addElementBackgroundImages(s)
                    }
                }
            }
        };
        var l = {
            1: !0,
            9: !0,
            11: !0
        };
        return n.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                    var o = n && n[2];
                    o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
                }
        }, n.prototype.addImage = function(t) {
            var e = new o(t);
            this.images.push(e)
        }, n.prototype.addBackground = function(t, e) {
            var i = new r(t, e);
            this.images.push(i)
        }, n.prototype.check = function() {
            function t(t, i, n) {
                setTimeout((function() {
                    e.progress(t, i, n)
                }))
            }
            var e = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach((function(e) {
                e.once("progress", t), e.check()
            })) : void this.complete()
        }, n.prototype.progress = function(t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
        }, n.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, o.prototype = Object.create(e.prototype), o.prototype.check = function() {
            return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, o.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, o.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, o.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, o.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, o.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, o.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, r.prototype = Object.create(o.prototype), r.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, r.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, r.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, n.makeJQueryPlugin = function(e) {
            (e = e || t.jQuery) && ((s = e).fn.imagesLoaded = function(t, e) {
                return new n(this, t, e).jqDeferred.promise(s(this))
            })
        }, n.makeJQueryPlugin(), n
    })), PaloAlto.isInViewport = function(t) {
        if (t) {
            const e = t.getBoundingClientRect(),
                i = e.top <= window.innerHeight && e.top + e.height >= 0,
                n = e.left <= window.innerWidth && e.left + e.width >= 0;
            return i && n
        }
    },
    function() {
        function t(t) {
            return $(t) && et.call(t, "callee") && !st.call(t, "callee")
        }

        function e(t, e) {
            return t.push.apply(t, e), t
        }

        function i(t) {
            return function(e) {
                return null == e ? V : e[t]
            }
        }

        function n(t, e, i, n, o) {
            return o(t, (function(t, o, r) {
                i = n ? (n = !1, t) : e(i, t, o, r)
            })), i
        }

        function o(t) {
            return t instanceof r ? t : new r(t)
        }

        function r(t, e) {
            this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e
        }

        function s(t, e, i) {
            if ("function" != typeof t) throw new TypeError("Expected a function");
            return setTimeout((function() {
                t.apply(V, i)
            }), e)
        }

        function a(t, e, i) {
            for (var n = -1, o = t.length; ++n < o;) {
                var r = t[n],
                    s = e(r);
                if (null != s && (a === V ? s == s : i(s, a))) var a = s,
                    l = r
            }
            return l
        }

        function l(t, e) {
            var i = [];
            return dt(t, (function(t, n, o) {
                e(t, n, o) && i.push(t)
            })), i
        }

        function c(t, i, n, o, r) {
            var s = -1,
                a = t.length;
            for (n || (n = C), r || (r = []); ++s < a;) {
                var l = t[s];
                0 < i && n(l) ? 1 < i ? c(l, i - 1, n, o, r) : e(r, l) : o || (r[r.length] = l)
            }
            return r
        }

        function u(t, e) {
            return t && ht(t, e, kt)
        }

        function d(t, e) {
            return l(e, (function(e) {
                return M(t[e])
            }))
        }

        function h(t, e) {
            return t > e
        }

        function p(t, e, i, n, o) {
            return t === e || (null == t || null == e || !$(t) && !$(e) ? t != t && e != e : function(t, e, i, n, o, r) {
                var s = yt(t),
                    a = yt(e),
                    l = s ? "[object Array]" : nt.call(t),
                    c = a ? "[object Array]" : nt.call(e),
                    u = (l = "[object Arguments]" == l ? "[object Object]" : l, c = "[object Arguments]" == c ? "[object Object]" : c, "[object Object]" == l);
                a = "[object Object]" == c, c = l == c;
                r || (r = []);
                var d = ft(r, (function(e) {
                        return e[0] == t
                    })),
                    h = ft(r, (function(t) {
                        return t[0] == e
                    }));
                if (d && h) return d[1] == e;
                if (r.push([t, e]), r.push([e, t]), c && !u) {
                    if (s) i = function(t, e, i, n, o, r) {
                        var s = t.length,
                            a = e.length;
                        if (s != a && !(1 & i && a > s)) return !1;
                        a = -1;
                        for (var l = !0, c = 2 & i ? [] : V; ++a < s;) {
                            var u = t[a],
                                d = e[a];
                            if (c) {
                                if (!S(e, (function(t, e) {
                                        if (!_(c, e) && (u === t || o(u, t, i, n, r))) return c.push(e)
                                    }))) {
                                    l = !1;
                                    break
                                }
                            } else if (u !== d && !o(u, d, i, n, r)) {
                                l = !1;
                                break
                            }
                        }
                        return l
                    }(t, e, i, n, o, r);
                    else t: {
                        switch (l) {
                            case "[object Boolean]":
                            case "[object Date]":
                            case "[object Number]":
                                i = F(+t, +e);
                                break t;
                            case "[object Error]":
                                i = t.name == e.name && t.message == e.message;
                                break t;
                            case "[object RegExp]":
                            case "[object String]":
                                i = t == e + "";
                                break t
                        }
                        i = !1
                    }
                    return r.pop(), i
                }
                return 1 & i || (s = u && et.call(t, "__wrapped__"), l = a && et.call(e, "__wrapped__"), !s && !l) ? !!c && (i = function(t, e, i, n, o, r) {
                    var s = 1 & i,
                        a = kt(t),
                        l = a.length,
                        c = kt(e).length;
                    if (l != c && !s) return !1;
                    for (var u = l; u--;) {
                        var d = a[u];
                        if (!(s ? d in e : et.call(e, d))) return !1
                    }
                    for (c = !0; ++u < l;) {
                        var h = t[d = a[u]],
                            p = e[d];
                        if (h !== p && !o(h, p, i, n, r)) {
                            c = !1;
                            break
                        }
                        s || (s = "constructor" == d)
                    }
                    return c && !s && (i = t.constructor, n = e.constructor, i != n && "constructor" in t && "constructor" in e && !("function" == typeof i && i instanceof i && "function" == typeof n && n instanceof n) && (c = !1)), c
                }(t, e, i, n, o, r), r.pop(), i) : (s = s ? t.value() : t, l = l ? e.value() : e, i = o(s, l, i, n, r), r.pop(), i)
            }(t, e, i, n, p, o))
        }

        function f(t) {
            return "function" == typeof t ? t : null == t ? W : ("object" == typeof t ? v : i)(t)
        }

        function m(t, e) {
            return t < e
        }

        function g(t, e) {
            var i = -1,
                n = O(t) ? Array(t.length) : [];
            return dt(t, (function(t, o, r) {
                n[++i] = e(t, o, r)
            })), n
        }

        function v(t) {
            var e = lt(t);
            return function(i) {
                var n = e.length;
                if (null == i) return !n;
                for (i = Object(i); n--;) {
                    var o = e[n];
                    if (!(o in i) || !p(t[o], i[o], 3)) return !1
                }
                return !0
            }
        }

        function y(t) {
            return pt(L(t, void 0, W), t + "")
        }

        function b(t, e, i) {
            var n = -1,
                o = t.length;
            for (0 > e && (e = -e > o ? 0 : o + e), 0 > (i = i > o ? o : i) && (i += o), o = e > i ? 0 : i - e >>> 0, e >>>= 0, i = Array(o); ++n < o;) i[n] = t[n + e];
            return i
        }

        function w(t) {
            return b(t, 0, t.length)
        }

        function S(t, e) {
            var i;
            return dt(t, (function(t, n, o) {
                return !(i = e(t, n, o))
            })), !!i
        }

        function x(t, e, i) {
            var n = !i;
            i || (i = {});
            for (var o = -1, r = e.length; ++o < r;) {
                var s = e[o],
                    a = V;
                if (a === V && (a = t[s]), n) i[s] = a;
                else {
                    var l = i,
                        c = l[s];
                    et.call(l, s) && F(c, a) && (a !== V || s in l) || (l[s] = a)
                }
            }
            return i
        }

        function E(t) {
            return y((function(e, i) {
                var n = -1,
                    o = i.length,
                    r = 1 < o ? i[o - 1] : V;
                r = 3 < t.length && "function" == typeof r ? (o--, r) : V;
                for (e = Object(e); ++n < o;) {
                    var s = i[n];
                    s && t(e, s, n, r)
                }
                return e
            }))
        }

        function k(t, e, i) {
            if ("function" != typeof t) throw new TypeError("Expected a function");
            var n = function(t) {
                return function() {
                    var e = arguments,
                        i = ut(t.prototype);
                    return z(e = t.apply(i, e)) ? e : i
                }
            }(t);
            return function o() {
                for (var r = -1, s = arguments.length, a = -1, l = i.length, c = Array(l + s), u = this && this !== Z && this instanceof o ? n : t; ++a < l;) c[a] = i[a];
                for (; s--;) c[a++] = arguments[++r];
                return u.apply(e, c)
            }
        }

        function C(e) {
            return yt(e) || t(e)
        }

        function A(t) {
            var e = [];
            if (null != t)
                for (var i in Object(t)) e.push(i);
            return e
        }

        function L(t, e, i) {
            return e = ct(e === V ? t.length - 1 : e, 0),
                function() {
                    for (var n = arguments, o = -1, r = ct(n.length - e, 0), s = Array(r); ++o < r;) s[o] = n[e + o];
                    for (o = -1, r = Array(e + 1); ++o < e;) r[o] = n[o];
                    return r[e] = i(s), t.apply(this, r)
                }
        }

        function P(t) {
            return null != t && t.length ? c(t, 1) : []
        }

        function T(t) {
            return t && t.length ? t[0] : V
        }

        function _(t, e, i) {
            var n = null == t ? 0 : t.length;
            i = ((i = "number" == typeof i ? 0 > i ? ct(n + i, 0) : i : 0) || 0) - 1;
            for (var o = e == e; ++i < n;) {
                var r = t[i];
                if (o ? r === e : r != r) return i
            }
            return -1
        }

        function I(t, e) {
            return dt(t, f(e))
        }

        function q(t, e, i) {
            return n(t, f(e), i, 3 > arguments.length, dt)
        }

        function D(t, e) {
            var i;
            if ("function" != typeof e) throw new TypeError("Expected a function");
            return t = bt(t),
                function() {
                    return 0 < --t && (i = e.apply(this, arguments)), 1 >= t && (e = V), i
                }
        }

        function F(t, e) {
            return t === e || t != t && e != e
        }

        function O(t) {
            var e;
            return (e = null != t) && (e = "number" == typeof(e = t.length) && -1 < e && 0 == e % 1 && 9007199254740991 >= e), e && !M(t)
        }

        function M(t) {
            return !!z(t) && ("[object Function]" == (t = nt.call(t)) || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t)
        }

        function z(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }

        function $(t) {
            return null != t && "object" == typeof t
        }

        function j(t) {
            return "number" == typeof t || $(t) && "[object Number]" == nt.call(t)
        }

        function N(t) {
            return "string" == typeof t || !yt(t) && $(t) && "[object String]" == nt.call(t)
        }

        function H(t) {
            return "string" == typeof t ? t : null == t ? "" : t + ""
        }

        function B(t) {
            return null == t ? [] : function(t, e) {
                return g(e, (function(e) {
                    return t[e]
                }))
            }(t, kt(t))
        }

        function W(t) {
            return t
        }

        function R(t, i, n) {
            var o = kt(i),
                r = d(i, o);
            null != n || z(i) && (r.length || !o.length) || (n = i, i = t, t = this, r = d(i, kt(i)));
            var s = !(z(n) && "chain" in n && !n.chain),
                a = M(t);
            return dt(r, (function(n) {
                var o = i[n];
                t[n] = o, a && (t.prototype[n] = function() {
                    var i = this.__chain__;
                    if (s || i) {
                        var n = t(this.__wrapped__);
                        return (n.__actions__ = w(this.__actions__)).push({
                            func: o,
                            args: arguments,
                            thisArg: t
                        }), n.__chain__ = i, n
                    }
                    return o.apply(t, e([this.value()], arguments))
                })
            })), t
        }
        var V, U = /[&<>"']/g,
            G = RegExp(U.source),
            X = /^(?:0|[1-9]\d*)$/,
            Y = "object" == typeof self && self && self.Object === Object && self,
            Z = "object" == typeof global && global && global.Object === Object && global || Y || Function("return this")(),
            K = (Y = "object" == typeof exports && exports && !exports.nodeType && exports) && "object" == typeof module && module && !module.nodeType && module,
            Q = function(t) {
                return function(e) {
                    return null == t ? V : t[e]
                }
            }({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }),
            J = Array.prototype,
            tt = Object.prototype,
            et = tt.hasOwnProperty,
            it = 0,
            nt = tt.toString,
            ot = Z._,
            rt = Object.create,
            st = tt.propertyIsEnumerable,
            at = Z.isFinite,
            lt = function(t, e) {
                return function(i) {
                    return t(e(i))
                }
            }(Object.keys, Object),
            ct = Math.max,
            ut = function() {
                function t() {}
                return function(e) {
                    return z(e) ? rt ? rt(e) : (t.prototype = e, e = new t, t.prototype = V, e) : {}
                }
            }();
        r.prototype = ut(o.prototype), r.prototype.constructor = r;
        var dt = function(t, e) {
                return function(e, i) {
                    if (null == e) return e;
                    if (!O(e)) return t(e, i);
                    for (var n = e.length, o = -1, r = Object(e); ++o < n && !1 !== i(r[o], o, r););
                    return e
                }
            }(u),
            ht = function(t, e, i) {
                for (var n = -1, o = Object(t), r = (i = i(t)).length; r--;) {
                    var s = i[++n];
                    if (!1 === e(o[s], s, o)) break
                }
                return t
            },
            pt = W,
            ft = function(t, e, i) {
                var n = Object(t);
                if (!O(t)) {
                    var o = f(e);
                    t = kt(t), e = function(t) {
                        return o(n[t], t, n)
                    }
                }
                return e = function(t, e, i) {
                    var n = null == t ? 0 : t.length;
                    if (!n) return -1;
                    0 > (i = null == i ? 0 : bt(i)) && (i = ct(n + i, 0));
                    t: {
                        for (e = f(e), n = t.length, i += -1; ++i < n;)
                            if (e(t[i], i, t)) {
                                t = i;
                                break t
                            } t = -1
                    }
                    return t
                }(t, e, i), -1 < e ? n[o ? t[e] : e] : V
            },
            mt = y((function(t, e, i) {
                return k(t, e, i)
            })),
            gt = y((function(t, e) {
                return s(t, 1, e)
            })),
            vt = y((function(t, e, i) {
                return s(t, wt(e) || 0, i)
            })),
            yt = Array.isArray,
            bt = Number,
            wt = Number,
            St = E((function(t, e) {
                x(e, lt(e), t)
            })),
            xt = E((function(t, e) {
                x(e, A(e), t)
            })),
            Et = y((function(t, e) {
                t = Object(t);
                var i, n = -1,
                    o = e.length,
                    r = 2 < o ? e[2] : V;
                if (i = r) {
                    i = e[0];
                    var s = e[1];
                    if (z(r)) {
                        if ("number" == (l = typeof s)) {
                            if (l = O(r)) var a = typeof s,
                                l = !!(l = null == (l = r.length) ? 9007199254740991 : l) && ("number" == a || "symbol" != a && X.test(s)) && -1 < s && 0 == s % 1 && s < l
                        } else l = "string" == l && s in r;
                        i = !!l && F(r[s], i)
                    } else i = !1
                }
                for (i && (o = 1); ++n < o;)
                    for (r = e[n], s = -1, l = (i = Ct(r)).length; ++s < l;) {
                        var c = t[a = i[s]];
                        (c === V || F(c, tt[a]) && !et.call(t, a)) && (t[a] = r[a])
                    }
                return t
            })),
            kt = lt,
            Ct = A,
            At = function(t) {
                return pt(L(t, V, P), t + "")
            }((function(t, e) {
                return null == t ? {} : function(t, e) {
                    return t = Object(t), q(e, (function(e, i) {
                        return i in t && (e[i] = t[i]), e
                    }), {})
                }(t, e)
            }));
        o.assignIn = xt, o.before = D, o.bind = mt, o.chain = function(t) {
            return (t = o(t)).__chain__ = !0, t
        }, o.compact = function(t) {
            return l(t, Boolean)
        }, o.concat = function() {
            var t = arguments.length;
            if (!t) return [];
            for (var i = Array(t - 1), n = arguments[0]; t--;) i[t - 1] = arguments[t];
            return e(yt(n) ? w(n) : [n], c(i, 1))
        }, o.create = function(t, e) {
            var i = ut(t);
            return null == e ? i : St(i, e)
        }, o.defaults = Et, o.defer = gt, o.delay = vt, o.filter = function(t, e) {
            return l(t, f(e))
        }, o.flatten = P, o.flattenDeep = function(t) {
            return null != t && t.length ? c(t, Infinity) : []
        }, o.iteratee = f, o.keys = kt, o.map = function(t, e) {
            return g(t, f(e))
        }, o.matches = function(t) {
            return v(St({}, t))
        }, o.mixin = R, o.negate = function(t) {
            if ("function" != typeof t) throw new TypeError("Expected a function");
            return function() {
                return !t.apply(this, arguments)
            }
        }, o.once = function(t) {
            return D(2, t)
        }, o.pick = At, o.slice = function(t, e, i) {
            var n = null == t ? 0 : t.length;
            return i = i === V ? n : +i, n ? b(t, null == e ? 0 : +e, i) : []
        }, o.sortBy = function(t, e) {
            var n = 0;
            return e = f(e), g(g(t, (function(t, i, o) {
                return {
                    value: t,
                    index: n++,
                    criteria: e(t, i, o)
                }
            })).sort((function(t, e) {
                var i;
                t: {
                    i = t.criteria;
                    var n = e.criteria;
                    if (i !== n) {
                        var o = i !== V,
                            r = null === i,
                            s = i == i,
                            a = n !== V,
                            l = null === n,
                            c = n == n;
                        if (!l && i > n || r && a && c || !o && c || !s) {
                            i = 1;
                            break t
                        }
                        if (!r && i < n || l && o && s || !a && s || !c) {
                            i = -1;
                            break t
                        }
                    }
                    i = 0
                }
                return i || t.index - e.index
            })), i("value"))
        }, o.tap = function(t, e) {
            return e(t), t
        }, o.thru = function(t, e) {
            return e(t)
        }, o.toArray = function(t) {
            return O(t) ? t.length ? w(t) : [] : B(t)
        }, o.values = B, o.extend = xt, R(o, o), o.clone = function(t) {
            return z(t) ? yt(t) ? w(t) : x(t, lt(t)) : t
        }, o.escape = function(t) {
            return (t = H(t)) && G.test(t) ? t.replace(U, Q) : t
        }, o.every = function(t, e, i) {
            return function(t, e) {
                var i = !0;
                return dt(t, (function(t, n, o) {
                    return i = !!e(t, n, o)
                })), i
            }(t, f(e = i ? V : e))
        }, o.find = ft, o.forEach = I, o.has = function(t, e) {
            return null != t && et.call(t, e)
        }, o.head = T, o.identity = W, o.indexOf = _, o.isArguments = t, o.isArray = yt, o.isBoolean = function(t) {
            return !0 === t || !1 === t || $(t) && "[object Boolean]" == nt.call(t)
        }, o.isDate = function(t) {
            return $(t) && "[object Date]" == nt.call(t)
        }, o.isEmpty = function(e) {
            return O(e) && (yt(e) || N(e) || M(e.splice) || t(e)) ? !e.length : !lt(e).length
        }, o.isEqual = function(t, e) {
            return p(t, e)
        }, o.isFinite = function(t) {
            return "number" == typeof t && at(t)
        }, o.isFunction = M, o.isNaN = function(t) {
            return j(t) && t != +t
        }, o.isNull = function(t) {
            return null === t
        }, o.isNumber = j, o.isObject = z, o.isRegExp = function(t) {
            return $(t) && "[object RegExp]" == nt.call(t)
        }, o.isString = N, o.isUndefined = function(t) {
            return t === V
        }, o.last = function(t) {
            var e = null == t ? 0 : t.length;
            return e ? t[e - 1] : V
        }, o.max = function(t) {
            return t && t.length ? a(t, W, h) : V
        }, o.min = function(t) {
            return t && t.length ? a(t, W, m) : V
        }, o.noConflict = function() {
            return Z._ === this && (Z._ = ot), this
        }, o.noop = function() {}, o.reduce = q, o.result = function(t, e, i) {
            return (e = null == t ? V : t[e]) === V && (e = i), M(e) ? e.call(t) : e
        }, o.size = function(t) {
            return null == t ? 0 : (t = O(t) ? t : lt(t)).length
        }, o.some = function(t, e, i) {
            return S(t, f(e = i ? V : e))
        }, o.uniqueId = function(t) {
            var e = ++it;
            return H(t) + e
        }, o.each = I, o.first = T, R(o, function() {
            var t = {};
            return u(o, (function(e, i) {
                et.call(o.prototype, i) || (t[i] = e)
            })), t
        }(), {
            chain: !1
        }), o.VERSION = "4.17.15", dt("pop join replace reverse split push shift sort splice unshift".split(" "), (function(t) {
            var e = (/^(?:replace|split)$/.test(t) ? String.prototype : J)[t],
                i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                n = /^(?:pop|join|replace|shift)$/.test(t);
            o.prototype[t] = function() {
                var t = arguments;
                if (n && !this.__chain__) {
                    var o = this.value();
                    return e.apply(yt(o) ? o : [], t)
                }
                return this[i]((function(i) {
                    return e.apply(yt(i) ? i : [], t)
                }))
            }
        })), o.prototype.toJSON = o.prototype.valueOf = o.prototype.value = function() {
            return function(t, i) {
                return q(i, (function(t, i) {
                    return i.func.apply(i.thisArg, e([t], i.args))
                }), t)
            }(this.__wrapped__, this.__actions__)
        }, "function" == typeof define && "object" == typeof define.amd && define.amd ? (Z._ = o, define((function() {
            return o
        }))) : K ? ((K.exports = o)._ = o, Y._ = o) : Z._ = o
    }.call(this), PaloAlto.Listeners = {
        add: function(t, e, i) {
            this.entries = [], this.entries.push({
                element: t,
                event: e,
                fn: i
            }), t.addEventListener(e, i)
        },
        removeAll: function(t) {
            this.entries = this.entries.filter((function(t) {
                return t.element.removeEventListener(t.event, t.fn), !1
            }))
        }
    },
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }((function(t) {
        var e, i, n, o, r, s, a = "Close",
            l = "BeforeClose",
            c = "MarkupParse",
            u = "Open",
            d = "Change",
            h = "mfp",
            p = "." + h,
            f = "mfp-ready",
            m = "mfp-removing",
            g = "mfp-prevent-close",
            v = function() {},
            y = !!window.jQuery,
            b = t(window),
            w = function(t, i) {
                e.ev.on(h + t + p, i)
            },
            S = function(e, i, n, o) {
                var r = document.createElement("div");
                return r.className = "mfp-" + e, n && (r.innerHTML = n), o ? i && i.appendChild(r) : (r = t(r), i && r.appendTo(i)), r
            },
            x = function(i, n) {
                e.ev.triggerHandler(h + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
            },
            E = function(i) {
                return i === s && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), s = i), e.currTemplate.closeBtn
            },
            k = function() {
                t.magnificPopup.instance || ((e = new v).init(), t.magnificPopup.instance = e)
            };
        v.prototype = {
            constructor: v,
            init: function() {
                var i = navigator.appVersion;
                e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = function() {
                    var t = document.createElement("p").style,
                        e = ["ms", "O", "Moz", "Webkit"];
                    if (void 0 !== t.transition) return !0;
                    for (; e.length;)
                        if (e.pop() + "Transition" in t) return !0;
                    return !1
                }(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document), e.popupsCache = {}
            },
            open: function(i) {
                var o;
                if (!1 === i.isObj) {
                    e.items = i.items.toArray(), e.index = 0;
                    var s, a = i.items;
                    for (o = 0; o < a.length; o++)
                        if ((s = a[o]).parsed && (s = s.el[0]), s === i.el[0]) {
                            e.index = o;
                            break
                        }
                } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
                if (!e.isOpen) {
                    e.types = [], r = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = n, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = S("bg").on("click" + p, (function() {
                        e.close()
                    })), e.wrap = S("wrap").attr("tabindex", -1).on("mousedown" + p, (function(t) {
                        e._checkIfClose(t.target) && e.close()
                    })), e.container = S("container", e.wrap)), e.contentContainer = S("content"), e.st.preloader && (e.preloader = S("preloader", e.container, e.st.tLoading));
                    var l = t.magnificPopup.modules;
                    for (o = 0; o < l.length; o++) {
                        var d = l[o];
                        d = d.charAt(0).toUpperCase() + d.slice(1), e["init" + d].call(e)
                    }
                    x("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (w(c, (function(t, e, i, n) {
                        i.close_replaceWith = E(n.type)
                    })), r += " mfp-close-btn-in") : e.wrap.append(E())), e.st.alignTop && (r += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                        overflow: e.st.overflowY,
                        overflowX: "hidden",
                        overflowY: e.st.overflowY
                    }) : e.wrap.css({
                        top: b.scrollTop(),
                        position: "absolute"
                    }), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                        height: n.height(),
                        position: "absolute"
                    }), e.st.enableEscapeKey && n.on("keyup" + p, (function(t) {
                        27 === t.keyCode && e.close()
                    })), b.on("resize" + p, (function() {
                        e.updateSize()
                    })), e.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && e.wrap.addClass(r);
                    var h = e.wH = b.height(),
                        m = {};
                    if (e.fixedContentPos && e._hasScrollBar(h)) {
                        var g = e._getScrollbarSize();
                        g && (m.marginRight = g)
                    }
                    e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : m.overflow = "hidden");
                    var v = e.st.mainClass;
                    return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), x("BuildControls"), t("html").css(m), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout((function() {
                        e.content ? (e._addClassToMFP(f), e._setFocus()) : e.bgOverlay.addClass(f), n.on("focusin" + p, e._onFocusIn)
                    }), 16), e.isOpen = !0, e.updateSize(h), x(u), i
                }
                e.updateItemHTML()
            },
            close: function() {
                e.isOpen && (x(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(m), setTimeout((function() {
                    e._close()
                }), e.st.removalDelay)) : e._close())
            },
            _close: function() {
                x(a);
                var i = m + " " + f + " ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                    var o = {
                        marginRight: ""
                    };
                    e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "", t("html").css(o)
                }
                n.off("keyup.mfp focusin" + p), e.ev.off(p), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, x("AfterClose")
            },
            updateSize: function(t) {
                if (e.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        n = window.innerHeight * i;
                    e.wrap.css("height", n), e.wH = n
                } else e.wH = t || b.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), x("Resize")
            },
            updateItemHTML: function() {
                var i = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
                var n = i.type;
                if (x("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
                    var r = !!e.st[n] && e.st[n].markup;
                    x("FirstMarkupParse", r), e.currTemplate[n] = !r || t(r)
                }
                o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
                var s = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
                e.appendContent(s, n), i.preloaded = !0, x(d, i), o = i.type, e.container.prepend(e.contentContainer), x("AfterChange")
            },
            appendContent: function(t, i) {
                e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(E()) : e.content = t : e.content = "", x("BeforeAppend"), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
            },
            parseEl: function(i) {
                var n, o = e.items[i];
                if (o.tagName ? o = {
                        el: t(o)
                    } : (n = o.type, o = {
                        data: o,
                        src: o.src
                    }), o.el) {
                    for (var r = e.types, s = 0; s < r.length; s++)
                        if (o.el.hasClass("mfp-" + r[s])) {
                            n = r[s];
                            break
                        } o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
                }
                return o.type = n || e.st.type || "inline", o.index = i, o.parsed = !0, e.items[i] = o, x("ElementParse", o), e.items[i]
            },
            addGroup: function(t, i) {
                var n = function(n) {
                    n.mfpEl = this, e._openClick(n, t, i)
                };
                i || (i = {});
                var o = "click.magnificPopup";
                i.mainEl = t, i.items ? (i.isObj = !0, t.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? t.off(o).on(o, i.delegate, n) : (i.items = t, t.off(o).on(o, n)))
            },
            _openClick: function(i, n, o) {
                if ((void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                    var r = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
                    if (r)
                        if (t.isFunction(r)) {
                            if (!r.call(e)) return !0
                        } else if (b.width() < r) return !0;
                    i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), o.el = t(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), e.open(o)
                }
            },
            updateStatus: function(t, n) {
                if (e.preloader) {
                    i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
                    var o = {
                        status: t,
                        text: n
                    };
                    x("UpdateStatus", o), t = o.status, n = o.text, e.preloader.html(n), e.preloader.find("a").on("click", (function(t) {
                        t.stopImmediatePropagation()
                    })), e.container.addClass("mfp-s-" + t), i = t
                }
            },
            _checkIfClose: function(i) {
                if (!t(i).hasClass(g)) {
                    var n = e.st.closeOnContentClick,
                        o = e.st.closeOnBgClick;
                    if (n && o) return !0;
                    if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                    if (i === e.content[0] || t.contains(e.content[0], i)) {
                        if (n) return !0
                    } else if (o && t.contains(document, i)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t)
            },
            _removeClassFromMFP: function(t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
            },
            _hasScrollBar: function(t) {
                return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || b.height())
            },
            _setFocus: function() {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
            },
            _onFocusIn: function(i) {
                return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1)
            },
            _parseMarkup: function(e, i, n) {
                var o;
                n.data && (i = t.extend(n.data, i)), x(c, [e, i, n]), t.each(i, (function(i, n) {
                    if (void 0 === n || !1 === n) return !0;
                    if ((o = i.split("_")).length > 1) {
                        var r = e.find(p + "-" + o[0]);
                        if (r.length > 0) {
                            var s = o[1];
                            "replaceWith" === s ? r[0] !== n[0] && r.replaceWith(n) : "img" === s ? r.is("img") ? r.attr("src", n) : r.replaceWith(t("<img>").attr("src", n).attr("class", r.attr("class"))) : r.attr(o[1], n)
                        }
                    } else e.find(p + "-" + i).html(n)
                }))
            },
            _getScrollbarSize: function() {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return e.scrollbarSize
            }
        }, t.magnificPopup = {
            instance: null,
            proto: v.prototype,
            modules: [],
            open: function(e, i) {
                return k(), (e = e ? t.extend(!0, {}, e) : {}).isObj = !0, e.index = i || 0, this.instance.open(e)
            },
            close: function() {
                return t.magnificPopup.instance && t.magnificPopup.instance.close()
            },
            registerModule: function(e, i) {
                i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, t.fn.magnificPopup = function(i) {
            k();
            var n = t(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var o, r = y ? n.data("magnificPopup") : n[0].magnificPopup,
                        s = parseInt(arguments[1], 10) || 0;
                    r.items ? o = r.items[s] : (o = n, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), e._openClick({
                        mfpEl: o
                    }, n, r)
                } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
            else i = t.extend(!0, {}, i), y ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
            return n
        };
        var C, A, L, P = "inline",
            T = function() {
                L && (A.after(L.addClass(C)).detach(), L = null)
            };
        t.magnificPopup.registerModule(P, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    e.types.push(P), w(a + "." + P, (function() {
                        T()
                    }))
                },
                getInline: function(i, n) {
                    if (T(), i.src) {
                        var o = e.st.inline,
                            r = t(i.src);
                        if (r.length) {
                            var s = r[0].parentNode;
                            s && s.tagName && (A || (C = o.hiddenClass, A = S(C), C = "mfp-" + C), L = r.after(A).detach().removeClass(C)), e.updateStatus("ready")
                        } else e.updateStatus("error", o.tNotFound), r = t("<div>");
                        return i.inlineElement = r, r
                    }
                    return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n
                }
            }
        });
        var _, I = "ajax",
            q = function() {
                _ && t(document.body).removeClass(_)
            },
            D = function() {
                q(), e.req && e.req.abort()
            };
        t.magnificPopup.registerModule(I, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    e.types.push(I), _ = e.st.ajax.cursor, w(a + "." + I, D), w("BeforeChange." + I, D)
                },
                getAjax: function(i) {
                    _ && t(document.body).addClass(_), e.updateStatus("loading");
                    var n = t.extend({
                        url: i.src,
                        success: function(n, o, r) {
                            var s = {
                                data: n,
                                xhr: r
                            };
                            x("ParseAjax", s), e.appendContent(t(s.data), I), i.finished = !0, q(), e._setFocus(), setTimeout((function() {
                                e.wrap.addClass(f)
                            }), 16), e.updateStatus("ready"), x("AjaxContentAdded")
                        },
                        error: function() {
                            q(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                        }
                    }, e.st.ajax.settings);
                    return e.req = t.ajax(n), ""
                }
            }
        });
        var F, O = function(i) {
            if (i.data && void 0 !== i.data.title) return i.data.title;
            var n = e.st.image.titleSrc;
            if (n) {
                if (t.isFunction(n)) return n.call(e, i);
                if (i.el) return i.el.attr(n) || ""
            }
            return ""
        };
        t.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var i = e.st.image,
                        n = ".image";
                    e.types.push("image"), w(u + n, (function() {
                        "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
                    })), w(a + n, (function() {
                        i.cursor && t(document.body).removeClass(i.cursor), b.off("resize" + p)
                    })), w("Resize" + n, e.resizeImage), e.isLowIE && w("AfterChange", e.resizeImage)
                },
                resizeImage: function() {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                    }
                },
                _onImageHasSize: function(t) {
                    t.img && (t.hasSize = !0, F && clearInterval(F), t.isCheckingImgSize = !1, x("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
                },
                findImageSize: function(t) {
                    var i = 0,
                        n = t.img[0],
                        o = function(r) {
                            F && clearInterval(F), F = setInterval((function() {
                                return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(F), void(3 === ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
                            }), r)
                        };
                    o(1)
                },
                getImage: function(i, n) {
                    var o = 0,
                        r = function() {
                            i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, x("ImageLoadComplete")) : 200 > ++o ? setTimeout(r, 100) : s())
                        },
                        s = function() {
                            i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                        },
                        a = e.st.image,
                        l = n.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = t(c).on("load.mfploader", r).on("error.mfploader", s), c.src = i.src, l.is("img") && (i.img = i.img.clone()), (c = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                    }
                    return e._parseMarkup(n, {
                        title: O(i),
                        img_replaceWith: i.img
                    }, i), e.resizeImage(), i.hasSize ? (F && clearInterval(F), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
                }
            }
        });
        var M;
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(t) {
                    return t.is("img") ? t : t.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var t, i = e.st.zoom,
                        n = ".zoom";
                    if (i.enabled && e.supportsTransition) {
                        var o, r, s = i.duration,
                            c = function(t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    n = "all " + i.duration / 1e3 + "s " + i.easing,
                                    o = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    r = "transition";
                                return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = n, e.css(o), e
                            },
                            u = function() {
                                e.content.css("visibility", "visible")
                            };
                        w("BuildControls" + n, (function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(o), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void u();
                                (r = c(t)).css(e._getOffset()), e.wrap.append(r), o = setTimeout((function() {
                                    r.css(e._getOffset(!0)), o = setTimeout((function() {
                                        u(), setTimeout((function() {
                                            r.remove(), t = r = null, x("ZoomAnimationEnded")
                                        }), 16)
                                    }), s)
                                }), 16)
                            }
                        })), w(l + n, (function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(o), e.st.removalDelay = s, !t) {
                                    if (!(t = e._getItemToZoom())) return;
                                    r = c(t)
                                }
                                r.css(e._getOffset(!0)), e.wrap.append(r), e.content.css("visibility", "hidden"), setTimeout((function() {
                                    r.css(e._getOffset())
                                }), 16)
                            }
                        })), w(a + n, (function() {
                            e._allowZoom() && (u(), r && r.remove(), t = null)
                        }))
                    }
                },
                _allowZoom: function() {
                    return "image" === e.currItem.type
                },
                _getItemToZoom: function() {
                    return !!e.currItem.hasSize && e.currItem.img
                },
                _getOffset: function(i) {
                    var n, o = (n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
                        r = parseInt(n.css("padding-top"), 10),
                        s = parseInt(n.css("padding-bottom"), 10);
                    o.top -= t(window).scrollTop() - r;
                    var a = {
                        width: n.width(),
                        height: (y ? n.innerHeight() : n[0].offsetHeight) - s - r
                    };
                    return void 0 === M && (M = void 0 !== document.createElement("p").style.MozTransform), M ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
                }
            }
        });
        var z = "iframe",
            $ = function(t) {
                if (e.currTemplate[z]) {
                    var i = e.currTemplate[z].find("iframe");
                    i.length && (t || (i[0].src = "//about:blank"), e.isIE8 && i.css("display", t ? "block" : "none"))
                }
            };
        t.magnificPopup.registerModule(z, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    e.types.push(z), w("BeforeChange", (function(t, e, i) {
                        e !== i && (e === z ? $() : i === z && $(!0))
                    })), w(a + "." + z, (function() {
                        $()
                    }))
                },
                getIframe: function(i, n) {
                    var o = i.src,
                        r = e.st.iframe;
                    t.each(r.patterns, (function() {
                        return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                    }));
                    var s = {};
                    return r.srcAction && (s[r.srcAction] = o), e._parseMarkup(n, s, i), e.updateStatus("ready"), n
                }
            }
        });
        var j = function(t) {
                var i = e.items.length;
                return t > i - 1 ? t - i : 0 > t ? i + t : t
            },
            N = function(t, e, i) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
            };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var i = e.st.gallery,
                        o = ".mfp-gallery";
                    return e.direction = !0, !(!i || !i.enabled) && (r += " mfp-gallery", w(u + o, (function() {
                        i.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", (function() {
                            return e.items.length > 1 ? (e.next(), !1) : void 0
                        })), n.on("keydown" + o, (function(t) {
                            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                        }))
                    })), w("UpdateStatus" + o, (function(t, i) {
                        i.text && (i.text = N(i.text, e.currItem.index, e.items.length))
                    })), w(c + o, (function(t, n, o, r) {
                        var s = e.items.length;
                        o.counter = s > 1 ? N(i.tCounter, r.index, s) : ""
                    })), w("BuildControls" + o, (function() {
                        if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                            var n = i.arrowMarkup,
                                o = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(g),
                                r = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(g);
                            o.click((function() {
                                e.prev()
                            })), r.click((function() {
                                e.next()
                            })), e.container.append(o.add(r))
                        }
                    })), w(d + o, (function() {
                        e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout((function() {
                            e.preloadNearbyImages(), e._preloadTimeout = null
                        }), 16)
                    })), void w(a + o, (function() {
                        n.off(o), e.wrap.off("click" + o), e.arrowRight = e.arrowLeft = null
                    })))
                },
                next: function() {
                    e.direction = !0, e.index = j(e.index + 1), e.updateItemHTML()
                },
                prev: function() {
                    e.direction = !1, e.index = j(e.index - 1), e.updateItemHTML()
                },
                goTo: function(t) {
                    e.direction = t >= e.index, e.index = t, e.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var t, i = e.st.gallery.preload,
                        n = Math.min(i[0], e.items.length),
                        o = Math.min(i[1], e.items.length);
                    for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index - t)
                },
                _preloadItem: function(i) {
                    if (i = j(i), !e.items[i].preloaded) {
                        var n = e.items[i];
                        n.parsed || (n = e.parseEl(i)), x("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", (function() {
                            n.hasSize = !0
                        })).on("error.mfploader", (function() {
                            n.hasSize = !0, n.loadError = !0, x("LazyLoadError", n)
                        })).attr("src", n.src)), n.preloaded = !0
                    }
                }
            }
        });
        var H = "retina";
        t.magnificPopup.registerModule(H, {
            options: {
                replaceSrc: function(t) {
                    return t.src.replace(/\.\w+$/, (function(t) {
                        return "@2x" + t
                    }))
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina,
                            i = t.ratio;
                        (i = isNaN(i) ? i() : i) > 1 && (w("ImageHasSize." + H, (function(t, e) {
                            e.img.css({
                                "max-width": e.img[0].naturalWidth / i,
                                width: "100%"
                            })
                        })), w("ElementParse." + H, (function(e, n) {
                            n.src = t.replaceSrc(n, i)
                        })))
                    }
                }
            }
        }), k()
    })), PaloAlto.Modals = function() {
        function t(t, e, i) {
            var n = {
                close: ".js-modal-close",
                open: ".js-modal-open-" + e,
                openClass: "modal--is-active",
                openBodyClass: "modal--is-visible",
                closeModalOnClick: !1,
                scrollIntoView: !1
            };
            if (this.modal = document.getElementById(t), !this.modal) return !1;
            this.nodes = {
                parents: [document.querySelector("html"), document.body]
            }, this.config = Object.assign(n, i), this.modalIsOpen = !1, this.focusOnOpen = this.config.focusOnOpen ? document.getElementById(this.config.focusOnOpen) : this.modal, this.openElement = document.querySelector(this.config.open), this.init()
        }
        return t.prototype.init = function() {
            this.openElement.addEventListener("click", this.open.bind(this)), this.modal.querySelector(this.config.close).addEventListener("click", this.closeModal.bind(this))
        }, t.prototype.open = function(t) {
            let e = !1;
            if (t ? t.preventDefault() : e = !0, this.modalIsOpen && !e) return void this.closeModal();
            this.modal.classList.add(this.config.openClass), this.nodes.parents.forEach((t => {
                t.classList.add(this.config.openBodyClass)
            })), this.modalIsOpen = !0;
            const i = document.querySelector(".store-availabilities-list");
            document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
                bubbles: !0,
                detail: i
            })), this.config.scrollIntoView && this.scrollIntoView(), this.bindEvents()
        }, t.prototype.closeModal = function() {
            if (!this.modalIsOpen) return;
            document.activeElement.blur(), this.modal.classList.remove(this.config.openClass);
            var t = this;
            this.nodes.parents.forEach((function(e) {
                e.classList.remove(t.config.openBodyClass)
            })), this.modalIsOpen = !1, this.openElement.focus(), this.unbindEvents();
            document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
                bubbles: !0,
                detail: 400
            }))
        }, t.prototype.bindEvents = function() {
            this.keyupHandler = this.keyupHandler.bind(this), this.clickHandler = this.clickHandler.bind(this), document.body.addEventListener("keyup", this.keyupHandler), document.body.addEventListener("click", this.clickHandler)
        }, t.prototype.unbindEvents = function() {
            document.body.removeEventListener("keyup", this.keyupHandler), document.body.removeEventListener("click", this.clickHandler)
        }, t.prototype.keyupHandler = function(t) {
            27 === t.keyCode && this.closeModal()
        }, t.prototype.clickHandler = function(t) {
            !this.config.closeModalOnClick || this.modal.contains(t.target) || t.target.matches(this.config.open) || this.closeModal()
        }, t.prototype.scrollIntoView = function() {
            this.focusOnOpen.scrollIntoView({
                behavior: "smooth"
            })
        }, t
    }(),
    function(t) {
        t.fn.prepareTransition = function() {
            return this.each((function() {
                var e = t(this);
                e.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd", (function() {
                    e.removeClass("is-transitioning")
                }));
                var i = 0;
                t.each(["transition-duration", "-moz-transition-duration", "-webkit-transition-duration", "-o-transition-duration"], (function(t, n) {
                    i || (i = parseFloat(e.css(n)))
                })), 0 != i && (e.addClass("is-transitioning"), e[0].offsetWidth)
            }))
        }
    }(jQuery),
    function(t, e) {
        "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.Rellax = e()
    }("undefined" != typeof window ? window : global, (function() {
        var t = function(e, i) {
            "use strict";
            var n = Object.create(t.prototype),
                o = 0,
                r = 0,
                s = [],
                a = !0,
                l = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(t) {
                    return setTimeout(t, 1e3 / 60)
                },
                c = null,
                u = !1;
            try {
                var d = Object.defineProperty({}, "passive", {
                    get: function() {
                        u = !0
                    }
                });
                window.addEventListener("testPassive", null, d), window.removeEventListener("testPassive", null, d)
            } catch (e) {}
            var h = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout,
                p = window.transformProp || function() {
                    var t = document.createElement("div");
                    if (null === t.style.transform) {
                        var e, i = ["Webkit", "Moz", "ms"];
                        for (e in i)
                            if (void 0 !== t.style[i[e] + "Transform"]) return i[e] + "Transform"
                    }
                    return "transform"
                }();
            if (n.options = {
                    round: !0,
                    frame: null,
                    callback: function() {}
                }, i && Object.keys(i).forEach((function(t) {
                    n.options[t] = i[t]
                })), 0 < (e = "string" == typeof(e = e || ".rellax") ? document.querySelectorAll(e) : [e]).length) {
                if (n.elems = e, n.options.frame && !n.options.frame.nodeType) {
                    if (!(e = document.querySelector(n.options.frame))) return void console.warn("Rellax: The frame you're trying to use doesn't exist.");
                    n.options.frame = e
                }
                var f = function() {
                        for (var t = 0; t < s.length; t++) n.elems[t].style.cssText = s[t].style;
                        s = [], r = window.innerHeight, window.innerWidth, g(),
                            function() {
                                for (var t = 0; t < n.elems.length; t++) {
                                    var e = m(n.elems[t]);
                                    s.push(e)
                                }
                            }(), b(), a && (window.addEventListener("resize", f), a = !1, y())
                    },
                    m = function(t) {
                        var e = t.getAttribute("data-rellax-zindex") || 0,
                            i = 0 + t.getBoundingClientRect().top,
                            n = t.clientHeight || t.offsetHeight || t.scrollHeight,
                            o = 0 + t.getBoundingClientRect().left,
                            r = t.clientWidth || t.offsetWidth || t.scrollWidth,
                            s = t.style.cssText,
                            a = "",
                            l = /transform\s*:/i.exec(s);
                        return l && (t = l.index, a = (t = (l = s.slice(t)).indexOf(";")) ? " " + l.slice(11, t).replace(/\s/g, "") : " " + l.slice(11).replace(/\s/g, "")), {
                            top: i,
                            left: o,
                            height: n,
                            width: r,
                            style: s,
                            transform: a,
                            zindex: e
                        }
                    },
                    g = function() {
                        return o != (o = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset)
                    },
                    v = function() {
                        window.removeEventListener("resize", v), window.removeEventListener("orientationchange", v), window.removeEventListener("scroll", v), document.removeEventListener("touchmove", v), c = l(y)
                    },
                    y = function() {
                        g() && !1 === a ? (b(), c = l(y)) : (c = null, window.addEventListener("resize", v), window.addEventListener("orientationchange", v), window.addEventListener("scroll", v, !!u && {
                            passive: !0
                        }), document.addEventListener("touchmove", v, !!u && {
                            passive: !0
                        }))
                    },
                    b = function() {
                        for (var t = 0; t < n.elems.length; t++) {
                            var e = (u = n.elems[t].parentNode).clientHeight || u.offsetHeight || u.scrollHeight,
                                i = u.getBoundingClientRect().top + o,
                                a = e + i,
                                l = s[t].height - e;
                            if (a < o || o + r < i) return;
                            var c = document.body,
                                u = document.documentElement;
                            u = Math.max(c.scrollHeight, c.offsetHeight, u.clientHeight, u.scrollHeight, u.offsetHeight), l = "translate3d(0px," + (i < r ? l / (e + i) * -(o + i - i) + l / 2 : u - a < r ? l / (e + (u - a)) * -(o + r - i) + l / 2 : l / (e + r) * -(o + r - i) + l / 2) + "px," + s[t].zindex + "px) " + s[t].transform;
                            n.elems[t].style[p] = l
                        }
                    };
                return n.destroy = function() {
                    for (var t = 0; t < n.elems.length; t++) n.elems[t].style.cssText = s[t].style;
                    a || (window.removeEventListener("resize", f), a = !0), h(c), c = null
                }, f(), n.refresh = f, n
            }
            console.warn("Rellax: The elements you're trying to select don't exist.")
        };
        return t
    })),
    function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.scrollLock = e() : t.scrollLock = e()
    }(this, (function() {
        return function(t) {
            var e = {};

            function i(n) {
                if (e[n]) return e[n].exports;
                var o = e[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
            }
            return i.m = t, i.c = e, i.d = function(t, e, n) {
                i.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: n
                })
            }, i.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }, i.t = function(t, e) {
                if (1 & e && (t = i(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (i.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var o in t) i.d(n, o, function(e) {
                        return t[e]
                    }.bind(null, o));
                return n
            }, i.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                } : function() {
                    return t
                };
                return i.d(e, "a", e), e
            }, i.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, i.p = "", i(i.s = 0)
        }([function(t, e, i) {
            "use strict";
            i.r(e);
            var n = function(t) {
                    return Array.isArray(t) ? t : [t]
                },
                o = function(t) {
                    return t instanceof Node
                },
                r = function(t, e) {
                    if (t && e) {
                        t = t instanceof NodeList ? t : [t];
                        for (var i = 0; i < t.length && !0 !== e(t[i], i, t.length); i++);
                    }
                },
                s = function(t) {
                    return console.error("[scroll-lock] ".concat(t))
                },
                a = function(t) {
                    if (Array.isArray(t)) return t.join(", ")
                },
                l = function(t) {
                    var e = [];
                    return r(t, (function(t) {
                        return e.push(t)
                    })), e
                },
                c = function(t, e) {
                    var i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                        n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : document;
                    if (i && -1 !== l(n.querySelectorAll(e)).indexOf(t)) return t;
                    for (;
                        (t = t.parentElement) && -1 === l(n.querySelectorAll(e)).indexOf(t););
                    return t
                },
                u = function(t, e) {
                    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : document;
                    return -1 !== l(i.querySelectorAll(e)).indexOf(t)
                },
                d = function(t) {
                    if (t) return "hidden" === getComputedStyle(t).overflow
                },
                h = function(t) {
                    if (t) return !!d(t) || t.scrollTop <= 0
                },
                p = function(t) {
                    if (t) {
                        if (d(t)) return !0;
                        var e = t.scrollTop;
                        return t.scrollHeight <= e + t.offsetHeight
                    }
                },
                f = function(t) {
                    if (t) return !!d(t) || t.scrollLeft <= 0
                },
                m = function(t) {
                    if (t) {
                        if (d(t)) return !0;
                        var e = t.scrollLeft;
                        return t.scrollWidth <= e + t.offsetWidth
                    }
                };
            i.d(e, "disablePageScroll", (function() {
                return y
            })), i.d(e, "enablePageScroll", (function() {
                return b
            })), i.d(e, "getScrollState", (function() {
                return w
            })), i.d(e, "clearQueueScrollLocks", (function() {
                return S
            })), i.d(e, "getTargetScrollBarWidth", (function() {
                return x
            })), i.d(e, "getCurrentTargetScrollBarWidth", (function() {
                return E
            })), i.d(e, "getPageScrollBarWidth", (function() {
                return k
            })), i.d(e, "getCurrentPageScrollBarWidth", (function() {
                return C
            })), i.d(e, "addScrollableTarget", (function() {
                return A
            })), i.d(e, "removeScrollableTarget", (function() {
                return L
            })), i.d(e, "addScrollableSelector", (function() {
                return P
            })), i.d(e, "removeScrollableSelector", (function() {
                return T
            })), i.d(e, "addLockableTarget", (function() {
                return _
            })), i.d(e, "addLockableSelector", (function() {
                return I
            })), i.d(e, "setFillGapMethod", (function() {
                return q
            })), i.d(e, "addFillGapTarget", (function() {
                return D
            })), i.d(e, "removeFillGapTarget", (function() {
                return F
            })), i.d(e, "addFillGapSelector", (function() {
                return O
            })), i.d(e, "removeFillGapSelector", (function() {
                return M
            })), i.d(e, "refillGaps", (function() {
                return z
            }));
            var g = ["padding", "margin", "width", "max-width", "none"],
                v = {
                    scroll: !0,
                    queue: 0,
                    scrollableSelectors: ["[data-scroll-lock-scrollable]"],
                    lockableSelectors: ["body", "[data-scroll-lock-lockable]"],
                    fillGapSelectors: ["body", "[data-scroll-lock-fill-gap]", "[data-scroll-lock-lockable]"],
                    fillGapMethod: g[0],
                    startTouchY: 0,
                    startTouchX: 0
                },
                y = function(t) {
                    v.queue <= 0 && (v.scroll = !1, $(), R()), A(t), v.queue++
                },
                b = function(t) {
                    0 < v.queue && v.queue--, v.queue <= 0 && (v.scroll = !0, j(), V()), L(t)
                },
                w = function() {
                    return v.scroll
                },
                S = function() {
                    v.queue = 0
                },
                x = function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                    if (o(t)) {
                        var i = t.style.overflowY;
                        e ? w() || (t.style.overflowY = t.getAttribute("data-scroll-lock-saved-overflow-y-property")) : t.style.overflowY = "scroll";
                        var n = E(t);
                        return t.style.overflowY = i, n
                    }
                    return 0
                },
                E = function(t) {
                    if (o(t)) {
                        if (t === document.body) {
                            var e = document.documentElement.clientWidth;
                            return window.innerWidth - e
                        }
                        var i = t.style.borderLeftWidth,
                            n = t.style.borderRightWidth;
                        t.style.borderLeftWidth = "0px", t.style.borderRightWidth = "0px";
                        var r = t.offsetWidth - t.clientWidth;
                        return t.style.borderLeftWidth = i, t.style.borderRightWidth = n, r
                    }
                    return 0
                },
                k = function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return x(document.body, t)
                },
                C = function() {
                    return E(document.body)
                },
                A = function(t) {
                    t && n(t).map((function(t) {
                        r(t, (function(t) {
                            o(t) ? t.setAttribute("data-scroll-lock-scrollable", "") : s('"'.concat(t, '" is not a Element.'))
                        }))
                    }))
                },
                L = function(t) {
                    t && n(t).map((function(t) {
                        r(t, (function(t) {
                            o(t) ? t.removeAttribute("data-scroll-lock-scrollable") : s('"'.concat(t, '" is not a Element.'))
                        }))
                    }))
                },
                P = function(t) {
                    t && n(t).map((function(t) {
                        v.scrollableSelectors.push(t)
                    }))
                },
                T = function(t) {
                    t && n(t).map((function(t) {
                        v.scrollableSelectors = v.scrollableSelectors.filter((function(e) {
                            return e !== t
                        }))
                    }))
                },
                _ = function(t) {
                    t && (n(t).map((function(t) {
                        r(t, (function(t) {
                            o(t) ? t.setAttribute("data-scroll-lock-lockable", "") : s('"'.concat(t, '" is not a Element.'))
                        }))
                    })), w() || $())
                },
                I = function(t) {
                    t && (n(t).map((function(t) {
                        v.lockableSelectors.push(t)
                    })), w() || $(), O(t))
                },
                q = function(t) {
                    if (t)
                        if (-1 !== g.indexOf(t)) v.fillGapMethod = t, z();
                        else {
                            var e = g.join(", ");
                            s('"'.concat(t, '" method is not available!\nAvailable fill gap methods: ').concat(e, "."))
                        }
                },
                D = function(t) {
                    t && n(t).map((function(t) {
                        r(t, (function(t) {
                            o(t) ? (t.setAttribute("data-scroll-lock-fill-gap", ""), v.scroll || G(t)) : s('"'.concat(t, '" is not a Element.'))
                        }))
                    }))
                },
                F = function(t) {
                    t && n(t).map((function(t) {
                        r(t, (function(t) {
                            o(t) ? (t.removeAttribute("data-scroll-lock-fill-gap"), v.scroll || Y(t)) : s('"'.concat(t, '" is not a Element.'))
                        }))
                    }))
                },
                O = function(t) {
                    t && n(t).map((function(t) {
                        -1 === v.fillGapSelectors.indexOf(t) && (v.fillGapSelectors.push(t), v.scroll || U(t))
                    }))
                },
                M = function(t) {
                    t && n(t).map((function(t) {
                        v.fillGapSelectors = v.fillGapSelectors.filter((function(e) {
                            return e !== t
                        })), v.scroll || X(t)
                    }))
                },
                z = function() {
                    v.scroll || R()
                },
                $ = function() {
                    var t = a(v.lockableSelectors);
                    N(t)
                },
                j = function() {
                    var t = a(v.lockableSelectors);
                    H(t)
                },
                N = function(t) {
                    var e = document.querySelectorAll(t);
                    r(e, (function(t) {
                        B(t)
                    }))
                },
                H = function(t) {
                    var e = document.querySelectorAll(t);
                    r(e, (function(t) {
                        W(t)
                    }))
                },
                B = function(t) {
                    if (o(t) && "true" !== t.getAttribute("data-scroll-lock-locked")) {
                        var e = window.getComputedStyle(t);
                        t.setAttribute("data-scroll-lock-saved-overflow-y-property", e.overflowY), t.setAttribute("data-scroll-lock-saved-inline-overflow-property", t.style.overflow), t.setAttribute("data-scroll-lock-saved-inline-overflow-y-property", t.style.overflowY), t.style.overflow = "hidden", t.setAttribute("data-scroll-lock-locked", "true")
                    }
                },
                W = function(t) {
                    o(t) && "true" === t.getAttribute("data-scroll-lock-locked") && (t.style.overflow = t.getAttribute("data-scroll-lock-saved-inline-overflow-property"), t.style.overflowY = t.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"), t.removeAttribute("data-scroll-lock-saved-overflow-property"), t.removeAttribute("data-scroll-lock-saved-inline-overflow-property"), t.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"), t.removeAttribute("data-scroll-lock-locked"))
                },
                R = function() {
                    v.fillGapSelectors.map((function(t) {
                        U(t)
                    }))
                },
                V = function() {
                    v.fillGapSelectors.map((function(t) {
                        X(t)
                    }))
                },
                U = function(t) {
                    var e = document.querySelectorAll(t),
                        i = -1 !== v.lockableSelectors.indexOf(t);
                    r(e, (function(t) {
                        G(t, i)
                    }))
                },
                G = function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                    if (o(t)) {
                        var i;
                        if ("" === t.getAttribute("data-scroll-lock-lockable") || e) i = x(t, !0);
                        else {
                            var n = c(t, a(v.lockableSelectors));
                            i = x(n, !0)
                        }
                        "true" === t.getAttribute("data-scroll-lock-filled-gap") && Y(t);
                        var r = window.getComputedStyle(t);
                        if (t.setAttribute("data-scroll-lock-filled-gap", "true"), t.setAttribute("data-scroll-lock-current-fill-gap-method", v.fillGapMethod), "margin" === v.fillGapMethod) {
                            var s = parseFloat(r.marginRight);
                            t.style.marginRight = "".concat(s + i, "px")
                        } else if ("width" === v.fillGapMethod) t.style.width = "calc(100% - ".concat(i, "px)");
                        else if ("max-width" === v.fillGapMethod) t.style.maxWidth = "calc(100% - ".concat(i, "px)");
                        else if ("padding" === v.fillGapMethod) {
                            var l = parseFloat(r.paddingRight);
                            t.style.paddingRight = "".concat(l + i, "px")
                        }
                    }
                },
                X = function(t) {
                    var e = document.querySelectorAll(t);
                    r(e, (function(t) {
                        Y(t)
                    }))
                },
                Y = function(t) {
                    if (o(t) && "true" === t.getAttribute("data-scroll-lock-filled-gap")) {
                        var e = t.getAttribute("data-scroll-lock-current-fill-gap-method");
                        t.removeAttribute("data-scroll-lock-filled-gap"), t.removeAttribute("data-scroll-lock-current-fill-gap-method"), "margin" === e ? t.style.marginRight = "" : "width" === e ? t.style.width = "" : "max-width" === e ? t.style.maxWidth = "" : "padding" === e && (t.style.paddingRight = "")
                    }
                };
            "undefined" != typeof window && window.addEventListener("resize", (function(t) {
                z()
            })), "undefined" != typeof document && (document.addEventListener("touchstart", (function(t) {
                v.scroll || (v.startTouchY = t.touches[0].clientY, v.startTouchX = t.touches[0].clientX)
            })), document.addEventListener("touchmove", (function(t) {
                if (!v.scroll) {
                    var e = v.startTouchY,
                        i = v.startTouchX,
                        n = t.touches[0].clientY,
                        o = t.touches[0].clientX;
                    if (t.touches.length < 2) {
                        var r = a(v.scrollableSelectors),
                            s = e < n,
                            l = n < e,
                            d = i < o,
                            g = o < i,
                            y = e + 3 < n,
                            b = n < e - 3,
                            w = i + 3 < o,
                            S = o < i - 3;
                        ! function e(i) {
                            var n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                            if (i) {
                                var o = c(i, r, !1);
                                if (u(i, 'input[type="range"]')) return !1;
                                if (n || u(i, 'textarea, [contenteditable="true"]') && c(i, r) || u(i, r)) {
                                    var a = !1;
                                    f(i) && m(i) ? (s && h(i) || l && p(i)) && (a = !0) : h(i) && p(i) ? (d && f(i) || g && m(i)) && (a = !0) : (y && h(i) || b && p(i) || w && f(i) || S && m(i)) && (a = !0), a && (o ? e(o, !0) : t.preventDefault())
                                } else e(o)
                            } else t.preventDefault()
                        }(t.target)
                    }
                }
            }), {
                passive: !1
            }), document.addEventListener("touchend", (function(t) {
                v.scroll || (v.startTouchY = 0, v.startTouchX = 0)
            })));
            var Z = {
                    hide: function(t) {
                        s('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'), y(t)
                    },
                    show: function(t) {
                        s('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'), b(t)
                    },
                    toggle: function(t) {
                        s('"toggle" is deprecated! Do not use it.'), w() ? y() : b(t)
                    },
                    getState: function() {
                        return s('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'), w()
                    },
                    getWidth: function() {
                        return s('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'), k()
                    },
                    getCurrentWidth: function() {
                        return s('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'), C()
                    },
                    setScrollableTargets: function(t) {
                        s('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'), A(t)
                    },
                    setFillGapSelectors: function(t) {
                        s('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'), O(t)
                    },
                    setFillGapTargets: function(t) {
                        s('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'), D(t)
                    },
                    clearQueue: function() {
                        s('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'), S()
                    }
                },
                K = function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {},
                            n = Object.keys(i);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(i, t).enumerable
                        })))), n.forEach((function(e) {
                            var n, o, r;
                            n = t, r = i[o = e], o in n ? Object.defineProperty(n, o, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : n[o] = r
                        }))
                    }
                    return t
                }({
                    disablePageScroll: y,
                    enablePageScroll: b,
                    getScrollState: w,
                    clearQueueScrollLocks: S,
                    getTargetScrollBarWidth: x,
                    getCurrentTargetScrollBarWidth: E,
                    getPageScrollBarWidth: k,
                    getCurrentPageScrollBarWidth: C,
                    addScrollableSelector: P,
                    removeScrollableSelector: T,
                    addScrollableTarget: A,
                    removeScrollableTarget: L,
                    addLockableSelector: I,
                    addLockableTarget: _,
                    addFillGapSelector: O,
                    removeFillGapSelector: M,
                    addFillGapTarget: D,
                    removeFillGapTarget: F,
                    setFillGapMethod: q,
                    refillGaps: z,
                    _state: v
                }, Z);
            e.default = K
        }]).default
    })),
    function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).Sqrl = {})
    }(this, (function(t) {
        "use strict";

        function e(t) {
            var i, n, o = new Error(t);
            return i = o, n = e.prototype, Object.setPrototypeOf ? Object.setPrototypeOf(i, n) : i.__proto__ = n, o
        }

        function i(t, i, n) {
            var o = i.slice(0, n).split(/\n/),
                r = o.length,
                s = o[r - 1].length + 1;
            throw e(t += " at line " + r + " col " + s + ":\n\n  " + i.split(/\n/)[r - 1] + "\n  " + Array(s).join(" ") + "^")
        }
        e.prototype = Object.create(Error.prototype, {
            name: {
                value: "Squirrelly Error",
                enumerable: !1
            }
        });
        var n = new Function("return this")().Promise,
            o = !1;
        try {
            o = new Function("return (async function(){}).constructor")()
        } catch (t) {
            if (!(t instanceof SyntaxError)) throw t
        }

        function r(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }

        function s(t, e, i) {
            for (var n in e) r(e, n) && (null == e[n] || "object" != typeof e[n] || "storage" !== n && "prefixes" !== n || i ? t[n] = e[n] : t[n] = s({}, e[n]));
            return t
        }
        var a = /^async +/,
            l = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,
            c = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,
            u = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g,
            d = /[.*+\-?^${}()|[\]\\]/g;

        function h(t) {
            return d.test(t) ? t.replace(d, "\\$&") : t
        }

        function p(t, n) {
            n.rmWhitespace && (t = t.replace(/[\r\n]+/g, "\n").replace(/^\s+|\s+$/gm, "")), l.lastIndex = 0, c.lastIndex = 0, u.lastIndex = 0;
            var o = n.prefixes,
                r = [o.h, o.b, o.i, o.r, o.c, o.e].reduce((function(t, e) {
                    return t && e ? t + "|" + h(e) : e ? h(e) : t
                }), ""),
                s = new RegExp("([|()]|=>)|('|\"|`|\\/\\*)|\\s*((\\/)?(-|_)?" + h(n.tags[1]) + ")", "g"),
                d = new RegExp("([^]*?)" + h(n.tags[0]) + "(-|_)?\\s*(" + r + ")?\\s*", "g"),
                p = 0,
                f = !1;

            function m(e, o) {
                var r, h = {
                        f: []
                    },
                    m = 0,
                    g = "c";

                function v(e) {
                    var o = t.slice(p, e),
                        r = o.trim();
                    if ("f" === g) "safe" === r ? h.raw = !0 : n.async && a.test(r) ? (r = r.replace(a, ""), h.f.push([r, "", !0])) : h.f.push([r, ""]);
                    else if ("fp" === g) h.f[h.f.length - 1][1] += r;
                    else if ("err" === g) {
                        if (r) {
                            var s = o.search(/\S/);
                            i("invalid syntax", t, p + s)
                        }
                    } else h[g] = r;
                    p = e + 1
                }
                for ("h" === o || "b" === o || "c" === o ? g = "n" : "r" === o && (h.raw = !0, o = "i"), s.lastIndex = p; null !== (r = s.exec(t));) {
                    var y = r[1],
                        b = r[2],
                        w = r[3],
                        S = r[4],
                        x = r[5],
                        E = r.index;
                    if (y) "(" === y ? (0 === m && ("n" === g ? (v(E), g = "p") : "f" === g && (v(E), g = "fp")), m++) : ")" === y ? 0 == --m && "c" !== g && (v(E), g = "err") : 0 === m && "|" === y ? (v(E), g = "f") : "=>" === y && (v(E), p += 1, g = "res");
                    else if (b)
                        if ("/*" === b) {
                            var k = t.indexOf("*/", s.lastIndex); - 1 === k && i("unclosed comment", t, r.index), s.lastIndex = k + 2
                        } else "'" === b ? (c.lastIndex = r.index, c.exec(t) ? s.lastIndex = c.lastIndex : i("unclosed string", t, r.index)) : '"' === b ? (u.lastIndex = r.index, u.exec(t) ? s.lastIndex = u.lastIndex : i("unclosed string", t, r.index)) : "`" === b && (l.lastIndex = r.index, l.exec(t) ? s.lastIndex = l.lastIndex : i("unclosed string", t, r.index));
                    else if (w) return v(E), p = E + r[0].length, d.lastIndex = p, f = x, S && "h" === o && (o = "s"), h.t = o, h
                }
                return i("unclosed tag", t, e), h
            }
            var g = function r(s, l) {
                s.b = [], s.d = [];
                var c, u = !1,
                    h = [];

                function g(t, e) {
                    t && (t = function(t, e, i, n) {
                        var o, r;
                        return "string" == typeof e.autoTrim ? o = r = e.autoTrim : Array.isArray(e.autoTrim) && (o = e.autoTrim[1], r = e.autoTrim[0]), (i || !1 === i) && (o = i), (n || !1 === n) && (r = n), "slurp" === o && "slurp" === r ? t.trim() : ("_" === o || "slurp" === o ? t = String.prototype.trimLeft ? t.trimLeft() : t.replace(/^[\s\uFEFF\xA0]+/, "") : "-" !== o && "nl" !== o || (t = t.replace(/^(?:\n|\r|\r\n)/, "")), "_" === r || "slurp" === r ? t = String.prototype.trimRight ? t.trimRight() : t.replace(/[\s\uFEFF\xA0]+$/, "") : "-" !== r && "nl" !== r || (t = t.replace(/(?:\n|\r|\r\n)$/, "")), t)
                    }(t, n, f, e)) && (t = t.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), h.push(t))
                }
                for (; null !== (c = d.exec(t));) {
                    var v, y = c[1],
                        b = c[2],
                        w = c[3] || "";
                    for (var S in o)
                        if (o[S] === w) {
                            v = S;
                            break
                        } g(y, b), p = c.index + c[0].length, v || i("unrecognized tag type: " + w, t, p);
                    var x = m(c.index, v),
                        E = x.t;
                    if ("h" === E) {
                        var k = x.n || "";
                        n.async && a.test(k) && (x.a = !0, x.n = k.replace(a, "")), x = r(x), h.push(x)
                    } else if ("c" === E) {
                        if (s.n === x.n) return u ? (u.d = h, s.b.push(u)) : s.d = h, s;
                        i("Helper start and end don't match", t, c.index + c[0].length)
                    } else if ("b" === E) {
                        u ? (u.d = h, s.b.push(u)) : s.d = h;
                        var C = x.n || "";
                        n.async && a.test(C) && (x.a = !0, x.n = C.replace(a, "")), u = x, h = []
                    } else if ("s" === E) {
                        var A = x.n || "";
                        n.async && a.test(A) && (x.a = !0, x.n = A.replace(a, "")), h.push(x)
                    } else h.push(x)
                }
                if (!l) throw e('unclosed helper "' + s.n + '"');
                return g(t.slice(p, t.length), !1), s.d = h, s
            }({
                f: []
            }, !0);
            if (n.plugins)
                for (var v = 0; v < n.plugins.length; v++) {
                    var y = n.plugins[v];
                    y.processAST && (g.d = y.processAST(g.d, n))
                }
            return g.d
        }

        function f(t, e) {
            var i = p(t, e),
                n = "var tR='';" + (e.useWith ? "with(" + e.varName + "||{}){" : "") + b(i, e) + "if(cb){cb(null,tR)} return tR" + (e.useWith ? "}" : "");
            if (e.plugins)
                for (var o = 0; o < e.plugins.length; o++) {
                    var r = e.plugins[o];
                    r.processFnString && (n = r.processFnString(n, e))
                }
            return n
        }

        function m(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i][0],
                    o = e[i][1];
                t = (e[i][2] ? "await " : "") + "c.l('F','" + n + "')(" + t, o && (t += "," + o), t += ")"
            }
            return t
        }

        function g(t, e, i, n, o, r) {
            var s = "{exec:" + (o ? "async " : "") + y(i, e, t) + ",params:[" + n + "]";
            return r && (s += ",name:'" + r + "'"), o && (s += ",async:true"), s + "}"
        }

        function v(t, e) {
            for (var i = "[", n = 0; n < t.length; n++) {
                var o = t[n];
                i += g(e, o.res || "", o.d, o.p || "", o.a, o.n), n < t.length && (i += ",")
            }
            return i + "]"
        }

        function y(t, e, i) {
            return "function(" + e + "){var tR='';" + b(t, i) + "return tR}"
        }

        function b(t, e) {
            for (var i = 0, n = t.length, o = ""; i < n; i++) {
                var r = t[i];
                if ("string" == typeof r) o += "tR+='" + r + "';";
                else {
                    var s = r.t,
                        a = r.c || "",
                        l = r.f,
                        c = r.n || "",
                        u = r.p || "",
                        d = r.res || "",
                        h = r.b,
                        p = !!r.a;
                    if ("i" === s) {
                        e.defaultFilter && (a = "c.l('F','" + e.defaultFilter + "')(" + a + ")");
                        var f = m(a, l);
                        !r.raw && e.autoEscape && (f = "c.l('F','e')(" + f + ")"), o += "tR+=" + f + ";"
                    } else if ("h" === s)
                        if (e.storage.nativeHelpers.get(c)) o += e.storage.nativeHelpers.get(c)(r, e);
                        else {
                            var y = (p ? "await " : "") + "c.l('H','" + c + "')(" + g(e, d, r.d, u, p);
                            y += h ? "," + v(h, e) : ",[]", o += "tR+=" + m(y += ",c)", l) + ";"
                        }
                    else "s" === s ? o += "tR+=" + m((p ? "await " : "") + "c.l('H','" + c + "')({params:[" + u + "]},[],c)", l) + ";" : "e" === s && (o += a + "\n")
                }
            }
            return o
        }
        var w = function() {
                function t(t) {
                    this.cache = t
                }
                return t.prototype.define = function(t, e) {
                    this.cache[t] = e
                }, t.prototype.get = function(t) {
                    return this.cache[t]
                }, t.prototype.remove = function(t) {
                    delete this.cache[t]
                }, t.prototype.reset = function() {
                    this.cache = {}
                }, t.prototype.load = function(t) {
                    s(this.cache, t, !0)
                }, t
            }(),
            S = new w({});

        function x(t, i, n, o) {
            if (i && i.length > 0) throw e((o ? "Native" : "") + "Helper '" + t + "' doesn't accept blocks");
            if (n && n.length > 0) throw e((o ? "Native" : "") + "Helper '" + t + "' doesn't accept filters")
        }
        var E = new w({
                each: function(t, e) {
                    var i = "",
                        n = t.params[0];
                    if (x("each", e, !1), t.async) return new Promise((function(e) {
                        ! function t(e, i, n, o, r) {
                            n(e[i], i).then((function(s) {
                                o += s, i === e.length - 1 ? r(o) : t(e, i + 1, n, o, r)
                            }))
                        }(n, 0, t.exec, i, e)
                    }));
                    for (var o = 0; o < n.length; o++) i += t.exec(n[o], o);
                    return i
                },
                foreach: function(t, e) {
                    var i = t.params[0];
                    if (x("foreach", e, !1), t.async) return new Promise((function(e) {
                        ! function t(e, i, n, o, r, s) {
                            o(i[n], e[i[n]]).then((function(a) {
                                r += a, n === i.length - 1 ? s(r) : t(e, i, n + 1, o, r, s)
                            }))
                        }(i, Object.keys(i), 0, t.exec, "", e)
                    }));
                    var n = "";
                    for (var o in i) r(i, o) && (n += t.exec(o, i[o]));
                    return n
                },
                include: function(t, i, n) {
                    x("include", i, !1);
                    var o = n.storage.templates.get(t.params[0]);
                    if (!o) throw e('Could not fetch template "' + t.params[0] + '"');
                    return o(t.params[1], n)
                },
                extends: function(t, i, n) {
                    var o = t.params[1] || {};
                    o.content = t.exec();
                    for (var r = 0; r < i.length; r++) {
                        var s = i[r];
                        o[s.name] = s.exec()
                    }
                    var a = n.storage.templates.get(t.params[0]);
                    if (!a) throw e('Could not fetch template "' + t.params[0] + '"');
                    return a(o, n)
                },
                useScope: function(t, e) {
                    return x("useScope", e, !1), t.exec(t.params[0])
                }
            }),
            k = new w({
                if: function(t, e) {
                    x("if", !1, t.f, !0);
                    var i = "if(" + t.p + "){" + b(t.d, e) + "}";
                    if (t.b)
                        for (var n = 0; n < t.b.length; n++) {
                            var o = t.b[n];
                            "else" === o.n ? i += "else{" + b(o.d, e) + "}" : "elif" === o.n && (i += "else if(" + o.p + "){" + b(o.d, e) + "}")
                        }
                    return i
                },
                try: function(t, i) {
                    if (x("try", !1, t.f, !0), !t.b || 1 !== t.b.length || "catch" !== t.b[0].n) throw e("native helper 'try' only accepts 1 block, 'catch'");
                    var n = "try{" + b(t.d, i) + "}",
                        o = t.b[0];
                    return n + "catch" + (o.res ? "(" + o.res + ")" : "") + "{" + b(o.d, i) + "}"
                },
                block: function(t, e) {
                    return x("block", t.b, t.f, !0), "if(!" + e.varName + "[" + t.p + "]){tR+=(" + y(t.d, "", e) + ")()}else{tR+=" + e.varName + "[" + t.p + "]}"
                }
            }),
            C = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };

        function A(t) {
            return C[t]
        }
        var L = new w({
                e: function(t) {
                    var e = String(t);
                    return /[&<>"']/.test(e) ? e.replace(/[&<>"']/g, A) : e
                }
            }),
            P = {
                varName: "it",
                autoTrim: [!1, "nl"],
                autoEscape: !0,
                defaultFilter: !1,
                tags: ["{{", "}}"],
                l: function(t, i) {
                    if ("H" === t) {
                        var n = this.storage.helpers.get(i);
                        if (n) return n;
                        throw e("Can't find helper '" + i + "'")
                    }
                    if ("F" === t) {
                        var o = this.storage.filters.get(i);
                        if (o) return o;
                        throw e("Can't find filter '" + i + "'")
                    }
                },
                async: !1,
                storage: {
                    helpers: E,
                    nativeHelpers: k,
                    filters: L,
                    templates: S
                },
                prefixes: {
                    h: "@",
                    b: "#",
                    i: "",
                    r: "*",
                    c: "/",
                    e: "!"
                },
                cache: !1,
                plugins: [],
                useWith: !1
            };

        function T(t, e) {
            var i = {};
            return s(i, P), e && s(i, e), t && s(i, t), i.l.bind(i), i
        }

        function _(t, i) {
            var n = T(i || {}),
                r = Function;
            if (n.async) {
                if (!o) throw e("This environment doesn't support async/await");
                r = o
            }
            try {
                return new r(n.varName, "c", "cb", f(t, n))
            } catch (i) {
                throw i instanceof SyntaxError ? e("Bad template syntax\n\n" + i.message + "\n" + Array(i.message.length + 1).join("=") + "\n" + f(t, n)) : i
            }
        }

        function I(t, e) {
            var i;
            return e.cache && e.name && e.storage.templates.get(e.name) ? e.storage.templates.get(e.name) : (i = "function" == typeof t ? t : _(t, e), e.cache && e.name && e.storage.templates.define(e.name, i), i)
        }
        P.l.bind(P), t.compile = _, t.compileScope = b, t.compileScopeIntoFunction = y, t.compileToString = f, t.defaultConfig = P, t.filters = L, t.getConfig = T, t.helpers = E, t.nativeHelpers = k, t.parse = p, t.render = function(t, i, o, r) {
            var s = T(o || {});
            if (!s.async) return I(t, s)(i, s);
            if (!r) {
                if ("function" == typeof n) return new n((function(e, n) {
                    try {
                        e(I(t, s)(i, s))
                    } catch (t) {
                        n(t)
                    }
                }));
                throw e("Please provide a callback function, this env doesn't support Promises")
            }
            try {
                I(t, s)(i, s, r)
            } catch (t) {
                return r(t)
            }
        }, t.templates = S, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }));
const throttle = (t, e) => {
    let i, n;
    return function o(...r) {
        const s = Date.now();
        n = clearTimeout(n), !i || s - i >= e ? (t.apply(null, r), i = s) : n = setTimeout(o.bind(null, ...r), e - (s - i))
    }
};

function preload(t, e) {
    "string" == typeof t && (t = [t]);
    for (let i = 0; i < t.length; i++) {
        loadImage(getSizedImageUrl(t[i], e))
    }
}

function loadImage(t) {
    (new Image).src = t
}

function imageSize(t) {
    const e = t.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);
    return e ? e[1] : null
}

function getSizedImageUrl(t, e) {
    if (null === e) return t;
    if ("master" === e) return removeProtocol(t);
    const i = t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
    if (i) {
        const n = t.split(i[0]),
            o = i[0];
        return removeProtocol(`${n[0]}_${e}${o}`)
    }
    return null
}

function removeProtocol(t) {
    return t.replace(/http(s)?:/, "")
}
var images = Object.freeze({
    __proto__: null,
    preload: preload,
    loadImage: loadImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
});

function loadYoutubeAPI() {
    if (!isYoutubeAPILoaded) {
        var t = document.createElement("script");
        t.src = "https://www.youtube.com/iframe_api";
        var e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(t, e)
    }
}

function onYouTubeIframeAPIReady() {
    window.isYoutubeAPILoaded = !0, document.dispatchEvent(new CustomEvent("youtubeAPIReady"), {
        bubbles: !0
    })
}
PaloAlto.ThemeProduct = {
    getVariantFromId: function(t, e) {
        if (this._validateProductStructure(t), "number" != typeof e) throw new TypeError(e + " is not a Number.");
        return t.variants.filter((function(t) {
            return t.id === e
        }))[0] || null
    },
    getVariantFromSerializedArray: function(t, e) {
        this._validateProductStructure(t);
        var i = this._createOptionArrayFromOptionCollection(t, e);
        return this.getVariantFromOptionArray(t, i)
    },
    getVariantFromOptionArray: function(t, e) {
        return this._validateProductStructure(t), this._validateOptionsArray(e), t.variants.filter((function(t) {
            return e.every((function(e, i) {
                return t.options[i] === e
            }))
        }))[0] || null
    },
    _createOptionArrayFromOptionCollection: function(t, e) {
        this._validateProductStructure(t), this._validateSerializedArray(e);
        var i = [];
        return e.forEach((function(e) {
            for (var n = 0; n < t.options.length; n++) {
                if ((t.options[n].name || t.options[n]).toLowerCase() === e.name.toLowerCase()) {
                    i[n] = e.value;
                    break
                }
            }
        })), i
    },
    _validateProductStructure: function(t) {
        if ("object" != typeof t) throw new TypeError(t + " is not an object.");
        if (0 === Object.keys(t).length && t.constructor === Object) throw new Error(t + " is empty.")
    },
    _validateSerializedArray: function(t) {
        if (!Array.isArray(t)) throw new TypeError(t + " is not an array.");
        if (0 === t.length) throw new Error(t + " is empty.");
        if (!t[0].hasOwnProperty("name")) throw new Error(t[0] + "does not contain name key.");
        if ("string" != typeof t[0].name) throw new TypeError("Invalid value type passed for name of option " + t[0].name + ". Value should be string.")
    },
    _validateOptionsArray: function(t) {
        if (Array.isArray(t) && "object" == typeof t[0]) throw new Error(t + "is not a valid array of options.")
    }
}, PaloAlto.ProductForm = function() {
    const t = '[name="id"]',
        e = '[name="selling_plan"]',
        i = '[name^="options"]',
        n = '[name="quantity"]',
        o = '[name^="properties"]';

    function r(r, s, a) {
        this.element = r, this.form = "FORM" == this.element.tagName ? this.element : this.element.querySelector("form"), this.product = this._validateProductObject(s), this.variantElement = this.element.querySelector(t), a = a || {}, PaloAlto.Listeners.add(this.element, "submit", this._onSubmit.bind(this, a)), this.optionInputs = this._initInputs(i, a.onOptionChange), this.planInputs = this._initInputs(e, a.onPlanChange), this.quantityInputs = this._initInputs(n, a.onQuantityChange), this.propertyInputs = this._initInputs(o, a.onPropertyChange)
    }
    return r.prototype = $.extend({}, r.prototype, {
        destroy() {
            PaloAlto.Listeners.removeAll()
        },
        options() {
            return this._serializeInputValues(this.optionInputs, (function(t) {
                return t.name = /(?:^(options\[))(.*?)(?:\])/.exec(t.name)[2], t
            }))
        },
        variant() {
            const t = this.options();
            return t.length ? PaloAlto.ThemeProduct.getVariantFromSerializedArray(this.product, t) : this.product.variants[0]
        },
        plan(t) {
            let e = {
                allocation: null,
                group: null,
                detail: null
            };
            const i = new FormData(this.form).get("selling_plan");
            return i && t && (e.allocation = t.selling_plan_allocations.find((function(t) {
                return t.selling_plan_id.toString() === i.toString()
            }))), e.allocation && (e.group = this.product.selling_plan_groups.find((function(t) {
                return t.id.toString() === e.allocation.selling_plan_group_id.toString()
            }))), e.group && (e.detail = e.group.selling_plans.find((function(t) {
                return t.id.toString() === i.toString()
            }))), e && e.allocation && e.detail && e.allocation ? e : null
        },
        properties() {
            return this._serializeInputValues(this.propertyInputs, (function(t) {
                return t.name = /(?:^(properties\[))(.*?)(?:\])/.exec(t.name)[2], t
            }))
        },
        quantity() {
            return this.quantityInputs[0] ? Number.parseInt(this.quantityInputs[0].value, 10) : 1
        },
        getFormState() {
            const t = this.variant();
            return {
                options: this.options(),
                variant: t,
                properties: this.properties(),
                quantity: this.quantity(),
                plan: this.plan(t)
            }
        },
        _setIdInputValue(t) {
            t && t.id ? this.variantElement.value = t.id.toString() : this.variantElement.value = "", this.variantElement.dispatchEvent(new Event("change"))
        },
        _onSubmit(t, e) {
            e.dataset = this.getFormState(), t.onFormSubmit && t.onFormSubmit(e)
        },
        _onOptionChange(t) {
            this._setIdInputValue(t.dataset.variant)
        },
        _onFormEvent(t) {
            return void 0 === t ? Function.prototype.bind() : function(e) {
                e.dataset = this.getFormState(), this._setIdInputValue(e.dataset.variant), t(e)
            }.bind(this)
        },
        _initInputs(t, e) {
            return Array.prototype.slice.call(this.element.querySelectorAll(t)).map(function(t) {
                return PaloAlto.Listeners.add(t, "change", this._onFormEvent(e)), t
            }.bind(this))
        },
        _serializeInputValues: (t, e) => t.reduce((function(t, i) {
            return (i.checked || "radio" !== i.type && "checkbox" !== i.type) && t.push(e({
                name: i.name,
                value: i.value
            })), t
        }), []),
        _validateProductObject(t) {
            if ("object" != typeof t) throw new TypeError(t + " is not an object.");
            if (void 0 === t.variants[0].options) throw new TypeError("Product object is invalid. Make sure you use the product object that is output from {{ product | json }} or from the http://[your-product-url].js route");
            return t
        }
    }), r
}(), window.isYoutubeAPILoaded = !1, slate.a11y = {
    state: {
        firstFocusable: null,
        lastFocusable: null,
        trigger: null
    },
    pageLinkFocus: function(t) {
        var e = "js-focus-hidden";
        t.first().attr("tabIndex", "-1").focus().addClass(e).one("blur", (function() {
            t.first().removeClass(e).removeAttr("tabindex")
        }))
    },
    trapFocus: function(t) {
        var e = Array.from(t.container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex^="-"])')).filter((function(t) {
            var e = t.offsetWidth,
                i = t.offsetHeight;
            return 0 !== e && 0 !== i && "none" !== getComputedStyle(t).getPropertyValue("display")
        }));
        this.state.firstFocusable = e[0], this.state.lastFocusable = e[e.length - 1], t.elementToFocus || (t.elementToFocus = this.state.firstFocusable || t.container), t.container.setAttribute("tabindex", "-1"), t.elementToFocus.focus(), this._setupHandlers(), document.addEventListener("focusin", this._onFocusInHandler), document.addEventListener("focusout", this._onFocusOutHandler)
    },
    removeTrapFocus: function(t) {
        const e = !document.body.classList.contains("no-outline");
        t && t.container && t.container.removeAttribute("tabindex"), document.removeEventListener("focusin", this._onFocusInHandler), this.state.trigger && e && this.state.trigger.focus()
    },
    _manageFocus: function(t) {
        t.keyCode === slate.utils.keyboardKeys.TAB && (t.target !== this.state.lastFocusable || t.shiftKey || (t.preventDefault(), this.state.firstFocusable.focus()), t.target === this.state.firstFocusable && t.shiftKey && (t.preventDefault(), this.state.lastFocusable.focus()))
    },
    _onFocusOut: function() {
        document.removeEventListener("keydown", this._manageFocusHandler)
    },
    _onFocusIn: function(t) {
        t.target !== this.state.lastFocusable && t.target !== this.state.firstFocusable || document.addEventListener("keydown", this._manageFocusHandler)
    },
    _setupHandlers: function() {
        this._onFocusInHandler || (this._onFocusInHandler = this._onFocusIn.bind(this)), this._onFocusOutHandler || (this._onFocusOutHandler = this._onFocusIn.bind(this)), this._manageFocusHandler || (this._manageFocusHandler = this._manageFocus.bind(this))
    }
}, slate.Currency = {
    formatMoney: function(t, e) {
        "string" == typeof t && (t = t.replace(".", ""));
        var i = "",
            n = /\{\{\s*(\w+)\s*\}\}/,
            o = e || "${{amount}}";

        function r(t, e, i, n) {
            if (i = i || ",", n = n || ".", isNaN(t) || null === t) return 0;
            var o = (t = (t / 100).toFixed(e)).split(".");
            return o[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i) + (o[1] ? n + o[1] : "")
        }
        switch (o.match(n)[1]) {
            case "amount":
                i = r(t, 2);
                break;
            case "amount_no_decimals":
                i = r(t, 0);
                break;
            case "amount_with_comma_separator":
                i = r(t, 2, ".", ",");
                break;
            case "amount_no_decimals_with_comma_separator":
                i = r(t, 0, ".", ",");
                break;
            case "amount_no_decimals_with_space_separator":
                i = r(t, 0, " ");
                break;
            case "amount_with_apostrophe_separator":
                i = r(t, 2, "'")
        }
        return o.replace(n, i)
    }
}, slate.utils = {
    findInstance: function(t, e, i) {
        for (var n = 0; n < t.length; n++)
            if (t[n][e] === i) return t[n]
    },
    removeInstance: function(t, e, i) {
        for (var n = t.length; n--;)
            if (t[n][e] === i) {
                t.splice(n, 1);
                break
            } return t
    },
    compact: function(t) {
        for (var e = -1, i = null == t ? 0 : t.length, n = 0, o = []; ++e < i;) {
            var r = t[e];
            r && (o[n++] = r)
        }
        return o
    },
    defaultTo: function(t, e) {
        return null == t || t != t ? e : t
    },
    keyboardKeys: {
        TAB: 9,
        ENTER: 13,
        ESCAPE: 27,
        SPACE: 32,
        LEFTARROW: 37,
        RIGHTARROW: 39
    }
}, PaloAlto.CartDrawer = function() {
    const t = {
            cartDrawerEnabled: "drawer" === window.theme.settings.cartType,
            timers: {
                addProductTimeout: 1e3
            },
            isQuickViewEnabled: "view" == theme.settings.quickButton
        },
        e = "[data-section-id]",
        i = "[data-additional-checkout-button]",
        n = "[data-api-content]",
        o = "[data-add-to-cart]",
        r = "[data-cart-error-close]",
        s = "[data-cart-drawer]",
        a = "[data-cart-drawer-template]",
        l = "[data-cart-drawer-toggle]",
        c = "[data-cart-drawer-body]",
        u = "[data-cart-errors]",
        d = "[data-cart-form]",
        h = "[data-cart-acceptance-checkbox]",
        p = "[data-cart-checkout-buttons]",
        f = "[data-cart-checkout-button]",
        m = "[data-cart-total-discount]",
        g = "[data-item-remove]",
        v = "[data-quantity-field]",
        y = "[data-cart-items-qty]",
        b = "[data-cart-total]",
        w = "[data-cart-message]",
        S = "[data-message-default]",
        x = "[data-cart-message-progress]",
        E = "[data-cart-original-total]",
        k = "[data-cart-original-total-price]",
        C = "[data-cart-discounts-holder]",
        A = "[data-empty-message]",
        L = "[data-foot-holder]",
        P = "[data-cart-item]",
        T = "[data-items-holder]",
        _ = "[data-items-wrapper]",
        I = "[data-close-error]",
        q = "[data-cart-errors-container]",
        D = "[data-upsell-holder]",
        F = "[data-error-message]",
        O = "[data-terms-error-message]",
        M = "[data-pair-products-holder]",
        z = "[data-pair-products]",
        j = "[data-pair-products-script]",
        N = "[data-skip-pair-product]",
        H = "data-product-id",
        B = "[data-left-to-spend]",
        W = "[data-quickbuy-form]",
        R = "[data-product-media-container]",
        V = ".mfp-content",
        U = "hidden",
        G = "is-hidden",
        X = "js-drawer-open-cart",
        Y = "is-open",
        Z = "is-visible",
        K = "is-loading",
        Q = "is-disabled",
        J = "is-success",
        tt = "cart__toggle--has-items",
        et = "data-limit",
        it = "data-cart-message",
        nt = "aria-expanded",
        ot = "disabled",
        rt = "value",
        st = "data-id",
        at = "data-upsell-btn",
        lt = "data-cart-errors-container-quickbuy";

    function ct() {
        "/password" !== window.location.pathname && this.init()
    }
    return ct.prototype = $.extend({}, ct.prototype, {
        init() {
            this.cartToggleButtons = document.querySelectorAll(l), this.cartDrawer = document.querySelector(s), this.assignArguments(), this.form = null, this.build = this.build.bind(this), this.addToCart = this.addToCart.bind(this), this.updateCart = this.updateCart.bind(this), this.openCartDrawer = this.openCartDrawer.bind(this), this.closeCartDrawer = this.closeCartDrawer.bind(this), this.toggleCartDrawer = this.toggleCartDrawer.bind(this), this.formSubmitHandler = throttle(this.formSubmitHandler.bind(this), 50), this.closeCartError = PaloAlto.debounce((() => PaloAlto.Slide.up(this.cartErrorHolder, 400)), 250), this.cartDrawerCloseEvent = null, this.errorTimer = 0, this.hasItemsInCart = this.hasItemsInCart.bind(this), this.toggleClassesOnContainers = this.toggleClassesOnContainers.bind(this), this.totalItems = 0, this.isCartDrawerOpen = !1, this.isCartDrawerLoaded = !1, this.cartDiscounts = 0, this.cartDrawerEnabled = t.cartDrawerEnabled, this.cartLimitErrorIsHidden = !0, this.cartEvents(), this.cartAddEvent(), this.cartDrawerToggleEvents(), this.initQuantity(), this.pairWithArray = window.pairWithProducts, this.sessionStorage = window.sessionStorage, this.getPairProducts(), this.renderPairProducts(), this.pairProductSkipEvent(), document.addEventListener("theme:upsell:unavailable", (() => {
                this.checkPairProductIsSoldOut()
            }))
        },
        assignArguments() {
            this.cartDrawerBody = document.querySelector(c), this.emptyMessage = document.querySelector(A), this.buttonHolder = document.querySelector(L), this.itemsHolder = document.querySelector(T), this.cartItemsQty = document.querySelector(y), this.itemsWrapper = document.querySelector(_), this.items = document.querySelectorAll(P), this.cartTotal = document.querySelector(b), this.cartMessage = document.querySelectorAll(w), this.cartOriginalTotal = document.querySelector(E), this.cartOriginalTotalPrice = document.querySelector(k), this.cartTotalDiscountTemplate = document.querySelector(m).innerHTML, this.cartErrorHolder = document.querySelector(u), this.cartCloseErrorMessage = document.querySelector(r), this.pairProductsHolder = document.querySelector(M), this.pairProducts = document.querySelector(z), this.cartTermsCheckbox = document.querySelector(h), this.cartCheckoutButtonWrapper = document.querySelector(p), this.cartCheckoutButton = document.querySelector(f), this.cartForm = document.querySelector(d), this.cartMessage.length > 0 && (this.cartFreeLimitShipping = 100 * Number(this.cartMessage[0].getAttribute(et)), this.subtotal = 0)
        },
        initQuantity() {
            this.items = document.querySelectorAll(P), this.items.length && this.items.forEach((t => {
                new PaloAlto.QuantityCounter(t, !0).init(), this.customEventsHandle(t)
            }))
        },
        customEventsHandle(t) {
            t.addEventListener("theme:cart:update", PaloAlto.debounce((e => {
                this.updateCart({
                    id: e.detail.id,
                    quantity: e.detail.quantity
                }, t, e.detail.valueIsEmpty)
            }), 250))
        },
        cartEvents() {
            const t = document.querySelectorAll(g);
            t.length && (this.totalItems = t.length, t.forEach((t => {
                t.addEventListener("click", (e => {
                    e.preventDefault(), this.updateCart({
                        id: t.getAttribute(st),
                        quantity: 0
                    })
                }))
            }))), this.cartCloseErrorMessage && (this.cartCloseErrorMessage.removeEventListener("click", this.closeCartError), this.cartCloseErrorMessage.addEventListener("click", this.closeCartError)), this.cartTermsCheckbox && (this.cartTermsCheckbox.removeEventListener("change", this.formSubmitHandler), this.cartCheckoutButtonWrapper.removeEventListener("click", this.formSubmitHandler), this.cartForm.removeEventListener("submit", this.formSubmitHandler), this.cartTermsCheckbox.addEventListener("change", this.formSubmitHandler), this.cartCheckoutButtonWrapper.addEventListener("click", this.formSubmitHandler), this.cartForm.addEventListener("submit", this.formSubmitHandler))
        },
        cartAddEvent() {
            document.addEventListener("click", (t => {
                const e = t.target;
                if (e.matches(o) || e.closest(o) && e) {
                    const i = e.matches(o) ? e : e.closest(o);
                    let n = "";
                    if (i.hasAttribute(H) ? n = `id=${Number(i.getAttribute(H))}` : (this.form = e.closest("form"), n = new FormData(this.form), n = new URLSearchParams(n).toString()), null !== this.form && this.form.querySelector('[type="file"]')) return;
                    if (t.preventDefault(), e.hasAttribute(ot) || e.parentNode.hasAttribute(ot)) return;
                    this.addToCart(n, i), document.dispatchEvent(new CustomEvent("theme:cart:add", {
                        bubbles: !0,
                        detail: {
                            selector: e
                        }
                    }))
                }
            }))
        },
        getCart() {
            if (this.cartDrawer && !this.isCartDrawerLoaded) {
                const t = !1;
                this.renderCartDrawer(t)
            }
            fetch(theme.routes.root + "cart.js").then(this.handleErrors).then((t => t.json())).then((t => (this.newTotalItems = t.items.length, this.buildTotalPrice(t), this.freeShippingMessageHandle(t.total_price), this.cartMessage.length > 0 && (this.subtotal = t.total_price, this.updateProgress()), fetch(theme.routes.root + "cart?section_id=api-cart-items")))).then((t => t.text())).then((t => {
                const e = document.createElement("div");
                e.innerHTML = t, e.querySelector(j) ? this.pairWithArray = JSON.parse(e.querySelector(j).innerText.split("=")[1].replace(";", "")) : this.pairWithArray = void 0, this.getPairProducts(), this.renderPairProducts(), this.pairProductSkipEvent(), this.removeLoadingClass(), this.cartToggleButtons.forEach((t => {
                    t.classList.remove(tt), this.newTotalItems > 0 && t.classList.add(tt)
                }));
                const i = e.querySelector(n).innerHTML;
                this.build(i), this.updateItemsQuantity()
            })).catch((t => console.log(t)))
        },
        addToCart(e, i = null) {
            this.cartDrawerEnabled && i && i.classList.add(K), fetch(theme.routes.root + "cart/add.js", {
                method: "POST",
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: e
            }).then((t => t.json())).then((e => {
                if (i && i.setAttribute(ot, ot), this.addLoadingClass(), e.status) return this.addToCartError(e, i), void this.removeLoadingClass();
                this.cartDrawerEnabled ? (this.getCart(), null !== i && (i.classList.remove(K), i.removeAttribute(ot), i.classList.add(J), t.isQuickViewEnabled && i.closest(V) && $.magnificPopup.close(), i.closest(M) && setTimeout((() => {
                    i.classList.remove(J)
                }), 2 * t.timers.addProductTimeout))) : window.location = theme.routes.cart_url
            })).catch((t => console.log(t)))
        },
        updateCart(t = {}, e = null, i = !1) {
            let n = null,
                o = null,
                r = null,
                s = t.quantity;
            this.addLoadingClass(), this.items.forEach((t => {
                t.classList.add(Q), t.querySelector("input").blur(), t.querySelectorAll("input, button").forEach((t => {
                    t.setAttribute("disabled", !0)
                }))
            })), fetch(theme.routes.root + "cart.js").then(this.handleErrors).then((t => t.json())).then((e => {
                const i = e.items.findIndex((e => e.key === t.id));
                o = e.item_count, r = e.items[i].title;
                const n = {
                    line: `${i+1}`,
                    quantity: s
                };
                return fetch(theme.routes.root + "cart/change.js", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(n)
                })
            })).then(this.handleErrors).then((t => t.json())).then((t => {
                n = t.item_count, i && (s = 1), 0 !== s && (this.cartLimitErrorIsHidden = n !== o, this.toggleLimitError(r)), this.buildTotalPrice(t), this.freeShippingMessageHandle(t.total_price), this.cartDiscounts = t.total_discount, this.updateItemsQuantity(n), this.cartMessage.length > 0 && (this.subtotal = t.total_price, this.updateProgress()), this.getCart()
            })).catch((t => console.log(t)))
        },
        toggleLimitError(t) {
            this.cartErrorHolder.querySelector(F).innerText = t, this.cartLimitErrorIsHidden ? PaloAlto.Slide.up(this.cartErrorHolder, 400) : PaloAlto.Slide.down(this.cartErrorHolder, 400)
        },
        handleErrors: t => t.ok ? t : t.json().then((function(e) {
            throw new PaloAlto.FetchError({
                status: t.statusText,
                headers: t.headers,
                json: e
            })
        })),
        addToCartError(t, i) {
            this.cartDrawerEnabled && i && null !== i.closest(s) && !i.closest(s) && this.closeCartDrawer();
            let n = i.closest(e);
            n || (n = i.closest(z));
            let o = n.querySelector(q);
            if (null !== i) {
                const t = i.closest(D),
                    e = i.closest(W);
                t && t.querySelector(q) && (o = t.querySelector(q)), e && e.closest(R) && (o = e.closest(R).querySelector(q)), i.classList.remove(K), i.removeAttribute(ot)
            }
            let r = document.querySelector("[data-product-select]");
            if (o && "" == r.value) {
                let t = document.querySelector(".select-popout");
                t.style.border = "2px solid #fac9d4", o.innerHTML = `<div class="errors">Please select a size<button type="button" class="product__errors__close" data-close-error>${theme.icons.closeSmall}</button></div>`, this.errorTimer && clearTimeout(this.errorTimer), this.errorTimer = setTimeout((() => {
                    o.classList.remove(Z), t.style.border = "1px solid black", setTimeout((() => {
                        o.innerHTML = ""
                    }), 300)
                }), 3e3)
            }
            o && "" != r.value && (o.classList.add(Z), o.innerHTML = `<div class="errors">${t.message}: ${t.description}<button type="button" class="product__errors__close" data-close-error>${theme.icons.closeSmall}</button></div>`, o.hasAttribute(lt) && (this.errorTimer && clearTimeout(this.errorTimer), this.errorTimer = setTimeout((() => {
                o.classList.remove(Z), setTimeout((() => {
                    o.innerHTML = ""
                }), 300)
            }), 3e3)));
            const a = document.querySelector(I);
            a && a.addEventListener("click", (t => {
                const e = t.target;
                (e.matches(I) || e.closest(I)) && (t.preventDefault(), this.errorTimer && clearTimeout(this.errorTimer), o.classList.remove(Z), setTimeout((() => {
                    o.innerHTML = ""
                }), 300))
            }))
        },
        renderCartDrawer(t = !0) {
            const e = document.querySelector(a);
            e && (this.cartDrawer.innerHTML = e.innerHTML, this.assignArguments(), this.initQuantity(), this.cartEvents(), this.cartDrawer.querySelector(j) && (this.pairWithArray = JSON.parse(this.cartDrawer.querySelector(j).innerText.split("=")[1].replace(";", ""))), this.getPairProducts(), this.renderPairProducts(), this.pairProductSkipEvent(), PaloAlto.initCollapsible(), this.cartDrawerToggle = this.cartDrawer.querySelector(l), this.cartDrawerToggle.addEventListener("click", this.cartDrawerToggleClickEvent), this.isCartDrawerLoaded = !0, document.dispatchEvent(new CustomEvent("theme:cart:loaded", {
                bubbles: !0
            })), t && this.openCartDrawer())
        },
        openCartDrawer() {
            this.isCartDrawerOpen || (this.isCartDrawerLoaded ? (document.dispatchEvent(new CustomEvent("theme:cart:open", {
                bubbles: !0
            })), document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
                bubbles: !0,
                detail: this.cartDrawer
            })), document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
                bubbles: !0,
                detail: this.cartDrawerBody
            })), document.body.classList.add(X), this.cartDrawer.classList.add(Y), this.cartToggleButtons.forEach((t => {
                t.setAttribute(nt, !0)
            })), slate.a11y.trapFocus({
                container: this.cartDrawer
            }), this.observeAdditionalCheckoutButtons(), this.isCartDrawerOpen = !0) : this.renderCartDrawer())
        },
        closeCartDrawer() {
            if (!this.isCartDrawerOpen) return;
            document.dispatchEvent(new CustomEvent("theme:cart:close", {
                bubbles: !0
            })), PaloAlto.Slide.up(this.cartErrorHolder, 400), slate.a11y.removeTrapFocus(), this.cartToggleButtons.forEach((t => {
                t.setAttribute(nt, !1)
            }));
            const t = document.querySelector(`[${at}].${J}`);
            t && setTimeout((() => {
                t.classList.remove(J)
            }), 2e3), document.body.classList.remove(X), this.cartDrawer.classList.remove(Y);
            document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
                bubbles: !0,
                detail: 400
            })), this.isCartDrawerOpen = !1
        },
        toggleCartDrawer() {
            this.isCartDrawerOpen ? this.closeCartDrawer() : this.openCartDrawer()
        },
        cartDrawerToggleEvents() {
            this.cartDrawer && (this.cartDrawer.addEventListener("keyup", (t => {
                t.which === slate.utils.keyboardKeys.ESCAPE && this.closeCartDrawer()
            })), this.cartDrawerToggleClickEvent = t => {
                t.preventDefault();
                const e = t.target;
                "false" === e.getAttribute(nt) && (slate.a11y.state.trigger = e), this.toggleCartDrawer()
            }, this.cartDrawerCloseEvent = t => {
                const e = t.target.matches(l),
                    i = document.querySelector(s).contains(t.target);
                e || i || this.closeCartDrawer()
            }, this.cartToggleButtons.forEach((t => {
                t.addEventListener("click", this.cartDrawerToggleClickEvent)
            })), document.addEventListener("click", this.cartDrawerCloseEvent))
        },
        toggleClassesOnContainers() {
            const t = this;
            this.emptyMessage.classList.toggle(U, t.hasItemsInCart()), this.buttonHolder.classList.toggle(U, !t.hasItemsInCart()), this.itemsHolder.classList.toggle(U, !t.hasItemsInCart()), this.cartItemsQty.classList.toggle(U, !t.hasItemsInCart())
        },
        build(t) {
            this.totalItems !== this.newTotalItems && (this.totalItems = this.newTotalItems, this.toggleClassesOnContainers()), this.itemsHolder.innerHTML = t, this.cartEvents(), this.initQuantity(), this.cartDrawer && this.openCartDrawer()
        },
        hasItemsInCart() {
            return this.totalItems > 0
        },
        buildTotalPrice(t) {
            const e = document.querySelector(C);
            if (t.original_total_price > t.total_price && t.cart_level_discount_applications.length > 0 ? (this.cartOriginalTotal.classList.remove(U), this.cartOriginalTotalPrice.innerHTML = 0 === t.original_total_price ? window.theme.strings.free : slate.Currency.formatMoney(t.original_total_price, theme.moneyFormat)) : this.cartOriginalTotal.classList.add(U), this.cartTotal.innerHTML = 0 === t.total_price ? window.theme.strings.free : slate.Currency.formatMoney(t.total_price, theme.moneyFormat), t.cart_level_discount_applications.length > 0) {
                const i = this.buildCartTotalDiscounts(t.cart_level_discount_applications);
                e.classList.remove(U), e.innerHTML = i
            } else e.classList.add(U)
        },
        buildCartTotalDiscounts(t) {
            let e = "";
            return t.forEach((t => {
                e += Sqrl.render(this.cartTotalDiscountTemplate, {
                    discountTitle: t.title,
                    discountTotalAllocatedAmount: slate.Currency.formatMoney(t.total_allocated_amount, theme.moneyFormat)
                })
            })), e
        },
        freeShippingMessageHandle(t) {
            this.cartMessage.length > 0 && document.querySelectorAll(w).forEach((e => {
                const i = e.hasAttribute(it) && "true" === e.getAttribute(it) && 0 !== t,
                    n = e.querySelector(S);
                e.classList.toggle(J, t >= this.cartFreeLimitShipping && i), e.classList.toggle(G, 0 === t), n.classList.toggle(G, t >= this.cartFreeLimitShipping)
            }))
        },
        updateProgress() {
            const t = this.subtotal / this.cartFreeLimitShipping * 100,
                e = slate.Currency.formatMoney(this.cartFreeLimitShipping - this.subtotal, theme.moneyFormat);
            this.cartMessage.length > 0 && document.querySelectorAll(w).forEach((i => {
                const n = i.querySelector(x),
                    o = i.querySelector(B);
                o && (o.innerHTML = e.replace(".00", "")), n && (n.classList.toggle(G, this.subtotal / this.cartFreeLimitShipping >= 1), n.setAttribute(rt, t))
            }))
        },
        renderPairProducts() {
            null !== this.pairProductsHolder && (void 0 === this.pairWithArray || this.pairWithArray.length <= 0 ? this.pairProductsHolder.classList.add(U) : (new PaloAlto.PairWithProduct(this.pairWithArray[0]), document.addEventListener("theme:upsell:product-error", (() => {
                this.checkPairProductIsSoldOut()
            })), this.pairProductsHolder.classList.remove(U)))
        },
        getPairProducts() {
            void 0 !== this.pairWithArray && void 0 !== this.sessionStorage && null !== this.sessionStorage.getItem("pair_products") && (this.pairWithArray = this.pairWithArray.filter((t => -1 === this.sessionStorage.getItem("pair_products").indexOf(`,${t},`))))
        },
        updateItemsQuantity(t) {
            let e = 0,
                i = theme.strings.cart_items_one,
                n = theme.strings.cart_items_many;
            i = i.split("}} ")[1], n = n.split("}} ")[1], this.cartItemsQty && (t ? this.cartItemsQty.textContent = 1 === t ? `${t} ${i}` : `${t} ${n}` : (document.querySelectorAll(v).forEach((t => {
                e += Number(t.value)
            })), this.cartItemsQty.textContent = 1 === e ? `${e} ${i}` : `${e} ${n}`), e > 0 ? $(".cart-count").text(e) : $(".cart-count").text(""))
        },
        pairProductSkipEvent() {
            null !== this.pairProductsHolder && this.pairProductsHolder.addEventListener("click", (t => {
                const e = t.target;
                (e.matches(N) || e.closest(N)) && (t.preventDefault(), void 0 !== this.sessionStorage && this.pairWithArray.length && this.sessionStorage.setItem("pair_products", null !== this.sessionStorage.getItem("pair_products") ? `${this.sessionStorage.getItem("pair_products")},${this.pairWithArray[0]},` : `,${this.pairWithArray[0]},`), this.getPairProducts(), 0 === this.pairWithArray.length ? this.pairProductsHolder.classList.add(U) : new PaloAlto.PairWithProduct(this.pairWithArray[0]))
            }))
        },
        checkPairProductIsSoldOut() {
            void 0 !== this.sessionStorage && this.pairWithArray.length && (this.sessionStorage.setItem("pair_products", null !== this.sessionStorage.getItem("pair_products") ? `${this.sessionStorage.getItem("pair_products")},${this.pairWithArray[0]},` : `,${this.pairWithArray[0]},`), this.getPairProducts(), 0 === this.pairWithArray.length ? this.pairProductsHolder.classList.add(U) : this.renderPairProducts())
        },
        observeAdditionalCheckoutButtons() {
            const t = this.cartDrawer.querySelector(i);
            if (t) {
                const e = new MutationObserver((() => {
                    slate.a11y.removeTrapFocus(), slate.a11y.trapFocus({
                        container: this.cartDrawer,
                        elementToFocus: this.cartDrawer.querySelector("a:first-child, input:first-child")
                    }), e.disconnect()
                }));
                e.observe(t, {
                    subtree: !0,
                    childList: !0
                })
            }
        },
        formSubmitHandler() {
            const t = document.querySelector(h).checked,
                e = document.querySelector(O);
            if (t) PaloAlto.Slide.up(e, 400), this.cartCheckoutButton.removeAttribute(ot);
            else {
                if (document.querySelector(O).length > 0) return;
                e.innerText = theme.strings.cart_acceptance_error, this.cartCheckoutButton.setAttribute(ot, !0), PaloAlto.Slide.down(e, 400)
            }
        },
        addLoadingClass() {
            this.cartDrawer ? this.cartDrawer.classList.add(K) : this.itemsWrapper && this.itemsWrapper.classList.add(K)
        },
        removeLoadingClass() {
            this.cartDrawer ? this.cartDrawer.classList.remove(K) : this.itemsWrapper && this.itemsWrapper.classList.remove(K)
        },
        destroy() {
            this.cartDrawerToggle && this.cartDrawerToggle.removeEventListener("click", this.cartDrawerToggleClickEvent), this.cartToggleButtons.forEach((t => {
                t.removeEventListener("click", this.cartDrawerToggleClickEvent)
            })), document.removeEventListener("click", this.cartDrawerCloseEvent)
        }
    }), ct
}(), PaloAlto.initCollapsible = function() {
    var t = "[data-collapsible-trigger-mobile]",
        e = "[data-collapsible-content]",
        i = "[data-collapsible-content-mobile]",
        n = "is-expanded",
        o = !1,
        r = 0,
        s = function(r) {
            if (r.preventDefault(), !(r.keyCode && r.keyCode !== slate.utils.keyboardKeys.ESCAPE || o)) {
                var s = window.innerWidth < theme.sizes.small,
                    l = $(this),
                    c = $(this).is(t),
                    u = $(this).attr("aria-controls"),
                    d = $("#" + u),
                    h = $(d).find(e).eq(0).outerHeight() || $(d).find(i).eq(0).outerHeight(),
                    p = $(l).hasClass(n);
                c && !s || (p || r.keyCode !== slate.utils.keyboardKeys.ESCAPE) && (o = !0, p && setTimeout((function() {
                    a(d, h = 0, p)
                }), 0), $(l).attr("aria-expanded", !p).toggleClass(n, !p), a(d, h, p))
            }
        };

    function a(t, e, i) {
        $(t).prepareTransition().css("height", e).attr("aria-hidden", i).toggleClass(n, !i), r && clearTimeout(r), 0 == e && (r = setTimeout((function() {
            $(t).css("height", "")
        }), 500)), i ? o = !1 : setTimeout((function() {
            $(t).css("height", "auto"), o = !1
        }), 500)
    }
    $("[data-collapsible-trigger]").off("click keyup").on("click keyup", s), $(t).off("click keyup").on("click keyup", s)
}, PaloAlto.flickitySmoothScrolling = function(t) {
    const e = Flickity.data(t);
    e && (e.on("dragStart", ((t, e) => {
        document.ontouchmove = function(t) {
            t.preventDefault()
        }
    })), e.on("dragEnd", ((t, e) => {
        document.ontouchmove = function(t) {
            return !0
        }
    })))
};
let screenOrientation = getScreenOrientation();

function readHeights() {
    const t = {};
    return t.windowHeight = window.innerHeight, t.footerHeight = getHeight('[data-section-type*="footer"]'), t.headerHeight = getHeight("[data-header-height]"), t.collectionStickyBarHeight = getHeight("[data-collection-sticky-bar]"), t
}

function setVarsOnResize() {
    document.addEventListener("theme:resize", resizeVars), setVars()
}

function setVars() {
    const {
        windowHeight: t,
        headerHeight: e,
        footerHeight: i,
        collectionStickyBarHeight: n
    } = readHeights();
    document.documentElement.style.setProperty("--full-height", `${t}px`), document.documentElement.style.setProperty("--header-height", `${e}px`), document.documentElement.style.setProperty("--footer-height", `${i}px`), document.documentElement.style.setProperty("--content-full", t - e + "px"), document.documentElement.style.setProperty("--content-min", t - e - i + "px"), document.documentElement.style.setProperty("--collection-sticky-bar-height", `${n}px`)
}

function resizeVars() {
    const {
        windowHeight: t,
        headerHeight: e,
        footerHeight: i,
        collectionStickyBarHeight: n
    } = readHeights(), o = getScreenOrientation();
    o !== screenOrientation && (document.documentElement.style.setProperty("--full-height", `${t}px`), screenOrientation = o), document.documentElement.style.setProperty("--header-height", `${e}px`), document.documentElement.style.setProperty("--footer-height", `${i}px`), document.documentElement.style.setProperty("--content-full", t - e + "px"), document.documentElement.style.setProperty("--content-min", t - e - i + "px"), document.documentElement.style.setProperty("--collection-sticky-bar-height", `${n}px`)
}

function getHeight(t) {
    const e = document.querySelector(t);
    return e ? e.clientHeight : 0
}

function getScreenOrientation() {
    return window.matchMedia("(orientation: portrait)").matches ? "portrait" : window.matchMedia("(orientation: landscape)").matches ? "landscape" : void 0
}

function loadingAnimation() {
    document.documentElement.classList.remove("is-loading")
}

function lazyImageBackgrounds() {
    document.addEventListener("lazyloaded", (t => {
        const e = t.target.parentNode;
        e.classList.contains("lazy-image") && setTimeout((() => {
            e.style.backgroundImage = "none"
        }), 500)
    }))
}

function PopupCookie(t, e) {
    this.configuration = {
        expires: null,
        path: "/",
        domain: window.location.hostname
    }, this.name = t, this.value = e
}

function dispatchResizeEvent() {
    document.dispatchEvent(new CustomEvent("theme:resize", {
        bubbles: !0
    })), window.lastWindowWidth !== window.innerWidth && (document.dispatchEvent(new CustomEvent("theme:resize:width", {
        bubbles: !0
    })), window.lastWindowWidth = window.innerWidth)
}

function resizeListener() {
    window.addEventListener("resize", PaloAlto.debounce(dispatchResizeEvent, 50))
}
PaloAlto.initFocusVisibility = function() {
    const t = "no-outline";
    document.addEventListener("keyup", (e => {
        e.keyCode === slate.utils.keyboardKeys.TAB && document.body.classList.remove(t)
    })), document.addEventListener("mousedown", (() => {
        document.body.classList.add(t)
    }))
}, PaloAlto.initTransparentHeader = function() {
    const t = "body",
        e = "[data-main]",
        i = "[data-site-header]",
        n = "[data-prevent-transparent-header]",
        o = "transparent-header",
        r = "site-header--transparent",
        s = "has-transparent-header",
        a = document.querySelector(t),
        l = a.querySelector(i),
        c = "true" === l.getAttribute("data-transparent"),
        u = a.querySelector(e).children[0];
    if (!u) return;
    const d = u.querySelector(`${n}:first-of-type`);
    isHeaderTransparent = c && u.classList.contains(o) && !d, isHeaderTransparent ? (l.classList.add(r), a.classList.add(s)) : (l.classList.remove(r), a.classList.remove(s))
}, PaloAlto.initSections = function() {
    var t = new PaloAlto.Sections;
    t.register("header", PaloAlto.Header), t.register("footer", PaloAlto.Footer), t.register("announcement-bar", PaloAlto.AnnouncementBar), t.register("article", PaloAlto.Article), t.register("product-template", PaloAlto.Product), t.register("related-products", PaloAlto.RelatedProducts), t.register("store-availability", PaloAlto.StoreAvailability), t.register("collection-template", PaloAlto.CollectionTemplate), t.register("list-collections", PaloAlto.ListCollections), t.register("featured-collection", PaloAlto.FeaturedCollection), t.register("products-list", PaloAlto.ProductsList), t.register("custom-content", PaloAlto.CustomContent), t.register("tab-collections", PaloAlto.TabCollections), t.register("featured-product", PaloAlto.Product), t.register("slider", PaloAlto.Slider), t.register("image-with-text", PaloAlto.RichText), t.register("image-accordions", PaloAlto.ImageAccordions), t.register("shoppable-blog", PaloAlto.ShoppableBlog), t.register("blog-posts", PaloAlto.BlogPosts), t.register("featured-video", PaloAlto.FeaturedVideo), t.register("logo-list", PaloAlto.LogoList), t.register("icons-row", PaloAlto.IconsRow), t.register("locations", PaloAlto.Locations), t.register("testimonials", PaloAlto.Testimonials), t.register("accordions", PaloAlto.Accordions), t.register("press", PaloAlto.Press), t.register("overlapping-images", PaloAlto.OverlappingImages), t.register("popups", PaloAlto.Popups), t.register("look", PaloAlto.Look), t.register("mosaic", PaloAlto.Mosaic), t.register("columns-with-image", PaloAlto.ColumnsWithImage), t.register("about-page", PaloAlto.AboutPage), t.register("password-template", PaloAlto.PasswordTemplate), t.register("search-template", PaloAlto.SearchTemplate), t.register("subcollections", PaloAlto.Subcollections), t.register("newsletter", PaloAlto.NewsletterSection), t.register("marquee", PaloAlto.AnnouncementBar), $(document).on("shopify:section:load shopify:section:reorder shopify:section:unload", (function() {
        setTimeout((() => {
            PaloAlto.initTransparentHeader(), PaloAlto.setMainSpacing(), AOS.refreshHard()
        }), 300)
    }))
}, PaloAlto.initSwatches = {
    makeSwatch: function(t) {
        this.swatches = [];
        t.querySelectorAll("[data-swatch]").forEach((t => {
            this.swatches.push(new PaloAlto.Swatches.Swatch(t))
        }))
    },
    makeGridSwatch: function(t) {
        t.querySelectorAll("[data-grid-swatches]").forEach((t => {
            new PaloAlto.Swatches.GridSwatch(t)
        }))
    }
}, PaloAlto.Drawer = {
    attributes: {
        ariaExpanded: "aria-expanded"
    },
    selectors: {
        drawer: "[data-drawer]",
        drawerToggle: "[data-drawer-toggle]",
        scroller: "[data-scroll]"
    },
    classes: {
        open: "is-open",
        drawerOpen: "js-drawer-open"
    },
    init: function() {
        this.drawers = document.querySelectorAll(this.selectors.drawer), this.drawerToggleButtons = document.querySelectorAll(this.selectors.drawerToggle), this.drawerToggleEvent = throttle((t => {
            this.toggle(t)
        }), 150), this.keyPressCloseEvent = throttle((t => {
            t.keyCode === slate.utils.keyboardKeys.ESCAPE && this.close(t)
        }), 150), this.drawerCloseEvent = t => {
            const e = document.querySelector(`${this.selectors.drawer}.${this.classes.open}`),
                i = t.target.matches(this.selectors.drawerToggle),
                n = !!e && e.contains(t.target);
            i || n || this.close(t)
        }, this.drawerToggleButtons.forEach((t => {
            t.addEventListener("click", this.drawerToggleEvent)
        })), this.drawers.forEach((t => {
            t.addEventListener("keyup", this.keyPressCloseEvent)
        })), document.addEventListener("click", this.drawerCloseEvent)
    },
    toggle: function(t) {
        t.preventDefault();
        const e = document.querySelector(`#${t.target.getAttribute("aria-controls")}`);
        if (!e) return;
        e.classList.contains(this.classes.open) ? this.close() : this.open(t)
    },
    open: function(t) {
        const e = t.target,
            i = document.querySelector(`#${t.target.getAttribute("aria-controls")}`);
        if (!i) return;
        const n = i.querySelector(this.selectors.scroller) || i,
            o = i.querySelector(this.selectors.drawerToggle);
        document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
            bubbles: !0,
            detail: n
        })), document.dispatchEvent(new CustomEvent("theme:drawer:open"), {
            bubbles: !0
        }), document.body.classList.add(this.classes.drawerOpen), i.classList.add(this.classes.open), e.setAttribute(this.attributes.ariaExpanded, !0), setTimeout((() => {
            slate.a11y.state.trigger = e, slate.a11y.trapFocus({
                container: i,
                elementToFocus: o
            })
        }))
    },
    close: function() {
        if (!document.body.classList.contains(this.classes.drawerOpen)) return;
        const t = document.querySelector(`${this.selectors.drawer}.${this.classes.open}`);
        this.drawerToggleButtons.forEach((t => {
            t.setAttribute(this.attributes.ariaExpanded, !1)
        }));
        document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
            bubbles: !0,
            detail: 400
        })), slate.a11y.removeTrapFocus({
            container: t
        }), t.classList.remove(this.classes.open), document.body.classList.remove(this.classes.drawerOpen), document.dispatchEvent(new CustomEvent("theme:drawer:close"), {
            bubbles: !0
        })
    },
    destroy: function() {
        this.close(), this.drawerToggleButtons.forEach((t => {
            t.removeEventListener("click", this.drawerToggleEvent)
        })), this.drawers.forEach((t => {
            t.removeEventListener("keyup", this.keyPressCloseEvent)
        })), document.removeEventListener("click", this.drawerCloseEvent)
    }
}, PaloAlto.Newsletter = function() {
    const t = "[data-popup]",
        e = "has-success",
        i = "has-error",
        n = "newsletter_form_id";

    function o(e) {
        this.newsletter = e, this.sessionStorage = window.sessionStorage, this.popup = this.newsletter.closest(t), this.stopSubmit = !0, this.isChallengePage = !1, this.formID = null, this.formIdSuccess = null, this.checkForChallengePage(), this.newsletterSubmit = t => this.newsletterSubmitEvent(t), this.isChallengePage || this.init()
    }
    return o.prototype = $.extend({}, o.prototype, {
        init() {
            this.newsletter.addEventListener("submit", this.newsletterSubmit), this.showMessage()
        },
        newsletterSubmitEvent(t) {
            this.stopSubmit && (t.preventDefault(), this.removeStorage(), this.writeStorage(), this.stopSubmit = !1, this.newsletter.submit())
        },
        checkForChallengePage() {
            this.isChallengePage = window.location.pathname === theme.routes.root + "challenge"
        },
        writeStorage() {
            void 0 !== this.sessionStorage && this.sessionStorage.setItem(n, this.newsletter.id)
        },
        readStorage() {
            this.formID = this.sessionStorage.getItem(n)
        },
        removeStorage() {
            this.sessionStorage.removeItem(n)
        },
        showMessage() {
            if (this.readStorage(), this.newsletter.id === this.formID) {
                const t = document.getElementById(this.formID),
                    n = -1 !== window.location.search.indexOf("?customer_posted=true"),
                    o = -1 !== window.location.search.indexOf("accepts_marketing");
                n ? (t.classList.remove(i), t.classList.add(e), this.popup && (this.cookie = new PopupCookie(this.popup.dataset.cookieName, "user_has_closed"), this.cookie.write())) : o && (t.classList.remove(e), t.classList.add(i)), (n || o) && this.scrollToForm(t)
            }
        },
        scrollToForm(t) {
            const e = t.getBoundingClientRect();
            PaloAlto.isInViewport(t) || setTimeout((() => {
                window.scroll({
                    top: e.top,
                    left: 0,
                    behavior: "smooth"
                })
            }), 400)
        },
        onUnload() {
            this.newsletter.removeEventListener("submit", this.newsletterSubmit)
        }
    }), o
}(), PopupCookie.prototype = $.extend({}, PopupCookie.prototype, {
    write() {
        (-1 !== document.cookie.indexOf("; ") && !document.cookie.split("; ").find((t => t.startsWith(this.name))) || -1 === document.cookie.indexOf("; ")) && (document.cookie = `${this.name}=${this.value}; expires=${this.configuration.expires}; path=${this.configuration.path}; domain=${this.configuration.domain}`)
    },
    read() {
        if (-1 !== document.cookie.indexOf("; ") && document.cookie.split("; ").find((t => t.startsWith(this.name)))) {
            return document.cookie.split("; ").find((t => t.startsWith(this.name))).split("=")[1]
        }
        return !1
    },
    destroy() {
        document.cookie.split("; ").find((t => t.startsWith(this.name))) && (document.cookie = `${this.name}=null; expires=${this.configuration.expires}; path=${this.configuration.path}; domain=${this.configuration.domain}`)
    }
}), PaloAlto.QuantityCounter = function() {
    const t = "[data-quantity-holder]",
        e = "[data-quantity-field]",
        i = "[data-quantity-button]",
        n = "[data-quantity-minus]",
        o = "[data-quantity-plus]",
        r = "read-only",
        s = "is-disabled";

    function a(t, e = !1) {
        this.holder = t, this.quantityUpdateCart = e
    }
    return a.prototype = $.extend({}, a.prototype, {
        init() {
            this.quantity = this.holder.querySelector(t), this.quantity && (this.field = this.quantity.querySelector(e), this.buttons = this.quantity.querySelectorAll(i), this.increaseButton = this.quantity.querySelector(o), this.quantityValue = Number(this.field.value || 0), this.cartItemID = this.field.getAttribute("data-id"), this.maxValue = Number(this.field.getAttribute("max")) > 0 ? Number(this.field.getAttribute("max")) : null, this.minValue = Number(this.field.getAttribute("min")) > 0 ? Number(this.field.getAttribute("min")) : 0, this.disableIncrease = this.disableIncrease.bind(this), this.emptyField = !1, this.updateQuantity = this.updateQuantity.bind(this), this.decrease = this.decrease.bind(this), this.increase = this.increase.bind(this), this.disableIncrease(), this.quantity.classList.contains(r) || (this.changeValueOnClick(), this.changeValueOnInput()))
        },
        changeValueOnClick() {
            this.buttons.forEach((t => {
                t.addEventListener("click", (t => {
                    t.preventDefault();
                    const e = t.target,
                        i = e.matches(n) || e.closest(n),
                        r = e.matches(o) || e.closest(o);
                    i && this.decrease(), r && this.increase(), this.updateQuantity()
                }))
            }))
        },
        changeValueOnInput() {
            this.field.addEventListener("input", (t => {
                this.quantityValue = this.field.value, "" === this.value && (this.emptyField = !0), this.updateQuantity()
            }))
        },
        updateQuantity() {
            this.maxValue < this.quantityValue && null !== this.maxValue && (this.quantityValue = this.maxValue), this.minValue > this.quantityValue && (this.quantityValue = this.minValue), this.field.value = this.quantityValue, this.disableIncrease(), document.dispatchEvent(new CustomEvent("theme:cart:update")), this.quantityUpdateCart && this.updateCart()
        },
        decrease() {
            this.quantityValue > this.minValue ? this.quantityValue-- : this.quantityValue = 0
        },
        increase() {
            this.quantityValue++
        },
        disableIncrease() {
            this.increaseButton.classList.toggle(s, this.quantityValue >= this.maxValue && null !== this.maxValue)
        },
        updateCart() {
            const t = new CustomEvent("theme:cart:update", {
                bubbles: !0,
                detail: {
                    id: this.cartItemID,
                    quantity: this.quantityValue,
                    valueIsEmpty: this.emptyField
                }
            });
            this.holder.dispatchEvent(t)
        }
    }), a
}(), PaloAlto.QuickViewPopup = {
    init: function(t) {
        var e = this;
        this.$container = $(t), this.container = t, this.sectionId = $(t).data("section-id"), this.product = {}, this.isFlickityDragging = !1, this.selectors = {
            addToCart: "[data-add-to-cart]",
            deferredMedia: "[data-deferred-media]",
            deferredMediaButton: "[data-deferred-media-button]",
            popout: "[data-popout]",
            product: "[data-product]",
            productForm: "[data-product-form]",
            productMediaSlider: "[data-product-single-media-slider]",
            productMediaThumb: "[data-thumbnail-id]",
            productMediaThumbLink: ".product-single__thumbnail-link",
            productMediaThumbs: "[data-product-single-media-thumbs]",
            productMediaWrapper: "[data-product-single-media-wrapper]",
            productModel: "[data-model]",
            productSingleThumbnailLink: ".product-single__thumbnail-link",
            productJSON: "[data-product-json]",
            buttonQuickView: "[data-button-quick-view]",
            progressBar: "[data-product-slideshow-progress]"
        }, this.classes = {
            hasMediaActive: "has-media-active",
            isSelected: "is-selected",
            isLoading: "is-loading",
            mediaHidden: "media--hidden",
            noOutline: "no-outline",
            quickViewVisible: "quick-view-visible",
            fill: "fill"
        }, this.attributes = {
            mediaId: "data-media-id",
            sectionId: "data-section-id",
            thumbId: "data-thumbnail-id",
            loaded: "loaded",
            tabindex: "tabindex"
        }, this.ids = {
            addToCartFormId: "AddToCartForm--",
            addToCartId: "AddToCart--"
        }, $(this.selectors.buttonQuickView, t).on("click", (function(t) {
            t.preventDefault(), slate.a11y.state.trigger = this;
            var i = theme.routes.root + "products/" + $(this).data("handle") + "?section_id=api-quickview";
            $.magnificPopup.open({
                items: {
                    src: i
                },
                type: "ajax",
                cache: !1,
                removalDelay: 300,
                mainClass: "popup-quick-view mfp-fade",
                autoFocusLast: !1,
                closeMarkup: '<button title="%title%" class="mfp-close">' + theme.icons.close + "</i></button>",
                callbacks: {
                    parseAjax: function(t) {
                        var i = $(t.data).children(),
                            n = i.filter(e.selectors.product),
                            o = n.attr("data-section-id");
                        const r = JSON.parse(i.find(e.selectors.productJSON)[0].innerHTML);
                        return e.container = n[0], e.$container = n, e.$container.addClass(e.classes.isLoading), e.sectionId = o, e.product = r, t.data = i
                    },
                    ajaxContentAdded: function() {
                        var t = e.sectionId + "-" + e.product.handle;
                        e.addFormSuffix(e.$container, t), e.initProductSlider(), e.initMediaSwitch(), e.initProductVideo(), e.initProductModel(), e.initShopifyXrLaunch(), PaloAlto.initSwatches.makeSwatch(e.$container[0]);
                        const i = e.container.querySelectorAll(e.selectors.popout);
                        let n = {};
                        i.length && i.forEach(((t, e) => {
                            n[e] = new PaloAlto.Popout(t)
                        })), new PaloAlto.ProductAddForm(e.$container.parent()[0]), PaloAlto.videoLink(), slate.a11y.trapFocus({
                            container: document.querySelector(".mfp-content"),
                            elementToFocus: document.querySelector(".mfp-content .mfp-close")
                        }), Shopify.PaymentButton && Shopify.PaymentButton.init(), e.$container.removeClass(e.classes.isLoading)
                    },
                    open: function() {
                        document.body.classList.add(e.classes.quickViewVisible)
                    },
                    afterClose: function() {
                        const t = e.container.querySelector(e.selectors.productMediaSlider),
                            i = Flickity.data(t) || null;
                        i && i.pausePlayer(), slate.a11y.removeTrapFocus(), document.body.classList.remove(e.classes.quickViewVisible)
                    }
                }
            })
        }))
    },
    initProductSlider: function() {
        const t = this.container.querySelector(this.selectors.productMediaSlider),
            e = this.container.querySelector(this.selectors.productMediaThumbs),
            i = this.container.querySelectorAll(this.selectors.productMediaWrapper),
            n = this.container.querySelector(this.selectors.progressBar),
            o = 3500;
        let r = 0;
        if (i.length > 1) {
            this.container.style.setProperty("--autoplay-speed", "3500ms"), n.classList.add(this.classes.fill), r = setTimeout((() => {
                n.classList.remove(this.classes.fill)
            }), o);
            const s = new Flickity(t, {
                wrapAround: !0,
                pageDots: !1,
                prevNextButtons: !1,
                adaptiveHeight: !1,
                pauseAutoPlayOnHover: !1,
                selectedAttraction: .2,
                friction: 1,
                autoPlay: o,
                on: {
                    ready: () => {
                        t.setAttribute(this.attributes.tabindex, "-1")
                    },
                    settle: (t, e) => {
                        const i = s.selectedElement,
                            n = i.getAttribute(this.attributes.mediaId);
                        i.setAttribute(this.attributes.tabindex, "0"), [...i.parentNode.children].forEach((t => {
                            t !== i && t.setAttribute(this.attributes.tabindex, "-1")
                        })), this.switchMedia(n)
                    },
                    change: () => {
                        r && clearTimeout(r), n.classList.remove(this.classes.fill), setTimeout((() => {
                            n.classList.add(this.classes.fill)
                        })), r = setTimeout((() => {
                            n.classList.remove(this.classes.fill)
                        }), o)
                    },
                    dragEnd: () => {
                        s.playPlayer()
                    }
                }
            });
            if (i.length && i.forEach((t => {
                    t.addEventListener("theme:media:play", (() => {
                        s.options.draggable = !1, s.updateDraggable(), t.closest(this.selectors.productMediaSlider).classList.add(this.classes.hasMediaActive)
                    })), t.addEventListener("theme:media:pause", (() => {
                        s.options.draggable = !0, s.updateDraggable(), t.closest(this.selectors.productMediaSlider).classList.remove(this.classes.hasMediaActive)
                    }))
                })), PaloAlto.flickitySmoothScrolling(t), e) {
                new Flickity(e, {
                    asNavFor: t,
                    contain: !0,
                    pageDots: !1,
                    prevNextButtons: !1,
                    on: {
                        ready: () => {
                            e.setAttribute(this.attributes.tabindex, "-1")
                        }
                    }
                });
                PaloAlto.flickitySmoothScrolling(e);
                const i = this.container.querySelectorAll(this.selectors.productSingleThumbnailLink);
                i.length && i.forEach((t => {
                    t.addEventListener("click", (t => {
                        t.preventDefault()
                    }))
                }))
            }
        }
    },
    handleMediaFocus: function(t) {
        if (13 !== t.keyCode && 9 !== t.keyCode) return;
        const e = t.currentTarget.getAttribute(this.attributes.thumbId),
            i = this.container.querySelector(`[${this.attributes.mediaId}="${e}"]`),
            n = parseInt([...i.parentNode.children].indexOf(i)),
            o = this.container.querySelector(this.selectors.productMediaSlider),
            r = this.container.querySelector(this.selectors.productMediaThumbs),
            s = Flickity.data(o) || null,
            a = Flickity.data(r) || null;
        s && s.isActive && n > -1 && 13 === t.keyCode && s.select(n), a && a.isActive && n > -1 && a.select(n)
    },
    switchMedia: function(t) {
        const e = this.container.querySelector(`${this.selectors.productMediaWrapper}[${this.attributes.mediaId}="${t}"]`);
        !document.body.classList.contains(this.classes.noOutline) && e.focus(), e.closest(this.selectors.productMediaSlider).classList.remove(this.classes.hasMediaActive), e.classList.remove(this.classes.mediaHidden), e.dispatchEvent(new CustomEvent("theme:media:visible"), {
            bubbles: !0
        });
        const i = e.querySelector(this.selectors.deferredMedia);
        i && "true" !== i.getAttribute(this.attributes.loaded) && e.querySelector(this.selectors.deferredMediaButton).dispatchEvent(new Event("click"))
    },
    initMediaSwitch: function() {
        const t = this.container.querySelectorAll(this.selectors.productMediaThumb);
        t.length && t.forEach((t => {
            t.addEventListener("keyup", this.handleMediaFocus.bind(this)), t.addEventListener("click", (t => {
                t.preventDefault()
            }))
        }))
    },
    initProductVideo: function() {
        this.videos = new PaloAlto.ProductVideo(this.container)
    },
    initProductModel: function() {
        const t = this.container.querySelectorAll(this.selectors.productModel);
        t.length && t.forEach((t => {
            PaloAlto.ProductModel.init(t, this.sectionId)
        }))
    },
    initShopifyXrLaunch: function() {
        document.addEventListener("shopify_xr_launch", (() => {
            this.container.querySelector(`${this.selectors.productModel}:not(.${this.classes.mediaHidden})`).dispatchEvent(new CustomEvent("xrLaunch"))
        }))
    },
    addFormSuffix: function(t, e) {
        var i = this.ids.addToCartFormId + e,
            n = this.ids.addToCartId + e;
        $(this.selectors.productForm, t).attr("id", i), $(this.selectors.addToCart, t).attr("id", n)
    }
}, window.lastWindowWidth = window.innerWidth, PaloAlto.Sections = function() {
    this.constructors = {}, this.instances = [], $(document).on("shopify:section:load", this._onSectionLoad.bind(this)).on("shopify:section:unload", this._onSectionUnload.bind(this)).on("shopify:section:select", this._onSelect.bind(this)).on("shopify:section:deselect", this._onDeselect.bind(this)).on("shopify:block:select", this._onBlockSelect.bind(this)).on("shopify:block:deselect", this._onBlockDeselect.bind(this))
}, PaloAlto.Sections.prototype = _.assignIn({}, PaloAlto.Sections.prototype, {
    _createInstance: function(t, e) {
        var i = $(t),
            n = i.attr("data-section-id"),
            o = i.attr("data-section-type");
        if (e = e || this.constructors[o], !_.isUndefined(e)) {
            var r = _.assignIn(new e(t), {
                id: n,
                type: o,
                container: t
            });
            this.instances.push(r)
        }
    },
    _onSectionLoad: function(t) {
        var e = $("[data-section-id]", t.target)[0];
        e && this._createInstance(e)
    },
    _onSectionUnload: function(t) {
        this.instances = _.filter(this.instances, (function(e) {
            var i = e.id === t.detail.sectionId;
            return i && _.isFunction(e.onUnload) && e.onUnload(t), !i
        }))
    },
    _onSelect: function(t) {
        var e = _.find(this.instances, (function(e) {
            return e.id === t.detail.sectionId
        }));
        !_.isUndefined(e) && _.isFunction(e.onSelect) && e.onSelect(t)
    },
    _onDeselect: function(t) {
        var e = _.find(this.instances, (function(e) {
            return e.id === t.detail.sectionId
        }));
        !_.isUndefined(e) && _.isFunction(e.onDeselect) && e.onDeselect(t)
    },
    _onBlockSelect: function(t) {
        var e = _.find(this.instances, (function(e) {
            return e.id === t.detail.sectionId
        }));
        !_.isUndefined(e) && _.isFunction(e.onBlockSelect) && e.onBlockSelect(t)
    },
    _onBlockDeselect: function(t) {
        var e = _.find(this.instances, (function(e) {
            return e.id === t.detail.sectionId
        }));
        !_.isUndefined(e) && _.isFunction(e.onBlockDeselect) && e.onBlockDeselect(t)
    },
    register: function(t, e) {
        this.constructors[t] = e, $("[data-section-type=" + t + "]").each(function(t, i) {
            this._createInstance(i, e)
        }.bind(this))
    }
}), PaloAlto.setMainSpacing = function() {
    const t = "[data-site-header]",
        e = "[data-page-container]",
        i = ".template-list-collections",
        n = "[data-collection-filters]",
        o = "has-scrolled",
        r = "header--sticky",
        s = "header--relative";
    document.body.classList.remove(o);
    const a = document.querySelector(e),
        l = document.querySelector(t),
        c = l.parentNode,
        u = "fixed" == l.dataset.position,
        d = document.querySelector(i),
        h = document.querySelector(n),
        p = isHeaderTransparent ? 0 : parseInt(l.clientHeight);
    window.initialHeaderHeight = parseInt(l.dataset.height), a.style.paddingTop = p + "px", u && !h ? c.classList.add(r) : c.classList.remove(r), !u && d && c.classList.add(s), document.dispatchEvent(new CustomEvent("theme:scroll"), {
        bubbles: !1
    })
};
let prev = window.pageYOffset,
    up = null,
    down = null,
    wasUp = null,
    wasDown = null,
    scrollLockTimer = 0,
    closingTimeout = 0;

function dispatchScrollEvent() {
    const t = window.pageYOffset;
    t > prev ? (down = !0, up = !1) : t < prev ? (down = !1, up = !0) : (up = null, down = null), prev = t, document.dispatchEvent(new CustomEvent("theme:scroll", {
        detail: {
            up: up,
            down: down,
            position: t
        },
        bubbles: !1
    })), up && !wasUp && document.dispatchEvent(new CustomEvent("theme:scroll:up", {
        detail: {
            position: t
        },
        bubbles: !1
    })), down && !wasDown && document.dispatchEvent(new CustomEvent("theme:scroll:down", {
        detail: {
            position: t
        },
        bubbles: !1
    })), wasDown = down, wasUp = up
}

function lock(t) {
    setTimeout((() => {
        scrollLockTimer && clearTimeout(scrollLockTimer), scrollLock.disablePageScroll(t.detail, {
            allowTouchMove: t => "TEXTAREA" === t.tagName
        }), document.documentElement.setAttribute("data-scroll-locked", "")
    }))
}

function unlock(t) {
    const e = t.detail;
    e ? scrollLockTimer = setTimeout(removeScrollLock, e) : removeScrollLock()
}

function removeScrollLock() {
    scrollLock.clearQueueScrollLocks(), scrollLock.enablePageScroll(), document.documentElement.removeAttribute("data-scroll-locked")
}

function scrollListener() {
    let t;
    window.addEventListener("scroll", (function() {
        t && window.cancelAnimationFrame(t), t = window.requestAnimationFrame((function() {
            dispatchScrollEvent()
        }))
    }), {
        passive: !0
    }), window.addEventListener("theme:scroll:lock", lock), window.addEventListener("theme:scroll:unlock", unlock)
}
const scrollTopButton = document.querySelector("[data-scroll-top-button]");

function getScrollbarWidth() {
    const t = document.createElement("div");
    t.style.visibility = "hidden", t.style.overflow = "scroll", t.style.msOverflowStyle = "scrollbar", document.body.appendChild(t);
    const e = document.createElement("div");
    t.appendChild(e);
    const i = t.offsetWidth - e.offsetWidth;
    return t.parentNode.removeChild(t), i
}
scrollTopButton && (scrollTopButton.addEventListener("click", (() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})), document.addEventListener("scroll", throttle((() => {
    scrollTopButton.classList.toggle("is-visible", window.pageYOffset > window.innerHeight)
}), 150))), Sqrl.filters.define("handle", (function(t) {
    t = t.toLowerCase();
    for (var e = ['"', "'", "\\", "(", ")", "[", "]"], i = 0; i < e.length; ++i) t = t.replace(e[i], "");
    return "-" == (t = t.replace(/\W+/g, "-")).charAt(t.length - 1) && (t = t.replace(/-+\z/, "")), "-" == t.charAt(0) && (t = t.replace(/\A-+/, "")), t
})), Sqrl.filters.define("last", (function(t) {
    const e = t.split("-");
    return e[e.length - 1]
})), Sqrl.filters.define("asset_url", (function(t) {
    let e = theme.assets.image;
    return e = e.replace("image", t), e
})), PaloAlto.videoLink = function() {
    var t = $("[data-play-button]");
    t.length && t.each((function() {
        $(this).magnificPopup({
            disableOn: 200,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1,
            preloader: !1,
            fixedContentPos: !1,
            closeMarkup: '<button title="%title%" class="mfp-close">' + theme.icons.close + "</i></button>",
            closeOnBgClick: !0,
            tClose: "Close (Esc)",
            iframe: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay; fullscreen"></iframe></div>',
                patterns: {
                    youtube_short: {
                        index: "youtu.be/",
                        id: "youtu.be/",
                        src: "//www.youtube.com/embed/%id%?autoplay=1&autohide=0&branding=0&cc_load_policy=0&controls=0&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&quality=hd720&rel=0&showinfo=0&wmode=opaque"
                    }
                }
            }
        })
    }))
}, PaloAlto.BgSet = {
    render: function(t, e) {
        let i = "";
        return -1 != t.indexOf("no-image") && -1 != t.indexOf("2048x.gif") && (e = 1), i += t.replace("_2048x.", "_180x.") + " 180w " + Math.round(180 / e) + "h,", i += t.replace("_2048x.", "_360x.") + " 360w " + Math.round(360 / e) + "h,", i += t.replace("_2048x.", "_540x.") + " 540w " + Math.round(540 / e) + "h,", i += t.replace("_2048x.", "_720x.") + " 720w " + Math.round(720 / e) + "h,", i += t.replace("_2048x.", "_900x.") + " 900w " + Math.round(900 / e) + "h,", i += t.replace("_2048x.", "_1080x.") + " 1080w " + Math.round(1080 / e) + "h,", i += t.replace("_2048x.", "_1296x.") + " 1296w " + Math.round(1296 / e) + "h,", i += t.replace("_2048x.", "_1512x.") + " 1512w " + Math.round(1512 / e) + "h,", i += t.replace("_2048x.", "_1728x.") + " 1728w " + Math.round(1728 / e) + "h,", i += t.replace("_2048x.", "_1950x.") + " 1950w " + Math.round(1950 / e) + "h,", i += t + " 2048w " + Math.round(2048 / e) + "h", i
    }
}, PaloAlto.FetchError = function() {
    function t(t) {
        this.status = t.status || null, this.headers = t.headers || null, this.json = t.json || null, this.body = t.body || null
    }
    return t.prototype = Error.prototype, t
}(), PaloAlto.fetchProduct = function(t) {
    const e = `${theme.routes.root}products/${t}.js`;
    return window.fetch(e).then((t => {
        if (t.ok) return t.json()
    })).catch((t => {
        console.error(t)
    }))
}, PaloAlto.formatPrices = function(t, e = !1) {
    const i = t.price <= t.compare_at_price_min,
        n = !t.available,
        o = theme.settings.showSoldBadge,
        r = theme.settings.showBadge,
        s = theme.settings.showSavingBadge,
        a = theme.settings.savingBadgeType;
    let l = !1,
        c = !1,
        u = !1,
        d = !1,
        h = !1,
        p = t.price,
        f = t.compare_at_price,
        m = f - p;
    if (r && t.tags)
        for (let e = 0; e < t.tags.length; e++) t.tags[e].includes("_badge_") && (l = t.tags[e].replace("_badge_", "").split("_").join(" ")), t.tags[e].includes("_preorder") && !n && (u = theme.strings.preorder);
    s && !e && (t.variants.length > 1 && t.variants.forEach((t => {
        const e = t.compare_at_price - t.price;
        e > m && (m = e, p = t.price, f = t.compare_at_price)
    })), m > 0 && (p = "percentage" === a ? `${Math.round((100*(-p/f+1)).toFixed(2))}%` : slate.Currency.formatMoney(m, theme.moneyFormat), h = theme.strings.saving_badge.replace("{{ discount }}", p), t.variants.length > 1 && (h = theme.strings.saving_up_to_badge.replace("{{ discount }}", p)))), o && n && (c = theme.strings.sold_out), r && i && !n && !h && (d = theme.strings.sale_badge_text);
    return {
        ...t,
        customBadgeText: l,
        soldBadgeText: c,
        saleBadgeText: d,
        preorderBadgeText: u,
        savingBadgeText: h,
        compare_at_price_max: slate.Currency.formatMoney(t.compare_at_price_max, theme.moneyFormat),
        compare_at_price_min: slate.Currency.formatMoney(t.compare_at_price_min, theme.moneyFormat),
        price_max: slate.Currency.formatMoney(t.price_max, theme.moneyFormat),
        price_min: slate.Currency.formatMoney(t.price_min, theme.moneyFormat),
        unit_price: slate.Currency.formatMoney(t.unit_price, theme.moneyFormat)
    }
};
const loaders = {};

function loadScript(t = {}) {
    if (t.url) return loaders[t.url] ? loaders[t.url] : getScriptWithPromise(t.url);
    if (t.json) return loaders[t.json] ? Promise.resolve(loaders[t.json]) : window.fetch(t.json).then((t => t.json())).then((e => (loaders[t.json] = e, e)));
    if (t.name) {
        const e = "".concat(t.name, t.version);
        return loaders[e] ? loaders[e] : loadShopifyWithPromise(t)
    }
    return Promise.reject()
}

function getScriptWithPromise(t) {
    const e = new Promise(((e, i) => {
        $.getScript(t).done((function(t) {
            e(t)
        })).fail((function(t) {
            i(t)
        }))
    }));
    return loaders[t] = e, e
}

function loadShopifyWithPromise(t) {
    const e = "".concat(t.name, t.version),
        i = new Promise(((e, i) => {
            try {
                window.Shopify.loadFeatures([{
                    name: t.name,
                    version: t.version,
                    onLoad: t => {
                        onLoadFromShopify(e, i, t)
                    }
                }])
            } catch (t) {
                i(t)
            }
        }));
    return loaders[e] = i, i
}

function onLoadFromShopify(t, e, i) {
    return i ? e(i) : t()
}
PaloAlto.Element = {
    show: function(t, e = !1, i = "block") {
        t && (e ? t.style.removeProperty("display") : t.style.display = i)
    },
    hide: function(t) {
        t && (t.style.display = "none")
    }
}, PaloAlto.Slide = {
    up: function(t, e = 500) {
        t.style.transitionProperty = "height, margin, padding", t.style.transitionDuration = e + "ms", t.style.boxSizing = "border-box", t.style.height = t.offsetHeight + "px", t.offsetHeight, t.style.overflow = "hidden", t.style.height = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0, t.style.marginTop = 0, t.style.marginBottom = 0, window.setTimeout((() => {
            t.style.display = "none", t.style.removeProperty("height"), t.style.removeProperty("padding-top"), t.style.removeProperty("padding-bottom"), t.style.removeProperty("margin-top"), t.style.removeProperty("margin-bottom"), t.style.removeProperty("overflow"), t.style.removeProperty("transition-duration"), t.style.removeProperty("transition-property")
        }), e)
    },
    down: function(t, e = 500, i = "block", n = !0) {
        let o = window.getComputedStyle(t).display;
        if (n && "none" !== o) return;
        t.style.removeProperty("display"), "none" === o && (o = i), t.style.display = o;
        let r = t.offsetHeight;
        t.style.overflow = "hidden", t.style.height = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0, t.style.marginTop = 0, t.style.marginBottom = 0, t.offsetHeight, t.style.boxSizing = "border-box", t.style.transitionProperty = "height, margin, padding", t.style.transitionDuration = e + "ms", t.style.height = r + "px", t.style.removeProperty("padding-top"), t.style.removeProperty("padding-bottom"), t.style.removeProperty("margin-top"), t.style.removeProperty("margin-bottom"), window.setTimeout((() => {
            t.style.removeProperty("height"), t.style.removeProperty("overflow"), t.style.removeProperty("transition-duration"), t.style.removeProperty("transition-property")
        }), e)
    }
}, PaloAlto.TableWrap = function() {
    document.querySelectorAll("table").forEach((t => {
        ((t, e = "", i) => {
            (i = i || document.createElement("div")).classList.add(e), i.setAttribute("data-scroll-lock-scrollable", ""), t.parentNode.insertBefore(i, t), i.appendChild(t)
        })(t, "table-wrapper")
    }))
}, PaloAlto.fadeIn = (t, e, i = null) => {
    t.style.opacity = 0, t.style.display = e || "block";
    let n = !0;
    ! function e() {
        let o = parseFloat(t.style.opacity);
        (o += .1) > 1 || (t.style.opacity = o, requestAnimationFrame(e)), 1 === parseInt(o) && n && "function" == typeof i && (n = !1, i())
    }()
}, PaloAlto.fadeOut = function(t, e = null) {
    t.style.opacity = 1,
        function i() {
            (t.style.opacity -= .1) < 0 ? t.style.display = "none" : requestAnimationFrame(i), 0 === parseFloat(t.style.opacity) && "function" == typeof e && e()
        }()
}, PaloAlto.Filters = function() {
    const t = "button",
        e = "[data-toggle-filters]",
        i = "[data-close-filters]",
        n = "[data-open-filters]",
        o = "[data-collection-wrapper]",
        r = "[data-input-sort]",
        s = "[data-collection-filters]",
        a = "[data-collection-filters-list]",
        l = "[data-collection-sticky-bar]",
        c = "[data-collection-filter]",
        u = "[data-collection-filter-tag]",
        d = "[data-collection-filter-tag-button]",
        h = "[data-collection-filters-form]",
        p = "[data-filter-reset-button]",
        f = "[data-filter-tag-reset-button]",
        m = "[data-collection-products]",
        g = "[data-field-price-min]",
        v = "[data-field-price-max]",
        y = "[data-se-min-value]",
        b = "[data-se-max-value]",
        w = "data-se-min-value",
        S = "data-se-max-value",
        x = "data-se-min",
        E = "data-se-max",
        k = "[data-search-form]",
        C = "collection__filters--visible",
        A = "is-active",
        L = "is-expanded",
        P = "is-loading";

    function T(t) {
        this.container = t, this.sectionId = t.dataset.sectionId, this.namespace = "." + t.dataset.sectionId, this.enableFilters = "true" === t.dataset.enableFilters, this.filterMode = t.dataset.filterMode, this.collectionHandle = this.container.dataset.collection, this.productGrid = this.container.querySelector(m), this.filters = this.container.querySelector(s), this.filtersStickyBar = this.container.querySelector(l), this.filtersForm = this.container.querySelector(h), this.searchForm = this.container.querySelector(k), this.inputSort = this.container.querySelectorAll(r), this.filterData = [], this.hideFilters = this.hideFilters.bind(this), this.showFilters = this.showFilters.bind(this), this.onFilterResetClick = this.onFilterResetClick.bind(this), this.onFilterTagResetClick = this.onFilterTagResetClick.bind(this), this.onFilterTagClearClick = this.onFilterTagClearClick.bind(this), this.onFilterToggleClick = this.onFilterToggleClick.bind(this), this.onKeyUpHandler = this.onKeyUpHandler.bind(this), this.updateRangeEvent = this.updateRange.bind(this), this.debouncedSubmitEvent = PaloAlto.debounce((function(t) {
            this.onSubmitHandler(t)
        }), 500), this.debouncedSortEvent = PaloAlto.debounce((function(t) {
            this.onSortChange(t)
        }), 500), this.productGridEvents = {}, this.initTagFilters(), this.initFacetedFilters(), this.bindToggleButtonsEvents(), this.bindFilterButtonsEvents(), this.initInfinityScroll(), this.initProductGridEvents(), PaloAlto.initSwatches.makeSwatch(this.container), PaloAlto.initCollapsible(), setVars(), window.addEventListener("popstate", this.onHistoryChange.bind(this))
    }
    return T.prototype = $.extend({}, T.prototype, {
        initFacetedFilters: function() {
            "tag" != this.filterMode && "group" != this.filterMode && this.enableFilters && new PaloAlto.RangeSlider(this.container)
        },
        updateRange: function() {
            const t = this.filtersForm.querySelector(y),
                e = this.filtersForm.querySelector(b),
                i = this.filtersForm.querySelector(g),
                n = this.filtersForm.querySelector(v);
            if (t.hasAttribute(w) && e.hasAttribute(S)) {
                const o = parseFloat(i.placeholder, 10),
                    r = parseFloat(n.placeholder, 10),
                    s = parseFloat(t.getAttribute(w), 10),
                    a = parseFloat(e.getAttribute(S), 10);
                o === s && r === a || (i.value = parseInt(s), n.value = parseInt(a), this.filtersForm.dispatchEvent(new Event("input", {
                    bubbles: !0
                })))
            }
        },
        onSubmitHandler: function(t) {
            t.preventDefault();
            const e = new FormData(t.target.closest("form")),
                i = new URLSearchParams(e),
                n = this.filtersForm.querySelector(y),
                o = this.filtersForm.querySelector(b),
                r = this.filtersForm.querySelector(g),
                s = this.filtersForm.querySelector(v);
            if (n && o && r && s && n.hasAttribute(x) && o.hasAttribute(E)) {
                const t = parseFloat(n.getAttribute(x), 10),
                    e = parseFloat(o.getAttribute(E), 10),
                    a = r.value ? parseFloat(r.value, 10) : t,
                    l = s.value ? parseFloat(s.value, 10) : e;
                a <= t && l >= e && (i.delete("filter.v.price.gte"), i.delete("filter.v.price.lte"))
            }
            this.renderSection(i.toString(), t)
        },
        onHistoryChange: function(t) {
            const e = t.state?.searchParams || "";
            this.renderSection(e, null, !1)
        },
        renderSection: function(t, e, i = !0) {
            this.startLoading();
            const n = `${window.location.pathname}?section_id=${this.sectionId}&${t}`,
                o = t => t.url === n;
            this.filterData.some(o) ? this.renderSectionFromCache(o, e) : this.renderSectionFromFetch(n, e), i && this.updateURLHash(t)
        },
        renderSectionFromFetch: function(t, e) {
            fetch(t).then((t => t.text())).then((e => {
                const i = e;
                this.filterData = [...this.filterData, {
                    html: i,
                    url: t
                }], this.renderFilters(i), this.renderProductGrid(i), this.finishLoading()
            }))
        },
        renderSectionFromCache: function(t, e) {
            const i = this.filterData.find(t).html;
            this.renderFilters(i, e), this.renderProductGrid(i), this.finishLoading()
        },
        renderProductGrid: function(t) {
            const e = (new DOMParser).parseFromString(t, "text/html").querySelector(m).innerHTML;
            this.productGrid.innerHTML = e, this.initProductGridEvents()
        },
        renderFilters: function(t) {
            const e = (new DOMParser).parseFromString(t, "text/html").querySelector(s).innerHTML;
            this.filters.innerHTML = e, this.filtersForm = document.querySelector(h), this.bindFilterButtonsEvents(), this.bindToggleButtonsEvents(), PaloAlto.initSwatches.makeSwatch(this.container), PaloAlto.initCollapsible(), document.dispatchEvent(new CustomEvent("theme:filters:init", {
                bubbles: !0
            }))
        },
        updateURLHash: function(t) {
            history.pushState({
                searchParams: t
            }, "", `${window.location.pathname}${t&&"?".concat(t)}`)
        },
        bindFilterButtonsEvents: function() {
            this.container.querySelectorAll(p).forEach((t => {
                t.addEventListener("click", this.onFilterResetClick, {
                    once: !0
                })
            })), this.filtersForm && (this.filtersForm.addEventListener("input", this.debouncedSubmitEvent.bind(this)), this.filtersForm.addEventListener("theme:filter:range-update", this.updateRangeEvent))
        },
        onFilterResetClick: function(t) {
            t.preventDefault(), this.renderSection(new URL(t.currentTarget.href).searchParams.toString())
        },
        bindToggleButtonsEvents: function() {
            this.container.querySelectorAll(e).forEach((t => {
                t.addEventListener("click", this.onFilterToggleClick)
            })), this.container.querySelectorAll(i).forEach((t => {
                t.addEventListener("click", this.hideFilters)
            })), this.container.querySelectorAll(n).forEach((t => {
                t.addEventListener("click", this.showFilters)
            })), this.container.querySelector(o).addEventListener("keyup", this.onKeyUpHandler)
        },
        onKeyUpHandler: function(t) {
            t.keyCode === slate.utils.keyboardKeys.ESCAPE && this.hideFilters()
        },
        onFilterToggleClick: function(t) {
            t.preventDefault();
            this.filters.classList.contains(C) ? this.hideFilters() : this.showFilters()
        },
        showFilters: function() {
            const i = document.querySelector(a);
            if (slate.a11y.state.trigger = document.querySelector(e), slate.a11y.trapFocus({
                    container: this.filters,
                    elementToFocus: this.filters.querySelector(t)
                }), window.innerWidth < theme.sizes.widescreen && (this.filters.classList.add(C), document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
                    bubbles: !0,
                    detail: i
                }))), this.filtersStickyBar) {
                let t = this.getStickyBarOffsetTop();
                window.scrollTo({
                    top: t,
                    left: 0,
                    behavior: "smooth"
                })
            }
        },
        hideFilters: function() {
            let t = this.filters.classList.contains(C),
                e = this.container.classList.contains(P);
            if (t && (this.filters.classList.remove(C), slate.a11y.removeTrapFocus()), !e) {
                const t = 300;
                document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
                    bubbles: !0,
                    detail: t
                }))
            }
        },
        initTagFilters: function() {
            "tag" != this.filterMode && "group" != this.filterMode || !this.enableFilters || (this.tags = this.container.dataset.tags.split("+").filter((t => t)), this.bindFilterTagButtonsEvents(), this.bindSortChangeEvent(), this.resizeEvent = PaloAlto.debounce(this.hideFilters.bind(this), 250), document.addEventListener("theme:resize:width", this.resizeEvent))
        },
        renderTagFiltersProducts: function(t) {
            var e = this;
            this.startLoading(), "object" == typeof this.endlessCollection && this.endlessCollection.destroy(), fetch(t).then((t => t.text())).then((i => {
                const n = i,
                    o = (new DOMParser).parseFromString(n, "text/html"),
                    a = o.querySelector(m).innerHTML,
                    l = o.querySelector(s).innerHTML;
                this.productGrid.innerHTML = a, this.filters.innerHTML = l, this.inputSort = this.container.querySelectorAll(r), this.filtersForm = document.querySelector(h), this.filterData = [...this.filterData, {
                    html: n,
                    url: t
                }], e.initInfinityScroll(), this.bindFilterTagButtonsEvents(), this.bindSortChangeEvent(), this.bindToggleButtonsEvents(), this.initProductGridEvents(), PaloAlto.initCollapsible(), PaloAlto.initSwatches.makeSwatch(this.container), AOS.refreshHard(), history.replaceState && window.history.pushState({
                    path: t
                }, "", t)
            })).catch((t => {
                this.finishLoading(), console.log(`Error: ${t}`)
            }))
        },
        bindFilterTagButtonsEvents: function() {
            this.container.querySelectorAll(d).forEach((t => {
                t.addEventListener("click", this.onFilterTagButtonClick.bind(this), {
                    once: !0
                })
            })), this.container.querySelectorAll(f).forEach((t => {
                t.addEventListener("click", this.onFilterTagClearClick, {
                    once: !0
                })
            })), this.container.querySelectorAll(p).forEach((t => {
                t.addEventListener("click", this.onFilterTagResetClick, {
                    once: !0
                })
            }))
        },
        bindSortChangeEvent: function() {
            this.container.querySelectorAll(r).forEach((t => {
                t.addEventListener("input", this.debouncedSortEvent.bind(this))
            }))
        },
        onFilterTagButtonClick: function(t) {
            t.preventDefault();
            const e = t.currentTarget,
                i = e.dataset.tag;
            if (e.parentNode.classList.contains(A)) {
                let t = this.tags.indexOf(i);
                e.parentNode.classList.remove(A), t > -1 && this.tags.splice(t, 1)
            } else e.parentNode.classList.add(A), this.tags.push(i);
            let n = this.collectionHandle + "/" + this.tags.join("+") + "?sort_by=" + this.getSortValue();
            this.container.querySelector(c).classList.remove(L), this.container.querySelector(c).setAttribute("aria-expanded", !1), this.container.setAttribute("data-tags", "[" + this.tags + "]"), this.renderTagFiltersProducts(n)
        },
        onFilterTagClearClick: function(t) {
            t.preventDefault();
            const e = t.currentTarget.dataset.tag,
                i = this.tags.indexOf(e);
            i > -1 && this.tags.splice(i, 1);
            const n = this.collectionHandle + "/" + this.tags.join("+") + "?sort_by=" + this.getSortValue();
            this.container.setAttribute("data-tags", "[" + this.tags + "]"), this.renderTagFiltersProducts(n)
        },
        onSortChange: function() {
            let t = this.collectionHandle + "/" + this.tags.join("+") + "?sort_by=" + this.getSortValue();
            this.renderTagFiltersProducts(t)
        },
        getSortValue: function() {
            let t = "";
            return this.inputSort.forEach((e => {
                e.checked && (t = e.value)
            })), t
        },
        onFilterTagResetClick: function(t) {
            t.preventDefault(), this.container.querySelectorAll(u).forEach((t => {
                t.classList.remove(A)
            })), this.container.querySelectorAll(c).forEach((t => {
                t.classList.remove(L), t.setAttribute("aria-expanded", !1)
            })), this.tags = [], this.container.setAttribute("data-tags", "");
            let e = this.collectionHandle + "/?sort_by=" + this.getSortValue();
            this.renderTagFiltersProducts(e)
        },
        getProductsOffsetTop: function() {
            return this.productGrid.getBoundingClientRect().top - document.body.getBoundingClientRect().top - this.filtersStickyBar.offsetHeight
        },
        getStickyBarOffsetTop: function() {
            return this.filtersStickyBar.getBoundingClientRect().top - document.body.getBoundingClientRect().top
        },
        initProductGridEvents: function() {
            this.productGridEvents = new PaloAlto.ProductGrid(this.container), this.initInfinityScroll(), setTimeout((() => {
                this.finishLoading()
            }), 450)
        },
        initInfinityScroll: function() {
            if (!theme.settings.enableInfinityScroll) return;
            const t = this.namespace;
            this.endlessCollection = new Ajaxinate({
                container: "#AjaxinateLoop",
                pagination: "#AjaxinatePagination",
                method: "scroll",
                namespace: t,
                callback: () => {
                    this.initProductGridEvents(), AOS.refreshHard()
                }
            })
        },
        startLoading: function() {
            this.container.classList.add(P), this.hideFilters(), document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
                bubbles: !0
            }));
            let t = this.getProductsOffsetTop();
            window.scrollTo({
                top: t,
                left: 0,
                behavior: "smooth"
            })
        },
        finishLoading: function() {
            this.container.classList.remove(P);
            document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
                bubbles: !0,
                detail: 300
            })), AOS.refreshHard()
        },
        onDeselect: function() {
            $.magnificPopup.close()
        },
        onUnload: function(t) {
            "object" == typeof this.endlessCollection && this.endlessCollection.destroy(), $.magnificPopup.close()
        }
    }), T
}(), PaloAlto.HoverDisclosure = function() {
    const t = "data-hover-disclosure-toggle",
        e = "[data-site-header]",
        i = "[data-top-link]",
        n = "[data-stagger]",
        o = "[data-stagger-first]",
        r = "[data-stagger-second]",
        s = "is-visible",
        a = "meganav--visible",
        l = "meganav--is-transitioning",
        c = "grandparent";

    function u(n) {
        this.disclosure = n, this.wrapper = n.closest(e), this.key = this.disclosure.id, this.trigger = document.querySelector(`[${t}='${this.key}']`), this.link = this.trigger.querySelector(i), this.grandparent = this.trigger.classList.contains(c), this.transitionTimeout = 0, this.trigger.setAttribute("aria-haspopup", !0), this.trigger.setAttribute("aria-expanded", !1), this.trigger.setAttribute("aria-controls", this.key), this.connectHoverToggle(), this.handleTablets(), this.staggerChildAnimations()
    }
    return u.prototype = $.extend({}, u.prototype, {
        showDisclosure(t) {
            t && t.type && "mouseenter" === t.type && this.wrapper.classList.add(l), this.grandparent ? this.wrapper.classList.add(a) : this.wrapper.classList.remove(a), this.trigger.setAttribute("aria-expanded", !0), this.trigger.classList.add(s), this.disclosure.classList.add(s), this.transitionTimeout && clearTimeout(this.transitionTimeout), this.transitionTimeout = setTimeout((() => {
                this.wrapper.classList.remove(l)
            }), 200)
        },
        hideDisclosure() {
            this.disclosure.classList.remove(s), this.trigger.classList.remove(s), this.trigger.setAttribute("aria-expanded", !1), this.wrapper.classList.remove(a, l)
        },
        staggerChildAnimations() {
            this.disclosure.querySelectorAll(n).forEach(((t, e) => {
                "cz-icons" == t.parentElement.attributes.id.nodeValue ? t.style.transitionDelay = 20 * e + 10 + "ms" : t.style.transitionDelay = 60 * e + 10 + "ms"
            }));
            this.disclosure.querySelectorAll(o).forEach(((t, e) => {
                const i = 150 * e;
                t.style.transitionDelay = `${i}ms`, t.parentElement.querySelectorAll(r).forEach(((t, e) => {
                    const n = 20 * (e + 1);
                    t.style.transitionDelay = `${i+n}ms`
                }))
            }))
        },
        handleTablets() {
            this.trigger.addEventListener("touchstart", function(t) {
                this.disclosure.classList.contains(s) || (t.preventDefault(), this.showDisclosure(t))
            }.bind(this), {
                passive: !0
            })
        },
        connectHoverToggle() {
            this.trigger.addEventListener("mouseenter", (t => this.showDisclosure(t))), this.link.addEventListener("focus", (t => this.showDisclosure(t))), this.trigger.addEventListener("mouseleave", (() => this.hideDisclosure())), this.trigger.addEventListener("focusout", (t => {
                this.trigger.contains(t.relatedTarget) || this.hideDisclosure()
            })), this.disclosure.addEventListener("keyup", (t => {
                t.which === slate.utils.keyboardKeys.ESCAPE && this.hideDisclosure()
            }))
        },
        onBlockSelect(t) {
            this.disclosure.contains(t.target) && this.showDisclosure(t)
        },
        onBlockDeselect(t) {
            this.disclosure.contains(t.target) && this.hideDisclosure()
        }
    }), u
}();
var LibraryLoader = function() {
    var t = "link",
        e = "script",
        i = "requested",
        n = "loaded",
        o = {
            youtubeSdk: {
                tagId: "youtube-sdk",
                src: "https://www.youtube.com/iframe_api",
                type: e
            },
            modelViewerUiStyles: {
                tagId: "shopify-model-viewer-ui-styles",
                src: "https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css",
                type: t
            }
        };
    return {
        load: function(r, s) {
            var a = o[r];
            if (a && a.status !== i)
                if (s = s || function() {}, a.status !== n) {
                    var l;
                    switch (a.status = i, a.type) {
                        case e:
                            l = function(t, e) {
                                var i = document.createElement("script");
                                return i.src = t.src, i.addEventListener("load", (function() {
                                    t.status = n, e()
                                })), i
                            }(a, s);
                            break;
                        case t:
                            l = function(t, e) {
                                var i = document.createElement("link");
                                return i.href = t.src, i.rel = "stylesheet", i.type = "text/css", i.addEventListener("load", (function() {
                                    t.status = n, e()
                                })), i
                            }(a, s)
                    }
                    l.id = a.tagId, a.element = l;
                    var c = document.getElementsByTagName(a.type)[0];
                    c.parentNode.insertBefore(l, c)
                } else s()
        }
    }
}();

function singles(t, e) {
    let i = 0,
        n = 0;
    e.forEach((t => {
        if (t.offsetHeight > n) {
            const e = parseInt(window.getComputedStyle(t).marginTop) + parseInt(window.getComputedStyle(t).marginBottom);
            e > i && (i = e), n = t.offsetHeight
        }
    }));
    const o = t.querySelectorAll("[data-overflow-background]");
    [t, ...o].forEach((t => {
        t.style.setProperty("min-height", `calc(${n+i}px + var(--header-height)`)
    }))
}

function doubles(t) {
    if (window.innerWidth < window.theme.sizes.small) {
        return void t.querySelectorAll("[data-overflow-frame]").forEach((t => {
            const e = t.querySelectorAll("[data-overflow-content]");
            singles(t, e)
        }))
    }
    const e = 2 * parseInt(getComputedStyle(t).getPropertyValue("--outer"));
    let i = 0;
    const n = t.querySelectorAll("[data-overflow-frame]");
    t.querySelectorAll("[data-overflow-content]").forEach((t => {
        t.offsetHeight > i && (i = t.offsetHeight)
    }));
    [...n, ...t.querySelectorAll("[data-overflow-background]")].forEach((t => {
        t.style.setProperty("min-height", `${i}px`)
    })), t.style.setProperty("min-height", `${i+e}px`)
}

function preventOverflow(t) {
    const e = t.querySelectorAll("[data-overflow-container]");
    e && e.forEach((t => {
        const e = t.querySelectorAll("[data-overflow-content]");
        singles(t, e), document.addEventListener("theme:resize", (() => {
            singles(t, e)
        }))
    }));
    const i = t.querySelectorAll("[data-overflow-wrapper]");
    i && i.forEach((t => {
        doubles(t), document.addEventListener("theme:resize", (() => {
            doubles(t)
        }))
    }))
}
PaloAlto.CustomScrollbar = function() {
    const t = "[data-custom-scrollbar]",
        e = "[data-custom-scrollbar-items]",
        i = "[data-custom-scrollbar-thumb]";

    function n(n) {
        this.scrollbarItems = n.querySelector(e), this.scrollbar = n.querySelector(t), this.scrollbarThumb = n.querySelector(i), this.trackWidth = 0, this.calcScrollbarEvent = () => this.calculateScrollbar(), this.onScrollbarChangeEvent = t => this.onScrollbarChange(t), this.scrollbar && this.scrollbarItems && (this.events(), this.calculateScrollbar(), this.scrollbarItems.children.length && this.calculateTrack(this.scrollbarItems.children[0]))
    }
    return n.prototype = $.extend({}, n.prototype, {
        calculateTrack(t) {
            const e = t.clientWidth / this.scrollbarThumb.parentElement.clientWidth,
                i = t.offsetLeft / this.scrollbarThumb.parentElement.clientWidth;
            this.scrollbar.style.setProperty("--thumb-scale", e), this.scrollbar.style.setProperty("--thumb-position", this.trackWidth * i + "px")
        },
        calculateScrollbar() {
            if (this.scrollbarItems.children.length) {
                const t = [...this.scrollbarItems.children];
                this.trackWidth = 0, t.forEach((t => {
                    this.trackWidth += t.offsetWidth + parseInt(window.getComputedStyle(t).marginRight)
                })), this.scrollbar.style.setProperty("--track-width", `${this.trackWidth}px`)
            }
        },
        onScrollbarChange(t) {
            t && t.detail && t.detail.element && this.calculateTrack(t.detail.element)
        },
        events() {
            document.addEventListener("theme:resize:width", this.calcScrollbarEvent), document.addEventListener("theme:custom-scrollbar:change", this.onScrollbarChangeEvent)
        },
        destroy() {
            document.removeEventListener("theme:resize:width", this.calcScrollbarEvent), document.removeEventListener("theme:custom-scrollbar:change", this.onScrollbarChangeEvent)
        }
    }), n
}(), PaloAlto.LoadPhotoswipe = function() {
    const t = ".pswp",
        e = ".pswp__custom-close",
        i = "iframe, video",
        n = ".pswp__thumbs",
        o = "is-current",
        r = "pswp--custom-loader",
        s = "pswp--custom-opening",
        a = "pswp__loader",
        l = "data-pswp-option-classes",
        c = `<div class="${a}"><div class="loader loader--image"><div class="loader__image"></div></div></div>`;

    function u(i, o) {
        this.items = i, this.pswpElement = document.querySelectorAll(t)[0], this.popup = null, this.popupThumbs = null, this.popupThumbsContainer = this.pswpElement.querySelector(n), this.closeBtn = this.pswpElement.querySelector(e);
        this.options = "" !== o ? o : {
            history: !1,
            focus: !1,
            mainClass: ""
        }, this.init()
    }
    return u.prototype = $.extend({}, u.prototype, {
        init() {
            document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
                bubbles: !0
            })), this.pswpElement.classList.add(s), this.initLoader(), this.loadPopup()
        },
        initLoader() {
            if (this.pswpElement.classList.contains(r) && "" !== this.options && this.options.mainClass) {
                this.pswpElement.setAttribute(l, this.options.mainClass);
                let t = document.createElement("div");
                t.innerHTML = c, t = t.firstChild, this.pswpElement.appendChild(t)
            } else this.pswpElement.setAttribute(l, "")
        },
        loadPopup() {
            this.pswpElement.classList.contains(r) && this.pswpElement.classList.remove(r), this.pswpElement.classList.remove(s), this.popup = new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, this.items, this.options), this.popup.init(), this.thumbsActions(), this.popup.listen("close", (() => this.onClose())), this.closeBtn && this.closeBtn.addEventListener("click", (() => this.popup.close()))
        },
        thumbsActions() {
            this.popupThumbsContainer && this.popupThumbsContainer.firstChild && (this.popupThumbsContainer.addEventListener("wheel", (t => this.stopDisabledScroll(t))), this.popupThumbsContainer.addEventListener("mousewheel", (t => this.stopDisabledScroll(t))), this.popupThumbsContainer.addEventListener("DOMMouseScroll", (t => this.stopDisabledScroll(t))), this.popupThumbs = this.pswpElement.querySelectorAll(`${n} > *`), this.popupThumbs.forEach(((t, e) => {
                t.addEventListener("click", (i => {
                    i.preventDefault(), t.parentElement.querySelector(`.${o}`).classList.remove(o), t.classList.add(o), this.popup.goTo(e)
                }))
            })), this.popup.listen("imageLoadComplete", (() => this.setCurrentThumb())), this.popup.listen("beforeChange", (() => this.setCurrentThumb())))
        },
        stopDisabledScroll(t) {
            t.stopPropagation()
        },
        onClose() {
            const t = this.pswpElement.querySelector(i);
            if (t && t.parentNode.removeChild(t), this.popupThumbsContainer && this.popupThumbsContainer.firstChild)
                for (; this.popupThumbsContainer.firstChild;) this.popupThumbsContainer.removeChild(this.popupThumbsContainer.firstChild);
            this.pswpElement.setAttribute(l, "");
            const e = this.pswpElement.querySelector(`.${a}`);
            e && this.pswpElement.removeChild(e), setTimeout((() => {
                document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
                    bubbles: !0
                }))
            }), 250)
        },
        setCurrentThumb() {
            const t = this.pswpElement.querySelector(`${n} > .${o}`);
            if (t && t.classList.remove(o), !this.popupThumbs) return;
            const e = this.popupThumbs[this.popup.getCurrentIndex()];
            e.classList.add(o), this.scrollThumbs(e)
        },
        scrollThumbs(t) {
            const e = this.popupThumbsContainer.scrollLeft + this.popupThumbsContainer.offsetWidth,
                i = t.offsetLeft;
            if (e <= i + t.offsetWidth || e > i) {
                const e = parseInt(window.getComputedStyle(t).marginLeft);
                this.popupThumbsContainer.scrollTo({
                    top: 0,
                    left: i - e,
                    behavior: "smooth"
                })
            }
        }
    }), u
}(), PaloAlto.Popout = function() {
    var t = "form",
        e = "[data-popout-list]",
        i = "[data-popout-toggle]",
        n = "[data-popout-input]",
        o = "[data-popout-option]",
        r = "[data-popout-text]",
        s = "data-popout-prevent",
        a = "data-quantity-field",
        l = "data-value",
        c = "aria-expanded",
        u = "aria-current",
        d = "[data-product-image]",
        h = "[data-product-grid-item]",
        p = "select-popout__list--visible",
        f = "select-popout--alt",
        m = "--current",
        g = "is-visible";

    function v(t) {
        this.popout = t, this.popoutList = this.popout.querySelector(e), this.popoutToggle = this.popout.querySelector(i), this.popoutText = this.popout.querySelector(r), this.popoutInput = this.popout.querySelector(n), this.popoutOptions = this.popout.querySelectorAll(o), this.popoutPrevent = "true" === this.popout.getAttribute(s), this.popupToggleFocusoutEvent = t => this.popupToggleFocusout(t), this.popupListFocusoutEvent = t => this.popupListFocusout(t), this.popupToggleClickEvent = t => this.popupToggleClick(t), this.popoutKeyupEvent = t => this.popoutKeyup(t), this.popupOptionsClickEvent = t => this.popupOptionsClick(t), this._connectOptionsDispatchEvent = t => this._connectOptionsDispatch(t), this._connectOptions(), this._connectToggle(), this._onFocusOut(), this.popoutInput && this.popoutInput.hasAttribute(a) && document.addEventListener("theme:cart:update", this.updatePopout.bind(this))
    }
    return v.prototype = $.extend({}, v.prototype, {
        unload() {
            this.popoutOptions.length && this.popoutOptions.forEach((t => {
                t.removeEventListener("theme:popout:click", this.popupOptionsClickEvent), t.removeEventListener("click", this._connectOptionsDispatchEvent)
            })), this.popoutToggle.removeEventListener("click", this.popupToggleClickEvent), this.popoutToggle.removeEventListener("focusout", this.popupToggleFocusoutEvent), this.popoutList.removeEventListener("focusout", this.popupListFocusoutEvent), this.popout.removeEventListener("keyup", this.popoutKeyupEvent)
        },
        popupToggleClick(t) {
            const e = "true" === t.currentTarget.getAttribute(c);
            if (this.popoutList.closest(h)) {
                const t = this.popoutList.closest(h).querySelector(d);
                t && t.classList.toggle(g, !e)
            }
            t.currentTarget.setAttribute(c, !e), this.popoutList.classList.toggle(p)
        },
        popupToggleFocusout(t) {
            this.popout.contains(t.relatedTarget) || this._hideList()
        },
        popupListFocusout(t) {
            const e = t.currentTarget.contains(t.relatedTarget);
            this.popoutList.classList.contains(p) && !e && this._hideList()
        },
        popupOptionsClick(t) {
            if ("#" === t.target.closest(o).attributes.href.value) {
                t.preventDefault();
                let e = "";
                if (t.currentTarget.getAttribute(l) && (e = t.currentTarget.getAttribute(l)), this.popoutInput.value = e, this.popoutPrevent) {
                    this.popoutInput.dispatchEvent(new Event("change")), !t.detail.preventTrigger && this.popoutInput.hasAttribute(a) && this.popoutInput.dispatchEvent(new Event("input"));
                    const i = this.popoutList.querySelector(`[class*="${m}"]`);
                    let n = m;
                    if (i && i.classList.length)
                        for (const t of i.classList)
                            if (t.includes(m)) {
                                n = t;
                                break
                            } const o = this.popoutList.querySelector(`.${n}`);
                    o && (o.classList.remove(`${n}`), t.currentTarget.parentElement.classList.add(`${n}`));
                    const r = this.popoutList.querySelector(`[${u}]`);
                    r && r.hasAttribute(`${u}`) && (r.removeAttribute(`${u}`), t.currentTarget.setAttribute(`${u}`, "true")), "" !== e && (this.popoutText.textContent = e), this.popupToggleFocusout(t), this.popupListFocusout(t)
                } else this._submitForm(e)
            }
        },
        updatePopout() {
            const t = this.popoutList.querySelector(`[${l}="${this.popoutInput.value}"]`);
            t ? (t.dispatchEvent(new CustomEvent("theme:popout:click", {
                cancelable: !0,
                bubbles: !0,
                detail: {
                    preventTrigger: !0
                }
            })), t.parentElement.nextSibling || this.popout.classList.add(f)) : this.popout.classList.add(f)
        },
        popoutKeyup(t) {
            t.which === slate.utils.keyboardKeys.ESCAPE && (this._hideList(), this.popoutToggle.focus())
        },
        bodyClick(t) {
            const e = this.popout.contains(t.target);
            this.popoutList.classList.contains(p) && !e && this._hideList()
        },
        _connectToggle() {
            this.popoutToggle.addEventListener("click", this.popupToggleClickEvent)
        },
        _connectOptions() {
            this.popoutOptions.length && this.popoutOptions.forEach((t => {
                t.addEventListener("theme:popout:click", this.popupOptionsClickEvent), t.addEventListener("click", this._connectOptionsDispatchEvent)
            }))
        },
        _connectOptionsDispatch(t) {
            const e = new CustomEvent("theme:popout:click", {
                cancelable: !0,
                bubbles: !0,
                detail: {
                    preventTrigger: !1
                }
            });
            t.target.dispatchEvent(e) || t.preventDefault()
        },
        _onFocusOut() {
            this.popoutToggle.addEventListener("focusout", this.popupToggleFocusoutEvent), this.popoutList.addEventListener("focusout", this.popupListFocusoutEvent), this.popout.addEventListener("keyup", this.popoutKeyupEvent), document.body.addEventListener("click", this.bodyClick.bind(this))
        },
        _submitForm() {
            const e = this.popout.closest(t);
            e && e.submit()
        },
        _hideList() {
            this.popoutList.classList.remove(p), this.popoutToggle.setAttribute(c, !1)
        }
    }), v
}(), PaloAlto.NavSearch = {
    selectors: {
        body: "body",
        header: "[data-site-header]",
        search: "[data-nav-search]",
        searchOpen: "[data-nav-search-open]",
        searchClose: "[data-nav-search-close]",
        searchForm: "[data-nav-search-form]",
        searchContainer: "[data-nav-search-container]",
        searchScroller: "[data-nav-search-scroller]",
        searchResultsContainer: "[data-nav-search-results]",
        searchInput: "[data-nav-search-input]",
        popularSearchLink: "[data-popular-search-link]",
        productTemplate: "[product-grid-item-template]",
        productsWrapper: "[data-products-wrap]",
        noresultTemplate: "[noresult-item-template]",
        resultsPagination: "[data-results-pagination]"
    },
    classes: {
        pushUp: "push-up",
        cartDrawerOpen: "js-drawer-open-cart",
        drawerOpen: "js-drawer-open",
        isSearching: "is-searching",
        isSearchVisible: "is-search-visible",
        navSearchIsVisible: "nav-search--is-visible",
        loading: "loading",
        isPaginationVisible: "is-pagination-visible"
    },
    init: function() {
        this.namespace = ".search", this.productTemplate = document.querySelector(this.selectors.productTemplate).innerHTML, this.noresultTemplate = document.querySelector(this.selectors.noresultTemplate).innerHTML, this.searchContainer = document.querySelector(this.selectors.search), this.result = null, this.openSearchTimeout = 0, this.initListeners()
    },
    initListeners: function() {
        const t = this;
        $(this.selectors.searchForm).on("keyup", this.selectors.searchInput, PaloAlto.debounce((function(e) {
            let i = $(this).val();
            i.length > 1 && e.keyCode !== slate.utils.keyboardKeys.ENTER && ($(t.selectors.searchContainer).addClass([t.classes.isSearching, t.classes.pushUp]), t.fetchProductSuggestions(i))
        }), 300)), $(this.selectors.search).on("keyup", (function(e) {
            e.keyCode === slate.utils.keyboardKeys.ESCAPE && (e.stopImmediatePropagation(), t.close())
        })), $(this.selectors.searchOpen).on("click", (function(e) {
            e.preventDefault(), t.open()
        })), $(this.selectors.searchClose).on("click", (function(e) {
            e.preventDefault(), t.close()
        })), $(this.selectors.popularSearchLink).on("click", (function(e) {
            e.preventDefault();
            const i = $(this).text();
            $(t.selectors.searchInput).val(i), window.location.href = `${theme.routes.search_url}?type=product&q=${i}&options[prefix]=last`
        }))
    },
    open: function() {
        const t = this,
            e = $(this.selectors.body).hasClass(this.classes.drawerOpen),
            i = $(this.selectors.body).hasClass(this.classes.cartDrawerOpen);

        function n() {
            const e = document.querySelector(t.selectors.searchScroller);
            $(t.selectors.header).addClass(t.classes.isSearchVisible), $(t.selectors.search).addClass(t.classes.navSearchIsVisible), document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
                bubbles: !0,
                detail: e
            })), setTimeout((function() {
                slate.a11y.trapFocus({
                    container: t.searchContainer,
                    elementToFocus: $(t.selectors.searchInput)
                }), $(t.selectors.searchInput).focus().select()
            }), 100)
        }
        e || i ? (PaloAlto.Drawer.close(), this.openSearchTimeout && clearTimeout(this.openSearchTimeout), this.openSearchTimeout = setTimeout(n, 400)) : n()
    },
    close: function() {
        if (!$(this.selectors.header).hasClass(this.classes.isSearchVisible)) return;
        this.reset(), slate.a11y.removeTrapFocus({
            container: this.searchContainer
        }), $(this.selectors.header).removeClass(this.classes.isSearchVisible), $(this.selectors.search).removeClass(this.classes.navSearchIsVisible), $(this.selectors.searchOpen).trigger("focus"), setTimeout((() => {
            document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
                bubbles: !0
            }))
        }), 250)
    },
    reset: function() {
        $(this.selectors.searchForm)[0].reset(), $(this.selectors.productsWrapper).empty(), $(this.selectors.searchContainer).removeClass([this.classes.isSearching, this.classes.pushUp]), $(this.selectors.searchResultsContainer).removeClass(this.classes.isPaginationVisible)
    },
    fetchProductSuggestions: function(t) {
        const e = this;
        fetch(`/search/suggest.json?q=${encodeURIComponent(t)}&resources[type]=product&resources[limit]=10&resources[options][unavailable_products]=last`).then(this.handleErrors).then((t => t.json())).then((t => (this.result = t.resources.results, this.fetchProducts(this.result.products)))).then((i => {
            $(this.selectors.productsWrapper).empty(), $(this.selectors.searchResultsContainer).removeClass(this.classes.isPaginationVisible), "" === i ? this.injectHTML($(this.selectors.productsWrapper)[0], this.renderNoResult()) : (this.injectHTML($(this.selectors.productsWrapper)[0], i), this.result.products.length > 9 && ($(`${this.selectors.resultsPagination} > a`).attr("href", `${theme.routes.search_url}?type=product&q=${t}&options[prefix]=last`), $(this.selectors.searchResultsContainer).addClass(this.classes.isPaginationVisible)), slate.a11y.removeTrapFocus({
                container: e.searchContainer
            }), slate.a11y.trapFocus({
                container: e.searchContainer,
                elementToFocus: $(e.selectors.searchInput)
            })), $(this.selectors.searchContainer).removeClass(this.classes.isSearching)
        })).catch((t => {
            console.error(t)
        }))
    },
    injectHTML(t, e) {
        t.innerHTML += e
    },
    renderNoResult() {
        const t = {
            text: theme.strings.no_results
        };
        return Sqrl.render(this.noresultTemplate, {
            item: t
        })
    },
    fetchProducts(t) {
        const e = [];
        return t.forEach((t => {
            e.push(PaloAlto.fetchProduct(t.handle).then((t => {
                const e = PaloAlto.formatPrices(t);
                return this.renderProduct(e)
            })))
        })), Promise.all(e).then((t => {
            let e = "";
            return t.forEach((t => {
                e += t
            })), e
        }))
    },
    renderProduct(t) {
        const e = t.title.replace(/(<([^>]+)>)/gi, "");
        let i = null,
            n = "";
        if (void 0 !== t.media && (i = t.media[0]), i) {
            let t = !1;
            "contain" == theme.settings.gridImageSize && (t = i.preview_image.aspect_ratio > theme.settings.gridImageAspectRatio ? "landscape" : "portrait"), n = {
                thumb: PaloAlto.BgSet.render(getSizedImageUrl(i.preview_image.src, "2048x"), i.preview_image.aspect_ratio),
                aspectRatio: i.preview_image.aspect_ratio,
                layout: t
            }
        } else n = {
            thumb: theme.assets.no_image,
            alt: "",
            aspectRatio: 1
        };
        const o = {
            ...t,
            title: e,
            image: n
        };
        return Sqrl.render(this.productTemplate, {
            product: o
        })
    },
    handleErrors: t => t.ok ? t : t.json().then((function(e) {
        throw new PaloAlto.FetchError({
            status: t.statusText,
            headers: t.headers,
            json: e
        })
    }))
}, PaloAlto.ProductAddForm = function() {
    const t = "[data-product]",
        e = "[data-product-form]",
        i = "[data-add-to-cart]",
        n = "[data-add-to-cart-text]",
        o = "[data-compare-price]",
        r = "[data-form-wrapper]",
        s = "[data-product-select]",
        a = "[data-price-wrapper]",
        l = "[data-price-off]",
        c = "[data-price-off-type]",
        u = "[data-price-off-amount]",
        d = "[data-product-single-media-slider]",
        h = "[data-product-json]",
        p = "[data-product-price]",
        f = "[data-product-unit-price]",
        m = "[data-product-base]",
        g = "[data-product-unit]",
        v = "_preorder",
        y = "data-enable-history-state",
        b = "[data-subscription-watch-price]",
        w = "[data-subscription-selectors]",
        S = "[data-toggles-group]",
        x = "data-group-toggle",
        E = "[data-plan-description]",
        k = "[data-remaining-count]",
        C = "[data-remaining-max]",
        A = "data-remaining-max",
        L = "[data-remaining-wrapper]",
        P = "[data-product-remaining-json]",
        T = "[data-notification-form]",
        _ = "[data-store-availability-container]",
        I = "[data-upsell-btn]",
        q = "hidden",
        D = "variant--soldout",
        F = "variant--unavailabe",
        O = "product__price--sale",
        M = "product__notification--hidden",
        z = "count-is-low",
        j = "count-is-in",
        N = "count-is-out",
        H = "count-is-unavailable";

    function B(i) {
        if (this.container = i, this.product = this.container.querySelector(t), this.productForm = this.container.querySelector(e), !this.product || !this.productForm) {
            return void new PaloAlto.QuantityCounter(this.container).init()
        }
        if (this.storeAvailabilityContainer = this.container.querySelector(_), this.enableHistoryState = "true" === this.container.getAttribute(y), this.hasUnitPricing = this.container.querySelector(g), this.subSelectors = this.container.querySelector(w), this.subPrices = this.container.querySelector(b), this.priceOffWrap = this.container.querySelector(l), this.priceOffAmount = this.container.querySelector(u), this.priceOffType = this.container.querySelector(c), this.planDecription = this.container.querySelector(E), this.sellout = null, this.remainingWrapper = this.container.querySelector(L), this.remainingWrapper) {
            const t = this.container.querySelector(C);
            this.remainingMaxInt = parseInt(t.getAttribute(A), 10), this.remainingCount = this.container.querySelector(k), this.remainingJSONWrapper = this.container.querySelector(P), this.remainingJSON = null, this.remainingJSONWrapper && "" !== this.remainingJSONWrapper.innerHTML ? this.remainingJSON = JSON.parse(this.remainingJSONWrapper.innerHTML) : console.warn("Missing product quantity JSON")
        }
        this.storeAvailabilityContainer && (this.storeAvailability = new PaloAlto.StoreAvailability(this.storeAvailabilityContainer));
        new PaloAlto.QuantityCounter(this.container).init(), this.init()
    }
    return B.prototype = $.extend({}, B.prototype, {
        init() {
            let t = null;
            const e = this.container.querySelector(h);
            e && (t = e.innerHTML), t ? (this.productJSON = JSON.parse(t), this.linkForm(), this.sellout = new PaloAlto.SelloutVariants(this.container, this.productJSON)) : console.error("Missing product JSON")
        },
        destroy() {
            this.productForm.destroy()
        },
        linkForm() {
            this.productForm = new PaloAlto.ProductForm(this.productForm, this.productJSON, {
                onOptionChange: this.onOptionChange.bind(this),
                onPlanChange: this.onPlanChange.bind(this)
            });
            if (new URLSearchParams(window.location.search).get("variant")) {
                var t = this.productForm.getFormState();
                t.variant.id && this.productJSON.variants.forEach((function(e, i) {
                    e.id === t.variant.id && document.querySelectorAll(".product__selectors .selector-wrapper .select__fieldset .select-popout .select-popout__list .select-popout__list__scroll .select-popout__item").forEach((function(e, i) {
                        e.querySelector('[data-value="' + t.variant.title + '"]') && e.querySelector('[data-value="' + t.variant.title + '"]').click()
                    }))
                })), this.pushState(this.productForm.getFormState())
            }
            this.subsToggleListeners()
        },
        onOptionChange(t) {
            this.pushState(t.dataset), this.updateProductImage(t)
        },
        onPlanChange(t) {
            this.subPrices && this.pushState(t.dataset)
        },
        pushState(t) {
            this.productState = this.setProductState(t), this.updateAddToCartState(t), this.updateProductPrices(t), this.updateSaleText(t), this.updateSubscriptionText(t), this.fireHookEvent(t), this.updateRemaining(t), this.sellout?.update(t), this.enableHistoryState && this.updateHistoryState(t), this.storeAvailability && this.storeAvailability.updateContent(t.variant.id, this.productForm.product.title)
        },
        updateAddToCartState(t) {
            const e = t.variant,
                o = this.container.querySelectorAll(a),
                l = this.container.querySelectorAll(i),
                c = this.container.querySelectorAll(n),
                u = this.container.querySelectorAll(r),
                d = this.container.querySelectorAll(T);
            let h = theme.strings.add_to_cart;
            this.productJSON.tags.includes(v) && (h = theme.strings.preorder), o.length && e && o.forEach((t => {
                t.classList.remove(q)
            })), l.length && l.forEach((t => {
                t.matches(I) || (e && e.available ? t.disabled = !1 : t.disabled = !0)
            })), c.length && c.forEach((t => {
                e ? e.available ? t.innerHTML = h : t.innerHTML = theme.strings.sold_out : t.innerHTML = theme.strings.unavailable
            })), u.length && u.forEach((t => {
                if (e) {
                    e.available ? t.classList.remove(D, F) : (t.classList.add(D), t.classList.remove(F));
                    const i = t.querySelector(s);
                    i && "" != i.value && (i.value = e.id)
                } else t.classList.add(F), t.classList.remove(D)
            })), d.length && d.forEach((t => {
                e && e.available ? t.classList.add(M) : t.classList.remove(M)
            }))
        },
        updateHistoryState(t) {
            const e = t.variant,
                i = t.plan,
                n = window.location.href;
            if (e && n.includes("/product")) {
                const t = new window.URL(n),
                    o = t.searchParams;
                o.set("variant", e.id), i && i.detail && i.detail.id && this.productState.hasPlan ? o.set("selling_plan", i.detail.id) : o.delete("selling_plan"), t.search = o.toString();
                const r = t.toString();
                window.history.replaceState({
                    path: r
                }, "", r)
            }
        },
        updateRemaining(t) {
            const e = t.variant;
            if (e && this.remainingWrapper && this.remainingJSON && this.remainingCount) {
                const t = this.remainingJSON[e.id];
                t && t <= this.remainingMaxInt && t > 0 ? (this.remainingWrapper.classList.remove(j, N, H), this.remainingWrapper.classList.add(z), this.remainingCount.innerHTML = t) : this.productState.soldOut ? (this.remainingWrapper.classList.remove(z, j, H), this.remainingWrapper.classList.add(N)) : this.productState.available && (this.remainingWrapper.classList.remove(z, N, H), this.remainingWrapper.classList.add(j))
            } else this.remainingWrapper && (this.remainingWrapper.classList.remove(j, N, z), this.remainingWrapper.classList.add(H))
        },
        getBaseUnit: t => 1 === t.unit_price_measurement.reference_value ? t.unit_price_measurement.reference_unit : t.unit_price_measurement.reference_value + t.unit_price_measurement.reference_unit,
        subsToggleListeners() {
            this.container.querySelectorAll(S).forEach((t => {
                t.addEventListener("change", function(t) {
                    const e = t.target.value.toString(),
                        i = this.container.querySelector(`[${x}="${e}"]`),
                        n = this.container.querySelectorAll(`[${x}]`);
                    if (i) {
                        i.classList.remove(q);
                        const t = i.querySelector('[name="selling_plan"]');
                        t.checked = !0, t.dispatchEvent(new Event("change"))
                    }
                    n.forEach((t => {
                        if (t !== i) {
                            t.classList.add(q);
                            t.querySelectorAll('[name="selling_plan"]').forEach((t => {
                                t.checked = !1, t.dispatchEvent(new Event("change"))
                            }))
                        }
                    }))
                }.bind(this))
            }))
        },
        updateSaleText(t) {
            this.productState.planSale ? this.updateSaleTextSubscription(t) : this.productState.onSale ? this.updateSaleTextStandard(t) : this.priceOffWrap && this.priceOffWrap.classList.add(q)
        },
        updateSaleTextStandard(t) {
            if (!this.priceOffType) return;
            this.priceOffType.innerHTML = window.theme.strings.sale_badge_text || "sale";
            const e = t.variant;
            if (window.theme.settings.savingBadgeType && "percentage" === window.theme.settings.savingBadgeType) {
                const t = (e.compare_at_price - e.price) / e.compare_at_price,
                    i = Math.floor(100 * t);
                this.priceOffAmount.innerHTML = `${i}%`
            } else {
                const t = e.compare_at_price - e.price;
                this.priceOffAmount.innerHTML = slate.Currency.formatMoney(t, theme.moneyFormat)
            }
            this.priceOffWrap.classList.remove(q)
        },
        updateSaleTextSubscription(t) {
            this.priceOffType.innerHTML = window.theme.strings.subscription || "subscripton";
            const e = t.variant,
                i = t.plan.detail.price_adjustments[0],
                n = i.value;
            i && "percentage" === i.value_type ? this.priceOffAmount.innerHTML = `${n}%` : i && "price" === i.value_type ? this.priceOffAmount.innerHTML = slate.Currency.formatMoney(e.price - i.value, theme.moneyFormat) : this.priceOffAmount.innerHTML = slate.Currency.formatMoney(n, theme.moneyFormat), this.priceOffWrap.classList.remove(q)
        },
        updateSubscriptionText(t) {
            t.plan && this.planDecription && null !== t.plan.detail.description ? (this.planDecription.innerHTML = t.plan.detail.description, this.planDecription.classList.remove(q)) : this.planDecription && this.planDecription.classList.add(q)
        },
        updateProductPrices(t) {
            const e = t.variant,
                i = t.plan;
            this.container.querySelectorAll(a).forEach((t => {
                const n = t.querySelector(o),
                    r = t.querySelector(p);
                let s = "",
                    a = "";
                this.productState.available && (s = e.compare_at_price, a = e.price), this.productState.hasPlan && (a = i.allocation.price), this.productState.planSale && (s = i.allocation.compare_at_price, a = i.allocation.price), n && (this.productState.onSale || this.productState.planSale ? (n.classList.remove(q), r.classList.add(O)) : (n.classList.add(q), r.classList.remove(O)), n.innerHTML = slate.Currency.formatMoney(s, theme.moneyFormat)), r.innerHTML = 0 === a ? window.theme.strings.free : slate.Currency.formatMoney(a, theme.moneyFormat)
            })), this.hasUnitPricing && this.updateProductUnits(t)
        },
        updateProductUnits(t) {
            const e = t.variant,
                i = t.plan;
            let n = null;
            if (e && e.unit_price && (n = e.unit_price), i && i.allocation && i.allocation.unit_price && (n = i.allocation.unit_price), n) {
                const t = this.getBaseUnit(e),
                    i = 0 === n ? window.theme.strings.free : slate.Currency.formatMoney(n, theme.moneyFormat);
                this.container.querySelector(f).innerHTML = i, this.container.querySelector(m).innerHTML = t, PaloAlto.Element.show(this.container.querySelector(g))
            } else PaloAlto.Element.hide(this.container.querySelector(g))
        },
        fireHookEvent(t) {
            const e = t.variant;
            this.container.dispatchEvent(new CustomEvent("theme:variant:change", {
                detail: {
                    variant: e
                },
                bubbles: !0
            }))
        },
        setProductState(t) {
            const e = t.variant,
                i = t.plan,
                n = {
                    available: !0,
                    soldOut: !1,
                    onSale: !1,
                    showUnitPrice: !1,
                    requiresPlan: !1,
                    hasPlan: !1,
                    planPerDelivery: !1,
                    planSale: !1
                };
            return !e || e.requires_selling_plan && !i ? n.available = !1 : (e.available || (n.soldOut = !0), e.compare_at_price > e.price && (n.onSale = !0), e.unit_price && (n.showUnitPrice = !0), this.product && this.product.requires_selling_plan && (n.requiresPlan = !0), i && this.subPrices && (n.hasPlan = !0, i.allocation.per_delivery_price !== i.allocation.price && (n.planPerDelivery = !0), e.price > i.allocation.price && (n.planSale = !0))), n
        },
        updateProductImage(t) {
            const e = t.dataset.variant;
            if (e) {
                const t = e.featured_media ? e.featured_media.id : "",
                    i = this.container.querySelector(d),
                    n = Flickity.data(i);
                if (n && n.isActive) {
                    const e = i.querySelector(`[data-id="${t}"]`);
                    if (e) {
                        const t = parseInt([...e.parentNode.children].indexOf(e));
                        n.select(t)
                    }
                }
            }
        }
    }), B
}(), PaloAlto.SelloutVariants = function() {
    const t = "[data-product-form]",
        e = "[data-option-position]",
        i = '[name^="options"], [data-popout-option]',
        n = "sold-out",
        o = "unavailable",
        r = "data-option-position",
        s = "data-value";

    function a(e, n) {
        this.container = e, this.productJSON = n, this.form = this.container.querySelector(t), this.formData = new FormData(this.form), this.optionElements = this.container.querySelectorAll(i), this.productJSON && this.form && this.init()
    }
    return a.prototype = $.extend({}, a.prototype, {
        init() {
            this.update()
        },
        update() {
            this.getCurrentState(), this.optionElements.forEach((t => {
                const i = t.value || t.getAttribute(s),
                    a = t.closest(e);
                if (!a) return;
                const l = a.getAttribute(r),
                    c = parseInt(l, 10) - 1;
                let u = [...this.selections];
                u[c] = i;
                const d = this.productJSON.variants.find((t => {
                    let e = !0;
                    for (let i = 0; i < u.length; i++) t.options[i] !== u[i] && (e = !1);
                    return e
                }));
                t.classList.remove(n, o), void 0 === d ? t.classList.add(o) : !1 === d?.available && t.classList.add(n)
            }))
        },
        getCurrentState() {
            for (var t of (this.formData = new FormData(this.form), this.selections = [], this.formData.entries())) t[0].includes("options[") && this.selections.push(t[1])
        }
    }), a
}(), PaloAlto.ProductVideo = function() {
    const t = "html5",
        e = "youtube",
        i = "vimeo",
        n = "[data-deferred-media]",
        o = "[data-deferred-media-button]",
        r = "[data-product-single-media-wrapper]",
        s = "[data-video]",
        a = ".media--hidden",
        l = "data-media-id",
        c = "data-autoplay-video",
        u = "media--hidden",
        d = "loaded",
        h = "data-section-id";

    function p(t) {
        this.container = t, this.id = t.getAttribute(h), this.autoplayVideo = "true" === this.container.getAttribute(c), this.players = {}, this.init()
    }
    return p.prototype = $.extend({}, p.prototype, {
        init: function() {
            this.container.querySelectorAll(s).forEach((t => {
                const e = t.querySelector(o);
                e && e.addEventListener("click", this.loadContent.bind(this, t)), this.autoplayVideo && this.loadContent(t)
            }))
        },
        loadContent: function(o) {
            if (o.querySelector(n).getAttribute(d)) return;
            const r = document.createElement("div");
            r.appendChild(o.querySelector("template").content.firstElementChild.cloneNode(!0));
            const s = o.dataset.mediaId,
                a = r.querySelector("video, iframe"),
                l = this.hostFromVideoElement(a),
                c = o.querySelector(n);
            c.appendChild(a), c.setAttribute("loaded", !0), this.players[s] = {
                mediaId: s,
                sectionId: this.id,
                container: o,
                element: a,
                host: l,
                ready: () => {
                    this.createPlayer(s)
                }
            };
            const u = this.players[s];
            switch (u.host) {
                case t:
                    this.loadVideo(u, t);
                    break;
                case i:
                    window.isVimeoAPILoaded ? this.loadVideo(u, i) : loadScript({
                        url: "https://player.vimeo.com/api/player.js"
                    }).then((() => this.loadVideo(u, i)));
                    break;
                case e:
                    window.isYoutubeAPILoaded ? this.loadVideo(u, e) : loadScript({
                        url: "https://www.youtube.com/iframe_api"
                    }).then((() => this.loadVideo(u, e)))
            }
        },
        hostFromVideoElement: function(n) {
            if ("VIDEO" === n.tagName) return t;
            if ("IFRAME" === n.tagName) {
                if (/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(n.src)) return e;
                if (n.src.includes("vimeo.com")) return i
            }
            return null
        },
        loadVideo: function(t, e) {
            t.host === e && t.ready()
        },
        createPlayer: function(n) {
            const o = this.players[n];
            switch (o.container.addEventListener("theme:media:play", (() => this.pauseOtherMedia(n))), o.container.addEventListener("theme:media:visible", (t => this.onVisible(t))), o.container.addEventListener("theme:media:hidden", (t => this.onHidden(t))), o.container.addEventListener("xrLaunch", (t => this.onHidden(t))), this.autoplayVideo && this.observeVideo(o, n), o.host) {
                case t:
                    o.element.addEventListener("play", (() => {
                        o.container.dispatchEvent(new CustomEvent("theme:media:play"), {
                            bubbles: !0
                        })
                    }));
                    const r = o.element.play();
                    void 0 !== r && r.then((t => {})).catch((t => {}));
                    break;
                case i:
                    this.players[n].player = new Vimeo.Player(o.element), this.players[n].player.play(), o.container.dispatchEvent(new CustomEvent("theme:media:play"), {
                        bubbles: !0
                    }), window.isVimeoAPILoaded = !0;
                    break;
                case e:
                    if (o.host == e && o.player) return;
                    YT.ready((() => {
                        const t = o.container.dataset.videoId;
                        this.players[n].player = new YT.Player(o.element, {
                            videoId: t,
                            events: {
                                onReady: t => {
                                    t.target.playVideo(), o.container.dispatchEvent(new CustomEvent("theme:media:play"), {
                                        bubbles: !0
                                    })
                                },
                                onStateChange: t => {
                                    1 == t.data && o.container.dispatchEvent(new CustomEvent("theme:media:play"), {
                                        bubbles: !0
                                    }), 2 == t.data && o.container.dispatchEvent(new CustomEvent("theme:media:pause"), {
                                        bubbles: !0
                                    })
                                }
                            }
                        }), window.isYoutubeAPILoaded = !0
                    }))
            }
        },
        observeVideo: function(t, e) {
            new IntersectionObserver(((e, i) => {
                e.forEach((e => {
                    const i = 0 == e.intersectionRatio,
                        n = !t.element.closest(a);
                    i ? this.pauseVideo(t) : n && this.playVideo(t)
                }))
            }), {
                threshold: 0
            }).observe(t.element)
        },
        playVideo: function(t) {
            t.player && t.player.playVideo ? t.player.playVideo() : t.element && t.element.play ? t.element.play() : t.player && t.player.play && t.player.play(), t.container.dispatchEvent(new CustomEvent("theme:media:play"), {
                bubbles: !0
            })
        },
        pauseVideo: function(t) {
            t.player && t.player.pauseVideo ? t.player.pauseVideo() : t.element && t.element.pause ? t.element.pause() : t.player && t.player.pause && t.player.pause(), t.container.dispatchEvent(new CustomEvent("theme:media:pause"), {
                bubbles: !0
            })
        },
        onHidden: function(t) {
            if (void 0 !== t.target.dataset.mediaId) {
                const e = t.target.dataset.mediaId,
                    i = this.players[e];
                this.pauseVideo(i)
            }
        },
        onVisible: function(t) {
            if (void 0 !== t.target.dataset.mediaId) {
                const e = t.target.dataset.mediaId,
                    i = this.players[e];
                this.playVideo(i), this.pauseOtherMedia(e)
            }
        },
        pauseOtherMedia: function(t) {
            const e = `[${l}="${t}"]`,
                i = document.querySelectorAll(`${r}:not(${e})`);
            i.length && i.forEach((t => {
                t.dispatchEvent(new CustomEvent("theme:media:hidden"), {
                    bubbles: !0
                }), t.classList.add(u)
            }))
        }
    }), p
}(), PaloAlto.ProductModel = function() {
    let t = {},
        e = {},
        i = {};
    const n = "[data-product-single-media-wrapper]",
        o = "[data-product-single-media-group]",
        r = "[data-shopify-xr]",
        s = "data-media-id",
        a = "data-shopify-model3d-id",
        l = "#ModelJson-",
        c = "[data-deferred-media]",
        u = "[data-deferred-media-button]",
        d = "is-loading",
        h = "media--hidden";

    function p(t, n) {
        if (t.querySelector(c).getAttribute("loaded")) return;
        t.classList.add(d);
        const s = document.createElement("div");
        s.appendChild(t.querySelector("template").content.firstElementChild.cloneNode(!0));
        const a = s.querySelector("model-viewer"),
            l = t.querySelector(c);
        l.appendChild(a), l.setAttribute("loaded", !0);
        const u = t.dataset.mediaId,
            h = a.dataset.modelId,
            p = t.closest(o).parentElement.querySelector(r);
        i[n] = {
            element: p,
            defaultId: h
        }, e[u] = {
            modelId: h,
            mediaId: u,
            sectionId: n,
            container: t,
            element: a
        }, window.ShopifyXR ? m() : window.Shopify.loadFeatures([{
            name: "shopify-xr",
            version: "1.0",
            onLoad: f
        }, {
            name: "model-viewer-ui",
            version: "1.0",
            onLoad: m
        }])
    }

    function f(e) {
        if (e) console.warn(e);
        else if (window.ShopifyXR) {
            for (const e in t)
                if (t.hasOwnProperty(e)) {
                    const i = t[e];
                    if (i.loaded) continue;
                    const n = document.querySelector(`${l}${e}`);
                    n && (window.ShopifyXR.addModels(JSON.parse(n.innerHTML)), i.loaded = !0)
                } window.ShopifyXR.setupXRElements()
        } else document.addEventListener("shopify_xr_initialized", (function() {
            f()
        }))
    }

    function m(t) {
        if (t) console.warn(t);
        else
            for (const t in e)
                if (e.hasOwnProperty(t)) {
                    const i = e[t];
                    i.modelViewerUi || (i.modelViewerUi = new Shopify.ModelViewerUI(i.element), g(i))
                }
    }

    function g(t) {
        const e = i[t.sectionId];
        t.container.addEventListener("theme:media:visible", (function() {
            e.element.setAttribute(a, t.modelId), window.theme.touch || (t.modelViewerUi.play(), t.container.dispatchEvent(new CustomEvent("theme:media:play"), {
                bubbles: !0
            }))
        })), t.container.addEventListener("theme:media:hidden", (function() {
            t.modelViewerUi.pause()
        })), t.container.addEventListener("xrLaunch", (function() {
            t.modelViewerUi.pause()
        })), t.element.addEventListener("load", (() => {
            e.element.setAttribute(a, t.modelId), t.container.classList.remove(d), t.container.dispatchEvent(new CustomEvent("theme:media:play"), {
                bubbles: !0
            })
        })), t.element.addEventListener("shopify_model_viewer_ui_toggle_play", (function() {
            v(t.mediaId), t.container.dispatchEvent(new CustomEvent("theme:media:play"), {
                bubbles: !0
            })
        })), t.element.addEventListener("shopify_model_viewer_ui_toggle_pause", (function() {
            t.container.dispatchEvent(new CustomEvent("theme:media:pause"), {
                bubbles: !0
            })
        })), v(t.mediaId)
    }

    function v(t) {
        const e = `[${s}="${t}"]`,
            i = document.querySelectorAll(`${n}:not(${e})`);
        i.length && i.forEach((t => {
            t.dispatchEvent(new CustomEvent("theme:media:hidden"), {
                bubbles: !0
            }), t.classList.add(h)
        }))
    }
    return {
        init: function(e, i) {
            t[i] = {
                loaded: !1
            };
            const n = e.querySelector(u);
            n && n.addEventListener("click", p.bind(this, e, i))
        },
        loadContent: p,
        removeSectionModels: function(i) {
            for (const t in e)
                if (e.hasOwnProperty(t)) {
                    e[t].sectionId === i && delete e[t]
                } delete t[i], delete theme.mediaInstances[i]
        }
    }
}(), PaloAlto.RangeSlider = function() {
    const t = "[data-range-slider]",
        e = "[data-range-left]",
        i = "[data-range-right]",
        n = "[data-range-line]",
        o = "[data-range-holder]",
        r = "data-se-min",
        s = "data-se-max",
        a = "data-se-min-value",
        l = "data-se-max-value",
        c = "data-se-step",
        u = "data-range-filter-update",
        d = "[data-field-price-min]",
        h = "[data-field-price-max]",
        p = "is-initialized";

    function f(t) {
        this.container = t, this.init(), document.addEventListener("theme:filters:init", (() => {
            this.init()
        }))
    }
    return f.prototype = $.extend({}, f.prototype, {
        init: function() {
            if (this.slider = this.container.querySelector(t), !this.slider) return;
            this.resizeFilters = PaloAlto.debounce(this.reset.bind(this), 50), this.onMoveEvent = t => this.onMove(t), this.onStopEvent = t => this.onStop(t), this.onStartEvent = t => this.onStart(t), this.startX = 0, this.x = 0, this.touchLeft = this.slider.querySelector(e), this.touchRight = this.slider.querySelector(i), this.lineSpan = this.slider.querySelector(n), this.min = parseFloat(this.slider.getAttribute(r)), this.max = parseFloat(this.slider.getAttribute(s)), this.step = 0, this.normalizeFact = 26;
            let o = this.min;
            this.slider.hasAttribute(a) && (o = parseFloat(this.slider.getAttribute(a)));
            let u = this.max;
            this.slider.hasAttribute(l) && (u = parseFloat(this.slider.getAttribute(l))), o < this.min && (o = this.min), u > this.max && (u = this.max), o > u && (o = u), this.slider.getAttribute(c) && (this.step = Math.abs(parseFloat(this.slider.getAttribute(c)))), this.reset(), window.addEventListener("resize", this.resizeFilters), this.maxX = this.slider.offsetWidth - this.touchRight.offsetWidth, this.selectedTouch = null, this.initialValue = this.lineSpan.offsetWidth - this.normalizeFact, this.setMinValue(o), this.setMaxValue(u), this.touchLeft.addEventListener("mousedown", this.onStartEvent), this.touchRight.addEventListener("mousedown", this.onStartEvent), this.touchLeft.addEventListener("touchstart", this.onStartEvent, {
                passive: !0
            }), this.touchRight.addEventListener("touchstart", this.onStartEvent, {
                passive: !0
            }), this.slider.classList.add(p)
        },
        reset() {
            this.touchLeft.style.left = "0px", this.touchRight.style.left = this.slider.offsetWidth - this.touchLeft.offsetWidth + "px", this.lineSpan.style.marginLeft = "0px", this.lineSpan.style.width = this.slider.offsetWidth - this.touchLeft.offsetWidth + "px", this.startX = 0, this.x = 0, this.maxX = this.slider.offsetWidth - this.touchRight.offsetWidth, this.initialValue = this.lineSpan.offsetWidth - this.normalizeFact
        },
        setMinValue(t) {
            const e = (t - this.min) / (this.max - this.min);
            this.touchLeft.style.left = Math.ceil(e * (this.slider.offsetWidth - (this.touchLeft.offsetWidth + this.normalizeFact))) + "px", this.lineSpan.style.marginLeft = this.touchLeft.offsetLeft + "px", this.lineSpan.style.width = this.touchRight.offsetLeft - this.touchLeft.offsetLeft + "px", this.slider.setAttribute(a, t)
        },
        setMaxValue(t) {
            const e = (t - this.min) / (this.max - this.min);
            this.touchRight.style.left = Math.ceil(e * (this.slider.offsetWidth - (this.touchLeft.offsetWidth + this.normalizeFact)) + this.normalizeFact) + "px", this.lineSpan.style.marginLeft = this.touchLeft.offsetLeft + "px", this.lineSpan.style.width = this.touchRight.offsetLeft - this.touchLeft.offsetLeft + "px", this.slider.setAttribute(l, t)
        },
        onStart(t) {
            t.preventDefault();
            let e = t;
            t.touches && (e = t.touches[0]), t.currentTarget === this.touchLeft ? this.x = this.touchLeft.offsetLeft : t.currentTarget === this.touchRight && (this.x = this.touchRight.offsetLeft), this.startX = e.pageX - this.x, this.selectedTouch = t.currentTarget, document.addEventListener("mousemove", this.onMoveEvent), document.addEventListener("mouseup", this.onStopEvent), document.addEventListener("touchmove", this.onMoveEvent, {
                passive: !0
            }), document.addEventListener("touchend", this.onStopEvent, {
                passive: !0
            })
        },
        onMove(t) {
            let e = t;
            if (t.touches && (e = t.touches[0]), this.x = e.pageX - this.startX, this.selectedTouch === this.touchLeft ? (this.x > this.touchRight.offsetLeft - this.selectedTouch.offsetWidth + 10 ? this.x = this.touchRight.offsetLeft - this.selectedTouch.offsetWidth + 10 : this.x < 0 && (this.x = 0), this.selectedTouch.style.left = this.x + "px") : this.selectedTouch === this.touchRight && (this.x < this.touchLeft.offsetLeft + this.touchLeft.offsetWidth - 10 ? this.x = this.touchLeft.offsetLeft + this.touchLeft.offsetWidth - 10 : this.x > this.maxX && (this.x = this.maxX), this.selectedTouch.style.left = this.x + "px"), this.lineSpan.style.marginLeft = this.touchLeft.offsetLeft + "px", this.lineSpan.style.width = this.touchRight.offsetLeft - this.touchLeft.offsetLeft + "px", this.calculateValue(), this.slider.getAttribute("on-change")) {
                new Function("min, max", this.slider.getAttribute("on-change"))(this.slider.getAttribute(a), this.slider.getAttribute(l))
            }
            this.onChange(this.slider.getAttribute(a), this.slider.getAttribute(l))
        },
        onStop(t) {
            document.removeEventListener("mousemove", this.onMoveEvent), document.removeEventListener("mouseup", this.onStopEvent), document.removeEventListener("touchmove", this.onMoveEvent, {
                passive: !0
            }), document.removeEventListener("touchend", this.onStopEvent, {
                passive: !0
            }), this.selectedTouch = null, this.calculateValue(), this.onChanged(this.slider.getAttribute(a), this.slider.getAttribute(l))
        },
        onChange(t, e) {
            const i = this.slider.closest(o);
            if (i) {
                const n = i.querySelector(d),
                    o = i.querySelector(h);
                n && o && (n.value = parseInt(t), o.value = parseInt(e))
            }
        },
        onChanged(t, e) {
            this.slider.hasAttribute(u) && this.slider.dispatchEvent(new CustomEvent("theme:filter:range-update", {
                bubbles: !0
            }))
        },
        calculateValue() {
            const t = (this.lineSpan.offsetWidth - this.normalizeFact) / this.initialValue;
            let e = this.lineSpan.offsetLeft / this.initialValue,
                i = e + t;
            if (e = e * (this.max - this.min) + this.min, i = i * (this.max - this.min) + this.min, 0 !== this.step) {
                let t = Math.floor(e / this.step);
                e = this.step * t, t = Math.floor(i / this.step), i = this.step * t
            }
            this.selectedTouch === this.touchLeft && this.slider.setAttribute(a, e), this.selectedTouch === this.touchRight && this.slider.setAttribute(l, i)
        }
    }), f
}(), PaloAlto.PairWithProduct = function() {
    const t = "[pair-product-template]",
        e = "[data-pair-products]";

    function i(i) {
        this.handle = i, this.template = document.querySelector(t).innerHTML, this.pairProducts = document.querySelector(e), this.variant = null, this.variantObject = null, this.init()
    }
    return i.prototype = $.extend({}, i.prototype, {
        init() {
            if (this.handle.includes("_")) {
                const t = this.handle.split("_");
                this.handle = t[0], this.variant = t[1]
            }
            PaloAlto.fetchProduct(this.handle).then((t => {
                if (void 0 === t) return void document.dispatchEvent(new CustomEvent("theme:upsell:product-error"));
                const e = PaloAlto.formatPrices(t, !0);
                let i = !1;
                null !== this.variant && e.variants.filter((t => (t.id === Number(this.variant) && t.available && (this.variantObject = t, i = !0), t))), e.available && null === this.variant || i ? this.renderPairProduct(e) : (this.pairProducts.innerHTML = "", document.dispatchEvent(new CustomEvent("theme:upsell:unavailable")))
            })).catch((t => {
                console.error(t)
            }))
        },
        renderPairProduct(t) {
            const e = this.renderProduct(t);
            this.pairProducts.innerHTML = e
        },
        renderProduct(t) {
            let e = null,
                i = "",
                n = "",
                o = !0;
            if (void 0 !== t.media && (e = t.media[0]), null !== this.variantObject && void 0 !== this.variantObject.featured_media && (e = this.variantObject.featured_media), i = e ? {
                    thumb: PaloAlto.BgSet.render(getSizedImageUrl(e.preview_image.src, "2048x"), e.preview_image.aspect_ratio),
                    aspectRatio: e.preview_image.aspect_ratio
                } : {
                    thumb: window.theme.assets.no_image,
                    aspectRatio: 1
                }, "Title" === t.options[0].name && 1 === t.options.length && "Default Title" === t.options[0].values[0] && (o = !1), null === this.variantObject)
                for (let e = 0; e < t.variants.length; e++) {
                    const i = t.variants[e];
                    if (i.available) {
                        const t = i.title.replaceAll("/", "<span>&nbsp;</span>");
                        n = {
                            ...PaloAlto.formatPrices(i, !0),
                            title: t
                        };
                        break
                    }
                }
            if (null !== this.variantObject) {
                const t = this.variantObject.title.replaceAll("/", "<span>&nbsp;</span>");
                n = {
                    ...PaloAlto.formatPrices(this.variantObject, !0),
                    title: t
                }
            }
            if ("" === n) return "";
            const r = t.title.replace(/(<([^>]+)>)/gi, "");
            n.unit_price_measurement && (n.unitValue = n.unit_price_measurement.reference_unit, 1 !== n.unit_price_measurement.reference_value && (n.unitCount = n.unit_price_measurement.reference_value)), n.compare_at_price = slate.Currency.formatMoney(n.compare_at_price, theme.moneyFormat), 0 === n.price ? n.price = theme.strings.free : n.price = slate.Currency.formatMoney(n.price, theme.moneyFormat);
            const s = {
                ...t,
                title: r,
                image: i,
                firstAvailableVariant: n,
                hasVariants: o,
                addToCartText: theme.strings.add_to_cart
            };
            return Sqrl.render(this.template, {
                product: s
            })
        },
        onUnload: function() {
            document.removeEventListener("theme:resize:width", this.resizeEventUpsell)
        }
    }), i
}(), PaloAlto.Swatches = function() {
    const t = {
            color: "ash"
        },
        e = "data-swatch",
        i = "[data-swatch-template]",
        n = "data-swatch-handle",
        o = "data-swatch-label";

    function r(e) {
        this.settings = {
            ...t,
            ...e
        }, this.match = this.init()
    }

    function s(t) {
        this.element = t, this.colorString = t.getAttribute(e);
        new r({
            color: this.colorString
        }).getColor().then((t => {
            this.colorMatch = t, this.init()
        }))
    }

    function a(t) {
        this.template = document.querySelector(i).innerHTML, this.wrap = t, this.handle = t.getAttribute(n);
        const e = t.getAttribute(o).trim().toLowerCase();
        PaloAlto.fetchProduct(this.handle).then((t => {
            this.product = t, this.colorOption = t.options.find((function(t) {
                return t.name.toLowerCase() === e || null
            })), this.colorOption && (this.swatches = this.colorOption.values, this.init())
        }))
    }
    return r.prototype = $.extend({}, r.prototype, {
        getColor() {
            return this.match
        },
        init() {
            return loadScript({
                json: theme.assets.swatches
            }).then((t => this.matchColors(t, this.settings.color))).catch((t => {
                console.log("failed to load swatch colors script"), console.log(t)
            }))
        },
        matchColors(t, e) {
            let i = "#E5E5E5",
                n = null;
            const o = theme.assets.base || "/",
                r = e.toLowerCase().replace(/\s/g, ""),
                s = t.colors;
            if (s) {
                let t = null;
                if (s.filter(((e, i) => {
                        if (Object.keys(e).toString().toLowerCase().replace(/\s/g, "") === r) return t = i, e
                    })).length && null !== t) {
                    const e = Object.values(s[t])[0];
                    i = e, (e.includes(".jpg") || e.includes(".jpeg") || e.includes(".png") || e.includes(".svg")) && (n = `${o}${e}`, i = "#888888")
                }
            }
            return {
                color: this.settings.color,
                path: n,
                hex: i
            }
        }
    }), s.prototype = $.extend({}, s.prototype, {
        init() {
            this.colorMatch && this.colorMatch.hex && this.element.style.setProperty("--swatch", `${this.colorMatch.hex}`), this.colorMatch && this.colorMatch.path && this.element.style.setProperty("background-image", `url(${this.colorMatch.path})`)
        }
    }), a.prototype = $.extend({}, a.prototype, {
        init() {
            this.wrap.innerHTML = "", this.swatches.forEach((t => {
                let e = this.product.variants.find((e => e.options.includes(t)));
                e && (this.wrap.innerHTML += Sqrl.render(this.template, {
                    color: t,
                    uniq: `${this.product.id}-${e.id}`,
                    variant: e.id,
                    variantUrl: `${this.product.url}?variant=${e.id}`
                }))
            })), this.swatchElements = this.wrap.querySelectorAll(`[${e}]`), this.swatchElements.forEach((t => {
                new s(t)
            }))
        }
    }), {
        Swatch: s,
        GridSwatch: a
    }
}(), PaloAlto.ShareButton = function() {
    const t = "[data-share-button]",
        e = "[data-share-button-tooltip]",
        i = "is-visible",
        n = "is-hiding";

    function o(i) {
        this.container = i, this.button = this.container.querySelector(t), this.tooltip = this.container.querySelector(e), this.transitionSpeed = 200, this.hideTransitionTimeout = 0, this.init()
    }
    return o.prototype = $.extend({}, o.prototype, {
        init() {
            this.button && this.button.addEventListener("click", (() => {
                let t = window.location.href;
                this.button.dataset.shareLink && (t = this.button.dataset.shareLink), this.tooltip.classList.contains(i) || navigator.clipboard.writeText(t).then((() => {
                    this.tooltip.classList.add(i), setTimeout((() => {
                        this.tooltip.classList.add(n), this.tooltip.classList.remove(i), this.hideTransitionTimeout && clearTimeout(this.hideTransitionTimeout), this.hideTransitionTimeout = setTimeout((() => {
                            this.tooltip.classList.remove(n)
                        }), this.transitionSpeed)
                    }), 1500)
                }))
            }))
        }
    }), o
}(), PaloAlto.Tabs = function() {
    const t = "body",
        e = "[data-tab-link]",
        i = "[data-tab-content]",
        n = "[data-custom-scrollbar]",
        o = "[data-custom-scrollbar-holder]",
        r = "[data-slider]",
        s = "current",
        a = "hide",
        l = "alt",
        c = "aos-animate",
        u = "data-tab-link",
        d = "data-tab-content",
        h = "data-start-index";

    function p(e) {
        this.container = e, this.body = document.querySelector(t), this.container && (this.scrollable = this.container.querySelector(`${n}`), this.init(), this.initCustomScrollbar())
    }
    return p.prototype = $.extend({}, p.prototype, {
        init() {
            const t = this.container.querySelectorAll(e),
                i = this.container.querySelector(`[${u}="${this.container.hasAttribute(h)?this.container.getAttribute(h):0}"]`),
                n = this.container.querySelector(`[${d}="${this.container.hasAttribute(h)?this.container.getAttribute(h):0}"]`);
            n && n.classList.add(s), i && i.classList.add(s), this.checkVisibleTabLinks(), t.length && t.forEach((t => {
                const e = parseInt(t.getAttribute(u)),
                    i = this.container.querySelector(`[${d}="${e}"]`);
                t.addEventListener("click", (() => {
                    this.tabChange(t, i)
                })), t.addEventListener("keyup", (e => {
                    e.which !== slate.utils.keyboardKeys.SPACE && e.which !== slate.utils.keyboardKeys.ENTER || this.tabChange(t, i)
                }))
            }))
        },
        initCustomScrollbar() {
            this.scrollable && (this.customScrollbar = new PaloAlto.CustomScrollbar(this.container))
        },
        tabChange(t, n) {
            const l = t.closest(o) ? t.closest(o) : t.parentElement,
                u = parseInt(window.getComputedStyle(l).getPropertyValue("padding-left"));
            this.container.querySelector(`${e}.${s}`).classList.remove(s);
            const d = this.container.querySelector(`${i}.${s}`),
                h = n.querySelector(r);
            d.classList.remove(s), t.classList.add(s), n.classList.add(s), h && h.dispatchEvent(new CustomEvent("theme:tab:change", {
                bubbles: !1
            })), l.scrollTo({
                top: 0,
                left: t.offsetLeft - l.offsetWidth / 2 + t.offsetWidth / 2 + u,
                behavior: "smooth"
            }), t.dispatchEvent(new CustomEvent("theme:custom-scrollbar:change", {
                bubbles: !0,
                detail: {
                    element: t
                }
            })), theme.settings.animations && n.querySelectorAll(`.${c}`).forEach((t => {
                t.classList.remove(c), setTimeout((() => {
                    t.classList.add(c)
                }))
            })), t.classList.contains(a) && n.classList.add(a), this.checkVisibleTabLinks()
        },
        checkVisibleTabLinks() {
            const t = this.container.querySelectorAll(e),
                i = this.container.querySelectorAll(`${e}.${a}`);
            t.length - i.length < 2 ? this.container.classList.add(l) : this.container.classList.remove(l)
        },
        onBlockSelect: function(t) {
            const e = t.target;
            e && (e.dispatchEvent(new Event("click")), e.parentNode.scrollTo({
                top: 0,
                left: e.offsetLeft - e.clientWidth,
                behavior: "smooth"
            }))
        }
    }), p
}(), PaloAlto.Ticker = function() {
    const t = "[data-ticker-scale]",
        e = "[data-ticker-text]",
        i = "data-clone",
        n = "ticker--animated",
        o = "ticker--unloaded",
        r = "ticker__comparitor",
        s = 1.63,
        a = 100,
        l = "data-marquee-speed";

    function c(i, n = !1) {
        this.frame = i, this.stopClone = n, this.scale = this.frame.querySelector(t), this.text = this.frame.querySelector(e), this.comparitor = this.text.cloneNode(!0), this.comparitor.classList.add(r), this.frame.appendChild(this.comparitor), this.scale.classList.remove(o), this.resizeEvent = PaloAlto.debounce((() => this.checkWidth()), 100), this.listen()
    }
    return c.prototype = $.extend({}, c.prototype, {
        listen() {
            document.addEventListener("theme:resize:width", this.resizeEvent), this.checkWidth()
        },
        checkWidth() {
            const t = 2 * window.getComputedStyle(this.frame).paddingLeft.replace("px", "");
            if (this.frame.clientWidth - t < this.comparitor.clientWidth || this.stopClone) {
                if (this.text.classList.add(n), 1 === this.scale.childElementCount) {
                    if (this.clone = this.text.cloneNode(!0), this.clone.setAttribute(i, ""), this.scale.appendChild(this.clone), this.stopClone)
                        for (let t = 0; t < 10; t++) {
                            const t = this.text.cloneNode(!0);
                            t.setAttribute(i, ""), this.scale.appendChild(t)
                        }
                    let t = this.frame.getAttribute(l);
                    null === t && (t = 100);
                    const e = s * (100 / parseInt(t, 10)),
                        n = this.text.clientWidth / a * e;
                    this.scale.style.setProperty("--animation-time", `${n}s`)
                }
            } else {
                this.text.classList.add(n);
                let t = this.scale.querySelector(`[${i}]`);
                t && this.scale.removeChild(t), this.text.classList.remove(n)
            }
        },
        unload() {
            document.removeEventListener("theme:resize:width", this.resizeEvent)
        }
    }), c
}(), PaloAlto.Tooltip = function() {
    const t = "data-tooltip",
        e = "data-tooltip-container",
        i = "data-tooltip-stop-mouseenter",
        n = "tooltip-default",
        o = "is-visible",
        r = "is-hiding";

    function s(e) {
        this.tooltip = e, this.tooltip.hasAttribute(t) && (this.rootClass = n, this.label = this.tooltip.getAttribute(t), this.transitionSpeed = 200, this.hideTransitionTimeout = 0, this.addPinEvent = () => this.addPin(), this.addPinMouseEvent = () => this.addPin(!0), this.removePinEvent = t => throttle(this.removePin(t), 50), this.removePinMouseEvent = t => this.removePin(t, !0, !0), this.init())
    }
    return s.prototype = $.extend({}, s.prototype, {
        init() {
            if (!document.querySelector(`[${e}]`)) {
                const t = `<div class="${this.rootClass}__inner"><div class="${this.rootClass}__arrow"></div><div class="${this.rootClass}__text"></div></div>`,
                    i = document.createElement("div");
                i.className = this.rootClass, i.setAttribute(e, ""), i.innerHTML = t, document.body.appendChild(i)
            }
            this.tooltip.addEventListener("mouseenter", this.addPinMouseEvent), this.tooltip.addEventListener("mouseleave", this.removePinMouseEvent), this.tooltip.addEventListener("theme:tooltip:init", this.addPinEvent), document.addEventListener("theme:tooltip:close", this.removePinEvent)
        },
        addPin(t = !1) {
            const n = document.querySelector(`[${e}]`);
            if (n && (t && !this.tooltip.hasAttribute(i) || !t)) {
                const t = n.querySelector(`.${this.rootClass}__inner`);
                n.querySelector(`.${this.rootClass}__text`).textContent = this.label;
                const e = t.offsetWidth,
                    i = this.tooltip.getBoundingClientRect(),
                    s = i.top,
                    a = i.width,
                    l = s + i.height + window.scrollY;
                let c = i.left - e / 2 + a / 2;
                const u = c + e - window.innerWidth;
                u > 0 && (c -= u), c < 0 && (c = 0), n.style.transform = `translate(${c}px, ${l}px)`, n.classList.remove(r), n.classList.add(o), document.addEventListener("theme:scroll", this.removePinEvent)
            }
        },
        removePin(t, n = !1, s = !1) {
            const a = document.querySelector(`[${e}]`),
                l = a.classList.contains(o);
            a && (n && !this.tooltip.hasAttribute(i) || !n) && (l && (s || t.detail.hideTransition) && (a.classList.add(r), this.hideTransitionTimeout && clearTimeout(this.hideTransitionTimeout), this.hideTransitionTimeout = setTimeout((() => {
                a.classList.remove(r)
            }), this.transitionSpeed)), a.classList.remove(o), document.removeEventListener("theme:scroll", this.removePinEvent))
        },
        unload() {
            this.tooltip.removeEventListener("mouseenter", this.addPinMouseEvent), this.tooltip.removeEventListener("mouseleave", this.removePinMouseEvent), this.tooltip.removeEventListener("theme:tooltip:init", this.addPinEvent), document.removeEventListener("theme:tooltip:close", this.removePinEvent), document.removeEventListener("theme:scroll", this.removePinEvent)
        }
    }), s
}(), PaloAlto.Zoom = function() {
    const t = "[data-product-single-media-group]",
        e = "[data-product-single-media-slider]",
        i = "[data-zoom-wrapper]",
        n = "pswp-zoom-gallery",
        o = "pswp-zoom-gallery--single",
        r = "is-moving",
        s = "data-image-width",
        a = "data-image-height";

    function l(n) {
        this.container = n, this.mediaContainer = this.container.querySelector(t), this.slider = this.container.querySelector(e), this.zoomWrappers = this.container.querySelectorAll(i), this.zoomEnable = "true" === this.mediaContainer.dataset.gallery, this.zoomEnable && this.init()
    }
    return l.prototype = $.extend({}, l.prototype, {
        init() {
            this.zoomWrappers.length && this.zoomWrappers.forEach(((t, e) => {
                t.addEventListener("click", (t => {
                    t.preventDefault();
                    this.slider && this.slider.classList.contains(r) || this.createZoom(e)
                })), t.addEventListener("keyup", (t => {
                    t.keyCode === theme.keyboardKeys.ENTER && (t.preventDefault(), this.createZoom(e))
                }))
            }))
        },
        createZoom(t) {
            const e = this;
            let i = [],
                r = 0;
            this.zoomWrappers.forEach((l => {
                const c = l.getAttribute("href"),
                    u = parseInt(l.getAttribute(s)),
                    d = parseInt(l.getAttribute(a));
                if (i.push({
                        src: c,
                        w: u,
                        h: d,
                        msrc: c
                    }), r += 1, e.zoomWrappers.length === r) {
                    let e = `${n}`;
                    1 === r && (e = `${n} ${o}`);
                    const s = {
                        barsSize: {
                            top: 60,
                            bottom: 60
                        },
                        history: !1,
                        focus: !1,
                        index: t,
                        mainClass: e,
                        showHideOpacity: !0,
                        showAnimationDuration: 250,
                        hideAnimationDuration: 250,
                        closeOnScroll: !1,
                        closeOnVerticalDrag: !1,
                        captionEl: !1,
                        closeEl: !0,
                        closeElClasses: ["caption-close"],
                        tapToClose: !1,
                        clickToCloseNonZoomable: !1,
                        maxSpreadZoom: 2,
                        loop: !0,
                        spacing: 0,
                        allowPanToNext: !0,
                        pinchToClose: !1
                    };
                    new PaloAlto.LoadPhotoswipe(i, s)
                }
            }))
        }
    }), l
}(), PaloAlto.Accordions = function() {
    const t = "[data-collapsible-trigger]",
        e = "is-expanded";

    function i(t) {
        PaloAlto.initCollapsible()
    }
    return i.prototype = $.extend({}, i.prototype, {
        onBlockSelect(i) {
            const n = i.target.querySelector(t);
            n.classList.contains(e) || n.dispatchEvent(new Event("click"))
        },
        onBlockDeselect(i) {
            const n = i.target.querySelector(t);
            n.classList.contains(e) && n.dispatchEvent(new Event("click"))
        }
    }), i
}(), PaloAlto.AnnouncementBar = function() {
    const t = "[data-slide]",
        e = "[data-ticker-frame]",
        i = "[data-slider]",
        n = "[data-ticker-scale]",
        o = "[data-ticker-text]",
        r = "data-target-referrer",
        s = "data-slide",
        a = "data-slider-speed",
        l = "data-stop",
        c = "style",
        u = "desktop",
        d = "mobile",
        h = "ticker--animated";

    function p(e) {
        this.barHolder = e, this.locationPath = location.href, this.slides = this.barHolder.querySelectorAll(t), this.slider = this.barHolder.querySelector(i), this.flkty = null, this.init()
    }
    return p.prototype = $.extend({}, p.prototype, {
        init() {
            this.removeAnnouncement(), this.slider && (this.initSlider(), document.addEventListener("theme:resize:width", this.initSlider.bind(this))), this.slider || this.initTickers(!0)
        },
        removeAnnouncement() {
            for (let t = 0; t < this.slides.length; t++) {
                const e = this.slides[t];
                e.hasAttribute(r) && (-1 !== this.locationPath.indexOf(e.getAttribute(r)) || window.Shopify.designMode || e.parentNode.removeChild(e))
            }
        },
        initSlider() {
            if (this.slider.querySelectorAll(t)) {
                let e = `${t}`;
                e = window.innerWidth < theme.sizes.small ? `${t}:not(.${u})` : `${t}:not(.${d})`, null != this.flkty && this.flkty.destroy(), this.flkty = new Flickity(this.slider, {
                    cellSelector: e,
                    pageDots: !1,
                    prevNextButtons: !1,
                    wrapAround: !0,
                    autoPlay: parseInt(this.slider.getAttribute(a), 10),
                    on: {
                        ready: () => {
                            setTimeout((() => {
                                this.slider.dispatchEvent(new CustomEvent("slider-is-loaded", {
                                    bubbles: !0,
                                    detail: {
                                        slider: this
                                    }
                                }))
                            }), 10)
                        }
                    }
                }), this.flkty.reposition()
            }
            this.slider.addEventListener("slider-is-loaded", (() => {
                this.initTickers()
            }))
        },
        initTickers(i = !1) {
            this.barHolder.querySelectorAll(e).forEach((e => {
                new PaloAlto.Ticker(e, i);
                const n = e.querySelectorAll(t);
                if (0 !== n.length) {
                    const i = e.querySelectorAll(`${t}.${d}`),
                        o = e.querySelectorAll(`${t}.${u}`);
                    n.length === i.length ? e.parentNode.classList.add(d) : n.length === o.length && e.parentNode.classList.add(u)
                }
            }))
        },
        toggleTicker(t, e) {
            const i = t.target.closest(n),
                r = document.querySelector(`[${s}="${t.detail.blockId}"]`);
            e && r && (i.setAttribute(l, ""), i.querySelectorAll(o).forEach((t => {
                t.classList.remove(h), t.style.transform = `translate3d(${-(r.offsetLeft-parseInt(getComputedStyle(r).marginLeft,10))}px, 0, 0)`
            }))), !e && r && (i.querySelectorAll(o).forEach((t => {
                t.classList.add(h), t.removeAttribute(c)
            })), i.removeAttribute(l))
        },
        onBlockSelect(t) {
            const e = parseInt([...t.target.parentNode.children].indexOf(t.target));
            this.slider && null !== this.flkty && (this.flkty.select(e), this.flkty.pausePlayer()), this.slider || this.toggleTicker(t, !0)
        },
        onBlockDeselect(t) {
            this.slider && null !== this.flkty && this.flkty.unpausePlayer(), this.slider || this.toggleTicker(t, !1)
        },
        onUnload() {
            document.removeEventListener("theme:resize:width", this.initSlider.bind(this))
        }
    }), p
}(), PaloAlto.BlogPosts = function() {
    function t(t) {
        this.endlessBlogPosts = {}, this.initInfinityScroll()
    }
    return t.prototype = $.extend({}, t.prototype, {
        initInfinityScroll: function() {
            theme.settings.enableInfinityScroll && (this.endlessBlogPosts = new Ajaxinate({
                container: "#AjaxinateLoop",
                pagination: "#AjaxinatePagination",
                method: "scroll",
                callback: function() {
                    AOS.refreshHard()
                }
            }))
        },
        onUnload: function() {
            theme.settings.enableInfinityScroll && "object" == typeof this.endlessBlogPosts && "function" === this.endlessBlogPosts.destroy && this.endlessBlogPosts.destroy()
        }
    }), t
}(), PaloAlto.CustomContent = function() {
    const t = "[data-video-wrapper]",
        e = "[data-product]",
        i = "[data-slider]",
        n = "[data-slide]",
        o = "[data-product-media-container]",
        r = ".flickity-button";

    function s(n) {
        this.container = n, this.videoWrapper = this.container.querySelectorAll(t), this.product = this.container.querySelectorAll(e), this.productSlider = this.container.querySelectorAll(i), this.checkSliderOnResize = this.checkSlider.bind(this), this.flkty = [], this.videoObj = [], this.quickViewObj = [], null !== this.videoWrapper && this.videoWrapper.forEach((t => {
            this.videoObj.push(new PaloAlto.FeaturedVideo(t))
        })), null !== this.product && new PaloAlto.ProductGrid(n), PaloAlto.QuickViewPopup.init(n), this.listen()
    }
    return s.prototype = $.extend({}, s.prototype, {
        checkSlider() {
            window.innerWidth >= theme.sizes.small ? this.productSlider.forEach((t => {
                this.initProductSlider(t)
            })) : this.productSlider.forEach((t => {
                this.destroyProductSlider(t)
            }))
        },
        initProductSlider(t) {
            const e = t.querySelectorAll(n).length,
                i = t.dataset.slider;
            e > 1 && (void 0 !== this.flkty[i] && this.flkty[i].isActive ? this.setSliderArrowsPosition(t) : this.flkty[i] = new Flickity(t, {
                prevNextButtons: !0,
                pageDots: !0,
                wrapAround: !0,
                on: {
                    ready: () => {
                        this.setSliderArrowsPosition(t)
                    }
                }
            }))
        },
        destroyProductSlider(t) {
            const e = t.dataset.slider;
            null !== this.flkty[e] && "object" == typeof this.flkty[e] && (this.flkty[e].destroy(), this.flkty[e] = null)
        },
        setSliderArrowsPosition: function(t) {
            const e = t.querySelectorAll(r),
                i = t.querySelector(o);
            e.length && i && e.forEach((t => {
                t.style.top = i.offsetHeight / 2 + "px"
            }))
        },
        listen: function() {
            this.checkSlider(), document.addEventListener("theme:resize:width", this.checkSliderOnResize)
        },
        onUnload: function() {
            if (this.flkty)
                for (const t in this.flkty) this.flkty.hasOwnProperty(t) && this.flkty[t].destroy();
            document.removeEventListener("theme:resize:width", this.checkSliderOnResize)
        }
    }), s
}(), PaloAlto.ShoppableBlog = function() {
    const t = "[data-blog-item]",
        e = "[data-slider]",
        i = "[data-item]",
        n = "[data-button-show]",
        o = "[data-button-hide]",
        r = "[data-item-products]",
        s = "[data-item-products-slider]",
        a = "[data-item-product]",
        l = "blog-item--active",
        c = "blog-item__products--visible",
        u = "shoppable-blog__slider",
        d = {
            sectionId: "data-section-id"
        };

    function h(n) {
        this.container = n, this.flkty = null, this.article = this.container.querySelector(t), this.slider = this.container.querySelector(e), this.checkSlidesSizeOnResize = this.checkSlidesSize.bind(this), this.isFullWidth = n.hasAttribute(d.fullWidth), this.gutter = 0, this.clickOutsideItemEvent = t => {
            if (!(t.target.matches(i) || t.target.closest(i))) {
                const t = this.container.querySelectorAll(i);
                t.length && t.forEach((t => {
                    const e = t.querySelector(r);
                    e && e.classList.remove(c), t.classList.remove(l)
                }))
            }
        }, this.bindButtons(), this.listen()
    }
    return h.prototype = $.extend({}, h.prototype, {
        initSlider: function() {
            this.flkty = new Flickity(this.slider, {
                prevNextButtons: !0,
                pageDots: !1,
                cellAlign: "left",
                wrapAround: !1,
                groupCells: !0,
                contain: !0
            }), this.flkty.on("change.flickity", (t => {
                if (t.target.classList.contains(u)) {
                    const t = this.container.querySelectorAll(i);
                    t.length && t.forEach((t => {
                        t.classList.remove(l), t.querySelector(r).classList.remove(c)
                    })), this.flkty && !this.flkty.options.draggable && (this.flkty.options.draggable = !0, this.flkty.updateDraggable())
                }
            }))
        },
        destroySlider: function() {
            null !== this.flkty && (this.flkty.destroy(), this.flkty = null)
        },
        checkSlidesSize: function() {
            const t = this.container.querySelector(i).currentStyle || window.getComputedStyle(this.container.querySelector(i));
            this.gutter = parseInt(t.marginRight);
            const e = this.slider.offsetWidth + this.gutter < this.getItemsWidth();
            window.innerWidth >= theme.sizes.small && e ? this.initSlider() : this.destroySlider()
        },
        getItemsWidth: function() {
            let t = 0;
            const e = this.slider.querySelectorAll(i);
            return e.length && e.forEach((e => {
                t += e.offsetWidth + this.gutter
            })), t
        },
        bindButtons: function() {
            const t = this.container.querySelectorAll(s),
                e = this.container.querySelectorAll(n),
                u = this.container.querySelectorAll(o);
            e.length && e.forEach((t => {
                t.addEventListener("click", (e => {
                    e.preventDefault(), this.container.querySelectorAll(i).forEach((t => {
                        const e = t.querySelector(r);
                        t.classList.remove(l), e && e.classList.remove(c)
                    }));
                    const n = t.closest(i),
                        o = n.querySelector(r);
                    n.classList.add(l), o && o.classList.add(c), null !== this.flkty && (this.flkty.options.draggable = !1, this.flkty.updateDraggable())
                }))
            })), u.length && u.forEach((t => {
                t.addEventListener("click", (e => {
                    e.preventDefault();
                    const n = t.closest(i),
                        o = n.querySelector(r);
                    n.classList.remove(l), o && o.classList.remove(c), null !== this.flkty && (this.flkty.options.draggable = !0, this.flkty.updateDraggable())
                }))
            })), t.length && t.forEach((t => {
                t.querySelectorAll(a).length > 1 && new Flickity(t, {
                    prevNextButtons: !0,
                    contain: !0,
                    pageDots: !1,
                    wrapAround: !0
                })
            })), this.slider.addEventListener("keyup", (t => {
                if (t.keyCode === slate.utils.keyboardKeys.ESCAPE) {
                    const e = t.target.querySelectorAll(i);
                    e.length && (e.forEach((t => {
                        const e = t.querySelector(r);
                        t.classList.remove(l), e && e.classList.remove(c)
                    })), this.flkty && (this.flkty.options.draggable = !0, this.flkty.updateDraggable()))
                }
            }))
        },
        listen: function() {
            this.slider && (this.checkSlidesSize(), document.addEventListener("theme:resize:width", this.checkSlidesSizeOnResize)), document.addEventListener("mousedown", this.clickOutsideItemEvent)
        },
        onBlockSelect: function(t) {
            if (null !== this.flkty) {
                const e = parseInt([...t.target.parentNode.children].indexOf(t.target)),
                    i = parseInt(this.flkty.slides[0].cells.length),
                    n = Math.floor(e / i);
                this.flkty.select(n)
            } else {
                const e = this.slider.currentStyle || window.getComputedStyle(this.slider),
                    i = parseInt(e.paddingLeft),
                    n = t.target.offsetLeft - i;
                this.slider.scrollTo({
                    top: 0,
                    left: n,
                    behavior: "smooth"
                })
            }
        },
        onUnload: function() {
            document.removeEventListener("theme:resize:width", this.checkSlidesSizeOnResize), document.removeEventListener("click", this.clickOutsideItemEvent)
        }
    }), h
}(), PaloAlto.FeaturedCollection = function() {
    function t(t) {
        this.productGrid = new PaloAlto.ProductGrid(t), this.gridSlider = new PaloAlto.GridSlider(t)
    }
    return t.prototype = $.extend({}, t.prototype, {
        onSelect: function() {
            this.productGrid && this.productGrid.onSelect()
        },
        onDeselect: function() {
            this.productGrid && this.productGrid.onDeselect()
        },
        onUnload: function() {
            this.productGrid && this.productGrid.onUnload()
        }
    }), t
}(), PaloAlto.FeaturedVideo = function() {
    let t = [];
    const e = {
            height: "720",
            width: "1280",
            playerVars: {
                showinfo: 0,
                controls: 0,
                fs: 0,
                rel: 0,
                height: "100%",
                width: "100%",
                iv_load_policy: 3,
                html5: 1,
                loop: 1,
                playsinline: 1,
                modestbranding: 1,
                disablekb: 1,
                wmode: "opaque"
            },
            events: {
                onReady: function(t) {
                    const e = t.target.getIframe(),
                        i = e.id;
                    i && (this.enableSound ? t.target.unMute() : t.target.mute(), t.target.playVideo(), e.setAttribute(n, "-1"), e.parentNode.classList.add(o), s(i), document.addEventListener("theme:scroll", (() => {
                        s(i)
                    })))
                },
                onStateChange: function(t) {
                    0 == t.data && t.target.playVideo()
                }
            }
        },
        i = "[data-video]",
        n = "tabindex",
        o = "loaded";

    function r(e) {
        this.container = e, this.player = e.querySelector(i), this.enableSound = "true" === e.dataset.enableSound, this.playVideoEvent = e => {
            t[this.playerId] && "function" === t[this.playerId].playVideo && t[this.playerId].playVideo()
        }, this.setVideoFullscreenSizeEvent = this.setVideoFullscreenSize.bind(this), this.player && (this.playerId = this.player.id, this.videoId = this.player.dataset.video, this.init())
    }

    function s(e) {
        let i;
        if ("string" == typeof e) i = e;
        else {
            if (null == e.data) return !1;
            i = e.data.id
        }
        const n = document.getElementById(i + "-container"),
            o = t[i],
            r = PaloAlto.isInViewport(n);
        r && o && "function" == typeof o.playVideo ? o.playVideo() : !r && o && "function" == typeof o.pauseVideo && o.pauseVideo()
    }
    return r.prototype = $.extend({}, r.prototype, {
        init: function() {
            this.container.addEventListener("click", this.playVideoEvent), this.container.addEventListener("touchstart", this.playVideoEvent), this.setVideoFullscreenSize(), document.addEventListener("theme:resize", this.setVideoFullscreenSizeEvent), window.isYoutubeAPILoaded ? this.loadYoutubePlayer() : (window.loadYoutubeAPI(), document.addEventListener("youtubeAPIReady", this.loadYoutubePlayer.bind(this)))
        },
        loadYoutubePlayer: function() {
            const i = {
                ...e
            };
            i.videoId = this.videoId, t[this.playerId] = new YT.Player(this.playerId, i), window.isYoutubeAPILoaded = !0
        },
        setVideoFullscreenSize: function() {
            const t = 16 / 9;
            let e = 0,
                i = 0;
            t > this.container.offsetWidth / this.container.offsetHeight ? (e = this.container.offsetHeight * t, i = this.container.offsetHeight) : (e = this.container.offsetWidth, i = this.container.offsetWidth / t), this.player.style.width = e + "px", this.player.style.height = i + "px"
        },
        onUnload: function(e) {
            this.container.removeEventListener("click", this.playVideoEvent), this.container.removeEventListener("touchstart", this.playVideoEvent), document.removeEventListener("theme:resize", this.setVideoFullscreenSizeEvent), delete t[this.playerId]
        }
    }), r
}(), PaloAlto.Footer = function() {
    const t = "[data-newsletter-form]",
        e = "[data-popout-locale]",
        i = "[data-popout-currency]";
    return function(n) {
        this.container = n, this.newsletter = this.container.querySelector(t), this.popoutLocale = this.container.querySelector(e), this.popoutCurrency = this.container.querySelector(i), this.popoutLocale && new PaloAlto.Popout(this.popoutLocale), this.popoutCurrency && new PaloAlto.Popout(this.popoutCurrency), PaloAlto.initCollapsible(), this.newsletter && new PaloAlto.Newsletter(this.newsletter)
    }
}(), PaloAlto.GridSlider = function() {
    const t = "[data-slider]",
        e = "[data-slide]",
        i = "[data-product-media-container]",
        n = ".flickity-button",
        o = "carousel--inactive",
        r = "data-slider-id",
        s = "data-slider-show-image";

    function a(e) {
        this.container = e, this.columns = parseInt(this.container.dataset.columns), this.sliders = this.container.querySelectorAll(t), this.checkSlidesSizeOnResize = this.checkSlidesSize.bind(this), this.resetSliderEvent = t => this.resetSlider(t), this.flkty = [], this.listen()
    }
    return a.prototype = $.extend({}, a.prototype, {
        initSlider: function(t) {
            const i = t.getAttribute(r);
            t.classList.remove(o), void 0 !== this.flkty[i] && this.flkty[i].isActive ? this.setSliderArrowsPosition(t) : this.flkty[i] = new Flickity(t, {
                pageDots: !1,
                cellSelector: e,
                cellAlign: "left",
                groupCells: !0,
                contain: !0,
                wrapAround: !1,
                adaptiveHeight: !1,
                on: {
                    ready: () => {
                        this.setSliderArrowsPosition(t)
                    }
                }
            })
        },
        destroySlider: function(t) {
            const e = t.getAttribute(r);
            t.classList.add(o), "object" == typeof this.flkty[e] && this.flkty[e].destroy()
        },
        resetSlider: function(t) {
            const e = t.target.getAttribute(r);
            "object" == typeof this.flkty[e] && this.flkty[e].select(0, !1, !0)
        },
        checkSlidesSize: function() {
            this.sliders.length && this.sliders.forEach((t => {
                const i = this.columns,
                    n = window.innerWidth >= theme.sizes.large,
                    o = window.innerWidth >= theme.sizes.small && window.innerWidth < theme.sizes.large;
                let r = t.querySelectorAll(e).length;
                t.hasAttribute(s) && (r += 1), n && r > i || o && r > 2 ? this.initSlider(t) : this.destroySlider(t)
            }))
        },
        setSliderArrowsPosition: function(t) {
            const e = t.querySelectorAll(n),
                o = t.querySelector(i);
            e.length && o && e.forEach((t => {
                t.style.top = o.offsetHeight / 2 + "px"
            }))
        },
        listen: function() {
            this.sliders.length && (this.checkSlidesSize(), document.addEventListener("theme:resize:width", this.checkSlidesSizeOnResize), this.sliders.forEach((t => {
                t.addEventListener("theme:tab:change", this.resetSliderEvent)
            })))
        },
        onBlockSelect: function(e) {
            const i = e.target.closest(t),
                n = Flickity.data(i) || null;
            if (i)
                if (null !== n && n.isActive) {
                    const t = parseInt([...e.target.parentNode.children].indexOf(e.target)),
                        i = parseInt(n.slides[0].cells.length),
                        o = Math.floor(t / i);
                    n.select(o)
                } else {
                    const t = i.currentStyle || window.getComputedStyle(i),
                        n = parseInt(t.paddingLeft),
                        o = e.target.offsetLeft - n;
                    i.scrollTo({
                        top: 0,
                        left: o,
                        behavior: "smooth"
                    })
                }
        },
        onUnload: function() {
            if (this.flkty)
                for (const t in this.flkty) this.flkty.hasOwnProperty(t) && this.flkty[t].destroy();
            document.removeEventListener("theme:resize:width", this.checkSlidesSizeOnResize), this.sliders.length && this.sliders.forEach((t => {
                t.addEventListener("theme:tab:change", this.resetSliderEvent)
            }))
        }
    }), a
}(), PaloAlto.Header = function() {
    const t = "[data-announcement-wrapper]",
        e = "[data-collection-filters]",
        i = "[data-hover-disclosure]",
        n = "[data-logo]",
        o = "[data-collapsible-trigger]",
        r = "[data-nav]",
        s = "[data-nav-icons]",
        a = "[data-nav-item]",
        l = "[data-nav-link-mobile]",
        c = "[data-nav-search]",
        u = "[data-wrapper]",
        d = {
            jsDrawerOpenAll: ["js-drawer-open", "js-drawer-open-cart"],
            headerTransparent: "site-header--transparent",
            headerLoading: "site-header--loading",
            hasScrolled: "has-scrolled",
            hideHeader: "hide-header",
            navCompress: "nav--compress",
            headerSticky: "header--sticky"
        };

    function h(t) {
        this.container = t, this.header = t, this.headerSection = t.parentNode, this.headerWrapper = t.querySelector(u), this.logo = t.querySelector(n), this.nav = t.querySelector(r), this.navIcons = t.querySelector(s), this.navDrawerCloseEvent = null, this.headerStateEvent = t => this.headerState(t), PaloAlto.initCollapsible(), PaloAlto.initTransparentHeader(), PaloAlto.setMainSpacing(), window.cart = new PaloAlto.CartDrawer, this.sections = [];
        const o = this.container.querySelectorAll(i);
        o.length && o.forEach((t => {
            this.sections.push(new PaloAlto.HoverDisclosure(t))
        })), this.controlNav(), this.initMobileNav(), window.addEventListener("load", this.controlNav.bind(this)), document.addEventListener("theme:resize:width", this.controlNav.bind(this));
        const a = document.querySelector(c),
            l = document.querySelector(e);
        a && PaloAlto.NavSearch.init(), l ? this.header.classList.remove(d.headerLoading) : this.initStickyHeader()
    }
    return h.prototype = $.extend({}, h.prototype, {
        initStickyHeader: function() {
            this.position = this.header.dataset.position, "fixed" === this.position ? this.headerSection.classList.add(d.headerSticky) : this.headerSection.classList.remove(d.headerSticky), this.header.classList.remove(d.headerLoading), this.headerState(), document.addEventListener("theme:scroll", this.headerStateEvent)
        },
        headerState: function(e) {
            const i = parseInt(this.header.dataset.height || this.header.offsetHeight),
                n = document.querySelector(t),
                o = i + (n ? n.offsetHeight : 0),
                r = window.pageYOffset || document.documentElement.scrollTop,
                s = e && e.detail && e.detail.up;
            "fixed" === this.position && (r > o ? (document.body.classList.add(d.hasScrolled), this.header.classList.remove(d.headerTransparent)) : (document.body.classList.remove(d.hasScrolled), window.isHeaderTransparent && this.header.classList.add(d.headerTransparent)), r < o && s ? document.body.classList.add(d.hideHeader) : document.body.classList.remove(d.hideHeader))
        },
        controlNav: function() {
            this.nav.classList.remove(d.navCompress);
            const t = "center" === this.header.dataset.navAlignment,
                e = "left" === this.header.dataset.navAlignment,
                i = this.headerWrapper.currentStyle || window.getComputedStyle(this.headerWrapper),
                n = this.headerWrapper.clientWidth - parseFloat(i.paddingLeft) - parseFloat(i.paddingRight),
                o = this.logo ? this.logo.offsetWidth : 0,
                r = this.navIcons ? this.navIcons.offsetWidth : 0;
            let s = n - o - r - 20,
                a = this.getNavItemsWidth();
            t && (s = n - 2 * (Math.max(o, r) + 20)), e && (s = (n - (o + 40)) / 2), a > s ? this.nav.classList.add(d.navCompress) : this.nav.classList.remove(d.navCompress)
        },
        getNavItemsWidth: function() {
            let t = 0;
            const e = this.nav.querySelectorAll(a);
            return e.length && e.forEach((e => {
                t += Math.ceil(e.offsetWidth)
            })), t
        },
        initMobileNav: function() {
            if ("link" === theme.settings.mobileMenuBehaviour) return;
            const t = this.headerSection.querySelectorAll(l);
            t.length && t.forEach((t => {
                t.addEventListener("click", (e => {
                    const i = t.parentNode.querySelectorAll(o).length,
                        n = t.nextElementSibling;
                    i && (e.preventDefault(), n.dispatchEvent(new Event("click"), {
                        bubbles: !0
                    }))
                }))
            }))
        },
        onUnload: function() {
            PaloAlto.Drawer.close(), document.body.classList.remove(...d.jsDrawerOpenAll), document.removeEventListener("theme:scroll", this.headerStateEvent), document.removeEventListener("theme:resize:width", this.controlNav), document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
                bubbles: !0
            })), "function" == typeof window.cart.destroy && window.cart.destroy()
        }
    }), h
}(), PaloAlto.IconsRow = function() {
    const t = "[data-slider]";

    function e(t) {
        this.container = t
    }
    return e.prototype = $.extend({}, e.prototype, {
        onBlockSelect(e) {
            const i = this.container.querySelector(t),
                n = i.currentStyle || window.getComputedStyle(i),
                o = parseInt(n.paddingLeft),
                r = e.target.offsetLeft - o;
            i.scrollTo({
                top: 0,
                left: r,
                behavior: "smooth"
            })
        }
    }), e
}(), PaloAlto.ImageAccordions = function() {
    const t = "[data-accordion-item]",
        e = "[data-accordion-button]",
        i = "is-expanded";

    function n(i) {
        this.container = i, this.imageAccordionsItems = this.container.querySelectorAll(t), this.buttons = this.container.querySelectorAll(e), this.accordionExpandEvent = t => this.accordionExpand(t), this.accordionFocusEvent = t => this.accordionFocus(t), this.init()
    }
    return n.prototype = $.extend({}, n.prototype, {
        init() {
            this.imageAccordionsItems.forEach((t => {
                t.addEventListener("mouseenter", this.accordionExpandEvent.bind(this, t))
            })), this.buttons.forEach((t => {
                t.addEventListener("focusin", this.accordionFocusEvent.bind(this, t))
            }))
        },
        accordionExpand(t) {
            t.classList.contains(i) || (this.imageAccordionsItems.forEach((t => {
                t.classList.remove(i)
            })), t.classList.add(i))
        },
        accordionFocus(e) {
            e.closest(t).dispatchEvent(new Event("mouseenter"))
        },
        onBlockSelect: function(t) {
            const e = t.target;
            e && e.dispatchEvent(new Event("mouseenter"))
        }
    }), n
}(), PaloAlto.Look = function() {
    const t = "[data-pointer]",
        e = "pointer--end",
        i = "pointer--reverse",
        n = "pointer--reverse-end",
        o = "pointer--bottom",
        r = "data-left",
        s = "data-top";

    function a(t) {
        this.container = t, this.init()
    }
    return a.prototype = $.extend({}, a.prototype, {
        init: function() {
            var a = this.container.querySelectorAll(t);
            a.length && a.forEach((t => {
                t.getAttribute(r) < 25 ? t.classList.add(e) : t.getAttribute(r) > 50 && t.getAttribute(r) <= 75 ? t.classList.add(i) : t.getAttribute(r) > 75 && t.classList.add(i, n), t.getAttribute(s) < 35 && t.classList.add(o)
            }))
        }
    }), a
}(), PaloAlto.ColumnsWithImage = function() {
    const t = "[data-slider]",
        e = "[data-slider-item]",
        i = "[data-media-container]",
        n = ".flickity-button",
        o = "carousel--inactive";

    function r(e) {
        this.container = e, this.slider = this.container.querySelector(t), this.flkty = null, this.gutter = 0, this.checkSlidesSizeOnResize = this.checkSlidesSize.bind(this), this.listen(), PaloAlto.videoLink()
    }
    return r.prototype = $.extend({}, r.prototype, {
        initSlider: function() {
            this.slider.classList.remove(o), this.flkty = new Flickity(this.slider, {
                pageDots: !1,
                cellAlign: "left",
                groupCells: !0,
                contain: !0,
                on: {
                    ready: () => {
                        this.setSliderArrowsPosition(this.slider)
                    }
                }
            })
        },
        destroySlider: function() {
            this.slider.classList.add(o), null !== this.flkty && (this.flkty.destroy(), this.flkty = null)
        },
        checkSlidesSize: function() {
            const t = this.container.querySelector(e).currentStyle || window.getComputedStyle(this.container.querySelector(e));
            this.gutter = parseInt(t.marginRight);
            const i = this.slider.offsetWidth < this.getItemsWidth();
            window.innerWidth >= theme.sizes.small && i ? this.initSlider() : this.destroySlider()
        },
        getItemsWidth: function() {
            let t = 0;
            const i = this.slider.querySelectorAll(e);
            return i.length && i.forEach((e => {
                t += e.offsetWidth + this.gutter
            })), t
        },
        listen: function() {
            this.slider && (this.checkSlidesSize(), document.addEventListener("theme:resize:width", this.checkSlidesSizeOnResize))
        },
        setSliderArrowsPosition: function(t) {
            const e = t.querySelectorAll(n),
                o = t.querySelector(i);
            e.length && o && e.forEach((t => {
                t.style.top = o.offsetHeight / 2 + "px"
            }))
        },
        onBlockSelect: function(t) {
            if (null !== this.flkty) {
                const e = parseInt([...t.target.parentNode.children].indexOf(t.target)),
                    i = parseInt(this.flkty.slides[0].cells.length),
                    n = Math.floor(e / i);
                this.flkty.select(n)
            } else {
                const e = this.slider.currentStyle || window.getComputedStyle(this.slider),
                    i = parseInt(e.paddingLeft),
                    n = t.target.offsetLeft - i;
                this.slider.scrollTo({
                    top: 0,
                    left: n,
                    behavior: "smooth"
                })
            }
        },
        onUnload: function() {
            document.removeEventListener("theme:resize:width", this.checkSlidesSizeOnResize)
        }
    }), r
}(), PaloAlto.ListCollections = function() {
    function t(t) {
        this.gridSlider = new PaloAlto.GridSlider(t)
    }
    return t.prototype = $.extend({}, t.prototype, {
        onBlockSelect: function(t) {
            this.gridSlider && this.gridSlider.onBlockSelect(t)
        },
        onUnload: function() {
            this.gridSlider && this.gridSlider.onUnload()
        }
    }), t
}(), PaloAlto.LogoList = function() {
    const t = "[data-slider]",
        e = "[data-slider-item]";

    function i(e) {
        this.container = e, this.slider = this.container.querySelector(t), this.sliderResizeEvent = this.checkSlides.bind(this), this.flkty = null, this.checkSlides(), document.addEventListener("theme:resize:width", this.sliderResizeEvent)
    }
    return i.prototype = $.extend({}, i.prototype, {
        checkSlides() {
            const t = this.container.offsetWidth;
            let e = this.getSlidesWidth();
            window.innerWidth >= theme.sizes.small && e > t ? this.initSlider() : this.destroySlider()
        },
        getSlidesWidth() {
            let t = 0;
            const i = this.container.querySelectorAll(e);
            return i.length && i.forEach((e => {
                t += e.offsetWidth
            })), t
        },
        initSlider() {
            null !== Flickity.data(this.slider) && (this.flkty = new Flickity(this.slider, {
                contain: !0,
                wrapAround: !0,
                pageDots: !1
            }), PaloAlto.flickitySmoothScrolling(this.slider))
        },
        destroySlider() {
            Flickity.data(this.slider) && this.flkty.destroy()
        },
        onBlockSelect(t) {
            const e = parseInt([...t.target.parentNode.children].indexOf(t.target));
            if (null !== this.flkty) this.flkty.select(e);
            else {
                const e = this.slider.currentStyle || window.getComputedStyle(this.slider),
                    i = parseInt(e.paddingLeft),
                    n = t.target.offsetLeft - i;
                this.slider.scrollTo({
                    top: 0,
                    left: n,
                    behavior: "smooth"
                })
            }
        },
        onUnload() {
            Flickity.data(this.slider) && this.flkty.destroy(), document.removeEventListener("theme:resize:width", this.sliderResizeEvent)
        }
    }), i
}(), PaloAlto.Locations = function() {
    const t = "[data-slider-gallery]",
        e = "[data-slider-info]",
        i = "[data-slide-item]";

    function n(i) {
        this.container = i, this.slider = this.container.querySelector(t), this.sliderNav = this.container.querySelector(e), this.initSlider()
    }
    return n.prototype = $.extend({}, n.prototype, {
        initSlider() {
            const t = this.container.querySelectorAll(i).length;
            let e = Flickity.data(this.slider) || null,
                n = Flickity.data(this.sliderNav) || null;
            t <= 1 || (e = new Flickity(this.slider, {
                fade: !0,
                wrapAround: !0,
                adaptiveHeight: !0,
                prevNextButtons: !1,
                pageDots: !1
            }), PaloAlto.flickitySmoothScrolling(this.slider), n = new Flickity(this.sliderNav, {
                fade: !0,
                wrapAround: !0,
                imagesLoaded: !0,
                lazyLoad: !0,
                asNavFor: this.slider,
                prevNextButtons: !0,
                pageDots: !1
            }), n.on("change", (() => {
                e.selectCell(n.selectedIndex)
            })), e.on("change", (() => {
                n.selectCell(e.selectedIndex)
            })))
        },
        onBlockSelect(t) {
            const e = Flickity.data(this.slider) || null,
                i = Flickity.data(this.sliderNav) || null,
                n = parseInt([...t.target.parentNode.children].indexOf(t.target));
            null !== e && e.select(n), null !== i && i.select(n)
        }
    }), n
}(), PaloAlto.Mosaic = function() {
    const t = "[data-grid]";

    function e(e) {
        this.container = e, this.grid = this.container.querySelector(t)
    }
    return e.prototype = $.extend({}, e.prototype, {
        onBlockSelect: function(t) {
            const e = this.grid.currentStyle || window.getComputedStyle(this.grid),
                i = parseInt(e.paddingLeft),
                n = t.target.offsetLeft - i;
            this.grid.scrollTo({
                top: 0,
                left: n,
                behavior: "smooth"
            })
        }
    }), e
}(), PaloAlto.NewsletterSection = function() {
    const t = "[data-newsletter-form]";
    return function(e) {
        this.container = e, this.newsletters = this.container.querySelectorAll(t), this.newsletters && this.newsletters.forEach((t => {
            new PaloAlto.Newsletter(t)
        }))
    }
}(), PaloAlto.OverlappingImages = function(t) {
    PaloAlto.videoLink()
}, PaloAlto.Popups = function() {
    const t = "[data-large-promo]",
        e = "[data-large-promo-inner]",
        i = "[data-tracking-consent]",
        n = "[data-tracking-consent-inner]",
        o = "[data-confirm-cookies]",
        r = "[data-popup-bar]",
        s = "[data-popup-bar-holder]",
        a = "[data-popup-bar-toggle]",
        l = "[data-popup-body]",
        c = "[data-popup-close]",
        u = "[data-popup-underlay]",
        d = "[data-newsletter-form]",
        h = "data-target-referrer",
        p = "has-success",
        f = "has-error",
        m = "selected",
        g = "has-block-selected",
        v = "popup--expanded",
        y = "popup--visible";
    let b = {};

    function w(t, e, i = null) {
        if (this.popupContainer = t, this.popup = e, this.popupBody = e.querySelector(l), this.delay = t.dataset.popupDelay, this.isSubmitted = -1 !== window.location.href.indexOf("accepts_marketing") || -1 !== window.location.href.indexOf("customer_posted=true"), this.callback = i, this.showPopupOnScrollEvent = () => this.showPopupOnScroll(), ("always" === this.delay || this.isSubmitted) && this.always(), this.delay && this.delay.includes("delayed") && !this.isSubmitted) {
            const t = this.delay.includes("_") ? parseInt(this.delay.split("_")[1]) : 10;
            this.delayed(t)
        }
        "bottom" !== this.delay || this.isSubmitted || this.bottom(), "idle" !== this.delay || this.isSubmitted || this.idle()
    }

    function S(t) {
        if (this.popupContainer = t, this.locationPath = location.href, !this.popupContainer.hasAttribute(h)) return !1; - 1 !== this.locationPath.indexOf(this.popupContainer.getAttribute(h)) || window.Shopify.designMode || this.popupContainer.parentNode.removeChild(this.popupContainer)
    }

    function x(t) {
        this.popupContainer = t, this.popup = this.popupContainer.querySelector(e), this.popupBody = this.popup.querySelector(l), this.close = this.popup.querySelector(c), this.underlay = this.popup.querySelector(u), this.form = this.popup.querySelector(d), this.cookie = new PopupCookie(this.popupContainer.dataset.cookieName, "user_has_closed"), this.isTargeted = new S(this.popupContainer), this.a11y = slate.a11y, this.init()
    }

    function E(t) {
        this.popupContainer = t, this.popup = this.popupContainer.querySelector(n), this.close = this.popup.querySelector(c), this.acceptButton = this.popup.querySelector(o), this.enable = "true" === this.popupContainer.dataset.enable, window.Shopify.loadFeatures([{
            name: "consent-tracking-api",
            version: "0.1"
        }], (t => {
            if (t) throw t;
            const e = window.Shopify.customerPrivacy.userCanBeTracked(),
                i = window.Shopify.customerPrivacy.getTrackingConsent();
            this.enableTracking = !e && "no_interaction" === i && this.enable, window.Shopify.designMode && (this.enableTracking = !0), this.init()
        }))
    }

    function k(t) {
        this.popupContainer = t, this.popup = this.popupContainer.querySelector(s), this.popupBody = this.popup.querySelector(l), this.close = this.popup.querySelector(c), this.underlay = this.popup.querySelector(u), this.toggle = this.popup.querySelector(a), this.cookie = new PopupCookie(this.popupContainer.dataset.cookieName, "user_has_closed"), this.form = this.popup.querySelector(d), this.isTargeted = new S(this.popupContainer), this.a11y = slate.a11y, this.init()
    }

    function C(e) {
        this.container = e, b[this.container.id] = [];
        const n = this.container.querySelectorAll(t);
        n.length && n.forEach((t => {
            b[this.container.id].push(new x(t))
        }));
        const o = this.container.querySelectorAll(r);
        o.length && o.forEach((t => {
            b[this.container.id].push(new k(t))
        }));
        const s = this.container.querySelectorAll(i);
        s.length && s.forEach((t => {
            b[this.container.id].push(new E(t))
        }));
        const a = this.container.querySelectorAll(d);
        a.length && a.forEach((t => {
            b[this.container.id].push(new PaloAlto.Newsletter(t))
        }))
    }
    return w.prototype = $.extend({}, w.prototype, {
        always() {
            this.showPopup()
        },
        delayed(t = 10) {
            setTimeout((() => {
                this.showPopup()
            }), 1e3 * t)
        },
        bottom() {
            document.addEventListener("theme:scroll", this.showPopupOnScrollEvent)
        },
        idle() {
            let t = 0;
            const e = ["mousemove", "mousedown", "click", "touchmove", "touchstart", "touchend", "keydown", "keypress"],
                i = ["load", "resize", "scroll"],
                n = () => {
                    t = setTimeout((() => {
                        t = 0, this.showPopup()
                    }), 6e4), e.forEach((t => {
                        document.addEventListener(t, o)
                    })), i.forEach((t => {
                        window.addEventListener(t, o)
                    }))
                },
                o = () => {
                    t && clearTimeout(t), e.forEach((t => {
                        document.removeEventListener(t, o)
                    })), i.forEach((t => {
                        window.removeEventListener(t, o)
                    })), n()
                };
            n()
        },
        showPopup() {
            this.popup.classList.add(y), "function" == typeof this.callback && this.callback()
        },
        hidePopup() {
            this.popup.classList.remove(y), this.scrollUnlock()
        },
        scrollLock() {
            this.a11y.trapFocus({
                container: this.popupBody
            }), document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
                bubbles: !0,
                detail: this.popupBody
            }))
        },
        scrollUnlock() {
            this.a11y.removeTrapFocus(), setTimeout((() => {
                document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
                    bubbles: !0
                }))
            }), 300)
        },
        showPopupOnScroll() {
            window.scrollY + window.innerHeight >= document.body.clientHeight && (this.showPopup(), document.removeEventListener("theme:scroll", this.showPopupOnScrollEvent))
        },
        onUnload() {
            document.removeEventListener("theme:scroll", this.showPopupOnScrollEvent)
        }
    }), x.prototype = $.extend({}, x.prototype, {
        init() {
            !1 !== this.cookie.read() && !window.Shopify.designMode || (window.Shopify.designMode || new w(this.popupContainer, this.popup, (() => this.scrollLock())), this.form && setTimeout((() => {
                this.form.classList.contains(p) && this.showPopupIfNoCookie()
            })), this.initClosers())
        },
        showPopupIfNoCookie() {
            this.showPopup(), this.scrollLock()
        },
        initClosers() {
            this.close.addEventListener("click", this.closePopup.bind(this)), this.underlay.addEventListener("click", this.closePopup.bind(this)), this.popupContainer.addEventListener("keyup", (t => {
                t.keyCode === slate.utils.keyboardKeys.ESCAPE && this.closePopup(t)
            }))
        },
        closePopup(t) {
            t.preventDefault(), this.hidePopup(), this.cookie.write(), this.scrollUnlock()
        },
        scrollLock() {
            this.a11y.trapFocus({
                container: this.popupBody
            }), document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
                bubbles: !0,
                detail: this.popupBody
            }))
        },
        scrollUnlock() {
            this.a11y.removeTrapFocus(), setTimeout((() => {
                document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
                    bubbles: !0
                }))
            }), 300)
        },
        showPopup() {
            this.popup.classList.add(y)
        },
        hidePopup() {
            this.popup.classList.remove(y)
        },
        onBlockSelect(t) {
            this.popupContainer.contains(t.target) && (this.popup.classList.add(m), this.popupContainer.classList.add(g), this.showPopup(), this.scrollLock())
        },
        onBlockDeselect(t) {
            this.popupContainer.contains(t.target) && (this.popup.classList.remove(m), this.popupContainer.classList.remove(g), this.hidePopup(), this.scrollUnlock())
        }
    }), E.prototype = $.extend({}, E.prototype, {
        init() {
            this.enableTracking && this.showPopup(), this.clickEvents()
        },
        clickEvents() {
            this.close.addEventListener("click", (t => {
                t.preventDefault(), window.Shopify.customerPrivacy.setTrackingConsent(!1, (() => this.hidePopup()))
            })), this.acceptButton.addEventListener("click", (t => {
                t.preventDefault(), window.Shopify.customerPrivacy.setTrackingConsent(!0, (() => this.hidePopup()))
            })), document.addEventListener("trackingConsentAccepted", (() => {
                console.log("trackingConsentAccepted event fired")
            }))
        },
        showPopup() {
            this.popup.classList.add(y)
        },
        hidePopup() {
            this.popup.classList.remove(y)
        },
        onBlockSelect(t) {
            this.popupContainer.contains(t.target) && this.enableTracking && (this.showPopup(), this.popup.classList.add(m), this.popup.parentNode.classList.add(g))
        },
        onBlockDeselect(t) {
            this.popupContainer.contains(t.target) && (this.popup.classList.remove(m), this.popupContainer.classList.remove(g), this.hidePopup(), this.scrollUnlock())
        }
    }), k.prototype = $.extend({}, k.prototype, {
        init() {
            !1 !== this.cookie.read() && !window.Shopify.designMode || (window.Shopify.designMode ? this.showPopup() : new w(this.popupContainer, this.popup), this.initPopupToggleButton(), this.initClosers(), this.form && setTimeout((() => {
                this.form.classList.contains(p) && this.showPopupIfNoCookie(), this.form.classList.contains(f) && this.toggle.dispatchEvent(new Event("click"))
            })))
        },
        showPopupIfNoCookie() {
            this.showPopup(), this.toggle.dispatchEvent(new Event("click"))
        },
        initPopupToggleButton() {
            this.toggle.addEventListener("click", (t => {
                t.preventDefault(), this.popup.classList.toggle(v), this.popup.classList.contains(v) ? this.scrollLock() : this.scrollUnlock()
            }))
        },
        showPopup() {
            this.popup.classList.add(y)
        },
        hidePopup() {
            this.popup.classList.remove(y)
        },
        initClosers() {
            this.close.addEventListener("click", this.closePopup.bind(this)), this.underlay.addEventListener("click", (() => this.toggle.dispatchEvent(new Event("click")))), this.popupContainer.addEventListener("keyup", (t => {
                t.keyCode === slate.utils.keyboardKeys.ESCAPE && (this.popup.classList.remove(v), this.scrollUnlock())
            }))
        },
        closePopup(t) {
            t.preventDefault(), this.cookie.write(), this.hidePopup(), this.scrollUnlock()
        },
        scrollLock() {
            this.a11y.trapFocus({
                container: this.popupBody
            }), document.dispatchEvent(new CustomEvent("theme:scroll:lock", {
                bubbles: !0,
                detail: this.popupBody
            }))
        },
        scrollUnlock() {
            this.a11y.removeTrapFocus(), document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
                bubbles: !0
            }))
        },
        onBlockSelect(t) {
            this.popupContainer.contains(t.target) && (this.showPopup(), this.popup.classList.add(v), this.popup.classList.add(m), this.popup.parentNode.classList.add(g), this.scrollLock())
        },
        onBlockDeselect(t) {
            this.popupContainer.contains(t.target) && (this.popup.classList.remove(v), this.popup.classList.remove(m), this.popup.parentNode.classList.remove(g), this.hidePopup(), this.scrollUnlock())
        }
    }), C.prototype = $.extend({}, C.prototype, {
        onBlockSelect: function(t) {
            b[this.container.id].forEach((e => {
                "function" == typeof e.onBlockSelect && e.onBlockSelect(t)
            }))
        },
        onBlockDeselect: function(t) {
            b[this.container.id].forEach((e => {
                "function" == typeof e.onBlockDeselect && e.onBlockDeselect(t)
            }))
        },
        onUnload: function(t) {
            b[this.container.id].forEach((e => {
                "function" == typeof e.onUnload && e.onUnload(t)
            }))
        }
    }), C
}(), PaloAlto.Press = function() {
    const t = "[data-press-items]",
        e = "[data-logo-slider]",
        i = "[data-logo-slide]";

    function n(i) {
        this.container = i, this.slider = this.container.querySelector(t), this.sliderNav = this.container.querySelector(e), this.sliderResizeEvent = this.checkSlides.bind(this), this.initSlider(), this.checkSlides(), window.addEventListener("load", this.resizeSlider.bind(this)), document.addEventListener("theme:resize:width", this.sliderResizeEvent)
    }
    return n.prototype = $.extend({}, n.prototype, {
        checkSlides() {
            const t = this.container.offsetWidth,
                e = this.container.querySelectorAll(i),
                n = Flickity.data(this.sliderNav) || null;
            null !== n && (n.options.draggable = !1, n.options.wrapAround = !1, n.options.contain = !0, this.getSlidesWidth() > t && e.length > 2 && (n.options.draggable = !0, n.options.wrapAround = !0, n.options.contain = !1), n.resize(), n.updateDraggable())
        },
        getSlidesWidth() {
            const t = this.container.querySelectorAll(i);
            let e = 0;
            return t.length && t.forEach((t => {
                e += t.offsetWidth
            })), e
        },
        initSlider() {
            let t = Flickity.data(this.slider) || null,
                e = Flickity.data(this.sliderNav) || null;
            t = new Flickity(this.slider, {
                fade: !0,
                wrapAround: !0,
                adaptiveHeight: !0,
                prevNextButtons: !1,
                pageDots: !1
            }), e = new Flickity(this.sliderNav, {
                draggable: !1,
                wrapAround: !1,
                contain: !0,
                imagesLoaded: !0,
                lazyLoad: !0,
                asNavFor: this.slider,
                prevNextButtons: !1,
                adaptiveHeight: !1,
                pageDots: !1
            }), PaloAlto.flickitySmoothScrolling(this.slider), PaloAlto.flickitySmoothScrolling(this.sliderNav), e.on("change", (() => {
                t.selectCell(e.selectedIndex)
            })), t.on("change", (() => {
                e.selectCell(t.selectedIndex)
            }))
        },
        resizeSlider() {
            const t = Flickity.data(this.slider);
            t && t.resize()
        },
        onBlockSelect(t) {
            const e = Flickity.data(this.slider) || null,
                i = Flickity.data(this.sliderNav) || null,
                n = parseInt([...t.target.parentNode.children].indexOf(t.target));
            null !== e && e.select(n), null !== i && i.select(n)
        },
        onUnload() {
            document.removeEventListener("theme:resize:width", this.sliderResizeEvent)
        }
    }), n
}(), PaloAlto.Product = function() {
    const t = "[data-popout]",
        e = "[data-product-single-media-slider]",
        i = "[data-thumbnail-id]",
        n = "[data-product-single-media-thumbs]",
        o = "[data-product-single-media-wrapper]",
        r = "[data-model]",
        s = ".product-single__thumbnail-link",
        a = "[data-deferred-media]",
        l = "[data-deferred-media-button]",
        c = "[data-form-wrapper]",
        u = "[data-tooltip]",
        d = "featured-product",
        h = "featured-product--onboarding",
        p = "has-media-active",
        f = "media--hidden",
        m = "no-outline",
        g = "is-moving",
        v = "data-media-id",
        y = "data-section-id",
        b = "data-thumbnail-id",
        w = "loaded",
        S = "tabindex";

    function x(t) {
        this.container = t, this.sectionId = t.getAttribute(y), this.formWrapper = this.container.querySelector(c), this.isFlickityDragging = !1, this.flktyNavResize = null, this.enableHistoryState = !this.container.classList.contains(d), this.tooltips = [], this.initTooltips(), this.initPopouts(), PaloAlto.initCollapsible(), PaloAlto.initSwatches.makeSwatch(t), new PaloAlto.ShareButton(t), t.classList.contains(h) || (new PaloAlto.ProductAddForm(t), new PaloAlto.Zoom(t), this.initProductSlider(), this.initMediaSwitch(), this.initProductVideo(), this.initProductModel(), this.initShopifyXrLaunch())
    }
    return x.prototype = $.extend({}, x.prototype, {
        initProductSlider: function() {
            const t = this.container.querySelector(e),
                i = this.container.querySelector(n),
                r = this.container.querySelectorAll(o);
            if (r.length > 1) {
                const n = new Flickity(t, {
                    wrapAround: !0,
                    pageDots: !1,
                    adaptiveHeight: !0,
                    on: {
                        ready: () => {
                            t.setAttribute(S, "-1")
                        },
                        dragStart: () => {
                            t.classList.add(g)
                        },
                        dragMove: () => {
                            this.isFlickityDragging = !0
                        },
                        staticClick: () => {
                            this.isFlickityDragging = !1
                        },
                        settle: (e, i) => {
                            const o = n.selectedElement,
                                r = o.getAttribute(v);
                            o.setAttribute(S, "0"), [...o.parentNode.children].forEach((t => {
                                t !== o && t.setAttribute(S, "-1")
                            })), this.switchMedia(r), t.classList.remove(g)
                        }
                    }
                });
                if (r.length && r.forEach((t => {
                        t.addEventListener("theme:media:play", (() => {
                            n.options.draggable = !0, n.updateDraggable(), t.closest(e).classList.add(p)
                        })), t.addEventListener("theme:media:pause", (() => {
                            n.options.draggable = !0, n.updateDraggable(), t.closest(e).classList.remove(p)
                        }))
                    })), PaloAlto.flickitySmoothScrolling(t), null !== i) {
                    const e = new Flickity(i, {
                        asNavFor: t,
                        contain: !0,
                        pageDots: !1,
                        prevNextButtons: !1,
                        resize: !0,
                        on: {
                            ready: () => {
                                i.setAttribute(S, "-1")
                            }
                        }
                    });
                    this.flktyNavResize = () => {
                        e.resize()
                    }, document.addEventListener("theme:resize:width", this.flktyNavResize), PaloAlto.flickitySmoothScrolling(i);
                    const n = this.container.querySelectorAll(s);
                    n.length && n.forEach((t => {
                        t.addEventListener("click", (t => {
                            t.preventDefault()
                        }))
                    }))
                }
            }
        },
        handleMediaFocus: function(t) {
            if (13 !== t.keyCode && 9 !== t.keyCode) return;
            const i = t.currentTarget.getAttribute(b),
                o = this.container.querySelector(`[${v}="${i}"]`),
                r = parseInt([...o.parentNode.children].indexOf(o)),
                s = this.container.querySelector(e),
                a = this.container.querySelector(n),
                l = Flickity.data(s) || null,
                c = Flickity.data(a) || null;
            l && l.isActive && r > -1 && 13 === t.keyCode && l.select(r), c && c.isActive && r > -1 && c.select(r)
        },
        switchMedia: function(t) {
            const i = this.container.querySelector(`${o}[${v}="${t}"]`);
            !document.body.classList.contains(m) && i.focus(), i.closest(e).classList.remove(p), i.classList.remove(f), i.dispatchEvent(new CustomEvent("theme:media:visible"), {
                bubbles: !0
            });
            const n = i.querySelector(a);
            n && "true" !== n.getAttribute(w) && i.querySelector(l).dispatchEvent(new Event("click"))
        },
        initMediaSwitch: function() {
            const t = this.container.querySelectorAll(i);
            t.length && t.forEach((t => {
                t.addEventListener("keyup", this.handleMediaFocus.bind(this)), t.addEventListener("click", (t => {
                    t.preventDefault()
                }))
            }))
        },
        initProductVideo: function() {
            this.videos = new PaloAlto.ProductVideo(this.container)
        },
        initProductModel: function() {
            const t = this.container.querySelectorAll(r);
            t.length && t.forEach((t => {
                PaloAlto.ProductModel.init(t, this.sectionId)
            }))
        },
        initShopifyXrLaunch: function() {
            document.addEventListener("shopify_xr_launch", (() => {
                this.container.querySelector(`${r}:not(.${f})`).dispatchEvent(new CustomEvent("xrLaunch"))
            }))
        },
        initTooltips: function() {
            const t = this.container.querySelectorAll(u);
            t.length && t.forEach((t => {
                this.tooltips.push(new PaloAlto.Tooltip(t))
            }))
        },
        initPopouts: function() {
            const e = this.container.querySelectorAll(t);
            let i = {};
            e.length && e.forEach(((t, e) => {
                i[e] = new PaloAlto.Popout(t)
            }))
        },
        onUnload: function() {
            null !== this.flktyNavResize && document.removeEventListener("theme:resize:width", this.flktyNavResize), this.tooltips.forEach((t => {
                "function" == typeof t.unload && t.unload()
            }))
        }
    }), x
}(), PaloAlto.ProductGrid = function() {
    const t = "[data-slider]",
        e = "[data-product-media-container]",
        i = "[data-product-media-slideshow]",
        n = "[data-product-media-slideshow-slide]",
        o = "[data-product-slideshow-progress]",
        r = ".flickity-button",
        s = "fill";

    function a(e) {
        this.container = e, this.sliders = this.container.querySelectorAll(t), "slideshow" !== theme.settings.productGridHover || window.theme.touch || this.productGridSlideshow(), PaloAlto.QuickViewPopup.init(this.container), PaloAlto.initSwatches.makeGridSwatch(this.container)
    }
    return a.prototype = $.extend({}, a.prototype, {
        productGridSlideshow: function() {
            const t = this.container.querySelectorAll(i),
                a = this.container.querySelectorAll(e);
            t.length && t.forEach((t => {
                const i = t.closest(e),
                    r = i.querySelector(o),
                    a = t.querySelectorAll(n).length,
                    l = 2200,
                    c = !this.sliders.length;
                let u = new Flickity.data(t),
                    d = 0,
                    h = n;
                !u.isActive && a > 1 && (u = new Flickity(t, {
                    draggable: c,
                    cellSelector: h,
                    contain: !0,
                    wrapAround: !0,
                    imagesLoaded: !0,
                    lazyLoad: !0,
                    pageDots: !1,
                    prevNextButtons: !1,
                    adaptiveHeight: !1,
                    pauseAutoPlayOnHover: !1,
                    selectedAttraction: .2,
                    friction: 1,
                    on: {
                        ready: () => {
                            this.container.style.setProperty("--autoplay-speed", "2200ms")
                        },
                        change: () => {
                            d && clearTimeout(d), r.classList.remove(s), setTimeout((() => {
                                r.classList.add(s)
                            })), d = setTimeout((() => {
                                r.classList.remove(s)
                            }), l)
                        },
                        dragEnd: () => {
                            u.playPlayer()
                        }
                    }
                }), window.theme.touch || (i.addEventListener("mouseenter", (() => {
                    r.classList.add(s), d && clearTimeout(d), d = setTimeout((() => {
                        r.classList.remove(s)
                    }), l), u.options.autoPlay = l, u.playPlayer()
                })), i.addEventListener("mouseleave", (() => {
                    u.stopPlayer(), d && clearTimeout(d), r.classList.remove(s)
                }))))
            })), a.length && a.forEach((t => {
                t.addEventListener("click", (t => {
                    t.target.matches(r) && t.preventDefault()
                }))
            }))
        },
        onBlockSelect: function() {
            $.magnificPopup.close()
        },
        onSelect: function() {
            PaloAlto.QuickViewPopup.init(this.container)
        },
        onDeselect: function() {
            $.magnificPopup.close()
        },
        onUnload: function() {
            $.magnificPopup.close()
        }
    }), a
}(), PaloAlto.RelatedProducts = function() {
    const t = "[data-product-block]",
        e = "[data-related-products]",
        i = "data-section-id",
        n = "data-product-id",
        o = "data-limit";

    function r(t) {
        this.container = t, this.relatedProducts = this.container.querySelector(e), this.init()
    }
    return r.prototype = $.extend({}, r.prototype, {
        init: function() {
            const r = this.container.getAttribute(i),
                s = this.container.getAttribute(n),
                a = this.container.getAttribute(o),
                l = `${theme.routes.product_recommendations_url}?section_id=${r}&limit=${a}&product_id=${s}`;
            fetch(l).then((t => t.text())).then((i => {
                const n = document.createElement("div");
                n.innerHTML = i;
                const o = n.querySelector(e);
                o.querySelectorAll(t).length && (this.relatedProducts.innerHTML = o.innerHTML, this.productGrid = new PaloAlto.ProductGrid(this.container), this.gridSlider = new PaloAlto.GridSlider(this.container), AOS.refreshHard())
            }))
        },
        onSelect: function() {
            this.productGrid && this.productGrid.onSelect()
        },
        onDeselect: function() {
            this.productGrid && this.productGrid.onDeselect()
        },
        onUnload: function() {
            this.productGrid && this.productGrid.onUnload()
        }
    }), r
}(), PaloAlto.StoreAvailability = function() {
    var t = "body",
        e = "[data-store-availability-modal]",
        i = "[data-store-availability-modal-open]",
        n = "[data-store-availability-modal-product__title]";

    function o(t) {
        this.container = t
    }
    return o.prototype = Object.assign({}, o.prototype, {
        updateContent: function(t, e) {
            this._fetchStoreAvailabilities(t, e)
        },
        clearContent: function() {
            this.container.innerHTML = ""
        },
        _initModal: function() {
            return new PaloAlto.Modals("StoreAvailabilityModal", "store-availability-modal", {
                close: ".js-modal-close-store-availability-modal",
                closeModalOnClick: !0,
                openClass: "store-availabilities-modal--active",
                scrollIntoView: !1
            })
        },
        _fetchStoreAvailabilities: function(n, o) {
            var r = "/variants/" + n + "/?section_id=store-availability";
            this.clearContent();
            var s = this;
            fetch(r).then((function(t) {
                return t.text()
            })).then((function(n) {
                if ("" !== n.trim()) {
                    var r, a = document.querySelector(t);
                    if ((r = a.querySelector(e)) && r.remove(), s.container.innerHTML = n, s.container.innerHTML = s.container.firstElementChild.innerHTML, s.container.querySelector(i)) s.modal = s._initModal(), s._updateProductTitle(o), (r = s.container.querySelector(e)) && a.appendChild(r)
                }
            }))
        },
        _updateProductTitle: function(t) {
            this.container.querySelector(n).textContent = t
        }
    }), o
}(), PaloAlto.RichText = function(t) {
    PaloAlto.videoLink()
}, PaloAlto.Slider = function() {
    const t = "[data-scroll-down]",
        e = "[data-site-header]",
        i = "[data-slide]",
        n = "a, button",
        o = "[data-main]",
        r = "data-slide-position",
        s = "data-style",
        a = "data-current-style",
        l = "tabindex",
        c = "site-header--fixed";

    function u(t) {
        this.container = t, this.header = document.querySelector(e), this.flkty = null, this.initSlider(), this.initZoomAnimation(), this.bindScrollButton(), PaloAlto.videoLink()
    }
    return u.prototype = $.extend({}, u.prototype, {
        initSlider() {
            const t = this.container.querySelectorAll(i).length,
                e = this.container.dataset.duration,
                o = "true" === this.container.dataset.pageDots && t > 1,
                c = "true" === this.container.dataset.navArrows && t > 1,
                u = "slide" !== this.container.dataset.transition;
            let d = "true" === this.container.dataset.autoplay;
            if (d && (d = e), t > 1) this.flkty = new Flickity(this.container, {
                fade: u,
                cellSelector: i,
                autoPlay: d,
                wrapAround: !0,
                adaptiveHeight: !0,
                setGallerySize: !0,
                imagesLoaded: !0,
                pageDots: o,
                prevNextButtons: c,
                on: {
                    ready: () => {
                        const t = this.container.querySelector(`${i}[${r}="1"]`).getAttribute(s);
                        this.container.setAttribute(a, t)
                    },
                    change: t => {
                        const e = this.container.querySelector(`${i}[${r}="${t+1}"]`),
                            o = e.getAttribute(s),
                            c = [...e.parentNode.children];
                        this.container.setAttribute(a, o), c.forEach(((e, i) => {
                            e.querySelectorAll(n).forEach((e => {
                                i === t ? e.removeAttribute(l) : e.setAttribute(l, "-1")
                            }))
                        }))
                    }
                }
            }), PaloAlto.flickitySmoothScrolling(this.container);
            else if (1 === t) {
                const t = this.container.querySelector(i).getAttribute(s);
                this.container.setAttribute(a, t)
            }
        },
        initZoomAnimation() {
            if ("true" !== this.container.dataset.zoomAnimation) return;
            const t = this.container,
                e = document.body.querySelector(o).children[0],
                i = this.container.parentNode === e,
                n = "true" == this.header.dataset.transparent,
                r = () => {
                    const e = i & n ? 0 : parseInt(this.header.dataset.height || this.header.offsetHeight),
                        o = t.getBoundingClientRect(),
                        r = t.offsetHeight,
                        s = i ? e - o.top : e - o.top + window.innerHeight;
                    let a = .1;
                    i && (a *= 1.5);
                    let l = 1 + s / r * a;
                    l = l > 1 ? l : 1, t.style.setProperty("--scale", l)
                };
            r(), this.zoomOnScrollEvent = throttle(r, 5);
            new IntersectionObserver((t => {
                t[0].isIntersecting ? window.addEventListener("scroll", this.zoomOnScrollEvent) : window.removeEventListener("scroll", this.zoomOnScrollEvent)
            }), {
                root: null,
                rootMargin: "0px",
                threshold: 0
            }).observe(t)
        },
        bindScrollButton() {
            const e = this.container.querySelector(t);
            e && e.addEventListener("click", (t => {
                t.preventDefault();
                const e = this.header.classList.contains(c) ? 60 : 0,
                    i = parseInt(Math.ceil(this.container.offsetTop + this.container.offsetHeight - e));
                window.scrollTo({
                    top: i,
                    left: 0,
                    behavior: "smooth"
                })
            }))
        },
        onBlockSelect(t) {
            const e = parseInt([...t.target.parentNode.children].indexOf(t.target));
            null !== this.flkty && (this.flkty.select(e), this.flkty.pausePlayer())
        },
        onBlockDeselect(t) {
            t.target.dataset.autoplay && null !== this.flkty && this.flkty.playPlayer()
        },
        onUnload() {
            null !== this.flkty && (this.flkty.destroy(), this.flkty = null), null !== this.zoomOnScrollEvent && window.removeEventListener("scroll", this.zoomOnScrollEvent)
        }
    }), u
}(), PaloAlto.Subcollections = function() {
    function t(t) {
        this.gridSlider = new PaloAlto.GridSlider(t)
    }
    return t.prototype = $.extend({}, t.prototype, {
        onUnload: function() {
            this.gridSlider && this.gridSlider.onUnload()
        }
    }), t
}(), PaloAlto.ProductsList = function() {
    const t = {
            href: "href",
            mediaId: "data-media-id"
        },
        e = "[data-deferred-media]",
        i = "[data-deferred-media-button]",
        n = "[data-product-content-wrapper]",
        o = "[data-product-single-media-wrapper]",
        r = "[data-model]",
        s = "[data-product-link]",
        a = "[data-product-single-media-image]",
        l = "[data-slider-contents]",
        c = "[data-slider-images]",
        u = "[data-tab-button]",
        d = "[data-tab-item]",
        h = {
            aosAnimate: "aos-animate",
            tabButtonActive: "products-list__nav__button--active",
            tabItemActive: "products-list__item--active",
            mediaHidden: "media--hidden"
        };

    function p(t) {
        this.container = t, this.sectionId = t.dataset.sectionId, this.tabButtons = this.container.querySelectorAll(u), this.tabItems = this.container.querySelectorAll(d), this.slidersImages = this.container.querySelectorAll(c), this.slidersContents = this.container.querySelectorAll(l), this.videos = {}, this.initButtons(), this.initSliders(), this.initProductVideo(), this.initProductModel(), this.initShopifyXrLaunch()
    }
    return p.prototype = $.extend({}, p.prototype, {
        initButtons() {
            this.tabButtons.forEach((e => {
                e.addEventListener("click", (i => {
                    if (e.classList.contains(h.tabButtonActive)) return;
                    const n = e.getAttribute(t.href),
                        r = this.container.querySelector(n),
                        s = r.querySelector(o),
                        a = s ? s.dataset.mediaId : null;
                    this.tabButtons.forEach((t => {
                        t.classList.remove(h.tabButtonActive)
                    })), this.tabItems.forEach((t => {
                        t.classList.remove(h.tabItemActive), theme.settings.animations && t.querySelectorAll(`.${h.aosAnimate}`).forEach((t => {
                            t.classList.remove(h.aosAnimate), setTimeout((() => {
                                t.classList.add(h.aosAnimate)
                            }))
                        }))
                    })), e.classList.add(h.tabButtonActive), r.classList.add(h.tabItemActive), a ? this.switchMedia(a) : this.pauseAllMedia(), i.preventDefault()
                }))
            }))
        },
        initSliders() {
            this.slidersImages.forEach((t => {
                new Flickity(t, {
                    fade: !0,
                    sync: t.parentNode.querySelector(l),
                    pageDots: !1,
                    prevNextButtons: !0,
                    wrapAround: !0,
                    adaptiveHeight: !0
                }).on("settle", (e => {
                    const i = t.querySelectorAll(o);
                    for (let t = 0; t < i.length; t++) t === e ? i[t].querySelector(a).removeAttribute("tabindex") : i[t].querySelector(a).setAttribute("tabindex", "-1")
                }))
            })), this.slidersContents.forEach((t => {
                new Flickity(t, {
                    fade: !0,
                    sync: t.parentNode.querySelector(c),
                    pageDots: !1,
                    prevNextButtons: !1,
                    wrapAround: !0,
                    adaptiveHeight: !0,
                    autoPlay: 4e3,
                    pauseAutoPlayOnHover: !0
                }).on("settle", (e => {
                    const i = t.querySelectorAll(n);
                    for (let t = 0; t < i.length; t++) t === e ? i[t].querySelectorAll(s).forEach((t => {
                        t.removeAttribute("tabindex")
                    })) : i[t].querySelectorAll(s).forEach((t => {
                        t.setAttribute("tabindex", "-1")
                    }))
                }))
            }))
        },
        initProductVideo: function() {
            this.videos = new PaloAlto.ProductVideo(this.container)
        },
        initProductModel: function() {
            const t = this.container.querySelectorAll(r);
            t.length && t.forEach((t => {
                PaloAlto.ProductModel.init(t, this.sectionId)
            }))
        },
        initShopifyXrLaunch: function() {
            document.addEventListener("shopify_xr_launch", (() => {
                this.container.querySelector(`${r}:not(.${h.mediaHidden})`).dispatchEvent(new CustomEvent("xrLaunch"))
            }))
        },
        switchMedia: function(n) {
            const r = this.container.querySelector(`${o}[${t.mediaId}="${n}"]`);
            !document.body.classList.contains(h.noOutline) && r.focus(), r.classList.remove(h.mediaHidden), r.dispatchEvent(new CustomEvent("theme:media:visible"), {
                bubbles: !0
            });
            const s = r.querySelector(e);
            s && "true" !== s.getAttribute(t.loaded) && r.querySelector(i).dispatchEvent(new Event("click"))
        },
        pauseAllMedia: function() {
            const t = document.querySelectorAll(`${o}`);
            t.length && t.forEach((t => {
                t.dispatchEvent(new CustomEvent("theme:media:hidden"), {
                    bubbles: !0
                }), t.classList.add(h.mediaHidden)
            }))
        },
        onBlockSelect(t) {
            t.target.dispatchEvent(new Event("click"))
        }
    }), p
}(), PaloAlto.TabCollections = function() {
    function t(t) {
        this.container = t, this.productGrid = new PaloAlto.ProductGrid(t), this.gridSlider = new PaloAlto.GridSlider(t), this.tabs = new PaloAlto.Tabs(t)
    }
    return t.prototype = $.extend({}, t.prototype, {
        onBlockSelect: function(t) {
            this.tabs && this.tabs.onBlockSelect(t), this.productGrid && this.productGrid.onBlockSelect(t)
        },
        onSelect: function() {
            this.productGrid && this.productGrid.onSelect()
        },
        onDeselect: function() {
            this.productGrid && this.productGrid.onDeselect()
        },
        onUnload: function() {
            this.productGrid && this.productGrid.onUnload()
        }
    }), t
}(), PaloAlto.Testimonials = function() {
    const t = "[data-slider]",
        e = "[data-item]",
        i = "flickity-enabled",
        n = "data-section-id";

    function o(e) {
        this.container = e, this.sectionId = this.container.getAttribute(n), this.slider = this.container.querySelector(t), this.sliderResizeEvent = this.initSlider.bind(this), this.flkty = null, this.initSlider(), document.addEventListener("theme:resize:width", this.sliderResizeEvent)
    }
    return o.prototype = $.extend({}, o.prototype, {
        initSlider: function() {
            const t = this.slider.querySelectorAll(e).length;
            let n = this.slider.classList.contains(i);
            3 == t && window.innerWidth >= theme.sizes.large || 2 == t && window.innerWidth >= theme.sizes.small || 1 == t || window.innerWidth < theme.sizes.small ? n && this.flkty.destroy() : this.flkty = new Flickity(this.slider, {
                cellSelector: e,
                prevNextButtons: !0,
                pageDots: !1,
                groupCells: !0,
                cellAlign: "left",
                contain: !0,
                adaptiveHeight: !1
            })
        },
        onBlockSelect: function(t) {
            if (null !== this.flkty) {
                const e = parseInt([...t.target.parentNode.children].indexOf(t.target)),
                    i = parseInt(this.flkty.slides[0].cells.length),
                    n = Math.floor(e / i);
                this.flkty.select(n)
            } else {
                const e = this.slider.currentStyle || window.getComputedStyle(this.slider),
                    i = parseInt(e.paddingLeft),
                    n = t.target.offsetLeft - i;
                this.slider.scrollTo({
                    top: 0,
                    left: n,
                    behavior: "smooth"
                })
            }
        },
        onUnload: function() {
            document.removeEventListener("theme:resize:width", this.sliderResizeEvent)
        }
    }), o
}(), PaloAlto.Article = function() {
    const t = "[data-share-button]";

    function e(e) {
        this.container = e, this.shareButton = this.container.querySelector(t), this.init()
    }
    return e.prototype = $.extend({}, e.prototype, {
        init() {
            this.shareButton && new PaloAlto.ShareButton(this.container)
        }
    }), e
}(), PaloAlto.AboutPage = function(t) {
    PaloAlto.videoLink()
}, PaloAlto.CollectionTemplate = function() {
    function t(t) {
        new PaloAlto.Filters(t)
    }
    return t.prototype = $.extend({}, t.prototype, {
        onDeselect: function() {
            $.magnificPopup.close()
        },
        onUnload: function(t) {
            $.magnificPopup.close()
        }
    }), t
}(), PaloAlto.Addresses = function() {
    const t = ".template-customers-addresses",
        e = "[data-form]",
        i = "[data-form-new]",
        n = "[data-button-new]",
        o = "[data-button-edit]",
        r = "[data-button-delete]",
        s = "[data-button-cancel]",
        a = "data-form-edit",
        l = "AddressCountryNew",
        c = "AddressProvinceNew",
        u = "AddressProvinceContainerNew",
        d = "[data-country-option]",
        h = "AddressCountry",
        p = "AddressProvince",
        f = "AddressProvinceContainer",
        m = 'input[type="text"]:not(.optional)',
        g = "data-form-id",
        v = "is-hidden",
        y = "validation--showup";

    function b(t) {
        this.section = t, this.addressNewForm = this.section.querySelector(i), this.accountForms = this.section.querySelectorAll(e), this.init(), this.validate()
    }
    b.prototype = $.extend({}, b.prototype, {
        init() {
            if (this.addressNewForm) {
                const t = this.section,
                    i = this.addressNewForm;
                this.customerAddresses();
                const l = t.querySelectorAll(n);
                l.length && l.forEach((t => {
                    t.addEventListener("click", (function(e) {
                        e.preventDefault(), t.classList.add(v), i.classList.remove(v)
                    }))
                }));
                const c = t.querySelectorAll(o);
                c.length && c.forEach((e => {
                    e.addEventListener("click", (function(e) {
                        e.preventDefault();
                        const i = this.getAttribute(g);
                        t.querySelector(`[${a}="${i}"]`).classList.toggle(v)
                    }))
                }));
                const u = t.querySelectorAll(r);
                u.length && u.forEach((t => {
                    t.addEventListener("click", (function(t) {
                        t.preventDefault();
                        const e = this.getAttribute(g);
                        confirm(theme.strings.delete_confirm) && Shopify.postLink("/account/addresses/" + e, {
                            parameters: {
                                _method: "delete"
                            }
                        })
                    }))
                }));
                const d = t.querySelectorAll(s);
                d.length && d.forEach((t => {
                    t.addEventListener("click", (function(t) {
                        t.preventDefault(), this.closest(e).classList.add(v), document.querySelector(n).classList.remove(v)
                    }))
                }))
            }
        },
        customerAddresses() {
            Shopify.CountryProvinceSelector && new Shopify.CountryProvinceSelector(l, c, {
                hideElement: u
            });
            this.section.querySelectorAll(d).forEach((t => {
                const e = t.getAttribute(g),
                    i = `${h}_${e}`,
                    n = `${p}_${e}`,
                    o = `${f}_${e}`;
                new Shopify.CountryProvinceSelector(i, n, {
                    hideElement: o
                })
            }))
        },
        validate() {
            this.accountForms.forEach((t => {
                const e = t.querySelector("form"),
                    i = e.querySelectorAll(m);
                e.addEventListener("submit", (t => {
                    let e = !1;
                    i.forEach((t => {
                        t.value ? t.nextElementSibling.classList.remove(y) : (t.nextElementSibling.classList.add(y), e = !0)
                    })), e && t.preventDefault()
                }))
            }))
        }
    });
    const w = document.querySelector(t);
    w && new b(w)
}, PaloAlto.loginForms = function() {
    const t = "[data-account-form]",
        e = "[data-show-reset]",
        i = "[data-hide-reset]",
        n = "[data-recover-password]",
        o = "[data-login-form]",
        r = "[data-recover-success]",
        s = "[data-recover-success-text]",
        a = "#recover",
        l = "is-hidden";

    function c(t) {
        this.form = t, this.showButton = t.querySelector(e), this.hideButton = t.querySelector(i), this.recover = t.querySelector(n), this.login = t.querySelector(o), this.success = t.querySelector(r), this.successText = t.querySelector(s), this.init()
    }
    c.prototype = $.extend({}, c.prototype, {
        init() {
            window.location.hash == a ? this.showRecoverPasswordForm() : this.hideRecoverPasswordForm(), this.success && this.successText.classList.remove(l), this.showButton.addEventListener("click", (t => {
                t.preventDefault(), this.showRecoverPasswordForm()
            }), !1), this.hideButton.addEventListener("click", (t => {
                t.preventDefault(), this.hideRecoverPasswordForm()
            }), !1)
        },
        showRecoverPasswordForm() {
            return this.recover.classList.remove(l), this.login.classList.add(l), window.location.hash = a, !1
        },
        hideRecoverPasswordForm() {
            return this.login.classList.remove(l), this.recover.classList.add(l), window.location.hash = "", !1
        }
    });
    const u = document.querySelector(t);
    u && new c(u)
}, PaloAlto.PasswordTemplate = function() {
    const t = "[data-toggle-admin]",
        e = "[data-toggle-newsletter]",
        i = "[data-form-admin]",
        n = "[data-form-newsletter]";

    function o(o) {
        this.container = o, this.toggleAdmin = this.container.querySelector(t), this.toggleNewsletter = this.container.querySelector(e), this.adminForm = this.container.querySelector(i), this.newsletterForm = this.container.querySelector(n), this.adminErrors = this.adminForm.querySelector(".errors"), this.newsletterErrors = this.newsletterForm.querySelector(".errors"), this.init()
    }
    return o.prototype = $.extend({}, o.prototype, {
        init() {
            this.toggleAdmin.addEventListener("click", (t => {
                t.preventDefault(), this.showPasswordForm()
            })), this.toggleNewsletter.addEventListener("click", (t => {
                t.preventDefault(), this.hidePasswordForm()
            })), "#login" == window.location.hash || this.adminErrors ? this.showPasswordForm() : this.hidePasswordForm()
        },
        showPasswordForm() {
            PaloAlto.Element.show(this.adminForm), PaloAlto.Element.hide(this.newsletterForm), window.location.hash = "#login"
        },
        hidePasswordForm() {
            PaloAlto.Element.show(this.newsletterForm), PaloAlto.Element.hide(this.adminForm), window.location.hash = ""
        }
    }), o
}(), PaloAlto.SearchTemplate = function() {
    function t(t) {
        new PaloAlto.Filters(t), theme.settings.enableInfinityScroll && (this.endlessCollection = new Ajaxinate({
            container: "#AjaxinateLoop",
            pagination: "#AjaxinatePagination",
            method: "scroll",
            callback: function() {
                AOS.refreshHard()
            }
        }))
    }
    return t.prototype = $.extend({}, t.prototype, {
        onDeselect: function(t) {
            $.magnificPopup.close()
        },
        onUnload: function(t) {
            theme.settings.enableInfinityScroll && "object" == typeof this.endlessCollection && "function" === this.endlessCollection.destroy && this.endlessBlogPosts.destroy(), $.magnificPopup.close()
        }
    }), t
}(), $.ajaxSetup({
    cache: !1
}), document.documentElement.style.setProperty("--scrollbar-width", `${getScrollbarWidth()}px`), setTimeout(function() {
    setVars(), PaloAlto.initSections(), PaloAlto.initFocusVisibility(), PaloAlto.loginForms(), PaloAlto.Addresses(), PaloAlto.Drawer.init(), document.addEventListener("theme:resize:width", PaloAlto.setMainSpacing);
    const t = window.location.hash,
        e = t.substr(1, t.length);
    null !== document.getElementById(e) && slate.a11y.pageLinkFocus($(window.location.hash));
    const i = document.querySelector(".in-page-link");
    i && i.addEventListener("click", (function(t) {
        slate.a11y.pageLinkFocus($(t.currentTarget.hash))
    })), PaloAlto.TableWrap();
    "scrollBehavior" in document.documentElement.style || loadScript({
        url: theme.assets.smoothscroll
    })
},3000), PaloAlto.updateHash = function(t) {
    window.location.hash = "#" + t, $("#" + t).attr("tabindex", -1).focus()
};
const isTouchDevice = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
"ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? (document.documentElement.className = document.documentElement.className.replace("no-touch", "supports-touch"), window.theme.touch = !0) : window.theme.touch = !1, document.addEventListener("shopify:section:unload", (() => {
    PaloAlto.Drawer.destroy()
})), document.addEventListener("shopify:section:load", (() => {
    window.dispatchEvent(new Event("resize"), {
        bubbles: !0
    }), preventOverflow(document), PaloAlto.Drawer.init()
})), void 0 !== theme.settings.newHash && PaloAlto.updateHash(theme.settings.newHash);
const showAnimations = "true" === document.body.dataset.animations;

function removeFromText() {
    var t = $("div.currency-converter-wrapper-amount-box");
    t.length > 0 && t.html(t.html().replace(/from/gi, ""))
}

function addStickyClass() {
    if ($("body.template-product").length > 0) {
        var t = $(".cz_fixingButton").offset().top;
        $(window).scroll((function() {
            t - $(window).scrollTop() < 0 ? $(".cz_fixingButton section").addClass("sticky-cart") : $(".cz_fixingButton section").removeClass("sticky-cart")
        }))
    }
}
showAnimations && AOS.init({
    once: !0,
    offset: 50,
    duration: 1e3,
    startEvent: "DOMContentLoaded2"
}), resizeListener(), scrollListener(), lazyImageBackgrounds(), setTimeout(function() {
    removeFromText(), addStickyClass(), setVarsOnResize(), preventOverflow(document), loadingAnimation()
},3000), $(".readmore").click((function(t) {
    document.querySelector(".collection-description-full").style.display = "block", document.querySelector(".collection-description-short").style.display = "none", resizeListener()
})), $(".select-popout__toggle").click((function() {
    $(this).toggleClass("open"), $(".select-popout__value").toggle(), $(".size_guide_cz").toggle()
})), $(".select-popout__option").click((function() {
    $(".select-popout__value").show(), $(".size_guide_cz").hide()
})), $(document).click((function(t) {
    $(".select-popout__toggle").is(t.target) || ($(".select-popout__value").show(), $(".size_guide_cz").hide())
})), $(".select-popout__item").click((function() {
    "" != $(".cz_single_product_size_selector").val() && ($(".select-popout").css({
        "border-width": "0px"
    }), $(".select-popout").addClass("hasSize"), $(".product__submit__add").css({
        "background-color": "#fff",
        color: "#000"
    }))
})), $(".product__submit__add").hover((function() {
    "Select size" == $(".select-popout__value").text() ? ($(this).addClass("pink"), $(".product__submit__add").children().text("PLEASE SELECT SIZE")) : ($(".product__submit__add").children().text("ADD TO CART"), $(this).removeClass("pink"))
})), $(".size_guide_cz").click((function(t) {
    t.preventDefault();
    let e = $(".product-single__media-link").attr("href"),
        i = $(".chart-logo-cz").attr("src");
    $("#logo_img_chart").attr("src", i), $("#chart_img").attr("src", e), $("#myModalCz").css({
        display: "block"
    }), $("#myModalCz").scrollTop(100)
})), $(".close-cz").click((function() {
    $(".modal_cz").css({
        display: "none"
    }), $(".size_guide_cz").hide()
})), $(".size_guide_footer").click((function(t) {
    t.preventDefault(), $("#myModalCz1").css({
        display: "block"
    }), $("#myModalCz1").scrollTop(100)
})), $(document).on("click", ".select-popout__list__scroll", (function() {
    $(".cz_single_product_size_selector").hasClass("sold-out") ? $(".product__submit__holder").hide() : $(".product__submit__holder").show()
}));
let startX, scrollLeft, isDown = !1;

function setcook() {
    var t = new Date;
    t.setHours(23, 59, 59, 0), document.cookie = "cookie_ue=" + escape("1") + ";path=/;" + (null == t ? "" : "; expires=" + t.toGMTString())
}
$(".mega-image-item-cz").mousedown((function(t) {
    isDown = !0, $(this).addClass("active"), startX = t.pageX - $(this).offset().left, scrollLeft = $(this).scrollLeft()
})), $(".mega-image-item-cz").mouseleave((function(t) {
    isDown = !1, $(this).removeClass("active")
})), $(".mega-image-item-cz").mouseup((function(t) {
    isDown = !1, $(this).removeClass("active")
})), $(".mega-image-item-cz").mousemove((function(t) {
    if (!isDown) return;
    t.preventDefault();
    const e = 3 * (t.pageX - $(this).offset().left - startX);
    $(this).scrollLeft(scrollLeft - e)
})), setTimeout(function() {
    let t = 0,
        e = 0,
        i = 0,
        n = 0,
        o = 0;
    $(document).mousemove((function(i) {
        $(i.target).hasClass("background-size-cover") || $(i.target).hasClass("menu__block--wide") || $(i.target).hasClass("mega-image-item-cz") ? (o = $(i.target).parents(".mega-image-container").find(".mega-image-item-cz").children(".menu__block--wide").length, $(i.target).parents(".mega-image-container").find(".mega-image-item-cz").width() > o * $(i.target).parents(".mega-image-container").find(".mega-image-item-cz").children(".menu__block--wide").width() ? ($("#cz-circle-test").hide(), $(".mega-image-item-cz").css({
            cursor: "pointer"
        })) : ($(".mega-image-item-cz").css({
            cursor: "grab"
        }), $("#cz-circle-test").show(), t = i.pageX - 37, e = i.pageY - 52)) : ($("#cz-circle-test").hide(), $(".mega-image-item-cz").css({
            cursor: "pointer"
        }))
    })), interval = setInterval((function() {
        i += (t - i) / 6, n += (e - n) / 6, $("#cz-circle-test").css({
            left: i + "px",
            top: n + "px"
        })
    }), 20)
}), setTimeout(function() {
    jQuery("#czMyVideo").trigger("click"), $("#CollectionFilter--availability").parent().hide()
}), $(".background-size-cover").click((function(t) {
    let e = $(this).parent().prev().attr("href");
    window.location.href = e
})), $(".closeLightBox").click((function(t) {
    $(".lightBoxCus").css({
        display: "none"
    }), $("body").css({
        overflow: "auto"
    }), $(".imgLight img").removeClass("extZoom"), $(".zoomLightBox").removeClass("inZoom")
})), $(".zoomLightBox").click((function(t) {
    $(this).toggleClass("inZoom"), $(".imgLight img").toggleClass("extZoom"), $(".imgLight img").css("max-width", "unset")
    if ($('.imgLight img').hasClass('extZoom')) {
        var outerContent = $('.imgLight');
        var innerContent = $('.Czlt img');
        outerContent.scrollLeft((innerContent.width() - outerContent.width()) / 2);
        outerContent.scrollTop((innerContent.height() - outerContent.height()) / 1.25);
    }
}))
if ($(document).width() > 576) {
    $(".imgLight img").click((function(e) {

        if ($('.imgLight').hasClass('dragged')) {
            $(".imgLight").removeClass("dragged")
            return false;
        }

        $(this).toggleClass("extZoom"), $(".zoomLightBox").toggleClass("inZoom"), $(".imgLight img").css("max-width", "unset")
        var outerContent = $('.imgLight');
        var innerContent = $('.Czlt img');
        outerContent.scrollLeft((innerContent.width() - outerContent.width()) / 2);
        outerContent.scrollTop((innerContent.height() - outerContent.height()) / 1.25);


    }))
}


   


$(".closeTopBar").click((function() {
    $(this).parent("#shopify-section-announcement-bar").hide(), setcook()
})), $(document).on("click", ".product-single__media-link", (function() {
    var t = $(this).attr("href");
    $(".imgLight img").attr("src", t), $(".lightBoxCus").css({
        display: "block"
    }), $("body").css({
        overflow: "hidden"
    }), $(".pswp__custom-close").trigger("click")

    if ($(document).width() < 576) {
        let zh = $('.zoomImg').height();
        let wh = $(window).height();
        let pd = Math.ceil((wh - zh) / 10);
        if (pd > 20) {
            pd = pd + '%';
            $('.imgLight img').css("padding-top", pd);
        }
    }

    var outerContent = $('.imgLight');
    var innerContent = $('.Czlt img');
    outerContent.scrollTop((innerContent.height() - outerContent.height()) / 1.25);
}));

