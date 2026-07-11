// src/styles.scss
var styles_default = `/* === CUSTOM SIDEBAR === */

.custom-sidebar {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-start;
  width: 100%;
  padding-inline: 0;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--lightgray);
  box-sizing: border-box;

  &-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--secondary);
    margin-bottom: 0.75rem;
  }

  &-title {
    font-family: var(--headerFont);
    color: var(--dark);
    font-size: 1.25rem;
    margin: 0 0 0.25rem;
  }

  &-tagline {
    font-family: var(--bodyFont);
    color: var(--gray);
    font-size: 0.85rem;
    line-height: 1.4;
    margin: 0 0 1rem;
  }

  &-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    margin-bottom: 1rem;

    a {
      font-family: var(--bodyFont);
      color: var(--darkgray);
      font-size: 0.9rem;
      text-decoration: none;
      padding-block: 0.15rem;
      transition: color 0.15s ease;

      &:hover,
      &:focus-visible {
        color: var(--secondary);
      }

      &[aria-current="page"] {
        color: var(--dark);
        font-weight: 600;
      }
    }
  }

  &-socials {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: var(--codeFont);

    a {
      color: var(--gray);
      display: inline-flex;
      transition: color 0.15s ease;

      &:hover,
      &:focus-visible {
        color: var(--tertiary);
      }

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
}

/* Tablet: sidebar narrows to a fixed rail, so keep type from wrapping awkwardly */
@media (min-width: 800px) and (max-width: 1199px) {
  .custom-sidebar {
    &-title {
      font-size: clamp(1rem, 1.1vw + 0.7rem, 1.25rem);
    }

    &-tagline {
      font-size: clamp(0.75rem, 0.6vw + 0.6rem, 0.85rem);
    }
  }
}

/* Mobile: sidebar becomes a horizontal sticky top bar in custom.scss,
   the full vertical identity block doesn't fit \u2014 hide it and rely on
   the existing mobile hamburger/explorer drawer instead. */
@media (max-width: 799px) {
  .custom-sidebar {
    display: none;
  }
}

/* RTL: flip alignment so avatar/title/nav/socials read from the right.
   No margin-left/padding-right is used above, so logical properties
   already do most of the work \u2014 this just fixes the flex alignment axis. */
[dir="rtl"] .custom-sidebar {
  align-items: flex-end;
  text-align: right;

  &-nav {
    align-items: flex-end;
  }

  &-socials {
    flex-direction: row-reverse;
  }
}
`;

