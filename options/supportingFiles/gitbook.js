!(function e(t, n, r) {
  function o(s, a) {
    if (!n[s]) {
      if (!t[s]) {
        var u = 'function' == typeof require && require;
        if (!a && u) return u(s, !0);
        if (i) return i(s, !0);
        var l = new Error("Cannot find module '" + s + "'");
        throw ((l.code = 'MODULE_NOT_FOUND'), l);
      }
      var c = (n[s] = { exports: {} });
      t[s][0].call(
        c.exports,
        function(e) {
          var n = t[s][1][e];
          return o(n ? n : e);
        },
        c,
        c.exports,
        e,
        t,
        n,
        r
      );
    }
    return n[s].exports;
  }
  for (
    var i = 'function' == typeof require && require, s = 0;
    s < r.length;
    s++
  )
    o(r[s]);
  return o;
})(
  {
    1: [
      function(e, t, n) {
        !(function(e, n) {
          'object' == typeof t && 'object' == typeof t.exports
            ? (t.exports = e.document
                ? n(e, !0)
                : function(e) {
                    if (!e.document)
                      throw new Error(
                        'jQuery requires a window with a document'
                      );
                    return n(e);
                  })
            : n(e);
        })('undefined' != typeof window ? window : this, function(e, t) {
          function n(e) {
            var t = 'length' in e && e.length,
              n = Z.type(e);
            return 'function' === n || Z.isWindow(e)
              ? !1
              : 1 === e.nodeType && t
              ? !0
              : 'array' === n ||
                0 === t ||
                ('number' == typeof t && t > 0 && t - 1 in e);
          }
          function r(e, t, n) {
            if (Z.isFunction(t))
              return Z.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n;
              });
            if (t.nodeType)
              return Z.grep(e, function(e) {
                return (e === t) !== n;
              });
            if ('string' == typeof t) {
              if (ae.test(t)) return Z.filter(t, e, n);
              t = Z.filter(t, e);
            }
            return Z.grep(e, function(e) {
              return X.call(t, e) >= 0 !== n;
            });
          }
          function o(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          function i(e) {
            var t = (de[e] = {});
            return (
              Z.each(e.match(he) || [], function(e, n) {
                t[n] = !0;
              }),
              t
            );
          }
          function s() {
            Q.removeEventListener('DOMContentLoaded', s, !1),
              e.removeEventListener('load', s, !1),
              Z.ready();
          }
          function a() {
            Object.defineProperty((this.cache = {}), 0, {
              get: function() {
                return {};
              }
            }),
              (this.expando = Z.expando + a.uid++);
          }
          function u(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = 'data-' + t.replace(be, '-$1').toLowerCase()),
                (n = e.getAttribute(r)),
                'string' == typeof n)
              ) {
                try {
                  n =
                    'true' === n
                      ? !0
                      : 'false' === n
                      ? !1
                      : 'null' === n
                      ? null
                      : +n + '' === n
                      ? +n
                      : xe.test(n)
                      ? Z.parseJSON(n)
                      : n;
                } catch (o) {}
                ye.set(e, t, n);
              } else n = void 0;
            return n;
          }
          function l() {
            return !0;
          }
          function c() {
            return !1;
          }
          function f() {
            try {
              return Q.activeElement;
            } catch (e) {}
          }
          function p(e, t) {
            return Z.nodeName(e, 'table') &&
              Z.nodeName(11 !== t.nodeType ? t : t.firstChild, 'tr')
              ? e.getElementsByTagName('tbody')[0] ||
                  e.appendChild(e.ownerDocument.createElement('tbody'))
              : e;
          }
          function h(e) {
            return (
              (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
            );
          }
          function d(e) {
            var t = Re.exec(e.type);
            return t ? (e.type = t[1]) : e.removeAttribute('type'), e;
          }
          function g(e, t) {
            for (var n = 0, r = e.length; r > n; n++)
              ve.set(e[n], 'globalEval', !t || ve.get(t[n], 'globalEval'));
          }
          function m(e, t) {
            var n, r, o, i, s, a, u, l;
            if (1 === t.nodeType) {
              if (
                ve.hasData(e) &&
                ((i = ve.access(e)), (s = ve.set(t, i)), (l = i.events))
              ) {
                delete s.handle, (s.events = {});
                for (o in l)
                  for (n = 0, r = l[o].length; r > n; n++)
                    Z.event.add(t, o, l[o][n]);
              }
              ye.hasData(e) &&
                ((a = ye.access(e)), (u = Z.extend({}, a)), ye.set(t, u));
            }
          }
          function v(e, t) {
            var n = e.getElementsByTagName
              ? e.getElementsByTagName(t || '*')
              : e.querySelectorAll
              ? e.querySelectorAll(t || '*')
              : [];
            return void 0 === t || (t && Z.nodeName(e, t))
              ? Z.merge([e], n)
              : n;
          }
          function y(e, t) {
            var n = t.nodeName.toLowerCase();
            'input' === n && je.test(e.type)
              ? (t.checked = e.checked)
              : ('input' === n || 'textarea' === n) &&
                (t.defaultValue = e.defaultValue);
          }
          function x(t, n) {
            var r,
              o = Z(n.createElement(t)).appendTo(n.body),
              i =
                e.getDefaultComputedStyle &&
                (r = e.getDefaultComputedStyle(o[0]))
                  ? r.display
                  : Z.css(o[0], 'display');
            return o.detach(), i;
          }
          function b(e) {
            var t = Q,
              n = $e[e];
            return (
              n ||
                ((n = x(e, t)),
                ('none' !== n && n) ||
                  ((Me = (
                    Me || Z("<iframe frameborder='0' width='0' height='0'/>")
                  ).appendTo(t.documentElement)),
                  (t = Me[0].contentDocument),
                  t.write(),
                  t.close(),
                  (n = x(e, t)),
                  Me.detach()),
                ($e[e] = n)),
              n
            );
          }
          function w(e, t, n) {
            var r,
              o,
              i,
              s,
              a = e.style;
            return (
              (n = n || _e(e)),
              n && (s = n.getPropertyValue(t) || n[t]),
              n &&
                ('' !== s ||
                  Z.contains(e.ownerDocument, e) ||
                  (s = Z.style(e, t)),
                Be.test(s) &&
                  We.test(t) &&
                  ((r = a.width),
                  (o = a.minWidth),
                  (i = a.maxWidth),
                  (a.minWidth = a.maxWidth = a.width = s),
                  (s = n.width),
                  (a.width = r),
                  (a.minWidth = o),
                  (a.maxWidth = i))),
              void 0 !== s ? s + '' : s
            );
          }
          function T(e, t) {
            return {
              get: function() {
                return e()
                  ? void delete this.get
                  : (this.get = t).apply(this, arguments);
              }
            };
          }
          function C(e, t) {
            if (t in e) return t;
            for (
              var n = t[0].toUpperCase() + t.slice(1), r = t, o = Ge.length;
              o--;

            )
              if (((t = Ge[o] + n), t in e)) return t;
            return r;
          }
          function j(e, t, n) {
            var r = ze.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t;
          }
          function k(e, t, n, r, o) {
            for (
              var i =
                  n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0,
                s = 0;
              4 > i;
              i += 2
            )
              'margin' === n && (s += Z.css(e, n + Te[i], !0, o)),
                r
                  ? ('content' === n &&
                      (s -= Z.css(e, 'padding' + Te[i], !0, o)),
                    'margin' !== n &&
                      (s -= Z.css(e, 'border' + Te[i] + 'Width', !0, o)))
                  : ((s += Z.css(e, 'padding' + Te[i], !0, o)),
                    'padding' !== n &&
                      (s += Z.css(e, 'border' + Te[i] + 'Width', !0, o)));
            return s;
          }
          function N(e, t, n) {
            var r = !0,
              o = 'width' === t ? e.offsetWidth : e.offsetHeight,
              i = _e(e),
              s = 'border-box' === Z.css(e, 'boxSizing', !1, i);
            if (0 >= o || null == o) {
              if (
                ((o = w(e, t, i)),
                (0 > o || null == o) && (o = e.style[t]),
                Be.test(o))
              )
                return o;
              (r = s && (J.boxSizingReliable() || o === e.style[t])),
                (o = parseFloat(o) || 0);
            }
            return o + k(e, t, n || (s ? 'border' : 'content'), r, i) + 'px';
          }
          function E(e, t) {
            for (var n, r, o, i = [], s = 0, a = e.length; a > s; s++)
              (r = e[s]),
                r.style &&
                  ((i[s] = ve.get(r, 'olddisplay')),
                  (n = r.style.display),
                  t
                    ? (i[s] || 'none' !== n || (r.style.display = ''),
                      '' === r.style.display &&
                        Ce(r) &&
                        (i[s] = ve.access(r, 'olddisplay', b(r.nodeName))))
                    : ((o = Ce(r)),
                      ('none' === n && o) ||
                        ve.set(r, 'olddisplay', o ? n : Z.css(r, 'display'))));
            for (s = 0; a > s; s++)
              (r = e[s]),
                r.style &&
                  ((t &&
                    'none' !== r.style.display &&
                    '' !== r.style.display) ||
                    (r.style.display = t ? i[s] || '' : 'none'));
            return e;
          }
          function S(e, t, n, r, o) {
            return new S.prototype.init(e, t, n, r, o);
          }
          function A() {
            return (
              setTimeout(function() {
                Je = void 0;
              }),
              (Je = Z.now())
            );
          }
          function D(e, t) {
            var n,
              r = 0,
              o = { height: e };
            for (t = t ? 1 : 0; 4 > r; r += 2 - t)
              (n = Te[r]), (o['margin' + n] = o['padding' + n] = e);
            return t && (o.opacity = o.width = e), o;
          }
          function q(e, t, n) {
            for (
              var r, o = (nt[t] || []).concat(nt['*']), i = 0, s = o.length;
              s > i;
              i++
            )
              if ((r = o[i].call(n, t, e))) return r;
          }
          function O(e, t, n) {
            var r,
              o,
              i,
              s,
              a,
              u,
              l,
              c,
              f = this,
              p = {},
              h = e.style,
              d = e.nodeType && Ce(e),
              g = ve.get(e, 'fxshow');
            n.queue ||
              ((a = Z._queueHooks(e, 'fx')),
              null == a.unqueued &&
                ((a.unqueued = 0),
                (u = a.empty.fire),
                (a.empty.fire = function() {
                  a.unqueued || u();
                })),
              a.unqueued++,
              f.always(function() {
                f.always(function() {
                  a.unqueued--, Z.queue(e, 'fx').length || a.empty.fire();
                });
              })),
              1 === e.nodeType &&
                ('height' in t || 'width' in t) &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                (l = Z.css(e, 'display')),
                (c =
                  'none' === l ? ve.get(e, 'olddisplay') || b(e.nodeName) : l),
                'inline' === c &&
                  'none' === Z.css(e, 'float') &&
                  (h.display = 'inline-block')),
              n.overflow &&
                ((h.overflow = 'hidden'),
                f.always(function() {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                }));
            for (r in t)
              if (((o = t[r]), Ke.exec(o))) {
                if (
                  (delete t[r],
                  (i = i || 'toggle' === o),
                  o === (d ? 'hide' : 'show'))
                ) {
                  if ('show' !== o || !g || void 0 === g[r]) continue;
                  d = !0;
                }
                p[r] = (g && g[r]) || Z.style(e, r);
              } else l = void 0;
            if (Z.isEmptyObject(p))
              'inline' === ('none' === l ? b(e.nodeName) : l) &&
                (h.display = l);
            else {
              g
                ? 'hidden' in g && (d = g.hidden)
                : (g = ve.access(e, 'fxshow', {})),
                i && (g.hidden = !d),
                d
                  ? Z(e).show()
                  : f.done(function() {
                      Z(e).hide();
                    }),
                f.done(function() {
                  var t;
                  ve.remove(e, 'fxshow');
                  for (t in p) Z.style(e, t, p[t]);
                });
              for (r in p)
                (s = q(d ? g[r] : 0, r, f)),
                  r in g ||
                    ((g[r] = s.start),
                    d &&
                      ((s.end = s.start),
                      (s.start = 'width' === r || 'height' === r ? 1 : 0)));
            }
          }
          function L(e, t) {
            var n, r, o, i, s;
            for (n in e)
              if (
                ((r = Z.camelCase(n)),
                (o = t[r]),
                (i = e[n]),
                Z.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                n !== r && ((e[r] = i), delete e[n]),
                (s = Z.cssHooks[r]),
                s && 'expand' in s)
              ) {
                (i = s.expand(i)), delete e[r];
                for (n in i) n in e || ((e[n] = i[n]), (t[n] = o));
              } else t[r] = o;
          }
          function H(e, t, n) {
            var r,
              o,
              i = 0,
              s = tt.length,
              a = Z.Deferred().always(function() {
                delete u.elem;
              }),
              u = function() {
                if (o) return !1;
                for (
                  var t = Je || A(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = n / l.duration || 0,
                    i = 1 - r,
                    s = 0,
                    u = l.tweens.length;
                  u > s;
                  s++
                )
                  l.tweens[s].run(i);
                return (
                  a.notifyWith(e, [l, i, n]),
                  1 > i && u ? n : (a.resolveWith(e, [l]), !1)
                );
              },
              l = a.promise({
                elem: e,
                props: Z.extend({}, t),
                opts: Z.extend(!0, { specialEasing: {} }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Je || A(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                  var r = Z.Tween(
                    e,
                    l.opts,
                    t,
                    n,
                    l.opts.specialEasing[t] || l.opts.easing
                  );
                  return l.tweens.push(r), r;
                },
                stop: function(t) {
                  var n = 0,
                    r = t ? l.tweens.length : 0;
                  if (o) return this;
                  for (o = !0; r > n; n++) l.tweens[n].run(1);
                  return (
                    t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                  );
                }
              }),
              c = l.props;
            for (L(c, l.opts.specialEasing); s > i; i++)
              if ((r = tt[i].call(l, e, c, l.opts))) return r;
            return (
              Z.map(c, q, l),
              Z.isFunction(l.opts.start) && l.opts.start.call(e, l),
              Z.fx.timer(
                Z.extend(u, { elem: e, anim: l, queue: l.opts.queue })
              ),
              l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always)
            );
          }
          function F(e) {
            return function(t, n) {
              'string' != typeof t && ((n = t), (t = '*'));
              var r,
                o = 0,
                i = t.toLowerCase().match(he) || [];
              if (Z.isFunction(n))
                for (; (r = i[o++]); )
                  '+' === r[0]
                    ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function R(e, t, n, r) {
            function o(a) {
              var u;
              return (
                (i[a] = !0),
                Z.each(e[a] || [], function(e, a) {
                  var l = a(t, n, r);
                  return 'string' != typeof l || s || i[l]
                    ? s
                      ? !(u = l)
                      : void 0
                    : (t.dataTypes.unshift(l), o(l), !1);
                }),
                u
              );
            }
            var i = {},
              s = e === xt;
            return o(t.dataTypes[0]) || (!i['*'] && o('*'));
          }
          function P(e, t) {
            var n,
              r,
              o = Z.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && Z.extend(!0, e, r), e;
          }
          function I(e, t, n) {
            for (
              var r, o, i, s, a = e.contents, u = e.dataTypes;
              '*' === u[0];

            )
              u.shift(),
                void 0 === r &&
                  (r = e.mimeType || t.getResponseHeader('Content-Type'));
            if (r)
              for (o in a)
                if (a[o] && a[o].test(r)) {
                  u.unshift(o);
                  break;
                }
            if (u[0] in n) i = u[0];
            else {
              for (o in n) {
                if (!u[0] || e.converters[o + ' ' + u[0]]) {
                  i = o;
                  break;
                }
                s || (s = o);
              }
              i = i || s;
            }
            return i ? (i !== u[0] && u.unshift(i), n[i]) : void 0;
          }
          function M(e, t, n, r) {
            var o,
              i,
              s,
              a,
              u,
              l = {},
              c = e.dataTypes.slice();
            if (c[1])
              for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
            for (i = c.shift(); i; )
              if (
                (e.responseFields[i] && (n[e.responseFields[i]] = t),
                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                (u = i),
                (i = c.shift()))
              )
                if ('*' === i) i = u;
                else if ('*' !== u && u !== i) {
                  if (((s = l[u + ' ' + i] || l['* ' + i]), !s))
                    for (o in l)
                      if (
                        ((a = o.split(' ')),
                        a[1] === i && (s = l[u + ' ' + a[0]] || l['* ' + a[0]]))
                      ) {
                        s === !0
                          ? (s = l[o])
                          : l[o] !== !0 && ((i = a[0]), c.unshift(a[1]));
                        break;
                      }
                  if (s !== !0)
                    if (s && e['throws']) t = s(t);
                    else
                      try {
                        t = s(t);
                      } catch (f) {
                        return {
                          state: 'parsererror',
                          error: s ? f : 'No conversion from ' + u + ' to ' + i
                        };
                      }
                }
            return { state: 'success', data: t };
          }
          function $(e, t, n, r) {
            var o;
            if (Z.isArray(t))
              Z.each(t, function(t, o) {
                n || jt.test(e)
                  ? r(e, o)
                  : $(e + '[' + ('object' == typeof o ? t : '') + ']', o, n, r);
              });
            else if (n || 'object' !== Z.type(t)) r(e, t);
            else for (o in t) $(e + '[' + o + ']', t[o], n, r);
          }
          function W(e) {
            return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
          }
          var B = [],
            _ = B.slice,
            U = B.concat,
            z = B.push,
            X = B.indexOf,
            V = {},
            Y = V.toString,
            G = V.hasOwnProperty,
            J = {},
            Q = e.document,
            K = '2.1.4',
            Z = function(e, t) {
              return new Z.fn.init(e, t);
            },
            ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            te = /^-ms-/,
            ne = /-([\da-z])/gi,
            re = function(e, t) {
              return t.toUpperCase();
            };
          (Z.fn = Z.prototype = {
            jquery: K,
            constructor: Z,
            selector: '',
            length: 0,
            toArray: function() {
              return _.call(this);
            },
            get: function(e) {
              return null != e
                ? 0 > e
                  ? this[e + this.length]
                  : this[e]
                : _.call(this);
            },
            pushStack: function(e) {
              var t = Z.merge(this.constructor(), e);
              return (t.prevObject = this), (t.context = this.context), t;
            },
            each: function(e, t) {
              return Z.each(this, e, t);
            },
            map: function(e) {
              return this.pushStack(
                Z.map(this, function(t, n) {
                  return e.call(t, n, t);
                })
              );
            },
            slice: function() {
              return this.pushStack(_.apply(this, arguments));
            },
            first: function() {
              return this.eq(0);
            },
            last: function() {
              return this.eq(-1);
            },
            eq: function(e) {
              var t = this.length,
                n = +e + (0 > e ? t : 0);
              return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
            },
            end: function() {
              return this.prevObject || this.constructor(null);
            },
            push: z,
            sort: B.sort,
            splice: B.splice
          }),
            (Z.extend = Z.fn.extend = function() {
              var e,
                t,
                n,
                r,
                o,
                i,
                s = arguments[0] || {},
                a = 1,
                u = arguments.length,
                l = !1;
              for (
                'boolean' == typeof s &&
                  ((l = s), (s = arguments[a] || {}), a++),
                  'object' == typeof s || Z.isFunction(s) || (s = {}),
                  a === u && ((s = this), a--);
                u > a;
                a++
              )
                if (null != (e = arguments[a]))
                  for (t in e)
                    (n = s[t]),
                      (r = e[t]),
                      s !== r &&
                        (l && r && (Z.isPlainObject(r) || (o = Z.isArray(r)))
                          ? (o
                              ? ((o = !1), (i = n && Z.isArray(n) ? n : []))
                              : (i = n && Z.isPlainObject(n) ? n : {}),
                            (s[t] = Z.extend(l, i, r)))
                          : void 0 !== r && (s[t] = r));
              return s;
            }),
            Z.extend({
              expando: 'jQuery' + (K + Math.random()).replace(/\D/g, ''),
              isReady: !0,
              error: function(e) {
                throw new Error(e);
              },
              noop: function() {},
              isFunction: function(e) {
                return 'function' === Z.type(e);
              },
              isArray: Array.isArray,
              isWindow: function(e) {
                return null != e && e === e.window;
              },
              isNumeric: function(e) {
                return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0;
              },
              isPlainObject: function(e) {
                return 'object' !== Z.type(e) || e.nodeType || Z.isWindow(e)
                  ? !1
                  : e.constructor &&
                    !G.call(e.constructor.prototype, 'isPrototypeOf')
                  ? !1
                  : !0;
              },
              isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              type: function(e) {
                return null == e
                  ? e + ''
                  : 'object' == typeof e || 'function' == typeof e
                  ? V[Y.call(e)] || 'object'
                  : typeof e;
              },
              globalEval: function(e) {
                var t,
                  n = eval;
                (e = Z.trim(e)),
                  e &&
                    (1 === e.indexOf('use strict')
                      ? ((t = Q.createElement('script')),
                        (t.text = e),
                        Q.head.appendChild(t).parentNode.removeChild(t))
                      : n(e));
              },
              camelCase: function(e) {
                return e.replace(te, 'ms-').replace(ne, re);
              },
              nodeName: function(e, t) {
                return (
                  e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                );
              },
              each: function(e, t, r) {
                var o,
                  i = 0,
                  s = e.length,
                  a = n(e);
                if (r) {
                  if (a)
                    for (; s > i && ((o = t.apply(e[i], r)), o !== !1); i++);
                  else
                    for (i in e) if (((o = t.apply(e[i], r)), o === !1)) break;
                } else if (a)
                  for (; s > i && ((o = t.call(e[i], i, e[i])), o !== !1); i++);
                else
                  for (i in e)
                    if (((o = t.call(e[i], i, e[i])), o === !1)) break;
                return e;
              },
              trim: function(e) {
                return null == e ? '' : (e + '').replace(ee, '');
              },
              makeArray: function(e, t) {
                var r = t || [];
                return (
                  null != e &&
                    (n(Object(e))
                      ? Z.merge(r, 'string' == typeof e ? [e] : e)
                      : z.call(r, e)),
                  r
                );
              },
              inArray: function(e, t, n) {
                return null == t ? -1 : X.call(t, e, n);
              },
              merge: function(e, t) {
                for (var n = +t.length, r = 0, o = e.length; n > r; r++)
                  e[o++] = t[r];
                return (e.length = o), e;
              },
              grep: function(e, t, n) {
                for (var r, o = [], i = 0, s = e.length, a = !n; s > i; i++)
                  (r = !t(e[i], i)), r !== a && o.push(e[i]);
                return o;
              },
              map: function(e, t, r) {
                var o,
                  i = 0,
                  s = e.length,
                  a = n(e),
                  u = [];
                if (a)
                  for (; s > i; i++)
                    (o = t(e[i], i, r)), null != o && u.push(o);
                else for (i in e) (o = t(e[i], i, r)), null != o && u.push(o);
                return U.apply([], u);
              },
              guid: 1,
              proxy: function(e, t) {
                var n, r, o;
                return (
                  'string' == typeof t && ((n = e[t]), (t = e), (e = n)),
                  Z.isFunction(e)
                    ? ((r = _.call(arguments, 2)),
                      (o = function() {
                        return e.apply(t || this, r.concat(_.call(arguments)));
                      }),
                      (o.guid = e.guid = e.guid || Z.guid++),
                      o)
                    : void 0
                );
              },
              now: Date.now,
              support: J
            }),
            Z.each(
              'Boolean Number String Function Array Date RegExp Object Error'.split(
                ' '
              ),
              function(e, t) {
                V['[object ' + t + ']'] = t.toLowerCase();
              }
            );
          var oe = (function(e) {
            function t(e, t, n, r) {
              var o, i, s, a, u, l, f, h, d, g;
              if (
                ((t ? t.ownerDocument || t : $) !== O && q(t),
                (t = t || O),
                (n = n || []),
                (a = t.nodeType),
                'string' != typeof e || !e || (1 !== a && 9 !== a && 11 !== a))
              )
                return n;
              if (!r && H) {
                if (11 !== a && (o = ye.exec(e)))
                  if ((s = o[1])) {
                    if (9 === a) {
                      if (((i = t.getElementById(s)), !i || !i.parentNode))
                        return n;
                      if (i.id === s) return n.push(i), n;
                    } else if (
                      t.ownerDocument &&
                      (i = t.ownerDocument.getElementById(s)) &&
                      I(t, i) &&
                      i.id === s
                    )
                      return n.push(i), n;
                  } else {
                    if (o[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = o[3]) && w.getElementsByClassName)
                      return K.apply(n, t.getElementsByClassName(s)), n;
                  }
                if (w.qsa && (!F || !F.test(e))) {
                  if (
                    ((h = f = M),
                    (d = t),
                    (g = 1 !== a && e),
                    1 === a && 'object' !== t.nodeName.toLowerCase())
                  ) {
                    for (
                      l = k(e),
                        (f = t.getAttribute('id'))
                          ? (h = f.replace(be, '\\$&'))
                          : t.setAttribute('id', h),
                        h = "[id='" + h + "'] ",
                        u = l.length;
                      u--;

                    )
                      l[u] = h + p(l[u]);
                    (d = (xe.test(e) && c(t.parentNode)) || t),
                      (g = l.join(','));
                  }
                  if (g)
                    try {
                      return K.apply(n, d.querySelectorAll(g)), n;
                    } catch (m) {
                    } finally {
                      f || t.removeAttribute('id');
                    }
                }
              }
              return E(e.replace(ue, '$1'), t, n, r);
            }
            function n() {
              function e(n, r) {
                return (
                  t.push(n + ' ') > T.cacheLength && delete e[t.shift()],
                  (e[n + ' '] = r)
                );
              }
              var t = [];
              return e;
            }
            function r(e) {
              return (e[M] = !0), e;
            }
            function o(e) {
              var t = O.createElement('div');
              try {
                return !!e(t);
              } catch (n) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function i(e, t) {
              for (var n = e.split('|'), r = e.length; r--; )
                T.attrHandle[n[r]] = t;
            }
            function s(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  (~t.sourceIndex || V) - (~e.sourceIndex || V);
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function a(e) {
              return function(t) {
                var n = t.nodeName.toLowerCase();
                return 'input' === n && t.type === e;
              };
            }
            function u(e) {
              return function(t) {
                var n = t.nodeName.toLowerCase();
                return ('input' === n || 'button' === n) && t.type === e;
              };
            }
            function l(e) {
              return r(function(t) {
                return (
                  (t = +t),
                  r(function(n, r) {
                    for (var o, i = e([], n.length, t), s = i.length; s--; )
                      n[(o = i[s])] && (n[o] = !(r[o] = n[o]));
                  })
                );
              });
            }
            function c(e) {
              return e && 'undefined' != typeof e.getElementsByTagName && e;
            }
            function f() {}
            function p(e) {
              for (var t = 0, n = e.length, r = ''; n > t; t++) r += e[t].value;
              return r;
            }
            function h(e, t, n) {
              var r = t.dir,
                o = n && 'parentNode' === r,
                i = B++;
              return t.first
                ? function(t, n, i) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || o) return e(t, n, i);
                  }
                : function(t, n, s) {
                    var a,
                      u,
                      l = [W, i];
                    if (s) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || o) {
                          if (
                            ((u = t[M] || (t[M] = {})),
                            (a = u[r]) && a[0] === W && a[1] === i)
                          )
                            return (l[2] = a[2]);
                          if (((u[r] = l), (l[2] = e(t, n, s)))) return !0;
                        }
                  };
            }
            function d(e) {
              return e.length > 1
                ? function(t, n, r) {
                    for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function g(e, n, r) {
              for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);
              return r;
            }
            function m(e, t, n, r, o) {
              for (
                var i, s = [], a = 0, u = e.length, l = null != t;
                u > a;
                a++
              )
                (i = e[a]) && (!n || n(i, r, o)) && (s.push(i), l && t.push(a));
              return s;
            }
            function v(e, t, n, o, i, s) {
              return (
                o && !o[M] && (o = v(o)),
                i && !i[M] && (i = v(i, s)),
                r(function(r, s, a, u) {
                  var l,
                    c,
                    f,
                    p = [],
                    h = [],
                    d = s.length,
                    v = r || g(t || '*', a.nodeType ? [a] : a, []),
                    y = !e || (!r && t) ? v : m(v, p, e, a, u),
                    x = n ? (i || (r ? e : d || o) ? [] : s) : y;
                  if ((n && n(y, x, a, u), o))
                    for (l = m(x, h), o(l, [], a, u), c = l.length; c--; )
                      (f = l[c]) && (x[h[c]] = !(y[h[c]] = f));
                  if (r) {
                    if (i || e) {
                      if (i) {
                        for (l = [], c = x.length; c--; )
                          (f = x[c]) && l.push((y[c] = f));
                        i(null, (x = []), l, u);
                      }
                      for (c = x.length; c--; )
                        (f = x[c]) &&
                          (l = i ? ee(r, f) : p[c]) > -1 &&
                          (r[l] = !(s[l] = f));
                    }
                  } else (x = m(x === s ? x.splice(d, x.length) : x)), i ? i(null, s, x, u) : K.apply(s, x);
                })
              );
            }
            function y(e) {
              for (
                var t,
                  n,
                  r,
                  o = e.length,
                  i = T.relative[e[0].type],
                  s = i || T.relative[' '],
                  a = i ? 1 : 0,
                  u = h(
                    function(e) {
                      return e === t;
                    },
                    s,
                    !0
                  ),
                  l = h(
                    function(e) {
                      return ee(t, e) > -1;
                    },
                    s,
                    !0
                  ),
                  c = [
                    function(e, n, r) {
                      var o =
                        (!i && (r || n !== S)) ||
                        ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                      return (t = null), o;
                    }
                  ];
                o > a;
                a++
              )
                if ((n = T.relative[e[a].type])) c = [h(d(c), n)];
                else {
                  if (
                    ((n = T.filter[e[a].type].apply(null, e[a].matches)), n[M])
                  ) {
                    for (r = ++a; o > r && !T.relative[e[r].type]; r++);
                    return v(
                      a > 1 && d(c),
                      a > 1 &&
                        p(
                          e
                            .slice(0, a - 1)
                            .concat({ value: ' ' === e[a - 2].type ? '*' : '' })
                        ).replace(ue, '$1'),
                      n,
                      r > a && y(e.slice(a, r)),
                      o > r && y((e = e.slice(r))),
                      o > r && p(e)
                    );
                  }
                  c.push(n);
                }
              return d(c);
            }
            function x(e, n) {
              var o = n.length > 0,
                i = e.length > 0,
                s = function(r, s, a, u, l) {
                  var c,
                    f,
                    p,
                    h = 0,
                    d = '0',
                    g = r && [],
                    v = [],
                    y = S,
                    x = r || (i && T.find.TAG('*', l)),
                    b = (W += null == y ? 1 : Math.random() || 0.1),
                    w = x.length;
                  for (
                    l && (S = s !== O && s);
                    d !== w && null != (c = x[d]);
                    d++
                  ) {
                    if (i && c) {
                      for (f = 0; (p = e[f++]); )
                        if (p(c, s, a)) {
                          u.push(c);
                          break;
                        }
                      l && (W = b);
                    }
                    o && ((c = !p && c) && h--, r && g.push(c));
                  }
                  if (((h += d), o && d !== h)) {
                    for (f = 0; (p = n[f++]); ) p(g, v, s, a);
                    if (r) {
                      if (h > 0)
                        for (; d--; ) g[d] || v[d] || (v[d] = J.call(u));
                      v = m(v);
                    }
                    K.apply(u, v),
                      l &&
                        !r &&
                        v.length > 0 &&
                        h + n.length > 1 &&
                        t.uniqueSort(u);
                  }
                  return l && ((W = b), (S = y)), g;
                };
              return o ? r(s) : s;
            }
            var b,
              w,
              T,
              C,
              j,
              k,
              N,
              E,
              S,
              A,
              D,
              q,
              O,
              L,
              H,
              F,
              R,
              P,
              I,
              M = 'sizzle' + 1 * new Date(),
              $ = e.document,
              W = 0,
              B = 0,
              _ = n(),
              U = n(),
              z = n(),
              X = function(e, t) {
                return e === t && (D = !0), 0;
              },
              V = 1 << 31,
              Y = {}.hasOwnProperty,
              G = [],
              J = G.pop,
              Q = G.push,
              K = G.push,
              Z = G.slice,
              ee = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              te =
                'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
              ne = '[\\x20\\t\\r\\n\\f]',
              re = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
              oe = re.replace('w', 'w#'),
              ie =
                '\\[' +
                ne +
                '*(' +
                re +
                ')(?:' +
                ne +
                '*([*^$|!~]?=)' +
                ne +
                '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                oe +
                '))|)' +
                ne +
                '*\\]',
              se =
                ':(' +
                re +
                ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                ie +
                ')*)|.*)\\)|)',
              ae = new RegExp(ne + '+', 'g'),
              ue = new RegExp(
                '^' + ne + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ne + '+$',
                'g'
              ),
              le = new RegExp('^' + ne + '*,' + ne + '*'),
              ce = new RegExp('^' + ne + '*([>+~]|' + ne + ')' + ne + '*'),
              fe = new RegExp('=' + ne + '*([^\\]\'"]*?)' + ne + '*\\]', 'g'),
              pe = new RegExp(se),
              he = new RegExp('^' + oe + '$'),
              de = {
                ID: new RegExp('^#(' + re + ')'),
                CLASS: new RegExp('^\\.(' + re + ')'),
                TAG: new RegExp('^(' + re.replace('w', 'w*') + ')'),
                ATTR: new RegExp('^' + ie),
                PSEUDO: new RegExp('^' + se),
                CHILD: new RegExp(
                  '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                    ne +
                    '*(even|odd|(([+-]|)(\\d*)n|)' +
                    ne +
                    '*(?:([+-]|)' +
                    ne +
                    '*(\\d+)|))' +
                    ne +
                    '*\\)|)',
                  'i'
                ),
                bool: new RegExp('^(?:' + te + ')$', 'i'),
                needsContext: new RegExp(
                  '^' +
                    ne +
                    '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                    ne +
                    '*((?:-\\d)?\\d*)' +
                    ne +
                    '*\\)|)(?=[^-]|$)',
                  'i'
                )
              },
              ge = /^(?:input|select|textarea|button)$/i,
              me = /^h\d$/i,
              ve = /^[^{]+\{\s*\[native \w/,
              ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              xe = /[+~]/,
              be = /'|\\/g,
              we = new RegExp(
                '\\\\([\\da-f]{1,6}' + ne + '?|(' + ne + ')|.)',
                'ig'
              ),
              Te = function(e, t, n) {
                var r = '0x' + t - 65536;
                return r !== r || n
                  ? t
                  : 0 > r
                  ? String.fromCharCode(r + 65536)
                  : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
              },
              Ce = function() {
                q();
              };
            try {
              K.apply((G = Z.call($.childNodes)), $.childNodes),
                G[$.childNodes.length].nodeType;
            } catch (je) {
              K = {
                apply: G.length
                  ? function(e, t) {
                      Q.apply(e, Z.call(t));
                    }
                  : function(e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    }
              };
            }
            (w = t.support = {}),
              (j = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? 'HTML' !== t.nodeName : !1;
              }),
              (q = t.setDocument = function(e) {
                var t,
                  n,
                  r = e ? e.ownerDocument || e : $;
                return r !== O && 9 === r.nodeType && r.documentElement
                  ? ((O = r),
                    (L = r.documentElement),
                    (n = r.defaultView),
                    n &&
                      n !== n.top &&
                      (n.addEventListener
                        ? n.addEventListener('unload', Ce, !1)
                        : n.attachEvent && n.attachEvent('onunload', Ce)),
                    (H = !j(r)),
                    (w.attributes = o(function(e) {
                      return (e.className = 'i'), !e.getAttribute('className');
                    })),
                    (w.getElementsByTagName = o(function(e) {
                      return (
                        e.appendChild(r.createComment('')),
                        !e.getElementsByTagName('*').length
                      );
                    })),
                    (w.getElementsByClassName = ve.test(
                      r.getElementsByClassName
                    )),
                    (w.getById = o(function(e) {
                      return (
                        (L.appendChild(e).id = M),
                        !r.getElementsByName || !r.getElementsByName(M).length
                      );
                    })),
                    w.getById
                      ? ((T.find.ID = function(e, t) {
                          if ('undefined' != typeof t.getElementById && H) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : [];
                          }
                        }),
                        (T.filter.ID = function(e) {
                          var t = e.replace(we, Te);
                          return function(e) {
                            return e.getAttribute('id') === t;
                          };
                        }))
                      : (delete T.find.ID,
                        (T.filter.ID = function(e) {
                          var t = e.replace(we, Te);
                          return function(e) {
                            var n =
                              'undefined' != typeof e.getAttributeNode &&
                              e.getAttributeNode('id');
                            return n && n.value === t;
                          };
                        })),
                    (T.find.TAG = w.getElementsByTagName
                      ? function(e, t) {
                          return 'undefined' != typeof t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : w.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function(e, t) {
                          var n,
                            r = [],
                            o = 0,
                            i = t.getElementsByTagName(e);
                          if ('*' === e) {
                            for (; (n = i[o++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return i;
                        }),
                    (T.find.CLASS =
                      w.getElementsByClassName &&
                      function(e, t) {
                        return H ? t.getElementsByClassName(e) : void 0;
                      }),
                    (R = []),
                    (F = []),
                    (w.qsa = ve.test(r.querySelectorAll)) &&
                      (o(function(e) {
                        (L.appendChild(e).innerHTML =
                          "<a id='" +
                          M +
                          "'></a><select id='" +
                          M +
                          "-\f]' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            F.push('[*^$]=' + ne + '*(?:\'\'|"")'),
                          e.querySelectorAll('[selected]').length ||
                            F.push('\\[' + ne + '*(?:value|' + te + ')'),
                          e.querySelectorAll('[id~=' + M + '-]').length ||
                            F.push('~='),
                          e.querySelectorAll(':checked').length ||
                            F.push(':checked'),
                          e.querySelectorAll('a#' + M + '+*').length ||
                            F.push('.#.+[+~]');
                      }),
                      o(function(e) {
                        var t = r.createElement('input');
                        t.setAttribute('type', 'hidden'),
                          e.appendChild(t).setAttribute('name', 'D'),
                          e.querySelectorAll('[name=d]').length &&
                            F.push('name' + ne + '*[*^$|!~]?='),
                          e.querySelectorAll(':enabled').length ||
                            F.push(':enabled', ':disabled'),
                          e.querySelectorAll('*,:x'),
                          F.push(',.*:');
                      })),
                    (w.matchesSelector = ve.test(
                      (P =
                        L.matches ||
                        L.webkitMatchesSelector ||
                        L.mozMatchesSelector ||
                        L.oMatchesSelector ||
                        L.msMatchesSelector)
                    )) &&
                      o(function(e) {
                        (w.disconnectedMatch = P.call(e, 'div')),
                          P.call(e, "[s!='']:x"),
                          R.push('!=', se);
                      }),
                    (F = F.length && new RegExp(F.join('|'))),
                    (R = R.length && new RegExp(R.join('|'))),
                    (t = ve.test(L.compareDocumentPosition)),
                    (I =
                      t || ve.test(L.contains)
                        ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              r = t && t.parentNode;
                            return (
                              e === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(n.contains
                                  ? n.contains(r)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(r))
                              )
                            );
                          }
                        : function(e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (X = t
                      ? function(e, t) {
                          if (e === t) return (D = !0), 0;
                          var n =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return n
                            ? n
                            : ((n =
                                (e.ownerDocument || e) ===
                                (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1),
                              1 & n ||
                              (!w.sortDetached &&
                                t.compareDocumentPosition(e) === n)
                                ? e === r || (e.ownerDocument === $ && I($, e))
                                  ? -1
                                  : t === r ||
                                    (t.ownerDocument === $ && I($, t))
                                  ? 1
                                  : A
                                  ? ee(A, e) - ee(A, t)
                                  : 0
                                : 4 & n
                                ? -1
                                : 1);
                        }
                      : function(e, t) {
                          if (e === t) return (D = !0), 0;
                          var n,
                            o = 0,
                            i = e.parentNode,
                            a = t.parentNode,
                            u = [e],
                            l = [t];
                          if (!i || !a)
                            return e === r
                              ? -1
                              : t === r
                              ? 1
                              : i
                              ? -1
                              : a
                              ? 1
                              : A
                              ? ee(A, e) - ee(A, t)
                              : 0;
                          if (i === a) return s(e, t);
                          for (n = e; (n = n.parentNode); ) u.unshift(n);
                          for (n = t; (n = n.parentNode); ) l.unshift(n);
                          for (; u[o] === l[o]; ) o++;
                          return o
                            ? s(u[o], l[o])
                            : u[o] === $
                            ? -1
                            : l[o] === $
                            ? 1
                            : 0;
                        }),
                    r)
                  : O;
              }),
              (t.matches = function(e, n) {
                return t(e, null, null, n);
              }),
              (t.matchesSelector = function(e, n) {
                if (
                  ((e.ownerDocument || e) !== O && q(e),
                  (n = n.replace(fe, "='$1']")),
                  w.matchesSelector &&
                    H &&
                    (!R || !R.test(n)) &&
                    (!F || !F.test(n)))
                )
                  try {
                    var r = P.call(e, n);
                    if (
                      r ||
                      w.disconnectedMatch ||
                      (e.document && 11 !== e.document.nodeType)
                    )
                      return r;
                  } catch (o) {}
                return t(n, O, null, [e]).length > 0;
              }),
              (t.contains = function(e, t) {
                return (e.ownerDocument || e) !== O && q(e), I(e, t);
              }),
              (t.attr = function(e, t) {
                (e.ownerDocument || e) !== O && q(e);
                var n = T.attrHandle[t.toLowerCase()],
                  r =
                    n && Y.call(T.attrHandle, t.toLowerCase())
                      ? n(e, t, !H)
                      : void 0;
                return void 0 !== r
                  ? r
                  : w.attributes || !H
                  ? e.getAttribute(t)
                  : (r = e.getAttributeNode(t)) && r.specified
                  ? r.value
                  : null;
              }),
              (t.error = function(e) {
                throw new Error('Syntax error, unrecognized expression: ' + e);
              }),
              (t.uniqueSort = function(e) {
                var t,
                  n = [],
                  r = 0,
                  o = 0;
                if (
                  ((D = !w.detectDuplicates),
                  (A = !w.sortStable && e.slice(0)),
                  e.sort(X),
                  D)
                ) {
                  for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
                  for (; r--; ) e.splice(n[r], 1);
                }
                return (A = null), e;
              }),
              (C = t.getText = function(e) {
                var t,
                  n = '',
                  r = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ('string' == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += C(t);
                return n;
              }),
              (T = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: de,
                attrHandle: {},
                find: {},
                relative: {
                  '>': { dir: 'parentNode', first: !0 },
                  ' ': { dir: 'parentNode' },
                  '+': { dir: 'previousSibling', first: !0 },
                  '~': { dir: 'previousSibling' }
                },
                preFilter: {
                  ATTR: function(e) {
                    return (
                      (e[1] = e[1].replace(we, Te)),
                      (e[3] = (e[3] || e[4] || e[5] || '').replace(we, Te)),
                      '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function(e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      'nth' === e[1].slice(0, 3)
                        ? (e[3] || t.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ('even' === e[3] || 'odd' === e[3]))),
                          (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                        : e[3] && t.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function(e) {
                    var t,
                      n = !e[6] && e[2];
                    return de.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || '')
                          : n &&
                            pe.test(n) &&
                            (t = k(n, !0)) &&
                            (t = n.indexOf(')', n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  }
                },
                filter: {
                  TAG: function(e) {
                    var t = e.replace(we, Te).toLowerCase();
                    return '*' === e
                      ? function() {
                          return !0;
                        }
                      : function(e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function(e) {
                    var t = _[e + ' '];
                    return (
                      t ||
                      ((t = new RegExp(
                        '(^|' + ne + ')' + e + '(' + ne + '|$)'
                      )) &&
                        _(e, function(e) {
                          return t.test(
                            ('string' == typeof e.className && e.className) ||
                              ('undefined' != typeof e.getAttribute &&
                                e.getAttribute('class')) ||
                              ''
                          );
                        }))
                    );
                  },
                  ATTR: function(e, n, r) {
                    return function(o) {
                      var i = t.attr(o, e);
                      return null == i
                        ? '!=' === n
                        : n
                        ? ((i += ''),
                          '=' === n
                            ? i === r
                            : '!=' === n
                            ? i !== r
                            : '^=' === n
                            ? r && 0 === i.indexOf(r)
                            : '*=' === n
                            ? r && i.indexOf(r) > -1
                            : '$=' === n
                            ? r && i.slice(-r.length) === r
                            : '~=' === n
                            ? (' ' + i.replace(ae, ' ') + ' ').indexOf(r) > -1
                            : '|=' === n
                            ? i === r || i.slice(0, r.length + 1) === r + '-'
                            : !1)
                        : !0;
                    };
                  },
                  CHILD: function(e, t, n, r, o) {
                    var i = 'nth' !== e.slice(0, 3),
                      s = 'last' !== e.slice(-4),
                      a = 'of-type' === t;
                    return 1 === r && 0 === o
                      ? function(e) {
                          return !!e.parentNode;
                        }
                      : function(t, n, u) {
                          var l,
                            c,
                            f,
                            p,
                            h,
                            d,
                            g = i !== s ? 'nextSibling' : 'previousSibling',
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !u && !a;
                          if (m) {
                            if (i) {
                              for (; g; ) {
                                for (f = t; (f = f[g]); )
                                  if (
                                    a
                                      ? f.nodeName.toLowerCase() === v
                                      : 1 === f.nodeType
                                  )
                                    return !1;
                                d = g = 'only' === e && !d && 'nextSibling';
                              }
                              return !0;
                            }
                            if (
                              ((d = [s ? m.firstChild : m.lastChild]), s && y)
                            ) {
                              for (
                                c = m[M] || (m[M] = {}),
                                  l = c[e] || [],
                                  h = l[0] === W && l[1],
                                  p = l[0] === W && l[2],
                                  f = h && m.childNodes[h];
                                (f =
                                  (++h && f && f[g]) || (p = h = 0) || d.pop());

                              )
                                if (1 === f.nodeType && ++p && f === t) {
                                  c[e] = [W, h, p];
                                  break;
                                }
                            } else if (
                              y &&
                              (l = (t[M] || (t[M] = {}))[e]) &&
                              l[0] === W
                            )
                              p = l[1];
                            else
                              for (
                                ;
                                (f =
                                  (++h && f && f[g]) ||
                                  (p = h = 0) ||
                                  d.pop()) &&
                                ((a
                                  ? f.nodeName.toLowerCase() !== v
                                  : 1 !== f.nodeType) ||
                                  !++p ||
                                  (y && ((f[M] || (f[M] = {}))[e] = [W, p]),
                                  f !== t));

                              );
                            return (
                              (p -= o), p === r || (p % r === 0 && p / r >= 0)
                            );
                          }
                        };
                  },
                  PSEUDO: function(e, n) {
                    var o,
                      i =
                        T.pseudos[e] ||
                        T.setFilters[e.toLowerCase()] ||
                        t.error('unsupported pseudo: ' + e);
                    return i[M]
                      ? i(n)
                      : i.length > 1
                      ? ((o = [e, e, '', n]),
                        T.setFilters.hasOwnProperty(e.toLowerCase())
                          ? r(function(e, t) {
                              for (var r, o = i(e, n), s = o.length; s--; )
                                (r = ee(e, o[s])), (e[r] = !(t[r] = o[s]));
                            })
                          : function(e) {
                              return i(e, 0, o);
                            })
                      : i;
                  }
                },
                pseudos: {
                  not: r(function(e) {
                    var t = [],
                      n = [],
                      o = N(e.replace(ue, '$1'));
                    return o[M]
                      ? r(function(e, t, n, r) {
                          for (
                            var i, s = o(e, null, r, []), a = e.length;
                            a--;

                          )
                            (i = s[a]) && (e[a] = !(t[a] = i));
                        })
                      : function(e, r, i) {
                          return (
                            (t[0] = e),
                            o(t, null, i, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: r(function(e) {
                    return function(n) {
                      return t(e, n).length > 0;
                    };
                  }),
                  contains: r(function(e) {
                    return (
                      (e = e.replace(we, Te)),
                      function(t) {
                        return (
                          (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        );
                      }
                    );
                  }),
                  lang: r(function(e) {
                    return (
                      he.test(e || '') || t.error('unsupported lang: ' + e),
                      (e = e.replace(we, Te).toLowerCase()),
                      function(t) {
                        var n;
                        do
                          if (
                            (n = H
                              ? t.lang
                              : t.getAttribute('xml:lang') ||
                                t.getAttribute('lang'))
                          )
                            return (
                              (n = n.toLowerCase()),
                              n === e || 0 === n.indexOf(e + '-')
                            );
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function(e) {
                    return e === L;
                  },
                  focus: function(e) {
                    return (
                      e === O.activeElement &&
                      (!O.hasFocus || O.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: function(e) {
                    return e.disabled === !1;
                  },
                  disabled: function(e) {
                    return e.disabled === !0;
                  },
                  checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ('input' === t && !!e.checked) ||
                      ('option' === t && !!e.selected)
                    );
                  },
                  selected: function(e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      e.selected === !0
                    );
                  },
                  empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function(e) {
                    return !T.pseudos.empty(e);
                  },
                  header: function(e) {
                    return me.test(e.nodeName);
                  },
                  input: function(e) {
                    return ge.test(e.nodeName);
                  },
                  button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ('input' === t && 'button' === e.type) || 'button' === t
                    );
                  },
                  text: function(e) {
                    var t;
                    return (
                      'input' === e.nodeName.toLowerCase() &&
                      'text' === e.type &&
                      (null == (t = e.getAttribute('type')) ||
                        'text' === t.toLowerCase())
                    );
                  },
                  first: l(function() {
                    return [0];
                  }),
                  last: l(function(e, t) {
                    return [t - 1];
                  }),
                  eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n];
                  }),
                  even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e;
                  }),
                  odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e;
                  }),
                  lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                  }),
                  gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  })
                }
              }),
              (T.pseudos.nth = T.pseudos.eq);
            for (b in {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
            })
              T.pseudos[b] = a(b);
            for (b in { submit: !0, reset: !0 }) T.pseudos[b] = u(b);
            return (
              (f.prototype = T.filters = T.pseudos),
              (T.setFilters = new f()),
              (k = t.tokenize = function(e, n) {
                var r,
                  o,
                  i,
                  s,
                  a,
                  u,
                  l,
                  c = U[e + ' '];
                if (c) return n ? 0 : c.slice(0);
                for (a = e, u = [], l = T.preFilter; a; ) {
                  (!r || (o = le.exec(a))) &&
                    (o && (a = a.slice(o[0].length) || a), u.push((i = []))),
                    (r = !1),
                    (o = ce.exec(a)) &&
                      ((r = o.shift()),
                      i.push({ value: r, type: o[0].replace(ue, ' ') }),
                      (a = a.slice(r.length)));
                  for (s in T.filter)
                    !(o = de[s].exec(a)) ||
                      (l[s] && !(o = l[s](o))) ||
                      ((r = o.shift()),
                      i.push({ value: r, type: s, matches: o }),
                      (a = a.slice(r.length)));
                  if (!r) break;
                }
                return n ? a.length : a ? t.error(e) : U(e, u).slice(0);
              }),
              (N = t.compile = function(e, t) {
                var n,
                  r = [],
                  o = [],
                  i = z[e + ' '];
                if (!i) {
                  for (t || (t = k(e)), n = t.length; n--; )
                    (i = y(t[n])), i[M] ? r.push(i) : o.push(i);
                  (i = z(e, x(o, r))), (i.selector = e);
                }
                return i;
              }),
              (E = t.select = function(e, t, n, r) {
                var o,
                  i,
                  s,
                  a,
                  u,
                  l = 'function' == typeof e && e,
                  f = !r && k((e = l.selector || e));
                if (((n = n || []), 1 === f.length)) {
                  if (
                    ((i = f[0] = f[0].slice(0)),
                    i.length > 2 &&
                      'ID' === (s = i[0]).type &&
                      w.getById &&
                      9 === t.nodeType &&
                      H &&
                      T.relative[i[1].type])
                  ) {
                    if (
                      ((t = (T.find.ID(s.matches[0].replace(we, Te), t) ||
                        [])[0]),
                      !t)
                    )
                      return n;
                    l && (t = t.parentNode),
                      (e = e.slice(i.shift().value.length));
                  }
                  for (
                    o = de.needsContext.test(e) ? 0 : i.length;
                    o-- && ((s = i[o]), !T.relative[(a = s.type)]);

                  )
                    if (
                      (u = T.find[a]) &&
                      (r = u(
                        s.matches[0].replace(we, Te),
                        (xe.test(i[0].type) && c(t.parentNode)) || t
                      ))
                    ) {
                      if ((i.splice(o, 1), (e = r.length && p(i)), !e))
                        return K.apply(n, r), n;
                      break;
                    }
                }
                return (
                  (l || N(e, f))(
                    r,
                    t,
                    !H,
                    n,
                    (xe.test(e) && c(t.parentNode)) || t
                  ),
                  n
                );
              }),
              (w.sortStable =
                M.split('')
                  .sort(X)
                  .join('') === M),
              (w.detectDuplicates = !!D),
              q(),
              (w.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(O.createElement('div'));
              })),
              o(function(e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  '#' === e.firstChild.getAttribute('href')
                );
              }) ||
                i('type|href|height|width', function(e, t, n) {
                  return n
                    ? void 0
                    : e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
                }),
              (w.attributes &&
                o(function(e) {
                  return (
                    (e.innerHTML = '<input/>'),
                    e.firstChild.setAttribute('value', ''),
                    '' === e.firstChild.getAttribute('value')
                  );
                })) ||
                i('value', function(e, t, n) {
                  return n || 'input' !== e.nodeName.toLowerCase()
                    ? void 0
                    : e.defaultValue;
                }),
              o(function(e) {
                return null == e.getAttribute('disabled');
              }) ||
                i(te, function(e, t, n) {
                  var r;
                  return n
                    ? void 0
                    : e[t] === !0
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
                }),
              t
            );
          })(e);
          (Z.find = oe),
            (Z.expr = oe.selectors),
            (Z.expr[':'] = Z.expr.pseudos),
            (Z.unique = oe.uniqueSort),
            (Z.text = oe.getText),
            (Z.isXMLDoc = oe.isXML),
            (Z.contains = oe.contains);
          var ie = Z.expr.match.needsContext,
            se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ae = /^.[^:#\[\.,]*$/;
          (Z.filter = function(e, t, n) {
            var r = t[0];
            return (
              n && (e = ':not(' + e + ')'),
              1 === t.length && 1 === r.nodeType
                ? Z.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : Z.find.matches(
                    e,
                    Z.grep(t, function(e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            Z.fn.extend({
              find: function(e) {
                var t,
                  n = this.length,
                  r = [],
                  o = this;
                if ('string' != typeof e)
                  return this.pushStack(
                    Z(e).filter(function() {
                      for (t = 0; n > t; t++)
                        if (Z.contains(o[t], this)) return !0;
                    })
                  );
                for (t = 0; n > t; t++) Z.find(e, o[t], r);
                return (
                  (r = this.pushStack(n > 1 ? Z.unique(r) : r)),
                  (r.selector = this.selector ? this.selector + ' ' + e : e),
                  r
                );
              },
              filter: function(e) {
                return this.pushStack(r(this, e || [], !1));
              },
              not: function(e) {
                return this.pushStack(r(this, e || [], !0));
              },
              is: function(e) {
                return !!r(
                  this,
                  'string' == typeof e && ie.test(e) ? Z(e) : e || [],
                  !1
                ).length;
              }
            });
          var ue,
            le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ce = (Z.fn.init = function(e, t) {
              var n, r;
              if (!e) return this;
              if ('string' == typeof e) {
                if (
                  ((n =
                    '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
                      ? [null, e, null]
                      : le.exec(e)),
                  !n || (!n[1] && t))
                )
                  return !t || t.jquery
                    ? (t || ue).find(e)
                    : this.constructor(t).find(e);
                if (n[1]) {
                  if (
                    ((t = t instanceof Z ? t[0] : t),
                    Z.merge(
                      this,
                      Z.parseHTML(
                        n[1],
                        t && t.nodeType ? t.ownerDocument || t : Q,
                        !0
                      )
                    ),
                    se.test(n[1]) && Z.isPlainObject(t))
                  )
                    for (n in t)
                      Z.isFunction(this[n])
                        ? this[n](t[n])
                        : this.attr(n, t[n]);
                  return this;
                }
                return (
                  (r = Q.getElementById(n[2])),
                  r && r.parentNode && ((this.length = 1), (this[0] = r)),
                  (this.context = Q),
                  (this.selector = e),
                  this
                );
              }
              return e.nodeType
                ? ((this.context = this[0] = e), (this.length = 1), this)
                : Z.isFunction(e)
                ? 'undefined' != typeof ue.ready
                  ? ue.ready(e)
                  : e(Z)
                : (void 0 !== e.selector &&
                    ((this.selector = e.selector), (this.context = e.context)),
                  Z.makeArray(e, this));
            });
          (ce.prototype = Z.fn), (ue = Z(Q));
          var fe = /^(?:parents|prev(?:Until|All))/,
            pe = { children: !0, contents: !0, next: !0, prev: !0 };
          Z.extend({
            dir: function(e, t, n) {
              for (
                var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (o && Z(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            sibling: function(e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            }
          }),
            Z.fn.extend({
              has: function(e) {
                var t = Z(e, this),
                  n = t.length;
                return this.filter(function() {
                  for (var e = 0; n > e; e++)
                    if (Z.contains(this, t[e])) return !0;
                });
              },
              closest: function(e, t) {
                for (
                  var n,
                    r = 0,
                    o = this.length,
                    i = [],
                    s =
                      ie.test(e) || 'string' != typeof e
                        ? Z(e, t || this.context)
                        : 0;
                  o > r;
                  r++
                )
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (s
                        ? s.index(n) > -1
                        : 1 === n.nodeType && Z.find.matchesSelector(n, e))
                    ) {
                      i.push(n);
                      break;
                    }
                return this.pushStack(i.length > 1 ? Z.unique(i) : i);
              },
              index: function(e) {
                return e
                  ? 'string' == typeof e
                    ? X.call(Z(e), this[0])
                    : X.call(this, e.jquery ? e[0] : e)
                  : this[0] && this[0].parentNode
                  ? this.first().prevAll().length
                  : -1;
              },
              add: function(e, t) {
                return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))));
              },
              addBack: function(e) {
                return this.add(
                  null == e ? this.prevObject : this.prevObject.filter(e)
                );
              }
            }),
            Z.each(
              {
                parent: function(e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function(e) {
                  return Z.dir(e, 'parentNode');
                },
                parentsUntil: function(e, t, n) {
                  return Z.dir(e, 'parentNode', n);
                },
                next: function(e) {
                  return o(e, 'nextSibling');
                },
                prev: function(e) {
                  return o(e, 'previousSibling');
                },
                nextAll: function(e) {
                  return Z.dir(e, 'nextSibling');
                },
                prevAll: function(e) {
                  return Z.dir(e, 'previousSibling');
                },
                nextUntil: function(e, t, n) {
                  return Z.dir(e, 'nextSibling', n);
                },
                prevUntil: function(e, t, n) {
                  return Z.dir(e, 'previousSibling', n);
                },
                siblings: function(e) {
                  return Z.sibling((e.parentNode || {}).firstChild, e);
                },
                children: function(e) {
                  return Z.sibling(e.firstChild);
                },
                contents: function(e) {
                  return e.contentDocument || Z.merge([], e.childNodes);
                }
              },
              function(e, t) {
                Z.fn[e] = function(n, r) {
                  var o = Z.map(this, t, n);
                  return (
                    'Until' !== e.slice(-5) && (r = n),
                    r && 'string' == typeof r && (o = Z.filter(r, o)),
                    this.length > 1 &&
                      (pe[e] || Z.unique(o), fe.test(e) && o.reverse()),
                    this.pushStack(o)
                  );
                };
              }
            );
          var he = /\S+/g,
            de = {};
          (Z.Callbacks = function(e) {
            e = 'string' == typeof e ? de[e] || i(e) : Z.extend({}, e);
            var t,
              n,
              r,
              o,
              s,
              a,
              u = [],
              l = !e.once && [],
              c = function(i) {
                for (
                  t = e.memory && i,
                    n = !0,
                    a = o || 0,
                    o = 0,
                    s = u.length,
                    r = !0;
                  u && s > a;
                  a++
                )
                  if (u[a].apply(i[0], i[1]) === !1 && e.stopOnFalse) {
                    t = !1;
                    break;
                  }
                (r = !1),
                  u &&
                    (l ? l.length && c(l.shift()) : t ? (u = []) : f.disable());
              },
              f = {
                add: function() {
                  if (u) {
                    var n = u.length;
                    !(function i(t) {
                      Z.each(t, function(t, n) {
                        var r = Z.type(n);
                        'function' === r
                          ? (e.unique && f.has(n)) || u.push(n)
                          : n && n.length && 'string' !== r && i(n);
                      });
                    })(arguments),
                      r ? (s = u.length) : t && ((o = n), c(t));
                  }
                  return this;
                },
                remove: function() {
                  return (
                    u &&
                      Z.each(arguments, function(e, t) {
                        for (var n; (n = Z.inArray(t, u, n)) > -1; )
                          u.splice(n, 1), r && (s >= n && s--, a >= n && a--);
                      }),
                    this
                  );
                },
                has: function(e) {
                  return e ? Z.inArray(e, u) > -1 : !(!u || !u.length);
                },
                empty: function() {
                  return (u = []), (s = 0), this;
                },
                disable: function() {
                  return (u = l = t = void 0), this;
                },
                disabled: function() {
                  return !u;
                },
                lock: function() {
                  return (l = void 0), t || f.disable(), this;
                },
                locked: function() {
                  return !l;
                },
                fireWith: function(e, t) {
                  return (
                    !u ||
                      (n && !l) ||
                      ((t = t || []),
                      (t = [e, t.slice ? t.slice() : t]),
                      r ? l.push(t) : c(t)),
                    this
                  );
                },
                fire: function() {
                  return f.fireWith(this, arguments), this;
                },
                fired: function() {
                  return !!n;
                }
              };
            return f;
          }),
            Z.extend({
              Deferred: function(e) {
                var t = [
                    ['resolve', 'done', Z.Callbacks('once memory'), 'resolved'],
                    ['reject', 'fail', Z.Callbacks('once memory'), 'rejected'],
                    ['notify', 'progress', Z.Callbacks('memory')]
                  ],
                  n = 'pending',
                  r = {
                    state: function() {
                      return n;
                    },
                    always: function() {
                      return o.done(arguments).fail(arguments), this;
                    },
                    then: function() {
                      var e = arguments;
                      return Z.Deferred(function(n) {
                        Z.each(t, function(t, i) {
                          var s = Z.isFunction(e[t]) && e[t];
                          o[i[1]](function() {
                            var e = s && s.apply(this, arguments);
                            e && Z.isFunction(e.promise)
                              ? e
                                  .promise()
                                  .done(n.resolve)
                                  .fail(n.reject)
                                  .progress(n.notify)
                              : n[i[0] + 'With'](
                                  this === r ? n.promise() : this,
                                  s ? [e] : arguments
                                );
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    promise: function(e) {
                      return null != e ? Z.extend(e, r) : r;
                    }
                  },
                  o = {};
                return (
                  (r.pipe = r.then),
                  Z.each(t, function(e, i) {
                    var s = i[2],
                      a = i[3];
                    (r[i[1]] = s.add),
                      a &&
                        s.add(
                          function() {
                            n = a;
                          },
                          t[1 ^ e][2].disable,
                          t[2][2].lock
                        ),
                      (o[i[0]] = function() {
                        return (
                          o[i[0] + 'With'](this === o ? r : this, arguments),
                          this
                        );
                      }),
                      (o[i[0] + 'With'] = s.fireWith);
                  }),
                  r.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function(e) {
                var t,
                  n,
                  r,
                  o = 0,
                  i = _.call(arguments),
                  s = i.length,
                  a = 1 !== s || (e && Z.isFunction(e.promise)) ? s : 0,
                  u = 1 === a ? e : Z.Deferred(),
                  l = function(e, n, r) {
                    return function(o) {
                      (n[e] = this),
                        (r[e] = arguments.length > 1 ? _.call(arguments) : o),
                        r === t
                          ? u.notifyWith(n, r)
                          : --a || u.resolveWith(n, r);
                    };
                  };
                if (s > 1)
                  for (
                    t = new Array(s), n = new Array(s), r = new Array(s);
                    s > o;
                    o++
                  )
                    i[o] && Z.isFunction(i[o].promise)
                      ? i[o]
                          .promise()
                          .done(l(o, r, i))
                          .fail(u.reject)
                          .progress(l(o, n, t))
                      : --a;
                return a || u.resolveWith(r, i), u.promise();
              }
            });
          var ge;
          (Z.fn.ready = function(e) {
            return Z.ready.promise().done(e), this;
          }),
            Z.extend({
              isReady: !1,
              readyWait: 1,
              holdReady: function(e) {
                e ? Z.readyWait++ : Z.ready(!0);
              },
              ready: function(e) {
                (e === !0 ? --Z.readyWait : Z.isReady) ||
                  ((Z.isReady = !0),
                  (e !== !0 && --Z.readyWait > 0) ||
                    (ge.resolveWith(Q, [Z]),
                    Z.fn.triggerHandler &&
                      (Z(Q).triggerHandler('ready'), Z(Q).off('ready'))));
              }
            }),
            (Z.ready.promise = function(t) {
              return (
                ge ||
                  ((ge = Z.Deferred()),
                  'complete' === Q.readyState
                    ? setTimeout(Z.ready)
                    : (Q.addEventListener('DOMContentLoaded', s, !1),
                      e.addEventListener('load', s, !1))),
                ge.promise(t)
              );
            }),
            Z.ready.promise();
          var me = (Z.access = function(e, t, n, r, o, i, s) {
            var a = 0,
              u = e.length,
              l = null == n;
            if ('object' === Z.type(n)) {
              o = !0;
              for (a in n) Z.access(e, t, a, n[a], !0, i, s);
            } else if (
              void 0 !== r &&
              ((o = !0),
              Z.isFunction(r) || (s = !0),
              l &&
                (s
                  ? (t.call(e, r), (t = null))
                  : ((l = t),
                    (t = function(e, t, n) {
                      return l.call(Z(e), n);
                    }))),
              t)
            )
              for (; u > a; a++)
                t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return o ? e : l ? t.call(e) : u ? t(e[0], n) : i;
          });
          (Z.acceptData = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          }),
            (a.uid = 1),
            (a.accepts = Z.acceptData),
            (a.prototype = {
              key: function(e) {
                if (!a.accepts(e)) return 0;
                var t = {},
                  n = e[this.expando];
                if (!n) {
                  n = a.uid++;
                  try {
                    (t[this.expando] = { value: n }),
                      Object.defineProperties(e, t);
                  } catch (r) {
                    (t[this.expando] = n), Z.extend(e, t);
                  }
                }
                return this.cache[n] || (this.cache[n] = {}), n;
              },
              set: function(e, t, n) {
                var r,
                  o = this.key(e),
                  i = this.cache[o];
                if ('string' == typeof t) i[t] = n;
                else if (Z.isEmptyObject(i)) Z.extend(this.cache[o], t);
                else for (r in t) i[r] = t[r];
                return i;
              },
              get: function(e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t];
              },
              access: function(e, t, n) {
                var r;
                return void 0 === t ||
                  (t && 'string' == typeof t && void 0 === n)
                  ? ((r = this.get(e, t)),
                    void 0 !== r ? r : this.get(e, Z.camelCase(t)))
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function(e, t) {
                var n,
                  r,
                  o,
                  i = this.key(e),
                  s = this.cache[i];
                if (void 0 === t) this.cache[i] = {};
                else {
                  Z.isArray(t)
                    ? (r = t.concat(t.map(Z.camelCase)))
                    : ((o = Z.camelCase(t)),
                      t in s
                        ? (r = [t, o])
                        : ((r = o), (r = r in s ? [r] : r.match(he) || []))),
                    (n = r.length);
                  for (; n--; ) delete s[r[n]];
                }
              },
              hasData: function(e) {
                return !Z.isEmptyObject(this.cache[e[this.expando]] || {});
              },
              discard: function(e) {
                e[this.expando] && delete this.cache[e[this.expando]];
              }
            });
          var ve = new a(),
            ye = new a(),
            xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            be = /([A-Z])/g;
          Z.extend({
            hasData: function(e) {
              return ye.hasData(e) || ve.hasData(e);
            },
            data: function(e, t, n) {
              return ye.access(e, t, n);
            },
            removeData: function(e, t) {
              ye.remove(e, t);
            },
            _data: function(e, t, n) {
              return ve.access(e, t, n);
            },
            _removeData: function(e, t) {
              ve.remove(e, t);
            }
          }),
            Z.fn.extend({
              data: function(e, t) {
                var n,
                  r,
                  o,
                  i = this[0],
                  s = i && i.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((o = ye.get(i)),
                    1 === i.nodeType && !ve.get(i, 'hasDataAttrs'))
                  ) {
                    for (n = s.length; n--; )
                      s[n] &&
                        ((r = s[n].name),
                        0 === r.indexOf('data-') &&
                          ((r = Z.camelCase(r.slice(5))), u(i, r, o[r])));
                    ve.set(i, 'hasDataAttrs', !0);
                  }
                  return o;
                }
                return 'object' == typeof e
                  ? this.each(function() {
                      ye.set(this, e);
                    })
                  : me(
                      this,
                      function(t) {
                        var n,
                          r = Z.camelCase(e);
                        if (i && void 0 === t) {
                          if (((n = ye.get(i, e)), void 0 !== n)) return n;
                          if (((n = ye.get(i, r)), void 0 !== n)) return n;
                          if (((n = u(i, r, void 0)), void 0 !== n)) return n;
                        } else
                          this.each(function() {
                            var n = ye.get(this, r);
                            ye.set(this, r, t),
                              -1 !== e.indexOf('-') &&
                                void 0 !== n &&
                                ye.set(this, e, t);
                          });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function(e) {
                return this.each(function() {
                  ye.remove(this, e);
                });
              }
            }),
            Z.extend({
              queue: function(e, t, n) {
                var r;
                return e
                  ? ((t = (t || 'fx') + 'queue'),
                    (r = ve.get(e, t)),
                    n &&
                      (!r || Z.isArray(n)
                        ? (r = ve.access(e, t, Z.makeArray(n)))
                        : r.push(n)),
                    r || [])
                  : void 0;
              },
              dequeue: function(e, t) {
                t = t || 'fx';
                var n = Z.queue(e, t),
                  r = n.length,
                  o = n.shift(),
                  i = Z._queueHooks(e, t),
                  s = function() {
                    Z.dequeue(e, t);
                  };
                'inprogress' === o && ((o = n.shift()), r--),
                  o &&
                    ('fx' === t && n.unshift('inprogress'),
                    delete i.stop,
                    o.call(e, s, i)),
                  !r && i && i.empty.fire();
              },
              _queueHooks: function(e, t) {
                var n = t + 'queueHooks';
                return (
                  ve.get(e, n) ||
                  ve.access(e, n, {
                    empty: Z.Callbacks('once memory').add(function() {
                      ve.remove(e, [t + 'queue', n]);
                    })
                  })
                );
              }
            }),
            Z.fn.extend({
              queue: function(e, t) {
                var n = 2;
                return (
                  'string' != typeof e && ((t = e), (e = 'fx'), n--),
                  arguments.length < n
                    ? Z.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function() {
                        var n = Z.queue(this, e, t);
                        Z._queueHooks(this, e),
                          'fx' === e &&
                            'inprogress' !== n[0] &&
                            Z.dequeue(this, e);
                      })
                );
              },
              dequeue: function(e) {
                return this.each(function() {
                  Z.dequeue(this, e);
                });
              },
              clearQueue: function(e) {
                return this.queue(e || 'fx', []);
              },
              promise: function(e, t) {
                var n,
                  r = 1,
                  o = Z.Deferred(),
                  i = this,
                  s = this.length,
                  a = function() {
                    --r || o.resolveWith(i, [i]);
                  };
                for (
                  'string' != typeof e && ((t = e), (e = void 0)),
                    e = e || 'fx';
                  s--;

                )
                  (n = ve.get(i[s], e + 'queueHooks')),
                    n && n.empty && (r++, n.empty.add(a));
                return a(), o.promise(t);
              }
            });
          var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Te = ['Top', 'Right', 'Bottom', 'Left'],
            Ce = function(e, t) {
              return (
                (e = t || e),
                'none' === Z.css(e, 'display') ||
                  !Z.contains(e.ownerDocument, e)
              );
            },
            je = /^(?:checkbox|radio)$/i;
          !(function() {
            var e = Q.createDocumentFragment(),
              t = e.appendChild(Q.createElement('div')),
              n = Q.createElement('input');
            n.setAttribute('type', 'radio'),
              n.setAttribute('checked', 'checked'),
              n.setAttribute('name', 't'),
              t.appendChild(n),
              (J.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
              (t.innerHTML = '<textarea>x</textarea>'),
              (J.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
          })();
          var ke = 'undefined';
          J.focusinBubbles = 'onfocusin' in e;
          var Ne = /^key/,
            Ee = /^(?:mouse|pointer|contextmenu)|click/,
            Se = /^(?:focusinfocus|focusoutblur)$/,
            Ae = /^([^.]*)(?:\.(.+)|)$/;
          (Z.event = {
            global: {},
            add: function(e, t, n, r, o) {
              var i,
                s,
                a,
                u,
                l,
                c,
                f,
                p,
                h,
                d,
                g,
                m = ve.get(e);
              if (m)
                for (
                  n.handler && ((i = n), (n = i.handler), (o = i.selector)),
                    n.guid || (n.guid = Z.guid++),
                    (u = m.events) || (u = m.events = {}),
                    (s = m.handle) ||
                      (s = m.handle = function(t) {
                        return typeof Z !== ke && Z.event.triggered !== t.type
                          ? Z.event.dispatch.apply(e, arguments)
                          : void 0;
                      }),
                    t = (t || '').match(he) || [''],
                    l = t.length;
                  l--;

                )
                  (a = Ae.exec(t[l]) || []),
                    (h = g = a[1]),
                    (d = (a[2] || '').split('.').sort()),
                    h &&
                      ((f = Z.event.special[h] || {}),
                      (h = (o ? f.delegateType : f.bindType) || h),
                      (f = Z.event.special[h] || {}),
                      (c = Z.extend(
                        {
                          type: h,
                          origType: g,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: o,
                          needsContext: o && Z.expr.match.needsContext.test(o),
                          namespace: d.join('.')
                        },
                        i
                      )),
                      (p = u[h]) ||
                        ((p = u[h] = []),
                        (p.delegateCount = 0),
                        (f.setup && f.setup.call(e, r, d, s) !== !1) ||
                          (e.addEventListener && e.addEventListener(h, s, !1))),
                      f.add &&
                        (f.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      o ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                      (Z.event.global[h] = !0));
            },
            remove: function(e, t, n, r, o) {
              var i,
                s,
                a,
                u,
                l,
                c,
                f,
                p,
                h,
                d,
                g,
                m = ve.hasData(e) && ve.get(e);
              if (m && (u = m.events)) {
                for (t = (t || '').match(he) || [''], l = t.length; l--; )
                  if (
                    ((a = Ae.exec(t[l]) || []),
                    (h = g = a[1]),
                    (d = (a[2] || '').split('.').sort()),
                    h)
                  ) {
                    for (
                      f = Z.event.special[h] || {},
                        h = (r ? f.delegateType : f.bindType) || h,
                        p = u[h] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            '(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)'
                          ),
                        s = i = p.length;
                      i--;

                    )
                      (c = p[i]),
                        (!o && g !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (a && !a.test(c.namespace)) ||
                          (r &&
                            r !== c.selector &&
                            ('**' !== r || !c.selector)) ||
                          (p.splice(i, 1),
                          c.selector && p.delegateCount--,
                          f.remove && f.remove.call(e, c));
                    s &&
                      !p.length &&
                      ((f.teardown && f.teardown.call(e, d, m.handle) !== !1) ||
                        Z.removeEvent(e, h, m.handle),
                      delete u[h]);
                  } else for (h in u) Z.event.remove(e, h + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete m.handle, ve.remove(e, 'events'));
              }
            },
            trigger: function(t, n, r, o) {
              var i,
                s,
                a,
                u,
                l,
                c,
                f,
                p = [r || Q],
                h = G.call(t, 'type') ? t.type : t,
                d = G.call(t, 'namespace') ? t.namespace.split('.') : [];
              if (
                ((s = a = r = r || Q),
                3 !== r.nodeType &&
                  8 !== r.nodeType &&
                  !Se.test(h + Z.event.triggered) &&
                  (h.indexOf('.') >= 0 &&
                    ((d = h.split('.')), (h = d.shift()), d.sort()),
                  (l = h.indexOf(':') < 0 && 'on' + h),
                  (t = t[Z.expando]
                    ? t
                    : new Z.Event(h, 'object' == typeof t && t)),
                  (t.isTrigger = o ? 2 : 3),
                  (t.namespace = d.join('.')),
                  (t.namespace_re = t.namespace
                    ? new RegExp(
                        '(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)'
                      )
                    : null),
                  (t.result = void 0),
                  t.target || (t.target = r),
                  (n = null == n ? [t] : Z.makeArray(n, [t])),
                  (f = Z.event.special[h] || {}),
                  o || !f.trigger || f.trigger.apply(r, n) !== !1))
              ) {
                if (!o && !f.noBubble && !Z.isWindow(r)) {
                  for (
                    u = f.delegateType || h,
                      Se.test(u + h) || (s = s.parentNode);
                    s;
                    s = s.parentNode
                  )
                    p.push(s), (a = s);
                  a === (r.ownerDocument || Q) &&
                    p.push(a.defaultView || a.parentWindow || e);
                }
                for (i = 0; (s = p[i++]) && !t.isPropagationStopped(); )
                  (t.type = i > 1 ? u : f.bindType || h),
                    (c =
                      (ve.get(s, 'events') || {})[t.type] &&
                      ve.get(s, 'handle')),
                    c && c.apply(s, n),
                    (c = l && s[l]),
                    c &&
                      c.apply &&
                      Z.acceptData(s) &&
                      ((t.result = c.apply(s, n)),
                      t.result === !1 && t.preventDefault());
                return (
                  (t.type = h),
                  o ||
                    t.isDefaultPrevented() ||
                    (f._default && f._default.apply(p.pop(), n) !== !1) ||
                    !Z.acceptData(r) ||
                    (l &&
                      Z.isFunction(r[h]) &&
                      !Z.isWindow(r) &&
                      ((a = r[l]),
                      a && (r[l] = null),
                      (Z.event.triggered = h),
                      r[h](),
                      (Z.event.triggered = void 0),
                      a && (r[l] = a))),
                  t.result
                );
              }
            },
            dispatch: function(e) {
              e = Z.event.fix(e);
              var t,
                n,
                r,
                o,
                i,
                s = [],
                a = _.call(arguments),
                u = (ve.get(this, 'events') || {})[e.type] || [],
                l = Z.event.special[e.type] || {};
              if (
                ((a[0] = e),
                (e.delegateTarget = this),
                !l.preDispatch || l.preDispatch.call(this, e) !== !1)
              ) {
                for (
                  s = Z.event.handlers.call(this, e, u), t = 0;
                  (o = s[t++]) && !e.isPropagationStopped();

                )
                  for (
                    e.currentTarget = o.elem, n = 0;
                    (i = o.handlers[n++]) && !e.isImmediatePropagationStopped();

                  )
                    (!e.namespace_re || e.namespace_re.test(i.namespace)) &&
                      ((e.handleObj = i),
                      (e.data = i.data),
                      (r = (
                        (Z.event.special[i.origType] || {}).handle || i.handler
                      ).apply(o.elem, a)),
                      void 0 !== r &&
                        (e.result = r) === !1 &&
                        (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result;
              }
            },
            handlers: function(e, t) {
              var n,
                r,
                o,
                i,
                s = [],
                a = t.delegateCount,
                u = e.target;
              if (a && u.nodeType && (!e.button || 'click' !== e.type))
                for (; u !== this; u = u.parentNode || this)
                  if (u.disabled !== !0 || 'click' !== e.type) {
                    for (r = [], n = 0; a > n; n++)
                      (i = t[n]),
                        (o = i.selector + ' '),
                        void 0 === r[o] &&
                          (r[o] = i.needsContext
                            ? Z(o, this).index(u) >= 0
                            : Z.find(o, this, null, [u]).length),
                        r[o] && r.push(i);
                    r.length && s.push({ elem: u, handlers: r });
                  }
              return (
                a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s
              );
            },
            props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
              ' '
            ),
            fixHooks: {},
            keyHooks: {
              props: 'char charCode key keyCode'.split(' '),
              filter: function(e, t) {
                return (
                  null == e.which &&
                    (e.which = null != t.charCode ? t.charCode : t.keyCode),
                  e
                );
              }
            },
            mouseHooks: {
              props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(
                ' '
              ),
              filter: function(e, t) {
                var n,
                  r,
                  o,
                  i = t.button;
                return (
                  null == e.pageX &&
                    null != t.clientX &&
                    ((n = e.target.ownerDocument || Q),
                    (r = n.documentElement),
                    (o = n.body),
                    (e.pageX =
                      t.clientX +
                      ((r && r.scrollLeft) || (o && o.scrollLeft) || 0) -
                      ((r && r.clientLeft) || (o && o.clientLeft) || 0)),
                    (e.pageY =
                      t.clientY +
                      ((r && r.scrollTop) || (o && o.scrollTop) || 0) -
                      ((r && r.clientTop) || (o && o.clientTop) || 0))),
                  e.which ||
                    void 0 === i ||
                    (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
                  e
                );
              }
            },
            fix: function(e) {
              if (e[Z.expando]) return e;
              var t,
                n,
                r,
                o = e.type,
                i = e,
                s = this.fixHooks[o];
              for (
                s ||
                  (this.fixHooks[o] = s = Ee.test(o)
                    ? this.mouseHooks
                    : Ne.test(o)
                    ? this.keyHooks
                    : {}),
                  r = s.props ? this.props.concat(s.props) : this.props,
                  e = new Z.Event(i),
                  t = r.length;
                t--;

              )
                (n = r[t]), (e[n] = i[n]);
              return (
                e.target || (e.target = Q),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                s.filter ? s.filter(e, i) : e
              );
            },
            special: {
              load: { noBubble: !0 },
              focus: {
                trigger: function() {
                  return this !== f() && this.focus
                    ? (this.focus(), !1)
                    : void 0;
                },
                delegateType: 'focusin'
              },
              blur: {
                trigger: function() {
                  return this === f() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: 'focusout'
              },
              click: {
                trigger: function() {
                  return 'checkbox' === this.type &&
                    this.click &&
                    Z.nodeName(this, 'input')
                    ? (this.click(), !1)
                    : void 0;
                },
                _default: function(e) {
                  return Z.nodeName(e.target, 'a');
                }
              },
              beforeunload: {
                postDispatch: function(e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                }
              }
            },
            simulate: function(e, t, n, r) {
              var o = Z.extend(new Z.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
              });
              r ? Z.event.trigger(o, null, t) : Z.event.dispatch.call(t, o),
                o.isDefaultPrevented() && n.preventDefault();
            }
          }),
            (Z.removeEvent = function(e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n, !1);
            }),
            (Z.Event = function(e, t) {
              return this instanceof Z.Event
                ? (e && e.type
                    ? ((this.originalEvent = e),
                      (this.type = e.type),
                      (this.isDefaultPrevented =
                        e.defaultPrevented ||
                        (void 0 === e.defaultPrevented && e.returnValue === !1)
                          ? l
                          : c))
                    : (this.type = e),
                  t && Z.extend(this, t),
                  (this.timeStamp = (e && e.timeStamp) || Z.now()),
                  void (this[Z.expando] = !0))
                : new Z.Event(e, t);
            }),
            (Z.Event.prototype = {
              isDefaultPrevented: c,
              isPropagationStopped: c,
              isImmediatePropagationStopped: c,
              preventDefault: function() {
                var e = this.originalEvent;
                (this.isDefaultPrevented = l),
                  e && e.preventDefault && e.preventDefault();
              },
              stopPropagation: function() {
                var e = this.originalEvent;
                (this.isPropagationStopped = l),
                  e && e.stopPropagation && e.stopPropagation();
              },
              stopImmediatePropagation: function() {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = l),
                  e &&
                    e.stopImmediatePropagation &&
                    e.stopImmediatePropagation(),
                  this.stopPropagation();
              }
            }),
            Z.each(
              {
                mouseenter: 'mouseover',
                mouseleave: 'mouseout',
                pointerenter: 'pointerover',
                pointerleave: 'pointerout'
              },
              function(e, t) {
                Z.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function(e) {
                    var n,
                      r = this,
                      o = e.relatedTarget,
                      i = e.handleObj;
                    return (
                      (!o || (o !== r && !Z.contains(r, o))) &&
                        ((e.type = i.origType),
                        (n = i.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  }
                };
              }
            ),
            J.focusinBubbles ||
              Z.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
                var n = function(e) {
                  Z.event.simulate(t, e.target, Z.event.fix(e), !0);
                };
                Z.event.special[t] = {
                  setup: function() {
                    var r = this.ownerDocument || this,
                      o = ve.access(r, t);
                    o || r.addEventListener(e, n, !0),
                      ve.access(r, t, (o || 0) + 1);
                  },
                  teardown: function() {
                    var r = this.ownerDocument || this,
                      o = ve.access(r, t) - 1;
                    o
                      ? ve.access(r, t, o)
                      : (r.removeEventListener(e, n, !0), ve.remove(r, t));
                  }
                };
              }),
            Z.fn.extend({
              on: function(e, t, n, r, o) {
                var i, s;
                if ('object' == typeof e) {
                  'string' != typeof t && ((n = n || t), (t = void 0));
                  for (s in e) this.on(s, t, n, e[s], o);
                  return this;
                }
                if (
                  (null == n && null == r
                    ? ((r = t), (n = t = void 0))
                    : null == r &&
                      ('string' == typeof t
                        ? ((r = n), (n = void 0))
                        : ((r = n), (n = t), (t = void 0))),
                  r === !1)
                )
                  r = c;
                else if (!r) return this;
                return (
                  1 === o &&
                    ((i = r),
                    (r = function(e) {
                      return Z().off(e), i.apply(this, arguments);
                    }),
                    (r.guid = i.guid || (i.guid = Z.guid++))),
                  this.each(function() {
                    Z.event.add(this, e, r, n, t);
                  })
                );
              },
              one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1);
              },
              off: function(e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    Z(e.delegateTarget).off(
                      r.namespace ? r.origType + '.' + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ('object' == typeof e) {
                  for (o in e) this.off(o, t, e[o]);
                  return this;
                }
                return (
                  (t === !1 || 'function' == typeof t) &&
                    ((n = t), (t = void 0)),
                  n === !1 && (n = c),
                  this.each(function() {
                    Z.event.remove(this, e, n, t);
                  })
                );
              },
              trigger: function(e, t) {
                return this.each(function() {
                  Z.event.trigger(e, t, this);
                });
              },
              triggerHandler: function(e, t) {
                var n = this[0];
                return n ? Z.event.trigger(e, t, n, !0) : void 0;
              }
            });
          var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            qe = /<([\w:]+)/,
            Oe = /<|&#?\w+;/,
            Le = /<(?:script|style|link)/i,
            He = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Fe = /^$|\/(?:java|ecma)script/i,
            Re = /^true\/(.*)/,
            Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ie = {
              option: [1, "<select multiple='multiple'>", '</select>'],
              thead: [1, '<table>', '</table>'],
              col: [2, '<table><colgroup>', '</colgroup></table>'],
              tr: [2, '<table><tbody>', '</tbody></table>'],
              td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
              _default: [0, '', '']
            };
          (Ie.optgroup = Ie.option),
            (Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead),
            (Ie.th = Ie.td),
            Z.extend({
              clone: function(e, t, n) {
                var r,
                  o,
                  i,
                  s,
                  a = e.cloneNode(!0),
                  u = Z.contains(e.ownerDocument, e);
                if (
                  !(
                    J.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    Z.isXMLDoc(e)
                  )
                )
                  for (s = v(a), i = v(e), r = 0, o = i.length; o > r; r++)
                    y(i[r], s[r]);
                if (t)
                  if (n)
                    for (
                      i = i || v(e), s = s || v(a), r = 0, o = i.length;
                      o > r;
                      r++
                    )
                      m(i[r], s[r]);
                  else m(e, a);
                return (
                  (s = v(a, 'script')),
                  s.length > 0 && g(s, !u && v(e, 'script')),
                  a
                );
              },
              buildFragment: function(e, t, n, r) {
                for (
                  var o,
                    i,
                    s,
                    a,
                    u,
                    l,
                    c = t.createDocumentFragment(),
                    f = [],
                    p = 0,
                    h = e.length;
                  h > p;
                  p++
                )
                  if (((o = e[p]), o || 0 === o))
                    if ('object' === Z.type(o))
                      Z.merge(f, o.nodeType ? [o] : o);
                    else if (Oe.test(o)) {
                      for (
                        i = i || c.appendChild(t.createElement('div')),
                          s = (qe.exec(o) || ['', ''])[1].toLowerCase(),
                          a = Ie[s] || Ie._default,
                          i.innerHTML =
                            a[1] + o.replace(De, '<$1></$2>') + a[2],
                          l = a[0];
                        l--;

                      )
                        i = i.lastChild;
                      Z.merge(f, i.childNodes),
                        (i = c.firstChild),
                        (i.textContent = '');
                    } else f.push(t.createTextNode(o));
                for (c.textContent = '', p = 0; (o = f[p++]); )
                  if (
                    (!r || -1 === Z.inArray(o, r)) &&
                    ((u = Z.contains(o.ownerDocument, o)),
                    (i = v(c.appendChild(o), 'script')),
                    u && g(i),
                    n)
                  )
                    for (l = 0; (o = i[l++]); )
                      Fe.test(o.type || '') && n.push(o);
                return c;
              },
              cleanData: function(e) {
                for (
                  var t, n, r, o, i = Z.event.special, s = 0;
                  void 0 !== (n = e[s]);
                  s++
                ) {
                  if (
                    Z.acceptData(n) &&
                    ((o = n[ve.expando]), o && (t = ve.cache[o]))
                  ) {
                    if (t.events)
                      for (r in t.events)
                        i[r]
                          ? Z.event.remove(n, r)
                          : Z.removeEvent(n, r, t.handle);
                    ve.cache[o] && delete ve.cache[o];
                  }
                  delete ye.cache[n[ye.expando]];
                }
              }
            }),
            Z.fn.extend({
              text: function(e) {
                return me(
                  this,
                  function(e) {
                    return void 0 === e
                      ? Z.text(this)
                      : this.empty().each(function() {
                          (1 === this.nodeType ||
                            11 === this.nodeType ||
                            9 === this.nodeType) &&
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function() {
                return this.domManip(arguments, function(e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = p(this, e);
                    t.appendChild(e);
                  }
                });
              },
              prepend: function() {
                return this.domManip(arguments, function(e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function() {
                return this.domManip(arguments, function(e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function() {
                return this.domManip(arguments, function(e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              remove: function(e, t) {
                for (
                  var n, r = e ? Z.filter(e, this) : this, o = 0;
                  null != (n = r[o]);
                  o++
                )
                  t || 1 !== n.nodeType || Z.cleanData(v(n)),
                    n.parentNode &&
                      (t && Z.contains(n.ownerDocument, n) && g(v(n, 'script')),
                      n.parentNode.removeChild(n));
                return this;
              },
              empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (Z.cleanData(v(e, !1)), (e.textContent = ''));
                return this;
              },
              clone: function(e, t) {
                return (
                  (e = null == e ? !1 : e),
                  (t = null == t ? e : t),
                  this.map(function() {
                    return Z.clone(this, e, t);
                  })
                );
              },
              html: function(e) {
                return me(
                  this,
                  function(e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      'string' == typeof e &&
                      !Le.test(e) &&
                      !Ie[(qe.exec(e) || ['', ''])[1].toLowerCase()]
                    ) {
                      e = e.replace(De, '<$1></$2>');
                      try {
                        for (; r > n; n++)
                          (t = this[n] || {}),
                            1 === t.nodeType &&
                              (Z.cleanData(v(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (o) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function() {
                var e = arguments[0];
                return (
                  this.domManip(arguments, function(t) {
                    (e = this.parentNode),
                      Z.cleanData(v(this)),
                      e && e.replaceChild(t, this);
                  }),
                  e && (e.length || e.nodeType) ? this : this.remove()
                );
              },
              detach: function(e) {
                return this.remove(e, !0);
              },
              domManip: function(e, t) {
                e = U.apply([], e);
                var n,
                  r,
                  o,
                  i,
                  s,
                  a,
                  u = 0,
                  l = this.length,
                  c = this,
                  f = l - 1,
                  p = e[0],
                  g = Z.isFunction(p);
                if (
                  g ||
                  (l > 1 && 'string' == typeof p && !J.checkClone && He.test(p))
                )
                  return this.each(function(n) {
                    var r = c.eq(n);
                    g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t);
                  });
                if (
                  l &&
                  ((n = Z.buildFragment(e, this[0].ownerDocument, !1, this)),
                  (r = n.firstChild),
                  1 === n.childNodes.length && (n = r),
                  r)
                ) {
                  for (o = Z.map(v(n, 'script'), h), i = o.length; l > u; u++)
                    (s = n),
                      u !== f &&
                        ((s = Z.clone(s, !0, !0)),
                        i && Z.merge(o, v(s, 'script'))),
                      t.call(this[u], s, u);
                  if (i)
                    for (
                      a = o[o.length - 1].ownerDocument, Z.map(o, d), u = 0;
                      i > u;
                      u++
                    )
                      (s = o[u]),
                        Fe.test(s.type || '') &&
                          !ve.access(s, 'globalEval') &&
                          Z.contains(a, s) &&
                          (s.src
                            ? Z._evalUrl && Z._evalUrl(s.src)
                            : Z.globalEval(s.textContent.replace(Pe, '')));
                }
                return this;
              }
            }),
            Z.each(
              {
                appendTo: 'append',
                prependTo: 'prepend',
                insertBefore: 'before',
                insertAfter: 'after',
                replaceAll: 'replaceWith'
              },
              function(e, t) {
                Z.fn[e] = function(e) {
                  for (
                    var n, r = [], o = Z(e), i = o.length - 1, s = 0;
                    i >= s;
                    s++
                  )
                    (n = s === i ? this : this.clone(!0)),
                      Z(o[s])[t](n),
                      z.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var Me,
            $e = {},
            We = /^margin/,
            Be = new RegExp('^(' + we + ')(?!px)[a-z%]+$', 'i'),
            _e = function(t) {
              return t.ownerDocument.defaultView.opener
                ? t.ownerDocument.defaultView.getComputedStyle(t, null)
                : e.getComputedStyle(t, null);
            };
          !(function() {
            function t() {
              (s.style.cssText =
                '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute'),
                (s.innerHTML = ''),
                o.appendChild(i);
              var t = e.getComputedStyle(s, null);
              (n = '1%' !== t.top), (r = '4px' === t.width), o.removeChild(i);
            }
            var n,
              r,
              o = Q.documentElement,
              i = Q.createElement('div'),
              s = Q.createElement('div');
            s.style &&
              ((s.style.backgroundClip = 'content-box'),
              (s.cloneNode(!0).style.backgroundClip = ''),
              (J.clearCloneStyle = 'content-box' === s.style.backgroundClip),
              (i.style.cssText =
                'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute'),
              i.appendChild(s),
              e.getComputedStyle &&
                Z.extend(J, {
                  pixelPosition: function() {
                    return t(), n;
                  },
                  boxSizingReliable: function() {
                    return null == r && t(), r;
                  },
                  reliableMarginRight: function() {
                    var t,
                      n = s.appendChild(Q.createElement('div'));
                    return (
                      (n.style.cssText = s.style.cssText =
                        '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
                      (n.style.marginRight = n.style.width = '0'),
                      (s.style.width = '1px'),
                      o.appendChild(i),
                      (t = !parseFloat(
                        e.getComputedStyle(n, null).marginRight
                      )),
                      o.removeChild(i),
                      s.removeChild(n),
                      t
                    );
                  }
                }));
          })(),
            (Z.swap = function(e, t, n, r) {
              var o,
                i,
                s = {};
              for (i in t) (s[i] = e.style[i]), (e.style[i] = t[i]);
              o = n.apply(e, r || []);
              for (i in t) e.style[i] = s[i];
              return o;
            });
          var Ue = /^(none|table(?!-c[ea]).+)/,
            ze = new RegExp('^(' + we + ')(.*)$', 'i'),
            Xe = new RegExp('^([+-])=(' + we + ')', 'i'),
            Ve = {
              position: 'absolute',
              visibility: 'hidden',
              display: 'block'
            },
            Ye = { letterSpacing: '0', fontWeight: '400' },
            Ge = ['Webkit', 'O', 'Moz', 'ms'];
          Z.extend({
            cssHooks: {
              opacity: {
                get: function(e, t) {
                  if (t) {
                    var n = w(e, 'opacity');
                    return '' === n ? '1' : n;
                  }
                }
              }
            },
            cssNumber: {
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0
            },
            cssProps: { float: 'cssFloat' },
            style: function(e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                  i,
                  s,
                  a = Z.camelCase(t),
                  u = e.style;
                return (
                  (t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a))),
                  (s = Z.cssHooks[t] || Z.cssHooks[a]),
                  void 0 === n
                    ? s && 'get' in s && void 0 !== (o = s.get(e, !1, r))
                      ? o
                      : u[t]
                    : ((i = typeof n),
                      'string' === i &&
                        (o = Xe.exec(n)) &&
                        ((n = (o[1] + 1) * o[2] + parseFloat(Z.css(e, t))),
                        (i = 'number')),
                      null != n &&
                        n === n &&
                        ('number' !== i || Z.cssNumber[a] || (n += 'px'),
                        J.clearCloneStyle ||
                          '' !== n ||
                          0 !== t.indexOf('background') ||
                          (u[t] = 'inherit'),
                        (s && 'set' in s && void 0 === (n = s.set(e, n, r))) ||
                          (u[t] = n)),
                      void 0)
                );
              }
            },
            css: function(e, t, n, r) {
              var o,
                i,
                s,
                a = Z.camelCase(t);
              return (
                (t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a))),
                (s = Z.cssHooks[t] || Z.cssHooks[a]),
                s && 'get' in s && (o = s.get(e, !0, n)),
                void 0 === o && (o = w(e, t, r)),
                'normal' === o && t in Ye && (o = Ye[t]),
                '' === n || n
                  ? ((i = parseFloat(o)),
                    n === !0 || Z.isNumeric(i) ? i || 0 : o)
                  : o
              );
            }
          }),
            Z.each(['height', 'width'], function(e, t) {
              Z.cssHooks[t] = {
                get: function(e, n, r) {
                  return n
                    ? Ue.test(Z.css(e, 'display')) && 0 === e.offsetWidth
                      ? Z.swap(e, Ve, function() {
                          return N(e, t, r);
                        })
                      : N(e, t, r)
                    : void 0;
                },
                set: function(e, n, r) {
                  var o = r && _e(e);
                  return j(
                    e,
                    n,
                    r
                      ? k(
                          e,
                          t,
                          r,
                          'border-box' === Z.css(e, 'boxSizing', !1, o),
                          o
                        )
                      : 0
                  );
                }
              };
            }),
            (Z.cssHooks.marginRight = T(J.reliableMarginRight, function(e, t) {
              return t
                ? Z.swap(e, { display: 'inline-block' }, w, [e, 'marginRight'])
                : void 0;
            })),
            Z.each({ margin: '', padding: '', border: 'Width' }, function(
              e,
              t
            ) {
              (Z.cssHooks[e + t] = {
                expand: function(n) {
                  for (
                    var r = 0,
                      o = {},
                      i = 'string' == typeof n ? n.split(' ') : [n];
                    4 > r;
                    r++
                  )
                    o[e + Te[r] + t] = i[r] || i[r - 2] || i[0];
                  return o;
                }
              }),
                We.test(e) || (Z.cssHooks[e + t].set = j);
            }),
            Z.fn.extend({
              css: function(e, t) {
                return me(
                  this,
                  function(e, t, n) {
                    var r,
                      o,
                      i = {},
                      s = 0;
                    if (Z.isArray(t)) {
                      for (r = _e(e), o = t.length; o > s; s++)
                        i[t[s]] = Z.css(e, t[s], !1, r);
                      return i;
                    }
                    return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
              show: function() {
                return E(this, !0);
              },
              hide: function() {
                return E(this);
              },
              toggle: function(e) {
                return 'boolean' == typeof e
                  ? e
                    ? this.show()
                    : this.hide()
                  : this.each(function() {
                      Ce(this) ? Z(this).show() : Z(this).hide();
                    });
              }
            }),
            (Z.Tween = S),
            (S.prototype = {
              constructor: S,
              init: function(e, t, n, r, o, i) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = o || 'swing'),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = i || (Z.cssNumber[n] ? '' : 'px'));
              },
              cur: function() {
                var e = S.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : S.propHooks._default.get(this);
              },
              run: function(e) {
                var t,
                  n = S.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t = Z.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration
                      ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : S.propHooks._default.set(this),
                  this
                );
              }
            }),
            (S.prototype.init.prototype = S.prototype),
            (S.propHooks = {
              _default: {
                get: function(e) {
                  var t;
                  return null == e.elem[e.prop] ||
                    (e.elem.style && null != e.elem.style[e.prop])
                    ? ((t = Z.css(e.elem, e.prop, '')),
                      t && 'auto' !== t ? t : 0)
                    : e.elem[e.prop];
                },
                set: function(e) {
                  Z.fx.step[e.prop]
                    ? Z.fx.step[e.prop](e)
                    : e.elem.style &&
                      (null != e.elem.style[Z.cssProps[e.prop]] ||
                        Z.cssHooks[e.prop])
                    ? Z.style(e.elem, e.prop, e.now + e.unit)
                    : (e.elem[e.prop] = e.now);
                }
              }
            }),
            (S.propHooks.scrollTop = S.propHooks.scrollLeft = {
              set: function(e) {
                e.elem.nodeType &&
                  e.elem.parentNode &&
                  (e.elem[e.prop] = e.now);
              }
            }),
            (Z.easing = {
              linear: function(e) {
                return e;
              },
              swing: function(e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              }
            }),
            (Z.fx = S.prototype.init),
            (Z.fx.step = {});
          var Je,
            Qe,
            Ke = /^(?:toggle|show|hide)$/,
            Ze = new RegExp('^(?:([+-])=|)(' + we + ')([a-z%]*)$', 'i'),
            et = /queueHooks$/,
            tt = [O],
            nt = {
              '*': [
                function(e, t) {
                  var n = this.createTween(e, t),
                    r = n.cur(),
                    o = Ze.exec(t),
                    i = (o && o[3]) || (Z.cssNumber[e] ? '' : 'px'),
                    s =
                      (Z.cssNumber[e] || ('px' !== i && +r)) &&
                      Ze.exec(Z.css(n.elem, e)),
                    a = 1,
                    u = 20;
                  if (s && s[3] !== i) {
                    (i = i || s[3]), (o = o || []), (s = +r || 1);
                    do (a = a || '.5'), (s /= a), Z.style(n.elem, e, s + i);
                    while (a !== (a = n.cur() / r) && 1 !== a && --u);
                  }
                  return (
                    o &&
                      ((s = n.start = +s || +r || 0),
                      (n.unit = i),
                      (n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2])),
                    n
                  );
                }
              ]
            };
          (Z.Animation = Z.extend(H, {
            tweener: function(e, t) {
              Z.isFunction(e) ? ((t = e), (e = ['*'])) : (e = e.split(' '));
              for (var n, r = 0, o = e.length; o > r; r++)
                (n = e[r]), (nt[n] = nt[n] || []), nt[n].unshift(t);
            },
            prefilter: function(e, t) {
              t ? tt.unshift(e) : tt.push(e);
            }
          })),
            (Z.speed = function(e, t, n) {
              var r =
                e && 'object' == typeof e
                  ? Z.extend({}, e)
                  : {
                      complete: n || (!n && t) || (Z.isFunction(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !Z.isFunction(t) && t)
                    };
              return (
                (r.duration = Z.fx.off
                  ? 0
                  : 'number' == typeof r.duration
                  ? r.duration
                  : r.duration in Z.fx.speeds
                  ? Z.fx.speeds[r.duration]
                  : Z.fx.speeds._default),
                (null == r.queue || r.queue === !0) && (r.queue = 'fx'),
                (r.old = r.complete),
                (r.complete = function() {
                  Z.isFunction(r.old) && r.old.call(this),
                    r.queue && Z.dequeue(this, r.queue);
                }),
                r
              );
            }),
            Z.fn.extend({
              fadeTo: function(e, t, n, r) {
                return this.filter(Ce)
                  .css('opacity', 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function(e, t, n, r) {
                var o = Z.isEmptyObject(e),
                  i = Z.speed(t, n, r),
                  s = function() {
                    var t = H(this, Z.extend({}, e), i);
                    (o || ve.get(this, 'finish')) && t.stop(!0);
                  };
                return (
                  (s.finish = s),
                  o || i.queue === !1 ? this.each(s) : this.queue(i.queue, s)
                );
              },
              stop: function(e, t, n) {
                var r = function(e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  'string' != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && e !== !1 && this.queue(e || 'fx', []),
                  this.each(function() {
                    var t = !0,
                      o = null != e && e + 'queueHooks',
                      i = Z.timers,
                      s = ve.get(this);
                    if (o) s[o] && s[o].stop && r(s[o]);
                    else
                      for (o in s) s[o] && s[o].stop && et.test(o) && r(s[o]);
                    for (o = i.length; o--; )
                      i[o].elem !== this ||
                        (null != e && i[o].queue !== e) ||
                        (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                    (t || !n) && Z.dequeue(this, e);
                  })
                );
              },
              finish: function(e) {
                return (
                  e !== !1 && (e = e || 'fx'),
                  this.each(function() {
                    var t,
                      n = ve.get(this),
                      r = n[e + 'queue'],
                      o = n[e + 'queueHooks'],
                      i = Z.timers,
                      s = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        Z.queue(this, e, []),
                        o && o.stop && o.stop.call(this, !0),
                        t = i.length;
                      t--;

                    )
                      i[t].elem === this &&
                        i[t].queue === e &&
                        (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; s > t; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              }
            }),
            Z.each(['toggle', 'show', 'hide'], function(e, t) {
              var n = Z.fn[t];
              Z.fn[t] = function(e, r, o) {
                return null == e || 'boolean' == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(D(t, !0), e, r, o);
              };
            }),
            Z.each(
              {
                slideDown: D('show'),
                slideUp: D('hide'),
                slideToggle: D('toggle'),
                fadeIn: { opacity: 'show' },
                fadeOut: { opacity: 'hide' },
                fadeToggle: { opacity: 'toggle' }
              },
              function(e, t) {
                Z.fn[e] = function(e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (Z.timers = []),
            (Z.fx.tick = function() {
              var e,
                t = 0,
                n = Z.timers;
              for (Je = Z.now(); t < n.length; t++)
                (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
              n.length || Z.fx.stop(), (Je = void 0);
            }),
            (Z.fx.timer = function(e) {
              Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop();
            }),
            (Z.fx.interval = 13),
            (Z.fx.start = function() {
              Qe || (Qe = setInterval(Z.fx.tick, Z.fx.interval));
            }),
            (Z.fx.stop = function() {
              clearInterval(Qe), (Qe = null);
            }),
            (Z.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (Z.fn.delay = function(e, t) {
              return (
                (e = Z.fx ? Z.fx.speeds[e] || e : e),
                (t = t || 'fx'),
                this.queue(t, function(t, n) {
                  var r = setTimeout(t, e);
                  n.stop = function() {
                    clearTimeout(r);
                  };
                })
              );
            }),
            (function() {
              var e = Q.createElement('input'),
                t = Q.createElement('select'),
                n = t.appendChild(Q.createElement('option'));
              (e.type = 'checkbox'),
                (J.checkOn = '' !== e.value),
                (J.optSelected = n.selected),
                (t.disabled = !0),
                (J.optDisabled = !n.disabled),
                (e = Q.createElement('input')),
                (e.value = 't'),
                (e.type = 'radio'),
                (J.radioValue = 't' === e.value);
            })();
          var rt,
            ot,
            it = Z.expr.attrHandle;
          Z.fn.extend({
            attr: function(e, t) {
              return me(this, Z.attr, e, t, arguments.length > 1);
            },
            removeAttr: function(e) {
              return this.each(function() {
                Z.removeAttr(this, e);
              });
            }
          }),
            Z.extend({
              attr: function(e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (e && 3 !== i && 8 !== i && 2 !== i)
                  return typeof e.getAttribute === ke
                    ? Z.prop(e, t, n)
                    : ((1 === i && Z.isXMLDoc(e)) ||
                        ((t = t.toLowerCase()),
                        (r =
                          Z.attrHooks[t] ||
                          (Z.expr.match.bool.test(t) ? ot : rt))),
                      void 0 === n
                        ? r && 'get' in r && null !== (o = r.get(e, t))
                          ? o
                          : ((o = Z.find.attr(e, t)), null == o ? void 0 : o)
                        : null !== n
                        ? r && 'set' in r && void 0 !== (o = r.set(e, n, t))
                          ? o
                          : (e.setAttribute(t, n + ''), n)
                        : void Z.removeAttr(e, t));
              },
              removeAttr: function(e, t) {
                var n,
                  r,
                  o = 0,
                  i = t && t.match(he);
                if (i && 1 === e.nodeType)
                  for (; (n = i[o++]); )
                    (r = Z.propFix[n] || n),
                      Z.expr.match.bool.test(n) && (e[r] = !1),
                      e.removeAttribute(n);
              },
              attrHooks: {
                type: {
                  set: function(e, t) {
                    if (
                      !J.radioValue &&
                      'radio' === t &&
                      Z.nodeName(e, 'input')
                    ) {
                      var n = e.value;
                      return e.setAttribute('type', t), n && (e.value = n), t;
                    }
                  }
                }
              }
            }),
            (ot = {
              set: function(e, t, n) {
                return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n;
              }
            }),
            Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
              var n = it[t] || Z.find.attr;
              it[t] = function(e, t, r) {
                var o, i;
                return (
                  r ||
                    ((i = it[t]),
                    (it[t] = o),
                    (o = null != n(e, t, r) ? t.toLowerCase() : null),
                    (it[t] = i)),
                  o
                );
              };
            });
          var st = /^(?:input|select|textarea|button)$/i;
          Z.fn.extend({
            prop: function(e, t) {
              return me(this, Z.prop, e, t, arguments.length > 1);
            },
            removeProp: function(e) {
              return this.each(function() {
                delete this[Z.propFix[e] || e];
              });
            }
          }),
            Z.extend({
              propFix: { for: 'htmlFor', class: 'className' },
              prop: function(e, t, n) {
                var r,
                  o,
                  i,
                  s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s)
                  return (
                    (i = 1 !== s || !Z.isXMLDoc(e)),
                    i && ((t = Z.propFix[t] || t), (o = Z.propHooks[t])),
                    void 0 !== n
                      ? o && 'set' in o && void 0 !== (r = o.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : o && 'get' in o && null !== (r = o.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function(e) {
                    return e.hasAttribute('tabindex') ||
                      st.test(e.nodeName) ||
                      e.href
                      ? e.tabIndex
                      : -1;
                  }
                }
              }
            }),
            J.optSelected ||
              (Z.propHooks.selected = {
                get: function(e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                }
              }),
            Z.each(
              [
                'tabIndex',
                'readOnly',
                'maxLength',
                'cellSpacing',
                'cellPadding',
                'rowSpan',
                'colSpan',
                'useMap',
                'frameBorder',
                'contentEditable'
              ],
              function() {
                Z.propFix[this.toLowerCase()] = this;
              }
            );
          var at = /[\t\r\n\f]/g;
          Z.fn.extend({
            addClass: function(e) {
              var t,
                n,
                r,
                o,
                i,
                s,
                a = 'string' == typeof e && e,
                u = 0,
                l = this.length;
              if (Z.isFunction(e))
                return this.each(function(t) {
                  Z(this).addClass(e.call(this, t, this.className));
                });
              if (a)
                for (t = (e || '').match(he) || []; l > u; u++)
                  if (
                    ((n = this[u]),
                    (r =
                      1 === n.nodeType &&
                      (n.className
                        ? (' ' + n.className + ' ').replace(at, ' ')
                        : ' ')))
                  ) {
                    for (i = 0; (o = t[i++]); )
                      r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
                    (s = Z.trim(r)), n.className !== s && (n.className = s);
                  }
              return this;
            },
            removeClass: function(e) {
              var t,
                n,
                r,
                o,
                i,
                s,
                a = 0 === arguments.length || ('string' == typeof e && e),
                u = 0,
                l = this.length;
              if (Z.isFunction(e))
                return this.each(function(t) {
                  Z(this).removeClass(e.call(this, t, this.className));
                });
              if (a)
                for (t = (e || '').match(he) || []; l > u; u++)
                  if (
                    ((n = this[u]),
                    (r =
                      1 === n.nodeType &&
                      (n.className
                        ? (' ' + n.className + ' ').replace(at, ' ')
                        : '')))
                  ) {
                    for (i = 0; (o = t[i++]); )
                      for (; r.indexOf(' ' + o + ' ') >= 0; )
                        r = r.replace(' ' + o + ' ', ' ');
                    (s = e ? Z.trim(r) : ''),
                      n.className !== s && (n.className = s);
                  }
              return this;
            },
            toggleClass: function(e, t) {
              var n = typeof e;
              return 'boolean' == typeof t && 'string' === n
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : Z.isFunction(e)
                ? this.each(function(n) {
                    Z(this).toggleClass(e.call(this, n, this.className, t), t);
                  })
                : this.each(function() {
                    if ('string' === n)
                      for (
                        var t, r = 0, o = Z(this), i = e.match(he) || [];
                        (t = i[r++]);

                      )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else
                      (n === ke || 'boolean' === n) &&
                        (this.className &&
                          ve.set(this, '__className__', this.className),
                        (this.className =
                          this.className || e === !1
                            ? ''
                            : ve.get(this, '__className__') || ''));
                  });
            },
            hasClass: function(e) {
              for (var t = ' ' + e + ' ', n = 0, r = this.length; r > n; n++)
                if (
                  1 === this[n].nodeType &&
                  (' ' + this[n].className + ' ').replace(at, ' ').indexOf(t) >=
                    0
                )
                  return !0;
              return !1;
            }
          });
          var ut = /\r/g;
          Z.fn.extend({
            val: function(e) {
              var t,
                n,
                r,
                o = this[0];
              {
                if (arguments.length)
                  return (
                    (r = Z.isFunction(e)),
                    this.each(function(n) {
                      var o;
                      1 === this.nodeType &&
                        ((o = r ? e.call(this, n, Z(this).val()) : e),
                        null == o
                          ? (o = '')
                          : 'number' == typeof o
                          ? (o += '')
                          : Z.isArray(o) &&
                            (o = Z.map(o, function(e) {
                              return null == e ? '' : e + '';
                            })),
                        (t =
                          Z.valHooks[this.type] ||
                          Z.valHooks[this.nodeName.toLowerCase()]),
                        (t &&
                          'set' in t &&
                          void 0 !== t.set(this, o, 'value')) ||
                          (this.value = o));
                    })
                  );
                if (o)
                  return (
                    (t =
                      Z.valHooks[o.type] ||
                      Z.valHooks[o.nodeName.toLowerCase()]),
                    t && 'get' in t && void 0 !== (n = t.get(o, 'value'))
                      ? n
                      : ((n = o.value),
                        'string' == typeof n
                          ? n.replace(ut, '')
                          : null == n
                          ? ''
                          : n)
                  );
              }
            }
          }),
            Z.extend({
              valHooks: {
                option: {
                  get: function(e) {
                    var t = Z.find.attr(e, 'value');
                    return null != t ? t : Z.trim(Z.text(e));
                  }
                },
                select: {
                  get: function(e) {
                    for (
                      var t,
                        n,
                        r = e.options,
                        o = e.selectedIndex,
                        i = 'select-one' === e.type || 0 > o,
                        s = i ? null : [],
                        a = i ? o + 1 : r.length,
                        u = 0 > o ? a : i ? o : 0;
                      a > u;
                      u++
                    )
                      if (
                        ((n = r[u]),
                        (n.selected || u === o) &&
                          (J.optDisabled
                            ? !n.disabled
                            : null === n.getAttribute('disabled')) &&
                          (!n.parentNode.disabled ||
                            !Z.nodeName(n.parentNode, 'optgroup')))
                      ) {
                        if (((t = Z(n).val()), i)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function(e, t) {
                    for (
                      var n, r, o = e.options, i = Z.makeArray(t), s = o.length;
                      s--;

                    )
                      (r = o[s]),
                        (r.selected = Z.inArray(r.value, i) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), i;
                  }
                }
              }
            }),
            Z.each(['radio', 'checkbox'], function() {
              (Z.valHooks[this] = {
                set: function(e, t) {
                  return Z.isArray(t)
                    ? (e.checked = Z.inArray(Z(e).val(), t) >= 0)
                    : void 0;
                }
              }),
                J.checkOn ||
                  (Z.valHooks[this].get = function(e) {
                    return null === e.getAttribute('value') ? 'on' : e.value;
                  });
            }),
            Z.each(
              'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
                ' '
              ),
              function(e, t) {
                Z.fn[t] = function(e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            ),
            Z.fn.extend({
              hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
              bind: function(e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function(e, t) {
                return this.off(e, null, t);
              },
              delegate: function(e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function(e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, '**')
                  : this.off(t, e || '**', n);
              }
            });
          var lt = Z.now(),
            ct = /\?/;
          (Z.parseJSON = function(e) {
            return JSON.parse(e + '');
          }),
            (Z.parseXML = function(e) {
              var t, n;
              if (!e || 'string' != typeof e) return null;
              try {
                (n = new DOMParser()), (t = n.parseFromString(e, 'text/xml'));
              } catch (r) {
                t = void 0;
              }
              return (
                (!t || t.getElementsByTagName('parsererror').length) &&
                  Z.error('Invalid XML: ' + e),
                t
              );
            });
          var ft = /#.*$/,
            pt = /([?&])_=[^&]*/,
            ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            dt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            gt = /^(?:GET|HEAD)$/,
            mt = /^\/\//,
            vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            yt = {},
            xt = {},
            bt = '*/'.concat('*'),
            wt = e.location.href,
            Tt = vt.exec(wt.toLowerCase()) || [];
          Z.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: wt,
              type: 'GET',
              isLocal: dt.test(Tt[1]),
              global: !0,
              processData: !0,
              async: !0,
              contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
              accepts: {
                '*': bt,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript'
              },
              contents: { xml: /xml/, html: /html/, json: /json/ },
              responseFields: {
                xml: 'responseXML',
                text: 'responseText',
                json: 'responseJSON'
              },
              converters: {
                '* text': String,
                'text html': !0,
                'text json': Z.parseJSON,
                'text xml': Z.parseXML
              },
              flatOptions: { url: !0, context: !0 }
            },
            ajaxSetup: function(e, t) {
              return t ? P(P(e, Z.ajaxSettings), t) : P(Z.ajaxSettings, e);
            },
            ajaxPrefilter: F(yt),
            ajaxTransport: F(xt),
            ajax: function(e, t) {
              function n(e, t, n, s) {
                var u,
                  c,
                  v,
                  y,
                  b,
                  T = t;
                2 !== x &&
                  ((x = 2),
                  a && clearTimeout(a),
                  (r = void 0),
                  (i = s || ''),
                  (w.readyState = e > 0 ? 4 : 0),
                  (u = (e >= 200 && 300 > e) || 304 === e),
                  n && (y = I(f, w, n)),
                  (y = M(f, y, w, u)),
                  u
                    ? (f.ifModified &&
                        ((b = w.getResponseHeader('Last-Modified')),
                        b && (Z.lastModified[o] = b),
                        (b = w.getResponseHeader('etag')),
                        b && (Z.etag[o] = b)),
                      204 === e || 'HEAD' === f.type
                        ? (T = 'nocontent')
                        : 304 === e
                        ? (T = 'notmodified')
                        : ((T = y.state),
                          (c = y.data),
                          (v = y.error),
                          (u = !v)))
                    : ((v = T), (e || !T) && ((T = 'error'), 0 > e && (e = 0))),
                  (w.status = e),
                  (w.statusText = (t || T) + ''),
                  u ? d.resolveWith(p, [c, T, w]) : d.rejectWith(p, [w, T, v]),
                  w.statusCode(m),
                  (m = void 0),
                  l &&
                    h.trigger(u ? 'ajaxSuccess' : 'ajaxError', [
                      w,
                      f,
                      u ? c : v
                    ]),
                  g.fireWith(p, [w, T]),
                  l &&
                    (h.trigger('ajaxComplete', [w, f]),
                    --Z.active || Z.event.trigger('ajaxStop')));
              }
              'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
              var r,
                o,
                i,
                s,
                a,
                u,
                l,
                c,
                f = Z.ajaxSetup({}, t),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
                d = Z.Deferred(),
                g = Z.Callbacks('once memory'),
                m = f.statusCode || {},
                v = {},
                y = {},
                x = 0,
                b = 'canceled',
                w = {
                  readyState: 0,
                  getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                      if (!s)
                        for (s = {}; (t = ht.exec(i)); )
                          s[t[1].toLowerCase()] = t[2];
                      t = s[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                  },
                  getAllResponseHeaders: function() {
                    return 2 === x ? i : null;
                  },
                  setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || ((e = y[n] = y[n] || e), (v[e] = t)), this;
                  },
                  overrideMimeType: function(e) {
                    return x || (f.mimeType = e), this;
                  },
                  statusCode: function(e) {
                    var t;
                    if (e)
                      if (2 > x) for (t in e) m[t] = [m[t], e[t]];
                      else w.always(e[w.status]);
                    return this;
                  },
                  abort: function(e) {
                    var t = e || b;
                    return r && r.abort(t), n(0, t), this;
                  }
                };
              if (
                ((d.promise(w).complete = g.add),
                (w.success = w.done),
                (w.error = w.fail),
                (f.url = ((e || f.url || wt) + '')
                  .replace(ft, '')
                  .replace(mt, Tt[1] + '//')),
                (f.type = t.method || t.type || f.method || f.type),
                (f.dataTypes = Z.trim(f.dataType || '*')
                  .toLowerCase()
                  .match(he) || ['']),
                null == f.crossDomain &&
                  ((u = vt.exec(f.url.toLowerCase())),
                  (f.crossDomain = !(
                    !u ||
                    (u[1] === Tt[1] &&
                      u[2] === Tt[2] &&
                      (u[3] || ('http:' === u[1] ? '80' : '443')) ===
                        (Tt[3] || ('http:' === Tt[1] ? '80' : '443')))
                  ))),
                f.data &&
                  f.processData &&
                  'string' != typeof f.data &&
                  (f.data = Z.param(f.data, f.traditional)),
                R(yt, f, t, w),
                2 === x)
              )
                return w;
              (l = Z.event && f.global),
                l && 0 === Z.active++ && Z.event.trigger('ajaxStart'),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !gt.test(f.type)),
                (o = f.url),
                f.hasContent ||
                  (f.data &&
                    ((o = f.url += (ct.test(o) ? '&' : '?') + f.data),
                    delete f.data),
                  f.cache === !1 &&
                    (f.url = pt.test(o)
                      ? o.replace(pt, '$1_=' + lt++)
                      : o + (ct.test(o) ? '&' : '?') + '_=' + lt++)),
                f.ifModified &&
                  (Z.lastModified[o] &&
                    w.setRequestHeader('If-Modified-Since', Z.lastModified[o]),
                  Z.etag[o] && w.setRequestHeader('If-None-Match', Z.etag[o])),
                ((f.data && f.hasContent && f.contentType !== !1) ||
                  t.contentType) &&
                  w.setRequestHeader('Content-Type', f.contentType),
                w.setRequestHeader(
                  'Accept',
                  f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                    ? f.accepts[f.dataTypes[0]] +
                        ('*' !== f.dataTypes[0] ? ', ' + bt + '; q=0.01' : '')
                    : f.accepts['*']
                );
              for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
              if (
                f.beforeSend &&
                (f.beforeSend.call(p, w, f) === !1 || 2 === x)
              )
                return w.abort();
              b = 'abort';
              for (c in { success: 1, error: 1, complete: 1 }) w[c](f[c]);
              if ((r = R(xt, f, t, w))) {
                (w.readyState = 1),
                  l && h.trigger('ajaxSend', [w, f]),
                  f.async &&
                    f.timeout > 0 &&
                    (a = setTimeout(function() {
                      w.abort('timeout');
                    }, f.timeout));
                try {
                  (x = 1), r.send(v, n);
                } catch (T) {
                  if (!(2 > x)) throw T;
                  n(-1, T);
                }
              } else n(-1, 'No Transport');
              return w;
            },
            getJSON: function(e, t, n) {
              return Z.get(e, t, n, 'json');
            },
            getScript: function(e, t) {
              return Z.get(e, void 0, t, 'script');
            }
          }),
            Z.each(['get', 'post'], function(e, t) {
              Z[t] = function(e, n, r, o) {
                return (
                  Z.isFunction(n) && ((o = o || r), (r = n), (n = void 0)),
                  Z.ajax({ url: e, type: t, dataType: o, data: n, success: r })
                );
              };
            }),
            (Z._evalUrl = function(e) {
              return Z.ajax({
                url: e,
                type: 'GET',
                dataType: 'script',
                async: !1,
                global: !1,
                throws: !0
              });
            }),
            Z.fn.extend({
              wrapAll: function(e) {
                var t;
                return Z.isFunction(e)
                  ? this.each(function(t) {
                      Z(this).wrapAll(e.call(this, t));
                    })
                  : (this[0] &&
                      ((t = Z(e, this[0].ownerDocument)
                        .eq(0)
                        .clone(!0)),
                      this[0].parentNode && t.insertBefore(this[0]),
                      t
                        .map(function() {
                          for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                          return e;
                        })
                        .append(this)),
                    this);
              },
              wrapInner: function(e) {
                return Z.isFunction(e)
                  ? this.each(function(t) {
                      Z(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function() {
                      var t = Z(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function(e) {
                var t = Z.isFunction(e);
                return this.each(function(n) {
                  Z(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function() {
                return this.parent()
                  .each(function() {
                    Z.nodeName(this, 'body') ||
                      Z(this).replaceWith(this.childNodes);
                  })
                  .end();
              }
            }),
            (Z.expr.filters.hidden = function(e) {
              return e.offsetWidth <= 0 && e.offsetHeight <= 0;
            }),
            (Z.expr.filters.visible = function(e) {
              return !Z.expr.filters.hidden(e);
            });
          var Ct = /%20/g,
            jt = /\[\]$/,
            kt = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            Et = /^(?:input|select|textarea|keygen)/i;
          (Z.param = function(e, t) {
            var n,
              r = [],
              o = function(e, t) {
                (t = Z.isFunction(t) ? t() : null == t ? '' : t),
                  (r[r.length] =
                    encodeURIComponent(e) + '=' + encodeURIComponent(t));
              };
            if (
              (void 0 === t &&
                (t = Z.ajaxSettings && Z.ajaxSettings.traditional),
              Z.isArray(e) || (e.jquery && !Z.isPlainObject(e)))
            )
              Z.each(e, function() {
                o(this.name, this.value);
              });
            else for (n in e) $(n, e[n], t, o);
            return r.join('&').replace(Ct, '+');
          }),
            Z.fn.extend({
              serialize: function() {
                return Z.param(this.serializeArray());
              },
              serializeArray: function() {
                return this.map(function() {
                  var e = Z.prop(this, 'elements');
                  return e ? Z.makeArray(e) : this;
                })
                  .filter(function() {
                    var e = this.type;
                    return (
                      this.name &&
                      !Z(this).is(':disabled') &&
                      Et.test(this.nodeName) &&
                      !Nt.test(e) &&
                      (this.checked || !je.test(e))
                    );
                  })
                  .map(function(e, t) {
                    var n = Z(this).val();
                    return null == n
                      ? null
                      : Z.isArray(n)
                      ? Z.map(n, function(e) {
                          return { name: t.name, value: e.replace(kt, '\r\n') };
                        })
                      : { name: t.name, value: n.replace(kt, '\r\n') };
                  })
                  .get();
              }
            }),
            (Z.ajaxSettings.xhr = function() {
              try {
                return new XMLHttpRequest();
              } catch (e) {}
            });
          var St = 0,
            At = {},
            Dt = { 0: 200, 1223: 204 },
            qt = Z.ajaxSettings.xhr();
          e.attachEvent &&
            e.attachEvent('onunload', function() {
              for (var e in At) At[e]();
            }),
            (J.cors = !!qt && 'withCredentials' in qt),
            (J.ajax = qt = !!qt),
            Z.ajaxTransport(function(e) {
              var t;
              return J.cors || (qt && !e.crossDomain)
                ? {
                    send: function(n, r) {
                      var o,
                        i = e.xhr(),
                        s = ++St;
                      if (
                        (i.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                      )
                        for (o in e.xhrFields) i[o] = e.xhrFields[o];
                      e.mimeType &&
                        i.overrideMimeType &&
                        i.overrideMimeType(e.mimeType),
                        e.crossDomain ||
                          n['X-Requested-With'] ||
                          (n['X-Requested-With'] = 'XMLHttpRequest');
                      for (o in n) i.setRequestHeader(o, n[o]);
                      (t = function(e) {
                        return function() {
                          t &&
                            (delete At[s],
                            (t = i.onload = i.onerror = null),
                            'abort' === e
                              ? i.abort()
                              : 'error' === e
                              ? r(i.status, i.statusText)
                              : r(
                                  Dt[i.status] || i.status,
                                  i.statusText,
                                  'string' == typeof i.responseText
                                    ? { text: i.responseText }
                                    : void 0,
                                  i.getAllResponseHeaders()
                                ));
                        };
                      }),
                        (i.onload = t()),
                        (i.onerror = t('error')),
                        (t = At[s] = t('abort'));
                      try {
                        i.send((e.hasContent && e.data) || null);
                      } catch (a) {
                        if (t) throw a;
                      }
                    },
                    abort: function() {
                      t && t();
                    }
                  }
                : void 0;
            }),
            Z.ajaxSetup({
              accepts: {
                script:
                  'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
              },
              contents: { script: /(?:java|ecma)script/ },
              converters: {
                'text script': function(e) {
                  return Z.globalEval(e), e;
                }
              }
            }),
            Z.ajaxPrefilter('script', function(e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = 'GET');
            }),
            Z.ajaxTransport('script', function(e) {
              if (e.crossDomain) {
                var t, n;
                return {
                  send: function(r, o) {
                    (t = Z('<script>')
                      .prop({ async: !0, charset: e.scriptCharset, src: e.url })
                      .on(
                        'load error',
                        (n = function(e) {
                          t.remove(),
                            (n = null),
                            e && o('error' === e.type ? 404 : 200, e.type);
                        })
                      )),
                      Q.head.appendChild(t[0]);
                  },
                  abort: function() {
                    n && n();
                  }
                };
              }
            });
          var Ot = [],
            Lt = /(=)\?(?=&|$)|\?\?/;
          Z.ajaxSetup({
            jsonp: 'callback',
            jsonpCallback: function() {
              var e = Ot.pop() || Z.expando + '_' + lt++;
              return (this[e] = !0), e;
            }
          }),
            Z.ajaxPrefilter('json jsonp', function(t, n, r) {
              var o,
                i,
                s,
                a =
                  t.jsonp !== !1 &&
                  (Lt.test(t.url)
                    ? 'url'
                    : 'string' == typeof t.data &&
                      !(t.contentType || '').indexOf(
                        'application/x-www-form-urlencoded'
                      ) &&
                      Lt.test(t.data) &&
                      'data');
              return a || 'jsonp' === t.dataTypes[0]
                ? ((o = t.jsonpCallback = Z.isFunction(t.jsonpCallback)
                    ? t.jsonpCallback()
                    : t.jsonpCallback),
                  a
                    ? (t[a] = t[a].replace(Lt, '$1' + o))
                    : t.jsonp !== !1 &&
                      (t.url +=
                        (ct.test(t.url) ? '&' : '?') + t.jsonp + '=' + o),
                  (t.converters['script json'] = function() {
                    return s || Z.error(o + ' was not called'), s[0];
                  }),
                  (t.dataTypes[0] = 'json'),
                  (i = e[o]),
                  (e[o] = function() {
                    s = arguments;
                  }),
                  r.always(function() {
                    (e[o] = i),
                      t[o] && ((t.jsonpCallback = n.jsonpCallback), Ot.push(o)),
                      s && Z.isFunction(i) && i(s[0]),
                      (s = i = void 0);
                  }),
                  'script')
                : void 0;
            }),
            (Z.parseHTML = function(e, t, n) {
              if (!e || 'string' != typeof e) return null;
              'boolean' == typeof t && ((n = t), (t = !1)), (t = t || Q);
              var r = se.exec(e),
                o = !n && [];
              return r
                ? [t.createElement(r[1])]
                : ((r = Z.buildFragment([e], t, o)),
                  o && o.length && Z(o).remove(),
                  Z.merge([], r.childNodes));
            });
          var Ht = Z.fn.load;
          (Z.fn.load = function(e, t, n) {
            if ('string' != typeof e && Ht) return Ht.apply(this, arguments);
            var r,
              o,
              i,
              s = this,
              a = e.indexOf(' ');
            return (
              a >= 0 && ((r = Z.trim(e.slice(a))), (e = e.slice(0, a))),
              Z.isFunction(t)
                ? ((n = t), (t = void 0))
                : t && 'object' == typeof t && (o = 'POST'),
              s.length > 0 &&
                Z.ajax({ url: e, type: o, dataType: 'html', data: t })
                  .done(function(e) {
                    (i = arguments),
                      s.html(
                        r
                          ? Z('<div>')
                              .append(Z.parseHTML(e))
                              .find(r)
                          : e
                      );
                  })
                  .complete(
                    n &&
                      function(e, t) {
                        s.each(n, i || [e.responseText, t, e]);
                      }
                  ),
              this
            );
          }),
            Z.each(
              [
                'ajaxStart',
                'ajaxStop',
                'ajaxComplete',
                'ajaxError',
                'ajaxSuccess',
                'ajaxSend'
              ],
              function(e, t) {
                Z.fn[t] = function(e) {
                  return this.on(t, e);
                };
              }
            ),
            (Z.expr.filters.animated = function(e) {
              return Z.grep(Z.timers, function(t) {
                return e === t.elem;
              }).length;
            });
          var Ft = e.document.documentElement;
          (Z.offset = {
            setOffset: function(e, t, n) {
              var r,
                o,
                i,
                s,
                a,
                u,
                l,
                c = Z.css(e, 'position'),
                f = Z(e),
                p = {};
              'static' === c && (e.style.position = 'relative'),
                (a = f.offset()),
                (i = Z.css(e, 'top')),
                (u = Z.css(e, 'left')),
                (l =
                  ('absolute' === c || 'fixed' === c) &&
                  (i + u).indexOf('auto') > -1),
                l
                  ? ((r = f.position()), (s = r.top), (o = r.left))
                  : ((s = parseFloat(i) || 0), (o = parseFloat(u) || 0)),
                Z.isFunction(t) && (t = t.call(e, n, a)),
                null != t.top && (p.top = t.top - a.top + s),
                null != t.left && (p.left = t.left - a.left + o),
                'using' in t ? t.using.call(e, p) : f.css(p);
            }
          }),
            Z.fn.extend({
              offset: function(e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function(t) {
                        Z.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0],
                  o = { top: 0, left: 0 },
                  i = r && r.ownerDocument;
                if (i)
                  return (
                    (t = i.documentElement),
                    Z.contains(t, r)
                      ? (typeof r.getBoundingClientRect !== ke &&
                          (o = r.getBoundingClientRect()),
                        (n = W(i)),
                        {
                          top: o.top + n.pageYOffset - t.clientTop,
                          left: o.left + n.pageXOffset - t.clientLeft
                        })
                      : o
                  );
              },
              position: function() {
                if (this[0]) {
                  var e,
                    t,
                    n = this[0],
                    r = { top: 0, left: 0 };
                  return (
                    'fixed' === Z.css(n, 'position')
                      ? (t = n.getBoundingClientRect())
                      : ((e = this.offsetParent()),
                        (t = this.offset()),
                        Z.nodeName(e[0], 'html') || (r = e.offset()),
                        (r.top += Z.css(e[0], 'borderTopWidth', !0)),
                        (r.left += Z.css(e[0], 'borderLeftWidth', !0))),
                    {
                      top: t.top - r.top - Z.css(n, 'marginTop', !0),
                      left: t.left - r.left - Z.css(n, 'marginLeft', !0)
                    }
                  );
                }
              },
              offsetParent: function() {
                return this.map(function() {
                  for (
                    var e = this.offsetParent || Ft;
                    e &&
                    !Z.nodeName(e, 'html') &&
                    'static' === Z.css(e, 'position');

                  )
                    e = e.offsetParent;
                  return e || Ft;
                });
              }
            }),
            Z.each(
              { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
              function(t, n) {
                var r = 'pageYOffset' === n;
                Z.fn[t] = function(o) {
                  return me(
                    this,
                    function(t, o, i) {
                      var s = W(t);
                      return void 0 === i
                        ? s
                          ? s[n]
                          : t[o]
                        : void (s
                            ? s.scrollTo(
                                r ? e.pageXOffset : i,
                                r ? i : e.pageYOffset
                              )
                            : (t[o] = i));
                    },
                    t,
                    o,
                    arguments.length,
                    null
                  );
                };
              }
            ),
            Z.each(['top', 'left'], function(e, t) {
              Z.cssHooks[t] = T(J.pixelPosition, function(e, n) {
                return n
                  ? ((n = w(e, t)), Be.test(n) ? Z(e).position()[t] + 'px' : n)
                  : void 0;
              });
            }),
            Z.each({ Height: 'height', Width: 'width' }, function(e, t) {
              Z.each(
                { padding: 'inner' + e, content: t, '': 'outer' + e },
                function(n, r) {
                  Z.fn[r] = function(r, o) {
                    var i = arguments.length && (n || 'boolean' != typeof r),
                      s = n || (r === !0 || o === !0 ? 'margin' : 'border');
                    return me(
                      this,
                      function(t, n, r) {
                        var o;
                        return Z.isWindow(t)
                          ? t.document.documentElement['client' + e]
                          : 9 === t.nodeType
                          ? ((o = t.documentElement),
                            Math.max(
                              t.body['scroll' + e],
                              o['scroll' + e],
                              t.body['offset' + e],
                              o['offset' + e],
                              o['client' + e]
                            ))
                          : void 0 === r
                          ? Z.css(t, n, s)
                          : Z.style(t, n, r, s);
                      },
                      t,
                      i ? r : void 0,
                      i,
                      null
                    );
                  };
                }
              );
            }),
            (Z.fn.size = function() {
              return this.length;
            }),
            (Z.fn.andSelf = Z.fn.addBack),
            'function' == typeof define &&
              define.amd &&
              define('jquery', [], function() {
                return Z;
              });
          var Rt = e.jQuery,
            Pt = e.$;
          return (
            (Z.noConflict = function(t) {
              return (
                e.$ === Z && (e.$ = Pt),
                t && e.jQuery === Z && (e.jQuery = Rt),
                Z
              );
            }),
            typeof t === ke && (e.jQuery = e.$ = Z),
            Z
          );
        });
      },
      {}
    ],
    2: [
      function(e, t, n) {
        (function(e) {
          function t(e, t) {
            for (var n = 0, r = e.length - 1; r >= 0; r--) {
              var o = e[r];
              '.' === o
                ? e.splice(r, 1)
                : '..' === o
                ? (e.splice(r, 1), n++)
                : n && (e.splice(r, 1), n--);
            }
            if (t) for (; n--; n) e.unshift('..');
            return e;
          }
          function r(e, t) {
            if (e.filter) return e.filter(t);
            for (var n = [], r = 0; r < e.length; r++)
              t(e[r], r, e) && n.push(e[r]);
            return n;
          }
          var o = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
            i = function(e) {
              return o.exec(e).slice(1);
            };
          (n.resolve = function() {
            for (
              var n = '', o = !1, i = arguments.length - 1;
              i >= -1 && !o;
              i--
            ) {
              var s = i >= 0 ? arguments[i] : e.cwd();
              if ('string' != typeof s)
                throw new TypeError(
                  'Arguments to path.resolve must be strings'
                );
              s && ((n = s + '/' + n), (o = '/' === s.charAt(0)));
            }
            return (
              (n = t(
                r(n.split('/'), function(e) {
                  return !!e;
                }),
                !o
              ).join('/')),
              (o ? '/' : '') + n || '.'
            );
          }),
            (n.normalize = function(e) {
              var o = n.isAbsolute(e),
                i = '/' === s(e, -1);
              return (
                (e = t(
                  r(e.split('/'), function(e) {
                    return !!e;
                  }),
                  !o
                ).join('/')),
                e || o || (e = '.'),
                e && i && (e += '/'),
                (o ? '/' : '') + e
              );
            }),
            (n.isAbsolute = function(e) {
              return '/' === e.charAt(0);
            }),
            (n.join = function() {
              var e = Array.prototype.slice.call(arguments, 0);
              return n.normalize(
                r(e, function(e, t) {
                  if ('string' != typeof e)
                    throw new TypeError(
                      'Arguments to path.join must be strings'
                    );
                  return e;
                }).join('/')
              );
            }),
            (n.relative = function(e, t) {
              function r(e) {
                for (var t = 0; t < e.length && '' === e[t]; t++);
                for (var n = e.length - 1; n >= 0 && '' === e[n]; n--);
                return t > n ? [] : e.slice(t, n - t + 1);
              }
              (e = n.resolve(e).substr(1)), (t = n.resolve(t).substr(1));
              for (
                var o = r(e.split('/')),
                  i = r(t.split('/')),
                  s = Math.min(o.length, i.length),
                  a = s,
                  u = 0;
                s > u;
                u++
              )
                if (o[u] !== i[u]) {
                  a = u;
                  break;
                }
              for (var l = [], u = a; u < o.length; u++) l.push('..');
              return (l = l.concat(i.slice(a))), l.join('/');
            }),
            (n.sep = '/'),
            (n.delimiter = ':'),
            (n.dirname = function(e) {
              var t = i(e),
                n = t[0],
                r = t[1];
              return n || r
                ? (r && (r = r.substr(0, r.length - 1)), n + r)
                : '.';
            }),
            (n.basename = function(e, t) {
              var n = i(e)[2];
              return (
                t &&
                  n.substr(-1 * t.length) === t &&
                  (n = n.substr(0, n.length - t.length)),
                n
              );
            }),
            (n.extname = function(e) {
              return i(e)[3];
            });
          var s =
            'b' === 'ab'.substr(-1)
              ? function(e, t, n) {
                  return e.substr(t, n);
                }
              : function(e, t, n) {
                  return 0 > t && (t = e.length + t), e.substr(t, n);
                };
        }.call(this, e('_process')));
      },
      { _process: 3 }
    ],
    3: [
      function(e, t, n) {
        function r() {
          (c = !1), a.length ? (l = a.concat(l)) : (f = -1), l.length && o();
        }
        function o() {
          if (!c) {
            var e = setTimeout(r);
            c = !0;
            for (var t = l.length; t; ) {
              for (a = l, l = []; ++f < t; ) a && a[f].run();
              (f = -1), (t = l.length);
            }
            (a = null), (c = !1), clearTimeout(e);
          }
        }
        function i(e, t) {
          (this.fun = e), (this.array = t);
        }
        function s() {}
        var a,
          u = (t.exports = {}),
          l = [],
          c = !1,
          f = -1;
        (u.nextTick = function(e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          l.push(new i(e, t)), 1 !== l.length || c || setTimeout(o, 0);
        }),
          (i.prototype.run = function() {
            this.fun.apply(null, this.array);
          }),
          (u.title = 'browser'),
          (u.browser = !0),
          (u.env = {}),
          (u.argv = []),
          (u.version = ''),
          (u.versions = {}),
          (u.on = s),
          (u.addListener = s),
          (u.once = s),
          (u.off = s),
          (u.removeListener = s),
          (u.removeAllListeners = s),
          (u.emit = s),
          (u.binding = function(e) {
            throw new Error('process.binding is not supported');
          }),
          (u.cwd = function() {
            return '/';
          }),
          (u.chdir = function(e) {
            throw new Error('process.chdir is not supported');
          }),
          (u.umask = function() {
            return 0;
          });
      },
      {}
    ],
    4: [
      function(e, t, n) {
        (function(e) {
          !(function(r) {
            function o(e) {
              throw new RangeError(L[e]);
            }
            function i(e, t) {
              for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
              return r;
            }
            function s(e, t) {
              var n = e.split('@'),
                r = '';
              n.length > 1 && ((r = n[0] + '@'), (e = n[1])),
                (e = e.replace(O, '.'));
              var o = e.split('.'),
                s = i(o, t).join('.');
              return r + s;
            }
            function a(e) {
              for (var t, n, r = [], o = 0, i = e.length; i > o; )
                (t = e.charCodeAt(o++)),
                  t >= 55296 && 56319 >= t && i > o
                    ? ((n = e.charCodeAt(o++)),
                      56320 == (64512 & n)
                        ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                        : (r.push(t), o--))
                    : r.push(t);
              return r;
            }
            function u(e) {
              return i(e, function(e) {
                var t = '';
                return (
                  e > 65535 &&
                    ((e -= 65536),
                    (t += R(((e >>> 10) & 1023) | 55296)),
                    (e = 56320 | (1023 & e))),
                  (t += R(e))
                );
              }).join('');
            }
            function l(e) {
              return 10 > e - 48
                ? e - 22
                : 26 > e - 65
                ? e - 65
                : 26 > e - 97
                ? e - 97
                : T;
            }
            function c(e, t) {
              return e + 22 + 75 * (26 > e) - ((0 != t) << 5);
            }
            function f(e, t, n) {
              var r = 0;
              for (
                e = n ? F(e / N) : e >> 1, e += F(e / t);
                e > (H * j) >> 1;
                r += T
              )
                e = F(e / H);
              return F(r + ((H + 1) * e) / (e + k));
            }
            function p(e) {
              var t,
                n,
                r,
                i,
                s,
                a,
                c,
                p,
                h,
                d,
                g = [],
                m = e.length,
                v = 0,
                y = S,
                x = E;
              for (n = e.lastIndexOf(A), 0 > n && (n = 0), r = 0; n > r; ++r)
                e.charCodeAt(r) >= 128 && o('not-basic'),
                  g.push(e.charCodeAt(r));
              for (i = n > 0 ? n + 1 : 0; m > i; ) {
                for (
                  s = v, a = 1, c = T;
                  i >= m && o('invalid-input'),
                    (p = l(e.charCodeAt(i++))),
                    (p >= T || p > F((w - v) / a)) && o('overflow'),
                    (v += p * a),
                    (h = x >= c ? C : c >= x + j ? j : c - x),
                    !(h > p);
                  c += T
                )
                  (d = T - h), a > F(w / d) && o('overflow'), (a *= d);
                (t = g.length + 1),
                  (x = f(v - s, t, 0 == s)),
                  F(v / t) > w - y && o('overflow'),
                  (y += F(v / t)),
                  (v %= t),
                  g.splice(v++, 0, y);
              }
              return u(g);
            }
            function h(e) {
              var t,
                n,
                r,
                i,
                s,
                u,
                l,
                p,
                h,
                d,
                g,
                m,
                v,
                y,
                x,
                b = [];
              for (
                e = a(e), m = e.length, t = S, n = 0, s = E, u = 0;
                m > u;
                ++u
              )
                (g = e[u]), 128 > g && b.push(R(g));
              for (r = i = b.length, i && b.push(A); m > r; ) {
                for (l = w, u = 0; m > u; ++u)
                  (g = e[u]), g >= t && l > g && (l = g);
                for (
                  v = r + 1,
                    l - t > F((w - n) / v) && o('overflow'),
                    n += (l - t) * v,
                    t = l,
                    u = 0;
                  m > u;
                  ++u
                )
                  if (((g = e[u]), t > g && ++n > w && o('overflow'), g == t)) {
                    for (
                      p = n, h = T;
                      (d = s >= h ? C : h >= s + j ? j : h - s), !(d > p);
                      h += T
                    )
                      (x = p - d),
                        (y = T - d),
                        b.push(R(c(d + (x % y), 0))),
                        (p = F(x / y));
                    b.push(R(c(p, 0))), (s = f(n, v, r == i)), (n = 0), ++r;
                  }
                ++n, ++t;
              }
              return b.join('');
            }
            function d(e) {
              return s(e, function(e) {
                return D.test(e) ? p(e.slice(4).toLowerCase()) : e;
              });
            }
            function g(e) {
              return s(e, function(e) {
                return q.test(e) ? 'xn--' + h(e) : e;
              });
            }
            var m = 'object' == typeof n && n && !n.nodeType && n,
              v = 'object' == typeof t && t && !t.nodeType && t,
              y = 'object' == typeof e && e;
            (y.global === y || y.window === y || y.self === y) && (r = y);
            var x,
              b,
              w = 2147483647,
              T = 36,
              C = 1,
              j = 26,
              k = 38,
              N = 700,
              E = 72,
              S = 128,
              A = '-',
              D = /^xn--/,
              q = /[^\x20-\x7E]/,
              O = /[\x2E\u3002\uFF0E\uFF61]/g,
              L = {
                overflow: 'Overflow: input needs wider integers to process',
                'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                'invalid-input': 'Invalid input'
              },
              H = T - C,
              F = Math.floor,
              R = String.fromCharCode;
            if (
              ((x = {
                version: '1.3.2',
                ucs2: { decode: a, encode: u },
                decode: p,
                encode: h,
                toASCII: g,
                toUnicode: d
              }),
              'function' == typeof define &&
                'object' == typeof define.amd &&
                define.amd)
            )
              define('punycode', function() {
                return x;
              });
            else if (m && v)
              if (t.exports == m) v.exports = x;
              else for (b in x) x.hasOwnProperty(b) && (m[b] = x[b]);
            else r.punycode = x;
          })(this);
        }.call(
          this,
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {}
        ));
      },
      {}
    ],
    5: [
      function(e, t, n) {
        'use strict';
        function r(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        t.exports = function(e, t, n, i) {
          (t = t || '&'), (n = n || '=');
          var s = {};
          if ('string' != typeof e || 0 === e.length) return s;
          var a = /\+/g;
          e = e.split(t);
          var u = 1e3;
          i && 'number' == typeof i.maxKeys && (u = i.maxKeys);
          var l = e.length;
          u > 0 && l > u && (l = u);
          for (var c = 0; l > c; ++c) {
            var f,
              p,
              h,
              d,
              g = e[c].replace(a, '%20'),
              m = g.indexOf(n);
            m >= 0
              ? ((f = g.substr(0, m)), (p = g.substr(m + 1)))
              : ((f = g), (p = '')),
              (h = decodeURIComponent(f)),
              (d = decodeURIComponent(p)),
              r(s, h)
                ? o(s[h])
                  ? s[h].push(d)
                  : (s[h] = [s[h], d])
                : (s[h] = d);
          }
          return s;
        };
        var o =
          Array.isArray ||
          function(e) {
            return '[object Array]' === Object.prototype.toString.call(e);
          };
      },
      {}
    ],
    6: [
      function(e, t, n) {
        'use strict';
        function r(e, t) {
          if (e.map) return e.map(t);
          for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
          return n;
        }
        var o = function(e) {
          switch (typeof e) {
            case 'string':
              return e;
            case 'boolean':
              return e ? 'true' : 'false';
            case 'number':
              return isFinite(e) ? e : '';
            default:
              return '';
          }
        };
        t.exports = function(e, t, n, a) {
          return (
            (t = t || '&'),
            (n = n || '='),
            null === e && (e = void 0),
            'object' == typeof e
              ? r(s(e), function(s) {
                  var a = encodeURIComponent(o(s)) + n;
                  return i(e[s])
                    ? r(e[s], function(e) {
                        return a + encodeURIComponent(o(e));
                      }).join(t)
                    : a + encodeURIComponent(o(e[s]));
                }).join(t)
              : a
              ? encodeURIComponent(o(a)) + n + encodeURIComponent(o(e))
              : ''
          );
        };
        var i =
            Array.isArray ||
            function(e) {
              return '[object Array]' === Object.prototype.toString.call(e);
            },
          s =
            Object.keys ||
            function(e) {
              var t = [];
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
              return t;
            };
      },
      {}
    ],
    7: [
      function(e, t, n) {
        'use strict';
        (n.decode = n.parse = e('./decode')),
          (n.encode = n.stringify = e('./encode'));
      },
      { './decode': 5, './encode': 6 }
    ],
    8: [
      function(e, t, n) {
        'use strict';
        function r() {
          (this.protocol = null),
            (this.slashes = null),
            (this.auth = null),
            (this.host = null),
            (this.port = null),
            (this.hostname = null),
            (this.hash = null),
            (this.search = null),
            (this.query = null),
            (this.pathname = null),
            (this.path = null),
            (this.href = null);
        }
        function o(e, t, n) {
          if (e && l.isObject(e) && e instanceof r) return e;
          var o = new r();
          return o.parse(e, t, n), o;
        }
        function i(e) {
          return (
            l.isString(e) && (e = o(e)),
            e instanceof r ? e.format() : r.prototype.format.call(e)
          );
        }
        function s(e, t) {
          return o(e, !1, !0).resolve(t);
        }
        function a(e, t) {
          return e ? o(e, !1, !0).resolveObject(t) : t;
        }
        var u = e('punycode'),
          l = e('./util');
        (n.parse = o),
          (n.resolve = s),
          (n.resolveObject = a),
          (n.format = i),
          (n.Url = r);
        var c = /^([a-z0-9.+-]+:)/i,
          f = /:[0-9]*$/,
          p = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
          h = ['<', '>', '"', '`', ' ', '\r', '\n', '	'],
          d = ['{', '}', '|', '\\', '^', '`'].concat(h),
          g = ["'"].concat(d),
          m = ['%', '/', '?', ';', '#'].concat(g),
          v = ['/', '?', '#'],
          y = 255,
          x = /^[+a-z0-9A-Z_-]{0,63}$/,
          b = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          w = { javascript: !0, 'javascript:': !0 },
          T = { javascript: !0, 'javascript:': !0 },
          C = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            'http:': !0,
            'https:': !0,
            'ftp:': !0,
            'gopher:': !0,
            'file:': !0
          },
          j = e('querystring');
        (r.prototype.parse = function(e, t, n) {
          if (!l.isString(e))
            throw new TypeError(
              "Parameter 'url' must be a string, not " + typeof e
            );
          var r = e.indexOf('?'),
            o = -1 !== r && r < e.indexOf('#') ? '?' : '#',
            i = e.split(o),
            s = /\\/g;
          (i[0] = i[0].replace(s, '/')), (e = i.join(o));
          var a = e;
          if (((a = a.trim()), !n && 1 === e.split('#').length)) {
            var f = p.exec(a);
            if (f)
              return (
                (this.path = a),
                (this.href = a),
                (this.pathname = f[1]),
                f[2]
                  ? ((this.search = f[2]),
                    t
                      ? (this.query = j.parse(this.search.substr(1)))
                      : (this.query = this.search.substr(1)))
                  : t && ((this.search = ''), (this.query = {})),
                this
              );
          }
          var h = c.exec(a);
          if (h) {
            h = h[0];
            var d = h.toLowerCase();
            (this.protocol = d), (a = a.substr(h.length));
          }
          if (n || h || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var k = '//' === a.substr(0, 2);
            !k || (h && T[h]) || ((a = a.substr(2)), (this.slashes = !0));
          }
          if (!T[h] && (k || (h && !C[h]))) {
            for (var N = -1, E = 0; E < v.length; E++) {
              var S = a.indexOf(v[E]);
              -1 !== S && (-1 === N || N > S) && (N = S);
            }
            var A, D;
            (D = -1 === N ? a.lastIndexOf('@') : a.lastIndexOf('@', N)),
              -1 !== D &&
                ((A = a.slice(0, D)),
                (a = a.slice(D + 1)),
                (this.auth = decodeURIComponent(A))),
              (N = -1);
            for (var E = 0; E < m.length; E++) {
              var S = a.indexOf(m[E]);
              -1 !== S && (-1 === N || N > S) && (N = S);
            }
            -1 === N && (N = a.length),
              (this.host = a.slice(0, N)),
              (a = a.slice(N)),
              this.parseHost(),
              (this.hostname = this.hostname || '');
            var q =
              '[' === this.hostname[0] &&
              ']' === this.hostname[this.hostname.length - 1];
            if (!q)
              for (
                var O = this.hostname.split(/\./), E = 0, L = O.length;
                L > E;
                E++
              ) {
                var H = O[E];
                if (H && !H.match(x)) {
                  for (var F = '', R = 0, P = H.length; P > R; R++)
                    F += H.charCodeAt(R) > 127 ? 'x' : H[R];
                  if (!F.match(x)) {
                    var I = O.slice(0, E),
                      M = O.slice(E + 1),
                      $ = H.match(b);
                    $ && (I.push($[1]), M.unshift($[2])),
                      M.length && (a = '/' + M.join('.') + a),
                      (this.hostname = I.join('.'));
                    break;
                  }
                }
              }
            this.hostname.length > y
              ? (this.hostname = '')
              : (this.hostname = this.hostname.toLowerCase()),
              q || (this.hostname = u.toASCII(this.hostname));
            var W = this.port ? ':' + this.port : '',
              B = this.hostname || '';
            (this.host = B + W),
              (this.href += this.host),
              q &&
                ((this.hostname = this.hostname.substr(
                  1,
                  this.hostname.length - 2
                )),
                '/' !== a[0] && (a = '/' + a));
          }
          if (!w[d])
            for (var E = 0, L = g.length; L > E; E++) {
              var _ = g[E];
              if (-1 !== a.indexOf(_)) {
                var U = encodeURIComponent(_);
                U === _ && (U = escape(_)), (a = a.split(_).join(U));
              }
            }
          var z = a.indexOf('#');
          -1 !== z && ((this.hash = a.substr(z)), (a = a.slice(0, z)));
          var X = a.indexOf('?');
          if (
            (-1 !== X
              ? ((this.search = a.substr(X)),
                (this.query = a.substr(X + 1)),
                t && (this.query = j.parse(this.query)),
                (a = a.slice(0, X)))
              : t && ((this.search = ''), (this.query = {})),
            a && (this.pathname = a),
            C[d] && this.hostname && !this.pathname && (this.pathname = '/'),
            this.pathname || this.search)
          ) {
            var W = this.pathname || '',
              V = this.search || '';
            this.path = W + V;
          }
          return (this.href = this.format()), this;
        }),
          (r.prototype.format = function() {
            var e = this.auth || '';
            e &&
              ((e = encodeURIComponent(e)),
              (e = e.replace(/%3A/i, ':')),
              (e += '@'));
            var t = this.protocol || '',
              n = this.pathname || '',
              r = this.hash || '',
              o = !1,
              i = '';
            this.host
              ? (o = e + this.host)
              : this.hostname &&
                ((o =
                  e +
                  (-1 === this.hostname.indexOf(':')
                    ? this.hostname
                    : '[' + this.hostname + ']')),
                this.port && (o += ':' + this.port)),
              this.query &&
                l.isObject(this.query) &&
                Object.keys(this.query).length &&
                (i = j.stringify(this.query));
            var s = this.search || (i && '?' + i) || '';
            return (
              t && ':' !== t.substr(-1) && (t += ':'),
              this.slashes || ((!t || C[t]) && o !== !1)
                ? ((o = '//' + (o || '')),
                  n && '/' !== n.charAt(0) && (n = '/' + n))
                : o || (o = ''),
              r && '#' !== r.charAt(0) && (r = '#' + r),
              s && '?' !== s.charAt(0) && (s = '?' + s),
              (n = n.replace(/[?#]/g, function(e) {
                return encodeURIComponent(e);
              })),
              (s = s.replace('#', '%23')),
              t + o + n + s + r
            );
          }),
          (r.prototype.resolve = function(e) {
            return this.resolveObject(o(e, !1, !0)).format();
          }),
          (r.prototype.resolveObject = function(e) {
            if (l.isString(e)) {
              var t = new r();
              t.parse(e, !1, !0), (e = t);
            }
            for (
              var n = new r(), o = Object.keys(this), i = 0;
              i < o.length;
              i++
            ) {
              var s = o[i];
              n[s] = this[s];
            }
            if (((n.hash = e.hash), '' === e.href))
              return (n.href = n.format()), n;
            if (e.slashes && !e.protocol) {
              for (var a = Object.keys(e), u = 0; u < a.length; u++) {
                var c = a[u];
                'protocol' !== c && (n[c] = e[c]);
              }
              return (
                C[n.protocol] &&
                  n.hostname &&
                  !n.pathname &&
                  (n.path = n.pathname = '/'),
                (n.href = n.format()),
                n
              );
            }
            if (e.protocol && e.protocol !== n.protocol) {
              if (!C[e.protocol]) {
                for (var f = Object.keys(e), p = 0; p < f.length; p++) {
                  var h = f[p];
                  n[h] = e[h];
                }
                return (n.href = n.format()), n;
              }
              if (((n.protocol = e.protocol), e.host || T[e.protocol]))
                n.pathname = e.pathname;
              else {
                for (
                  var d = (e.pathname || '').split('/');
                  d.length && !(e.host = d.shift());

                );
                e.host || (e.host = ''),
                  e.hostname || (e.hostname = ''),
                  '' !== d[0] && d.unshift(''),
                  d.length < 2 && d.unshift(''),
                  (n.pathname = d.join('/'));
              }
              if (
                ((n.search = e.search),
                (n.query = e.query),
                (n.host = e.host || ''),
                (n.auth = e.auth),
                (n.hostname = e.hostname || e.host),
                (n.port = e.port),
                n.pathname || n.search)
              ) {
                var g = n.pathname || '',
                  m = n.search || '';
                n.path = g + m;
              }
              return (
                (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n
              );
            }
            var v = n.pathname && '/' === n.pathname.charAt(0),
              y = e.host || (e.pathname && '/' === e.pathname.charAt(0)),
              x = y || v || (n.host && e.pathname),
              b = x,
              w = (n.pathname && n.pathname.split('/')) || [],
              d = (e.pathname && e.pathname.split('/')) || [],
              j = n.protocol && !C[n.protocol];
            if (
              (j &&
                ((n.hostname = ''),
                (n.port = null),
                n.host && ('' === w[0] ? (w[0] = n.host) : w.unshift(n.host)),
                (n.host = ''),
                e.protocol &&
                  ((e.hostname = null),
                  (e.port = null),
                  e.host && ('' === d[0] ? (d[0] = e.host) : d.unshift(e.host)),
                  (e.host = null)),
                (x = x && ('' === d[0] || '' === w[0]))),
              y)
            )
              (n.host = e.host || '' === e.host ? e.host : n.host),
                (n.hostname =
                  e.hostname || '' === e.hostname ? e.hostname : n.hostname),
                (n.search = e.search),
                (n.query = e.query),
                (w = d);
            else if (d.length)
              w || (w = []),
                w.pop(),
                (w = w.concat(d)),
                (n.search = e.search),
                (n.query = e.query);
            else if (!l.isNullOrUndefined(e.search)) {
              if (j) {
                n.hostname = n.host = w.shift();
                var k =
                  n.host && n.host.indexOf('@') > 0 ? n.host.split('@') : !1;
                k && ((n.auth = k.shift()), (n.host = n.hostname = k.shift()));
              }
              return (
                (n.search = e.search),
                (n.query = e.query),
                (l.isNull(n.pathname) && l.isNull(n.search)) ||
                  (n.path =
                    (n.pathname ? n.pathname : '') +
                    (n.search ? n.search : '')),
                (n.href = n.format()),
                n
              );
            }
            if (!w.length)
              return (
                (n.pathname = null),
                n.search ? (n.path = '/' + n.search) : (n.path = null),
                (n.href = n.format()),
                n
              );
            for (
              var N = w.slice(-1)[0],
                E =
                  ((n.host || e.host || w.length > 1) &&
                    ('.' === N || '..' === N)) ||
                  '' === N,
                S = 0,
                A = w.length;
              A >= 0;
              A--
            )
              (N = w[A]),
                '.' === N
                  ? w.splice(A, 1)
                  : '..' === N
                  ? (w.splice(A, 1), S++)
                  : S && (w.splice(A, 1), S--);
            if (!x && !b) for (; S--; S) w.unshift('..');
            !x ||
              '' === w[0] ||
              (w[0] && '/' === w[0].charAt(0)) ||
              w.unshift(''),
              E && '/' !== w.join('/').substr(-1) && w.push('');
            var D = '' === w[0] || (w[0] && '/' === w[0].charAt(0));
            if (j) {
              n.hostname = n.host = D ? '' : w.length ? w.shift() : '';
              var k =
                n.host && n.host.indexOf('@') > 0 ? n.host.split('@') : !1;
              k && ((n.auth = k.shift()), (n.host = n.hostname = k.shift()));
            }
            return (
              (x = x || (n.host && w.length)),
              x && !D && w.unshift(''),
              w.length
                ? (n.pathname = w.join('/'))
                : ((n.pathname = null), (n.path = null)),
              (l.isNull(n.pathname) && l.isNull(n.search)) ||
                (n.path =
                  (n.pathname ? n.pathname : '') + (n.search ? n.search : '')),
              (n.auth = e.auth || n.auth),
              (n.slashes = n.slashes || e.slashes),
              (n.href = n.format()),
              n
            );
          }),
          (r.prototype.parseHost = function() {
            var e = this.host,
              t = f.exec(e);
            t &&
              ((t = t[0]),
              ':' !== t && (this.port = t.substr(1)),
              (e = e.substr(0, e.length - t.length))),
              e && (this.hostname = e);
          });
      },
      { './util': 9, punycode: 4, querystring: 7 }
    ],
    9: [
      function(e, t, n) {
        'use strict';
        t.exports = {
          isString: function(e) {
            return 'string' == typeof e;
          },
          isObject: function(e) {
            return 'object' == typeof e && null !== e;
          },
          isNull: function(e) {
            return null === e;
          },
          isNullOrUndefined: function(e) {
            return null == e;
          }
        };
      },
      {}
    ],
    10: [
      function(e, t, n) {
        var r = e('jquery');
        t.exports = r({});
      },
      { jquery: 1 }
    ],
    11: [
      function(e, t, n) {
        var r = e('jquery'),
          o = e('./events'),
          i = e('./storage'),
          s = e('./page'),
          a = !1,
          u = window.gitbook || [],
          l = {
            events: o,
            page: s,
            state: s.getState(),
            storage: i,
            push: function(e) {
              a ? e() : u.push(e);
            }
          },
          c = { gitbook: l, jquery: r };
        (window.gitbook = l),
          (window.$ = r),
          (window.jQuery = r),
          (window.require = function(e, t) {
            (e = e.map(function(e) {
              if (((e = e.toLowerCase()), !c[e]))
                throw new Error('GitBook module ' + e + " doesn't exist");
              return c[e];
            })),
              t.apply(null, e);
          }),
          r(document).ready(function() {
            (a = !0),
              r.each(u, function(e, t) {
                t();
              });
          });
      },
      { './events': 10, './page': 12, './storage': 13, jquery: 1 }
    ],
    12: [
      function(e, t, n) {
        function r(e) {
          console.log('page has changed', e),
            o(e),
            c || ((c = !0), l.trigger('start', e.config.pluginsConfig)),
            l.trigger('page.change');
        }
        function o(e) {
          (f.page = e.page),
            (f.file = e.file),
            (f.gitbook = e.gitbook),
            (f.config = e.config),
            (f.basePath = e.basePath),
            (f.book = e.book),
            (f.$book = s('.book')),
            (f.revision = f.gitbook.time),
            (f.level = f.page.level),
            (f.filepath = f.file.path),
            (f.chapterTitle = f.page.title),
            (f.innerLanguage = f.book.language || ''),
            (f.root = a
              .resolve(
                location.protocol + '//' + location.host,
                u.dirname(
                  u.resolve(
                    location.pathname.replace(/\/$/, '/index.html'),
                    f.basePath
                  )
                )
              )
              .replace(/\/?$/, '/')),
            (f.bookRoot = f.innerLanguage ? a.resolve(f.root, '..') : f.root);
        }
        function i() {
          return f;
        }
        var s = e('jquery'),
          a = e('url'),
          u = e('path'),
          l = e('./events'),
          c = !1,
          f = {};
        t.exports = { hasChanged: r, setState: o, getState: i };
      },
      { './events': 10, jquery: 1, path: 2, url: 8 }
    ],
    13: [
      function(e, t, n) {
        var r = '';
        t.exports = {
          setBaseKey: function(e) {
            r = e;
          },
          set: function(e, t) {
            e = r + ':' + e;
            try {
              localStorage[e] = JSON.stringify(t);
            } catch (n) {}
          },
          get: function(e, t) {
            var n;
            e = r + ':' + e;
            try {
              n = localStorage[e];
            } catch (o) {}
            if (void 0 === n) return t;
            try {
              var i = JSON.parse(n);
              return null == i ? t : i;
            } catch (s) {
              return n || t;
            }
          },
          remove: function(e) {
            e = r + ':' + e;
            try {
              localStorage.removeItem(e);
            } catch (t) {}
          }
        };
      },
      {}
    ]
  },
  {},
  [11]
);
