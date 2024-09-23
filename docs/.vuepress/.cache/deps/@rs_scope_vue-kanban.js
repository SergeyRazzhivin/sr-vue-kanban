import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  normalizeClass,
  onUnmounted,
  openBlock,
  reactive,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  toDisplayString,
  unref,
  useAttrs,
  watch,
  withCtx
} from "./chunk-SY5PAXDJ.js";

// node_modules/.pnpm/@rs_scope+vue-kanban@0.0.3_@types+node@22.5.5_rollup@4.22.4_sortablejs@1.15.3_typescript@5.4._b4plja5y355dth6dvn4vjfyl74/node_modules/@rs_scope/vue-kanban/dist/vue-kanban.es.js
(function() {
  "use strict";
  var r;
  try {
    if (typeof document < "u") {
      var a = document.createElement("style");
      a.nonce = (r = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : r.content, a.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap";@import"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap";.app-card-priority .priority-block{display:flex;align-items:center;gap:5px}.app-card-priority .priority-block svg{width:20px;height:20px}.app-card-priority .priority-block svg.low{color:#fff}.app-card-priority .priority-block svg.medium{color:#ff8c00}.app-card-priority .priority-block svg.high{color:#e62323}.vue-kanban-header{display:flex;justify-content:center;color:#ff8c00}.vue-kanban-header h3{margin-bottom:.2rem}.vue-kanban-item{background-color:#1d1723;border-radius:10px;padding:10px;color:#fff;box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.vue-kanban{display:flex;-webkit-user-select:none!important;user-select:none!important;gap:10px;justify-content:space-between;height:100%}.vue-kanban .vue-kanban-column{flex:1;display:grid;grid-template-rows:auto 1fr auto}.vue-kanban .vue-kanban-column .vue-kanban-list{display:flex;flex-direction:column;gap:10px;border-radius:3px;padding:10px 0}.draggable{cursor:move}.sortable-fallback{opacity:1!important}img{border-radius:50%}body{font-family:Roboto Slab,serif;font-optical-sizing:auto;font-weight:300;font-style:normal;background:#020024;background:linear-gradient(-45deg,#121119,#010b14 35%,#121119);color:#fff}body *{box-sizing:content-box}.wrapp{max-width:1000px;min-height:90vh;margin:2rem auto}.wrapp h1{text-align:center;color:#70c4f5;margin-bottom:0rem}.draggable.sortable-ghost{opacity:.5;border-radius:15px;filter:grayscale(100%)}.draggable.sortable-ghost .app-card{border:1px dashed #ccc}.app-card{background-color:#1d1723;border-radius:15px;box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12));display:flex;flex-direction:column;border:1px solid rgba(112,196,245,.048);overflow:hidden;transition:.3s ease-out}.app-card:hover{border:1px solid rgba(141,181,204,.171)}.app-card .app-card-header{background-color:#121119;padding:15px}.app-card .app-card-header h4{margin:0 0 5px;color:#70c4f5}.app-card .app-card-header .app-card-task{font-size:12px;color:#f1f1f1}.app-card .app-card-bottom{padding:15px;background:#020024;background:linear-gradient(45deg,#1d1723,#121119 35%,#1d1723)}.app-card .app-card-priority{display:flex;align-items:center;gap:5px}.app-card .app-card-footer{display:grid;grid-template-columns:1fr min-content;align-items:center}.app-card .app-card-footer .app-card-branch{color:#ff8c00;font-size:12px}.app-card .app-card-footer .app-card-avatar{width:20px;box-shadow:3px 3px 3px #000;border:2px solid #ccc;border-radius:50%}')), document.head.appendChild(a);
    }
  } catch (o) {
    console.error("vite-plugin-css-injected-by-js", o);
  }
})();
var Wt = {};
var te = {};
Object.defineProperty(te, "__esModule", {
  value: true
});
te.FORMAT_PLAIN = te.FORMAT_HTML = te.FORMATS = void 0;
var jt = "html";
te.FORMAT_HTML = jt;
var Ut = "plain";
te.FORMAT_PLAIN = Ut;
var Rn = [jt, Ut];
te.FORMATS = Rn;
var D = {};
Object.defineProperty(D, "__esModule", {
  value: true
});
D.UNIT_WORDS = D.UNIT_WORD = D.UNIT_SENTENCES = D.UNIT_SENTENCE = D.UNIT_PARAGRAPHS = D.UNIT_PARAGRAPH = D.UNITS = void 0;
var wt = "words";
D.UNIT_WORDS = wt;
var Kt = "word";
D.UNIT_WORD = Kt;
var Ft = "sentences";
D.UNIT_SENTENCES = Ft;
var Pt = "sentence";
D.UNIT_SENTENCE = Pt;
var xt = "paragraphs";
D.UNIT_PARAGRAPHS = xt;
var Gt = "paragraph";
D.UNIT_PARAGRAPH = Gt;
var Mn = [wt, Kt, Ft, Pt, xt, Gt];
D.UNITS = Mn;
var Ye = {};
Object.defineProperty(Ye, "__esModule", {
  value: true
});
Ye.WORDS = void 0;
var yn = ["ad", "adipisicing", "aliqua", "aliquip", "amet", "anim", "aute", "cillum", "commodo", "consectetur", "consequat", "culpa", "cupidatat", "deserunt", "do", "dolor", "dolore", "duis", "ea", "eiusmod", "elit", "enim", "esse", "est", "et", "eu", "ex", "excepteur", "exercitation", "fugiat", "id", "in", "incididunt", "ipsum", "irure", "labore", "laboris", "laborum", "Lorem", "magna", "minim", "mollit", "nisi", "non", "nostrud", "nulla", "occaecat", "officia", "pariatur", "proident", "qui", "quis", "reprehenderit", "sint", "sit", "sunt", "tempor", "ullamco", "ut", "velit", "veniam", "voluptate"];
Ye.WORDS = yn;
var Jt = {};
var et = {};
Object.defineProperty(et, "__esModule", {
  value: true
});
et.LINE_ENDINGS = void 0;
var Qn = {
  POSIX: `
`,
  WIN32: `\r
`
};
et.LINE_ENDINGS = Qn;
var Ht = {};
var zt = {};
var Lt = {};
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = void 0;
  var e = function(i) {
    var a = i.trim();
    return a.charAt(0).toUpperCase() + a.slice(1);
  }, t = e;
  n.default = t;
})(Lt);
var Et = { exports: {} };
(function(n, e) {
  Object.defineProperty(e, "__esModule", {
    value: true
  }), e.default = void 0;
  var t = function() {
    return !!n.exports;
  }, r = t;
  e.default = r;
})(Et, Et.exports);
var Zn = Et.exports;
var _t = {};
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = void 0;
  var e = function() {
    var i = false;
    try {
      i = navigator.product === "ReactNative";
    } catch {
      i = false;
    }
    return i;
  }, t = e;
  n.default = t;
})(_t);
var $t = {};
var tt = {};
Object.defineProperty(tt, "__esModule", {
  value: true
});
tt.SUPPORTED_PLATFORMS = void 0;
var Bn = {
  DARWIN: "darwin",
  LINUX: "linux",
  WIN32: "win32"
};
tt.SUPPORTED_PLATFORMS = Bn;
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = void 0;
  var e = tt, t = function() {
    var a = false;
    try {
      a = process.platform === e.SUPPORTED_PLATFORMS.WIN32;
    } catch {
      a = false;
    }
    return a;
  }, r = t;
  n.default = r;
})($t);
var bt = {};
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = void 0;
  var e = function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return Array.apply(null, Array(i)).map(function(a, A) {
      return A;
    });
  }, t = e;
  n.default = t;
})(bt);
var en = {};
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = void 0;
  var e = t(bt);
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var r = function(A, o) {
    var u = (0, e.default)(A);
    return u.map(function() {
      return o();
    });
  }, i = r;
  n.default = i;
})(en);
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), Object.defineProperty(n, "capitalize", {
    enumerable: true,
    get: function() {
      return e.default;
    }
  }), Object.defineProperty(n, "isNode", {
    enumerable: true,
    get: function() {
      return t.default;
    }
  }), Object.defineProperty(n, "isReactNative", {
    enumerable: true,
    get: function() {
      return r.default;
    }
  }), Object.defineProperty(n, "isWindows", {
    enumerable: true,
    get: function() {
      return i.default;
    }
  }), Object.defineProperty(n, "makeArrayOfLength", {
    enumerable: true,
    get: function() {
      return a.default;
    }
  }), Object.defineProperty(n, "makeArrayOfStrings", {
    enumerable: true,
    get: function() {
      return A.default;
    }
  });
  var e = o(Lt), t = o(Zn), r = o(_t), i = o($t), a = o(bt), A = o(en);
  function o(u) {
    return u && u.__esModule ? u : { default: u };
  }
})(zt);
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = void 0;
  var e = Ye, t = zt;
  function r(l, s) {
    if (!(l instanceof s))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(l, s) {
    for (var d = 0; d < s.length; d++) {
      var f = s[d];
      f.enumerable = f.enumerable || false, f.configurable = true, "value" in f && (f.writable = true), Object.defineProperty(l, f.key, f);
    }
  }
  function a(l, s, d) {
    return s && i(l.prototype, s), Object.defineProperty(l, "prototype", { writable: false }), l;
  }
  function A(l, s, d) {
    return s in l ? Object.defineProperty(l, s, { value: d, enumerable: true, configurable: true, writable: true }) : l[s] = d, l;
  }
  var o = function() {
    function l() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = s.sentencesPerParagraph, f = d === void 0 ? {
        max: 7,
        min: 3
      } : d, E = s.wordsPerSentence, v = E === void 0 ? {
        max: 15,
        min: 5
      } : E, c = s.random;
      s.seed;
      var R = s.words, q = R === void 0 ? e.WORDS : R;
      if (r(this, l), A(this, "sentencesPerParagraph", void 0), A(this, "wordsPerSentence", void 0), A(this, "random", void 0), A(this, "words", void 0), f.min > f.max)
        throw new Error("Minimum number of sentences per paragraph (".concat(f.min, ") cannot exceed maximum (").concat(f.max, ")."));
      if (v.min > v.max)
        throw new Error("Minimum number of words per sentence (".concat(v.min, ") cannot exceed maximum (").concat(v.max, ")."));
      this.sentencesPerParagraph = f, this.words = q, this.wordsPerSentence = v, this.random = c || Math.random;
    }
    return a(l, [{
      key: "generateRandomInteger",
      value: function(d, f) {
        return Math.floor(this.random() * (f - d + 1) + d);
      }
    }, {
      key: "generateRandomWords",
      value: function(d) {
        var f = this, E = this.wordsPerSentence, v = E.min, c = E.max, R = d || this.generateRandomInteger(v, c);
        return (0, t.makeArrayOfLength)(R).reduce(function(q, y) {
          return "".concat(f.pluckRandomWord(), " ").concat(q);
        }, "").trim();
      }
    }, {
      key: "generateRandomSentence",
      value: function(d) {
        return "".concat((0, t.capitalize)(this.generateRandomWords(d)), ".");
      }
    }, {
      key: "generateRandomParagraph",
      value: function(d) {
        var f = this, E = this.sentencesPerParagraph, v = E.min, c = E.max, R = d || this.generateRandomInteger(v, c);
        return (0, t.makeArrayOfLength)(R).reduce(function(q, y) {
          return "".concat(f.generateRandomSentence(), " ").concat(q);
        }, "").trim();
      }
    }, {
      key: "pluckRandomWord",
      value: function() {
        var d = 0, f = this.words.length - 1, E = this.generateRandomInteger(d, f);
        return this.words[E];
      }
    }]), l;
  }(), u = o;
  n.default = u;
})(Ht);
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = void 0;
  var e = te, t = et, r = a(Ht), i = zt;
  function a(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function A(f, E) {
    if (!(f instanceof E))
      throw new TypeError("Cannot call a class as a function");
  }
  function o(f, E) {
    for (var v = 0; v < E.length; v++) {
      var c = E[v];
      c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(f, c.key, c);
    }
  }
  function u(f, E, v) {
    return E && o(f.prototype, E), Object.defineProperty(f, "prototype", { writable: false }), f;
  }
  function l(f, E, v) {
    return E in f ? Object.defineProperty(f, E, { value: v, enumerable: true, configurable: true, writable: true }) : f[E] = v, f;
  }
  var s = function() {
    function f() {
      var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.FORMAT_PLAIN, c = arguments.length > 2 ? arguments[2] : void 0;
      if (A(this, f), this.format = v, this.suffix = c, l(this, "generator", void 0), e.FORMATS.indexOf(v.toLowerCase()) === -1)
        throw new Error("".concat(v, " is an invalid format. Please use ").concat(e.FORMATS.join(" or "), "."));
      this.generator = new r.default(E);
    }
    return u(f, [{
      key: "getLineEnding",
      value: function() {
        return this.suffix ? this.suffix : !(0, i.isReactNative)() && (0, i.isNode)() && (0, i.isWindows)() ? t.LINE_ENDINGS.WIN32 : t.LINE_ENDINGS.POSIX;
      }
    }, {
      key: "formatString",
      value: function(v) {
        return this.format === e.FORMAT_HTML ? "<p>".concat(v, "</p>") : v;
      }
    }, {
      key: "formatStrings",
      value: function(v) {
        var c = this;
        return v.map(function(R) {
          return c.formatString(R);
        });
      }
    }, {
      key: "generateWords",
      value: function(v) {
        return this.formatString(this.generator.generateRandomWords(v));
      }
    }, {
      key: "generateSentences",
      value: function(v) {
        return this.formatString(this.generator.generateRandomParagraph(v));
      }
    }, {
      key: "generateParagraphs",
      value: function(v) {
        var c = this.generator.generateRandomParagraph.bind(this.generator);
        return this.formatStrings((0, i.makeArrayOfStrings)(v, c)).join(this.getLineEnding());
      }
    }]), f;
  }(), d = s;
  n.default = d;
})(Jt);
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), Object.defineProperty(n, "LoremIpsum", {
    enumerable: true,
    get: function() {
      return i.default;
    }
  }), n.loremIpsum = void 0;
  var e = te, t = D, r = Ye, i = a(Jt);
  function a(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var A = function() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = u.count, s = l === void 0 ? 1 : l, d = u.format, f = d === void 0 ? e.FORMAT_PLAIN : d, E = u.paragraphLowerBound, v = E === void 0 ? 3 : E, c = u.paragraphUpperBound, R = c === void 0 ? 7 : c, q = u.random, y = u.sentenceLowerBound, W = y === void 0 ? 5 : y, X = u.sentenceUpperBound, _ = X === void 0 ? 15 : X, j = u.units, $ = j === void 0 ? t.UNIT_SENTENCES : j, ae = u.words, Y = ae === void 0 ? r.WORDS : ae, oe = u.suffix, J = oe === void 0 ? "" : oe, se = {
      random: q,
      sentencesPerParagraph: {
        max: R,
        min: v
      },
      words: Y,
      wordsPerSentence: {
        max: _,
        min: W
      }
    }, U = new i.default(se, f, J);
    switch ($) {
      case t.UNIT_PARAGRAPHS:
      case t.UNIT_PARAGRAPH:
        return U.generateParagraphs(s);
      case t.UNIT_SENTENCES:
      case t.UNIT_SENTENCE:
        return U.generateSentences(s);
      case t.UNIT_WORDS:
      case t.UNIT_WORD:
        return U.generateWords(s);
      default:
        return "";
    }
  };
  n.loremIpsum = A;
})(Wt);
var qn = "data:image/png;base64,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";
var On = "data:image/png;base64,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UmGUJK2Oas7nrG7cvLW61F0/e3J47c3bL7/41b/+7ut39//i1XffPZhWe2Muq5NraxFhIGXlajBKEE2Q6KCJqCqbo9izG6e+9bVvTzKXKhPx+NLZ1o89//T07q4f1YUrPv+px/72z//Eq9/57je/8t37Nw4uXTgFxJv37548czpJw81r14NGlKws9PKimJQ1AimjdVg7rm2NijyL+hePAzRMNDlMAml3oyBg68RXEJE1cchgozOXhqPqe1/96sITZxefOe+m4+zeztW3r968cW97f5w5VXmpKn+q0zXj8Vq388jTj6vAiImrsNM8cenE4x/wJiiszadTW5UBS0BYKUJh76z33gN6HbcXVy8/cmntxAoM9t546dtfe+GvX7rRu3UwOR77+WipESU7u/v7u1vdTnN5rsVhIIE2QeyYWFQQBmKn9eCg6PX/w59/9W5v4KE+sRB+7GNP3rnx7t7t/fnAPHGu+4u/8Okbr730N//hmwmkk2m5tNCIErK2cGxXludpOHz95e+11tcbKyedlXFZidKC5EURIIKUZa3BTmA8hpNJcD+PyDaSTncidzcHm/v+fCMLG3PT3qDMwy985qfgTOfeg3eza7v7r9y8eXAwOZ5SBY9fuHT7aDAcbeWjyRzod99469M//dlorjX0pnPqkfkzFytAZwvnvAqioBNoAPZO17nLxvl4EMeJiVNUDa9cWZVXXvnu5huvvP3aS7f61c0JqFg99eSljz7+9OFkunX31st3bk+//sLF556vvTFOMQuQ85w5W4euLA62t+49sPVkwNVKM/nQRz/xzhtXbt/aWWu2z621P/D8I1e++8Lr370+z4oSxq66dHrj3tHd5ZNLDWMwK+YNrLmp390sdBy0F5Sr8mrs8zrSYeCBQAcKNZCCYQ1xRQtNvzdVJo7IdZfmD0a9YozNxMRekstnYanhb9+hG9cO37lrcxXUuNZdmVtq3ekPBwfHSRAIewTfPxy89YNXHvviT85tXOicvpCzQl+TZyVAKlSxQVLO1Xoqhl3W279779bJUyeTxhILkdRGB4NR1p47+dnHf/wTa6tPf/rTzz1+MbK2qIOyqo72t6XK0sWOrr1OEtBoxXso62JUH+/Z0ZG2hQJ+5MzaU8udnRs7967uL6Tz3bSZNnDz7k3JXZshrIV1/st/76dUJ/b71eXzF0mhJiX3b19upxCp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";
var Xn = "data:image/png;base64,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";
var kn = "data:image/png;base64,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";
var Dn = "data:image/png;base64,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";
var Vn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAAsTAAALEwEAmpwYAABbSklEQVR4nDX9V7Cm2ZUdBu5jP/t7d73Jm3nTVmW5LFShUPBoAA20ZTuwW6LYzeEMFZqQFJRCCj0oJsaEIkYxMSZmQmJwJJJNiUOqp9kk1N1ohwYaQKFQPisrfebN6+9/f+8+d/w8lGbHeTpPJ3as87D3WntttPF/+M24RO8fP4XFDGNi0/mLZeoWs/2jSeTxpkc4i88SsbtzoV5h9z/YHx6nneXqyo6/skLyRf7o0Uk3ASRxOfQu7a7eeG6bsW2na+DQzz7+S7+s7z79eLnSLpf9k6OBS7z19erSWscpFAdppV2eq9qDZ+dQQIz8B3fv+GG4f9DfutC88XxLpzaTKi7x2Sja3v1cVMdPj39oZdwM1t49ffSVb/yD7pPD+dEfXl1tDtWc1iuRdwWd1Z2nnswerm199ZWbb3z8/u+XwrvW9vcePytVt3rzrDsfIp/psNPqvBjXm/n49vE43b35D37t89/hhSkHgcMIIaSNVuAIIZhQp7VQkhDiHJDPvZ7U58/EkwflVHQUrEF49Hi8/2AmEvD9ynNXXjibzA/ORgen3WFy+tqLL1NkT877i0Q3G1WDye2n49EZzgVVufJCG7Sin957bzCfNeqd3tFRRMVyM8zn8uh4GNDlbJK2N7yz2WFUrZ72TsYJeF5jNpk+O9h7fHzYarTiavtskkwmC2xMPSyWmuUgDqQrR36H4CnG0xpbD2z47PDDEJeXgs5ifLSYfZLPT+0kszmv1OvWTQ1+YMvByvbqw2e/n0+P06kOo9JwIO/vnUiLlmsNrCav7KwHybE4eRcZkqNL21u3MKOYEkKcQrgAcFbP8+z23r4LQ8/ziXXgEFl6hWAb7J0mGIiQcm155wtvfnEqskmSZLPcMFatllkqMms7S9VcLlI1o5476i6skFGFMAzzSaFzsEAJUw8Ojkp+J8/0czduzibnRk2xMw686bAQhbOOlWphIuVkovb3Zx8+Sa5fffXKtRd63bOYOmrnPgIOWT0Qt6501tq0HHi5MofDtD9PzoYnzcbW9d2vH+6fjs77r199ddQ9V0kyGSyW1m8IywV2fmmlxOO0d+Cx+LR3PzDTs4PjeToLqhXjeL3Wrtf19kabIoGsGB3sceed5BnbuHVh9w3KmBOLTOU/PnxyjtFM5n/89rv/6vs/3Oi019sNpwxBmMwrKM/4+aBIjFPWnk6mByeHuZTZdAqUjMeDC6vNdjPmhGytrBqdp/lgY2O1FEWpkE8O+o1GfGGjctaVMjGO6EbAKuWlB2fdR8fPlpbK3cH4wdNj8HjkN7Y2L4BF48VgbzRxOri688I0zwRVZ/3D8eAkpOnVnaWtlca1S+sX1svrbRt43II/W2RPHuwf7Z8X2RF1uU9j7agyqt5cE8K2Vldneek7v/kPk4nNB1krvljzq6sxKtTZ/Tt/JWYjpL3l1rJUgnGP+mpto9TrH82miDvW8IK6Bxvr7QMFnC/7JBSYnHf773zww3/z7h99ODrfm4nPX776xo1rhBBnXKEtCTYq3Sd9SBzkUKKVJBNpb5xlCoQhYdAOYrlYHI5PODiiXbO53hvPK6XG06OjSa4dLlVDGgbESpDWvPLyjh/Qo5PR6GQ6PxqjkmelzZN8sXBPD/uEmtWN5Uazsb20Mz6fZdPZjevbZ/29o/Pe+dmoGrCN7e17h8f3jo5wQC0qQsb3j4cSeUv1jQalX3px6+paNB0/W+T57vbFs+PedDSZJv0JiEs3X6rHa5uNG3mWZ3ovJt2A95olnmUZD5f9wDNSziZJGJJyKRQZOulNy9XluMqqoXd8NDhNvI36xu37H80tfmV7tzR8xB7966eP3y+1thrbV1yFaGPLXqwsJdWLbiUKm3V/azWcDqbFefGtb/5yza+fjQb1ZlkVYjycPnflSqsczpNelpjBUI3mubEIo9K8kNlsVin5y8vtLJ8QSoucYteajozrF8PebJKOGxEdD6zSQCvsweFeIfDVzZe+ePPLFa89HvXPzp5AofOpGSc2V+Z0NOQ06jTqpZBZR0/HRW5RuVzduVRd3vSbnY1x3j4+P66UdDZOislMyiTB4yf9D6SdVCt+Uhw+Pv0T7Obj/ql1eX1l6+C0n8t8tpgluTjv9WezeZ5iziq92QDKZJBn330yGNevl2JvMv3kpL+/2tk8X0zfP3h3gUmrsv7g9tu3v//PftJ9hpQNPEY2braSWX7lemt5i0bh8uFktn7huc0rV++cPMrEohjM69XgwtaaEtPLN1b9EGEMjKLpLJ33c9fPL1xe2txeufdgH+GgyKUzZHl5Wea5UjqsxkGNL6yoerRTrUijZ910OkuWatduXP78UnNzZWUTeXH//PzW1laI1DyZpxMj5wqEjXmYKZlrQj2iMxXw6Kx3fvvjs9HCCJQU6aLmQYn1r+8uM5eJyRNRHIZxNpw8nE9nWc7OekWpdnHn8otCu0S588miVGpHpSqlMfMizvxp/0xZcq/bzxUgao/e/5/7o0PPI15ItRxN9z4cDQ8XTz4BpK8tVV8std947ovCGaIaxVyZcrny5HBwf79fq0bP+t17T56awZQX5saV7eZyqNCg2STYeh+8f0SJV26EkVeWxuZINOtlVdgnB32lgVJvXqSzYiaUog42LzQUT4FYalGzVSmHQf9k6qa2s7Sx+9yrvf7s9c//nA2D8+4eTE+u7bR2L25X/BJIvb5SX1mvJUJqxHKZ+qish9GsN6mGuNOSJ6fd6dRypjHXGBUonzfqYblJcz0aTfoqV0ZjadnutVeCSpTb4sHe0zRzD0+73NBMwHAx9RAWqekN8mmBrXQwHMHIwEQkRmEYnRzdhvOTiCOvwrJy62tf/vde/Nx3sN88O/uIwBJcvbAe+uFkIsbzpFIptVrxcDbBqdWLfHenJe055un6amU4WHz4wcIp3/limE9CGldqEWWeyG2rVnGOzMb5zRduXtjd2TvYn/cWvdGsXKsRinWumu3m5vLOZucCInD7/An4AM7Q0H/vwYeQDBu8CD33cH+/ezr2my2/FvTHh4PRAnjc6SyrjC7Oe+2KRlKn45SF0a3XXktyu7F+6/xMlksb2xdfOOkN+9PFeV+WS6VGxy/VkMX5k7O3MnlarzU9XhULddib9k7nC1AxpnJue91Epg5GFiTGxFtprCxX4kIueqNR/2zcCoNmyM5T8ckkL29eU3L67NF3yZVbrXoJDXvDgPLnrmzcPTmvV8Nra6vtcs16LtP9nfWVG2u7H98+HQ6ls7a+5Nc78eOz4WQiZkKkiewd9hiDLFeLaX46mz883JeZQQWANbisn796MVdTBNnxeW95a/3Nb7x+lu75rHBqdufBT2/f//i1K1eZnM2KJClMMhe96YwjvL28OU/FwfGz0ewcu8ru2vMBxMhUCTSUZlGpOZ/LlfXdjx8PGivXX3njq/Xmyu1P7h6dnVLCNtY2Tk73hoP++tKa78oPbx+cDAalatVjrACkClH1o2ScMAxRXM0KcXGt9Pkb27UYZird6090anweO7DH3WkMmPry7p23TpIjNruDLn89bJSjzfU688koS0/6aDqSi3Ty3PVLp+k0Pz1eKbdq9QZBnrDFRJ57ZTaYmb3HY1gwQAySHHIHMQMGgBxwAkhBZpGiLkS8FVTKrNGuIJdiEjRL7Wfn58fHJy9u38CS/fybPzcbpasrG92DBwERtWrICRKOxX61FpXyYpEW2fGkPxfpUmu7U9pOjnv33/3znE2miKasuHp5Y+/JGQ58v2WvXL64/+y+BtAyWuS5X6LPXX2xFIX377//3nt3Dkbgx6wS8lki80EBAGEYr6/UcuTydLy7UdciVZruDeYz6UGevri70emU3/ro4SIDAAXKggdwuU4FDbxyc6972mm2D87HHDeUMPOZGk3GV7ZjunaDWnowmnx858GrN9eXO/H56XTvkwQWAFoDN7V2WA6j494IxxgRW/ZLPkXZvJhPpZlpifKCswgCA85o+nS/d3r/CDScwPiVizduXXopvEqr5VL46mugDCLOOhUGngOYDkcAaG1pw2KSyTxVWZFJduVqg7u7J39t5YHVbGtnDcjQUIdi9uDpB8dPuxqa+8OjZiN8dePi7f17SaZCIkg9fr7W7g16+ULkGQDElNJsPDspY88DAWo4n13evnLnzl4yJpVysL5Ru7bV0Ta7dfnCjz7e12cWGIFaBB+OSedm/bzfAz84n821KKgHALpaLYukONjvWoQ+2ts7mkjCa82mL8RkZ+Uzh0+HpkCYetd2t69d2ZQ2H4j5rRevNZv1k/Pk1pU3JwPhE8/jvizRtdV6Mpo9enISYe6kWK3Wv/GZL379pc/+3t/6nZs7l9c7q3EQ+h7HGDtnkNEMEycloaRca3M/kCJ3Ig8ZDT0a+OTGzZu7N17AlD87OBa8oLHb3z89GY6ELGWL+NlZWiiHqK1X2XwwmZxMiNQbtbViIfv9mYcCKXMrlHUOqFNMr6wsGYKksZFXifx4lgxX12rPP79h9OjO/fuLXE/nhSksadR9n+tFSoJ1XPJovROvdWrVkJcbHBOrFH1yNEon+FzM/WrVpSZ0ajifzheo2djOpMy0YTQ6O++mOs+15Nyf5QvpVJYqpjgBClZFFZ42yaB3UApbfqE3yo1fev0rf++X/t3f+tovfeW1z9biWFmtrEbWgNHgHGcYWeWE4IQhhClQ6xClnheXPT/kfkx56DApRY0rWy9iwB/efe/Bk9OkABb4veGEUeJX2DRNBEHterVWbXZqmwgoIXQ4yI6PhhoXrzy/Wim53FntMVeIiZM5o0mijw5PNRCvEkhPDcejbnfy6EAQP5xrC0AcOMJ9wxBpXIw8RjDhYKyQdp6bxyfDkydzAFxqlqQlEqsL9aWCBpOTscH06NnJ5KxXZX6WZ6ZQ9Xr1wqXNZDo5OxjP5oVeZIP+WGZ5p17NkVE1T9riqt/4wpVXfu83fvfbX/z27solTqlGjmCKGMcEYwsYM8y4s8hql0wnyXRYzIZZMjZKyzzVMneAEKYYE0IxAFDEb1y5YnL93rsfttdquVOgaRTYs9G4AHhuZ4f6aDweDceLg8Hw46NDOTadWnTxQqleKp+PCgGEMyKkAAMc/FpYysZJIvxFtz83wqEwTU1YIrkyKpWgDFhiFgsoCrLxcuW4NzoZT8bjpCgMDZjMVJJoMMQpbQvnkG00lnhYmyRDMxehIt/68s9v7S6Fob5y6Wq5vvzs8HBw1DMSILfgyCs3PhMH1YePngCQxXj25vr1//A7f+87v/LbO5u7nHqIEuJxynzKA0YII4QFAQlCwgHkyIoZZ0Hv5MnD9/8yX8x54Il0rEXGKeOMWWSNcw6Bs5Yib/fi1Xqp8eT40cPzo0SFNHfHJwUIN0sW2WiWp2K8mC2V2mki43j9t3/rH/jl1vfeea+3PytSIXIFzOfEk+cTA3J7eankY+USNYd8VhQmxwyl07xVWVWG2DwD5wCAlC+yUthqVWJkaSksU24w9jENsjS1iYPcgNWOwPlo4LQBiVYaSxcubbpSMpXdJ93+k6NJnqrVSlMaobAFZ2fC3Lx6QxRpzYev3rj5H/ztv//GS28E1CcYU0wsWEoYZ8yARQQBZw4QktNs78M73/vnj378p3l2Fvuk+3QvT+bUrzBMmM8RoQhTxkPOPUwwRiCEZMS7eflms9p+enD8tHsyHC0Iw02ft70KlvRsMNtZXxoMBvN5kWCKaekHd26nMoF5CgmARRCTcqheeWHz6oUNYaa7W/Wmx3rHuQs6zmilKGiajZLAskoQ5ARBAYQss0a7urTS+fD+k1miTocLapkjUA69ZFaAhldevVyrBgExphAx8wm1EArErbHsYberhdbj2fVLl6MgnKo8KNWuX9g42Pv4hRubv/SVb/7WL//Gi1dvUkwoIdZo54zHA8qYdhYTgghRzmCZ9e+++93f/0fv/c1P5oP04PHTUfc0YMgBrq1dKLeX4qhSqtR8zyfMc5RiQARTjLEUAju4uL1bCytHR/fnalpttIKAImOt9DKtiZNFISJczpVepH1k+0JnnITO46zit5f5pYvNeZa89/Tw9GwhJJaGnC9m5Wq17NdiF6YnQ8htqbU0WswgT4EjkkUIx36zXvVCVolLk0wlgySbFmBpzEPmkdZqbf/0vN5azUAxjBq18taVpfPR+KN73a3GSqtaGs2Gw/liIbPUJtcur+1uRVe3m89fuvz5l7567eJ1jCmAs0YTSoLAA0yNBUIxOHDGOCNHT29//3/6J73zQXVtVwCMx/n+3TOKbaVTjpY2Efc8zj0eMM+3GGPkMMLOASGYMSa1Mgqe371ejoMHD+89PhzmFpAyijIaBiOdVuKwUqpOJ4lIhyVnoyIQidYiXdsp7T7XYUE4GKjh8RRyfzYqhqM5VNtiNM565+n5DBwCjvN8BgGCCAHXBDbcIkm6k+7mcns4G897Cyg0gJVWhay6s7uV47SfzCfKzKYqOZz0n4yP08nZNCvOx5Um2r24YhxjQTwQxfZ6/Y0Xlzolvl7bePOFn39+92UESCmJAKjHGGfGOecspdhZB8ZQp+Ww++DdHxJGNq692N7YarZbnBmGbbnqR/V2e3271ewg4iuAoFTyoxK2DjmEKTNGI4Spz4x1UqnnLt+shkG5Nr90se0R9+DkBJQreWxltYy50hZhDy9yysDDUf7iq9u1dR/F3gdPe5PuwhgHMwEGoNbcbJSWy7XhyQQz5pyFehk4Bmah5EGd0VK5ut2KhZjF1G53VpvR2sHkqNyO51KNHsyKnr1+uVWtet2DcxC01C51rmAXkLBajy41682g3z/VxJ0WAnTSqTTXwuaVlRdvbL++uXZVW2ONZpQSQhACrRVClBOKjcm1xsgW8/75wZPO+oWVS88ZBcaMjvdmu5euLrfjwd5ptVIqM8dUEtWXWa2DmKcR8ePQSOWM4gRJkTlLOA+lkLowX3rjaw+HP3vnwVuBV71Qbzc8TXx6eHzWE9RKBLEHSHor9RevtA1SD496vamDRMNCgMXgczC0Uy/f3PEjxU5uoyRVQAFmC3AGkINCAEIk2qz5Ma1Wa6Ms93k8mk9LsaeEGuyfg2TqbJbgHHFzsX1l9/LKledLfh2EkusrbUTt258cIdMojEsL+ZmdzTdvXH1l5zNXNl6/sHJV28IhSwkCZymyzjqLMGMcgZVKY6ecmI96J35Ui5tL1I9qcUVbt97ekothqhIfMmJ0fzIN46hcikIPM2oJthYwogQRbIyjhDkprXXM41KKRqm5mMr3Pv5YaL19Kbj+fKdWryxG2qZhOl2Ak4BIrRMBmd1/eCzGJdUVkGlAFABDpqAcXlgPt+oQMLPIzWCaQghQRlBB9c3WhU7tQqtOiloxGoyHUjJWvfv4ye7OxuHRyWBvDCNAufEr/NJGY3tnnQXlK1e3Dk6f/eSjg8hnjNO3PjkEVSKYJhR1ovJrOxd2l1au7ry8vrQLzmJcIGes0h4j1kgglHAPIau1cgBgZT6bMh755QgDxJUyJtR38vTB97XJlzevuywDzC6/8Eql0ZwfPt1754fp+aPYZ8yrKMwwI5RRa4ExpqXABDsAShnB/J0777AqxC3+0cPjRwfHhDKRFYuFAETB41d26sstslVZO3gwUNoAVkD8qNZRJltaLa22PI+Cwfx0Oh9BAc2ws9FMSYZXGte2lofpkNz4yoqwOO0vGq1GGJaqJZqkg4BXGw3v2nOrF3caEpLc4el8Me5PlqqVW5drF7dLi9z2JlAcDdLJpNWubZfi66uXXrny2Z2NmxwzBBpp6bT2fU8bgzAmXoAxMUo6jbDTRi7AsSCqYWyoHzpMxw/e+/Bf/2PR39t46Wt+UA05aW3varHoPb397IN3zj65PzrYC3FWX11FcQ1hjAnBCGtrCcdKKca4MqbVWi6U+MnHf/HDd08Oz/R4XCiPT5Tc2tm6cHHNetPLl1tegCaDkRV4cj4Hh6FWAq5bS+zK9Tb20HiRLjJ83p/mRodxmfrhVr31yqUbVi7yYkyaz8fTQWGoX4rQyenpYDp67up6oxUGFWyJk8J+8uj8uC9LPt1eY0sdzoD/9K1nD7rjeqs8zxT01eXm0r/zlW+9duXVzZXdsheAmYNOsbSBH2unLALmxZgQbYRVkjpFrBaF4HEZU4w1At9LDx689//+v7nibPW5z65dfRWToL204QcBxqTk+/VSFHnIZFk6GrOyX1pe91isEHGYIARgwVlLCLHOBdwr+/Ht9z/Ze7pfZBYkFH5oGHc+jiqkUuOzfHz3aNE9mZQCNuoVoDiIRWM7e+MzF3NZjLO8OxsttdudTjsvirFmf+83fvfqtec++vhtgswoyciAZTbTyHBArBjbUuitbeCj7tE8MYVRyPiU0tl4qii+sLby/r33TofS2Xq3P5lbUefVS5XOr3/5mxeWtq5sXapFZadyowpkTRyWtQPtgHshYOqcNUIzZ4nTi2TMvAqNfSFSgjym8/vf/e+CYnrppVeau6969RVKAYLQ41EUlEulWlSux+XAp86kM1XIytI6j6uIR84CIdgZ65xFgBElRuqlZrtWqz48/ACqfG6ImyXQT4u56At6fjwcTVkyEc1yyyfc+n4+W0CDv/z8tft7e89Oxidn4yLVyXSQF8PDLIHM3k9kWixMOv7o6dNhasnXfnWnWotnYj4bLyCXL77cXt6BemPF6bA7NUfdAQvQ8nbUk8VirjGvcT/ojs+LwkBPrleav/y5L1a88q3PvFavxDafWltQFnK/pEEXVvosQoQDtloKYi0HLdOpwSiodYoiA5HxMEoevJc9+P729edLm9f9patAfE4QZpwygpmHuU98j5dqYamCcZZPD/2wHrY2gXFCubWWYmysM0ZTisAZMLC+vgU+HGYnRWHTSbGzdv35GxdFPssT4ztsCy0SOH9yntscOgx55HC/Pz9Rco5BOIrQ9lLlhStrL6xu7XX72aywk/6Tx0+NACg0efnXVhSHSsXbvrh86frS8joqiPvo7ujp3qQZN+Mg8OtuaTWYazMqdFq4SshPeyO2IOv19gsXrsaYf+6zb1xZ3VBFbgnm3GfUt1oZoyiPCeYYY6UKbBWxVmqhZVquLQmt1Kzvc46MHn/0g3otrqzfpI0tUq1hZzChgLFDGANCzjlrCCBKKOOMybyYDkqru6YUURI4hMABQmCMwlpxQpRzBNHdzcs/+Ku3+4e9ZtyaDuc9Mcig8AldTEfOgR7J17/8y2s7l0/2jmAqQRCgXhz5L1xsXNvt7F7cHM+Ozvqj5fVrlzsXH7592wwVRD40fXJf9GdJEnqMchVFtrMU9Kazjx+moa4AZatLrb30LCr5S2GZSzY+T0f3z2699O0Xdz9HkVevVlfbna+++SVQkgBCiBGEwQktJWUxRgwzYrUGLYl1YAttchrW/aA0Oz/yrGJxNR+cot5euHKBVtZxVEaUgzVAMAABRDFg64xz4KxBzjFMKKV6MXDM58uXHPEZwsZYhwGstcYgZBEhSpkgiF7ZfTGdZVLbrpyNk7miTFgFRQYGwLDEL+9u3QhZpXd0CloAJVJlN55fKVS+d9DXhi8Kt9efEuQvhdXueR8wAFYEb9bySZ5LdDKYR6yUFPlpP1ezKBnMsv6wOx2sLjW5Cvf3TvqHAzgXkLPWyhUfgieP937xl751cXlld3UDtDbWEEIZaJEvmO874gHCFBunc7AWrAEnMME0aslCFKP9sFzDzJfHjzzQuL5OghoKQmscAoQRICDIAjhknXPWYmccgEMOAFMji3QSr14zfkAQtgistcghpK11CiMGgJWSS416vV3+wUd/eVceQAUDUNA+ZBxmsrHcnE2Pnp0ciHxqo+TGixu7F1cd0WHD70+n928PCsyjWhBEZpZ1cyNz42wiQQL5wq9vSgOZkAgHvZF59niY6DA/m0NSAACAvrjWHM0mowczyBloTLxwkc/aldglqc/h2s6Fnc6KyKaIYM6pyuaUeIyFwgGj1FnttARjDTIYY0ABD+N83AUxh3IbF5np7QdxFUVVRgPHPGcVRhZhAGexc+Accg45jY12zoIxFMBRkiYDVlmh9TYCDBgbpcGBNcZpSRl1gDEmqhCd5aXD8+O/uX8bMgqPhpDm7c5SCovGxdJLr67vXql8Mtz77As3vBL+8cM781nmhTEAHSmWJYspB4/mG602OHreH4IEMIQe9YZzmTkMhTAwNTCQUs/BWYhCCN3FzZb2XNxhsMKgD5Cblc3lwahrjQTihZQvry4pI43MWFCzIlfOkLBqtMDOYM8zSjgjnEWMUuyQpABOyfnQ80NOuF2cAwYa1w31NMEEDEYOAIEFDOAQWGeJMwawAowdEEQtD0gQB35VzM+YuQHYgnHgrDMWIeSMcdYBOEywQoCE/vlXf+4f/fN/1ZP+7/4H/6l2+l9+77+HNtS2awrgB+/fpqx+NlrsHR3DwOFS42Q/zYsJKIBCq7I7UXY+6Lp5AEMAhlCdk0nZl5OFTi0YtFTrLC91WCVoLTfnSrlUzAw5f3IyIWw1DuciBePm04VJ8rDS+uYv/nqnXP/Cq7eQzI2yns/zPGF+2REnshn3QoydU0JLyRjHhCk153ET5dms+zSuL1FC5eCEOGDluiMeMIIQOIcQIEAAgAAwgEHW/S/5swYhhDAYY5nMlZiHnUvWLxGEjDFaCoyMNgWhFAA5C5gSaQwjZDAank8WL9/6PPLCd+6+B5j2n54cfXQCZ872s5mmrjeD3LhC6kSAQmARGAMBvrS+mU3M/KyAwq4/17i461FIEphjMBZ8eS7Px6Vy2Ip76QQmQ6jXdzqtx9O+HeQbN1+aTe1Cma3aplzk5UqFhnqjWQudKiyEQdnIOaKYMS+ZnjjHKKVapFoUBAhgpLVACDD1k7NjjjXmgZW5Exn1Qks4UAaYGGQJIgAACBBgAIsRAcDIaIsQppw4sBYh5lMWuOmhTSam3GYWUYSV1dZq67TWmlIArbShDkiJ8Teeu7o3PwRy+OD+E+g9gwCBdDBxYC142B72gFPwAFgAgwUwAtgCdmAoWPXK8yuj9qzdri6tRPtH+2TpVjUZ5mAQAAKEzHheqAIMAuYBQaMsh3kOuemr7PLOZl6I3mS4mKVCis9fu/oLb77JpFQIYyTMYsbjisnmYtgPq22MsVGpkpJxDpiByTgrGUqT3p7PCK0tu8UUFn0WlRELgFAMBGOCACNkESAAjKyzzjhrnXMIUYQ9oNxhoOBA6TQZeI0tV20jQM5YI3OnhXaYYIedLYo5wc4YSwAUiCfn99+/8+47H37oUgHIIAcwd2ARaAvaAjFgLarWATDkApyFEoNWqVrxqlEwHafWQrc7cjKiS0vlPBezSQEZgVQD82EqAGVQCmvlWlxj5atVgZUAMXCzrMlAOaB4uerreVL1SsViyhmYNCWej7RcnO8DDRgjUiZOpoC4A0KMBKMRYSZPQaY4ii2iSKQUWUR8AABjHAYAihG2zjrrHEhkDLIEAXHcI8RhAzrPRDEHJ70w8qKWkTlRArHAIOucNlJgFgCAVbktFg4z65TFtFoqBzyeLqTtLqJ6JYwjYtHGpZVnz/aHsxGsRJs71VqnNh3liyd2lGRAEVgLg35eo49H8uR+HwIO2ACW9PRksdyqLy15j04nFVKbTcYQBIDTq5cuNJbb0yLxHHp8+Lii4+FsCsloeWWt2xdhJXr+hYvG5oxToRbKmTLiee9ITs+Czee1tdgUUgoaRoCcNQVoC4hAOsFCsEoLW6eKjDjuHAVtACEggDBopxFoa7RRilhKcE6I09Oi2zsdnh4XsymnNPI9qwtOoNa+wGVBiAeAHShrCkSYs0QVQicL6kXaIgDlE8JpuHfaB4ccwSITm+1142A4mXS2N1oXmoos9rqDxUB5aQGcgHOQazB4fr7IhQShgPggCnCWeggq9cY7z/ZAq1nMXnlpAxNrEcwSPdbZfnee3zsCFQ7zbrTSLFz82vqbss2bZXt5fdNIy4Bo5ZDTIu33D98LSm2PBdYYIgrADDACp60RjlAFYPIFgLNB7JQ01nCPAwirwCLiDKLUcw4h56xIQeSqyAb9fu9w/8G9B4vpbGmtsX31Sr2zVS5FxWx0vH8fzg+X1m44z4Ez1mgHxmlFsNNFKuZdEsWI+0ZDmXGSF5CJ6vra9OQEsEtbpXsnZ7AEPX3We/sQKIZSCSZSgAHjwEMACAhfLjdm035RZTJmwnCPxXR1s/nOxx+D9EFaUOe9HcoQfvZsCE8zcBgkBsuvX7q0sKkf2/2TMVbo6298zbejFi8TBEIXRC1sej48eADORK0dp7VDuTEae7FDiDir84zFNW1BJSNDrPJCUqSDo31WLJxjmLFap20xIVENedGnzS5Ixvfe/puf/eDd0WARVryN7Xa56ufJeIQKXVRir7S5vppYbVVulSLYaa2dMWClIaCySTrd80tLUEJOO4bYzspambppNi4vN9J8cTzqB9VSEYBJF8BIqbScT+d6WIDvyMZSGPGlTnWQjbZ365w2j/Ymo6kYFOr69ho97p6BI0uNUkTZnOYtv/nh3QPYN5BwUAbiwOe8P+8F9erj/U/A6jsP3rq0ufp3fuEXA8aME1LNcDHKu4/z+bizc0shyo1CWDuZA48RIs4UxiiOKKhc5Jm0rkr5uH/wZ3/wh9lxVyi3eWVnY6Pd7iyt3XiBhBpzz1gtssViMKyUUauzgRiP20FY60ghi5PTFB1WAsxKZdfaVDIn1jBCsbXIYSHniARaFDKbqLSLOcPgjHad5XZQbSy6KXgEhFVzrfoZxAjAwRQtRqfgHFAKxlxeXZrJ+UHvfGW1dDpdnA27HkQUV1Rv8OHhh/TscAHAtm6ulVuocOpHb30CZwC0DmQBQpct90nUPx+BSCDTvh/FBHGX1kOmtDYqA5Gr2VkxO4saGyxuWF0AwlZKpYSHMLLGiMwAUoibfCxEFjaXKViaT9YqQXcQAtXVSnR++BTrora+XMGcUJ9gbhhurFeJtzHuDUloo+pWb2F/duepEnI6Hl2osleurrUMtbIwxlDGwSLiHAHtigIMgHWL6WkpqCNMjXOYuAs3L734Qimz00pwddBL332wZwsNwzlIBMJ6q/GNi7dOTk56T8ZejNWgfzgegUGAAbAEOQLfX1/boSwOrl+7NBPzn909Xqusg66CmcJsCBSBH9y89uLhwelXb73Wm/XH7Pja+kqn7L969Qa3VlupVY7zRKVj53vVpectoahIEXMynzgeAqVGSyQzMGApVuOxh11YaeSG9U7OtRXNC62VUlSOqAeBNGk+G5aa6y6ICWi7YMY6axWhrD9D//O9dx4Mkt54UStVjntj4tw/oOjby5GwmjptnUOAwUqMmMpzpQRx2BYLJzJDfEKISYtn46POylICIxOX5ml66eryo7cegAbeaKzVly/urp+PpkGl8blbn5/Oe+1e6f7eUznIIaLAAJhdajZSnVBM7HTejaMKjPyT2/uAHFgLFQrSgMhpOfz6t3/lxVuf/2f/4z9+tv+gfLHSbNTqpbrVyjjjtHIyEQaV61chCKzInVPKaSczHLetBaSFNdpihrVUaYK82NKAF+PDh3cnOS1Vq9TDs/mYWZeLdDbqNXcMDiOEEMJeXF2yxh6ePEStF2LoPb8kYs975eKlH33v+x7V3/rCm512xIEgZwEAOyyLjIblXBbOap/5Sky1zC1zHDg2Ls/mdw4nUKk9u/MY8gJIUF1rThNZjdf+o//tf3Z4fucv/of/9t/79d9rhvUnP7jz1S//PGd/3av1Dg+PIdGwRAHw+PiEisT2j4pRvABrocxgIYEjiBiEHEbyB++/tbSy82//9I8eD/ZzZARC2OOZlMpgC8haZ51j8XqpuW6wVmrurDbJiCDMWAhKKpVxDAaQUbnMk7ixQsAtsvyPfrb36NnBcqtyfbW2XQ9XIra61vKY56QizhLCOQ9K6+tBpZEW1K8Ea62WmBW6yIrHH12q2ddef2nl6iWLQ4qoQxaBZYzmRcrC2FqEjLDOKSl8K5VDQmbcF1fWG0+VyjPIhxoUB5NNaQ5xdXlpK1fyz9/+iwtXNv7pX/wB5Clk+p17b3/7C1/sTfqlVv3Vl2/lIv/p22+RehuvV3dwhnxTQQJhLwYJUI5QPQIkIdGlRuWDT372s5/+uS8TRlF33Pvg43cH054j1GhrnUbID2odS4lSArDTYqEX5zhoOuobnTkntREErMinRivqhQ672XRUyHkcouaSv3Hl8uUrtwzQ1tpWrbVKMHHOGKe4H8W8HjZXNnavQJ6g0Ygkw8Cp+krjC7/4zQu3vuCVl8Mg9p3BlhhjMKXYGqdzHlektRZj4sUA4BAyzuwfnxyeZ+O9Ub4/xCoss9ZKZRfm/oq39vKlm/Wg+vzG9VW69u/e+vb1aANOF2gh/vjP/4qS6NL2lZdvvIGFD3MwAtPf+aVf+Nn7f5GbFJMRC/EJD8BQt0igVqovR4zlfjyHNJeZoY5g7RrVepELraUWBRjneSGiXLvCah2wcDx4LygvA/cwUCFSzwtkMosqzWLR45xhjMAS2T+5UfYNr6+1KmtmzAu1+8JN5IUcI0wwMs4R7Cj3/MgBNLZvlNcuF+kca4UJ9cKIl8uWMYLAicwiS8FZhx1liDArZRiXTXt9kY0cEho5je08nd17tNe73wXiQU8Syr78y18xYH5z7TdnuUCAzntnH3z48PHZwb3iPenyShwHUXhuxd7JY1yqffiPHwJkpau1Re+E0ubJaz/XKbS8OA/8sHznwdG7b5+CwF/8zIX6dvz06Jja4ldffPMvvvuRRuQXf+UXPavO+j2RLYwsEDjOGcIOG+cxVsyHWlsc1hwrYTWX2TzifqZThLHNE98vOU7B2vz8NFqkTKtoNuQxY+22VykHQUSdIcCcdYRw4IEOJEOAiEcJ89sdbMEBwoRSzgFjJ3NwTluHrAawhHEgXAlhyJyHlVK1medGg3VGaigyv4AOgZmAMiJU/vGTv1hZa2+Ul7Bz52cPv/sn/zjTLo70bDL2Sj4mELdbMEtxzV+uht3x5IWddRyqyS6h+5OPRsP58bTr+2vTxaA/XUAA3/jSzfVN/vs/+xtRNGCOr6zz62/s/ui9jz85+WjWPd+KG3sHjzeX13zGCGiwgBzjxE7yYam+iYI6o0Ex3mcedybDzmkskdV+WHGEISkYjJ67uRR4NX+tU21txO2Ox7mvJDhjCXbIIkQQDTE14BRGlHqRZdQ5ZK3FiGBMHADG3AB2WoJV4CwmGIjnREq1lF5JO41pBIiAFrlOMy/3rnfWHVLIN6ezsW+Pxs/+X//0/wrQ2Oqw3/53vgYQ/uij71Weq6dKZga1K6tP3+3ZAqapshJ/+LgLKI1WW5RodnFz5aww779/DPMQYtxZDlrr9R9+dE88AiAZEPwv/vrfgkgho3/+1o8+c+Oadea8P95cWiGYOACEEHgkXeQ++JnTnh9gJU2RsFpLFxNKAhAFwcZ5EQAiMg2joPbSc1FtjURNHpaJ7yGtDFjiiGMUMHLOaMyIx7E0DjvnEADBGBHCECZgwRhtwWLrkJLGEWKNI8QS4oxwpoRZaAoNHmeUMBSNijydBkui2LjUPE5Gzev1r9ZXntw/f+/0tNZml15YToPuZDTZ2FoaTkZrF8sEs+Gz0c997urDJydHt0+hWqndaOR+BMjQ9kq11mxUTjKgOUxSsLxnzT//gx95fhN0DP0EOAKKAAj09awsHpOT5tZ2vVUDa8AgIIhTpNJeMR1g6kXVVUqIlmNtZIRZITQhxIqc0gAxwhCy2ST2qkGpzvwaDSuYcUKIcwYR6oxBzAfEAGHueRZLLZWRmYcSjEuOcgBwBqxVVgtiFTaKWmOcNkYTjCjC4EieT0O8HK7sLuZdhxhjHsUF5CRAYVaQSNQG3TmM+sZZVVdXbnVaK95xv3fwdN4/lbnQu6Q5yHvDo8Emj1dqq0f0FEi+0lgVBFfikL7/cJoUg4/OEmAI2hxsAOcTyJ3w+wAGgEBuIbfQLD1/6/r5dBZ7pNNZoh7T1lDCucdEOheLhLPAi+uSl50qVD7nnBPAzmhMrBWG0gBTTKwWs9MA+55XxWGJ+iEhBACBNYVS1rkAU0Q9xHxntRUGiCVAMrHwjSVeCTA2gIkzyBRW5lAsjNHOAbJWa4mQA+Y5MZ6cPKzWO82lC5NkDhYwsFa9Ga9GH4+fPnuyB8fFYmPllReub3Hx5Hz89if9lSiaj6VMJbFYL1bOjpKd5sWd8ipoDnoPjsS9Hz/evLkrUkaCLyxNUzd5fAZHKWQA0xQiHzwAZIFTsBaEAwDgzvjh4OxZJcSfu/HcVmOpFcWBz5QU1kBQadCooi1ghMR0jmxCeYwJLxanlBEtMh43UKmGiiw/vh97MYuqyI84jx3GDpzO8zzLQo/YfAFgkZUyGYnBqSuyMCw7qW2RO507ozACZ41VAsvCZXMNyDQ62IHReT46A0KKZJZP+kokrNzBnielkFZ8cPronexQVLA3dT6tDtPp8WQyNG4xM+YkkYuizdtBHvaf9AfJ+Oql5sVtur2yhoy7cfVGbzjhvh9YigtHh/tJQ8VYVFY7FzbrjcniVHIUVUp37t2zSkHoAVaACGAYHj+p10obzdp8MvY8P6xUrFYUBV4tsNaINEFAs8VQZQvPd4CRVoXKh763peWC8MgAhsEhnU9xq4ERtog4QGApUkInI4edknJydkb7Xe5jB/j0aHTw0d2XX92pXH+VRw1bJExJ0MYRDNY6UWiZWF4Cq8BYa3MkhcJUW+t5lOgJFnNhQSJEKYkcPvzwZOPSpWJiJ9MFTNJinFbW1hKZ2VKQKcOrpc2LK/XNYP1CU/uzaTZ9NH2AMQUbmnqK/ejChStfuPEGHdwbKaKv1ZcaQS3Pszde/+rP7r9/+9GehyJVQdb3YDqBhYBy+4WNZgX056680gyqy+1VzLmlPnJWydzqgoDKF5P58DjgkbaYA1ZyDkZga7QSlDFUiOL4KRGZc8YZA0ZZrYzNXDa3hXEuG3bPfvznP1lZ7XTazItDmwcyl+fdbu05SktlDdoIiY1xRoJzoHKrCwgrVkqDiNXSWYXAKZ0HUYwcRgSbIqfcFw7fvHCpdfvR0U/uwkKDQ+BzSN3svROIKNQ5MHv/2f2g5FYuBs+6+0fnE6U95Hd32s2AlnAghuPFs8Pjg4//BwqFmsrJZ2+8KGfF8tbaJ3tP7xwfQRCI0Zg3O/K8C6kCj4Vg25zf3Lz40u7Nmzc/E3nKLhZWF1ZmVipEEGCaL85tkZAoss6Cs07OMWFWL1hcQ4TA+DjvH4aUOSWtKpBkVltwWsucl2sYwqO7H8SRqVQ9VaTGubXdKyu7F72gTEpVaR0NS4jkIKQzCrQyJpXWAMFYC819JIRxBiFOkUHIMuZhhxgA4TwVbKOzfL1c+eHpBCoRr/pyOAAfQ4Eht4BJfalVQPrBvTsfkNiPO8X9FGgOMf1kNLeqx4IQclb0Z2UWUej4kNq97vFStPRXP/vZUHSBShAWkJPHR2AQKACiShWxsdW+cen553avM5XNzu46oUpRNc9GyCgSVV1QlUXK/VKhtedx7KyVC4KpQcZvbBsHyf49NT52jQ2jjWeNkYVBimBKmG/iGKC6c/PNxupFQE7MetYiS2nQ2fTCUCPGnLMIUcaRtWCQNtoaoY2j3NcypZwXWUIIYD8gBFuZMh4xRggYihBnfjMofen5m588ONAxvv7SKvbXVJa88/ZTEAAtKplqV+qjEBa5KeY9iCk4B4JZawGgubxSi0o3Vq9W6w0KBYXRoL3TfvnGZz98eg/mGdR9kBIcAAG6Umms1ARz2zxsVhqvv/QZ5oq0d1KMnvheCUXNrMhij/OoIqQxiMXlWjKfBQxbnTljiAXMuB81zHTU33scCmuksDIVIgUMhMcGU+oHwJgyjtc7taAkdOFVqkapoNzxI9/5JUY97LTRSoqCK4McssZZJS1FmPnaKmQ1LlIAxLiPGUBuDFhgmHqhEXm9Uh8h+Mzzzy3/9PvTBt25sXR6fnYwmJVXqwrTHGQUlRtxvVTxiiJ/khwCC2K/ki0mNpWvvfoaoXR0OP7j7/3Z5WvXyaUXN9ub9bPJoFWr5XY4ED0c+Y5QoHDzs1svv375o/RAqOxWeeNXXvtWhZBsMuBOCbUIKpvOSM9JEne8Ul2kKQEJVmMEhCCMQRZj7Apev0JZ1Lv73vDeRwEDSxHxA8QCYJhgDl7oKNHWgrMYU069EAcBK5ejKkXYZNIJ5UkNzhgjjUh1loCRWgmnc+RHLmoihJ1SLpkYBNQvq2KItdbYRtUlhHwjC+z5wEPkTH2z9qTo//DgbjbMTodaDMXGequ9Gh7e2e/ePux352v1HW/hz6b2xRuf+c6v/50yb/9vfufvX1pZ/6u/+stkkVzc2KbRkiqtVNXR9K1n37twaeXia68nC3renzUrkd+AT04OYFI0Te35q1cbjO09+mh9aYn6kV9eDWsri+7DyCvjsArUR4xbh3ReMD80YIw1VksIfS9oqEl3/513+czmHjXC+EXm6dwIbDEnJlSFQth5iMjpPB2O5KBnkxlCxmaZVtYAQkBpHHpLDd5uKt/3EAVbaIdYUFVWe5QV05Fx2gCygCz2eaClVDKdB+WVvFgYUUTlBq+3Pl958WfP7kwW452VzbOjj2Cg0jXgSgOKAOUwLO588AmMC1yqH4zOvui3f+03f7fVKH/w1o+FMFeuvRCGTXLrd2+cp9lczr/+1ReiMn/cPdk/nUiH7vfPn771cLY3BVdahfCrV15uemTQfVqpNaKwEtWXkUqRBhRWuB8jHuh8otMF8wOgoTGSIGFUHlY3Effme++d3b7PEKMeZwQxThD3KeOYsul0plXmWdW7/cHxD350evvOycHhbLronY+6GVoA//Dhs49u39Oz5PzkqHCq3GkQgglYhRAr1QqjiTN2PpQmcxj7YVWrHJmUIM9Y61fbgEApBc75fkgNaZcrJ/3T5lpjvdMZ63x40p0fzmBSgHBgEQTxq9df6p4fL/b23zo9+tu/+As/+P73/i//+/9TFsidG8/tXNol6efg6QePSnE1zxef7HWf3D5NM7LdXj+//QhOHPgMjFwB9qUbL1OjwogCpuXWahjURTqkXgkoJV6MCCkWXZCSlVqGcp0tAIRDrlRaySfHRfdjuchVwfwAYVIgRokfYUItBumMFlnv3t2P//Ltjz9+/DiRsLzRuPoCb681243K8vql51954bNfuHzzpcbuldrWuqPGGOmMAeo7womzMpmbIhnO+jwIeVB12MnFOCzVjAZHvXKljggvRIEA4rAaIV6p4b3F6f0nH61f2GysLlmKs6m4svnS3ITf+PI3fuWX/jZH4QufeSFP+3/0Z3/41z/5HvgKNuNTf6ZgRE9PCmCrZ7dPp83W9sX2Sa0PSfH5a6+8XHvlyce3u4v+0eKsFixFXgnholKpWwvMj6xJAHHCfKMLTAhCzlmDMPfCqsoWABpZFwUNVczyyb5xKqyF6VQAUEeY1trIVLuytY4QnBZpbzJBce1rf+vN5u6lqFrlgUeZB55PEQaC8/HZbHhOKiGPI6NAqJnRzvNjLYWzhZynVmTzca/WaCkrSVgyBhNCfeQbkeSq4pXqmnjpfIpwXi5Vdhdb/+O9HwVo5+7BaKHwrdaF1qLp4fI/+7//V+uby//Zf/5fXrqwdWF7/eRgf+/px0AtRB5YacXoznBKIGYwz1rllYgFzwYn4FegcPPj4YWVyy+9cK3V8E+7h1vLm5e3L5TLrBL55VonDstOSGs05kzLwo8qyig9HzlLebVlVS6nZw6p2KsWeVcmPZUrjlA2yzBwFjjqUUIpCiLCfABkKV/ZubK1c4Gz3DMFVZmnrUqF7J4me3dnD98f9p/ogESNOgAYLZ21n4ojlVNmOrdGTobdIpk2VzfBj7gXaVkoLeNyXVpnHcaEeUHdOJMXc049ruFg/+T+SVJTcTLIKrZ2deP6ha2rX/7aV58+fvDOT348HJ3/5Md/U6/UmvV2N007S0vpbAHjAlBIgTmgvNPq3L1/HyYLgAWUS0V9+MG7P3hI6eallmH5h/3bl09WVmL2rc99rsQa1lirBfd97QyhGGFwygAA9gKHsXPWGe0wKJuabEwsMsaw0PkVouYKgCKCrHNGphITTCIWRogRV/byxA5PHxXDAREOFNGQaUZItVy+sFlvtRxGxggEQDBRUhrIdJqZNM3BDqddTjEijuoCqZCXW4vhUS4E8QNrlBEJQr4fhhZpJQpE4c3nd3//hz+Y9AUwd+dsYRVuKvzdH/748Ufvf/TojkfV1ubmcNo/6B65+aw3XYAzrLnyiy98lVz4rcsThvp37kFhoBpBiMCgaXcRktrmys7lq9cUER8/fBIxtrpa21jbqvIGNpZYSSgD5yhGiIXI6nw+4mENeaHJZjobYgJGJzqfYUtykRqQxLJZX0QhZT5x1EPYOescAEbIOSCE0TBEUaQ4zxgqIk47K9HWTu3CbnNlmwcVBAg5h502qihkbpUUs64qckVxshjFUVRe2tBKIkSo5xXJWAjlewEgbLUC5ywAckZpoR14xPbVcF4uzzs1mPb6+2cvff5rm2vr77/9LnDbz877+aA/6kqbAybtWudrn//qxc7WxY1dsv7KtsSmwBQM31renKIETAaOVZiPffzBo7s4LEpeveVKN5/bVNpu19ecEdhZRLgFDKCAR8gonUy8qAqUySJxcgImtypxBpRcOGuyTHNKDo/mxPp+bAjzECCLsEUYIYIdtYAcOI97Ua3VXN5e3txtbV2pL2+Xm8t+WMfch0+hY1WezoSayvn87OmRpJSVAp3M/WqzVu9oJ5WyxI+0SLG1mcgppk4JJRMECKzTOkO6IOD4OntrejA9O4GdDu+srMalf/L7/+Slq7vVRmnv7Cm4DEADWFwNv/Mr3xmc9c8HJ5/sf0x6/lB5+eWVegXKX9j9qlfwWr0a+b4pTMLzxF/E9eDK7oWsKy6urmKT7ixdMFoho4AyB5gaYRxyVplsTso1C5QWiVSpzafIKoyQKRIthTGCI68/Sd69M15aCiJOgGCHwTrnkMWYACaYEOrFQVQPSy0a1UgQUT/EXoiIjwE5q5xSUqXpqJtNuqcHhx++3btya9cipY1pLq2wKDKGG6e4X5FFBi7DlE8XY0aczOdFOqLYs0Zn+QAZ9dadB9999ARmOVSC5Ya7fbZnTg6fpZPHD94HmYFxUOJQ5u2VVefAaVhbayV2Sv5X/+U3L20HtTj+2ptfvXXphd/+1t9ZWbkQlIPHkwfzavrS5y9oR77/5MnTBw8ur6xf2bq4UelIJX2KPh1vQPnCWEDOzMfnYW0FA5md3Qfq63xmraGUOWOkyAC0zimN2U/eO0zGolkpc27BSqslWIcJZowFQch4wLCPEQFnkNNgDTLaKaHymcjHOpsn0+74/JmcpQ8/PvXi2pXXLmd56kVhtdnBNFJaMsKB+gAgpGaMqGIhkqnvedJmU3kirUWGYDV/enb21+89gKmFeTofjMHDsHvB4Dm0KSQFLBwYBwpf3Lxei9pvvPBao1YRqiD4qn3WnaYZOTp76uFhuxWkWI2Dk9Wr6url9bv9p3cOF24kQS6Qhq+99HrHL2lrPc6k1lgXMp3Okxn3gjydIz+KWdw7/ZBxn7PAAkIMWW3AglaWmGw0scMJ6j6bFDPpwBFMAVmlc4ew74eYcnBgpTKycDo1IpXZwopMZjMx7WeT7mx4Oj0/UvlQJvTh3dHNL10JOlWkdKlS5mEZIa5UUoobyiGHAWPfOOO0mA/ORHYasHIh+/P8iGqPGfm01/u4bzOKQBZAI4gtxBJwAT4GZCGhN55/8/ndl37tq3/r937r737+pRd/8P3vfvThj+j79/ag74D3QMi3O3fGbiIb5jifj7rZvKcPBw5GCgxGvL3XH4O2UhYOI2McaAWmWIxP+8Nupf415lfMfKq9UqW2PDg9bC9fQEY5Z1lYkyLHnFNFev2DwSRjXpin6OG90Xk3WVkOK00/KgAZHIocYw+UBUCMUYScUtZoLUUmsyTPZtKmyFqOyOn53CvHq5fX0kISsGFcpjQQUiAjKeMEeSqdhGFlnhkalOK4MTq+45whJca0Ts0ZY3VkKWUxoARYBCIF4WCiYUZAAzSrr3zh1u986/def+lFbmyjXAqIurp5VUpFAUfgAEYJYIAu+e/evw8dDErD3hSUt7Z88WR6jgT8yuVXQwxUaCszhRHiZWKUTudnB4+tFum4y70KMjSXSRA2o9IMgKbzJOKER1GCzgKfi0KMxlliFNeG+DQMAqXh9DTtnctKK28052E58jyCLWAAynxwTkqlhHBgHHGEY0KwA5Im+uRsdvUzN3y/PO4eNKpVgj3M/GI2xs45q4O4ogvPOusHYT7Po0o9nzVmWYK83EeBJS5Xw6WtS/7dBEZHUC1DvQxIepaIvfMbb/76f/4f/cciKx7f3v/T8Q+ePP7otZde8ChNEXv7408ozBBwDR0KKYAO4F4X9gDqTRgGO4xdE+g3Lr18pbVxqdUoxV4p4NpKo5FzFnSRTc72Hz9t1FfTUdevphaFgaFWy6WVrelskicLGvCwUvejCtFhMu/bHPkBGU4zROPApySijDhrnMjsdJDnM8044YSAsZbMgDhEnOehIIoxpYQjY60ozLhXhJV458bWZD5BzkRxyYtamVIYGTBWycRnS5RFBiQlAaXBaHjGa62yImc0c4oMZb5h1NO+JyWBOX7z4hVoxD/+iz8XIwEaLWbgofXzyYPRaNwm0V/+9Pv/4l/+9ysbF8R8qmRGgeWvf/NqtY6MLN/5uHf+lEOaw3j+ar3997/1C2ulUoX6rXrH6YJgA8RYMAxRp4XKp7PR+fJaiweBKKZqpJudCKSYzwYQlzxGfMpmybBKNuLaqpXJ/PDUY6UA+gKQdIj7KCwhxikAIIQoAOMEU2wdAMEOOUIQ9xAPKOWUMM+CkTLPUzufmKXdNg6wnk5L5SqPm84rqXzMGEUOsmQatBwPoiwVQIh1mHlelowj63W80kgMj8Ynazzkje1TmwBenFtF73dhFH37V39vvBi80+v+/r/+g69/8bVXntv9b/7Rf80ge+XWyxvNpb/+yz9JdEEhqD1/IQ6b/I/+/EE1Kp0n85Ytf3Zj+ws3rz63djHNU16uQqluEZ50n9I8rXVayCNaiSzrOu5VV64YZC12RimdpRQ4Mfb85Gj74hVGASsahBVsjXDUKbd9rXU+nwVQ5MYxj7AAxwEnBFlrEQJEMSUIMMbgMHbIAaGUMooJcwgZZYxSSoB0anlntUgn3OmgXPXi1nw2435YSMIDKqXNZqO4sS5l7sBSQhjzQ78+SR8FRSUsN5fSVObm3/z0D+B8CnV48vBHoMIv/N3fu3btcxeWWuTf/suIFel4UiWQzaZZkZKL4VH/VMXMLjLqMyqL+cFTd/DJAny/FNUu4cZ3vvGrn/3Mi8lsWnXKA4nlNFrfLUXVxdlDhxCyBFQhZgNnGAAxUlkgSkvsuiyb1svl6dwIaRiz9aBF/dBqLWYT6nvlDltZiXtTKbX0QhJExPcBIYoRQgjZT6lnnwIQgjAhCDAmlDiMrLUYKMNhkUwrK5Wo6meLYVSuknIzm50VhYmrV2FKEVjfj7VItRSl9lKWFEopRzCJ4rDcLHqDhVjUrHuUyX2NgPmgFBgA4h6e3ntyvve5y9eC2BkzvnKps3fwURrlUyfe+dlfrC/tpEZcffEl+hu/tLRxtfmTP/kQinzDil+99fqvvvGNSytbRulyGFICgKzRRmRZudJGdr2Y9pFOQM5MMckTUCSMojoCggleJGNaTLk17XbHGKvA1RqbwiKfBVIVmHIEem2jcXCW4aSgHIexF3oMIYYQdeAMQhYhSggAYEQIwc45oBgwpUAQJKkURSHWn98p8jEGyysNp/Xw7KCyvKMtsKAsimG9Vs5VUeQLP4iDUsNY66ZdyiMtT1KVgSRzrf+y3x2fzkAwWO1A1odx3nv6DjRK/9Oj70O0xJVX9/knT987WwxAZEvbO6Kfba+sPT45pJvbzY8/OGrOl7/02qvfvvbmcxdv+L5HAQiixIEzmXOWYKyn3Wk2KTU2Qcts+MSlMy1VrbGmvLosFkUxpoipLF/kqcthNSrjAFjQ8EvLJOD5ZIiliKNyLkStA553ZnJHCPK8khd5GFMLSDvAmACiRhUEDCEYMEMIEcoQRs6AJUgI0dpaLtfKs8lhrd0mHk1PDywliIWkmOBKJ8vn0mEclpSWJJuzkhfEFT+qO2UxCa0EWpCT2Khr1+C9WXulU9uoH4RkHeLjbC48CUsVHyr/yS/9nf17ezfWXywW+OKldTGb7ZtncxDtUpWYLWWfsb/94m/97jd/58bWNe55lBJqJShhVG6NNDLloCmY0aiPEfG8QBcLOTnJ5wMa1IAisRiBnGmtlIEsV7VGs9RaInEclDu+V9NOTsdD4opZPtcZwlZ0T7uQw8XtWlQp+35APR9TTjmnlBPCABNMKeEeZszjPqMcE2yN0WIGmDc21ubzPtJF3KprJWe9XtRZBuwRcH7c0MVMSsmDCkIEOdAYMA6tFmCFM3o+PnucFH9+Ovyrp2ebSxu/9su/9Y3Pf8Vm8yxJK34wPHwGLteFmQxGf/XXf/nx3rObly7feuWVP3n7Lxeh5nXqiKMvhrd+49f/1nOrl4wUw9Eh6BykdDLDJre20EpjMMIJbV2VMtO/Xfht4pyWqVykSuzTIEyGQ21saWmrudJZWg/LtaoXLwXljtUFQmpw9LTEowJzyqqzxTOQolwpucmCMOR5jPMAc+YwAXBGW+sQRg4TjglGCBFEkbUAgDHOjamubydplo4HtZpPnJ0OBr4faCW5sQJyXxU+D2fTvpnhSqVlhHB4gQzCoMFZNdeZoN2CZzmE2eL6G5+t1CLP4deev/X9n/yUKQJeC3gOyH6y9zNoUD0++NMfnv7pT/4AmAYPvKUVcTah//G3/4EezgZHB37MGbaYezyMsC0ZVQAWyFBUFHl2atNFMhomo7H0xrWlap7PsabJeMpogkDzUi2qdEq1pSCINGdeuUyJZ60YdJ8V02FjrUn8ZSeDw+nt+SypV2qCpwBAGCW+T6nvEGgtKCXWGnAYA0IYGUusBYwRcQ4Z6UjIK5Xxs1OSAmognaWm0LxeU1ICAqelFAmhPiNYKTGd9MtRKCap9hNtNFjHKTpf6PdvH+3Jya3nn3v49MHps4P7D/bfvPnyq7vPHR+dJ4/uA7HAKDgMVsMcATNQpYjELs3F0RxmkvafPapEUbu5RDyOMAKggJDT2nGJtbIuE2aSJ5lWKsnEPM3F4qzWbhgc8nLqkkwYVV9ZCte2w3qHAtYI/LBDWaCKs+HRQTabNzurpFSjfqQm+STND8/yl6+055xSRgjzqB9Q7AFYh8AqRRDCGIM1yCKHNCIcUWKVVQiiakvmOhnMmNRRm4hCYgeFFA5AK4OxkMUijJtW6dCDVCRTMQuDymJ4Dl7JGByXAkWCjx6cFuvln/aeKlzAIAUBf33vdsSCdDKAGgNgMFeQG5AWLN65fmOG0uG9p+AATAIh0EoUrrbXEehkMZHaUu5bKcIg0ICmBx8mZ4+odKQUEuSCwOOdhlhM0um0vnpj0v24wYPZuBgqs5QXi9OTuLES1zb8sOSy+cGju9Px+c7OdV5qI7886Z4ePfzwo48PKo0VHlE/xIQSTClggrnnjKUADsAIDcg5jIAgSigmHAA5BjyMlbXptGeywhRIi8IpSlGgrXEyV/mUcM/ZaeCHBmyWTRnz59MhUZr6ODFzkWjsIT+uJljDVQ41B6kPKQJdAErSbAYlDM3adqXtp+jwkyO8sIbSsMzmicIVZgWAc1BjtFNvq3ya5+l4Oo9KVWQcD/wi7U+ffiRHJ7y01lzfzNXEiVm6WCySrEjzovf+ZHy1fvF6REWlo0ejMaUlFNRWt28Sj+bZoPfk3t27H7906zMSiMl0Wozmg7NH956Musn2Fo9LpbDCCeXOKufAgMMYE8SsM4ZgRMBZhykHQoEyjAhYaq3Osp6YTpE1i0zlcxIGhV/xhbYySzkfBf56ls38KEIE59mCI+ZUPpz241oZRQ2R5fOEvX7z87uvf/S4tXhudfmTu0+hFkLkwWgIhAKmoGD/4NnV1pVGtXk6OLVIfvLj9yEGQAgIAavBWPKf/PbXRTYrch1XaoSHYLWZn0+e3fVBxRuXaqvXhJliLaxBPAh8v8TjalSpWetkMqVRLawtL21sl5a2Ksvr6WKmZ12dTgotBsMpJmG9s9FeWl9qr6ysb1Dmf/Szn124uLa+1s7HvVotCssVygNMKcYEYfKpHhIQRgQz6lnsABOEGXLIqlQsxqYQstCTaSJyyrGptsuJMOl4wnjAomA8PQ88z+OBkLkxNvJiKSaL5DzwqpkwWqtGtXFh+/q/+d6f9oUNWE1P55DnENYg1TAuYJDBqBgVwkN8q7M2KzLjcmhHKI6BQ319NceO/Pu/8YVMQlCrBcxTQjpizPBZtVSN117C5WrevTt6dne+yChhGDmMLVilZOoTxz0e6Dwd7k+6x73TI6cm48N7zdYqchTCaDZNO83O2uZFv1wnmCPGg7j87PZH5QpbW2ur+TgqURZE3AsJ54RQwBgAIYQwQpQyIBQ7yzCxCACsKlKkCgTOgZXaDifytJvUW61qhxYzIYoc+3QxmwSM+2FZqAJhMNjDFAuZWxzV61s6roz7g1cvXr+2/vz3/+jPqOBymENK4HwKiAEJYKqgsFDSacRxbi+tb3ZJBlhAkkKt9MKlyyeDHvndX/9SWF32GZ8nSTku2zQhnk8rDSHywYN3j/YfFrbE4oZQudJOCSEXMy0yk49EbzAezeISGh6fDxawcvFqGJfj+oqQ0osaq82lpTBwYdmLqoCoRg4R4mNbb1RDH6vZIAoDHFQ494jnUcwQAoQQcgiBw+hTUAFixDlrjULgLEYYg0PaSVgU4tlpiom7dr1pER1NZlkqjNUep3GtKZV2WhMEKk04xYRyFnWaO18Iy6vT4fH1CzufvfHq3u0Hx/ePYW5AWCgFkKeQKwgIcA0xT/I5UmiepK/dunXlxvOmyO7+9APINEU0CsMgHxwZpbRd2MUYKFFiMRmPpgXwaCtgFBvt++U8E/kiKxZpMp4lRaH6o2BpNagUx0enSQCf8csIAksDGlsWlPxkNt5/WGpuIBZh56wT1NqXP/sqC+LTJx/J3lkUeph6hBCMGcbEgQMAxKhDYMEQ4wgJHCGIgEesAgRANI0jGmg7jsZ5GJInR4OXh0s08Cjx+k+6roKa7ZJWWRj46VwUKgvDcDFJkRVy3qMgO1tX5dJKPp+8emPlv/k/3vjxWz/e7559/4Ofno3PEvAyrQAsJBjUGOo83mz/py/8SjXyZyYNKT68swcJotVyw+bT88NHZU7uH94tx9QLSplwhHiekIxFxhJLUJbmKMtYkQorWOgtLa37O+Vyc8XZank5dEgZ7EISO0f9uIlEsnjw3qzXbXzm28A9owVYzhykycQLa50LN+1k6qbHwDDGnCBKKLMAoAVYhylDQAhGFihQSgi1pkAq87jvhYFfquOotJ7oZKZvPxtMBS1xowtsrBdzLHKRLmZRqWaxkzIFx+NSfTgZObYwSc9Ul2lYKoV1TPBGy36DR/vPHn351VuLbCGlmqSLWTFfFPPTYb+bjY/nk0dPn/70B9+fF4n0EBgHzlGC0P6Du9ki33j+RcODuFplXjnSwDizVhntPIJ9zgotsLbZYuqncy+OHYLseNjcutW58NnnvqgO9+9raUiNadA+i/LB5O5P3lflxrVKS2iLlAZwlhhHncGOlEqNS9eTYyZ1wRDDgDHiGIGlYLF11lFrHLEInMMOsAMHzIsp5Yh5GmHs+2696PdmlYXJVHmlXLufvb0/GLyydnk+ysJ4Tn2vEAXBZjrskVq7vrSe5kUxOw2XLlO/5BNsnHWUdTZ2griezEazZDKcntAK7j87n4p53GZrpmy79J1H9y+//tm33noXkimAgxjI3/3mS2DzeqtFCCvHVepzj3MKyDpJsaMARkGezcfj+bQASyOfOYIcJPt2Pqtf+2aw9oLSutle45xpsbAOR2H1zsNHf/AHf3b189+8+PqbVikGjiKKECbct9hHiIDn0aBCEPXAIcqBUIxAGQDMEPcRIYCJRYQQnxIPI4yZh1lEeUCoD5hZbGZy/mv//n9oHDr85N1Oq15vrGhVTMazervOQoKtU5lQSvvlshfXfK9klSJhI4hqmGNEAGGECSKY+l5YrjZq1Va7usy4j32We3AwOZ7M+0/T0c725vlgoPtz8ClUgM4Pb5fXdzFmRVaQakvNB48P3i9X1urrO45Qo2FRzIaTOXa43orKAYdkVOQTszjG4dJ49DSoXLQqYb7nl+sum6pkaOqdx3tHQy9++StfAqXAWcDYycKBBhZiFmDAPqGjWXpyPg5UsrK2ocE5AGYQpsT5DGlmlHRIEeZRzJxjgBGiFCMKgLADFVWjyvLD/YPBWJ0cZzB79toXvn7vyVAKo4VRmSJARKEd4V5cAQwUsEM8n5yHjVXwaxwT4ohzCFOsEymVwoTXapUvLW1+ieJMZf3Z6b3jT/7bf/XPf/jdP4YJQMjrN3fG6TH5h7/zK4PMa7XbxqRFMjl68iBsbKxevRXXOw5hY6S1mrKwvXqx0Si5pJdPT4lZ5IUImhcX4xOVCC+KPWKtcx7FZnwGHvve9/6CSvLt3/o1gwggR0xhjEAIEKKYUmwdtpozSsEcHR2Cg1Z92X1KbmNgfkgBW6MAOUJ9RDlhHvNDzDwgDCjXRvZHyfWf/5W3/vxv/uz7b3kSbTWjyoWVw0+eBgEr1WJKsZUijCLqR5QHPqegC49zhDwa1nhQJph+Susah9I8ZUFQqlR838fUc+AxGrbKKzc2bn7t1pciL/zp4T2Hs9zLIYrJ7/7Ca/VGaPNp/8l9nxKvXNt46ctepWrSubOaMUwIrbdW/TBQ46O8/yhJxhRLy6s8rIj+s/HZSam5yuOYI4KZjws5HB2+86OfLG9d/OwXv+IcwmCRcw4jRJhxFCFnVYG0MlZTjlvLy+fHB+1W0wWRdQpjij2OlEXIIcKwFznmE8oAU4sxxgQwZECPR/PusLe7vhyb8fNNfGG9bv3ycL8XVhlQGwaUOuV7Xlhbcc4jVnJiEEKEB4SVvbBEOXcYA8LOgef7fhhhQgAhix3CCGFnjFXKVP3SVz77hV/83NfvH+8fffgY8gyzqASsJByprax69RphZZCp6D2Ug6dIZyB14AWIEZWPkv5+OjpkAAb8uLasxawYz9S0m056mnqIIEAEl6Lh3pPRs9Pl9W3CKHEOAXaIU+Q7R5Wz0ihAFghG1qq88IJ4a3srzXpeo8oqLcQ4AMYIEcJZUMZhSAijGDuMKBAMcHp8mDjqNRrZw09aXvrFF6/e+vrPlZ9/tV5vb1+s+LFHHWihCHFECUQY9cvGIISYNgYhB2CFyLVWn/LdFjmMCULIOWQBI0Scdc4CQYCIU84Wmbl58bk//j///v/6O38Pho4q6UK/kG7mV+pFkk/nSVMUREm/vKwdaCOc5yOtstEzmU+0EiwMUdgmKFKTT5BxrlC2GIOwxveQU8zzzg/OvLD+1Z//ppWZRdghDwABOKQtQ846YzFF4AxyQKkDqDbb80kXCALqAWBqnSXYEk49n2CmkQEEFiO8SOet5vKNF3723T+cudgnMD87Xb/8OecFFZEIf1Baqifn54x6SBZQKjtOYNHHjUaBfd+kCBwYgSgCSrVSmFJMPefAIPepIyUChB1GyBlnAYAi4rBzDvJCxKz0X/8X/1WZRrRaLXMkLK0EQWMwedy+sBE1L2JXpNkIkglCBCMis5FMJ0jnGDMU1HgYifnQaqtBezEGkCYfINJSmCDMLj338tJzX6q3Kk5JBAzAWgLGWEaQA2s1YEDOae0MJkQbQ/xy0GIADBGHMRCHgHLLKACyVhPsrHEM2UkU7T3Yq5SjpZ3WrY2r53fuLm9t63Lk5wJp6ZS2ljDn4lqFkwxnGQkj62a0GDKLhXWUI6ckMhIhzDjXSlvMrHMUYYcQADgAaw0CoOhTdZNzzgEAwi5xxgf2v/uH/wXO5qfzJInLHWmlF1bKpZaR80W+cFIho6yxFDkx62JnjBa81PAqS8ShXAwRjQgjYRxZp7N0Zq0g2BWAt2++evONV42S1lJwzjkJFsBZa5WzQIAYZ41R4ByiFBw4cFI5MZs7IxDlljFEOUGEEG6dA8KkF3xy0iOtljg5+v/803+RJXb+6O7yzkVUbgWLuUjHSf943j1mmMtcYuLCkIPKi3SGqHP5ic7mUktCMICzShptAAEjFLQm4BBCyAFG8Kk9PkLIAbj/fwCAA+KQE8YGzMcoX1DCgbgkzxrNS6VyB6kC2QIXcysl5bQoFihNiZWYeH77AnYIFhnCipCSNUgaF7a3g+2Xcl4ihCJEHSsZBMg6gogG6awizn76mk+9xLAzxmgE2H1aCWJMGGfIGSEs9jRhzjkt88F0lhv7yclp6dqLJJ/99f/z//G9jx/Va6306KS6etUPq36WFnmqZjM7Hc5GTx0YHJZ0KqhxwECJROeSgyzSXp4mDBDCSGtrrbUWEUTAWmeMA3DOWuustZ9mCgFCDiz8L4cgRxEAYQIoRbwa+mG6GHJWCcp1gTDBCGepEYKEdY2JWQwsNkrlxKsENBoPn0aIAPYdwk5JxyqsXK12LuY6z0WOZa5NjmUOygJSCD4dRXXIgQZtEWDA1CFlwFoA6zTCCBGkcytySXzSWe1+8BOB2MbWxr/5w//vN77zG4/e+qtiMOF4ePXK+uL2w5eubd187VUNGJRUtgCtnNXUYz4P+5NREIbj3jiKqpg4BMYW0iKFgWWp0VoiAhhZ5DQ4iwCBsQ4j7Cw4AAAAZJwjCGHnPt398OmtAscAMHLWKupX6tIKTMOwvsRKvpISbCHyeVyuGRJqK6zMtSwcYpVqPUkGhDMMBGzMaaEXttyuzwc9dHZSrZUQj3BYAWTBWpTmIh2BshRZ5pSyhiBDHHIYO0DOagrOYQoIwFilNGDwMJmdHtz/wU9Uc2Wp5s0f3nn4Z4WfJ4/e/+nnX90WRf7r3/5mvLSpHVijASwgjAlBHmM25l7s9Hgw6NYqoXGGY09ZsOC0Vs4al+bOaXAGAH+KJANWas0DH4GzDgHCn/5DC+DAATgAoBh/CjeDCXYGWfP/A40ayVlwV+LoAAAAAElFTkSuQmCC";
var Yn = "data:image/png;base64,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";
var Sn = "data:image/png;base64,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";
var Nn = "data:image/png;base64,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";
var Tn = "data:image/png;base64,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";
var Wn = [
  qn,
  Xn,
  kn,
  Dn,
  Vn,
  Yn,
  Sn,
  Nn,
  Tn,
  On
];
var jn = { class: "app-card-priority" };
var Un = {
  key: 0,
  class: "priority-block"
};
var wn = {
  key: 1,
  class: "priority-block"
};
var Kn = {
  key: 2,
  class: "priority-block"
};
var Fn = defineComponent({
  __name: "PrioritySvg",
  props: {
    priority: {}
  },
  setup(n) {
    return (e, t) => (openBlock(), createElementBlock("div", jn, [
      e.priority === "Low" ? (openBlock(), createElementBlock("div", Un, [
        createBaseVNode("div", null, toDisplayString(e.priority), 1),
        t[0] || (t[0] = createBaseVNode("svg", {
          class: "low",
          xmlns: "http://www.w3.org/2000/svg",
          width: "32",
          height: "32",
          viewBox: "0 0 24 24"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
          })
        ], -1))
      ])) : createCommentVNode("", true),
      e.priority === "Medium" ? (openBlock(), createElementBlock("div", wn, [
        createBaseVNode("div", null, toDisplayString(e.priority), 1),
        t[1] || (t[1] = createBaseVNode("svg", {
          class: "medium",
          xmlns: "http://www.w3.org/2000/svg",
          width: "32",
          height: "32",
          viewBox: "0 0 24 24"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M5.59 7.41L7 6l6 6l-6 6l-1.41-1.41L10.17 12zm6 0L13 6l6 6l-6 6l-1.41-1.41L16.17 12z"
          })
        ], -1))
      ])) : createCommentVNode("", true),
      e.priority === "High" ? (openBlock(), createElementBlock("div", Kn, [
        createBaseVNode("div", null, toDisplayString(e.priority), 1),
        t[2] || (t[2] = createBaseVNode("svg", {
          class: "high",
          xmlns: "http://www.w3.org/2000/svg",
          width: "32",
          height: "32",
          viewBox: "0 0 24 24"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M14.58 16.59L19.17 12l-4.59-4.59L16 6l6 6l-6 6zm-6 0L13.17 12L8.58 7.41L10 6l6 6l-6 6zm-6 0L7.17 12L2.58 7.41L4 6l6 6l-6 6z"
          })
        ], -1))
      ])) : createCommentVNode("", true)
    ]));
  }
});
function Zt(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function L(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Zt(Object(t), true).forEach(function(r) {
      Pn(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Zt(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Ke(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ke = function(e) {
    return typeof e;
  } : Ke = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ke(n);
}
function Pn(n, e, t) {
  return e in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : n[e] = t, n;
}
function re() {
  return re = Object.assign || function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, re.apply(this, arguments);
}
function xn(n, e) {
  if (n == null) return {};
  var t = {}, r = Object.keys(n), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(e.indexOf(i) >= 0) && (t[i] = n[i]);
  return t;
}
function Gn(n, e) {
  if (n == null) return {};
  var t = xn(n, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    for (i = 0; i < a.length; i++)
      r = a[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
var Jn = "1.15.3";
function ne(n) {
  if (typeof window < "u" && window.navigator)
    return !!navigator.userAgent.match(n);
}
var ie = ne(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Se = ne(/Edge/i);
var Bt = ne(/firefox/i);
var Oe = ne(/safari/i) && !ne(/chrome/i) && !ne(/android/i);
var tn = ne(/iP(ad|od|hone)/i);
var nn = ne(/chrome/i) && ne(/android/i);
var rn = {
  capture: false,
  passive: false
};
function z(n, e, t) {
  n.addEventListener(e, t, !ie && rn);
}
function h(n, e, t) {
  n.removeEventListener(e, t, !ie && rn);
}
function Je(n, e) {
  if (e) {
    if (e[0] === ">" && (e = e.substring(1)), n)
      try {
        if (n.matches)
          return n.matches(e);
        if (n.msMatchesSelector)
          return n.msMatchesSelector(e);
        if (n.webkitMatchesSelector)
          return n.webkitMatchesSelector(e);
      } catch {
        return false;
      }
    return false;
  }
}
function an(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode;
}
function G(n, e, t, r) {
  if (n) {
    t = t || document;
    do {
      if (e != null && (e[0] === ">" ? n.parentNode === t && Je(n, e) : Je(n, e)) || r && n === t)
        return n;
      if (n === t) break;
    } while (n = an(n));
  }
  return null;
}
var qt = /\s+/g;
function w(n, e, t) {
  if (n && e)
    if (n.classList)
      n.classList[t ? "add" : "remove"](e);
    else {
      var r = (" " + n.className + " ").replace(qt, " ").replace(" " + e + " ", " ");
      n.className = (r + (t ? " " + e : "")).replace(qt, " ");
    }
}
function m(n, e, t) {
  var r = n && n.style;
  if (r) {
    if (t === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? t = document.defaultView.getComputedStyle(n, "") : n.currentStyle && (t = n.currentStyle), e === void 0 ? t : t[e];
    !(e in r) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), r[e] = t + (typeof t == "string" ? "" : "px");
  }
}
function ze(n, e) {
  var t = "";
  if (typeof n == "string")
    t = n;
  else
    do {
      var r = m(n, "transform");
      r && r !== "none" && (t = r + " " + t);
    } while (!e && (n = n.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(t);
}
function on(n, e, t) {
  if (n) {
    var r = n.getElementsByTagName(e), i = 0, a = r.length;
    if (t)
      for (; i < a; i++)
        t(r[i], i);
    return r;
  }
  return [];
}
function H() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function Z(n, e, t, r, i) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var a, A, o, u, l, s, d;
    if (n !== window && n.parentNode && n !== H() ? (a = n.getBoundingClientRect(), A = a.top, o = a.left, u = a.bottom, l = a.right, s = a.height, d = a.width) : (A = 0, o = 0, u = window.innerHeight, l = window.innerWidth, s = window.innerHeight, d = window.innerWidth), (e || t) && n !== window && (i = i || n.parentNode, !ie))
      do
        if (i && i.getBoundingClientRect && (m(i, "transform") !== "none" || t && m(i, "position") !== "static")) {
          var f = i.getBoundingClientRect();
          A -= f.top + parseInt(m(i, "border-top-width")), o -= f.left + parseInt(m(i, "border-left-width")), u = A + a.height, l = o + a.width;
          break;
        }
      while (i = i.parentNode);
    if (r && n !== window) {
      var E = ze(i || n), v = E && E.a, c = E && E.d;
      E && (A /= c, o /= v, d /= v, s /= c, u = A + s, l = o + d);
    }
    return {
      top: A,
      left: o,
      bottom: u,
      right: l,
      width: d,
      height: s
    };
  }
}
function Ot(n, e, t) {
  for (var r = de(n, true), i = Z(n)[e]; r; ) {
    var a = Z(r)[t], A = void 0;
    if (A = i >= a, !A) return r;
    if (r === H()) break;
    r = de(r, false);
  }
  return false;
}
function be(n, e, t, r) {
  for (var i = 0, a = 0, A = n.children; a < A.length; ) {
    if (A[a].style.display !== "none" && A[a] !== I.ghost && (r || A[a] !== I.dragged) && G(A[a], t.draggable, n, false)) {
      if (i === e)
        return A[a];
      i++;
    }
    a++;
  }
  return null;
}
function Ct(n, e) {
  for (var t = n.lastElementChild; t && (t === I.ghost || m(t, "display") === "none" || e && !Je(t, e)); )
    t = t.previousElementSibling;
  return t || null;
}
function P(n, e) {
  var t = 0;
  if (!n || !n.parentNode)
    return -1;
  for (; n = n.previousElementSibling; )
    n.nodeName.toUpperCase() !== "TEMPLATE" && n !== I.clone && (!e || Je(n, e)) && t++;
  return t;
}
function Xt(n) {
  var e = 0, t = 0, r = H();
  if (n)
    do {
      var i = ze(n), a = i.a, A = i.d;
      e += n.scrollLeft * a, t += n.scrollTop * A;
    } while (n !== r && (n = n.parentNode));
  return [e, t];
}
function Hn(n, e) {
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      for (var r in e)
        if (e.hasOwnProperty(r) && e[r] === n[t][r]) return Number(t);
    }
  return -1;
}
function de(n, e) {
  if (!n || !n.getBoundingClientRect) return H();
  var t = n, r = false;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var i = m(t);
      if (t.clientWidth < t.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || t.clientHeight < t.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!t.getBoundingClientRect || t === document.body) return H();
        if (r || e) return t;
        r = true;
      }
    }
  while (t = t.parentNode);
  return H();
}
function Ln(n, e) {
  if (n && e)
    for (var t in e)
      e.hasOwnProperty(t) && (n[t] = e[t]);
  return n;
}
function it(n, e) {
  return Math.round(n.top) === Math.round(e.top) && Math.round(n.left) === Math.round(e.left) && Math.round(n.height) === Math.round(e.height) && Math.round(n.width) === Math.round(e.width);
}
var Xe;
function An(n, e) {
  return function() {
    if (!Xe) {
      var t = arguments, r = this;
      t.length === 1 ? n.call(r, t[0]) : n.apply(r, t), Xe = setTimeout(function() {
        Xe = void 0;
      }, e);
    }
  };
}
function _n() {
  clearTimeout(Xe), Xe = void 0;
}
function un(n, e, t) {
  n.scrollLeft += e, n.scrollTop += t;
}
function ln(n) {
  var e = window.Polymer, t = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(n).cloneNode(true) : t ? t(n).clone(true)[0] : n.cloneNode(true);
}
function dn(n, e, t) {
  var r = {};
  return Array.from(n.children).forEach(function(i) {
    var a, A, o, u;
    if (!(!G(i, e.draggable, n, false) || i.animated || i === t)) {
      var l = Z(i);
      r.left = Math.min((a = r.left) !== null && a !== void 0 ? a : 1 / 0, l.left), r.top = Math.min((A = r.top) !== null && A !== void 0 ? A : 1 / 0, l.top), r.right = Math.max((o = r.right) !== null && o !== void 0 ? o : -1 / 0, l.right), r.bottom = Math.max((u = r.bottom) !== null && u !== void 0 ? u : -1 / 0, l.bottom);
    }
  }), r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
var T = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function $n() {
  var n = [], e;
  return {
    captureAnimationState: function() {
      if (n = [], !!this.options.animation) {
        var r = [].slice.call(this.el.children);
        r.forEach(function(i) {
          if (!(m(i, "display") === "none" || i === I.ghost)) {
            n.push({
              target: i,
              rect: Z(i)
            });
            var a = L({}, n[n.length - 1].rect);
            if (i.thisAnimationDuration) {
              var A = ze(i, true);
              A && (a.top -= A.f, a.left -= A.e);
            }
            i.fromRect = a;
          }
        });
      }
    },
    addAnimationState: function(r) {
      n.push(r);
    },
    removeAnimationState: function(r) {
      n.splice(Hn(n, {
        target: r
      }), 1);
    },
    animateAll: function(r) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof r == "function" && r();
        return;
      }
      var a = false, A = 0;
      n.forEach(function(o) {
        var u = 0, l = o.target, s = l.fromRect, d = Z(l), f = l.prevFromRect, E = l.prevToRect, v = o.rect, c = ze(l, true);
        c && (d.top -= c.f, d.left -= c.e), l.toRect = d, l.thisAnimationDuration && it(f, d) && !it(s, d) && // Make sure animatingRect is on line between toRect & fromRect
        (v.top - d.top) / (v.left - d.left) === (s.top - d.top) / (s.left - d.left) && (u = tr(v, f, E, i.options)), it(d, s) || (l.prevFromRect = s, l.prevToRect = d, u || (u = i.options.animation), i.animate(l, v, d, u)), u && (a = true, A = Math.max(A, u), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, u), l.thisAnimationDuration = u);
      }), clearTimeout(e), a ? e = setTimeout(function() {
        typeof r == "function" && r();
      }, A) : typeof r == "function" && r(), n = [];
    },
    animate: function(r, i, a, A) {
      if (A) {
        m(r, "transition", ""), m(r, "transform", "");
        var o = ze(this.el), u = o && o.a, l = o && o.d, s = (i.left - a.left) / (u || 1), d = (i.top - a.top) / (l || 1);
        r.animatingX = !!s, r.animatingY = !!d, m(r, "transform", "translate3d(" + s + "px," + d + "px,0)"), this.forRepaintDummy = er(r), m(r, "transition", "transform " + A + "ms" + (this.options.easing ? " " + this.options.easing : "")), m(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          m(r, "transition", ""), m(r, "transform", ""), r.animated = false, r.animatingX = false, r.animatingY = false;
        }, A);
      }
    }
  };
}
function er(n) {
  return n.offsetWidth;
}
function tr(n, e, t, r) {
  return Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) / Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) * r.animation;
}
var ce = [];
var at = {
  initializeByDefault: true
};
var Ne = {
  mount: function(e) {
    for (var t in at)
      at.hasOwnProperty(t) && !(t in e) && (e[t] = at[t]);
    ce.forEach(function(r) {
      if (r.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), ce.push(e);
  },
  pluginEvent: function(e, t, r) {
    var i = this;
    this.eventCanceled = false, r.cancel = function() {
      i.eventCanceled = true;
    };
    var a = e + "Global";
    ce.forEach(function(A) {
      t[A.pluginName] && (t[A.pluginName][a] && t[A.pluginName][a](L({
        sortable: t
      }, r)), t.options[A.pluginName] && t[A.pluginName][e] && t[A.pluginName][e](L({
        sortable: t
      }, r)));
    });
  },
  initializePlugins: function(e, t, r, i) {
    ce.forEach(function(o) {
      var u = o.pluginName;
      if (!(!e.options[u] && !o.initializeByDefault)) {
        var l = new o(e, t, e.options);
        l.sortable = e, l.options = e.options, e[u] = l, re(r, l.defaults);
      }
    });
    for (var a in e.options)
      if (e.options.hasOwnProperty(a)) {
        var A = this.modifyOption(e, a, e.options[a]);
        typeof A < "u" && (e.options[a] = A);
      }
  },
  getEventProperties: function(e, t) {
    var r = {};
    return ce.forEach(function(i) {
      typeof i.eventProperties == "function" && re(r, i.eventProperties.call(t[i.pluginName], e));
    }), r;
  },
  modifyOption: function(e, t, r) {
    var i;
    return ce.forEach(function(a) {
      e[a.pluginName] && a.optionListeners && typeof a.optionListeners[t] == "function" && (i = a.optionListeners[t].call(e[a.pluginName], r));
    }), i;
  }
};
function nr(n) {
  var e = n.sortable, t = n.rootEl, r = n.name, i = n.targetEl, a = n.cloneEl, A = n.toEl, o = n.fromEl, u = n.oldIndex, l = n.newIndex, s = n.oldDraggableIndex, d = n.newDraggableIndex, f = n.originalEvent, E = n.putSortable, v = n.extraEventProperties;
  if (e = e || t && t[T], !!e) {
    var c, R = e.options, q = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !ie && !Se ? c = new CustomEvent(r, {
      bubbles: true,
      cancelable: true
    }) : (c = document.createEvent("Event"), c.initEvent(r, true, true)), c.to = A || t, c.from = o || t, c.item = i || t, c.clone = a, c.oldIndex = u, c.newIndex = l, c.oldDraggableIndex = s, c.newDraggableIndex = d, c.originalEvent = f, c.pullMode = E ? E.lastPutMode : void 0;
    var y = L(L({}, v), Ne.getEventProperties(r, e));
    for (var W in y)
      c[W] = y[W];
    t && t.dispatchEvent(c), R[q] && R[q].call(e, c);
  }
}
var rr = ["evt"];
var N = function(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = r.evt, a = Gn(r, rr);
  Ne.pluginEvent.bind(I)(e, t, L({
    dragEl: g,
    parentEl: M,
    ghostEl: p,
    rootEl: b,
    nextEl: Ee,
    lastDownEl: Fe,
    cloneEl: C,
    cloneHidden: le,
    dragStarted: ye,
    putSortable: O,
    activeSortable: I.active,
    originalEvent: i,
    oldIndex: pe,
    oldDraggableIndex: ke,
    newIndex: K,
    newDraggableIndex: ue,
    hideGhostForTarget: vn,
    unhideGhostForTarget: En,
    cloneNowHidden: function() {
      le = true;
    },
    cloneNowShown: function() {
      le = false;
    },
    dispatchSortableEvent: function(o) {
      S({
        sortable: t,
        name: o,
        originalEvent: i
      });
    }
  }, a));
};
function S(n) {
  nr(L({
    putSortable: O,
    cloneEl: C,
    targetEl: g,
    rootEl: b,
    oldIndex: pe,
    oldDraggableIndex: ke,
    newIndex: K,
    newDraggableIndex: ue
  }, n));
}
var g;
var M;
var p;
var b;
var Ee;
var Fe;
var C;
var le;
var pe;
var K;
var ke;
var ue;
var We;
var O;
var Ie = false;
var He = false;
var Le = [];
var ge;
var x;
var ot;
var At;
var kt;
var Dt;
var ye;
var me;
var De;
var Ve = false;
var je = false;
var Pe;
var k;
var ut = [];
var ct = false;
var _e = [];
var nt = typeof document < "u";
var Ue = tn;
var Vt = Se || ie ? "cssFloat" : "float";
var ir = nt && !nn && !tn && "draggable" in document.createElement("div");
var sn = function() {
  if (nt) {
    if (ie)
      return false;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
}();
var fn = function(e, t) {
  var r = m(e), i = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), a = be(e, 0, t), A = be(e, 1, t), o = a && m(a), u = A && m(A), l = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + Z(a).width, s = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + Z(A).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (a && o.float && o.float !== "none") {
    var d = o.float === "left" ? "left" : "right";
    return A && (u.clear === "both" || u.clear === d) ? "vertical" : "horizontal";
  }
  return a && (o.display === "block" || o.display === "flex" || o.display === "table" || o.display === "grid" || l >= i && r[Vt] === "none" || A && r[Vt] === "none" && l + s > i) ? "vertical" : "horizontal";
};
var ar = function(e, t, r) {
  var i = r ? e.left : e.top, a = r ? e.right : e.bottom, A = r ? e.width : e.height, o = r ? t.left : t.top, u = r ? t.right : t.bottom, l = r ? t.width : t.height;
  return i === o || a === u || i + A / 2 === o + l / 2;
};
var or = function(e, t) {
  var r;
  return Le.some(function(i) {
    var a = i[T].options.emptyInsertThreshold;
    if (!(!a || Ct(i))) {
      var A = Z(i), o = e >= A.left - a && e <= A.right + a, u = t >= A.top - a && t <= A.bottom + a;
      if (o && u)
        return r = i;
    }
  }), r;
};
var gn = function(e) {
  function t(a, A) {
    return function(o, u, l, s) {
      var d = o.options.group.name && u.options.group.name && o.options.group.name === u.options.group.name;
      if (a == null && (A || d))
        return true;
      if (a == null || a === false)
        return false;
      if (A && a === "clone")
        return a;
      if (typeof a == "function")
        return t(a(o, u, l, s), A)(o, u, l, s);
      var f = (A ? o : u).options.group.name;
      return a === true || typeof a == "string" && a === f || a.join && a.indexOf(f) > -1;
    };
  }
  var r = {}, i = e.group;
  (!i || Ke(i) != "object") && (i = {
    name: i
  }), r.name = i.name, r.checkPull = t(i.pull, true), r.checkPut = t(i.put), r.revertClone = i.revertClone, e.group = r;
};
var vn = function() {
  !sn && p && m(p, "display", "none");
};
var En = function() {
  !sn && p && m(p, "display", "");
};
nt && !nn && document.addEventListener("click", function(n) {
  if (He)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), He = false, false;
}, true);
var ve = function(e) {
  if (g) {
    e = e.touches ? e.touches[0] : e;
    var t = or(e.clientX, e.clientY);
    if (t) {
      var r = {};
      for (var i in e)
        e.hasOwnProperty(i) && (r[i] = e[i]);
      r.target = r.rootEl = t, r.preventDefault = void 0, r.stopPropagation = void 0, t[T]._onDragOver(r);
    }
  }
};
var Ar = function(e) {
  g && g.parentNode[T]._isOutsideThisEl(e.target);
};
function I(n, e) {
  if (!(n && n.nodeType && n.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));
  this.el = n, this.options = e = re({}, e), n[T] = this;
  var t = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(n.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function() {
      return fn(n, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function(A, o) {
      A.setData("Text", o.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: I.supportPointer !== false && "PointerEvent" in window && !Oe,
    emptyInsertThreshold: 5
  };
  Ne.initializePlugins(this, n, t);
  for (var r in t)
    !(r in e) && (e[r] = t[r]);
  gn(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? false : ir, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? z(n, "pointerdown", this._onTapStart) : (z(n, "mousedown", this._onTapStart), z(n, "touchstart", this._onTapStart)), this.nativeDraggable && (z(n, "dragover", this), z(n, "dragenter", this)), Le.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), re(this, $n());
}
I.prototype = /** @lends Sortable.prototype */
{
  constructor: I,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (me = null);
  },
  _getDirection: function(e, t) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, t, g) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var t = this, r = this.el, i = this.options, a = i.preventOnFilter, A = e.type, o = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, u = (o || e).target, l = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || u, s = i.filter;
      if (Er(r), !g && !(/mousedown|pointerdown/.test(A) && e.button !== 0 || i.disabled) && !l.isContentEditable && !(!this.nativeDraggable && Oe && u && u.tagName.toUpperCase() === "SELECT") && (u = G(u, i.draggable, r, false), !(u && u.animated) && Fe !== u)) {
        if (pe = P(u), ke = P(u, i.draggable), typeof s == "function") {
          if (s.call(this, e, u, this)) {
            S({
              sortable: t,
              rootEl: l,
              name: "filter",
              targetEl: u,
              toEl: r,
              fromEl: r
            }), N("filter", t, {
              evt: e
            }), a && e.cancelable && e.preventDefault();
            return;
          }
        } else if (s && (s = s.split(",").some(function(d) {
          if (d = G(l, d.trim(), r, false), d)
            return S({
              sortable: t,
              rootEl: d,
              name: "filter",
              targetEl: u,
              fromEl: r,
              toEl: r
            }), N("filter", t, {
              evt: e
            }), true;
        }), s)) {
          a && e.cancelable && e.preventDefault();
          return;
        }
        i.handle && !G(l, i.handle, r, false) || this._prepareDragStart(e, o, u);
      }
    }
  },
  _prepareDragStart: function(e, t, r) {
    var i = this, a = i.el, A = i.options, o = a.ownerDocument, u;
    if (r && !g && r.parentNode === a) {
      var l = Z(r);
      if (b = a, g = r, M = g.parentNode, Ee = g.nextSibling, Fe = r, We = A.group, I.dragged = g, ge = {
        target: g,
        clientX: (t || e).clientX,
        clientY: (t || e).clientY
      }, kt = ge.clientX - l.left, Dt = ge.clientY - l.top, this._lastX = (t || e).clientX, this._lastY = (t || e).clientY, g.style["will-change"] = "all", u = function() {
        if (N("delayEnded", i, {
          evt: e
        }), I.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !Bt && i.nativeDraggable && (g.draggable = true), i._triggerDragStart(e, t), S({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), w(g, A.chosenClass, true);
      }, A.ignore.split(",").forEach(function(s) {
        on(g, s.trim(), lt);
      }), z(o, "dragover", ve), z(o, "mousemove", ve), z(o, "touchmove", ve), z(o, "mouseup", i._onDrop), z(o, "touchend", i._onDrop), z(o, "touchcancel", i._onDrop), Bt && this.nativeDraggable && (this.options.touchStartThreshold = 4, g.draggable = true), N("delayStart", this, {
        evt: e
      }), A.delay && (!A.delayOnTouchOnly || t) && (!this.nativeDraggable || !(Se || ie))) {
        if (I.eventCanceled) {
          this._onDrop();
          return;
        }
        z(o, "mouseup", i._disableDelayedDrag), z(o, "touchend", i._disableDelayedDrag), z(o, "touchcancel", i._disableDelayedDrag), z(o, "mousemove", i._delayedDragTouchMoveHandler), z(o, "touchmove", i._delayedDragTouchMoveHandler), A.supportPointer && z(o, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(u, A.delay);
      } else
        u();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var t = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    g && lt(g), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    h(e, "mouseup", this._disableDelayedDrag), h(e, "touchend", this._disableDelayedDrag), h(e, "touchcancel", this._disableDelayedDrag), h(e, "mousemove", this._delayedDragTouchMoveHandler), h(e, "touchmove", this._delayedDragTouchMoveHandler), h(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, t) {
    t = t || e.pointerType == "touch" && e, !this.nativeDraggable || t ? this.options.supportPointer ? z(document, "pointermove", this._onTouchMove) : t ? z(document, "touchmove", this._onTouchMove) : z(document, "mousemove", this._onTouchMove) : (z(g, "dragend", this), z(b, "dragstart", this._onDragStart));
    try {
      document.selection ? xe(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, t) {
    if (Ie = false, b && g) {
      N("dragStarted", this, {
        evt: t
      }), this.nativeDraggable && z(document, "dragover", Ar);
      var r = this.options;
      !e && w(g, r.dragClass, false), w(g, r.ghostClass, true), I.active = this, e && this._appendGhost(), S({
        sortable: this,
        name: "start",
        originalEvent: t
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (x) {
      this._lastX = x.clientX, this._lastY = x.clientY, vn();
      for (var e = document.elementFromPoint(x.clientX, x.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(x.clientX, x.clientY), e !== t); )
        t = e;
      if (g.parentNode[T]._isOutsideThisEl(e), t)
        do {
          if (t[T]) {
            var r = void 0;
            if (r = t[T]._onDragOver({
              clientX: x.clientX,
              clientY: x.clientY,
              target: e,
              rootEl: t
            }), r && !this.options.dragoverBubble)
              break;
          }
          e = t;
        } while (t = an(t));
      En();
    }
  },
  _onTouchMove: function(e) {
    if (ge) {
      var t = this.options, r = t.fallbackTolerance, i = t.fallbackOffset, a = e.touches ? e.touches[0] : e, A = p && ze(p, true), o = p && A && A.a, u = p && A && A.d, l = Ue && k && Xt(k), s = (a.clientX - ge.clientX + i.x) / (o || 1) + (l ? l[0] - ut[0] : 0) / (o || 1), d = (a.clientY - ge.clientY + i.y) / (u || 1) + (l ? l[1] - ut[1] : 0) / (u || 1);
      if (!I.active && !Ie) {
        if (r && Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) < r)
          return;
        this._onDragStart(e, true);
      }
      if (p) {
        A ? (A.e += s - (ot || 0), A.f += d - (At || 0)) : A = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: s,
          f: d
        };
        var f = "matrix(".concat(A.a, ",").concat(A.b, ",").concat(A.c, ",").concat(A.d, ",").concat(A.e, ",").concat(A.f, ")");
        m(p, "webkitTransform", f), m(p, "mozTransform", f), m(p, "msTransform", f), m(p, "transform", f), ot = s, At = d, x = a;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!p) {
      var e = this.options.fallbackOnBody ? document.body : b, t = Z(g, true, Ue, true, e), r = this.options;
      if (Ue) {
        for (k = e; m(k, "position") === "static" && m(k, "transform") === "none" && k !== document; )
          k = k.parentNode;
        k !== document.body && k !== document.documentElement ? (k === document && (k = H()), t.top += k.scrollTop, t.left += k.scrollLeft) : k = H(), ut = Xt(k);
      }
      p = g.cloneNode(true), w(p, r.ghostClass, false), w(p, r.fallbackClass, true), w(p, r.dragClass, true), m(p, "transition", ""), m(p, "transform", ""), m(p, "box-sizing", "border-box"), m(p, "margin", 0), m(p, "top", t.top), m(p, "left", t.left), m(p, "width", t.width), m(p, "height", t.height), m(p, "opacity", "0.8"), m(p, "position", Ue ? "absolute" : "fixed"), m(p, "zIndex", "100000"), m(p, "pointerEvents", "none"), I.ghost = p, e.appendChild(p), m(p, "transform-origin", kt / parseInt(p.style.width) * 100 + "% " + Dt / parseInt(p.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, t) {
    var r = this, i = e.dataTransfer, a = r.options;
    if (N("dragStart", this, {
      evt: e
    }), I.eventCanceled) {
      this._onDrop();
      return;
    }
    N("setupClone", this), I.eventCanceled || (C = ln(g), C.removeAttribute("id"), C.draggable = false, C.style["will-change"] = "", this._hideClone(), w(C, this.options.chosenClass, false), I.clone = C), r.cloneId = xe(function() {
      N("clone", r), !I.eventCanceled && (r.options.removeCloneOnHide || b.insertBefore(C, g), r._hideClone(), S({
        sortable: r,
        name: "clone"
      }));
    }), !t && w(g, a.dragClass, true), t ? (He = true, r._loopId = setInterval(r._emulateDragOver, 50)) : (h(document, "mouseup", r._onDrop), h(document, "touchend", r._onDrop), h(document, "touchcancel", r._onDrop), i && (i.effectAllowed = "move", a.setData && a.setData.call(r, i, g)), z(document, "drop", r), m(g, "transform", "translateZ(0)")), Ie = true, r._dragStartId = xe(r._dragStarted.bind(r, t, e)), z(document, "selectstart", r), ye = true, Oe && m(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var t = this.el, r = e.target, i, a, A, o = this.options, u = o.group, l = I.active, s = We === u, d = o.sort, f = O || l, E, v = this, c = false;
    if (ct) return;
    function R(Me, mn) {
      N(Me, v, L({
        evt: e,
        isOwner: s,
        axis: E ? "vertical" : "horizontal",
        revert: A,
        dragRect: i,
        targetRect: a,
        canSort: d,
        fromSortable: f,
        target: r,
        completed: y,
        onMove: function(yt, In) {
          return we(b, t, g, i, yt, Z(yt), e, In);
        },
        changed: W
      }, mn));
    }
    function q() {
      R("dragOverAnimationCapture"), v.captureAnimationState(), v !== f && f.captureAnimationState();
    }
    function y(Me) {
      return R("dragOverCompleted", {
        insertion: Me
      }), Me && (s ? l._hideClone() : l._showClone(v), v !== f && (w(g, O ? O.options.ghostClass : l.options.ghostClass, false), w(g, o.ghostClass, true)), O !== v && v !== I.active ? O = v : v === I.active && O && (O = null), f === v && (v._ignoreWhileAnimating = r), v.animateAll(function() {
        R("dragOverAnimationComplete"), v._ignoreWhileAnimating = null;
      }), v !== f && (f.animateAll(), f._ignoreWhileAnimating = null)), (r === g && !g.animated || r === t && !r.animated) && (me = null), !o.dragoverBubble && !e.rootEl && r !== document && (g.parentNode[T]._isOutsideThisEl(e.target), !Me && ve(e)), !o.dragoverBubble && e.stopPropagation && e.stopPropagation(), c = true;
    }
    function W() {
      K = P(g), ue = P(g, o.draggable), S({
        sortable: v,
        name: "change",
        toEl: t,
        newIndex: K,
        newDraggableIndex: ue,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), r = G(r, o.draggable, t, true), R("dragOver"), I.eventCanceled) return c;
    if (g.contains(e.target) || r.animated && r.animatingX && r.animatingY || v._ignoreWhileAnimating === r)
      return y(false);
    if (He = false, l && !o.disabled && (s ? d || (A = M !== b) : O === this || (this.lastPutMode = We.checkPull(this, l, g, e)) && u.checkPut(this, l, g, e))) {
      if (E = this._getDirection(e, r) === "vertical", i = Z(g), R("dragOverValid"), I.eventCanceled) return c;
      if (A)
        return M = b, q(), this._hideClone(), R("revert"), I.eventCanceled || (Ee ? b.insertBefore(g, Ee) : b.appendChild(g)), y(true);
      var X = Ct(t, o.draggable);
      if (!X || sr(e, E, this) && !X.animated) {
        if (X === g)
          return y(false);
        if (X && t === e.target && (r = X), r && (a = Z(r)), we(b, t, g, i, r, a, e, !!r) !== false)
          return q(), X && X.nextSibling ? t.insertBefore(g, X.nextSibling) : t.appendChild(g), M = t, W(), y(true);
      } else if (X && dr(e, E, this)) {
        var _ = be(t, 0, o, true);
        if (_ === g)
          return y(false);
        if (r = _, a = Z(r), we(b, t, g, i, r, a, e, false) !== false)
          return q(), t.insertBefore(g, _), M = t, W(), y(true);
      } else if (r.parentNode === t) {
        a = Z(r);
        var j = 0, $, ae = g.parentNode !== t, Y = !ar(g.animated && g.toRect || i, r.animated && r.toRect || a, E), oe = E ? "top" : "left", J = Ot(r, "top", "top") || Ot(g, "top", "top"), se = J ? J.scrollTop : void 0;
        me !== r && ($ = a[oe], Ve = false, je = !Y && o.invertSwap || ae), j = fr(e, r, a, E, Y ? 1 : o.swapThreshold, o.invertedSwapThreshold == null ? o.swapThreshold : o.invertedSwapThreshold, je, me === r);
        var U;
        if (j !== 0) {
          var fe = P(g);
          do
            fe -= j, U = M.children[fe];
          while (U && (m(U, "display") === "none" || U === p));
        }
        if (j === 0 || U === r)
          return y(false);
        me = r, De = j;
        var Re = r.nextElementSibling, Ae = false;
        Ae = j === 1;
        var Te = we(b, t, g, i, r, a, e, Ae);
        if (Te !== false)
          return (Te === 1 || Te === -1) && (Ae = Te === 1), ct = true, setTimeout(lr, 30), q(), Ae && !Re ? t.appendChild(g) : r.parentNode.insertBefore(g, Ae ? Re : r), J && un(J, 0, se - J.scrollTop), M = g.parentNode, $ !== void 0 && !je && (Pe = Math.abs($ - Z(r)[oe])), W(), y(true);
      }
      if (t.contains(g))
        return y(false);
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    h(document, "mousemove", this._onTouchMove), h(document, "touchmove", this._onTouchMove), h(document, "pointermove", this._onTouchMove), h(document, "dragover", ve), h(document, "mousemove", ve), h(document, "touchmove", ve);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    h(e, "mouseup", this._onDrop), h(e, "touchend", this._onDrop), h(e, "pointerup", this._onDrop), h(e, "touchcancel", this._onDrop), h(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var t = this.el, r = this.options;
    if (K = P(g), ue = P(g, r.draggable), N("drop", this, {
      evt: e
    }), M = g && g.parentNode, K = P(g), ue = P(g, r.draggable), I.eventCanceled) {
      this._nulling();
      return;
    }
    Ie = false, je = false, Ve = false, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), mt(this.cloneId), mt(this._dragStartId), this.nativeDraggable && (h(document, "drop", this), h(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Oe && m(document.body, "user-select", ""), m(g, "transform", ""), e && (ye && (e.cancelable && e.preventDefault(), !r.dropBubble && e.stopPropagation()), p && p.parentNode && p.parentNode.removeChild(p), (b === M || O && O.lastPutMode !== "clone") && C && C.parentNode && C.parentNode.removeChild(C), g && (this.nativeDraggable && h(g, "dragend", this), lt(g), g.style["will-change"] = "", ye && !Ie && w(g, O ? O.options.ghostClass : this.options.ghostClass, false), w(g, this.options.chosenClass, false), S({
      sortable: this,
      name: "unchoose",
      toEl: M,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), b !== M ? (K >= 0 && (S({
      rootEl: M,
      name: "add",
      toEl: M,
      fromEl: b,
      originalEvent: e
    }), S({
      sortable: this,
      name: "remove",
      toEl: M,
      originalEvent: e
    }), S({
      rootEl: M,
      name: "sort",
      toEl: M,
      fromEl: b,
      originalEvent: e
    }), S({
      sortable: this,
      name: "sort",
      toEl: M,
      originalEvent: e
    })), O && O.save()) : K !== pe && K >= 0 && (S({
      sortable: this,
      name: "update",
      toEl: M,
      originalEvent: e
    }), S({
      sortable: this,
      name: "sort",
      toEl: M,
      originalEvent: e
    })), I.active && ((K == null || K === -1) && (K = pe, ue = ke), S({
      sortable: this,
      name: "end",
      toEl: M,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    N("nulling", this), b = g = M = p = Ee = C = Fe = le = ge = x = ye = K = ue = pe = ke = me = De = O = We = I.dragged = I.ghost = I.clone = I.active = null, _e.forEach(function(e) {
      e.checked = true;
    }), _e.length = ot = At = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        g && (this._onDragOver(e), ur(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var e = [], t, r = this.el.children, i = 0, a = r.length, A = this.options; i < a; i++)
      t = r[i], G(t, A.draggable, this.el, false) && e.push(t.getAttribute(A.dataIdAttr) || vr(t));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, t) {
    var r = {}, i = this.el;
    this.toArray().forEach(function(a, A) {
      var o = i.children[A];
      G(o, this.options.draggable, i, false) && (r[a] = o);
    }, this), t && this.captureAnimationState(), e.forEach(function(a) {
      r[a] && (i.removeChild(r[a]), i.appendChild(r[a]));
    }), t && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(e, t) {
    return G(e, t || this.options.draggable, this.el, false);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, t) {
    var r = this.options;
    if (t === void 0)
      return r[e];
    var i = Ne.modifyOption(this, e, t);
    typeof i < "u" ? r[e] = i : r[e] = t, e === "group" && gn(r);
  },
  /**
   * Destroy
   */
  destroy: function() {
    N("destroy", this);
    var e = this.el;
    e[T] = null, h(e, "mousedown", this._onTapStart), h(e, "touchstart", this._onTapStart), h(e, "pointerdown", this._onTapStart), this.nativeDraggable && (h(e, "dragover", this), h(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(t) {
      t.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Le.splice(Le.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!le) {
      if (N("hideClone", this), I.eventCanceled) return;
      m(C, "display", "none"), this.options.removeCloneOnHide && C.parentNode && C.parentNode.removeChild(C), le = true;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (le) {
      if (N("showClone", this), I.eventCanceled) return;
      g.parentNode == b && !this.options.group.revertClone ? b.insertBefore(C, g) : Ee ? b.insertBefore(C, Ee) : b.appendChild(C), this.options.group.revertClone && this.animate(g, C), m(C, "display", ""), le = false;
    }
  }
};
function ur(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function we(n, e, t, r, i, a, A, o) {
  var u, l = n[T], s = l.options.onMove, d;
  return window.CustomEvent && !ie && !Se ? u = new CustomEvent("move", {
    bubbles: true,
    cancelable: true
  }) : (u = document.createEvent("Event"), u.initEvent("move", true, true)), u.to = e, u.from = n, u.dragged = t, u.draggedRect = r, u.related = i || e, u.relatedRect = a || Z(e), u.willInsertAfter = o, u.originalEvent = A, n.dispatchEvent(u), s && (d = s.call(l, u, A)), d;
}
function lt(n) {
  n.draggable = false;
}
function lr() {
  ct = false;
}
function dr(n, e, t) {
  var r = Z(be(t.el, 0, t.options, true)), i = dn(t.el, t.options, p), a = 10;
  return e ? n.clientX < i.left - a || n.clientY < r.top && n.clientX < r.right : n.clientY < i.top - a || n.clientY < r.bottom && n.clientX < r.left;
}
function sr(n, e, t) {
  var r = Z(Ct(t.el, t.options.draggable)), i = dn(t.el, t.options, p), a = 10;
  return e ? n.clientX > i.right + a || n.clientY > r.bottom && n.clientX > r.left : n.clientY > i.bottom + a || n.clientX > r.right && n.clientY > r.top;
}
function fr(n, e, t, r, i, a, A, o) {
  var u = r ? n.clientY : n.clientX, l = r ? t.height : t.width, s = r ? t.top : t.left, d = r ? t.bottom : t.right, f = false;
  if (!A) {
    if (o && Pe < l * i) {
      if (!Ve && (De === 1 ? u > s + l * a / 2 : u < d - l * a / 2) && (Ve = true), Ve)
        f = true;
      else if (De === 1 ? u < s + Pe : u > d - Pe)
        return -De;
    } else if (u > s + l * (1 - i) / 2 && u < d - l * (1 - i) / 2)
      return gr(e);
  }
  return f = f || A, f && (u < s + l * a / 2 || u > d - l * a / 2) ? u > s + l / 2 ? 1 : -1 : 0;
}
function gr(n) {
  return P(g) < P(n) ? 1 : -1;
}
function vr(n) {
  for (var e = n.tagName + n.className + n.src + n.href + n.textContent, t = e.length, r = 0; t--; )
    r += e.charCodeAt(t);
  return r.toString(36);
}
function Er(n) {
  _e.length = 0;
  for (var e = n.getElementsByTagName("input"), t = e.length; t--; ) {
    var r = e[t];
    r.checked && _e.push(r);
  }
}
function xe(n) {
  return setTimeout(n, 0);
}
function mt(n) {
  return clearTimeout(n);
}
nt && z(document, "touchmove", function(n) {
  (I.active || Ie) && n.cancelable && n.preventDefault();
});
I.utils = {
  on: z,
  off: h,
  css: m,
  find: on,
  is: function(e, t) {
    return !!G(e, t, e, false);
  },
  extend: Ln,
  throttle: An,
  closest: G,
  toggleClass: w,
  clone: ln,
  index: P,
  nextTick: xe,
  cancelNextTick: mt,
  detectDirection: fn,
  getChild: be,
  expando: T
};
I.get = function(n) {
  return n[T];
};
I.mount = function() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (I.utils = L(L({}, I.utils), r.utils)), Ne.mount(r);
  });
};
I.create = function(n, e) {
  return new I(n, e);
};
I.version = Jn;
var Q = [];
var Qe;
var It;
var pt = false;
var dt;
var st;
var $e;
var Ze;
function cr() {
  function n() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };
    for (var e in this)
      e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
  }
  return n.prototype = {
    dragStarted: function(t) {
      var r = t.originalEvent;
      this.sortable.nativeDraggable ? z(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? z(document, "pointermove", this._handleFallbackAutoScroll) : r.touches ? z(document, "touchmove", this._handleFallbackAutoScroll) : z(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(t) {
      var r = t.originalEvent;
      !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r);
    },
    drop: function() {
      this.sortable.nativeDraggable ? h(document, "dragover", this._handleAutoScroll) : (h(document, "pointermove", this._handleFallbackAutoScroll), h(document, "touchmove", this._handleFallbackAutoScroll), h(document, "mousemove", this._handleFallbackAutoScroll)), Yt(), Ge(), _n();
    },
    nulling: function() {
      $e = It = Qe = pt = Ze = dt = st = null, Q.length = 0;
    },
    _handleFallbackAutoScroll: function(t) {
      this._handleAutoScroll(t, true);
    },
    _handleAutoScroll: function(t, r) {
      var i = this, a = (t.touches ? t.touches[0] : t).clientX, A = (t.touches ? t.touches[0] : t).clientY, o = document.elementFromPoint(a, A);
      if ($e = t, r || this.options.forceAutoScrollFallback || Se || ie || Oe) {
        ft(t, this.options, o, r);
        var u = de(o, true);
        pt && (!Ze || a !== dt || A !== st) && (Ze && Yt(), Ze = setInterval(function() {
          var l = de(document.elementFromPoint(a, A), true);
          l !== u && (u = l, Ge()), ft(t, i.options, l, r);
        }, 10), dt = a, st = A);
      } else {
        if (!this.options.bubbleScroll || de(o, true) === H()) {
          Ge();
          return;
        }
        ft(t, this.options, de(o, false), false);
      }
    }
  }, re(n, {
    pluginName: "scroll",
    initializeByDefault: true
  });
}
function Ge() {
  Q.forEach(function(n) {
    clearInterval(n.pid);
  }), Q = [];
}
function Yt() {
  clearInterval(Ze);
}
var ft = An(function(n, e, t, r) {
  if (e.scroll) {
    var i = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, A = e.scrollSensitivity, o = e.scrollSpeed, u = H(), l = false, s;
    It !== t && (It = t, Ge(), Qe = e.scroll, s = e.scrollFn, Qe === true && (Qe = de(t, true)));
    var d = 0, f = Qe;
    do {
      var E = f, v = Z(E), c = v.top, R = v.bottom, q = v.left, y = v.right, W = v.width, X = v.height, _ = void 0, j = void 0, $ = E.scrollWidth, ae = E.scrollHeight, Y = m(E), oe = E.scrollLeft, J = E.scrollTop;
      E === u ? (_ = W < $ && (Y.overflowX === "auto" || Y.overflowX === "scroll" || Y.overflowX === "visible"), j = X < ae && (Y.overflowY === "auto" || Y.overflowY === "scroll" || Y.overflowY === "visible")) : (_ = W < $ && (Y.overflowX === "auto" || Y.overflowX === "scroll"), j = X < ae && (Y.overflowY === "auto" || Y.overflowY === "scroll"));
      var se = _ && (Math.abs(y - i) <= A && oe + W < $) - (Math.abs(q - i) <= A && !!oe), U = j && (Math.abs(R - a) <= A && J + X < ae) - (Math.abs(c - a) <= A && !!J);
      if (!Q[d])
        for (var fe = 0; fe <= d; fe++)
          Q[fe] || (Q[fe] = {});
      (Q[d].vx != se || Q[d].vy != U || Q[d].el !== E) && (Q[d].el = E, Q[d].vx = se, Q[d].vy = U, clearInterval(Q[d].pid), (se != 0 || U != 0) && (l = true, Q[d].pid = setInterval((function() {
        r && this.layer === 0 && I.active._onTouchMove($e);
        var Re = Q[this.layer].vy ? Q[this.layer].vy * o : 0, Ae = Q[this.layer].vx ? Q[this.layer].vx * o : 0;
        typeof s == "function" && s.call(I.dragged.parentNode[T], Ae, Re, n, $e, Q[this.layer].el) !== "continue" || un(Q[this.layer].el, Ae, Re);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (e.bubbleScroll && f !== u && (f = de(f, false)));
    pt = l;
  }
}, 30);
var cn = function(e) {
  var t = e.originalEvent, r = e.putSortable, i = e.dragEl, a = e.activeSortable, A = e.dispatchSortableEvent, o = e.hideGhostForTarget, u = e.unhideGhostForTarget;
  if (t) {
    var l = r || a;
    o();
    var s = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, d = document.elementFromPoint(s.clientX, s.clientY);
    u(), l && !l.el.contains(d) && (A("spill"), this.onSpill({
      dragEl: i,
      putSortable: r
    }));
  }
};
function Rt() {
}
Rt.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var t = e.oldDraggableIndex;
    this.startIndex = t;
  },
  onSpill: function(e) {
    var t = e.dragEl, r = e.putSortable;
    this.sortable.captureAnimationState(), r && r.captureAnimationState();
    var i = be(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(t, i) : this.sortable.el.appendChild(t), this.sortable.animateAll(), r && r.animateAll();
  },
  drop: cn
};
re(Rt, {
  pluginName: "revertOnSpill"
});
function Mt() {
}
Mt.prototype = {
  onSpill: function(e) {
    var t = e.dragEl, r = e.putSortable, i = r || this.sortable;
    i.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), i.animateAll();
  },
  drop: cn
};
re(Mt, {
  pluginName: "removeOnSpill"
});
I.mount(new cr());
I.mount(Mt, Rt);
var mr = defineComponent({
  __name: "Sortable",
  props: {
    /** All SortableJS options are supported; events are handled by the `defineEmits` below and should be used with v-on */
    options: {
      type: Object,
      default: null,
      required: false
    },
    /** Your list of items **/
    list: {
      type: [Array, Object],
      default: [],
      required: true
    },
    /** The name of the key present in each item in the list that corresponds to a unique value. */
    itemKey: {
      type: [String, Function],
      default: "",
      required: true
    },
    /** The element type to render as. */
    tag: {
      type: String,
      default: "div",
      required: false
    }
  },
  emits: ["choose", "unchoose", "start", "end", "add", "update", "sort", "remove", "filter", "move", "clone", "change"],
  setup(n, { expose: e, emit: t }) {
    const r = n, i = t, a = useAttrs(), A = ref(false), o = ref(null), u = ref(null), l = computed(() => typeof r.itemKey == "string" ? (s) => s[r.itemKey] : r.itemKey);
    return e({
      containerRef: o,
      sortable: u,
      isDragging: A
    }), watch(o, (s) => {
      s && (u.value = new I(s, {
        ...r.options,
        onChoose: (d) => i("choose", d),
        onUnchoose: (d) => i("unchoose", d),
        onStart: (d) => {
          A.value = true, i("start", d);
        },
        onEnd: (d) => {
          setTimeout(() => {
            A.value = false, i("end", d);
          });
        },
        onAdd: (d) => i("add", d),
        onUpdate: (d) => i("update", d),
        onSort: (d) => i("sort", d),
        onRemove: (d) => i("remove", d),
        onFilter: (d) => i("filter", d),
        // See https://github.com/MaxLeiter/sortablejs-vue3/pull/56 for context on `attrs`.
        onMove: (d, f) => "onMoveCapture" in a ? (
          /**  eslint-disable-next-line */
          a.onMoveCapture(d, f)
        ) : i("move", d, f),
        onClone: (d) => i("clone", d),
        onChange: (d) => i("change", d)
      }));
    }), watch(
      () => r.options,
      (s) => {
        if (s && (u != null && u.value))
          for (const d in s)
            u.value.option(
              d,
              s[d]
            );
      }
    ), onUnmounted(() => {
      u.value && (u.value.destroy(), o.value = null, u.value = null);
    }), (s, d) => (openBlock(), createBlock(resolveDynamicComponent(s.$props.tag), {
      ref_key: "containerRef",
      ref: o,
      class: normalizeClass(s.$props.class)
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "header"),
        (openBlock(true), createElementBlock(Fragment, null, renderList(n.list, (f, E) => renderSlot(s.$slots, "item", {
          key: l.value(f),
          element: f,
          index: E
        })), 128)),
        renderSlot(s.$slots, "footer")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
var Ir = { class: "vue-kanban-header" };
var pr = defineComponent({
  __name: "UKanbanHeader",
  props: {
    column: {}
  },
  setup(n) {
    return (e, t) => (openBlock(), createElementBlock("div", Ir, [
      createBaseVNode("h3", null, toDisplayString(e.column.status), 1)
    ]));
  }
});
var hr = { class: "vue-kanban-item" };
var zr = { key: 0 };
var br = defineComponent({
  __name: "UKanbanItem",
  props: {
    element: {}
  },
  setup(n) {
    return (e, t) => (openBlock(), createElementBlock("div", hr, [
      createBaseVNode("div", null, toDisplayString(e.element.id), 1),
      e.element.value ? (openBlock(), createElementBlock("div", zr, toDisplayString(e.element.value), 1)) : createCommentVNode("", true)
    ]));
  }
});
function Cr(n, e) {
  const t = ref(0);
  function r(A, o, u) {
    A.splice(u, 0, o);
  }
  function i(A, o) {
    return A.splice(o, 1);
  }
  function a(A) {
    const o = {
      elemIndexFrom: A.oldIndex,
      elemIndexTo: A.newIndex,
      columnIndexFrom: void 0,
      columnIndexTo: void 0,
      dataSet: n
    };
    if (A.from.dataset.indexColumn && A.to.dataset.indexColumn) {
      o.columnIndexFrom = parseInt(A.from.dataset.indexColumn), o.columnIndexTo = parseInt(A.to.dataset.indexColumn);
      const u = n.columns[o.columnIndexFrom], l = n.columns[o.columnIndexTo];
      if (o.elemIndexFrom !== void 0 && o.elemIndexTo !== void 0) {
        const s = i(u.items, o.elemIndexFrom);
        r(l.items, s[0], o.elemIndexTo), o.dataSet = n, t.value++;
      }
    }
    e("update", o);
  }
  return {
    addElem: r,
    removeElem: i,
    updateData: a,
    refreshKey: t
  };
}
var Rr = defineComponent({
  __name: "UKanban",
  props: {
    columns: {},
    options: {}
  },
  emits: ["update"],
  setup(n, { emit: e }) {
    const t = n, r = e, { updateData: i, refreshKey: a } = Cr(t, r), A = ref();
    return (o, u) => (openBlock(), createElementBlock("div", {
      key: unref(a),
      ref_key: "kanbanRef",
      ref: A,
      class: "vue-kanban"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(t.columns, (l, s, d) => (openBlock(), createElementBlock("div", {
        key: d,
        class: "vue-kanban-column"
      }, [
        o.$.slots.header ? renderSlot(o.$slots, "header", {
          key: 0,
          column: l
        }) : (openBlock(), createBlock(pr, {
          key: 1,
          column: l
        }, null, 8, ["column"])),
        createVNode(unref(mr), {
          ref_for: true,
          ref: "sortable",
          class: "vue-kanban-list",
          "data-index-column": s,
          list: l.items,
          "item-key": "id",
          group: "shared",
          options: o.options,
          onEnd: unref(i)
        }, {
          item: withCtx(({ element: f }) => [
            o.$.slots.item ? renderSlot(o.$slots, "item", {
              key: 0,
              elem: f
            }) : (openBlock(), createBlock(br, {
              key: 1,
              element: f
            }, null, 8, ["element"]))
          ]),
          _: 2
        }, 1032, ["data-index-column", "list", "options", "onEnd"]),
        o.$.slots.footer ? renderSlot(o.$slots, "footer", {
          key: 2,
          column: l
        }) : createCommentVNode("", true)
      ]))), 128))
    ]));
  }
});
var Mr = { class: "wrapp" };
var yr = { class: "app-card" };
var Qr = { class: "app-card-header" };
var Zr = { class: "app-card-task" };
var Br = { class: "app-card-bottom" };
var qr = { class: "app-card-footer" };
var Or = { class: "app-card-branch" };
var Xr = ["src"];
var Vr = defineComponent({
  __name: "DemoKanban",
  setup(n) {
    const e = new Wt.LoremIpsum();
    function t(a, A) {
      const o = reactive([]);
      let u = 1, l = 1;
      for (let s = 0; s < a; s++) {
        const d = [];
        for (let f = 0; f < A; f++)
          d.push({
            id: u,
            avatar: Wn[0],
            priority: "High",
            branch: `TT-${u}-task-${u}`,
            title: `Task-${u}`,
            task: e.generateSentences(Math.floor(Math.random()) + 1)
          }), u++;
        o.push({
          status: `Column-${l}`,
          items: d
        }), l++;
      }
      return o;
    }
    const r = computed(() => ({
      group: { name: "group" },
      animation: 300,
      swapThreshold: 1,
      forceFallback: true
    }));
    function i(a) {
      console.info("update", a);
    }
    return (a, A) => (openBlock(), createElementBlock("div", Mr, [
      createVNode(Rr, {
        columns: t(5, 3),
        options: r.value,
        onUpdate: i
      }, {
        item: withCtx(({ elem: o }) => [
          (openBlock(), createElementBlock("div", {
            key: o.id,
            class: "draggable"
          }, [
            createBaseVNode("div", yr, [
              createBaseVNode("div", Qr, [
                createBaseVNode("h4", null, toDisplayString(o.title), 1),
                createBaseVNode("div", Zr, toDisplayString(o.task), 1)
              ]),
              createBaseVNode("div", Br, [
                createVNode(Fn, {
                  priority: o.priority
                }, null, 8, ["priority"]),
                createBaseVNode("div", qr, [
                  createBaseVNode("div", Or, toDisplayString(o.branch), 1),
                  createBaseVNode("img", {
                    class: "app-card-avatar",
                    src: o.avatar,
                    alt: ""
                  }, null, 8, Xr)
                ])
              ])
            ])
          ]))
        ]),
        _: 1
      }, 8, ["columns", "options"])
    ]));
  }
});
export {
  Vr as DemoKanban,
  Rr as UKanban,
  pr as UKanbanHeader
};
/*! Bundled license information:

@rs_scope/vue-kanban/dist/vue-kanban.es.js:
  (**!
   * Sortable 1.15.3
   * @author	RubaXa   <trash@rubaxa.org>
   * @author	owenm    <owen23355@gmail.com>
   * @license MIT
   *)
*/
//# sourceMappingURL=@rs_scope_vue-kanban.js.map