// node_modules/preact/dist/preact.mjs
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var a;
var s;
var h;
var p;
var v;
var y;
var d = {};
var w = [];
var _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var g = Array.isArray;
function m(n2, l2) {
  for (var u3 in l2) n2[u3] = l2[u3];
  return n2;
}
function b(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function x(n2, t2, i2, r2, o2) {
  var e2 = { type: n2, props: t2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u : o2, __i: -1, __u: 0 };
  return null == o2 && null != l.vnode && l.vnode(e2), e2;
}
function S(n2) {
  return n2.children;
}
function C(n2, l2) {
  this.props = n2, this.context = l2;
}
function $(n2, l2) {
  if (null == l2) return n2.__ ? $(n2.__, n2.__i + 1) : null;
  for (var u3; l2 < n2.__k.length; l2++) if (null != (u3 = n2.__k[l2]) && null != u3.__e) return u3.__e;
  return "function" == typeof n2.type ? $(n2) : null;
}
function I(n2) {
  if (n2.__P && n2.__d) {
    var u3 = n2.__v, t2 = u3.__e, i2 = [], r2 = [], o2 = m({}, u3);
    o2.__v = u3.__v + 1, l.vnode && l.vnode(o2), q(n2.__P, o2, u3, n2.__n, n2.__P.namespaceURI, 32 & u3.__u ? [t2] : null, i2, null == t2 ? $(u3) : t2, !!(32 & u3.__u), r2), o2.__v = u3.__v, o2.__.__k[o2.__i] = o2, D(i2, o2, r2), u3.__e = u3.__ = null, o2.__e != t2 && P(o2);
  }
}
function P(n2) {
  if (null != (n2 = n2.__) && null != n2.__c) return n2.__e = n2.__c.base = null, n2.__k.some(function(l2) {
    if (null != l2 && null != l2.__e) return n2.__e = n2.__c.base = l2.__e;
  }), P(n2);
}
function A(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !H.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(H);
}
function H() {
  try {
    for (var n2, l2 = 1; i.length; ) i.length > l2 && i.sort(e), n2 = i.shift(), l2 = i.length, I(n2);
  } finally {
    i.length = H.__r = 0;
  }
}
function L(n2, l2, u3, t2, i2, r2, o2, e2, f3, c2, a2) {
  var s2, h2, p2, v2, y2, _2, g2, m2 = t2 && t2.__k || w, b2 = l2.length;
  for (f3 = T(u3, l2, m2, f3, b2), s2 = 0; s2 < b2; s2++) null != (p2 = u3.__k[s2]) && (h2 = -1 != p2.__i && m2[p2.__i] || d, p2.__i = s2, _2 = q(n2, p2, h2, i2, r2, o2, e2, f3, c2, a2), v2 = p2.__e, p2.ref && h2.ref != p2.ref && (h2.ref && J(h2.ref, null, p2), a2.push(p2.ref, p2.__c || v2, p2)), null == y2 && null != v2 && (y2 = v2), (g2 = !!(4 & p2.__u)) || h2.__k === p2.__k ? (f3 = j(p2, f3, n2, g2), g2 && h2.__e && (h2.__e = null)) : "function" == typeof p2.type && void 0 !== _2 ? f3 = _2 : v2 && (f3 = v2.nextSibling), p2.__u &= -7);
  return u3.__e = y2, f3;
}
function T(n2, l2, u3, t2, i2) {
  var r2, o2, e2, f3, c2, a2 = u3.length, s2 = a2, h2 = 0;
  for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? ("string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? o2 = n2.__k[r2] = x(null, o2, null, null, null) : g(o2) ? o2 = n2.__k[r2] = x(S, { children: o2 }, null, null, null) : void 0 === o2.constructor && o2.__b > 0 ? o2 = n2.__k[r2] = x(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : n2.__k[r2] = o2, f3 = r2 + h2, o2.__ = n2, o2.__b = n2.__b + 1, e2 = null, -1 != (c2 = o2.__i = O(o2, u3, f3, s2)) && (s2--, (e2 = u3[c2]) && (e2.__u |= 2)), null == e2 || null == e2.__v ? (-1 == c2 && (i2 > a2 ? h2-- : i2 < a2 && h2++), "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f3 && (c2 == f3 - 1 ? h2-- : c2 == f3 + 1 ? h2++ : (c2 > f3 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
  if (s2) for (r2 = 0; r2 < a2; r2++) null != (e2 = u3[r2]) && 0 == (2 & e2.__u) && (e2.__e == t2 && (t2 = $(e2)), K(e2, e2));
  return t2;
}
function j(n2, l2, u3, t2) {
  var i2, r2;
  if ("function" == typeof n2.type) {
    for (i2 = n2.__k, r2 = 0; i2 && r2 < i2.length; r2++) i2[r2] && (i2[r2].__ = n2, l2 = j(i2[r2], l2, u3, t2));
    return l2;
  }
  n2.__e != l2 && (t2 && (l2 && n2.type && !l2.parentNode && (l2 = $(n2)), u3.insertBefore(n2.__e, l2 || null)), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 == l2.nodeType);
  return l2;
}
function O(n2, l2, u3, t2) {
  var i2, r2, o2, e2 = n2.key, f3 = n2.type, c2 = l2[u3], a2 = null != c2 && 0 == (2 & c2.__u);
  if (null === c2 && null == e2 || a2 && e2 == c2.key && f3 == c2.type) return u3;
  if (t2 > (a2 ? 1 : 0)) {
    for (i2 = u3 - 1, r2 = u3 + 1; i2 >= 0 || r2 < l2.length; ) if (null != (c2 = l2[o2 = i2 >= 0 ? i2-- : r2++]) && 0 == (2 & c2.__u) && e2 == c2.key && f3 == c2.type) return o2;
  }
  return -1;
}
function z(n2, l2, u3) {
  "-" == l2[0] ? n2.setProperty(l2, null == u3 ? "" : u3) : n2[l2] = null == u3 ? "" : "number" != typeof u3 || _.test(l2) ? u3 : u3 + "px";
}
function N(n2, l2, u3, t2, i2) {
  var r2, o2;
  n: if ("style" == l2) if ("string" == typeof u3) n2.style.cssText = u3;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u3 && l2 in u3 || z(n2.style, l2, "");
    if (u3) for (l2 in u3) t2 && u3[l2] == t2[l2] || z(n2.style, l2, u3[l2]);
  }
  else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(s, "$1")), o2 = l2.toLowerCase(), l2 = o2 in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? o2.slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u3, u3 ? t2 ? u3[a] = t2[a] : (u3[a] = h, n2.addEventListener(l2, r2 ? v : p, r2)) : n2.removeEventListener(l2, r2 ? v : p, r2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u3 ? "" : u3;
      break n;
    } catch (n3) {
    }
    "function" == typeof u3 || (null == u3 || false === u3 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u3 ? "" : u3));
  }
}
function V(n2) {
  return function(u3) {
    if (this.l) {
      var t2 = this.l[u3.type + n2];
      if (null == u3[c]) u3[c] = h++;
      else if (u3[c] < t2[a]) return;
      return t2(l.event ? l.event(u3) : u3);
    }
  };
}
function q(n2, u3, t2, i2, r2, o2, e2, f3, c2, a2) {
  var s2, h2, p2, v2, y2, d2, _2, k, x2, M, $2, I2, P2, A2, H2, T2, j2 = u3.type;
  if (void 0 !== u3.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f3 = u3.__e = t2.__e]), (s2 = l.__b) && s2(u3);
  n: if ("function" == typeof j2) {
    h2 = e2.length;
    try {
      if (x2 = u3.props, M = j2.prototype && j2.prototype.render, $2 = (s2 = j2.contextType) && i2[s2.__c], I2 = s2 ? $2 ? $2.props.value : s2.__ : i2, t2.__c ? k = (p2 = u3.__c = t2.__c).__ = p2.__E : (M ? u3.__c = p2 = new j2(x2, I2) : (u3.__c = p2 = new C(x2, I2), p2.constructor = j2, p2.render = Q), $2 && $2.sub(p2), p2.state || (p2.state = {}), p2.__n = i2, v2 = p2.__d = true, p2.__h = [], p2._sb = []), M && null == p2.__s && (p2.__s = p2.state), M && null != j2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = m({}, p2.__s)), m(p2.__s, j2.getDerivedStateFromProps(x2, p2.__s))), y2 = p2.props, d2 = p2.state, p2.__v = u3, v2) M && null == j2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), M && null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
      else {
        if (M && null == j2.getDerivedStateFromProps && x2 !== y2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(x2, I2), u3.__v == t2.__v || !p2.__e && null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(x2, p2.__s, I2)) {
          u3.__v != t2.__v && (p2.props = x2, p2.state = p2.__s, p2.__d = false), u3.__e = t2.__e, u3.__k = t2.__k, u3.__k.some(function(n3) {
            n3 && (n3.__ = u3);
          }), w.push.apply(p2.__h, p2._sb), p2._sb = [], p2.__h.length && e2.push(p2);
          break n;
        }
        null != p2.componentWillUpdate && p2.componentWillUpdate(x2, p2.__s, I2), M && null != p2.componentDidUpdate && p2.__h.push(function() {
          p2.componentDidUpdate(y2, d2, _2);
        });
      }
      if (p2.context = I2, p2.props = x2, p2.__P = n2, p2.__e = false, P2 = l.__r, A2 = 0, M) p2.state = p2.__s, p2.__d = false, P2 && P2(u3), s2 = p2.render(p2.props, p2.state, p2.context), w.push.apply(p2.__h, p2._sb), p2._sb = [];
      else do {
        p2.__d = false, P2 && P2(u3), s2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
      } while (p2.__d && ++A2 < 25);
      p2.state = p2.__s, null != p2.getChildContext && (i2 = m(m({}, i2), p2.getChildContext())), M && !v2 && null != p2.getSnapshotBeforeUpdate && (_2 = p2.getSnapshotBeforeUpdate(y2, d2)), H2 = null != s2 && s2.type === S && null == s2.key ? E(s2.props.children) : s2, f3 = L(n2, g(H2) ? H2 : [H2], u3, t2, i2, r2, o2, e2, f3, c2, a2), p2.base = u3.__e, u3.__u &= -161, p2.__h.length && e2.push(p2), k && (p2.__E = p2.__ = null);
    } catch (n3) {
      if (e2.length = h2, u3.__v = null, c2 || null != o2) {
        if (n3.then) {
          for (u3.__u |= c2 ? 160 : 128; f3 && 8 == f3.nodeType && f3.nextSibling; ) f3 = f3.nextSibling;
          null != o2 && (o2[o2.indexOf(f3)] = null), u3.__e = f3;
        } else if (null != o2) for (T2 = o2.length; T2--; ) b(o2[T2]);
      } else u3.__e = t2.__e;
      null == u3.__k && (u3.__k = t2.__k || []), n3.then || B(u3), l.__e(n3, u3, t2);
    }
  } else null == o2 && u3.__v == t2.__v ? (u3.__k = t2.__k, u3.__e = t2.__e) : f3 = u3.__e = G(t2.__e, u3, t2, i2, r2, o2, e2, c2, a2);
  return (s2 = l.diffed) && s2(u3), 128 & u3.__u ? void 0 : f3;
}
function B(n2) {
  n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(B));
}
function D(n2, u3, t2) {
  for (var i2 = 0; i2 < t2.length; i2++) J(t2[i2], t2[++i2], t2[++i2]);
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function E(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b > 0 ? n2 : g(n2) ? n2.map(E) : void 0 !== n2.constructor ? null : m({}, n2);
}
function G(u3, t2, i2, r2, o2, e2, f3, c2, a2) {
  var s2, h2, p2, v2, y2, w2, _2, m2 = i2.props || d, k = t2.props, x2 = t2.type;
  if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e2) {
    for (s2 = 0; s2 < e2.length; s2++) if ((y2 = e2[s2]) && "setAttribute" in y2 == !!x2 && (x2 ? y2.localName == x2 : 3 == y2.nodeType)) {
      u3 = y2, e2[s2] = null;
      break;
    }
  }
  if (null == u3) {
    if (null == x2) return document.createTextNode(k);
    u3 = document.createElementNS(o2, x2, k.is && k), c2 && (l.__m && l.__m(t2, e2), c2 = false), e2 = null;
  }
  if (null == x2) m2 === k || c2 && u3.data == k || (u3.data = k);
  else {
    if (e2 = "textarea" == x2 && null != k.defaultValue ? null : e2 && n.call(u3.childNodes), !c2 && null != e2) for (m2 = {}, s2 = 0; s2 < u3.attributes.length; s2++) m2[(y2 = u3.attributes[s2]).name] = y2.value;
    for (s2 in m2) y2 = m2[s2], "dangerouslySetInnerHTML" == s2 ? p2 = y2 : "children" == s2 || s2 in k || "value" == s2 && "defaultValue" in k || "checked" == s2 && "defaultChecked" in k || N(u3, s2, null, y2, o2);
    for (s2 in k) y2 = k[s2], "children" == s2 ? v2 = y2 : "dangerouslySetInnerHTML" == s2 ? h2 = y2 : "value" == s2 ? w2 = y2 : "checked" == s2 ? _2 = y2 : c2 && "function" != typeof y2 || m2[s2] === y2 || N(u3, s2, y2, m2[s2], o2);
    if (h2) c2 || p2 && (h2.__html == p2.__html || h2.__html == u3.innerHTML) || (u3.innerHTML = h2.__html), t2.__k = [];
    else if (p2 && (u3.innerHTML = ""), L("template" == t2.type ? u3.content : u3, g(v2) ? v2 : [v2], t2, i2, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e2, f3, e2 ? e2[0] : i2.__k && $(i2, 0), c2, a2), null != e2) for (s2 = e2.length; s2--; ) b(e2[s2]);
    c2 && "textarea" != x2 || (s2 = "value", "progress" == x2 && null == w2 ? u3.removeAttribute("value") : null != w2 && (w2 !== u3[s2] || "progress" == x2 && !w2 || "option" == x2 && w2 != m2[s2]) && N(u3, s2, w2, m2[s2], o2), s2 = "checked", null != _2 && _2 != u3[s2] && N(u3, s2, _2, m2[s2], o2));
  }
  return u3;
}
function J(n2, u3, t2) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == u3 || (n2.__u = n2(u3));
    } else n2.current = u3;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function K(n2, u3, t2) {
  var i2, r2;
  if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || J(i2, null, u3)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u3);
    }
    i2.base = i2.__P = i2.__n = null;
  }
  if (i2 = n2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && K(i2[r2], u3, t2 || "function" != typeof n2.type);
  t2 || b(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function Q(n2, l2, u3) {
  return this.constructor(n2, u3);
}
n = w.slice, l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, C.prototype.setState = function(n2, l2) {
  var u3;
  u3 = null != this.__s && this.__s != this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof n2 && (n2 = n2(m({}, u3), this.props)), n2 && m(u3, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), A(this));
}, C.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), A(this));
}, C.prototype.render = S, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, H.__r = 0, f = Math.random().toString(8), c = "__d" + f, a = "__a" + f, s = /(PointerCapture)$|Capture$/i, h = 0, p = V(false), v = V(true), y = 0;

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components.tsx
var defaultOptions = {
  siteTitle: "NileOverflow",
  tagline: "Security, Cloud, and the Art of the Hack.",
  avatarSrc: "/static/avatar.png",
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Blog", href: "/blog" },
    { text: "Categories", href: "/categories" },
    { text: "About", href: "/about" }
  ],
  socials: [
    { platform: "github", href: "https://github.com/yourhandle" },
    { platform: "linkedin", href: "https://linkedin.com/in/yourhandle" },
    { platform: "twitter", href: "https://twitter.com/yourhandle" }
  ]
};
var icons = {
  github: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6.2 0c2.3-1.6 3.4-1.2 3.4-1.2.6 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.7 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.5V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.3-1.8 3.6 0 4.1 2.4 4.1 5.4v6.2ZM5.3 7.4a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM7 20.4H3.6V9H7v11.4ZM22.2 0H1.8A1.8 1.8 0 0 0 0 1.8v20.4A1.8 1.8 0 0 0 1.8 24h20.4a1.8 1.8 0 0 0 1.8-1.8V1.8A1.8 1.8 0 0 0 22.2 0Z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M18.9 1.6h3.7l-8 9.2 9.5 12.6h-7.4l-5.8-7.6-6.6 7.6H.6l8.6-9.9L0 1.6h7.6l5.3 7 6-7Zm-1.3 19.5h2L6.5 3.8h-2l13.1 17.3Z"/></svg>'
};
var CustomSidebar = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts };
  const Component = ({ displayClass }) => {
    return /* @__PURE__ */ u2("div", { class: `custom-sidebar ${displayClass ?? ""}`, children: [
      /* @__PURE__ */ u2("img", { class: "custom-sidebar-avatar", src: opts.avatarSrc, alt: `${opts.siteTitle} avatar` }),
      /* @__PURE__ */ u2("h1", { class: "custom-sidebar-title", children: opts.siteTitle }),
      /* @__PURE__ */ u2("p", { class: "custom-sidebar-tagline", children: opts.tagline }),
      /* @__PURE__ */ u2("nav", { class: "custom-sidebar-nav", children: opts.navLinks.map((link) => /* @__PURE__ */ u2("a", { href: link.href, children: link.text })) }),
      /* @__PURE__ */ u2("div", { class: "custom-sidebar-socials", children: opts.socials.map((s2) => /* @__PURE__ */ u2(
        "a",
        {
          href: s2.href,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": s2.platform,
          dangerouslySetInnerHTML: { __html: icons[s2.platform] }
        }
      )) })
    ] });
  };
  Component.css = styles_default;
  return Component;
};
var components_default = CustomSidebar;

export {
  CustomSidebar,
  components_default
};
