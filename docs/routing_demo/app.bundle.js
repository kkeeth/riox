/*! For license information please see app.bundle.js.LICENSE.txt */
;(self.webpackChunkrouting_demo = self.webpackChunkrouting_demo || []).push([
  [143],
  {
    74: function (t, e, n) {
      !(function (t, e, n) {
        'use strict'
        function r(t) {
          return t && 'object' == typeof t && 'default' in t
            ? t
            : { default: t }
        }
        var o = r(n)
        const { cssManager: s } = e.__,
          { DOM_COMPONENT_INSTANCE_PROPERTY: i } = e.__.globals
        function a(t) {
          const { name: n } = t
          return n
            ? o.default(`${n}, [is=${n}]`).map((r) => {
                const o = r[i]
                if (!o) return
                o.unmount(!0), s.remove(n)
                const a = e.component(t)(r, o.props)
                return a.update(o.state), a
              })
            : (console.warn('Anonymous components can not be reloaded'), [])
        }
        ;(t.default = a),
          (t.reload = a),
          Object.defineProperty(t, '__esModule', { value: !0 })
      })(e, n(69), n(562))
    },
    681: (t, e, n) => {
      'use strict'
      n.d(e, { Z: () => i })
      var r = n(69)
      const o = (t) => t && t.parentNode && t.parentNode.removeChild(t),
        s = new WeakMap()
      function i(t, e) {
        return { name: 'lazy', exports: i.export(t, e) }
      }
      ;(i.cache = s),
        (i.export = function (t, e) {
          const n = t && e,
            i = n ? e : t,
            a = s.get(i)
          return (0, r.pure)(({ slots: e, attributes: u, props: c }) => ({
            mount(e, r) {
              ;(this.el = e), (this.isMounted = !0)
              const o = () => {
                this.mountLazyComponent(r),
                  this.el.dispatchEvent(new Event('load'))
              }
              a
                ? o()
                : (n && this.createManagedComponent(t, r),
                  ('function' == typeof i ? i() : Promise.resolve(i)).then(
                    (t) => {
                      s.set(i, t.default || t), o()
                    },
                  ))
            },
            createManagedComponent(t, n) {
              this.component = (0, r.component)(t)(this.el, c, {
                attributes: u,
                slots: e,
                parentScope: n,
              })
            },
            mountLazyComponent(t) {
              var e, n
              this.isMounted &&
                (this.component &&
                  (this.component.unmount(!0),
                  this.el.children.length &&
                    ((e = this.el),
                    (n = e.childNodes),
                    Array.from(n).forEach(o))),
                this.createManagedComponent(s.get(i), t))
            },
            update(t) {
              this.isMounted && this.component && this.component.update({}, t)
            },
            unmount(...t) {
              ;(this.isMounted = !1),
                this.component && this.component.unmount(...t)
            },
          }))
        })
    },
    432: (t) => {
      !(function (e, n) {
        const r = '*',
          o = Object.defineProperties,
          s = Object.entries,
          i = (t, e) => (n, r) => (
            t.has(n) ? t.get(n).add(r) : t.set(n, new Set().add(r)), e
          ),
          a = (t, e) => (n, o) => (
            n !== r || o
              ? ((t, e, n, r) => {
                  if (r) {
                    const e = t.get(n)
                    e && (e.delete(r), 0 === e.size && t.delete(n))
                  } else t.delete(n)
                })(t, 0, n, o)
              : t.clear(),
            e
          ),
          u = (t, e) => (t, n) =>
            e.on(t, function r(...o) {
              e.off(t, r), n.apply(e, o)
            }),
          c =
            (t, e) =>
            (n, ...o) => {
              const s = t.get(n)
              return (
                s && s.forEach((t) => t.apply(e, o)),
                t.get(r) && n !== r && e.trigger(r, n, ...o),
                e
              )
            }
        t.exports = function (t) {
          const e = new Map()
          return (
            o(
              (t = t || {}),
              s({ on: i, off: a, one: u, trigger: c }).reduce(
                (n, [r, o]) => (
                  (n[r] = {
                    value: o(e, t),
                    enumerable: !1,
                    writable: !1,
                    configurable: !1,
                  }),
                  n
                ),
                {},
              ),
            ),
            t
          )
        }
      })('undefined' != typeof window && window)
    },
    484: (t, e, n) => {
      'use strict'
      n.d(e, {
        B$: () => O,
        BC: () => N,
        EQ: () => w,
        Ib: () => $,
        Nd: () => y,
        vj: () => X,
      })
      var r = n(69)
      function o(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
      }
      function s(t) {
        return t && t.sensitive ? '' : 'i'
      }
      function i(t, e, n) {
        return (function (t, e, n) {
          void 0 === n && (n = {})
          for (
            var r = n.strict,
              i = void 0 !== r && r,
              a = n.start,
              u = void 0 === a || a,
              c = n.end,
              l = void 0 === c || c,
              h = n.encode,
              p =
                void 0 === h
                  ? function (t) {
                      return t
                    }
                  : h,
              d = '[' + o(n.endsWith || '') + ']|$',
              f = '[' + o(n.delimiter || '/#?') + ']',
              m = u ? '^' : '',
              v = 0,
              g = t;
            v < g.length;
            v++
          ) {
            var A = g[v]
            if ('string' == typeof A) m += o(p(A))
            else {
              var b = o(p(A.prefix)),
                y = o(p(A.suffix))
              if (A.pattern)
                if ((e && e.push(A), b || y))
                  if ('+' === A.modifier || '*' === A.modifier) {
                    var E = '*' === A.modifier ? '?' : ''
                    m +=
                      '(?:' +
                      b +
                      '((?:' +
                      A.pattern +
                      ')(?:' +
                      y +
                      b +
                      '(?:' +
                      A.pattern +
                      '))*)' +
                      y +
                      ')' +
                      E
                  } else
                    m +=
                      '(?:' + b + '(' + A.pattern + ')' + y + ')' + A.modifier
                else m += '(' + A.pattern + ')' + A.modifier
              else m += '(?:' + b + y + ')' + A.modifier
            }
          }
          if (l) i || (m += f + '?'), (m += n.endsWith ? '(?=' + d + ')' : '$')
          else {
            var x = t[t.length - 1],
              O =
                'string' == typeof x
                  ? f.indexOf(x[x.length - 1]) > -1
                  : void 0 === x
            i || (m += '(?:' + f + '(?=' + d + '))?'),
              O || (m += '(?=' + f + '|' + d + ')')
          }
          return new RegExp(m, s(n))
        })(
          (function (t, e) {
            void 0 === e && (e = {})
            for (
              var n = (function (t) {
                  for (var e = [], n = 0; n < t.length; ) {
                    var r = t[n]
                    if ('*' !== r && '+' !== r && '?' !== r)
                      if ('\\' !== r)
                        if ('{' !== r)
                          if ('}' !== r)
                            if (':' !== r)
                              if ('(' !== r)
                                e.push({
                                  type: 'CHAR',
                                  index: n,
                                  value: t[n++],
                                })
                              else {
                                var o = 1,
                                  s = ''
                                if ('?' === t[(a = n + 1)])
                                  throw new TypeError(
                                    'Pattern cannot start with "?" at ' + a,
                                  )
                                for (; a < t.length; )
                                  if ('\\' !== t[a]) {
                                    if (')' === t[a]) {
                                      if (0 == --o) {
                                        a++
                                        break
                                      }
                                    } else if (
                                      '(' === t[a] &&
                                      (o++, '?' !== t[a + 1])
                                    )
                                      throw new TypeError(
                                        'Capturing groups are not allowed at ' +
                                          a,
                                      )
                                    s += t[a++]
                                  } else s += t[a++] + t[a++]
                                if (o)
                                  throw new TypeError(
                                    'Unbalanced pattern at ' + n,
                                  )
                                if (!s)
                                  throw new TypeError('Missing pattern at ' + n)
                                e.push({ type: 'PATTERN', index: n, value: s }),
                                  (n = a)
                              }
                            else {
                              for (var i = '', a = n + 1; a < t.length; ) {
                                var u = t.charCodeAt(a)
                                if (
                                  !(
                                    (u >= 48 && u <= 57) ||
                                    (u >= 65 && u <= 90) ||
                                    (u >= 97 && u <= 122) ||
                                    95 === u
                                  )
                                )
                                  break
                                i += t[a++]
                              }
                              if (!i)
                                throw new TypeError(
                                  'Missing parameter name at ' + n,
                                )
                              e.push({ type: 'NAME', index: n, value: i }),
                                (n = a)
                            }
                          else
                            e.push({ type: 'CLOSE', index: n, value: t[n++] })
                        else e.push({ type: 'OPEN', index: n, value: t[n++] })
                      else
                        e.push({
                          type: 'ESCAPED_CHAR',
                          index: n++,
                          value: t[n++],
                        })
                    else e.push({ type: 'MODIFIER', index: n, value: t[n++] })
                  }
                  return e.push({ type: 'END', index: n, value: '' }), e
                })(t),
                r = e.prefixes,
                s = void 0 === r ? './' : r,
                i = '[^' + o(e.delimiter || '/#?') + ']+?',
                a = [],
                u = 0,
                c = 0,
                l = '',
                h = function (t) {
                  if (c < n.length && n[c].type === t) return n[c++].value
                },
                p = function (t) {
                  var e = h(t)
                  if (void 0 !== e) return e
                  var r = n[c],
                    o = r.type,
                    s = r.index
                  throw new TypeError(
                    'Unexpected ' + o + ' at ' + s + ', expected ' + t,
                  )
                },
                d = function () {
                  for (var t, e = ''; (t = h('CHAR') || h('ESCAPED_CHAR')); )
                    e += t
                  return e
                };
              c < n.length;

            ) {
              var f = h('CHAR'),
                m = h('NAME'),
                v = h('PATTERN')
              if (m || v) {
                var g = f || ''
                ;-1 === s.indexOf(g) && ((l += g), (g = '')),
                  l && (a.push(l), (l = '')),
                  a.push({
                    name: m || u++,
                    prefix: g,
                    suffix: '',
                    pattern: v || i,
                    modifier: h('MODIFIER') || '',
                  })
              } else {
                var A = f || h('ESCAPED_CHAR')
                if (A) l += A
                else if ((l && (a.push(l), (l = '')), h('OPEN'))) {
                  g = d()
                  var b = h('NAME') || '',
                    y = h('PATTERN') || '',
                    E = d()
                  p('CLOSE'),
                    a.push({
                      name: b || (y ? u++ : ''),
                      pattern: b && !y ? i : y,
                      prefix: g,
                      suffix: E,
                      modifier: h('MODIFIER') || '',
                    })
                } else p('END')
              }
            }
            return a
          })(t, n),
          e,
          n,
        )
      }
      function a(t, e, n) {
        return t instanceof RegExp
          ? (function (t, e) {
              if (!e) return t
              for (
                var n = /\((?:\?<(.*?)>)?(?!\?)/g, r = 0, o = n.exec(t.source);
                o;

              )
                e.push({
                  name: o[1] || r++,
                  prefix: '',
                  suffix: '',
                  modifier: '',
                  pattern: '',
                }),
                  (o = n.exec(t.source))
              return t
            })(t, e)
          : Array.isArray(t)
          ? (function (t, e, n) {
              var r = t.map(function (t) {
                return a(t, e, n).source
              })
              return new RegExp('(?:' + r.join('|') + ')', s(n))
            })(t, e, n)
          : i(t, e, n)
      }
      const u = Symbol()
      function c() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n]
        return new Promise((t, n) =>
          (function e(r, o) {
            if (!r.length) return t(o)
            const [s, ...i] = r,
              a = 'function' == typeof s ? s(o) : s,
              c = (t) => e(i, t)
            if (null != a) {
              if (a === u) return
              if (a.then) return a.then(c, n)
            }
            return Promise.resolve(c(a))
          })(e),
        )
      }
      ;(c.cancel = () => u),
        (c.compose = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n]
          return c(...e.reverse())
        })
      const l = new Set(),
        h = Symbol()
      function p(t) {
        const e = (function* () {
          for (;;) {
            const e = yield
            yield c(e, ...t)
          }
        })()
        return e.next(), e
      }
      function d(t, e) {
        return (
          t.forEach((n) => {
            n(e) === h && t.delete(n)
          }),
          t
        )
      }
      function f(t) {
        throw new Error(t)
      }
      function m() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n]
        const [r, o, s, i] = [new Set(), new Set(), new Set(), new Set(e)],
          a = p(i),
          u = Object.create(a),
          c = (t) => (e) => t.add(e) && u,
          l = (t) => (e) =>
            t.delete(e) ? u : f("Couldn't remove handler passed by reference")
        return Object.assign(u, {
          on: Object.freeze({ value: c(r), error: c(o), end: c(s) }),
          off: Object.freeze({ value: l(r), error: l(o), end: l(s) }),
          connect: c(i),
          push(t) {
            const { value: e, done: n } = u.next(t)
            return (
              n ||
                e.then(
                  (t) => d(r, t),
                  (t) => d(o, t),
                ),
              u
            )
          },
          end: () => (
            a.return(), d(s), [r, o, s, i].forEach((t) => t.clear()), u
          ),
          fork: () => m(...i),
          next(t) {
            const e = a.next(t)
            return a.next(), e
          },
        })
      }
      ;(m.install = function (t, e) {
        return (
          (t && 'string' == typeof t) ||
            f('Please provide a name (as string) for your erre plugin'),
          (e && 'function' == typeof e) ||
            f('Please provide a function for your erre plugin'),
          l.has(t)
            ? f(
                `The ${t} is already part of the erre API, please provide a different name`,
              )
            : ((m[t] = e), l.add(t)),
          m
        )
      }),
        m.install('cancel', c.cancel),
        m.install('off', () => h)
      const v = 'undefined' != typeof process,
        g = (t) => t.replace(E.base, ''),
        A = (t) => (e) => w(e, t) ? e : m.cancel(),
        b = (t) => {
          if (!E.silentErrors) throw new Error(t)
        },
        y = m((t) =>
          ((t) => 'string' == typeof t)(t) ? t : m.cancel(),
        ).on.error(b),
        E = {
          base: '',
          silentErrors: !1,
          sensitive: !1,
          strict: !1,
          end: !0,
          start: !0,
          delimiter: '/#?',
          encode: void 0,
          endsWith: void 0,
          prefixes: './',
        },
        x = (t) => Object.assign({}, E, t),
        O = (t, e, n) => a(t, e, x(n)),
        w = (t, e) => e.test(t),
        C = (t, e) => [
          decodeURI,
          g,
          A(t),
          (r) =>
            (function (t, e, r) {
              void 0 === r && (r = {})
              const { base: o } = x(r),
                [, ...s] = e.exec(t),
                i = (function () {
                  for (
                    var t = arguments.length, e = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    e[r] = arguments[r]
                  return v ? n(575).parse(...e) : new URL(...e)
                })(t, o)
              return (
                (i.params = s.reduce((t, e, n) => {
                  const o = r.keys && r.keys[n]
                  return o && (t[o.name] = e ? decodeURIComponent(e) : e), t
                }, {})),
                i
              )
            })(r, t, e),
        ]
      function N(t, e) {
        const n = [],
          r = a(t, n, e),
          o = m(...C(r, Object.assign({}, e, { keys: n })))
        return ((s = y),
        (i = o),
        s.on.value(i.push),
        i.on.end(() => {
          s.off.value(i.push)
        }),
        i).on.error(b)
        var s, i
      }
      const T = ((j = null), y.on.value((t) => (j = t)), () => j)
      var j
      const _ = () => M() || n.g,
        M = () => ('undefined' == typeof window ? null : window),
        S = () => ('undefined' == typeof document ? null : document),
        B = () => {
          const t = M()
          return t ? t.location : {}
        },
        I = (() => {
          const t = _()
          return t.requestAnimationFrame || t.setTimeout
        })(),
        U = (() => {
          const t = _()
          return t.cancelAnimationFrame || t.clearTimeout
        })(),
        R = 'popstate',
        P = 'click',
        k = '/',
        D = /^.+?\/\/+[^/]+/,
        L = (t) => (t[t.length - 1] === k ? t.substr(0, t.length - 1) : t)
      function $(t) {
        E.base = ((t) => {
          const e = M().location,
            n = e ? `${e.protocol}//${e.host}` : '',
            { pathname: r } = e || {}
          switch (!0) {
            case !1 === Boolean(t):
              return L(`${n}${r || ''}`)
            case /(www|http(s)?:)/.test(t):
              return t
            case '#' === t[0]:
              return `${n}${r && r !== k ? r : ''}${t}`
            case t === k:
              return L(n)
            default:
              return L(`${n}${((o = t), o[0] === k ? o : `/${o}`)}`)
          }
          var o
        })(t)
      }
      function F(t) {
        return Array.isArray(t)
          ? t
          : /^\[object (HTMLCollection|NodeList|Object)\]$/.test(
              Object.prototype.toString.call(t),
            ) && 'number' == typeof t.length
          ? Array.from(t)
          : [t]
      }
      function q(t, e, n, r, o) {
        var s
        ;(t = F(t)),
          ((s = e), s.split(/\s/)).forEach((e) => {
            t.forEach((t) => t[r](e, n, o || !1))
          })
      }
      function z(t, e, n, r) {
        return q(t, e, n, 'addEventListener', r), t
      }
      function Y(t, e, n, r) {
        return q(t, e, n, 'removeEventListener', r), t
      }
      const K = (t) => (1 === t.length ? t[0] : t)
      function H(t, e) {
        return (function (t, e, n) {
          const r = 'string' == typeof e ? [e] : e
          return K(F(t).map((t) => K(r.map((e) => t.hasAttribute(e)))))
        })(t, e)
      }
      const Z = () => y.push(J(String(B().href))),
        W = (t) => {
          const e = t.includes(E.base) ? t : E.base + t,
            n = B(),
            r = 'undefined' == typeof history ? null : history,
            o = S()
          r && e !== n.href && r.pushState(null, o.title, e)
        },
        G = (t) => (t && !V(t) ? G(t.parentNode) : t),
        V = (t) => 'A' === t.nodeName,
        J = (t) => t.replace(E.base, ''),
        Q = (t) => {
          if (
            ((t) =>
              (t.which && 1 !== t.which) ||
              t.metaKey ||
              t.ctrlKey ||
              t.shiftKey ||
              t.defaultPrevented)(t)
          )
            return
          const e = G(t.target)
          if (
            ((t) =>
              !t ||
              !V(t) ||
              H(t, 'download') ||
              !H(t, 'href') ||
              ((t) => t.target && '_self' !== t.target)(t) ||
              -1 === t.href.indexOf(B().href.match(D)[0]))(e) ||
            ((t) => t.split('#').length > 1)(e.href) ||
            !((t) => !E.base || t.includes(E.base))(e.href)
          )
            return
          const n = J(e.href)
          y.push(n), t.preventDefault()
        }
      function X(t) {
        const e = M(),
          n = t || S()
        return (
          e && (z(e, R, Z), z(n, P, Q)),
          y.on.value(W),
          () => {
            e && (Y(e, R, Z), Y(n, P, Q)), y.off.value(W)
          }
        )
      }
      const tt = 'base',
        { template: et, bindingTypes: nt } = r.__.DOMBindings
      let rt = !1
      ;(0, r.pure)(({ slots: t, attributes: e, props: n }) => {
        rt &&
          (function (t) {
            throw new Error('Multiple <router> components are not supported')
          })()
        const r = (t) =>
          e &&
          e.find(
            (e) => e.name.replace(/-(\w)/g, (t, e) => e.toUpperCase()) === t,
          )
        return {
          slot: null,
          el: null,
          teardown: null,
          mount(t, e) {
            const n = r('initialRoute'),
              o = n ? n.evaluate(e) : null,
              s = T(),
              i = () => {
                this.createSlot(e), y.off.value(i)
              }
            ;(rt = !0),
              (this.el = t),
              (this.teardown = X(this.root)),
              this.setBase(e),
              s && !o
                ? this.createSlot(e)
                : (y.on.value(i), y.push(o || window.location.href))
          },
          createSlot(e) {
            if (!t || !t.length) return
            const n = r('onStarted')
            ;(this.slot = et(null, [{ type: nt.SLOT, name: 'default' }])),
              this.slot.mount(this.el, { slots: t }, e),
              n && n.evaluate(e)(T())
          },
          update(t) {
            this.setBase(t),
              this.slot &&
                (U(this.deferred),
                (this.deferred = I(() => {
                  this.slot.update({}, t)
                })))
          },
          unmount(...t) {
            this.teardown(), (rt = !1), this.slot && this.slot.unmount(...t)
          },
          getBase(t) {
            const e = r(tt)
            return e ? this.el.getAttribute(tt) || e.evaluate(t) : '/'
          },
          setBase(t) {
            $(n ? n.base : this.getBase(t))
          },
        }
      })
    },
    833: (t, e, n) => {
      'use strict'
      n.d(e, { Z: () => h })
      var r = n(484),
        o = n(681),
        s = n(790),
        i = n.n(s),
        a = n(283),
        u = n(668),
        c = n(979),
        l = n(75)
      const h = {
        css: null,
        exports: {
          components: {
            pages: c.Z,
            NotFound: u.Z,
            ItemList: (0, o.Z)(a.default, () => n.e(252).then(n.bind(n, 955))),
            ItemDetail: (0, o.Z)(a.default, () =>
              n.e(252).then(n.bind(n, 156)),
            ),
            AddItem: (0, o.Z)(a.default, () => n.e(473).then(n.bind(n, 543))),
          },
          state: {
            pages: c.Z,
            showNotFound: !1,
            detail: null,
            activePage: null,
            edit: !1,
          },
          onBeforeMount({ isServer: t }) {
            ;(0, r.Ib)(`${window.location.protocol}//${window.location.host}`),
              (0, r.vj)(document.querySelector('#root'))
            const e = new l.Z()
            i().addStore(e),
              (this.anyRouteStream = (0, r.BC)('(.*)')),
              this.anyRouteStream.on.value(this.onAnyRoute),
              i().on('item_detail_changed', (t) => {
                this.update({ edit: !1, detail: t })
              })
          },
          onAnyRoute(t) {
            const e = c.Z.find((e) =>
                (0, r.EQ)(t.params[0], (0, r.B$)(e.path)),
              ),
              n = t.params[0].split('/').pop()
            'ItemDetail' === e.label && i().trigger('route_item', n),
              this.update({
                activePage: e,
                showNotFound: !e,
                edit: 'AddItem' === e.label,
              })
          },
          onBeforeUnmount() {
            this.anyRouteStream.end()
          },
          add() {
            r.Nd.push('/#add')
          },
          addItem(t) {
            i().trigger('item_detail_add', t), r.Nd.push('')
          },
          cancel() {
            i().trigger('route_item', null), r.Nd.push('')
          },
        },
        template: (t, e, n, r) =>
          t(
            '<div class="container"><h3>Gadget Browser <a href="https://github.com/kkeeth/riox">(GitHub)</a></h3><p>Notice the URL routing, back button works as expected.</p><div expr0="expr0" class="row"></div><div expr2="expr2"></div><div expr8="expr8"></div></div>',
            [
              {
                type: n.IF,
                evaluate: (t) => t.state.showNotFound,
                redundantAttribute: 'expr0',
                selector: '[expr0]',
                template: t(
                  '<div><not-found expr1="expr1"></not-found></div>',
                  [
                    {
                      type: n.TAG,
                      getComponent: r,
                      evaluate: (t) => 'not-found',
                      slots: [],
                      attributes: [],
                      redundantAttribute: 'expr1',
                      selector: '[expr1]',
                    },
                  ],
                ),
              },
              {
                type: n.IF,
                evaluate: (t) => !t.state.edit,
                redundantAttribute: 'expr2',
                selector: '[expr2]',
                template: t(
                  '<div expr3="expr3" class="row"></div><item-detail expr5="expr5"></item-detail><div expr6="expr6"></div><div><button expr7="expr7">Add</button></div>',
                  [
                    {
                      type: n.IF,
                      evaluate: (t) => !t.state.showNotFound,
                      redundantAttribute: 'expr3',
                      selector: '[expr3]',
                      template: t(
                        '<div><item-list expr4="expr4"></item-list></div>',
                        [
                          {
                            type: n.TAG,
                            getComponent: r,
                            evaluate: (t) => 'item-list',
                            slots: [],
                            attributes: [
                              {
                                type: e.ATTRIBUTE,
                                name: 'edit',
                                evaluate: (t) => t.state.edit,
                              },
                            ],
                            redundantAttribute: 'expr4',
                            selector: '[expr4]',
                          },
                        ],
                      ),
                    },
                    {
                      type: n.IF,
                      evaluate: (t) => !!t.state.detail,
                      redundantAttribute: 'expr5',
                      selector: '[expr5]',
                      template: t(null, [
                        {
                          type: n.TAG,
                          getComponent: r,
                          evaluate: (t) => 'item-detail',
                          slots: [],
                          attributes: [
                            {
                              type: e.ATTRIBUTE,
                              name: 'item',
                              evaluate: (t) => t.state.detail,
                            },
                          ],
                        },
                      ]),
                    },
                    {
                      type: n.IF,
                      evaluate: (t) => !t.state.detail,
                      redundantAttribute: 'expr6',
                      selector: '[expr6]',
                      template: t('<p>Choose a product.</p>', []),
                    },
                    {
                      redundantAttribute: 'expr7',
                      selector: '[expr7]',
                      expressions: [
                        {
                          type: e.EVENT,
                          name: 'onclick',
                          evaluate: (t) => t.add,
                        },
                      ],
                    },
                  ],
                ),
              },
              {
                type: n.IF,
                evaluate: (t) => t.state.edit,
                redundantAttribute: 'expr8',
                selector: '[expr8]',
                template: t('<add-item expr9="expr9"></add-item>', [
                  {
                    type: n.TAG,
                    getComponent: r,
                    evaluate: (t) => 'add-item',
                    slots: [],
                    attributes: [
                      {
                        type: e.ATTRIBUTE,
                        name: 'add-item',
                        evaluate: (t) => t.addItem,
                      },
                      {
                        type: e.ATTRIBUTE,
                        name: 'cancel',
                        evaluate: (t) => t.cancel,
                      },
                    ],
                    redundantAttribute: 'expr9',
                    selector: '[expr9]',
                  },
                ]),
              },
            ],
          ),
        name: 'app',
      }
      ;(() => {
        {
          const e = n(74).default
          t.hot.accept(), t.hot.data && e(n(833).Z)
        }
      })()
    },
    283: (t, e, n) => {
      'use strict'
      n.r(e), n.d(e, { default: () => r })
      const r = {
        css: 'loader,[is="loader"]{ padding: 1rem 0; } loader svg,[is="loader"] svg{ overflow: visible; }',
        exports: null,
        template: (t, e, n, r) =>
          t(
            '<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#000"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"/><animatetransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animatetransform></g></g></svg>',
            [],
          ),
        name: 'loader',
      }
      ;(() => {
        {
          const e = n(74).default
          t.hot.accept(), t.hot.data && e(n(283).default)
        }
      })()
    },
    668: (t, e, n) => {
      'use strict'
      n.d(e, { Z: () => r })
      const r = {
        css: null,
        exports: null,
        template: (t, e, n, r) =>
          t(
            '<h1>Page not found</h1><p>Go back to <a href="/">home</a></p>',
            [],
          ),
        name: 'not-found',
      }
      ;(() => {
        {
          const e = n(74).default
          t.hot.accept(), t.hot.data && e(n(668).Z)
        }
      })()
    },
    562: (t, e, n) => {
      'use strict'
      function r(t, e) {
        return (
          (n = 'string' == typeof t ? (e || document).querySelectorAll(t) : t),
          Array.isArray(n)
            ? n
            : /^\[object (HTMLCollection|NodeList|Object)\]$/.test(
                Object.prototype.toString.call(n),
              ) && 'number' == typeof n.length
            ? Array.from(n)
            : [n]
        )
        var n
      }
      n.r(e), n.d(e, { default: () => r })
    },
    622: (t, e, n) => {
      'use strict'
      n.r(e), n.d(e, { default: () => a })
      var r = n(537),
        o = n.n(r),
        s = n(645),
        i = n.n(s)()(o())
      i.push([
        t.id,
        "body {\n  font-family: 'myriad pro', sans-serif;\n  font-size: 20px;\n  border: 0;\n  display: flex;\n  justify-content: center;\n}\n\n.container {\n  flex-direction: column;\n  padding: 0 2rem;\n  max-width: 500px;\n}\n\na {\n  text-decoration: none;\n  color: grey;\n}\n\np {\n  margin: .8rem 0;\n}\n\nh3 {\n  margin: 1rem auto;\n}\n\nitem-app {\n  display: block;\n  max-width: 400px;\n  margin: 5% auto;\n}\n\ninput {\n  font-size: 100%;\n  padding: .6em;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  float: left;\n}\n\nbutton {\n  background-color: #1FADC5;\n  border: 1px solid rgba(0,0,0,.2);\n  font-size: 100%;\n  color: #fff;\n  padding: .6em 1.2em;\n  border-radius: 3em;\n  cursor: pointer;\n  margin: .3em;\n  outline: none;\n}\n\nbutton[disabled] {\n  background-color: #ddd;\n  color: #aaa;\n}\n\nul {\n  padding: 0;\n}\n\nli {\n  list-style-type: none;\n  padding: .2em 0;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: #ccc;\n}\n\nlabel {\n  cursor: pointer;\n}",
        '',
        {
          version: 3,
          sources: ['webpack://./src/style.css'],
          names: [],
          mappings:
            'AAAA;EACE,qCAAqC;EACrC,eAAe;EACf,SAAS;EACT,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,gCAAgC;EAChC,eAAe;EACf,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,eAAe;AACjB',
          sourcesContent: [
            "body {\n  font-family: 'myriad pro', sans-serif;\n  font-size: 20px;\n  border: 0;\n  display: flex;\n  justify-content: center;\n}\n\n.container {\n  flex-direction: column;\n  padding: 0 2rem;\n  max-width: 500px;\n}\n\na {\n  text-decoration: none;\n  color: grey;\n}\n\np {\n  margin: .8rem 0;\n}\n\nh3 {\n  margin: 1rem auto;\n}\n\nitem-app {\n  display: block;\n  max-width: 400px;\n  margin: 5% auto;\n}\n\ninput {\n  font-size: 100%;\n  padding: .6em;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  float: left;\n}\n\nbutton {\n  background-color: #1FADC5;\n  border: 1px solid rgba(0,0,0,.2);\n  font-size: 100%;\n  color: #fff;\n  padding: .6em 1.2em;\n  border-radius: 3em;\n  cursor: pointer;\n  margin: .3em;\n  outline: none;\n}\n\nbutton[disabled] {\n  background-color: #ddd;\n  color: #aaa;\n}\n\nul {\n  padding: 0;\n}\n\nli {\n  list-style-type: none;\n  padding: .2em 0;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: #ccc;\n}\n\nlabel {\n  cursor: pointer;\n}",
          ],
          sourceRoot: '',
        },
      ])
      const a = i
    },
    645: (t) => {
      'use strict'
      t.exports = function (t) {
        var e = []
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var n = '',
                r = void 0 !== e[5]
              return (
                e[4] && (n += '@supports ('.concat(e[4], ') {')),
                e[2] && (n += '@media '.concat(e[2], ' {')),
                r &&
                  (n += '@layer'.concat(
                    e[5].length > 0 ? ' '.concat(e[5]) : '',
                    ' {',
                  )),
                (n += t(e)),
                r && (n += '}'),
                e[2] && (n += '}'),
                e[4] && (n += '}'),
                n
              )
            }).join('')
          }),
          (e.i = function (t, n, r, o, s) {
            'string' == typeof t && (t = [[null, t, void 0]])
            var i = {}
            if (r)
              for (var a = 0; a < this.length; a++) {
                var u = this[a][0]
                null != u && (i[u] = !0)
              }
            for (var c = 0; c < t.length; c++) {
              var l = [].concat(t[c])
              ;(r && i[l[0]]) ||
                (void 0 !== s &&
                  (void 0 === l[5] ||
                    (l[1] = '@layer'
                      .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                      .concat(l[1], '}')),
                  (l[5] = s)),
                n &&
                  (l[2]
                    ? ((l[1] = '@media '.concat(l[2], ' {').concat(l[1], '}')),
                      (l[2] = n))
                    : (l[2] = n)),
                o &&
                  (l[4]
                    ? ((l[1] = '@supports ('
                        .concat(l[4], ') {')
                        .concat(l[1], '}')),
                      (l[4] = o))
                    : (l[4] = ''.concat(o))),
                e.push(l))
            }
          }),
          e
        )
      }
    },
    537: (t) => {
      'use strict'
      t.exports = function (t) {
        var e = t[1],
          n = t[3]
        if (!n) return e
        if ('function' == typeof btoa) {
          var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
            o =
              'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                r,
              ),
            s = '/*# '.concat(o, ' */'),
            i = n.sources.map(function (t) {
              return '/*# sourceURL='
                .concat(n.sourceRoot || '')
                .concat(t, ' */')
            })
          return [e].concat(i).concat([s]).join('\n')
        }
        return [e].join('\n')
      }
    },
    587: (t) => {
      'use strict'
      function e(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }
      t.exports = function (t, n, r, o) {
        ;(n = n || '&'), (r = r || '=')
        var s = {}
        if ('string' != typeof t || 0 === t.length) return s
        var i = /\+/g
        t = t.split(n)
        var a = 1e3
        o && 'number' == typeof o.maxKeys && (a = o.maxKeys)
        var u = t.length
        a > 0 && u > a && (u = a)
        for (var c = 0; c < u; ++c) {
          var l,
            h,
            p,
            d,
            f = t[c].replace(i, '%20'),
            m = f.indexOf(r)
          m >= 0
            ? ((l = f.substr(0, m)), (h = f.substr(m + 1)))
            : ((l = f), (h = '')),
            (p = decodeURIComponent(l)),
            (d = decodeURIComponent(h)),
            e(s, p)
              ? Array.isArray(s[p])
                ? s[p].push(d)
                : (s[p] = [s[p], d])
              : (s[p] = d)
        }
        return s
      }
    },
    361: (t) => {
      'use strict'
      var e = function (t) {
        switch (typeof t) {
          case 'string':
            return t
          case 'boolean':
            return t ? 'true' : 'false'
          case 'number':
            return isFinite(t) ? t : ''
          default:
            return ''
        }
      }
      t.exports = function (t, n, r, o) {
        return (
          (n = n || '&'),
          (r = r || '='),
          null === t && (t = void 0),
          'object' == typeof t
            ? Object.keys(t)
                .map(function (o) {
                  var s = encodeURIComponent(e(o)) + r
                  return Array.isArray(t[o])
                    ? t[o]
                        .map(function (t) {
                          return s + encodeURIComponent(e(t))
                        })
                        .join(n)
                    : s + encodeURIComponent(e(t[o]))
                })
                .join(n)
            : o
            ? encodeURIComponent(e(o)) + r + encodeURIComponent(e(t))
            : ''
        )
      }
    },
    673: (t, e, n) => {
      'use strict'
      ;(e.decode = e.parse = n(587)), (e.encode = e.stringify = n(361))
    },
    69: (t, e, n) => {
      'use strict'
      function r(t) {
        return t.replace(/-(\w)/g, (t, e) => e.toUpperCase())
      }
      function o(t, e) {
        t.firstChild && (e.appendChild(t.firstChild), o(t, e))
      }
      function s(t) {
        i(t.childNodes)
      }
      function i(t) {
        Array.from(t).forEach(a)
      }
      n.r(e),
        n.d(e, {
          __: () => ne,
          component: () => Qt,
          install: () => Vt,
          mount: () => Wt,
          pure: () => Xt,
          register: () => Ht,
          uninstall: () => Jt,
          unmount: () => Gt,
          unregister: () => Zt,
          version: () => ee,
          withTypes: () => te,
        })
      const a = (t) => t && t.parentNode && t.parentNode.removeChild(t),
        u = (t, e) => e && e.parentNode && e.parentNode.insertBefore(t, e),
        c = new Map(),
        l = Symbol('riot-component'),
        h = new Set(),
        p = 'is',
        d = 'mount',
        f = 'update',
        m = 'unmount',
        v = 'shouldUpdate',
        g = 'onBeforeMount',
        A = 'onMounted',
        b = 'onBeforeUpdate',
        y = 'onUpdated',
        E = 'onBeforeUnmount',
        x = 'onUnmounted',
        O = 'props',
        w = 'state',
        C = 'slots',
        N = 'root',
        T = Symbol('pure'),
        j = Symbol('is_updating'),
        _ = Symbol('parent'),
        M = Symbol('attributes'),
        S = Symbol('template')
      var B = Object.freeze({
          __proto__: null,
          COMPONENTS_IMPLEMENTATION_MAP: c,
          DOM_COMPONENT_INSTANCE_PROPERTY: l,
          PLUGINS_SET: h,
          IS_DIRECTIVE: p,
          VALUE_ATTRIBUTE: 'value',
          MOUNT_METHOD_KEY: d,
          UPDATE_METHOD_KEY: f,
          UNMOUNT_METHOD_KEY: m,
          SHOULD_UPDATE_KEY: v,
          ON_BEFORE_MOUNT_KEY: g,
          ON_MOUNTED_KEY: A,
          ON_BEFORE_UPDATE_KEY: b,
          ON_UPDATED_KEY: y,
          ON_BEFORE_UNMOUNT_KEY: E,
          ON_UNMOUNTED_KEY: x,
          PROPS_KEY: O,
          STATE_KEY: w,
          SLOTS_KEY: C,
          ROOT_KEY: N,
          IS_PURE_SYMBOL: T,
          IS_COMPONENT_UPDATING: j,
          PARENT_KEY_SYMBOL: _,
          ATTRIBUTES_KEY_SYMBOL: M,
          TEMPLATE_KEY_SYMBOL: S,
        }),
        I = { EACH: 0, IF: 1, SIMPLE: 2, TAG: 3, SLOT: 4 },
        U = { ATTRIBUTE: 0, EVENT: 1, TEXT: 2, VALUE: 3 }
      const R = Symbol('head'),
        P = Symbol('tail')
      function k(t, e, n, r) {
        return (
          void 0 === r && (r = {}),
          Object.defineProperty(
            t,
            e,
            Object.assign(
              { value: n, enumerable: !1, writable: !1, configurable: !0 },
              r,
            ),
          ),
          t
        )
      }
      function D(t, e, n) {
        return (
          Object.entries(e).forEach((e) => {
            let [r, o] = e
            k(t, r, o, n)
          }),
          t
        )
      }
      function L(t, e) {
        return (
          Object.entries(e).forEach((e) => {
            let [n, r] = e
            t[n] || (t[n] = r)
          }),
          t
        )
      }
      function $(t, e) {
        return typeof t === e
      }
      function F(t) {
        const e = t.ownerSVGElement
        return !!e || null === e
      }
      function q(t) {
        return 'template' === t.tagName.toLowerCase()
      }
      function z(t) {
        return $(t, 'function')
      }
      function Y(t) {
        return !K(t) && t.constructor === Object
      }
      function K(t) {
        return null == t
      }
      const H = Symbol('unmount'),
        Z = {
          nodes: [],
          mount(t, e) {
            return this.update(t, e)
          },
          update(t, e) {
            const { placeholder: n, nodes: r, childrenMap: o } = this,
              s = t === H ? null : this.evaluate(t),
              i = s ? Array.from(s) : [],
              {
                newChildrenMap: c,
                batches: l,
                futureNodes: h,
              } = (function (t, e, n, r) {
                const {
                    condition: o,
                    template: s,
                    childrenMap: i,
                    itemName: a,
                    getKey: u,
                    indexName: c,
                    root: l,
                    isTemplateTag: h,
                  } = r,
                  p = new Map(),
                  d = [],
                  f = []
                return (
                  t.forEach((t, r) => {
                    const m = (function (t, e) {
                        let { itemName: n, indexName: r, index: o, item: s } = e
                        return k(t, n, s), r && k(t, r, o), t
                      })(Object.create(e), {
                        itemName: a,
                        indexName: c,
                        index: r,
                        item: t,
                      }),
                      v = u ? u(m) : r,
                      g = i.get(v),
                      A = []
                    if (
                      (function (t, e) {
                        return !!t && !t(e)
                      })(o, m)
                    )
                      return
                    const b = !g,
                      y = g ? g.template : s.clone(),
                      E = y.el || l.cloneNode(),
                      x =
                        h && b
                          ? (function (t) {
                              const e = t.dom.cloneNode(!0),
                                { head: n, tail: r } = (function () {
                                  const t = document.createTextNode(''),
                                    e = document.createTextNode('')
                                  return (
                                    (t[R] = !0),
                                    (e[P] = !0),
                                    { head: t, tail: e }
                                  )
                                })()
                              return {
                                avoidDOMInjection: !0,
                                fragment: e,
                                head: n,
                                tail: r,
                                children: [n, ...Array.from(e.childNodes), r],
                              }
                            })(y)
                          : y.meta
                    b
                      ? d.push(() => y.mount(E, m, n, x))
                      : d.push(() => y.update(m, n)),
                      h ? A.push(...x.children) : A.push(E),
                      i.delete(v),
                      f.push(...A),
                      p.set(v, { nodes: A, template: y, context: m, index: r })
                  }),
                  { newChildrenMap: p, batches: d, futureNodes: f }
                )
              })(i, t, e, this)
            return (
              ((t, e, n, r) => {
                const o = e.length
                let s = t.length,
                  i = o,
                  c = 0,
                  l = 0,
                  h = null
                for (; c < s || l < i; )
                  if (s === c) {
                    const t =
                      i < o
                        ? l
                          ? n(e[l - 1], -0).nextSibling
                          : n(e[i - l], 0)
                        : r
                    for (; l < i; ) u(n(e[l++], 1), t)
                  } else if (i === l)
                    for (; c < s; ) (h && h.has(t[c])) || a(n(t[c], -1)), c++
                  else if (t[c] === e[l]) c++, l++
                  else if (t[s - 1] === e[i - 1]) s--, i--
                  else if (t[c] === e[i - 1] && e[l] === t[s - 1]) {
                    const r = n(t[--s], -1).nextSibling
                    u(n(e[l++], 1), n(t[c++], -1).nextSibling),
                      u(n(e[--i], 1), r),
                      (t[s] = e[i])
                  } else {
                    if (!h) {
                      h = new Map()
                      let t = l
                      for (; t < i; ) h.set(e[t], t++)
                    }
                    if (h.has(t[c])) {
                      const r = h.get(t[c])
                      if (l < r && r < i) {
                        let o = c,
                          a = 1
                        for (; ++o < s && o < i && h.get(t[o]) === r + a; ) a++
                        if (a > r - l) {
                          const o = n(t[c], 0)
                          for (; l < r; ) u(n(e[l++], 1), o)
                        } else
                          (p = n(e[l++], 1)),
                            (d = n(t[c++], -1)) &&
                              d.parentNode &&
                              d.parentNode.replaceChild(p, d)
                      } else c++
                    } else a(n(t[c++], -1))
                  }
                var p, d
              })(
                r,
                h,
                (function (t, e) {
                  return (n, r) => {
                    if (r < 0) {
                      const n = t[t.length - 1]
                      if (n) {
                        const { template: r, nodes: o, context: s } = n
                        o.pop(), o.length || (t.pop(), r.unmount(s, e, null))
                      }
                    }
                    return n
                  }
                })(Array.from(o.values()), e),
                n,
              ),
              l.forEach((t) => t()),
              (this.childrenMap = c),
              (this.nodes = h),
              this
            )
          },
          unmount(t, e) {
            return this.update(H, e), this
          },
        },
        W = {
          mount(t, e) {
            return this.update(t, e)
          },
          update(t, e) {
            const n = !!this.evaluate(t),
              r = !this.value && n,
              o = this.value && !n,
              s = () => {
                const n = this.node.cloneNode()
                u(n, this.placeholder),
                  (this.template = this.template.clone()),
                  this.template.mount(n, t, e)
              }
            switch (!0) {
              case r:
                s()
                break
              case o:
                this.unmount(t)
                break
              default:
                n && this.template.update(t, e)
            }
            return (this.value = n), this
          },
          unmount(t, e) {
            return this.template.unmount(t, e, !0), this
          },
        }
      function G(t) {
        throw new Error(t)
      }
      function V(t) {
        const e = new Map(),
          n = (n) => (e.has(n) || e.set(n, t.call(this, n))) && e.get(n)
        return (n.cache = e), n
      }
      function J(t) {
        return t.reduce((t, e) => {
          const { value: n, type: o } = e
          switch (!0) {
            case !e.name && 0 === o:
              return Object.assign({}, t, n)
            case 3 === o:
              t.value = e.value
              break
            default:
              t[r(e.name)] = e.value
          }
          return t
        }, {})
      }
      const Q = 'undefined' == typeof Element ? {} : Element.prototype,
        X = V((t) => Q.hasOwnProperty(t))
      const tt = /^on/,
        et = {
          handleEvent(t) {
            this[t.type](t)
          },
        },
        nt = new WeakMap()
      function rt(t) {
        return K(t) ? '' : t
      }
      const ot = (t, e) => {
        const n = t.childNodes[e]
        if (n.nodeType === Node.COMMENT_NODE) {
          const e = document.createTextNode('')
          return t.replaceChild(e, n), e
        }
        return n
      }
      var st = {
        0: function t(e, n, r, o) {
          let { name: s } = n
          if (!s)
            return (
              o &&
                (function (t, e, n) {
                  const r = e ? Object.keys(e) : []
                  Object.keys(n)
                    .filter((t) => !r.includes(t))
                    .forEach((e) => t.removeAttribute(e))
                })(e, r, o),
              void (
                r &&
                (function (e, n) {
                  Object.entries(n).forEach((n) => {
                    let [r, o] = n
                    return t(e, { name: r }, o)
                  })
                })(e, r)
              )
            )
          !X(s) &&
            ((function (t) {
              return $(t, 'boolean')
            })(r) ||
              Y(r) ||
              z(r)) &&
            (e[s] = r),
            (function (t) {
              return !t && 0 !== t
            })(r)
              ? e.removeAttribute(s)
              : (function (t) {
                  return !0 === t || ['string', 'number'].includes(typeof t)
                })(r) &&
                e.setAttribute(
                  s,
                  (function (t, e) {
                    return !0 === e ? t : e
                  })(s, r),
                )
        },
        1: function (t, e, n) {
          let { name: r } = e
          const o = r.replace(tt, ''),
            s =
              nt.get(t) ||
              ((t) => {
                const e = Object.create(et)
                return nt.set(t, e), e
              })(t),
            [i, a] = ((t) => (Array.isArray(t) ? t : [t, !1]))(n),
            u = s[o],
            c = i && !u
          u && !i && t.removeEventListener(o, s),
            c && t.addEventListener(o, s, a),
            (s[o] = i)
        },
        2: function (t, e, n) {
          t.data = rt(n)
        },
        3: function (t, e, n) {
          t.value = rt(n)
        },
      }
      const it = {
        mount(t) {
          return (this.value = this.evaluate(t)), at(this, this.value), this
        },
        update(t) {
          const e = this.evaluate(t)
          return this.value !== e && (at(this, e), (this.value = e)), this
        },
        unmount() {
          return 1 === this.type && at(this, null), this
        },
      }
      function at(t, e) {
        return st[t.type](t.node, t, e, t.value)
      }
      function ut(t, e) {
        return Object.assign({}, it, e, {
          node: 2 === e.type ? ot(t, e.childNodeIndex) : t,
        })
      }
      const ct = (t, e) => t[_] || e,
        lt = {
          attributes: [],
          getTemplateScope(t, e) {
            return (function (t, e, n) {
              if (!t || !t.length) return n
              const r = t.map((t) =>
                Object.assign({}, t, { value: t.evaluate(e) }),
              )
              return Object.assign(Object.create(n || null), J(r))
            })(this.attributes, t, e)
          },
          mount(t, e) {
            const n =
                !!t.slots &&
                t.slots.find((t) => {
                  let { id: e } = t
                  return e === this.name
                }),
              { parentNode: r } = this.node,
              o = ct(t, e)
            return (
              (this.template = n && bt(n.html, n.bindings).createDOM(r)),
              this.template &&
                (s(this.node),
                this.template.mount(this.node, this.getTemplateScope(t, o), o),
                (this.template.children = Array.from(this.node.childNodes))),
              ht(this.node),
              a(this.node),
              this
            )
          },
          update(t, e) {
            if (this.template) {
              const n = ct(t, e)
              this.template.update(this.getTemplateScope(t, n), n)
            }
            return this
          },
          unmount(t, e, n) {
            return (
              this.template &&
                this.template.unmount(this.getTemplateScope(t, e), null, n),
              this
            )
          },
        }
      function ht(t) {
        const e = t && t.firstChild
        e && (u(e, t), ht(t))
      }
      function pt(t) {
        return t.reduce((t, e) => {
          let { bindings: n } = e
          return t.concat(n)
        }, [])
      }
      const dt = {
        mount(t) {
          return this.update(t)
        },
        update(t, e) {
          const n = this.evaluate(t)
          return (
            n && n === this.name
              ? this.tag.update(t)
              : (this.unmount(t, e, !0),
                (this.name = n),
                (this.tag = (function (t, e, n) {
                  return (
                    void 0 === e && (e = []),
                    void 0 === n && (n = []),
                    t
                      ? t({ slots: e, attributes: n })
                      : bt(
                          (function (t) {
                            return t.reduce((t, e) => t + e.html, '')
                          })(e),
                          [
                            ...pt(e),
                            {
                              expressions: n.map((t) =>
                                Object.assign({ type: 0 }, t),
                              ),
                            },
                          ],
                        )
                  )
                })(this.getComponent(n), this.slots, this.attributes)),
                this.tag.mount(this.node, t)),
            this
          )
        },
        unmount(t, e, n) {
          return this.tag && this.tag.unmount(n), this
        },
      }
      var ft = {
        1: function (t, e) {
          let { evaluate: n, template: r } = e
          const o = document.createTextNode('')
          return (
            u(o, t),
            a(t),
            Object.assign({}, W, {
              node: t,
              evaluate: n,
              placeholder: o,
              template: r.createDOM(t),
            })
          )
        },
        2: function (t, e) {
          let { expressions: n } = e
          return Object.assign(
            {},
            ((r = n.map((e) => ut(t, e))),
            ['mount', 'update', 'unmount'].reduce(
              (t, e) =>
                Object.assign({}, t, {
                  [e]: (t) => r.map((n) => n[e](t)) && undefined,
                }),
              {},
            )),
          )
          var r
        },
        0: function (t, e) {
          let {
            evaluate: n,
            condition: r,
            itemName: o,
            indexName: s,
            getKey: i,
            template: c,
          } = e
          const l = document.createTextNode(''),
            h = t.cloneNode()
          return (
            u(l, t),
            a(t),
            Object.assign({}, Z, {
              childrenMap: new Map(),
              node: t,
              root: h,
              condition: r,
              evaluate: n,
              isTemplateTag: q(h),
              template: c.createDOM(t),
              getKey: i,
              indexName: s,
              itemName: o,
              placeholder: l,
            })
          )
        },
        3: function (t, e) {
          let { evaluate: n, getComponent: r, slots: o, attributes: s } = e
          return Object.assign({}, dt, {
            node: t,
            evaluate: n,
            slots: o,
            attributes: s,
            getComponent: r,
          })
        },
        4: function (t, e) {
          let { name: n, attributes: r } = e
          return Object.assign({}, lt, { attributes: r, node: t, name: n })
        },
      }
      function mt(t, e) {
        return t.map((t) =>
          2 === t.type
            ? Object.assign({}, t, { childNodeIndex: t.childNodeIndex + e })
            : t,
        )
      }
      function vt(t, e, n) {
        const {
            selector: r,
            type: o,
            redundantAttribute: s,
            expressions: i,
          } = e,
          a = r ? t.querySelector(r) : t
        s && a.removeAttribute(s)
        const u = i || []
        return (ft[o] || ft[2])(
          a,
          Object.assign({}, e, { expressions: n && !r ? mt(u, n) : u }),
        )
      }
      function gt(t, e) {
        switch (!0) {
          case F(t):
            o(e, t)
            break
          case q(t):
            t.parentNode.replaceChild(e, t)
            break
          default:
            t.appendChild(e)
        }
      }
      const At = Object.freeze({
        createDOM(t) {
          return (
            (this.dom =
              this.dom ||
              (function (t, e) {
                return (
                  e &&
                  ('string' == typeof e
                    ? (function (t, e) {
                        return F(t)
                          ? (function (t, e) {
                              return e.ownerDocument.importNode(
                                new window.DOMParser().parseFromString(
                                  `<svg xmlns="http://www.w3.org/2000/svg">${t}</svg>`,
                                  'application/xml',
                                ).documentElement,
                                !0,
                              )
                            })(e, t)
                          : (function (t, e) {
                              const n = q(e)
                                ? e
                                : document.createElement('template')
                              return (n.innerHTML = t), n.content
                            })(e, t)
                      })(t, e)
                    : e)
                )
              })(t, this.html) ||
              document.createDocumentFragment()),
            this
          )
        },
        mount(t, e, n, r) {
          if ((void 0 === r && (r = {}), !t))
            throw new Error(
              'Please provide DOM node to mount properly your template',
            )
          this.el && this.unmount(e)
          const { fragment: o, children: s, avoidDOMInjection: i } = r,
            { parentNode: a } = s ? s[0] : t,
            u = q(t),
            c = u
              ? (function (t, e, n) {
                  const r = Array.from(t.childNodes)
                  return Math.max(r.indexOf(e), r.indexOf(n.head) + 1, 0)
                })(a, t, r)
              : null
          this.createDOM(t)
          const l = o || this.dom.cloneNode(!0)
          return (
            (this.el = u ? a : t),
            (this.children = u ? s || Array.from(l.childNodes) : null),
            !i && l && gt(t, l),
            (this.bindings = this.bindingsData.map((t) => vt(this.el, t, c))),
            this.bindings.forEach((t) => t.mount(e, n)),
            (this.meta = r),
            this
          )
        },
        update(t, e) {
          return this.bindings.forEach((n) => n.update(t, e)), this
        },
        unmount(t, e, n) {
          void 0 === n && (n = !1)
          const r = this.el
          if (!r) return this
          switch ((this.bindings.forEach((r) => r.unmount(t, e, n)), !0)) {
            case r[T] || null === n:
              break
            case Array.isArray(this.children):
              i(this.children)
              break
            case !n:
              s(r)
              break
            case !!n:
              a(r)
          }
          return (this.el = null), this
        },
        clone() {
          return Object.assign({}, this, { meta: {}, el: null })
        },
      })
      function bt(t, e) {
        return (
          void 0 === e && (e = []),
          Object.assign({}, At, { html: t, bindingsData: e })
        )
      }
      var yt = Object.freeze({
        __proto__: null,
        template: bt,
        createBinding: vt,
        createExpression: ut,
        bindingTypes: I,
        expressionTypes: U,
      })
      function Et() {
        return this
      }
      function xt(t) {
        return z(t)
          ? t.prototype && t.prototype.constructor
            ? new t()
            : t()
          : t
      }
      function Ot(t) {
        return Array.isArray(t)
          ? t
          : /^\[object (HTMLCollection|NodeList|Object)\]$/.test(
              Object.prototype.toString.call(t),
            ) && 'number' == typeof t.length
          ? Array.from(t)
          : [t]
      }
      function wt(t, e) {
        return Ot(
          'string' == typeof t ? (e || document).querySelectorAll(t) : t,
        )
      }
      const Ct = (t) => (1 === t.length ? t[0] : t)
      function Nt(t, e, n) {
        const r = 'object' == typeof e ? e : { [e]: n },
          o = Object.keys(r)
        return (
          Ot(t).forEach((t) => {
            o.forEach((e) => t.setAttribute(e, r[e]))
          }),
          t
        )
      }
      const Tt = new Map()
      var jt,
        _t = {
          CSS_BY_NAME: Tt,
          add(t, e) {
            return Tt.has(t) || (Tt.set(t, e), this.inject()), this
          },
          inject() {
            return (
              ((
                jt ||
                (Nt(
                  (jt =
                    wt('style[riot]')[0] || document.createElement('style')),
                  'type',
                  'text/css',
                ),
                jt.parentNode || document.head.appendChild(jt),
                jt)
              ).innerHTML = [...Tt.values()].join('\n')),
              this
            )
          },
          remove(t) {
            return Tt.has(t) && (Tt.delete(t), this.inject()), this
          },
        }
      function Mt(t) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r]
        return function () {
          for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
            r[o] = arguments[o]
          return (r = [...n, ...r]).length < t.length ? Mt(t, ...r) : t(...r)
        }
      }
      function St(t) {
        return (
          (function (t, e, n) {
            const r = 'string' == typeof e ? [e] : e
            return Ct(Ot(t).map((t) => Ct(r.map((e) => t.getAttribute(e)))))
          })(t, p) || t.tagName.toLowerCase()
        )
      }
      const Bt = Object.freeze({
          $(t) {
            return wt(t, this.root)[0]
          },
          $$(t) {
            return wt(t, this.root)
          },
        }),
        It = Object.freeze({ [d]: Et, [f]: Et, [m]: Et }),
        Ut = Object.freeze({
          [v]: Et,
          [g]: Et,
          [A]: Et,
          [b]: Et,
          [y]: Et,
          [E]: Et,
          [x]: Et,
        }),
        Rt = Object.assign({}, It, { clone: Et, createDOM: Et }),
        Pt = V(Lt)
      const kt = (t, e) => (t[l] = e)
      function Dt(t) {
        return [d, f, m].reduce((e, n) => ((e[n] = t(n)), e), {})
      }
      function Lt(t) {
        const { css: e, template: n, exports: r, name: o } = t,
          s = n
            ? (function (t, e) {
                const n = (function (t) {
                  return (
                    void 0 === t && (t = {}),
                    Object.entries(xt(t)).reduce((t, e) => {
                      let [n, r] = e
                      var o
                      return (
                        (t[
                          ((o = n),
                          o.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase())
                        ] = Lt(r)),
                        t
                      )
                    }, {})
                  )
                })(e.exports ? e.exports.components : {})
                return t(bt, U, I, (t) =>
                  t === e.name ? Pt(e) : n[t] || c.get(t),
                )
              })(n, t)
            : Rt
        return (t) => {
          let { slots: i, attributes: a, props: u } = t
          if (r && r[T])
            return (function (t, e) {
              let { slots: n, attributes: r, props: o, css: s, template: i } = e
              i && G('Pure components can not have html'),
                s && G('Pure components do not have css')
              const a = L(t({ slots: n, attributes: r, props: o }), It)
              return Dt(
                (t) =>
                  function () {
                    for (
                      var e = arguments.length, n = new Array(e), r = 0;
                      r < e;
                      r++
                    )
                      n[r] = arguments[r]
                    if (t === d) {
                      const [t] = n
                      k(t, T, !0), kt(t, a)
                    }
                    return a[t](...n), a
                  },
              )
            })(r, { slots: i, attributes: a, props: u, css: e, template: n })
          const c = xt(r) || {},
            l = $t({ css: e, template: s, componentAPI: c, name: o })({
              slots: i,
              attributes: a,
              props: u,
            })
          return {
            mount: (t, e, n) => l.mount(t, n, e),
            update: (t, e) => l.update(e, t),
            unmount: (t) => l.unmount(t),
          }
        }
      }
      function $t(t) {
        let { css: e, template: n, componentAPI: r, name: o } = t
        return (
          e && o && _t.add(o, e),
          Mt(qt)(
            D(
              L(r, Object.assign({}, Ut, { [O]: {}, [w]: {} })),
              Object.assign({ [C]: null, [N]: null }, Bt, {
                name: o,
                css: e,
                template: n,
              }),
            ),
          )
        )
      }
      function Ft(t, e) {
        return Object.assign({}, t, xt(e))
      }
      function qt(t, e) {
        let { slots: n, attributes: o, props: s } = e
        return (
          (i = (function (t) {
            return [...h].reduce((t, e) => e(t) || t, t)
          })(
            D(Y(t) ? Object.create(t) : t, {
              mount(e, i, a) {
                return (
                  void 0 === i && (i = {}),
                  k(e, T, !1),
                  (this[_] = a),
                  (this[M] = (function (t, e) {
                    void 0 === e && (e = [])
                    const n = e.map((e) => ut(t, e)),
                      r = {}
                    return Object.assign(
                      r,
                      Object.assign(
                        { expressions: n },
                        Dt((t) => (e) => (n.forEach((n) => n[t](e)), r)),
                      ),
                    )
                  })(e, o).mount(a)),
                  k(
                    this,
                    O,
                    Object.freeze(
                      Object.assign(
                        {},
                        (function (t, e) {
                          return (
                            void 0 === e && (e = {}),
                            Object.assign(
                              {},
                              (function (t) {
                                return Array.from(t.attributes).reduce(
                                  (t, e) => ((t[r(e.name)] = e.value), t),
                                  {},
                                )
                              })(t),
                              xt(e),
                            )
                          )
                        })(e, s),
                        J(this[M].expressions),
                      ),
                    ),
                  ),
                  (this.state = Ft(this.state, i)),
                  (this[S] = this.template.createDOM(e).clone()),
                  kt(e, this),
                  t.name &&
                    (function (t, e) {
                      St(t) !== e && Nt(t, p, e)
                    })(e, t.name),
                  k(this, N, e),
                  k(this, C, n),
                  this.onBeforeMount(this.props, this.state),
                  this[S].mount(e, this, a),
                  this.onMounted(this.props, this.state),
                  this
                )
              },
              update(t, e) {
                void 0 === t && (t = {}),
                  e && ((this[_] = e), this[M].update(e))
                const n = J(this[M].expressions)
                if (!1 !== this.shouldUpdate(n, this.props))
                  return (
                    k(this, O, Object.freeze(Object.assign({}, this.props, n))),
                    (this.state = Ft(this.state, t)),
                    this.onBeforeUpdate(this.props, this.state),
                    this[j] || ((this[j] = !0), this[S].update(this, this[_])),
                    this.onUpdated(this.props, this.state),
                    (this[j] = !1),
                    this
                  )
              },
              unmount(t) {
                return (
                  this.onBeforeUnmount(this.props, this.state),
                  this[M].unmount(),
                  this[S].unmount(this, this[_], null === t ? null : !t),
                  this.onUnmounted(this.props, this.state),
                  this
                )
              },
            }),
          )),
          Object.keys(t)
            .filter((e) => z(t[e]))
            .forEach((t) => {
              i[t] = i[t].bind(i)
            }),
          i
        )
        var i
      }
      const {
        DOM_COMPONENT_INSTANCE_PROPERTY: zt,
        COMPONENTS_IMPLEMENTATION_MAP: Yt,
        PLUGINS_SET: Kt,
      } = B
      function Ht(t, e) {
        let { css: n, template: r, exports: o } = e
        return (
          Yt.has(t) && G(`The component "${t}" was already registered`),
          Yt.set(t, Lt({ name: t, css: n, template: r, exports: o })),
          Yt
        )
      }
      function Zt(t) {
        return (
          Yt.has(t) || G(`The component "${t}" was never registered`),
          Yt.delete(t),
          _t.remove(t),
          Yt
        )
      }
      function Wt(t, e, n) {
        return wt(t).map((t) =>
          (function (t, e, n) {
            const r = n || St(t)
            return (
              c.has(r) || G(`The component named "${r}" was never registered`),
              c.get(r)({ props: e }).mount(t)
            )
          })(t, e, n),
        )
      }
      function Gt(t, e) {
        return wt(t).map((t) => (t[zt] && t[zt].unmount(e), t))
      }
      function Vt(t) {
        return (
          z(t) || G('Plugins must be of type function'),
          Kt.has(t) && G('This plugin was already installed'),
          Kt.add(t),
          Kt
        )
      }
      function Jt(t) {
        return (
          Kt.has(t) || G('This plugin was never installed'), Kt.delete(t), Kt
        )
      }
      function Qt(t) {
        return function (e, n, r) {
          let {
            slots: o,
            attributes: s,
            parentScope: i,
          } = void 0 === r ? {} : r
          return (function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n]
            return e.reduce(
              (t, e) =>
                function () {
                  return t(e(...arguments))
                },
            )
          })(
            (t) => t.mount(e, i),
            (t) => t({ props: n, slots: o, attributes: s }),
            Lt,
          )(t)
        }
      }
      function Xt(t) {
        return (
          z(t) || G('riot.pure accepts only arguments of type "function"'),
          (t[T] = !0),
          t
        )
      }
      const te = (t) => t,
        ee = 'v6.1.2',
        ne = {
          cssManager: _t,
          DOMBindings: yt,
          createComponent: Lt,
          defineComponent: $t,
          globals: B,
        }
    },
    790: (t) => {
      var e = {
        _stores: [],
        addStore: function (t) {
          this._stores.push(t)
        },
        reset: function () {
          this._stores = []
        },
      }
      ;['on', 'one', 'off', 'trigger'].forEach(function (t) {
        e[t] = function () {
          var e = [].slice.call(arguments)
          this._stores.forEach(function (n) {
            n[t].apply(n, e)
          })
        }
      }),
        (t.exports = e)
    },
    669: (t, e, n) => {
      'use strict'
      var r = n(379),
        o = n.n(r),
        s = n(795),
        i = n.n(s),
        a = n(569),
        u = n.n(a),
        c = n(565),
        l = n.n(c),
        h = n(216),
        p = n.n(h),
        d = n(589),
        f = n.n(d),
        m = n(622),
        v = {}
      ;(v.styleTagTransform = f()),
        (v.setAttributes = l()),
        (v.insert = u().bind(null, 'head')),
        (v.domAPI = i()),
        (v.insertStyleElement = p())
      var g = o()(m.default, v)
      if (!m.default.locals || t.hot.invalidate) {
        var A = !m.default.locals,
          b = A ? m : m.default.locals
        t.hot.accept(622, (e) => {
          ;(m = n(622)),
            (function (t, e, n) {
              if ((!t && e) || (t && !e)) return !1
              var r
              for (r in t)
                if ((!n || 'default' !== r) && t[r] !== e[r]) return !1
              for (r in e) if (!((n && 'default' === r) || t[r])) return !1
              return !0
            })(b, A ? m : m.default.locals, A)
              ? ((b = A ? m : m.default.locals), g(m.default))
              : t.hot.invalidate()
        })
      }
      t.hot.dispose(function () {
        g()
      }),
        m.default && m.default.locals && m.default.locals
    },
    379: (t) => {
      'use strict'
      var e = []
      function n(t) {
        for (var n = -1, r = 0; r < e.length; r++)
          if (e[r].identifier === t) {
            n = r
            break
          }
        return n
      }
      function r(t, r) {
        for (var s = {}, i = [], a = 0; a < t.length; a++) {
          var u = t[a],
            c = r.base ? u[0] + r.base : u[0],
            l = s[c] || 0,
            h = ''.concat(c, ' ').concat(l)
          s[c] = l + 1
          var p = n(h),
            d = {
              css: u[1],
              media: u[2],
              sourceMap: u[3],
              supports: u[4],
              layer: u[5],
            }
          if (-1 !== p) e[p].references++, e[p].updater(d)
          else {
            var f = o(d, r)
            ;(r.byIndex = a),
              e.splice(a, 0, { identifier: h, updater: f, references: 1 })
          }
          i.push(h)
        }
        return i
      }
      function o(t, e) {
        var n = e.domAPI(e)
        return (
          n.update(t),
          function (e) {
            if (e) {
              if (
                e.css === t.css &&
                e.media === t.media &&
                e.sourceMap === t.sourceMap &&
                e.supports === t.supports &&
                e.layer === t.layer
              )
                return
              n.update((t = e))
            } else n.remove()
          }
        )
      }
      t.exports = function (t, o) {
        var s = r((t = t || []), (o = o || {}))
        return function (t) {
          t = t || []
          for (var i = 0; i < s.length; i++) {
            var a = n(s[i])
            e[a].references--
          }
          for (var u = r(t, o), c = 0; c < s.length; c++) {
            var l = n(s[c])
            0 === e[l].references && (e[l].updater(), e.splice(l, 1))
          }
          s = u
        }
      }
    },
    569: (t) => {
      'use strict'
      var e = {}
      t.exports = function (t, n) {
        var r = (function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t)
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head
              } catch (t) {
                n = null
              }
            e[t] = n
          }
          return e[t]
        })(t)
        if (!r)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
          )
        r.appendChild(n)
      }
    },
    216: (t) => {
      'use strict'
      t.exports = function (t) {
        var e = document.createElement('style')
        return t.setAttributes(e, t.attributes), t.insert(e, t.options), e
      }
    },
    565: (t, e, n) => {
      'use strict'
      t.exports = function (t) {
        var e = n.nc
        e && t.setAttribute('nonce', e)
      }
    },
    795: (t) => {
      'use strict'
      t.exports = function (t) {
        var e = t.insertStyleElement(t)
        return {
          update: function (n) {
            !(function (t, e, n) {
              var r = ''
              n.supports && (r += '@supports ('.concat(n.supports, ') {')),
                n.media && (r += '@media '.concat(n.media, ' {'))
              var o = void 0 !== n.layer
              o &&
                (r += '@layer'.concat(
                  n.layer.length > 0 ? ' '.concat(n.layer) : '',
                  ' {',
                )),
                (r += n.css),
                o && (r += '}'),
                n.media && (r += '}'),
                n.supports && (r += '}')
              var s = n.sourceMap
              s &&
                'undefined' != typeof btoa &&
                (r +=
                  '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                    ' */',
                  )),
                e.styleTagTransform(r, t, e.options)
            })(e, t, n)
          },
          remove: function () {
            !(function (t) {
              if (null === t.parentNode) return !1
              t.parentNode.removeChild(t)
            })(e)
          },
        }
      }
    },
    589: (t) => {
      'use strict'
      t.exports = function (t, e) {
        if (e.styleSheet) e.styleSheet.cssText = t
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild)
          e.appendChild(document.createTextNode(t))
        }
      }
    },
    511: function (t, e, n) {
      var r
      ;(t = n.nmd(t)),
        (function (o) {
          e && e.nodeType, t && t.nodeType
          var s = 'object' == typeof n.g && n.g
          s.global !== s && s.window !== s && s.self
          var i,
            a = 2147483647,
            u = 36,
            c = /^xn--/,
            l = /[^\x20-\x7E]/,
            h = /[\x2E\u3002\uFF0E\uFF61]/g,
            p = {
              overflow: 'Overflow: input needs wider integers to process',
              'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
              'invalid-input': 'Invalid input',
            },
            d = Math.floor,
            f = String.fromCharCode
          function m(t) {
            throw RangeError(p[t])
          }
          function v(t, e) {
            for (var n = t.length, r = []; n--; ) r[n] = e(t[n])
            return r
          }
          function g(t, e) {
            var n = t.split('@'),
              r = ''
            return (
              n.length > 1 && ((r = n[0] + '@'), (t = n[1])),
              r + v((t = t.replace(h, '.')).split('.'), e).join('.')
            )
          }
          function A(t) {
            for (var e, n, r = [], o = 0, s = t.length; o < s; )
              (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < s
                ? 56320 == (64512 & (n = t.charCodeAt(o++)))
                  ? r.push(((1023 & e) << 10) + (1023 & n) + 65536)
                  : (r.push(e), o--)
                : r.push(e)
            return r
          }
          function b(t) {
            return v(t, function (t) {
              var e = ''
              return (
                t > 65535 &&
                  ((e += f((((t -= 65536) >>> 10) & 1023) | 55296)),
                  (t = 56320 | (1023 & t))),
                e + f(t)
              )
            }).join('')
          }
          function y(t, e) {
            return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
          }
          function E(t, e, n) {
            var r = 0
            for (t = n ? d(t / 700) : t >> 1, t += d(t / e); t > 455; r += u)
              t = d(t / 35)
            return d(r + (36 * t) / (t + 38))
          }
          function x(t) {
            var e,
              n,
              r,
              o,
              s,
              i,
              c,
              l,
              h,
              p,
              f,
              v = [],
              g = t.length,
              A = 0,
              y = 128,
              x = 72
            for ((n = t.lastIndexOf('-')) < 0 && (n = 0), r = 0; r < n; ++r)
              t.charCodeAt(r) >= 128 && m('not-basic'), v.push(t.charCodeAt(r))
            for (o = n > 0 ? n + 1 : 0; o < g; ) {
              for (
                s = A, i = 1, c = u;
                o >= g && m('invalid-input'),
                  ((l =
                    (f = t.charCodeAt(o++)) - 48 < 10
                      ? f - 22
                      : f - 65 < 26
                      ? f - 65
                      : f - 97 < 26
                      ? f - 97
                      : u) >= u ||
                    l > d((a - A) / i)) &&
                    m('overflow'),
                  (A += l * i),
                  !(l < (h = c <= x ? 1 : c >= x + 26 ? 26 : c - x));
                c += u
              )
                i > d(a / (p = u - h)) && m('overflow'), (i *= p)
              ;(x = E(A - s, (e = v.length + 1), 0 == s)),
                d(A / e) > a - y && m('overflow'),
                (y += d(A / e)),
                (A %= e),
                v.splice(A++, 0, y)
            }
            return b(v)
          }
          function O(t) {
            var e,
              n,
              r,
              o,
              s,
              i,
              c,
              l,
              h,
              p,
              v,
              g,
              b,
              x,
              O,
              w = []
            for (
              g = (t = A(t)).length, e = 128, n = 0, s = 72, i = 0;
              i < g;
              ++i
            )
              (v = t[i]) < 128 && w.push(f(v))
            for (r = o = w.length, o && w.push('-'); r < g; ) {
              for (c = a, i = 0; i < g; ++i) (v = t[i]) >= e && v < c && (c = v)
              for (
                c - e > d((a - n) / (b = r + 1)) && m('overflow'),
                  n += (c - e) * b,
                  e = c,
                  i = 0;
                i < g;
                ++i
              )
                if (((v = t[i]) < e && ++n > a && m('overflow'), v == e)) {
                  for (
                    l = n, h = u;
                    !(l < (p = h <= s ? 1 : h >= s + 26 ? 26 : h - s));
                    h += u
                  )
                    (O = l - p),
                      (x = u - p),
                      w.push(f(y(p + (O % x), 0))),
                      (l = d(O / x))
                  w.push(f(y(l, 0))), (s = E(n, b, r == o)), (n = 0), ++r
                }
              ++n, ++e
            }
            return w.join('')
          }
          ;(i = {
            version: '1.3.2',
            ucs2: { decode: A, encode: b },
            decode: x,
            encode: O,
            toASCII: function (t) {
              return g(t, function (t) {
                return l.test(t) ? 'xn--' + O(t) : t
              })
            },
            toUnicode: function (t) {
              return g(t, function (t) {
                return c.test(t) ? x(t.slice(4).toLowerCase()) : t
              })
            },
          }),
            void 0 ===
              (r = function () {
                return i
              }.call(e, n, e, t)) || (t.exports = r)
        })()
    },
    575: (t, e, n) => {
      'use strict'
      var r = n(511),
        o = n(502)
      function s() {
        ;(this.protocol = null),
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
          (this.href = null)
      }
      ;(e.parse = b),
        (e.resolve = function (t, e) {
          return b(t, !1, !0).resolve(e)
        }),
        (e.resolveObject = function (t, e) {
          return t ? b(t, !1, !0).resolveObject(e) : e
        }),
        (e.format = function (t) {
          return (
            o.isString(t) && (t = b(t)),
            t instanceof s ? t.format() : s.prototype.format.call(t)
          )
        }),
        (e.Url = s)
      var i = /^([a-z0-9.+-]+:)/i,
        a = /:[0-9]*$/,
        u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        c = ['{', '}', '|', '\\', '^', '`'].concat([
          '<',
          '>',
          '"',
          '`',
          ' ',
          '\r',
          '\n',
          '\t',
        ]),
        l = ["'"].concat(c),
        h = ['%', '/', '?', ';', '#'].concat(l),
        p = ['/', '?', '#'],
        d = /^[+a-z0-9A-Z_-]{0,63}$/,
        f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        m = { javascript: !0, 'javascript:': !0 },
        v = { javascript: !0, 'javascript:': !0 },
        g = {
          http: !0,
          https: !0,
          ftp: !0,
          gopher: !0,
          file: !0,
          'http:': !0,
          'https:': !0,
          'ftp:': !0,
          'gopher:': !0,
          'file:': !0,
        },
        A = n(673)
      function b(t, e, n) {
        if (t && o.isObject(t) && t instanceof s) return t
        var r = new s()
        return r.parse(t, e, n), r
      }
      ;(s.prototype.parse = function (t, e, n) {
        if (!o.isString(t))
          throw new TypeError(
            "Parameter 'url' must be a string, not " + typeof t,
          )
        var s = t.indexOf('?'),
          a = -1 !== s && s < t.indexOf('#') ? '?' : '#',
          c = t.split(a)
        c[0] = c[0].replace(/\\/g, '/')
        var b = (t = c.join(a))
        if (((b = b.trim()), !n && 1 === t.split('#').length)) {
          var y = u.exec(b)
          if (y)
            return (
              (this.path = b),
              (this.href = b),
              (this.pathname = y[1]),
              y[2]
                ? ((this.search = y[2]),
                  (this.query = e
                    ? A.parse(this.search.substr(1))
                    : this.search.substr(1)))
                : e && ((this.search = ''), (this.query = {})),
              this
            )
        }
        var E = i.exec(b)
        if (E) {
          var x = (E = E[0]).toLowerCase()
          ;(this.protocol = x), (b = b.substr(E.length))
        }
        if (n || E || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
          var O = '//' === b.substr(0, 2)
          !O || (E && v[E]) || ((b = b.substr(2)), (this.slashes = !0))
        }
        if (!v[E] && (O || (E && !g[E]))) {
          for (var w, C, N = -1, T = 0; T < p.length; T++)
            -1 !== (j = b.indexOf(p[T])) && (-1 === N || j < N) && (N = j)
          for (
            -1 !==
              (C = -1 === N ? b.lastIndexOf('@') : b.lastIndexOf('@', N)) &&
              ((w = b.slice(0, C)),
              (b = b.slice(C + 1)),
              (this.auth = decodeURIComponent(w))),
              N = -1,
              T = 0;
            T < h.length;
            T++
          ) {
            var j
            ;-1 !== (j = b.indexOf(h[T])) && (-1 === N || j < N) && (N = j)
          }
          ;-1 === N && (N = b.length),
            (this.host = b.slice(0, N)),
            (b = b.slice(N)),
            this.parseHost(),
            (this.hostname = this.hostname || '')
          var _ =
            '[' === this.hostname[0] &&
            ']' === this.hostname[this.hostname.length - 1]
          if (!_)
            for (
              var M = this.hostname.split(/\./), S = ((T = 0), M.length);
              T < S;
              T++
            ) {
              var B = M[T]
              if (B && !B.match(d)) {
                for (var I = '', U = 0, R = B.length; U < R; U++)
                  B.charCodeAt(U) > 127 ? (I += 'x') : (I += B[U])
                if (!I.match(d)) {
                  var P = M.slice(0, T),
                    k = M.slice(T + 1),
                    D = B.match(f)
                  D && (P.push(D[1]), k.unshift(D[2])),
                    k.length && (b = '/' + k.join('.') + b),
                    (this.hostname = P.join('.'))
                  break
                }
              }
            }
          this.hostname.length > 255
            ? (this.hostname = '')
            : (this.hostname = this.hostname.toLowerCase()),
            _ || (this.hostname = r.toASCII(this.hostname))
          var L = this.port ? ':' + this.port : '',
            $ = this.hostname || ''
          ;(this.host = $ + L),
            (this.href += this.host),
            _ &&
              ((this.hostname = this.hostname.substr(
                1,
                this.hostname.length - 2,
              )),
              '/' !== b[0] && (b = '/' + b))
        }
        if (!m[x])
          for (T = 0, S = l.length; T < S; T++) {
            var F = l[T]
            if (-1 !== b.indexOf(F)) {
              var q = encodeURIComponent(F)
              q === F && (q = escape(F)), (b = b.split(F).join(q))
            }
          }
        var z = b.indexOf('#')
        ;-1 !== z && ((this.hash = b.substr(z)), (b = b.slice(0, z)))
        var Y = b.indexOf('?')
        if (
          (-1 !== Y
            ? ((this.search = b.substr(Y)),
              (this.query = b.substr(Y + 1)),
              e && (this.query = A.parse(this.query)),
              (b = b.slice(0, Y)))
            : e && ((this.search = ''), (this.query = {})),
          b && (this.pathname = b),
          g[x] && this.hostname && !this.pathname && (this.pathname = '/'),
          this.pathname || this.search)
        ) {
          L = this.pathname || ''
          var K = this.search || ''
          this.path = L + K
        }
        return (this.href = this.format()), this
      }),
        (s.prototype.format = function () {
          var t = this.auth || ''
          t &&
            ((t = (t = encodeURIComponent(t)).replace(/%3A/i, ':')), (t += '@'))
          var e = this.protocol || '',
            n = this.pathname || '',
            r = this.hash || '',
            s = !1,
            i = ''
          this.host
            ? (s = t + this.host)
            : this.hostname &&
              ((s =
                t +
                (-1 === this.hostname.indexOf(':')
                  ? this.hostname
                  : '[' + this.hostname + ']')),
              this.port && (s += ':' + this.port)),
            this.query &&
              o.isObject(this.query) &&
              Object.keys(this.query).length &&
              (i = A.stringify(this.query))
          var a = this.search || (i && '?' + i) || ''
          return (
            e && ':' !== e.substr(-1) && (e += ':'),
            this.slashes || ((!e || g[e]) && !1 !== s)
              ? ((s = '//' + (s || '')),
                n && '/' !== n.charAt(0) && (n = '/' + n))
              : s || (s = ''),
            r && '#' !== r.charAt(0) && (r = '#' + r),
            a && '?' !== a.charAt(0) && (a = '?' + a),
            e +
              s +
              (n = n.replace(/[?#]/g, function (t) {
                return encodeURIComponent(t)
              })) +
              (a = a.replace('#', '%23')) +
              r
          )
        }),
        (s.prototype.resolve = function (t) {
          return this.resolveObject(b(t, !1, !0)).format()
        }),
        (s.prototype.resolveObject = function (t) {
          if (o.isString(t)) {
            var e = new s()
            e.parse(t, !1, !0), (t = e)
          }
          for (
            var n = new s(), r = Object.keys(this), i = 0;
            i < r.length;
            i++
          ) {
            var a = r[i]
            n[a] = this[a]
          }
          if (((n.hash = t.hash), '' === t.href))
            return (n.href = n.format()), n
          if (t.slashes && !t.protocol) {
            for (var u = Object.keys(t), c = 0; c < u.length; c++) {
              var l = u[c]
              'protocol' !== l && (n[l] = t[l])
            }
            return (
              g[n.protocol] &&
                n.hostname &&
                !n.pathname &&
                (n.path = n.pathname = '/'),
              (n.href = n.format()),
              n
            )
          }
          if (t.protocol && t.protocol !== n.protocol) {
            if (!g[t.protocol]) {
              for (var h = Object.keys(t), p = 0; p < h.length; p++) {
                var d = h[p]
                n[d] = t[d]
              }
              return (n.href = n.format()), n
            }
            if (((n.protocol = t.protocol), t.host || v[t.protocol]))
              n.pathname = t.pathname
            else {
              for (
                var f = (t.pathname || '').split('/');
                f.length && !(t.host = f.shift());

              );
              t.host || (t.host = ''),
                t.hostname || (t.hostname = ''),
                '' !== f[0] && f.unshift(''),
                f.length < 2 && f.unshift(''),
                (n.pathname = f.join('/'))
            }
            if (
              ((n.search = t.search),
              (n.query = t.query),
              (n.host = t.host || ''),
              (n.auth = t.auth),
              (n.hostname = t.hostname || t.host),
              (n.port = t.port),
              n.pathname || n.search)
            ) {
              var m = n.pathname || '',
                A = n.search || ''
              n.path = m + A
            }
            return (
              (n.slashes = n.slashes || t.slashes), (n.href = n.format()), n
            )
          }
          var b = n.pathname && '/' === n.pathname.charAt(0),
            y = t.host || (t.pathname && '/' === t.pathname.charAt(0)),
            E = y || b || (n.host && t.pathname),
            x = E,
            O = (n.pathname && n.pathname.split('/')) || [],
            w =
              ((f = (t.pathname && t.pathname.split('/')) || []),
              n.protocol && !g[n.protocol])
          if (
            (w &&
              ((n.hostname = ''),
              (n.port = null),
              n.host && ('' === O[0] ? (O[0] = n.host) : O.unshift(n.host)),
              (n.host = ''),
              t.protocol &&
                ((t.hostname = null),
                (t.port = null),
                t.host && ('' === f[0] ? (f[0] = t.host) : f.unshift(t.host)),
                (t.host = null)),
              (E = E && ('' === f[0] || '' === O[0]))),
            y)
          )
            (n.host = t.host || '' === t.host ? t.host : n.host),
              (n.hostname =
                t.hostname || '' === t.hostname ? t.hostname : n.hostname),
              (n.search = t.search),
              (n.query = t.query),
              (O = f)
          else if (f.length)
            O || (O = []),
              O.pop(),
              (O = O.concat(f)),
              (n.search = t.search),
              (n.query = t.query)
          else if (!o.isNullOrUndefined(t.search))
            return (
              w &&
                ((n.hostname = n.host = O.shift()),
                (_ =
                  !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@')) &&
                  ((n.auth = _.shift()), (n.host = n.hostname = _.shift()))),
              (n.search = t.search),
              (n.query = t.query),
              (o.isNull(n.pathname) && o.isNull(n.search)) ||
                (n.path =
                  (n.pathname ? n.pathname : '') + (n.search ? n.search : '')),
              (n.href = n.format()),
              n
            )
          if (!O.length)
            return (
              (n.pathname = null),
              n.search ? (n.path = '/' + n.search) : (n.path = null),
              (n.href = n.format()),
              n
            )
          for (
            var C = O.slice(-1)[0],
              N =
                ((n.host || t.host || O.length > 1) &&
                  ('.' === C || '..' === C)) ||
                '' === C,
              T = 0,
              j = O.length;
            j >= 0;
            j--
          )
            '.' === (C = O[j])
              ? O.splice(j, 1)
              : '..' === C
              ? (O.splice(j, 1), T++)
              : T && (O.splice(j, 1), T--)
          if (!E && !x) for (; T--; T) O.unshift('..')
          !E ||
            '' === O[0] ||
            (O[0] && '/' === O[0].charAt(0)) ||
            O.unshift(''),
            N && '/' !== O.join('/').substr(-1) && O.push('')
          var _,
            M = '' === O[0] || (O[0] && '/' === O[0].charAt(0))
          return (
            w &&
              ((n.hostname = n.host = M ? '' : O.length ? O.shift() : ''),
              (_ =
                !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@')) &&
                ((n.auth = _.shift()), (n.host = n.hostname = _.shift()))),
            (E = E || (n.host && O.length)) && !M && O.unshift(''),
            O.length
              ? (n.pathname = O.join('/'))
              : ((n.pathname = null), (n.path = null)),
            (o.isNull(n.pathname) && o.isNull(n.search)) ||
              (n.path =
                (n.pathname ? n.pathname : '') + (n.search ? n.search : '')),
            (n.auth = t.auth || n.auth),
            (n.slashes = n.slashes || t.slashes),
            (n.href = n.format()),
            n
          )
        }),
        (s.prototype.parseHost = function () {
          var t = this.host,
            e = a.exec(t)
          e &&
            (':' !== (e = e[0]) && (this.port = e.substr(1)),
            (t = t.substr(0, t.length - e.length))),
            t && (this.hostname = t)
        })
    },
    502: (t) => {
      'use strict'
      t.exports = {
        isString: function (t) {
          return 'string' == typeof t
        },
        isObject: function (t) {
          return 'object' == typeof t && null !== t
        },
        isNull: function (t) {
          return null === t
        },
        isNullOrUndefined: function (t) {
          return null == t
        },
      }
    },
    191: (t, e, n) => {
      var r = { './loader.riot': 283 }
      function o(t) {
        var e = s(t)
        return n(e)
      }
      function s(t) {
        if (!n.o(r, t)) {
          var e = new Error("Cannot find module '" + t + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return r[t]
      }
      ;(o.keys = function () {
        return Object.keys(r)
      }),
        (o.resolve = s),
        (t.exports = o),
        (o.id = 191)
    },
    471: (t, e, n) => {
      'use strict'
      n(74)
      var r = n(69),
        o = n(833)
      const s = n(191)
      n(75),
        n(669),
        s.keys().map((t) => {
          const e = ((t, e = '') => t.split('/').reverse()[0].replace(e, ''))(
              t,
              '.riot',
            ),
            n = s(t)
          return (0, r.register)(e, n.default || n), { name: e, component: n }
        }),
        (0, r.component)(o.Z)(document.getElementById('root'))
    },
    75: (t, e, n) => {
      'use strict'
      n.d(e, { Z: () => s })
      var r = n(432),
        o = n.n(r)
      const s = function () {
        o()(this)
        const t = this
        ;(t.items = [
          { id: 1, title: 'Foobar' },
          { id: 2, title: 'Foobaz' },
          { id: 3, title: 'Barbar' },
        ]),
          t.on('item_list_init', () => {
            t.trigger('item_list_changed', t.items)
          }),
          t.on('item_list_search', (e) => {
            let n = t.items
            e.length > 0 &&
              (n = t.items.filter(
                (t) =>
                  -1 !=
                  t.title.toLowerCase().search(new RegExp(e.toLowerCase())),
              )),
              t.trigger('item_list_changed', n)
          }),
          t.on('item_detail_add', (e) => {
            t.items.push({ id: t.items.length + 1, title: e }),
              t.trigger('item_list_changed', t.items)
          }),
          t.on('route_item', (e) => {
            let n = null
            t.items.forEach((t) => {
              t.id == e && (n = t)
            }),
              t.trigger('item_detail_changed', n)
          })
      }
    },
    979: (t, e, n) => {
      'use strict'
      n.d(e, { Z: () => r })
      const r = [
        { path: '', label: 'ItemApp', componentName: 'item-app' },
        {
          path: '/#view/(.*)',
          label: 'ItemDetail',
          componentName: 'item-detail',
        },
        { path: '/#add', label: 'AddItem', componentName: 'add-item' },
      ]
    },
  },
  (t) => {
    t.O(
      0,
      [143],
      () => {
        t.E(252), t.E(473)
      },
      5,
    ),
      t((t.s = 471))
  },
])
//# sourceMappingURL=app.bundle.js.map
